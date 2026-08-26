# CANON EF 135mm f/2 L USM — JP 2018-049102 A, Numerical Example 1

## Patent Reference and Design Identification

**Patent:** JP 2018-049102 A
**Application Number:** JP 2016-183796
**Filed:** 2016-09-21
**Published:** 2018-03-29
**Inventor:** Tomohiko Ishibashi
**Applicant:** Canon Inc.
**Title:** 光学系およびそれを有する光学機器 (*Optical system and optical apparatus having the same*, descriptive translation)

**Embodiment analyzed:** Example 1 / Numerical Example 1

The prescription modeled here is Numerical Example 1 of JP 2018-049102 A. The patent describes a three-group positive–negative–positive photographic system in which the negative middle group moves imageward for focusing, while the first and third groups remain fixed (¶¶0089–0093). The numerical table gives a 133.50 mm focal length, F2.06, 21.64 mm image height, 0.900 m close-focus state, and −0.19 close-focus magnification (¶0108 and Table 1).

The project correlation is the **CANON EF 135mm f/2 L USM**. Canon's Camera Museum records the production lens as a 135 mm f/2 Canon EF lens marketed in April 1996 with 10 elements in 8 groups, two UD elements, 0.9 m closest focusing distance, 0.19× maximum magnification, eight diaphragm blades, ring USM, and rear focusing. Those production specifications converge closely with the Example-1 base prescription: 10 elements in 8 air-spaced groups, design focal length 133.495358 mm, modeled F/2.059788, two elements at `nd = 1.49700, νd = 81.5`, and a negative internal focusing group behind the stop.

This correlation does **not** make the 2018 publication the original production patent. The marketed lens predates the application by approximately two decades, and Example 1 adds two radial-transmission films that Canon's production specification does not identify as features of the retail EF135mm f/2L USM. The modeled prescription is therefore treated as a later Canon apodized embodiment built around a base formula strongly correlated with the production lens, as fixed by the project job card.

No dimensional scaling is applied. The prescription remains at `s = 1.000000`; marketed 135 mm / f/2 and exact design values are kept separate throughout.

## Optical Architecture

The design contains **10 physical elements in 8 air-spaced groups**. In the patent's functional grouping it is a positive–negative–positive system:

- **G1, positive:** L1–L5, ending at the aperture stop. Its independently computed focal length is +93.889817 mm.
- **G2, negative:** the cemented L6+L7 doublet immediately behind the stop. Its net isolated focal length is −65.391598 mm, and it is the sole focusing group.
- **G3, positive:** the fixed rear section L8–L10. Its independently computed focal length is +82.075174 mm.

The aperture stop is the single neutral plane between G1 and G2. The modeled stop semi-diameter is the patent's published 35.51 mm effective diameter divided by two, or 17.755 mm. The source publishes effective diameters for every optical surface, so the data file uses those values directly as semi-diameters after division by two rather than enlarging them to remove intentional pupil clipping.

Two cemented components occur. D1 is L6+L7 and is identical to functional group G2; its net power is strongly negative despite L6 being positive as an isolated element. D2 is L8+L9. Its isolated cemented focal length is approximately −611.891077 mm, so the pair is only weakly negative as a component; it nevertheless sits inside the net-positive G3, where the positive L10 and the in-situ separations determine the group power. These component and group powers are not interchangeable with the standalone focal lengths of their individual elements.

Under the project's quantitative architecture definitions, this prescription is **not** classified as telephoto: total first-vertex-to-image track divided by EFL is 1.161987969, which exceeds unity. It is also not retrofocus: BFD/EFL is 0.405375478, well below unity. Canon's historical product page categorizes the lens as a telephoto lens by focal-length class; that marketing/category terminology is separate from the project's first-order architecture test.

The most distinctive feature of the selected patent embodiment is not an aspheric surface or a zoom mechanism but the placement of two apodization films on opposite sides of the stop. The first is on the object-side surface of L4 (surface 7), and the second is on the image-side surface of L9 (surface 17). The patent uses this separated placement to control the way apodization changes with image height and with the motion of the focusing group (¶¶0023–0034, ¶¶0091–0093).

## Element-by-Element Analysis

### L1 — Biconvex Positive

