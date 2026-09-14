# Audit Log — Ricoh GR 28mm f/2.8

Patent: US 5,760,973

## 2026-06-23 - Complete local patent recheck

- Local patent source: `patents/US5760973.pdf` (untracked local file), Example 1.
- `pdftotext -layout` was used to verify the Example 1 prescription table against the data file. Surface radii, spacings, nd/vd values, stop placement, variable back focus convention, and aspherical surfaces were retained.
- This review supersedes the older "patent unavailable" notes below: the local PDF is now present and was checked.

| Element / surface | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L(3,3) / row 9 | 1.74077 / 27.8 | `EFD4 (HOYA) / S-TIH13 class` | `E-FD13 (HOYA) / S-TIH13 class (741278)` | Exact local Hoya/OHARA class match for the patent row; previous Hoya family label was stale. |

- The earlier L(2,2) E-FD8/S-TIM28 relabel remains correct.
- The patent does not provide Pg,F, so no APD or dPgF values were added. No element is treated as APD from this source.
- The patent does not list semi-diameters. Existing SDs remain estimates; the aperture progression was checked against the full-frame wide-angle drawing and is rational: largest clear apertures at the front negative and rear field-corrector elements, smaller apertures around the stop, and uniform SDs within cemented groups.
- Companion analysis was updated so all L6 discussion names E-FD13 / S-TIH13 class instead of EFD4.

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/US5760973.pdf` (untracked local file).
- `pdftotext -layout` extracted the Example 1 prescription table; row 4 lists the L(2,2) glass as `168893 / 31.2`, i.e. nd=1.68893, vd=31.2.

| Element / surface | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L(2,2) / row 4 | 1.68893 / 31.2 | `S-TIM35 (OHARA) / FD110 (HOYA)` | `E-FD8 (HOYA, patent nd/vd match) / S-TIM28` | HOYA E-FD8 and OHARA S-TIM28 are the catalog-tolerance matches for the stored patent pair; the previous label resolved to the wrong glass. |

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a US 5,760,973 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Final remainder recheck

- Rechecked the local `patents/` folder while finishing the remaining catalog-mismatch rows. A US 5,760,973 PDF is still not present.
- No glass labels or SDs were changed, and no figure comparison could be performed from the local untracked patent set.

## 2026-09-08 — First-hosted audit, lens 12

- Local US5760973.pdf: title p1, Fig1 p2, sag equation p15, Example1 table p16. Author/assignee metadata agrees. All R/d/nd/vd and two aspheric coefficient sets visually match. Equation explicitly contains 1+K, so stored conics are correct.
- Source gives no last image gap or finite-focus schedule. Independent paraxial EFL28.1057416, assembly18.24mm, BF17.2180339. Full0.35m object-image solve gives closeBF19.9803240, extension2.7622901mm. Replaced old2.45mm extension and marked the schedule/slider gap inferred. Preserved source stop split0.8/2.41mm.
- Shared Figure1 represents Examples1–3. It supports a smaller front and larger rear component but is not an exact numerical SD reference. Revised S1/S2 from8/7.5→6.5/6.2; S7–S9 from5.5→6.3; S10 from5.8→6.5; S12 from7.8→8.0. Retained S11A6.9: trial7.2 fails slope guard, and S10trial6.8 infringes gap clearance. Final surface and image-circle probes pass; zero hidden trims at∞/mid/close.
- Supplier-neutral single catalog counterparts replace mixed vendor labels. All7 resolve; no patent APD claims. f2.86 first shortcut replaces2.8; removed unavailablef22 shortcut above the existingf16 UI limit. Analysis rewritten with source/inference and figure-sharing limitations.
- Production∞/close/motion chart inspected before edits. Local∞/close/midpoint/f16 reviewed after: BF17.22/19.98/18.60, focus35cm/70cm, f2.86/f16; all4groups move2.76mm objectward with zoom disabled. Stop9.34mm wide open and1.67mm atf16. Revised silhouette retains larger final component and no overlap.
- Three focused regressions pass for finite conjugate, fixed-camera rigid travel, and untrimmed rims. Full gates/glass reports remain for batch11–20.
