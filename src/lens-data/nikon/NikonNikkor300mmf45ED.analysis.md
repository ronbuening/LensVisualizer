## Patent Reference and Design Identification

**Patent:** US 3,774,991\
**Application Number:** 209,617\
**Priority:** 25 December 1970 (Japan 45/125634)\
**Filed:** 20 December 1971\
**Granted:** 27 November 1973\
**Inventor:** Yoshiyuki Shimizu\
**Assignee:** Nippon Kogaku K.K.\
**Title:** *Achromatic Telephoto Objective Lens*\
**Embodiment analyzed:** Example I

Example I is the 300.0 mm, F/4.5, 8.4° full-field embodiment of Shimizu's achromatic telephoto patent. The implemented prescription preserves the ten published spherical refracting surfaces at unit scale and adds only the model completions needed by LensVisualizer: a Gaussian image-plane spacing, one inferred aperture-stop plane and calibrated opening, and modeled clear apertures. [1, pp. 10–13]

The identification with the production **Nikkor 300mm f/4.5 ED** is strong but not manufacturer-confirmed patent attribution. Several independent facts converge:

1. Example I has the exact 300 mm / f/4.5 design class later marketed by Nikon. [1, p. 11]
2. The patent is assigned to Nippon Kogaku K.K., and its Examples I–IV form the sequence 300/4.5, 600/5.6, 800/8, and 1200/11. [1, pp. 11–12]
3. Nikon states that those same four ED telephotos were released in 1975 as a four-lens series. [2; 3]
4. A period Nikon *Objectifs Nikkor* specification table lists the 300mm f/4.5 ED-Nikkor as a 6-element / 4-group lens with a 4 m minimum focus. [4, scan p. 52 / printed p. 51]
5. Nikon's corporate history records the development of PC102 ED glass in December 1971 and its subsequent use in F-mount telephotos of 300 mm and longer. [5]

There are also limits to the correlation. No consulted Nikon source explicitly identifies US 3,774,991 Example I as the production prescription. The period brochure gives a marketed field of 8°10′, whereas the patent gives 8.4° (8°24′); these values are kept separate rather than silently reconciled. The patent's 1.48606 / 81.5 fluophosphate coordinate also must not be relabeled PC102: Nikon dates PC102 development to December 1971, after the patent's December 1970 priority. [1, p. 11; 4; 5]

## Optical Architecture

The prescription is a six-element, four-group telephoto objective. In LensVisualizer grouping, G1 is L1, G2 is the cemented L2/L3 pair, G3 is L4, and G4 is the cemented L5/L6 rear pair. The patent uses the different term *component* for the four members of the forward achromatic group; that terminology should not be confused with the four air-separated groups in the data model. [1, p. 10]

The verified front assembly from r1 through r7 is net positive, with an air-to-air EFL of **+185.1848 mm**. The rear cemented pair is net negative at **−120.7984 mm** and is separated from the forward assembly by the published **119.3 mm** axial gap. This positive-front / negative-rear power distribution is the defining telephoto architecture described by the patent. The final parsed model has EFL **299.9996 mm**, Gaussian BFD **70.0535 mm** from r10, and front-vertex-to-image track **232.5535 mm**; therefore `TL/EFL = 0.775179 < 1`, independently satisfying the project telephoto criterion. The model is not retrofocus. [1, pp. 10–11]

All source surfaces are spherical. The patent does not publish an image-plane spacing after r10, so the data file uses the verified Gaussian BFD of 70.05348978527317 mm as the final rear spacing. This is a model completion, not a transcribed patent d10.

The patent likewise does not publish a diaphragm station. The model places a neutral air stop 1.0 mm behind r7, splitting the published r7-to-r8 separation into 1.0 mm plus 118.3 mm without moving either refracting surface. The stop semi-diameter, **30.2594 mm**, is calibrated by exact spherical Snell tracing to the modeled/source F/4.5 target. Matching F/4.5 therefore verifies the internal calibration but does not establish the production diaphragm's physical diameter or axial position.

