# Canon three-lens audit — September 8, 2026

## Scope and root-cause findings

Added the supplied EF 50mm f/1.2L USM, original EF 70–300mm f/4–5.6 IS USM, and original EF-S 18–55mm f/3.5–5.6 data/analysis pairs. Local patent PDFs remain untracked reference inputs.

The reported test failures were not reproducible in the supplied checkout: the initial full run passed 297 files / 2,757 tests. Initial typecheck, formatting, lint, and all three surface/image-circle audits also passed. No test assertion or optical-engine tolerance was relaxed. The new batch regression protects recognized Japanese patent identifiers, compatible glass coverage, and hidden render trims.

Glass coverage loss had a data/catalog cause: rounded code-only annotations 640345 and 589611 did not select existing compatible S-TIM27 and S-BAL35 curves; the exact 573578 S-BAL11 curve was absent. Qualified per-element annotations fix the first two without globally aliasing approximate codes. Added S-BAL11 from the manufacturer's OHARA 02-06 datasheet, with independent C/d/F/g line-index checks. Patent nd/vd and supplier uncertainty remain intact. The 583302 asphere medium has no compatible curve in the catalog; the existing HOYA E-F3 is incompatible and remains unassigned.

Batch strict coverage improves from 30/34 to 33/34 (8/8, 15/15, 10/11). Global strict/trusted coverage is 7367/7911 and 7382/7911, with no coordinate mismatches and 558 catalog entries.

## Patent geometry

Inspected the exact local PDF figures at 600 dpi, excluding stop leaders, group brackets, movement arrows, and mechanical flanges. Stop diameters, radii, thicknesses, aspheres, and focus/zoom reconstructions are unchanged.

| Lens and exact source | SD decision (mm) | Evidence and limits |
|---|---|---|
| EF 50mm; `patents/JP_2007333790_A.pdf`, p. 16, Fig. 1 | Retained all SDs | The automated span was contaminated by leaders despite two crop attempts. Manual high-resolution optical-rim review agrees within drawing uncertainty; neither the rear-group bracket nor stepped mounting edges justify enlarging the central elements. |
| EF 70–300mm; `patents/JP_2007003600_A.pdf`, p. 16, Fig. 1 | S24/S25/S26: 11.5 → 13.4 | RIM around 13.5 mm, confirmed visually on the final doublet; gives a closer common rim with clean geometry. Other dimensions are within figure uncertainty and retained. |
| EF-S 18–55mm; `patents/JP_2005092056_A.pdf`, p. 18, Fig. 13 (rot90) | R1/R2: 16.2/15.1 → 20.5/20.5; R3/R4: 13.7/10.7 → 17.0/11.8; R5/R6: 10.3/10.2 → 12.5/12.5; R7/R8: 10.3/10.0 → 12.0/12.0 | Front group materially undersized. Figure scale 61.86 µm/px; E1 rim about 20.5 mm. The automated E3 measurement includes adjacent E2 flange ink, so its optical rim was read manually. R4=12.5 failed gap intrusion; 11.8 passes. Rear SDs and quoted aspheric departure unchanged. |

Figure screening crops: 70–300mm `0.132,0.59,0.36,0.66 --axis=0.627`; EF-S `0.103,0.182,0.301,0.328 --rot90 --axis=0.258`. The EF 50mm automatic results were rejected as measurement evidence because the detected span touched the crop edge.

Canon documents one UD element in the 70–300mm. Its unique 81.5-Abbe E7 is tagged `inferred`, keeping the production correlation separate from patent partial dispersion.

## Metadata and delivery

Canon Camera Museum product pages ef392, ef388, and ef380 confirm the production display names. Corrected the extra space in `f/1.2 L` to `f/1.2L`; preserved original zoom-generation distinctions. Normalized the new route keys and spaced Japanese publication identifiers before first publication.

Prepended one lens changelog entry dated **2026-09-08**, verified against **2026-09-08 13:38:18 UTC**. Existing entries were preserved. Regenerated glass reports and source-folder readmes.

## Verification

- Initial full suite: 297 files / 2,757 tests passed; initial typecheck, format, and lint passed.
- Focused batch and dispersion regressions: 82 tests passed.
- Final surface and image-circle audits: all three lenses passed.
- No hidden front/rear trims >=0.25 mm across 3 focus × 5 zoom samples for each lens.
- Browser review: all three pages rendered successfully; both zoom endpoints were inspected for each zoom lens. The 50mm title and Japanese patent links display correctly.
- Final typecheck, formatting, lint, and all 298 test files / 2,761 tests passed. Production build prerendered 1,267 pages and generated sitemap/RSS successfully; only the existing bundle-size advisory remained.
- Staged whitespace review replaced supplied Markdown trailing-space breaks with equivalent backslash hard breaks. Patent PDFs and temporary renders are excluded from the commit.

## Second live-site review

- Straightened EF 50mm G11/G12 and NL2 rims; increased S6 to 16.5 mm while retaining the G13 front clearance cap.
- Aligned EF 70–300mm S13–S15 at 14.1 mm and S19–S23 at 13.4 mm. Rejected larger front-doublet and L2 common rims because they failed edge-thickness/gap checks.
- Aligned EF-S L2b at 7.8 mm and refined R10/R15/R17. R17 remains capped at 7.6 mm by telephoto clearance. Added consistent E1–E11 diagram labels.
- Shortened visible focus descriptions while retaining full source/reconstruction detail in the analyses.
- Verified source-station focus/zoom ordering against the patent figures and camera-fixed group motion. Regression checks preserve the EF-S front-group reversal, 50mm unit-focus direction, nearly fixed 70–300mm L2/L4 groups, and unavailable 70–300mm focus travel.
- Live zoom review exposed a shared viewer/benchmark aperture scaling bug: multiplying by the wide-angle `L.FOPEN` stopped down a telephoto state that the controls called wide-open. Both paths now use `currentFOPEN`, preserving the full runtime iris at each zoom's wide-open marking. Regression checks cover both variable-aperture additions and fixed f/8 selection. The change also applies to comparison panels through the shared hook.
- Further 583302 research rejected the published polycarbonate fit (nd 1.584763, vd 27.8583) because vd differs by 2.3417. No catalog tolerance was loosened and no unverified resin/melt was assigned. Coverage remains 33/34; the 70–300mm's unique high-Abbe E7 retains its production-correlated inferred UD tag. Other element colors derive from authored nd and have no missing APD evidence that would justify recoloring.
- No additional changelog entry.
- Final verification: typecheck, format, lint, all 298 test files / 2,765 tests, and the production build passed (1,267 prerendered pages). All three surface/image-circle audits passed. Live local-site checks covered focus endpoints and wide/middle/tele zoom states, confirming full wide-open iris diameters of 24.93 mm (70–300mm) and 12.53 mm (EF-S); the existing bundle-size advisory remains.
