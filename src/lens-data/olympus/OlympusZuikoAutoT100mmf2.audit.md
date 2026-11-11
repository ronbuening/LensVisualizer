# OLYMPUS ZUIKO AUTO-T 100mm f/2 — source audit

Package authoring note (kept as history; the "hidden" and "no integration" status is closed: the lens was integrated
and made visible on 2026-11-11, see below).

Inherited: whole E5 numerical-table pixel review, original source custody, live dedup and independent production-association admission. Fresh: original first-page metadata visual review; Fig1 rim picks before any rays; exact R/d/n/V authoring; strict TypeScript0diagnostics; native construction/geometry passes, no overrides; focused26-ray counts retained. Figure caps and midpoint stop are hypotheses, not factory dimensions. No caps changed after tests. Estimated conventionald dispersion cannot establish anomalous-partial-dispersion performance. No different-embodiment floating-focus law. No full integration/viewer acceptance, package or delivery.

## Deployment validation (2026-11-11)

- Source: US 4,435,049 A (Google Patents PDF), Embodiment 5, kept as `patents/US4435049A.pdf`. 13 R, 12 d and 7 n/ν
  pairs checked against the page image and claim 8: an exact ×100 scaling of the f = 1 print, no mismatches. The
  example's stated conditions reproduce (f1234/f 1.857, fB123/r6 0.869, f3/f 2.636, f56/f 9.462).
- Product: OM Zuiko Auto-T 100mm f/2, 7 elements / 6 groups, 0.7 m (OM-4 brochure). The MIR construction drawing
  (three positive menisci, a negative meniscus, a long gap, a cemented biconcave/biconvex pair and a biconvex singlet)
  matches Fig. 1. The association holds at family level: all five embodiments are 7/6 with similar track and back
  focus, so the choice of Embodiment 5 is unconfirmed. Floating focus is unverified and does not affect the static model.
- Integration fixes: `catalog.lensMounts` ["olympus-om"], `catalog.closeFocusM` 0.7 m.
- Open for the cleanup pass (closed 2026-11-11, next section): public wording; the analysis line about not borrowing
  another embodiment's floating focus (no embodiment prints one).

## 2026-11-11 — Cleanup and wording pass

Data file. Header comment rewritten as a house box comment with the same facts (source, ×100 scale, d-line reading,
paraxial back gap, midpoint stop, Fig. 1 rims, infinity-only focus). `subtitle` "US4435049 Embodiment5 qualified
representative; inferred stop, caps and spectral reference" → "US 4,435,049 A, Embodiment 5 — seven-element F/2
telephoto associated with the production lens". `specs` (three process lines) → "7 ELEMENTS / 6 GROUPS", "DESIGN f =
100 mm", "DESIGN F/2", "ALL SPHERICAL", following `OlympusEZuikoAutoT200mmf4`. `catalog.focalLengthMm.design` stays
100, the scaled patent f, as in the neighbouring OM Zuiko files (traced EFL 99.995 mm). Element `type` from the signs of
R: L1–L3 Positive Meniscus, L4 Negative Meniscus, L5 Biconcave Negative, L6 and L7 Biconvex Positive. Added `role`,
paraxial in-air `focalLengthMm`, and `cemented: "C1"` on L5/L6. `focus.closeFocusM` written as 1e15 (same value);
`focus.description` "NO_INTERNAL_RECONSTRUCTION: static infinity-only sentinel. Retail.7m not a motion law." → plain
infinity-only text naming the 0.7 m production minimum and the unverified floating group.

Glass relabels (exact rows, Δ = catalog − patent): L1 S-PHM51 (OHARA) Δnd +0.000001, Δνd +0.001; L2 FCD1 (HOYA)
Δnd 0, Δνd +0.01 (ties with S-FPL51 at −0.05; FCD1 is the closer row and the name of the period); L3 S-BSM36 (OHARA)
Δnd −0.000005, Δνd −0.03; L4 S-TIH14 (OHARA) Δnd +0.00002, Δνd +0.02; L5 PBL25 (OHARA) Δnd +0.00004, Δνd −0.05
(lead-glass period row, ties with S-TIL25); L6 S-LAM58 (OHARA) Δnd 0, Δνd −0.02; L7 S-LAL14 (OHARA) Δnd −0.000003,
Δνd +0.03. Each label resolves with `trylabel.mjs`. No catalog nC/nF/ng were present. L2 `apd: "patent"`: the patent
names the second component an anomalous-dispersion glass (condition 3 and col. 3); it prints no θgF, so L2 traces on
the FCD1 catalog curve. No Olympus table marks an ED element; MIR's "ED glass in the front elements" is cited in the
analysis only.

Analysis. Removed the pixel-span log, the ray-count paragraph, the TypeScript and acceptance-gate passage, "hidden
draft", "qualified representative", "sentinel" and run-together numbers. Replaced the "does not borrow floating-focus
movement" sentence: the embodiment choice is unconfirmed (all five embodiments are 7/6) and floating focus is
unverified. Added the OM-4 brochure lens-table data and the MIR sectional drawing and dating, merged the two element
tables into one with shapes, glass and focal lengths, and added the patent's conditions per element.

Engine numbers before and after (identical): EFL 99.99457053751037, FOPEN 2, halfField 12, stop radius
13.0432148998115, BFD 44.9090, TL 115.9990. audit:surface OK; audit:aperture within 3 % of the stated f-number, no rim
limit.

Open:
- Semi-diameters read about 3–4 % under Fig. 1 (L1 about 26.4 mm against 25.5 mm at the 71.09 mm track scale); rims
  unchanged in this pass.
- Floating focus: MIR describes floating rear elements; the OM-4 brochure table does not mark the 100mm F2 with its
  close-distance correction symbol. No close-range state is modelled.
- Embodiment choice: no Olympus source selects Embodiment 5 over Embodiments 1–4.
