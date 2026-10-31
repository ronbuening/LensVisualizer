# Audit Log - Canon EF-S 10-22mm f/3.5-4.5 USM

Patent: US 2005/0286139 A1, Numerical Fifth Embodiment

## 2026-06-25 - Canon folder patent audit

### Source note

- The exact patent PDF was missing from the local `patents/` tree at the start of this pass. The Google Patents PDF link was fetched to `patents/US20050286139A1.pdf` and validated with `pdfinfo` before use.

### Phase 1 - Glass corrections

- Rechecked the local PDF, data file, and analysis sidecar.
- No glass label changes were needed. N14 remains `Unmatched fluorophosphate crown (485700; nearest OHARA S-FSL5 class)` because the patent constants do not round-trip to a sourceable catalog entry.
- High-index L1/L3/L4 dense-flint rows remain correctly represented by nd values and glass labels.

### Phase 2 - Retained-information audit

- Confirmed the source still omits D9; retained the documented D9 = 3.50 mm paraxial reconstruction.
- The patent does not publish clear apertures. Existing SDs remain estimates from ray envelopes, drawing proportions, edge thickness, and the narrow 0.05 mm air gap constraint.

### Phase 3 - Spectral / metadata enrichment

| Element | Field             | Before  | After      | Justification                                                                                   |
| ------- | ----------------- | ------- | ---------- | ----------------------------------------------------------------------------------------------- |
| N10     | `apd` / `apdNote` | omitted | `inferred` | S-FPL51 UD fluorophosphate member of the L4a chromatic-correction doublet.                      |
| N12     | `apd` / `apdNote` | omitted | `inferred` | S-FPL53 Super-UD fluorophosphate singlet matching Canon's production special-glass description. |

## 2026-09-24 — Semi-diameters raised to the traced format corner

The Fifth Embodiment (¶0107, tables pp. 22–23) gives ω = 52.9° at 10.3 mm, and FIG. 10A (p. 10) plots the wide end to
Y = 13.6 mm, 96% of the 14.175 mm APS-C corner; the printed angle is paraxial, and the traced chief ray reaches Y at
53.5° and the corner at 54.6°. The estimated front rim clipped the real chief ray (solved through the stop centre) at
surface 1A from 42.3°, leaving the 10.3 mm station at 9.23 mm (65% of the corner); the 15 mm and 21.4 mm stations already
reached their corners. Only surface 1A clips: the chief ray crosses it at 23.70 mm at Y and 24.45 mm at the corner, and
every other rim clears the corner chief ray (surface 2 at 16.09 of 16.8, surface 3 at 12.68 of 13.0). The rim was sized
to the corner rather than to Y because FIG. 9 (p. 10), scaled on the 96.76 mm wide-end vertex span, draws G11 at about
25.5 mm, and its drawn surface 1A sag (≈ 4.7 mm) matches the computed sag at that height. Surface 2 was not scaled with
1A: it already sits at 0.89|R| and clears its chief ray.

| Surface | Before | After | Justification                                                                                                              |
| ------- | ------ | ----- | -------------------------------------------------------------------------------------------------------------------------- |
| 1A      | 17.0   | 25.0  | corner chief ray 24.45 mm + clearance (FIG. 9 ≈ 25.5); the asphere's slope rises monotonically to 30 mm (29.9° at the rim) |

The validator accepts the new value, all three zoom stations now reach the corner with every rim clear, and the
image-circle floor still reports nothing undersized. The analysis note's 1A departure at the adopted semi-diameter was
recomputed: +4.349 mm at 25.0 mm (was +1.237 mm at 17.0 mm).

## 2026-10-30 — Original shape-and-glass review

### Original and reused coverage

The exact untracked local `patents/US20050286139A1.pdf` is usable. This is a fresh
inspection of the Fifth Embodiment ¶0107, PDF pp. 22–23 (printed pp. 8–9), Fig. 9
on PDF p. 10 / sheet 9, Figs. 10A/B/C on PDF pp. 10–11, and Table 1 on PDF p. 24.
The 2026-09-24 front 1A cap/source-corner correction is reused unchanged, with its
actual date retained. The 2026-06-25 spectral/chemistry conclusions above are
historical; the qualifications and removals below supersede them.

