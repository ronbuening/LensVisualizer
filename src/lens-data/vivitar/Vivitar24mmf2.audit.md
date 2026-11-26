# Vivitar 24mm f/2 — construction audit

2026-11-15. New independent transcription, not inherited validation. Pin: 70600ffc23af48a81994cf8fc834048fdf9d21a1.

## Source checks

Original US4258980 PDF page 6 Table 1 visually checked against the machine-readable patent HTML. All 16 R, eight T, seven internal S, BFL, eight nd and eight νd values agree. Original PDF page 2 Figure 1 inspected for iris position and outer-land convention. Literal table and independent matrix computation are in the reproducibility evidence. Nothing from Table 2 (28mm association) was used.

## Trials and final disposition

Initial schematic-style equal L2 14 mm rims fail spherical rim-slope validation (R4=12.72mm). Equal 11.4mm rims pass but clip the corner at surface3. Final front14/rear11.4, rear outer-land14 model uses the Figure1 flat-land shape; exact dimensions remain inference. Initial L6/L7 10.5/10.8mm rims violate cross-gap intrusion. Conservative paired9.2mm rims pass the unchanged default90% criterion and aperture census. No gap-sag override, R/d/index repair, tuned scale or BFL replacement.

Native build, canonical ingest/geometry, aperture census and field audit passed their stated checks. Independent scalar paraxial calculation agrees with native EFL24.007580925mm; BFL38.325581792mm differs from retained printed38.16mm. All code and numerical evidence are fresh; no full integration success claimed.

## Outstanding

Closed 2026-11-15: the file was brought onto the current branch in the deployment validation below; the remaining checks run with the branch. Near-focus Table 7 not modeled (still open).

## 2026-11-15 — Deployment validation

An independent re-read of the patent page images (US 4,258,980 A, front page, Figure 1, Table 1 on PDF page 6, Table 7, claim 5 on PDF page 8 and the certificate of correction) checked all 16 radii, 8 thicknesses, 7 air spaces, 8 nd, 8 νd and the BFL. Claim 5 reprints Table 1 value for value. No mismatch was found, and the ×24 factor holds on every radius, thickness, air space and the image gap. The front page reads Jacob Moskovich, Vivitar Corporation, granted 31 March 1981, filed 26 November 1979.

