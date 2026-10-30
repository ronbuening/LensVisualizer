# Independent audit: Tamron A062 20-40mm f/2.8

## Current disposition

Stage 4 source-first review and reconciliation have passed for the stated central-prescription, illustrative-control scope. READY_FOR_BATCH is pre-integration readiness only. INTEGRATION_PENDING remains in force. The narrow geometry, source focus discrepancies, intermediate readout error, stress-edge losses, partial corner transmission and rounding sensitivity remain limitations, not numerical passes obtained by approval.

The lens name and ordinary patent subtitle are unchanged. The clean data file retains every patent radius, physical distance, refractive index and aspheric coefficient. No cam law, supplier identity, extra hybrid interface, source correction or production extrapolation is introduced.

## Job and controlling references

- Patent: JP2022131391A, Numerical Example 5; original supplied 52-page PDF including PAJ wrapper.
- Lens: Tamron 20-40mm F/2.8 Di III VXD, Model A062.
- Output stem: TamronA0622040mmf28DiIIIVXD.
- Source PDF SHA-256: 9517a0c36868daa2652a2e388dc591040869cf1bdae583e201e8b25f026863c8.
- Original job card SHA-256: 937a4f06e9777e681385797432d1563cc6ab827d63a37bd4ebf556f38ac87eea. Its historical pause is preserved as source history; subsequent scope resumed the work.
- Workflow: LensPatentChatProtocol and LensPatentDossierContract, CHAT-1.0, 2026-09-11.
- Current project source: LensVisualizer main 3f00f21094afdbee2e1b8551b96d2734b7f0d0f1.
- Current 151-file reference manifest SHA-256: 248fb6bfb3fad7f19beaca5486513cafe7a718bd6c97f7c13219378fbf40b705.
- Prior source-first 150-file reference manifest: b106e8a8f04a87513ba0f7632911e33fb9be0feab956dbad460a81ee7aa2b12a at 25bfb7566f748a75e59647d433da51bdd198a4ff.

Every file in both scoped manifests was independently checked for size, SHA-256 and Git blob SHA1. The current update changes five imported runtime modules: surfaceIntersection, surfaceProfile, optics/types, pathPlanner and math/intersection. It adds physical aspheric-cap selection. The controlling data/analysis specifications, template, defaults and taxonomy are unchanged. Re-executing the unmodified lens against the new runtime produces exactly the same numerical values, statuses, sample counts, margins and shape paths; only imported-module identities differ. This impact check does not imply a full repository build.

## Independent first pass and exposure

Before the candidate was opened, the review brief and original selection card disclosed the construction correlation, narrow-margin trial and intended illustrative continuous controls. No author data, analysis, source arrays, calculations, audit conclusions or glass labels were read before the fresh baseline was frozen. The public specifications and public glass-reference files were available. Independence is fresh source extraction and calculation, not a claim of complete contextual blindness.

The independently re-entered prescription came from rendered PDF pages 23-24, the asphere equation from page 15, definitions from pages 9-12 and conditions from pages 26-27. All 26 source surfaces, five A4-A12 sequences, three infinity and three near columns, group boundaries, spectral convention and physical cover plate were re-entered. A fresh scalar reduced-angle recurrence and separate nested-list ABCD code were executed.

The baseline was frozen at 2026-10-05T15:51:10Z before candidate access. Fingerprint: c2e97def7c52d8ac5d1d04369638ee5fbeda04941c09c486319357a7e97f6bb4. The evidence retains its numerical inputs/results, conventions, catalog review and original file hashes. The fingerprint is a checkpoint record, not cryptographic proof of review independence. Only exposure wording was normalized for a standalone deliverable; numerical baseline values were not rewritten after comparison.

After the freeze, the exact candidate was checked surface by surface. Fresh vector Snell refraction and independent radial-extrema checks were added after reconciliation; their later timing is explicit. The consolidated verifier retains both the author's portable branch and the separate independent source function. Replayed numerical results from the separate branch agree within 1e-10; vector intersection coordinates agree within 1e-8 mm, observed 1.42e-14 mm.

## Extraction, conventions and transformations

The axis is positive from object to image. A positive radius has its center imageward. Lengths are millimetres, indices and Abbe values are d-line (587.6 nm), and the source sag equation uses standard K=k. All five K values are zero; A4 through A12 are retained with original signs and exponents. A14=0 is schema padding. No uniform scaling is applied.

The implementation renames source 11 to STO and appends A to asphere surface labels. There is exactly one stop. Surface 15 belongs to the downstream L8 medium at the sole L7-L8 cemented interface. Twelve drawn elements form eleven air-separated components and five functional moving groups.

Source 25-26 becomes a physical camera-side rearPlates entry: 2.500 mm, nd=1.51680, vd=64.17, followed by 1.000 mm air. Surface 24 retains its physical gap. The optical plate is traced and not counted as a drawn lens element. The air-equivalent expression is used only in the patent BF condition, never substituted into the model's physical rear distance.

