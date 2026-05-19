# Six-Digit Missing-Sellmeier Patent Review Sidecar

Manual sidecar for `six-digit-glass-codes-missing-sellmeier.generated.md`.
Use this before starting another patent pass so recently reviewed lenses are not reopened unnecessarily.

Last verification for this batch, 2026-05-19:

- `npm run generate:glass-reports` - passed
- `npm run typecheck` - passed
- `npm run format:check` - passed
- `npm run test` - passed

## Reviewed Lenses

| Review date | Lens | Data file | Patent reviewed | Disposition | Audit log |
|---|---|---|---|---|---|
| 2026-05-19 | Canon EF 100mm f/2.8L Macro IS USM | [CanonEF100mmf28LMacroIS.data.ts](../../src/lens-data/canon/CanonEF100mmf28LMacroIS.data.ts) | US 7,864,451 B2, First Numerical Example | Relabeled L13/L31 to S-LAM66, L21 to S-NBH8, L22 to S-TIL6, and L5b2 to S-LAM60. Cleared from the missing-Sellmeier queue. | [audit](../../src/lens-data/canon/CanonEF100mmf28LMacroIS.audit.md) |
| 2026-05-19 | Canon EF-M 32mm f/1.4 STM | [CanonEFM32mmf14STM.data.ts](../../src/lens-data/canon/CanonEFM32mmf14STM.data.ts) | JP2018-180366A, Numerical Data 1 | No coefficient-backed public match found for L8 / 675348; retained `Unmatched`. Added derived partial-dispersion values for L5-L8. | [audit](../../src/lens-data/canon/CanonEFM32mmf14STM.audit.md) |
| 2026-05-19 | Canon FD 35mm f/2 S.S.C. (I) | [CanonFD35mmf2.data.ts](../../src/lens-data/canon/CanonFD35mmf2.data.ts) | US 3,748,022, single numerical embodiment | Relabeled L4 to S-LAM51. L5/L8 code 774492 remains unresolved after public catalog search. | [audit](../../src/lens-data/canon/CanonFD35mmf2.audit.md) |
| 2026-05-19 | Canon RF 24-240mm F4-6.3 IS USM | [CanonRF24240mmf463.data.ts](../../src/lens-data/canon/CanonRF24240mmf463.data.ts) | US 2020/0142167 A1, Numerical Data 1 | Rechecked L14 / 531559; no coefficient-backed public catalog match found, so it remains code-only. | [audit](../../src/lens-data/canon/CanonRF24240mmf463.audit.md) |
| 2026-05-19 | Canon RF 50mm f/1.2 L USM | [CanonRF50mmf12L.data.ts](../../src/lens-data/canon/CanonRF50mmf12L.data.ts) | US 2019/0265441 A1, Numerical Data 2; patent-family US 10,838,201 B2 for dPgF | G5/G10 code 666356 remains unresolved after public catalog search. Added patent-family partial-dispersion values. | [audit](../../src/lens-data/canon/CanonRF50mmf12L.audit.md) |
| 2026-05-19 | Canon RF 85mm f/1.2L USM | [CanonRF85mmf12L.data.ts](../../src/lens-data/canon/CanonRF85mmf12L.data.ts) | US 2020/0012073 A1, Example 1 | Relabeled L2 to N-KZFS8, L5/L6 to S-NBH56, and L8 to S-TIL2; earlier same-day relabels also corrected L10-L14. Corrected rows cleared from generated queues. | [audit](../../src/lens-data/canon/CanonRF85mmf12L.audit.md) |
| 2026-05-19 | Canon RF24-105mm F2.8 L IS USM Z | [CanonRF24105mmf28Z.data.ts](../../src/lens-data/canon/CanonRF24105mmf28Z.data.ts) | US 2024/0192474 A1, Numerical Example 4 | Resolved most code-only and mismatch rows to public catalog glasses, including TAFD37A, S-FPM3, S-LAL18, S-LAH58, S-LAH99, L-LAH85V, and TAFD40. L8 / 770297 remains unresolved. | [audit](../../src/lens-data/canon/CanonRF24105mmf28Z.audit.md) |
| 2026-05-19 | Canon Serenar 85mm f/1.5 | [CanonSerenar85mmf15.data.ts](../../src/lens-data/canon/CanonSerenar85mmf15.data.ts) | US 2,645,973, Example 1 | Relabeled L2/L7 to Sumita K-SK18 and L4 to S-TIM28. Corrected rows cleared from generated queues. | [audit](../../src/lens-data/canon/CanonSerenar85mmf15.audit.md) |
| 2026-05-19 | Carl Zeiss Biogon 21mm f/4.5 | [ZeissBiogon21mmf45.data.ts](../../src/lens-data/carl-zeiss-oberkochen/ZeissBiogon21mmf45.data.ts) | US 2,721,499, Example 2 | Relabeled L4 / 607595 to Sumita K-SK7. L1 / 504667, L5 / 561575, L6 / 625533, and L8 / 642581 remain unresolved legacy codes. | [audit](../../src/lens-data/carl-zeiss-oberkochen/ZeissBiogon21mmf45.audit.md) |
| 2026-05-19 | Carl Zeiss Distagon T* 35mm f/1.4 | [ZeissDistagon35mmf14.data.ts](../../src/lens-data/carl-zeiss-oberkochen/ZeissDistagon35mmf14.data.ts) | US 3,915,558, Example 8 | Relabeled L1 / 583465 to Hikari BAF3. Corrected row cleared from generated queues. | [audit](../../src/lens-data/carl-zeiss-oberkochen/ZeissDistagon35mmf14.audit.md) |
| 2026-05-19 | Carl Zeiss Jena Pancolar 50mm f/2 | [CarlZeissJenaPancolar50mmf2.data.ts](../../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) | GB 850,117, Claim 2 | No exact public catalog match found for the Jena in-house glasses. Reworded L3 / 672323 to avoid a false SF2 resolution; 662561, 672323, and 602352 remain code-only. | [audit](../../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.audit.md) |

