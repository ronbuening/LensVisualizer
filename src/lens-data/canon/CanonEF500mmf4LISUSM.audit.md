# Canon EF 500mm f/4 L IS USM — patent audit

## 2026-09-25 — MTF image-plane census

Source: local `patents/US6115188.pdf`, Numerical Example 24, PDF p.79,
columns 33–34 (the page is image-only despite surrounding searchable pages).
Visually checked every R3–R29 radius, thickness and index, all 15 powered-element
Abbe numbers, the infinity D12=20.52 / D15=93.55 state, and the original stop.
All match. No dimensional scaling, aspheres or source line indices are present.
The PDF's correction certificate does not amend Example 24.

**Cause: folded rear plate plus source self-inconsistency.** Source R30/R31 FL is
2.20 mm / 1.516330 / 64.1 after D29=30.00 mm. Restored it to `rearPlates`;
D31=31.34 and D32=38.94 sum to the physical 70.28 mm trailing gap across inactive FC.
No inferred glass identity was added. Front plane HG (5.00 mm, same coordinate) is
outside the rear-plate scope and has no infinity power; its existing finite-object
normalization is retained. Close focus is a declared reconstruction, not used here.

Independent reduced-angle propagation yields EFL 491.356789 mm (source 490.56),
air BFL 102.401315 mm, physical BFL 103.150443 mm. Source physical image distance is
30+2.20+31.34+38.94=102.48 mm. The old fold was 101.730871512 mm. No single supported
misprint explains both residuals. Keep published values; do not fit a new rear gap.
Runtime offset **+0.670443 → +0.670443 mm**; Section E row deleted as documented.
The filter restoration changes physical image placement and exact tracing; changelog added.
Validation: focused buildLens/MTF check; full corpus gates at the ten-lens checkpoint.

## 2026-10-04 — Drop-in filter drawn as an element

