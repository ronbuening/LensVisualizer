# Audit Log - Nikon Ultra-Micro-NIKKOR 29.5mm f/1.2

Patent: GB 1,050,055, Example 1

## 2026-07-29 - Catalog-mismatch review

- Confirmed that the prescription stores the patent's e-line index for L4: `ne=1.69402`, `vd=31.2`.
- The SF8-class identification remains materially sound: coefficient-backed SCHOTT N-SF8 evaluates to
  approximately `ne=1.69413`, while its catalog d-line index is `nd=1.68894`.
- Added an explicit `Unmatched` marker so the resolver does not compare the stored e-line value against the catalog
  d-line value or apply a d-line Sellmeier row to this e-line-authored prescription.
- No prescription, semi-diameter, or optical-layout values changed.
