# First 200 hosted lens diagrams: patent and live-view audit

## Scope and ordering

- Branch: `ronbuening/LensShapeAudit260908`; baseline `b1011bf2ee51767865c49b6ef98cc64383437590`.
- User confirmed oldest means first added to the site. Snapshot: 681 visible diagrams on 2026-09-08.
- Order: original Git-derived `publishedAt` ascending, then lens key ascending for simultaneous additions. Dates are UTC; this is the site publication-history convention, not a claim about exact deployment times.
- Queue is frozen at the baseline; later changes must not reorder it. Hidden reference fixtures excluded.
- Primary evidence: ignored local `patents/` PDFs; missing publications may be retrieved from Google Patents, Espacenet, or national authorities as explicitly authorized. Never stage patents or scratch renders.
- Check the exact example, all prescription/asphere/glass rows, optical rims and dimensions, stop, focus/zoom endpoints and intermediate motion, slider labels, surfaced metadata, inspectors and analysis notes. Distinguish patent values, derived quantities, catalog proxies, estimates, and unknowns.
- Inspect production in a browser before changes and the local live app after changes. User revised the cadence on 2026-09-08: commit in batches of ten lenses, including individual audit logs and this record. Preserve the existing commits for lenses 1–2; the next commit completes lenses 3–10, followed by batches 11–20, 21–30, and so on. Record no-change findings within the batch.
- Run the validation gates at each batch boundary: surface and image-circle audits for the batch lenses; typecheck, format check, lint and tests; build for lens data/content changes; glass reports when glass changes. Use targeted geometry probes during source review when needed to resolve a proposed change. Complete live visual checks before committing each batch.

## Pause and resume handoff — 2026-09-09

**Paused at the user's request after lens 40. All first 40 lenses received source and production/local live-view review and changes; 160 remain unaudited. Resume at lens 41, not at an earlier historical checkpoint below.**

- Next: NIKKOR Z 14–24mm f/2.8 S, `src/lens-data/nikon/NikonZ1424f28S.data.ts`, source `patents/WO2021117563A1.pdf`. Next batch is 41–50 in the frozen queue. Do not reconstruct or re-sort publication dates after merging.
- Delivery commits: lens 1 `27cc6a21`, lens 2 `b7b1df00`, 3–10 `743644d1`, 11–20 `785c35a2`, 21–30 `dac3920e`; this checkpoint is committed under “Audit hosted lens diagrams 31–40 and record pause at 40”. Locate it by title with `git log --oneline --grep="31–40"`. The PR targets `main`; merge is a separate user action.
- Resume from the merged revision (or this branch if unmerged), inspect Git status and this frozen queue, then read lens 41's data/analysis/audit and original PDF. Existing per-lens `.audit.md` files preserve exact source pages, before/after decisions, tests and live observations; use those durable files, not temporary `/tmp` renders.
- Keep ten-lens commit boundaries, all surface/image-circle checks, typecheck, format, lint, full tests, glass reports and build. Inspect production and the corrected local UI for each lens, including all source zoom stations, focus keyframes, aperture endpoints, glass inspector, labels and movement chart.
- Production: `https://surfaceandstop.com/`; local Vite was running at `http://127.0.0.1:5175/`. Check whether it is still running before starting another server. Wait for hydration. Three-station zoom's middle source station is normalized zoom 0.5, not a focal-length ratio.
- Render exact original patent figures at 600 dpi; measure optical rims, excluding leaders, rays, brackets and mechanical features. `audit:patent-figure --rot90` corresponds to PIL rotate 270; crop coordinates follow rotation. Scanned tables require page inspection. Ignore PDFs and scratch renders in Git.
- Continue the lens-spec exclusion of sensor cover glass and filters, preserving supported equivalent rear air distance t/n. Optical compound-lens resin remains part of the lens. Do not invent thickness/index for an unpublished plate.
- Retain source/derived/inferred/unavailable distinctions. Catalog-compatible glass does not establish production supplier or APD. Missing finite-focus tables do not authorize invented travel. Published physical iris schedules use `zoomStopSemiDiameters`; inferred nominal-f-number schedules use `zoomApertureModel`, never both.
- Consolidated changelog added for 2026-09-09: “Reviewed and corrected the oldest 40 lens diagrams, prescriptions, and movements”. Earlier notes deferring that entry are historical and now fulfilled.

### Open limitations to carry forward

Review completion does not mean unavailable source evidence or modeling limitations were resolved. Detailed evidence remains in each companion audit/analysis. Preserve especially: lens 4 missing equation; constrained rims in 21–22, 24–25, 27, 29–30 and 40; lens 26 table/summary discrepancy; lens 28 unresolved L31 material; lens 32 printed A6 and unknown plate details; lens 33 SA/figure contradictions; lens 34 missing asphere coefficients and inferred blank rear gap; lens 36 unpublished Abbe values; lens 37 source conjugate/BF and focus-dependent iris limits; lens 38 numerical zoom versus narrative conflict; unavailable finite-focus spacings in 38–40; lens 40 omitted flare-diaphragm clipping. Do not erase these qualifications because validation passes.

### Audit-test cleanup requested at delivery

Removed all 40 per-lens audit test files introduced by this branch, including the ten temporary files from batch 31–40. Their one-time checks passed before removal; per-lens audit notes preserve evidence and historical results, not a promise those temporary commands remain available. Existing catalog validation and surface/image-circle tools remain the repeatable audit gates.

Retained only necessary shared-behavior coverage in existing suites: aperture precision/shortcut behavior; nominal-f-number iris propagation through the viewer; published physical iris schedule preservation/interpolation and malformed-schedule rejection; zoom-dependent focus labels/comparison; updates to pre-existing fixtures affected by corrected prescriptions. Replaced the brittle fixed count in the existing focus-keyframe corpus test with a non-empty guard while retaining its all-keyframe interpolation checks. Policy is now explicit in `agent_docs/lens-patent-audit.md`, `agent_docs/patent-figure-sd-audit-procedure.md` and `agent_docs/architecture/testing.md`: do not retain audit tests unless absolutely necessary for a specific shared regression not covered elsewhere.

### Final batch validation

Final checks passed after audit-test removal: typecheck, format check, lint and all **2,776 tests in 298 files**. All ten batch 31–40 surface audits and all ten image-circle audits passed. Glass reports passed 15 tests in eight files with zero catalog mismatches. Build passed and prerendered 1,267 routes (1,043 sitemap URLs, 224 noindex); its existing non-failing chunk-size warning remains. Production/local live checks were completed for all 40 lenses. Historical “pending” statements and larger temporary-test counts below describe earlier stages and are superseded by this handoff and the frozen queue status.

## Frozen queue

