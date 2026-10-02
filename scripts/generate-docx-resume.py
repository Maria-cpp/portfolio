"""Generate an editable CV from the same source as the public PDF."""
from pathlib import Path
from docx import Document
from docx.shared import Inches, Pt

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resumes" / "Maria_Naseem_AI_Engineer.docx"


def main():
    document = Document()
    section = document.sections[0]
    section.top_margin = section.bottom_margin = Inches(0.6)
    document.styles["Normal"].font.name = "Calibri"
    document.styles["Normal"].font.size = Pt(11)
    document.styles["Normal"].paragraph_format.space_after = Pt(4)
    for line in (ROOT / "cv-content.md").read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        if line == "MARIA NASEEM":
            document.add_heading(line, 0)
        elif line.isupper() and not line.startswith("▸"):
            document.add_heading(line, 1)
        elif line.startswith("▸ "):
            document.add_paragraph(line[2:], style="List Bullet")
        else:
            paragraph = document.add_paragraph(line.replace("\t", " | "))
            if "\t" in line:
                paragraph.runs[0].bold = True
                paragraph.paragraph_format.keep_with_next = True
    document.core_properties.title = "Maria Naseem | AI Engineer | Applied AI for Enterprise Workflows"
    document.core_properties.author = "Maria Naseem"
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    document.save(OUTPUT)
    print(f"Generated {OUTPUT.name}")


if __name__ == "__main__":
    main()
