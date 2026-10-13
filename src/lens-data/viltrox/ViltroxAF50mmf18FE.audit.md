# Audit Log — VILTROX AF 50mm f/1.8 FE

Patent: CN 211955966 U, Example 1, Tables 1–3; Figure 1 (PDF p. 18).

## 2026-09-10 — Optical rims, diagram annotations and spectral proxies

| Element / surface | Field | Before | After | Evidence |
| --- | --- | --- | --- | --- |
| L12 / L13 | `glass` | Unmatched | M-TAF31 approximate spectral proxy | Catalog 1.80139 / 45.45 versus patent 1.80 / 46.6, within the existing compatibility window. |
| L42 | `glass` | Unmatched | N-SF5 approximate spectral proxy | Catalog 1.67271 / 32.25 versus patent 1.67 / 33.1, within the existing compatibility window. |

Catalog names identify modeled spectral curves, not production suppliers. The existing catalog already contains these curves, so no duplicate glass entries are added. Patent nd/vd remain authored; no surrogate line indices or partial-dispersion values are introduced. L11, L14 and L41 remain unmatched. Optical-rim SDs, L21/L22 cementing, and the four L23/L31 aspheric surfaces are retained. L31 travels 5.75 mm imageward with D1+D2 conserved.

The diagram uses the source element order and functional groups. This is a fixed-focal-length design; there is no zoom travel schedule. Clear apertures remain modeling inferences.

## 2026-09-25 - MTF census and Tier A spectral-source review

Source: local `patents/CN211955966U.pdf`, Example 1 Tables 1-3 on PDF
pages 7-9; paragraphs 0075-0095. Every R/d/nd/vd entry on S1-S24 matches.
Infinity D1=1.00 / D2=8.61 from Table 2 is selected; no scaling. Every
K/A4-A12 coefficient matches Table 3, retaining the source-supported mapping
of printed rows 13-16 to physical S15-S18 (Table 1 and paragraph 0087).

| Rear path | Before | After |
|---|---|---|
| S22 d | 30.75578947368421 mm air-equivalent fold | 28.44 mm physical air |
| GL | Folded | `rearPlates`: t 2.00 mm, nd 1.52, vd 64.2, air after 1.00 mm |
| Image distance from S22 | 30.755789 mm | 31.44 mm physical |
| Offset | +0.988687 mm | +0.988687 mm |

Independent ABCD gives EFL 49.073753 mm versus source 49 mm, and
31.744476 mm air-equivalent BFL versus source 30.755789 mm. Physical BFL
with GL is 32.428687 mm versus 31.44 mm. No single further source-supported
misprint resolves this contradiction. Retain all published values, disclose
it in the header and analysis, and delete the investigated Section E row.

**Tier A closed as source exhausted, not spectrally upgraded.** L41 (source
S19) is exactly 1.51 / 81.4. Tables 1-3 supply only Nd/Vd and aspheres;
paragraphs 0066 and 0095 identify wavelengths but provide no line indices,
theta-gF, delta-PgF, or glass identity. The low-dispersion wording does not
supply a numeric partial dispersion. Do not manufacture dPgF or infer a
supplier from the rounded coordinates. Leave L41 unresolved and its spectral
MTF limitation intact. Delete the requested Tier A research row; reopen only
with new source evidence. The source plate likewise has nd/vd only.
