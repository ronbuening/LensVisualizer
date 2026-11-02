# Reconstruction audit

Original scope, superseded by the movement and plate changes below: US 20260003158 A1, Example 18, Figure 39, Tables 45-47. The initial model covered centered infinity to 0.5× and omitted tilt and shift. Source ED means diameter. K = KA - 1 = 0, and all A4-A20 terms are preserved. The initial model retained the 3.2 mm PP and 0.9874 mm terminal gap explicitly. Three-term partial-dispersion Cauchy reconstruction does not identify factory melts. The source 4.419 micrometre infinity residual is retained. Native DD15 values are 2.9000 and 26.8818 mm. The physical plate train implies a calculated first-vertex distance of 257.939149977679 mm and object/image distance of 0.426259949977679 m, not the rounded maker 0.43 m MFD. Intermediate inverse-distance motion is inferred; only the printed near state supplies a tabulated finite conjugate.
The initial model omitted perspectiveControl and the retail ±10° tilt and ±15 mm shift ranges; this limitation is superseded below. Initial evaluation used the centered 44×33 mm format; the larger source 43.4° full field was not established as a fully illuminated shift image circle. Source stop ED 17.440 mm is recorded, while the engine derives stop radius from design f/5.76. Source effective diameters are unchanged. The 19→20 air gap needs gapSagFrac 0.911: default 0.90 and 0.91 fail while 0.911 passes with positive physical separation. Reducing source ED or changing source gap would be less faithful, so no alternative was adopted. Standard rim-slope, element-edge, render-trim and collision checks remain unchanged. Source 4.419 µm infinity defocus and near magnification −0.499875264 rounding residual are retained, not optimized. The initial infinity/0.5× MTF evaluation had 30 available field/spectrum results across reference, photopic and C/d/F; convergence was band-limited where recorded. Off-axis marginal rays vignette at source surface 1; no source ED is enlarged to erase this.

The original patent tables remain the source for printed values; derived material curves, stop radius and intermediate motion are identified as calculations. The earlier validation recorded coverage, failures, physical aperture clipping and convergence bands.

## 2026-10-26 — Deployment validation and wording pass

The independent patent validation was re-read, together with the original Table 45–47 page and ¶0276, Figure 42. It checked all 23 numbered surfaces, 18 polynomial coefficients, two conics and both printed DD15 values, with no optical transcription mismatches. The current 21 retained rows, coefficients, conics, effective diameters, nd/νd and partial-dispersion ratios were compared again with those source readings. Surface 21's folded spacing is the intentional representation change described below; the stop radius remains derived rather than set to the printed 17.440 mm diameter. Source KA = 1 maps to conventional K = 0.

Patent versus model: infinity EFL 109.9746 → 109.9668 mm; design F/5.76 → engine FOPEN 5.76, with paraxial stop-based F/5.738. Near EFL is 88.8827 → 88.8856 mm. With the physical plate train, calculated near magnification is −0.499875264 versus printed −0.5000, and the derived object-to-sensor distance is 0.426259950 m versus Fujifilm's rounded 0.43 m. The source prescription's infinity residual remains 4.419 µm. DD15 2.9000 → 26.8818 mm translates L1–L8 and the stop 23.9818 mm objectward; intermediate positions are calculated, not printed cam measurements.

Fujifilm's specifications confirm 11 elements / 9 groups, one aspherical element, two ED elements, 0.5×, 0.43 m, ±15 mm shift and ±10° tilt. The maker drawing agrees with Figure 39's element shapes, cemented L4/L5 and L6/L7, ED positions L4/L8 and final aspherical L11. L4 and L8 now carry inferred ED designations: nd = 1.49700 and νd = 81.61 are consistent with that placement, without identifying production glass or melt. Surfaces 20 and 21 confirm two aspherical surfaces on one element.

