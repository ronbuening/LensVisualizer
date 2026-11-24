# NIKON NIKKOR 18.5mm f/2.8 (Nikon COOLPIX A) — Audit Log

## Source

Atsushi Suzuki's _Optical System, Optical Apparatus, and Method for Manufacturing the Optical System_ names Nikon
Corporation as applicant and assignee. The PCT application was filed February 14, 2014, with priority from
JP 2013-029580 and JP 2013-029581 of February 19, 2013. The U.S. grant issued March 13, 2018. Example 1 is given in
Table 1 (PDF page 29), with the sag equation on PDF page 28 and Figures 1–2 on PDF pages 3–4.
[US 9,915,803 B2](https://patents.google.com/patent/US9915803B2/en)

Nikon's announcement dates to March 5, 2013. Nikon documents the lens construction, DX sensor, diaphragm and
autofocus ranges. The Japanese manual shows the f/22 setting on page 51.
[Nikon announcement](https://www.nikon.com/company/news/2013/0305_cpx_01/)
[Nikon specifications](https://nij.nikon.com/products/lineup/compact/a/spec.html)
[Nikon user's manual](https://nij.nikon.com/support/manual/coolpix/AFM_%2810%2902.pdf)

## Transcription Check

All 17 numbered surface rows and nine d-line index and Abbe-number pairs agree with the patent page images.
The rows include stop 5 and the cemented interfaces at surfaces 7 and 10. The patent normalizes the focal length
to 1.00. At ×18.5 scale each linear dimension grows by 18.5, and each aspheric coefficient of order $n$ is divided
by $18.5^{n-1}$. The patent's $\kappa=1$ corresponds to a spherical base with $K=0$.

The two plates are 1.844 and 0.705 mm thick. Their physical air gaps are 13.355 mm before the first plate,
1.482 mm between them and 0.705 mm after the second plate. Table 1 gives one set of spacings at infinity.

## First-Order Check

| Quantity                                           | Table 1 at model scale |                          Model |
| -------------------------------------------------- | ---------------------: | -----------------------------: |
| Effective focal length                             |               18.50 mm |                      18.497 mm |
| Widest f-number                                    |                   2.88 |                           2.88 |
| Image height at 38.9° half-field                   |              14.615 mm |                      14.615 mm |
| Air-equivalent back focus from the front of plate 1 |               3.867 mm |     3.861 mm to paraxial focus |
| Air-equivalent length to the printed plane         |               42.42 mm |    42.42 mm (43.28 mm physical) |
| Last plate to printed image plane                  |               0.705 mm |                       0.705 mm |
| Last plate to paraxial focus                       |                      — |                       0.698 mm |

Table 1's normalized back focus of 0.209 agrees with the air-equivalent distance from the front of plate 1 to the
printed plane. From the last powered surface the air-equivalent distances are 17.223 mm to the printed plane
and 17.216 mm to paraxial focus. The physical paraxial distance from that surface is 18.084 mm. The model uses
the printed plane, 0.007 mm behind paraxial focus.

## Values Not Printed in the Patent

The clear semi-diameters are estimated from Figure 1. The distance from the front vertex to the image sets the
drawing scale, with the stop and plate positions as additional references. The lands at surfaces 2 and 9 extend
beyond the clear curves to 10.05 and 6.29 mm, respectively.

| Surface     | Clear semi-diameter (mm) |
| ----------- | -----------------------: |
| 1           |                    10.05 |
| 2           |                     8.07 |
| 3, 4        |                     5.90 |
| 6, 7        |                     4.59 |
| 8           |                     4.83 |
| 9           |                     5.03 |
| 10, 11      |                     6.29 |
| 12, 13A     |                     6.96 |
| Plates 1, 2 |             14.84, 15.67 |

The entrance pupil for f/2.88 gives a paraxial stop radius of 3.935 mm. The drawing shows about 3.98 mm. The
surfaces stay clear of each other. The rims pass the f/2.88 axial beam and the chief rays at the nominal APS-C
corner (14.175 mm, about 38.0°), the Nikon DX corner (14.145 mm, about 38.0°) and the patent field (14.615 mm,
38.9°). Outer-field vignetting occurs mainly at surfaces 6–8. At 38.0°, the rims transmit 96.8% of the pupil area
before geometric illumination falloff.

## Product Identification

The link to the COOLPIX A is probable at the patent-family level. Suzuki designed the camera's optics and lens
barrel, and the February priority filings precede Nikon's announcement by two weeks. The camera has a fixed
18.5 mm f/2.8 lens with seven elements in five groups and one aspherical element. Examples 1, 3, 5, 6, 7 and 8
share that construction count. Examples 2 and 4 use eight elements in six groups. A public Nikon section drawing
is unavailable, so Example 1 remains one of six candidates. The two modeled plates come from the patent's filter
group. Nikon states that the camera has no optical low-pass filter.
[Designer interview](https://dc.watch.impress.co.jp/docs/news/interview/593500.html)
[Nikon announcement](https://www.nikon.com/company/news/2013/0305_cpx_01/)
[DPReview construction and macro test](https://www.dpreview.com/reviews/1257143006/nikon-coolpix-a/)

## Corrections, 2026-11-24

- The widest modeled aperture increased from f/5.6 to the printed f/2.88. The five-degree half-field limit was
  removed to admit the patent's full 38.9° half-field. The printed stop position, ×18.5 scale and final air gap
  carry through to the full-aperture prescription.
- The original 2.10–2.60 mm lens semi-diameters clipped the axial beam. The Figure 1 sizes in the table admit
  that beam and the field chief rays. At surfaces 2 and 9, the clear radii are measured to the ends of the curves,
  with separate dimensions for the outer lands.
- The focus description and spacings cover the single printed infinity state. `focus.closeFocusM` is 10¹⁵ m,
  which stands for infinity. The 0.50 m normal autofocus limit describes the camera and is measured from the
  front lens surface, as is the 0.10 m macro limit now recorded for the product. DPReview measured 0.20×
  magnification in macro mode. [Nikon specifications](https://nij.nikon.com/products/lineup/compact/a/spec.html)
  [DPReview macro test](https://www.dpreview.com/reviews/1257143006/nikon-coolpix-a/)
- The lens entry pairs the COOLPIX A with Example 1 from the probable patent family. The fixed-lens camera and
  APS-C classifications follow Nikon's specifications. The marked 18.5 mm f/2.8 and construction of seven
  elements in five groups agree with Nikon's specifications. The seven-blade iris and full stops from f/2.8
  to f/22 describe the camera. The patent's 29.23 mm field diameter exceeds the 28.29 mm DX diagonal.
  [Nikon announcement](https://www.nikon.com/company/news/2013/0305_cpx_01/)
  [Nikon specifications](https://nij.nikon.com/products/lineup/compact/a/spec.html)
  [Nikon user's manual](https://nij.nikon.com/support/manual/coolpix/AFM_%2810%2902.pdf)
- The patent designation now reads US 9,915,803 B2. The lens labels follow the patent's L1–L7 designations,
  with calculated in-air focal lengths and brackets for the two cemented pairs at surfaces 6–8 and 9–11.

Catalog equivalents replace unidentified glass labels where their optical constants agree closely with Table 1.
The table gives catalog minus patent values. L1 and L7 retain the printed constants and use dispersion estimated
from the Abbe number.

| Position           | Catalog equivalent |        Δnd |      Δνd |
| ------------------ | ------------------ | ---------: | -------: |
| L2                 | J-LASF016 (Hikari)  | +1.7 × 10⁻⁸ | +0.0002 |
| L3                 | J-LASF08A (Hikari)  | +2.5 × 10⁻⁸ |   +0.029 |
| L4, L5             | S-TIM35 (Ohara)     | −3.2 × 10⁻⁶ |   −0.002 |
| L6                 | J-LASKH2 (Hikari)   | +1.5 × 10⁻⁸ |   +0.006 |
| Both filter plates | BSC7 (Hoya)         | −1.8 × 10⁻⁶ |   −0.002 |

The finished model gives 18.497 mm effective focal length at f/2.88, with a 3.935 mm iris radius and 0.698 mm
paraxial back focus from the last plate.

## Remaining Questions

The production cross-section, focusing group and travel, degree of iris rounding and composition of the sensor
stack remain undocumented. L1 has no matching Hikari, Ohara or Hoya entry. Schott N-BALF4 lies near its printed
coordinates. L7 has no matching catalog entry. Exact clear apertures and iris diameter remain unknown because
Table 1 gives no rim or stop diameters.