`nd = 1.48749, νd = 70.2.` Glass: **487702 class (catalog-equivalent coefficient proxy; production supplier unspecified)**. Standalone `f = +160.740749 mm`.

L1 is the large front positive collector of fixed G1. Its relatively high Abbe number places it on the crown-like side of the front group's dispersion balance, but the data do not establish a specific vendor glass or partial-dispersion behavior. Its standalone positive power is moderate compared with the full G1 power; the group power arises from the complete L1–L5 sequence and its air spaces rather than from L1 alone.

### L2 — Positive Meniscus

`nd = 1.49700, νd = 81.5.` Glass: **497815 UD-class coordinate (catalog-equivalent coefficient proxy; production supplier unspecified)**. Standalone `f = +130.141309 mm`.

L2 is a high-Abbe positive element in fixed G1. The production lens is documented by Canon as containing two UD elements, and the patent prescription contains exactly two elements at this unusual high-Abbe coordinate, L2 and L4. That agreement is useful correlation evidence, but it does not identify the historical glass vendor, prove a specific catalog melt, or supply anomalous-partial-dispersion data.

### L3 — Biconcave Negative

`nd = 1.83400, νd = 37.2.` Glass: **834372 class (catalog-equivalent coefficient proxy; production supplier unspecified)**. Standalone `f = −97.181472 mm`.

L3 provides substantial negative power within the otherwise positive front group. Its higher index and lower Abbe number contrast with L2 and L4. The prescription therefore alternates strongly different refractive and dispersive coordinates in the front section, but the available data support only an ordinary chromatic-balancing interpretation; they do not support an APO or anomalous-dispersion claim.

### L4 — Biconvex Positive, First Apodization Element

`nd = 1.49700, νd = 81.5.` Glass: **497815 UD-class coordinate (catalog-equivalent coefficient proxy; production supplier unspecified)**. Standalone `f = +110.583328 mm`.

L4 repeats the same high-Abbe coordinate used by L2 and is the second of the two patent elements consistent with Canon's marketed count of two UD elements. In the selected embodiment it also carries the first apodization treatment: ¶0091 places a light-absorbing thin film on the object-side curved surface, which is surface 7 in the numerical prescription.

The film is a transmission treatment, not an additional refractive element. Accordingly, the LensVisualizer data model keeps L4 as a single refractive element and records the film in the element role and analysis rather than inventing a synthetic cement or glass layer.

### L5 — Negative Meniscus

`nd = 1.71736, νd = 29.5.` Glass: **717295 class (catalog-equivalent coefficient proxy; production supplier unspecified)**. Standalone `f = −273.913242 mm`.

L5 is a weak negative meniscus immediately before the aperture stop. Its isolated focal length is much longer in magnitude than those of the stronger negative elements L3, L7, and L8. In situ it completes the fixed positive front group and establishes the final powered surface before the stop.

### D1 / G2 — L6 + L7 Cemented Negative Focusing Doublet

**L6:** `nd = 1.84666, νd = 23.9.` Glass: **847239 class (catalog-equivalent coefficient proxy; production supplier unspecified)**. Standalone `f = +67.481930 mm`.

**L7:** `nd = 1.71999, νd = 50.2.` Glass: **720502 class (catalog-equivalent coefficient proxy; production supplier unspecified)**. Standalone `f = −32.915950 mm`.

L6 and L7 share the cemented interface at surface 13. The interface correctly uses the downstream L7 index in the sequential prescription. Although L6 is positive and L7 is negative as isolated elements, the cemented component has a net focal length of **−65.391598 mm**. This net negative component is also the complete functional focusing group G2.

The group translates rigidly imageward as focus moves from infinity to the published 0.900 m state. Because the group is compact and cemented, the motion changes only the air spaces on either side; its internal 4.50 mm + 2.00 mm glass construction remains fixed.

### D2 — L8 + L9 Cemented Rear Pair

**L8:** `nd = 1.74077, νd = 27.8.` Glass: **741278 class (catalog-equivalent coefficient proxy; production supplier unspecified)**. Standalone `f = −35.535140 mm`.

**L9:** `nd = 1.77250, νd = 49.6.` Glass: **773496 class (catalog-equivalent coefficient proxy; production supplier unspecified)**. Standalone `f = +43.342889 mm`.

