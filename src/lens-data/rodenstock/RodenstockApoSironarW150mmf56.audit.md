# Audit Log - Rodenstock Apo-Sironar-W 150mm f/5.6

Patent: DE 3907928 C2, Table 5 (seven-element model; same values as A1 Table 5)

The 2026-07-04, 2026-07-29 and 2026-08-07 sections below were written for the earlier eight-element reconstruction of
A1 Table 5, which is now archived (hidden). Their glass-label decisions for L1, L2, L4, L5, L6 and L7 carry over to the
seven-element model because those elements keep the same rounded nd/νd; the semi-diameter notes do not.

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_3907928_A1.pdf`. The drawing sheet shows FIG. 1 for the wide-aperture Apo-Sironar family.
- The data file already documents that Table 5 is internally inconsistent and that this is an EFL-reconciled reconstruction. The patent omits clear-aperture semi-diameters.
- FIG. 1 shows a broad front half, stop close to the first rear surface, and a broad rear half of comparable scale. Stored SDs follow that drawing: about 15.0-12.0 mm before the stop, a 10.992 mm stop, and about 12.0-14.0 mm through the rear reconstruction.
- No SD values changed. Current values remain inferred from the patent figure, the reconstructed Table 5 model, and renderer sag/edge constraints.

## 2026-07-29 - Patent-rounded glass disposition

- Rechecked local `patents/DE_3907928_A1.pdf`, Table 5. The reconstruction's R, d, nd, and νd values remain
  unchanged.
- S1 `N-BK7 class` -> unmatched rounded crown at 1.520 / 64.2.
- S9 `FK3 class` -> unmatched rounded fluor-crown at 1.460 / 65.8.
- S11 `N-KZFS5 class` -> unmatched rounded short flint at 1.650 / 39.6.
- Table 5's coarse rounding cannot establish unique catalog rows; the analysis now treats those names as family
  comparisons only.

## 2026-08-07 - Legacy K10 catalog recovery

- The official Schott K10 datasheet supplies Sellmeier coefficients for `nd=1.50137`, `νd=56.41`, code 501564.
- The Table 5 L4 annotation already identifies K10 as a patent-rounded Schott equivalent, so it now resolves through the vendor curve without strengthening the claim on the other coarsely rounded rows.
- The local `patents/DE_3907928_A1.pdf` review recorded above remains the prescription source. No geometry changed.

## 2026-10-19 - Replacement: DE 3907928 C2 Table 5 seven-element model

- Transcription: R, d, nd and νd for all 12 surfaces, both stop spacings and the printed f = 148.7 mm were read from the
  Table 5 page images of the C2 grant (p. 5) and the A1 publication (p. 4); the two tables agree. C2 prints each
  d/n/ν between its radius rows, giving 7 elements / 5 groups (L1 | L2+L3 | L4 | stop | L5 | L6+L7), 12 curved
  surfaces and a stop 8.60 mm after surface 7 and 7.45 mm before surface 8. Claim 1 (three rear lenses, the rear
  second and third cemented) confirms this. The data file matches the table except for the L3 index below.
- Literal table: f = 300.93 mm (8.60 mm total stop spacing instead: 312.00 mm). At that focal length the example fails
  claim 3 (f < R4 < 2f, R4 = 169.09 mm) and claim 1's condition that L4's focal length (220.6 mm) be about f or longer.
  With the same reading, the sibling Tables 1–4 compute 201.1–202.8 mm against a printed 207.3 mm, so roughly 2–3 % of
  rounding or convention noise is normal for this patent.
- Correction: L3 nd 1.69 -> 1.55 (the value in all four sibling tables), Abbe 49.6 kept; f = 148.04 mm, back focus
  120.54 mm, track 54.03 mm. A search over 1,350 single changes (indices 1.40–1.95; radius sign flips, digit changes,
  transpositions, dropped digits and x10 or /10; the same for thicknesses and the stop spacing; both stop splits)
  found this the only change within 0.5 % of 148.7 mm, against 13 within 3 %. Third-order sums at f/5.6 and 40°,
  scaled to the same focal length, put this correction alone in the siblings' range: SI 0.017, SII 0.005, SIII
  -0.024, SIV 0.118, SV -0.20, against the siblings' 0.018–0.022, 0.005–0.014, -0.018–0.013, 0.118–0.128 and
  -0.27–0.06. Every other candidate has SV about 2.4–9.7 or an SIII that is far too large, and most need nonexistent
  glasses. C2 still prints 1.69, so the correction stays an inference (recorded in `source.errata`).
- Production checks: the Rodenstock 6/95 brochure gives 7 elements / 5 groups and an 80° field; its p. 7 section shows
  the same 1 + 2 + 1 | stop | 1 + 2 layout, mirrored. Pages 4/5 list the 150 mm lens at 252 mm circle (infinity, f/22),
  141 mm register and 56 mm overall length; the Horseman/Kenko list repeats 252 mm and 141 mm. The stop sits 144.2 mm
  from the image, so the flange falls about 3 mm behind the stop, inside the 54.03 mm track. The literal table would
  need a flange about 156 mm behind the last vertex. The archived eight-element model reaches only 36.2° (218 mm
  circle) before its chief ray is blocked at surfaces 1–3.
- Audits on this file: `audit:surface` OK; `audit:image-circle` 0 undersized; `audit:field-coverage` 98 %, limited
  by the declared 40° projection, corner (40.5°) clear; `clearap` at 126 mm image height and f/22 passes the chief
  ray, with 15–56 % side vignetting at surfaces 9–11 only. Chief-ray distortion is about -0.4 % at 126 mm.
- Glass labels carried over from the archived model where nd/νd match: L1 520642 unmatched, L2 N-PSK53A class
  (apd inferred), L4 K10 class (vendor Sellmeier per the 2026-08-07 entry), L5 460658 fluor-crown (apd inferred),
  L6 650396 short flint, L7 dense crown / short flint. L3 stays unmatched.
- Open items: no manufacturer MTF or distortion data for the 150 mm lens; glass identities and partial dispersions
  unresolved; semi-diameters are Photons to Photos estimates reduced at S5/6 and S9/10, not measured apertures; the
  3.5 m close-focus endpoint is illustrative.

## 2026-10-19 — Semi-diameter pass against the patent figure

- Source: `patents/DE3907928C2.pdf`, p. 6 (Zeichnungen Seite 1), Fig. 1, native 300 dpi raster. The text (p. 2)
  describes Fig. 1 only as a section through a lens according to the invention; it is the patent's only section.
- Which example it draws: the twelve vertex crossings on the axis fit Table 2 at 11.88 px/mm with an rms spacing error
  of 1.8 %, against 9.7–14.3 % for Tables 1, 3, 4 and 5 (Table 5 alone: 10.9 %, with L6 at 1.23× and L3 at 0.80×).
  Fig. 1 is therefore Example 2 (f = 207.3 mm), not the modeled Example 5, and was used with care.
- Scale: Table 5's radii are 0.70–0.76× Table 2's (median 0.72), its thicknesses about 0.65×. Rims were mapped with
  the radius ratio, 11.88 / 0.72 = 16.5 px per Table 5 mm; the focal-length ratio (0.73) or track ratio (0.69) would
  move every figure value by +2 % or −5 %.
- Rims were read on the side without leader lines (front group below the axis, rear group above) and checked on the
  other side; the two sides agree within 2 %. The figure draws L1, L2 and L4 with a bevel from the front-face tip down
  to a lower rear face, L3 and L6 as thick-edged negative menisci with a long chamfer from the concave face to a flat
  top, and L5 with a knife edge meeting L6's front rim. Bevels, chamfers and flat tops were excluded.

| Surface | Stored sd (mm) | Fig. 1 rim (px) | Fig. 1 scaled (mm) | Figure / stored |
|---|---:|---:|---:|---:|
| 1 | 25.555 | 410 | 24.8 | 0.97 |
| 2 | 24.23 | 390 | 23.6 | 0.97 |
| 3 | 22.8 | 367 | 22.2 | 0.98 |
| 4 | 19.325 | 338 | 20.5 | 1.06 |
| 5 | 13.2 | 222 | 13.5 | 1.02 |
| 6 | 13.2 | 220 | 13.3 | 1.01 |
| 7 | 12.67 | 195 | 11.8 | 0.93 |
| 8 | 13.17 | 219 | 13.3 | 1.01 |
| 9 | 12.5 | 217 | 13.2 | 1.05 |
| 10 | 12.5 | 211 | 12.8 | 1.02 |
| 11 | 17.345 | 299 (L6 top) | 18.1 | 1.04 |
| 12 | 20.255 | 339 | 20.5 | 1.01 |

- Result: median figure/stored 1.01, every row within 0.93–1.06, and the step order between neighbours matches the
  figure throughout. No `sd` was changed. The largest departures are s4 (+6 %, the figure's L2 rear and L3 flat top
  sit slightly higher) and s7 (−7 %, the figure bevels L4's rear face lower); both are inside the noise of a figure
  that draws a different example at an uncertain ±4 % scale. Fig. 1 draws L7's front face above L6's top (about
  20.4 mm against 18.1 mm); one shared `sd` at surface 11 cannot show that step, so it keeps the junction value.
- Clearance (unchanged): at f/5.6 the axial marginal ray reaches 13.22 mm at s1 and 9.76–11.23 mm behind it, all
  inside the rims; the 126 mm corner chief ray (40.52°) clears every rim, the tightest margins being s7 (10.85 of
  12.67 mm), s10 (11.79 of 12.5) and s5 (12.64 of 13.2). At f/22 the full corner bundle is vignetted 46 % at s9,
  56 % at s10 and 15 % at s11. The engine keeps a 40° half-field, f/5.6 and a 10.03 mm stop radius; its f/5.6
  transmission falls to 82 % at 20° and 11.5 % at 40°. The surface validator, image-circle floor and field-coverage
  (98 %, limited by the declared 40° projection, corner clear) pass as before.
- Live render at infinity and at the 3.5 m endpoint matches Fig. 1's proportions: chamfered L3 and L6, small L4/L5
  pair around the stop, L7 smaller than L1.
- Limitation: no figure of Example 5 exists, so these rims stay estimates checked against a sibling drawing.

## 2026-10-19 — Second review: diagram, labels and movement

- Compared: the local page at infinity and at the 3.5 m endpoint, rendered at 3× scale, against a 300 dpi crop of
  Fig. 1 on C2 p. 6 (axis at page row 852.5, 11.88 px per Table 2 mm, mapped to Table 5 with the 0.72 radius ratio).
  The element inspector was opened for L2, L3, L5 and L6, and the focus-movement overlay was checked.
- Silhouette: re-measured independently at five rims. L1 tip 407 px gives 24.7 mm; L2 tip 365.5 px gives 22.2 mm; the
  L3 flat top and the end of the cement face 336.5 px give 20.4 mm; the L6 flat top 300.5 px gives 18.2 mm; the L7
  top 339.5 px gives 20.6 mm. These agree with the first pass within 1 %. The height order matches the figure:
  L1 > L2 > L3 top ≈ L7 > L6 top > L4 ≈ L5. The visible differences are renderer limits. The figure draws L3 and L6
  with a flat land plus chamfer and L7 with a front step above L6, and the site joins each element's two rim points
  with one straight edge. One shared `sd` at surface 11 cannot draw the L7 step. No element is drawn square-cut with
  two equal faces, so no face pair was levelled.
- Trial rims, none applied. Surface 4 at the figure's 20.4 mm (+6 %) passes the validator but is inside the noise of
  a sibling-example figure. Surfaces 9/10 at the figure's 13.2/12.8 mm (+6 %/+2 %) fail the cross-gap rule: the
  combined sag of 1.77 mm exceeds the 1.728 mm allowed in the 1.92 mm gap. The model keeps 12.5/12.5 mm. No `sd`
  changed. Engine half-field stays 40°, f/5.6, stop radius 10.03 mm. The meridional f/5.6 transmission curve is
  unchanged: 82.3 % at 20°, 49.0 % at 31.4°, 11.5 % at 40°.
- Labels: the patent gives reference signs only to surfaces (1–12) and the stop (BL); it names lenses by position
  ("erste Linse der vorderen Linsengruppe"). Sequential L1–L7 are kept. The FRONT bracket covers surfaces 1–7 and
  REAR covers 8–12, exactly the patent's "Flächen 1 bis 7 / 8 bis 12". D1 (3–5) and D2 (10–12) bracket the two
  cemented pairs. The only gap label is BF, so the doublet labels clash with nothing. The STO sits between surfaces 7
  and 8 with 8.60/7.45 mm, as printed. Element types agree with the radius signs. L5 and L7 are menisci convex to the
  image; L1, L2 and L4 are convex to the object; L3 and L6 are negative menisci. There are no aspheres, as in the
  patent. The inspector shows the stored name, glass, focal length and role for each element opened.
- Direction: claim 1 calls surface 2 the image-side face of the first lens and surface 3 the object-side face of the
  second. Fig. 1 draws the parallel entrance bundles arriving at surface 1. Object-side numbering, with the four-lens
  group in front, is therefore the patent's own. The model follows it. The 141 mm register cannot tell the two
  orientations apart: the reversed lens has the same 148.04 mm focal length with the stop 146.0 mm from the image,
  against 144.2 mm. A sentence on numbering direction was added to the analysis.
- Focus: unit focus moves both groups together toward the object by 6.84 mm (back focus 120.54 → 127.38 mm). The
  far-end slider label reads 3.50 m, and the probe confirms 3500.0 mm object to image at magnification −0.046.
- Patent Fig. 2 (C2 p. 6) is an MTF-over-field plot for Table 5. The text on p. 5 says so; frequencies, aperture and
  spectrum are not stated. Its six curves read about 64/47/29 % on axis on its log axis and converge near 8 % at
  relative angle 1.0. The model's monochromatic diffraction MTF at f/5.6, at 10/20/40 lp/mm, gives 94/86/66 % on axis
  and 6/1/0 % sagittal at 40.5°. At f/22 it gives 83/67/37 % and 33/1/1 %. The fall with field and the collapse at the
  edge agree only qualitatively. The plot neither confirms nor contradicts the L3 index correction. The analysis now
  cites Fig. 2.
- Glass recurrence across Tables 1–5 (nd/νd), with the closest entries in the repo catalog. L1: 1.49/70.4 in T1–T4,
  1.52/64.2 only in T5, which equals N-BK7 / BSC7 / H-K9L (1.5168/64.17–64.20). L2: 1.60/65.4 in T1–T4, 1.62/63.5
  only in T5, which equals N-PSK53 (1.62014/63.48); the labelled N-PSK53A is 1.618/63.39. L3: 1.55/44.3 in T1–T4. The
  printed T5 1.69/49.6 is near Hoya LAFL23 (1.689/49.48), and the applied 1.55/49.6 matches no catalog entry within
  0.6 in νd. L4: 1.46/65.8, 1.49/70.4, 1.49/70.2, 1.52/69.7, then 1.50/56.4 in T5 only, which equals K10. L5:
  1.46/65.8 in T1, T2 and T5 and 1.46/65.4 in T3/T4, a recurring material; 1.46/65.8 equals FK3 / FC3
  (1.4645/65.77). L6: 1.65/39.6 in all five tables; the 654/397 short flints N-KZFS5, S-NBH5, BPH5 and H-TF5 lie
  within 0.06–0.10. L7: 1.64/55.4 (T1), 1.62/53.2 (T2, T5) and 1.62/53.9 (T3, T4); 1.62/53.2 equals S-BSM22 / SSK2
  (1.6223/53.14–53.17), with N-SSK2 at 53.27. The patent prints only d-line nd/νd, with no glass names, other line
  indices or partial dispersions. Glass labels were not edited.
- Open limitations: the patent draws no section of Example 5. Flat-land chamfers and the L7 step cannot be drawn
  with one `sd` per surface. Fig. 2 cannot be compared quantitatively.

Coordinator follow-up, same day: L2 relabelled "N-PSK53A class" → "N-PSK53 class". N-PSK53 (1.62014 / 63.48) sits
1.4e-4 in nd and 0.02 in νd from the printed 1.62 / 63.5; N-PSK53A (1.618 / 63.39) sat 2.0e-3 and 0.11 away. L1, L5,
L6 and L7 keep the 2026-07-29 unmatched disposition: their nearest classes (N-BK7, FK3, N-KZFS5, N-SSK2) lie 2.3e-3 to
4.5e-3 from the two-decimal indices, so a catalog curve would trace the colour channels at an index the reference
trace does not use.
