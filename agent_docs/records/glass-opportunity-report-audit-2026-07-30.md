# Glass Opportunity Report Audit — 2026-07-30

## Scope

This pass reviewed the generated glass-opportunity and six-digit missing-Sellmeier queues after the named-token
catalog closure. It changed report classification only; no lens prescription, glass assignment, catalog coefficient,
or runtime dispersion behavior changed.

## Review-record disposition

An annotation containing `Unmatched`, `Unknown`, `Proprietary`, or `Unidentified` is now treated as a self-recording
review disposition. Those terms already state that the material must not be guessed from a nearby catalog coordinate,
so requiring a second sidecar or audit-log hit created a false recordkeeping queue.

After regeneration:

- 260 code-only elements remain missing trusted Sellmeier data.
- 0 are active unreviewed rows.
- 113 carry explicit self-recording dispositions.
- 147 non-explicit rows have a reviewed-sidecar or companion-audit record.
- 0 dispositions lack a review record.

This closes the 52 explicit rows that the prior generator described as recordkeeping-only follow-ups. The reviewed
sidecar remains useful for patent/source detail and is not removed.

## Material classification

Near-complete visible lenses are now split into:

1. glass-only catalog opportunities;
2. non-glass or mixed-material gaps.

Missing surfaces receive a deterministic material label:

- `cement` for cement, adhesive, or bond-layer descriptions;
- `plastic` for plastic, PMMA, or polycarbonate descriptions;
- `resin` for resin, polymer, organic, or replica-layer descriptions;
- `other` for liquid media or missing annotations;
- `glass` otherwise.

Mixed rows stay outside the glass-only priority list even when one of their missing surfaces is glass. This keeps the
catalog queue focused without hiding material-specific dispersion work. The regenerated near-complete inventory
contains 85 glass-only lenses and 40 non-glass or mixed-material lenses.

## Result

The catalog remains at 442 entries. Strict coverage remains 4715/5360 surfaces (88.0%), trusted chromatic coverage
remains 4725/5360 (88.2%), and fully covered counts remain 235 strict / 239 trusted.
