# Audit Log — Nikon NIKKOR 28mm f/2.8 (28Ti)

Patent: US 5,528,428, Embodiment 3 / Table 3  
Catalog version: local working tree, 2026-05-19

## 2026-05-19 — Six-digit glass-code backfill review

### Patent evidence

Reviewed `patents/US5528428.pdf`, Embodiment 3 / Table 3. The relevant six-digit/code-only row is:

| Element / surface | Patent nd | Patent νd | Disposition |
|---|---:|---:|---|
| L4 / S9 | 1.79668 | 45.4 | No exact public coefficient-backed catalog match found; retained as `797454`. |

### Catalog-search disposition

- Searched public OHARA, HOYA, SCHOTT, Nikon/Hikari, and refractiveindex.info-backed catalog data for `797454` and the nd/νd pair 1.79668 / 45.4.
- Nearby modern lanthanum glasses such as OHARA S-LAH64, S-LAH59, and HOYA TAF-family entries do not round-trip the patent row closely enough to be a defensible relabel.
- The label now uses an unbroken six-digit code for future generated-report matching.

### Changes made

- Updated `Nikon28Ti28mmf28.data.ts` from `797/454` to `797454 — discontinued lanthanum glass`.
- Updated `Nikon28Ti28mmf28.analysis.md` to use the unbroken code and document that Hikari/Nikon was also checked.

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Re-opened `patents/US5528428.pdf` and checked the working data against Embodiment 3 / Table 3.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `S-NSL3 (OHARA)` | `S-TIL6 (OHARA)` | Stored nd/vd matches the OHARA S-TIL6 catalog row. |
| L2 / S3 | `TAFD25 (HOYA)` | `840433 - lanthanum flint...` | Patent nd=1.84042, vd=43.30 has no exact public coefficient-backed catalog match; retained as an unbroken six-digit code for future upgrade. |
| L3 / S5 | `E-FD4 (HOYA)` | `E-FD2 (HOYA)` | Stored nd/vd matches HOYA E-FD2 rather than E-FD4. |

### Remaining disposition

- L2 and L4 remain code-backed unresolved rows after public catalog search.

## 2026-07-30 — `797454` catalog-equivalent review

- Rechecked L4 at `nd = 1.79668`, `vd = 45.37`.
- Hikari J-LASF017 (`1.79500 / 45.31`, code `795453`) is inside the runtime safety window and is the closest
  coefficient-backed catalog row in the reviewed public data (`delta nd = -0.00168`, `delta vd = -0.06`).
- Relabeled L4 as a J-LASF017 catalog equivalent while leaving the production supplier unidentified. Synchronized
  the analysis; no prescription, focus, aperture, or semi-diameter values changed.

## 2026-08-10 — Patent-author romanization canonicalization

