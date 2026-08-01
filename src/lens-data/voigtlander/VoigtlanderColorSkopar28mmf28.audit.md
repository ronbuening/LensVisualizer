# VoigtlanderColorSkopar28mmf28 — Independent Stage 4 Audit

## Job card

- **PATENT:** JP2024107941A, source publication JP 2024-107941 A
- **LENS:** Voigtländer COLOR-SKOPAR 28mm f/2.8
- **EMBODIMENT:** Example 3
- **OUTPUT STEM:** `VoigtlanderColorSkopar28mmf28`
- **Audit stage:** 4 — independent audit and clean delivery

The patent and embodiment remained fixed. No sibling example was substituted or blended into the prescription.

## Independent first pass

The first pass was performed from the original patent before the previous audit conclusions were consulted. Patent pages were rendered at 300 dpi. Table 3 on patent page 12 was re-entered manually, including all fourteen authored planes, the stop spacing, the final image-side spacing, and both asphere rows. The standard even-asphere equation on patent page 9 was checked directly; the printed `K` is already the standard conic constant, so no κ-to-K conversion is required. Figure 3 on patent page 16 and Figure 6 on page 17 were used only as independent published-value and architecture checks.

The fresh entry matched the final prescription without a source-value correction:

- eight elements in five groups;
- exactly one `STO` between surfaces 5 and 7;
- cemented junctions at surfaces 4, 8, and 11, owned by downstream elements L3, L5, and L7;
- aspheres 13A and 14A, both with `K = 0`;
- final 19.545 mm air spacing to the image plane;
- no cover glass, filter, dummy plane, or scale transformation.

The patent's 19.54 mm narrative back-focus value was retained as a rounded or truncated display of the 19.545 mm table spacing, not treated as an error.

## Fresh numerical verification

The final TypeScript object was evaluated through Node and compared field-by-field with the independent patent transcription before calculation. A sequential height/reduced-angle trace and a separately assembled ABCD matrix produced the same first-to-last matrix with zero numerical difference at machine precision:

\[
M =
\begin{bmatrix}
0.6762939939 & 17.0415783437 \\
-0.0346017900 & 0.6067344815
\end{bmatrix},
\qquad \det M = 1.
\]

| Quantity | Independent result | Patent value or test |
|---|---:|---:|
| Effective focal length | 28.900239017 mm | 28.90 mm |
| Back focal distance | 19.545058070 mm | 19.54 mm narrative; 19.545 mm table gap |
| Front principal plane from first vertex | +11.365467483 mm | computed |
| Rear principal plane from last vertex | −9.355180947 mm | computed |
| First surface to image plane | 46.729 mm | 46.73 mm |
| Front-group length, `Tf` | 7.066 mm | 7.07 mm |
| Rear-group length, `Tr` | 15.262 mm | 15.26 mm |
| `LA/EFL` | 1.616907043 | condition 1 passes |
| `Tr/Tf` | 2.159920747 | condition 2 passes |
| Modeled f-number | 2.849999972 | 2.85 |
| Patent condition-4 `X` | 32.85 mm | authoritative published value |
| Stop-center `X` proxy | 32.456285918 mm | diagnostic only; also exceeds 32 mm |
| Petzval sum | +0.004137222977 mm⁻¹ | surface-by-surface `φ/(n·n′)` |

The design is neither telephoto (`TL/EFL = 1.616907 > 1`) nor retrofocus (`BFD/EFL = 0.676294 < 1`).

### Standalone and assembly powers

| Component | Focal length |
|---|---:|
| L1 | −42.518501 mm |
| L2 | +13.255688 mm |
| L3 | −24.855686 mm |
| L4 | −13.148995 mm |
| L5 | +14.820550 mm |
| L6 | +15.085129 mm |
| L7 | −24.126458 mm |
| L8 | −197.741922 mm |
| J1 = L2+L3 | +25.443853 mm |
| J2 = L4+L5 | −599.140545 mm |
| J3 = L6+L7 | +36.821756 mm |
| Gf in air | +60.330199 mm |
| Gr in air | +43.448262 mm |

These values remain explicitly separated from in-situ behavior in the complete, separated system.

## Glass audit and corrections

The glass audit was repeated without using the existing labels as search anchors. The patent publishes only `nd` and `νd`. The complete L2–L7 sequence was found as an exact current HOYA catalog-code sequence at the patent's printed precision, while L1 exactly matches OHARA S-BSL7. The matches are catalog-derived optical identifications, not confirmation of the melts used by Cosina.

