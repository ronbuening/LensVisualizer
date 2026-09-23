# Audit Log - Nikon AF-S NIKKOR 70-200mm f/2.8E FL ED VR

Patent: WO 2019/097669 A1, Example 1 (Ito / Nikon)
Catalog version: 952b877

## 2026-05-10 - Patent audit and glass relabel cleanup

### Source Note

- The user-provided PDF at `/Users/ronbuening/Downloads/WO2019097669A1.pdf` is raster/image-only and has no extractable text layer.
- The audit used the attached PDF as the source document and Google Patents' searchable WO2019097669A1 transcription to inspect Example 1, Table 1.

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `glass` | `S-LAH79 (OHARA)` | `950294 - ultra-high-index dense flint (patent nd=1.95000, vd=29.37)` | Patent Table 1 row 1 lists nd=1.950000, vd=29.37. Catalog S-LAH79 is nd=2.00330, so the prior label resolved to the wrong Sellmeier data. |
| L21 / S6 | `glass` | `S-LAM51 (OHARA)` | `720503 - lanthanum crown (patent nd=1.71999, vd=50.27)` | Patent Table 1 row 6 lists nd=1.719990, vd=50.27. Catalog S-LAM51 is nd=1.70000, so the prior label resolved incorrectly. |
| L32 / S17 | `glass` | `K-VC89 (Sumita) / J-PSKH1 (HIKARI)` | `593679 - fluorophosphate crown (patent nd=1.59319, vd=67.90)` | Patent Table 1 row 17 lists nd=1.593190, vd=67.90. Catalog K-VC89 is nd=1.80998 and does not match. |
| L32 / S17 | `apd` / `apdNote` | `inferred`, `ED glass, anomalous partial dispersion` | `false`, removed note | The patent publishes only nd/vd for this glass and no dPgF or line indices, so the audit keeps the ED inference in prose but removes the UI APD badge. |
| L35 / S23 | `glass` | `LaH family (no exact catalog match)` | `903357 - high-index lanthanum flint (patent nd=1.90265, vd=35.73)` | Patent Table 1 row 23 lists nd=1.902650, vd=35.73. A six-digit code label keeps the existing Abbe fallback and future-proofs a catalog upgrade. |
| L42 / S28 | `glass` | `S-LAH79 (OHARA)` | `950294 - ultra-high-index dense flint (patent nd=1.95000, vd=29.37)` | Same patent constants as L11; same false S-LAH79 resolver issue. |
| L43 / S29 | `glass` | `K-VC89 (Sumita) / J-PSKH1 (HIKARI)` | `593679 - fluorophosphate crown (patent nd=1.59319, vd=67.90)` | Same patent constants as L32; same false K-VC89 resolver issue. |
| L43 / S29 | `apd` / `apdNote` | `inferred`, `ED glass` | `false`, removed note | Same partial-dispersion-data limitation as L32. |
| L53 / S34 | `glass` | `S-LAM51 (OHARA)` | `720503 - lanthanum crown (patent nd=1.71999, vd=50.27)` | Same patent constants as L21; same false S-LAM51 resolver issue. |
| L55 / S38 | `glass` | `K-VC89 (Sumita) / J-PSKH1 (HIKARI)` | `593679 - fluorophosphate crown (patent nd=1.59319, vd=67.90)` | Same patent constants as L32; same false K-VC89 resolver issue. |
| L55 / S38 | `apd` / `apdNote` | `inferred`, `ED glass` | `false`, removed note | Same partial-dispersion-data limitation as L32. |
| L56 / S40 | `glass` | `S-LAM51 (OHARA)` | `720503 - lanthanum crown (patent nd=1.71999, vd=50.27)` | Same patent constants as L21; same false S-LAM51 resolver issue. |

### Phase 2 - Retained-information audit

- Corrected L12 `type` from `Plano-Convex Positive` to `Biconvex Positive`; the Example 1 prose describes L12 as biconvex, with the patent table showing a very weak rear radius of R=-998.249 mm.
- Confirmed all surface radii, axial thicknesses, nd values, and element vd values against Example 1 Table 1 rows 1-41.
- Retained surface 36 as `R: 1e15`: the table prints `0.000`, but Example 1 prose explicitly describes L54 as plano-concave, matching an infinite front radius.
- Confirmed variable gaps D1-D4 for W/M/T at infinity and finite distance against the Table 1 variable-spacing block.
- Confirmed group focal lengths f1=143.951, f2=-45.574, f3=94.464, f4=58.195, and f5=-109.088.
- Confirmed no aspherical surfaces for Example 1; `asph: {}` remains correct.
- Semi-diameters remain project-estimated layout values because the patent does not publish clear apertures.

