# IX-Nikkor 30–60 mm — qualified Example 5 reconstruction review

14 October 2026. **Patent-based reconstruction; never a verified factory prescription.** The approved task is to make an annotated, independently constrained Example 5 package. Example 3 was rejected. Approval of reconstruction is not confirmation of production identity.

## Job and controlling references

- Patent: original JP3909533B2 grant; Example 5, Table 5 on printed/PDF pages 16–17, Figure 17. Original grant SHA-256: `52caefe4d984f7ced59853752d7d1706d6f83f34b18bb5b4ed425da52614ce71`.
- Target: Nikon IX-Nikkor 30–60mm f/4–5.6; stem `NikonIXNikkor3060mmf456`. The new four-field card records this approved selection; no prior Example 3 approval is transferred.
- Verified citation audit and complete source/replay archive were read before construction. All 22 source-archive manifest entries verified; original independent-fit replay reproduced its JSON SHA-256 `fbbc15d20f80e15fcd3c2f403975b5e219069ac51ec602f44d9ea8322a5b5cf1` exactly.
- Current repository was refreshed to `a6980a47fc9f1efecb596160d9627acfb7ddac35`. Worktree `/workspace/ix-example5`, branch `private/ix-nikkor-example5-annotated`. AGENTS, current data/analysis specs, template, defaults, taxonomy, authoring/integration guides, decisions and formatter rules were read. Their exact hashes are in the manifest.
- CHAT-1.0 shared protocol/dossier/stage prompts from the supplied workflow kit govern portable evidence and stage boundaries. The user's explicit Codex/isolated-branch/full-project/browser instructions supersede its chat-only/deferred-project defaults. No push, merge, deployment or publication occurred. Local builds remain verification artifacts. Final acceptance in an isolated checkout does not merge this into the production repository.

## Extraction and conventions

The grant gives twelve spherical refracting surfaces, one flat stop, six separated elements, negative–positive functional zoom groups and three infinity zoom stations. Surface 9 is `−99.5657`, not a corrected production radius. The index of the medium after each interface is used; the d-line reference is stated in paragraph 0047. Paragraph 0049 separately identifies wavelengths in aberration plots. Blank glass entries are air for this separated topology. All six-decimal indices and native Abbe values are retained.

Positive radius means center toward the image/right. BFL is measured from the last optical vertex; TL from the first vertex to the paraxial image. The finite endpoint convention is object-to-image distance. No cover plate, dummy plane, cement or asphere is invented. The evidence preserves all seven printed condition values, definitions, precision and source locators. Both baseline and reconstruction satisfy the cited numerical claim bounds; equality to the source's printed example conditions is not claimed after thickness changes.

Computed unchanged-table EFL/BFL differs from the detailed source summaries. At scale 30, EFL residuals are approximately +0.00767/+0.01373/+0.02510 mm; BFL residuals +0.01280/+0.01805/+0.02806 mm. Strict raw comparisons remain **FAIL**. Independent half-last-printed-digit sensitivity envelopes contain those residuals. A separate disclosure-resolution check passes for a limited rounding-plausibility treatment; the cause is not proven, and no source value is edited.

## Independent calibration and numerical transformation ledger

The chosen ruler is **30 mm/native unit**, from Nikon's nominal wide 30 mm divided by patent wide f=1. It is independent of P2P's 30.92 mm ruler. All dimensional fields scale uniformly; nd/νd remain unchanged. The revised EFL is an outcome, not an optimization target. Alternative rulers 30.92 and 60/1.88350, unchanged-interval calibrations, fitting windows and rear-only fitting remain in evidence/results.

