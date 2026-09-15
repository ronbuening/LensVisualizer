# PANASONIC LEICA DC VARIO-SUMMILUX 10.9-34mm f/1.7-2.8 ASPH. (Panasonic Lumix LX100 / LX100 II; Leica D-Lux (Typ 109) / D-Lux 7 / D-Lux 8)

## Patent Reference and Design Identification

**Patent:** US 2016/0054550 A1\
**Application Number:** 14/829,669\
**Priority:** JP 2014-167103, 2014-08-20; JP 2015-150192, 2015-07-30\
**Published:** 2016-02-25\
**Inventors:** Takakazu Bito; Hiroaki Suzuki\
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.\
**Title:** “Zoom Lens System, Imaging Device, and Camera”\
**Embodiment analyzed:** Example 1 / First Exemplary Embodiment

**Manufacturer and branding:** The production LEICA DC lens is manufactured by Panasonic using measurement equipment and quality-assurance systems certified by Leica Camera AG. The catalog therefore lists Panasonic as maker and retains LEICA DC as the optical branding. Patent-assignee attribution is recorded separately and does not establish exclusive design authorship. [Panasonic manufacturing explanation](https://www.panasonic.com/nz/consumer/lumix/brand/technologies/great-lenses-make-great-cameras.html)

The prescription modeled here is Example 1 of US 2016/0054550 A1. The patent identifies a six-unit zoom system, G1 through G6, with powers positive–negative–positive–positive–positive–positive, followed in the source table by a parallel plate P and the image plane. Example 1 contains 11 glass elements, with cemented pairs L3–L4, L6–L7, and L9–L10, and eight aspherical surfaces distributed across five elements. The patent describes all six zoom units as moving during zooming, G6 as the focusing unit, and L3–L4 as the transverse image-blurring-correction pair. [1, ¶¶0031–0047; Tables 1–3]

The association with the LEICA DC VARIO-SUMMILUX 10.9–34 mm f/1.7–2.8 used in the Panasonic DMC-LX100 and DC-LX100M2 is strong but inferential rather than manufacturer-confirmed. Several independent identifiers converge:

1. Panasonic specifies the production lens as 11 elements in 8 groups, matching the 11 physical elements and eight air-separated physical lens groups of Example 1. [2][3]
2. Panasonic specifies five aspherical lenses with eight aspherical surfaces; Example 1 has exactly eight aspherical surfaces on L2, L5, L6, L8, and L11. [2][3]
3. Panasonic identifies two dual-sided aspherical ED lenses. In Example 1, L8 and L11 are the two rear elements with aspherical surfaces on both sides and both use the same high-Abbe coordinate, nd = 1.55343 and νd = 71.5. This is useful correlation evidence, but the patent does not name an ED glass or glass supplier. [2][3]
4. The patent uses transverse motion of L3–L4 for image-blurring correction; Panasonic specifies POWER O.I.S. for the production lens. [1, ¶0047][2]
5. Panasonic states that the LX100 II retains the LX100 lens design, while the patent priority predates the original LX100 announcement. [3][4]
6. Panasonic describes moving lens groups in the LX100 II optical system; Example 1 likewise uses moving groups across the zoom range. [1, ¶0045][3]

The correlation is not exact in marketed numbers. The patent publishes 11.2612, 19.1449, and 32.5307 mm at its three infinity-focus zoom samples, while Panasonic markets 10.9–34 mm. The source f-numbers are 1.76551, 2.51390, and 2.91140 rather than the engraved f/1.7–2.8 range. The final LensVisualizer model therefore keeps marketing fields separate and does not rescale the prescription to force the advertised endpoints.

The final normalized model has computed effective focal lengths of 11.265298534 mm, 19.151668516 mm, and 32.537812044 mm. These differ slightly from the raw patent values because the model collapses three finite-thickness adhesive layers to direct cemented interfaces. The source rear parallel plate is also omitted and its effect is folded into a code-solved rear air gap. Those are explicit modeling transformations, not corrections to the patent.

The camera-family names also include Leica D-Lux (Typ 109), D-Lux 7 and D-Lux 8, whose official specifications list the 10.9–34mm f/1.7–2.8 ASPH. lens. These are production lens-family associations, not independent confirmation that each camera uses this exact patent prescription. [D-Lux (Typ 109) specifications](https://leica-camera.com/sites/default/files/pm-73538-Leica-D-Lux-%28Typ-109%29_Technical-Data_en.pdf), [D-Lux 7 specifications](https://leica-camera.com/sites/default/files/pm-54104-Technical_data_D-Lux_May_2020_en.pdf), [D-Lux 8 specifications](https://leica-camera.com/sites/default/files/pm-111399-leica-d-lux8_technical-data_en.pdf).

## Optical Architecture

Example 1 is a six-unit positive–negative–positive–positive–positive–positive zoom. The first two units are single elements: positive L1 forms G1, and strongly negative aspherical L2 forms G2. G3 contains the L3–L4 cemented pair followed by L5; G4 contains the L6–L7 cemented pair and the diaphragm; G5 contains L8 and the L9–L10 cemented pair; G6 is the single rear element L11. [1, ¶¶0031–0044]

The patent’s “11 elements” and “six lens groups” refer to different levels of grouping than the production “11 elements in 8 groups” terminology. In the optical prescription there are six moving zoom units, but three of those units contain cemented pairs. Counting each cemented pair as a single air-separated physical group yields eight physical groups. The data file therefore records `elementCount: 11` and `groupCount: 8`, while the diagram annotations retain G1 through G6 as the six moving optical units.

The normalized isolated zoom-unit focal lengths are approximately +66.804 mm for G1, −14.545 mm for G2, +553.824 mm for G3, +119.181 mm for G4, +29.230 mm for G5, and +35.552 mm for G6. G3 is consequently a very weak positive unit in first-order power even though it contains both strong negative and positive members. These are isolated unit powers computed from the final normalized prescription; they are distinct from standalone element powers, cemented-pair powers, and the units’ in-system behavior at a particular zoom spacing.

The three published zoom samples are all preserved as control points. This is necessary because the source spacings do not describe monotonic motion for every group. In the final model, G2 moves imageward from the wide sample to the middle sample and then reverses objectward by the longest-focal-length sample. G6 likewise shows a small middle-to-long-end reversal. Endpoint-only interpolation would erase those sampled trajectories.

The physical track from the first surface to the image plane increases from 74.949211 mm to 80.726022 mm and then 93.636257 mm across the three modeled states. At the longest-focal-length endpoint, the track/EFL ratio is 2.87777 and the rear-gap/EFL ratio is 0.46319. Under the project definitions, this prescription is therefore not classified as a telephoto architecture (`TL/EFL < 1` is not satisfied) and is not retrofocus (`BFD > EFL` is not satisfied). The patent’s phrase “telephoto end” is retained only as the source’s name for its longest-focal-length state.

The source Table 3 image heights increase through the zoom range while the focal length increases substantially, which is consistent with the changing angular field shown in the patent’s aberration diagrams. The final data file uses the manufacturer-backed `four-thirds` format classification for catalog and field-aware tooling, while preserving the patent’s smaller published maximum image height rather than inventing a custom format.

## Element-by-Element Analysis

### L1 — Biconvex Positive Front Element

**nd = 1.59282, νd = 68.6. Glass: FCD515 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +66.803597 mm.**

L1 is the sole element of G1 and carries the same first-order focal length as the complete G1 unit. The patent describes it simply as a biconvex positive lens. [1, ¶0039]

Its comparatively high Abbe number places it on the low-dispersion side of the patent’s glass palette, but the source supplies only nd and νd. The final data therefore uses a coordinate class rather than assigning a particular manufacturer or melt. No line indices or anomalous-partial-dispersion property are attached to L1.

Because G1 moves during zooming, L1 also establishes the moving front vertex of the system. The final normalized model retains its published radii and thickness unchanged.

### L2 — Biconcave Negative Variator, Two Aspherical Surfaces

**nd = 1.80500, νd = 41.0. Glass: S-LAH53 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = −14.544581 mm.**

L2 is both the complete G2 unit and the strongest isolated negative unit in the front half of the system. The patent identifies it as a biconcave lens with aspherical object- and image-side surfaces. [1, ¶0040]

Its two aspheres are source surfaces 3 and 4, represented as 3A and 4A in the data file. No catalog identity is asserted because the six-catalog review did not establish an exact, supplier-defensible public match at the stored coordinate.

G2 is the zoom unit whose sampled trajectory reverses. The three-point variable spacing table is therefore optically significant in the implementation, rather than being merely a display convenience.

### L3–L4 — Cemented Stabilization Pair in G3

The patent states that L3 and L4 are cemented with an adhesive and that the pair moves transversely for image-blurring correction. [1, ¶¶0034, 0047]

#### L3 — Biconcave Negative

**nd = 1.80518, νd = 25.5. Glass: SF6 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = −20.655611 mm.**

L3 is the negative member of the stabilization pair. Its low Abbe number makes it the more dispersive member of the pair, but the patent does not publish sufficient spectral data to support a specific partial-dispersion or APO claim.

#### L4 — Biconvex Positive

**nd = 1.91082, νd = 35.3. Glass: H-ZLaF4LA (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +15.344762 mm.**

L4 is the positive member of the same cemented pair. The data file uses a direct L3-to-L4 cemented interface at R = 27.4462 mm. The source’s 0.01000 mm adhesive layer is not represented as a generic synthetic element; instead, that thickness is added to the downstream L4 center thickness, which becomes 2.0864 mm in the normalized model.

The normalized cemented-pair focal length is +53.045812 mm. That is a net pair result and is distinct from the two standalone element focal lengths above. The complete G3 unit is much weaker, +553.824468 mm, because L5 follows the pair and changes the net unit power.

### L5 — Negative Meniscus, Rear Asphere

**nd = 1.68826, νd = 31.1. Glass: S-TIM28 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = −58.688265 mm.**

L5 is the third member of G3. The patent describes it as a meniscus lens with a concave object-side surface and an aspherical image-side surface. [1, ¶0041]

The image-side source surface 10 is represented as 10A. Its stored glass coordinate is retained, with S-TIM28 supplying a compatible spectral proxy whose production identity is not established.

In the normalized model L5 follows the positive L3–L4 cemented pair, and the combined G3 unit remains only weakly positive. The analysis therefore treats its role as part of the unit’s power balance rather than assigning a specific aberration function that the source does not state.

### L6–L7 — Cemented Pair in G4

The patent places the L6–L7 cemented pair ahead of the aperture diaphragm in G4. [1, ¶0035]

#### L6 — Biconcave Negative, Object-Side Asphere

**nd = 1.58332, νd = 59.3. Glass: M-BACD12 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = −28.903684 mm.**

L6 is the negative member of G4 and carries the aspherical object-side surface 11A. The patent describes L6 as biconcave with an aspherical object-side surface. [1, ¶0042]

#### L7 — Biconvex Positive

**nd = 2.00272, νd = 19.3. Glass: E-FDS2 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +24.108291 mm.**

L7 has the highest refractive index and lowest Abbe number in the final element list. Those coordinates are unusual, but they do not identify a supplier uniquely; the data therefore retains only the six-digit class.

As with L3–L4, the source 0.01000 mm adhesive layer is collapsed to a direct interface, and the downstream L7 center thickness becomes 1.9321 mm. The normalized pair focal length is +119.180793 mm, essentially the focal length of the full G4 unit because the diaphragm itself has zero optical power.

### L8 — Dual-Sided Aspherical Positive Element

**nd = 1.55343, νd = 71.5. Glass: M-FCD500 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +20.173959 mm.**

L8 is the first element of G5 and is biconvex with aspherical surfaces on both sides. [1, ¶0043]

Its coordinate is shared with L11 and has the highest Abbe number in the prescription. Panasonic states that the production lens contains two dual-sided aspherical ED lenses, and L8 plus L11 are the only pair in Example 1 that matches that structural description. That makes the correspondence useful for production correlation, but it does not prove the patent glass is a named ED catalog composition, nor does it justify assigning nC, nF, ng, or dPgF values that the patent does not publish.

### L9–L10 — Cemented Pair in G5

The patent states that L9 and L10 are cemented. [1, ¶0036]

#### L9 — Biconvex Positive

**nd = 1.77250, νd = 49.6. Glass: J-LASF016 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +20.558244 mm.**

L9 is the positive member of the pair. Its modeled semi-diameter is constrained closely by the final geometry: among the 11 elements, L9 has the smallest verified modeled edge thickness, about 0.11455 mm. That value refers to the modeled semi-diameter and is not a production drawing dimension.

#### L10 — Biconcave Negative

**nd = 1.84666, νd = 23.8. Glass: J-SF03 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = −12.214499 mm.**

L10 is the stronger negative member. The source 0.01000 mm adhesive layer is collapsed into the downstream L10 thickness, which becomes 0.9896 mm in the final model.

The normalized L9–L10 pair has a net focal length of −37.783429 mm. In combination with L8, the full G5 unit is positive at +29.230017 mm. This distinction between pair power and complete-unit power is important: neither value should be substituted for the standalone L9 or L10 focal length.

### L11 — Dual-Sided Aspherical Positive Meniscus / Focus Unit

**nd = 1.55343, νd = 71.5. Glass: M-FCD500 (coordinate-compatible spectral proxy; supplier unconfirmed). Standalone f = +35.551589 mm.**

L11 is the complete G6 unit. Patent prose ¶0044 calls L11 biconvex, but the selected numerical example gives positive radii on both surfaces (R22 = +19.63900 mm and R23 = +9746.50980 mm), and Fig. 1 depicts the rear element as a positive meniscus. The final shape metadata therefore follows the numerical Example 1 geometry and figure while preserving the patent radii and asphere coefficients unchanged. The patent also states that G6 moves toward the object side when focusing from infinity toward a nearby object. [1, Fig. 1; ¶¶0044, 0046; Table 1]

Its two aspherical surfaces are 22A and 23A in the normalized data. The rear surface is extremely weak in base curvature, so much of its non-spherical profile comes from the polynomial terms rather than from the spherical base.

The final file does not invent the near-focus displacement of G6. L11 therefore remains at the published infinity-focus positions for every authored focus slot, even though the production lens has finite minimum-focus specifications.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number, but not glass trade names, C/F/g line indices, Sellmeier coefficients, or anomalous partial-dispersion values. Stage-1 catalog review checked current or authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA sources. Every compatible catalog curve is named and qualified as a spectral proxy; these names do not establish production glass identities.

| Element | Patent index / Abbe | Reference | Runtime spectral model | Index residual / Abbe residual |
|---|---|---|---|---|
| L1 | 1.59282 / 68.6 | d-line | FCD515; supplier-neutral proxy | 0.000004 / 0.030 |
| L2 | 1.80500 / 41 | d-line | S-LAH53; supplier-neutral proxy | 0.001098 / -0.074 |
| L3 | 1.80518 / 25.5 | d-line | SF6; supplier-neutral proxy | 0.000002 / -0.070 |
| L4 | 1.91082 / 35.3 | d-line | H-ZLaF4LA; supplier-neutral proxy | 0.000000 / -0.050 |
| L5 | 1.68826 / 31.1 | d-line | S-TIM28; supplier-neutral proxy | 0.000671 / -0.025 |
| L6 | 1.58332 / 59.3 | d-line | M-BACD12; supplier-neutral proxy | -0.000190 / 0.160 |
| L7 | 2.00272 / 19.3 | d-line | E-FDS2; supplier-neutral proxy | 0.000003 / 0.020 |
| L8 | 1.55343 / 71.5 | d-line | M-FCD500; supplier-neutral proxy | -0.000111 / 0.180 |
| L9 | 1.77250 / 49.6 | d-line | J-LASF016; supplier-neutral proxy | 0.000000 / 0.020 |
| L10 | 1.84666 / 23.8 | d-line | J-SF03; supplier-neutral proxy | 0.000000 / 0.000 |
| L11 | 1.55343 / 71.5 | d-line | M-FCD500; supplier-neutral proxy | -0.000111 / 0.180 |

The palette spans νd = 19.3 to 71.5. That range establishes that the designer combined materials of very different dispersion, but nd/νd alone does not establish apochromatic correction or anomalous partial dispersion. The final data deliberately contains no nC, nF, ng, or dPgF fields and makes no APO claim.

The three source adhesive media at nd = 1.56732, νd = 42.8 and the source rear plate at nd = 1.51680, νd = 64.2 remain recorded in the evidence dossier but are not application elements. The former are collapsed at same-radius cement junctions; the latter is omitted according to the project rule for rear sensor/filter plates.

### Diagram color evidence

Catalog-inferred APD color tags identify L1, L7, L8, L10, L11. Each selected spectral proxy has computed ΔPgF above +0.015 relative to the normal-line baseline (0.6438 − 0.001682νd). The inspector names the proxy and its deviation. The patent does not supply these values; no measured line indices or patent dPgF fields are invented. These tags describe the modeled materials, not proof of production ED assignments or APO performance.

## Focus Mechanism

The patent states that G6, consisting only of L11, moves toward the object side when focusing from infinity to a nearby object. [1, ¶0046] It does not publish a near-focus G6 travel, close-focus variable spacings, magnification, or enough independent conjugate data to determine a unique internal focus law.

The production camera specification gives a minimum focus distance of 0.03 m at the wide end and 0.30 m at the long end. [2] Those are product-level subject-distance specifications, not internal lens-group positions.

For that reason the data file uses `NO_INTERNAL_RECONSTRUCTION`. `closeFocusM` is set to 0.03 m because the schema requires a minimum-focus value, but every focus pair in `var` is identical. The viewer therefore represents only the three published infinity-focus zoom states; it does not claim to reproduce the internal near-focus mechanism.

This distinction matters particularly for G6. The patent identifies the direction of focus travel, but the final model does not encode a guessed displacement merely to make the focus slider move.

## Aspherical Surfaces

Example 1 uses eight aspherical surfaces: source surfaces 3, 4, 10, 11, 16, 17, 22, and 23, represented as 3A, 4A, 10A, 11A, 16A, 17A, 22A, and 23A. They lie on five elements: L2, L5, L6, L8, and L11. [1, Tables 1–2]

The patent defines the sag as

$$
z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+\sum A_n h^n.
$$

This is the same conic convention used by the LensVisualizer data specification, so no conic conversion is required. All eight published conic constants are K = 0. The polynomial contains even orders A4 through A12; the data file adds A14 = 0 only to satisfy the current authored schema shape, not because the patent publishes a nonzero A14 term.

| Surface | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|
| 3A | 4.04330E-05 | −5.92449E-08 | −1.80291E-09 | 1.41335E-11 | −3.27100E-14 |
| 4A | 5.69066E-07 | 8.11958E-07 | −1.24411E-08 | 5.48832E-11 | 0 |
| 10A | 8.18947E-05 | 4.95376E-07 | −3.42721E-09 | 1.05655E-10 | 0 |
| 11A | 7.43261E-05 | 3.73289E-07 | −5.11294E-09 | 1.31843E-10 | 0 |
| 16A | −3.76482E-05 | 1.07311E-07 | −1.38939E-09 | 1.81605E-11 | 0 |
| 17A | 2.30876E-05 | 9.80261E-09 | −7.67882E-10 | 1.93662E-11 | 0 |
| 22A | −4.64106E-06 | 1.86129E-07 | −1.86394E-09 | 6.69528E-12 | 0 |
| 23A | 1.67447E-05 | 2.00177E-07 | −2.19294E-09 | 7.81576E-12 | 0 |

The patent does not publish clear semi-diameters, so the source itself does not support a physical rim-departure statement. After the Stage-2 model assigned and verified semi-diameters, the polynomial departure from the conic base could be evaluated at those modeled rims. Across the eight aspheres it ranges from about −0.088 mm on 16A to +1.009 mm on 17A. Those are model-aperture results, not production manufacturing dimensions. At the revised 11.8 mm rear-element rims, the departures are +0.0623 mm on 22A and +0.4498 mm on 23A.

The computed rim-slope maximum among all modeled surfaces is 46.07° on 16A, below the current project threshold. All K values are zero, so no positive-K finite conic-domain restriction is active, although the base-sag discriminant was still checked at every modeled rim.

## Conditional Expressions

The patent gives three explicit conditions for the design family. Recalculation from the raw Example 1 source prescription gives:

| Patent condition | Recomputed value | Patent range | Disposition |
|---|---:|---:|---|
| $f_{G1}/f_{G2}$ | −4.593023 | −9 < ratio < −2 | Satisfied |
| $D_{34T}/D_{34W}$ | 2.189697 | 1 < ratio < 3 | Satisfied |
| $L_T/f_T$ | 2.889000 | 2 < ratio < 3.5 | Satisfied |

These are source-model checks. In particular, the third ratio uses the patent’s own total length and focal length at its longest-focal-length state. The normalized application model has a slightly different track and EFL because of the direct-cement and rear-plate transformations, so its track/EFL ratio is reported separately rather than substituted into the patent condition.

Condition (1) expresses the strong contrast between positive G1 and negative G2. Condition (2) constrains the change in separation between G3 and G4. Condition (3) limits the total-length/focal-length ratio of the source design. The numerical example satisfies all three without altering the source values. [1, ¶¶0121–0138; Table 16]

## Image Stabilization

The patent explicitly assigns image-blurring correction to the cemented L3–L4 pair in G3. During stabilization, those two elements move in a direction perpendicular to the optical axis. [1, ¶0047] The patent’s transverse-aberration figure for Example 1 compares centered and decentered states at the longest-focal-length end. [1, Fig. 3]

Panasonic identifies the production LX100/LX100 II lens as using POWER O.I.S. [2] That is supporting production correlation, not proof that Panasonic has publicly declared Example 1 to be the exact production prescription.

The LensVisualizer data file is a centered sequential model. It records the L3–L4 pair as a cemented optical group but does not encode a transverse stabilization control or a decentered optical state. Consequently, no stabilization travel or decentered aberration result is claimed from the application model.

## Verification Summary

The final application prescription is normalized in three explicit ways. First, there is no uniform scale: `s = 1.0`. Second, each 0.01000 mm same-radius adhesive layer is collapsed to a direct cement interface, with its axial thickness added to the downstream element. Third, the source rear plate P is omitted and the final 23A-to-image air spacing is solved at each published infinity-focus zoom state.

The solved rear gaps are 14.236411 mm, 15.219722 mm, and 15.071157 mm. These restore the paraxial infinity conjugate after the adhesive collapse and plate omission. They should not be mistaken for the patent’s original `d23`, plate thickness, or BF quantities.

The direct-cement transformation changes the model EFL relative to the raw patent by +0.00410 mm, +0.00677 mm, and +0.00711 mm at the three authored states. Those residuals are larger than the raw-source transcription tolerance and are intentionally preserved as transformation effects rather than hidden by widening a comparison tolerance.

The modeled stop surface is at the patent-published diaphragm plane, but the patent gives no physical stop diameter. The data value `STO.sd = 6.3862 mm` is therefore a modeled maximum iris envelope. The effective opening at each zoom state is calibrated to the source/design f-number through the computed entrance-pupil magnification. Agreement with f/1.76551, f/2.51390, and f/2.91140 is consequently a calibration result, not independent verification of an unpublished diaphragm diameter.

Likewise, all lens semi-diameters are modeled. They were derived from exact meridional Snell/asphere ray envelopes and then checked against edge thickness, actual rim slope, conic-domain validity, shared-band cross-gap intrusion, and sampled off-axis containment. All three authored zoom states pass the exact sampled containment test, and six representative intermediate zoom samples also pass. These finite samples do not prove the continuous pupil/field domain.

The minimum modeled edge thickness is about 0.11455 mm at L9. The maximum modeled rim angle is 46.07° at 16A. Neither quantity is a manufacturer mechanical specification; both depend on the inferred semi-diameters in the final model.

The final surface-by-surface Petzval sum, using $\phi/(n n')$ on every refracting surface, is 0.004154170644 mm⁻¹, corresponding to a Petzval radius magnitude of about 240.722 mm. Collapsing the same-radius adhesive interfaces leaves this sum unchanged to numerical precision, and the omitted flat plate contributes no refracting power.

The original dossier used portable verification. Repository integration results are recorded in the accompanying 2026-09-15 audit log.

## Sources / References

1. Takakazu Bito and Hiroaki Suzuki, “Zoom Lens System, Imaging Device, and Camera,” **US 2016/0054550 A1**, Panasonic Intellectual Property Management Co., Ltd., published 25 February 2016. Example 1: Fig. 1; Fig. 2; Fig. 3; ¶¶0030–0047; asphere equation ¶¶0143–0149; Tables 1–3 on printed pp. 7–8; conditions ¶¶0121–0138 and Table 16. Supplied patent PDF is the prescription source used for this analysis.
2. Panasonic, **DC-LX100 II Camera Archive — Specs**, Panasonic Australia. https://www.panasonic.com/au/support/product-archives/lumix-cameras-video-cameras/lumix-digital-cameras/dc-lx100m2.specs.html
3. Panasonic, **The LUMIX LX100 II with New 17-Megapixel Multi Aspect 4/3-type Sensor**, corporate product article. https://www.panasonic.com/my/corporate/news/articles/the-lumix-lx100-ii-with-new-17-megapixel-multi-aspect-4-3-type-inch-sensor-featuring-f1-7-leica-dc-vario-summilux-lens-and-4k-video.html
4. Panasonic, **LUMIX DMC-LX100 announcement**, 15 September 2014. https://cis.panasonic.com/news/lumix-dmc-lx100-4-3-mos-sensor-svetosilnyy-obekti/
5. Panasonic Newsroom Japan, **Digital Camera LUMIX DC-LX100M2 launch**, 23 August 2018. https://news.panasonic.com/jp/press/jn180823-1
6. OHARA, **Optical Glass Catalog**. https://oharacorp.com/glass-catalog/
7. HOYA GROUP Optics Division, **Optical Glass Data Download**. https://www.hoya-opticalworld.com/english/datadownload/index.html
8. SCHOTT Advanced Optics, **Optical Glass** catalog and data collection. https://www.schott.com/en-us/products/optical-glass-p1000267
9. HIKARI GLASS CO., LTD., **Optical Glass Catalog**. https://www.hikari-g.co.jp/optical_glass/catalog/
10. Chengdu Guangming Optoelectronic (CDGM), **Optical Glass Database**. https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
11. SUMITA OPTICAL GLASS, Inc., **Optical Glass Data**. https://www.sumita-opt.co.jp/en/download/
