# Audit Log — KONICA LENS 35-105mm f/3.8-8.5 (Konica AiBORG)

Patent: JP H03-39920 A, Example 1 (第1実施例); local `patents/JPH0339920A.pdf`, tables on gazette pp. 247–248, Fig. 1
and Fig. 2 on pp. 249–250.

## 2026-11-07 — Package history

The lens arrived as a data file and analysis without an audit log; this section condenses the package notes.

- Source: Example 1 transcribed from the J-PlatPat keyed text and checked against the gazette scan. All 24 radii, the
  fixed spacings (including D7 = 1.20 mm), 13 nd/νd pairs, the S18 K/A4/A6 and the three D3/D9/D18 rows are as
  printed. The patent writes 1 + K under the root, the same conic convention as the schema.
- Derived values: no back focus is printed, so D24 is the d-line paraxial infinity image distance (3.998 / 24.084 /
  47.840 mm). No stop is printed; STO splits D14 = 1.40 mm into 0.70 + 0.70 mm, from the Fig. 1 diaphragm mark between
  L8 and L9. Semi-diameters are conservative readings of Fig. 1 (S8–S9 at 8.0 mm against about 8.16 mm drawn); no
  gap-sag override.
- Zoom: 65 stations, the three printed rows plus 62 interpolated ones. D3/D9/D18 are linear in station index between
  printed rows, BF is solved at every station, and intermediate f-numbers are linear between the printed values.
- Focus: infinity only. `closeFocusM` 0.8 is the maker's minimum focus distance; both focus rows repeat infinity.
- Production link: Konica Technical Report vol. 5 (January 1992) names the AiBORG, describes the +−+− four-group
  architecture with G2 inner focus, and cites this publication as reference 1.
- Package results kept as historical figures, not re-run: with the mid-gap stop, sampled full-field transmission was
  about 58% at wide, 94% at the middle station and 98% at tele, and the axial geometric RMS spot at the paraxial image
  plane was about 9 µm at all three printed stations.
- The package delivered the lens hidden, under the key `konica-aiborg-jph0339920a-example1-inferred` and a descriptive
  working name, with source-code glass strings ("Patent nd/Vd; production supplier unspecified").

## 2026-11-08 — Deployment validation and production cleanup

Source re-read: gazette pp. 247–248 were rendered at 200 dpi and compared with the data file: 24 radii, 20 fixed
spacings, 13 nd/νd pairs, K = 0.19205, A4 = 0.49648 × 10⁻⁴, A6 = 0.14617 × 10⁻⁶ and nine zoom gaps. No mismatch.
The earlier validator's 300-dpi check of the same pages also found none. Example 2's printed D1 = 9.80 mm looks like a
misprint for 0.80 mm; it does not affect Example 1.

First-order values, patent against model (unchanged before and after this pass):

| Quantity | Patent | Model |
| --- | --- | --- |
| EFL, wide / middle / tele | 36.03 / 62.13 / 102.91 mm | 36.033 / 62.128 / 102.937 mm |
| F-number | 3.8 / 5.7 / 8.5 | 3.8 / 5.7 / 8.5 (station values) |
| Back focus | not printed | 3.998 / 24.084 / 47.840 mm |
| Telephoto ratio, wide / tele | 1.93 / 1.0 | 1.935 / 1.0015 |
| M2T/M2W, M3T/M3W, M4T/M4W | 1.05, 1.20, 2.27 | 1.055, 1.194, 2.267 |
| \|φ1/φ2\| | 0.19 | 0.187 |
| Half-field, wide / tele | 30.3° / 11.65° (2ω 60.6° / 23.3°) | chief ray reaches 21.65 mm at 30.3° / 11.6° |
| Axial spherical aberration, full aperture | Fig. 2: about −0.07 / +0.20 / −0.14 mm | −0.078 / −0.121 / +0.221 mm |

The engine's display half-field at wide is 24.87°, limited by S1 under its paraxial-aim chief-ray test; the
field-coverage audit reaches the 21.65 mm corner at every station. Stop radius 4.656 / 5.039 / 5.082 mm and FOPEN 3.8 at
wide are unchanged.

Spherical aberration conflict: the wide end agrees with Fig. 2(a), but the middle and tele curves have the opposite
sign to the traced table. The validator found that no single change to any R, d, N, K/A4/A6 or zoom gap reproduces
Fig. 2(b) and 2(c) while keeping the stated focal lengths. Recorded as an unresolved `source.errata` entry; all printed
values are kept.

