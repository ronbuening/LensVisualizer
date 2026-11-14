# Separate E1 source/static audit

The first section below is the historical static-only record, not current v2 status. Fresh v2 strict TypeScript, native construction and bounded rays have now run; see FINAL_FOCUSED_RECEIPT.json and FIELD_DIAGNOSIS.json. No full integration or acceptance is claimed.

Exact isolated baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 commits. Whole E1 table visually rechecked against the original scan. Source addendum manifest verified locally; original verified Drive ID 1rxPeLgyjmAaFxkArjfETe4KioxrYuI0E, SHA256 458f1ed12e7ab5b95f18a2a92139fd5acfd2c5be0f0a0b575a143ce97194d972. Original custody unchanged.

Independent source reconstruction and static geometry pass. Declared 40× scale, assumed-d, unmatched materials, midpoint stop and inferred caps remain qualifications. Printed-BF plane 65.48 mm retained; source L rounding distinguished from independent BF residual. No source retuning, row mixing, E2 Seidel data or finite motion law.

Native and integration work NOT RUN (historical restriction; closed by the deployment validation below). Paraxial cap clearance is not exact full-aperture validation. SHA256 before/after verification confirms completed XA2 archive and held E2 authored triad unchanged. This candidate contributes zero ready lenses until required native/integration checks are released and passed (historical readiness restriction; closed by deployment validation).


## Additive v2 review (2026-11-11)
Original audit above retained as historical static record. Current v2 changes only explicit rectilinear56deg field, maker maximum aperture16 and explanatory metadata. Source R/d/nV, assumed helium-d, inherited caps, midpointstop and printed-BF plane65.48 remain unchanged. See RIM_REVIEW.json and current focused receipts. No full acceptance; E2hold unchanged.

## Deployment validation (2026-11-12)

- Source: US 4,396,255 A (Google Patents PDF, `patents/US4396255A.pdf`), Embodiment 1. 12 R, 11 d, BF and 6 nd/νd
  match pages 6–8; every length is the normalized value × 40. EFL 40.001, BF 36.652 vs printed 36.72; the stored
  65.48 mm plane is 40 × (0.719 + 0.918). Helium d confirmed (S-TIH14 1.761821 at d vs 1.761572 at D).
- Product: the maker's handbook section (`https://esif.world-traveller.org/om-sif/lensgroup/images/40mmf2_diagram.jpg`)
  shows six separate elements with a central stop and L4/L5 almost touching, as in the patent's Fig. 1 (Embodiments
  1 and 2). Both embodiments fit; neither is established as the factory one.
- Integration fixes:
  - Rims raised to pass the f/2 axial bundle (`audit:aperture --raise`): surfaces 7/8 8.1 → 9.0, 9/10 9.4 → 9.7.
    Before, rims clipped the beam to about f/2.16.
  - `checks.gapSagFrac` 0.95: at 9.0 mm the L4 rear and L5 front faces of the 0.32 mm gap come within 0.02 mm, as the
    patent figure and the maker section both draw them.
  - Static focus sentinel 1e9 → 1e15 (house form).
- Closed: name and subtitle wording ("E1 hypothesis") resolved in the cleanup pass below. Field coverage stops at the maker's 56°
  (96 % of the corner), which is the declared angle of view, not clipping.

## 2026-11-12 — Cleanup and wording pass

Fields changed: the header now describes the scaling, assumed helium-d reference, inferred midpoint stop and rims,
printed versus calculated image plane, and uncertain production correlation in plain language. The subtitle changed
from "US 4,396,255 A EMBODIMENT 1 — REPRESENTATIVE SOURCE DESIGN" to
"US 4,396,255 A, Embodiment 1 — probable production match". Specs retain "6 ELEMENTS / 6 GROUPS" and replace
the four process/limitation lines with "DESIGN f = 40 mm", "ALL SPHERICAL", "f/2–16" and "0.3 m CLOSE FOCUS".
The catalog design focal length changes from the traced 40.00067387129505 mm to the scaled printed 40 mm, following
the sibling Auto-S 50mm f/1.8's stated-design convention. This does not change the traced focal length.

