# SIGMA 18-50mm f/2.8-4.5 DC OS HSM

## Patent Reference and Design Identification

**Patent:** JP 2010-211056 A
**Title:** Inner Zoom Type and Inner Focus Type Zoom Lens
**Applicant:** Sigma Corporation
**Inventor:** Kenta Fujita
**Filed:** 2009-03-11
**Published:** 2010-09-24
**Example details:** Example 1, Table 1, Figure 1
**Related patent:** JP 2010-211102 A, filed 2009-03-12, published 2010-09-24

JP 2010-211056 A is the print transcribed here. JP 2010-211102 A, filed a day later by the same inventor, prints the same Example 1 number for number and adds the stabilizer: it names element L3a, surfaces 11–12, as the stabilizing element, shifted ±0.5 mm across the axis in its figures (¶0046). L3a is element L6 in this file.

The link to the SIGMA 18-50mm f/2.8-4.5 DC OS HSM rests on:

1. Construction: Sigma lists 16 elements in 12 groups, and Example 1 has 16 elements in 12 groups. Its two thin resin layers belong to hybrid elements and are not counted separately.
2. Special elements: Sigma's construction diagram marks two SLD elements, the element ahead of the stop in G3 and the first G5 element, and three aspherical positions, the front resin element, the first G3 element and the last element. Example 1 has nd 1.4970 at L9 and L13 and aspheres at S3, S12 and S30.
3. Range: the patent prints 18.60–48.32 mm, F2.92–4.49 and 2ω 76.78°–32.26°; Sigma lists 18–50 mm, f/2.8–4.5 and 76.5°–31.7°.
4. Kinematics: G1 is fixed and G2 focuses, which fits a lens with internal zoom and internal focus.
5. Selection: of the eight designs printed across the two patents, only Example 1 pairs a biconvex G1 positive with a biconcave first G2 element. The other two stabilized designs, Examples 2 and 3 of JP 2010-211102 A, open at F3.15 and F3.33.

The correlation is probable, not a confirmed factory prescription. Marketed endpoints are not substituted for the patent's values. The Sony A version omits the stabilizer.

## Optical Architecture

Example 1 is a negative-negative-positive-negative-positive inner-zoom design, retrofocus at the wide end and telephoto at the long end (¶0034). The patent's groups L1 to L5 are G1 to G5 here, and L1 to L16 number the elements. The file has 33 surfaces and 18 entries, the 16 elements plus resin layers R1 and R2.

G1 stays fixed to the image. G2 moves forward and back (d5 = 7.59, 13.80, 7.92 mm) and also moves toward the object to focus. G3 and G5 move together toward the object (¶0041), so d18 + d24 stays 9.32 mm. G4 moves forward less far, carrying stop S19 with it. Surface S13, a flare-cut plane behind L6, travels with G3; S33, a second flare-cut plane, stays fixed behind G5 (¶0043).

### Model assumptions

- S12 prints no C or D coefficient, as in all six examples of the patent. Those terms are unused and are zero here.
- The patent labels the gap behind S33 as Fb but prints no value, and it prints no total length. The model uses the computed back focus, 38.529, 38.531 and 38.536 mm, which agree within 6.4 µm as a plane fixed to the image should.
- S13 and S33 are kept as printed planes. S29 is a plane glass surface, not a stop.
- Only three zoom positions are printed, out of 201 stations. Between them d18 and d32 run linearly and G2 is solved to hold focus, which leaves a slope break in G2's motion at 27.99 mm. This path is inferred, not a published cam.
- The stop radius follows from the design f-number at each station (paraxial EPD = F/N): 6.43, 6.41 and 6.40 mm at the printed positions. It is not a measured diaphragm. One fixed stop of about 6.55 mm radius gives the printed F-numbers by real marginal ray (2.919, 3.403, 4.487), which suggests the patent's stop does not change with zoom.
- Semi-diameters are inferred; none is printed. L1 to L5 and L10 to L12 follow Figure 1, which is drawn to scale. L10's rear curve ends at 6.05 mm so the stated axial beam passes at every station, and at that height L10 and L11 come within 0.07 mm. L1's rear flange is drawn as a straight edge, because the resin layer sits on the junction where a land would go.
- The rims of G3 and G5 stand above the figure, which draws L6 at 9.9, L7 and L8 at 9.4, L9 at 9.2, L13 at 9.4, L14 and L15 at 9.9 and L16 at 10.4 mm. The model uses 11.3, 10.78, 9.94, 10.7, 10.75 and 11.1 mm. Flare-cut planes S13 and S33 are 10.93 and 11.5 mm, near the outer ends of the figure's ticks (10.8 and 11.5 mm). The ticks' openings read 8.4 and 9.1 mm, and the end rays of the lateral-aberration Figures 4 and 5 stop near 8.65 mm on S13 and 9.7 mm on S33. Rims at those drawn sizes leave about half the light at the corner, so the model keeps the larger ones, each the smallest that holds the zoom range within about 3 points of the estimated clear apertures, 3.7 points at worst. Geometric transmission at the 14.20 mm corner is about 72, 91 and 91 % at the three printed positions. The fans also end at about 6.6 mm on S24 and 8.2 mm on S25, where the model has 7.4 and 10.7 mm, so it passes more off-axis light than the patent's plots show.

