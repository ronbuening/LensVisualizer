# Audit Log — Nikon AF-S DX Zoom-Nikkor 12-24mm f/4 G IF-ED

Patent: US 6,940,655 B2, Example 1 / Figure 1.

## 2026-07-29 — Patent-figure SD and glass audit

### Semi-diameter review

The patent publishes only L1's effective diameter, so surface 1A/2A remains fixed at `43.65 / 2 = 21.825 mm`.
The other values remain figure-derived visualization estimates.

| Surfaces | Before | After | Figure evidence and constraint |
|---|---:|---:|---|
| 3–4 | 14.5, 13.5 mm | 17.0, 17.0 mm | Figure 1 shows the front portion of bonded component H1 materially wider than the original envelope. |
| 7–8 | 10.5, 10.0 mm | 12.7, 12.7 mm | The following L4 meniscus is also visibly broader in Figure 1. |

The apparent housing width around surfaces 5/6A was not used as an optical aperture. Enlarging those high-curvature
surfaces to the housing outline crosses the spherical domain and produces negative edge thickness, so both remain at
their validated 10.6 mm semi-diameter.

The post-edit figure screen has a `1.004` median figure/data ratio. Relative to that scale, the revised L2/L3
envelope is `0.89` and L4 is `0.86`, both within the procedure's figure-measurement tolerance. The resin boundary's
larger apparent outline remains validator-limited as noted above.

### Glass classification

| Elements | Before | After | Disposition |
|---|---|---|---|
| L7, L10 | `498825 — ED fluorophosphate class (vendor unresolved)` | `J-FKH1 (Hikari; patent code 498825)` | Current Hikari J-FKH1 has identical `nd = 1.497820` and `νd = 82.57`, only 0.05 above the patent row. The patent code remains explicit because this is a coordinate-successor classification, not melt provenance. |

The shared catalog already contained J-FKH1, so this relabel raises source-backed formula-3 coverage without adding
a duplicate glass record. The remaining proprietary/code-only rows stay unresolved.

### Analysis sync

- Updated both ED element descriptions, the glass table, chromatic discussion, SD provenance, and Hikari source.
- The production display name already followed the repository's designation-spacing convention.

## 2026-08-18 — Hoya M-NBF1 coefficient assignment

- Visually rechecked local `patents/US6940655.pdf`, PDF page 14, Example 1 / Table 1. L1 remains `nd = 1.744429`, `νd = 49.55`.
- Added Hoya M-NBF1 from the first-party 2026-07-07 obsolete-inclusive AGF. Its polynomial evaluates to `1.743300 / 49.326`, within the repository's catalog-equivalent tolerances.
- Relabeled L1 to M-NBF1 while retaining patent code `744496` and the unspecified production supplier. The other unresolved optical-glass and resin rows are unchanged.

## 2026-08-18 — L11 N-SK2 coefficient assignment

- Visually rechecked `patents/US6940655.pdf`, PDF page 14, Example 1 / Table 1. L11 remains patent code `606574`, `nd = 1.606020`, `νd = 57.44`.
- Schott N-SK2 is within the runtime catalog-equivalent window (`Δnd = +0.001361`, `Δνd = -0.79`).
- Relabeled L11 as an N-SK2 optical equivalent while leaving the production supplier unspecified. No prescription geometry changed.

## 2026-10-29 — F-mount surface and glass reinspection

Fresh original source `patents/US6940655.pdf`: Example1 Figure1 on PDFpage2, directly reviewed at600dpi; Table1 and d-line definitionspage14, coefficient/maximum-effective-diameter conditionpage15. Inspected all12media faces, including four ordinary cemented interfaces and the resin bond. Embedded figure is300dpi. The approximately1818px first-to-last vertex span over96.0404mm gives18.9px/mm at600dpi,9.46nativepx/mm.

Retained geometry after testing both source-visible larger seats. For L1, the figure cap/edge ratio is about0.80±0.007 (approximately269native edge pixels; one-pixel bound±(1+q)/edge). Applying q to the current21.825mm rim gives a trial rear S2A cut6.65mm/cap17.455061mm. Sampled beams reach18.175629mm at zoom0/focus0.10/field42.57688°. Moving outward to depth7.16mm gives cap18.239883mm, margin0.054720mm, and passes the inferred-beam rule. It is nevertheless rejected: the21.825mm authored radii represent the source43.65mm maximum effective aperture, and the cut would reduce that clear radius and change the reproduced dmax/d0condition. Vertex-span calibration places the drawn physical outer rim near28.3mm, beyond that clear radius. A rear-only extension to that rim would require an unsupported closure of the continuing front outer curve; no fabricated front flat seat is added.

The separate resin S6A10.6→17mm extension passes simple geometry but would form a resin-only wing above the10.6mm cemented substrate boundary. The complete compound step requires an unsupported cemented-interface representation. It is rejected without substituting a short partial land. Other concave air faces have no resolved new cap-end land. Source R/d/aspheres, aperture, effective diameter and constrained focus/zoom model remain unchanged.

All12source nd/νd pairs match Table1 and retain its d-line convention:11physical glass elements plus one0.1mm resin layer. No source θgF/extra line indices/APD identity is published. Current coefficient coverage11/12 is confirmed; only resin1.55389/38.09 lacks a compatible catalog row. Existing supplier-neutral labels/qualified curves remain. Public text now records complete current coverage and distinguishes the optical compound-outline limitation from an invented housing feature.

| Medium | Source nd / νd | Current coefficient-backed proxy |
|---|---|---|
| L1 | 1.744429 / 49.55 | M-NBF1 |
| L2 | 1.581440 / 40.75 | PBL25 |
| L3 | 1.772500 / 49.61 | J-LASF016 |
| L3r | 1.553890 / 38.09 | Unresolved |
| L4 | 1.755200 / 27.51 | E-FD4 |
| L5 | 1.741000 / 52.67 | LAK011 |
| L6 | 1.548140 / 45.79 | LLF1 |
| L7 | 1.497820 / 82.52 | J-FKH1 |
| L8 | 1.804000 / 46.58 | H-ZLaF50D |
| L9 | 1.804400 / 39.59 | J-LASF013 |
| L10 | 1.497820 / 82.52 | J-FKH1 |
| L11 | 1.606020 / 57.44 | N-SK2 |

Absolute-path candidate surface, image-circle and aperture audits pass; resolver/`assertCatalogConsistent()` pass. Nine native SVG focus/zoom states were rendered and visually inspected with zero hidden rim trim. All source indices, actual spectral constraints, and selected qualified curves are retained; no tolerance is relaxed. Shared dispersion/partial-dispersion suites passed2files/93tests earlier in this wave. Coordinator records full gates/commit integration.