The focus description now states infinity-only scope and the production straight helicoid and 0.3 m minimum;
`focus.closeFocusM` remains 1e15 and `catalog.closeFocusM.marketing` remains 0.3. The handbook mirror explicitly
confirms f/2–16, 6/6, 56°, 0.30 m and straight helicoid:
https://esif.world-traveller.org/om-sif/lensgroup/40mmf2.htm. Mount, format, element/group counts and aperture stops
were already populated and remain unchanged. Six short element roles were added; labels and shape types were already
correct. No `apd` tags were added because no maker special-dispersion positions are established. All six elements are
air-separated: no `cemented` flags or `doublets` are appropriate, including the closely spaced L4/L5 pair.

Glass relabels below use catalog-row minus printed-pair deltas (Δnd / Δνd). Each former label was
"Unmatched (literal source n/v; no named catalog glass)". All five new names resolve with `trylabel.mjs`:

- L1 → LAC10 (HOYA catalog equivalent): 0 / +0.10.
- L2 → BAF5 (HOYA catalog equivalent): +0.000002 / +0.046899.
- L3 → BAF22 (HOYA catalog equivalent): −0.000004 / +0.021672.
- L4 → FD140 (HOYA catalog equivalent): 0 / +0.06.
- L6 → S-LAM54 (OHARA catalog equivalent): −0.000002 / −0.046830.
- L5 → "Unmatched (nd = 1.726, νd = 53.56)"; no catalog row meets the limits.

The older HOYA names are preferred where available; S-LAM54 supplies a present catalog spectral equivalent for L6.
None establishes the historical supplier or melt. No catalog-copied nC/nF/ng fields were present to remove; all
printed nd/νd values remain unchanged.

The analysis retains the patent identification, prescription differences, calculated element powers and image-plane
rounding explanation. It removes hidden-model/E1-hypothesis/held-E2 wording, hashes, package receipts, historical pupil
grid counts and acceptance prose. It now cites the handbook and MIR, states that both Embodiments 1 and 2 fit the
maker's section, describes the integration rim widening, and separates the 56° declared field from the 57.8° full-frame
corner. The earlier deployment-validation section is retained; its stale wording item is closed in place.

Before → after engine values are identical: EFL 40.00067387129505 → 40.00067387129505 mm; FOPEN 2 → 2;
halfField 28 → 28°; stop radius 8.090841230494291 → 8.090841230494291 mm; BFD 36.6520614099 → 36.6520614099 mm;
stored track 65.48 → 65.48 mm. Both focus keyframes remain unchanged: last gap 36.7200 / 36.6521 mm and
total track 65.4800 / 65.4121 mm at t = 0 / 1. No surface, rim, stop placement, gap, nd/νd or asphere value changed.
The surface audit reports OK. The aperture audit reports one station within 3% of the stated f-number, with zero
rim/trace/iris limits or failures. The field audit remains in the 90–99% coverage band, with no unsolved station.

Open: the maker/patent 56° field reaches about 96.4% of the format corner; the approximately 57.8° full-frame corner
remains beyond the declared field. Embodiment 1 versus 2 production identity remains unresolved. Stop position and
clear rims remain inferred; historical glass suppliers/melts and finite-focus motion remain unknown. Closed: the
L5 catalog-coverage gap was resolved by the LAL60 glass coverage pass below; this does not identify its historical melt.
Closed: off-axis throughput is quantified in the semi-diameter pass below. The requested rendered-page review could not be
completed: the screenshot helper produced no PNG, and localhost:5173 did not accept a connection. No server was
started. No command was refused by the sandbox or approval policy. Prettier was skipped as directed by the addendum.

## 2026-11-12 — Semi-diameter pass against the patent figure

