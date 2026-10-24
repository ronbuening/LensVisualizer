# CARL ZEISS VARIO-SONNAR T* 70-210mm f/3.5: US 4,303,312 A

## Patent Reference and Design Identification

**Patent:** US 4,303,312 A  
**Title:** Photographic objective of continuously variable focal length  
**Application Number:** 112045  
**Priority:** 12 January 1979, German application 2900977  
**Filed:** 14 January 1980  
**Published:** 1 December 1981  
**Inventor:** Heinrich Basista  
**Assignee:** Carl-Zeiss-Stiftung  
**Example details:** three paired zoom rows, and repeated claim 3 table.

This prescription is strongly associated with the Contax/Yashica Vario-Sonnar T* 3.5/70–210 described in Zeiss sheet Cat. 104728. The association is not a claim that the retained patent is a complete manufacturing prescription for every production sample. The numerical model retains physical millimetres and the source's three focal labels 72.15, 130.17 and 203.20 mm. It is not rescaled to the marketing endpoints 70 and 210 mm.

The patent and maker sheet agree in several ways:

1. The patent has fifteen elements in twelve air-separated groups, organized as four positive–negative–negative–positive functional cells. The maker sheet gives the same 15/12 topology and a compatible section.
2. The maker separately gives actual focal lengths 72.0–203.0 mm. These are compatible with the patent's literal 72.151125–203.200283 mm first-order range without numerical fitting.
3. The source vertex span is 178.626 mm, versus the maker's rounded 178.6 mm at both endpoints. The fixed rear cell and two moving divergent cells provide a consistent infinity-zoom architecture.
4. The maker entrance- and exit-pupil coordinates closely constrain the inferred Gaussian iris position. The remaining pupil-diameter and cardinal-reference differences are retained rather than used to tune the prescription.

The sheet's normal focus specification, separate macro procedure, barrel length, filter size and flange dimensions describe the product rather than optical intervals. Its imprint reads AW-U-X/83 To; the precise factory revision chronology is not established.

## Optical Architecture

There are fifteen spherical glass elements, twelve air groups, twenty-seven refracting faces and one separately modeled zero-power iris. Cemented interfaces join L1/L2, L7/L8 and L11/L12. There are no aspheres, added cover plates or synthetic glass splits.

The diagram and inspector use the patent figure's Roman element identifiers I–XV; these correspond in order to L1–L15 in the patent's group table and the discussion below. Functional annotations A–D span R1–R5, R6–R11, R12–R14 and R15–R27 respectively. Cemented-component annotations D1, D2 and D3 span R1–R3, R12–R14 and R19–R21; these D-number labels are model annotations, distinct from functional group D.

The four source functional cells are:

| Cell | Elements | Computed focal length | Infinity-zoom role |
|---|---|---:|---|
| A | L1–L3 | +125.023873 mm | Fixed front positive collector |
| B | L4–L6 | −58.190400 mm | Moving divergent cell |
| C | L7–L8 | −94.231323 mm | Second moving divergent cell |
| D | L9–L15 | +43.579133 mm | Fixed positive rear imaging cell with internal iris |

These agree closely, but not exactly, with the printed rounded group values +125.025, −58.190, −94.231 and +43.579 mm. The full 28 mm R21–R22 interval, including both sides of the inferred iris, belongs to D; omitting a stop subinterval would compute a different group.

With A and D fixed, B moves imageward as d5 grows from 1.200 to 48.326 mm. C has a small objectward reversal near the wide end, then moves imageward as d14 decreases to 3.200 mm. The three variable intervals always sum to 53.926 mm. The derived continuous path is described below; these movements are not presented as recovered factory cam coordinates.

The patent emphasizes the separated weak divergent meniscus L13 after the front part of D, particularly its role in zonal-error correction and compactness. Its isolated focal magnitude is 4.052993 times the longest printed focal length, within the stated factor-of-three to factor-of-five condition. The physical optical track plus the printed image interval is 227.806 mm, versus the prose's 227.87 mm. That small point discrepancy is preserved.

## Element-by-Element Analysis

