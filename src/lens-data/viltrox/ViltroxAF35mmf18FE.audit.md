# Audit Log — VILTROX AF 35mm f/1.8 FE

Patent: CN 211955963 U, Example 1, Tables 1–3; Figure 1 (PDF p. 17).

## 2026-09-10 — Optical rims, diagram annotations and spectral proxies

| Element / surface | Field | Before | After | Evidence |
| --- | --- | --- | --- | --- |
| S1 | `sd` | 17 mm | 13.3 mm | Figure 1 front optical rim; no additional modeled ray clipping. |

The G3 diagram label drops the redundant FOCUS suffix to keep it separate from G4 at close focus; the focus description still identifies L31. L23 and L31 retain their four aspheric surfaces; L12/L13 and L21/L22 are the two cemented pairs. L31 travels 4.92 mm imageward with D1+D2 conserved. L12, L13, L14 and L41 remain unmatched; no supplier or APD identity follows from the rounded patent coordinates.

The diagram uses the source element order and functional groups. This is a fixed-focal-length design; there is no zoom travel schedule. Clear apertures remain modeling inferences.


## 2026-09-10 — G1/G2 optical-rim refinement

Figure 1, PDF p. 17 at 600 dpi, supports smaller G1/G2 rims than the earlier ray-envelope estimates. The glass-only axial span gives approximately 28.65 µm/pixel; direct inspection excludes labels, group brackets and the short mechanical edge extensions. All revised SDs remain estimates.

| Surfaces | Before SD (mm) | After SD (mm) | Evidence |
|---|---|---|---|
| S4/S5 | 13.8 | 12.4 | L12/L13 shared outer rim |
| S6/S7 | 14.6 | 13.5 | L14 outer rim |
| S9 | 12.6 | 10.4 | L21 curved optical surface, below its short mechanical extension |
| S10/S11 | 12.6 | 11.6 | L21/L22 common outer rim |
| S12A/S13A | 14.8 | 12.6 | L23 optical rim |

S1 remains 13.3 mm and S2/S3 retain the 11.25 mm shared-gap cap. G3/G4, the stop, radii, spacings, glass assignments and published focus travel are unchanged. The revised L23 polynomial departures are −0.172906841 mm on S12A and +0.232537036 mm on S13A at SD 12.6 mm; the analysis table is synchronized. The earlier smallest-edge and ray-containment narrative is superseded by the revised geometry.

## 2026-09-25 — MTF image-plane and Tier A source audit

Opened local `patents/CN211955963U.pdf`, Example 1 Tables 1–3, PDF pp.6–8.
Visually compared every radius, gap, index, all ten Abbe numbers, and all four
K/A4/A6/A8/A10 rows. Infinity D1=1.00 and D2=8.69 match; the close row is 5.92/3.77.
No scaling. Retained the documented source stop/asphere label corrections: physical
row 8 is the stop and coefficient rows 13–16 belong to L23/L31 surfaces 12A–15A.

**Cause: folded plate plus source image-distance contradiction.** Restored GL
(2.00 mm, 1.52/64.2) to rearPlates with source D19=22.12 and D21=1.00 mm.
Air-equivalent BFL 23.883594338 becomes physical BFL 24.567804865 mm, while the
printed physical image distance is 25.12 mm. Independent EFL is 34.545216929 mm
versus printed 34.5. All values match the source; no single supported misprint
explains the residual. Runtime offset **-0.552195 → -0.552195 mm**. Retained
published values; deleted Section E row. Changelog records the physical plate fix.

**Tier A:** L41/source S16 is 1.49/81.59. Reviewed the prescription, explanatory
prose and dispersion content: no θgF, ΔPgF, nC/nF/ng or glass identity is supplied.
The F/d/C wavelength labels on aberration figures are not refractive indices.
Deleted the completed patent-search row without fabricating spectral data; the
spectral-data-unavailable limitation remains. No supplier identity was inferred.
Focused runtime checks passed; full corpus validation follows at the batch checkpoint.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.3 → 0.388 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 29.4 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: the patent's 0.3 m row focuses at 0.388 m object to image; focus description gives the marketed 0.4 m.
- `catalog.closeFocusM.marketing` 0.4 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

