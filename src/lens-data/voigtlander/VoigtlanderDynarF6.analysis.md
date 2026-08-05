## Patent Reference and Design Identification

**Patent:** US 765,006 A<br>
**Application serial:** 193,985<br>
**Filed:** February 17, 1904<br>
**Granted:** July 12, 1904<br>
**Inventor:** Carl August Hans Harting (printed as “Hans Harting”)<br>
**Assignee:** None named in the selected patent<br>
**Title:** Lens<br>
**Embodiment analyzed:** The patent's only worked numerical example

The data file transcribes the fixed job-card correlation between Harting's worked example and the Voigtländer Dynar f/6. The identification rests on convergent evidence rather than an explicit cross-reference in a manufacturer publication. The grant prints the inventor as “Hans Harting”; the structured metadata uses his established complete name, Carl August Hans Harting. It names no assignee.

1. The patent gives an f/6 system of five glasses in three air-separated groups: a front cemented pair, a separate central glass, and a rear cemented pair.
2. The contemporary Voigtlaender catalogue describes the Dynar F 6 in the same terms: five glasses, two firmly cemented pairs, and a fifth glass placed separately between them.
3. The catalogue offers 4½-, 5½-, 7-, 10-, and 12-inch cells, whereas the patent prescription is normalized to equivalent focal length 100. This supports use of the patent table as a normalized design rather than as a particular production focal length.
4. Later optical-history research identifies Harting's US 765,006 / German-family patent as the Dynar construction.

No consulted Voigtlaender source prints the US patent number. The correlation is therefore reported as the selected, well-supported identification, not as manufacturer-documented patent attribution.

The data title is `VOIGTLÄNDER DYNAR 100mm f/6`, matching the display treatment of the companion 100 mm Heliar model. The 100 mm value represents the patent's `fD=100` normalization rather than a selected marketed focal length. Consequently, the data file stores no `focalLengthMarketing` value and does not assign a production mount or image format.

## Optical Architecture

The prescription is an all-spherical, five-element, three-group positive-negative-positive anastigmat. A cemented positive doublet precedes a separate biconcave negative singlet; a second cemented positive doublet follows. The aperture stop lies in the air space between the central singlet and the rear doublet.

Harting's symmetry is not an exact geometric mirror symmetry. The front and rear groups use different curvatures, thicknesses, and negative-member glass coordinates. The common organizing principle is material ordering: each outer pair combines a higher-index crown with a lower-index negative member, while the glasses facing the central singlet are selected by their relative refraction and color dispersion.

Independent isolated-group and assembled-system calculations give:

| Group | Elements | Intrinsic focal length in air | In-situ collimated power contribution | Functional role |
|---|---|---:|---:|---|
| Front cemented doublet | L1-L2 | +36.319 mm | +0.027534 mm⁻¹ | Main front positive collector |
| Central singlet | L3 | -26.313 mm | -0.032986 mm⁻¹ | Strong negative central group |
| Rear cemented doublet | L4-L5 | +59.607 mm | +0.015334 mm⁻¹ | Rear reconverging positive group |

These quantities describe different conditions. The intrinsic focal length is the group's isolated thick-lens result in air. The in-situ contribution includes the ray height delivered by the preceding prescription and must not be substituted for isolated power.

The first-vertex-to-image distance is 109.478989489 mm, so `TL/EFL = 1.081872`; the system is not telephoto under the project definition. The back focal distance is 93.298989489 mm, so `BFD/EFL = 0.921981`; it is not retrofocus.

## Element-by-Element Analysis

### L1-L2 — Front Cemented Positive Doublet

**L1 — Biconvex Positive:** `nd = 1.61330`; `νd` unavailable. Glass: `Unmatched (vintage heaviest baryta crown; patent nD=1.61330, nG′=1.62723)`. Standalone `f = +30.894 mm`.

L1 supplies most of the front doublet's positive power. Its D-line index exceeds that of L2, satisfying the outer-pair ordering stated by Harting while allowing the cemented group to remain strongly positive.

**L2 — Negative Meniscus:** `nd = 1.56980`; `νd` unavailable. Glass: `Unmatched (vintage light baryta flint; patent nD=1.56980, nG′=1.58410)`. Standalone `f = -195.327 mm`.

L2 is a weak negative meniscus rather than the main negative group. Cemented to L1, it moderates the crown's power and supplies the front glass pairing used in the patent's chromatic and off-axis correction scheme. The completed doublet has an intrinsic focal length of +36.319 mm.

### L3 — Central Biconcave Negative Singlet

