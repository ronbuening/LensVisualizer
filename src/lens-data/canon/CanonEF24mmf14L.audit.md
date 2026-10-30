# Audit Log - Canon EF 24mm f/1.4 L USM

## 2026-09-25 - MTF census: transcription corrections and source contradiction

Source: local `patents/JPA 1999030743-000000.pdf`, Numerical Example 6,
Table 6 (caption on PDF page 9, numerical table on page 10), Figure 7.
The old Table 7 citation referred to the following example. Unscaled infinity
prescription; no finite-focus spacing or rear plate is listed.

| Field                                  | Before           | Source / after                                                                                                        |
| -------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| S2 air gap                             | 5.050 mm         | 6.050 mm, Table 6                                                                                                     |
| S18 A10 (source E)                     | -1.46493e-13     | -1.48493e-13, Table 6                                                                                                 |
| All other S1-S22 R/d and glass indices | Authored         | Checked every row, including stop and flat reference plane. Retained except justified pre-existing emendations below. |
| S18 K/A4/A6/A8/A12                     | Authored         | Every coefficient matches; source A is K, B-F map to A4-A12.                                                          |
| All element C/F/g indices and vd       | Authored         | Checked against the printed spectral columns; retained except the existing L7 vd emendation.                          |
| `focalLengthDesign`                    | 24.8151156047 mm | 24.5994023367 mm, recomputed from corrected prescription                                                              |
| S22 image spacing                      | 36.467 mm        | Retained published value                                                                                              |

L7's source vd = 28.64 conflicts with its line indices, which give 28.460607.
L10's printed nd = 1.613112 exceeds its own nF = 1.610018; the existing
1.603112 emendation yields vd = 60.699678 and reproduces the published rear
group ratio f2b/f = 1.47. Preserve those source-supported corrections.

Independent reduced-angle ABCD results:

| Prescription                                        |  EFL (mm) | Air BFL from S22 (mm) | Offset (mm) |
| --------------------------------------------------- | --------: | --------------------: | ----------: |
| Before this audit                                   | 24.815116 |             38.214989 |   +1.747989 |
| Literal Table 6 (including impossible L10 nd)       | 24.285845 |             37.593888 |   +1.126888 |
| Corrected transcription and retained L10 emendation | 24.599402 |             38.133626 |   +1.666626 |

The corrected focal length reproduces the stated 24.6 mm; the final image
spacing still does not reproduce paraxial infinity focus. No single further
supported misprint explains that residual, and there is no plate row to
restore. Preserve the published 36.467 mm, disclose the remaining source
contradiction in the header and analysis, and delete the investigated Section
E row. The lens is expected to remain in the regenerated census. No tuning
of the image plane was performed. Glass identities and spectral data are
unchanged; all remain qualified as in the existing analysis.

## 2026-10-30 — Fresh original shape and all-media inspection

Original: 'patents/JPA 1999030743-000000.pdf', JP 1999-030743 A, Numerical Example 6. The native first page
confirms Canon, 三坂 誠 (Makoto Misaka), filing July 11, 1997 and publication February 2, 1999. Table 6's caption
is on PDF page 9; the complete prescription/spectral/asphere table is the native 835 × 1013-pixel image on page 10,
approximately 200 dpi. All 22 rows, including the flare cutter and stop, were read directly. Paragraph 0041 on PDF
page 4 explicitly defines d, g, C and F refractive-index columns. Paragraph 0042 gives the asphere convention.
Figure 7 is the middle section on PDF page 13, mapped to Example 6 by paragraph 0040 and the page-11 captions.
Figure 14 on page 16 is the matching aberration plot; neighboring Figure 6 is Example 5 and is not substituted.

### Native outline measurements and adopted geometry

Figure 7 is a native 677 × 461 raster at approximately 201 × 199 dpi. Its first/last vertex span is about 574 px
for the 82.171 mm powered track, approximately 7.0 px/mm. Two-pixel local reading uncertainty is about ±0.29 mm;
approximately ±0.5 mm plus schematic/nonuniform-scale uncertainty is retained for adopted outline estimates.
The native image itself was inspected; page-context renders and magnification add no native detail. R/d leaders,
axis dashes, group brackets, SP/S labels and the mechanical flare-cutter stroke are excluded from glass rims.

| Surface | Previous clear / drawn radius (mm) | Adopted clear / drawn radius (mm) | Native disposition                                                                          |
| ------- | ---------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------- |
| S2      | 21 / 21                            | 22.4 / 26.2                       | First meniscus rear shoulder; cap/edge roughly 162/190 px, q ≈0.85.                         |
| S3      | 21 / 21                            | 23 / 23                           | Second meniscus front endpoint roughly 162 px from axis, about 23 mm.                       |
| S4      | 20 / 20                            | 20 / 23                           | Second meniscus rear shoulder; cap/edge roughly 142/162 px, q ≈0.88.                        |
| S9      | 13.2 / 13.2                        | 12.4 / 15.8                       | UD member rear concave-end shoulder; cap/edge roughly 89/115 px, q ≈0.77.                   |
| S14     | 12.5 / 12.5                        | 13.2 / 13.2                       | Pre-stop negative element's rear endpoint matches its front height within scan uncertainty. |
| S16     | 14 / 14                            | 12 / 14.7                         | Rear cemented pair's air-facing front shoulder; cap/edge roughly 81/100 px, q ≈0.81.        |

