# SONY VARIO-TESSAR T* E 16-70mm f/4 ZA OSS

## Patent Reference and Design Identification

**Patent:** US 9,538,088 B2\
**Application number:** US 14/212,235\
**Priority:** JP 2013-086358, filed April 17, 2013\
**Filed:** March 14, 2014\
**Granted:** January 3, 2017\
**Inventor:** Tadashi Yanagisawa\
**Assignee:** Sony Corporation\
**Title:** *Zoom Lens and Imaging Apparatus*\
**Embodiment analyzed:** Numerical Example 1

The prescription transcribes Numerical Example 1 of US 9,538,088 B2. The patent describes a six-functional-group zoom with power sequence positive–negative–positive–positive–negative–positive, axial motion of all six functional groups during zooming, axial focusing by the negative fifth group, and transverse image-blur compensation by a sub-group of the fourth group. Numerical Example 1 is tabulated in Tables 1–3, with its wide-end optical section shown in Figure 1. [1, pp. 5–12]

The selected production correlation is the Sony Vario-Tessar T* E 16-70mm F4 ZA OSS (SEL1670Z). This is an authoring correlation rather than an identification stated by the patent: US 9,538,088 B2 never names SEL1670Z. The correlation is supported by several convergent features:

1. The final data model contains 16 physical glass elements in 12 air-separated physical groups. Sony specifies the production lens as 12 groups / 16 elements. [2]
2. The patent prescription has six aspherical surfaces distributed over four physical elements (L21, L24, L41, and L51). Sony specifies four aspherical elements, including one AA element, and its production lens-configuration diagram marks the AA and other aspherical positions. Comparison by element order and silhouette supports an inferred mapping of the AA element to L21 and the other aspherical elements to L24, L41, and L51; Sony does not use the patent's Lxx slot labels. [1, pp. 10–12] [3]
3. L43 has `nd = 1.49700` and `νd = 81.61`, the only very-high-Abbe coordinate in the prescription. Sony's production lens-configuration diagram places the single ED element at the corresponding position in the sequence, supporting an inferred L43 correspondence; Sony does not use the patent's Lxx slot labels. [3]
4. The patent's design focal lengths are 16.48, 35.00, and 67.90 mm at F/4.12, while Sony markets the lens as 16–70 mm F4. The data file therefore keeps marketing and design values separate rather than scaling the prescription. [1, Table 3] [2]
5. The patent's L44/GR4r member moves perpendicular to the optical axis for image-blur compensation, corresponding at the mechanism level to Sony's Optical SteadyShot specification. The patent does not name the production OSS implementation. [1, pp. 5, 10–12] [2]
6. The aberration diagrams for Numerical Example 1 use a maximum image height of 14.2 mm. That image field is consistent with the APS-C format for which Sony specifies SEL1670Z. [1, Figs. 3–11] [2]

The data file uses the exact patent prescription without uniform scaling (`s = 1.0`). Consequently, radii, thicknesses, focal-plane coordinates, and aspheric coefficients retain their source units and values; no transformation of the form `A_p,scaled = A_p,patent / s^(p-1)` is applied. The marketed 16–70 mm F4 values remain metadata, while the modeled optical values are 16.48–67.90 mm and F/4.12.

The patent's rendered Table 1 resolves three OCR-sensitive radii as 11.384 mm at surface 7, 13.031 mm at surface 15, and 18.387 mm at surface 22. These are corrections to OCR transcription, not corrections to the patent itself. No numerical source error was found that required altering a patent value. A high-resolution Figure 1 rim review was also used to enlarge the visibly stepped GR2-GR6 clear-aperture model while retaining the project's edge-thickness, rim-slope, and shared-gap limits.

## Optical Architecture

The design is a six-functional-group zoom rather than a classical Tessar-derived four-element architecture despite the Vario-Tessar product branding. Its functional power sequence is `+ − + + − +`: GR1 positive, GR2 negative, GR3 positive, GR4 positive, GR5 negative, and GR6 positive. Independent thick-system calculations from the final data give isolated-air functional-group focal lengths of +77.1812, −13.4138, +69.3519, +17.4479, −20.9828, and +54.5299 mm, respectively. Those isolated group powers describe each group removed from the complete system; they are not additive in-situ contributions to the zoom's system EFL.