Text sync: header, focus.description and analysis: the patent's 0.3 m row focuses at 0.388 m; the 0.4 m MFD is catalog metadata.

## 2026-11-03 — Image-plane consistency (re-solve)

Source: CN 211955963 U Example 1, Tables 1–2 (PDF pp. 7–8). The file matches the print; the printed rows did not
focus with the printed two-decimal indices. Per LENS_DATA_SPEC Image-Plane Consistency, back focus comes first, but
here it would close a rim: absorbing the residual in S19 (22.12 → 21.567805 mm) and then focusing the 0.3 m row
would put D2 at 2.967 mm, which closes the S15A/S16 rim to −0.26 mm at h = 15.4. The focus mechanism, L31 alone,
is therefore moved at both rows instead.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| D1 (gap after S13A), ∞ / 0.3 m | 1.00 / 5.92 | 0.242573 / 5.833689 | L31 moved for paraxial focus at infinity and at 0.3 m from the first vertex |
| D2 (gap after S15A), ∞ / 0.3 m | 8.69 / 3.77 | 9.447427 / 3.856311 | Same moves; D1 + D2 = 9.69 mm kept |
| S19 `d` | 22.12 | 22.12 | Unchanged; back focus would close the rim |
| `focus.closeFocusM` | 0.388 | 0.3925 | The re-solved row's object-to-image distance |
| `catalog.focalLengthMm.design`, spec line | 34.54521692924615, "34.545 mm PATENT EFL" | 34.801033, "34.801 mm MODELED EFL" | Model EFL after the re-solve |
| L31 role and focus description | 4.92 mm travel | 5.591116 mm (printed 4.92) | Follows the re-solved rows |

- Residual at infinity: −0.552195 → 0.000000 mm (145 depths at f/1.8). L31 travel 4.92 → 5.591116 mm. EFL
  34.545217 → 34.801033 mm at infinity (printed 34.5); 0.3 m EFL 32.931776 → 32.959366 mm (printed 32.9). Track
  92.50 mm unchanged.
- Close focus: the 0.3 m label is read from the first vertex. The printed near row focused 295.575 mm from the first
  vertex, the sibling CN 211955966 U (filed the same day) fits that reference, and the re-solved state's β −0.110
  matches Viltrox's 0.1×. Read from the image plane, 0.3 m would need 8.2 mm of travel and β −0.156. The earlier 0.388
  m relabel was this reference conversion rather than a residual. Viltrox's 0.4 m stays in
  `catalog.closeFocusM.marketing`.
- Cause: the two-decimal indices (rounding σ ≈ 0.69 mm at infinity) plus a real row inconsistency. The printed rows'
  residuals were −0.552 mm at infinity and −0.055 mm at 0.3 m (image side), a difference index rounding cannot make,
  so the modeled travel is 14% longer than printed. The remapped aspheres all have K = 0 and do not touch paraxial
  focus.
- Clearance: D1 minimum 0.243 / 5.834 mm (vertex; widens off axis) at infinity / 0.3 m; D2 rim minimum 6.218 / 0.627
  mm (was 5.460 / 0.540 mm). Image-circle, field-coverage (100%) and surface-probe audits are unchanged. The aperture
  audit still passes at its 3% threshold. With the longer EFL, though, S9's 10.4 mm rim now trims the wide-open axial
  bundle: traced f/1.81 against the stated f/1.80 (+0.4%), where the stop alone set it before.

Follow-ups: the S9 rim trim (+0.4%) could be removed by a small S9 semi-diameter increase in a rim pass. The 0.24 mm
infinity D1 vertex gap is tight but physical. If the patent's Fig. 1 shows a larger L23–L31
gap at infinity, revisit the row inconsistency.
