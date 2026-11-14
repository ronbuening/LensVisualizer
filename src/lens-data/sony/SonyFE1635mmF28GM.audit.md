# Sony FE 16-35mm F2.8 GM — audit log

## Historical audits prior to 2026-11-03

Source throughout: WO 2018/139160 A1 (PCT/JP2017/046864; priority JP 2017-011423, 2017-01-25; filed 2017-12-27;
published 2018-08-02), Sony Corporation, Kouji Katou and Hiromichi Nose. Numerical Example 4, Fig. 13 (PDF p58, wide,
300 dpi, to scale), Table 13 (p30), Tables 14–16 (p31), Tables 21–22 (p36), asphere equation [0057] (p15),
[0106]–[0113] (pp28–29), claims (p42), aberration Figs. 14–16 (pp59–61); sibling tables 1, 5, 9 and 17 (pp18, 22, 26,
34). The 69-page PDF is a scan with no text layer (SHA-256
`22f1279120b9e3d86541064f6f3b3ae1592ae27c57335f36729c5d1cf88edf41`); every value was read from the page images.

**Stage 1 (stage1-r1, CHAT-1.0 dossier).** 33 surfaces: G1 s1–9, G2 s10–11, G3 s12–15, iris s16 (moves with G3), G4
s17–21, G5 s22–31, cover glass s32–33 with BF 1.00 mm at every state. 16 glass elements / 13 groups plus a 0.150 mm
resin layer on L2 (hybrid asphere, [0113]); aspheres 1, 2, 5, 14, 15, 21, 30. D(1)–D(5) at wide / intermediate / tele,
infinity only; no example publishes close-focus data. d-line indices ([0055]); no line indices or partial dispersions.
Modeling decisions:

- MD-01: s25 nd printed 1.969970 (νd 81.6) → 1.496997, the value Examples 2 (s20, s23) and 5 (s24) print; the printed
  value gives f 7.91 / 9.61 / 12.17 mm and G5 +48.49 mm (claim 1 needs a negative G5), the corrected one 16.519 /
  22.963 / 34.025 mm and G5 −80.399 (Table 22 −80.40); 1.496970 gives −80.387, so 1.496997 is preferred.
- MD-02: the printed y²c² numerator is read as the standard y²c; (1+K) form, so K is entered directly; A4–A12.
- MD-03 / MD-04: CG in `rearPlates` (2.5 mm, 1.516798 / 64.2, 1.00 mm after); s31 d = D(5). L2 authored as glass body
  plus resin layer (tag H1); 17 entries for 16 physical elements.
- MD-05: prescription kept unscaled and unspaced. EFL is +0.235 / +0.230 / +0.221 % over Table 16 (16.5, 16.48 in
  Table 22 / 22.91 / 33.95), image +0.108 / +0.086 / +0.005 mm beyond BF 1.00. A search over every R, d and n of G1 and
  G3 found no single value (best: s4 d 0.150 → 0.445, still ±0.04 %); sibling Example 5 shows −0.014 / +0.084 /
  −0.096 mm and its Table 22 values do not reproduce either, so the residual is source-level. G2 66.534, G4 42.631,
  G5 −80.399 and conditions (1)–(4) 1.561 / 0.377 / 2.813 (2.806 with model EFLs) / 0.530 reproduce Tables 21–22.
- MD-06 / MD-13: iris sized for f/2.88 per station by real trace, 9.165 / 11.410 / 14.965 mm (paraxial 8.90 / 10.89 /
  13.79); Fig. 13's 9.9 mm stop tick matches no station and is not used.
- MD-08 / MD-16: focus NO_INTERNAL_RECONSTRUCTION. The patent focuses G2 and G4 image-ward ([0021]). At 0.28 m, G2
  alone needs 2.58 / 2.67 / 2.77 mm; G4 alone would move object-ward; Sony's 0.19× selects a split only at tele (Δ2 5.30,
  Δ4 3.30 mm), so no focus law is invented and the close vectors repeat infinity; `closeFocusM` 0.28 (Sony).
- MD-09 (withdrawn at Stage 4, see below) and D-03: Wikipedia's barrel-extension statement is not adopted.

Other Stage 1 facts: track 154.52 / 146.01 / 140.08 mm; air-equivalent BFD 20.18 / 27.93 / 38.48 mm (retrofocus,
1.22 / 1.22 / 1.13 × EFL); zoom motion G1 +14.44 mm image-ward, G2 reversing −105.93 → −109.05 → −108.85 mm, G3 with
the stop −14.86, G4 −23.27, G5 −18.41 mm ([0059]); G2 β 6.320 / 2.386 (Table 22: 6.31 / 2.38); Petzval +0.001754 mm⁻¹;
real-ray distortion −5.1 % / +0.52 % / +2.89 %. Glass search over eight bundled vendor sheets (opticalglass 2.0.2):
Unmatched for L4 (1.912366/21.9), L6 (1.834287/39.1), L12 (1.901747/34.6) and the resin (1.534200/41.7); FCD705 class
for L11 (ED), S-FPL51 class for L13 (ED); no supplier inferred, no APO claim. Product correlation (Sony spec pages and
the 2017-05-17 release): 16/13, 0.28 m, 0.19×, 11 blades, five aspherical elements (two XA), two ED, two DDSSM floating
groups; Example 4 is the only 16/13 example.

