param(
    [string]$Message,
    [switch]$AddAll
)

Write-Host "Setting local git config core.autocrlf=false"
git config core.autocrlf false

if (Test-Path ".gitattributes") {
    git add .gitattributes
}

Write-Host "Pre-renormalizing tracked files according to .gitattributes (reduces CRLF/LF warnings)..."
git add --renormalize .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Pre-renormalize failed (continuing)." -ForegroundColor Yellow
} else {
    Write-Host "Pre-renormalize staged changes for tracked files." -ForegroundColor Green
}

function Abort([string]$msg){
    Write-Host $msg -ForegroundColor Red
    exit 1
}

function Prompt-YesNo([string]$prompt) {
    $r = Read-Host "$prompt (y/n)"
    return $r.ToLower().StartsWith('y')
}

Write-Host "Detecting deleted/missing tracked files..."
$deleted = git ls-files -d 2>$null
if ($deleted) {
    $files = $deleted -split "`n" | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne '' }
    Write-Host "The following tracked files are deleted/missing from the working tree:`n"
    $files | ForEach-Object { Write-Host " - $_" }
    Write-Host "Choose action for these files:"
    Write-Host "  r = restore from HEAD (checkout)"
    Write-Host "  d = remove from index (stop tracking)"
    Write-Host "  a = abort script"
    $choice = Read-Host "Action (r/d/a)"
    switch ($choice.ToLower()) {
        'r' {
            foreach ($f in $files) {
                Write-Host "Restoring $f from HEAD"
                git checkout -- -- $f
            }
        }
        'd' {
            foreach ($f in $files) {
                Write-Host "Removing $f from index"
                git rm --cached --ignore-unmatch -- $f 2>$null
            }
        }
        default {
            Abort "Aborted by user. Resolve missing files and re-run the script."
        }
    }
}

Write-Host "Gathering untracked files..."
# Use porcelain status to reliably detect untracked (??) and ignored (!!) entries
$porcelain = git status --porcelain 2>$null
$untracked = @()
$ignored = @()
if ($porcelain) {
    $lines = $porcelain -split "`n"
    foreach ($line in $lines) {
        $l = $line.Trim()
        if ($l.Length -lt 3) { continue }
        $prefix = $l.Substring(0,2)
        $path = $l.Substring(3).Trim()
        switch ($prefix) {
            '??' { $untracked += $path }
            '!!' { $ignored += $path }
        }
    }
}

if (-not $untracked -and -not $ignored) {
    Write-Host "No untracked files found." -ForegroundColor Green
} else {
    if ($untracked) {
        Write-Host "Untracked files (not ignored):"
        $i = 1
        $untracked | ForEach-Object { Write-Host "[$i] $_"; $i++ }
    }
    if ($ignored) {
        Write-Host "Ignored/untracked files (match .gitignore):" -ForegroundColor Yellow
        $ignored | ForEach-Object { Write-Host " - $_" }
    }

    if ($AddAll) {
        $doAdd = $true
    } else {
        $opt = Read-Host "Add all untracked files, select specific, or skip? (all/select/skip)"
        switch ($opt.ToLower()) {
            'all' { $doAdd = $true }
            'select' { $doAdd = $false; $select = $true }
            default { $doAdd = $false; $select = $false }
        }
    }

    if ($doAdd) {
        if ($ignored) {
            Write-Host "Warning: some untracked files are ignored by .gitignore:" -ForegroundColor Yellow
            $ignored | ForEach-Object { Write-Host " - $_" }
            if (-not (Prompt-YesNo "Proceed to add all untracked files anyway?")) {
                Write-Host "Skipping adding untracked files." -ForegroundColor Cyan
            } else {
                Write-Host "Adding all untracked files..."
                git add .
            }
        } else {
            Write-Host "Adding all untracked files..."
            git add .
        }
    } elseif ($select) {
        if (-not $untracked) { Write-Host "No selectable untracked files." }
        else {
            $numbers = Read-Host "Enter comma-separated numbers to add (e.g. 1,3,4)"
            $nums = $numbers -split ',' | ForEach-Object { $_.Trim() } | Where-Object { $_ -match '^[0-9]+$' }
            $toAdd = @()
            foreach ($n in $nums) {
                $idx = [int]$n - 1
                if ($idx -ge 0 -and $idx -lt $untracked.Count) { $toAdd += $untracked[$idx] }
            }
            if ($toAdd.Count -gt 0) {
                # warn if any selected are in ignored list
                $bad = $toAdd | Where-Object { $ignored -contains $_ }
                if ($bad) {
                    Write-Host "Warning: selected files match .gitignore:" -ForegroundColor Yellow
                    $bad | ForEach-Object { Write-Host " - $_" }
                    if (-not (Prompt-YesNo "Proceed to add these files anyway?")) {
                        Write-Host "Skipping selected additions." -ForegroundColor Cyan
                    } else {
                        git add -- $toAdd
                    }
                } else {
                    git add -- $toAdd
                }
            } else {
                Write-Host "No valid selections parsed." -ForegroundColor Yellow
            }
        }
    } else {
        Write-Host "No untracked files will be added." -ForegroundColor Cyan
    }
}

Write-Host "(Skipping additional renormalize — pre-renormalize already ran.)"

if (-not $Message -or $Message.Trim().Length -eq 0) {
    $Message = Read-Host "Enter commit message"
}

if (-not $Message -or $Message.Trim().Length -eq 0) {
    Abort "Empty commit message. Aborting."
}

Write-Host "Committing changes..."
git commit -m "$Message"
if ($LASTEXITCODE -ne 0) {
    Write-Host "No commit was created (maybe no changes staged)." -ForegroundColor Yellow
} else {
    Write-Host "Commit created." -ForegroundColor Green
    if (Prompt-YesNo "Push to remote now?") {
        git push
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Push failed. Check remote and network." -ForegroundColor Red
        } else {
            Write-Host "Pushed successfully." -ForegroundColor Green
        }
    }
}

Write-Host "Done." -ForegroundColor Cyan
