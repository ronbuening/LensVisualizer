# NikonZoomNikkor2845mmf45 — patent and local-diagram audit

Reviewed 2026-09-13 UTC against `US3771853.pdf, p. 4, Fig. 3; Example I` and the local site.

## Geometry, labels, and travel

Manually isolated the rear rims at 600 dpi, using the 74.1498 mm glass span over 1693 pixels (43.80 micrometers/pixel). Surfaces 6–8: 11.6 mm; 9–10: 8.6 mm; 11–12: 6.3 mm; 13: 5.1 mm; 14–16: 7.1 mm. Top/bottom rim averaging excludes page skew, leaders, stop blades, and bevels. These are diagram estimates, not manufacturing clear apertures. The local wide and tele diagrams retain the four ordered groups and cemented pairs.

Across 101 zoom positions, G1 moves 10.5948 mm imageward; G2/G3/G4 move 12.5492/12.1993/10.1680 mm objectward, monotonically relative to the fixed image plane. This agrees with the patent mechanism. Computed endpoint labels are 28.85–44.18 mm; the patent’s rounded range remains separate. No finite-focus state is published.

## Glass and metadata

Coefficient-backed coverage: **8/10**. 841433 and 446672 remain unresolved. TAFD5 differs in index by 0.0061; silica differs by about 0.0122. Both exceed the existing 0.003 tolerance. The literal patent coordinates are retained. Existing compatible curves remain supplier-neutral proxies. No new element-specific APD, spectral-line values, or supplier identity is inferred from nd/vd; the site’s high-index/standard colors remain appropriate to the authored coordinates. The ED marketing name is not an APD flag.

The assignee is the canonical **Nippon Kogaku K.K.**, already connected to the Nikon corporate family. Historical/legal entities remain distinct from spelling aliases; no further consolidation is needed for this lens.


## 2026-09-14 — Patent outlines, glass, and metadata

Source: `US3771853.pdf, p. 4, Fig. 5; Embodiment III`.

This revision replaces the previous Embodiment-I model with Embodiment III. The historical section above describes the superseded model and is preserved as such. Fig. 5, not Fig. 3 or Fig. 4, is the matching outline. Manual 600 dpi rim readings exclude the heavy leaders and group brackets that contaminate the automatic rear ENV/RIM estimates (about 44 micrometers/pixel).

| Surfaces | Previous draft SD (mm) | Revised SD (mm) | Reason |
|---|---|---|---|
| 14 / 15 / 16 | 8.0 / 8.0 / 8.0 | 6.2 / 6.2 / 6.2 | Smaller rear cemented pair in Fig. 5 |
| 17 / 18 | 9.1 / 10.2 | 8.0 / 8.0 | Approximately common optical rim of final meniscus |

Retained the remaining apertures and the Certificate-of-Correction r14 = +889.074 mm. L1/L2/L8/L11 now name J-PKH1/N-LASF44/NBFD3/J-LASFH2 as coordinate-compatible spectral proxies. These are not historical supplier identities. Coverage is 8/11; L3 (1.44628/67.2) and L5/L10 (1.84110/43.3) remain explicitly unmatched because no sourced compatible curve was established. No catalog tolerance was relaxed. Finite focus remains not modeled.

The second local-site review confirms wide-to-tele order: relative to the fixed image plane, G1 moves 10.34819 mm imageward, G2/G3 move 14.20581 mm objectward together, and G4 moves 11.13251 mm objectward. No reversal occurs between the five authored zoom states. Finite focus remains unmodeled. The revised rear rims follow Fig. 5. L3 (1.44628/67.2) and L5/L10 (1.8411/43.3) still lack compatible coefficient-backed catalog entries; historical name suggestions without primary dispersion data do not justify backfilling curves. The source-era Nippon Kogaku K.K. assignee remains separate from Nikon Corporation.

## 2026-10-07 — Zoom iris and station f-numbers against the patent

Source: `US3771853.pdf`, Embodiment III (table in col. 8, PDF p. 11; back focus and figure assignment in col. 9, PDF p. 12; aberration plots on sheet 6, PDF p. 7).

The patent gives a single aperture ratio for the whole focal range and plots that same ratio as full aperture at three zoom positions. It prints no stop diameter and does not say the stop is fixed. A single iris radius gives f/4.5 only at the wide end and about f/5.1 at tele, which the patent does not show, so the fixed-iris declaration is withdrawn and every station takes the patent's F/4.5.

