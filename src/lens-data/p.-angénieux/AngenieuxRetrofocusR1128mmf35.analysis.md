## Patent Reference and Design Identification

**Patent:** GB 720,808
**Application number:** 6963/53
**Priority:** 29 May 1952 (France)
**Filed:** 13 March 1953 (United Kingdom)
**Published:** 29 December 1954
**Inventor:** Pierre Angénieux
**Applicant:** Pierre Angénieux
**Title:** *Improvements in Wide-Angle Objectives*
**Embodiment analyzed:** Sole numerical example, designated Example 1 in the data set

The prescription is correlated to the P. Angénieux Retrofocus Type R11 28mm f/3.5 selected in the job card. The patent does not use the commercial designation “Type R11,” so the correlation is not presented as an explicit manufacturer assignment within the patent. It rests on convergent evidence: the 1952–1954 filing history, the six-element wide-angle construction, the deliberately extended rear clearance, the 28mm production focal length, and Angénieux’s own historical identification of a 28mm f/3.5 Retrofocus introduced in 1953 with a published 75° field [1, pp. 1–5; 2].

The current model fixes that correlation and transcribes only the patent’s sole worked prescription. No related patent or neighboring embodiment has been substituted. A later Angénieux historical retrospective contains an internal caption conflict, labeling an adjacent R11 photograph “28 mm f/2.5” while its prose gives “R11 28 mm f/3.5.” The present identification follows the official Angénieux history, the retrospective’s prose, and the fixed job card; the conflicting caption is not used as design metadata [2; 3].

## Optical Architecture

The design contains six spherical elements in six air-spaced groups. The patent divides them into a two-element front “dispersive part” and a four-element rear “collective part” [1, pp. 1–3]. In the validated data these sections are labeled `FRONT DISPERSIVE` and `REAR COLLECTIVE`.

The front section combines a weak positive meniscus, L1, with a substantially stronger negative meniscus, L1′. Their isolated two-element matrix has an equivalent focal length of −50.5494 mm. The rear section combines three positive elements with one negative element and has an isolated equivalent focal length of +30.1732 mm. These subsystem powers describe each section between its own reference planes; they do not imply that either section behaves independently when installed in the complete objective.

The strongly negative front section, long air separation, and positive rear section shift the rear focal plane farther behind the last glass surface than the objective’s focal length. The validated model gives an effective focal length of 28.0000 mm and a back focal length of 37.2479 mm, so `BFL/EFL = 1.33028`. It therefore satisfies the project definition of a retrofocus objective. The first-vertex-to-image distance is 92.1988 mm, giving `TL/EFL = 3.29282`; it is not a telephoto objective under the project definition.

### Scaling and reference planes

The patent labels its normalized prescription `F = 100`, but direct paraxial tracing of the printed radii, spacings, and d-line indices gives an effective focal length of 101.007234632 normalized units. The data file applies a uniform scale of `28 / 101.007234632 = 0.277207866366946`, producing a modeled design EFL of 28.0000 mm. All radii, center thicknesses, air gaps, semi-diameters, stop coordinates, and image-plane spacing use that same scale. The design is entirely spherical, so no aspheric coefficient transformation is applicable.

The patent separately prints a back focal length of 135.08 normalized units, while the independently traced prescription gives 134.368216951 units. The data does not alter any patent radius, spacing, or refractive index to force agreement. Instead, the last-surface-to-image distance uses the computed paraxial value, scaled to 37.247926729 mm, while the printed discrepancy remains a documented source inconsistency.

The page-5 optical section contains an unlabeled diaphragm line in the air gap between the rear surface of L3 and the front surface of L4, but the prescription table does not identify or dimension its axial station or aperture [1, p. 5]. The model therefore places `STO` at the midpoint of that gap. Its physical semi-diameter of 5.271556908 mm yields a 4.000000 mm entrance-pupil semi-diameter and a modeled f-number of 3.500000. Both the axial split and stop size are modeling inferences, not patent table entries.

The patent publishes no clear apertures. Surface semi-diameters were therefore inferred from meridional marginal- and chief-ray envelopes, the published 75° field, and the proportions of the patent section. They are modeled geometry rather than source measurements. No sensor cover glass, filter, inactive dummy surface, flare cutter, or mechanical plane appears in the numerical embodiment, so none was omitted or converted to an air-equivalent spacing.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**nd = 1.6751, νd = 32.3. Glass: SF5 (Schott catalog equivalent to patent 675323 dense-flint coordinate; production supplier unspecified). Standalone f = +158.4023 mm.**

L1 is the weak positive member at the front of the dispersive section. The patent requires this first lens to be convergent and places limits on its focal length, front radius, refractive index, and dispersive power [1, pp. 1–3]. Its comparatively weak positive power moderates the action of L1′ while presenting a large front aperture to the wide field.

The low Abbe number distinguishes L1 from the higher-Abbe negative meniscus behind it. That pairing supports ordinary first-order chromatic balancing within the front dispersive section, but the available d-line index and Abbe number do not support claims of anomalous partial dispersion or apochromatic correction.

