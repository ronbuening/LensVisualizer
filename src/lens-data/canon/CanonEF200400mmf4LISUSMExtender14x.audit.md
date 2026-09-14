# Canon EF 200-400mm f/4 L IS USM Extender 1.4× Audit

## 2026-08-25 — Extender-in supplemental configuration

- Reviewed the ignored local `patents/US20130308041A1.pdf`, specifically Embodiment 1 Figure 3 and Numerical Example 1's inserted prescription. The patent states that surfaces 1–40 are shared with the extender-out state and publishes the complete surfaces 41–56 replacement segment.
- Corrected the supplemental file's maker-relative type import and canonical Canon assignee spelling. Normalized the first element's glass coordinate to the resolver-safe `487702` form.
- Linked the visible `EXT OUT` and hidden `EXT IN` prescriptions through one `opticalConfiguration` group. The hidden name includes its state so noindex comparison identities remain distinguishable, while only the extender-out member remains catalog-visible.
- Retained the patent's published effective-diameter halves as SDs. Figure 3 is a schematic rather than an axially scaled section, so its automatic photogrammetry screen is not used to override the exact per-surface table.
- Audited all eight inserted extender elements and the repeated shared glass coordinates. The complete 32-element prescription resolves at 32/32 strict Sellmeier coverage with zero catalog mismatches; no new catalog entry or tolerance change was justified.
- Added a parity regression covering the 22 shared elements, surfaces through patent surface 40, the surface-41 insertion gap, the repeated L44 pair, and identical zoom motion.

## 2026-08-25 — Six-lens diagram follow-up

- Rechecked the supplied EXT OUT and EXT IN renders against Figures 1 and 3 at 600 dpi. Both figures are schematic and axially compressed; the Numerical Example 1 effective-diameter column remains the stronger source, so every published half-diameter is retained.
- Added the source-backed unit powers and roles to both diagram configurations: positive focusing L1, negative L2, positive L3/L41/L43/L44, negative stabilizing L42, and positive EXTa/negative EXTb in the inserted state.
- Verified identical wide-to-tele motion in both configurations. L2 moves 35.00 mm imageward and L3 moves 12.53 mm imageward; L1 and the fixed fourth-unit subgroups do not zoom. The patent publishes no finite-focus spacing, so the L1 focus role remains labeled without synthesizing focus travel.
- Re-ran glass resolution after the catalog audit. EXT OUT remains 24/24 strict and EXT IN remains 32/32 strict, with zero coordinate mismatches.
