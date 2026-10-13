# Audit Log — Nikon AI AF Zoom-Nikkor 24-120mm f/3.5-5.6 D IF

Patent: US 5,734,508 A, Working Example 1 / Figure 2.

## 2026-07-29 — Patent-figure SD, display-name, and glass audit

### Semi-diameter review

Figure 2 does not publish a full clear-aperture table, so the values below remain figure-derived visualization
estimates. The two explicit asphere apertures were preserved: surface 17A remains at `27.3 / 2 = 13.65 mm`, and
surface 34A remains at `15.6 / 2 = 7.8 mm`.

| Surfaces | Before | After | Figure evidence and constraint |
|---|---:|---:|---|
| 12–13 | 23.0, 22.5 mm | 34.0, 34.0 mm | Figure 2 shows the cemented front pair with the widest optical envelope in the system. |
| 14–16 | 22.0, 21.3, 20.5 mm | 28.0, 28.0, 28.0 mm | The rear of the front pair and the following L13 are visibly smaller than the first two surfaces but substantially larger than the original model. |
| 21–24 | 9.2, 8.9, 9.0, 8.5 mm | 11.5, 11.5, 11.5, 11.0 mm | Enlarged the central cemented/positive section to follow the Figure 2 envelope. Surface 20 remains smaller because a larger value causes a real 19→20 sag overlap. |
| 36–38 | 7.8, 8.1, 8.6 mm | 11.0, 11.0, 11.0 mm | Enlarged the final cemented pair to match the visibly broader rear silhouette while staying below its edge-thickness limit. |

The very large mechanical outlines around G1 and G3R were not treated as optical clear apertures. Candidate values
that crossed spherical domains, produced negative edge thickness, or caused cross-gap overlap were rejected.
The automated figure screener could not isolate this panel from its dense labels and group brackets without a
crop-edge warning, so the changed elements were measured on the 300 dpi render and confirmed by eye.

### Glass classification

| Element | Before | After | Disposition |
|---|---|---|---|
| L11 | `861230 — dense flint class (vendor unresolved)` | `J-SFH2 (Hikari; patent code 861230)` | Current Hikari J-SFH2 retains the same `nd`; its code and rounded `νd` differ by one final digit. |
| L12 | `713539 — LaK8/LAL8 class (vendor unresolved)` | `LAC8 (coordinate equivalent; patent code 713539)` | Exact published code/coordinate equivalent already present in the catalog; no supplier claim is made. |
| L3R1 | `658508 — SSK5 class (vendor unresolved)` | `J-SSK5 (Hikari; patent code 658508)` | Exact Hikari code and optical-coordinate match. |
| L3R4 | `518589 — K3/C3 class (vendor unresolved)` | `J-K3 (Hikari; patent code 518589)` | Current Hikari J-K3 retains the same `nd`; its code and rounded `νd` differ by one final digit. |

Added the previously absent J-SFH2, J-SSK5, and J-K3 vendor formula-3 rows to the shared glass catalog. Other
code-only glasses remain unresolved where no comparably strong, coefficient-backed match was found.

### Metadata and analysis sync

- Normalized the display name to separate the aperture from the `D` designation.
- Updated the analysis glass table, element descriptions, patent-figure SD provenance, and Hikari catalog source.

## 2026-07-29 - `796409` coefficient-source review

- Rendered and visually checked the prescription. Working Example 1 row 30 confirms L3F3 at
  `R = -21.224`, `d = 1.8`, `nd = 1.79631`, and `vd = 40.9`, matching the stored row.
- Official OHARA, HOYA, Hikari, and Sumita coefficient catalogs contain no exact `796409` row.
  Nearby named high-index families do not reproduce both coordinates and do not establish a supplier.
- Retained L3F3's explicit unmatched `796409` annotation. No catalog model, prescription geometry,
  focus reconstruction, or spectral claim changed.

## 2026-07-30 — `834374` coefficient-equivalent recovery

### Patent evidence

- Rendered and visually checked local `patents/US5734508.pdf`, PDF page 31, Working Example 1 / Table 1 continued.
- Surface 36 / L3R3 is printed as `R = -83.063`, `d = 1.70`, `νd = 37.4`, and `nd = 1.83400`, matching the
  stored prescription.
- The patent defines the table values as D-line index and Abbe number but names no glass supplier and publishes no
  secondary line index or partial-dispersion value for this row.

### Catalog disposition

- Legacy HOYA NBFD10 publishes `nd = 1.83400`, `νd = 37.34` with a vendor formula-3 polynomial already verified in
  the shared catalog. The `834373` catalog code differs from the patent-derived `834374` only because the patent
  rounds the Abbe number to one decimal.
- Independent first-party catalogs corroborate the family: SUMITA K-LaSFn14 publishes `1.83400 / 37.3`, and OHARA
  S-LAH60 publishes `1.83400 / 37.16`.
