## Patent Reference and Design Identification

**Patent:** US 1,882,530 A
**Filed:** October 1, 1930
**Priority:** Germany, July 2, 1930
**Granted:** October 11, 1932
**Inventor:** Albrecht Wilhelm Tronnier
**Assignee:** None named on the supplied US grant
**Title:** *Spherically Chromatically and Astigmatically Corrected Wide-Angle Lens with High Aperture*
**Embodiment analyzed:** Sole numerical construction in the patent; designated “Example 1” by the job card

The patent describes a wide-angle photographic double objective formed from two cemented three-lens components around a central diaphragm. Its sole worked construction is normalized to a focal distance of unity and is explicitly stated to correspond to an equivalent focal length of 200 mm at a relative aperture of 1:6.8. The same passage gives an approximate usable outside-meniscus diameter equal to 20% of the focal distance and a total lens-cell length equal to 17.488% of the focal distance. The numerical radii and thicknesses appear on patent PDF page 2 / printed page 1; the glass-coordinate table appears on PDF page 3 / printed page 2. [1]

The modeled 210 mm prescription is not a second patent example. Every patent length is uniformly scaled by 1.05 from the 200 mm construction because the fixed catalog target is the Schneider Angulon 210mm f/6.8. The scaled prescription computes to a paraxial EFL of 210.020516 mm. That homothety is a modeling choice rather than a claim that every production 210 mm Angulon used an exact enlarged copy of the patent example.

Manufacturer-origin Schneider catalog material independently lists an Angulon f/6.8 at 210 mm and describes the Angulon construction as two components of three cemented lenses each. A second Schneider-origin large-format catalog lists a 210 mm f/6.8 Technika Angulon. These records support a strong product-family correlation with the patent architecture, but the supplied US grant itself does not name Schneider as assignee or applicant. The patent-to-product attribution is therefore treated as correlation rather than manufacturer confirmation of this exact numerical prescription. [2][3]

A secondary transcription of an October 1930 Schneider brochure reports separate 210 mm Angulon component focal lengths of about 430 mm and 330 mm. The independently computed 210-scaled cemented-triplet EFLs are 432.514 mm and 325.748 mm, respectively. That agreement is useful corroboration, but it remains secondary evidence. A later secondary Schneider-data transcription gives 208 mm EFL, 196 mm BFL, and 6.2 mm principal-plane separation for a 210 mm Angulon; those values are not forced onto the fixed patent example. [4][5]

## Optical Architecture

The design is a two-component, six-element wide-angle double objective with one cemented triplet before the diaphragm and one after it. The patent describes the construction as quasi-holosymmetric rather than perfectly symmetric. The glass indices increase in the direction away from the diaphragm on both sides, and the two outer members are negative menisci. The patent also identifies departures from strict proportionality in the rear component, including the rear outer-element thickness and the final radius R8. [1, PDF p. 2 / printed p. 1]

Each triplet contains a negative outer meniscus, a strong positive middle element, and a negative biconcave element adjacent to the diaphragm. When each complete cemented triplet is isolated in air, the final model gives a net positive EFL of 432.514 mm for the front triplet and 325.748 mm for the rear triplet. These cemented-component powers are distinct from the standalone-in-air focal lengths of the individual elements and should not be read as the in-situ power of either component inside the complete objective.

The implemented cell extends 36.7248 mm from the R1 vertex to the R8 vertex. The paraxial infinity-image BFD is 198.930842 mm from the R8 vertex. The ratio from R1 to the paraxial image plane divided by EFL is 1.122060, so the model does not meet the project’s `TL/EFL < 1` telephoto criterion. Its BFD/EFL ratio is 0.947197, so it likewise does not meet the `BFD > EFL` retrofocus criterion.

The stop position is source-defined rather than inferred from a drawing. The patent prints the central separation as Δ = 0.04050, divided into Δ/2 on each side of diaphragm B. After the 1.05 scale, the model therefore uses 4.2525 mm from R4 to the stop and another 4.2525 mm from the stop to R5. [1, PDF pp. 1–2]

