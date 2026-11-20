# ZEISS OTUS ML 50mm f/1.4

## Patent Reference and Design Identification

**Patent:** JP 2026-105585 A, 光学レンズ系 (Optical lens system)\
**Inventors:** Tatsuya Moriyama (森山 達也)\
**Assignee:** Cosina Co., Ltd. (株式会社コシナ)\
**Filed:** 16 December 2024\
**Published:** 26 June 2026\
**Example details:** Example 1, Table 1 summary, Table 2 prescription, Tables 3–4 focus spacings and aspheres; Figs. 1–2

Example 1 best fits the production Otus ML 50mm f/1.4: 14 elements/11 groups, two aspherical elements, four APD candidates and 499.54 mm near focus at approximately 1:7.45. Example 2 has 15/12; Example 3 has three aspherical elements. [Cosina](https://www.cosina.co.jp/zeiss/otus-ml/otus-ml-1-4-50/) and [ZEISS](https://www.zeiss.com/content/dam/pno/downloads/photo-lenses/datasheets/otus-ml-lenses/datasheet-zeiss-otus-ml-1450.pdf) specify full-frame 50 mm f/1.4, 0.50 m, 1:7.3 and E/RF/Z mounts. [CameraLabs](https://www.cameralabs.com/zeiss-otus-ml-50mm-f1-4-review/2/) measured 1:7.5. The patent's 46.24° field lies between Cosina's 45.65° and ZEISS's 47°. The production association is strong.

[ZEISS announced the lens on 25 February 2025](https://www.zeiss.com/photonics-and-optics/en/home/content/newsroom/news-overview/2025/new-otus-ml.html); Cosina lists availability on 30 May for E/RF and 30 July for Z.

S26 follows Table 4's INFINITY base over Table 2's −2000 mm. The plane agrees with the patent's first-order summary and Fig. 2. Table 2 likely repeats Examples 2/3, which consistently use −2000 mm.

## Optical Architecture

ZEISS calls the production design a Distagon. G1 has five fixed elements; G2 has nine moving elements and the iris. Cemented pairs C1, C2 and C3 span S13–S15, S17–S19 and S22–S24, with in-air focal lengths −57.01, −577.15 and −53.71 mm.

The patent's millimetre prescription is unscaled. Stop position, spacings and aspheres are printed; rims are estimated, iris radius is derived, and intermediate focus positions are inferred. The printed 18.69 mm image gap is retained without added plates or baffles.

## Element-by-Element Analysis

Focal lengths are for individual elements in air.

### L1 — Biconcave Negative

nd = 1.72047, νd = 34.71. Glass: S-NBH8 (OHARA equivalent). f = −46.00 mm.

L1 spreads the incoming bundle before the positive elements.

### L2 — Biconvex Positive

nd = 1.80809, νd = 22.76. Glass: S-NPH1 (OHARA equivalent). f = +140.43 mm.

This high-dispersion positive element is the inferred APD flint in G1. Its catalog partial dispersion agrees with the patent's Gr1P value, ΔPgF = 0.023.

### L3 — Biconvex Positive

nd = 1.76385, νd = 48.49. Glass: S-LAH96 (OHARA equivalent). f = +69.23 mm.

L3 supplies the strongest positive element power in the fixed group.

### L4 — Biconvex Positive

nd = 1.62846, νd = 59.17. Glass: J-PSKH8 (Hikari equivalent). f = +168.95 mm.

This weak positive phosphate crown is an inferred APD position between L3 and the rear negative meniscus of G1.

### L5 — Negative Meniscus

nd = 1.55298, νd = 55.07. Glass: J-KZFH4 (Hikari equivalent). f = −200.08 mm.

L5 completes G1. Its catalog equivalent has negative anomalous partial dispersion, supporting the inferred APD designation.

### L6 — Positive Meniscus, Aspherical

nd = 1.85135, νd = 40.10. Glass: M-TAFD305 (HOYA equivalent). f = +57.56 mm.

The first element of G2 has the S11 asphere and moves with the focusing group.

### L7 — Positive Meniscus, C1

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA equivalent). f = +100.67 mm.

The inferred ED/APD crown is cemented to L8 at S14, ahead of the iris.

### L8 — Negative Meniscus, C1

nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA equivalent). f = −34.70 mm.

The dispersive negative member makes C1 net negative and bounds the air space before the iris.

### L9 — Biconcave Negative, C2

nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA equivalent). f = −24.09 mm.

This strong negative element sits immediately behind the iris and is cemented to L10 at S18.

### L10 — Biconvex Positive, C2

nd = 1.76385, νd = 48.49. Glass: S-LAH96 (OHARA equivalent). f = +25.35 mm.

L10 balances L9, leaving C2 weakly negative.

### L11 — Biconvex Positive

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA equivalent). f = +27.20 mm.

The high-index positive singlet follows C2.

### L12 — Positive Meniscus, C3

