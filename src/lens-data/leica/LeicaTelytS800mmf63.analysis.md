## Patent Reference and Design Identification

**Patent:** US 3,536,379<br>
**Priority:** April 22, 1966 (Germany L 53,417)<br>
**Filed:** April 18, 1967<br>
**Granted:** October 27, 1970<br>
**Inventor:** Georg Knetsch<br>
**Assignee:** Firma Ernst Leitz GmbH<br>
**Title:** *Three Lens Objective with Good Correction of the Secondary Spectrum*<br>
**Embodiment analyzed:** Sole preferred numerical embodiment, mapped from the job card as “Example 1”

US 3,536,379 describes a three-element cemented objective in which a positive central element of anomalous partial-dispersion glass is enclosed by two negative menisci. The prescription used here is the patent's sole numerical example and claim prescription. The rendered table on patent PDF page 4 supplies the four radii, three center thicknesses, native Fraunhofer-e indices, e-line Abbe values, partial-dispersion coordinates, and individual lens powers; page 5 states the normalized focal length of 1.0, relative aperture f/5.9, and the practical 800 mm embodiment.

The production correlation is strong but not manufacturer-confirmed. Leica Camera AG's July 2016 R-lens compatibility list identifies the **Telyt-S 800mm f/1:6.3**, product code **11 921**. Manufacturer-origin 1979 and 1987 Leica/Leitz catalog material describes the production lens as an **800 mm f/6.3**, **3-element / 1-component** design using Leitz special glasses, with Leica R mounting and a 12.5 m minimum focusing distance. Those characteristics converge with the Ernst Leitz patent's three-element cemented 800 mm objective, but no accessible Leica primary source explicitly states that product 11 921 implements US 3,536,379. The analysis therefore treats the match as a research correlation, not an attribution by Leica.

The production and patent apertures are deliberately kept separate. The patent design is f/5.9, while the marketed Telyt-S is f/6.3. Likewise, 800 mm is the marketed and practical nominal focal length; the uniformly scaled patent prescription computes to a Gaussian e-line EFL of **806.583 mm**.

## Optical Architecture

The modeled objective is a **three-element, one-group cemented triplet** with negative-positive-negative power sequence. L1 and L3 are negative menisci, while L2 is the positive central element. All four refracting surfaces are spherical. There are no patent-published air gaps within the optical cell, no aspheres, no zoom state, and no patent focus-spacing table.

The patent makes the glass-index relationships part of the architecture. Both negative elements have higher e-line index than the central positive element, so the two cemented interfaces contribute divergent surface action. It also specifies preferred index steps and a preferred range for the two cemented radii. Independent verification reproduces those conditions from the source prescription.

The data model uses the patent's normalized prescription at a uniform scale factor of **800**. All radii and glass thicknesses are multiplied by 800, while refractive indices and Abbe values remain unchanged. No rescaling is applied to force the computed EFL to exactly 800 mm. This preserves the distinction between the rounded source normalization and the exact first-order result.

Under the project's geometric terminology, this implemented model is **not classified as telephoto**: the first-vertex-to-image track divided by EFL is **1.01815**, above the required threshold of 1. It is also not retrofocus, because BFD/EFL is **0.96955**, below 1. These classifications refer to the modeled patent prescription and do not reinterpret the historical Telyt product name.

## Element-by-Element Analysis

### L1 — Front Negative Meniscus

**ne = 1.67245, νe = 45.8. Glass: Unmatched (Leitz proprietary/custom recipe; N-BAF10 coordinate-near only). Standalone thick f = −1034.182 mm.**

L1 is the first negative meniscus of the cemented triplet. The patent publishes both its optical coordinates and its raw-material recipe. Because the recipe is explicitly a Leitz composition and no public catalog identity was established, the data file does not replace it with a modern catalog glass. SCHOTT N-BAF10 is coordinate-near in the e-line diagram, but that proximity is used only as comparative evidence and not as identity.

The element's negative standalone power is distinct from its behavior inside the cemented triplet. Its data-file focal length is the independently recomputed finite-thickness standalone value; the patent's printed element power is the thin-lens-style value used in the patent's chromatic-condition arithmetic.

### L2 — Central Biconvex Positive Element