The figure is a native 300 ppi 2560×3300 raster. Its approximately 1180 px first/
last optical-vertex span corresponds to 96.76 mm, about 12.2 px/mm. Native crops
and actual generated SVGs were inspected. Display enlargement adds no resolution.
Measurement uncertainty is about ±0.6 mm, increasing to ±1.1 mm for the front
asphere/hybrid shoulder. Leaders, brackets, rays and stop marks were excluded.

### Shape dispositions

Every element, concave end, bonded interface and resin layer was checked.

| Surface(s)   | Before clear sd | Adopted clear sd | Outer extension | Disposition                                                    |
| ------------ | --------------- | ---------------- | --------------- | -------------------------------------------------------------- |
| 2            | 16.8            | retained         | 25              | Resolved rear G11 blank; clear cap preserved                   |
| 3/4/5A       | 13 each         | retained         | none            | Taller drawn hybrid rejected under source-thickness constraint |
| 6/7          | 13.5/13.2       | 13.2 each        | none            | G13 blank                                                      |
| 8/9/10       | 7/7/6.6         | 6.2 each         | none            | L2a optical rim, no land at S9 bond                            |
| 12/13        | 7/7.1           | 6.9 each         | none            | G23 optical rim                                                |
| 14/15/16/17  | 9.2/9.2/10/10.2 | 7.2 each         | none            | L3 rims with sampled beam clearance                            |
| 18/19        | 12/11.75        | 11 each          | none            | Common L4a blank; S19 bond preserved                           |
| 20/21        | 9.4 each        | retained         | 11 each         | Outer blanks beyond existing caps, D20 preserved               |
| 22/23/24/25A | 11.75/12/12/12  | 11 each          | none            | L4 relay and rear doublet; no land at S24 bond                 |

Sixteen caps change and three source-supported shoulders are added. No inferred
cut is added. No opaque bonded-interface land, disconnected resin wing or
mechanical flange is interpreted as an optical blank.

Rejected trials and retained limits:

- The drawn G12 blank is about 15 mm high. Full 15 mm substrate/resin caps give
  −0.519049 mm minimum resin thickness. The retained 13 mm shared cap gives
  +0.010860 mm minimum thickness. Published R/d/asphere and the existing guards
  remain unchanged; this source-outline discrepancy is exposed in the analysis.
- Full 11 mm optical caps at S20/S21 give 0.061741 mm sag intrusion across the
  printed 0.05 mm air gap, beyond the physical gap and 0.045 mm guard allowance.
  Existing 9.4 mm caps plus 11 mm shoulders give 0.044138 mm maximum intrusion,
  leaving 0.005862 mm physical clearance. No unsupported notch or bond is invented.
- Front S2 remains 16.8 mm clear below its steep spherical guard. Its 25 mm outer
  shoulder improves blank height without enlarging transmitted aperture.
- All 25 source radii, 20 printed fixed distances, three aspheres (18 values),
  three variable-gap schedules and all existing focus/image-gap controls remain
  unchanged. Omitted D9 retains its existing unconfirmed 3.50 mm reconstruction.

### Glass, source discrepancies and metadata

All 14 printed index/Abbe pairs were checked, including the resin. Paragraph 0099
continues on PDF p. 20 / printed p. 6 and explicitly defines d-line index and νd.
No source medium, filter, rear plate or separate cement-index layer is omitted.
The original gives no position-specific numeric C/F/g indices, partial dispersion
or APD values. Remove 36 copied catalog nC/nF/ng overrides; retain 12 compatible
catalog curves only as qualified spectral proxies. Historical supplier, melt and
chemistry stay unspecified. N3 resin and N14 1.484560/70 remain Unmatched. Paragraph
0033 (PDF p. 16) supports replica resin on glass, but not UV curing or resin
chemistry. N14's fluorophosphate chemistry claim is removed. N10/N12 APD tags remain
inferred; neither their source partial dispersion nor chemistry is established by
a catalog coordinate or production special-glass claim. Labels and analysis agree.

