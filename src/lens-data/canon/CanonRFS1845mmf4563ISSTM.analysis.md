# Canon RF-S 18–45mm f/4.5–6.3 IS STM — Optical Analysis

## Patent Reference and Identification

**Patent:** JP 2021-86024 A\
**Application Number:** JP 2019-215441\
**Filed:** 2019-11-28\
**Published:** 2021-06-03\
**Inventor:** Yuichi Gyoda\
**Applicant:** Canon Inc.\
**Title:** Zoom lens and image capturing device having the same

This model transcribes Numerical Example 2, paragraph 0086, from the exact local original `patents/JP2021086024A.pdf`, PDF pp13–14. Figure 3 on p24 supplies wide/tele optical sections; Figure 4 on the same page supplies corresponding aberration plots. Front-page date and party fields are directly checked. The production RF-S18–45 association remains an inference, not a manufacturer-confirmed production prescription. The canonical mount is `canon-rf`, with APS-C image-format metadata.

Source focal stations 18.53/30.00/43.65 mm and F4.56/5.48/6.50 remain distinct from marketed 18–45 mm f4.5–6.3. Seven elements are all air-spaced; there are four functional motion groups. No uniform scaling is applied. The catalog design endpoints now use the directly printed 18.53/43.65 rather than computed EFL, and menu marketing presets 4.5/6.3 become source 4.56/6.5. Source station targets and the actual iris rule are unchanged.

## Architecture and Source Controls

B1 contains negative L1/L2 plus positive L3 and is negative overall. B2 contains positive L4/L5 with source stop9 between them; L4 is the lateral IS subgroup B2A. Negative L6 is the B3 focus group. Positive L7 is B4. Source group focal lengths are −31.01/+16.38/−23.06/+59.61 mm.

Paragraphs 0058–0060 (PDF p9) and Figure 3 identify B1 moving net imageward from wide to tele, with a small midpoint reversal in the table, and B2/B3/B4 objectward; B2/B4 share a trajectory. B3 focuses imageward and L4 supplies lateral IS. Neither finite-focus gaps nor numerical IS displacement is published, so both remain unreconstructed. All 21 sampled focus inputs duplicate infinity geometry at each zoom; production 0.20 m MFD is metadata only.

| Gap    |  Wide | Middle |  Tele |
| ------ | ----: | -----: | ----: |
| d6     | 28.48 |  10.86 |  1.48 |
| d11    |  1.53 |   1.64 |  2.28 |
| d13    |  8.52 |   8.41 |  7.77 |
| d15/BF | 28.48 |  38.21 | 47.77 |

These source gaps, their native scale and existing interpolation are preserved. Of 65 uniform zoom positions 0:1/64:1, three are published stations and 62 are illustrative interval geometries. Those intervals do not all remain paraxially focused on the authored image plane.

Paragraph 0081 defines BF as an air-equivalent rear distance and total length as optical track plus BF. A general optional plate in paragraph 0021 does not prescribe a plate for this example; no cover/filter medium or extra source plane is listed in its table, so no plate is invented or t/n folded into a gap.

## Every Medium and Spectral Qualification

Paragraph 0080 (PDF p11) explicitly defines d 587.56 nm, F 486.1 nm, C 656.3 nm, g 435.835 nm and vd=(Nd−1)/(NF−NC). All seven media now record d-line provenance. The selected example publishes nd/vd only, with no numerical C/F/g indices, partial ratio/deviation, normal line or APD identification. No override fields are added or removed.

| Element | Source nd/vd | Shape                           | Unchanged resolved spectral proxy |
| ------- | ------------ | ------------------------------- | --------------------------------- |
| L1      | 1.63854/55.4 | Negative meniscus               | S-BSM18 (OHARA)                   |
| L2      | 1.53110/55.9 | Biconcave, two aspheres         | Unresolved                        |
| L3      | 1.84666/23.8 | Positive meniscus               | J-SF03 (HIKARI)                   |
| L4      | 1.69680/55.5 | Biconvex IS element             | J-LAK14 (HIKARI)                  |
| L5      | 1.77250/49.6 | Positive meniscus               | J-LASF016 (HIKARI)                |
| L6      | 1.84666/23.8 | Biconcave focus element         | J-SF03 (HIKARI)                   |
| L7      | 1.53110/55.9 | Positive meniscus, two aspheres | Unresolved                        |

Five pre-existing compatible curve choices remain identical; actual labels now name them as qualified proxies rather than asserting lanthanum or other chemistry from a coordinate class. They do not identify historical vendor, melt or composition. L2/L7 remain unidentified. Paragraph 0050 gives a general preference for resin in a first-group asphere, not a specific material identification for either occurrence of 1.53110/55.9. No resin, hybrid layer, UD/APD or production chemistry is inferred as source fact. Table 1 (PDF p22) lists B3 Abbe 23.78 while the prescription rounds to 23.8; both source precisions remain qualified rather than replacing the prescription value.

## Native Shapes, Outer Rim and Rejected Trials

The numerical text is vector content, inspected on 180 dpi renders. Figure 3/4 are native 1181×1859 bilevel 400 ppi images, inspected directly and rotated without resampling. A 600 dpi display would be 1.5× upsampling. Figure 3's wide/tele first-to-last optical spans give approximately 11.83–11.86 native px/mm; the diagram's vertical blank scale is about 5% larger. Optical endpoints carry ±2–3 pixels, approximately ±.17–.25 mm before schematic scale uncertainty. Leaders, optical axes, SP/IP pointers, B2A/B2B brackets and movement arrows are excluded from rim measurements.

