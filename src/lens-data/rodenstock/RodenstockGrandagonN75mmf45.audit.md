# Audit Log - Rodenstock Grandagon-N 75mm f/4.5

Patent: DE 2444954 A1, Claim 3 / Example 3

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_2444954_A1.pdf`. The drawing sheet shows the symmetric eight-element Grandagon construction used by the worked examples.
- The patent publishes e-line prescription data but no clear-aperture semi-diameters.
- The stored SDs preserve the figure hierarchy at the 75 mm scale: 21.0 mm at the outer front and rear, 10.2-10.6 mm at the central groups, and an 8.72 mm stop.
- No SD values changed. Current values remain inferred from the patent drawing, ray clearance, and the production 67 mm filter / 60 mm rear-barrel envelope noted in the data file.

### Verification

- `npm test -- elementRenderDiagnostics`

## 2026-07-30 - SK3 catalog recovery

- Verified SUMITA SK3 in the vendor's 2025-11-07 all-glass catalog, including its formula-3 dispersion polynomial and the exact `1.60881 / 58.9` d-line coordinate.
- Relabeled L6 as a SUMITA catalog equivalent while leaving the historical production supplier unspecified.
- The existing patent-derived C/F/g line indices remain stored and independently support the catalog assignment. No prescription geometry changed.

## 2026-08-11 - FEL3 e-line recovery

- Rendered local `patents/DE_2444954_A1.pdf` page 8 and visually confirmed Claim 3's 75 mm prescription lists L4 at
  `ne = 1.5629`, `ve = 46.88`.
- HOYA FEL3's coefficient-backed polynomial evaluates to `ne = 1.56295`, `ve = 46.79`, reproducing the native e-line
  pair more directly than the prior unmatched short-flint class label.
- Relabeled L4 as an FEL3 catalog equivalent while leaving the historical production supplier unspecified. No
  prescription or semi-diameter values changed.
