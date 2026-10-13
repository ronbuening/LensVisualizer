## Patent Reference and Design Identification

**Patent:** US 4,444,473\
**Application Number:** US 06/189,224\
**Filed:** September 22, 1980\
**Priority:** October 4, 1979 (JP 54-128564); January 23, 1980 (JP 55-7099)\
**Granted:** April 24, 1984\
**Inventor:** Yoshinobu Kudo\
**Assignee:** Minolta Camera Co., Ltd.\
**Title:** *Gauss Type Lens System*\
**Embodiment analyzed:** Example 5, TABLE 5; optical form shown in FIG. 9

The modeled prescription is Example 5 of US 4,444,473. The patent describes a compact modified Gauss objective for a
single-lens-reflex camera, with five lens units, six glass elements, approximately f/2 aperture, and about 46° full field
([1], PDF pp. 8–12). Example 5 supplies the eleven optical surfaces, ten source axial spacings, six refractive indices and
Abbe numbers, `f = 100`, `FNo = 2.0`, `2ω = 46°`, `L.B. = 72.01`, and `Σd = 63.80` ([1], TABLE 5).

The production association is a convergent correlation rather than manufacturer-confirmed provenance. Minolta product
literature identifies a Minolta MD 2/50 mm with six elements in five groups and f/2 maximum aperture; the January 1984 brochure
also gives a 47° marketed angle of view and 0.45 m minimum focus distance ([3]). An earlier Minolta lens brochure places the
MD 50 mm family in the product line by late 1981 ([2]). The optical patent is assigned to Minolta, its priority dates precede
those brochures, the element/group count and aperture agree, and a uniform scale of `s = 0.5` converts the patent's
normalized 100-unit design to a computed 50.0105 mm focal length. The patent's 46° design field and the brochure's 47°
marketed angle remain distinct rather than being treated as the same measurement.

The data file therefore uses the normalized catalog title `MINOLTA MD 50mm f/2`, the Minolta SR mount taxonomy, and the
135-format taxonomy. The mount/format assignment is supported by Minolta documentation for the SR bayonet and 24×36 mm
film format ([4]).

## Optical Architecture

Example 5 is an all-spherical modified Gauss design with six elements in five air-separated units. From object to image,
the patent identifies two positive menisci (L1, L2), a negative meniscus (L3), a cemented biconcave/biconvex fourth unit
(L4+L5), and a final positive element (L6) ([1], PDF p. 9 and FIG. 9). In Example 5 the object-side surface of L6 is plane,
so the implemented rear element is plano-convex.

The model preserves that architecture without adding cover glass, filters, dummy planes, or synthetic cement layers.
Surface 8 is the L4→L5 cemented interface and carries the downstream L5 refractive index and element identity. All
prescription lengths, including the patent back-focus reference distance, are uniformly scaled by 0.5; refractive indices
and Abbe numbers are unchanged. Because the source has no aspheres, no coefficient transformation is required.

The patent does not publish a dimensioned aperture-stop plane. FIG. 9 shows the large central `d6` air space but not a
measurable iris position ([1], PDF p. 6). The implemented model therefore places `STO` at the midpoint of the scaled `d6`
gap, splitting 11.355 mm into 5.6775 mm on each side. Its semi-diameter is calibrated to the published f/2 target; this is
a modeling choice, not a recovered production diaphragm location or diameter.

