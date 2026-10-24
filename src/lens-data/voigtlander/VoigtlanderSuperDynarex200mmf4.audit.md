# Audit Log — VOIGTLÄNDER SUPER-DYNAREX 200mm f/4 (Bessamatic)

Patent: US 3,388,956 A, Example 1 / Figure 2 (`patents/US3388956A.pdf`)

## 2026-10-24 — Intake audit: transcription, correlation, rims, glass and wording

### Source identification

- Front page: J. Eggert, E. Tronnier, F. Ueberhagen; assignors to Voigtländer A.G., Braunschweig. Filed Apr. 9, 1964,
  Ser. No. 358,426; German priority Apr. 10, 1963 (V 23,924); patented June 18, 1968. Matches `source`.
- Example 1 (col. 5) is the Figure 2 embodiment: `f = 1.00`, 1:4, intercept s′ = 0.20324, telephoto effect 4.9.

### Transcription check (scale ×200)

Every row was read from a 400 dpi render of col. 5 and matched the data file exactly:

| Patent | Value | File |
|---|---|---|
| R1 / dI / nI / νI | +0.42156 / 0.06676 / 1.64250 / 58.09 | 84.312 / 13.352 / 1.6425 / 58.09 |
| R1′ = R2 / dII / nII / νII | −0.88214 / 0.01945 / 1.72830 / 28.66 | −176.428 / 3.89 / 1.7283 / 28.66 |
| R2′ / a2 | −18.00073 / 0.01183 | −3600.146 / 2.366 |
| R3 / dIII / nIII / νIII | −1.37288 / 0.01945 / 1.65446 / 33.79 | −274.576 / 3.89 / 1.65446 / 33.79 |
| R3′ / a3V / a3H | −5.30649 / 0.40290 / 0.11913 | −1061.298 / 80.58 / 23.826 |
| R4 / dIV / nIV / νIV | +0.34202 / 0.02234 / 1.75787 / 31.56 | 68.404 / 4.468 / 1.75787 / 31.56 |
| R4′ / a4 | +1.17496 / 0.03859 | 234.992 / 7.718 |
| R5 / dV / nV / νV | −0.31069 / 0.00526 / 1.65016 / 39.31 | −62.138 / 1.052 / 1.65016 / 39.31 |
| R5′ / s′ | +0.69782 / 0.20324 | 139.564 / 40.648 |

- The radii agree with the patent's own surface-power table, e.g. φ1 = 0.6425/0.42156 = 1.5241Φ, φ3′ = 0.1233Φ,
  φ5′ = −0.9317Φ. No misprint was found. The longitudinal spherical aberration check gives −0.51 mm at the f/4 rim.
- Derived: EFL 199.868 mm, paraxial BFD 40.619 mm (+0.029 mm residual against the printed s′, retained), track
  181.79 mm. The engine stop radius of 10.86 mm gives f/4.
- Claim 5 repeats the table with R3′ = −5.39649. The description value −5.30649 is kept because φ3′ = +0.1233Φ
  reproduces it.
- Float noise from the scaling (`3.8899999999999997`, `23.826000000000008`, `−62.138000000000005`) was cleaned to
  the exact scaled values.

### Product correlation

- Voigtländer brochure W 3539 (pacificrimcamera.com rl/03738): Super-Dynarex f 4/200 mm, five elements, 12.5°.
- Wikipedia's Bessamatic/Ultramatic lens table: 5 elements / 4 groups, 1962. Collector compilation (dujingtou.com):
  1963, 8.5 m minimum focus, 77 mm filter, 14 cm length.
- Example 1 matches on count, grouping, f/4, field (12.35° paraxial) and assignee. The rear-shutter motivation in col. 3
  fits the Bessamatic. Example 4 is an alternative five-element design that was not chosen: it has no printed stop
  split, and its φ3′ = +0.0035Φ is inconsistent with its R3′ (which gives +0.0347Φ).
- Open: the 1962/1963 product dates fall just before the 1963 priority. No maker section drawing was found.

### Semi-diameters

Figure 2 (sheet 2) was profiled at 300 dpi on the clean right side of the axis. Scale: first-to-last vertex
1191 px = 141.142 mm, i.e. 0.1185 mm/px. The thin rear elements are drawn thicker than true scale, so the
per-group scales range from 0.105 to 0.121.

| Surfaces | Figure | Before | After | Note |
|---|---:|---:|---:|---|
| 1–3 (D1) | 295 px → 35.0 | 37.083 | 35.0 | Common doublet rim; L1 edge 0.82 → about 2.2 mm |
| 4–5 (L3) | 271 px → 32.1 | 35.458 | 32.1 | L2–L3 rim air gap about 0.6 mm |
| 6–7 (L4) | 97 px → 11.5 | 13.697 | 11.5 | Matches the patent's small rear group |
| 8–9 (L5) | 88.5 px → 10.5 | 13.875 | 10.5 | |
| STO | — | engine | engine | Unchanged |

- After the change, the f/4 axial marginal heights (max 24.98 at S1, 7.28 at S6) and the full-field chief ray (8.14 at
  S9, ω = 6.07° to Y = 21.6 mm) stay inside every rim.
- Geometric transmission at the 6.1° corner drops from 78% to 44%. This vignetting comes from the drawn rear group
  and is retained.
- Surface validation (edge thickness, rim slope, gap intrusion) and the image-circle floor both pass.

### Glass identification

