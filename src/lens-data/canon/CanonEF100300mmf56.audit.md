# Audit Log — Canon EF 100–300mm f/5.6

Patent: JP S61-77818 A, sole numerical example. Original: `patents/JPA 1986077818-000000.pdf`.

## 2026-10-30 — Original-patent shape, concave-end and glass review

### Source and measurement boundary

The original's page 1 confirms 昭61-77818, publication 21 April 1986 and Canon as applicant; the fifth inventor continues on page 5. The complete spherical prescription, all 15 index/Abbe pairs and four-column 69/100/198/290 mm spacing table are on supplied page 3 (printed 113). Figure 1 is on page 4 (printed 114). Its group positions match the **100 mm** state, not the first authored 69 mm state: treating it as the latter would give a false axial scale.

The PDF embeds 2866 × 3895 one-bit raster pages at about 347 ppi. The original figure was inspected at that native scale; a 694 ppi detail was used only for magnification, not as additional source resolution. The approximately 815 ± 2 native-pixel front-to-rear vertex span corresponds to 124.10 mm at 100 mm, or 6.57 ± 0.02 px/mm. Rim picks carry approximately ±1–2 native pixels and about ±0.3 mm practical semi-height uncertainty. Motion arrows, functional-group brackets, the optical axis and stop strokes were excluded from glass measurements.

### Shape and retained geometry

| Element(s) / faces | Disposition | Original-figure evidence and retained constraint |
|---|---|---|
| L1–L2 / S1–S3 | Retained | Connected cemented front pair. The roughly 24.5 mm figure height is smaller than the aperture needed across all zoom states; no bonded-interface land is added. |
| L3 / S4–S5 | Retained | Air-spaced thin biconvex element; rounded figure endpoint does not justify a separate shoulder or cut. |
| L4 / S6–S7 | Retained | Both concave ends remain optical caps; ordinary axial rim connectors are not opaque vertical lands. |
| L5–L6 / S8–S10 | Retained | Cemented negative pair; no resolved outer shoulder beyond either cap and no opaque interface. |
| L7–L8 / S11–S13 | Retained | Cemented positive pair before the stop; no source-supported concave truncation at the retained clear apertures. |
| L9–L10 / S15–S17 | Retained | First rear compound and its shared interface remain connected; small endpoint differences do not establish a separate land. |
| L11–L12 / S18–S20 | Adjusted | Source draws a resolved outer shoulder at concave air exit S20. Preserve its existing 11.4 mm clear cap and extend the drawn radius to 12.5 mm. Increase the curved bonded S19 radius from 12.0 to 12.5 mm to meet that outline; no opaque interface land. |
| L13 / S21–S22 | Retained | Singlet cap ends and connecting rim are resolved; height differences are within figure-estimation uncertainty. |
| L14–L15 / S23–S25 | Retained | Rear cemented pair; both concave ends and cemented connection remain unchanged. No independent shoulder/cut is resolved. |

| Surface | Field | Before | After | Basis |
|---|---|---:|---:|---|
| S19 | `sd` | 12.0 mm | 12.5 mm | Curved bonded interface reaches the source-supported outer C5 height; no opaque land. |
| S20 | `sd` | 11.4 mm | 11.4 mm | Retained existing clear cap rather than shrinking it to the drawing. |
| S20 | `rimExtensionSd` | absent | 12.5 mm | Resolved shoulder outside that cap; approximately 82 native-pixel outer radius. |

At S20 the native figure cap endpoint is about 70–72 pixels from the axis versus about 82 at the outer rim: q ≈ 0.85–0.88, with one-pixel endpoint uncertainty about ±0.023 in q. The adopted cap remains larger than that drawing estimate; the 12.5 mm extension preserves its existing optical aperture. No inferred `rimCutDepthMm` or `rimCutDepthSource` is authored.

A rejected trial reduced the first-group radii to approximately 24.5 mm to match the 100 mm figure. It clipped the 290 mm axial f/5.6 beam at S1, producing approximately f/5.83 (+4%). The existing larger first-group apertures are retained as an all-state constraint. R/d, all spherical prescriptions, stop authority, zoom stations/gaps and the infinity-only focus behavior are unchanged. The historical L3 correction from printed N3 = 1.43749 to modeled 1.48749 remains explicitly separate from this shape review; it was not newly inferred from the drawing. The 290/300 mm heading inconsistency and computed rear focal distances also remain qualified in the analysis.

The actual SVG outlines were compared with Figure 1, including the 100 mm layout and all four authored zoom stations with focus at 0/0.5/1. All 15 element paths remain connected and finite, with no hidden renderer trimming. Surface geometry, stated axial aperture and corner coverage remain separate from source resemblance. All four source stations reach the full modeled format corner; no source cut is claimed to be dimensioned. The focus slider does not reconstruct finite-object internal motion.

### Glass and source-reference qualification

All 15 original N/ν pairs were checked on source page 3, including cemented media; no hybrid layer, source filter, rear plate, separate cement medium or additional refracting plate appears in the selected prescription. The source defines N and ν but does **not** name their spectral reference. No C/F/g line indices, partial-dispersion ratio, APD coefficient, vendor or melt designation is published.

| Element | Original N / ν | Modeled N / ν | Disposition |
|---|---|---|---|
| L1 | 1.80518 / 25.4 | same | Unmatched; source reference unspecified |
| L2 | 1.51633 / 64.1 | same | Unmatched; source reference unspecified |
| L3 | 1.43749 / 70.1 | 1.48749 / 70.1 | Existing documented source correction retained; reference unspecified |
| L4 | 1.71300 / 53.8 | same | Unmatched; source reference unspecified |
| L5 | 1.69680 / 55.5 | same | Unmatched; source reference unspecified |
| L6 | 1.80518 / 25.4 | same | Unmatched; source reference unspecified |
| L7 | 1.52301 / 50.8 | same | Unmatched; source reference unspecified |
| L8 | 1.80518 / 25.4 | same | Unmatched; source reference unspecified |
| L9 | 1.60311 / 60.7 | same | Unmatched; source reference unspecified |
| L10 | 1.77250 / 49.6 | same | Unmatched; source reference unspecified |
| L11 | 1.83400 / 37.2 | same | Unmatched; source reference unspecified |
| L12 | 1.60729 / 49.2 | same | Unmatched; source reference unspecified |
| L13 | 1.57501 / 41.5 | same | Unmatched; source reference unspecified |
| L14 | 1.80400 / 46.6 | same | Unmatched; source reference unspecified |
| L15 | 1.61293 / 37.0 | same | Unmatched; source reference unspecified |

Each element now records `indexReferenceNote` and an explicit `Unmatched` annotation. The retained d-line tracing convention is an approximation; this change qualifies an unverified reference rather than proving the conventional d-line inference wrong. Previously active compatible catalog curves (15/15) are disabled (0/15) while that uncertainty remains. Numeric source/model pairs are preserved, no synthetic per-lens spectral overrides are introduced, and no historical supplier, melt or chemistry is identified. Class names remain conditional comparisons only. The public analysis was synchronized, including removal of stale active-proxy statements and a stale authored-stop-radius description.
