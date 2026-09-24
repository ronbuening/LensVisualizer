## Patent Reference and Design Identification

**Patent:** US 3,774,991, *Achromatic Telephoto Objective Lens*
**Application Number:** 209,617
**Priority:** December 25, 1970 — Japan 45/125634
**Filed:** December 20, 1971
**Granted:** November 27, 1973
**Inventor:** Yoshiyuki Shimizu
**Assignee:** Nippon Kogaku K.K.
**Embodiment analyzed:** Example III (Example 3)

The prescription is Example III of US 3,774,991, reproduced in claim 4. The patent gives a focal length of 800.0 mm, a relative aperture of F/8, and a 6° full field. Its numerical table contains five glass elements in four air-separated groups: three separate forward elements and a cemented two-element rear group. The certificate of correction dated July 30, 1974 does not change the Example III prescription. The rendered patent pages also resolve two OCR-prone values: the long separation after the third element is 435.0 mm, and the first glass has νd = 81.5. (US 3,774,991, PDF pp. 11–13; printed pp. 5, 7; Fig. 3A on PDF p. 4.)

The identification with the production NIKON NIKKOR 800mm f/8 ED is a strong research correlation rather than a manufacturer-confirmed patent mapping. Four independent points converge:

1. Example III is exactly an 800 mm F/8 telephoto, matching the marketed focal length and maximum aperture.
2. Nikon’s Tale 50 identifies Yoshiyuki Shimizu as responsible for optical design of the earlier 400/600/800/1200 focusing-unit family. This is design-lineage evidence, not a direct attribution of the 1975 ED 800mm design to Shimizu. [Nikon, *NIKKOR - The Thousand and One Nights No.50*](https://imaging.nikon.com/imaging/information/story/0050/).
3. Nikon states that the 300mm f/4.5 ED, 600mm f/5.6 ED, 800mm f/8 ED, and 1200mm f/11 ED were released in 1975 as a four-lens ED telephoto series. [Nikon, *The Thousand and One Nights No.66*](https://imaging.nikon.com/imaging/information/story/0066/).
4. Nikon's June 1978 technical table lists the 800mm ED, product no. 1294, as 5 elements in 4 groups, matching the physical construction of Example III. (Nikon, *Nikon System Sales Manual*, Section III, Sheet 14, June 1978; manufacturer-origin archival scan: https://device.report/m/fde30a9a8757ca959c08899664023641e13cb6db80a0b116bf276a8289882532.)

The same June 1978 manual also contains a less-specific combined “800mm f8 Auto-Nikkor & ED-Nikkor” descriptive row that gives 5 elements in 5 groups. That row conflicts with the ED-specific technical table's 5/4 entry. The production correlation therefore uses the product-specific 800mm ED row while preserving the 5/5 descriptive entry as a source discrepancy; the patent prescription itself is not altered to resolve the catalog inconsistency.

No Nikon source located for this record explicitly states that US 3,774,991 Example III is the production prescription. The data therefore retains the patent/product relationship as an inference and does not promote it to a source fact.

## Optical Architecture

The design is a five-element, four-group refractive telephoto. The forward section is a widely separated three-component achromat: L1 is positive, L2 negative, and L3 positive. A 435.0 mm air space separates that net-positive forward section from a cemented L4+L5 rear pair. The rear pair is weakly negative as a unit even though its two members have opposite standalone powers. This positive-front/negative-rear power distribution, combined with the long internal separation, produces the shortened physical track expected of a telephoto layout.

The verified d-line model has an effective focal length of 800.094590 mm. From the first lens vertex to the paraxial infinity image, the track is 723.188190 mm, giving TL/EFL = 0.903878. Under the project definition, the lens is therefore telephoto because TL/EFL is below 1. The front section has a standalone group focal length of +669.527 mm; the cemented rear group has a net focal length of -1345.244 mm. These group values describe paraxial group power and are not substitutes for each element's individual power or for its behavior in the assembled system.

All optical surfaces are spherical or plane. The cemented L4/L5 junction is plane and has zero paraxial surface power. No scaling is applied to the patent prescription.

The patent does not publish an image-plane spacing after the last glass surface. The implemented infinity model therefore uses the independently computed back focal distance of 241.888190 mm from r9. The data inserts the modeled aperture stop within that derived rear distance without moving the image plane.

The stop is not source geometry. Nikon documents a behind-the-lens diaphragm in the shared focusing-unit architecture and states that aperture position was constrained by common use of the focusing unit. The data places one flat stop 16.7 mm behind r9 as a deterministic approximation to the lens-head/focusing-unit boundary; that offset comes from comparing the patent's 481.3 mm vertex track with the 498 mm ED lens-head length in Nikon's June 1978 sales material. Mechanical barrel length is not an optical-vertex measurement, so the modeled stop position must not be read as a measured production iris coordinate. The stop semi-diameter is then calibrated to F/8 rather than independently recovered from a source dimension. The one-STO representation follows the AU-1 automatic diaphragm path and limits the modeled aperture controls to f/22; Nikon's 1978 material separately documents a built-in manual lens diaphragm reaching f/64, which is not represented as a second stop.

The catalog record uses the canonical Nikon F mount and a 6x6 image-format classification. This is a modeling classification, not a claim that the Nikon F camera frame itself is 6x6. Nikon states that focusing-unit super-telephoto lens heads could be used with medium-format Bronica cameras by changing the focusing unit, while the patent's 6° full field corresponds paraxially to an 83.862 mm image diameter. The Nikon-system sales specification separately lists a 3° angle of view; the patent design field and the marketed Nikon-system angle are intentionally kept distinct. [Nikon, Tale 50](https://imaging.nikon.com/imaging/information/story/0050/); Nikon System Sales Manual, Section III, Sheets 9 and 14.

## Element-by-Element Analysis

### L1 — Biconvex Positive

**nd = 1.48614, νd = 81.5. Glass: Unmatched (486815 — fluophosphate crown / ED-class; vendor unresolved). f = +365.631 mm.**

L1 is the first positive component of the forward achromat. The patent specifically identifies this glass as fluophosphoric acid glass, placing the very-low-dispersion positive component at the front of the system. Its role in the patent's stated chromatic strategy is collective: it works with the negative L2 and the additional positive L3 rather than acting as an independently characterized apochromatic element. (US 3,774,991, printed pp. 3–5; Example III on printed p. 5.)

The data preserves the patent d-line coordinate rather than assigning a modern supplier glass. No current catalog glass matches both this index and Abbe number within tolerance: the nearest fluophosphate rows (Schott N-FK51A at 1.48656/84.47, OHARA S-FPL51 at 1.49700/81.55) miss by 3 in νd or 0.011 in nd.

### L2 — Biconcave Negative

**nd = 1.61266, νd = 44.3. Glass: J-KZFH1 (HIKARI) — patent antimony flint 613443. f = -278.337 mm.**

L2 is the divergent component between the two positive forward elements. The patent explicitly identifies it as antimony flint glass. Its substantially stronger negative standalone power balances part of the positive power of L1 and L3 while providing the negative-dispersion partner required by the patent's achromatization concept.

Modern HIKARI, OHARA, and SCHOTT catalogs contain close coordinate-equivalent short-flint/KZFS-family candidates, but those matches do not identify the original melt or supplier. The data therefore retains the six-digit coordinate code and patent class rather than resolving L2 to one modern catalog name.

### L3 — Biconvex Positive

**nd = 1.56953, νd = 49.5. Glass: 570495 — barium flint class (supplier unresolved). f = +436.601 mm.**

L3 is the second positive component in the forward group. The patent names its material as barium flint glass. In the patent's chromatic construction, this additional positive component is chosen to work with the low-dispersion positive glass and the negative antimony-flint component so that secondary spectrum can be reduced while the two-wavelength achromatization is retained. (US 3,774,991, printed pp. 2–3.)

CDGM H-BaF2 is a close modern coordinate-equivalent candidate, but the patent does not name CDGM or any other supplier. The data therefore keeps a class-level label.

### L4 — Plano-Concave Negative

**nd = 1.51885, νd = 59.0. Glass: J-K3 (HIKARI) nearest curve — patent 519590 crown, Δnd −0.00062. f = -289.101 mm.**

L4 begins the cemented rear group. It is negative as a standalone element, with a curved entrance surface and a plane cemented rear surface. The patent does not assign a glass class to this element. The data keeps the source coordinate and traces it on the nearest catalog crown curve, Hikari J-K3 (1.51823 / 58.82), with the 6.2e-4 nd residual stated in the label.

Because L4 is cemented directly to L5, its standalone focal length does not describe the rear group's net behavior. The complete L4+L5 pair is only weakly negative, with a verified paraxial group focal length of about -1345.244 mm.

### L5 — Plano-Convex Positive, Cemented to L4

**nd = 1.62399, νd = 47.0. Glass: 624470 — BaF8-class / barium-flint coordinate (supplier unresolved). f = +373.836 mm.**

L5 is the positive member of the cemented rear pair. Its front surface is the plane cemented interface shared with L4; its rear surface returns the ray bundle to air. The six-digit coordinate is consistent with historical BaF8-class catalog families, including a matching rounded HIKARI code, but that correspondence does not establish supplier identity.

Taken together, L4 and L5 form the weak negative rear group used in the complete telephoto system. The analysis therefore distinguishes the negative standalone power of L4, the positive standalone power of L5, and the negative net power of the cemented pair.

## Glass Identification and Selection

| Element | Patent / data coordinate | Data glass description | Source status |
|---|---:|---|---|
| L1 | nd 1.48614 / νd 81.5 | Unmatched (486815 — fluophosphate crown / ED-class) | Patent class named; no catalog curve within tolerance; Abbe fallback |
| L2 | nd 1.61266 / νd 44.3 | J-KZFH1 (HIKARI), antimony-flint (KZF) class | Patent class named; exact nd, νd +0.16 |
| L3 | nd 1.56953 / νd 49.5 | 570495 — barium flint class | Patent class named; code resolves to CDGM H-BaF2 (Δnd +1.7e-4) |
| L4 | nd 1.51885 / νd 59.0 | J-K3 (HIKARI) nearest curve | Patent gives coordinate only; Δnd −6.2e-4, νd −0.18 |
| L5 | nd 1.62399 / νd 47.0 | 624470 — BaF8-class / barium-flint coordinate | Patent gives coordinate only; code resolves to Hikari E-BAF8 (Δnd −2.5e-4) |

The patent's forward-group glass selection is central to the invention. It calls for a positive phosphate/fluophosphate crown component, a negative lanthanum or antimony-flint component, and another positive barium-flint component. The patent explains this as a way to reduce secondary spectrum without relying on crystalline quartzite, using the relative dispersion behavior of three different glass types. (US 3,774,991, printed pp. 1–3.)

The selected numerical example, however, publishes only nd and νd for each element. It does not provide nC, nF, ng, dPgF, or Sellmeier coefficients for the actual melts. For runtime dispersion, L2–L5 trace on the nearest catalog Sellmeier curves listed above, all within 6.2e-4 in nd and 0.2 in νd, and L1 uses the Abbe-number fallback. Those curves are modern equivalents, not the 1970s melts. No quantitative APO classification, anomalous-partial-dispersion value, or three-line secondary-spectrum result is asserted for this model.

Catalog review covered OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA records. Close equivalents exist for L2–L5. Coordinate proximity is treated as class evidence rather than proof of supplier or melt identity: the catalog labels name the dispersion curve used for tracing, and L4's label states its residual. No current catalog glass matches L1's 1.48614 / 81.5 coordinate, so it stays an explicit Unmatched disposition. Because the patent chooses the phosphate crown (L1) and antimony flint (L2) specifically for their partial-dispersion values, the data file marks both as patent-listed anomalous-partial-dispersion elements (`apd: "patent"`); it authors no dPgF, since Example III gives none.

## Focus Mechanism

The production family uses a separate focusing unit. Nikon describes the focusing-unit super-telephoto lens heads as fixed barrels with the focusing and aperture mechanisms built into the focusing unit, and identifies the AU-1 as the new focusing unit released in 1975. Its distance scale provides 400/800 and 600/1200 settings. Nikon also describes this generation as moving the entire lens for focusing rather than using an internal moving optical group. [Nikon, Tale 50](https://imaging.nikon.com/imaging/information/story/0050/); [Nikon, Tale 66](https://imaging.nikon.com/imaging/information/story/0066/).

The model therefore uses `NO_INTERNAL_RECONSTRUCTION`. It contains no variable internal air gap and represents only the patent infinity prescription. `closeFocusM = 20` is product metadata, not a reconstructed finite-object optical state.

Nikon's June 1978 sales manual is internally inconsistent on minimum focus. The descriptive 800mm f/8 Auto-Nikkor & ED-Nikkor entry gives 70.0 ft / 20.0 m, whereas the later product-specific technical table gives 61.0 ft for both 800mm variants. The data uses 20.0 m for the AU-1 product context and preserves the 61.0 ft value as an unresolved manufacturer-source discrepancy. No close-focus spacing, magnification, or aberration state is inferred from either number.

## Chromatic Correction Strategy

The patent is directed specifically to reducing secondary spectrum in long-focus objectives. Its forward group uses three optical components of three glass classes: a low-dispersion fluophosphate positive element, an antimony-flint negative element, and a barium-flint positive element. The patent's argument is that the additional positive component can modify the composite dispersion behavior of the negative portion while maintaining the required achromatization, reducing the residual secondary spectrum compared with conventional two-glass achromats. (US 3,774,991, printed pp. 1–3.)

That source-level design rationale is stronger than what can be numerically demonstrated from Example III alone. The example gives only d-line indices and Abbe numbers, so the final model can verify first-order d-line power and the architecture of the glass pairing but cannot reproduce the patent's c/F/g-line secondary-spectrum curves from original melt data. The analysis therefore describes the patent's chromatic strategy without converting it into an independently verified apochromatic-performance claim.

## Verification Summary

Independent sequential height/reduced-angle tracing and ABCD matrix calculation agree for the final prescription. At the d line, the implemented model gives EFL = 800.094590 mm versus the patent's printed 800.0 mm. The +0.094590 mm residual is comfortably inside the source-precision tolerance derived from the printed radii, spacings, refractive indices, and focal-length precision.

The back focal distance from r9 is 241.888190 mm. The first-surface-to-image track is 723.188190 mm, so TL/EFL = 0.903878 and the telephoto classification is numerically supported. The surface-by-surface Petzval sum, evaluated as φ/(n·n′), is +0.000464202144 mm⁻¹.

The patent gives F/8 but no stop geometry. The modeled stop is 16.7 mm behind r9 with a semi-diameter of 14.074262 mm. Its paraxial entrance pupil diameter is 100.011824 mm, giving f/8.000000 by construction. An exact meridional axial cross-check gives approximately f/8.011. The close match to F/8 is a calibration check, not independent confirmation of the production diaphragm size or position.

The patent publishes no semi-diameters. The modeled values follow the transverse proportions of Fig. 3A: L2 and L3 are drawn at about 0.94 and 0.93 of L1, and the cemented rear pair at about 0.35 of L1. The figure's axial dimensions are schematic (the 435 mm d6 space is drawn broken), so only these ratios are used. L1 is anchored at 56 mm, just outside the 50.0 mm F/8 axial bundle, giving L2 = 52.7 mm, L3 = 52.2 mm, and a 20.0 mm rear pair that still clears the 15.3 mm axial bundle. The modeled semi-diameters pass the edge-thickness, actual rim-slope, and shared-gap intrusion checks. The smallest modeled element edge thickness is 3.339 mm (L4), and the largest rim-slope angle is 10.757° (r1), below the current 64.2° limit. These are geometry checks on the authored model, not manufacturer clear-aperture measurements or production render-diagnostic results.

The 6° patent field corresponds paraxially to an 83.862 mm image diameter at the computed focal length. Because the modeled stop sits behind the lens head, the entrance pupil lies far behind the front group; at the patent's 3° half-field the chief ray would cross r1 near 85 mm, outside the 56 mm front semi-diameter. The model therefore vignettes the outer patent field heavily, and the viewer's traced field is limited by the front group to about 1.76°. This describes the modeled stop and semi-diameter configuration only; it is not a production vignetting measurement.

## Sources

- Yoshiyuki Shimizu, **US 3,774,991, “Achromatic Telephoto Objective Lens,”** filed December 20, 1971; granted November 27, 1973. Example III: PDF p. 11 / printed p. 5; claim 4: PDF p. 12 / printed p. 7; Fig. 3A: PDF p. 4; Certificate of Correction: PDF p. 13.
- Nikon Corporation, **NIKKOR - The Thousand and One Nights No.50, “Focusing Unit and NIKKOR-Q Auto 400mm F4.5.”** https://imaging.nikon.com/imaging/information/story/0050/
- Nikon Corporation, **NIKKOR - The Thousand and One Nights No.66, “The AI Nikkor 400mm f/3.5 IF-ED.”** https://imaging.nikon.com/imaging/information/story/0066/
- Nikon Corporation, **Mount Adapter FTZ II — incompatible lenses and accessories.** https://imaging.nikon.com/imaging/lineup/accessory/camera/ftz_2/index.html
- Nikon, Inc., **Nikon System Sales Manual, Section III, Sheets 9 and 14, June 1978.** Manufacturer-origin archival scan hosted at https://device.report/m/fde30a9a8757ca959c08899664023641e13cb6db80a0b116bf276a8289882532
- OHARA INC., **Optical Glass Catalog / all-products catalog.** https://www.ohara-inc.co.jp/en/product/catalog/
- HOYA GROUP Optics Division, **Optical Glass Data Download.** https://www.hoya-opticalworld.com/english/datadownload/index.html
- SCHOTT, **Optical Glass catalog and N-KZFS4 data.** https://www.schott.com/en-us/products/optical-glass-p1000267
- HIKARI GLASS CO., LTD., **Optical Glass Catalog.** https://www.hikari-g.co.jp/optical_glass/catalog/
- CDGM GLASS CO., LTD., **Optical Glass database / H-BaF2 datasheet.** https://www.cdgmgd.com/webapp/pdf/H-BaF2.pdf
- SUMITA OPTICAL GLASS, Inc., **Optical Glass Data.** https://www.sumita-opt.co.jp/en/download/
