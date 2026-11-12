## Patent Reference and Design Identification

**Patent:** US 3,975,091 A
**Title:** Wide Angle Photographic Lens
**Filed:** April 21, 1975
**Published:** August 17, 1976
**Inventor:** Yasuo Takahashi
**Assignee:** Asahi Kogaku Kogyo Co., Ltd.
**Example details:** Table 2 and Figures 3–4.

Example 2 is a probable match to the original SMC Pentax 30mm f/2.8 introduced in 1975. The production prescription has not been independently established. Evidence converges as follows:

1. The [original patent](https://patentimages.storage.googleapis.com/d0/7b/71/adf92aec7e20f3/US3975091.pdf) supplies seven separate spherical elements, f/2.8, and a 36° half-field in Figure 4.
2. The [Asahi Pentax maker brochure](https://www.cameramanuals.org/pentax_pdf/Asahi_Pentax_Lenses.pdf), PDF page 4, names the 30mm f/2.8 beside a seven-singlet optical section. Its rear meniscus supports Example 2 rather than Example 1's biconvex rear element.
3. The same brochure, PDF page 11, lists seven elements in seven groups and a 72° full field. The [specialist historical survey](https://zeissikonveb.de/start/objektive/sonstige_objektive/retrofokus.html) independently associates the German patent family with this product; that is secondary identification evidence, not a factory build sheet.

The [PentaxForums lens reference](https://www.pentaxforums.com/lensreviews/SMC-Pentax-K-30mm-F2.8-Lens.html) also records the 1975 introduction, K mount, 35 mm format, f/2.8–22 aperture range and 0.30 m minimum focus.

The prescription at F = 100 is uniformly multiplied by 0.3 to give a stated design focal length of 30 mm. Its calculated EFL is 29.99683 mm. The printed back-focus ratio 1.24F gives the fixed 37.2 mm image gap; that length is derived, not printed in millimetres. The computed BFD is 37.25501 mm, leaving the image plane approximately 0.055 mm short of paraxial focus. Source rounding is a possible explanation. Claim 2 gives R12 = −58.97, conflicting with Table 2's −53.97; the table value is retained.

## Optical Architecture

Seven air-spaced singlets form a retrofocus wide-angle lens. The positive first meniscus precedes two negative menisci; a positive middle element and a negative element are followed by two positive rear menisci. The extended back focus is part of the patent's stated architecture, not an added mechanical gap.

The prescription gives no numerical clear apertures or unambiguous iris coordinate. The model uses rim estimates from Figure 3 and an inferred iris at the midpoint of the L3–L4 air gap, 3.1335 mm from either end. Neither drawing fixes that iris position. Schematic rim uncertainty is approximately ±0.35 mm, with additional unquantified drawing distortion; it is not a factory tolerance. Rear semi-diameters of 8.6 mm at R11/R12 and 10.4 mm at R13/R14 clear the 36° corner chief ray. The schematic drawing's axial and arc-based scales disagree, limiting the precision of individual rim estimates.

## Element-by-Element Commentary

- **L1:** Positive meniscus, convex toward the object; first component of the retrofocus front assembly.
- **L2:** Negative meniscus convex toward the object.
- **L3:** A second negative front meniscus, followed by the central air separation.
- **L4:** Positive biconvex middle element.
- **L5:** Negative biconcave element.
- **L6:** Positive meniscus convex toward the image.
- **L7:** Positive rear meniscus convex toward the image; its topology distinguishes this example from Example 1.

These forms and power signs follow the prescription; individual aberration contributions are not established by element shape alone.

The inspector's individual focal lengths are calculated thick-singlet EFLs in air from the scaled radii, centre thickness and printed nd: L1–L7 are +93.55, −37.84, −67.66, +20.46, −17.88, +31.49 and +52.30 mm. These are derived element values, not factory specifications.

## Glass and Material Choices

The source calls its index reference the **sodium d-line**. Catalog comparisons instead support the helium d-line used in this model: S-FSL5 gives 1.48748993 at helium d versus 1.48742765 at sodium D, and K-BK7 gives 1.51632992 versus 1.51625776. The seven printed index/Abbe pairs remain 1.54869/45.6, 1.51633/64.1, 1.48749/70.1, 1.80610/40.8, 1.80518/25.4, 1.65160/58.6, and 1.65160/58.6.

Compatible catalog curves are PBL7 (Ohara) for L1, K-BK7 (Sumita) for L2, S-FSL5 (Ohara) for L3, NBFD13 (Hoya) for L4, SF6 (Schott) for L5, and LAL7 (Ohara) for L6–L7. Each differs from the printed pair by at most 0.0001 in nd and 0.15 in νd. These curves are spectral equivalents, not evidence of the historical supplier or melt. Partial dispersion and coating data are absent from the patent, so calculated chromatic behaviour is not measured factory performance. No maker-published special-dispersion positions support anomalous-dispersion tags.

## Focus Mechanism and Operating States

Only the infinity prescription is modeled; the patent prints no finite-focus spacings. The production lens focuses manually to 0.30 m, as recorded by PentaxForums, but its close-focus element movement is not modeled. The final image gap remains 37.2 mm. There are no modeled floating groups, stabilization or zoom states.

## Model Scope and Limitations

All surfaces are spherical. Table 2 supplies all 14 radii, 13 thicknesses and gaps, and seven index/Abbe pairs; it supplies no aspheric coefficients or variable gaps. Clear apertures, iris position and factory glass identity remain uncertain.

Figure 3 distinguishes the R4 curved optical face from L2's 15 mm mechanical shoulder at R3. The optical face ends at about 10.87 mm, rounded down to the modeled 10.8 mm R4 semi-diameter. The outline is schematic and does not establish a factory clear aperture. Wide-open geometric pupil transmission is approximately 39.6% at 36°; this is a ray-clearance fraction, without cosine-fourth falloff or coating losses. One lower full-field marginal-ray solve remains unavailable in the meridional clearance diagnostic, although the axial beam and corner chief ray pass.

Figure 4 is not reproduced exactly by the model. At the full entrance pupil, d-line longitudinal focus is +0.156 mm relative to paraxial d focus, versus approximately +0.21 to +0.23 mm read from Figure 4b after scaling by 0.3; plot-reading uncertainty is about ±0.02 mm. The g-line paraxial/marginal values are −0.060/+0.359 mm, near the schematic −0.04/+0.38 mm readings. At 36°, modeled distortion is −1.54%, compared with approximately −1.5% in Figure 4c. The modeled parabasal sagittal/meridional focus shifts relative to the axial focus are +0.654/+1.617 mm, whereas Figure 4d suggests approximately +0.2/−0.5 mm. The inferred iris position and unprinted partial dispersion limit these comparisons; the source does not establish a unique cause for the focus-curve differences, and no radius, gap or material value has been adjusted to fit them.

## Sources

- [US 3,975,091 A](https://patentimages.storage.googleapis.com/d0/7b/71/adf92aec7e20f3/US3975091.pdf), Table 2, claim 2 and Figures 3–4.
- [Asahi Pentax Lenses brochure](https://www.cameramanuals.org/pentax_pdf/Asahi_Pentax_Lenses.pdf), PDF pages 4 and 11: optical section and production specifications.
- [PentaxForums: SMC Pentax 30mm F2.8](https://www.pentaxforums.com/lensreviews/SMC-Pentax-K-30mm-F2.8-Lens.html): production specifications and history.
