# Canon EF-S 55-250mm f/4-5.6 IS STM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2014/0211029 A1\
**Application number:** US 14/159,706\
**Filed:** January 21, 2014\
**Published:** July 31, 2014\
**Priority:** JP 2013-015283, January 30, 2013\
**Inventor:** Tetsuichiro Okumura (printed Tetsuichirou Okumura)\
**Applicant:** Canon Kabushiki Kaisha (normalized Canon Inc.)\
**Title:** Zoom Lens and Image Pickup Apparatus Including the Same\
**Selected configuration:** Numerical Embodiment 3, PDF p. 27 / printed p. 10; Fig. 5, PDF p. 6 / sheet 5\
**Original shape-and-glass review:** October 30, 2026

The exact local original is `patents/US20140211029A1.pdf`. Paragraphs 0019–0021 and 0039
(PDF p. 19 / printed p. 2) identify Fig. 5 and Figs. 6A/B as Embodiment 3; Fig. 7 belongs
to Embodiment 4. The selected prescription has fifteen elements in twelve groups,
a six-unit positive-negative-positive-positive-negative-positive power sequence,
a negative second unit for image stabilization and a negative fifth unit for rear focus.
No source filter, rear plate, hybrid layer or separately specified cement medium is present.

The five full-field columns state focal lengths 56.80, 74.27, 135.16, 203.01 and
241.32 mm, F-numbers 4.16, 4.44, 5.18, 5.58 and 5.88, and image height 13.66 mm.
These source values remain distinct from the marketed 55–250 mm f/4–5.6 specification.
The previously recorded Canon product references give the same 15/12 count, rear
focus and one UD element, making this a plausible production correlation. They do
not prove that this exact numerical prescription, any glass supplier or any melt
was used in production. Production 0.85 m close focus is metadata; it has no authored
finite-focus motion here. The source image circle is 27.32 mm; the application also
checks its slightly larger 14.175 mm APS-C format corner separately.

Two source qualifications are retained in `source.errata`:

- The 135.16 mm column prints BF=57.35 mm but literal d28=57.95 mm on the same page.
  The existing model keeps the printed d28 row. Computed BF=57.896315 mm is a runtime
  result and does not independently establish which conflicting source number is wrong.
- Paragraph 0047 (PDF p. 20 / printed p. 3) says “the fifth lens unit L3”; paragraph
  0088 (PDF p. 23 / printed p. 6) and Fig. 5's focus arrow identify L5. The wording is
  qualified without inventing unprinted close-focus spacings.

## Optical Architecture

| Unit | Power    | Computed focal length | Elements / groups | Function                                       |
| ---- | -------- | --------------------: | ----------------- | ---------------------------------------------- |
| L1   | Positive |        +126.381871 mm | 3 / 2             | Front collector and moving zoom unit           |
| L2   | Negative |         −26.322148 mm | 3 / 2             | Centered image-stabilizing unit                |
| L3   | Positive |         +43.996111 mm | 3 / 2             | Relay and chromatic correction before the stop |
| L4   | Positive |         +42.701819 mm | 3 / 3             | Positive relay after the stop                  |
| L5   | Negative |         −35.504866 mm | 2 / 2             | Rear-focus unit                                |
| L6   | Positive |        +129.410999 mm | 1 / 1             | Rear field correction                          |

These calculated unit powers agree with the rounded source unit table on PDF p. 27.
L2 remains fixed during zoom; L1 and L3–L6 move toward the object side. The aperture
stop is source surface 16, represented as `STO` after L3. Its variable following gap
falls toward the middle and then rises. The long-end total track is 208.89 mm and
calculated EFL is 241.141052 mm, a telephoto ratio of about 0.866. All source R/d,
printed clear apertures, stop placement, zoom schedules and focus controls are preserved.

## Element-by-Element Shape and Glass Review

Every medium was compared with the printed nd/νd rows, including all three bonded
interfaces. The table names are compatible catalog spectral proxies. Historical
supplier, melt, chemistry, cement and annealing identity are unspecified throughout.
The words crown/flint or low/high dispersion describe optical coordinates where used.

