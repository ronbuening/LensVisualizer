# RICOH GR IV 18.3mm f/2.8 — Patent Model

## Patent Reference and Design Identification

**Patent:** JP 2025-069516 A

**Inventor:** Takahiro Nakayama

**Assignee:** Ricoh Co., Ltd.

**Filed:** 2023-10-18

**Published:** 2025-05-01

**Embodiment analyzed:** Numerical Example 2, Figure 2, Tables 5–8

**Title:** Imaging Lens, Interchangeable Lens, Imaging Device, and Information Processing Device

The diagram associates Example 2 with the GR IV through its seven elements,
five air-separated components, three aspheric elements, 18.35 mm focal length
and f/2.89 aperture. This is a patent model; the association does not prove
an identical production prescription or glass supply. No dimensional scaling
is applied. The product label 18.3mm f/2.8 remains separate from source values.

| Source quantity | Example 2 |
|---|---|
| Focal length | 18.35 mm |
| F-number | 2.89 |
| Half field | 38.0° |
| Maximum image height | 14.13 mm |
| Elements / air-separated components | 7 / 5 |
| Aspheric surfaces / elements | 5 / 3 |

The original PDF's numerical data and coefficients are on p18; the sag
convention is on p15, and Figure 2 is on p31. The source's BF = 0.70 mm
means the gap after the final cover plate, not the last lens-to-image distance.

## Optical Architecture

Positive G1 and G2 sit on opposite sides of the aperture stop. Negative G3
is a single rear meniscus. G1 consists of the front negative singlet and a
cemented doublet; G2 consists of another doublet and a positive meniscus.
The two groups form the moving front-focus assembly. G3 stays fixed relative
to the image plane (¶0035).

The patent calls the power arrangement around the stop approximately
symmetric. Its two biconvex air lenses, between L11/L12 and L22/L23,
contribute to compactness and aberration correction (¶0034–0042). These air
lenses name shaped spaces, not additional glass components. The source stop
spacings, d5 = 1.14 mm and d6 = 1.20 mm, are retained.

## Element-by-Element Analysis

### L11 — Negative Meniscus with Aspheric Rear

nd = 1.68948, νd = 31.02. Glass: L-TIM28 (OHARA, patent named).
Calculated isolated-element f ≈ −104.1 mm.

The front meniscus has its convex face toward the object. Its rear asphere
shapes the peripheral beam entering the first doublet. The patent associates
the bounding surfaces of this first air lens with spherical aberration,
astigmatism and front-element diameter control (¶0038–0039).

### L12 and L13 — Front Cemented Doublet

L12: nd = 1.59270, νd = 35.31. Glass: S-FTM16 (OHARA, patent named).
Calculated isolated-element f ≈ −9.3 mm.

L13: nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA, patent named).
Calculated isolated-element f ≈ +7.1 mm.

The biconcave negative member and biconvex positive member share surface 4.
The high-index positive member supplies much of G1's convergence. The
individual focal lengths describe each shape in air, not its embedded power
at a cemented interface.

### L21 and L22 — Rear Cemented Doublet

L21: nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA, patent named).
Calculated isolated-element f ≈ +6.9 mm.

L22: nd = 1.69895, νd = 30.13. Glass: S-TIM35 (OHARA, patent named).
Calculated isolated-element f ≈ −8.8 mm.

The positive member faces the stop. The more dispersive negative member
forms the object-side boundary of the second air lens and provides a
chromatic balancing partner. Their cemented interface is surface 8.

### L23 — Positive Meniscus with Two Aspheres

nd = 1.76802, νd = 49.24. Glass: MC-TAF101-100, inferred catalog counterpart.
Calculated isolated-element f ≈ +127.7 mm.

This weak positive member has aspheres on both faces. Its object-side surface
bounds the second air lens; the patent connects that air space with exit-pupil
control and off-axis correction. Table 5's printed glass name conflicts with
its numerical coordinates, as detailed below.

### L31 — Fixed Negative Meniscus with Two Aspheres

nd = 1.80139, νd = 45.45. Glass: M-TAF31, inferred catalog counterpart.
Calculated isolated-element f ≈ −46.1 mm.

G3 remains stationary while the front assembly moves. Its negative power
changes the focusing sensitivity; its aspheres address the changing ray
heights at different conjugates (¶0083–0085). The source quotes G3 focal
length −46.28 mm, slightly different from the result from its rounded
individual surface data; neither number is silently substituted for the other.

## Glass Identification and Dispersion

Table 5 explicitly names glasses, but two names disagree with the listed
nd and νd. The model preserves the numerical coordinates and distinguishes
compatible catalog counterparts from the source's printed identities.