Direct source corrections are separate from shape fitting: Figs. 10B/C (PDF p. 11)
each print f/4.6, replacing unsupported middle/tele station values 4.0/4.5; Fig.
10A stays f/3.5. Catalog design focals now quote printed 10.3/21.4 rather than
computed 10.316538/21.394061. No optical values are tuned for a drawing.

`source.errata` records D9's genuine omission without claiming unique recovery.
It also records ¶0042 (PDF p. 17 / printed p. 3), whose “each of the embodiments”
tele L3+L4 negative-power description conflicts with selected literal positive
f=66.087370 mm. No preferred/optional wording limits that statement to a different
configuration. The source numerical prescription is retained; the prose-versus-
numerical cause remains unresolved.

### Runtime and actual SVG checks

Surface, image-circle and three-station aperture/field checks pass. A geometry-
identical 65-position aperture census passes all positions within 3%; all 65
chief-ray solves reach the 14.175 mm APS-C corner. The source plots stop at
Y=13.6 mm, so this runtime corner result is separate from source field evidence.

The 65 zoom × 3 field × 97 pupil probe requests 18,915 rays using public field/
chief/pupil solvers and each state's current iris. All axial bundles and chiefs
clear. There are 1,290 ordinary off-axis clips (284 more than the old caps under the same corrected source iris schedule) and 26 front-cap noBracket outcomes
in four corner bundles. Independent intersections with the actual front asphere
place all 26 outside its retained cap; no in-cap or interior unexplained miss
remains. This does not certify unvignetted full-pupil corner transmission.

A 65 zoom × 21 focus census has 1,365 sets of 14 finite, closed, connected medium
paths with zero hidden renderer trimming. Nine representative actual SVG views
were compared with the native figure, including all concave ends and bonds.
The focus endpoints are identical: no published finite-focus cam or source finite
conjugate is implied by the 0.24 m production metadata. The same geometry at the
focus slider's other positions adds no finite-object validation.

The 65-position first-order interpolation check reaches −1.024652 mm infinity
BF displacement at zoom 0.765625 (computed 46.238944 versus image gap 47.263596 mm).
Published station support, illustrative interpolation, sampled runtime clearance
and production correlation remain separate conclusions.

## 2026-10-31 — Scoped positive catalog-source follow-up

The 2026-10-30 shape/glass review above retains its actual date and geometric conclusions. This follow-up checks source reference/material classification and positive catalog opportunities only. US 20050286139A 1 Numerical Fifth Embodiment ¶0107, PDF page 23 / printed 9, prints N14 **1.484560/70.0**. The native 300 ppi page was read at native scale. ¶0099's continuation on PDF page 20 / printed 6 explicitly defines d-line Ni and νd. N14 is ordinary glass; the separately modeled N3 thin replica resin (¶0033) remains unidentified. No position-specific C/F/g indices, numerical partial dispersion or APD designation is supplied for N14.

The [OHARA S-FSL5 datasheet](https://www.ohara-inc.co.jp/assets/en/product/pdf/esfsl 05.pdf) and [OHARA_260701 vendor AGF](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip) verify the existing Sellmeier coefficients and nominal 1.48749/70.2363. Residuals to the source are +0.00293/+0.2363; the index is only 0.00007 inside the unchanged resolver bound. Coefficient PgF is 0.530051, with no source PgF available. This is explicitly an approximate compatible proxy, not an exact six-digit-code match or source identity.

Searches of downloaded current OHARA, Nikon/Hikari and SUMITA coefficient catalogs supplied no closer row; no unverified mold-state curve or synthetic offset is created. Source nd 1.484560 is preserved rather than replaced by catalog 1.48749. Only N14's glass label and source-reference annotations change in data. All fourteen source pairs, geometry, rims, resin layer, stops, zoom/focus controls and N 10/N 12 inferred APD tags remain fixed. The 36 catalog-derived per-lens line overrides removed on Oct 30 stay removed. Current coverage is thirteen proxy curves plus one unresolved resin, superseding the earlier twelve-curve/unmatched-N14 disposition without a new shape inspection.
