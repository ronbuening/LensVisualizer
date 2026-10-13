# Audit Log - Sony FE 90 mm F2.8 Macro G OSS

Patent: WO 2016/136352 A1, Example 2

## 2026-05-20 - Glass relabel pass

- Opened the local untracked patent PDF at `patents/WO2016136352A1.pdf`; local extraction is image-only, so the patent rows were cross-checked against the public Google Patents text.
- Confirmed relabel rows at surfaces 6, 20, 22, and 24.
- Updated G4 to `MC-TAF101-100 (HOYA)` for nd=1.76800, vd=49.24.
- Updated G5 to `S-LAH66 (OHARA)` for nd=1.77250, vd=49.62, clearing the prior no-catalog M-TAC60 annotation.
- Updated G12 to `S-TIM25 (OHARA)` for nd=1.67270, vd=32.17.
- Updated G13 to `S-LAH95 (OHARA)` for nd=1.90370, vd=31.32.
- Updated G14 to `N-SSK5 (Schott)` for nd=1.65840, vd=50.85.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Corrected this audit header from Example 1 to Example 2, matching `SonyFE90mmf28.data.ts` and the companion analysis sidecar.
- Rechecked local `patents/WO2016136352A1.pdf`; local extraction is image-only, so this pass relies on the existing Example 2 analysis and prior cross-check against public patent text.
- Existing R/d/nd/vd, focus spacings, high-index/catalog labels, APD metadata, and estimated SD profile remain consistent with the patent-backed Example 2 prescription and prior relabel pass.
- No APD, high-index, glass-label, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-07-29 - Catalog-coordinate correction

- Corrected G7 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.9229 / 20.88 row.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 2 Table 5 on PDF page 24 (printed page 22) at 200 dpi: surface 27 d = 22.747; surfaces 28–29 are one
  plane plate, 2.500 mm, nd 1.5168, νd 64.1983, then 1.000 mm to IMG. Paragraph [0094] (page 23) names it optical
  filter FL between GR5 and IMG. d27 is not a Table 8 variable gap, so the plate is camera-fixed.
- Surface 27 now stores the patent's 22.747 mm, with `rearPlates` FL (N-BK7; 1.51680 / 64.2 class, catalog-compatible)
  and gapAfter 1.000 mm, replacing the legacy air-equivalent 25.4 mm (the patent's two-decimal BF 25.40).
- Paraxial check against the previous data: EFL identical at all three focus keyframes; defocus changes by 0.0048 mm
  (22.747 + 2.500/1.5168 + 1.000 = 25.3952 vs the rounded 25.4). Physical track grows by 0.847 mm to 145.005 mm,
  matching the analysis's physical S1-to-image figure.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 2 prints ω = 13.15° (Table 7, PDF p. 25), and the Fig. 6 infinity aberration plots run to Y = 21.63 mm (PDF
p. 44), within 0.02 mm of the full-frame corner (21.65 mm), so the design covers the format. The estimated rims (rear
elements sized for a 40% field) clipped the real chief ray (solved through the stop centre) at surface 27 from 10.3°,
leaving the infinity-focus analysis field at 77% of the corner (16.71 mm). The traced corner chief ray (13.27°) needs
surface 1 ≥ 19.06, 2 ≥ 18.18, 3 ≥ 16.87, 4 ≥ 15.83, 26 ≥ 10.67 and 27 ≥ 11.41 mm; every other rim is clear (surface 25
keeps 0.17 mm). Values are floor + ~0.5 mm, rounded up. Surface 2 also equals G1 scaled with surface 1 (×1.107);
surface 5, G3's rear face (14.58 mm at the corner), is scaled with the cemented junction 4 (×1.038); G15 is a strong
meniscus (R −27.80 / −75.22), so surfaces 26 and 27 take their own floors. Fig. 5 (300 dpi, 0.1076 mm/px) draws G1 to
about 24.9 mm and G13–G15 to about 15 mm, so every new value stays inside the drawn outline; the figure was used only
as that bound.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 17.7 | 19.6 | corner chief ray 19.06 mm + clearance |
| 2 | 16.9 | 18.7 | corner chief ray 18.18 mm + clearance (= G1 scaled ×1.107) |
| 3 | 16.8 | 17.4 | corner chief ray 16.87 mm + clearance |
| 4 | 15.8 | 16.4 | corner chief ray 15.83 mm + clearance; cemented G2/G3 junction |
| 5 | 15.5 | 16.1 | G3 scaled with surface 4 (×1.038); does not clip |
| 26 | 8.9 | 11.2 | corner chief ray 10.67 mm + clearance |
| 27 | 8.9 | 12.0 | corner chief ray 11.41 mm + clearance |