Source: local `patents/US4396255A.pdf`, PDF page 2, Fig. 1, the shared sectional drawing of Embodiments 1 and 2.
Embodiment 1 remains the prescription, with all lengths scaled ×40. The scan is natively 300 dpi (2320 × 3408 px);
a 600 dpi crop was inspected for optical endpoints and bevels, with measurements made on the native scan.
The local axis runs from about y = 985 at the front to 982 at the rear; labels, leaders and the bevel beyond each
optical cap were excluded.

The first-to-last vertex span is about 531 px / 28.76 mm = 18.5 px/mm. Independent front and rear vertex spans
give approximately 17.8 and 19.1 px/mm. Axis-constrained spherical arc fits give a transverse scale of about
18.3 px/mm from S1, 19.3 from S12 and 20.1 from S7 when the common axial scale is fixed at 18.5 px/mm.
These checks identify a schematic shared drawing, rather than a metrically exact E1 section; individual cap
heights have roughly 5–8% drawing uncertainty. The matched-scale sketch confirms the roughly 12% outer-rim
shortfall and L2 front-cap shortfall. No iris tick is drawn, so the inferred iris cannot supply an independent
figure scale.

| Surface | Before sd (mm) | After sd (mm) | Native cap height / figure estimate | Basis |
| --- | ---: | ---: | --- | --- |
| 1 | 12.0 | 13.5 | about 249 px / 13.5 mm | L1 optical outline; square rim retained |
| 2 | 12.0 | 13.5 | about 249 px / 13.5 mm | Same square-cut L1 edge |
| 3 | 10.0 | 11.2 | about 208 px / 11.2 mm | L2 front curve ends above the rear optical cap |
| 11 | 12.0 | 13.5 | about 247–253 px / 13.4–13.7 mm | L6 optical outline; square rim retained |
| 12 | 12.0 | 13.5 | about 247–253 px / 13.4–13.7 mm | Same square-cut L6 edge |

Retained values and limits:

| Surfaces | Retained sd (mm) | Figure estimate (mm) | Reason |
| --- | ---: | ---: | --- |
| 4 | 10.0 | about 9.7 | Optical curve endpoint before L2's bevel; within drawing uncertainty |
| 5 / 6 | 9.5 / 9.5 | about 10.0 / 9.0 | Small deviations; retain existing caps rather than add uncertain cuts |
| 7 | 9.0 | about 9.0 | Optical endpoint before the bevel; actual axial beam floor retained |
| 8 | 9.0 | rear outline about 10.4 | Larger literal cap conflicts with the E1 L4/L5 airspace; retain the admitted beam floor |
| 9 / 10 | 9.7 / 9.7 | about 10.4 / 10.4 | Approximately 7% difference; retain the square rim and existing beam floor |

No land, rim cut, inner aperture or check tolerance changed. At the common 9.0 mm height, the S8/S9 airspace
is 0.017291 mm (94.596% of the 0.32 mm axial gap intruded), within the existing `gapSagFrac: 0.95`.
At 9.3 mm the spherical faces cross by 0.003482 mm; increasing both to the drawn rear height is not admissible.
The drawing's bevels are approximated by direct cap-end joins; no unsupported vertical land was substituted for
an oblique bevel. All interfaces are spherical, so no aspheric departure text needs recomputation.

The full trial set passed the surface audit before editing. Final surface construction is OK; image-circle audit
finds 0 undersized and 0 skipped. The aperture audit reports 1/1 station within 3% of f/2, with zero rim, trace,
iris or failed diagnoses at its default threshold. The limiter is the unchanged STO, and traced f-number is
1.999999998 both before and after. Engine half-field stays 28 → 28°, FOPEN 2 → 2, EFL 40.0006738713 →
40.0006738713 mm and physical stop radius 8.0908412305 → 8.0908412305 mm. The raw tracing half-field estimate
increases from 33.863748° to 35.411845°; the declared 28° limit stays in force. Both focus-keyframe prescriptions
retain their 28.76 mm vertex track and 36.7200 / 36.6521 mm final gaps; the lens is infinity-only.