The coordinator added the movement model before this wording pass: shift ±15 mm, tilt ±10°, control steps 0.1 mm / 0.1°, and a fixed camera/sensor frame. The pivot basis is patent-principal-point-guidance, 109.9746 mm objectward of the image plane, using ¶0276, Figure 42 and Example 18's infinity EFL. This is patent design guidance rather than a measured hinge location. The maximum traced half-field is now 27.5015388923°, compared with the former centered value 21.3217° and the patent design half-field 21.7°. Combined extreme movements extend beyond the design field and vignette. Shift alone gives a 40.5123 mm sensor-corner radius, inside the approximately 43.7642 mm patent design height; this is a field-size comparison, not full-pupil coverage certification.

The coordinator also removed the explicit rear plate because perspectiveControl and rearPlates cannot be combined. Surface 21 now stores 78.8866 + 3.2/1.51680 + 0.9874 = 81.9837046413502 mm, representing patent surfaces 22–23 and the terminal gap. Reference-wavelength paraxial focus, EFL and focus travel are preserved; the plate's own spherochromatism and aperture clipping are no longer traced. Physical infinity vertex-to-image length is 144.339 mm, while the air-equivalent track is 143.2487046413502 mm. The focus label retains the physical object-to-sensor distance; the probe reports the shorter air-equivalent distance and holds the image at its infinity best-focus offset. Its near object-to-image value of 425.16 mm is therefore distinct from the physical 426.259950 mm distance. The earlier shared plate-face aperture radius discrepancy no longer applies to an explicitly traced plate.

This pass replaced the process-based subtitle, added the five design-specification lines, rewrote the header, focus description and eleven element roles, and added the two inferred ED notes. Movement comments were moved above the object literal. The analysis retains its patent metadata and optical numbers, removes production-process language and test-result counts, and explains movements, the plate fold, field limits and calculated focus distances in plain technical English. Historical audit scope is marked as superseded and the engine hash was removed. No private Google Drive URL was present. Name, key, source.example, bibliographic fields and all optical numbers were retained.

Before/after engine summaries and all 101 focus-keyframe probe results are identical: EFL 109.96676330540512 mm, FOPEN 5.76, half-field 27.501538892316226°, stop radius 8.708569321163605 mm, infinity paraxial BFD 81.9881 mm and near BFD 37.5520 mm. All 399 numerical fields are unchanged. The surface audit returned “OK — no validation errors”.

Open: production correspondence remains probable; production glass identities, the measured hinge position and the intermediate focusing cam remain unknown. Combined extreme movements do not provide full design-field coverage, and intermediate finite-focus MTF remains unavailable. Earlier MTF results with the explicit plate do not establish performance of the folded-plate movement model. Rendered-page review is assigned to the coordinator; no screenshots, broader test suite, build, metadata generation or git changes were performed in this pass.

## 2026-10-26 — Semi-diameter pass against the patent figure

Source: US 2026/0003158 A1 (local PDF), Table 45 on PDF page 75 and Figure 39 (Example 18) on PDF page 40, a 300 ppi CCITT raster drawn with the optical axis vertical and the object at the bottom. The right side of the figure carries only the G1 bracket, outside the glass, so rims were profiled there; the left side carries the leader lines.

Table check: Table 45 prints an effective diameter for every surface. All 20 stored non-stop `sd` values equal the printed ED/2 exactly (surface 1 20.940 → 10.47 through surface 21 32.769 → 16.3845). The stop keeps its engine-derived radius 8.7086 mm against the printed 17.440 mm diameter (8.72 mm radius). The R, D, Nd, νd and A4–A20 rows read on the same page also match the file.

Scale: the 21 vertex crossings beside the axis fall within ±2 px of the infinity-state prescription positions (DD15 = 2.9000 mm). First to last vertex is 884 px for 61.265 mm, 14.43 px/mm (69.3 µm/px); the spans surface 1 → stop (363 px / 25.140 mm = 14.44 px/mm) and stop → surface 21 (521 px / 36.125 mm = 14.42 px/mm) agree. The automatic figure screen independently gave 69.03 µm/px.

