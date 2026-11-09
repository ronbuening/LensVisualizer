## Patent Reference and Design Identification

**Patent:** US 1,360,667 A  
**Filed:** August 18, 1916; renewed July 28, 1919  
**Granted:** November 30, 1920  
**Inventor:** Charles Clayton Minor  
**Assignee:** None named in the publication  
**Title:** Photographic Objective  
**Example details:** Drawing sheet Figure 2; specification page 2, left-column numerical example and C/D/F table. Dimensions remain in the original millimeters, without scaling.

This model transcribes the four-element numerical prescription explicitly associated with Figure 2. It does not identify a production lens, mount, camera, or commercial glass melt. The catalog title names the patent example rather than a 65mm f/2 rating, because the literal prescription reproduces neither figure (see Focal-Distance Reconciliation). The focal-length metadata records only the literal model’s computed 85.9066 mm EFL as the prescription design value; the commercial `marketing` value remains unset. The 65 mm source statement appears in the specs and source notes and is not reinterpreted as EFL. Manufacturer, mount, image format/circle, and marketed minimum focus distance are unknown and remain unset.

The patent calls the drawings diagrammatic and says the numerical dimensions are only approximately correct. Its summary states “focal distance 65 mm,” largest lens diameter 38 mm, effective aperture .5 or f/2, and an anastigmatically flattened field of about 65°. These statements are retained as source claims. The literal model does not reproduce all of them.

## Optical Architecture

Four spherical, air-separated elements have positive-positive-negative-positive individual powers. L1 is a positive meniscus, convex toward the incident light; L2 is plano-convex; L3 is biconcave; L4 is biconvex. Light enters from the left.

The specification explicitly calls L2/L3 an **uncemented doublet**. Their intervening air gap is 1.20 mm, not a cemented junction. The 0.05 mm gap between L1 and L2 also remains air. The negative L3 has the shortest surface radius, its +22.5 mm rear face.

Figure 2 places the diaphragm D between L3 and L4. The source gives the complete 10.00 mm air gap between their vertices but no numerical diaphragm coordinate. This model splits it into 9.5 mm before the stop and 0.5 mm after it, an inferred location near the front vertex of L4. Moving that inferred plane changes pupil and field behavior; it does not change the eight refracting surfaces or their first-order focal power.

The patent explains the first three elements as producing a telephoto effect, with an optical center nearer the incident light than an ordinary central arrangement. It describes the positive-form air space and adjacent negative element as part of the spherical-aberration correction. The present literal reconstruction retains substantial longitudinal spherical aberration, so the claimed correction is not independently established.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nD = 1.6120, νD = 56.6. Glass: Unmatched historical crown, with published C/D/F indices. Isolated D-line thick-lens focal length ≈ +113.039 mm.

The +37.0 mm front and +76.0 mm rear radii form a positive meniscus, 4.34 mm thick on axis. The source places its convex surface toward incident light. Its role is a front positive collector; no particular vendor or melt is identified.

The patent gives nC = 1.6088 and nF = 1.61963. These imply νD ≈ 56.5097, compared with the printed 56.6. Both the printed Abbe number and the literal spectral indices are retained.

### L2 — Plano-Convex Positive Crown

nD = 1.5170, νD = 60.2. Glass: Unmatched historical crown, with published C/D/F indices. Isolated D-line focal length ≈ +60.928 mm.

The +31.5 mm front and plane rear faces enclose a 6.90 mm axial thickness. This is the positive member of the air-spaced L2/L3 combination. The source's plane rear surface is retained exactly.

The published nC = 1.51446 and nF = 1.52305 imply νD ≈ 60.1863, consistent with the printed 60.2 after rounding. There is no basis for correcting these values.

### L3 — Biconcave Negative Flint

nD = 1.6169, νD = 36.4. Glass: Unmatched historical dense flint, with published C/D/F indices. Isolated D-line thick-lens focal length ≈ −31.764 mm.

