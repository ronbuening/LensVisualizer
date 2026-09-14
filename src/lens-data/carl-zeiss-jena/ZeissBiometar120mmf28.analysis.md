## Patent Reference and Design Identification

**Patent:** US 2,968,221\
**Filed:** March 17, 1959\
**Granted:** January 17, 1961\
**Inventor:** Harry Zöllner\
**Assignee:** VEB Carl Zeiss Jena\
**Title:** *Photographic Five-Element Lenses of the Modified Gauss Type*\
**Embodiment analyzed:** Example II

The implemented prescription is based on Example II of US 2,968,221. The patent describes a five-element modified-Gauss photographic objective in which elements II and III are cemented, giving five glass elements in four air-spaced components. Example II is published at normalized focal length `f = 100`, aperture ratio `1:2.8`, and full image angle `46°` (US 2,968,221, p. 2, Example II; repeated in claim 2 on p. 3).

The LensVisualizer model applies a uniform dimensional scale of `1.2` to the patent prescription to represent a 120 mm design. Refractive indices and Abbe numbers are unchanged, and the design contains no aspherical surfaces. The resulting computed effective focal length is 119.231996 mm rather than exactly 120 mm; the difference follows from the rounded patent table rather than from a non-uniform optical rescaling.

The production identification is a correlation, not a manufacturer confirmation that Example II is the production prescription. Several facts converge:

1. The patent assignee is VEB Carl Zeiss Jena, and its subject is a five-element modified-Gauss lens.
2. A 1958 VEB Carl Zeiss JENA brochure, Druckschriften-Nr. 54-093-1, lists a **BIOMETAR 2,8/120 mm** for the 60 × 60 format and describes the Biometar family as five lenses in four components developed as a variation of the Gauss double objective.
3. The brochure lists the 60 × 60 version for Praktisix with a utilized image angle of 39.5° and focusing from infinity to 1.3 m.
4. Scaling the patent's normalized `f = 100` Example II by 1.2 produces the 120 mm nominal focal-length class while leaving its dimensionless power and dispersion relations unchanged.

The brochure predates the US filing date, and no located manufacturer source explicitly identifies US 2,968,221 Example II as the production 120 mm prescription. The data file therefore retains the narrower status: correlated to the 60 × 60 Biometar 2.8/120, not manufacturer-confirmed to that exact patent example.

## Optical Architecture

The patent itself identifies the design as a modified Gauss type. In physical order it consists of a positive front meniscus (I), a cemented dispersive pair (II+III), the diaphragm, a negative meniscus (IV), and a positive rear meniscus (V). Elements II and III share a plane cemented interface. The patent places elements I–III before the diaphragm and IV–V behind it (US 2,968,221, p. 2; Fig. 1 on p. 1).

The architecture is strongly asymmetric in detail even though it retains the broad Gauss organization around the stop. In the implemented 120 mm-scaled model, the isolated cemented II+III pair has an effective focal length of −191.142399 mm in air, while the front I-through-III subassembly is +336.968683 mm and the rear IV+V subassembly is +108.209244 mm in air. These are standalone subtrain calculations, not claims that the groups contribute those same powers in situ inside the complete objective.

The complete infinity model has computed EFL 119.231996 mm and back focal length 83.855413 mm measured from the vertex of surface 9 to the paraxial image plane. Its first-vertex-to-image total length divided by EFL is 1.22715, so it does not meet the project definition of a telephoto lens (`TL/EFL < 1`). Its BFL/EFL is 0.70330, so it likewise does not meet the project retrofocus criterion (`BFD > EFL`).

The diaphragm position is not dimensioned in the patent. Figure 1 only places it somewhere inside the air space between the rear surface of element III and the front surface of element IV; the figure is schematic and supplies no dimension for that split. The model therefore inserts one `STO` at an inferred 46% of that gap from surface 5 as a diagram-guided modeling choice. Its physical diameter is also unpublished. The stop semi-diameter is calibrated from the implemented first-order entrance pupil to reproduce the published f/2.8 aperture; the resulting modeled f-number is 2.7999999. This is a calibration target, not independent evidence for a production diaphragm diameter.

## Element-by-Element Analysis

### L1 / Element I — Positive Meniscus, convex to object

`nd = 1.6676`, `νd = 41.9`. Glass: **668419 coordinate class (supplier unresolved)**. Standalone `f = +160.870524 mm`.

Element I is the front convergent meniscus identified by the patent as one of the two outwardly convex positive menisci. Its two curved surfaces provide positive standalone power before the thin air gap leading to the cemented central pair.

The patent does not assign a single monochromatic aberration to this element. Instead, it constrains the combination of its focal length and Abbe number through condition (a), `f/(fI·νI)`. Recomputed from the implemented model, that expression is 0.01780290, within the patent range 0.017–0.022. The design rationale is therefore better stated in the patent's own power-dispersion terms than as an unsupported claim that L1 alone corrects a particular aberration.

### L2 / Element II — Plano-Convex Positive

`nd = 1.6584`, `νd = 50.8`. Glass: **658508 coordinate class (supplier unresolved)**. Standalone `f = +55.224787 mm`.

