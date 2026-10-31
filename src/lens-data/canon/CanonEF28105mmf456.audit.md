# Audit Log — Canon EF 28–105mm f/4–5.6

Patent: US 2004/0223070 A1, Numerical Example 4.

## 2026-10-30 — Original shape, all-media and physical L5 review

### Exact source and native inspection

Fresh inspection used 'patents/US_2004223070_A1.pdf'. Its first page confirms Takashi Shirasuna, US application
10/832,558, April 26, 2004 filing, May 6, 2003 Japanese priority and November 11, 2004 publication. Numerical
Example 4 is paragraph 0085 on PDF page 19 (printed page 7), with all R1–R20 rows, four variable gaps and the
surface-18 asphere. Paragraphs 0079–0080 on page 17 explicitly define d-line N/ν and the standard conic polynomial.
The matching section is Figure 10 on PDF page 8 (sheet 7 of 11); Figures 11–12 are its aberration plots. Source
paragraphs 0069–0071 on PDF page 16 distinguish the fixed protective L5 from the powered Example-5 fifth unit.

The PDF pages are native 2560 × 3300 rasters; PDF image placement reports approximately 310 × 282 dpi. Native
Table-4 and Figure-10 crops were inspected directly. Smaller page/header context renders are not counted as native
detail, and no upsampling supplies additional evidence. The Figure-10 first vertex to L5 front spans roughly
848 native px for 70.77 mm, about 12 px/mm; its 1 mm plate is about 12 px wide. Two-pixel local readings are roughly
±0.17 mm before schematic/line-thickness uncertainty; about ±0.5 mm is retained for inferred glass heights. Axis
dashes, group brackets, motion arrows, SP/IP leaders and plate support markers are excluded from rim measurements.

### Source corrections separate from shape

The old model omitted the explicit lens-owned L5 under a stale cover-glass rule and folded t/n into its final gap.
Paragraph 0071 says this fixed fifth lens unit protects the exposed rear asphere in the interchangeable lens; it is
not a camera sensor stack or a freely placed optional accessory. The source R19/R20 planes, 1.00 mm thickness,
nd = 1.516330 and νd = 64.1 are restored as a drawn Plane-Parallel Plate. Source D18 = 0.83 / 13.15 / 25.24 mm
replaces the folded final gap. The rear gaps 38.386495160 / 38.392789514 / 38.373018403 mm are Gaussian derivations,
not falsely attributed to the source. This correction restores physical higher-order/chromatic tracing as well as length.

The source design stop endpoints are f/3.95 and f/5.85; the previous f/4 and f/5.6 schedule opened the model to
production metadata. The endpoints are corrected to the printed design values, with the unchanged f/5 middle value
explicitly inferred. Marketed f/4–5.6 remains in catalog prose. R1–R18 radii/thicknesses, the stop coordinate,
source asphere and all infinity zoom gaps are retained. No polynomial is tuned to fit a drawing.

Restoring L5 adds 0.340513 mm to the geometric track relative to the fold. The earlier inferred 480 mm finite
conjugates are therefore re-solved for that physical track, preserving rigid L2 translation and D3 + D9:

| Zoom z | Old folded close D3 / D9 (mm)     | Physical close D3 / D9 (mm)       | Physical L2 shift (mm) |
| ------ | --------------------------------- | --------------------------------- | ---------------------: |
| 0      | 1.062392316796 / 21.557607683204  | 1.060566850258 / 21.559433149742  |            2.329433150 |
| 0.5    | 10.305434876154 / 13.354565123846 | 10.303131295911 / 13.356868704089 |            3.116868704 |
| 1      | 26.939257379094 / 9.040742620906  | 26.935538551786 / 9.044461448214  |            6.424461448 |

Only those three inferred close endpoints target 480 mm. No finite source cam exists; interpolated close-setting
conjugates range from 362.313 to 480 mm across the 65 zoom positions. This reconstruction remains qualified.

### Every element and adopted outline

