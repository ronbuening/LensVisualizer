## Patent Reference and Design Identification

**Patent:** JPS55-21005A
**Application:** 昭53-92064
**Filed:** 1978-07-29
**Published:** 1980-02-14
**Inventors:** Tadashi Kojima; Reiko Mao
**Applicant:** Konishiroku Photo Industry Co., Ltd.
**Title:** 広角ズームレンズ ("Wide-angle zoom lens")
**Embodiment analyzed:** Example 1 (`実施例1`), Figure 4; aberration data in Figure 6

The data file models a correlation between Example 1 of JPS55-21005A and the **KONICA ZOOM-HEXANON AR 35–70mm f/3.5**. The patent itself does not name the production lens, so that correspondence is an authorial production correlation rather than a manufacturer statement. The identification is supported by several convergent facts:

1. Example 1 is headed `f = 35.146–69.137, F 3.5`, matching the marketed 35–70 mm constant-f/3.5 class (JPS55-21005A, PDF p. 7).
2. The prescription contains nine air-separated elements in nine groups, matching Konica's Cat. No. 703-172 specification of 9 elements / 9 groups.
3. The patent states that locating the stop between positive `l7` and negative `l8` permits a 0.35 m close-shooting distance; Konica specifies 0.35 m minimum focus from the film plane for Cat. No. 703-172 (JPS55-21005A, PDF p. 8; Konica brochure, Cat. No. 703-172).
4. The patent was filed in 1978 and published in February 1980; the surviving Konica brochure for Cat. No. 703-172 is copyright 1980.

The manufacturer's rounded product specifications are retained separately from the design values. Konica gives 35–70 mm, f/3.5–f/22, 63°–34° angle of view, and 0.35 m minimum focus from the film plane. The catalog metadata records the production lens in the Konica AR / 135-format SLR system (`konica-ar`, `135-full-frame`). The final data file instead stores the computed wide/tele design EFLs as 35.143850 mm and 69.129631 mm while using the patent's three published zoom control points of 35.146, 50.160, and 69.137 mm.

One source defect requires explicit treatment. The `r12` row in the Example 1 table is visibly overstruck in the scan. The final prescription uses **+149.473 mm**, which is consistent with the visible correction and with independent closure against all three published EFL/BFD pairs. The apparent alternative +142.473 mm does not close the same targets. No other prescription value is altered from the selected embodiment.

No dimensional scaling is applied. Example 1 is entirely spherical, so there are no aspheric coefficients or coefficient transformations. No sensor cover plate, filter, inactive dummy plane, cement layer, or mechanical part is present in the modeled prescription; consequently no omitted-plate air-equivalent correction is required.

## Optical Architecture

Example 1 is a two-component **negative-positive zoom**. The front component contains L1–L4 and has a computed net EFL of **−55.243861 mm**; the rear component contains L5–L9 and has a computed net EFL of **+43.170231 mm**. These are component powers in their isolated air-to-air component definitions, not sums of the individual element focal lengths. All nine elements are air-separated, so there is no cemented-doublet or cemented-triplet net power to report.

The front component combines a weak positive L1, two negative elements L2 and L3, and a positive L4. The rear component is predominantly positive—L5, L6, and L7—followed by a strong negative L8 and a final positive L9. The patent explicitly constrains the relative powers, curvatures, and internal spacings of these two components through sixteen inequalities; the selected Example 1 satisfies all sixteen.

Zooming is accomplished by axial motion of both components while the image plane remains fixed. The published inter-component gap `d8` contracts from **33.862 mm** at 35.146 mm to **13.550 mm** at 50.160 mm and **0.500 mm** at 69.137 mm, while the published back focal distance increases from **46.290 mm** to **58.024 mm** and **72.854 mm**. In image-plane-fixed coordinates, the rear component moves monotonically toward the object side. The front component first moves imageward and then reverses slightly between the middle and telephoto stations; the independently derived reversal is 1.780 mm.

