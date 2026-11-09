# Source and native geometry audit

- Baseline: 9d121be76e14bc5098256ee78cd0a7545a1acf11.
- Complete primary numerical table and associated figure independently viewed.
- Literal radii, spacings and d-line glass pairs preserved; no performance tuning.
- Image plane derived independently and frozen before native rays; not printed BFL.
- Source packets, rejected candidates, geometric rationale, native rays, sensitivity and MTF diagnostics preserved in the private evidence archive.
- Model is infinity-only; full dispersion remains a proxy.
- Whole-tree static checks, 13 focused integration suites (389 tests), production build and SEO pass. Full unrestricted test suite unrun; interactive browser inspection blocked by socket permission.
- No commit, push, PR, merge, publication or deployment.

## 2026-11-09 — Deployment validation

Independent check against US 4,139,264 A Example 2 (400 dpi page images; the OCR layer is corrupt): 11 R, 10 d and
6 nd/νd pairs equal the patent ×2. Engine EFL 200.03, F/4, half-field 6.2°; F123 69.05, F1234 55.12 and Petzval −0.062
match the printed 69.0 / 55.1 / −0.06. Front page: Asahi Kogaku Kogyo, inventor Yasuo Takahashi, granted 1979-02-13,
so the design is in-house. Attribution: the LX manual lists the M 200mm f/4 as 6 elements / 5 groups, 12°, 2 m,
matching Fig. 3; Example 1 is also 6/5, and the Example 2 choice follows the PhotonsToPhotos mapping. No maker
section drawing was found. At ×2 the front vertex sits about 2.7 mm ahead of the 111 mm barrel, so the production
focal length may be a little shorter.

Deployment change: `focalLengthMm.design` → 200, the stated design focal length at the file's scale.

Open: name form ("PENTAX SMC M 200mm f/4" in the house pattern); wording.
