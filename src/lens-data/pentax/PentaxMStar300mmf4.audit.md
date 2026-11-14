# Pentax-M★ 300mm f/4 source audit

The package shipped no audit file; this one starts with the deployment check.

## 2026-11-09 — Deployment validation

Independent check against US 4,293,197 Example 1 (PDF p. 6, claim 1 copy): 16 R, 15 d and 8 nd/νd pairs equal the
patent ×3; r10 = r11 with d10 = 0 is the cemented surface. Engine EFL 300.21 (100.07 at patent scale), F/4, half-field
4.5°, telephoto ratio 0.603 (printed 0.60); the printed condition values −0.85 / 7.16 / 2.23 reproduce. Front page:
Asahi Kogaku Kogyo, inventors Kobayashi and Okudaira, granted 1981-10-06. Attribution: the maker's booklet lists the
M★ 300mm f/4 as 8 elements / 7 groups, 8.3°, 4 m, like the A★ 300mm f/4, whose section drawing matches Example 1
element by element; Fig. 1 serves Examples 1–3, so the example itself is not proven.

Deployment change: this file.

Open: the L8 rim (16 mm) is about 2.5 mm under the patent and maker drawings (closed in the semi-diameter pass
below); wording (closed in the cleanup pass below).

## 2026-11-09 — Cleanup and wording pass

Data file:

- Header rewritten in plain terms; every fact kept (example, ×3 scale, printed vs derived back focus, merged 10/11
  surface, stop at 3.6 mm ahead of S9, inferred rims, 9° vs 8.3° field, no focus travel).
- `subtitle`: "US 4,293,197 A; representative patent reconstruction, 3× scale and inferred apertures" →
  "US 4,293,197 A, Example 1 — construction correlation with the 1981 production lens".
- `catalog.specs`: "8 ELEMENTS / 7 GROUPS", "ALL SPHERICAL", "QUALIFIED PATENT RECONSTRUCTION" → "8 ELEMENTS /
  7 GROUPS", "DESIGN f = 300 mm", "DESIGN F/4", "ALL SPHERICAL", "PATENT f = 100 SCALED × 3".
- `catalog.closeFocusM.marketing` 4, from the M★ row of Asahi's *SMC Pentax-A Lenses* booklet (printed p. 35).
- `focus.closeFocusM` 4 → 1e15: the patent prints infinity only and names no focusing group, so the lens is static;
  the description now says so and names the unmodeled 4 m retail figure.
- Glass, exact rows only (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15, each resolved with trylabel): L1, L2, L4 K-PFK80 (SUMITA,
  81.35); L3 S-LAH53, L5 S-LAH52, L6 S-FTM16, L7 S-LAH58, L8 S-TIM35 (OHARA). S-FPL51 and FCD1 (νd 81.55 / 81.61)
  miss the 81.3 tolerance and were not used.
- `apd: "inferred"` on L1, L2 and L4, the three ν 81.3 positions: the booklet (printed p. 33) says the A★ 300mm f/4,
  listed with the M★'s construction and specifications, uses special glass; the catalog equivalent has θgF 0.537,
  about +0.030 above the normal line. Neither source names the elements.
- Eight identical `indexReferenceNote` lines removed; `role` added to every element; group bracket text in title case.
- `cemented: "D1"` on L5 and L6 and a `doublets` entry D1 spanning surfaces 9 to 12, so the cemented pair carries its
  bracket and inspector tag (patent: r10 = r11, d10 = 0; claims call the pair cemented).