L3 remains the one source medium. Tamron's launch announcement lists a hybrid aspherical element, but the patent contains no resin-layer thickness, second index or interface. None is invented. The source's published near spacing endpoints are retained; 300 mm remains a nominal reference-plane inference. No production 0.17/0.29 m extrapolation is made.

## Source/model numerical checks

Independent infinity EFLs are 20.601561735, 28.303643026 and 38.800686745 mm. First-vertex physical tracks are 109.976, 106.078 and 102.997 mm. The physical rear distances from surface 24 are 16.501, 24.382 and 31.459 mm. These differ from air-equivalent and Gaussian back focal distances; the verifier stores all reference planes separately.

Group EFLs are -31.545870, +350.786679, +23.938659, -38.221179 and +84.517802 mm. Source rounding residuals remain explicit, including G2's -0.033321 mm residual to the printed +350.820 mm. Element powers are calculated with each element isolated in air. The actual cemented component has EFL +54.459063 mm, not the sum of its members' standalone EFLs. The surface Petzval sum is +0.002293829066 mm^-1.

The seven source conditions compute to 0.834415, -0.985065, -2.758827, 70.44, -0.466573, 1.382370 and 0.676679. All match printed rounding and satisfy their stated bounds. G1 moves +6.979 mm relative to the image from wide to tele; G2 moves -4.261 mm, G3/G5 -14.958 mm and G4 -14.479 mm. G4's imageward focus increments are +1.091, +1.619 and +2.625 mm. The tele near-state gap-sum residual of -0.001 mm is retained.

The Gaussian focus lies +0.090698, +0.048534 and +0.007336 mm beyond the physical source image plane. The original spacings are not refocused. Rendered d-line Figures 18-20 support the marginal-minus-paraxial longitudinal shifts of approximately -0.100041, -0.053370 and -0.055657 mm. The source physical plane need not equal Gaussian focus. Near-state paraxial object-to-image conjugates are 313.809555, 306.637905 and 306.045327 mm. No exact 300 mm finiteConjugates certificate is asserted.

The track/EFL ratios exceed one and Gaussian back-focus/EFL ratios are below one at all source infinity stations. No verified telephoto or strict back-focus-ratio retrofocus classification is claimed merely from negative-leading architecture.

## Aperture and geometry

Clear apertures are inferred. The physical iris schedule is inferred by exact source f/2.91 tracing: 7.949329, 9.348782 and 11.019642 mm. This is calibration, not independent evidence of an unpublished diaphragm diameter; paraxial inferred pupil quantities are separately labeled.

The retained trial has SD8=10.16 mm and lens-global gapSagFrac=0.986. The S8/S9 physical same-height rim air is 0.034490804 mm; reserve beyond that policy threshold is 0.002290804 mm. The exact source tele pupil ray has 0.004500968 mm radial clearance at S8 and 0.042690840 mm at S9. Other gaps already satisfy the default 0.90 rule.

Independent radial derivative root bracketing and bisection confirm positive sampled element thickness, conic domain, actual rim-slope limits and all shared-band gap constraints. The S8/S9 maximum intrusion is 2.265509196 mm. The smallest modeled solid thickness is the on-axis 0.800 mm L9 thickness. Minimum gap widths over each bilinear zoom/focus interpolation cell occur at its corners, but finite derivative bracketing is not a formal proof of all possible roots. No manufacturing allowance is inferred from the tiny margins.

The adverse joint half-last-place R/d/nd example raises the S8 ray height to 10.161807897 mm, clipping by 0.001807897 mm. This scientific failure remains recorded. Asphere-coefficient rounding was not varied. This is a sensitivity example, not a statistical or rigorous uncertainty enclosure.

## Native checks and off-axis limits

Node 24.19.0 loads actual pinned TypeScript using stripTypeScriptTypes. The real buildLens, validator, tracing, current-state UI helper, glass resolver and render diagnostic functions execute. The UI helper is byte-identical to its reference path. This is not a full TypeScript compilation or React/browser UI test.

The 41x21 grid records 9,471/9,471 default UI rays and 6,027/6,027 aimed axial stop-target rays transmitting with no unresolved axial aims. Additional +/-1 UI stress-edge launches transmit in 850/3,444 attempts; 2,594 do not transmit. These launches are distinct from exact stop-target probes. Unit-stop target endpoints are inset by 1e-9 of iris radius for numerical aiming; un-inset source f-number probes remain separately recorded.

Of 6,006 signed-stop off-axis attempts, 3,776 transmit, 1,341 physically clip and 889 remain unresolved aims. All 1,617 interior samples through +/-0.83 of the stop at 60% image height transmit. The smallest recorded clear field-ray radial margin is 0.000247265 mm at surface 17. Corner coverage is partial. Unresolved aims are not transmissions, and ghost/ignored-rim continuations are diagnostic only.

Native render trim is zero across the grid. Actual native element paths are included in the SVG and visually inspected against Figure 17 at wide/tele and infinity/near endpoints. Continuous motion is illustrative. The infinity EFL helper's worst sampled difference from actual current-gap EFL is 0.943578481 mm; intermediate focus errors remain in the analysis and results. Neither this scope nor native ray success establishes full-field illumination, continuously accurate focus, MTF, chromatic performance, production identity or fabrication safety.

