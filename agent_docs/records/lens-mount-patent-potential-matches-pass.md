# Lens Mount Patent Potential Matches Pass

## Summary
- Reviewed the 20 mounts from `/Users/ronbuening/Downloads/lens_mount_patents_potential_matches.md` against the authored mount specs, `MOUNT_SVG_SPEC.md`, and `lens-mount.schema.json`.
- Every listed mount already has an authored renderable spec. The Sony E table row maps to the project canonical mount id `sony-fe`.
- Cleaned labeled `sourceRefs.liveUrl` values across mount specs so patent/JAPB/manufacturer references are direct URLs instead of strings like `Google Patents: https://...`.
- Added a validator guard so future label-prefixed URL strings cannot bypass live URL archive/date checks.
- Followed up on Nikon Z after reviewing US10831084B2 directly: the patent now backs the four-claw body/lens bayonet, lock pin/receiving groove, and 11-terminal order with `patent` provenance so those features render as solid patent embodiment lines.
- Followed up on Nikon F after reviewing US4766453A and US5185622A directly: the AF-era bayonet/lock/diaphragm/drive/contact structures now carry `patent` provenance where the patents support them.
- Followed up on Leica M after reviewing US2618201A directly: the Leitz four-lug bayonet, selected keyed lug/slot, tactile notch/protuberance, selected-lug cam, and rangefinder-lever recess now carry `patent` provenance where the patent supports them.
- Followed up on Pentax K after reviewing US4017878A, US4357089A, and US4939532A directly: the Asahi/Pentax bayonet/lock embodiment, KA contact bank, AF joint shaft, lens driven shaft, and AF-era data/power contacts now carry `patent` provenance where the patents support them.

## In-Order Mount Pass
- Canon EF: existing `mvp_complete`; patent leads retained as related EF-era connector provenance.
- Canon EF-S: existing `mvp_complete`; EF-family patent leads retained as related/derived provenance.
- Canon EF-M: existing `mvp_complete`; Canon mirrorless patent leads retained for bayonet/contact provenance.
- Canon FD: existing `mvp_complete`; Canon breech-lock/safety patents retained as related mechanism provenance.
- Canon FL: existing renderable partial; Canon breech-lock lineage patent retained as related mechanism provenance.
- Canon RF: existing `mvp_complete`; RF-era Canon patent family retained for claw/contact provenance.
- Exakta: existing renderable partial; Ihagee quick-detachable mount patent retained as family provenance.
- Hasselblad V: existing renderable partial; early Hasselblad-related patent retained as low-confidence lineage only.
- Leica M: existing `mvp_complete`; Leitz bayonet/lug patent now backs the four-slot/four-lug bayonet embodiment, selected keyed lug/slot, tactile notch/protuberance, selected-lug cam, and rangefinder-lever recess.
- Nikon 1: existing `mvp_complete`; Nikon 1/CX-era patent family retained for mount/contact provenance.
- Nikon F: existing `mvp_complete`; AF-era Nikon F patent leads now back the bayonet/lock/diaphragm/AF-drive/contact structures that the patents directly disclose.
- Nikon Z: existing `mvp_complete`; Nikon Z patent retained for body/lens-side mount/contact provenance.
- Four Thirds: existing `mvp_complete`; Olympus/Four Thirds patent retained for native body/lens mount provenance.
- Micro Four Thirds: existing `mvp_complete`; Four Thirds predecessor patent retained as related-only provenance.
- Pentax K: existing `mvp_complete`; Asahi/Pentax patents now back the bayonet/lock embodiment, KA contact bank, AF joint shaft, lens driven shaft, and AF-era data/power contacts, with exact production clocking still normalized to secondary imagery.
- Sony A: existing `mvp_complete`; Minolta AF/A-mount patents retained for bayonet/contact provenance.
- Sony E: existing `mvp_complete` under canonical id `sony-fe`; Sony E/FE patent lead retained.
- Zenza Bronica ETR: existing renderable partial; Bronica lens-shutter mount patent retained as related family provenance.
- Zenza Bronica GS: existing renderable partial; Bronica lens-shutter mount patent retained as related family provenance.
- Zenza Bronica SQ: existing renderable partial; Bronica lens-shutter mount patent retained as related family provenance.

## Verification
- `npm run test -- mountSpecs mountRender nikonFMount` — passed.
- `npm run generate:mount-svgs` — passed; refreshed `agent_docs/generated/lens-mount-svg-specifications.md`.
- `npm run typecheck` — passed.
- `npm run format:check` — passed after formatting `src/mounts/pentax-110.mount.ts`.
- `npm run lint` — passed.
- Nikon Z follow-up: reran `npm run typecheck`, `npm run test -- mountSpecs mountRender nikonFMount`, `npm run generate:mount-svgs`, `npm run format:check`, and `npm run lint` — all passed.
- Nikon F follow-up: reran `npm run typecheck`, `npm run test -- mountSpecs mountRender nikonFMount`, `npm run generate:mount-svgs`, `npm run format:check`, and `npm run lint` — all passed.
- Pentax K follow-up: reran `npm run typecheck`, `npm run test -- mountSpecs mountRender nikonFMount`, `npm run generate:mount-svgs`, `npm run format:check`, and `npm run lint` — all passed.

## Follow-ups
- The partial medium-format/mechanical entries remain renderable but not reference-grade until service drawings or measured samples provide model-specific bayonet sectors and coupling positions.
- Google Patents and some patent mirror pages returned no Wayback snapshots via the availability API during this pass, so those refs keep direct patent URLs and ISO access dates rather than fabricated archive URLs.