| # | Lens key | First added (UTC) | Data file | Status |
|---|---|---|---|---|
| 1 | apo-lanthar-50f2 | 2026-03-18T18:51:44.000Z | `src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.ts` | Reviewed and committed; see source limitations |
| 2 | fujifilm-xf50-f1 | 2026-03-18T18:51:44.000Z | `src/lens-data/fujifilm/FujifilmXF50f1.data.ts` | Reviewed and committed; see source limitations |
| 3 | nokton-50f1 | 2026-03-18T18:51:44.000Z | `src/lens-data/voigtlander/VoigtlanderNokton50f1.data.ts` | Reviewed and committed; see source limitations |
| 4 | nikkor-z-50f18s | 2026-03-18T20:29:17.000Z | `src/lens-data/nikon/NikonNikkorZ50f18S.data.ts` | Reviewed and committed; see source limitations |
| 5 | nikkor-105-f14e-ed | 2026-03-19T03:19:39.000Z | `src/lens-data/nikon/NikonNikkor105f14E.data.ts` | Reviewed and committed; see source limitations |
| 6 | heliar-symmetric-1902 | 2026-03-19T15:57:01.000Z | `src/lens-data/voigtlander/VoigtlanderHeliar.data.ts` | Reviewed and committed; see source limitations |
| 7 | zeiss-tessar-144f55 | 2026-03-19T17:26:00.000Z | `src/lens-data/carl-zeiss-jena/ZeissTessar144f55.data.ts` | Reviewed and committed; see source limitations |
| 8 | bertele-sonnar-50f2-scaled | 2026-03-19T20:18:30.000Z | `src/lens-data/carl-zeiss-jena/ZeissJenaSonnar50f2.data.ts` | Reviewed and committed; see source limitations |
| 9 | sonnar-50f15 | 2026-03-19T21:05:31.000Z | `src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.ts` | Reviewed and committed; see source limitations |
| 10 | nikkor-24f28 | 2026-03-20T00:08:09.000Z | `src/lens-data/nikon/NikonNikkorAuto24f28.data.ts` | Reviewed and committed; see source limitations |
| 11 | nikkor-z50f12 | 2026-03-20T00:15:38.000Z | `src/lens-data/nikon/NikonNikkorZ50f12.data.ts` | Reviewed and committed; see source limitations |
| 12 | ricoh-gr1-28f28 | 2026-03-20T17:28:09.000Z | `src/lens-data/ricoh/RicohGR28f28.data.ts` | Reviewed and committed; see source limitations |
| 13 | ricoh-gr3-28f28 | 2026-03-20T18:45:40.000Z | `src/lens-data/ricoh/RicohGR328f28.data.ts` | Reviewed and committed; see source limitations |
| 14 | ricoh-gr4-28f28 | 2026-03-20T18:58:35.000Z | `src/lens-data/ricoh/RicohGR428f28.data.ts` | Reviewed and committed; see source limitations |
| 15 | nikkor-z-70-200f28 | 2026-03-21T01:23:07.000Z | `src/lens-data/nikon/NikonNikkorZ70200f28.data.ts` | Reviewed and committed; see source limitations |
| 16 | nikkor-z-24-70-f28 | 2026-03-23T02:11:54.000Z | `src/lens-data/nikon/NikonZ2470f28.data.ts` | Reviewed and committed; see source limitations |
| 17 | nikon-z-mc-105f28 | 2026-03-23T02:29:12.000Z | `src/lens-data/nikon/NikonZ105f28.data.ts` | Reviewed and committed; see source limitations |
| 18 | nikon-z-135f18-plena | 2026-03-23T03:27:14.000Z | `src/lens-data/nikon/NikonZ135f18.data.ts` | Reviewed and committed; see source limitations |
| 19 | fujifilm-xf80-f28-macro | 2026-03-23T04:13:56.000Z | `src/lens-data/fujifilm/FujifilmXF80f28.data.ts` | Reviewed and committed; see source limitations |
| 20 | nikon-z-26f28 | 2026-03-23T04:13:56.000Z | `src/lens-data/nikon/NikonZ26f28.data.ts` | Reviewed and committed; see source limitations |
| 21 | nikon-micro-60f28g | 2026-03-23T16:37:23.000Z | `src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts` | Reviewed and committed; see source limitations |
| 22 | nikkor-85f14g | 2026-03-24T11:40:43.000Z | `src/lens-data/nikon/NikonNikkor85f14G.data.ts` | Reviewed and committed; see source limitations |
| 23 | nikkor-af-s-58f14g | 2026-03-24T14:53:42.000Z | `src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts` | Reviewed and committed; see source limitations |
| 24 | nikkor-85f14d | 2026-03-25T00:15:56.000Z | `src/lens-data/nikon/Nikon85f14D.data.ts` | Reviewed and committed; see source limitations |
| 25 | nikkor-85f14-ais | 2026-03-25T00:22:32.000Z | `src/lens-data/nikon/Nikon85f14AIS.data.ts` | Reviewed and committed; see source limitations |
| 26 | nikkor-z-85f18s | 2026-03-25T00:26:08.000Z | `src/lens-data/nikon/NikonZ85f18S.data.ts` | Reviewed and committed; see source limitations |
| 27 | nikon-afs-28f14e | 2026-03-25T22:50:59.000Z | `src/lens-data/nikon/NikonAFS28f14E.data.ts` | Reviewed and committed; see source limitations |
| 28 | nikkor-z-28f28 | 2026-03-25T23:53:37.000Z | `src/lens-data/nikon/NikonZ28f28.data.ts` | Reviewed and committed; see source limitations |
| 29 | nikkor-28f14d | 2026-03-26T00:25:20.000Z | `src/lens-data/nikon/NikonAF28f14D.data.ts` | Reviewed and committed; see source limitations |
| 30 | nikon-z-58f095-noct | 2026-03-26T03:35:48.000Z | `src/lens-data/nikon/NikonZ58f095SNoct.data.ts` | Reviewed and committed; see source limitations |
| 31 | ultron-50f2 | 2026-03-26T03:46:55.000Z | `src/lens-data/voigtlander/VoigtlanderUltron50f2.data.ts` | Reviewed and committed; see source limitations |
| 32 | ultron-28f2-asph | 2026-03-26T11:21:39.000Z | `src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts` | Reviewed and committed; see source limitations |
| 33 | canon-rf100f28-macro | 2026-03-26T20:02:38.000Z | `src/lens-data/canon/CanonRF100f28.data.ts` | Reviewed and committed; see source limitations |
| 34 | ricoh-gr3x-26f28 | 2026-03-26T20:19:44.000Z | `src/lens-data/ricoh/RicohGR3x.data.ts` | Reviewed and committed; see source limitations |
| 35 | canon-rf-135f18 | 2026-03-26T21:10:25.000Z | `src/lens-data/canon/CanonRF135f18.data.ts` | Reviewed and committed; see source limitations |
| 36 | nikkor-z-100-400-f4556 | 2026-03-27T00:35:07.000Z | `src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts` | Reviewed and committed; see source limitations |
| 37 | nikon-afs-105f28-vr-micro | 2026-03-27T19:01:36.000Z | `src/lens-data/nikon/NikonAFS105f28G.data.ts` | Reviewed and committed; see source limitations |
| 38 | canon-rf-24-70-f28 | 2026-03-27T19:19:01.000Z | `src/lens-data/canon/CanonRF2470f28.data.ts` | Reviewed and committed; see source limitations |
| 39 | canon-rf-70-200-f28 | 2026-03-27T19:19:01.000Z | `src/lens-data/canon/CanonRF70200f28.data.ts` | Reviewed and committed; see source limitations |
| 40 | canon-rf-15-35-f28 | 2026-03-30T13:48:11.000Z | `src/lens-data/canon/CanonRF1535f28.data.ts` | Reviewed and committed; see source limitations |
| 41 | nikon-z-14-24f28-s | 2026-03-30T13:48:11.000Z | `src/lens-data/nikon/NikonZ1424f28S.data.ts` | Pending |
| 42 | nikkor-z-35f18s | 2026-03-31T14:33:21.000Z | `src/lens-data/nikon/NikonZ35f18S.data.ts` | Pending |
| 43 | nikon-5cm-f11 | 2026-03-31T14:33:21.000Z | `src/lens-data/nikon/NikonN5cmf11.data.ts` | Pending |
| 44 | canon-fdn-50f12 | 2026-04-01T14:02:12.000Z | `src/lens-data/canon/CanonFDn50f12.data.ts` | Pending |
| 45 | canon-fd-35-f2 | 2026-04-07T20:21:30.000Z | `src/lens-data/canon/CanonFD35mmf2.data.ts` | Pending |
| 46 | nikon-ai-nikkor-135f2 | 2026-04-07T20:21:30.000Z | `src/lens-data/nikon/NikonAI135mmf2.data.ts` | Pending |
| 47 | nikon-ai-nikkor-135f28 | 2026-04-07T20:21:30.000Z | `src/lens-data/nikon/NikonAI135mmf28.data.ts` | Pending |
| 48 | vivitar-series1-200f3 | 2026-04-07T20:21:30.000Z | `src/lens-data/vivitar/VivitarSeries1200mmf3.data.ts` | Pending |
| 49 | fujifilm-xf90f2 | 2026-04-08T12:02:16.000Z | `src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts` | Pending |
| 50 | fujinon-xf56f12r | 2026-04-08T12:02:16.000Z | `src/lens-data/fujifilm/FujifilmXF56mmf12.data.ts` | Pending |
| 51 | vivitar-s1-35-85-f28 | 2026-04-08T12:02:16.000Z | `src/lens-data/vivitar/VivitarSeries13585mmf28.data.ts` | Pending |
| 52 | leica-apo-summicron-43f2 | 2026-04-09T11:05:59.000Z | `src/lens-data/leica/LeicaAPO43mmf2.data.ts` | Pending |
| 53 | leica-apo-summicron-m-35f2 | 2026-04-09T11:05:59.000Z | `src/lens-data/leica/LeicaAPO35mmf2.data.ts` | Pending |
| 54 | leica-elcan-50f2 | 2026-04-09T11:05:59.000Z | `src/lens-data/leica/LeicaElcan50mmf2.data.ts` | Pending |
| 55 | leica-summicron-m-50f2-v5 | 2026-04-09T11:05:59.000Z | `src/lens-data/leica/LeicaSummicronV550mmf2.data.ts` | Pending |
| 56 | leica-summilux-28f17 | 2026-04-09T11:05:59.000Z | `src/lens-data/leica/Leica28mmf17.data.ts` | Pending |
| 57 | nikkor-n-28f2 | 2026-04-10T04:37:04.000Z | `src/lens-data/nikon/NikonNikkorN28mmf2.data.ts` | Pending |
| 58 | nikon-28ti-28f28 | 2026-04-10T04:37:04.000Z | `src/lens-data/nikon/Nikon28Ti28mmf28.data.ts` | Pending |
| 59 | voigtlander-nokton-x-50f12 | 2026-04-10T04:37:04.000Z | `src/lens-data/voigtlander/VoigtlanderNoktonX50mmf12.data.ts` | Pending |
| 60 | canon-serenar-28f35 | 2026-04-10T13:33:16.000Z | `src/lens-data/canon/CanonSerenar28mmf35.data.ts` | Pending |
| 61 | canon-serenar-35f32 | 2026-04-10T13:33:16.000Z | `src/lens-data/canon/CanonSerenar35mmf32.data.ts` | Pending |
| 62 | canon-serenar-50f18 | 2026-04-10T13:33:16.000Z | `src/lens-data/canon/CanonSerenar50mmf18.data.ts` | Pending |
| 63 | canon-serenar-85f15 | 2026-04-10T13:33:16.000Z | `src/lens-data/canon/CanonSerenar85mmf15.data.ts` | Pending |
| 64 | nikkor-afs-120-300f28e | 2026-04-13T11:10:23.000Z | `src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts` | Pending |
| 65 | nikkor-afs-14-24f28 | 2026-04-13T11:10:23.000Z | `src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts` | Pending |
| 66 | nikkor-afs-16-35f4-vr | 2026-04-13T11:10:23.000Z | `src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.ts` | Pending |
| 67 | nikkor-afs-200-500f56e | 2026-04-13T11:10:23.000Z | `src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts` | Pending |
| 68 | nikkor-z-14-30f4s | 2026-04-14T14:07:42.000Z | `src/lens-data/nikon/NikonNikkorZ1430mmf4S.data.ts` | Pending |
| 69 | nikkor-z-24-200-f4-63-vr | 2026-04-14T14:07:42.000Z | `src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts` | Pending |
| 70 | nikon-z-24-70f4s | 2026-04-14T14:07:42.000Z | `src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts` | Pending |
| 71 | nikkor-z-24-120f4 | 2026-04-15T21:10:08.000Z | `src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts` | Pending |
| 72 | canon-rf-28-70-f2 | 2026-04-16T00:47:47.000Z | `src/lens-data/canon/CanonRF2870mmf2L.data.ts` | Pending |
| 73 | canon-rf-28-70-f28-is-stm | 2026-04-16T00:47:47.000Z | `src/lens-data/canon/CanonRF2870mmf28.data.ts` | Pending |
| 74 | canon-rf24-240-f4-63 | 2026-04-16T00:47:47.000Z | `src/lens-data/canon/CanonRF24240mmf463.data.ts` | Pending |
| 75 | fuji-xf-16-55-f28 | 2026-04-16T22:09:51.000Z | `src/lens-data/fujifilm/FujifilmXF1655mmf28R.data.ts` | Pending |
| 76 | fuji-xf-50140mm-f28 | 2026-04-16T22:09:51.000Z | `src/lens-data/fujifilm/FujifilmXF50140mmf28R.data.ts` | Pending |
| 77 | fujifilm-xf-16-80-f4 | 2026-04-16T22:09:51.000Z | `src/lens-data/fujifilm/FujifilmXF1680mmf4.data.ts` | Pending |
| 78 | fujifilm-xf-200-f2 | 2026-04-16T22:09:51.000Z | `src/lens-data/fujifilm/FujifilmXF200mmf2R.data.ts` | Pending |
| 79 | canon-rf-24-50-f45-63 | 2026-04-17T12:45:01.000Z | `src/lens-data/canon/CanonRF2450mmf463.data.ts` | Pending |
| 80 | nikkor-z-24-50-f4-63 | 2026-04-17T12:45:01.000Z | `src/lens-data/nikon/NikonNikkorZ2450mmf463.data.ts` | Pending |
| 81 | nikon-l35af-35f28 | 2026-04-17T12:45:01.000Z | `src/lens-data/nikon/NikonL35AF35mmf28.data.ts` | Pending |
| 82 | nikon-nikkor-z-35f12s | 2026-04-17T12:45:01.000Z | `src/lens-data/nikon/NikonNikkorZ35mmf12S.data.ts` | Pending |
| 83 | elmarit-r-28f28 | 2026-04-18T23:59:18.000Z | `src/lens-data/leica/LeicaElmarit28mmf28.data.ts` | Pending |
| 84 | leica-elmarit-90f28 | 2026-04-18T23:59:18.000Z | `src/lens-data/leica/LeicaElmarit90mmf28.data.ts` | Pending |
| 85 | fujifilm-xf60-f24-r-macro | 2026-04-19T04:13:00.000Z | `src/lens-data/fujifilm/FujifilmXF60mmf24R.data.ts` | Pending |
| 86 | fujifilm-xf35-f14-r | 2026-04-19T04:22:20.000Z | `src/lens-data/fujifilm/FujifilmXF35mmf14R.data.ts` | Pending |
| 87 | canon-ef-50f10l | 2026-04-20T12:47:42.000Z | `src/lens-data/canon/CanonEF50mmf1L.data.ts` | Pending |
| 88 | canon-rf-85f2-macro | 2026-04-20T12:47:42.000Z | `src/lens-data/canon/CanonRF85mmf2Macro.data.ts` | Pending |
| 89 | canon-rf-24-105-f4-l | 2026-04-21T11:45:28.000Z | `src/lens-data/canon/CanonRF24105mmf4L.data.ts` | Pending |
| 90 | nikkor-z-40f2 | 2026-04-21T11:45:28.000Z | `src/lens-data/nikon/NikonNikkorZ40mmf2.data.ts` | Pending |
| 91 | ricoh-gr-18p3-f2p8 | 2026-04-21T11:45:28.000Z | `src/lens-data/ricoh/RicohGR218mmf28.data.ts` | Pending |
| 92 | ricoh-gxr-a12-18f25 | 2026-04-21T11:45:28.000Z | `src/lens-data/ricoh/RicohGXRA1218mmf25.data.ts` | Pending |
| 93 | canon-rf-50-f12-l | 2026-04-22T14:48:34.000Z | `src/lens-data/canon/CanonRF50mmf12L.data.ts` | Pending |
| 94 | canon-rf-85f12l | 2026-04-22T14:48:34.000Z | `src/lens-data/canon/CanonRF85mmf12L.data.ts` | Pending |
| 95 | voigtlander-nokton-35-f12 | 2026-04-22T14:48:34.000Z | `src/lens-data/voigtlander/VoigtlanderNokton35mmf12.data.ts` | Pending |
| 96 | canon-rf24-105f28z | 2026-04-23T11:45:28.000Z | `src/lens-data/canon/CanonRF24105mmf28Z.data.ts` | Pending |
| 97 | zeiss-biogon-21-f45 | 2026-04-23T11:45:28.000Z | `src/lens-data/carl-zeiss-oberkochen/ZeissBiogon21mmf45.data.ts` | Pending |
| 98 | zeiss-distagon-35f14 | 2026-04-23T11:45:28.000Z | `src/lens-data/carl-zeiss-oberkochen/ZeissDistagon35mmf14.data.ts` | Pending |
| 99 | nikkor-afs-24-70-f28e-vr | 2026-04-23T15:49:22.000Z | `src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts` | Pending |
| 100 | nikon-afs-70-200-f28e-fl | 2026-04-23T15:49:22.000Z | `src/lens-data/nikon/NikonNikkorAFS70200mmf28E.data.ts` | Pending |
| 101 | nikon-afs-80-400-f45-56g | 2026-04-23T15:49:22.000Z | `src/lens-data/nikon/NikonNikkorAFS80400mmf4556G.data.ts` | Pending |
| 102 | zeiss-hologon-15f8 | 2026-04-24T11:42:52.000Z | `src/lens-data/carl-zeiss-oberkochen/ZeissHologon15mmf8.data.ts` | Pending |
| 103 | olympus-zuiko-auto-s-50f12 | 2026-04-24T11:44:28.000Z | `src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts` | Pending |
| 104 | olympus-zuiko-auto-s-50f14 | 2026-04-24T11:44:28.000Z | `src/lens-data/olympus/OlympusZuikoAutoS50mmf14.data.ts` | Pending |
| 105 | olympus-zuiko-auto-s-55-f12 | 2026-04-24T11:44:28.000Z | `src/lens-data/olympus/OlympusZuikoAutoS55mmf12.data.ts` | Pending |
| 106 | nikon-pc-e-nikkor-24-f35d-ed | 2026-04-25T18:06:05.000Z | `src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts` | Pending |
| 107 | nikon-pc-nikkor-19mm-f4e-ed | 2026-04-25T18:06:05.000Z | `src/lens-data/nikon/NikonNikkorPCE19mmf4E.data.ts` | Pending |
| 108 | nikon-pce-micro-nikkor-45f28d | 2026-04-25T18:06:05.000Z | `src/lens-data/nikon/NikonMicroNikkorPCE45mmf28D.data.ts` | Pending |
| 109 | carl-zeiss-contarex-planar-55f14 | 2026-04-26T18:23:50.000Z | `src/lens-data/carl-zeiss-oberkochen/CarlZeissContarexPlanar55mmf14.data.ts` | Pending |
| 110 | carl-zeiss-jena-pancolar-50f2 | 2026-04-26T18:23:50.000Z | `src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts` | Pending |
| 111 | olympus-zuiko-85mm-f2 | 2026-04-26T18:23:50.000Z | `src/lens-data/olympus/OlympusZuiko85mmf2.data.ts` | Pending |
| 112 | zeiss-planar-t-50f14 | 2026-04-26T18:23:50.000Z | `src/lens-data/carl-zeiss-oberkochen/CarlZeissPlanarT50mmf14.data.ts` | Pending |
| 113 | nikkor-s-auto-50mm-f14 | 2026-04-27T03:27:34.000Z | `src/lens-data/nikon/NikonNikkorSAuto50mmf14.data.ts` | Pending |
| 114 | olympus-zuiko-auto-macro-50f2 | 2026-04-27T03:27:34.000Z | `src/lens-data/olympus/OlympusZuikoAutoMacro50mmf2.data.ts` | Pending |
| 115 | olympus-zuiko-auto-macro-90f2 | 2026-04-27T03:27:34.000Z | `src/lens-data/olympus/OlympusZuikoAutoMacro90mmf2.data.ts` | Pending |
| 116 | olympus-zuiko-auto-w-21mm-f2 | 2026-04-27T03:27:34.000Z | `src/lens-data/olympus/OlympusZuikoAuto21mmf2.data.ts` | Pending |
| 117 | fujifilm-xf18f2r | 2026-04-28T03:41:32.000Z | `src/lens-data/fujifilm/FujifilmXF18mmf2.data.ts` | Pending |
| 118 | fujinon-xf-23mm-f14-r | 2026-04-28T03:41:32.000Z | `src/lens-data/fujifilm/FujifilmXF23mmf14.data.ts` | Pending |
| 119 | zeiss-olympia-sonnar-180f28-contarex | 2026-04-28T03:41:32.000Z | `src/lens-data/carl-zeiss-oberkochen/CarlZeissOlympiaSonnar180mmf28.data.ts` | Pending |
| 120 | zeiss-pro-tessar-35f32 | 2026-04-28T03:41:32.000Z | `src/lens-data/carl-zeiss-oberkochen/CarlZeissProTessar35mmf32.data.ts` | Pending |
| 121 | carl-zeiss-tessar-50f35 | 2026-04-29T03:16:55.000Z | `src/lens-data/carl-zeiss-oberkochen/CarlZeissTessar50mmf35.data.ts` | Pending |
| 122 | czj-tessar-50-f28 | 2026-04-29T03:16:55.000Z | `src/lens-data/carl-zeiss-jena/CarlZeissJenaTessar50mmf28.data.ts` | Pending |
| 123 | sony-fe-90mm-f2p8-macro | 2026-04-29T03:16:55.000Z | `src/lens-data/sony/SonyFE90mmf28.data.ts` | Pending |
| 124 | canon-fd-50f1p2-l | 2026-04-30T11:35:21.000Z | `src/lens-data/canon/CanonFD50mmf12L.data.ts` | Pending |
| 125 | nikon-35ti-35f28 | 2026-04-30T11:35:21.000Z | `src/lens-data/nikon/Nikon35Ti35mmf28.data.ts` | Pending |
| 126 | sigma-dp2x-24mmf28 | 2026-04-30T11:35:21.000Z | `src/lens-data/sigma/SigmaDP2X24mmf28.data.ts` | Pending |
| 127 | sigma-dp3m-50f28 | 2026-04-30T11:35:21.000Z | `src/lens-data/sigma/SigmaDP3M50mmf28.data.ts` | Pending |
| 128 | sigma-35-f14-dgdn-art | 2026-05-01T20:54:13.000Z | `src/lens-data/sigma/SigmaDGDNA35mmf14.data.ts` | Pending |
| 129 | sigma-art-85mm-f14-dgdn | 2026-05-01T20:54:13.000Z | `src/lens-data/sigma/SigmaDGDNA85mmf14.data.ts` | Pending |
| 130 | sony-fe-135-f18-gm | 2026-05-02T18:56:22.000Z | `src/lens-data/sony/SonyFE135mmf18GM.data.ts` | Pending |
| 131 | sony-fe-85-f14-gm-ii | 2026-05-02T18:56:22.000Z | `src/lens-data/sony/SonyFE85mmf14GMII.data.ts` | Pending |
| 132 | sonnar-e-24f18-za | 2026-05-03T23:49:07.000Z | `src/lens-data/sony/SonyFE24mmf18ZA.data.ts` | Pending |
| 133 | sony-sonnar-fe-35-f28-za | 2026-05-03T23:49:07.000Z | `src/lens-data/sony/SonyFE35mmf28ZA.data.ts` | Pending |
| 134 | sony-sonnar-fe-55f18-za | 2026-05-03T23:49:07.000Z | `src/lens-data/sony/SonyFE55mmf18ZA.data.ts` | Pending |
| 135 | sigma-50f14-dgdn-art | 2026-05-04T03:30:45.000Z | `src/lens-data/sigma/SigmaDGDNArt50mmf14.data.ts` | Pending |
| 136 | sigma-dp2m-30f28 | 2026-05-04T03:30:45.000Z | `src/lens-data/sigma/SigmaDp2M30mmf28.data.ts` | Pending |
| 137 | vivitar-s1-70-210-f28-4 | 2026-05-04T03:30:45.000Z | `src/lens-data/vivitar/VivitarSeries170210mmf284.data.ts` | Pending |
| 138 | panasonic-lumix-s-35-f18 | 2026-05-04T13:42:06.000Z | `src/lens-data/panasonic/PanasonicS35mmf18.data.ts` | Pending |
| 139 | panasonic-lumix-s-pro-50-f14 | 2026-05-04T13:42:06.000Z | `src/lens-data/panasonic/PanasonicSPro50mmf14.data.ts` | Pending |
| 140 | pentax-fa-31-f18-al-ltd | 2026-05-04T13:42:06.000Z | `src/lens-data/pentax/PentaxFA31mmf18ALLtd.data.ts` | Pending |
| 141 | canon-ef-40-f28-stm | 2026-05-05T04:05:34.000Z | `src/lens-data/canon/CanonEF40mmf28.data.ts` | Pending |
| 142 | minolta-md-rokkor-45f2 | 2026-05-05T04:05:34.000Z | `src/lens-data/minolta/MinoltaRokkor45mmf2MD.data.ts` | Pending |
| 143 | minolta-md-rokkor-50f14 | 2026-05-05T04:05:34.000Z | `src/lens-data/minolta/MinoltaRokkor50mmf14MD.data.ts` | Pending |
| 144 | varisoft-rokkor-85f28 | 2026-05-05T04:05:34.000Z | `src/lens-data/minolta/MinoltaVarisoft85mmf28.data.ts` | Pending |
| 145 | sigma-art-40-f14 | 2026-05-06T13:23:00.000Z | `src/lens-data/sigma/SigmaArt40mmf14.data.ts` | Pending |
| 146 | voigtlander-apo-lanthar-180-f4 | 2026-05-06T13:23:00.000Z | `src/lens-data/voigtlander/VoigtlanderApoLanthar180mmf4.data.ts` | Pending |
| 147 | voigtlander-macro-apo-lanthar-125-f25 | 2026-05-06T13:23:00.000Z | `src/lens-data/voigtlander/VoigtlanderMacroApoLanthar125mmf25.data.ts` | Pending |
| 148 | pentax-da-16-50-f28 | 2026-05-06T17:37:40.000Z | `src/lens-data/pentax/PentaxDA1650mmf28.data.ts` | Pending |
| 149 | pentax-da-50-135-f28 | 2026-05-06T17:37:40.000Z | `src/lens-data/pentax/PentaxDA50135mmf28.data.ts` | Pending |
| 150 | pentax-f-85-f28-soft | 2026-05-06T17:37:40.000Z | `src/lens-data/pentax/PentaxF85mmf28Soft.data.ts` | Pending |
| 151 | lumix-s-20-60-f35-56 | 2026-05-07T04:18:41.000Z | `src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts` | Pending |
| 152 | pentax-110-24f28 | 2026-05-07T04:18:41.000Z | `src/lens-data/pentax/Pentax11024mmf28.data.ts` | Pending |
| 153 | pentax110-50f28 | 2026-05-07T04:18:41.000Z | `src/lens-data/pentax/Pentax11050mmf28.data.ts` | Pending |
| 154 | fujifilm-gf-110mm-f2 | 2026-05-08T03:09:36.000Z | `src/lens-data/fujifilm/FujifilmGF110mmf2RLM.data.ts` | Pending |
| 155 | fujifilm-gf80-f17 | 2026-05-08T03:09:36.000Z | `src/lens-data/fujifilm/FujifilmGF80mmf17R.data.ts` | Pending |
| 156 | gf-120f4-macro | 2026-05-08T03:09:36.000Z | `src/lens-data/fujifilm/FujifilmGF120mmf4RLM.data.ts` | Pending |
| 157 | sony-fe-20-70mm-f4-g | 2026-05-08T03:09:36.000Z | `src/lens-data/sony/SonyFE2070mmf4G.data.ts` | Pending |
| 158 | sony-planar-fe-50f14-za | 2026-05-08T03:09:36.000Z | `src/lens-data/sony/SonyPlanarFE50mmf14ZA.data.ts` | Pending |
| 159 | sony-planar-t-50f14-za | 2026-05-08T03:09:36.000Z | `src/lens-data/sony/SonyPlanarT50mmf14ZA.data.ts` | Pending |
| 160 | hasselblad-hc-150-f32 | 2026-05-09T03:35:00.000Z | `src/lens-data/hasselblad/HasselbladHC150mmf32.data.ts` | Pending |
| 161 | hasselblad-hc-80-f28 | 2026-05-09T03:35:00.000Z | `src/lens-data/hasselblad/HasselbladHC80mmf28.data.ts` | Pending |
| 162 | hasselblad-hc-macro-4-120 | 2026-05-09T03:35:00.000Z | `src/lens-data/hasselblad/HasselbladHC120mmf4Macro.data.ts` | Pending |
| 163 | hasselblad-xcd-120-f35-macro | 2026-05-09T03:35:00.000Z | `src/lens-data/hasselblad/HasselbladXCD120mmf35Macro.data.ts` | Pending |
| 164 | hasselblad-xcd-65-f28 | 2026-05-09T03:35:00.000Z | `src/lens-data/hasselblad/HasselbladXCD65mmf28.data.ts` | Pending |
| 165 | hasselblad-xcd-90-f25-v | 2026-05-09T03:35:00.000Z | `src/lens-data/hasselblad/HasselbladXCD90mmf25V.data.ts` | Pending |
| 166 | panasonic-leica-dg-15f17 | 2026-05-10T15:10:24.000Z | `src/lens-data/panasonic/PanasonicLeicaDG15mmf17.data.ts` | Pending |
| 167 | panasonic-leica-dg-25f14 | 2026-05-10T15:10:24.000Z | `src/lens-data/panasonic/PanasonicLeicaDG25mmf14.data.ts` | Pending |
| 168 | panasonic-leica-dg-9f17 | 2026-05-10T15:10:24.000Z | `src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts` | Pending |
| 169 | leica-apo-macro-elmarit-tl-60-f28 | 2026-05-10T16:13:28.000Z | `src/lens-data/leica/LeicaAPOMacroElmaritTL60mmf28.data.ts` | Pending |
| 170 | olympus-mzuiko-12-40-f28-pro | 2026-05-10T16:13:28.000Z | `src/lens-data/olympus/OlympusMZuiko1240mmf28PRO.data.ts` | Pending |
| 171 | olympus-mzuiko-40-150-f28-pro | 2026-05-10T16:13:28.000Z | `src/lens-data/olympus/OlympusMZuiko40150mmf28PRO.data.ts` | Pending |
| 172 | hasselblad-hc-210-f4 | 2026-05-11T14:45:49.000Z | `src/lens-data/hasselblad/HasselbladHC210mmf4.data.ts` | Pending |
| 173 | hasselblad-hc-300-f4p5 | 2026-05-11T14:45:49.000Z | `src/lens-data/hasselblad/HasselbladHC300mmf45.data.ts` | Pending |
| 174 | hasselblad-hc-50-f35 | 2026-05-11T14:45:49.000Z | `src/lens-data/hasselblad/HasselbladHC50mmf4.data.ts` | Pending |
| 175 | leica-apo-vario-elmarit-sl-90-280-f28-4 | 2026-05-11T14:45:49.000Z | `src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts` | Pending |
| 176 | sigma-85f14-art | 2026-05-11T14:45:49.000Z | `src/lens-data/sigma/Sigma85mmf14Art.data.ts` | Pending |
| 177 | sigma-dp0-quattro-14-f4 | 2026-05-11T14:45:49.000Z | `src/lens-data/sigma/SigmaDp0Quattro14mmf4.data.ts` | Pending |
| 178 | nikon-af-p-70-300-f45-56e-ed-vr | 2026-05-12T03:00:56.000Z | `src/lens-data/nikon/NikonAFP70300mmf4556E.data.ts` | Pending |
| 179 | nikon-af-p-dx-10-20mm-f45-56g-vr | 2026-05-12T03:00:56.000Z | `src/lens-data/nikon/NikonAFPDX1020mmf4556G.data.ts` | Pending |
| 180 | nikon-afp-dx-70-300-f4563g | 2026-05-12T03:00:56.000Z | `src/lens-data/nikon/NikonAFPDX70300mmf4563G.data.ts` | Pending |
| 181 | nikon-z-dx-16-50-f3563-vr | 2026-05-12T03:00:56.000Z | `src/lens-data/nikon/NikonZDX1650mmf3563VR.data.ts` | Pending |
| 182 | nikon-z-dx-18-140-f35-63-vr | 2026-05-12T03:00:56.000Z | `src/lens-data/nikon/NikonZDX18140mmf3563VR.data.ts` | Pending |
| 183 | nikon-z-dx-50-250mm-f45-63-vr | 2026-05-12T03:00:56.000Z | `src/lens-data/nikon/NikonZDX50250mmf4564VR.data.ts` | Pending |
| 184 | canon-ef-m-32mm-f14-stm | 2026-05-13T04:16:25.000Z | `src/lens-data/canon/CanonEFM32mmf14STM.data.ts` | Pending |
| 185 | canon-efm-22mm-f2-stm | 2026-05-13T04:16:25.000Z | `src/lens-data/canon/CanonEFM22mmf2STM.data.ts` | Pending |
| 186 | canon-efm-28mm-f35-macro-is-stm | 2026-05-13T04:16:25.000Z | `src/lens-data/canon/CanonEFM28mmf34MacroISSTM.data.ts` | Pending |
| 187 | canon-efs-10-18-f4556-is-stm | 2026-05-13T04:16:25.000Z | `src/lens-data/canon/CanonEFS1018mmf4.data.ts` | Pending |
| 188 | canon-efs-17-55-f28-is | 2026-05-13T04:16:25.000Z | `src/lens-data/canon/CanonEFS1755mmf28IS.data.ts` | Pending |
| 189 | canon-efs-24-f28-stm | 2026-05-13T04:16:25.000Z | `src/lens-data/canon/CanonEFS24mmf28STM.data.ts` | Pending |
| 190 | minolta-af-100mm-f28-macro | 2026-05-14T13:23:27.000Z | `src/lens-data/minolta/MinoltaAF100mmf28Macro.data.ts` | Pending |
| 191 | minolta-af-35-105mm-f3-5-4-5-v2 | 2026-05-14T13:23:27.000Z | `src/lens-data/minolta/MinoltaAF35105mmf3545v2.data.ts` | Pending |
| 192 | minolta-af-70-200mm-f28-apo-g-d-ssm | 2026-05-14T13:23:27.000Z | `src/lens-data/minolta/MinoltaAF70200mmf28APO.data.ts` | Pending |
| 193 | laowa-12mm-f28-zero-d | 2026-05-15T12:05:49.000Z | `src/lens-data/laowa/Laowa12mmf28ZeroD.data.ts` | Pending |
| 194 | laowa-15mm-f2-zero-d | 2026-05-15T12:05:49.000Z | `src/lens-data/laowa/Laowa15mmf2ZeroD.data.ts` | Pending |
| 195 | laowa-24f14-probe | 2026-05-15T12:05:49.000Z | `src/lens-data/laowa/Laowa24mmf14Probe.data.ts` | Pending |
| 196 | laowa-58mm-f28-2x-macro-apo | 2026-05-15T12:05:49.000Z | `src/lens-data/laowa/Laowa58mmf28MacroAPO.data.ts` | Pending |
| 197 | laowa-65mm-f28-macro-apo | 2026-05-15T12:05:49.000Z | `src/lens-data/laowa/Laowa65mmf28MacroAPO.data.ts` | Pending |
| 198 | laowa-15f4-macro | 2026-05-15T12:50:20.000Z | `src/lens-data/laowa/Laowa15mmf4Macro.data.ts` | Pending |
| 199 | schneider-apo-symmar-100-f56 | 2026-05-16T03:07:17.000Z | `src/lens-data/schneider-kreuznach/SchneiderAPOSymmar100mmf56.data.ts` | Pending |
| 200 | schneider-super-angulon-75-f56 | 2026-05-16T03:07:17.000Z | `src/lens-data/schneider-kreuznach/SchneiderSuperAngulon75mmf56.data.ts` | Pending |

