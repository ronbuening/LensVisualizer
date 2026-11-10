## Patent Reference and Design Identification

**Patent:** CN 113126266 A
**Filed:** 2020-01-16
**Published:** 2021-07-16
**Inventors:** Yuanhua Ye; Yongsheng Zhuang; Jiannan Zhuang
**Applicant:** Shenzhen Yongnuo Photographic Equipment Co., Ltd. (深圳市永诺摄影器材股份有限公司)
**Title:** A lens and an imaging device
**Example details:** Example 1 (¶0099–0109, Fig. 1; prescription on page 9), f = 35.02 mm, F/2.00, 2ω = 62.2°; modelled at the printed scale for infinity focus.

The patent example is identified with the Yongnuo YN35mm F2S DF DSM, a full-frame Sony E autofocus prime announced in October 2020. Yongnuo's catalog and the patent agree on a 35 mm focal length, nine elements in eight groups, one ED element in the fourth position, high-index second and fifth elements, an aspherical eighth element and a cemented sixth/seventh pair; the maker's 0.35 m minimum focus and 0.13× magnification match the patent's 0.35 m focus state (0.123× paraxial). The aberration plots carry the design-file name "35F2…". These agreements are construction-level; Yongnuo does not publish a prescription. The later YN35mm F2Z DF DSM for Nikon Z lists the same nine-element, eight-group construction and is not modelled separately.

One printed value contradicts the rest of the document: the main table gives the seventh lens, Gj2, nd = 1.668, the parameter list (¶0120) 1.6668. With 1.6668 the table traces to f = 35.03 mm (stated 35.02 mm) and matches the focus offsets of Figs. 2–4; with 1.668 it traces to 35.14 mm and its axial focus misses the plots by about 0.1 mm. Example 2 reaches its stated 34.91 mm only with 1.6668, so the model carries 1.6668 as a recorded source correction. The parameter list's first radius of 375.0100 mm (table: 375.10 mm) changes f by under 0.001 mm; the table value is kept. The 2025 CN 113126266 B grant reprints both tables unchanged.

## Optical Architecture

The patent divides the nine-element, eight-group lens into a positive first group GR1, a positive second group GR2 and a negative third group GR3 (¶0100). GR1 holds G11–G15 with the stop between G14 and G15 (¶0068); GR2 is the cemented achromatic group G21 (Gj1 and Gj2) followed by the aspherical G22; GR3 is the single negative meniscus G31. The model names each element by the patent's sign (¶0048). The group focal lengths are F1 = +44.60 mm and F3 = −34.42 mm, giving F1/F = 1.27 and F3/F = −0.98 (conditions 1 and 7, ¶0120).

The stop sits 1.70 mm behind G14 and 0.484 mm ahead of G15, 25.47 mm behind the front vertex. The patent's surface numbering skips 15; the model keeps that numbering and labels the aspherical surfaces 16A and 17A.

Behind G31 the patent lists 14.08 mm of air, a 2.5 mm plane-parallel plate GL (nd 1.51633), and 1.00 mm of air to the image, 80.11 mm from the front vertex. ¶0101 describes GL as a filter-coated plate protecting the sensor. The back focus from G31 to the image is 17.58 mm, Bf/F = 0.502 (condition 8).

## Element-by-Element Analysis

### G11 — Negative Meniscus

nd = 1.6398, νd = 34.47. Glass: S-TIM27 (OHARA). f = −33.68 mm.

A meniscus convex to the object, with a shape factor (R1 + R2)/(R1 − R2) = 1.115 inside the patent's condition (2) range of 0.5–3 (¶0063). ¶0065–0067 give its job: enough negative power to offset the positive members of GR1 and limit colour, without lengthening the lens or raising lateral colour.

### G12 — Biconvex Positive

nd = 1.9014, νd = 31.64. Glass: Unmatched (patent nd 1.9014, νd 31.64). f = +44.82 mm.

The first collecting element, close behind G11. Its high index keeps the surface curvatures moderate for its power; Yongnuo's diagram marks it as a high-refractive-index element.

### G13 — Biconcave Negative

nd = 1.74000, νd = 28.25. Glass: FD3 (HOYA). f = −48.59 mm.

A nearly plano-concave flint whose strongly curved front surface faces the object across the 9.69 mm air space behind G12. With G11 it supplies the negative power and high dispersion that balance the crowns of GR1.

### G14 — Positive Meniscus

nd = 1.525, νd = 70.36. Glass: K-PMK30 (Sumita) catalog equivalent — ED (maker). f = +113.69 mm.

