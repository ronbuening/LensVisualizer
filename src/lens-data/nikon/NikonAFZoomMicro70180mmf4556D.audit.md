# Audit Log — Nikon AF Zoom-Micro Nikkor ED 70-180mm f/4.5-5.6D

Current model: US 5,717,527, Embodiment 6, Table 7 and Fig. 36.

## 2026-11-23 — Embodiment 6 replaces Embodiment 7

### Source and identification

Changed the published model from US 5,717,527 Embodiment 7, Table 8 and Fig. 43, to Embodiment 6, Table 7 and Fig. 36. Embodiment 7 lacks an ED-class element and runs from 82.40 to 194.00 mm. Embodiments 5 and 6 both have 18 spherical elements in 14 air-spaced groups, ED-class L8 and 370 mm close focus. Embodiment 6 has the closer section fit. The rendered overlay uses one uniform scale and translation, aligned to the first and last glass vertices in Nikon's Fig. 1. In native Nikon pixels, the stop and L17 front/rear vertices are 776.9 and 964.6/986.6 versus 776 and 964/986 in the drawing. Embodiment 5 gives 765.4 and 952.5/978.6. Photons to Photos assigns Embodiment 5 to the lens. Nikon gives no zoom or focus setting for Fig. 1. The pre-stop separation supports the wide-at-infinity registration. [US 5,717,527](https://patents.google.com/patent/US5717527A/en), [Nikon Tale 18](https://imaging.nikon.com/imaging/information/story/0018/), [Nikon Fig. 1](https://imaging.nikon.com/imaging/information/story/0018/img/img1.jpg), [Photons to Photos, Embodiment 5](https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBench.htm#Data/US005717527_Example05_Tale18.txt).

