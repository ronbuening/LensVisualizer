## Patent Reference and Design Identification

**Patent:** US 3,318,653, *Optical Objective of 6 Air-Spaced Lenses with Large Effective Field Angle*  
**Filed:** July 18, 1963  
**Priority:** Germany, September 12, 1962 (Sch 32,015)  
**Granted:** May 9, 1967  
**Inventor:** Karl H. Macher  
**Assignee:** Jos. Schneider & Co., Optische Werke  
**Embodiment analyzed:** the sole representative numerical prescription, designated “Example 1” by the project job card

US 3,318,653 describes a six-singlet wide-angle objective divided into a negative front component I and a positive rear component II. The patent states a normalized overall focal length of 100, relative aperture 1:2.8, back-focal length 103.11, and a field angle of about 63°; the numerical table is printed on patent PDF page 2 and repeated in the single claim on page 3. [1, pp. 2–3]

The production correlation is strong but not conclusive. A Schneider-authored brochure for 24 × 36 mm focal-plane-shutter SLR cameras depicts a CURTAGON 1:2.8/35 with six elements and lists an engraved focal length of 35 mm, an effective focal length of 36.6 mm ±1%, a 37.5 mm *Schnittweite*, 62.5° diagonal field, six elements in six groups, and focusing from infinity to 0.30 m. [2, cover and CURTAGON 1:2.8/35 table row] That brochure does not identify US 3,318,653. Moreover, a 1961 Schneider distributor catalog already described an earlier 35 mm f/2.8 Curtagon as six elements with a 63° field, so focal length, aperture, element count, and field alone do not uniquely prove the patent-to-product link. [3, catalog p. 9]

Accordingly, the data file treats the Curtagon identification as a production correlation rather than manufacturer confirmation of the exact patent formula. The image format is recorded as 135 full-frame from the Schneider 24 × 36 mm brochure, while `lensMounts` is intentionally left unset because the manufacturer source used here does not tie this optical formula to a specific mount variant.

## Optical Architecture

The verified model is a six-element, six-group reversed-telephoto arrangement. The front component is the single negative meniscus L1; the rear component comprises five closely spaced lenses L2–L6 and has positive net power. This matches the architecture stated in the patent, which expressly separates a negative front lens from a positive rear component by the large air space $d_2$. [1, p. 2]

From the final scaled data, component I has a standalone focal length of approximately −49.35 mm, while the sequential L2–L6 rear component has a net focal length of approximately +29.26 mm. These are component powers calculated from the isolated component matrices; they are not a decomposition of each component's in-situ contribution to image formation.

The complete infinity-focus model has a Gaussian EFL of 36.6423 mm and a rear-vertex BFD of 37.7895 mm. Thus BFD/EFL = 1.0313, satisfying the project's explicit retrofocus criterion BFD > EFL. The front-to-rear-vertex track is 35.8021 mm. The patent itself also frames the design around a back-focal length exceeding the overall focal length. [1, pp. 2–3]

No cemented interfaces occur. All twelve refracting surfaces are spherical, and no aspheric or diffractive phase data are present in the patent or the model.

## Element-by-Element Analysis

### L1 — Negative Meniscus

*nd* = 1.46450, νd = 65.79. Glass: FK3 — 464658 coordinate; compatible spectral proxy (supplier unconfirmed). *f* = −49.35 mm.

L1 is the entire negative front component I. The patent describes it as a meniscus whose forward surface is less strongly curved than its rear surface, followed by the large air space $d_2$. [1, p. 2] Its verified isolated negative power is consistent with the system's reversed-telephoto layout, but the model does not assign a unique aberration correction to L1 alone.

### L2 — Biconvex Positive

*nd* = 1.70180, νd = 41.14. Glass: BASF7 — 702411 coordinate; compatible spectral proxy (supplier unconfirmed). *f* = +29.27 mm.

L2 is the first positive lens of rear component II and the strongest positive singlet by isolated power in the modeled prescription. The patent identifies it as biconvex and places it immediately after the large front-to-rear-component separation. [1, p. 2] Its focal length here is the standalone element value in air, not the effective contribution of L2 inside the full rear group.

### L3 — Positive Meniscus

*nd* = 1.61720, νd = 54.04. Glass: K-SSK1 — 617540 coordinate; compatible spectral proxy (supplier unconfirmed). *f* = +54.15 mm.

L3 is the positive meniscus preceding the central negative lens. The patent specifies a more strongly curved forward surface and a less strongly curved rear surface, with the latter facing the air space $d_6$ and the biconcave L4. [1, p. 2] The relative curvature of L3 and L4 is part of one of the patent's explicit design conditions rather than an inferred LensVisualizer optimization.

### L4 — Biconcave Negative

*nd* = 1.78470, νd = 26.10. Glass: SF56A — 785261 coordinate; compatible spectral proxy (supplier unconfirmed). *f* = −16.34 mm.

