# Audit Log — NikonAFSNikkor500mmf4GEDVR

## 2026-09-30 — Integration, optical-rim review and dispersion audit

Catalog-compatible curves are supplier-neutral spectral proxies, not production-glass identifications.

Patent: US 2009/0190239 A1, Example 1, Fig. 1 (local PDF p.2); prescription Figs. 6–7.

### Optical rims

Retained SDs after 600 dpi optical-rim inspection and live SVG comparison. Median figure/data ratio is 0.998. Apparent L8–L11 enlargements are group brackets, arrows and ray overlays; close inspection confirms they are not glass edges. Preserved D1=120.4 mm, inferred centered D30=39.44 mm and Dk=32.8 mm anchors, and the stepped/cemented outlines. Published 5 m focus endpoint is retained.

### Glass and display

Added J-LASF010's manufacturer power-series coefficients (Hikari 2025-06-01 catalog, PDF p.140) to cover L6, raising catalog coverage from 14/15 to 15/15. Removed copied catalog C/F/g indices and Hikari-normal-line deviations from elements and rear GF plate; these are not patent measurements and must not bypass catalog resolution. All source nd/vd and physical plate spacings remain. The shared curves retain the qualified Hikari-coordinate assignments. Corrected display styling f/4 G to f/4G.

## 2026-09-30 — Local-site follow-up

Compared the local-site infinity/5 m sections with Fig. 1. The focusing group moves 10.84 mm imageward toward near focus, matching paragraph 0045. Retained optical-rim SDs. Added inferred-APD tags to L1/L2/L5 from the J-FKH1 proxy curve and explicit P1/L1–L14 diagram labels so the protective plate no longer offsets optical-element numbering. The source publication does not list an assignee; left it empty.

## 2026-09-30 — Patent assignment attribution

- Added `Fujinon Corporation` to `patentAssignees` from the [same-application assignment record](https://patents.google.com/patent/US20090190239A1/en) for 12/354,321: Takashi Suzuki to Fujinon Corporation, effective January 7, 2009, recorded January 22, 2009, reel/frame 022139/0546. The assignment predates publication; the A1 front page still names no assignee. The underlying USPTO assignment instrument was not independently inspected.
- Preserved the Nikon catalog identity as a qualified production correlation. Documented the Photons to Photos Example01P association and Camera Gossip's matching row/Fujinon caveat; these do not establish manufacturer confirmation or a manufacturing/licensing relationship. The relationship graph now derives the patent assignment edge to Fujinon from the structured field.

## 2026-10-04 — Rear plate drawn as an element

- The image-side plate GF moved out of `rearPlates` into the drawn prescription: surfaces 29–30 and element
  16 (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place
  and a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 18.5 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (17.24 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.
