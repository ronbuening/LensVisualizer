# Scoped audit

One representative physical family/one hidden infinity entry. Original Table2 and LZOS glass coordinates independently visually re-entered. All literal radii, spacings, glassnames and caps retained. Explicitne/ve nominalcatalogue reconstruction; no exactfactory/melt identity. Native geometry passed at.90 and stop12.55mm retained through derivedf1.30257. Independent full diagnostics and final bounded native review recorded; raw aperture misses analytically reconciled, not suppressed. Companion analysis gives full counts, sourcefield approximation, strongclipping, pupil mismatch and chronology.

Final authored-triad independent/export review passed: errors=[], identicalOptics=true, hidden (closed 2026-11-15: the entry is now visible as KMZZenitar50mmf12S). Verified frozenbackup remains a custody prerequisite (closed: not a repository requirement). Not delivered or deployed (closed: validated and integrated, see below). NumericalMTF/chromatic/globalfield tests unperformed, not represented as passed.

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

Open (all closed or carried forward by the cleanup and wording pass below):

- Closed: file name, `key`, `name`, subtitle and `specs` carried the "representative" wording and capitalised caveats.
- Closed: element names and glass labels read "TK21 nominal LZOS" and so on.
- Closed: `focus.description` "Infinity only diagnostic", the run-together erratum note and the wording of the analysis needed rewriting in plain language.
- Carried forward: whether the displayed design f-number stays 1.30 beside the marketed f/1.2.
- Carried forward: aperture blades are not set (maker booklet 9, maker's product page text 8).
- Closed: the 2013–14 design date quoted in the earlier analysis could not be re-read and was dropped from the analysis.
- Carried forward: patent Fig. 1 has not been compared with the drawn section.

## 2026-11-15 — Cleanup and wording pass

The optics were not touched. Radii, thicknesses, indices, stop and semi-diameters are as delivered; the engine values are identical before and after: focal length 51.47444663 mm, f/1.30257 from the 12.55 mm stop, half-field 16°, back focus 39.7777 mm.

Fields changed in the data file:

- `subtitle`: added, "RU 2592746 C1, sole example — Zenitar 50mm f/1.2 S production correlation".
- `specs`: the four capitalised caveats → "8 ELEMENTS / 7 GROUPS", "DESIGN f = 51.48 mm", "F/1.3 AT THE PRINTED STOP · MARKED F/1.2", "ALL SPHERICAL", "MINIMUM FOCUS 0.45 m".
- Elements: `name` → L1–L8; `type` from the signs of R (plano-convex positive, positive meniscus, negative meniscus, negative meniscus, positive meniscus, positive meniscus, plano-convex positive, plano-convex positive); `focalLengthMm` added from the engine (117.61, 104.86, −37.11, −22.86, 45.64, 103.47, 73.42, 94.78); a short `role` on each.
- `cemented`: "C1" on L4 and L5, with a `doublets` entry over surfaces 8–10 (doublet focal length −62.79 mm). `groups`: I over surfaces 1–6 and II over 8–16, the patent's two components.
- `focus.description`: "Infinity only diagnostic" → a plain sentence; `closeFocusM` placeholder and the maker's 0.45 m are unchanged.
- `source.errata`: the one unresolved note reworded in plain language (stated 1:1.2 and 41.05 mm pupil against the printed 25.1 mm stop). The remarks about nominal catalogue glass and the product's date were removed from the erratum; the first is in the header and analysis, the second was not confirmed.
- Header: one paragraph added on how each glass is traced.

Glass labels (the stored ne and νe are unchanged):

- L1, L2, L5, L6: "TK21 nominal LZOS" → "TK21 (LZOS)". The catalogue row has nd 1.656914, νd 51.12; it reproduces the stored e-line pair, so Δ = 0.
- L7, L8: "TK14 nominal LZOS" → "TK14 (LZOS)". Row nd 1.613091, νd 60.58; Δ = 0.
- L3: "LF5 nominal LZOS" → "QF3 (CDGM; equivalent of GOST LF5; supplier unconfirmed)". The catalogue has no LF5 row. QF3 has nd 1.57502, νd 41.31 against LZOS LF5 1.575022, 41.31 (Δnd 2e-6, Δνd 0.00) and reproduces the stored e-line pair. The f/0.95 sibling labels its LF5 element the same way.
- L4: "TF10 nominal LZOS" → "Unmatched (GOST TF10; LZOS catalogue ne=1.813767, νe=25.17; not in the glass catalog)". No catalogue row lies within the limits; the nearest dense flints (nd 1.80518) are 0.0011 away in nd.

No element carries an anomalous-dispersion tag; the maker publishes no special-glass positions for this lens.

Analysis: title line added, the cemented pair renamed C1, and a paragraph added on how each glass is traced.

Audit results after the pass: surface audit, no errors; aperture audit, within 3 % of the stated f-number with no rim, trace or iris limit; field coverage, nothing below 90 %.

Open:

- Patent Fig. 1 was not in the copy that was checked, so the printed clear diameters have not been compared with the drawn section. No rim was changed.
- Off-axis vignetting is heavy (up to about 65 % one-sided at an image height of 14.15 mm). It follows from the printed clear diameters and is left as it is.
- Closed in the semi-diameter pass below: aperture blades set to 9 from the maker's booklet.
- Closed 2026-11-15: an LZOS TF10 row (fitted to the LZOS index table, nd 1.806274, νd 25.37, ne 1.813767) was added to the glass catalogue and L4 is labelled "TF10 (LZOS)".
- The design f-number shown is 1.30 from the printed stop, beside the marked f/1.2; the spec line says so.
- The year the product was designed and first sold was not confirmed from a maker source during this work and is not stated in the analysis.

## 2026-11-15 — Semi-diameter pass against the patent figure

Source: RU 2592746 C1, Table 2 on printed page 6. The copy of the patent that was available has no Fig. 1 (its drawing pages carry Figs. 2–5 only), so there was no section drawing to measure. Table 2 prints a clear diameter for every surface and for the stop, and a printed clear diameter outranks a figure reading.

Result: no rim changed. All 15 lens-surface semi-diameters were compared again with the printed diameters and each equals the printed value divided by two:

| Surface | Printed clear diameter (mm) | Semi-diameter in the file (mm) |
| ------- | --------------------------- | ------------------------------ |
| 1       | 54.0                        | 27                             |
| 2       | 52.0                        | 26                             |
| 3       | 44.5                        | 22.25                          |
| 4       | 39.8                        | 19.9                           |
| 5       | 30.8                        | 15.4                           |
| 6       | 25.0                        | 12.5                           |
| Stop    | 25.1                        | 12.55 (from the f-number)      |
| 8       | 25.2                        | 12.6                           |
| 9       | 31.4                        | 15.7                           |
| 10      | 33.8                        | 16.9                           |
| 11      | 36.5                        | 18.25                          |
| 12      | 38.4                        | 19.2                           |
| 13      | 39.6                        | 19.8                           |
| 14      | 40.0                        | 20                             |
| 15      | 36.1                        | 18.05                          |
| 16      | 35.7                        | 17.85                          |

No land, cut or rim extension was added, because no figure was available to show one. Engine values are unchanged: focal length 51.4744 mm, f/1.303, half-field 16°. The surface audit reports no errors and the aperture audit no rim limit. Corner light is as before: up to about 65 % of the beam is cut on one side at an image height of 14.15 mm, by the printed diameters.

Metadata: `aperture.blades` set to 9. The maker's booklet for the Zenitar 1.2/50 S lists 9 aperture blades, and so does the specification table on the maker's product page; only the descriptive text on that page says 8.

Product name: the maker's booklet calls the lens "ZENITAR 1.2/50 S" and the maker's English catalogue page "Zenitar 50mm f/1.2 S". The entry's name, KMZ ZENITAR 50mm f/1.2 S, follows the second form with the house maker prefix, as the f/0.95 and 35 mm entries do. Mounts (Canon EF, Nikon F), APS-C format, 0.45 m minimum focus and the f/16 minimum aperture agree with the booklet.

Open:

- Compare the printed diameters with Fig. 1 when a complete copy of the patent is at hand; element edge shapes (flat lands, square blocks) are not drawn in the model.