L4 is the biconcave negative singlet at the center of rear component II. It has the largest-magnitude standalone power of the six elements in the verified model. The patent brackets this negative lens between the L2/L3 and L5/L6 positive pairs and explicitly relates the ratios of the L4 radii to those of L5. [1, pp. 2–3]

### L5 — Biconvex Positive

*nd* = 1.58900, νd = 48.64. Glass: BAFN6 spectral proxy (supplier unconfirmed). *f* = +49.42 mm.

L5 is the biconvex positive lens following L4. The patent uses the L4/L5 curvature relationship as condition (a), and it further notes that the absolute value of L5's rear radius $r_{10}$ exceeds that of L6's front radius $r_{11}$. [1, p. 3] The isolated positive power quoted above should not be read as an independent measure of L5's aberration contribution within the assembled objective.

### L6 — Positive Meniscus

*nd* = 1.72000, νd = 50.31. Glass: LAC10 — 720503 coordinate; compatible spectral proxy (supplier unconfirmed). *f* = +50.54 mm.

L6 is the rear positive meniscus. The patent describes its less strongly curved surface as facing forward and its more strongly curved surface as facing the image side. It also specifies that the refractive index of L6 exceeds that of L5; in the selected prescription the indices are 1.72000 and 1.58900 respectively. [1, pp. 2–3]

## Glass Identification and Selection

The patent supplies only d-line refractive index and Abbe number for each element. It does not identify a glass maker or melt, and it does not publish C-, F-, or g-line indices or partial-dispersion data. The data file therefore preserves the patent's native *nd*/νd coordinates and uses coordinate-class labels rather than claiming historical supplier identity.

| Element | Patent *nd* | Patent νd | Authored glass label | Catalog interpretation |
| --- | ---: | ---: | --- | --- |
| L1 | 1.46450 | 65.79 | FK3 — 464658 coordinate; compatible spectral proxy (supplier unconfirmed) | Exact/near-exact FK3-class coordinates occur in authoritative catalog material; supplier unproven. |
| L2 | 1.70180 | 41.14 | BASF7 — 702411 coordinate; compatible spectral proxy (supplier unconfirmed) | Several current vendor families cluster near the patent coordinate; no unique supplier follows from *nd*/νd. |
| L3 | 1.61720 | 54.04 | K-SSK1 — 617540 coordinate; compatible spectral proxy (supplier unconfirmed) | SUMITA K-SSK1 supplies the compatible runtime curve; the historical supplier remains unconfirmed. |
| L4 | 1.78470 | 26.10 | SF56A — 785261 coordinate; compatible spectral proxy (supplier unconfirmed) | SCHOTT SF56A supplies the compatible runtime curve, but the patent does not name SCHOTT. |
| L5 | 1.58900 | 48.64 | BAFN6 spectral proxy (supplier unconfirmed) | SCHOTT BAFN6 (nd 1.58900 / νd 48.45) supplies a compatible spectral proxy; historical supplier remains unresolved. |
| L6 | 1.72000 | 50.31 | LAC10 — 720503 coordinate; compatible spectral proxy (supplier unconfirmed) | LAK10-family entries occur across multiple vendors; no historical melt is asserted. |

The catalog work used current SCHOTT, OHARA, HOYA, HIKARI, CDGM, and SUMITA material to test coordinate compatibility. [4–10] Those comparisons support supplier-neutral spectral proxies. SCHOTT’s BAFN6 Sellmeier coefficients are now included
in the catalog, so L5 resolves despite the patent’s rounded coordinate code differing from the catalog code. [11] Because the final data does not carry verified `nC`, `nF`, `ng`, or `dPgF` values for these historical elements, no apochromatic or anomalous-partial-dispersion performance claim is made.

## Focus Mechanism

The Schneider product brochure gives a focusing range from infinity to 0.30 m. [2] The patent, however, provides only one infinity-design prescription: it publishes no finite-conjugate spacing state, no movable-group table, and no internal focusing law. The LensVisualizer record therefore uses `NO_INTERNAL_RECONSTRUCTION`; `closeFocusM: 0.3` is product metadata rather than an authored close-focus optical state.

No `var` gaps are present in the final data. Consequently, the analysis does not assign unit focus, inner focus, or floating motion to the prescription. Period literature can establish that Curtagon products were mechanically focusable, but it does not determine how the selected patent's internal spacings behave at 0.30 m.

## Air Spaces and Patent Conditions

The patent treats the air spaces as part of the design logic rather than as arbitrary packaging. In particular, it specifies the large separation $d_2$ between L1 and the positive rear component, calls $d_6$ a strongly dispersive biconvex air space between L3 and L4, and describes the L5–L6 separation as a meniscus-shaped dispersive air space. [1, pp. 2–3]

The verified scaled prescription satisfies the stated numerical relationships:

- $d_2/f_\mathrm{nominal}=0.3768$, within the patent's 0.3–0.4 interval.
- $|r_7/r_8|\,/\,|r_9/r_{10}|=0.9834$, within the 0.5–2 interpretation of condition (a).
- $|r_6|=25.1698$ mm lies between $0.25|r_7|=16.0125$ mm and $0.5|r_7|=32.0250$ mm, satisfying condition (b).
- $|r_{10}|=36.1608$ mm exceeds $|r_{11}|=30.9636$ mm.
- $n_d(L6)=1.72000$ exceeds $n_d(L5)=1.58900$.

The patent's approximately 63° field and 1:2.8 aperture are source statements. The product brochure separately gives 62.5° for the 24 × 36 mm Curtagon. [1, p. 2; 2] Neither source publishes the physical diaphragm position or clear-aperture diameters used in the LensVisualizer model.

## Verification Summary

The patent prescription is normalized to focal length 100. The final model uses a uniform scale factor of 0.366 because the Schneider brochure distinguishes the nominal 35 mm engraving from a manufacturer-stated effective focal length of 36.6 mm ±1%. Every patent radius and axial spacing is scaled by 0.366; refractive indices and Abbe numbers are unchanged. There are no aspheric coefficients to transform.

Using the final parsed data, independent sequential height/reduced-angle tracing and ABCD multiplication both give an infinity-focus EFL of 36.6423 mm. This is 0.0423 mm above the 36.6 mm scale target and remains within the brochure's ±1% tolerance. The model BFD is 37.7895 mm from the rear vertex. The scaled patent BFL is 37.7383 mm; the +0.0512 mm difference is retained and falls within the source-precision rounding envelope established for the rounded patent table.

The patent does not publish an aperture stop. The model inserts one flat `STO` plane at the midpoint of the scaled $d_6$ gap between L3 and L4. Its 7.0302 mm semi-diameter is calibrated so the modeled entrance pupil yields f/2.8. Agreement with f/2.8 is therefore a calibration constraint, not independent evidence for the physical production diaphragm diameter or position.

The patent publishes no semi-diameters. The front element now uses 9.5 mm rims inferred from the local 600-dpi figure, replacing the initial 12.1 mm ray-envelope allowance. A 9.0 mm candidate clips the 31.25° full-field chief ray, while 9.5 mm retains it and the complete axial f/2.8 bundle. Peripheral pupil clipping increases, as expected for the smaller front aperture; full-field illumination is not claimed. The remaining SDs retain the ray-envelope estimates, checked against optical rims while excluding leaders. All elements preserve positive edge thickness and clear inter-element gaps. These are modeled clear apertures, not measured production diameters.

The surface-by-surface Petzval sum of the implemented model, using $\phi/(n n')$ at every refracting surface, is 0.00654578 mm⁻¹, corresponding to a reciprocal magnitude of 152.77 mm. This is a paraxial field-curvature quantity for the modeled prescription, not a direct measurement of the final image surface or corner performance.

## Sources

1. Karl H. Macher, **US 3,318,653**, “Optical Objective of 6 Air-Spaced Lenses with Large Effective Field Angle,” filed July 18, 1963, granted May 9, 1967. Patent drawing on PDF p. 1; description and numerical table on PDF p. 2; conditions, claim, and repeated table on PDF p. 3. Online bibliographic/text view: https://patents.google.com/patent/US3318653A/en
2. Jos. Schneider & Co., Optische Werke, **Schneider Wechsel-Objektive für einäugige Spiegelreflex-Kameras 24 × 36 mm mit Schlitzverschluss**, archival manufacturer brochure scan, CURTAGON 1:2.8/35 optical section and product table. https://allphotolenses.com/public/files/pdfs/25119a765bec1ca171328d90b98c2e84.pdf
3. Burleigh Brooks Inc., **Schneider Lenses Catalog**, vol. 2 (1961), catalog p. 9 / PDF p. 10, period Schneider distributor literature. https://www.pacificrimcamera.com/rl/00896/00896.pdf
4. SCHOTT, **Optical Glass — Inquiry / Classic Glasses**. https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f6ee045d
5. SCHOTT, **N-SF56 datasheet**. https://media.schott.com/api/public/content/1d833344084d4c21852de588600f6bb1?v=f16fd39d
6. HIKARI GLASS CO., LTD., **J-SSK glass types / J-SSK1**. https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-ssk/
7. HIKARI GLASS CO., LTD., **J-LAK glass types / J-LAK10**. https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-lak/
8. HOYA Optics, **Glass Cross Reference Index**. https://www.hoya-opticalworld.com/english/products/crossreference.html
9. CDGM / Chengdu Guangming, **Optical Glass Database**. https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=17&url=database
10. SUMITA OPTICAL GLASS, Inc., **Optical Glass downloads / Zemax catalog**. https://sumita-opt.co.jp/en/download/

11. SCHOTT, **Inquiry Glass datasheet collection**, BAFN6, PDF p. 5. https://www.schott.com/en-dk/products/optical-glass/-/media/project/onex/products/o/optical-glass/downloads/schott-optical-glass-inquiry-glass-collection-datasheets-english-28082019.pdf
