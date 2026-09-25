# Audit Log - FUJIFILM FUJINON XF18mmF2 R

Patent: US 2014/0240851 A1, Example 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20140240851A1.pdf`. The patent publishes Example 4 prescription, asphere data, Fig. 4 section, and Table 17 effective-radius conditions, but no full clear-aperture table.
- Table 17 provides effective-radius terms Re1/Re2 for the L7 aspherical conditions; the data file uses those as anchors while estimating the rest of the renderer clear apertures.
- Fig. 4 shows a moderate front group, a smaller stop-adjacent middle section, and L8 as the largest rear member. Stored SDs follow that run: front surfaces are about 6.5-7.6 mm, the narrow central/rear aspheric section reaches 4.8-6.5 mm, and final L8 grows to 7.0-8.0 mm.
- No SD values changed. Current values remain inferred from the patent figure, Table 17 effective-radius anchors, f/2 stop geometry, edge thickness, and cross-gap sag checks.

## 2026-07-29 - Catalog-coordinate correction

- Rechecked Example 4 in local `patents/US20140240851A1.pdf`; S3 remains 1.83400 / 37.16 and its R/d row is
  unchanged.
- S3 `S-LAH55V (OHARA)` -> `S-LAH60 (OHARA)`, the exact same-vendor coordinate. Synchronized the L2 element
  discussion and glass table; the distinct L8 S-LAH55VS row was not changed.

## 2026-09-25 - MTF image-plane census (partial)

Source: local `patents/US20140240851A1.pdf`, PDF page 21 (printed page 10),
Example 4 Tables 7-8; infinity convention and units in paragraphs 0128-0134.
No prescription scaling is applied.

| Field | Before | Source / disposition |
|---|---|---|
| S1-S16 R, d, nd; all eight element vd values | Authored prescription | Checked every row against Table 7; retained. Element nd labels round the six-digit surface values. |
| S9/S10 KA and A3-A16; S13/S14 KA and A3-A12 | Authored coefficients | Checked every coefficient against Table 8; K = KA - 1. One S13 A10 typo corrected below; all others retained. |
| S13 A10 | -1.416866834e-8 | -1.41686834e-8 (Table 8 continuation). No paraxial effect. |
| D16 | 7.80 mm used as image distance | Table 7 places this gap before PP, not before the image. |
| S17-S18 PP | Omitted | 2.70 mm, nd 1.516330, vd 64.14; D18 is blank. |

An independent reduced-angle ABCD calculation gives EFL 18.626043 mm and air
BFL 12.792891 mm, agreeing with the runtime +4.992891 mm offset. The stated
18.844 mm EFL is not reproduced. All axial prescription entries match; no
single transcription error was found to explain that first-order mismatch.
The S13 asphere typo cannot alter paraxial focus.

**Partial: missing source image distance.** The known plate contributes
2.70/1.516330 = 1.780615 mm of reduced propagation, but its trailing air gap
is not published in Table 7. Table 17 gives only rounded ratios, not that
missing spacing. Do not invent a zero gap or derive one by fitting paraxial
focus. Keep the legacy plane unchanged and defer `rearPlates` until the
physical trailing gap is sourced. Offset before/after: +4.992891 -> +4.992891 mm.
Section E remains partial. This is not a confirmed contradiction of a printed
Bf: Table 7 does not print one.

The analysis now distinguishes the PP front face from the image and removes
the unsupported attribution of the EFL difference to rounding. No new glass
identity or partial-dispersion values were inferred; there is no mismatch row
for this lens in the regenerated glass relabel report. The coefficient change
is sub-micrometre over the authored rim, so no material visible fix is advertised.
