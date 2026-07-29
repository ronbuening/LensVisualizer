# Audit Log - Pentax HD D FA645 Macro 90mm f/2.8 ED AW SR

Patent: US 2013/0222925 A1, Numerical Embodiment 4

## 2026-07-28 - Integration, semi-diameter, and glass audit

### Patent evidence

- Reviewed the ignored local source `patents/US20130222925A1.pdf`.
- Compared the prescription with Figure 25 on PDF page 17.
- The patent does not publish clear-aperture values, glass names, line indices, or partial-dispersion data.

### Identity correction

- Normalized the display name from `PENTAX HD PENTAX-D ...` to the repository form
  `PENTAX HD D FA645 MACRO 90mm f/2.8 ED AW SR`.

### Semi-diameter corrections

| Surface set | Before | After | Justification |
|---|---|---|---|
| 1-6 | 24.5-31.5 mm | 21.5-26.5 mm | Removes the oversized front outline while retaining the Figure 25 taper and ray clearance. |
| 7-9 | 18.8-20.5 mm | 16.5-18.0 mm | Matches the compact stabilizing doublet outline. |
| 11-13 | 18.2 / 18.7 / 22.2 mm | 17.2 / 17.5 / 18.2 mm | Restores the smaller cemented L16-L17 pair; surface 13 retains a close-focus ray floor. |
| 14 / 15A | 22.8 / 22.8 mm | 19.9 / 19.9 mm | Tightens the aspheric L18 outline while preserving the close-focus 0.60-field envelope. |
| 16-21 | 21.2-21.8 mm | 18.1-18.8 mm | Removes the oversized rear focusing-group outline and follows Figure 25. |

The Figure 25 proportions are used where possible; the larger of the infinity/close-focus ray envelope and a small
clearance allowance controls any surface that needs more aperture.

### Glass disposition

| Elements | Patent coordinate | Result |
|---|---|---|
| L14 / L21 | 1.63980 / 34.6 (`640346`) | Added obsolete HOYA E-FD7 as an exact code-equivalent formula-3 catalog source; this also represents the S-TIM27 class without asserting the patent vendor. |
| Remaining elements | Patent nd/vd rows | Existing catalog code matches retained. |

The lens now has coefficient-backed dispersion on all 11 glass elements. The two ED identifications remain
classifications based on the patent coordinates and product correlation, not claimed melt identities.

### Verification

- `npm run audit:surface -- src/lens-data/pentax/PentaxDFA64590mmf28EDAWSRMacro.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/pentax/PentaxDFA64590mmf28EDAWSRMacro.data.ts` - passed.
- Normal-density axial and 0.60-field ray fans remain unclipped at infinity and the published close endpoint.
- `npm test -- dispersion.test.ts` - passed (49 tests).
- `npm run generate:glass-reports` - passed (7 report tests).
- `npm run typecheck && npm run format:check && npm run lint && npm run test` - passed (2450 tests; lint retained
  three unrelated pre-existing warnings).
- `npm run build` - passed; 963 routes prerendered.