**Stage 2 (stage2-r1).** Semi-diameters scaled from Fig. 13 (13.126 px/mm least-squares fit, residuals ≤ 2.06 px,
about 0.15 mm); L3 18.3 → 18.0 and L16 13.0 → 12.0 mm for the 0.9 cross-gap rule (5A→6 and 29→30A). Geometry: rim slope
63.49° at 5A (cap 64.16°), 2A sd 19.8 against the 24.20 mm conic limit, minimum edge L13 0.294 mm. Full-aperture corner
vignetting disclosed (outer rim ray up to 6 / 10 / 20 %). Targeted LensVisualizer checks (repo `9e10e39`, Node 22.22.2)
passed. OI-09: the runtime's SD-limited half-fields 43.43° / 44.35° / 42.63° differ from the published 53.95° / 43.14° /
31.71°; disclosed, data unchanged.

**Stage 3 (stage3-r1).** Analysis authored; data unchanged (`b9a32655…`). Seidel and primary-chromatic surface sums
validated against independent measurements (S3-SEIDEL-VALIDATION); aspheric counterfactuals (L1 distortion −5.05 % →
−25.3 % at 49.56°; L7 tele marginal +20 → −3145 µm; L16 −5.05 % → −18.1 %); 89-claim map regenerated verbatim.

**Stage 4 (stage4-r1, source-first).** Fresh re-extraction from 300 / 900 dpi renders (printed s25 1.969970 confirmed);
frozen fingerprint `0c4ecad068a4167c2104197a0c6562f0f2edf6b2d8eaf9260de80efb8b6082de`; data.ts equals the independent
re-entry on every value (S4-INDEP-SOURCE-VS-DATA). C4-01: a stop-centre chief ray exists at all nine published (Y, A)
points (−0.038 to +0.045 mm; wide 53.95° meets 2A at 19.42 mm and reaches 21.63 mm at 54.00°); the earlier "no
stop-centre ray at wide" premise (MD-09) was a Newton-seed fault in the author's tracer and is withdrawn. C4-02:
condition (3) basis stated. Disposition READY_FOR_BATCH. Stage hashes: data `b9a326552b3c5c4fca941aec238c3fd9f808df6020fa4574492a7b400b784367`,
analysis `94e05985a94ee00b018543fcc7aadab92e3df9866351253395791f1c183b1af3`, evidence
`5f0d92eef17214b6e53a32b3c49e2b5e4231e58628f3d3e0e5603dd54d18b5ba`, job card
`a1b78e090e78c1e8bcbd2cbd2f4e982fe1643b2d0817da78893b14152567ec7a`.

**2026-10-20 deployment validation.** All 33 rows, the iris, three cemented interfaces, the resin layer, 7 aspheres
(37 non-zero coefficients), D(1)–D(5) at three stations, CG and BF re-read; only s25 differs. The s25 correction is a
`corrected` `source.errata` entry with sibling-example, source-summary (printed: paraxial BF −12.94 / −19.17 /
−28.22 mm) and claims evidence. Maker diagram (sony.jp `y_SEL1635GM_lenscomposition.jpg`): XA at L1 and L7, aspherical
L2, L10, L16, ED L11 and L13. Subtitle, specs, apdNotes and header wording updated; optics unchanged.

**2026-10-20 second review (Fig. 13, labels, movement).** Fig. 13 rescaled at 13.14 / 13.11 px/mm. s29 sd 13.0 → 12.2
(s29 and s30A bow toward each other; 12.2 is the largest value passing the 0.9 rule); s30A / s31 sd 12.0 → 13.0 (L16
drawn square, level with L14/L15; no 30A turnover to 13.2); doublets renamed C1–C3 because D(1)–D(5) are the patent's
gap names (H1 kept). Meridional clearance at f/2.88: 3 % newly vignetted at s29; the 7 % / 14 % side vignetting at L16
gone; runtime tele half-field estimate 42.63° → 44.92° (OI-09). Labels, types, asphere markers, the stop at s16 and
group brackets confirmed against Table 13, Table 15 and Fig. 13; zoom movement matches Table 14 and the figure arrows;
focus arrows at G2 and G4 point image-ward. Model distortion and astigmatism match Figs. 14–16. L4 / L6 / L12 pairs
occur in no other example and match no vendor row at the d or e line within 0.003; the resin recurs in Example 5.

## 2026-11-03 — Image-plane consistency (kept as best-focus plane)

Source: as above, Tables 13–16 (PDF pp30–31) and Figs. 14–16 (pp59–61). LENS_DATA_SPEC § Image-Plane Consistency: the
real-ray axial best focus lies within 10 depths of the plane at every station.

| Field | Before | After | Justification |
|---|---|---|---|
| Header | MD-05 residual note | plus best-focus-plane line | Paraxial +0.108 / +0.086 / +0.005 mm (11.1 / 8.8 / 0.5 depths at f/2.88); real-ray axial best focus +0.085 / +0.052 / +0.087 mm (8.7 / 5.3 / 8.9 depths) |

- No gap, plate or `closeFocusM` changed. Best focus at wide and intermediate is the MTF axial best focus; at tele it
  is an axial RMS-spot trace (the RMS trace agrees with the MTF value at wide, +0.0845 mm, and intermediate, +0.050 mm).
- The EFL / image-position residual (MD-05) is unchanged and remains a source-level inconsistency; the plane is kept
  because it sits within the spherical-aberration best focus at every station, not because the residual is explained.
- Focus stays unmodeled (no published close states); the 0.28 m label is the slider fallback.

Follow-ups:

- None.
