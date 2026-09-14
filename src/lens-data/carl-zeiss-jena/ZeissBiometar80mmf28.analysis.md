## Patent Reference and Design Identification

**Patent:** US 2,968,221\
**Filed:** March 17, 1959\
**Granted:** January 17, 1961\
**Inventor:** Harry Zöllner\
**Assignee:** VEB Carl Zeiss Jena\
**Title:** *Photographic Five-Element Lenses of the Modified Gauss Type*\
**Embodiment analyzed:** Example I

US 2,968,221 describes a five-element photographic lens of modified-Gauss form. Example I is normalized to
`f = 100`, has a stated aperture ratio of `1:2.8`, and covers a full image angle of `55°` (patent p. 2, Example I).
The LensVisualizer model uses this prescription with a uniform linear scale of `0.8×`; all radii, axial spacings,
modeled semi-diameters, and the computed image-plane distance are therefore expressed on an 80 mm nominal scale, while
refractive indices and Abbe numbers are unchanged. The rounded patent prescription retraces to an EFL of
`100.7619` source units rather than exactly 100; after scaling, the final data model has a computed EFL of
`80.6095 mm`. No patent value was altered to force an exact 80.000 mm result.

The production identification is a strong correlation, not a manufacturer-confirmed patent attribution. Three pieces of
evidence converge: the patent assignee is VEB Carl Zeiss Jena; the selected design is a five-element f/2.8 Gauss-family
lens with a `55°` field; and a period PENTACON / Carl Zeiss Jena catalog lists the **ZEISS MC BIOMETAR 2,8/80** for
PENTACON six TL and PRAKTISIX as a five-element lens with a utilized image angle of `54°` and a 1.0 m minimum focusing
distance. A later ZEISS technical history also states that the five-element Gauss model was called **Biometar** in Jena
and illustrates a 2.8/80 version for the 6×6 format. The one-degree field difference is treated as consistent with a
normalized design field versus a marketed utilized field, not as proof that the catalog lens and patent example are
identical in every production detail.

## Optical Architecture

The patent itself calls the design a modified Gauss type. In the final data model it comprises five elements in four
air-separated groups, with elements II and III cemented. Figure 1 of the patent places the diaphragm between the
cemented front pair and element IV; Example I supplies the surrounding air gap but not a numerical stop coordinate.

Front to rear, the arrangement is:

1. Element I, a positive outwardly convex meniscus.
2. Elements II and III, a cemented pair whose individual powers are positive and negative, respectively.
3. The aperture stop in the long central air space.
4. Element IV, a negative meniscus behind the stop.
5. Element V, a positive outwardly convex meniscus.

The computed standalone powers should not be confused with in-situ group behavior. Elements II and III have individual
focal lengths of `+46.659 mm` and `−28.357 mm`, yet the cemented II+III assembly has a net focal length of
`−120.770 mm`. The front I+II+III section is weakly positive as a complete subassembly (`+347.380 mm` EFL), while the
rear IV+V section is positive overall (`+70.515 mm` EFL). These are paraxial subassembly diagnostics from the final
data revision, not values published in the patent.

The implemented system EFL is `80.6095 mm`. Its computed back focal distance from the last glass vertex is
`62.6995 mm`; the front vertex to last glass vertex track is `37.792 mm`, and the front vertex to paraxial image plane
is `100.4915 mm`. Under the project definitions, `TL/EFL = 1.24665` and `BFD/EFL = 0.77782`, so the modeled prescription
is neither telephoto nor retrofocus.

## Element-by-Element Analysis

### L1 / Element I — Positive Meniscus

`nd = 1.6668, νd = 33.1. Glass: 667331 — dense-flint class (supplier unresolved). f = +115.755 mm.`

Element I is the front convergent meniscus identified in the patent prose. Its two positive radii place both centers of
curvature toward the image side, producing the outwardly convex meniscus shown in Figure 1. The class label records only
the source `nd/νd` coordinates; it is not a claim that a particular modern catalog glass was used in the historical lens.

### L2 / Element II — Positive Meniscus, Cemented Member

`nd = 1.6935, νd = 53.5. Glass: 694535 — lanthanum-crown class (supplier unresolved). f = +46.659 mm.`

Element II is the positive member of the cemented II+III pair. The patent treats the combined pair as the front
dispersive meniscus adjacent to the diaphragm. In the data model the shared cemented boundary correctly changes directly
from the element-II medium to the element-III medium, with no synthetic cement layer or air gap.

