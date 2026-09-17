# Audit — Schneider-Kreuznach Curtagon 35mm f/2.8

## 2026-09-17 — Assignee spelling and glass coverage

Source: exact local `patents/US_3318653_A.pdf`, p. 1 optical section, p. 2 sole numerical table.
All twelve radii, axial spacings and six glass coordinate pairs agree at the retained 0.366× scale.

| Field | Before | After | Reason |
|---|---|---|---|
| Patent assignee | Jos. Schneider & Co. Optische Werke | Jos. Schneider & Co., Optische Werke | Same assignee must use the catalog's exact canonical spelling |
| L5 glass | Unresolved 589486 / BAFN6 class | BAFN6 spectral proxy | SCHOTT nd 1.58900 / νd 48.45 is compatible with patent 1.58900 / 48.64 |
| Subtitle | Example 1 / production correlation | Sole example / six-element design | Distinguishes the selected formula without asserting an unproven commercial generation |

The missing comma caused the shared patent-metadata consistency failure; no engine or test tolerance change is needed.
BAFN6 coefficients are sourced from [SCHOTT's Inquiry Glass collection, PDF p. 5](https://www.schott.com/en-dk/products/optical-glass/-/media/project/onex/products/o/optical-glass/downloads/schott-optical-glass-inquiry-glass-collection-datasheets-english-28082019.pdf).
BAFN6 shares catalog code 589485 with HOYA BAF6; existing bare-code precedence is preserved and the lens names BAFN6
explicitly. All six elements now have compatible curves. Patent nd/νd and historical-supplier uncertainty are retained.

The figure was inspected at 600 dpi. Rear optical rims are approximately 7.7–8.2 mm at the 0.02052 mm/px scale;
the automated 9.2–9.8 mm L4/L5 readings include leaders. The front rim is about 8.8–9.0 mm, but the inferred 12.1 mm
aperture also contains the authored full-field chief-ray envelope. A 9 mm candidate clips the 31.25° chief ray;
the schematic alone does not establish a smaller
physical clear aperture. SDs and inferred stop are retained. The marketed 35 mm f/2.8 name remains correct; the
36.6 mm effective focal length belongs in specification context, not the product name. The analysis mirrors the
canonical assignee and qualified BAFN6 spectral proxy.