## Changed lenses

| # | Lens | Adjustments and locations | Verification resource |
|---|---|---|---|
| 1 | APO-LANTHAR 50mm f/2 | `VoigtlanderApoLanthar50f2.data.ts`: ASP19 A6 sign, rear SD 11→15 mm, close focus 0.37→0.45495 m, three movement groups, supplier-neutral glass/APD labels and S-LAH65V compatibility; companion analysis rewritten against evidence; `DiagramControls.tsx`: label wide-open EP explicitly | Local `patents/JP2021043376A.pdf`, Table 5 p.27, Fig.10 p.48, §§0092–0098; production and corrected local live viewer |

| 2 | Fujifilm XF 50mm f/1.0 | `FujifilmXF50f1.data.ts`: aspheric rims 10.7/9.9→13 mm, patent nominal aperture, air-equivalent rear gaps/reference distance, focus arrow/gap labels, all 12 partial-dispersion ratios, supplier-neutral glass labels; analysis and asphere tests synchronized; shared focus endpoint formatting | Local `patents/US20210231927A1.pdf`, Fig.7 p.8, Tables 9–12 p.80, §§0212–0213 p.79; live production/local views |

## Lens 1 verification

- Production and local browser inspection performed; infinity, midpoint, close focus, tracking rays, dimensions, movement chart, f/16 and pupil readout checked.
- Surface and image-circle audits passed. Patent figure and table rendered at 600 dpi.
- Three focused tests verify independent ASP19 departure, fixed-camera F36 assembly travel/object-distance convention, and no hidden rim trims.
- Glass reports: 15 tests passed; zero catalog mismatches, coverage 3/10→4/10.
- Final full gates passed: typecheck, formatting, lint, 2,768 tests / 299 files; build prerendered 1,267 routes. Final rerun after group/label edits also passed.
- New changelog entry deferred to completion of this audit batch, avoiding 200 per-lens entries. Add one consolidated UTC entry before final delivery.
- See the sibling `.audit.md` for exact before/after evidence and retained source limits.

