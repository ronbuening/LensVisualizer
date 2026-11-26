# Audit scope
Source9R/8D/glass transcription independently reviewed against official screenshots. SK6 corrected secondary attribution, not source values. Scoped native canonical errors[]; all sampled pupil rays retained. Fresh independent final-module review accepted scoped qualified pre-integration; see FINAL_INDEPENDENT_REVIEW.md.

Inherited verified diagnostics: 6496skew samples at8fields; original source image and source/product bridge checks; paraxial/scalar independent calculations. Fresh controls: no geometry/image-plane change over0,.5,1. None of these proves exact manufactured boundaries, measured performance, continuous pupil transmission, polychromatic MTF or full app readiness.

Completed: final module strict typecheck/import parity and independent triad acceptance. Pending gate: private archive full readback (closed 2026-11-15: superseded by the deployment validation below). Integration-deferred: current-main corpus/full app/compiler viewer/browser QA (closed 2026-11-15: the lens is in the catalog). Source limitation: official screenshots instead of downloadedPDF (closed 2026-11-15: the full patent PDF was read). Archive dedup coverage limitation retained. Final qualification decision belongs to production owner; no delivery before next nine-family group.

## 2026-11-15 — Deployment validation

An independent checker re-read the three page images of DE 620,538 (a scanned PDF with no text layer) and compared
them with the data file: all 9 radii, 8 spacings and 5 index / Abbe pairs of the patent's only numerical example, the
front-page bibliographic data, and the patent figure (element count, groups, the cemented doublet, the sign of every
surface, stop position). No transcription mismatch was found. The table is in millimetres and is used at 1:1.

Verdict: valid, with notes. The link to the real lens is strong: Leitz Photographica Auction lot 528 is an "AEG
Weitwinkelobjektiv 6.3/1.7cm" (serial 301, about 1935, a cloud-recording camera with 6.5 x 9 cm backs) sold with a
copy of the patent letter dated 23 October 1935, the issue date of DE 620,538; the literature describes the patented
five-element, four-group design as built at 17 mm f/6.3.

What the patent does not print: it gives no focal length, f-number, back focus or field angle for the example. The
last gap (28.988 mm) is therefore the paraxial back focus at infinity, and f/6.3 is the nominal aperture of the
surviving lens. The figure places the image plane about 29 mm behind the last surface, which agrees. The stop is
placed at the r5 vertex; the figure draws it about 1 mm ahead of the doublet. The patent's own statements hold for
the model: r1 and r3 are concentric (centres 67.0 and 66.75 mm behind the front vertex), the centres of r2 and r4 lie
ahead of the stop, and d7 = 23.0 mm exceeds a quarter of the 90.2 mm vertex length. The printed indices are n_d;
BaK2 and SK2 match catalogue d-line values, so the "d" reference stands.

All semi-diameters are inferred. A separate meridional trace passes the chief ray and both rim rays of the f/6.3
beam through every surface from 0° to 90°; at 95° the front rim clips (49.4 mm needed, 48 mm stored), so the stored
rims cover about 93° half-field. The patent says fields up to 210° are attainable in general. Image height at 90° is
25.07 mm (image circle 50.14 mm), 4.3 % below f·θ, so the equidistant fisheye projection is the nearest kind. No rim
was changed.

The front page prints no inventor, so `authors` stays empty. The literature attributes the design to Hans Schulz of
the AEG research institute; that is a literature attribution only.

Changes made:

- File form: import path `../lens_recovery_20261112/...` → `../../types/lensDataV2.js`; `export default {` →
  `const LENS_DATA = {...}` with `export default LENS_DATA;`; the header comment was replaced by one that states the
  source, the 1:1 scale and which values are inferred.
- `source.patentNumber`: `DE 620538` → `DE 620,538 C` (house form).
- `source.example`: added, `Sole example` (the patent has one table).
- `source.assignees`: `Allgemeine Elektricitats-Gesellschaft` → `Allgemeine Elektricitäts-Gesellschaft` (front-page
  spelling); the same spelling was corrected in the analysis.
- `catalog.imageFormat`: added `6x9` (the surviving camera takes 6.5 x 9 cm plates and a 6 x 9 roll-film holder; the
  50 mm image circle is a full circle inside that frame).
- `catalog.lensMounts`: added `fixed-lens-camera` (the lens was built into a dedicated cloud camera).
- `catalog.focalLengthMm.design`: `16.67540071582021` → `16.6754` (rounding only).
- No prescription value, semi-diameter or gap was changed.