The 16 elements form 12 conventional air-separated physical groups: four cemented pairs plus eight singlets. The four cemented pairs are J1 (L11+L12), J2 (L22+L23), J3 (L31+L32), and J4 (L42+L43). Their independently computed isolated-air net focal lengths are +483.3194, +52.2971, +24.1411, and −9111.8119 mm, respectively. In particular, the near-zero net power of J4 must not be confused with the much stronger standalone powers of L42 and L43 or with the in-situ behavior of the complete positive GR4.

GR1 is the large positive front group. Its cemented L11/L12 pair has weak positive net power in isolation, followed by the positive L13. GR2 supplies the strongest negative functional-group power and contains three of the first six aspherical surfaces. The aperture stop lies in air between GR2 and GR3 at patent surface 13. GR3 returns the system to positive group power with the L31/L32 cemented pair followed by L33. GR4 is a positive relay/correction group containing L41, the nearly afocal L42/L43 cemented pair, and the positive L44 stabilization member. GR5 is the single negative biconcave L51 and is the sole axial focus group. GR6 is the final positive biconvex L61.

All six functional groups move axially as the lens changes from wide to tele according to the patent. When their movement is normalized to the fixed image plane, the final-data calculation shows all six group fronts shifting objectward from the wide state to the tele state; GR4 and GR6 have the same net wide-to-tele shift, in agreement with the patent's provision that these groups may travel together. This statement concerns zoom kinematics, not optical power classification.

Under the project's quantitative terminology, the lens is neither a telephoto construction nor a retrofocus construction at any of the three published states. The first-surface-to-image track divided by EFL is 5.5167, 3.0835, and 1.9133 at wide, middle, and tele, all greater than one; the published rear spacings are also smaller than EFL at all three states. The patent's phrase “telephoto end state” denotes the long-focal-length zoom endpoint and is not used here as an architectural classification.

## Element-by-Element Analysis

### L11 — Negative Meniscus

`nd = 1.84666`, `νd = 23.78`. Glass: `847238 — dense flint class`. Standalone `f = −144.6528 mm`.

L11 is the object-side member of the J1 cemented pair in GR1. The patent describes it as a negative meniscus with its convex surface toward the object. Its standalone negative power is modest compared with the strong powered elements deeper in the zoom. Cemented to L12, however, it participates in a J1 unit whose isolated-air net focal length is +483.3194 mm; the sign reversal between the standalone L11 and the cemented pair illustrates why the element's own focal length should not be treated as its in-situ contribution to the complete lens. [1, p. 10]

The dense-flint-class annotation is a catalog-coordinate classification, not a statement that Sony purchased a particular vendor's melt. The same `nd/νd` coordinate appears again at L23.

### L12 — Positive Meniscus

`nd = 1.62041`, `νd = 60.34`. Glass: `620603 — dense crown class`. Standalone `f = +109.5844 mm`.

L12 is the positive partner of L11 in J1. The patent describes a positive meniscus with its convex surface toward the object. Its higher Abbe number contrasts strongly with the low-Abbe L11 coordinate, while the cemented interface removes an intervening air surface. The data therefore preserves the pair as two physical elements joined at a shared refracting surface rather than as two air-separated lenses. [1, p. 10]

The calculated J1 net power is much weaker than either standalone component. This is an isolated-air result for the cemented pair; in GR1, the pair works together with L13 and the surrounding separations.

### L13 — Positive Meniscus

`nd = 1.72916`, `νd = 54.67`. Glass: `729547 — lanthanum crown class`. Standalone `f = +89.8363 mm`.

L13 is the second physical group within GR1 and completes the patent's positive first functional group. Its positive meniscus form, convex toward the object, adds positive power after the weakly positive J1 cemented unit. [1, p. 10]

The lanthanum-crown-class annotation reflects the stored coordinate and catalog audit. It is intentionally class-level because the patent supplies no glass manufacturer.

