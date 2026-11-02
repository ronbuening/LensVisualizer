# Audit Log — NIKON AI ZOOM-NIKKOR 80-200mm f/4.5

Patent: US 4,223,981, Embodiment 1, FIG. 1

## 2026-07-25 — Patent-figure SD and glass-coverage audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L7 / 16 | `glass` | `Unmatched (757317 ... E-LAF11 correspondence)` | `E-LAF11 (HIKARI; historical 757316 match to patent 757317 class)` | The historical Nikon/Hikari formula-3 row reproduces `nd = 1.756920`; its `νd = 31.591` rounds consistently with the patent's one-decimal 31.7 class. |
| L8 / 18 | `glass` | `713539 — lanthanum crown class` | `J-LAK8 (HIKARI; 713540 match to patent 713539 class)` | The coefficient-backed Hikari row reproduces `nd = 1.713000`; its `νd = 53.96` agrees with the patent's one-decimal 53.9 class. |

These are coefficient-backed class-equivalent assignments, not claims about Nikon's production melts. Strict
Sellmeier coverage increased from 10/12 to 12/12 elements.

### Phase 2 — Retained-information and semi-diameter audit

The patent does not publish clear apertures. FIG. 1 was measured after a 300 dpi render and normalized by the other
element heights so the page's drawing scale did not become an absolute millimeter claim.

| Surfaces | Before SD (mm) | After SD (mm) | Justification |
|---|---:|---:|---|
| 14 / 15 | 13.0 / 13.2 | 15.0 / 15.0 | L6 was visibly short relative to the variator and rear relay in FIG. 1. |
| 16 / 17 | 13.3 / 13.5 | 15.0 / 15.0 | L7 shares the relay-front clear-height band with L6 in the patent section. |

The other group-height ratios were within the drawing's practical measurement tolerance and were retained. The stop
semi-diameter was not changed.

### Phase 3 — Spectral / metadata enrichment

- No line-index or anomalous-partial-dispersion values are published, so none were fabricated.
- Existing E-LAF11 and J-LAK8 catalog rows were reused; no lens-specific catalog data was added.

### Phase 4 — Analysis sync

- Updated the glass table and element narratives for E-LAF11 and J-LAK8.
- Recorded the FIG. 1 relay-front SD correction and removed stale pre-correction geometry figures.

## 2026-10-30 — Fresh F-mount source, rim, and glass reinspection

- Directly inspected original `patents/US4223981.pdf`: first-embodiment Figure1 PDF p.2 complete 600 dpi crop `/tmp/fb10-f45-600.png` and rear detail; first-embodiment numerical table and definitions PDF p.13. Freshly checked all **12 physical n/ν pairs**, source f/4.5, and explicit **spectrum line d** definition; all pairs retained. No C/F/g indices, θgF table, ED/APD claim or named production supplier is supplied. Every face and cemented boundary was inspected.
- Added only the resolved rear-relay L8 front concave-end trim: **S18 outer18.0 mm, cut depth6.70 mm, cap16.280006143 mm**, adopted q0.904445, land1.719994 mm. Source q≈0.904; first/last glass span≈2725working px /154.880 mm gives17.6working/8.8native px/mm (original300dpi); edge≈151nativepx, one-pixel q uncertainty ±0.013 (0.891–0.917). Complete beam reach**14.969220861 mm** at zoom0.95/focus0.60/field5.761926942°, margin0.05 mm, actual clearance1.310785281 mm, zero untraced/errors. Other concave ends have no separately resolved flat land; cemented steps retained as source/renderer limitation, no forced extra clipping.
- Compatible coefficient coverage remains **12/12**. Qualified E-LAF11 and J-LAK8, correcting the claim that catalog 31.591/53.96 are ordinary one-decimal rounding of source 31.7/53.9; they round31.6/54.0 instead. Source values and current proxy curves stay unchanged. Public narrative/table and current header distinguish compatibility from production melt identity. No new spectral overrides, R/d, stop, focus or zoom changes.
- Actual verification: focused surface and image-circle audits pass all three, zero undersized/skipped. Aperture6/6 source stations within3%, zero rim/iris/trace failures after final50mm floor changes; field6/6≥99%, zero unsolved/skipped. Both zoom inferred cuts pass the complete beam guard; both 50mm retained-cap extensions clear the final explicit beam check. Actual native SVGs inspected at nine focus/zoom controls each (27 views), zero renderer trims; every enlarged compound remains connected, without detached wings. Current resolver and `assertCatalogConsistent` pass32/32 physical-element curves. No shared engine/catalog/test, tolerances, global reports, or root files changed.
