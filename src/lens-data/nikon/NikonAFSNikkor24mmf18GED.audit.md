# Nikon AF-S NIKKOR 24mm f/1.8G ED Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/JP2017003807A.pdf`, Example 4 / paragraphs 0079-0082 and FIGS. 4, 10, and 16.

### Prescription, Focus, And Aspheres

- The data file remains aligned to Example 4: `f = 24.43 mm`, `FNO = 1.86`, `2ω = 84.4°`, `TL = 124.37 mm`, and `BF = 38.46 mm`.
- The surface table confirms the stored two-group focus movement: `d10 = 9.36 -> 4.38 mm` and `d24 = 38.46 -> 43.44 mm`.
- The two patent aspheres are surfaces 5 and 22. Their K and A4-A12 values match the stored `5A` and `22A` blocks, with omitted terms treated as zero.
- The two 0.08/0.12 mm `nd=1.51380`, `νd=53.0` layers are patent-listed hybrid resin media; retaining them as explicit optical media remains correct even though they are not catalog glasses.

### Glass And APD

- The data file's Ohara labels remain rational class matches for the patent `nd`/`νd` rows.
- L9 and L11 remain the two ED elements. Their `apd: "inferred"` status is appropriate because the patent gives only `nd`/`νd`; the line indices and `dPgF` are catalog-derived S-FPL51 helper values, not patent-listed spectral rows.
- No additional APD, high-index, or line-index values were found in the patent text.

### Semi-Diameters

- JP 2017-3807 A does not publish per-surface clear apertures or effective diameters for Example 4.
- Current SDs remain documented estimates. They make rational sense against FIG. 4: broad front-group apertures for the retrofocus field, a stop at `sd = 10.46 mm`, post-stop ED doublets near the stop, and modest rear expansion through the final hybrid asphere.
- No SD values were changed in this pass.

## 2026-10-29 — Original-figure lands, source-beam rims, and fresh glass reinspection

- Directly inspected local `patents/JP2017003807A.pdf`, Example4 Figure4/PDF23 at600dpi and native300dpi, prescription/aspheres/PDF18–19, d-line convention/PDF14. All14 source nd/vd pairs exact and retained. Twelve actual catalog curves qualified as spectral proxies; two resin layers remain unresolved. Removed eight catalog helper CFg/dPgF fields on L9/L11, preserving qualified catalog curves/inferredED roles. Removed unsupported UV-curing chemistry wording; source gives resin, not chemistry/trade name or measuredAPD.
- S1 continuous front cap22→23mm. Exposed S2/S14/S16 preserve clearcaps18/12.4/12.0 with outerlands23/13/12.5mm. Native endpoint q≈.74±.012/.84±.024/.83±.026, edge143/76/71px; adopted.783/.954/.960 conservatively preserve larger clearcaps. Native first/last vertex span~530px/85.91mm gives6.17px/mm, frontouter~23mm. All other exposed/cemented boundaries inspected; no independently resolved further concave land/cemented land is added.
- Inferred S9/S10 rims12.0/11.5 clip printed f1.86 to f1.98. Fresh --raise requires12.5/12.4; adopted common12.5 along full source L5arcs. Axial infinity aperture now clears, without control/sourceprescription changes. At sourceclose objectdistance104.38mm, fulliris10.457452mm gives25/25 aimed axialrayspassing (baseline13/25,12clippedS9).
- Surface/circle pass; axial aperture within3% of source1.86; formatcorner>=99%. Nine actualSVG states have14finite paths/zero trim and finalraster inspected. All14 sourcepairs/catalog checks pass; shared dispersion/parity/partial tests3files94pass. Source focus gaps/aspheres/tolerances unchanged.
