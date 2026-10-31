# Audit Log - Canon TS-E 135mm f/4L Macro

Patent: JP 2018-132674 A, Numerical Data 1 (Mizuma / Canon)

## 2026-06-23 - Patent geometry and glass review

### Source note

- The exact cited patent PDF was not present in the untracked local `patents/` folder during this pass, so the official Google Patents PDF was fetched to `tmp/pdfs/JP2018132674A.pdf` for direct review.
- The first patent figure was checked against the data-file layout: fixed positive L1, moving negative FN group, fixed aperture stop, moving positive FP group, fixed rear RF group, and image plane order all match.

### Retained-data audit

- Confirmed Numerical Data 1 surface rows 1-19 against the data file: radii, spacings, nd, vd, variable d5/d10/d11/d16, focal length 133.00 mm, F-number 4.05, half field 14.19 degrees, image height 33.63 mm, total length 183.76 mm, BF 78.33 mm, and group focal lengths L1=104.40, L2/FN=-71.94, stop=infinity, L3/FP=42.19, L4/RF=-56.59.
- Confirmed the patent does not publish effective diameters. The data-file SDs remain reconstructed renderer-safe values derived from the F/4.05 entrance-pupil solution, official 82 mm filter size, and geometry checks.

### Glass corrections

| Element | Before            | After                                       | Justification                                                                                                                                                                                                                  |
| ------- | ----------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| G1      | `S-BSM25 (OHARA)` | `N-SSK5 (Schott; S-BSM25 class equivalent)` | Patent row 1 gives nd=1.65844, vd=50.9. The stored line indices match the 658509 dense-crown class, and the runtime catalog already has a coefficient-backed Schott N-SSK5 entry for that pair; S-BSM25 is unresolved locally. |

### Analysis sync

- Updated the G1 prose, glass table, and source note to use the N-SSK5 catalog-equivalent label while preserving the S-BSM25 class context.

## 2026-10-30 - Scoped native shoulder, published partials and current movement review

The actual June 23 geometry/glass entry and its acquisition history above are preserved. Unchanged numerical conclusions are reused with that date. Current reopening addresses unsupported catalog overrides, genuine Table 1 partials, a resolved S7 outer shoulder and current source/model limitations; it is one current reviewed configuration, with no extra reused-entry count.

Exact current original `patents/JP_2018132674_A.pdf`, SHA-256 `e715466e2911d808a3fb799511de96aab79cdab0110b3cb6b6ffd74e3b2c59bc`; first page confirms JP 2018-132674 A, Akira Mizuma / Canon, August 23, 2018. Numerical Data 1, paragraph 0059, PDF/printed 10-11: all nineteen rows, eleven media, four moving gaps and infinity/near endpoints. Table 1 is page 14. Figure 1(A)/(B) and Figure 2(A)/(B) are page 15. Paragraphs 0027-0036 on pages 6-7 define θgF, the same linear normal used by the engine and the named source members; paragraph 0059 explicitly defines d-line nd/vd. No other publication is substituted.

Native figure is 1653 x 2338 one-bit at 200 ppi. A 600 dpi render is 3x upsampling; pixel detail shown at 10x nearest-neighbor is magnification only. Axial scale is about 356 native pixels across 183.77 mm, about 1.94 px/mm; schematic vertical scale about 1.8-2.0 px/mm, practical inferred-height uncertainty +/-2 mm. All eleven elements, concave ends and four cemented interfaces were inspected. No hybrid layer, filter, rear plate or cement medium is tabulated.

S7 rear air-side shoulder is resolved at native rows 338-345 and 401-408 before the optical curve separates inward, excluding the adjacent weak S8 outline. Outer `rimExtensionSd = 19.8` restores the connected G4 blank while preserving clear `sd = 15.95`. No other cap changes, cut, opaque bonded land or disconnected wing. A full-clear S6/S7 = 18 mm trial passes geometry/aperture/field checks but curves through the resolved outer stroke and is rejected. Retained S7-S8 sag is 4.653230 mm against unchanged allowed 4.689 mm in the 5.21 mm gap; no guard or source R/d changes. Actual source metadata becomes Numerical Data 1 and printed design focal length 133.00 mm; optical/control values remain protected.

