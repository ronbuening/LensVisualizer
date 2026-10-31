# Audit Log - CANON EF 600mm f/4 L IS III USM

Patent: US 2019/0041605 A1, Numerical Data 4 / Figure 4A

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 5, Figure 4A, in a 600 dpi render (the current original extraction confirms
  native 300 ppi, so that render was an enlargement).
- Reliable optical-rim rows closely match the model: E1 is about 73.9 mm versus 77.1 mm, E2-E4 are 43.3-45.6 mm
  versus 44.5-48.5 mm, E5-E7 are 32.5-33.4 mm versus 32.5-34.9 mm, and E9/E10 are 17.75 mm versus
  17.5-17.6 mm.
- Focus arrows and subunit labels contaminate E6-E8 and E11-E13. The final E15/E16 rim is about 18.1 mm versus
  15.5 mm, a roughly 17% difference below the audit's strong-evidence threshold.
- Retained all surface and stop semi-diameters. The image-circle floor reports zero undersized surfaces and the surface
  validator reports no geometry errors.

### Glass classification

- Added legacy OHARA S-NBH53 from the vendor's 2009 datasheet as a distinct `738323` catalog entry. Its published
  coefficients reproduce the patent's exact `1.73800 / 32.26 / 0.5899` E10 coordinates rather than substituting the
  later S-NBH53V curve.
- E7 remains manufacturer-constrained Canon Super UD, and E15 remains explicitly unmatched because the nearest public
  coefficient row conflicts with the patent's partial-dispersion sign. Neither is assigned speculatively.
- The lens improves from 13/16 to 14/16 strict Sellmeier and trusted-chromatic coverage with no coordinate mismatch.

### Identity and metadata

- Verified the display name `CANON EF 600mm f/4 L IS III USM` against Canon's official product identity and the
  repository's spacing policy.
- Normalized the structured assignee to the repository-wide `Canon Inc.` spelling; the analysis retains the patent's
  printed Canon Kabushiki Kaisha wording.

## 2026-08-21 - Diagram-label, movement, and chromatic follow-up

### Patent-figure review

- Re-inspected Figure 4A at 600 dpi against the site screenshot, including a tighter rear-group crop. The measured rims
  still support the authored semi-diameters; the largest credible difference remains below the strong-evidence threshold.
- Replaced numeric tags with E1–E16 and replaced generic D2/D3/L3 annotations with the Figure 4A L3A, L3B IS, and L3C
  subunit spans. Cemented labels now identify their member pairs directly.

### Glass and motion metadata

- Reconstructed `dPgF` for all 16 active elements from the patent's published `θgF` rows and normal-line relation.
- Qualified E7's 437951 material with HOYA FCD100 as a supplier-neutral spectral proxy. Qualified E15 with CDGM
  H-ZBaF4 for C/d/F interpolation while keeping the patent-derived negative `dPgF` authoritative at g.
- Marked the two production-correlated fluorite positions and one Super UD position as inferred special-dispersion tags.
  Coverage improves from 14/16 to 16/16 without changing the patent nd/νd coordinates or asserting a production melt.
- Confirmed that E8/L2 translates 18.906939851 mm imageward from infinity to the modeled 4.2 m state, while L1/L3
  remain fixed. This prime lens has no zoom travel; L3B's only source-described motion is transverse IS.

## 2026-10-04 — Drop-in filter drawn as an element

- Patent check (US 2019/0041605 A1, Numerical Data 4): surfaces 30–31 are two flat surfaces, 2.20 mm thick, nd 1.51633,
  νd 64.14, θgF 0.5353, 5.25 mm behind surface 29 and 73.90 mm ahead of the image plane. Paragraph 0070 says the two
  surfaces closest to the image in each data set "correspond to a glass block, for example, a filter", and paragraph
  0069 defines BF as the air-equivalent value with such plates removed.
- The file had omitted G and carried the 80.59 mm air-equivalent BF on surface 29. G is now drawn: surfaces 30–31 and
  element 17 (`Plane-Parallel Plate`) with the printed spacings, whose air equivalent is 80.600871 mm.