### L3 / Element III — Negative Meniscus, Cemented Member

`nd = 1.6889, νd = 31.1. Glass: 689311 — dense-flint class (supplier unresolved). f = −28.357 mm.`

Element III supplies the negative member of the cemented pair. Although its standalone magnitude is stronger than that of
L2, the cemented interface and finite thicknesses make the combined II+III assembly much weaker than a simple thin-lens
sum would imply; the verified net cemented focal length is `−120.770 mm`. The data file assigns the cemented junction to
the downstream element III, matching the sequential-medium convention used by LensVisualizer.

### L4 / Element IV — Negative Meniscus

`nd = 1.7283, νd = 28.3. Glass: 728283 — dense-flint class (supplier unresolved). f = −97.916 mm.`

Element IV is the rear dispersive meniscus described by the patent. It lies immediately behind the diaphragm space and
is air-separated from both the cemented front group and the final positive meniscus. Its negative standalone power should
not be read as the power of the complete rear half; together with L5, the rear IV+V section is positive overall.

### L5 / Element V — Positive Meniscus

`nd = 1.6204, νd = 60.3. Glass: 620603 — crown class (supplier unresolved). f = +45.323 mm.`

Element V is the rear convergent outwardly convex meniscus. Its positive power reverses the sign of the complete rear
IV+V subassembly relative to L4 alone, giving the verified `+70.515 mm` rear-subassembly EFL. The patent supplies no
rear image-plane distance after this element; the model therefore terminates at the independently computed paraxial
infinity image plane rather than at a patent-tabulated back focus.

## Glass Identification and Selection

The patent publishes `nd` and `νd` coordinates but no manufacturer glass names, melt numbers, C/F/g-line indices, partial
dispersions, or Sellmeier coefficients. The data file therefore keeps class-level or six-digit labels and does not promote
modern coordinate equivalents to historical supplier identities.

| Element | Patent coordinates | Stored identification | Modern coordinate-equivalent evidence |
|---|---:|---|---|
| I | 1.6668 / 33.1 | 667331 dense-flint class | CDGM H-ZF39 is a near-exact modern coordinate match |
| II | 1.6935 / 53.5 | 694535 — H-LaK6A coordinate-compatible proxy | Several modern lanthanum-crown candidates are close; no unique vendor assignment |
| III | 1.6889 / 31.1 | 689311 dense-flint class | OHARA S-TIM28 is a close exact-code coordinate match |
| IV | 1.7283 / 28.3 | 728283 dense-flint class | HOYA E-FD10L and CDGM H-ZF4A occupy the same coordinate class |
| V | 1.6204 / 60.3 | 620603 crown class | SCHOTT N-SK16 and OHARA S-BSM16 are essentially coordinate-equivalent |

These comparisons support the class labels used in the data file, but they do not establish the original 1959–1961
glass supplier or melt. Because the modeled elements contain only `nd/νd` data and no verified `nC`, `nF`, `ng`, or
`dPgF`, the prescription does not support an apochromatic or anomalous-partial-dispersion performance claim.

All five elements resolve to coefficient-backed catalog proxies. Element II uses H-LaK6A as a coordinate-compatible curve; this does not identify the historical supplier.

## Focus Mechanism

The source provides one fixed numerical prescription and no focus-dependent spacing table. The implemented focus status is
therefore **NO_INTERNAL_RECONSTRUCTION**: the optical stack remains fixed and `var` is empty.

The correlated production catalog gives a minimum focusing distance of `1.0 m`, and that value is retained as product
metadata (`closeFocusM`). It does not determine how the production barrel moved the lens, how much image-plane travel was
required, or whether any internal spacing changed. The analysis therefore makes no claim for an internally reconstructed
close-focus state.

## Conditional Expressions

The patent states three chromatic-power conditions plus accompanying construction conditions for the five-element form.
The radius and index-difference conditions tabulated below, and the concave-radius ratio discussed afterward, were evaluated on the patent's own normalized Example I focal lengths and Abbe numbers, not on the rounded display
values in the scaled LensVisualizer file.

