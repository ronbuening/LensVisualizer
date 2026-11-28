# Audit — LEICA SUMMILUX-C 18mm T1.4

Patent: EP 2 321 688 B1, first embodiment, Table 1 / Figure 7 (`patents/EP2321688B1.pdf`).

## Historical audits prior to 2026-11-03

This section consolidates the staged authoring and independent audits (Stages 1–4, 2026-10-12) and the three
2026-10-13 reviews. Their controlling facts are kept below. Package hashes, replay recipes and the 170-row
claim-to-result map remain in the off-repository dossier.

### Stages 1–4: source binding, exceptions and model results (2026-10-12)

- **Source and identity.** EP2321688B1 first embodiment (Table 1 pp. 7–8, Table 2 p. 11, Figures 7–11c pp. 31–36,
  ¶0035–¶0058, claims 1–12) under the original 307-byte job card. The approval CSV's other publication
  (US 8,508,864 B2) was not substituted. The designer-supported correlation to the production 18 mm is qualified, not
  a confirmed production prescription.
- **Provenance.**
  - Candidate data SHA-256: 87cef64e418e7e6805f0c720a025decfa1ea0e27576934bdbc1a0a2cec2ce3a1, unchanged through
    Stage 4.
  - Independent Pass A was frozen 2026-10-12T18:51:42Z (fingerprint dc32446c…3d12, archive ef153eb8…122f, result
    5f4527cc…aba0), against pinned main 33ec433d56ed0044db432d6b0ff0395554d14696.
  - Manifests: Stage 1 3ad438d4…74ae, continuation 968395e9…553d, Stage 2 23e9c8cf…6f46. Support ZIP
    cf35e13e5a7ad3bbd7a184dc777138d6f45a4389cd64a896224a64ef4c4c89c0 (34,205,865 bytes).
  - Stage 3 fixed a stale HOLD disposition string in the Stage 2 / continuation manifests; it was packaging text, not
    an optical defect.
- **Owner-approved exceptions** (request Sentinel_85a565959efc8191b4b15ec1297c9e7d, reply
  Sentinel_04831649cad08191829e44a359fe8a74 "Yes"); nothing else is waived:
  - `nominalFno` = `apertureDesign` = 1.3209570317518873, which preserves the printed 15.80 mm iris semi-diameter.
  - `gapSagFrac` 0.9705 for this lens only. S8→S9 uses 97.046686 % of its gap with 0.272296 mm clearance (margin
    0.000306 mm); S10→S11 uses 95.097 % with 0.207 mm.
- **Transformations.**
  - The optional front filter L1 (S1/S2, 3 mm S-BSL7 + 2 mm air; ¶0042 "no such filter") is omitted, and object
    distances use the d-line air-equivalent 2 + 3/n_d = 3.978461251 mm.
  - F2/F3 are 532.251461 / 341.551461 mm object to image (physical 533.273 / 342.573 mm). ¶0048 and Table 1 row S0
    give 340.000 / 149.300 mm to S1.
  - Scale 1, (1+K) conic, A4–A14 on 6A and 32A. 18 elements / 15 groups, three cemented pairs. F1 uses true infinity
    for the source's 1,000,010 mm.
- **First-order results.**
  - e line: EFL 18.258675 / 18.080846 / 17.865989 mm at F1/F2/F3. Groups G1a −179.998, G1b +95.671 and G2
    +41.478 mm reproduce the printed −179.99 / +95.67 / +41.48.
  - d line: EFL 18.258034 mm and Gaussian BFD 44.844480 mm against the printed 44.800 mm gap. Authored minus Gaussian
    image gap is −0.044480 / −0.047657 / −0.050393 mm at F1/F2/F3.
  - Track 188.273 mm from S3, 193.273 mm from S1. Petzval sum +0.002667623619 mm⁻¹ (d) and +0.002638191554 mm⁻¹ (e).
- **Aperture definitions are kept separate.**
  - e-line Gaussian f/1.285818 (entrance pupil 14.200 mm diameter, 37.867 mm from S1); d-line Gaussian f/1.288582.
  - The exact d-line parallel ray at 6.910911547 mm reaches the 15.80 mm iris, giving f/1.320957 (runtime).
  - Patent "approximately f/1.4" and marketed T1.4 are separate quantities.
