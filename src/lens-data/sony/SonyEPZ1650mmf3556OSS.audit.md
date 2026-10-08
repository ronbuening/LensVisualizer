# Audit Log — SONY E PZ 16-50mm f/3.5-5.6 OSS

Patent: US 2015/0316753 A9, Example 1

## 2026-08-11 — Figure SD and glass-coverage audit

### Semi-diameters

The image-circle audit reported zero undersized surfaces. Figure 1 at 300 dpi showed one material silhouette mismatch:
L1's approximately 12.5 mm drawn envelope was larger than the initial ray-envelope estimate. The rear asphere could not
reach the full drawn height without exceeding the rim-slope validator, so the pair was enlarged to the largest safe
same-element envelope.

| Surface | Before | After | Evidence |
|---|---:|---:|---|
| 1 | 9.9 mm | 12.2 mm | Figure 1 hand measurement; preserves the authored front/rear ratio |
| 2A | 9.6 mm | 11.8 mm | Figure 1; capped below the 12.1 mm rim-slope failure |

All other elements were within the figure-screening tolerance or contaminated by leader lines and were retained.

### Glass classification

L9's `806407` coordinate is the coefficient-backed HOYA NBFD13 optical family. The existing M-NBFD130 and MP-NBFD130
aliases route to the same NBFD13 curve, so the physical-form suffix is not a spectral blocker. L9 changed from explicit
`Unmatched` to a supplier-unresolved family annotation and gained catalog nC/nF/ng/dPgF values. No new catalog entry was
needed.

### Identity

The display name was checked against Sony model SELP1650 and retained as `SONY E PZ 16-50mm f/3.5-5.6 OSS`.

## 2026-08-12 — Display screenshot follow-up

The rendered site screenshot was compared directly with Patent Figure 1. The revised L1/L2 envelope, the four-group
profile, and the rear-element taper follow the source drawing closely; no additional SD change had clean figure evidence.
The six aspherical-surface tags, the L4/L5 cement label, the stop, and all four moving-group labels were also confirmed.

The diagram now uses the patent element identifiers L1–L9 instead of generic sequence numbers. All nine elements still
resolve to coefficient-backed catalog curves, including L9's supplier-unresolved NBFD13 family, so no new catalog glass
or speculative vendor attribution was added.

## 2026-10-08 - dPgF moved to the engine's normal line

The engine rebuilds `ng` from `dPgF` as a deviation from `0.6438 - 0.001682·νd`, so `dPgF` must be `P_g,F` minus that
line (`LENS_DATA_SPEC.md`, "If the source defines a different normal line").

**Patent formula:** none. The text layer of local `patents/US20150316753A9.pdf` (71 pages) was searched in full and
PDF pages 58-59 were read as rendered pages. ¶0151 (PDF page 58, printed page 6) defines only `N`, the d-line index,
and `ν`, the Abbe number; Table 1 (PDF page 59, printed page 7) prints `R`, `D`, `N` and `ν` and nothing else. No table
carries a `P_g,F` / `θgF` column or a deviation, the patent defines no normal line, and conditional expressions (1)-(4)
(Table 25, PDF page 68) are focal-length and radius ratios.

**Source of each value:** all nine elements author `nC`, `nF` and `ng` (HOYA catalog line indices; L9's were added in
the 2026-08-11 audit), so the trace uses those indices and ignores `dPgF`; the field is an annotation. With no patent figure, each
value is the `P_g,F` of the element's own `nC/nF/ng` minus the engine's line at the stored `νd`. Six decimals are the
arithmetic of five-decimal indices; the `P_g,F` itself is only good to about 0.001-0.002 on the low-dispersion glasses.

| Element | `νd` | Source figure: `P_g,F` of authored `nC/nF/ng` | Stored before | Stored after |
|---|---:|---:|---:|---:|
| L1 | 40.80 | 0.565619 | -0.0093 | -0.0093 (unchanged) |
| L2 | 19.32 | 0.645155 | +0.0316 | +0.033851 |
| L3 | 53.20 | 0.546779 | -0.0059 | -0.007538 |
| L4 | 81.61 | 0.538588 | +0.0374 | +0.032056 |
| L5 | 37.34 | 0.579042 | -0.0021 | -0.0021 (unchanged) |
| L6 | 70.44 | 0.530347 | +0.0090 | +0.005027 |
| L7 | 70.44 | 0.530347 | +0.0090 | +0.005027 |
| L8 | 55.46 | 0.542994 | -0.0060 | -0.007523 |
| L9 | 40.73 | 0.566953 | -0.0059 | -0.008339 |

The earlier L1-L8 values were deviations from `0.64833 - 0.0018·νd`: read on that line they return `P_g,F` 0.5656,
0.6452, 0.5467, 0.5388, 0.5790, 0.5305 and 0.5425, each within 0.0005 of the element's own line indices. That line is
not the patent's and not the engine's.

L9 is a separate case, not a normal-line defect. Its earlier -0.0059 fits its own line indices on neither line: it means
`P_g,F` 0.5694 on the engine's line and 0.5691 on `0.64833 - 0.0018·νd`, against 0.5670 from the authored indices. It
equals the engine-line value of the M-NBFD130 curve the glass label now resolves to (`P_g,F` 0.5694, -0.005916), while
the authored line indices are the NBFD13 row (`P_g,F` 0.5670). The annotation now follows the indices the trace uses.

**Left unchanged:** L1 (-0.0093 against -0.009555) and L5 (-0.0021 against -0.001952) already agree with their line
indices within 0.0003 and keep their four-decimal values. No element is e-line referenced and no label failed to
resolve. `nd`, `νd`, `nC`, `nF`, `ng`, glass labels and surfaces were not touched; the lens still builds and validates.