### L1′ — Negative Meniscus

**nd = 1.6204, νd = 60.2. Glass: J-SK16 (Hikari catalog equivalent to patent 620602; production supplier unspecified). Standalone f = −37.0310 mm.**

L1′ supplies the dominant negative power of the front section. Its two surfaces are convex toward the object side in the patent’s description, with the strongly curved rear surface producing the pronounced meniscus form visible in the optical section [1, pp. 1–2, 5]. Together with L1 it forms a net-negative air-spaced pair rather than a cemented achromat.

The higher Abbe number relative to L1 is consistent with the patent’s explicit requirement that the convergent front lens use `ν < 45` and the divergent meniscus use `ν > 45` [1, claim 5]. The element’s large negative standalone power is the principal first-order cause of the extended rear clearance, although its in-situ contribution is modified by the preceding L1 and the long separation to the rear section.

### L2 — Biconvex Positive

**nd = 1.6204, νd = 60.2. Glass: J-SK16 (Hikari catalog equivalent to patent 620602; production supplier unspecified). Standalone f = +43.2864 mm.**

L2 begins the rear collective section after the long axial gap. It is the first substantial positive element encountered after the front dispersive pair and restores convergence to the beam. The patent identifies the first member of the collective part as a convergent lens [1, pp. 1–3].

Its standalone power is a property of the isolated thick element. In the complete objective it works with the three following elements as a positive subsystem whose principal planes and effective power differ from the sum of isolated element powers.

### L3 — Positive Meniscus

**nd = 1.6204, νd = 60.2. Glass: J-SK16 (Hikari catalog equivalent to patent 620602; production supplier unspecified). Standalone f = +49.1219 mm.**

L3 is the positive meniscus immediately ahead of the aperture stop. The patent describes this second collective member as a convergent meniscus with both surfaces convex toward the front [1, pp. 1–3]. Its position makes it the final powered surface pair before the inferred diaphragm plane.

The element contributes positive power while shaping ray height at the stop. The specific allocation of spherical aberration, coma, and pupil aberration among L3 and its neighbors is not stated by the patent and is not asserted from first-order calculations alone.

### L4 — Biconcave Negative

**nd = 1.6287, νd = 35.3. Glass: F1 (Sumita catalog equivalent to patent 629353 flint coordinate; production supplier unspecified). Standalone f = −16.0307 mm.**

L4 is a thin, strongly negative biconcave element directly behind the stop. It is the most powerful isolated element in magnitude and is the only negative member of the four-element rear collective section. The patent identifies the third collective member as biconcave [1, pp. 1–3].

Its negative power counterbalances the positive L2, L3, and L5 elements while preserving a net-positive rear subsystem. Its post-stop position and strong curvature make it the principal negative corrector in the rear section; assigning a more specific aberration function would be an optical interpretation rather than a directly published fact.

### L5 — Biconvex Positive

**nd = 1.6204, νd = 60.2. Glass: J-SK16 (Hikari catalog equivalent to patent 620602; production supplier unspecified). Standalone f = +20.8930 mm.**

L5 is the final positive element and closes the rear collective section. Its strongly curved rear face supplies substantial positive refraction before the long final air space to the image plane. The patent describes the fourth collective member as convergent [1, pp. 1–3].

The isolated element has the strongest positive standalone power in the design. In situ, it acts after the negative L4 and determines the final convergence and rear principal-plane position of the complete objective. The very small modeled minimum edge thickness is a consequence of the inferred semi-diameter and strong rear curvature; the validated geometry remains positive at the authored rim.

## Glass Identification and Selection

The patent gives only d-line refractive index and Abbe number. It does not name manufacturers or catalog glasses, and it supplies no `nC`, `nF`, `ng`, `Pg,F`, or `dPgF` values. The data therefore treats SF5, J-SK16, and F1 as modern coefficient-backed optical equivalents, not historical supplier or melt assignments [6–9].

| Stored glass annotation | nd | νd | Elements | Evidential status |
|---|---:|---:|---|---|
| SF5; patent 675323 | 1.6751 | 32.3 | L1 | Schott equivalent at 1.67270 / 32.21; production supplier unspecified |
| J-SK16; patent 620602 | 1.6204 | 60.2 | L1′, L2, L3, L5 | HIKARI formula-3 equivalent at 1.62041 / 60.25; production supplier unspecified |
| F1; patent 629353 | 1.6287 | 35.3 | L4 | Sumita equivalent at 1.62588 / 35.6; production supplier unspecified |

The front pair deliberately combines the lower-Abbe positive L1 with the higher-Abbe negative L1′, matching the patent’s glass conditions. The rear section largely reuses the 1.6204/60.2 crown coordinate around the lower-Abbe L4. This supports discussion of ordinary achromatic balancing, but not APO performance, anomalous partial dispersion, or secondary-spectrum correction. All six elements now have compatible published dispersion curves; the source still provides no production-glass provenance or measured line indices.

## Focus Mechanism

