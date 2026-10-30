# Canon EF-S 10–22mm f/3.5–4.5 USM — Optical Patent Analysis

## Patent Reference and Design Identification

**Patent:** US 2005/0286139 A1\
**Published:** 2005-12-29\
**Inventor:** Takeshi Nishimura\
**Assignee:** Canon Inc.\
**Example details:** ¶0107, prescription PDF pp. 22–23; Fig. 9 and Figs. 10A/B/C, PDF pp. 10–11

The model uses **US 2005/0286139 A1, Numerical Fifth Embodiment** (¶0107, PDF pp. 22–23,
printed pp. 8–9), with Fig. 9 on PDF p. 10 / sheet 9 and aberration Figs. 10A/B/C on PDF
pp. 10–11 / sheets 9–10. The original local PDF was inspected again on **2026-10-30**.
The source states focal lengths **10.3 / 15.0 / 21.4 mm**. Fig. 10A prints f/3.5; Figs.
10B and 10C each print **f/4.6**. These replace unsupported middle/tele station values
4.0 / 4.5. The production 10–22 mm f/3.5–4.5 catalog label remains a separate correlation.

The selected configuration contains 13 glass elements, with one resin replica layer
on G12 modeled as a separate medium: **14 modeled media / 13 elements / 10 groups**.
The source includes three aspheres (1, 5 and 25), two L2a cemented glass members and
both L4 cemented pairs. There is no source filter, rear plate or separate cement-index
medium in this prescription. The source's hybrid construction (¶0033, PDF p. 16,
printed p. 2) identifies a resin layer on glass but does not identify UV curing,
resin chemistry, supplier or historical catalog glass types.

### Source omissions and retained reconstruction

PDF p. 23 genuinely omits **D9**, at R9 / N6 in G22. The existing **3.50 mm** is an
unconfirmed reconstruction. It is compatible with the rounded focal lengths and
Table 1 condition ratios (PDF p. 24), but these checks do not establish a unique
thickness or a historical production prescription. With it, calculated EFLs are
10.316538 / 15.0168 / 21.394061 mm. The catalog design endpoints now quote the source's
10.3 / 21.4, rather than calculated EFLs. The image gaps 35.268784 / 41.955580 /
51.947139 mm are existing calculated infinity back focuses, not printed source gaps.

Paragraph 0042 (PDF p. 17, printed p. 3) explicitly describes the telephoto rear
component L3+L4 as negative in each embodiment. The selected literal R/d/N with
D17=1.64 mm gives **positive f=66.087370 mm**. This prose-versus-numerical discrepancy
remains unresolved in `source.errata`. No radius, distance, index, asphere or cam
is adjusted to fit the prose. The missing D9 is outside L3+L4 and cannot resolve
that discrepancy.

## Architecture and controls

| Unit | Selected members            | Calculated in-air focal length | Function                                   |
| ---- | --------------------------- | -----------------------------: | ------------------------------------------ |
| L1   | G11, hybrid G12, G13        |                     −16.456 mm | Negative wide-angle front unit             |
| L2   | G21/G22 doublet, stop, G23  |                     +34.675 mm | Positive variator; L2a alone is −212.09 mm |
| L3   | Two separate glass elements |                     −53.784 mm | Negative compensator                       |
| L4   | Five glass elements         |                     +36.071 mm | Positive relay and chromatic correction    |

| Published variable gap |  Wide | Middle | Tele |
| ---------------------- | ----: | -----: | ---: |
| D7, L1–L2              | 25.15 |  12.57 | 4.73 |
| D13, L2–L3             |  1.03 |   5.32 | 9.62 |
| D17, L3–L4             | 10.23 |   5.94 | 1.64 |

All dimensions in the gap table are millimeters. The three source infinity
stations are preserved. Continuous linear interpolation is illustrative: a
geometry-identical 65-position first-order census reaches **−1.024652 mm** infinity
back-focus displacement at zoom 0.765625 (EFL 17.872779 mm, calculated BF 46.238944 mm,
modeled image gap 47.263596 mm). It is not a demonstrated focus-preserving zoom cam.