## Element-by-Element Analysis

Focal lengths are in-air thick-lens values.

### L1 — Negative Meniscus

nd = 1.77250, νd = 49.6243. Glass: TAF1 (HOYA catalog equivalent; production supplier unspecified). f = -63.453 mm.

Front element of fixed G1. With L2 behind it, the negative-positive order eases wide-angle distortion correction without raising the front diameter (¶0028). Its rear face carries resin layer R1.

### R1 — Hybrid Aspheric Resin Layer (1× Asph)

nd = 1.51840, νd = 52.0743. Glass: Unmatched (hybrid optical resin; catalog identity unpublished), with its g-line partial from a later Sigma patent. f = -516.782 mm.

Thin layer, 0.15 mm on the axis, bonded to L1 to form a hybrid element. It is taken as resin; the patent states no material. Its air-side surface S3 is the asphere G1 uses to correct wide-angle negative distortion with few elements (¶0028).

### L2 — Biconvex Positive

nd = 1.84660, νd = 23.7848. Glass: FDS90 (HOYA catalog equivalent; production supplier unspecified). f = +129.201 mm.

Equal-radius biconvex positive closing G1.

### L3 — Biconcave Negative

nd = 1.77250, νd = 49.6243. Glass: TAF1 (HOYA catalog equivalent; production supplier unspecified). f = -97.850 mm.

First element of G2, the negative group that travels toward the object for near focus (¶0010).

### L4 — Biconcave Negative

nd = 1.72920, νd = 54.6735. Glass: TAC8 (HOYA catalog equivalent; production supplier unspecified). f = -36.351 mm.

The stronger negative element of G2, cemented to L5. The patent sets G2's power as a balance between spherical-aberration change in focus and focus travel (¶0026–¶0027).

### L5 — Positive Meniscus

nd = 1.84660, νd = 23.7848. Glass: FDS90 (HOYA catalog equivalent; production supplier unspecified). f = +69.644 mm.

High-dispersion positive cemented to L4, the chromatic partner in that doublet.

### L6 — Positive Meniscus (1× Asph)

nd = 1.58760, νd = 61.0842. Glass: M-BACD5N (HOYA moulding glass, coordinate proxy). f = +79.380 mm.

First element of G3, with aspheric rear surface S12, and the stabilizing element L3a of JP 2010-211102 A. That patent credits the asphere with limiting decentring coma and astigmatism during stabilization (¶0022) and prints fw/f3a = 0.23. Flare-cut plane S13 follows it.

### L7 — Negative Meniscus

nd = 1.84660, νd = 23.7848. Glass: FDS90 (HOYA catalog equivalent; production supplier unspecified). f = -40.464 mm.

High-dispersion negative leading the G3 doublet. The patent gives the cemented lenses in G3, G4 and G5 the job of holding axial and lateral colour through zoom (¶0045).

### L8 — Positive Meniscus

nd = 1.77250, νd = 49.6243. Glass: TAF1 (HOYA catalog equivalent; production supplier unspecified). f = +25.915 mm.

