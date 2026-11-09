# Canon RF 24mm f/1.8 Macro IS STM: source audit

Audited 2026-11-09.

- Source: US12066598B2, Numerical Example 3, PDF p23, columns13–14; Figure5 PDFp6 and Figure6 PDFp7. Application US20220252840A1 p23 independently matches all five S17 polynomial coefficients. Grant front-page pixels confirm Yuki Shinzato and printed Canon Kabushiki Kaisha, normalized to Canon Inc. for the metadata generator.
- Complete 21-row source round trip, including literal effective diameters, index/Abbe pairs, radii, thicknesses and asphere. No rear plate. No glass identity substitution. No optical prescription repairs.
- All refracting semi-diameters are the published effective diameters divided by2. Effective clear apertures differ between faces: the engine joins them with tapered edge segments. The source schematic shows additional square mechanical lands. No invented rim cut or enlargement was used to make those lands; the delivered section shows optical clear geometry rather than a certified barrel/manufacturing profile.
- S8 clear-envelope diameter17.43mm retained in source packet, comments and analysis. Engine ordinary-prime iris is calibrated from F1.85: SD8.4669295418mm. Entire printed envelope would imply paraxialF1.7973401781. Neither source figure was silently changed.
- EFL24.7201029985mm; BFL11.0022714389mm versus literal11mm; track80.99mm versus rounded81mm. Source image radius19.34mm, never enlarged to full-frame corner. Exact field41.189188° reaches19.339973mm; declared half-field41.2°.
- Canonical surface/rim validation passes with default thresholds and no overrides; eleven focus-state render checks have exactly zero hidden trim. Normalized radius/index signature finds no duplicate among1095 baseline designs; this is a design fingerprint, not proof that no related patent exists.
- d17-only close state adds13mm; independent matrix gives object-to-image136.002120mm and magnification−0.510502. Intermediate states are interpolations, not published source states.
- Full-pupil grid64 throughput at center/mid/edge: infinity100/73.8538/32.8377%; midpoint100/77.1995/41.8216%; close100/79.5539/48.8848%. No unaimed or failed rays in these samples. Mechanical vignetting remains explicit.
- Reference-wavelength diffraction MTF at source plane converges center/mid/edge through80lp/mm with max grid128. At40lp/mm S/T: center0.918303/0.918303; mid0.582256/0.657800; edge0.318004/0.581949. Best-axial diagnostic shifts+0.00435891mm and is saved separately, never applied to the source. Polychromatic estimates depend on approximate dispersion; no measured or factory-certified MTF claim.
- The metadata generator requires the modern assignee name Canon Inc.; the printed Canon Kabushiki Kaisha is kept as provenance in the analysis.

## 2026-11-09 — Deployment validation

Independent check of US 12,066,598 B2 Numerical Example 3 (p. 23, cross-checked against US 2022/0252840 A1 pp. 23–24):
all 21 rows, the 21 effective diameters (sd = ED/2), the stop at S8, S17's asphere (K and A4–A12), d17 2.56 → 15.56
and BF 11.00 agree; no cover glass in the table. Engine EFL 24.720 (24.72), F1.85, half-field 41.2°, close state
−0.511× at 136.0 mm object to image (Canon: 0.5× at 0.14 m). Attribution strong: Canon's Camera Museum drawing
matches element by element (11/9, PMo asphere on L9, UD on L7, IS lens behind the stop).

Deployment changes: element focal lengths L7 41.28 → 41.73 mm and L8 52.33 → 26.28 mm, the patent's single-lens data
for Example 3 (the package's L8 value is Example 2's); the analysis follows, and its L5 description becomes biconvex
(R 70.143 / −252.397). `patentNumber` "US 12066598 B2" → "US 12,066,598 B2" (house form).
Open (closed 2026-11-09 in the cleanup pass below): package wording (subtitle "inferred product association", process notes in this log) remains for the cleanup pass.

## 2026-11-09 — Cleanup and wording pass

