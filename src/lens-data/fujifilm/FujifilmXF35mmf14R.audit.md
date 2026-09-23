# Audit Log - FUJIFILM FUJINON XF35mmF1.4 R

Patent: US 2014/0285903 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20140285903A1.pdf`. The patent publishes Example 1 prescription, asphere data, and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a broad front group, a taper toward the stop, and a modest rear cemented group rather than a large image-side collector.
- Stored SDs match that profile: front GF begins at 15.5-16.8 mm, stop-adjacent surfaces narrow to about 8.3-9.0 mm, and rear GR remains about 6.5-10.4 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/1.4 stop geometry, marginal/chief-ray envelope, edge thickness, and cross-gap sag checks.

## 2026-08-11 - D-K59 catalog recovery

- Rendered local `patents/US20140285903A1.pdf` page 14 and visually confirmed Example 1 surfaces 10-11 at
  `nd = 1.51760`, `vd = 63.5` for the double-aspheric L21 element.
- CDGM D-K59 is the exact coefficient-backed 518635 catalog coordinate and is a better dispersion model than the prior
  BSC7-family inference.
- Relabeled L21 as a D-K59 catalog equivalent. Fujifilm's production supplier remains unspecified; no asphere,
  prescription, or semi-diameter values changed.

## 2026-09-23 — First-added diagram audit, lens 86

Source: local `patents/US20140285903A1.pdf` (300 dpi CCITT scan with a text layer; numbers read from rendered
pages). Front page (bibliography, Example 1 section = Fig. 1), p. 14 (Table 1, Table 1-continued, Table 2),
p. 16 (Table 7).

### Retained after re-reading the source

- Front page: US 2014/0285903 A1, inventor Takashi Suzuki, applicant/assignee FUJIFILM Corporation, published
  2014-09-25. The printed title really does read "Imaging Zoom Lens…", although all three examples are primes.
- Example 1 is the stored example: 8 elements / 6 groups, one double-aspheric element (L21), which matches the
  production XF35mmF1.4 R (8/6, one aspherical element, unit focus). Table 7: f 36.17, BF 21.98, 2ω 43°, Fno 1.45,
  Y 14.2.
- All 15 rows of R, d, nd and νd match Table 1, with the stop at S9 (D8 2.73, D9 3.20). All 36 Table 2
  coefficients (A3–A20, odd orders included, on both surfaces) match exactly. Table 2 has K = 0 in
  `Zd = C·h²/{1 + (1 − K·C²·h²)^½} + ΣAm·h^m`, which converts to the stored standard conic K = −1.
- Paraxial EFL 36.170 mm and BFD 21.978 mm, against the patent's 36.17 and 21.98. Stored element focal lengths
  equal the thick-lens values (L11 58.06, L12 47.12, L13 −24.70, L14 −135.90, L21 −59.02, L22 12.65, L23 −16.19,
  L24 27.21; triplet 19.43 mm).
- Back focus: Table 1 lists D15 = 17.00 mm of air before the 2.80 mm plate (1.51680/64.2). Table 7's BF 21.98 is the
  air-equivalent value (17.00 + 2.80/1.5168 + 3.13 mm of implied plate-to-image air). The stored last gap of 21.98 mm
  is correct: defocus is +0.002 mm.
- Element types and `fl` signs agree with the R signs. Glass labels: all eight resolve OK-compatible. L21 stays
  D-K59, the only exact 1.51760/63.5 catalog glass. The patent lists no θgF and no anomalous-dispersion claims,
  so every element keeps `apd: false`.
- Rims kept, compared with Fig. 1 (0.0484 mm/px at 300 dpi from the S1–S15 vertex span, 839 px / 40.57 mm; the
  drawn incoming axial ray at 12.6 mm matches the 12.47 mm F/1.45 pupil). L11 figure 17.4 mm against stored
  16.8/15.5. L12 figure 13.2 mm against 14.7/11.3; S4 is capped at about 12 mm by contact with S5 across the 0.20 mm
  gap. L13 flange figure 12.1 mm against 11.3; its rear optical zone reads about 8.3 mm against 9.0. L14 figure
  9.1 mm against 9.0/8.8. S10A figure 8.6 mm against 8.4: the polynomial slope is 60° at 8.4 mm and diverges
  beyond Fig. 1's rim, and the figure's front-corner sag of 1.8 mm matches the polynomial. S12 figure 9.5 mm against
  9.5. S13 figure 9.5 mm against 9.8.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| 11A `sd` | 6.5 | 8.4 | `CLIPS-AXIAL`: the F/1.45 exact marginal ray is 7.99 mm here. Fig. 1 draws L21's rear rim at 8.6 mm, almost touching L22. At 8.4 mm the sag is +0.398 mm (0.05 mm to plano S12), the departure is −383.5 µm, and there is no turnover (turnover is at about 8.9 mm). Now matches the front surface (8.4). |
| 14, 15 `sd` | 9.9 / 10.4 | 12.4 / 12.4 | Fig. 1 triplet shoulder: 258 px top and 257 px bottom = 12.4–12.5 mm (25 % and 19 % above the stored values). The S15 corner sag in the figure (4.1 mm) matches R −20.516 at 12.4 mm. L24 edge thickness is 1.4 mm. |
| STO `sd` | 8.3 (paraxial f/1.34) | 7.6 | The F/1.45 iris radius is 7.553 mm. Fig. 1 draws the stop opening at 158/154 px, which is 7.6/7.4 mm. |
| `nominalFno`, `fstopSeries[0]` | 1.4 | 1.45 | Table 7 Fno 1.45. Marketing f/1.4 stays in `apertureMarketing`. |
| `maxFstop` | default | 16 (explicit) | Production minimum aperture f/16. |
| close-focus `var` for surface 15 | 27.35 | 28.02 | The old 5.37 mm extension was f²/(280 − f) and focused at 306.6 mm from the image plane (m −0.149). A paraxial trace needs 6.04 mm to focus 280.2 mm from the image plane, the production 0.28 m MFD, at m −0.167; production quotes 0.17×. Labelled as calculated in the header, the `var` comment and `focusDescription`. The patent publishes infinity only. |
| L12 `glass` | S-LAH65VS (OHARA) (νd 46.53) | S-LAH65V (OHARA) (νd 46.58) | Closer to the patent's 46.6; the analysis already quoted 46.58. |
| Header notes | SD method was a paraxial 60 %-field recipe; "optical path folded into BFD" | Figure-based SD note; D15/plate/BF arithmetic; calculated-focus note | Documentation. |

The analysis was synced: L12 glass (§3, §6), stop radius (§3), L21 rim departures (§3, §8), focus table and
magnification (§4), and full rewrites of §5 (semi-diameter method) and §9 (back-focus arithmetic; the old text
said a plate does not change the paraxial BFD).

### Checks on the result

- EFL 36.170 mm and BFD 21.978 mm, unchanged. The engine now opens at f/1.45 with a stop radius of 7.553 mm; the
  authored STO value gives paraxial f/1.465.
- Close keyframe: object 211.6 mm from S1, 280.2 mm to the image plane, m −0.167.
- Exact trace at Y = 14.2 mm finds ω = 21.46° (patent 2ω = 43°). No rim clips the F/1.45 axial beam or blocks the
  full-field chief ray. The full-aperture corner bundle is clipped because its rim rays reach L21 outside the
  drawn 8.6 mm rim. This inherent vignetting is not a rim error. Surface validator clean, image-circle floor clean,
  and the file is Prettier-formatted.
- The engine's paraxial half-field estimate is 27.1° (previously 24.5°), against the true 21.5°. It is a
  vignetting-limited estimate, and the analysis field stays bounded by the APS-C format.
- Live (headless): the production baseline shows L21's rear rim pinched to 6.5 mm and a small L24. The local
  infinity and 0.28 m renders show L21 as a full biconcave element next to the plano L22 face and a 12.4 mm triplet
  shoulder close to Fig. 1. L23's front-to-rear rim step (9.8 to 12.4 mm) is drawn as a slope where the figure
  draws a flat shoulder. The panel reads f/1.45–f/16 and BF 21.98 → 28.02 mm. Off-axis rays were not checked
  (they need a click).

### Open limitations

- No published clear apertures; all rims remain estimates (figure plus ray constraints).
- Close focus is a calculated unit-focus extension; the patent has no finite-distance data.
- The renderer cannot draw L23's stepped outer shoulder exactly.
