# Audit Log — SonyFE50150mmF2GM

Patent: WO 2025/220324 A1, Example 1; local WO_2025220324_A1.pdf, Figure 1, PDF p. 95

## 2026-09-20 — Patent figure, glass, and display metadata review

Retained the source-published effective diameters divided by two. The 600 dpi wide-panel comparison is approximately 1.13–1.16 times the authored front clear apertures; bracket/label contamination explains the large automated outliers. The figure is not evidence to replace published clear apertures or enlarge them into mechanical rims. Existing gapSagFrac=0.98 remains necessary for the source surface 2→3 geometry.

Added OHARA S-NBH59 from its first-party OHARA 25-04 datasheet, including all six Sellmeier coefficients. E11: catalog 1.766342 / 35.82 versus patent 1.76634 / 35.8. Source: https://www.ohara-inc.co.jp/assets/en/product/pdf/esnbh59.pdf . E16 uses existing M-PCD51 (1.59201 / 67.02 versus 1.59245 / 66.9). Both are qualified spectral proxies, not Sony supplier identifications. E6 1.90110 / 27.1 remains unresolved; its nearest existing candidate differs by 1.84 Abbe units and is not a specific enough match. Coverage: 18/19.

The companion analysis reflects these dispositions. Marketed names remain distinct from patent design values and qualified production correlations.

## 2026-09-20 — Live diagram, travel, and coverage follow-up

Retained Figure 1/Table 1 effective-diameter geometry. Added HOYA NBFD27 for E6: 19/19 covered. Zoom stations remain Wide→Mid→Tele; G5 focuses imageward and G6 objectward. Added zoomCloseFocusM 0.397/0.521/0.746 m so visible close-focus labels follow the published states. Rounded gaps retain at most 0.01 mm residual fixed-group motion. No unsupported ED/XA/APD identity tags added.

Assignee audit: source-era Schneider names are consolidated as `Jos. Schneider & Co., Optische Werke`; the later GmbH & Co. KG remains distinct. Sony Group Corporation is retained for these source-era filings, separately from older Sony Corporation patents. No additional duplicate assignee spelling was found.

## 2026-10-07 — Zoom iris and station f-numbers against the patent

The file declared `zoomApertureModel: "fixed-iris"`, which holds the Wide iris radius at every station. The patent prints Fno 2.06 at all three stations and a stop effective diameter of 42.00 mm; the held Wide radius, 20.8794 mm, traces f/2.07 at Mid and is 0.12 mm under the printed 21.00 mm, so the declaration is removed and the default per-station iris applies. `nominalFno` stays the scalar 2.06.

| Field | Before | After | Source |
|---|---|---|---|
| `zoomApertureModel` | `"fixed-iris"` | removed (default: iris traced per station from `nominalFno`) | Table 2 (PDF p. 27, printed p. 25): Fno 2.06 / 2.06 / 2.06 at Wide / Mid / Tele; Table 1 (PDF p. 26, printed p. 24), row 17(STO): φ = 42.00 |
| Wide-open iris radius, Mid (derived) | 20.8794 mm (Wide radius held) | 21.0012 mm | Real f/2.06 marginal ray at the Table 2 Mid state; Table 1 row 17(STO) φ / 2 = 21.00 |
| Wide-open iris radius, Tele (derived) | 20.8794 mm (Wide radius held) | 20.8869 mm | Real f/2.06 marginal ray at the Table 2 Tele state; Table 31 (PDF p. 64, printed p. 62): Tfno 2.060 |
| Traced on-axis f-number, Mid (derived) | f/2.07 (2.0709), limited by the iris | f/2.060 (2.0603), limited by the surface 23 clear aperture | Table 2: Fno 2.06 at Mid; Table 1 row 23: φ = 39.34 |
| Traced on-axis f-number, Tele (derived) | f/2.061 (2.0607), limited by the iris | f/2.061 (2.0606), limited by the surface 10 clear aperture | Table 2: Fno 2.06 at Tele; Table 1 row 10: φ = 38.34 |
| Header and note text on the stop diameter | "physical iris diameter is not separately published"; one fixed 39.833424 mm stop | Table 1 prints φ17 = 42.00 mm; iris traced per station at 20.879 / 21.001 / 20.887 mm | Table 1 row 17(STO); ¶0065 (PDF pp. 21–22, printed pp. 19–20) defines φi as the effective diameter of surface i and Fno as the open F-number |

