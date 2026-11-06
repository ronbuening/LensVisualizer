# Voigtländer NOKTON Vintage Line 50mm F1.5 Aspherical II VM — Stage 4 Independent Audit

## Historical audits prior to 2026-11-03

Squashed on 2026-11-03. Source throughout: JP 2022-012964 A (local `patents/JPA 2022012964-000000.pdf`), Example 2:
Table 2 prescription and F10/F14 focus table on PDF p. 20, sag equation p. 18, focus and spacing definitions
¶0067–¶0079 (pp. 17–19), Figure 6 summary quantities and Figure 7 section on p. 27.

### Stage 4 independent audit

- Fresh transcription: 16 planes including one STO, 8 elements in 7 air-separated groups, L5/L6 cemented at
  surface 11, aspheres 15A and 16A on a spherical base (K = 0). F10/F14: ZD9 5.30 and ZD12 0.15 fixed, ZD16 25.00 →
  29.12 mm for the 630.00 mm object-to-first-surface row. Figure 6: AFL 49.60, TLL 40.00, TLi 65.00, IMD 25.00,
  FNO 1.43, FL2 44.84, SR1 14.62, TLS 11.90, FLE −127.32 mm. Cosina's optical section matches 8/7, one cemented pair
  and a double-aspherical last element; the production correlation remains an author inference.
- Corrections (no optical value changed): L5 labelled `Unmatched (nd=1.60286, vd=37.37; code 603374; near F5 class)`;
  LE no longer called glass-moulded (L-TIM28P is a catalog equivalent, process not established); F14 described as the
  patent's whole-lens extension, compatible with but not confirmed as the production mechanism. No R, d, index, Abbe
  number, element focal length, asphere coefficient or focus-table value needed correction.
- Paraxial: EFL 49.598277 mm (49.60), BFD 24.972488 mm against IMD 25.00, printed-row track 40.01 (TLL 40.00),
  first surface to image 65.01 (TLi 65.00), modeled f-number 1.429951; stop radius 10.762470 mm. TLL/EFL 0.8065
  (telephoto), BFD/EFL 0.5035. Rear group +44.845556 mm (44.84), Ja −93.292738 mm, L7 + LE +32.072467 mm; surface
  Petzval sum +0.003276658 mm⁻¹.
- Focus: exact paraxial focus at 630.00 mm needs ZD16 29.087453 mm; the printed 29.12 mm differs by +0.032547 mm.
  Magnification −0.082966; object to image 699.097 mm, consistent with the marketed 0.7 m. All nine conditions pass.
- Geometry: minimum edge 0.592597 mm at L7, maximum rim angle 63.673066° at surface 8, minimum shared-gap clearance
  0.010283 mm at 6→7; asphere departures at 13.5 mm +0.971261 (15A) and +2.117472 mm (16A). Glass: 883408, 729547 and
  847238 kept as class labels; L3, L5, L7 Unmatched; LE L-TIM28P (line-derived νd 30.663576); no `apd` flags.
  Residuals are in `VoigtlanderNokton50mmf15AsphericalVM.glass-audit.csv` (Stage 4 package).

### 2026-08-01 — Repository integration

Figure 7 (PDF p. 27) confirms the diameter progression. Surface 8 13.1 → 12.7 mm and surface 10 13.0 → 12.7 mm remove
0.40 and 0.30 mm of hidden gap trim. OHARA's 2026-07-01 Zemax catalog row for L-TIM28P (nC 1.687955, nd 1.694529,
nF 1.710611, ng 1.724188, νd 30.655992) was added, so LE has coefficient-backed dispersion. The display name became
`VOIGTLÄNDER NOKTON Vintage Line 50mm f/1.5 Aspherical II VM`.

### 2026-08-02 — Second SD audit, screenshot and label audit

No further SD change against Figure 7 and Cosina's section (within the 15 % band). Inventor romanised as Yasuyuki
Sugano. Figure 7's subgroup labels `102A` (L5/L6) and `102B` (L7/LE) added; the header separates modeled, patent and
marketed values and the 46.58° patent field from Cosina's 46.3°.

### 2026-09-25 — MTF image-plane census

Table 2 (PDF p. 20) and ¶0067–¶0079 rechecked: every row, index and asphere term matches. ¶0077 states that sensor
faceplates and filters are converted to equivalent air in the back focus, and no plate values are printed, so ZD16 =
25.00 mm is the complete published air-equivalent rear distance and no `rearPlates` stack can be built. Offset
−0.027512 mm (limit 0.024030 mm). A reference-index axial geometric MTF diagnostic (812 rays, grid 32, 10/20/40 lp/mm)
puts best focus at −0.004458 mm, score 0.962008 → 0.970201. No misprint explains the residual; the prescription was
kept and the Section E row removed.

## 2026-11-03 — Image-plane consistency (kept as best-focus plane)

Under LENS_DATA_SPEC Image-Plane Consistency the image plane is kept as a best-focus plane. The paraxial offset is
−0.027512 mm (11.4 depths at f/1.43), but the real-ray axial best focus lies −0.004458 mm from the plane, well within
10 depths. The printed 630 mm row agrees: its plane sits 0.032547 mm behind that row's paraxial focus, the same sense
and size as at infinity. That fits a fast lens whose spherical aberration moves best focus beyond the paraxial focus.
Sources: JP 2022-012964 A Table 2 and the F10/F14 table (PDF p. 20), ¶0077, and the 2026-09-25 MTF diagnostic above.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| Data-file header | census note only | adds the best-focus line | Spec rule for a kept plane |
| ZD16 | 25.00 / 29.12 | unchanged | Plane within 10 depths of real-ray best focus |

- Residual unchanged (−0.027512 mm at infinity, −0.032547 mm at 630 mm); EFL 49.598277 mm, travel 4.12 mm and
  `closeFocusM` 0.7 m (close label 0.6944 m) unchanged.
- Aperture, image-circle, field-coverage and surface-probe audits are unchanged.

Follow-ups: none.