Data file: the header comment is rewritten as plain technical prose with every fact kept (example data, no scaling,
sd = ED/2, stop handling, focus, BF, image height and distortion). Subtitle "US 12066598 B2 Numerical Example 3 —
inferred product association" → "US 12,066,598 B2, Example 3 — construction match to the production lens", since the
Canon Camera Museum diagram matches Fig. 5 element by element. New `catalog.specs` (11 ELEMENTS / 9 GROUPS, DESIGN
f = 24.72 mm, DESIGN F/1.85, 1 ASPHERICAL SURFACE / 1 ELEMENT, FRONT-GROUP FOCUS; 0.5× MAX) and
`catalog.closeFocusM.marketing` 0.14 (Canon). The aperture follows Canon's f/22 minimum and 9 blades, as the RF 35 and
RF 16 siblings do: `fStops` gains 22, `maxFNumber` 16 → 22, `blades` 9. L7 gets `apd: "inferred"`, because Canon's
diagram marks it as the UD element and nd 1.49700 / νd 81.5 is a fluorophosphate UD-class glass. All eleven glass labels
change from "Unmatched (patent nd …, vd …)" to exact catalog equivalents (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15, each resolved
by the glass lookup): S-BSL7, TAFD35 (L2, L8), TAFD37A, S-TIH10, S-LAL12, S-NBH56, S-FPL51, E48R (ZEON polymer, L9),
S-LAL18 and S-NSL36. Each element gets a `role`; `doublets` D1 (S5–S7) and D2 (S11–S13) are added for the existing
cemented tags. The focus description now states the moving group, the 13.00 mm travel and the computed close state in
plain words. R, d, nd, νd, sd, the asphere, d17, the stop and the patent fields are unchanged.

