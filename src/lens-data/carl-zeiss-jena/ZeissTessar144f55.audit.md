# Audit Log - Carl Zeiss Jena Tessar 144mm f/5.5

Patent: US 721,240
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - Patent and rendering recheck

### Source Note

- Rechecked the local patent PDF text/table and drawing against the current scaled prescription.
- The patent gives radii/thicknesses normalized to EFL = 1 and lists nD, nF, and nG' values, but does not publish nC or clear apertures.

### Phase 1 - Glass / APD / high-index status

| Element / surface | Field | Result | Justification |
|---|---|---|---|
| L1 | `glass`, APD status | retained dense barium crown annotation, `apd: false` | Patent line-index data lacks nC, so no standard Abbe/APD derivation was added. The analysis already notes the anomalous P_G'F behavior. |
| L2 | `glass` | retained dense flint annotation | Patent nD/nF/nG' values support a high-dispersion negative singlet, but no coefficient-backed exact catalog match is available. |
| L3 | `glass` | retained light crown / light flint annotation | The nD match remains family-level and unresolved. |
| L4 | `glass`, high-index status | retained dense barium crown / barium flint annotation | The rear positive element remains a high-index catalog-family inference only. |

### Phase 2 - Prescription and SD review

- Rechecked the normalized patent table against the stored 144mm scale. Current radii, thicknesses, air spaces, and back focus match the scaled values.
- Confirmed the front surface sign is positive from the drawing and element shape.
- The patent drawing does not publish numeric semi-diameters. Existing SDs remain rational against the drawing, f/5.5 aperture, and 60-degree patent field note; runtime element-render diagnostics showed no hidden trim warnings.

### Verification

- Temporary Zeiss Jena diagnostic test - passed; runtime trim diagnostics empty for this lens.

## 2026-09-08 — First-hosted audit source review (lens 7, incomplete)

- Primary source: local `patents/US721240.pdf`, 4 pages. PDF p2 names assignee the firm of Carl Zeiss and states normalized dimensions, f/5.5, approximately 60° field. PDF p3 is the numerical table. Rendered its exact table at 600 dpi (`/tmp/tessar-table600.png`).
- Confirmed two transcription errors requiring correction: d1 = 0.033, not 0.038 (at 144 scale, 4.752 rather than 5.472 mm); L1 nD = 1.61132, not 1.6132. Other normalized radii and spacings match current data.
- Exact spectral rows L1–L4: nD [1.61132, 1.60457, 1.52110, 1.61132]; nF [1.61870, 1.61486, 1.52820, 1.61895]; nG′ [1.62462, 1.62252, 1.53397, 1.62514]. Do not confuse the source hydrogen G′ with the modern g-line. νd is not published.
- Existing analysis/header explanations of an anomalous L1 ratio and thick-lens/Gaussian mismatch must be re-evaluated after correcting the actual transcription errors. Historical Schott supplier matching remains unsupported by these source values alone.
- Next: live production view, drawing/rim inspection, prescription correction and recalculated infinity/finite conjugates, conservative label/analysis updates. No Tessar production edits yet.
- Production live view inspected: EFL 139.68, BF 125.83 and unsupported front-element-focus prose visible. Corrected source d1 and L1 reference index; independent reduced-angle propagation gives EFL 142.80282338, infinity BF 130.50039140, assembly track 23.616, and modeled 2 m BF 142.49008166. Source nominal scale stays 144. Updated inferred unit-focus description and exact source assignee (Carl Zeiss). Glass/analysis/rim review and local checks remain pending; not yet ready for commit.
- 600 dpi drawing reviewed (`/tmp/tessar-rims600.png`): first-to-last vertex span approximately 538 px corresponds to 23.616 units; optical half-heights approximately 300–315 px imply 13.2–13.8 mm, excluding labels and bevel shoulders. Reduced front rims 16.5/15.2 to 14.5/14.5 after correcting center thickness. Expanded rear doublet 12.4 to 13.1. A trial 13.5 failed with −0.038 mm edge thickness and was rejected; 13.1 passes surface validation. Image-circle probe passed at the 13.5 trial; rerun at final 13.1 during batch gates. Hidden-trim check remains pending.
- Removed named Schott glass matches from element labels; estimates explicitly remain estimates. Companion analysis is still stale and must be rewritten before final local review/commit.
- Companion analysis rewritten against the original PDF; removed unsupported historical glass identities, stale source numbers and claims that a Gaussian/thick-lens distinction explains the focal-length discrepancy. Exact source D/F/G′ values and absent C-line/estimated Abbe limits are explicit.
- Local live infinity/close/midpoint/f16/motion-chart review complete: EFL 142.80; BF 130.50/142.49/136.50; motion 11.99 mm objectward for both patent assemblies; zoom disabled; f16 stop diameter 7.97. No visible element overlap. Three optical groups remain summarized separately from the patent's two diaphragm-separated assemblies in the analysis.
- Added independent close-conjugate, unit-motion and hidden-trim regression tests; execution remains pending at the batch boundary.


### Batch follow-up

Metadata gate correction: canonical assignee is Carl-Zeiss-Stiftung under the repository 1891–2003 alias rule. Source wording Carl Zeiss remains explicitly identified in the analysis; no claim that the patent prints the canonical modern catalog label.