- **Geometry and rays.**
  - 6A sag 5.931690 mm; maximum rim angle 53.65°; minimum glass thickness 1.546 mm; zero hidden render trim at five
    states.
  - Exact sample: 750 requested, 724 solved, 480 transmitted, 244 aperture clips and 26 unsolved full-field
    launches. Seven STO clips are 1e-9 mm numerical overfill. Four S31 cemented-interface clips are disclosed.
  - Issue 779 was read but not attributed.
- **Source conflicts kept.** 769 mmHg pressure; Table 2 F3 relative illumination "753"; L14 / L17 / L19 shape prose
  against the Table 1 radii; ¶0057's 37.13° against Figure 11a's 38.04°. Table 2 distortion is reproduced within
  0.006 points, and breathing is +2.400 % against the stated +2.4 %.
- **Product figures kept separate.** Close focus 0.45 m (web), 0.5 m (data sheet) and 0.35 m (historical chart);
  T1.4 / 33 mm circle against patent f/1.4 / 28 mm; 142 mm barrel against the 193.273 mm optical track.
- **Analysis corrections C18-AUD-01…05** were wording-only: a dropped US/EP coefficient count, figure-angle history,
  the distortion and chief-angle reproduction, the iris definition, and the unsolved-target probe.

### 2026-10-13 — Deployment validation and wording pass

- Table 1 was re-read (text layer plus 200–400 dpi renders of pp. 7–8): 34 surfaces, 14 asphere values and 9
  variable gaps all match.
- US 8,508,864 B2 prints five asphere coefficients differently (S6 A, C, E; S32 A, E). Those values trace the
  full-field chief ray to about 32.5° instead of 38.04°, so the EP values govern.
- Aperture:
  - The f/1.321 axial ray exceeds S17–S21 by 0.074–0.089 mm.
  - The largest beam clearing every printed aperture is f/1.328 (15.715 mm at the stop). f/1.4 needs a 14.86 mm stop.
  - The aperture basis was left open.
- Maker: Leitz publishes no section or element count. The patent has three embodiments (18, 40 and 100 mm).
- Header, subtitle, specs, element labels and roles and `focusDescription` were edited; no optical value changed.
- The finite-conjugate source strings were reworded.
- `apd: "patent"` was added on L3, L6, L9, L13, L14, L16 (¶0046) and L18 (claim 10).

### 2026-10-13 — Semi-diameter pass and glass fields

- All 34 `sd` values equal Table 1's "Aperture Half Diameter" column, including the 15.80 mm stop. No `sd` changed.
- Figure 7 (p. 31, 300 dpi) is drawn at F2. Scale: 10.29–10.30 px/mm axial and 10.46–10.48 px/mm radial.
- Drawn rims (mm): L1 43.4, L2 40.0, L3 31.7, L4 24.3, L5 18.8, L6 20.1, L7 22.1, L8 21.5, L9 17.1, L10–L11 17.5,
  L12 17.8, L13 18.6, L14–L15 20.1, L16 19.2, L17 21.4, L18 22.0, L19 22.7.
  - Each rim sits 1.1–1.9 mm above the larger printed half-diameter: a mechanical edge with flat annuli, not a clear
    aperture.
  - The neighbour height order matches the table.
- Validator: 0.9705 passes. 0.97 rejects (S8–S9 8.95 mm against 8.943 mm allowed), and 0.90 rejects S8–S9 and
  S10–S11.
- 32A reverses slope near 15.3 mm, inside its printed 20.05 mm.
- The aperture audit would need S17–S21 at 16.04 / 16.01 / 15.83 / 15.83 / 16.37 mm to pass f/1.321. Not applied.
- Glass: the stored nC/nF/ng copies were removed (the curves equal the OHARA rows to 1e-15). 18 / 18 labels resolve;
  `dPgF` is unchanged.

### 2026-10-13 — Second review: diagram, labels, movement and patent performance

