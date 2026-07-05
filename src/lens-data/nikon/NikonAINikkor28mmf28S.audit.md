# Audit Log - Nikon AI Nikkor 28mm f/2.8S

Patent: US 5,917,663, Example 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed the existing semi-diameter reference-pass notes in `agent_docs/semi-diameter-patent-diagram-audits.md` for this lens and the local source mapping to US 5,917,663 Example 2.
- This lens was part of the successful reference pass: the rear group after the stop had already been narrowed so the stored clear apertures match the patent diagram and keep the CRC interval discussion honest.
- Current SDs preserve that refined shape: broad retrofocus front elements, a smaller stop, and a deliberately narrowed post-stop/rear group.
- No new SD values changed in this pass. L7/L8 glass remains explicitly documented as unresolved J-LAK02-class fallback material, independent of this SD audit.

### Verification

- `npm test -- elementRenderDiagnostics`