The published rear-vertex-to-image spacing is also preserved as a source quantity. The final surface therefore carries
36.005 mm to the default image plane, exactly half the printed `L.B. = 72.01`. The rounded prescription itself computes a
slightly different paraxial BFD of 36.0102 mm. That discrepancy is retained rather than silently replacing the patent's
image-plane value.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.72000, νd = 50.3. Glass: 720503 — lanthanum-crown coordinate class (supplier unresolved). f = +58.55 mm` (standalone).

L1 is the first positive unit of the modified Gauss system. The patent explicitly constrains the first-unit focal length
through condition (3) as part of the design's back-focus strategy; the explanatory text states that stronger first-unit
power can reduce the required diameters of the following units while the negative fourth unit and L2/L3 air lens help
retain back focal distance ([1], PDF p. 9). The focal length quoted above is the independently recomputed standalone
thick-element focal length from the final scaled data, not the focal length of the complete objective.

### L2 — Positive Meniscus

`nd = 1.72000, νd = 50.3. Glass: 720503 — lanthanum-crown coordinate class (supplier unresolved). f = +58.83 mm` (standalone).

L2 is the second positive meniscus and shares the same patent glass coordinate as L1. Its rear surface, the following air
gap, and the front surface of L3 form the patent-defined L2/L3 air lens. The final scaled prescription gives that air lens
an equivalent `F23 = -188.72 mm`. The patent treats this negative air-lens power, together with the negative fourth unit,
as one of the quantities used to retain adequate back focal distance ([1], conditions (4)–(5), PDF p. 9).

### L3 — Negative Meniscus

`nd = 1.68300, νd = 32.1. Glass: Unmatched (683321 coordinate; supplier unresolved). f = -28.58 mm` (standalone).

L3 supplies the negative third unit immediately in front of the central stop region. Its position and curvatures define the
rear boundary of the patent's negative L2/L3 air lens. The patent separately constrains the refractive indices and Abbe
numbers of the third and fourth glass positions in conditions (13) and (14), describing those restrictions as part of the
chromatic-aberration balance ([1], PDF p. 10). The data retain only the patent's `nd`/`νd` coordinate; no vendor identity or
line-index data are asserted for L3.

### L4 — Biconcave Negative, Front Member of Cemented Unit D1

`nd = 1.65450, νd = 33.9. Glass: SF9 — coordinate-compatible dense-flint spectral proxy; supplier unspecified. f = -22.14 mm` (standalone).

L4 is the negative front component of the fourth unit. Its rear surface is the cemented interface with L5. The patent
requires the fourth unit to have negative net focal power and discusses that unit, together with the negative L2/L3 air
lens, in the back-focus balance ([1], condition (4), PDF p. 9). The individual focal length above describes L4 by itself
in air and must not be confused with the much weaker net power of the cemented L4+L5 unit.

### L5 — Biconvex Positive, Rear Member of Cemented Unit D1

`nd = 1.72000, νd = 52.1. Glass: Unmatched (720521 coordinate; supplier unresolved). f = +26.49 mm` (standalone).

L5 is cemented directly to L4 at surface 8. Although L4 and L5 have substantial standalone powers of opposite sign, the
final cemented pair is only weakly negative, with net focal length `-674.32 mm`. This agrees with the patent's requirement
that the fourth unit remain negative while allowing the interface curvature to participate in the aberration balance.
The patent specifically discusses the cemented-surface radius in condition (1), noting different spherical, chromatic,
coma, and field-curvature consequences when that range is exceeded ([1], PDF p. 9). Those statements describe the
patent's design rationale; they are not independent element-by-element aberration decompositions.

### L6 — Plano-Convex Positive Rear Element

`nd = 1.74400, νd = 44.9. Glass: 744449 — lanthanum-flint coordinate class (supplier unresolved). f = +51.48 mm` (standalone).

L6 is the final positive unit. Its object-side surface is plane in Example 5 and its image-side surface is convex toward
the image under the patent's sign convention. The patent's compactness and glass recommendations include the average of
N1 and N6 in condition (6) and the N5/N6 range in condition (12) ([1], PDF p. 10). Multiple modern catalog glasses reproduce
or nearly reproduce the rounded 1.7440/44.9 coordinate, so the data retain only a neutral coordinate class rather than
assigning a specific historical melt.

## Glass Identification and Selection

The patent labels each material only by refractive index `N` and Abbe number `V`; it does not name a supplier or explicitly
state the spectral reference line. The model uses a d-line `nd`/`νd` interpretation because the rounded coordinates match
contemporary d-line catalog conventions, but that remains a catalog-supported interpretation rather than patent text.

| Elements | Stored `nd / νd` | Data-file glass label | Identification status |
|---|---:|---|---|
| L1, L2 | 1.72000 / 50.3 | 720503 — lanthanum-crown coordinate class | Supplier unresolved; several exact/near catalog candidates |
| L3 | 1.68300 / 32.1 | Unmatched (683321 coordinate) | No defensible named catalog identity established |
| L4 | 1.65450 / 33.9 | SF9 — coordinate-compatible dense-flint spectral proxy; supplier unspecified | Rounded coordinate only; supplier unresolved |
| L5 | 1.72000 / 52.1 | Unmatched (720521 coordinate) | No defensible named catalog identity established |
| L6 | 1.74400 / 44.9 | 744449 — lanthanum-flint coordinate class | Supplier unresolved; several exact/near catalog candidates |

The catalog audit checked current or authoritative material from SUMITA, OHARA, HIKARI/Nikon, SCHOTT, CDGM, and HOYA
([5]–[10]). Exact coordinate agreement is not treated as evidence of the historical supplier. In particular, the L1/L2
and L6 coordinates have plausible entries from multiple manufacturers. The data therefore do not populate `nC`, `nF`,
`ng`, or `dPgF` from candidate glasses. Four elements resolve to compatible catalog spectral proxies at runtime, including SF9 for L4; L3 and L5 retain the patent-coordinate fallback. No apochromatic or anomalous-partial-dispersion claim is supported.

## Focus Mechanism

The selected patent example is a single fixed prescription. It contains no focus-state table, no moving-group description,
and no variable spacing law. The production brochure gives a 0.45 m minimum focus distance ([3]), but that boundary
observable does not uniquely determine an internal optical movement.

The data therefore use `NO_INTERNAL_RECONSTRUCTION`: `var` is empty and no close-focus prescription is invented. The
0.45 m value is retained only as marketed product metadata. Because the available sources do not establish which optical
unit moves during focusing, this analysis does not assign the production lens to unit, inner, rear, or floating focus.

## Air Lens and Patent Power Balance

The air space between L2 and L3 is explicitly treated by the patent as an optical air lens. In the final scaled model its
computed equivalent focal length is `F23 = -188.72 mm`. The cemented L4+L5 fourth unit is also net negative, with computed
focal length `-674.32 mm`. These are distinct from the standalone powers of the individual glass elements.

The patent's explanation of conditions (3)–(5) links first-unit power, fourth-unit negative power, and the negative L2/L3
air-lens power to the requirement for a sufficiently long back focal distance ([1], PDF p. 9). The final paraxial model
produces `BFD/EFL = 0.72005`, consistent with the patent's stated design goal of back focal distance longer than about 72%
of focal length ([1], PDF p. 8). This ratio is a computed property of the rounded Example 5 prescription, not a separate
manufacturer specification.

## Conditional Expressions

The patent gives five base conditions and additional recommended ranges for compactness, distortion, and glass selection
([1], PDF pp. 9–10). The dossier verifier evaluates those expressions directly from the Example 5 transcription. Uniform
scaling does not change the dimensionless results.

| Condition | Normalized requirement | Example 5 result |
|---|---|---|
| (1) | `0.05 < f/r8 < 1.4` | PASS; 0.30625 |
| (2) | `0.52 < Σd/f < 0.65` | PASS; 0.63800 |
| (3) | `0.8 < f/f1 < 1.3` | PASS; 0.85401 |
| (4) | `0.06 < |f/f45| < 0.5`, `f45 < 0` | PASS; 0.07415 |
| (5) | `0.2 < |f/F23| < 0.5`, `F23 < 0` | PASS; 0.26494 |
| (6) | `1.7 < (N1 + N6)/2 < 1.75` | PASS; 1.732 |
| (7) | `1.6 < N2, N3, N4, N5 < 1.7` | **FAIL**; 1.7200, 1.6830, 1.6545, 1.7200 |
| (8) | `1.08 < |r7/r6| < 1.18` | PASS; 1.12254 |
| (9) | `-0.1 < f/r10 < 0.25` | PASS; 0 for the plane r10 |
| (10) | `0.8 < |f/r11| < 1.5`, `r11 < 0` | PASS; 1.30548 |
| (11) | `1.67 < N1, N2 < 1.75` | PASS; 1.7200, 1.7200 |
| (12) | `1.7 < N5, N6 < 1.79` | PASS; 1.7200, 1.7440 |
| (13) | `1.59 < N3, N4 < 1.73` | PASS; 1.6830, 1.6545 |
| (14) | `0.025 < 1/ν3, 1/ν4 < 0.034` | PASS; 0.03115, 0.02950 |

Because recommendation (7) fails, the patent's dependent refinements (3)′ and (4)′ are not applicable to Example 5. The
separate prerequisite set (8)–(14) does pass, so the reduced conditions (1)′, (3)″, (4)″, and (5)′ are applicable and all
four pass. The failure of condition (7) is retained as a property of the published embodiment; no refractive index is
changed to make the recommendation pass.

## Verification Summary

The final `.data.ts` was reloaded by the portable strict-literal parser and traced numerically from its parsed values.
Independent y–q basis tracing and a separately implemented ABCD multiplication agree to floating-point precision. The
implemented fixed state gives:

- EFL `50.01048 mm`.
- Paraxial BFD `36.01017 mm` from the rear vertex, versus the preserved scaled patent image-plane spacing of `36.005 mm`.
- First-to-last optical-vertex track `31.90000 mm`.
- Petzval sum `0.003620264 1/mm`, computed surface by surface as `φ/(n·n′)`.

The BFD difference is a known source-precision discrepancy: it exceeds the literal half-last-digit tolerance of the printed
`L.B.` value but remains well inside the independently propagated rounding envelope of the rounded prescription. The
patent value is therefore preserved rather than "corrected" to the computed paraxial result.

The inferred stop has semi-diameter `8.80050 mm`; through the modeled front group it produces an entrance-pupil diameter
of `25.00524 mm` and hence modeled f/2. This agreement is a calibration to the patent's published f-number, not an
independent measurement of the physical diaphragm.

No clear apertures are published in the patent. The authored semi-diameters are modeled geometry, not production
mechanical dimensions. Portable edge-thickness, actual rim-slope, spherical-domain, and shared-gap checks pass. Exact
spherical tracing also passes for the full on-axis modeled pupil, the current visible off-axis sample at ±13.8°, and the
chief ray at the patent's ±23° half-field. The model does not claim that the complete f/2 pupil is unvignetted at the
23° field edge.

Real LensVisualizer project typechecking, `buildLens()` / `validateLensData()`, runtime glass resolution, Prettier, and
production render diagnostics were not available in this dossier runtime and remain integration-scoped checks. The
portable analysis therefore does not describe those repository-only checks as having passed.

## Sources

1. Yoshinobu Kudo, **US Patent 4,444,473, “Gauss Type Lens System,”** assigned to Minolta Camera Kabushiki Kaisha,
   granted April 24, 1984. Example 5: TABLE 5 on PDF pp. 11–12; FIG. 9 on PDF p. 6; design conditions and explanatory
   text on PDF pp. 8–10. Local dossier copy: [`US4444473.pdf`](./US4444473.pdf).
2. Minolta, **“Minolta Lenses — 512817 — 12.81,”** manufacturer-origin brochure scan.
   <https://www.massimoscottinelweb.com/Immagini%20ridotte%20per%20SITO%20web/Minolta%20Cataloghi%20e%20Pieghevoli%20in%20pdf/Minolta%20Lenses%20-%20512817%20-%2012.81.pdf>
3. Minolta, **“Obiettivi Intercambiabili Minolta — 532822 — 1.84,”** manufacturer-origin lens brochure scan.
   <https://www.massimoscottinelweb.com/Immagini%20ridotte%20per%20SITO%20web/Minolta%20Cataloghi%20e%20Pieghevoli%20in%20pdf/Minolta%20Obiettivi%20-%20532822%20-%201.84.pdf>
4. Minolta, **X-300 instruction manual** (German manufacturer-origin scan), used for Minolta-SR bayonet and 24×36 mm
   format corroboration. <https://www.cameramanuals.org/minolta_pdf/minolta_x-300-german.pdf>
5. SUMITA Optical Glass, **Zemax all-glasses catalog**. <https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf>
6. OHARA Corporation, **S-LAL glass types**. <https://oharacorp.com/glass-type/s-lal/>
7. Nikon / HIKARI, **Optical Glass LAK and LAF catalogs**.
   <https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/lak.html> and
   <https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/laf.html>
8. SCHOTT, **N-LAK10 and N-LAF2 optical-glass data**.
   <https://media.schott.com/api/public/content/2cab82d6dae74f8aac3db5dd16a1cc8d?v=2b1022d6> and
   <https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f4adcbf1>
9. CDGM Glass Co., Ltd., **Optical Glass Database**.
   <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=24&url=database>
10. HOYA GROUP Optics Division, **Data Download / optical-glass catalog index**.
    <https://www.hoya-opticalworld.com/english/datadownload/index.html>
