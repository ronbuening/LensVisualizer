# YASHICA ML 35 mm f/2.8 (early diamond-grip)

## Patent Reference and Design Identification

**Patent:** JP S50-132921 A
**Filed:** 1974-04-05
**Published:** 1975-10-21
**Inventors:** Yoshisato Fujioka
**Assignee:** Yashica Co., Ltd.
**Title:** Retrofocus-type wide-angle lens
**Example details:** Sole numerical prescription, original page3

The early diamond-grip ML35 mm F2.8 shown in the original FX-1 manual (PDF 47/printed 91) matches the seven-element/six-component order, F2.8,64° full field and iris-before-rear-group arrangement. This is a strong architectural correlation, not numerical factory proof, and does not cover every later ML35 version. The five-page patent PDF is an assembled facsimile of original EPO images, not a publisher-original PDF. The grant remains unreviewed.

Uniform scale 0.35 applies to every source radius and axial length. The literal scaled EFL is 35.001013389 mm; nominal marketing focal length is not imposed by renormalizing the radii.

## Optical Architecture

Seven elements in six components, with one cemented pair L2/L3. Negative front L1 expands the field and creates retrofocus clearance. The cemented second component and positive L4 restore convergence; the physical iris lies between named power groups III and IV. The rear three singlets L5/L6/L7 shape the final image bundle. The narrow d11=0.28 source rear air gap remains 0.098 mm, not a cemented or deleted interface.

All refracting surfaces are spherical. No asphere, sensor plate, front filter, shutter blade or other unprinted optical element is added.

## Element-by-Element Analysis

### L1: Meniscus Negative

nd = 1.59181, νd = 58.3. Glass: unmatched source pair, not a named factory melt. Isolated-in-air thick-lens f = -57.4142 mm.

This component is air-separated. Its source index and Abbe pair are retained without catalog substitution in the authored prescription. The isolated focal length is descriptive; a cemented element's in-system power depends on its actual adjacent media.

### L2: Biconcave Negative

nd = 1.56384, νd = 60.8. Glass: unmatched source pair, not a named factory melt. Isolated-in-air thick-lens f = -29.4722 mm.

This element shares the D1 cemented interface. Its source index and Abbe pair are retained without catalog substitution in the authored prescription. The isolated focal length is descriptive; a cemented element's in-system power depends on its actual adjacent media.

### L3: Biconvex Positive

nd = 1.71300, νd = 53.9. Glass: unmatched source pair, not a named factory melt. Isolated-in-air thick-lens f = +28.0126 mm.

This element shares the D1 cemented interface. Its source index and Abbe pair are retained without catalog substitution in the authored prescription. The isolated focal length is descriptive; a cemented element's in-system power depends on its actual adjacent media.

### L4: Biconvex Positive

nd = 1.69350, νd = 53.4. Glass: unmatched source pair, not a named factory melt. Isolated-in-air thick-lens f = +30.0587 mm.

This component is air-separated. Its source index and Abbe pair are retained without catalog substitution in the authored prescription. The isolated focal length is descriptive; a cemented element's in-system power depends on its actual adjacent media.

### L5: Biconcave Negative

nd = 1.71736, νd = 29.5. Glass: unmatched source pair, not a named factory melt. Isolated-in-air thick-lens f = -19.4598 mm.

This component is air-separated. Its source index and Abbe pair are retained without catalog substitution in the authored prescription. The isolated focal length is descriptive; a cemented element's in-system power depends on its actual adjacent media.

### L6: Meniscus Positive

nd = 1.71300, νd = 53.9. Glass: unmatched source pair, not a named factory melt. Isolated-in-air thick-lens f = +33.9873 mm.

This component is air-separated. Its source index and Abbe pair are retained without catalog substitution in the authored prescription. The isolated focal length is descriptive; a cemented element's in-system power depends on its actual adjacent media.

### L7: Meniscus Positive

