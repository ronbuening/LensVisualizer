# Audit Log — Sony Sonnar T* FE 35mm F2.8 ZA

Patent: JP 2015-41012 A, Example 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/JP2015041012A.pdf`.
- Example 1 rows confirmed the rounded patent glasses at S1 nd = 1.80000, vd = 25.46; S10 nd = 1.63000, vd = 34.57; and S12A nd = 1.68000, vd = 31.16.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L111 / S1 | `...S-TIH6...or FD60...` | `800255 - dense flint...` | No exact public coefficient-backed match found; retained as code-backed patent glass. |
| L132 / S10 | `NBFD11 (Hoya)` | `630346 - dense flint...` | Nearby E-F1 was not exact enough to force; retained as code-backed patent glass. |
| L133 / S12A | `S-TIM28 (OHARA)` | `680312 - dense flint...` | No exact public coefficient-backed match found; retained as code-backed patent glass. |

### Analysis sync

- Updated the glass table and element prose to describe these as code-backed unresolved glasses.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/JP2015041012A.pdf` and the current analysis sidecar against the data file.
- Existing R/d/nd/vd, high-index/code-backed labels, APD metadata, and estimated SD profile remain consistent with the patent-backed prescription and prior relabel pass.
- No APD, high-index, glass-label, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-07-29 - Patent-rounded glass disposition

- Rechecked local `patents/JP2015041012A.pdf`, Example 1. Stored R, d, nd, and νd remain unchanged.
- S2 and S9 `S-LAH55V (OHARA)` -> unmatched 830427 rounded lanthanum glass at 1.83000 / 42.72.
- S7A `L-BAL42 (OHARA)` -> unmatched 580595 rounded molded crown at 1.58000 / 59.46.
- The patent's two-decimal indices and undisclosed supplier do not support unique vendor identities. Synchronized
  the analysis while retaining S-LAH55V/TAFD5F and L-BAL42 as comparisons.

## 2026-09-25 — MTF image-plane census

Source: local `patents/JP2015041012A.pdf`, Example 1, PDF pp.11–12, paragraphs 0077–0080. Visually checked every R/d/nd/νd, all six asphere K/A4/A6/A8/A10 rows (standard conic convention), and infinity D6=1.49/D8=5.53 versus close 3.13/3.89. All match. Native scale, no omitted surface: S14 is explicitly the image plane after d13=20.03; no plate is listed.

**Cause: source contradiction.** Independent reduced-angle propagation gives EFL 35.948432083 mm (printed 36.06) and BFL 20.500541847 mm (image distance 20.03). Source nd values have only two decimals; precision loss is plausible, but cannot be repaired with unproven glass identities. No single supported misprint resolves the residual. Corrected the analysis table's previous claim of exact computed BFD agreement. Runtime offset **+0.470542 → +0.470542 mm**. Published values retained, Section E row deleted, no numerical change or changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.35 → 0.406 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 16.0 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: 0.35 m is the old (production) value. The printed close row does state its distance,
  物体距離 350 mm (¶0079). (Corrected 2026-11-03 by the image-plane entry below; this line first said it printed none.)
- `catalog.closeFocusM.marketing` 0.35 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

## 2026-11-03 — Image-plane consistency (re-solve)

Source: local `patents/JP2015041012A.pdf` (text layer), Example 1 ¶0077–0080. ¶0077 prints every nd to two decimals
(1.80, 1.83, 1.76, 1.58, 1.83, 1.63, 1.68), d13 = 20.03 directly before the image plane; ¶0079 prints D(6)/D(8)
1.49/5.53 at infinity and 3.13/3.89 at "最至近距離（物体距離350mm）"; ¶0080 f = 36.06. The file still matches every cell.
LENS_DATA_SPEC § Image-Plane Consistency: source rounding, so the air gaps are re-solved, back focus first.

| Field | Before | After | Justification |
|---|---|---|---|
| S13A `d` (back focus) | 20.03 | 20.500542 | Paraxial focus at infinity; the plane sat 0.470542 mm in front of it (48 depths at F2.884) |
| `gaps["6A"]` near row | 3.13 | 3.228268 | L121 re-solved to focus 350 mm object to image plane after the back-focus change |
| `gaps["8A"]` near row | 3.89 | 3.791732 | Same move, opposite sign; D(6) + D(8) stays 7.02 |
| `gaps["8A"].label` | `BF` | `D8` | The gap is the patent's D(8), G2 to G3; the back focus is S13A `d` |
| `focus.closeFocusM` | 0.406 | 0.35 | Object-to-image distance of the re-solved near row |

- Residual: infinity +0.470542 → 0 mm; near row now focuses 350.0 mm from the image plane (was 405.9 mm).
- Travel: L121 1.64 → 1.738268 mm. EFL unchanged at 35.948 mm (printed 36.06). Track 47.580 → 48.051 mm.
- Close focus: 0.406 → 0.35 m, now equal to `catalog.closeFocusM.marketing` 0.35 m.
- Evidence for the class: two-decimal indices (¶0077); the real-ray axial best focus (+0.387 mm) sat near paraxial focus,
  so the printed plane was not a best-focus plane.
- Reference choice: ¶0079 does not say where 350 mm is measured from. Object to image plane matches Sony's 0.35 m minimum
  focus distance; read from the first surface instead, the near row would be D(6)/D(8) 3.166392/3.853608 mm (0.3976 m).

Follow-ups:

- None.