| Element | Previous data wording | Corrected data wording | Catalog result |
|---|---|---|---|
| L1 | `S-BSL7 (OHARA)` without line indices | `S-BSL7 (OHARA)` plus `nC`, `nF`, `ng` | Exact `nd/νd`; line indices added from OHARA |
| L2 | `911353 — high-index lanthanum crown class (vendor unresolved)` | `TAFD35L (HOYA)` plus line indices and `dPgF` | HOYA 911-353; zero `nd/νd` residual at source precision |
| L3 | `847238 — dense flint class (vendor unresolved)`, `apd: false` | `FDS90-SG (HOYA; FDS90 has identical optical constants)`, line indices, `dPgF`, `apd: "inferred"` | HOYA 847-238; FDS90 and FDS90-SG share the published optical constants |
| L4 | `689312 — dense flint class (vendor unresolved)`, `apd: false` | `E-FD8 (HOYA)`, line indices, `dPgF`, `apd: "inferred"` | HOYA 689-312; zero residual |
| L5, L6 | `883408 — high-index lanthanum crown class (vendor unresolved)` | `TAFD30 (HOYA)` plus line indices and `dPgF` | HOYA 883-408; zero residual |
| L7 | `648338 — flint class (vendor unresolved)` | `E-FD2 (HOYA)` plus line indices and `dPgF` | HOYA 648-338; zero residual |
| L8 | `806407 — moldable high-index lanthanum class (vendor unresolved)` | `806-407 class (HOYA NBFD13 / M-NBFD130; process unresolved)` | Both HOYA entries share the nominal pair; line data differ slightly, so none were authored |

Cosina's production optical section marks the positions corresponding to L3 and L4 as extraordinary-partial-dispersion elements. The corrected data records those flags as `inferred`, not `patent`, because the patent-to-product relation and production melt identities are not manufacturer-confirmed. The matched catalog values are `dPgF = +0.0137` for the 847-238 class and `+0.0067` for E-FD8. No APO claim was added.

### Downstream consequences

The d-line prescription, element powers, matrix, EFL, principal planes, BFD, Petzval sum, f-number, conditions, asphere departures, and geometry are unchanged. The spectral-data quality improves for L1–L7. L8 remains at `nd/νd` quality because choosing between NBFD13 and M-NBFD130 would assert an unsupported process variant.

## Analysis corrections

1. **Glass identity and spectral wording**
   - **Old:** L2–L8 were described as vendor-unresolved generic classes; the analysis stated that only L1 had a catalog identity and that APD could not be modeled.
   - **Corrected:** The analysis now records the exact catalog matches and their evidence limits, lists the L3 and L8 process ambiguities, and states that line indices are present for L1–L7 and `dPgF` for L2–L7.
   - **Source:** Official OHARA S-BSL7 data; official HOYA 2026-06-01 workbook; official Cosina production optical section.
   - **Independent evidence:** Zero `nd/νd` residual for every stored pair at patent precision; direct positional match of the two marked production elements to L3 and L4.
   - **Consequence:** The glass section, element headings, correlation evidence, and spectral-discipline statement were rewritten. No first-order quantity changed.

2. **L8 manufacturing-process wording**
   - **Old:** “moldable high-index lanthanum class.”
   - **Corrected:** “HOYA 806-407 class, matching NBFD13 and M-NBFD130; process variant unresolved.”
   - **Source:** Official HOYA workbook.
   - **Independent evidence:** The nominal pair matches both entries, while their line data and `dPgF` differ slightly.
   - **Consequence:** The unsupported manufacturing-process implication was removed, and no L8 line data were authored.

3. **Condition-4 `X` wording**
   - **Old:** The analysis described the patent value and stop-center result as two “definitions” and said both satisfied the condition.
   - **Corrected:** The patent's 32.85 mm value is identified as authoritative. The 32.456286 mm stop-center calculation is labeled a proxy rather than a second implementation of the patent's edge-bundle center-line definition.
   - **Source:** JP 2024-107941 A condition 4 and Figure 3.
   - **Independent evidence:** Exact finite-ray trace through the modeled stop center to the published 21.63 mm image height.
   - **Consequence:** The condition remains satisfied; only the epistemic wording changed.

