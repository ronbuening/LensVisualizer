# 2026-09-05 UTC audit

- Source: `patents/JPA 1982019708-000000.pdf`, PDF page 6, Fig. 1(a), wide, Example 1; rendered at 600 dpi.
- SD decision: Retained all SDs. The rear optical rims agree with the existing roughly 11-13 mm range; the inflated E7 ENV/RIM result reads the group bracket. Both wide and tele source outlines were inspected. Marketing f/4 remains distinct from patent-model f/3.5.
- Glass: 8/8 physical elements resolve to coordinate-compatible catalog curves; all patent nd/vd values retained and no production supplier inferred.
- Display: manufacturer/HEXANON AR identity retained; explicit diagram labels follow the patent component numbering. Zoom range typography uses an en dash.
- Verification: surface and image-circle audits passed before editing; final results and shared quality gates are recorded in [the batch record](../../../agent_docs/records/konica-ar-september5-audit.md).
- Visual check: inspected the patent crop and rasterized paths produced by the production SVG geometry helper. Live browser verification was unavailable (`No browser is available`).


## 2026-09-05 UTC screenshot follow-up

Rechecked the supplied site screenshot against the exact 600 dpi Fig. 1(a) crop and Fig. 1(b).
This supersedes the initial blanket retention decision above: E4 and E8 need separate optical-rim
measurements because nearby component/group brackets contaminate the automated mapping.
The full glass span gives 0.06656 mm/px. E4's curved rim spans about 435 px vertically (14.5 mm SD);
E8 spans about 260 px (8.7 mm SD), consistent with its 8.72 mm RIM reading.

| Surface / diagram element | Before (mm) | After (mm) | Basis |
|---|---:|---:|---|
| 6 / L3 front | 18.9 | 15.0 | Optical rim, rounded with clearance |
| 7 / L3 rear | 18.7 | 14.8 | Same proportional reduction as front |
| 14 / L7 front | 11.6 | 10.0 | Figure direction with ray-clearance floor |
| 15 / L7 rear | 11.7 | 10.0 | Figure direction with ray-clearance floor |

An 8.8 mm final-element trial passes surface geometry but clips the off-axis fan away from wide.
The 10 mm rim passes signed 0.6-field fans at five zoom positions and three focus positions,
including a comparison using the original larger-SD field angles to avoid a shrinking-field false pass.
No stop, radius, axial spacing, glass coordinate, or interpolation order changed.
Production SVG paths were rasterized and compared with the source; the narrowed L3 now has a finite
rim and L7 has the smaller rear-element silhouette visible in the patent. No live browser was available.

Camera-anchored movement confirms front extension for close focus (5.491/5.410/5.394 mm at wide/mid/tele),
with the rear group stationary. At infinity, wide-to-tele travel is +13.210962 mm for FRONT and
−19.869038 mm for REAR; sampled paths have no reversal. Patent metadata now follows the spaced `JP`
contract so the header link and Japan catalog classification work. Glass remains 8/8 coefficient-backed.
Final checks are recorded in the shared batch record.
