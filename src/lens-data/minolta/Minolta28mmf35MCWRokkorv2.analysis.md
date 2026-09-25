# MINOLTA MC W.ROKKOR-SG 28mm f/3.5 — Patent Analysis

## Patent Reference and Design Identification

**Patent:** JP1969-025743 (特公昭44-25743)
**Application Number:** 特願昭41-51387
**Filed:** 1966-08-05
**Published:** 1969-10-29
**Inventor:** Toshinobu Ogura (小倉敏布)
**Applicant:** Minolta Camera Co., Ltd. (ミノルタカメラ株式会社)
**Title:** レトロフォーカス型写真用広角レンズ — Retrofocus-type photographic wide-angle lens
**Embodiment analyzed:** Example 2 (実施例2)

The implemented prescription is based on Example 2 of the Japanese patent publication. The source example is normalized to
`f = 1` and publishes a relative aperture of `1:3.5`, a full field of `2ω = 75°`, and a back focus of `1.32` focal-length
units. Its numerical table contains fourteen refracting surfaces forming seven separate air-spaced elements; Figure 1 on
patent PDF page 6 shows the same seven-element layout. The LensVisualizer model uniformly scales all dimensional
prescription values by 28 so that the normalized example represents a nominal 28 mm lens. Indices and Abbe numbers are
unchanged by that transformation. (JP1969-025743, p. 3, Example 2; Fig. 1, p. 6.)

The production-lens identification is a research correlation rather than a manufacturer-confirmed patent attribution.
A Minolta *The Minolta SR System* brochure lists the 28 mm f/3.5 family as seven elements in seven groups, with a 76° angle
of view and 2 ft minimum focus. Independent historical lens references identify the compact 1968 MC W.Rokkor-SG 28 mm
f/3.5 variant as a seven-element/seven-group design with a 55 mm filter thread and approximately 0.6 m minimum focus.
Example 2 is also f/3.5, seven elements/seven groups, and was filed in 1966 before that production variant appeared. The
patent's 75° field and the Minolta brochure's 76° family specification are retained as a source/variant difference rather
than forced into agreement.

Two radius entries in the printed Example 2 table require correction before the prescription reproduces the same example's
published optical behavior. Page 3 prints `r9 = +0.5260` and `r12 = -5421`; the Example 2 Seidel/Petzval table on page 4
requires `r9 = -0.5260` and `r12 = -0.5421`. With those corrections, the recomputed surface-9 and surface-12 Petzval terms
match the printed signs and magnitudes, and the first-order focal length returns to approximately the patent's normalized
`f = 1`. The raw printed values remain preserved in the dossier rather than being overwritten. (JP1969-025743, pp. 3–4.)

## Optical Architecture

The design is a seven-element, seven-group retrofocus wide-angle lens. The implemented first-order model gives an effective
focal length of `28.009933 mm` and a back focal distance of `36.714083 mm` measured from the last refracting-surface vertex.
Because the verified BFD exceeds the verified EFL, the design satisfies the project's numerical retrofocus criterion. The
implemented last-surface-to-image spacing remains the separately sourced, scaled patent value of `36.96 mm`; the difference
from the computed BFL is retained rather than concealed.

The first three elements form a net divergent subsystem with an air-boundary EFL of `-61.016024 mm`. The four rear elements
form a net convergent subsystem with an air-boundary EFL of `+30.456367 mm`. These are subsystem powers calculated from the
implemented prescription, not claims about isolated production modules. Figure 1 shows the correspondingly large air space
between the front and rear sections. (JP1969-025743, Fig. 1, p. 6.)

All fourteen refracting surfaces are spherical or plane. The patent provides no aspheric equation or coefficients, and the
data file therefore contains no aspheres. There are no cemented interfaces: every element is separated from the next by a
positive air gap.

The aperture stop is not dimensioned or unambiguously located in the patent. The implemented model places one inferred
`STO` inside the large `d6` inter-group gap, at `31.000000 mm` from surface 1. This is an authoring inference needed by the
viewer and ray model, not a published mechanical diaphragm location.

## Element-by-Element Analysis

### L1 — Negative Meniscus

