# VoigtlanderApoSkopar90mmf28 — Stage 4 Independent Audit

## Job card and scope

| Field | Fixed value |
|---|---|
| Patent | JP 2023-049919 A |
| Lens | Voigtländer APO-Skopar 90mm F2.8 |
| Embodiment | Example 1 |
| Output stem | `VoigtlanderApoSkopar90mmf28` |
| Stage | Stage 4 independent audit and clean delivery |
| Batch integration / Git work | Not performed |

The patent and embodiment were not changed. The previous audit file was not used as the basis for the fresh prescription entry or the independent optical calculations.

## Independent source pass

The 14-page patent was rendered at 180 dpi and visually reviewed. The critical source locations were:

- Page 1: publication metadata, applicant, inventor, title, and Figure 1 overview.
- Pages 7–9: Example 1 prose, Table 1, focus-variable table, and stated condition values.
- Page 14: Figures 1–3, including the Example 1 section, aberration plots, and condition table.

Fresh transcription of Example 1 produced 15 modeled planes: surfaces 1–10, one `STO`, and surfaces 12–15. Table 1 gives seven air-spaced elements, no cemented junctions, no aspheres, and only two variable conjugate distances: `ZD0 = Infinity / 800 mm` and `ZD15 = 39.64 / 50.34 mm`.

The patent uses the d line at 587.6 nm for `nd` and `νd`. Its radius convention is the ordinary left-to-right sequential convention used by the data specification: positive radius means the center of curvature lies imageward. The selected example contains no conic or polynomial coefficients and no dimensional scale factor.

Three source defects were confirmed from the rendered pages rather than silently propagated:

1. Claim 2 and paragraphs 0011/0029 call the complete-system focal length `f1`, although the inequality and the rest of the patent require `TTL/f`.
2. Paragraph 0019 reverses the descriptions of Figures 2 and 3; rendered page 14 shows Figure 2 as aberration plots and Figure 3 as the conditions table.
3. Paragraph 0040 says Table 1 contains per-element focal lengths, but rendered page 8 has no such column.

## Independent optical verification

A new self-contained script manually re-enters the patent table and computes all optical quantities without reading the prior calculation artifacts. Reduced-angle sequential tracing and separately assembled ABCD multiplication agree exactly at double precision.

| Quantity | Independent result | Patent value / reference | Residual |
|---|---:|---:|---:|
| Complete-system EFL | 87.26084861 mm | 87.30 mm | −0.03915139 mm |
| Infinity BFD | 39.61400344 mm | 39.64 mm | −0.02599656 mm |
| Front-group EFL | 227.98467896 mm | 228.25 mm | −0.26532104 mm |
| Rear-group EFL | 74.67469617 mm | 74.69 mm | −0.01530383 mm |
| Close-state BFD, `ZD0 = 800 mm` | 50.30682755 mm | 50.34 mm | −0.03317245 mm |
| Close magnification | −0.12253862× | SL IIs approximately 1:8.1 | magnitude 1:8.16069 |
| Modeled f-number | 2.88000737 | published F/2.88 | +0.00000737 |
| Full-field chief-ray image height | 21.61048432 mm | 21.63 mm plot coordinate | −0.01951568 mm |
| Petzval sum | +0.0019292861 mm⁻¹ | not published | — |

The first-surface-to-image length is 85.83 mm, giving `TTL/EFL = 0.98361`; the strict telephoto test therefore passes, but only marginally. `BFD/EFL = 0.45427`, so the design is not retrofocus. The computed principal-plane locations are H1 = −0.630206 mm from surface 1 and H2 = −47.646845 mm from surface 15 under the script's stated sign convention.

The surface-by-surface Petzval calculation uses `φ/(n·n′)` at every refracting surface. Standalone element powers, front- and rear-functional-group powers, and complete-system power are reported separately in the results and calculation artifacts.

## Focus and reference-plane audit

The focus status remains `PUBLISHED`. Every internal spacing is fixed; only the final image-side gap changes from 39.64 mm to 50.34 mm. The assembly therefore extends by 10.70 mm in the published close state.

The patent's 800 mm object gap is measured from the object plane to surface 1. Adding the 46.19 mm internal vertex track and the 50.34 mm published close back focus gives 896.53 mm from object plane to image plane, consistent with the marketed 0.9 m minimum focus after reference-plane normalization. No internal focus reconstruction was introduced.

## Semi-diameter and render-surrogate audit

The patent publishes no semi-diameters or physical stop radius. The authored values remain modeling inferences. Independent checks found:

- all seven spherical edge thicknesses positive;
- all actual rim-slope angles below the current 64.2° threshold;
- all shared-band air-gap intrusions below `0.90 × gap`;
- zero local surrogate render trim;
- all default on-axis and 0.6-field LensVisualizer ray fractions contained at infinity and the published close state;
- minimum representative-ray clearance 1.503752 mm.

A denser non-default test showed that the extreme 0.6-field, 0.95-pupil ray clips surface 1 by about 0.558 mm. This does not contradict the validated default ray set and is not presented as proof of zero vignetting over the entire physical pupil. The clean analysis retains this qualification.

The actual repository `computeElementRenderDiagnostics()` was unavailable, so the local zero-trim result is explicitly a geometry surrogate rather than a claimed repository render-diagnostic run.

## Fresh glass audit

The glass review began from the patent's `nd`/`νd` pairs and six-digit optical positions, not from the existing labels. The OHARA glass table and cross-vendor comparison, together with current HOYA listings, identify plausible catalog families such as TAC8, FCD100, S-NBH5/N-KZFS5, S-LAH95/TAFD25, NBFD11, and S-LAH64. Several positions have multiple vendor equivalents or near-equivalents.

