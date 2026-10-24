# Patent Example Queue

Lens files that do not yet record `source.example` (the numerical example of `source.patentNumber` they transcribe;
see `src/lens-data/LENS_DATA_SPEC.md` § The transcribed example). Every key here is in `MISSING_PATENT_EXAMPLE` in
`__tests__/src/lens-data/patentMetadata.test.ts`. When a row is resolved, add `source.example`, edit the analysis
metadata row as `LENS_ANALYSIS_SPEC.md` § 1 describes, and delete the row here and the key from that list in the same
commit.

## No designation the schema can express

| File | Patent | Evidence |
|------|--------|----------|
| `nikon/NikonNikkor15mmf56` | JP S48-71634 A | The file transcribes the second prescription, headed 球面光学系（参考資料） ("spherical optical system, reference material"), printed after the invention's single unnumbered 実施例 for comparison. It has no number, and it is not the sole example, so neither a numbered label nor `"Sole example"` fits. Resolving it needs a schema decision, such as a `"Reference"` label form. |
