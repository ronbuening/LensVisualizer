# Laowa 90mm f/2.8 2X Ultra Macro APO — consolidated Stage 4 audit

## Job, authority and exact revision
The original fixed job is CN116520542A, Example 1, paragraphs 0037–0050, Figure 1; output stem Laowa90mmf28UltraMacroAPO. Original patent and job-card bytes remain unchanged. Approved queue scope is recorded in evidence source A1. CHAT-1.0 dated 11 September 2026 and the identified current LensVisualizer references govern; actual project code is from main 3920234ab22de546bcaacaee275e35bd51eed0ca.

The author's Stage3 candidate ZIP hash was d0c3ccd909bdcb420deadd68fb18394860d8624ef4d65444a14573e15571bcfa. The candidate and final data hash are both 5d873089fbbe288be8726c21b78b4d3ab0e34b45f87750813f1459392f4c3049. No radius, distance, refractive index, Abbe number, inferred SD, glass label, focus coordinate or other data-file value changed in Stage4.

## Source extraction, precision and reference planes
Independent manual re-entry used rendered original prescription pages 5–6, text definitions, condition definitions and Figure1. All 24 listed rows remain: 23 refracting boundaries and stop15, 13 glasses, 10 air-separated components, three cemented interfaces. The source has no separately numbered image row, asphere, rear cover plate, numerical SD or physical iris diameter. The image follows D24. Blank medium cells are air. nd/vd are d-line coordinates. Native millimetres and scale1 are retained.

The author's source cells, native system facts and state gaps reconcile with the independent extraction. Fresh sequential reduced-angle propagation, separately implemented ABCD multiplication, analytic thin/thick lens fixtures and exact tiny-ray Snell checks agree.

Infinity computed EFL87.0575802146mm differs from source87.0609 by−0.0033197854mm, within conservative source-cell rounding sensitivity0.0162603273mm. Gaussian BFD19.6633239796mm differs from printed image gap19.6820 by−0.0186760204mm; source-cell sensitivity0.0099706796mm does not fully explain this. No claim that rounding alone caused the image-plane difference is made. The printed image plane is preserved.

Native 1.0x/2.0x labels yield first-order magnifications−0.9967983352/−1.9595171301 at the prescribed image planes. Calculated first-vertex object distances103.9996861/73.1663316mm and object-to-image distances232.8897861/202.1499316mm are computed quantities, not printed source distances. Strict target comparisons remain visible; no exact source-magnification or best-focus certification is claimed.

## Source-summary addendum and exposure correction
The original independent freeze omitted the later condition-summary table. The author alerted the reviewer and quoted its values before direct reinspection of original PDF9 paragraph0066. That dated addendum is preserved separately inside the independent bundle; the original frozen baseline was not rewritten. The author checkpoint was likewise reopened for the omission.

The printed Example1 summaries are2.940,1.690,0.479,0.928; the fresh values are2.940265199,1.687568202,0.479185065,0.927646081. All substantive condition intervals pass. C2's summary does not reproduce to0.0005; its0.002431798 residual is much larger than independent source-input sensitivity0.000006697. The failed summary comparison survives. The earlier duplicated equation number(3) is distinguished from the later correct condition(4) label.

## Model transformations and focus
The source infinity stop plane is represented by the approved large-radius sentinel1e15. The physical iris radius8.456025914mm is inferred by exact axial tracing at entrance radius EFL/(2×2.9). Independent analytic circle roots reproduce that radius. This is f-number calibration, not independent iris evidence.

Physical SDs are inferred from Figure1 and constrained by geometry and rays. The author changed provisional surfaces16/17 SD8.6 to8.1 after actual shared-band validation failed at8.6. That change affected inferred rims only, not source optical parameters. The final8.1 values pass independent checks.

The native D2/D15/D24 vectors preserve G2's objectward motion and G3's reversal. Tracks128.8533/128.8901/128.9836mm preserve source increases0.0368/0.1303mm. No fixed-track correction is imposed. closeFocusM and the middle focus coordinate are derived display coordinates. Intermediate gaps are explicitly piecewise-linear estimates; no physical cam law or finiteConjugates certification is invented.

