# CanonEFS18135mmf3556ISSTM patent audit

## 2026-09-06 UTC

- Source: local `patents/US20130088622A1.pdf`, Example 4, Fig. 13, PDF page 23. Original PDF retained unchanged and untracked.
- Reviewed the exact embodiment at 600 dpi, distinguishing optical rims from brackets, arrows, and mechanical outlines.

### Semi-diameters

Retained published effective-diameter halves, calibrated iris, and S9 11.2826 mm clearance trim. The rotated figure was inspected at 600 dpi. Two automated crops are contaminated by unit brackets and IS arrows and truncate the front height; their extreme ratios are rejected. Manual inspection agrees with the wide front group and narrow rear train; no unsupported aperture substitution was made.

### Glass and identity

Strict catalog coverage: 16/16 before, 16/16 after. All patent nd/vd coordinates are retained. Catalog matches describe spectral proxies, not production supplier identities. No new catalog entry was needed.

Normalized assignee metadata to the catalog spelling `Canon Inc.` where needed. Display names follow the data specification, including hyphenated ranges and parenthetical product-case camera names.

## 2026-09-06 UTC — screenshot follow-up

Rechecked Fig. 13 optical rims, preserving the published effective-diameter halves. Replaced artificial C-series callouts with the source L5B / IS subgroup label and shortened the parent L5 label. E2 now carries an inferred UD/APD color tag supported by the 1.49700/81.5 coordinate and Canon's one-UD production count; no supplier identity is asserted.

The Fig. 13 printed L3/L4 labels appear transposed relative to ¶0088 and the numerical table: those define L3 positive before L4 negative. Retained the numerical order and the objectward focus arrow adjacent to the negative singlet; no positive/negative unit swap was made. L4's finite-focus gaps remain explicitly reconstructed. Wide→mid L2 moves 0.70 mm imageward before reversing objectward; all other units move objectward. L3 and L5 share zoom travel.

Surface/image-circle audits and the source-station, dispersion, and render-clearance regressions validate this follow-up; final repository gates are recorded in the batch record.

## 2026-10-07 — Patent-audit queue: printed stop diameter

Source: local `patents/US20130088622A1.pdf`, Numerical Example 4, ¶0099, printed p. 9 (PDF p. 39), read from 300 and 400 dpi renders of the page.

| Field                                           | Before                                                                                              | After                                                                                                                                        | Source                                                                                                                       |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `STO` sd                                        | 7.123822482626368 (paraxial wide-state f/3.59 pupil)                                                | 7.26                                                                                                                                         | Surface Data, row 20(Stop): r ∞, d 3.30, effective diameter 14.52                                                            |
| `STO` inline comment                            | Radius inferred from the wide-state F/3.59 entrance pupil                                           | One-half of the printed 14.52 mm effective diameter                                                                                          | Same row                                                                                                                     |
| Data-file header, semi-diameter block           | STO listed as an exception; 14.52 mm said not to reproduce the published F-numbers                  | Stop included among the halved diameters; a 7.26 mm iris by real marginal ray gives F/3.591 / 4.879 / 5.973                                  | Same row; Data table, F-number 3.59 / 4.88 / 5.97                                                                            |
| Note, Optical Architecture, stop paragraph      | 14.52 mm "does not reproduce the published f-numbers"; authored radius 7.123822 mm                  | Authored radius 7.26 mm; real-ray f/3.591 / 4.879 / 5.973, paraxial f/3.52 / 4.78 / 5.86; patent silent on stop constancy                    | Same row and table; ¶0038, printed p. 3 (PDF p. 33)                                                                          |
| Note, verification table, stop F/# column       | 3.590000 / 4.873061 / 5.975224 (paraxial, 7.1238 mm radius)                                         | 3.5908 / 4.8791 / 5.9732 (real marginal ray, 7.26 mm radius)                                                                                 | Data table, F-number 3.59 / 4.88 / 5.97                                                                                      |
| Note, sentence after the verification table     | Iris inferred at the wide state, within 0.007 f-number of the published middle and telephoto values | 7.26 mm radius (half the printed diameter) within 0.004 f-number at every station; fixed viewer iris 7.2618 mm gives f/3.590 / 4.878 / 5.972 | Same table                                                                                                                   |
| Note, stop position (Optical Architecture; E10) | Stop "between L4 and L5A"; E10 "immediately behind the aperture stop"                               | Stop inside L5A, 0.83 mm behind E10 and 3.30 mm ahead of C3; E10 immediately ahead of the stop                                               | Surface Data rows 17 (variable), 18 (30.381 / 3.40), 19 (−41.483 / 0.83), 20(Stop) (∞ / 3.30); Fig. 13 (sheet 22, PDF p. 23) |