- The source lists no clear aperture for the plate. Its semi-diameter, 17.0 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format at infinity, mid and close focus (15.98 mm), plus 5%,
  rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, stop radius and analysis half-field are unchanged. The image plane sits 0.011 mm further
  from the paraxial focus, from the rounding of the printed spacings.

## 2026-10-30 — Original shape and glass review

The exact original `patents/US20190041605A1.pdf` supplies Numerical Data 4 on PDF p. 14 (printed p. 7),
matching Fig. 4A/4B on PDF p. 5 (sheet 4), and Table 1 on PDF p. 15 (printed p. 8). Every source
R/d row, medium pair and relative partial-dispersion row was checked directly. Paragraph 0032 on
PDF p. 10 explicitly defines the material d reference and absolute θgF ratio; paragraph 0027 on
PDF p. 9 prints d 587.56, g 435.835, C 656.27 and F 486.13 nm. The source publishes no absolute
per-medium C/F/g index. All 17 genuine `dPgF` values are retained; G’s stored −0.00062 differs from
the exact derived −0.00061652 by only 0.00000348, within the spec’s 0.0003 retention tolerance.
A published partial-dispersion ratio does not identify a material as anomalous; the three existing
APD tags remain inferred, and product-material identities stay qualified.

The native page bitmap is 2560 × 3300 px at 300 ppi. The unresampled optical crop is 1620 × 630 px;
about 1486 px from first vertex to image over the 475.54 mm physical path gives 3.125 px/mm,
or 0.320 mm/px. Practical rim uncertainty is ±0.8 mm. Historical 600 dpi renders and current 2×/4×
crops are reading enlargements, not higher native resolution. Optical boundaries are separated
from group brackets, IS/focus arrows, leaders, stop strokes and rays.

| Surfaces     | Adopted clear sd (mm) | Resolved outer sd (mm) |
| ------------ | --------------------- | ---------------------- |
| 1–2          | 74                    | —                      |
| 3 / 4        | 45.5 / 44.8           | —                      |
| 5–6          | 44.8 / 44.5           | —                      |
| 7–8          | 43                    | —                      |
| 9–10         | 33.2                  | —                      |
| 11 / 12 / 13 | 32.5 / 32.5 / 32.4    | —                      |
| 15–16, focus | 22.5                  | —                      |
| 17–19        | 17.5                  | —                      |
| 20 / 21 / 22 | 16.1 / 16.1 / 14.6    | S22: 16.1              |
| 23 / 24      | 14.5 / 15.5           | S23: 15.5              |
| 25–26        | 15.2                  | —                      |
| 27–29        | 18                    | —                      |
| 30–31, G     | 22                    | —                      |

Nineteen existing caps change. Two resolved shoulders preserve S22/S23’s existing optical caps;
no opaque bonded-interface land is introduced. Every element, concave end, the four cemented
interfaces and G was inspected. The source’s zero D4 air interval is retained rather than
inventing cement; the opposing radii open outward and retain about 0.096668 mm at the rim.
The source does not resolve separate shoulders at the other small concave ends, so none is invented.
The actual generated SVG at approximately the native figure scale was compared with all groups.

Rejected trials preserve geometric limits: full S22/S23 optical caps at the blank heights need
4.20 mm sag intrusion across D22 = 4.13 mm, above the unchanged default allowance 3.717 mm.
Uniform 33 mm E6/E7 caps make E7’s edge thickness −0.250 mm; the 32.5/32.4 mm caps retain a
finite connected positive edge instead. No R/d, inferred cut, aperture, cam or tolerance changes
are used to force agreement. All 201 sampled focus states have 17 finite closed connected contours
and zero hidden renderer trimming under the unchanged default 0.90 gap guard.

The source infinity state passes surface, image-circle, project 3% aperture and ≥99% corner-field
checks. The unchanged derived iris is 22.427369340 mm: project paraxial f/4.12 versus independent
real input-diameter f/4.211719224, a convention-dependent difference rather than a source iris
measurement. A 101-focus × three-field × 97-pupil census traces 29,391 rays with no seed/aim
failures; all axial samples and all chiefs clear. Its 401 off-axis `noBracket` entries before the
first surface independently meet the unrestricted first sphere outside its 74 mm cap; zero
inside-cap misses are unexplained. The baseline has the same 401 bounded cap misses.