- Relabeled L3R3 to `NBFD10 (HOYA catalog equivalent; production supplier unspecified; patent 834374)`.
  Prescription geometry and optical coordinates are unchanged.

### Analysis sync

- Updated the L3R3 description, glass inventory, and catalog-evidence paragraph. The wording treats NBFD10 as the
  coefficient model, not a claim about Nikon's production procurement.

## 2026-08-11 — Phase 92 HOYA legacy-catalog recovery

- Visually rechecked the `1.79631 / 40.9` L3F3 row in US 5,734,508 Table 4.
- HOYA NBFD2 (`1.797199 / 41.143795`) is a coefficient-backed optical equivalent inside the runtime safety window.
- Relabeled L3F3 and synchronized the analysis while leaving the production supplier unspecified. No geometry,
  asphere, zoom, focus, aperture, or semi-diameter values changed.

## 2026-10-07 — Zoom iris and station f-numbers against the patent

Read against US 5,734,508, Working Example 1: EQ. 3 (col. 15, lines 47-48, PDF p. 30), Table 1 and Table 1-continued (cols. 16-17, PDF pp. 30-31), Table 2 and the aspheric coefficient block below it (col. 17, PDF p. 31), Table 3 (cols. 17-18, PDF p. 31), FIGS. 3A(I), 3B(I), and 3C(I) (sheets 3-5, PDF pp. 4-6), and the Certificate of Correction (PDF pp. 39-40). The coefficient block and EQ. 3 were read on 400-500 dpi crops.

| Field | Before | After | Source |
|---|---|---|---|
| `asph["34A"].A10` | -1.0897e-12 | 1.0897e-12 | Coefficient block, "(Surface No. 34*)", col. 17, PDF p. 31: `C10=0.108970×10^-11`, printed without a minus sign while C4, C6, and C8 of the same surface carry one |
| `asph["34A"].K` | 0 | -1 | EQ. 3, col. 15, lines 47-48, PDF p. 30: conic root printed as `[1+(1-ky²)^(1/2)]`, so k = 1 is the sphere and K = k - 1; "(Surface No. 34*)" prints `k=0.0000`, col. 17, PDF p. 31 |
| `asph["17A"].K` | 0 | -1 | Same EQ. 3; "(Surface No. 17*)" prints `k=0.0000`, col. 17, PDF p. 31 |

- Both are corrections to the file's reading of the patent: a transcribed sign and a conic-convention conversion. Neither is a source error, so no `sourceErrata` entry is added. The Certificate of Correction changes coefficient signs only at col. 21, line 23 and col. 24, lines 50 and 52 (Working Examples 3 and 5) and leaves col. 17 as printed.
- Conic convention, from the patent itself. EQ. 3 has no `(1 + k)` factor. Working Example 2 prints `k=1.0000` for surface 132 and `k=0.0000` for surface 117 (col. 19, PDF p. 32); Working Example 4 prints `k=1.0000` for surface 332 (col. 22, PDF p. 33). With a spherical base on surface 132, Working Example 2's condition (5) computes to 0.00513 at φ2 = 16.3, the value Table 6 prints; reading that `k = 1` in the `(1 + K)` form gives 0.00456. EQ. 3 as printed omits the `/r²` of the conic height term, which is immaterial at `k = 0`: the base is `y²/(2r)` either way.
- Spherical aberration against the patent's plots. Longitudinal d-line aberration relative to the paraxial focus, at full aperture / 0.7 zone, full aperture taken at the printed f-number; the plot values are read from a 600 dpi crop against the 0.500 mm scale bar and are good to about ±0.02 mm:

  | Reading | 24.7 mm | 50 mm | 116.5 mm |
  |---|---|---|---|
  | FIGS. 3A(I), 3B(I), 3C(I) | about -0.08 / -0.14 | about -0.06 / -0.14 | about -0.18 / -0.02 |
  | K = 0, A10 negative (before) | -0.111 / -0.230 | +0.101 / -0.295 | +0.245 / -0.306 |
  | K = -1, A10 negative | +0.074 / -0.146 | +0.506 / -0.116 | +0.988 / +0.018 |
  | K = 0, A10 positive | -0.282 / -0.239 | -0.426 / -0.323 | -0.914 / -0.365 |
  | K = -1, A10 positive (after) | -0.099 / -0.155 | -0.028 / -0.143 | -0.193 / -0.041 |

  Only the reading with both changes follows the plots at all three stations; either change alone misses the long-end margin by about a millimetre (+0.988 or -0.914 mm against about -0.18 mm). A standalone meridional trace and the engine's own tracer give the same figures. Nearly all of the effect is surface 34A, where the marginal ray reaches 6.70 / 7.11 / 7.34 mm of the 7.80 mm clear semi-diameter; on 17A the base change moves the rim sag by 0.0003 mm.