## Independent numerical and geometry audit
The independent source baseline was frozen before the reviewer opened the Laowa90 candidate. Fingerprint:
a8b26cbfe49f068e145d69e181c3fc03338bb68ed0da6183560348132fdd6c32

Actual pre-freeze exposure included the original full job card with appended conclusions and parent task summary. It did not include authored data, prior calculations or glass choices. Fresh source extraction and code are independent within that disclosed scope, not a claim of perfect prior-knowledge blindness. The late source-summary omission and subsequent exposure are disclosed above. After the freeze/addendum, candidate evidence, native ray counts and author reasoning became visible for reconciliation.

The final package preserves exact frozen source inputs, baseline results, six-catalog results, catalog-search code and exposure text inside independent.json, plus the byte-identical baseline.py. review.py contains the later independent reconciliation, analytic spherical geometry and exact circle-root tracer. verify.py runs both author and independent paths and loads the final data itself.

All source/candidate radii, d, nd, element identities, variable vectors, stop and counts match. Standalone element and cemented/group powers, principal planes, pupils, surface Petzval and every native first-order state agree. The source-summary addendum remains explicit.

For this all-spherical model, each difference of two sphere sags has radial extrema at shared-band endpoints; piecewise-linear gaps reach axial extrema at their authored keyframes. These independent analytic checks complement the author's 41-position sampling:
- maximum actual rim slope52.075839°; spherical domains pass
- minimum shared-band element thickness0.011494001mm at L7, mathematically positive
- all shared-band gap intrusions below0.9 of the minimum native/interpolated gap
- no manufacturing-feasibility claim from the very thin inferred L7 edge

Independent exact analytic-circle/Snell tracing at five native/half-segment states uses140 meridional probes with pupil fractions−1,−0.8,−0.4,0,0.4,0.8,1 and four source field fractions. It returns120 transmitted and20 physical clips; all sampled axial rays and source-field chief rays transmit, and no cemented interface is a first clip. Formal sphere continuation may assist aiming beyond physical apertures; final physical traces stop at the first clip and never count fictitious continuation as throughput. The author's different140-ray grid returns118 transmitted/22 clips; the grids are not conflated.

## Actual project execution and failure dispositions
The reviewer reran the exact author native script against actual recorded project modules with Node24.19.0 stripTypeScriptTypes. The result was structurally identical to packaged native.json. All138 actually loaded module hashes were independently verified against existing bytes.

Actual buildLens()/validateLensData() pass, and real element-render diagnostics show zero hidden trim. The rendered three native states were visually reviewed against patent topology and the official product overlay. This is real project runtime/render evidence, not static TypeScript, full application UI or corpus acceptance.

The actual skew grid retains744ok,111clipped,19failed and1AIM_UNRESOLVED. The reviewer independently re-solved each of the19 failed rays with analytic sphere roots: all are incident-air misses outside surface1's finite cap. The raw failures remain failed, accompanied by that physical disposition. The unresolved aim is at infinity full-frame corner13.955016°, beyond source half-field13.5°. It remains unavailable. Source-domain axial/chief containment is defensible; complete corner throughput and continuum image quality are not certified.

## Glass and production evidence
The independent search re-read coordinates from authoritative OHARA, HOYA, Schott, HIKARI, Sumita and CDGM catalog snapshots without starting from author labels. Raw relevant rows, hashes, residuals and search coverage are preserved. Multi-vendor coordinate equivalence does not establish a supplier or melt. Weak/no-match media remain unmatched; no spectral index was promoted to a patent fact.

Actual runtime dispersion quality is Abbe for all13 elements. “Supplier unknown” triggers the unresolved marker even on six-digit class labels, so this revision deliberately activates no catalog dispersion curve. Product APO naming does not imply verified apochromatic performance.

The reviewer reopened the official product page and visually read the preserved official manual and construction overlay. The13/10 topology, three ED positions, full-frame/27° specification, mounts, manual focus and13 blades support the association. The source is not asserted to be the manufactured prescription. Manual18.3cm usage text,205mm specification and current page204mm remain conflicting marketing distances, none imported into source focus states.

