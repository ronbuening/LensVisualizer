## Patent Reference and Design Identification

**Patent:** US 3,958,865 A\
**Title:** Retrofocus Type Lens System\
**Granted:** May 25, 1976\
**Inventor:** Yutaka Sakai\
**Assignee:** Fuji Photo Optical Co., Ltd.\
**Example details:** Sole numerical design, Table I on PDF page 4; Figure 1 on PDF page 2; all dimensions scaled by exactly 24.

The model represents the probable design family of the original **M42 EBC Fujinon W 24mm f/2.8**. The association is supported by the Fuji patent provenance, nine-element/eight-group construction, F/2.8 aperture, 84° field, long SLR back focus, and the patent's explicit practical 24 mm application. These identify a representative design, not a uniquely established factory prescription. The M42 and 35 mm format metadata describe that correlated product. The later **X-Fujinon** model derived from US 4,158,482 is a separate prescription.

The patent does not call this design “Example 1.” Its sole Table I is normalized to f = 1.0, with a printed back focal length of 1.560. Multiplication of every radius and axial interval by 24 gives a 38.40 mm first-to-last-vertex length and a **37.44 mm source back-focus gap**. The image plane remains 75.84 mm behind the first vertex. No curvature, index, spacing or scale was optimized to force agreement with a production lens.

The numerical transcription was checked directly against the supplied Table I page image, and the rendered section was compared with the supplied Figure 1 image. The figure supports the element order, cemented interface, stop gap and relative element outlines. It supplies no complete clear-aperture dimensions. The full PDF file has not been locally hash-verified; direct page-image inspection and the byte-exact table transcription are the source evidence used here.

## Optical Architecture

The all-spherical retrofocus layout has **nine elements in eight air-separated groups**. A positive front meniscus L1 precedes two negative menisci L2 and L3. L4 and L5 restore positive convergence before the stop. The rear sequence comprises the cemented L6/L7 doublet, positive meniscus L8 and final positive lens L9. This front-negative/rear-positive arrangement provides the back focus required for an SLR application.

L6 and L7 share the physical surface **12**, with an index transition directly from 1.76182 to 1.77252. There is no air interval at this interface. The independent rear interval after surface 13 remains 1.44 mm at the representative scale.

Figure 1 places the stop in d10, between surfaces 10 and 11, nearer L5 than L6. The model uses an inferred **0.80/1.84 mm split** of the 2.64 mm gap, about 30% of the way from L5 to L6, or z = 25.04 mm. The source does not dimension the exact split or iris diameter. The shared aperture rule derives its radius from the source F/2.8 setting. This choice needs no change to any refracting face or source interval.

## Element-by-Element Analysis

The following coordinates are the literal **sodium-D nD / νD**, stored in the schema's historical `nd` / `vd` fields with `indexReference: "D"`. Every glass remains **Unmatched (patent sodium-D / Abbe; supplier unknown)**. Focal lengths are computed isolated thick-element values in air at the representative scale; the L6/L7 values do not describe the power of their cemented combination.

### L1 — Front Positive Meniscus

nD = 1.60717, νD = 40.2. Glass: unmatched source coordinates. f = +107.2093 mm.

Both faces are convex toward the object, with a stronger front curvature. Its positive power precedes the two diverging menisci. The inferred 15 mm clear radius follows the source's approximate 30 mm effective front-lens diameter; it is not a per-surface aperture table.

### L2 — First Negative Meniscus

nD = 1.69350, νD = 53.4. Glass: unmatched source coordinates. f = −43.2314 mm.

The rear face is more strongly curved than the front face, giving negative power. The relatively high index supports a strong diverging member with a 1.20 mm center thickness.

### L3 — Second Negative Meniscus

nD = 1.69350, νD = 53.4. Glass: unmatched source coordinates. f = −27.3718 mm.

L3 repeats L2's published glass coordinates but has different bending and stronger negative power. Together they form the diverging part of the retrofocus front assembly. Equal coordinates do not establish a named supplier or melt.

### L4 — Positive Meniscus, Convex to the Image

nD = 1.64769, νD = 33.9. Glass: unmatched source coordinates. f = +174.9579 mm.

Its two negative radii form a weak positive meniscus facing the image. It begins the positive rear assembly after the 3.84 mm air gap following L3.

### L5 — Biconvex Positive Lens Before the Stop

nD = 1.72825, νD = 28.3. Glass: unmatched source coordinates. f = +31.6569 mm.

The comparatively thick biconvex element supplies strong convergence before the air stop. Its low Abbe number is retained directly; no anomalous-dispersion or supplier claim is inferred from it.

### L6/L7 — Cemented Negative/Positive Pair

L6: nD = 1.76182, νD = 26.5. Glass: unmatched source coordinates. Isolated f = −15.5986 mm.

L7: nD = 1.77252, νD = 49.6. Glass: unmatched source coordinates. Isolated f = +33.7863 mm.