| Element | Source surfaces | Shape / role                                         | Source nd / νd | Compatible spectral proxy |
| ------- | --------------- | ---------------------------------------------------- | -------------- | ------------------------- |
| L11     | 1–2             | Plano-convex front collector                         | 1.48749 / 70.2 | OHARA S-FSL5              |
| L12     | 3–4             | Negative meniscus in D1                              | 1.65412 / 39.7 | OHARA S-NBH5              |
| L13     | 4–5             | Positive meniscus in D1                              | 1.48749 / 70.2 | OHARA S-FSL5              |
| L21     | 6–7             | Biconcave negative in D2                             | 1.71300 / 53.9 | OHARA S-LAL8              |
| L22     | 7–8             | Positive meniscus in D2; published anomalous partial | 1.80809 / 22.8 | OHARA S-NPH1              |
| L23     | 9–10            | Biconcave negative, nearly plane rear                | 1.80400 / 46.6 | OHARA S-LAH65V            |
| L31     | 11–12           | Biconvex main positive in L3                         | 1.80400 / 46.6 | OHARA S-LAH65V            |
| L32     | 13–14           | Low-dispersion positive in D3                        | 1.49700 / 81.5 | OHARA S-FPL51             |
| L33     | 14–15           | High-index biconcave negative in D3                  | 1.90366 / 31.3 | OHARA S-LAH95             |
| L41     | 17–18           | Biconcave negative after the stop                    | 1.80610 / 33.3 | HOYA NBFD15               |
| L42     | 19–20           | Biconvex main positive in L4                         | 1.72916 / 54.7 | OHARA S-LAL18             |
| L43     | 21–22           | Positive meniscus in L4                              | 1.65844 / 50.9 | OHARA S-BSM25             |
| L51     | 23–24           | Higher-dispersion positive in L5                     | 1.76182 / 26.5 | OHARA S-TIH14             |
| L52     | 25–26           | Biconcave main negative in L5                        | 1.69680 / 55.5 | OHARA S-LAL14             |
| L61     | 27–28           | Weak positive rear meniscus                          | 1.54072 / 47.2 | OHARA S-TIL2              |

L21's negative/positive radius signs make it biconcave. L23 retains its finite rear
radius +66857.597 mm and is also biconcave, though almost plano-concave in appearance.
Only their type labels change; no source curvature is flattened or reversed.
D1 is a weak net positive chromatic pair; D3 similarly uses opposing powers and a
large Abbe difference for color correction. L31 and L42 supply most of the positive
relay power. L51/L52 form the compact negative rear-focus unit. These optical roles
do not identify material chemistry.

### Clear apertures, shoulders and retained outline limits

All 27 non-stop clear radii remain exactly half the source effective diameters.
The printed stop effective diameter is 19.04 mm; it is kept as source evidence,
not converted into an unproved physical iris schedule. Six free ends receive
conservative cap-anchored `rimExtensionSd` shoulders:

| Surface | Retained clear sd | Outer shoulder sd |
| ------- | ----------------: | ----------------: |
| 2       |            20.375 |             20.52 |
| 5       |            18.995 |            19.215 |
| 8       |              8.73 |              8.86 |
| 9       |              8.73 |              8.89 |
| 15      |              9.66 |              9.83 |
| 22      |              8.31 |              8.62 |

Values are millimeters. Fig. 5 supports flat outer ends beyond the optical caps;
these adopted heights are anchored to existing opposing or bonded-cap heights,
rather than claimed as precise subpixel measurements. The native figure is a
2560×3300 raster at 300 ppi. After rotation, its approximately 1450 px active
first/last-vertex span represents 115.32 mm, about 12.6 px/mm. Practical rim
uncertainty is ±0.8 mm, about ten native pixels, increasing to ±1.0 mm at the front
blanks because of broken ink and disagreement between drawn blank and printed clear
heights. Magnification adds no native detail. Leaders, group brackets, zoom/focus
arrows and the image plane are excluded from measurements.

