# Audit Log — CANON RF 15-30 mm f/4.5-6.3 IS STM

## 2026-10-30 — Original-PDF shape and glass review

- Fresh exact local original EP4174551A1, Second Numerical Embodiment ¶0064 pp 10–11 surfaces,¶0065 p 11 aspheres,
  ¶0066 p 11 various data,¶0067–68 p 12 units/single lenses; Figure 3 p 26 and Figures 4A/4B p 27. Front page confirms
  authors Hiroki Ebe/Shunji Iwamoto, Canon applicant, filing 2022-10-18/publication 2023-05-03/priority 2021-10-28.
- Tables are vector text, independently inspected at 180–200 dpi. Native Figure 3 is 1535×2350 bilevel stencil 300 ppi;
  native aberration chart 1736×2752 at 300 ppi. Rotations/crops do not add resolution. S1→S25 span 101.78 mm/≈1744 px
  implies axial 0.0584 mm/pixel, but peripheral contour/ED mismatch prevents an exact global radial calibration.
  S2 outer/cap≈323/267=1.21, S4≈251/223=1.126, ratio uncertainty≈±.03. Leaders, arrows, brackets and IP excluded.
- Reviewed all 13 elements/24 refracting faces, every concave end, cemented S13/S18 and both E12 aspheres. No source
  hybrid layer: E12 chemistry/molding unknown. Added only resolved S2/S4 outer shoulders 17.99/13.945 preserving printed
  clear sd 14.53/12.375. Other ED/2 values retained; no equal bonded blocks, opaque interface lands or resin wings.
- Retained S5 = 12.289 versus printed 12.290. Literal rejected trial: common-band S4/S5 sag 5.877825336 exceeds .90×6.53
  by 0.000825336 mm, although actual air remains +0.652174664 mm. Existing 12.289 gives 5.876792864 and +0.653207136 air.
  Its 1µm reduction is within ±0.0025 mm source half-diameter rounding bin, not a proved source error. No R/d or guard edit.
- Source STO ED 10.25/radius 5.125 remains a source reference; existing canonical target-F iris 5.089324/5.014829/4.920837
  is retained. Removed unsupported prose claiming the source proves these are distinct mechanical envelopes/openings.
- All 13 exact source nd/vd pairs retained; ¶0056 p 8 explicitly defines d 587.6/F486.1/C656.3/g 435.8 nm. Added explicit
  d provenance. No numerical C/F/g/partial values are published; zero per-lens spectral overrides existed/removed.
  Twelve prior compatible curve choices retained with explicit proxy labels; E12 Unmatched. E3/E10 UD/APD inferred,
  never proved by source Abbe alone. Removed unsupported chemical/class/PMo assertions; supplier/melt unknown.
- Separate metadata correction: catalog design 15.448247/29.139228 computed→printed 15.45/29.15; menu first f/4.5→printed 4.6,
  station targets 4.60/5.27/6.36 already correct. All R/d, aspheres, media, stop location and cam values unchanged.
- Structured unresolved source.errata: p 11 field 49.88/45.31/36.58 versus native Fig. 4A/4B 54.5°/36.3°; Table 1 p 21, −15.24%
  distortion and height 18.34 imply wide 54.47°. Runtime 54.5 gives 18.352099 mm/~−15.26%, source plot≈−15.2±.3%; literal
  49.88 gives 15.977058 mm. Middle/tele literal fields 19.894727/21.838557 mm, plot tele 36.3 gives 21.601268 mm. No unique
  corrected schedule established. Literal middle overall 109.07 vs printed 109.06 and L1 length 25.26 vs 25.25 also unresolved;
  independent rounding is a hypothesis. No fitted replacements.
- Existing L3 finite cam remains constrained reconstruction: D19+D21=11.86, close 280 mm only at 3 authored stations,
  interpolated close 234.882282 mm at z=0.734375. Source publishes no finite rows; special 15 mm manual 0.128 m/.52× unmodeled.
- Actual per-state-iris 65 zoom×21 focus sweep 1365 states/200655 pupil samples: 66885/66885 axial, 4095/4095 chiefs, 0 unaimed.
  Source infinity bundles 49/39/8,49/39/29,49/42/36; reconstructed close 49/38/32,49/38/32,49/40/33. Off-axis vignetting
  retained. Aperture 65 census no deficits/raises; max illustrative interval defocus −0.889675516 mm at z=0.78125; source
  residuals +0.000362/−.010796/−.018543 distinct. Wide runtime field 19.966009 mm/21.65=92.22%, middle/tele 100%; source wide
  image height 18.34 is smaller and source ¶0054 allows digital correction. No invented crop/expanded asphere cap.
- Compared actual SVG with native Figure 3: two front shoulders restored, printed caps and unequal bonded domains retained.
  All 13 paths finite/closed/connected across 1365 states, zero hidden trim. Narrow surface/image-circle/aperture checks
  pass; field limitation explicit; no cuts/provenance exemptions. No source camera plate, IS decenter or new finite cam.
  Source fidelity, sampled clearance and production correlation remain separate.


## 2026-10-31 — Source reference semantics and E48R catalog follow-up

Exact local original: EP 4 174 551 A1, Second Numerical Embodiment (normalized Numerical Embodiment 2). Paragraph 0056 (PDF/printed p8) explicitly defines every numerical nd at d 587.6nm and νd=(Nd−1)/(NF−NC), naming F486.1/C656.3/g435.8nm. Paragraph 0064, PDF/printed pp10–11, surface-data rows1/3/5/7/9/12/13/15/17/18/20/22/24. All 13 modeled pairs were inspected again in the rendered original table; they match the existing data. No source filter, cover plate, additional bonded medium, numerical C/F/g index, partial-dispersion value or new APD evidence is present. Existing genuine fields and inferred badge qualifications are preserved.

