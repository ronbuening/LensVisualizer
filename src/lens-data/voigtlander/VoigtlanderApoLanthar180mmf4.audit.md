# Audit Log — Voigtländer APO-LANTHAR 180mm f/4 SL Close Focus

> Current model: JP 2003-270529 A, Example 2 (Table 2, Figs. 3–4). The Example 1 record below is historical.

Patent: JP 2003-270529 A, Example 1 / Table 1 / Figure 1.

## Retained source decisions

- The selected example has nine elements, seven air-separated groups and three functional groups, with two cemented doublets and no aspheres. All R/d, source d-line coordinates and group/stop interpretation remain unchanged. The inferred stop divides the printed 19.04 mm gap into 9.50/9.54 mm. Source glass names are absent. Earlier coordinate corrections selected S-LAH60 for 1.834/37.3, S-LAH53 for 1.8061/40.7 and S-TIH10 for 1.72825/28.3; these remain compatible coefficient proxies.
- Example 1 is retained at literal patent scale. Paragraph 0012 prints f = 197 mm, F4 and half-field 6.2°; the rounded prescription computes about 197.9 mm. Existing numeric focal metadata remains unchanged, with this residual explicit. Example 2 at 178 mm is distinct and may correlate more closely to the retail 180 mm lens. No dimensions or media are transplanted from that embodiment.
- The close BF 130.39 mm is an inferred unit-focus endpoint based on the marketed 1.2 m distance, not a published finite spacing. Literal R/d and current focus, aperture, group and tolerance controls remain unchanged. No source finite-conjugate certification is asserted.

## 2026-10-30 — Fresh F-mount source, rim and glass review

- Reopened `patents/JP_2003270529_A.pdf` (SHA-256 `b610fce1971b78061652db9b9a529f693324ee32edfba883568b893fafc71698`). Table 1 on PDF p.2 confirms all nine nd/νd pairs; paragraph 0011 on p.3 explicitly defines d587.6 nm. Figure 1 on p.4 was inspected as its native 200 dpi raster and at 600 dpi. No source C/F/g indices, actual partial ratio or named supplier.
- All nine compatible OHARA coefficient curves remain qualified spectral proxies. Paragraph 0008 and Claim 2 specify ultra-low-dispersion glass with Abbe ≥70 in the front group; they do not supply actual anomalous partial ratios. Three APD flags remain inferred. Remove unsupported exact catalog ΔPgF notes and qualify supplier/melt identity throughout the current glass description.
- Baseline 23 mm front caps clip the stated F4 beam by 6.5%. The beam diagnostic requires S1/S2 ≥24.5, S3/S4 ≥23.1 and S6 ≥20.1 mm. Figure 1's native first-to-last vertex span is about 334 pixels over the literal 69.98 mm track, giving 4.77 px/mm. Front-body half-heights around 129/121/111 pixels imply about 27.0/25.3/23.3 mm, with roughly 0.3–0.5 mm drawing uncertainty. Adopt conservative continuous paired caps S1/S2 =25, S3/S4 =24 and S5/S6 =23 mm, preserving all literal sphere and gap constraints. These source-model dimensions cannot be certified as clearance through the retail lens's 49 mm filter.
- Other heights remain. Short compound-end steps lack reliable native endpoint evidence for numeric cuts; no opaque internal land or resin wing is added. Canonical surface and full inferred-cut checks pass. Nine actual focus/zoom SVG views were inspected: connected compounds, finite paths and zero hidden trim. Native F4 is now iris-limited; image-circle finds zero undersized surfaces and the centered format chief clears.
- Matched 16-point stop-lattice samples retain 6,720 transmitted rays, lose 0 and gain 1,020. These are finite sample counts, not flux or a continuum guarantee. All R/d, nd/νd, references, stop, focus, aperture and tolerances are invariant. Source/retail correlation, inferred rims/iris/focus and historical spectrum remain qualified.

## 2026-11-10 — Metadata fill

- `catalog.fNumber.design` set to 4: JP 2003-270529 A ¶0012 (PDF p. 3, left column), the Example 1 specification
  "f = 197mm, F_no = 4, ω = 6.2°". The stop's `nominalFNumber` 4 matches it.

## 2026-11-17 — Aperture slider limit

