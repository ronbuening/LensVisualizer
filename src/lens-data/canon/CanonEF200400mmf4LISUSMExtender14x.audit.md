# Canon EF 200-400mm f/4 L IS USM Extender 1.4× Audit

## 2026-08-25 — Extender-in supplemental configuration

- Reviewed the ignored local `patents/US20130308041A1.pdf`, specifically Embodiment 1 Figure 3 and Numerical Example 1's inserted prescription. The patent states that surfaces 1–40 are shared with the extender-out state and publishes the complete surfaces 41–56 replacement segment.
- Corrected the supplemental file's maker-relative type import and canonical Canon assignee spelling. Normalized the first element's glass coordinate to the resolver-safe `487702` form.
- Linked the visible `EXT OUT` and hidden `EXT IN` prescriptions through one `opticalConfiguration` group. The hidden name includes its state so noindex comparison identities remain distinguishable, while only the extender-out member remains catalog-visible.
- Retained the patent's published effective-diameter halves as SDs. Figure 3 is a schematic rather than an axially scaled section, so its automatic photogrammetry screen is not used to override the exact per-surface table.
- Audited all eight inserted extender elements and the repeated shared glass coordinates. The complete 32-element prescription resolves at 32/32 strict Sellmeier coverage with zero catalog mismatches; no new catalog entry or tolerance change was justified.
- Added a parity regression covering the 22 shared elements, surfaces through patent surface 40, the surface-41 insertion gap, the repeated L44 pair, and identical zoom motion.
