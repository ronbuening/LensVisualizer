# Audit Log — Canon RF 10-20mm f/4 L IS STM

Patent: US 2024/0045184 A1, Numerical Example 1.

## 2026-10-01 — Optical rims, glass and display metadata

| Surface / element | Field                | Before              | After                                              | Source and reason                                                                                                             |
| ----------------- | -------------------- | ------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 13 / E7           | `sd`                 | 9.8 mm              | 8.4 mm                                             | Fig. 1, PDF p. 2: C2 has a continuous front/junction rim. Retained the 8.4 mm junction and the clearance-limited 6.9 mm rear. |
| E5, E9, E14       | `vd`                 | 40.81               | 40.8                                               | Example 1 surface rows 8, 16 and 24, PDF p. 20: retain the printed Abbe number rather than a catalog coordinate.              |
| E6                | `vd`                 | 34.71               | 34.7                                               | Example 1 surface row 11, PDF p. 20: same source-coordinate correction.                                                       |
| All elements      | Glass interpretation | Catalog class names | Supplier-neutral spectral proxies, explicit header | Example 1, PDF p. 20, gives nd/νd without supplier identities or partial dispersion.                                          |

Fig. 1 was inspected at 600 dpi. The measured axial glass span gives 45.71 µm/px; C2's optical half-height is approximately 7.5 mm. The retained 8.4 mm rim allows model clearance without the former front step. Brackets and focus/IS leader lines contaminated the automated E6–E11 envelopes. The E3 automated reading instead selected E2's rim; it is not evidence to enlarge E3. All four cemented doublets were reviewed by eye, with cross-gap constraints retained. The remaining apertures are modeled, not source-published effective diameters.

All 16 visible elements already resolve to coefficient-backed catalog curves. S-FPL55, FCD515, S-NBH52V, TAFD65 and L-LAH85V are present in the shared catalog; this batch does not need duplicate rows. The Super UD/UD classifications remain inferred. No measured line indices or patent APD data were invented.

Display name retained: **CANON RF 10-20mm f/4 L IS STM**; Canon's [product page](https://www.usa.canon.com/shop/catalog/product/view/id/197450/s/rf10-20mm-f4-l-is-stm/) confirms the STM and L designations. The production correlation remains unconfirmed, and the published back-focus/group-power discrepancies remain disclosed in the analysis.

## 2026-10-01 — Live diagram, C4 rim and movement review

| Surface / element | Field          | Before           | After            | Source and reason                                                                                                               |
| ----------------- | -------------- | ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 21 / E12          | `sd`           | 11.5 mm          | 9.9 mm           | Fig. 1, PDF p. 2: C4 has a shared optical rim, approximately 9.3 mm; remove the unsupported front step with clearance retained. |
| 23 / E13          | `sd`           | 10.4 mm          | 9.9 mm           | Same figure: align the rear rim with the unchanged 9.9 mm cemented junction.                                                    |
| E5, E6, E14, E16  | `diagramLabel` | Numeric fallback | G1P, GP, GIS, LN | Fig. 1 names these elements or their single-element units; retain E-number inspector identities.                                |

The reduced C4 rims exceed the maximum sampled heights of previously unclipped diagram rays at surfaces 21/23 (8.38/8.07 mm, nine zoom settings and three focus settings). This is a meridional display-ray clearance check, not a new physical finite-conjugate verification. The other optical rims and all cemented pairs were re-inspected against the exact figure; source ink and existing cross-gap constraints do not support further edits.

Fixed-image-plane movement agrees with Fig. 1 and the published infinity gaps: L1 moves imageward by 6.47 mm to the middle station, then objectward by 0.91 mm; L2 and L3 move objectward through zoom; L4 stays fixed. Near focus moves only GP imageward by 2.2469/2.2852/2.4319 mm at W/M/T. Close-focus distances and travel remain reconstructed. The live inspector retains four inferred APD elements and five aspheric surfaces on three elements; all 16 elements retain coefficient-backed curves.

Structured assignee retained as **Canon Inc.**, consistent with the other two new lenses and the modern Canon catalog identity. Historical **Canon Camera Co., Inc.** remains a distinct source-era identity linked by the corporate-history registry; it is not a spelling duplicate.

## 2026-10-30 — Scoped original shape-and-glass follow-up

