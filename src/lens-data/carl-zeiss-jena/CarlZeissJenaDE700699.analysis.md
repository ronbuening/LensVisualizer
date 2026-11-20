# CARL ZEISS JENA 100mm f/2 (DE 700,699 Design)

## Patent Reference and Design Identification

**Patent:** DE 700,699 C, _Photographisches Objektiv_

**Filed:** 9 January 1938

**Published:** 3 January 1941; grant announced 28 November 1940

**Inventors:** Ludwig Bertele

**Assignee:** Zeiss Ikon AG

**Example details:** Sole numerical example, printed F = 100 mm and 1:2; seven elements in three groups.

The Patentschrift supplies the sole example at its printed 100 mm scale. Its ten radii, seven glass thicknesses and nd/νd pairs, 0.38 mm first air space and 9.44 mm stop space are retained without rescaling (patent p. 2 and drawing sheet).

The historical [Sonnar account at zeissikonveb.de](https://www.zeissikonveb.de/start/objektive/normalobjektive/sonnar.html), section 5.2, identifies DRP 700.699 as Bertele's improved-distortion Sonnar 2/5 cm and states that it did not reach series production. No production product is identified with this prescription. Similarity to the 1–3–3 layout of the Contax Sonnar 85/2 or Jupiter-9 does not establish a product link. US 2,254,511 is a different eight-element f/1.4 design, rather than a family publication of this patent.

## Optical Architecture

A positive front singlet precedes a net-negative cemented triplet and a net-positive rear triplet, giving a positive–negative–positive component sequence. Their computed in-air focal lengths are +131.30, −203.41 and +111.27 mm. All ten refracting surfaces are spherical.

The patent places a biconcave dispersing element between two collecting elements in the rear component. Each collecting element has a higher refractive index than the dispersing glass. The text presents this arrangement as a way to reduce residual distortion rather than to increase sharpness (patent p. 2, description and claim).

The computed paraxial EFL is 100.0123199 mm, about 0.012% above the printed 100 mm. The patent supplies no image-plane distance. The model uses a calculated paraxial BFD of 54.5351647 mm, stored as 54.5352 mm, for a first-vertex-to-image distance of 122.1052 mm. The image plane remains paraxial; the full f/2 marginal ray crosses the axis near 122.2399 mm and has a residual height of about 0.0347 mm at the modeled plane.

## Element-by-Element Analysis

### G1 — L1 Positive Meniscus

nd = 1.6204, νd = 60.3. Glass: N-SK16 (Schott catalog proxy). In-air f = +131.30 mm.

The front collecting meniscus is 6.79 mm thick. Its 28 mm semi-diameters follow the drawing. The catalog curve matches the printed optical coordinates closely; the historical glass supplier is unknown.

### G2 — Cemented L2–L4 (C1)

| Element | Shape              | nd     | νd   | Glass curve         | In-air focal length |
| ------- | ------------------ | ------ | ---- | ------------------- | ------------------- |
| L2      | Positive meniscus  | 1.7016 | 41.2 | BAFD7 (Hoya proxy)  | +95.27 mm           |
| L3      | Biconvex positive  | 1.5400 | 59.6 | BAK2 (Sumita proxy) | +104.00 mm          |
| L4      | Biconcave negative | 1.6883 | 31.2 | Unmatched           | −33.27 mm           |

The two positive elements precede the stronger negative member, producing a net-negative middle component. Their thicknesses are 7.17, 7.55 and 1.89 mm. R3–R5 use the drawing's approximately 23.7 mm rims. R6 retains a 16.8 mm clear radius because the f/2 axial marginal reaches about 16.59 mm there.

### G3 — Cemented L5–L7 (C2)

| Element | Shape              | nd     | νd   | Glass curve           | In-air focal length |
| ------- | ------------------ | ------ | ---- | --------------------- | ------------------- |
| L5      | Positive meniscus  | 1.6204 | 60.3 | N-SK16 (Schott proxy) | +104.04 mm          |
| L6      | Biconcave negative | 1.5174 | 52.4 | S-NSL36 (Ohara proxy) | −41.07 mm           |
| L7      | Biconvex positive  | 1.6689 | 48.8 | Unmatched             | +45.23 mm           |

The rear triplet places the lower-index negative element between two positive members, as the claim specifies. The thicknesses are 10.76, 1.13 and 22.46 mm. R7 retains a 17 mm clear radius for the axial beam, which reaches about 16.38 mm. R8–R10 follow the approximately 23.7 mm figure rims. These are optical clear radii, not production barrel dimensions.

## Glass Identification and Dispersion

The table heading prints lowercase nd, identifying the helium d line at 587.6 nm. All seven elements use that reference. Five elements admit close catalog curves: L1/L5 N-SK16, L2 BAFD7, L3 BAK2 and L6 S-NSL36. Their evaluated differences from the printed coordinates are at most 0.000057 in nd and 0.08 in νd. These curves are spectral proxies; they do not identify the original supplier or melt. L4 and L7 remain explicitly unmatched because no catalog row meets the stricter coordinate limits used here.

The printed nd/νd pairs remain unchanged. The unmatched elements use an Abbe-based dispersion estimate. No measured partial dispersion, transmission or production polychromatic performance is established by the patent table.

## Focus Mechanism

Only infinity focus is modeled. The patent gives no near-focus spacings or focusing mechanism, and no marketed minimum focus distance is assigned. All groups remain fixed relative to one another. The calculated paraxial image plane is retained rather than moved to the full-aperture marginal focus.

## Published Iris Station and Inferred Clear Apertures

The table locates the iris 31.28 mm after the first vertex, splitting the second air space into 7.50 mm after R6 and 1.94 mm before R7. The stop diameter is not printed. The paraxial f/2 convention gives a 32.6086402 mm iris diameter, or 16.3043201 mm radius.

Real marginal tracing requires a slightly larger stop radius, about 16.49 mm, to pass an exact f/2 entrance radius of 25.00308 mm. The modeled iris admits about 24.72895 mm, equivalent to f/2.02217. This small difference is retained. Neither an alternative iris diameter nor a change to the printed prescription is used to remove it.

The drawing suggests roughly 16 mm at R6/R7; the retained 16.8/17 mm values preserve the f/2 axial beam. The other rims follow the figure. The mixed evidence is stated explicitly. Edge thicknesses, air-gap intrusion and clearance from the stop plane pass the surface check without a geometry override.

## Modeled Field and Distortion

The patent prints no field angle or image format. The [historical distortion plot](https://impro.usercontent.one/appid/oneComWsb/domain/zeissikonveb.de/media/zeissikonveb.de/onewebmedia/Marco/Carl%20Zeiss%20Jena/Sonnar%202,0%20verbesserte%20Verzeichnung.jpg), labeled “nach DRP 700.699,” extends to 22° half-field and shows about +0.98% pincushion distortion there. The model gives +0.27% at 10°, +0.58% at 15° and +0.98% at 22°, consistent with that curve.

The declared half-field is 22°. The real chief ray reaches approximately 40.805 mm at the paraxial image plane, giving an inferred 81.61 mm image-circle diameter at the printed 100 mm scale. This is an analysis bound derived from the historical plot and ray trace, not a published production image format. The chief ray reaches the boundary without rim blockage; off-axis marginal rays remain vignetted. With the larger rear rims, the one-sided R10 bundle-width clipping estimate falls from about 80% to 40% at 22°; this is not an area-weighted transmission measurement.

## Sources

- DE 700,699 C, _Photographisches Objektiv_: front page for inventor, applicant and issue date; p. 2 for the sole numerical table and claim; drawing sheet for component shapes and rim estimates. [Patent reproduction](https://impro.usercontent.one/appid/oneComWsb/domain/zeissikonveb.de/media/zeissikonveb.de/onewebmedia/Marco/Carl%20Zeiss%20Jena/DE700699%20verzeichnungsfreies%20Sonnar-3.jpg?resize=1024%2B2130&quality=90).
- Marco Kröger, [Sonnar](https://www.zeissikonveb.de/start/objektive/normalobjektive/sonnar.html), section 5.2: historical identification, absence of series production and comparison of distortion curves.
- [DPMA bibliographic index](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=bibdat&docid=DE000000700699A); the indexed A identifier does not change the issued Patentschrift's C designation used here.