Schneider rated the 210 mm Angulon as a wide-angle lens for large sheet film. Later Schneider lens data give an image circle of 382 mm at f/16 (85°) and recommend a 240 × 300 mm format, the closest canonical format being 8×10 inch. Period sources disagree on the exact figure: 1930s Schneider catalogs quoted 80° at full aperture, 8×10 inch coverage at f/6.8 and larger sheets when stopped down, while a mid-1970s guide gives 362 mm. The data file records `imageFormat: "8x10"` and `imageCircleMm: 382` (the f/16 value) and treats the spread as source uncertainty rather than a modeled result. The modeled 21.0 mm outer semi-diameters follow the patent's approximate usable diameter and are not fitted to that coverage.

## Element-by-Element Analysis

### L1 — Outer Negative Meniscus

Stored `nd` slot = 1.6035, preserving the patent’s sodium-D `n_D`; stored ν slot = 38.0. Glass: **F5 spectral proxy (supplier unconfirmed)**. Standalone-in-air f = **−62.401 mm**.

L1 is the front outer member of the first cemented triplet. Its index is the highest of the three front-component coordinates, consistent with the patent requirement that refractive index increase away from the diaphragm. It shares the dispersing cemented interface R2 with L2. The data file does not assign a historical manufacturer or melt from the coordinate alone.

### L2 — Biconvex Positive Middle Element

Stored `nd` slot = 1.5715, preserving source `n_D`; stored ν slot = 50.8. Glass: **S-BAL2 spectral proxy (supplier unconfirmed)**. Standalone-in-air f = **+30.347 mm**.

L2 is the strong positive middle member of the front triplet. Its two cemented boundaries connect the higher-index L1 to the lower-index L3. The L2→L3 boundary is the collecting cemented surface used by the patent’s principal index-difference condition: the implemented coordinate difference is 1.5715 − 1.4631 = 0.1084.

### L3 — Stop-Adjacent Biconcave Negative Element

Stored `nd` slot = 1.4631, preserving source `n_D`; stored ν slot = 64.9. Glass: **FK3 spectral proxy (supplier unconfirmed)**. Standalone-in-air f = **−62.267 mm**.

L3 is the low-index biconcave element adjacent to the central diaphragm on the front side. The patent specifically requires the corresponding stop-adjacent biconcave glass to have an index for yellow light below 1.49; the published coordinate 1.4631 satisfies that condition. Its rear surface R4 opens into the central air space containing the diaphragm. [1, PDF pp. 2–3]

### L4 — Stop-Adjacent Biconcave Negative Element

Stored `nd` slot = 1.4631, preserving source `n_D`; stored ν slot = 64.9. Glass: **FK3 spectral proxy (supplier unconfirmed)**. Standalone-in-air f = **−62.267 mm**.

L4 is the rear-side counterpart to L3 and begins the second cemented triplet. It uses the same published optical coordinates and the same standalone power in the uniformly scaled model. Its front surface R5 is separated from R4 by the source-defined diaphragm space.

### L5 — Biconvex Positive Middle Element

Stored `nd` slot = 1.5715, preserving source `n_D`; stored ν slot = 50.8. Glass: **S-BAL2 spectral proxy (supplier unconfirmed)**. Standalone-in-air f = **+30.347 mm**.

L5 is the strong positive middle member of the rear triplet. It reproduces the same published coordinate pair as L2 and participates in the rear collecting cemented interface at R6. The model retains the patent’s index progression rather than substituting a modern catalog glass.

### L6 — Rear Outer Negative Meniscus

Stored `nd` slot = 1.6035, preserving source `n_D`; stored ν slot = 38.0. Glass: **F5 spectral proxy (supplier unconfirmed)**. Standalone-in-air f = **−66.469 mm**.

L6 is the rear outer negative meniscus. It shares the same published optical coordinates as L1 but not the same geometry: the patent’s quasi-holosymmetric construction deliberately departs from front/rear proportionality in the rear outer member and at R8. The resulting standalone focal length is therefore different from L1 despite the shared refractive coordinate.

