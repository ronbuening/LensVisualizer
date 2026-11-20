# Audit Log - Mamiya AF APO 300mm f/4.5 IF

## 2026-09-25 - MTF census: rounded source prescription does not reproduce fb

Source: local `patents/JPA 1998206729-000000.pdf`, Table 1, PDF page 4,
Example 1 infinity column, paragraph 0023 definitions (fb is back focus).

Every native R/d entry was checked against the scaled data using
s = 300/99.84 = 3.004807692307692. Finite radii and single gaps agree within
0.0000005 mm after six-decimal storage; the split S12 + STO gap agrees
within 0.0000007 mm. Infinity d8 = 8.438 and d12 = 20.507 are correctly
selected, not the close column 13.238 / 15.707. All eight nd/vd pairs match:
1.488/70.2, 1.497/81.6, 1.613/44.3, 1.497/81.6, 1.540/59.5,
1.762/26.5, 1.488/70.2, 1.713/53.9. All surfaces are spherical; no
asphere coefficients or rear plate rows exist. The inferred flat stop has
no paraxial power and preserves the complete d12 interval.

Independent reduced-angle propagation gives native EFL 99.270917 and BFL
31.798654, versus published f = 99.84 and fb = 32.14. At authored scale,
EFL = 298.290014 mm and BFL = 95.548840 mm versus image distance
96.574519 mm. Offset before/after: -1.025679 -> -1.025679 mm.

No transcription error explains the discrepancy. The source rounds nd to
three decimals; the existing analysis's compatible-catalog sensitivity is
consistent with lost precision, but cannot establish the original glass
indices. Keep the rounded source data and published fb, without substituting
catalog indices or tuning the image plane. Document this source limitation
in the header and analysis; Section E row deleted, census flag expected.

Paragraph 0020 gives a broad g/d partial-dispersion range for L2/L4, not
individual g/F deviations or line indices. Existing catalog-derived spectral
fields remain qualified and unchanged. The source's separate close-distance
conflict remains documented. No user-visible data fix or changelog entry.

## 2026-11-03 — Image-plane consistency (re-solve)

Policy: LENS_DATA_SPEC § Image-Plane Consistency (back focus first). The printed fb left the image plane 1.025679 mm
beyond paraxial infinity focus, 40.7 depths of focus at f/4.63. Real-ray axial best focus was −1.051 mm, so it is not
a best-focus plane.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| Surface 16 `d` (back focus) | 96.574519 | 95.548840 | Paraxial focus at infinity; printed fb 32.14 × s |
| `focus.closeFocusM` | 3.0 | 3.027 | Close row (printed d8/d12) with the carried back focus focuses at 3.0268 m object to image |
| `catalog.closeFocusM.marketing` | (none) | 3.0 | Mamiya 3.00 m production MFD |
| `source.errata` | (none) | 1 `unresolved` | Table 1 close heading "700" contradicts its own d8/d12 |

- Residual: −1.025679 mm → 0.000000 mm at infinity. The close row carries the change and is not moved further,
  because its printed distance contradicts its spacings (spec: "keeps the carried change only").
- Travel unchanged: G2 14.423077 mm imageward; d8 25.354567 / 39.777644 and d12→STO 40.668931 / 26.245854 as before.
  The track is 277.926 mm (278.951 before). EFL is unchanged at 298.290 mm because a back-focus change has no power.
- Close focus: the close-row label 2.951 m → 3.027 m, |m| 0.1173 → 0.1134. The label no longer misses the marketing 3.0 m
  by 1.6 %; it now sits 0.9 % beyond it.
- Rim clearance: the variable gaps are unchanged (D8 min 24.257 / 38.680 mm, D12→STO min 38.434 / 24.011 mm over
  the shared band).
- Evidence for the cause (source rounding, class B):
  - Table 1 (PDF p. 4) prints nd to three decimals. A copy with catalog-class indices (S-FSL5 1.48749, S-NBM51
    1.6134, S-BAL12 1.53996 and S-TIH14 1.76182; the rest as printed) gives EFL 300.046 mm and an infinity offset of
    +0.0096 mm (0.4 depths). Analysis § Verification Summary makes the same finding.
  - No single printed value isolates the residual, so this is a re-solve, not a `corrected` erratum.
- The "700" heading (¶0024: about 7f, subject to image) is 2.103 m at scale. Reaching it from the printed spacings
  would need 7.706 mm more G2 travel. The catalog-index copy puts the printed close spacings at 3.035 m (about 1000
  native). This is recorded as an `unresolved` erratum, not a re-solve target.

Follow-ups: none for the image plane. The "700" heading remains an open source conflict.