### L21 — Negative Meniscus, Two Aspherical Surfaces

`nd = 1.85135`, `νd = 40.10`. Glass: `851401 — high-index low-dispersion molding-glass class`. Standalone `f = −15.9168 mm`.

L21 begins the strongly negative GR2 and has the shortest-magnitude negative standalone focal length in that group. Both of its surfaces, 6A and 7A, are aspherical. The rear surface has the unusually short paraxial radius of +11.384 mm, making this element a dominant geometric feature of the negative group. [1, Tables 1–2]

The “molding-glass class” text is a catalog-coordinate classification inherited from the validated data. It does not establish a manufacturing process for this particular element. Sony's production lens-configuration diagram locates the AA element at the same sequence position as L21 in the selected correlation, so L21 is the inferred AA correspondence; this is not an explicit Sony-to-patent slot identification. [3]

### L22 — Biconcave Negative

`nd = 1.83400`, `νd = 37.35`. Glass: `NBFD10 (HOYA catalog-equivalent coefficient proxy; production supplier unspecified)`. Standalone `f = −15.4384 mm`.

L22 is the negative member of the J2 cemented pair. HOYA's legacy NBFD10 catalog curve is coordinate-compatible with the patent row: its catalog `nd = 1.83400` is exact and `νd = 37.34` differs by only 0.01 from the source value. The project therefore uses NBFD10 as a qualified coefficient proxy for spectral tracing.

This assignment does not establish that Sony used HOYA glass or NBFD10 in production. The source remains authoritative for the d-line coordinate, while the named catalog entry supplies only a compatible public dispersion curve.

### L23 — Biconvex Positive

`nd = 1.84666`, `νd = 23.78`. Glass: `847238 — dense flint class`. Standalone `f = +12.5770 mm`.

L23 is the positive member of J2 and has strong standalone positive power. It shares the same low-Abbe 847238 coordinate as L11. The cemented L22/L23 combination has an isolated-air net focal length of +52.2971 mm even though GR2 as a whole remains strongly negative at −13.4138 mm. The difference is a direct example of the distinction between a cemented subassembly's isolated power and its behavior inside a larger multi-element group.

The patent identifies L22/L23 as a cemented biconcave/biconvex pair but does not assign a specific aberration term to either component. [1, p. 10]

### L24 — Negative Meniscus, Rear Asphere

`nd = 1.82080`, `νd = 42.71`. Glass: `821427 — TAFD51-class (legacy/source coordinate)`. Standalone `f = −36.9580 mm`.

L24 closes GR2. The patent describes it as a negative meniscus with the concave surface toward the object, and its image-side surface 12A is aspherical. [1, p. 10]

The glass annotation is intentionally a legacy/source-coordinate class rather than an exact present-day melt assignment. The current catalog comparison retains the class relationship but does not justify claiming an exact contemporary vendor glass at `nd = 1.82080`.

### L31 — Negative Meniscus

`nd = 1.90366`, `νd = 31.31`. Glass: `904313 — very-high-index flint class`. Standalone `f = −36.9116 mm`.

L31 is the negative front member of J3 in GR3. Its very high index permits substantial surface power at comparatively moderate curvature, while its standalone focal length remains negative. The patent describes it as a negative meniscus attached directly to the positive L32. [1, p. 10]

J3 as an isolated cemented unit is positive, with `f = +24.1411 mm`; that net value again should not be read as the in-situ power of GR3.

### L32 — Biconvex Positive

`nd = 1.74330`, `νd = 49.22`. Glass: `743492 — lanthanum flint class`. Standalone `f = +14.5349 mm`.

L32 is the strong positive partner of L31 in J3. Its standalone focal length is the shortest positive value in GR3. The pair's opposite standalone signs and substantial index/dispersion contrast yield a positive cemented unit before the rear negative L33. [1, p. 10]

The final assembled GR3 remains positive in isolated-group calculation (`f = +69.3519 mm`). This group-level value includes L33 and the internal air spacing and is distinct from both L32's standalone power and J3's cemented net power.

