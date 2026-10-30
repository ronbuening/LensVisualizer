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

## 2026-10-29 — Fresh F-mount source, rim, and glass reinspection

- Directly inspected original `patents/US20090190239A1.pdf`: Example 1 Fig. 1 PDF p. 2 at 600 dpi (complete three-part optical-rim crops), prescription Fig. 6 p. 7, specification/focus Fig. 7 p. 8, and d-line definitions in ¶0055 p. 24. Every convex/concave face and cemented boundary was inspected. No separately resolved air-facing flat cap-end land supports an extension or inferred trim; the visible group brackets and ray overlays are excluded. Existing cemented steps and source diameter anchors remain. No geometry change.
- Freshly checked all **14 powered elements**, front protective meniscus P1, and drawn rear GF separately (16 modeled media), against every source nd/vd row. All values are retained, including source νd rounded to one decimal. Current compatible catalog curves cover all 16 media. Labels already qualify HIKARI coordinates as spectral proxies with supplier unconfirmed. The source has no θgF or C/F/g table; none is invented. L1/L2/L5 APD tags stay inference-qualified from the ED-class proxy, not patent-measured anomaly. Published 5 m focus and attribution uncertainty are preserved.
- Actual verification: focused surface and image-circle audits pass all three candidates (zero undersized/skipped); aperture audit passes all three stated axial beams after the PF cap correction. Native SVG output was inspected at nine focus/zoom states per lens (27 total), with zero renderer trims. Current resolver/catalog consistency passes. Shared dispersion/partial-dispersion suites were already run in this candidate wave (93 passing tests); no engine changes or per-lens tests were added.
