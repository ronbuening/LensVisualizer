# Nikon AF-S NIKKOR 58mm f/1.4G — Design Candidate

## Patent Reference and Design Identification

**Patent:** JP 2013-019993 A

**Inventor:** Haruo Sato (佐藤 治夫)

**Assignee:** Nikon Corporation

**Filed:** July 8, 2011 (JP 2011-151822)

**Published:** January 31, 2013

**Embodiment analyzed:** Example 2 (OS2), Figure 3, Tables 4 and 5.

This is a patent design candidate associated with the catalog's 58mm product name, not an established production prescription. The source has nine elements in five air-separated components and four optical groups. No production modification, such as splitting a cemented pair, is established by the patent.

Table 4 specifies f=58.0216mm, FNO1.450, half-field20.86°, image height21.6mm, total track92.20380mm and BF38.70000mm. Numerical controls use f/1.45; f/1.4 remains the marketing designation.

## Optical Architecture

The four groups have source focal lengths +90.95005, −104.24131, −84.89588 and +35.19680mm. Ga is the front positive aspherical singlet. Gb combines the cemented Lb1 pair with negative meniscus Lb2. Gc is a negative cemented pair after the stop. Gd is a positive cemented triplet with an aspherical exit surface.

The cemented pairs and triplet remain intact. Surface8 is the stop, so there are15 source surfaces including the stop, not an additional sixteenth surface. Group roles below are qualitative optical interpretations; individual focal lengths are isolated-medium calculations in air.

## Element-by-Element Analysis

### La — Pos. Meniscus (1× Asph)

nd = 1.74443, νd = 49.53. Glass: Unidentified glass (nd 1.74443, vd 49.53). Isolated-in-air focal length ≈ +91.0 mm.

Front positive collector with aspherical correction for spherical aberration and lower coma. Ga (Group 1, positive).

### Lb1p — Positive Meniscus

nd = 1.75500, νd = 52.34. Glass: J-LASKH2 (Hikari, inferred coordinate counterpart). Isolated-in-air focal length ≈ +59.8 mm.

Front element of cemented chromatic corrector doublet. Gb (Group 2, negative).

### Lb1n — Negative Meniscus

nd = 1.48749, νd = 70.31. Glass: S-FSL5 (OHARA, inferred coordinate counterpart). Isolated-in-air focal length ≈ -99.0 mm.

Rear element of chromatic corrector doublet; low dispersion controls primary color. Gb.

### Lb2 — Negative Meniscus

nd = 1.68893, νd = 31.16. Glass: E-FD8 (HOYA, inferred coordinate counterpart). Isolated-in-air focal length ≈ -51.6 mm.

Classical Gauss diverging meniscus; strongest negative element in front half. Petzval field flattening. Gb.

### Lcn — Biconcave Negative

nd = 1.72825, νd = 28.46. Glass: H-ZF4A (CDGM, inferred coordinate counterpart). Isolated-in-air focal length ≈ -22.3 mm.

Front element of post-stop corrector doublet; high dispersion for chromatic balancing. Gc (Group 3, negative).

### Lcp — Biconvex Positive

nd = 1.88300, νd = 40.77. Glass: S-LAH58 (OHARA, inferred coordinate counterpart). Isolated-in-air focal length ≈ +32.0 mm.

Rear element of post-stop corrector; nd = 1.883 drives Petzval correction. Gc.

### Ldp1 — Biconvex Positive

nd = 1.88300, νd = 40.66. Glass: S-LAH58 (OHARA, approximate coordinate counterpart). Isolated-in-air focal length ≈ +37.1 mm.

Front positive of rear power triplet; high index for Petzval control. Gd (Group 4, positive).

### Ldn — Biconcave Negative

nd = 1.53172, νd = 48.78. Glass: J-LLF6 (Hikari, inferred coordinate counterpart). Isolated-in-air focal length ≈ -41.4 mm.

Central negative of rear triplet; symmetric biconcave shape factor ≈ 0 optimizes coma and spherical aberration balance. Gd.

### Ldp2 — Biconvex Positive (1× Asph)

nd = 1.74443, νd = 49.53. Glass: Unidentified glass (same source coordinates as La). Isolated-in-air focal length ≈ +38.6 mm.

Rear positive of triplet with aspherical exit surface; corrects upper coma, sagittal coma, spherical aberration, and distortion. Gd.

## Glass Identification and Selection

The patent gives nd/νd, not commercial glass names. La and Ldp2 share1.74443/49.53 and remain unidentified. Other names are inferred catalog counterparts. Ldp1's source νd40.66 differs from the40.77 counterpart used for Lcp, so its S-LAH58 assignment is approximate; the source values remain unchanged.

Ldn now has a compatible inferred J-LLF6 counterpart at1.53172/48.78. The earlier unmatched KZFS2-family and positive-ΔPgF assertions were unsupported. The new label enables the compatible catalog dispersion curve without asserting a patent-measured APD value or historical supplier. The prior inferred-APD flag is removed.

## Focus Mechanism

Paragraph75 describes focusing by extending all groups, while allowing alternative internal focusing arrangements. The viewer uses unit movement including the stop. Example2 supplies only the infinity prescription; no finite station or specific drive mechanism is given.

The existing0.58m endpoint is a modeling choice. Its rear gap increases38.700→46.003mm, moving every optical surface7.303mm objectward relative to the fixed image plane. Independent paraxial propagation gives0.579976m object-to-image distance and magnification approximately−0.125866, consistent with the endpoint to0.025mm. This is a reconstructed station, not a quoted patent minimum-focus distance. Intermediate motion is interpolated.

## Aspherical Surfaces

Paragraph84 equation(a) uses1−κh²/R² under the square root. The standard conic constant is K=κ−1. Both stored conversions already agree with the original equation and remain unchanged.

| Parameter | S1A | S15A |
|---|---:|---:|
| Source κ | 0.5721 | 14.1597 |
| Standard K | −0.4279 | 13.1597 |
| A4 | 1.10084e−7 | 8.65514e−6 |
| A6 | 6.21998e−10 | 4.15194e−9 |
| A8 | −4.25694e−13 | 1.25812e−11 |
| A10 | 0 | 1.22728e−14 |
| A12, A14 | 0 | 0 |

The rear conic has a finite domain near20.54mm radius; its adopted rim remains inside it. The source does not choose a particular asphere manufacturing process for Example2.

## Diagram Dimensions and Modeling Limits

Figure3 was inspected at600dpi, using the53.5038mm first-to-last vertex span for scale. Inferred optical radii are approximately23.5mm for La,19.8mm for Lb1,16.9mm for Lb2 and16.8mm for both rear cemented assemblies. Optical rims were separated from label leaders and group brackets; several automated envelope readings were contaminated by those annotations. These dimensions replace earlier ray-based estimates and pass surface-clearance and image-circle checks. They are not published clear-aperture measurements.

Example2 has no cover/filter rows. Its38.7mm rear gap is retained, with no extra sensor-glass surfaces. The candidate association and reconstructed finite focusing remain explicitly distinct from the patent's numerical infinity data.

## Sources

- [JP2013-019993A](https://patents.google.com/patent/JP2013019993A/ja): original local PDF; titlep.1, focus paragraph75p.12, equation(a)p.13, Tables4–5p.17, Figure3p.23.
- Local glass catalog: inferred coordinate counterparts, including Hikari J-LLF6; not patent supplier identifications.