| Element / source faces | Adopted clear front / rear radius (mm) | Drawn front / rear radius (mm) | Confirmed source nd / νd |
| ---------------------- | -------------------------------------- | ------------------------------ | ------------------------ |
| L11, 1–2               | 21.5 / 21.5                            | 21.5 / 21.5                    | 1.696797 / 55.5          |
| L12, 2–3               | 21.5 / 21.5                            | 21.5 / 21.5                    | 1.846660 / 23.9          |
| L21, 4–5               | 13.6 / 10.8                            | 13.6 / 13.6                    | 1.743198 / 49.3          |
| L22, 6–7               | 10.1 / 10.1                            | 10.1 / 10.1                    | 1.712995 / 53.9          |
| L23, 8–9               | 10 / 10                                | 10 / 10                        | 1.846660 / 23.9          |
| L31, 11–12             | 7.05 / 7.05                            | 7.05 / 7.05                    | 1.696797 / 55.5          |
| L32, 13–14             | 7.07 / 7.07                            | 7.07 / 7.07                    | 1.846660 / 23.9          |
| L41, 15–16             | 7.7 / 7.7                              | 7.7 / 7.7                      | 1.487490 / 70.2          |
| L42, 17–18A            | 9 / 9                                  | 9 / 9                          | 1.583060 / 30.2          |
| L51, 19–20             | 14.5 / 14.5                            | 14.5 / 14.5                    | 1.516330 / 64.1          |

All elements, every concave end, the S2 bonded interface and the bulk aspherical medium were inspected. The first
unit’s three 21.5 mm clear heights follow resolved common native endpoints (roughly 259 px); this is source-supported
outline reconstruction, not an opaque bonded-interface block. Before the raise, 40 finite corner-chief states clipped
on S1 or S2, with maximum required front radius 21.0895 mm. The adopted native-supported height removes that
unintended clipping while preserving the source R/d and minimum edge thickness.

S4’s front height changes 11.4 → 13.6 mm, and S5 gains rimExtensionSd = 13.6 while sd = 10.8 remains its optical
cap. Native cap/outer heights are about 126/165 px (q ≈0.76 ±0.02), consistent with this distinct shoulder. S6/S7
change 9.3 → 10.1, S8/S9 become 10.0 from 8.8/8.6, following native L2 heights around 122–126 px. The 10.3 mm
S6/S7 trial fails the unchanged S5–S6 intrusion guard: 5.09 mm versus 4.923 mm permitted across 5.470 mm. No
source radius or gap is altered to rescue it. The adopted 10.1 mm lies within the drawing uncertainty and passes.

S13/S14 change 7.05 → 7.07 mm, a strict source axial-beam requirement smaller than native reading precision.
Their shared height follows the source pair; the tight S12–S13 gap guard remains unchanged. L4’s positive S15/S16
heights change 9.3/10.0 → 7.7/7.7 mm and the rear bulk asphere S17/S18A changes 10.2/10.5 → 9.0/9.0 mm, matching
native half-heights around 90 and 107 px. All sampled axial rays and chiefs still clear across the complete state grid.
Those clear-cap changes do not create opaque lands or adjust aspheric coefficients. No other resolved outer shoulder,
flat concave-end cut, hybrid resin wing or mechanical flange is invented. The sole rim extension is on air-facing S5.

The unprinted plate radius is sized under the lens-owned-filter beam rule. A 49-point pupil grid at axial, 0.6-field
and format-corner fields over 65 zoom × 21 focus states gives maximum passing plate radius 13.452205 mm, at z = 1,
focus = 0.95, face 20. The sampling accepts image-format rays with a conservative 1% corner-height allowance and
all display-field rays. A 5% radial margin rounded up to 0.5 mm gives 14.5 mm. Native Figure 10 suggests a smaller
wide-end plate outline, so 14.5 mm is explicitly a beam-clear estimate, not a source mechanical diameter.

### All ten media and source-only spectral content

