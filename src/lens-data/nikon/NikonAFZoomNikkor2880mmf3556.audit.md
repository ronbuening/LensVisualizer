# Audit Log - Nikon AF Zoom-Nikkor 28-80mm f/3.5-5.6

Patent: JP H11-030748 A, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JPA 1999030748-000000.pdf`. Example 1 is illustrated by FIG. 1 on the publication cover page, with FIGS. 2-4 as its aberration sheets.
- The patent publishes the Example 1 prescription and zoom data, but no full per-surface clear-aperture table.
- FIG. 1 shows the front group as the largest section, with a compact G2 and rear G3/G4 region. Stored SDs follow that silhouette: 28.5-14.6 mm through G1, about 7.0-10.8 mm around the stop and middle group, and 8.6-10.5 mm at the final group.
- No SD values changed. Current values remain inferred from the patent drawing and ray-clearance constraints.

## 2026-07-29 - Glass coverage follow-up

- Relabeled L4 from a code-only `861230` dense-flint description to coefficient-backed Hikari J-SFH2.
- Current J-SFH2 retains the patent row's `nd=1.86074`; its `861231` code and `vd=23.08` differ from the patent's
  `861230` / `vd=23.01` only in the final rounded digit.
- Synchronized the analysis. No prescription or SD values changed.

## 2026-07-30 - `797454` catalog-equivalent review

- Rechecked both patent rows at `nd = 1.79668`, `vd = 45.37`.
- Hikari J-LASF017 (`1.79500 / 45.31`, code `795453`) is inside the runtime safety window and is the closest
  coefficient-backed catalog row in the reviewed public data (`delta nd = -0.00168`, `delta vd = -0.06`).
- Relabeled both elements as J-LASF017 catalog equivalents while leaving the production supplier unidentified.
  Synchronized the analysis; no prescription, zoom, focus, aperture, or semi-diameter values changed.

## 2026-07-30 SUMITA KF3 coefficient recovery

- Added SUMITA's discontinued-inclusive KF3 vendor polynomial at catalog code `515546`.
- Relabeled L1 to the KF3 optical equivalent; its `1.51454 / 54.55` coordinate agrees within patent rounding.
- The production supplier remains unspecified, and no prescription or zoom data changed.

## 2026-10-30 — Fresh F-mount source, rim, and glass reinspection

- Directly inspected original `patents/JPA 1999030748-000000.pdf` (verified JP H11-030748 A): complete Example 1 Figure 1 on PDF p.11 at 600 dpi, plus the cover miniature; Table 1 on pp.5–6 and explicit d-line 587.6 nm definitions in ¶0028 p.5. Every convex/concave face was checked. The full drawing sheet is a stronger source than the older cover-only review. Its first/last glass-vertex span gives roughly 10.8 working px/mm (200 dpi native ≈3.6 px/mm). L2 has a clear rear vertical land: increased its continuous S3 front cap 20.0→23.4 mm to the source outer height, kept S4 clear cap 16.0 mm, and extended that face to 23.4 mm. Other air curves do not show an independently resolved additional end land.
- The fresh aperture audit found the existing S14 cap limiting the tele station f/5.81→f/6.03. Following the stated-beam floor rule, raised only that inferred continuous curved cap 7.0→7.3 mm (+4.3%), inside the larger source silhouette. No source R/d or aperture calibration is changed; no extra flat land or speculative concave cut is used there.
- Freshly checked all 8 physical nd/vd pairs against Table 1. All remain source-exact; the source has no θgF or C/F/g table. Current coefficient curves cover 8/8. J-LASF017 at L2/L3 remains a qualified nonidentical proxy (catalog 1.79500/45.31 versus source 1.79668/45.37), as does J-SFH2 at L4 (source ν 23.01 versus catalog 23.08 is not an ordinary rounding of the printed source value). KF3 remains a compatible current proxy with historical supplier unasserted. No APD identity or new spectral override is inferred. Public glass/land/aperture descriptions are synchronized. The source's unnumbered auxiliary rear stop remains explicitly unmodeled because no numeric position/diameter is supplied.
- Actual verification: focused surface and image-circle audits pass all three candidates, zero undersized/skipped. Aperture audit clears all seven source stations after the S14 beam-floor correction; format-field checks reach at least 99% at all seven with zero unsolved. Native SVGs were inspected at nine focus/zoom controls per lens (27 views), zero renderer trims; the 35–70 source remains infinity-only despite repeated focus controls. Current resolver/catalog consistency passes; no engine, catalog, tolerance, or per-lens test changes.
