# Audit Log - Canon EF 24mm f/1.4 L USM

## 2026-09-25 - MTF census: transcription corrections and source contradiction

Source: local `patents/JPA 1999030743-000000.pdf`, Numerical Example 6,
Table 6 (caption on PDF page 9, numerical table on page 10), Figure 7.
The old Table 7 citation referred to the following example. Unscaled infinity
prescription; no finite-focus spacing or rear plate is listed.

| Field | Before | Source / after |
|---|---|---|
| S2 air gap | 5.050 mm | 6.050 mm, Table 6 |
| S18 A10 (source E) | -1.46493e-13 | -1.48493e-13, Table 6 |
| All other S1-S22 R/d and glass indices | Authored | Checked every row, including stop and flat reference plane. Retained except justified pre-existing emendations below. |
| S18 K/A4/A6/A8/A12 | Authored | Every coefficient matches; source A is K, B-F map to A4-A12. |
| All element C/F/g indices and vd | Authored | Checked against the printed spectral columns; retained except the existing L7 vd emendation. |
| `focalLengthDesign` | 24.8151156047 mm | 24.5994023367 mm, recomputed from corrected prescription |
| S22 image spacing | 36.467 mm | Retained published value |

L7's source vd = 28.64 conflicts with its line indices, which give 28.460607.
L10's printed nd = 1.613112 exceeds its own nF = 1.610018; the existing
1.603112 emendation yields vd = 60.699678 and reproduces the published rear
group ratio f2b/f = 1.47. Preserve those source-supported corrections.

Independent reduced-angle ABCD results:

| Prescription | EFL (mm) | Air BFL from S22 (mm) | Offset (mm) |
|---|---:|---:|---:|
| Before this audit | 24.815116 | 38.214989 | +1.747989 |
| Literal Table 6 (including impossible L10 nd) | 24.285845 | 37.593888 | +1.126888 |
| Corrected transcription and retained L10 emendation | 24.599402 | 38.133626 | +1.666626 |

The corrected focal length reproduces the stated 24.6 mm; the final image
spacing still does not reproduce paraxial infinity focus. No single further
supported misprint explains that residual, and there is no plate row to
restore. Preserve the published 36.467 mm, disclose the remaining source
contradiction in the header and analysis, and delete the investigated Section
E row. The lens is expected to remain in the regenerated census. No tuning
of the image plane was performed. Glass identities and spectral data are
unchanged; all remain qualified as in the existing analysis.