Every retained pair matches Numerical Example 4, including restored L5. Paragraph 0079 explicitly states the d-line
reference; each modeled medium records that reference. The original supplies no C/F/g indices, partial dispersion or
APD quantity. Removed the 24 former catalog-derived C/F/g copies from the eight matched powered glasses. Nine of
ten media now resolve to compatible catalog curves as qualified spectral proxies. No historical supplier, melt or
chemistry is established. L42 remains Unmatched: paragraph 0052 identifies polycarbonate only for Examples 1/2;
matching coordinates in Example 4 support a hypothesis, not proof of its chemistry. No disconnected resin cap or
separately indexed cement is authored. L5 is the only source-listed protective/filter plate in this configuration.

### State-dependent limits and rendering

Fresh actual SVGs at wide/middle/tele and infinity/middle/close focus agree in topology with Figure 10, including
restored L5 and S5’s shoulder. All 1365 state layouts have ten finite closed connected element paths and zero hidden
renderer trim. All 200655 stop-aimed pupil samples are aimed; every axial sample and every sampled chief clears.
The three infinity axial/0.6-field/corner survivor counts are 49/39/19, 49/48/35 and 49/48/33; corresponding inferred
close counts are 49/39/19, 49/46/40 and 49/48/26. Peripheral clips include the bonded interface; no opaque interface
feature masks that limitation. These discrete results are not full peripheral transmission certification.

Strict source-station axial aperture and image-circle/format-corner checks pass. A separate 65-position infinity
census stays within numerical tolerance of the stated iris schedule, but intermediate zoom reaches −1.185700 mm
paraxial defocus at z = 0.28125. Published stations have derived Gaussian rear image gaps; interpolation is illustrative,
not a continuous source cam. All sampled runtime corner chiefs reach the format. Separately, original source
half-angles 36.8° wide / 12.05° tele produce exact image heights 20.485465 / 22.509448 mm (94.7% / 104.0% of the
format half-diagonal), distinguished from paraxial source-field arithmetic. There is no inferred cut requiring a full
beam exemption. Source fidelity, sampled clearance and the qualified post-launch production correlation remain separate.

## 2026-10-30 — Current-state iris runtime follow-up

This is a runtime-only correction using the unchanged prescription and controls. It does not repeat the original-PDF shape/glass inspection or change its date. The earlier full-pupil helper used the base wide-state `lens.stop.physicalSemiDiameter`. The corrected helper uses the current prepared state's STO semi-diameter, so variable-iris zooms receive their actual aperture. The separate 65-position aperture/chief/first-order census already used the actual state iris and is unchanged. Prior full-pupil counts are superseded here.

All 66,885/66,885 axial samples and all 4,095 sampled chiefs clear with the actual state iris. Peripheral counts in the table remain partial transmission rather than a full-beam guarantee. The current-iris useful-bundle plate envelope reaches 13.478941 mm, below the retained inferred 14.5 mm plate SD; no source plate dimension is newly claimed.

| Zoom z | Focus state    | Axial / 0.6-field / corner survivors (of 49) |
| ------ | -------------- | -------------------------------------------- |
| 0      | Infinity       | 49 / 39 / 19                                 |
| 0      | Inferred close | 49 / 39 / 19                                 |
| 0.5    | Infinity       | 49 / 48 / 35                                 |
| 0.5    | Inferred close | 49 / 46 / 40                                 |
| 1      | Infinity       | 49 / 46 / 29                                 |
| 1      | Inferred close | 49 / 46 / 24                                 |

The 65-zoom × 21-focus census evaluates 1,365 states and 200,655 pupil launches. Every sample is aimed and all 4,095 chiefs clear. Element paths remain finite, closed and connected, with zero hidden renderer trimming. Source-station shapes, inferred cuts (none), material evidence, all source R/d, image planes, aperture schedule, controls and existing guards are unchanged. These are sampled runtime results, separate from source fidelity and production correlation.

## 2026-10-31 — Scoped unresolved-medium dispersion-source follow-up

