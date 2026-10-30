# Audit — CANON EF 17–40mm f/4 L USM

Source: local `patents/JP2020190696A.pdf`, JP 2020-190696 A, Numerical Example 1, master zoom rows 1–24.
The six attachment surfaces 25–30 describe another optical configuration and are excluded. Example 2 repeats the
master prescription and supplies a second middle zoom state (¶0040).

## Historical summary — 2026-10-28

The deployment, independent zoom, figure and labeling passes on this date established the following retained decisions.
They are historical coverage, not additional inspections claimed on 2026-10-30.

- Source R/d, all 14 source index/Abbe pairs, the effective-diameter column and three master aspheres were read from
  pp. 12–14. The source conic equation uses (1+K), so K = 0 maps directly to the repository convention. An independent
  pass confirmed the source rows. No master prescription radius or material coordinate was changed.
- The attachment-inclusive paraxial reconstruction reproduced source focal lengths 17.33/23.76/38.46 mm within
  0.01 mm and back focus within 0.02 mm. The bare master gives 17.4916/23.9911/25.7828/38.8313 mm and computed D24
  of 39.848/45.838/47.539/60.593 mm. D24 is not the attachment's 26.31 mm last gap.
- The 65-station zoom was rebuilt around four published states at indices 0/25/31/64. D12 follows a monotonic PCHIP
  curve through 1.24/5.36/6.41/12.63 mm; D18 = 13.12 − D12, D7 is solved for focal length, and D24 for bare back focus.
  Example 2's middle D7 is 12.22 + 15.28 − 13.63 = 13.87 mm. D18 remains 6.71 rather than the printed 6.72: retaining
  6.72 breaks the common L2/L4 locus by 0.01 mm and introduces extra L1 turns. This qualified departure is preserved.
  The remaining 61 stations reconstruct the cam; they do not reproduce a published Canon mechanical cam.
- L2/L4 move together objectward, L3 moves objectward on its own locus, and L1 has one image-convex turn, as ¶0034
  describes. The retained interpolation gives at most 0.0022 mm paraxial midpoint defocus. No source zoom motion
  establishes the intermediate cam or its tolerances.
- Nine focus states reconstruct the maker's 0.28 m minimum object-to-image distance with intermediate t at 0.28/t m.
  Lf (surfaces 3–7) moves objectward by exchanging D2/D7 equally. Near magnifications at the four anchors are
  −0.108/−0.144/−0.154/−0.240; the tele value matches the maker's 0.24×. These are not published focus spacings.
- Fig. 6's bare-master 51°/40°/29.1° fields correspond to 17.49/25.78/38.83 mm at about 21.6 mm image height; its
  middle section is Example 2's middle master state. The source stop effective diameter is 16.65 mm. The retained
  paraxial F4.1 rule gives radii 6.049/6.513/6.666/8.062 mm; a real axial F4.1 ray meets the tele stop at 8.325 mm.
  These distinct conventions do not establish a physical iris schedule.
- Glass elements were renamed E1–E12 and resin layers R1/R2 to avoid confusion with source groups L1–L4 and Lf.
  H1 names R1/E2; C1/C2/C3 name the three glass doublets. R2 remains untagged to avoid a misleading three-glass
  triplet badge, while the C3 bracket spans it. The source single-lens table counts the resin layers among 14 entries.
- Earlier figure readings retained every clear cap but left E1's rear annulus and compound outer outlines unresolved.
  Their 600 dpi reading images upsampled the native 150 ppi raster. The new pass below corrects the earlier ±0.2 mm
  rim precision claim; enlarged pixels do not establish that precision.
- The source is a later attachment patent filed in 2019, sixteen years after the 2003 product. The prior search found
  no original 2001–03 production patent. Construction, element count, asphere positions and one Super UD location
  support the product association, without establishing production identity. That search is not repeated here.
- Open source discrepancy retained: Table 1's Skmcw/Skmw ratios 1.05/1.24 imply bare wide back focus around
  39.2–39.3 mm, against 39.85 mm from the literal master rows (ratios 1.033/1.222). E1's 1.58373 may resemble a
  1.58313 crown, but another Canon source repeats 1.58373, so the typo hypothesis remains unconfirmed.

## 2026-10-30 — Original-PDF shape and glass review

### Exact evidence and resolution

Read the original local publication anew: ¶0063 on p. 12 defines nd at the d line (587.6 nm), with C/F at
656.3/486.1 nm; Numerical Example 1's prescription spans pp. 12–13, its single-lens/group values p. 14, and
Fig. 1(A/B/C) is on p. 23. Rechecked the equation (A), the master/attachment boundary, all 24 master rows, all
14 modeled media and all 16 listed master asphere values including K. Example 2's shared-master qualification and
second middle gaps on pp. 14–16 remain as above. Source filters or rear plates are absent from the modeled master rows.

