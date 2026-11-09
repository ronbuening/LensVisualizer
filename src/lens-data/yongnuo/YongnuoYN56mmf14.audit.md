# CN220171327U literal model audit

Printed pp5–9 were inspected as pixels, including every prescription value, focus table, source pupil radius and field limit. Table 1 is transcribed without rescaling. S10 maps to STO, source S11 does not exist, and S22–S23 map to rearPlates rather than drawn lens elements. Source nd/vd values remain literal; named-glass assignments are deliberately absent (superseded 2026-11-09: catalog labels added where a row matches exactly; nd/νd unchanged).

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
- Normalized signed-radii and ordered-index duplicate screen covers 1,095 baseline entries, 24 with matching element/surface topology; no matches. It is not a proof against differently represented equivalent designs.

## 2026-11-09 — Deployment validation

Independent check of CN 220171327 U from the embedded table images: 20 rows, stop at S10, the S22–S23 plate and the
variable gaps at all three states agree; all surfaces spherical. Engine EFL 58.096 (printed 58.066), close state
0.600 m at 0.11×, matching Yongnuo's 0.6 m / 0.11×. Attribution strong: Yongnuo's Optical Structure panel matches the
figure with HRI on L3/L7/L10, LD on L4 and ED on L6; 10/9, APS-C.

Deployment changes: `source.assignees` → "Shenzhen Yongnuo Electric Appliance Co., Ltd." (front page
深圳市永诺电器有限公司; the package had a different company name), and `key` `yongnuo-yn56f14-cn220171327u` →
`yongnuo-yn-56mm-f14s-da-dsm-wl-pro` so the URL carries the product, not the patent number.
Open: `lensMounts` lists only Sony E though Yongnuo also sells Z and RF versions; package wording remains. (Closed
2026-11-09: the entry names the Sony E version and keeps `sony-fe`, with the Z and RF versions described in the
analysis; wording replaced in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file: the header comment was rewritten in plain terms with every fact kept (patent, sole example, no scaling,
missing row 11, rear plate, stop from the Fig. 2 pupil, image gap, inferred semi-diameters). `subtitle` "CN 220171327
U — associated patent model, not factory-certified" → "CN 220171327 U, Sole Example — strong production
correlation". `specs` → 10 ELEMENTS / 9 GROUPS, DESIGN f = 58.066 mm, DESIGN F/1.49, ALL SPHERICAL, INNER FOCUS;
0.11× MAX. `catalog.focalLengthMm.design` 58.0958 (computed) → 58.066 (Table 2). Added `catalog.closeFocusM.marketing`
0.6, and `aperture.maxFNumber` 16 and `blades` 9, from Yongnuo's specification sheet. `fNumber.design` and
`aperture.nominalFNumber` stay 1.4942 (the Fig. 2 pupil). The focus description and conjugate source notes were
reworded; the printed states are unchanged. The errata note was reworded with the same content. Every element gained
a `role`.

Glass labels: the patent prints nd to three decimals. A catalog row was accepted only within |Δnd| ≤ 0.0001 and
|Δνd| ≤ 0.15, and each label was confirmed to resolve to that row. L3 and L10 → H-ZLaF68N (CDGM, 1.88300/39.22). L4 →
K-GFK70 (Sumita, 1.56907/71.30). L7 → H-ZLaF68C (CDGM, 1.88300/40.85; TAFD30 and S-LAH58 also pass, and CDGM was
chosen to match L3/L10). L9 → E-F2 (Hoya, 1.62004/36.30). L1/L5 (nearest S-TIH53 class, Δnd 0.00034), L2 (F5 class,
Δnd 0.00042), L6 (nearest S-FPL55 1.43875/94.66, Δnd 0.00075) and L8 (S-LAH55V class 1.83481/42.73, Δnd 0.00019)
became `Unmatched (patent nd …, νd …)`. `apd: "inferred"` was set on L4 (LD) and L6 (ED), as marked on Yongnuo's
Optical Structure drawing.

Analysis: removed the process wording ("qualified patent-associated model", "Practical Qualification", gap-sag and
score remarks). Added the product versions and dates, the numbered attribution evidence with its caveats, the
maker-drawing comparison, group focal lengths, a glass table, a focus table, the patent's conditional expressions
with the example's computed values, model limits (inferred rims, wide-open edge vignetting, comparison with Figs. 2–3)
and sources.

Engine before and after (identical): EFL 58.0958, FOPEN 1.4942, half-field 12.76°, stop radius 11.4956, BFD 1.0328
at infinity; close-state EFLs 56.4281 / 54.7129. audit:surface OK; audit:aperture shows no rim limit.

Open: L8 (S-LAH55V class) and L1/L5 (S-TIH53 class) miss the exact window only because nd is printed to three
decimals; a looser rule for three-decimal patents would label them. `rearPlates[0].source` still reads "literal
physical plate and image spacing" (rear plates were outside this pass).
