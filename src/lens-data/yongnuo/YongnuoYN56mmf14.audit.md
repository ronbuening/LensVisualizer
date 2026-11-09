# CN220171327U literal model audit

Baseline: 9d121be76e14bc5098256ee78cd0a7545a1acf11. Local-only, 2026-11-09.

Printed pp5–9 were inspected as pixels, including every prescription value, focus table, source pupil radius and field limit. Table 1 is transcribed without rescaling. S10 maps to STO, source S11 does not exist, and S22–S23 map to rearPlates rather than drawn lens elements. Source nd/vd values remain literal; named-glass assignments are deliberately absent.

Semi-diameters are inferred from relative Fig.1 heights using the approximately 95 mm physical track as an axial scale, rounded to conservative half-millimetre/integer dimensions. Fig.1 is a schematic, not metrology. The front pair uses 20 mm, L3 19 mm, L4/L5 16 mm, L6 12.5 mm, L7/L8 13 mm, L9 12.5 mm and L10 14 mm. These are assumptions validated for geometric viability and source-pupil transmission, not source-certified apertures. No override of default 90% gap-sag allowance; no rim cuts, extensions or disabled checks.

Validation:
- buildLens source/schema/edge-thickness/rim/gap checks pass.
- All 20 drawn-source rows match the literal radius/thickness/index table; two moving gaps match all three published stations. Plate remains 2 mm, nd 1.517, vd 64.2, physical image gap 1 mm.
- All three states have a constant image station 94.998 mm and zero renderer material trim.
- Axial aperture audit: traced f/1.494247716 versus derived nominal f/1.494247718; limiter STO, no rim clipping.
- Chief ray clears the full printed 12.76° half field. Generic APS-C corner is deliberately outside the declared source field (source-field image height 13.652836 mm versus generic corner 14.175 mm, 96.316%); the unconstrained corner chief also clears the modeled apertures.
- Source-field stop-sampled throughput has zero failed or unaimed rays at INF/X20/MOD and f/1.494 or f/4. Wide-open edge stop sampling is heavily clipped; at f/4 all sampled bundles transmit. Throughput is geometric sample transmission, not radiometric transmission or measured shading.
- Reference geometric MTF at all 18 combinations of state/aperture/field is available. Two 64-grid edge cases required 128-grid refinement; both converged unchanged. Infinity f/4 reference diffraction MTF converged at three fields. C/d/F MTF unavailable because low-dispersion glass lacks partial-dispersion data. Do not bypass that guard.
- Literal paraxial plane offsets are +0.032832/+0.096943/+0.169641 mm for INF/X20/MOD. No plane relocation or best-focus substitution. Large finite-focus loss remains a qualification.
- Typecheck, changed-data-file ESLint and production build pass. Focused integration 4 files/17 tests pass. Full aggregate suite and interactive browser UI tests were not run.
- Normalized signed-radii and ordered-index duplicate screen covers 1,095 baseline entries, 24 with matching element/surface topology; no matches. It is not a proof against differently represented equivalent designs.

Full commands, numerical reports and original source files are in the delivery archive. The analysis and data files do not imply factory certification or measured production performance.