**ne = 1.54408, νe = 73.0. Glass: Unmatched (Leitz proprietary fluorophosphate APD glass; exact recipe published). Standalone thick f = +238.573 mm.**

L2 is the only positive element and the only glass that the patent explicitly identifies as anomalous in partial dispersion. The source gives a fluorophosphate composition, a partial-dispersion coordinate **ν′ = 0.4819**, and an anomalous-dispersion displacement **Δνe = 11.8** in the patent's own notation. These quantities are retained as source spectral evidence; they are not reinterpreted as modern `dPgF`.

The patent places this converging element between two higher-index negative menisci and uses that combination in its primary- and secondary-spectrum conditions. The analysis does not infer a modern catalog ED/FK identity, because no defensible exact catalog match was established.

### L3 — Rear Negative Meniscus

**ne = 1.57125, νe = 55.8. Glass: BaK4 (Jenaer Glaswerk Schott & Gen.; modern N-BAK4 coordinate-compatible). Standalone thick f = −495.878 mm.**

The patent explicitly identifies the rear negative meniscus as **BaK4** from Jenaer Glaswerk Schott & Gen. The stored historical identity is therefore source-backed. A modern SCHOTT N-BAK4 entry is sufficiently coordinate-compatible to provide a catalog bridge at the e-line reference.

The runtime resolves the modern N-BAK4 curve as a coordinate-compatible spectral proxy in the patent’s e-line reference. Catalog-derived line indices and partial dispersion are not authored as measured properties of the historical BaK4 melt.

## Glass Identification and Selection

The model deliberately preserves the patent's native **Fraunhofer e-line** convention. The historical schema fields `nd` and `vd` therefore contain `ne` and `νe`, with `indexReference: "e"` on all three elements.

| Element | Source identity | ne | νe | Spectral treatment |
|---|---|---:|---:|---|
| L1 | Leitz proprietary recipe | 1.67245 | 45.8 | Unmatched; no fabricated standard-line indices |
| L2 | Leitz fluorophosphate anomalous-partial-dispersion recipe | 1.54408 | 73.0 | Patent ν′ and Δνe retained as source notation; no fabricated `dPgF` |
| L3 | BaK4, Jenaer Glaswerk Schott & Gen. | 1.57125 | 55.8 | Modern N-BAK4 runtime spectral proxy; historical melt remains unconfirmed |

The patent defines `νe = (ne − 1)/(nF′ − nC′)` and `ν′ = (ng − nF′)/(nF′ − nC′)`. For L1 and L2 these values determine dispersion differences but not unique absolute C′, F′, and g indices. Consequently, an exact replay of the patent's multi-line longitudinal ray curves is not supported from the selected prescription alone. That limitation is kept separate from the algebraic chromatic-condition checks, which are reproducible.

## Focus Mechanism

The patent publishes only the infinity state: rays enter parallel to the optical axis, and no focus-dependent spacing table is supplied. The data file therefore uses **NO_INTERNAL_RECONSTRUCTION** and contains no authored `var` spacings.

Production literature gives a **12.5 m minimum focusing distance** and describes rapid focusing by a rotary knob and parallel guide. Those product facts do not uniquely determine how the optical cell moves relative to the image plane, so 12.5 m is retained only as production metadata. The model does not claim a reconstructed close-focus optical state, focus travel, or focus-dependent BFD.

## Chromatic Correction Strategy

The patent evaluates correction with two algebraic conditions based on each element's refractive power, e-line Abbe number, and partial-dispersion coordinate. Using independently recomputed thin element powers from the published radii gives

- `|ΔΦ/Φ| = 0.000304946`, below the patent's preferred limit of `0.0004`;
- `|Δ′Φ/Φ| = 0.000271671`, also below the preferred `0.0004` limit.

The source's printed individual powers independently reproduce `ΔΦ ≈ 0.00030` and `|Δ′Φ| ≈ 0.00027` at the stated precision. The patent's equivalent Abbe number `N = 3337` is retained as a source value even though direct recomputation from the rounded displayed rows gives a different value; the cancellation is sufficiently ill-conditioned that the source `Φ/N` still rounds to the printed `ΔΦ = 0.00030`.