At all three defined zoom stations the computed back focal distance is greater than the computed EFL. Under the project's stated criterion, the prescription therefore qualifies as **retrofocus** across the modeled zoom range. It does not meet the project's telephoto criterion based on total track divided by EFL.

The aperture stop is a source fact only in location class: Figure 4 shows `S` in the 5.50 mm `d14` air gap between the rear surface of L7 and the front surface of L8 (JPS55-21005A, PDF p. 10). The patent does not publish a numerical split of that gap or a stop diameter. The data model therefore uses a disclosed neutral midpoint assumption, 2.75 mm from `r14` to `STO` and 2.75 mm from `STO` to `r15`; the total published `d14 = 5.50 mm` remains unchanged.

## Element-by-Element Analysis

The focal lengths below are independently recomputed **standalone air-to-air thick-element EFLs** from the final surface arrays. They describe the isolated elements and should not be confused with each element's in-situ contribution to a component or with the component EFLs quoted above.

### L1 — Plano-Convex Positive

`nd = 1.62004, νd = 36.3. Glass: E-F2 coefficient proxy (patent 620363; production supplier unspecified). f = +277.460 mm.`

L1 is a weak positive front element relative to the negative front component as a whole. The patent explicitly constrains its standalone focal length through `3|f1| < f1F < 6|f1|`; Example 1 gives the published `f1F = +277.459 mm`, and the final surface array independently gives +277.459519 mm. Its moderate Abbe number is also directly constrained by the patent through `30 < ν1 < 45`.

Functionally, L1 provides positive power ahead of the much stronger negative L2/L3 pair. Its weak standalone power allows the front component to remain net negative without placing the entire negative burden on the first optical surface.

### L2 — Negative Meniscus

`nd = 1.77250, νd = 49.6. Glass: J-LASF016 coefficient proxy (patent 773496; production supplier unspecified). f = −42.617 mm.`

L2 is the strongest negative element in the front component by standalone EFL. Its high refractive index permits substantial negative bending without an equally extreme Abbe number. The patent separately requires the L2 index to exceed 1.70, a condition satisfied by the Example 1 value 1.77250.

Together with L3, L2 establishes the dominant negative power that makes the L1–L4 component negative. Because L2 and L3 are separated by air, their combined in-situ behavior depends on the intervening spacing and cannot be represented by simply adding their surface or thin-lens powers.

### L3 — Biconcave Negative

`nd = 1.77250, νd = 49.6. Glass: J-LASF016 coefficient proxy (patent 773496; production supplier unspecified). f = −75.456 mm.`

L3 uses the same `nd/νd` coordinate class as L2 but at lower standalone negative power. The patent again requires the corresponding high-index glass to exceed `n = 1.70`. The biconcave shape makes L3 a second negative contributor behind L2 while preserving an air-separated degree of freedom between the two negative elements.

The L2/L3 pair should therefore be read as two separately spaced negative corrections within the front component, not as a cemented achromat or a single compound lens.

### L4 — Positive Meniscus

`nd = 1.62004, νd = 36.3. Glass: E-F2 coefficient proxy (patent 620363; production supplier unspecified). f = +79.608 mm.`

L4 returns positive power at the rear of the front component. Its rear surface is the final optical boundary before the zoom-variable `d8` gap, so its curvature participates directly in the ray state delivered to the rear component as `d8` collapses through the zoom range.

The patent constrains the normalized curvature of L4's front surface (`r7/|f1|`), and Example 1 lies inside that interval. In the complete L1–L4 assembly, L4 partly offsets L2/L3 while the component remains net negative at −55.243861 mm.

### L5 — Biconvex Positive

`nd = 1.69680, νd = 55.5. Glass: J-LAK14 coefficient proxy (patent 697555; production supplier unspecified). f = +107.674 mm.`

L5 is the first positive element of the rear component. It receives the strongly zoom-dependent beam emerging across `d8` from L4 and begins the positive relay that forms the fixed image plane.

