# Version3 bounded correction audit

Date: 2026-11-10.

One data file represents the complete zoom. All printed configurations remain exact. Inferred zoom-compensation samples are unpublished; focus labels and motion descriptions distinguish zoom travel, finite rear-group translation, assumed iris motion and the derived image gap.

Strict focused TypeScript, source invariants, native construction, 135 control/midpoint geometry/field/conjugacy states and 30 exact pupil cases pass. Hidden trim is zero, axial transmission is 100%, and no unknown rays remain. Source-versus-paraxial residuals are retained. The bounded inference and sampling budget are documented in the analysis.

Data SHA256: 15896a443c1c8cf253e036e52280e369fcd414f6fd937451b9f7a36fce76dea9

Status: bounded candidate ready for final frozen-six integration checks, not release-cleared. Full MTF, viewer and final corpus checks are not claimed. No source retuning, engine change, commit, PR, upload or deployment was performed. Prior versions and diagnostic failures remain preserved.

## Deployment validation (2026-11-10)

Independent check against the J-PlatPat scan (p. 5, table is an image): 29 radii, 28 thicknesses, 16 nd/νd pairs, the stop,
4 cemented joins, 2 aspheres (ε = 1 → K = 0, A4–A10) and 4 variable gaps at W/M/T; no mismatches. EFL 17.42 / 24.38 /
34.13, FNO 3.58, f3 and f4 and conditions (1)–(3) reproduce; distortion −3.9 / −2.0 / 0.0 % at the printed half-fields
matches Fig. 2. Minolta's 15/12 construction with aspheres and AD glass, ¶0037 ("17–35 mm, F3.5 class") and the companion
JP H10-82955 A (same Example 1, front sub-group focusing to 0.3 m) make the association strong.

Applied: patent number to house form `JP H10-082954 A`; PDF filed as `JPH10082954A.pdf`.

Open: hidden as delivered — fit to show after the wording pass (name "(E1, source-complete zoom)", subtitle, specs,
`focus.description`, element roles, header "Version3"); S3A/S4 sd 17.4 clips the wide corner chief ray (17.8 gives 23/23
stations at 100 % and passes `audit:surface`); optional close-focus state from JP H10-82955 A (d9 0.500 → 3.481 at
0.3 m); this log's SHA line does not match the delivered file and it mentions a rear-group translation the lens does
not have.