The nominal-pupil `clearap` probe at f/2 constructs an 8.175 mm iris, larger than the app's 8.090841 mm iris,
and flags S8/S10 at 9.106/9.751 mm. These are not rays admitted by the actual iris. A native engine ghost trace
solved to the actual iris gives launch height 9.904337909 mm, S8 height 8.986048661 mm (0.013951339 mm
clearance), and S10 height 9.646336292 mm (0.053663708 mm clearance), with no failed hit. Using the corresponding
pupil-height f-number 2.019351230 in `clearap` gives no axial/chief flags; the engine's nominal f-number remains 2.
At the 21.65 mm corner, the largest chief height is S1 at 8.38 mm; all chief rays clear. Its upper/lower full-bundle
root solves remain unavailable in this meridional helper, so throughput is taken from the native pupil lattice.
LSA at nominal pupil fractions 1 / 0.85 / 0.7 / 0.5 is +0.009 / −0.027 / −0.126 / −0.115 mm.

Field coverage remains 96.4102%: 28° reaches 20.872800 mm of the 21.65 mm corner. The limiting declaration is
the unchanged 56° full field, not a rim; the chief reaches the corner at 28.898449°, clear of every rim.

The native 64-cell-across pupil lattice (3228 samples) and `rimcost.mjs --loo` give:

| Half-field angle | Geometric transmission before → after | Relative illumination before → after |
| --- | --- | --- |
| 0° | 100.0% → 100.0% | 100.0% → 100.0% |
| 28°, declared edge | 38.29% → 50.81% | 29.54% → 39.36% |
| 28.898449°, full-frame corner diagnostic | 33.95% → 46.96% | 25.68% → 35.66% |

The corner diagnostic explicitly supplies that angle to the native analysis field geometry; it does not change the
file's declared field. Both edge/corner calculations report zero unaimed and failed samples and no illumination
unavailability reason. No sampled field from 0° through 28° loses light against the committed cleanup baseline.
Element-at-a-time restores all build; each restore only removes some improvement and creates no field with more
light than the final set. There are no cuts or lands requiring a loss-budget exception. These percentages are
simulated geometric transmission and relative illumination, not measured production performance.

Visual review used the prescribed model sketch, not a live page. The matched-scale figure/model comparison is
`/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-JJvsUM/5d6b978d-236f-4b6b-95b4-43ea08b0f623/scratchpad/sd/zuiko40/overlay.png`.
Outer L1/L6 heights and the front of L2 follow Fig. 1 more closely; the L4/L5 rear outline and oblique bevels
remain qualified. A live browser check belongs to the coordinator.

The existing local maker section `v-zuiko40/diagrams/40mmf2_diagram.jpg` was viewed: six air-separated elements,
central stop, and near-touching L4/L5 agree; the drawing is smaller and includes mechanical housing, so no precise
maker rim calibration is claimed. Neither it nor the existing maker comparison identifies special-glass positions;
all six elements are spherical. No new image was downloaded.

The front page was inspected: inventor Toshihiro Imai; assignee Olympus Optical Co., Ltd., Tokyo; US 4,396,255,
August 2, 1983. Existing patent metadata agrees. No new name/metadata discrepancy was found. Production E1/E2
identity, inferred stop/rims, finite-focus motion and the declared-field/corner difference remain unresolved.
Formatter write/check commands completed; the repository's `.prettierignore` excludes these lens-data files, so
they did not reformat them. The scoped whitespace check is clean. A structural comparison with the committed
baseline finds exactly the five listed `sd` changes and no other data-object differences.
No sandbox or approval refusal occurred.

## 2026-11-12 — Glass coverage pass