No vendor identity is stated by the patent. The existing six-digit/class labels are therefore retained. No `nC`, `nF`, `ng`, `dPgF`, or element-level APD assertion was added. The production-level statement that five of seven elements use abnormal-partial-dispersion glass remains clearly separated from the Abbe-only patent model.

## Production-correlation audit

Cosina's official VM and SL IIs product pages both specify 90 mm, f/2.8, seven elements in seven groups, 0.9 m minimum focus, and unit extension of the entire lens. The official product diagrams are byte-identical SVG files and visually match Example 1's topology, curvature sequence, stop location, and separated rear pair. The VM page lists 27.4°; the SL IIs page lists 27.5° and 1:8.1 maximum reproduction. Both products were released on 2021-11-30, after the 2021-09-29 patent filing.

This remains a convergent correlation, not a manufacturer statement that Example 1 is the production prescription.

## Corrections applied

### 1. Modeled wide-open f-number metadata

- **Old:** `nominalFno: 2.88` and first `fstopSeries` value `2.88`.
- **Corrected:** `nominalFno: 2.88000737` and first `fstopSeries` value `2.88000737`.
- **Source location:** final data aperture block; patent Table 1 on page 8 publishes F/2.88; stop radius is an authored inference.
- **Independent evidence:** EFL 87.26084861 mm, front-to-stop pupil mapping, and stored stop radius 8.8456 mm produce an entrance-pupil radius of 15.14941412 mm and F/2.8800073699.
- **Downstream consequences:** wide-open metadata and the first quick-select endpoint now match the actual authored model. `apertureDesign` remains the published design value 2.88. Analysis wording was updated to distinguish the two.

### 2. Production-correlation wording

- **Old:** the analysis described the marketed field only as “approximately 27.4°” and did not record the direct product-diagram match.
- **Corrected:** the analysis states 27.4° for VM and 27.5° for SL IIs and adds the identical official-diagram match as independent correlation evidence.
- **Source location:** Cosina official VM and SL IIs specification pages and lens-diagram SVGs; patent Figure 1 on page 14.
- **Independent evidence:** both downloaded SVG files have SHA-256 `8cc075521c9cab7fe18049f84322a0349a7666bfc40eea3a32324a19ab238ba3`; their optical silhouettes match Example 1.
- **Downstream consequences:** the correlation is stronger and variant-specific marketed data are accurate. The prescription and product association are unchanged.

No prescription row, focus gap, semi-diameter, glass label, element/group count, mount, format, or patent metadata correction was required.

## Final targeted gate

| Check | Result |
|---|---|
| Fresh patent transcription vs final TypeScript | PASS |
| Reduced-angle trace vs ABCD | PASS, maximum delta 0.0 |
| Local strict TypeScript/schema stub | PASS |
| Current formatting-policy checks | PASS |
| Prettier executable | UNAVAILABLE; no actual Prettier run claimed |
| All defined focus states | PASS |
| Edge thickness / rim slope / gap intrusion | PASS |
| Representative ray containment | PASS |
| Surface-by-surface Petzval | PASS |
| Fresh glass-label audit | PASS; no relabel required |
| Analysis structure and shared metadata | PASS |
| Repository `buildLens()` / `validateLensData()` | DEFERRED; repository unavailable |
| Repository render diagnostics | DEFERRED; repository unavailable |
| Repository glass mismatch scan and targeted tests | DEFERRED; repository unavailable |
| `generate:metadata`, full build, full corpus tests, Git | Not run, as required |

The clean pair contains no correction log or process notes. Those remain in this audit record.

`READY_FOR_BATCH`

## 2026-08-02 integration review

The repository renderer was compared with the 600 dpi Figure 1 render. The staged semi-diameters preserve the patent's
progressively narrowing front group, compact stop-adjacent L5, and similarly sized separated rear pair, so no SD change
was warranted. The display name now identifies both correlated products as `APO-SKOPAR 90mm F2.8 VM / SL IIs`, and
inventor metadata consistently uses the established `Yuki Shibata` romanization.

All seven elements already had coordinate-compatible catalog coverage. Their labels now state the actual optical
equivalents—TAC8, FCD100, N-KZFS5, N-LASF46B, NBFD11, and J-LASF014—while leaving every production supplier
unspecified. Strict Sellmeier coverage remains 7/7, with no change to patent `nd` or `νd` values.

## Second SD audit — 2026-08-02

A fresh post-commit render was checked again against Example 1 Figure 1. The five front menisci and separated rear pair
retain the patent's relative heights and edge progression. The stored apertures pass `audit:image-circle` and the
production render-diagnostics test, so no SD correction was supported.

## Screenshot and label audit — 2026-08-02

The supplied repository screenshot was compared side by side with patent Example 1 Figure 1 and Cosina's official
optical-section SVG. The front taper and rear-pair proportions remain within the procedure's 15% no-change band; no
surface has strong enough figure evidence for another SD edit.

- No semi-diameter changed.
- L2, L3, L4, L5, and L7 now carry manufacturer-derived `apd: "inferred"` labels, matching the five marked positions
  in Cosina's section without inventing line indices or `dPgF`.
- The header now separates modeled, patent, and marketed focal, aperture, and angle-of-view values.

Verification: `audit:image-circle`, `audit:surface`, production render diagnostics, glass reports, typecheck, formatting,
lint, full tests, and production build all pass.
