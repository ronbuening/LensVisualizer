# Continuous-zoom review, 2026-10-23

Status: candidate awaiting independent repository integration and verified cloud delivery. Not deployed or manufacturer-validated.

US6246529B1 Example5, PDF17 col3 and Fig25/PDF15: G1 first moves imageward then objectward. Keep D10 and rear image distance piecewise linear and solve D7. The source-required reversal emerges near normalized zoom0.794. This is one constrained inferred visualization path, not unique recovered cam dimensions. No finite focus reconstructed.

All added zoom nodes are explicitly unpublished. Native source stations, fixed radii, thicknesses, glass/media and asphere coefficients are retained, as are native image-plane residuals. Interpolating those residuals does not erase source rounding or claim perfect manufacture. Piecewise path slopes may have corners; this is a continuous visualization reconstruction, not a mechanically C1 factory cam. Intermediate EFL labels use the computed prescription EFL.

Full diffraction MTF uses the unmodified engine with maxGridSize256, five fields and requested0–100lp/mm at21 zoom states, plus five off-node zoom states. Returned per-field trustworthy bandwidths govern; no blanket100lp/mm claim. Photopic and finite-conjugate unavailability is retained where the source cannot support them. Exterior aperture clipping is not a failed cemented interface. Raw diagnostics accompany this review.

The original analysis/audit below records the historical source-station-only model. Its linear-interpolation limitations are superseded ONLY by this explicitly inferred variant and the current test outputs; source identity and uncertainty statements remain applicable.

# smc PENTAX-FA 20–35mm F4 AL: selected patent model

## Patent Reference and Design Identification

**Patent:** US 6,246,529 B1  
**Inventor:** Takayuki Sensui  
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha  
**Filed:** 1999-10-26  
**Granted:** 2001-06-12  
**Priority:** 1998-10-26  
**Title:** Wide-angle zoom lens system  

The numerical source is Table 5 in the selected grant, PDF page 19, printed column 8, with aspheric coefficients continuing on PDF page 20. The source identity matters: its surface-7 spacing is 14.851 mm at wide and 1.200 mm at tele. Values from a related publication are not interchangeable with these rows.

The association with the production FA 20–35mm F4 AL is supported by the convergent focal range, f/4 aperture, ten physical elements in eight air-separated groups, and two aspherical elements including a hybrid element. Ricoh's product page independently describes those production features and floating zoom. The selected prescription's exact production identity is not manufacturer-confirmed. The patent dates are not a verified product-release date. The current manufacturer's 70–44° view-angle range is presented for a digital format and is not the source's full-frame half-field range of 47.8–32.6°.

The numerical model retains the two native infinity endpoints. Its intermediate states use an expressly approved linear approximation. The patent describes a first-group reversal but does not publish enough numerical stations to recover that trajectory. Accordingly, intermediate shapes, image-plane positions and displayed focal-length labels must not be treated as a reconstruction of the production zoom cam.

## Optical Architecture

The three functional groups have negative–positive–positive power. G1 spans surfaces 1–7 and has computed standalone focal length −25.289 mm; G2 is the cemented pair at 8–10, +93.811 mm; G3 spans 11–19A, +43.180 mm. These are group powers in air at the native d-line. The front negative group and relatively long rear clearance are characteristic of a retrofocus wide-angle architecture. Group sign alone does not establish a particular aberration contribution.

There are ten physical lens elements and eight air-separated groups. Eleven material entries are necessary because the glass substrate L2 and its resin layer L2R have different native indices. Surface 4 is their shared material boundary; 5A is the aspheric resin-to-air boundary. Collapsing these two media would change the prescription. The other cemented pairs are L4/L5 and L7/L8.

With the image plane used as the fixed reference, the endpoint front-vertex displacements are +4.486 mm for G1, −9.165 mm for G2 and −16.250 mm for G3, with positive direction toward the image. These are endpoint differences only. The source says G1 first moves toward the image and then reverses toward the object near tele (PDF page 17, column 3; Figure 25 on PDF page 15). Figure 25 has W/T labels and a schematic trajectory, without dimensional intermediate constraints. Linear interpolation of the three tabulated distances therefore misses the known reversal.

The approximation also loses infinity focus between the endpoints. At normalized zoom position 0.5, the calculated EFL is 25.507 mm and the prescribed rear image gap exceeds the paraxial infinity BFD by +2.098 mm. Over the 21-position verification grid, the largest sampled displacement is +2.135 mm. No compensating focus motion has been added. This substantial defocus limits intermediate optical interpretation even though the surfaces remain geometrically valid.

## Element-by-Element Analysis

