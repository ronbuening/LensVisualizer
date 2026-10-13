# Lens integration audit — ZeissVarioSonnarT143715mmf2848SonyDCSR1.data

## 2026-09-30 — Same-application assignee verification

- Visually checked the local A1 front page: it omits an organizational assignee.
- Verified US application 11/885,365 and its publication linkage in the [assignment history](https://patents.google.com/patent/US20080218875A1/en). It reports **Sony Corporation and Tamron Co., Ltd. jointly**, recorded **2007-08-30**, signing dates 2007-07-11 through 2007-08-01, reel/frame **019796/0850**.
- Updated `patentAssignees` to Sony Corporation, Tamron Co., Ltd. and documented the prepublication assignment basis in the analysis. The underlying instrument was not independently inspected.
- This restores the assignee-to-patent relationship in the universal map. Optical data and production-correlation qualifications are unchanged. Earlier audit entries retain their historical metadata state.

## 2026-09-18 — Repository integration and glass audit

All twelve bulk glasses already resolve to compatible curves. The two composite asphere layers remain unresolved. Display manufacturer is Sony, with ZEISS branding and DSC-R1 camera association preserved; the empty source-assignee array remains unchanged.

### Semi-diameter figure audit

Reviewed local US 2008/0218875 A1, PDF page 2, Fig. 1 at 600 dpi. The first-to-last vertex span represents 106.89 mm (approximately 528 pixels in the 1500-pixel-high page preview). Direct optical-rim inspection shows undersized G3/G4 and rear groups; curved leader lines contaminate automated envelope readings. Enlarged surfaces 5/6/7A to 14/13.5/13.5 mm, 8/9 to 14.5/14 mm, 17/18 to 7.7 mm, 19A/20A to 8.3/8.4 mm, and 21–25 to 10.4/11.8/12.2/13.2/13.4 mm. Excluded stepped mechanical rims. A 15 mm G3 trial crossed the thin composite layer and was rejected; the adopted cap passes the surface validator. A figure-sized G9 trial was rejected because 19A turns over between 8.3 and 8.7 mm; the adopted 8.3/8.4 mm pair stays below that limit. The asphere departures in the analysis were recomputed at the new rims. All values remain estimated clear apertures, not published manufacturing dimensions. The stop aperture and source prescription are unchanged.

All six final `audit:surface` runs passed; `audit:image-circle` found no undersized surfaces in the five lenses with canonical image formats. The Ultra Prime has no canonical Super 35 image-format id, so its image-circle audit is skipped; its explicit projection diameter remains 31.14 mm.

### Catalog verification

The original run failed two metadata tests (non-romanized inventors and an unregistered maker slug). Both were corrected without weakening tests. The catalog coefficient consistency test and all eight glass-report suites passed. Batch resolution is 63/67 elements; the remaining four are Jena L6, RX10 L4 and the DSC-R1 composite layers. Global strict coverage is 8120/8735 surfaces (93.0%), with zero catalog mismatches.

Manufacturer attribution follows ZEISS’s 2015 partnership explanation (Sony manufactures Sony/ZEISS lenses), reproduced at https://www.sonyalpharumors.com/zeiss-explains-what-photographers-should-know-about-the-sony-zeiss-partnership/ with the original ZEISS link https://blogs.zeiss.com/photo/en/?p=6131. This is independent of the patent-assignee field.

Local browser review covered wide, middle and telephoto states with on-axis rays enabled. The updated optical silhouettes render without visible crossings.

Production `computeElementRenderDiagnostics()` reports zero SD trim at zoom 0, 0.25, 0.5, 0.75 and 1 at both focus-control endpoints.

Final repository validation: typecheck, formatting, lint and all 2,717 tests across 276 files passed. Production build prerendered 1,397 pages and generated sitemap/RSS feeds; only the existing large-chunk advisory remained.

## 2026-09-18 — Local-site diagram follow-up

Compared the live diagram and zoom motion chart with local US 2008/0218875 A1, PDF page 2, Fig. 1 and page 18's table. Retained the previously corrected SDs and asphere-domain caps; no further optical-rim discrepancy justified a change.

Zoom is ordered wide to tele. GR1 and GR3-GR6 travel objectward; GR2 first moves imageward and then reverses objectward, as the published spacing states require. Focus is disabled because no close-focus prescription is supplied.

Replaced twelve obsolete unresolved/code-only bulk-glass labels with their selected compatible catalog proxy names, explicitly leaving production supplier unconfirmed. The two composite layers remain unresolved; searches of additional vendor catalogs did not establish compatible material identities or dispersion curves.

Follow-up validation: typecheck, formatting, lint and all 2,717 tests in 276 files passed; the production build prerendered 1,397 pages. Glass reports retain 63/67 resolved batch elements and zero catalog mismatches. All six surface audits pass, the five applicable image-circle audits report no undersized surfaces, and renderer diagnostics report zero SD trim at five zoom positions and both focus-control endpoints. No additional changelog entry was added.

## 2026-09-23 — Rear plates modeled as `rearPlates`

- Replaced the air-equivalent D25 with the physical rear stack from Table 1 surfaces 26–29 and Table 2 (PDF p. 19;
  Fig. 1 on p. 2 labels the first plate LPF): D25 = 2.000 / 9.935 / 21.801 mm, then LPF 2.010 mm nd 1.5523 νd 63.424
  (N-PSK3), 2.100 mm air, an unlabelled 0.500 mm plate nd 1.5567 νd 58.649 (BAL15Y), and 1.000 mm to the image.
- Paraxial check against the previous data: EFL and defocus identical at all three zoom states (the former fold was
  exactly D25 + 4.716045 mm, so no rounding shift). Physical track grows by 0.894 mm, to 114.500 / 122.288 /
  151.529 mm.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 1 prints ω = 42.6615° / 21.9117° / 10.5638° at f = 14.71 / 32.0597 / 69.8725 mm (Table 2, PDF p. 19), and the
aberration plots of Figs. 2–4 (PDF pp. 3–5) all stop at Y = 13.0 mm. The DSC-R1's 21.5 × 14.4 mm sensor has a 12.94
mm half-diagonal, so the design circle is 26 mm rather than the canonical APS-C 28.35 mm; `imageCircleMm: 26` now
bounds the analysis field (at wide the APS-C corner was unreachable: the chief-ray solve failed past 41.3°, 12.41 mm).
The estimated G2 rims (a 0.6-field bundle, then a Fig. 1 audit that treated G2's outline beyond them as flange) clipped
the real chief ray (solved through the stop centre) at surface 3 from 32.9° at wide, leaving 9.22 mm, 71% of the 13.0
mm circle. With trial G2 rims the wide chief ray solves again: Y = 13.0 mm at 42.64° (the patent ω) needs surface 3 ≥
18.12 and surface 4 ≥ 13.58 mm (18.13 / 13.58 at 42.6615°), with every other rim clear; the 32.06 mm and tele states
already reached Y = 13.0 mm with every rim clear. G2 is a strong meniscus (R 160.93 / 17.45), so each surface takes its
own floor + ~0.5 mm. Fig. 1 (300 dpi, 0.0921 mm/px) draws G2's front face and flat rear step to about 21.5 mm and ends
the S4 concave arc at about 13.9 mm, so surface 4 matches the drawn optical arc within a line width and surface 3 stays
inside the drawn outline.

| Surface | Before | After | Justification |
|---|---|---|---|
| 3 | 12.7 | 18.7 | wide chief ray to Y = 13.0 mm 18.12 mm + clearance; inside Fig. 1's ≈21.5 mm face |
| 4 | 11.0 | 14.1 | wide chief ray to Y = 13.0 mm 13.58 mm + clearance; Fig. 1's S4 arc ends at ≈13.9 mm |

The validator accepts the new values, all three states now reach 100% of the 13.0 mm circle with every rim clear
(42.64° / 21.91° / 10.56°), and the image-circle floor still reports nothing undersized. Surface 4 now carries the
largest rim angle (53.9°, previously surface 21 at 50.1°) and the S4-S5 air gap is the tightest (0.68 mm at 14.0 mm);
the analysis quotes neither, and no aspheric surface changed.

## 2026-10-07 — Zoom iris and station f-numbers against the patent

Table 2 (PDF p. 19, printed p. 5; introduced by ¶0060) prints Fno. 2.8501 / 3.7238 / 5.0545 at f = 14.71 / 32.0597 /
69.8725 mm. The file stored the f-numbers of one calibrated stop instead (+0.51% / −0.17% / −0.34% against that column)
and declared `zoomApertureModel: "fixed-iris"`. The patent gives no basis for one iris radius: it prints no stop
diameter and never says how the opening behaves in zooming. Its only iris statements for Example 1 are the placement
of iris S in GR3 (¶0056, PDF p. 18), the Table 1 Iris row (R INFINITY, D 3.000; PDF p. 19) and the
spherical-aberration axis scaled to the open F value (¶0063, PDF p. 19); Examples 2 and 3 carry the same three kinds
of statement, and ¶0083 (PDF p. 22) adds only that GR3 lies near the iris. Traced by a real marginal ray, the Table 2
column needs iris radii of 6.9318 / 6.8859 / 6.8524 mm, a 1.15% spread falling from wide to tele (6.6323 / 6.5872 /
6.5760 mm paraxially, 0.85%), about ten times the 0.03–0.09% by which the rounded prescription misses the printed
focal lengths. The file therefore carries the patent column and the default per-station iris.

| Field | Before | After | Source |
|---|---|---|---|
| `nominalFno` | [2.8646783257041806, 3.7174215126729098, 5.03730193692091] | [2.8501, 3.7238, 5.0545] | Table 2, row "Fno.", all three columns (PDF p. 19) |
| `zoomApertureModel` | `"fixed-iris"` | field removed (default per-station iris) | Patent silent on stop diameter (¶0056 p. 18; Table 1 Iris row p. 19; ¶0063 p. 19; ¶0083 p. 22); Table 2 f-numbers need three different radii |
| `apertureDesign` | 2.8646783257041806 | 2.8501 | Table 2, row "Fno.", f = 14.71 column (PDF p. 19) |
| `specs[3]` | MODELED MAX APERTURE f/2.865-f/5.037 | PATENT MAX APERTURE f/2.8501-f/5.0545 | Table 2, row "Fno.", wide and tele columns (PDF p. 19) |

- Wide-open iris radii are 6.9318 / 6.8859 / 6.8524 mm at 14.71 / 32.06 / 69.87 mm. The iris limits the on-axis beam
  at all three stations and each traces its stated f-number (f/2.85, f/3.72, f/5.05); no rim limits a station.
- Example identity confirmed unchanged: Table 1 rows around the stop (s12 R −113.994 / D 4.441; Iris INFINITY / D
  3.000; s14 R 28.726 / D 1.200 / Nd 1.9037) and the Table 2 focal lengths match the file. Examples 2 and 3 run to
  85.2599 and 83.7453 mm.
- Focal lengths unchanged: computed EFL 14.7230 / 32.0757 / 69.8532 mm against the printed 14.71 / 32.0597 / 69.8725.
- All six Table 2 variable gaps (D2, D9, D16, D18, D20, D25) and the stop position (4.441 mm after surface 12, 3.000
  mm before surface 14 at every station) unchanged.
- `fstopSeries` unchanged: it starts at the marketed 2.8, not at the former wide value.
- No semi-diameter changed. The authored `STO` sd of 6.5985 mm stays; it is the mean of the three paraxial radii and
  the traced iris replaces it. The header and the analysis note state this.
- The analysis note's paraxial entrance-pupil radii follow the Table 2 column: 2.582887 / 4.306844 / 6.910001 mm
  (previously 2.569742 / 4.314234 / 6.933592 mm from the 6.5985 mm stop).
- Direction word corrected in the same note paragraph: the entrance-pupil planes lie 25.071189 / 55.696224 /
  107.637386 mm imageward of surface 1, where the note said objectward. A paraxial trace from surface 1 to the stop
  (71.907 / 68.613 / 78.878 mm behind surface 1) puts the pupil 46.836 mm ahead of the stop at wide, 12.917 mm ahead
  at intermediate and 28.759 mm behind it at tele. The distances do not depend on the iris radius and are unchanged.
- Left open: whether the 1.15% spread reflects a stop that closes slightly toward tele in the design or a different
  F-number definition in the design software cannot be told from the patent.
