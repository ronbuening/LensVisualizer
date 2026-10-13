# Patent figure and glass audit

## 2026-10-02 UTC

Source: local `patents/US_3912373_A.pdf, PDF page 2 Fig. 1 and Table I`. The original PDF was preserved and is excluded from the commit. Figures were reviewed at page scale and, for changed rims, at 600 dpi. Optical curve endpoints were distinguished from rays, leaders, group brackets and mechanical outlines.

### Semi-diameters

| Surface | Before (mm) | After (mm) | Evidence / constraint |
| --- | --- | --- | --- |
| All lens rims | unchanged | unchanged | Wider front rims rejected by r2–r3 intrusion; preserve the disclosed schematic profile. |

600 dpi rotated crop (0.13,0.385,0.715,0.66; axis 0.526) was screened, then checked against the exact figure. The schematic axial mapping misassigns several interior bodies. Candidate r2/r3 = 62 mm fails gap clearance. The existing severe r39 rim taper and interior-pupil/full-stop limitations remain disclosed; no claim of production clear-aperture reconstruction is made.

### Glass and display metadata

Native ne/νe values stay unchanged. Existing curves are compared at C′/e/F′ and labeled as spectral proxies. L17 (ne 1.499 / νe 66.8) now uses the vendor-published obsolete HOYA BSC3 polynomial: Δne +0.001136, Δνe −1.826 at C′/e/F′. The former BSC3 → E-C3 alias referred to a different 518/590 coordinate and was removed; the older Nikkor 24 mm annotation now explicitly names its unchanged E-C3 proxy. Prism P has a compatible N-BK7 e-line proxy and is outside the visible lens count. Final compatible catalog coverage: **31/31 visible glass bodies**. Curves are spectral proxies, not evidence of production supplier, melt identity or APO performance. Patent indices and Abbe values were preserved; no measured line indices were invented and no compatibility tolerance was relaxed.

Display names were reviewed against the documented product correlations. Schneider maker/assignee spelling was normalized to the established catalog convention; COOLPIX capitalization was aligned. Marketing focal lengths remain distinct from source/model design focal lengths.

### Retained limits

The source/analysis notes retain static-focus, rounded-prescription and pupil-coverage limits. Production-format metadata is a nominal frame reference and does not establish full-field coverage.

### Diagram and travel review

The local viewer retains the source's seven component labels, cemented triplet T1, doublets, and native e-line Abbe badges. No patent-listed APD tag is supported. Table IB is ordered from 20 to 592 mm: the first-stage motion continues through 200 mm, followed by the second-stage gaps; stationary components remain fixed relative to the image plane. Focus remains disabled because no numerical finite-focus travel is published.

The conspicuous L23 taper was checked again against Fig. 1. A uniform 13.5 mm rim at surfaces 38/39 conflicts with the 0.28 mm terminal d39 gap at 592 mm (0.61 mm combined sag). The existing 8.4 mm exit rim is retained rather than introducing an overlap or changing source spacings. Other schematic enlargements remain subject to the previously documented clearance limits.

Assignee spelling remains the catalog's canonical `Jos. Schneider & Co., Optische Werke`. The historical Berlin `Optotechnische Gesellschaft` and later `GmbH & Co. KG` entries retain their source legal styles and existing corporate-family links. Nikon Corporation and Nippon Kogaku K.K. likewise remain separate patent-era entities; the known punctuation/translation aliases are already consolidated by the shared metadata guard.

## 2026-10-07 — Patent-audit queue: station values re-read

Source: US 3,912,373 (`patents/US_3912373_A.pdf`), Example 1. TABLE I is on PDF p. 9 (cols. 3-4) and is reprinted in claim 3 on PDF p. 13 (cols. 11-12); TABLES IA and IB and the aperture prose are on PDF p. 10 (col. 5); claims 8-10 are on PDF p. 15 (col. 16). TABLE II, IIA and IIB of Example 2 (PDF pp. 10-11, cols. 6-7) were read as the sibling example. All tables were read from 300 and 400 dpi renders of the pages.

