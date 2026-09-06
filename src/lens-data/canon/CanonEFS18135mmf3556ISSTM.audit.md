# CanonEFS18135mmf3556ISSTM patent audit

## 2026-09-06 UTC

- Source: local `patents/US20130088622A1.pdf`, Example 4, Fig. 13, PDF page 23. Original PDF retained unchanged and untracked.
- Reviewed the exact embodiment at 600 dpi, distinguishing optical rims from brackets, arrows, and mechanical outlines.

### Semi-diameters

Retained published effective-diameter halves, calibrated iris, and S9 11.2826 mm clearance trim. The rotated figure was inspected at 600 dpi. Two automated crops are contaminated by unit brackets and IS arrows and truncate the front height; their extreme ratios are rejected. Manual inspection agrees with the wide front group and narrow rear train; no unsupported aperture substitution was made.

### Glass and identity

Strict catalog coverage: 16/16 before, 16/16 after. All patent nd/vd coordinates are retained. Catalog matches describe spectral proxies, not production supplier identities. No new catalog entry was needed.

Normalized assignee metadata to the catalog spelling `Canon Inc.` where needed. Display names follow the data specification, including hyphenated ranges and parenthetical product-case camera names.

### Validation

`audit:image-circle` and `audit:surface` pass. The full-catalog rendering diagnostics cover hidden SD trims and cross-gap collisions. Static outlines from the production SVG path builder were visually compared with the patent. A five-zoom/three-focus render-diagnostic sweep found no material trims. Browser access was unavailable; no live UI verification is claimed. See the batch record for final repository gates.

## 2026-09-06 UTC — screenshot follow-up

Rechecked Fig. 13 optical rims, preserving the published effective-diameter halves. Replaced artificial C-series callouts with the source L5B / IS subgroup label and shortened the parent L5 label. E2 now carries an inferred UD/APD color tag supported by the 1.49700/81.5 coordinate and Canon's one-UD production count; no supplier identity is asserted.

The Fig. 13 printed L3/L4 labels appear transposed relative to ¶0088 and the numerical table: those define L3 positive before L4 negative. Retained the numerical order and the objectward focus arrow adjacent to the negative singlet; no positive/negative unit swap was made. L4's finite-focus gaps remain explicitly reconstructed. Wide→mid L2 moves 0.70 mm imageward before reversing objectward; all other units move objectward. L3 and L5 share zoom travel.

Surface/image-circle audits and the source-station, dispersion, and render-clearance regressions validate this follow-up; final repository gates are recorded in the batch record.
