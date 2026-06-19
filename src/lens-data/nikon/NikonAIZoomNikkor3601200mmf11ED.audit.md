# Audit Log — Nikon AI Zoom-Nikkor 360-1200mm f/11 ED

Patent: US 3,743,384, Example I / Claim 4

## 2026-06-19 — Local patent and figure review

- Local patent source: `patents/US3743384.pdf` (untracked local file).
- Rendered page images and `pdftotext -layout` output were checked for Example I, Claim 4, Fig. 1, and the certificate-of-correction rows.

### Prescription and layout

- Example I was matched surface-by-surface against the data file, including the certificate-corrected rows noted in the analysis file.
- Fig. 1 supports the rendered grouping: large low-dispersion front collector, compact negative variator, positive compensator, and long separated relay/telephoto rear section.
- The stop is not tabulated by the patent. The data file inserts `STO` immediately behind surface 21 while preserving the published `D21` total at both zoom endpoints: surface 21 carries 0.5 mm, and `STO` carries the remaining variable spacing.

### Semi-diameters

- The patent does not publish clear semi-diameters.
- The authored SDs were compared with Fig. 1 and the 122 mm front-accessory scale. The front collector is intentionally capped to avoid impossible rim geometry; the remaining groups follow the patent figure's smaller variator/compensator envelope and larger relay entrance.

### Glass disposition

- Stored `nd`/`vd` values match Example I.
- The repeated `486/815` low-dispersion material remains explicitly unmatched. The patent describes a special/quartzite-type material but does not publish C-, F-, or g-line indices or a modern catalog name.
- Other unresolved historical pairs (`613/369`, `515/546`, `639/450`, `501/565`, `744/494`) remain code/family-level descriptions pending a coefficient-backed catalog source.
- `npm run generate:glass-reports` passed with unresolved rows tracked as coverage opportunities.