## Follow-ups

- Historical first-batch checkpoint, superseded: current resume point is lens 41 in the handoff above.
- Lens 1 commit can be located with `git log --oneline --grep="audit APO-LANTHAR 50mm f/2"`.
- Local validation server: `http://127.0.0.1:5175/` (Vite); production: `https://surfaceandstop.com/`.
- Browser tables can initially show SSR-only content; wait for hydration before judging missing controls.

## Lens 2 verification

- Surface/image-circle audits passed; focused runtime dispersion, plate-equivalence, group motion, hidden-trim/asphere/control checks passed (39 tests).
- Full typecheck, format, lint passed; 2,771 tests / 300 files passed; build prerendered 1,267 routes. Glass reports passed (15 tests), no report diffs.
- Shared motion chart label clipping is visible with long authored group names; inspect this display limitation before final batch delivery.

## Shared display corrections in the first batch

- `LensGroupMovementOverlay.tsx`: label margin now expands with authored group-name length; live Sonnar f/2 chart rechecked and complete names fit without clipping or axis-title overlap. The XF50 stationary/focus labels were also rechecked live and fit.
- `DiagramControls.test.tsx`: added regression coverage for retaining patent aperture values f/1.03, f/1.45 and f/1.85. Focused tests passed; full batch gates running.

