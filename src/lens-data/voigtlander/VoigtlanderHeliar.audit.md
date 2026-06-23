# Audit Log — Voigtländer Heliar

Patent: US 716,035

## 2026-06-23 — Full Voigtländer local-patent sweep

- Expected local patent source: `patents/` entry for US 716,035.
- Searched the local untracked `patents/` folder by filename patterns and full extracted PDF text references; no exact US 716,035 patent PDF was present.
- No glass, APD, high-index, prescription, or semidiameter changes were made. This lens remains unaudited against the requested local patent until the source PDF is added to `patents/`.

## 2026-06-23 — Stop placement adjustment

- Source checked: Google Patents PDF/drawing for US 716,035, since the local `patents/` copy is still absent.
- Patent text places the blind/shutter directly behind the central lens, and the drawing shows a visible clearance rather than a coincident stop surface.
- Moved `STO` off S5 while preserving the full 8.1-unit rear-side air space: S5→STO changed from `0.0` to `1.6`, and STO→S6 changed from `8.1` to `6.5`.
- No powered-surface radii, glasses, BFD, EFL, or total optical track changed.
