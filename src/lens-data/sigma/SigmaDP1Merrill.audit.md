# Sigma DP1 Merrill patent and semi-diameter audit

## 2026-11-09 — Example 4 transcription and inferred rims

Source re-read: all 20 rows on PDF pp. 14–15, both asphere tables, Fig. 10 (PDF p. 25) and Sigma's catalog drawing. Kept as printed: 18.82 mm / F2.89 with no scaling, nine elements in eight groups, the stop at 6.10 / 2.20 mm, the 1.20 mm filter plate and the 4.9327 mm image gap. Example 4 is a probable match, not a confirmed factory prescription; Examples 3 and 7 remain alternatives. Infinity only.

Fig. 10 at 400 dpi: first to last vertex 608 px = 39.85 mm (15.257 px/mm). First outline readings were 12.1, 9.2, 6.9, 6.9, 8.3, 9.1, 9.3, 11.2 and 14.4 mm. S4 and S15 are drawn with flat lands. S4's clear radius of 5.2 mm is at the rim-slope limit; its blank stays at the drawn 9.2 mm. The cemented pair's 6.1 mm rims respect the S7 radius and the slope limit.

First attempt rejected: 9.3 mm clear radii on S14 and S15 give 8.969 mm of combined sag across the 6.63 mm gap, so the figure is schematic there; this is not an error in the prescription. Adopted: L7 at 7.8 mm on both faces and S15 at 7.8 mm clear on an 11.2 mm blank, inside the default 90 % gap bound of 7.880 mm. No gap-sag override and no prescription change.

Result: the stop (radius 3.4101 mm) limits the axial beam at F2.89; the iris stays in air over its full travel; no image-circle shortfall; the chief ray clears the format corner. At the patent's 37.59° edge about two-thirds of the f/2.89 beam passes the rims. The drawn section agrees with Fig. 10 in topology and lands; L7 is drawn lower than in the figure because the figure's height cannot be built. Chromatic MTF was then blocked by the unlabelled νd 95.1 glass (closed in the cleanup pass below).

## 2026-11-09 — Deployment validation

Independent check against JP 2013-137377 A Example 4 (PDF pp. 14–15): 18 surfaces plus the stop, both aspheres
(K, A4–A10), the filter and the 4.9327 image gap agree; scale 1. Engine EFL 18.821, F/2.89, BF 4.9326, TL 46.98;
group focal lengths and the three condition values reproduce. Front page: Sigma Corporation, inventor Atsushi
Yamazaki. Attribution: the DP1 Merrill lens is 9 elements / 8 groups with one FLD and two moulded aspheres; all
nine nd/νd pairs are exact Hoya rows including FCD100, and Example 4's symmetric biconvex last element matches
Sigma's catalog drawing better than Examples 2, 3 and 7.

Deployment change: none.

Open: glass labels (Hoya names); the 0.2 m close focus has no focus data; wording. (All three closed in the
cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file. Header comment rewritten in plain English with the same facts. `subtitle` "JP 2013-137377 A Example 4 —
probable DP1 Merrill family" → "JP 2013-137377 A, Example 4 — probable match to the 2012 DP1 Merrill lens". `specs`
now read 9 ELEMENTS / 8 GROUPS, DESIGN f = 18.82 mm, DESIGN F/2.89, 2 ASPHERICAL SURFACES / 2 ELEMENTS and 1 FLD
ELEMENT (the 2ω line was dropped). `catalog.closeFocusM.marketing` 0.2 added from Sigma's specification page. Focus is
static: `focus.closeFocusM` 0.2 → 1e15, since the patent prints only the infinity state and the 0.2 m value had no
focus data behind it; the description now says so in plain words. Group labels L1 / L2 → G1 / G2, as in the DP2 and
DP3 Merrill files, so they no longer collide with the element names. Roles added to all nine elements.

Glass. All nine "Unmatched" labels became Hoya catalog equivalents. Each row equals the patent's nd and νd (TAF1 by
0.01 in νd), and each label resolves to its row: TAFD30, FCD100, TAF3, E-FD15, TAF1, M-TAF401, E-F5, E-FEL2 and
M-LAC130. Element 2 is tagged `apd: "inferred"` because Sigma lists one FLD glass and its drawing marks that position;
FCD100's catalog θgF is 0.5336, about +0.050 above the normal line. With FCD100 resolved, the spectral-MTF blocker
for νd 95.1 is gone; only the patent's filter plate still uses an nd/νd estimate.

Analysis. Removed package and process material: custody notes, test and sample counts, grid sizes, best-focus
diagnostics and the statement that C/d/F MTF is unavailable. Added the product facts (September 2012 release, Sigma's
construction and special glasses, 0.2 m and 1:8.4), the attribution with its caveats and the comparison with the
other eight examples, the catalog-drawing comparison, focal lengths for each element, the glass table, the patent's
asphere form, and the five conditional expressions with model values (−0.442, 0.529, 1.175, 1.608, 1.046).

Engine, before → after: EFL 18.8212, F/2.89, half-field 32.11°, stop radius 3.4101 mm, paraxial back focus 4.9326 mm
and total length 46.9827 mm, all unchanged; only `closeFocusM` changed. Surface audit OK; the aperture audit finds no
rim limit.

Open: the diagram's default half-field is 32.11° because S15's 7.8 mm clear radius sets the paraxial limit, while the
real chief ray clears to the patent's 37.59° (7.55 mm at S15). Rims were left as they are in this pass.
