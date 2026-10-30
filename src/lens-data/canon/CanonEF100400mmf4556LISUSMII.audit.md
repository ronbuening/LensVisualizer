# Audit Log — Canon EF 100-400mm f/4.5-5.6 L IS II USM

Patent: US 2015/0146044 A1, Numerical Example 2.

## 2026-10-30 — Original-PDF element heights, concave ends and all 21 media

### Original evidence and resolution

The supplied original `patents/US20150146044A1.pdf` identifies the May 28, 2015 A1 publication, Shigenobu Sugita
and Canon Inc. Numerical Example 2 is ¶0092 on PDF page 22 (printed page 8), including every surface, effective
diameter, glass pair and infinity zoom gap. Fig. 4 is PDF page 5 (drawing sheet 4), showing the wide configuration
and zoom/focus/floating arrows. It is the selected Example-2 section, not Fig. 3's Example-1 aberration sheet.
Paragraph 0088 on PDF page 21 defines the d-line index and Abbe columns; the source's d-line convention is 587.6 nm.

The sheets are native 2560 × 3300-pixel 300-dpi rasters. Fig. 4 and the complete Example-2 surface table were
inspected at native 300 dpi, with full-sheet lower-resolution context. No 600-dpi upsample is counted as new
resolution. The wide R1–R38 vertex span is about 1055 native pixels for 167.46 mm (234.72 track minus 67.26 BF),
about 6.3 px/mm. A two-pixel edge reading is about ±0.32 mm before drawing/scale uncertainty. The table's two-decimal
printed diameters, rather than figure measurements, determine every clear aperture. SP/IP leaders, unit brackets,
floating/focus arrows and mechanical marks are excluded from optical outlines.

### Element and glass dispositions

Every listed clear radius is retained at exactly half the printed effective diameter. Every nd/νd pair was checked
against the rendered numerical table, including leading digits lost by its OCR text. Each listed curve is an existing
coordinate-compatible spectral proxy, not a source glass name, supplier identification or chemistry measurement.

| Element / source faces | Retained sd front / rear (mm) | Confirmed source nd / νd | Compatible curve |
|---|---|---|---|
| E01, R1–R2 | 34.72 / 34.37 | 1.62299 / 58.2 | S-BSM15 |
| E02, R3–R4 | 33.825 / 32.31 | 1.65412 / 39.7 | N-KZFS5 |
| E03, R5–R6 | 32.31 / 31.915 | 1.43875 / 94.9 | S-FPL53 |
| E04, R7–R8 | 16.92 / 16.62 | 1.59551 / 39.2 | E-F8 |
| E05, R8–R9 | 16.62 / 16.12 | 1.77250 / 49.6 | J-LASF016 |
| E06, R10–R11 | 15.86 / 15.525 | 1.77250 / 49.6 | J-LASF016 |
| E07, R12–R13 | 15.52 / 15.97 | 1.60311 / 60.6 | J-SK14 |
| E08, R13–R14 | 15.97 / 16.05 | 1.84666 / 23.8 | J-SF03 |
| E09, R15–R16 | 16.315 / 16.405 | 1.43387 / 95.1 | CaF2 |
| E10, R17–R18 | 16.17 / 15.975 | 1.51742 / 52.4 | S-NSL36 |
| E11, R18–R19 | 15.975 / 15.88 | 1.90366 / 31.3 | J-LASFH13 |
| E12, R21–R22 | 13.52 / 13.85 | 1.59270 / 35.3 | S-FTM16 |
| E13, R22–R23 | 13.85 / 13.89 | 1.78472 / 25.7 | H-ZF13 |
| E14, R24–R25 | 13.87 / 13.91 | 1.76200 / 40.1 | S-LAM55 |
| E15, R26–R27 | 13.36 / 12.97 | 1.48749 / 70.2 | S-FSL5 |
| E16, R27–R28 | 12.97 / 12.705 | 1.84666 / 23.8 | J-SF03 |
| E17, R29–R30 | 12.665 / 12.515 | 1.72916 / 54.7 | TAC8 |
| E18, R31–R32 | 11.67 / 11.14 | 1.88300 / 40.8 | S-LAH58 |
| E19, R33–R34 | 11.17 / 11.37 | 1.80518 / 25.4 | J-SF6 |
| E20, R35–R36 | 11.315 / 11.9 | 1.72916 / 54.7 | TAC8 |
| E21, R37–R38 | 13.87 / 14.025 | 1.65412 / 39.7 | N-KZFS5 |

All concave ends and all five bonded interfaces (R8, R13, R18, R22, R27) were inspected. The source has no hybrid
resin layer, separately indexed cement, filter or rear plate in this example. Table truth governs the unequal effective
apertures. The native figure's square-looking end strokes do not resolve a distinct cap endpoint followed by a shoulder;
adding extensions merely to make equal-height blocks would invent that feature. No extension or cut candidate was
applied, and no inferred cut is represented as source-dimensioned. No opaque land is placed on a bonded interface.
The existing R11–R12 and R32–R33 close-gap constraint and `gapSagFrac = 0.94` remain unchanged; the physical gaps
stay positive with the published apertures, and the renderer does not trim the caps to hide an overlap.

All 21 media retain their printed d-line pairs and resolve compatible catalog curves. E03's Super UD-class and E09's
fluorite classifications remain explicitly inferred from coordinate/production correlation. The patent does not name
these production materials or publish selected per-element nC/nF/ng, partial dispersion or dPgF values. No such override
exists to remove or falsely relabel as measured. The CaF2 curve and every ordinary catalog curve remain qualified
spectral proxies. Public glass prose now states the actual 21/21 curve coverage without claiming historical melts.

### Retained controls and limitations

All source radii, thicknesses, published zoom gaps, stop, spherical surfaces and controls are retained. The structured
example label is corrected from “Example 2” to the table's “Numerical Example 2”; the selected numerical example itself
does not change. The source's small rounded EFL/BF/track inconsistencies remain explicit rather than tuned. The
published effective diameter of surface 20 remains distinct from the runtime's state-specific iris opening.

The source describes main focus with L6 and auxiliary floating correction with L4, but provides no complete finite-focus
trajectory. Existing close spacing members therefore repeat infinity; production 0.98 m MFD remains metadata. Fresh
actual SVGs at zoom 0/0.5/1 and focus 0/0.5/1 contain 21 finite closed paths with zero hidden trim and connected
cemented outlines. All three published zoom stations retain full-frame corner chief coverage and the stated axial
wide-open beams. Source shape fidelity, sampled clearance and the production correlation remain separate conclusions.