The patent gives no clear-aperture table. The surface semi-diameters in the data file are modeled ray-envelope values, not source dimensions. Because those modeled apertures are not source field stops, the model explicitly declares a rectilinear **8.4° full / 4.2° half field** from the patent rather than deriving coverage from the modeled semi-diameters. The geometry check retains positive edge thickness, an actual maximum rim-slope angle of **24.8933°**, a maximum positive stop-inclusive shared-gap intrusion fraction of **0.521109**, and a minimum sampled non-stop ray clearance of **0.230794 mm** over the tested 0°, ±2.52°, and ±4.2° field samples. The integration review also checks production render trimming.

## Element-by-Element Analysis

### L1 — Biconvex Positive

**nd = 1.48606, νd = 81.5. Glass: 486815 — fluophosphate crown class (vendor unresolved). f = +129.952 mm.**

L1 is the first positive component of the forward achromatic assembly. Its very high Abbe number is directly consistent with the patent's use of fluophosphoric/fluophosphate crown for a low-dispersion positive component. The patent's theory is concerned with reducing secondary spectrum by combining low-dispersion positive glass with higher-dispersion negative and positive partners; L1 supplies one of the low-dispersion positive powers in Example I. [1, pp. 9–11]

The modern glass supplier cannot be established from the patent. The stored class label therefore preserves the published d-line coordinate without asserting a historical vendor or transferring modern line-index data.

### L2 — Biconcave Negative, cemented in D1

**nd = 1.74400, νd = 44.9. Glass: 744449 — lanthanum glass class (vendor unresolved). f = −91.403 mm.**

L2 is the negative lanthanum-class component required by the patent's forward-group chromatic scheme. Its standalone thick-element power is the strongest negative power in the forward assembly. At r4 it is cemented directly to L3; the junction belongs to the downstream L3 medium in the data model, with no synthetic cement layer. [1, pp. 10–11]

L2 should not be interpreted in isolation as the complete negative group. The cemented L2/L3 pair has a verified compound EFL of **−142.5611 mm**, so the positive L3 partially offsets L2 while the pair remains net negative.

### L3 — Positive Meniscus, cemented in D1

**nd = 1.63930, νd = 45.0. Glass: 639450 — barium flint class (vendor unresolved). f = +251.917 mm.**

L3 is the positive barium-flint-class partner cemented to L2. This pairing corresponds closely to the patent's stated chromatic strategy: the additional positive component uses a glass whose dispersion characteristics are chosen in relation to the negative lanthanum/antimony component, while the negative component remains sufficiently strong that the combined pair can retain negative net power. [1, pp. 9–10]

The computed standalone positive power and the computed negative compound power are distinct quantities. The analysis does not attribute a specific monochromatic aberration correction to L3 solely from its sign or glass class.

### L4 — Positive Meniscus

**nd = 1.48606, νd = 81.5. Glass: 486815 — fluophosphate crown class (vendor unresolved). f = +218.437 mm.**

L4 is the second low-dispersion positive element in the forward assembly and uses the same published d-line coordinate as L1. Together, L1, D1, and L4 make the patent's four-component forward group: three positive standalone components and one negative standalone component. [1, p. 10]

Its position after the cemented negative D1 pair completes the net-positive front assembly. No modern vendor identity is assigned, and the data does not identify the 1.48606 / 81.5 material as Nikon PC102.

### L5 — Biconcave Negative, cemented in D2

**nd = 1.62041, νd = 60.3. Glass: 620603 — SK16-class crown (vendor unresolved). f = −53.760 mm.**

L5 begins the rear cemented group after the long 119.3 mm separation from r7. The patent does not give a named glass class for this element; the authored `620603` description is therefore a coordinate/class annotation rather than a supplier identification. [1, p. 11]

As a standalone element L5 is negative. Its role in the full system is best described through the complete rear pair rather than by assigning an unsupported aberration function to the individual element.

### L6 — Biconvex Positive, cemented in D2

**nd = 1.62004, νd = 36.3. Glass: 620363 — F2-class flint (vendor unresolved). f = +100.039 mm.**

