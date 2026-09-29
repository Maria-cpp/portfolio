"""Build the public CV PDF from the anonymized cv-content.md source."""
from pathlib import Path
import textwrap

import fitz

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "cv-content.md"
OUTPUT = ROOT / "public" / "Maria_Naseem_CV.sanitized.pdf"
PAGE = (595, 842)
LEFT, RIGHT, TOP, BOTTOM = 48, 48, 48, 48
BLUE = (0.08, 0.55, 0.67)

def clean(value: str) -> str:
    return (value.replace("▸", "•").replace("→", "->").replace("·", " | ")
            .replace("—", " - ").replace("–", "-").replace("’", "'")
            .replace("“", '"').replace("”", '"').replace("…", "..."))

lines = [clean(line.strip()) for line in SOURCE.read_text(encoding="utf-8").splitlines()]
document = fitz.open()
page = document.new_page(width=PAGE[0], height=PAGE[1])
y = TOP
section_names = {"PROFESSIONAL SUMMARY", "TECHNICAL SKILLS", "PROFESSIONAL EXPERIENCE", "KEY PROJECTS & OPEN SOURCE", "CERTIFICATIONS & EDUCATION"}

def new_page() -> None:
    global page, y
    page = document.new_page(width=PAGE[0], height=PAGE[1])
    y = TOP

for line in lines:
    if not line:
        y += 4
        continue
    if line == "MARIA NASEEM":
        page.insert_text((LEFT, y + 20), line, fontname="hebo", fontsize=20, color=(0.04, 0.08, 0.14))
        y += 27
        continue
    if line in section_names:
        if y > PAGE[1] - BOTTOM - 45:
            new_page()
        y += 8
        page.draw_line((LEFT, y), (PAGE[0] - RIGHT, y), color=(0.82, 0.86, 0.89), width=0.7)
        y += 17
        page.insert_text((LEFT, y), line, fontname="hebo", fontsize=10, color=BLUE)
        y += 15
        continue
    is_bullet = line.startswith("• ")
    is_role = "\t" in line
    size = 8.4 if is_bullet else 9
    indent = 12 if is_bullet else 0
    normalized = line.replace("\t", " | ")
    wrapped = textwrap.wrap(normalized, width=105 if not is_bullet else 100,
                            subsequent_indent="   " if is_bullet else "",
                            break_long_words=False, break_on_hyphens=False) or [normalized]
    height = len(wrapped) * (size + 3) + (3 if is_role else 1)
    if y + height > PAGE[1] - BOTTOM:
        new_page()
    color = (0.13, 0.17, 0.21) if not is_bullet else (0.20, 0.23, 0.27)
    font = "hebo" if is_role else "helv"
    for row in wrapped:
        y += size + 2
        page.insert_text((LEFT + indent, y), row, fontname=font, fontsize=size, color=color)
    y += 3 if is_role else 1

for number, current in enumerate(document, start=1):
    current.draw_line((LEFT, PAGE[1] - 31), (PAGE[0] - RIGHT, PAGE[1] - 31), color=(0.86, 0.88, 0.90), width=0.5)
    current.insert_text((LEFT, PAGE[1] - 18), "Maria Naseem | AI Engineer & AI Solutions Architect", fontname="helv", fontsize=7, color=(0.40, 0.44, 0.48))
    current.insert_text((PAGE[0] - RIGHT - 38, PAGE[1] - 18), f"{number} / {len(document)}", fontname="helv", fontsize=7, color=(0.40, 0.44, 0.48))

document.set_metadata({"title": "Maria Naseem | AI Engineer & AI Solutions Architect", "author": "Maria Naseem", "subject": "Professional CV"})
document.save(OUTPUT, garbage=4, deflate=True)
document.close()