`nd = 1.60611`; `νd` unavailable. Glass: `Unmatched (vintage heavy silicate flint; patent nD=1.60611, nG′=1.62424)`. Standalone `f = -26.313 mm`.

L3 is the strongest negative standalone element and establishes the negative middle term of the positive-negative-positive architecture. Its two concave surfaces supply the largest negative surface-power and Petzval contributions.

The patent connects the material relationship around this central system with correction of astigmatism and coma. In the numerical example, L3 has both a higher D-line index and a larger D-to-G′ increment than either adjacent negative member. That two-line ordering is source-supported. A standard Abbe-number, anomalous-dispersion, or secondary-spectrum interpretation is not.

### L4-L5 — Rear Cemented Positive Doublet

**L4 — Biconcave Negative:** `nd = 1.53780`; `νd` unavailable. Glass: `Unmatched (vintage silicate glass; patent nD=1.53780, nG′=1.55143)`. Standalone `f = -35.604 mm`.

L4 begins the rear cemented pair and is substantially more negative than L2. The patent calls this material “silicate glass”; it is therefore not labeled as a flint in the data file. Its low index relative to L3 and L5 satisfies the rear-side material ordering while offsetting part of L5's strong positive power.

**L5 — Biconvex Positive:** `nd = 1.61330`; `νd` unavailable. Glass: `Unmatched (vintage heavy baryta crown; patent nD=1.61330, nG′=1.62723)`. Standalone `f = +22.992 mm`.

L5 is the strongest positive standalone element. Cemented behind L4, it leaves the rear pair with an intrinsic focal length of +59.607 mm. Its assembled contribution is +0.015334 mm⁻¹ because the incoming ray height differs from the isolated-group condition.

L1 and L5 share the same printed two-line coordinates, but Harting describes the front glass as the “heaviest” baryta crown and the rear glass as “heavy” baryta crown. The data annotations preserve that wording instead of collapsing both to a single asserted catalog identity.

## Glass Identification and Selection

The patent publishes refractive indices at the Fraunhofer D line and G′ = Hγ, approximately 434.047 nm. G′ is not the modern g line at 435.8 nm. The source does not give C- and F-line indices or a standard `νd`; those fields cannot be reconstructed uniquely from the two published coordinates.

| Elements | Patent class | nD | nG′ | Data-file disposition |
|---|---|---:|---:|---|
| L1 | Heaviest baryta crown | 1.61330 | 1.62723 | Unmatched vintage class |
| L2 | Light baryta flint | 1.56980 | 1.58410 | Unmatched vintage class |
| L3 | Heavy silicate flint | 1.60611 | 1.62424 | Unmatched vintage class |
| L4 | Silicate glass | 1.53780 | 1.55143 | Unmatched vintage class |
| L5 | Heavy baryta crown | 1.61330 | 1.62723 | Unmatched vintage class |

A fresh audit against the 1902 Jena glass tables found useful historical numerical neighbors, but not identities that justify catalog-resolved dispersion data:

| Patent material | Historical neighbor | Derived neighbor nG′ | Residual in (nD, nG′) | Audit disposition |
|---|---|---:|---:|---|
| L1/L5 baryta crown | Jena O.2994, Heaviest Baryta Crown | 1.62693 | (-0.00030, -0.00030) | Plausible family or melt neighbor only |
| L2 light baryta flint | Jena O.583, Baryta Light Flint | 1.58310 | (-0.00100, -0.00100) | Plausible family or melt neighbor only |
| L3 heavy silicate flint | No class-compatible close match | — | — | Remains unresolved |
| L4 silicate glass | Jena O.152, Silicate Glass | 1.55033 | (-0.00100, -0.00110) | Plausible family or melt neighbor only |

The small two-line residuals do not establish manufacturer, exact melt, `νd`, partial dispersion, or Sellmeier coefficients. L3 additionally lacks a class-compatible close historical match. All five elements therefore remain `Unmatched (...)`, and `νd`, `nC`, `nF`, `ng`, and `dPgF` are omitted. The available evidence supports relative D-to-G′ ordering only; it does not support an apochromatic or anomalous-dispersion claim.

## Focus Mechanism

The focus status is `NO_INTERNAL_RECONSTRUCTION`. The patent supplies one infinity prescription and no variable-spacing table, object-distance series, magnification, minimum focus distance, or internal focusing mechanism.

The data file therefore defines one static state and no `var` or `varLabels` block. The schema-required `closeFocusM: 1.0` is only a UI placeholder, not patent or product metadata and not a finite-focus reconstruction. Historical focusing by camera bed, bellows, plate motion, or whole-cell translation is outside the optical prescription.

## Patent Material-Ordering Conditions

