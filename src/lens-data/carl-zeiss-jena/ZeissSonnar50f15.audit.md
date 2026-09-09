# Audit Log - Carl Zeiss Jena Sonnar 50mm f/1.5

Patent: US 1,975,678, sole worked example
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - Patent and glass-status audit

### Source Note

- The exact patent PDF was added locally under `patents/US1975678.pdf` from the Google Patents image source and checked against the existing transcription.
- Rechecked the rendered table and Figure 1. The patent prescription is normalized at f=100 and the data file correctly uses a 0.5x scale for the Contax 50mm rendering.

### Phase 1 - Glass / APD / high-index status

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `Dense Crown (SK/SSK family, Schott Jena)` | `Unmatched (vintage Schott/Jena dense crown, patent nd=1.6375, νd=56.1)` | High-index crown status is retained, but no coefficient-backed local catalog match is close enough. |
| L2 / 3 | `glass` | `Barium Flint (BaF10 type, Schott)` | `Unmatched (vintage Schott/Jena BaF10-class barium flint, patent nd=1.6727, νd=47.3)` | The historical BaF10-class assignment remains descriptive, but it should not be treated as a resolved modern catalog glass. |
| L3 / 4 | `glass` | `Specialty Low-Index Crown...` | `Unmatched (patent ultra-low-index crown, nd=1.4075, νd=65.7; no practical catalog glass)` | The patent value remains internally consistent but physically anomalous for a cemented photographic glass. It is not marked APD. |
| L4 / 5 | `glass`, line indices | `Dense Flint (SF family, Schott Jena)` | `N-SF8 / SF8 equivalent` with C/F/g line indices | N-SF8 is a tight dense-flint equivalent; the data file keeps the patent nd at the d-line and uses N-SF8 line indices for chromatic tracing. |
| L5 / 7 | `glass` | `Light Flint (hist. Schott Jena)` | `Unmatched (vintage Schott/Jena light flint, patent nd=1.5481, νd=45.9)` | No coefficient-backed public match was identified. |
| L6 / 8 | `glass` | `Very Dense Crown (SSK51 type, Schott)` | `Unmatched (SSK51-class very dense crown, near N-SSK5; patent nd=1.6578, νd=51.2)` | N-SSK5 is a strong family-level match, but resolving it locally moves the d-line index away from the patent value, so this element remains Abbe fallback. |
| L7 / 9 | `glass` | `Crown (PSK3 type, Schott)` | `Unmatched (vintage Schott/Jena crown, patent nd=1.5488, νd=63.0)` | PSK3 is only approximate; the updated label avoids false catalog certainty. |

### Phase 2 - Prescription and SD review

- Rechecked all radii, thicknesses, air spaces, and glass constants against the patent table. The existing 0.5x scale is correct.
- Reconfirmed r8 positive from the patent drawing and EFL convergence.
- The patent does not publish semi-diameters. Existing SDs remain rational against the rendered cross-section and the runtime layout; no hidden trim diagnostics were reported.

### Verification

- Temporary Zeiss Jena diagnostic test - passed after the glass-label updates; runtime trim diagnostics empty for this lens.

## 2026-09-08 — First-hosted audit (lens 9, in progress)

- Original US1975678.pdf numerical table p2 inspected at 600 dpi. The unusual L3 index is indeed 1.4075; retain it, do not substitute 1.4675 based on lower-resolution appearance or plausible glass matching. R8 is explicitly positive. Radii, thicknesses, index and Abbe values match current scaled prescription.
- Patent explicitly states approximately42° picture angle; changed surfaced field from46.8° to42° and set projection fullFieldDeg42. Source prose calls r2/r7 plane but table gives finite radii; table is authoritative, discrepancy explicit.
- Production live view showed rays crossing before the image plane. Independent complete paraxial propagation gives EFL50.16265584 and BFD22.03847610, not authored35.2. Corrected rear gap and inferred0.90m endpoint25.18595591 (3.14747980mm unit travel). Assembly track40.15mm. Patent does not publish focus travel or endpoint; source/inference distinguished.
- Removed historical supplier assertions and catalog nC/nF/ng overrides on N-SF8. Remaining rims, analysis, live local review and batch gates pending.
- Fig.1 at600dpi: approximately1310px first-to-last vertex span represents40.15mm; central triplet optical rim near460px≈14.1mm, exit near320px≈9.8mm, rear entrance near330px≈10.1mm, final rim near400px≈12.3mm. Increased S3/S4/S5 to14, S6 to9.9, S7/S8 to10, S10 to12.3; retained front18/17 allowance and steep cemented S9=9.5. Surface probe passes. Image-circle probe passed before this enlargement; final hidden-trim/coverage checks pending.
- Analysis rewritten; local infinity/close/midpoint/f16/movement chart reviewed. Corrected image plane now coincides with the paraxial ray focus. BF22.04/25.19/23.61; unit motion3.15mm objectward; f16 stop1.87mm; chart labels fit. Full-aperture outer-ray termination remains visible and must be assessed during batch ray/geometry checks; no iris reduction used. Regression tests authored, batch execution pending.


### Batch follow-up

Batch RCA: outer/interior ray investigation identified a misplaced inferred stop, not total internal reflection. S6 curved rim sag is about 6.12 mm; old 1 mm vertex-to-stop spacing caused a backwards stop intersection (noBracket). Replaced 1/5.95 with 6.3/0.65 mm, preserving source gap. Interior 0.25/0.5/0.75 pupil rays transmit; added clearance/transmission regression. Updated live infinity view confirms rays reach the corrected image plane. Stop position remains inferred.
