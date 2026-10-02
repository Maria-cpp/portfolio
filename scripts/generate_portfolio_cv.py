"""Generate the linked, text-searchable public CV from cv-content.md."""
from pathlib import Path
import pymupdf as fitz

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "cv-content.md"
OUTPUT = ROOT / "public" / "Maria_Naseem_CV.pdf"
IDENTITY = "AI Engineer | Applied AI for Enterprise Workflows"
SECTIONS = {"PROFESSIONAL SUMMARY", "TECHNICAL SKILLS", "PROFESSIONAL EXPERIENCE", "SELECTED WORK & PUBLIC EVIDENCE", "CERTIFICATIONS & EDUCATION"}
LINKS = {
    "LinkedIn": "https://www.linkedin.com/in/maria-naseem/",
    "GitHub": "https://github.com/Maria-cpp",
    "Portfolio": "https://maria-ai-portfolio.vercel.app",
    "marianaseem99@gmail.com": "mailto:marianaseem99@gmail.com",
    "https://github.com/Maria-cpp/Agentic-Observability-Platform": "https://github.com/Maria-cpp/Agentic-Observability-Platform",
}
WIDTH, HEIGHT = 595, 842
MARGIN = 44
SIZE, LEADING = 10, 13


def clean(value):
    return (value.replace("▸", "•").replace("—", "-").replace("–", "-")
            .replace("→", "->").replace("’", "'"))


def wrap(value, font, size, width):
    rows, row = [], ""
    for word in value.split():
        candidate = (row + " " + word).strip()
        if row and fitz.get_text_length(candidate, fontname=font, fontsize=size) > width:
            rows.append(row)
            row = word
        else:
            row = candidate
    return rows + ([row] if row else [])


def main():
    doc = fitz.open()
    page = doc.new_page(width=WIDTH, height=HEIGHT)
    y = MARGIN
    lines = SOURCE.read_text(encoding="utf-8").splitlines()
    for line in lines:
        line = clean(line.strip())
        if not line:
            y += 5
            continue
        section = line in SECTIONS
        role = "\t" in line
        bullet = line.startswith("• ")
        name = line == "MARIA NASEEM"
        font = "hebo" if section or role or name or line == IDENTITY else "helv"
        size = 21 if name else (10.5 if section else SIZE)
        indent = 12 if bullet else 0
        # Draw the bullet separately so wrapped rows retain a readable hanging indent.
        value = line[2:] if bullet else line
        if role:
            title, dates = value.split("\t", 1)
            rows = wrap(title, font, size, WIDTH - 2 * MARGIN) + [dates]
        else:
            rows = wrap(value, font, size, WIDTH - 2 * MARGIN - indent)
        leading = 26 if name else LEADING
        required = len(rows) * leading + (55 if section or role else 0)
        if y + required > HEIGHT - MARGIN:
            page = doc.new_page(width=WIDTH, height=HEIGHT)
            y = MARGIN
        if section:
            y += 7
            page.draw_line((MARGIN, y), (WIDTH-MARGIN, y), color=(0.8,0.85,0.88), width=0.6)
            y += 5
        for index, row in enumerate(rows):
            y += leading
            if bullet and index == 0:
                page.insert_text((MARGIN, y), "-", fontname="helv", fontsize=SIZE)
            page.insert_text((MARGIN+indent, y), row, fontname=font, fontsize=size,
                             color=(0.07,0.38,0.48) if section else (0.12,0.16,0.20))
        y += 3 if section or role else 1
    for number, current in enumerate(doc, 1):
        current.insert_text((MARGIN, HEIGHT-22), "Maria Naseem | AI Engineer", fontsize=8, color=(0.4,0.44,0.48))
        current.insert_text((WIDTH-MARGIN-30, HEIGHT-22), f"{number}/{len(doc)}", fontsize=8)
        for label, uri in LINKS.items():
            matches = current.search_for(label)
            if label in {"LinkedIn", "GitHub", "Portfolio"}:
                matches = matches[:1] if number == 1 else []
            for rect in matches:
                current.insert_link({"kind": fitz.LINK_URI, "from": rect, "uri": uri})
    doc.set_metadata({"title": "Maria Naseem | " + IDENTITY, "author": "Maria Naseem", "subject": "AI engineering CV"})
    doc.save(OUTPUT, garbage=4, deflate=True)
    print(f"Generated {OUTPUT.name}: {len(doc)} pages")
    doc.close()


if __name__ == "__main__":
    main()
