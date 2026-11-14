# VoigtlanderAPOLanthar28mmf2Aspherical — Stage 4 Independent Audit

## Historical audits prior to 2026-11-03

Squashed on 2026-11-03. Source throughout: Cosina, JP 2026-98935 A (local `patents/JPA 2026098935-000000.pdf`),
Example 2 (第2実施形態): Table 5 summary p. 14, Table 6 prescription p. 15, Table 7 focus spacings and Table 8
aspheres p. 17, Fig. 3 section p. 24, conventions ¶0060–¶0070, ΔPgF definition ¶0061 and claims 6–9 (pp. 3–6).

### Stage 4 independent audit (2026-08-01) and integration gate

- Scope: VM production correlation kept because Example 2 publishes a 0.5 m-class endpoint; the Sony E and Nikon Z
  versions publish 0.28 m and are out of scope. Independent re-entry of Tables 5–8 and Fig. 3, cross-checked with y–ν
  and θ-ABCD matrices (difference 3.553E−15).
- Table 5: f 28.84, F 2.06, ω 37.02°, TL 71.19, TLab 10.47, f1 58.33, f1ab −29.83, f2 53.75, f2abal −47.89,
  f2abalm −12.67, f2b 20.63, X1 1.61, X2 2.08 mm. Printed D11 3.83 → 3.36 and D21 18.21 → 20.28 mm; close D0 428.00 mm.
  Table 8 uses the standard conic K (1A K 0; 2A K 1.111; 20A K 52.843; 21A K 0). 12 elements / 8 groups, one STO
  (surface 11 is the stop row), four aspheres, no plate.
- The Stage 4 numbers (EFL 29.126006, BFL 18.582765, track 71.25, close B +6.097174, the 50,000-sample rounding
  ranges) used a miscopied S17 and are superseded by the 2026-09-25 entry.
- Semi-diameters from hand measurements of Fig. 3 normalised to L9: L10 9.5, L11 8.5, L12 8.6, L13 9.0, L14 10.4,
  L15 10.6, L16 12.0 mm (pre-pass 9.7 / 9.6–9.3 / 9.3–8.9 / 9.0 / 8.6 / 9.7 / 12.8–13.5).
- Glass: L9 H-K9LGT (CDGM row added, exact 517642), L10f S-LAH89, L10r S-NBH58, L13f S-NBH8, L14 S-LAH93, L13r
  J-PSKH8, all as equivalents; L16 Unmatched (no joint nd/νd/ΔPgF match; Q-LASF03S line proxy, NBFD13 closer on
  nd/νd). Cosina's section marks six APD positions, mapped to L10r, L12r, L13f, L13r, L15f, L15r as `inferred`.
  Inventor romanised as Nozomu Mishima. No patent R, d, index, ΔPgF or asphere value was changed in that audit.
- Integration gate 2026-08-01: surface and image-circle audits pass; glass reports 11/12 strict, 12/12 trusted.

### 2026-09-25 — MTF image-plane census

Visually rechecked PDF pp. 14–17 and the p. 24 section figure. Table 6 S17 prints R = 580.403, D = 5.45, not 580.103 / 5.15:
both corrected (a transcription error). Recomputed EFL 28.942108 (source 28.84), BFL 18.144592 (D21 = 18.21), track
71.55 (TL 71.19); offset +0.372765 → −0.065408 mm. The stop was recalibrated to 7.864192 mm for F/2.06. The close
matrix B became −0.647619 mm (holding the printed gaps needs D0 = 418.763 mm). A d-line axial MTF diagnostic put
best focus about −0.087 mm from the plane, so the plane is not a best-focus plane. No further single correction was
found.

### 2026-10-08 — dPgF moved to the engine's normal line

Table 6 prints the patent's ΔPgF = PgF − 0.64833 + 0.00180·νd (¶0061) and no absolute PgF. Each value was converted
through that line to PgF and re-expressed as dPgF = PgF − (0.6438 − 0.001682·νd). Before → after: L9 0.0031 →
0.000054, L10r 0.0037 → 0.004875, L11 0.0036 → 0.004693, L12r 0.0072 → 0.008762, L13f and L15r −0.0025 → −0.002066,
L13r 0.0139 → 0.011448, L14 −0.0005 → −0.000105, L15f 0.0277 → 0.023321. L10f −0.0054, L12f −0.0044 and L16 −0.0056
stay (line gap under 0.0003). Every element authors nC/nF/ng, so no ray result changed. The analysis keeps the patent's
ΔPgF in condition rows 10, 13, 16, 17 and 19.

## 2026-11-03 — Image-plane consistency (re-solve)

With the S17 correction the file matches Table 6 throughout. The rounded rows still miss paraxial focus. At infinity,
D21 = 18.21 mm leaves the plane 0.065408 mm behind the computed BFL (13.1 depths at f/2.06), and real-ray best focus
was −0.087 mm. At the close state, the printed gaps with D0 = 428.00 mm give B = −0.647619 mm. No misprint is
isolated, so this is a re-solve under LENS_DATA_SPEC Image-Plane Consistency. Back focus comes first. The change is
carried to the close row, which is then focused with the patent's G1/G2 travel ratio (D11 −0.47 : D21 +2.07, weights
−0.227053 : 1) at the printed D0 = 428.00 mm from the first surface.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| D21 (BF), infinity | 18.21 | 18.144592 | Computed BFL |
| D11, close | 3.36 | 3.354995 | Weighted G1/G2 move at D0 = 428.00 mm |
| D21 (BF), close | 20.28 | 20.236636 | Carried −0.065408, then the same move |
| `focus.closeFocusM` | 0.5 | 0.5011 | Close row object to image 501.102 mm |
| `catalog.closeFocusM.marketing` | absent | 0.5 | Cosina VM minimum focus (analysis, manufacturer values) |

- Residual: infinity −0.065408 → 0 mm; close row in focus at D0 = 428.00 mm (before, at 418.763 mm).
- Travel: D11 −0.475005, D21 +2.092044 mm (printed −0.47 / +2.07); G1 1.617 and G2 2.092 mm against X1 1.61 and
  X2 2.08. Track 71.55 → 71.484592 mm at infinity, 73.15 → 73.101631 mm at close.
- EFL unchanged at infinity (28.942108 mm); close-state EFL 28.815882 mm, Gaussian magnification −0.068569.
- Minimum clearance of D11 (STO → S12): 1.635 mm at infinity, 1.160 mm at close. Aperture (pre-existing rim +3.9 %),
  image-circle, field-coverage and surface-probe audits are unchanged.
- Analysis: TL/EFL 2.4699, conditions 1, 2 and 5 now 0.4750 / 2.46991 / 0.146465 from the model arrays, and the focus
  section rewritten.

Follow-ups: the Table 5 EFL (28.84 mm) and TL (71.19 mm) remain unreconciled with the prescription.
