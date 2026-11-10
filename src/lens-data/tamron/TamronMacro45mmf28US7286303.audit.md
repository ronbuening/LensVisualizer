# Tamron 45.3 mm F2.8 patent-design static audit

2026-11-09. New isolated baseline checkout, 2,253 ancestor commits. No commits or publication performed. Prior source and model repositories untouched.

## Literal source and scope

Original grant table pixels p7/p8, Fig. 1 original_p2 and application_p8 were inspected directly. All 19 source rows, including reference S1 and stop S10, match literal.json. Every payload in the 11-file source manifest matches its recorded hash; the existing source zip hash and ZIP CRC verified; no duplicate download or upload.

S1's blank material is modeled as air and its 3 mm reference offset is explicitly preserved in derived-distance reporting, not as an invented plate. S10 is mapped to STO with exact 4 mm distances on both sides. L5/L6 share S12. No retail model or mount is assigned.

Grant claim first-face wording and truncated wavelength prose remain explicit unresolved source errata (closed 2026-11-10: neither affects the table; moved from `source.errata` to the header and analysis); numerical table is unchanged. Application paragraph 0048 resolves the wavelength interpretation without rewriting original evidence. No glass matching or broadband qualification is claimed (glass closed 2026-11-10: exact HOYA rows assigned).

## Deterministic preparation

Run `python evidence/tamron45/prepare_static.py` in this isolated checkout. It reads the original sibling source packet without modifying it, verifies hashes and baseline ancestry, reproduces independent scalar 2x2 reduced-angle calculations, scans local baseline aliases/scaled first-six radii, writes static.json and regenerates the unformatted model draft. Reformat afterward if needed. No match was found in this bounded baseline scan.

All caps remain inferred candidates. Static shared-band spherical sag screening at 101 radial samples rejects overlap above the runtime default 0.9 fraction. It is not a substitute for native validation, pupil/rim survival, or render hidden-trim inspection. Candidate caps were reduced rather than raising gap-sag allowance. No failed native attempts exist because none have run.

## Native bounded qualification

Coordinator released a single bounded optical slot. Every native process used NODE_OPTIONS=--max-old-space-size=1536 and completed; slot returned immediately afterward. H0 aperture, H1 row/endpoint pilot, H2 128-grid reference MTF, and H3 256-grid source-plane geometric follow-up are retained separately. No numerical-source changes or sag overrides were needed.

Native compiled-data source readback matches every refracting/stop row and both gap endpoints. First-glass coordinates put infinity image at 81.274 mm and near image at 123.599 mm; this coordinate convention is not a physical fixed-front focus claim. Fixed-image interpretation shifts both assemblies objectward. Zero hidden trim at both endpoints. Infinity F2.8 is iris-limited with admitted launch radius 8.081580696 mm; iris clearances 2.379738669/2.129209073 mm. Finite endpoint was checked for geometry only, not finite effective aperture.

MTF uses exact source image heights 0/10.8165/21.633 mm, not an assumed camera corner. Edge angle 26.019514727° is calculated. H2 source-plane geometric edge was unconverged above 30 lp/mm at 128; H3 max 256 resolves through 40 with delta 0.000737. H2 diffraction and best-axial diagnostics converge through 40. All earlier results are preserved. Best-axial diagnostics do not modify the source plane. Edge diffraction has 7680 valid/5212 blocked rays and no failed/unaimed/unresolved rays, so vignetting is disclosed.

Finite MTF support refusal finite-conjugate-unavailable remains in native-pilot.json. Derived object distance is neither printed nor certified. No finite MTF or broadband qualification is asserted.

## Pending gates

Full typecheck/lint/test/build and guarded installation/readback will be performed in the combined six-model checkout, not asserted as a separately tested standalone installation. No ongoing native process holds the optical slot. (Closed 2026-11-10: superseded by the repository batch integration, whose checks the coordinator runs.)

## Frozen staging handoff

The model is catalog-visible by the schema default; no retail mount, marketing focal length, or invented camera format is assigned. The source-derived image circle is twice the printed 21.633 mm height. Only this data/analysis/audit triad is a catalog addition. No shared engine, registry, taxonomy, test or configuration additions are required. Native scripts and source packets remain evidence, not catalog files.

Existing unfinished native checkpoint was uploaded to a private folder and fully downloaded again: 43,069 bytes, hash matched; all 26 archive members (25 payloads plus manifest), CRC and payload hashes match. Upload and ancestor permission reads show owner-only access. Frozen staging formatting and this custody note postdate that preserved checkpoint; final triad hashes are in FROZEN_HANDOFF.json.

## Deployment validation (2026-11-10)

