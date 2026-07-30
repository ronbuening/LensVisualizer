# Audit Log - Nikon Ultra-Micro-NIKKOR 29.5mm f/1.2

Patent: GB 1,050,055, Example 1

## 2026-07-29 - Catalog-mismatch review

- Confirmed that the prescription stores the patent's e-line index for L4: `ne=1.69402`, `vd=31.2`.
- The SF8-class identification remains materially sound: coefficient-backed SCHOTT N-SF8 evaluates to
  approximately `ne=1.69413`, while its catalog d-line index is `nd=1.68894`.
- Added an explicit `Unmatched` marker so the resolver does not compare the stored e-line value against the catalog
  d-line value or apply a d-line Sellmeier row to this e-line-authored prescription.
- No prescription, semi-diameter, or optical-layout values changed.

## 2026-07-29 - Remaining e-line mismatch disposition

- Rechecked Example 1 in local `patents/GB_1050055_A.pdf`; stored R, d, ne, and νe remain unchanged.
- S3 `F5 class` -> explicit unmatched F5-class e-line flint at 1.60752 / 38.10.
- S7 `LAK9 / S-LAL9 class` -> explicit unmatched LAK9-class e-line lanthanum crown at 1.69451 / 54.80.
- F5 and S-LAL9 remain d-line family comparisons only. Synchronized the companion analysis.

## 2026-07-30 - F8 e-line safeguard

- Rechecked L7 alongside the newly catalog-resolved d-line F8-class rows elsewhere in the corpus.
- Retained L7 on the Abbe path and added an explicit `Unmatched` marker because its stored `ne=1.59865` is an e-line
  prescription value; applying HOYA E-F8's d-line polynomial would mix reference wavelengths.
- Synchronized the analysis. No prescription geometry or authored optical constants changed.

## 2026-07-30 - Reference-line metadata

- Added `indexReference: "e"` to all nine elements because the stored `nd` / `vd` slots preserve patent
  `ne` / `νe` values.
- The runtime and generated reports now reject d-line catalog substitution structurally rather than relying on annotation wording.
- No source values or prescription geometry changed.
