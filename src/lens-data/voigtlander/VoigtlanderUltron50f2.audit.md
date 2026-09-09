# Audit Log — Voigtländer Ultron 50mm f/2

Patent: US 2,627,204

## 2026-06-23 — Full Voigtländer local-patent sweep

- Expected local patent source: `patents/` entry for US 2,627,204.
- Searched the local untracked `patents/` folder by filename patterns and full extracted PDF text references; no exact US 2,627,204 patent PDF was present.
- No glass, APD, high-index, prescription, or semidiameter changes were made. This lens remains unaudited against the requested local patent until the source PDF is added to `patents/`.

## 2026-09-09 — Patent and live-view audit

Retrieved missing US2627204.pdf from Google Patents, kept ignored. Example II table p.6, Figure3 p.2 at600dpi and field description p.5 checked. Source d2=.06395 retained over conflicting claim4=.08393; existing rounded radii, thicknesses, stop split and all glass coordinates retained. No cover/filter rows.

- Rims retained: automated crop measurements were contaminated by arrows/hatching and rejected; manual comparison did not justify replacing approximate SDs. Surface and image-circle checks pass, with explicit135-full-frame metadata replacing the former skipped floor check. No runtime trimming at0/.5/1.
- Reconstructed unit-focus near BF37.492→37.62656437420401mm makes the assumed1m label accurate; old model gave1.046183m. All lenses/stop move2.766564374mm. Source supplies infinity only; production-drive claims replaced by explicit reconstruction.
- Added source-design aperture2, scaled focalLengthDesign50 and complete publication identifier. Distinguished source55° useful field from modeled35mm46.8° crop. Isolated element focal lengths recalculated.
- Replaced four unresolved chemistry labels with qualified K-LaK11, S-TIM6, LAC13 and S-BAH28 coordinate proxies; retained compatible N-SK16/SF2. No supplier, thorium/lanthanum chemistry or APD claim follows from these matches.
- Three regressions pass. Production baseline and local infinity/near/midpoint/f16 inspected: near1.00m BF37.63, midpoint2.00m BF36.24; EFL50mm unchanged, f16 stop2.07mm. Batch31–40 full gates/commit pending.