The focal lengths below are calculated for each material segment as an isolated thick lens in air using its native front and rear curvatures. For a cemented pair or the hybrid layer, these are descriptive component powers, not the net assembly power or its in-situ aberration contribution. All values use the final data, with paraxial power taken at the native d-line.

### L1 — Negative Meniscus

nd = 1.77250, νd = 49.6. Glass: Unmatched (patent coordinate; supplier unconfirmed). f = -35.1 mm.

The first negative meniscus starts G1. Its rear surface is more strongly curved than its front surface, giving negative standalone power. The inferred optical clear radius excludes the non-optical blank rim shown schematically; neither the patent nor the product page supplies a clear-aperture measurement for this surface.

### L2 — Negative Meniscus

nd = 1.80400, νd = 46.6. Glass: Unmatched (patent coordinate; supplier unconfirmed). f = -47.2 mm.

This negative meniscus is the glass substrate of the hybrid element. It remains a separate material segment from L2R. The native shared interface at surface 4 refracts from substrate into resin rather than into air, so its isolated air power is not the power of the bonded assembly.

### L2R — Negative Meniscus

nd = 1.53256, νd = 45.9. Glass: Unmatched (patent resin; supplier unconfirmed). f = -183.8 mm.

The 0.280 mm axial resin layer carries aspheric surface 5A. Its native index and Abbe number are retained without assigning a catalog glass or polymer brand. The quoted standalone power is a mathematical air-bounded comparison; the layer is physically bonded to L2. The aspheric departures affect off-axis and finite-height tracing, while the listed paraxial power depends on vertex curvatures.

### L3 — Positive Meniscus

nd = 1.84666, νd = 23.8. Glass: Unmatched (patent coordinate; supplier unconfirmed). f = +76.9 mm.

This positive meniscus completes G1. Its positive component power partially offsets the preceding negative components, while the assembled group remains negative. The variable air gap immediately after surface 7 separates G1 from G2.

### L4 — Biconvex Positive

nd = 1.51742, νd = 52.4. Glass: Unmatched (patent coordinate; supplier unconfirmed). f = +33.0 mm.

The positive biconvex member begins the G2 cemented pair. Its relatively lower index and higher Abbe number contrast with L5. The actual shared surface at 9 must be counted once when computing the pair; summing isolated element focal lengths would not give its net power.

### L5 — Negative Meniscus

nd = 1.80400, νd = 46.6. Glass: Unmatched (patent coordinate; supplier unconfirmed). f = -50.2 mm.

The negative meniscus is cemented to L4 and completes G2. The paired index/Abbe contrast provides a conventional chromatic balancing degree of freedom, but no isolated aberration budget is available. G2 remains weakly positive as an assembly. Surface 10 is followed by the variable gap to the physical stop.

### L6 — Plano-convex Positive

nd = 1.61772, νd = 49.8. Glass: Unmatched (patent coordinate; supplier unconfirmed). f = +53.8 mm.

The plano-convex positive element lies immediately behind the stop, with the native stop-to-surface-11 distance retained. Its positive power is part of G3; its location near the stop alone does not establish a unique correction assignment.

### L7 — Biconvex Positive

nd = 1.48749, νd = 70.2. Glass: Unmatched (patent coordinate; supplier unconfirmed). f = +26.0 mm.

This biconvex positive member is cemented to L8. Its relatively low index and high Abbe number distinguish it from the dense, more dispersive negative partner. The pair is one air-separated group, with the common boundary at surface 14.

### L8 — Biconcave Negative

nd = 1.80610, νd = 40.9. Glass: Unmatched (patent coordinate; supplier unconfirmed). f = -25.5 mm.

The negative component shares surface 14 with L7. Its large negative isolated power nearly balances the positive component at the level of standalone powers, but the actual compound power must include the common interface and thicknesses. Neither secondary-spectrum performance nor a supplier identity follows from these two coordinates.

### L9 — Negative Meniscus

nd = 1.84666, νd = 23.8. Glass: Unmatched (patent coordinate; supplier unconfirmed). f = -49.4 mm.

This negative meniscus is a separate air-spaced member within G3. Its native material coordinate is the same as L3, without proving a shared historical melt or supplier. It precedes the final aspheric element and contributes another negative-power degree of freedom within the net positive rear group.

### L10 — Positive Meniscus

nd = 1.58913, νd = 61.2. Glass: Unmatched (patent coordinate; supplier unconfirmed). f = +44.0 mm.

The positive meniscus terminates the optical train. Its rear surface 19A carries the second asphere; the published back focal distance is measured from that vertex to the image plane. The model does not treat the blank D19 table entry as zero spacing.

## Glass Identification and Selection