The −160.0 mm front and +22.5 mm rear radii form the strong negative member, with 3.20 mm center thickness. Its curved rear surface makes the glass substantially thicker at the rim. The diaphragm must lie in air behind that cap, not merely behind its vertex.

The source's nC = 1.61205 and nF = 1.62896 imply νD ≈ 36.4814 rather than the printed 36.4. Neither value is replaced to force agreement.

### L4 — Biconvex Positive Crown

nD = 1.5726, νD = 57.4. Glass: Unmatched historical crown, with published C/D/F indices. Isolated D-line thick-lens focal length ≈ +67.348 mm.

The rear positive element has +80.0 mm and −72.0 mm radii and 7.24 mm center thickness. It remains a single glass element, unlike the rear cemented doublets in Figures 3 and 4, which are different embodiments.

The published nC = 1.56967 and nF = 1.57962 imply νD ≈ 57.5477. The printed 57.4 is retained as a separate source datum.

## Glass Identification and Spectral Reference

All four source indices explicitly refer to solar C, D, and F lines. The stored reference is native **sodium D**, represented by the engine's 589.2938 nm sodium-doublet-center convention. Helium d at 587.5618 nm is a different reference and is not substituted. The patent names the D line without resolving an individual doublet component.

| Element | nC, published | nD, published | nF, published | νD, printed | νD, derived from C/D/F |
| --- | ---: | ---: | ---: | ---: | ---: |
| L1 | 1.6088 | 1.6120 | 1.61963 | 56.6 | 56.5097 |
| L2 | 1.51446 | 1.5170 | 1.52305 | 60.2 | 60.1863 |
| L3 | 1.61205 | 1.6169 | 1.62896 | 36.4 | 36.4814 |
| L4 | 1.56967 | 1.5726 | 1.57962 | 57.4 | 57.5477 |

The spectral trace preserves the published C/D/F anchors. The source supplies no g-line index, anomalous-partial-dispersion value, or catalog identity. Runtime g behavior is estimated from the authored reference index and measured C/F span, independently of the rounded printed Abbe value, and must not be interpreted as measured historical glass data. Recomputing g from the measured span changes the four estimated g indices by at most 0.0000025. Across the converged sampled photopic fields at nominal f/2, f/4, and f/8, the largest change in sagittal/tangential MTF through 50 lp/mm is below 0.000020; convergence counts remain 4/11, 8/11, and 10/11 respectively. Larger differences among unconverged outer-field estimates are numerical diagnostics, not validated performance changes. Native-D results are unchanged. No modern catalog proxy is assigned; matching only a similar refractive index or Abbe number would not establish a material identity.

## Focus Mechanism

The patent provides no close-focus prescription or minimum focusing distance. This model places its infinity image plane at the computed D-line paraxial BFD, 63.84069249 mm behind the last vertex. That plane is a derived modeling choice, not a source dimension.

The focus control illustrates rigid unit focus to an object-to-image distance of 2 m. Only the last image gap changes, to 67.89141082 mm; all internal glass thicknesses and air gaps remain fixed. The close endpoint follows the literal system's paraxial transfer matrix. It is neither a documented mechanism nor a claim about historical product capability. Intermediate control positions are interpolated.

## Clear Apertures and Figure Geometry

The source's largest lens diameter is 38 mm. Figure 2 draws L1 slightly taller than L2–L4: an independent scan reading gives approximately 303 pixels versus 280 pixels. Assigning that largest diameter to L1 gives 19 mm semi-diameter there and approximately 17.6 mm on each face of L2–L4. These are inferred optical square rims, not source-listed clear apertures. The drawing does not establish machining tolerances or cap/land dimensions.

The model retains the source curvature, center thickness, and air gaps. It adds no rim cuts, vertical lands, aspheres, cover plates, or fabricated mechanical dimensions. Per-surface apertures and the exact stop plane remain reconstruction assumptions.

