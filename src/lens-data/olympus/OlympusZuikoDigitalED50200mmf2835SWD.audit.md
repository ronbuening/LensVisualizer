# Related-patent 50–200 mm audit — 26 October 2026

## Scope and source custody

Queue target 141 is the Four Thirds 2007 SWD product. This is a qualified related-2004-patent study, not
an exact product identification. The prior non-SWD source preference, middle-label hold and rejected
later diffractive family remain intact. Original A1 pp. 10–11, B2 p. 10, Fig. 3, SWD catalog and non-SWD
sheet were visually inspected. The independent source receipt is
`independent_source_review/20261026T105400Z/review_v002.json`.

The prior 6,187,958-byte source archive was recovered with SHA256
`3383d2b9f893b8a3777e790f44f69eba0912776fc97509b302498d0a29c3995c`; ZIP CRC and all 19 payload hashes
passed. Original documents and checkpoints are retained. The catalog's actual imprint is September 2010,
not the historical filename's 2011 label. Official October 2007 product evidence identifies the SWD model
but does not explicitly certify that the earlier prescription remained unchanged.

## Literal prescription and unresolved issues

All 34 optical/filter rows, image row 35, d-line indices and five gaps at three native zooms retain their
source values. Stop r24 travels with G5. The camera LF is 4 mm glass plus 1 mm air, traced by `rearPlates`.
Surface r14 is a cemented interface; there are no aspheres or published numerical clear apertures.

Both original publications print middle f = 101.227 mm. Independent calculations give 100.225234179 mm;
no 100.227 substitution is made. This unresolved source issue has an additive Section G queue row.
Source IH 11.14 mm, prose 11.1 mm and the intended Four Thirds field are kept distinct. The stated fixed
G3 has literal image-fixed drift of 0.011 mm: D17 + D23 + D32 = 57.308 / 57.309 / 57.298 mm. Its cause is
unresolved; nearest-0.001-mm rounding alone does not explain it. No source plane is moved to best focus.

## Rejected G2 trial and selected G4 interpolation

Literal three-point interpolation fails at 0.971656 mm added Gaussian defocus. The original 2,001-state
baseline is preserved. An earlier 33-control G2 compensation improved defocus but reversed G2 locally
imageward by about 1.161 mm. That trial is rejected as a source-mechanism interpretation and preserved,
with its exact model and validation, under `rejected/G2_cam_20261026T111800Z`.

An independent ordinary-angle alternative and the worker's reduced-angle reconstruction instead translate
G4 through opposite D17/D23 changes. G2 keeps its literal interpolation; all native anchors and source
image planes are unchanged. Maximum sampled G4 compensation is 0.699862 mm. Densities 3, 5, 9, 17, 33,
65 and 129 are retained: 17 fails at 0.033106 mm, while 33 is the first tested pass at 0.008875 mm against
the unchanged 0.0092129408 mm reference scale. This is inferred interpolation, not a factory cam.

The final 6,401-state screen confirms monotone objectward G1, G2, G4 and G5, monotone EFL, unchanged
native anchors and maximum actual-EFL readout error 0.050509 mm. The authored source-label error remains
1.012674 mm maximum because the native middle label is preserved. G3's unresolved source drift is not
counted as proof of exact stationarity. All focus endpoints are identical: 90 raw-URL geometry hashes
agree, physical focus availability is false, and no finite cam or marketed-MFD conjugate is invented.

## Clear rims and staged allowance

Approximate original Fig. 3A rims cause four cross-gap failures. A smaller default-safe trial clips the
native tele source marginal beam in G3. Both failures are preserved. The final explicit tapered G3 and
r26 apertures use source beam floors, positive physical clearance and approximate figure proportions;
no source R/d/index is altered and no hidden render trimming is used.

Native tele ray floors require at least 0.911103 and 0.914693 gap-sag intrusion at r12/r13 and r15/r16,
so a 0.90 allowance cannot retain those rays. The final G4 cam was retested at 0.90, 0.91, 0.92 and 0.93;
0.93 is the first passing tested 0.01 stage with 0.1 mm rim increments, not an unconstrained mathematical
minimum. Numerical ray-floor precision is not claimed as figure-measurement precision.

| Surface(s) | Initial radius, mm | Selected radius, mm | Basis |
|---|---:|---:|---|
| r1–r6 | 32.2 | 32.2 | Approximate front drawing; native beam clear. |
| r7–r10 | 22.6 / 21.0 | 20.0 | Opens the r8/r9 gap without clipping the source axial beam. |
| r11 / r12 | 13.2 / 13.2 | 12.2 / 11.5 | Explicit L31 taper; native floor 11.968 / 11.420 mm. |
| r13 / r14 | 13.2 / 13.2 | 11.5 / 12.2 | Explicit L32 taper; native floor 11.445 / 12.064 mm. |
| r14 / r15 | 13.2 / 13.2 | 12.2 / 12.1 | Explicit L33 taper; native floor 12.064 / 12.085 mm. |
| r16 / r17 | 14.0 / 14.0 | 12.1 / 12.8 | Explicit L34 taper; native floor 12.081 / 12.649 mm. |
| r25 / r26 | 15.6 / 15.6 | 14.0 / 13.5 | Clears the r26/r27 gap and native beam. |
| r27 / r28 | 14.8 / 14.8 | 13.5 / 13.5 | Retains positive neighboring clearance. |

The 1,935-state geometry check includes three iris radii and near-infinity raw focus values, with 65 radial
samples per surface pair. Minimum glass thickness is 1.602291 mm, minimum air clearance 0.045338 mm,
maximum gap-sag fraction 0.924242 and hidden trim zero. All 33 aperture census stations fall within 3%;
none is classified as rim-limited, failed, trace-limited or iris-limited.

