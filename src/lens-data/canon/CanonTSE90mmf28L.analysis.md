# Canon TS-E 90mm f/2.8L Macro — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2018-205474 A\
**Application:** 特願2017-109742 (P2017-109742)\
**Filed:** June 2, 2017\
**Published:** December 27, 2018\
**Inventor:** Masakazu Yamagishi (山岸 正和)\
**Applicant:** Canon Inc.\
**Title:** 撮像光学系及びそれを用いた撮像装置\
**Classification:** G02B 13/00\
**Worked examples:** 3\
**Example details:** 数値データ1 / Numerical Data 1

The selected original is the local `patents/JP_2018205474_A.pdf`. The October 30, 2026 review directly checks its first page, all selected prescription rows, glass coordinates, native Figure 1 and corresponding infinity/near aberration Figure 2(A)/(B). It retains the actual June 23 review date in the audit. The present entry is a scoped reopening for resolved rim evidence, a reproducible finite axial clip, public material qualifications and more complete runtime evidence.

The 11-element/9-group prescription has a positive first group L1 and a weak negative rear group L2. The stop belongs to L1. Its negative L1a, positive L1b and positive L1c subgroups correspond to surfaces 1–6, 7–11 and 13–17. Two cemented doublets join surfaces 9–11 and 13–15. All surfaces are spherical; there is no source hybrid layer, drop-in filter, rear plate or aspheric coefficient in this selected example. Generic camera hardware in Figure 7 is not an additional prescription medium.

The 90 mm production association is a provisional correlation based on the 11/9 construction, macro architecture and enlarged source image height. The original does not name a TS-E product or establish production identity, a mechanical tilt hinge, supplier, glass chemistry or production aspheric surface. The existing ±10° tilt, ±12 mm shift and 0.39 m display endpoint remain modeled product controls, separately qualified below.

## Original Prescription and Scale

Paragraphs 0045–0048 on PDF/printed pages 8–9 define the surface table, all rows 1–21, the nd/νd columns, infinity/near focus gaps and summary. Table 1 on page 11 supplies the more precise f = 55.986 mm; the page 9 summary rounds it to 55.99 mm. The existing uniform scale 90 / 55.986 = 1.6075447433 therefore has direct source support. Every current scaled R/d and both focus-gap endpoints are retained. Design focal metadata is 90.00 mm from that printed precise value, separated from the computed EFL 89.963158 mm. The example label is normalized to Numerical Data 1.

| Quantity               |                      Printed source |                         Existing scaled model |
| ---------------------- | ----------------------------------: | --------------------------------------------: |
| Focal length           | 55.99 mm summary; 55.986 mm Table 1 |        90.00 mm stated; 89.963158 mm computed |
| F-number               |                                2.91 | Derived iris; exact infinity working 2.932363 |
| Image height           |                            21.60 mm |                                  34.722966 mm |
| First surface to image |                    83.72 mm summary |                    134.615790 mm literal rows |
| d17, infinity / near   |                      1.59 / 6.52 mm |                           2.556 / 10.48119 mm |
| d21, infinity / near   |                    44.70 / 64.14 mm |                       71.85725 / 103.10792 mm |

The literal rounded source rows total 83.74 mm at infinity, versus summary 83.72 mm. Their computed EFL is about 55.963 mm, versus Table 1's 55.986 mm. The difference is unresolved; rounding is a possible explanation, not established fact. A structured unresolved source note records this without fitting radii or gaps. Table 1 also prints condition (3) as |f2/f| while claim 4 and paragraph 0030 use |f/f2|; its value 0.280 agrees with the latter. This is a source heading mismatch, not evidence for changing the optical prescription.

## Native Figure, Element Heights and Concave Ends

Figure 1 and the matching Figure 2(A)/(B) are on PDF/printed page 11. The original raster is 1653 × 2338 pixels, one bit at 200 ppi. Three- and six-times nearest-neighbor crops magnify that same native ink; they add no independent detail. The first-surface-to-image span is about 488 native pixels, roughly 3.6 px/mm at the retained model scale. Separate vertical outline comparisons are approximate; practical semi-height uncertainty is about ±1 mm. Brackets, focus arrows, stop leaders and axis ink are excluded.

Every element and both cemented interfaces were inspected. Numerical Data 1 has no effective-diameter column. The effective diameters in Numerical Data 2 and 3 belong to distinct optical configurations and are not adopted as this example's measurements. Existing inferred clear caps remain qualified drawing/trace reconstruction values.