## Lenses 3–10 change ledger

| # | Lens | Adjustments and locations | Verification resource |
|---|---|---|---|
| 3 | Nokton 50mm f/1 | Data/analysis: rear and aspheric rims; inferred 0.45 m unit-focus travel 7.3949 mm; neutral glass and production/model distinctions | JP2023063766A |
| 4 | NIKKOR Z 50mm f/1.8 S | Data/analysis: restored thin aspheric layer; WO link and inventor spelling; merged dummy plane; air-equivalent sensor-filter omission; actual gap labels; G2 rims; f/1.85 display | WO2019220618A1; JP7131609B2 grant equation check |
| 5 | NIKKOR 105mm f/1.4E | Data/analysis: source f/1.45; 14 partial-dispersion ratios; neutral glass labels; S13/S14 rims 23.5/22.5 mm; verified imageward 12 mm G2 travel | WO2019116563A1 |
| 6 | Heliar | Data/analysis: historical index/dispersion distinctions; inferred unit travel 12.7177 mm for 1 m object-image distance; source glass-role correction | US716035 |
| 7 | Tessar 144mm f/5.5 | Data/analysis: first thickness 5.472→4.752 mm, first nd 1.6132→1.61132; computed EFL/BF and 2 m travel; front/rear rims; supplier-neutral labels | US721240 |
| 8 | Sonnar 50mm f/2 | Data/analysis: optical rims, 0.9 m unit-focus travel; removed copied catalog line indices and unsupported APD/historical glass identity | US1998704 |
| 9 | Sonnar 50mm f/1.5 | Data/analysis: 42° source field; BF35.2→22.0385 mm and 0.9 m focus travel; figure-derived rims; inferred stop repositioned to clear L4; neutral glass labels | US1975678 |
| 10 | NIKKOR-N 24mm f/2.8 | Data/analysis: exact source precision; two CRC movement groups; finite-conjugate travel with estimated 0.70 mm contraction; glass/blank Abbe-cell distinctions and rims | US3622227 |

