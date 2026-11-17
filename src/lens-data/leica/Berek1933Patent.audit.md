# Leitz / Max Berek US 1,899,934 A Figure 1 — audit log

## Source

US 1,899,934 A, "Ultralight Intensive Objective", Max Berek, assignor to Ernst Leitz, Optische Werke, G. m. b. H.,
Wetzlar. Filed July 20, 1932 (Serial No. 623,554; German priority June 6, 1931), granted March 7, 1933. Two numerical
examples: Figure 1 (1:2.0, six elements, modelled here) and Figure 2 (1:1.3, seven elements, a separate file). The
scan carries a handwritten library note, "Br. Pat. 381,135", which may be a British counterpart; it has not been
checked.

## Transcription

The table is printed with explicit + and − signs. All 10 radii, 6 centre thicknesses, 3 air spaces, 6 nD values and
6 ν values match the table on PDF p. 2. The cemented interfaces are r6 (L3/L4) and r9 (L5/L6). The element shapes
implied by the signs (L1 positive meniscus, L2 biconvex, L3 positive meniscus concave to the object, L4 biconcave,
L5 negative meniscus, L6 biconvex) agree with Figure 1. No value is scaled or corrected.

## First-order results

The patent prints no focal length or back focus. The prescription traces to an effective focal length of 99.998 mm,
so the table is normalised to f = 100. f-number 2.00 (entrance pupil radius 25.0 mm, iris radius 17.97 mm),
paraxial back focus 69.65 mm, r1 to r10 61.64 mm, total length 131.29 mm. The claim's four conditions hold at
f = 100: index step 0.0856 at r6 (at least 0.05), step / r6 × f = 0.28 (over 0.1), a2 / a3 = 0.76 (at least 2/3),
air spaces / length = 0.23 (at most 1/3).

## Inferred values

- Iris: not printed and not drawn. Placed in the 7.56 mm air space a3, 6.5 mm behind r7 and 1.06 mm ahead of r8.
- Clear semi-diameters: not printed. 26 mm (r1, r2), 25 mm (r3, r4), 23 mm (r5–r7), 21.5 mm (r8–r10).
- Back focus: the computed paraxial infinity value.
- Focus: infinity only; the patent has no close-focus data.

## Validator results (as delivered)

The surface audit passed, and the aperture audit found no rim limiting the f/2 axial beam. The image-circle and
field-coverage audits skip the file (no image format; hidden). On axis at f/2 every rim clears the beam; the tightest
margin is 1.0 mm at r1. At 10° half-field the front rims trim 15–22 % of the beam on one side. With the inferred iris,
no chief ray passes the stop centre beyond about 23.6° half-field, below the engine's default display field of 27.27°.
The patent states no field angle.

## 2026-11-16 — Deployment validation

Checked independently against the patent page images rendered at 300 and 600 dpi: the front page (inventor,
assignee, dates), Figure 1 (element count, cemented pairs, the sign of every radius, no drawn stop) and the full
Figure 1 table (every r, d, a, nD and ν). The data file matches the table exactly. Verdict: valid as a patent
reference. The patent names no product, and no Leitz lens with this layout was found: the Summar 5 cm f/2 is a
six-element, four-group double-Gauss, and the Hektor 7.3 cm f/1.9 is six elements in three cemented groups.

Changes:

- `maker`: "Leitz" → "Leica" (house maker for Leitz-era lenses; file moved to `leica/`).
- `source.assignees`: "Ernst Leitz Optische Werke GmbH" → "Ernst Leitz GmbH" (corpus form of the printed assignee).
- `source.patentNumber`: "US 1,899,934" → "US 1,899,934 A" (house form).
- L3 and L4 `cemented`: none → "D1"; L5 and L6 `cemented`: none → "D2"; `doublets`: empty → D1 (r5–r7) and D2
  (r8–r10). The patent prints both pairs as cemented.
- `catalog.focalLengthMm.design`: 99.99753316176383 → 100 (rounded to two decimals).
- Surface 7 `rimCutDepthMm`: none → 6.5. The concave r7 face reached 7.41 mm behind its vertex at its 23 mm rim, so
  its glass crossed the modelled iris plane (6.5 mm behind r7) beyond 21.68 mm radius. The cut sits on that plane
  (cut radius 21.68 mm); no traced beam reaches it, so no light is lost. `sd` is unchanged.
- Added a plain JSDoc header; rewrote the analysis to the house section layout; replaced this audit log, which was a
  copy of the package notes.

After the changes: effective focal length 99.998 mm, f/2.00, back focus 69.65 mm, half-field (engine) 27.27°. Surface
audit OK, including the rim-cut beam check; aperture audit: no rim limit. The image-circle and field-coverage audits
still skip the file (hidden, no image format).

Open:

- Wording for the cleanup pass: subtitle "FIGURE 1 — HIDDEN QUALIFIED REFERENCE", specs "PATENT ONLY; NO RETAIL
  MATCH" and "ESTIMATED STOP AND RIMS", the `focus.description` wording, and the `leitz-` prefix of the key now that
  the maker is Leica. `closeFocusM` is written as 1000000000000000.0.
- Glass labels: L3 matches the SF8 class and L4/L5 the F5 class; L1/L2 (1.6185 / 60.5) and L6 (1.6580 / 51.4) have
  no catalogue match.
- SD pass: Figure 1, scaled by its own axial length, draws semi-diameters of about 27 mm (front pair), 24.6 mm
  (negative member, with chamfered corners on the r7 side) and 20 mm (rear member), against 26 / 23 / 21.5 mm modelled.
- Field: the engine's default 27.27° display field is beyond the 23.6° chief-ray limit set by the inferred iris; the
  patent states no field to set instead.
- The British counterpart (GB 381,135 per the handwritten note) is unverified.
