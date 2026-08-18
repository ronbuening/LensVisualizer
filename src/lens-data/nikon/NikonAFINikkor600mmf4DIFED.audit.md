# Nikon AF-I NIKKOR 600mm f/4D IF-ED Patent Audit

Patent: JPH04238311A, Example 5

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/JP_H04238311_A.pdf`; Figure 9 on PDF page 10 is the controlling optical section.
- The authored front-group diameter, narrowing focus group, rear group, stop, and filter spacing follow the schematic proportions. No SD change was justified; the roughly 79mm front semi-diameter is also consistent with the f/4.11 entrance-pupil requirement.
- Retained all patent prescription and glass-coordinate values. HIKARI `E-LAF11` now supplies a compatible curve for L13 at `1.75692 / 31.7` without asserting a production melt.
- Romanized the inventor metadata from `佐藤 進` to `Susumu Sato`, retaining the Japanese form in the analysis. This resolves the metadata test failure and matches the same inventor's romanization in JPH04294310A.
- Normalized the display name to `NIKON AF-I NIKKOR 600mm f/4D IF-ED`.

### Verification

- `npm run audit:image-circle -- src/lens-data/nikon/NikonAFINikkor600mmf4DIFED.data.ts`
- Full repository checks are recorded in the integrating commit.

## 2026-08-18 — Screenshot follow-up

- Compared the supplied site screenshot directly with Figure 9. The front collector, compact focus group, and single rear element remain a close silhouette match; no additional SD edit was justified.
- Confirmed the constrained production-distance order: G2 moves `+11.2563mm` imageward while G1 and G3 remain fixed.
- Added the missing `FOCUS` role to the G2 diagram label and marked L11/L12/L31 as the three inferred ED positions.
