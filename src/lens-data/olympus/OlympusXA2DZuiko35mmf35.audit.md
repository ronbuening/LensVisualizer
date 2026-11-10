# Olympus XA2 D.Zuiko 35mm f/3.5 — source and model audit

US 4,303,313 A Embodiment 1, transcribed whole and scaled ×0.35. The original patent table and front matter were inspected visually when the package was authored (2026-11-09).

## Source invariants

Eight radii, seven internal intervals and four n/v pairs reproduce the whole embodiment. Splitting d6 at the inferred midpoint stop preserves its total. No image plane, radius, glass, gap or coefficient was optimized. The image plane stays at the derived paraxial position for collimated input, 34.846 mm behind the first surface. No factory prescription or finite focus movement is asserted.

## Model qualifications

At authoring, the d-line reading was an assumption and all four glasses were unmatched with estimated dispersion (both closed in the cleanup pass below). The paraxial plane is soft at full aperture and the corners vignette strongly; both are kept. The patent's 31.5° field was evaluated with a 44.1 mm reference circle in the package's own analysis only; the catalog image format stays 135 full frame, whose corner (31.09°) was evaluated separately. The package's best-axial shift of −0.296 mm was a diagnostic and is not applied.

The instruction manual recommends the close zone for 1–1.5 m. The 1 m minimum is a catalog value only; the repair manual's 1.2 m and 2.7 m marks are zone settings, not measured optical states. The infinity-only focus uses a placeholder close distance (1e9 m at authoring, 1e15 m since the cleanup pass). No variable gaps.

## Package checks (2026-11-09)

The first draft omitted the required `layout.yScFill` and was rejected on ingest; the display-only value 0.35 was added. Geometry, iris clearance and aperture checks then passed. Reference MTF at the patent half field and at the frame corner converged to 40 lp/mm, with poor contrast at the paraxial plane. The 31.5° field needed the analysis-only image-circle normalization noted above; no catalog value changed.

## Integration status

Closed 2026-11-10: superseded by the deployment validation and cleanup pass below. The package's own installer and validation records are not part of the repo.

## Deployment validation (2026-11-10)

Independent check against the patent scan (no text layer; Embodiment 1 on p. 7, claim 2 on p. 8): all 8 R, 7 d and
4 nd/νd values equal the printed values ×0.35; no mismatches. EFL 35.008 (patent f = 100 → 100.02 at patent scale), F/3.5,
conditional values reproduce (f/f123 1.589 vs printed 1.590). Olympus's XA2 service manual (D.Zuiko 35 mm 1:3.5, 4/4, front-cell
focus) supports the attribution; E1's scaled d6 (5.77 mm) is the closest of the five embodiments to the manual's 5.754 mm.

Applied: `catalog.lensMounts: ["fixed-lens-camera"]` (missing).

Open: L4 rims (s7/s8 sd 5) are drawn smaller than in the patent figure and the service diagram (≈6.2/6.6 passes
`audit:surface`); field coverage 80 % because L1 rear / L2 front cross at r ≈ 5.7 mm (as on the live Olympus XA entry); all
four glasses match catalog rows exactly (S-LAL10, S-TIH11, S-BAH27, S-LAH51) but are labelled `Unmatched`; public wording
(subtitle, specs, `focus.description`) and the package-process prose in this log and the analysis need a cleanup pass.
Glasses and wording: closed in the cleanup pass below; rims and field coverage stay open.

## 2026-11-10 — Cleanup and wording pass

Data file: header comment rewritten in plain terms with every fact kept (scale stated once, d-line reading, derived
image plane, stop and rim estimates, infinity-only focus). `subtitle` "US 4,303,313 A EMBODIMENT 1 — REPRESENTATIVE
SOURCE DESIGN" → "US 4,303,313 A, Embodiment 1 — XA2 production correlation". `specs` → "4 ELEMENTS / 4 GROUPS",
"DESIGN f = 35.0 mm", "DESIGN F/3.5", "ALL SPHERICAL". `catalog.focalLengthMm.design` 35.007882… → 35.0, the scaled
patent f, following the sibling `OlympusXAZuiko35mmf28`. `focus.closeFocusM` 1e9 → 1e15 (placeholder) and
`focus.description` rewritten (infinity only; production front-lens zone focus, marks at 1.2 m, 2.7 m and infinity,
1 m minimum). The four `indexReferenceNote` strings ("assumed helium-d") were removed: Fig. 3 plots the d and g lines.

Glass relabels (all OHARA, Δ = catalog − printed): L1 `Unmatched` → S-LAL10 (Δnd −4.7e-6, Δνd −0.02); L2 → S-TIH11
(Δnd +2.7e-6, Δνd −0.03); L3 → S-BAH27 (Δnd −4.2e-6, Δνd +0.14); L4 → S-LAH51 (Δnd −4.2e-6, Δνd +0.02). HOYA LAC10,
FD110 and BAFD7 tie for L1–L3, but no HOYA row is within 0.15 in νd for L4 (NBFD11 is 0.25 off), so OHARA is used for
all four. No catalog-copied nC/nF/ng were present.

Analysis: the identification section now lists the convergent evidence (repair-manual 4/4 layout and d6 = 5.754 mm
against 5.7715 mm, the closest of the five embodiments; timing; inventor). Element sections gained short roles from the
patent's conditions, the glass section names the OHARA rows, and a Conditional Expressions table was added. The image
plane, stop, verification and MTF sections were merged into "Model Scope and Limitations". The package's MTF values,
grid and normalization notes, and its sampled field transmissions (100 / 68.3 / 46.2 / 23.1 % at 0 / 15.75 / 23.625 /
31.5°) were dropped from the public text as unchecked package diagnostics. The archive.org service-manual link was
replaced by a plain citation of the repair manual, p. A-16.

Engine numbers before and after are identical: EFL 35.00788208140128, FOPEN 3.5, halfField 21.36708086948265°, stop
radius 3.044751011096371, BFD 16.9433, TL 34.8458. Only the reported closeFocusM changed (1e9 → 1e15). audit:surface
OK; audit:aperture within 3 % of the stated f-number with no rim limit.

Open: L4 rims (s7/s8 sd 5) are drawn smaller than the patent's Fig. 2 and the repair-manual diagram, where L4 is
nearly as tall as L1; about 6.2/6.6 passes audit:surface and removes the 9 % side clip at s8. Stop position: Fig. 3
distortion at 31.5° (about +2.2 %) fits a stop near 0.4 of d6 better than the midpoint (+2.6 %). Field coverage is 80 %
(chief ray clear to about 25.7°): L1 rear and L2 front meet at r ≈ 5.7 mm, which caps L2 at 5 mm, the same pattern as
the Olympus XA entry.
