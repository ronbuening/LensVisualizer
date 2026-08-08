# Audit Log - PENTAX-02 STANDARD ZOOM 5-15mm f/2.8-4.5

Patent: US 8,824,059 B2, Numerical Embodiment 1

## 2026-08-08 - Screenshot-driven diagram follow-up

- Compared the supplied site screenshot against a 250 dpi render of Figure 1. The hybrid front stack, L12/L13 taper,
  focusing element, and nearly equal-height rear elements agree with the patent section; no SD change was justified.
- Added patent identifiers as diagram labels, including distinct `L11g` and `L11r` labels for the separately modeled
  glass substrate and compound-resin layer.
- Rechecked the visible glass tags, hybrid/doublet labels, group signs, stop, pupils, image-plane marker, official
  hyphenated display name, and headline specifications.
- Retained five coefficient-backed materials, the correctly classified resin layer, and three explicit unmatched
  coordinate rows. No unresolved row has a unique public catalog match.
- Local viewer QA confirmed all nine material labels, including the hybrid pair, without diagram errors.
- `npm run generate:glass-reports` passed (8 files, 14 tests); the image-circle audit, typecheck, format check, lint,
  2,947-test suite, and production build also passed (1,052 routes prerendered).

## 2026-08-08 - Integration, semi-diameter, identity, and glass audit

- Reviewed Figure 1 on PDF page 2 of the ignored local patent source.
- Retained the authored semi-diameters. The closely spaced hybrid front element and figure annotations make several
  automated rim measurements unreliable, while visual comparison shows no defensible shape-level outlier beyond the
  audit tolerance.
- Corrected the display name from `PENTAX 02` to the manufacturer form `PENTAX-02`.
- Confirmed coefficient-backed catalog dispersion for five of nine materials. The compound resin and the three
  explicitly unmatched patent coordinates remain on the Abbe fallback because no unique public coefficient source
  supports a stronger classification.
- `npm run audit:image-circle -- src/lens-data/pentax/Pentax02StandardZoom515mmF2845.data.ts` passed.
- `npm run generate:glass-reports` passed (8 files, 14 tests).
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` passed (2,947 tests).
- `npm run build` passed; 1,052 routes prerendered.