- Squared rims were tried as validator trials and rejected:
  - S8 at 22.90 mm lies beyond the hemisphere of R 22.024 mm.
  - S31 at 20.05 mm exceeds the rim-slope limit (65.3° against 64.2°).
  - L16's edge would go to −0.18 mm.
- Groups G1a / G1b / G2 and doublets D1–D3 (S19–21, S27–29, S30–32A) were confirmed against Table 1, as were the
  seven `apd` tags (¶0046; claims 7–10: 1.497 / 81.6, 1.439 / 95.0, 1.808 / 22.8).
- Focus directions match ¶0048 and the Figure 8 arrows: G1b moves 0.699 / 1.657 mm toward the image and G2 with the
  iris 0.899 / 1.777 mm toward the object. The gap sum is 57.489 mm, and focusPositions are 0 / 0.641711 / 1.
- Independent exact trace (OHARA AGF, July 2026; filter in place; 546.074 nm):
  - Table 2 distortion is reproduced within 0.006 points. Figure 11a's field labels 0.7 / 0.8 are Table 2's
    0.65 / 0.85.
  - Relative illumination: 10 of 12 entries within 0.2 points. "753" is 75.3, and F2 at 0.65 prints 79.1 for a traced
    71.9 (a second misprint).
  - The full-field beam is 41.8 % at F1 (¶0051 "around 42%"). A 14.86 mm stop does not reproduce Table 2.
- Ray fans (Figs. 10a/10b), at the printed plane and five wavelengths:
  - On axis: within 9.1 µm over the inner 85 % of the pupil, 14.1 µm at the rim (455 nm).
  - Full-field tangential: within 7.8 µm, 14.8 µm at the rim.
  - ¶0053 gives "around 0.01mm". Paraxial focus runs from 44.868 mm (C) to 44.796 mm (F), so the 44.800 mm plane is a zonal-balance
  focus.
- MTF (Figs. 11a–11c, 5 wavelengths, 15.80 mm stop):
  - F1: model 0.945 / 0.836 / 0.695 against the figure's 0.943 / 0.836 / 0.700 at 20 / 40 / 60 c/mm (0.4 field). The
    on axis is within one micrometre of focus.
  - F2 and F3 agree similarly.
  - Diffraction-limit fits give f/1.311 / 1.306 / 1.316. f/1.4 lies 3.7–4.2 px off.
- Glass codes: all eleven printed codes are current OHARA codes. Four no longer round from the current νd: S-LAL61
  741527, S-FPL51 497816, S-FPL53 439950 and S-PHM52 618634. The code values reproduce the patent worse than the
  catalog values, which stay.
- Analysis-tab notes: the distortion, vignetting and breathing tabs use different definitions from the patent. The MTF
  tab's "printed back focus … disagrees" inference did not hold for this lens.
- Coordinator follow-up: the four prose / caption / Table 2 `unresolved` errata were removed from `sourceErrata`. They
  remain in the header and analysis with the 79.1 misprint.
- Open (owner): the aperture basis, printed iris f/1.321 against the stated f/1.4. Table 2 and the Figure 11
  diffraction limits fit the printed iris (f/1.31 ± 0.03).

## 2026-11-03 — Image-plane consistency (kept as best-focus plane)

Policy: LENS_DATA_SPEC § Image-Plane Consistency. No value changes. The data header gains one line, and this log is
squashed above.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| Header note | — | best-focus plane line | The source evaluates at the printed plane |

- Residual kept: the plane lies +0.044 / +0.048 / +0.050 mm inside paraxial d-line focus at F1 / F2 / F3 (21.7 depths
  at f/1.32 at infinity). Real-ray axial best focus is +0.007 mm (about 3.4 depths).
- Travel, EFL (18.258 mm), close focus (0.34155 m; label 0.3472 m) and the two certified conjugates are unchanged.
- Evidence:
  - aberration-figure: Figs. 10a/10b ray fans balance at 44.800 mm while paraxial focus spans 44.796–44.868 mm across
    C–F.
  - aberration-figure: Figs. 11a–11c MTF is reproduced at the printed plane within 1 µm of focus.
  - The same designer prints the same 44.800 mm F1 plane in US 8,508,864 B2 Examples 2 and 3 (Summilux-C 40 and 100).

Follow-ups: none.
