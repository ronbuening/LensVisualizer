# AF NIKKOR 28mm f/1.4D — Patent Embodiment 1

## Patent Reference and Design Identification

**Patent:** US 5,315,441 A, Inverse Telephoto Large Aperture Wide Angle Lens

**Inventors:** Kenji Hori and Wataru Tatsuno

**Assignee:** Nikon Corporation

**Priority:** January 16, 1992, JP4-005862

**Filed:** September 13, 1993

**Granted:** May 24, 1994

**Embodiment analyzed:** Embodiment 1, Table 1 and Figure 1

The source example has eleven elements in eight air-separated components, focal length 28.6208mm, f/1.41 and full field 75.37°. The catalog associates it with the AF28mm f/1.4D; this is a patent example rather than a measured production prescription. The source near station is beta−0.1, not the marketed minimum-focus endpoint. Numerical controls use the example's values.

## Optical Architecture

Four optical groups provide floating focus: negative G1, positive G2, negative G3 and positive G4. G1 is the front meniscus. G2 contains two singlets, cemented L4 and positive L5 before the stop. G3 contains cemented L6 and aspheric L7. G4 is cemented L8. The three cemented doublets account for the difference between eleven elements and eight air-separated components.

Table1 contains nineteen refracting surfaces. The modeled twentieth row is an inferred aperture stop, not a cover plate or filter. There are no separate cover/filter rows in this source prescription. The final source air distances are retained without a plate conversion.

## Element-by-Element Analysis

The following focal lengths are computed from each medium's center thickness, index and two vertex radii, isolated in air. They are not the powers of embedded cemented members or complete groups.

| Element | nd | νd | Glass interpretation | Isolated FL (mm) |
|---|---|---|---|---|
| L1 | 1.51680 | 64.10 | BSC7 / BK7 type (HOYA BSC7 nd=1.51680, νd=64.20) (inferred coordinate counterpart) | -79.66 |
| L2 | 1.77279 | 49.40 | S-LAH66 (OHARA) — near nd=1.77250/νd=49.62 (inferred coordinate counterpart) | 75.40 |
| L3 | 1.48749 | 70.40 | FK5 / S-FSL5 type (Schott FK5 nd=1.48749, νd=70.41) (inferred coordinate counterpart) | -65.08 |
| L4a | 1.51860 | 69.90 | J-PKH1 (Hikari, 519699) (inferred coordinate counterpart) | 40.58 |
| L4b | 1.51454 | 54.60 | KF3 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified) (inferred coordinate counterpart) | -29.46 |
| L5 | 1.80411 | 46.50 | S-LAH65V (OHARA) — near nd=1.80400/νd=46.58 (inferred coordinate counterpart) | 30.79 |
| L6a | 1.74810 | 52.30 | 748523 — E-LAKH1 catalog equivalent (Hikari; production supplier unspecified) (inferred coordinate counterpart) | 120.71 |
| L6b | 1.75520 | 27.60 | Dense flint (near OHARA S-TIH4, nd=1.75520, νd=27.53) (inferred coordinate counterpart) | -27.09 |
| L7 | 1.77279 | 49.40 | S-LAH66 (OHARA) — same as L2 (inferred coordinate counterpart) | 95.10 |
| L8a | 1.80411 | 46.50 | S-LAH65V (OHARA) — same as L5 (inferred coordinate counterpart) | 25.52 |
| L8b | 1.86074 | 23.00 | J-SFH2 (Hikari coordinate match) (inferred coordinate counterpart) | -105.12 |

L1 supplies negative entrance power for the retrofocus form. G2 supplies positive power before the stop, with L3 and L4b contributing negative power. L4b is biconcave, not a negative meniscus. G3 combines the negative L6 assembly with weak positive aspheric L7. L8a's weak but finite front curvature makes it biconvex rather than plano-convex. Detailed aberration allocations require the full system, so qualitative roles do not establish isolated performance or manufacturing choices.

## Glass Identification and Selection

The source nd/νd values are authoritative. All named glasses are qualified coordinate counterparts; a compatible catalog curve does not establish Nikon's production supplier or material chemistry. L2 and L7 share one source coordinate, as do L5 and L8a. The existing compatible counterparts are retained with explicit inference labels. The prescription supplies no partial-dispersion data establishing anomalous dispersion for these rows. Former cost, composition and manufacturing-process assertions are removed.

## Focus Mechanism

| Source interval | Infinity (mm) | Beta−0.1 (mm) |
|---|---|---|
| D2 | 13.9000 | 10.3752 |
| D11, total | 12.5500 | 12.1975 |
| D16 | 0.5000 | 0.8525 |
| BF | 38.1031 | 41.6279 |

With the image plane fixed, G1 remains fixed. G2 and its stop move3.5248mm toward the object; G4 moves the same amount. G3 moves3.8773mm objectward, a ratio of approximately1.100. All source endpoints are retained; intermediate configurations are interpolated.

Figure1 places the stop approximately4.65mm after S11. This inferred split replaces5mm, without changing source D11: stop-to-G3 is7.9000→7.5475mm. Its readout is labeled “Stop–G3” rather than incorrectly claiming to be the entire D11 interval. The axial stop position is inferred, not tabulated.

An independent reduced-angle matrix calculation gives infinity EFL28.620503mm and near EFL29.480708mm. At the published near gaps, magnification is−0.1000181 and object distance from the first vertex is276.179526mm. Adding the invariant120.8531mm object-side-vertex-to-image track gives **0.397032626m**. This replaces the unsupported0.35m endpoint label. It does not extend the source travel to a production specification.

## Aspherical Surfaces

The equation on original PDF p.12 uses **1−k h²/R²**, with source k=1.974. The engine uses1−(1+K)h²/R², so standard **K=0.974**, correcting the former1.974. The four polynomial coefficients on S16 remain A4=1.644×10⁻⁵, A6=1.610×10⁻⁸, A8=1.721×10⁻¹¹ and A10=−6.229×10⁻¹⁴. Vertex radius remains−46.473mm. No assertion about grinding or molding follows from this equation.

## Semi-Diameter Estimation Notes

Original Figure1 on PDF p.2 was rendered at600dpi, rotated and calibrated using the82.75mm first-to-last refracting-vertex span. Optical rims exclude mechanical shoulders and leaders. The inferred adopted surface semi-diameters, including the stop, are27.5,22.3,20.5,20.5,18,15.5,14.3,13.5,16.7,18.3,18.3,13.6,14.8,14.8,15.8,16.4,16.4,17,17,17.5mm.

Two figure-oriented trials conflict with numerical geometry: S7 at14.8mm exceeded the S6–S7 air-gap intrusion allowance; L8a at17.5mm produced negative edge thickness of about−0.304mm. Their constrained adopted values are14.3 and17mm respectively. These limitations remain explicit rather than implying exact figure reproduction. Adopted rims pass surface and image-circle checks and show no hidden runtime trimming at infinity, midpoint or near.

## Sources

- Original local US5315441.pdf: Figure1 p.2, Table1 and asphere equation p.12 (columns5–6).
- [US5315441A publication](https://patents.google.com/patent/US5315441A/en).
