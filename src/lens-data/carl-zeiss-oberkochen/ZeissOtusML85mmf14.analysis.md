## Patent Reference and Design Identification

**Patent:** JP 2026-093473 A\
**Application Number:** JP 2024-206943\
**Filed:** 2024-11-28\
**Published:** 2026-06-09\
**Inventor:** Yuki Shibata\
**Applicant:** Cosina Co., Ltd.\
**Title:** 光学レンズ系 (Optical lens system)\
**Example details:** 第1実施形態, Tables 1–4 (pp. 6, 8, 9), Fig. 1 (p. 19), Fig. 2 (p. 20); used at patent scale.

Cosina builds the Otus ML lenses for ZEISS, and Example 1 matches the production 85 mm on these points:

1. 15 elements in 11 groups, in the same order and shapes as ZEISS's published section: five singlets, a cemented pair and a negative singlet, two cemented pairs, then a cemented pair and a negative meniscus.
2. The 14.84° half-field gives the 29.68° diagonal Cosina lists (ZEISS rounds to 30°).
3. The close state in Table 3 (magnification 0.124, object 676 mm before the first surface, 800.01 mm object to image) matches the 0.80 m minimum focus, the 0.68 m free working distance and the 1:8.1 ratio ZEISS lists.
4. The model's distortion at the 21.63 mm corner (−0.98%) and its geometric corner illumination at f/1.45 (about 23%) agree with the ZEISS datasheet curves (about −1.0% and 22%).

The design values f = 82.45 mm and F1.45 are marketed as 85 mm f/1.4. ZEISS's section shades L5 and L8f in one colour, and specification listings give the lens two aspherical elements, but every example in the patent puts aspheres only on L5. The production lens therefore probably has a second aspheric element that the model does not carry. Example 2 has the same count, but unlike the section its first two elements are menisci concave to the object, the second one negative. Example 3 has 16 elements, with two cemented pairs in G2.

## Optical Architecture

Four groups follow a positive–negative–positive–negative sequence, with the iris between G2 and G3. Group focal lengths are 58.53, −44.28, 46.64 and −101.75 mm (Table 1; the model reproduces all four). G1 has five singlets; G2 a cemented pair and a negative singlet; G3 two cemented pairs; G4 a cemented pair and a negative rear meniscus. G2 and G3 move to focus, and G1 and G4 stay fixed (¶0021).

Table 1 gives 57.4 mm and 31.8 mm as the effective diameters of the first and last lens surfaces, so S1 and S27 have semi-diameters of 28.7 mm and 15.9 mm. All other semi-diameters are inferred.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.51860, νd = 69.89. Glass: J-PKH1 (Hikari) catalog equivalent. f = +343.2 mm.

Weak front meniscus convex to the object (¶0025). Its printed 57.4 mm effective diameter just admits the f/1.45 axial beam, which reaches 28.4 mm on S1.

### L2 — Positive Meniscus

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA) catalog equivalent. f = +201.3 mm.

Second meniscus convex to the object, in a low-dispersion crown. ZEISS's section marks it as special glass.

### L3 — Biconcave Negative

nd = 1.72047, νd = 34.71. Glass: S-NBH8 (OHARA) catalog equivalent. f = −76.7 mm.

The only negative element of G1. The patent credits its object-side concave face with reducing coma at close focus (¶0012, ¶0025; claim 6).

### L4 — Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA) catalog equivalent. f = +68.3 mm.

A 12.89 mm thick biconvex element and the strongest positive member of G1. ZEISS's section marks it as special glass.

### L5 — Positive Meniscus (2× Asph)

nd = 1.76450, νd = 49.09. Glass: L-LAH91 (OHARA) catalog equivalent. f = +110.0 mm.

Rear meniscus of G1, aspherical on both faces (¶0025), and the last fixed element ahead of the focusing group.

### L6f + L6r — Cemented Pair C1 (G2)

- L6f, Positive Meniscus: nd = 1.80809, νd = 22.76. Glass: S-NPH1 (OHARA) catalog equivalent. f = +101.0 mm.
- L6r, Negative Meniscus: nd = 1.61340, νd = 44.27. Glass: S-NBM51 (OHARA) catalog equivalent. f = −45.3 mm.

The front of the focusing group: a high-dispersion positive meniscus cemented to a negative meniscus whose deep rear face (R = 26.946 mm) gives the pair its negative power (cemented f = −89.6 mm). ZEISS's section marks L6f as special glass.

### L7 — Biconcave Negative

nd = 1.55298, νd = 55.07. Glass: J-KZFH4 (Hikari) catalog equivalent. f = −92.3 mm.