### L33 — Negative Meniscus

`nd = 1.80611`, `νd = 40.73`. Glass: `806407 — dense flint class`. Standalone `f = −32.0543 mm`.

L33 is the rear singlet of GR3. The patent describes it as a negative meniscus with its concave surface toward the object. [1, p. 10]

Placed after the strongly positive J3 cemented pair, L33 reduces the group's isolated net power while leaving GR3 positive overall. The patent does not separately attribute a named aberration-correction function to this element, so the analysis does not assign one beyond its verified first-order role.

### L41 — Biconvex Positive, Front Asphere

`nd = 1.69350`, `νd = 53.20`. Glass: `694532 — lanthanum crown class`. Standalone `f = +21.5065 mm`.

L41 begins GR4 and has an aspherical object-side surface, 19A. The patent describes L41 as biconvex and places it ahead of the GR4f and GR4r sub-groups. [1, p. 10]

Its positive standalone power contributes to a GR4 whose isolated group focal length is +17.4479 mm. The same glass coordinate is reused at the negative focus element L51, demonstrating that material identity alone does not imply a shared optical function.

### L42 — Negative Meniscus

`nd = 1.91082`, `νd = 35.25`. Glass: `911353 — very-high-index low-dispersion class`. Standalone `f = −23.4535 mm`.

L42 is the negative member of the cemented J4 pair in the patent's first GR4 sub-group, GR4f. Its very high index is paired with the much lower-index, much higher-Abbe positive L43. [1, p. 10]

The two standalone powers are nearly opposed in magnitude: L42 is −23.4535 mm and L43 is +24.4749 mm. The resulting isolated-air J4 net focal length is approximately −9111.8 mm, so the pair is nearly afocal in first order. This does not mean J4 is optically inactive in the assembled zoom; its strong individual surface powers and dispersion contrast remain available for aberration and chromatic balancing even when the isolated paraxial net power is small.

### L43 — Biconvex Positive, ED-Class Coordinate

`nd = 1.49700`, `νd = 81.61`. Glass: `497816 — ED fluorophosphate class`. Standalone `f = +24.4749 mm`.

L43 is the positive member of J4. Its very high Abbe number is the most conspicuous low-dispersion coordinate in the prescription. Sony specifies one ED glass element in SEL1670Z; within the selected correlation, L43 is the natural correspondence, although neither source explicitly maps the marketed ED designation to patent element L43. [3]

No `nC`, `nF`, `ng`, or `dPgF` values are stored for L43 because the patent does not publish element-specific line indices or partial-dispersion data. The ED-class designation therefore supports a low-dispersion material classification, not an apochromatic or anomalous-partial-dispersion performance claim.

### L44 — Biconvex Positive, Image-Stabilization Member

`nd = 1.61800`, `νd = 63.40`. Glass: `618634 — phosphate crown class`. Standalone `f = +63.3558 mm`.

L44 is the second GR4 sub-group, GR4r, and the patent explicitly identifies this member as the image-blur compensation lens group. It shifts in a direction perpendicular to the optical axis to move the image. [1, pp. 5, 10–12]

The element remains an ordinary centered refracting element in the sequential base prescription; no lateral decenter magnitude is authored because the patent does not provide a numerical stabilization displacement in Tables 1–3. Its transverse stabilization role is therefore described as a mechanism, not modeled as an additional continuous state in the data file.

### L51 — Biconcave Negative, Two Aspherical Surfaces, Focus Group

`nd = 1.69350`, `νd = 53.20`. Glass: `694532 — lanthanum crown class`. Standalone `f = −20.9828 mm`.

L51 is the complete fifth functional group, GR5. It is a single biconcave negative element with aspherical surfaces 26A and 27A. The patent explicitly states that focusing from infinity toward closer subject distances is performed by moving GR5 along the optical axis. [1, pp. 5, 10]

The negative single-element focus group is a central mechanical feature of the patent: the specification discusses reducing focus-group mass and limiting angle-of-view variation compared with arrangements that move a larger group. Those are patent design objectives rather than measured claims for the production lens. [1, pp. 1–2, 5]