- Why the held Wide radius does not fit: by the iris alone, the real-ray radii for f/2.06 are 20.8794 / 21.0012 / 20.8869 mm (spread 0.58 %), and their two-decimal rounding intervals, scaled linearly from those radii, do not overlap (Wide tops out at 20.9302 mm, Mid starts at 20.9504 mm). A stop held at the Wide radius real-traces to f/2.060 / 2.071 / 2.061, which prints 2.07 at Mid. A stop held at the printed 21.00 mm admits f/2.049 / 2.060 / 2.050 through the iris alone, which would print 2.05 at Wide and Tele against Tfno 2.060.
- The Mid radius, 21.0012 mm, matches the printed φ17 / 2 = 21.00 mm to 0.006 %.
- Rim-limited stations: at Mid the f/2.06 marginal ray reaches 19.6728 mm at surface 23 against the printed 19.67 mm (2.8 µm over); at Tele it reaches 19.1754 mm at surface 10 against the printed 19.17 mm (5.4 µm over). The traced values are 0.014 % and 0.031 % above the stated 2.06. Both semi-diameters are the printed φ / 2 and are left as printed; no rim is enlarged to pass the beam. Wide stays limited by the iris at f/2.060.
- Confirmed unchanged: Example 1 identity (Table 1 radii, thicknesses, indices, and every refracting-surface φ / 2 against the file's surface rows); focal lengths 51.50 / 88.98 / 145.50 mm (Table 2) against computed 51.4907 / 88.9941 / 145.5230 mm; all six variable gaps at infinity and close focus (Table 3); stop position at surface 17 with d17 = 1.64 mm, inside G4, which ¶0070 keeps fixed in zooming and ¶0074 lists as the stop plus E9–E13; `nominalFno` 2.06, `apertureDesign` 2.06, `fstopSeries` starting at 2.06, and the "DESIGN f/2.06" spec line.
- Open: the patent does not state whether the stop opening changes during zooming. ¶¶0064–0078 and Tables 1–5 and 31 carry no such sentence, and the fixed-iris patent audit reports none in the full description and claims. The per-station radii are therefore calculated from the printed f-numbers and the printed stop diameter, not read from an iris schedule.
- Open: the printed numbers do not exclude one 42.00 mm stop once the clear apertures are counted. With the printed φ / 2 as hard clips, a stop held at 21.00 mm traces f/2.0596 / 2.0603 / 2.0606, limited by surface 15 at Wide, surface 23 at Mid, and surface 10 at Tele, and prints 2.06 at every station. The iris-alone rounding argument is also thin: real-tracing the f/2.065 and f/2.055 beams instead of scaling linearly leaves the Mid and Tele intervals 0.002 mm apart (Mid starts at 20.9450 mm, Tele tops out at 20.9432 mm). The per-station iris and a 21.00 mm stop at every station give the same on-axis f-numbers to 0.02 %; which of the two the file should carry is left to the maintainer.
- Open: the STO row's authored semi-diameter stays at 19.916712 mm, a paraxial calibration to f/2.06 (paraxial f/2.054 / 2.067 / 2.059), while Table 1 prints φ17 / 2 = 21.00 mm. It is the only surface row that departs from the printed φ / 2. The wide-open iris is traced from `nominalFno` and does not read this value, so no semi-diameter is edited here; whether the row should carry 21.00 is left to the maintainer.
- Open: the note's independent-trace paragraph (no post-stop clipping among its tested rays) describes the original dossier's own trace and was not re-run against the per-station iris.

## 2026-10-07 — Patent-audit queue: printed stop diameter

The STO row stored a paraxial calibration instead of the printed effective diameter halved. Table 1 prints φ = 42.00 mm on row 17(STO), so the row carries 21, the same φ / 2 transcription every other surface row uses. This is a transcription correction (the file departed from the print), not a source erratum, and no `sourceErrata` entry is involved.

| Field | Before | After | Source |
|---|---|---|---|
| STO `sd` | 19.916712 | 21 | Table 1 (PDF p. 26, printed p. 24), row 17(STO): r = ∞, d = 1.64, φ = 42.00; ¶0065 (PDF p. 21, printed p. 19) defines φi as the effective diameter of surface i in mm |
| Data-file header, stop block, last sentence | "The STO row's authored sd, 19.916712 mm, is a paraxial calibration to the same f/2.06 states and does not size the traced iris." | "The STO row carries the printed φ17 / 2 = 21.00 mm; it does not size the traced iris." | Table 1 row 17(STO) |
| Data-file STO row comment, first line | "Authored stop SD: paraxial calibration to the Table 2 f/2.06 states; Table 1 prints φ17 = 42.00 (radius 21.00)." | "Stop SD: Table 1 row 17(STO) prints φ17 = 42.00 mm; the row stores φ17 / 2, as every other surface row does." | Table 1 row 17(STO) |
| Note, Verification Summary, STO-row paragraph | Authored 19.916712 mm paraxial calibration (paraxial f/2.054002 / 2.067196 / 2.058803; real beam f/2.150 / 2.162 / 2.151) | Row carries φ17 / 2 = 21.00 mm; the traced station radii are 0.121 mm smaller at Wide, 0.001 mm larger at Mid, 0.113 mm smaller at Tele | Table 1 row 17(STO); station radii 20.8794 / 21.0012 / 20.8869 mm from the real f/2.06 marginal ray |

- Read on the page: PDF p. 26 rendered at 300 dpi shows rows 16(ASP) −157.293 / (d16) / 42.65, 17(STO) ∞ / 1.64 / 42.00, and 18 −372.930 / 1.45 / 1.95375 / 32.3 / 41.85. With the stop row at 21, all 37 surface rows equal the printed φ / 2.
- Confirmed unchanged by the edit: the wide-open iris is traced from `nominalFno` and does not read the row, so the station radii stay 20.8794 / 21.0012 / 20.8869 mm, the traced on-axis f-numbers stay f/2.06 at all three stations (Wide limited by the iris, Mid by the surface 23 clear aperture, Tele by the surface 10 clear aperture), and the on-axis spherical aberration at pupil 1.0 / 0.85 / 0.7 / 0.5 is identical before and after. Computed focal lengths stay 51.4907 / 88.9941 / 145.5230 mm; `focalLengthDesign`, the element and group focal lengths, and the track and back-focus figures in the note do not depend on the stop radius. The file builds and passes its own validation with the new value.
- Confirmed unchanged in the file: no `zoomApertureModel` (per-station iris), scalar `nominalFno` 2.06, and every other semi-diameter.
- This settles the earlier open item on whether the STO row should carry 21.00.
- Open: at Mid the traced iris radius, 21.0012 mm, is 1.2 µm larger than the stored 21.00 mm. The difference is 0.006 % and sits inside the prescription's rounding (computed Mid focal length 88.9941 mm against the printed 88.98 mm); nothing is adjusted for it.
- Open, carried over: the patent does not state how the stop opening behaves in zooming, and the choice between the per-station iris and one 42.00 mm stop with rim-limited Wide and Tele beams remains with the maintainer.
- Open, carried over: the note's independent-trace paragraph (no post-stop clipping among its tested rays) describes the original dossier's own trace and was not re-run with the stop row at 21.00 mm. An axial ray that fills the stored radius at Mid is f/2.0601 by the iris alone and is cut to f/2.0603 by the surface 23 clear aperture, behind the stop, so that paragraph's statement covers the dossier's ray set only.
