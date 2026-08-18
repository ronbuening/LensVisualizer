# Audit Log - ENNA MÜNCHEN ULTRA-LITHAGON 28mm f/3.5

Patent: US 2,959,100, Example 1 / Table I

## 2026-07-06 - Mount metadata review

- Added `lensMounts: ["exakta", "m42"]`.
- Source review confirms Enna's 1958 Automatic-Sockel-System covered Edixa/Praktica and Exakta/Exa models; those map to the existing `m42` and `exakta` taxonomy ids.
- Existing `imageFormat: "135-full-frame"` was retained.

### Sources

- US 2,959,100, Hans Lautenbacher / Enna Werk, Example 1 / Table I.
- Enna Werk overview, Automatic-Sockel-System for Edixa, Praktica, Exakta, and Exa models, https://de.wikipedia.org/wiki/Enna_Werk

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US2959100.pdf`. Table I gives the f = 100 Example 1 prescription, f/3.5 relative aperture, 75 degree field, and back focal length, but no clear-aperture or semi-diameter column.
- The patent figure shows the F front meniscus as the dominant aperture, the S median positive element as noticeably smaller but still broad, and the H rear group as compact. In H, the L3/L4 positives are similar in height, L5 is the smaller negative waist near the stop, and L6 re-expands modestly at the rear.
- Stored SDs preserve that visual run: L1 at 15.3 mm, L2 at about 11 mm, L3/L4 at 7.7-8.6 mm, L5 at 6.4-6.7 mm, and L6 at 7.8-8.0 mm.
- No SD values changed. Current values remain inferred from the patent figure, marginal/chief-ray envelope, f/3.5 stop placement, edge-thickness limits, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`

## 2026-08-11 — Phase 92 HOYA F7 recovery

- Visually rechecked US 2,959,100 Tables I and II on rendered PDF pages 2–3: L2 and L4 are both
  `1.62536 / 35.6`.
- Added the official legacy HOYA F7 row (`1.625363 / 35.583498`, code `625356`) to the shared catalog.
- Relabeled both elements as supplier-neutral F7 optical equivalents and synchronized the analysis. No geometry,
  aperture, or semi-diameter values changed.

## 2026-08-18 - K-SSK1 coefficient backfill

- Visually rechecked Table I on rendered page 2 of `patents/US2959100.pdf`; L6 is `1.61720 / 54.0`.
- Replaced the unresolved J-SSK1 class label with the existing K-SSK1 curve, whose catalog coordinate matches the
  patent within printed precision. This is an optical equivalent; the production supplier remains unspecified.
- No prescription or geometry value changed.