The front meniscus has a resolved connected outer rear stroke before its strongly curved optical cap starts inward. S2 now uses `rimExtensionSd: 17.6`, matching the retained S1 outer height while preserving S2's 16.8 mm clear cap. This produces the native flat outer end without extending refraction across an unsupported cap.

S17 changes only from 14.5 to 14.55 mm. The current source-near Gaussian axial bundle needs 14.51631953 mm at that surface; the old cap clips its outer 24 of 193 samples. The small 0.05 mm correction is within native outline uncertainty and below the retained S16 cap of 14.8 mm. It clears that inadvertent near-axis clip without changing the iris or source focus gaps. All remaining clear caps are retained.

The retained clear semi-diameters, in source row order excluding STO, are: 17.6, 16.8, 17.3, 15.75, 15.75, 17.1, 17.2, 16.8, 16.8, 14.4, 14.0, 13.7, 14.0, 14.8, 14.8, 14.55, 13.9, 13.7, 13.8 and 13.8 mm. S2 is the only adopted outer extension. There are no cuts or `rimCutDepthSource` exemptions.

A trial raising S4/S5 to 17.3/17.1 mm to force equal-height outlines is rejected: the 4→5 combined sag becomes 2.33 mm versus the unchanged 1.982 mm allowed intrusion in a 2.202 mm air gap. Weak, adjoining native ink does not independently resolve shoulders at those constrained caps. No opaque bonded-interface lands, equal-height blocks or unsupported wings are added. Remaining slight diagonals at unequal cemented caps express those retained geometric limits. No inferred cut is introduced, so no cut-beam exemption is involved.

## Glass and Spectral Evidence

All eleven printed nd/νd pairs on page 8 are retained. Paragraph 0019 on page 5 explicitly identifies the d plot line at 587.6 nm and the g line at 435.8 nm; the prescription itself labels nd and νd. There are no printed individual C/F/g indices, selected partial-dispersion ratios, APD claims or named catalog melts for Numerical Data 1. The current data already has no authored per-lens `nC`, `nF`, `ng` or `dPgF`; none is manufactured from catalogs. No APD badge is asserted.

| Element / source medium row |      nd |   νd | Compatible spectral proxy | Qualification                          |
| --------------------------- | ------: | ---: | ------------------------- | -------------------------------------- |
| L1 / 1                      | 1.51742 | 52.4 | S-NSL36                   | Proxy only                             |
| L2 / 3                      | 1.83481 | 42.7 | S-LAH55V                  | Proxy only                             |
| L3 / 5                      | 1.65412 | 39.7 | N-KZFS5                   | No published partial or chemistry      |
| L4 / 7                      | 1.91082 | 35.3 | TAFD35                    | Proxy only                             |
| L5 / 9                      | 1.49700 | 81.5 | S-FPL51                   | Low dispersion; chemistry unidentified |
| L6 / 10                     | 1.67300 | 38.1 | S-NBH52                   | Proxy only                             |
| L7 / 13                     | 1.74951 | 35.3 | S-LAM7                    | Proxy only                             |
| L8 / 14                     | 1.77250 | 49.6 | S-LAH66                   | Proxy only                             |
| L9 / 16                     | 1.59522 | 67.7 | S-FPM2                    | Proxy only                             |
| L10 / 18                    | 1.57135 | 53.0 | S-BAL3                    | Resolves in the current local catalog  |
| L11 / 20                    | 1.83400 | 37.2 | S-LAH60V                  | Proxy only                             |

All eleven existing compatible curves resolve. The historical June 23 statement that S-BAL3 had no local curve remains dated history; the current catalog resolves it. Public labels, per-element claims and this table now consistently describe compatible curves as qualified spectral proxies. The former fluorophosphate, short-flint and vendor identity implications are withdrawn. Neither an nd/νd match nor a compatible curve proves supplier, melt, composition, cement or production spectral performance. The source supports chromatic design discussion through its opposing-power/media coordinates and d/g aberration plots, rather than an APO or anomalous-material claim.

## Focus and Current Runtime Evidence — October 30, 2026

