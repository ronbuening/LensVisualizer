## Patent Reference and Design Identification

**Patent:** US 7,843,651 B2
**Filed:** August 10, 2009
**Granted:** November 30, 2010
**Inventor:** Yasuo Kanazashi
**Assignee:** Hoya Corporation
**Title:** Wide-angle lens system
**Example details:** Table 1, Fig. 1 and Figs. 2A–2E; literal millimetres, no scaling.

This is a qualified reconstruction of the probable original smc PENTAX-DA 15mm f/4 ED AL Limited family. Embodiment 1 is a representative whole prescription among eight variants, not a uniquely established production prescription. The source is 15.45 mm at F/4.1, rather than the marketed 15 mm and f/4. Those differences are retained.

1. The original product's eight-glass-element/six-group architecture, hybrid asphere and ED glass support the family correlation.
2. The patent's focal length, aperture, APS-C image height and long rear clearance fit that family.
3. The retained maker section is from the later HD product. Its architecture corroborates the family but does not prove that the smc and HD versions share this prescription.

The 0.18 mm resin layer is a separate modeled material entry so its printed refractive index and Abbe number survive. There are eight glass elements plus resin, not nine claimed retail glass elements. Source semi-diameters and iris radius are absent. The current caps are provisional rounded Fig. 1 envelope hypotheses; they are not factory clear-aperture measurements.

## Optical Construction

The negative first group contains the hybrid front negative meniscus and a positive meniscus. The negative second group contains a negative meniscus and a cemented positive/negative pair. The positive third group contains a negative/positive cemented pair and a positive final element. The stop is printed 3.13 mm ahead of S11. At infinity, the printed S10–S11 gap of 5.19 mm is split arithmetically into 2.06 mm before the stop and 3.13 mm after it.

All 15 refracting interfaces are retained, including the glass/resin boundary and the resin's aspheric exit surface. No gap, glass, radius or asphere has been optimized. The air-core paraxial EFL is 15.44892156 mm, the rear vertex is 41.82 mm behind S1, and the derived air focus is at 79.31026160 mm.

The patent defines back focal distance generically from the rear of cover glass, but Table 1 and Fig. 1 do not specify a plate. The core's derived air back focus of 37.49026160 mm closely agrees with printed 37.49 mm. This supports internal consistency without proving the intended source plane convention. S15's source spacing remains blank in the transcription; the model uses a separately labeled derived air-focus gap. No camera cover plate is invented.

## Element-by-Element Analysis

### L1 and Resin — Hybrid Negative Front Meniscus

L1: nd = 1.80400, νd = 46.6. Glass: unspecified patent glass. Resin: nd = 1.52972, νd = 42.7. Material: unspecified optical resin. Isolated substrate and resin powers are available in the data file; these are not an allocation of in-system group power.

The glass substrate occupies S1–S2, and resin occupies S2–S3. The resin is only 0.18 mm thick on axis. Its aspheric image-side face provides the hybrid profile described in the patent. This front negative assembly helps provide the retrofocus clearance. No particular resin chemistry or supplier is asserted.

### L2 — Positive Meniscus

nd = 1.62004, νd = 36.3. Glass: unspecified patent glass.

The positive S4–S5 meniscus closes the first negative group. Its weaker rear curvature and positive power partially balance the front hybrid's divergence. This is a structural description, not an independently measured aberration allocation.

### L3 — Negative Meniscus

nd = 1.83481, νd = 42.7. Glass: unspecified patent glass.

The S6–S7 high-index negative meniscus opens the second group. Its stronger rear curvature gives negative isolated power. It works with the following cemented pair; the whole group is described as negative by the source.

### L4/L5 — Cemented Positive/Negative Pair

L4: nd = 1.69895, νd = 30.1. L5: nd = 1.80400, νd = 46.6. Glasses: unspecified patent glasses.

The pair runs S8–S10 with its cemented junction at S9. L4 is biconvex and L5 a negative meniscus. The differing indices and dispersions provide chromatic and power-balancing freedom ahead of the stop. No partial dispersion or melt identity is recovered.

### L6/L7 — Cemented Negative/Positive Pair

L6: nd = 1.80518, νd = 25.4. L7: nd = 1.49700, νd = 81.6. Glasses: unspecified dense flint and low-dispersion crown classes.

The S11–S13 pair begins the positive third group. S11 is literally −42.598 mm, not the erroneous −12.598 mm in an earlier compact transcript. The high-dispersion negative component and low-dispersion positive component support chromatic balancing. The high Abbe number is consistent with an ED role but does not establish partial dispersion or production supplier.

### L8 — Positive Rear Element

nd = 1.48749, νd = 70.2. Glass: unspecified low-dispersion crown class.

