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

### Rendered-diagram follow-up

- Compared the site rendering with Figure 12. No additional SD adjustment clears the required
  figure-evidence threshold; the modeled group envelopes remain consistent with the patent.
- Restored the patent's 101-118 element numbering (with diaphragm position 108 omitted) and the
  nested rear-group identifiers 141, 142, and 143. This removes duplicated group prose and reduces
  annotation collisions without changing optical geometry.
- Rechecked every medium: all 17 remain coefficient-backed. Coordinate-class labels stay
  supplier-neutral where the patent does not identify a production glass maker.
