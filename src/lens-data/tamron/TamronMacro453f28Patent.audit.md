# Tamron 45.3 mm F2.8 patent-design static audit

2026-11-09. New isolated exact baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2,253 genuine ancestor commits. No commits or publication performed. Prior source and model repositories untouched.

## Literal source and scope

Original grant table pixels p7/p8, Fig. 1 original_p2 and application_p8 were inspected directly. All 19 source rows, including reference S1 and stop S10, match literal.json. Every payload in the 11-file source manifest matches bytes and SHA256. Existing source zip SHA256 f6007b192a706f84807447a9fafc888469b99fbd395776a61001f30157f2ed14 verified with clean ZIP CRC; no duplicate download or custody upload.

S1's blank material is modeled as air and its 3 mm reference offset is explicitly preserved in derived-distance reporting, not as an invented plate. S10 is mapped to STO with exact 4 mm distances on both sides. L5/L6 share S12. No retail model or mount is assigned.

Grant claim first-face wording and truncated wavelength prose remain explicit unresolved source errata; numerical table is unchanged. Application paragraph 0048 resolves the wavelength interpretation without rewriting original evidence. No glass matching or broadband qualification is claimed.

## Deterministic preparation

Run `python evidence/tamron45/prepare_static.py` in this isolated checkout. It reads the original sibling source packet without modifying it, verifies hashes and baseline ancestry, reproduces independent scalar 2x2 reduced-angle calculations, scans local baseline aliases/scaled first-six radii, writes static.json and regenerates the unformatted model draft. Reformat afterward if needed. No match was found in this bounded baseline scan.

All caps remain inferred candidates. Static shared-band spherical sag screening at 101 radial samples rejects overlap above the runtime default 0.9 fraction. It is not a substitute for native validation, pupil/rim survival, or render hidden-trim inspection. Candidate caps were reduced rather than raising gap-sag allowance. No failed native attempts exist because none have run.

## Native bounded qualification

Coordinator released a single bounded optical slot. Every native process used NODE_OPTIONS=--max-old-space-size=1536 and completed; slot returned immediately afterward. H0 aperture, H1 row/endpoint pilot, H2 128-grid reference MTF, and H3 256-grid source-plane geometric follow-up are retained separately. No numerical-source changes or sag overrides were needed.

Native compiled-data source readback matches every refracting/stop row and both gap endpoints. First-glass coordinates put infinity image at81.274 mm and near image at123.599 mm; this coordinate convention is not a physical fixed-front focus claim. Fixed-image interpretation shifts both assemblies objectward. Zero hidden trim at both endpoints. Infinity F2.8 is iris-limited with admitted launch radius8.081580696 mm; iris clearances2.379738669/2.129209073 mm. Finite endpoint was checked for geometry only, not finite effective aperture.

MTF uses exact source image heights0/10.8165/21.633 mm, not an assumed camera corner. Edge angle26.019514727° is calculated. H2 source-plane geometric edge was unconverged above30 lp/mm at128; H3 max256 resolves through40 with delta0.000737. H2 diffraction and best-axial diagnostics converge through40. All earlier results are preserved. Best-axial diagnostics do not modify the source plane. Edge diffraction has7680 valid/5212 blocked rays and no failed/unaimed/unresolved rays, so vignetting is disclosed.

Finite MTF support refusal finite-conjugate-unavailable remains in native-pilot.json. Derived object distance is neither printed nor certified. No finite MTF or broadband qualification is asserted.

## Pending gates

Full typecheck/lint/test/build and guarded installation/readback will be performed in the combined six-model checkout, not asserted as a separately tested standalone installation. No ongoing native process holds the optical slot.

## Frozen staging handoff

The model is catalog-visible by the schema default; no retail mount, marketing focal length, or invented camera format is assigned. The source-derived image circle is twice the printed 21.633 mm height. Only this data/analysis/audit triad is a catalog addition. No shared engine, registry, taxonomy, test or configuration additions are required. Native scripts and source packets remain evidence, not catalog files.

Existing unfinished native checkpoint was uploaded to the private Checkpoints folder and fully downloaded again: 43,069 bytes, SHA256 5f5fcd314110cf6e406dcb76f34d219be6744b7f297c3892a70f55361fea75ce; all 26 archive members (25 payloads plus manifest), CRC and payload hashes match. Upload and ancestor permission reads show owner-only access. Frozen staging formatting and this custody note postdate that preserved checkpoint; final triad hashes are in FROZEN_HANDOFF.json.
