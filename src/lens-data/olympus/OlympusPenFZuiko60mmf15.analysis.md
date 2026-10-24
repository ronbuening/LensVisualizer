# Pen F G.Zuiko Auto-T 60 mm f/1.5: a qualified reconstruction

## Patent Reference and Design Identification

**Patent:** JP S38-9224 B / 特許出願公告 昭38-9224  
**Title:** 大口径写真用レンズ, “Large-aperture photographic lens”  
**Application:** 特願 昭32-21495  
**Filed:** 31 August 1957  
**Published:** 15 June 1963  
**Inventor:** Yoshisada Hayamizu, printed 早水良定  
**Applicant:** Olympus Optical Co., Ltd., printed オリンパス光学工業株式会社  
**Example details:** Figure 1.

The three-page national publication supplies the prescription. The date 15 June 1963 is its observed publication date, not an independently established final grant event. The Latin inventor name is supported by the bilingual bylines of the 1958 primary paper “Reflecting Microscope Objectives,” printed page 762, which pairs 早水良定 with Yoshisada HAYAMIZU and identifies the Olympus affiliation. It is not an unverified reading of the Japanese characters.

The production association is **probable and version-scoped**. Ponder & Best's May 1968 page B-6, stock 18-9202, identifies the pictured “60mm f1.5 G Zuiko Auto T” with seven elements in five groups and a 28° field. Its optical section matches more than a count: two separate positive front menisci, a thick third cemented component with a straight internal interface, an opposed-concavity central cavity, a separate rear-middle meniscus and a rear doublet with a curved internal interface. The patent and product drawing have different page orientations, not different optical propagation order.

That evidence does not authenticate the exact factory radii or glass melts, prove all Pen F/FT/FV versions unchanged, establish a launch date, or turn a schematic into a dimensioned section. The related manufacturer guide is explicitly headed for Olympus Pen FT and lists 60 mm f/1.5, 7/5, 28°, 0.8 m minimum focus, 49 mm filter and 270 g. Its literal imprint “IEFL ©0467 · 2MB” is retained without inferring a precise publication date. The B-6 minimum focus is printed as 2 ft 7 in; it is not silently treated as an exact metre conversion of the guide's rounded 0.8 m.

The source prescription says f=100 without printing a physical length unit. This implementation applies a **conditional uniform scale of 0.6** to all lengths for the probable nominal 60 mm product. It does not renormalize the calculated EFL to exactly 60 mm or claim recovered factory scale. The resulting EFL is 60.003003987 mm, with the small +0.003003987 mm nominal residual preserved.

## Optical Architecture

The model contains seven physical glasses in five air-separated groups, not five homogeneous elements. Its optical-unit sequence is positive, positive, negative cemented meniscus, negative singlet meniscus, and positive cemented rear group. The twelve physical refracting interfaces include one shared plane glass-to-glass boundary at S6 and one curved shared boundary at S11. Each is counted once. An inferred iris adds a thirteenth computational surface without adding glass or changing a source interval.

The patent names the five optical units L1–L5, in Figure 1 and in the page 1 description. The diagram's group labels and the element names follow that notation. The cemented members of units L3 and L5 are written L3a/L3b and L5a/L5b, so the single meniscus keeps the patent's name L4.

The first two groups are relatively weak positive menisci, with standalone group EFLs approximately +163.026716 and +174.163328 mm. The thick central cemented group has net EFL −92.142472 mm, despite its strongly positive front member. The rear-middle singlet is negative at −184.155960 mm. The final doublet is positive at +42.062833 mm. Thus shape labels and net group powers are kept separate; a positive front contour does not make the entire thick third group positive.

The source first-to-last vertex span is 78.5 normalized units, becoming 47.100 mm at the declared scale. No d12 or last-vertex-to-image distance is printed. The infinity terminal interval is the independently calculated Gaussian infinity BFD, 30.088696439 mm, giving a first-vertex-to-image track of 77.188696439 mm. It is not a printed zero, a flange dimension or a fitted production register distance.

The patent's central d7=15.0 interval becomes 9.000 mm. The model places the iris at its midpoint, 4.500 mm after S7 and 4.500 mm before S8. This is an explicit reconstruction hypothesis: neither an aperture-stop mark nor a numerical stop position or diameter was found in the original drawing or prose. The modeled opening follows the nominal axial f/1.5 beam; the factory iris dimensions remain unknown.

## Element-by-Element Analysis

### L1: positive front meniscus

