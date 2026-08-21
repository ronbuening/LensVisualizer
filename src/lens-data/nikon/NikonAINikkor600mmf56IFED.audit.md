# Audit Log — NIKON AI NIKKOR 600mm f/5.6 IF-ED

Patent: JP1981-035116, Example 1 / Figure 1

## 2026-08-21 — Screenshot, patent-figure, diagram-metadata, and glass audit

### Phase 1 — Glass corrections

| Elements | Before | After | Justification |
|---|---|---|---|
| L1, L2 | J-FKH1-compatible proxies | explicit `J-FKH1 catalog equivalent` + inferred ED tags | The equal `1.50032 / 81.9` front pair is the strongest position-level correlation to Nikon's ED product designation; the patent publishes `nd/νd` only. |
| L3 | generic 750350 lanthanum-flint class | `H-LaF4 catalog equivalent` | Closest compatible coefficient curve; production supplier remains unspecified. |
| L4 | generic 699300 SF15 class | `SF15 catalog equivalent` | Only compatible coefficient curve inside the runtime guard. |
| L5 | generic 517642 BK7 class | `H-K9L catalog equivalent` | Explicit coordinate-compatible curve selected deterministically; production supplier remains unspecified. |
| L6 | generic 697556 lanthanum-crown class | `K-LaK14 catalog equivalent` | Only compatible coefficient curve inside the runtime guard. |
| L7 | J-PKH1-compatible proxy | explicit `J-PKH1 catalog equivalent` | Qualified curve for the documented corrected coordinate; no historical melt identity is claimed. |

### Phase 2 — Retained-information and semi-diameter audit

- Rendered the untracked local `patents/JPA 1981119109-000000.pdf` at 600 dpi and compared PDF page 3 / Figure 1 with the supplied site screenshot.
- Retained all semi-diameters. The model preserves the patent's large front group, narrowed internal-focus group, and compact rear positive element. The automated L2/L7 under-reads were caused by thin-rim and annotation interference rather than reliable optical outlines.
- `audit:surface` passes with no validation errors, and `audit:image-circle` reports zero undersized surfaces.

### Phase 3 — Diagram and movement metadata

- Added `L1`–`L7` diagram labels, inferred ED tags on the two high-Abbe front elements, and the source-facing `L4+L5` cemented-pair caption.
- Shortened the functional group captions to `G1`, `G2 FOCUS`, and `G3` so the site diagram remains legible while preserving the patent-derived power signs.
- Verified fixed-focal operation: there is no zoom travel. G2 alone moves `+10.425804 mm` imageward (rearward) from infinity to the constrained 5.5 m endpoint; G1 and G3 remain fixed.

### Phase 4 — Analysis sync

- Synchronized the explicit qualified glass labels, ED-position caveat, and unambiguous imageward/rearward focus wording in the companion analysis.

### Verification

- `npm run audit:surface -- src/lens-data/nikon/NikonAINikkor600mmf56IFED.data.ts` — passed.
- `npm run audit:image-circle -- src/lens-data/nikon/NikonAINikkor600mmf56IFED.data.ts` — 0 undersized.
- `npm run generate:glass-reports` — passed; Sellmeier coverage remains 7/7.
- Full repository checks are recorded in the integrating commit.
