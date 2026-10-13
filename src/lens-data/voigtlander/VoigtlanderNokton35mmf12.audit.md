# Audit Log - Voigtlander Nokton 35mm f/1.2 Aspherical

Patent: JP 2004-101880A

## 2026-06-23 - Full Voigtländer local-patent sweep

- Local patent source: `patents/JP2004101880A.pdf` (untracked local file).
- Rendered and visually rechecked Example 2, Table 3. The stored prescription and aspheric coefficients match the patent table.
- Patent high-index condition for the cemented-doublet positive elements is satisfied by the nd=1.80420 elements; no high-index metadata changes were needed.
- Updated L3b from `S-TIF1 (OHARA)` to `E-FD2 (HOYA, patent nd/vd match) / S-TIM22 class` for the nd=1.64769, vd=33.8 row. Also synced the analysis-only L7 label to the current `S-TIL1` match.
- The patent does not list dPgF/APD rows or semidiameters. Existing APD false values and derived SDs remain appropriate.

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/JP2004101880A.pdf`; local text confirms the queued nd/vd rows.
- Updated surface 3 to `S-TIL26 (OHARA)`, surface 12 to `S-TIH6 (OHARA)`, and surface 17 to `S-TIL1 (OHARA)`.
- One unrelated no-catalog row remains outside this relabel batch.

## 2026-09-23 — First-added diagram audit, lens 95

Source: local `patents/JP2004101880A.pdf` (7 pages). Front page p. 1 (applicant 株式会社コシナ, inventor 蓬田 祥寿, filed 2002-09-10, published 2004-04-02); text pp. 2–6; Table 3 and Table 4 rendered from p. 5 at 300 dpi; Example 1 Table 1 from p. 3 for the comparison section; Fig. 3 (Example 2 section) and Fig. 4 (aberrations) from p. 7, measured at the native 300 ppi.

### Re-verified and retained

- Example 2 is the stored embodiment. Every Table 3 row (R, d, nd, νd, stop at surface 9) matches the data file, and all 12 Table 4 coefficients for surfaces 10, 15 and 16 match in sign and exponent. The printed sag formula uses (1+K), the standard conic form, and every K is 0, so there is no conic-convention ambiguity.
- Scale: native. Computed EFL 35.808 mm against the patent's f = 35.8; paraxial BFD 23.510 mm equals the stored gap (defocus 0.000). The real-ray chief ray reaches 21.6 mm image height at ω = 31.74°, against the patent's 31.8°. There is no rescale.
- Thick-lens element focal lengths reproduce every stored `fl` (for example L3a +24.17, L4 −1183.3, L6 +28.82, L7 −38.91 mm). All element `type` strings agree with the R signs, and L4 is the patent's メニスカス負レンズ 24.
- `nominalFno` 1.24 matches the patent's Fno. The stored stop SD of 12.9 mm gives f/1.239 paraxially, so it stays as the record of the patent iris. The engine's real-ray iris of 13.24 mm is derived from `nominalFno`.
- Patent metadata (`JP 2004-101880 A`, Cosina Co., Ltd., 2004) is unchanged. The inventor stays `Yoshihisa Yomogida`, the romanization of 蓬田 祥寿 already used across the repo's Cosina lenses. `lensMounts: ["leica-m"]` and `imageFormat: "135-full-frame"` are canonical ids.
- Production identification: Examples 1 and 2 both have 10 elements in 7 groups and 3 aspherical surfaces on the second negative lens and the biconvex positive lens. The production count therefore cannot distinguish them, and Example 2 as the Version I/II formula remains an inference. The analysis now says so.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| sd 4 / 5 (L2b) | 16.0 / 16.0 | 19.5 / 19.5 | The f/1.24 axial marginal ray needs 16.61 / 17.18 mm (CLIPS-AXIAL). Fig. 3 doublet 22 rim is 204–205 px, or 19.5 mm at 10.495 px/mm. |
| sd 6 / 7 (L3a/L3b) | 16.0 / 15.0 | 20.0 / 20.0 | The axial marginal ray needs 18.03 / 16.98 mm (CLIPS-AXIAL). The Fig. 3 doublet 23 rim is 210 px, or 20.0 mm, and the junction line runs out to that rim. The L3a edge is 0.64 mm at 20 mm. |
| sd 8 (L3b rear) | 14.0 | 15.0 | The Fig. 3 concave optical zone ends at about 157 px, or 15.0 mm, and a flat annulus continues out to the rim. The axial marginal ray needs 13.84 mm, so the old value left only 1 % margin. |
| sd 13 / 14 (L5b) | 13.5 / 14.5 | 15.8 / 15.8 | Surface 13 clipped the axial marginal ray (needs 13.69 mm). The Fig. 3 doublet 25 rim is 168–169 px, or 16.0 mm. The value is capped at 15.8 mm for a 0.71 mm L5b edge; at 16.0 mm the edge would be 0.49 mm. |
| Glass L2b, L3a, L5b | `S-LAH65 (OHARA)` | `TAF3 (HOYA)` | The catalog S-LAH65 is 1.80400/46.57, which does not match the patent's 1.80420/46.5. TAF3 is exactly 1.80420/46.50. |
| Glass L4, L6 | `S-LAH63 (OHARA)` | `NBFD13 (HOYA)` | The catalog S-LAH63 is 1.80440/39.59, which does not match the patent's 1.80610/40.7. NBFD13 is 1.80610/40.73. |
| Glass L1 | `S-FSL5 (OHARA)` | `FC5 (HOYA)` | S-FSL5's νd of 70.24 rounds to 70.2, while FC5's 1.48749/70.44 reproduces the printed 70.4. |
| Glass L5a | `S-TIH6 (OHARA)` | `FD60 (HOYA)` | S-TIH6's νd of 25.43 rounds to 25.4, while FD60's 1.80518/25.46 reproduces the printed 25.5. |
| Glass L3b | `E-FD2 (HOYA, patent nd/vd match) / S-TIM22 class` | `E-FD2 (HOYA)` | Label simplified; the glass is unchanged. |
| Close-focus gap (surface 18) | 25.44 (thin-lens f²/(s−f) estimate) | 25.62, labelled calculated | A paraxial Newton solve for a 0.7 m object-to-image distance gives a 2.11 mm extension, m ≈ −0.059. The old gap focused at 0.756 m object-to-image. |
| `fstopSeries` | starts at 1.2, ends at 22 | 1.24 … 16 | The series now starts at the reachable patent Fno and ends at the default `maxFstop` of 16. |
| Subtitle / header | "Hoda", no scale or focus note | "Yomogida"; the header documents native scale, the calculated focus and the SD basis | Front page. |
| L6 role | Claimed molded aspheres cited in the Version I discontinuation | Claim removed | Unsupported by the patent. |

The analysis was synced. The inventor romanization was corrected. Glass names were fixed: L2a had been called S-BAM4 and L5a S-TIH14, neither matching the patent pairs. The glass table was rebuilt as catalog equivalents, and the molding and glass-procurement speculation was removed. The stop text now gives both the paraxial and the real-ray iris. The focus section now cites the calculated 2.11 mm extension. Field-curvature and distortion statements were aligned with Fig. 4: S and T stay within about −0.3 mm, and barrel distortion reaches about −2.5 %. The Example 1/2 comparison no longer claims the patent favours Example 2 for production.

### Checks on the result

- The surface validator reports no errors, and the image-circle floor check passes.
- Exact trace at f/1.24 with Y = 21.6 mm shows no CLIPS-AXIAL or BLOCKS-CHIEF at infinity or at the 0.7 m close state, where ω is 30.5°. The unvignetted full-field bundle search finds no ray at 31.7°, and at 20° the vignetting is 2–28 % per side. Heavy corner vignetting is expected for an f/1.2 rangefinder lens.
- Probe at the close state: the 25.62 mm gap focuses at 699 mm object-to-image, with magnification −0.0589.
- The glass check resolves all ten labels OK-compatible, with |Δnd| ≤ 5e-6 and |Δνd| ≤ 0.04.
- The engine build derives f/1.24, a 13.24 mm stop, and closeFocusM 0.7.
- Live view on local headless renders: the infinity state shows the larger doublet 22/23 rims, which now resemble Fig. 3. At the 0.7 m state (BF 25.62), the focus movement overlay shows both groups translating 2.11 mm together. Production was shot as the baseline. Off-axis rays were not checked.

### Open limitations

- The SDs of L1 (23.0 against about 21.1 mm in the figure), L2a front (16.0 against about 17.4 mm, where surfaces 2 and 3 meet), L4 (13.0/12.9 against about 14.3 mm) and L6/L7 (15–15.5 against about 15.6 mm) are within about 10 % of Fig. 3 and were retained.
- The production identity of Example 2 (as opposed to Example 1) is inferred. The Version II prescription is undocumented.
- Glass trade names are catalog equivalents; the patent names none.
