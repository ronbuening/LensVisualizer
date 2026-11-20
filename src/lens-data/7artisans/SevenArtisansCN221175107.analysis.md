# 7ARTISANS 40mm f/5.6 (CN 221175107 U Design)

## Patent Reference and Design Identification

**Patent:** [CN 221175107 U](https://patents.google.com/patent/CN221175107U/en), _A 40 mm F5.6 full-frame lens_

**Inventors:** Changjia Liu (刘昌家)

**Assignee:** Shenzhen 7Artisans Photoelectric Technology Co., Ltd. (深圳市七工匠光电科技有限公司)

**Filed:** 14 December 2023

**Published:** 18 June 2024 (utility-model grant)

**Example details:** Sole example, prescription on PDF p. 6; dimensions in millimetres without scaling.

The patent title and paragraph 0041 identify a full-frame design with nominal focal length 40 mm and aperture f/5.6. These are design specifications; no production mount or minimum focusing distance is established. No 7Artisans product with this prescription is documented; the AstrHori 40mm f/5.6 shares the focal length, aperture and seven-element, five-group construction but is a different company's earlier lens. Its [January 2022 announcement](https://photorumors.com/2022/01/18/another-new-rockstar-lens-40mm-f-5-6-lens-for-leica-m-mount-not-for-e-mount/) predates this filing by about 23 months; the [AstrHori product listing](https://www.stkb.jp/shopdetail/000000002008/) supplies the shared construction count.

## Optical Architecture

Seven spherical glass elements form five groups: a positive front meniscus, a negative cemented pair, a positive cemented pair, a positive rear meniscus and a negative final meniscus. The cemented pairs are L2–L3 and L4–L5, with combined focal lengths of approximately −30.57 mm and +22.37 mm. The separated rear menisci provide additional bending freedom.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.75500, νd = 52.32. Glass: H-LaK53B (CDGM). In-air f = +59.84 mm. This positive singlet precedes the inferred iris.

### L2–L3 — First Cemented Pair

L2: nd = 1.49700, νd = 81.60. Glass named by the patent: FCD1. In-air f = +15.83 mm. L3: nd = 1.62005, νd = 36.35. Glass: H-F4 (CDGM). In-air f = −10.20 mm.

The low-dispersion positive member and more dispersive biconcave member share S4. The pair has negative net power despite the positive front member.

### L4–L5 — Second Cemented Pair

L4: nd = 2.00330, νd = 28.32. Glass: H-ZLaF92 (CDGM). In-air f = +8.33 mm. L5: nd = 1.72825, νd = 28.32. Glass: H-ZF4AGT (CDGM). In-air f = −12.04 mm.

The high-index biconvex element and biconcave partner share S7. Their equal Abbe numbers do not establish an achromatic doublet; this pair supplies positive net power.

### L6 — Positive Meniscus

nd = 2.00330, νd = 28.32. Glass: H-ZLaF92 (CDGM). In-air f = +27.21 mm. The claims call L6 negative, but R = −60/−19.19 mm and its centre thickness give positive power; Fig. 1 also draws a thicker centre.

### L7 — Negative Meniscus

nd = 1.80518, νd = 25.46. Glass: H-ZF7LAGT (CDGM). In-air f = −27.09 mm. This negative singlet follows L6 and is the last optical element.

## Glass Identification and Selection

Claim 9 and paragraph 0036 name the materials. The model uses their catalog indices and Abbe numbers in place of the rounded table entries. CDGM gives [H-LaK53B as 1.75500/52.32](https://www.cdgmgd.com/webapp/pdf/H-LaK53B.pdf), [H-F4 as 1.62005/36.35](https://www.cdgmgd.com/webapp/pdf/H-F4.pdf), [H-ZLaF92 as 2.00330/28.32](https://www.cdgmgd.com/webapp/pdf/H-ZLaF92.pdf), and [H-ZF4AGT/H-ZF7LAGT as 1.72825/28.32 and 1.80518/25.46](https://www.cdgmgd.com/go.htm?k=High_Transmittance_Optical_Glass&url=goods). In particular, L4 and L6 replace the printed index 2 with 2.00330.

Four CDGM elements (L1, L3, L4 and L6), representing three distinct patent-named glasses, have no published dispersion data; colour is approximated from nd/νd. L5 uses the H-ZF4A (CDGM) dispersion curve and L7 the H-ZF7LA (CDGM) curve, which have the same constants as the patent-named high-transmittance grades H-ZF4AGT and H-ZF7LAGT. FCD1 uses Hoya's 1.49700/81.61 catalog curve, differing from the printed pair by Δnd = 0 and Δνd = +0.01. That curve is a spectral proxy: the patent calls the glass domestic and does not establish Hoya supply. No apochromatic performance is established by these data.

## Focus, Stop and Image Plane

Only infinity focus is modeled; the patent supplies no finite-focus spacings. The iris lies halfway through the 3.13 mm L1–L2 gap, 4.00 mm behind S1. This inferred position is supported by the near-zero distortion, but the drawing does not dimension the stop. The model uses a circular iris; its f/5.6–16 range is a display choice, since the patent specifies neither a stop range nor diaphragm blades.

The last air gap is the computed d-line paraxial BFD, 23.51 mm. The patent prints no image distance. The resulting EFL is 39.84 mm and total track is 51.00 mm. The modeled aperture follows the stated f/5.6; Fig. 5's 3.50 mm entrance-pupil radius instead implies f/5.69 at this EFL.

## Field Performance and Model Limits

At the patent's 26.6° half-field, the chief ray reaches 19.96 mm image height with −0.00385% distortion, close to the plotted 20 mm and 0.0024%. The field curves are less closely reproduced: calculated tangential and sagittal shifts are −0.347 and −0.210 mm relative to paraxial focus, whereas the patent's plotted range is approximately −0.1 to +0.2 mm. Fig. 5 places its image plane about 0.08–0.14 mm inside paraxial focus, so the reference planes differ.

The clear radii are estimated from Fig. 1, whose glass thicknesses and surface sags fix its scale but whose air gaps are not drawn to scale. L1's rear curve ends at 5.3 mm and L7's front curve at 7.7 mm; each continues as a flat land to the element's edge, as drawn. The figure draws L5 and L6 at about 8.2 mm, but with the printed 0.94 mm gap their facing surfaces would meet near 7.45 mm, so both stop at 7.3 mm. Wide open, geometric transmission is 94.5% at 25.7° and 78.3% at the 28.5° full-frame corner, where the corner chief ray passes and the rear rims trim the outer part of the beam.

The Zemax footers identify “HPF40-III.ZMX” and “U.S.Patent 4143944” as a starting design; they do not identify a production lens.

## Sources

- [Original patent PDF](https://patentimages.storage.googleapis.com/a8/c9/ad/0a67407ffcaec7/CN221175107U.pdf): title-page attribution and dates, claim 9, paragraphs 0035–0041, prescription on p. 6, Figs. 1–6.
- CDGM material sheets and product table linked above: named-glass coordinates.
- AstrHori announcement and distributor listing linked above: chronology and shared specifications only.