The patent constrains `r9/f2` between 2 and 3; Example 1 satisfies that condition. The relatively high index and moderate-to-high Abbe number distinguish L5 from the lower-Abbe positive glasses used at L1, L4, and L9.

### L6 — Positive Meniscus

`nd = 1.56883, νd = 56.2. Glass: BAC4 coefficient proxy (patent 569562; production supplier unspecified). f = +93.515 mm.`

L6 adds positive power in the middle of the rear component and uses a lower-index, moderate-dispersion crown-class coordinate. Its two surfaces are separated from both neighboring elements by air, giving the rear component additional bending and spacing freedom rather than cemented correction.

The patent specifically constrains the normalized curvature `r11/f2`, which places L6 within the prescribed geometry for the positive rear component.

### L7 — Positive Meniscus

`nd = 1.51633, νd = 64.1. Glass: S-BSL7 coefficient proxy (patent 516641; production supplier unspecified). f = +55.986 mm.`

L7 is the strongest positive standalone element among L5–L7 and has the highest Abbe number in the prescription. It sits immediately before the aperture-stop gap. The patent also constrains `r13/f2`, and the Example 1 value satisfies the stated interval.

Its position is architecturally important because the patent locates the diaphragm between L7 and L8. The source connects this stop placement with the design's stated 0.35 m close-shooting capability, although it does not publish the finite-focus lens spacings needed to reconstruct that state.

### L8 — Biconcave Negative

`nd = 1.80518, νd = 25.4. Glass: S-TIH6 coefficient proxy (patent 805254; production supplier unspecified). f = −22.350 mm.`

L8 is the strongest negative standalone element in the entire prescription and uses the highest index and lowest Abbe number of the nine elements. It follows the aperture stop and sharply counteracts the preceding positive sequence L5–L7 before the final positive L9.

This combination of strong negative power and high dispersion gives L8 a distinct role in the rear component's power and chromatic balance. The available source data support that first-order interpretation through `nd` and `νd`; they do **not** support any claim of anomalous partial dispersion or apochromatic correction.

### L9 — Biconvex Positive

`nd = 1.62004, νd = 36.3. Glass: E-F2 coefficient proxy (patent 620363; production supplier unspecified). f = +42.972 mm.`

L9 is the final and strongest positive standalone element in the rear component. It restores positive power after L8 and delivers the beam to the published back focal distance. Because its rear surface is the last refracting surface, its curvature also directly affects the relationship between the rear component and the fixed image plane.

L9 reuses the same 1.62004 / 36.3 coordinate class as L1 and L4. Its function is nevertheless different because it operates at the image-side end of the positive rear component rather than within the negative front component.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number; it names no glass maker and gives no per-element `nC`, `nF`, `ng`, `PgF`, or `dPgF`. The six distinct `nd/νd` pairs were checked against authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalogs. The data file names compatible coefficient curves for spectral tracing while explicitly leaving the historical production supplier unspecified.

| Data class | `nd` | `νd` | Elements | Interpretation |
|---|---:|---:|---|---|
| E-F2 proxy (`620363`) | 1.62004 | 36.3 | L1, L4, L9 | Moderate-index, moderate/high-dispersion positive glass |
| J-LASF016 proxy (`773496`) | 1.77250 | 49.6 | L2, L3 | High-index negative-element glass |
| J-LAK14 proxy (`697555`) | 1.69680 | 55.5 | L5 | High-index positive crown-class glass |
| BAC4 proxy (`569562`) | 1.56883 | 56.2 | L6 | Moderate-index positive crown-class glass |
| S-BSL7 proxy (`516641`) | 1.51633 | 64.1 | L7 | Low-index, relatively low-dispersion positive glass |
| S-TIH6 proxy (`805254`) | 1.80518 | 25.4 | L8 | Very high-index, high-dispersion negative glass |

