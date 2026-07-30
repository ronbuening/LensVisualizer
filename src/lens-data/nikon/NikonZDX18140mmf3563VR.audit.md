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