Verdict: valid with notes. The Vivitar 24mm f/2 is listed as 8 elements in 8 groups with a 0.30 m minimum focus (about 1:10, the patent's close-focus target), and Moskovich's 1978 SPIE paper (DOI 10.1117/12.956635) uses the 24mm f/2.0 and 28mm f/2.0 Vivitar lenses as its examples. Which production version (Kino, Komine or another maker) carries this design is not confirmed, and no public construction diagram was found.

First-order check against the patent (normalized): EFL 1.0 / 1.0003; F1 −0.79 / −0.794; F2 0.99 / 0.9895; BFL 1.59 / 1.5969 paraxial; field 84° / 42.4° half-field traced to 21.65 mm.

Image plane: the printed gap 38.16 mm is kept. Longitudinal spherical aberration is −0.176 / −0.214 / −0.186 mm at the 0.5 / 0.7 / 0.85 zones, so the printed plane, 0.166 mm inside the paraxial focus, is the zonal best focus; transverse error there stays under 0.02 mm out to the 0.9 zone. The printed BFL also equals the paraxial value truncated to two decimals (1.5969 → 1.59). A misprint scan of 1,411 single-value variants (one digit changed, adjacent digits swapped, sign reversed, ×10 and ÷10, on every R, T, S and nd) found no change that restores EFL 1.000 and BFL 1.59 with better correction. The prescription stands as printed.

Aperture: the earlier "f/2.0154" figure in the lens notes was wrong for the real beam and has been corrected there. The full f/2 marginal ray (entrance height 6.00 mm) reaches 9.83 mm at the stop and has −1.42 mm of longitudinal spherical aberration, while the stop radius derived from the paraxial f/2 is 8.66 mm. The real ray that just passes that stop enters at 5.48 mm, so the model admits about f/2.19 on axis. This follows from the printed prescription, not from the transcription.

Index reference: d line. The printed pairs agree with Schott LaK14, SK14, SF1, SF6 and LaK21 at the d line.

Changes:

- File header: package notes → a plain header stating source, scale, image plane, inferred stop and rims.
- `source.patentNumber`: "US 4,258,980" → "US 4,258,980 A" (house form).
- Surfaces 13 and 14 `sd`: 9.2 → 9.3. The aperture audit asked for 9.3 on surface 14 and one height for the pair; 9.3 is the smallest value that clears.
- `catalog.lensMounts`: added nikon-f, canon-fd, minolta-sr, konica-ar, olympus-om, pentax-k, m42, contax-yashica. Source: the allphotolenses.com entry for the Vivitar 24 mm f/2 MC (Kino), https://allphotolenses.com/lenses/item/c_1875.html, which lists these mounts but no element count; the 8 elements / 8 groups figure for both filter-size versions comes from https://apotelyt.com/camera-kit/vivitar-catalog. Both are lens databases, not maker documents.
- `catalog.closeFocusM.marketing`: added 0.3 (same two listings).
- Lens notes: the aperture sentence, the L7 rim value and the mount sentence corrected to match.

After the changes: EFL 24.008 mm, f/2 (stop radius 8.664 mm), paraxial back focus 38.326 mm against the stored 38.16 mm. Geometry validation passes with no errors. The aperture audit reports no rim limit and no surface below the on-axis ray. Image circle: 0 undersized. Field coverage: 100%, 42.4° to 21.65 mm of 21.65 mm.

Open:

- Name: closed in the cleanup pass below ("Compact" dropped; key, name, subtitle and specs reworded).
- Glass labels: closed in the cleanup pass below.
- Rims of L6 and L7: closed in the semi-diameter pass below.
- Mounts rest on a database listing; confirm against a Vivitar catalogue if one becomes available.
- The patent's 1:10 focus state (Table 7, S4 = .135 normalized) is not modeled.
- Lens notes wording: closed in the cleanup pass below.

## 2026-11-15 — Cleanup and wording pass

Public text and labels only; no radius, thickness, index, stop position, rim or gap was changed.

Fields changed in the data file:

- `subtitle`: "US 4,258,980 Table 1 — representative patent, production identity unconfirmed" → "US 4,258,980 A, Table 1 — construction-based association with the Vivitar 24mm f/2".
- `specs`: "8 ELEMENTS / 8 GROUPS", "24× NORMALIZED TABLE 1", "F/2", "84° PATENT FIELD", "INFINITY ONLY" → "8 ELEMENTS / 8 GROUPS", "DESIGN f = 24.01 mm", "DESIGN F/2", "ALL SPHERICAL", "MINIMUM FOCUS 0.3 m".
- `focus.description`: now states infinity focus only, the unmodeled 1:10 state of Table 7 and the 0.3 m production minimum. `focus.closeFocusM` stays 1e15 and `catalog.closeFocusM.marketing` stays 0.3.
- Element `role` added to all eight elements; L5 `type` "Plano-convex Positive" → "Plano-Convex Positive".
- Header comment: glass paragraph added, product-link line reworded.
- "Compact" removed from this log's title and from the lens notes: no Vivitar document that could be read supports the word.

Glass relabels (catalog row against the printed pair; a three-decimal nd is exact at that precision):

- L1, L2: "Unmatched (nd=1.697, νd=55.5)" → LAC14 (HOYA), 1.69680 / 55.46, Δνd −0.04.
- L3, L5: "Unmatched (nd=1.603, νd=60.7)" → BACD14 (HOYA), 1.60311 / 60.69, Δνd −0.01.
- L4: "Unmatched (nd=1.717, νd=29.5)" → SF1 (SCHOTT), 1.71736 / 29.51, Δνd +0.01.
- L6: "Unmatched (nd=1.805, νd=25.5)" → SF6 (SCHOTT), 1.80518 / 25.43, Δνd −0.07.
- L7, L8: "Unmatched (nd=1.640, νd=60.2)" → LACL60 (HOYA), 1.64000 / 60.20, Δνd 0.00.

Schott LaK14 (55.41) and SK14 (60.60) also fall inside the tolerance for the first two pairs; the Hoya rows are closer and were chosen. LaK21, suggested in the deployment validation, is 1.6405 / 60.1 and is not an exact row for 1.640 / 60.2, so LACL60 is used. All five labels resolve in the glass catalog. No element carries an anomalous-dispersion tag, and the maker publishes no special-glass positions.

Cemented pairs: none; `doublets` stays empty. Groups G1 (surfaces 1–6) and G2 (7–16) keep the patent's names.

Lens notes: title added; process wording, the per-element boilerplate, the private-evidence references and the "Verification Summary" heading removed (now "Model Scope and Limitations"); patent conditions, glass table, focus description from Table 7 and the f/2.19 real-beam note written in plain terms; the brochure is no longer cited for the element count or field, which rest on the patent and the catalog listing.

Engine numbers before and after (identical): EFL 24.00758 mm, f/2, half-field 40.048°, stop radius 8.66413 mm, paraxial back focus 38.3256 mm against the stored 38.16 mm. Geometry validation passes with no errors; the aperture audit reports no rim limit.

Open:

- Product link: no maker cross-section found; which production version (Kino, Komine or another supplier) carries this design is not confirmed.
- The Vivitar brochure listed in the lens notes' sources was not re-read (the file is too large for the reader used); its 8 elements / 8 groups and 84° figures are the original author's reading.
- Mounts rest on a lens-database listing; confirm against a Vivitar catalogue if one becomes available.
- Rims of L6 and L7: closed in the semi-diameter pass below.
- The model admits about f/2.19 of real beam on axis because the stop radius is the paraxial f/2 value.
- The patent's 1:10 focus state (Table 7, S4 = .135 normalized) is not modeled.

## 2026-11-15 — Semi-diameter pass against the patent figure

Source: US 4,258,980 A, drawing sheet 1 (PDF page 2), FIG. 1, which draws the Table 1 form. Measured on the native 300 dpi raster.

Scale: first to last vertex is 1,003 px for 50.016 mm, 20.05 px/mm. Single spans give 19.2 (L4 thickness), 19.7 (S2 air space), 19.8 (L5 thickness), 20.7 (L1 thickness) and 21.9 px/mm (S5 air space), so the figure is to scale within about 10 %. The spacing inside the L6–L7 pair is drawn loosely (L7 is drawn 5.6 mm thick against 4.06 mm), though R11 to R14 as a whole is right (150 px for 7.49 mm). The iris tick sits 28.6 mm behind the front vertex against the model's 28.88 mm, which supports the mid-gap stop position.

Rim readings (top and bottom of the figure) against the file:

| Element | Surfaces | File before | Figure | File after | Note |
| ------- | -------- | ----------- | ------ | ---------- | ---- |
| L1 | 1, 2 | 18.4 | 18.5–18.9 | 18.4 | kept, within 3 % |
| L2 | 3, 4 | 14 (rear curve to 11.4, land to 14) | 14.2–14.3; curve ends near 10.9 | unchanged | kept; the land is drawn |
| L3 | 5, 6 | 7.8 | 7.8–7.9 | 7.8 | kept |
| L4 | 7, 8 | 10 | 10.2 | 10 | kept |
| L5 | 9, 10 | 10.5 | 10.7–10.8 | 10.5 | kept |
| L6 | 11 | 9.2 | 10.2–10.6, square | 10.4 | raised to the figure |
| L6 | 12 | 9.2 | meets L7 at the rim | 9.6, land to 10.4 | contact-limited |
| L7 | 13 | 9.3 | meets L6 at the rim | 9.6, land to 10.6 | contact-limited |
| L7 | 14 | 9.3 | 10.6–11.2, square | 10.6 | raised to the low end of the figure reading |
| L8 | 15, 16 | 12.5 | 12.5–12.8 | 12.5 | kept |

L6 and L7 were 11 to 20 % below the figure, and the real f/2 marginal ray also asks for more (9.26, 9.76, 9.75 and 10.21 mm on surfaces 11 to 14). Surfaces 12 and 13 curve toward each other across the 1.656 mm air space and touch at 9.74 mm, which is why the figure draws the two elements meeting at the rim and why the earlier 10.5 / 10.8 mm trial failed. Their curved faces now end at 9.6 mm, where the two sags take 97.1 % of the air space, and flat lands (`rimExtensionSd`) carry the square rims the figure draws. `checks.gapSagFrac` is set to 0.98, the smallest two-decimal value that admits 9.6 mm; the faces do not cross. A 9.7 mm cap would need 0.992 and is not used.

Illumination, wide open at infinity (geometric, percent), before → after: 2.8° 98.1 → 100; 14.1° 87.0 → 96.9; 28.2° 56.1 → 70.1; 36.7° 33.7 → 47.9; 39.5° 25.3 → 37.1; 42.4° 11.2 → 18.6. No field loses light; the largest gain is 15.2 points. The two lands cost nothing: removing them changes no field.

Engine numbers are unchanged: EFL 24.008 mm, f/2, half-field 40.05°, stop radius 8.664 mm. Geometry validation passes with no errors, the aperture audit reports no rim limit, the image-circle check finds nothing undersized, and field coverage is 100 % (42.4° to 21.65 mm).

Metadata: `aperture.blades` 6 added, from the allphotolenses.com listing for the Kino-made Vivitar 24 mm f/2 MC (https://allphotolenses.com/lenses/item/c_1875.html), the same listing that gives the mounts, the f/16 minimum aperture and the 0.3 m minimum focus.

Product name: collector listings and dealer pages call the Kino-made version "Vivitar 24mm f/2 Auto Wide-Angle" and the Komine-made version "Vivitar 24mm f/2 MC Wide Angle" (forum.mflenses.com, kamerastore.com, pentaxforums.com); the exact ring engravings were not seen. The display name "VIVITAR 24mm f/2" covers both and claims no version. No Vivitar catalogue page could be read to settle a fuller official name.

Open:

- Surfaces 12 and 13 still sit below the full f/2 real marginal ray (9.76 mm against a 9.74 mm contact height). This is the printed prescription, not a rim choice.
- The iris tick in FIG. 1 reads about 9.2 mm in semi-diameter, between the paraxial f/2 stop (8.66 mm) and the real-ray f/2 stop (9.83 mm). No stop change is made; the stop radius follows the stated f/2.
- Blade count and mounts rest on a database listing and may differ between production versions.

## 2026-11-15 — Second review on the local site

Compared: the local page (diagram, brackets, element inspector for all eight elements) against US 4,258,980 A, FIG. 1 (PDF page 2, 300 dpi raster, 20.05 px/mm), Table 1, Table 7 and the description on PDF page 5.

Change: `focus.description` said the four rear elements "move ahead of the front four". The patent says all elements move forward while the last four move differentially at a faster, linear rate, and Table 7 gives S4 = .135 at 1:10 against .155 at infinity. The text now reads "all elements move forward and the four rear elements L5-L8 move faster, closing the air space between L4 and L5". No rim, land, label or number was changed.

Rims, re-read independently from FIG. 1 (top / bottom, mm): L1 18.9 / 18.5 (file 18.4); L2 14.3 / 14.2 (14); L3 7.9 / 7.8 (7.8); L4 10.1 / 10.2 (10); L5 10.7 / 10.9 (10.5); L6 10.2 / 10.6 (10.4); L7 10.7 / 11.2 (10.6); L8 12.5 / 12.8 (12.5). Every element is within 5 % and the drawn step order (L5 and L7 slightly above L6, L8 above all three) is kept. The figure draws L6 and L7 touching at a height of about 9.6 mm, below their square rims.

L6 and L7 on the page: the two elements meet at the rim without overlapping. At the 9.6 mm cap height the facing sags are 0.813 mm and 0.795 mm of the 1.656 mm air space, leaving 0.048 mm between the two flat lands; the surfaces themselves would touch at 9.74 mm.

Lands (surface 4 to 14 mm, surface 12 to 10.4 mm, surface 13 to 10.6 mm): against the rims before the semi-diameter pass no field loses light (worst loss 0.0 points, largest gain 15.2 points at 33.9°), and restoring any of the three elements wins back 0.0 points. All three lands are drawn in FIG. 1 and stay. No face sits below its earlier value.

Labels: the description names the groups G1 (L1–L3, negative) and G2 (L4–L8, positive, iris between L4 and L5); the figure letters them GP1 and GP2. The brackets G1 (surfaces 1–6) and G2 (7–16) are right and do not collide with the element numbers. Element types agree with the signs of the radii and with the patent's wording (L5 "convex to the image", L7 "positive meniscus convex to the image"). Stored focal lengths agree with the computed values to 0.01 mm. No cemented pair, no asphere, no anomalous-dispersion tag; none is called for.

Movement: infinity only, no variable gap, slider shows "Not modeled".

Distortion against FIG. 3A (Table 1, infinity): model −2.74 % at 31.49°, −2.85 % at 35° and −2.40 % at 39.24°; the plot reads about −2.7 %, −2.8 % and −2.3 %. The patent prints no colour curves.

Glass: all five labels resolve and agree with the printed pairs at the printed precision. Rounded to one decimal, every printed Abbe number equals the HOYA catalog value of the period (LaC14 55.5, BaCD14 60.7, FD1 29.5, FD6 25.5, LaCL60 60.2), while Schott LaK14 (55.4), SK14 (60.6) and SF6 (25.4) do not, and 1.640 / 60.2 exists only as LaCL60. The design was therefore most likely drawn from the HOYA catalog, which fits a lens built in Japan. The glass catalog holds no leaded HOYA FD1 or FD6 row (only the later lead-free E-FD1 and FD60), so SF1 and SF6, the same glass types with νd within 0.07, stay as the labels for L4 and L6.

Engine numbers before and after (identical): EFL 24.008 mm, f/2, stop radius 8.664 mm, half-field 40.05°. Geometry validation passes with no errors; the aperture audit reports no rim limit; image circle 0 undersized; field coverage 100 %.

Assignee: "Vivitar Corporation" matches the patent front page and the spelling used elsewhere in the catalog.

Open:

- L4 and L6 would be better labelled FD1 and FD6 (HOYA) if leaded HOYA rows for those two glasses are ever added to the glass catalog.
- Surface 4's curved cap (11.4 mm) is above the figure's drawn curve end (about 10.5 mm at the top, 9.0 mm at the bottom of a hand-drawn figure); it is the earlier value and lowering it would be a cut, so it stays.

## 2026-11-24 — production-match review

- PhotonsToPhotos Optical Bench lists "Vivitar 24mm f2 Compact", US 4,258,980, Example 1: the same patent and example as this model. This validates the choice of source; it is not a maker confirmation.
- The lens is classed as a production match in the Lens Library.
