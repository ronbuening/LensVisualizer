# Nikon AF-I NIKKOR 300mm f/2.8D IF-ED Patent Audit

Patent: JPH04294310A, Example 1

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/JP_H04294310_A.pdf`; Figure 1 on PDF page 7 is the controlling optical section.
- Compared the rendered figure with the authored prescription at native scale. The front collector, narrowing G2 focus group, and rear G3 envelope already follow the schematic closely, so no semi-diameter was changed.
- Kept the patent-published radii, thicknesses, indices, Abbe numbers, and focus gaps unchanged. The patent does not tabulate clear apertures, so the stored SDs remain explicitly inferred model geometry.
- Relabeled L13 to Hikari `J-LAF7` and L21a to Hikari `E-LAFH2`; both reproduce the patent coordinates within the catalog compatibility criteria and provide verified dispersion curves without asserting historical vendor identity.
- Completed physical-glass coverage with checked equivalents, including OHARA `S-LAL52` for L22.
- Normalized the display name to `NIKON AF-I NIKKOR 300mm f/2.8D IF-ED`.

### Verification

- `npm run audit:image-circle -- src/lens-data/nikon/NikonAFINikkor300mmf28DIFED.data.ts`
- Full repository checks are recorded in the integrating commit.

## 2026-08-18 — Screenshot follow-up

- Compared the supplied site screenshot directly with Figure 1 again. The front collector, stepped G2 diameter, and G3 outline remain proportionally consistent; the automated silhouette scan was affected by figure annotations, and visual confirmation did not justify another SD change.
- Confirmed the published focus order: G2 moves `+10.8889mm` imageward from infinity to the patent close state while G1 and G3 remain fixed.
- Marked L11, L12, and L31 as the three inferred ED positions and retained the patent values as authoritative; catalog names provide curves only.

## 2026-08-18 — L14 cemented-rim correction

- Re-inspected Figure 1 at 600dpi after the site rendering exposed an oversized L14a shell. The front surface, cemented interface, and rear surface of L14 terminate at essentially one rim height in the drawing.
- Normalized surfaces 7/8/9 from `35.0 / 33.4 / 29.5mm` to `29.5 / 29.5 / 29.5mm`. This removes the unsupported L14a overhang while preserving the patent prescription and the existing L14b aperture.
- The trial geometry passed the real surface validator before the edit; final image-circle, surface, type, format, lint, and test checks are recorded in the correcting commit.