L8 and L9 form the second cemented pair at surface 16. Their isolated powers are substantial and opposite in sign, but the cemented pair's net isolated focal length is only **−611.891077 mm**, making it a weak negative component. It must not be described as the positive rear group by itself: the complete G3 becomes positive only when D2 is combined in situ with L10 and the rear-group separations.

L9 is also the second apodization element. Paragraph ¶0092 places a light-absorbing thin film on its image-side curved surface, surface 17. The source states that the transmission decreases monotonically from the optical axis toward the periphery.

### L10 — Biconvex Positive

`nd = 1.83400, νd = 37.2.` Glass: **834372 class (catalog-equivalent coefficient proxy; production supplier unspecified)**. Standalone `f = +83.436538 mm`.

L10 is the final positive element of fixed G3 and supplies the strong positive contribution needed to make the rear functional group net positive despite the weak negative D2 component ahead of it. The last powered surface is followed by the published 54.12 mm image-side spacing.

## Glass Identification and Selection

The data file deliberately does not assign production-vendor identities. JP 2018-049102 A publishes `nd` and `νd` but no per-element `nC`, `nF`, `ng`, `PgF`, or `dPgF`. A cross-vendor coordinate audit found compatible coefficient-backed catalog rows for every physical glass. The supplier-neutral six-digit labels therefore enable qualified spectral proxies while the patent coordinates remain authoritative; they do not establish Canon's historical vendor or melt.

| Data-file glass annotation | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| 487702 class; supplier unspecified | 1.48749 | 70.2 | L1 | Catalog-equivalent coefficient proxy for a high-Abbe crown-like coordinate |
| 497815 UD-class coordinate; supplier unspecified | 1.49700 | 81.5 | L2, L4 | Catalog-equivalent coefficient proxy; consistent with the production lens's two-UD-element count |
| 834372 class; supplier unspecified | 1.83400 | 37.2 | L3, L10 | Catalog-equivalent coefficient proxy for a high-index coordinate |
| 717295 class; supplier unspecified | 1.71736 | 29.5 | L5 | Catalog-equivalent coefficient proxy for a flint-like coordinate |
| 847239 class; supplier unspecified | 1.84666 | 23.9 | L6 | Catalog-equivalent coefficient proxy for a very high-index, low-Abbe coordinate |
| 720502 class; supplier unspecified | 1.71999 | 50.2 | L7 | Catalog-equivalent coefficient proxy for the higher-Abbe partner in moving D1 |
| 741278 class; supplier unspecified | 1.74077 | 27.8 | L8 | Catalog-equivalent coefficient proxy for the low-Abbe member of rear D2 |
| 773496 class; supplier unspecified | 1.77250 | 49.6 | L9 | Catalog-equivalent coefficient proxy for the higher-Abbe member of rear D2 |

The front group combines high-Abbe positive elements with lower-Abbe negative elements, and both cemented rear components pair glasses with markedly different Abbe numbers. That pattern is consistent with ordinary longitudinal and secondary chromatic balancing in a fast long-focus lens. The coefficient proxies improve chromatic tracing but do not establish historical glass identities or patent partial dispersion. Because the patent contains no line indices or `dPgF`, no APO or anomalous-partial-dispersion behavior is claimed here.

Canon's statement that the production EF135mm f/2L USM uses two UD elements remains a **manufacturer product fact**, not a glass-identity assignment for the patent. The data marks L2 and L4 as inferred UD positions so the diagram communicates that correlation, while the absence of patent line indices or `dPgF` still precludes an anomalous-partial-dispersion or APO claim.

## Focus Mechanism

Focus is **published**, not reconstructed. Paragraph ¶0093 states that G2 moves while G1 and G3 remain fixed. In the data file, the two variable air spaces reproduce the patent's infinity and close-focus columns exactly:

| Variable spacing | Infinity | 0.900 m close state | Change |
|---|---:|---:|---:|
| D11, stop to G2 (`STO`) | 2.28 mm | 17.81 mm | +15.53 mm |
| D14, G2 to G3 (`14`) | 22.52 mm | 6.99 mm | −15.53 mm |
| Sum | 24.80 mm | 24.80 mm | 0.00 mm |

