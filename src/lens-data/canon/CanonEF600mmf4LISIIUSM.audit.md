# Audit Log - CANON EF 600mm f/4 L IS II USM

Patent: US 2011/0090576 A1, Third Numerical Embodiment / Figure 5

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 4, Figure 5, at 600 dpi:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonEF600mmf4LISIIUSM.data.ts patents/US20110090576A1.pdf 4 0.18,0.24,0.70,0.46 --dpi=600`.
- Reliable front optical rims reproduce the patent's tabulated effective diameters: L11 is about 73.45 mm versus
  72.845 mm, L12 is 59.83 mm versus 59.735 mm, L13 is 59.11 mm versus 58.48 mm, and L15 is 41.58 mm versus
  40.385 mm.
- Labels, unit brackets, and the separate rear `G` plate contaminate automated rear measurements. The authored SDs are
  direct halves of the patent's effective-diameter column and remain stronger evidence than those rows.
- Retained all surface and stop semi-diameters. The image-circle floor reports zero undersized surfaces and the surface
  validator reports no geometry errors.

### Glass classification

- Replaced three closed `Unmatched` annotations with vendor-neutral patent coordinate classes: two `835427` elements
  and one `720502` element.
- Existing S-LAH55 and S-LAL10 coefficient-backed curves are coordinate-compatible modeling equivalents. The patent's
  authored `dPgF` values remain authoritative, so no production supplier or exact melt identity is inferred.
- The lens improves from 12/15 to 15/15 strict Sellmeier and trusted-chromatic coverage with no coordinate mismatch.

### Identity and metadata

- Verified the display name `CANON EF 600mm f/4 L IS II USM` against Canon's official product identity and the
  repository's spacing policy.
- Normalized the structured assignee and subtitle to the repository-wide `Canon Inc.` spelling; the analysis retains the
  patent's printed Canon Kabushiki Kaisha wording.

## 2026-08-21 - Diagram-label and movement follow-up

### Patent-figure review

- Re-inspected Figure 5 at 600 dpi against the site screenshot. The authored semi-diameters remain direct halves of the
  patent's effective-diameter column and are stronger evidence than contaminated figure rows, so no SD changed.
- Replaced numeric element tags with the patent's L11–L25 identifiers, using `a`/`b` only to distinguish physical members
  of cemented patent groups.

### Focus annotation root cause

- The prescription's infinity-to-close gap order was correct, but the diagram's single `LF` annotation combined fixed
  L11–L15 with moving L16. Movement analysis therefore averaged the two and displayed only half the real shift.
- Split the display spans into fixed LF, imageward-moving `L16 FOCUS (−)`, and fixed LR. L16 now reports its full
  +20.112105825 mm imageward translation. This prime lens has no zoom travel.

## 2026-10-04 — Drop-in filter drawn as an element

- Patent check (US 2011/0090576 A1, Third Numerical Embodiment): rows 28–29 tabulate glass block G as two flat
  surfaces, 2.00 mm thick, nd 1.51633, νd 64.1, θgF 0.5352, X −0.0007, effective diameter 31.00 mm, 12.00 mm behind
  row 27. The description calls G "a glass block, such as an optical filter or a faceplate" and defines back focus
  with it absent.
- The file had omitted G and carried the 121.13 mm plate-absent back focus on surface 27. G is now drawn: surfaces
  28–29 and element 16 (`Plane-Parallel Plate`). Surface 27 keeps the patent's 12.00 mm, and
  121.13 − 12.00 − 2.00/1.51633 = 107.811026 mm of air follows the plate. The authored track is 475.591 mm against the
  patent's Lt = 475.58 mm.
- Semi-diameter: half the patent's effective diameter (15.5 mm) would narrow the half-field from 4.19° to 4.05°. The
  plate instead takes 18.0 mm, a ray-trace estimate: the largest height on the plate of any ray that reaches the 135
  format or the diagram's off-axis field at infinity, mid and close focus (16.83 mm), plus 5%, rounded up to 0.5 mm.
  Not figure-audited.
- Before/after check: EFL, stop radius, paraxial focus, analysis half-field and the vignetting curve are unchanged.

## 2026-10-08 - dPgF checked against the patent

- Reviewed local `patents/US20110090576A1-2.pdf` (US 2011/0090576 A1, 11 pages; byte-identical to
  `patents/US20110090576A1.pdf`).
- Patent formula: paragraph [0022] on PDF page 7 (printed page 2) calls a material anomalous when
  θgF − 0.6438 + 0.001682·νd > 0.02. Conditions (2) on PDF page 7 and (2a), (4), (4a), (6), (6a) on PDF page 8, and the
  claims on PDF page 11, use the same line. The Third Numerical Embodiment table on PDF page 10 (printed page 5,
  paragraph [0060]) prints both an absolute θgF column and an X column, with the footnote
  "X = θgF − (0.6438 − 0.001682 × vd)". That is the engine's own normal line, 0.6438 − 0.001682·νd, so the patent's
  deviation X and the runtime `dPgF` are the same quantity.
- A screen that compares stored values with catalog curves flagged this file. It is a false alarm. The coefficient-backed
  stand-in curves differ from the patent's printed θgF (S-LAL10 0.5521 against 0.5535 for L22b, J-LASF05 0.5648 against
  0.5636 for L13/L16b, CaF2 0.5387 against 0.5373 for L12/L14), and for L22b that difference happens to equal the offset
  of a 0.64833 − 0.0018·νd line. The patent's printed figures decide, and every stored value already sits on the engine's
  line. No `dPgF`, `apdNote` or comment changed in the data file, and the analysis sidecar needed no edit.

| Element |   νd | Source figure (PDF page 10)   | θgF − engine line | Stored before |        Stored after |
| ------- | ---: | ----------------------------- | ----------------: | ------------: | ------------------: |
| L11     | 70.2 | row 1: θgF 0.5300, X 0.0043   |         +0.004276 |        0.0043 |  0.0043 (unchanged) |
| L12     | 95.1 | row 3: θgF 0.5373, X 0.0534   |         +0.053458 |        0.0534 |  0.0534 (unchanged) |
| L13     | 42.7 | row 5: θgF 0.5636, X −0.0083  |         −0.008379 |       −0.0083 | −0.0083 (unchanged) |
| L14     | 95.1 | row 7: θgF 0.5373, X 0.0534   |         +0.053458 |        0.0534 |  0.0534 (unchanged) |
| L15     | 70.2 | row 9: θgF 0.5300, X 0.0043   |         +0.004276 |        0.0043 |  0.0043 (unchanged) |
| L16a    | 25.4 | row 11: θgF 0.6161, X 0.0150  |         +0.015023 |         0.015 |   0.015 (unchanged) |
| L16b    | 42.7 | row 12: θgF 0.5636, X −0.0083 |         −0.008379 |       −0.0083 | −0.0083 (unchanged) |
| L21a    | 37.2 | row 15: θgF 0.5775, X −0.0038 |         −0.003730 |       −0.0038 | −0.0038 (unchanged) |
| L21b    | 49.3 | row 16: θgF 0.5530, X −0.0078 |         −0.007877 |       −0.0078 | −0.0078 (unchanged) |
| L22a    | 23.8 | row 18: θgF 0.6205, X 0.0167  |         +0.016732 |        0.0167 |  0.0167 (unchanged) |
| L22b    | 50.2 | row 19: θgF 0.5535, X −0.0058 |         −0.005864 |       −0.0058 | −0.0058 (unchanged) |
| L23     | 37.2 | row 21: θgF 0.5775, X −0.0038 |         −0.003730 |       −0.0038 | −0.0038 (unchanged) |
| L24     | 23.8 | row 23: θgF 0.6205, X 0.0167  |         +0.016732 |        0.0167 |  0.0167 (unchanged) |
| L25a    | 35.3 | row 25: θgF 0.5818, X −0.0026 |         −0.002625 |       −0.0026 | −0.0026 (unchanged) |
| L25b    | 18.9 | row 26: θgF 0.6495, X 0.0375  |         +0.037490 |        0.0375 |  0.0375 (unchanged) |
| G       | 64.1 | row 28: θgF 0.5352, X −0.0007 |         −0.000784 |       −0.0007 | −0.0007 (unchanged) |

- Left as stored: all sixteen values. Each equals the patent's printed X, and each is within 0.0003 of the printed θgF
  minus the engine's line (largest gap 0.000084, plate G), so none was re-rounded to six decimals. The residual gaps are
  the patent's own four-decimal printing of θgF and X.
- Table 1 on PDF page 11 repeats the condition values for this embodiment: (2) 0.0534 for L12 and L14, (4) 0.0375 for
  the L25 negative, and (6) −0.003 for the L25 positive, the last a three-decimal print of the X column's −0.0026.

## 2026-10-30 — Original shape, literal clear apertures and all-media review

Fresh inspection uses `patents/US20110090576A1.pdf`, Third Numerical Embodiment ¶0060/table, PDF page 10/printed 5;
Figure 5/6, page 4/sheet 3 of 4; and ¶0021–22/page 7/printed 2. Pages are native 2560 × 3300 at 300 dpi. Native table,
definition and optical crops were read without upsampling; older 600 dpi views are upsampling. Internal scale is
roughly 3.4 native px/mm, with compressed schematic rear space. Two-pixel uncertainty is ±0.6 mm before line width,
scale and schematic uncertainty; inferred blank heights retain ±1–2 mm and local distortion. Leaders, brackets,
axis, G/Re labels and focus/IS mechanics are excluded.

### All elements, clear caps and resolved shoulders

| Element | Faces | Adopted clear front / rear radius (mm) | Drawn front / rear radius (mm) |
| ------- | ----- | -------------------------------------: | -----------------------------: |
| L11     | 1–2   |                        72.845 / 72.535 |                72.845 / 72.535 |
| L12     | 3–4   |                          59.735 / 58.9 |                  59.735 / 58.9 |
| L13     | 5–6   |                         58.48 / 55.815 |                 58.48 / 55.815 |
| L14     | 7–8   |                         46.645 / 45.92 |                 46.645 / 45.92 |
| L15     | 9–10  |                        40.385 / 37.375 |                40.385 / 40.385 |
| L16a    | 11–12 |                          32.215 / 31.9 |                  32.215 / 31.9 |
| L16b    | 12–13 |                          31.9 / 30.055 |                  31.9 / 32.215 |
| L21a    | 15–16 |                         20.565 / 20.02 |                 20.565 / 20.02 |
| L21b    | 16–17 |                         20.02 / 19.895 |                 20.02 / 19.895 |
| L22a    | 18–19 |                         17.12 / 16.815 |                 17.12 / 16.815 |
| L22b    | 19–20 |                        16.815 / 15.425 |                 16.815 / 17.12 |
| L23     | 21–22 |                          15.39 / 15.55 |                  15.39 / 15.55 |
| L24     | 23–24 |                        15.725 / 15.605 |                15.725 / 15.605 |
| L25a    | 25–26 |                         15.505 / 15.52 |                 15.505 / 15.52 |
| L25b    | 26–27 |                         15.52 / 15.705 |                 15.52 / 15.705 |
| G       | 28–29 |                            15.5 / 15.5 |                    15.5 / 15.5 |

All literal clear caps are retained except the pre-existing first-row emendation, whose provenance is qualified below.
G's explicit 31.00 mm diameter is restored as sd 15.5 from the prior 18 mm envelope override. Its reduced area adds
peripheral clips; source effective apertures take precedence over enlarging the default diagram field.

Figure 5 resolves unbonded rear shoulders on S10/S13/S20. Clear caps 37.375/30.055/15.425 stay literal; outer
heights 40.385/32.215/17.12 are conservative inferences from the corresponding front outline. Native ratios are
roughly 0.87/0.80/0.89 (reading ±0.03 plus schematic distortion), adopted 0.925/0.933/0.901. The residual drawing
mismatch remains explicit; no source R/d or cap is tuned. No land is added at bonded S12/S16/S19/S26, no resin
wing is created, and no `rimCutDepthMm`/exempting source string is authored. All source optical coordinates, source
X values and existing controls remain. No separate coating or indexed cement is prescribed.

The original row 1 prints 45.69 mm. Figure 5's front blank and Figure 6's 70.98 mm axial-ray height reject that literal
clear diameter. Existing sd 72.845 (diameter 145.69) remains from the prior Japanese-family attribution. Local
JP2011085788A is absent; exact replacement provenance is not freshly confirmed and structured source.errata is
unresolved. No new numerical correction or substituted publication is claimed. Original selected-source inspection
is usable; missing auxiliary correction evidence is a follow-up limitation.

### Every medium and genuine spectral/APD evidence

| Medium | nd / νd        | Printed θgF | Printed X = retained dPgF | Compatible curve |
| ------ | -------------- | ----------: | ------------------------: | ---------------- |
| L11    | 1.48749 / 70.2 |      0.5300 |                   +0.0043 | S-FSL5           |
| L12    | 1.43387 / 95.1 |      0.5373 |                   +0.0534 | CaF2             |
| L13    | 1.83481 / 42.7 |      0.5636 |                   -0.0083 | J-LASF05         |
| L14    | 1.43387 / 95.1 |      0.5373 |                   +0.0534 | CaF2             |
| L15    | 1.48749 / 70.2 |      0.5300 |                   +0.0043 | S-FSL5           |
| L16a   | 1.80518 / 25.4 |      0.6161 |                   +0.0150 | S-TIH6           |
| L16b   | 1.83481 / 42.7 |      0.5636 |                   -0.0083 | J-LASF05         |
| L21a   | 1.83400 / 37.2 |      0.5775 |                   -0.0038 | S-LAH60          |
| L21b   | 1.74320 / 49.3 |      0.5530 |                   -0.0078 | S-LAM60          |
| L22a   | 1.84666 / 23.8 |      0.6205 |                   +0.0167 | S-TIH53          |
| L22b   | 1.72000 / 50.2 |      0.5535 |                   -0.0058 | S-LAL10          |
| L23    | 1.83400 / 37.2 |      0.5775 |                   -0.0038 | S-LAH60          |
| L24    | 1.84666 / 23.8 |      0.6205 |                   +0.0167 | S-TIH53          |
| L25a   | 1.74950 / 35.3 |      0.5818 |                   -0.0026 | S-NBH51          |
| L25b   | 1.92286 / 18.9 |      0.6495 |                   +0.0375 | S-NPH2           |
| G      | 1.51633 / 64.1 |      0.5352 |                   -0.0007 | S-BSL7           |

All 16 source triples/X values match the native table. Paragraph 0022 explicitly defines Fraunhofer d 587.6/F 486.1/
C 656.3/g 435.8 nm and calls X>0.02 anomalous. Gp1 L12/L14 and Gn1 L25b retain their source APD flags; a CaF2
curve does not prove exact chemistry. The 16 printed X values, including G, are preserved without re-rounding from
the independently rounded θgF column (maximum normal-line discrepancy 0.000084). The source's normal line equals
the engine's. No absolute element C/F/g indices are published or authored, so no catalog copies are introduced or
removed. All 16 compatible curves remain qualified spectral proxies with explicit d reference and synchronized labels.
C–d–F splitting is a proxy; source X remains authoritative at g. Supplier, melt and chemistry stay unresolved.

G remains 2 mm, nd 1.51633/νd 64.1/X −0.0007, 12 mm after S27 and 107.811026 mm before the image plane. Paragraph 0021
calls it a glass block, filter or faceplate, without establishing holder ownership. The existing drawn working-system
representation is retained as an interpretation, not factory-part proof. No separate resin or unlisted medium is added.

### Published stop versus current runtime authority

The source row 14 gives43.11 mm effective diameter, physical radius 21.555 mm. Current ordinary-prime authority derives
21.114024998 mm from unchanged nominal F/4.12. A candidate authored STO.sd is rejected by ingest; no fake zoom,
inside-element stop, F-number change, schema change or tolerance workaround is used. The rejected trial is scratch only.
Current exact parallel-beam entrance radius 69.587381 mm implies f/4.202033. A scratch source-radius runtime
comparison gives 70.985900 mm/f 4.119247, consistent with Figure 6's 70.98 mm label. Its exact S6 boundary 55.820155
exceeds printed 55.815 by 0.005155 mm and leaves 45/49 axial samples; this rounded-source boundary clip is disclosed,
not waived. The current derived stop has 49/49 infinity axial samples. The physical-source and current aperture-model
conclusions are separate, and prime stop representation remains a generic follow-up item.

### Actual SVGs, controls and retained limitations

Actual generated SVGs at infinity/half/close focus were compared with Figure 5, including the three shoulders and smaller
source G aperture. All 21 sampled focus states have 16 finite, closed, connected paths, zero hidden renderer trim,
3087 aimed full-open launches and 63 clear chiefs. Axial/0.6-format/corner counts of 49 are 49/36/23 at infinity,
45/36/25 at half focus and 45/36/25 at close. Six early states pass 49/49 axial; fifteen later states retain 45/49,
969/1029 axial samples passing overall, first at S7 then S6. Literal source apertures are not widened to clear inferred
finite rays. At the next authored f/5.6, all 49 axial samples clear at all 21 states. Source G adds peripheral plate
clips while chiefs remain clear. Surface, image-circle, current aperture-model and runtime-format-corner checks pass;
no inferred cut needs a beam exemption.

The unchanged inferred L16 cam now evaluates to physical 4500.681021 mm close and 8314.156584 mm at half focus,
with close |m| 0.144229. The former 4.5 m constraint used reduced/plate-absent distance; no cam is refit for the 0.681021 mm
physical-stack difference. IS remains centered with no published displacement range, so displaced-IS clearance is not
asserted. The source 2.12° chief reaches 21.697373 mm (100.3% of format), separately from the clear modeled corner.
EFL 584.816933/printed 584.89 and BFL 121.092285/printed 121.13 remain rounding-level discrepancies, with source plane
0.037715 mm imageward of Gaussian focus. Physical/reduced tracks 475.591026/474.910000 mm remain distinct.

Existing gapSagFrac 0.95 is unchanged, preserving literal S20/S21 caps with 4.993263 mm sag use across 5.310 mm and
0.316737 mm positive clearance. No new tolerance is relaxed. Actual August 20/21 and October 4/8 historical entries
above remain dated as written. Original source fidelity, sampled runtime clearance and production correlation are
separate, with exact first-row correction provenance, prime stop representation, finite full iris and lateral IS explicit.

## 2026-10-31 — Scoped printed-θ/X and alternate-curve review; S-LAL10 retained

Preserve Oct 30 complete source/shape review and all earlier dates. Native direct check: exact `patents/US20110090576A1.pdf`, Third Numerical Embodiment PDF p. 10/printed 5 ¶0060, S19/L22b1.72000/50.2/θgF0.5535/X−0.0058. The footnote is explicitly X=θgF−(0.6438−0.001682νd), the same normal convention as the engine. ¶0022 p7 independently defines θgF=(Ng−NF)/(NF−NC) and d587.6/F486.1/C656.3/g435.8 nm. Figure 5 p4 shows the cemented L22 pair and separate G; native pages2560×3300/300 ppi were inspected.

Keep printed θ and X distinct: stored X−0.0058 implies0.5535636, differing+0.0000636 from independently printed 0.5535, as already documented under the source-rounding retention policy. Do not compare catalog candidates only to private reconstructed θ. Existing S-LAL10 raw θ0.552117113 gives−0.001382887 versus printed; existing K-LaK10 raw θ0.553607747 gives+0.000107747, yet its evaluatedν50.303209 is farther from source 50.2 than current50.230564. Source expected C–F span0.01434262948 is closer to current0.01433380895 than alternate0.01431319957; effective borrowed-curveν worsens50.230891→50.303218.

Both runtime variants preserve θ0.5535636 because sourceX remains authoritative. Reject the K-LaK10 swap despite its closer raw partial; retain S-LAL10, all 16 genuine X values and source APD flags. No absolute source line indices are invented. Data remains byte-identical, with unchanged filter, R/d, literal clear apertures, stops/controls and prior runtime/source limitations. Only dated audit/analysis notes are added; no new row or complete source-shape count follows.