Maker-diagram comparison: the report's Fig. 3-1 (p. 112) shows 2 / 3 / 5 / 3 elements, a flat-fronted first G2
element, and the shutter blades between the cemented L7/L8 pair and L9, slightly nearer L8. Example 1 matches it element
for element; Examples 2 and 3 have 12 elements. The mid-gap stop in D14 sits in the same space. The report's camera
photograph (p. 110) shows the lens ring engraved KONICA LENS JAPAN 35-105. Konica's instruction manual (English
specifications, printed p. 92) gives "Konica zoom lens, 35mm F3.8-105mm F8.5" and autofocus from 0.8 m. This settles
the marketed aperture: Camera Legend's f/3.5–8.5 is not followed; Kamerastore's f/3.8 agrees with the manual.

Fields changed in the data file:

- `key`: `konica-aiborg-jph0339920a-example1-inferred` → `konica-aiborg-35-105mm-f38-85`.
- `name`: `Konica AiBORG-associated development candidate (infinity only)` → `KONICA LENS 35-105mm f/3.8-8.5 (Konica
  AiBORG)`, from the lens-ring engraving in the maker report and the manual's aperture.
- `subtitle`: → `JP H03-39920 A, Example 1 — cited in Konica's AiBORG design report`.
- `visible`: false → true.
- `catalog`: added `specs` (13 elements / 11 groups, design f 36.03–102.91 mm, design F/3.8–8.5, one aspherical
  surface, plastic aspherical element); `focalLengthMm.design` → the printed [36.03, 102.91] (was the traced values);
  added `fNumber` { marketing 3.8, design 3.8 }. Mount, format and counts unchanged. `catalog.closeFocusM` is not added
  because the model's 0.8 m equals the maker's.
- `source.errata`: added the unresolved Fig. 2(b)/(c) entry.
- Header comment rewritten in the house block.
- Elements: fields reordered to the schema order, a `role` added to each, and glass relabelled. Twelve elements now
  carry OHARA names that resolve in the engine with nd equal to the printed five decimals and |Δνd| ≤ 0.05: S-TIH6
  (L1), S-BSM25 (L2), S-LAH66 (L3), S-TIH1 (L4), S-LAL14 (L5, L13), S-TIM8 (L6), S-TIH53 (L7), S-BSL7 (L8), S-TIL25
  (L9), S-BAH28 (L11) and LAL8 (L12; the current S-LAL8 is 1.71299, so the older LAL8 entry is the exact match). L10 is
  `Unmatched (patent-specified plastic; nd 1.49200, νd 58.3 fit a PMMA-type acrylic)`, following the repo's PMMA-type
  and patent-plastic labels; the glass catalog has no PMMA curve. No `apd` tags.
- Zoom station labels reduced to Wide and Tele (the 62 "Inferred n/64" labels and the Middle label removed);
  `published` flags unchanged.
- Gap labels: `D3` / `D9` / `D18` (were "source anchors / inferred interpolation") and `BF` (was "D24 (derived
  infinity)").
- `focus.description`: G2 inner focus to 0.8 m per claim 2 and the report, model infinity-only.

No R, d, nd, νd, asphere coefficient, stop position, `sd`, gap value, station or `closeFocusM` changed. `built.mjs`
and `probe.mjs` outputs are byte-identical before and after.

Rims: the aperture audit finds all 65 stations within 3% of the stated f-number with no rim, trace or iris limit, so
no rim was touched. The image-circle audit reports S22, S23 and S24 undersized by 0.27, 2.05 and 3.25 mm against the
full-frame floor. This matches the rear rims drawn in Fig. 1 and the heavy wide-angle corner vignetting the drawing
implies; the rims were not widened. The surface audit is OK.

Analysis rewritten to the analysis-spec skeleton: the development framing, transmission and RMS sampling prose and
interpolation-error figures were removed; the Fig. 3-1 match, the report's zoom-type rationale and G2 control scheme,
the manual's aperture and close focus, and the release year (Camera Legend) were added.

Open:

- J-PlatPat lists an amendment (手続補正書) to JP H03-39920 A that has not been seen. It may correct the Example 1 table
  or Fig. 2; read it before resolving the spherical-aberration erratum.