## Stage4 corrections and dependency rechecks
1. L10 prose incorrectly said its Abbe number was lower and it was more dispersive than L11. Corrected to higher36.30 versus29.88 and less dispersive by that measure. Source: PDF6 media at surfaces18/19. No numeric/data changes.
2. Evidence-only L-mount taxonomy changed leica-l to current canonical l-mount; data was already correct.
3. Analysis now explicitly discloses all13 Abbe fallback and the unresolved-wording behavior.
4. Generic image-marker omission wording was corrected: no optical source row is omitted; the source image plane followsD24 without a separate numbered image row.
5. Condition table formulas were made human-readable, track increments and independent geometry/ray results were made explicit. No source fact changed.

All affected author and independent gates were rerun on final evidence, analysis and verifier bytes. Data equality and original hashes are separately checked. Correction validation is a post-exposure audit, not a second blind source extraction.

## Quantitative claim map and editorial review
- Identification, patent metadata, mounts/blades/manual focus: evidence.job/sources/productCorrelation and directly inspected primary pages.
- EFL/BFD, principal planes, pupils, group and cemented powers, standalone L1–L13 powers and Petzval: results.implementedModel and independentReview.details.recomputedSource.
- Focus states, movements, image-track increments and derived coordinates: rawPrescription.var, sourceModel, independent candidate calculations.
- Conditions and failed C2 summary: facts.conditions, comparisons and independent.json.sourceSummaryAddendum.
- Stop/rims, edges, slopes, gaps and native/source ray counts: modelingDecisions, facts.geometry/exactSourceFieldCoverage/nativeCapMissDispositions, independentReview.details.geometry/independentSourceField/nativeFailureRecheck.
- Catalog uncertainty and all-Abbe scope: glassEvidence, frozen glass_results and actual native dispersionQuality.

Manual review confirmed the L10 correction, source/calc/inference separation, third-person technical prose and applicable analysis section order. No claim of manufactured identity, independently proven APO correction, MTF, full-field throughput, continuous-focus performance or guaranteed manufacture remains.

## Gate, packaging and integration
READY_FOR_BATCH applies only after final exact-membership/hash verification and clean-extraction portable replay recorded in manifest.json. The approved scope is a literal, source-limited patent-example model with inferred apertures and preserved discrepancies.

INTEGRATION_PENDING. Static TypeScript, real Prettier, full-corpus sweeps, full build/prerender and application acceptance remain NOT_RUN at integration scope. No Git write, CSV/index edit, metadata generation, deployment or integration was performed.

Portable replay:
python Laowa90mmf28UltraMacroAPO.verify.py --package-dir <extracted-directory> --output <external-results.json>

Actual runtime replay additionally requires the identified shared project snapshot and Node24+:
node Laowa90mmf28UltraMacroAPO.native.mjs <shared-project-root> <data-file> <external-native.json>

The fourteen-file dossier includes three essential independent-review support files. No cached bytecode, routine renders, nested archive or old draft is part of the package.

## 2026-10-08 — Deployment validation against patent and maker diagram

Independent re-read of CN 116520542 A Example 1 from page images: 24 surface rows, 13 glass pairs and 9 focus gaps agree with no mismatch; engine f 87.0576 mm against the printed 87.0609 mm. The rendered section matches Laowa's published construction element for element, with ED at L2, L3 and L7 and high-refraction glass at L5, L8 and L11. The lens launched in June 2022, before the February 2023 filing, as did the 58 mm sibling from the same patent.

Changed at deployment: `patentAuthors` and `patentAssignees` set to the catalog spellings; display name uses `2×` like the 58 mm and 65 mm entries; blank lines that split the glass and condition tables in the analysis were removed. The 58 mm analysis no longer says Example 1 has no production counterpart.

The L6/L7 rims (surfaces 10 to 12) left a 0.011 mm edge where Figure 1 supports about 10.5 mm, and the three ED elements carried coordinate labels and no `apd` tag. Both closed the same day: see the semi-diameter and integration sections below.

## 2026-10-08 — Semi-diameter pass against the patent figure and maker diagram