nd = 1.64085, νd = 56.8. Glass: unmatched source pair, not a named factory melt. Isolated-in-air thick-lens f = +58.8366 mm.

This component is air-separated. Its source index and Abbe pair are retained without catalog substitution in the authored prescription. The isolated focal length is descriptive; a cemented element's in-system power depends on its actual adjacent media.

## Glass Identification and Spectral Scope

The file retains the printed indices and Abbe values. No commercial glass or historic melt is recovered by those two coordinates alone. The current engine uses its documented reference-anchored dispersion cascade; this build resolves the unmatched source pairs through its normal-line Abbe surrogate. These spectral estimates constrain primary color but not the true secondary spectrum, coatings, absorption or manufacturing variation. The full MTF support report is preserved; unavailable photopic results are not replaced by invented partial-dispersion coefficients.

## Focus Mechanism

Reconstructed unit focus to 0.3 m object-to-image distance, informed by the maker manual minimum and rigid whole-system movement assumption. Forty-one inverse-distance keyframes sample Gaussian extension while retaining the printed infinity-plane residual; this is not a measured helical law. The dense audit checks 101 slider positions. Independent ABCD replay shows that the nominal 300 mm endpoint actually conjugates at 299.594390 mm because the printed BF residual is preserved. Over focusT 0.1 through 1, the largest relative focus-label discrepancy is 2.65% near the 3 m label. This is a disclosed consequence of preserving the source image plane, not a calibrated distance scale. Finite focus geometry/rays are modeled, but no finite source prescription is certified: finite-conjugate MTF deliberately remains unavailable.

## Aperture, Stop and Clear Apertures

Assumed midpoint strictly inside source d7=19.12, split 9.56+9.56 native units, or 3.346+3.346 mm. The quarter/mid/three-quarter-gap sensitivity test retains the same fixed source prescription. No tested choice is claimed as the recovered physical iris coordinate.

The physical iris radius is calculated by the unchanged runtime from the native design f-number and entrance-pupil imaging. Clear semi-diameters are explicitly reconstructed: start with exact spherical axial/field envelopes, preserve square-cut common rims across each glass component, and reduce only the inferred rims to satisfy the unchanged geometry rules while keeping the axial design beam. The final rims are not dimensions measured from the patent figure. The default gap-sag fraction 0.9 is unchanged; no override, hidden surface trim, radius repair or source optimization is used.

Printed BFL 108.7 ×0.35 =38.045 mm is retained. The unmodified literal source gives 38.033214931 mm; the +0.011785069 mm residual is not corrected.

## Limitations and Source Discrepancies

The Seidel fitted coefficient-reference ray crosses after L5, while patent text/drawing and product section require the physical stop inside d7. This model obeys d7 and does not move the iris to fit the table or claim reproduction of printed Seidel coefficients. Source prose mislabels and the 1974 amendment are preserved in the evidence. Radii, intervals and glass pairs are not optimized.

## Verification Summary

Validation uses the unmodified LensVisualizer edd47fdcd377025144ade179c8bed7188c0bc4eb runtime. The source-to-model map, scaled table, clear-rim sizing log,101-state geometry/render sweep, default UI-ray checks, stop sensitivity tests and full diffraction MTF results are delivered with the package. Reference and five-line photopic modes are attempted separately with the full 16→32→64→128→256 pupil-grid ladder and authored image plane; numerical convergence is not evidence of factory identity. See VALIDATION.md for final results, spectral/conjugate gates and stress-fan clipping.

## Sources

- [Controlling patent](https://patents.google.com/patent/JPS50132921A/en). Original numerical pages and scans are preserved in the evidence directory.
- [Primary product evidence](https://www.cameramanuals.org/yashica_pdf/yashica_fx-1.pdf). Product association is qualified as stated above.
- Source research card and full evidence index accompany this package, including unresolved alternatives and pre-build status history. That historical card is evidence, not the current delivery status.
