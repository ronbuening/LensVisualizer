## Patent Reference and Design Identification

**Patent:** US 2009/0190239 A1  
**Application Number:** 12/354,321  
**Priority:** January 29, 2008 — JP 2008-018093  
**Filed:** January 15, 2009  
**Published:** July 30, 2009  
**Inventor:** Takashi Suzuki  
**Assignee:** Fujinon Corporation — same-application assignment history; none printed on the supplied US publication\
**Title:** *Lens Having Vibration Proof Function and Imaging Apparatus*  
**Embodiment analyzed:** Example 1, corresponding to Figs. 1, 6, and 7

The implemented prescription is the unscaled Example 1 of US 2009/0190239 A1. The patent describes a three-group telephoto system in which positive G1 is followed by a negative focusing group G2 and a positive G3; G3 is itself divided into positive G3a and negative G3b. G2 moves axially for focusing, while G3a moves laterally for vibration correction (abstract; ¶¶0043–0046; claim 1). Fig. 6 gives the complete Example 1 prescription and Fig. 7 gives the design focal length, F-number, field angle, focus spacings, third-group focal length, conditional-expression values, and vibration-correction motion.

The production correlation to the **Nikon AF-S NIKKOR 500mm f/4G ED VR** is an optical-specification correlation rather than manufacturer-confirmed patent attribution. The principal convergent points are:

1. The patent gives `f = 489.78 mm` and `Fno = 4.08`, close to Nikon's marketed 500 mm and f/4 specifications.
2. The patent gives a 5.0° full field, matching Nikon's published 5° FX/35 mm angle of view.
3. The prescription contains 14 powered lens elements in 11 air-spaced groups plus a weak front protective glass; Nikon specifies 14 elements in 11 groups plus one protective glass.
4. Three patent elements use the unusually low-dispersion coordinate `nd = 1.49782, νd = 82.5`; Nikon specifies three ED elements. This is a correlation clue, not proof that the production ED elements use the catalog match adopted in the model.
5. The patent focuses by translating G2 internally, consistent with Nikon's IF specification.
6. The patent stabilizes by laterally shifting an internal lens group, consistent with Nikon's VCM lens-shift VR description.