### Batch RCA and retained limitations

- The initial full run had four failures. After the stop correction, an additional ghost-ray fixture that depended on the erroneous stop intersection was changed to deliberately close the iris; its clipping assertion remains. Corrected tests distinguish declared vs tracing field limits, use the independently solved 0.9 m travel, permit catalog d-line rounding, and test Petzval curvature independently of astigmatic best focus. The underlying optics were not changed to satisfy obsolete expectations.
- Sonnar f/1.5 intermediate rays failed with `noBracket` because the old inferred stop was behind the actual curved exit intersection. The 6.3/0.65 mm gap split clears the S6 rim without changing the patent 6.95 mm total. Quarter/half/three-quarter pupil rays now transmit; entrance-rim clipping remains represented. Added a regression for stop clearance and transmission.
- Heliar has no canonical image-format id and is skipped by the image-circle command. Applying that same conservative floor explicitly to the patent's 40 mm image semi-height gives no positive floor: all surfaces are at least 85.52 mm ahead of the image. This is a proxy check, not proof of corner performance.
- Z50 equation (A) remains absent in the inspected WO pages and JP7131609B2 grant pp11–12. Google Patents lists the grant as the JP family member; its PDF was retrieved into ignored patents/. The public analysis now states that κ=1→K=0 is a retained interpretation, not verified from a visible equation.
- The shared aperture shortcuts now include the actual current wide-open aperture and omit faster unreachable values (for example f/1 on the f/1.03 XF50 model). Added a click regression checking the 1.03 shortcut maps to the wide-open slider state.
- Consolidated public changelog entry remains due at final audit delivery, before merge; do not add an entry per lens or per batch.

- Final batch tests: 2,800 passed in 308 files. Typecheck, format check and lint passed; final ghost-test edit also passed focused formatting/lint. Build passed: 1,267 routes prerendered; sitemap and feeds generated. Sonnar stop revision passed surface/image-circle probes and repeated infinity/midpoint/close/f16 live checks (stop diameter now 18.67 mm wide open and 1.75 mm at f/16).

## Batch 11–20

All ten source and live-view reviews are complete. Individual `*.audit.md` files beside each lens contain the detailed source checks, rejected rim trials, derived values and browser states. Patents and scratch renders remain untracked reference material.

| # | Lens | Changes in data and companion analysis | Verification resource |
|---|---|---|---|
| 11 | NIKKOR Z 50mm f/1.2 S | Three conic conversions; restored A16; constrained figure rims; equivalent BF 12.566852 mm; source focus about 0.63026 m; f/1.23 and inferred glass labels | WO2021241230A1: equation p. 26, Table 1 pp. 28–31, Figure 1 p. 63 |
| 12 | Ricoh GR1 28mm f/2.8 | Rim proportions; equivalent BF 17.218034 mm; inferred 0.35 m unit travel 2.76229 mm; f/2.86 shortcut; glass provenance | US5760973: Figure 1 p. 2, equation p. 15, Example 1 p. 16 |
| 13 | Ricoh GR III | S2 A6 exponent; Figure 5 rims; documented source filter-order repair and equivalent BF; inferred 0.10 m unit focus; 18.28 mm and f/2.87 labels | US20190154946A1 Example 5 and Figures 5/23, independently checked in US10948683B2 |
| 14 | Ricoh GR IV | Figure 2 rims; equivalent omitted-plate gap; inferred 0.12 m front-focus station; f/2.89; corrected focus direction and conflicting source glass-name interpretations | JP2025069516A Example 2, Tables 5/6, Figure 2, equation paragraph 88, motion paragraph 35 |
| 15 | NIKKOR Z 70–200mm f/2.8 | Two conics; source station FNOs; near distance about 1 m; Takeru Uehara attribution; figure rims and all isolated focal lengths; glass provenance and source TL conflict | WO2020105104A1 |
| 16 | NIKKOR Z 24–70mm f/2.8 | Four conics; true 50 mm middle station and gaps; zoom-only BF; f/2.92; source-derived zoom focus endpoints and inferred physical iris schedule; rims, labels and glass provenance | WO2020136749A1 |
| 17 | NIKKOR Z MC 105mm f/2.8 | Source finite distances 0.376121/0.287563 m and keyframe; f/2.89; partial-dispersion normal-line conversion; all isolated powers; rims and glass qualifications | WO2022097401A1 |
| 18 | NIKKOR Z 135mm Plena | Conic; equivalent rear-filter spacing; inferred near distance 0.824554 m; rims, isolated powers, normal-line conversion, material claims and f/1.85 shortcut | WO2024147268A1: equation/Table 1 pp. 20–22, conditions pp. 56–57, Figure 1 p. 66 |
| 19 | Fujifilm XF80 macro | Missing equivalent cover-plate distance; f/2.88; inferred life-size conjugate; rims and isolated powers; glass/OIS provenance | US20180246292A1: Figure 1 p. 2, paragraphs 75–81 p. 39, Tables 1–4 p. 40 |
| 20 | NIKKOR Z26 | Four conics; restored S10 A16/A18; f/2.90; six air-separated components; rims and glass/resin provenance; inferred 0.20 m station | WO2023190222A1: paragraphs 195–210 pp. 33–34, Table 1 pp. 35–36, Figure 1 p. 63 |

### Shared corrections

- Runtime `FOPEN` now uses the minimum authored zoom FNO as its base, matching the existing aperture-state contract. Shortcut text and ARIA labels use the same precision formatter while preserving numerical targets.
- New optional `zoomCloseFocusM` represents source-derived near distances that vary with zoom. `closeFocusAtZoom` supplies control/header labels, breathing, optical summary, effective-aperture estimates and comparison focus mapping. Z24–70 endpoints are 0.844245/1.582032/2.095598 m, about 1:30 magnification, rather than a common 0.38 m product minimum. Intermediate states remain estimates.
- Z24–70 opts into `zoomApertureModel: "from-nominal-fno"`. The builder retains its exact-ray inferred station iris radii 8.6252316/11.1486926/12.4664564 mm. `wideOpenStopAtZoom` passes these to diagram blades, ray computation, conjugate helpers and prepared-state apertures. Other lenses retain existing iris behavior pending source review; this is an explicit reconstruction, not a patent-listed stop schedule.
- The first-order pupil readout is labeled “Est. wide-open EP.” Pupil aberration means this estimate need not equal EFL divided by nominal FNO. The iris regression instead checks exact-engine source-edge ray hits.
- Lens-data field validation and specification document these opt-in fields. Generated source readmes and glass reports accompany the batch.

### Retained limitations and follow-up

- GR III's printed rear filter order conflicts with its figure; the inferred repair is explicit. GR IV's two conflicting printed glass names are also retained as source conflicts with numerical coordinates authoritative.
- Z70–200's stated total length 199.88619 mm equals its first-to-last-glass span despite the source definition including BFD. The actual table sums to about 232.43316 mm including BF. No rescaling conceals this contradiction.
- Clearance-constrained rims and rejected drawing-edge trials are documented per lens. Semi-diameters are inferred, not patent-listed clear apertures.
- Omitted cover/filter plates use documented equivalent air distances and remain absent from lens surfaces. Their higher-order/chromatic effects are not represented. Z26's source resin layer belongs to composite lens L8 and remains modeled.
- Source finite-conjugate FNOs remain distinct from nominal aperture controls and calculated working-aperture estimates. Catalog coordinates do not establish production suppliers, branded ED/SR status or actuators.
- Lens 4's missing equation (A) source remains the earlier documented follow-up. Continue the frozen queue at lens 21 after this batch's checks and commit.

