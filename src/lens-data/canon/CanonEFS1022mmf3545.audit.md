# Audit Log - Canon EF-S 10-22mm f/3.5-4.5 USM

Patent: US 2005/0286139 A1, Numerical Fifth Embodiment

## 2026-06-25 - Canon folder patent audit

### Source note

- The exact patent PDF was missing from the local `patents/` tree at the start of this pass. The Google Patents PDF link was fetched to `patents/US20050286139A1.pdf` and validated with `pdfinfo` before use.

### Phase 1 - Glass corrections

- Rechecked the local PDF, data file, and analysis sidecar.
- No glass label changes were needed. N14 remains `Unmatched fluorophosphate crown (485700; nearest OHARA S-FSL5 class)` because the patent constants do not round-trip to a sourceable catalog entry.
- High-index L1/L3/L4 dense-flint rows remain correctly represented by nd values and glass labels.

### Phase 2 - Retained-information audit

- Confirmed the source still omits D9; retained the documented D9 = 3.50 mm paraxial reconstruction.
- The patent does not publish clear apertures. Existing SDs remain estimates from ray envelopes, drawing proportions, edge thickness, and the narrow 0.05 mm air gap constraint.

### Phase 3 - Spectral / metadata enrichment

| Element | Field | Before | After | Justification |
|---|---|---|---|---|
| N10 | `apd` / `apdNote` | omitted | `inferred` | S-FPL51 UD fluorophosphate member of the L4a chromatic-correction doublet. |
| N12 | `apd` / `apdNote` | omitted | `inferred` | S-FPL53 Super-UD fluorophosphate singlet matching Canon's production special-glass description. |
