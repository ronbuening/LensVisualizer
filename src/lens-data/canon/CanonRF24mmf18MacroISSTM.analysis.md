## Patent Reference and Design Identification

**Patent:** [US 12066598 B2](https://patents.google.com/patent/US12066598B2/en)
**Filed:** February 9, 2022
**Granted:** August 20, 2024
**Inventor:** Yuki Shinzato
**Assignee:** Canon Inc. (printed as Canon Kabushiki Kaisha)
**Title:** Optical system, lens apparatus, and image capturing apparatus
**Example details:** Numerical table on PDF page 23, columns 13–14; optical section Figure 5 and aberrations Figure 6.

The association with Canon RF 24mm f/1.8 Macro IS STM is inferred, not an exact factory-prescription claim. Convergent evidence includes the 24.72 mm design focal length, f/1.85 design aperture, 11 elements in 9 groups, one aspherical surface, high-Abbe crown element, stabilization element and approximately 0.5× close state. Asobinet identifies this patent family with RF24mm development; Canon's product sheet independently states 11 elements/9 groups and one aspherical and one UD element. These matches do not prove that a production sample uses these exact numbers.

## Optical Architecture

The retrofocus-like wide-angle design has a negative front meniscus, a large positive middle assembly and a negative rear meniscus. Two cemented doublets give 11 elements in 9 air-separated groups. The aperture is printed surface 8. Figure 5 marks the first positive element behind the stop as IS; this centered model does not simulate decentering stabilization. Source image height is 19.34 mm, not the 21.63 mm full-frame corner. Digital correction and crop are important to the associated product, so the model retains the source's 38.68 mm image circle without enlarging clear apertures.

## Element-by-Element Analysis

### L1

nd = 1.51633, νd = 64.1. Glass: unmatched patent glass; no vendor identity asserted. f = -34.08 mm (source single-lens data).

Negative front meniscus establishes the wide-angle entrance geometry.

### L2

nd = 1.91082, νd = 35.3. Glass: unmatched patent glass; no vendor identity asserted. f = +27.61 mm (source single-lens data).

Positive biconvex lens restores convergence after the large front air space.

### L3

nd = 1.90043, νd = 37.4. Glass: unmatched patent glass; no vendor identity asserted. f = +24.97 mm (source single-lens data).

Positive member of the first cemented doublet.

### L4

nd = 1.72825, νd = 28.5. Glass: unmatched patent glass; no vendor identity asserted. f = -22.58 mm (source single-lens data).

Negative flint member of the first doublet, adjacent to the stop.

### L5

nd = 1.67790, νd = 55.3. Glass: unmatched patent glass; no vendor identity asserted. f = +81.14 mm (source single-lens data).

Biconvex positive lens immediately behind the stop; Figure 5 identifies this element as the stabilization group.

### L6

nd = 1.85478, νd = 24.8. Glass: unmatched patent glass; no vendor identity asserted. f = -15.20 mm (source single-lens data).

Negative member of the rear cemented doublet.

### L7

nd = 1.49700, νd = 81.5. Glass: unmatched patent glass; no vendor identity asserted. f = +41.73 mm (source single-lens data).

High-Abbe positive member of that doublet provides the low-dispersion partner.

### L8

nd = 1.91082, νd = 35.3. Glass: unmatched patent glass; no vendor identity asserted. f = +26.28 mm (source single-lens data).

Positive biconvex element adds rear-group power.

### L9

nd = 1.53110, νd = 55.9. Glass: unmatched patent glass; no vendor identity asserted. f = +215.73 mm (source single-lens data).

Weak positive meniscus carries the sole aspherical surface on its rear face.

### L10

nd = 1.72916, νd = 54.7. Glass: unmatched patent glass; no vendor identity asserted. f = +143.27 mm (source single-lens data).

Positive meniscus behind the variable focusing air space.

### L11

nd = 1.51742, νd = 52.4. Glass: unmatched patent glass; no vendor identity asserted. f = -104.12 mm (source single-lens data).

Negative rear meniscus completes the rear group and controls the outgoing image bundle.

## Glass Identification and Selection

The patent supplies nd and Abbe number only. These values are transcribed literally, without assigning catalog identities or claiming exact partial dispersion. L7 has nd 1.49700 and νd 81.5, consistent with a low-dispersion crown role, but a UD product label does not identify a specific glass melt. Reference-wavelength MTF is the principal diagnostic; wavelength-dependent engine estimates from nd/νd are approximations and are not measured production performance.

## Focus Mechanism

The source changes only d17 from 2.56 mm at infinity to 15.56 mm close. With the rear assembly and sensor held fixed, the optics through S17 translate 13 mm toward the object. The engine's first-surface coordinate convention equivalently places S18–S21 and the image plane 13 mm farther right. Independent first-order calculation gives a 42.0121 mm object distance from the first surface, a 136.0021 mm object-to-image distance and −0.510502 magnification. Intermediate slider positions interpolate the single gap and are not additional published focus states. The literal infinity back focus is 11.00 mm; the rounded table predicts 11.002271 mm paraxially, a 0.002271 mm difference that is retained rather than silently refocused.

## Aspherical Surfaces

S17, the rear face of L9, uses the standard conic-plus-even-polynomial sag convention, K = 0. Coefficients in millimetre units are A4 = 1.70126e−5, A6 = −2.50325e−9, A8 = 1.03885e−10, A10 = −5.41918e−13 and A12 = 1.15952e−15. Direct inspection of the grant and application pages confirms identical values. No alleged typo repair is used. No manufacturing method is asserted from the numerical table alone.

## Verification and Qualifications

All 20 refracting-surface semi-diameters are exactly half the published effective diameters. The S8 published clear envelope is 17.43 mm diameter. The engine's ordinary-prime contract derives the iris from the source f/1.85, giving 16.933859 mm iris diameter. Using the entire published envelope would instead give paraxial f/1.79734. Both source claims are preserved and distinguished; the effective-diameter column is not silently replaced with a larger iris or a faster nominal f-number.

The literal design computes EFL 24.720103 mm and track 80.99 mm versus the source's rounded 24.72 and 81.00 mm. Exact aperture audit traces f/1.850000, limited by the iris. Source field coverage reaches 19.339973 mm at 41.189188°, consistent with rounded 41.2°. Geometry, hidden-trim, pupil and source-plane versus best-focus MTF results are preserved in the accompanying validation package. Best-focus results are diagnostic only, not a replacement source plane. Off-axis mechanical vignetting is substantial and is not corrected by changing source diameters.

Independent product reviews describe strong center detail and substantial uncorrected barrel distortion. Those reviews motivate the association's practical interest but do not certify this prescription or turn simulated MTF into measured product performance.

## Sources

- [Grant and literal numerical example](https://patents.google.com/patent/US12066598B2/en).
- [Application source PDF](https://patentimages.storage.googleapis.com/69/8c/1f/9a7b0ada712c79/US20220252840A1.pdf).
- [Patent-family product association](https://asobinet.com/info-patent-canon-rf24mm/).
- [Canon product specifications](https://downloads.canon.com/DMSD/sample/RF24mm-F1.8%20MACRO-IS-STM_Spec-Sheet.pdf).
- [Photography Blog review](https://www.photographyblog.com/reviews/canon_rf_24mm_f1_8_macro_is_stm_review/conclusion).
- [OpticalLimits review](https://opticallimits.com/canon/canon-rf/canon-rf-24mm-f-1-8-is-stm-macro-review/).