At a literal EFL of 85.9066 mm, paraxial f/2 requires an entrance pupil diameter of 42.9533 mm. This exceeds even the source's largest glass diameter. Read against the source's own 65 mm statement, “effective aperture .5 or f/2” is a 32.5 mm beam, which does fit the 38 mm lens; at the computed EFL that beam corresponds to f/2.64. The source f/2 setting is therefore retained as an iris setting with a visible clear-aperture limitation, rather than enlarging the lens to manufacture agreement. With these inferred rims and stop location, the exact axial aperture census gives approximately **f/2.32**, limited at the front surface of L2. That result depends on the inferred apertures; it is not a measured historical specification. The accepted axial collimated beam diameter is approximately 37.0913 mm, so EFL divided by that beam diameter is 2.3161. The nominal iris has diameter 33.0583 mm and its paraxial entrance pupil is 42.9533 mm. These are different quantities. The real image-space NA of the limiting transmitted ray corresponds to approximately f/2.8069. Neither beam-equivalent ratio is a T-stop or a measured transmission value; the Summary correctly reports the full nominal-iris marginal ray as vignetted.

The source's approximately 65° field has no accompanying image-height prescription or independently validated edge-performance result. No modern image format or certified image circle is assigned. The viewer's inferred field and its analysis curves do not certify that claim.

## Focal-Distance Reconciliation

An independent reduced-angle ray-transfer calculation at the literal D indices gives EFL = **85.90659261 mm**, BFD = **63.84069249 mm**, and first-to-last vertex length = **32.93 mm**. A separate exact sphere-intersection/Snell trace converges to that BFD for near-axis rays.

The patent's “focal distance 65 mm” is not specific to this example. Figures 3 and 4 close with the same words, “focal distance 65 mm; diameter of largest lens 38 mm; effective aperture .5 or f/2”, but their own prescriptions trace differently:

| Example | Paraxial EFL | Paraxial BFD | Axial min-RMS spot, 32.5 mm beam |
| --- | ---: | ---: | ---: |
| Figure 2 (this model) | 85.91 mm | 63.84 mm | 0.267 mm |
| Figure 3 | 82.77 mm | 56.35 mm | 0.040 mm |
| Figure 4 | 67.65 mm | 43.68 mm | 0.179 mm |

These values come from an independent D-line trace of each printed table. The Figure 3 and Figure 4 tables list the rear-doublet radii in numeric rather than surface order; only the order with the common radius in the middle gives positive edge thickness, so both rows use that order. The closeness of 65 mm to this example's 63.84 mm BFD is therefore best read as a coincidence, not evidence of a back-focus convention. The printed 65 mm cannot safely be relabeled EFL or BFD. Neither the radii, thicknesses, gaps, index values, nor their signs have been rescaled or optimized to reproduce 65 mm EFL.

Exact on-axis rays also show substantial spherical aberration: rays launched 5, 10, and 15 mm above the axis cross it approximately 64.125, 65.351, and 69.446 mm behind the last vertex. A 65 mm crossing for some finite-height ray does not establish the intended definition of the printed focal distance. The derived paraxial image plane does not imply that every aperture zone focuses there.

This is a literal, qualified patent reconstruction. The unresolved focal-distance and aperture claims prevent treating it as a validated reproduction of the patent's stated performance.

## Independent Axial Performance Check

A separate analytic sphere-intersection and vector-Snell calculation, without the application’s tracing or MTF helpers, confirms substantial axial blur in the literal prescription. Uniform incident-pupil-area weighting gives these RMS spot radii:

| Nominal iris | At paraxial plane | At minimum-RMS plane | Minimum-RMS plane shift |
| --- | --- | --- | --- |
| f/2, glass-limited accepted beam | 1.0900 mm | 0.5718 mm | +6.5757 mm |
| f/4 | 0.1018 mm | 0.0397 mm | +1.0802 mm |
| f/8 | 0.0101 mm | 0.0035 mm | +0.2145 mm |

