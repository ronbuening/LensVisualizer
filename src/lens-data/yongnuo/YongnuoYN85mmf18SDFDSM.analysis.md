## Patent Reference and Design Identification

**Patent:** [CN 110146970 B](https://patents.google.com/patent/CN110146970B/en)
**Filed:** 2019-06-27
**Granted:** 2023-08-18
**Inventors:** Yuanhua Ye, Yongsheng Zhuang, Jiannan Zhuang, Qiyun Zhu
**Assignee:** Shenzhen Yongnuo Electric Appliance Co., Ltd. (深圳市永诺电器有限公司)
**Title:** An imaging lens and an imaging device
**Example details:** Prescription on PDF p. 9, focus table on p. 10; optical section Fig. 1 and infinity aberrations Figs. 2A–2B on pp. 14–16.

This is a literal transcription of the patent's first numerical example, associated provisionally with the first-generation YN85mm F1.8S DF DSM. The production association is plausible, not proven. It must not be treated as the released factory prescription, the later upgraded 85F1.8S, or a DSLR 85 mm version.

The supporting points are a nine-element/eight-group construction, an approximately 85 mm focal length, f/1.8 pupil, and single-element internal focus. Those points support comparison, not identity. The source design focal length is 84.67 mm at infinity and 80.03 mm at close focus. Figs. 2A–2B explicitly print pupil radius 23.5425 mm and maximum half-field 13.669°.

## Optical Architecture

The patent divides the lens into positive GR1, negative GR2 and positive GR3, with the stop after GR2. GR1 contains four elements including one cemented doublet. GR2 is the single negative focusing element L21. GR3 contains four separated elements. Nine physical lenses therefore form eight air-separated groups; the three labeled groups describe mechanical/power subdivisions rather than the catalog's air-separated count.

All refracting lens surfaces are spherical. The model retains the source's 2.2 mm plane-parallel rear cover glass as a traced rear plate, outside the nine-element lens count. The literal final air gap remains 1 mm. No source radii, spacings or glass indices have been optimized or repaired.

## Element-by-Element Analysis

Element roles follow the source power signs and prescription. No standalone focal-length estimate is substituted for the actual cemented-group power.

### L11: Positive meniscus

nd = 1.8213, νd = 42.73. Glass: unassigned source nd/νd pair.

The large first element supplies positive collecting power. Its broad front aperture admits the fast axial bundle. Its 58.558 mm front radius is substantially steeper than its 298.95 mm rear radius.

### L12: Positive meniscus

nd = 1.53775, νd = 74.7. Glass: unassigned low-dispersion crown-class pair.

The second positive meniscus shares the front-group convergence with L11. Its higher Abbe number provides chromatic leverage without establishing a particular catalog glass or anomalous partial dispersion.

### L13 and L14: Cemented negative-positive pair

L13: nd = 1.8061, νd = 33.27. Glass: unassigned high-index, higher-dispersion pair.

L14: nd = 1.497, νd = 81.61. Glass: unassigned low-dispersion pair.

The shared 27.251 mm interface couples negative L13 to positive L14. The large dispersion difference is consistent with an achromatizing role. This is an optical interpretation of the numerical pair, not a claim of measured apochromatism.

### L21: Biconcave focusing element

nd = 1.6127, νd = 58.7169. Glass: unassigned source pair.

The 1.4 mm-thick negative element is the only translating lens. Its light moving mass is the mechanism emphasized by the patent. The stop lies behind it at source surface 10.

### L31: Positive meniscus

nd = 1.7865, νd = 50. Glass: unassigned source pair.

The first rear-group element restores convergence after the negative focusing group. Its 1864.782 mm rear radius is nearly planar relative to its 36.369 mm front radius.

### L32: Negative meniscus

nd = 1.5955, νd = 38.77. Glass: unassigned source pair.

The thin negative meniscus follows L31 across a literal 0.15 mm axial gap. Its strong surfaces participate in rear-group aberration balancing. No extra clearance has been inserted into this tight gap.

### L33: Positive meniscus

nd = 1.7555, νd = 25.07. Glass: unassigned high-dispersion pair.

The positive meniscus contributes converging power behind L32. Its relatively high dispersion provides another chromatic balancing degree of freedom; the source gives no spectral line indices beyond nd and νd.

### L34: Negative meniscus

nd = 1.72825, νd = 28.41. Glass: unassigned source pair.

The final negative meniscus precedes the rear plate by 14.718 mm. Its curved surfaces participate in field correction. The isolated element is not a flat-field guarantee; the patent's field curves show residual field curvature and astigmatism.

## Glass Identification and Model Limits

No vendor glass names are asserted. The model uses every source nd/νd pair literally and permits the engine's synthetic Abbe-based dispersion. Monochromatic d-line calculations are materially better constrained than broadband calculations. Secondary spectrum, anomalous partial dispersion and production color correction cannot be recovered from these two numbers alone.

The rear plate uses nd = 1.5168 and νd = 64.2 without asserting a catalog identity. It remains in all ray calculations, with physical thickness and physical air gaps intact.

## Focus Mechanism

L21 moves 14.5 mm imageward. The gap after surface 7 increases from 2.95 to 17.45 mm while the gap after surface 9 decreases from 17.28 to 2.78 mm. Their sum remains 20.23 mm. GR1, the stop, GR3 and the image plane remain fixed.

The close-focus source object distance is 697 mm before the first vertex. The literal first-vertex-to-image track is 103.397 mm, so the full distance is 800.397 mm, consistent with the rounded 0.8 m label. The endpoint is explicitly declared as a finite conjugate. Intermediate slider positions interpolate mechanical travel and are not independently source-certified object distances.

## Aperture Reconstruction

The patent publishes no clear-aperture table. The authored semi-diameters are therefore a qualified reconstruction: a smooth envelope guided by Fig. 1, then checked against the engine's required axial beam, field chief rays and geometry validation. They are not measured production barrel apertures or pixel-calibrated figure dimensions.

The front-to-rear lens semi-diameters are 30, 24, 21, 21, 17, 15, 14, 12 and 14 mm, with each physical element's two faces kept equal and the cemented interface shared. These values are not a uniquely recovered aperture solution. Off-axis vignetting and MTF depend on this choice.

The ordinary-prime stop is derived by the repository's standard pupil rule. The design f-number is 84.7466448894 / (2 × 23.5425) = 1.79986503. This preserves the explicitly printed pupil rather than rounding it to the marketed f/1.8. The resulting physical stop diameter is 28.08963655 mm, an inferred value rather than a patent table entry. No gap-sag override, inferred rim cut or hidden surface trimming was needed.

## Verification Summary

The engine's infinity d-line EFL is 84.7466448894 mm, 0.091% above the source's rounded 84.67 mm. The literal image plane is 0.0179802 mm behind the paraxial focus. This discrepancy is retained; diagnostic MTF uses the authored plane, not best focus.

The axial beam is stop-limited at f/1.79986503. The source field reaches approximately 21.00758 mm image height, or 97.03% of the 21.65 mm full-frame corner radius. The full-frame corner requires approximately 14.0601°, beyond the source's explicit 13.669° field. This distinction is retained rather than silently extending the patent's field claim.

At the published finite endpoint, an independent paraxial calculation gives 80.051773 mm EFL and a focus 0.181807 mm behind the literal sensor. This residual is preserved and disclosed. Close-focus image quality must therefore be treated as the literal printed configuration, not a corrected factory focus calibration.

The package includes runtime geometry and render diagnostics, finite-conjugate checks, aperture and field audits, and d-line geometric MTF. These are simulations of the reconstructed patent model, not measured production lens results. Geometric MTF omits diffraction, coatings, tolerances and sensor processing. The packaged validation report gives the actual pass/fail/unavailable status for each check.

## Production Context

The [DXOMARK review](https://www.dxomark.com/yongnuo-yn-85mm-f1-8-s-df-dsm-lens-review/) reports strong central performance and weaker corners for the factory lens. Such measurements explain why the product is a useful practical candidate, but neither its score nor its center sharpness validates this patent embodiment. No production MTF is presented as patent MTF.

## Sources

- [CN 110146970 B](https://patents.google.com/patent/CN110146970B/en), prescription, focus mechanism, element roles and figures.
- [Original patent PDF](https://patentimages.storage.googleapis.com/c5/b6/13/83dc9f193cece3/CN110146970B.pdf), preserved in the evidence archive.
- [Yongnuo product page](https://th.hkyongnuo.com/products/yn85mm-f18s-df-dsm), production identity context.
- [DXOMARK production-lens review](https://www.dxomark.com/yongnuo-yn-85mm-f1-8-s-df-dsm-lens-review/), independent practical context only.