The native palette is listed below. Raw manufacturer catalogs from CDGM, Hikari, Hoya, Ohara, Schott and Sumita were searched, and candidate coordinates were rechecked against the original catalog records. Coordinate proximity identifies possible equivalents only. No supplier, melt, C/F/g index, Sellmeier model or anomalous-partial-dispersion value was adopted from proximity. All material identities remain unmatched.

| Material entries | nd | νd | Interpretation |
|---|---:|---:|---|
| L1 | 1.77250 | 49.6 | Native patent coordinate; supplier unresolved |
| L2, L5 | 1.80400 | 46.6 | Native patent coordinate; supplier unresolved |
| L2R | 1.53256 | 45.9 | Unidentified hybrid resin |
| L3, L9 | 1.84666 | 23.8 | Native patent coordinate; supplier unresolved |
| L4 | 1.51742 | 52.4 | Native patent coordinate; supplier unresolved |
| L6 | 1.61772 | 49.8 | Native patent coordinate; supplier unresolved |
| L7 | 1.48749 | 70.2 | Native patent coordinate; supplier unresolved |
| L8 | 1.80610 | 40.9 | Native patent coordinate; supplier unresolved |
| L10 | 1.58913 | 61.2 | Native patent coordinate; supplier unresolved |

The L4/L5 and L7/L8 pairs combine positive and negative components with differing dispersion. This is consistent with chromatic balancing, but individual chromatic contributions have not been isolated. Any runtime color trace using only nd and νd is an Abbe-based approximation. The source diagram labels d, g and C lines; the numerical wavelengths d 587.6, C 656.3, F 486.1 and g 435.8 nm are adopted conventions. They are not numerical wavelength measurements printed in the selected source. No apochromatic or anomalous-dispersion performance claim is established.

## Focus Mechanism

The source provides infinity-focus zoom endpoints only. NO_INTERNAL_RECONSTRUCTION is the applicable focus scope. The data's closeFocusM = 1e15 is a UI infinity sentinel, not the production minimum focus distance. Ricoh specifies a marketed 0.3 m minimum distance and maximum magnification 0.16, but those facts do not supply internal close-focus spacings. Both focus-control endpoints retain the same infinity geometry; no focus travel or retail-MFD-derived reconstruction is present.

Zoom interpolation changes D7 from 14.851 to 1.200 mm, D10 from 8.485 to 1.400 mm and the final image gap from 36.90 to 53.15 mm. The fixed stop-to-surface-11 gap is 1.700 mm. The approved linear path is nonunique relative to the sparse source evidence and cannot model the stated G1 reversal. Intermediate defocus remains visible in the optical model and must be considered when inspecting ray convergence.

## Aspherical Surfaces

The patent writes the conic radical using 1 + K, so its K maps directly to the runtime convention. With radial height h in mm and vertex curvature C = 1/R, the sag is the conic sag plus A4 h⁴ + A6 h⁶ + A8 h⁸; unlisted coefficients are zero (PDF page 17, column 4; Table 5 continuation, PDF page 20, column 9).

| Surface | Element | K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) |
|---|---|---:|---:|---:|---:|
| 5A | L2R, resin layer | −1.00 | −0.9670e−5 | −0.1870e−7 | −0.8470e−10 |
| 19A | L10 | 0.00 | +0.2530e−5 | −0.6230e−8 | −0.2970e−9 |

At the inferred 14 mm radius of 5A, the polynomial terms lower sag by 0.637284 mm relative to its K = −1 conic base. At the inferred 7.9 mm radius of 19A, their net contribution is +0.003834 mm relative to its spherical base. These are computed geometric departures at inferred clear radii, not published manufacturing tolerances or a measured aberration improvement. The source and manufacturer description support a hybrid asphere and a glass-molded asphere, without identifying resin chemistry or a catalog melt.

## Conditional Expressions

The source specifies 0.36 < (D2S − D2L)/(fL − fS) < 0.7 and 0.25 < f23S/f2 < 0.5. Here D2 includes D10 and the fixed stop-to-next-element gap, which cancels in the endpoint difference. The calculated values are 0.528337 and 0.360026, respectively; both strict inequalities pass.

The first printed summary is 0.529. The residual is −0.000663, which exceeds the strict half-unit tolerance of 0.0005 for a three-decimal printed value. That raw comparison remains FAIL. The rounded-input interval [0.527868852459, 0.528805970149] overlaps the printed summary interval. A separate independent shared-prescription precision witness also fits both endpoint EFL/BFD summaries and this condition simultaneously within every source half-unit interval; the condition evaluates to 0.528510004792. This establishes numerical compatibility, not the actual unrounded source design or exact literal equality. The second summary, 0.360, agrees within the same half-unit rule. The two source tests and the printed-summary comparisons are kept separate.

