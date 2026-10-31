# Audit Log - CANON EF 400mm f/2.8 L IS III USM

Patent: US 2019/0041605 A1, Numerical Data 2 / Figure 2A

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 3, Figure 2A, at 600 dpi with `audit:patent-figure`; the calibrated figure scale was 129.33 µm/px.
- Reliable optical-rim rows agree with the model: L1-1 is about 67.3 mm versus 71.0 mm, L1-3 is 37.3 mm versus 39.0 mm, and the measurable rear elements are within about 14%.
- Focus arrows, group brackets, and the `G` leader contaminate several automated rows, so those rows were checked against the high-resolution render rather than treated as dimensions.
- Retained all surface and stop semi-diameters. No uncontaminated row exceeded the audit's strong-evidence threshold, and the image-circle floor reports zero undersized surfaces.

### Glass classification

- Numerical Data 2 publishes nd, νd, and θgF but no production supplier or glass names.
- Retained the authored measured C/F/g reconstruction and all 16 coefficient-backed catalog curves, while qualifying the OHARA names as catalog equivalents with the production supplier unspecified.
- No new catalog row is justified. The lens remains 16/16 strict Sellmeier and trusted-chromatic covered with no coordinate mismatch.

### Identity and metadata

- Verified the display name `CANON EF 400mm f/2.8 L IS III USM` against Canon's product identity and the repository's spacing policy.
- Normalized the structured assignee to the repository-wide `Canon Inc.` spelling; the source reference continues to record the patent's printed applicant name, Canon Kabushiki Kaisha.
- Verified Figure 2A's infinity-to-proximity arrow against the runtime motion profile: only L2 moves, by +19.078267603 mm imageward; the fixed L1/L3 units do not acquire zoom travel.
- Kept the patent's D1-D4 pair labels. The shared annotation renderer now staggers close D2/D3 captions instead of allowing the two labels to collide.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-29 gap (69.920872 mm) with the patent's physical rear stack, read from the rendered
  Numerical Data 2 table (PDF page 13, printed page 6): d29 = 7.77 mm, glass block G 2.20 mm, nd 1.51633, νd 64.14,
  θgF 0.5353 (dPgF −0.00062 against the project normal line), then 60.70 mm to the image plane. Labeled S-BSL7 (OHARA),
  an exact nd/νd catalog match.
- Paraxial check against the previous data: EFL identical and defocus unchanged at infinity and at the 2.5 m keyframe
  (the old fold was computed unrounded). Physical track grows by 0.749 mm to 372.010 mm; the air-equivalent 371.261 mm
  still matches the patent's printed 371.25 total lens length.

## 2026-10-04 — Drop-in filter drawn as an element

