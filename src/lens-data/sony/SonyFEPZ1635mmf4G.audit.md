# Audit Log — SONY FE PZ 16-35mm f/4 G

Patent: JP 2023-44106 A, Example 5

## 2026-08-11 — Figure, metadata, and glass audit

### Semi-diameters

The image-circle audit reported zero undersized surfaces. The prescription already uses the patent's published effective
diameters divided by two. Figure 53 visually agrees with the front-group taper; its small rear groups and labels are too
dense for reliable automated photogrammetry. The source `phi/2` values were therefore retained without adjustment.

### Glass classification

All 13 elements resolve through existing coefficient-backed six-digit coordinate families. The patent names no glass
supplier, so the vendor-unresolved coordinate labels were retained. No missing reusable glass type was found and no
catalog expansion was needed.

### Identity and metadata

The display name was checked against Sony model SELP1635G and retained as `SONY FE PZ 16-35mm f/4 G`. The three inventor
names were romanized to the repository's canonical spellings: Kohei Uemura, Tetsuichiro Okumura, and Naoki Miyagawa.

## 2026-08-12 — Display screenshot follow-up

The rendered site screenshot was compared directly with Patent Figure 53 at the wide state. The silhouette remains
consistent with the patent-published effective diameters (`sd = phi/2`), so those source dimensions were retained. The
eight aspherical-surface tags, L22/L23 cement label, stop, and five group labels agree with the prescription and figure.

The diagram now displays the patent identifiers L11–L14, L21–L23, L31–L32, L41–L43, and L51. All 13 elements resolve
to existing coefficient-backed catalog curves. Because the patent supplies optical coordinates but no commercial glass
names or spectral-line measurements, the supplier-unresolved class labels remain the most defensible classification;
no new catalog entry was warranted.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.24 → 0.29 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 21.4 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: printed d0 = 279 mm rows (reference unresolved); focus description gives production 0.28 m wide / 0.24 m tele.
- `catalog.closeFocusM.marketing` 0.28 / 0.24 m (wide / tele) keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

Text sync: focus comment: the scalar is the object-to-image distance of the d0 = 279 mm rows; Sony's 0.28 / 0.24 m is catalog metadata.

## 2026-11-14 — Finite conjugates declared as object-to-image distances

| Zoom / keyframe | Source distance and reference | Source locator | Paraxial residual |
| --- | --- | --- | --- |
| 0 / 1 | 279 mm, image-plane | JP 2023-44106 A, Example 5, Table 23 (PDF p. 38), close-focus Wide column: d0 = 279 mm | +0.085206 mm; +4.29 quarter waves; first-surface −20.44 |
| 1 / 1 | 279 mm, image-plane | JP 2023-44106 A, Example 5, Table 23 (PDF p. 38), close-focus Mid column: d0 = 279 mm | +0.107428 mm; +5.38 quarter waves; first-surface −42.63 |
| 2 / 1 | 279 mm, image-plane | JP 2023-44106 A, Example 5, Table 23 (PDF p. 38), close-focus Tele column: d0 = 279 mm | +0.331099 mm; +16.34 quarter waves; first-surface −91.04 |

The table lists d0 as the gap from the object row (0, OBJ) to surface 1, which reads as an object-to-first-surface distance. Read that way the states do not focus; read as the object-to-image distance they do. They are declared `image-plane` under the ruling recorded in `LENS_DATA_SPEC.md` § Finite conjugates. A second reading of the patent confirms the printed value, its unit and the gaps of each column.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.
