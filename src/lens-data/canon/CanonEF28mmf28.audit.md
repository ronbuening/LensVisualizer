# Canon EF 28mm f/2.8 — original-patent shape and glass audit

## 2026-10-30 — JP S62-078520 A, Numerical Example 1

Reviewed the untracked original `patents/JPA 1987078520-000000.pdf`: six native 2866 × 3895 raster pages at approximately 347 ppi. Publication and ownership are on PDF p. 1; the numerical definitions and Example 1 begin on p. 3 / printed 113, continuing on p. 4 / printed 114. The text explicitly identifies Figure 1 on p. 5 / printed 115 with Example 1. Figure 2 on the same sheet is its aberration plot. Native pixels were inspected; larger display crops add no source resolution. No other publication or earlier note substituted for this inspection.

### Prescription and source precision

All eleven source rows, five index/Abbe pairs and five asphere coefficients were checked. The source is normalized to F = 1 and scales by 28: R1 = 1.742, D1 = 0.07, R2 = ∞, D2 = 0.66, R3 = 1.157, D3 = 0.21, R4 = −4.882, D4 = 0.32, stop D5 = 0.13, R6 = −0.690, D6 = 0.09, R7 = 2.503, D7 = 0.01, R8 = 143.920, D8 = 0.12, R9 = −0.722, D9 = 0.00, R10 = 7.814, D10 = 0.10 and R11 = −1.414. These values remain unchanged. The exact plane-plus-polynomial R2 has A/B/C/D/E = 0.8787/0.5712/0.5094/0.8715/2.244. Its existing K = −1, R = 28/(2A) representation and scaled higher terms are exact, not a drawing fit, and remain unchanged.

The final 37.146335541 mm image gap is an existing derived Gaussian BFL, not a printed prescription row. The rounded prescription gives EFL 28.219375888 mm rather than exactly 28 mm. No second scale, new focus trajectory or source-value repair was applied. The source supplies no finite-focus states. The production 0.3 m MFD is metadata, not evidence of internal motion. D9 remains the printed zero; nominally separate L4/L5 touch at the vertex and diverge off axis. Their physical small-gap precision remains unresolved.

### Every element and concave end

Figure 1 shows a clear flat outer shoulder on L1's aspherical rear face. S2A clear sd changes 16.3 → 14.5 mm and `rimExtensionSd: 17` supplies the opaque outer shoulder while leaving the clear optical cap separate. No cut is authored. The existing front clear cap 17 mm is retained as the conservative outer blank anchor. There is no bonded interface, hybrid layer, filter or rear plate in the five-element numerical prescription.

Native measurements exclude the optical axis, stop strokes and the numeral above the section. R1-to-R3 vertex separation is about 343 px for 20.44 mm, or 16.8 px/mm axially. Independent fits to the known spherical R1 and R3 edges imply about 15.0–15.5 px/mm vertically, exposing schematic anisotropy. The rear-asphere cap ends about 220 px from the axis and the front blank about 285 px; asphere sag/axial position gives a second cap estimate near 14 mm. Adopted clear 14.5 mm is conservative within practical ±1 mm schematic uncertainty. The native blank suggests about 18.5–19 mm, roughly 10% above the existing 17 mm cap; that overall-size difference is retained as approximate rather than assigning factory precision. The resolved shoulder is the strong evidence for this edit. L2 and all three rear elements retain their existing approximate heights, including the closely facing S7/S8 and source-zero S9/S10. No unsupported equal-height block, opaque bonded land or disconnected wing is introduced.

The literal stated f/2.8 beam remains restricted by S7. The aperture audit asks for a 6.5 mm clear radius instead of 6 mm; that trial fails the unchanged S7→S8 guard: about 0.30 mm combined sag exceeds the full 0.280 mm source gap allowance. The existing `gapSagFrac: 1` is preserved, not increased. A diagnostic S7 = 6.258485 mm moves the aperture census inside its 3% band but still does not transmit the complete stated beam; it leaves only micrometres of edge separation and is rejected as a way to hide the retained constraint. R/d, asphere, aperture authority and stop position are not tuned. The source-rounded thin gap does not establish a particular replacement spacing.

### Glass and spectral content

The source defines Ni and νi only as glass index and Abbe number (p. 3), without a reference wavelength or d/e-line convention. All five literal pairs remain: 1.60311/60.7, 1.78590/44.2, 1.84666/23.9, 1.79952/42.2 and 1.78590/44.2. No individual C/F/g indices, partial dispersion, APD evidence, supplier, melt, resin or cement is printed. Twenty catalog-derived nC/nF/ng/dPgF overrides are removed. Five explicit `Unmatched` annotations and reference notes disable the five former catalog curves. Current d-line/Abbe calculations are an approximation under an unverified reference convention, not zero chromatic error. Analysis labels and source qualifications agree.

### Render and runtime checks

- Surface validation passes with the original guard settings. Image-circle audit: zero undersized surfaces. Corner chief reaches 21.65 mm at modeled 37.9734°; the printed 37° half-field reaches 20.8673 mm (about 96.4% of that format corner). These are distinct field statements.
- The aperture census retains the same S7 limitation as baseline: stated f/2.8 → equivalent f/2.97, approximately +6.2%. This is not a full-aperture pass. The real working marginal probe reports vignetted at f/2.8; all six smaller iris settings trace.
- Seven iris settings × axial/half/corner fields × 193 circular-pupil samples give 4,053 samples per version. Baseline and candidate have identical passing counts in all 21 cases. Wide-open counts are 169/193 axial, 159/193 half-field and 72/193 corner; every chief clears. At f/4 through f/22 all 193 axial samples pass.
- Twenty-two wide-open corner launches are blocked before the first surface. Independent unrestricted-sphere intersections place them at radii 19.514–21.896 mm, outside the unchanged 17 mm first cap; none is an unexplained inside-cap miss. They are disclosed as blocked launches, not counted as successfully aimed rays.
- Actual rendered SVG paths were compared with native Figure 1. The sole optical state has five finite, connected, closed paths and zero hidden renderer trimming. Repeated normalized control probes leave the static geometry unchanged; they do not establish a finite-focus design. No inferred cut requires a beam exemption.

Source fidelity, sampled runtime clearance and production correlation remain separate conclusions. The shoulder improves the source outline; it does not resolve the thin-gap beam restriction, unspecified spectral reference, rounded vertex contact or unprovided production focus prescription.

## Source-stated focal metadata — 2026-10-30

Original JP S62-078520 A, PDF p.3 / printed113, Numerical Example1 states F=1; retained uniform scale28 gives source design28mm. Computed EFL28.219375888mm remains separately labeled. This metadata correction preserves all R/d, material pairs, clear caps, source stops and focus/zoom controls. The earlier shape/glass review dates and results are retained; no additional lens review is counted.
