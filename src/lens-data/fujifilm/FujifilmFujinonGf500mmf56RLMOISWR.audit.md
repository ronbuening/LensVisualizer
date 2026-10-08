# Patent and viewer audit

## 2026-09-11 — Direct local-viewer review

Compared both local-viewer focus endpoints with Example 7 Fig. 15, local `patents/WO2025013477A1.pdf`, p.107 (600 dpi, rotated clockwise; 200.967 mm glass span, 54.51 µm/px). Retained SDs after excluding the focus arrow, OIS arrow, and brackets. Confirmed L11–L15, L21, and L31–L45 naming, cemented groups, spherical surfaces, and the stop after L31. G2/L21 alone moves imageward by 12.867863573 mm; D9 + D11 remains 17.001 mm and G1/G3 remain fixed. No zoom travel.

All twenty-one elements resolve to compatible dispersion. The nine patent-APD tags are supported by Table 13 theta-gF values, including two high-dispersion anomalous partners; they are not nine claimed ED elements. The production five ED plus two Super ED count remains separately labeled. No further glass entry or geometry correction is justified.

## 2026-10-08 - dPgF checked against the patent

- Reviewed local `patents/WO2025013477A1.pdf` (133 pages, scanned, no text layer; pages rendered and read as images).
  ¶[0079] on PDF page 19 (printed page 17) defines the partial dispersion ratio as θgF = (Ng − NF)/(NF − NC). The patent
  states no normal line and no deviation formula. Its conditional expressions use the absolute ratio, either alone
  ((20), (28), (31)) or in the sum θ + 0.0025 × ν ((8) on PDF page 19, and (15)); Table 38 on PDF page 71 (printed
  page 69) lists those and prints no ΔθgF.
- Table 13 (Example 7, PDF page 48, printed page 46) prints an absolute θgF for every glass row; ¶[0150] on PDF page 35
  (printed page 33) describes that column as the g–F partial dispersion ratio of each lens. The digits below were read
  from a 200 dpi render of page 48.
- Every stored `dPgF` equals the Table 13 θgF minus the engine's line 0.6438 − 0.001682·νd, exactly to the eight
  decimals stored. No `dPgF`, `apdNote` or comment changed in the data file, and the analysis sidecar needed no edit: its
  statement that the stored values are θgF − (0.6438 − 0.001682 × νd) is correct, and its condition table quotes the
  patent's own θ and θ + 0.0025ν figures.
- A screen that compares stored values with catalog curves flagged this file. That is a false alarm. Table 13's θgF
  differs from the catalog curve of the resolved proxy glass on four classes: 847238 prints 0.62012 against J-SF03
  0.6215 (L34, L42), 497816 prints 0.53887 against H-FK61 0.5380 (L12, L31, L40, L43), 773496 prints 0.55038 against
  J-LASF016 0.5519 (L38) and 697555 prints 0.54260 against J-LAK14 0.5430 (L21). The stored values follow the patent's
  printed figures, not the proxy curves, so a mismatch against the catalog says nothing about which line they are on.
  The two elements the screen read as "patent-style line" are L34 and L42, where the proxy's offset happens to be close
  to the gap between the two lines at νd 23.84.

| Element | νd | Source figure (Table 13, PDF page 48) | Stored before | Stored after |
| --- | ---: | --- | ---: | ---: |
| L11 | 34.47 | Row 1: θgF 0.59233; minus the engine line = +0.006509 | 0.00650854 | 0.00650854 (unchanged) |
| L12 | 81.61 | Row 3: θgF 0.53887; minus the engine line = +0.032338 | 0.03233802 | 0.03233802 (unchanged) |
| L13 | 95.10 | Row 5: θgF 0.53364; minus the engine line = +0.049798 | 0.04979820 | 0.04979820 (unchanged) |
| L14 | 46.50 | Row 7: θgF 0.55727; minus the engine line = −0.008317 | −0.00831700 | −0.00831700 (unchanged) |
| L15 | 95.10 | Row 8: θgF 0.53364; minus the engine line = +0.049798 | 0.04979820 | 0.04979820 (unchanged) |
| L21 | 55.46 | Row 10: θgF 0.54260; minus the engine line = −0.007916 | −0.00791628 | −0.00791628 (unchanged) |
| L31 | 81.61 | Row 12: θgF 0.53887; minus the engine line = +0.032338 | 0.03233802 | 0.03233802 (unchanged) |
| L32 | 23.96 | Row 15: θgF 0.62025; minus the engine line = +0.016751 | 0.01675072 | 0.01675072 (unchanged) |
| L33 | 75.50 | Row 16: θgF 0.54001; minus the engine line = +0.023201 | 0.02320100 | 0.02320100 (unchanged) |
| L34 | 23.84 | Row 18: θgF 0.62012; minus the engine line = +0.016419 | 0.01641888 | 0.01641888 (unchanged) |
| L35 | 42.72 | Row 19: θgF 0.56477; minus the engine line = −0.007175 | −0.00717496 | −0.00717496 (unchanged) |
| L36 | 17.98 | Row 21: θgF 0.65460; minus the engine line = +0.041042 | 0.04104236 | 0.04104236 (unchanged) |
| L37 | 34.47 | Row 23: θgF 0.59233; minus the engine line = +0.006509 | 0.00650854 | 0.00650854 (unchanged) |
| L38 | 49.62 | Row 24: θgF 0.55038; minus the engine line = −0.009959 | −0.00995916 | −0.00995916 (unchanged) |
| L39 | 39.24 | Row 26: θgF 0.58043; minus the engine line = +0.002632 | 0.00263168 | 0.00263168 (unchanged) |
| L40 | 81.61 | Row 27: θgF 0.53887; minus the engine line = +0.032338 | 0.03233802 | 0.03233802 (unchanged) |
| L41 | 40.73 | Row 29: θgF 0.56825; minus the engine line = −0.007042 | −0.00704214 | −0.00704214 (unchanged) |
| L42 | 23.84 | Row 30: θgF 0.62012; minus the engine line = +0.016419 | 0.01641888 | 0.01641888 (unchanged) |
| L43 | 81.61 | Row 32: θgF 0.53887; minus the engine line = +0.032338 | 0.03233802 | 0.03233802 (unchanged) |
| L44 | 28.43 | Row 34: θgF 0.60092; minus the engine line = +0.004939 | 0.00493926 | 0.00493926 (unchanged) |
| L45 | 16.48 | Row 35: θgF 0.66558; minus the engine line = +0.049499 | 0.04949936 | 0.04949936 (unchanged) |

- Left as stored: all 21 elements. Each value is already the engine-line figure for the patent's printed θgF, so the
  eight-decimal values were not re-rounded to six decimals.
- Left as written: the nine `apdNote` strings (L12, L13, L15, L31, L33, L36, L40, L43, L45). Each already quotes the
  Table 13 θgF, and the patent gives no deviation of its own to add.