The two source gap stations and all existing interpolation/display controls are preserved. The physical iris is derived at infinity, radius 12.7349561568 mm. No source physical iris diameter or schedule is supplied. Figure 2 labels Fno 2.91 at infinity and near; this is kept separate from finite working f-number. The earlier 12.740 mm stop wording was approximate and is superseded by the measured runtime value here.

The standard surface, image-circle, aperture and field-coverage audits pass; the latter two each inspect the one infinity station and report within 3% and at least 99% respectively. A separate 65-position focus grid covers all nine aperture presets: 585 of 585 exact working calls trace, versus 583 traced and two S17 vignettes before the minimal cap correction. Wide-open working values are 2.932362979 at infinity and 4.207966883 at the 0.39 m display plane. These are different aperture conventions from the source plot label, not grounds to retune the iris.

Collimated control-grid rays through the focus-adjusted geometry cover axis, half/full current format field and the diagram field at all 65 states, each with 193 pupil samples. Every axial bundle clears. At infinity/full field 139 of 193 pass; at the near control/full field 161 pass versus 159 before. These are collimated launches through adjusted geometry, not actual finite-object illumination. A separate 21.1° bounding-sphere vector chief at infinity clears all 21 surfaces and lands at |Y| = 34.699634 mm, close to the scaled source image height 34.722966 mm.

Explicit Gaussian finite-object tests derive the real object plane from the full current matrix for each of 64 positive focus controls, then solve object height to actual image-edge targets Y = 0, 17.361483 and 34.722966 mm. All 192 chief roots converge and physically clear. Of 37,056 pupil rays, 30,087 pass, 6,253 clip and 716 fail to bracket a refracted continuation; none is unaimed. All axial bundles now pass 193/193, versus 169/193 at the source-near endpoint before. Near source-axis/half/full fields pass 193/166/128 samples, with 0/0/1 trace failures. Unsolved individual marginal continuations are not proof that no physical ray exists, and the full enlarged source image circle is not certified unvignetted.

At the source-near gap endpoint, the computed Gaussian total object-to-image distance is 0.401099738 m and magnification −0.500613520, compared with the product display label 0.39 m. The display-plane first-order image residual is +2.971004838 mm; the infinity residual is −0.034956482 mm. The largest sampled display-plane interpolation residual is −8.531333501 mm at focus 0.59375: the Gaussian total is 0.510800277 m versus display 0.656842105 m. The largest relative distance-label discrepancy is 54.420081% near focus 0.015625. These quantify current control interpolation; they are not source focus stations or a verified production cam. No source R/d, station or control is altered to clear them.

## Perspective Movement and SVG Limits

The existing public rigid-pose path was sampled at focus 0/0.5/1, shifts −12/−6/0/6/12 mm and tilts −10/−5/0/5/10 degrees: 75 poses, five sensor targets per pose and 193 aimed pupil samples per usable field. 373 of 375 field chiefs are usable; two remain chief-unreachable after a denser 512-bracket/80-iteration retry. The candidate physical-ray outcomes are 55,543 clear, 14,788 clipped and 1,658 failed continuations; no sample is unaimed. Sensor-hit classification separately gives 23,979 usable and 33,222 missed-sensor samples. Blur landing outside the sensor and physical clipping are different results.

Those movement launches are collimated scene directions through a focus-adjusted rigid pose. They do not certify actual finite moved-object illumination, production hinge placement, mechanical obstructions or full shifted-field quality. The camera-fixed rear-vertex fallback remains an unmeasured hinge assumption. The two unresolved moved chiefs are disclosed rather than treated as proof of unavailable physical fields.

Actual generated centered and moved SVGs were compared with native Figure 1. All 65 centered states and 75 posed states produce 1,540 element paths, each finite, closed and connected, with zero renderer trimming. The front shoulder matches the native flat meniscus end; constrained unequal caps elsewhere remain explicit. Source fidelity, sampled runtime clearance and production correlation are separate conclusions.

## Sources and Review History

- JP 2018-205474 A, local original `patents/JP_2018205474_A.pdf`, first page for identity; paragraphs 0010–0019, pages 4–5 for figure, field and wavelength definitions; paragraphs 0045–0048 and Numerical Data 1, pages 8–9 for every selected source row and focus station; Table 1 and Figures 1–2, page 11.
- [Audit log](CanonTSE90mmf28L.audit.md), actual June 23, 2026 geometry/glass history and October 30 scoped reopening. Earlier production/catalog comparisons are qualified above; no new production optical identity or historical material claim is made.
