# Nikon AF-S DX 18–105 mm — source and model audit

US 7,839,577 B2, Fifth Example / Tables 17–20 / Figure 17.

## Controlling 2026-10-29 decisions

- At the owner's request, the model was re-sourced from the later WO 2021/039812 A1 Example 8 to JP 2009-156890 A Example 5, then attributed to its US family member US 7,839,577 B2. The US application is 12/342,315, filed 2008-12-23, granted 2010-11-23, with priorities JP 2007-331480 and JP 2007-331481. US inventor order is Yamamoto, Ito, Yamaguchi, Shibayama. The JP text and US page images were previously checked as identical; no local JP PDF was available.
- The original Fifth Example differs from the later WO reprint: L13 is 1.69680/55.52 with R4 63.1334, rather than 1.66106/56.09 and 59.8952; κ is 87.2734 rather than 82.273. The original four polynomial coefficients retain five significant figures. R5, R14 and R20 retain the small original digit differences. The later flare plane is omitted, and the original d4 is the whole G4–G5 gap.
- Original source authority: Table 17, PDF page 37, all 28 rows and 16 media; Tables 18–20, PDF page 38; Figure 17, PDF page 18; equation (a), columns 13–14, PDF page 31. Its √(1−κy²/r²) convention means K=κ−1=86.2734. A4=4.40790e−6, A6=−3.55660e−8, A8=1.04050e−10, A10=−2.45810e−13; A12/A14=0.
- Source W/M/T f=18.4/57.4/102.0 mm, FNO=3.6/5.2/5.8, Bf=38.310/58.032/65.481 mm, IH=14.0 mm. Model EFL=18.4013/57.4338/102.0020 mm; source group focal lengths +91.792/−14.310/+23.831/−36.549/+45.130 mm are reproduced. No nominal-EFL fitting is applied.
- Printed zoom gaps remain d1=1.925/27.504/41.483, d2=24.941/7.881/3.243, d3=2.033/7.048/8.771, d4=13.813/8.798/7.075 mm. Stop15 is 0.400 mm ahead of16 and moves with G3. G4 is centered; VR motion is not modeled. Source factors1.23/1.84 imply G4 shifts0.18/0.29 mm for0.70°/0.30° shake.
- Twenty-three intermediate zoom stations and all finite-focus states are derived. W→M gaps interpolate with solved Bf; M→T uses a linear G2 vertex and solved d2/Bf to avoid an unsupported second G2 reversal. G2 alone moves objectward for focus, conserving d1+d2, with 0.45 m product MFD and ten focus keyframes. Source is infinity-only. The modeled G4 path does not reproduce the schematic arrow's arch; it follows the printed states without an invented cam law.
- Prior Fig17 native calibration: axis x≈1299.5, S1y≈2285 and S28y≈1102,1183px/95.263mm≈0.0805mm/px. L11 body≈27.3, contact≈25.5; L13≈23.1; hybrid body≈15.0 and rear cap≈11.2; L22≈11.15; L23/L24≈11.3; G3≈7.7; G4≈7.4; G5≈11.2–11.4 mm. Source rims are estimates, not printed dimensions.
- The earlier S9 raise10.5→11.1 and S3 raise25.4→25.5 were retained. A subsequent S2 raise25.5→26.8 was made solely to square L11; the current review below supersedes that powered-contact interpretation. C1–C4 labels replace ambiguous D1–D4 labels; H1 denotes the resin/substrate compound and is part of one physical L21 lens.
- Earlier S8 outer-body/cut proposals were declined because they needed a new gap-policy relaxation. Existing caps and all controls/tolerances remained. The source does not give clear diameters or cut depths.
- The coordinator retained resin θgF0.5928 from later WO2021/039812A1 Table8 (printed52), independently noted in US2021/0026133A1 Table5 and JPWO2019/116563A1 p19. The selected original US/JP example gives no partial. Current treatment below preserves this as a qualified spectral proxy, without assuming original material identity.

## 2026-10-30 — Fresh F-mount original-patent shape and glass review

### Exact local sources and finite limits

- Reopened local `patents/US7839577B2.pdf`, Fifth Example: Fig17 PDF18 (native and twofold enlarged page image), Table17 PDF37, Tables18–20 PDF38, and definitions/equation(a) PDF31. The PDF contains native2560×3300 one-bit image pages wrapped at72ppi; a larger rendered dpi is not additional source precision. Fresh first/last vertex and outline inspection agrees with the native scale and group heights above. Labels, leaders, group brackets and motion arrows were excluded from optical rims.
- The original source is infinity-only. All finite object states and the23 interpolated zoom stations remain qualified reconstructions. Original d-line reference is explicit at λ587.6nm in column14/PDF31. The original source does not identify UV curing, resin trade name, chemistry, supplier or melt.
- Supplement only: directly read local `patents/WO2021039812A1.pdf`, Example8/Table8, printed52/PDF54, resin surface6\*: nd1.55389/νd38.09/θgF0.5928. The neighboring L13, asphere and flare-plane differences prevent treating that later example as the original prescription or proving that matching n/ν means identical resin.

