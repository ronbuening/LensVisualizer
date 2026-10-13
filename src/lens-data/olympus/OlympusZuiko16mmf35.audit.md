# Audit Log - Olympus OM Zuiko 16mm f/3.5 Fisheye

Patent: US 3,850,509, Example 1

## 2026-06-24 - Olympus patent glass-code audit

### Patent evidence

- Reviewed local patent file `patents/US3850509.pdf`.
- Example 1 confirms the existing R/d/nd/vd prescription. The patent includes a plane-parallel filter plate, which remains excluded per the data-file note.
- The patent does not publish a clear-aperture table; retained inferred SDs and the stop derived from F/3.5 were left unchanged.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L6 / S11 | `S-APL1 (OHARA)` | `517696 - S-APL1 / APL1-class low-index high-Abbe crown (OHARA; no public Sellmeier match)` | Same glass family, normalized to six-digit code convention because the current public catalog has no coefficient-backed row. |
| L7b / S14 | `S-APL1 (OHARA)` | `517696 - S-APL1 / APL1-class low-index high-Abbe crown (OHARA; no public Sellmeier match)` | Same glass family, normalized to six-digit code convention because the current public catalog has no coefficient-backed row. |

### APD, high-index, and SD review

- No APD status changes: the patent gives ordinary nd/vd values only.
- High-index roles remain with the dense flints already labeled elsewhere in the file; L6/L7b are low-index high-Abbe crown elements.
- No SD change: the front-group and stop apertures already follow the patent drawing and F-number-derived pupil constraint.

### Analysis sync

- Updated the L6/L7b element text, glass table row, and catalog note.

## 2026-07-29 — S-APL1 catalog backfill

- Replaced the provisional `517696 ... no public Sellmeier match` annotations on L6 and L7b with `S-APL1 (OHARA; 517696)`.
- The official OHARA 2026-07-01 all-products catalog supplies the discontinued glass's formula-3 coefficients and exact 1.517277 / 69.563 coordinate.
- Synchronized the analysis element text, glass table, and source note.

## 2026-10-04 — Patent filter left out

- Patent check (US 3,850,509, Table 1): r10 and r11 are both flat, d10 = 0.0742 at f = 1, between the fourth and fifth
  lenses, with 0.0792 before and 0.0829 after. The table prints the word "filter" where an index would be; no index
  or Abbe number is given.
- The patent says "the filter may be of course placed at any other position". With no glass data printed and no fixed
  position, the plate is not modeled, so the file is unchanged: surface 9 keeps the air-equivalent gap, which uses an
  assumed index of 1.51633.
- Olympus counts the built-in filter in its 11 elements / 8 groups; the header keeps that note and now states why the
  plate is left out.

## 2026-10-07 — Display name

Display name changed from `OLYMPUS OM ZUIKO 16mm f/3.5 Fisheye` to `OLYMPUS ZUIKO AUTO-FISHEYE 16mm f/3.5`, the name
the lens carries (Zuiko Auto-Fisheye 16mm 1:3.5) and the form already used for the 8mm entry. The lens key is
unchanged.
