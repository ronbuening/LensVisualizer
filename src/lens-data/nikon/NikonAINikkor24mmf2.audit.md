# Audit Log - Nikon AI Nikkor 24mm f/2

Patent: US 4,163,603, Embodiment III / Claim 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed the existing semi-diameter reference-pass notes in `agent_docs/semi-diameter-patent-diagram-audits.md` for this lens and the local source mapping to US 4,163,603 Embodiment III.
- This lens was the reference workflow for the current SD audit pass: the front retrofocus group and rear positive group had already been tightened to follow the patent figure more closely, while focus gaps were left fixed because the patent publishes only infinity spacing.
- Current SDs preserve that refined shape: a broad front group, a controlled stop-adjacent waist, and a rear positive group trimmed to avoid excessive cross-gap sag in the tight post-stop spaces.
- No new SD values changed in this pass. The previously tuned values remain the accepted patent-diagram fit; the production CRC behavior remains documented as a non-tabulated mechanism.

### Verification

- `npm test -- elementRenderDiagnostics`
