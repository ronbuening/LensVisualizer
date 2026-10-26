## Patent Reference and Design Identification

**Patent:** JP S55-124116 A
**Published:** 25 September 1980
**Inventors:** Eiichi Takano
**Assignee:** Tamron Co., Ltd.
**Example details:** Three linked zoom rows and normal/soft limits.

Tamron's 51A literature describes a 70–150 mm f/2.8 soft-focus lens with 14 elements in 10 groups. Its construction and relay-lens motion support the patent association; an exact production prescription is not established.

## Optical Architecture

Fourteen elements in ten groups with four cemented interfaces at surfaces 2, 9, 12 and 17. The three variable zoom gaps follow surfaces 5, 13 and 15. The rear soft control moves G12/G13 forward 6.2 mm and G14 forward 9.22 mm; the compensating terminal space holds the sensor fixed while retaining the intentional soft aberration. The manufacturer's brochure drawing shows the same four doublets, stop position and three rear relay elements used for soft-focus control.

## Element-by-Element Analysis

### Z1: Meniscus Negative

nd = 1.80518, νd = 25.43000. Glass: S-TIH6 (OHARA catalog equivalent; production supplier unspecified). Isolated thick-lens f = -155.28228 mm.

Bounded by surfaces 1 and 2; the negative front element of the first cemented doublet.

### Z2: Biconvex Positive

nd = 1.61272, νd = 58.75000. Glass: BSM4 (OHARA catalog equivalent; production supplier unspecified). Isolated thick-lens f = 93.47399 mm.

Bounded by surfaces 2 and 3; the positive rear element of the first cemented doublet.

### Z3: Meniscus Positive

nd = 1.61272, νd = 58.75000. Glass: BSM4 (OHARA catalog equivalent; production supplier unspecified). Isolated thick-lens f = 171.08084 mm.

Bounded by surfaces 4 and 5; a positive singlet ahead of the first variable zoom gap.

### Z4: Plano-concave Negative

nd = 1.69680, νd = 55.52000. Glass: S-LAL14 (OHARA catalog equivalent; production supplier unspecified). Isolated thick-lens f = -101.46383 mm.

Bounded by surfaces 6 and 7; the negative singlet at the front of the central zoom section.

### Z5: Meniscus Positive

nd = 1.80518, νd = 25.43000. Glass: S-TIH6 (OHARA catalog equivalent; production supplier unspecified). Isolated thick-lens f = 99.73005 mm.

Bounded by surfaces 8 and 9; the positive front element of the second cemented doublet.

### Z6: Biconcave Negative

nd = 1.69680, νd = 55.52000. Glass: S-LAL14 (OHARA catalog equivalent; production supplier unspecified). Isolated thick-lens f = -54.34482 mm.

Bounded by surfaces 9 and 10; the negative rear element of the second cemented doublet.

### Z7: Biconcave Negative

nd = 1.69680, νd = 55.52000. Glass: S-LAL14 (OHARA catalog equivalent; production supplier unspecified). Isolated thick-lens f = -57.21649 mm.

Bounded by surfaces 11 and 12; the negative front element of the third cemented doublet.

### Z8: Biconvex Positive

nd = 1.80518, νd = 25.43000. Glass: S-TIH6 (OHARA catalog equivalent; production supplier unspecified). Isolated thick-lens f = 108.64599 mm.

Bounded by surfaces 12 and 13; the positive rear element of the third cemented doublet.

### Z9: Biconvex Positive

nd = 1.71300, νd = 53.89000. Glass: S-LAL8 (OHARA catalog equivalent of the corrected index; production supplier unspecified). Isolated thick-lens f = 98.44468 mm.

Bounded by surfaces 14 and 15; a positive singlet between the second and third variable zoom gaps.

### M10: Biconvex Positive

nd = 1.69680, νd = 55.52000. Glass: S-LAL14 (OHARA catalog equivalent; production supplier unspecified). Isolated thick-lens f = 50.15235 mm.

Bounded by surfaces 16 and 17; the positive front element of the fixed master doublet ahead of the stop.

### M11: Biconcave Negative

nd = 1.80518, νd = 25.43000. Glass: S-TIH6 (OHARA catalog equivalent; production supplier unspecified). Isolated thick-lens f = -108.87007 mm.

Bounded by surfaces 17 and 18; the negative rear element of the fixed master doublet ahead of the stop.

