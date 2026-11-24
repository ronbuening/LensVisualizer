# MEOPTA 100mm f/1.8 (US 2,543,856 Design)

## Patent Reference and Design Identification

**Patent:** US 2,543,856 A, _Large aperture four-member photographic objective_

**Inventors:** František Kupka

**Assignee:** Meopta, spojene zavody pro jemnou mechaniku a optiku, narodni podnik

**Filed:** 20 July 1948

**Published:** 6 March 1951

**Priority:** Czechoslovakia, 4 August 1947

**Example details:** Example 1 of three numerical examples; Figure 1 shows the shared construction and Figure 2 plots Example 1's corrections.

The patent describes a large-aperture photographic objective particularly suited to cinematography. Example 1 specifies a focal length of 100 mm and an aperture ratio of 1:1.8. No production lens is documented as using this prescription. [US 2,543,856 A, PDF p. 2](https://patents.google.com/patent/US2543856A/en)

## Optical Architecture

Five spherical elements form four air-separated components, numbered I–IV in the patent. Component I is a positive meniscus, II is the positive cemented pair, III is biconcave and negative, and IV is biconvex and positive. The five glass entries in the prescription are separately numbered I–V and appear under those numerals in the diagram. Elements 2 and 3 are cemented at the flat r4 interface. Their combined focal length is +87.73 mm, although element 3 alone is negative. The front air separation is the printed 0.1 mm.

The patent emphasizes the weak curvature of the cemented interface, the front element's weak rear surface, and the higher dispersion of the negative member of the cemented pair. These features balance the positive components while allowing relatively shallow spherical surfaces. Example 1 uses an infinite cemented radius, within the claim's range from six focal lengths to infinity. [Specification and claim, PDF pp. 2–3](https://patents.google.com/patent/US2543856A/en)

At the sodium D line the computed effective focal length is 99.998 mm, 0.002 mm below the stated 100 mm. The first-to-last vertex distance is 66.8 mm. The image plane is the computed paraxial back focus, 52.32 mm behind r9; the patent prints no back focus.

## Element-by-Element Analysis

The focal lengths below describe each element separately in air. All indices and Abbe numbers are the patent's printed values.

### Element 1 — Positive Meniscus

`nD = 1.65981, ν = 50.3; f = +163.03 mm.` The front collector has radii +78 and +270 mm and a center thickness of 9.5 mm. Its glass remains unmatched.

### Elements 2 and 3 — Cemented Positive Group C1

Element 2 is plano-convex positive: `nD = 1.65981, ν = 50.3; f = +68.96 mm`. Element 3 is plano-concave negative: `nD = 1.71715, ν = 29.6; f = −278.88 mm`. The lower Abbe number of the negative element supplies greater dispersion within the pair. Their shared flat r4 surface is a glass-to-glass interface, with no intervening air gap. Element 2 remains unmatched; element 3 uses the Schott SF1 catalogue curve.

### Element 4 — Biconcave Negative

`nD = 1.71715, ν = 29.6; f = −41.69 mm.` This thin negative third group balances the positive components. It has radii −600 and +31.5 mm, a center thickness of 1.5 mm and the same printed glass coordinates as element 3. It also uses the Schott SF1 catalogue curve.

### Element 5 — Biconvex Positive

`nD = 1.61216, ν = 58.0. Glass: P-SK60 (Schott), spectral proxy. f = +72.37 mm.` The rear positive group forms the image after the stop. Its radii are +109 and −72.82 mm, and its center thickness is 7 mm.

## Glass Identification and Selection

The patent explicitly names the sodium D line and supplies Abbe numbers, but gives no glass names or separate C, F or G′ indices. The source indices remain attached to that line.

Schott SF1 matches the printed D-line glass coordinates for elements 3 and 4: its catalogue curve gives nD = 1.71715 and νD = 29.50, with catalogue minus printed differences Δn = −0.0000012 and Δν = −0.0959. Element 5 uses Schott P-SK60 as a spectral proxy, with Δn = −0.00190 and Δν = −0.11 at the sodium D line, within the site's spectral-proxy tolerance of 0.002 in index and 0.25 in Abbe number. The model retains the printed index and Abbe number and borrows the dispersion-curve shape from P-SK60. Neither catalogue name identifies the historical supplier or melt.

Elements 1 and 2 use Abbe-based dispersion estimates. Their shared sodium-D index and Abbe number recur in all three examples. The closest catalogue row by Abbe number within the index tolerance, Hikari J-SSK5, differs by +0.53 in νD. The available data do not establish anomalous partial dispersion or measured broadband performance.

## Focus Mechanism

Only infinity focus is modeled. The patent supplies no close-focus prescription, object distances or focusing mechanism; no minimum focus distance is assigned.

Figure 1 draws a dashed plane between elements 4 and 5. The printed separations place it 9.4 mm after r7 and 15.6 mm before r8, at an axial station of 44.2 mm from r1. The model treats that plane as the aperture stop; the prose does not explicitly name it a diaphragm. The opening is inferred from the printed f/1.8 ratio, giving a stop radius of 16.30 mm. No iris diameter is printed.

## Aspherical Surfaces

There are no aspherical surfaces. The curved faces are spherical, and r4 is flat.

## Source Aberrations and Model Limits

The computed Petzval sum is 0.0050162 mm⁻¹, or 0.5016 when multiplied by the stated 100 mm focal length, reproducing the patent's printed sum. Figure 2 and its table give longitudinal focus offsets relative to paraxial sodium D. Each pair below gives the published and modeled offsets, in mm. The model evaluates G′ at approximately 434.0 nm. [Aberration tables and Figure 2, PDF pp. 1–3](https://patents.google.com/patent/US2543856A/en), [NIST hydrogen wavelengths](https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable2_a.htm)

| Incident axial ray height (mm) | C, patent / model | D, patent / model | F, patent / model | G′, patent / model |
| ------------------------------ | ----------------: | ----------------: | ----------------: | -----------------: |
| 0 (paraxial)                   |   +0.120 / +0.151 |     0.000 / 0.000 |   −0.225 / −0.241 |    −0.281 / −0.317 |
| 19.45                          |   −0.289 / −0.220 |   −0.327 / −0.332 |   −0.423 / −0.466 |    −0.523 / −0.443 |
| 24.06                          |   −0.240 / −0.153 |   −0.241 / −0.240 |   −0.306 / −0.302 |    −0.150 / −0.211 |
| 27.78                          |   +0.168 / +0.197 |   +0.148 / +0.139 |   +0.160 / +0.160 |    +0.373 / +0.334 |

The largest sodium-D difference is 0.009 mm. The largest colour difference is 0.087 mm for C at 24.06 mm ray height. Paraxial F−C separation is −0.392 mm with the modeled glass curves and −0.404 mm using the printed Abbe numbers alone, compared with the patent's −0.345 mm. These system-level values leave the historical glasses' individual dispersion curves undetermined.

The patent states no field angle or image format. The displayed ±10° field is illustrative and carries no image-circle or mount claim. Its chief ray and the f/1.8 axial beam clear the modeled rims, although off-axis bundles are partly vignetted.

Every clear semi-diameter is estimated: r1/r2 31.4 mm, r3–r5 27.3 mm, r6 24 mm, r7 21 mm and r8/r9 20.7 mm. Figure 1 supplies shared construction proportions, with square-cut front and rear lenses, a level cemented-group edge and a taper across element 4. Its rear-lens thickness differs from Example 1, so it does not establish exact edge dimensions. The front and rear clear radii remain above its approximate 28 and 17 mm proportions to retain off-axis illumination. At f/1.8, geometric transmission is 98.9% at 5.0°, 96.1% at 6.7°, 93.0% at 8.3° and 88.9% at 10.0°. No factory edge dimensions or barrel geometry are established.

## Sources

1. František Kupka, [US 2,543,856 A, _Large aperture four-member photographic objective_](https://patents.google.com/patent/US2543856A/en), granted 6 March 1951. PDF p. 1: section and aberration curves; p. 2: bibliography, Examples 1–3 and longitudinal aberrations; p. 3: Seidel coefficients and claim.
2. Meopta, [historical milestones](https://www.meopta.com/en/historical-milestones/), documenting the company's photographic and cinema-equipment history; this does not identify a product using Example 1.
3. Schott, [optical glass catalogue downloads](https://www.schott.com/en-us/products/optical-glass-p1000267/downloads), for the SF1 and P-SK60 dispersion curves.