| Element (surfaces) | Stored sd = ED/2 (mm) | Figure rim (mm) | Figure / printed |
|---|---|---|---|
| L1 (1, 2) | 10.470 / 10.517 | 10.88 | 1.04 / 1.03 |
| L2 (3, 4) | 10.901 / 11.036 | 11.57 | 1.06 / 1.05 |
| L3 (5, 6) | 11.200 / 11.153 | 11.85 | 1.06 / 1.06 |
| L4 + L5 (7, 8, 9) | 10.560 / 10.140 / 9.295 | 11.16, square-cut | 1.06 / 1.10 / 1.20 |
| Stop | 8.72 printed, 8.709 engine | 8.39 | 0.96 |
| L6 + L7 (11, 12, 13) | 8.663 / 9.584 / 10.400 | 11.09, square-cut | 1.28 / 1.16 / 1.07 |
| L8 (14, 15) | 12.026 / 12.527 | 13.24 | 1.10 / 1.06 |
| L9 (16, 17) | 14.765 / 14.900 | 15.45 | 1.05 / 1.04 |
| L10 (18, 19) | 14.872 / 15.298 | 15.32 | 1.03 / 1.00 |
| L11 (20, 21) | 15.364 / 16.385 | 16.74 | 1.09 / 1.02 |

Against each element's largest printed rim, the figure reads 1.00–1.07 (median about 1.05): a uniform drafting over-draw with the element-to-element order intact. The one systematic difference is that Figure 39 draws both cemented doublets with one square-cut rim at about the larger member's height, while Table 45 prints a stepped ED per surface (L4/L5 10.56 → 10.14 → 9.30 mm; L6/L7 8.66 → 9.58 → 10.40 mm). The rendered doublets therefore taper toward the stop where the drawing is square. The automatic screen's L10 reading (16.64 mm) is contaminated by the adjacent L11 rim; the hand reading is 15.32 mm.

Values retained: all 20. The printed effective diameters are source data, and every figure departure is either within the drafting offset or the doublet square-cut convention, so no rim was widened or trimmed. `checks.gapSagFrac` 0.911 was not changed.

Clearance at the 44 × 33 mm corner (Y = 27.5 mm, 14.06° centred): no axial clip and no blocked chief ray at infinity or at the printed −0.5× near state. The printed EDs sit on the f/5.76 axial marginal ray at surfaces 5–9 with 0.01–0.04 mm to spare (surface 5 11.16 / 11.20; surface 6 11.11 / 11.153; surface 7 10.55 / 10.5595; surface 8 10.13 / 10.14; surface 9 9.28 / 9.295 mm), consistent with Table 45's diameters having been set from the axial beam. Off-axis vignetting is a fact of the design: 43 % of the full-field bundle side is cut at surface 1 at the centred corner and 80 % at the patent's 21.7° half-field. The engine vignetting curve reads 100 % on axis, 90.6 % at 7.0° and 70.8 % at 14.0°. Engine values are unchanged by this pass: EFL 109.9668 mm, F/5.76, half-field 27.5015°, stop radius 8.7086 mm; the image-circle floor reports 0 undersized surfaces, traced corner coverage is 100 %, and the surface validator reports no errors.

Live render: the infinity, near-focus, 15 mm shift and 10° tilt pages were rendered locally. The silhouette overlays Figure 39 at matched scale with vertices aligned; apart from the doublet taper above, element order, heights and the near-contact of L10 and L11 at the rim match the drawing. At 15 mm shift and at 10° tilt the sensor-centre bundle clears every element. The off-axis ray fan shown by the page (0.6 × 27.5° = 16.5°, about 32.5 mm image height) lands beyond the drawn sensor and is drawn entirely as ghost rays, with or without shift.

Open: the stepped doublet rims are a source-versus-drawing difference that this pass records but does not resolve.

Glass relabel (coordinator, same day): L1–L9 now carry catalog-equivalent labels. These are S-NBH5, S-TIM5 and S-LAH55V (OHARA) and LAC14, FCD1 and E-CF6 (HOYA), each with the production supplier unspecified. Their Cauchy nC/nF/ng fits were removed, so they trace on the catalog curves. Every label resolves as nd/νd-compatible. Computed from the catalog entries, the θgF differences from the printed values are: S-NBH5 0.57376 vs 0.57378, LAC14 0.54257 vs 0.54260, S-TIM5 0.58354 vs 0.58356, S-LAH55V 0.56484 vs 0.56477 (L6) and 0.56490 (L9), FCD1 0.53885 vs 0.53804, and E-CF6 0.55894 vs 0.55800. E-CF6's catalog νd is 52.15 against the printed 52.20. L10 and L11 stay unmatched on their Cauchy fits, and the L4/L8 ED tags are kept. The analysis prose and the data-file header were brought in line. No optical numbers or rims changed.

