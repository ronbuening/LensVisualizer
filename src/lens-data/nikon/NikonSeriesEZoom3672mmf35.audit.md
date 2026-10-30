# Audit Log — Nikon Series E Zoom 36–72mm f/3.5

## 2026-10-17 — V2 source-stated design focal length

Source: JP S55-163511 A, Example 1, PDF p. 4. Applied the approved focal-length metadata proposal.

| Field | Before | After |
|---|---|---|
| `catalog.focalLengthMm.design` | `[39.353836021781, 69.65385117607]` | `[37, 69]` |

Retained all station labels, marketing values, prescription geometry and image distances. The former design values were rounded or full-precision computed EFLs; the catalog field now records the source-stated endpoints.

The approved proposal independently reproduced infinity EFLs of 39.353836021781 / 69.653851176070 mm; those traced results remain documented separately. Both endpoint comparisons in the historical zoom-metadata check now have zero difference. This is a metadata correction, not a source-prescription correction.

Added an `unresolved` `source.errata` entry, a header disclosure, and a Section G queue row. JP S55-163511 A Example 1, p. 4, prints f=37–69 mm and l=41.4–0.1 mm. The unchanged prescription traces to 39.353836–69.653851 mm. The wide-end contradiction is unresolved; no printed radius, thickness, index or zoom gap has been corrected.


## 2026-10-30 — Original source rim and glass review

Source: untracked `patents/JP_S55163511_A.pdf`, SHA-256 `7758942059fba0a5c03fa77224ec07669235f8650873524cb7016e960d0a21fa`; Example 1/PDF page 4 and Figure 1/page 5. All eight source pairs are preserved and explicitly annotated for the assumed d-line reference. Existing eight curves remain qualified proxies; the J-LAFH3 Abbe residual is +0.29228 and NBFD2 residuals are about +0.000889/+0.34380 in nd/νd. No partials, supplier, APD or exact-spectrum identity is established.

S8 12.8→13.2 mm restores L4's continuous paired rim. The front S2 end is slanted, so no flat land was inferred. The weak rear curves also do not prove independent lands. A trial with S11 = 10.9 mm causes 1.204 mm intrusion across the 1.15 mm gap (1.035 mm permitted); a source-like S12 land reaches 2.977 mm intrusion across 3.15 mm (2.835 mm permitted). Those trials are rejected; no inward cap/land workaround or tolerance waiver was used.

The existing 39.353836–69.653851 mm traced range against printed 37–69 mm remains an unresolved source contradiction. All powered R/d, stop, source zoom gaps, finite-focus status and aperture settings are retained. Canonical/surface, image-circle, format-corner and nominal aperture checks pass; all nine actual SVG states have zero hidden trim. An independent agent repeated the two source tables and the geometric review.