Several limits prevent treating that correlation as a direct Nikon attribution. Nikon's product history places the production lens in 2007, before the patent's January 2008 priority date, and Nikon specifies a 4.0 m AF / 3.85 m MF minimum focus distance whereas the patent publishes only an infinity state and a 5 m near state. The supplied US publication names no assignee or applicant on its front page. The [Google Patents record](https://patents.google.com/patent/US20090190239A1/en) for the same application, **12/354,321**, reports an assignment from Takashi Suzuki to **Fujinon Corporation**, effective **January 7, 2009**, recorded **January 22, 2009**, at **reel/frame 022139/0546**. This recorded assignment predates the July 30, 2009 publication and supports the structured `patentAssignees` field under the same-application assignment policy. The underlying USPTO assignment instrument was not independently inspected. The Nikon catalog identity remains a production correlation; this assignment does not establish Nikon patent ownership or a Fujinon manufacturing/licensing relationship with Nikon.

Two external catalogs also make the production correlation: [Photons to Photos — Optical Bench Hub](https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm) lists the Nikon lens against **US20090190239, Example01P**, and [Camera Gossip — Nikon Lens Patent Database](https://cameragossip.github.io/nikon-lens-patents.html) lists **US 2009-0190239** with an explicit Fujinon ownership note. Both qualify patent-to-production matches; Camera Gossip also references Photons to Photos, so these are not established independent confirmations.

## Optical Architecture

Example 1 is an all-spherical, positive–negative–positive telephoto architecture. The final parsed model has a computed infinity-focus EFL of `489.788641528 mm`. With the source-listed rear GF plate represented explicitly, the physical surface-1-to-image track is `427.170000 mm`, giving `TL/EFL = 0.872152`; the design therefore satisfies the project's telephoto criterion `TL/EFL < 1`. The computed physical back focal distance from surface 28 through GF to best paraxial focus is `109.679722245 mm`, or `0.223933 × EFL`, so the design is not retrofocus under the project's `BFD > EFL` criterion.

The drawn lens prescription contains 15 lens elements and 12 air-spaced groups when the front protective meniscus is counted, plus the flat rear `GF` plate. For comparison with Nikon's product specification, the optical train behind that protective glass is 14 elements in 11 groups. The separate source-listed rear member `GF` is drawn as a plane-parallel plate element (surfaces 29–30) and traced by every analysis; its semi-diameter is a ray-trace estimate because the source lists none, and it is not included in `elementCount` or `groupCount`. The patent's power-group organization is different from the physical air-gap count:

- **G1:** positive; surfaces 1–11; computed standalone group focal length `+218.539 mm`.
- **G2:** negative focusing group; surfaces 12–16; computed standalone group focal length `−62.382 mm`.
- **G3a:** positive vibration-correction subgroup; surfaces 18–23; computed standalone subgroup focal length `+113.372 mm`.
- **G3b:** negative fixed rear subgroup; surfaces 24–28; computed standalone subgroup focal length `−423.899 mm`.
- **G3 overall:** positive; surfaces 18–28; computed standalone focal length `+133.974 mm`, agreeing with Fig. 7's printed `f3 = 133.97 mm`.

The aperture diaphragm is the patent's surface 17, between G2 and G3. The data file maps that plane to the required `STO` label without moving it axially. The patent publishes `Fno = 4.08` but no physical diaphragm diameter, so the authored stop semi-diameter `19.048637040084 mm` is a paraxial calibration that makes the modeled entrance pupil reproduce f/4.08. It is not a source-published stop measurement.

The source also includes a flat rear member `GF` at surfaces 29–30. Patent ¶0044 describes GF generically as an optical filter, cover glass, or prism between the final group and image plane. The data file draws this source-listed plane plate as a plane-parallel plate element, traced by every analysis, rather than folding its reduced distance into the final air gap. Surface 28 therefore retains the source physical gap of `25.00 mm`; `GF` is modeled as a `2.00 mm` plate at `nd = 1.51680`, followed by the source `Bf = 82.68 mm` air gap to the image plane.

The plate leaves the system EFL unchanged. Re-tracing the physical final model gives a back focal distance of `82.679722245 mm` from the rear face of GF, differing from the printed `82.68 mm` by `−0.000277755 mm`. Measured from surface 28, the corresponding physical back focal distance is `25.00 + 2.00 + 82.679722245 = 109.679722245 mm`. The former air-equivalent representation, `25.00 + 2.00 / 1.51680 + 82.68 = 108.998565401 mm`, is retained only as a migration cross-check and is no longer the authored rear spacing.

The patent does not publish a complete semi-diameter table. Three diameter anchors are source-based: surface 1 uses `D1/2 = 60.2 mm`; surface 18 uses an inferred centered G3a diameter `D30 = 42.5 − 2(1.53) = 39.44 mm`, hence `sd = 19.72 mm`; and surface 28 uses `Dk/2 = 16.4 mm`. Other semi-diameters are modeled from the ray geometry and patent section rather than presented as source clear apertures.

## Element-by-Element Analysis

The focal lengths in this section are **standalone element focal lengths in air**, recomputed from the final radii, center thicknesses, and d-line indices. They are not the same quantity as an element's in-situ contribution inside the complete lens. Cemented-stack powers are identified separately where applicable.

### P1 — Protective Positive Meniscus

`nd = 1.51680, νd = 64.2. Glass: J-BK7A (HIKARI coordinate match; supplier unconfirmed). f = +2,555,617.326 mm.`

P1 is the 5.00 mm front protective meniscus at source surfaces 1–2. Because its two radii are both 1500 mm, its standalone power is essentially zero at the scale of the imaging lens. The element is retained because it is a physical protective glass rather than an inactive dummy plane, and Nikon's production specification independently distinguishes one protective glass from the 14 lens elements.

P1 is physically included inside the patent's G1 bracket, but its negligible standalone power means the imaging power of G1 is supplied by the following lens elements rather than by the protective plate itself.

### L1 — Biconvex Positive

`nd = 1.49782, νd = 82.5. Glass: J-FKH1 (HIKARI coordinate match; supplier unconfirmed). f = +302.793 mm.`

L1 is the first powered element after the protective glass and lies in positive G1. It is one of three elements in Example 1 with the high-Abbe `1.49782/82.5` coordinate. The patent does not assign a separate aberration function to L1, so the model treats its verified positive power and material coordinate as prescription facts without attributing a specific correction mechanism to this element alone.

The count of three elements at this coordinate is one of the convergent features linking Example 1 to Nikon's published three-ED-element production construction; that comparison does not establish the actual production melt.

### L2 — Biconvex Positive

`nd = 1.49782, νd = 82.5. Glass: J-FKH1 (HIKARI coordinate match; supplier unconfirmed). f = +266.079 mm.`

L2 is another positive G1 element using the same low-dispersion coordinate as L1. Its somewhat stronger standalone positive power places substantial positive refractive power in the front collector while retaining the same modeled spectral coordinate.

As with L1, the HIKARI name is a catalog-coordinate match adopted for line-index modeling. It is not a claim that Nikon or the patent specified HIKARI glass.

### L3 — Biconcave Negative

`nd = 1.78800, νd = 47.4. Glass: J-LASF014 (HIKARI coordinate match; supplier unconfirmed). f = −219.163 mm.`

L3 introduces negative standalone power inside the otherwise positive G1. The verified G1 net power remains positive, so L3 is part of the group's internal power distribution rather than a separate negative group.

No surface-specific aberration role is stated for L3 in the patent. Its significance in this analysis is therefore structural: it offsets part of the positive power carried by the surrounding G1 elements while preserving the overall positive group sign.

### L4 — Negative Meniscus, front member of C1

`nd = 1.69680, νd = 55.5. Glass: J-LAK14 (HIKARI coordinate match; supplier unconfirmed). f = −212.790 mm.`

L4 begins the first cemented pair C1 at source surface 9. Its rear surface is the cemented interface at surface 10, where the medium immediately changes to L5 glass; no synthetic cement layer is inserted in the model.

Considered alone in air L4 is negative, but its optical action in the assembled lens must be distinguished from that standalone value because it shares a refracting interface with L5.

### L5 — Positive Meniscus, rear member of C1

`nd = 1.49782, νd = 82.5. Glass: J-FKH1 (HIKARI coordinate match; supplier unconfirmed). f = +128.141 mm.`

L5 is the third `1.49782/82.5` element in the patent and the rear member of C1. It is substantially positive as a standalone element. Together, L4 and L5 form a cemented stack with computed net power `+0.002890449 mm⁻¹`, corresponding to an air-ended focal length of `+345.967 mm`.

That cemented-net value is distinct from either member's standalone focal length. C1 remains part of positive G1, whose complete computed power is stronger than the C1 stack by itself.

### L6 — Biconcave Negative

`nd = 1.83400, νd = 37.2. Glass: J-LASF010 (HIKARI coordinate match; supplier unconfirmed). f = −83.571 mm.`

L6 is the first element of G2, the patent's internal focusing group. Its relatively strong negative standalone power is consistent with G2's verified negative net power.

The element moves axially only as part of G2; the published focus states do not specify independent motion of L6 relative to the other G2 elements.

### L7 — Positive Meniscus, front member of C2

`nd = 1.84666, νd = 23.8. Glass: J-SF03 (HIKARI coordinate match; supplier unconfirmed). f = +79.595 mm.`

L7 is a positive meniscus within G2 and is cemented to L8 at source surface 15. Its high index and low Abbe number are prescription coordinates; the patent does not identify the supplier or commercial glass name.

Although L7 is positive in isolation, it belongs to a cemented stack and a group that are both net negative. Its standalone focal length should therefore not be read as an in-situ positive-group contribution.

### L8 — Biconcave Negative, rear member of C2

`nd = 1.69680, νd = 55.5. Glass: J-LAK14 (HIKARI coordinate match; supplier unconfirmed). f = −61.642 mm.`

L8 supplies strong negative standalone power at the back of G2. The C2 cemented stack formed by L7 and L8 has computed net power `−0.003942581 mm⁻¹`, or `−253.641 mm` air-ended focal length.

Together with L6, C2 produces the verified G2 group focal length of `−62.382 mm`. The whole G2 assembly translates during focusing without changing its internal element separations in the two published states.

### L9 — Biconvex Positive, G3a first element / patent Lb

`nd = 1.48749, νd = 70.4. Glass: J-FK5 (HIKARI coordinate match; supplier unconfirmed). f = +105.346 mm.`

L9 is the first element of G3a, the subgroup that moves laterally for vibration correction. Under the patent's notation it is the positive lens **Lb**, defined as the positive G3a lens with the lower refractive index (¶¶0050–0051).

Its role is therefore unusually well constrained by the patent's conditional expressions: the index and Abbe-number relations among L9, L10, and L11 are explicitly tied by the patent to maintaining performance during vibration-proof movement. That is stronger source support than an inference based only on glass class or power sign.

### L10 — Negative Meniscus, G3a middle element / patent Lc

`nd = 1.84666, νd = 23.8. Glass: J-SF03 (HIKARI coordinate match; supplier unconfirmed). f = −122.647 mm.`

L10 is the negative meniscus at the center of G3a and corresponds to patent lens **Lc**, the negative G3a lens with the highest refractive index. Its `nd = 1.84666` and `νd = 23.8` directly enter conditional expressions (3) and (5).

The patent states that the index conditions are intended to suppress image-plane variation during vibration correction and that the Abbe-number conditions are intended to suppress variation of lateral chromatic aberration during that movement (¶¶0055–0056). The present analysis attributes that design rationale to the three-element G3a combination rather than to L10 alone.

### L11 — Biconvex Positive, G3a rear element / patent La

`nd = 1.80100, νd = 35.0. Glass: J-LAF016 (HIKARI coordinate match; supplier unconfirmed). f = +131.828 mm.`

L11 is the rear positive member of G3a and corresponds to patent lens **La**, the positive G3a lens with the higher refractive index (¶¶0050–0051). Together with L9 and L10, it forms the laterally moving vibration-correction unit.

The complete G3a subgroup has computed air-ended focal length `+113.372 mm`. That subgroup power, rather than L11's standalone power, is the relevant first-order quantity for the lateral image-shift sensitivity discussed below.

### L12 — Negative Meniscus, front member of C3

`nd = 1.80100, νd = 35.0. Glass: J-LAF016 (HIKARI coordinate match; supplier unconfirmed). f = −98.468 mm.`

L12 begins G3b and the third cemented pair C3. It is negative as a standalone element and uses the same patent coordinate as L11, but it is fixed axially and laterally in the implemented model.

The shared index coordinate does not imply the same optical function: L11 belongs to moving positive G3a, whereas L12 begins the fixed negative G3b subgroup.

### L13 — Biconvex Positive, rear member of C3

`nd = 1.62004, νd = 36.3. Glass: J-F2 (HIKARI coordinate match; supplier unconfirmed). f = +76.640 mm.`

L13 is cemented to L12 at source surface 25 and has strong positive standalone power. The combined C3 stack has computed net power `+0.002800930 mm⁻¹`, corresponding to `+357.024 mm` air-ended focal length.

C3's positive net power does not make G3b positive as a whole, because the following L14 contributes sufficient negative power that the full G3b subgroup remains negative.

### L14 — Negative Meniscus

`nd = 1.48749, νd = 70.4. Glass: J-FK5 (HIKARI coordinate match; supplier unconfirmed). f = −189.500 mm.`

L14 is the final powered lens element and the rear member of G3b. Its negative standalone power helps leave G3b with computed focal length `−423.899 mm` even though the preceding C3 cemented pair is net positive.

The complete G3 remains positive because the stronger positive G3a is followed by the weaker negative G3b. The final rear optical member `GF` printed by the patent is not L14; it is a separate flat filter/cover-glass/prism member drawn as a plane-parallel plate element rather than as a lens element.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number, not commercial glass names. The implemented file therefore uses catalog-coordinate matches rather than asserting production supplier identity. Nine distinct `nd/νd` pairs occur in the retained prescription. The HIKARI rows below were adopted because they reproduce those coordinates tightly and provide coefficient-backed dispersion curves; alternative OHARA, HOYA, Schott, CDGM, and SUMITA candidates remain documented in the dossier.

The rendered patent page establishes the d-line reference as 587.6 nm (¶0059). An OCR rendering of that paragraph reads “587.6 mm”; the model treats that as an OCR/transcription error, not as a physical statement by the patent. The patent additionally identifies the g line at 435.8 nm and C line at 656.3 nm in ¶0064.

| Patent `nd / νd` | Adopted coordinate match | Elements | Catalog `dPgF` | Identification status |
|---|---|---|---:|---|
| 1.51680 / 64.2 | J-BK7A (HIKARI) | P1 | −0.0010 | Coordinate match; supplier unconfirmed |
| 1.49782 / 82.5 | J-FKH1 (HIKARI) | L1, L2, L5 | +0.0327 | Coordinate match; supplier unconfirmed |
| 1.78800 / 47.4 | J-LASF014 (HIKARI) | L3 | −0.0090 | Coordinate match; supplier unconfirmed |
| 1.69680 / 55.5 | J-LAK14 (HIKARI) | L4, L8 | −0.0082 | Coordinate match; supplier unconfirmed |
| 1.83400 / 37.2 | J-LASF010 (HIKARI) | L6 | −0.0042 | Coordinate match; supplier unconfirmed |
| 1.84666 / 23.8 | J-SF03 (HIKARI) | L7, L10 | +0.0171 | Coordinate match; supplier unconfirmed |
| 1.48749 / 70.4 | J-FK5 (HIKARI) | L9, L14 | +0.0027 | Coordinate match; supplier unconfirmed |
| 1.80100 / 35.0 | J-LAF016 (HIKARI) | L11, L12 | −0.0004 | Coordinate match; supplier unconfirmed |
| 1.62004 / 36.3 | J-F2 (HIKARI) | L13 | +0.0024 | Coordinate match; supplier unconfirmed |

The shared catalog supplies dispersion from these adopted HIKARI coordinate matches. No catalog-derived `nC`, `nF`, `ng`, or vendor-normal-line `dPgF` fields are stored on the elements. The table records HIKARI’s own deviation convention for reference only. They are not values printed in Example 1 and they do not prove that HIKARI supplied the production lens. This distinction matters especially for L1/L2/L5: their high Abbe number and count are consistent with Nikon's three-ED-element specification, but the production material cannot be identified from the patent coordinate alone.

The diagram marks L1/L2/L5 as **inferred APD**, using the coordinate-compatible J-FKH1 catalog curve (engine-baseline ΔPgF ≈ +0.0337). This qualifies the spectral proxy and does not identify Nikon’s production melt or claim patent-measured anomalous dispersion. No catalog line indices are copied into the prescription.

## Focus Mechanism

The focus status is **PUBLISHED** rather than reconstructed. Patent ¶0045 states that G2 moves toward the image side when focus changes from infinity toward a near object, and Fig. 7 supplies both variable gaps at infinity and the 5 m near state.

| State | `d11` before G2 | `d16` after G2 | `d11 + d16` |
|---|---:|---:|---:|
| Infinity | 39.04 mm | 24.02 mm | 63.06 mm |
| Near point (5 m) | 49.88 mm | 13.18 mm | 63.06 mm |

The spacing change translates G2 imageward by `10.84 mm` while preserving the sum of its adjacent gaps. No internal element spacing inside G2 changes. Recomputed from the final physical rear-plate model, the published near row gives an object-to-modeled-image distance of `5000.493204 mm`, within the source precision of the nominal 5 m label.

The data file sets `closeFocusM: 5` so the focus control's close endpoint corresponds to the patent row itself. Nikon's production minimum focus distances of 4.0 m in AF and 3.85 m in MF remain manufacturer metadata only. No 4 m focus law or extrapolated G2 position has been invented.

## Chromatic Correction Strategy

The patent's background explicitly notes that chromatic aberration becomes more difficult as telephoto focal length increases and the optical system is made smaller (¶0006). Example 1 answers that problem partly through material selection and, more specifically, through the glass relationships inside the laterally moving G3a subgroup.

At the front of the lens, L1, L2, and L5 share the high-Abbe `1.49782/82.5` coordinate. Their count is consistent with Nikon's published use of three ED elements, but the patent does not call them “ED,” identify a supplier, or provide a production glass name. The model therefore retains the source coordinate and a catalog-match label rather than converting the correlation into a material-provenance claim.

Within G3a, the patent is more explicit. It defines the two positive lenses La/Lb and the negative lens Lc by their relative refractive indices and then constrains both index and Abbe-number differences. Paragraphs 0055–0056 state that these conditions are intended to reduce image-plane variation and lateral-chromatic variation when the vibration-proof group is shifted. The resulting discussion supports a chromatic-correction strategy for the **moving subgroup as a combination**, not a claim that any single catalog match independently makes the lens apochromatic.

No APO designation is asserted here. The spectral curves are catalog-derived from the adopted coordinate matches; a production-level apochromatic claim would require a separate wavelength-dependent performance verification and firmer material identification.

## Conditional Expressions

The patent's claimed conditions can be evaluated directly from the Example 1 prescription and the final modeled element coordinates.

| Condition | Patent requirement | Recomputed Example 1 value | Status |
|---|---|---:|---|
| CE1 | `1.1 < (f × D3) / (D1 × f3) < 1.4` | 1.290493830 | Satisfied |
| CE2 | `Na − Nb > 0.3` | 0.31351 | Satisfied |
| CE3 | `Nc > 1.7` | 1.84666 | Satisfied |
| CE4 | `30 < νb − νa < 60` | 35.4 | Satisfied |
| CE5 | `νc < 30` | 23.8 | Satisfied |

For CE1 the source values are `f = 489.78 mm`, `D3 = 42.5 mm`, `D1 = 120.4 mm`, and `f3 = 133.97 mm` (Fig. 7; claim 1). CE2–CE5 use the G3a definitions La = L11, Lb = L9, and Lc = L10 (¶¶0050–0051; claims 3–4).

The patent explains CE1 as a compromise between avoiding flux shading during vibration correction and preventing excessive growth of the moving group's diameter and mechanism (¶0054). It explains CE2–CE3 in terms of image-plane variation and CE4–CE5 in terms of lateral chromatic variation during vibration-proof movement (¶¶0055–0056). Those are source-stated design rationales rather than post-hoc assignments made from the numerical signs alone.

## Image Stabilization

G3a, consisting of L9–L11 at surfaces 18–23, is the vibration-proof group in the abstract, Fig. 1, ¶0046, and claim 1. It moves orthogonally to the optical axis while G3b remains fixed. Fig. 7 publishes a maximum group shift of `±1.53 mm`, a resulting image motion of `±2.14 mm`, and an image/group-motion ratio of `1.4×` for a `±0.25°` vibration-proof amount.

An affine paraxial decenter calculation using the final parsed prescription gives `2.141070444 mm` image shift for a `1.53 mm` G3a displacement, or `1.399392447×`. This independently reproduces the values printed in Fig. 7 within the source precision.

Patent ¶0061 contains an internal wording error: it calls the moving vibration-proof group “3b-th group G3b.” That sentence conflicts with the abstract, ¶0046, claim 1, the figures, and the decenter calculation. The model therefore treats **G3a** as the moving group while preserving ¶0061's raw wording as a source discrepancy rather than silently editing the patent.

The patent defines `D3` as the centered effective diameter `D30` plus twice the maximum lateral shift `D31` (Figs. 5A–5C; ¶0048). With `D3 = 42.5 mm` and `D31 = 1.53 mm`, the centered G3a-front diameter is inferred as `D30 = 39.44 mm`, producing the modeled surface-18 semi-diameter of `19.72 mm`. That semi-diameter is therefore a documented inference from the patent's own definition, not a separately printed clear-aperture entry.

## Verification Summary

The final analysis follows the verified data revision rather than a separately re-entered prescription. The key first-order checks from the parsed model are:

| Quantity | Final modeled result | Source / interpretation |
|---|---:|---|
| EFL at infinity | 489.788641528 mm | Patent Fig. 7: 489.78 mm |
| BFL after GF | 82.679722245 mm | Patent Fig. 7: 82.68 mm |
| Physical BFD from surface 28 | 109.679722245 mm | 25.00 mm gap + 2.00 mm GF + computed post-GF BFL |
| Track / EFL | 0.872152 | Telephoto by `TL/EFL < 1` |
| G3 focal length | 133.973946912 mm | Patent Fig. 7: 133.97 mm |
| Petzval sum | −4.60934318582 × 10⁻⁵ mm⁻¹ | Surface-by-surface `φ/(n n′)` |
| G2 focus travel | 10.84 mm | Patent Fig. 7 `d11/d16` rows |
| G3a image shift for 1.53 mm decenter | 2.141070444 mm | Patent Fig. 7: 2.14 mm |
| G3a image/group-motion ratio | 1.399392447× | Patent Fig. 7: 1.4× |

The authored semi-diameters were also checked with exact meridional spherical tracing at `focusT = 0, 0.25, 0.5, 0.75, 1`. The minimum modeled element edge thickness was `2.006547 mm`; the maximum spherical rim-slope angle was `33.74°`; and the worst shared-gap sag-intrusion fraction was `0.892770`, below the current `0.90` policy limit. At the sampled ±1.5° off-axis field, one extreme pupil sample is naturally vignetted first by the source-anchored front aperture while the remaining sampled rays clear the modeled downstream apertures.

Those geometry checks are portable exact spherical checks of this authored model. They are not substitutes for LensVisualizer's production `buildLens()` / `validateLensData()`, runtime glass resolution, exact project tracer, or render-trim diagnostics, which remain integration-scope checks.

## Sources and References

1. **U.S. Patent Application Publication US 2009/0190239 A1**, Takashi Suzuki, *Lens Having Vibration Proof Function and Imaging Apparatus*, published July 30, 2009. Primary prescription: Fig. 6 (PDF p. 7); system/focus/VR data: Fig. 7 (PDF p. 8); G3a diameter definition: Figs. 5A–5C (PDF p. 6); architecture and mechanisms: ¶¶0043–0051; condition rationale: ¶¶0054–0056; Example 1 data discussion and source discrepancy: ¶¶0059–0064; claims 1, 3, and 4. A convenient public record is [Google Patents — US20090190239A1](https://patents.google.com/patent/US20090190239A1/en); the supplied publication PDF is the transcription authority for this model.
2. **Nikon**, “AF-S NIKKOR 500mm f/4G ED VR — specifications,” used for F-mount identity, 500 mm f/4 marketing values, 14-elements/11-groups plus protective-glass construction, three ED elements, FX/35 mm angle of view, IF mechanism, VR mechanism, and production minimum-focus distances: <https://nij.nikon.com/products/lineup/nikkor/fmount/af-s_nikkor_500mm_f4g_ed_vr/spec.html>.
3. **Nikon**, “Our Product History: 2000s,” used for the production-history timing caveat: <https://imaging.nikon.com/imaging/information/products_history/2000/>.
4. **HIKARI Optical Glass Co., Ltd.**, current optical-glass catalog and data sheets used for the adopted coordinate-match `nC`, `nF`, `ng`, and `dPgF` values: <https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf>. The current catalog gives J-F2 `ΔPgF = +0.0024` under its own normal-line convention; it is not copied into L13 as runtime `dPgF`. The HIKARI labels are catalog matches only; the patent and Nikon product specification do not establish HIKARI as production supplier.
5. **Google Patents**, US20090190239A1 record, used for the same-application assignment to Fujinon Corporation, effective January 7, 2009, recorded January 22, 2009, reel/frame 022139/0546; the supplied US publication remains the prescription transcription authority: <https://patents.google.com/patent/US20090190239A1/en>.
6. **Photons to Photos**, Optical Bench Hub, Nikon AF-S Nikkor 500mm f/4G ED VR row linked to US20090190239, Example01P; third-party production correlation: <https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm>.
7. **Camera Gossip**, Nikon Lens Patent Database, Nikon AF-S NIKKOR 500mm f/4G ED VR row linked to US 2009-0190239 with a Fujinon ownership note; third-party production correlation: <https://cameragossip.github.io/nikon-lens-patents.html>.