Exact original: `patents/US20240045184A1.pdf`, Numerical Example 1, prescription
and aspheres PDF pp. 20–21 / printed pp. 6–7; Fig. 1 / PDF p. 2 / sheet 1;
Figs. 2A–2C / PDF pp. 2–3; Table 1 / PDF pp. 24–25. Paragraphs 0010–0011,
PDF p. 15, confirm this mapping. The front page confirms Makoto Nakahara, Canon
Kabushiki Kaisha (normalized Canon Inc.), filing 2023-07-06 and publication 2024-02-08.
All 29 source rows, 24 fixed distances, four three-station gap schedules, constant
d29=12.13, sixteen pairs and five aspheres (32 K/coefficient entries) match.
No alternate publication was substituted and no R/d, asphere, stop or control changes.

The October 1 audit is retained with its actual date. Reopening is justified by
reproducible SVG/source differences: missing free-end shoulders close diagonally,
and old beam-margin caps exceed several drawn blanks. Unchanged material selections
are reused; the C2/C4 cap estimates are superseded by this native-scale comparison.
The local original embeds 2560× 3300 raster pixels at 300 ppi. Earlier 600-dpi renders
were upsampling, not additional native detail. In the native Fig. 1 crop, about
1272 px spans 116.69 mm between first/last vertices, about 10.9 px/mm. Practical
height uncertainty is ±0.6 mm, ±1.0 mm at front optical-cap/outer-blank transitions.
Leaders, brackets, focus/IS arrows, zoom paths and the image plane are excluded.

### Every element, interface and retained constraint

Native approximate blank half-heights (mm): E1 31.4; E2 21.3; E3 15.7; C1 13.9;
GP 7.5; C2/C3 7.6; E11 9.0; C4 9.3; GIS 9.8; E15 11.3; E16 20.0. These are
figure measurements, not printed optical apertures. Adopted clear caps and outer
shoulders remain inferred with that uncertainty:

| Surfaces | Previous clear sd | Adopted clear sd | Outer extension sd |
| -------- | ----------------- | ---------------- | ------------------ |
| 1A/2A    | 33.5/25.6         | 31.5/23.7        | S2A=31.5           |
| 3/4      | 22.7/16.05        | 21.4/16.05       | S4=21.4            |
| 5/6      | 15.7/14.25        | unchanged        | S6=15.7            |
| 7/8/9    | 13.3/13.9/13.7    | unchanged        | S9=13.9            |
| 11/12    | 8.4/8.6           | 7.6/7.6          | none               |
| 13/14/15 | 8.4/8.4/6.9       | 7.7/7.7/6.9      | S15=7.7            |
| 16/17/18 | 6.85/8.7/8.75     | 6.85/7.7/7.7     | S16=7.7            |
| 19/20A   | 10.9/10.85        | 9.2/9.2          | none               |
| 21/22/23 | 9.9 each          | 9.5 each         | none               |
| 24/25    | 10.6/10.15        | 9.9/9.6          | S25=9.9            |
| 26A/27A  | 10.6/11.5         | unchanged        | S26A=11.5          |
| 28/29    | 20.2/20.8         | 20.2/20.2        | none               |

Seventeen clear caps change and eight free-end shoulders preserve their optical
caps. All sixteen elements, concave ends, four cemented interfaces and all five
aspheric profiles were inspected. Bonded boundaries remain curved and connected;
no opaque bond land, disconnected wing, invented resin, mechanical flange or inferred
cut is added. Paragraph 0039 permits a general camera-side plate, but neither the
selected numerical prescription nor its figure includes one. No selected source
medium or rear plate is omitted.

Rejected trials and retained bounds:

- Full S7 outer 13.9 gives 9.463 mm land intrusion across 9.86 mm, above the unchanged
  8.874 mm guard. Retain clear 13.3 without a fabricated shoulder across that boundary.
- Initial full S25 outer 10.6 gives 5.102 mm intrusion across 5.56 mm, above 5.004 allowed.
  Adopt the native-scale 9.9 outer with 9.6 clear cap. These are margin-guard failures,
  not claims of negative physical separation.
- S15/S16 optical caps 6.9/6.85 keep 0.085079 mm common-cap physical separation across
  the printed 0.80 mm gap. Their shoulders do not enlarge that optical aperture.
- The C1 front outline remains slightly tapered under the S7 limit. No source R/d
  or asphere is tuned to flatten the blank. All 1365 actual SVG states are finite,
  closed and connected, with zero hidden renderer trim.