| Parameter | Native/source baseline at chosen scale | Final reconstruction | Basis and uncertainty |
|---|---:|---:|---|
| E4 center (surface 8 d) | 0.0922 native / 2.7660 mm | 0.08636655443443597 / 2.5909966330 mm | Original Nikon central-curve fit; −6.32695%; not factory dimensions |
| E5 center (surface 10 d) | 0.1133 native / 3.3990 mm | 0.08190241113316778 / 2.4570723340 mm | Same fit; −27.71191%; not P2P thickness values |
| All twelve radii | Patent values ×30 | Retained | Weak E4 sign conflict remains |
| All six nd/νd pairs | Native source precision | Retained | No supplier/melt identification |
| Fixed central air gaps and stop location | Patent values ×30 | Retained | Contact statement cannot solve glass thickness |
| D4 infinity anchors | 16.9647 / 7.8969 / 0.8706 mm | Retained | Intermediate spacings sampled, not a recovered cam |
| EFL wide/middle/tele | 30.00767 / 40.79033 / 56.53010 mm calculated | 30.88047 / 42.08748 / 58.55322 mm | No forced nominal endpoint match |
| BFL wide/middle/tele | 36.75110 / 44.49365 / 55.79566 mm calculated | 39.36672 / 47.58783 / 59.66660 mm | Recomputed infinity image planes, not factory gaps |
| Inferred facing s9/s10 rims | 6.300 mm | 5.731 mm | Only these optical extents capped; other inferred extents retained |
| Gap-sag allowance | Default 0.90 | 0.969999 | Smallest allowance at 10⁻⁶ precision admitting cap; ceiling 0.97 |
| Focus | No published finite spacings | G1-only constrained conjugates | ¶0050 mechanism; 350 mm object-to-image convention |
| Sampling | Three source zoom anchors; infinity | 65 zoom ×17 focus authored samples | Smallest tested dyadic schedule below 0.005 mm; independent denser-grid confirmation |
| Aperture metadata | Initially invalid arrays | Marketing 4; design 4.09 scalars | Actual schema correction; full station f-number schedule retained in nominalFno |

The author fit uses all 12 central curves, 20–125 px off axis, common image scale and two group offsets, with only E4/E5 glass thicknesses free. It reduces RMS from 7.59005 to 1.84224 px using two extra thickness parameters. This is not an equal-complexity proof of product identity. An independent variable-projection algorithm reproduces the selected values to about 5×10⁻¹¹ native units. Its threshold/window sweep is separately recorded. Independent algorithm corroboration after method exposure is not a blind fit.

The image is an unscaled JPEG at an unspecified zoom position. Relative thicknesses and curvature signs supply constraints; absolute scale, production glass, stop diameter, clear apertures and mechanical dimensions remain unknown. All calibration spans are sensitivity to assumptions, not statistical confidence intervals or manufacturing tolerances.

## Geometry, contact and source-preserving clipping

With all central air gaps/radii fixed, local separation is `gap + sag(next,h) − sag(previous,h)`. E4/E5 thicknesses do not appear. Ideal spherical contact radii on scale 30 are about 5.81806 and 6.66063 mm for s9/10 and s11/12. They are not factory rim dimensions or cemented junctions.

The Nikon-derived 6.300 mm s9/10 shared extent would exceed the permitted gap intrusion with the retained source spheres. Capping both to 5.731 mm removes 0.569 mm radius: **9.03175% radius or 17.24777% local circular area**. This is not a flux-loss estimate. The cap retains central gap 0.582 mm, intrusion 0.564538886 mm, fraction 0.969998086 and positive clearance 0.017461114 mm. There is no central-gap or radius optimization to fabricate contact. Mechanical blanks, chamfers and production contact remain unreconstructed.

Independent sampled geometry gives minimum edge thickness 0.815872 mm and maximum spherical rim angle 41.00633°. Actual project render diagnostics report zero hidden trim at every tested state. Portable slope/edge/shared-band calculations and the production renderer are separately identified checks.

## Focus, zoom and optical calculations

G1 alone translates objectward under patent paragraph 0050; G2 and image plane remain fixed for focus at each zoom. The paraxial object-to-image equation is solved to 350 mm, with reciprocal-distance keyframes. The independent quadratic-root method checks 1,040 authored finite states: one physical root has object in front of the first vertex; the second mathematical root puts the object inside/behind the optical train and is rejected. This establishes a physical branch under the declared mechanism/convention, not a production cam law.

The author initially tested 129 zoom ×17 focus, which hits focus keyframes and misses focus midpoints. Independent review added 257×65, including between-keyframe states. Maximum sampled defocus is **0.004124703 mm**, below 0.005 mm, near zoomT=0.9921875/focusT=0.96875. Final portable verification uses that denser grid. No continuum or exact-ray best-focus guarantee is claimed. Reconstructed finite states are not labeled published or source-certified.

