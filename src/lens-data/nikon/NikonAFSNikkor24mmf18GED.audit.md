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

### Verification

- Pending batch verification after the current Nikon audit pass.
