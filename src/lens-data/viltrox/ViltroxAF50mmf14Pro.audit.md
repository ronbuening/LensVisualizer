# Audit Log — VILTROX AF 50mm f/1.4 PRO

Patent: CN 120871380 A (`patents/CN120871380A.pdf`, 31 pp.), Example 1, Tables 1–4 on PDF pp. 13–16; Figure 1 on p. 24.

## 2026-10-19 — Deployment validation and wording pass

Source re-read from page images (the PDF has no text layer): all 29 rows of Table 1 (R, d, nd, νd), the plate
S28/S29, Table 2 (D1/D2 at infinity and 0.32 m) and the eight S17/S18 coefficients of Tables 3–4. Front page:
publication 2025-10-31, application 202410457423.X filed 2024-04-16, applicant Shenzhen Viltrox Technology Co., Ltd.,
inventors Liu Ruijun and Chen Baofeng. These match the data file.

The validation found that the file is a fit, not a transcription. All 15 nd/νd pairs, K = 0, D1 = 13.125 mm, the
2.5 mm plate, the flat surfaces, R7 and R19 match the print. 23 of the 25 finite radii differ by 0.06–10.0 %
(largest R12 20.258 → 22.284, R24 −89.342 → −96.970, R18 −50.444 → −54.660, R27 −48.364 → −44.515, R2 55.866 →
60.027 mm). Seven intervals differ (d2 +0.50, d12 −0.50, d14 +0.09, d19 +0.56, D2 −0.65, d25 +0.29, d27 −0.29 mm),
the final air is 0.996 mm (printed 1.000), and none of the eight asphere terms keeps its printed mantissa.

Why the print cannot be used literally: Table 1 traced paraxially gives EFL 50.55 mm (stated 51.1) with focus
2.87 mm behind the printed image plane, and 45.74 mm (stated 45.9) with the near gaps. The printed coefficients
(S17 A8 −2.598e−2, S18 A4 +2.934e−2) give sags of metres at the rim. A search over every single-digit change, sign
flip and adjacent-digit transposition in Table 1 found no one-cell repair (the only near hit, d8 6.279 → 9.279,
lengthens the track by 3 mm and still misses focus by 0.44 mm). Examples 2 and 3 give paraxial EFL 38.6 mm and
80.1 mm against stated 50.5 mm, so they are no alternative.

Patent vs model, infinity: EFL 51.1 / 51.10 mm; F/1.47 (paraxial) / f/1.48 (exact marginal, iris radius 14.52 mm);
half-field 23.3° / 23.06°; track 125.3 / 125.30 mm. Close focus is not modelled. audit:surface OK, image circle not
undersized, field coverage 100 % at the full-frame corner.

Maker diagram (user manual construction diagram, viltrox.com specifications): 15 elements in 11 groups with 1
aspherical, 3 ED and 8 high-refractive elements. The diagram's ED positions are L06, L08 and L11 and its aspherical
element is L10, matching Example 1's topology, cemented pairs and stop position. The owner accepted the fitted
prescription for deployment as a one-off exception, not a new standard for patent-sourced files, because the
example's topology matches Viltrox's diagram.

Fields changed in this pass: header comment rewritten in plain terms with the inconsistency findings; `subtitle`;
`specs` (design focal length, design F-number and aspherical-surface lines added; process lines removed); element
`label`s shortened to "Element N"; `role` wording; `apd: "inferred"` with `apdNote` on L06, L08 and L11;
`focus.description`; `rearPlates[0].source` wording. The analysis lost its process material (archive links,
hashes, replay and test counts, internal fitting vocabulary) and gained the inconsistency findings; its
verification section became "Model Scope and Limitations". No optical value changed.

Open: near focus is not modelled; the printed G2 travel (7.859 mm) does not give a usable near state on the fitted
radii, and the patent's 0.32 m reference differs from the marketed 0.45 m.
Resolved later the same day: the Nikon Z version (announced February 2026) is now in `lensMounts`; see the product-name section below.

## 2026-10-19 — Semi-diameter pass against the patent figure

Source: Figure 1 on PDF p. 24 of `patents/CN120871380A.pdf` (300 dpi CCITT raster, measured at native resolution).
Figure 1 is drawn from the printed, internally inconsistent prescription, so its vertices need not sit exactly where
the fit puts them. They do in practice: an outline of the fitted surfaces overlaid at one scale lands on the drawn
curves across all 27 surfaces. Scale from robust spans: S1 to S27 is 1366.5 px for 107.8 mm printed (108.09 mm
fitted) and S1 to the image plane is 1587 px for 125.3 mm, so 12.67 px/mm (0.0789 mm/px). Individual gaps give
12.3–13.1 px/mm. The figure is isotropic. Circle fits with only the vertical scale free give factors of 1.00 for S2
(printed R 55.866) and S27 (printed R −48.364). The drawn stop opening is 14.3 mm against the model's 14.52 mm iris.
Rims were read on the lower side, which has no leader lines, inside the group brackets. Values are line centres.
The upper side agrees within 0.1 mm wherever it is clean.