## 2026-10-26 — Second review: diagram, labels and movement

Compared the live local page at infinity and closest focus with the local US20260003158A1.pdf, Example 18, Figure 39 (PDF page 40), Tables 45–47 (page 75), and ¶0268–0269 (page 74). All page references below are physical PDF pages; printed text-page numbers are 43 lower. The scanned PDF has no usable text layer. The publication's searchable Google Patents text was used to search all examples for material recurrences and named glass, with the numerical matches below checked visually in the local PDF. No maker image was downloaded or viewed in this review.

The earlier Deployment validation record says: “The maker drawing agrees with Figure 39's element shapes, cemented L4/L5 and L6/L7, ED positions L4/L8 and final aspherical L11.” Those earlier names were front-to-rear physical positions. The same record confirms 11 elements / 9 components, one aspherical element and two ED elements. The assignment's maker-description shorthand calling both last elements menisci differs from Table 45: physical element 10 has R18 = −48.5517 and R19 = +234.9367 mm, so it is biconcave. The existing biconcave type was correct and retained. Figure 39 governs the modeled silhouette.

### Changes and retained data

| Field | Before | After | Evidence |
|---|---|---|---|
| Physical elements 1–8, `name` and `diagramLabel` | Names L1–L8; no authored diagram labels | Names and diagram labels L11–L18 | Figure 39 and ¶0269, pages 40 and 74 |
| Physical element 9, `name` and `diagramLabel` | L9; no diagram label | L21 for both | Same sources |
| Physical element 10, `name` and `diagramLabel` | L10; no diagram label | L22 for both | Same sources |
| Physical element 11, `name` and `diagramLabel` | L11; no diagram label | L23 for both | Same sources |
| `groups` | Absent | G1: surfaces 1–15; G2: 16–21 | G1 includes first eight lenses and stop; G2 includes three rear lenses, ¶0268–0269 |
| `doublets` | Absent | L14 + L15: surfaces 7–9; L16 + L17: 11–13 | Figure 39; uninterrupted medium transitions in Table 45 |
| Physical element 9 `type` | Meniscus Positive | Meniscus Positive (Convex to Image) | Both radii negative; positive isolated power, Table 45 |
| Physical element 11 `type` | Meniscus Negative (Aspheric) | Meniscus Negative (Two Aspheric Surfaces, Convex to Image) | Both radii negative; two starred faces and two coefficient columns, Tables 45 and 47 |
| Physical elements 4 and 8 `apdNote` | ED positions called L4 and L8 | Explicit physical positions 4/8 and patent L14/L18 | Keeps the earlier maker evidence distinct from patent naming; inferred tags retained |
| Header and analysis | Sequential element names; no recurrence result | Patent-name mapping, matching architecture/types and material evidence below | Same source pages; no optical values changed |

Generic inspector labels “Element 1” through “Element 11” and numeric IDs remain the front-to-rear sequence. All 372 numeric JSON leaves, every complete surface record, all glass labels and line indices, APD tags, the focus description, 101 keyframes, and every DD15 value are unchanged. No ordering correction was needed. Header and analysis were kept consistent with the new names; historical sections above retain the names used at the time.

### Independent silhouette measurement

Remeasured Figure 39 at 300 dpi (2560 × 3300 pixels), without using the first-pass measurements as inputs. The axis finder locates x = 1377; the clean right-side profile stops at x = 1630, inside the G1 bracket. Vertex crossings are approximately y = 2786 (surface 1), 2424 (stop), and 1902 (surface 21), each within about 2 pixels. The full powered span is 884 pixels / 61.265 mm = 14.43 px/mm, or 0.0693 mm/px. The independent split spans are 362 pixels / 25.140 mm = 14.40 px/mm and 522 pixels / 36.125 mm = 14.45 px/mm. Rims below are approximate ink heights, with around 0.1–0.2 mm reading uncertainty.

