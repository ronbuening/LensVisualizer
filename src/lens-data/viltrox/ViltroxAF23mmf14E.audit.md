# Viltrox AF 23mm F1.4 E — Literal-Source Diagnostic Dossier

## Historical audits prior to 2026-11-03

Source throughout: CN 211826700 U (filed 2020-05-07), Example 1: Tables 1–2 on PDF pp. 7–8, Table 9 on p. 15,
Fig. 1 on p. 16, Figs. 2–4 (infinity) on p. 17 and Figs. 5–7 (0.3 m) on p. 20; ¶0025–0028 and ¶0060–0076. The
same-filing invention application CN 111474691 A and grant CN 111474691 B repeat the Table 1–2 values.

**2026-10-02 diagnostic dossier (Stages 1–3 and independent audit).**

- Scope: on 2026-10-02 the user accepted a DIAGNOSTIC_ONLY model from the literal tables ("Lets move forward with
  2"); the normal gate stayed null. Hashes (SHA-256): Stage 1 archive
  `38e578ca63b436cd5838f6ba905be501c2d64e71fc56750b370691dc394c7898`; Stage 3 archive
  `8ab19a8b5adc9296428a70ff0a448c6fcbf9fd6a353a99f6ba83d62f46d3c992`; data
  `88f6abfafdec3defd8902b42c2060bbf0baf2975501e730fabd687474c0ce02c`; independent Pass A fingerprint
  `3e89609da3c2431018772105d77120254a6c9798717ec67dc6df9acda4d06fa4`. References were pinned at
  `3d44a1be91db853725ac841b65a9e228f2c544ef` and rechecked against `66b394809241620190908def6caf9a81d3f3a6f5`
  (no optical difference); runtime checkout `8d169a816c403e4e2ff20678299df2ed77957efb`.
- Extraction: all-spherical, d-line, unscaled; 11 elements / 10 groups, one cemented interface (S13), four
  functional groups. Source STP renamed STO. The GL plate (2.00 mm, nd 1.52, νd 64.20) is traced in `rearPlates`
  behind a 14.29 mm gap with 1.00 mm after it. The source does not state the reference plane of its 0.3 m distance.
- Literal results with the printed L12 1.85: EFL 23.377873 mm, air-equivalent BFD 15.733217 mm, first vertex to
  image 85.780000 mm, infinity focus 0.872572 mm before the image. The closest row focused an object
  160.954974 mm from the first vertex (246.944974 mm to the image), EFL 22.905770 mm (printed 23.44 / 22.95).
- Register: F01, D1 + D2 grows 5.43 → 5.64 mm against a 0.02 mm rounding bound, with G1, G2 and G4 stated fixed;
  N01, EFL and closest-row conjugate not reproduced; condition (1) F1/F 1.879 below claim 1's 1.9 (Table 9 prints
  1.93); condition (4) labels Vd3 while its inequality uses Nd3.
- Geometry: semi-diameters and the iris are inferred (runtime f/1.4 iris 8.735156 mm). A 161-point pupil grid
  passed 161 / 98 / 47 rays at 0° / ±19.02° / ±31.7° with no internal clipping; zero hidden render trim.
- Glass: every lens glass stays `Unmatched` at the two-decimal coordinates. HOYA TAFD34 (introduced 2023) was
  excluded as a 2020 identity; a SUMITA primary row was not retrieved.

**2026-10-20 deployment pass.** All 24 Table 1 rows and both Table 2 states were re-read at 200 dpi (pp. 7–8); the
file matched. Source erratum corrected: L12 nd 1.85 → 1.83, with three kinds of evidence. Sibling example: Example 3
Table 5 prints 1.83/42.72, the 1.83481 class (HOYA TAFD5G, OHARA S-LAH55V). Claims: F1/F 1.879 → 1.968, within
1.9–2.2. Aberration figure: infinity focus 0.873 → 0.125 mm in front of the plane, against Fig. 2's ±0.2 mm scale.
EFL 23.378 → 23.350 mm (printed 23.44). Measured from the image plane, the 0.3 m state imaged 0.72 → 0.00 mm from
the plane, β −0.1015, EFL 22.907 mm (printed 22.95). Catalog indices for the identified glasses give 23.416 mm and
0.044 mm. Unresolved: D1 + D2 5.43 / 5.64 mm (Examples 2 and 3 conserve the sum to 0.01 mm), queued in Section G of
`agent_docs/sd-audit-queue.md`. Viltrox lists 11/10, 2 ED and 2 high-index elements, internal focus, 0.3 m and
0.1×. Table 2 focus restored; key `viltrox-af-23mm-f14`.

