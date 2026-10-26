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

nd = 1.80518, νd = 25.43000. Glass: Unmatched (source nd=1.80518, dispersion=25.43). Isolated thick-lens f = -155.28228 mm.

Bounded by surfaces 1 and 2; the negative front element of the first cemented doublet.

### Z2: Biconvex Positive

nd = 1.61272, νd = 58.75000. Glass: Unmatched (source nd=1.61272, dispersion=58.75). Isolated thick-lens f = 93.47399 mm.

Bounded by surfaces 2 and 3; the positive rear element of the first cemented doublet.

### Z3: Meniscus Positive

nd = 1.61272, νd = 58.75000. Glass: Unmatched (source nd=1.61272, dispersion=58.75). Isolated thick-lens f = 171.08084 mm.

Bounded by surfaces 4 and 5; a positive singlet ahead of the first variable zoom gap.

### Z4: Plano-concave Negative

nd = 1.69680, νd = 55.52000. Glass: Unmatched (source nd=1.6968, dispersion=55.52). Isolated thick-lens f = -101.46383 mm.

Bounded by surfaces 6 and 7; the negative singlet at the front of the central zoom section.

### Z5: Meniscus Positive

nd = 1.80518, νd = 25.43000. Glass: Unmatched (source nd=1.80518, dispersion=25.43). Isolated thick-lens f = 99.73005 mm.

Bounded by surfaces 8 and 9; the positive front element of the second cemented doublet.

### Z6: Biconcave Negative

nd = 1.69680, νd = 55.52000. Glass: Unmatched (source nd=1.6968, dispersion=55.52). Isolated thick-lens f = -54.34482 mm.

Bounded by surfaces 9 and 10; the negative rear element of the second cemented doublet.

### Z7: Biconcave Negative

nd = 1.69680, νd = 55.52000. Glass: Unmatched (source nd=1.6968, dispersion=55.52). Isolated thick-lens f = -57.21649 mm.

Bounded by surfaces 11 and 12; the negative front element of the third cemented doublet.

### Z8: Biconvex Positive

nd = 1.80518, νd = 25.43000. Glass: Unmatched (source nd=1.80518, dispersion=25.43). Isolated thick-lens f = 108.64599 mm.

Bounded by surfaces 12 and 13; the positive rear element of the third cemented doublet.

### Z9: Biconvex Positive

nd = 1.71300, νd = 53.89000. Glass: Unmatched (source nd=1.713, dispersion=53.89). Isolated thick-lens f = 98.44468 mm.

Bounded by surfaces 14 and 15; a positive singlet between the second and third variable zoom gaps.

### M10: Biconvex Positive

nd = 1.69680, νd = 55.52000. Glass: Unmatched (source nd=1.6968, dispersion=55.52). Isolated thick-lens f = 50.15235 mm.

Bounded by surfaces 16 and 17; the positive front element of the fixed master doublet ahead of the stop.

### M11: Biconcave Negative

nd = 1.80518, νd = 25.43000. Glass: Unmatched (source nd=1.80518, dispersion=25.43). Isolated thick-lens f = -108.87007 mm.

Bounded by surfaces 17 and 18; the negative rear element of the fixed master doublet ahead of the stop.

### G12: Meniscus Negative

nd = 1.80518, νd = 25.43000. Glass: Unmatched (source nd=1.80518, dispersion=25.43). Isolated thick-lens f = -149.24629 mm.

Bounded by surfaces 20 and 21; the first negative relay singlet, moving forward with the soft-focus control.

### G13: Meniscus Negative

nd = 1.80518, νd = 25.43000. Glass: Unmatched (source nd=1.80518, dispersion=25.43). Isolated thick-lens f = -228.07138 mm.

Bounded by surfaces 22 and 23; the second negative relay singlet, moving forward with G12.

### G14: Biconvex Positive

nd = 1.77250, νd = 49.68000. Glass: Unmatched (source nd=1.7725, dispersion=49.68). Isolated thick-lens f = 94.86411 mm.

Bounded by surfaces 24 and 25; the positive rear relay singlet, with additional forward soft-focus travel.

## Glass Identification and Selection

The patent provides nd and νd only; historical glass identities remain unknown. The model retains those values without substituting catalog glass. Normal-line dispersion approximates secondary color and does not establish anomalous dispersion. The printed Z9 index 6.71300 is read as 1.71300, corroborated by all 24 nonzero Petzval rows and the three focal lengths. This reading is an inference from the printed data. Element powers are calculated in isolation and do not uniquely establish aberration contributions within the assembled lens.

## Focus Mechanism

The model covers infinity zoom and soft-focus control only. Tamron's published 0.98 m minimum distance is catalog metadata; the patent supplies no finite-focus travel. The three printed zoom states are retained exactly. Between them, 101 control stations satisfy paraxial focal-length and image-distance constraints while keeping the sum of the three variable gaps fixed. Intermediate travel is interpolated rather than published mechanical motion. The patent's normal-to-soft spacings are interpolated linearly with the sensor fixed; the terminal gap increases by 9.22 mm relative to its value at each zoom setting. The production ring's 0–3 scale is represented by a normalized 0–1 control, without a claim to factory calibration.

## Model Scope and Limitations

Unprinted d24 = 2.8 mm is inferred from the rounded 42.8 mm stop-to-rear length minus 40.0 mm of listed intervals. Semi-diameters and the iris are estimates. Outer off-axis rays vignette at surface 6 and the front clear aperture; some axial marginal rays also clip within surfaces 6–18, so rim and iris estimates remain uncertain. Failed rays are excluded from transmission; chief rays and transmitted image-plane projections remain finite. Sampled geometry has no rendered trim. MTF calculations converge through at least 50 lp/mm across the sampled settings, but not uniformly 100 lp/mm. Maximum sampled focal-length and back-focus interpolation residuals are below 0.00077 mm; this does not establish behavior at every continuous setting.

Numerical convergence describes the model's sampling accuracy, not measured production performance.

## Sources

- https://patents.google.com/patent/JPS55124116A/en
- [Tamron 51A specifications](https://www.tamron.com/jp/consumer/lenses/data/a2-lens/51a.htm)
- [Tamron brochure, p. 10: optical construction and relay-lens soft-focus motion](https://www.pacificrimcamera.com/rl/03711/03711.pdf)
- [Adaptall-2 reference: 51A soft-ring scale](https://www.adaptall-2.com/lenses/51A.html)
