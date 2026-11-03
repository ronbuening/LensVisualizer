# Audit Log - Rodenstock Sironar-N 100mm f/5.6

Patent: DE 27 29 831 B1, sole numerical example in Claim 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_2729831_B1.pdf`. The drawing sheet shows the nearly symmetric Sironar section.
- The patent normalizes to f' = 100 and does not publish clear-aperture semi-diameters.
- The drawing shows broad outer elements, narrow inner groups near the aperture, and rear symmetry around the stop. Stored SDs follow that pattern: 12.15 mm at the outer surfaces, 6.9-7.7 mm through the inner groups, and a 6.933 mm stop.
- No SD values changed. Current values remain inferred from the patent drawing, the f' = 100 normalization, and renderer geometry checks.

## 2026-07-30 - Reference-line metadata

- Added `indexReference: "e"` to all six elements because the stored `nd` / `vd` slots preserve patent
  `ne` / `νe` values.
- The runtime and generated reports now reject d-line catalog substitution structurally rather than relying on annotation wording.
- No source values or prescription geometry changed.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 1 → 1.125 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 12.5 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: bellows focus; the focus description calls the 1.0 m extension representative.