The palette spans `νd = 25.4` to `64.1`, providing substantial first-order dispersion leverage. In particular, low-dispersion positive L7 is followed by high-dispersion negative L8. That pairing is consistent with ordinary chromatic balancing in the rear component, but the absence of line-index or partial-dispersion data prevents a defensible claim about secondary-spectrum correction, anomalous dispersion, or APO behavior.

## Focus Mechanism

The final data file deliberately uses **`NO_INTERNAL_RECONSTRUCTION`**. The selected patent example publishes zoom-state values for `d8` and back focus at infinity, but it does not publish a finite-object prescription, a moving-focus-group trajectory, magnification table, or internal focus travel. Consequently the optical model contains no invented close-focus state: at every zoom station the `var` infinity and close-focus values are identical.

Two source facts are retained without turning them into an unsupported optical reconstruction. First, the patent states that placing the stop between L7 and L8 permits a shortest shooting distance of 0.35 m. Second, Konica's Cat. No. 703-172 brochure specifies minimum focus as 1.2 ft (0.35 m) **from the film plane** and describes one-touch zoom/focus operation. Neither source identifies a unique internal group motion at that distance.

Accordingly, `closeFocusM: 0.35` is product metadata and a source anchor, not a modeled finite-conjugate ray-trace state. The analysis does not characterize the production lens as unit focus, inner focus, or floating focus because the supplied sources do not establish which optical elements move during focusing.

## Aperture Stop and Clear-Aperture Model

The source establishes only that stop `S` lies inside `d14` between L7 and L8; Figure 4 supplies the location class but no numerical split. The model therefore uses a neutral 2.75 mm / 2.75 mm midpoint assumption rather than treating the schematic as a dimensioned stop position. At the wide station the authored `STO.sd` is **7.655192 mm**. This is the paraxial physical-stop semi-diameter required by the modeled f/3.5 entrance pupil at the assumed stop plane. Repeating the same Gaussian pupil calculation at the published middle and telephoto zoom stations gives **9.143736 mm** and **11.024933 mm**. These are LensVisualizer model quantities derived from `nominalFno`, not claims about the production diaphragm's mechanical blade radius.

The patent supplies no surface semi-diameter table. All non-stop `sd` values in the data file are therefore modeled clear apertures derived from the verified marginal/chief-ray envelopes, the `Y = 21.6 mm` field anchor in Figure 6, the Figure 4 optical section, and the current geometric validity constraints. A 600-dpi rim comparison reduced L4 from 18.0/17.5 mm to 14.5/14.0 mm, L5 from 15.0 mm to 12.5 mm, and L6 from 15.2/15.0 mm to 11.5 mm while enlarging L8 from 11.8/11.0 mm to 12.5/12.0 mm. L3's larger drawn outline was not copied: 18.0 mm produces cross-gap overlap, so its geometry-valid 16.0 mm rim is retained. Independent checks on the final values find positive edge thickness for every element, acceptable spherical rim slopes, no prohibited shared-gap intrusion at the three defined zoom states, and image-circle coverage. These checks validate the authored model geometry; they do not convert the inferred semi-diameters into patent-published dimensions.

## Conditional Expressions

JPS55-21005A defines sixteen conditions for the disclosed zoom architecture. The values below are evaluated from the Example 1 source quantities rather than from rounded marketing specifications. Every condition is satisfied.

