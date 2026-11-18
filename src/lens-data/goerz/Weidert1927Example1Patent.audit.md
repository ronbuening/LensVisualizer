# Audit: Weidert US1643865 Example 1

| Check | Scoped result |
| --- | --- |
| Source | Patent PDF pages 1–3 visually checked against the literal table; radii, thicknesses, shared cement interface, glasses and rear iris retained. |
| Matrix / exact rays | Independent reduced-angle matrix and Snell tracing agree with native ray results within 6.7e−15 mm in the checked comparison. Source aberration benchmark −3.1 mm, independent −3.089159 mm. |
| Geometry | Native canonical/schema and geometry zero errors; render trim gate passed. Dense 1,001 samples per checked span show positive separation. No numerical override. |
| Axial/off-axis | 181/181 central-90% axial and 199/201 full axial meridional rays transmit. Off-axis clipping documented in analysis; no coverage or MTF certification. |
| Build checks | Scoped strict TypeScript, lint, and formatting passed. Native MTF support probe was only a compatibility check. |
| Dedup | Retained baseline checked, six authenticated main additions searched at d7c0ad1, and 49 earlier historical configurations screened by ID, aliases and numerical fingerprint. |
| Pending | Full current-main integration, app regression and compiled-viewer/browser QA. No production identity established. |

The unchanged nested evidence archive contains the original PDF, inspected crops, literal transcription and reproducer, independent and native geometry/ray results, lint/typecheck logs and the original data file. This analysis/audit accompanies that file in the outer ZIP; it does not introduce a new optical result.
