# Nikon AF-S DX 18–105 mm — source and model audit

## 2026-10-29 — Re-sourced to JP 2009-156890 A Example 5

The package first modelled WO 2021/039812 A1 Example 8 (2019 priority). Deployment review found that example is a later re-glassing of JP 2009-156890 A Example 5 (filed 2007-12-25, eight months before the 2008 launch). At the owner's request the model now follows the JP example.

**Source of record.** The JP 2009-156890 A text comes from J-PlatPat (JPO electronic text, not OCR): front page, ¶0060–0063, ¶0109, and Tables 17–20. The image check is US 7,839,577 B2, read from its page images: fifth example, Tables 17–20, the asphere equation in column 13, the VR factors in column 26, and Fig. 17. The US front page claims priority from JP 2007-331480, the application behind JP 2009-156890 A. The checked values are all 28 rows (R, d, nd, νd), the stop at surface 15, five cemented contacts, κ and A4–A14, d1–d4 and Bf at W/M/T, and f/FNO/ω/Y/TL. The JP text and the US images differ nowhere. Inventor order follows the JP front page (Ito, Shibayama, Yamamoto, Yamaguchi); the US front page lists Yamamoto first.

**Changes from WO Example 8.**
- L13: nd 1.66106 / νd 56.09 becomes 1.69680 / 55.52, and R4 59.8952 becomes 63.1334.
- κ: 82.273 becomes 87.2734 (K 81.273 → 86.2734). A4–A10 now carry the JP's five significant figures.
- Small radius changes: R5 263.2417 → 263.2418, R14 94.5735 → 94.5733, R20 −146.771 → −146.7709.
- The WO flare-cut plane (old surface 24) is removed. JP d4 is the whole G4–G5 gap: 13.813 / 8.798 / 7.075, which equals WO 3.400 + D24 at W and T. Surfaces 25–29 are relabelled 24–28.
- Printed states are now W/M/T = 18.4 / 57.4 / 102.0 mm, F/3.6 / 5.2 / 5.8, Bf 38.310 / 58.032 / 65.481 mm, Y = 14.0 mm.
- θgF-derived dPgF values are removed, because the JP and US texts print no θgF.

The group focal lengths G2–G5 are unchanged. G1 changes from 90.707 to 91.792 mm.

**First order (patent / model).**

| State | f | EFL | Bf | Paraxial BFD | TL | Model TL |
|---|---:|---:|---:|---:|---:|---:|
| W | 18.4 | 18.4013 | 38.310 | 38.3103 | 133.573 | 133.572 |
| M | 57.4 | 57.4338 | 58.032 | 58.0307 | 161.813 | 161.813 |
| T | 102.0 | 102.0020 | 65.481 | 65.4831 | 178.604 | 178.603 |

The traced group focal lengths equal the printed 91.792 / −14.310 / 23.831 / −36.549 / 45.130 mm. Table 20 conditional values reproduce. At Y = 14.0 the traced ω is 38.66° / 13.25° / 7.59°, against the printed 38.8° / 13.2° / 7.6°.

**Zoom cam and focus.**
- 26 zoom stations: 3 printed and 23 derived, placed adaptively.
- From W to M, d1–d4 change linearly and Bf is solved. From M to T, d1, d3 and d4 change linearly, the G2 vertex moves linearly, and d2 and Bf are solved.
- With linear d2 instead, G2 would have reversed a second time near T (0.026 mm). The rule now used removes that.
- G2 reverses once, near 30 mm, as Fig. 17 draws. G1, G3, G4 and G5 move monotonically, and G3 and G5 stay linked (d3 + d4 = 15.846 mm).
- No gap reverses along zoom at any focus keyframe, and EFL rises monotonically.
- Focus is G2 only, with d1 + d2 constant to within 1e-4 mm. There are 10 keyframes at 0.45 m divided by t. G2 travel at 0.45 m is 1.07 mm at W and 4.55 mm at T. Close-focus magnification is 0.052× / 0.141× / 0.202×.
- Paraxial defocus is at most 0.0021 mm at the nodes, which is the printed T residual. Between nodes, sampled bilinearly 10 × 10 per cell, it is at most 0.0185 mm.
- The data file is 27.8 kB, down from 228 kB.

