# Focus Breathing / Distortion Overhaul

## Summary

- Branch: `ronbuening/codex_analyze_distortion`
- Goal: separate focus breathing from distortion, stabilize close-focus distortion analysis, and expose breathing in the analysis drawer

## Changes

- Reworked distortion analysis to sample fixed image heights and solve back to object-space field angle
- Added focus-aware field geometry helpers in the optics layer
- Updated the distortion UI to reflect image-height-based rectilinear distortion
- Added a dedicated breathing tab with a focus-range chart and current-state summary metrics
- Renamed the lens-diagram launch button to `ABERRATIONS & DISTORTIONS`
- Added display/reducer tests covering the new distortion semantics and breathing tab

## Verification

- `npx vitest run __tests__/distortionAnalysis.test.ts` — passed
- `npx vitest run __tests__/analysisDisplayTabs.test.ts __tests__/lensReducer.test.ts` — passed
- `npm run typecheck` — passed

## Follow-ups

- Consider a dedicated UI test around `LensDiagramPanel` tab visibility if full component rendering coverage expands
- Consider PR notes/screenshots showing the distortion and breathing tabs side by side
