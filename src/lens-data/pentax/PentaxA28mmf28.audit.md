# Pentax-A 28mm f/2.8 source audit

2026-11-09: Whole US 4,468,100 A Example 1 independently compared with original PDF table pixels. All fourteen signed radii, thirteen spacings and seven nd/Vd pairs retained literally. Explicit d-line definition verified in printed column 3. Manufacturer printed page 36 supplies a named seven-single-element section and iris region, not numerical clear apertures or iris location. Preferred whole-example family association remains probable, with Example 2 unexcluded. No F28 duplicate.

Initial mechanical hypothesis: iris at d6 midpoint and estimated paired caps [15, 12, 9.5, 8.5, 7.5, 8.5, 9.5] mm. Geometry and performance check pending (closed: see the native update below). Source plane z=80.51 mm retained; no optical fitting or geometry override.

Native update: initial paired caps failed rim slope at S2 and gap intrusion S10/S11. L1 reduced to 14.9 mm and L5 to 6.45 mm. Default 90 % geometry and zero-trim render pass, iris stroke in air, actual aperture f/2.8 limited by STO. Integration pending (closed: integrated 2026-11-09).

## 2026-11-09 — Deployment validation

Independent check against US 4,468,100 A Example 1 (col. 4 table, claim 2 copy): 14 R, 13 d, fB 36.79 and 7 nd/νd
pairs agree. Engine EFL 28.776 (printed 28.78), F/2.8, ω 37.6°; all seven conditional expressions reproduce.
Front page: Asahi Kogaku Kogyo, inventors Itoh and Arai, priority 1981. Attribution strong: the maker's A-lens
booklet section (7 singlets, iris between L3 and L4) fits Example 1's spacings within 0.55 mm, while Example 2
misses by up to 1.7 mm. `audit:aperture` passes.

Deployment change: none.

Open: the maker section draws L5 about 7.9 mm and the iris about 4.3 mm behind S6 (the file uses 6.45 mm and the
d6 midpoint); glass labels (exact catalog rows exist); wording. (Glass labels and wording closed in the cleanup pass
below; the L5 rim and iris position stay open.)

## 2026-11-09 — Cleanup and wording pass

Data file: header comment rewritten in plain technical English with the same facts, plus the maker-section comparison
and the S9/S10 and iris findings. Subtitle now names Example 1 and calls the match strong. Specs changed to the house
lines (elements/groups, design f = 28.78 mm, design F/2.8, all spherical). `catalog.closeFocusM.marketing` 0.3 added
from Pentax's A-lens booklet table (printed p. 33). The focus block is static at infinity (`closeFocusM` 1e15) with a
plain description replacing the 0.3 m entry, which never moved the optics because the patent prints no close state.
Seven glass labels changed from "Unmatched" to exact OHARA equivalents, each within the printed precision and checked
to resolve to its row: L1 S-BAL35, L2 S-BSL7, L3 S-LAM51, L4 S-BSM25, L5 S-TIH14, L6 and L7 S-LAL13. Roles added to
all seven elements. R, d, nd, νd, sd, stop position and patent fields unchanged; no `apd` (no special-dispersion
glass); `blades` not set (the five-blade figure is third-party, not in the maker table).

Analysis: process material removed (verification-status section with test counts, MTF grid notes, heap sizes and
best-focus diagnostics). Corrected the statement that the maker section gives no iris position: it draws the iris
about 4.3 mm behind S6. Added the identification list with the maker-section spacing comparison, why Example 2 fits
worse, the reported formula sharing with the second Pentax-M 28mm f/2.8 (CineLensWiki), the retail specification,
the conditional-expression table, catalog-equivalent glass table, clear-aperture readings from both drawings, and
model limits.

Engine numbers before and after: EFL 28.7758 mm, FOPEN 2.800, half-field 37.6°, stop radius 7.2439 mm, BFD 36.7948 mm,
TL 80.51 mm; only `focus.closeFocusM` changed (0.3 to 1e15). Wide-open transmission at the 37.6° edge is 49.5 %.

Open: S9/S10 rims (6.45 mm) are smaller than the maker section (about 7.9 mm) and Fig. 1 (about 7.0 mm, flat rear
land against L6); at a real-ray f/2.8 entrance pupil the S10 rim sits 0.13 mm inside the axial marginal ray, while at
the engine's paraxial stop it clears by about 0.2 mm. Widening L5 needs a flat land on S10 to respect the 1.19 mm gap
to L6. The maker section draws the iris about 4.3 mm behind S6, close to L4; the model keeps the d6 midpoint
(2.31 mm). Neither was changed in this pass.
