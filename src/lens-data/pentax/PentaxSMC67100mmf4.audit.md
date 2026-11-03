# Audit Log — smc Pentax 67 100mm f/4 Macro

Patent: US 6,002,533, Embodiment 1 / Table 1

## 2026-06-23 — Pentax folder patent audit

### Patent evidence

- Local file `patents/US6002533.pdf` was not present, so this pass used the public Google Patents page/PDF for US 6,002,533.
- Checked the public patent text and first drawing sheet against the current attachment-plus-main-lens data.
- The drawing confirms the close-up attachment ahead of the main lens, the attachment/main-lens split, and the larger object-side attachment envelope represented by the current SDs.

### Disposition

- Glass labels remain unchanged; the current OHARA/legacy labels match the patent nd/vd coordinates used by the data file.
- APD status remains `false`; the patent lists nd/vd only and does not provide partial-dispersion constants.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain unchanged after drawing review.

## 2026-11-03 — Standalone close focus reconstructed

The close row was the patent's short-distance state for use with the close-up attachment: d11 = 15.58 mm with BF 76.823842 mm, the main lens's own infinity back focus at that d11. On its own that row was in focus at infinity (paraxial vergence −2×10⁻⁸ m⁻¹), so the focus control moved d11 without focusing closer. Under row-anchored labels the readout showed ∞ across the whole slider, and the lens was on the close-endpoint guard's exemption list.

- Focus is now a reconstructed unit helicoid focus with a floating d11, on six keyframes [0, 0.0625, 0.25, 0.5, 0.75, 1]. Each row's object-to-image distance is 0.443 m divided by its keyframe: ∞, 7.088, 1.772, 0.886, 0.591 and 0.443 m.
- r11→STO opens linearly in the slider coordinate from 9.30 to the patent's 11.58 mm (d11 13.30 → 15.58 mm). That schedule is an assumption; the patent prints no standalone one.
- BF is solved per row for that row's distance: 77.425842, 78.840721, 83.675199, 92.078758, 104.613917 and 129.208309 mm.
- At 0.443 m the back focus is 52.38 mm beyond the floated-d11 infinity BFD. Newton's relation gives −0.519×, against Pentax's published 0.52× standalone limit; holding d11 at 13.30 mm instead would give −0.510×.
- Why six rows: the focus label interpolates inverse distance between rows. At 1:2 the object-to-image distance is far from proportional to 1/travel, so two rows left the label 57 % off the in-focus distance at mid-travel (0.805 m shown for a state focused at 0.576 m). With a near-infinity row at 7.09 m and even spacing after it, the worst gap is 3.25 %.
- Unchanged: the prescription, stop, SDs and infinity row. No row is published. `closeFocusM` stays 0.443 m, now the distance the close row focuses at, and the lens leaves the guard's exemption list.
- Checks: validator clean; `audit:aperture`, `audit:image-circle`, `audit:field-coverage` and `audit:surface` pass, as before; the f/4 axial beam traces unclipped at the 0.886, 0.591 and 0.443 m rows.

Text sync: header focus note, focus comment and description, analysis Focus Mechanism (attachment-state explanation, reconstruction table and limits).