Nearly plano on the object side, this is the last element of G2, just ahead of the iris. G2 (f2 = −44.28 mm, |f2/f| = 0.54 inside claim 1's 0.4–0.7 range) moves 3.72 mm toward the image for close focus.

### L8f + L8r — Cemented Pair C2 (G3)

- L8f, Biconvex Positive: nd = 1.76385, νd = 48.49. Glass: S-LAH96 (OHARA) catalog equivalent. f = +25.8 mm.
- L8r, Negative Meniscus: nd = 1.85883, νd = 30.00. Glass: NBFD30 (HOYA) catalog equivalent. f = −32.4 mm.

The first pair behind the iris, positive then negative, with the joint (R = −24.936 mm) concave to the object as claim 3 requires; the patent says this pair cancels the aberrations G2 produces at close focus (¶0030). Cemented f = +107.0 mm. ZEISS's section colours L8f in the shade it uses for L5 and marks L8r as special glass; every patent example has L8f spherical.

### L9f + L9r — Cemented Pair C3 (G3)

- L9f, Negative Meniscus: nd = 1.73800, νd = 32.33. Glass: S-NBH53V (OHARA) catalog equivalent. f = −46.5 mm.
- L9r, Biconvex Positive: nd = 1.76385, νd = 48.49. Glass: S-LAH96 (OHARA) catalog equivalent. f = +29.3 mm.

A nearly plano-fronted negative meniscus cemented to a biconvex element; at f = +72.1 mm this is the stronger pair of G3 (f3 = 46.64 mm, |f2/f3| = 0.95 inside claim 4's 0.7–1.2). G3 moves 2.70 mm toward the object for close focus.

### L10f + L10r — Cemented Pair C4 (G4)

- L10f, Positive Meniscus: nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA) catalog equivalent. f = +40.1 mm.
- L10r, Biconcave Negative: nd = 1.61340, νd = 44.27. Glass: S-NBM51 (OHARA) catalog equivalent. f = −44.2 mm.

A positive meniscus convex to the image cemented to a biconcave element (cemented f = +468 mm). L10f meets claim 9's nd > 1.90 for the G4 positive lens, which the patent ties to spherical-aberration control (¶0015). ZEISS's section marks L10f as special glass.

### L11 — Negative Meniscus

nd = 1.55298, νd = 55.07. Glass: J-KZFH4 (Hikari) catalog equivalent. f = −83.0 mm.

Fixed rear element, concave to the object. Its printed 31.8 mm effective diameter gives φr/φf = 0.55 and φr/2BF = 0.88 (claims 7 and 8); keeping it fixed lets it stay large within the mount's limit (¶0007).

## Glass Identification and Selection

The patent prints nd and νd at the d-line (587.56 nm) and no partial-dispersion data. Each of the twelve distinct pairs matches a current catalog glass exactly; the names below are catalog equivalents, not production identifications.

| Elements   | nd      | νd    | Catalog equivalent | ZEISS section marking |
| ---------- | ------- | ----- | ------------------ | --------------------- |
| L1         | 1.51860 | 69.89 | J-PKH1 (Hikari)    | —                     |
| L2         | 1.55032 | 75.50 | FCD705 (HOYA)      | Special glass         |
| L3         | 1.72047 | 34.71 | S-NBH8 (OHARA)     | —                     |
| L4         | 1.59282 | 68.62 | FCD515 (HOYA)      | Special glass         |
| L5         | 1.76450 | 49.09 | L-LAH91 (OHARA)    | Aspherical shade      |
| L6f        | 1.80809 | 22.76 | S-NPH1 (OHARA)     | Special glass         |
| L6r, L10r  | 1.61340 | 44.27 | S-NBM51 (OHARA)    | —                     |
| L7, L11    | 1.55298 | 55.07 | J-KZFH4 (Hikari)   | —                     |
| L8f, L9r   | 1.76385 | 48.49 | S-LAH96 (OHARA)    | L8f: aspherical shade |
| L8r        | 1.85883 | 30.00 | NBFD30 (HOYA)      | Special glass         |
| L9f        | 1.73800 | 32.33 | S-NBH53V (OHARA)   | —                     |
| L10f       | 2.00100 | 29.13 | TAFD55 (HOYA)      | Special glass         |

ZEISS's section shades five elements in one colour and two in another. Specification listings give the lens five anomalous-partial-dispersion elements and two aspherical elements, and the table follows that reading. The APD designation is the maker's marking, not a property derived from the patent.

## Focus Mechanism

Two inner groups move in opposite directions (¶0021): G2 and the iris travel 3.72 mm toward the image, and G3 travels 2.70 mm toward the object. G1 and G4 stay fixed, so the image plane stays 124.01 mm behind S1 and the optical length does not change. The patent argues that fixing both outer groups cuts the rays that cause flare at close range (¶0007). ZEISS describes a manual helicoid focus with 244° of ring rotation.

| Gap / datum          | Infinity | Close state (Table 3) |
| -------------------- | -------- | --------------------- |
| d10 (G1–G2)          | 1.00 mm  | 4.72 mm               |
| d16 (iris–G3)        | 7.22 mm  | 0.80 mm               |
| d22 (G3–G4)          | 1.50 mm  | 4.20 mm               |
| Object before S1     | ∞        | 676.0 mm              |
| Image gap after S27  | 18.10 mm | 18.10 mm              |

Table 3 prints magnification 0.124 for the close state; the model gives 0.1236 with the image 0.008 mm ahead of the printed plane. The printed spacings put the object 800.01 mm from the image plane, which matches ZEISS's 0.80 m minimum focus and 0.68 m free working distance. The patent prints only the two end states; the model interpolates the gaps linearly between them.

## Aspherical Surfaces

Both faces of L5 (S9, S10) are aspherical. The patent's equation is $z=(h^2/R)/(1+\sqrt{1-(1+K)(h/R)^2})+\sum A_n h^n$, the standard form in which K = 0 is a sphere; the coefficients are used as printed.

| Surface | K         | A4           | A6           | A8           | A10         |
| ------- | --------- | ------------ | ------------ | ------------ | ----------- |
| 9       | -0.030969 | -2.47019E-06 | -6.05731E-11 | -2.05766E-12 | 2.81337E-15 |
| 10      | 0         | -7.56527E-07 | 7.31747E-10  | -1.60283E-12 | 2.74862E-15 |

The equation names A12 and higher, but Table 4 prints terms only through A10, and the model stops there.

The strongly negative A4 on S9 flattens the front face toward the rim: at the 25.9 mm semi-diameter it lies 1.170 mm behind the base sphere, against 0.071 mm on S10. The catalog equivalent L-LAH91 belongs to OHARA's low-Tg range for precision moulding, which suggests a moulded asphere; the patent does not say how L5 is made.

## Clear Apertures, Stop and Geometry

S1 and S27 have half the printed effective diameters, 28.7 mm and 15.9 mm. The other semi-diameters are measured on Fig. 1, which reproduces both printed values to 0.05 mm, and each element and cemented pair has one height, as the figure draws them: S2 28.7 (L1 square at the printed S1 value), S3–S4 28.0, S5–S6 27.9, S7–S8 27.8, S9–S10 25.9, S11–S13 21.6, S14–S15 16.4, S17–S19 15.4, S20–S22 14.1, S23–S25 14.5 and S26 15.9 mm. The deep rear face of L6r ends at a radius of 17.0 mm on a flat land 6.04 mm behind its vertex, which carries the pair out to its 21.6 mm edge, as in Fig. 1 and ZEISS's section. Two rims sit 0.7 mm outside the figure: L2, drawn at 27.3 mm, whose larger rim keeps the corner light at close and middle focus, and C2, drawn at 14.7 mm, which needs 15.4 mm for the axial beam at the close state. The stop position is printed; its 15.46 mm radius is derived from F1.45, and the drawn rims of L2, C1, L7 and C2 clear the axial beam through that iris by 0.03–0.17 mm at infinity.

## Model Scope and Limitations

The model reproduces the patent's first-order values: EFL 82.446 mm (82.45 mm printed), paraxial back focus 18.091 mm against the printed 18.10 mm image gap, which is kept, and a 124.01 mm sum of gaps against the 124 mm optical length in Table 1. Its real-ray aberrations follow Fig. 2: longitudinal spherical aberration −0.011 mm at full aperture, distortion −0.98% at 21.63 mm, and tangential and sagittal focus −0.09 mm and −0.02 mm at the corner.

At f/1.45 the iris, not a lens rim, limits the axial beam. Off-axis rays are cut by the lens rims, mostly inferred, leaving about 23% geometric illumination at the corner, close to ZEISS's curve. The model does not carry the second aspheric element ZEISS's section suggests on L8f, so it represents the patent design rather than the exact production prescription.

## Sources

- [Original patent publication](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP002026093473A&xxxfull=1), Example 1 lens data, focus spacings and aspheric coefficients.
- [Cosina product page and section](https://www.cosina.co.jp/zeiss/otus-ml/otus-ml-1-4-85/), construction and specifications.
- [ZEISS Otus ML 1.4/85 datasheet (03/25)](https://www.zeiss.co.jp/content/dam/pno/downloads/photo-lenses/datasheets/otus-ml-lenses/datasheet-zeiss-otus-ml-1485.pdf), 15/11 construction, focusing range, relative illumination and distortion.