The Fig. 1 image is a 485 × 673 native JPEG at 150 ppi. Its master-wide crop is 290 × 162 native pixels. Vertex
landmarks give about 2.78 px/mm, or 0.36 mm/native pixel; the ink, JPEG edges and local stroke ambiguity warrant
about ±0.8 mm for outer-rim readings. The 8× reading enlargement adds no evidence resolution. Leaders, rays, the
Lf bracket and the attachment are excluded from master-rim measurements.

### Shape dispositions

Every element face, concave end, cemented interface and the two thin resin layers was inspected against Fig. 1.
Every clear semi-diameter stays at half the printed effective diameter. No source R/d, asphere, stop, zoom or focus
control is changed. Two resolved rear shoulders now use outer extensions, rather than enlarging the optical caps.

| Source face | Clear sd retained | Outer rim adopted | Evidence and constraint |
| --- | ---: | ---: | --- |
| 2, E1 rear concave | 18.03 mm | 26.04 mm | The broad rear annulus is clear in Fig. 1(A); the outer radius is conservatively anchored to the existing front clear rim, below the drawn roughly 27 mm blank. |
| 5, E2 rear concave | 13.96 mm | 15.905 mm | The rear shoulder is resolved across several native pixels. Its outer radius meets the existing substrate front cap at 4; R1 retains its own distinct 3A/4 caps and no new resin wing. |

`rimExtensionSd` is attached only to 2 and 5. No inferred concave cut is added. The E1 outer annulus lies beyond
its spherical radius domain, but the optical cap ends at 18.03 mm; the extension is a flat shoulder, not an extrapolated
sphere. The actual SVG has a connected finite contour there.

Rejected or retained trials and limits:

- E3's 6/7 cap difference is only 0.545 mm, about 1.5 native pixels. A separate precise rear land is not resolved
  by this raster, so 13.91/13.365 mm and the existing outline remain.
- C1 (8/9/10), C2 (16/17/18) and C3 with R2 (21A/22/23/24) are schematic outer blocks. Filling them to a common
  height would require changing the published bonded clear interface, an opaque bonded land or an unsupported resin
  extension. Those constructions are rejected. The 0.10/0.15 mm resin layers retain their published unequal caps.
- E6, E7 and E10's small face-height differences are below useful independent rim precision. No equal-height block
  is inferred. The broader drawn mechanical margin is not converted into an optical clear-aperture change.
- The source's later master configuration, reconstructed cam/focus states and unexplained back-focus ratio retain
  their separate qualifications; a better silhouette does not resolve them.

### Glass dispositions

All 14 modeled source media match the printed nd/νd pairs, including the bonded resin layers. The explicit d/C/F
reference definition supports the existing spectral treatment. Eleven OHARA catalog curves remain compatible proxies;
public glass labels now say spectral proxy and production supplier unconfirmed. No published individual nC/nF/ng,
partial-dispersion table, melt identity or resin chemistry was found; there are no structured per-lens line-index or
partial-dispersion overrides to retain or remove. The source d indices remain literal.

E1 (1.58373/59.4), R1 and R2 (both 1.52421/51.4) stay `Unmatched`; no nearby catalog row is forced onto them.
The unresolved layers use the existing nd/νd estimate. E10's APD remains inferred from the compatible S-FPL53
spectral curve, not from a printed patent partial or the maker's separate Super UD-position correlation. Labels,
APD note and analysis use that qualification consistently. A compatible fluorophosphate curve does not prove
historical chemistry, supplier or melt.

### Geometry, sampled clearance and retained limitations

The final actual SVG was compared with native Fig. 1(A), including the new E1 annulus, E2 shoulder and all connected
hybrid/cemented entries. Twelve views cover the four published zoom anchors at infinity, middle focus and close focus.
Across all 65 zoom stations and nine authored focus states, every state has 14 finite, closed, connected contours;
none invokes hidden renderer cap trimming. The surface, aperture, image-circle and infinity field checks retain all
65 stations, no undersized circle and no additional on-axis limiter; the full-frame chief is clear throughout.

A separate 0.28 m diagnostic uses a stop-centered finite chief solve, then an aimed 97-sample stop pupil at the four
published zoom anchors. The initial straight-line chief seed failed at off-axis fields; that seed failure was rejected
as a clearance conclusion. With the solved chief, all 97 axial samples pass at each anchor and every half/full-field
chief is clear. The nominal full-field object targets produce chief heights 19.60/20.90/21.12/21.77 mm, demonstrating
finite-field distortion rather than asserting a certified conjugate. Off-axis pupils retain ordinary vignetting.
At tele/full field two marginal samples fail with `noBracket`; the remaining bundle has 57 transmitting and 38
clipped samples, with zero unaimed samples. This is an unresolved extreme-field numerical trace limit, not certified
continuous-pupil clearance. It is unchanged by the shoulder-only drawing edits; finite-distance MTF stays unavailable.

Source fidelity, sampled runtime clearance and production correlation are distinct conclusions. There is no original-PDF
blocker for this configuration; the retained production and finite-field limitations above remain explicit.