| Field | Before | After | Source |
|---|---|---|---|
| `zoomApertureModel` | `"fixed-iris"` | removed; the default per-station iris applies | No stop diameter or fixed-stop statement anywhere in the text. F/4.5 at both ends of the range (col. 8 lines 44–47, PDF p. 11) needs 4.718 mm of stop radius at wide and 5.369 mm at tele, so one radius contradicts the patent. |
| `nominalFno` | `[4.5, 4.6863957198004, 4.85165978554429, 4.99579219723201, 5.11890624441235]` | `4.5` | Col. 8 lines 44–47, PDF p. 11: one aperture ratio F/4.5 for f = 28.85–44.19 mm. Figs. 12(a)–(c), PDF p. 7: F/4.5 is the full-aperture ordinate of each spherical-aberration plot; col. 9 lines 2–8, PDF p. 12, assigns (a), (b), (c) to the minimum, medium and maximum focal points. |
| `apertureDesign` | absent | `4.5` | Col. 8 lines 44–47, PDF p. 11. |
| Wide-open iris radius per station (traced from `nominalFno`, not a patent value) | 4.7182 mm at all five stations | 4.7182 / 4.9195 / 5.0957 / 5.2459 / 5.3690 mm | Real marginal ray of the stated f-number traced to the stop at each station. |
| Traced on-axis f-number per station | 4.50 / 4.68 / 4.85 / 4.98 / 5.10 | 4.50 at all five stations | Follows from the two rows above; the iris is the limiter at every station and no rim clips the axial beam. |

Confirmed unchanged:

- Example identity: the Embodiment III table (col. 8, PDF p. 11) matches the file's 18 radii and 17 spacings, including r1 +52.201, r5 +29.871 with d5 30.3905–5.8365, r10 +60.333 with d10 4.8, r13 +19.373 with d13 1.0864–4.1597, and r18 −24.222. r14 keeps the Certificate of Correction value +889.074 (PDF p. 15).
- Focal lengths: the patent's f = 28.85–44.19 mm against computed 28.8477 mm and 44.1878 mm. The three interior stations are code-solved; the patent prints neither a focal length nor an f-number for them.
- Variable gaps d5 and d13 at the two published endpoints, and the self-consistent last gap at each station.
- Stop position: `STO` stays at the midpoint of the 4.8 mm d10 gap (2.4 mm + 2.4 mm). No semi-diameter changed, including the authored `STO` value 4.62743549 mm, which is the paraxial f/4.5 radius at the wide end.
- `fstopSeries` already starts at 4.5, and the `specs` aperture line already reads F/4.5.

Left open:

- The stop diameter is unpublished. The per-station radii are a calibration to the patent's F/4.5, not a recovered iris law.
- The patent's medium focal point is not labelled with a focal length (its plots carry a 31.5° half-field, Fig. 13(b)). The three interior stations take F/4.5 from the whole-range statement and from Fig. 12(b), not from a printed per-station value.
- For Embodiment III the stop appears only in the drawings (Fig. 5, PDF p. 4, and the generic Fig. 2, PDF p. 3). The sentence that places a stop between the second and third groups belongs to Embodiment II (col. 7, PDF p. 11). The header's stop-location wording and the midpoint station are left as they were.
- Off-axis beam at the rear cemented pair: the 6.2 mm rims of surfaces 14–16 clip the outer edge of the 0.6-field bundle at every station but the first. For a meridional fan that fills the iris (sampled evenly in stop height) with its chief ray at 12.98 mm image height (0.6 of the 21.63 mm half-diagonal), the share clearing all rims is 100 / 94.9 / 89.4 / 84.5 / 80.3 % from wide to tele; with the single 4.718 mm radius it was 100 / 96.8 / 92.5 / 88.4 / 84.5 %. Full-frame chief rays clear every rim at all five stations. The note's earlier sentence that every sampled pupil ray at 0.6 of the half-field survives at all keyframes held for the 8.0 mm draft rims of surfaces 14–16 with the authored 4.627 mm stop radius, not for the present rims; with the f/4.5 iris it fails at tele even on those draft rims, so the note states the clipping instead. The rims are Fig. 5 estimates and were not changed; whether the production lens loses this much of the 0.6-field beam is not established.
- The Stage 2 edge-thickness, rim-slope and gap-intrusion figures in the same paragraph of the note were not re-derived. Its 0.3201 mm minimum edge thickness is L10 at the 8.0 mm draft rim; at the present 6.2 mm rim L10's edge is 1.164 mm.
- The printed back focus 37.768–48.895 mm against the file's 37.7232 mm and 48.8557 mm remains the documented rounded-source residual.
