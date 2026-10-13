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

## 2026-08-08 - Integration, semi-diameter, identity, and glass audit

- Reviewed Figure 1 on PDF page 2 of the ignored local patent source.
- Retained the authored semi-diameters. The closely spaced hybrid front element and figure annotations make several
  automated rim measurements unreliable, while visual comparison shows no defensible shape-level outlier beyond the
  audit tolerance.
- Corrected the display name from `PENTAX 02` to the manufacturer form `PENTAX-02`.
- Confirmed coefficient-backed catalog dispersion for five of nine materials. The compound resin and the three
  explicitly unmatched patent coordinates remain on the Abbe fallback because no unique public coefficient source
  supports a stronger classification.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent 17A spacing with Table 1 (PDF p. 35) and Table 2 (PDF p. 36): d17 = 9.264 / 15.248 /
  20.989 mm, then OP 0.500 mm, 0.620 mm air, CG 0.500 mm (both nd 1.51633, νd 64.1, S-BSL7 class), and fB = 0.53 mm to
  the image. The legacy value d17 + 2 × 0.500/1.51633 + 0.620 + 0.530 reproduces the old 11.073487 / 17.057487 /
  22.798487 mm exactly.
- Paraxial check against the previous data: EFL and defocus identical at all three zoom stations and both focus
  keyframes; the constrained close pairs and source-quoted 0.3 m MFD are unchanged. Physical track grows by 0.341 mm,
  2 × 0.500 (1 − 1/1.51633).