All seven elements, every concave end and all four aspheres were compared with the actual wide/tele SVGs. There are no cemented interfaces or bonded layers in this prescription. Every clear semi-diameter remains the printed effective diameter divided by two. The sole added outer shoulder is S2 `rimExtensionSd=12.395`, preserving clear `sd=10.12`. The adopted outer radius follows the existing opposite cap, consistent with the resolved native step; it is not claimed as a five-decimal figure measurement.

A full curved-cap trial S2=12.395 fails the unchanged 64.2° rim-slope guard and extends beyond its 12.045 mm spherical radius. It is rejected: the drawing's outer blank is represented as an outer shoulder, not as continuation of the optical sphere. Other smaller end-height differences were not sufficiently resolved to justify equal-height blocks or new lands. All R/d, source stops, aspheres and zoom/focus controls remain literal. No concave trim, opaque land, detached wing or inferred rim cut is authored.

The standard source asphere equation, embedded at approximately 199 ppi on PDF p11, includes1−(1+K)(H/R)². All four surfaces use K0. Native paragraph 0086 resolves wrapped A10 exponents: 3A−1.10963e−11,4A−7.27576e−12,14A+2.35602e−10. All source A4–A10 values remain unchanged; absent higher terms are not invented. The two material identities at those aspheres remain unresolved.

## Runtime, Field Scope and Retained Source Residuals

A 65-position collimated infinity sweep, using the actual iris at every zoom, passes 3,185/3,185 axial samples and 195/195 chiefs with 0 failed pupil seeds. Wide/middle/tele 49-point bundles at 0/.6/1 of the modeled maximum angular field are 49/41/4, 49/41/29 and 49/41/36. These are angular fractions, not inverse-solved sensor corners; they demonstrate vignetting rather than full-field transmission. Focus inputs are identical infinity duplicates, not actual finite-conjugate checks. Centered IS is the only modeled state.

The maximum aperture deficit is effectively 0 in the sampled grid, with 0 states over 3%. The largest illustrative interval paraxial residual is −1.207967730 mm at zoom .28125; no cam, cap or image plane is fitted to remove it. Minimum modeled-angle image-height coverage is 91.317% of generic APS-C radius 14.175 mm. The inverse image-height audit reaches 12.944193 mm (91.317% of the generic corner) at wide, where S1 is the first limit; middle/tele reach 14.175 mm (100%). The attempted wide generic corner is 41.2° and also crosses S2–S6 clear caps. These directly printed caps are retained; no result proves full generic wide-corner coverage.

| Zoom station | Source half-angle | Source image-height reference | Actual chief image height | Bundle/49 | Modeled distortion |
| ------------ | ----------------: | ----------------------------: | ------------------------: | --------: | -----------------: |
| Wide         |            33.78° |                       12.40mm |               11.288505mm |        27 |           −8.9269% |
| Middle       |            24.48° |                       13.66mm |               13.359001mm |        33 |           −2.1864% |
| Tele         |            17.38° |                       13.66mm |               13.682483mm |        38 |            +.2007% |

These direct source fields differ from generic APS-C image-format targets and the paraxial source references. Native Figure 4 wide distortion is approximately −10.6±.2% at its rounded 33.8° label, compared with the literal model's −8.9269% at 33.78°. The equation, signs, exponents and source controls were checked; no unique replacement is proved. This plot/model discrepancy is recorded as unresolved source errata, not corrected by fitting the optics.

Computed EFL 18.529406/29.996627/43.626750 mm compares with source 18.53/30.00/43.65; BFL 28.478223/38.210406/47.763980 mm compares with 28.48/38.21/47.77. Literal total lengths 89.12/81.23/81.41 mm differ from summary 89.11/81.23/81.40. Rounded printing may contribute, but the cause is not isolated; these residuals remain explicit in source.errata.

Source stop effective diameter 9.16 mm is recorded separately from the canonical F-number-derived physical iris diameters 8.961209/9.041075/9.107707 mm. Its relationship to an actual mechanical iris is not established. Source F4.56/5.48/6.50, stop location and per-state iris rule are preserved; no physical stop size is fitted to a diagram.

## Validation and Limits — 2026-10-30

Actual seven SVG bodies are finite, closed and connected, with 0 hidden trimming across 65 zooms and nine display combinations; other focus positions are duplicates. Narrow source/surface, image-circle, aperture, field and full inferred-cut checks are run without new tests or changed tolerances. The source's restricted field references, interval defocus, plot/summary residuals, unknown media, proxy spectra and absent finite-focus/lateral-IS reconstruction limit physical or production-fidelity claims. Source fidelity, sampled runtime clearance and product correlation remain separate conclusions.

## Sources

- Exact local original JP2021086024A: front p1; Example 2 paragraph 0086 pp13–14; definitions 0080–0084 p11; architecture/focus/IS 0058–0060 p9; Figure 3/4 p24; Table 1 p22. No family publication or external prescription substitutes for this source.
- Existing production association was established when the file was added on 2026-08-22. This is the original shape/glass review dated 2026-10-30; no earlier detailed native-rim audit date is invented.