L6 is biconcave and L7 is a positive meniscus. Their shared interface has radius +16.07352 mm. Their substantial Abbe contrast offers a primary-color balancing degree of freedom, while the two indices are close. A claim about secondary spectrum or apochromatic correction would require more spectral information than the patent supplies.

### L8 — Positive Meniscus, Convex to the Image

nD = 1.62041, νD = 60.3. Glass: unmatched source coordinates. f = +37.2241 mm.

The strong rear curvature gives positive power. Clearance between L7's rear face and L8's front face constrains the usable rim: the approximate 7.7423 mm zero-clearance contact height is a forbidden contact limit, not an aperture specification.

### L9 — Final Positive Lens

nD = 1.51633, νD = 64.0. Glass: unmatched source coordinates. f = +34.3856 mm.

Its weakly convex front and stronger convex rear face complete the converging sequence. The full 37.44 mm source back-focus interval remains after its rear vertex.

## Glass Identification and Spectral Interpretation

Table I publishes nine sodium-line index/Abbe pairs, including the repeated L2/L3 pair. It does not supply glass names, suppliers, melt records, measured C/F/g indices or anomalous partial dispersion. The model intentionally uses no named catalog curve or six-digit helium-d glass code. All nine elements stay on the engine's qualified Abbe-estimation tier for chromatic calculations; runtime estimates are not authored as measured line indices.

The source says **“refractive indices for the sodium d-line”**, but specifies neither a wavelength nor a doublet component. This model explicitly adopts the engine's **589.2938 nm sodium-doublet-center convention**. That physical wavelength is a modeling assumption, not a number printed in this patent. It does not convert the indices to helium d at 587.5618 nm or mercury e.

Monochromatic geometry at the literal source indices is distinct from diffraction or spectral predictions using that wavelength convention. Reference MTF uses the adopted sodium-D wavelength. The explicitly selected **C/d/F** MTF spectrum samples the physical helium-d wavelength through the estimated dispersion curve; this does not relabel the authored sodium-D indices. C/d/F and photopic MTF carry the engine's estimated-dispersion warning. The chromatic channel display retains native C/D/F/g labels. No resulting curve certifies a production melt, measured chromatic performance or factory-lens MTF.

## Focus Mechanism

Only the fixed source state is modeled. The printed BFL supports the conventional collimated-object first-order interpretation, but no explicit infinity caption or finite-conjugate endpoint is established. No close-focus travel, floating spacing, zoom law or moving group is inferred. The required focus-distance field is inactive: there are no variable gaps, no finite conjugates and no focus motion. Retail minimum-focus descriptions are not used to reconstruct a focus law.

## Clear Apertures and Verification Limits

All clear radii are inferred. The square-rim choices are 15.0 mm for L1, 7.5 mm for L3, 7.0 mm for L4/L5, 6.5 mm across L6/L7 and L8, and 8.5 mm for L9. L2 uses an inferred **9.5/7.8 mm front/rear pair**, consistent with its stepped outline in Figure 1 and with the stronger curvature of its rear face. The clear radii follow the optical caps rather than the outer corners of mechanical flanges in the drawing. Only the approximate front diameter has a source dimensional anchor. The remaining clear radii are physical-model estimates checked against the figure proportions, positive edge thickness, gap clearance, rim slope and ray clearance; they are not recovered factory dimensions. No hidden trims, mechanical baffles, rim cuts or rear camera plates are added. The approximate 44 mm effective filter diameter is neither a clear-aperture table nor an iris size.

With these apertures, the axial clear-beam audit is equivalent to f/2.8090 at the nominal f/2.8 setting, limited at surface 15; the approximately 0.32% difference is retained. This beam ratio is not a T-stop or the image-space working-NA f-number. The 84° source field is retained as a declared limit, rather than widening it to force the 35 mm format corner. Inferred rims and the declared field qualify vignetting and off-axis performance.

The literal source indices give a computed paraxial EFL of **23.9998523881 mm** and BFL of **37.4335134734 mm**, agreeing with an independent source-row matrix calculation. The computed paraxial focus is **0.0064865266 mm before** the retained source plane. This residual remains visible; neither the last gap nor any curvature was retuned.

The supplied Figure 1 image and the final rendering agree on the optical sequence, the single cemented pair and the stop between L5 and L6. The drawing includes stepped or chamfered blank corners; the model retains clear optical rims and does not claim to reconstruct those mechanical details. Qualitative figure agreement and numerical validation do not establish exact factory apertures or stop dimensions.

## Sources

1. [US 3,958,865 A — Retrofocus Type Lens System](https://patents.google.com/patent/US3958865A/en), sole Table I and Figure 1; supplied patent page images, directly checked for the numerical prescription, topology, scale, source BFL and sodium-line wording.
2. Verified literal Table I transcription, 564 bytes, SHA-256 `0fc8c49882a08415260da59966ea29ef1710513efe2dea0f1584ea27aab7ddd3`; exact CRLF transcription, cross-checked against the supplied Table I image. This CSV fingerprint does not certify the full PDF file bytes.