Analysis: the "Reference Plane and Qualification" section (process checks, MTF grid and sample counts, delivery
records) and the citation of a local secondary patent index file were removed. Added: the product (1981, only M★
lens, retail specifications), an attribution paragraph with its caveats (Fig. 1 serves Examples 1–3; at ×3 the front
vertex sits about 3.7 mm beyond Asahi's 132 mm barrel length, where Examples 2 and 3 fit better), the condition
table, group focal lengths (+105.6 / −46.5 / +521 mm), the glass table, image-plane and stop sections, the A★ 300mm
f/4 drawing comparison and a scope table.

Engine, before and after (identical): EFL 300.2096 mm, F/4.000, half-field 4.5°, stop radius 11.5494 mm, BFD
39.8130 mm, TL 181.1130 mm. Surface audit OK; aperture audit: 1 station within 3 % of f/4, no rim limit.

Open: the L8 rim (16 mm) is about 2.5 mm under Fig. 1 and the A★ drawing (rims unchanged in this pass; closed in
the semi-diameter pass below). `blades` is not set: the eight-blade figure comes from secondary listings, not from
Asahi. The missing `cemented` tag and `doublets` bracket on L5 and L6 were added in this pass (closed).

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/US4293197.pdf`, sheet 1 (PDF p. 2), Fig. 1, which serves Examples 1–3; native raster 300 dpi,
read at 300 and 600 dpi with figprofile and zoomed crops. The axis is a 4 px line at rows 902–906 (300 dpi), tilting
about 3 px across the figure, so each element is measured as half its full drawn height, which cancels the axis
position. Scale: the S1 and S16 vertex crossings are 867 px apart for 47.10 patent units, 18.41 px per unit, so
6.14 px per model mm at ×3. Check spans: S1–S8 gives 18.54 and S8–S9 and S12–S13 give 18.1 px per unit (within 2 %),
and the S1 arc (R1 = 28.45) reaches the drawn L1 rim at the predicted 58 px sag, so the figure is not anamorphic.
No stop is drawn.

| Surface | Before (mm) | Fig. 1 (mm) | After (mm) | Evidence |
|---|---|---|---|---|
| 1, 2 (L1) | 39 | 39.7 | 39 | Pointed rim, 487 px full height; +1.7 %, noise |
| 3, 4 (L2) | 37 | 36.6 | 37 | 449 px; −1.1 %, noise |
| 5 (L3 front) | 34 | 34.0 | 34 | Square blank, flat top 417 px |
| 6 (L3 rear) | 34 | 30.6 | 30.6, land to 34 | Concave face ends at a chamfer, 375 px; −10 %. The A★ drawing has the same slanted corner, rear about 0.92 of front |
| 7, 8 (L4) | 31 | 30.5 | 31 | 374 px; noise |
| 9, 10/11, 12 (doublet) | 12 | 12.1 | 12 | Square-cut, 148 px |
| 13, 14 (L7) | 16 | 16.8 | 16 | 413 px at 600 dpi; +5 %, noise, and the L7 < L8 order is right after the L8 change |
| 15 (L8 front) | 16 | 18.3 | 18.3 | 450 px at 600 dpi; the drawn rim slants, front face lower |
| 16 (L8 rear) | 16 | 19.3 | 19.3 | 473 px at 600 dpi; +21 % |

L3's rear cap ends at the figure's chamfer and `rimExtensionSd` 34 draws the land up to the square blank that S5
keeps, so the silhouette stays a flat-topped blank. The cap clears the f/4 axial beam (29.73 mm) by 0.87 mm. L8 rises
to the figure, which both drawings show taller than L7. No other rim moved.

Clearance and light, starting rims vs final: no CLIPS-AXIAL or BLOCKS-CHIEF at the 21.65 mm corner (4.10°);
surface audit OK; aperture audit within 3 % of f/4 with no rim limit; image circle 0 undersized; field coverage
100 %, corner clear. Engine EFL 300.21 mm, F/4, half-field 4.5° and stop radius 11.549 mm are unchanged; the traced
half-field limit rises from 4.78° to 5.49°. Wide-open transmission at 0, 0.7, 1.4, 2.0, 2.7, 3.4 and 4.1°: 100, 99.3,
95.5, 91.1, 86.9, 80.2, 53.2 % before; 100, 98.9, 95.4, 91.1, 86.9, 82.5, 70.2 % after. The L3 cut costs 0.3 points
at 0.7° and nothing at the corner, inside the 3-point rule, so it stays; the L8 raise gains 17 points at the corner.

Maker drawing (Asahi's A★ 300mm f/4 section, printed p. 38 of the *SMC Pentax-A Lenses* booklet): same element order
and grouping, L3's slanted rear corner, the doublet and L7 at about 12 and 16–17 mm and L8 at about 18 mm at this
scale. It does not separate Examples 1–3.

Open: none for rims.

## 2026-11-09 — Second review: diagram, labels and movement

Compared: the live page (infinity, `focus=1`, `mv=focus`, inspectors for elements 1, 3, 5 and 8) with Fig. 1 on the
scale proved in the semi-diameter pass (18.41 px per patent unit, 6.14 px per model mm), and the model's on-axis
colour, distortion and astigmatism with Fig. 2. No field changed.

- Silhouette: height order L1 > L2 > L3 > L4 and doublet < L7 < L8 as drawn; L1, L2 and L4 pointed, L3 flat-topped
  with its rear cap ending below the blank, doublet and L7 square, L8 slanted with the rear face taller, all as in
  Fig. 1. No reading differs from the file by 10 % or more.
- Lands and cuts: S6 (baseline 34, now 30.6 with a land to 34) costs 0.3 points at 0.7° and nothing at the corner
  (keep: slight); the land alone costs nothing (`--noext 6` identical) and is drawn. L8 (16 → 18.3 / 19.3) gains
  17 points at 4.1°. Final worst loss 0.3 points.
- Labels and tags: groups Front 1–8, Intermediate 9–12, Rear 13–16 follow the patent's front, intermediate and rear
  lens groups; one cemented bracket D1 over 9–12, with no gap labels on this static lens to collide with; L1–L8
  sequential (the figure names surfaces only); types agree with the signs of R; no aspheres; stop between L4 and L5;
  `apd: "inferred"` on L1, L2, L4 only, citing the booklet's special-glass note.
- Movement: static; the movement overlay reports no modeled group movement and `focus=1` draws the infinity state.
- Colour (patent scale, from the d-line paraxial focus): d-line 0.007 / 0.035 / 0.067 / 0.064 at pupil 0.5 / 0.7 /
  0.85 / 1, matching Fig. 2 (about 0.062 at 0.85 and 0.065 at the rim). g-line paraxial 0.130 against the plot's
  0.112, and 0.155 against 0.12 at 0.7–0.85: the model's g focus lies about 0.02 to 0.035 behind the patent's.
  L3 is the most sensitive element (+0.005 per +0.001 of θgF). J-LASF03 (HIKARI; 1.80610 / 40.97) would put the g
  paraxial focus at 0.113 and P-LASF47 (SCHOTT; exact) at 0.115, both era-implausible vendors for a 1979 Asahi design.
- Distortion: +0.31 / +0.57 / +0.71 % at 2.5 / 3.5 / 4.1° against the plot's +0.26 / +0.59 / +0.73 %. Astigmatism
  at 4.1°: sagittal +0.048, tangential −0.035 against the plot's +0.060 and −0.036.

Open: the g-line offset above; a glass decision for L3 is the coordinator's (closed below).

## 2026-11-09 — L3 glass against the g-line plot

L3 (1.80610 / 40.9) has four exact catalog equivalents. Traced against Fig. 2's g-line curve (patent scale, focus
relative to the d-line paraxial focus, pupil 0 / 0.5 / 0.85; plot 0.112 / 0.114 / 0.120, read to about ±0.003): OHARA
S-LAH53 gives 0.130 / 0.139 / 0.155, OHARA LAH53 0.124 / 0.133 / 0.148, SCHOTT P-LASF47 0.115 / 0.124 / 0.139 and HIKARI
J-LASF03 0.113 / 0.122 / 0.136; the d line is identical under all four. L3 is relabelled
`J-LASF03 (HIKARI catalog equivalent; production supplier unspecified)`, the only candidate that puts the axial g focus
within the plot's reading error. The label names a dispersion equivalent, not the 1979 supplier, which was more likely
OHARA or HOYA. About 0.015–0.03 of g-line offset remains at 0.7–1 of the pupil under every L3 choice, so the rest lies in
the other glasses' partial dispersions.

Open: the residual g-line offset at the outer pupil.