### G12: Meniscus Negative

nd = 1.80518, νd = 25.43000. Glass: S-TIH6 (OHARA catalog equivalent; production supplier unspecified). Isolated thick-lens f = -149.24629 mm.

Bounded by surfaces 20 and 21; the first negative relay singlet, moving forward with the soft-focus control.

### G13: Meniscus Negative

nd = 1.80518, νd = 25.43000. Glass: S-TIH6 (OHARA catalog equivalent; production supplier unspecified). Isolated thick-lens f = -228.07138 mm.

Bounded by surfaces 22 and 23; the second negative relay singlet, moving forward with G12.

### G14: Biconvex Positive

nd = 1.77250, νd = 49.68000. Glass: TAF1 (HOYA catalog equivalent; production supplier unspecified). Isolated thick-lens f = 94.86411 mm.

Bounded by surfaces 24 and 25; the positive rear relay singlet, with additional forward soft-focus travel.

## Glass Identification and Selection

The patent provides nd and νd only; the glasses actually used in production remain unknown. The model keeps the printed values and labels each pair with a catalog equivalent:

- The six 1.80518/25.43 elements (Z1, Z5, Z8, M11, G12, G13) are OHARA S-TIH6.
- Z2 and Z3 (1.61272/58.75) are OHARA BSM4, from its legacy catalog row.
- The four 1.69680/55.52 elements (Z4, Z6, Z7, M10) are OHARA S-LAL14.
- Z9 is OHARA S-LAL8.
- G14 (1.77250/49.68) is HOYA TAF1.

Catalog nd agrees with the printed values within 0.00001. Catalog νd agrees within 0.02, except TAF1, whose catalog νd is 49.62 against the printed 49.68. These are coordinate equivalents only. The production supplier is unspecified, and none of the glasses is an anomalous-partial-dispersion type. Chromatic calculations use these catalogs' dispersion data.

The printed Z9 index 6.71300 is read as 1.71300, corroborated by all 24 nonzero Petzval rows and the three focal lengths. This reading is an inference from the printed data. S-LAL8 is the catalog equivalent of the corrected coordinates and is not independent evidence for the reading. Element powers are calculated in isolation and do not uniquely establish aberration contributions within the assembled lens.

## Focus Mechanism

The model covers infinity zoom and soft-focus control only. Tamron's published 0.98 m minimum distance is catalog metadata; the patent supplies no finite-focus travel. The three printed zoom states are retained exactly. Between them, 101 control stations satisfy paraxial focal-length and image-distance constraints while keeping the sum of the three variable gaps fixed. Intermediate travel is interpolated rather than published mechanical motion. The patent's normal-to-soft spacings are interpolated linearly with the sensor fixed; the terminal gap increases by 9.22 mm relative to its value at each zoom setting. The production ring's 0–3 scale is represented by a normalized 0–1 control, without a claim to factory calibration.

## Model Scope and Limitations

Unprinted d24 = 2.8 mm is inferred from the rounded 42.8 mm stop-to-rear length minus 40.0 mm of listed intervals. Semi-diameters are estimated from the patent's Fig. 1 and checked against real-ray clearance at every zoom and soft setting; the iris is derived. Outer off-axis rays vignette at the front group, the variator and the rear relay singlet. Above about 137 mm the facing variator surfaces 7|8 and 10|11 would cross below the f/2.8 marginal ray, so the axial beam is rim-limited to about f/2.9–3.0 at the long end. Failed rays are excluded from transmission; chief rays and transmitted image-plane projections remain finite. Sampled geometry has no rendered trim. MTF calculations converge through at least 50 lp/mm across the sampled settings, but not uniformly 100 lp/mm. Maximum sampled focal-length and back-focus interpolation residuals are below 0.00077 mm; this does not establish behavior at every continuous setting.

Numerical convergence describes the model's sampling accuracy, not measured production performance.

## Sources

- https://patents.google.com/patent/JPS55124116A/en
- [Tamron 51A specifications](https://www.tamron.com/jp/consumer/lenses/data/a2-lens/51a.htm)
- [Tamron brochure, p. 10: optical construction and relay-lens soft-focus motion](https://www.pacificrimcamera.com/rl/03711/03711.pdf)
- [Adaptall-2 reference: 51A soft-ring scale](https://www.adaptall-2.com/lenses/51A.html)
