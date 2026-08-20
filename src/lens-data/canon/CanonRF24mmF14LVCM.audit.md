# Audit Log - CANON RF 24mm f/1.4 L VCM

Patent: JP 2025-15010 A, Numerical Example 3 / Figure 5

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 27, Figure 5, at 600 dpi with `audit:patent-figure`; the calibrated figure scale was 57.50 µm/px.
- The clean rows have a median figure/data ratio of 1.001. E1-E8 and E12-E15 already follow the patent silhouette closely.
- Refined the shared E9/E10 cemented rim on surfaces 16-18 from 13.5 mm to 11.7 mm, matching the figure's 11.67 mm optical-rim measurement.
- The trial values pass the surface validator. The stop semi-diameter remains unchanged because it is calibrated to the patent F/1.46 entrance pupil.

### Glass classification

- Confirmed all 15 glass elements resolve to coordinate-compatible Sellmeier curves while their supplier-neutral annotations avoid claiming Canon's production melts.
- The patent publishes only nd and νd, so no line indices or anomalous-partial-dispersion values were invented and no new catalog row is justified.

### Identity and metadata

- Verified the display name `CANON RF 24mm f/1.4 L VCM` against Canon's `RF24mm F1.4 L VCM` product name and repository spacing conventions.
- Romanized the inventors as Kenji Shinohara and Yuki Matsuba from the English patent-family metadata.
- Normalized the route key to `canon-rf-24mm-f14-l-vcm`, matching the sibling RF VCM prime keys.