**Glass.** 15 of the 16 media resolve to catalog rows.
- Exact at printed precision: S-TIH6, J-LAK14, S-TIH53, S-TIH4, J-LASF021 (×2), FC5.
- Within Δνd ≤ 0.05: J-SK14, S-LAH53 (×3), J-FKH1, S-PHM52 (Δνd 0.05; the corpus label for this coordinate), TAC8, J-BK7A.
- The L21 resin (1.55389 / 38.09) stays without a catalog row.
- L32 carries `apd: "inferred"` at Nikon's ED position.

**Rims and checks.**
- The semi-diameters are the earlier estimates from the patent cross-section. The 10.5 mm rims at surfaces 8/9 and 9.6 mm at 12/13 keep the inferred clear zones inside the 6.050 and 0.200 mm air spaces.
- The flatter R4 thickens the L13 edge at sd 23.1 from 0.78 to 1.04 mm.
- audit:surface reports no errors. audit:image-circle reports 0 undersized. audit:field-coverage passes 26/26 stations at ≥ 99 %.
- clearap at Y = 14.0 mm, at infinity and at 0.45 m, shows no axial clipping and no blocked chief ray. Front-group corner vignetting is mechanical.

**Maker diagram.** Nikon's construction diagram (nij.nikon.com spec page, image `spec/02.png`) matches Example 5 lens for lens. Its ED element is in the L32 position and its aspherical element is L21.

Open: Nikon has not published the production prescription, so the correlation is not certified. The semi-diameters are estimates, not published values.

## 2026-10-29 — Semi-diameter pass against the patent figure

**Source.** US 7,839,577 B2, page 18 (sheet 17 of 23), Fig. 17 (ZL5, the fifth example), drawn at the wide-angle infinity state. The JP 2009-156890 A PDF is not available locally. The earlier rims came from WO 2021/039812 A1 Fig. 15. The page is a 1-bit scan, 2560 × 3300 px. It was measured at native resolution, with the optical axis vertical at x = 1299.5 px and the object at the bottom.

**Scale.** Vertex crossings beside the axis put surface 1 at y = 2285 px and surface 28 at y = 1102 px. That is 1183 px for 95.263 mm (TL − Bf at W), or 0.0805 mm/px. The spans 1–14 (383 px for 30.875 mm) and 16–28 (484 px for 39.046 mm) give 0.0806 and 0.0807. Three radial checks show the figure is isotropic:
- The inner ends of the stop mark sit at 83.5 and 85.5 px (6.72 and 6.88 mm), against the engine stop radius of 6.80 mm at W.
- The drawn surface 8 crosses 6.0 mm and 11.2 mm at the sags R8 predicts (16.7 and 68.8 px).
- The L11/L12 junction meets L12's rim at the sag R2 predicts at 25.5 mm.

**Figure readings.** Half-widths are averaged over both sides; ±1 px is ±0.08 mm.

| Element | Surface | Stored sd | Fig. 17 | Ratio | Result |
|---|---|---:|---:|---:|---|
| L11 front | 1 | 26.8 | 27.25 | 1.02 | kept (noise) |
| L11/L12 junction | 2 | 26.8 | 25.5 | 0.95 | **25.5** (step) |
| L12 rear | 3 | 25.4 | 25.5 | 1.00 | **25.5** (square rim) |
| L13 | 4, 5 | 23.1 | 23.1 | 1.00 | kept |
| L21 resin and front | 6A, 7 | 14.8 | 15.0 | 1.02 | kept |
| L21 rear | 8 | 10.5 | 10.9–11.2, touching L22 | 1.05 | kept at the gap limit |
| L22 front | 9 | 10.5 | 11.15 | 1.06 | **11.1** (square rim) |
| L22 rear | 10 | 11.1 | 11.15 | 1.00 | kept |
| L23 front | 11 | 11.3 | 11.4 | 1.01 | kept |
| L23 rear, L24 front | 12, 13 | 9.6 | 11.1–11.4, touching | — | kept at the gap limit |
| L24 rear | 14 | 11.1 | 11.1 | 1.00 | kept |
| L31/L32 | 16–18 | 7.5 | 7.7 | 1.03 | kept (noise) |
| L33 | 19, 20 | 7.7 | 7.75 | 1.01 | kept |
| L41/L42 | 21–23 | 7.1 | 7.37 | 1.04 | kept (noise) |
| L51 | 24, 25 | 11.1 | 11.2 | 1.01 | kept |
| L52/L53 | 26–28 | 11.3 | 11.4 | 1.01 | kept |