- The rear drop-in filter plate FL moved out of `rearPlates` into the drawn prescription: surfaces 30–31 and element
  16 (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place
  and a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 17.5 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (16.53 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, analysis half-field and the traced axial,
  mid-field and corner bundles are unchanged, and `npm run audit:field-coverage` still reports 100% of the corner. The
  plate now clips the chief ray at 3.77° (the half-field was 3.85°, set by another rim); the format corner is 2.52°,
  so coverage is unaffected, and the diagram's off-axis field narrows from 2.31° to 2.26°.
- Glass: the filter is labelled `S-BSL7 (OHARA coordinate match; supplier unconfirmed)`. Example 24 prints nd 1.516330 /
  νd 64.1, Ohara S-BSL7's coordinates, and the files for Examples 1 and 25 of the same patent already carry that label
  for the same filter. The plate previously had no glass label and traced on the Abbe-number estimate.

## 2026-10-30 — Original shape and glass review

The exact local original is `patents/US6115188.pdf`. Numerical Example 24 is on PDF p. 79, cols. 33–34;
matching Fig. 87 is on PDF p. 58, sheet 56. Its embedded native raster is 2320 × 3408 px at 300 ppi.
The 2530 × 1000 rotated optical crop is unresampled. The approximately 2419 px HG-front-to-image span
across the 411.07 mm physical source track gives about 5.89 px/mm (0.170 mm/px). Practical rim
uncertainty is ±0.8 mm. The 3× detail crops are reading enlargements and add no source resolution.

### Integral source HG

Example 24 explicitly tabulates HG as R1/R2, a 5.00 mm flat plate with N1 = 1.516330 / ν1 = 64.1,
followed by 1.50 mm air to R3, and Fig. 87 includes it. Third-embodiment c-7 (PDF p. 78, col. 32) says:

> To protect the exposed lens surface to the outside and to prevent occurrence of a change of the position
> of the sharp focus owing to the expansion or contraction of the lens elements with change of the ambient
> temperature, use may be made of a flat glass plate or transparent member or a lens of weak refractive power
> on the object side of the lens system.

This describes alternative integral front members for protection and thermal-focus behavior. It does not
call the selected numerical HG an optional, removable or free-location accessory filter. The optional-accessory
exclusion therefore does not apply. HG is restored physically, consistently with the already included HG
of Example 25. Media IDs are shifted into ordinary front-to-rear source order; their numeric values are unchanged.
Both HG and required FL count in the selected source’s 17 elements / 13 groups, matching the retained maker count.

The restored source R1 origin is 6.50 mm ahead of the old R3 origin, and the physical source track becomes
411.07 mm. EFL, powered R/d, stop rule, L2 gap keyframes and 16.833981615 mm cam travel are unchanged.
The derived close conjugate changes from 4498.297435 to 4500.000000 mm because the physical HG replaces
its prior omission normalization; `closeFocusM` is synchronized to that existing 4.5 m reconstruction constraint.
No finite-focus prescription is claimed as published.

### Figure rims and constraints

| Surfaces                       | Adopted clear sd (mm) | Resolved outer sd (mm) |
| ------------------------------ | --------------------- | ---------------------- |
| 1–2, HG                        | 60                    | —                      |
| 3–4, L1a                       | 61                    | —                      |
| 5–6, L1b-1                     | 49.8                  | —                      |
| 7 / 8, L1b-2                   | 48.8 / 46.2           | S8: 48.8               |
| 9–10, L1c-1                    | 43.6                  | —                      |
| 11 / 12, L1c-2                 | 38.5 / 34.9           | S12: 38.5              |
| 13 / 14 / 15, L2               | 30.3 / 30.3 / 28.9    | S15: 30.3              |
| 17–19, L3a                     | 15.8                  | —                      |
| 20 / 21 / 22, first L3b pair   | 15.2 / 15.2 / 14.0    | S22: 15.2              |
| 23 / 24, separate L3b negative | 14.0 / 15.0           | S23: 15.0              |
| 25–26, first L3c positive      | 16.5                  | —                      |
| 27–29, final L3c doublet       | 17.5                  | —                      |
| 30–31, FL                      | 25                    | —                      |

Twenty-three existing caps change; five `rimExtensionSd` fields preserve clear aperture below visible
outer shoulders. Every element, concave end, four cemented interfaces and both plates was inspected.
Bracket, leader, stop and mechanical strokes are excluded from optical heights. No bonded-interface land,
disconnected resin, inferred cut or unsupported full compound blank is authored. The actual SVG at roughly
native figure scale reproduces the resolved shoulders and source hierarchy.

A full spherical-cap trial reaching all blank heights passed geometry but was rejected where it erased the
resolved source shoulders. A clear S7 = 49.8 mm trial needs 1.77 mm sag intrusion across D6 = 1.78 mm,
exceeding the unchanged 0.96 guard allowance of 1.7088 mm; S7 remains 48.8. No tolerance is relaxed.
Physical residuals are 0.081117 mm at S6–S7 and 0.817689 mm at the capped S22–S23 shoulders.

### Runtime scope

Surface validation, the source infinity aperture criterion, image-circle floor and ≥99% corner-field
coverage pass. The 201-position focus render census has 17 finite closed connected contours in every
state and zero hidden trimming. The source infinity axial pupil clears all 97 sampled rays.

The retained source image-plane discrepancy creates a near-infinity interval without a positive real
object conjugate. At focus 0.01, the derived object-to-image conjugate is −6,732,679 mm; a physical
finite-object seed cannot represent that state. The actual-conjugate census therefore has three
unseeded field bundles there. Its other 100 controls × three fields × 97 pupils (29,100 traced rays)
have clear chiefs and no axial clipping, aim failure or trace failure after HG restoration.

A separate 101-control positive-object probe uses object-to-image distance 4500/focus mm and the full
paraxial stop-centered chief mapping for the three field heights. All 29,391 sampled rays have valid
aiming and tracing, all 101 axial bundles and all chiefs clear. This establishes sampled clearance
in those geometry states; it does not establish a production focus cam or remove the source image-plane
contradiction. Centered IS only is represented, and displaced IS or attached-converter clearance remains
unverified. Source fidelity, sampled runtime clearance and production correlation are separate findings.

### Source and glass disposition

- All 31 modeled source rows and 17 literal pairs, including HG and required FL, are checked against the
  original numerical table. Existing powered R/d, physical source rear path, stop/aperture rule, L2 gap
  controls and pre-existing 0.96 guard remain unchanged. Media IDs follow source order after HG restoration.
- The original third-embodiment definitions (PDF p. 78, col. 32), prose (PDF pp. 76–78), Table 3 (PDF
  pp. 79–80), Fig. 91 (PDF p. 61) and certificate (PDF pp. 82–83) were inspected. The certificate does
  not amend Example 24. Source f/EFL, image-plane and condition (21) discrepancies remain unresolved,
  formalized in `source.errata`; a rounding/misprint cause is not established.
- Ni/νi have no named source spectral reference. All 17 media now have `Unmatched` and
  `indexReferenceNote`; the 16 prior curves are disabled. No per-lens spectral override was present or
  added, and no individual C/F/g index, partial dispersion or APD evidence is published for this example.
- The old inference of d-reference from catalog agreement and aberration-plot wavelengths is superseded.
  Approximate d-reference tracing and qualified product fluorite/UD associations do not establish source
  wavelength, supplier, melt or historical chemistry. No separate cement/resin/hybrid medium is invented.

## 2026-10-31 — d-line inferred from printed coordinates

Scope: reference-line classification and catalog curves only. No source pair, geometry, rim, stop or control changed, and no new whole-lens review is claimed.

The patent names no spectral line for its index and Abbe columns, and the 2026-10-30 review marked every medium `Unmatched` for that reason. Under the coordinate test in `src/lens-data/LENS_DATA_SPEC.md`, 17 of 17 printed pairs match a catalog nd/νd within |Δn| ≤ 6e-5 and |Δν| ≤ 0.15, and none matches a catalog ne/νe. The table is therefore read as d-line, and the per-element `indexReferenceNote` fields are removed.

17 media carry qualified catalog curves. Rows keep the earlier selection where it is still an exact match. Catalog-copied C/F/g indices and dPgF stay removed. Supplier, melt and chemistry stay unspecified.

| Element | Printed n / ν | Curve | Δn | Δν |
| --- | --- | --- | --- | --- |
| Protection glass HG | 1.51633 / 64.1 | S-BSL7 | -0.000000 | +0.042 |
| L1a front positive | 1.496999 / 81.5 | S-FPL51 | +0.000000 | +0.046 |
| L1b positive | 1.496999 / 81.5 | S-FPL51 | +0.000000 | +0.046 |
| L1b negative | 1.834807 / 42.7 | TAFD5G | -0.000000 | +0.021 |
| L1c high-Abbe positive | 1.43387 / 95.1 | CaF2 | -0.000021 | -0.104 |
| L1c negative meniscus | 1.51633 / 64.1 | S-BSL7 | -0.000000 | +0.042 |
| L2 positive | 1.805181 / 25.4 | S-TIH6 | -0.000000 | +0.025 |
| L2 negative | 1.834807 / 42.7 | TAFD5G | -0.000000 | +0.021 |
| L3a negative meniscus | 1.846658 / 23.9 | PBH53 | -0.000000 | -0.014 |
| L3a positive | 1.834807 / 42.7 | TAFD5G | -0.000000 | +0.021 |
| L3b positive | 1.846658 / 23.9 | PBH53 | -0.000000 | -0.014 |
| L3b negative doublet member | 1.6779 / 55.3 | S-LAL12 | -0.000000 | +0.041 |
| L3b negative singlet | 1.733997 / 51.5 | S-LAL59 | -0.000000 | -0.029 |
| L3c positive singlet | 1.696797 / 55.5 | S-LAL14 | -0.000000 | +0.032 |
| L3c positive doublet member | 1.517417 / 52.4 | S-NSL36 | -0.000000 | +0.031 |
| L3c negative meniscus | 1.72 / 43.7 | S-LAM52 | -0.000000 | -0.010 |
| Drop-in filter FL | 1.51633 / 64.1 | S-BSL7 | -0.000000 | +0.042 |
