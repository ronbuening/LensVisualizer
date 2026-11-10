# Version3 bounded correction audit

Date: 2026-11-10.

One data file represents the complete zoom. All printed configurations remain exact. Inferred zoom-compensation samples are unpublished; focus labels and motion descriptions distinguish zoom travel, finite rear-group translation, assumed iris motion and the derived image gap.

Strict focused TypeScript, source invariants, native construction, 1323 control/midpoint geometry/field/conjugacy states and 300 exact pupil cases pass. Hidden trim is zero, axial transmission is 100%, and no unknown rays remain. Source-versus-paraxial residuals are retained. The bounded inference and sampling budget are documented in the analysis.

Data SHA256: e5b8c0eb812db864a3ea3dfc056e18955d6e48f0aaffd4f5a5921f829f38f890

Status: bounded candidate ready for final frozen-six integration checks, not release-cleared. Full MTF, viewer and final corpus checks are not claimed. No source retuning, engine change, commit, PR, upload or deployment was performed. Prior versions and diagnostic failures remain preserved.

## Deployment validation (2026-11-10)

Independent check against the 300 dpi image of PDF p. 22: 29 R, 28 d, 16 nd/νd pairs, 3 cemented interfaces, 4 variable gaps
at 3 states, Σd and all 39 Table 11 focus shifts; no mismatches. EFL 28.80 / 60.00 / 131.50, FNo 3.6 / 4.2 / 4.63, Table 10
group values and Σd reproduce; the printed focus shifts reach the stated image distances within 0.9 % (0.05 % at 1.5 m).
Minolta's 16/13 construction, internal focusing and 1.5 m close focus fit Embodiment 5 (Embodiment 6 is 17/13); association
strong.

Applied: PDF filed as `US4844600A.pdf`. No data change.

Open: hidden as delivered — fit to show after the wording pass; the 22 inferred zoom stations move the fixed group FII by
up to 1.47 mm (patent: FII stationary) — re-solve them with S21-to-image fixed at 80.549 mm; at wide 1.5 m the corner
chief ray just touches S23/S25 (≈8.6 / 14.1 would clear, still inside Fig. 12); all 16 glasses are standard catalogue
pairs labelled `Unmatched`; stop at mid-d13 moves Δx/2 during focus.
