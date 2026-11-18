# Audit Log - Kapella / Warmisham Example II 100.4 mm f/2

Patent: US 2,130,760, Example II / Figure 6  
Data stem: `Warmisham1938ExampleII`  
Reference main pin: `3fd318c3e82cdbc3e5d3a1ed7bd5abbf4e99bfc2`

## 2026-11-17 - Qualified patent-only reconstruction

### Source review and transformations

- Visually inspected the primary patent facsimile table (PDF page 5) and Figure 6 (PDF page 3). Source PDF, table and drawing captures are retained in the build evidence.
- Transcribed literal signed spherical radii, eight nD/V pairs, thicknesses and spaces. Applied uniform dimensional scale factor 100; retained the two 0.001 source air gaps as 0.1 mm.
- Used calculated paraxial BFD 71.10541418018414 mm for the infinity image plane; it is not source-tabulated.
- Estimated the exact stop at the central gap midpoint and estimated clear rims. Initial generous rims failed geometry; final rims pass without source-optics edits or a gap-sag override.
- No retail/production identity established; no factory glass claim. Source example is not interchangeable with US2012822 or US2194413.

### Fresh validation evidence

| Check | Recorded outcome | Evidence |
|---|---|---|
| Native canonical validation | Zero errors | `validation.json`, `native.log` |
| Element rendering | All trim amounts zero | `validation.json` |
| Iris stroke, 256 intervals | Minimum before/after clearance 0.725012 / 2.172258 mm | `validation.json` |
| Neighbor-interface geometry, 1001 samples each | Positive separations; minimum 0.037535 mm | `independent-geometry.json` |
| Dense axial gate | All 181 samples over ±90% pupil pass | `validation.json` |
| Independent paraxial | EFL 100.40104104780512 mm; BFD 71.10541418018414 mm | `independent.json` |
| Independent exact meridional Snell comparison | Seven shared samples; max image-height difference 4.263256414560601e-14 mm | `crosscheck.json` |
| Scoped strict TypeScript / eslint / prettier | Passed | `typecheck.log`, `lint.log`, `format.log` |

### Explicit limits and unresolved work

- Exploratory ±99% native pupil rays clip at the estimated surface-5 rim. Independent extended traces fail the spherical-intersection domain. Do not claim a fully validated nominal f/2 pupil.
- At diagnostic field angles 10° and 20°, 4/9 and 6/9 samples clip. These angles do not establish a source image-circle or coverage specification.
- D/V-based spectral approximation and MTF support probes do not establish historical spectral performance or modern image quality.
- Full-app regression, compiled viewer/browser QA and final integration compatibility are not completed by these scoped checks. Data remains `visible: false`.

### Deduplication and compatibility provenance

A fresh exact-number scan of 3,400 retained lens source bodies found no US2130760 hit. The delivered 31-configuration historical inventory contains no matching patent/configuration. Foreign-publication aliases were not independently established; no alias is counted as a new family. The parent freshly verified authenticated remote main identical to the recorded pin during this build. Engine byte compatibility is inherited from the earlier comparison, not a new full engine audit; these are separate claims.

### Companion-only addition

These Markdown companions summarize existing source and validation evidence only. No optical data or already archived qualified ZIP was changed, and no new validation run is claimed. The original qualified ZIP contains the reproduction scripts and named evidence. Parent reports that ZIP privately archived and verified; this worker has not independently repeated remote readback for these new companions. No upload, commit, deployment or direct user delivery was performed in this companion step.