After the changes: focal length 16.6754 mm, f/6.3, stop semi-diameter 3.211 mm, back focus 28.988 mm, total length
119.188 mm. Surface validation reports no errors; the aperture audit reports no surface below the on-axis beam; the
image-circle audit reports the lens not undersized for 6x9; the field-coverage audit does not apply to fisheye
projections and skips it.

Analysis rewritten to the house section skeleton.

Open:

- File name, key and `name` still say "Representative"; element names are "Published glass N" although the patent
  prints the glasses (BaK2, BaK2, SK6, F6, SK2); `glass` labels, element types, groups, subtitle and specs are missing.
- The earlier sections of this file and the analysis are written in delivery-process language and describe the
  source as screenshots; the full patent PDF has since been read, so that wording should be rewritten.
- Rims are smaller than the figure draws (front element about 58 mm against 48, second about 27 against 21.5,
  doublet about 12 against 7, rear lens about 24 against 21.5); widening would be needed only for fields beyond 93°.
  (Closed 2026-11-15 by the semi-diameter pass below.)
- `AEG` is a new maker and needs an entry in the maker-prefix list.
- `visible` is still `false`.

## 2026-11-15 — Cleanup and wording pass

The files were renamed to `AEGWeitwinkelobjektiv17mmf63.*` (key `aeg-weitwinkelobjektiv-17mm-f63`) and the lens made
visible before this pass. The Open items of the section above about the file name, key, `name`, element names, the
maker entry and `visible` are closed by that and by the changes below. No radius, spacing, index, Abbe number, stop,
semi-diameter or gap was changed.

Fields changed in the data file:

- `subtitle`: added, "DE 620,538 C, sole example — AEG cloud-camera wide-angle objective of c. 1935".
- `catalog.specs`: added, 5 ELEMENTS / 4 GROUPS, ALL SPHERICAL, F/6.3, ABOUT 180° FIELD.
- Element `name`: "Published glass 1…5" → L1…L5. `type`: "Lens" → Negative Meniscus (L1, L2, L4) and Biconvex
  Positive (L3, L5), from the signs of the radii. `role` and `focalLengthMm` added (−83.72, −32.46, +12.68, −21.2,
  +60.3 mm, each element alone in air).
- `cemented: "C1"` on L3 and L4, with a `doublets` entry C1 over surfaces 5 to 7; `groups` brackets "A + B"
  (surfaces 1 to 4) and "C + D" (surfaces 5 to 9), after the patent's lens letters.
- `focus.description`: reworded to "Infinity focus only; …". `focus.closeFocusM` was already the 1e15 placeholder.
- Header comment: added the glass and projection notes.

Glass labels (printed value against the catalog row):

- L1, L2: none → "BaK2 (Schott, as printed; Sumita BAK2 catalog curve)". Row 1.53996 / 59.7, Δnd −0.00004,
  Δνd +0.1. The row found for this glass type is Sumita's; the patent's glass is Schott's of 1932.
- L5: none → "SK2 (Schott, as printed; N-SK2 catalog curve)". Row 1.60738 / 56.65, Δnd −0.00002, Δνd −0.05.
- L3: none → "Unmatched (SK 6 as printed; nd 1.6138 / νd 56.3)". No catalog row for SK 6.
- L4: none → "Unmatched (F 6 as printed; nd 1.6364 / νd 35.4)". No catalog row for F 6.

No anomalous-dispersion tag applies to any element.

Engine numbers before and after are identical: focal length 16.6754 mm, f/6.3, half-field 90°, stop semi-diameter
3.2107 mm, back focus 28.988 mm, total length 119.188 mm. Surface validation reports no errors; the aperture audit
reports the one station within 3 % of the stated f-number with no rim, trace or iris limit; the field-coverage audit
skips fisheye projections.

Analysis: title line added, element headings renamed to L1…L5, the glass paragraph updated for the new labels, and
the "Verification Summary" heading renamed "Patent Values and the Model".

Open:

- Rims are smaller than the patent figure draws (front element about 58 mm against 48, second about 27 against
  21.5, doublet about 12 against 7, rear lens about 24 against 21.5). They pass the full beam to 90° and cover
  about 93°; a rim pass against the figure is still to do. (Closed 2026-11-15 by the semi-diameter pass below.)
