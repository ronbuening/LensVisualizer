# Wray Table A qualified pre-integration audit

2026-11-12. Hidden representative reconstruction, not exact factory identity, release, PR or deployment.

## Literal and inferred separation

Nine source radii, eight axial intervals, five mean-index/Abbe pairs, one cemented interface and two separate zero-vertex air gaps are retained at uniform 50× scale. Table B is not merged or rejected. Cap and iris dimensions are explicitly inferred; the calculated infinity BFL and assumed d reference are not patent measurements. Contemporary secondary family association is not manufacturer-authenticated example selection.

## Failed and corrected trials

The original central-gap midpoint stop passed native construction but failed explicit full-cap clearance by 0.099310390 mm. That trial and its outputs remain in the prior feasibility checkpoint. The replacement is the midpoint of the geometrically permissible iris interval, not a source-spacing repair or ray-performance fit. Independent geometry review confirms 0.446412838 mm clearance either side. Source total central air gap remains 11.04 mm.

Native geometry skips zero air intervals. Separate analytic signed-sag comparisons and 10,001 radial samples show zero separation only at the axis and positive separation elsewhere for S2/S3 and S7/S8 at the inferred caps. No spacer, collapse, surface clipping, rim-extension exception or geometry override was used. Default gap-sag/rim controls remain 0.9.

## Scoped verification and limitations

Corrected native typed-module import/construction and strict isolated TypeScript pass against recovered main 4caca439fdd7186caf6cf458b1c56e6e114b752b. Native EFL 50.007365467 mm; f/2; iris radius 7.751939273 mm. Sparse nominal-frame pupil rays retain off-axis clipping/blocking. No throughput, MTF, retail near focus, actual image coverage or manufacturing fidelity certification.

Final authoring changes only key/name metadata from the corrected pilot; lens remains hidden. Current repository/corpus lint, format, full tests, production build and browser QA are deferred to integration under the agreed split. No global pass claim. All optical source and inferred-geometry limitations must travel with the triad.


## 2026-11-13 — Re-authored from Table B

Codex independently re-read the local US2499264A.pdf page images rendered with pdftoppm at 300 dpi. Table B (PDF page 3, printed page 3) and claim 5 (PDF page 4, printed page 5) agree on every one of the nine signed radii, eight axial intervals, five mean indices and five Abbe numbers. S4 is the sole cemented interface (L2 + L3); d2 and d7 are zero vertex air gaps between separate surfaces, not cement. d4 is the thin L3 glass thickness; d5 is the central air gap and is the only printed interval divided for the inferred iris. All surfaces are spherical. The scratch transcription was written before replacing the prescription.

