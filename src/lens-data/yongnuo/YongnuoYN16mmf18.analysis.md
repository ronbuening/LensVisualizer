## Patent Reference and Design Identification

**Patent:** [CN 214795390 U](https://patents.google.com/patent/CN214795390U/zh)
**Filed:** June 2, 2021
**Granted:** November 19, 2021
**Inventors:** Jiannan Zhuang (庄建南), Yuanhua Ye (叶远华)
**Assignee:** Shenzhen Yongnuo Photographic Equipment Co., Ltd. (深圳市永诺摄影器材股份有限公司)
**Title:** An ultra-wide-angle imaging lens and imaging equipment
**Example details:** Tables 1–4, PDF page 7–8; Figure 1, PDF page 9. Native millimeters, without scaling.

This is a representative patent model, not a verified factory prescription. The probable association with the YN 16mm f/1.8 S DA DSM rests on the maker's patent ownership, 10 elements in 8 groups, one moving double-sided aspheric element, and the correspondence of the patent's 16.34 mm, f/1.78 and 83° field to the retail 16 mm, f/1.8 and 82.62°. The official catalog section is topologically compatible. The prescription is not rescaled to retail specifications.

## Optical Architecture

Ten refractive elements form eight air-separated groups. The front three menisci feed two cemented doublets around the stop. A positive aspheric meniscus is the sole moving focus element, followed by a fixed negative/positive rear pair. The stop is the literal STO row between the doublets, 34.9 mm behind the first vertex. A source-listed 2 mm plane-parallel plate follows the final powered surface; it is modeled as an undrawn rear plate, not an eleventh lens element.

The abstract, claims and prose disagree about group signs, stop location and focus direction. This model follows the complete numerical table and Figure 1. No radii or spacings have been changed to reconcile the adjectives.

## Element-by-Element Analysis

The focal lengths below are isolated-in-air thick-lens diagnostics, not allocations of in-system power. Cemented surfaces couple the doublet components. All glass identities are unmatched; the literal nd and νd values are retained.

### L1: Positive Meniscus

nd = 1.730766, νd = 40.501. Glass: unmatched patent material. f = +150.8985 mm.

Front positive meniscus, ahead of the diverging pair. Detailed aberration contributions have not been isolated by native simulation.

### L2: Negative Meniscus

nd = 1.72916, νd = 54.49924. Glass: unmatched patent material. f = -32.3563 mm.

Negative meniscus in the wide-angle front group. Detailed aberration contributions have not been isolated by native simulation.

### L3: Negative Meniscus

nd = 1.496999, νd = 81.61466. Glass: unmatched patent material. f = -30.7425 mm.

Negative meniscus with low dispersion. Detailed aberration contributions have not been isolated by native simulation.

### L4: Negative Meniscus

nd = 1.900696, νd = 37.05356. Glass: unmatched patent material. f = -69.0481 mm.

High-index negative member of the first cemented doublet. Detailed aberration contributions have not been isolated by native simulation.

### L5: Biconvex Positive

nd = 1.437, νd = 90.70237. Glass: unmatched patent material. f = +18.5230 mm.

Low-index, high-Abbe positive member of the first cemented doublet. Detailed aberration contributions have not been isolated by native simulation.

### L6: Biconvex Positive

nd = 1.910822, νd = 35.25001. Glass: unmatched patent material. f = +16.0649 mm.

High-index positive member of the second cemented doublet. Detailed aberration contributions have not been isolated by native simulation.

### L7: Biconcave Negative

nd = 1.71852, νd = 33.45655. Glass: unmatched patent material. f = -16.9943 mm.

Negative member of the second cemented doublet. Detailed aberration contributions have not been isolated by native simulation.

### L8: Positive Meniscus

nd = 1.726, νd = 54. Glass: unmatched patent material. f = +29.2332 mm.

Positive aspheric meniscus; both surfaces move together during focusing. Detailed aberration contributions have not been isolated by native simulation.

### L9: Biconcave Negative

nd = 1.761819, νd = 26.55365. Glass: unmatched patent material. f = -18.4961 mm.

Fixed biconcave negative element behind the focus group. Detailed aberration contributions have not been isolated by native simulation.

### L10: Biconvex Positive

nd = 1.696732, νd = 56.42017. Glass: unmatched patent material. f = +24.5677 mm.

Fixed biconvex positive rear element before the explicit plate. Detailed aberration contributions have not been isolated by native simulation.

## Glass Identification and Selection

The source provides d-line nd/νd pairs, not manufacturer glass names or partial-dispersion measurements. L3 (νd 81.61466) and L5 (νd 90.70237) provide low-dispersion components; their surrounding high-index elements create chromatic-correction degrees of freedom. No catalog substitution or inferred anomalous-dispersion value is authored. The explicit rear plate retains nd 1.516330 and νd 64.15015.

Native support assessment confirms reference d-line MTF is available and was evaluated. C/d/F and photopic MTF are blocked because a low-dispersion glass (νd 81.6) lacks partial-dispersion data. Source-plane reference results and convergence limits are described below.

## Focus Mechanism

Only L8, source surfaces 14 and 15, moves. Table 3 names three configurations INF, X20 and MOD. X20 is retained as a literal label, not interpreted as magnification. The d13/d15 gaps are 5.51/2.26 mm, 5.17/2.60 mm and 3.62/4.15 mm respectively. Their sum remains 7.77 mm. The table therefore moves L8 objectward by 0.34 and 1.89 mm, despite the prose's contrary direction.

The printed finite object distances are 640.38 and 91.094 mm. Their reference is not yet certified. The runtime candidate is infinity-only; separate evidence retains complete literal finite mechanical variants. No source-certified finite conjugate, interpolation law, or close-focus performance is asserted. Assuming the distances are measured from the first vertex gives independent ABCD source-plane residuals of approximately −0.016821 and +0.017917 mm; these are conditional diagnostics, not native finite validation.

## Aspherical Surfaces

Source surfaces 14 and 15 use conic sag plus an even radial polynomial, with K = 0 and coefficients on h⁴, h⁶, h⁸ and h¹⁰ in native millimeters. The source C4–C10 map directly to runtime A4–A10.

- Surface 14: C4 = −1.18330e−4, C6 = −7.26147e−7, C8 = −2.56514e−10, C10 = −6.45424e−11.
- Surface 15: C4 = −1.81750e−5, C6 = −2.43417e−7, C8 = +7.78733e−10, C10 = −8.46798e−12.

These terms modify the outer profile of the moving lens. No manufacturing process is inferred from the coefficients alone.

## Verification and Remaining Limits

Independent source-table paraxial calculation gives an infinity EFL of 16.3505340821 mm. The literal image plane is z = 80.78 mm, 1.06 mm after the source plate exit; the paraxial intercept is 1.062635623 mm after that exit. The 17.56 mm printed rear track is physical, while its air-equivalent reduced track is 16.878974102 mm. Neither replaces the other.

The source does not publish optical clear apertures. Native geometry, zero render trim and iris clearance pass with inferred caps. Initial caps clipped1.69% of the iris-admitted axial radius. A rejected S9-only change left S7 clipping. The minimum0.01mm-grid pair S7=9.11mm/S9=9.19mm now admits the actual iris boundary, with the stop limiting. No published optics, other caps, rim cuts or gap allowances changed. The source f/1.78 is retained under the repository's paraxial EPD=EFL/N convention; the distinct nonlinear diameter ratio is not a source-aperture failure.

Coarse52-sample stop-lattice throughput at0/20.75/41.5degrees is100%/84.62%/34.62%. At128-grid, midfield/edge admission is11440/12892 and3796/12892. Strong real edge vignetting remains. Actual peripheral chiefs at20.749724/41.499998degrees land at6.108615/13.871722mm. The engine APS-C reference radius14.175mm only encodes these source-field target heights, not a source-measured sensor size or135-format corner.

Source-plane d-line geometric and diffraction MTF converge at sampled0/10/20/30/40lp/mm with up to128-grid. Historical64-grid peripheral failures and separate best-axial diagnostic are preserved. The+0.006034794mm best-axial shift is not authored. C/d/F and photopic modes are unavailable because low-dispersion glasses lack partial-dispersion data; no glass curves are invented.

The fixed runtime carries verified maker0.17m MFD as catalog context only, without continuous focusing law or certified finite conjugates. Separate literal X20/MOD snapshots build with zero trim. Under the unprinted first-vertex distance hypothesis, native near-axis residuals−0.016821187/+0.017917117mm agree with independent ABCD; EFL16.219544511/15.641355382mm differs from printed16.207/15.677. No finite retuning or finite-field certification is claimed.

## Sources

- [CN 214795390 U, complete patent](https://patents.google.com/patent/CN214795390U/zh), Tables 1–4 and Figures 1–2.
- [Yongnuo official catalog](https://www.szyongnuo.com/upload/file/202403/2026-03.pdf), product identity and optical topology.
- [Maker manual, B&H-hosted](https://www.bhphotovideo.com/lit_files/1129807.pdf), production context only.