| Field | Before | After | Source |
|---|---|---|---|
| `nominalFno[1]` (40 mm) | 2.099891286 | 2.093952547 | The f-number the one wide-open iris (22.3529 mm) gives, by real marginal ray. The patent prints no per-station value; its prose gives a constant 1:2.1 from fmin to fmed (col. 5, ll. 45-49). |
| `nominalFno[2]` (80 mm) | 2.099542680 | 2.087397331 | Same |
| `nominalFno[3]` (140 mm) | 2.098667507 | 2.087298253 | Same |
| `nominalFno[4]` (200 mm) | 2.097437825 | 2.095640066 | Same |
| `nominalFno[5]` (290 mm) | 2.094863161 | 2.080619899 | The same iris, paraxially: the real ray of that aperture (entrance height 68.07 mm) cannot be traced to the stop. Patent: 1:2.1 at fmed (col. 5, ll. 45-49). |
| `nominalFno[6]` (400 mm) | 2.918846214 | 2.899000578 | The same iris, paraxially. The patent prints no value between fmed and fmax. |
| `nominalFno[7]` (500 mm) | 3.726649438 | 3.701311436 | Same |
| `nominalFno[8]` (592 mm) | 4.538315909 | 4.507459276 | The same iris, paraxially. Patent: a final 1:6.3 at fmax for the unchanged opening (col. 5, ll. 45-49), or 1:2.1 with the diaphragm coupled to mechanism M (col. 5, ll. 49-56). The 1:6.3 is not adopted. |
| `sourceErrata` | absent | one `unresolved` entry | TABLE I and TABLE IB against the f column of TABLE IB, the 0.162 back focus (col. 5, ll. 2-5) and TABLE IA |
| Data-file header, STO paragraph | STO sd described as the calibrated iris; `nominalFno` described as not copying the 1:6.3 | States the authored 22.201 mm, the traced 22.353 mm iris, the eight station values, the patent's two diaphragm modes, and 2.1 × 29.6 / 14.5 = 4.29 | col. 5, ll. 45-56 |
| Data-file header, new paragraph | absent | States the source contradiction and the component-1 test | TABLES I, IA, IB; TABLE II, IIA |
| Note, "Modeled f/#" column | 2.100 / 2.100 / 2.100 / 2.099 / 2.097 / 2.095 / 2.919 / 3.727 / 4.538 | 2.100 / 2.094 / 2.087 / 2.087 / 2.096 / 2.081 / 2.899 / 3.701 / 4.507 | `nominalFno` |
| Note, paragraphs after the station table | Attributed the EFL and BFD disagreement to accumulated rounding | State the contradiction, the component-1 and component-7 residuals against print rounding, the Example 2 sibling, and the component-1 test | TABLES I, IA, IB; TABLE II, IIA |
| Note, "Aperture model" | Patent paraphrased as "approximately f/2.1" with an adjustable-diaphragm "option"; fixed-iris tele value f/4.538 from a 22.20096 mm stop | Patent quoted as a constant 1:2.1 to fmed and a final 1:6.3, with the coupled diaphragm as the FIG. 1 feature of claims 8-10; the 22.353 mm iris, the eight station values, and 4.29 | col. 5, ll. 45-56; col. 16, claims 8-10 |

No prescription value changed. The printed tables as read:

- TABLE I: all 53 radii, all 47 fixed thicknesses and separations (d28 = 0.12 is split 1.2 + 1.2 mm around `STO`), all 31 n_e / ν_e pairs, prism P (d54 = 3.30, 1.518 / 64.0) and the 0.162 back focus were typed from the page independently of the file and compared with it by script: the file equals the print ×20 at every value. The claim-3 reprint (r1-r53, d1-d52) agrees with the description at every row; the only typographic difference in a value is `r49- −25.81` for `r49 = −25.81`.
- TABLE IB: all 54 airspaces and the nine focal lengths (1.0, 2.0, 4.0, 7.0, 10.0, 14.5, 20.0, 25.0, 29.6) match the file ×20. The printed rows are self-consistent: d15 + d21 + d24 = 5.887 at all nine stations and d31 + d34 + d39 = 1.630 at all nine (117.74 mm and 32.60 mm in the file), as they must be for components moving between fixed neighbours, so no single airspace digit is misprinted.
- TABLE IA: f1 = +6.901, f2 = −2.167, f3 = −3.650, f4 = +2.207, f5 = −5.310, f6 = −2.463, f7 = +2.773.

What the printed tables compute, against what the patent states:

| Component | TABLE IA ×20 (mm) | Computed (mm) | Residual | Print-rounding spread, 1σ (mm) | Residual / σ |
|---:|---:|---:|---:|---:|---:|
| 1 | +138.020 | +138.630 | +0.442% | ±0.218 | 2.80 |
| 2 | −43.340 | −43.248 | −0.211% | ±0.066 | 1.40 |
| 3 | −73.000 | −72.944 | −0.077% | ±0.115 | 0.49 |
| 4 | +44.140 | +44.138 | −0.005% | ±0.041 | 0.05 |
| 5 | −106.200 | −106.254 | +0.051% | ±0.205 | 0.26 |
| 6 | −49.260 | −49.179 | −0.165% | ±0.051 | 1.58 |
| 7 | +55.460 | +55.190 | −0.486% | ±0.093 | 2.92 |

The spread assumes independent rounding errors uniform within ±0.005 on each radius and thickness and ±0.0005 on each index. With every value pushed to its rounding limit in the favourable direction component 1 reaches 137.03 mm and component 7 reaches 55.93 mm, so rounding alone is unlikely but not excluded.

| Station label (mm) | EFL as printed (mm) | Paraxial image behind the stated plane (mm) | EFL with component 1 at TABLE IA (mm) | Paraxial image behind the stated plane (mm) |
|---:|---:|---:|---:|---:|
| 20 | 19.833 | 1.408 | 19.865 | 1.395 |
| 40 | 39.602 | 1.454 | 39.791 | 1.399 |
| 80 | 79.014 | 1.602 | 79.786 | 1.379 |
| 140 | 137.664 | 1.972 | 139.886 | 1.292 |
| 200 | 196.048 | 2.491 | 200.377 | 1.105 |
| 290 | 283.255 | 3.579 | 291.764 | 0.662 |
| 400 | 394.669 | 6.426 | 402.010 | 0.826 |
| 500 | 503.895 | 9.982 | 503.444 | 1.029 |
| 592 | 613.643 | 14.193 | 597.102 | 1.261 |