Finite-focus spacings are not published. The close-focus state in the data file is therefore a constrained reconstruction, described separately below.

### L61 — Biconvex Positive

`nd = 1.51742`, `νd = 52.15`. Glass: `517522 — crown-flint class`. Standalone `f = +54.5299 mm`.

L61 is the single positive sixth functional group and the final glass element before the image plane. The patent describes GR6 as positive and permits GR4 and GR6 to travel together during zooming. [1, pp. 5–6, 10]

The data file keeps the patent's changing rear spacing D29 as a zoom-dependent air gap to the image plane. No sensor sealing plate or filter is inserted after L61 because the patent expressly states that the optional SG member is omitted from the numerical examples. [1, pp. 9–10]

## Glass Identification and Selection

The validated data uses conservative glass classes or six-digit coordinate codes rather than vendor names. The patent publishes only d-line `nd` and `νd`; it does not identify glass manufacturers. Authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalogs were used to test coordinate compatibility, but a catalog match is treated as an equivalence check rather than a procurement claim. [4]–[9]

| Elements | `nd` | `νd` | Data-file glass annotation | Interpretation |
|---|---:|---:|---|---|
| L11, L23 | 1.84666 | 23.78 | `847238 — dense flint class` | Exact coordinate exists in current catalogs; vendor not assigned |
| L12 | 1.62041 | 60.34 | `620603 — dense crown class` | Exact coordinate exists; class-level label retained |
| L13 | 1.72916 | 54.67 | `729547 — lanthanum crown class` | Near-exact current catalog coordinate |
| L21 | 1.85135 | 40.10 | `851401 — high-index low-dispersion molding-glass class` | Exact coordinate exists; manufacturing method not inferred from label |
| L22 | 1.83400 | 37.35 | `NBFD10 (HOYA catalog-equivalent coefficient proxy; production supplier unspecified)` | Qualified legacy curve: exact `nd`, `νd` differs by 0.01; production supplier unspecified |
| L24 | 1.82080 | 42.71 | `821427 — TAFD51-class (legacy/source coordinate)` | Legacy/source-coordinate class; not asserted as exact current melt |
| L31 | 1.90366 | 31.31 | `904313 — very-high-index flint class` | Near-exact current catalog coordinate |
| L32 | 1.74330 | 49.22 | `743492 — lanthanum flint class` | Exact coordinate exists |
| L33 | 1.80611 | 40.73 | `806407 — dense flint class` | Near-exact current catalog coordinate |
| L41, L51 | 1.69350 | 53.20 | `694532 — lanthanum crown class` | Exact coordinate exists in more than one catalog family |
| L42 | 1.91082 | 35.25 | `911353 — very-high-index low-dispersion class` | Exact coordinate exists in multiple catalog families |
| L43 | 1.49700 | 81.61 | `497816 — ED fluorophosphate class` | Exact low-dispersion coordinate exists; vendor not assigned |
| L44 | 1.61800 | 63.40 | `618634 — phosphate crown class` | Near-exact current catalog coordinate |
| L61 | 1.51742 | 52.15 | `517522 — crown-flint class` | Exact coordinate exists |

No element carries authored `nC`, `nF`, `ng`, or `dPgF`. The patent's aberration plots identify C, d, and g wavelengths for the plotted system aberrations, but they do not provide those line indices for each glass. Catalog-equivalent resolution now gives every element a trusted baseline Sellmeier curve, including the qualified NBFD10 proxy at L22, but it does not support apochromatic, anomalous-partial-dispersion, production-vendor, or production-melt claims.

The most distinctive chromatic pairing is J4. L42 combines very high index and moderate dispersion with the very-high-Abbe L43. Their strong opposing standalone powers leave the cemented pair nearly afocal in isolated first order. This is consistent with using the pair heavily for correction while GR4's gross positive power is supplied by the complete group rather than by J4 alone. That statement is an optical interpretation of the computed powers and glass coordinates, not a claim stated by the patent.

## Focus Mechanism

