# FujinonMKX50135mmT29 local bounded authoring audit

Status: qualified production-correlated candidate with bounded authoring gates passed, not release-ready. One complete model contains 2 literal published infinity stations and 33 explicitly unpublished inferred zoom samples. All source rows are present; no endpoint file substitutes for the zoom.

Frozen core baseline: 420b475557d63470f14025c2dd6993c52759ef16.
Final data SHA-256: 4f1428057e259a6aa1381d799320f37e5a5a44a7c3dc1a8ae5523f989b9c04b7.
Adaptive reduction from65 reference controls to35. All source stations are exact. Added sampled longitudinal error is bounded by1.22 λd N² (587.5618nm), the same disclosed engineering criterion used for the corrected Minoltas, with a2% guard. Worst added defocus 5.327390 µm; worst total residual 4.517413 µm. This is a modeling budget, not a factory cam or manufacturing tolerance. Source residuals are retained separately. Every permitted single-knot deletion violates the budget; no global count-optimality claim.
Exact source inverse comparison: PASS, 412 assertions.
Native geometry: PASS, 345 zoom/focus states including every half-knot; minimum edge 0.833175621 mm, minimum glass-to-glass air clearance 0.200000000 mm, zero hidden trimming. Minimum iris-side clearance 1.233503912 mm across the sampled aperture stroke.
Sampled focus: positive and monotonic; near object-to-image distances 1.200000000–1.202277766 m. These are reconstructed, not certified finite source rows.
Exact aimed-pupil screen: 60 cases, 12480 samples, zero unresolved/unaimed samples and zero axial blocked samples. Fields include every source zoom station and intermediate slider states; focus endpoints and wide-open/f5.6 apertures are included. Off-axis vignetting is present. This is bounded classification, not converged throughput, MTF validation or factory performance.
Native element-shape SVGs at wide/mid/tele were visually inspected against patent and maker construction diagrams. Literal element ordering, signed curvatures, cement interfaces, stop placement and zoom-group movement remain represented. Rims are not measured factory dimensions.
The rear PP remains 2.000 mm, nd=1.51633, vd=64.14, with physical 5.000 mm air before and 30.658 mm after. It is synthetic in native drawing and remains traced. A 91.5% gap-sag allowance is the smallest tested stage preserving the required axial pupil: 90%/91% fail, 91.5% passes. Source D15=4.440 mm remains unchanged, with 0.386810 mm physical edge clearance. See OVERRIDE_RATIONALE.txt and GAP_ALLOWANCE_STAGES.json. This existing91.5% setting is retained unchanged from v3; no additional increase is made.

Additional exact axial rim checks at99.99% stop radius pass at every control and midpoint, infinity and reconstructed near focus: 138 cases. Three stressed intermediate states were compared with dense v3 at identical physical zoom coordinates using208 matching exact d-line rays each; maximum image-point displacement is 0.832685 µm. No MTF claim follows.

Focus direction labels are verified at every authored knot: only G1b/L14 (surfaces7–8) moves imageward toward near focus; D6 grows,D8 shrinks; other surfaces and image plane remain fixed at fixed zoom. Direction and magnitude are reconstruction, not published factory cam values.

Focused two-file TypeScript, Prettier and ESLint checks pass on these final files. The repository-wide suite/build has not run and no application route is claimed verified.

Remaining qualifications: source-to-product correlation is strong schematic association, not numeric factory identity or MK/MKX equivalence. Iris/rims and continuous zoom/focus cams remain disclosed inferences. No invented finite certification, named glass or factory aberration claim. Both files remain visible:false pending the corrected six-model package gates. No commit, PR, deployment, upload or delivery.