Nikon's production specifications give F mount, 70–180 mm f/4.5–5.6, 18 elements in 14 groups, one ED element identified as the eighth physical element, zero aspherical elements, a 62 mm filter thread, nine rounded blades, f/32 minimum aperture, 0.37 m minimum focus and 1:1.32 maximum reproduction. Tale 18's aperture table gives 1:3.2 at wide. Nikon dates the release to September 1997. Table 7 gives 72.05–174.60 mm at f/4.45–5.81. [Nikon specifications](https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_zoom_micro_nikkor_ed_70-180mm_f45-f56d/#spec), [Nikon Tale 18, effective apertures](https://imaging.nikon.com/imaging/information/story/0018/), [Nikon Japan, development and release history](https://nij.nikon.com/enjoy/life/historynikkor/0018/).

### Prescription, zoom, focus and aperture

- Re-read rendered PDF p. 1 for dates and attribution, pp. 67–68 for every radius, thickness and material coordinate in the 33 rows, and the three infinity and three close rows for gaps, focal lengths, back focus, total length, magnification and object-to-image distance. Checked Fig. 36 on PDF p. 37, Figs. 37–42 on pp. 38–43 and conditions (6)–(10) on p. 60. Retained literal millimetres and helium d (587.6 nm in the patent). No asphere terms are printed.
- S20 prints zero in the Abbe column and leaves index blank. The 1.8000 mm interval is air. S9's index really prints 1.74001, while S13 and S30 print 1.74000. The intermediate TL sum is 0.00001 mm below the printed total at both focus settings. The individual spacings and image plane are retained. No source misprint requiring an optical correction was found.
- S23 is the printed stop in air 1.0000 mm ahead of S24. It rides with the rear assembly. There is no published iris radius. The Table 7 infinity f-numbers give radii 12.34567, 12.29199 and 12.29533 mm. Those radii stay fixed with focus at each station. Nikon's nine blades and f/32 are production metadata. All six geometry states are published and the close rows use the explicitly defined 370 mm object-to-image distance. Only d10 changes with focus, increasing from 2.63000 to 37.18051 mm.

| Infinity     | EFL patent / computed (mm) | Back focus patent / Gaussian (mm) | f-number patent / traced |
| ------------ | -------------------------: | --------------------------------: | -----------------------: |
| Wide         |        72.05204 / 72.05131 |               50.62048 / 50.61909 |              4.45 / 4.45 |
| Intermediate |      105.00000 / 104.99791 |               60.05622 / 60.05398 |              5.01 / 5.01 |
| Telephoto    |      174.60000 / 174.59274 |               74.04862 / 74.04437 |              5.81 / 5.81 |

| Close at 370 mm | EFL computed (mm) | Back focus patent / Gaussian (mm) | β patent / computed | NA patent / traced | Working f-number from traced cone |
| --------------- | ----------------: | --------------------------------: | ------------------: | -----------------: | --------------------------------: |
| Wide            |          50.15372 |               50.62048 / 50.61946 | −0.31106 / −0.31106 |     0.11 / 0.11206 |                              4.46 |
| Intermediate    |          62.84557 |               60.05622 / 60.05477 | −0.45330 / −0.45330 |     0.10 / 0.09908 |                              5.05 |
| Telephoto       |          71.19578 |               74.04862 / 74.04655 | −0.75378 / −0.75376 |     0.09 / 0.08537 |                              5.86 |

The close rows tabulate β and back focus, and their companion plots give rounded NA. The f-numbers in the Table 7 header name the infinity designs. Figs. 37–39 give 16.64°, 11.43° and 6.91° half fields at Y = 21.60 mm, reproduced by the traced chief rays. At the telephoto 1:2 condition, the calculated focal length, track and distance are 88.92765, 233.02802 and 475.93395 mm versus 88.928, 233.029 and 475.934 mm. All five calculated ratios round to the printed values.

At the modeled physical iris edge, d-line longitudinal spherical aberration relative to paraxial focus is −0.231 / +0.137 / +0.045 mm at wide, intermediate and telephoto at infinity. The traces agree with the negative wide curve, the positive middle zone (about +0.20 mm), and the telephoto crossing in Figs. 37A–39A. Real rays at the iris rim at 370 mm give −0.254 / +0.085 / +0.131 mm, with the same shapes as Figs. 40A–42A. No sign or radius change was indicated.

### Semi-diameters and vignetting

Measured Fig. 36 on the 600 dpi page from the first to last vertex, 3,406 px for 159.490 mm (about 21.36 px/mm). Checked both sides of the section and separated the optical edges from group brackets, the stop leader and the axis. Cross-checked at 5.96 px/mm on the original Nikon JPEG. The edge changes use measured rims and the printed gap and thickness constraints. In particular, the two drawings show G2 at somewhat different heights. The chosen G2 caps lie between the readings, and the small bonded and air-spaced steps were kept where the geometry supports them. Neither drawing publishes a clear-aperture table.

The preliminary Embodiment 6 model carried over the Embodiment 7 rims except for five reductions, S3 24→23.9, S20/S21 12.8→12.34, and S24/S25 17.5→17.09 mm. The first three passed the printed air-gap clearance checks, and the last two eliminated a negative L13 edge. The final outline uses the following changes from the released Embodiment 7 model. S7 is unchanged. All refracting faces were checked individually.

| Surface(s)      | Embodiment 7 → final Embodiment 6 SD (mm) | Evidence and disposition                                                                                                                                     |
| --------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| S1, S2          | 29.5→27.4, 27.8→26.1                      | Fig. 36 shows approximately 27.9 outer / 26.2 cap and Nikon approximately 26.8 / 25.8. S2 keeps the rear land to 27.4 instead of 29.5.                       |
| S3/S4           | 24→23.9                                   | Both drawings put L2 near 26 mm. At that radius the literal S2/S3 profiles intersect across 3.60 mm. The square 23.9 mm L2 cap clears the 90% gap check.     |
| S5/S6           | 24→23.1, 19.8→20.5                        | Both drawings show the broad L3 outer rim and a shorter curved rear cap with a step. S6 adds the land to 23.1. S7 remains 19.8 to respect the S6/S7 gap.     |
| S8–S10          | 20→20.2                                   | L4/L5 ends fall around 21 mm in Fig. 36 and 20.4 mm in Nikon's drawing.                                                                                      |
| S11/S12         | 21.5/20→19.6                              | L6 is about 21.4 in Fig. 36 and 18.6 in Nikon's drawing. The square rim keeps both faces at one height.                                                      |
| S13/S14/S15     | 20/19/18.5→19.6/18.8/18.8                 | The first doublet is about 21 mm in Fig. 36 and 18.5 in Nikon's drawing. The outer front rim is slightly taller than the shared cemented contact.            |
| S16/S17         | 18.5/18→18.2                              | L9 is about 19.7 in Fig. 36 and 17.4 in Nikon's drawing. The small production bevel is outside the resolution of the spherical face model.                   |
| S18/S19/S20     | 17/16/12.8→13.8/13.2/12.34                | Fig. 36 gives a slight step on the variator doublet at about 13.8/13.2 and Nikon shows marginally over 13. The S20 cap is constrained by the air gap to S21. |
| S21/S22         | 12.8/16→12.34/13.2                        | L12 is about 13.2 in both drawings. S20/S21 already intrude 1.6192 mm into the 1.8000 mm gap at 12.34, against the 1.6200 mm default budget.                 |
| S24/S25         | 17.5→13.4                                 | L13 has square ends at about 13.4 in both drawings.                                                                                                          |
| S26/S27/S28/S29 | 14.5→12.9/12.9/12.9/12.0                  | The triplet is about 12.9 in Fig. 36, with the final face stepped to about 11.8. Nikon's silhouette is about 13.2.                                           |
| S30/S31         | 15.5→12.8                                 | L17 is about 12.7 in Fig. 36 and 12.9 in Nikon's drawing.                                                                                                    |
| S32/S33         | 13→11.9                                   | Both show the final meniscus at about 11.9.                                                                                                                  |

The surface, image-circle and field-coverage checks passed, with the 21.65 mm format corner chief ray clear at all three infinity stations. The iris limits the axial d-line beam at every published state. Exact tracing sampled the pupil from near the axis to the iris edge at the six source states and checked the marginal beam on a 251×251 zoom and focus grid using the in-focus object conjugate. The smallest glass clearance is 0.278 mm at S20, telephoto and infinity. No gap tolerance was relaxed.

The vignetting comparison below uses the engine's wide-open geometric transmission at the same image-edge samples for both Embodiment 6 outlines. The narrowing shows how drawn rims change the off-axis bundle even though the chief ray and the full axial bundle pass. The older Embodiment 7 model passed 100/100/93.7% on axis at wide/mid/tele. Its off-axis series samples different angles.

| Station      | Final sample angle | Preliminary SDs, axis / edge | Final SDs, axis / edge |
| ------------ | -----------------: | ---------------------------: | ---------------------: |
| Wide         |              16.7° |                 100% / 70.9% |           100% / 57.7% |
| Intermediate |              11.5° |                 100% / 87.9% |           100% / 74.3% |
| Telephoto    |               6.9° |                 100% / 90.6% |           100% / 80.4% |

### Glass and longitudinal colour

Table 7 names no trades or suppliers and gives no C/F/g indices or partial-dispersion values. Source precision is five decimals in index and two in Abbe number. Reviewed coefficient-backed catalog rows and legacy vendor listings, including HOYA's obsolete entries and Sumita's all-glass catalog.

| Elements    | Printed nd / νd | Disposition                                                                                                                                                                |
| ----------- | --------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L1          | 1.78470 / 26.05 | Unmatched. SF56A gives 26.08 and the obsolete HOYA FDS3 nominal row gives 26.06.                                                                                           |
| L2, L11     | 1.80458 / 25.50 | Unmatched. SF6-family candidates give nd about 1.80518.                                                                                                                    |
| L3, L9, L13 | 1.64000 / 60.03 | Unmatched. S-BSM81 gives 60.08, and historical BSM81 gives 60.09.                                                                                                          |
| L4, L15     | 1.80384 / 33.89 | Unmatched for dispersion. Hikari E-LAFH2 agrees at print precision, but the E-LAFH2 catalog dispersion curve visibly increases the telephoto g-line departure.                                  |
| L5          | 1.74001 / 28.19 | Unmatched. HOYA FD3 gives about 1.74000 / 28.25 and legacy Sumita SF3 nominally 1.74000 / 28.20.                                                                           |
| L6, L10     | 1.77278 / 49.45 | Unmatched. HOYA M-TAF1 gives about 1.77250 / 49.46.                                                                                                                        |
| L7, L17     | 1.74000 / 28.19 | Unmatched. FD3 and legacy SF3 fail the Abbe comparison.                                                                                                                    |
| L8          | 1.49782 / 82.52 | Unmatched ED-class. Hikari J-FKH1 has the same nd and νd 82.57. The Nikon ED leader justifies `apd: "inferred"`; it supplies no material constants.                        |
| L12         | 1.69680 / 55.60 | Unmatched. Sumita K-LaK14 gives that nominal pair, but the available polynomial evaluates to νd 55.657 and moves the g-line curve by roughly 0.06 mm. S-LAL14 gives 55.53. |
| L14, L16    | 1.48749 / 70.41 | Schott N-FK5 optical equivalent. Datasheet and coefficient round-trip match the printed pair. Its contribution to the telephoto d/g separation is about 0.03 mm or less.   |
| L18         | 1.79668 / 45.37 | Unmatched. J-LASF017 gives about 1.79500 / 45.31.                                                                                                                          |

[Schott N-FK5 data sheet](https://us.shop.schott.com/advanced-optics/en/Optical-Glass/N-FK5/c/glass-N-FK5).

The real-ray colour comparison references d-line paraxial focus and uses the full d-line iris. Fig. 39A reads roughly +0.13 mm paraxial / −0.16 mm marginal for g at telephoto infinity. Fig. 42A gives roughly −0.13 / +1.08 mm at 370 mm. The retained model gives +0.685 / +0.400 mm and +0.287 / +1.441 mm, respectively. Its C-line values are +0.130 / +0.314 mm and +0.393 / +0.351 mm. The plots publish d and g only. Applying E-LAFH2 at L4 and L15 moves the marginal g line roughly another +0.16 mm at both distances and the paraxial g line another +0.15 / +0.11 mm. No line indices were fitted to the plots.

Open: exact factory prescription, glass suppliers and melts, source partial dispersion, production clear apertures and the assumed setting of Nikon's drawing. The d-line reconstruction passes the source checks. The g-line residual limits interpretation of its chromatic results.

The earlier entries below document Embodiment 7, Table 8.

## 2026-06-19 — Glass mismatch cleanup

### Phase 1 — Glass corrections

| Element / surface | Field   | Before                                               | After                                                                                           | Justification                                                                                                                                  |
| ----------------- | ------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| L1 / surface 1    | `glass` | `TAFD25 / J-LASFH13HS class (Nikon/Hikari, 861/230)` | `861230 — high-index dense flint (patent nd=1.86074, νd=23.01; no source-backed catalog match)` | Patent Table 8 lists `νd=23.01`, `nd=1.86074`; the old label resolved to HOYA TAFD25 at `nd=1.90366`, so the safety net correctly rejected it. |
| L2 / surface 3    | `glass` | `TAFD25 / J-LASFH13HS class (Nikon/Hikari, 861/230)` | `861230 — high-index dense flint (patent nd=1.86074, νd=23.01; no source-backed catalog match)` | Same Table 8 row values as L1. The generated relabel candidate `S-NPH5` is numerically close but not source-backed for patent code 861/230.    |

### Phase 2 — Retained-information audit

- Confirmed the affected stored values against local `patents/US5717527.pdf`: L1 and L2 remain `nd=1.86074`, `νd=23.01`.
- No radius, spacing, semi-diameter, or variable-gap changes were made in this pass.

### Phase 3 — Spectral / metadata enrichment

- No `nC`, `nF`, `ng`, or `dPgF` rows were found for these elements in the extracted local patent text. The elements remain on the Abbe path until a coefficient-backed 861230 catalog source is found.

### Phase 4 — Analysis sync

- Updated the L1/L2 descriptions and glass-identification table to remove the misleading TAFD25/J-LASFH13HS class wording.

## 2026-07-29 — Glass coverage follow-up

- Current Hikari J-SFH2 provides a source-backed coordinate successor for L1/L2: it retains `nd=1.86074`, while
  current code `861231` / `vd=23.08` differs from the patent's `861230` / `vd=23.01` only in the last rounded digit.
- Hikari E-LAFH2 is an exact code and coordinate match for L15 (`804339`, `nd=1.80384`, `vd=33.89`).
- Relabeled all three elements and synchronized the analysis. This replaces the prior Abbe fallbacks with catalog
  dispersion without changing the patent prescription.

## 2026-07-30 - `748523` family review

- Rechecked the L5 patent row at `nd = 1.74810`, `vd = 52.30`.
- No reviewed public coefficient row reproduces both coordinates within the runtime safety window. The closest
  plausible rows are around `1.741 / 52.6` or `1.755 / 52.3`, outside the accepted d-line residual.
- Retained the explicit unmatched `748523` annotation without a supplier or APD claim. No prescription, zoom,
  focus, aperture, or semi-diameter values changed.

## 2026-08-11 — Phase 92 patent-coordinate catalog recovery

- Visually rechecked US 5,717,527 Table 8 on rendered PDF page 69: L3 is `1.61720 / 54.01`, L4 is
  `1.79504 / 28.56`, and L17 is `1.74077 / 27.63`.
- Recovered HOYA BACED1 (`1.617203 / 53.945664`) and matched the other rows to existing coefficient-backed
  J-LAFH3 (`1.79504 / 28.692277`) and E-FD13 (`1.74077 / 27.76`) models.
- Relabeled all three as supplier-neutral optical equivalents and synchronized the analysis. L6 `748523` remains
  unresolved; no prescription, zoom, focus, aperture, or semi-diameter values changed.

## 2026-08-21 — E-LAKH1 discontinued-catalog recovery

- Hikari's official 2022-07-01 catalog supplies the previously missing discontinued E-LAKH1 row at code `748523`,
  `nd = 1.748099`, `νd = 52.304982`, exactly matching L6 at the patent's printed precision.
- Relabeled L6 as a supplier-neutral E-LAKH1 catalog equivalent and synchronized the analysis. This supersedes the
  earlier current-catalog no-match disposition; no prescription, zoom, focus, aperture, or semi-diameter values changed.

## 2026-10-30 — Original-figure land, source aperture correction, and fresh glass reinspection

- Directly viewed `patents/US5717527.pdf`, seventhembodiment Figure43/PDF44 at600dpi+native300dpi, Table8/PDF69, d-line convention/PDF68, Figures44A/45A/46A/PDF45–47. All18 source nd/vd pairs exact and retained;18 actual resolver curves explicitly qualified. No sourceCFg/partial/APD table or supplier/melt identity supplied; no spectral values invented.
- Table8 and all3aberrationplots consistentlyprintFNO4.14/5.10/5.73. Correct designstations4.5/5.3/5.6→4.14/5.10/5.73, addcatalogmarketing4.5/design4.14, retainname/userstopchoices. S2 continuous cap24→27.8mm plus exposedland toexistingouter29.5. Nativeq≈.94±.007 atedge≈292px;adopted.942. Allotherexposed/convex/concave/cementedfaces inspected; no furtherindependentland. No source radius/gap/focus/coefficient/tolerance changes.
- Literal tele f5.73 beam remains S20/S21-limited:current12.8caps tracef5.89647 (+2.905%, inside existing3%auditband). Minimumrounded13.2both trial givescombinedsag2.750mm vsunchanged2.610mm budget in2.900mm sourcegap;commoncap bound12.852515mm. Trial rejected;no toleranceweakening/source-depthbypass. Wide4.14/mid5.10 iris-limited. Existingteleclip alsooccurred underoldf5.6.
- Surface/circle pass;3formatcorners>=99%,9actualSVGstates18finitepaths/zero trim, rasterinspected. SourcecloseR391.9mm fulliris discreteaxialsamples25/25W,25/25M,13/25T(outerringS20clip). Counts are notflux or measuredproductionvignetting. Production.37m controllabel/sourcefocus/TL discrepancy retained. Source/catalog checks and3sharedglassfiles94testspass.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.37 → 0.392 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 5.9 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: printed close rows state no distance; 0.37 m is the old (production) value.
- `catalog.closeFocusM.marketing` 0.37 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

## 2026-11-14 — Published finite-conjugate certification

Patent: US 5,717,527, Embodiment 7. Page locators below are one-based PDF pages.

| Zoom / keyframe | Field              | Before     | After                   | Source locator                                                                                                 | Paraxial offset / diffraction depths    |
| --------------- | ------------------ | ---------- | ----------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 0 / 1           | `focus.conjugates` | Undeclared | 391.9 mm, `image-plane` | PDF p.69, Table 8 (Embodiment 7), Zooming data for closest photographing, Wide angle end; `R 391.90000`        | +0.000445205 mm / +0.022104; consistent |
| 1 / 1           | `focus.conjugates` | Undeclared | 391.9 mm, `image-plane` | PDF p.69, Table 8 (Embodiment 7), Zooming data for closest photographing, Intermediate position; `R 391.90000` | +0.000347277 mm / +0.011362; consistent |
| 2 / 1           | `focus.conjugates` | Undeclared | 391.9 mm, `image-plane` | PDF p.69, Table 8 (Embodiment 7), Zooming data for closest photographing, Telephoto end; `R 391.90000`         | -0.000305684 mm / -0.007923; consistent |

- State 0/1: Definition begins PDF p.68 (column 22) and continues p.69 (column 23). Table dimensions are mm.
- State 1/1: Definition begins PDF p.68 (column 22) and continues p.69 (column 23). Table dimensions are mm.
- State 2/1: Definition begins PDF p.68 (column 22) and continues p.69 (column 23). Table dimensions are mm.

Reference basis: patent-defined. The source states: “R represents an axial distance (object distance) between the object and the image surface”.

All declared states are consistent within the audit’s 25-depth threshold. Existing published-state flags already include these keyframes; the spacings and authored image plane are retained.
