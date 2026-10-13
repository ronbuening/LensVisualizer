## Patent Reference and Design Identification

**Patent:** DE 1 749 770 U\
**Application Number:** V 7479 / DEV7479U\
**Filed:** 26 March 1957\
**Published:** 1 August 1957\
**Inventor:** No individual inventor is named in the selected DE utility-model publication\
**Assignee:** VEB Feinoptisches Werk Görlitz\
**Title:** *Vierlinsiges Weitwinkelobjektiv*\
**Embodiment analyzed:** *Zahlenbeispiel* / claim 4, designated “Example 1” by the project job card

The selected publication describes a four-lens, four-group wide-angle objective with a negative front meniscus separated by a large air space from a positive-negative-positive rear triplet. Its numerical example specifies a relative aperture of 1:4.5, a full image angle of 62°, and correction over 434–656 nm. The prescription is normalized to `f = 100 mm`; the project model applies a uniform scale of 0.35 to correlate it with the 35 mm production lens while preserving all refractive indices and Abbe numbers. [1, pp. 1–3, 5–6]

The production correlation is strong but not treated as manufacturer confirmation of the patent identity. Archived Meyer literature identifies a Primagon 1:4.5/35 mm for Kleinbild cameras, with a 63° field and 0.4 m minimum focusing distance; contemporary listing material identifies a four-lens construction. [2][3] A later historical study directly associates the Primagon with DBGM 1.749.770 and discusses the same glass-class strategy, but that source is secondary. [4] The timing also requires caution: secondary historical evidence places the Primagon on display or in catalogs by 1955–1956, before the March 1957 filing. The selected DE publication itself does not print the product name “Primagon.”

The DE publication names no individual inventor, so the structured lens data intentionally uses an empty `patentAuthors` array. A secondary historical source reports that a corresponding DDR utility model names Hubert Ulbrich, but that attribution is not substituted into the metadata for the selected DE source. [4]

## Optical Architecture

The design is a simple retrofocus wide-angle: one negative meniscus in front of a widely separated three-element positive-negative-positive rear group. The scaled L1-to-L2 air space is 25.2 mm, exactly 72% of the nominal 35 mm scaling target, preserving the unusually large separation emphasized by the patent. [1, pp. 1–2]

Independent first-order computation from the final data gives a Gaussian EFL of 34.574906 mm and a back focal distance of 34.854758 mm from the last refracting vertex. Because `BFD/EFL = 1.008094`, the design satisfies the project definition of retrofocus. The first-to-last refracting-surface track is 39.900 mm, giving `track/EFL = 1.154016`; it is therefore not a telephoto configuration under the project definition.

The front meniscus has a standalone focal length of −115.163256 mm. The isolated rear L2–L4 triplet remains positive, with an EFL of +32.872821 mm. These are standalone or subsystem powers calculated from the final prescription; they are not claims that the same elements contribute those powers unchanged in situ.

The source gives `s′ = 101 mm` from the last-lens vertex to the Gaussian image plane in the normalized example. Uniform scaling places that source image plane 35.350 mm behind the final vertex. The rounded prescription itself focuses paraxially at 34.854758 mm, so the stored source image plane lies 0.495242 mm behind the computed paraxial focus. That discrepancy is retained rather than corrected by altering a radius, spacing, or index.

The patent describes an all-spherical design. No aspheric coefficients, diffractive phase data, rear plates, filters, or inactive dummy planes are present in the implemented prescription. [1, pp. 1–6]

## Element-by-Element Analysis

### L1 — Negative Meniscus

`nd = 1.48709, νd = 70.3.` Glass: **FK5 — compatible spectral proxy (historical supplier/melt unresolved)**. Standalone `f = −115.163 mm`.

L1 is the isolated negative front member that establishes the front-negative/rear-positive architecture. Its rear-facing concavity and the large following air space are explicit features of the patent. [1, pp. 1, 4, 6] The patent also makes a specific chromatic requirement for this element: its Abbe number must exceed 70, and the difference between L1 and L2 must exceed 19.0. The implemented values give 70.3 and 19.3 respectively.

The element is not assigned a named historical melt in the data. Current catalog families near the patent coordinates support an FK5/48770x class description, but the stored `nd` differs from modern FK5-family examples by about +0.00040 in the catalog value. That residual is small enough for class correlation but not for a supplier or exact-melt claim.

### L2 — Biconvex Positive

`nd = 1.65883, νd = 51.0.` Glass: **N-SSK5 — compatible spectral proxy (historical supplier/melt unresolved)**. Standalone `f = +19.093 mm`.

