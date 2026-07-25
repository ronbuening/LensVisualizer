# Patent-Figure Semi-Diameter Audit — 2026-07-24

An audit of the semi-diameters and rendered cross-section proportions of the 23 lenses touched by the
odd-order asphere backfill (commits `3921bc60`..`2e0583b0`), checked against the local patent PDFs in
`patents/`.

The backfill itself only replaced `asph` coefficient blocks. This pass asks the separate question that
backfill invited: with the exact patent surface profiles now in place, do the **apertures** those profiles
are drawn out to, and the resulting cross-sections, agree with the patents?

Companion references:

- [odd-asphere-backfill.md](odd-asphere-backfill.md) — the backfill queue these lenses came from.
- [lens-patent-audit.md](lens-patent-audit.md) — the standing per-lens audit procedure (Phase 2 covers `sd`).
- `src/lens-data/TEMPLATE.data.ts.template` — Semi-Diameter Guidelines, and
  [LENS_DATA_SPEC.md](../src/lens-data/LENS_DATA_SPEC.md) §"Semi-diameters", which is the rule this audit applies:
  _"Use patent values if listed; otherwise estimate from entrance pupil geometry… If the manufacturer publishes a
  cross-section diagram, use it to refine front-group SDs… and adjust conservatively."_

## Headline result