`nd = 1.65830, νd = 58.5. Glass: K-LaK11 class (coordinate-compatible spectral proxy; native d 1.6583/58.5; supplier/melt unproven). f = -86.046206 mm.`

L1 begins the divergent front section. Its standalone negative power is directly computed from its two implemented
surfaces. K-LaK11 supplies a coordinate-compatible spectral proxy, with no claim of historical supplier identity. No special-dispersion behavior is inferred from its Abbe number
alone.

### L2 — Plano-Convex Positive

`nd = 1.75000, νd = 35.0. Glass: LAFN7 class (coordinate-compatible spectral proxy; coordinate code 750350; supplier/melt unproven). f = +139.813333 mm.`

L2 is a weak positive element within the otherwise divergent three-element front subsystem. Its source coordinates are
compatible with the 750350 lanthanum-flint class, but the patent names no glass supplier; the data therefore preserves a
class/code description rather than a vendor name. Its role here is described only in first-order power terms.

### L3 — Negative Meniscus

`nd = 1.51680, νd = 64.2. Glass: N-BK7 class (coordinate-compatible spectral proxy; coordinate code 517642; supplier/melt unproven). f = -87.187046 mm.`

L3 completes the front three-element subsystem and contributes negative standalone power. The source coordinates closely
match the conventional 517642/BK7 class. Current catalog rows from SCHOTT N-BK7 (`1.51680 / 64.17`) and HIKARI
J-BK7A (`1.51680 / 64.14`) both support that class-level assignment, but neither establishes the historical supplier or
melt.

### L4 — Biconvex Positive

`nd = 1.67000, νd = 47.2. Glass: S-BAH10 class (coordinate-compatible spectral proxy; coordinate code 670472/670473; supplier/melt unproven). f = +29.767722 mm.`

L4 begins the convergent rear subsystem and supplies substantial positive standalone power. Its source coordinates lie very
close to modern OHARA S-BAH10 (`1.67003 / 47.23`). The data file nevertheless retains a class/code label because the patent
does not identify OHARA, or any other glass maker, as the historical supplier.

### L5 — Biconcave Negative

`nd = 1.70060, νd = 30.1. Glass: SF15 class (coordinate-compatible spectral proxy; native d 1.7006/30.1; supplier/melt unproven). f = -15.579150 mm.`

L5 is the strongest negative standalone element by absolute optical power in the seven-element prescription. It is embedded
within a rear subsystem that remains net positive because of the surrounding L4, L6, and L7 powers and separations. A
modern HIKARI J-SF15 row is nearby in `nd/νd` space but is not exact enough to justify authoring it as the historical glass.

### L6 — Positive Meniscus

`nd = 1.72000, νd = 50.3. Glass: LAC10 class (coordinate-compatible spectral proxy; coordinate code 720503; supplier/melt unproven). f = +25.861804 mm.`

L6 contributes strong positive standalone power in the rear section. Its coordinates closely reproduce the 720503 lanthanum-crown
class. Current HIKARI J-LAK10 (`1.71999 / 50.27`) and OHARA S-LAL10 (`1.72000 / 50.23`) rows are both close; the data file
therefore avoids assigning a historical vendor. No line indices or partial-dispersion quantity is published for the selected
example.

### L7 — Plano-Convex Positive

`nd = 1.51680, νd = 64.2. Glass: N-BK7 class (coordinate-compatible spectral proxy; coordinate code 517642; supplier/melt unproven). f = +47.152477 mm.`

L7 is the final positive element and uses the same source `nd/νd` coordinates as L3. It contributes positive standalone
power at the back of the optical train. The use of the same 517642-class coordinate at L3 and L7 is a source fact; any
further claim about shared melts or manufacturing supply would exceed the patent evidence.

## Glass Identification and Selection

The patent publishes only `N` and `V` coordinates. It does not state the reference wavelengths, so the data model interprets
them as d-line `nd/νd` values because the coordinate pairs closely reproduce conventional six-digit d-line glass codes.
That wavelength assignment is a modeling inference, not quoted patent text.