Source: `patents/CN116520542A.pdf`, PDF page 10, Figure 1 (Example 1, infinity state). Figure 3 on PDF page 12 is Example 2 (the 58 mm lens, cemented G1) and was not measured. The figure is a clean line drawing with no ray overlay, embedded at 150 dpi (843 × 550 px) and measured on a 600 dpi render, top and bottom halves separately.

Scale: the optical axis sits at row 1636.5. Vertex crossings at 600 dpi are surface 1 at x 970, surface 3 at 2122, surface 14 at 2812, surface 16 at 2876 and surface 24 at 3652. Surface 1 to 24 is 2682 px for 109.1713 mm, 24.567 px/mm; surface 3 to 24 gives 24.54 and surface 16 to 24 gives 24.55. Every other vertex and the image-plane line (4135 px measured, 4135.5 predicted) fall within 3 px, 0.13 mm, of the prescription. The figure is therefore drawn to scale at 0.0407 mm/px; one raster pixel is 0.163 mm, so a rim reading is good to about ±0.15 mm. Readings below are line-centre half-heights averaged over both halves.

| Element (surfaces) | Before | Figure 1 | Maker diagram | After | Basis |
| --- | --- | --- | --- | --- | --- |
| L1 (1, 2) | 26 / 26 | 25.4 | 25.0 | 26 / 26 | retained, 2 % high |
| L2 (3, 4) | 15 / 15 | 13.7 | 14.2 | 14.0 / 14.0 | lowered; square-cut rim; axial ray 13.79 on surface 3 |
| L3 (5, 6) | 14.5 / 14.5 | 12.9 | 13.2 | 13.0 / 13.0 | lowered, was 12 % high; axial ray 12.86 on surface 5 |
| L4 front (7) | 12 | 11.3 | 11.7 | 12 | retained, 6 % above figure, 3 % above maker |
| L4/L5 junction (8) | 12 | 11.3 outer; L4 land from 10.4 | — | 12 | retained |
| L5 rear (9) | 11.5 | 11.3 outer; curve ends 10.1 | 11.0 | 11.5 | retained |
| L6 front (10) | 11.5 | 10.5 | 10.8 | 10.5 | lowered, was 10 % high; axial ray 10.09 |
| L6/L7 junction (11) | 11.5 | 10.5 outer; L6 land from 9.7 | — | 10.5 | lowered with the doublet |
| L7 rear (12) | 11 | 10.5 | 9.9 | 10.5 | lowered; L7 drawn square-cut, both faces one height |
| L8 (13, 14) | 10 / 10 | 9.3 | 10.0 | 10 / 10 | retained; maker agrees, and 9.3 is below the 9.38 axial ray |
| STO | 8.456 | 8.3 (tick inner end) | — | 8.456 | not part of this pass |
| L9 (16, 17) | 8.1 / 8.1 | 8.2 | 8.5 | 8.1 / 8.1 | retained |
| L10/L11 (18, 19, 20) | 12 / 12 / 12 | 11.8 outer; front curve ends 8.0 | 10.3 | 12 / 12 / 12 | retained, 2 % high |
| L12 (21, 22) | 14 / 14 | 13.7 outer; front curve ends 12.3 | 14.0 | 14 / 14 | retained, 2 % high |
| L13 (23, 24) | 17 / 17 | 16.3 | 16.5 | 17 / 17 | retained, 4 % high |

Seven surfaces changed, on three elements. L3 and the L6/L7 doublet were the clear departures. L2 was 9 % above the figure and 6 % above the maker diagram; it moves with L3 so the step between them stays at the 0.8 to 1.0 mm both drawings show instead of opening to 2 mm. Each new value sits between the patent figure and the maker diagram and above the f/2.9 axial marginal ray. The L7 edge at the shared height rises from 0.011 mm to 0.538 mm (the figure draws about 0.6 mm); L2 and L3 edges are 1.49 and 1.59 mm against about 1.6 mm drawn. This closes the L6/L7 item left open in the deployment section above.