The drawing's larger, flatter bonded blanks remain an explicit outline limitation.
Replacing the printed clear diameters by those full blank heights, or drawing
opaque lands through bonded interfaces to force equal-height blocks, is rejected.
All three interfaces stay curved and connected. No disconnected layer, resin wing,
mechanical flange or inferred cut is added. The narrow source 0.36 mm gap at S18/19
retains 0.069274 mm minimum physical separation over the common clear cap; the
adjacent 0.10 mm S20/21 gap remains air. Native figures and actual generated SVGs
were compared at matched axial scale; preserving clear-aperture fidelity takes
precedence over forcing a perfectly rectangular blank silhouette.

## Spectral Evidence and APD

The numerical table uses nd/νd. Paragraph 0076 (PDF p. 22) explicitly defines d/C/F/g
indices, νd=(Nd−1)/(NF−NC), and θgF=(Ng−NF)/(NF−NC). Paragraph 0043 (PDF p. 19) gives
d=587.56 nm, g=435.8 nm and F=486.1 nm. No individual numerical nC/nF/ng values or
supplier names are printed for these fifteen positions. All fifteen existing
compatible catalog curves remain selected; none is evidence of historical identity.
No unsupported per-lens line-index override was present or added.

Table 2, row 3 (PDF p. 32 / printed p. 15), gives νd=22.8, θgF=0.6307 and ΔPgF=+0.025.
Paragraphs 0076–0079 and Claim 4 on PDF p. 32 associate this material with the positive
lens in the stabilizing L2 unit. The selected L2 has only one positive element, L22,
so that positional mapping is unique. Its existing `apd: "patent"` and genuinely
published `dPgF: 0.025` are retained. The normal-line formula gives +0.0252496 from
the rounded θ/ν values, only 0.0002496 from the printed residual and within the data
spec's 0.0003 retention tolerance. It is not replaced by a catalog partial.

L32's `apd: "inferred"` remains qualified by the low-dispersion coordinate and
S-FPL51-compatible curve. Table 2's L22 evidence does not establish a partial for
L32. Neither its fluorophosphate chemistry nor the production UD position is proved.
The June 25, 2026 audit is retained as history; this October 30 inspection newly
qualifies the public labels and those earlier material claims.

## Zoom, Focus and Stabilization

| Gap     | 56.80 mm | 74.27 mm | 135.16 mm | 203.01 mm | 241.32 mm |
| ------- | -------: | -------: | --------: | --------: | --------: |
| d5      |     5.87 |    19.11 |     43.27 |     56.30 |     60.87 |
| d10     |    24.92 |    20.90 |     11.82 |      4.95 |      1.50 |
| d16/STO |    19.96 |    17.26 |     13.68 |     14.94 |     16.56 |
| d22     |     4.10 |     3.85 |      3.40 |      2.60 |      2.05 |
| d26     |    11.86 |    12.11 |     12.56 |     13.36 |     13.91 |
| d28     |    38.57 |    45.28 |     57.95 |     63.56 |     65.38 |

Both focus endpoints use these same gaps: the current focus slider has no optical
motion. Source L5 movement is described qualitatively, but a complete finite-focus
schedule is not published for these five full-field columns. Production 0.85 m and
0.29× values from earlier manufacturer references do not validate finite focusing
in this model. IS is reviewed only in its centered configuration; lateral IS motion,
decentering aberrations and production stabilization performance are unvalidated.

The sixth source column is separate: f=57.92 mm, F/4.18, zero half-field and image
height, track 154.99 mm, and gaps d5/d10/d16/d22/d26/d28 =
6.97/24.67/19.72/4.06/11.90/39.06 mm. It states no object distance. A separate
scratch configuration gives EFL=57.895699 mm and BF=39.018696 mm. Its source gaps,
surface guard, aperture check, fifteen connected finite paths, zero renderer trim
and 97 stop-aimed collimated axial pupil rays pass. A separate input-plane grid
sized by paraxial F/4.18 passes 73/97 rays and clips 24 at the iris, illustrating
the real/paraxial pupil convention. Neither diagnostic identifies a finite object
or establishes full-field coverage for this zero-field source column. It stays
outside the rendered five-station zoom model.

