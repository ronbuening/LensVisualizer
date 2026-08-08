# Audit Log - PENTAX-06 TELEPHOTO ZOOM 15-45mm f/2.8

Patent: US 9,784,950 B2, Numerical Embodiment 1

## 2026-08-08 - Screenshot-driven diagram follow-up

- Rechecked the supplied site screenshot against a 250 dpi render of Figure 1. The clean enclosed regions show the
  final L44/L45 pair slightly taller than the preceding G4a elements; the site instead rendered it materially smaller.
- Enlarged surfaces 22/23 from `4.5/4.4` to `5.2/5.1` mm and surfaces 24/25 from `4.0/4.2` to `5.1/5.2` mm. The surface
  validator passes, modeled f-number is unchanged, and the less restrictive rear clear aperture increases available
  half-field at all three zoom samples.
- Added patent identifiers `L11-L45` as diagram labels instead of exposing internal numeric element IDs.
- Rechecked the visible glass tags, doublet labels, group signs, stop, pupils, image-plane marker, official hyphenated
  display name, and headline specifications. All 14 elements retain exact, coefficient-backed OHARA identities.
- Local viewer QA confirmed all 14 element labels and the corrected rear-group silhouette without diagram errors.
- `npm run generate:glass-reports` passed (8 files, 14 tests); the surface and image-circle audits, typecheck, format
  check, lint, 2,947-test suite, and production build also passed (1,052 routes prerendered).

## 2026-08-08 - Integration, semi-diameter, identity, and glass audit

- Reviewed Figure 1 on PDF page 3 of the ignored local patent source.
- Retained the authored semi-diameters. The measured and visually inspected group proportions remain within the audit
  tolerance, and the front cemented stack's leader lines do not support a more precise change.
- Confirmed the official `PENTAX-06 TELEPHOTO ZOOM` display name.
- Normalized the structured patent assignee from all caps to `Ricoh Imaging Company, Ltd.`, resolving the metadata
  convention test failure.
- Confirmed coefficient-backed catalog dispersion on all 14 glass elements; no new glass row is required.
- `npm run audit:image-circle -- src/lens-data/pentax/Pentax06TelephotoZoom1545mmF28.data.ts` passed.
- `npm run generate:glass-reports` passed (8 files, 14 tests).
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` passed (2,947 tests).
- `npm run build` passed; 1,052 routes prerendered.
