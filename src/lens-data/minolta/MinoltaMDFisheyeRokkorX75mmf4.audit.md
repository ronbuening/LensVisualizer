# Audit Log - MINOLTA MD Fisheye Rokkor-X 7.5mm f/4

Patent: US 4,009,943, Example 2 / Table 2 / Figure 3

## 2026-10-22 — Deployment validation and fix-up pass

### Source and production comparison

- Re-read the local patent image facsimile, PDF page 8 (Table 2, printed columns 7–8), and Figure 3 on PDF page 3.
  All 20 radii, 19 axial thicknesses and 12 refractive-index/Abbe pairs match at the uniform ×7.5 scale.
  The two 2.082375 mm stop-adjacent gaps rejoin to source d11 = 0.5553 × 7.5 = 4.16475 mm.
  All powered surfaces are spherical; the filter faces are plane, with no aspheric coefficients.
  No transcription mismatches were found. The table's rounded back-focus summary is distinguished below.
- Compared Figure 3 with the March 1981 Minolta brochure, C4, and its optical-section detail. The ordered layout
  matches: two front singlets, a cemented doublet, positive singlet, built-in plane filter and three rear doublets.
  Example 2 is the only candidate with this cementing arrangement. The brochure explicitly states 12 elements in
  8 groups, equidistant projection, 180° coverage, approximately 23 mm circular image and focus fixed at 4 feet.
  This supports a probable correlation to the pictured MD Rokkor-X version, without proving factory radii,
  MC-to-MD continuity or later plain-MD identity.
- The filter is patent group L5 but model element 6; model element L5 is the preceding powered singlet.
  The US filter index 1.5186 is retained; the alternate German-source 1.5185 is not substituted.
- Clear rims and the midpoint stop location remain Figure 3 estimates. Low-confidence readings around r4 and
  r5–r7 do not justify rim changes. Every rim, the 83° rim-slope allowance and the default 0.90 gap-sag limit remain
  unchanged. Catalog glass names remain qualified equivalents, with no claim of factory melt identity.

### First-order comparison and focus

| Quantity | Patent at ×7.5 | Before → after |
| --- | --- | --- |
| Gaussian EFL | 1 × 7.5 = 7.5 mm | 7.500015785161377 → 7.500015785161377 mm |
| Gaussian BFD | Rounded s′ = 4.82 × 7.5 = 36.15 mm | 36.13549900068518 → 36.13549900068518 mm |
| Infinity image gap | Calculated from the table | 36.13549900068518 → 36.13549900068518 mm |
| Total infinity track | Derived | 110.09449900068518 → 110.09449900068518 mm |
| Built wide-open f-number | f/4 | 4 → 4 |
| Stop semi-diameter | Derived from f/4 | 3.7361115844709687 → 3.7361115844709687 mm |
| Paraxial stop-limited f-number | f/4 nominal | 3.947 → 3.947 |

The 0.014501 mm BFD difference from the scaled summary lies within the patent's printed rounding. The real-ray
aperture and the paraxial stop probe use different calculations; their unchanged values do not indicate a new
aperture discrepancy. The internal optical track remains 73.959 mm.

The former virtual unit-focus range ended at a back-focus gap of 36.185550648936086 mm for a 1.2192 m object-to-film
distance. Its 0.050051648250906 mm extension explains the approximate 0.05 mm production-setting difference.
The production lens has no focusing ring. Only the patent's infinity state is now modeled; the 4-foot setting is
explained in prose, without a simulated focus range or a source-published finite conjugate.

### Fields changed

- `name`: `MINOLTA MD Fisheye Rokkor-X 7.5mm f/4` → unchanged; `visible`: absent → absent (defaults to true).
- `subtitle`: `US 4,009,943 A — Example 2; March1981 pictured-version correlation` →
  `US 4,009,943, Example 2 — probable March 1981 production correlation`.
- `catalog.specs`: `11 POWERED ELEMENTS + FILTER`; `EQUI DISTANT CIRCULAR FISHEYE`; `EXAMPLE 2` →
  `12 ELEMENTS / 8 GROUPS`; `DESIGN f = 7.50 mm`; `DESIGN F/4.00`; `ALL SPHERICAL`;
  `EQUIDISTANT PROJECTION / 180 DEG CIRCULAR`.
- `source.patentNumber`: `US 4,009,943 A` → `US 4,009,943`, matching neighboring US grants from the period.
- Element 6 `label`: `Source L5 built-in filter` → `Built-in filter (patent L5; element 6)`.
- `focus.closeFocusM`: 1.2192 → 1000000 m, the fixed-focus schema placeholder used by the Kinoptik precedent.
- `focus.keyframes`: nine virtual-focus coordinates from 0 to 1 → omitted; no variable focus spacing remains.
- `focus.description`: virtual unit-focus reconstruction to 4 feet → fixed production focus near 4 feet, no focusing
  ring, infinity-only patent model and approximately 0.05 mm unmodeled back-focus difference.
- `gaps["20"]`: nine BF values from 36.13549900068518 to 36.185550648936086 mm → removed;
  final surface `d`: absent → 36.13549900068518 mm, preserving the original infinity image gap exactly.
- Header: joined words and virtual-focus wording → spaced source/scale/rim/stop notes, explicit fixed-focus scope
  and placeholder explanation. Printed versus derived BFD, scale and geometric assumptions remain stated.
- Analysis: joined words, inconsistent patent suffix, ambiguous filter numbering, understated maker count evidence
  and virtual-focus prose → corrected spacing, matching identifier, explicit filter mapping, brochure-stated count
  and infinity-only focus scope. Removed the private Drive citation and file/check narrative; retained public patent
  and brochure citations, technical numbers, glass qualifications and source limitations.
- Audit sidecar: missing → this source comparison, change record, first-order results and remaining limitations.

### Targeted checks and remaining scope

Both before and after the edits, the surface audit reports no validation errors. The aperture audit reports one lens,
one station within 3% of the stated f-number, with no rim, trace or iris limitations or failed stations. The builder
and paraxial probe load successfully. Infinity optical values are unchanged; the only changed numeric builder summary
is the required close-focus placeholder (1.2192 → 1000000 m). The former finite-focus states have been removed.

Open: actual production glass melts, exact iris position, measured clear rims, factory prescription identity,
color-filter response and measured MTF remain unresolved. The fixed 4-foot production conjugate is intentionally
not modeled. The full test suite, typecheck, lint, build, generators and browser review were excluded by this brief.