No source prescription value, surface label, spacing, index, Abbe number, asphere coefficient, stop size, focus status, mount, format, or focal-length field was changed. The inferred front-group semi-diameters were subsequently corrected in the integration follow-up below.

## 2026-08-01 Patent-Figure SD Follow-up

The exact Example 3 optical section is patent Fig. 6 on page 17. At high resolution, its front L1/J1 envelopes are materially smaller than the original model. The automated whole-figure crop is affected by leader lines, so the axial scale was calibrated from the active prescription and the glass rims were measured by hand under the SD-audit runbook.

| Surfaces | Previous SD | Audited SD | Figure interpretation |
|---|---:|---:|---|
| 1–2 (L1) | 10.2 / 10.2 mm | 8.1 / 8.1 mm | Fig. 6 front singlet envelope is approximately 8.1 mm |
| 3–4 (L2/front J1) | 8.0 / 7.6 mm | 6.2 / 6.2 mm | Fig. 6 doublet front/interface envelope is approximately 6.2 mm |
| 5 (rear J1) | 7.6 mm | 7.0 mm | Rear doublet rim opens slightly toward the stop |

The remaining groups already match the figure within the drawing tolerance. The final values pass the surface validator and image-circle floor audit. The 11.2 mm rear asphere SDs are unchanged, so their departure values remain valid.

## Geometry and render gate

The patent provides no clear-aperture table, so the stored semi-diameters remain modeling values. With the corrected front apertures, the repository surface validator reports no edge-thickness, rim-slope, conic-domain, shared-gap, or stop-split errors, and the image-circle audit reports no undersized surfaces. The unchanged rear asphere departures at 11.2 mm are −0.631540 mm at 13A and +0.504202 mm at 14A.

The diagnostic silhouette was inspected against the patent and Cosina optical sections. No invalid overlap or geometry-hiding trim was found. The diagnostic SVG and PNG are temporary and excluded from the handoff package.

## Focus and variant gate

The patent publishes only the infinity prescription. No focus-spacing table, object-distance table, magnification row, or group-motion law exists for Example 3. The final data therefore retains:

- `NO_INTERNAL_RECONSTRUCTION`;
- empty `var` and `varLabels`;
- no invented unit-focus, floating-focus, or internal-focus motion;
- `closeFocusM: 0.5` only as the shortest marketed endpoint across the represented Type II/Type I/L39 family, with the 0.7 m variants disclosed in the header and analysis.

## Targeted final gate

Passed locally:

- final TypeScript object evaluation through Node;
- TypeScript syntax and import-shape check with a temporary local `LensDataInput` stub;
- fresh source-table and asphere comparison;
- sequential reduced-angle trace and independent ABCD basis reconstruction;
- all seven patent conditions;
- all defined optical states (`infinity` only);
- element, cemented-group, and functional-group power checks;
- surface-by-surface Petzval calculation;
- exact modeled f-number and pupil calculation;
- asphere convention, departures, edge thickness, rim slope, conic limit, cross-gap, containment, and render-proxy checks;
- glass residual and spectral-field checks;
- analysis structure, metadata, quantitative claim, focus, scaling, omitted-plate, and spectral-discipline checks;
- UTF-8, LF line endings, no tabs, final newline, and no data-file trailing whitespace;
- package filename, size, checksum, and ZIP-content verification.

Unavailable because the repository and project dependencies were not mounted:

- the actual project Prettier executable;
- project type/schema validation against the real `LensDataInput` declaration;
- actual `buildLens()` / `validateLensData()`;
- actual `computeElementRenderDiagnostics()`;
- catalog mismatch/relabel scripts and directly relevant project tests.

The clean files were manually conformed to the supplied Prettier settings. `generate:metadata`, full corpus tests, the full build, Git operations, and publication work were not run.

## Final disposition

The corrected pair is internally consistent with JP 2024-107941 A Example 3 and the independently recomputed optical results. Remaining unavailable checks are integration-environment checks rather than unresolved lens-data findings.

**READY_FOR_BATCH**

## 2026-08-01 Repository Integration Gate

This final integration gate supersedes the earlier environment-availability notes. The stored prescription passes the repository surface and image-circle audits, and refreshed glass reports retain 8/8 strict and trusted chromatic coverage with zero catalog mismatches. Typecheck, format check, all 2,528 tests in 213 files, and the 990-route production build pass. Lint reports only the repository's three pre-existing type-assertion warnings and no errors.