## Glass Identification and Selection

The patent names no glass manufacturer and no historical glass designation. It publishes only three pairs of sodium-D refractive index and ν values. The data file therefore retains those numbers as source coordinates and uses qualified catalog spectral proxies without asserting a historical supplier.

| Source coordinate | Elements | Data-file glass description | Identification limit |
|---|---|---|---|
| `n_D = 1.6035`, ν = 38.0 | L1, L6 | F5 spectral proxy | Catalog nD = 1.603281, νD = 38.021; historical supplier unproven |
| `n_D = 1.5715`, ν = 50.8 | L2, L5 | S-BAL2 spectral proxy | Catalog nD = 1.570889, νD = 50.791; historical supplier unproven |
| `n_D = 1.4631`, ν = 64.9 | L3, L4 | FK3 spectral proxy | Catalog nD = 1.464437, νD = 65.760; approximate spectral model only |

The distinction between sodium D and the modern Fraunhofer d line is material. `LensDataInput` can tag d- or e-line coordinates but has no separate sodium-D reference tag, so the published numeric values are stored in the historical `nd`/`vd` slots with `indexReference` intentionally omitted. No D→d conversion is claimed. Each proxy was evaluated at sodium D (589.2938 nm), with νD computed from C/F,
and also checked against the runtime d-line compatibility limits. All three pairs remain within Δn ±0.003 and Δν ±2
on both comparisons. The named curves approximate chromatic behavior; they do not reconstruct the historical melts. [6–8]

No `nC`, `nF`, `ng`, or `dPgF` values are authored because the patent does not publish them and the historical melt identities are not established. Consequently, the model does not support an APO or anomalous-partial-dispersion claim. The glass data are sufficient for the patent’s index/Abbe-coordinate conditions and for the monochromatic/paraxial calculations reported here, but not for a supplier-specific Sellmeier reconstruction.

## Focus Mechanism

The prescription has **NO_INTERNAL_RECONSTRUCTION**. The patent gives one fixed optical cell and no finite-object spacing table, floating group, zoom state, or internal focus motion. Accordingly, `var` and `varLabels` are empty.

Practical focusing of a large-format Angulon is performed by changing the lens-to-image-plane separation with camera bellows or standard movement. That system-level translation is outside the internal optical prescription. The data file’s `closeFocusM = 1.0` is only the current finite UI/schema placeholder used for fixed-cell large-format records; it is not a Schneider-published minimum focusing distance and does not imply a modeled 1 m focus state.

## Patent Conditions

The patent states several quantitative conditions for the claimed wide-angle construction. Re-evaluation from the final parsed model gives:

1. The collecting cemented index difference is **0.1084**, greater than **0.08**.
2. The dispersing cemented index difference is **0.0320**, greater than one quarter of the collecting difference (**0.0271**).
3. The index difference between the two outer dispersing lenses L1 and L6 is **0.0000**, below **0.150**.
4. The stop-adjacent biconcave glass coordinate is **1.4631**, below the patent’s **1.49** yellow-light limit.
5. The collecting cemented-radius magnitude is **0.41432 EFL** in the implemented model, within the claimed one-third to one-half range.
6. The dispersing cemented-radius magnitude is **0.09955 EFL**, within the claimed 7.5% to 15% range.

These checks reproduce the patent’s inequalities without altering the published values. The conditions are stated in the descriptive text and claims on patent PDF pages 2–4. [1]

## Verification Summary

The completed 210 mm model is a uniform 1.05× scale of the patent’s 200 mm numerical construction. Sequential height/reduced-angle tracing and an independently coded ABCD matrix product agree to floating-point precision. The final parsed data give an EFL of **210.020516 mm**, a BFD of **198.930842 mm** from R8, and a principal-plane separation of **5.821899 mm**.

