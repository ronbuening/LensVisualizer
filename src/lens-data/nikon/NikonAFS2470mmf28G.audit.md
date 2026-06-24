# Nikon AF-S NIKKOR 24-70mm f/2.8G ED Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US7508592.pdf`, Example 2 / Table 2 and FIG. 3.

### Prescription, Zoom, And Focus

- The data file remains aligned to Example 2: `f = 24.78 / 51.92 / 67.70 mm`, `FNO = 2.91`, and `2ω = 82.2° / 35.4°`.
- Table 2 variable gaps confirm the stored infinity zoom sequence for `d6`, `d12`, `d14`, `d20`, and `d25`.
- The patent describes focusing by moving front sub-group G2a toward the image side, but it does not publish close-focus variable gaps. The current close-focus values remain paraxial visualization estimates tied to Nikon's published close-focus behavior.

### Glass And APD

- Rechecked the two unresolved missing-Sellmeier rows:
  - L1 / S1: `nd=1.744429`, `νd=49.52`, now labeled `744495`.
  - L4 resin / S7: `nd=1.55389`, `νd=38.09`, now labeled `553381`.
- No coefficient-backed exact public catalog match was verified for L1. It remains an unmatched high-index lanthanum-crown-class row.
- The L4 resin shell is an optical replication layer, not catalog glass; it should remain an explicit resin/code annotation rather than be forced into a glass catalog name.
- The three ED rows at `nd=1.497820`, `νd=82.56` remain catalog-identified as HIKARI J-FKH1. Their `apd: "inferred"` status is still correct because the patent gives only `nd`/`νd`; any `nC`, `nF`, `ng`, or `dPgF` values come from the catalog match, not from US 7,508,592 itself.
- The patent has no `θgF`, `Pg,F`, `dPgF`, `nC`, `nF`, or `ng` tables for Example 2.

### Semi-Diameters

- US 7,508,592 does not publish per-surface clear apertures or effective diameters for Example 2.
- Current SDs remain renderer clear-aperture estimates. They make rational optical sense against FIG. 3: a large wide-angle front group, a reduced stop-adjacent G3, and a rear re-expansion through G4/G5 while keeping the hybrid-asphere and rear asphere within safe sag/slope limits.

### Verification

- Pending batch verification after the current Nikon audit pass.
