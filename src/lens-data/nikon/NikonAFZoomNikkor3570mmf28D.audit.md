# Audit Log - Nikon AF Zoom-Nikkor 35-70mm f/2.8D

Patent: US 6,320,698 B1, Example 3 / Table 3

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US6320698.pdf`. Example 3 maps to FIG. 7 and Table 3.
- The patent uses effective-diameter quantities in conditions and discusses the flare stop, but it does not publish a full per-surface clear-aperture table.
- FIG. 7 shows a large G1, a substantial G2, a smaller stop-adjacent G3/VR group, and a larger rear G4. Stored SDs follow that figure: roughly 30.0-21.5 mm in G1, 17.2-20.8 mm in G2, 12.3-12.8 mm around G3, and 15.5-18.4 mm through G4.
- No SD values changed. Current values remain inferred from FIG. 7, the split stop/flare-stop rendering model, and ray-clearance constraints.

## 2026-07-30 SUMITA BALK3 coefficient recovery

- SUMITA's discontinued-inclusive BALK3 polynomial shares L9's exact `nd = 1.51835` and reproduces its independent
  `ng = 1.52897` anchor; `vd = 60.3` agrees with the patent-rounded `60.23`.
- Relabeled L9 as a BALK3 optical equivalent while leaving the production supplier unspecified.
- No prescription, zoom, focus, or semi-diameter values changed.

## 2026-07-30 - S-LAL52 catalog-equivalent recovery

- Re-rendered local `patents/US6320698.pdf`, PDF page 16. Table 3 defines `n(D)` and `ν` at the d line and lists L2/L3 at nd = 1.67025, νd = 57.53, n(G) = 1.68466.
- Discontinued OHARA S-LAL52 evaluates to nd = 1.67000, νd = 57.328, n(g) = 1.68449, reproducing all three patent coordinates within the project safety window.
- Relabeled L2 and L3 as S-LAL52 catalog equivalents while leaving the production supplier unspecified. No prescription data changed.

## 2026-10-30 — Fresh F-mount source, rim, and glass reinspection

- Directly inspected original `patents/US6320698.pdf`: third embodiment Figure 7 PDF p.8 at 600 dpi (complete upright source crop), Table 3 and explicit wavelength definitions on p.16. Every convex/concave face and cemented boundary was checked. The first/last-vertex scale is about 28.4 working px/mm (300 dpi native ≈14.2 px/mm). L2's outer/front cap reads ≈25.2 mm and rear curved cap≈22.2 mm. Adopted those coupled source-scaled caps in place of 26.6/21.5 mm and added S4 rear land to 25.2 mm. Before reducing S3, the existing complete beam search reached only 24.884390196 mm there at wide/infinity/field 32.88692749°, giving 0.315610 mm room to the new source cap; no arbitrary partial land or tolerance change is used. Other air faces meet their source rims without a separately resolved new inward cut; cemented boundary steps remain a feature limitation.
- Freshly checked all 15 source nd/vd/n(G) triples. All coordinates and **all 15 genuine source ng values** remain. Table 3 explicitly defines d-line 587.6 nm and g-line 435.8 nm; that convention is recorded without inventing C/F indices or a θgF conversion. Current compatible coefficient curves cover 15/15. S-LAL52 at L2/L3 stays a qualified nonidentical proxy (catalog nd 1.67000/ν 57.328 versus source 1.67025/57.53), with the independent source n(G) retained separately. All catalog labels are qualified spectral proxies with production identities unasserted.
- Actual runtime limitation checked in the current material resolver: an ng-only source anchor does not override an otherwise compatible catalog curve; only complete C/F/g anchors or authored dPgF take the higher-priority branch. The retained source indices are evidence, not a claim that the current traced g channel honors them. Public analysis now states that limitation; no engine/catalog change, fake θ, or source-line duplication is added.
- Corrected stale public iris-radius prose to the current derived wide-state 10.131041 mm, rather than the obsolete 11.2 mm literal. All source R/d, gap splits, source-only infinity control state, and the explicit patent-VR versus non-VR production correlation remain unchanged.
- Actual verification: focused surface and image-circle audits pass all three candidates, zero undersized/skipped. Aperture audit clears all seven source stations after the S14 beam-floor correction; format-field checks reach at least 99% at all seven with zero unsolved. Native SVGs were inspected at nine focus/zoom controls per lens (27 views), zero renderer trims; the 35–70 source remains infinity-only despite repeated focus controls. Current resolver/catalog consistency passes; no engine, catalog, tolerance, or per-lens test changes.