The optical cap and drawn outer height are independently represented. S2's first 22.5 mm cap trial with its outer
shoulder exceeded the unchanged 90% intrusion guard: 5.451 mm versus 5.445 mm permitted across 6.050 mm to S3.
The adopted 22.4 mm remains inside the native reading interval and passes the guard. No tolerance or source R/d
is changed to rescue that trial. S9/S16 use their opposite bonded-face heights only as existing blank-outline
constraints; no opaque land is added at either shared interface. Every element, concave end and both cemented
interfaces S8/S17 were inspected. Other edge strokes do not resolve an independent cap/land endpoint. No disconnected
resin wing, invented block or inferred flat cut is added. S18's complete polynomial is retained and remains finite.

### All eleven media and genuine spectral evidence

| Element / source faces | Adopted clear front / rear sd (mm) | Drawn front / rear radius (mm) | Printed nd / ν   | Printed C / F / g              |
| ---------------------- | ---------------------------------- | ------------------------------ | ---------------- | ------------------------------ |
| L1, 1–2                | 26.2 / 22.4                        | 26.2 / 26.2                    | 1.696797 / 55.53 | 1.692973 / 1.705521 / 1.712337 |
| L2, 3–4                | 23 / 20                            | 23 / 23                        | 1.696797 / 55.53 | 1.692973 / 1.705521 / 1.712337 |
| L3, 5–6                | 20.5 / 20.5                        | 20.5 / 20.5                    | 1.712995 / 53.84 | 1.708975 / 1.722217 / 1.729441 |
| L4, 7–8                | 16.2 / 15.8                        | 16.2 / 15.8                    | 1.846660 / 23.78 | 1.836491 / 1.872096 / 1.894187 |
| L5, 8–9                | 15.8 / 12.4                        | 15.8 / 15.8                    | 1.496999 / 81.61 | 1.495138 / 1.501228 / 1.504502 |
| L6, 11–12              | 14.2 / 14.2                        | 14.2 / 14.2                    | 1.804000 / 46.58 | 1.798817 / 1.816079 / 1.825695 |
| L7, 13–14              | 13.2 / 13.2                        | 13.2 / 13.2                    | 1.728250 / 28.64 | 1.720865 / 1.746453 / 1.762002 |
| L8, 16–17              | 12 / 14.7                          | 14.7 / 14.7                    | 1.805181 / 25.42 | 1.796106 / 1.827775 / 1.847285 |
| L9, 17–18A             | 14.7 / 15.7                        | 14.7 / 15.7                    | 1.834807 / 42.72 | 1.828977 / 1.848517 / 1.859530 |
| L10, 19–20             | 16.7 / 16.7                        | 16.7 / 16.7                    | 1.613112 / 60.70 | 1.600082 / 1.610018 / 1.615392 |
| L11, 21–22             | 19.1 / 19.1                        | 19.1 / 19.1                    | 1.772499 / 49.60 | 1.767798 / 1.783373 / 1.791962 |

All 33 C/F/g values match the original Table 6, not a catalog backfill, and remain in the data. The source explicitly
identifies the d-line reference; each medium now records indexReference d. The source contains no hybrid layer,
separately indexed cement, filter or rear plate. Eleven compatible catalog curves remain qualified spectral proxies;
explicit printed indices take priority. L11's stale S-LAH66N label is synchronized to the S-LAH66 candidate already
qualified by the analysis. Neither curve nor label proves historical supplier, melt or chemistry. L5's chemistry is
also explicitly left unconfirmed even though its published anomalous dispersion is genuine.

The two existing material emendations were independently rechecked and retained: L7 prints ν = 28.64, while its
printed d/C/F indices give 28.4606065; L10 prints nd = 1.613112, greater than its printed nF = 1.610018. Existing
nd = 1.603112 and ν = 60.6996779 are supported by its other line indices and the source's rear-group power ratio
1.47. They are separately documented source contradictions, not changes made in this shape review. L5's printed
indices give PgF = 0.537602627 and derived ΔPgF = +0.031070647 relative to the documented normal line. The source's
condition (6) directly supports its APD designation. L10's derived ΔPgF = −0.000841086 is also retained. No genuine
published spectral evidence is discarded and no new catalog-derived per-lens override is added.

### Retained source constraints and runtime qualification

The September 25 audit date and its S2 D = 6.050 mm / S18 A10 = −1.48493e−13 corrections remain intact. All
source radii, spacings, asphere coefficients, stop and focus controls are unchanged in this pass. The source's
extra F coefficient is still interpreted as A12 after the printed equation stops at E; this editorial order inference
remains explicit. No finite focus row is published, and no finite cam is synthesized from production MFD.

