# SMC Pentax-M 28mm f/3.5 audit

2026-11-09, initial transcription.

Primary PDF cover, physical pages 3, 5 and 6 were inspected as actual pixels. Table II and Claim 2 agree numerically. Source prose field 75° and figure half-field 37.6° differ by rounding. All 12 radii and 11 physical thickness/gap values are scaled exactly by 0.28; glass coordinates remain unchanged. Printed final BFD remains 36.43164 mm. The inserted flat stop splits d6 into zero and 2.9568 mm; total optical gap is unchanged.

All semi-diameters are half the Photons to Photos diameter list: [17.415, 17.415, 14.245, 9.46, 7.42, 7.975, 5.975, 7.74, 6.7, 6.84, 6.805, 7.16] mm. These are inferred clear apertures; the patent prints none. The Photons to Photos stop diameter of 10.938 mm is not used; the stop radius follows from f/3.5. All default geometry checks pass with no hidden rim trim and no gap-sag override.

The fixed infinity geometry has no focus movement. No close-focus law is invented. `closeFocusM` was first set to 1 (closed in the cleanup pass below: now the static 1e15 convention with the retail 0.3 m in `catalog.closeFocusM`).

A scale-normalized radius/index comparison against the 1,095 catalog data files then present found no duplicate. nd/νd alone do not establish secondary-spectrum behavior.

## 2026-11-09 — Deployment validation

Independent check of US 3,955,883 Example 2 (Table II and Claim 2, page images): 12 R, 11 d, 6 nd/νd and the back focus
130.113 → 36.432 agree at one scale factor ×0.28. Engine EFL 27.995, f/3.5, half-field 37.6°, total length 78.574;
F1,2 −101.751 (printed −101.729). Different design from the catalog's Pentax-M 28mm f/2.8 (US 4,143,945) and
Super-Takumar 28mm f/3.5 (US 3,506,339). Attribution probable: the M 28/3.5 is 6 elements / 6 groups (the patent's six
singlets), 1977–85, 0.3 m; Example 1 is f/2.8, and PhotonsToPhotos labels Example 2 as this lens. No maker drawing
found. No deployment changes.
Open: rear rims S5–S10 (PhotonsToPhotos) draw wider than Fig. 3 (S8 about 38 % larger), which hides some of the corner
vignetting the figure implies; to be read against the figure in the review pass (still open, below). `focus.closeFocusM` 1 is a placeholder
(production 0.3 m) (closed in the cleanup pass); name style against the catalog's "PENTAX SMC M 28mm f/2.8" (closed:
renamed "PENTAX SMC M 28mm f/3.5", key `pentax-m-28mm-f35`); package wording remains (closed in the cleanup pass).

## 2026-11-09 — Cleanup and wording pass

Data file: the header comment was rewritten in plain terms with the same facts (patent, example, ×0.28 scale, printed
versus derived values, stop and rim basis, the figure comparison). Subtitle "US 3,955,883 — qualified product
association" became "US 3,955,883, Example 2 — probable match to the 1977 production lens". Added `catalog.specs`
(6 ELEMENTS / 6 GROUPS, DESIGN f = 28 mm, DESIGN F/3.5, ALL SPHERICAL, PATENT f = 100 SCALED × 0.28) and
`catalog.closeFocusM.marketing` 0.3 (Allphotolenses and Cine Lens Wiki retail data). `focus.closeFocusM` 1 became
1e15, the catalog's static-lens convention, with a plain description; the patent prints infinity only. Added
`aperture.blades` 5 from the same retail sources. Added a `role` to each element. All four glasses match OHARA catalog
rows to the printed precision, so the `Unmatched` labels became catalog equivalents: L1 and L5 S-BSM10 (1.62280 /
57.05), L2 and L6 S-BSM16 (1.62041 / 60.29), L3 S-LAM52 (1.72000 / 43.69), L4 S-TIH13 (1.74077 / 27.79). No `apd`:
no special-dispersion element is reported for this lens, and none of the four glasses is one. R, d, nd, νd, sd and the stop position are unchanged.

Engine before and after: EFL 27.9951 mm, f/3.5, half-field 37.6°, stop radius 5.3333 mm, paraxial BFD 36.4288 mm,
printed final gap 36.4316 mm, total length 78.5744 mm; only `closeFocusM` changed. Surface audit clean; aperture audit
within 3 % of f/3.5 with no rim limit.