- The printed f-numbers support the same reading. Taken as 1/(2 sin U') of the real marginal ray, 3.60 / 4.68 / 5.90 need stop radii of 8.0874 / 8.0742 / 8.0793 mm (spread 0.16 %, any radius from 8.0758 to 8.0834 mm fits all three within print rounding). With K = 0 and A10 negative the same reading needs 8.0846 / 8.0924 / 8.1256 mm (0.51 %, no common radius).
- First-order values of the file's prescription against the patent's Table 2. The conic constant and the tenth-order term do not enter the paraxial trace, so nothing first-order moves:

  | Quantity | Patent prints | Before | After |
  |---|---|---|---|
  | Focal length, mm | 24.7000 / 50.0000 / 116.5000 | 24.701065 / 50.004381 / 116.517708 | 24.701065 / 50.004381 / 116.517708 |
  | Back focus, mm | 39.3381 / 56.9369 / 76.0792 | 39.341081 / 56.943574 / 76.092803 (paraxial) | 39.341081 / 56.943574 / 76.092803 (paraxial) |
  | First surface to image, mm | not printed | 124.7536 / 147.2299 / 177.8097 | 124.7536 / 147.2299 / 177.8097 |

  `focalLengthDesign`, all sixteen element `fl` values, the group focal lengths (G1 +85.2500, G2 -13.1995, G3F +36.5276, G3R +58.2911 mm), the cemented-net focal lengths, the Petzval sum, and the 0.5 m close-focus gaps and magnifications (a paraxial conjugate solve that lands on the tabulated Bf) were recomputed from the edited file and are unchanged to the stored digits.
- Recomputed values that do move: the aspheric departures from the reference sphere at the printed clear apertures. Condition (4), 17A at 13.65 mm: +0.463287528 mm → +0.462994588 mm, ratio 0.0187566 → 0.0187447 against the printed 0.01877. Condition (5), 34A at 7.80 mm: -0.149392111 mm → -0.149509090 mm, ratio 0.00604826 → 0.00605300 against the printed 0.00610. The analysis note's asphere section and conditional-expression table carry the new figures.
- `zoomApertureModel: "fixed-iris"` and `nominalFno: [3.6, 4.68, 5.9]` are kept. The station values are the legends of FIG. 3A(I) `F/# = 3.60`, FIG. 3B(I) `F/# = 4.68`, and FIG. 3C(I) `F/# = 5.90`. The fixed iris, traced from the wide value, is 8.1162 mm (8.1161 mm before; the 17A base change shifts the wide marginal ray at the stop by 0.0001 mm). It gives f/3.60 at 24.7 mm, f/4.66 at 50 mm (-0.5 %), and f/5.89 at 116.5 mm (-0.1 %), iris-limited at every station with no rim or trace limit.
- The data-file header and the analysis note described a constant 7.92 mm stop. They now state the traced model: one fixed iris of 8.1162 mm, with the `STO` row's `sd: 7.92` identified as the paraxial inference (paraxial radii for the printed f-numbers are 7.9892 / 7.9044 / 7.8948 mm). No semi-diameter changed.
- Confirmed unchanged: example identity (all 27 lens-surface rows and the AS row of Table 1 match the file's r, d, nd, and νd, from 12 `176.802 / 1.80 / 23.0 / 1.86074` to 38 `-39.940 / (Bf)`); focal lengths 24.7000 / 50.0000 / 116.5000; d16, d26, d31, and Bf at infinity; the stop at `AS 0.000 / 1.00`, fixed 1.00 mm ahead of surface 27; 17A coefficients C4 to C10 and 34A coefficients C4 to C8; clear apertures φ1 = 27.3 and φ2 = 15.6.
- Open: Table 3's conditions (4) and (5) are not reproduced to the printed digit by any of the four readings (0.01874 to 0.01876 against 0.01877; 0.00597 to 0.00613 against 0.00610), so they neither confirm nor contradict the conic reading. Working Example 2's condition (4) likewise misses its printed 0.01616 under both readings of `k = 0` (0.01581 and 0.01588).
- Open: the helper's EFL/(2h) reading finds no common radius for 3.60 / 4.68 / 5.90 (8.1162 / 8.0774 / 8.1044 mm, spread 0.48 %), while the image-space sine reading does. The engine's fixed iris follows its own definition from the wide value and sits 0.4 % above the 8.0758-8.0834 mm window; nothing is tuned to close that.
- Open: the Table 1 header prints `F/# = 2.6 to 5.9`. The file keeps 3.6 at the wide station from FIG. 3A(I); Working Example 3's Table 7 header prints 3.6 to 5.9 for the same focal range. Not a `sourceErrata` entry in this pass.