Independent check against the grant (pp. 7–8) and application (p. 8) tables, which are identical: 17 radii, the stop, 17
thicknesses, 9 nd/νd pairs, the S12 cemented face and D15/D19 at both states; no mismatches. EFL 45.300, F/2.8, BF 42.605,
1:1 state m −1.0000 at 184.40 mm object-to-image. No retail lens matches (Pentax DA 35 Macro, Tokina AT-X M35, Nikon
PC-E 45 and others rejected on focal length, layout or focusing), so it stays a named patent design.

Applied: none.

Open: rims at S6–S8, S9 and S11 are 1–2 mm larger than Fig. 1 (≈8.6 / 7.9 / 7.6 still pass the f/2.8 beam); all seven glass
pairs match catalog rows exactly but are labelled `Unmatched`; the patent's own conditions (2) and (3) are not met by its
example (patent inconsistency, not a transcription error); public wording and package-process prose need a cleanup pass.

## 2026-11-10 — Cleanup and wording pass

Data file: header comment rewritten as a fact list (source, sole example, patent scale, omitted air plane at
surface 1, stop placement, printed vs calculated focus values, estimated rims, source inconsistencies). `subtitle`
"US7286303B2; no identified retail lens" → "US 7,286,303 B2 — floating-focus macro design; no retail lens identified".
`specs` → 9 ELEMENTS / 8 GROUPS, DESIGN f = 45.3 mm, DESIGN F/2.8, ALL SPHERICAL, FLOATING FOCUS TO 1:1 (dropped
"PATENT DESIGN; NO RETAIL IDENTIFICATION", the undesignated f and F lines and the image-height line, which stays in
`imageCircleMm`). `focus.description` reworded (PUBLISHED floating focus: front group with stop 42.325 mm and rear group
21.162 mm toward the object, printed D15/D19, calculated 184.40 mm object-to-image, linear interpolation); the printed
1:1 keyframe and `closeFocusM` are unchanged. The two prose entries in `source.errata` (grant claim 1 calls the first
face concave; grant wavelengths printed 87.56/84 nm) were removed, since neither affects the table and the application
resolves the wavelengths; both are stated in the header and the analysis. Cemented id D1 → C1 (D15 is a gap label).
Element roles added. `catalog.focalLengthMm.design` stays 45.3, the patent's stated f at its own (unscaled) scale, which
equals the rounded traced EFL.

Glass relabels (all elements previously `Unmatched`), catalog nd/νd against the printed values: L1 LAC14 (Hoya)
Δnd 2.3e-6, Δνd −0.04; L2 E-FD4 (Hoya) −2.6e-7, +0.03; L3/L7/L8 LAC10 (Hoya) −1.7e-6, +0.04; L4 E-F2 (Hoya)
−1.5e-7, 0.00; L5 E-FD1L (Hoya) 1.1e-6, 0.00; L6 TAF1 (Hoya) 2.9e-8, +0.02; L9 E-FEL2 (Hoya) −8.9e-8, 0.00. HOYA was
chosen over the tied OHARA rows because HOYA's νd rounds to every printed value; S-LAL10 (50.23) would print 50.2 where
the patent prints 50.3. No `nC`/`nF`/`ng` were present to drop.

Analysis: the "Verification Status and Aperture Limits" section (MTF grids, ray counts, draft and gate status,
finite-conjugate wording) replaced by "Model Scope and Limitations"; new "Conditional Expressions" section ((1) met in
magnitude at 1.26; (2) 1.53 against an upper limit of 1.5; (3) F2/F = −22.1, rear group f ≈ −1000 mm, against 4.0–6.0);
the source inconsistencies moved into the identification section; per-element focal lengths and catalog glasses
added; glass and focus tables added; the retail-candidate comparison (Pentax DA 35mm Macro Limited, Tokina AT-X M35
PRO DX) recorded with maker sources.

Engine before/after (identical): EFL 45.30005797, FOPEN 2.8, halfField 35.86606626°, stop radius 7.16436734 mm,
BFD 42.6054 at infinity; close keyframe EFL 44.3085, magnification −1.0000, object-to-image 184.40 mm. Surface audit OK;
aperture audit reports no rim-limited station.

Open: rims at S6–S8 (10.5 / 10.5 / 9.5 mm against ≈ 8.6 mm in Fig. 1), S9 (9.5 against ≈ 7.9) and S11 (9.5 against
≈ 7.6); the drawn values still pass the f/2.8 axial beam but add corner vignetting, for the rim pass. No mount or
marketed close-focus value, since no retail lens is identified; the default 135 full-frame format matches the printed
21.633 mm image height. The 1:1 state could carry a `focus.conjugates` entry (its object distance follows from the
printed magnification), which would enable finite-distance MTF; not added in this pass.