Analysis: removed process material (package and evidence wording, the MTF and pupil-sampling counts, the placeholder
note) and rewrote the identification as a five-point case with its caveats (no Pentax drawing found; Example 1 is the
f/2.8 version; the earlier 28mm f/3.5 lenses have seven or eight elements). Added the patent's three conditions,
the claim's positive-meniscus misprint for L2, the glass table, a Fig. 3 rim comparison and a scope table.

Open: rear rims S5–S10 stay as transcribed but draw wider than Fig. 3 (L3 about 6.3 mm in the figure against 7.42 /
7.98; L4 about 5.6 against 5.98 / 7.74; L5 about 6.0 against 6.70 / 6.84), so the model likely understates corner
vignetting. The axial f/3.5 beam (at most 5.8 mm) would clear the drawn rims. (Closed in the semi-diameter pass
below: L4 and L5 now follow the figure; L3 is held 0.8 mm above it by corner light.)

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/US3955883.pdf`, sheet 2 (PDF page 3), Fig. 3, the Example 2 section, a 1-bit scan at 72 ppi native,
measured at native resolution. Scale: the S1 vertex at x 520 px and the S12 vertex at x 1764 px span 42.1428 mm,
29.52 px/mm at the model's 0.28 scale; the axis line is read locally (it falls 5 px over the figure). Vertical scale
checked against drawn sags: L4's front and rear rim sags (26 and 13 px) match the prescription at 29.5 px/mm; the
r1, r4, r5 and r6 arcs give 27–31 px/mm, so the drawing is treated as isotropic to about ±5 %. Each rim was read top
and bottom from the local axis at line centres.

| Surface | Before | Fig. 3 | After | Evidence |
|---|---:|---:|---:|---|
| S1 | 17.415 | 16.9 | 17.415 | Within 3 %; kept |
| S2 | 17.415 | 15.6 (16.1 top, 15.1 bottom) | 15.7 | Rear face ends at the drawn chamfer; 15.6 cost 3.6 points at 37.6° |
| S3 / S4 | 14.245 / 9.46 | 13.8 / 9.7 | unchanged | Within 3 % |
| S5 / S6 | 7.42 / 7.975 | 6.5 / 6.5, square | 7.3 / 7.3 | Square as drawn; 6.5 cost 12.8 points at 34.7°, 7.3 is the least that meets the light rule |
| S7 / S8 | 5.975 / 7.74 | 5.6 / 5.6, square | 5.7 / 5.7 | Square as drawn; 5.6 cost 3.3 points at 23.1° even with L3 at 7.4 |
| S9 / S10 | 6.7 / 6.84 | 6.0 / 6.0, square | 6.2 / 6.2 | Square as drawn; least height meeting the light rule with L3 at 7.3 |
| S11 / S12 | 6.805 / 7.16 | 6.65 / 6.88 | unchanged | Within 4 % |

Corner light, engine full-pupil lattice at f/3.5, infinity, against the starting rims: 100 % to 20.2° before; after,
99.4 % at 17.4°, 93.6 % at 26.0°, 84.1 % at 31.8° and 60.5 % at 37.6° (63.4 % before); the worst loss at any field is
2.9 points (26.0°, 28.9° and 37.6°). The rims were chosen by sweeping L3, L4 and L5 together at 0.1 mm steps with S2:
L3 7.3, L4 5.7, L5 6.2 has the least total height above the figure of the sets within 3 points (7.2 / 5.8 / 6.3 is
the other). Restoring any one element to its starting rims wins back at most 2.4 points (S2, at 37.6°).

Clearance: no surface clips the f/3.5 axial beam (largest need 5.75 mm at S5); the real chief ray reaches 21.56 mm at
37.88° with no blocked surface; the field-coverage trace still reaches 21.32 mm at the declared 37.6° (corner 38.0°,
clear); image-circle and surface validators are clean and the aperture audit finds no rim limit. EFL 27.9951 mm,
f/3.5, half-field 37.6° and paraxial BFD 36.4288 mm are unchanged; only the drawn stop housing (5.975 to 5.7 mm)
follows L4. The lens is static at infinity, so that is the only printed state. No maker drawing is known.

Open: L3 stays about 0.8 mm (13 %) taller than Fig. 3 draws it, and is now taller than L6 (7.3 against 7.16 mm)
where the figure draws it slightly shorter; neighbouring step order (L2 > L3 > L4 < L5 < L6) matches the figure.

## 2026-11-09 — Second review: diagram, labels and movement

Compared the local page and a model overlay with `patents/US3955883.pdf` sheet 2 (PDF page 3), Fig. 3, at the native 72 ppi.
Scale re-derived: vertices at x 520 (S1), 772 (S4), 1140 (S5), 1481 (S6), 1608 (S8), 1642 (S9) and 1764 (S12) give
29.52 px/mm over S1–S12 and 29.6 px/mm over S1–S4 and over L3 alone (L3 is drawn about 9 px forward, L4 thicker than
printed); L4's drawn rim sags (26 and 13 px) put the vertical scale at 29.9 px/mm. Rims read at line centres from the
local axis (y 1032 + 0.004 per px), top and bottom: S1 16.9; S2 at the chamfer 15.8 / 15.2; S3 13.8; S4 9.4 / 9.6; L3
6.3 (6.31 top, 6.3–6.4 bottom); L4 5.6; L5 5.9–6.0; S11 6.4 (top, chamfered) to 6.85 (bottom); S12 6.9–7.0.

No rim changed. Every semi-diameter-pass value is within the reading error or held by light. Land and cut verdicts
re-measured: unchanged. The worst loss against the baseline rims is 2.91 points, at 26.0°, 28.9° and 37.6°.
Restoring single elements wins back S2 2.4, L3 1.4, L4 0.5 and L5 1.1 points, so every cut is a slight loss and none
is refused by the validator. L3 cannot follow the figure: at 7.1 mm it alone costs 4.0 points at 34.7° with every
other rim at baseline. 7.2 / 5.8 / 6.3 also meets the budget, but it puts L4 and L5 further above the figure.

Added group brackets FRONT (−) over S1–S4 and REAR (+) over S5–S12, after the patent's front diverging component
L1–L2 (F1,2) and the converging system behind L2. They render under the element numbers without collision. Element
names L1–L6 are the patent's. Types agree with the signs of R, focal lengths match thick-lens values (L1 +130.6),
and the roles are true. There are no aspheres, no cemented surfaces and no `apd` tags. The inspector for L3 and L4
shows the expected type, glass and focal length. The lens is static: the focus slider reads "Not modeled" and the
movement overlay reports no group motion. Assignee: the front page prints "Asahi Kogaku Kogyo Kabushiki Kaisha",
and the file uses the catalog's single spelling, "Asahi Kogaku Kogyo Co., Ltd." (34 files).

Colour and field against Figs. 4a–4d, in F = 100 units. On-axis d-line LSA is −0.08 / −0.31 / −0.33 / −0.23 at
pupil 1 / 0.85 / 0.7 / 0.5; the plot reads −0.07 / −0.30 / −0.35 / −0.29. The g line is +0.50 at full aperture
(plot +0.48) and lies about 0.07 long at the paraxial and middle zones. No equal catalog row (E-FD13, N-SK10, BACD16,
N-SK16) moves it by more than 0.01. Distortion is −1.25 / −1.68 / −1.09 % at 23.2° / 32.8° / 37.6° (plot −1.16 /
−1.64 / −1.18 %).

Open: Fig. 4d's meridional curve is not reproduced with the stop at L3's rear vertex. The model's parabasal ΔM is
−0.37 / −0.94 / −2.39 at 23.2° / 32.8° / 37.6° against the plot's 0 / +0.08 / −0.69, and ΔS is −0.86 / −1.03 /
−0.29 against −0.77 / −0.83 / about 0. With the stop at L4's front vertex the model gives ΔS −0.90 / −0.88 / +0.23
and ΔM −0.44 / −0.28 / −0.56, close to the printed shape. That plane lies inside L4's concave front sag at the f/3.5
stop radius, so it is not a physical iris position. The stop placement stays as transcribed.
Open: L3 stays about 1.0 mm above Fig. 3 by this reading (7.3 against 6.3) and taller than L6, held there by corner
light.
