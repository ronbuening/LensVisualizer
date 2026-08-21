# Audit Log — NIKON AF-S NIKKOR 600mm f/4E FL ED VR

Patent: US 2018/0031811 A1, Example 4 / Figure 11

## 2026-08-21 — Screenshot, patent-figure, diagram-metadata, and glass audit

### Phase 1 — Glass corrections

| Elements | Before | After | Justification |
|---|---|---|---|
| HG | generic 517639 crown class | `J-BK7 catalog equivalent` | Compatible coefficient curve for the historical crown coordinate; production supplier remains unspecified. |
| L11, L12 | crystalline CaF2 coordinate | CaF2 + inferred `FLUORITE` tags | The material-specific coordinate and Nikon's two-fluorite specification support the assignment; the patent publishes no material name or line-index table. |
| L15, L32, L34, L38 | generic low-dispersion classes | explicit J-FKH1/J-PSKH1 equivalents + inferred `ED` tags | These are the four non-fluorite low-dispersion positions matching Nikon's four-ED detailed specification. |
| Remaining imaging elements | coordinate or family labels | explicit qualified catalog equivalents | Each named curve passes the resolver guard; all labels retain `production supplier unspecified`. |

### Phase 2 — Retained-information and semi-diameter audit

- Rendered the untracked local `patents/US20180031811A1.pdf` at 600 dpi and compared PDF page 12 / Figure 11 with the supplied site screenshot.
- Retained all semi-diameters. The reliable protective-meniscus and front-group outlines agree with the modeled proportions; rear automated ratios were rejected because Figure 11's dense lens labels and brackets cross the measurement bands.
- `audit:surface` passes with no validation errors, and `audit:image-circle` reports zero undersized surfaces.

### Phase 3 — Diagram and movement metadata

- Added patent identifiers `HG`, `L11`–`L15`, `L21`–`L22`, and `L31`–`L39` beneath their elements.
- Replaced generic `D1`–`D4` diagram captions with their element pairs and added source-functional `Gvr` and `Gadj` annotations without treating those nested sections as additional axial movement groups.
- Verified fixed-focal operation: there is no zoom travel. Cemented G2 alone moves `+15.559 mm` imageward from infinity to 4.4 m; G1 and G3 remain fixed.

### Phase 4 — Analysis sync

- Synchronized the explicit qualified glass labels and clarified that catalog coefficients provide runtime color coverage without becoming patent-authored spectral evidence.

### Verification

- `npm run audit:surface -- src/lens-data/nikon/NikonAFSNikkor600mmf4EFLEDVR.data.ts` — passed.
- `npm run audit:image-circle -- src/lens-data/nikon/NikonAFSNikkor600mmf4EFLEDVR.data.ts` — 0 undersized.
- `npm run generate:glass-reports` — passed; Sellmeier coverage remains 17/17.
- Full repository checks are recorded in the integrating commit.