- The printed F-numbers 3.59 / 4.88 / 5.97 need real-ray iris radii of 7.2618 / 7.2586 / 7.2641 mm (spread 0.08 %); one radius between 7.2580 and 7.2660 mm fits all three within print rounding, and half the printed diameter, 7.26 mm, lies in that window. The paraxial radii are 7.1238 / 7.1137 / 7.1301 mm and no single one fits, so the earlier mismatch was a paraxial-pupil reading of a real-ray table.
- The authored `STO` sd does not size the beam. The wide-open iris is 7.2618 mm, traced from `nominalFno[0]`, with either authored value; every computed numeric field of the built lens is identical before and after, and only the echoed input row differs. The aperture audit traces f/3.59 / 4.88 / 5.97 as stated with the iris as the limiter at all three stations, and the axial marginal ray through a 7.26 mm stop stays inside every other authored semi-diameter (closest: surface 19 at 7.439 of 7.475 mm, wide station).
- Confirmed unchanged against the page: all 28 active surface rows (r, d, nd, νd), every effective-diameter half other than the documented surface 9 trim, the asphere coefficients of surface 27, the five variable gaps and BF at the three stations, focal lengths 18.60 / 50.99 / 130.48 and `nominalFno` 3.59 / 4.88 / 5.97. Computed focal lengths stay 18.5993 / 51.0267 / 130.5464 mm. `zoomApertureModel: "fixed-iris"` is kept.
- ¶0038 only defines SP as the member limiting the full-aperture F-number light flux; no sentence of the patent says whether the stop diameter is held during zooming, so the constant opening rests on the printed numbers.
- Left open: the note's ray-clearance sentence (smallest clearance 0.478560 mm at surface 14, wide/infinity) names no ray set and was not re-derived. The stated axial marginal ray at the wide station passes surface 19 at 7.4405 mm of its 7.475 mm semi-diameter.

## 2026-10-30 — Original shape-and-glass review

Original: untracked local `patents/US20130088622A1.pdf`, Numerical Example 4,
¶0099 / PDF p. 39 (printed p. 9); Fig. 13 / PDF p. 23 (sheet 22); Table 1 / PDF
p. 39; definitions/dummy statement ¶0093–0095 / PDF p. 37. The front page confirms
Shigenobu Sugita, Canon Kabushiki Kaisha (normalized Canon Inc.), filing
2012-09-13 and publication 2013-04-11. No substitute publication was used.

Native source is 2560×3300 pixels at 300 ppi. The rotated optical span is about
1360 pixels over 100.94 mm, approximately 13.4 px/mm. Rim uncertainty is ±0.6 mm,
or ±1.0 mm at the front blanks. Enlarged 600 dpi displays in the 2026-09-06
record were upsampling, not native 600 ppi evidence. Leaders, focus/IS arrows,
stop marks, dummy plane and brackets are excluded from optical-rim measurements.

### Shape and source constraints

Every element, concave end and cemented interface was inspected; no hybrid resin
or separate cement medium is prescribed. All 28 active R/d rows, 16 source pairs,
the six source asphere values (plus zero schema-only A14), effective-diameter
halves, three station gap schedules, fixed-iris rule and reconstructed focus
controls remain unchanged. Prior source-cap and 2026-10-07 stop-envelope evidence
is reused with its actual date. The explicitly non-optical surface 1 dummy stays
excluded under ¶0095, without replacing its air interval by an invented plate.

| Free surface | Clear sd retained | Outer shoulder sd | Constraint                                          |
| ------------ | ----------------: | ----------------: | --------------------------------------------------- |
| 4            |            25.225 |            25.385 | L1 rear blank anchored to optical bond height       |
| 6            |            23.780 |            24.190 | Separate positive L1 meniscus rear shoulder         |
| 8            |            11.445 |            15.095 | Resolved tall rear L2 negative-meniscus blank       |
| 10           |            11.070 |           11.2826 | E5 rear end bounded by retained front cap           |
| 13           |            10.385 |            10.825 | Rear L2 doublet, bond height preserved              |
| 23           |             6.590 |             6.740 | L5A doublet, bond height preserved                  |
| 27A          |             7.715 |             7.920 | L6 front blank beyond existing aspheric optical cap |

