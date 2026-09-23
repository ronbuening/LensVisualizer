# Patent and glass audit

## 2026-09-23

Source: local `patents/US3512874.pdf`, p. 3 (Fig. 3, sheet 3) reviewed at 300 dpi and the rear members at 600 dpi;
the Example 3 prescription, r15 sign and d10 corrections from the original dossier were retained. Figure scale is about
21.7 px/mm at 300 dpi from the surface 1 to surface 18 vertex track (50.28 mm); the L4/L5 and L6/L7 block
thicknesses reproduce it within 3%.

The drawing's radial extents are uniformly smaller than the ray envelopes: L1 measures about 19.8 mm, and the drawn
iris opening about 3.15 mm, against the modeled 27.45 mm and 4.34 mm. Both give the same factor (about 0.73), and
the drawn L6/L7 rim (about 4.2 mm) is even below the 4.5 mm f/4 axial marginal ray height, so the figure is a
proportional schematic, not a ray-accurate drawing. Rims were therefore compared after dividing the figure readings
by 0.73. On that basis L1, L2, L3, L8, L9 and L10 already agree within about 10%. The drawn members IV and V are
flat-topped blocks, with member V visibly smaller than member IV. The stored set had a raised surface 7 and a
strongly tapered, oversized member V.

| Surfaces | Before SD (mm) | After SD (mm) | Evidence |
| --- | --- | --- | --- |
| 7 | 9.6 | 8.7 | Member IV is drawn as a flat-topped block at about 8.5 mm (scaled); now level with S8/S9 (8.65/8.5) |
| 10 / 11 / 12 | 8.05 / 7.45 / 5.95 | 6.4 / 6.4 / 6.3 | Member V is drawn with equal front/rear rims at about 5.8 mm (scaled); S10 was 39% over the figure |

The trimmed rims still contain the full on-axis f/4 bundle (maximum axial height 4.6 mm at S10–S12) and the default
27° field bundle (lower rim ray 6.41 mm at S10, 0% clipping), and the 45° chief ray passes every surface. The extreme
45° f/4 meridional bundle was already vignetted and is clipped further on the lower rim at S7 and S10–S11. The
repo surface validator reports no errors, the image-circle check is clean, and the engine's paraxial field estimate
(39.9°) is still limited by surfaces 4 and 6. EFL 20.9993 mm and BFD 36.5227 mm are unchanged.

Glass: all five previously unresolved or coordinate-class labels now resolve to catalog glasses whose e-line
coordinates, computed from the catalog dispersion coefficients, reproduce the patent's native e-line pairs. Stored
ne/νe values are unchanged.

| Element | Patent ne / νe | Before | After | Catalog ne / νe |
| --- | --- | --- | --- | --- |
| L1 | 1.52736 / 64.31 | Unmatched | PC3 (HOYA, PK3 class) | 1.52736 / 64.41 |
| L3 | 1.66104 / 57.08 | Unmatched | K-LaK11 (SUMITA, LaK11 class) | 1.66104 / 57.02 |
| L5 | 1.53530 / 45.67 | Unmatched | FTM8 (OHARA proxy) | 1.53532 / 45.59 |
| L8 | 1.74618 / 27.97 | Unmatched | FD3 (HOYA, SF3 class) | 1.74619 / 28.03 |
| L10 | 1.59142 / 61.03 | 58961x crown class | N-SK5 (SCHOTT) | 1.59142 / 61.02 |

Catalog coverage rises from 5/10 to 10/10 elements. No supplier is claimed and no APD classification is supported.
The display name, patent metadata (with the canonical Jos. Schneider & Co., Optische Werke assignee), lens counts and
static-focus model were rechecked and retained. A live localhost render check could not be performed in this pass
because the browser pane was unavailable.

## 2026-09-23 — Live diagram review

Source: local `patents/US3512874.pdf`, p. 3 (Fig. 3), with the diaphragm region re-rendered at 600 dpi (about 43.4
px/mm) and read column by column; the localhost lens page was compared with the figure before and after the edits.

Stop position. Both drawn iris blades (upper blade centred near column 138, lower near 134 of the 600 dpi crop) lie
about 58.5% of the way from the r12 vertex (column 78) to the r13 vertex (column 178); the thin `d12` dimension leader
is the mark near 30%. The earlier 37.5% split therefore followed the leader rather than the blades. The stop was moved
to the blade position and its semi-diameter recalibrated to the patent's f/4 with the paraxial entrance pupil
(2.62492 mm, unchanged).

| Item | Before | After | Evidence |
| --- | --- | --- | --- |
| d12 split (r12 → STO / STO → r13) | 1.0899 / 1.8165 mm (37.5%) | 1.7002 / 1.2062 mm (58.5%) | Fig. 3 blade columns at 600 dpi; total d12 2.9064 mm unchanged |
| STO sd | 4.3366 mm | 4.2695 mm | Recalibrated: f/4.00001 with the new position |
| Glass labels L1, L3, L5, L8, L10 | Long "e-line catalog equivalent of historical SCHOTT … class; production supplier unspecified" wording | "PC3 (HOYA equivalent; PK3 class, supplier unproven)" and matching short forms | Hover card readability; same catalog glasses and wording as L2/L4/L6/L7/L9 |

Result: EFL 20.9993 mm, BFD 36.5227 mm and total track unchanged; surface validator clean; image-circle check clean.
The on-axis f/4 bundle and the 40° and 45° chief rays pass every surface. With the stop further back, the default
27° meridional bundle now loses about 5% on the lower rim of surface 10 (6.60 mm needed against 6.4 mm); this is
ordinary vignetting and member V was not re-enlarged, because it is already about 14% above the drawing's proportional
height. The engine's paraxial field estimate is 39.6°, limited by surfaces 4 and 6. The engine's own iris radius is
4.345 mm (it derives the stop from the nominal f-number).

Checked and retained: the drawn element heights relative to L1 match the model within about 10% except member V
(model larger, ray-limited) and L3's front rim (model about 8% larger); L8/L9 rims nearly meet as in the figure (gap
intrusion limit). Element names L1–L10, members IV/V as the doublet labels, components A–D as the group labels and
their surface ranges match the patent's numbering; every element `type` matches its radius signs; nd/νd are the
patent's ne/νe with the e-line reference shown; no element carries an APD tag, which the patent does not support; no
surface is aspheric. There is no focus or zoom motion to check (static prescription; the focus slider reads "Not
modeled"). In the live page all ten hover cards show the expected name, type, glass, ne/νe and focal length, all ten
elements use catalog Sellmeier dispersion for the colour trace (axial colour 62 µm at f/4), the off-axis and colour
toggles work, the stop mark renders between L7 and L8 at about 60% of the gap, and the console shows no errors. The
browser pane was hidden during the final pass, so the post-edit page was inspected through its DOM rather than a
screenshot.