The figure draws flat-topped (square-cut) rims throughout. L01 to L05 all sit at 23.0–23.2 mm. D2 is a 19.6 mm box,
and L07's rear face ends in a flat annulus whose inner edge is at 14.7 mm. D3 is a 14.05 mm box, L10 is 15.0 mm,
L11 is 16.55 mm and L12 is 17.4 mm. D4 is 17.1 mm and L15 is 17.4 mm. L01/L02 and L14/L15 are each drawn meeting at
the rim.

| Surface | Before (mm) | Figure (mm) | After (mm) | Evidence |
|---|---:|---:|---:|---|
| 1 | 22.68 | 23.05 | 22.0 | L01 drawn square-cut; one height with S2 (see follow-up below) |
| 2 / 3 | 21.14 / 21.14 | 23.05 / 23.2 | 22.0 / 22.0 | Drawn meeting at the rim; fitted faces cross at 22.25 mm; needs `gapSagFrac` 0.98 |
| 4 / 5 | 24.54 / 24.68 | 23.2 | 23.2 / 23.2 | 6 % band; step order: D1 drawn level with L04, not 1.2 mm above it |
| 6 / 7 | 26.85 / 26.85 | 23.2 | 23.4 / 23.4 | Figure 14 % smaller; axial f/1.48 floor 23.35 mm; drawn edge ≈2.1 mm, model now 1.95 mm |
| 8 / 9 | 24.97 / 24.49 | 23.05 | 23.1 / 23.1 | 6–8 % band; step order: L05 drawn just below L04; square rim |
| 10 | 20.28 | 19.6 | 19.6 | 3.5 %; D2 drawn square, no 0.7 mm step over S11; floor 19.22 |
| 11 | 19.57 | 19.6 | kept | Agrees |
| 12 | 15.17 | 14.7 | kept | Figure below the axial floor (14.83) |
| 14 / 15 | 14.93 / 15.09 | 14.05 | 14.1 / 14.1 | 6 % band; step order: D3 drawn inside the stop (14.3), model had it outside; square box |
| 16 | 18.12 | 14.05 | 14.1 | Figure 22 % smaller; floor 13.57 |
| 17 / 18 | 19.14 / 19.44 | 15.0 | 15 / 15 | Figure 22 % smaller; floor 13.85; lowering, so no turnover issue |
| 19 / 20 | 20.47 / 20.47 | 16.55 | 16.6 / 16.6 | Figure 19 % smaller; floor 13.45 axial, 13.81 chief |
| 21 / 22 | 19.48 / 19.46 | 17.4 | 17.4 / 17.4 | Figure 11 % smaller; chief 14.82 |
| 23 / 24 | 18.00 / 17.63 | 17.1 | 17.1 / 17.1 | 5 % band; step order: L13 drawn 0.3 mm below L12, model had it 0.6 mm above; square |
| 25 / 26 | 16.05 / 16.05 | 16.6 | 16.6 / 16.6 | Curves drawn meeting near 16.6 mm, then a flat to the 17.05 mm box line; fitted faces cross near 16.8 mm; gap sag 0.968 (see follow-up) |
| 27 | 17.65 | 17.4 | kept | Agrees (1.4 %) |

Twenty-three surfaces changed. The STO and all optical values are untouched. Figure readings are good to about 0.15 mm.
Five rows (S4/S5, S8/S9, S10, S14/S15, S23/S24) sat inside the 5–8 % noise band and were changed only to restore the
figure's comparative step order once the strong mismatches (L04, S16, L10, L11, L12) were applied.

Clearance after the change, by an independent meridional exact trace: the axial f/1.48 marginal ray clears every rim.
The tightest margins are S7 0.05 mm, S6 0.10 mm, S12 0.34 mm, S10 0.38 mm and S8 0.47 mm. The 23.19° chief ray to
21.63 mm clears everywhere. The validator passes with no errors, the image circle is not undersized and field
coverage is 100 % at the full-frame corner (21.65 mm). EFL is 51.10 mm, the engine f-number is 1.4797 and the
half-field is 23.06°, all unchanged. LSA at full pupil is 0.018 mm, so no rim decision rests on a misprint.