The validator report verdict was “INVALID as named”: the delivered Table A model differs from both public Unilite diagrams. Its evidence favors Fig. 2/Table B: rear/front element axial thickness ratio f/e is 1.29 in the public diagram, 1.22 in Table B and 0.53 in Table A; (a+b)/e is 1.05 / 1.03 / 1.41 and c/e is 0.80 / 0.78 / 0.95. Independent inspection confirms the thick biconvex rear element with strongly curved rear face in [klassik-cameras](https://www.klassik-cameras.de/wray-unilite2.jpg) and [oldlens.com](https://oldlens.com/wray%20unilite.jpg). Table B is therefore the selected embodiment; this is a production correlation, not proof of factory radii, melts or supplier identity. Table A/Fig. 1 remains the patent’s other embodiment.

### Table B transcription, checked against claim 5

Lengths below are the printed normalized values; indices and Abbe numbers retain the printed precision. The patent labels the EFL 1.000. The validator’s 0.99996 is the computed EFL from the rounded prescription, not five printed decimal places.

| Surface | R, normalized | Following d, normalized | Medium after | n | V |
| --- | ---: | ---: | --- | ---: | ---: |
| r1 | +0.5373 | d1 0.1166 | L1 (e) | 1.691 | 54.8 |
| r2 | +1.547 | d2 0 | air, separate surfaces touch at axis | 1 | — |
| r3 | +0.2505 | d3 0.1049 | L2 (a) | 1.613 | 57.6 |
| r4 | +0.5793 | d4 0.0152 | L3 (b), cemented to L2 | 1.700 | 30.3 |
| r5 | +0.1964 | d5 0.2788 | air, split by inferred iris | 1 | — |
| r6 | −0.2153 | d6 0.0912 | L4 (c) | 1.613 | 36.9 |
| r7 | −0.3187 | d7 0 | air, separate surfaces touch at axis | 1 | — |
| r8 | +2.990 | d8 0.1420 | L5 (f) | 1.621 | 60.3 |
| r9 | −0.5782 | calculated paraxial back focus | air | 1 | — |

### Changes and scale verification

The source prescription changed from Table A ×50 to Table B ×50; it is a re-authoring, not a uniform rescale of Table A. A scratch Python script parsed the transcription and multiplied every optical length by the single factor 50: nine R, ten d including both inferred stop intervals and paraxial BFD, nine sd and five element focal lengths (33 values including zero intervals). No lengths occur in the projection block; its angular 46°/23° values are retained. There is no authored stop sd, imageCircleMm or conic to rescale. The final file was parsed again and each result checked against normalized length ×50 within 0.0000005 mm print rounding; zero lengths remained zero, and n, V and angles were unchanged. Marketing/design catalogue millimetres and the infinity-focus sentinel are not normalized prescription dimensions.

| Surface | R old → new, mm | d old → new, mm | sd old → new, mm |
| --- | --- | --- | --- |
| 1 | 27.605 → 26.865 | 4.765 → 5.83 | 17 → 17.6 |
| 2 | 96.5 → 77.35 | 0 → 0 | 17 → 17.6 |
| 3 | 14.21 → 12.525 | 5.945 → 5.245 | 11.5 → 10.8 |
| 4 | 34.6 → 28.965 | 0.75 → 0.76 | 11.5 → 10.8 |
| 5 | 10.84 → 9.82 | 6.065723229 → 7.195279 | 9.5 → 8 |
| STO | flat → flat | 4.974276771 → 6.744721 | derived → derived |
| 6 | -12.23 → -10.765 | 4.515 → 4.56 | 9.5 → 8.1 |
| 7 | -14.855 → -15.935 | 0 → 0 | 9.5 → 10.9 |
| 8 | 63.825 → 149.5 | 2.51 → 7.1 | 11.5 → 14.6 |
| 9 | -81.2 → -28.91 | 28.547653359 → 22.168895 | 11.5 → 14.6 |

| Element | n / V old → new | Isolated focal length, newly recorded, mm |
| --- | --- | ---: |
| L1 | 1.613 / 59.9 → 1.691 / 54.8 | 56.882895 |
| L2 | 1.613 / 59.9 → 1.613 / 57.6 | 32.106119 |
| L3 | 1.700 / 30.3 → 1.700 / 30.3 | -21.576906 |
| L4 | 1.613 / 59.9 → 1.613 / 36.9 | -81.418342 |
| L5 | 1.613 / 59.9 → 1.621 / 60.3 | 39.614175 |

The focal lengths agree with probe.mjs --elements (+56.88 / +32.11 / −21.58 / −81.42 / +39.61 mm); the cemented group is −146.39 mm. L2 and L3 gain cemented: D1, and a D1 drawing bracket spans surfaces 3–5. No element type or glass-label cleanup was performed.

Other fields: name “Wray Unilite 50mm f/2 (Table A representative)” → “WRAY UNILITE 5cm f/2”; source.patentNumber “US 2499264” → “US 2,499,264 A”; source.example Table A/A → Table B/B; assignee “Wray Optical Works Limited” → “Wray (Optical Works) Limited”; catalog.imageFormat absent → “135-full-frame”; catalog.closeFocusM absent → { marketing: 0.914 }. The author remains Charles Gorrie Wynne, catalog.focalLengthMm remains { marketing: 50, design: 50 }, the five indexReference values remain “d”, and focus remains infinity-only. No mount id is invented. The display name uses the requested metric option because the [oldlens front-ring photograph](https://oldlens.com/R1040320b.jpg), linked from its [Unilite page](https://oldlens.com/unilite50f20.html), visibly reads “50mm”, equivalent to 5cm; it does not read “2in.” or literally “5cm”. This source decides the metric choice, with the engraving wording difference disclosed. The klassik-cameras camera photographs likewise show metric “50mm”. Camera-wiki returned HTTP 403 and supplied no deciding evidence. Remote photographs were inspected in memory, not saved into scratch.

File form: old // header and direct default-export object → required first-line relative type import, one JSDoc source/scale/inference block, const LENS_DATA with satisfies LensDataV2Input, then export default LENS_DATA. Visible remains false; key and all filenames remain unchanged. Prescription-specific analysis sections now describe Table B, its actual glasses/shapes, thick biconvex rear element, the public Figure 2 matches and new diagnostic results; unrelated wording is retained for cleanup.

### Figure-derived apertures and inferred iris

The validator’s Fig. 2 crop was measured at a 1996 ×1250-pixel scratch preview. First-to-last vertex span is approximately x=380…1390, 1010 px; the Table B axial prescription length excluding BFD is 37.435 mm, giving 26.9801 px/mm. Individual axial thickness readings are approximate (front e about 145 px, a+b about 160 px, c about 126 px, rear f about 190 px), so the aggregate scale is used rather than forcing one schematic element to exact scale. Approximate optical half-heights are 474 px (S1/S2), 291 px (S3/S4), 216 px (S5), 218 px (S6), 293 px (S7), and 393 px (S8/S9). Rounded inferred semi-diameters are 17.6 / 17.6 / 10.8 / 10.8 / 8.0 / 8.1 / 10.9 / 14.6 / 14.6 mm. Leader lines, dimension arrows and square extensions beyond the S5/S6 optical curves are excluded. These are approximate diagram apertures, not maker dimensions. audit:aperture --raise requested zero raises; none was applied. Pixel calibration is recorded only here, not in the data header.

The iris rule is the midpoint between the axial positions of the S5 and S6 optical rims. For these inferred caps, their offsets from the S5 vertex are 4.125054873 and 10.265502450 mm. The authored stop offset is 7.195279 mm, giving 3.070224127 / 3.070223450 mm clearance and leaving 6.744721 mm to S6. Their sum is the printed d5 ×50 =13.940 mm. The engine derives stop radius 7.082180177 mm from f/2; it is not a source dimension. Signed-sag checks of 10,001 radii per zero-vertex pair give nonnegative separation everywhere (zero only on axis); S2/S3 rim separation is 5.424157823 mm and S7/S8 is 4.709022878 mm. No source spacer, overlap allowance or optical optimization is introduced.

### First-order results and audits

Baseline Table A: EFL 50.007365467 mm, BFD 28.547653359 mm, TL 58.072653359 mm. Re-authored Table B: EFL 49.998145399 mm, BFD 22.168895344 mm (stored 22.168895), TL 59.603895 mm, optical track excluding BFD 37.435 mm. The f-number remains 2.000. Built normalized Table B EFL 0.999962907989 →49.998145399459 mm, ratio 49.99999999999999; built/probe f-number 2 →2. All changes of EFL/BFD/TL between Table A and Table B arise from the approved embodiment replacement, not from fitting.

The required literal assignee name exposes a main-checkout validator conflict: src/optics/prescription/validate/patent.ts rejects every ASCII parenthesis, including those in the legal name. The delivered file retains the requested “Wray (Optical Works) Limited”. Direct built.mjs/probe.mjs and audit:surface / audit:aperture therefore refuse it with `"source.assignees[0]" must omit parenthetical source annotations`. Direct audit:image-circle still checks it: 1 lens, 0 undersized, 0 skipped. Direct audit:field-coverage skips the hidden file.

To isolate the optics, the four audits plus built.mjs/probe.mjs/lsa.mjs were run from the required read-only main checkout on tableB-audit.data.ts in scratch. That copy differs from the delivered object only by visible: true and assignee “Wray Optical Works Limited”; no optical number differs. A corresponding normalized scratch copy uses catalogue focal reference 1 for the scale check. These results do not claim that the delivered file passes ingest:

- audit:surface: OK — no validation errors.
- audit:aperture: 1 lens / 1 station within 3%; traced f/1.999999998, limiter STO; 0 rim, trace, iris or failed stations. --raise: 0 surfaces need a raise.
- audit:image-circle: 1 checked, 0 undersized, 0 skipped.
- audit:field-coverage --below=1.01: 96.7412457% of the 21.65 mm nominal 24×36 corner height. Declared 23° half-field →20.944479686 mm, diagnosis “declared”; full corner chief ray clear at 23.735870339°, no rim clips, 0 skipped. The guide’s 46° diagonal field is retained; the shortfall is not repaired by enlarging rims or the declared angle.
- lsa.mjs: pupil fractions 1.0 / 0.85 / 0.7 / 0.5 give +0.231 / −0.160 / −0.229 / −0.162 mm relative to the near-axis crossing, a small residual LSA consistent with the rounded literal Table B.
- Auxiliary clearap.mjs --Y 21.65 --scan 60 finds the corner chief ray, but its independent axial Newton trace fails before the stop (stopR NaN; upper/lower no-ray-found). Its zero-filled later heights are not evidence of axial or bundle clearance; the native aperture audit is the axial result. No full-bundle clearance claim is made from that helper.
- Scoped Prettier check passes for all three edited files; git diff --check is clean. No full tests, typecheck, lint, build, generation, server, git mutation or deployment was performed.

Open: reconcile the required legal-name parentheses with the canonical validator before enabling the lens; retain the literal name until the coordinator resolves that conflict. Register a Wrayflex mount taxonomy id (the validator cites M41.2 ×26 tpi); lensMounts stays omitted. The unchanged filename/key still say Table A and need the coordinator’s later rename. Review the requested “5cm” display styling against the actual “50mm” engraving during cleanup. Element type/glass labels, remaining analysis wording and any drawing treatment of mechanical lands belong to that pass. Full optical supplier/factory identity, finite-focus mechanics, full-aperture corner performance, browser rendering and deployment remain unverified.
