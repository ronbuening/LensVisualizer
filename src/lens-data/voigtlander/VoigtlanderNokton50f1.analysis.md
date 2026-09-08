# Voigtländer NOKTON 50mm f/1.0 — Patent Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2023-063766 A — Optical Lens System
**Filed:** October 25, 2021
**Published:** May 10, 2023
**Inventor:** Kazuhiro Ogino
**Applicant:** Cosina Co., Ltd.
**Embodiment analyzed:** Example 1, Tables 1–2 and Figure 1

The nine-element, seven-group arrangement, three aspherical surfaces, nominal 50 mm focal length and f/1 aperture support the association with the NOKTON 50mm f/1.0. The patent model does not establish an identical production prescription or focusing mechanism for every mount variant.

The displayed 47.9° field angle, 12 blades, f/16 minimum aperture and 0.45 m minimum focus are Nikon Z production specifications from [Cosina](https://www.cosina.co.jp/voigtlander/en/z-mount/nokton-50mm-f1-aspherical/). They are distinguished from the patent's infinity prescription below. In particular, the modeled focus movement is inferred.

## Optical Architecture

G1 contains three air-spaced menisci before the stop: two positive and one negative. G2 contains the L4 negative/positive cemented doublet, positive L5, the L6 positive/negative cemented doublet, and the rear negative aspherical meniscus L7. These two optical groups are distinct from the seven physical lens groups counted in the specification.

A d-line paraxial trace of Table 1 gives EFL 49.9977 mm and BFL 18.7323 mm. The table's final air gap is 18.74 mm and total first-vertex-to-image track is 83.76 mm. The small BFL difference is consistent with rounded prescription entries. The diaphragm lies after surface 6; its working opening is calculated by the viewer from the nominal f/1 aperture.

## Element-by-Element Analysis

Element focal lengths below are isolated **thin-lens estimates in air**, derived from the two vertex radii and patent index. They are not the elements' embedded powers or separate patent measurements. Catalog names identify spectral proxies, not established production suppliers.

### L1 — Pos. Meniscus (1× Asph)

nd = 1.90525, νd = 35.04. Glass: S-LAH93 (OHARA, catalog equivalent; production supplier unspecified). Thin-lens f ≈ +119.3 mm.

Front positive meniscus; its object-side surface is aspherical.

### L2 — Positive Meniscus

nd = 1.90043, νd = 37.37. Glass: TAFD37A (HOYA, catalog equivalent; production supplier unspecified). Thin-lens f ≈ +60.2 mm.

Second extreme-index power element; shares G1 refractive load with L1.

### L3 — Negative Meniscus

nd = 1.80518, νd = 25.46. Glass: S-TIH6 (OHARA catalog equivalent; production supplier unspecified). Thin-lens f ≈ -37.2 mm.

G1 negative element; Petzval corrector and chromatic balancer (νd = 25.46).

### L4f — Biconcave Negative

nd = 1.76182, νd = 26.61. Glass: S-TIH14 (OHARA, catalog equivalent; production supplier unspecified) / SF14-family dense flint. Thin-lens f ≈ -21.2 mm.

Cemented in L4; primary chromatic lever — strongest negative power in system (f = −21.2 mm).

### L4r — Biconvex Positive

nd = 1.88300, νd = 40.69. Glass: S-LAH58 (OHARA catalog equivalent; production supplier unspecified). Thin-lens f ≈ +23.3 mm.

Cemented in L4; high-index positive partner, same patent nd/vd as L5 and L6f.

### L5 — Biconvex Positive

nd = 1.88300, νd = 40.69. Glass: S-LAH58 (OHARA catalog equivalent; production supplier unspecified). Thin-lens f ≈ +54.7 mm.

Standalone positive element; power-sharing with L4r and L6f (same patent nd/vd).

### L6f — Biconvex Positive

nd = 1.88300, νd = 40.69. Glass: S-LAH58 (OHARA catalog equivalent; production supplier unspecified). Thin-lens f ≈ +36.1 mm.

Cemented in L6; field and chromatic correction, third element with the same patent nd/vd.

### L6r — Biconcave Negative

nd = 1.55298, νd = 55.07. Glass: J-KZFH4 (HIKARI catalog-equivalent to patent 553551; production supplier unspecified). Thin-lens f ≈ -52.3 mm.

Cemented in L6; low-index negative partner for field curvature correction.

### L7 — Neg. Meniscus (2× Asph)

nd = 1.80835, νd = 40.55. Glass: L-LAH84 (OHARA catalog-equivalent; patent supplier unspecified). Thin-lens f ≈ -154.6 mm.

Rear negative meniscus with two patent aspheres; f/f_le = −0.3234.

## Glass Identification and Selection

Table 1 supplies nd and νd for all nine elements. It supplies no catalog designations, melt certificates, partial-dispersion values or manufacturing suppliers. S-LAH93, TAFD37A, S-TIH6, S-TIH14, S-LAH58, J-KZFH4 and L-LAH84 are the site's coordinate-compatible catalog proxies. The original patent nd/νd remain authoritative; the spectral curves beyond those constraints are estimates.

L4r, L5 and L6f share the same patent nd/νd. This does not prove that production used the same melt or supplier. No element is marked patent-confirmed APD: `apd: false` records lack of source evidence, not a measured absence of anomalous dispersion. Index/Abbe matches do not establish custom-glass procurement, production volumes, cost or manufacturing process.

## Focus Mechanism

The source gives the infinity prescription only. Cosina describes a floating mechanism for the Nikon Z product, but publishes no internal-spacing schedule on the cited product page. The viewer therefore uses an explicitly inferred **unit-extension approximation**: all nine elements and the stop translate equally toward the object, with the image plane fixed. No internal gap changes, and there is no zoom control for this prime.

| Quantity | Infinity | Modeled close focus |
|---|---:|---:|
| Object-to-image distance | ∞ | 450 mm |
| Surface 17A to image | 18.74 mm | 26.134899233 mm |
| Objectward optical-unit travel | 0 mm | 7.394899233 mm |
| First vertex to image | 83.76 mm | 91.154899233 mm |

The close endpoint solves the paraxial finite-conjugate condition through the complete Table 1 prescription. The object-to-first-vertex distance is 450 − 91.154899233 = 358.845100767 mm. Intermediate slider positions interpolate the extension; their distance readout is approximate, as is finite-focus aberration performance. This does not reconstruct the actual floating-group paths or production magnification. The earlier 3.85 mm extension was inconsistent with the 0.45 m label.

## Aspherical Surfaces

Table 2 specifies the standard conic-plus-even-polynomial sag:

$$z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)h^2/R^2}}+\sum_{j=2}^{7} A_{2j}h^{2j}.$$