A bounded axial geometric-MTF focus scan of the wide-open accepted beam gives approximately 0.130 / 0.075 at 10 / 30 lp/mm near a +0.35 mm plane shift. Minimum-RMS and high-frequency-contrast focus differ for this strongly aberrated beam; refocusing alone does not recover strong wide-open performance. Independent C/D/F paraxial BFDs are 63.900858 / 63.840692 / 63.802623 mm. Their 0.0982 mm spread is much smaller than the full-aperture longitudinal spherical aberration, so correcting the missing-g estimate cannot explain the poor native-D result.

This independent check is axial and geometric, omits diffraction and Fresnel weighting, and does not validate unconverged application MTF values. The source scan still supports the literal radii, thicknesses, signs, and material order. No supported transcription correction has been identified. Figure 3, which shares L2 and L3's glasses and has similar radii, is well corrected at the same beam (see the table above), so a misprint in the Figure 2 table is plausible. A search of every single-value slip (sign, one digit, digit transposition, decimal shift) finds at least four plausible edits that each remove most of the aberration: r1 37.0 → 32.0, r6 22.5 → 25.5, b2 1.20 → 4.20, and r5 −160.0 → −360.0. They leave the EFL between about 71.6 and 80.5 mm, so none reproduces 65 mm. With no aberration curves in the patent and no family publication on file, nothing selects one of them, and the literal table stays. The patent’s approximate numerical prescription, an unestablished erratum, or missing design information remain possible explanations; no optimized substitute is presented as the source lens.

## Modeled Operating Envelope and Numerical Limits

At infinity focus, the native-D diffraction estimate was evaluated at 11 image-height fractions of the model's inferred chief-ray edge, using the unchanged 256-cell production cap and 0.01 successive-grid MTF criterion through 50 lp/mm. This is a numerical operating envelope for the reconstruction, not verification of the source's field or image quality.

| Nominal iris setting | Numerically converged sampled fields | Remaining fields |
| --- | --- | --- |
| f/2 | 0 of 11 | All sampled fields remain unconverged at the production cap. |
| f/4 | 8 of 11, fractions 0 through 0.7 | Fractions 0.8, 0.9, and 1 remain unconverged. |
| f/8 | 10 of 11, fractions 0 through 0.9 | The outermost field remains unconverged. |

The image-height axis is inferred from clear-aperture chief-ray availability because the source supplies no certified image format. Converged sampled points do not certify unsampled fields or historical performance. The common best axial focus is a coarse geometric estimate; its optimum changes with focus-search quadrature and is not an independently converged physical image plane.

The normal MTF view shows converged fields only within their stable frequency band. An explicit diagnostic view can expose unconverged estimates, with the same qualification in readouts and CSV exports. Missing normal-view values must not be read as zero contrast. Stopping down can improve numerical convergence; no prescription values, glass apertures, convergence tolerances, or production sampling limits were changed to obtain a passing result.

A larger, fixed-plane axial diagnostic met the same numerical criterion at 512 cells, while an edge diagnostic remained unresolved at 1,024. Numerical nonconvergence does not establish physical invalidity. The source's unresolved ratings therefore remain separate from numerical presentation and from the correctness of the literal transcription.

## Sources

- [US 1,360,667 A, Photographic Objective](https://patents.google.com/patent/US1360667A/en): drawing sheet Figure 2; specification page 1 for architecture and orientation; page 2 left column for the Figure 2 prescription, glass table, stop description, and focal/aperture/field summary; page 2 right column for the dispersion formula and approximate-dimensions qualification.
- The local patent scan is the transcription authority. Figures 3 and 4 (page 2 right column) are traced only as a cross-check of the shared rating statement and of Figure 2's correction; no values were borrowed from them.
