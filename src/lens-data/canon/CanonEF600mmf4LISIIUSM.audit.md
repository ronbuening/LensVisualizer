# Audit Log - CANON EF 600mm f/4 L IS II USM

Patent: US 2011/0090576 A1, Third Numerical Embodiment / Figure 5

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 4, Figure 5, at 600 dpi:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonEF600mmf4LISIIUSM.data.ts patents/US20110090576A1.pdf 4 0.18,0.24,0.70,0.46 --dpi=600`.
- Reliable front optical rims reproduce the patent's tabulated effective diameters: L11 is about 73.45 mm versus
  72.845 mm, L12 is 59.83 mm versus 59.735 mm, L13 is 59.11 mm versus 58.48 mm, and L15 is 41.58 mm versus
  40.385 mm.
- Labels, unit brackets, and the separate rear `G` plate contaminate automated rear measurements. The authored SDs are
  direct halves of the patent's effective-diameter column and remain stronger evidence than those rows.
- Retained all surface and stop semi-diameters. The image-circle floor reports zero undersized surfaces and the surface
  validator reports no geometry errors.

### Glass classification

- Replaced three closed `Unmatched` annotations with vendor-neutral patent coordinate classes: two `835427` elements
  and one `720502` element.
- Existing S-LAH55 and S-LAL10 coefficient-backed curves are coordinate-compatible modeling equivalents. The patent's
  authored `dPgF` values remain authoritative, so no production supplier or exact melt identity is inferred.
- The lens improves from 12/15 to 15/15 strict Sellmeier and trusted-chromatic coverage with no coordinate mismatch.

### Identity and metadata

- Verified the display name `CANON EF 600mm f/4 L IS II USM` against Canon's official product identity and the
  repository's spacing policy.
- Normalized the structured assignee and subtitle to the repository-wide `Canon Inc.` spelling; the analysis retains the
  patent's printed Canon Kabushiki Kaisha wording.

## 2026-08-21 - Diagram-label and movement follow-up

### Patent-figure review

- Re-inspected Figure 5 at 600 dpi against the site screenshot. The authored semi-diameters remain direct halves of the
  patent's effective-diameter column and are stronger evidence than contaminated figure rows, so no SD changed.
- Replaced numeric element tags with the patent's L11–L25 identifiers, using `a`/`b` only to distinguish physical members
  of cemented patent groups.

### Focus annotation root cause

- The prescription's infinity-to-close gap order was correct, but the diagram's single `LF` annotation combined fixed
  L11–L15 with moving L16. Movement analysis therefore averaged the two and displayed only half the real shift.
- Split the display spans into fixed LF, imageward-moving `L16 FOCUS (−)`, and fixed LR. L16 now reports its full
  +20.112105825 mm imageward translation. This prime lens has no zoom travel.

## 2026-10-04 — Drop-in filter drawn as an element

- Patent check (US 2011/0090576 A1, Third Numerical Embodiment): rows 28–29 tabulate glass block G as two flat
  surfaces, 2.00 mm thick, nd 1.51633, νd 64.1, θgF 0.5352, X −0.0007, effective diameter 31.00 mm, 12.00 mm behind
  row 27. The description calls G "a glass block, such as an optical filter or a faceplate" and defines back focus
  with it absent.
- The file had omitted G and carried the 121.13 mm plate-absent back focus on surface 27. G is now drawn: surfaces
  28–29 and element 16 (`Plane-Parallel Plate`). Surface 27 keeps the patent's 12.00 mm, and
  121.13 − 12.00 − 2.00/1.51633 = 107.811026 mm of air follows the plate. The authored track is 475.591 mm against the
  patent's Lt = 475.58 mm.
- Semi-diameter: half the patent's effective diameter (15.5 mm) would narrow the half-field from 4.19° to 4.05°. The
  plate instead takes 18.0 mm, a ray-trace estimate: the largest height on the plate of any ray that reaches the 135
  format or the diagram's off-axis field at infinity, mid and close focus (16.83 mm), plus 5%, rounded up to 0.5 mm.
  Not figure-audited.
- Before/after check: EFL, stop radius, paraxial focus, analysis half-field and the vignetting curve are unchanged.

## 2026-10-08 - dPgF checked against the patent

- Reviewed local `patents/US20110090576A1-2.pdf` (US 2011/0090576 A1, 11 pages; byte-identical to
  `patents/US20110090576A1.pdf`).
- Patent formula: paragraph [0022] on PDF page 7 (printed page 2) calls a material anomalous when
  θgF − 0.6438 + 0.001682·νd > 0.02. Conditions (2) on PDF page 7 and (2a), (4), (4a), (6), (6a) on PDF page 8, and the
  claims on PDF page 11, use the same line. The Third Numerical Embodiment table on PDF page 10 (printed page 5,
  paragraph [0060]) prints both an absolute θgF column and an X column, with the footnote
  "X = θgF − (0.6438 − 0.001682 × vd)". That is the engine's own normal line, 0.6438 − 0.001682·νd, so the patent's
  deviation X and the runtime `dPgF` are the same quantity.
- A screen that compares stored values with catalog curves flagged this file. It is a false alarm. The coefficient-backed
  stand-in curves differ from the patent's printed θgF (S-LAL10 0.5521 against 0.5535 for L22b, J-LASF05 0.5648 against
  0.5636 for L13/L16b, CaF2 0.5387 against 0.5373 for L12/L14), and for L22b that difference happens to equal the offset
  of a 0.64833 − 0.0018·νd line. The patent's printed figures decide, and every stored value already sits on the engine's
  line. No `dPgF`, `apdNote` or comment changed in the data file, and the analysis sidecar needed no edit.

| Element | νd | Source figure (PDF page 10) | θgF − engine line | Stored before | Stored after |
| --- | ---: | --- | ---: | ---: | ---: |
| L11 | 70.2 | row 1: θgF 0.5300, X 0.0043 | +0.004276 | 0.0043 | 0.0043 (unchanged) |
| L12 | 95.1 | row 3: θgF 0.5373, X 0.0534 | +0.053458 | 0.0534 | 0.0534 (unchanged) |
| L13 | 42.7 | row 5: θgF 0.5636, X −0.0083 | −0.008379 | −0.0083 | −0.0083 (unchanged) |
| L14 | 95.1 | row 7: θgF 0.5373, X 0.0534 | +0.053458 | 0.0534 | 0.0534 (unchanged) |
| L15 | 70.2 | row 9: θgF 0.5300, X 0.0043 | +0.004276 | 0.0043 | 0.0043 (unchanged) |
| L16a | 25.4 | row 11: θgF 0.6161, X 0.0150 | +0.015023 | 0.015 | 0.015 (unchanged) |
| L16b | 42.7 | row 12: θgF 0.5636, X −0.0083 | −0.008379 | −0.0083 | −0.0083 (unchanged) |
| L21a | 37.2 | row 15: θgF 0.5775, X −0.0038 | −0.003730 | −0.0038 | −0.0038 (unchanged) |
| L21b | 49.3 | row 16: θgF 0.5530, X −0.0078 | −0.007877 | −0.0078 | −0.0078 (unchanged) |
| L22a | 23.8 | row 18: θgF 0.6205, X 0.0167 | +0.016732 | 0.0167 | 0.0167 (unchanged) |
| L22b | 50.2 | row 19: θgF 0.5535, X −0.0058 | −0.005864 | −0.0058 | −0.0058 (unchanged) |
| L23 | 37.2 | row 21: θgF 0.5775, X −0.0038 | −0.003730 | −0.0038 | −0.0038 (unchanged) |
| L24 | 23.8 | row 23: θgF 0.6205, X 0.0167 | +0.016732 | 0.0167 | 0.0167 (unchanged) |
| L25a | 35.3 | row 25: θgF 0.5818, X −0.0026 | −0.002625 | −0.0026 | −0.0026 (unchanged) |
| L25b | 18.9 | row 26: θgF 0.6495, X 0.0375 | +0.037490 | 0.0375 | 0.0375 (unchanged) |
| G | 64.1 | row 28: θgF 0.5352, X −0.0007 | −0.000784 | −0.0007 | −0.0007 (unchanged) |

- Left as stored: all sixteen values. Each equals the patent's printed X, and each is within 0.0003 of the printed θgF
  minus the engine's line (largest gap 0.000084, plate G), so none was re-rounded to six decimals. The residual gaps are
  the patent's own four-decimal printing of θgF and X.
- Table 1 on PDF page 11 repeats the condition values for this embodiment: (2) 0.0534 for L12 and L14, (4) 0.0375 for
  the L25 negative, and (6) −0.003 for the L25 positive, the last a three-decimal print of the X column's −0.0026.
