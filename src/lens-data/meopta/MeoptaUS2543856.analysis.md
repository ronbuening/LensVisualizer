## Patent Reference and Design Identification

**Patent:** US2543856A
**Inventor:** František Kupka
**Assignee:** Meopta
**Priority:** Czechoslovakia, 1947 (year from the independently verified source handoff)
**Granted:** 1951
**Example details:** Literal Example 1; cinema optical patent, not an identified retail lens.

Private app-ready sodium-D infinity reference only. No retail, serial, production, finite-projection or camera identification is assigned. The primary original's three pages were visually verified by the independent source scout, outside this executor. [Official source locator](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/2543856). Externally pinned SHA-256: `b9203404b0a37b47017fbdda1c67fe8132824b63cb377ff8c890b004b93c5ef4`. No original PDF is included, locally downloaded, rehashed or pixel-inspected. The known denied worker source route was not attempted.

## Optical Architecture

Five elements in four air-separated groups: L1 | L2+L3 | L4 | L5. R4 is a genuine plano glass-to-glass cemented interface. It is not an iris, omitted boundary or air gap. The 0.1 mm R2–R3 air gap is preserved. All nine radii, eight axial spacings, five sodium-D indices and Abbe values remain literal. There is no optical fitting, glass substitution, baffle, additional plate, false fixed-stop flag, global change, geometry relaxation or trimming.

Literal D-line EFL = 99.9978475914 mm, BFD = 52.3199662409 mm, first-to-last vertex track = 66.8 mm. The computed Gaussian infinity plane is used; no finite conjugate or focus cam is inferred. Published nominal EFL is 100 mm and nominal aperture is f/1.8.

## Element-by-Element Analysis

| Element | Front/rear surface | Source D index / Abbe | Modeled clear semidiameters (mm) |
|---|---|---|---|
| L1 | R1 / R2 | 1.65981 / 50.3 | 32 / 32 |
| L2 | R3 / plano R4 | 1.65981 / 50.3 | 30 / 27 |
| L3 | plano R4 / R5 | 1.71715 / 29.6 | 27 / 27 |
| L4 | R6 / R7 | 1.71715 / 29.6 | 24 / 21 |
| L5 | R8 / R9 | 1.61216 / 58.0 | 22 / 22 |

Every listed clear semidiameter is an estimate, not a patent measurement. Shared interface R4 has one clear cap. Default geometry retains positive glass lands; minimum sampled common-radius glass thickness is 1.353966980 mm, with the other elements at least 1.5 mm. Air-gap minima are 0.100000, 6.274586182 and 19.020778107 mm. Maximum positive air-gap sag consumption is 23.9169%, below the default 90%; no override or render trim. Independent straight sidewall-envelope tests joining the authored face rims find no admitted ray crossing the estimated solids. These are mechanical proxy checks, not factory rim or barrel evidence.

## Glass Identification and Selection

The five literal sodium-D/Abbe pairs are preserved, including separate L2/L3 at the flat cement. No exact catalog glasses or individual C/F/g measurements are established. Index reference D is explicit. Quantitative image and MTF claims are restricted to sodium D. Generic app chromatic or polychromatic outputs based on Abbe dispersion are not qualified as source-calibrated performance.

## Focus Mechanism

Only infinity in the transcribed source direction is modeled. No finite projection state, operational focusing mechanism or production lens behavior is asserted. The near-focus control is effectively disabled by the distant close-focus bound and described as an infinity diagnostic.

The stop station is published: 9.4 mm after R7 and 15.6 mm before R8, at z44.2 mm. Its physical diameter is not published. Exact independent tracing of the source axial h27.78 mm witness gives inferred iris radius 16.734857895572 mm, diameter 33.469715791143 mm. The source nominal label f/1.8 stays in `catalog.fNumber.design`; the recognized `aperture.nominalFNumber` = 1.7536447904353865 is explicitly a software iris-calibration control. It is neither a source correction nor an exact effective f-number. A native f/1.8 control alone would give diameter 32.607773741384 mm, which is not the witness-derived opening.