- The cause of the Fig. 2(b)/(c) mismatch is unknown.
- The report's references 2 and 3 (特願平1-257884, 特願平2-66942) were not checked.
- Production glasses, clear apertures, stop diameter, zoom cam and focusing travel are not published.

## 2026-11-08 — Second review: diagram, labels and movement

Compared: the live page at every printed zoom station, with both movement overlays and the L10 inspector, against Fig. 1
(gazette p. 249, PDF p. 5), rendered at the scan's native 347 dpi. The p. 249 text names Fig. 1 as the first example's
section; it draws 13 elements, where Figs. 3 and 5 (Examples 2 and 3) draw 12. The wide panel governs; the middle and
tele panels draw the same rims and lands. Scale along the axis: S1 to S24 vertex crossings span 704.5 px for 65.71 mm,
10.72 px/mm, and the internal spans agree within about 0.3 mm. Across the axis: arc fits of S1, S20, S21 and S23 give
10.05 to 10.62 px/mm (mean 10.31), and the CCITT scan is 2866 × 3895 px at 347 ppi, an A4-wide page 4 % short
vertically; the wide-panel stop tick gives 10.6. Readings below use 10.4 px/mm, good to about ±2 %. At that scale the
outer rims read 4 % below to 6 % above the model, within the band, so they stay: S1 15.1, S3 13.4, S4 10.2, S6–S7 8.9,
S8–S9 8.5, S10–S11 6.2, S12 6.0, S14 5.5, S15–S16 5.5, S17 7.0, S19–S20 10.7, S22 12.6 and S24 14.9 mm. The model outline was laid
over the figure at matched scale with the baseline rims.

Fig. 1 ends four faces short of their element's edge with a flat land square to the axis, and draws L2 with a flat top
below L1's rim, so the L1–L2 interface stops short of L1's edge. Cuts and lands, against the baseline rims, with the
light each costs from the full-pupil `rimcost.mjs` lattice, wide open at infinity at every one of the 65 zoom stations:

| Face | Figure (mm) | Baseline sd | Final | Cost (points) | Verdict |
| --- | --- | ---: | --- | ---: | --- |
| S2, L1–L2 interface | 13.4 (L2 top) | 14.4 | sd 13.8, no land (cemented face) | 0.00 | Keep, slight; partly raised: 13.0 and 13.3 cut the engine half-field to 23.64° and 24.13°, 13.8 keeps 24.87° |
| S5, L3 rear | cap 8.7, edge 10.2 | 9.7 | sd 8.7, land to 9.7 | 0.00 | Keep, slight; L3 stays square at 9.7 mm |
| S18, L10 rear (asphere) | cap 5.5, edge 7.0 | 6.7 | sd 5.70, land to 6.7 | 2.97 | Keep, slight; partly raised: at the printed stations 5.6 costs 3.7 and the figure's 5.5 costs 5.0, at the wide corner |
| S21, L12 front | cap 10.5, edge 12.6 | 12.0 | sd 11.3, land to 12.0 | 0.00 | Keep, slight; partly raised to the 11.27 mm image-circle floor 10.38 mm ahead of the image |
| S23, L13 front | cap 12.4, edge 14.9 | 14.4 | sd 12.7, land to 14.4 | 0.00 | Keep, slight; partly raised: 12.4 costs 1.1 and drops the engine half-field to 24.45°, S23-limited |

The lands themselves cost nothing. Final worst loss against baseline rims: 2.97 points at 29.2° at the 37.61 mm station
(75.8 % → 72.9 %), all from S18; 2.35 points at 27.6° at wide on the printed-station fractions, and 2.4 points at the
printed stations alone. Corners, wide open at infinity: wide 30.3° 57.0 % before and after, wide 27.6° 88.1 % → 85.7 %,
middle 18.8° 93.2 % → 92.1 %, tele 11.6° 97.7 % unchanged. The surface audit is OK; the aperture audit finds all 65
stations within 3 % of the stated f-number with no rim limit; the image-circle audit lists S22, S23 and S24 as before,
with S23 now 3.75 mm short (was 2.05); field coverage reaches the 21.65 mm corner at all 65 stations. The meridional
trace shows no axial clip or blocked chief ray: S18 clears the 4.90 mm axial marginal ray, S23 the 11.83 mm chief ray.
Engine half-field 24.87° and f-number 3.8 at wide are unchanged.

