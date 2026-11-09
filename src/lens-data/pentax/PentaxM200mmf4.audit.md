# Source and native geometry audit

- Complete primary numerical table and associated figure independently viewed.
- Literal radii, spacings and d-line glass pairs preserved; no performance tuning.
- Image plane derived independently and frozen before native rays; not printed BFL.
- Model is infinity-only; full dispersion remains a proxy (closed 2026-11-09: all three pairs now resolve to exact
  catalog rows).

## 2026-11-09 — Deployment validation

Independent check against US 4,139,264 A Example 2 (400 dpi page images; the OCR layer is corrupt): 11 R, 10 d and
6 nd/νd pairs equal the patent ×2. Engine EFL 200.03, F/4, half-field 6.2°; F123 69.05, F1234 55.12 and Petzval −0.062
match the printed 69.0 / 55.1 / −0.06. Front page: Asahi Kogaku Kogyo, inventor Yasuo Takahashi, granted 1979-02-13,
so the design is in-house. Attribution: the LX manual lists the M 200mm f/4 as 6 elements / 5 groups, 12°, 2 m,
matching Fig. 3; Example 1 is also 6/5, and the Example 2 choice follows the PhotonsToPhotos mapping. No maker
section drawing was found. At ×2 the front vertex sits about 2.7 mm ahead of the 111 mm barrel, so the production
focal length may be a little shorter.

Deployment change: `focalLengthMm.design` → 200, the stated design focal length at the file's scale.

Open: name form ("PENTAX SMC M 200mm f/4" in the house pattern); wording. (Closed: name set in the rename commit;
wording in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Fields changed in `PentaxM200mmf4.data.ts`:

- Header comment rewritten in plain terms with every fact kept: patent and example, ×2 scale, printed vs derived
  values, the misprinted Petzval footer, how the stop and rims were set, the Example 1 alternative, and the
  retail-length note.
- `subtitle`: "US 4,139,264 A; probable association, 2x retail-scale hypothesis" → "US 4,139,264 A, Example 2 —
  probable match to the 1977 production lens" (1977 release per Cine Lens Wiki).
- `specs`: ["6 ELEMENTS / 5 GROUPS", "QUALIFIED PATENT RECONSTRUCTION"] → ["6 ELEMENTS / 5 GROUPS", "DESIGN f = 200
  mm", "DESIGN F/4", "ALL SPHERICAL", "PATENT f = 100 SCALED × 2"].
- `catalog.closeFocusM.marketing`: added, 2 m (Pentax LX manual, printed p. 61).
- `focus.closeFocusM`: 2 → 1e15 (static infinity; the patent prints no close state and names no focusing group);
  description rewritten.
- `aperture.blades`: added, 8 (Cine Lens Wiki; the LX manual gives no blade count).
- Glass labels, exact catalog rows at the printed precision: L1, L3, L4 Unmatched → S-BSL7 (OHARA, 1.51633 / 64.14);
  L2, L6 Unmatched → FD140 (HOYA, 1.76182 / 26.61); L5 Unmatched → NBFD5 (HOYA, 1.76200 / 40.26).
- Element `role` added to all six.

`PentaxM200mmf4.analysis.md` rewritten to the analysis spec: product description, in-house attribution and its basis
(PhotonsToPhotos listing; Example 1 is also 6/5), the retail-length note, conditions table, element roles from the
patent text, glass table, Fig. 4 spherical-aberration comparison and a limitations list. Removed process material
(frozen-plane wording, MTF grid and sensitivity-study counts, render-trim and gate notes) and the separate
"Aspherical Surfaces" section (all spherical).

Engine numbers, identical before and after: EFL 200.0297 mm, F/4.000, half-field 6.2°, stop radius 18.158 mm,
paraxial BFD 62.6492 mm, total track 159.2092 mm. Only `focus.closeFocusM` changed (2 → 1e15). Surface audit OK;
the aperture audit reports no rim limit.

Open: no Pentax construction diagram was found, so Fig. 3 cannot be compared with a maker drawing. At ×2 the front
vertex sits about 2.7 mm ahead of the 111 mm retail barrel; a production focal length a few percent below 200 mm
would fit better, but the file keeps the house rule of scaling to the marketed focal length. The stop position (mid
d6) is a modeling choice; the patent draws no iris.
