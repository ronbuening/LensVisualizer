# Hasselblad XCD 45mm f/3.5 — patent audit

## 2026-09-25 — MTF image-plane census: blocked

The exact publication named by `patentNumber`, WO 2017/221949 A1, is absent from `patents/`. Only `JPWO2017221949A1.pdf` (the Japanese republication cited by the existing header) is available. Per this audit’s exact-source rule, do not substitute that publication to close the row. The previously documented +0.171018 mm residual remains unchanged; no prescription or plate change is made. Section E row retained as **blocked (patent missing)**.

## 2026-11-03 — Image-plane consistency (re-solve)

Source: WO 2017/221949 A1 (the original, now in `patents/`; no text layer, read from page images). Fig. 2 (drawing
sheet 1/12) matches the file in every R, d, De (sd = De/2), nd and νd cell, including d17 = 26.88 mm. ¶0018 calls d17
the back focus and says focal values are d-line; ¶0019 names the Fig. 4 lines (546.074 nm solid, 587.562 nm
dash-dot); ¶0020 prints f = 45.027 mm and BF 26.88 mm.

| Field | Before | After | Justification |
|---|---|---|---|
| gap `17` kf0 (BF) | 26.88 | 27.051018 | Re-solved for d-line paraxial focus at infinity (LENS_DATA_SPEC Image-Plane Consistency) |
| gap `17` kf1 | 34.149114 | 34.149114 | Unchanged: the 0.40 m reconstruction already focuses at 0.4000 m |

- Residual before: +0.171018 mm (12.5 depths at f/3.42, d line); after: 0. Unit-focus travel 7.269 → 7.098 mm.
  EFL unchanged (45.119 mm, d line); closeFocusM stays 0.4.
- Why not class C: with catalog Ohara dispersion scaled to the printed nd, the e-line paraxial focus lies at
  26.953 mm, 0.073 mm behind the printed plane, and real-ray axial best focus lies 0.186 mm (d line), 0.095 mm
  (e line) and 0.105 mm (photopic) behind it. The printed BF is neither line's paraxial plane nor a best-focus plane.
- New finding: the source's summaries are e-line values despite ¶0018. The e-line EFL is 45.029 mm against the
  printed 45.027, and e-line indices reproduce Fig. 3 (L1 −25.261, L2 54.202 mm), where d-line gives −25.393 / 54.609.
  Header, specs comment and analysis now say so.
- The patent's conditions (2) and (3) keep the printed BF; with 27.051 they read 1.755 and 0.902, still in range.

### Follow-ups

- None for the image plane. The Section E row is closed.