## Field, ray and MTF scope

Canonical Four Thirds half-diagonal is 10.82 mm. Source IH 11.14 mm is separately checked with a field-only
reference change and identical physical optics. Native source half-angles trace chief-height magnitudes
11.153111 / 11.065010 / 11.065956 mm. No field is silently changed to force agreement.

The final exact-stop audit retains 7,760 transmitted rays, 340 physical clips, 135 unlaunched aiming
failures and zero launched trace failures. A failed aim is not reclassified as vignetting or a passed ray.
The MTF suite uses reference, C/d/F and photopic spectra at native and intermediate zooms, full aperture
and f/8. Best-axial results are diagnostic only. Wide-open photopic half-field T40 near 0.04756 is explicitly
weak; convergence is not production-quality evidence. Glass names are coordinate-compatible dispersion
proxies, not confirmed suppliers or melts. All 54 source-edge MTF requests converge, but the full-aperture
C/d/F source-edge T40 at z = 0.125 is only 0.028028. All 105 nonzero raw-focus requests are guarded as
finite-conjugate unavailable, including values below the first UI step.

## Reproduction and pending gates (closed 2026-10-28; see the deployment validation below)

The source-only harness rebuilds literal JSON, density selection and TypeScript from the original-pixel
transcription, explicit rim policy and pinned formatter. It does not use the candidate as construction
input. Optical outputs bind the exact candidate and source/control/rim hashes. The historical 77ad runtime
and installed dependencies are unchanged. No per-lens test or engine/UI/schema change is committed.

The independent changed-model review at `independent_model_review/20261026T112800Z/model_review.json`
accepts only the qualified infinity-only G4 reconstruction, with all unresolved source and quality limits retained.
Source-only replay is byte-exact. Combined corpus checks, actual viewer QA and verified finished private package
readback remain distinct coordinator gates. No deployment, public sharing or alternate-host action occurred.
(Closed 2026-10-28 by the deployment validation below.)

## 2026-10-28 — Deployment validation and wording pass

Source re-read: all 34 rows of Numerical data 3 (R, d, nd, νd), the stop, the cemented r14 and the five variable
gaps at the three printed states were checked against the A1 page images (pp. 10–11) and the B2 (p. 10); there are
no aspheres. Mismatches: none. The low-pass filter plate (4.000 mm, 1.51633/64.14, 1.000 mm to the image) matches
r33–r35. The front page (US 2004/0042087 A1, 4 March 2004, Hideyasu Takato, Olympus Optical Co., Ltd.) matches the
source fields.

Patent vs model: EFL 52.468 / 101.227 / 202.201 vs 52.466 / 100.225 / 202.191 mm; paraxial focus 0.002 / 0.002 /
0.005 mm ahead of the printed plane; total length 194.718 / 241.348 / 261.504 mm; Conditions (1)–(5) and (10)
reproduce exactly (3.629, 2.785, −0.110, 0.287, 1.939, 3.223). Chief rays at the printed half-fields land at
11.153 / 11.065 / 11.066 mm and exit at 7.42°–5.75° (patent |EW| 5.8–7.4°). Middle label: no single digit, sign or
transposition slip in any middle gap reproduces 101.227 mm in focus (closest D10 = 4.639: 101.263 mm, 0.58 mm
defocus); a radius or thickness slip would break the wide and tele values; the f-number-implied stop radii are
smooth with 100.225 mm and bump with 101.227 mm. The label is most likely a typo for 100.227 mm; it stays an
unresolved erratum. Zoom path: only D23 reverses (required by the printed 1.000 / 5.932 / 1.000); G1, G2, G4 and G5
move objectward; maximum paraxial defocus over stations and quarter points 0.0079 mm. Table 1's Δd/ft = 0.102 at
tele gives −0.254× about 1.05 m from the image, against the product's 1.2 m and 0.21×.

Maker comparison: Olympus lists the original and SWD versions identically (16 elements / 15 groups, 3 ED, 24°–6.2°,
1.2 m, 0.21×); the September 2010 catalog drawing and the original instruction sheet show the same 3 + 2 + 4 + 3 + 2
+ 2 layout, and the catalog colors L12, L43 and L51 as ED, exactly this example's νd 81.54 elements (Embodiments 1
and 2 have a fourth at L13). Photozone states the design was inherited by the SWD version. The two versions share
this optical design, so the earlier SWD-generation caveat is withdrawn.

Fields changed in this pass: numeric literals with more than 6 decimals rounded to 6 (element focal lengths,
intermediate station focal lengths and f-numbers, reconstructed gaps; printed values unchanged, engine values within
5e-6 mm); `name` → "OLYMPUS ZUIKO DIGITAL ED 50-200mm f/2.8-3.5 SWD"; `subtitle` → "US 2004/0042087 A1,
Embodiment 3 — probable production correlation"; `specs` replaced by the corpus form; header comment and the
erratum note rewritten in plain terms with the slip finding; element `name` set to the patent notation (L11–L54) and
`label` to "Element N"; `role` rewritten per element; `apd: "patent"` with notes on L12, L43 and L51 (¶0025 names anomalous-dispersion glass for G1, ¶0045 for G4 and G5 around the stop; each is its unit's only νd 81.54 element, read from the page images); glass
parenthetical shortened to "(catalog equivalent; supplier unconfirmed)" with identical resolved glass;
`focus.description` rewritten. The analysis now states the shared design, drops process vocabulary, and renames
"Verification Status" to "Model Scope and Limitations"; its half-field MTF figure was recomputed on the current engine
(T40 ≈ 0.043 at the wide end, f/2.8).

Open: the middle-label erratum needs its Section G queue row (added by the coordinator).
