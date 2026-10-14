## Patent Reference and Design Identification

**Patent:** [JP 2000-321497 A — Zoom lens](https://patents.google.com/patent/JP2000321497A/en)

**Application Number:** Japanese application 1999-133083

**Filed:** May 13, 1999

**Published:** November 24, 2000

**Inventor:** Haruo Sato

**Applicant:** Nikon Corporation

**Embodiment analyzed:** Example 1, Table 1 (production correlation)

The original application gazette supplies the prescription. Its Table 1 occupies PDF pages 7–9. JP 4374652 B2 is the grant of the same application, published December 2, 2009. Its Tables 1–3 (PDF pages 11–19) print the same 84 surface rows, six asphere blocks and 33 infinity/finite/macro configurations as the application. The model retains the application dimensions at scale 1.0.

[Nikon's Tale 99](https://imaging.nikon.com/imaging/information/story/0099/) identifies Sato as the designer of the Ai AF Zoom Nikkor 24–85mm f/2.8–4D IF, with final design in February 1999, prototyping in May 1999, and Japanese launch on September 5, 2000. The four moving groups, second-group focus, 1:2 macro capability and conic/odd-order aspheres strongly associate the patent with this product. Nikon's five internal design reports are not mapped to the patent's three numerical examples.

Example 1 gives the closest axial fit to [Nikon's production section](https://imaging.nikon.com/imaging/information/story/0099/img/pic_01.jpg), while residual curvature and spacing differences remain. Its 1.8 mm front element matches the drawing, where Example 2 prints 2.4 mm, and Example 3's F/2.9–4.1 range does not match the f/2.8–4 product. Nikon does not publish the production prescription, so Example 1 is a production correlation rather than a certified production prescription.

| Comparison at infinity | Example 1 | Example 2 | Example 3 |
|---|---:|---:|---:|
| Table focal range, mm | 24.7–82.5 | 24.7–82.5 | 24.7–82.5 |
| Table f-number range | 2.8–4.1 | 2.8–4.1 | 2.9–4.1 |
| Calculated wide EFL, mm | 24.692230 | 24.692086 | 24.692198 |
| Calculated middle EFL, mm | 50.000310 | 49.999721 | 50.000168 |
| Calculated tele EFL, mm | 82.500805 | 82.499468 | 82.500426 |
| Largest absolute back-focus residual, mm | 0.000940 | 0.000492 | 0.000554 |
| Nikon axial-vertex RMS residual, pixels | 1.28 | 2.34 | 2.11 |

The image comparison uses 23 resolvable vertex locations and one global pixel scale and translation per example. Interfaces closer than the raster can separate are compared at their mean axial position. It changes no source prescription value. The wide state is inferred from the large G2–G3 gap. Line widths, merged interfaces and the manufacturer's schematic precision limit this evidence. First-order powers alone do not distinguish the examples: all three have almost identical group focal lengths. The application explicitly describes Figure 1 as common to Examples 1–3.

## Optical Architecture

This is a positive–negative–positive–positive, four-moving-group zoom (¶0041–0044). It contains 15 glass elements in 11 air-separated groups. The data contains 16 material bodies because the thin aspheric resin coating and its glass substrate are separate refractive media; together they form the physical L21 component.

| Moving group | Model bodies | Calculated group focal length, mm | Arrangement |
|---|---|---:|---|
| G1 | L11n, L11p, L12 | +85.2407 | Positive cemented component followed by a positive meniscus |
| G2 | L21r, L21g, L22, L23p, L23n, L24 | −13.5999 | Hybrid negative component, negative singlet, positive cemented component, negative singlet |
| G3 | L31, L32p, L32n; stop | +36.5215 | Positive singlet and positive cemented component |
| G4 | L41, Lasp, L4n, L4p | +58.2885 | Positive singlet, negative asphere, negative cemented component |

The four zoom variables are d5, d15, d21 and BF. Toward telephoto, d5 grows while d15 and d21 shrink; the whole system moves objectward relative to its image plane. The stop is the printed surface 16 and stays 1.0000 mm before surface 17, moving with G3. All three source zoom states (24.7, 50 and 82.5 mm) are retained verbatim. Linear interpolation between those rows alone would defocus the infinity image by up to 1.87 mm near 35 mm, so nine intermediate stations (27, 30, 33, 36, 40, 45, 57, 66 and 75 mm) are solved: d5, d15 and d21 follow smooth quadratics in ln f through the printed rows, and the back focus is the calculated infinity image distance. The remaining interpolation defocus is at most 0.048 mm. These solved stations are first-order states, not a recovered mechanical cam law.

## Element-by-Element Analysis

The focal lengths below are calculated for each material body isolated in air using its two vertex radii, thickness and d-line index. They are not the powers of cemented components in situ. Commercial glass identities are unverified throughout.

### L11n — Negative front member of C1

nd = 1.846660, νd = 23.78. Glass: S-TIH53 spectral proxy (supplier unconfirmed). f = −116.1336 mm.

The nearly flat object-side surface and positive rear radius form a negative meniscus. Its relatively high dispersion supplies the negative member of the positive front cemented component.

### L11p — Positive rear member of C1

nd = 1.755000, νd = 52.32. Glass: S-LAH97 spectral proxy (supplier unconfirmed). f = +95.2962 mm.

It shares surface 2 with L11n and ends at the negative-radius surface 3. The pair's refractive-index and dispersion contrast permits chromatic balancing within G1; no partial-dispersion identity is established.

### L12 — Positive meniscus

nd = 1.755000, νd = 52.32. Glass: S-LAH97 spectral proxy (supplier unconfirmed). f = +102.4748 mm.

This second positive component completes the weak-positive front group. Its fixed 0.1000 mm separation from C1 is preserved.

### L21r / L21g — Hybrid negative component

L21r: nd = 1.495210, νd = 56.34. Material: Unmatched aspheric resin. f = −235.1788 mm.

L21g: nd = 1.834810, νd = 42.72. Glass: S-LAH55VS spectral proxy (supplier unconfirmed). f = −20.6299 mm.

The source explicitly describes L21 as a resin/glass hybrid (¶0042). Surface 6A begins the 0.0600 mm resin layer; surface 7 is its interface with the substrate. Surface 8 terminates the substrate. Neither interface is omitted or collapsed into an equivalent spherical surface. The strongly curved rear surface contributes much of this component's negative power.

The first negative component and its odd-order asphere contribute to the correction of wide-angle off-axis aberrations and low-order spherical aberration (¶0020–0024). The source function changes sag slope sign within the modeled aperture; the exact polynomial is retained on both sides of that turn.

### L22 — Negative singlet

nd = 1.741000, νd = 52.67. Glass: S-LAL61 spectral proxy (supplier unconfirmed). f = −33.1812 mm.

Its biconcave shape follows L21. The patent identifies the two front negative components of G2 as contributors to wide-angle distortion, astigmatism and coma correction (¶0011).

### L23p / L23n — Positive cemented component C2

L23p: nd = 1.740770, νd = 27.79. Glass: S-TIH13 spectral proxy (supplier unconfirmed). f = +15.8250 mm.

L23n: nd = 1.804000, νd = 46.58. Glass: S-LAH65 spectral proxy (supplier unconfirmed). f = −32.9494 mm.

The positive member and negative partner share surface 12. Their net component faces the object with a convex surface. The patent connects this cemented positive component to large-aperture spherical/coma correction and control of the Petzval sum (¶0011). These roles are source-grounded; a named commercial glass equivalence is not.

### L24 — Negative meniscus

nd = 1.743200, νd = 49.32. Glass: S-LAM60 spectral proxy (supplier unconfirmed). f = −50.8504 mm.

The concave object-facing meniscus completes G2. The convex air lens between C2 and L24 is part of the architecture discussed in ¶0011. G2 is translated intact for focus.

### L31 — Positive singlet

nd = 1.603000, νd = 65.47. Glass: S-PHM53 spectral proxy (supplier unconfirmed). f = +66.7119 mm.

The biconvex singlet begins G3, immediately behind the printed stop. Its separation from the following cemented component is 0.1000 mm.

### L32p / L32n — Positive cemented component C3

L32p: nd = 1.603000, νd = 65.47. Glass: S-PHM53 spectral proxy (supplier unconfirmed). f = +20.7570 mm.

L32n: nd = 1.834000, νd = 37.17. Glass: S-LAH60 spectral proxy (supplier unconfirmed). f = −24.2378 mm.

The lower-index positive component and higher-index negative partner share surface 20. Together with L31 they form the positive third moving group.

### L41 — Positive singlet

nd = 1.743200, νd = 49.32. Glass: S-LAM60 spectral proxy (supplier unconfirmed). f = +25.6407 mm.

The equal-and-opposite vertex radii make this the approximately symmetric biconvex positive component of G4. The following negative components counter its convergence; ¶0012 and ¶0030 discuss this rear correction arrangement.

### Lasp — Negative aspheric singlet

nd = 1.744429, νd = 49.52. Glass: N-LAF35 spectral proxy (supplier unconfirmed). f = −64.5229 mm.

Surface 24A carries the second asphere. The 1.8000 mm body and the following 2.0000 mm air gap are retained. It is a separate component ahead of C4, not a zero-gap third member of that doublet. The application does not establish its manufacturing process.

### L4n / L4p — Negative cemented component C4

L4n: nd = 1.834000, νd = 37.17. Glass: S-LAH60 spectral proxy (supplier unconfirmed). f = −16.8216 mm.

L4p: nd = 1.617200, νd = 54.01. Glass: K-SSK1 spectral proxy (supplier unconfirmed). f = +21.1709 mm.

The biconcave negative component and biconvex positive partner share surface 27. Their index difference, 0.2168, is the printed N4n − N4p condition value. The combination supplies a net negative component in the positive fourth group, followed by the source back focus.

## Glass Identification and Selection

Only d-line indices and Abbe numbers are published for these bodies. No catalog glass name, nC, nF, ng or anomalous partial-dispersion value is supplied. Fifteen glass bodies now use coordinate-compatible catalog dispersion curves, with supplier and melt unconfirmed. Lasp uses N-LAF35 as an approximate proxy (catalog nd about 1.74330 versus the source 1.744429); its source index remains unchanged. The L21r hybrid resin has no defensible catalog match and retains the Abbe estimate. These proxy choices support no APO or factory secondary-spectrum claim.

| nd | νd | Bodies |
|---:|---:|---|
| 1.846660 | 23.78 | L11n |
| 1.755000 | 52.32 | L11p, L12 |
| 1.495210 | 56.34 | L21r, resin |
| 1.834810 | 42.72 | L21g |
| 1.741000 | 52.67 | L22 |
| 1.740770 | 27.79 | L23p |
| 1.804000 | 46.58 | L23n |
| 1.743200 | 49.32 | L24, L41 |
| 1.603000 | 65.47 | L31, L32p |
| 1.834000 | 37.17 | L32n, L4n |
| 1.744429 | 49.52 | Lasp |
| 1.617200 | 54.01 | L4p |

## Focus Mechanism

The numerical examples focus by translating G2 objectward (¶0040, ¶0044). At a fixed zoom station, d5 decreases, d15 increases, and d21/BF stay unchanged, within the source's final rounding digit.

Table 1 includes three infinity states, three states at β = −0.03333, three additional ordinary near-focus states, and two β = −0.5 macro states. There is no wide-angle −0.5 row. All 11 source configurations are retained. A shared set of seven normalized focus coordinates accommodates the different source conjugates at each zoom station; the viewer's patent-position mode steps only through the rows the source tabulates. Other combinations are linear interpolation samples.

| Zoom, mm | d5 at infinity, mm | d5 at ordinary near row, mm | d5 at macro row, mm | G2 endpoint travel, mm |
|---:|---:|---:|---:|---:|
| 24.7 | 2.47033 | 1.57789 | not tabulated | −0.89244 |
| 50.0 | 16.71393 | 15.23959 | 10.90021 | −5.81372 |
| 82.5 | 29.30687 | 26.75685 | 22.71918 | −6.58769 |

The ordinary near rows calculate to object-to-image distances of 0.499047 / 0.499018 / 0.499004 m. The macro rows calculate to 0.180754 m at 50 mm and 0.209332 m at 82.5 mm, with magnifications −0.499988 and −0.499989. These distances are calculations from the retained spacings, not printed distance measurements. The 0.5 m near rows match the marketed minimum focus distance. The 50 mm macro endpoint is not replaced with the production lens's 0.21 m macro specification, which Nikon gives at 85 mm. Because the patent prints no object distances, finite-distance MTF is not certified for these rows.

Nikon describes a production macro range beginning at 35 mm. The patent does not tabulate a 35 mm station or its switching cam. At the solved intermediate zoom stations the G2 focus offsets are interpolated from the neighbouring printed stations, so the model does not reproduce that production macro-enable boundary. Intermediate focus endpoints and magnification therefore remain estimates.

## Aspherical Surfaces

The source equation in ¶0046 is

$$
S(h)=\frac{h^2/R}{1+\sqrt{1-\kappa h^2/R^2}}+\sum_n C_n h^n,\qquad h=\sqrt{x^2+y^2}\geq0.
$$

It uses κ directly inside the root; κ = 1 is a spherical base. LensVisualizer uses `1 + K` there, so **K = κ − 1**. The odd terms are powers of radial height and remain rotationally symmetric. They are not evaluated as signed Cartesian powers.

| Source term | Surface 6A | Surface 24A |
|---|---:|---:|
| κ | +100.0000 | −16.7909 |
| Engine K | +99.0000 | −17.7909 |
| C3 | −0.13978 × 10⁻⁴ | −0.59892 × 10⁻⁵ |
| C4 | +2.57770 × 10⁻⁵ | −3.00230 × 10⁻⁵ |
| C5 | not listed | +0.22049 × 10⁻⁷ |
| C6 | −5.98630 × 10⁻⁸ | −5.71200 × 10⁻⁸ |
| C8 | +1.74430 × 10⁻¹⁰ | −3.84540 × 10⁻¹⁰ |
| C10 | −3.18950 × 10⁻¹⁴ | +7.18890 × 10⁻¹² |
| C12 | −0.16029 × 10⁻¹⁴ | −0.36321 × 10⁻¹³ |
| C14 | +0.34996 × 10⁻¹⁷ | not listed |

Unlisted terms are modeled as zero. No even-order replacement fit or prescription scaling is applied. The engine already supports these odd terms in sag, slope, exact intersections and rendering.

At the inferred 14.2 mm radius, surface 6A has sag +0.2089 mm and departure +0.6718 mm from its reference sphere. At 9.4 mm, surface 24A has sag +0.0655 mm and departure −0.2876 mm. Both functions reverse their sag slope within these radii. These reversals follow from the printed coefficients and are retained.

## Model Scope and Limitations

Source radii, thicknesses, refractive indices, coefficients and all focus spacings are unchanged. The wide EFL difference from the 24.700 label is approximately −0.00777 mm; the maximum infinity back-focus residual is under 0.001 mm. No source value is optimized to remove these residuals.

Clear apertures and iris diameter are not published. The semi-diameters are manual Figure 1 estimates checked against Nikon's outline, source-beam clearance and geometry. The L21 hybrid rim (6A/7/8) is 14.2 mm, increased from 13.5 mm toward Figure 1's larger outline while respecting the steep spherical rear face. A 15.7 mm candidate would put that face at about 78° slope and was rejected. The 24A/25 rim is 9.4 mm on both faces; increasing it to 11.2 mm would overlap surface 26 and was rejected. The unchanged 25→26 gap has 1.8756 mm maximum shared-band sag intrusion within its 2.0000 mm vertex spacing, leaving 0.1244 mm positive physical clearance; the drawing margin for that gap is therefore 5% instead of the usual 10%. No optical surface changes.

The authored stop schedule follows the stated f-numbers; it is an inference, not evidence that the real iris varies with zoom. The model uses Table 1's rounded endpoint f-numbers, 2.8 and 4.1, and Figure 3's middle value, 3.62. The more precise plot legends in Figures 2–4 are 2.79 / 3.62 / 4.12. Both statements are preserved rather than declaring either a source error. At the solved intermediate stations, the f-numbers (2.89 at 27 mm to 4.05 at 75 mm) keep the iris radius interpolated between the printed stations.

The inferred model passes the stated axial beam at all three infinity stations and reproduces 21.60 mm chief-ray image height at approximately 42.4° / 22.8° / 14.2° half-field. At all 11 source configurations, an on-axis marginal ray aimed at the retained iris passes every clear aperture. For the finite rows, the launch uses the calculated source conjugate rather than an infinity beam. Those results establish modeled ray access, not full-pupil corner illumination or measured production performance. Rendering and chromatic predictions remain sensitive to the inferred rims, aperture schedule, proxy dispersion and unresolved hybrid resin.

A production identification would require evidence tying the final manufactured prescription to a numerical embodiment; the diagram fit alone does not provide it.

## Sources and Design Context

- [JP 2000-321497 A](https://patents.google.com/patent/JP2000321497A/en), original application gazette, Tables 1–3 and Figures 1–10. The original PDF, not the translated text, controls numeric transcription.
- [JP 4374652 B2](https://patents.google.com/patent/JP4374652B2/en), grant of Japanese application 1999-133083; original 24-page gazette, Tables 1–3 on pages 11–19, with values identical to the application. Its Figure 1 is Example 1, and Figures 11/12 separately illustrate Examples 2/3. This figure-edition difference supplies no production-embodiment identification.
- [Nikon, NIKKOR Thousand and One Nights, Tale 99](https://imaging.nikon.com/imaging/information/story/0099/) and its [production diagram](https://imaging.nikon.com/imaging/information/story/0099/img/pic_01.jpg).
- [JPH0894933A](https://patents.google.com/patent/JPH0894933A/en) and [US5734508A](https://patents.google.com/patent/US5734508A/en): related earlier high-ratio design, sharing the September 26, 1994 Japanese priority. The present application explicitly cites the Japanese publication as prior art.
- [JPH10197794A](https://patents.google.com/patent/JPH10197794A/en) and [US5930051A](https://patents.google.com/patent/US5930051A/en): earlier large-aperture work. The US patent claims the January 14, 1997 application among multiple Japanese priorities, including two October 25, 1996 applications. This is a multi-priority relationship, not a one-to-one numerical substitute. None of these earlier patents supplies the present prescription or belongs to the 1999-133083 application.
