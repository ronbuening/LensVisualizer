# Audit Log — Nikon AF-S NIKKOR 105mm f/1.4E ED

Patent: JPWO2019116563A1 / WO2019/116563 A1, Example 3

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L14 / 6 | `glass` | `S-LAM2 equiv. (Ohara)` | `S-NBH8 (Ohara)` | Patent Example 3 row 6 lists nd=1.72047, vd=34.71, θgF=0.583; S-NBH8 is the sourced Ohara match. |
| L35 / 19 | `glass` | `S-LAM2 equiv. (Ohara)` | `S-NBH8 (Ohara)` | Patent Example 3 row 19 repeats nd=1.72047, vd=34.71, θgF=0.583; reused S-NBH8 consistently with L14. |
| L36 / 20 | `glass` | `S-LAH64 equiv. (Ohara)` | `S-LAH96 (Ohara)` | Patent Example 3 row 20 lists nd=1.76684, vd=46.78, θgF=0.558; S-LAH96 is the closest sourced Ohara match among the reviewed catalog candidates. |
| L37 / 22 | `glass` | `S-TIL26 (Ohara)` | `E-FL5 (HOYA)` | Patent Example 3 row 22 lists nd=1.58144, vd=40.98, θgF=0.576; Hoya E-FL5 is the exact sourced catalog match, so no generic code was used. |

### Phase 2 — Retained-information audit

- Checked the flagged Example 3 rows against the extracted Japanese national-phase patent table; stored `nd`, `vd`, θgF, and element mapping already matched.
- No surface curvature, spacing, focus variable, stop, mount, or format edits made.

### Phase 3 — Spectral / metadata enrichment

- Reviewed existing catalog entries before relabeling. S-NBH8, S-LAH96, and E-FL5 already include manufacturer/refractiveindex.info-backed source data.
- No new catalog addition was required.

### Phase 4 — Analysis sync

- Updated L14, L35/L36, L37, glass-map summary, achromatization text, and source list.

## 2026-08-21 — Near/close glass-candidate review

- Rechecked WO 2019/116563 A1's L33 coordinate and partial dispersion, then assigned Hikari J-SF1 as a
  supplier-neutral spectral proxy.
- Retained the patent-authored `dPgF`; the catalog curve does not assert the production supplier.

## 2026-09-08 — First-hosted audit source preparation (lens 5, incomplete)

- Primary local source inspected: `patents/JPWO2019116563A1.pdf`, Example 3, prose ¶0075–0080 on p14, Table 3 on p15, Figure 5 on p33. The PDF is the Japanese national-phase publication; reconcile the structured publication identifier with this exact source when implementing.
- Visually checked Table 3: all current R/d/nd/νd entries match. Source f=102.148 mm, FNO=1.450, full field=23.842°, Y=21.63 mm, TL=150.819 mm, BF=39.632 mm. Current nominalFno=1.4 contradicts model f/1.45 despite apertureDesign=1.45; design focalLength=102.1 also loses published precision. Keep marketing 105/1.4 separate.
- Source confirms D7=7.956→19.956 and D10=17.029→5.029: G2 translates 12 mm imageward, consistent with ¶0075 and the Figure 5 arrow. No zoom. Close magnification is β=−0.132; Table 3 does not give a 1.000 m object distance. Independent paraxial propagation gives β=−0.13208352 and object-to-image 998.66065 mm, consistent with a rounded 1 m label. Do not invent a different travel schedule to force a rounded product distance.
- L14 is biconcave (R6<0, R7>0; explicitly described in ¶0076), but the current type says negative meniscus. Correct its surfaced shape label.
- Table 3 supplies θgF for every element, but current dPgF entries are partly omitted or rounded estimates. Preserve all source ratios exactly through `dPgF = theta - (0.6438 - 0.001682*vd)`, in element order: theta=[0.537,0.539,0.539,0.583,0.633,0.536,0.599,0.543,0.604,0.539,0.583,0.558,0.576,0.599]. Corresponding dPgF=[0.005894,0.03246802,0.03246802,-0.00241778,0.03439534,-0.00035384,0.00419666,-0.00741536,0.00993674,0.03246802,-0.00241778,-0.00711604,0.00112836,0.00419666]. Reconcile APD badges/notes with the published source ratios and conservative designation rules.
- Glass supplier and material claims need review: catalog equivalents must not identify production suppliers; the patent APD medium is not identified as a Nikon-manufactured glass merely by assignee. The D2 `APD+BK7` annotation should distinguish BK7 equivalence from source identity.
- Figure 5 was inspected for element/group order and motion. Exact high-DPI rim measurements, production live inspection, changes and batch verification are pending. No production changes made for this lens yet; Mac remains locked.

### Implementation and live comparison

- Production infinity view confirmed f/1.4 control despite f/1.45 source specification and the narrow pre-stop doublet. Local model now uses nominalFno 1.45, first aperture button 1.45, design focal length 102.148 and full-field metadata 23.842°. Marketing 105/1.4 retained; product name spacing normalized to f/1.4E.
- Preserved all fourteen Table 3 θgF values using exact normal-line conversion; upgraded previously inferred positive APD flags where the patent now directly supplies the partial-dispersion evidence. Supplier labels explicitly describe equivalents; unmatched L21 does not assert a Nikon glass supplier. D2 annotation uses APD+crown instead of an asserted BK7 identity. Corrected L14 to biconcave.
- Figure 5 at 600 dpi: first-to-last vertex span 111.187 mm calibrates the drawing; front L11 rim ~38 mm, L21 ~28 mm, L31 ~25 mm, rear doublets ~17 mm. Existing apertures broadly follow those proportions, but L32 front and its cemented interface were visibly too small. Changed surface 13 from 19 to 23.5 mm and 14 from 19.2 to 22.5 mm. Targeted surface validator passes.
- Local views at focus 0, 0.5, 1 show no overlap. G1/G3 remain fixed; motion chart shows G2 moving imageward, 12.00 mm maximum travel. Source gaps display 7.96/17.03 at infinity, 13.96/11.03 at midpoint, 19.96/5.03 at close. Aperture endpoints now read f/1.45 and f/16. Wide-open EP is explicitly labeled as such.
- Corrected analysis sourcing and removed unsupported mirror-box clearance claims. Clarified that the close station is approximately 1 m and DP1's thickness condition applies to L21, not every ED element. Authored regression tests for all source partial-dispersion ratios, fixed-camera motion and hidden trimming; batch tests/gates remain pending.