- As printed the focal lengths are −0.83 / −0.99 / −1.23 / −1.67 / −1.98 / −2.33 / −1.33 / +0.78 / +3.66 % from the stated values, and the paraxial image travels 12.78 mm over the zoom range where the patent states one back focus (0.162, col. 5, ll. 2-5) and claims an invariable image plane (claim 1, col. 10, ll. 59-61).
- In the right-hand columns the radii and internal thicknesses of surfaces 1-15 are multiplied by 138.020 / 138.630 and nothing else is changed: the focal lengths are then −0.68 / −0.52 / −0.27 / −0.08 / +0.19 / +0.61 / +0.50 / +0.69 / +0.86 % from the stated values and the image travels 0.74 mm. This is a test, not a correction; the file carries the printed values.
- Example 2 prints components 1-6 at 1.257 times the Example 1 values (radius ratios 1.255 to 1.261; TABLE IIA / TABLE IA = 1.257 for each of f1-f6) with a different seventh component. Its first component computes 8.712 against TABLE IIA's 8.675 (+0.43 %) and its seventh 3.400 against 3.412 (−0.36 %); with its first component at 8.675 its stations compute within −0.64 % to +0.50 %. The sibling example therefore repeats the contradiction and does not show which printed value differs.
- Scaling component 7 to TABLE IA as well does not help (stations +0.22 % to +1.77 %), so the component-7 residual is not shown to be a second error of the same kind.
- Single-value search in component 1: each of r11, r12, r13, r14, r15 and the indices of L6, L7 and L8, changed alone to give f1 = 6.901 (for example r14 5.13 → 5.108, r12 9.87 → 9.789, r11 −8.73 → −8.667), brings all nine stations within 1 % and the image travel under 1.4 mm in Example 1, and brings Example 2's stations within 0.7 % when its corresponding value is changed the same way. Values in L1-L5, r10 and the thicknesses do not. Eight candidates fit equally and each would have to be wrong in both tables, so none is isolated.
- A wavelength explanation is excluded: a shift of every index along its own dispersion that closes component 1 (toward F′) opens component 7 further, the opposite shift does the reverse, and either moves components 4 and 5, which match TABLE IA at the printed n_e, off it by up to 3 %.
- The claim-1 inequalities (f1 > f7 > f4, |f3| > |f2|, |f5| > |f6|, f1 > |f5| > |f3|) hold for both the printed and the computed focal lengths and do not discriminate.
- Outcome under the source-errata standard: one kind of evidence (the source summary: stated focal lengths, back focus and component focal lengths) shows the contradiction, the sibling example repeats it, and no replacement value is identified. No value is corrected; the `unresolved` entry records it.

Confirmed unchanged:

- Example identity: Example 1 = FIG. 1, TABLES I, IA, IB; scale ×20.
- `focalLengthDesign` (19.833025763378, 613.643291786978), the 31 element `fl` values and the note's component, doublet, EFL and BFD figures are computed from a prescription that did not change.
- `zoomApertureModel: "fixed-iris"` is kept: the patent describes and quantifies the unchanged opening, and both of its modes hold the opening fixed from fmin to fmed. The one iris is 22.3529 mm, traced from f/2.1 at 20 mm; each station's f-number needs exactly that radius. The authored `STO` sd (22.200959832193) is unchanged and does not size the beam.
- The stop stays at the midpoint of d28 (1.2 + 1.2 mm); the patent places diaphragm D in d28 without a split or a diameter (col. 3, ll. 19-20).
- No semi-diameter changed. The on-axis beam is limited by modeled rims at every station, not by the iris: it traces f/4.25, 4.24, 4.24, 4.25, 4.26, 4.27, 5.11, and 5.91 at 20-500 mm (surface 39) and f/6.93 at 592 mm (surface 13).

Left open:

- The source contradiction above. Its `sd-audit-queue.md` Section G row stays open until a second kind of source-internal evidence isolates a value.
- The patent's 1:6.3 at fmax is not what an unchanged iris gives by the patent's own focal lengths: nothing ahead of the stop moves above fmed, so the f-number scales with focal length, 2.1 × 29.6 / 14.5 = 4.29 (the file's 4.507 is 2.0806 × 613.643 / 283.255). In the file's prescription 1:6.3 at 592 mm needs a 15.99 mm iris, against the 22.15-22.35 mm that 1:2.1 needs from 20 to 290 mm. The patent prints no clear apertures that would explain the difference.
- The coupled diaphragm of FIG. 1 and claims 8-10 (1:2.1 over the entire range) is not modeled.
- The rim limits on the on-axis beam are a separate queue row.
