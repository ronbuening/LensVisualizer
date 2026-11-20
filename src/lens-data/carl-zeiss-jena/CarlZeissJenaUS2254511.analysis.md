## Patent Reference and Design Identification

**Patent:** US 2,254,511 A, _Photographic objective_.
**Filed:** March 8, 1940, US; February 28, 1939, Germany.
**Granted:** September 2, 1941.
**Inventor:** Ludwig Bertele.
**Assignee:** Zeiss Ikon Aktiengesellschaft.
**Example details:** Literal 100 mm f/1.4 numerical prescription, eight elements in three groups, 1 | 3 | 4.

This is an app-ready private patent reconstruction under the repository nominal/paraxial aperture convention. No manufactured identity is assigned. The known seven-element US2188523/DE700699 designs are not substituted. A parent researcher verified the original drawing/table; this executor used that attributed transcription, independently corroborating context with readable indexed patent text. The direct original PDF was inaccessible locally through the web tool. No local pixel verification or scan-byte hash is claimed.

## Optical Architecture

A singlet precedes a cemented triplet and a cemented quadruplet. The diaphragm lies in the source 13.50 mm gap between R6 and R7. The source's approximately 45° statement concerns earlier objectives and is not this example's field.

All eleven spherical radii, eight thicknesses, the 0.24 and 13.50 mm air gaps, and eight nD/Abbe pairs are retained literally. Independent paraxial EFL is 100.0073893 mm, rear-vertex BFD 46.0394686 mm. No source BFD is printed; the image plane at z=122.8794686 mm is calculated Gaussian infinity focus, without fitting or rescaling. The full f/1.4 marginal ray focuses at z≈121.988091 mm in the independent calculation; its Gaussian-plane height is −0.346121 mm. No best-focus replacement is made.

## Element-by-Element Analysis

### G1 — L1 Positive Meniscus

nD = 1.6202, νD = 60.3. Glass: unidentified historical source material. Thickness 9.8 mm, bounded by R1=+74.40 and R2=+756.80 mm. The front and rear clear radii are estimated at 37 mm.

### G2 — L2–L4 Cemented Triplet

L2: nD=1.7015, νD=41.1; L3: nD=1.4450, νD=68.4; L4: nD=1.7219, νD=28.1. Glasses: unidentified source materials. The respective thicknesses are 11.10, 8.4 and 2.0 mm; R4 and R5 are shared cemented faces. Clear radii R3–R6 are estimated as 32, 31, 29.5 and 21.5 mm. The exit R6 is strongly curved, which constrains a physically clear iris plane toward the back of the air gap.

### G3 — L5–L8 Cemented Quadruplet

L5: nD=1.6385, νD=55.5; L6: 1.5150/50.0; L7: 1.6689/48.8; L8: 1.6102/56.5. Glasses: unidentified source materials. Thicknesses are 8.0, 1.2, 20.0 and 2.6 mm. Three shared interfaces retain the source's four-element rear group. Its five clear radii are estimated at 21 mm.

## Glass Identification and Dispersion

Source sodium-D indices and Abbe values remain exact. No catalog melt or measured spectral indices are invented. Native glass quality is `abbe` with no matched catalog entry: auxiliary channels are uncalibrated approximations. Only the native G channel equal to literal source nD is independently ray-checked; no chromatic, polychromatic MTF or transmission claim is made.

## Focus Mechanism

Infinity only. No source focus schedule or production focus mechanism is inferred. The software's very large close-focus setting is a historical infinity-only convention, not a physical focus range.

## Iris, Geometry and Estimated Aperture

The iris location within the 13.50 mm gap is unspecified. This draft estimates z=43.69 mm, 90% through that gap. A midpoint iris would intersect the curved group. At the chosen station, estimated whole-cap clearances to its neighbors are 0.3181 and 1.0520 mm. Positions at 88% and 92%, and clear-radius sensitivity ±0.1 mm, retain real clearance, positive glass edges and zero render trim. All checks use defaults; no gap-sag override is needed. Across the shared radial band, the 0.24 mm gap never becomes smaller than 0.24 mm, and the second gap retains at least 2.1291 mm baseline clearance.

**The source f/1.4 is not silently replaced by a slower aperture.** The ordinary-prime native rule derives iris diameter 41.092830 mm for nominal/paraxial f/1.4. Finite tracing gives admitted axial launch radius 34.868193 mm rather than the f/1.4 reference 35.716925 mm, equivalent to finite entrance-pupil f/1.434078. A physical iris estimate of diameter 42.052389 mm passes all 577 axial f/1.4 grid rays in a separate supported trace-option diagnostic, retaining approximately 1.039/1.051 mm opening clearance. That estimate is not a factory measurement or an authored native model state.

An ordinary V2 prime derives its iris from nominal F/N; the published source nominal remainsf/1.4. This model is app-ready under that repository convention, with its finite difference disclosed. The ordinary viewer cannot open further. In Builder, editing Nominal f-number to approximately1.368054549 indirectly reaches the42.052389 mm iris (display1.37), independently tested in memory at577/577 axial arrivals. That changes the nominal parameter and needs revalidation; no such edit is saved. Direct STO.sd remains unsupported for ordinary primes, and no schema identity is invented.

## Modeled Field and Tests

The chosen diagnostic full field is 10°, not a published coverage claim. Six iris/rim/aperture cases at half-fields 0°, 1°, 2.5°, 5° and 7.5° give 17,310 launches: 15,286 complete, 1,780 explicit clips and 244 raw noBracket terminations. The existing native classifier proves all 244 are blocked first-surface cap misses; independent underlying sphere hits have radii 38.673–42.495 mm outside the estimated 36.9–37.1 mm front caps. No unresolved native failure remains. These raw records are preserved rather than dropped or called transmitted. Every sampled chief completes. Counts are not radiometric throughput.

Completed surface and Gaussian-image hits agree with independent signed-sphere/vector-Snell tracing within 2.3e−13 mm. That is numerical agreement, not prescription/manufacturing precision. Types, shared tests, native JSON roundtrip and viewer health pass; spectral/MTF panel values are not qualified. App-ready at the disclosed nominal/paraxial, infinity/D-line scope; no exact finitef/1.4 or retail performance is claimed.

## Sources

- [US2254511 original](https://patentimages.storage.googleapis.com/23/32/db/87601938e01b5d/US2254511.pdf), parent verified drawing/table.
- [Readable patent context](https://patents.google.com/patent/US2254511A/en), used for context and topology rather than faulty radius OCR.
