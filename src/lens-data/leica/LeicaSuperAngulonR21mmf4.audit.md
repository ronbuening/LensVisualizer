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