L5 `Unmatched (nd = 1.726, νd = 53.56)` → `LAL60 (OHARA catalog equivalent; …)` (Δnd = −0.000001, Δνd = +0.006), using the discontinued Ohara LAL60 row added to the catalogue from the 2026-07-01 Ohara Zemax file (the later S-LAL60 shares its coefficients). Every element now traces on a catalogue curve.

## 2026-11-12 — Second review: diagram, labels and movement

Compared the coordinator's current `shots/zuiko40/page.png` and all six element-inspector PNGs with local
US4396255A PDF page 2, Fig. 1, and re-read the front page, Embodiment 1 table and Fig. 3 aberration plots.
The prior maker-diagram record reports six separate spherical elements, central stop and near-touching L4/L5,
with no established special-glass positions. That record was used; no maker image was downloaded or independently
claimed as viewed in this review.

No data change is needed. The native scan's first and last vertex centres near x = 989 and 1521 give
532 px / 28.76 mm = 18.50 px/mm. Fresh endpoint strips place L1/L6's upper ink near y = 733–741 / 732–740,
against the local y = 985–982 axis, consistent with 13.5 mm after stroke-width allowance. L2's front endpoint
near y = 777 gives about 11.2 mm. The previously checked transverse arc scales and shared-E1/E2 schematic
qualification remain applicable. L3/L4/L5 differences remain within the recorded reading uncertainty or the
documented near-contact constraint; there is no new ≥10% error, reversed height ordering or square-rim defect.
The page shows square L1/L6 rims, L2's sloping cap join and the L4/L5 near contact without a crossing.
The cap joins approximate the patent's bevels; no unsupported land was added.

Rims retained: S1/S2/S11/S12 = 13.5 mm, S3 = 11.2 mm; S4 = 10, S5/S6 = 9.5, S7/S8 = 9.0 and S9/S10 =
9.7 mm. There are no cuts below the package baseline and no lands. The native full-pupil `rimcost.mjs --loo`
comparison finds a worst loss of 0.0 percentage points at every sampled field from 0° to 28°; each element restore
builds and wins back no light. Declared-edge geometric transmission is 38.29% package → 50.81% current, with
relative illumination 29.54% → 39.36%. At the diagnostic 28.898449° full-frame corner, transmission is 33.95% →
46.96%, illumination 25.68% → 35.66%. This review changes neither result. All four native lattice cases use
3228 samples, with zero unaimed or failed samples.

The 0.95 gap budget is still necessary and is the smallest two-decimal passing value. With current rims, deleting
it (default 0.90) gives `Air gap "8"→"9": combined surface sag (0.30 mm) exceeds allowed gap intrusion
(0.288 mm of 0.320 mm) at sd=9.0`; 0.94 likewise refuses 0.301 mm allowed intrusion. At 0.95 the model builds.
Exact spherical sag gives 0.302709 mm intrusion (94.5965%) and 0.017291 mm remaining separation, so this is a
policy refusal below 0.95, not an actual surface crossing. No tolerance change was made.

Surface construction is OK; aperture audit has 1/1 station within 3% of f/2 and zero rim/trace/iris/failure counts;
image-circle audit has zero undersized/skipped; field coverage is unchanged at 96.4102%, limited by the declared
28° field rather than a rim. The native d-line iris-edge launch is 9.904337909 mm: S8 = 8.986048661 mm and
S10 = 9.646336292 mm, both clear. The meridional helper, supplied the equivalent launch f-number 2.019351230
and the 28.898449° corner, reports no axial/chief clipping; its upper/lower full-bundle roots remain unavailable.
This helper input corrects its nominal-pupil overdrive and does not alter the engine f-number. Engine half-field
28 → 28°, f-number 2 → 2, EFL 40.0006738713 → 40.0006738713 mm and stop radius 8.0908412305 →
8.0908412305 mm; native construction does not throw.