The conserved 24.80 mm sum shows that the cemented negative G2 translates rigidly by **15.53 mm imageward** without changing the fixed axial position of G3. No reversal or secondary floating motion is present in the selected embodiment.

The patent's 900 mm close-focus distance is interpreted as object plane to the fixed image plane. With the 155.12 mm lens track, the object plane is therefore 744.88 mm in front of surface 1. The independent close-state paraxial trace gives magnification **−0.191410433**, reproducing the patent's rounded −0.19 value and Canon's marketed 0.19× maximum magnification. Treating 900 mm as distance from the front vertex does not reproduce the patent's close-focus marginal-ray heights, so that alternative reference is rejected by the optical calculation.

Canon describes the production lens as using ring USM and rear focusing. The patent establishes the optical group motion; the motor type is manufacturer product metadata rather than a property inferred from the prescription.

## Apodization Strategy and Source Limitations

The patent's principal subject is the stability of apodization as focus changes. It places a first transmission-distribution element before the stop and a second after the stop. In Example 1 these are not separate flat filters: the absorbing films are formed directly on curved lens surfaces, specifically surface 7 of L4 and surface 17 of L9 (¶¶0091–0092).

The patent explains that a single apodizing element can produce an asymmetric off-axis light distribution because upper and lower rays exchange their relative positions across the stop. Using elements on both sides of the stop allows the two transmission distributions to combine, while the first element is positioned where the axial marginal-ray height varies comparatively little with focusing (¶¶0023–0034). The selected Example 1 then moves only G2, leaving both apodization-bearing elements fixed.

Table 1 reports `Te1/T1 = 0.05`, `Te2/T2 = 0.62`, `Th1/T1 = 0.99`, and `Th2/T2 = 1.00`. These are source facts. The patent does not publish a numerical radial transmission function sufficient to reconstruct those values continuously, and Figure 7 is a plotted normalized transmission distribution rather than a coefficient table. The LensVisualizer prescription therefore does not attempt to simulate the films' attenuation and does not add synthetic refractive surfaces for them.

The absence of a transmission law also limits spectral interpretation. Condition (9) concerns wavelength-dependent transmission from 430 to 700 nm at the radius where the 550 nm transmission is 50%, but the required spectral data are not published for Example 1. That condition cannot be independently evaluated from the supplied patent.

## Conditional Expressions

JP 2018-049102 A gives twelve principal conditions governing power distribution, track length, focus-dependent marginal-ray height, apodization transmission, field angle, and the placement of the two transmission-distribution elements. The selected prescription satisfies every condition that can be evaluated from the published geometry or Table-1 values; condition (9) remains indeterminate because its spectral transmission data are absent.

| Condition | Requirement | Example-1 value used here | Basis |
|---|---|---:|---|
| (1) | `0 ≤ Te1/T1 ≤ 0.4` | 0.05 | Patent Table 1; radial transmission law not numerically published |
| (2) | `0.6 ≤ Te2/T2 ≤ 1` | 0.62 | Patent Table 1; radial transmission law not numerically published |
| (3) | `−0.05 ≤ f/ff ≤ 4` | 1.421829995 | Independently recomputed paraxially |
| (4) | `0.5 ≤ L/f ≤ 2` | 1.161987969 | Independently recomputed from track and EFL |
| (5) | `0.85 ≤ hm1/hi1 ≤ 1.15` | 0.954184839 | Exact spherical marginal-ray trace |
| (6) | `0.5 ≤ hm2/hi2 ≤ 0.96` | 0.849417141 | Exact spherical marginal-ray trace |
| (7) | `0.85 ≤ Th1/T1` | 0.99 | Patent Table 1 |
| (8) | `0.85 ≤ Th2/T2` | 1.00 | Patent Table 1 |
| (9) | `(Tλmax − Tλmin)/Tλmax ≤ 0.20` | not determinable | Required 430–700 nm transmission spectrum not published |
| (10) | `1° ≤ ω ≤ 25°` | 9.207724444° | Independently recomputed from image height and EFL |
| (11) | `0.25 ≤ LF1/Lf` | 0.463601533 (Table-1 surface) / 0.310344828 (literal near side) | Both interpretations independently reconstructed |
| (12) | `0.25 ≤ LF2/Lr` | 0.866803279 (Table-1 surface) / 0.692622951 (literal near side) | Both interpretations independently reconstructed |