- The stop is modelled at the r5 vertex; the figure draws it about 1 mm ahead.
- No minimum focus distance is known for the camera, so `catalog.closeFocusM` is not set.
- Closed 2026-11-15: L3 is labelled "SK6 (Schott, as printed; HOYA BACD6 catalog curve)" (Δnd −5e-5, Δνd +0.08) and L4 "F6 (Schott, as printed; HOYA F6 catalog curve)" (Δnd −4e-5, Δνd −0.06); the HOYA F6 legacy row was added to the glass catalog for it.
- The older opening section of this file keeps its original delivery wording as history.

## 2026-11-15 — Semi-diameter pass against the patent figure

Source: DE 620,538, page 3 (the single drawing sheet), read from the 300 dpi scan.

Scale. The drawing is at full size. Along the axis, the first vertex to the last vertex measures 90.8 mm against the
table's 90.2 mm, the front vertex to the doublet 50.4 mm against 49.7 mm, and the last vertex to the image line
30.1 mm against 28.99 mm, all within 4 %. Across the axis, three features with a known size fix the scale: the cavity
of the front element (a hemisphere of radius 26.5 mm), the cavity of the second element (radius 12.26 mm) and the
knife edge of the rear lens (the two faces meet at 24.0 mm). All three read about 3 % large, so the heights below
are the raw readings reduced by 3 %.

| Surface | Before | Figure | After | Evidence |
|---|---|---|---|---|
| 1 (front of L1) | 48 | 57 to 58 | 54 | Tip of the front element, by height and by its axial position on the 67 mm arc. Limited to 54: see below. |
| 2 (cavity of L1) | 26.4, land to 48 | 26.5, land to the tip | 26.4, land to 54 | A full hemisphere in the drawing; kept just inside the radius. The land follows surface 1. |
| 3 (front of L2) | 21.5 | 26.4 | 26.4 | The second element is drawn as tall as the first cavity. |
| 4 (cavity of L2) | 12.2, land to 21.5 | 12.2, land to the rim | 12.2, land to 26.4 | A full hemisphere; kept. The land follows surface 3. |
| 5 (front of L3) | 7 | 7.7 | 7.7 | Flat front face of the doublet. |
| 6 (cemented) | 7 | 7.7 | 7.7 | The cemented surface ends where the front face ends. |
| 7 (rear of L4) | 7 | 12.0 | 12 | The flint is drawn with a conical chamfer from the front face out to a 12 mm rear rim. |
| 8, 9 (L5) | 21.5 | 23.8 | 23.8 | Drawn to a knife edge; edge thickness in the model is 0.16 mm. |

Every change is a raise toward the drawing; no rim was reduced. The front element stops at 54 mm, not 57 to 58 mm:
the model's flat land lies in the plane of the cavity rim (27.7 mm behind the front vertex), and the 67 mm front arc
reaches that plane at 54.2 mm. The drawing continues the cavity about 5 mm further back as a short cylinder before
the flat begins, which the land model cannot represent. The two cavity rims stay at 26.4 mm and 12.2 mm, just
inside their radii, within the 85.1° rim-angle limit already set.

Results. Focal length 16.6754 mm, f/6.3, stop semi-diameter 3.2107 mm and the engine's 90° half-field are unchanged.
Surface validation reports no errors, the aperture audit reports no rim limit, and the image-circle audit reports
the lens not undersized. The engine's vignetting tools do not support the fisheye path, so the field was measured
with a separate meridional trace: the chief ray passed to 92.25° before and passes to 95.5° now; the full f/6.3
beam passed to 90° before and passes to 92° now. Share of the meridional beam passing at 91°, 92°, 93°, 94° and 95°:
76, 41, 10, 0 and 0 % before; 100, 100, 88, 73 and 59 % now. Inside 90° nothing changed (100 % before and after).
The limit is now the rim of the front element's hemispherical cavity (surface 2), which is source geometry.

Stop. The drawing shows the stop plate about 0.75 mm ahead of the front vertex of the doublet; the model has it at
the vertex. The difference is small and at the limit of what the drawing resolves, and the stop was not moved.

Metadata. Nothing was added: no period source gives a minimum focus distance or a number of aperture blades. The
auction description calls the lens "AEG Weitwinkelobjektiv 6.3/1.7cm", and the patent and the 1932 paper by H. Schulz
call it a "Weitwinkelobjektiv", so the current display name agrees with the sources.

Open:

- The front element is 54 mm against the drawn 57 to 58 mm, for the reason given above.
- The stop is at the doublet vertex; the drawing suggests about 0.75 mm ahead of it.
- No minimum focus distance is known.

## 2026-11-15 — Second review on the local site