The patent publishes only an infinity prescription. It gives no finite-conjugate table, object distance, magnification, variable spacing, moving-group identification, or mechanical focusing description. The data therefore uses `NO_INTERNAL_RECONSTRUCTION`, an empty `var` object, and no modeled focus motion. It does not assume unit focusing, inner focusing, or floating movement.

The required catalog field `closeFocusM` is set to 0.6 m from consistent surviving production-lens listings for M42 and Exakta examples [4; 5]. This value is secondary product metadata rather than a patent quantity or an optical state. Changing the viewer’s focus control cannot reconstruct a close-focus prescription because no focus variables are defined.

## Conditional Expressions

The patent’s claims impose first-order limits on the rear clearance, the front-to-rear separation, the powers of the two front lenses, selected radii, their mutual spacing, and their glass coordinates [1, claims 1–5]. The ratios below were independently recomputed from the validated scaled prescription; uniform scaling leaves them unchanged.

| Condition | Verified value | Patent bound | Result |
|---|---:|---:|---|
| `BFL / F` | 1.330283 | 1.15–1.60 | Pass |
| Front-to-rear separation `e2 / F` | 1.103485 | >0.50 and <12; preferred <3 | Pass |
| `|f_disperse| / F` | 1.805337 | 1–4 | Pass |
| `f_L1 / |f_disperse|` | 3.133611 | 1–10; preferred <4 | Pass |
| `|f_L1′| / |f_disperse|` | 0.732569 | 0.45–0.90 | Pass |
| `R1 / |f_disperse|` | 1.870886 | 1–10; preferred <4 | Pass |
| `R1′ / |f_disperse|` | 1.922983 | 1–4 | Pass |
| `R2′ / |f_disperse|` | 0.365502 | 0.25–0.60 | Pass |
| Front-pair air spacing / `|f_disperse|` | 0.005813 | <0.10 | Pass |
| `n_L1` | 1.6751 | >1.58 | Pass |
| `n_L1′` | 1.6204 | >1.58 | Pass |
| `ν_L1` | 32.3 | <45 | Pass |
| `ν_L1′` | 60.2 | >45 | Pass |

The condition results confirm that the transcribed example belongs within the patent’s claimed design space. They do not establish production identity independently of the historical and structural correlation described above.

## Verification Summary

Independent sequential height/reduced-angle tracing and an air-to-air ABCD matrix reproduce the scaled prescription’s effective focal length and back focal length. The modeled aperture gives the intended f/3.5 entrance pupil. Surface-by-surface Petzval accounting uses `φ/(n·n′)` and yields a sum of +0.00514230 mm⁻¹, corresponding to a signed Petzval radius of −194.466 mm under `R_P = −1/ΣP`.

| Quantity | Verified result |
|---|---:|
| Effective focal length | 28.0000 mm |
| Back focal length from the last vertex | 37.2479 mm |
| First vertex to image plane | 92.1988 mm |
| Modeled f-number | 3.5000 |
| Entrance-pupil semi-diameter | 4.0000 mm |
| Front dispersive pair EFL | −50.5494 mm |
| Rear collective section EFL | +30.1732 mm |
| Complete objective EFL | +28.0000 mm |

The inferred geometry was also checked for positive edge thickness, actual spherical rim slope, shared-gap sag intrusion, full-aperture containment at the modeled 60% field, representative rays at the published 75° field, and render-equivalent trimming. The limiting modeled edge thickness is 0.0754 mm at L5, the maximum rim angle is 63.2597° at surface 4, and no equivalent render trim was required. These are validations of the authored semi-diameters, not dimensions published by the patent.

## Sources

1. Pierre Angénieux, *Improvements in Wide-Angle Objectives*, GB 720,808, filed 13 March 1953, published 29 December 1954, pp. 1–5.
2. Angénieux, “Inventions signed Pierre Angénieux,” official company history, https://www.angenieux.com/our-story/inventions-signed-pierre-angenieux/.
3. *A History of Angénieux*, Film and Digital Times, 2013, https://www.fdtimes.com/pdfs/articles/angenieux/FDTimes-Angenieux-Special-IBC-Sept2013.pdf.
4. Wide-Angle.nl, “Angenieux Paris 28mm F3.5 Retrofocus lens type R11 with M42mm screw mount,” https://wide-angle.nl/shop/angenieux-paris-28mm-f3-5-retrofocus-lens-type-r11-with-m42mm-screw-mount-mf/.
5. Kamerastore, “Angenieux 28mm f3.5 Retrofocus R11 — Exakta,” https://kamerastore.com/en-fi/products/angenieux-28mm-f3-5-retrofocus-r11-exakta.
6. SCHOTT, “Optical Glass Datasheet N-SF5,” https://media.schott.com/api/public/content/f8d4ac6649594677ab1b17b05ebd6a8f?v=c75caf58.
7. HIKARI Glass, *Optical Glass Catalog*, June 2025, J-SK16 formula-3 data page.
8. OHARA, “S-TIM1 (NR),” https://oharacorp.com/glass/s-tim1/.
9. SUMITA, *Optical Glass Catalog*, discontinued-inclusive all-glass Zemax file dated 7 November 2025, F1 formula-3 row.