## Glass review

Primary HOYA 20260707 AGF bytes were independently downloaded before candidate comparison. OHARA type data and its S-TIL25 datasheet, SCHOTT 2025 data and CDGM H-ZLaF76 data were also independently checked. Shared project coordinate matching covered HOYA, OHARA, SCHOTT, HIKARI, CDGM, Sumita and NHG, without asserting that every catalog was independently downloaded. Supplier/melt identity remains undetermined.

The source-first OHARA S-TIL25 match is exact at listed nd=1.58144 and vd=40.75. This fills an omission in the author's L3 comparison table. It does not establish hybrid composition, a resin identity or production supplier. Post-freeze primary inspection also confirms the author's exact S-NBH57 1.85025/30.05 pair. L- and S-prefix families remain distinct. All actual model glass annotations remain class-only and unresolved by the name resolver, hence Abbe-only. The known unfavorable MC-FAD61 screen remains a failed candidate comparison and is not adopted. No APO claim is earned.

## Correction and discrepancy register

| ID | Previous statement or state | Final treatment | Evidence and effect |
|---|---|---|---|
| S4-C1 | L3 glass table showed only near HOYA E-FL5/SCHOTT LF5 examples | Adds exact OHARA S-TIL25 coordinates | Primary OHARA 25-04; analysis/evidence only; no data or spectral change |
| S4-C2 | Stress-edge total omitted from analysis | Reports 850 clear, 2,594 nontransmitting of 3,444 | Independently repeated real runtime; no false all-ray implication |
| S4-C3 | Audit contained stacked historical current headings | One current audit with explicit historical disposition | Prevents old source pin/gates being mistaken for current findings |
| S4-C4 | Author native record bound to 25bfb756 | Final native evidence binds to 3f00f210 | Five changed runtime modules; identical numerical/status results |
| Historic default SD | SD8=9.7/default gap rule clipped nominal tele pupil | Retained approved SD8=10.16 and gapSagFrac=.986 | Original failed checks preserved in evidence/results; no patent change |
| Gaussian plane assumption | Wide/middle fail zero Gaussian defocus assumption | Keep raw FAIL and source physical planes | Primary aberration plots support separate paraxial/reference treatment |
| Continuous accuracy | Infinity readout and intermediate focus mismatch | Keep raw FAIL with explicit illustrative scope | No engine or cam-law repair; no claim that scope approval fixes optics |
| Rounding robustness | Adverse joint perturbation clips S8 | Keep raw FAIL | No uncertainty or fabrication robustness claim |

The only clean-pair edits in Stage 4 are explanatory analysis text. Data SHA-256 remains 244b098bf8f844ed1f1701e410c27f0de272ecfe61aab9aa80a83ca6a092610b. The unchanged original candidate hashes and final file identities are in the manifest. Correction validation is performed by this reviewer with independent source evidence and retained author/native paths; it is not a second independent reviewer of its own text edits.

## Quantitative claim map and prose review

| Analysis content | Executed support |
|---|---|
| Identity/counts/metadata | F1/F2; original front matter, source surfaces, Tamron primary specs/launch |
| Element and cemented powers | F3/F5; independent baseline element powers; final-file matrices |
| Functional group powers | F4; independent baseline group powers |
| EFL, tracks, rear distances and Gaussian planes | F6; independent source states and full-plate matrices |
| Zoom/focus movement and rounding | F7; independent image-referenced positions and gap sums |
| All five coefficients, departures, rim slopes | F8; frozen asphere inputs and independent radial calculations |
| Seven conditions | F9; separate source-only equations |
| Iris and narrow clearances | F10; exact vector trace and independent radial extrema |
| Intermediate readout/conjugates | F11; actual current-gap matrices and native helper |
| Rounding adverse example | F12; executed perturbation with raw failure retained |
| Ray counts, losses, unresolved targets and trim | F13; current native dense records; explicit stress-edge correction |
| Glass and spectral limits | F14; independently rechecked primary catalog coordinates; native resolution |
| Petzval | F15; every refracting surface phi/(n*nPrime) |

Manual prose inspection confirms third-person technical writing, required section order, metadata agreement, cautious production correlation, standalone versus in-situ distinction, no unsupported aberration-budget assignment, no unsupported supplier/APO claim, and explicit physical/air-equivalent/Gaussian reference planes. The numerical spellings in the final analysis are checked against executed results. Source patent/card bytes remain unchanged.

## Reproduction and final gate

Portable command, from a clean extraction directory:

    python TamronA0622040mmf28DiIIIVXD.verify.py --package-dir . --output ../portable-replayed.json

Native command, with the externally supplied manifest-verified current source root:

    node --disable-warning=ExperimentalWarning TamronA0622040mmf28DiIIIVXD.runtime.mjs SHARED_PINNED_SOURCE_ROOT TamronA0622040mmf28DiIIIVXD.data.ts ../native-replayed.json

