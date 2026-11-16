## Patent Reference and Design Identification

**Patent:** JP2003185916A, Example 1, Table 1 and Figure 1.
**Inventor:** Hideyuki Suga
**Applicant:** Mamiya-OP Co., Ltd.
**Filed:** December 18, 2001
**Published:** July 3, 2003. Original J-PlatPat numerical tables recovered November 16, 2026. This is a neutral representative 118.86 mm F3.99 macro patent model, not an established MF or AF 120 mm retail prescription.

[Patent text](https://patents.google.com/patent/JP2003185916A/en). Original Tables 1–5 are archived from [J-PlatPat](https://www.j-platpat.inpit.go.jp/), search publication 2003-185916. Source full field is 32 degrees, BFD 66.11 mm, nine elements in eight groups. A period maker overview distinguishes MF 120/4 (33 degrees, 40 cm) from AF 120/4 (32 degrees, 37 cm), both nine/eight: [maker overview](https://www.captureintegration.com/download/PhaseOne_Lens_Overview_3007_web.pdf). Matching count and field alone do not establish factory identity. No mount asserted; 645 coverage is a qualified format inference.

## Optical Architecture

Three powered groups, positive/positive/negative, with the middle group internally split for floating focus. Three singlets precede the stop; a cemented pair follows, then four singlets. Stop S7 is exactly 5.70 mm after S6 and 5.70 mm before S8. Literal spherical radii, glass indices, glass thicknesses, fixed axial air spaces and source plane retained. D10 follows the printed finite rows; D12 is explicitly re-solved below. No geometry override.

## Element-by-Element Analysis

| Element |      nd |   Vd | Structure      |
| ------- | ------: | ---: | -------------- |
| L1      | 1.61800 | 63.4 | Singlet        |
| L2      | 1.49700 | 81.6 | Singlet        |
| L3      | 1.57501 | 41.5 | Singlet        |
| L4      | 1.54814 | 45.8 | Cemented to L5 |
| L5      | 1.61800 | 63.4 | Cemented to L4 |
| L6      | 1.61800 | 63.4 | Singlet        |
| L7      | 1.75520 | 27.5 | Singlet        |
| L8      | 1.76200 | 40.1 | Singlet        |
| L9      | 1.65100 | 56.2 | Singlet        |

## Glass Identification and Selection

Literal nd/Vd retained. Trade glass and melt identities unknown; chromatic dispersion is approximate from nd/Vd, not measured full spectral data. No catalog substitution.

## Focus Mechanism

This refinement enables the patent's nominal 1:2 and 1:1 states, retaining infinity unchanged. Paragraph 0016 defines WD as object-to-first-surface distance. The rear negative group remains fixed relative to the image plane; front G1/G2 extend toward the object. D10 first decreases then increases, preserving the floating-focus reversal drawn in Figure 1.

| State    | Printed WD (mm) | Solved WD (mm) | D10 retained (mm) | Printed D12 (mm) | Solved D12 (mm) | Solved object–image distance (m) |
| -------- | --------------: | -------------: | ----------------: | ---------------: | --------------: | -------------------------------: |
| Infinity |        infinity |       infinity |              0.70 |             3.00 |            3.00 |                         infinity |
| 1:2      |             297 |  296.876892568 |              0.20 |            33.57 |    33.674328998 |                      0.461331222 |
| 1:1      |             178 |  177.957552104 |              0.70 |            64.07 |    64.362725269 |                      0.373600277 |

The literal finite rows predict image distances 66.281441 and 66.635645 mm, respectively, instead of the retained 66.11 mm source back focus. At the authored plane their paraxial magnifications are −0.498297 and −0.995230. With the owner's authorization, D12 and WD were jointly solved for paraxial focus and exact nominal magnifications −0.5 and −1. D12 changes are +0.104329 and +0.292725 mm. Both derived WD values round to the patent's printed integer WD, but the D12 changes exceed its last printed digit: this is a disclosed modeled refinement, not a claim that every discrepancy is source rounding or that the new gaps are literal factory positions. All original values remain in this table and the archived extraction.

Source-derived focus nodes are marked published and carry finite conjugates with explicit printed-versus-solved provenance. No `sourceMagnification` override is used because the source actually prints WD. Finite optical audit finds essentially zero paraxial defocus at both solved states, with working f-numbers 5.355775 and 6.719705. The required close-focus scalar is the computed 0.373600277 m object-to-image distance, not an asserted retail MFD.

For intermediate positions D10 is a piecewise-linear estimate in the normalized inverse-distance coordinate, reversing at the source half-magnification node (t=0.809830898). D12 was solved independently at 125 adaptive control points; only infinity and the two source finite positions are published. This is not a recovered mechanical cam. A 1,000-point inter-node sweep found maximum residual image defocus 0.004880 mm. Unsupported intermediate finite-MTF certification is not added. The source plane is not moved to maximize contrast: residual spherical aberration yields real-ray best-focus diagnostics of −0.163010 mm and −0.400066 mm at the two finite states.

Independent Gaussian infinity EFL 118.864380 mm and BFD 66.105674 mm match the rounded source 118.86/66.11. Infinity's −0.004326 mm image-plane residual is unchanged.

## Aspherical Surfaces

None. All refracting surfaces spherical.

## Validation and Qualifications

Fresh refinement checks against engine snapshot f5b456fec7b69184844078f6ec6b1ac132f8ec58:

- Canonical build and full surface geometry validation pass without overrides or geometry changes. Exact equality checks preserve all glass records, radii, semidiameters and surface media from the prior delivery.
- Both declared finite conjugates pass strict audit as consistent at the authored plane; measured paraxial magnifications are −0.500000000 and −1.000000000.
- Twenty-one reference-spectrum geometric MTF fields (seven each at infinity, 1:2 and 1:1) converge through 40 lp/mm with no failed or unaimed rays. The fields include the inferred 645-format corner, not a claim of source-measured performance.
- 324 focus states show zero render trimming and fixed rear-group/image separations. Across those states 41,796 iris-radius samples stay between the adjacent glass surfaces. Infinity's traced axial f-number is tested separately by the aperture audit. Finite near-rim axial rays are also checked.
- 1,000 intermediate-focus samples quantify the interpolation residual independently of the runtime display label. Maximum absolute paraxial image-plane residual is 0.004880 mm. Only the published finite stations enable source-certified finite MTF.

Clear semidiameters remain estimated, not factory/source rims: per non-stop surface 19/19/18/18/16/16/16/16/16/17/17/20/20/22/22/24/24 mm. Off-axis illumination depends on those estimates and clipping is not removed artificially. Literal nd/Vd imply approximate dispersion, not measured full spectral glass data. MTF is geometric simulation, not measured or diffraction MTF; focused checks are not full-app or browser QA. Remaining integration checks are recorded in the package's validation record.

Inherited source-field result, not rerun as a fresh refinement claim: at the unchanged infinity prescription a 16-degree chief ray mapped to 34.030182 mm height, and reference geometric MTF converged through 40 lp/mm with 12,332 valid, 560 blocked, zero failed or unaimed rays. The 645-format infinity corner lies outside the published 16-degree half-field. The archived original source-field result therefore remains distinct from the fresh format-corner tests.
