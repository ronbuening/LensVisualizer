# Vivitar 24mm f/2 Compact — construction audit

2026-11-15. New independent transcription, not inherited validation. Pin: 70600ffc23af48a81994cf8fc834048fdf9d21a1.

## Source checks

Original US4258980 PDF page 6 Table 1 visually checked against the machine-readable patent HTML. All 16 R, eight T, seven internal S, BFL, eight nd and eight νd values agree. Original PDF page 2 Figure 1 inspected for iris position and outer-land convention. Literal table and independent matrix computation are in the reproducibility evidence. Nothing from Table 2 (28mm association) was used.

## Trials and final disposition

Initial schematic-style equal L2 14 mm rims fail spherical rim-slope validation (R4=12.72mm). Equal 11.4mm rims pass but clip the corner at surface3. Final front14/rear11.4, rear outer-land14 model uses the Figure1 flat-land shape; exact dimensions remain inference. Initial L6/L7 10.5/10.8mm rims violate cross-gap intrusion. Conservative paired9.2mm rims pass the unchanged default90% criterion and aperture census. No gap-sag override, R/d/index repair, tuned scale or BFL replacement.

Native build, canonical ingest/geometry, aperture census and field audit passed their stated checks. Independent scalar paraxial calculation agrees with native EFL24.007580925mm; BFL38.325581792mm differs from retained printed38.16mm. All code and numerical evidence are fresh; no full integration success claimed.

## Outstanding

Current-main integration, full-corpus typecheck/lint/tests, production-render trim sweep and compiled browser QA not run. Near-focus Table7 not modeled. Private Drive archival/readback to be performed by coordinator; no verified-backup claim here.

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

- Name: the word "Compact" is not confirmed; the Vivitar brochure the lens notes cite could not be read during validation. Key, name, subtitle and specs wording ("24× NORMALIZED TABLE 1", "INFINITY ONLY") need the cleanup pass.
- Glass labels read "Unmatched"; LaK14, SK14, SF1, SF6 and LaK21 fit the printed pairs.
- Rims of L6 and L7 (9.2 and 9.3 mm) are inferred and smaller than the full f/2 real ray needs (9.3 to 10.2 mm on surfaces 11–14); they vignette the corner heavily (64% of one side at surface 14). Compare with Figure 1 in the rim pass.
- Mounts rest on a database listing; confirm against a Vivitar catalogue if one becomes available.
- The patent's 1:10 focus state (Table 7, S4 = .135 normalized) is not modeled.
- The lens notes still carry hand-off wording and repeated per-element boilerplate.