| Condition | Verified value | Patent requirement | Result |
|---|---:|---:|---|
| `f / (fI·νI)` | 0.020880 | 0.017 to 0.022 | satisfied |
| `f/(fII·νII) + f/(fIII·νIII)` | −0.058653 | −0.060 to −0.049 | satisfied |
| `f/(fIV·νIV) + f/(fV·νV)` | 0.000405 | 0 to 0.003 | satisfied |
| Cemented radius `r4` | +109.2 source units | positive and at least `f = 100` | satisfied |
| `nII − nIII` | 0.0046 | positive and ≤ 0.1 | satisfied |

The patent also states that the ratio of the relevant front and rear concave radii lies between 1.0 and 1.3. Mapping that
prose to the two diaphragm-facing concave surfaces in Figure 1 gives the interpreted quantity `|r5/r6| = 1.08197`, which
falls inside the stated range. That surface mapping is an interpretation of the figure and prose rather than an explicitly
numbered patent formula.

## Verification Summary

The model preserves the patent's normalized geometry and applies only the documented `0.8×` linear scaling. The source
prescription retraces to `100.7619` rather than the headline `f = 100`; a source-precision sensitivity analysis gives a
conservative acceptance tolerance of `±2.9` normalized units, so the discrepancy is retained rather than corrected.

The patent drawing shows a diaphragm within the `l2` space but gives no numeric split or aperture diameter. The modeled
stop is placed at `47.5%` of that air gap based on the schematic Figure 1, producing scaled distances of `7.372 mm` before
the stop and `8.148 mm` after it. Its physical semi-diameter, `10.5054 mm`, is then calibrated paraxially so that the
entrance pupil gives the patent's f/2.8 aperture ratio. Agreement with f/2.8 is therefore a calibration result, not an
independent measurement of the historical diaphragm.

The patent likewise gives no surface semi-diameters. The authored clear apertures are modeled values sized from exact
spherical Snell traces and analytic geometry checks. The verification sampled 33 rays across on-axis, ±16.5°, and the
published ±27.5° half-field cases; full-field sampling used stop fractions only through ±0.75 and therefore does not claim
an unvignetted full pupil at the edge of the 55° field. These modeled semi-diameters should not be read as production
mechanical aperture measurements.

The final surface-to-image spacing is the computed paraxial BFD of `62.6995 mm`, because Example I does not publish an
image-plane distance. A surface-by-surface Petzval calculation using `φ/(n·n′)` gives a sum of
`+0.00194642 mm⁻¹`, corresponding to a Petzval radius of `+513.764 mm`. Those are paraxial diagnostics of the final data
revision and do not substitute for measured field-curvature performance.

## Sources / References

1. Harry Zöllner, **US Patent 2,968,221**, *Photographic Five-Element Lenses of the Modified Gauss Type*, filed March 17,
   1959, granted January 17, 1961. See Figure 1 on PDF p. 1; descriptive text and Example I on PDF p. 2; Claim 1 on PDF
   p. 3. The source PDF is included with this dossier as [`US2968221.pdf`](US2968221.pdf).
2. **PENTACON / VEB Carl Zeiss Jena lens catalog**, circa 1978, entry for “ZEISS MC BIOMETAR 2,8/80” for PENTACON six TL
   and PRAKTISIX; five-element construction, 54° utilized image angle, 1.0 m minimum focus, M58×0.75 filter thread.
   Archival scan: <https://www.ihagee.org/Lenzen/pentaconczjobj1978.pdf>.
3. H. H. Nasse, **“From the Series of Articles on Lens Names: Planar,”** Carl Zeiss AG Camera Lens Division, July 2011,
   especially the discussion of the five-element Gauss model on pp. 4–5 of the PDF and the statement that this form was
   called Biometar in Jena. <https://lenspire.zeiss.com/photo/app/uploads/2022/02/technical-article-lens-names-planar.pdf>.
4. Modern glass-coordinate comparisons were checked against current official catalogs from
   [OHARA](https://www.ohara-inc.co.jp/en/product/01000/),
   [HOYA](https://www.hoya-opticalworld.com/english/datadownload/index.html),
   [SCHOTT](https://www.schott.com/en-us/products/optical-glass-p1000267/downloads),
   [CDGM](https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database),
   [HIKARI](https://www.hikari-g.co.jp/optical_glass/catalog/), and
   [SUMITA](https://www.sumita-opt.co.jp/en/download/). They are used only as class/equivalent evidence; the patent
   itself remains the authority for the modeled `nd/νd` values.
