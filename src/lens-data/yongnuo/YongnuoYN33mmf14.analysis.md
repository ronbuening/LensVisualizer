## Patent Reference and Design Identification

**Patent:** CN 220137479 U
**Filed:** 2023-06-08
**Granted:** 2023-12-05
**Inventors:** Ying Zhuang, Yuanhua Ye, Yongsheng Zhuang, Yongxiao Zhuang
**Assignee:** Shenzhen Yongnuo Electric Appliance Co., Ltd. (深圳市永诺电器有限公司; English rendering of the printed Chinese entity)
**Title:** An internal-focusing imaging lens
**Example details:** Sole example; Table 1 prescription, Table 2 focus positions, Figure 1 section and Figure 2 pupil plot.

This is a probable patent-associated model of the YONGNUO YN 33mm f/1.4 DA DSM WL PRO, not a factory-certified prescription. The same maker, eleven elements in nine groups, two-element internal focus and 0.4 m close-focus distance support the association. The official catalog thumbnail is not adequate to certify every curvature.

The prescription is unscaled. Its literal rounded values produce 32.636775911 mm at infinity, whereas Table 2 prints 32.620 mm and the commercial label says 33 mm. Figure 2 prints entrance-pupil radius 11.1999 mm; the resulting modeled aperture is f/1.457011934 rather than nominal f/1.4. Neither the focal length nor the aperture is tuned to the retail label.

## Optical Architecture

Eleven spherical glass elements form nine air-separated groups. Two cemented pairs lie ahead of the stop. The first seven elements are fixed ahead of the stop; L8 and L9 translate as the internal-focus unit. L10 and L11 remain fixed behind that unit. The explicit camera-side plate is separate from the eleven lens elements.

Printed surface 11 is absent: the sequence jumps from 10 to 12 at a cemented interface. This is a numbering defect, not missing glass. The stop is printed surface 14. Every powered surface is spherical; no aspheric coefficients are invented.

## Element-by-Element Analysis

### L1 — Negative Meniscus

nd = 1.593, νd = 68.53. Glass: unidentified, rounded patent coordinates. Isolated-in-air focal length ≈ -50.87 mm.

This element remains fixed relative to the image plane during the published focus movement. Its material and surface values follow Table 1 without catalog-glass substitution.

### L2 — Positive Meniscus

nd = 1.946, νd = 17.99. Glass: unidentified, rounded patent coordinates. Isolated-in-air focal length ≈ +97.58 mm.

This element remains fixed relative to the image plane during the published focus movement. Its material and surface values follow Table 1 without catalog-glass substitution.

### L3 — Positive Meniscus

nd = 1.772, νd = 49.6. Glass: unidentified, rounded patent coordinates. Isolated-in-air focal length ≈ +56.29 mm.

This element remains fixed relative to the image plane during the published focus movement. Its material and surface values follow Table 1 without catalog-glass substitution.

### L4 — Negative Meniscus

nd = 1.883, νd = 40.79. Glass: unidentified, rounded patent coordinates. Isolated-in-air focal length ≈ -59.10 mm.

This element remains fixed relative to the image plane during the published focus movement. Its material and surface values follow Table 1 without catalog-glass substitution.

### L5 — Biconvex Positive

nd = 1.804, νd = 46.59. Glass: unidentified, rounded patent coordinates. Isolated-in-air focal length ≈ +36.24 mm.

This element remains fixed relative to the image plane during the published focus movement. Its material and surface values follow Table 1 without catalog-glass substitution.

### L6 — Biconvex Positive

nd = 1.593, νd = 68.62. Glass: unidentified, rounded patent coordinates. Isolated-in-air focal length ≈ +28.16 mm.

This element remains fixed relative to the image plane during the published focus movement. Its material and surface values follow Table 1 without catalog-glass substitution.

### L7 — Biconcave Negative

nd = 1.762, νd = 26.62. Glass: unidentified, rounded patent coordinates. Isolated-in-air focal length ≈ -16.12 mm.

This element remains fixed relative to the image plane during the published focus movement. Its material and surface values follow Table 1 without catalog-glass substitution.

### L8 — Negative Meniscus

nd = 1.808, νd = 22.76. Glass: unidentified, rounded patent coordinates. Isolated-in-air focal length ≈ -95.88 mm.

This element belongs to the translating two-element focus unit. Its fixed center thickness and index are preserved while the two surrounding air gaps exchange length.

### L9 — Biconvex Positive