**Changes (three surfaces).**
- Surface 2 goes from 26.8 to 25.5 mm, and surface 3 from 25.4 to 25.5 mm. The figure draws L11's front out to 27.25 mm, with a flat rear annulus stepping in to the cemented face at 25.5 mm. It draws L12 square-cut at 25.5 mm on both faces. Before this pass, the junction matched the L11 front and L12 tapered. This is a step-order fix inside the noise band; the reading is good to 0.1 mm.
- Surface 9 goes from 10.5 to 11.1 mm. The figure draws L22 square-cut at 11.15 mm, with its front meeting L21's rear rim. The model had L22's front 0.6 mm under its rear. At 11.1 mm, surface 9 sits 0.53 mm behind L21's rear annulus, which starts at the surface 8 rim (10.5 mm).

**Kept below the figure.**
- Surface 8 stays at 10.5 mm. R8 and R9 cross at 10.97 mm, and the drawing shows them touching. audit:surface rejects 10.6 mm: the combined sag is 5.56 mm against a 5.445 mm allowance in the 6.050 mm gap.
- Surfaces 12 and 13 stay at 9.6 mm. R12 and R13 cross at 10.16 mm across the 0.200 mm space, and audit:surface rejects 9.7 mm (0.18 mm allowance). The figure draws L23's knife edge at 11.4 mm with L24 resting on it.

**Clearance after the edit.**
- audit:surface reports no errors, and audit:image-circle reports 0 undersized.
- audit:field-coverage passes 26/26 stations at ≥ 99 %.
- clearap at Y = 14.0 mm, at infinity and at 0.45 m, flags no axial clipping and no blocked chief ray.
- At surfaces 2 and 3 (now 25.5 mm), the axial marginal ray reaches 8.72 and 8.62 mm and the chief ray 23.65 and 22.99 mm. At surface 9 they reach 4.92 and 8.56 mm.
- The engine values are the same before and after: half-field 35.80°, F/3.6, stop radius 6.802 mm.
- The wide-open vignetting curves at W, mid-zoom and T are unchanged (W: 81.0 % at 36°, 66.7 % at 39°), because surface 1 already limits the front bundle.

**Live render.** The local page renders without overlaps at 18.4, 57.4 and 102 mm, at infinity and at 0.45 m. D1 now steps from L11 down to a square-cut L12, and L22 is square-cut, as Fig. 17 draws. The renderer joins unequal rims with a straight bevel, so L21's flat rear annulus (15.0 down to about 11 mm in the figure) appears as a chamfer.

**Maker diagram.** Nikon's diagram agrees with Fig. 17: 15 elements in 11 groups, the same grouping, and the same relative element heights within the diagram's resolution. The ED element is L32 (element 9) and the aspherical element is L21 (element 4).

Open: the rims of surfaces 8, 12 and 13 are set by the validator gap limit, not by the drawing.

## 2026-10-29 — Second review: diagram, labels and movement

**What was compared.** The local page was shot headless at 2×–6× at 18.4, 30, 57.4 and 102 mm, at infinity and at 0.45 m, with the zoom and focus movement overlays at W and T and the inspector open on elements 1, 4, 5 and 9. It was set beside US 7,839,577 B2 Fig. 17 (page 18), read again at native resolution, and beside Nikon's construction diagram. The scale was re-derived from all 28 vertex crossings: surface 1 at y = 2285 px, surface 28 at 1102 px, so 1183 px for 95.263 mm, or 0.0805 mm/px. Every intermediate crossing falls within 1 px of the prescription.

**Silhouette differences found.** Half-heights were measured again from the figure edges, averaged over both sides.

- L11 is drawn as a square block: a cylindrical edge at 27.3 mm, then a flat rear land stepping in to the cemented face at 25.5 mm. The site drew it as a 4.7 mm-long bevel from the 26.8 mm front rim down to the 25.5 mm junction.
- L21 is drawn as a square block 15.0 mm high. Its concave rear face ends at 11.2 mm, 5.5 mm behind the surface 8 vertex, and a flat land runs out to the edge. The site draws a chamfer from 14.8 mm (surface 7) to 10.5 mm (surface 8). Nikon's diagram draws this element with a short cylindrical edge and a chamfer, closer to the site.
- L23 is drawn with a knife edge at 11.3 mm and L24 square-cut at about 11.3 mm. The site has 11.3 / 9.6 mm and 9.6 / 11.1 mm. The real surfaces 12 and 13 cross at 10.16 mm, and at 0.45 m the Y = 14 mm bundle reaches 10.23 mm there. An inferred rim cut on 13 therefore cannot clear the beam before the faces cross, and these rims stay.
- G3–G5 agree within noise: L31/L32 7.7 (site 7.5), L33 7.7 (7.7), L41/L42 7.4 (7.1), L51 11.2 (11.1), L52/L53 11.4 (11.3). The drawn order of heights is kept: G4 is shorter than L33, and L51 is shorter than the rear doublet.

