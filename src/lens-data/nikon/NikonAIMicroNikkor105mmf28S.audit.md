# Audit Log - Nikon AI Micro-Nikkor 105mm f/2.8S

Patent: US 4,392,724, Example 1

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked the Example 1 glass table against the current data file. No data changes were made in this pass.
- Retained `TAF1 / TAF105 class (HOYA, 773/496)`, `LAF3 class`, `E-LAF7 / S-LAM7 class`, `E-FD8 / S-TIM28 class`, `LAC13 class`, `TAF2 / J-LASF017 class`, and `NBFD3 class` labels as appropriate catalog or class-level matches for the published `nd`/`vd` pairs.
- Retained `TAC4 class (HOYA, 734/511)` as an Abbe-only historical HOYA class because no coefficient-backed public catalog entry in the current resolver was verified.
- Retained the two `Unmatched (595/355 vintage flint...)` rows because the patent glass is close to FF5 / S-FTM16 class but is measurably higher-index than the available public catalog entries.
- The front positive and several rear elements are high-index lanthanum/crown-flint classes as already documented; no new high-index metadata field was required.

### Phase 2 - Geometry and SD review

- Rechecked the radii, thicknesses, and glass assignments against Example 1. The existing data matches the published prescription.
- Confirmed that the patent publishes floating macro variables but does not publish per-surface clear apertures or a semi-diameter table.
- Retained the existing semi-diameters as visualization estimates. They taper rationally around the stop, preserve plausible edge clearance through the macro group, and remain consistent with the patent drawing and the documented no-clear-aperture source limitation.

### Phase 3 - Spectral / APD review

- The patent provides only `nd` and `vd`; no line-index table, partial-dispersion table, ED/APD claim, or aspherical data was found.
- No APD flags were added.

## 2026-10-30 — Fresh F-mount source, rim, and glass reinspection

- Directly inspected original `patents/US4392724.pdf`: Example 1 Figure 1 PDF p.2, complete 600 dpi crop `/tmp/fb9-105-600.png` and detailed cap ends; Table 1 PDF p.21. All convex/concave faces and the cemented interface were reviewed. First/last glass vertices span about 1446 working px / 78.962 mm, approximately 18.3 working px/mm or 9.15 native px/mm (300 dpi original).
- Two resolved source lands become inferred cuts. S6 measured q≈0.870, native edge radius≈160 px, one-pixel q uncertainty ±0.012 (0.858–0.882): adopted depth **7.50 mm**, outer sd **20.0 mm** matching the opposite face, clear cap **17.484707604 mm**, adopted q0.874235, land2.515292 mm. Complete beam reach **16.244426196 mm** at close/field4.006634857°, required margin0.052454123 mm, actual clearance1.240281408 mm. S7 measured q≈0.923, native edge≈142.5 px, uncertainty ±0.014 (0.909–0.937): adopted depth **3.72 mm**, outer16.0, clear cap **14.772108854 mm**, q0.923257, land1.227891 mm. Beam reach **14.469101999 mm** at infinity/field8.219913833°, margin0.05 mm, clearance0.303006855 mm. Both adopted caps lie within the measured q ranges; zero untraced fields and no inferred-cut beam errors. Other end strokes do not resolve additional independent air lands; cemented steps are not recast as air faces.
- Freshly checked all **10 physical n/ν pairs** against Table 1: all retained. The source table defines refractive index/Abbe number without an explicit printed wavelength, C/F/g indices, θgF table, ED/APD claim, or named supplier. The stored conventional d-line reading follows the coordinate families. Current coefficient coverage **8/10**; L31/L33 at1.59507/35.5 remain unresolved, with no strict full-catalog match. Qualified the available TAC4 and nonidentical J-LASF017 proxies; public coverage now includes TAC4, and retains TAF1/TAC4/LAC13 coordinate differences rather than claiming production identities. No invented spectral indices or partial-dispersion overrides.
- Actual verification: focused surface and image-circle checks pass all three candidates, zero undersized/skipped. Aperture3/3 within3% with zero rim/iris/trace failures; field coverage3/3≥99%, zero unsolved/skipped. The 24mm final coupled values were independently rerun after the rejected10.7 trial. Native SVGs inspected at nine control states per lens (27 views), zero renderer trims; 24mm focus states repeat its source-only infinity prescription. Actual resolver and `assertCatalogConsistent` pass; full-catalog strict searches retain the three unresolved glasses. No engine, catalog, tolerances, shared tests, or root files changed.

## 2026-10-30 — Qualified FF5 spectral-proxy follow-up

- Glass-only follow-up against the integrated source/rim audit, with exact surface arrays and all source nd/vd/spectral fields unchanged. Freshly viewed Example1 Table1 PDF21 of `patents/US4392724.pdf` in this session supplies L31/L33 at1.59507/35.5; no supplier or extra wavelength indices are named.
- Replaced the two suppressing unmatched labels with **FF5 loose spectral proxy**. Current HOYA formula-3 coefficients give nd1.592702942/ν35.445619 (catalog nominal1.59270/35.45), versus source1.59507/35.5: Δn−0.002367058, Δν−0.05, accepted by existing compatibility/consistency rules but explicitly not a strict coordinate match. No production supplier, melt, or material identity is inferred. Coverage is now10/10 compatible coefficient curves.
- Current runtime anchors the borrowed curve to source nd: both G indices remain exactly1.59507. Relative to former Abbe fallback, R changes1.590151109474→1.590185876745 (+0.000034767272), B1.606913644685→1.606907349343 (−0.000006295342), V1.616704457114→1.616817959971 (+0.000113502857), identically for both glasses. These are model/proxy wavelength changes, not patent measurements or numerical partial-dispersion evidence. No per-lens C/F/g or dPgF fields are added.
- Actual verification: resolver/`assertCatalogConsistent` pass10/10 curves; focused surface/cut guard passes; exact surface arrays and source optical-pair/spectral arrays compare identical to live input. Evidence `/tmp/fb9-105-ff5-proof.json` and `/tmp/fb9-105-ff5-glass.json`. Geometry, focus, aperture, source prose/history and shared engine/catalog/tests remain unchanged.