All inspector names L1–L6, meniscus/biconvex types, signed focal lengths (+74.94, −53.31, +83.25, −19.82,
+27.83, +37.70 mm) and short roles agree with the prescription. The stop is between L3 and L4. There are no
aspheres, APD tags, cemented interfaces or doublets. Fig. 1 supplies radii/spacing labels rather than named
group brackets; the patent's fourth component consists of the two air-separated elements L4/L5, not a cemented
pair. The six separate optical groups and absence of invented brackets remain appropriate.

Movement: all six groups are static in this infinity-only model. `gaps` is empty, no focus keyframes or zoom
stations exist, and z positions at focus controls 0 and 1 are identical: first vertex 0, stop 14.18 and last
vertex 28.76 mm. No ordering/direction error exists; near-state and zoom travel checks are inapplicable.
The page disables finite focus and states the production straight helicoid and 0.3 m minimum plainly.
Earlier references in this log to two focus keyframes are stale; the current file has no such keyframes or
authored finite-focus motion law.

Worktree-catalog `glasscheck.mjs --near 3` and `trylabel.mjs` resolve every element within the exact window.
Catalog-row minus printed-pair deltas are L1 LAC10: 0 / +0.100000; L2 BAF5: +0.000002 / +0.046899;
L3 BAF22: −0.000004 / +0.021672; L4 FD140: 0 / +0.060000; L5 LAL60: −0.000001 / +0.005698;
L6 S-LAM54: −0.000002 / −0.046830. No relabel or missing-row proposal is needed. Older HOYA rows and
discontinued OHARA LAL60 retain their source-qualified equivalents; S-LAM54 remains a modern spectral proxy,
not a production-supplier assertion. There is no unresolved or constant/nd-only medium, no catalog-copied line
index, and no missing printed C/F/g index or partial dispersion. The patent tables (PDF pages 6–9) give only n/v
pairs, not glass names or further spectral identification.

Fig. 3 (PDF page 3) prints d/F spherical-aberration curves, not C/g curves. Native worktree traces give paraxial
C/d/F/g image coordinates 65.481187 / 65.412061 / 65.335897 / 65.357915 mm. F minus d = −0.076164 mm agrees
with the local-axis scan reading of about −0.08 ± 0.02 mm after ×40 scaling. At the actual d-line iris-edge launch,
d/F shifts relative to paraxial d are +0.033686 / +0.091565 mm; the plot suggests approximately +0.07 / +0.13 mm,
with ±0.02–0.03 mm reading uncertainty. Their separation agrees, but the roughly +0.04 mm shared plot offset
remains open. A glass mismatch is not established: the reference d-line trace uses the printed indices, and an
inferred stop or plotted ordinate/rounding affects both marginal curves. No individual glass can be identified
as the culprit from these data. At 28°, tangential/sagittal parabasal focus shifts relative to centre are
−0.380808 / +0.112533 mm, consistent with roughly −0.38 / +0.11 mm in Fig. 3; distortion −1.9801% agrees
with the plotted approximately −2.0% (about ±0.1% reading error).

The front page confirms Toshihiro Imai, Olympus Optical Co., Ltd., US 4,396,255, August 2, 1983. The assignee
matches both the source and canonical contemporary Olympus rows; no consolidation variant was found for this lens.
Closed: the earlier unavailable rendered-page check is satisfied by the supplied current page and six inspector
shots. No data was edited, so these remain representative; the coordinator owns any subsequent re-shoot.

Open: E1/E2 production identity, historical supplier/melt, inferred stop/caps, unmodeled finite focus, the declared
field/corner distinction, approximate bevel rendering and the shared marginal-curve offset remain qualified.
No new prescription or metadata error outside the edit list was established. No sandbox or approval refusal occurred.
Prettier's check returned success, but its repository ignore rules exclude Markdown and lens-data files, so it did
not inspect their formatting. The scoped diff whitespace check is clean. No changelog entry was added.

Re-inspected side-by-side:
`/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-JJvsUM/5d6b978d-236f-4b6b-95b4-43ea08b0f623/scratchpad/sd/zuiko40/overlay.png`.