## Verification and Model Limits

Final native paraxial EFLs are 20.603 and 34.011 mm; BFDs from surface 19A are 36.909 and 53.149 mm. The supplied image gaps remain 36.90 and 53.15 mm. Small native endpoint differences are within the recorded source-precision sensitivity envelopes; those allowances do not cover the much larger intermediate interpolation defocus.

No surface semi-diameters or physical iris diameter are published. The adopted clear radii combine original Figures 17/19 with the exact full nominal axial and source/format-chief ray envelope. Corrected exterior apertures have at least 8% clearance over that required envelope, within native spherical/aspheric domains and the unchanged 0.90 gap-sag policy. Front surface 1 has a 17.6 mm clear radius; surface 2 has 15.5 mm. Separate front/rear clear radii are retained where the ray envelope differs. The existing runtime's documented from-nominal-fno model traces each native f/4 entrance radius to the stop, yielding inferred iris radii of 6.781222 and 8.753142 mm. Intermediate iris radii interpolate. This is an aperture model, not a recovered mechanical iris schedule.

The pinned runtime's actual defaults use six axial fractions and five off-axis fractions. Its calculated baseline half-field is 42.612331°, with a 0.6 default field fraction; these defaults were not replaced by the source field. Across 21 zoom positions and both infinity-sentinel focus settings, the state-native renderer needs no hidden trim, no default ray first clips at a cemented interface, and every state retains its axial bundle. At tele, one exterior off-axis default ray clips. Physical clipping remains distinct from ghost continuation.

Separate source-field tests use 0%, 60% and 100% of each published endpoint half-field and aim the rays at the physical stop. All six axial rays survive at each native endpoint. The five off-axis samples have 5/5 and 1/5 survivors at wide 60% and 100% fields, and 4/5 and 4/5 at tele. The full source-field chief survives at both endpoints. The inferred-aperture model still does not establish transmission of every sampled off-axis pupil ray. These diagnostic failures are preserved; they are not a universal all-pupil acceptance requirement, nor evidence of validated production vignetting. Independent conic/polynomial intersections reproduce the runtime launch outcomes and physical stop aim within the usable aperture domain. Both full nominal f/4 axial boundary rays and both actual format-corner chiefs clear the final apertures across all 21 zoom states. The actual application taxonomy defines a 43.3 mm format diagonal, or 21.65 mm corner radius; this is distinguished from an exact 36×24 mm diagonal. Its accurately solved endpoint corner fields are 47.831725° and 32.660354°. These field angles and current-state optical focal lengths are solved from the geometry, rather than copied from interpolated UI labels.

The present delivery is a user-approved linear zoom approximation with the last unqualified gate still READY_FOR_DATA. The normal reversal-representation and intermediate-parfocality checks remain failed. Fresh source-first independent review of the corrected pair confirms the native optical mapping, required aperture and format coverage, geometry, and these qualifications. The reviewer recomputed the frozen source baseline, checked all 21 zoom states and both infinity-sentinel focus controls, and retained the two failed normal motion checks. integrationStatus remains INTEGRATION_PENDING. No full application build, corpus integration, typecheck or publication is implied by the targeted calculations.

## Sources and References

1. [US 6,246,529 B1, Wide-angle zoom lens system](https://patents.google.com/patent/US6246529B1/en), original selected PDF enclosed. PDF 1: bibliographic record; PDF 11–12: Figures 17/19 and corresponding endpoint aberration diagrams; PDF 15: Figure 25 motion sketch; PDF 16–17: conditions, group motion and conventions; PDF 19–20: Table 5 prescription/aspheres and Table 7 condition summaries.
2. [Ricoh Imaging, smc PENTAX-FA 20–35mm F4 AL](https://www.ricoh-imaging.co.jp/english/products/lens/k/wide/smcpentax-fa20-35/), reviewed 2026-10-03. Production specifications and construction description support correlation, not exact numerical identity.
3. Primary manufacturer catalog byte identities, download URLs, raw coordinate excerpts and residuals are preserved in evidence.json. Those catalogs are used for material-identity review only; no catalog spectrum has been substituted into the prescription.

Current frozen-candidate results: 2005 dense geometry states, zero geometry failures or image-plane inconsistency flags. 5555 default UI rays, 170 clips, all remaining clips on exterior surfaces; sphere-root proofs distinguish out-of-rim misses from in-aperture intersection failures. Maximum engine image-plane offset 0.009248900752240274mm (source/runtime spectral conventions retained). Full/reference and off-node outcomes are in VALIDATION_SUMMARY.json; only returned bands are trustworthy.