| Elements | Source `nd / νd` | Authored identification | Evidence posture |
|---|---:|---|---|
| L1 | 1.65830 / 58.50 | K-LaK11 spectral proxy | Compatible coordinates; supplier/melt unproven |
| L2 | 1.75000 / 35.00 | 750350 lanthanum-flint class | Class-level coordinate match; supplier unresolved |
| L3, L7 | 1.51680 / 64.20 | 517642 BK7 class | SCHOTT N-BK7 and HIKARI J-BK7A both support the class; supplier unresolved |
| L4 | 1.67000 / 47.20 | 670472/670473 barium-flint class | Strong coordinate equivalence to OHARA S-BAH10; supplier unresolved |
| L5 | 1.70060 / 30.10 | SF15 spectral proxy | Compatible coordinates; supplier/melt unproven |
| L6 | 1.72000 / 50.30 | 720503 lanthanum-crown class | HIKARI J-LAK10 and OHARA S-LAL10 are both close; supplier unresolved |

The selected patent publishes no `nC`, `nF`, `ng`, `dPgF`, or other partial-dispersion values. Consequently, the data file
does not author those fields and this analysis makes no apochromatic or anomalous-partial-dispersion performance claim.
Catalog comparisons are used to defend class-level labels. Named classes are spectral proxies where coordinates are compatible, not historical supplier identifications; no catalog line indices are copied into the prescription.

## Focus Mechanism

The focus status is `NO_INTERNAL_RECONSTRUCTION`. Example 2 provides one fixed prescription and no variable-spacing table,
close-focus prescription, or mechanism constraint from which an internal focus law could be uniquely reconstructed.
Accordingly, the data file contains an empty `var` object and does not move any internal element or group.

The `closeFocusM = 0.6` field is product metadata associated with the correlated production variant; it does not alter the
published optical state. The available patent evidence therefore does not establish which element or group moves in the
production lens, how much it moves, or how back focus changes with object distance.

## Patent Conditional Expressions

The patent states seven numerical conditions. The verifier evaluates them against the corrected implemented prescription;
all seven pass. Ratios with an infinite-radius denominator are treated as their zero limiting value.

| Patent condition | Implemented value | Result |
|---|---:|---|
| `1.4 < V1/V2 < 1.8` | `V1/V2 = 1.671429` | satisfied |
| `V4 < V5 + 22` | `47.2 < 52.1` | satisfied |
| `-0.8 < r4/r3 < +0.15` | `r4/r3 → 0` because `r3 = ∞` | satisfied |
| `d10 < 0.07 f` | `d10/f = 0.051` | satisfied |
| `N4 + N7 ≤ 2 N5` | `3.1868 ≤ 3.4012` | satisfied |
| `r11 < 0` | `r11 = -2.7789` in normalized source units | satisfied |
| `-0.6 < r14/r13 < 0.15` | `r14/r13 → 0` because `r13 = ∞` | satisfied |

These checks confirm consistency with the patent's stated parameter ranges; they do not by themselves establish that the
production lens used exactly this prescription. (JP1969-025743, conditions on p. 2 and claim on p. 5.)

## Modeled Stop and Clear Apertures

Neither a physical diaphragm diameter nor surface semi-diameters are published for Example 2. The LensVisualizer model
therefore introduces them as explicit modeling quantities. The inferred stop lies in `d6`; the original scaled `d6 =
20.588400 mm` is conserved as `19.462880 mm + 1.125520 mm`. The modeled stop semi-diameter is `5.614884 mm`.

The stop diameter was calibrated so that the modeled entrance pupil produces an f-number of `3.499999895`, matching the
patent's published f/3.5 target. That agreement verifies the calibration calculation; it is not independent evidence for
the location or physical size of the production diaphragm.

Surface semi-diameters are modeled rather than published dimensions. The front three elements were enlarged to match the optical rims of the shared construction FIG. 1 (PDF p. 6), excluding the meniscus bevels and leader lines: surfaces 1–6 use 21.0, 19.0, 18.5, 18.5, 15.0, and 13.5 mm. The rear four elements retain their ray-envelope apertures because clean figure rims agree within drawing uncertainty. The shared schematic supports relative shape, not exact manufacturing dimensions.

## Verification Summary