The patent publishes the focus mechanism but not finite-focus spacing data. GR5 consists only of L51, and this negative single-lens group moves axially when subject distance changes from infinity toward a closer distance. The image plane remains fixed in the data model. [1, pp. 5, 10]

The final data therefore labels focus as `CONSTRAINED_RECONSTRUCTION`. The reconstruction uses Sony's published 0.35 m minimum focus distance as the production constraint, normalized to the sensor/image plane by the source audit. Only GR5 moves. If its imageward displacement is `Δ`, D25 increases by `Δ` and D27 decreases by `Δ`, preserving the patent-infinity envelope `D25 + D27 = 10.000 mm` at every zoom state. The object-to-image ABCD imaging condition is solved for each state.

| Zoom state | GR5 imageward displacement | D25 infinity → close | D27 infinity → close | Reconstructed `|m|` at 0.35 m |
|---|---:|---:|---:|---:|
| 16.48 mm | 0.437717 mm | 5.437000 → 5.874717 mm | 4.563000 → 4.125283 mm | 0.05853x |
| 35.00 mm | 1.105918 mm | 3.829000 → 4.934918 mm | 6.171000 → 5.065082 mm | 0.12356x |
| 67.90 mm | 2.908554 mm | 2.502000 → 5.410554 mm | 7.498000 → 4.589446 mm | 0.23222x |

The tele-end reconstruction gives 0.23222x, consistent with Sony's rounded 0.23x maximum magnification specification. [2] This agreement is a calibration check on the constrained model, not evidence that the patent itself publishes the finite-focus row.

Sony states that SEL1670Z uses linear-motor drive. [3] The patent does not identify a production actuator or state that a particular commercial motor drives GR5, so the motor-to-group mapping is not treated as manufacturer-confirmed.

## Aspherical Surfaces

Numerical Example 1 has six aspherical surfaces on four physical elements: 6A and 7A on L21, 12A on L24, 19A on L41, and 26A and 27A on L51. Sony's production lens-configuration diagram marks one AA element and three additional aspherical elements at the same sequence positions. Within the selected correlation, this supports AA → L21 and the remaining aspherical elements → L24/L41/L51 as inferred mappings rather than manufacturer-published patent labels. [1, Tables 1–2] [3]

The patent uses the same conic convention as the project data:

$$
 z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+\sum A_p h^p,
$$

where `c = 1/R`, `h` is radial height, and `K` is the standard conic constant. No `κ → K` conversion is required. Because `s = 1.0`, no asphere coefficient scaling is required either. The patent publishes terms through A10; the data file carries A12 and A14 as zero to satisfy the project representation.

| Surface | Element | `K` | `A4` | `A6` | `A8` | `A10` |
|---|---|---:|---:|---:|---:|---:|
| 6A | L21 | 0 | −1.7003e−5 | +2.9207e−7 | −1.4891e−9 | +2.4818e−12 |
| 7A | L21 | 0 | −2.2803e−5 | +9.2713e−8 | +3.8834e−9 | 0 |
| 12A | L24 | 0 | −3.3902e−5 | +1.4348e−7 | −6.1643e−9 | +4.7703e−11 |
| 19A | L41 | −7.4971 | −5.5873e−5 | +2.2331e−7 | −1.6262e−9 | +9.6401e−12 |
| 26A | L51 | 0 | −2.8193e−5 | +2.6882e−7 | −2.6307e−9 | 0 |
| 27A | L51 | −0.22886 | −4.4572e−5 | +8.5447e−8 | −5.6155e−10 | −1.2462e−11 |

The negative A4 term is common to all six surfaces, while the higher-order terms alternate in sign and magnitude to shape the outer zones. Surface 19A carries the most strongly negative conic constant (`K = −7.4971`); surface 27A uses a milder negative conic (`K = −0.22886`); the other four use `K = 0` with polynomial departure from the spherical base.

The patent publishes no clear-aperture or semi-diameter values for these surfaces, so source-based asphere departures cannot be quoted at a patent aperture. At the validated modeling semi-diameters in the final data, the independently computed polynomial departure from the corresponding conic base is +0.04261 mm at 6A, +0.04597 mm at 7A, −0.11658 mm at 12A, −0.49110 mm at 19A, −0.37110 mm at 26A, and −0.86810 mm at 27A. These departures are model-verification quantities tied to inferred semi-diameters, not dimensions published by Sony or the patent.

