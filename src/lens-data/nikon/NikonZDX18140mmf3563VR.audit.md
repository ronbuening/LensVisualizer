# Audit Log - Nikon NIKKOR Z DX 18-140mm f/3.5-6.3 VR

Patent: WO 2022/264542 A1

## 2026-05-20 - Glass relabel pass

- Opened the local untracked patent PDF at `patents/WO2022264542A1.pdf`; it is present but image-only in local text extraction.
- Confirmed the queued nd/vd rows against the data file and coefficient-backed public Hikari/OHARA catalog matches.
- Updated L23 to `J-SFH1 (Hikari)` for nd=1.80809, vd=22.74.
- Updated L32 to `S-TIM5 (OHARA)` for nd=1.60342, vd=38.03.
- Updated L36 to newly cataloged `J-BASF6 (Hikari)` for nd=1.66755, vd=41.87.
- Updated L51 to `J-LASFH9 (Hikari)` for nd=1.90265, vd=35.77.
- Remaining coverage misses are the two UV-curing resin aspheric layers.

## 2026-07-29 - Remaining catalog-coordinate correction

- Rechecked the prescription in local `patents/WO2022264542A1.pdf`; S16 remains 1.51742 / 52.20 and its R/d
  values are unchanged.
- S16 `S-NSL3 (OHARA)` -> `S-NSL36 (OHARA)`. S-NSL36 is the matching 51752x same-vendor family; S-NSL3 is
  the distinct 1.51823 / 58.90 row.
- Synchronized the hybrid-asphere substrate discussion, glass table, and source list.

## 2026-09-23 — Cover glass modeled as `rearPlates`

- Replaced the air-equivalent D33 with Table 1's physical rear stack (local PDF pp. 28–31, printed pp. 26–29):
  D33 = 8.272 / 18.869 / 33.216 mm (identical at infinity and close focus), then `rearPlates` PP 1.600 mm,
  nd 1.51680, νd 64.14, and 1.000 mm air to the image plane (surfaces 34–35). Glass label S-BSL7 matches the file's
  L35g label for the same nd/νd pair and resolves as compatible.
- Paraxial check against the previous data: EFL identical; defocus changes by 0.00015 mm at every zoom station and
  focus keyframe, the rounding of the old fold (1.600/1.51680 = 1.05485 stored as 1.055; the mid value also used
  20.924 against the patent's printed Bf 20.923). Physical track grows by 0.545 mm.
- The analysis's "35 optical surfaces excluding PP" was corrected to 33 numbered surfaces (1–33 including the stop);
  Table 1 numbers the cover glass 34–35.

## 2026-09-23 — Glass relabel for the 1.51680 / 64.14 crown

- L35g and the PP cover glass both print nd 1.51680 / νd 64.14 but were labelled S-BSL7 (OHARA), the 1.51633 / 64.14
  glass that only matched within tolerance. Both now use Hikari J-BK7A (1.51680 / 64.13), the nearest catalog row and
  the vendor this file already uses for L23, L36 and L51. The analysis glass entries and source list follow; the
  source list's duplicate item 4 was renumbered.
