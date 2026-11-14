# Audit Log - Olympus M.Zuiko Digital 14-42mm f/3.5-5.6 II

Patent: US 8,994,842 B2, Common Example A / Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US8994842.pdf`. Common Example A is illustrated by FIGS. 1A-1C; Example 1 shares that cross-section and adds the first focusing-mode data.
- The patent publishes aperture-diameter values in semidiameter form for close focus. The Common Example A values are 5.36785, 5.56235, and 5.97654 mm across wide/standard/tele; Example 1 lists 5.11456, 5.27903, and 6.35081 mm for its corresponding close-focus table.
- The stored state-independent stop SD of 6.0 mm sits within those patent aperture anchors and is close to the common tele value. FIGS. 1A-1C show a larger G1, compact G2/G3 around the stop, and a larger rear G4; stored element SDs follow that shape.
- No SD values changed. Current values remain constrained by the patent AD table, figure silhouette, and ray-clearance checks.

## 2026-11-14 — Published finite conjugates

Patent: US 8,994,842 B2, Example 1.

| State (zoom/keyframe) | Field | Before | After | Paraxial offset (mm) | Offset (depths of focus) | Other reference (depths) | Verdict |
|---|---|---|---|---|---|---|---|
| 0/1 | `focus.conjugates` | absent | 243.2 mm, `image-plane` | 0.065953103 | 4.536665 | -23.284507 | ambiguous-reference |
| 1/1 | `focus.conjugates` | absent | 243.2 mm, `image-plane` | 0.037873864 | 1.566570 | -46.370537 | consistent |
| 2/1 | `focus.conjugates` | absent | 243.2 mm, `image-plane` | -0.285968781 | -7.580386 | -107.295911 | consistent |

Source: US 8,994,842 B2, Example 1, PDF p. 32 (printed col. 20): Object-to-Image Distance (OID) at Close Focus, OID = 243.2 mm at wide/standard/tele; Amount of Movement of Lens Units During Focusing, 2nd Mode.

Distance-reference basis: `patent-defined`. The patent states: “Object-to-Image Distance (OID) at Close Focus (Common Among Examples 1 to 3)”

- State 0/1: D6 / G1=28.54, D12 / G3 front=2.77, BF=17.15, D14 / G3 rear=7.77 mm. d6 = infinity + G1 movement; d12 = infinity + G3 movement; d14 = infinity - G3 movement; BF unchanged, using printed 2nd Mode movements.
- State 1/1: D6 / G1=12.41, D12 / G3 front=8.08, BF=17.13, D14 / G3 rear=13.15 mm. d6 = infinity + G1 movement; d12 = infinity + G3 movement; d14 = infinity - G3 movement; BF unchanged, using printed 2nd Mode movements.
- State 2/1: D6 / G1=4.06, D12 / G3 front=15.37, BF=17.06, D14 / G3 rear=21.47 mm. d6 = infinity + G1 movement; d12 = infinity + G3 movement; d14 = infinity - G3 movement; BF unchanged, using printed 2nd Mode movements.

The wide state is numerically ambiguous between references. It is retained because the source table explicitly names “Object-to-Image Distance (OID)”; the table, rather than numerical discrimination, establishes the reference.

Residuals retain the authored prescription and image plane. Every declared state already has its published-focus flag.
