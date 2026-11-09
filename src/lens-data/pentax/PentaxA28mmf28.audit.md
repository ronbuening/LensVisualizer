# Pentax-A 28mm f/2.8 source audit

2026-11-09: Whole US 4,468,100 A Example 1 independently compared with original PDF table pixels. All fourteen signed radii, thirteen spacings and seven nd/Vd pairs retained literally. Explicit d-line definition verified in printed column 3. Manufacturer printed page 36 supplies a named seven-single-element section and iris region, not numerical clear apertures or iris location. Preferred whole-example family association remains probable, with Example 2 unexcluded. No F28 duplicate.

Initial mechanical hypothesis: iris at d6 midpoint and estimated paired caps [15, 12, 9.5, 8.5, 7.5, 8.5, 9.5] mm. Geometry and performance validation pending. Source plane z=80.51 mm retained; no optical fitting or geometry override. Static candidate must not be released as completed native validation.

Native update: initial paired caps failed rim slope at S2 and gap intrusion S10/S11; rejected model and logs retained. L1 reduced to14.9 mm and L5 to6.45 mm. Default90% geometry and zero-trim render pass, iris stroke in air, actual aperture f/2.799999997 limited by STO. Source-plane and diagnostic-focus performance recorded separately. Integration remains pending.

Standalone completion: metadata/type/format/lint, 23 focused suites with1609 tests, build and SEO passed. No timing-only failure occurred. Entire repository suite and interactive UI not verified. Exact final source/candidate object roundtrip passed.

## 2026-11-09 — Deployment validation

Independent check against US 4,468,100 A Example 1 (col. 4 table, claim 2 copy): 14 R, 13 d, fB 36.79 and 7 nd/νd
pairs agree. Engine EFL 28.776 (printed 28.78), F/2.8, ω 37.6°; all seven conditional expressions reproduce.
Front page: Asahi Kogaku Kogyo, inventors Itoh and Arai, priority 1981. Attribution strong: the maker's A-lens
booklet section (7 singlets, iris between L3 and L4) fits Example 1's spacings within 0.55 mm, while Example 2
misses by up to 1.7 mm. `audit:aperture` passes.

Deployment change: none.

Open: the maker section draws L5 about 7.9 mm and the iris about 4.3 mm behind S6 (the file uses 6.45 mm and the
d6 midpoint); glass labels (exact catalog rows exist); wording.
