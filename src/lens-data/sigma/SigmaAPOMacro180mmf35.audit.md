# Build audit

Status: source-qualified infinity representative. Native and reference-MTF qualifications are recorded below; integration outcomes belong to the accompanying package validation manifest. Closed 2026-11-10: superseded by the deployment validation and cleanup sections below.

- Pinned baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 commits. Isolated repository; no commits, pushes, publication or delivered-package edits.
- Exact patent numbers and first-radius fingerprints absent in baseline lens source search. Broader completed-package absence remains bounded search evidence.
- Literal whole source retained; no hidden retuning, invented glass, plate, finite motion or factory identity.
- H0 static rim failures preserved; current inferred rims pass bounded geometry without override.
- Source-row mapping and deterministic generator retained separately.
- Required layout and infinity-sentinel focus fields present. (Closed 2026-11-10: the infinity placeholder is now the house 1e15 m.)
- Native geometry, zero trim, iris clearance, official aperture census, sampled rays and spectral-support assessment completed. Reference MTF completed with retained source/format distinctions and bounded convergence limitations; integration outcomes are recorded separately.
- Non-optical initial identity-schema failure preserved; corrected lowercase key and spaced patent number. No source optical values changed.

- Primary-pixel aperture confirmation: physical PDF page 4/printed page 3, E1 row F explicitly gives infinity 3.6069 (D(0)=∞); paragraph 0019 defines F as F-number. Finite F4.7197/5.8594 also literal. Runtime/design 3.6069 versus retail marketing 3.5 is a faithful distinction, not a model defect or derived substitution.

- Reference MTF findings are recorded in the companion analysis and optical-quality evidence. Max grid 128, no source-plane shift, no finite runtime states, no source retuning. (Closed 2026-11-10: the MTF paragraphs were removed from the analysis in the cleanup pass.)

## Deployment validation (2026-11-10)

Independent check against a 300 dpi render of PDF p. 4: 25 rows plus 4 variable gaps × 3 states, D(0), BF and F; no
mismatches. EFL 178.6538, F 3.6069, BF 54.1414 and the printed conditional values reproduce exactly. Example 1 is the only
13/10 example; Sigma's published 13/10 construction with two SLD elements (the patent's two 1.497/81.6 elements) and 1:1 at
46 cm make the association strong. The staged 2010 Sigma catalogue does not list this lens and is not evidence.

Applied: patent number to house form `JP 2001-033704 A`; `catalog.lensMounts` (Canon EF, Nikon F, Pentax K, Sony A, Sigma
SA); `catalog.closeFocusM.marketing` 0.46.

Open: the patent prints β −0.505 and −1.002 states (D9, D14, D15, D20) that the model omits; with the image plane fixed the
1:1 row focuses at 460.8 mm object-to-image (matches 0.46 m); L13 (sd 13.5) cuts 39–43 % of the corner bundle, but a wider
L13 needs a land on S23/S24; every glass pair matches a HOYA row exactly yet is labelled `Unmatched`; public wording and
package-process prose need a cleanup pass. (Glass labels and wording closed 2026-11-10 in the cleanup pass below.)

## 2026-11-10 — Cleanup and wording pass

Data file. The header comment was rewritten in plain terms and keeps every fact: example and pages, unscaled rows, the
STO/FS21 rows, the inferred rims and FS21 radius, the omitted finite states and their printed inconsistencies. It also
records the patent's L1–L4 group naming against the element names L1–L13. Other changes:

- `subtitle` → `JP 2001-033704 A, Example 1 — construction-based production correlation`.
- `specs` → 13 ELEMENTS / 10 GROUPS, DESIGN f = 178.65 mm, DESIGN F/3.61, ALL SPHERICAL.
- `catalog.focalLengthMm.design` 178.65381528674706 → 178.6538, the patent's printed f, following the Sigma folder
  convention (for example 174.86, the printed f, on the APO MACRO 180mm f/5.6 UC).