The patent does not identify whether a particular asphere is molded, polished, or composite. Sony's production page identifies one AA element in its lens-configuration diagram, but it does not use the patent's Lxx labels or state an element-specific manufacturing process. The L21 correspondence is therefore retained as an inferred diagram-to-patent mapping, and no element-specific molding or polishing claim is added. [3]

## Chromatic Correction Strategy

The design distributes substantial refractive-index and dispersion contrast through several cemented interfaces. J1 combines low-Abbe L11 (`νd = 23.78`) with higher-Abbe L12 (`νd = 60.34`); J3 combines very-high-index, low-Abbe L31 (`nd = 1.90366`, `νd = 31.31`) with L32 (`nd = 1.74330`, `νd = 49.22`); and J4 places the very-high-index negative L42 against the very-high-Abbe positive L43.

L43 is the only ED-class coordinate in the final data and corresponds naturally to Sony's single-ED-element production specification. [3] Its location inside the nearly afocal J4 pair is notable: the pair has strong opposing standalone powers but almost no isolated net first-order power. This arrangement can provide substantial differential dispersion leverage without making J4 the principal source of GR4's gross positive power. That is a modeling interpretation of the prescription, not a patent statement of chromatic design intent.

No secondary-spectrum or APO claim is made. The patent supplies `nd/νd` coordinates and system aberration plots at C/d/g wavelengths, but no per-element `nC`, `nF`, `ng`, `PgF`, or `dPgF`. The data file therefore does not contain the line-resolved information required for a stronger partial-dispersion assertion.

## Conditional Expressions

The patent defines five dimensionless conditions governing the relative powers and shapes of the fourth and sixth groups. Numerical Example 1 satisfies both the broad and preferred ranges. The values below are recomputed from the final data arrays; they reproduce the patent's Table 7 values after rounding. [1, pp. 6–7, 15]

| Condition | Base range | Preferred range | Computed | Patent Table 7 |
|---|---|---|---:|---:|
| `f4 / f6` | `0 < x < 0.8` | `0.2 < x < 0.4` | 0.319969 | 0.32 |
| `f6 / fT` | `0.6 < x < 1.0` | `0.7 < x < 1.0` | 0.803092 | 0.80 |
| `f1 / fT` | `1.0 < x < 2.0` | `1.0 < x < 1.5` | 1.136689 | 1.14 |
| `(R4bf − R4br)/(R4bf + R4br)` | `−2.0 < x < −0.5` | `−1.5 < x < −0.5` | −1.116456 | −1.11 |
| `(R6f − R6r)/(R6f + R6r)` | `−2.5 < x < 0` | `−2.0 < x < −0.5` | −1.597448 | −1.60 |

For condition 4, `R4bf` and `R4br` are the front and rear radii of L44/GR4r; for condition 5, `R6f` and `R6r` are the front and rear radii of L61/GR6. Rendered patent equations were used to preserve the `+` signs in the denominators, which OCR can lose.

## Image Stabilization

The patent divides GR4 into a front sub-group GR4f and a rear sub-group GR4r. In Numerical Example 1, GR4f is the cemented L42/L43 pair and GR4r is the single positive L44. The patent states that image blur is compensated by translating GR4r perpendicular to the optical axis, and Figures 6–11 compare lateral aberration with and without compensation at the three zoom positions. [1, pp. 5, 10–12; Figs. 6–11]

Sony specifies Optical SteadyShot for SEL1670Z. [2] The production-to-patent correspondence is therefore strong at the mechanism class level, but the manufacturer does not publish a patent-element label or a numerical L44 decenter. The data file consequently records L44's stabilization role but does not invent a transverse displacement state.

During ordinary zooming, GR4 also moves axially. The patent further allows GR4 and GR6 to travel together. Independent normalization to the fixed image plane reproduces the same net wide-to-tele axial shift for the two group fronts, while L44's stabilization movement remains a separate transverse degree of freedom conceptually.