Preserve the actual prior patent/shape review dates above. This is a dispersion-source follow-up for Numerical Example 4 L42 / R17, not another shape review. US 2004/0223070 A1, PDF page 19 / printed 7, retains 1.583060/30.2, defined at d by paragraph 0079. Paragraph 0052 identifies polycarbonate for Examples 1/2; that cannot establish Example 4 chemistry. The RII one-term PC fit evaluates νd = 27.858294, outside the source ±2 guard; Kasarova 2007’s PC polynomial evaluates νd = 27.564085 versus its printed 29.1, failing strict catalog consistency. The permission-bearing archival Zemax POLYCARB row (Handbook of Optics Vol. II citation) passes coordinate comparison with residuals +0.002409922 / −0.290815, but its primary handbook coefficient table was not directly verified. Retain the explicit unresolved medium rather than treating another example’s PC name or an archival generic PC curve as its material identification. No per-lens line indices, coefficients, source pair/partial, optical/control or shape change is made.

Research sources: [primary Sultanova et al. 2009 paper](https://doi.org/10.12693/APhysPolA.116.585); [primary Kasarova et al. 2007 paper](https://doi.org/10.1016/j.optmat.2006.07.010); [permission-bearing archival Zemax MISC.AGF](https://github.com/uasal/zmx2yaml/blob/36f3cd24da467375821b0a66698274fd84e19f6d/AGF_files/misc.agf). The research papers are distinct from the selected Canon patent evidence.

## 2026-10-31 — Qualified published POLYCARB curve adopted

US 2004/0223070 A1, Numerical Example 4, PDF page 19 / printed 7, paragraph 0085 R17/L42; paragraph 0079 defines the d-line reference. Paragraph 0052 names polycarbonate for Examples 1/2, not selected Example 4. Neither the numerical match nor the qualified POLYCARB curve converts that cross-example hypothesis into source-established chemistry. This follows and preserves the negative candidate-fit record above; it does not repeat the dated patent shape review.

The permission-bearing [RadiantZemax MISC.AGF archival copy](https://github.com/uasal/zmx2yaml/blob/36f3cd24da467375821b0a66698274fd84e19f6d/AGF_files/misc.agf) publishes a replayable POLYCARB Schott polynomial, cited to _Handbook of Optics Vol. II_. The [official Ansys source table](https://ansyshelp.ansys.com/public/Views/Secured/Zemax/v251/en/OpticStudio_User_Guide/OpticStudio_Help/topics/Glass_Catalog_Sources.html) independently confirms that attribution. This is a published numerical material curve, not a direct material-manufacturer fetch or proof of the selected patent medium's chemistry, formulation, supplier or Canon process. The handbook coefficient table was not directly inspected; its chapter/page is not invented.

The native row uses $n^2=a_0+a_1\lambda^2+a_2\lambda^{-2}+a_3\lambda^{-4}+a_4\lambda^{-6}+a_5\lambda^{-8}$, with wavelength in µm, reference temperature 20 °C and valid range 0.365–1.014 µm. At C/d/F/g it evaluates 1.579863774 / 1.585469922 / 1.599438695 / 1.611520588; computed νd is 29.909184982. Its own-row residuals, −0.00000007757 in nd and −0.00000001834 in νd, pass strict 0.00003/0.11 guards. All 1,001 sampled wavelengths are finite and normally dispersive. Relative to the source 1.583060/30.2 pair, the comparatively large nd difference +0.002409922 and νd difference −0.290815018 fit the existing ±0.003/±2 compatibility windows. The runtime retains the authored source index; the curve supplies only qualified spectral variation. No per-lens C/F/g indices, partials, coefficients or new APD badge are authored.

Only the L42 / E9 glass annotation changes to the qualified POLYCARB proxy; the public analysis and current 10/10 curve count agree. Every other parsed data field, including source pair/partials, source qualifications, numerical prescription, iris, focus/zoom controls, physical gaps and rim geometry, is preserved. Historical supplier, actual polymer formulation and Canon manufacturing process remain unproved.
