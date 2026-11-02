# Nikon AF-I NIKKOR 300mm f/2.8D IF-ED Patent Audit

Patent: JP H04-294310 A, Example 1

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/JP_H04294310_A.pdf`; Figure 1 on PDF page 7 is the controlling optical section.
- Compared the rendered figure with the authored prescription at native scale. The front collector, narrowing G2 focus group, and rear G3 envelope already follow the schematic closely, so no semi-diameter was changed.
- Kept the patent-published radii, thicknesses, indices, Abbe numbers, and focus gaps unchanged. The patent does not tabulate clear apertures, so the stored SDs remain explicitly inferred model geometry.
- Relabeled L13 to Hikari `J-LAF7` and L21a to Hikari `E-LAFH2`; both reproduce the patent coordinates within the catalog compatibility criteria and provide verified dispersion curves without asserting historical vendor identity.
- Completed physical-glass coverage with checked equivalents, including OHARA `S-LAL52` for L22.
- Normalized the display name to `NIKON AF-I NIKKOR 300mm f/2.8D IF-ED`.

## 2026-08-18 — Screenshot follow-up

- Compared the supplied site screenshot directly with Figure 1 again. The front collector, stepped G2 diameter, and G3 outline remain proportionally consistent; the automated silhouette scan was affected by figure annotations, and visual confirmation did not justify another SD change.
- Confirmed the published focus order: G2 moves `+10.8889mm` imageward from infinity to the patent close state while G1 and G3 remain fixed.
- Marked L11, L12, and L31 as the three inferred ED positions and retained the patent values as authoritative; catalog names provide curves only.

## 2026-08-18 — L14 cemented-rim correction

- Re-inspected Figure 1 at 600dpi after the site rendering exposed an oversized L14a shell. The front surface, cemented interface, and rear surface of L14 terminate at essentially one rim height in the drawing.
- Normalized surfaces 7/8/9 from `35.0 / 33.4 / 29.5mm` to `29.5 / 29.5 / 29.5mm`. This removes the unsupported L14a overhang while preserving the patent prescription and the existing L14b aperture.
- The trial geometry passed the real surface validator before the edit; final image-circle, surface, type, format, lint, and test checks are recorded in the correcting commit.

## 2026-09-24 — Filter check

- Re-read every page of JP H04-294310 A: no example table has a filter or plate row, the prose never mentions a filter or
  plane-parallel plate, and Figs. 1, 4 and 7 draw nothing between L33 and the image plane.
- Nikon's AF-I 300mm f/2.8D manual says always to use a filter (39 mm slip-in holder, L37C supplied). A 2 mm crown plate
  would account for about 0.68 mm of the unexplained 0.685 mm Bf offset, but with no source-listed plate nothing is
  modeled. Header and analysis now record the manual requirement; no data values changed.

## 2026-10-29 — Fresh shape and glass reinspection

- Directly viewed local `patents/JP_H04294310_A.pdf`: Example 1 table on PDF page 5, d-line definition on page 4, and Figure 1 on page 7, including a 600 dpi optical-section crop. Inspected all 20 powered faces, including cemented boundaries. The visible L14 shoulder is cemented; no independently resolved exposed concave cap-end land supports a new cut or extension.
- The original inferred common L14 rim of 29.5 mm clips the published infinity FN=2.9 beam. `audit:aperture --raise` requires S7 >=29.77 mm and S11 >=23.49 mm. Adopted square S7/S8/S9=29.8 mm and S11=23.5 mm, preserving source radii, spacings, nd/vd, focus motion, and stop. This is a beam-clearance floor beyond the diagram estimate, not a published aperture dimension.
- Rechecked all 11 lens media against the printed nd/νd table. Retained every coordinate and qualified catalog proxy; all resolve consistently. The source gives no nC/nF/ng/dPgF or supplier identities, and none are authored. The ED positions remain inferred from high νd, without measured APD claims.
- Surface and image-circle audits pass; the infinity aperture is iris-limited at f/2.900000. Actual renderer output at 3 focus x 3 secondary-control states has 11 finite element paths and zero trim diagnostics per state; inspected the SVG raster. Neighboring-gap/stop checks show no new regression. Four cardinal full-iris rays at the published finite object distance retain baseline S2 clipping; the prior infinity S7 clipping is removed. The unresolved Bf offset and inferred stop station are retained.
- Shared dispersion, glass-resolution-parity, and partial-dispersion tests pass (3 files / 94 tests for this triad); catalog consistency passes. No full-suite claim is made here.