Python uses only the standard library. Native replay requires Node 24.19.0-compatible registerHooks/stripTypeScriptTypes and the identified source snapshot; those sources are shared dependencies, not silently bundled or network-fetched. Portable replay validates native artifact identity and recorded coverage without pretending to rerun a missing project runtime.

The final manifest inventories thirteen root-level files and records exact hashes. ZIP clean extraction verifies membership, original bytes and every non-self manifest hash. Portable and native replays write outside the extracted package and compare stable results; files are not modified by replay.

Full static TypeScript checking, project formatting/lint, full browser/React UI, corpus tests, metadata generation, full build and integration remain NOT_RUN at integration scope. READY_FOR_BATCH applies only to this final byte revision and its documented limitations. INTEGRATION_PENDING.


## Current V2 reconstruction, 2026-10-23

This revision preserves every source curvature, thickness, refractive index/Abbe value and all three native infinity AND near-focus gap states. It adds an explicitly inferred G4 continuous infinity-zoom compensation, not factory cam recovery. Gaps16/18 change by equal/opposite amounts, with maximum added G4 travel0.297239716mm; fixed neighboring groups/image plane remain unchanged. Compensation targets the interpolation of the original native rounding residuals, not a shifted image plane or optical surface optimization. Intermediate focus is illustrative and has no finite-conjugate MTF certification.

The historical0.986 gap-sag allowance is not used for this candidate. The current allowance is0.97. Only the inferred S8 clear semi-diameter changes10.16→10.08499mm. S8 curvature radius remains+205.807mm; no curvature change is made. This is a conservative visualization rim, not a printed or production aperture. It deliberately forfeits part of the original near-edge pupil: at most1.1471 percentage points additional on-axis geometric pupil-area loss relative to the same inferred motion with the historical rim. Total on-axis pupil-area loss in this diagnostic reaches11.1662%, including existing stop/other aperture clipping. Resulting geometrical rim-limited f-number reaches2.92873. These are not transmission/T-stop or corner-illumination claims. The baseline diagnostic alone retains the historical0.986 allowance to isolate the incremental rim effect; it is not a release candidate. The former nominal tele pupil clearance and rounding-sensitivity claim must not be carried over as an unchanged aperture pass.

5,005 geometry states pass without errors or render trimming; all1,001 infinity image-plane checks pass unchanged gates. All105 reference-MTF fields converge with per-field limits retained (minimum50lp/mm); photopic MTF remains unavailable because partial-dispersion evidence is absent, and finite-conjugate MTF is not certified. Original source association, glass-class ambiguity, rounding sensitivity, physical-plane residuals and incomplete production equivalence remain qualifications. No engine or validation weakening.

Additional final independent review: pure-Python d-line paraxial replay includes the source rear cover plate and confirms1,001zoom maximum residual0.090697601mm, monotonic EFL20.601561735→38.800686745mm and source-directed G4 motion. All5,555 default UI rays across101zooms×5focus states are clear. Five off-node MTF samples add25 converged reference fields (minimum returned band50lp/mm); photopic and finite-conjugate unavailability remains explicit.

## 2026-10-25 — Semi-diameter pass against the patent figure

Source: `patents/JP2022131391A.pdf`, PDF page 44, Figure 17, wide-angle infinity panel (top row), the cross-section of Numerical Example 5. The sheet is a 318 ppi bilevel raster; it was measured at 318 dpi on the lower half, which carries no leader lines, and every rim was read on the upper half as well (the two sides agree within 2 px, 0.16 mm). Line centres were used throughout.

Scale: the vertex crossings next to the axis sit at x = 598 px (S1), 1075 px (S10), 1243.5 px (S12) and 1786 px (S24). Against the wide-infinity prescription, S1 to S24 is 93.475 mm over 1188 px (0.07868 mm/px), S1 to S10 is 37.603 mm over 477 px (0.07883 mm/px) and S12 to S24 is 42.675 mm over 542.5 px (0.07866 mm/px). The pass uses 0.0787 mm/px. As a check on the vertical scale, L5's front flange sits where surface 9's prescribed sag reaches 10.0 mm, and that matches the drawn height. The drawn edge thicknesses of L3 (0.79 mm) and L10 (0.67 mm) are close to the prescription's 0.83 mm and 0.88 mm at the modeled rims.

Several elements are drawn with flat mounting flanges: L1 rear, L2 rear, L5 front, L9 rear, L11 rear and L12 front. Where a curved face ends at a flange, the figure value below is the optical extent, not the outer rectangle. L2's front face meets L1's flange at 15.95 mm, and its outer 15.95–17.4 mm zone is the contact band. L4's rear face is drawn out to 11.25 mm, but L5's flange touches it from about 10.0 mm outward.

