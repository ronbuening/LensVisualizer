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
- Rims of L6 and L7 (9.2 and 9.3 mm) are inferred and smaller than the full f/2 real ray needs (9.3 to 10.2 mm on surfaces 11–14); they vignette the corner heavily (64% of one side at surface 14). Compare with Figure 1 in the rim pass.
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
- Rims of L6 and L7 (9.2 and 9.3 mm) are inferred and smaller than the full f/2 real ray needs (9.3 to 10.2 mm on surfaces 11–14); they vignette the corner heavily. Compare with FIG. 1 in the rim pass.
- The model admits about f/2.19 of real beam on axis because the stop radius is the paraxial f/2 value.
- The patent's 1:10 focus state (Table 7, S4 = .135 normalized) is not modeled.
