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

## 2026-08-08 - Integration, semi-diameter, identity, and glass audit

- Reviewed Figure 1 on PDF page 3 of the ignored local patent source.
- Retained the authored semi-diameters. The measured and visually inspected group proportions remain within the audit
  tolerance, and the front cemented stack's leader lines do not support a more precise change.
- Confirmed the official `PENTAX-06 TELEPHOTO ZOOM` display name.
- Normalized the structured patent assignee from all caps to `Ricoh Imaging Company, Ltd.`, resolving the metadata
  convention test failure.
- Confirmed coefficient-backed catalog dispersion on all 14 glass elements; no new glass row is required.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-25 gap with the physical rear stack from Table 1 / Table 2 (PDF p. 33): optical
  filter OP (surfaces 26–27) t = 1.05 mm, nd 1.51633, νd 64.1, OHARA S-BSL7 class; d25 prints 9.28 and fB
  0.56 / 0.55 / 0.53. `rearPlates` holds one fixed trailing gap (0.56, wide fB), and the file's previously verified
  paraxial image plane is kept, so d25 = 9.277 / 9.272 / 9.244 mm carries the 0.03 mm fB variation and table rounding.
- Plate check against the previous data: EFL identical and paraxial defocus unchanged at every zoom station and focus
  keyframe (worst |Δ| 3.6e-15). Physical track grows by 1.05 × (1 − 1/1.51633) = 0.358 mm. Surface validation and the
  image-circle audit pass.
