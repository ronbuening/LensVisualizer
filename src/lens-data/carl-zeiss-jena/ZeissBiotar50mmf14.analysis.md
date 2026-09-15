## Patent Reference and Design Identification

**Patent:** US 1,786,916\
**Filed:** September 7, 1928\
**Priority:** Germany, September 29, 1927\
**Granted:** December 30, 1930\
**Inventor:** Willy Merté\
**Assignee:** Carl Zeiss\
**Title:** Objective Corrected Spherically, Chromatically, Astigmatically, and for Coma\
**Embodiment analyzed:** Example 2 (Fig. 2)

US 1,786,916 describes a fast photographic objective made from four air-separated components. The two outer components are collective, while the two inner components are dispersive menisci with their concave sides facing one another. The patent explicitly permits the four components to be subdivided into cemented members, and Example 2 uses that option to form a six-element, four-component lens. The numerical table is normalized to focal length 100 and the patent states that both illustrated examples are intended for a relative aperture of 1:1.4. The selected prescription is the Example 2 table and Fig. 2, not the neighboring Example 1 prescription or its separate spherical-aberration statement. [1, PDF pp. 1–2]

The LensVisualizer model scales every dimensional prescription quantity uniformly by 0.5 to represent the job-card 50 mm research target. The source radii, thicknesses, and air spaces therefore keep their proportions, while the refractive indices and Abbe numbers remain unchanged. Because the patent table is rounded, the scaled prescription computes to an effective focal length of 49.956745 mm rather than being rescaled a second time to force exactly 50.000 mm.

The association with the commercial Biotar line is deliberately qualified at the prescription level, but the marketed 50 mm f/1.4 identity itself has direct period support. A 1931 Zeiss Ikon catalog lists the Kinamo N. 25 with a “Zeiss Biotar 1:1,4 f = 5 cm,” establishing that a 5 cm f/1.4 Biotar was a marketed product by that date. ZEISS historian H. H. Nasse separately states that Willy Merté at Carl Zeiss Jena designed a series of f/2 and f/1.4 objectives in 1927 for 35 mm cameras and 16 mm movie film, and that these designs entered the market under the Biotar name. The same ZEISS source describes the Biotar as a development of the double-Gauss/Planar family in which strict symmetry of radii and refractive indices was abandoned. Those facts align with the inventor, date, speed, six-element architecture, and high-index glass of Example 2, but the manufacturer source does not identify US 1,786,916 Example 2 as the exact commercial 50 mm f/1.4 prescription, and the 1931 catalog supplies no prescription-level linkage. Mount and image format therefore remain unset rather than being inferred from the family history or the catalog listing. [2, pp. 3–4; 4, p. 80]

## Optical Architecture

The implemented design is a six-element, four-component double-Gauss-derived objective. In front-to-rear order its component-power sequence is positive / negative / negative / positive. This directly matches the patent's stated architecture of collective outer components surrounding two dispersive inner components. [1, PDF pp. 2–3]

The front component G1 is the single positive meniscus L1. G2 is the cemented L2+L3 pair: L2 is positive in isolation, L3 is negative in isolation, and the cemented pair is net negative with a verified first-order focal length of -179.943897 mm. G3 is the cemented L4+L5 pair: L4 is negative in isolation and L5 positive in isolation, while the cemented pair remains net negative at -194.666695 mm. G4 is the single rear biconvex positive element L6, with a standalone focal length of +44.888160 mm.

The standalone element powers should not be confused with the behavior of those members inside the complete objective. In the executed in-situ paraxial reference trace, the two outer components increase convergence, whereas G2 and G3 partially relax the converging reduced angle before the rear positive component completes the imaging action. This is a first-order statement about the traced system, not an allocation of specific higher-order aberrations to individual lenses.

The source and model are entirely spherical. No aspheric equation or coefficient set is published for Example 2, and the data file contains no aspheric surfaces. The inserted aperture stop is optically neutral and does not add refractive power.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**nd = 1.64238, νd = 48.0. Glass: BAF9 — barium-flint dispersion proxy (vintage 642480; supplier unproven). f = +86.453796 mm.**

L1 is the complete front positive component. Its meniscus form follows the patent's requirement that the object-side collective component be a meniscus in the selected claim family. The element supplies the first positive power of the system before the short air gap leading to the first cemented inner component. Its glass coordinate is retained exactly from the patent. The existing BAF9 catalog curve is a dispersion proxy, with Δnd = +0.00090 and Δνd = −0.20; it does not identify the historical melt or supplier. [1, PDF pp. 1–3]

### L2 — Biconvex Positive Member of D1