L6 is the positive partner of L5 at the r9 cemented interface. Although L6 is positive by itself, D2 is net negative with EFL **−120.7984 mm**. That compound negative power is the quantity relevant to the telephoto rear group and should not be replaced by the sign of either standalone element.

The patent does not name L6's glass family. The F2-class label records the six-digit coordinate family used for comparison with modern catalogs, while historical supplier identity remains unresolved.

## Glass Identification and Selection

The source is unusually explicit about the glass classes that define the forward-group chromatic concept, but it is silent about suppliers. It also publishes only d-line refractive index and Abbe number for Example I. The final model therefore retains generic class/six-digit annotations and does not import modern catalog `nC`, `nF`, `ng`, or `dPgF` values.

| Elements | Patent coordinate | Authored identification | Evidentiary status |
|---|---:|---|---|
| L1, L4 | 1.48606 / 81.5 | 486815 — fluophosphate crown class | Patent class; vendor unresolved; no exact modern catalog identity established |
| L2 | 1.74400 / 44.9 | 744449 — lanthanum glass class | Patent class; several modern coordinate analogues exist, but supplier unresolved |
| L3 | 1.63930 / 45.0 | 639450 — barium flint class | Patent class; modern near-equivalents do not prove historical melt identity |
| L5 | 1.62041 / 60.3 | 620603 — SK16-class crown | Coordinate/class annotation; patent does not name the glass family |
| L6 | 1.62004 / 36.3 | 620363 — F2-class flint | Coordinate/class annotation; patent does not name the glass family |

The catalog audit found plausible modern analogues for several coordinates, including SK16- and F2-family glasses, but coordinate compatibility is not supplier evidence. The 1.48606 / 81.5 fluophosphate coordinate is especially important: it lacks a defensible exact modern match in the retained catalog review, and chronology independently prevents simply equating it with PC102. [5]

Because the patent does not provide material C/F/g line indices or anomalous partial-dispersion data for Example I, the analysis does not call the prescription apochromatic and does not assign anomalous-dispersion behavior to an individual element. The supported statement is narrower: the patent is explicitly an achromatic design directed at reducing secondary spectrum through its glass/power combination. [1, pp. 9–10]

## Focus Mechanism

The production lens belongs to Nikon's 1975 ED super-telephoto series that used focusing units. Nikon explains that super-telephotos of this focusing-unit type moved the entire lens during focusing, in contrast to the later internal-focusing designs. [2]

The period Nikon specification table gives a **4 m (13 ft)** minimum focus for the 300mm f/4.5 ED-Nikkor. [4, scan p. 52 / printed p. 51] This value is used only as `closeFocusM` product metadata. Neither the patent nor the brochure provides a close-focus optical spacing row or the axial travel of the focusing unit.

Accordingly, the implemented focus status is **NO_INTERNAL_RECONSTRUCTION**. The data file contains no variable optical gaps and no invented close-focus prescription. The nominal patent-derived optical state is retained; the 4 m endpoint describes the production lens rather than a reconstructed internal model state.

## Chromatic Correction Strategy

The patent's central design problem is secondary spectrum in long-focus photographic objectives. Its discussion notes that ordinary glass pairs cannot independently satisfy three-wavelength achromatism because dispersion and partial-dispersion behavior tend to track one another. The proposed solution combines low-dispersion phosphate/fluophosphate positive glass, a negative lanthanum or antimony-flint component, and a positive barium-flint component so that the power distribution changes the effective secondary-spectrum behavior of the combined forward group. [1, pp. 9–10]

Example I implements that concept with two 1.48606 / 81.5 low-dispersion positives (L1 and L4), the negative 1.74400 / 44.9 lanthanum-class L2, and the positive 1.63930 / 45.0 barium-flint-class L3. The L2/L3 compound remains net negative at −142.5611 mm while the complete r1–r7 forward assembly is net positive at +185.1848 mm. Those verified powers are consistent with the patent's qualitative claim structure: multiple convergent forward components, at least one divergent component, the specified glass classes, and a substantially separated rear group. [1, claims 1–2]

