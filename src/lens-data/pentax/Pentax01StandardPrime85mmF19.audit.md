# Hidden representative pilot audit
Source E1 retained exactly from verified_E1.json. No source repair, rescaling, refocus, cap fitting or overrides. All plates retained. Inherited table pixel review and source archive verification are recorded in prior recovered-source handoff; not repeated full source readback this pass.
Fresh: inspected Fig1 at1500px; inferred caps before tracing, strictTS and native construction pass. Initial schema errors (format ID, numeric example ID, missing labels) corrected with no optical changes; initial receipts retained. Initial diagnostic attempted30.8 outside configured24.75 envelope and hit null field geometry; this is harness range misuse, not optical failure. SOURCE_FIELD_DIAGNOSIS runs a separate61.6full/30.8max envelope with identical optics, preserving original data envelope. Counts are26traces including duplicatecenter, not throughput estimates.
No delivery, repository write, PR, package or full acceptance claim. Pending independent caps/source review, full integration/viewer gates and material edge-clipping qualification.

## Deployment validation (2026-11-11)

- Source: US 2012/0268834 A1 (Google Patents PDF), Numerical Embodiment 1, kept as `patents/US20120268834A1.pdf`.
  All 18 rows and 12 aspheric values exact; EFL 8.5007, back focus 0.53, L 31.30 as printed.
- Integration fixes: the camera-side OP (0.55 mm, gap 2.02) and cover glass CG (0.50 mm, gap 0.53) moved from drawn
  elements 9–10 / surfaces 15–18 into `rearPlates`; surface 14 keeps d 4.194. `imageFormat` 1/1.7-inch type (patent
  Y 4.65 mm is that half-diagonal, as on the PENTAX-02 and -06); the `projection` block is dropped so the field comes
  from the format, as on those two. `catalog.lensMounts` ["pentax-q"], `catalog.closeFocusM` 0.2 m.
- Product: Ricoh lists 8 elements / 5 groups with two aspherical elements; the Impress construction drawing matches
  Fig. 1. All nine embodiments share the layout; Embodiment 1 is a fair pick.
- Open for the cleanup pass: name/key ("85mm" reads as 85 mm), element shape types, public wording.