### Every medium, reference line and spectral qualification

Paragraph 0075 / PDF p. 20 defines d587.6/F486.1/C656.3 nm and νd=(Nd−1)/(NF−NC).
Paragraph 0041 / PDF p. 17 identifies plotted d587.6/g435.8 nm. All sixteen pairs
and their d reference are preserved. All sixteen prior coefficient-backed curves
resolve identically after public labels are qualified as compatible spectral proxies;
historical supplier, melt, chemistry, cement and molding method remain unspecified.
There are no source numeric nC/nF/ng or positional partials, and no unsupported
active numeric overrides were present: zero removed. E4/E11/E13/E16 APD stays
inferred; catalog chemistry, low-Tg grade and production UD position are not proved.
The October 1 curve/source-coordinate coverage remains dated history rather than
being relabeled as a fresh historical-material identification.

Literal source inconsistencies are retained and formally recorded as unresolved:
L3 computed 49.324924 versus printed 49.46 mm; computed infinity BF 12.054/12.021/
11.980 versus printed 12.13 mm; Fig. 2A's Fno 4.63/half-field 36.2° header versus
Example 1's wide Fno 4.08/paraxial half-field 61.36°. Source rows and printed image
plane remain unchanged; no unique optical correction is established.

### Runtime scopes and limitations

Surface/image-circle checks pass. Aperture and ≥99% format-chief coverage pass at
all 3 source stations and all 65 sampled zoom positions. The 65-station diagnostic
clone is geometry/iris-identical. All 1365 zoom/focus contours have sixteen finite,
closed, connected paths and zero trim. Worst sampled infinity BF displacement is
−0.635794 mm at zoom 0.28125 (EFL 12.612474, BF 11.494206, image gap 12.13 mm).
Only the three infinity stations are published; all finite controls and intervals
remain the unchanged reconstruction, not a validated production cam.

Dense pupil sampling uses 97 stop-aimed points at axis/half/full 21.635 mm format
corner over 65 zoom × 7 focus values. All 390 non-infinity controls have positive
actual Gaussian conjugates; no virtual-object substitution is needed. Six wide-end
finite full-format chief seeds are unbracketed at focus .01/.05/.25/.5/.75/1,
beyond the source's smaller wide 18.92 mm image height. The remaining 131,823 rays
have every axial pupil and every converged chief clear, with 17,498 ordinary
marginal clips, six bounded first-asphere cap misses and 46 bounded S13 cap misses.
Actual conic/polynomial intersections classify the first misses; exact sphere
intersections place all S13 misses beyond its clear cap. No unexplained intersection
miss or unaimed ray remains. The prior-cap baseline has 17,285 ordinary clips and
192 bounded S13 misses, with the same six unbracketed finite format-corner seeds.

The independent positive-object supplement uses image-plane distance 250/focus mm:
131,823 sampled rays, all axial/converged chiefs clear, 17,476 ordinary clips and
49 bounded misses (six first-asphere, 43 S13), with the same six unsolved seeds.
These are reconstructed finite-object diagnostics, not published focus coverage.
At the three printed infinity image heights 18.92/21.64/21.64 mm, 873 rays have
all axial pupils/chiefs clear, 114 ordinary marginal clips and zero intersection
or seed failures. A source field/height is not the uncorrected full-format corner.

A separate bounding-sphere vector angular diagnostic covers 65 zoom × 3 focus
controls, source-height edge angles and half angles, plus 80/89/90° extreme probes.
Within the source-height angular range it samples 56,745 rays: all axial pupils and
chiefs clear, 6562 ordinary clips and 13 independently classified S13 cap misses.
There are no source-range seed failures. Of 585 extreme-angle bundles, 552 have no
converged vector chief. Those extremes are disclosed limits, not claimed coverage.
This angular test at finite focus controls is distinct from the actual finite-object
pupil tests above; source-height interpolation between stations is illustrative.

Derived iris radii remain 4.722207/5.459649/6.154380 mm with paraxial F/# 4.08/4.08/4.12;
real collimated iris F/# is 4.098142/4.123423/4.198763. The physical iris diameter is
unpublished. Source fidelity, sampled transmission, source distortion/electronic
correction intent, production correlation and historical material identity remain
separate conclusions. IS is centered only. The coordinator owns full gates/commit.
