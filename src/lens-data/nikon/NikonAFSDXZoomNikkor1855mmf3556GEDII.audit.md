# Audit Log — Nikon AF-S DX Zoom-Nikkor 18-55mm f/3.5-5.6G ED II

Patent: US 2006/0007559 A1, Example 4 / Figure 13.

## 2026-08-30 — Integration, patent-figure SD, and glass audit

### Semi-diameter review

The patent does not publish clear apertures. Figure 13 was rendered from the supplied PDF page 14 at 600 dpi and its
optical rims were compared with the runtime lens silhouette. Leader lines, rays, brackets, and housing outlines were
excluded from the comparison.

| Surfaces | Before | After | Disposition |
|---|---:|---:|---|
| 4-5 | 13.2, 13.2 mm | 12.4, 12.4 mm | The G1 positive meniscus was visibly oversized relative to Figure 13. |

The other inferred apertures already follow the patent silhouette and remain unchanged.

### Glass classification

All seven optical-glass entries already resolve to compatible catalog curves; only the bonded aspheric resin remains
unresolved. No new catalog definition or relabel is justified. L2a is now explicitly marked `apd: "inferred"` because
its unique very-high-Abbe position is the defensible correlation with Nikon's one-ED production specification. The
annotation does not assert a composition, supplier, melt, or unreported partial-dispersion values.

### Metadata and analysis sync

- Corrected the production display name to Nikon's `f/3.5-5.6G` designation spacing.
- Updated the companion analysis with the inferred ED-role discipline and refined-rim verification wording.

## 2026-10-07 — Zoom iris and station f-numbers against the patent

The file declared one fixed wide-open iris for all three zoom stations. US 2006/0007559 A1 gives the aperture stop of
Example 4 a position and no diameter, and its printed f-numbers do not fit one stop radius, so the declaration is
removed and the iris is traced from each station's f-number.

| Field | Before | After | Source |
|---|---|---|---|
| `zoomApertureModel` | `"fixed-iris"` | absent (default per-station iris) | Table 4, printed p. 10: Specifications `FNO = 3.56-5.9`; surface 8 `Aperture Stop S` lists `d = 2.0000` and no diameter. Figs. 14 / 15 / 16 (Sheets 14-16 of 24): `FNO=3.56` / `FNO=4.65` / `FNO=5.90`. ¶0094 (printed p. 6): the plotted f-number is the value at maximum aperture. |
| Traced iris radius, 35.0 mm | 7.893 mm | 7.962 mm | Follows from Fig. 15 `FNO=4.65` by real marginal ray. |
| Traced iris radius, 53.5 mm | 7.893 mm | 8.007 mm | Follows from Fig. 16 `FNO=5.90` by real marginal ray. |
| Traced on-axis f-number, 35.0 mm | f/4.69 | f/4.65 | Fig. 15 `FNO=4.65`. |
| Traced on-axis f-number, 53.5 mm | f/5.98 | f/5.90 | Fig. 16 `FNO=5.90`. |

Why one radius does not fit:

- The radius each printed f-number needs is 7.893 / 7.962 / 8.007 mm by real marginal ray (spread 1.43%, 1.20% beyond
  print rounding) and 7.799 / 7.791 / 7.748 mm to first order (spread 0.65%, 0.43% beyond print rounding).
- A 7.799 mm first-order stop gives F/4.6451 and F/5.8617. The first rounds to Fig. 15's 4.65; the second agrees only
  with Table 4's one-decimal 5.9, not with Fig. 16's 5.90.
- The only fixed-diameter statement in the Example 4 description (¶0133, printed p. 9) concerns the flare stopper F,
  not the aperture stop S.

Confirmed unchanged:

- Example identity: all fourteen refracting/stop rows of Table 4, the surface 3 asphere data (`κ = 0.0375`, C3-C10), and
  the D5 / D14 / D15 variable intervals at infinity and closest focus match the file; surface 14 stores D14 + D15.
- Focal lengths: Table 4 `f = 18.50000 / 35.00000 / 53.50000`; the prescription computes 18.5000 / 35.0000 /
  53.5001 mm.
- `nominalFno` stays `[3.56, 4.65, 5.9]`, the values of Figs. 14-16.
- Stop position: 1.8 mm behind surface 7 and 2.0 mm ahead of surface 9, as Table 4 lists.
- Every semi-diameter, including the 7.799 mm on the STO row. The iris is the axial limiter at all three stations; no
  lens rim clips the wide-open axial beam.

Left open:

- The 7.799 mm on the STO row is the wide-state first-order value and is smaller than the traced iris radii
  (7.893-8.007 mm). It is left as authored.
- `fstopSeries` starts at the marketed 3.5 while the wide station opens to f/3.56, and the file has no `apertureDesign`
  field. Neither is touched because `nominalFno` is unchanged.