Desktop 1440×1100 and compact 390×844 import/export and fresh reload/reimport preserve diameter 33.469715791143315 mm in actual rendered DiagramSVG props. No state injection is used. Native aperture census diagnoses the calibrated state as `ok`; its paraxial control convention differs from independent exact entrance-equivalent f/1.799817271 and image-space sine equivalent f/1.803659884. These definitions and the source f/1.8 label are retained separately. The aperture audit's optional rim-raise tool would flag a faster-than-design control for review; no automatic rim raising, suppressed flag or altered acceptance rule is used.

## Aspherical Surfaces

None. All curved boundaries are literal spheres; R4 is the source plano refractive cemented boundary.

## Diagnostic Field, Rays and Aberration Evidence

Chosen field is ±10 degrees, not a printed design-field or format claim. Native desktop and mobile rendered incoming rays and viewer geometry are measured at 10 degrees. Compact Builder has no exposed off-axis toggle: testing uses the native wide-layout toggle and restores the compact layout, rather than claiming compact activation exists. Image-circle metadata follows the native 10-degree chief height, 17.702159998 mm; it is a metric sampling datum, not a measured production format or optical fit.

Independent source LSA comparison at axial heights 19.45 / 24.06 / 27.78 mm gives -0.332342484 / -0.239530060 / +0.139283299 mm versus printed -0.327 / -0.241 / +0.148 mm. Differences are retained, maximum 0.008716701 mm. No prescription adjustment was made to match the printed values.

A dense physical entrance grid of 3,457 seeds at -10/-5/0/+5/+10 degrees yields valid arrivals 2930/3226/3169/3226/2930, with blocked counts 527/231/288/231/527. All chiefs survive. No unresolved raw paths remain in this sampled grid. Each outer field has 55 native `noBracket` outcomes: these are retained in the raw record, and an independent forward near-vertex sphere intersection proves every one lies outside the next modeled cap, with a matching native prefix. The 110 proofs are evidence of physical clear-cap misses, not overridden successes. The other 1,694 clipped samples have independent first-aperture position/radius proofs. Maximum native/independent hit discrepancy is below 2.1e-13 mm. Counts are unweighted diagnostics, not throughput.

A separate 865-point stop-aimed grid at the same fields gives 764/862/865/862/764 arrivals and 101/3/0/3/101 rim blocks, with no unaimed, failed or unresolved samples. At the 10-degree edge the first blocks are R1; at 5 degrees they are R4. This does not claim full-pupil edge transmission, measured vignetting or image quality.

## MTF Scope and Validation

Native geometric sodium-D MTF, Gaussian design plane, frequencies 0/10/20/40 cycles/mm. Sampled fields are 0, 5.05255598 and 10 degrees; intermediate fields are image-height fractions, not angle fractions. Explicit 32–512 lattice refinement reproduces native adaptive results. Largest 256→512 absolute MTF changes are 0.000190105 / 0.000126458 / 0.000202554. At 512, native unknown flux and omission bounds are zero; no unaimed or failed cells. Known aperture clipping is retained. This is convergence of the native geometric metric, not diffraction/broadband qualification, independent measured MTF or retail performance.

Native import/validation, exact JSON roundtrip/export, field/iris browser measurements and analysis-panel rendering pass on desktop/mobile with no page errors. Strict model and full retained-baseline typechecks pass; model ESLint has zero errors/warnings; formatting passes; 346 tests in ingestV2/canonical/apertureStop/buildLens pass. Full-catalog regression and remote CI were not run, and no app code changed.

## Deduplication and Reproducibility Bounds

Retained baseline 4027fd20d095a1dba4ee3f46188dc70dad858055 contributes 1,188 re-evaluated catalog bodies. A separate hash-verified cache covers 2,378 older main/21 retained PR-head bodies and 2,438 historical profiles. Overlapping additional local checks include 16,723 loose TS bodies, 1,151 TAR TS bodies, 292 JSON surface profiles and 24,370 TS members in 48 ZIPs. No normalized signed forward/reversed-scale radius match was found. The unrelated #996 context citation is not optical identity. Counts overlap and must not be summed into unique models. Computed-expression parsing and inaccessible archives remain bounded limitations; no exhaustive archive claim. Known PR refresh 403 was not retried; current remote PR/main freshness is not certified and should be reviewed before distribution.

A local immutable checkpoint contains the exact model, source transcription, independent/native evidence, repro scripts and full member hashes. Original PDFs are not members. Doi, Taylor, eight prior sealed ZIPs and the retained source baseline are preserved. No packaging, upload, delivery or credit is implied.
