# Nikon AF-S DX MICRO-NIKKOR 85mm f/3.5 G ED VR Patent Audit

Patent: US 2009/0190220 A1, Example 1

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/US20090190220A1.pdf`; Figure 2 on PDF page 3 is the controlling optical section.
- The original SD ladder made L11 the largest front element, whereas the patent shows the L13/L14 cemented pair as the tallest part of G1. It also understated the diameter of the G4 vibration-reduction pair.

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 1 / 2 / 3 / 4 | 15.5 / 15.0 / 14.6 / 13.5 | 14.0 / 13.8 / 13.0 / 13.0 |
| 5 / 6 / 7 | 13.25 / 13.0 / 12.7 | 15.0 / 15.0 / 15.0 |
| 19 / 20 / 21 | 8.6 / 8.6 / 8.5 | 10.5 / 10.5 / 10.3 |

- The glass audit found no additional defensible relabel beyond the compatible catalog resolution already available from the authored class coordinates.
- Normalized the display name to `NIKON AF-S DX MICRO-NIKKOR 85mm f/3.5 G ED VR`.

### Verification

- `npm run audit:surface -- src/lens-data/nikon/NikonAFSDXMicroNikkor85mmf35GEDVR.data.ts`
- `npm run audit:image-circle -- src/lens-data/nikon/NikonAFSDXMicroNikkor85mmf35GEDVR.data.ts`
- Full repository checks are recorded in the integrating commit.