L2 is the first positive member of the rear triplet. The patent describes it as biconvex and places it after the unusually long L1–L2 air space. [1, pp. 1, 3, 6] Its dispersion is intentionally contrasted with L1 by the patent inequality `ν1 − ν2 > 19`; the final values produce 19.3.

Current catalog coordinates for the 658509 class cluster around `nd ≈ 1.65844` and `νd ≈ 50.84–50.88`, leaving a patent-to-modern residual of approximately −0.00039 in index and −0.12 to −0.16 in Abbe number. The analysis therefore retains a class-level label rather than promoting any modern Schott, OHARA, HIKARI, or CDGM product to historical identity.

### L3 — Biconcave Negative

`nd = 1.62542, νd = 35.5.` Glass: **F7 — compatible spectral proxy (historical supplier/melt unresolved)**. Standalone `f = −11.586 mm`.

L3 is the negative central member of the air-spaced rear triplet and has the strongest standalone power magnitude of the four elements. It remains physically separate from both positive neighbors. The aperture stop follows L3 in the L3–L4 air gap in the patent figure, although the source supplies no numerical axial split of that gap. [1, pp. 3, 6]

The rendered primary-source tables on patent pages 3 and 5 give `n3 = 1.62542`. A secondary OCR transcription reads `1.621542`; the model follows the repeated primary-source value and preserves the OCR discrepancy as a source-transcription issue rather than a patent correction. [1, pp. 3, 5]

Current catalog comparison does not identify a unique glass. CDGM F6 at 1.62495/35.57 and 626357-class candidates near 1.62588/35.7 are both close enough to establish a flint-class neighborhood, but not a specific historical supplier or melt.

### L4 — Biconvex Positive

`nd = 1.56905, νd = 63.0.` Glass: **H-ZK1 — compatible spectral proxy (historical supplier/melt unresolved)**. Standalone `f = +18.811 mm`.

L4 is the final positive member of the rear triplet. The patent requires the Abbe-number difference between L4 and L3 to exceed 27.4; the final values give 27.5. [1, pp. 1–2, 4] The element also terminates the refracting train immediately before the source-defined rear image-space distance.

A directly captured current CDGM 569631-class row, H-ZK1 at 1.56888/62.96, differs from the patent by only −0.00017 in index and −0.04 in Abbe number. That is strong class-level agreement, but it is not evidence that the historical lens used CDGM glass.

## Glass Identification / Selection

The patent indices and Abbe numbers are retained unchanged. Catalog curves are coordinate-compatible spectral proxies, not identification of the historical supplier, composition, or melt. No catalog-derived `nC`, `nF`, `ng`, or `dPgF` is copied into the prescription, and no anomalous-dispersion or APO claim is inferred from the match.

| Element | Patent/model nd / νd | Spectral model |
| --- | --- | --- |
| L1 | 1.48709 / 70.3 | FK5 (qualified catalog proxy) |
| L2 | 1.65883 / 51 | N-SSK5 (qualified catalog proxy) |
| L3 | 1.62542 / 35.5 | F7 (qualified catalog proxy) |
| L4 | 1.56905 / 63 | H-ZK1 (qualified catalog proxy) |