Sequential reduced-angle and separate ABCD calculations agree. Standalone powers, functional-group powers, cardinal reference planes and each surface's Petzval term are in results. The Petzval sum is +0.002586444655 mm⁻¹. All quantitative analysis claims map to those executed facts. No manufacturer performance curve or third-party edited radii/glass/gaps were fitting objectives.

## Independent review and claim map

A separate reviewer re-rendered original patent pages, freshly re-entered source values and wrote standard-library sequential/matrix calculations before opening the author's candidate or archive fitting results. A frozen source/code/result fingerprint is preserved in `independent-review.json`; the baseline is not rewritten during reconciliation. The reviewer knew the target/example and authorized scope, and received two source-only geometry questions. Context blindness is not claimed. The image corroboration was written after author-method exposure and is labeled accordingly.

The consolidated independent replay contains its fresh algorithms, frozen inputs and baseline digest, candidate reconciliation, image sensitivity and finite-root uniqueness. It reviews actual TypeScript values and the exact final analysis revision. Claimed numerical independence is distinct from independently executed project checks.

| Analysis claim | Evidence/result location |
|---|---|
| Grant authorship/dates/Example 5 | Original PDF p1,15–17; independent frozen source metadata |
| Six separated spherical elements/two zoom groups | Table 5; Nikon sections II–III; source topology |
| Calibration/thickness/RMS/sensitivity | results.facts.image; evidence modeling ledger; independent image method |
| EFL/BFL and retained source residuals | results.sourceModel/implementedModel/comparisons |
| Element and group powers | results.facts.elements/functionalGroups; independent reconciliation |
| nd/νd and unmatched dispersion | Actual data elements; raw table; runtime resolver audit |
| Petzval | implementedModel.petzvalBySurfacePerMm and petzvalPerMm |
| Constrained focus and sampled error | results.facts.maxInterpolationDefocusMm; independent focusUniqueness |
| Rim reduction/clearance/97% exception | evidence aperture decision; results.facts.geometry and clippedRim quantities |
| Actual aperture/field/render/ray/analysis/browser checks | project-checks.json and independent projectExecuted |
| Factory correspondence and production limits | Source audit; Nikon unscaled image; review limitations |

Manual interpretive review checked source versus inference, standalone versus in-situ powers, reference planes, non-cemented contact, Abbe-only spectral claims and required analysis structure. No APO, factory MTF or exact production-geometry claim is made.

## Executed project/browser checks and failed/unrun register

Final real-project TypeScript, format, lint and all **3,119 tests /287 files** pass. The production pipeline builds and prerenders 1,654 routes. Targeted validator, exact axial aperture census and field coverage pass: 65 source/model zoom stations within 3% of stated aperture, none rim/trace/iris-limited; APS-corner chief-ray coverage at least 99% at all stations. Runtime `Unmatched` labels intentionally resolve to no catalog identity.

Actual diagram diagnostics cover 129 zoom ×17 focus states and report zero hidden trim; an independent render sweep covers 129×33 and also reports zero. Exact ray checks cover 33 zoom ×5 focus ×3 fields ×5 pupil offsets (2,475 rays). Finite bundles share a point at the declared 350/focusT object-to-image distance. The final sweep has 2,017 transmitted and 458 semi-diameter-clipped rays, including iris clips; no intersection failure. The clip count is a sampled model result, not a factory illumination fraction. Off-axis clipping is retained.

All ten analysis jobs run at the three source zoom anchors and both focus endpoints without exceptions. Low-grid geometric MTF smoke runs leave several fields unconverged; those statuses remain in project-checks. The full browser default diffraction/photopic/best-axial calculation separately converges **11/11 fields at each infinity anchor**. It remains an estimated-dispersion prescription calculation, not manufacturer MTF.

Chromium/Playwright browser checks exercise five zoom/focus/aperture combinations, all ten tabs and desktop/mobile rendering, with no JavaScript exceptions or NaN/Infinity SVG paths. The only failed request is `http://gc.zgo.at/count.js` HTTP403, an external analytics resource. It is retained as a browser-resource failure and not disguised as a clean network run. MTF at finite focus displays the expected unsupported-conjugate message because no published finite spacings are certified.

