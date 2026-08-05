## Patent Reference and Design Identification

**Patent:** US 2,573,511 A<br>
**Filed:** November 17, 1949<br>
**Priority:** Switzerland, April 30, 1949<br>
**Granted:** October 30, 1951<br>
**Inventor:** Albrecht Wilhelm Tronnier<br>
**Assignee:** Voigtländer & Sohn Aktiengesellschaft<br>
**Title:** *Four-Lens Photographic Objective*<br>
**Embodiment analyzed:** Example 1

The data file transcribes Example 1 of US 2,573,511 A and correlates it with the Voigtländer Color-Skopar 105mm f/3.5 used on fixed-lens 6×9 cameras. This is the selected production correlation for the model, not a claim that Voigtländer published an explicit patent-to-product identification.

The correlation rests on several convergent facts:

1. Contemporary Voigtländer literature describes the Skopar as a four-element lens and lists a 2¼ × 3¼ inch Rangefinder Bessa Model 2 with a Color-Skopar f/3.5.
2. The patent is assigned to Voigtländer and specifies a four-element, three-group objective operating at f/3.5.
3. The patent's numerical example is normalized to 100mm equivalent focal length. Uniform scaling by 1.05 gives a computed design focal length of 104.999086mm, corresponding to the marketed 105mm designation.
4. The patent's 1949 filing date and 1951 grant fall within the post-war period in which the Color-Skopar was offered on Voigtländer 6×9 folding cameras.

The modeled prescription is uniformly enlarged by a factor of 1.05. Every radius, axial spacing, semi-diameter, stop coordinate, and image-plane distance is scaled by that factor. The design is entirely spherical, so no aspheric coefficient transformation is applicable. The marketed focal length and the computed design focal length remain separate in the data.

## Optical Architecture

The objective is an asymmetric Tessar/Skopar-type arrangement with four elements in three air-separated groups. Its power sequence is positive–negative–positive: a positive plano-convex front element, a separate biconcave negative element, and a cemented negative-positive rear doublet. The aperture stop lies between the separate negative element and the rear doublet.

The front element supplies substantial positive collection power. The separate negative element then expands and redirects the converging bundle before the stop. The rear cemented doublet restores positive power while pairing a negative light-flint component with a higher-index positive crown component. The rear group is therefore physically and optically a cemented unit; the standalone focal lengths of L3 and L4 are decomposition results, not their in-situ powers.

The computed front-vertex-to-image track is 122.739110mm and the Gaussian focal length is 104.999086mm, giving `TL/EFL = 1.168954`. The objective is therefore not telephoto under the `TL/EFL < 1` definition. Its computed back focal length is 87.522776mm, or `BFL/EFL = 0.833557`, so it is not retrofocus under the `BFL > EFL` definition.

The nominal 6×9 format used by the project gives a rectilinear full diagonal field of approximately 51.35° at 105mm. That field value is a format-based modeling inference; the patent itself states that the design can cover more than 40° and, under its stated relationships, more than 50°.

The patent publishes only the total air space between L2 and L3, not the stop's exact position within it. The data places the stop 5.32625mm behind surface 4, leaving 2.53321mm before surface 5, from the proportions of Fig. 1. The two distances preserve the exact scaled combined gap of 7.85946mm. The physical stop semi-diameter, 12.118311mm, is solved from the modeled f/3.5 entrance pupil rather than read from the patent.

## Element-by-Element Analysis

### L1 — Plano-Convex Positive

**nd = 1.62166, νd = 60.3. Glass: N-SK16 (Schott catalog equivalent; production supplier unspecified). Standalone f = +57.3813mm.**

L1 presents its convex surface toward object space and a plane rear surface toward the first air gap. It is the front positive collector and the first major contributor to the system's positive power. The patent emphasizes the unequal curvatures of the front element and places the stronger curvature on the object-side face.

Its plane rear surface also forms the front boundary of the air space that the patent treats as a negative air lens. Because the element is air-separated from L2, its quoted focal length is a meaningful standalone thick-lens result, although its actual contribution in the complete objective also depends on the following separation and negative group.

### L2 — Biconcave Negative

**nd = 1.57911, νd = 41.7. Glass: J-LF5 (Hikari catalog equivalent; production supplier unspecified). Standalone f = −36.0791mm.**

L2 is the strongest negative element in the design. It lies immediately ahead of the stop and has greater negative power than L3, matching the patent's explicit comparison of the two negative components. Its object-side radius is relatively long, while its stop-side surface is more strongly curved.

