## Patent Reference and Design Identification

**Patent:** JP S54-55424 A (JPS5455424A)  
**Application Number:** S52-121372  
**Filed:** 1977-10-12  
**Published:** 1979-05-02  
**Inventor:** Toshiko Shimokura (下倉敏子)  
**Applicant:** Konishiroku Photo Industry Co., Ltd.  
**Title:** 望遠写真レンズ  
**Example details:** Example1, original PDF3–4 / printed149–150; normalized f1, F4, fullfield12°. Figure1 supplies approximate outline ratios rather than factory clear apertures.

This private reconstruction uniformly scales every literal prescription length by200. The scale correlates the patent with the 1980 Konica/Berkey200mmf4 sheet; it does not adjust radii to make the derived focal length exactly200mm. That sheet supports five elements in five groups, fullfield12° and the compatible section. Exact factory prescription, revision and serial ranges remain unproven. Source pixels were inspected by the source reviewer; this numerical worker used the verified readable handoff and did not inspect originalPDF pixels locally.

The printed normalized R9 is2.3145. The obsolete2.3445 transcription is invalid history. Printed Petzval terms sum0.0637, correcting the earlier0.0635 report. The literal radius/index sum is0.062657891477561; the0.001042108522439 residual remains. Conditional rounding intervals in the source audit do not establish its cause. No prescription tuning is applied.

## Optical Architecture

Five separate spherical singlets form a positive-negative-positive front section and a negative-positive rear section. The long central air gap gives a telephoto arrangement. All statements of element role below are paraxial interpretation of this prescription, rather than proof of the designer's detailed aberration allocation. There are no cemented interfaces, aspheric terms, cover plates or modeled coatings.

The infinity Seidel caption explicitly places the stop0.15f behindS6, at normalizedz0.330. At the200scale the source67mm S6–S7 interval is split30+37mm, placing the stop atz66mm. Stop radius is not printed; the native F4 circular-iris convention gives13.5619302002mm.

A single clear-aperture hypothesis is frozen before tracing. The nominal entrance-pupil radius25mm receives8% initial clearance, giving an L1 anchor27mm. The inherited Figure1 group ratios[1,.845,.819,.503,.535] give group SDs[27,22.815,22.113,13.581,14.445]mm, repeated on paired faces. Approximate ratio uncertainty±.05 includes endpoint ambiguity and unknown schematic distortion; it is neither a confidence interval nor factory tolerance. Figure1 is not a dimensioned manufacturing section. No individual aperture is enlarged to improve clipping or contrast.

## Element-by-Element Analysis

### L1 — Biconvex Positive

nd=1.51633, νd=64.1. Glass: unmatched crown-class coordinate; vendor unresolved. f=+116.0103931mm (isolated thick-element calculation). The positive first element begins converging the incoming beam; its clear radius is the modeled global outline anchor.

### L2 — Biconcave Negative

nd=1.7552, νd=27.5. Glass: unmatched flint-class coordinate; vendor unresolved. f=−135.2081550mm (isolated). The negative element interrupts front-section convergence. Its greater dispersion can provide chromatic compensation with the two neighboring lower-dispersion positive elements, but no measured broadband performance is inferred.

### L3 — Positive Meniscus

nd=1.51633, νd=64.1. Glass: same literal crown-class coordinate asL1; supplier identity unproven. f=+170.8204709mm (isolated). This positive element completes the front section before the long stop-containing air space.

### L4 — Negative Meniscus

nd=1.7725, νd=49.6. Glass: unmatched high-index coordinate. f=−56.0921637mm (isolated). Its negative power begins the compact rear section. The literal strongly curved front radius−28.22mm and frozen SD13.581mm are retained; the native geometry has positive center and edge thickness.

### L5 — Biconvex Positive

nd=1.80518, νd=25.4. Glass: unmatched high-index, high-dispersion coordinate. f=+104.7447325mm (isolated). The final positive element follows L4 across a1mm axial air gap. R9=462.9mm at the uniform200scale, with no fitted replacement.

## Glass Identification and Selection

The model retains the source nd/Vd coordinates and evaluates normal monochromatic diffraction at587.5618nm. No catalog-glass match, full anomalous dispersion or glass vendor is established. The reference-wavelength run uses the literal authored indices; an Abbe-based spectral proxy would require a separate qualification. Coatings, scattering, absorption calibration, polarization and camera sensor processing are not modeled as historical measurements.

## Focus Mechanism

Only the source's infinity condition is constructed. The manufacturer2.5m minimum distance is metadata and supplies no finite-state prescription or motion law. The printed last gap0.261f fixes52.2mm and an authored source image plane161.7mm. The independent two-method paraxial diagnostic gives EFL200.1783311464mm and BFL52.3044120806mm, with imagez161.8044120806mm. That derived plane does not replace the printed-gap plane.