nd = 1.883, νd = 40.79. Glass: unidentified, rounded patent coordinates. Isolated-in-air focal length ≈ +38.11 mm.

This element belongs to the translating two-element focus unit. Its fixed center thickness and index are preserved while the two surrounding air gaps exchange length.

### L10 — Biconvex Positive

nd = 1.883, νd = 40.79. Glass: unidentified, rounded patent coordinates. Isolated-in-air focal length ≈ +42.95 mm.

This element remains fixed relative to the image plane during the published focus movement. Its material and surface values follow Table 1 without catalog-glass substitution.

### L11 — Negative Meniscus

nd = 1.855, νd = 25.15. Glass: unidentified, rounded patent coordinates. Isolated-in-air focal length ≈ -54.53 mm.

This element remains fixed relative to the image plane during the published focus movement. Its material and surface values follow Table 1 without catalog-glass substitution.

The isolated focal lengths above describe each glass body in air, not the power of an embedded cemented component. Detailed aberration correction roles cannot be uniquely established from these first-order values.

## Glass Identification and Selection

All eleven nd/νd pairs remain at the patent's printed precision. No trade-name, melt identity, coating, anomalous partial dispersion or manufacturing tolerance is established. Validation uses the reference d-line, 587.5618 nm. The results do not certify polychromatic production performance or apochromatic correction.

## Focus Mechanism

The stop-to-L8 gap and L9-to-L10 gap exchange length with a constant sum of 13.410 mm. The L8/L9 unit moves 6.598 mm toward the object between infinity and MOD; its internal 1.820 mm air gap is unchanged.

| Position | Object to first surface (mm) | d14 (mm) | d18 (mm) | Published EFL (mm) |
|---|---:|---:|---:|---:|
| Infinity | Infinity | 11.910 | 1.500 | 32.620 |
| X20 | 623.757 | 8.396 | 5.014 | 31.760 |
| MOD | 305.000 | 5.312 | 8.098 | 31.080 |

The image plane stays at z = 95.000 mm from the first vertex in every state. MOD therefore corresponds to 400 mm object-to-image distance. Intermediate slider positions interpolate the physical gaps; only these three stations are source-published. The literal 2 mm rear plate, nd = 1.517 and νd = 64.2, is followed by the printed 1 mm image-side air gap.

## Inferred Geometry and Validation Limits

The patent supplies neither physical stop radius nor surface semi-diameters. Rims are explicit inferences from the inspected section, subsequently bounded by unchanged native geometry checks. Refinement changes modeled clipping and vignetting; it does not establish factory clear apertures. Per-surface changes and initial failing estimates are retained in the audit evidence. No radius, thickness, glass value or focus position was altered to resolve these estimated-rim failures.

The entrance-pupil-based stop rule derives a physical iris radius of 9.604105198 mm. Native infinity aperture tracing is iris-limited and matches f/1.457011934. Native geometry passes with zero hidden render trim at all three published focus states. The assumed full field of 46.8° is an APS-C coverage inference, not a printed patent field angle.

Infinity diffraction MTF at center, half and 95% modeled field converges at the reference wavelength, wide open and at f/4, over 0–40 lp/mm with maximum grid 128. All results use the unchanged source image plane. Geometric MTF at maximum grid 64 converges centrally and at half field for all three focus states; the wide-open 95% field remains unconverged at each state. At f/4, all tested fields converge. Finite-focus diffraction MTF has not been run.

Independent first-order propagation, including the rear plate, locates paraxial image planes 0.061687 mm, 0.096270 mm and 0.141078 mm behind the printed image plane at infinity, X20 and MOD respectively. These residuals are disclosed, not silently removed. They can affect predicted contrast. No best-focus plane replaces the source plane in the authored model or the reported MTF.

Convergence is numerical evidence about this model, not a measured production performance claim. Off-axis throughput remains dependent on inferred rims. Integration/build checks are tracked separately and were not part of these native optical checks.

## Sources

- [CN220137479U primary patent](https://patents.google.com/patent/CN220137479U/zh), Tables 1–2 and Figures 1–3.
- [Primary patent PDF](https://patentimages.storage.googleapis.com/7a/fb/69/8b9076fb18a773/CN220137479U.pdf).
- [Yongnuo official catalog](https://www.szyongnuo.com/upload/file/202403/2026-03.pdf), product identity and 11/9 construction; association evidence, not a complete optical prescription.
- [Photons to Photos Optical Bench hub](https://photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm), secondary association only.