**2026-10-20 second review (diagram, labels, movement).** Fig. 1 is drawn to scale (18.42 px/mm at 300 dpi). SDs
changed: S9 11.2 → 10.4, S13 and S14 11.5 → 10.7 (the cemented pair had been 10% above the figure); the others,
within 9% of the figure, were kept. The 0.3 m ray floors came from an axial object 227.0 mm ahead of S1. Doublet
bracket renamed "C1". L14 and L15 `apd` set to "patent" (¶0028, 超低色散材料). Distortion matches Fig. 4 (−1.55%
against about −1.5%) and spherical aberration matches Fig. 2; the tangential field does not (−0.74 mm at 31.6°
against about ±0.03 mm). Glass recurrence: 1.85/23.78 and 1.93/20.88 in all four examples; the L14 glass prints as
1.51/81.60 in Examples 2–4; L31 keeps nd 1.75 while νd floats.

**2026-10-20 tangential field-curve check.** Fig. 3 (p. 17) and Fig. 6 (p. 20) were digitised. 1,646 single-value
variants were traced (sign flips, digit swaps and changes, ×/÷10, row swaps). The best were d4 0.10 → 0.70 (36 µm
rms), d7 2.31 → 2.71, R20 −27.00 → −27.60, R21 −25.97 → −25.37, R2 22.41 → 22.11 (23 µm) and d6 3.54 → 3.84. None
has a second kind of evidence, the ranking moves with the unprinted index decimals, and index shifts of 0.01 or less
alone reach 16 µm rms. Examples 2 and 4 miss their printed EFLs (23.59 and 23.88 against 23.45) and focus 1.8 and
1.6 mm behind their image planes. A second `unresolved` erratum was added; the printed table was kept.

**2026-10-29 Z-mount rim and glass reinspection.** Fig. 1 at 600 dpi: the S2 rim cut at depth 5.03 mm (radius
14.1472 mm) passes the full-beam rule where 4.77 mm failed; S10 and S12 draw lands to 10.4 and 10.7 mm over clear
caps of 10.1 and 8.9 mm. All eleven nd/νd rows and GL were rechecked; the L12 correction was retained and L14's
fluorophosphate wording removed. Surface, image-circle and aperture audits passed with zero render trim.

## 2026-11-03 — Image-plane consistency (re-solve)

Source: CN 211826700 U Example 1, Tables 1–2 (PDF pp. 7–8). With L12 at the corrected 1.83, the printed spacings
left paraxial infinity focus 0.125145 mm in front of the image plane (54 depths at f/1.4), while the printed 0.3 m
row focused at 0.3002 m object to image. Back focus first, per LENS_DATA_SPEC Image-Plane Consistency: the S22 air
gap is re-solved for infinity, the change is carried to the 0.3 m row, and G3 is moved so that row again focuses at
0.3 m object to image.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| S22 `d` | 14.29 | 14.164855 | Back focus re-solved for paraxial infinity focus; GL and its 1.00 mm air unchanged |
| D1 (gap after S16), 0.3 m | 3.76 | 3.922333 | G3 moved for paraxial focus at 0.3 m object to image |
| D2 (gap after S18), 0.3 m | 1.88 | 1.717667 | Same G3 move; the row's printed D1 + D2 = 5.64 mm is kept |
| `focus.closeFocusM` | 0.3 | 0.3 | The re-solved row reads 0.3000 m object to image |
| `source.errata[1]` note | "The printed spacings are kept." | "The printed sums are kept; the 0.3 m row's G3 position is re-solved for paraxial focus." | The entry covers the D1 + D2 conflict, so it stays |

- Residual at infinity: −0.125145 → 0.000000 mm. G3 travel (D1) 2.76 → 2.922333 mm. EFL 23.350256 mm unchanged
  at infinity; 0.3 m EFL 22.907 → 22.872191 mm (printed 22.95). Infinity track 85.78 → 85.655145 mm.
- Cause: the two-decimal indices. Index rounding alone spreads infinity focus by about ±0.3 mm (σ), and catalog
  indices leave 0.044 mm (2026-10-20 above). No transcription difference exists.
- Reference: the 0.3 m is object to image. The printed row focused there (0.3002 m), while a first-vertex reading
  would need a 0.64 mm back-focus change. With the residual removed, the printed travel would focus at 0.313 m, which
  suggests the 0.21 mm D1 + D2 conflict sits in the infinity row; it is not isolated.
- Clearance: D2 rim minimum 3.560 / 0.848 mm at infinity / 0.3 m (was 1.007 mm at 0.3 m); D1 1.000 / 3.922 mm.
  Aperture, image-circle, field-coverage and surface-probe audits are unchanged.

Follow-ups: the D1 + D2 conservation row in Section G of `agent_docs/sd-audit-queue.md` stays open; the tangential
field-curve erratum is unaffected.
