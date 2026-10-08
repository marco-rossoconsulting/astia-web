"""
Renders the 1200 x 630 share cards listed in scripts/og/manifest.json into
public/images/og/ (Brand Guidelines v2, 18 Social: Paper background, the
headline with its italic word, wordmark small and lower left; never Signal Red
outside the dot).

Needs: pip install pillow fonttools brotli
Run:   node scripts/og/manifest.mjs && python3 scripts/og/render.py
"""
import json
import os
import re
import tempfile

from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
FONTS = os.path.join(ROOT, "public", "fonts")
OUT = os.path.join(ROOT, "public", "images", "og")

PAPER = (247, 245, 240)
INK = (20, 20, 20)
STONE = (107, 107, 102)
BONE = (229, 226, 218)
ROSSO = (196, 30, 58)
SIGNAL = (230, 33, 39)
GRID = (240, 228, 226)

W, H = 1200, 630
PAD = 80


def ttf(name: str, tmp: str) -> str:
    """PIL cannot read woff2: convert the self-hosted font once."""
    out = os.path.join(tmp, name + ".ttf")
    if not os.path.exists(out):
        font = TTFont(os.path.join(FONTS, name + ".woff2"))
        font.flavor = None
        font.save(out)
    return out


def runs(title: str):
    """'One price for *everything*.' -> [('One', False), ('price', False), ...] word by word."""
    words = []
    for part in re.split(r"(\*[^*]+\*)", title):
        if not part:
            continue
        italic = part.startswith("*")
        text = part.strip("*")
        for w in text.split(" "):
            if w:
                words.append((w, italic))
            # keep punctuation glued: "*everything*." splits into 'everything' + '.'
    merged = []
    for w, it in words:
        if merged and re.fullmatch(r"[.,;:!?»”’]+", w):
            merged[-1] = (merged[-1][0] + w, merged[-1][1], w)
        else:
            merged.append((w, it, ""))
    return merged


def layout(draw, words, regular, italic, max_w):
    lines, line, width = [], [], 0
    space = draw.textlength(" ", font=regular)
    for word, it, tail in words:
        f = italic if it else regular
        main = word[: len(word) - len(tail)] if tail else word
        w = draw.textlength(main, font=f) + (draw.textlength(tail, font=regular) if tail else 0)
        add = w + (space if line else 0)
        if line and width + add > max_w:
            lines.append(line)
            line, width = [], 0
            add = w
        line.append((main, tail, it))
        width += add
    if line:
        lines.append(line)
    return lines


def render(card, fonts):
    img = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(img)
    for x in range(0, W, 60):
        d.line([(x, 0), (x, H)], fill=GRID)
    for y in range(0, H, 60):
        d.line([(0, y), (W, y)], fill=GRID)
    veil = Image.new("RGB", (W, H), PAPER)
    mask = Image.new("L", (W, H), 0)
    md = ImageDraw.Draw(mask)
    for y in range(0, H, 4):
        md.rectangle([0, y, W, y + 4], fill=int(min(255, max(0, (y - 120) * 0.55))))
    img = Image.composite(veil, img, mask)
    d = ImageDraw.Draw(img)

    eyebrow = "  ".join(" ".join(word) for word in card["eyebrow"].upper().split(" "))
    d.text((PAD, 92), eyebrow, font=fonts["mono"], fill=ROSSO)

    # Largest size (84 -> 52) at which the title fits in three lines and
    # still leaves room for the line below it (title block ends by y = 400).
    for size in range(84, 50, -4):
        regular = ImageFont.truetype(fonts["serif"], size)
        italic = ImageFont.truetype(fonts["serif_i"], size)
        lines = layout(d, runs(card["title"]), regular, italic, W - 2 * PAD)
        if len(lines) <= 3 and 150 + len(lines) * int(size * 1.1) <= 400:
            break
    y = 150
    lh = int(size * 1.1)
    space = d.textlength(" ", font=regular)
    for line in lines:
        x = PAD
        for i, (main, tail, it) in enumerate(line):
            f = italic if it else regular
            d.text((x, y), main, font=f, fill=INK)
            x += d.textlength(main, font=f)
            if tail:
                d.text((x, y), tail, font=regular, fill=INK)
                x += d.textlength(tail, font=regular)
            x += space
        y += lh

    d.text((PAD, max(y + 24, 430)), card["line"], font=fonts["sans"], fill=STONE)
    d.line([(PAD, 510), (W - PAD, 510)], fill=BONE, width=1)

    wm = ImageFont.truetype(fonts["serif_i"], 44)
    x = PAD
    for txt, col in (("astia", INK), ("·", SIGNAL), ("web", INK)):
        d.text((x, 530), txt, font=wm, fill=col)
        x += d.textlength(txt, font=wm)
    small = ImageFont.truetype(fonts["mono_path"], 16)
    label = "ASTIAWEB.COM"
    d.text((W - PAD - d.textlength(label, font=small), 548), label, font=small, fill=STONE)

    path = os.path.join(OUT, card["file"])
    img.save(path, "JPEG", quality=84, optimize=True, progressive=True)
    return path, size, len(lines)


def main():
    os.makedirs(OUT, exist_ok=True)
    cards = json.load(open(os.path.join(ROOT, "scripts", "og", "manifest.json")))
    with tempfile.TemporaryDirectory() as tmp:
        mono = ttf("jetbrains-mono-latin-500-normal", tmp)
        fonts = {
            "serif": ttf("instrument-serif-latin-400-normal", tmp),
            "serif_i": ttf("instrument-serif-latin-400-italic", tmp),
            "sans": ImageFont.truetype(ttf("general-sans-500", tmp), 26),
            "mono": ImageFont.truetype(mono, 17),
            "mono_path": mono,
        }
        for card in cards:
            path, size, n = render(card, fonts)
            print(f"{os.path.basename(path)}  {size}px  {n} lines  {os.path.getsize(path) // 1024} KB")


if __name__ == "__main__":
    main()