This element offsets the front positive power, increases the angular spread toward the diaphragm, and participates in the patent's chromatic balancing through its index and C–F mean dispersion. Its proximity to the stop also makes it important to the correction of oblique bundles, although the patent does not provide aberration contributions surface by surface.

### L3–L4 — Cemented Rear Doublet

The rear group is a cemented negative-positive doublet. Its computed net focal length in air is **+61.1147mm**. This is the physically meaningful standalone result for the assembled rear group; L3 and L4 values below are hypothetical decompositions obtained by placing each component separately in air.

#### L3 — Negative Meniscus

**nd = 1.57911, νd = 41.7. Glass: J-LF5 (Hikari catalog equivalent; production supplier unspecified). Hypothetical standalone f = −50.4445mm.**

L3 has a nearly plane, weakly curved front surface and a strongly curved cemented rear surface. It is the negative component of the rear doublet and uses the same optical coordinates and J-LF5 catalog equivalent as L2, preserving the shared index and dispersion conditions emphasized by the patent.

The focal length quoted for L3 is not its operating power inside the cemented pair. At surface 6 the medium changes directly from L3 to L4, and the interface carries the downstream L4 index in the data model.

#### L4 — Biconvex Positive

**nd = 1.65770, νd = 50.7876. Glass: J-SSK5 (Hikari catalog equivalent; production supplier unspecified). Hypothetical standalone f = +28.7236mm.**

L4 is the highest-power individual component. Its higher refractive index permits substantial positive power in the compact rear element, while its lower C–F mean dispersion than L2 and L3 supports the patent's prescribed chromatic relationship. The rear surface is concave toward object space under the patent's wording and has a larger absolute radius than the front surface of L1.

L4's νd is not printed directly in the patent table. It is derived from the published `nd = 1.65770` and `nF − nC = 0.01295` through `νd = (nd − 1)/(nF − nC)`. No individual C-, F-, or g-line index is inferred from that total dispersion.

## Glass Identification and Selection

| Element | Authored identification | nd | νd | Basis |
|---|---|---:|---:|---|
| L1 | N-SK16, Schott catalog equivalent | 1.62166 | 60.3 | Patent coordinates; production supplier unspecified |
| L2 | J-LF5, Hikari catalog equivalent | 1.57911 | 41.7 | Patent coordinates; production supplier unspecified |
| L3 | J-LF5, Hikari catalog equivalent | 1.57911 | 41.7 | Patent coordinates; production supplier unspecified |
| L4 | J-SSK5, Hikari catalog equivalent | 1.65770 | 50.7876 | nd and C–F dispersion published; νd derived |

The patent identifies glasses only by refractive and dispersive coordinates. Close class-compatible catalog matches provide Sellmeier dispersion equivalents for all four elements, but they do not establish a manufacturer or exact historical melt. The patent `nd` and `νd` remain authoritative, and each label explicitly leaves the production supplier unspecified.

The chromatic strategy is conventional achromatization by coordinated positive and negative powers, but the patent gives more specific constraints: both negative elements remain below `nd = 1.6000`, their C–F mean dispersion is restricted, L4 has higher index and slightly lower C–F mean dispersion, and the arithmetic mean of the L3 and L4 indices exceeds 1.60. These relationships are source facts. The available prescription does not support an APO or anomalous-partial-dispersion designation because it lacks per-element `nC`, `nF`, `ng`, and `dPgF`, and the catalog-equivalent labels do not establish anomalous partial dispersion for the historical melts.

The patent also publishes a seven-line chief-ray angular-deviation table. Its printed arithmetic is internally consistent, including the stated 1.764 arcsecond total span, but the exact spectral trace cannot be reproduced from the example because the individual line indices for the four glasses are not given.

## Focus Mechanism

The data uses `NO_INTERNAL_RECONSTRUCTION`. US 2,573,511 A publishes a single infinity prescription and provides no finite-object spacing table, magnification, object distance, or focus-group displacement. Consequently, the analysis does not assign variable gaps or infer a unit-, inner-, or floating-focus optical state.

Voigtländer's Bessa II instructions describe a coupled rangefinder and a focusing knob, and the manufacturer's near-subject guidance reaches approximately 3.3 feet. The data records `closeFocusM: 1.0` as rounded production metadata. It is not a computed object distance for the patent prescription and does not create a close-focus ray-trace state.

## Air Lenses

