# Scoped audit

One representative physical family/one hidden infinity entry. Original Table2 and LZOS glass coordinates independently visually re-entered. All literal radii, spacings, glassnames and caps retained. Explicitne/ve nominalcatalogue reconstruction; no exactfactory/melt identity. Native geometry passed at.90 and stop12.55mm retained through derivedf1.30257. Independent full diagnostics and final bounded native review recorded; raw aperture misses analytically reconciled, not suppressed. Companion analysis gives full counts, sourcefield approximation, strongclipping, pupil mismatch and chronology.

Final authored-triad independent/export review passed: errors=[], identicalOptics=true, hidden. Verified frozenbackup remains a custody prerequisite. Not delivered or deployed. NumericalMTF/chromatic/globalfield tests unperformed, not represented as passed.

## 2026-11-15 — Deployment validation

An independent checker re-read RU 2592746 C1 from its page images and compared the data file with it row by row.

Checked: all 16 rows of Table 2 on printed page 6 (15 radii, 16 thicknesses and gaps, 8 glass names, 16 clear diameters including the stop row). No mismatch. Every semi-diameter is the printed clear diameter divided by two. The front page gives application 2015110965, filed 27 March 2015, published 27 July 2016, inventor Vladimir Aleksandrovich Bogdankov, patent holder OAO "Krasnogorsky Zavod im. S.A. Zvereva". Fig. 1 was not in the PDF copy that was checked, so element shapes were compared with the patent's text and with a public section drawing instead.

Verdict: valid with notes. The patent describes an APS-C reflex lens (25.5 × 18.6 mm) with a back focus long enough for the Nikon F mount, eight elements in seven groups, by the same designer; the maker's booklet for the Zenitar 1.2/50 S gives APS-C, 50 mm, f/1.2, 32°, 7 groups / 8 elements, 0.45 m, Canon EF and Nikon F. The patent has only this one example. The link is a strong correlation, not a maker statement.

First-order values (patent → model): focal length 51.478 → 51.4744 mm; back focus 39.777 → 39.7777 mm; system length 119.577 → 119.577 mm. The LZOS d-line values would give 51.492 and 39.794 mm, so the e-line reading is the better fit; Table 1 gives 0.54607 µm the weight 1. On-axis longitudinal spherical aberration at f/1.30 is +0.010 / +0.007 / −0.012 / −0.021 mm at pupil zones 1 / 0.85 / 0.7 / 0.5, so the printed image plane is in focus.

F-number finding, recorded as it stands: the printed 25.1 mm stop gives a paraxial f/1.3026, and a real axial ray fills it at about f/1.265. The patent's stated 1:1.2 and 41.05 mm entrance pupil are not reached by its own printed clear diameters: at f/1.254 the axial beam is cut at surfaces 8 and 9, and at f/1.2 at surfaces 5, 6, 8, 9 and 16. No rim was changed; the printed diameters are the source.

Changes made:

- `maker`: "Zenit" → "KMZ" (house maker name; folder is `kmz/`).
- `source.authors`: "Vladimir A. Bogdankov" → "Vladimir Aleksandrovich Bogdankov" (full name as printed).
- `source.assignees`: "Krasnogorsky Zavod im. S. A. Zvereva" → "PJSC Krasnogorsky Zavod named after S. A. Zverev". The 2016 front page prints the earlier legal form OAO (open joint-stock company); the catalog uses one spelling per company, so the string of the other KMZ Zenitar files is used.
- `catalog.closeFocusM.marketing`: added, 0.45 (maker booklet). The model stays infinity only.
- `catalog.focalLengthMm.design`: 51.47444663355622 → 51.4744 (the built focal length, rounded).
- `aperture.fStops`: [1.3026] → 1.3026, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16; `maxFNumber` 16 added (maker: minimum aperture 16). `nominalFNumber` is unchanged, so the stop radius stays 12.55 mm.
- Header comment replaced with a statement of source, scale, glass, stop, semi-diameters and image plane.
- `source.example` stays "Sole example" with a null id; the lens-data check rejects any other label beside a null id. The header names Table 2.

After the changes: focal length 51.4744 mm, f/1.303 from the 12.55 mm stop, back focus 39.7777 mm against the printed gap 39.777 mm. Surface audit: no errors. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit. Image circle: not undersized for APS-C. Field coverage: 100 %, 14.17 of 14.18 mm at 15.7°, corner clear. One-sided vignetting at the 14.15 mm image height is up to about 65 %, set by the printed diameters.

Analysis rewritten to the house section skeleton.

Open:

- File name, `key`, `name`, subtitle and `specs` still carry the "representative" wording and capitalised caveats; bring them to the form of the other KMZ Zenitar entries.
- Element names and glass labels read "TK21 nominal LZOS" and so on; use plain TK21, LF5, TF10, TK14 and check how they resolve with the e-line reference.
- `focus.description` "Infinity only diagnostic", the run-together erratum note, and the wording of the two paragraphs at the top of this file need rewriting in plain language.
- Decide whether the displayed design f-number stays 1.30 (from the printed stop) beside the marketed f/1.2.
- Aperture blades are not set: the maker booklet says 9, the maker's product page text says 8.
- Patent Fig. 1 has not been compared with the drawn section.