| Physical element / patent name | Stored sd, unchanged (mm) | Figure rim (mm) | Live comparison |
|---|---|---|---|
| 1 / L11 | 10.470 / 10.517 | 10.88 | Slight unequal-face bevel; almost square in print |
| 2 / L12 | 10.9005 / 11.036 | 11.57 | Slight rim bevel; taller than element 1 |
| 3 / L13 | 11.200 / 11.153 | 11.85 | Taller than element 2; order correct |
| 4–5 / L14–L15 | 10.5595 / 10.140 / 9.295 | 11.16, square-cut | Site tapers toward stop; print has one height |
| 6–7 / L16–L17 | 8.6625 / 9.584 / 10.400 | 11.09, square-cut | Site rises away from stop; print has one height |
| 8 / L18 | 12.0255 / 12.5265 | 13.24 | Unequal-face bevel; taller than preceding doublet |
| 9 / L21 | 14.765 / 14.900 | 15.45 | Height order and meniscus direction agree |
| 10 / L22 | 14.8715 / 15.298 | 15.32 | More slanted rim; biconcave bowl reaches near final element |
| 11 / L23 | 15.3635 / 16.3845 | 16.70 | Unequal-face rim; tallest element, both aspheres marked |

The largest-rim figure/store ratios are approximately 1.00–1.07, consistent with modest drafting enlargement. The substantial local differences remain the two squared doublets versus stepped printed effective diameters; the rear L22/L23 near-contact and the rising rear heights agree. No new overlap or bowl wrapping through a neighbor was seen. All 20 printed non-stop ED/2 rims were retained, as required by the batch decision; no trial rim or policy-field change was proposed. STO was untouched. The existing `gapSagFrac` remains 0.911.

The saved side-by-side, with object at left and approximately matched axial scale, is `/private/tmp/claude-501/-Users-ronbuening-Programming-Code-LensVisualizer-LensVisualizer/1168ee07-3a95-429a-8228-c96717740b52/scratchpad/r2/gf110/gf110-second-review-comparison.png`. Independent profile and vertex readings are in `profile-clean.txt` and `vertices-independent.txt` in the same scratch folder.

### Focus, stop, tags and live page

This is a prime; there are no zoom stations or zoom-order defects. Page 74 ¶0268 and Figure 39's arrow show G1 moving objectward and G2 stationary relative to the image plane. Table 46 on page 75 gives infinity DD15 = 2.9000 mm and nearest DD15 = 26.8818 mm at −0.5000×: G1, its first eight lenses and STO translate objectward by 23.9818 mm as one unit; G2 does not move. All 101 stored gaps increase strictly; keyframe 0 is infinity and keyframe 100 (`focus=1` on the page) is nearest. The probe shows infinity EFL 109.9668 mm and near EFL 88.8856 mm; near calculated magnification is −0.4999. All 101 before/after probe state summaries are identical. The live focus overlay now shows two named groups, G1 travel 23.98 mm and G2 zero travel, with the current point at the correct endpoint at both slider extremes. The far-end distance label is 43 cm, consistent with the retained calculated physical distance 0.42626 m. Intermediate motion remains calculated rather than a published cam.

STO is between L15 and L16, as in Figure 39 and Table 45. Only surfaces 20 and 21 carry asphere entries; both have visible A markers, and the L23 inspector says ASPH ×2. L14 and L18 keep `apd: "inferred"`, matching physical elements 4 and 8 in the earlier maker comparison; no patent APD tag is asserted. The ED table column is effective diameter. All other tags remain false. The nine air-separated components and two cemented joins are correct.

Render-queue checks after the edits covered infinity, closest focus, focus overlays at both endpoints, the requested zoom overlay (which correctly falls back to Focus with Zoom disabled for this prime), +15 mm shift and +10° tilt. Element labels are legible in two rows. The moved pages keep the sensor fixed, and the near page visibly increases the G1/G2 gap while leaving the rear three lenses fixed. Inspectors were opened for IDs 4, 8, 10 and 11: the two ED badges remain inferred; types and displayed FCD1/unmatched-source material descriptions agree with the data. Visible ED focal lengths are +33.41 and +52.38 mm; the probe confirms L22 −72.66 and L23 −155.47 mm. The fixed 1400 × 900 capture cuts off the lower long-form inspector content, including roles and the two aspheres' coefficient list; roles were checked in source against the architecture, not claimed as fully visually read. No interactive browser was available for scrolling. Roles correctly describe the two cemented members, moving L18, fixed rear meniscus, negative middle rear singlet and two-sided final asphere.