S14–S15 completes the positive third group. S15 is literally −17.739 mm, not the erroneous −7.739 mm in the earlier compact transcript. This rear positive element contributes converging power while preserving the long air-core rear clearance.

## Glass Identification and Selection

The source prints d-line refractive indices and Abbe numbers for every glass interval and for the resin. Those values are retained exactly. No factory melt or supplier is claimed, and no catalog spectral coefficients are copied into the prescription. The resin is modeled as a material entry because the undrawn-media schema carries only nd and would otherwise lose its printed νd. Native spectral validity and any catalog/proxy resolution must be reported with later MTF results; an nd/νd proxy is not measured resin dispersion.

## Focus Mechanism

The patent moves the first and second groups together toward the object, with the third group and stop moving faster toward the object. Its near state reduces d10 from 5.19 to 4.57 mm and changes printed fB from 37.49 to 39.83 mm. This checkpoint models infinity only. The near values remain in the evidence but are not implemented as certified focus motion. The schema's 1000 m endpoint is a static UI placeholder, not a minimum-focus claim.

## Aspherical Surfaces

S3, the resin/air interface, uses the standard conic-plus-even-polynomial sag convention. Its literal coefficients are K = −1, A4 = 2.64942 × 10⁻⁵, A6 = 1.0204 × 10⁻⁷ and A8 = −6.9952 × 10⁻¹⁰ in millimetre units. Unlisted terms are zero. These are not scaled or fitted. The source explicitly describes the front assembly as a hybrid aspherical element.

## Validation Status and Limitations

Static source roundtrip, paraxial arithmetic, positive material thickness, bounded rim slopes and sampled air-gap separation pass for the provisional caps with the default 90% gap-sag allowance. No allowance override is used.

The bounded native pilot passes buildLens and reports zero hidden trim for all nine material entries, including both faces of the explicit resin. Iris clearance is 2.06 mm ahead and 2.95855 mm behind. The source paraxial aperture remains F4.1; the exact axial beam is limited by the iris rather than a glass cap. Its finite-ray entrance radius is 1.817254705 mm, whereas the paraxial pupil radius is 1.884014824 mm. EFL divided by twice the exact radius is 4.25062087; this is not substituted for the source paraxial F-number.

A 208-sample pupil grid gives unvignetted fractions of 100%, 95.19%, 84.62% and 24.04% at 0°, 21.48°, 32.22° and 42.96°, with zero failed or unaimed samples. The inferred caps therefore have substantial corner vignetting, not certified factory illumination. The full-field chief image height is approximately 14.2369 mm, consistent with the printed 14.24 mm.

Native reference-only diffraction MTF has been computed at 587.5618 nm. Both the authored derived-air image plane and the separately labeled diagnostic best-axial plane converge within 0.01 MTF through 40 lp/mm at format-height fractions 0, 0.5 and 1. The corresponding angles are 0°, 24.73891218° and 42.83709045°, not the angular fractions used in the earlier throughput pilot. Grids are 32, 64 and 128, with 812, 3016 and 3598 valid rays and 0, 212 and 9294 blocked rays. No failed or unaimed rays or unresolved flux are reported. The corner remains strongly vignetted.

The design plane remains 79.31026160 mm without a shift. Best-axial focus shifts −0.090294282 mm for diagnostic comparison only; the authored geometry is unchanged. Convergence applies only to the sampled frequencies 0, 10, 20 and 40 lp/mm and these fields. It does not certify factory performance.

C/d/F and photopic MTF are blocked because the νd = 81.6 glass lacks partial-dispersion data under the current explicitly unmatched glass labels. Lightweight native support inspection confirms that reference-only MTF at 587.5618 nm is available and uses the authored d-line indices directly (useResolvedReference=false). No catalog match or material curve is required or invented. The reference calculation does not recover missing dispersion or measured production behavior. Standalone integration results and guarded-installer checks are recorded separately in the package gate summary. The scope remains a qualified source model, not certified factory performance.

## Sources

- [US 7,843,651 B2](https://patents.google.com/patent/US7843651B2/en), Table 1 and Fig. 1; primary PDF and table pixels retained in evidence.
- [Primary grant PDF](https://patentimages.storage.googleapis.com/77/5c/a3/66f0f9a5de86bc/US7843651.pdf).
- [Ricoh HD PENTAX-DA 15mm product page](https://www.ricoh-imaging.co.jp/english/products/lens/k/wide/hdpentax-da-15/), used only as later-family architecture corroboration.
- [Verified correction addendum](https://drive.google.com/file/d/1rbyazGnBYYYiBLMRhYE-NeeNXUqEOav5/view), retained corrected-source custody; the earlier source archive remains unchanged.
