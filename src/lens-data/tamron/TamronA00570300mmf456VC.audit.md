# Audit Log — TAMRON SP 70-300mm f/4-5.6 Di VC USD

Patent: US 8,228,605 B2, Example 2

## 2026-08-10 — Patent-figure semi-diameter and glass audit

- Reviewed Figure 12 on PDF page 13 at 300 dpi. The front-group, variator, VC, and rear-group
  envelopes agree with the modeled taper within the drawing's measurement uncertainty; no SD
  change had sufficiently strong figure evidence.
- `npm run audit:image-circle` reports zero undersized surfaces, and the stored geometry passes
  `npm run audit:surface`.
- Added the official HOYA MC-FCD1-M20 coefficient row for the `497815` class used by L110. SUMITA
  K-PFK80 remains the exact-coordinate cross-check; neither name is treated as production-supplier
  evidence. The prescription is now 17/17 strict Sellmeier-covered.