**nd = 1.62306, νd = 56.9. Glass: N-SK10 — dense-crown dispersion proxy (623569; supplier unproven). f = +34.777310 mm.**

L2 begins the first inner cemented component. Considered by itself in air it is a strong positive lens, but that standalone focal length does not describe the net power of D1. The cemented interface passes directly into L3 with no synthetic cement layer in the model, preserving the patent's two-member construction.

### L3 — Biconcave Negative Member of D1

**nd = 1.57566, νd = 41.2. Glass: QF3 — light-flint dispersion proxy (vintage 576412; supplier unproven). f = -23.952611 mm.**

L3 is the negative member that reverses the sign of the first inner component as a whole. The verified net focal length of D1 is -179.943897 mm even though L2 is positive in isolation. This distinction is important: the patent describes the inner components as dispersive, and that statement applies to the cemented component rather than to each constituent element separately. [1, PDF pp. 2–3]

### L4 — Biconcave Negative Member of D2

**nd = 1.67270, νd = 32.2. Glass: 673322 — SF5-class dense flint (supplier unproven). f = -15.874926 mm.**

L4 is the first member of the second inner cemented component and carries the highest refractive index in Example 2. Its 1.67270 / 32.2 coordinate is closely compatible with the modern 673322/SF5 equivalence family, but the patent does not identify the historical supplier or melt. The data file therefore keeps a class-level label rather than asserting a specific Schott, HIKARI, OHARA, HOYA, CDGM, or SUMITA product. [3]

### L5 — Biconvex Positive Member of D2

**nd = 1.64238, νd = 48.0. Glass: BAF9 — barium-flint dispersion proxy (vintage 642480; supplier unproven). f = +21.919537 mm.**

L5 is cemented directly to L4. Its positive standalone power partly offsets L4, but the combined D2 component remains net negative, with a verified focal length of -194.666695 mm. The same patent 642480 coordinate and qualified BAF9 dispersion proxy are used here as in L1 and L6.

### L6 — Rear Biconvex Positive Component

**nd = 1.64238, νd = 48.0. Glass: BAF9 — barium-flint dispersion proxy (vintage 642480; supplier unproven). f = +44.888160 mm.**

L6 forms the complete rear positive component. Both surfaces are convex in the patent geometry, satisfying the claimed rear-component form. Its d-line index of 1.64238 also exceeds the claim-6 threshold of 1.61. The rear surface is followed in the implemented model by the computed Gaussian infinity back-focus distance because the patent does not publish an image-plane spacing. [1, PDF pp. 1–3]

## Glass Identification and Selection

The patent supplies only `nd` and `νd` coordinates. It does not publish `nC`, `nF`, `ng`, partial-dispersion data, or a supplier name for any of the Example 2 glasses. The catalog review therefore separates coordinate compatibility from historical identity. [1, PDF pp. 1–2; 3]

| Patent coordinate | Elements | Model label | Catalog disposition |
| --- | --- | --- | --- |
| 1.64238 / 48.0 | L1, L5, L6 | BAF9 dispersion proxy | Δnd = +0.00090; Δνd = −0.20; historical identity unproven |
| 1.62306 / 56.9 | L2 | N-SK10 dispersion proxy | Δnd = −0.00028; Δνd = +0.08; supplier unproven |
| 1.57566 / 41.2 | L3 | QF3 dispersion proxy | Δnd = −0.00064; Δνd = +0.11; historical identity unproven |
| 1.67270 / 32.2 | L4 | 673322 — SF5-class dense flint | Very close coordinate match across several modern catalogs; historical supplier unproven |

The modern catalog line-index and partial-dispersion values retained in the evidence record belong to candidate equivalents, not to patent-published historical melts. They are therefore not copied into the data elements. The model does not claim apochromatic or anomalous-partial-dispersion behavior from `nd`/`νd` alone. [3]

The integration audit resolves all six elements through existing catalog curves. BAF9 and QF3 use vendor polynomial dispersion; N-SK10 and SF5 use Sellmeier coefficients. No new glass types or per-element spectral indices are needed.

The canonical assignee is Carl-Zeiss-Stiftung; the original publication says “the firm of Carl Zeiss, of Jena, Germany.”

## Focus Mechanism

The selected patent gives only one static optical prescription. It provides no finite-conjugate spacing table, focus-group motion, minimum focus distance, or mechanical focusing description. The model accordingly uses **NO_INTERNAL_RECONSTRUCTION**: `var` and `varLabels` are empty, and no internal lens motion is invented. [1, PDF pp. 1–2]