H-ZK1 was added from the [official CDGM datasheet](https://www.cdgmgd.com/webapp/pdf/H-ZK1.pdf), including its published Sellmeier constants. Its 1.56888 / 62.96 coordinate is a close spectral analogue; it is not evidence of CDGM manufacture of these historical lenses.

## Focus Mechanism

The selected patent publishes one fixed prescription and no finite-conjugate spacing table, moving-group law, or close-focus optical state. The final model therefore uses **NO_INTERNAL_RECONSTRUCTION**: it contains no focus `var` keys and does not invent internal group travel.

Archived Meyer literature gives a 0.4 m minimum focusing distance for the production Primagon 35 mm f/4.5. [2] That value is retained as product metadata only. The available sources in this dossier do not establish the exact production focusing motion or the image-space displacement at 0.4 m, so the analysis does not label a specific optical focusing mechanism.

## Conditional Expressions

The patent defines a compact set of dispersion, curvature, and spacing conditions. All twelve extracted conditions pass when evaluated against the final uniformly scaled model. Dimensional conditions are evaluated with the same 0.35 scale; dimensionless ratios are unchanged by scaling.

| Condition | Final value | Requirement | Result |
|---|---:|---:|---|
| `ν1` | 70.3 | `> 70` | pass |
| `ν1 − ν2` | 19.3 | `> 19.0` | pass |
| `ν4 − ν3` | 27.5 | `> 27.4` | pass |
| `ν1 + ν2 + ν3 + ν4` | 219.8 | `≥ 215` | pass |
| `|r1| − |r2|` | 26.425 mm | `> 25.2 mm` | pass |
| `|r1| / (4|r8|)` | 1.05556 | `≥ 1` | pass |
| `|r2|` | 26.775 mm | `> 26.25 mm` | pass |
| `|r3|` | 13.475 mm | `≤ 14.0 mm` | pass |
| `|r6|` | 13.650 mm | `≤ 14.0 mm` | pass |
| `|r3| / |r1|` | 0.253289 | 0.25–0.30 | pass |
| `|r6| / |r1|` | 0.256579 | 0.25–0.30 | pass |
| `l4 + d5 + l6 + d7` | 8.575 mm | `> 8.4 mm` | pass |

These passes do not erase the separate source-system discrepancy: the rounded numerical prescription computes an EFL below the patent's normalization and a paraxial BFD shorter than the scaled `s′` value. The source table is retained literally rather than adjusted to force exact agreement.

## Verification Summary

The final data file was recomputed by independent sequential height/reduced-angle tracing and an ABCD matrix chain. The two first-order implementations agree at the recorded floating-point precision. The final Gaussian EFL is 34.574906 mm, BFD is 34.854758 mm, and first-to-last refracting-surface track is 39.900 mm.

The aperture stop is a modeling inference. Patent page 6 draws `B` inside the 7.5 mm normalized L3–L4 gap but supplies no numerical position or diameter. [1, p. 6] The schematic does not support metric recovery of a unique split. The model therefore retains a rounded 60/40 authoring choice for the scaled 2.625 mm gap: 1.575 mm from the L3 rear vertex to the stop and 1.050 mm from the stop to L4. The stop semi-diameter, 3.693766 mm, is solved so that the modeled entrance pupil produces f/4.5. Both the split and the physical stop size are model quantities; the f/4.5 agreement is a calibration to the published relative aperture, not independent evidence of the manufactured diaphragm diameter or axial position.

No clear apertures are published. The refracting-surface semi-diameters are therefore modeled from exact spherical meridional ray envelopes, then checked for edge thickness, spherical rim slope, shared-gap sag intrusion, and representative off-axis containment. The smallest computed glass edge thickness is 0.319815 mm and the largest rim-slope angle is 45.2038°, both within the current portable geometry policy.

At the patent's 31° half-field, the exact modeled chief ray reaches 21.1709 mm image height at the stored image plane; a 36 × 24 mm frame has a 21.6333 mm half-diagonal. The chief ray and one full-field stop-edge ray transmit through the modeled semi-diameters, while the opposite stop edge is geometrically vignetted. The model therefore does not claim an unvignetted full pupil at the 62° published field.

Surface-by-surface Petzval computation using `φ/(n·n′)` gives a total of +0.00726124 mm⁻¹ for the scaled model, corresponding to a Petzval radius of −137.718 mm under the verifier's sign convention. This is a first-order design result, not a measured field-curvature performance figure.


## Sources

1. **VEB Feinoptisches Werk Görlitz**, *Vierlinsiges Weitwinkelobjektiv*, DE 1 749 770 U, application V 7479, filed 26 March 1957, published 1 August 1957. Primary six-page scan used for the prescription; numerical example on p. 3, repeated in claim 4 on p. 5, optical layout on p. 6. Google Patents metadata/transcription aid: https://patents.google.com/patent/DE1749770U/de
2. **Meyer-Optik Görlitz**, *Kleinbildobjektive* technical brochure, 1957, archived as `HMG22-1957KBObjektive.pdf` by Ihagee.org. Product table evidence used for Primagon 1:4.5/35 mm, 63° field, 0.4 m minimum focus, Kleinbild use, and documented camera families. The archive PDF bytes were not recovered into the dossier; these facts were captured from indexed archival manufacturer text during source research: https://www.ihagee.org/Lenzen/HMG22-1957KBObjektive.pdf
3. Period 1957 price/listing sheet archived by Ihagee.org as `PLD119-Kanne5711.pdf`; lists the Meyer Görlitz Primagon-Weitwinkel 1:4.5/35 mm as a four-lens design with 63° field: https://www.ihagee.org/Prices/PLD119-Kanne5711.pdf
4. **zeissikonveb.de**, “Primagon,” secondary historical research discussing the production lens, DBGM 1.749.770 association, FK5/SSK5 class context, and 1955–1956 product timing: https://zeissikonveb.de/start/objektive/wechselobjektive1950er/meyer-optik-goerlitz/primagon.html
5. Current authoritative glass-catalog resources used for coordinate/class checks: SCHOTT Advanced Optics, OHARA Optical Glass Pocket Catalog, HIKARI optical-glass catalog, CDGM Optical Glass Database, SUMITA Optical Glass catalog, and HOYA Glass Cross Reference Index. These were used only for class/equivalent comparison; none is treated as proof of the historical supplier or melt.