The existing L2 cam remains a constrained reconstruction. Its actual close object-to-image
conjugate is 4200.271808 mm rather than an exact published 4.2 m state. Finite field heights use
Gaussian magnification; this does not establish a production focus map. Physical infinity focus
is 81.322937 mm behind R29 versus the source physical path 81.35 mm, retaining −0.027063 mm
defocus without fitting a rear gap. Source BF/LD use an air-equivalent convention, while the
current G plate is physical. Only centered IS is encoded; numerical transverse actuator travel,
moved-state clearance and attached-converter combinations are unverified.

Source condition (5)/(12) and unit-L3 focal-power contradictions are formalized as unresolved
`source.errata`. The matching unprinted d24 trial is a rejected sensitivity hypothesis; all
published geometry remains unchanged. Source fidelity, sampled runtime behavior and production
correlation are separate findings.

### Glass and retained source constraints

- All 31 source R/d rows, 17 nd/νd/θgF triplets, source G thickness/gaps, stop/aperture rule and
  reconstructed L2 gap controls remain unchanged. All 17 compatible curves remain qualified proxies;
  all 17 genuine source-derived partial fields are retained, with no unsupported C/F/g index added.
- Catalog count is corrected from 16/12 to selected-source 17/13 including required G. Historical
  source/glass reviews dated 2026-08-20, 2026-08-21 and 2026-10-04 remain above; source/proxy wording
  and stale filter-omission statements are superseded by this current review.
- The source’s condition (5) definition is repeated in paragraph 0048/0051 (PDF p. 11) and claim 3
  (PDF p. 16); literal fG1P/f1 = 1.907278, unlike Table 1’s 0.772. Table G1N/condition (12) also
  conflict with the actual negative element, and the nearly afocal unit power differs. These stay
  unresolved; the unprinted d24 trial neither proves a historical dimension nor authorizes a correction.
- The source never names the historical supplier, melt or fluorite/Super UD chemistry. Those labels
  remain qualified product associations with compatible spectral proxies; APD identity remains inferred.
  No separate hybrid, resin or cement medium, inferred cut or beam exemption is invented.

## 2026-10-31 — Scoped source-partial candidate review; current curves retained

The completed Oct 30 review and Aug 20/Aug 21/Oct 4 history remain dated as written. Narrow direct source check: exact `patents/US20190041605A1.pdf`, Numerical Data 4 PDF p. 14/printed 7, S1/S15/S21 at 1.59349/67.00/θgF0.5361. PDF p. 10 ¶0032 explicitly defines νd=(Nd−1)/(NF−NC), θgF=(Ng−NF)/(NF−NC); p9 ¶0027 supplies d587.56/g435.835/C656.27/F486.13 nm. Engine-normal conversion, not a source normal formula, gives existing dPgF +0.004994. Figure 4A p5 identifies the ordinary front/focus singlets and bonded S21 media transition; G remains the source filter. Native2560×3300/300 ppi pages were read, not upsampling counted as new evidence.

Retained official HOYA20260707 AGF rows694 PCD51 and7214 M-PCD51 are distinct source states. M-PCD51 raw PgF error−0.000230889 is smaller than PCD51+0.000545275, but nd becomes−0.001476254 from source, versus current+0.000003092. Source C–F span is0.00885805970; current0.00885786178, alternate0.00883303296. Borrowed-curve effective νd worsens67.001497→67.189832. The actual runtime θ remains exactly0.5361 for both because source dPgF controls g; there is no source-channel accuracy gain to justify the swap.

Reject M-PCD51 for E1/E8/E12. All17 source nd/νd/θ rows and genuine derived partials, G, APD dispositions, R/d, caps, stops and controls remain untouched. All existing curve/channel identities stay equal. Data is byte-identical; only audit/analysis record the balanced negative result and remove repeated qualification text. No new curve, molding identity, spectral override, full-review count or runtime-clearance claim is added.
