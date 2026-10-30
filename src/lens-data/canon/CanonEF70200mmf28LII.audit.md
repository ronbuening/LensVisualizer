# Audit Log - Canon EF 70-200mm f/2.8L IS II USM

Patent: US 2009/0296231 A1, Numerical Embodiment 2

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US20090296231A1.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The patent gives nd/vd values only; the OHARA-equivalent labels remain nearest public catalog matches, not Canon material disclosures.
- High-index rows are already represented by their nd/vd values and dense-flint / dense-lanthanum labels.

### Phase 2 - Retained-information audit

- No clear-aperture/effective-diameter table was found for Numerical Embodiment 2 in the local PDF text. Existing SDs remain inferred from marginal/chief-ray envelopes and renderer limits as documented in the file header.
- Retained the infinity-only zoom model; the patent does not tabulate close-focus spacings.

### Phase 3 - Spectral / metadata enrichment

- Retained existing `apd: "patent"` metadata on the PR/N2 fluorophosphate elements and the fluorite/UD elements already identified in the file.
- No new dPgF values were added because S-FPL51 elements already carry line-index data and the patent provides only the conditional theta_gF inequality for the PR/N2 material family.

## 2026-10-12 — Stated axial-beam SD pass (historical)

- Original Numerical Embodiment 2 and Fig. 4 were checked at the three published infinity stations.
  The historical convention traced f/2.991 at wide/mid (S28) and f/3.008 at tele (S16).
- Nine caps were raised: S12/S13 15.5→15.7; S15/S16 15.7→16.3; S21 16.85→17.35;
  S22 16.85→17.34; S23 17.5→17.7; S28/S29 15.9→16.5. Source R/d, pairs, stop and target stayed fixed.
- On that date the guard changed from default 0.90 to 0.97, the smallest two-decimal setting admitting
  the then-raised close pairs. Their physical residuals were about 0.471/0.113/0.004/0.064 mm across
  12–13/15–16/21–22/28–29. This review retains, rather than repeats or expands, that guard change.
- Native Fig. 4 was 2560 × 3300 at 300 ppi and about 9.05 px/mm. Source D1/D2 blanks measured
  about 16.7/16.8 mm, while stored junction heights 18/16 mm remained open under the then-used raise-only rule.
- Historical source-state surface/aperture/corner checks and actual renders passed without trimming.
  A composed 2× extender was checked then. Historical vignetting/stop results are not new guarantees.
- The source had no finite spacing table. Oversized front/compound rims and inconsistent analysis prose
  were left open then; the complete original review below supersedes current shape/glass conclusions
  while preserving this actual historical date and its retained source/guard decisions.

## 2026-10-30 — Original shape and glass review

Exact original: `patents/US20090296231A1.pdf`. Numerical Embodiment 2 is on PDF p. 20 (printed p. 6),
unit-data continuation PDF p. 21, with corresponding wide-end Fig. 4 on PDF p. 5 (sheet 4). Figs. 5A/5B
and 6A/6B on PDF pp. 6–7 supply wide/tele infinity and 1.5 m aberration plots; there is no tele section
or finite spacing table for this configuration. Other numerical embodiments are excluded.

The native embedded raster is 2560 × 3300 px at 300 ppi. The 2300 × 950 rotated optical crop is
unresampled; 1672 px from first to last vertex over 184.76 mm gives about 9.05 px/mm, or 0.1105 mm/px.
The scan axis leans about 0.3°; rim heights use half the separation of opposing optical edges, not a
fixed row against brackets or arrows. Practical rim uncertainty is ±0.4 mm and up to ±0.5 mm at near-contact
cap/shoulder junctions. Magnified reading crops add no native resolution.

| Surfaces     | Adopted clear sd (mm) | Resolved outer sd (mm) |
| ------------ | --------------------- | ---------------------- |
| 1 / 2        | 37 / 35.1             | S2: 37                 |
| 3 / 4        | 35.1 / 36             | S3: 36                 |
| 5–6          | 34                    | —                      |
| 7 / 8        | 27.3 / 25.1           | S8: 27.3               |
| 9 / 10       | 25.1 / 25.6           | S9: 25.6               |
| 11 / 12      | 18 / 15.7             | S12: 18                |
| 13 / 14 / 15 | 15.7 / 16.7 / 16.3    | S13/S15: 16.7          |
| 16 / 17      | 16.3 / 17.4           | S16: 17.4              |
| 18–19        | 18.3                  | —                      |
| 20 / 21      | 18.1 / 17.35          | S21: 18.1              |
| 22 / 23      | 17.34 / 18.1          | S22: 18.1              |
| 25–26        | 18.4                  | —                      |
| 27 / 28      | 17.3 / 16.5           | S28: 17.3              |
| 29 / 30 / 31 | 16.5 / 16.8 / 16.8    | S29: 16.8              |
| 32 / 33 / 34 | 15.4 / 15.4 / 14.0    | S34: 15.4              |
| 35 / 36      | 13.3 / 15.4           | S35: 15.4              |
| 37–38        | 16.8                  | —                      |
| 39–41        | 18.2                  | —                      |
| 42–43        | 20                    | —                      |