Harting states the material relationships qualitatively rather than as numbered algebraic conditions. The worked example satisfies the relevant comparisons:

| Condition | Worked-example result |
|---|---|
| Outer crown L1 has higher nD than L2 | 1.61330 > 1.56980 |
| Outer crown L5 has higher nD than rear silicate L4 | 1.61330 > 1.53780 |
| L2 has lower nD and smaller D-to-G′ increment than L3 | 1.56980 < 1.60611; 0.01430 < 0.01813 |
| L4 has lower nD and smaller D-to-G′ increment than L3 | 1.53780 < 1.60611; 0.01363 < 0.01813 |

These comparisons retain the patent's two-line evidence without converting it into an unsupported standard Abbe model.

## Verification Summary

The prescription is stored without uniform scaling: one patent unit is represented as one millimeter. The patent states equivalent focal length 100, while fresh sequential height/reduced-angle tracing and an independent ABCD calculation from the final data arrays give:

| Quantity | Verified modeled value |
|---|---:|
| Effective focal length | 101.194018829 mm |
| Back focal distance from surface 8 | 93.298989489 mm |
| Front focal distance magnitude | 94.122176619 mm |
| Front principal plane from surface 1 | +7.071842210 mm |
| Rear principal plane from surface 8 | -7.895029340 mm |
| Entrance-pupil diameter | 16.700000000 mm |
| Physical stop semi-diameter | 7.397685555 mm |
| Modeled maximum-aperture f-number | 6.059522086 |
| Vertex track, surface 1 to surface 8 | 16.180000000 mm |
| First vertex to infinity image plane | 109.478989489 mm |
| Paraxial Petzval sum | +0.002898408 mm⁻¹ |

The printed prescription computes 1.194% longer than the stated normalization. A fresh 200,000-sample source-precision perturbation, using half-units in the last printed decimal for radii, thicknesses, and indices, produced EFL values from approximately 101.042 to 101.351 mm. Ordinary tabular rounding therefore does not recover 100 mm. The source values are preserved rather than silently rescaled.

The patent specifies only that the stop is in the 5.25 mm space between the central and rear systems. The rendered patent drawing places the stop about 61% of the way from surface 5 to surface 6. The model records this as 3.20 mm from surface 5 to `STO` and 2.05 mm from `STO` to surface 6. This is a disclosed figure-derived estimate, not a printed table value. The physical stop semi-diameter of 7.397685555 mm yields the patent's effective 16.7 mm entrance-pupil diameter and therefore the modeled f-number 6.059522086.

The patent publishes no semi-diameters or exact design image height. The stored clear apertures are modeling values derived from axial marginal rays, the configured off-axis pupil fractions, and a 600 dpi audit of the patent drawing. Surfaces 1–5 now use 10.0 mm rims and the rear group tapers only to 9.8–9.0 mm, matching the drawing's nearly equal group heights. Positive edge thickness, actual spherical rim angle, shared-gap clearance, and surface-domain validity were rechecked.

The 93.298989489 mm final spacing is the computed infinity BFD because the patent does not print an image-plane distance. The positive Petzval value is the surface-by-surface paraxial sum `φ/(n·n′)`; it is not an assertion that the fully corrected image surface has the reciprocal curvature.

All eight refracting surfaces are spherical. No asphere coefficients, conic constants, sensor cover glass, filters, inactive dummy planes, flare cutters, generic cement layers, folded-path surfaces, or mechanical components are present. The rendered page-2 prescription governs where searchable text corrupts signs or spectral subscripts.

## Sources

- Carl August Hans Harting (printed as Hans Harting), US 765,006 A, *Lens*, application serial 193,985, filed February 17, 1904 and granted July 12, 1904. The grant names no assignee. Page 1 supplies the section drawing; page 2 supplies the sole worked prescription, aperture, stop location, glass coordinates, and claim.
- The Voigtlaender & Son Optical Co., *Catalogue of Photographic Lenses*, approximately 1906, printed page 12 / PDF page 8. Used for the Dynar F 6 name, five-glass construction, f/6 designation, and catalogued production sizes.
- Heinrich Hovestadt, *Jena Glass and Its Scientific and Industrial Applications*, 1902, Appendix tables, pp. 388-393. Used only for the independent historical numerical-neighbor audit.
- Arne Cröll, *Evolution of the Double Gauss Lens*, secondary optical-history survey. Used as corroborating production-to-patent attribution, not as the prescription source.
- `VoigtlanderDynarF6.data.ts`, `VoigtlanderDynarF6.verify.py`, `VoigtlanderDynarF6.results.json`, and `VoigtlanderDynarF6.glass-audit.csv`, the final model and independent calculation artifacts.
