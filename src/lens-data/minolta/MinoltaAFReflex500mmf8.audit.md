# Audit Log - Minolta AF Reflex 500mm f/8

Patent: US 4,951,078, Table 1 / Figures 4, 6, 9, 10

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- Local patent file checked: `patents/US4951078.pdf`.
- Table 1 confirms the repeated `1.67000 / 57.07` glass used by the primary Mangin blank / central relay plug and rear meniscus.
- The patent and product documentation support the annular aperture, central obstruction, and required rear plug-in filter treatment already present in the model.

### Glass and APD disposition

- Changed the repeated `1.67000 / 57.07` rows from closest-neighbor prose to explicit `670571` lanthanum-crown code labels.
- Kept BSC7/N-BK7-class and LAC8/N-LAK8-class rows unchanged.
- No ED, fluorite, or APD status is supported; color correction is mirror-dominant and ordinary refractive glass remains appropriate.

### Semi-diameter disposition

- The patent does not provide ordinary clear-aperture semi-diameters, but it does define the folded annular geometry.
- Existing outer SD and `innerSd` values were reviewed against the patent figures: the primary annulus, secondary obstruction, clear central plug, rear relay, and field-corrector proportions remain coherent. No SD edits were made.

## 2026-07-29 - `670571` catalog-equivalent review

- Rechecked Table 1's three uses of `nd = 1.67000`, `vd = 57.07` in the shared primary Mangin/central
  plug material and rear meniscus; the stored prescription rows and folded path remain unchanged.
- Official OHARA all-products data publish discontinued S-LAL52 with coefficients at `nd = 1.669999`,
  `vd = 57.327972`, code `670573`.
- Relabeled all three unresolved `670571` annotations to
  `S-LAL52 (OHARA catalog-equivalent to 670571; patent vendor unspecified)`. This provides one
  coefficient-backed model for the repeated material without asserting the production supplier.
- Synchronized the analysis narrative and tables. No geometry, mirror interaction, APD status, or aperture changed.

## 2026-09-29 - Zoned-blank medium and primary inner radius

### Phase 2 - Retained-information audit

Real rays traced EFL ≈ 438–448 mm with focus near z = 175–178, against the header's 495.9725 mm and the stored
image plane at z = 153.98. An independent lab-frame paraxial trace of the stored geometry gives EFL 495.97 mm with
focus exactly on that plane when the ray leaving the Mangin primary through `M1F` enters air. The viewer's tracers
took that medium from the central plug `L5F` (`nd = 1.67`), which precedes `M1F` in array order; they now use the
last earlier surface whose clear zone overlaps the annulus.

| Surface / field | Before | After | Justification |
|---|---:|---:|---|
| `M1F` `innerSd` | 13.5 | 12.0 | Tiles the blank's front face with the central plug (`L5F` sd 12.0); 13.5 left a 12.0–13.5 ring with no front surface, where returning rays skipped their exit refraction |
| `M1R` `innerSd` | 13.5 | 12.0 | Paired annular surfaces share `innerSd`; FNO(IN) = 18.20 puts the inner pupil edge at 13.6 mm, whose ray meets the silvered r4 near 12.3 mm |

Viewer real rays now give EFL 496.3–496.9 mm with focus at z = 154.0–154.1 across the usable annulus.

### Phase 4 - Analysis sync

- Updated the modeling note: the central plug's semi-diameter now equals the primary shell's inner clear radius.

### Follow-ups

- The explicit folded path cannot vignette the innermost returning rays (entrance heights ≈ 13.6–15 mm) that cross
  the primary station inside r = 12 mm, where the cemented relay face would physically intercept them; they still
  trace through the plug zone without refraction.

## 2026-10-04 — Plug-in filter drawn as an element

- Patent check (US 4,951,078, Table 1): r15 and r16 are both flat, d15 = 2.0, N10 = 1.5168, ν10 = 64.20, 2.7 mm
  behind r14. The table stops at r16 and the patent never names the plate; FIG. 10 draws it behind the rear
  meniscus. The manufacturer's instructions require the normal or ND4X plug-in filter to be installed.
- The file had omitted the plate and folded 2.0 / 1.5168 into the last gap. It is now drawn: surfaces 15–16 and
  element 8 (`Plane-Parallel Plate`), added to the explicit surface order. The air behind it, 62.361147 mm, is the
  paraxial back focus of the prescription, since the patent prints none; the image plane moves from z = 153.9797
  to 154.6611 mm, the physical path.
- The source lists no clear aperture for the plate. Its semi-diameter, 12.5 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format (11.88 mm), plus 5%, rounded up to 0.5 mm.
- Before/after check: EFL, stop radius and analysis half-field are unchanged, and the same rays of a 74,165-ray
  field sweep reach the image plane.