### Heights, concave ends and connected contacts

- S2 powered contact cap is corrected26.8→25.5mm, matching Fig17's L11/L12 contact and L12's unchanged25.5mm rear cap. L11 retains its26.8mm front. The source exposes an air annulus outside the contact; the schema cannot model it by placing an opaque land at a glass/glass boundary. The honest remaining L11 taper is explicitly disclosed. No interface is disconnected and no powered interface is extended solely to square the silhouette.
- Every remaining face was checked, including hybrid S8, S12/S13 near-contact ends, L24's rear, the post-stop doublets, small G4 pair and rear G5 members. Source S8 has an independent rear land, but `rimExtensionSd:14.8` on the retained10.5mm cap is refused: it intrudes5.518mm into the6.050mm gap toS9, against5.445mm allowed. No source exemption, inward-cap workaround or tolerance change is used.
- A coupled S12/S13 increase9.6→9.7mm is also refused by the0.180mm allowance in their0.200mm air gap. Raising only one face is not evidence of a physically squared pair. The larger source knife-edge/contact outline crosses with the literal R/d; the existing constrained9.6mm caps remain. Weak few-pixel curves and bevels elsewhere do not independently support flat lands or cuts.
- All other SDs, every R/d, asphere, nd/νd, aperture/stop/focus/zoom control, image plane, cam station and tolerance remain unchanged. No `rimCutDepthMm`, `rimCutDepthSource` or `rimExtensionSd` is authored, so the inferred-cut guard is vacuous.

### Fresh glass check

- All16 original d-line index/Abbe pairs match Table17 literally: L11 1.80518/25.43; L12 1.60311/60.68; L13 1.69680/55.52; resin1.55389/38.09; L21/L22/L24 1.80610/40.94; L23 1.84666/23.78; L31 1.75520/27.51; L32 1.49782/82.56; L33 1.61800/63.38; L41 1.72916/54.66; L42/L53 1.85026/32.35; L51 1.51680/64.12; L52 1.48749/70.45.
- Fifteen bulk media resolve to compatible catalog curves. The resin remains unresolved and has no invented reusable catalog row. All vendor labels are spectral proxies, not historical supplier/melt identities. No source C/F/g indices or bulk-glass partials are supplied or added.
- Retain the approved later-patent resin supplement as a qualified proxy. θ0.5928 has four-decimal printing with a±0.00005 rounding interval. Normal line0.6438−0.001682νd gives ΔPgF0.01306738, stored0.0130674; its arithmetic digits do not increase source precision. The original2008 source supplies no θ and no claim of identical resin chemistry/cure is made.
- Removed unsupported `UV-cure resin` wording in favor of unspecified bonded resin. Its existing note now states original-source absence, the exact supplemental table, printing precision and material-identity limit. L32 remains at most `apd:"inferred"` as a production ED-position correlation; no original-source anomalous classification is created.

### Actual rendering and verification

- Canonical geometry/surface checks pass with the default gap policy unchanged. Actual `buildLens`/`computeElementShapes` SVGs at published W/M/T and focus0/0.5/1 were rasterized and inspected. All26 zoom stations and their midpoints × every focus keyframe plus0.5 give561 diagnostic states, maximum hidden trim0mm, finite paths and connected bonded/cemented contours.
- Fresh exact original/candidate axial stop-edge and Y14.0mm chief checks at W/M/T are identical and clear. The chief reaches38.664931°/13.248745°/7.585820°, with S2 heights20.595345/19.705481/19.113861mm, safely inside25.5mm. Axial meridional stop-edge S2 heights are2.520882/5.437311/8.663550mm. These are current-engine results, not newly published source values.
- A16×16 real-stop lattice at five field fractions, zoom0/0.2/0.5/0.72/1 and all focus keyframes plus0.5 retains all51,460 baseline transmitted samples, zero lost/gained. These sampled counts do not measure flux.
- Image-circle audit reports0 undersized. All26 infinity zoom stations retain≥99% format-corner chief reach (APS-C corner14.18mm, sourceIH14.0mm). All26 axial f-number checks are within3%, without a rim limiter. Catalog consistency/resolver checks pass; no shared engine change or per-lens test is introduced.
- These checks do not identify historical material, certify the production mapping or remove the source-gap, exposed-annulus, derived-focus/cam and centered-VR limitations.