### Phase 3 - Spectral / metadata enrichment

- The patent does not publish nC, nF, ng, PgF, or dPgF values, so no spectral fields were added.
- Existing metadata already records the patent year, design focal lengths, design aperture, element count, group count, mount, format, maker, and focus description.
- Regenerated unresolved-glass tracking now records codes 950294, 720503, 593679, and 903357 for this lens.

### Phase 4 - Analysis sync

- Updated `NikonNikkorAFS70200mmf28E.analysis.md` glass table and element-by-element narrative to use the audited code labels.
- Removed unsupported K-VC89/Sumita and S-LAM51/S-LAH79 exact-match claims.
- Rephrased the 593679 elements as ED candidates backed by nd/vd and Nikon's production ED count, not as catalog-backed APD glasses.
- Updated L12 prose to match the patent's biconvex description while noting the nearly plano rear radius.

## 2026-09-23 — First-added diagram audit, lens 100

### Sources

- Local scan `patents/WO2019097669A1.pdf` (image-only, 115 pages): front page (p. 1), Example 1 prose ¶0047–¶0054
  (pp. 16–17), Table 1 (pp. 19–22), FIG. 1 section (p. 74), FIG. 2 infinity and FIG. 3 finite-distance aberration
  plots (pp. 75–76), section figures of Examples 2–9 (pp. 78–106), Table 3 asphere row (p. 32). All numbers were read
  from the rendered pages. The Google Patents transcription was used only to search the text for glass names.

### Example choice

- Example 1 is the only example with 22 elements / 18 groups. The section figures of Examples 2–9 show 20, 19, 19, 20,
  20, 20, 20 and 20 elements. Its nd/νd values give exactly the production 6 ED + 1 fluorite + 1 HRI count. The stored
  example is correct.

### Re-verified and kept

- Front page: WO 2019/097669 A1, inventor ITO Tomoki, applicant Nikon Corporation, published 23 May 2019.
- All 41 rows of R, d, nd and νd, the stop at surface 14, no aspheres, the D1–D4 infinity and finite-distance columns
  for W/M/T, f1–f5 and the VR data. Surface 36 is printed "0.000" but is described as plano-concave; R = ∞ is kept.
- EFL 71.498 / 134.996 / 196.000 mm; BF 54.000 mm with no filter plate (¶0057 defines BF as last surface to image).
  Paraxial image-plane offset 0.008 / 0.094 / 0.046 mm, consistent with table rounding. TL 246.01 mm.
- Group motion (¶0052): G1, G3 and G5 fixed; G2 moves toward the image; G4 moves toward the object and then back
  (D3 16.922 → 14.105 → 16.921). Focus by G4 toward the object (¶0053), 13.99 mm at tele. VR by L52+L53 and L54 (¶0054).
  Only the three tabulated stations are stored. The group-movement overlay shows these motions.
- Element `fl` values match the thick-lens values to 0.05 mm, and every `type` agrees with the R signs.
  elementCount 22 and groupCount 18 are correct.
- Semi-diameters within about 15 % of FIG. 1 were kept: G1, L21, L31, L32, the L35+L36 doublet, G4, L51, the L52+L53
  doublet, L55 and L56.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| `nominalFno` / `apertureDesign` | 2.8 / 2.9 | 2.85 / 2.85 | FIG. 2 prints FNO 2.85 / 2.90 / 2.86; Table 1 rounds to 2.9. The stop is fixed in G3. One real-ray iris gives all three values (19.48 / 19.43 / 19.40 mm needed), so no zoom aperture model is used |
