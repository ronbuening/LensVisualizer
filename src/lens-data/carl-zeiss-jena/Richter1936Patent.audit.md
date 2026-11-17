# Patent and transcription audit — US 2,031,792 A, Figure 1

## Source

US 2,031,792 A (Robert Richter, assignor to the firm of Carl Zeiss, Jena; filed July 25, 1934, Serial No. 736,880;
German priority July 26, 1933; granted February 25, 1936). Local file `patents/US2031792A.pdf`, six scanned pages
(SHA-256 0c40404c1291f6641e5702b2d5013ddab3400fe55d95b3e653f2fe1689730f8d). Drawing sheets 1–3 carry Figures 1–3,
each with its own table. The specification (pp. 1–3) states fD = 66.0 mm, f/6.3 and a 100° field for the first
example and repeats each table. The scan's text layer is OCR, so every number was read from the page images.

The patent has three constructional examples: Figure 1 (symmetrical, fD 66.0), Figure 2 (outer pair dissymmetrical,
fD 75.7) and Figure 3 (Figure 1's form with two outer plane-parallel plates, fD 66.1). The file transcribes Figure 1.

## Transcription check

Every printed value was compared at 300–600 dpi against both the drawing-sheet table (p. 1) and the specification
table (p. 2). The two agree, and the data file matches them in every value:

| Quantity | Printed | File |
| --- | --- | --- |
| r1 … r8 | 11.25, 16.55, 9.094, 7.35, 7.35, 9.094, 16.55, 11.25 | +11.25, +16.55, +9.094, +7.35, −7.35, −9.094, −16.55, −11.25 |
| d1, l1, d2, l2, d3, l3, d4 | 4.44, 0.02, 0.5, 12.98, 0.5, 0.02, 4.44 | same (l2 split 6.49 + 6.49 at the stop) |
| L1 = L4 | nD 1.6201, ν 60.4 | same, `indexReference` "D" |
| L2 = L3 | nD 1.7172, ν 29.5 | same, `indexReference` "D" |

The table prints radii without signs. The signs follow Figure 1 and the text, which says the concave surfaces of all
members face the diaphragm. There are no aspheres, no cemented surfaces (l1 and l3 are 0.02 mm air spaces) and no
variable gaps. Mismatches: none.

## First-order results

`built.mjs` and `probe.mjs` give EFL 66.038 mm against the printed 66.0 (+0.06 %) and f/6.3 with a 3.97 mm stop
radius. The paraxial BFD is 51.942 mm, the vertex length 22.90 mm and the total length 74.84 mm. Element focal lengths
are +42.90 mm (L1, L4) and −60.71 mm (L2, L3), and the Petzval sum is −0.000004 per mm. The patent's conditions hold:
l2 / mean(r4, r5) = 12.98 / 7.35 = 1.77 (more than 1 for the 100° form), inner thickness 0.5 mm = 0.76 % of f
(less than 2 %), inner index 1.7172 (more than 1.65).

## Inferred values

- Stop: Figure 1 draws the diaphragm at the middle of l2. Measured from the 300 dpi figure (32.55 px/mm), it sits
  11.43 mm behind S1 against the model's 11.45 mm. Its drawn opening is about 4.1 mm in radius, against 3.97 mm at
  f/6.3.
- Back focus: the computed paraxial value. The patent prints none.
- Rims: none are printed. Figure 1 draws L1/L4 almost to a knife edge at 10.8–11.0 mm. It draws the L2/L3 convex faces
  at about 7.4–8.1 mm and their concave faces at about 6.9 mm.
- Glass: nD and ν are used as printed. They match Schott SK16 (N-SK16 1.62041 / 60.32) and SF1 (1.71736 / 29.51), but
  the file carries no glass labels.

## 2026-11-16 — Deployment validation

An independent re-read of the patent page images checked every radius, thickness, air space, index and dispersion,
the radius signs against Figure 1, the stop position and opening against the drawing, the stated focal length,
aperture and field, and the front-page bibliography. Verdict: a faithful transcription of the first example. The
model reproduces fD = 66.0 within 0.06 %.

Product link: this is the Topogon patent. Zeiss's history dates Richter's Topogon to 1933. Nasse's 2011 Zeiss article
describes the four-meniscus Topogon as an aerial standard with a Contax 25 mm f/4 version. Bausch & Lomb's Metrogon is
engraved with this patent number. No production prescription is published, and the dissymmetrical Figure 2 may be
closer to the distortion-free photogrammetric lens, so the file stays a patent reference.

Defect found: the delivered rims (S1/S2/S7/S8 10 mm, S3–S6 6.5 mm) blocked the chief ray from about 42.6°, inside the
patent's stated 100° field. At 50° the chief ray needs S1 10.42, S2 9.62, S3 7.39 and S4 6.42 mm; the engine's own
chief-ray solve agrees with an independent trace. With the delivered rims the meridional fan passed 68 % of its rays
at 30°, 20 % at 40° and none at 45°.

Changes:

- `source.patentNumber`: "US 2,031,792" → "US 2,031,792 A" (house form).
- `source.assignees`: "Carl Zeiss, Jena" → "Carl-Zeiss-Stiftung" (the corpus form for "the firm of Carl Zeiss").
- `sd` S1 and S8: 10 → 10.45. `sd` S3 and S6: 6.5 → 7.4. These are the least values that pass the 50° chief ray, and
  both stay below the Figure 1 readings. S2/S7 (10) and S4/S5 (6.5) already clear it and are unchanged.
- `checks.maxRimAngleDeg`: added, 69. The S1/S8 rim slope is 68.3°; without the check, `audit:surface` reports it
  against the 64.2° default.
- `projection`: added, `{ kind: "rectilinear", fullFieldDeg: 100, maxTraceFieldDeg: 50 }`, the patent's stated field.
  The paraxial estimate alone gives 36.6°.
- `catalog.focalLengthMm.design`: 66.03779478699285 → 66.04.
- JSDoc header added: source, example, scale, and which values are inferred.
- Analysis rewritten to the house section layout. This audit file replaces a copy of the old analysis text.

After the changes, `built.mjs` gives EFL 66.038 mm, f/6.3, stop radius 3.97 mm, half-field 50° and paraxial
tracing half-field 36.55°. The engine's chief-ray solve converges unclipped at 30°, 40°, 45° and 50°. At 50° the image
height is 80.67 mm, 2.5 % beyond f·tan θ; the distortion is +0.9 % at 30° and +1.6 % at 40°. The meridional fan passes
100 % of its rays at 30°, 93 % at 35°, 73 % at 40° and 46 % at 45°. `audit:surface`: OK. `audit:aperture --raise`: no
surface below the axial ray. `audit:image-circle` and `audit:field-coverage` skip the file (no image format; hidden).

Open:

- Name, key and subtitle could name the Topogon, for example "ZEISS TOPOGON PATENT 66mm f/6.3".
- Specs wording: "PATENT ONLY; NO RETAIL MATCH" and "ESTIMATED STOP AND RIMS" do not read well on a public page.
- Shorter `focus.description` and `indexReferenceNote` wording.
- Optional `source.example` label "Constructional Example 1", the patent's own term.
- Optional glass labels SK16 / SF1.
- Rims against Figure 1: L1/L4 to about 10.6 mm, L2/L3 convex faces to about 7.7 mm and concave faces to about
  6.9 mm. That would need `checks.maxRimAngleDeg` 71 and is left for the semi-diameter pass.
