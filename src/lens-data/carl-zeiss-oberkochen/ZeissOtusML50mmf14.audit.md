# ZEISS OTUS ML 50mm f/1.4 — Audit Log

## Source

JP 2026-105585 A, 光学レンズ系 (Optical lens system), Example 1, Tables 1–4 and Figs. 1–2. Inventor: Tatsuya Moriyama; assignee: Cosina Co., Ltd. Filed 16 December 2024; published 26 June 2026. The [J-GLOBAL bibliography](https://jglobal.jst.go.jp/en/detail?JGLOBAL_ID=202603007546980750) agrees with the front page.

Table 1 gives the first-order summary, Table 2 the prescription, Table 3 the infinity and near-focus spacings, and Table 4 the aspheres. Dimensions are millimetres without rescaling. The refractive-index reference is helium d, 587.56 nm.

## Transcription Check

The patent pages at 300 dpi were checked for all 26 surface rows including the stop, all 14 elements' nd/νd pairs, the three aspheres' 30 conic and polynomial terms, and D0/D10/D26 at both printed focus states. No transcription mismatch was found apart from the conflicting S26 base radius within the patent itself. The aspheres use the standard (1 + K) conic form, with K = 0 and terms A4–A20.

Table 2 prints S26 R = −2000 mm; Table 4 prints INFINITY. S26 retains Table 4's plane base and the original polynomial. With the plane, EFL = 50.137 mm, G2 focal length = 67.11 mm and final-element focal length = −140.53 mm, against Table 1's 50.15, 67.14 and −140.15 mm. With −2000 mm these become 49.761, 66.25 and −149.07 mm. Infinity BFD is 18.692 mm with the plane and 18.552 mm with −2000 mm, against 18.69 mm printed.

On the printed image plane, axial d-line RMS spot radius is 9.8 µm with the plane and 54.6 µm with −2000 mm. Full/half-pupil longitudinal spherical aberration is −0.071/−0.016 mm versus −0.266/−0.166 mm. Fig. 2's near-zero d-line curve supports the plane. Table 2 likely repeats Examples 2/3's radius, which those examples print consistently. This interpretation of conflicting tables is not an official patent correction.

Fig. 1 agrees with the element arrangement, shapes and stop position. It is not to scale: its iris and rear-group rims do not provide reliable dimensional replacements. The rear meniscus remains curved through its polynomial despite its plane base; S26 sag is approximately −1.67 mm at height 15 mm.

## First-Order Check

The retained infinity prescription gives EFL 50.137 mm, approximately 0.03% below the stated 50.15 mm; BFD 18.692 mm; paraxial f-number approximately 1.44; iris radius 13.74 mm; half-field 23.1°; and total track 104.64 mm. The printed 18.69 mm last gap is retained without a shift to the smallest spot. Pupil aberration gives real-ray acceptance approximately f/1.51. Near-focus EFL is 49.141 mm.

A check of surface geometry finds no edge-thickness or overlap errors across the five focus positions. The axial aperture is within 3% of the stated f-number, with no limit from a glass rim, failed ray trace or iris. The image circle is sufficient, with no omitted cases. Chief-ray field coverage is 100% at a 1.01 coverage-ratio threshold, reaching 21.65 of 21.65 mm at the corner. The printed near conjugate has image offset −0.003 mm, approximately −0.79 quarter-wave depths, and magnification −0.134. Its object distance is measured from the first surface, separately from object-to-image distance.

At image height 21.63 mm, neither the axial beam nor the chief ray is clipped at infinity or the final focus position. The extreme upper ray cannot be traced: the pupil corresponding to the printed f-number is larger than the chosen iris, and the estimated rims retain peripheral vignetting. Chief-ray coverage does not establish full-pupil transmission.

## Values Not Printed in the Patent

- Clear semi-diameters are estimates.
- Iris radius is derived from the printed design f-number, 1.435; it is not a dimension supplied by Fig. 1.
- The three intermediate focus positions are paraxial solutions; piecewise linear travel between them is inferred rather than a measured cam.
- Near-focus distance 0.49954 m is derived from (394.90 + 104.64)/1000, object to image. The product specification rounds this to 0.50 m.
- The 43.3 mm image-circle entry is the rounded diagonal of a 24×36 mm frame; ZEISS quotes 43 mm for the production lens.
- Glass labels identify catalog equivalents, supplying dispersion beyond nd/νd; production suppliers and melts are unspecified.
- L4 and L7 are inferred APD positions from the optical section and compatible glass properties. The patent explicitly identifies anomalous partial dispersion for L2 and L5.
- Ten diaphragm blades come from the [ZEISS Otus ML series description](https://www.zeiss.com/photonics-and-optics/en/photography/products/lenses-for-mirrorless-system-cameras/otus-ml-lenses.html); the f/1.4–f/16 stop range comes from the [ZEISS 50 mm data sheet](https://www.zeiss.com/content/dam/pno/downloads/photo-lenses/datasheets/otus-ml-lenses/datasheet-zeiss-otus-ml-1450.pdf) and [Cosina specifications](https://www.cosina.co.jp/zeiss/otus-ml/otus-ml-1-4-50/).

## Product Identification

Example 1 likely describes the ZEISS Otus ML 50mm f/1.4. Its 14 elements in 11 groups, two aspherical elements, four APD candidates and 499.54 mm near conjugate at approximately 1:7.45 fit the production lens. Example 2 has 15 elements in 12 groups; Example 3 has three aspherical elements. ZEISS calls the production design a Distagon.

[Cosina](https://www.cosina.co.jp/zeiss/otus-ml/otus-ml-1-4-50/) and [ZEISS](https://www.zeiss.com/content/dam/pno/downloads/photo-lenses/datasheets/otus-ml-lenses/datasheet-zeiss-otus-ml-1450.pdf) specify full-frame coverage, 50 mm, f/1.4, 0.50 m minimum focus, 1:7.3 maximum magnification, and Sony E, Nikon Z and Canon RF mounts. [CameraLabs](https://www.cameralabs.com/zeiss-otus-ml-50mm-f1-4-review/2/) measured approximately 1:7.5. The patent's 46.2° field lies between Cosina's 45.7° and ZEISS's 47°.

[LensTip](https://www.lenstip.com/2210-Carl_Zeiss_Otus_ML_50_mm_f_1.4-lens_specifications.html) and [PetaPixel](https://petapixel.com/2025/02/26/a-closer-look-at-the-zeiss-otus-ml-50mm-f-1-4-and-85mm-f-1-4-lenses-and-their-unique-promises/) report four APD elements. ZEISS's optical-section legend marks APD glass without printing a count. The patent's ¶0038 and ¶0040 establish L2 and L5 as APD; L4 and L7 remain inferred.

[ZEISS announced the lens on 25 February 2025](https://www.zeiss.com/photonics-and-optics/en/home/content/newsroom/news-overview/2025/new-otus-ml.html). Cosina lists availability on 30 May 2025 for E/RF and 30 July 2025 for Z.

## Corrections, 2026-11-20

- The patent-based name and key were replaced by the product name, ZEISS OTUS ML 50mm f/1.4, and its product key. Maker changed from Cosina to Carl Zeiss Oberkochen; patent assignee remains Cosina Co., Ltd. The lens was made visible in the catalog.
- The subtitle's earlier discussion of the source conflict and product resemblance was replaced by the patent, example, assignee and inventor: “JP 2026-105585 A, Example 1 — Cosina / Moriyama”.
- Six explanatory chips were replaced by construction and design specifications. The final chips are “14 ELEMENTS / 11 GROUPS”, “DESIGN f = 50.15 mm”, “DESIGN F/1.44”, “3 ASPHERICAL SURFACES” and “4 APD ELEMENTS”. The aspherical count now uses the common surface-count form; the displayed f-number is rounded while the numerical design value remains 1.435.
- Missing mounts, full-frame format and marketing values were added from Cosina and ZEISS: Sony E, Nikon Z, Canon RF, 50 mm, f/1.4 and 0.50 m minimum focus. The 14/11 construction remains. Design focal length was briefly changed from 50.15 to 50.14 mm, then restored to Table 1's 50.15 mm.
- Element labels L1–L14 became Element 1–Element 14; short optical roles and individual in-air focal lengths were added. L6 was identified as aspherical; L14 changed from plano-concave to the patent's negative-meniscus description. Cemented-pair annotations were added for L7/L8, L9/L10 and L12/L13, spanning S13–S15, S17–S19 and S22–S24. Their in-air focal lengths are −57.01, −577.15 and −53.71 mm.
- APD annotations were added for L2, L4, L5 and L7. L2 and L5 changed from inferred to patent-supported, citing ¶0038 and ¶0040. L4 and L7 remain inferred. The four-element count is attributed to LensTip and PetaPixel; high index alone does not establish APD for L11 or the dense flints.
- A source-conflict entry was added for S26, recording Table 2's −2000 mm and Table 4's plane with first-order and aberration evidence. Its applied value 1e15 denotes the plane; the surface remains `R: "flat"`. The plane, polynomial, other radii, thicknesses, nd/νd, stop position, rims, field and printed image plane were retained.
- Focus descriptions now distinguish printed endpoints, inferred intermediate travel and first-surface distance. The existing G1 and G2 group brackets identify the fixed group and the moving group with iris; their boundaries remain unchanged.
- Ten diaphragm blades were added from ZEISS. The existing design stop sequence and f/16 upper limit agree with the published product range and remain unchanged.
- Technical wording was simplified throughout the three records; the audit was reorganized without removing optical uncertainties.

The earlier two-position linear focus travel reported approximately 0.999 m at t = 0.5 while focusing near 0.879 m. Its worst image error at the displayed distance was −0.458 mm at t = 0.544. Three intermediate positions were added at t = 0.25, 0.50 and 0.75, solving the two gaps to six decimal places while retaining both printed endpoints. Values below are rounded for display.

| t | D10 before (mm) | D10 after (mm) | D26 before (mm) | D26 after (mm) | Final distance (m) |
| --- | ---: | ---: | ---: | ---: | ---: |
| 0 | 7.560 | 7.560 | 18.690 | 18.690 | Infinity |
| 0.25 | 5.845 | 6.169 | 20.405 | 20.081 | 1.998 |
| 0.50 | 4.130 | 4.596 | 22.120 | 21.654 | 0.999 |
| 0.75 | 2.415 | 2.794 | 23.835 | 23.456 | 0.666 |
| 1 | 0.700 | 0.700 | 25.550 | 25.550 | 0.499 |

D10 + D26 remains 26.25 mm: G1 stays fixed, G2 and the iris move 6.86 mm toward the object, and the image plane stays at 104.64 mm. The printed near-focus and finite-conjugate indices changed from 1 to 4; positions 1–3 remain inferred. The worst distance-readout image error is now −0.041 mm at t = 0.878, within 0.05 mm. Each finite control position focuses at its own displayed distance to numerical precision. The final position focuses 394.754 mm before S1, compared with 394.90 mm printed. At the paraxial infinity plane, 0.002 mm behind the printed plane, it focuses at 394.65 mm from S1 with total track 104.642 mm. The printed image plane is retained.

Previously unidentified glasses received the following catalog-equivalent labels. Differences are catalog row minus printed nd/νd; all printed indices and Abbe numbers remain unchanged.

| Element(s) | Glass / catalog maker | Δnd | Δνd |
| --- | --- | ---: | ---: |
| L1 | S-NBH8 / OHARA | −0.000003 | 0 |
| L2 | S-NPH1 / OHARA | +0.000005 | +0.000817 |
| L3, L10 | S-LAH96 / OHARA | 0 | −0.001308 |
| L4 | J-PSKH8 / Hikari | 0 | 0 |
| L5 | J-KZFH4 / Hikari | +0.000001 | 0 |
| L6 | M-TAFD305 / HOYA | −0.000001878 | +0.004483 |
| L7 | FCD1 / HOYA | 0 | 0 |
| L8, L9, L13 | NBFD29 / HOYA | 0 | 0 |
| L11 | TAFD55 / HOYA | 0 | 0 |
| L12 | S-LAH98 / OHARA | 0 | 0 |
| L14 | L-LAH84 / OHARA | 0 | −0.001497 |

All eleven distinct pairs meet |Δnd| ≤ 0.0001 and |Δνd| ≤ 0.15; the actual maxima are 0.000005 and 0.004483. S-NPH1 also reproduces Table 1's Gr1P ΔPgF of approximately +0.023. Catalog curves replace dispersion estimated from the Abbe number alone, without establishing a production melt or supplier.

After these corrections, infinity EFL is 50.137 mm, BFD 18.692 mm, paraxial f-number approximately 1.44, iris radius 13.74 mm, half-field 23.1° and total track 104.64 mm; near-focus EFL is 49.141 mm. These values are identical before and after the final wording and blade-count changes, including all five focus positions. Surface geometry remains free of edge-thickness and overlap errors, with no axial aperture limit from glass rims.

## Remaining Questions

- Compare the estimated rear-group semi-diameters with Fig. 1 and assess peripheral vignetting; full-pupil transmission remains unestablished.
- Catalog equivalents do not identify production suppliers or melts. L4 and L7 APD positions remain inferred.
- The cited primary sources do not give a numerical blade-curvature value, so blade roundedness is left unspecified.
- The S26 table conflict remains a source inconsistency; the plane has the stronger first-order and aberration evidence.