- `aperture.maxFNumber`: unset (default 16) → 22. `fStops` lists f/22, which the slider cut off at the default 16. No optical value changed.

## 2026-11-23 — Example 2 prescription, rims and production comparison

### Source and production identification

Changed from Example 1, whose printed 197 mm computes 197.88 mm in the former file, to Example 2 at its original
scale. Both examples have nine elements in seven air-spaced groups. The two 81.6-Abbe positions in Example 2 match
Cosina's anomalous low-dispersion markings on L42 and L43 (elements 2 and 3 from the front). Cosina specifies
180 mm f/4–22, 14° field, 1.2 m minimum focus, 1:4 maximum magnification, nine blades, 49 mm filters and a 79.0 mm
Ai-S barrel. The release was August 2003 and production ended April 2007. Added the listed Contax/Yashica mount
that was missing from the catalog and entered 1.2 m as the maker's close-focus specification. [Cosina product and sales record](https://www.cosina.co.jp/discontinued/apo-lanthar-180mm-f4-close-focus-sl/) · [Cosina SL catalog, p. 7](https://www.cosina.co.jp/wp-content/uploads/2024/01/SL.pdf#page=7).

The earlier comparison (`compare.png` in the audit scratch folder) registered both models to the optical axis
and the S1/S16 vertices of the same Cosina SVG. The middle-doublet vertex offsets shrink from roughly 20–27 to
7–9 maker SVG units, and the rear singlets are closer. At Nikon F register, the Example 2 front vertex is 76.36 mm
from the flange, consistent with the 79.0 mm exterior barrel length. The final infinity overlay
(`final-overlay.png`, from the LensPage SVG exported in jsdom) uses the same uniform registration and confirms
a partial fit. The middle interfaces and rear curves still depart from the maker's outline. The drawing gives
neither a calibrated scale nor a focus state. [Cosina construction drawing](https://www.cosina.co.jp/wp/wp-content/uploads/2024/01/SL-180_40-LD.svg).

### Transcription, stop and focus

Re-read the five-page JP 2003-270529 A scan (same SHA-256 as the 2026-10-30 review) from 480 dpi `pdftoppm`
renders. Checked each of the 16 signed radii, 15 printed thicknesses and gaps, and nine index/Abbe pairs against
Table 2 on PDF p. 3. All agree with the earlier candidate. The convention in ¶0011 is helium d (587.6 nm) and
positive radius for a center of curvature toward the image. Figure 3 and ¶0014 agree on G4–G6, the two cemented
pairs, and an air stop between G5 and G6. The published radii are spherical and Table 2 contains no aspheric terms.
No Example 2 misprint correction is warranted. For the retired Example 1, Table 1 visibly reads S3 +34.259 mm,
where the former file had +34.299 mm. The printed value gives 196.77 mm, consistent with ¶0012's 197 mm.
This was an Example 1 transcription discrepancy.

Figure 3 puts the stop about 22% of the way from S12 to S13. Its modeled station divides the printed 22.74 mm
gap into 5.00 and 17.74 mm. The repository derives a 10.2755 mm physical stop semi-diameter from nominal f/4.
Table 2 leaves the S16 spacing blank. The calculated infinity back focus is 54.75638 mm, versus about 54 mm
read from the drawn image plane using S1–S16 as the scale. The patent is a prime and gives no zoom or finite-focus
stations. The close end is an inferred rigid translation toward the object by 46.48010 mm. At 1.200 m object to
image, the paraxial object lies 1030.6635 mm ahead of S1 and magnification is −0.2614 (about 1:3.83, versus
Cosina's 1:4). No source-certified finite conjugate is claimed.

| State             | Patent EFL / f-number | Model EFL / nominal f-number | Model back focus | Model working f-number, paraxial |
| ----------------- | --------------------- | ---------------------------- | ---------------: | -------------------------------: |
| Infinity          | 178 mm / f/4          | 177.8359 mm / f/4.000        |      54.75638 mm |                          f/4.000 |
| 1.200 m, inferred | No finite row         | 177.8359 mm / f/4.000        |     101.23648 mm |                          f/6.529 |

The infinity track is 122.85638 mm. The group focal lengths calculate to +41.5295, −29.6804 and −293.3991 mm,
versus +41.53, −29.68 and −293.50 mm in ¶0016. The small G6 residual is retained. The exact 21.65 mm corner chief
passes at 6.8126°, versus 6.8° and 21.64 mm at the top of Fig. 4. The aperture audit reports f/4.000, limited by
the iris. The exact d-line launch radius admitted by the derived iris is 21.6702 mm at infinity, versus 22.2295 mm
paraxially (EFL divided by twice that exact radius gives f/4.103). The real marginal image-space cones are f/4.097
at infinity and f/6.606 at 1.2 m. All refer to the same iris.

### Figure 3 rims and vignetting

Rendered Fig. 3 at 600 dpi for the figure audit and also measured the optical outlines manually on a 480 dpi
crop that includes the axis and image plane. On the latter crop, the axis is at y ≈ 485 px and the glass vertices
span x ≈ 557–1325 px, about 11.28 px/mm on the 68.10 mm prescription. The automatic envelope and rim readings were
contaminated by the doublet outlines, group marks and leader lines, so the figures below use the manual reads.
Cosina's optical outline half-heights use the same 68.10 mm vertex span after registration, equivalent to
5.1931 maker SVG units/mm. The drawings agree on relative heights and the two steps but give different apparent
diameters. The selected rims use those profiles and the f/4 beam floor. The positive members of the doublets have
paired cap heights. The taller negative members are represented by a tapered transition at the shared face.
The drawings do not determine an opaque cap termination, and the cemented interface supports one clear radius.
No cut, added land, or looser geometry tolerance was used.

| Faces           | Fig. 3 approximate half-height (mm) | Cosina approximate half-height (mm) | Inherited clear radii (mm) | Final clear radii (mm) |
| --------------- | ----------------------------------: | ----------------------------------: | -------------------------- | ---------------------- |
| S1 / S2         |                                24.3 |                                19.5 | 25 / 25                    | 22.3 / 22.3            |
| S3 / S4         |                                23.3 |                                18.7 | 24 / 24                    | 21.3 / 21.3            |
| S5 / S6         |                                21.4 |                                17.1 | 23 / 23                    | 19.4 / 19.4            |
| S7 / S8 / S9    |                         18.6 → 16.1 |                         15.0 → 13.1 | 18 / 18 / 15.3             | 17.0 / 14.6 / 14.6     |
| S10 / S11 / S12 |                         14.4 → 13.2 |                         11.8 → 10.8 | 14 / 14 / 12.5             | 13.3 / 12.1 / 12.1     |
| S13 / S14       |                                10.8 |                                 8.3 | 10.3 / 10                  | 8.8 / 8.8              |
| S15 / S16       |                                11.0 |                                 8.7 | 9.5 / 9.5                  | 9.0 / 9.0              |

The final overlay has shorter front and middle rims and brings both rear singlets close to Cosina's drawn height.
The axial beam precludes shrinking the three front elements to Cosina's registered heights. The d-line rays at
the nominal paraxial f/4 launch hit S1/S3/S5 at 22.23/21.22/19.30 mm with the iris ignored, and the front pairs
round up to 22.3/21.3/19.4 mm. Exact traces just inside the open iris pass in C/d/F/g at all 251 focus slider settings,
with a minimum surface clearance of about 0.47 mm at S8. The d-line beam reaches S13 at 7.45 mm at infinity and
8.19 mm at the close endpoint. The full-frame corner chief remains clear. The geometric chief-ray limit changes
from 10.91° to 10.44° and lies beyond the format-bounded 6.81° field.

Same-patent before/after readings from `vig.mjs` at nominal f/4 and infinity compare the inherited Example 1
rims on the Example 2 prescription with the final rims. Values are geometric transmission percentages, excluding
cosine falloff and glass or coating loss. The prior Example 1 lens, at its own 6.17° full-frame corner, gave 52.0%.

| Field angle (°)    |   0.0 |   1.1 |   2.3 |  3.4 |  4.5 |  5.7 |  6.8 |
| ------------------ | ----: | ----: | ----: | ---: | ---: | ---: | ---: |
| Inherited rims (%) | 100.0 | 100.0 | 100.0 | 98.5 | 90.4 | 79.1 | 65.7 |
| Final rims (%)     | 100.0 |  98.6 |  94.2 | 84.6 | 73.7 | 61.7 | 49.3 |

### Glass and aberration comparison

The patent names no glass, supplier, melt or partial-dispersion values. Vendor AGF searches and the runtime
residual check support the following comparison curves at Table 2 precision. All resolve. The listed catalog coordinates agree with the table; evaluated from the catalog coefficients,
|Δnd| < 0.000005 and |Δνd| < 0.046, which still round to the printed precision. Legacy entries and other equivalent coordinates exist. Only the Cosina-marked positions carry
inferred anomalous-dispersion tags. [HOYA data and obsolete grades](https://www.hoya-opticalworld.com/english/datadownload/index.html) · [OHARA cross-reference](https://www.ohara-inc.co.jp/en/product/01002/).

| Element(s) | Table 2 nd / νd | Catalog curve | Δνd, catalog minus patent |
| ---------- | --------------- | ------------- | ------------------------: |
| L41        | 1.48749 / 70.4  | Sumita FK5    |                      0.00 |
| L42, L43   | 1.49700 / 81.6  | HOYA FCD1     |                     +0.01 |
| L51        | 1.83400 / 37.3  | HOYA NBFD10   |                     +0.04 |
| L52        | 1.51680 / 64.2  | HOYA BSC7     |                      0.00 |
| L53        | 1.80610 / 40.7  | HOYA NBFD13   |                     +0.03 |
| L54, L61   | 1.72825 / 28.3  | HOYA E-FD10   |                     +0.02 |
| L62        | 1.77250 / 49.6  | OHARA LAH66   |                    +0.001 |

The provisional S-FSL5, S-FPL51, S-LAH60, S-BSL7, S-LAH53 and S-TIH10 labels miss the printed precision
in index or Abbe number. LAH66 uses the legacy OHARA curve for the same coordinates previously represented by
S-LAH66. No line indices are authored.

FCD1 is documented in a 1998 lens patent. Schott's optical-glass comparison lists NBFD10, NBFD13 and E-FD10.
Sumita's FK5 and K-FK5 tables give the same d-line coordinates. These records support the choice of comparison
curves and do not identify Cosina's supplier. [EP 0863502 A2](https://patents.google.com/patent/EP0863502A2/en) ·
[Schott glass comparison, §11.6](https://www.asc.ohio-state.edu/schumacher.60/class/8820.uf/schott/optical_glass_properties.pdf) ·
[Sumita FK5 catalog](https://web.stanford.edu/class/ee347/SumitaAll.PDF) ·
[Sumita K-FK5 data sheet](https://www.sumita-opt.co.jp/abbe/pdf/k-fk5.pdf?1633830818=).

The longitudinal spherical-aberration probe gives +0.024/+0.022/+0.006/−0.006 mm for the d line at
100/85/70/50% of the paraxial entrance-pupil radius, relative to the near-axis d focus. Fig. 4(a) shows a similar
profile with about +0.053 mm at the edge. The main residual is about 0.03 mm at the rim, with F–d separation
similar to the drawing. Near-axis/marginal crossings relative to the near-axis d focus are d 0/+0.024 mm,
F −0.027/+0.077 mm, C +0.086/+0.080 mm, and g −0.012/+0.149 mm. Fig. 4(a) shows F about −0.025/+0.104 mm
(near axis/edge). The C and g comparisons have no published curves. As a sensitivity check the earlier curves
gave C +0.062/+0.053 and g +0.054/+0.226 mm, while modeling only the Abbe numbers gave C +0.160/+0.170 and
g +0.525/+0.797 mm. The new curves are retained for their coordinate agreement and the observed d/F agreement.
The model also gives sagittal/tangential edge shifts −0.028/−0.119 mm and +1.91% distortion, compared with
about −0.04/−0.13 mm and +1.8% in Fig. 4(b–c). Those small residuals do not isolate a sign or digit error.

### Checks

The surface, aperture, image-circle and full-frame field audits pass. Metadata generation, typecheck,
Prettier and the TypeScript ESLint check pass. The targeted catalog, geometry, exact-trace, dispersion,
markdown and documentation suites pass (1,877 tests across 35 project files). The conversion corpus passes
after moving the focus explanation into the preserved file header. The jsdom render shows all nine elements
with the Example 2 labels and recomputed inspector values. The render test and separate prescription are
outside the worktree.

Open: the exact production prescription and glasses, calibrated optical rim heights, iris station and finite
focus travel are unverified. The patent supplies no C/g validation curves or finite-focus aberration data.
