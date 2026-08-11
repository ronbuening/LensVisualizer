# Audit Log — Nikon AI AF Zoom-Nikkor 20-35mm f/2.8D IF

Patent: US 5,276,553 A, Example 1 / Figure 1.

## 2026-08-08 — Patent-figure SD, diagram-label, name, and glass audit

- Compared the wide-state site section directly with Figure 1 on patent page 2. The dominant L11 front diameter,
  L12–L14 taper, three cemented components, and rising L41–L44 rear envelope agree with the drawing within the
  figure-measurement tolerance. No additional semi-diameter change was supported.
- Replaced runtime element numbers with the patent's L11–L44 source identifiers, retaining `a` / `b` suffixes only
  where the optical model must distinguish the two glasses in a source-labeled cemented component.
- Corrected the product display name to Nikon's `AI AF Zoom-Nikkor 20-35mm f/2.8D IF` designation.
- Rechecked every authored `nd` / `νd` pair and on-diagram rounded `νd` badge. Twelve of fourteen elements resolve to
  coefficient-backed catalog equivalents. L31a (`1.74810 / 52.3`) and L44b (`1.86074 / 23.0`) remain explicitly
  unmatched because no reviewed public catalog row safely reproduces both coordinates.

## 2026-08-11 - J-SFH2 catalog recovery

- Rendered local `patents/US5276553.pdf` page 8 and visually confirmed Example 1 surface 24 at
  `nd = 1.86074`, `vd = 23.0` (patent code 861230).
- The recovered Hikari J-SFH2 row is `1.86074 / 23.08`, code 861231, matching the patent coordinate within its printed
  Abbe precision.
- Relabeled L44b as a J-SFH2 catalog equivalent. Thirteen of fourteen elements now have trusted curves; L31a remains
  unmatched. No prescription, zoom, focus, or semi-diameter values changed.
