# Audit Log - Nikon AI Zoom-Nikkor 50-135mm f/3.5S

Patent: US 4,497,547, Example 1

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked Example 1 against the current data file. No data changes were made in this pass.
- Retained the unresolved code rows:
  - `670576` lanthanum-crown code, no confirmed current public catalog match.
  - `672389` short-flint / S-NBH-class code, no confirmed current public catalog match.
  - `796410` lanthanum-flint / S-LAH52-class code, no confirmed current public catalog match.
  - `J-LAFH3 (HIKARI; 795286)`, no coefficient-backed public catalog match verified in the current resolver.
- Retained the catalog-backed or class-level rows already present for `S-TIH6`, `S-LAL12`, `S-BAH11`, `S-LAL14`, `S-LAH64`, `S-LAL8`, `N-SK11 / BACD11`, `S-NSL3`, `S-BSL7 / N-BK7`, `N-BAF10`, and `S-BAH27`.
- The high-index lanthanum/flint roles remain represented by the glass labels; no new metadata field was required.

### Phase 2 - Geometry and SD review

- Confirmed the data follows the patent's infinity-focus zoom states and published variable gaps.
- The patent gives total `G3-G4` variable gap `D3` and draws the aperture stop between G3 and G4, but it does not tabulate the exact stop split or clear apertures.
- Retained the documented inferred stop split before group 4 and the existing semi-diameters. They keep the stop near f/3.5 across the patent zoom states, fit the 62 mm filter constraint, and remain proportionally plausible against the patent drawing.

### Phase 3 - Spectral / APD review

- The patent gives `nd`/`vd` only. No ED/APD claim, line-index table, partial-dispersion table, or aspherical data was found.
- No APD flags were added.

## 2026-07-30 - Patent 670576 catalog-equivalent recovery

- Rechecked 3L1 against the patent row `nd = 1.67025`, `vd = 57.6`.
- Discontinued OHARA S-LAL52 (`1.669999 / 57.327972`, code `670573`) is the closest coefficient-backed row and
  is inside the runtime d-line safety window.
- Relabeled 3L1 as the S-LAL52 optical equivalent while leaving the production supplier unspecified.
  The `672389` and `796410` rows remain unresolved; no prescription or zoom data changed.

## 2026-08-18 — 672389 and 796410 coefficient assignments

- Visually rechecked `patents/US4497547.pdf`, PDF page 10, Example 1. The two rows remain `1.67163 / 38.9` and `1.79631 / 41.0`.
- OHARA S-BAH32 matches 672389 within `Δnd = -0.001651`, `Δνd = +0.371`; HOYA NBFD2 matches 796410 within `Δnd = +0.000889`, `Δνd = +0.144`.
- Relabeled both rows as catalog equivalents while leaving their production suppliers unspecified. No prescription or zoom geometry changed.

## 2026-10-30 — Direct patent shape and glass reinspection

- Directly inspected `patents/US4497547.pdf`: First Embodiment media/prescription, PDF pp. 10–11; d-line λ = 587.6 nm definition, PDF p. 8; Figure 1, PDF p. 2, rendered at 600 dpi. `pdfimages -list` identifies the figure as a native 300 ppi raster; the render is a 2× upscale. Front-to-rear vertex span gives approximately 9.3 native px/mm. Reviewed every convex/concave face and all three cemented interfaces; excluded group brackets, stop strokes, leaders and the image plane.
- The negative variator 2L1 rear and rear-master 4L7 front have distinct flat end strokes. Source cap/outer ratios are approximately 0.87 and 0.88, from about 153 and 134 native edge-radius pixels; one-native-pixel q bands are ±0.012 and ±0.014, respectively, before ink/endpoint ambiguity. These ratios guide inferred caps, not exact mechanical dimensions. S7 outer 12.5→12.8 mm, cut depth 3.42 mm gives cap 12.013208 mm/q = 0.93853; S26 outer 14.2→14.8 mm, depth 5.55 gives cap 13.163666 mm/q = 0.88944. S7 is intentionally moved outward from the measured ratio: the 3.00 mm depth trial/cap 11.307254 failed against reach 11.8041 + 0.05 mm. No source-depth override was used. Other boundaries retain continuous guarded profiles; near-vertical weak arcs do not establish additional lands.
- All 16 nd/νd pairs match the source. No per-material partial dispersion or C/F/g line-index table is supplied. All 16 currently selected curves remain coordinate-compatible and unchanged. Qualified each as a catalog spectral proxy with production supplier unspecified; coordinate agreement does not prove historical glass or melt identity. Public prose no longer attributes catalog differences solely to rounding or treats catalog matches as production identities.
- Source R/d, media, stop convention, zoom/focus controls, source back focus and tolerances are unchanged. Surface and image-circle audits pass; all three nominal apertures pass. Field audit: two stations ≥99%, one 90–99%, none unsolved/below 90%. Actual SVG outlines were inspected at all nine zoom/focus combinations 0/.5/1: finite paths and zero hidden renderer trim. Dense cut probe: 21×21 states/grid 41/0.5° fields, 6,469,344 rays; S7 reach 11.8047 < 12.013208−0.05, S26 reach 12.9335 < 13.163666−0.05; zero clipped/margin failures.
- Focused shared dispersion/glass consistency tests: 2 files/93 tests passed. Candidate AST scan: 3 data files/197 object literals, zero duplicate keys or parse errors. A dedicated pair/curve comparison verified all 43 source pairs, unchanged curve selections and channels, and source-prescription/control invariants across this triad.