n_d = 1.6385, ν_d = 55.5. Glass: SUMITA K-SK18 coordinate equivalent used for dispersion; production melt and supplier unconfirmed. Standalone f = +163.026716 mm.

The 107.0/273.3 source radii make a positive meniscus convex toward the object. Its 5.8-unit thickness becomes 3.480 mm. The first surface's stronger positive curvature supplies more positive power than the rear boundary removes. Its modeled 20.010 mm rims are a disclosed minimum nominal axial-beam floor, not half the 49 mm filter diameter.

### L2: second positive meniscus

n_d = 1.6584, ν_d = 50.8. Glass: HOYA BACED5 coordinate equivalent used for dispersion; production melt and supplier unconfirmed. Standalone f = +174.163328 mm.

The source radii 81.0/137.0 again give a positive object-facing meniscus. Its 3.120 mm scaled thickness follows a small 0.150 mm air gap. The inferred 19.430 mm equal rims preserve the nominal axial beam while retaining positive material thickness. They are not measured from a factory lens or optimized for off-axis MTF.

### L3a, front glass of unit L3: plano-convex positive member

n_d = 1.6700, ν_d = 47.2. Glass: HOYA BAF10 coordinate equivalent used for dispersion; production melt and supplier unconfirmed. Standalone f = +39.850746 mm.

The source front radius is 44.5 and the rear is plane. This is the thickest individual glass, 14.280 mm at the declared scale. The plane S6 is not an absent surface: it changes the refractive index from 1.6700 to 1.7552, retains the correct ray-angle transformation and begins the following glass thickness. Its reduced-angle paraxial surface power and Petzval contribution are exactly zero, which does not erase its refractive or higher-order role.

### L3b, rear glass of unit L3: plano-concave negative member

n_d = 1.7552, ν_d = 27.5. Glass: HOYA E-FD4 coordinate equivalent used for dispersion; production melt and supplier unconfirmed. Standalone f = −20.656780 mm.

The plane entrance and strongly curved positive-radius rear form a negative plano-concave element, 3.000 mm thick on axis. Together with L3a it forms the negative central unit L3. The source schematic shows a reduced spherical rear arc meeting a wider outer/plane rim through a shoulder. The model retains this distinction with S5/S6 semi-diameters 17.900 mm and S7 10.930 mm; the whole wider shoulder is not treated as a powered spherical cap.

### L4: negative meniscus

n_d = 1.6889, ν_d = 31.1. Glass: HOYA E-FD8 coordinate equivalent used for dispersion; production melt and supplier unconfirmed. Standalone f = −184.155960 mm.

The literal radii are −43.1 and −61.0, not −48.1. At 0.6 scale the glass is 8.040 mm thick. The stronger object-side negative curvature gives negative net power. Its 11.530 mm modeled rims are clear-aperture hypotheses with the minimum axial-envelope adjustment.

The manufacturing discussion permits this optical unit to be made from two cemented pieces of the same optical material when useful for centering. That is not a second numerical example, a different-index eighth glass or an extra powered interface. The nominal seven-glass prescription is retained without adding that optional manufacturing partition.

### L5a, front glass of unit L5: negative meniscus

n_d = 1.5407, ν_d = 47.2. Glass: OHARA S-TIL2 coordinate equivalent used for dispersion; production melt and supplier unconfirmed. Standalone f = −79.496317 mm.

The source 130.0/46.0 radii form a negative meniscus despite both signs being positive. Its 1.5-unit centre thickness becomes 0.900 mm. This thin member is cemented to L5b at S11; it is not an air-spaced singlet or an unmodeled coating layer. The source 1.5407 index is retained rather than replaced by a nearby catalog value.

### L5b, rear glass of unit L5: biconvex positive member

n_d = 1.6935, ν_d = 53.4. Glass: HOYA LAC13 coordinate equivalent used for dispersion; production melt and supplier unconfirmed. Standalone f = +27.717088 mm.

The shared positive front radius 46.0 and negative rear radius −98.02 make the final member biconvex positive. Its 4.800 mm thickness and strong positive power outweigh the preceding negative member, making the rear doublet positive overall. The two glasses share one geometric S11 boundary and one cemented-group identifier, with no duplicated air surface.

## Glass Map and Spectral Convention

The source table labels n and v without spectral subscripts. Figure 2 explicitly distinguishes d and g curves. This supports the nominal d-line design convention used here, but it is not described as a printed n_d table heading. The model therefore uses d-line coordinates on contextual evidence, rather than a spectral subscript printed in the table.