The focal lengths below describe each glass shape as an isolated thick lens in air. For a cemented component, they are not the powers of the actual shared interfaces in the assembled system. Catalog equivalents describe compatible optical glasses; the production melts and suppliers are not identified.

### L1: negative meniscus

nd = 1.80517, νd = 25.43. Glass: SF6 (SCHOTT catalog equivalent; production melt unidentified). f = -177.583 mm.

The front negative meniscus is cemented to the lower-index, lower-dispersion L2. Their shared R2 face is represented once. The patent identifies this first member as an achromatically acting cemented component; it does not assign an independently measurable aberration budget to L1.

### L2: positive meniscus

nd = 1.51680, νd = 64.17. Glass: N-BK7 (SCHOTT catalog equivalent; production melt unidentified). f = +140.189 mm.

The positive partner provides convergence within the front compound member. Its large Abbe-number difference from L1 supports the source’s achromatic-component description. Together with the separated L3, the complete A cell remains positive.

### L3: biconvex positive

nd = 1.52341, νd = 51.49. Glass: N-KF9 (SCHOTT catalog equivalent; the printed nd/νd equal legacy Schott KF9; production melt unidentified). f = +143.272 mm.

The weakly biconvex positive singlet is separated from the front doublet by the literal 0.1 mm air interval. Its rear face has a much weaker curvature than its front face. It completes the fixed A cell rather than constituting a separately assumed focus group.

### L4: biconcave negative

nd = 1.69100, νd = 54.71. Glass: N-LAK9 (SCHOTT catalog equivalent; production melt unidentified). f = -42.967 mm.

This biconcave element supplies the strongest isolated negative power in B. The steep positive rear radius and the next negative front radius bound the small 5.5 mm air interval. Its unequal inferred clear rims and actual straight rim join are included in the material model.

### L5: biconcave negative

nd = 1.69100, νd = 54.71. Glass: N-LAK9 (SCHOTT catalog equivalent; production melt unidentified). f = -85.488 mm.

The second negative singlet shares the same printed glass coordinates as L4, but not its shape or focal length. It distributes B-cell negative power before the positive L6. The smaller front clear cap is a reconstruction constrained by the neighboring spherical gap, not a changed radius.

### L6: biconvex positive

nd = 1.67270, νd = 32.21. Glass: SF5 (SCHOTT catalog equivalent; production melt unidentified). f = +63.637 mm.

The biconvex positive singlet uses a more dispersive glass than L4 and L5 and partially compensates their negative power. The complete three-element B cell remains divergent. No lens-specific anomalous dispersion is inferred from this Abbe pair.

### L7: biconcave negative

nd = 1.69100, νd = 54.71. Glass: N-LAK9 (SCHOTT catalog equivalent; production melt unidentified). f = -42.044 mm.

L7 is the negative half of the moving cemented C component. Its rear face is the single shared R13 interface with L8. The cell is not split into independently moving pieces, either for zoom or for a hypothetical finite-focus mode.

### L8: positive meniscus

nd = 1.68893, νd = 31.18. Glass: E-FD8 (HOYA catalog equivalent; the printed nd/νd equal legacy Schott SF8; production melt unidentified). f = +76.669 mm.

The positive meniscus has a very weakly curved rear face, R14 = +3073.000 mm. It is not replaced by a plane. Its glass coordinate differs only slightly in index from L7 but substantially in Abbe number, giving a dispersive contrast across the cemented interface.

### L9: biconvex positive

nd = 1.61272, νd = 58.63. Glass: BACD4 (HOYA catalog equivalent; the printed nd/νd equal legacy Schott SK4; production melt unidentified). f = +85.980 mm.

The first rear-cell positive singlet begins the fixed D assembly. Its rear air interval is only 0.1 mm. The source drawing gives an approximate clear-height constraint, not a factory aperture certificate, so the model’s clear rims remain explicitly inferred.

### L10: biconvex positive

nd = 1.55232, νd = 63.46. Glass: N-PSK3 (SCHOTT catalog equivalent; production melt unidentified). f = +118.176 mm.

The second positive singlet is also followed by a literal 0.1 mm interval. Its lower dispersion complements the following compound component. Both small physical spacings remain unchanged in every zoom and focus-slider state.