| Elements | Table 5 name | Viewer interpretation |
|---|---|---|
| L11 | OHARA L-TIM28 | Retained source name |
| L12 | OHARA S-FTM16 | Retained source name |
| L13, L21 | OHARA S-LAH58 | Retained source name |
| L22 | OHARA S-TIM35 | Retained source name |
| L23 | OHARA S-TIM35 | Conflicts with 1.76802 / 49.24; MC-TAF101-100 counterpart inferred |
| L31 | HOYA M-TAF101 | Conflicts with 1.80139 / 45.45; M-TAF31 counterpart inferred |

S-TIM35 agrees with L22's 1.69895 / 30.13, not L23. The L31 coordinates
match the catalog's M-TAF31. These conflicts are apparent source naming
errors; the catalog matches do not prove what glass the inventor intended
or what a production camera uses. No APD designation is asserted.

## Focus Mechanism and Omitted Plates

Paragraph 0035 explicitly describes G1 and G2 moving integrally toward the
object while G3 stays fixed. The stop moves with the front assembly. The
previous analysis's imageward direction was incorrect. D23 therefore grows
for close focus; the last-lens-to-image distance remains constant.

Example 2 publishes infinity data without a finite numerical focus station.
The viewer's 0.12 m object-to-image endpoint is an inferred paraxial scenario,
not a patent macro-mode specification. Full reduced-angle propagation gives:

| Quantity | Adopted model |
|---|---|
| Infinity D23 | 3.100000 mm |
| D23 at 0.12 m object-to-image conjugate | 5.945331 mm |
| Objectward front-assembly travel | 2.845331 mm |
| Fixed last-lens-to-image equivalent air gap | 8.935624 mm |

The former 5.17 mm endpoint did not image the labeled conjugate through the
full prescription. Intermediate gaps are interpolated and distance labels
are approximate. The movement plot distinguishes G1, G2 and fixed G3;
it does not imply independent movement of G1 and G2. There is no zoom.

The two plane plates following surface 13 are omitted. The equivalent gap is
6.976 + 0.77/1.562 + 0.30 + 0.70/1.50 + 0.70 = 8.935624 mm.
Unlike a physical-distance sum, this preserves the paraxial propagation of
the published plate stack. The previous 8.94 mm was a rounded equivalent.
The 0.70 mm source BF is only the final air space after the second plate.

## Aspherical Surfaces

The source equation uses the standard **1 + K** conic convention (¶0088).
All five coefficient rows in Table 6 match the stored values; no conversion
or polynomial refit is applied. Unlisted higher terms remain zero.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---|---|---|---|---|---|---|
| 2 | 0 | 1.6766e−4 | 6.0373e−6 | −1.8145e−7 | 1.2627e−8 | −2.8330e−10 | 5.1394e−12 |
| 10 | 0 | −2.4437e−4 | 4.7283e−6 | −2.0379e−7 | 2.4790e−9 | 0 | 0 |
| 11 | 0.31036 | 6.2559e−5 | 2.5442e−6 | 1.4919e−7 | −2.1728e−9 | 0 | 0 |
| 12 | 8.82985 | −5.7547e−4 | 5.3727e−6 | 3.7740e−8 | 0 | 0 | 0 |
| 13 | 0 | −5.5557e−4 | 6.4933e−6 | −1.5819e−8 | 2.7958e−11 | −8.3479e−13 | 1.0084e−14 |

The front asphere and paired rear aspheres distribute peripheral correction
across the assembly. The fixed last element has especially strong peripheral
curvature; its radial extent must remain within the conic domain and
inter-element clearance constraints.

## Diagram Dimensions and Limits

Figure 2 was inspected at 600 dpi and calibrated against its 18.58 mm
first-to-last vertex span. The front singlet rims are estimated at 6.0 mm,
the front doublet at 5.0 mm with a 4.6 mm exit, the rear doublet at
4.5/4.6 mm, the positive meniscus at 5.5 mm, and G3 at 8.0 mm.
These optical-rim estimates exclude leaders, brackets and the two filter
plates. They are not tabulated manufacturing apertures.

A 4.8 mm rear-doublet exit trial infringed the allowed clearance to surface
10 and was rejected. The adopted 4.6 mm exit passes surface validation;
the complete model also passes the image-circle floor check. The revised
front singlet is smaller than the old 7.8 mm rim and follows the figure's
proportion relative to the large fixed rear element.

## Source

[JP 2025-069516 A](https://patents.google.com/patent/JP2025069516A/en),
original PDF: focus ¶0035 p8, conic equation ¶0088 p15, Tables 5–7 p18,
Table 8 p19, Figure 2 p31. Downloaded into the local ignored patent archive.