The weakest element, a meniscus convex to the object just ahead of the stop. Condition (3) requires 60 ≤ νd4 ≤ 90 because this element sets the correction of axial and lateral colour in GR1; the upper limit avoids the cost of glasses above νd 90 (¶0069–0073). Yongnuo's diagram marks it as the lens's ED element. The printed pair matches Sumita's K-PMK30 catalog row, whose partial dispersion lies slightly above the normal line (ΔPgF about +0.006); the production glass is not named.

### G15 — Biconvex Positive

nd = 1.910826, νd = 35.26. Glass: TAFD35 (HOYA). f = +32.46 mm.

The strongest element of GR1, directly behind the stop. Condition (4) holds its index between 1.8 and 2.0: a higher index pushes lateral colour positive, a lower one leaves barrel distortion under-corrected (¶0075–0078). Yongnuo's diagram marks it as a high-refractive-index element.

### Gj1 — Biconvex Positive

nd = 1.6031, νd = 60.64. Glass: S-BSM14 (OHARA). f = +22.95 mm.

The crown of the achromatic doublet G21 that leads the focusing group. Condition (5) pairs it with the flint Gj2 so that ndj1 ≤ ndj2 and νdj1 ≥ νdj2; ¶0082 credits the pair with reducing spherical aberration as well as colour.

### Gj2 — Biconcave Negative

nd = 1.66680, νd = 33.05. Glass: PBM39 (OHARA). f = −22.55 mm.

The flint of doublet G21, cemented to Gj1. The pair is nearly afocal (f = +245 mm), so GR2's positive power comes mainly from G22 while the doublet corrects colour across the focus travel. The main table prints this element's index as 1.668; the model uses 1.6668 from ¶0120 (see Patent Reference).

### G22 — Positive Meniscus (2× Asph)

nd = 1.79, νd = 45.0. Glass: Unmatched (patent nd 1.79, νd 45.0). f = +42.38 mm.

The power of the focusing group, a meniscus concave to the object with both surfaces aspherical. Condition (6) keeps 1.70 ≤ nd8 ≤ 1.90 and 40 ≤ νd8 ≤ 70: lower values leave spherical aberration uncorrected, higher-index glass is soft and hard to form (¶0083–0086).

### G31 — Negative Meniscus

nd = 1.75520, νd = 27.55. Glass: E-FD4 (HOYA). f = −34.42 mm.

The fixed rear group, a nearly plano-concave meniscus facing the object. Condition (7), −1.5 ≤ F3/F ≤ −0.7, balances the negative spherical aberration it introduces against the positive groups ahead (¶0087–0090); here F3/F = −0.98.

## Glass Identification and Selection

¶0074 defines nd at 587.56 nm and νd = (nd − 1)/(nF − nC) with nF at 486.13 nm and nC at 656.27 nm. The patent prints Abbe numbers to four decimals, and several reproduce catalog values exactly: S-BSM14 (OHARA, νd 60.6411), the discontinued OHARA PBM39 (33.0468) and the obsolete HOYA FD3 (28.2450). The design evidently used OHARA and HOYA catalogs that still listed obsolete glasses; Yongnuo names no production suppliers. G11, G15 and G31 match S-TIM27, TAFD35 and E-FD4 within 0.02 in νd, and the plate GL matches S-BSL7. The PBM39 match also supports the corrected Gj2 index of 1.6668.

G12 (1.9014/31.64) and G22 (1.79/45.0) match no catalog row and trace with Abbe-number dispersion; Example 2 uses different values at both positions (1.85026/32.31 and 1.795/45.29). G14 (1.525/70.36) matches Sumita K-PMK30 (1.52500/70.4), a low-dispersion crown, which fits the ED role the patent and Yongnuo give it; Yongnuo does not name the glass.

## Focus Mechanism

Focusing moves all of GR2 (Gj1, Gj2 and G22) toward the object while GR1 and GR3 stay fixed relative to the image (¶0006, ¶0100, Fig. 1). The patent's focus table (¶0108) gives d11 = 3.17 mm and d17 = 1.71 mm at infinity, and d11 = 0.78 mm and d17 = 4.1 mm at its 0.35 m state, where the object lies 269.495 mm ahead of the first surface. Both gap pairs sum to 4.88 mm, so GR2 travels 2.39 mm as a unit. The object distance plus the 80.11 mm lens-to-image length gives 349.6 mm, the 0.35 m minimum focus measured from the image plane, with a paraxial magnification of 0.123× (Yongnuo: 0.13×).

Moving only three elements, two of them in one cemented unit, is the patent's stated aim: a lighter focusing group for electric focus drive than the multi-element groups of double-Gauss designs (¶0003–0004). The model is infinity-only; the printed 0.35 m state is not modelled.

