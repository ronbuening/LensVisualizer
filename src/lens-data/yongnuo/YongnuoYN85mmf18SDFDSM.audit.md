# CN110146970B Example 1 transcription audit

Date: 2026-11-09. Base: ronbuening/LensVisualizer at 9d121be76e14bc5098256ee78cd0a7545a1acf11.

The original PDF and pixels of pp. 9, 10, 14, 15 and 16 were inspected. All 20 source surfaces, including cover glass, were compared with the supplied transcription packet. PDF SHA-256: 2dcebad2490a2da1001c16e5a7ce1c00b319af8695eeb705f161c5abf45c7559. Packet SHA-256: f831de4ad6a873b47069e0c67c30a6226712de99d7bec66c3e6ab4588c259c9d.

Source S10 maps to STO; S19–20 map to the standard rearPlates representation. All radii, axial thicknesses, indices and Abbe numbers remain literal. The close table changes only d7 and d9. The printed 697 mm object distance is first-vertex referenced, consistent with the 103.397 mm track and rounded 0.8 m total distance. The object distance is explicitly authored as a finite conjugate, not inferred from a focus slider label.

Missing surface apertures are reconstructed from the figure's overall envelope with beam/geometry checks, not asserted as measured source values. Both faces of each element share an aperture; the cemented interface shares the same 21 mm radius. The front-to-rear radii are 30, 24, 21, 21, 17, 15, 14, 12, 14 mm. Geometry uses the default 90% gap-sag limit. No rim cuts, validation relaxation or hidden render trim are used.

The 23.5425 mm pupil radius is printed in Fig. 2A. The standard prime stop rule yields a 28.08963655 mm physical diameter, labeled inferred. The 13.669° source half-field is retained even though it reaches only 97.03% of the 135-frame corner radius. No source geometry was changed to fill the corner.

Independent paraxial focus residuals relative to the literal sensor are −0.0179802 mm at infinity and +0.1818068 mm at the 697 mm finite endpoint. These are disclosed, not repaired. Midpoint mechanical interpolation has no source-certified conjugate, so its MTF is unavailable rather than silently evaluated as an infinity design.

No catalog glass identities or partial-dispersion coefficients are established. D-line ray and MTF checks use literal indices. Broadband behavior remains qualified. Exact production association is unproven; production review scores do not validate this prescription.

AST-based comparison against all 1,095 other catalog prescriptions found no complete signed-curvature sequence match after arbitrary scaling at 0.1% tolerance. This detects same-order scaled designs, not every conceivable rearrangement or optical equivalence.

The companion evidence bundle contains machine-readable literal checks, geometry/render diagnostics, aperture and field audits, geometric MTF results, independent paraxial calculation, original source pages, and integration logs. No commit, push, PR, merge or deployment was performed.