**Changes.**

| Item | Before | After | Evidence |
|---|---|---|---|
| Surface 2 `sd` (L11/L12 junction) | 25.5 | 26.8 | L11 is now square at 26.8 mm (Fig. 17: 27.3). The step to L12's 25.5 mm rear rim falls at L12's edge, 0.4 mm long axially, where Fig. 17 draws L11's land. L12's rear stays at 25.5 mm, so L12 stays shorter than L11. The cemented line now runs to 26.8 mm instead of ending at 25.5 mm. audit:surface reports no errors at 26.8. Rays that pass surface 2 between 25.5 and 26.8 mm meet surface 3's unchanged 25.5 mm rim 0.4–1.1 mm behind it. The engine half-field and every zoom station's half-field are unchanged. The meridional vignetting curves at zoom fractions 0, 0.12, 0.2, 0.3, 0.5 and 1 are identical. clearap's own stop fraction at surface 2 drops from 57 % to 26 %, but surfaces 1 and 3 still stop the same bundle. |
| `doublets` text and element `cemented` | D1, D2, D3, D4 | C1, C2, C3, C4 (same ranges) | The cemented brackets read like the gap labels d1–d4 beside the slider and on the diagram. The patent names no cemented components. Earlier sections of this log call them D1–D4. H1 is kept. |
| G2 bracket text | G2 (−) focus | G2 (−) | At 18.4 mm the bracket text ran into G1's as "G1 (+)G2 (−) focus". At 102 mm and 0.45 m, a longer variant ran into G3's. "G2 (−)" is Fig. 17's notation and leaves a clear gap at every state shot. The focus panel still names G2 as the focusing group. |
| L21r `role` | Resin layer carrying the aspherical object-side surface of L21 | adds "part of L21, not a separate lens" | The inspector shows the resin layer and the glass body as "DOUBLET H1". This follows the hybrid rule in LENS_DATA_SPEC.md and the other Nikon hybrids (AF-S DX 18-70 H1, AF-S DX 18-200 VR H21, AF-S DX 16-80 H21, AF-S 24-70 f/2.8G H1). No other element shares H1, so the inspector never reads a triplet. |
| `.analysis.md` glass sentence | six within 0.02 in νd | five within 0.02; L33 is 0.05 from S-PHM52 | catalog νd 63.33 against the printed 63.38 |
| `.analysis.md` zoom paragraph | — | Fig. 17's G4 arch noted as schematic | see Movement |

**Proposed, not applied (policy fields).** Following Fig. 17, L21's rear can carry an inferred land: surface 8 `sd` 10.5 → 14.0, `rimCutDepthMm: 4.98` (cut radius 10.75 mm), and `checks.gapSagFrac: 0.96`. Surface 8 cannot exceed R8 = 14.0958 mm. The figure's cap end, 11.2 mm, is past the 10.97 mm crossing with surface 9.
- Beam clearance: the validator's wide-open beams reach 10.648 mm on surface 8 (W, infinity, 40.3°), and clearap's 0.45 m bundle at Y = 14 reaches 10.69 mm.
- With that set, a scratch copy passes audit:surface, image-circle, field-coverage (26/26) and aperture (26 within 3 %). clearap at infinity and 0.45 m reports no axial clip and no blocked chief ray.
- The land then sits 0.24 mm ahead of L22's front rim. At 0.95, the land's 5.807 mm intrusion exceeds the 5.747 mm allowance.
- The engine half-field at W rises from 35.80° to 36.44°, because surface 8 is no longer the field limiter. The meridional transmission at 39° rises from 66.7 % to 67.2 %. The other stations are unchanged.
- The drawing would become the square block of Fig. 17, with the 14.8 mm front rim joining the 14.0 mm land end over 5.4 mm.