Fresh matrix tracing gives EFL = 24.599402337 mm and Gaussian BFL = 38.133625891 mm, independently reproducing
the prior result. Printed final spacing remains 36.467 mm, 1.666625891 mm before paraxial focus. No plate row is
present to restore, and the image plane is not moved to improve the rendered result. Source half-field 41.35° has
a clear chief at 20.921777 mm on that printed image plane, 96.7% of the 135-frame half-diagonal. The runtime's
separate format-corner solution is clear near 42.3°; that does not certify the source plane's focus or full source-field
coverage. Source fidelity, sampled clearance and production correlation remain separate conclusions.

Fresh generated SVGs over the 3 × 3 control grid contain eleven connected finite closed element paths with zero
hidden trim. This infinity-only model has identical geometry at every focus/zoom control position. Surface and strict
f/1.45 axial checks pass without a raise; image-circle and full-frame-corner checks pass. Stop-aimed samples use
49 pupil points at axial, 0.6 × 41.35° and 41.35° source fields. Survivors are 49/36/17; every chief clears and no
sample is unaimed. Peripheral clips include bonded S17; no opaque interface geometry is added. These discrete
results do not establish full peripheral transmission. No inferred cut requires a beam exemption.

## 2026-10-30 — Structured source-errata qualification

L10’s retained nd 1.603112 correction now has two independently checked source kinds. Source-summary evidence is
Table 6 f = 24.6 mm and the page-11 f2b/f = 1.47 correspondence. Aberration-figure evidence is native Fig.14 on PDF page 16
(961 × 561 pixels, about 201 dpi). Its near-axis spherical-aberration traces have a relative chromatic span around
0.10–0.13 mm with roughly ±0.02 mm local reading uncertainty, using the printed −0.4/+0.4 mm horizontal scale.
Matrices from the printed C/F/g values give BFL 38.192802/38.092983/38.161198 mm. Applied d gives 38.133626 mm,
so the four-line spread is0.099819 mm; printed d 1.613112 gives 37.593888 mm and spread 0.598914 mm. The latter
disagrees with the source plot. Relative color spread is independent of a common image-plane displacement; this
does not claim that the source’s absolute image plane is focused. Structured corrected erratum at S19/nd records
source-summary and aberration-figure, with header/inline comments and no numerical change.

L7’s retained vd 28.460607 follows its printed d/C/F indices, versus printed ν28.64. Native sibling Tables 1–5/7
do not reuse the 1.728250 medium. No second independent source kind has been established; catalog agreement is not
counted. Its pre-existing normalization is preserved as instructed and disclosed by an unresolved source-erratum
note. The current corrected-entry contract supports R/d/nd and asphere terms, not vd; no false corrected field or
engine change is introduced. All 33 printed line indices remain, so the explicit spectral trace is insensitive to this
redundant Abbe choice. A second unresolved entry records the retained 36.467 mm final gap versus38.133626 mm BFL.
Earlier September 25 dates and all pre-existing numerical values remain unchanged.

## 2026-10-30 — Literal L7 Abbe restoration

The source-errata follow-up restores L7’s genuinely printed νd = 28.64, replacing the previous derived normalization
28.460607. Every printed C/F/g index remains unchanged; those values imply ν = 28.4606065. No second independent
source kind supports changing the printed ν, and no corrected-vd schema entry is fabricated. The unresolved source
entry now describes the literal value. The S-TIH10 label is explicitly an approximate spectral proxy to the printed
pair, with historical supplier unconfirmed. Eleven compatible catalog curves remain available, while all 33 complete
source line-index fields take priority. L10’s independently supported correction and all source R/d remain unchanged.

A direct before/after comparison covers nine control layouts, three fields, four d/C/F/g channels and 49 stop-aimed
pupil samples per combination: all 5292 launch coordinates, trace statuses, terminal positions/directions and failure
dispositions are bit-for-bit identical. Complete-line tracing is therefore unchanged by restoring only L7’s redundant
Abbe value. This is a separately documented material-data correction, distinct from the shape review. The September
25 audit history is preserved; its earlier normalization is superseded by this dated disposition.

### Negative check for an omitted camera plate

A fresh read of native Figure 7’s complete right tail, Table 6’s final rows and coefficient continuation, the next
page’s Table 7 transition, and the source’s shared prescription definitions finds no prescribed camera-side plate
after the 36.467 mm final gap. Figure 7 ends with the R21/R22 meniscus and its leaders; no additional dimensioned
plane pair or plate medium is present. The shared text supplies no 2.5 mm / n = 1.5 plate definition. The numerical
coincidence 36.467 + 2.5/1.5 ≈ 38.1337 mm is not source evidence, and no plate or image-gap change is introduced.
The 1.666626 mm source-plane discrepancy remains explicitly unresolved.