| Surface | Before (mm) | Figure (mm) | After (mm) | Evidence and decision |
|---|---:|---:|---:|---|
| 1 | 21.5 | 21.8 | 21.5 | Within noise (1.4%) |
| 2 | 15.8 | 16.0 (curve meets L1 flange) | 15.8 | Within noise; 15.86 mm is also the 0.97 limit against S3 |
| 3 | 15.44 | 15.95 (contact boundary); outer edge 17.4 | 15.44 | Optical extent within noise (3%); outer band is L1-flange contact |
| 4 | 14.2 | 14.05 (curve meets flange) | 14.2 | Within noise |
| 5A / 6 | 15 / 15 | 15.2 / 15.2, square edge | 15 / 15 | Within noise |
| 7 | 11.3 | 11.25 | 11.3 | Agrees |
| 8 | 10.08499 | about 10.0 optical; face drawn to 11.25 | 10.16, applied together with checks.gapSagFrac 0.99 | Axial floor: the tele f/2.91 marginal ray reaches 10.156 mm, so 10.08499 clipped it by 0.07 mm |
| 9 | 10.2 | 10.0 (curve meets L5 flange) | 10.2 | Floor 10.157 mm governs over the figure |
| 10 | 11.5 | 11.5 | 11.5 | Agrees |
| 12A / 13A | 12.7 / 12.7 | 12.75, square edge | 12.7 / 12.7 | Agrees |
| 14 / 15 / 16 | 12.7 | 12.6 / 11.5–12.6 / 12.6 | 12.7 | Agrees; L7 steps in to about 11.5 mm on the cemented face |
| 17 | 10.4 | 10.4 | 10.4 | Agrees |
| 18 | 10.4 | 8.7–9.0 (curve meets flat flange) | 9.0 | Figure: 15% departure. The direct height reads 8.66 mm; the flange position with the prescribed sag gives 8.97 mm. Axial floor is 8.84 mm |
| 19 / 20 | 14.2 / 14.2 | 14.2, short edge | 14.2 / 14.2 | Agrees |
| 21 | 13 | 13.65 | 13 | Within noise (4.8%) |
| 22 | 13 | 12.1–12.5 (curve meets flange) | 13 | Within noise (4–7%) |
| 23A | 12 | 12.1–12.5 (meets S22 at the flange plane) | 12 | Within noise |
| 24A | 14.5 | 14.7 | 14.5 | Within noise |

The surface-8 rim cannot be fixed under the old 0.97 cross-gap allowance. Surfaces 8 and 9 both need at least 10.156 mm. At that shared height their sags already use 2.264 mm (98.4%) of the 2.300 mm vertex gap. At 10.16 mm they use 2.2655 mm (98.5%), which leaves 0.034 mm of air, and the faces do not cross. The smallest two-decimal allowance that admits the rim is 0.99, so the rim and the allowance change together. Under 0.99, surface 8 may go as high as 10.18 mm. The figure's square-cut L4 (S8 11.3 mm with S9 10.17 mm) would also pass at 0.99. It was not adopted, because the procedure raises only the clipping surface and only as far as the stated ray.

With surface 8 at 10.16 mm and the 0.99 allowance, the validator reports no errors. The image-circle floor reports no undersized surface. Traced corner coverage is 100% at all 101 zoom stations. The aperture census shows all 101 stations within 3% of f/2.91 with no rim limit. The exact meridional trace shows no axial clip or blocked chief ray at infinity or at the 300 mm near state. The engine half-field (37.31° at wide, limited by surface 2), the f/2.91 stop radii (7.949, 9.349 and 11.020 mm) and the field coverage are unchanged by both edits.

Surface 18 at 9.0 mm adds real off-axis vignetting at L9. The modeled one-side clip of the full-field bundle at surface 18 rises from 31% to 49%. Engine geometric transmission at the field edge falls from 110.4% to 102.4% at 37.8° in the middle of the zoom range. At the tele end it falls from 108.5% to 97.2% at 28.6° (values are relative to on-axis). The wide end is unchanged. The default on-axis rays are unaffected because the axial ray peaks at 8.84 mm there. At the tele end, at infinity and at 300 mm, the upper ray of the app's off-axis fan (20.1°) now stops at surface 18.

The live render was checked at 20.603, 28.305 and 38.803 mm, each at infinity and at the near state. It shows no overlaps and no render trims. The renderer joins unequal front and rear rims with a straight edge, so the drawn flanges of L1, L2, L5, L9, L11 and L12 appear as chamfers. A render-versus-figure overlay of the wide panel was compared by eye. It agrees on every element height, apart from the flange outlines and L11's front rim, which is 0.65 mm low (inside the noise band).

The manufacturer's construction diagram (tamron.com) shows 12 elements in 11 groups. It marks LD elements at positions 2, 6, 8 and 10, moulded-glass aspherical elements at 6 and 12, a hybrid aspherical element at 3, and elements 7 and 8 cemented. That matches the patent's 1.497 / 81.6 glasses on L2, L6, L8 and L10, its asphere positions and its single cemented pair. On that diagram, L9's concave rear face also ends at a stepped flange at about 0.87 of its outer rim. The patent gives 9.0 / 10.4. L2's outer edge is about 0.77 of L1's; the patent figure gives 0.80. The maker diagram was used only as a proportion check.