All eleven nd/vd pairs and existing compatible curves remain. Thirty-three catalog nC/nF/ng fields and seven unsupported dPgF fields are removed. Four catalog partial overrides are superseded by genuine selected Table 1 partials: G2/L1p and G8/FPp θ = 0.538 / ν = 81.54, G6/FNp θ = 0.599 / ν = 29.13, G9/FPn θ = 0.612 / ν = 24.80. Retaining surface Abbe values 81.5/29.1/24.8, engine/source linear normal 0.6438-0.001682ν gives dPgF +0.031283, +0.0041462 and +0.0099136. Derived digits do not exceed source three-decimal θ precision. Four APD flags now cite genuine source evidence; no partial is invented for the other seven media. Catalog curves are qualified proxies, not historical supplier, melt or chemistry evidence. Public glass labels/table/prose are synchronized.

The source gap sums 50.48/50.46 mm yield literal tracks 183.77/183.75 mm versus stated 183.76 mm and fixed-group prose. A structured unresolved note preserves the discrepancy without assuming a unique rounding repair. No R/d, glass pair, source gap endpoint, stop, aperture preset, focus or movement control is changed.

Surface/image-circle checks pass, aperture census passes within 3% and default format field passes. Source infinity 14.19-degree vector chief clears to Y33.656773 versus stated 33.63. Fixed derived iris remains 12.91694095 mm; exact-working infinity is 4.105832 versus 4.05. At 65 focus controls x 8 presets all 520 calls trace before/after. Collimated control grids through focus-adjusted geometry retain axis 193/193 and endpoint format-edge 185/193 and 193/193; they are separate from finite-object illumination.

Actual Gaussian finite-object checks inverse-solve image Y 0/16.815/33.63 at 64 positive focus positions. All 192 chiefs converge/clear; 35,944 rays pass, 1,112 clip, zero failed/unaimed, identical before/after. Source close axis/half/full counts 193/193/188 of 193. Gaussian close 0.487738157 m and m -0.49985157 remain distinct from label 0.486 m (image residual +0.437977 mm). Worst display-plane interpolation residual -11.483210 mm at focus 0.5625; Gaussian 0.662689098 m versus label 0.864 m. Source gap endpoints do not validate continuous distance labels.

Source Figure 2(B) near Fno 5.60 and paragraph 0048 / page 9 preference for a focus-varying iris are retained explicitly. No physical diameter schedule is published. Current fixed iris gives close exact-working 4.710904, so source near f-number fidelity is not claimed; no schedule is fitted.

Public rigid-pose sensor-locked collimated fields cover 75 poses (focus 0/.5/1; shift -12/−6/0/6/12 mm; tilt -10/−5/0/5/10 degrees), 375 center/corner requests. 353 usable / 22 unresolved chiefs; 512-bracket retry retains 22 unresolved without tolerance changes. Of prepared rays, 65,921 complete physically, 2,160 clip and 48 fail; zero unaimed. Sensor usable/missed classifications are 27,753/38,216 and are not physical transmission counts. Finite moved-object illumination and the unmeasured rear-vertex fallback hinge remain unvalidated. All 715 centered and 825 moved SVG paths finite/closed/connected, zero hidden trim; actual source endpoint renders compared with native Figure 1. Source fidelity, sampled runtime and production movement correlation remain distinct.

The source also explicitly identifies these materials as anomalous, beyond printing their partials: PDF/printed page 8 paragraph 0037 describes FPp/G8 under conditions (4)–(6); paragraph 0040 describes FNp/G6 under (8)–(10); paragraph 0042 describes L1p/G2 under (11)–(13). Paragraph 0033 on page 7 describes FPn/G9 as low anomalous dispersion under (1)–(3). These passages support the four source APD badges, including FNp's small positive deviation; a printed partial alone would not justify the badge. This adds exact paragraph references to the October 30 review without repeating or redating source inspection.
