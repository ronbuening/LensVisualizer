# Audit log — Merté wide-angle objective, US 2,126,126 Figure 1

## Source

US 2,126,126 A, "Photographic Objective", Willy Merté, assignor to the firm Carl Zeiss, Jena; filed 27 November 1936, German priority 26 November 1935, granted 9 August 1938. The model is Figure 1 with Table 1. Figure 2 with Table 2 is a second example and is not modelled.

## Transcription

Radii, thicknesses, air spaces, indices and ν values are kept as printed for a total focal length of 100 mm, with the printed signs. The diaphragm distances b1 = 110.28 mm and b2 = 2.36 mm are printed, so the stop position is a source value. L3 and L4 are cemented.

## First-order results

Paraxial focal length 100.12 mm against the stated 100 mm (+0.12 %); no value was adjusted to remove the difference. The last spacing is the computed paraxial back focus, 157.88 mm; the patent prints none. A second, separately written paraxial and real-ray calculation by the original author agreed with the viewer's results.

## Inferred values

The patent prints no diameters, no back focus and no projection law. Rims are estimates. The original delivery used 30 mm for the front element and 10 mm elsewhere, after 12 mm rear rims made L2 and L3 overlap at the edge.

## Duplicate check

No other file in the collection uses US 2,126,126, its German counterpart DE 672 393 or this prescription. Whether DE 672 393 prints identical numbers was not checked.

## 2026-11-17 — Deployment validation

Checked by an independent re-read of the patent page images (drawing sheet 1 and the Table 1 text page at 300 dpi): 7 radii, 7 thicknesses and spacings including b1 and b2, 4 indices and 4 ν values, the cemented surface, the stop position and the front page. No transcription mismatch was found.

Verdict: valid with fixes. The prescription is faithful and reproduces the stated focal length. The product link is plausible: Marco Cavina's "Sphaerogon type 1" listing for a 100 mm focal length gives the same radii, thicknesses and glasses, and a figure from Merté's own account captioned D.R.P. 672 393 / 1935 shows the same section; no factory drawing of a built lens was compared.

Changes:

- `source.patentNumber`: "US 2,126,126" → "US 2,126,126 A" (house form).
- `source.example.label`: "Example 1" → "Figure 1" (the patent labels its examples by figure and table; the data validator accepts only a term and a numeral, so "Figure 1 (Table 1)" could not be used).
- `source.assignees`: "Carl Zeiss Jena" → "Carl-Zeiss-Stiftung" (collection form for "the firm Carl Zeiss, Jena").
- Rims, surfaces 6 and 7: 10 → 11.3 mm. At 10 mm the f/8 axial beam was cut at surface 7 (needs 10.05 mm); 11.3 mm is what the chief ray of an 88° half-field needs there. Figure 1 draws about 14 mm.
- Rims, surface 1: 30 → 114.4 mm; surface 2: 30 → 92.8 mm. The 30 mm rims limited the model to a half-field of about 19° against the patent's roughly 90°. The new values are the chief-ray heights for an 88° half-field and are inside the Figure 1 readings (about 120 mm on the flat face, about 94 mm clear on the concave face).
- Surfaces 3, 4 and 5 stay at 10 mm; the air gap between 4 and 5 closes near 10.8 mm and the chief ray needs at most 6.5 mm there.
- `projection` added: equal-area fisheye, constant 100 mm, full field 180°, traced half-field 76°. The patent states the field and no projection law; the real mapping (94.1 mm at 60°, about 111 mm near 88°) lies between the orthographic and equal-area laws.
- Element types "Patent element" → plano-concave negative, positive meniscus, biconcave negative, biconvex positive; element focal lengths and short optical roles added; L3 and L4 tagged as cemented pair D1 and listed under `doublets`.
- `focalLengthMm.design`: 100.11860590080387 → 100.12; last gap 157.8809275731288 → 157.8809; `closeFocusM` written as 1e15.
- Specs line "INFINITY ONLY; FULL FIELD UNVERIFIED" → "INFINITY ONLY; ABOUT 180° FIELD PER PATENT"; focus description rewritten in plain words.
- Header comment added; object keys unquoted; analysis rewritten to the standard sections.