| Earlier or remaining check | Status and disposition |
|---|---|
| Direct source streaming download | HTTP403; bounded raw-byte connector retrieval used successfully; source hashes verified |
| Initial `publishedStations.focus=[0]` | FAIL; field expects nonzero published focus indices. Removed; infinity is implicit; final validator passes |
| Initial hardcoded source-summary tolerance | FAIL at middle/tele; replaced by separate strict raw FAIL observations and disclosed source-rounding resolution, not a source edit |
| Initial project ray-call signature | Script error; corrected to actual API; final engine/adapter statuses reconcile |
| Initial aperture metadata arrays | TypeScript FAIL; scalar contract correction, full nominalFno array preserved; final typecheck passes |
| First corpus run | 3 failed/3,116 passed; invalid/stale aperture metadata affected hidden-library and summary-parity tests; final full run3,119/3,119 passes |
| Intermediate corpus run | Stale summaries and overlapping refresh produced failures; run interrupted/replaced. Raw logs retained in project evidence; final fresh run is authoritative |
| Initial browser PUPILS selection | Ambiguous locator; fixed to analysis-tab controls; final all-tab run passes |
| First browser MTF completion detection | Premature match on background-calculation wording; corrected to require no calculating text and explicit field convergence summary |
| Initial finite-ray launch | Parallel rays were used at finitefocus; corrected to commonobjectpoint350/focusT. Old227clips are superseded by458; no lens geometry changed |
| Initial finite-ray launch | Parallel rays at finitefocus were an invalid common-object bundle; corrected to the declared object distance. Earlier227clips replaced by458; numerical lens data unchanged |
| Initial ray clip-cause comparison | Harness incorrectly equated failureReason with clipping; normal semi-diameter clips have null failureReason. Corrected to engine status and hit clipReason |
| Low-grid geometric MTF | Executed; some fields UNCONVERGED. Separate full browser default mode converges; no equivalence between the methods claimed |
| Finite-focus MTF | NOT_RUN numerical curve; expected application guard verified. Reconstructed focus is not source-certified |
| Authoritative vendor-coordinate/Sellmeier re-audit | NOT_RUN; coordinate-preserving Unmatched labels and Abbe estimates explicitly retained |
| Factory prescription, cam, scale, tolerance, coating or measured performance validation | NOT_RUN; supporting numerical production evidence unavailable |
| Exhaustive continuum/alternative exact-ray checks | NOT_RUN; finite grids and paraxial/geometry sensitivity alternatives only |

## Preservation, reproducibility and disposition

The completed Series E package was read back without mutation: 703,019 bytes, 14 members, SHA-256 `4cd0729260fbb1f7ff911d20a7e4ff75a863c501db502d05e37c54cee77f69ee`, matching its earlier verified delivery record; CRC and every member hash/size pass. No Series E repository/package/sharing artifact was changed.

This dossier has at most 14 root-level files: original grant, new selection card, clean pair, evidence, verifier, results, consolidated audit, manifest, original Nikon image, independent review JSON/script and project checks JSON/replay script. No nested archives or caches. Clean extraction replays both numerical implementations using relative package inputs and externally written results. Every source/model/support file is hashed, and the new remote delivery is read back for full archive/member/hash verification with unchanged owner-only permissions.

Disposition: **qualified reconstruction accepted for private handoff, READY_FOR_BATCH; INTEGRATION_PENDING.** This means the stated limited package passed its applicable gates. Source-summary FAIL observations, unsupported finite MTF, estimated dispersion and production-correspondence limits remain explicit. No public incorporation or factory certification is implied. (Integration closed 2026-10-14; see below.)

## 2026-10-14 — Deployment validation and wording pass

Source re-read: Table 5 (printed p.16, read from the page image at 200 dpi) was checked row by row at 30 mm per unit: 13 radii, 12 thicknesses/gaps, 6 nd/νd pairs, d4 at three zoom states; no aspheres. Everything matches the patent except the deliberate E4/E5 center thicknesses (d8 2.766 → 2.591 mm, d10 3.399 → 2.457 mm) and the recalculated back focus. Bibliographic data (JP 3909533 B2, granted 2007-04-25, filed 1997-01-24, published as JP H10-206733 on 1998-08-07, inventor Haruo Sato, Nikon) match the file.

