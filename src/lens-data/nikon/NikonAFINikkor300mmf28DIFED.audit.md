# Nikon AF-I NIKKOR 300mm f/2.8 D IF-ED Patent Audit

Patent: JPH04294310A, Example 1

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/JP_H04294310_A.pdf`; Figure 1 on PDF page 7 is the controlling optical section.
- Compared the rendered figure with the authored prescription at native scale. The front collector, narrowing G2 focus group, and rear G3 envelope already follow the schematic closely, so no semi-diameter was changed.
- Kept the patent-published radii, thicknesses, indices, Abbe numbers, and focus gaps unchanged. The patent does not tabulate clear apertures, so the stored SDs remain explicitly inferred model geometry.
- Relabeled L13 to Hikari `J-LAF7` and L21a to Hikari `E-LAFH2`; both reproduce the patent coordinates within the catalog compatibility criteria and provide verified dispersion curves without asserting historical vendor identity.
- Retained L22 as `Unmatched (670575; nd=1.67025, vd=57.5)` because no checked current-catalog curve was sufficiently defensible.
- Normalized the display name to `NIKON AF-I NIKKOR 300mm f/2.8 D IF-ED`.

### Verification

- `npm run audit:image-circle -- src/lens-data/nikon/NikonAFINikkor300mmf28DIFED.data.ts`
- Full repository checks are recorded in the integrating commit.