The same verification also confirms the patent's index-step conditions: `ne1 − ne2 = 0.12837` exceeds 0.06, and `ne3 − ne2 = 0.02717` is at least 0.01. The two cemented radii have equal magnitude in the source, `|r2| = |r3| = 0.320041`, within the specified 0.2–0.4 focal-length interval for the normalized `f = 1.0` design.

These checks support the patent's stated chromatic design conditions. They do not substitute for the full Fig. 2 multi-line spherical ray curves, because L1 and L2 lack the absolute line-index anchors needed for an exact spectral replay.

## Aperture and Clear-Aperture Modeling

The patent publishes **f/5.9** and a normalized rim-ray height, but it does not publish a physical diaphragm position or diaphragm diameter. The implemented model therefore uses one disclosed synthetic `STO` immediately behind the cemented cell, co-located with the fourth refracting-surface vertex. Its physical semi-diameter is **66.2733 mm**. Paraxial imaging through the triplet gives an entrance-pupil semi-diameter of **68.3545 mm** and a modeled f-number of **5.90000000002**.

That f-number agreement is a calibration result: the stop size was chosen to reproduce the published f/5.9 target. It is not independent evidence for the production Telyt-S diaphragm location or diameter.

The patent also supplies no per-surface semi-diameters. The four refracting surfaces are modeled at **69.5 mm** semi-diameter. Exact three-dimensional spherical-ray sampling across the full 135-format diagonal field and circular stop pupil used **1,805 rays** and found a minimum sampled surface clearance of **0.814 mm**. The smallest modeled element edge thickness is **0.773 mm**, and the largest actual spherical rim-slope angle is **15.751°**. This finite sampling supports the internal consistency of the authored geometry but is not a continuum proof; these modeled clear-aperture checks are not production clear-aperture measurements and do not replace LensVisualizer's production render diagnostics.

## Verification Summary

The final data revision was parsed directly and recomputed rather than verified against a separate hand-entered application copy. Independent reduced-angle sequential tracing and ABCD composition agree for the implemented model.

At the infinity/e-line state, the parsed prescription gives:

| Quantity | Verified implemented result |
|---|---:|
| Gaussian EFL | 806.583 mm |
| BFD from surface 4 | 782.025 mm |
| First-vertex to image track | 821.225 mm |
| Petzval radius | 1143.756 mm |
| TL/EFL | 1.01815 |
| BFD/EFL | 0.96955 |

Petzval curvature was recomputed surface by surface as `φ/(n·n′)`. The resulting radius is positive **1143.756 mm** in the implemented sign convention. Standalone element focal lengths, the exact cemented-system power, and the patent's printed thin-element powers are kept as different quantities rather than conflated.

The companion audit log records repository integration checks, separately from the portable source calculations.

## Sources

1. Georg Knetsch, **US 3,536,379**, *Three Lens Objective with Good Correction of the Secondary Spectrum*, filed April 18, 1967; granted October 27, 1970. Prescription and glass data: PDF p. 4; aperture, practical 800 mm discussion, and claim: PDF p. 5.
2. Leica Camera AG, **Supported lenses by R-Lens adapters**, July 2016, p. 2, entry “Telyt-S 800mm f/1:6.3,” code 11 921. https://leica-camera.com/sites/default/files/pm-55346-160726_Kompatibilitat_R-Objektive_E.pdf
3. E. Leitz, Inc. / Ernst Leitz, **Leitz Photo Products catalog/dealer material**, effective 1979, manufacturer-origin catalog mirrored by device.report. https://device.report/m/7850ec4e2e207524ef0d4c7fdd6976e755c65d454042c31a48b2ee345b0d7314
4. Ernst Leitz / Leica, **Leica R system catalog 5/87**, manufacturer-origin catalog mirrored by device.report. https://device.report/m/45d516c2ad4829fd27b4e34e553b14de23968c124d847307b2d3efb4f7e387d8
5. SCHOTT, **Optical Glass Datasheet Collection**, N-BAK4 and N-BAF10 entries, accessed September 18, 2026. https://media.schott.com/api/public/content/38cbbe876d324e03b1881d33f3d26635?v=723d67d6
6. Hikari Glass / Nikon, **Optical Glass 2023**, used for C′/e/F′/g wavelength conventions. https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf
