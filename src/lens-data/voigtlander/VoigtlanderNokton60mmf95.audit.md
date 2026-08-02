# VoigtlanderNokton60mmf95 — Stage 4 Independent Audit

## Job card and fixed scope

- **PATENT:** JP 2021-076740 A
- **LENS:** Voigtländer Nokton 60mm F0.95 MFT
- **EMBODIMENT:** Example 2
- **OUTPUT STEM:** `VoigtlanderNokton60mmf95`
- **Focus status:** `PUBLISHED`

The patent, embodiment, and production correlation were treated as fixed. The audit did not substitute another example or
another lens. The independent first pass used the original patent PDF, current `.data.ts`, current `.analysis.md`, current
specifications, template, defaults, taxonomy reference, authoring guide, and integration handoff. The previous audit was
not consulted until the critical prescription and calculations had been independently re-established.

## Sources and inspected locations

### Numerical and descriptive source

- JP 2021-076740 A, front page: publication metadata, filing date, applicant, and inventors.
- Paragraphs 0068–0078: Example 2 architecture, focus mechanism, design values, and conditions.
- Patent page 19, Table 2: complete Example 2 prescription and the 0.00×, 0.10×, and 0.20× focus rows.
- Patent page 40, Figure 5: Example 2 element order, cemented pairs, stop location, and movement partition.
- Patent page 41, Figure 13: Example 2 aberration plots at the published focus states.
- Patent page 25, Equation 1: standard asphere convention with `1 + K` in the conic term. Example 2 itself has no
  aspherical surfaces.

The table, figure, and front page were inspected as rendered pages rather than relying only on extracted text.

### Product identity and glass context

The official Cosina English and Japanese product pages were rechecked on 2026-08-01 for the production name, Micro Four
Thirds mount, Four Thirds coverage, 60 mm marketing focal length, f/0.95 marketing aperture, 11 elements in 8 groups,
21.5° marketed field, 0.34 m minimum focus, 1:4 maximum reproduction, 10 aperture blades, two APD-marked elements, and
2020-04-24 Japanese release date. The official Cosina optical-section SVG was used only for production-correlation and
qualitative silhouette/APD-position checks, not as a metric prescription source.

The glass audit began from the patent's raw `nd` and `νd` targets rather than from the authored labels. Candidate residuals
were recomputed from the retained six-vendor matrix, and current official OHARA data were spot-checked for S-LAH58. Glass
labels remain optical equivalences or class-level annotations unless the patent itself establishes a vendor, which it does
not.

## Independent extraction and conventions

### Prescription boundary

The active sequential model contains patent surfaces 1–20 plus exactly one `STO`. Patent surfaces 21–22 are the 4.20 mm,
`nd = 1.51680` sensor faceplate/filter plate and are excluded under the current data specification. Their paraxial
air-equivalent thickness is folded into the final rear spacing:

```text
4.20 / 1.51680 = 2.768987341772152 mm
```

The infinity surface-20 rear spacing is therefore `15.44 + 2.768987341772152 = 18.20898734177215 mm`. The same correction
is applied to the 0.10× and 0.20× published states.

### Sign, wavelength, conic, scale, and reference planes

- Radius sign: positive center of curvature toward the image side.
- Paraxial state: height/reduced-angle vector `[y, ν]`, where `ν = n·u`.
- Index basis: Fraunhofer d line. The patent repeatedly prints 586.56 nm while using `nd` and `νd`; this remains disclosed
  as a source typo for the standard 587.56 nm d-line convention.
- Asphere convention: the patent's Equation 1 uses the standard conic constant `K`; no conversion is required. Example 2
  is entirely spherical, so `asph: {}` is correct and no departures apply.
- Scale: 1.0. No uniform scaling or coefficient transformation is present.
- BFL reference: the last powered vertex, patent surface 20.
- Track reference: first powered vertex to the cover-normalized image plane.

### Source transcription

Every authored active row was compared with a fresh Table 2 entry. All 20 active entries, including the stop, have zero
radius, spacing, and index deltas after the documented sensor-plate normalization. The three focus rows were independently
re-entered as:

| State | Object distance from surface 1 | ZD11 | Raw ZD20 | Normalized ZD20 |
| --- | ---: | ---: | ---: | ---: |
| Infinity | Infinity | 8.10 mm | 15.44 mm | 18.208987341772 mm |
| 0.10× | 600.00 mm | 14.29 mm | 20.05 mm | 22.818987341772 mm |
| 0.20× | 300.00 mm | 22.74 mm | 25.44 mm | 28.208987341772 mm |

Table 2 prints `0.10` in the 0.00× ZD0 cell. Paragraph 0075 identifies that column as the infinity design, so the existing
Infinity correction is retained. Figure 5 and paragraph 0072 confirm the physical Jb order as negative L10 followed by
positive L9; paragraph 0073 reverses those names in isolation.

## Corrections made

| Item | Old value or wording | Corrected value or wording | Source location | Independent evidence | Downstream consequence |
| --- | --- | --- | --- | --- | --- |
| Inventor metadata | Incorrect source-script transcription | `Yasuyuki Sugano`; `Hirokazu Shimada` | Patent front page, item (72), page 1 | The source names were verified against the rendered front page and matched to existing repository romanizations | Corrected `patentAuthors` and the analysis metadata block; no optical consequence |
| Filing date | `2019-11-01` | `2019-11-11` | Patent front page, item (22), page 1 | The source prints `令和1年11月11日 (2019.11.11)` | Corrected both analysis occurrences; the conclusion that filing preceded the 2020-04-24 release is unchanged |
| Retrofocus ratio label | `BFD/EFL = 0.313320` | `Paraxial BFL/EFL = 0.313320` | Independent cardinal-point calculation from Table 2 | `18.218112 mm` is the paraxial `−A/C` back focal length from surface 20; the authored normalized surface-to-image spacing is `18.208987 mm` | Corrected the verification-table label only; the non-retrofocus result is unchanged |
| Previous audit ray-count prose | `147 rays per focus state, 441 total` | Previous verifier: `49 per state, 147 total`; Stage 4 verifier: `105 per state, 315 total` | Previous results JSON and verifier; fresh Stage 4 verifier | The prior results contain `ray_count: 49` for each of three states. The new independent sampler explicitly counts 105 rays in each state | Corrected in this audit record; no data or analysis calculation depends on the erroneous old prose count |

No prescription, focus-spacing, semi-diameter, stop, glass-label, or quantitative analysis correction was otherwise
required.

## Independent optical computation

A fresh script re-entered the patent prescription independently of the TypeScript arrays. It then compared the source
model with the corrected final arrays. Sequential height/reduced-angle tracing and a separate ABCD matrix product agree
to `4.440892098500626e-16`; the system determinant is `1.0000000000000002`.

### Infinity system and principal planes

| Quantity | Independent result |
| --- | ---: |
| Effective focal length | 58.145372162408 mm |
| Patent rounded focal length | 58.15 mm |
| Front principal plane from surface 1 | +72.578087331297 mm |
| Rear principal plane from surface 20 | −39.927260107410 mm |
| Paraxial BFL from surface 20 | 18.218112054998 mm |
| Authored normalized surface-20-to-image spacing | 18.208987341772 mm |
| BFL minus normalized source spacing | 0.009124713226 mm |
| Cover-normalized first-surface-to-image track | 97.568987341772 mm |
| Direct physical Table 2 row sum including the 4.20 mm plate | 99.000000000000 mm |

The 0.009125 mm BFL/source-spacing difference is compatible with Table 2's rounded radii, thicknesses, and indices. It is
not used to alter the source prescription.

### Standalone elements, cemented pairs, and functional groups

The standalone element focal lengths recompute from each element's two radii, center thickness, and `nd`. The only notable
source discrepancy remains L2: Table 2 prints `+159.70 mm`, while the prescription computes `+159.969653 mm`. The final
data stores the computed value and discloses the source discrepancy.

| Assembly | Independent isolated EFL |
| --- | ---: |
| G1 / group 101 | +93.188912544 mm |
| G2 / group 102 | −123.571883890 mm |
| G3 / group 103 | +34.811593368 mm |
| Jc / L5+L6 | −61.268635448 mm |
| Ja / L7+L8 | +302.459978770 mm |
| Jb / L10+L9 | +95.632781851 mm |

These are isolated thick-assembly powers. They are not substituted for in-situ behavior in the complete lens.

### Pupils and f-number

| Quantity | Independent result |
| --- | ---: |
| Entrance-pupil diameter required by EFL/f-number | 62.521905550977 mm |
| Entrance-pupil plane from surface 1 | +75.321595313626 mm |
| Inferred physical stop semi-diameter | 14.083354738297 mm |
| Authored stop semi-diameter | 14.083354738297 mm |
| Exit-pupil plane from surface 20 | −37.307368063348 mm |
| Exit-pupil diameter | 59.704817331555 mm |
| Recomputed f-number | 0.930000000000 |

The patent publishes the stop location and f/0.93 design value but no stop clear diameter. The physical stop remains an
inference derived from the pre-stop paraxial matrix and required entrance pupil.

### Focus states and movement

The source mechanism is a published two-unit floating-focus arrangement. G1+G2 form the front unit. The stop and G3 form
the rear unit. The G1-to-G2 gap remains 1.30 mm and the stop-to-G3 gap remains 6.37 mm.

| State | Computed `|m|` | Published `|m|` | Imaging residual |
| --- | ---: | ---: | ---: |
| Infinity | — | 0.00 | `A = 0.000156929312` |
| 0.10× | 0.101050071680 | 0.10 | `B = 0.115001583527 mm` |
| 0.20× | 0.203222121481 | 0.20 | `B = 0.057375208172 mm` |

From infinity to 0.20×, the rear unit moves 10.00 mm toward the object, the front unit moves 24.64 mm toward the object,
and the inter-unit gap increases by 14.64 mm. Both `var` base values match the infinity `d` values. The product's 0.34 m
and 0.25× endpoint remains marketing metadata only; no internal state is reconstructed.

### Patent conditions

| Condition | Independent value | Result |
| --- | ---: | --- |
| C1 | 1.602688383926 | Pass |
| C2 | 0.467785226698 | Pass |
| C3 | 0.290461233262 | Pass |
| C4 | 1.560556839750 | Pass |
| C5 | 0.598699295805 | Pass |

### Petzval and classification

Petzval was recomputed surface by surface as `φ/(n·n′)`, including the glass-to-glass cemented interfaces:

```text
Petzval sum = +0.005299457215060766 mm⁻¹
1 / |Petzval sum| = 188.698570328685 mm
```

The reciprocal is an audit diagnostic, not a claim for the complete best-focus field-curvature radius.

- `TL/EFL = 1.678018107258`; the project telephoto-form test fails.
- `paraxial BFL/EFL = 0.313320069637`; BFL is not greater than EFL, so the project retrofocus test fails.

The marketed short-telephoto angle-of-view category is separate from the optical telephoto-ratio test.

## Glass and spectral audit

The patent supplies `nd` and `νd` only. It does not publish Example 2 values for `nC`, `nF`, `ng`, or `dPgF`, and it does
not identify vendors. The fresh residual audit therefore did not promote class-level candidates into vendor claims.

- L9 and L11 have the exact 883408 optical family. `S-LAH58 (OHARA optical equivalent; patent vendor unspecified)` is a
  defensible optical-equivalent annotation, not a manufacturing attribution.
- L2, L4, L6, and L10 remain class/family annotations where catalog candidates are close but vendor identity is not
  established.
- L1, L3, L5, L7, and L8 remain explicit `Unmatched (...)` entries where a public candidate is absent or insufficiently
  close for a confident identity.
- The official production diagram marks positions corresponding to L2 and L7 as APD. Their `apd: "inferred"` fields and
  notes remain source-qualified. No APO, secondary-spectrum, or modeled anomalous-partial-dispersion claim is made.

All exact `nd` and `νd` values remain unchanged.

## Geometry, containment, and render review

Example 2 is all-spherical; no conic-domain test or asphere-departure calculation applies. The authored semi-diameters
were tested at infinity, 0.10×, and 0.20× using exact spherical intersections and refraction. The Stage 4 sampler used 105
rays per state, 315 total, covering on-axis stop-edge rays, the project's 0.60-field bundle, and representative full-field
bundles.

| Diagnostic | Limiting result |
| --- | ---: |
| Minimum element edge thickness | 0.697473158686 mm at L9 |
| Maximum spherical rim angle | 54.064251074108° at surface 11 |
| Minimum non-stop traced-ray clearance | 0.827199808692 mm at surface 13 |
| Limiting cross-gap intrusion | 11.589114310598 mm across surfaces 11–13 at infinity |
| Corresponding 90% gap limit | 13.023000000000 mm |

All edge-thickness, current rim-slope, cross-gap, and exact-ray containment checks pass. A separately generated spherical
cross-section was inspected against Figure 5 and the official Cosina optical section; it showed no crossed elements,
detached cemented interfaces, reversed element shapes, or geometry being hidden by layout tuning. The official production
renderer and `computeElementRenderDiagnostics()` were unavailable because the repository was not mounted, so no claim is
made that those commands ran.

## Data/analysis consistency

The corrected pair passes local checks for:

- lens name, maker, mount, format, patent, embodiment, applicant, inventors, and publication year;
- 11 elements, 8 groups, three cemented pairs, exactly one stop, and all-spherical status;
- downstream `elemId` assignments at surfaces 10, 14, and 17;
- `var` keys and base `d` consistency;
- every element `nd`, `νd`, standalone focal length, shape, and glass annotation;
- focus mechanism and all three published focus states;
- C1–C5, EFL, principal planes, BFL, normalized track, Petzval, pupil, classification, and geometry values;
- separation of 60 mm f/0.95 marketing values from the 58.145372 mm f/0.93 design;
- source-qualified APD language and absence of unsupported APO claims;
- required analysis section order and omission of an asphere section for an all-spherical design.

## Targeted final gate

### Completed locally

- Fresh patent extraction from rendered pages: PASS.
- Independent source-table re-entry: PASS.
- Source versus final TypeScript rows: PASS, zero active-row deltas.
- Sequential height/reduced-angle versus ABCD: PASS.
- Determinant, EFL, principal planes, BFL, track, pupils, f-number, powers, Petzval, conditions, and movement: PASS.
- Infinity, 0.10×, and 0.20× focus states: PASS.
- Edge thickness, actual rim slope, cross-gap, conic applicability, and exact-ray containment: PASS.
- Fresh conservative glass-label audit: PASS.
- Analysis structure, metadata, and quantitative-claim checks: PASS.
- Corrected TypeScript checked with TypeScript 5.8.3 against a local specification-shaped `LensDataInput`: PASS.
- Previous independent verifier rerun against the corrected data: PASS.
- Python verifier bytecode compilation and execution: PASS.
- Manual `.prettierrc.json` style inspection: PASS for double quotes, semicolons, two-space indentation, trailing commas,
  no tabs, and no unintended trailing whitespace.

### Unavailable and not claimed

`/mnt/project` was not mounted. The following repository-only checks could not be run:

- official LensVisualizer type/schema validation;
- `buildLens()` / `validateLensData()`;
- `computeElementRenderDiagnostics()` and the production renderer;
- repository glass-mismatch tooling;
- catalog key uniqueness and directly relevant corpus tests.

A Prettier executable was also unavailable in the runtime and could not be installed from the available package registry.
The pair was manually checked against the supplied `.prettierrc.json`; no claim is made that the Prettier command ran.
No metadata generation, full build, full corpus test, Git operation, branch, commit, push, or pull request was performed.

## Final disposition

The final pair contains three clean-file corrections: inventor spelling in both files, filing date in the analysis, and a
BFL/BFD terminology correction in the analysis. The prescription, focus model, semi-diameters, glass labels, and all
quantitative optical results remain unchanged after the fresh audit. No unresolved prescription or modeling defect was
found within the checks available in this runtime.

**READY_FOR_BATCH**

## 2026-08-02 integration review

The repository renderer and the 600 dpi patent-page render were compared after integration. The front two functional
groups already followed Figure 5 closely and retained their authored apertures. The rear group was visibly too narrow,
so its inferred clear apertures were increased conservatively while keeping the physical stop unchanged:

| Surface | Previous sd (mm) | Final sd (mm) |
|---|---:|---:|
| 13 | 14.8 | 15.5 |
| 14 | 16.5 | 17.0 |
| 15 | 17.0 | 17.4 |
| 16 | 16.7 | 17.5 |
| 17 | 16.7 | 17.5 |
| 18 | 16.6 | 17.0 |
| 19 | 15.2 | 15.8 |
| 20 | 14.6 | 15.4 |

The final values pass `audit:surface`, keep all element edge thicknesses positive, preserve cross-gap separation, and
produce no material renderer trim. They remain patent-figure modeling values, not published mechanical dimensions.

The glass review also supersedes the conservative code-only disposition above. FCD1, MC-TAF101-100, NBFD15, and E-FD4
are coordinate-compatible HOYA optical equivalents for L2, L4, L6, and L10 respectively. Their labels explicitly leave
the patent vendor unspecified. The five genuinely unresolved positions remain `Unmatched`, and the existing S-LAH58
equivalents for L9 and L11 remain unchanged. Strict Sellmeier coverage therefore rises from 2/11 to 6/11 without changing
any patent `nd` or `νd` value.

## Second SD audit — 2026-08-02

A fresh post-commit render was checked again against Example 2 Figure 5. The revised rear group now follows the drawing's
diameter progression without gap trim, while the unchanged front groups preserve the required f/0.93 beam. The final
surface set passes `audit:surface`, `audit:image-circle`, and the production render-diagnostics test. No further SD
correction was supported.