Open limitations: the pass makes no asphere change, so the departure table is unchanged. The off-axis transmission counts in the analysis predate the surface-18 change and were not recomputed.

### Coordinator glass and metadata changes

- Surface 8 is now 10.16 mm and `checks.gapSagFrac` is 0.99, applied as one pair. With the pair, the validator reports no errors, traced corner coverage holds at 101 of 101 stations and no axial clip remains. This departs from the package's recorded qualification, which retained the S8 reduction to 10.08499 mm under the 0.97 allowance. That reduction clipped the tele f/2.91 axial beam, which the procedure treats as a defect. The analysis now gives 10.16 mm and 0.99 and describes the reduction as superseded.
- Every element now carries an exact catalog-coordinate label of the form "glass (vendor catalog equivalent; production supplier unspecified)":
  - HOYA: TAC8 (L1), FCD1 (L2, L8, L10), M-FCD1 (L6, molded aspherical), E-FD15 (L7), FC5 (L9, L11) and M-LAC130 (L12, molded aspherical).
  - OHARA: S-TIL25 (L3), S-NBH57 (L4) and S-LAL7 (L5).
  - The cover glass is labelled SCHOTT N-BK7.
  - All 12 element labels now resolve; none did before, when the labels were class-only.
  - L2, L6, L8 and L10 carry an inferred APD flag. They are the four elements Tamron's construction diagram shades as LD.
  - The analysis glass table and the element headings follow these labels. The analysis also records that OHARA's 2026-07-01 catalog lists S-LAL7 as obsolete.
- The name is now "TAMRON 20-40mm f/2.8 Di III VXD (A062)" and the subtitle "JP 2022-131391 A — Numerical Example 5". The specs read 12 elements / 11 groups, design f = 20.60–38.80 mm, design F/2.91, 5 aspherical surfaces on 3 elements and 4 LD elements. Mounts are now Sony FE and Nikon Z; the Nikon Z version was released on 2026-10-22 with the same 12/11 construction.
- The focus description was rewritten. The analysis's intermediate-zoom focus table was recomputed from the current gaps to match it. With G4 solved for infinity, the infinity Gaussian focus at zoom 0.25 and 0.75 is 0.070 and 0.028 mm beyond the plane; the superseded table had shown shifts of 0.48 and 0.72 mm. The old infinity-readout discrepancy of 0.94 mm is gone, because each of the 101 stations stores its own focal length.
- Package-process wording was removed from the analysis: version-pinned code links, the DPMA PDF link, process status text, and "native" and "candidate" phrasing. The source facts, numbers and qualifications were kept.

## 2026-10-25 — Second review: diagram, labels and movement

This review compared the live page with JP 2022-131391 A, Figure 17 (PDF page 44) and ¶0120–0132 (PDF pp. 22–24). The page was checked at 20.603, 28.305 and 38.803 mm, each at infinity and at 300 mm, along with the zoom and focus movement overlays. The element inspectors for L2, L3, L9 and L12 were also checked. Tamron's construction diagram was used for proportions and special-element positions. The wide-angle infinity panel was re-measured independently at 318 and 636 dpi. The vertex crossings at x = 598 px (S1) and 1786 px (S24) give 93.475 mm over 1188 px, or 0.0787 mm/px. The S1–S2 (1.5 mm) and S2–S3 (8.3 mm) spans agree within 0.6%. An overlay of the render on the figure at this scale lines up every vertex.

### Silhouette comparison

- L1. The figure draws a flat 21.8 mm cylindrical edge, with a rear flange from 15.9 mm outward. The render shows a chamfer from 21.5 mm at the front to 15.8 mm at the rear. The concave rear face ends at 15.8–15.9 mm (R = 18.851 mm, with L2 just behind it), so the chamfer comes from the renderer's straight edge between unequal rims. No change.
- L2. The figure draws the nearly flat front face out to a 17.4 mm outer edge. The 636 dpi reading is 17.35–17.4 mm, and L1's rear flange lies against this face from 15.9 mm outward. The figure then shows a cylindrical edge at 17.4 mm and a rear flange that steps down to 14.2 mm, where the concave rear face ends. The render's tallest point was 15.44 mm, so L2 stood only 3% above L3's 15.0 mm; the figure shows a 15% step. L2's height relative to L1 was 0.72 on the site, against 0.80 in the figure and 0.77 in Tamron's diagram. Surface 3 was raised to the drawn edge. Surface 4 keeps its 14.2 mm curve end, because a rear face carried to full height would cross L3.
- G2. The figure draws L4 square-cut, with both faces reaching 11.25 mm. L5's front face ends at about 10.1 mm, and its flange lies against L4's rear face out to 11.5 mm. The render bevels L4 from 11.3 mm down to 10.16 mm, which leaves a V-notch at the L4–L5 junction. The batch keeps surface 8 at 10.16 mm, so this is left as an owner decision, described below.
- L9. The figure draws a 10.4 mm front edge and a rear flange that steps down to about 8.9 mm. The model's 10.4 / 9.0 mm agrees.
- L11. The figure reads 13.5–13.6 mm at the front, and the rear curve ends at 12.3 mm. The model has 13.0 / 13.0 mm. These differences are within 4–6%. Raising surface 21 would also remove the 13% one-side bundle clip there, so it was left unchanged.
- L12. The front face ends at about 12.3 mm, and a flange carries the edge up to 14.6 mm. The model's 12.0 / 14.5 mm agrees. A 14.6 mm surface 23A would cross L11.
- L3 (15.1 mm), L6 (12.75 mm), L7–L8 (12.6 mm, with a small step at the cemented junction), L10 (14.2 mm) and surface 10 (11.4 mm) each agree with the model within 0.2 mm.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---:|---:|---|
| 3 | 15.44 | 17.4 | Figure 17 outer edge of L2's front face (17.35–17.4 mm). It restores L2's drawn step above L3 and L1's flange contact. |

