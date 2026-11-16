# Audit scope
Source9R/8D/glass transcription independently reviewed against official screenshots. SK6 corrected secondary attribution, not source values. Scoped native canonical errors[]; all sampled pupil rays retained. Fresh independent final-module review accepted scoped qualified pre-integration; see FINAL_INDEPENDENT_REVIEW.md.

Inherited verified diagnostics: 6496skew samples at8fields; original source image and source/product bridge checks; paraxial/scalar independent calculations. Fresh controls: no geometry/image-plane change over0,.5,1. None of these proves exact manufactured boundaries, measured performance, continuous pupil transmission, polychromatic MTF or full app readiness.

Completed: final module strict typecheck/import parity and independent triad acceptance. Pending gate: private archive full readback. Integration-deferred: current-main corpus/full app/compiler viewer/browser QA. Source limitation: official screenshots instead of downloadedPDF. Archive dedup coverage limitation retained. Final qualification decision belongs to production owner; no delivery before next nine-family group.

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

Open:

- File name, key and `name` still say "Representative"; element names are "Published glass N" although the patent
  prints the glasses (BaK2, BaK2, SK6, F6, SK2); `glass` labels, element types, groups, subtitle and specs are missing.
- The earlier sections of this file and the analysis are written in delivery-process language and describe the
  source as screenshots; the full patent PDF has since been read, so that wording should be rewritten.
- Rims are smaller than the figure draws (front element about 58 mm against 48, second about 27 against 21.5,
  doublet about 12 against 7, rear lens about 24 against 21.5); widening would be needed only for fields beyond 93°.
- `AEG` is a new maker and needs an entry in the maker-prefix list.
- `visible` is still `false`.
