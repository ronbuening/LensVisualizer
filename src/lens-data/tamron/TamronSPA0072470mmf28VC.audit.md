# Audit Log — TAMRON SP 24-70mm f/2.8 Di VC USD

Patent: US 8,810,918 B2, Example 4

## 2026-08-10 — Patent-figure semi-diameter and glass audit

- Reviewed Figure 22 on PDF page 23 at 300 dpi. The stored group envelopes and relative taper agree
  with the drawing within roughly 20%; no SD change had strong enough evidence to justify replacing
  the validated geometry.
- `npm run audit:image-circle` reports zero undersized surfaces, and the stored geometry passes
  `npm run audit:surface`.
- Added first-party HOYA coefficient rows for discontinued TAF3 and molded M-PCD4. L2, L3, and L8
  move from the Abbe fallback to strict catalog dispersion. The unidentified hybrid asphere layer is
  the only remaining unmatched medium, so coverage rises from 14/18 to 17/18.