| No. | Normalized quantity | Example 1 value | Required range | Result |
|---:|---|---:|---|---|
| 1 | `|f1| / fw` | 1.571786 | 1.45–1.65 | Satisfied |
| 2 | `f2 / |f1|` | 0.781507 | 0.75–0.85 | Satisfied |
| 3 | `f1F / |f1|` | 5.022610 | 3–6 | Satisfied |
| 4 | `ν1` | 36.3 | 30–45 | Satisfied |
| 5 | `r1 / |f1|` | 3.114225 | 2–4 | Satisfied |
| 6 | `r3 / |f1|` | 1.488433 | 1–5 | Satisfied |
| 7 | `r7 / |f1|` | 0.751258 | 0.65–0.85 | Satisfied |
| 8 | `r11 / f2` | 0.917562 | 0.80–0.95 | Satisfied |
| 9 | `d4 / |f1|` | 0.137576 | 0.08–0.15 | Satisfied |
| 10 | `d6 / |f1|` | 0.099562 | 0.08–0.15 | Satisfied |
| 11 | `d14 / f2` | 0.127397 | 0.10–0.18 | Satisfied |
| 12 | `n2` | 1.77250 | > 1.70 | Satisfied |
| 13 | `n3` | 1.77250 | > 1.70 | Satisfied |
| 14 | `r9 / f2` | 2.329380 | 2–3 | Satisfied |
| 15 | `r13 / f2` | 0.525155 | 0.45–0.60 | Satisfied |
| 16 | `r16 / f2` | 0.440957 | 0.40–0.50 | Satisfied |

These conditions describe the intended power distribution, glass-index limits, curvatures, and internal spacings of the negative-positive zoom. Their satisfaction is a consistency check on Example 1; it is not a separate production specification.

## Verification Summary

The final TypeScript arrays were independently retraced with sequential reduced-angle `y–ν` propagation and a separate ABCD matrix calculation. The two methods agree to machine precision at the three defined zoom stations. The residuals below are relative to the patent's published focal lengths and back focal distances:

| State | Patent EFL (mm) | Computed EFL (mm) | Patent BFD (mm) | Computed BFL (mm) |
|---|---:|---:|---:|---:|
| Wide | 35.146 | 35.143850 | 46.290 | 46.285362 |
| Mid | 50.160 | 50.156672 | 58.024 | 58.017109 |
| Tele | 69.137 | 69.129631 | 72.854 | 72.843499 |

The largest absolute EFL residual is **0.00737 mm** and the largest absolute BFD residual is **0.01050 mm**, consistent with the source precision of the tabulated radii, spacings, and refractive indices. The same calculation gives the front-component EFL as −55.243861 mm versus the patent's −55.242 mm, the rear-component EFL as +43.170231 mm versus +43.172 mm, and L1 standalone EFL as +277.459519 mm versus the patent's +277.459 mm.

Petzval was recomputed surface by surface using `φ / (n·n′)`, giving **ΣP = +0.002584866040 mm⁻¹** and a signed reciprocal Petzval radius of **+386.867244 mm**. Because the surface powers do not depend on the zoom spacings, this sum is common to the three defined zoom states.

No finite-focus optical state, asphere, scale transformation, cover/filter correction, or cemented interface is present in the final model. The `r12` source correction, stop split, stop diameter, and surface semi-diameters are disclosed above according to their actual provenance rather than presented as unqualified patent facts.

## Sources and References

1. **JPS55-21005A**, `広角ズームレンズ` (Wide-angle zoom lens), Example 1. Critical scan pages: PDF p. 1 for bibliographic data and architecture; p. 7 for the Example 1 prescription; p. 8 for zoom spacings, back focus, component focal lengths, and the 0.35 m statement; p. 10 for Figures 4 and 6.
2. **Konica / Berkey Marketing Companies**, *Konica 35-70mm f3.5 Automatic Zoom Hexanon Lens*, Cat. No. 703-172, ©1980. Archived manufacturer brochure: <https://www.pacificrimcamera.com/rl/02831/02831.pdf>.
3. **Konica dealer price list**, Cat. No. 703-172, `35-70mm f3.5 Auto UC`. Archived manufacturer/dealer literature: <https://www.pacificrimcamera.com/rl/02833/02833.pdf>.
4. Glass-coordinate audit against authoritative manufacturer catalogs: [OHARA](https://www.ohara-inc.co.jp/en/product/01000/), [HOYA](https://www.hoya-opticalworld.com/english/datadownload/index.html), [HIKARI](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf), [SCHOTT](https://www.us.schott.com/shop/advanced-optics/en/search/), [CDGM](https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database), and [SUMITA](https://www.sumita-opt.co.jp/en/download/).