### Clearance and before/after engine results

The surface audit before and after reports “OK — no validation errors”; the image-circle floor reports 0 undersized surfaces. Traced centered corner coverage is 100% in both runs (the coverage tool reports 14.0° and 27.39 mm; the independently aimed Y = 27.5 mm trace uses 14.06°). `built.mjs` completes without throwing.

| Metric | Before | After |
|---|---|---|
| EFL (mm) | 109.96676330540512 | 109.96676330540512 |
| Engine half-field | 27.501538892316226° | 27.501538892316226° |
| FOPEN | 5.76 | 5.76 |
| Paraxial stop-based f-number, infinity | 5.738 | 5.738 |
| Engine stop radius (mm) | 8.708569321163605 | 8.708569321163605 |
| Geometric transmission at 0 / 2.3 / 4.7 / 7.0 / 9.3 / 11.7 / 14.0° | 100.0 / 97.4 / 94.3 / 90.6 / 84.4 / 77.6 / 70.8% | 100.0 / 97.4 / 94.3 / 90.6 / 84.4 / 77.6 / 70.8% |

`clearap` finds no CLIPS-AXIAL or BLOCKS-CHIEF at the centered corner or at the patent half-field 21.7°. At 21.7° it reaches Y = 43.600 mm and reports 80% bundle-side vignetting at surface 1; this is not an 80% pupil-area loss. At the centered corner the corresponding side clipping is 43%. The `--focus` CLI argument is a keyframe index, unlike the normalized URL value: the nearest geometry was checked with `--focus 100`, not `--focus 1`. That trace has no axial/chief flags, but launches infinity-conjugate rays through the near geometry and is not a finite-conjugate 0.5× clearance certification. No finite-focus ray claim is inferred from it. The preserved source-based EDs were not enlarged to suppress ordinary vignetting. Engine half-field includes extreme perspective movements and remains larger than the patent's centered design field; it was not reduced.

### Unmatched glasses and material evidence

Current resolver results: S-NBH5 (L11), LAC14 (L12), S-TIM5 (L13), FCD1 (L14/L18), E-CF6 (L15/L17), and S-LAH55V (L16/L21) all resolve compatibly in the current catalog. Only physical elements 10 and 11 remain unmatched, now named L22 and L23. Their fitted partial dispersions reproduce the printed 0.54469 and 0.54116. Catalog comparisons were recomputed in `glass-check.txt`; no label or line index was changed.

| Example / table / PDF page | Exact L22 triple 1.55298 / 55.07 / 0.54469 | Exact L23 triple 1.58480 / 58.71 / 0.54116 | Relevant material reading |
|---|---|---|---|
| 11 / 29 / 70–71 | Absent | Absent | Different 106.7003 mm macro prescription |
| 12 / 31 / 71 | Absent | Absent | Different 113.3109 mm macro prescription |
| 13 / 33 / 72 | Absent | Absent | Different 113.2913 mm macro prescription |
| 14 / 35 / 72; focal data Table 36 page 73 | Absent | Absent | 113.2744 mm; final two materials 1.88326 / 39.67 / 0.57132 and 1.90000 / 26.08 / 0.61299 |
| 15 / 37 / 73 | Absent | Absent | 109.6859 mm; rear two materials 1.83501 / 43.13 / 0.56293 and 1.84666 / 23.77 / 0.62370 |
| 16 / 39 / 73; focal data Table 40 page 74 | Absent | Absent | 113.3012 mm; rear two materials 1.58449 / 41.25 / 0.57669 and asphere 1.58313 / 59.38 / 0.54237 |
| 17 / 42 / 74 | Absent | Absent | 112.7894 mm; rear two materials 1.85150 / 40.76 / 0.56920 and asphere 1.58313 / 59.38 / 0.54237 |
| 18 / 45 / 75 | Surface 18 | Surface 20 | Governing prescription |
| 4 / 10 / 64 | Absent | Surfaces 1, 20, 24 | Exact L23 triple repeats three times |
| 5 / 13 / 65 | Absent | Surfaces 1, 20, 24 | Exact L23 triple repeats three times |
| 6 / 16 / 66 | Absent | Surface 1 | Exact L23 triple |
| 7 / 19 / 67 | Absent | Surfaces 1, 20 | Exact L23 triple repeats twice |
| 8 / 22 / 68 | Absent | Surface 1 | Exact L23 triple |