- The rear drop-in filter plate G moved out of `rearPlates` into the drawn prescription: surfaces 30–31 and element 17
  (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place and
  a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 21.5 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (20.00 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, analysis half-field and the traced axial,
  mid-field and corner bundles are unchanged, and `npm run audit:field-coverage` still reports 100% of the corner. The
  plate now clips the chief ray at 4.43° (the half-field was 5.10°, set by another rim); the format corner is 3.16°,
  so coverage is unaffected, and the diagram's off-axis field narrows from 3.06° to 2.66°.

## 2026-10-30 — Native original, complete shape and glass review

### Exact publication and evidence scale

Fresh inspection uses `patents/US20190041605A1.pdf`, US 2019/0041605 A1, Numerical Data 2. Figure 2A is PDF
page 3/sheet 2 of 6. The full 31-row prescription and all 17 nd/νd/θgF triples are on PDF page 13/printed 6, with
summary/group continuation on page 14/printed 7. Paragraph 0032 on page 10/printed 3 explicitly defines the d/F/C/g
Fraunhofer reference and both dispersion ratios; ¶0070 assigns the last two surfaces to glass block/filter G.

Every page is a native 2560 × 3300 raster at 300 dpi. The section and numerical column were read in native crops.
The earlier 600 dpi audit view is upsampling; a new 4× nearest-neighbor rear-cluster aid is also only a viewing aid.
The 120.54 mm long gap spans about 450 native pixels and the first-vertex/image track about 1390 pixels: scale is
roughly 3.7–3.8 px/mm. Two-pixel reading uncertainty is ±0.5 mm before local schematic/stroke uncertainty; adopted
blank heights retain about ±1–1.5 mm uncertainty. Leaders, brackets, axis and focus/IS arrows are excluded.

### Every element and concave end

| Element | Source faces | Adopted clear front / rear radius (mm) |
| ------- | ------------ | -------------------------------------: |
| L1-1    | 1–2          |                            69.5 / 69.5 |
| L1-2    | 3–4          |                              40 / 38.4 |
| L1-3    | 5–6          |                              38.4 / 39 |
| L1-4    | 7–8          |                            36.5 / 36.5 |
| L1-5    | 9–10         |                                32 / 32 |
| L1-6    | 11–12        |                            29.5 / 29.5 |
| L1-7    | 12–13        |                            29.5 / 29.5 |
| L2-1    | 15–16        |                            23.2 / 23.2 |
| L3A-1   | 17–18        |                            18.5 / 18.5 |
| L3A-2   | 18–19        |                            18.5 / 18.5 |
| L3B-1   | 20–21        |                            16.5 / 16.5 |
| L3B-2   | 21–22        |                            16.5 / 15.2 |
| L3B-3   | 23–24        |                            15.2 / 17.5 |
| L3C-1   | 25–26        |                            17.5 / 17.5 |
| L3C-2   | 27–28        |                                20 / 20 |
| L3C-3   | 28–29        |                                20 / 20 |
| G       | 30–31        |                            21.5 / 21.5 |

The actual source and SVG comparison identifies inflation in the previous S3, S7/S8, S9/S10, S11 and rear-group
outlines. First-blank half-height is about 260 native pixels (adopted 69.5 mm), S3 about 150 px (40 mm), S7/S8
about 137 px (36.5), S9/S10 about 120 px (32), and the bonded L1 pair about 111 px (29.5). D2 measures roughly
69 px (18.5), D3 about 62 px (16.5), the small rear positive about 66 px (17.5), and final doublet about 75 px
(20). The filter's 80 px supports retaining 21.5 mm. These are approximate inferred heights, not patent dimensions.

S4/S5 remain 38.4 mm. A 39 mm trial fails the unchanged guard (approximately 0.15 mm intrusion against 0.153 mm
allowed over 0.170 mm; rounded display hides the small excess). S22/S23 stay 15.2 mm after the 16.5 mm trial
fails with 5.60 mm intrusion against 4.887 mm allowed over 5.430 mm. The native blank progression suggests more
nearly common endpoints, but exact source R/d and strict geometry take precedence over fitting those endpoints.
No separate cap-to-shoulder endpoint is resolved there, so no opaque extension or flat cut is invented. All four
cemented interfaces S12/S18/S21/S28 stay bonded transitions without opaque lands; no resin wing is added.
No outer extension or `rimCutDepthMm` is authored. Every R/d, stop coordinate and focus gap stays unchanged.

### All media and genuine partial dispersion

| Medium | Printed nd / νd | Printed θgF | Retained dPgF | Qualified curve |
| ------ | --------------- | ----------: | ------------: | --------------- |
| L1-1   | 1.59522 / 67.74 |      0.5442 |   +0.01433868 | S-FPM2          |
| L1-2   | 1.43700 / 95.10 |      0.5326 |   +0.04875820 | FCD100          |
| L1-3   | 1.80610 / 33.27 |      0.5881 |   +0.00026014 | NBFD15          |
| L1-4   | 1.43700 / 95.10 |      0.5326 |   +0.04875820 | FCD100          |
| L1-5   | 1.89286 / 20.36 |      0.6393 |   +0.02974552 | S-NPH4          |
| L1-6   | 1.83400 / 37.16 |      0.5776 |   -0.00369688 | S-LAH60         |
| L1-7   | 1.43700 / 95.10 |      0.5326 |   +0.04875820 | FCD100          |
| L2-1   | 1.61800 / 63.40 |      0.5395 |   +0.00233880 | PCD4            |
| L3A-1  | 1.89286 / 20.36 |      0.6393 |   +0.02974552 | S-NPH4          |
| L3A-2  | 1.51742 / 52.43 |      0.5564 |   +0.00078726 | S-NSL36         |
| L3B-1  | 1.80610 / 33.27 |      0.5881 |   +0.00026014 | NBFD15          |
| L3B-2  | 1.53775 / 74.70 |      0.5392 |   +0.02104540 | S-FPM3          |
| L3B-3  | 1.72916 / 54.68 |      0.5444 |   -0.00742824 | S-LAL18         |
| L3C-1  | 1.65412 / 39.68 |      0.5737 |   -0.00335824 | S-NBH5          |
| L3C-2  | 1.72047 / 34.71 |      0.5834 |   -0.00201778 | S-NBH8          |
| L3C-3  | 1.80810 / 22.76 |      0.6307 |   +0.02518232 | S-NPH1          |
| G      | 1.51633 / 64.14 |      0.5353 |   -0.00062000 | S-BSL7          |

Every original triple is retained. The existing 17 dPgF values exactly recover the printed θgF via the engine normal
line, θgF = 0.6438 − 0.001682 νd + dPgF. These are source-derived partial ratios, not catalog copies. By contrast,
all 48 authored C/F/g values were catalog-anchored reconstructions: the original supplies none. Their prior
“measured” classification is corrected and those overrides are removed. All 17 compatible catalog curves are retained
as qualified spectral proxies; C–d–F splitting remains a proxy, while the genuine source ratio controls g. No historical
supplier, melt, chemistry, fluorite/Super UD identity or source-designated APD material is inferred from compatibility.
No indexed cement or hybrid layer is separately prescribed at any bond.

G remains 2.20 mm with nd 1.51633/νd 64.14/θgF 0.5353, preceded by 7.77 mm and followed by 60.70 mm. Paragraph
0025 calls it a glass block, for example an optical filter, without naming a drop-in holder or establishing lens/camera
ownership. The existing drawn working-system filter representation is retained; a production holder identity is an
interpretation, not new original evidence. No source-camera-cover definition justifies changing the representation.
Its 21.5 mm clear radius is inferred. The largest sampled passing format ray reaches 19.904957 mm at its rear face.

### Controls, actual SVGs and retained source contradictions

Actual SVGs at infinity/half/close focus were compared with native Figure 2A and its dense rear cluster. All 21 focus
states have 17 finite, closed, connected paths, zero hidden renderer trimming and 3087 aimed full-open pupil launches.
All 1029 axial samples and 63 chiefs clear. Axial/0.6-field/corner survivors of 49 are 49/37/25 at infinity,
49/45/32 at half focus, and 49/48/40 at inferred close focus. The first stops of peripheral samples remain visible
in the model; full-field pupil transmission is not claimed. Narrow surface, image-circle, strict stated-aperture and
runtime format-corner checks pass without changing tolerances; no inferred cut requires an exemption.

The source publishes only infinity. The retained single-DOF negative-L2 cam gives 2500 mm/|m| 0.176031 at close
and 4550.240362 mm/|m| 0.091785 at half focus. L3B's transverse IS motion is described but has no numerical range;
the model stays centered and no displaced-IS clearance is asserted. No zoom or other special control exists. The
source 3.16° half-angle gives 21.817696 mm image height (100.9% of its 21.64 mm summary), independently of the
clear runtime-format chief at approximately 3.1°. The source plane remains 0.058323 mm imageward of Gaussian focus.

The prior conditional-expression issues remain explicit and now have an unresolved source.errata note: paragraph
0031 versus claim 1 bounds, paragraph 0048's fG1P/f1 versus Table 1's system-focal denominator, the negative-element
fG1N label, and mixed physical/air-equivalent dF2/LD conventions. Fresh native paragraphs 0032/0048 and Table 1
(page 15/printed 8) confirm these printed definitions. No prescription number is changed to repair a condition.
Source fidelity, sampled runtime clearance and production correlation remain distinct conclusions.