Thirty cap changes and 14 resolved `rimExtensionSd` shoulders replace oversized front caps and
undersized rear blanks. All 23 elements, concave ends and four cemented interfaces were inspected.
No shoulder is authored at a cemented interface. Junctions 14/30/33/40 follow the respective source
blank heights; the other fields preserve clear apertures below visible outer shoulders. No resin
wing, opaque interface, inferred cut or unsupported full optical block is introduced.

The actual generated SVG was compared with native Fig. 4 at approximately the same scale. Source
R/d, all 23 pairs, the stop, aperture and four zoom-gap schedules are unchanged. The existing 0.97
sag guard remains unchanged. A full blank-height spherical-cap trial fails all seven close pairs:
2–3, 8–9, 12–13, 15–16, 21–22, 28–29 and 34–35; several exceed the physical air gap. Initial clear
35.2 mm caps at 2/3 and 25.2 mm at 8/9 also exceed the unchanged allowance when their shoulders are
included. The retained 35.1/25.1 mm caps stay within the reading uncertainty and preserve the source
geometry without increasing a tolerance.

| Pair  | Minimum idealized physical residual (mm) |
| ----- | ---------------------------------------: |
| 2–3   |                                 0.031109 |
| 8–9   |                                 0.048070 |
| 12–13 |                                 0.471275 |
| 15–16 |                                 0.112785 |
| 21–22 |                            about 0.00429 |
| 28–29 |                                 0.064379 |
| 34–35 |                                 0.533442 |

The 0.09 mm source air gap at 21–22 remains air. Its roughly 4 µm idealized residual is a retained
geometric constraint, not a production clearance certification; the source’s printed precision and
the drawing cannot establish that manufacturing margin. No R/d, stop, focus cam or cut is tuned to
fit the figure. Source fidelity, sampled runtime behavior and production correlation are separate.

## Current Runtime Scope — 2026-10-30

The three source stations pass surface, image-circle, project 3% aperture and ≥99% corner-field
checks. A geometry-identical 65-station diagnostic preserves source positions and current iris to
within 3.56 × 10⁻15 mm. All 65 stations pass the aperture/field criteria. The unchanged derived iris
radii are 17.309763 / 17.311475 / 17.311312 mm at wide/mid/tele, giving the project paraxial f/2.9.
Independent real input-diameter solves give f/2.955389 / 2.954660 / 2.955672. The source publishes no
physical iris diameter; these are distinct stop-convention diagnostics, and the rule remains unchanged.

A 65-zoom × three-field × 97-pupil census uses each state’s current wide-open stop. All 18,915 rays
are aimed without seed/aim failures; all axial bundles and chiefs clear. The 1,012 off-axis
`noBracket` entries before the first surface independently intersect its unrestricted sphere outside
the clear cap; no inside-cap or interior-surface miss is unexplained. A 65-zoom × 21-focus-control
render sweep gives 1,365 states with 23 finite closed connected contours and zero hidden trimming.
The focus endpoints are geometry-identical and do not represent a finite focus model.

Only the published wide/mid/tele infinity states have numerical source support. Linear interpolation
of their gaps is illustrative and does not preserve focus: the 65-state first-order census has a
worst image-plane displacement of +3.094639 mm at zoom 0.28125 (EFL 103.130310 mm; BF 57.194639 mm
versus the fixed 54.1 mm image gap). The source cam values are retained. The 1.2 m product metadata,
source 1.5 m plots, moved IS, attached teleconverters and continuous production cam behavior are not
certified by sampled clearance.

### Original glass and source qualifications

- Exact prescription: PDF p. 20 / printed p. 6, paragraph 0114; unit-data continuation PDF p. 21;
  corresponding wide Fig. 4 PDF p. 5 and wide/tele infinity/1.5 m plots PDF pp. 6–7. Every one of
  the 43 source R/d rows, 23 d-reference pairs, four cemented interfaces and four zoom-gap rows is checked.
- Paragraphs 0078/0111 (PDF pp. 18–19) explicitly define the d-reference and g/F/d/C symbols. No
  individual nC/nF/ng table exists; all 66 copied catalog indices are removed. All 23 compatible curves
  stay qualified spectral proxies, without a historical supplier/melt/chemistry claim.
- Paragraph 0070 maps extraordinary PR/N2 to lenses 5/7, and 0073 explicitly names their extraordinary
  dispersion. Table 1 (PDF p. 22) gives Embodiment 2 θgF = 0.539 with νd = 81.5; only those two
  receive source-derived dPgF +0.032283 and source APD tags. L2/L3/L11/L16 become inferred APD associations.
- The source discusses fluorite generically without identifying L11 as fluorite. Its old “patent-listed”
  label is replaced by qualified CaF2-proxy/product correlation. Same coordinates alone do not extend
  the PR/N2 partial to the other high-Abbe positions. Source/reference certainty and product history
  remain separate. No source filter, rear plate, hybrid/resin or separate cement medium is invented.
- Three type labels follow the literal radius signs: L5 is a positive meniscus with finite weak rear
  curvature, L18 biconcave and L21 biconvex. No numeric radius is changed to obtain these classifications.
- Historical 2026-06-25 and 2026-10-12 reviews remain above; prior broader source APD/line-index
  qualifications are superseded by the exact current source mapping. No inferred cut is present.