### L11: biconvex positive

nd = 1.48749, νd = 70.41. Glass: N-FK5 (SCHOTT catalog equivalent; production melt unidentified). f = +71.499 mm.

The positive low-index, high-Abbe element is cemented to the much denser, more dispersive negative L12. This is the source’s rear laminated member. The actual R20 cemented surface has negative refractive power because the index rises across a negative radius.

### L12: biconcave negative

nd = 1.80518, νd = 25.43. Glass: SF6 (SCHOTT catalog equivalent; production melt unidentified). f = -66.550 mm.

The negative partner completes the rear doublet before the iris-containing 28 mm air interval. Its source index is 1.80518, whereas L1 is 1.80517. The one-last-digit difference is retained, despite the common printed Abbe number and possible related glass family.

### L13: negative meniscus

nd = 1.54814, νd = 45.75. Glass: LLF1 (SCHOTT catalog equivalent; production melt unidentified). f = -823.568 mm.

This weak negative meniscus is separated well behind the iris. The patent expressly connects this component with zonal-error correction and shortening the system. Its focal magnitude is about four times the long-end focal length, satisfying the source condition without altering its two radii or 2.6 mm thickness.

### L14: biconvex positive

nd = 1.54814, νd = 45.75. Glass: LLF1 (SCHOTT catalog equivalent; production melt unidentified). f = +98.787 mm.

The rear positive singlet uses the same printed glass coordinates as L13 but has positive biconvex power. It is separated from L13 by the substantial 23.4 mm interval. The paired-glass coordinate equality is not evidence that these distinct components were cemented.

### L15: negative meniscus

nd = 1.61765, νd = 55.14. Glass: K-SSK4 (SUMITA catalog equivalent; the printed nd/νd equal legacy Schott SSK4; production melt unidentified). f = -80.838 mm.

The final negative meniscus completes the fixed rear cell. Both radii are negative, with the stronger front curvature producing net negative isolated power. Its exit-to-image interval is the source’s fixed 49.18 mm at every zoom, not a best-focus result silently substituted by the analysis.

## Glass Identification and Spectral Scope

The patent explicitly labels the refractive index and Abbe number for the d-line. All fifteen printed coordinate pairs are retained. The model uses SCHOTT SF6 for L1/L12, N-BK7 for L2, N-KF9 for L3, N-LAK9 for L4/L5/L7, SF5 for L6, N-PSK3 for L10, N-FK5 for L11 and LLF1 for L13/L14; HOYA E-FD8 for L8 and BACD4 for L9; and SUMITA K-SSK4 for L15. These catalog equivalents supply qualified dispersion estimates, not identification of the production melts or suppliers.

Three relatively high-index, lower-dispersion negative elements L4, L5 and L7 share 1.69100 / 54.71. The positive compensator L6 uses 1.67270 / 32.21. The C doublet has a large Abbe contrast despite nearly equal indices. The rear L11/L12 pair has both a large index contrast and a large Abbe contrast. These are supported descriptions of the printed palette, not a claim of independently recovered secondary-spectrum correction.

Reference calculations use the d-line wavelength, 587.5618 nm. The patent supplies no partial-dispersion data, including for L11 with νd = 70.41, and does not designate special-dispersion elements. Catalog curves do not establish coating transmission, measured factory dispersion or apochromatic correction.

## Focus Mechanism

The Zeiss sheet describes front-element focusing in normal operation down to 1.8 m. It does not unambiguously identify whether the moving assembly is the cemented front member or the complete A cell, or specify its direction and travel.

The model therefore represents continuous zoom at infinity only. Optical spacings remain unchanged with the focus control; no cemented interface is split. The 1.8 m figure describes the product's normal focusing limit; close-focus performance is not modeled.

The same sheet describes a separate macro procedure: select the long focal setting, switch to macro and move the focal-length ring toward shorter settings. It gives a minimum object distance of 0.3 m measured from the film plane and approximately 1:2 scale. This differs from the ordinary 1.8 m focusing mode and is not modeled.

## Continuous Infinity Zoom and Source Residuals

