# NikonZoomNikkorAuto50300mmf45 — patent and local-diagram audit

Reviewed 2026-09-13 UTC against `US3481666.pdf, Example 3; Fig. 2 and cam diagram Fig. 3 reviewed for embodiment applicability` and the local site.

## Geometry, labels, and travel

Retained SDs: Fig. 2 depicts the 14-element example, not the selected 20-element Example 3. Its rims cannot be transplanted to this prescription. Local construction labels correctly show 20 elements, 13 air-spaced groups, and four zoom components.

Across 101 zoom positions, I and III move together 32.53 mm objectward, II moves 42.47 mm imageward, and IV stays fixed within numerical precision. The direction agrees with the patent. The ordered 51.60–300.03 mm model range remains distinct from marketing. No finite-focus state is published.

## Glass and metadata

Coefficient-backed coverage: **20/20**. All elements resolve to compatible catalog curves. Existing compatible curves remain supplier-neutral proxies. No new element-specific APD, spectral-line values, or supplier identity is inferred from nd/vd; the site’s high-index/standard colors remain appropriate to the authored coordinates. The ED marketing name is not an APD flag.

The assignee is the canonical **Nippon Kogaku K.K.**, already connected to the Nikon corporate family. Historical/legal entities remain distinct from spelling aliases; no further consolidation is needed for this lens.

## 2026-10-07 — Patent-audit queue: stop position wording

No stored value changed. The STO stays in the III–IV air space, fixed 2.53 mm ahead of r18. What was wrong was the description of where the patent draws its stops, so the header, the STO row comment and the analysis note were rewritten to call the position a modeling inference and to describe the figures as drawn.

| Field | Before | After | Source |
|---|---|---|---|
| Data header, `Stop:` paragraph | Patent "depicts a diaphragm-like plane between components III and IV" | Patent tabulates no stop; Fig. 2 (Example 1) and Fig. 5 (alternative negative IV) draw the ticks inside component IV; the STO position is a modeling inference without figure support | US 3,481,666 Fig. 2 (PDF p. 2), Fig. 5 (PDF p. 1), Example 3 table (PDF p. 8) |
| STO row comment | "Inferred stop: fixed 2.53 mm ahead of r18; stop SD calibrated to f/4.5 at W" | Position named as a modeling inference; states the d17 split and that the authored SD is a paraxial calibration | Example 3, d17 = 5.06 / 18.83 / 37.59 (PDF p. 8) |
| Analysis note, stop paragraph | "Figure 2 places a diaphragm-like stop between components III and IV" | Describes Fig. 2 and Fig. 5 as drawn, names the position as a modeling inference, labels the 4.500000 / 4.500199 / 4.500168 figures as paraxial | Same figures; figure list, col. 2 lines 23–37 (PDF p. 4); col. 3 lines 60–62 (PDF p. 5) |
| Analysis note, source [1] | "the lens diagram is Figure 2 on PDF p. 2" | Fig. 2 is the Example 1 section and Fig. 5 an alternative fourth component; no figure draws Example 3 | Figure list, col. 2 lines 23–37 (PDF p. 4) |

- **What the figures show (read at 600 dpi).** Fig. 2 carries the labels r1–r24, d1–d23 and n1–n14, which is the surface count of Example 1, and Figs. 3 and 4, which the text ties to the Fig. 2 embodiment, are labelled with Example 1's focal lengths. Its paired stop ticks sit just behind the flat rear face r17 of the first element under the bracket labelled IV, ahead of r18. Example 1 lists r16–r24 as component IV and d17 = 3.5 as that air gap. The III–IV air space (behind r15) carries no mark. Fig. 5 shows a four-element negative component IV with the ticks between its first and second elements; all three tabulated examples print a positive f4 (18.62, 44.09, 239.63), so it is none of them.
- **Text.** The description, the three example tables and the three claims (cols. 1–16, PDF pp. 4–11) contain no stop, diaphragm or iris statement and no stop row. The only aperture datum for Example 3 is the range-wide F = 4.5, printed in its table header (PDF p. 8), in the claim 3 repeat (PDF p. 11) and, as F:4.5 for the 51.6–300 mm lens, in the abstract (PDF p. 4).
- **Why the STO was not moved.** Nothing in the patent places a stop for Example 3, so no source location maps onto one of its gaps. The Fig. 2 placement belongs to a different 14-element lens whose component IV opens with a plano-concave singlet; Example 3's component IV opens with two biconcave singlets. The like-for-like gap behind IV's first element in Example 3 would be d19 (3.5 mm, the same value as Example 1's d17), which is suggestive but not a source statement.
- **Confirmed unchanged.** The split reproduces the printed d17 at the three source rows: 2.53 + 2.53 = 5.06 at W, 16.30 + 2.53 = 18.83 at M, 35.06 + 2.53 = 37.59 at T. Computed EFL is 51.5983 / 112.7318 / 300.0300 mm at W/M/T. The fixed iris (11.7762 mm, the real-ray f/4.5 radius at W) traces f/4.500 at W, f/4.512 at M and f/4.500 at T, peaking at f/4.519 over 177–212 mm, with the iris the limiter at all 50 stations. The authored STO sd 11.7573 mm is the paraxial f/4.5 radius at W; with it the paraxial f-number is 4.500000 / 4.500199 / 4.500168 at W/M/T.
- **Left open.** Whether to relocate the STO into component IV by analogy with Fig. 2 (for example into d19) is a judgment the patent cannot settle. It would change the wide-open iris radius and the off-axis beam footprint, but not the fixed-iris behaviour, since either location is stationary behind every moving component. The note's summary-table rows for the modeled f-number carry the same paraxial figures without the paraxial label. Header line 25 of the data file is 121 columns wide and was not rewrapped under this row.