## Verification Summary and Modeling Boundaries

The final prescription was checked independently by sequential height/reduced-angle tracing and by a separate 2×2 ABCD matrix construction. The two first-order methods agree to floating-point precision at all three published zoom states.

| State | Published `f` | Computed EFL | Published D29 | Computed BFL |
|---|---:|---:|---:|---:|
| Wide | 16.48 mm | 16.480132 mm | 14.754 mm | 14.754998 mm |
| Intermediate | 35.00 mm | 34.998863 mm | 28.957 mm | 28.955055 mm |
| Tele | 67.90 mm | 67.899860 mm | 41.773 mm | 41.772954 mm |

The surface-by-surface Petzval calculation uses `φ/(n·n′)` and gives a sum of `+0.0042002857 mm⁻¹`. Its reciprocal magnitude is about 238.079 mm and is treated only as a Petzval-sum scale, not as an independently signed field-curvature radius.

The patent places the aperture stop at surface 13 and publishes F/4.12, but it does not publish the physical stop diameter. The final data therefore uses `nominalFno = 4.12` as the optical aperture authority and stores `STO.sd = 6.8 mm` only as an inferred authoring/render cap. Paraxial wide-open physical stop radii required by F/4.12 are 4.0291, 5.5026, and 6.6970 mm at the three zoom states. These radii are computed model values, not patent dimensions.

Likewise, the patent publishes no clear apertures for the glass surfaces. Every surface semi-diameter in the data file is a modeling value derived from ray envelopes and checked against the wide-end Figure 1 proportions. The follow-up review enlarged GR4's L41, J4, and L44 rims, the GR5 focus element, and GR6 to restore the distinctly taller rear-unit profile visible in the patent. Trial enlargement beyond the selected 10.4 mm L41 and 9.6 mm J4 rims caused negative edge thickness, so the drawing's larger rectangular steps are treated as blank/flange outlines rather than clear optical extent. The project surface-domain and image-circle audits pass for the final set across all zoom and focus states. These checks validate the model geometry; the selected apertures are not source-published dimensions.

The patent states that an optical member `SG`, such as imaging-device sealing glass or optical filters, may lie between the zoom lens and image plane, but it explicitly omits `SG` from the numerical examples. [1, pp. 3, 9–10] The data therefore excludes sensor cover glass and filters. There is no omitted numerical plate whose power must be replaced by an air-equivalent correction, and no inactive dummy or flare-cutter plane is present in Numerical Example 1.

No folded path, perspective-control mechanism, projection override, or independent spherical-aberration-control mechanism is used. All ordinary sequential spacings are non-negative. The only non-published state added to the prescription is the disclosed GR5 close-focus reconstruction.

## Sources

1. Tadashi Yanagisawa, **US 9,538,088 B2, “Zoom Lens and Imaging Apparatus,”** Sony Corporation, granted January 3, 2017. Numerical Example 1; Figure 1; Tables 1–3 and 7; Figures 3–11. Attached patent PDF is the prescription authority.
2. Sony, **SEL1670Z Specifications**, official support page: <https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel1670z/specifications> (accessed August 26, 2026).
3. Sony, **Vario-Tessar T* E 16-70 mm F4 ZA OSS (SEL1670Z)**, official product/features and lens-configuration page: <https://www.sony.com/za/electronics/camera-lenses/sel1670z> (accessed August 26, 2026).
4. OHARA, optical-glass catalog and datasheets: <https://oharacorp.com/>.
5. HOYA, optical-glass data downloads: <https://www.hoya-opticalworld.com/english/datadownload/index.html>.
6. SCHOTT, optical-glass data and downloads: <https://www.schott.com/en-us/products/optical-glass-p1000267/downloads>.
7. HIKARI, optical-glass catalog: <https://www.hikari-g.co.jp/optical_glass/catalog/>.
8. CDGM, optical-glass database: <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>.
9. SUMITA, optical-glass downloads: <https://www.sumita-opt.co.jp/en/download/>.