The seven printed pairs remain authoritative for d-line tracing. Catalog equivalents supply dispersion, including secondary spectrum: SUMITA K-SK18 (L1), HOYA BACED5 (L2), BAF10 (L3a), E-FD4 (L3b), E-FD8 (L4), OHARA S-TIL2 (L5a) and HOYA LAC13 (L5b). Their catalog-minus-printed (Δn_d, Δν_d) residuals are respectively (+0.00004, 0), (+0.00004, +0.06), (+0.00003, −0.01), (0, +0.03), (+0.00003, +0.06), (+0.00002, +0.027127) and (0, −0.06). These are coordinate equivalents for spectral modeling; the production melts and suppliers remain unconfirmed.

The positive crown-rich groups and stronger flint members provide a conventional chromatic power balance, without establishing modern apochromatism. Reference-line MTF can be calculated. The historical photopic diagnostic used a normal-line partial-dispersion estimate from n_d/ν_d across five wavelengths; current chromatic calculations use the catalog equivalents. Neither spectrum is a recovered factory spectrum. The historical converged curves remain model diagnostics, not measured production-lens results.

## Focus Mechanism

Unit focus moves the entire lens toward the object with all internal spacings fixed. The Olympus guide lists a 0.8 m minimum focus and gives no contrary indication of internal or floating focus. The patent supplies only an infinity prescription; the close position is a paraxial reconstruction, not a measured helicoid law.

For an 800 mm object-to-image distance and fixed first-to-last vertex span of 47.100 mm, the last-vertex-to-image gap increases from 30.088696439 to 35.361655576 mm, a whole-lens extension of 5.272959138 mm. The close object lies 717.538344424 mm before the first vertex. The calculation solves (A + qC)(800 − 47.1 − q) + B + qD = 0 for the near-infinity root, where A, B, C and D describe the paraxial transfer through the lens and q is the final gap. Intermediate positions interpolate the modeled travel; they are not patent-published states. The aberration and pupil results below refer to infinity.

## Aperture, Field and Physical Geometry

The source and probable product state f/1.5. At infinity, exact axial-marginal calibration places the inferred iris radius at 10.919548871 mm, for a nominal entrance beam radius of 20.001001329 mm. The corresponding paraxial entrance-pupil radius is 20.131309898 mm and Gaussian f-number is approximately 1.490290604. That marginal-versus-paraxial distinction is disclosed; calibration is not independent proof of an exact paraxial factory f/1.5 pupil.

No numerical optical clear diameters are published. Initial clear-arc ratios were read from the source schematic, distinguishing the reduced S7 cap from its shoulder. The initial inferred schedule was insufficient for the declared nominal axial beam. The adopted schedule uses the smallest 0.01 mm outward-rounded axial design-beam floors, retaining equal rims where the diagram supports a shared envelope. The final S1–S12 semi-diameters are 20.01, 20.01, 19.43, 19.43, 17.90, 17.90, 10.93, 11.53, 11.53, 11.50, 11.50 and 11.50 mm. This is an optical reconstruction hypothesis, not a source dimension or a fit to off-axis MTF.

At infinity, the nominal axial design beam clears the modeled apertures at f/1.5, 2, 2.8, 4, 5.6, 8, 11 and 16. The viewer's broader pupil convention retains ordinary clipping at all eight settings, so full-pupil transmission is not established. The stopped-down openings are modeled settings, not separate source prescription rows. Iris radius scales from the wide-open physical opening by 1.5 divided by the selected f-number; separately calibrating each aperture to its exact marginal ray defines a different convention.

The minimum shared-band glass thickness is 0.900 mm, the largest spherical rim angle is approximately 44.478456°, and the maximum physical air-gap sag fraction is 0.765841352. These dimensions satisfy the normal geometry limits without a gap-sag override or rim trimming. The unequal-rim conical/cylindrical joins are modeled boundaries, not recovered mechanical barrel shoulders.

The source heading and product specify a 28° full field, conventionally 14° half-field. Figure 2 plots extend to 15° labels. These are distinct field limits. At the infinity Gaussian image plane their exact-chief radial heights are about 14.784149840 and 15.839221641 mm. The canonical 18×24 mm half-frame corner has radius 15 mm and maps to approximately 14.204115246°. The calculated 21.311905° half-field is a broader numerical diagnostic boundary, not a published product coverage claim.

At f/1.5, sampled transmitting rays reach the axis, 14°, 15° and the broader diagnostic boundary. Nonzero geometric coverage does not establish photometric throughput or zero vignetting. Independent sphere-intersection calculations agree with the modeled transmission decisions. Pre-entry misses intersect the complete front sphere outside the clear rim; they do not establish an internal tracing failure.

