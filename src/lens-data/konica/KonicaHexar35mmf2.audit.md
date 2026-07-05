# Audit Log - KONICA HEXAR 35mm f/2 (Konica Hexar AF)

Patent: JP H05-164961, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Source-gap audit

- Searched local `patents/` for JP H05-164961 / JPH05164961A / JP1993164961A / publication-number variants. No matching local patent PDF was present in this workspace during this pass.
- Reviewed the data-file header and companion analysis notes, which identify JP H05-164961 Example 1 as a normalized f = 1, FNo = 2.0, 63 degree full-field modified Xenotar-type lens for a leaf-shutter camera. Those notes also state that the patent does not publish clear apertures.
- Stored SDs remain internally consistent with the documented architecture: a broad front meniscus at 14.5-15.5 mm, a smaller front negative/central shutter region around 7.6-9.9 mm, and a rear cemented group expanding back to 12.2-15.3 mm.
- No SD values changed. This is a source-gap audit rather than a patent-diagram confirmation; the JP H05-164961 diagram should be checked if the local PDF is added later.

### Verification

- `npm test -- elementRenderDiagnostics`
