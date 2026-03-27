# Spherical Aberration Docs + PR

## Summary
- Refresh the public and internal documentation after the spherical-aberration accuracy fix
- Open a PR for the aberration correction and documentation updates together

## Changes
- Rewrote `README.md` to reflect the current app structure, feature set, scripts, and contributor workflow
- Updated `agent_docs/architecture.md` for the current analysis drawer tabs, optics helpers, and spherical-aberration sign convention
- Updated `ANALYSIS_OPTIONS.md` to distinguish already-shipped analysis features from future work
- Kept the existing spherical-aberration commits intact and added a docs-focused follow-up commit

## Verification
- `npm test` — passed
- `npm run typecheck` — passed

## Follow-ups
- If the public site adds or removes major analysis views again, keep the README feature list high-level to avoid another brittle drift cycle