Conditions (11) and (12) expose an internal source inconsistency that is preserved rather than corrected. Paragraphs ¶0081 and ¶0085 define `LF1` and `LF2` to the side of each apodization element nearest the stop. For L4 that literal surface is 8, giving `LF1/Lf = 0.310344828`; Table 1 instead uses surface 7, the actual coated surface, giving 0.463601533. For L9 the literal near side is surface 16, giving `LF2/Lr = 0.692622951`; Table 1 uses coated surface 17, giving 0.866803279. Both readings satisfy the lower bound of 0.25, so the contradiction does not change the selected prescription or its compliance.

## Verification Summary

The final data file was independently recomputed from its authored TypeScript arrays using sequential reduced-angle tracing and a separate ABCD product, with exact spherical tracing for the wide-open marginal ray and the close-focus checks. The principal results are:

| Quantity | Independent result | Patent/source value |
|---|---:|---:|
| Effective focal length | 133.495358106 mm | 133.50 mm |
| Back focal distance | 54.115744633 mm | 54.12 mm |
| First vertex to image track | 155.120000000 mm | 155.12 mm |
| Front principal point | +85.933506150 mm | +85.94 mm |
| Rear principal point | −79.379613473 mm | −79.38 mm |
| Entrance pupil position from surface 1 | +74.832605285 mm | +74.83 mm |
| Exit pupil position from surface 19 | −91.487340977 mm | −91.49 mm |
| Exact wide-open f-number | F/2.059788166 | F2.06 |
| Close-state paraxial magnification | −0.191410433 | −0.19 |
| Petzval sum | 0.0010461209589 mm⁻¹ | — |

The Petzval sum is calculated surface by surface as `φ/(n·n′)`, not from element powers. Expressed only as a signed air-image equivalent, `−1/P` is approximately −955.912403 mm.

The source semi-diameters also remain geometrically viable in both published focus states. The minimum computed element edge thickness is **1.658391 mm**, the maximum actual spherical rim slope is **51.335064°**, and the maximum shared-band cross-gap sag-intrusion fraction is **0.814454**, below the current 0.90 limit. The full-field chief ray and the tested quarter-stop admitted band remain within the published apertures in both directions at infinity and at the published close state. Wider full-field pupil-edge rays show the intentional vignetting discussed by the patent; the data file does not enlarge the clear apertures to suppress it.

All powered surfaces are spherical. Numerical Example 1 publishes no aspheric equation, conic constant, or polynomial coefficients, so there is no aspherical-surface section and no coefficient scaling or conic conversion to document.

No sensor cover glass, filter plate, dummy plane, flare-cutter plane, or other inactive optical plane is present in Numerical Example 1, and none is introduced in the model. No source prescription value is corrected. The only source contradiction retained is the `LF1/LF2` reference-surface wording described above.

## Sources

1. **JP 2018-049102 A**, Canon Inc., Tomohiko Ishibashi, *光学系およびそれを有する光学機器*, published 2018-03-29. Primary prescription source: ¶¶0089–0108, Numerical Example 1; Table 1; Figures 1, 2, and 7.
2. **Canon Camera Museum — EF135mm f/2L USM**, Canon Inc. Official production-lens identity and specifications: <https://global.canon/en/c-museum/product/ef335.html>.
3. **Canon Camera Museum — EF135mm F2L USM (Japanese)**, Canon Inc. Official source for the ring-USM and rear-focus description: <https://global.canon/ja/c-museum/product/ef335.html>.
4. **Companion prescription:** `CanonEF135mmf2LUSM.data.ts`. Authoritative for element names, shapes, stored glass annotations, exact modeled EFL/f-number, focus variables, and semi-diameters.
5. **Independent calculations:** `CanonEF135mmf2LUSM.calculations.json` and `CanonEF135mmf2LUSM.verify.py`. Reduced-angle/ABCD, exact marginal-ray, movement, Petzval, and geometry verification.
6. **Glass-coordinate audit:** `CanonEF135mmf2LUSM.glass-audit.csv`, based on authoritative OHARA, HOYA, SCHOTT, HIKARI, SUMITA, and CDGM optical-glass catalogs. The audit is used to reject unproved vendor identities, not to assign catalog glass names to the patent.