The strongest positive element in G3, cemented to L7. G3 takes a wide beam from G1 and G2, so telephoto spherical aberration limits its power (¶0030–¶0031).

### L9 — Positive Meniscus

nd = 1.49700, νd = 81.6084. Glass: FCD1 (HOYA catalog equivalent; production supplier unspecified), inferred SLD. f = +49.781 mm.

Low-dispersion positive closing G3 just ahead of the stop, and one of the two positions Sigma marks SLD.

### L10 — Biconcave Negative

nd = 1.77250, νd = 49.6243. Glass: TAF1 (HOYA catalog equivalent; production supplier unspecified). f = -26.732 mm.

First element of G4, just behind the stop.

### L11 — Biconcave Negative

nd = 1.77250, νd = 49.6243. Glass: TAF1 (HOYA catalog equivalent; production supplier unspecified). f = -15.771 mm.

The strongest negative element in the lens, cemented to L12. G4 supplies the negative rear power of the telephoto layout at the long end (¶0034–¶0035).

### L12 — Biconvex Positive

nd = 1.84660, νd = 23.7848. Glass: FDS90 (HOYA catalog equivalent; production supplier unspecified). f = +23.545 mm.

High-dispersion biconvex cemented to L11, the chromatic partner in that doublet.

### L13 — Biconvex Positive

nd = 1.49700, νd = 81.6084. Glass: FCD1 (HOYA catalog equivalent; production supplier unspecified), inferred SLD. f = +29.108 mm.

First element of G5 and the second position Sigma marks SLD.

### L14 — Positive Meniscus

nd = 1.77250, νd = 49.6243. Glass: TAF1 (HOYA catalog equivalent; production supplier unspecified). f = +69.330 mm.

Positive meniscus leading the G5 doublet.

### L15 — Plano-Concave Negative

nd = 1.84660, νd = 23.7848. Glass: FDS90 (HOYA catalog equivalent; production supplier unspecified). f = -45.677 mm.

High-dispersion negative cemented to L14, the chromatic partner in that doublet, with a flat rear face.

### R2 — Hybrid Aspheric Resin Layer (1× Asph)

nd = 1.51840, νd = 52.0743. Glass: Unmatched (hybrid optical resin; catalog identity unpublished), with its g-line partial from a later Sigma patent. f = +302.074 mm.

Thin layer, 0.15 mm on the axis, bonded to the front of L16 to form a hybrid element. It is taken as resin; the patent states no material. Its air-side surface S30 is the G5 asphere the patent uses for coma and astigmatism, because the off-axis beam runs far out in this group (¶0044).

### L16 — Positive Meniscus

nd = 1.48750, νd = 70.4412. Glass: FC5 (HOYA catalog equivalent; production supplier unspecified). f = +96.260 mm.

Last element, carrying R2 on its front face. Flare-cut plane S33 lies behind it, level with its vertex at the wide end and 20.09 mm behind it at the long end.

## Glass Identification and Selection

Printed nd and νd are kept. The catalog names supply spectral curves and are equivalents, not identified suppliers or melts. The patent prints νd to four decimals, and the HOYA curves for TAF1, FDS90, FC5 and TAC8 reproduce those values to 0.0001, closer than the same-coordinate rows of other makers. The table gives catalog minus printed values.

| Catalog equivalent | Printed nd | Printed νd | Elements | Δnd | Δνd |
|---|---:|---:|---|---:|---:|
| TAF1 (HOYA) | 1.7725 | 49.6243 | L1, L3, L8, L10, L11, L14 | +2.9e-08 | 0.0000 |
| FDS90 (HOYA) | 1.8466 | 23.7848 | L2, L5, L7, L12, L15 | +6.3e-05 | 0.0000 |
| TAC8 (HOYA) | 1.7292 | 54.6735 | L4 | -4.0e-05 | +0.00001 |
| FCD1 (HOYA) | 1.4970 | 81.6084 | L9, L13 | -1.6e-07 | +0.0006 |
| M-BACD5N (HOYA, moulding proxy) | 1.5876 | 61.0842 | L6 | +1.5e-03 | +0.1667 |
| FC5 (HOYA) | 1.4875 | 70.4412 | L16 | -1.1e-05 | 0.0000 |