- The Japanese family filing [JPH05-134175 A](https://patents.google.com/patent/JPH05134175A/ja) identifies the second inventor as `元壽 毛利` while transliterating the name as Motohisa Mori.
- The Nikonos RS fisheye family filing [JPH07-084180 A](https://patents.google.com/patent/JPH0784180A/ja) identifies its inventor with the same `元壽 毛利` characters. US 5,579,169 and [Nikon's own designer history](https://imaging.nikon.com/imaging/information/story/0088/) use the Motohisa Mouri romanization.
- Canonicalized `patentAuthors` from `Motohisa Mori` to `Motohisa Mouri`, merging two records for the same Nikon designer. The subtitle and analysis use the canonical form while the source banner preserves the US patent's spelling.
- No optical prescription, focus, aperture, semi-diameter, glass, or movement data changed.

## 2026-09-21 — First-added diagram audit, lens 58

Source: local `patents/US5528428.pdf` (`US5528428-2.pdf` is a byte-identical copy). Front page p. 1; Table 3 with
its condition values p. 17 (columns 11–12); Embodiment 11 Tables 13/14 p. 19 (columns 15–16); closing remarks on
axial-movement focusing p. 20; Fig. 3 p. 4 (Sheet 3 of 10, 300 dpi CCITT scan, axis vertical, object at the bottom).

### Retained after re-reading the source

- Front page: US 5,528,428, Jun. 18, 1996, inventors Motoyuki Ohtake (Ohmiya) and Motohisa Mori (Yokohama),
  assignee Nikon Corporation; `patentYear`, `patentAuthors` (canonical Mouri spelling, see 2026-08-10) and
  `patentAssignees` retained. Subtitle "Ex. 3" matches Table 3 (Numerical Data of Embodiment 3).
- All twelve Table 3 rows of r, d, n and ν match the stored values digit for digit; f = 28.9, F<sub>NO</sub> = 2.87,
  2ω = 74.0° as stored. No aspheres in any embodiment. Native scale, no scaling. Paraxial EFL 28.894 mm, BFD
  20.963 mm against the stored 20.96 mm rear gap (defocus −0.003 mm); every stored element `fl` matches its
  thick-lens value (−69.87, 15.17, −19.57, 15.98, −20.94, 22.76, −47.28).
- Unit focus is what the patent gives Embodiments 1–8 (no variable gaps; closing remarks on "general axial
  movement"). `lensMounts` `fixed-lens-camera` and `imageFormat` `135-full-frame` are canonical taxonomy ids.
  Exact chief ray for Y = 21.6 mm launches at ω = 36.97° (source 37.0°).
- Semi-diameters 2, 3, 4, 5, 9, 10, 11, 12 and the STO record (4.3 mm, implied f/2.86) retained: Fig. 3 reads
  them within 4–13 % (table below), the axial f/2.87 beam clears every rim by ≥ 1.4 mm and no surface fails the
  image-circle floor.

### Fig. 3 measurement

Scale 0.02714 mm/px from the 877 px span between the surface-1 and surface-12 vertex crossings (23.80 mm); all
other vertex crossings land within 5 px of their tabulated positions. Rims read on the right side for L1/L2 (left
side carries the G1/G2/L3 brackets and leaders) and on the left for L3–L5 (right side carries the r41/r42 leaders),
excluding flat annuli:

| Element | Fig. 3 optical extent (mm) | Mechanical rim (mm) | Stored before | Stored after |
|---|---|---|---|---|
| L1 (1 / 2) | 9.1–9.4 / 7.8 | 9.6 (flat rear annulus 7.8 → 9.6) | 7.8 / 7.5 | 9.1 / 7.5 |
| L2a (3 / 4) | 7.0 / 7.0 | 7.0 | 6.5 / 6.2 | unchanged |
| L2b (5) | 4.9 | 5.8 (flat annulus 4.9 → 5.8) | 5.8 | unchanged |
| L3a (6 / 7) | 6.0 / 5.8–6.0 | 6.0 | 5.3 / 5.3 | 6.0 / 6.0 |
| L3b (8) | 6.85 | 6.9 | 5.3 | 6.2 |
| L4 (9 / 10) | 6.8 / 7.4–7.65 | 7.6–7.75 (flat annulus 6.8 → 7.7) | 6.0 / 6.9 | unchanged |
| L5 (11 / 12) | 7.2 (by sag)–7.7 (lateral) / 9.1 | 9.1 (flat annulus 7.7 → 9.1) | 7.5 / 8.5 | unchanged |

The stop symbol (side dashes and on-axis tick, rows 2036–2039) lies 66 px = 1.79 mm behind the surface-5 vertex.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| `patentNumber` | `US 5,528,428` | `US 5,528,428` (unchanged) | The 1996 front page prints no kind code; the bare number is kept, as for the other pre-2001 US grants in the catalog. |
| 1 `sd` | 7.8 | 9.1 | Fig. 3 front curve reaches 347 px (9.4 mm lateral; 9.06 mm by sag at the rim row), 17–21 % above the stored value on both sides of the axis. Chief ray 6.52 mm. |
| 6, 7 `sd` | 5.3 / 5.3 | 6.0 / 6.0 | Fig. 3 L3a rim 220–225 px (6.0 mm) on both sides; keeps the doublet coherent with the surface-8 change. |
| 8 `sd` | 5.3 | 6.2 | Fig. 3 L3b rim 252–258 px (6.85–7.0 mm, +30 %). Capped at 6.2: the tabulated surface 8 (R 54.857) and surface 9 (R −21.73) close their 1.31 mm gap at h ≈ 6.33 mm, and the validator's 90 % intrusion rule is already at 89.6 % over the shared 6.0 mm band. |
| Stop split (5 `d` / STO `d`) | 2.00 / 2.00 | 1.80 / 2.20 | Fig. 3 stop symbol 1.79 mm behind surface 5; Embodiment 11 (Table 13) tabulates 1.650 / 2.350 in the same 4.000 mm gap. The old header attributed 2.00 / 2.00 to Fig. 3, which the drawing does not show. |
| `nominalFno`, `fstopSeries`, `maxFstop` | 2.8; series from 2.8; default 16 | 2.87; series from 2.87; 22 | Table 3 F<sub>NO</sub> = 2.87 (engine iris 4.36 mm); production minimum aperture f/22. |
| `var["12"]` close value | 23.21 | 23.44 | Old value was the thin-lens f²/(s − f) with s = 400 mm, which focuses 433.5 mm from the film plane (object 386.5 mm from surface 1). Paraxial solve for a 0.40 m film-plane conjugate: BF 23.438 mm, object 352.8 mm from surface 1, m = −0.086. Calculated, not published. |
| L1 `glass` | `S-TIL6 (OHARA)` (1.53172 / 48.84) | `J-LLF6 (HIKARI catalog equivalent; …)` (1.53172 / 48.78) | Same LLF6 family, Nikon's usual supplier; no catalog row matches ν 49.1 exactly. |
| L2b `glass` | `E-FD2 (HOYA)` | `E-FD2 (HOYA catalog equivalent; SF2-class dense flint, patent 648338, …)` | Δnd −6.2e-4: the label now says it is an equivalent, not the patent glass. |
| L3a `glass`, `apd` | `S-LAH59 (OHARA)`, `"inferred"` | `J-LASF09A (HIKARI catalog equivalent; …)` (1.81600 / 46.59), `false` | Same LAH59 family; catalog P<sub>g,F</sub> 0.5654 at ν 46.6 is on the normal line, so no anomalous-dispersion inference is supportable and the patent names none. |
| L3b `glass` | `EF3 (HOYA)` (did not resolve; catalog E-F3 is 1.61293 / 37.0) | `617308 - high-dispersion flint (catalog unresolved; …)` | No public coefficient-backed row at 1.61750 / 30.8; code form per the audit doc. |
| L4 `apd` | `"inferred"` | `false` | J-LASF017 P<sub>g,F</sub> 0.5598 at ν 45.3 is normal; patent names no ED element. Label retained from 2026-07-30. |
| L5 `glass` | `595/355 (close to S-FTM16, OHARA)` | `S-FTM16 (OHARA catalog equivalent; patent 595355, Δnd −0.0024, …)` | Same resolution, unbroken code and explicit equivalence wording. |
| L2a `glass` | `840433 - lanthanum flint (patent nd=…; no exact public catalog match)` | `840433 - lanthanum flint (catalog unresolved; …)` | Wording only; nearest rows TAFD5 / S-LAH55 are 0.005 low in nd. |
| Header, `focusDescription` | 2.00 / 2.00 stop, "8–10 % clearance" SD note | Fig. 3-based SD note, stop, aperture and focus notes | As above. |

### Analysis sync

- Glass identities corrected: L1 was called OHARA S-NSL3 / E-C3 / N-K5
  (catalog S-NSL3 is 1.51823 / 58.9; the pair is LLF6-class), L2a HOYA TAFD25 (catalog 1.90366 / 31.3), L2b HOYA
  E-FD4 (catalog 1.7552 / 27.5), L3a "HOYA TAFD5" (catalog 1.835 / 43.0; the Hoya equivalent is TAF5), L3b HOYA
  EF3 (catalog E-F3 1.61293 / 37.0). §7 no longer claims the lanthanum elements are anomalous-dispersion "ED"
  glass; the 7-blade shutter detail was dropped as unsourced. §8 labels Table 14's d₅ as the L2→stop distance.
  §10 rewritten for the Fig. 3 semi-diameter table, the 1.80 / 2.20 stop, the f/2.87–f/22 aperture and the
  calculated 23.44 mm close BF.

### Checks on the result

- Validator: no errors; image-circle floor: 0 undersized; no render trim on any surface; prettier clean.
- Engine: EFL 28.894 mm, FOPEN 2.87, iris radius 4.362 mm, close focus object-to-image 399.3 mm at m = −0.086.
- Exact trace at f/2.87, Y = 21.6 mm: axial beam 5.03 mm at surface 1 down to 3.80 mm at surface 12, every rim
  clear; chief ray 6.52 / 5.45 / 4.02 / 2.40 / 1.75 / 0 / 2.35 / 3.21 / 3.83 / 4.51 / 5.53 / 5.69 / 6.79 mm,
  smallest rim margin 1.37 mm (surface 10). Corner bundle at 37°: stop heights −1.69 … +2.02 mm of ±4.3 pass
  (43 % of the meridional pupil; 35 % with the old rims), bounded below by the surface-2 sphere and above by the
  surface-9 rim; 88 % passes at 70 % field.
- Live: production baseline (L1 drawn as a thin meniscus no taller than L5, small L3 doublet, centred stop, slider
  from f/2.8) compared with the local page: L1 now shows the tall front surface with a stepped rear rim as in
  Fig. 3, L3 steps out behind the stop, the stop sits nearer L2, the slider reads f/2.87–f/22, closest focus shows
  40 cm / BF 23.44 mm with the whole lens extended, and the 23.3° off-axis bundle reaches the image corner.

### Open limitations

- Stop position remains figure-derived (±0.1 mm); Table 3 has no stop row.
- Semi-diameters are still estimates; L3b and L4 cannot reach the drawn 6.9 / 6.8 mm rims because the tabulated
  radii close the 8→9 and 10→11 gaps first, so the drawing's rear-group rims are treated as mechanical, not
  optical, beyond those heights.
- L2a (840433) and L3b (617308) stay on Abbe-only dispersion; no public coefficient-backed rows exist. L4 and L5
  are catalog equivalents with Δnd of 1.7e-3 and 2.4e-3.
- Close focus is calculated for a 0.40 m film-plane conjugate; the patent publishes no near state for
  Embodiment 3, and the production lens may use an Embodiment-11-style floating focus that this file does not
  model.
