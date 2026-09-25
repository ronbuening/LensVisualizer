# Tamron SP 90mm F004 — patent audit

## 2026-09-25 — MTF image-plane census

Exact local source: `patents/US9063253.pdf`, Embodiment 7, PDF pages 84–85 (columns 20–21), visually checked against the data. All 26 radii, thicknesses/gaps, 14 glass nd/νd pairs and the infinity, half-macro and full-macro variable distances agree. No scaling, aspheres or rear glass plate is specified. Infinity gaps are D7=1.2, D13=20.05, D14=14, D16=6.7201 and D19=1.7996 mm.

The terminal surface 27 is a zero-power air reference. D26=44.5749 plus D27=2.1644 gives the correctly authored 46.7393 mm; its other D27 values are 2.2044 and 2.1892. Independent reduced-angle tracing gives EFL 92.556418526 and BFL 47.033196600 mm, whereas the patent reports f=92.74 and a total track of 158.72 (the surface sum is 158.7349). The previously documented R4/derived-table inconsistency also remains: replacing −90.2962 with −92.2729 helps one group but worsens whole-system EFL. No single supported emendation reconciles these quantities.

**Cause/action:** source contradiction; retain the repeated prescription and published image path. Runtime offset **+0.293897 → +0.293897 mm**. Section E row deleted; continued census inclusion is expected. No user-visible numerical change or changelog entry.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