The physical diaphragm diameter is not published. The modeled stop semi-diameter of **13.807122 mm** is therefore an f/6.8 calibration inference. It produces a computed entrance-pupil semi-diameter of **15.442685 mm** and a modeled f-number of **6.800000**. Agreement with f/6.8 confirms the calibration target, not an independently measured historical iris diameter.

Semi-diameters require the same distinction. The patent’s approximate 0.20-focal-distance outside-meniscus diameter becomes a 21.0 mm semi-diameter after scaling and is used as the source anchor on the exposed outer faces. The internal 15.538 mm and 14.0 mm semi-diameters are modeled clear apertures. They pass the portable spherical-domain, actual-rim-slope, positive-edge-thickness, shared-gap, and exact meridional containment checks used for this dossier.

The most restrictive modeled element rim is the L2/L5 pair, for which the computed positive edge thickness is only **0.001205 mm** at the selected clear aperture. That is a model-clear-aperture result, not a claim about a production metal cell or manufacturing rim. The retained rims follow the optical boundaries of the stepped cemented groups; the outer blank extensions are not internal clear apertures.

Exact meridional verification also confirms that the axial rays solved to both stop edges stay within the modeled clear apertures. A representative 25° field sample produced **1778** stop-surviving rays with no modeled-surface containment violation, and a 42.5° chief ray reaches the paraxial image plane. The latter is a reference path only; it is not a claim that the full pupil is unvignetted over an 85° field at maximum aperture.

Surface-by-surface Petzval evaluation using `φ/(n·n′)` gives a sum of **0.0009890021 mm⁻¹**, corresponding to a paraxial Petzval-radius magnitude of about **1011.12 mm**. This is a computed first-order property of the modeled 210 mm prescription, not a manufacturer-published field-curvature specification.

## Sources and References

1. Albrecht Wilhelm Tronnier, **US 1,882,530 A**, *Spherically Chromatically and Astigmatically Corrected Wide-Angle Lens with High Aperture*, filed October 1, 1930, German priority July 2, 1930, granted October 11, 1932. Numerical construction and aperture statement: PDF p. 2 / printed p. 1; glass table and claims: PDF pp. 3–4 / printed pp. 2–3. <https://patents.google.com/patent/US1882530A/en>
2. **Jos. Schneider Optische Werke, Schneider Lenses catalog**, archival scan hosted by Pacific Rim Camera. The archival catalog identifies an Angulon f/6.8 210 mm and describes the construction as two components of three cemented lenses each. <https://www.pacificrimcamera.com/rl/00832/00832.pdf>
3. **Schneider Optik Kreuznach large-format lens catalog**, archival scan hosted by Pacific Rim Camera. The catalog lists a 210 mm f/6.8 Technika Angulon. <https://www.pacificrimcamera.com/rl/00459/00459.pdf>
4. Secondary transcription discussing Schneider brochure **1-3000 X.30 F.H.Kv.**, reporting approximately 430 mm and 330 mm focal lengths for the two 210 mm Angulon components. Used only as corroboration, not as the prescription source. <https://forum.grossformatfotografie.de/forum/user-post-list/148-olet/?pageNo=10>
5. Roger Hyam, **Schneider Kreuznach Vintage Lens Data – Angulon 6.8/210mm**, secondary transcription of later Schneider optical data. Used to document the later 208 mm EFL / 196 mm BFL discrepancy and the 382 mm image circle at f/16 with its 240 × 300 mm recommended format. <https://www.hyam.net/blog/archives/3961> <https://hyam.net/posts/2019/schneider-kreuznach-vintage-lens-data.html>

6. SCHOTT, **F5 optical glass**, manufacturer catalog coefficients retained in the project glass catalog.
7. OHARA, **S-BAL2 optical glass**, manufacturer catalog coefficients retained in the project glass catalog.
8. SCHOTT, **FK3 datasheet**, Inquiry Glass collection, PDF p. 8. https://www.schott.com/en-dk/products/optical-glass/-/media/project/onex/products/o/optical-glass/downloads/schott-optical-glass-inquiry-glass-collection-datasheets-english-28082019.pdf
