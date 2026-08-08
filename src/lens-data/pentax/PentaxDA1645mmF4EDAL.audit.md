# Audit Log - PENTAX SMC DA 16-45mm f/4 ED AL

Patent: US 7,106,520 B2, Embodiment 8

## 2026-08-08 - Screenshot-driven diagram follow-up

- Rechecked the supplied site screenshot against a 250 dpi render of Figure 29. Unlike the earlier leader-sensitive
  automated envelope, the enclosed glass regions show L11-L14 at essentially the same outer height.
- Reduced L11 surface 1 from `22.5` to `17.0` mm while retaining surface 2 at `16.1` mm. This removes the unsupported
  front-rim flare visible on the site; the surface validator passes, modeled f-number is unchanged, and the largest
  available-half-field change is only `0.134°` across the four published zoom samples.
- Added patent identifiers `L11-L43` as diagram labels, with distinct `L41r` and `L41g` labels for the separately
  modeled resin layer and glass substrate.
- Rechecked the visible glass tags, doublet/hybrid labels, group signs, stop, pupils, image-plane marker, display name,
  and headline specifications. The official product spelling remains normalized to the catalog's house style.
- Retained 12 coefficient-backed material curves, the explicitly unmatched L13 coordinate, and the L41 resin model;
  neither unresolved medium has a defensible public glass-catalog identity.
- Local viewer QA confirmed the new labels and corrected L11 silhouette without diagram errors.
- `npm run generate:glass-reports` passed (8 files, 14 tests); the surface and image-circle audits, typecheck, format
  check, lint, 2,947-test suite, and production build also passed (1,052 routes prerendered).

## 2026-08-08 - Integration, semi-diameter, identity, and glass audit

- Reviewed Figure 29 on PDF page 16 of the ignored local patent source.
- Retained the authored semi-diameters. Figure leaders contaminate the automated envelope, while the high-resolution
  section shows no relative element-height deviation large enough to justify changing the validated ray-envelope model.
- Normalized the display name from the duplicated `PENTAX SMC PENTAX-DA` form to `PENTAX SMC DA`.
- Confirmed coefficient-backed catalog dispersion for 12 of 14 materials. L13 remains explicitly unmatched and the
  L41 hybrid layer remains resin; neither has a defensible public glass-catalog coefficient assignment.
- `npm run audit:image-circle -- src/lens-data/pentax/PentaxDA1645mmF4EDAL.data.ts` passed.
- `npm run generate:glass-reports` passed (8 files, 14 tests).
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` passed (2,947 tests).
- `npm run build` passed; 1,052 routes prerendered.