With the change, the validator reports no errors, and the image-circle floor reports no undersized surface. Traced corner coverage is at least 99% at all 101 stations. The exact meridional trace shows no axial clip or blocked chief ray, at infinity or at 300 mm. The surface-3 ray maxima are unchanged: 7.62 mm axial and 13.95 mm for the full field bundle. The engine EFL (20.602 mm), f/2.91, half-field (37.31°, limited by surface 2) and stop radius (7.949 mm) are unchanged.

At the wide end, wide-open transmission beyond the engine half-field rises from 78.1% to 82.8% at 44.8° and from 39.1% to 43.8% at 47.8°. The middle and tele curves are identical. Surface-3 trial values of 15.8, 15.95 and 16.2 mm give exactly the same numbers. The change therefore removes a clip that only the 15.44 mm rim imposed; L1's 15.8 mm rear face, which the figure draws as the edge in that zone, now limits.

### Labels, tags and stop

- Groups. G1 covers 1–6, G2 7–10, G3 STO–16, G4 17–18 and G5 19–24A. This matches the group table in ¶0132, where G3 is listed as 11–16 and 11 is the stop. Figure 17 labels only G1–G5, S, CG, IP and F.
- Cemented pair. D1 spans 14–16, the only cemented component in ¶0123.
- Element names. The patent gives no element designations, so L1–L12 are sequential and do not clash with its G notation. Every `type` agrees with the shapes in ¶0121–0125 and with the signs of R.
- Roles. The twelve package placeholders ("Source element Ln; standalone power in air …") have been replaced with optical roles taken from ¶0121–0126 and the maker diagram. The patent does not name the elements L1–L12, so the old wording did not hold.
- Aspheres. The A-suffixed surfaces 5A, 12A, 13A, 23A and 24A are the patent's asterisked 5, 12, 13, 23 and 24, and no other surface carries the suffix.
- Stop. The stop sits between surfaces 10 and 12A, at the patent's surface 11S.
- APD tags. L2, L6, L8 and L10 carry `"inferred"` tags, at Tamron's four LD positions (2, 6, 8 and 10). The patent text says nothing about anomalous dispersion; it mentions only composite aspheres in general terms. No `"patent"` tag is warranted.
- Inspector and glass. The inspector shows the expected type, glass, focal length and APD or ASPH badges for L2, L3, L9 and L12. All twelve glass labels resolve.

### Movement

The 101 zoom stations ascend from 20.603 to 38.803 mm, and index 0 of every gap is the wide value. The table gives each group's front vertex position measured from the image plane, at infinity.

| Group | Wide (mm) | Middle (mm) | Tele (mm) | Wide-to-tele motion |
|---|---:|---:|---:|---|
| G1 | 109.976 | 106.078 | 102.997 | 6.979 mm toward the image |
| G2 | 78.273 | 80.597 | 82.534 | 4.261 mm toward the object |
| G3 | 60.176 | 68.056 | 75.134 | 14.958 mm toward the object |
| G4 | 41.217 | 49.861 | 55.696 | 14.479 mm toward the object |
| G5 | 33.961 | 41.842 | 48.919 | 14.958 mm toward the object |

No group reverses anywhere in the 101 stations, and G3 and G5 travel the same distance. This matches ¶0126.

In each focus pair, index 0 is infinity and index 1 is 300 mm. Only D16 and D18 change. G4 moves toward the image by 1.091, 1.619 and 2.625 mm at wide, middle and tele, as ¶0126 states. The movement overlays show the same directions. The focus slider's far-end label reads 30 cm.

### Owner decision: squaring L4

To draw L4 square-cut as in Figure 17, surface 8 would go to 11.3 mm and surface 9 to 10.17 mm (10.18 mm also works). The existing 0.99 allowance admits this pair: the validator reports no errors and the trace shows no clip. Transmission is unchanged at zoom positions 0, 0.5 and 1. Surface 9 then becomes the tele axial limit, with 0.013 mm of headroom. Raising surface 8 to 11.3 mm while surface 9 stays at 10.2 mm fails at 0.99: the combined sag is 2.28 mm against 2.277 mm allowed, so that pair would need 1.00. The pair was not applied, because the batch keeps surface 8 at 10.16 mm.

