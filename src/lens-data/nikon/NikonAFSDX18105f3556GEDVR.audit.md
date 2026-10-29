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
