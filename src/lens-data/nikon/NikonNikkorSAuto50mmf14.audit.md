# Audit Log - Nikon NIKKOR-S Auto 50mm f/1.4

Patent: US 3,560,079, Example 1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US3560079.pdf`; local text confirms the all-glass element nd/vd rows.
- Added Hikari `J-BASF2` to the catalog from the public Hikari 2023 coefficient table and used it for L1.
- Updated L2 to `S-LAL13 (OHARA)`, L3 to `E-FD2 (HOYA)`, L4 to `S-TIM35 (OHARA)`, L5/L7 to `S-LAL8 (OHARA)`, and L6 to `LAC12 (HOYA)`.


## 2026-10-30 — Fresh patent shape and glass reinspection

Directly inspected US3560079 Figure 1/PDF1 at 600 dpi from its native 300 ppi raster, and Example 1 plus its repeated claim/PDF3. All 12 curved faces/two cement interfaces were reviewed. The50.5634 mm vertex span gives approximately 14.1 native px/mm. Both stop-facing concavities show flat end strokes: source cap/outer q≈.74/.74, with one-native-pixel bands about ±.008 before ink ambiguity. S5's measured cap is roughly12.4 mm.

S5 now uses outer sd16.5 and rimCutDepthMm6.15, producing cap 12.704014720 mm/q=.769940, outward from the source endpoint for beam clearance. S6 keeps its 12.5 clear cap and gains a land to 16.5(q=.757576). A trial S5 land at its old 14 mm clear cap caused renderer-only gap trimming: combined intrusion15.246626 mm exceeds .9×16.2762=14.64858 mm. The adopted explicit inferred cut gives13.344044 mm intrusion, with unchanged source gap/stop. It passes the full inferred-cut beam rule; no source-depth flag or tolerance bypass is used.

Paired continuous rims rise at S2=23, S7/S8=16.5, S9/S10=17.2 and S11/S12=19 mm. These remove the inherited nominal axial limits at S7–12 (required15.5/16.4/17.1/17.2/15.7/15.4 mm). Existing S1=23, S3=19.5 and S4=16.5 remain; the front off-axis allowance is larger than the schematic source outline and is explicitly retained. Cement boundaries stay refracting with no opaque lands. No extra trim is inferred on weak rear curves without a distinct source flat.

All seven source nd/vd pairs were freshly verified. The claim text defines the spectral d line. The seven compatible catalog curves remain unchanged: J-BASF2, S-LAL13, E-FD2, S-TIM35, S-LAL8, LAC12, S-LAL8. E-FD2's Δnd≈−.000620 is an approximate proxy; no production supplier/melt is identified. No partial dispersion or C/F/g values are published, so unflagged APD annotations indicate missing source identification, not proof of normal dispersion. The public obsolete incompatible glass-equivalent table and unsupported procurement/era-based APD claims are corrected.

Surface, image-circle, nominal f/1.4 aperture and direct field checks pass (≥99% field coverage). Dense inferred-cut verification:1zoom×21focus/grid41/.5°,461,454 rays; refined S5 reach 12.5319<cap 12.704015−.05 mm, zero clipped rays/margin failures/unlaunchable fields. All nine actual SVG states were inspected: finite continuous outlines, zero hidden trim. Shared glass suites pass 2 files/93 tests; source-pair/curve invariants and duplicate-key scan pass. Every source R/d/material pair, scaling, stop/focus/image-plane controls and tolerance is unchanged.
