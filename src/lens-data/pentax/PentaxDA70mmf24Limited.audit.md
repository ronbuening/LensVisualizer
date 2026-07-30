# Audit Log — Pentax DA 70mm f/2.4 Limited

Patent: US 7,542,219 B2, Embodiment 1

## 2026-06-23 — Pentax folder patent audit

### Patent evidence

- Rechecked local patent file `patents/US7542219.pdf`.
- Reviewed the first drawing sheet; it confirms the positive front group, variable-aperture diaphragm (VAD), fixed-aperture diaphragm (FAD), and rear group represented in the data file.

### Disposition

- Glass labels remain unchanged. The unresolved `682575`, `794255`, and `676440` rows remain code-backed because no exact current public catalog matches were identified.
- APD status remains `false`; the patent lists nd/vd only.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain unchanged; the VAD/FAD proportions are consistent with the patent drawing.

## 2026-07-30 — SUMITA BAK2 catalog side-effect cleanup

- Adding coefficient-backed SUMITA BAK2 made the prior `BaK2-class` prose token resolve to code `540597`.
- L5 is the distinct patent coordinate `544601` (nd = 1.54354, νd = 60.1), outside the catalog safety window for SUMITA BAK2.
- Replaced the soft class label with `Unmatched (544601 light barium crown; not SUMITA BAK2)` so the runtime keeps the authored Abbe fallback.