The source does not publish finite-focus spacings. All focus endpoint gaps remain
identical; 21 sampled focus-control positions at every sampled zoom produce the
same geometry. The 0.24 m catalog value describes the associated production lens,
not a validated finite conjugate. No finite-focus or production autofocus accuracy
is claimed from this model.

## Figure heights, shoulders and retained limits

Fig. 9 is a **native 300 ppi raster**, 2560×3300 pixels. The wide-end first/last
optical-vertex span is approximately 1180 pixels for 96.76 mm, about **12.2 px/mm**.
Optical silhouettes were inspected at native scale; enlarged display copies add
no source resolution. Leaders, arrows, group brackets and stop lines were excluded.
Practical reading uncertainty is about **±0.6 mm**, increasing to **±1.1 mm** at the
steep front asphere and hybrid shoulder. The adopted caps are conservative values
within drawing uncertainty and geometric/beam limits, not printed clear apertures.

The 2026-09-24 source/field correction of front 1A from 17 to 25 mm is reused
unchanged. The 2026-10-30 pass checks every concave end and bonded interface and
changes 16 clear caps and three outer shoulders:

| Surfaces           | Previous clear semi-diameters | Adopted clear | Outer shoulder | Source disposition                                                                  |
| ------------------ | ----------------------------- | ------------- | -------------- | ----------------------------------------------------------------------------------- |
| 1A / 2             | 25 / 16.8                     | 25 / 16.8     | S2: 25         | Tall G11 rear blank; clear S2 stays below its steep spherical limit                 |
| 3 / 4 / 5A         | 13 / 13 / 13                  | unchanged     | none           | Hybrid blank is taller in the drawing; literal enlargement is geometrically invalid |
| 6 / 7              | 13.5 / 13.2                   | 13.2 / 13.2   | none           | G13 contour                                                                         |
| 8 / 9 / 10         | 7 / 7 / 6.6                   | 6.2 each      | none           | L2a blank about 6.1 mm; no opaque land at bond S9                                   |
| 12 / 13            | 7 / 7.1                       | 6.9 each      | none           | G23 contour about 6.7 mm                                                            |
| 14 / 15 / 16 / 17  | 9.2 / 9.2 / 10 / 10.2         | 7.2 each      | none           | L3 contours about 6.7 mm, with chief/pupil margin                                   |
| 18 / 19            | 12 / 11.75                    | 11 each       | none           | L4a common blank; S19 stays an optical bond                                         |
| 20 / 21            | 9.4 / 9.4                     | unchanged     | 11 each        | Resolved outer blanks retain the narrow-gap clear caps                              |
| 22 / 23 / 24 / 25A | 11.75 / 12 / 12 / 12          | 11 each       | none           | L4 relay/rear doublet; S24 stays an optical bond                                    |

All values are millimeters. There are no inferred cuts. `rimExtensionSd` on S2,
S20 and S21 preserves each optical cap. The rear shoulders improve the drawn
outer height without claiming a larger transmitted aperture.

A literal approximately 15 mm G12 hybrid blank would produce **−0.519049 mm**
minimum resin thickness from the published R/d/asphere. At the retained 13 mm
cap, its minimum thickness is **+0.010860 mm**. Neither an opaque land on the glass/
resin interface nor disconnected resin wings are invented. Consequently this
part of the drawing cannot be reproduced literally with the preserved source
prescription and unchanged positive-thickness guard.

Full 11 mm optical caps at S20/S21 would cause **0.061741 mm** sag intrusion across
D20=0.05 mm, exceeding both the physical gap and unchanged 0.045 mm guard allowance.
The adopted 9.4 mm clear caps plus 11 mm shoulders give 0.044138 mm maximum intrusion
and **0.005862 mm** minimum physical separation. This is sampled geometric clearance,
not a production mechanical-tolerance certification. Source R/d and aspheres remain
fixed. At S25A's new 11 mm cap, polynomial aspheric departure is +0.652989 mm;
front 1A remains +4.349 mm at 25 mm and 5A remains about −0.643 mm at 13 mm.

## Glass and spectral evidence