The final implemented prescription was recomputed from the parsed `.data.ts`, not from a separate copy of the intended
numbers. A sequential height/reduced-angle trace and an independently coded ABCD multiplication agree at the verifier's
numerical tolerance.

| Quantity | Verified implemented result | Source comparison |
|---|---:|---|
| Effective focal length | 28.009933 mm | Patent normalization ×28 = 28.000000 mm |
| Back focal distance from surface 14 | 36.714083 mm | Published BFD ×28 = 36.960000 mm |
| Scaled published image-plane spacing | 36.960000 mm | Implemented as surface-14 `d` |
| Front L1–L3 subsystem EFL | -61.016024 mm | Computed from implemented model |
| Rear L4–L7 subsystem EFL | +30.456367 mm | Computed from implemented model |
| Normalized Petzval sum | 0.237835 | Patent Example 2 table: 0.2380 |

Petzval curvature was recomputed surface by surface as `φ/(n·n′)`. The corrected implemented model reproduces the Example
2 table within the source-precision tolerances used by the dossier. The same calculation is what supports the r9 and r12
source corrections rather than a silent typographical assumption.

The model is numerically retrofocus because its verified back focal distance exceeds its verified EFL. Its verified total
track does not meet the project's `TL/EFL < 1` telephoto criterion, so no telephoto classification is applied.

## Sources and References

1. Japan Patent Office. **特公昭44-25743 / JP1969-025743**, *レトロフォーカス型写真用広角レンズ* (Retrofocus-type photographic wide-angle lens), inventor Toshinobu Ogura, applicant Minolta Camera Co., Ltd., published 1969-10-29. Prescription: p. 3, Example 2; Seidel/Petzval table: p. 4; claim/conditions: pp. 2 and 5; optical diagram: Fig. 1, p. 6.
2. Minolta Camera Co., Ltd. **The Minolta SR System** (manufacturer brochure; archival scan hosted by Pacific Rim Camera): https://www.pacificrimcamera.com/rl/01951/01951.pdf . Used only for family-level 28 mm f/3.5 product specifications; it is not v2-specific patent attribution evidence.
3. Ad Dieleman, **Minolta 28 mm lens history**: https://www.addieleman.nl/minolta/minolta-28mm-lenses.htm . Secondary historical source for the compact 1968 MC W.Rokkor-SG variant.
4. **MINOLTA Manual Lens List**: https://minolta.eazypix.de/lenses/ . Secondary product database used for variant cross-checking.
5. SCHOTT, **N-BK7 optical glass datasheet**: https://media.schott.com/api/public/content/41e799d0bf874807a0bb8e702fbb75b5?v=54856406 . Used for modern coordinate-equivalence checking only.
6. SCHOTT, **Optical Glass collection — LAFN7 / code 750350**: https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c . Used for the L2 class-level coordinate comparison.
7. OHARA, **S-BAH glass types**: https://oharacorp.com/glass-type/s-bah/ . Used for modern coordinate-equivalence checking only.
8. OHARA, **S-LAL glass types**: https://oharacorp.com/glass-type/s-lal/ . Used for the L6 class-level cross-check.
9. HIKARI / Nikon, **J-series BK optical glass catalog**: https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/bk.html . Used for the L3/L7 class-level cross-check.
10. HIKARI / Nikon, **J-series LAK optical glass catalog**: https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/lak.html . Used for modern coordinate-equivalence checking only.
11. HIKARI / Nikon, **J-series SF optical glass catalog**: https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/sf.html . Used for modern coordinate-equivalence checking only.

### Catalog proxy labels

The viewer names the compatible catalog curve explicitly while retaining the original coordinate code and the supplier/melt qualification. The selected curves are unchanged: L2 → LAFN7, L3 → N-BK7, L4 → S-BAH10, L6 → LAC10, L7 → N-BK7. These labels identify spectral proxies, not production glass suppliers.

## Image-plane source audit (2026-09-25)

MTF source audit: Example 2 retains published BF=1.32 ×28 =36.96 mm.
With the already documented Petzval-supported R9/R12 source emendations,
paraxial BFL is 36.714083 mm (offset −0.245917 mm), EFL 28.009933 mm.
All other printed values match; no plate is present. Preserve the source BF.
