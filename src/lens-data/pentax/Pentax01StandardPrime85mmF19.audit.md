# Hidden representative pilot audit
Source E1 retained exactly from verified_E1.json. No source repair, rescaling, refocus, cap fitting or overrides. All plates retained. Inherited table pixel review and source archive verification are recorded in prior recovered-source handoff; not repeated full source readback this pass.
Fresh: inspected Fig1 at1500px; inferred caps before tracing, strictTS and native construction pass. Initial schema errors (format ID, numeric example ID, missing labels) corrected with no optical changes; initial receipts retained. Initial diagnostic attempted30.8 outside configured24.75 envelope and hit null field geometry; this is harness range misuse, not optical failure. SOURCE_FIELD_DIAGNOSIS runs a separate61.6full/30.8max envelope with identical optics, preserving original data envelope. Counts are26traces including duplicatecenter, not throughput estimates.
No delivery, repository write, PR, package or full acceptance claim. Pending independent caps/source review, full integration/viewer gates and material edge-clipping qualification. (Closed 2026-11-11: source re-read and integration in the deployment validation below; the lens is now shown; rim and corner-vignetting notes carried as Open items in the cleanup section.)

## Deployment validation (2026-11-11)

- Source: US 2012/0268834 A1 (Google Patents PDF), Numerical Embodiment 1, kept as `patents/US20120268834A1.pdf`.
  All 18 rows and 12 aspheric values exact; EFL 8.5007, back focus 0.53, L 31.30 as printed.
- Integration fixes: the camera-side OP (0.55 mm, gap 2.02) and cover glass CG (0.50 mm, gap 0.53) moved from drawn
  elements 9–10 / surfaces 15–18 into `rearPlates`; surface 14 keeps d 4.194. `imageFormat` 1/1.7-inch type (patent
  Y 4.65 mm is that half-diagonal, as on the PENTAX-02 and -06); the `projection` block is dropped so the field comes
  from the format, as on those two. `catalog.lensMounts` ["pentax-q"], `catalog.closeFocusM` 0.2 m.
- Product: Ricoh lists 8 elements / 5 groups with two aspherical elements; the Impress construction drawing matches
  Fig. 1. All nine embodiments share the layout; Embodiment 1 is a fair pick.
- Open for the cleanup pass: name/key ("85mm" reads as 85 mm), element shape types, public wording. (Closed: name and
  key set at integration; types and wording in the cleanup pass below.)

## 2026-11-11 — Cleanup and wording pass

Fields changed in the data file: header comment rewritten as plain facts (source and grant, no scaling, as-printed
prescription, `rearPlates`, dB placement, stop and figure-read semi-diameters, the 30.8° / Y 4.65 mm field against
Ricoh's 58° and 49.5°, infinity-only focus, glass basis). `subtitle` "US20120268834A1 Numerical Embodiment1 qualified
representative with original camera plates" → "US 2012/0268834 A1, Numerical Embodiment 1 — production
correlation". `specs` (three package notes) → 8 ELEMENTS / 5 GROUPS; MARKETED 8.5mm f/1.9; DESIGN f = 8.5 mm;
FNO = 1.9; 3 ASPHERICAL SURFACES / 2 ELEMENTS, in the PENTAX-02 / -06 form. `focus.closeFocusM` written as 1e15 (same
value); `focus.description` replaced with a plain infinity-only sentence naming L8 as the patent's focusing element
and Ricoh's 0.2 m minimum focus. Element `type` from the signs of R (L1 Negative Meniscus; L2, L5, L6 Biconcave
Negative; L3, L4 Biconvex Positive; L7 Biconvex Positive (1× Asph); L8 Biconvex Positive (2× Asph)); a one-line `role`
on each element from ¶0055–¶0062 and ¶0069; `cemented` C1 / C2 / C3 on L2–L7 and matching `doublets`; `groups` GF (+)
surfaces 1–8 and GR (+) surfaces 10–14 as the patent names them. `catalog.focalLengthMm.design` stays 8.5, the
patent's stated f (the Pentax folder mixes stated and traced values; the traced EFL is 8.5007 mm). No `apd` tags: no
maker source marks special-dispersion elements.

Glass relabels (all from "Literal patent nd/vd; no identified melt"; Δ = catalog − printed, d-line):
L1 BSC7 (HOYA) Δnd −2e-6, Δνd 0.00; L2 E-F8 (HOYA) Δnd 0, Δνd +0.02; L3 TAFD30 (HOYA) Δnd +4e-6, Δνd +0.02; L4 TAF1
(HOYA) Δnd 0, Δνd +0.02; L5 E-FL5 (HOYA) Δnd 0, Δνd −0.01; L6 FD140 (HOYA) Δnd −2e-6, Δνd +0.01; L8 M-NBFD130 (HOYA)
Δnd 0, Δνd +0.03 (NBFD13 ties; the moldable row was chosen for the double-aspheric element). L7 1.75501 / 51.2 has no
row within tolerance (nearest TAC6 / S-LAH97, νd 52.32) and stays "Unmatched (nd=1.75501, vd=51.2)". Both rear plates
gain "BSC7 (HOYA)". Hoya rows were preferred where Ohara rows also fit because Pentax was a Hoya company at the 2011
priority date. No catalog-copied nC / nF / ng existed to drop.

Analysis: removed the "hidden, qualified representative" framing, the ray-grid counts, the TypeScript and integration
status passage, the pixel-span log and the plate-as-element table rows; stated that the 30.8° half-field is the real
chief-ray angle at Y = 4.65 mm (traced: 4.649 mm) and that Ricoh's 58° / 49.5° are nominal sensor angles; added the
grant US 8,970,968 B2, the Impress construction-drawing comparison, the glass table, the condition (3) / (4)
chromatic logic, the asphere coefficients with the patent's sag equation, a conditional-expression table (model
1.436 / −1.350 / 24.6 / 40.7) and a short source list.

Engine numbers before and after are identical: EFL 8.500681449, FOPEN 1.900, halfField 32.388°, stop radius 2.43577
mm, BFD 0.5299, total track 31.298 mm. Surface audit OK; aperture audit reports no rim limit and F-number within 3 %.

Open:
- Table 3 prints F1.9 while the aberration plots are labelled F1.93; the model uses F1.9.
- Semi-diameters are read from Fig. 1 and leave the 1/1.7-inch corner beam strongly vignetted at f/1.9 (lower rim ray
  lost at 30.8°); a rim pass against Fig. 1 and the Impress drawing is still due.
- Near focus to Ricoh's 0.2 m is not modelled; the patent prints no finite-focus spacing.