This chromatic interpretation remains at the level supported by the source. Without per-glass line indices, `dPgF`, or a validated historical Sellmeier identity, the final data cannot reproduce the patent's full secondary-spectrum calculation as a material-specific spectral trace.

## Verification Summary

The final LensVisualizer data revision was recomputed directly from the parsed `.data.ts` object rather than from a separate intended prescription. Sequential height/reduced-angle tracing and an independently coded ABCD formulation agree to **2.842 × 10⁻¹⁴** in the system matrix. The final model reproduces the patent's 300.0 mm focal length at **299.999596 mm**, a residual of approximately **−0.000404 mm**, well within the source's 0.1 mm printed precision.

Surface-by-surface Petzval summation using `φ/(n·n′)` over the ten refracting surfaces gives **−7.75344 × 10⁻⁴ mm⁻¹**. The inserted air stop is optically neutral and contributes no refractive Petzval power. The computed track/EFL ratio of 0.775179 confirms the telephoto classification on normalized reference planes.

One source-reading issue remains explicitly documented rather than silently normalized: Example I r5 is **+650.0 mm** in the rendered source and the repeated prescription context. Reversing only that sign collapses the computed EFL to about 143.55 mm. The patent's 1974 Certificate of Correction changes other text and examples but does not alter Example I. [1, pp. 11, 13]

The numerical model therefore has a well-defined boundary. Prescription radii, d1–d9, d-line indices/Abbe values, focal length, aperture designation, and field are patent-derived; d10, stop placement/opening, and surface clear apertures are modeled completions; 4 m minimum focus, release-series identity, and F-mount production context are manufacturer-side facts; and the product-to-patent identification remains a research correlation rather than a Nikon attribution.

## Sources

1. Yoshiyuki Shimizu, **US Patent 3,774,991, “Achromatic Telephoto Objective Lens,”** assigned to Nippon Kogaku K.K., filed 20 December 1971, granted 27 November 1973; Certificate of Correction dated 30 July 1974. Supplied patent PDF, especially pp. 1–2 and 9–13; Example I on p. 11.
2. Nikon Imaging, **“NIKKOR - The Thousand and One Nights No.66 — The AI Nikkor 400mm f/3.5 IF-ED,”** especially sections I–II on the 1975 ED telephoto series, focusing units, and whole-lens focusing: https://imaging.nikon.com/imaging/information/story/0066/
3. Nikon Imaging, **“NIKKOR - The Thousand and One Nights No.98 — Ai Nikkor 24mm F2,”** historical discussion of the four ED telephotos released in 1975: https://imaging.nikon.com/imaging/information/story/0098/index.html
4. Nippon Kogaku / Nikon, **Objectifs Nikkor**, period French-language lens brochure, table “Caractéristiques des objectifs Nikkor,” scan p. 52 / printed p. 51; archival scan hosted by Nikon Passion: https://www.nikonpassion.com/wp-content/uploads/downloads/docs/ObjectifsNikkorAI.pdf
5. Nikon Corporation, **Corporate History — Development of Extra-low Dispersion (ED) Glass**, recording PC102 development in December 1971 and later adoption in 300 mm and longer F-mount lenses: https://www.nikon.com/company/corporate/history/


## Integration Review — 2026-09-13 UTC

US3774991.pdf p. 2, Fig. 1A was inspected at 600 dpi. The long air gap contains an explicit axis break, so whole-span photogrammetry is invalid. The front assembly and smaller rear doublet are consistent with the authored silhouette; all SDs are retained. Coverage remains 4/6: the two 486815 fluorophosphate elements lack supported coefficients. N-FK51A differs by 2.97 in νd and is outside the compatibility guard. The non-IF ED display name is retained.

The optical prescriptions, stop calibration, and source focus/zoom states are preserved. Surface validation, image-circle screening, and the shared render-diagnostics corpus were run during integration. Catalog proxies preserve patent nd/νd and do not identify the historical supplier, melt, or anomalous partial dispersion.
