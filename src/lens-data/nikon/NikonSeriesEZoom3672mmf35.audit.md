# Audit Log — Nikon Series E Zoom 36–72mm f/3.5

## 2026-10-17 — V2 source-stated design focal length

Source: JP S55-163511 A, Example 1, PDF p. 4. Applied the approved focal-length metadata proposal.

| Field | Before | After |
|---|---|---|
| `catalog.focalLengthMm.design` | `[39.353836021781, 69.65385117607]` | `[37, 69]` |

Retained all station labels, marketing values, prescription geometry and image distances. The former design values were rounded or full-precision computed EFLs; the catalog field now records the source-stated endpoints.

The approved proposal independently reproduced infinity EFLs of 39.353836021781 / 69.653851176070 mm; those traced results remain documented separately. Both endpoint comparisons in the historical zoom-metadata check now have zero difference. This is a metadata correction, not a source-prescription correction.

Added an `unresolved` `source.errata` entry, a header disclosure, and a Section G queue row. JP S55-163511 A Example 1, p. 4, prints f=37–69 mm and l=41.4–0.1 mm. The unchanged prescription traces to 39.353836–69.653851 mm. The wide-end contradiction is unresolved; no printed radius, thickness, index or zoom gap has been corrected.
