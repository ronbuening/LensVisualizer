# Audit Log — PENTAX SMC A 200mm f/4

Patent: US 4,550,987, Example 1 / claim 3

## 2026-11-01 — Deployment validation and cleanup

**Patent re-read.** Read from the USPTO scan (10 pages, no text layer): the Example 1 table on PDF p. 7 and its repeat in claim 3 on PDF pp. 8–9. Checked at ×2 against the data file: 12 radii, 12 spacings including fB, and 6 index/Abbe pairs. d8 × 2 = 21.28 mm = 2.128 + 19.152. There are no aspherical surfaces or variable gaps. Mismatches: none. The front page agrees with `source` on number, year, inventor and assignee. The patent prints no focus mechanism, close-focus data, stop position, clear apertures or spectral line for n.

**Patent vs model** (patent ×2 / model). EFL 200 / 200.03 mm; F-number 4.0 / 4.000; back focus 65.00 / last gap 65.00 mm, paraxial 65.03 mm; summed track 160.46 / 160.46 mm; half-field 6.3° / 6.3°. The printed f1, f1,2,3, f1,2,3,4 and |f5,6| compute as 0.730, 0.667, 0.506 and 0.406f, as printed. The iris is 12.97 mm under the paraxial stop rule (decisions.md, 2026-10-27). The real marginal ray through it enters at 24.42 mm, a working aperture of f/4.10; a real f/4 beam would need 13.29 mm at the stop. No lens surface clips the axial beam.

**Fig. 2 trace.** An exact trace with Coddington field curves, at infinity and the d-line on the f = 100 scale, compared with readings from the native-resolution scan (read / computed): spherical aberration at the zone −0.069 / −0.066, zero crossing about 94 % / 93 % of the aperture; sine condition −0.149 / −0.146; distortion at 6.3° +1.02 / +1.00 %; DS at 6.3° −0.033 / −0.033; DM at 6.3° −0.058 / −0.051 at the file's stop. This supports the infinity state and d-line indices. Distortion and DS barely move with the stop. DM at 6.3°, 5.0° and 3.9° bounds the stop to about 56–70 mm behind S1 at ×2, which contains the file's 67.81 mm and excludes mid-d8 (76.3 mm). With the catalog labels the paraxial g-line focus sits +0.116 from the d-line focus; Fig. 2 reads about +0.13.

**Maker diagram.** SMC PENTAX-A manual section, printed p. 38, PDF p. 41 (https://www.cameramanuals.org/lenses/pentax_smc_a_lenses.pdf). Axial positions in px along the drawing, against Example 1 ×2 at 4.36 px/mm: L1 front 44 / 44; L3 rear about 116 / 116; L4 318–333 / 317.6–330.4; stop tick 340 / 339.6; L5 front 421 / 423; L6 442–460 / 444–460. Every position is within about 3 px. The stop tick is right behind L4, which confirms the file's stop. Its d8/d6 reads about 0.44. Outline widths give semi-diameters of about 26.4 mm at L1, 14.9 mm at L4, 10.1 mm at L5 and 13.2 mm at L6, against 27, 15.93, 12.15 and 13.5 mm in the model.

**Length.** S1 sits 115.0 mm from the K flange (160.46 − 45.46 mm), but lens-db lists a 111 mm barrel, so production may be a variant of Example 1. Example 2 ×2 gives 109.9 mm but is F/4.1. The section's proportions do not separate them: d8/d6 is 0.46 for Example 1 and 0.42 for Example 2. Examples 3 and 4 are near 0.2 and use a 1.49700/81.6 crown.

**Product.** A 200/4: 6 elements / 6 groups, f/32, 1.9 m, 52 mm filter, 111 mm, 405 g, 1983 (lens-db) or 1984 (Cine Lens Wiki). M 200/4: 6/5, 1977, 2 m. JP 53-27422 (Takahashi, Asahi Kogaku, priority 1976) has L5 and L6 cemented; this patent separates them, which matches the step from 6/5 to 6/6. The A* 200/2.8 ED (77 mm filter) does not fit, no F 200/4 was found, and no other corpus file carries this lens or patent. `PentaxA200mmf4MacroED` is US 4,666,260.

**Fields changed.** Header comment added; `subtitle`; `catalog.specs` added; `focus.description`; `role` added to all six elements; `groups` FRONT and REAR added for the patent's front and rear telephoto groups. The analysis was rewritten to the skeleton, and its process text left. `key`, `name`, `glass` and `closeFocusM` changed in earlier commits on this branch. `R`, `d`, `nd`, `vd`, `sd`, `aperture`, `projection` and `source` are unchanged.

Open: rims are above figure scale. Fig. 1, at 20.85 px per unit of the f = 100 scale, gives L1 25.9, L2 25.8, L3 25.5, L4 15.4, L5 11.65 and L6 12.9 mm. A uniform ×0.96 costs 7.2 corner points at 6.1° (78.4 → 71.3 %), above the 3-point limit for cuts, so it is not applied.

Open: the section's L5 outline (about 10.1 mm against 12.15 mm) is the largest rim difference. Applying the section outlines at L1, L4, L5 and L6 costs 16.0 corner points, so they are not applied.

Open: production may be a variant of Example 1. A maker dimension for S1 or a measured front-element position would settle Example 1 against Example 2.

Open: the 12.5° full field that the package cited from the manual's product table (printed p. 33) was not re-read and is not used in the analysis.