Element II is the positive front member of the cemented II+III pair. Its rear surface is the plane cemented junction, so the junction itself contributes no paraxial surface power even though the refractive index changes from element II to element III.

This element carries the patent's only material numerical inconsistency relevant to the implemented prescription. Example II and claim 2 both print `r3 = +30.3`, a plane `r4`, `ndII = 1.6584`, and `fII = +46.33` in the normalized `f = 100` system. The first three values instead imply a standalone normalized focal length of +46.020656. The model preserves the twice-published radius and refractive index and scales the recomputed focal length to +55.224787 mm; it does not alter `r3` merely to force agreement with the conflicting derived table entry.

### L3 / Element III — Plano-Concave Negative

`nd = 1.6483`, `νd = 33.8`. Glass: **648338 coordinate class (supplier unresolved)**. Standalone `f = −35.539102 mm`.

Element III is the negative rear member of the cemented dispersive meniscus. Its plane front face is cemented to L2, and its strongly curved rear face completes the pair before the large diaphragm-containing air space.

Taken together in air, L2 and L3 form a net negative cemented assembly with EFL −191.142399 mm. The patent's condition (b) combines their focal lengths and Abbe numbers rather than treating either element in isolation. Using the focal lengths recomputed from the implemented geometry, the condition evaluates to −0.05712394, inside the specified interval −0.060 to −0.049. The printed `fII` discrepancy therefore does not overturn the patent condition when the actual tabulated surface geometry is used.

### L4 / Element IV — Negative Meniscus, concave to object

`nd = 1.7283`, `νd = 28.3`. Glass: **728283 coordinate class (supplier unresolved)**. Standalone `f = −149.398146 mm`.

Element IV is the single dispersive meniscus immediately behind the diaphragm. The patent specifically constrains this element's axial thickness and the radius of its diaphragm-facing concave surface relative to the objective focal length. In the normalized prescription, `dIV/f = 0.0260`, below the stated 0.0265 limit, and `|r6|/f = 0.183`, below 0.2.

Its high index and low Abbe number are source data, but they do not by themselves establish a particular historical glass or a unique aberration role. In the patent's formulation, L4 participates with L5 in the rear power-dispersion balance expressed by condition (c).

### L5 / Element V — Positive Meniscus, convex to image

`nd = 1.6204`, `νd = 60.3`. Glass: **620603 coordinate class (supplier unresolved)**. Standalone `f = +69.764299 mm`.

Element V is the rear convergent outwardly convex meniscus. It follows L4 across the very small published `l3` air gap and supplies the final positive refracting power of the five-element system.

For the rear pair, the patent requires the sum `f/(fIV·νIV) + f/(fV·νV)` to lie between 0 and 0.003. Recomputed from the implemented prescription, the value is +0.000142900. This near cancellation is a verified statement about the patent's weighted power-dispersion expression; it should not be expanded into an apochromatic or anomalous-dispersion claim because the patent supplies no line-index or partial-dispersion data.

## Glass Identification and Selection

The patent publishes `nd` and `νd` for the five elements but does not name a glass manufacturer, catalog designation, or melt. The data file therefore uses six-digit coordinate classes rather than assigning a historical supplier that the source does not establish.

| Element | `nd` | `νd` | Authored glass label |
|---|---:|---:|---|
| I | 1.6676 | 41.9 | 668419 — coordinate class |
| II | 1.6584 | 50.8 | 658508 — coordinate class |
| III | 1.6483 | 33.8 | 648338 — coordinate class |
| IV | 1.7283 | 28.3 | 728283 — coordinate class |
| V | 1.6204 | 60.3 | 620603 — coordinate class |

These labels encode the rounded d-line refractive-index/Abbe coordinates and are deliberately supplier-neutral. Authoritative catalog-coordinate checks reproduce each class closely. SUMITA's current all-glasses file retains legacy rows BASF6 (1.66755/41.9), SSK5 (1.65844/50.8), SF12 (1.64831/33.8), SF10 (1.72825/28.3), and SK16 (1.62041/60.3); current HIKARI, SCHOTT, OHARA, CDGM, and HOYA resources provide same-code or near-coordinate families for multiple positions. These catalog matches establish coordinate compatibility only. They do not identify the historical supplier or melt used by Carl Zeiss Jena, so the data file does not promote any candidate catalog name to a production-glass identity.

No `nC`, `nF`, `ng`, or `dPgF` values are authored. Consequently, the analysis does not claim apochromatic correction, anomalous partial dispersion, or a specific secondary-spectrum mechanism. The patent does explicitly target improved colour coma, particularly transverse colour coma, but it expresses that strategy through focal-length/Abbe-number conditions rather than published line-index data (US 2,968,221, p. 2).

## Focus Mechanism

The patent example contains only one optical prescription and gives no focus-state spacing table, moving-group identity, or mechanical focusing law. The implemented focus status is therefore **NO_INTERNAL_RECONSTRUCTION**: `var` is empty and the model represents the static infinity prescription only.

