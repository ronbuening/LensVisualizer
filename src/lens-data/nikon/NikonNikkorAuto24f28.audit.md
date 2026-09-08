# Audit Log — Nikon NIKKOR-N Auto 24mm f/2.8

Patent: US 3,622,227

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/US3622227.pdf` (untracked local file).
- `pdftotext -layout` extracted the patent prescription table; Google Patents OCR for the same US publication was used to cross-check the compact claim table.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L6 / n6 | 1.78470 / 26.1 | `SF56A (Schott) / S-TIH6 (Ohara)` | `S-TIH23 (OHARA, patent nd/vd match; SF11 family)` | The n6 row omits vd, but n6 and n7 share nd=1.78470 and n7 lists vd=26.1. |
| L7 / n7 | 1.78470 / 26.1 | `SF56A (Schott) / S-TIH6 (Ohara)` | `S-TIH23 (OHARA, patent nd/vd match; SF11 family)` | OHARA S-TIH23 clears the prior S-TIH6 mismatch for this dense flint pair. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a US 3,622,227 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Catalog-mismatch second-batch recheck

- Re-searched the local untracked `patents/` folder for US 3,622,227 / `3622227`; no matching PDF was present.
- No substitute patent was used, no glass labels were changed, and no figure/SD check was possible without the cited patent file.

## 2026-09-08 — First-hosted audit (lens 10, in progress)

- Local US3622227.pdf title p1, Fig.1 p2, Example I p4 visually inspected; table and figure at600dpi. Source positive r5/r6/r13 signs confirmed directly; restored exact ×24 dimensions instead of extra three-decimal rounding. Published infinity BF1.5597×24=37.4328 retained.
- L6 Abbe cell is blank in Example I; same-medium ν26.1 from L7 is now explicitly inferred. Supplier names relabeled as catalog comparisons, not production identity; incorrect L4/nonadjacent-SK16 junction claim removed.
- Nikon official Tale14 confirms CRC narrows L6/L7 separation and the0.3m marking: https://imaging.nikon.com/imaging/information/story/0014/index.html. Movement chart now splits at L6/L7, not the optical-power boundary L3/L4. The assumed0.7mm contraction remains estimated. Independent finite-conjugate solve gives BF40.3567350141, rear travel2.9239350141 and front travel2.2239350141mm at300mm object-to-image distance.
- Figure-scaled rim review: expanded S4 to15.9, S13/S14 to10, S15 to11.5. Rejected S3/S4=17.5 trial for excessive front cross-gap intrusion; final S3/S4=15.9 passes surface probe. Earlier image-circle pass must be rerun after final rim changes. Analysis rewritten. Local review and batch gates pending.
- Local live infinity/close/midpoint/f16/motion chart checked: CRC2.35/1.65/2.00; BF37.43/40.36/38.89; dynamic EFL24.00/24.34/24.17; two movement groups have distinct objectward travel, max2.92mm; zoom disabled; f16 stop2.31mm. Independent finite-focus/motion/hidden-trim tests authored. Batch validation started.