`closeFocusM = 1.0 m` exists only because the current LensDataInput schema requires a finite value for that field. It is a UI/schema placeholder, not a ZEISS production minimum-focus specification and not a second optical state. Any future finite-distance model would require a production source and enough mechanism constraints to solve a defensible reconstruction.

## Verification Summary and Model Limits

The final parsed prescription gives an effective focal length of **49.956745 mm** and a Gaussian infinity back focal distance of **32.664346 mm**, measured from the last refracting vertex. The physical first-to-last refracting-surface track is **46.520000 mm**; including the computed infinity back focus, the first-vertex-to-image distance is **79.184346 mm**. Under the project definitions this is neither telephoto nor retrofocus: `TL/EFL = 1.585058` is greater than 1, while `BFD/EFL = 0.653853` is less than 1.

The surface-by-surface Petzval calculation, using `φ/(n·n′)` at every refracting surface, sums to `0.005544313 mm⁻¹`, corresponding to a signed reciprocal radius of **+180.364994 mm** under the stated convention. This is a first-order field-curvature quantity, not a measured image-field performance claim.

The patent publishes f/1.4 but does not dimension an iris. The data model therefore inserts one neutral `STO` in the central air space. Its station is an inferred geometry-balanced location **22.185929 mm** behind the first vertex, and its semi-diameter **11.522193 mm** is calibrated paraxially so that the modeled entrance pupil reproduces f/1.4. Agreement with f/1.4 is consequently a calibration result, not independent evidence for the physical production stop. [1, PDF pp. 1–2]

The patent likewise publishes no clear apertures. All surface semi-diameters in the data file are modeled values constrained by exact meridional d-line construction traces and the current edge-thickness, rim-slope, spherical-domain, and shared-band gap checks. Those checks pass for the representative ray set, but the full calibrated stop edge is not independently established as a clear production pupil. In the exact meridional model, an on-axis infinity ray cannot be traced to ±100% of the paraxially calibrated stop radius through the authored spherical construction; the f/1.4 value therefore remains a paraxial calibration to the patent's stated relative aperture rather than a claim of exact full-pupil clearance. [1, PDF pp. 1–2] Repository surface and image-circle audits pass; the optical model limitations described above still apply.

## Conditional Expressions

The patent's claim family defines several geometric or refractive-index conditions that can be checked directly against Example 2. The implemented scaled model preserves the same dimensionless ratios as the source prescription.

| Patent condition | Verified Example 2 value | Result |
| --- | ---: | --- |
| Claims 1 and 3: front outer signed strongest/other radius ratio is algebraically greater than the rear ratio | front `+0.260436`; rear `-0.883333` | Pass |
| Claim 2: four air-separated components with negative inner components | component signs `+ / - / - / +` | Pass |
| Claim 4: rear biconvex absolute radius ratio ≤ 2 | `1.132075` | Pass |
| Claim 5: one facing concave radius is at least 10% larger in magnitude than the other | ratio `1.360424` | Pass |
| Claim 6: rear-component d-line refractive index ≥ 1.61 | `1.64238` | Pass |

These checks establish that the selected numerical example satisfies the cited claim geometry. They do not by themselves establish that the modeled stop, modeled semi-diameters, or commercial-lens correlation were published in the patent. [1, PDF p. 3, printed p. 2]

## Sources and References

1. Willy Merté, **US Patent 1,786,916, “Objective Corrected Spherically, Chromatically, Astigmatically, and for Coma,”** assigned to Carl Zeiss, filed September 7, 1928; German filing September 29, 1927; granted December 30, 1930. Example 2 and Fig. 2 are on PDF pp. 1–2; claims are on PDF p. 3. The original patent scan is retained with this dossier.
2. H. H. Nasse, **“Planar — From the Series of Articles on Lens,”** Carl Zeiss AG Camera Lens Division, July 2011, especially pp. 3–4. https://lenspire.zeiss.com/photo/app/uploads/2018/02/en_CLB_40_Nasse_Lens_Names_Planar.pdf
3. Authoritative glass-catalog evidence retained in the dossier: HOYA Glass Cross Reference Index; OHARA optical-glass catalog and S-BSM10/S-TIM25 data; SCHOTT optical-glass catalog; HIKARI J-SK/J-SF5 data; CDGM optical-glass database; SUMITA optical-glass data. Catalog matches are used only as coordinate-equivalence evidence unless explicitly identified otherwise above.
4. Zeiss Ikon AG, **Zeiss Ikon Cameras 1931**, Kinamo N. 25 price table, p. 80, order no. 5401/7 Q. The period catalog lists a Zeiss Biotar 1:1.4, f = 5 cm. Archival scan: https://www.cameramanuals.org/booklets/zeiss_catalog_1931.pdf