The validator accepts the new values, the traced edge now reaches 21.65 mm at 13.3° with every rim clear, and the
image-circle floor still reports nothing undersized. No aspheric surface changed (the S7 departure the analysis quotes
is untouched), and the analysis quotes none of the changed rims.

## 2026-10-08 - dPgF moved to the engine's normal line

Patent formula: none. Read the whole description and claims of local `patents/WO2016136352A1.pdf` as page images (the
PDF has no text layer). The symbol list [0065] (PDF p. 17, printed p. 15) defines only ri, di, Ni (d-line) and νi;
Example 2 Table 5 (PDF p. 24) has only those columns; conditions (1)–(4) (PDF pp. 5, 9–12; Table 16 on PDF p. 34) are
|fr/f|, y′/BF, f/ff and 1/GF. The patent prints no partial dispersion, no deviation and no normal line, so both stored
values were vendor-catalog deviations, and the catalog rule applies: `dPgF` = PgF of the catalog glass the label
resolves to, minus the engine's line 0.6438 − 0.001682·νd.

| Element | νd | Source figure | Stored before | Stored after |
|---|---|---|---|---|
| G2, S-FPL51 (OHARA) | 81.61 | patent: none; catalog curve PgF 0.5375 | 0.038 | 0.030928 |
| G11, FCD100 (HOYA) | 95.1 | patent: none; catalog curve PgF 0.5336 (HOYA ΔPg,F 0.0564 on HOYA's line) | 0.056 | 0.049777 |

- Which line the old values were on, from the local vendor files: `tmp/pdfs/HOYA20260707_include_obsolete.agf` lists
  ΔPg,F 0.0564 for FCD100 and 0.0375 for FCD1, with C7 and F2 at zero; the line through that file's C7 and F2 curves
  is 0.6484 − 0.001802·νd, i.e. 0.64833 − 0.0018·νd. G11's 0.056 was HOYA's figure rounded (the catalog PgF gives
  +0.0565 on that line). G2's 0.038 fits no S-FPL51 reading (+0.0309 engine line, +0.0360 on 0.64833 − 0.0018·νd,
  0.0280 in `tmp/pdfs/ohara-260701/OHARA_260701.AGF` on OHARA's own line); it is HOYA's 0.0375 for the equivalent FCD1
  rounded, so it was a HOYA-line value as well.
- Nothing left: these are the only two elements that carry `dPgF`, neither authors nC/nF/ng, and neither is e-line.
- Open, not changed here (glass labels were out of scope): Table 5 prints νd 81.6084 for G2, which is FCD1's value
  from the HOYA file (81.608) and not S-FPL51's (81.546). Under an FCD1 label the same rule would give about +0.0312
  (repo FCD1 curve) to +0.0323 (HOYA file curve) instead of +0.0309.
- Analysis: the G2 sentence in the GR1 section and the G11 table cell now name the line each figure is taken against
  and give the engine-line value; the vendor figures stay, labelled as the vendor's. The data-file header gained a
  partial-dispersion note and both `apdNote` strings were rewritten.
- `dpgfcheck.mjs` on the edited file: builds and validates; both stored values equal the catalog engine-line figures.