The patent explicitly designates the air space between L1 and L2 as a negative air lens. Its front boundary is the plane rear surface of L1 and its rear boundary is the concave object-side surface of L2. Rays emerging from L1 diverge toward the aperture in this region, so the gap contributes a negative air-lens action even though it contains no material element.

This source description is distinct from the L2-to-L3 stop gap. The latter is divided in the model only to place the single required `STO`; the patent publishes its total thickness but not the two component distances.

## Conditional Expressions

The patent's dimensional conditions are evaluated below in its native 100mm normalization. Uniform scaling leaves the dimensionless tests unchanged.

| Patent relationship | Example 1 result | Status |
|---|---:|---|
| `|R6|` and `|R7|` exceed 85% of entrance-pupil diameter | 27.3401mm and 46.3666mm > 24.2857mm | Pass |
| `24.3 ≤ |R6| ≤ 39.3mm` | 27.3401mm | Pass |
| `34.3 ≤ |R7| ≤ 59.3mm` | 46.3666mm | Pass |
| L2 and L3 `nd < 1.6000` | 1.57911, 1.57911 | Pass |
| Negative-glass `nF − nC` in 0.01175–0.01475 | 0.01387 | Pass |
| L4 `nd` in 1.625–1.675 | 1.65770 | Pass |
| `(nF − nC)L2 − (nF − nC)L4 < 0.00275` | 0.00092 | Pass |
| Mean `nd` of L3 and L4 in 1.601–1.649 | 1.618405 | Pass |
| `||R7| − |R1||` is 10–20% of EFL | 12.3936% | Pass |
| `(|R6| + |R7|)/|R3|` is 101–141% | 117.6063% | Pass |

The patent prints the end-radius difference as 12.396mm, whereas direct subtraction of the tabulated radii gives 12.3936mm. The data preserves the tabulated radii and uses the recomputed value. Its two 165% comparisons are internally consistent: $(4.5/3.5)^2 = 1.653$, so f/3.5 has about 165% of the light-gathering speed of f/4.5, while f/4.5 requires about 165% of the exposure time. The radius-arithmetic discrepancy does not change the prescription.

## Verification Summary

The final TypeScript surface arrays were independently traced in reduced-angle `y–ν` form and by separate ABCD matrix composition. The two implementations give identical matrix entries at reported precision. The computed Gaussian focal length is 104.999086mm and the computed back focal length is 87.522776mm. The authored final image gap retains the scaled published value of 87.522750mm; the difference is 0.0000258mm.

The inferred stop produces an entrance-pupil diameter of 29.999739mm and a modeled f-number of 3.499999999, agreeing with `nominalFno: 3.5`. Petzval summation performed surface by surface as `φ/(n·n′)` gives `+0.002776852mm⁻¹`, corresponding to `−360.120mm` under the stated `Rp = −1/ΣP` convention.

The patent gives no semi-diameters. All authored semi-diameters are modeling inferences constrained by the f/3.5 marginal bundle, the nominal 6×9 field, and a 600 dpi audit of Figure 1. The front member remains 18.5–18.0 mm, while the smaller negative and rear members were opened to 14.0 mm and 15.5 mm respectively to match the patent silhouette. Edge thickness, rim slope, shared-gap clearance, and surface-domain checks pass with the revised values.

No sensor cover, filter, dummy plane, flare-cutter plane, or mechanical part appears in the selected example, so none is omitted from the sequential optical model. The only non-refracting plane retained is the active aperture stop.

## Sources

1. Albrecht Wilhelm Tronnier, *Four-Lens Photographic Objective*, US 2,573,511 A, filed November 17, 1949, granted October 30, 1951, especially Fig. 1 and the Example 1 tables on patent pages 2–4.
2. Voigtländer, *Rangefinder Bessa Model 2*, scanned manufacturer booklet, especially PDF pages 8 and 11: <https://www.cameramanuals.org/voigtlander_pdf/voigtlander_bessa-model_2.pdf>
3. Voigtländer, *Bessa II Instructions*, scanned manufacturer manual, especially PDF pages 11–12: <https://www.cameramanuals.org/voigtlander_pdf/voigtlander_bessa_ii.pdf>
4. `VoigtlanderColorSkopar105mmf35.data.ts`, final LensVisualizer prescription.
5. `VoigtlanderColorSkopar105mmf35.audit.md` and `VoigtlanderColorSkopar105mmf35.calculations.json`, independent extraction, paraxial, pupil, geometry, glass, and ray-containment records.