- `focus.closeFocusM` 1e9 → 1e15 (placeholder); `focus.description` is now plain text naming the moving groups (G2
  toward the image, about 31.2 mm; G3 toward the object, about 16.0 mm; G1 and G4 fixed) and the unmodelled printed
  states.
- `aperture.fStops` extended to 22 and 32, with `maxFNumber` 32 and `blades` 9, from the Sigma February 2008 catalogue
  specification table (p. 14).
- `groups` G1–G4 (S1–S9, S10–S14, S16–S20, S22–S25) and `doublets` C1–C3 (S5–S7, S12–S14, S18–S20) were added.
- Cemented ids D1–D3 → C1–C3. Element labels → "Element N", with short roles. Every `indexReferenceNote` was dropped:
  ¶0019 prints ND/Vd, and every pair matches a d-line catalog row.
- `apd: "inferred"` with an `apdNote` on L2 and L4 (1.49700/81.6). The Sigma catalogue drawing (p. 11) marks the second
  and fourth elements as SLD.

Glass relabels, from `Unmatched (literal source n/v; catalog identity unproved)`; Δ is catalog minus patent:

- L1, L5: FC5 (HOYA), Δnd 0, Δνd +0.05.
- L2, L4: FCD1, Δnd 0, Δνd +0.01.
- L3: NBFD10, Δnd 0, Δνd +0.04.
- L6, L7: TAF1, Δnd 0, Δνd +0.03.
- L8: FDS90, Δnd 0, Δνd −0.02.
- L9, L10: BACD14, Δnd 0, Δνd 0.00.
- L11: E-FD10, Δnd 0, Δνd +0.02. FD10 has no catalog row.
- L12, L13: BSC7, Δnd 0, Δνd 0.00.

HOYA was chosen over tied Ohara rows for consistency with the neighbouring Sigma 180mm f/5.6 file. Every label resolves
in the repo catalog, and no `nC`/`nF`/`ng` were present.

Analysis. The process sections and vocabulary were removed: the "Model Qualification and Verification" section,
reference-MTF census and grid paragraphs, pinned-baseline precedents naming other files, sentinel wording, and the
repeated boilerplate in each element section. The claim that the PDF lacks a bibliographic header is corrected: the PAJ
front page carries it. The 2008 Sigma catalogue citation was re-checked (p. 11, 10 groups / 13 elements, 46 cm, SLD
drawing; p. 14, 13.7°, nine blades, F32) and kept. The staged 2010 catalogue does not list the lens and is not cited. New
content: the 2000 EX IF HSM predecessor sharing the 13/10 construction, a printed focus table, a Conditional Expressions
section, and "Model Scope and Limitations" replacing the verification heading. The added sources are DPReview and
Reviewed.com (the 18 May 2005 release), Imaging Resource and CameraReviews.com.

Engine numbers, identical before and after: EFL 178.65381528674706, FOPEN 3.6069, halfField 8.598094998146246, stop
semi-diameter 14.669118370750633, BFD 54.1414. Only `closeFocusM` (1e9 → 1e15) and the maximum f-stop (16 → 32) changed.
The surface audit prints OK, and the aperture audit reports no rim limit.

Open:

- The patent prints −0.5050× and −1.0021× spacings (D9, D14, D15, D20) that the model does not carry. With the image
  plane held at the printed BF they focus objects 391.9 and 240.1 mm from S1 (460.8 mm object to image at 1:1), and they
  passed the surface audit in a scratch build.
- L13 (sd 13.5) clips 39–43 % of one side of the full-aperture corner bundle at S24/S25, against the 16.6–16.9 mm it
  needs. Fig. 1 and Sigma's drawing show L12 and L13 at similar heights, but S23 and S24 meet near a 15.1 mm radius
  across the 2.54 mm gap, so a wider L13 needs a land on S23 or S24.