Historical infinity calculations also found no wrong-material or backward-image path through the modeled glass and air, including the final image transfer. Separate complete-front-cap scans found one transmitting chief-ray branch at each sampled condition. These finite samples do not establish continuous coverage of every ray or describe the added finite-focus state.

## First-Order Properties and Published Aberrations

The literal prescription gives EFL 100.005006645 and BFD 50.147827398 normalized units. The scaled EFL/BFD are 60.003003987 and 30.088696439 mm. Two independent arithmetic paths, reduced-angle matrices and scalar rays, agree. The principal-plane offsets are H1=+25.261622988 mm from the first vertex and H2=−29.914307548 mm from the last. For the declared iris, paraxial entrance- and exit-pupil locations are +37.881738034 mm from the first vertex and −19.487258648 mm from the last.

The three source conditions hold without fitting: r7=26.0 exceeds 0.23f=23.0; (f/r11)(n7−n6)=0.332173913 exceeds 0.1; and n4=1.7552 exceeds 1.65. The separate centering expression |d8+r9−r8|/|r8|=0.104408353 exceeds 0.01. The absolute values and the distinction between optical conditions and a manufacturing alternative are retained.

Page 2 supplies a complete twelve-row, five-column Seidel table. It uses Berek f=1 normalization, distinct from the prescription's f=100. Displayed row sums are 0.07478970, 0.090381, 0.016285, 0.2060 and 0.25482, while printed totals are 0.07493, 0.09037, 0.01640, 0.2060 and 0.2550. Their differences remain explicit and are compatible with the summed half-last-place arithmetic envelopes. The plane-interface Petzval entry is exactly zero from the source geometry, not a ±0.5 rounding allowance inferred from the printed “0.”.

All twelve Petzval entries agree with independent calculations within their printed precision; the scaled Petzval sum is 0.003433175716 mm⁻¹. For the other four coefficient columns, only the printed values and their arithmetic sums are established. Their complete Berek convention and source stop remain unknown, so full third-order reproduction is unresolved. The fifth angular glyph remains uncertain in the source scan.

Historical infinity MTF calculations comprise 128 reference-line field results and three separately labeled approximate-photopic fields with converged status and no ray failures. They cover both iris conventions, both Gaussian and best-axial planes, the canonical frame and both source field limits. The convergence band is 50 lp/mm; among the sampled frequencies 0, 20, 40 and 80 lp/mm, 40 lp/mm is the highest within that band. Of the 128 reference fields, 93 also converge through 80 lp/mm; the other 35 stop at 40 lp/mm, so their optional 80 lp/mm ordinates are not independently converged. At nominal f/1.5 the separate best-axial shift is about −0.041054 mm; it does not replace the Gaussian plane. The original has aberration plots, not a measured product MTF specification. Calculated curves are not factory performance measurements.

A separate infinity calculation uses the nominal launch beam and the viewer's iris scaling at 0, 20, 40 and 50 lp/mm, f/1.5, 2.8, 8 and 16, five format-height fractions and both image-plane conventions. All 40 fields converge through 50 lp/mm with no ray failures or unknown flux. This supports those sampled 50 lp/mm ordinates, not every optional 80 lp/mm ordinate in the broader calculation or the added finite-focus state.

## Sources

1. JP S38-9224 B, three-page national publication: page 1 cover, description and prescription; page 2 Seidel table, centering discussion and claim; page 3 Figures 1–2.
2. [Ponder & Best Olympus dealer literature](https://www.pacificrimcamera.com/rl/01029/01029.pdf), complete retained 14-page PDF: page 6 / B-6, May 1968, lower-right 60 mm f/1.5 section and stock 18-9202. Mixed dates elsewhere in the PDF are not attributed to this sheet.
3. [Olympus fourteen-lens manufacturer guide](https://www.cjo.info/assets-content/classic-analogue-cameras/olympus-pen-f-literature-archive/docs/brochure--olympus-pen-f-guide-to-interchangable-lenses--late-ish-14-lenses.pdf), complete retained four pages: page 3 Pen FT heading and 60 mm row; page 4 literal imprint. Collector filename chronology is not treated as a manufacturer publication date.
4. [Miyata, Yanagawa, Noma and Hayamizu, “Reflecting Microscope Objectives”](https://doi.org/10.11470/oubutsu1932.27.762), Applied Physics 27(12), 762–766, 1958: bilingual primary bylines and Olympus affiliation on the first page support the inventor's romanization only, not this lens's prescription.