Paragraph 0099 continues on **PDF p. 20, printed p. 6** and explicitly defines Ni
at the **d-line** and νi as νd. All 14 printed index/Abbe pairs are retained. The
original supplies no position-specific numeric C/F/g line indices, partial
dispersion or APD evidence for these media. **36 catalog-derived per-lens nC/nF/ng
values are removed**; none are newly treated as published spectral measurements.

| ID / medium     | Source nd / νd  | Compatible catalog spectral proxy or unresolved status |
| --------------- | --------------- | ------------------------------------------------------ |
| 1 G11           | 1.583126 / 59.4 | OHARA S-BAL42                                          |
| 2 G12 substrate | 1.772499 / 49.6 | OHARA S-LAH66                                          |
| 3 G12 resin     | 1.524210 / 51.4 | Unmatched resin; chemistry/cure unresolved             |
| 4 G13           | 1.728250 / 28.5 | OHARA S-TIH10                                          |
| 5 G21           | 1.834807 / 42.7 | OHARA S-LAH55V                                         |
| 6 G22           | 1.517417 / 52.4 | OHARA S-NSL36                                          |
| 7 G23           | 1.518229 / 58.9 | OHARA S-NSL3                                           |
| 8 L3 negative   | 1.804000 / 46.6 | OHARA S-LAH65V                                         |
| 9 L3 positive   | 1.846660 / 23.9 | OHARA S-TIH53                                          |
| 10 L4a positive | 1.496999 / 81.5 | OHARA S-FPL51                                          |
| 11 L4a negative | 1.834000 / 37.2 | OHARA S-LAH60                                          |
| 12 L4 singlet   | 1.438750 / 95.0 | OHARA S-FPL53                                          |
| 13 L4b negative | 1.834000 / 37.2 | OHARA S-LAH60                                          |
| 14 L4b positive | 1.484560 / 70.0 | Unmatched low-index/high-Abbe glass, 485700            |

All 12 curves pass the public compatibility resolver. They are qualified spectral
proxies, with historical supplier, melt and chemistry unspecified. A coordinate
match does not establish titanium, lanthanum or fluorophosphate chemistry of the
source medium. N14's nearby S-FSL5 neighborhood is insufficient for a compatible
curve; the medium remains unresolved. N10/N12 APD tags remain **inferred** from
low-dispersion coordinates/proxies. A production Super-UD claim does not assign
these exact numerical positions or establish source partial dispersion. The
unsupported UV-cure claim for the resin is removed.

## Sampled runtime verification and limits

Surface checks, three published station aperture checks and image-circle floors
pass. A geometry-identical **65-position** census passes aperture targets within
3% and reaches the 14.175 mm APS-C corner with the chief ray at every position.
The original aberration plots only show Y=13.6 mm (96% of that corner); the corner
check is additional runtime evidence rather than an expanded source field claim.

The 65-zoom, three-field (axis / half corner / corner), 97-pupil-ray probe requests
**18,915 rays**. Every axial bundle and every chief clears. It records 1,290
ordinary off-axis aperture clips (284 more than the old caps with the same corrected source iris schedule) and 26 front-cap intersection misses at four
corner-field bundles. Independent actual-asphere intersections place all 26
outside the unchanged front 1A cap; there are no unexplained in-cap or interior
intersection failures. These are vignetting/finite-aperture limits, not full-pupil
corner transmission. Field coverage measures a chief ray, not an unvignetted cone.

Actual generated SVGs were compared with native Fig. 9. Nine representative
zoom/focus views and a **65 zoom × 21 focus** contour census each have 14 finite,
closed, connected medium paths and **zero renderer trimming**. The focus controls
are geometric no-ops, as documented above. Source fidelity, these sampled runtime
results and association with the production EF-S lens remain separate conclusions.

## Source record

- Local original: `patents/US20050286139A1.pdf`, ¶0107 / PDF pp. 22–23; Fig. 9 and
  Figs. 10A/B/C / PDF pp. 10–11; Table 1 / PDF p. 24.
- Definitions: ¶0099 / PDF pp. 19–20; resin construction ¶0033 / PDF p. 16;
  rear-component prose ¶0042 / PDF p. 17.
- Historical review dates and measured/rejected shape trials: [audit](./CanonEFS1022mmf3545.audit.md).