| STO `sd` | 12.3 (paraxial f/4.5) | 19.5 | Fixed-iris radius for f/2.85; FIG. 1 draws S at about 20.5 mm |
| `fstopSeries` / `maxFstop` | from 2.8 / 16 (default) | from 2.85 / 22 | Reachable wide-open value; production minimum aperture f/22 |
| `closeFocusM` | 1.1 | 1.0 | The finite-distance D3/D4 gaps focus at 1000.15 / 1000.04 / 999.92 mm object-to-image. FIG. 3 object heights 250.21 / 134.69 / 90.61 mm for Y = 21.6 give 0.086× / 0.160× / 0.238×, versus paraxial 0.087× / 0.158× / 0.233×. Production is 1.1 m; this is labelled calculated |
| S11 / S12 `sd` | 18.2 / 18.2 | 19.0 / 20.4 | Clipped the f/2.85 axial beam (18.77 mm needed). FIG. 1 draws the L24 rim at 20.4 mm and the L23/L24 edges touching |
| S10, S13 `sd` | 21.5, 20.8 | 20.1, 20.4 | FIG. 1 L23 rim 20.1, L24 rim 20.4 (kept L23/L24 coherent) |
| S8 / S9 `sd` | 21.0 / 22.5 | 19.5 / 19.5 | FIG. 1 L22 rim 19.3 mm (S9 was 17 % oversize) |
| S20 / S21 `sd` | 18.4 / 18.4 | 19.2 / 20.0 | Clipped the axial beam (19.01 mm needed); FIG. 1 L34 rim 20.0 mm |
| S19, S22 `sd` | 21.5, 20.2 | 20.3, 20.0 | FIG. 1 L33 rim 20.3, L34 rim 20.0 |
| S36 `sd` | 13.7 | 16.0 | FIG. 1 draws the flat front of L54 to 16.1 mm (15 % under), matching its 16.0 mm rear |
| `gapSagFrac` | default 0.90 | 0.97 | The L23/L24 and L33/L34 edges touch in FIG. 1. At 0.90 the gaps could not hold the axial beam (limit ≈18.3 mm at S11/S12) |
| Glass labels | code forms, FCD1, S-TIH53, S-PHM53, S-LAH55VS, S-LAH99, E-FL5, S-LAH65VS, S-LAH98 | J-LASFH15, J-FKH1, J-LAK10, J-SF03 (nearest), J-PSK03, S-LAH55V, J-PSKH1, TAFD55 (nearest), J-LASFH9, J-LF5, J-LASF015, J-LASFH21 | Exact nd/νd catalog coordinates (Hikari preferred). FCD1 was 0.0008 off in nd and 0.98 off in νd. The code labels now have exact Hikari matches |
| L13 `apd` | patent | inferred | The patent never names fluorite, ED or anomalous dispersion. 1.433852/95.25 are CaF₂ coordinates |
| L32 / L43 / L55 `apd` | false | inferred | Exact J-PSKH1; with the three J-FKH1 elements these make up Nikon's six ED elements |
| Cemented tags | D1–D4 | C1–C4 | D1–D4 are the patent's variable-gap names, shown on the same diagram |
| Header / analysis | "G1 capped", ray-trace SD method, 1.1 m close focus, "60 mm marginal height at tele", "stop is a group", code-label glass prose | FIG. 1 SD method, aperture and near-state sections, corrected axial height (34.3 mm), group count, glass table | Findings above |

### Checks on the result

- Surface validator: no errors at any zoom position. Image-circle floor: no undersized surface.
- Exact real-ray trace at Y = 21.6 mm and f/2.85 / 2.90 / 2.86: no axial clipping and no chief-ray blocking at
  infinity or at the near state. The corner is reached at ω = 16.82° / 8.86° / 6.10°, matching FIG. 2 (16.82 / 8.87 /
  6.10).
- The engine derives an iris radius of 19.48 mm, f/2.85 at wide, and a close-focus label of 1.00 m.
- All 22 glass labels resolve to catalog entries. The largest νd difference is 0.25, for CaF₂ (patent 95.25, catalog 95.00); all others are within 0.03.
- Live headless render: wide, mid and tele at infinity, and tele at 1.00 m, render cleanly. The zoom-movement overlay
  shows G2 moving toward the image with G4 reversing, and the focus overlay shows G4 moving 13.99 mm toward the object.

### Open limitations

- The patent's 2ω row (22.4 / 41.1 / 57.9) and condition (8) ωw = 11.200 contradict f and Y. FIG. 2 and the ray trace
  give ω = 16.82° at wide. This is recorded as a source error.
- The iris, the near-state distance and all special-glass identities are derived or inferred; the patent publishes none of them.
- The patent's near state (1.00 m, 0.23× at tele) is closer than production (1.1 m, 0.21×). The published gaps are kept
  and are not extrapolated to production.
