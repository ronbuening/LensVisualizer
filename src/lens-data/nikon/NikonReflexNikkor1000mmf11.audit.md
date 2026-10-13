# Audit Log - Nikon Reflex-Nikkor 1000mm f/11

Patent: US 3,507,556, Embodiment 1 / Claim 1

## 2026-06-05 - Folded-path and annular-field behavior review

### Phase 1 - Glass corrections

No data edits. The patent table publishes refractive indices and Abbe numbers, not vendor glass names. The stored values match Embodiment 1:

| Element | Patent nd / vd | Stored nd / vd | Result |
|---|---:|---:|---|
| L1 | 1.51823 / 59.0 | 1.51823 / 59.0 | Confirmed |
| M1 | 1.54072 / 47.2 | 1.54072 / 47.2 | Confirmed |
| M2 | 1.54814 / 45.9 | 1.54814 / 45.9 | Confirmed |
| L2 | 1.5168 / 64.2 | 1.5168 / 64.2 | Confirmed |
| L3 | 1.74077 / 27.7 | 1.74077 / 27.7 | Confirmed |

### Phase 2 - Retained-information audit

The patent page image was treated as controlling where OCR is noisy. The current data file matches the published Embodiment 1 radii, thicknesses, refractive indices, and air intervals:

| Surface / gap | Patent value | Stored value | Result |
|---|---:|---:|---|
| R1 | +682.000 | +682.000 | Confirmed |
| R2 | infinity | infinity | Confirmed |
| L1 thickness | 10.0 | 10.0 | Confirmed |
| L1-M1 interval | 155.0 | 155.0 physical gap from L1 rear to M1 front | Confirmed |
| R3 | -319.000 | -319.000 | Confirmed |
| R4 | -485.185 | -485.185 | Confirmed |
| M1 thickness | 10.0 | 10.0 | Confirmed |
| M1-M2 interval | 147.0 | 147.0 physical folded gap from M1 rear to M2 front | Confirmed |
| R5 | -169.430 | -169.430 | Confirmed |
| R6 | -258.420 | -258.420 | Confirmed |
| M2 thickness | 3.3 | 3.3 | Confirmed |
| M2-L2 interval | 150.0 | 150.0 folded gap to L2 front | Confirmed |
| r7 | -200.000 | -200.000 | Confirmed |
| r8 | +69.200 | +69.200 | Confirmed; OCR can misread this row |
| L2 thickness | 1.7 | 1.7 | Confirmed |
| L2-L3 interval | 2.0 | 2.0 | Confirmed |
| r9 | +600.000 | +600.000 | Confirmed |
| r10 | -321.860 | -321.860 | Confirmed |
| L3 thickness | 2.4 | 2.4 | Confirmed |

The explicit folded optical path matches Fig. 1: L1, annular primary Mangin M1, secondary Mangin M2, then rear L2-L3 through the primary opening. The physical table keeps M2 near L1 and L2-L3 near M1, while `opticalPath.surfaceOrder` supplies the actual hit sequence.

The patent does not publish semi-diameters, central-hole radius, entrance stop diameter, or image-plane distance from r10. The stored semi-diameters, `OBS.sd`, M1 `innerSd`, and image plane remain modeled estimates rather than patent-confirmed values.

### Phase 3 - Spectral / metadata enrichment

No new spectral line indices were found in the patent table. The patent's aberration plot states/illustrates small axial color for the f=1000 Embodiment 1 design, but it does not provide enough numeric C/F/g/A' line index data to replace the current Abbe/catalog dispersion cascade.

Runtime checks during this audit found two behavior mismatches that are not prescription transcription errors:

- Current field geometry collapses to `halfFieldDeg = 0` for this lens because the state field estimator tests a central chief ray against a centrally obstructed pupil. That makes the displayed off-axis fan effectively field-zero instead of a true oblique field fan.
- Current longitudinal chromatic analysis reports about 8 mm LoCA from the outer annular marginal ray. That conflicts with the patent's intended small axial color and is likely amplified by using image-plane extrapolation from rays that already terminate on the explicit folded image plane, plus annular/folded chief-ray assumptions.

### Phase 4 - Analysis sync

No prose edits made. The existing analysis already states that semi-diameters are estimated and that the patent table image controls over noisy OCR. A future analysis update should mention that off-axis/chromatic UI behavior for annular folded systems depends on annular-aware field and focus solvers, not on an ordinary central chief ray.

## 2026-09-29 - Folded-interval layout correction

### Phase 2 - Retained-information audit

Real rays through the viewer traced EFL ≈ 2430 mm with the axis crossing at z ≈ 560, against the header's 1001.40 mm.
The prescription values above are right; the lab-frame layout of the folded intervals was not. The patent lists the
folded path sequentially, so after the double pass through M1 (R3→R4→R3) the 147.0 interval runs from R3 to R5, and
after the double pass through M2 the 150.0 interval runs from R5 to r7. The 2026-06-05 layout measured 147.0 from R4,
counting the 10.0 primary thickness once and moving M2 and the rear group 10.0 mm rearward.

| Surface / field | Before | After | Justification |
|---|---:|---:|---|
| `2` `d` (L1 rear → M2R) | 14.7 | 4.7 | M2F (R5) sits 147.0 in front of R3: z = 165.1 − 147.0 = 18.1, so R6 is at 14.8 |
| `M2F` `d` (R5 → R3) | 137.0 | 147.0 | Patent M1–M2 interval measured from R3 |
| `M1R` `d` (R4 → r7) | 3.0 | -7.0 | r7 = R5 + 150.0 = 168.1, 3.0 behind R3, inside the primary perforation |
| `opticalPath.imagePlane.z` | 273.8236 | 263.8236 | r10 (z = 174.2) + BFD 89.6236 |

With the corrected layout an independent lab-frame paraxial trace gives EFL 1001.40 mm and BFD 89.62 mm from r10,
and viewer real rays across the usable annulus focus at z = 263.8 with EFL 1001.2–1001.3 mm. The rear L2-L3 group
now lies inside the primary perforation, as the data-file header and patent Fig. 1 describe.

### Phase 4 - Analysis sync

- Updated the first-order paragraph's image-plane position from z = 273.824 mm to z = 263.824 mm.

### Follow-ups

- Re-check the 2026-06-05 note about ~8 mm LoCA from the outer annular marginal ray; it was measured on the
  mis-laid-out model.
