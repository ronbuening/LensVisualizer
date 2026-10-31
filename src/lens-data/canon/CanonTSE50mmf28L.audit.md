# Audit Log - Canon TS-E 50mm f/2.8L Macro

Patent: US 10,571,651 B2, Numerical Data 1 (Sakai / Canon)

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

| Element / surface | Field   | Before            | After            | Justification                                                                                            |
| ----------------- | ------- | ----------------- | ---------------- | -------------------------------------------------------------------------------------------------------- |
| L3 / surface 5    | `glass` | `S-LAM 7 (OHARA)` | `S-LAM7 (OHARA)` | Same patent nd=1.74950 / vd=35.3 row; canonical OHARA catalog token resolves without the embedded space. |
| L4 / surface 7    | `glass` | `S-NBH 5 (OHARA)` | `S-NBH5 (OHARA)` | Same patent nd=1.65412 / vd=39.7 row; canonical OHARA catalog token resolves without the embedded space. |
| L9 / surface 15   | `glass` | `S-NBH 5 (OHARA)` | `S-NBH5 (OHARA)` | Same patent nd=1.65412 / vd=39.7 row; same glass as L4.                                                  |

## 2026-10-30 - Local original shape and glass review

The original `patents/US_10571651_B2.pdf` was inspected directly: front page PDFp1; Numerical Data1 and d-line definitions p17 (printedcols11–12); source plot wavelengths d587.56/g435.8 p14; focus/movement text p16; Table1 p18 (col14); Figures1/2A/2B pp3–4. Native scan2560×3300 bilevel300ppi; no upsampled image is treated as new detail. Figure1 glass span1006px/97.46mm gives10.32px/mm, vertical about3% larger; endpoint uncertainty±2–3px≈±.19–.29mm plus schematic calibration.

All12 elements, concave free-air ends and cemented interfaces S12/S15/S19 were checked. Preserve all source R/d/media/clear Φ/2 caps/stop/gaps; no aspheres, hybrid layers, rear plates or source filters occur. Six resolved free-air shoulders preserve clear sd and use outer cap heights S2:24.8,S8:19.4,S10:16,S16:12.75,S18:10.5,S21:13.55mm. These adopt corresponding blank caps rather than claim subpixel measurement. No bonded opaque lands, equal-height interface blocks or concave-end cuts are introduced. Full-curve growth and source clear-cap increases merely to rectangularize schematic blanks were rejected. Actual SVGs retain connected finite closed paths and zero hidden trim (780centered/900moved paths); native bonded silhouettes remain only approximately reproduced.

All12 source nd/νd pairs remain; d provenance is explicit. No individual line indices/partial ratios/APD values are printed and no per-lens spectral overrides existed. All12 existing curves are unchanged qualified OHARA proxies, including approximate S-PHM52 sourceν63.4/catalog63.33. Labels and analysis no longer claim historical vendor, melt or chemistry; production UD association stays inferred. June23/June25 dates above remain historical, not fresh source checks.

Printed infinity F2.88 independently appears tablep17/Fig2Ap4. Corrected nominal/menu2.8→2.88 gives inferred iris10.001852958→9.724023709mm; focal design metadata51.397→printed51.40. R/d/cams remain unchanged. Source near tableF4.0 contradicts Fig2BF2.9; fixed-iris policy is retained and discrepancy structured in source.errata. Near total178.54 vs literal178.53mm and Table1 ratios4.491/3.004 vs4.436/2.985 remain unresolved; no prescription fitting.

65focus×8aperture checks:464traced/56vignetted real workingF results; infinitywide-open2.897343. Collimated current-iris grids clear12,545/12,545axial rays, but they do not represent finite objects. Separate49-point actual Gaussian conjugate grid65states clears2,961/3,185axial rays,0aim failures. Literal source near state givesβ−.49996424, inferred object-to-image272.832097mm;4/49axial rays clipS18. Ghost reach9.036130atS18/9.683628atS19 exceeds printed8.8/9.3; retain printed clear apertures, not beam-fit. Midpoint Gaussian365.840815mm is illustrative. Nearparaxial-object fields45/33/25of49; fractions are not inverse-solved actual sensor corners.

Centered generic21.65mm field coverage100%; source33.2° bounding-vector chief clears at33.353096mm versus source33.63, not proof of full-pupil coverage.75movement poses (3focus×5shift×5tilt)×5actualsensor targets×193pupils:351usable/24outside-domainfields,0unresolvedchiefs/unaimed,49,999physicalclear/17,344clipped/400noBracket failures; separately22,615sensorusable/17,344clipped/27,784missed-sensor. Movement uses collimated scene directions through focus-adjusted geometry, not actual finite moved illumination. Existing rear-vertex fallback hinge is unmeasured and cannot certify production tilt/shift limits.

Narrow surface/image-circle/infinity-aperture/full-frame-field gates pass. No cuts require a cut probe. Source fidelity, finite macro clipping, sampled movement clearance and production association are separate conclusions. Scratch evidence is not committed.

## 2026-10-31 — Source reference contract follow-up

The local original `patents/US_10571651_B2.pdf` was reread for reference provenance and the selected media, separately from the complete 2026-10-30 shape and glass review. PDF p. 17, printed column 11, explicitly defines numerical `nd` and `vd` for the d-line and prints all twelve Numerical Data 1 pairs. PDF p. 14, printed column 5, gives plot wavelengths d 587.56 nm and g 435.8 nm. No individual C/F/g indices or partial ratios are published. Figure 1 on PDF p. 3 was inspected in its native 2560 × 3300, 300 ppi scan to confirm element and bonded-interface correspondence; this was a relevant-geometry check, not a repeated whole-shape review or a new rim measurement. The 180 dpi definition/table renders do not add native scan detail.

All twelve existing `indexReferenceNote` strings contained the same positive source citation, with no actual reference uncertainty. The citation moves to the data header and this record so the inspector correctly labels the verified d-line coordinates as `nd`/`νd`. The twelve source pairs, twelve qualified catalog curve identities and all chromatic R/G/B/V channels remain exactly unchanged. No supplier, melt, chemistry or production identity is inferred. All prescription, clear-cap, shoulder, stop, focus and movement fields remain identical. The source near-f-number contradiction, finite macro clipping, inferred iris and moved-optics limits in the October 30 review remain in force; no new clearance or production claim is made. The June 23/25 and October 30 review dates are retained. This is a source-reference contract correction with zero new whole-lens review count.
