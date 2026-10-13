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
