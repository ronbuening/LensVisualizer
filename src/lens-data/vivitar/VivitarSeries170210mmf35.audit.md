# Audit Log — Vivitar Series 1 70-210mm f/3.5 VMC Macro Focusing Auto Zoom

Patent: JP S51-63635 A (特開昭51-63635), Table 1 (sole numerical example)

## 2026-10-08 — Inferred stop plane behind the preceding clear cap

Source scope: the 2026-10-07 audit records the Japanese Table 1 note placing the stop directly behind r21, without a distance. The English counterpart [US 3,817,600](https://patents.google.com/patent/US3817600A/en), description of aperture adjustment 50, likewise places it behind L13 without specifying the iris location. The Japanese original was not recovered for this follow-up; filename-only report fixtures are not patent originals. No numerical iris dimension is claimed from either source.

| Field | Before | After | Basis |
|---|---:|---:|---|
| Surface 21 `d` | 0 mm | 1.2 mm | Inferred aperture plane, not a source dimension |
| `STO` `d` | 49.846 mm | 48.646 mm | Preserve the published r21–r22 vertex gap |
| `STO` stored `sd` | 14.457801 mm | 14.777836 mm | Real marginal-ray wide-station f/3.65 iris at the inferred plane, rounded to six decimals |

For R = +94.78 mm and the retained 15 mm clear radius, the spherical sag is 1.194486163722967 mm. A 1.2 mm plane rounds that value upward to the next 0.1 mm and leaves about 0.005514 mm axial clearance beyond the clear cap. Sag is monotone over that cap, so the clearance holds independently of the sampled rays. Group IV is fixed internally throughout the authored zoom and focus travel. This is sufficient forward clearance for a sequential aperture-plane model; it is neither a measured blade position nor a universal mechanical lower bound. Other aperture abstractions could represent an iris nearer the vertex. The zero-gap model instead demands backward travel from nonaxial r21 hits to the stop.

The runtime rederives a 14.7778364712 mm iris at wide and needs 14.7614258163 mm for f/3.65 at tele, a 0.111% difference. With one fixed iris and the retained clear apertures, the actual infinity axial beams are f/3.6500 and f/3.6463, both iris-limited. Independent 50- and 80-digit analytic sphere/Snell calculations agree with the rederived radii within 2e-13 mm. Paraxial station radii are 14.1069545339 and 14.1107876871 mm. No glass radius, clear semi-diameter, image-plane gap, or focus/zoom spacing is changed.

Sensitivity: 1.5 and 3.0 mm offsets produce wide iris radii 14.7212557553 and 14.4383521759 mm and tele axial f-numbers 3.6462671 and 3.6460533. The raw wide half-field estimates become 18.5108° and 18.2746°, versus 18.5576° at 1.2 mm; the format-limited field still reaches the full-frame corner. This dependence is real model uncertainty. The chosen offset follows the near-cap construction above rather than an optimization over ray success. Splitting a neutral air transfer preserves first-order power and conjugates; changes at floating-point rounding scale are not a revised prescription.

The correction resolves the stop-plane failure in the endpoint aperture and infinity MTF availability checks. The bounded MTF check does not establish converged MTF values. The existing finite-focus MTF support guard remains unavailable. Expanded-field traces also expose existing first-surface misses and a maximum-macro crossing between Groups III and IV, which the stop placement does not address. The authored intermediate focus motion remains the approximation documented in the data header.

## 2026-10-07 — Zoom iris and station f-numbers against the patent

Local source: `patents/JPA 1976063635-000000.pdf` (5 pages; gazette pp. 263–267). Table 1 runs from PDF p. 3 (rows r1–r17) to the rotated continuation on PDF p. 4 (rows r18–r25), read from 300–600 dpi renders.

| Field | Before | After | Source |
|---|---|---|---|
| Surface 19 `R` | 38.55 | 38.35 | PDF p. 4 (gazette p. 266), Table 1 continuation, row r19: 38.35 (same row: t19 6.0, n12 1.48749, ν12 70.0). The third digit has the flat-topped form of the leading 3 and of the 3s in r23 −53.33, not the form of the final 5. A transcription error in the file, not a source erratum. |
| Surface 25 `d` (image-plane gap) | 40.873732 | 40.003152 | Not printed in the patent. Mean of the paraxial back focal lengths of the corrected table at the two Table 1 stations (39.991236 and 40.015068 mm). |
| `focalLengthDesign` | [72.662091, 204.940289] | [71.979219, 203.013778] | Paraxial EFL of the corrected table at the printed gaps d5 2.041~47.555, d10 28.624~6.000, d13 24.389~1.500 (PDF p. 3, Table 1). |
| L12 `fl` | 58.5 | 58.3 | Thick-lens focal length in air from r19 38.35, r20 −104.13, t19 6.0, n12 1.48749 (PDF p. 4, Table 1 continuation): 58.2985 mm. |
| Header BFD lines | 40.873732; 40.861589 and 40.885874; ±0.012143 | 40.003152; 39.991236 and 40.015068; ±0.011916 | Same calculation as the surface 25 gap. |

First-order values of the table against what the patent prints:

| Quantity | Patent prints | Before (r19 38.55) | After (r19 38.35) |
|---|---|---:|---:|
| Wide focal length | 70 mm, nominal (Table 1 header "f = 70−205 mm", PDF p. 3; Fig. 2(a) "f=70 mm", PDF p. 4) | 72.6621 mm (+3.80 %) | 71.9792 mm (+2.83 %) |
| Tele focal length | 205 mm, nominal (same header; Fig. 2(c) "f=205 mm") | 204.9403 mm (−0.03 %) | 203.0138 mm (−0.97 %) |
| Back focal length, wide / tele | not printed | 40.8616 / 40.8859 mm | 39.9912 / 40.0151 mm |
| Image-plane gap stored after surface 25 | not printed | 40.873732 mm | 40.003152 mm |
| First-to-last glass track, wide / tele | not printed in the Japanese publication | 160.000 / 160.001 mm | 160.000 / 160.001 mm |
| Total length, surface 1 to image, wide / tele | not printed | 200.8737 / 200.8747 mm | 200.0032 / 200.0042 mm |
| Group IV focal length (surfaces 14–25) | not printed in the Japanese publication; the analysis note quotes about +44.04 mm from US 3,817,600 | +44.1873 mm | +44.0400 mm |
| Relative aperture | 1:3.65 (Table 1 header, PDF p. 3; text, PDF p. 2 right column; Fig. 2(a)–(c) "F3.65", PDF p. 4) | fixed iris 15.1614 mm: f/3.650 / f/3.646 | fixed iris 15.0042 mm: f/3.650 / f/3.646 |

The analysis note carries the matching figures: endpoint EFL and BFL, the image-plane gap and its ±0.011916 mm residual, tele track ratio 0.9852, L12 +58.3 mm, the L12–L13 pair +204.0 mm, surfaces 14–21 +44.6412 mm, Petzval sum +0.000385045 mm⁻¹ (radius 2597.1 mm), maximum-macro EFL 53.9716 mm at 1:2.251 with a 289.4662 mm object-to-image distance, diagonal fields 33.46° / 12.17°, and the stop rows of its summary table. Its Group-I travel to the 1.8 m focus position is quoted to four decimals (9.4209 mm wide, 9.4621 mm tele): the exact paraxial solution onto the 40.003152 mm plane is 9.420946 / 9.462060 mm, where the six-decimal figures of the r19 = 38.55 table were 9.420944 / 9.462059 mm.

Confirmed unchanged:

- Example identity: Table 1 is the only numerical example. Rows r1–r17 (PDF p. 3) and r18–r25 (PDF p. 4) were compared with the file; every radius, spacing, nd and νd matches apart from r19.
- Station f-numbers: the patent prints one aperture ratio, 1:3.65, for the whole 70–205 mm range and labels the spherical-aberration plots F3.65 at f = 70, 130 and 205 mm. `nominalFno` 3.65, `apertureDesign` 3.65, `apertureMarketing` 3.5 and `fstopSeries` are as they were.
- `zoomApertureModel: "fixed-iris"` is kept. With the corrected radius the 1:3.65 beam needs 15.0042 mm at the wide station and 14.9882 mm at the tele station by real marginal ray (spread 0.11 %; one radius fits both within print rounding, 14.9836 to 15.0088 mm), and 14.3152 / 14.3190 mm paraxially (spread 0.03 %). The stop sits in fixed Group IV behind both moving groups.
- Focal-length labels: `zoomPositions` [70, 205] are the patent's nominal values and stay as printed.
- Zoom gaps d5, d10 and d13 match Table 1 at both stations; their sums are 55.054 and 55.055 mm.
- Stop position: the note beside the Table 1 continuation (PDF p. 4) places the stop directly behind the r21 surface and prints no distance. The file keeps `d: 0` after surface 21 and the full d21 = 49.846 mm on the `STO` row.
- Close-focus `var` entries (11.461944992, 11.780356017, 46.736703557): recomputed against the corrected table and the 40.003152 mm image plane. The stored gaps focus a 1.8 m object (wide) and an 80 mm object (tele macro) onto that plane to within 2e-7 mm, so they are not changed. Group IV sits behind every moving gap, and the image plane is again the mean of the two endpoint back focal lengths.
- Semi-diameters: none changed. L12's edge thickness at its 17 mm semi-diameter is 0.629 mm with the corrected radius; the minimum in the file stays 0.351 mm at L2.

Left open:

- `STO` `sd` 14.457801 is left as authored. It is the mean paraxial 1:3.65 stop radius of the table with r19 = 38.55; the corrected table needs 14.3152 / 14.3190 mm paraxially (mean 14.317096). The engine sizes the wide-open iris from `nominalFno`, so the stored value does not set the beam.
- The aperture audit cannot bracket a marginal ray at either station (limiter reported as `STO (noBracket)`), with r19 at either value. The stop plane at zero distance behind surface 21 (R = +94.78) lies inside that surface's sag, and the 15.0042 mm iris is wider than surface 21's 15 mm semi-diameter. The patent gives no stop distance, so an axial offset is a modelling choice and is not made here; the lens stays on `agent_docs/sd-audit-queue.md`.
- The computed EFLs sit 2.83 % above and 0.97 % below the nominal 70–205 mm labels. The gap sums and the two back focal lengths (0.024 mm apart) leave no sign of a misread zoom spacing, so the labels are treated as nominal.
- US 3,817,600 is not held locally, so r19 in the US text was not read. Its Group IV focal length of about +44.04 mm, as quoted in the analysis note, is reproduced by 38.35 (+44.0400) and not by 38.55 (+44.1873).