The approximately 110 mm examples change material selections rather than repeating either Example 18 rear triple. The 1.58480 triple nevertheless recurs exactly across several approximately 31 mm examples and multiple elements, so it is a reused glass-like material specification, not evidence of a separately floated triple in every example. This does not establish a real commercial glass, vendor or melt. The 1.55298 triple is unique to Example 18 in the publication's searchable tables; that is compatible with optimiser-floating but does not distinguish a floated material from a unique real glass choice. No such optimisation history is stated. The requested binary real-glass/floated verdict cannot be proved for either from recurrence alone.

The patent names no glass brand, catalog code or supplier. It supplies nd, νd and θgF, whose definitions appear in ¶0205–0207 on PDF page 60, and uses generic “cover glass” for the plate. Table 45 on page 75 gives the two full triples but no independently tabulated absolute nC/nF/ng, chemical composition or resin/glass identity. The three stored line indices per unmatched material are derived Cauchy fits, as their existing notes say; they are not extra patent identification.

Retained spectral-proxy differences, not proven wrong supplier labels: FCD1 on physical elements 4 and 8 yields θgF = 0.53885 against source 0.53804; E-CF6 on 5 and 7 yields νd = 52.15 / θgF = 0.55894 against 52.20 / 0.55800. S-LAH55V on 6/9 gives νd 42.73 against 42.72/42.74 and θgF 0.56484 against 0.56477/0.56490. The other three catalog partial dispersions agree within 0.00003. The labels are qualified catalog equivalents with production supplier unspecified, and were not altered. No APD placement defect was found.

### Remaining limits and report-only items

The data's aspheric surface labels are still `20` and `21`, without the requested `A` suffix; Table 45 stars both and Table 47 supplies both aspheres (page 75). Their entries and visible A markers are correct. Renaming raw surface labels and dependent bracket references is outside this review's enumerated edit list, so the coordinator can change these to `20A` / `21A` if required. No other proven transcription or movement-order defect was found.

The printed ED/drawing doublet difference remains intentionally unresolved. Surface 21's folded plate train, the retained 4.419 µm infinity residual, combined-movement vignetting and the unmeasured production hinge/cam remain the existing limitations. The plate fold preserves reference-wavelength paraxial focus but not physical plate spherochromatism or clipping. No new policy-field trial was needed. Only this lens's three files were edited; no broad tests, build, metadata generation, dev-server changes or state-changing git commands were run.

Front page read directly: US 2026/0003158 A1, published January 1, 2026; applicant and assignee FUJIFILM Corporation; inventors Daiki Komatsu, Takuya Tanaka and Hiroki Saito. These agree with the retained source metadata.

Glass backfill (coordinator, same day): L22 (physical element 10, 1.55298 / 55.07 / θgF 0.54469) is relabelled J-KZFH4 (HIKARI catalog equivalent; production supplier unspecified). The HIKARI 2025 catalog row prints nd 1.552981, νd 55.07 and g−F/F−C 0.5447, matching all three printed quantities, and the row is already in the repo catalog; the element's Cauchy line indices and note were removed so it traces on the catalog curve. L23 (1.58480 / 58.71 / 0.54116) still has no catalog row within tolerance (nearest SUMITA K-CSK120-M, 1.58444 / 59.12) and keeps its Cauchy curve; the triple recurs in Examples 4–8, which marks it as a real but unidentified material, probably a moulding glass.

Coordinator follow-up (same day): the aspheric surface labels are now 20A and 21A (corpus A-suffix convention); the G2 bracket ends at 21A. No numeric value changed.