| Element | Before | After | Basis |
|---|---|---|---|
| L1 | `Unmatched (…)` | `LAK6 (Sumita; coordinate-equivalent …)` | 1.64250/58.12, Δνd 0.03 |
| L2 | `Unmatched (…)` | `Unmatched (728/287 SF10-class …)` | SF10 Δνd 0.25, outside catalog tolerance |
| L3 | `Unmatched (…)` | `SF9 (Hikari; coordinate-equivalent …)` | 1.65446/33.86, Δνd 0.07 |
| L4 | `Unmatched (…)` | `Unmatched (758/316 dense flint …)` | nearest E-LAF11 Δnd 9.5·10⁻⁴ |
| L5 | `Unmatched (…)` | `BAFD10 (Hoya; coordinate-equivalent …)` | 1.65016/39.34, Δνd 0.03 |

The three new labels resolve to the named catalog rows. None of them asserts the historical supplier.

### Metadata and wording

- Added `catalog.lensMounts: ["dkl"]`. Set `focalLengthMm.design` to 199.87.
- Replaced the process-language specs and subtitle with house style, and appended "(Bessamatic)" to the name, as on
  the Skoparex 35.
- Element types are now "Negative Meniscus" / "Positive Meniscus", and each element has a real optical role.
- Added patent groups A (tele-positive) and B (tele-negative).
- `focus.closeFocusM` changed from the 1e15 sentinel to 8.5 m product metadata. It is still infinity-only with no
  variable gaps.
- Removed the rectilinear `projection` block, so the lens is treated as an ordinary rectilinear lens. Restored
  `maxFNumber: 32`.
- Rewrote the header comment and the analysis: patent-grounded, claim-5 sentence corrected, references to package
  files removed.

### Follow-ups

- L4 has no catalog glass and stays on the Abbe-number fallback. L2 was closed by the glass pass below (FDS2).
- The 8.5 m close focus comes from collector sources only. Replace it if a Voigtländer specification sheet turns up.

## 2026-10-24 — Semi-diameter pass against the patent figure

An independent re-measurement of the intake-audit rims against Figure 2 (Example 1) on sheet 2 (PDF page 2) of
`patents/US3388956A.pdf`. The figure is a native 300 dpi CCITT raster, with the optical axis vertical and the object at
the bottom. It was profiled at native resolution on both sides of the dash-dot axis (page column 718).

### Scale

The vertex crossings beside the axis put the L1 front vertex at page row 2501 and the L5 rear vertex at row 1310.
That span is 1191 px for 141.142 mm, or 0.1185 mm/px. The doublet's axial thickness gives a second span: 145 px for
17.242 mm, or 0.1189 mm/px. The stop bar (rows 1613–1633) sits 680 px behind L3, as a3V = 80.58 mm predicts. The rear
elements and their gaps are drawn thicker than true scale, but their positions follow the same scale.

### Measurements

| Surfaces | Stored sd | Right side | Left side | Figure sd | Figure/stored |
|---|---:|---:|---:|---:|---:|
| 1–3 (D1) | 35.0 | 295 px | 283 px | 34.2 (mean 289 px) | 0.98 |
| 4–5 (L3) | 32.1 | 271 px | 270 px | 32.1 | 1.00 |
| 6–7 (L4) | 11.5 | 97 px | 94 px | 11.3 | 0.98 |
| 8–9 (L5) | 10.5 | 88.5 px | 87 px | 10.4 | 0.99 |

- The cemented doublet is drawn about 6 px off-centre: its right rim is 295 px from the axis and its left rim 283 px.
  On each side the flat rim run ends where L1's front curve begins (row 2437 on the right, row 2442 on the left), so
  each reading is self-consistent, and the mean is used. L3, which is symmetric (270/271 px), confirms the axis column.
- Every element is drawn square-cut, with its front and rear faces at one height, as the file stores them.

### Result

No change. Every element agrees with the figure within 2%, well inside measurement noise, so the intake values
(35.0 / 32.1 / 11.5 / 10.5 mm) are retained.

Clearance with the retained rims, from an exact meridional trace to Y = 21.63 mm (ω = 6.08°):

- The f/4 axial marginal ray reaches 24.98 mm at S1 and 7.28 mm at S6, and the full-field chief ray 8.15 mm at S9.
  Neither is clipped or blocked at any surface.
- Engine half-field is 7.84° and the f-number is 4.00, with a stop radius of 10.86 mm.
- Geometric transmission is 100 / 98.4 / 85.9 / 64.6 / 43.8% at 0 / 2 / 4.1 / 5.1 / 6.1°.
- Field coverage reaches 100% of the 21.65 mm corner.
- The image-circle floor and surface validation both pass.

The live render at infinity matches Figure 2: a wide front doublet, a slightly smaller L3, and a small rear group in
which L4 is a little larger than L5. There is no focus travel, so the close-focus view is identical.

### Open limitations

- Figure 2's diaphragm bar has an inner edge about 105 px (≈12.4 mm) from the axis. The engine derives 10.86 mm from
  f/4. The stop was not changed in this pass.
- No maker section drawing is available (see the intake audit's correlation notes).

## 2026-10-24 — Glass coverage pass

- L2 (1.72830 / 28.66) matches the discontinued HOYA FDS2 (1.72830 / 28.674, Δνd 0.014) in HOYA's 2026-07-07 AGF
  including obsolete glasses. FDS2 was added to the glass catalog from that vendor formula-1 row (code 728287, no
  duplicate code), and L2 is relabelled `FDS2 (Hoya; coordinate-equivalent dense flint, 1964 melt vendor not
  stated)`. A corpus resolution dump before and after the catalog addition changes only this element.
- L4 (1.75787 / 31.56) still has no vendor row within 10⁻⁴ in nd in the local HOYA, OHARA and Sumita catalogs; the
  nearest are LAFN12 / NBFD9 at 1.75690. It keeps its `Unmatched (…)` label.
