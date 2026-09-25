# Audit Log - Canon TS-E 50mm f/2.8L Macro

Patent: US 10,571,651 B2, Numerical Data 1 (Sakai / Canon)

## 2026-09-25 — Source-state review

Source-state review outcome: verified. Both authored candidates reviewed; infinity and half life-size are enabled.
The finite distance is calculated; intermediate travel is not certified. Active tilt/shift remains unavailable for MTF.

The original [US10571651B2 PDF](https://patentimages.storage.googleapis.com/a8/cc/5b/a69d62bcd5ffd1/US10571651.pdf)
was retrieved because it is absent from the local patent collection. Visually inspected PDF page 17, printed
page 11, Numerical Data 1. All 22 source surface rows match the retained radii, indices and fixed spacings;
R17 is STO. The source's infinity/-0.5 columns give d6=1.01/6.84, d10=7.61/1.78 and BF=55.96/81.07 mm.
The changed final image distance is authored optical geometry and is preserved exactly. Numerical Data 2,
in the right column, was not used.

At focusT=1, the fixed first-vertex-to-image matrix has A=-0.49996424109100923 and B=47.14767632994027 mm.
Thus s=-B/A=94.30209694008478 mm before R1, or 272.8320969400848 mm object-to-image. The summed
close-state track is 178.53 mm versus the source's rounded total 178.54 mm; no gap is adjusted.

Independent exact-ray roots at 0.01/0.005/0.0025 mm first-vertex heights give distances
94.302091198482/94.302095501939/94.302096588782 mm, with axial image residuals below 3.05e-10 mm.
The signed exact magnification approaches -0.499964241056, within 0.0072% of the published -0.5.
The formal infinity finite solution near 679 m is a rounded-table residual, not an additional source state.
Reproduce with `node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --derive-source-states --lens=canon-tse-50f28l-macro`.

Numeric precision supports repeatability, not source accuracy. The published close-state effective F-number
does not replace the physical iris: the existing stop estimate and clear apertures remain unchanged. Source
selection preserves tilt/shift, and active movement still blocks MTF. No prescription geometry, glass or
image plane is altered; qualified spectral matching and existing field-coverage limitations still apply.

## 2026-06-23 - Patent geometry and glass review

### Source note

- The exact cited patent PDF was not present in the untracked local `patents/` folder during this pass, so the official Google Patents PDF was fetched to `tmp/pdfs/US10571651.pdf` for direct review.
- The first patent figure was checked against the data-file layout: front L1/L2 groups, rear L3a/L3b split, aperture stop between L3a and L3b, and image plane order all match.

### Retained-data audit

- Confirmed Numerical Data 1 surface rows 1-22 against the data file: radii, spacings, nd, vd, variable d6/d10, focal length 51.40 mm, F-number 2.88, image height 33.63 mm, total length 153.42 mm, and BF 55.96 mm.
- Confirmed the patent effective-diameter column maps to the stored element semi-diameters by halving the published diameters.
- Retained the authored physical stop semi-diameter. The patent lists a stop effective diameter of 29.80 mm, but the data file intentionally uses the entrance-pupil/F-number solution for the physical stop instead of treating that drawing diameter as the aperture radius.

### Glass audit

- No glass label changes were made. The published nd/vd pairs remain plausible catalog-equivalent assignments for the stored element set.

## 2026-06-25 - Catalog label normalization

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / surface 5 | `glass` | `S-LAM 7 (OHARA)` | `S-LAM7 (OHARA)` | Same patent nd=1.74950 / vd=35.3 row; canonical OHARA catalog token resolves without the embedded space. |
| L4 / surface 7 | `glass` | `S-NBH 5 (OHARA)` | `S-NBH5 (OHARA)` | Same patent nd=1.65412 / vd=39.7 row; canonical OHARA catalog token resolves without the embedded space. |
| L9 / surface 15 | `glass` | `S-NBH 5 (OHARA)` | `S-NBH5 (OHARA)` | Same patent nd=1.65412 / vd=39.7 row; same glass as L4. |