Units are mm. The patent's conic constant is used directly; no κ-to-K conversion is needed. These coefficients drive both the diagram and exact tracing.

| Coefficient | Surface 1A | Surface 16A | Surface 17A |
|---|---:|---:|---:|
| K | -0.02238 | -20 | 20 |
| A4 | -1.0281e-06 | 2.4371e-05 | 3.37528e-05 |
| A6 | 6.04388e-10 | -9.23649e-08 | -2.40831e-08 |
| A8 | -4.31143e-12 | 1.14851e-09 | -1.16539e-10 |
| A10 | 5.62572e-15 | -1.18851e-11 | 1.9524e-13 |
| A12 | -3.29805e-18 | 5.37423e-14 | -7.7965e-16 |
| A14 | -5.97602e-23 | -9.17045e-17 | 2.20734e-18 |

Surface 1A flattens relative to its vertex-radius sphere toward the edge. Surfaces 16A and 17A have positive departures at the displayed 13 mm rims. Calculated departures are −911.16 µm at h = 27 mm for 1A, +439.66 µm at h = 13 mm for 16A, and +817.15 µm at h = 13 mm for 17A. These are surface-sag differences, not wavefront error or a prescribed polishing process. Cosina identifies a ground aspherical front element in the production Z lens; the patent coefficient table alone does not establish how each surface is manufactured.

## Diagram Dimensions and Limits

Table 1 has no clear-aperture column. Semi-diameters are inferred from Figure 1 optical rims, subject to physical surface and image-circle checks. At 600 dpi, scaling the 65.02 mm first-to-last vertex span gives about 0.0443 mm per pixel. L5 is about 18 mm in semi-diameter, the L6 cemented interface about 15.5 mm, and L7 about 13 mm. Mechanical shoulders and annotation lines are excluded.

Surface 15 is conservatively set to 12.2 mm to retain the validator's clearance margin across its 1.42 mm air gap to surface 16A. Existing front apertures retain a ray-envelope allowance above the schematic rims; the drawing does not specify exact manufactured clear apertures. All displayed profiles pass the renderer's trim checks. The drawing-derived dimensions remain estimates, even where the UI formats them numerically.

## Sources

- [JP2023063766A](https://patents.google.com/patent/JP2023063766A/en), local patent PDF: Table 1 and Table 2 on PDF page 6, Figure 1 on PDF page 10. Primary prescription and geometry evidence.
- [Cosina NOKTON 50mm F1 Aspherical, Nikon Z](https://www.cosina.co.jp/voigtlander/en/z-mount/nokton-50mm-f1-aspherical/): production specifications and floating-focus/ground-asphere descriptions.