First order: the printed table alone gives EFL 30.008 / 40.790 / 56.530 mm against the stated 30.000 / 40.777 / 56.505 mm. The model gives 30.880 / 42.088 / 58.553 mm (+2.9 / +3.2 / +3.6%) and BF 39.367 / 47.588 / 59.667 mm against the printed 36.738 / 44.476 / 55.768 mm. f2 changes 27.19 → 27.77 mm; condition (7) changes 0.2268 → 0.182, still inside the claimed 0.01–0.23. f-numbers 4.09 / 4.79 / 5.85 are kept. The patent's wide half-field of 30.31° corresponds to 17.54 mm at 30 mm per unit, close to the APS half-diagonal of 17.26 mm.

Maker diagram and Tale 83 (Haruo Sato): the axial spacings of the rear group in Fig. 1 fit the model with about 3 px RMS against about 8 px for the printed Example 5. The drawing supports a thinner E5; the patent's E4 rear radius is kept although the drawing shows a weak positive curvature. Tale 83 gives no thickness figures; its only related statements are that lens and rim thickness constrain the design and that the last three elements touch. The model has about 0.017 mm of air at the s9/s10 rims and about 0.2 mm at the s11/s12 rims; thickness does not enter either. Satisfied: six spherical elements in a negative–positive two-group zoom with a four-element rear group; lanthanum glass only in the first element (nd 1.7967 / νd 45.4); 0.35 m minimum focus; f/4 at the wide end and f/5.6 at the long end; APS format on the Pronea. Not satisfied: the focal lengths are 30.9–58.6 mm, not 30–60 mm (the printed example gives 30.0–56.5 mm); and the model gives about f/5.0 at 45 mm, not f/4.8. The f/4.8 discrepancy comes from the interpolated f-number schedule, not from the thickness change. Tale 83 also says the patent contains 30–60 mm and 28–60 mm examples; Examples 1 and 2 (2.007×) are the nearest to 2×. It was evaluated and rejected on element shapes.

Engine and validators: surface validation OK; no axial clipping or chief-ray blocking at an image height of 17.25 or 17.54 mm at any zoom station; field coverage at least 99% at all 65 zoom stations once the lens is visible.

Fields changed in this pass: key `nikon-ix-nikkor-30-60mm-f4-56-reconstruction` → `nikon-ix-nikkor-30-60mm-f4-56`; name without "RECONSTRUCTION"; `visible: false` removed; `lensMounts` `nikon-f` → `nikon-ix`; subtitle, specs, header comment, focusDescription and the BF variable label reworded. The analysis was reworded, gained a Model Scope section, and lost its private file links and process wording. No optical value changed.

Open: none.


## 2026-10-14 — Patent-rim, dispersion and metadata audit

Source: Figure 17, PDF page 22; Example 5, Table 5.

| Field | Before | After | Evidence |
|---|---|---|---|
| L1–L6 glass | Unmatched | Q-LASFPH3S, S-TIH53, N-SSK5, S-TIH6 and E-FD15 spectral proxies | Compatible d-line coordinates, supplier/melt unconfirmed. L1 is approximate: Δnd −0.001431, Δνd about −0.12. |
| Design focal-length spec | 30.00–56.51 mm | 30.88–58.55 mm | Header now reports the implemented E4/E5 drawing-derived model consistently with focalLengthDesign. |

The 600 dpi optical rims of the exact Figure 17 were inspected; relative heights agree within about 15%, apart from the already disclosed rear-gap limit. The 5.731 mm facing rims remain unchanged. The patent-to-Tale-83 thickness substitutions remain disclosed rather than being silently reverted. Nikon IX and APS film metadata are present, and the IX-Nikkor display name is correct.


## 2026-10-14 — Local-viewer review

The local wide/tele and close-focus diagrams were compared with JP3909533B2 Figure 17 (PDF page 22, rotated). The last element's surfaces 12/13 decrease from 6.3 to 5.6 mm, closer to the roughly 5.26 mm optical-curve estimate. The 5.731 mm facing surfaces 9/10 are retained. The revised last rims preserve the stated axial aperture and APS image-corner chief ray throughout zoom; peripheral vignetting remains modeled.

Two source functional-group brackets replace six fallback movement groups, and the diagram adopts the figure's L11/L12/L21/L22/L23/L24 identifiers. G1 moves objectward for near focus while G2 stays fixed; finite conjugates descend to the reconstructed 350 mm endpoint. During zoom G1 first moves imageward then objectward, while G2 moves objectward. The previously disclosed E4/E5 thickness substitutions and long focal-length result remain. Nikon Corporation, Nikon IX and APS-film metadata are correct.
