# Audit Log - Nikon AF Zoom-Nikkor 28-85mm f/3.5-4.5

Patent: US 4,806,000, Tables 1-2 / FIG. 15

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US4806000.pdf`. The data file matches the single optical prescription shown in FIG. 15, with zoom/macro spacing from Tables 1 and 2.
- The patent provides the construction and zoom data, but no full per-surface clear-aperture table.
- FIG. 15 shows a very large G1, a smaller G2/G3 region around the stop, and a larger rear G4. Stored SDs preserve that hierarchy: 30.8-17.5 mm in G1, about 9.3-15.0 mm through G2/G3, and about 14.1-14.9 mm in G4.
- No SD values changed. Current values remain inferred from FIG. 15, zoom ray envelopes, and sag-clearance checks.

## 2026-07-29 - Glass documentation follow-up

- Removed stale “no source-backed catalog match” wording from L5/L6. The local catalog now contains
  coefficient-backed Hikari J-SFH2 at the exact stored `nd=1.86074` coordinate.
- J-LAFH3 remains unresolved; no prescription or SD values changed.

## 2026-07-30 SUMITA BALK3 coefficient recovery

- Added SUMITA's discontinued-inclusive BALK3 vendor polynomial at catalog code `518603`.
- Relabeled L12 to the BALK3 optical equivalent at the exact stored `1.51835 / 60.3` coordinate.
- The production supplier remains unspecified, and no prescription or semi-diameter values changed.

## 2026-10-30 — Fresh F-mount source, rim, and glass reinspection

- Directly inspected original `patents/US4806000.pdf`: sole numerical system Figure 15 PDF p.8 at 600 dpi (upright complete crop), Tables 1–2 p.13 and descriptive pp.12–13. Every convex/concave face and cemented boundary was checked. L2's rear concave face ends in a vertical land. Added S4 extension from its existing 17.5 mm cap to the full 22.7 mm front/outer rim; the axial calibration is about 22.7 working px/mm (300 dpi native ≈11.35 px/mm), and the source outer reads ≈22.9 mm. The larger drawn curved endpoint ≈19.1 mm cannot be forced: a coupled trial intrudes 8.731 mm into the 7.900 mm gap to S5 (authoring allowance 7.110 mm), a real physical overlap. Retained the existing valid cap with this explicit source-figure versus prescription limitation. Other concave ends do not resolve additional independent lands; cemented diameter steps are not recast as air faces.
- Freshly checked all 15 physical n/ν pairs against Table 1; all are retained. The table captions do not state a reference wavelength. The current d-line interpretation is supported by its optical-coordinate families rather than presented as a printed source wavelength. No C/F/g or θgF is supplied, so none is invented. Current compatible curves cover 15/15, including TAF2 at L3 (catalog ν 45.4/source 45.5), J-LAFH3 at L15 (catalog ν 28.69/source 28.6), and SUMITA BALK3 at L12. Corrected stale unresolved/no-curve claims in those labels and every affected public paragraph; supplier/melt identities remain unasserted.
- Preserved source R/d, source wide macro spacing, and no tele macro reconstruction. Directly re-viewed Table 1 p.13: it prints f/3.5–4.0. Inspected all seven drawing sheets pp.2–8: these are mechanism diagrams plus Figure 15, with no paired aberration plots or conflicting aperture values. Corrected the tele design station from the old marketed f/4.5 to source f/4.0; marketed f/3.5–4.5 remains separate catalog/specification text. A fresh aperture beam-floor pass then raised only S11 12.2→12.4, S12 12.2→12.5, and S14 13.1→13.2 mm (maximum 2.5%), within the larger continuous source outline. No source stop diameter is invented. No tolerance, stop-plane offset, or source-depth flag is changed.
- Actual verification: focused surface and image-circle audits pass all three candidates, zero undersized/skipped. Aperture audit clears all seven source stations after the S14 beam-floor correction; format-field checks reach at least 99% at all seven with zero unsolved. Native SVGs were inspected at nine focus/zoom controls per lens (27 views), zero renderer trims; the 35–70 source remains infinity-only despite repeated focus controls. Current resolver/catalog consistency passes; no engine, catalog, tolerance, or per-lens test changes.
