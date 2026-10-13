# Audit Log — FUJIFILM FUJINON TELECONVERTER XF1.4X TC F2 WR

## 2026-10-04 — Adapted from the reviewed master-plus-converter package

- Source: US 11,079,573 B2, Example 1 (Tetsuya Ori / Fujifilm Corporation; filed 26 June 2019, priority 13 July 2018,
  granted 3 August 2021). The package modeled the complete published system, master lens plus converter, as one lens.
  This file keeps the converter only: Table 3 rows 35–45, relabelled 1–11.
- Designations follow the patent: groups RG1–RG3 (col. 4, lines 36–40), lenses RL1a, RL1b, RL2a, RL2b, RL2c, RL3a and
  RL3b (col. 5, lines 20–59; FIG. 1 and FIG. 3) and optical member PP (col. 11, lines 46–51). The package's element
  names L20–L26 are its own numbering and are not used.
- Dropped: the 19 master elements L1a–L1s, the stop (surface 15), `nominalFno`, the field metadata and the other
  lens-only fields. The host lens supplies them when the converter is mounted.
- Geometry: master back focus in air 29.2741 + 2.85 / 1.5168 = 31.1531 mm (Table 2 prints 31.15); the Table 3 gap
  d34 = 4.2900 mm gives `masterImageDistanceMm` 26.8631. The last gap, 12.5726 mm, is the physical distance to
  optical member PP (2.85 mm, nd 1.5168, touching the image plane), which is listed in `rearPlates`; the back focus
  in air is 14.4516 mm (Table 4 prints 14.45).
- Aspheres: patent surfaces 42 and 43 are labels `8A` and `9A`. The patent's sag equation (col. 14) carries KA where
  this project carries 1 + K, so the printed KA = 1 is stored as K = 0. Odd and even terms A4–A16 are kept as printed
  in Table 5; A3 and A17–A20 print as zero and are omitted.
- Semi-diameters are the package's inferred rims for the patent's master-plus-converter system, not source values:
  the patent lists no effective diameters. RG1 (12.89 mm), RG2 (13.33 mm) and RL3a (14.6 mm) sit at the radius where
  the positive lens keeps about 0.05 mm of edge; RL3b is 15.49 mm. The figures corroborate topology only; the rims
  are not figure-audited.
- Glass review: the patent prints nd/νd only and the package delivered `Unmatched (…)` labels. Each printed pair
  equals a catalog entry to the printed precision, so all seven are relabelled `<glass> (<vendor> coordinate match;
  supplier unconfirmed)` and resolve to catalog Sellmeier data. 1.88300 / 39.22 (RL1a, RL2a, RL2c) exists in the
  catalog only as CDGM H-ZLaF68N and NHG H-ZLaF68L; CDGM is used. RL1b (1.64769 / 33.84) and RL2b (1.72825 / 28.32)
  equal both CDGM H-ZF1 / H-ZF4A and Hoya E-FD2 / E-FD10; CDGM is kept for consistency with their cemented partners.
  The aspherical RL3a (1.51633 / 64.06) equals Ohara's low-Tg moulding glass L-BSL7 (S-BSL7 is 64.14), and RL3b
  (1.95906 / 17.47) equals Ohara S-NPH3.
- Source discrepancy carried without correction: Table 18 prints f1/fC −1.101, f2/fC 0.320, f3/fC −1.101, ν1 − ν2
  5.400, f31/f3 0.614 and f32/f3 −1.477 for Example 1; the printed rows give −1.105, 0.319, −1.092, 5.38, 0.617 and
  −1.500. Every condition still holds, and the rows govern.
- Not carried: the package's `master.overrides` entry. Table 1 prints νd 39.73 for master surface 32 and Table 3
  prints 39.68. That element belongs to the master lens, so nothing in this file depends on it.
- Production correlation: 7 elements in 4 groups with the sixth lens aspherical, as in Fujifilm's published section
  and specification. The package records the correlation as not manufacturer-confirmed.
- Fit: `minHostFno: 2`, because the rims are sized for the f/2.06 master beam.
  `incompatibleLensKeys: ["fuji-xf-50140mm-f28"]`, because Fujifilm supplies this converter with the XF 200mm f/2
  and its compatibility charts give the XF 50-140mm the XF1.4X TC WR and XF2X TC WR instead (fujifilm-x.com product
  and support pages, read 2026-10-04). That zoom is the only other X-mount catalog lens declaring converter support.
- On the catalog host `fujifilm-xf-200-f2`: junction gap 4.2784 mm against the patent's 4.2900, final gap 11.4726 mm
  to the host's own PP plate. The host file is transcribed from a different publication, US 2019/0265504 A1, whose
  Example 1 has the same lens elements but a back focus of 31.1415 mm in air. Focal length 194.015 → 271.616 mm
  against the printed 271.54, f/2.884 against 2.88, and the host's stop radius unchanged.

## 2026-10-04 — Exclusions for newly enabled X-mount hosts

- `acceptsTeleconverters` is a yes/no flag, so each X-mount lens that declares it has to be excluded here: the XF 80mm
  f/2.8 Macro, XF 70-300mm f/4-5.6 and XF 100-400mm f/4.5-5.6 join the XF 50-140mm f/2.8 in `incompatibleLensKeys`.
  Fujifilm's charts give those lenses the XF1.4X TC WR and XF2X TC WR; this converter is supplied with the XF 200mm
  f/2 and has no chart of its own. Add any further X-mount host to the list when it is enabled.