The 13 `indexReferenceNote` strings were positive source citations, not uncertainty. Their references are preserved in the data header and these sidecars; the explicit `indexReference: "d"` remains. Removing the misused notes restores the inspector's established nd/νd labels and makes the media eligible for the reference-aware inventory. It does not change wavelengths, source pairs or the existing compatible catalog channels. No genuine reference-uncertainty note is removed.

The installed E48R curve comes from a [permission-bearing archival copy of the ZEON catalog](https://github.com/uasal/zmx2yaml/blob/36f3cd24da467375821b0a66698274fd84e19f6d/AGF_files/zeon.agf), with [Ansys's published ZEON-catalog attribution](https://community.zemax.com/got-a-question-7/lens-material-in-terahertz-spectral-range-780) supporting its vendor-origin provenance. It is an archival copy, not a direct vendor fetch. The unchanged polynomial evaluates nd=1.531160165 and νd=56.043827969; against source 1.53110/55.9 the differences are +0.000060165 and +0.143827969, within existing compatibility limits. Native valid range is 0.400–1.600µm at 25 °C. The curve supplies qualified spectral variation anchored to the authored source nd. It does not identify this lens's historical E48R grade, polymer chemistry, supplier, Canon formulation, molding or curing process. No catalog line indices or partials are copied into per-lens source fields.

Current spectral coverage is 13/13: 12 existing compatible identities and channel values are retained, and 1 former Abbe-only media now use E48R. Every d/G channel stays exactly at the source nd. The new R/C, B/F and V/g values are catalog proxies, never patent measurements. Zero numeric source, geometry, aperture, focus/zoom, asphere, stop, gap or source-errata values change.

Targeted continuity check only: Figure 3, PDF/printed p26, native 1535×2350 stencil at 300 ppi; target crop retains native pixels. Prescription/definition pages were rendered at 180 dpi; that raster scale is separate from the extracted native figure resolution. E12 is the complete independent L4 element R22*/R23*, 3.00 mm on axis, not a source hybrid layer. Its printed clear caps 10.605/11.635 mm and both aspheres are retained, including unequal ends; no bonded opaque land, resin wing or shape fit is introduced. Production SVG paths are exactly identical before/after across nine zoom/focus input combinations, with finite closed single connected paths and zero hidden trimming for the affected elements. Duplicate inputs are not additional supported physical states. No optical-rim dimension is remeasured or fitted in this follow-up.

The completed whole-lens shape review remains reused with its actual 2026-10-30 date and all earlier dates intact. Its field, interpolation, reconstructed-focus/IS, source discrepancy and production-correlation limits remain. This scoped source-reference/catalog check does not add a whole-lens shape review or certify the older runtime limitations.

All-media relabel leads were also evaluated and retained as bounded trials. E3/E10 keep K-PFK80: its installed vendor-catalog nominal νd is 81.5 while its published-coefficient curve evaluates 81.350377; S-FPL51 evaluates 81.545888. Substituting S-FPL51 would reduce the source-implied F−C span residual from+0.183646% to−0.056415%, a small rounded-coordinate improvement without source line/partial evidence selecting its violet dispersion. Neither label identifies the historical material. E6/E13 keep TAF3D: S-LAH65VS reduces the raw catalog nd residual from+0.000198282 to−0.000000440, but the runtime already anchors d to source 1.804, and its F−C span fit would worsen from+0.018862% to−0.059229%. A smaller unanchored index residual therefore does not justify that spectral substitution. No relabel or tolerance adjustment is made for either trial.


| Element / source row | Printed nd / νd | Retained or added qualified curve | Δnd | Δνd (catalog nominal) |
| --- | --- | --- | ---: | ---: |
| E1 / R1 | 2.00100 / 29.1 | S-LAH99 (retained) | +0.000000000 | +0.040000 |
| E2 / R3 | 1.90043 / 37.4 | TAFD37A (retained) | +0.000001712 | -0.030000 |
| E3 / R5 | 1.49700 / 81.5 | K-PFK80 (retained) | -0.000001380 | -0.149600 |
| E4 / R7 | 1.80610 / 33.3 | J-LASFH6 (retained) | +0.000000026 | +0.044981 |
| E5 / R9 | 1.63930 / 44.9 | S-BAM12 (retained) | -0.000000132 | -0.027196 |
| E6 / R12 | 1.80400 / 46.5 | TAF3D (retained) | +0.000198282 | +0.000000 |
| E7 / R13 | 1.71300 / 53.9 | LAC8 (retained) | -0.000000175 | +0.040000 |
| E8 / R15 | 1.48749 / 70.2 | S-FSL5 (retained) | -0.000000065 | +0.036300 |
| E9 / R17 | 1.90043 / 37.4 | TAFD37A (retained) | +0.000001712 | -0.030000 |
| E10 / R18 | 1.49700 / 81.5 | K-PFK80 (retained) | -0.000001380 | -0.149600 |
| E11 / R20 | 1.80100 / 35 | S-LAM66 (retained) | -0.000001211 | -0.032600 |
| E12 / R22 | 1.53110 / 55.9 | E48R (added) | +0.000060165 | +0.100000 |
| E13 / R24 | 1.80400 / 46.5 | TAF3D (retained) | +0.000198282 | +0.000000 |

Private proof confirms canonical deep equality after excluding only glass labels and the positive bibliographic notes. All retained dispersion channels are exactly equal; source G/nd is exactly equal for every medium. New curve channels and the corrected inspector-label semantics are recorded separately from geometry. Focused formatting/diff checks are run on the nine owned files; full repository gates and reports are coordinator-owned.