The public API's geometric axial-focus diagnostic reports+0.0838943042mm; design mode applies exactly0mm. It is a diagnostic using the frozen rays, not a revised prescription or diffraction best-focus proof.

## Bounded Corrected Two-Dimensional Comparison

Fixed prescription, nominal200scale, figure-informed apertures, sourced stopz66mm and printed-gap image plane161.7mm remain unchanged. Reference wavelength587.5618nm; no refocus. This is a hypothetical source/detector construction, not a factory or independent physical validation.



The v2 checkpoint evaluated exact0/3/6degree fields under conditional source-plane irradiance and a scalar electric-field detector, with |H(q)|²=T*K/(Jq*cosθimage) and actual saved launch-area determinantK. Its original3degree64→128 source change0.0092845808 remains preserved history. The final v3 closure supersedes that3degree sampling selection with source128→256 and separate angular512→1024 refinement: full conditional source changes are0.0059316849MTF /0.0059376692complexOTF on angular512, and0.0060440619MTF /0.0060510319complexOTF on angular1024. Source triangle phase maxima are0.1097587216/0.0567794530waves; the primary full-pupil angular change is0.0002710095MTF /0.0002785225complexOTF. Selected discrete practical gates pass through the sampled frequencies. These are conditional scalar research results, not factory, continuum-error, illumination or independent ray-tracer validation.

Matched-intersection pupils are normalized separately at both endpoints and energy denominator, and never substitute for full pupils. New per-surface clipping is retained. Original dense downstream clipping locations remain unknown. The withdrawn fixed-row/column reference is never called. Same-bundle differences from native sheared estimates include phase/shear approximation, interpolation and sampled support; amplitude-policy differences are reported separately.

## Sources and Reproducibility

1. Primary JPS5455424A Example1 original and complete source audit, privately preserved at Drive`1yr21zizf_ZU6oNe5-HTasVjI7xshncoQ`; readable source`19jxRhCSNsluDcxZeLesjsB2Zj3vp2II0`. The original sourceZIP is retained unchanged by reference; its signed-host download is unavailable in this numerical environment.
2. Konica/Berkey1980 product sheet catalog703-193, brochurePDF17, source review custody and qualifications in the original source archive. It correlates product topology and metadata, not an exact factory prescription.
3. Readiness and conditional acceptance report`10bGFCgKQjqrVuYS7-YaLxrl-fPx6h0GN`.
4. Private `freeze.json`, `first-order.json`, `review-summary.json`, raw bundles, execution ledger, paired data and scripts. Production commit and source hashes are recorded in `code-identity.json`. No catalog integration, commit, PR, deployment or publication occurs.

## Private Integration Descendant

This analysis incorporates the final3degree v3 closure without changing any optical field. The one new256source sample retains49094valid and2374blocked cells, all first-clipped atS1, with zero failed/unaimed/unknown flux. Original128downstream clipping locations remain unavailable. The live viewer uses the native sheared scalar MTF estimate; the corrected two-dimensional checkpoint is separate conditional research. The withdrawn one-dimensional fixed-row/column reference supplies no validation. All advertised apertures retain the same inferred clear apertures and sourced stop plane. Retail2.5m metadata supplies no finite configuration.


### Private integration presentation descendant — 2026-11-01

The current-main metadata descendant uses the display name and focus description to expose the hypothetical patent pairing, inferred apertures and iris opening with a sourced stop plane, and infinity-only scope with the full analysis viewer disabled, including comparison headers. The retail minimum-focus distance remains descriptive prose; closeFocusM now uses the existing finite 1e15 infinity-only convention with no focus motion. All optical prescription fields, frozen apertures, stop, source plane, field and wavelength conventions are unchanged. The earlier shared static-focus UI patch is optional and is not a lens dependency on current main. It supplies no finite optics or factory validation. Prior source/numerical evidence and metadata errata remain intact.


## Current-main infinity metadata descendant

The prescription, stop, clear apertures, fixed image plane, native and qualified conditional scalar research evidence are unchanged. Current main e1414bf uses a finite closeFocusM sentinel of 1e15 for static infinity-only models; the retail minimum-focus distance above is descriptive and does not supply finite performance. Default focus and published-position mode remain infinity. The existing raw focus=1 SUMMARY huge-distance label and BREATHING sentinel chart are shared main UI quirks also reproduced on the deployed canonical infinity-only control; they are recorded separately and do not establish finite optical support. The original paired-patch release candidates remain archived unchanged. No UI or optical engine changes are included in this descendant.