The 1958 VEB Carl Zeiss JENA brochure lists the 60 × 60 Biometar 2.8/120 as focusing from infinity to 1.3 m. That 1.3 m value is retained as product metadata (`closeFocusM`) but is not converted into an invented internal lens motion. The available manufacturer document does not provide enough information to state whether the production lens achieved close focus by unit extension or by any specific internal mechanism, so no such mechanism is asserted here.

## Conditional Expressions

US 2,968,221 makes the design's intended colour-coma control unusually explicit through three focal-length/dispersion conditions plus several geometric/index constraints. The table below uses the final implemented geometry and independently recomputed standalone element focal lengths. The dimensionless conditions are invariant under the uniform 1.2 scale.

| Patent condition | Implemented value | Required range / test | Result |
|---|---:|---|---|
| (a) `f/(fI·νI)` | 0.01780290 | 0.017 to 0.022 | Pass |
| (b) `f/(fII·νII) + f/(fIII·νIII)` | −0.05712394 | −0.060 to −0.049 | Pass |
| (c) `f/(fIV·νIV) + f/(fV·νV)` | +0.000142900 | 0 to 0.003 | Pass |
| Cemented surface `r4` | plane / infinite radius | `|r4| ≥ f` | Pass |
| `ndII − ndIII` | 0.0101 | positive and ≤ 0.1 | Pass |
| `dIV/f` | 0.0260 | < 0.0265 | Pass |
| `|r6|/f` | 0.183 | < 0.2 | Pass |
| `|r5|/|r6|` | 1.04918 | 1.0 to 1.3 | Pass |

The same three principal expressions also pass when the patent's printed standalone element focal lengths are used. The element-II source mismatch remains a source discrepancy rather than being erased by the successful condition check.

## Verification Summary

The final data file was recomputed as an infinity-focus sequential optical system. A sequential height/reduced-angle trace and a separately assembled ABCD matrix produce identical first-order results to numerical precision. The implemented design EFL is 119.231996 mm, and the paraxial BFL is 83.855413 mm from the last optical vertex to the image plane. The surface-by-surface Petzval sum, evaluated as `φ/(n·n′)` at each refracting surface, is +0.0011456895 mm⁻¹.

The modeled stop semi-diameter is 14.551239 mm and produces an entrance-pupil semi-diameter of 21.291428 mm in the first-order model. Because the stop size was solved to reproduce f/2.8, this numerical agreement is a model calibration and not an independent measurement of the lens diaphragm.

The patent publishes no semi-diameters. The optical-surface semi-diameters in the data file were therefore modeled from a portable exact meridional spherical-ray sample over ±13.8°, corresponding to 0.6 of the patent's 23° half-field, with 8% clearance. Those authored apertures pass the Stage 2 edge-thickness, actual-rim-slope, and shared-gap-intrusion checks in the portable verifier.

At the project's nominal 56 × 56 mm 6x6 corner, corresponding to a 18.3718° paraxial half-field for the computed EFL, the 401-point meridional pupil sample retains 387 rays, or 96.51%. At the patent's full 23° half-field, 333 of 401 sampled pupil rays survive. These finite meridional samples demonstrate that the modeled clear apertures are not a claim of fully unvignetted f/2.8 coverage at the published field edge. They also do not substitute for LensVisualizer's production three-dimensional tracing or render diagnostics, which remain an integration-stage check.

## Sources and References

1. Harry Zöllner, **“Photographic Five-Element Lenses of the Modified Gauss Type,”** US Patent 2,968,221, filed March 17, 1959, granted January 17, 1961. See Fig. 1 on PDF p. 1; Example II and conditions on PDF p. 2; repeated Example II prescription in claim 2 on PDF p. 3.
2. VEB Carl Zeiss JENA, Vertriebsabteilung Photoobjektive und Kameras, **“NEUHEITEN! BIOMETAR 2,8/80 mm; BIOMETAR 2,8/120 mm,”** Druckschriften-Nr. 54-093-1, print mark `Ag 10/1111/58 V/10/13-10` (1958). Manufacturer brochure scan: <https://zoep-entertainment.de/wp-content/uploads/2021/01/1958-Carl-Zeiss-Jena-Biometar-80-120mm.pdf>.

3. SUMITA OPTICAL GLASS, Inc., **Zemax all-glasses catalog**, including discontinued glasses, data revision 2026-08-21. <https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf>.
4. HIKARI GLASS CO., LTD. / Nikon, **OPTICAL GLASS**, catalog revision 2023-09. <https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf>.
5. SCHOTT Advanced Optics, **Optical Glass** catalog and data resources. <https://www.schott.com/en-us/products/optical-glass-p1000267>.
6. OHARA Corporation, **Optical Glass Type Tables / Pocket Catalog**. <https://oharacorp.com/glass-type/>.
7. Chengdu Guangming Optoelectronic Corp. (CDGM), **Optical Glass Database and Data Sheets**. <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>.
8. HOYA Optics, **Common Glass Type Lists**. <https://www.hoya-opticalworld.com/english/products/press_01.html>.