L9 and L13 are tagged as inferred low-dispersion glass from Sigma's SLD marks and their FCD1 coordinates; the patent states no dispersion class. Both resin layers stay Unmatched and take a g-line partial of 0.5538 from JP 2019-211703 A Example 2, a later Sigma patent that prints it for a 1.51840/52.10 aspherical resin. That is a proxy: the coordinates match, but nothing shows the same resin. L6's 1.5876/61.08 appears in Examples 1, 5 and 6 and 1.5891/61.25 in Examples 2 to 4, and the lower index fits a moulded asphere, though the patent does not say so. L6 keeps its printed index and takes its dispersion from M-BACD5N, the moulding row with the Examples 2 to 4 coordinates. The same later patent prints 1.58913/61.25/0.5373 on an asphere, which is this row. L6 sits 0.0015 below it in index and 0.17 below it in νd.

The viewer's colour channels use the catalog indices, offset from the printed nd as listed. Rounded printed values cannot establish secondary spectrum, and no apochromatic correction is claimed.

## Focus Mechanism

Inner focus by G2, which moves toward the object for near focus (¶0010). The patent prints no near-focus spacings, object distance or travel, so the model stays at infinity and the focus control does not change the optics. Sigma's 30 cm and 1:4.1 are specifications, not modeled states, and no close-focus performance is given.

## Aspherical Surfaces

The patent's equation is x = (h²/r)/[1 + {1 − (1 + k)(h/r)²}^½] + Ah⁴ + Bh⁶ + Ch⁸ + Dh¹⁰ (¶0049). Its k is K here, and A, B, C and D are A4, A6, A8 and A10.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| S3 | 9.8600000e-02 | -4.9775000e-06 | -9.5217000e-09 | 1.3566000e-11 | -2.4590000e-14 |
| S12 | -1.1922000e+00 | -2.8679000e-06 | -2.0403000e-09 | 0.0000000e+00 | 0.0000000e+00 |
| S30 | 0.0000000e+00 | -3.2971000e-05 | -4.1422000e-08 | -2.3153000e-10 | 3.6395000e-13 |

Polynomial coefficients have units mm^(1−order). The patent leaves C and D blank at S12, as it does for that surface in all six examples, so those terms are unused and are zero here. Coefficients as large as those on S3 would add about 3 µm of sag at the rim.

## Model Scope and Limitations

| Printed f | Printed F | Printed 2ω | Computed EFL | Computed 2ω at Y = 14.20 mm | Computed back focus |
|---:|---:|---:|---:|---:|---:|
| 18.60 | 2.92 | 76.78° | 18.600 | 76.78° | 38.529 |
| 27.99 | 3.40 | 52.93° | 27.989 | 52.93° | 38.531 |
| 48.32 | 4.49 | 32.26° | 48.325 | 32.26° | 38.536 |

The patent prints no image height; 14.20 mm reproduces all three printed angles. The design values stay in the model: the marketed 18 mm, 50 mm and f/2.8 are not substituted.

The model covers centred infinity focus only. It has no finite-focus state and so no finite-conjugate MTF, and it does not model the stabilizing shift of L6. The zoom path between printed positions, the semi-diameters and the fixed-stop reading are inferred. Colour and photopic MTF results rest on the catalog equivalents and are not production predictions. No comparison with digitized patent plots or measured MTF is claimed.

## Sources

1. [JP 2010-211056 A](https://patents.google.com/patent/JP2010211056A/en), Table 1 (printed p. 9) and Figure 1.
2. [JP 2010-211102 A](https://patents.google.com/patent/JP2010211102A/en), Table 1 (printed pp. 10–11), Figure 1 and ¶0046.
3. [Sigma product page](https://www.sigma-global.com/en/lenses/18_50_28_45/) and [construction diagram](https://www.sigma-global.com/lenses/18_50_28_45_specification_01.jpg).
4. [Wikipedia, Sigma 18-50mm f/2.8-4.5 DC OS HSM lens](https://en.wikipedia.org/wiki/Sigma_18-50mm_f/2.8-4.5_DC_OS_HSM_lens), for the internal zoom and focus.