Maker diagram (Laowa construction drawing, 1000 px wide, about 7.2 px/mm from first to last vertex; its G1–G2 and G2–G3 spans differ by 4 %, so heights are good to about ±0.4 mm). It shows 13 elements in 10 groups with the same three cemented pairs (L4+L5, L6+L7, L10+L11) as Example 1. Extra-low-dispersion glass is marked on L2, L3 and L7, ultra-high-refraction glass on L5, L8 and L11, and no aspherical element. Relative heights agree with Figure 1 for G1, the G2 taper and L12/L13. Two differences are recorded and the patent figure kept: the maker draws the L10/L11 block near 10.3 mm where Figure 1 draws 11.8 mm, and it draws L7 about 0.8 mm lower than L6 where Figure 1 draws them level. The maker also draws L5 about 0.7 mm lower than L4, consistent with the stored 12 / 11.5 step.

Clearance after the edit, by exact meridional trace at the stored stop radius. At infinity the axial marginal ray is at 13.79, 13.67, 12.86, 12.39, 10.09, 9.52 and 9.44 mm on surfaces 3, 4, 5, 6, 10, 11 and 12, so the smallest margin is 0.14 mm on surface 5. At the 1.0x and 2.0x stations the stop-limited axial beam is narrower everywhere (at most 10.82 and 9.74 mm, on surface 4), so infinity governs. The full-frame corner chief ray (21.63 mm, 13.81° at infinity; the patent's 13.5° lands at 21.13 mm) clears every rim at all three stations; its closest approaches are 23.28 of 26 mm on surface 1 at infinity and 15.97 of 17 mm on surface 24 at 2.0x. The repo validator reports no errors, the image-circle check reports 0 undersized surfaces, and traced field coverage stays at 100 % (13.8° to 21.65 mm). Engine half-field is 15.593° and the wide-open f-number 2.9 before and after; the stop was not touched. Maximum rim slope is unchanged at 52.08° on surface 8.

Off-axis vignetting rises slightly, as the smaller drawn rims imply. The share of the meridional pupil height that passes every rim at 0.5 / 0.7 / 0.85 / 1.0 of the full-frame corner goes from 85 / 77 / 68 / 56 % to 81 / 73 / 65 / 56 % at infinity and from 100 / 100 / 94 / 83 % to 100 / 100 / 90 / 78 % at 1.0x; 2.0x is unchanged at 100 / 100 / 86 / 68 %. The corner at infinity is still set by L1 and L9, not by the changed rims.

The rendered section was compared with Figure 1 at infinity, 1.0x and 2.0x after the edit: L2 and L3 now show the flat square rims and the small step the figure draws, the L6/L7 doublet stands below L4/L5 with a visible L7 edge, and no elements overlap in any state.

Open limitations. The renderer joins front and rear rim points with a straight line, so the flat lands Figure 1 draws on the concave faces of L4, L6, L10 and L12 are not modeled; those faces run to the outer height. L4/L5 stay 6 % and L8 7 % above the figure, inside the band this pass does not repaint. L11 now has the thinnest edge, 0.137 mm at 12.0 mm; the figure's 11.8 mm would give about 0.31 mm. The ray tallies quoted in the analysis were recorded with the first-authored rims and were not re-run. At 1.0x the outermost on-axis ray the diagram draws now ends at the L2 rim instead of at L4; it lies outside the stop-limited beam in both cases (the stop admits 10.81 mm on surface 3).

## 2026-10-08 — Integration: glass labels and metadata

- Glass. The eight coordinate-class labels ended "supplier unknown", and "unknown" is the resolver's unresolved marker, so none of the thirteen elements reached a catalog curve. L2, L3 and L7 are now labelled H-FK61 and L13 H-K9L (the CDGM rows the other Laowa models use), and the 717295, 923209, 904313 and 620363 labels read "supplier unconfirmed". Those eight elements trace on catalog curves; L1, L6, L9, L11 and L12 have no vendor row at their coordinates and stay Unmatched.
- `apd: "inferred"` added to L2, L3 and L7, the three positions Laowa's diagram marks extra-low dispersion.
- Mounts reviewed. Micro Four Thirds stays beside Sony FE, Nikon Z, Canon RF and L-Mount: Laowa added a Micro Four Thirds version in early 2026.
- `specs` restated in the catalog form (13 elements / 10 groups, design f = 87.06 mm, design F/2.9); subtitle and the analysis header use the catalog spellings of the patent number, inventor and applicant. Display name reviewed and left as authored.