## Aspherical Surfaces

For both G22 surfaces (patent 16 and 17) the patent prints K and C4–C12 without stating the sag equation. The model uses the standard even-asphere form, z = cr²/(1 + √(1 − (1 + K)c²r²)) + C4r⁴ + … + C12r¹², with the coefficients as printed. With this form and the corrected Gj2 index, the traced d-line spherical aberration follows Fig. 2: about +0.08 mm at 0.5 and +0.11 mm at 0.7 of the pupil, then −0.08 mm at the rim, relative to the paraxial focus. Reading the printed K as 1 + K instead puts the rim ray 0.18 mm behind the paraxial focus, which the plot does not show.

| Surface | K       | A4          | A6          | A8           | A10          | A12          |
| ------- | ------- | ----------- | ----------- | ------------ | ------------ | ------------ |
| 16A     | +6.7832 | −4.15649e−5 | −8.81464e−8 | −1.67464e−9  | +9.87821e−12 | −5.43236e−14 |
| 17A     | +3.0519 | −2.59112e−6 | −7.40221e−8 | −3.90992e−10 | +2.15026e−12 | −1.5344e−14  |

Both surfaces carry large positive conic constants (+6.78 and +3.05) and negative C4 terms. The patent ties G22's index and Abbe range to spherical-aberration correction (¶0086) but assigns no specific aberration to the aspherical terms and does not say how the element is made.

## Model Scope and Limitations

The patent prints no clear apertures or iris diameter. Its aberration plots use an entrance-pupil radius of 8.7555 mm, which at f = 35.02 mm is F/2.00. The model sizes the stop for F/2.00 at the paraxial entrance pupil, giving a stop radius of 11.33 mm. The front group has strong pupil spherical aberration: a real ray entering at the plotted 8.76 mm radius crosses the stop at 12.27 mm. With the paraxial stop, the real axial bundle is therefore about f/2.14.

Semi-diameters are inferred from Fig. 1, which is drawn close to scale; they are not factory dimensions. G11 is drawn as a square blank: its nearly flat front face reaches 14.3 mm from the axis, and its concave rear cap ends at 13.0 mm inside a flat land. G12 is held to 12.35 mm so that its convex front surface stays clear of G11's deeply curved rear surface across the 2.83 mm air space. G14 (12.1 mm) and G15 (13.2 mm) are large enough to pass that real F/2.00 marginal ray, as the figure draws them. The field reaches the 21.6 mm full-frame semi-diagonal at the plotted 31.1° (Fig. 3); geometric transmission there is about 58 %. G22 is the rim that limits the oblique beam at the corner, and the cemented doublet limits it at mid-field.

The image plane stays at the printed distance. The paraxial focus lies 0.095 mm ahead of it, close to the 0.105 mm that Figs. 2 and 3 plot: the designer placed the image at the best focus for the lens's residual spherical aberration. G12 and G22 match no catalog glass, so their colour behaviour rests on Abbe-number estimates; G14 uses the K-PMK30 catalog curve. The traced C, d and F foci keep the spacing Fig. 2 plots to within 0.003 mm: relative to the d line, F lies 0.023 mm nearer the lens on axis and 0.071 mm nearer at the rim, C 0.044 mm and 0.075 mm farther (plotted 0.023, 0.072, 0.043 and 0.073 mm).

## Sources

- [CN 113126266 A](https://patents.google.com/patent/CN113126266A/en), original publication and Example 1.
- [CN 113126266 A, PDF](https://patentimages.storage.googleapis.com/a8/3f/4c/a28ebe404eb97f/CN113126266A.pdf): tables on page 9, conditions on page 11, Figs. 1–5 on pages 13–16.
- [CN 113126266 B](https://patents.google.com/patent/CN113126266B/zh): 2025-06-10 grant; tables unchanged.
- [Yongnuo lens catalog, 2022-03](https://www.szyongnuo.com/upload/image/202402/YONGNUO-Lens-202203.pdf): YN35mm F2S DF DSM, with construction, minimum focus, magnification and an optical diagram marking the ED, HRI and aspherical elements.
- [Yongnuo (HK) product page, YN35mm F2S DF DSM](https://www.th.hkyongnuo.com/products/yn35mm-f2s-df-dsm): 9 elements in 8 groups, 0.35 m, 0.13×, 61.3° diagonal angle of view.
- [PhotoRumors, 2020-10-23](https://photorumors.com/2020/10/23/new-yongnuo-yn35mm-f-2s-df-dsm-lens-for-sony-e-mount/): announcement and specifications.