No patent in this set publishes a per-surface effective-radius column, so every `sd` in these 23 files is an
estimate. Four of the 23 were **provably wrong**: their rear surfaces were too small to pass a corner ray to their
own image circle. Those four are fixed. The other 19 are within the noise of what a drawing can settle, with a
recurring but unactioned pattern (see [Systematic observations](#systematic-observations)).

## How the audit was done

Three independent checks were used, deliberately ordered from most to least trustworthy.

### 1. Image-circle coverage floor (pure physics — no drawing involved)

A chief ray landing at image semi-height _Y′_ arrives at some angle θ, so a surface a distance _t_ ahead of the
image plane must pass it at height ≥ _Y′_ − _t_·tanθ. Chief-ray angles at the last surfaces of camera lenses stay
well under 45°, so **h ≥ Y′ − t** is a conservative floor: a surface below it cannot deliver the format corner no
matter what the vignetting policy says. _Y′_ comes from `imageFormat` via `lensTaxonomy.ts`
(aps-c 28.35 mm, 44x33 54.78 mm, 135-full-frame 43.3 mm diagonals).

This is the check that found the real bugs. It needs no patent figure and has no measurement error.

### 2. Patent-figure photogrammetry (screening)

Each patent's cross-section sheet for the matching example was rendered to grayscale PGM with `pdftoppm -gray -r 300`
and measured column by column, in two independent ways:

- **ENV** — outermost ink in the column, taking the smaller of the two half-envelopes about the axis. Labels, leader
  lines and one-sided off-axis ray bundles sit on one side only and drop out. Over-reads where a drawn bundle or a
  group bracket straddles the axis outside the glass.
- **RIM** — longest vertical dark run in the column, keeping its outer end and requiring mirrored ink on the far side
  of the axis. Rays are never vertical, so this is immune to them; it under-reads elements whose drawn edge is only a
  pixel or two tall.

Figure scale is unknown, so it is recovered from the axial direction: the glass span in pixels is mapped onto the data
file's glass z-extent in mm. Axial thicknesses come straight from the patent table, so this anchor is independent of
the semi-diameters under audit. Rotated sheets (most JP-family drawings print the axis vertically) are transposed first.

Agreement between ENV and RIM brackets the truth; disagreement flags a figure that needs a human look.

### 3. Validator and aspheric-domain probe

Any proposed `sd` was run through `validateLensData` with `LENS_DEFAULTS` applied (edge thickness, SD ratio, rim slope,
conic height, cross-gap sag intrusion), and — for aspheric surfaces — through a sag/slope scan out to twice the stored
`sd`, to find where the transcribed polynomial stops being physical.

### Figure sheets used

| Lens | Patent | Example | Cross-section |
|---|---|---|---|
| Zeiss Touit 50/2.8 Macro | JP 2015-161792 A | 1 | **PDF not in `patents/`** |
| GF 100-200/5.6 | US 2019/0361195 A1 | 1 | FIG. 2, p3 |
| GF 20-35/4 | US 2022/0236544 A1 | 10 | FIG. 25, p26 (rotated) |
| GF 23/4 | US 2018/0210178 A1 | 1 | FIG. 1, p2 |
| GF 32-64/4 | US 10,191,246 B2 | 1 | FIG. 1, p3 |
| GF 35-70/4.5-5.6 | US 2022/0236544 A1 | 1 | FIG. 1, p2 (rotated) |
| GF 45/2.8 | US 2020/0174231 A1 | 1 | FIG. 1, p2 |
| GFX100RF 35/4 | US 2025/0362482 A1 | 5 | FIG. 13, p14 (image-only PDF) |
| X100 23/2 | US 2012/0069456 A1 | 1 | FIG. 1, p2 (rotated) |
| X100V 23/2 | US 2020/0333569 A1 | 1 | FIG. 2, p3 |
| X70 18.5/2.8 | US 2017/0075089 A1 | 1 | FIG. 1, p2 |
| XF 16-55/2.8 II | US 2025/0234079 A1 | 1 | **image-only PDF, sheet not located** |
| XF 16-55/2.8 | US 2016/0154221 A1 | 1 | FIG. 1, p2 |
| XF 18/2 | US 2014/0240851 A1 | 4 | FIG. 4, p3 |
| XF 23/1.4 | US 2022/0276464 A1 | 7 | FIG. 14, p15 (rotated) |
| XF 23/2 | US 2017/0351051 A1 | 1 | FIG. 1, p2 |
| XF 33/1.4 | US 2022/0276464 A1 | 3 | FIG. 6, p7 (rotated) |
| XF 35/1.4 | US 2014/0285903 A1 | 1 | FIG. 1, p2 |
| XF 50/1.0 | US 2021/0231927 A1 | 3 | FIG. 7, p8 (rotated) |
| XF 56/1.2 | US 2015/0212302 A1 | 3 | FIG. 3, p3 |
| XF 60/2.4 Macro | US 2014/0247506 A1 | 1 | FIG. 1, p2 |
| Sigma 10-18/2.8 | JP 2024-104911 A | Num. 2 | 図8, p36 (thumbnail) |
| Sigma 14-24/2.8 | JP 2018-189733 A | 1 | 図1, front page only (thumbnail) |

## What was observed

### Coverage-floor failures (fixed)

| Lens | Surface | t before image | old `sd` | floor | new `sd` |
|---|---|---|---|---|---|
| X100V 23/2 | 11 (L32 front) | 7.68 mm | 6.00 | 6.49 | 9.30 |
| X100V 23/2 | 12 (L32 rear) | 6.94 mm | 4.00 | 7.23 | 11.00 |
| X100V 23/2 | 13 (L33 front) | 6.84 mm | 4.00 | 7.33 | 12.10 |
| X100V 23/2 | 14 (L33 rear) | 4.86 mm | 6.00 | 9.31 | 12.10 |
| X100 23/2 | 13 (L7 rear) | 6.08 mm | 7.80 | 8.10 | 8.60 |
| X100 23/2 | 14 (L8 front) | 5.88 mm | 8.20 | 8.30 | 11.20 |
| X100 23/2 | 15 (L8 rear) | 2.80 mm | 8.80 | 11.38 | 11.90 |
| X70 18.5/2.8 | 13 (L32 rear) | 5.09 mm | 8.20 | 9.08 | 12.70 |
| GFX100RF 35/4 | 16 (L22 front) | 15.53 mm | 11.60 | 11.86 | 12.30 |
| GFX100RF 35/4 | 17 (L22 rear) | 14.39 mm | 12.60 | 13.00 | 13.50 |

All four also read as visibly undersized in their patent figures, so the two independent checks agree on both the
sign and roughly the size of the correction.

The X100V case is worth recording because the data file's own header explained the mistake: the rear SDs had been
"limited by the 0.100 mm air gap" between S12 and S13. That gap does not constrain anything — S12 is flat and S13 is
convex toward the image, so the gap **widens** with height and `_checkCrossGapOverlap` computes a negative intrusion.
The elements had been shrunk against a constraint that was never binding.

### Figure-vs-data proportions (whole set)

`median figure/data` is the overall scale agreement; the per-element numbers are each element's ratio divided by that
median, so 1.00 means "correct shape, whatever the overall scale". Values from the screening pass — treat as ±10–15%,
worse where marked.

| Lens | median fig/data | Largest shape deviations | Figure quality |
|---|---|---|---|
| GF 45/2.8 | 0.96 | none beyond ±11% | clean, rays |
| XF 50/1.0 | 0.99 | L2a 2.02, L2b/L2c 1.41, L1d 0.68 | rotated, rays |
| GF 35-70 | 0.99 | L31 1.51, L32 1.71, L11 0.79 | clean, rotated |
| GF 100-200 | 1.03 | L46 2.68, L47 2.31, L31–L33 ≈1.5, L13 0.59 | clean |
| GF 23/4 | 1.03 | L12 1.26, L11 1.17, L16 0.78 | rays |
| XF 33/1.4 | 1.04 | L22–L26 1.35–1.78, G1 all ≈0.80 | clean, rotated |
| XF 23/2 | 1.09 | L31 1.41, L32 1.41 | clean |
| GFX100RF | 1.11 | front-group readings unusable (bracket contamination) | clean |
| XF 60/2.4 | 1.12 | L11 0.80, L12 0.78, L22 1.19, L23 1.17 | clean |
| XF 18/2 | 1.16 | L8 1.80, L6 1.31 | clean |
| GF 32-64 | 1.20 | L32 1.78, L21g 1.41, L11/L12 ≈0.78 | rays |
| XF 56/1.2 | 1.23 | L21–L24 1.47–1.56, G1 all ≈0.75 | clean |
| GF 20-35 | 1.34 | L22 1.75, L21 1.39, L14 1.38 | rotated, brackets |
| XF 35/1.4 | 1.37 | spread 0.41–1.24 — not usable | rays |
| XF 23/1.4 | 0.96 | L23 1.65, L24 1.48, L22 1.42 | rotated |
| XF 16-55 | 0.94 | L42/L43 ≈2.6, L41 0.24 — tail unreliable | rays, 3 panels |
| X100V (after fix) | 1.49 | G2 still ≈1.1–1.4 vs G1 | clean |
| Sigma 10-18 | — | figure too small to measure | thumbnail |
| Sigma 14-24 | — | figure too small to measure | thumbnail |
| Zeiss Touit 50 | — | no patent PDF | — |

### Systematic observations

1. **Rear groups run small, front groups run large.** Across the clean figures the same shape error repeats: the
   elements closest to the image are drawn larger in the patent than we store them (XF 23/2 G3 1.41, XF 56 G2 ≈1.5,
   XF 33 G2 ≈1.5, GF 35-70 G3 ≈1.6, GF 100-200 G3 ≈1.5, XF 60 rear ≈1.18), while front elements are drawn smaller
   than we store them (XF 60 L11/L12 ≈0.79, XF 56 G1 ≈0.75, XF 33 G1 ≈0.80, GF 32-64 L11/L12 ≈0.78). This is the
   signature of sizing from a marginal-ray-plus-clearance rule: it tracks the axial cone well and under-counts the
   chief-ray height that dominates near the image.
2. **Patent figures draw the physical blank, not the clear aperture.** Repeatedly — X100V L11 and L32, GF 23 L11,
   XF 50 L1a — the drawing shows a flat rim stepping out beyond where the curved surfaces end. On X100V L32 the
   optical surface stops at ≈9.3 mm while the drawn rectangle runs to ≈11.0 mm. Matching the drawn outline literally
   would systematically oversize every `sd` relative to the "half clear aperture" the spec defines. Where the two
   differ, the corrections above take the optical extent.
3. **The screening tool over-reads more often than it under-reads.** Group brackets, focus-travel arrows and entering
   ray bundles all produce mirrored ink outside the glass. Any per-element number in the table above that is not
   corroborated by a zoomed visual read should be treated as an upper bound.

## Changes made

### `FujifilmX7018mmf28.data.ts` / `.analysis.md`

| Surface | Before | After | Basis |
|---|---|---|---|
| 10A (L31 front) | 6.25 | 9.30 | FIG. 1 draws L31 at ≈10.8 mm; capped by polynomial domain |
| 11A (L31 rear) | 6.55 | 9.60 | same |
| 12 (L32 front) | 7.55 | 11.70 | FIG. 1 ≈11.7 mm |
| 13 (L32 rear) | 8.20 | 12.70 | FIG. 1 ≈12.7 mm; coverage floor 9.08 mm |

Quoted rim departures moved with the SDs: S10A −628.802 µm @ 6.25 mm → −1823.797 µm @ 9.30 mm; S11A −494.019 µm
@ 6.55 mm → −1653.712 µm @ 9.60 mm. Analysis §L31 and §"At the data-file semi-diameters" updated;
`oddAsphereBackfill.test.ts` assertions updated to the new heights.

### `FujifilmX100V23mmf2.data.ts` / `.analysis.md`

| Surface | Before | After | Basis |
|---|---|---|---|
| 9A (L31 front) | 7.60 | 9.40 | FIG. 2 ≈9.4 mm (zoom-verified) |
| 10A (L31 rear) | 7.60 | 9.40 | same |
| 11 (L32 front) | 6.00 | 9.30 | optical extent of FIG. 2's L32; floor 6.49 mm |
| 12 (L32 rear) | 4.00 | 11.00 | FIG. 2 blank ≈11.0 mm; floor 7.23 mm |
| 13 (L33 front) | 4.00 | 12.10 | FIG. 2 ≈12.2 mm; floor 7.33 mm |
| 14 (L33 rear) | 6.00 | 12.10 | same; floor 9.31 mm |

Quoted rim departures: S9A +277.252 µm @ 7.6 mm → +662.051 µm @ 9.4 mm; S10A +193.097 µm @ 7.6 mm → +563.937 µm
@ 9.4 mm. Analysis and test updated. The header's "limited by the 0.100 mm air gap" note was replaced with the
reason that constraint does not apply.

### `FujifilmX10023mmf2.data.ts`

| Surface | Before | After | Basis |
|---|---|---|---|
| 12 (L7 front) | 7.20 | 8.00 | floor 7.00 mm, kept proportional to S13 |
| 13 (L7 rear) | 7.80 | 8.60 | floor 8.10 mm |
| 14 (L8 front) | 8.20 | 11.20 | floor 8.30 mm; sized with S15 as one element |
| 15 (L8 rear) | 8.80 | 11.90 | floor 11.38 mm |

Set from the coverage floor plus clearance, **not** from the drawing: FIG. 1 is a rotated, ray-overlaid scan whose
axial anchor kept truncating against the ray bundle that runs off the sheet, and repeated crops gave per-element
ratios spanning 0.47–2.41. No aspheric surface changed, so no departure bookkeeping was needed.

### `FujifilmGFX100RF35mmf4.data.ts`

| Surface | Before | After | Basis |
|---|---|---|---|
| 16 (L22 front) | 11.60 | 12.30 | floor 11.86 mm |
| 17 (L22 rear) | 12.60 | 13.50 | floor 13.00 mm |

Small corrections; both surfaces are spherical.

### Verification

- `npm run typecheck` — passed.
- `npm run test` — 207 files / 2440 tests passed.
- Coverage-floor check re-run over all 23: no remaining violations.
- Cross-sections re-rendered and compared with their figures at `/lens/fujifilm-x70-18mm-f28`,
  `/lens/fujifilm-x100v-23f2`, `/lens/fujifilm-x100-23f2`, `/lens/fujifilm-gfx100rf-35mm-f4`. All four now show the
  image-side growth their patents draw.

## Difficulties and blockers

**Missing patent.** `JP 2015-161792 A` (Zeiss Touit 50mm f/2.8 Macro) is not in `patents/`. Nothing in this audit
covers that lens. Add the PDF and it can be measured with the same method.

**Image-only PDFs.** `US_2025234079_A1.pdf` (XF 16-55 II) and `US_2025362482_A1.pdf` (GFX100RF) carry no text layer,
so figure sheets have to be found by rendering pages and looking. GFX100RF's Example 5 sheet was located (FIG. 13,
p14); XF 16-55 II's was not, and that lens is unmeasured. Worth noting: US 2025/0362482 defines `hE2` as a surface's
effective radius in FIG. 5, so its tables may actually publish clear apertures — unreadable without OCR.

**Sigma figures are thumbnails.** `JP 2024-104911 A` 図8 and `JP 2018-189733 A` 図1 are printed a few hundred pixels
wide (the latter only as the front-page abstract drawing — the drawing section starts at 図3). At 600 dpi both still
resolved to fewer than 20 px per element edge, and every measurement collided with the group brackets and leader
lines drawn across them. Both Sigma lenses are unaudited for SD.

**Aspheric polynomials limit how far a surface can be enlarged.** This is the substantive engineering blocker. The
transcribed odd/even polynomials are only valid over the aperture the designer fitted them on, and they diverge hard
outside it. X70 S10A is the clearest case:

| h (mm) | 8.20 | 8.80 | 9.40 | 10.00 | 10.60 | 11.20 |
|---|---|---|---|---|---|---|
| sag (mm) | −2.36 | −2.72 | −2.98 | −3.08 | −0.02 | +31.99 |
| slope | −0.67 | −0.51 | −0.39 | +0.50 | 14.94 | 122.6 |

The surface turns over near h = 9.7 mm. So L31 cannot be drawn out to the ≈10.8 mm its patent figure shows; 9.3/9.6 mm
is the honest limit. X100V's four aspheres have the same behaviour with limits of roughly 10.7 (7A), 10.5 (8A),
10.0 (9A) and 9.9 mm (10A). Any future attempt to push these apertures toward their drawn size has to stop at the
polynomial's turnover, not at the drawing.

**Edge thickness blocks the front-group corrections.** Where the figures suggest the front elements should be larger,
the prescription itself often forbids it. X100V L12 (S2 R = 12.429, S3 R = 64.176, d = 2.67) reaches zero edge
thickness at h ≈ 8.0 mm, so it cannot approach the ≈10.7 mm the drawing implies — more evidence that the drawn
outline there is a mounting flange rather than glass. The same wall appears on X100V L22 and, in the wider set, on
most of the "front group runs large" rows.

**The `sd` definition is ambiguous against a drawing.** `LENS_DATA_SPEC.md` defines `sd` as half the clear aperture,
but the renderer draws the element silhouette out to `sd`, and patent figures draw the physical blank. There is no
single value that satisfies both. This audit resolved it toward the optical extent, and flagged the cases where the
figure's rim is visibly a flange.

## Recommended follow-ups

1. Add the image-circle coverage floor as a catalog-wide regression test. It is a two-line calculation, it needs no
   patent, and it caught four wrong lenses in a set of 23 — the rest of the ~460-lens catalog has never been checked
   against it.
2. Work the "rear group runs small / front group runs large" pattern (§Systematic observations 1) as its own queue.
   Doing it properly means re-deriving SDs from a real chief-ray trace at full field rather than from a drawing, which
   is a larger job than this audit.
3. Source `JP 2015-161792 A`, and OCR the two image-only US applications.
4. When a lens with quoted rim departures has its `sd` changed, the analysis prose, the `oddAsphereBackfill.test.ts`
   assertion and the data file all have to move together — three places, easy to miss.