Vignetting changes because the drawn G2/G3 rims sit closer to the beam than the earlier inferred values. Geometric
transmission was 99.5 / 92.7 / 73.4 / 53.1 / 31.8 % at 5.8 / 11.6 / 17.4 / 20.3 / 23.2°. It is now
89.1 / 75.5 / 59.4 / 47.9 / 30.2 %. The corner loss comes from the 22.0 mm front rim of L01. The figure itself puts L04 and D3 at about the axial
beam height, so off-axis clipping from the first degrees is a property of the drawn design, not of this pass.

Maker diagram: per the deployment pass above, Viltrox's construction diagram shows 15 elements in 11 groups. It marks
ED glass at L06, L08 and L11 and the aspherical element at L10. That matches Example 1's topology, cemented pairs and
stop position. No maker image was viewed in this pass, and the patent figure governs the rims.

Follow-up, same day: under the owner's rule that a rim drawn square-cut keeps both faces at one height, L01 now
shares 22.0 mm on S1 to S3. The lens carries `checks.gapSagFrac: 0.98`, the smallest two-decimal value that admits
it, because S2/S3 then use 0.979 of their 9.58 mm gap. A larger value is not possible: the fitted faces cross at
22.25 mm, below the figure's 23.05 mm junction. The validator passes with no errors, the axial margin at S1 to S3 is
at least 4.1 mm, and the chief ray clears. Half-field (23.06°) and f-number (1.4797) are unchanged. The live render
was checked after the change.

S25/S26: in Fig. 1 the two curves converge near 16.6 mm on both sides of the axis: 1.07 mm
apart at 15.8 mm, 0.6 mm at 16.2 mm, merged by 16.4–16.6 mm. A short common edge then runs to the 17.05 mm box line.
A figure-driven value would therefore be 16.5–16.6 mm (sag fraction 0.955–0.968). The existing 0.98 setting would
admit it. At 16.6 mm the validator passes and corner transmission rises from 30.2 % to 35.4 %, and the engine half-field from 23.06° to 23.77°. Because the raise is figure-driven, both now carry 16.6 mm, within the same 0.98 limit. The validator passes with no
errors, the axial margin at S25/S26 is at least 7.7 mm, and the chief ray clears. Re-measured after both follow-ups:
geometric transmission is 89.1 / 75.5 / 59.4 / 47.9 / 35.4 % at 5.8 / 11.6 / 17.4 / 20.3 / 23.2°, and the engine
half-field is 23.77° (23.06° before). The f-number is 1.4797 and
field coverage stays at 100 %. The RMS spot is unchanged within 0.2 µm, and the live render was checked.

## 2026-10-19 — Product name, mounts and glass proxies

Name and key now cover both mounts: "VILTROX AF 50mm f/1.4 PRO" and `viltrox-af-50mm-f14-pro` (were "… PRO FE" and
`viltrox-af-50mm-f14-pro-fe`). `lensMounts` is now `sony-fe` and `nikon-z`, and the files were renamed to match. This
follows the corpus precedent for Viltrox lenses sold in several mounts under one name, such as the AF 75mm f/1.2 PRO
and AF 14mm f/4 AIR. Viltrox's Nikon Z product page (viltrox.com/products/af-50mm-f1-4-z) states 15 elements in 11
groups, with 1 ultra-precision aspherical, 3 ED and 8 high-refractive elements, the same as the FE listing. It gives
Φ84.5 × 113 mm and about 830 g for the Z version. The construction diagram image on that page was not viewed. This
resolves the earlier open item on the Nikon Z version.

Glass labels: 13 elements now name a catalog glass as a "catalog-equivalent spectral proxy; supplier unresolved".
They are L01 E-FEL1, L02/L05 N-SF66, L03 S-LAH55V, L06/L11 H-ZPK5, L07 H-ZF52, L08 S-PHM53, L09 H-ZF1,
L10 M-NBFD130, L13/L15 H-ZF88 and L14 H-ZF7LA. Their Sellmeier nd is within 5 × 10⁻⁵ of the patent, and their νd is
within 0.02. L04 (1.949/17.942) and L12 (1.7292/56.685) have no catalog row within source precision and stay
unmatched with the Abbe surrogate. The ED-marked L06, L08 and L11 carry `apd: "inferred"` with a note naming their
proxy. The prescription's nd/νd are unchanged.

Effect on the trace: d-line focus moves 6 µm, from the small nd differences in the proxies. In a paraxial trace at
infinity, the C, F and g foci now fall 41, 54 and 283 µm behind d (C–F 14 µm). With the Abbe surrogate they fell
17, 30 and 114 µm behind. At the d line the full-frame RMS spot is 3–8 µm. With C, d and F weighted equally it is
10–14 µm (it was 7–11 µm with the surrogate). The analysis glass section, element lines and limitations were updated
to match, and the header now states which elements use proxies.