Values are millimeters. Seven `rimExtensionSd` shoulders improve outer rims while
preserving every optical cap. Small extensions are anchored to existing source
caps, not claimed as sub-pixel independent measurements. No opaque bonded land,
unsupported equal-height block, mechanical flange or disconnected wing is added.
Different printed caps at bonds retain small outline tapers instead of inventing
opaque material to force the figure's level blanks. No inferred cut is added.

Retained rejected literal trial: source S9 sd=11.30 yields 6.187704 mm sag intrusion
across D8=6.85 mm, above the unchanged 0.90 allowance 6.165 mm. Existing 11.2826
has 6.164925 mm intrusion and 0.685075 mm physical separation. The 0.0174 mm optical
restriction is explicitly retained; the guard is not relaxed. Published R/d,
asphere, stop and cam values are not adjusted for a drawing or runtime result.

### Every medium and metadata

All 16 source nd/νd pairs are retained. Headers and ¶0093 use d-reference notation;
¶0040 / PDF p. 33 gives plot wavelengths d=587.6 and g=435.8 nm. The original gives
no position-specific numeric C/F/g indices, partial dispersion or APD values.
No unsupported per-lens override was present or added (zero removals). Public
compatibility resolution remains 16/16, with identical selected curves before/
after label qualification. Six-digit/class labels now explicitly qualify those
curves as spectral proxies with historical supplier, melt and chemistry unknown.
E2's fluorophosphate chemistry wording is replaced by a low-dispersion class;
its APD flag remains inferred, without assigning a production UD count to a
source position. No source filter, rear plate or additional cement-index medium
is omitted. Catalog focal endpoints now quote printed 18.60/130.48 rather than
computed 18.599255/130.546393; this changes no optical geometry.

### Stop convention and source discrepancies

Current runtime iris is fixed at 7.123822 mm, derived by the current paraxial rule.
Its project F/# is 3.590000/4.873061/5.975224; independent real-beam values are
3.656863/4.968554/6.083014. Historical notes describing live 7.2618 mm reflected an
older runtime convention. A separate 7.26 mm envelope diagnostic gives real-beam
3.590837/4.879093/5.973234 and paraxial 3.522662/4.781655/5.863146. Source effective
diameter 14.52, a convention-dependent real-beam match and a demonstrated
physical iris schedule remain separate. The existing aperture rule is preserved.

Fig. 13's local L3/L4 labels are reversed relative to ¶0088 / PDF p. 36, the
numerical unit powers and the correctly ordered front-page diagram. Also ¶0050 /
PDF p. 33 and Claim 4 / PDF pp. 39–40 define okN using the entire zoom, whereas
Table 1's −1.311 mm matches isolated L6 (literal −1.311653). Whole-system offset is
−58.793082; condition 2 computes 0.411130 versus 1.085750 with L6 (printed 1.087).
This is a definition/table mismatch, not a claim that every preferred condition
must be fulfilled. Both source discrepancies are qualified in `source.errata`
and analysis; no numerical prescription value is changed.

### Runtime, controls and actual SVGs

Surface and image-circle checks pass; all three published station aperture checks
pass within 3%, and all three station chief-field checks reach ≥99% corner
coverage. Geometry-identical 65-position interpolation census: 45/65 aperture
checks within 3%, with 20 fixed-iris/nominal-label mismatches (worst −4.765096% at
zoom 0.265625); field coverage ≥99% at 47/65, with 18 front-cap-limited intervals
(minimum 95.913205% at zoom 0.140625). Infinity BF displacement reaches −2.713119 mm
at zoom 0.28125. These are retained illustrative-cam limits, not source-station
failures. See analysis for explicit actual/positive-object pupil counts and
field-solve/finite-corner restrictions; full-pupil corner clearance is not claimed.

All three reconstructed close endpoints have actual Gaussian image-plane distance
390 mm, while 50/390 sampled non-infinity interpolated controls are virtual objects.
The original supplies no finite-focus table; source focus direction, reconstructed
travel, virtual intervals and positive-object diagnostics remain distinguished.
All sampled real finite axial bundles clear. No finite-focus cam is invented or
changed to remove a corner-field restriction.

Actual nine-view SVGs were compared with the native figure, including every concave
end, cemented curve and shoulder. The 65 zoom × 21 focus contour census has 1,365
sets of 16 finite, closed, connected paths, zero hidden renderer trimming and zero
geometry/iris difference from the diagnostic clone. Only centered IS is validated;
decentered travel and continuous 3D mechanical clearance remain outside this pass.
