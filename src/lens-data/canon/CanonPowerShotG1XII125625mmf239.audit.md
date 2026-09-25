# Audit Log - CANON POWERSHOT G1 X MARK II 12.5-62.5mm f/2.0-3.9

Patent: US 2015/0219882 A1, Numerical Example 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20150219882A1.pdf`. The patent supplies the worked prescription and a corresponding positive-lead six-group cross-section, but no clear-aperture or semi-diameter table.
- The figure shows the front B1 cemented group as the largest section, a smaller B2 variator, compact B3/B4/B5 groups through the stop and focus region, and a larger final positive B6 relay.
- Stored SDs already match that hierarchy: B1 starts at 20.0 mm, B2 stays near 9-10 mm, the central groups sit mostly near 7-9.6 mm, and B6 re-expands to 13.2 mm.
- No SD values changed. Current values remain inferred from multi-state marginal/chief-ray clearance and constrained by renderer safety, edge thickness, sd/|R|, and cross-gap sag checks.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold with Numerical Example 2's physical rear stack (PDF p. 30 surface table, p. 31
  variable gaps): d28 = 3.41 / 8.24 / 9.52 mm, then `rearPlates` block 1.55 mm, nd 1.51633, νd 64.1, and d30 = 3.31 mm.
  The patent prints no designation for the block. Glass is OHARA S-BSL7 (1.51633 / 64.14), matching the file's OHARA
  element labels.
- Paraxial check against the previous data: EFL identical and defocus unchanged (worst |Δ| 7e-8 mm) at all three zoom
  stations and both focus keyframes, since the old 7.742205 / 12.572205 / 13.852205 mm values were the exact fold.
  Physical track grows by 1.55 × (1 − 1/1.51633) = 0.528 mm. `closeFocusM` (0.05 m) is Canon's published value and is
  unchanged.

## 2026-09-25 — MTF image-plane census

Source `patents/US20150219882A1.pdf`, Numerical Example 2, visually inspected PDF pp. 30–31 (printed 8–9), plus BF definition ¶0085 on p. 29. Compared every radius, thickness, 14 lens nd/νd pairs and six aspheric K/A4/A6/A8 sets (S11,12,17,18,25,26); all agree. No scaling. Infinity wide/middle/tele spacing rows also agree: d3=0.97/7.14/19.32, d9=22.11/10.54/0.35, d16=3.27/3.19/2.76, d22=1.60/3.74/10.36, d26=4.49/4.80/12.85 and d28=3.41/8.24/9.52 mm.

The dummy S10 is air-to-air with d10=−0.10; combining it with d9 correctly gives 22.01/10.44/0.25. The zero-gap equal-radius S20/S21 contact is also faithfully represented. S29–30 sensor glass is already rearPlates: t=1.55, nd=1.51633, νd=64.1, gap after=3.31 mm. Its wide reduced rear path is 3.41+1.55/1.51633+3.31=7.742204929 mm. Printed BF=7.75 differs slightly even from that sum.

Independent trace gives wide EFL 12.571053012 versus 12.84 and air BFL 7.962884078 versus BF=7.75. Paragraph 0085 explicitly defines BF as distance to the paraxial image plane converted to air; there is no support for reinterpreting it as designer best focus. No single transcription/source emendation is supported by the table.

**Cause/action:** source contradiction; retain prescription, plate and image gaps. Runtime offset **+0.220679 → +0.220679 mm**; Section E row deleted. No numerical change/changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