Labels: the patent names groups 第1–第4レンズ群 and designates no elements, so G1–G4 and L1–L13 stand. The cemented
brackets were renamed D1/D2 → C1/C2 (with the elements' `cemented` names), because D3, D9 and D18 label spacings and
the patent's own D1 is a spacing. Group and bracket surface ranges are right (G1 1–3, G2 4–9, G3 10–18, G4 19–24; C1
1–3, C2 12–14). Every element type agrees with the signs of its radii (L3's −56,728 mm front makes it biconcave, as
labelled); roles are true; every element has a focal length (L10 shows +444.37 mm in the inspector, with its K, A4 and
A6 on the rear face). Only S18 is aspheric, the patent's one starred surface. The stop sits between L8 and L9 as Fig. 1
draws it. No `apd` tags: the patent names no special glass, and the maker-diagram record above notes none.

Movement: the 65 stations ascend 36.03 → 102.91 mm and every gap lists them in that order; the printed rows match the
p. 247 table (D3/D9/D18 6.40/8.00/13.37, 8.76/5.64/5.74, 12.40/2.00/2.88 mm). Every group moves objectward
monotonically from wide to tele, as the three Fig. 1 panels place them against the fixed image plane: G1 with G3 by
33.35 mm, G2 by 27.35 mm and G4 by 43.84 mm (the live zoom overlay shows the same four tracks and a 43.84 mm maximum).
Zoom labels are Wide and Tele. Focus is infinity-only: the slider reads "Not modeled" and the focus overlay shows no
focus movement, as the description says.

Colour and field: Fig. 2 prints d and g lines. At wide the model agrees with Fig. 2(a): d-line −0.08 mm at the
marginal ray and −0.10 mm at 0.7 of the pupil against about −0.07 and −0.10 read; g-line paraxial −0.09 mm against
−0.08, and about −0.15 mm at 0.7 of the pupil against −0.12; astigmatism at 30.3° T +0.22 / S +0.04 mm against +0.20 / +0.03; distortion
+2.7 % against +2.8 %. At tele the g-line paraxial focus is −0.18 mm against −0.16. At the middle station the g-line
paraxial focus (−0.18 against −0.09 mm), the meridional field (−0.24 against about −0.02 mm at 18.8°) and distortion
(+2.2 % against +1.7 %) disagree too, the same pattern as the recorded Fig. 2(b)/(c) spherical-aberration erratum. Every
catalog glass is within 0.05 of its printed νd, so no glass label is a suspect. L10, the only unresolved glass, has
nothing more in the patent than nd 1.49200 / νd 58.3 and the word plastic (p. 247); the same pair recurs in Example 3
(p. 248), so it is a real material, an acrylic.

Open:

- Closed: S18 carried no `A` label suffix, unlike the catalog's other aspheric faces. The surface label, the `gaps` key
  and the G3 bracket's end surface are now `18A`; the spacing keeps the patent's name D18.
- Closed: the L7 front rim reads about 0.4 mm above the L8 rear in Fig. 1, a step the cemented pair cannot draw without a
  land on the interface; all three faces stay at 5.7 mm. The schema does not allow `rimExtensionSd` on a cemented
  interface (`LENS_DATA_SPEC.md`, Rim extensions), and the 0.4 mm difference is inside the reading band.

## 2026-11-08 — Third review: diagram, labels and movement

Compared: the live page at the three printed stations (also at three times device scale), both movement overlays and the
L2, L3, L10, L12 and L13 inspectors, against Fig. 1 at the native 347 dpi. Scale proved again: S1 to S24 vertex crossings
span 705 px for 65.71 mm (10.73 px/mm), and the image plane sits at the same x in all three panels; arc fits of S2, S3,
S20 and S23 give 10.26 to 10.62 px/mm across the axis (rms ≤ 0.6 px) and the stop tick's inner end 10.7, so 10.4 px/mm
stands. The second review's readings repeat within about 0.2 mm (caps: S5 8.6, S18 5.1 to 5.4, S21 10.7, S23 12.2 to
12.6 mm); outer rims read 5 to 6 % above the model, inside the band.

