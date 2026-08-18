# Nikon AF-I NIKKOR 600mm f/4 D IF-ED Patent Audit

Patent: JPH04238311A, Example 5

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/JP_H04238311_A.pdf`; Figure 9 on PDF page 10 is the controlling optical section.
- The authored front-group diameter, narrowing focus group, rear group, stop, and filter spacing follow the schematic proportions. No SD change was justified; the roughly 79mm front semi-diameter is also consistent with the f/4.11 entrance-pupil requirement.
- Retained all patent prescription and glass-coordinate values. Current catalog resolution is already available for the compatible class-coded rows; L13 remains unmatched because no checked curve is defensible at `1.75692 / 31.7`.
- Romanized the inventor metadata from `佐藤 進` to `Susumu Sato`, retaining the Japanese form in the analysis. This resolves the metadata test failure and matches the same inventor's romanization in JPH04294310A.
- The display name was reviewed and already follows the project convention.

### Verification

- `npm run audit:image-circle -- src/lens-data/nikon/NikonAFINikkor600mmf4DIFED.data.ts`
- Full repository checks are recorded in the integrating commit.