Compared: the lens page on the local site (diagram, the five element inspectors, the distortion and vignetting tabs)
with DE 620,538 page 3 (drawing, 300 dpi scan, the doublet re-read at 600 dpi) and the table on page 2.

Table. All 9 radii, 8 spacings and 5 index / Abbe pairs were read again from page 2 and agree with the file.

Rims, read again and independently (raw readings reduced by 3 %, as in the section above):

| Feature | Stored | This reading | Verdict |
|---|---|---|---|
| Front element tip (surface 1) | 54 | 57.2 above the axis, 57.7 below | kept; see below |
| Second element rim (surface 3) | 26.4 | 26.5 | kept |
| Doublet front face (surfaces 5, 6) | 7.7 | 7.6 above, 7.8 below | kept |
| Doublet rear rim (surface 7) | 12 | 11.8 above, 12.5 below | kept |
| Rear lens (surfaces 8, 9) | 23.8 | 24.1 | kept |
| Cavity of the second element (surface 4) | 12.2 | 11.7 to 12.3 | kept |

No rim was changed. On the page the two cavities draw as near hemispheres with flat lands, the second element as a
square-topped block, the doublet with its conical chamfer and the rear lens to a knife edge, all as the drawing has
them. Step order between neighbours matches the drawing.

Front element. The page ends it at 54 mm and leaves 4.7 mm of air between its land (27.7 mm behind the front vertex)
and the rim of the second element (32.4 mm); the drawing brings the land back to 31 to 33 mm, where the second
element seats against it. A land sits at the sag of its cap's last point, so the only way to move it back is to bring
surface 2 nearer its 26.5 mm radius: 26.49 mm would put the land at 29.3 mm and the tip at 55.4 mm, but needs a
rim-angle limit of 89° in place of 85.1° (the surface check refuses it at 88.4°). That recovers 1.4 mm of a 3.5 mm
shortfall for a rim 0.01 mm inside a hemisphere, so it was not done.

Lands. Both lands (surface 2 out to 54 mm, surface 4 out to 26.4 mm) lie outside caps whose semi-diameters equal the
baseline's, so they block no ray the baseline passed; every other rim is at or above its baseline. The light-cost
tool does not run on a fisheye projection (it prints no fields). The lands are what closes each element's outline
behind a hemispherical cavity, and the drawing shows both. Kept.

Labels and inspector. Brackets "A + B" and "C + D" use the patent's lens letters (A, B, C, D; X is the stop, Y the
image) and span surfaces 1 to 4 and 5 to 9; C1 spans 5 to 7; none collides. Element types agree with the signs of
the radii; the inspector focal lengths (−83.72, −32.46, +12.68, −21.2, +60.3 mm) agree with a fresh thick-lens
calculation, and the doublet is +33.64 mm. Changed: the role text of L3 said "patent member C", although C is the
whole cemented lens; L3 now reads "front half of patent lens C" and L4 "rear half of patent lens C". No
anomalous-dispersion tag applies and none is set.

Glass. All five labels resolve to exact rows: BAK2 (Sumita) Δnd −3.8e-5 / Δνd +0.08, BACD6 (HOYA) −4.7e-5 / +0.08,
F6 (HOYA) −4.4e-5 / −0.06, N-SK2 (Schott) −1.9e-5 / −0.05. No constant medium; colour is traced for every element.
The patent prints no line indices beyond n_d and no aberration curves.

Field and projection. The distortion tab traces the field to the 25.07 mm edge (90°) and shows −4.22 % against the
equidistant law at the edge, in step with the 4.3 % in the notes. The off-axis ray fan on the diagram is drawn at
54° (the default 0.6 of the half-field), not at 90°. The vignetting tab states that it is not computed for a
fisheye projection.

Movement. Infinity only: `gaps` is empty, the focus slider is disabled ("Not modeled") and `focus.description`
says only what the patent says.

Assignee. "Allgemeine Elektricitäts-Gesellschaft" is the front-page spelling ("Allgemeine Elektricitäts-Gesellschaft
in Berlin"); no other spelling of it exists in the lens data.

Open:

- The front element is 54 mm against the drawn 57 to 58 mm, and its land stands 4.7 mm ahead of the second element's
  rim where the drawing seats one on the other.
- The stop is at the doublet vertex; at 600 dpi the middle of the drawn stop plate is 0.9 mm ahead of it (plate about
  0.85 mm thick), so 0.75 to 1 mm.
- The diagram's off-axis fan is at 54°, so the page does not show a 90° ray through the cavities.
- No minimum focus distance is known.