After the changes: focal length 100.1186 mm, f/8 (stop radius 8.24 mm, sized from the 100 mm projection constant), back focus 157.8809 mm, half-field 76°. Surface check: no errors. Aperture check: no surface below the axial beam. Image-circle and field-coverage checks skip the file because it was hidden at the time and declares no image format (the file is now visible; it still declares no image format).

Field reached: an independent real-ray trace passes the chief ray through every rim up to about 88° (it fails at total reflection in the front element just beyond that). The viewer's own chief-ray solve converges at every half-degree up to 76° with these rims and only intermittently from 76.5° to 84.5°, so 76° is declared. With rims well beyond the figure (140 and 110 mm on the front element) the same solve reaches 86°, so the shortfall comes from the margin the solve needs around the chief ray, not from the prescription.

Open:

- Name, key, subtitle and specs wording ("NOT FACTORY IDENTITY", "NOT PROVEN RETAIL IDENTITY") for the cleanup pass; whether the name should mention the Sphaerogon.
- `indexReference` stays "d" (text table); the drawing sheet prints nD. Glass labels: none of the four matched a catalogue glass.
- Rims against Figure 1 for the semi-diameter pass: front element about 120 mm overall and 94 mm clear, L2 about 11.5 mm, rear pair about 14 mm; the off-axis bundle is heavily vignetted at the widest fields with the present minimum rims.
- Projection: neither supported fisheye law fits the real mapping well; an image circle (about 223 mm at 180° for 100 mm) is not declared.
- Whether the traced half-field can go beyond 76° is a question for the chief-ray solve, not this file.

## 2026-11-17 — Cleanup and wording pass

No optical value, rim, stop or projection field was changed.

Fields changed:

- `subtitle`: "1938 f/8 FOUR-ELEMENT PATENT REFERENCE; NOT FACTORY IDENTITY" → "US 2,126,126 A, Figure 1 — Sphaerogon type 1 fisheye design".
- `specs`: the three lines about patent identity, stop distances, rims and infinity focus → "DESIGN F/8", "ALL SPHERICAL", "ABOUT 180° FIELD" (the element and group line is kept).
- Element labels "L1"–"L4" → "Element 1"–"Element 4"; roles reworded; cemented pair id D1 → C1 on L3, L4 and in `doublets`.
- Glass strings added: "Unmatched (nD 1.62313 / V 57.0)", "Unmatched (nD 1.51746 / V 58.9)", "Unmatched (nD 1.55088 / V 49.6)", "Unmatched (nD 1.60284 / V 60.6)". No catalogue row lies within 0.0001 in index and 0.15 in ν of any of the four, so none is named.
- `focus.description` shortened to the infinity-only sentence; the f-stop lines put one per line.
- Header comment: a paragraph on the Sphaerogon link added.
- Analysis: title set to the lens name; the Cavina listing quoted by its own title and cited by page address; two sentences about scale shortened.

Engine numbers before and after are identical: focal length 100.1186 mm, f/8, stop radius 8.2423 mm, half-field 76°, back focus 157.8809 mm. Surface check: no errors. Aperture check: no rim limit.

Open:

- Rims against Figure 1 for the semi-diameter pass: front element about 120 mm overall and 94 mm clear, middle meniscus about 11.5 mm, rear pair about 14 mm.
- No lens mount, image format or image circle is declared; the patent states the field (about 180°) and no format. The traced image circle would be about 223 mm at 180° for the 100 mm focal length.
- Neither supported fisheye law fits the real mapping closely; the traced half-field is 76° against the patent's roughly 90°.
- `indexReference` is "d" from the text table; the drawing sheet prints nD.
- Whether DE 672 393 prints the same numbers has not been checked.