## Aspheres and Field Curvature

The selected numerical configuration is entirely spherical; no aspheric or hybrid
coefficient table applies. No polynomial or curvature is adjusted to match a figure.
The directly recalculated surface Petzval sum is +0.000493199 mm⁻¹, radius about
2028 mm. Its simple sag estimate at source image height 13.66 mm is about 0.046 mm;
this is a first-order curvature estimate rather than a full astigmatic image surface.

## Verification and Limits

The October 30 source check confirms all 28 surface rows, 22 fixed distances,
27 clear diameters, six gap schedules and fifteen pairs. Source and control parity
is exact; all fifteen compatible curves resolve identically before and after review.

| Source focal length | Computed EFL | Computed BF | Literal image gap | Runtime iris radius | Paraxial / real collimated F/# |
| ------------------: | -----------: | ----------: | ----------------: | ------------------: | ------------------------------ |
|               56.80 |    56.792839 |   38.546681 |             38.57 |            9.342583 | 4.16 / 4.235739                |
|               74.27 |    74.255165 |   45.253285 |             45.28 |            9.288702 | 4.44 / 4.522865                |
|              135.16 |   135.106775 |   57.896315 |             57.95 |            8.918339 | 5.18 / 5.276387                |
|              203.01 |   202.927465 |   63.466242 |             63.56 |            8.732041 | 5.58 / 5.683194                |
|              241.32 |   241.141052 |   65.271445 |             65.38 |            8.448858 | 5.88 / 5.981009                |

Lengths are millimeters. The source's single 19.04 mm stop effective diameter is
not a station-specific physical schedule. The existing paraxial-derived iris rule
is preserved; a real collimated pupil measurement has a different F/# convention.

Surface and image-circle audits pass. Aperture checks pass at all five published
stations and all 65 sampled zoom positions within the unchanged 3% threshold.
All 65 sampled format-corner chief checks exceed 99% coverage. A geometry-identical
65-station diagnostic clone has zero position/iris difference. Across 65 zoom ×
21 focus controls, all 1365 rendered states contain fifteen closed, connected,
finite paths with zero hidden renderer trim. Focus duplication is a no-op check,
not a finite-object validation.

A separate 65-position collimated beam census samples 97 stop-aimed pupil points
at axis, half-format-corner and full format corner: 18,915 rays. All axial pupils
and all chiefs clear. There are 3956 ordinary off-axis marginal clips and 746
bounded first-surface cap misses; exact spherical intersection classifies every
such miss beyond the retained S1 clear cap. There are no unexplained first/interior
intersection failures, failed chief seeds or unaimed rays. Chief coverage does
not mean that a full pupil transmits at the extreme field.

Only the five numerical stations are published. Between them the retained linear
gap interpolation is illustrative and does not preserve infinity focus exactly:
the largest sampled first-order BF displacement is +1.859044 mm at zoom 0.640625
(EFL 171.921882 mm, BF 62.964669 mm, image gap 61.105625 mm). Passing sampled
aperture, chief and contour checks does not establish a production cam, focus,
full-pupil transmission, moved-IS behavior or an exact historical glass prescription.

## Sources

1. Exact local original `patents/US20140211029A1.pdf`: front page; Fig. 5 / PDF p. 6;
   Figs. 6A/B / PDF p. 7; definitions and embodiment prose / PDF pp. 19–24;
   Numerical Embodiment 3 / PDF p. 27; Table 2 and Claim 4 / PDF p. 32.
2. Previously recorded Canon product specifications and instruction manual:
   [product](https://www.usa.canon.com/shop/p/ef-s-55-250mm-f-4-5-6-is-stm),
   [manual](https://gdlp01.c-wss.com/gds/8/0300012888/01/efs55-250f4-56isstm-im-eng.pdf).
   Production correlation context, not newly inspected original-prescription evidence.
3. Existing compatible OHARA/HOYA curves in the project's glass catalog. Their
   public material names qualify spectral simulation and do not identify source supply.
