## Patent Reference and Design Identification

**Patent:** [US 2,188,523 A](https://patentimages.storage.googleapis.com/ad/f8/4a/0e7ec43f07063c/US2188523.pdf#page=2)
**Inventor:** Ludwig Bertele
**Assignee:** Zeiss Ikon AG
**German filing:** January 8, 1938, as stated in the US document
**Filed:** September 14, 1938; serial 229,819
**Granted:** January 30, 1940
**Example details:** Original page 2 numerical table, literal millimetre scale

This hidden reconstruction represents the patent example, without a verified retail Sonnar or Jupiter-9 identification. DE700699 and US2254511 have different prescriptions. Source figures, indices and Abbe numbers were independently read from original pixels by the parent research specialist. This executor independently checked the transcription numerically and natively; its web-tool attempt to open the scan failed, so no local pixel verification or original scan bytes are claimed.

## Reconstruction Status

The patent supplies ten signed radii, nine intersurface distances, seven nD/Abbe pairs, seven elements in three groups and nominal 100 mm f/2. All are preserved. The source does not supply clear apertures, iris diameter, the iris split, diagnostic field or rear image distance.

The modeled iris lies 79% through the unchanged 9.54 mm R6–R7 air gap: 7.5366 mm after R6, 2.0034 mm before R7, z = 31.5766 mm. This is a clearance-tested estimate, not a German-example stop transferred into this design. Clear semidiameters S1–S10 are estimated at 30, 29.6, 25.4, 24.5, 22.9, 17.4, 17.3, 18.6, 19.9 and 21.1 mm. They bound a useful sampled pupil while retaining explicit peripheral clipping; they are not measured mechanical rims or guaranteed factory clear diameters. No separate mechanical shoulders or baffles are asserted.

The chosen 0–10° half-field and 36.2 mm diagnostic image-circle envelope are modeling scope, not source coverage, a camera format or a production specification. The envelope rounds up the largest sampled Gaussian-plane image radius. Sparse sampling cannot prove a global maximum.

## Optical Architecture

A positive front singlet precedes a cemented triplet and a rear cemented triplet: 1 | 3 | 3. Four internal cemented interfaces share exact curvature and axial station. No published radius, thickness, material or air gap has been fitted. Reduced-angle D-line calculation gives EFL 100.047854508 mm and rear-vertex BFD 54.625853960 mm; the latter defines the derived infinity image plane at z = 122.755853960 mm.

## Element-by-Element Analysis

| Element | Source nD | Source νD | Shape |
|---|---:|---:|---|
| L1 | 1.6200 | 60.3 | Positive meniscus |
| L2 | 1.7015 | 41.2 | Positive meniscus |
| L3 | 1.5487 | 45.8 | Biconvex positive |
| L4 | 1.6883 | 30.0 | Biconcave negative |
| L5 | 1.6200 | 60.3 | Positive meniscus |
| L6 | 1.5150 | 50.0 | Biconcave negative |
| L7 | 1.6682 | 48.8 | Biconvex positive |

These are literal historical material coordinates, with no exact modern catalog glass assigned. Sodium-D tracing uses the application's documented 589.2938 nm center convention. Abbe-derived spectral outputs remain runtime estimates, not measured glass curves; only the D-line ray claims are qualified here. No calibrated chromatic or polychromatic MTF claim accompanies this model.

## Focus, Aperture and Field Limits

Only infinity is supported. There is no finite focus prescription or inferred focusing mechanism. Source nominal f/2 remains unchanged. The ordinary prime convention derives a 32.641262798 mm physical iris diameter paraxially; the native finite axial accepted entrance radius is 24.741468385 mm, corresponding to EFL/(2r) = f/2.021865739. This small difference is disclosed, not repaired.

A separate independent axial ray launched at EFL/4 crosses the estimated iris at radius 16.500750669 mm (33.001501339 mm diameter). Matching that diagnostic diameter would require an explicitly labeled Builder Advanced JSON tuning copy with paraxial nominal input about f/1.978168354 and matching first f-stop/catalog design metadata. The isolated control validates that edit and its axial ray without changing any surface or glass. Direct air-stop semi-diameter edits are unsupported, and the ordinary viewer does not widen beyond source f/2. The saved model retains f/2. Any tuned copy needs full field revalidation.

## Validation and Limitations

Native geometry accepts the original prescription at the default 90% gap-sag limit, with zero render trim and no overrides. Minimum sampled glass edge thickness is 1.276274679 mm. The critical R6–R7 shared-edge clearance is 1.133212114 mm (88.121466% sag intrusion). The 0.38 mm front air gap widens toward its shared edge. Iris-plane clearance is positive for the opening and full adjacent caps.

Across six iris/rim/aperture cases and six fields, 20,772 physical 3D input samples yield 19,040 detector arrivals, 1,732 explicit iris/rim clips and no propagation failures. The 12.5° sample is outside modeled scope. A separate denser baseline uses 7,685 samples across 0°, 2.5°, 5°, 7.5° and 10°: 7,270 arrivals and 415 explicit clips, with no propagation failures. At 10° the denser pass records 65 iris clips and 21 clips on estimated optical rims (S1/S2/S4/S5). These are ordinary modeled peripheral losses, retained in the evidence; no zero-vignetting or throughput assertion is made. Every in-scope chief ray completes. Input rings are diagnostic samples, not a calibrated throughput integral.

Native and independently implemented vector-Snell spherical traces agree on completed ray surfaces and detector locations to better than 1.3e−13 mm. Rim estimates ±0.1 mm, iris station fractions 0.78/0.79/0.80, and an f/4 control retain positive physical geometry. Source spectral performance, measured MTF, full factory field, tolerances, scatter, baffles, finite focusing and production identity remain outside qualification. Builder rendering tests establish UI health only; estimated native spectral panels are not additional optical evidence.

## Design Heritage and Sources

The bounded duplicate screen evaluates full current-main and 19 open-PR-head model bodies, plus 2,438 retained readable historical numerical profiles. Uniform positive scale and reversed-negated curvature sequences are checked; no match is found. Archive byte verification is recorded separately. Inaccessible private history is not claimed to have been searched exhaustively. No new catalog entry, public release or packaging count is authorized by this checkpoint.