### Batch validation

All ten lenses passed source-specific regressions, surface/image-circle audits and production/local browser review. Final batch gates passed: TypeScript, Prettier, lint (no warnings), all 2,845 tests in 318 files, and build/prerender of 1,267 routes (1,043 sitemap URLs; 224 noindex routes). Glass reports passed 15 tests in eight files and contain zero catalog mismatches. The build retains its existing non-failing chunk-size warning.

The initial full run identified missing metadata blocks in the Z50 and GR1 notes; both were corrected. The glass report also caught two incompatible S-BAL41 labels introduced during this batch. Both now use inferred M-BACD12, with explicit compatible-resolver regressions. Final checks above include these corrections.

This revision is the validated 11–20 batch checkpoint. Changelog publication remains consolidated at the final audit milestone as recorded above. Next work follows the frozen queue at lens 21.

## Batch 21–30

Lens 21 (Micro-Nikkor 60G) is in progress against original local US7898744.pdf Example 2. Equation on p.21 uses source K in 1−K(h/r)²; both stored conics need the standard K=source−1 conversion. Table2 pp.22–23 preserves three macro stations. Independent source matrices give near distances0.2294494/0.1772020m and β−0.4999545/−0.9999785, rather than the current0.185m endpoint. Exact Figure3 p.4 rendered at600dpi. Public analysis, corrected data/rims and local UI still pending; do not count21 reviewed yet.

### Lens21 reviewed — Micro-Nikkor60G

Local US7898744 Example2/Figure3/Table2 verified and production/local UI checked. Corrected both source-conic conversions, D17 label, source-derived finite-focus labels/keyframe, aperture shortcut and unsupported glass/process/production claims; refined figure-supported rims. Four source tests plus surface/image-circle checks pass. L4/G4 figure-versus-clearance mismatch is explicitly queued in its audit log; conservative rims retained. No cover/filter surfaces in the source. Batch21–30 commit pending.

### Lens22 reviewed — AF-S Nikkor85G

Local US8767319 Example1/Figure1 verified. Source aperture1.45, field28.666° and near0.84537m replace rounded marketing values in numerical surfaces; stop motion, geometry and glass coordinates verified. Qualified catalog counterparts and revised unsupported analysis claims. Three regressions and surface/image-circle audits pass; production/local infinity, near and half-focus/f16 checked. Figure front rim conflicts with the source aperture's minimum pupil diameter, so working semi-diameters remain and the source discrepancy is queued for follow-up. BF already air-equivalent; no cover/filter added. Batch21–30 commit pending.

### Lens23 reviewed — 58mm design candidate

Original JP2013019993 Example2 checked. Correct source conics retained; numerical f58.0216/f1.45/field41.72 corrected, optical rims refined to the exact figure, candidate status surfaced, unsupported production/drive claims removed. Ldn now uses inferred J-LLF6; finite focus is explicitly reconstructed. Four regressions and surface/image-circle checks pass; production/local infinity/near/half/f16 verified. No cover/filter belongs to Example2. Batch21–30 gates/commit pending.

### Lens24 reviewed — 85mm D candidate

Original US5640277 Example2 checked: ten elements/nine components corrected, source aperture1.43 and near0.955706m applied, D18 internal gap relabeled, all isolated element powers recalculated and glass names qualified. Figure-derived rims refined; S12/S14 kept at15.8mm to avoid hidden stop-adjacent trimming (follow-up documented). Source contains no cover/filter. Three regressions, surface/image-circle and production/local live checks pass; batch21–30 gates/commit pending.

### Lens25 reviewed — AI-S85mm

Retrieved original US4396256 from Google Patents; verified Embodiment1 scaled85×, Figure1 and floating-focus text. Refined front/rear rims, recalculated isolated powers, qualified glasses and corrected moving-body annotations. Reconstructed extension now matches the assumed0.85 m endpoint while preserving the explicitly assumed2 mm floating differential. No cover/filter is present. Three regressions plus surface/image-circle and production/local infinity/near/midpoint/f16/motion-chart checks pass. Other drawing rims retain documented edge/clearance limitations. Batch21–30 gates/commit pending.

### Lens26 reviewed — Z85mm

Retrieved original JP2020173366A, verified Example3 and Figure3. Corrected omitted-plate equivalent spacing, figure rims, D13 label, f1.85 and isolated element powers; qualified catalog proxies and removed unsupported APD/production claims. Explicit source0.8m focus station retained; table/summary EFL and track contradictions documented. Three regressions plus surface/image-circle and production/local infinity/near/half/f16 checks pass. Batch21–30 gates/commit pending.

### Lens27 reviewed — AF-S28mm f1.4E

Original JP2017227799A Example1 and Figure1 verified. Retained all source surfaces/aspheres and compound resin; BF already air-equivalent. Corrected source near0.25001m, figure rims, isolated powers, f1.45 shortcut and neutral glass claims; preserved L24 source PgF via runtime-normal-line conversion. Resin exit retains documented figure/edge-thickness limit. Three regressions plus surface/image-circle and production/local infinity/near/half/f16 checks pass. Batch21–30 gates/commit pending.

### Lens28 reviewed — Z28mm

Original WO2022071249A1 Example2 verified, including scan-resolved OCR discrepancy; all aspheres retained. Corrected omitted-filter equivalent gap, optical rims, D17/f2.909 labels and isolated medium powers. Resin retained; incompatible L31 glass label replaced by unresolved source coordinate. Three regressions, surface/image-circle and production/local infinity/near/half/f16 checks pass. Batch21–30 gates/commit pending.

### Lens29 source review — AF28mm f1.4D; live check pending

US5315441 Embodiment1 Table1/equation and Figure1 verified. Corrected conic convention, figure rims with two documented constraints, inferred stop split, near39.7cm/source-f1.41 labels, shape labels, isolated powers and glass/process qualifications. No cover/filter rows. Three regressions and surface/image-circle checks pass. Production baseline inspected; local live review is pending because the Mac is locked. Not included in completed count.

### Lens30 in progress — Z58mm Noct

WO2019229849A1 Example1, original scanned table/equation pp.20–23 inspected. Found legacy filter rows29–30 that violate the lens specification; remove them with equivalent rear air14.5+1.6/1.5168+1=16.5548523206751mm (source rounded16.55). No live baseline yet: Mac locked. Filter omission, figure/material/motion source review and three regressions plus surface/image-circle checks now pass. Facing S3/S4 retain an explicit clearance limitation. Production/local live checks and batch gates/commit remain pending; not marked complete.

### Batch21–30 validation, before live completion

On 2026-09-08, full suite passed2877 tests in328 files. Typecheck passed after adding a numeric accumulator type to the58mm candidate's source-sag regression. Format check and lint passed. Glass report generation and its15 tests in8 files passed. Build prerendered1267 routes with1043 sitemap URLs and224 noindex exclusions; existing nonfatal chunk-size warning remains. Individual surface/image-circle checks passed for the ten lenses. Live verification of29–30 remains pending on the locked Mac, so the batch is not committed or counted complete. Generated reports and build-maintained line references accompany the eventual batch commit.

### Lens31 evidence preparation — Ultron50mm