**Checked and found correct.**
- Element types against the signs of R: all 16 entries match ¶0109. L21r has the only aspheric surface (Table 17 `*6`). It carries the A suffix, and the inspector shows ASPH on L21r alone.
- The stop sits at surface 15, 0.400 mm ahead of L31, between L24 and L31.
- Group brackets cover G1 1–5, G2 6A–14, G3 STO–20, G4 21–23 and G5 24–28, as ¶0109 and Fig. 17 group them. Gap labels d1–d4 and Bf are Table 19's.
- Tags: the patent text names no special glass, so no tag can be "patent". L32 carries `apd: "inferred"` at the element Nikon colours as ED, and the inspector shows APD (INFERRED) with the note. Nikon's diagram also agrees on count (15/11) and colours L21 as the aspherical element.
- Glass labels resolve for all media except the L21 resin. For the resin, Table 17 gives only nd 1.55389 / νd 38.09, with no name, line index or θgF.

**Movement.**
- Zoom: the 26 stations ascend from 18.401 to 102.002 mm. Stations 0, 18 and 25 carry Table 19 exactly (d1 1.925 / 27.504 / 41.483; d2 24.941 / 7.881 / 3.243; d3 2.033 / 7.048 / 8.771; d4 13.813 / 8.798 / 7.075; Bf 38.310 / 58.032 / 65.481), and every gap moves in ¶0060's direction.
- Each group's first surface, measured from the image plane at W/M/T:
  - G1: 133.57 / 161.81 / 178.60 mm.
  - G2: 118.70 / 121.36 / 124.17 mm. The calculated cam takes it to 115.90 mm at 30.6 mm.
  - G3 (the stop): 77.76 / 97.48 / 104.93 mm.
  - G4: 67.12 / 81.83 / 87.56 mm.
  - G5: 50.11 / 69.83 / 77.28 mm.
- Every group moves toward the object over the range. Only G2 turns back, as turns.mjs reports.
- Fig. 17's arrows are schematic. G1, G3 and G5 drop about 95 px each for travels of 45.0 and 27.2 mm. The G2 and G4 arches both rise about 47 px and end within 4 px of their start.
- The model's G4 does not arch. Its path between the printed states is not published, so the cam was left alone.
- The zoom overlay shows every group's wide end to the image side of its tele end.
- Focus: keyframe 0 is infinity and keyframe 9 is 0.45 m. Only d1 and d2 change, with their sum held, so G2 moves toward the object: 1.07 mm at W and 4.55 mm at T (d1 1.925 → 0.850 and 41.483 → 36.931). d3, d4 and Bf stay fixed. The focus overlays show the same, and the slider's far end reads 45 cm.

**Results after the edits.** audit:surface reports no errors. audit:image-circle reports 0 undersized. audit:field-coverage passes 26/26 stations at ≥ 99 %, and audit:aperture puts all 26 within 3 %. clearap at Y = 14 mm, at infinity and at 0.45 m, shows no axial clip and no blocked chief ray. built.mjs gives half-field 35.80°, F/3.6 and stop radius 6.802 mm, the same as before. The re-shot page shows no overlaps at any state, with brackets C1, H1, C2, C3 and C4. At 18.4 mm the labels read "G1 (+)" and "G2 (−)" with a clear gap. At 102 mm the G3/G4 and G4/G5 labels sit one space apart, as before this pass.

Open: surfaces 8, 12 and 13 stay below the figure, 8 pending the proposed land and 12/13 for want of room before the faces cross. The G4 arch in Fig. 17 is not modelled.

## 2026-10-29 — Coordinator follow-ups after the second review

- L21 resin layer: `dPgF: 0.0130674` added (θgF 0.5928 against the engine normal line 0.6438 − 0.001682 νd). The value
  is printed for this resin (nd 1.55389, νd 38.09) in WO 2021/039812 A1 Table 8 (printed p. 52), a later reprint of
  this design, and independently in US 2021/0026133 A1 Table 5 (printed p. 12) and JPWO 2019/116563 A1 p. 19. JP
  2009-156890 A itself prints only nd and νd. The resin still has no catalog row, so it counts as Abbe-modelled in the
  coverage report; the g-line now follows the printed partial dispersion.
- Declined: the review's optional inferred land on L21's rear (S8 `sd` 14.0, `rimCutDepthMm` 4.98) would need
  `gapSagFrac` 0.96, and Nikon's construction diagram draws L21 with a chamfer, which the current render already shows.