nd = 1.95375, νd = 32.32. Glass: S-LAH98 (OHARA equivalent). f = +33.28 mm.

L12 is the positive member of C3, cemented to L13 at S23.

### L13 — Biconcave Negative, C3

nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA equivalent). f = −20.71 mm.

The negative member leaves C3 net negative before the final asphere.

### L14 — Negative Meniscus, Aspherical

nd = 1.80835, νd = 40.55. Glass: L-LAH84 (OHARA equivalent). f = −140.53 mm.

Both S25 and S26 are aspherical. Although S26 has a plane base, its polynomial produces a curved profile; the patent describes the element as a negative meniscus.

## Glass Identification and Selection

All eleven distinct nd/νd pairs resolve to catalog rows within |Δnd| ≤ 0.000005 and |Δνd| ≤ 0.004483. The reference is helium d, 587.56 nm. Catalog curves supply dispersion while the printed nd/νd remain unchanged; production melts and suppliers are unspecified.

Four APD positions are inferred from the [maker's special-glass count and optical section](https://www.zeiss.com/photonics-and-optics/en/photography/products/lenses-for-mirrorless-system-cameras/otus-ml-lenses.html) and compatible glass properties: L2, L4, L5 and L7.

## Focus Mechanism

G1 stays fixed; G2 and the iris move 6.86 mm toward the object. D10 + D26 = 26.25 mm holds the image plane at 104.64 mm. The printed near distance is 394.90 mm before S1, or 499.54 mm to the image; marketing specifies 0.50 m.

| Coordinate | D10 (mm) |  D26 (mm) | Readout (m) | Basis    |
| ---------- | -------: | --------: | ----------: | -------- |
| 0          | 7.560000 | 18.690000 |    Infinity | Table 3  |
| 0.25       | 6.168629 | 20.081371 |    1.997574 | Inferred |
| 0.50       | 4.595947 | 21.654053 |    0.998787 | Inferred |
| 0.75       | 2.794444 | 23.455556 |    0.665858 | Inferred |
| 1          | 0.700000 | 25.550000 |    0.499394 | Table 3  |

Intermediate control points reduce worst readout-distance defocus from −0.4584 to −0.0411 mm. Piecewise linear travel is inferred, without a measured cam. The printed near conjugate has image error −0.002634 mm, magnification −0.13413. Printed-spacing rounding explains the small readout discrepancy.

## Aspherical Surfaces

S11 on L6 and S25/S26 on L14 carry the three printed aspheres. All use standard (1 + K) conic sag, K = 0, plus A4–A20.

| Term |         S11 |         S25 |         S26 |
| ---- | ----------: | ----------: | ----------: |
| A4   |  −1.9551e−6 |  −8.3587e−5 |  −6.6648e−5 |
| A6   |  −3.6039e−9 |  +2.3742e−7 |  +3.0363e−7 |
| A8   | +1.7572e−12 |  −2.1119e−9 |  −2.4798e−9 |
| A10  | −9.2051e−15 | +1.2180e−11 | +1.6564e−11 |
| A12  | −5.2524e−18 | −2.4470e−14 | −5.2910e−14 |
| A14  | +8.4241e−22 | −3.9679e−18 | +6.3909e−17 |
| A16  | −6.4123e−24 | +2.0037e−20 | +7.1911e−21 |
| A18  |           0 | +3.4759e−23 |           0 |
| A20  |           0 |           0 |           0 |

Negative A4 bends the outer profiles away from their bases. S26 gives approximately −1.67 mm sag at height 15 mm despite its plane base.

## Image Plane, Aperture and Model Limits

| Quantity (mm)              | Table 1 | S26 plane | S26 −2000 |
| -------------------------- | ------: | --------: | --------: |
| EFL                        |   50.15 |   50.1365 |    49.761 |
| BFD                        |   18.69 |   18.6919 |    18.552 |
| G2 focal length            |   67.14 |     67.11 |     66.25 |
| Final-element focal length | −140.15 |   −140.53 |   −149.07 |

At the source pupil, full/half-pupil d-line longitudinal spherical aberration is −0.071/−0.016 mm with the plane, versus −0.266/−0.166 mm with −2000 mm. Axial RMS spots on the printed image plane are 9.8 versus 54.6 µm. Fig. 2's near-zero d-line curve supports Table 4.

The paraxial F1.435 stop rule gives iris radius 13.7367 mm; pupil aberration makes real-ray acceptance approximately f/1.51. Estimated rims and the derived iris limit production-performance comparisons. The 23.12° half-field reaches the 24×36 mm corner; geometry passes without overrides. Fig. 1 is schematic, and its rear-group outlines await a separate rim review.

## Sources

- JP 2026-105585 A, Tables 1–4 and Figs. 1–2; [J-GLOBAL bibliography](https://jglobal.jst.go.jp/en/detail?JGLOBAL_ID=202603007546980750).
- Cosina and ZEISS specifications, optical section, announcement and CameraLabs measurements linked above.