The coordinator then applied the pair. Surface 8 went from 10.16 to 11.3 mm and surface 9 from 10.20 to 10.18 mm, and `checks.gapSagFrac` stays at 0.99. At the shared 10.18 mm height the two sags take 2.275 mm of the 2.300 mm gap (98.9%), which leaves 0.025 mm of air. The tele f/2.91 axial ray reaches 10.157 mm at surface 9, so surface 9 is now the rim nearest that ray, with about 0.02 mm to spare. The other checks after the change:

- The validator reports no errors, and the image-circle floor reports no undersized surface.
- Traced corner coverage is at least 99% at all 101 stations.
- The meridional trace shows no axial clip or blocked chief ray at infinity or at 300 mm. The one-side full-field clip moves from surface 8 (17%) to surface 9 (17% at infinity, 16% at 300 mm).
- Wide-open transmission is unchanged at zoom positions 0, 0.5 and 1: 43.8% at 47.8° (wide), 102.4% at 37.8° (middle) and 97.2% at 28.6° (tele).
- EFL (20.602 mm), f/2.91, half-field (37.31°) and stop radius (7.949 mm) are unchanged.
- The re-shot wide and tele pages, including tele at 300 mm, show L4 square-cut with L5's bevel behind it. There are no overlaps.

### Open limitations

The off-axis transmission counts in the analysis predate the surface-3 and surface-18 rims and have not been recomputed. The renderer joins front and rear rims with a straight edge. As a result, the drawn flanges of L1, L2, L5, L9, L11 and L12 still appear as chamfers.

## 2026-10-29 — Z-mount surface and glass reinspection

Fresh direct source review: `patents/JP2022131391A.pdf`, Numerical Example 5: Figure 17 PDF page 44; prescription and rear-plate rows pp 23–24. Page images were rendered and inspected anew; earlier audit records provided locators only.

Every convex/concave face and cemented boundary was inspected in the new 600 dpi Figure 17 crop, with all three infinity zoom panels checked. Native raster 318 dpi; S1–S24 at wide spans 1188 px /93.475 mm =12.710 native px/mm (23.982 px/mm at 600 dpi), cross-checked against the intermediate vertices. Added extensions 2→21.5, 4→17.4, 18→10.4 and 23A→14.5 mm, retaining the optical caps 15.8, 14.2, 9.0 and 12.0 mm. These draw the resolved L1/L2/L9/L12 concave seats.

Surface 22 has a resolved rear concave seat. Source cap/edge≈12.3/13.6 mm, q≈0.904±0.011 (native edge≈173 px). At the stored 13.0 mm rim the unadjusted cap would be≈11.76 mm. The beam reaches 11.985165 mm and requires 0.05 mm extra clearance. Depth 2.05 mm is the first 0.01 mm sag step that passes, giving cap 12.040428 mm and a 0.959572 mm land;2.04 mm would end at 12.011874 mm and fail. The outward cap adjustment follows the inferred-cut rule and remains explicitly distinguished from the measured source q.

Rejected extension 9→11.5: combined 8→9 intrusion 2.33 mm exceeds 2.277 mm allowed; the figure draws near contact there. Existing square L4 at 8=11.3 and the tight 9=10.18 cap are retained, as is gapSagFrac 0.99. L11’s front height difference is not repaired by inventing an unpictured front land. No optical SD or source prescription value changed.

Every source medium nd/νd pair was checked directly and retained, with d-line convention confirmed. No source numerical θgF/partial-dispersion or spectral-line indices are published for these media, so no dispersion override is introduced. Existing catalog-inferred APD classification remains inferred.

| Medium | Source nd / νd  | Current coefficient-backed proxy |
| ------ | --------------- | -------------------------------- |
| L1     | 1.72916 / 54.67 | TAC8                             |
| L2     | 1.49700 / 81.61 | FCD1                             |
| L3     | 1.58144 / 40.75 | S-TIL25                          |
| L4     | 1.85025 / 30.05 | S-NBH57                          |
| L5     | 1.65160 / 58.55 | S-LAL7                           |
| L6     | 1.49710 / 81.56 | M-FCD1                           |
| L7     | 1.69895 / 30.05 | E-FD15                           |
| L8     | 1.49700 / 81.61 | FCD1                             |
| L9     | 1.48749 / 70.44 | FC5                              |
| L10    | 1.49700 / 81.61 | FCD1                             |
| L11    | 1.48749 / 70.44 | FC5                              |
| L12    | 1.69350 / 53.2  | M-LAC130                         |

Coverage: 12/12 modeled media, representing 12 physical lens elements. Rear plate(s) checked separately: 1.51680/64.17. Catalog-compatible spectra are qualified proxies, not production supplier/melt identifications. No catalog tolerance is relaxed.

Verification: focused surface/inferred-beam and image-circle audits, aperture census after added cuts, actual native SVG outlines and render diagnostics over nine zoom/focus states; current-label glass resolver/coordinate compatibility and the shared dispersion/partial-dispersion consistency suites. Full repository gates are recorded by the coordinator at commit time.
