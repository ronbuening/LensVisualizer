# Yongnuo 35mm f/2 S DF DSM: qualified infinity H1 audit

2026-11-09. Baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 history commits. Integration gates verified; no publication.

- Whole original A E1 preserved: all20 rows and both K/C4–C12 sets exactly roundtrip. S15 absent, plate exit blank. Main R1=375.10 kept against later375.0100 summary; no E2 mixture or focal/image-plane fit.
- Source ¶0074 explicitly d/F/C; glass identities and partial dispersion unknown. Standard1+K asphere convention remains inferred.
- Stop S9 z25.470 and literal rear train14.08air/2.5glass/1air unchanged; image80.114. Native EFL35.142564788.
- Applicant source 深圳市永诺摄影器材股份有限公司 retained as photographic-equipment entity; no electric-appliance equivalence.
- Missing required focus scalar triggered initial ingest failure. First clone addition denied; one later evidence-supported retry permitted. Full denial, new source/schema/engine evidence and fallback-label limitation retained in SCHEMA_RETRY_EVIDENCE.txt. Field0.35 is source MOD heading, NOT a validated finite endpoint. No gaps or finite conjugates; native endpoint geometries identical.
- H0 air-gap geometry failure preserved. S3/S4 caps12.45/12.40 failed;12.35 passed default90% allowance. Actual S8 clipping justified11.10, against traced need11.091694. H1 zero trim, no rim cut or sag override.
- Official H1 census2.006885086963 vs nominal2.006885088681, limiterSTO. Iris air clearances1.327137/0.484mm. Exact nonlinear EFL/diameter2.14641654 is separate diagnostic, not iris calibration.
- Reference-only native MTF at587.5618nm: geometric+diffraction, source-plane and separately labeled best-axial, fields0/15.550957/31.101847deg,0/10/20/30/40lpmm; all12cases converged at<=128grid. No failed/unaimed/unresolved in-beam rays. Full edge4908valid/7984blocked pupil retained.
- Source-plane axial diffraction20lp/mm0.04136; best-axial0.90961 at diagnostic+0.133962038mm shift. Source image plane unchanged. C/d/F and photopic MTF blocked by vd70.361 without partial dispersion; no invented spectrum or glass curves.
- Prior baseline alias/numeric and private custody checks bounded, not exhaustive hidden-custody clearance.
- Integration gates passed: metadata/type/format/lint, 23 focused test files and 1609 tests, build of 1878 routes, SEO, and guarded installation checks. Initial lint at 1536 MiB exhausted its heap; a 3072 MiB run was interrupted by executor recovery, and the subsequent unchanged 3072 MiB run passed. All earlier logs remain as historical evidence. Original v1/v2 checkpoints and all failures retained. Native scripts/results remain in evidence/yongnuo35f2.

## 2026-11-10 — Deployment validation

Independent check against CN 113126266 A Example 1 (page-9 image): 20 rows (R, d, nd, νd), the S16/S17 aspheres
(K, C4–C12), both variable gaps at both states and the plate agree with the print. The B grant reprints the same
tables. Front page: Shenzhen Yongnuo Photographic Equipment Co., Ltd., inventors 叶远华, 庄永盛 and 庄建南. Attribution
strong: Sony E full frame, 9 elements in 8 groups, one asphere, one ED element, 0.35 m and 0.13×.

The main table's L7 index (surface 13) is a source misprint: it prints nd 1.668, the description's parameter list
([0120]) gives 1.6668. With 1.668 the table traces to 35.14 mm and F/2.007 and its axial focus misses Figs. 2–4 by
about 0.1 mm; with 1.6668 it traces to 35.03 mm (stated 35.02) at F/2.000, and the focus shift, spherical aberration
and close-focus plot match. Example 2 shows the same misprint.

Deployment change: L7 nd 1.668 → 1.6668 with a `source.errata` entry; `fNumber.design`, `nominalFNumber` and the first
f-stop 2.006885 → 2; L7 element focal length recomputed. `audit:aperture` passes.

Open: `focus.closeFocusM` 0.35 on a fixed infinity geometry; key, subtitle, specs, element prose and analysis wording
(including the close-gap remark).
