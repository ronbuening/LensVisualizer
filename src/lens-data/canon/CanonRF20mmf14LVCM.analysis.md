# Canon RF 20mm f/1.4 L VCM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2025/0389929 A1\
**Application Number:** 19/243,548\
**Filed:** June 19, 2025\
**Published:** December 25, 2025\
**Priority:** JP 2024-101168, June 24, 2024\
**Inventor:** Takahiro Saito\
**Applicant:** Canon Kabushiki Kaisha (Canon Inc.)\
**Title:** Optical System and Imaging Apparatus Including Same\
**Example details:** Fig. 3, PDF p. 4; aberrations Fig. 4A/B, p. 5; prescription and single-lens data pp. 28–30; Tables 1–2 pp. 38–39.

The selected Numerical Example 2 is a three-group fast wide-angle prime with source f = 20.60 mm and F1.46. The 16 explicitly modeled optical media form 11 air-separated groups. One is a 0.70 mm bonded high-partial medium. The existing correlation with the marketed RF 20mm F1.4 L VCM uses the following convergent points:

1. The focal length, aperture and inner-focus positive L2 architecture correspond to the marketed 20 mm f/1.4 lens.
2. The source's 16 optical media can correspond to the prior production count of 15 elements in 11 groups if the thin bonded layer is not counted separately in that marketed count. This is a counting interpretation, not manufacturer confirmation of the exact prescription.
3. The low-dispersion positions, two aspheric elements and high-partial layer correspond to the prior production Super UD, UD, GMo and BR descriptions. Those product terms do not prove the source media's chemistry or manufacturing process.
4. The June 2024 priority and group layout support the family correlation. The source finite state differs from the marketed 0.20 m focus endpoint and cannot establish the production cam.

Earlier shape/material work dated July 4, July 30 and September 24, 2026 remains historical coverage in the audit. The October 30 follow-up directly reinspects this original publication to correct the native outline, selected printed precision and partial-dispersion convention. No other publication or numerical example supplies replacement prescription data.

## Optical Architecture

L1 is positive as a group despite its three consecutive leading negative lenses. It contains G1–G10, the stop, cemented D1 and the three-medium D2. L2 contains G11–G14 and moves toward the object during close focusing. L3 is the fixed rear negative doublet G15/G16. The source group focal lengths are +45.15 / +32.25 / −85.88 mm; the literal prescription computes +45.144174 / +32.253875 / −85.883306 mm. The infinity d-line EFL is 20.597916 mm and BF 18.435195 mm, against printed 20.60 and 18.44. Source total track is 117.50 mm. BFD/EFL below one does not meet the strict BFD-greater-than-EFL retrofocus definition.

The stop remains inside L1 at surface 14, authored as STO. The selected table lists no optical filter, rear plate or additional hybrid asphere. Paragraph 0175 on PDF p. 26 excludes optical filters, faceplates and similar camera-side members from its reported length. None is invented in this prescription; the last 18.44 mm is the source's air gap. General plastic/organic/glass options at ¶0172 do not identify the chemistry of this selected high-partial medium or establish an aspheric replica layer.

## Element-by-Element Analysis

Every source medium was checked, including G9's bonded layer. The table uses explicit d-line coordinates; the compatible curve column identifies the currently selected spectral proxy, without historical supplier, melt, chemistry or manufacturing proof.

| Medium | Source nd / νd  | Published absolute θgF | Current compatible curve | Optical role                         |
| ------ | --------------- | ---------------------- | ------------------------ | ------------------------------------ |
| G1     | 1.60311 / 60.60 | Not printed            | S-BSM14                  | Front negative meniscus              |
| G2     | 1.58313 / 59.40 | Not printed            | J-SK12                   | Aspherical front negative meniscus   |
| G3     | 1.43875 / 94.66 | Not printed            | S-FPL55                  | Low-dispersion front negative        |
| G4     | 1.75500 / 52.30 | Not printed            | N-LAK33B                 | Positive member of D1                |
| G5     | 1.85478 / 24.80 | 0.6122                 | S-NBH56                  | Negative member of D1                |
| G6     | 1.90043 / 37.40 | Not printed            | TAFD37A                  | Strong equi-biconvex positive        |
| G7     | 1.54072 / 47.20 | Not printed            | S-TIL2                   | Weak negative before stop            |
| G8     | 2.00069 / 25.50 | Not printed            | TAFD40                   | High-index positive member of D2     |
| G9     | 1.57060 / 20.08 | 0.7782                 | Unresolved               | Thin high-partial member of D2       |
| G10    | 1.66565 / 35.64 | 0.5824                 | Unresolved               | Negative member of D2                |
| G11    | 1.49700 / 81.65 | Not printed            | J-FK01A                  | Low-dispersion focus positive, D3    |
| G12    | 1.77047 / 29.74 | 0.5951                 | NBFD29                   | Focus negative, D3                   |
| G13    | 1.49700 / 81.65 | Not printed            | J-FK01A                  | Second low-dispersion focus positive |
| G14    | 1.80400 / 46.50 | Not printed            | S-LAH65VS                | Double-aspheric focus positive       |
| G15    | 1.59282 / 68.60 | Not printed            | FCD515                   | Positive member of rear D4           |
| G16    | 1.66565 / 35.60 | Not printed            | Unresolved               | Negative member of rear D4           |

D1 combines a positive member and a negative achromatizing member. D2 contains the high-index positive G8, the thin positive high-partial G9 and negative G10. D3 is the leading focus doublet G11/G12, followed by G13 and the double-aspheric G14. D4 is the negative rear group. Their curved bonded interfaces are retained as optical caps, without opaque interface lands. G9 remains a single connected layer between the prescribed curvatures; its sampled minimum edge thickness at the adopted 14.3 mm cap is 0.097327 mm, with the source 0.70 mm center thickness unchanged.

## Glass Identification and Selection

Paragraph 0174, PDF p. 26, explicitly defines d = 587.6, F = 486.1, C = 656.3 and g = 435.8 nm, νd = (Nd−1)/(NF−NC) and θgF = (Ng−NF)/(NF−NC). No individual spectral indices are printed. All media now explicitly use `indexReference: "d"`. The 13 existing compatible curve selections remain unchanged and qualified as spectral proxies. G9, G10 and G16 stay unresolved; G9 is an anonymous high-partial source medium with a BR production correlation, not identified proprietary organic chemistry. G10/G16 do not inherit H-ZBaF4: its published partial dispersion conflicts with G10's printed θgF, and repeating the rounded coordinate does not prove G16's historical identity or precise partial.

Table 2's selected Example 2 column supplies more precise νd for six unambiguously named positions. All are consistent with rounding of the primary surface table: G3/S5 94.66→94.7; G9/S16 20.08→20.1; G10/S17 35.64→35.6; G11/S19 and G13/S22 81.65→81.7; G12/S20 29.74→29.7. The 81.65 values are at the half-step that rounds to 81.7. These are printed precision corrections, without changed nd, R/d or curve selection. G16's primary νd 35.6 stays literal; no unprinted precise value is borrowed from G10.

The four genuine θgF values require conversion to the engine normal, rather than storing the paper's differently defined conditional residual as engine `dPgF`:

| Medium | Absolute θgF | Engine dPgF = θgF − (0.6438 − 0.001682νd) | Paper's printed conditional residual |
| ------ | -----------: | ----------------------------------------: | -----------------------------------: |
| G5     |       0.6122 |                               +0.01011360 |                               0.0000 |
| G9     |       0.7782 |                               +0.16817456 |                             +0.14427 |
| G10    |       0.5824 |                               −0.00145352 |                              −0.0025 |
| G12    |       0.5951 |                               +0.00132268 |                              −0.0047 |

The active runtime normal reconstructs every absolute θgF to floating precision. The paper's conditional values remain source evidence; they are not substituted directly into a different engine normal. Paragraphs 0079 and 0115, PDF pp. 22–23, explicitly discuss anomalous partial dispersion and Table 2 maps these exact positions, supporting the retained patent APD qualification. No catalog-derived individual line override exists or is introduced. The other 12 positions receive no fabricated per-position partial.

## Focus Mechanism

The published endpoints are infinity and the stated β = −0.1 finite row. D18 changes 9.05→7.44 mm and D25 changes 2.20→3.81 mm, moving L2 objectward by 1.61 mm while preserving L1, L3 and the 117.50 mm track. Intermediate focus is linear illustration between these source gaps. The catalog's 0.20 m production MFD is not the actual object plane of focus control 1.

The finite table on PDF p. 29 / printed p. 12 says “First surface from object plane” 300.024 mm. The literal rounded gaps instead give Gaussian first-object distance 182.490667 mm, object-to-image 299.990667 mm and magnification −0.100014. Taking 300.024 mm literally from the first vertex requires a different image gap, 17.701874 mm rather than 18.44, and gives refocused magnification −0.062793. This is an unresolved source reference-plane discrepancy; the near agreement with an image-plane distance does not prove a source correction. All printed focus gaps are retained. Paragraph 0136 also calls L1/L2 stationary after describing L2 motion; the abstract, ¶0032 and Claim 1 identify L1/L3 as stationary. Both qualifications are recorded in `source.errata`.

## Aspherical Surfaces

The standard (1+K) sag equation at ¶0176, PDF p. 26, applies to S4A, S24A and S25A. All three source conic constants and coefficients remain unchanged: S4A has K = −4.88704 and A4–A14; S24A and S25A have K = 0 and A4–A12. No source radius or polynomial was tuned to the drawing. The aspheric shape is established; the GMo production process is a separate correlation.

## Chromatic Correction Strategy

The low-dispersion negative G3 balances color from downstream positive power; low-dispersion positives G11/G13 operate in the moving focus group. The paper explicitly places negative chromatic-correction media in L1/L2 and a high-partial positive medium in a cemented triplet (¶0079–¶0089, ¶0115–¶0122). These prescribed coordinates and genuine θgF values support a chromatic model, while catalog curves supply qualified spectral interpolation. They do not identify proprietary BR chemistry, cement, cure or historical glass melt.

## Native Optical Outline and Retained Constraints

Fig. 3, PDF p. 4 / sheet 3, is a native 2560 × 3300 bilevel raster at approximately 300 ppi. Rotating it preserves native pixels. The 117.50 mm first-vertex-to-image track spans about 1,925 pixels, giving approximately 16.38 px/mm; practical rim uncertainty is ±0.7 mm. Whole-page enlarged renders are magnification, not extra source resolution. The original and final SVG were compared at that axial scale, excluding leaders, stop strokes, group brackets and image-plane ink.

Twenty-six inferred optical caps are corrected to that outline; S2 remains at its prior clear 16.5 mm. The adopted front outer height is 22.65 mm, second-element outer 17.65 mm, G3 14.05 mm, D1 15.55 mm, G6 16.35 mm, G7 15.55 mm, D2 14.3 mm, leading focus D3 12.75 mm, G13 15.25 mm, G14 16.55 mm and rear D4 16.55 mm. S2 outer 22.65 and S4A outer 17.65 are represented by `rimExtensionSd`, retaining their separate clear caps of 16.5 and 15.6. Each source end, concavity and bonded layer/interface was inspected. No opaque bonded block, disconnected wing or inferred cut was added.

A source-like trial S2 optical cap of 17.65 mm was rejected: combined S2–S3 sag is approximately 5.070 mm across only 5.030 mm physical air, exceeding both the physical separation and unchanged 4.527 mm intrusion guard. The current S2 shoulder is cap-anchored, so its exact axial piston differs from the drawing; it does not recover the larger source-like optical cap. The full-cap mismatch is exposed rather than changing R/d or relaxing guards. The rear caps follow the source even though they retain a generic-corner restriction.

## Verification Summary

Surface and image-circle checks pass, and the source-station aperture audit meets its 3% convention tolerance. Current derived iris radius is 12.993901 mm, paraxial F1.46; real collimated rays give EFL/input-diameter 1.525873. Printed F1.46 does not independently establish a physical stop diameter. The nominal paraxial input ray reaches 13.645794 mm at the stop and is distinct from the live iris. All controls remain unchanged.

The source evaluates image height 18.90 mm. The table's 42.54° agrees with its paraxial field convention, while Fig. 4A's 46.4° agrees with the actual infinity chief root 46.402290°. Fig. 4B prints 46.7° for its finite plot; the current Gaussian finite inverse at the same 18.90 mm gives 47.244501°. These source/model conventions remain distinct; the focus reference discrepancy is not fitted away. The generic 21.65 mm corner needs 51.624349° at infinity and clips S28 (16.855223 mm height versus cap 16.55). The field audit reaches 21.262186 mm, 98.209% of the generic corner, while the source boundary remains clear. Its image-circle heuristic result is not full corner clearance.

An actual finite-object grid uses 101 focus states × three fields × 97 current-iris pupil samples: 29,391 rays, 100 positive Gaussian finite controls, no virtual controls, and collimated infinity. All axial bundles clear. The single restricted chief is the infinity generic-corner probe; there are 7,214 ordinary pupil clips, 204 independently bounded first-surface cap misses and 274 bounded next-surface S2 misses, without unexplained interior failure or unaimed rays. Ordinary finite object heights are scaled by paraxial magnification, not solved to force a distorted image edge.

Separate positive-distance diagnostics preserve the disputed reference alternatives: image-plane 300.024/focus gives 29,391 rays, 7,280 ordinary clips and 498 bounded S1/S2 cap misses; literal first-vertex 300.024/focus gives 29,391 rays, 7,312 ordinary clips and 596 bounded misses. Each has clear axial rays and the same infinity generic-corner chief restriction. These are supplements, not published intermediate conjugates or a source correction.

A stronger inverse image-edge supplement first solves unclipped finite chief geometry at each of the 100 nonzero focus controls, targeting both 18.90 and 21.65 mm. All 200 roots converge (maximum residual 0.000000952 mm). Every source-height chief clears; 87 generic-corner chiefs at focus 0.01–0.87 clip at S28, while 13 at 0.88–1 clear. Their 19,400 pupil rays include 12,873 ordinary clips and 1,868 independently bounded S1/S2 cap misses. Source-height roots alone have 5,288 ordinary clips and 510 bounded misses; clear chiefs do not imply full-pupil clearance.

The source-height endpoint grid separately traces 582 rays at infinity and the literal-gap Gaussian close control, with clear axial/chief rays, 132 ordinary clips and seven bounded S1/S2 cap misses. A bounding-sphere vector angular diagnostic at focus 0 / 0.5 / 1 gives 873 source-range rays with clear axial/chief rays, 211 ordinary clips and 15 bounded cap misses; all nine separate 80° / 89° / 90° chief seeds are unbracketed. Angular rays at a finite focus control remain collimated and are distinct from explicit finite-object launches. No extreme-field coverage is claimed.

All 101 contour states contain 16 connected, closed, finite SVG paths and zero hidden renderer trimming. Actual final SVGs at infinity, middle and close controls were inspected against the native source. No inferred cut exists. Source outline fidelity, these sampled runtime restrictions and production correlation are separate findings. Full-frame marginal coverage, the S2 cap/piston compromise, the disputed finite reference and historical material identity remain qualified limitations.

## Design Heritage and Sources

The source is the local untracked original `patents/US-20250389929-A1.pdf`; no substitute publication was used. Canon's negative-front L VCM production family remains the pre-existing product correlation. Its marketed count, named special optics, manufacturing process, MFD and motor do not establish a literal production prescription.

- Original publication title/front page: PDF p. 1; selected Fig. 3 and Fig. 4A/B: pp. 4–5.
- Numerical Example 2: primary rows pp. 28–29, aspheres and finite table p. 29, selected single-lens partials pp. 29–30.
- Tables 1–2: pp. 38–39; explicit spectral definitions and asphere equation ¶0174–¶0176, p. 26.
- APD wording: ¶0079 p. 22 and ¶0115 p. 23; stationary-group conflict ¶0136 p. 24 against abstract/¶0032/Claim 1.
- The existing OHARA/HOYA/HIKARI/Schott catalog curves are compatible spectral proxies. The prior H-ZBaF4 partial mismatch remains an exclusion, without treating coordinate compatibility as historical identity.