Missing original US2627204.pdf retrieved from Google Patents (https://patentimages.storage.googleapis.com/b9/af/79/9003ea70ba704d/US2627204.pdf), kept ignored. ExampleII table p.6 and Figure3 p.2 inspected, figure rendered600dpi. Existing choice of ExampleII d2=.06395 over conflicting claim4=.08393 is source-grounded; source field55° differs from the hosted35mm-format46.8° crop label and needs explicit distinction. No source cover/filter. No production edits or completed status yet; browser baseline unavailable while Mac locked.


### Batch 21–30 live completion — 2026-09-09

Browser access restored. Lens 29 local infinity/near/midpoint/f16 and motion chart inspected: near40cm, D2=10.38, Stop–G3=7.55, D16=.85, BF=41.63mm; midpoint79cm, EFL29.04mm, f16 stop2.59mm. G1 fixed, three source moving groups visible, maximum travel3.88mm.

Lens 30 production baseline and local infinity/near/midpoint/f16/motion chart inspected: source aperture.98; near50cm, D22=21.29, EFL62.75mm; midpoint100cm, D22=11.98, EFL61.14mm, f16 stop2.93mm. G1/G2 move together18.61mm and GR stays fixed; excluded filter has no modeled surfaces. Both live reviews agree with source regressions and documented rim limitations.

All ten lenses now have source and live review. The preceding validation results remain applicable: no implementation changed after those checks; only audit completion records were appended. This batch commit includes the ten data/analysis/audit pairs, their ten regression files, generated glass reports and this record. Lens 31 has source preparation only.


### Lens31 reviewed — Ultron50mm

Source ExampleII and Figure3 verified; rounded prescription and approximate rims retained, disputed claim thickness explicitly rejected in favor of numerical example. Reconstructed1m focus extension corrected, source55° versus35mm crop distinguished, glass chemistry replaced by qualified compatible spectral proxies, isolated powers and missing image-format metadata corrected. Three regressions plus surface/image-circle and production/local infinity/near/midpoint/f16 checks pass. No cover/filter. Batch31–40 gates and commit pending.


### Lens32 reviewed — Ultron28mm, source limitations retained

Original application and retrieved grant Example1 checked. Retained numerical prescription/rims and source-listed FL; corrected subtitle, source-distance label and unsupported APD/material claims. Explicit limitations for malformed ASP18 A6, source/table EFL and near-distance disagreement, and unspecified omitted cover/filter path. Three regressions plus surface/image-circle and production/local infinity/near/midpoint/f22 checks pass. Batch31–40 gates/commit pending.

## Lens 33 — Canon RF100 macro, reviewed 2026-09-09

Source: ignored JP2021047297A.pdf, paragraphs51–52, Numerical Example1 pp10–11, Figure1 p17 at600dpi. All source R/d/nd/vd and individual focal lengths retained. Restored published half-diameters except explicit S17/S18 renderer clearance limits13.25mm. Source BF14.66mm already air-equivalent; no covers/filters. Initial aperture2.8→2.92; calculated closest distance0.26→0.254657653m; middle keyframe0.693003→0.678763516. Qualified glass counterparts, now FDS18/S-LAH96 for L11/L12, removed unsupported material/process/SA-role claims. Viewer explicitly represents normal SA setting. Source second0.5× SA schedule has a1mm gap-sum inconsistency; Figure1(C) conflicts with closest-focus numerical spacing. Neither is silently repaired.

Production baseline and local infinity/closest/intermediate0.68 focus inspected; f/32 stop2.81mm, motion chart25.33mm maximum travel and fixed groups confirmed. Three regression tests, surface validation, image-circle coverage and no-hidden-trim probes pass. Batch31–40 gates and commit pending.

## Lens 34 — Ricoh GR IIIx, reviewed 2026-09-09

US20220026670A1 original Table3 PDFp32 and Figure3 PDFp4 at600dpi. Corrected excluded-filter equivalent spacing BF16.478→16.0012818714mm; unlisted final0.70mm explicitly reconstructed. Near BF20.38→20.8564680966mm for assumed20cm unit-focus endpoint; initial aperture2.8→2.87. Retained all R/nd/vd/FLs and published coefficients; S2malformed-row radius repair and missing S12asphere remain explicit source limitations. L5unsupportedTaC6 label→compatibleJ-LASKH2; other glassnames patent-listed. RuntimePgFvalues correct; oldauditL2/L6typos corrected by supersedingentry. SDsunchangedwithinfiguretolerance; surface/imagecircle/nohiddenrimtrims and3regressiontests pass. Productionbaseline andlocal infinity/near/half-focus/f16/motionchartchecked:BF16.00/20.86/18.43mm,travel4.86mm,stop1.32mm. Batch31–40gatespending.

## Lens 35 — Canon RF135, reviewed 2026-09-09

US20230213745A1 scanned original: Numerical Example4 PDFp15; Figure7 PDFp8 at600dpi (priorauditFigure5wrong). Corrected excluded cover-plate equivalent path, BF12.63→14.4192305765mm, from12.63+1.5/1.51633+0.8. All otherR/d/nd/vd, calculatedFLsandSDsretained. SourceSDestimateswithinfiguretolerance; nohiddenrimtrim. Calculated nearconjugate0.699370427m, source18.21mm L7travelretained; sourceoverall/EFLroundedsummarydifferencesdocumented. Firstaperturebutton1.8→1.86. Removed5unsupportedAPDbadges; all glassnamesqualifiedcompatiblecounterparts,L11TAFD35. NoISlateraldisplacementsimulated. Source,productionbaseline,local∞/near/half/f16/motionchartcheckscomplete; EFL130.94/103.36/117.46mm,travel18.21mm,f16stop4.48mm. Three regressiontests andsurface/imagecirclepass; batch31–40gatespending.

## Lens 36 — Nikon Z100–400, reviewed 2026-09-09

JP2022092388A Table1 pp14–15, Figures1–2 p26 at600dpi. Removed filterelement26/source47–48; equivalentBF30.6748523207mm. All sourceR/d/nd/endpointarraysretained. D42labelBF→D42; near0.75→0.98m; nominal4.5/5.6→4.58/5.76; sourcezoomlabels. G6teletravelclaim0.4→30.999mm cumulative; retain±0.001mm sourcefocusgap-sumrounding. Allvdremaininferred; ED/SuperED/APD/supplier/chemistryclaimsremoved, compatiblelabelsqualified, L19/L25unresolved. Figure-backed SDcorrectionsS31–33=13.2,S34–35=13,S36–42=11.2mm; bracketcontamination/wrongrotationscreensrejected. Three regressiontests,surface/imagecircle,9-state nohiddenrimtrim pass. Productionbaseline pluslocal4endpointcombinations,midzoom/midfocus,f32andfocus/zoomchartsreviewed: EFL103.08/91.84wide,388.15/158.38tele; mid161.89; travel20.35focus/50.00zoom; stop4.60mm atf32midzoom. SourceFNO/imageheight/track/conjugatedifferencesdocumented. Batch31–40gatespending.

### Lens 37 — Nikon AF-S VR Micro-Nikkor 105mm f/2.8G

Verified original US7218457.pdf Example 3/Table 3 (PDF page 24), Figures 9A–9C (page 10 at 600 dpi). Restored the middle focus station, source-distance slider mapping and f/2.88 aperture label; corrected eleven air-separated groups and calculated isolated element focal lengths. Qualified glass counterparts and removed unsupported L8 dPgF/APD. All source prescription rows retained, including the air-only dummy reference; no cover glass/filter exists in this example. SDs retained after optical-rim review. Source BF/fixed-group contradiction, conjugate mismatch, unmodeled varying iris and centered-only VR are disclosed.

Production baseline and revised live infinity/near/0.78/half-focus states inspected. EFL 104.00/75.85/95.78/100.84 mm; f/32 stop diameter 2.36 mm; movement chart maximum 18.93 mm with opposing G2/G3 motion. Surface and image-circle audits pass, as do three focused tests and four-state hidden-rim diagnostics. Batch 31–40 gates and commit pending.

### Lens 38 — Canon RF 24–70mm f/2.8L

Original US20190278068A1.pdf Example 5 paragraph 0100/PDF page 23 and Figure 9/page 10 reviewed at 600 dpi. All 37 effective diameters restored as SD=diameter/2, including removal of the unnecessary S6 clamp. No filter/cover glass occurs. Source radii, thicknesses, indices, Abbe numbers, zoom gaps and five asphere coefficient sets retained. Corrected calculated isolated focal lengths, f/2.91 preset, compatible catalog names and unsupported APD/molding/chemistry claims. Disabled finite-focus model explicitly qualified; L6 focus changes D31/D33, not BF. Source L2 net imageward zoom displacement +0.36 mm contradicts its all-objectward narrative; table retained.

Source/live checks: production baseline, revised wide/tele/middle, f/16 and zoom motion chart inspected. EFL 24.72/67.88/44.86 mm, maximum group travel 28.77 mm, f/16 middle stop diameter 4.09 mm. Surface/image-circle and three focused tests pass without hidden rim trimming. Inferred iris schedule now uses source station f-numbers: radii 9.1042362/11.2573898/12.9670649 mm. The previous fixed iris did not reproduce the telephoto aperture.

Batch follow-through: lens 36 Z100–400 now also uses the explicitly inferred source-f-number iris schedule, radii 14.2310089/13.0969674 mm. Its aperture regression test updated and passes; live telephoto iris recheck passes: wide-open diameter 26.19 mm, near-focus f/32 diameter 4.71 mm.

### Lens 39 — Canon RF 70–200mm f/2.8L

Verified JP2021056407A.pdf Example 3/pages 15–16 and Figure 5/page 23 at 600 dpi. Source focus arrows identify G4 objectward and G6 imageward, correcting the former G6/G7 claim. Finite-focus gaps remain unavailable and control disabled. Corrected twelve air-separated components, isolated element focal lengths, qualified glass labels, unsupported APD/dPgF/molding/coating/motor claims, and the full source f-number schedule 2.89/2.89/2.91. Added explicitly inferred zoom iris radii 12.67084395/13.71135495/16.73950154 mm. No cover glass/filter; source air-only flare diaphragm retained. Existing SDs pass clean-rim figure comparison and surface/image-circle checks.

Production/revised live wide, middle and tele geometry, f/16, disabled focus and zoom chart checked: EFL 72.15/100.03/194.01 mm, maximum travel 58.45 mm, middle f/16 stop diameter 4.95 mm. Shortened spacing and group labels after detecting overflow/collisions in the live panel. Three focused tests pass. Full batch gates/commit pending.

### Lens 40 — Canon RF 15–35mm f/2.8L

Verified original US20200257181A1.pdf Example 1/pages 14–15, Figures 1A–1B/page 2 at 600 dpi and source equation. Restored A16 coefficients on S1/S3/S27; at published rims their contributions are +2.34136/−0.36070/−0.000160 mm, correcting the old negligible-error assertion. Source SDs restored except S3 18.10 versus published 18.225 for the renderer's 90% clearance policy. Source iris diameters 16.52/20.93/26.65 now drive the physical stop directly through validated zoomStopSemiDiameters. Source prescription, element focal lengths and remaining asphere coefficients retained. No filter/cover glass; omitted S21 flare clipping remains disclosed. Qualified glass and removed APD/coating/chemistry claims; focus disabled and source limitations surfaced. Added an SP annotation for the independently moving stop (the movement chart displays glass groups only).

Production/revised wide/middle/tele, f/22 and zoom chart reviewed. Live EFL 15.45/24.00/33.95 mm, wide/tele stop diameters exactly 16.52/26.65 mm, middle f/22 stop 2.77 mm, maximum glass-group travel 23.07 mm. Surface/image-circle and three focused tests pass, including schedule validation and A16 significance. Full batch 31–40 gates/commit pending.