| Face | Before | After | Fig. 1 reading | Verdict |
| --- | --- | --- | --- | --- |
| S3, L2 rear | 13.0 | 13.8 | flat L2 top at 13.5 to 13.7 mm from S2 to S3 | Square-rim error: the page drew L2's top as a wedge from 13.8 to 13.0 mm. Both faces now end at 13.8 mm; S2 cannot go lower without cutting the engine half-field. Adds light only |
| S18, L10 rear (asphere) | 5.70, land to 6.7 | 5.71, land to 6.7 | cap 5.1 to 5.4 | Light budget: on the zoom slider's own 0.004 grid, t = 0.040 (about 37.4 mm, between nodes 2 and 3) lost 3.16 points at 29.4° and t = 0.044 lost 3.04. 5.71 is the smallest two-decimal value that keeps every state within 3.00 |

Second-review land and cut verdicts re-measured: unchanged (S2, S5, S21 and S23 cost 0.00; S18 kept, slight, partly
raised). Worst loss against the package rims: 2.91 points at 29.2° at the 37.61 mm node over all 65 nodes, 2.2 points at
27.6° at wide over the nine zoom fractions, and 2.97 points at 29.4° at t = 0.040 over the 251 slider positions and a
0.0002 grid from t = 0.038 to 0.045. Corners wide open at infinity: wide 30.3° 57.0 %, wide 27.6° 85.7 → 85.9 %,
middle 18.8° 92.1 → 92.3 %, tele 11.6° 97.7 %. Engine half-field 24.87° and f-number 3.8 at wide are unchanged. The
surface audit is OK; the aperture audit finds all 65 stations within 3 % with no rim limit; the image-circle audit
lists S22 to S24 as before; field coverage reaches 21.65 mm at all 65 stations; no axial clip or blocked chief ray.

Labels and tags: every type agrees with its radii, and every inspector focal length matches a thick-lens recomputation
(L10 +444.37 mm). Roles are true; C1 (S1–S3), C2 (S12–S14), the G1–G4 brackets and the stop between L8 and L9 are as
drawn; only S18 carries the A marker; no `apd` tags. L10: the patent says only プラスチックレンズ (p. 247, right column),
with nd 1.49200 / νd 58.3, the same pair as Example 3's S15 (p. 248). The catalog has no PMMA row (`glassnear.mjs`
finds none; its only plastic is a polycarbonate), so L10 stays Unmatched on the Abbe fallback; the other twelve
elements use Sellmeier curves.

Movement: the printed rows match p. 247. Against the fixed image plane every group moves objectward and monotonically,
wide → middle → tele: G1 and G3 by 12.46 + 20.90 = 33.35 mm, G2 by 10.10 + 17.26 = 27.35 mm, G4 by 20.09 + 23.76 =
43.84 mm. Fig. 1's panels give 32.6, 27.4, 33.5 and 43.2 mm for S1, S4, S10 and S19. The 65 stations ascend; D3, D9
and D18 are linear in station index between printed rows, D3 + D9 is 14.40 mm at every node, the f-numbers step by
0.059375 to the middle and 0.0875 after, every node is in paraxial focus, and between nodes the linear BF leaves at
most 0.005 mm of defocus. Focus is infinity-only: the slider reads "Not modeled" and the focus overlay shows zoom.

Fig. 2(b)/(c): the model's middle station gives a d-line marginal of −0.12 mm and −0.16 mm at 0.7 of the pupil,
close to Fig. 2(c)'s −0.15 and −0.18; its tele station gives +0.22 and +0.17, on Fig. 2(b)'s +0.22 and +0.16. The
two spherical-aberration panels therefore look interchanged. The astigmatism panels do not follow (Fig. 2(b)'s
meridional curve is about −0.01 mm at 18.8°, the model −0.24 at the middle and −0.22 at tele), and the tele g line
sits about 0.1 mm below Fig. 2(b)'s, so the erratum stays unresolved.

Open:

- The amendment (手続補正書) is still unseen; the local PDF ends at gazette p. 252 with no amendment pages. Reading it
  needs J-PlatPat.
- Glass: the lead-free S- OHARA rows postdate this 1989–90 design. L3 and L9 keep their S- rows, because the period
  rows (LAH66, PBL25) leave the colour unchanged.

L4 now carries PBH1 (OHARA), the period lead flint at the same coordinate. It moves the wide g line onto Fig. 2(a):
paraxial −0.081 mm against −0.080 read, and −0.136 at 0.7 of the pupil against −0.117. With S-TIH1 the values were
−0.091 and −0.146.