The source gives three paired rows, not independent ranges. The two-mover reconstruction preserves all three exactly, including their focal metadata and the fixed 49.18 mm image interval:

| Printed focal label | Computed EFL | Gaussian BFD | BFD minus printed plane |
|---:|---:|---:|---:|
| 72.15 mm | 72.151124925 mm | 49.239323234 mm | +0.059323234 mm |
| 130.17 mm | 130.169756058 mm | 49.175187622 mm | −0.004812378 mm |
| 203.20 mm | 203.200283239 mm | 49.148837048 mm | −0.031162952 mm |

The computed focal lengths differ slightly from the rounded printed labels, and the prescription is not exactly parfocal at the printed image plane. The model preserves these residuals without altering the glass coordinates, radii or spacings.

Between wide–middle and middle–tele, the reconstruction linearly interpolates the computed EFL and Gaussian BFD targets, preserving the source's defocus residual. With the fixed A and D matrices and x + y + z = 53.926 mm, the desired unit-input output ray is propagated backward through D. The output-slope equation eliminates the middle variable gap. Multiplying the remaining height equation by the B-cell output slope yields a quadratic in the first gap. Only one branch keeps all gaps positive.

The model linearly interpolates stored spacings, approximating that rational/quadratic law with 257 equally spaced control nodes. Only wide, middle and tele are published; the other 254 nodes are derived. The maximum calculated EFL interpolation residual is about 0.000357405 mm and the BFD interpolation residual about 0.000245953 mm. Maximum fixed-plane defocus remains about 0.059345867 mm.

Those interval extrema are double-precision estimates from polynomial/rational critical points, rather than formally bounded values. The continuous zoom path is reconstructed; the factory mechanical cam is unknown. Its small interpolation residual is distinct from the larger inherited source-plane residual.

The derived d14 rises to about 17.060026 mm just after the wide end before decreasing. Figure 2 supports a small initial rise, whereas the prose and claim describe d14 as largest at the wide position. The model retains this source inconsistency. The separate bound d14 < 0.3 times the wide focal length remains satisfied.

## Iris, Clear Apertures and Cardinal Coordinates

The source drawing locates an iris within d21 but does not print its numerical split. The maker gives a virtual exit pupil 48.0 mm in front of the last vertex at both ends. Gaussian conjugacy through the fixed rear section gives the adopted split 2.002843210663496 mm after R21 and 25.997156789336504 mm before R22. Their sum remains the literal 28.0 mm interval.

The maker’s separate 27.0 mm exit-pupil diameter would imply a Gaussian iris diameter of 32.580320 mm and approximately f/3.60 with the patent cells. It does not establish an exact physical f/3.5 aperture. Exact marginal-ray calibration at the wide station instead gives radius 17.416188032 mm. These are different source/model conventions and are not fitted together.

The zoom model uses **one fixed physical iris**, calibrated at the wide station, consistent with the fixed rear assembly and the maker’s constant exit pupil. Before clear-aperture clipping, the exact marginal-ray f-number changes from 3.500000 to 3.511884 across the 257 stored nodes, while the nominal label remains f/3.5. Its radius differs by at most 0.37743% from a per-station exact f/3.5 iris. The factory iris is not established. The model's Gaussian exit diameter is 28.866326 mm, distinct from the maker’s 27.0 mm. Recalibrating the marginal beam separately at each aperture is a diagnostic calculation, not the model's aperture mechanism.

The patent states a 56 mm front-lens diameter, consistent with the model's 28 mm front semi-diameter. The maker sheet's separate 56.0 mm value is the tele entrance-pupil diameter, not a front-lens free diameter. The nominal long-end f/3.5 beam requires a front radius of 29.028612 mm and remains clipped. Other clear apertures are estimates from Figure 1, not published factory free diameters. That figure is drawn at 130.17 mm; scaled by the 178.626 mm vertex span, its rims agree with the stored values within about 6%. L3 at 26.8 mm, L6 at 16.8 mm and the cemented L11/L12 block at 18.3 mm admit the maker's entrance-pupil beam (19.9 mm wide, 56.0 mm tele, about f/3.63). The transmitted wide-open beam is about f/3.61 wide and f/3.63 tele. The nominal f/3.5 beam still clips 14 surfaces. The R7/R8 spherical caps use 15.4 mm, L13 uses 13 mm, and the front of D uses 19.3 mm. Straight rim joins include unequal face rims.

