# Audit Log — Nikon NIKKOR Z 40mm f/2

Patent: JP 2021-189351A, Example 4

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/JP2021189351A.pdf`.
- Example 4 rows confirmed surface 2 nd = 1.71736, vd = 29.57 and surface 6 nd = 1.80400, vd = 46.60.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L12 / S2 | `S-TIH23 (OHARA)` | `S-TIH1 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |
| L22 / S6 | `S-LAH64 (OHARA)` | `S-LAH65 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated L12/L22 labels and the chromatic-pair discussion.

## 2026-08-21 — Near/close catalog-candidate review

- Rechecked Example 4's L21 coordinate at `nd = 1.75520`, `vd = 27.57` against the current catalog.
- Rejected the prior `PBM18Y (OHARA)` / `S-TIM27` attribution: current OHARA PBM18Y is
  `1.595509 / 38.767`, so this is not a normalization-only difference.
- Relabeled L21 as an unresolved `755276` dense-flint class and deliberately left it without a Sellmeier curve;
  the patent coordinate is unchanged.

## 2026-09-23 — First-added diagram audit, lens 90

### Source

- Local PDF `patents/JP2021189351A.pdf` (JP 2021-189351 A, 30 pages, publisher text layer). Front page (p. 1) for
  bibliographic data; Table 4 (p. 19) read on the rendered page; Fig. 7 and Fig. 8 (p. 28) rendered at 300 dpi;
  Table 7 (pp. 23–24) and the condition table (p. 26) for example selection.

### Confirmed and retained

- Example choice: Example 4 (f = 41.194, FNO 2.04, ω = 27.72°, Y = 21.63) is the only f/2 example near 40 mm with
  6 elements in 4 components and 2 hybrid aspheres. Example 7 (f = 41.200) is f/2.86 with five elements.
- Every Table 4 row (R, D, nd, νd for surfaces 1–13, stop at surface 4), both aspheres (κ = 1.0000 in
  X = (y²/R)/{1 + √(1 − κy²/R²)} + …, so stored K = κ − 1 = 0; all A4–A12 values and signs) and the D4/D10 table
  match the stored data. Filter surfaces 14–15 are excluded; last gap 10.5 + 1.6/1.5168 + 0.5596 = 12.114 mm
  (patent Bf(air) 12.113).
- Calculated EFL 41.200 mm (patent 41.194), BFD 12.1146 against a stored 12.114 (defocus −0.0006 mm), TL(air)
  59.264. Stored element focal lengths agree with thick-lens values to 0.1 mm. Element types match R signs.
- Assignee Nikon Corporation, 2021 publication; `patentAuthors: ["Keigo Koida"]` is correct (古井田 啓吾).
- Focus mechanism: G2 moves toward the object; G1, stop and G3 fixed (text ¶0092, Fig. 7 arrow). Two published
  states, so no `focusPositions` needed.
- STO sd 8.8 mm equals the inner end of the Fig. 7 stop tick (8.83 mm); the engine iris at f/2.04 is 8.97 mm.
- L21 stays labelled as the unresolved 755276 class. SF4-type flints are within 0.06 νd, but none matches exactly.
  L31 stays E-CF6 (Δνd 0.05, closest catalog glass).

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| `closeFocusM` | 0.29 (production MFD) | 1.28 | Table 4 labels the near state β = −1/10, but a paraxial solve of D4 = 10.0415 / D10 = 14.9989 focuses the object 1223.4 mm from S1, 1283 mm object-to-image, β = −0.0333. Fig. 8(B) quotes H0 = −656.68 mm for Y = 21.63, β = −0.033. The published gaps are kept and labelled by their calculated distance; 0.29 m (≈ 5.8 mm G2 travel, calculated) is not published and not extrapolated. |
| `nominalFno`, `fstopSeries[0]` | 2, 2 | 2.04, 2.04 | Table 4 FNO = 2.04. `maxFstop` stays at the default 16 (production f/16). |
| `varLabels` surface 10 | "BF" | "D10" | Patent gap name. |
| sd 1 / 2 / 3 | 14.0 / 14.0 / 13.5 | 11.0 / 11.0 / 10.9 | Fig. 7 silhouette, scale 12.34 px/mm from the 582 px S1–S13 span (47.150 mm). The old values were about 27 % above the drawing. The axial beam needs 10.10 at S1. |
| sd 5 | 7.2 | 8.4 | Was CLIPS-AXIAL (7.33 needed). Fig. 7 shows the concave face ending at 8.4 mm inside a flat annulus out to 11.0 mm. |
| sd 6 / 7 / 8A | 7.8 / 9.8 / 10.0 | 11.0 / 11.0 / 11.3 | Fig. 7 cemented component rim 11.0 mm; resin layer reaches 11.3 mm. No asphere turnover at 11.3 mm. |
| sd 9 / 10 | 10.2 / 12.8 | 13.5 / 13.5 | S9 was BLOCKS-CHIEF (10.51 needed). Fig. 7 shows L23's flat front face and rim at 13.5 mm. |
| sd 11A / 12 / 13 | 15.5 / 15.5 / 16.0 | 16.4 / 16.4 / 17.6 | S13 was BLOCKS-CHIEF (16.18 needed). Fig. 7 shows the resin and front curve ending at 16.4 mm, a flat flange, and the rear face at 17.6 mm. No 11A sag turnover at 16.4 mm. |
| Glass L11/L23 | S-LAH55 (OHARA) | S-LAH55V (OHARA) | Exact 1.83481 / 42.73 catalog match. |
| Glass L12 | S-TIH1 (OHARA) | J-SF1 (HIKARI) | Exact 1.71736 / 29.57 match from Nikon's usual supplier. |
| Glass L22 | S-LAH65 (OHARA) | J-LASF015 (HIKARI) | Exact 1.80400 / 46.60 match. |
| Subtitle, header, `focusDescription`, roles | "FURUIDA"; SD note based on an L11 edge-thickness limit; 1.2 mm travel with no distance | "KOIDA"; figure-based SD note; close-focus and cover-glass notes; near state 1.28 m | As above. |
| Analysis | Inventor "Furuida Keigo"; close focus as a notational convention; 14 mm edge-limited front rim and a 23.5 mm envelope; OHARA labels; wrong S-NSL3 comparison; departures at old rims; "clears" 16 mm flange | Corrected throughout; patent group focal lengths; aspheric departures at the new rims (8A +686 µm at 11.3 mm, 11A +877 µm at 16.4 mm); flange statement corrected | As above. |

### Checks on the result

- Surface validator: no validation errors. Image-circle floor: 0 undersized.
- Real-ray trace at f/2.04, Y = 21.63 (ω = 27.69°), at infinity and at the near state: no axial clipping and no
  chief-ray blocking. Full-field vignetting at full aperture is 7–16 % per side at G1 and 47–72 % per side in G2.
- Engine: FOPEN 2.04, stop radius 8.97 mm, paraxial half-field estimate 29.4°, closeFocusM 1.28.
- Glass check: L11/L12/L22/L23 exact; L31 Δνd −0.05; L21 compatible with SF4 (Δνd 0.01); resin has no catalog
  entry, as expected.
- Live headless render (local): the silhouette matches Fig. 7, with a slimmer G1, a stepped L21 front and the L31
  flange. The focus scale runs from ∞ to 1.28 m. The focus-movement overlay shows G2 moving 1.21 mm toward the
  object, with G1 and G3 fixed.

### Open limitations

- The patent's "β = −1/10" label conflicts with its own gaps and Fig. 8(B). The stored near state follows the gaps.
  The production 0.29 m / 0.17× state is not modelled.
- Computed group focal lengths are 0.2–0.4 % longer than Table 4's group data, although the system EFL agrees to
  0.015 %. The rows were re-read, and the cause is unknown.
- L21's glass identity is still unresolved (755276 class, no Sellmeier). The resin (1.56093 / 36.64) has no
  catalog entry.
- The semi-diameters are measured from the drawing; the patent publishes no effective diameters.