Analysis: the identification section now gives the product (August 2022, 11/9, PMo asphere, UD, 0.14 m, 0.5×, f/22,
9 blades), a numbered evidence list, and the Canon diagram comparison, including why Examples 5 (no IS, different
shapes) and 6 (two front negatives, no UD glass) fit worse. The stop paragraph is rewritten: the printed 17.43 mm
agrees with F1.85 at real-ray height (an f/1.85 marginal ray entering at 6.68 mm crosses S8 at 8.72 mm, and the
printed S3–S11 diameters equal that ray's heights), so there is no conflict with F1.85; the paraxial iris rule gives
8.467 mm. Added: architecture with ¶ citations, the glass table, a focus table, the asphere equation with its
departure (+0.48 mm at the clear radius), Table 1 conditional values, and the Canon Museum and The-Digital-Picture
sources. Removed: process and tooling wording ("engine's ordinary-prime contract", "hidden-trim", "validation
package", "first-surface coordinate convention", "typo repair", MTF and audit numbers). "Verification and
Qualifications" becomes "Model Scope and Limitations". This log loses the baseline hash, the test-count line and the
"held by coordinator" note.

Engine numbers before and after are identical: EFL 24.7201 mm, FOPEN 1.85, half-field 41.2°, stop radius 8.4669 mm,
BFD 11.0023 mm, close state 0.13600 m at −0.5106×. Only the aperture slider limit changes (16 → 22). The surface audit
is OK, and the aperture audit is within 3 % of the stated f-number, with no rim limit.

Open (closed 2026-11-09 in the semi-diameter pass below): the drawing joins element faces of different printed diameters
with sloped edges (L1, L6 most visibly), whereas Fig. 5 and Canon's diagram show square lands. Rims were left unchanged
in this pass.

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: US 12,066,598 B2, Fig. 5 (sheet 5, PDF page 6), the Example 3 cross-section at infinity. The page is a 300 dpi
CCITT scan, measured at native resolution, with the axis vertical at column 1399 and the object at the bottom.
Vertex crossings from S1 (row 2702.5) to S21 (1106.5) span 1596 px for 69.99 mm, and S1 to the image line (856) spans
1846.5 px for 80.99 mm: 22.80 px/mm axially. Arc fits give the same radial scale, 22.6–22.9 px/mm, on S2 (R 16.734),
S11 (R −15.958), S13 (R −28.609) and S20 (R −24.031), so the figure is isotropic.

The table prints an effective diameter for every surface, and every `sd` stays at half of it. Fig. 5 draws each
element's edge 4–8 % beyond those radii. The edges, in mm at 22.80 px/mm against the larger printed face, are: L1 17.11
(16.5), L2 10.83 (10.27), D1 10.31 (9.715), L5 8.73 (8.12), D2 10.31 (9.75), L8 12.63 (12.035), L9 13.42 (12.775),
L10 15.09 (14.5) and L11 17.37 (16.73). This is a uniform drawing allowance, not a reason to move printed radii.

Every element in Fig. 5 is square-edged. Where the two faces print different radii, the figure ends the smaller cap
with a flat land out to the edge. The cap end measures as a share of the drawn edge: S2 0.789 (printed ratio 0.778),
S11 0.790 (0.771) and S20 0.910 (0.909). The model drew those elements with sloped edges. Lands
(`rimExtensionSd`) now square every element whose faces differ by enough to show in the drawing:

- S2 12.845 + land to 16.5 (L1, S1's radius)
- S7 9.095 + land to 9.715 (rear of D1, to S5)
- S11 7.515 + land to 9.75 (front of D2, to the S12 junction)
- S14 11.4 + land to 12.035 (L8, to S15)
- S20 15.205 + land to 16.73 (L11, to S21)

Faces that differ by less than 0.4 mm are left sloped: S3/S4 0.075, S9/S10 0.145, S12/S13 0.255, S16/S17 0.375 (L9,
2.9 % of its radius) and S18/S19 0.2 mm. A step of under about 3 px at the page's 7.3 px/mm cannot be seen.

No `sd`, stop, `R`, `d` or focus value changed. EFL 24.7201 mm, F1.85, half-field 41.2°, stop radius 8.4669 mm and BFD
11.0023 mm are identical to the starting file. Corner illumination is unchanged at every field, 32.8 % at 41.2°
before and after, with 0.0 points lost against the starting rims. The real-ray clearance trace shows no axial clip
and no chief-ray block at infinity or at the printed close state (d17 15.56 mm). The surface audit passes with the
lands checked at both focus keyframes. The aperture audit reports no rim limit. Image-circle and field-coverage
audits are unchanged (19.34 mm reached at 41.2°).

The page renders at infinity and at close focus match Fig. 5's square edges and lands on L1, D1, D2, L8 and L11.
Canon's Camera Museum drawing shows the same square-edged elements and the same land on L1's rear face. It is drawn
to a different scale and is used only for order and proportion.

Open: none for rims. L10 keeps its faint 0.2 mm edge slope (L9's 0.375 mm slope closed 2026-11-09 in the second
review below).

## 2026-11-09 — Second review: diagram, labels and movement

Compared the local page (infinity, close focus, the focus-movement panel, the L5, L7 and L9 inspectors) with Fig. 5
(sheet 5, PDF p. 6, 300 dpi scan) and Fig. 6A. Scale re-proved: axis at column 1398.75; vertex rows S1 2702.5 to S21
1106 give 22.81 px/mm, S3 to S19 22.80 and S1 to the image line 22.80; arc fits on S2 (R 16.734) and S20 (R −24.031)
give 22.78 and 22.84–22.89 px/mm across the axis.

No `sd` differs from the baseline. Every land lies outside a printed effective radius, so each costs no light by
construction; `rimcost.mjs` confirms 0.0 points at every field for each one.

| Face: sd + land to             | Fig. 5 (mm, at 22.80 px/mm)                                     | Verdict             |
| ------------------------------ | --------------------------------------------------------------- | ------------------- |
| S2 12.845 + 16.5 (L1)          | edge 17.15, cap end 13.4 (ratio 0.78; printed 0.778)            | keep: drawn         |
| S7 9.095 + 9.715 (D1 rear)     | S5, S6 and S7 all run out to the 10.3 edge                      | keep: drawn square  |
| S11 7.515 + 9.75 (D2 front)    | edge 10.32, cap end 8.03 (0.78; printed 0.771)                  | keep: drawn         |
| S14 11.4 + 12.035 (L8)         | both faces run out to the 12.63 edge                            | keep: drawn square  |
| S16 12.4 + 12.775 (L9), new    | both faces run out to the 13.4 edge                             | added: drawn square |
| S20 15.205 + 16.73 (L11)       | edge 17.37, cap end 15.66 (0.90; printed 0.909)                 | keep: drawn         |

The page drew L9's rim as a 0.375 mm rise over its 2.2 mm edge, about 3 px and a 10° slant, where Fig. 5 and Canon's
drawing both show a square end; S17 meets the drawn edge 1.30 mm objectward of its vertex, as the asphere predicts. The
surface audit passes with the new land. Left sloped, each under 2 px on the page: D2's rear
S12/S13 0.255 mm (Fig. 5 runs S13's arc into the corner with no land to read), L10 0.2, L5 0.145 and L2 0.075 mm.

Light: worst loss 0.0 points against the baseline; corner 32.8 % at 41.2° wide open at infinity. A real-object trace of
the close state (object 42.01 mm ahead of S1, 136.0 mm from the image, 48 × 48 stop lattice) gives 92.2 % on axis and
48.1 % at the 19.34 mm image corner (object height 39.5 mm), the same with baseline rims. The on-axis loss is the
printed S9–S11 diameters trimming the full-iris cone at close range; the app's parallel-beam close state does not show
it. The same tracer gives 33.0 % at 41.19° at infinity, against the app's 32.8 %.

Brackets and labels: added `groups` FOCUS (S1–S17, L1–L9) and FIXED (S18–S21, L10–L11), the mechanical groups that
Fig. 5's focus line marks (it runs from L1 to L9). The patent's units L1/L2/L3 are not used as brackets: L2 straddles
the focusing gap d17, so the movement panel would track it as a half-moving group, and the names clash with elements
L1–L3. The movement panel now shows two groups with 13.00 mm maximum travel instead of nine. L5's label "Element 5"
becomes "Element 5 — IS", after Fig. 5's IS brace (col. 3, ll. 37–41). Element types agree with the signs of R on all
eleven elements; S17 is the only asphere and the only face the page marks A; the stop sits between D1 and L5; the D1
(S5–S7) and D2 (S11–S13) brackets are right. L7's `apd: "inferred"` stands: the patent prints only nd and νd and
argues D2 from the Abbe difference (¶0050), and Canon's drawing colours L7 as the UD element.

Movement: keyframe 0 is d17 2.56 mm (infinity) and keyframe 1 is 15.56 mm (close), as printed. S1–S17 move 13.00 mm
toward the object, as Fig. 5's arrow (∞ to CLOSE RANGE, pointing objectward) and the text ("move to the object side",
col. 3, ll. 28–33) say; L10, L11 and the image plane stay fixed. The slider's far end reads 14 cm.

Colour: Fig. 6A prints d and g. Read at 0.00254 mm/px, the paraxial g focus is +0.036 mm against the model's +0.037
and d +0.003 against +0.002; at 0.84 of the pupil g is +0.048 against +0.051 and d +0.009 against +0.010. All within
the reading error. All eleven labels resolve to exact catalog rows; no medium has constant dispersion; the patent prints
no θgF or other line indices.

Engine before and after: EFL 24.7201 mm, F1.85, half-field 41.2°, stop radius 8.467 mm, close state 0.1360 m.

(Closed the same day by the coordinator.) Open: S17 is labelled "17" without the house "A" suffix; renaming it moves the `gaps` key, which this pass may not edit.

Coordinator follow-up, same day: the aspheric surface is now labelled `17A`, with the `17A` focus gap (`d17`) and the
focus-group bracket end renamed to match; the bracket texts read "Focus group" and "Fixed". Engine values unchanged.