Within the radial band shared by adjacent faces, the maximum gap-sag fraction is 0.893809352, below the 90% limit, and minimum glass thickness is 1.335191238 mm. These measures describe overlapping optical surfaces rather than every possible path through the complete lens solids.

The inferred pupil position gives entrance-pupil locations 63.928266, 137.687195 and 209.372960 mm after the first vertex. The last value is 30.746960 mm beyond the last vertex. These closely match the maker’s rounded endpoint positions 63.9 mm after first and 30.7 mm after last. The actual physical iris and ray-domain conventions must still be distinguished from these first-order locations.

The principal-plane offsets are H = +82.543592, +93.489751 and −12.448367 mm relative to the first vertex, and H′ = −22.911802, −80.994568 and −154.051446 mm relative to the last vertex. The maker sheet gives a tele H value of about 12.6 mm but describes its reference as the last vertex. The literal patent calculation instead places H about 12.448 mm before the **first** vertex. This reference conflict is retained; the maker wording is not silently corrected to strengthen the product match.

## Model Scope and Limitations

The source/product endpoint half-angles 16.5° and 6.0° differ from the calculated corner angles for a full 36 × 24 mm format. Exact-spherical chief-ray inversion at the stated image plane gives approximately 16.844971° wide and 5.889084° tele. The rounded 43.3 mm diagonal reference instead gives approximately 16.857430° and 5.893309°. These calculated angles are not published field limits. Linear interpolation of the maker endpoint angles is a diagnostic assumption; the factory field law is unknown.

The figure-based apertures do not transmit the full nominal f/3.5 axial beam. Separately calibrated axial beams at f/5.6, 8, 11, 16 and 22 pass in the sampled calculations. Field coverage depends on both angle and aperture; the model does not establish complete transmission at every angle suggested by a heuristic field estimate. The earlier nominal-beam calculation found no surviving rays at t = 5/6 and 8.500592° at f/3.5, or at tele and 7.617122° at f/3.5 and f/5.6. These diagnostic fields exceed the maker's stated endpoint field references and are not factory specifications.

The aperture control scales the iris and entrance pupil at the current zoom from the nominal f/3.5 setting. That label differs from the unclipped marginal-ray f/3.500000–3.511884 range and from the narrower beam transmitted by the lens rims. A diagnostic beam calibrated separately at each f-number can therefore give different edge-ray results. Displayed continuations of blocked rays do not represent transmitted light.

Sampled transmitted paths remain within the intended glass and air regions. Some rejected rays miss the entire first element or the element beginning at R22 after passing the iris, rather than failing within glass. Edge rays can also clip at the iris when stopped down. Finite sampling does not establish transmission for every ray in the pupil.

Reference-wavelength MTF calculations extend through 50 lp/mm. Numerical convergence describes the sampled model rather than agreement with the maker's white-light curves. Best-axial-focus MTF uses a calculated image plane; it does not remove the residual at the patent's stated image plane. Multicolor estimates based on catalog equivalents remain distinct from measured production-lens performance.

The maker’s tele 6° chief ray reaches about 22.072452 mm radius, beyond the ordinary 21.65 mm format reference. MTF at that angle requires an expanded analysis reference; it is not the ordinary format-corner result or a new factory image-circle specification.

The model remains qualified by the inferred apertures and iris, catalog-equivalent dispersion, source-plane residuals, reconstructed zoom path and absence of finite-focus modeling.

## Sources

- US 4303312 A, complete six-page original: cover, Figures 1–2, numerical prescription, paired zoom and group tables, claims and repeated prescription. https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/4303312
- Carl Zeiss, Vario-Sonnar T* 3.5/70–210 mm, Contax/Yashica mount, Cat. 104728, complete four-page maker sheet. Page 1 supplies product architecture, normal and macro focusing descriptions, cardinal/pupil data and actual focal range. Pages 2–4 supply white-light MTF at large object distance, not the exact reconstructed model’s dispersion or iris.
