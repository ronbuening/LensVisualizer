# Audit Log — OLYMPUS E.ZUIKO AUTO-T 200mm f/4

Patent: US 3,838,911, Embodiment 2

## Package as received

- Whole US 3,838,911 Embodiment 2, matched to the production lens by specification; not a confirmed factory prescription.
- Every length scaled ×2 from the patent's f = 100; image plane at the paraxial focus, 169.425 mm from the front vertex.
- Semi-diameters and the stop position were set from Fig. 1 and the f/4 rule before any tracing and were not tuned afterwards.
- The package author's MTF checks converged at the paraxial plane without a focus shift; stop-position and ±5% semi-diameter variants were traced separately and not used to choose the model.
- Source files, figure crops and hashes stayed with the delivery, outside the repo. Model SHA256 `6f75c14b5b0a04f0e8f43d5d7e7d8a28cba8c13360e102a2c554ad386bf73c50` (as received).

## 2026-11-03 — Deployment validation and cleanup

- Re-read the Embodiment 2 table and claim 2 from 300 dpi page images of `patents/US3838911.pdf` (PDF pages 4–5). Checked 9 radii, 8 thicknesses and 5 index/Abbe pairs at ×2: no mismatches. The patent prints no aspheres, no variable gaps and no back focus.
- First-order, patent vs model at f = 100: f 100 vs 100.025 (200.049 at ×2), F/4 vs f/4.000, 2ω = 12° vs 6° half-field, ζ = 0.85 vs 0.847. Paraxial back focus 31.993 (63.985 at ×2).
- An independent trace gives LSA −0.003 at full pupil, field-curve offsets ≤ 0.04 and distortion +1.36% at 6° (f = 100 units), in line with Figs. 3a–3d. The distortion barely moves with the stop between 0.5 and 1.0 of d5. The stop mark in Fig. 1 reads at about 0.74 of d5.
- Maker comparison: MIR lists 5 elements / 4 groups, 12°, f/4–32, 2.5 m, 55 mm filter and straight-helicoid focus, with the same construction for the E-Zuiko and later Zuiko (MC) Auto-T. The dealer-binder section (pacificrimcamera 00358, p. 14) was cited by the package and not re-viewed here. Embodiment 1 (F/3.5, 18°) does not fit; it is the corpus's 135mm f/3.5. No other corpus file models this example; the F.Zuiko 200mm f/5 is US 3,804,494.
- All five n/ν pairs equal OHARA catalog glasses at d: S-BSM16, S-FSL5, S-TIH14, S-LAL12, S-TIH11.
- Data step: `glass` labels set to those catalog equivalents; `closeFocusM` 1e15 → 2.5; surface 9 `d` moved into `gaps` as BF [63.98538070550599, 83.56], a derived unit-focus state (2500.00 mm object to image, β −0.0978), not published; `groups` G1–G4 added. `doublets` CD1 and `aperture` (f/4–32) unchanged.
- Wording step: header comment, `subtitle`, `specs`, element `role` and `indexReferenceNote` text, analysis prose and this log rewritten in plain terms; analysis now names the catalog glasses, describes the derived 2.5 m state and drops test-run counts.
- Surface audit OK; aperture audit within 3% of f/4; no axial clipping at Y = 21.0 mm at either focus; corner light 83.5% at 6°.
- Open: none for the optics.
