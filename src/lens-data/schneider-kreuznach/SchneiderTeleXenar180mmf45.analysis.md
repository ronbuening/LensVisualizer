# SCHNEIDER TELE-XENAR 180mm f/4.5

## Patent Reference and Design Identification

**Patent:** DE 471565 C
**Patent effective from:** 20 August 1927
**Grant notice:** 24 January 1929
**Issued:** 15 February 1929
**Inventor:** Albrecht Wilhelm Tronnier
**Applicant:** Jos. Schneider & Co., Optische Werke
**Title:** *Photographisches Fernobjektiv*
**Embodiment analyzed:** Job-card “Example 1,” corresponding to the patent's f/4.5 numerical example and Abb. 1

DE 471565 C describes a photographic telephoto objective built from a cemented positive member, a cemented negative
member separated from it by a large air space, and a nearby uncemented meniscus whose power sign is opposite that of the
adjacent cemented member. The patent states that Abb. 2 is the f/6 form and that the other illustrated form is f/4.5; the
R1–R8 and L1–L5 designations in Abb. 1 match the numerical table on p. 2. The patent does not literally label that table
“Example 1,” so that name is the job-card mapping to the f/4.5 example rather than a printed source heading.

The numerical table is normalized to focal length 1 and opening 0.222. Although the patent prose describes the illustrated
objectives in a 200 mm context, the implemented prescription uses the normalized table and uniformly scales every radius
and axial spacing by 180 for comparison with the historical 18 cm production lens. The computed EFL of the scaled model is
179.948704 mm rather than being forced to exactly 180 mm.

The production correlation is convergent, not manufacturer confirmation of DE 471565 C as the production prescription.
A historical Schneider catalogue describes the f/4.5 Tele-Xenar as a fixed-focal-length, unsymmetrical, five-component,
partially cemented telephoto with a negative rear component, and its exchange tables list an 18 cm f/4.5 Tele-Xenar and a
6×9 cm use case. Those points agree with the selected patent architecture and the modeled focal length, but the located
manufacturer literature does not identify the patent number. Other 180 mm f/4.5 Tele-Xenar variants therefore should not
be assumed to share this exact prescription.

## Optical Architecture

The implemented model has five glass elements in three air-separated groups: a front cemented doublet L1–L2, a rear
cemented doublet L3–L4, and the separate meniscus L5. All surfaces are spherical. The two cemented members are separated
by the patent's large air space; L5 sits only 0.18 mm behind the rear cemented member in the 180 mm-scaled model, preserving
the patent's narrow negative-air-lens relationship between the adjacent surfaces.

The computed standalone and cemented powers distinguish the roles more precisely than element shape alone. L1 is positive
and L2 negative, but their cemented combination is net positive with power +0.00853243 mm⁻¹ (f = +117.200 mm). L3 is
negative and L4 positive, while their cemented combination remains net negative at −0.00762406 mm⁻¹ (f = −131.164 mm).
L5 is a weak positive singlet, f = +429.067 mm. The complete L3–L5 rear functional assembly remains negative at
−0.00503554 mm⁻¹ (f = −198.588 mm), so the positive L5 does not reverse the sign of the rear assembly.

At the static infinity state, the first-vertex-to-paraxial-image length is 155.462687 mm and the EFL is 179.948704 mm,
giving TL/EFL = 0.863928. The design therefore meets the project's numerical definition of a telephoto system. Its BFD is
88.322687 mm from R8, which is shorter than the EFL, so it is not retrofocus. Interpreting the patent's historical
“Fernphotowirkung 2” as EFL/BFD gives 2.0374, consistent with the printed integer 2; that historical interpretation is
separate from the TL/EFL criterion used here.

## Element-by-Element Analysis

### L1 — Biconvex Positive, front member of D1

nd = 1.5163, νd = 63.7 in the data fields; the patent identifies the index reference only as the “yellow ray.”
Glass: Unmatched in the data; BK7/BSL7-class coordinate equivalent only, supplier unconfirmed. Standalone f = +54.075 mm.

L1 is the stronger positive component of the front cemented pair. Its first surface is also the first optical surface of
the complete objective. The standalone focal length describes L1 isolated in air; it must not be confused with the power
of the cemented L1–L2 member in the assembled lens.

### L2 — Biconcave Negative, rear member of D1

nd = 1.6202, νd = 36.0 in the data fields; source reference “yellow ray.”
Glass: Unmatched in the data; F2/PBM2-class coordinate equivalent only, supplier unconfirmed. Standalone f = −89.915 mm.

L2 shares its front boundary with L1 at the cemented interface and closes the first group at R3. Its negative standalone
power partly offsets L1, while the actual cemented doublet remains positive. The large dispersion contrast between the two
stored coordinate pairs is evident, but the historical wavelength reference and lack of source line indices prevent a
more specific claim about secondary-spectrum correction.

### L3 — Negative Meniscus, front member of D2

nd = 1.5163, νd = 63.7 in the data fields; source reference “yellow ray.”
Glass: Unmatched in the data; BK7/BSL7-class coordinate equivalent only, supplier unconfirmed. Standalone f = −69.502 mm.

L3 begins the rear cemented member after the large central air space and is the stronger contributor to that member's
negative sign. The patent specifically describes the cemented members as each combining a converging and a diverging lens;
L3 and L4 satisfy that sign pairing without requiring an inferred aberration role.

### L4 — Positive Meniscus, rear member of D2

nd = 1.6489, νd = 33.9 in the data fields; source reference “yellow ray.”
Glass: Unmatched in the data; SF2/H-ZF1A-class coordinate equivalent only, supplier unconfirmed. Standalone f = +160.360 mm.

L4 is positive in isolation but is too weak to cancel L3, leaving D2 net negative. Its rear surface faces the narrow air
space before L5. The data therefore reproduce the patent's arrangement in which the separate meniscus has the opposite
power sign from the neighboring cemented member.

### L5 — Positive Meniscus, rear singlet

nd = 1.5250, νd = 62.3 in the data fields; source reference “yellow ray.”
Glass: Unmatched (source yellow-ray n = 1.5250, ν = 62.3). Standalone f = +429.067 mm.

L5 is the weak positive singlet immediately behind the net-negative D2 member. The patent makes this opposite-sign
relationship part of the claimed architecture and describes the small intervening air space as having the form of a
negative lens. In the implemented 180 mm scale, that center gap is 0.18 mm. No modern supplier or melt is assigned to L5
because the checked catalog coordinates do not establish a defensible direct match.

## Glass Identification and Selection

The patent supplies four distinct index/Abbe coordinate pairs but identifies the refractive-index reference only as the
“yellow ray.” The data preserve those source coordinates rather than silently converting them to a modern helium d-line or
mercury e-line reference. Consequently, the data mark all five elements `Unmatched`; the prose retains modern class-coordinate equivalences only as audit context, not as historical melt identifications or runtime Sellmeier assignments.

| Source coordinate | Elements | Data-file identification | Interpretation |
|---|---|---|---|
| 1.5163 / 63.7 | L1, L3 | Unmatched (BK7/BSL7-class coordinate) | Close modern crown-class coordinate match; supplier unconfirmed |
| 1.6202 / 36.0 | L2 | Unmatched (F2/PBM2-class coordinate) | Close modern flint-class coordinate match; supplier unconfirmed |
| 1.6489 / 33.9 | L4 | Unmatched (SF2/H-ZF1A-class coordinate) | Plausible dense-flint coordinate match; supplier unconfirmed |
| 1.5250 / 62.3 | L5 | Unmatched | No checked modern catalog entry supports a confident named match |

No nC, nF, ng, or dPgF values are authored. Because the source line is unresolved, the final `glass` strings deliberately use `Unmatched (...)` even where modern coordinates are close; this prevents a class hint from being treated as a defensible historical glass identity or a supported catalog Sellmeier assignment. The model therefore does not support an apochromatic or anomalous-partial-dispersion claim.

## Focus Mechanism

The selected patent example publishes one static prescription. It gives no finite-conjugate spacing table, no close-focus
object distance, and no internal group kinematics. The data therefore use `NO_INTERNAL_RECONSTRUCTION`: `var` is empty and
no lens group is made to move internally.

`closeFocusM = 1000000` is only a LensVisualizer schema/UI sentinel for the static infinity prescription. It is not a
production minimum-focus distance, not an optical finite-conjugate state, and not evidence for unit, front, internal, or
rear focusing. Historical Schneider literature discusses mounting and interchangeability, but it does not provide a
focus-spacing law that would justify reconstructing internal motion for this prescription.

## Scaling, Aperture Stop, and Modeled Geometry

The source prescription is dimensionless with f = 1. The implemented model applies a uniform scale factor s = 180 to all
radii and axial spacings. Because the design is all-spherical, there are no aspheric coefficients or conic constants to
transform. The rounded source table then computes to 179.948704 mm EFL; this small difference from the 180 mm marketed
value is retained rather than hidden by a second renormalization.

The patent places the diaphragm conceptually in the large air space but does not publish its axial station or physical
diameter. The model therefore splits the scaled 46.8 mm gap at its midpoint, placing STO 23.4 mm behind R3 and 23.4 mm
ahead of R4. Its 13.7456 mm physical semi-diameter is calibrated so that the paraxially imaged entrance-pupil
semi-diameter is 19.9943 mm and the modeled f-number is 4.499993. Agreement with f/4.5 is therefore a calibration result,
not independent evidence for the manufactured diaphragm diameter or location.

Semi-diameters are likewise modeled rather than published. They were selected from exact meridional ray envelopes for the
calibrated stop and checked for positive edge thickness, spherical rim slope, cross-gap clearance, and representative
off-axis containment. The original draft’s smallest non-stop clearance in its tested ray set was 0.538 mm; the audit enlarged the rear rims and revalidated edge thickness and gap clearance. A separate full-6×9-corner test
shows vignetting, so the `imageFormat: "6x9"` metadata records a documented production use case and must not be read as a claim of an unvignetted full pupil
at the extreme corner at full aperture.

The patent does not publish the image-plane spacing. The final R8-to-image distance in the data is therefore the computed
infinity paraxial BFD, 88.322687 mm. This is a model closure from the prescription, not a source dimension.

## Verification Summary

The final data revision was independently recomputed by sequential height/reduced-angle tracing and explicit ABCD matrix
multiplication. The two first-order paths agree to numerical precision, and the reduced-angle system matrix has unit
determinant in air.

The surface-by-surface Petzval sum, evaluated as φ/(n·n′) at every refracting surface, is
+1.18768304×10⁻³ mm⁻¹. This is a computed property of the implemented static model. No higher-order image-quality claim is
inferred from that first-order quantity alone.

The model is entirely spherical, contains no sensor cover glass, rear filter plate, dummy optical plane, or synthetic
cement layer, and uses the downstream element's medium and element identity at each cemented junction. Repository-level
LensVisualizer type checking, `buildLens()` / `validateLensData()`, production render-trim diagnostics, and runtime glass
resolution remain integration tasks rather than evidence supplied by this analysis.

## Sources and References

1. Reichspatentamt, **DE 471565 C**, *Photographisches Fernobjektiv*, Jos. Schneider & Co., Optische Werke in Bad Kreuznach;
   inventor Albrecht Wilhelm Tronnier. Patent from 20 August 1927; grant notice 24 January 1929; issued 15 February 1929.
   Numerical prescription: p. 2; optical layout: p. 3, Abb. 1. Public locator:
   https://patents.google.com/patent/DE471565C/de
2. Jos. Schneider & Co., Optische Werke, **“Schneider Lenses”** historical general catalogue, archived scan. The f/4.5
   Tele-Xenar description is on scan p. 21; the 18 cm exchange entry is on p. 23; the 6×9 cm exchange table is on p. 24.
   https://www.cameramanuals.org/booklets/schneider_lenses_1937.pdf
3. Modern glass-coordinate cross-checks used only for class/equivalent labeling: OHARA, SCHOTT, HOYA, HIKARI, CDGM, and SUMITA
   optical-glass catalogues, checked 1 October 2026. Detailed candidate coordinates, residuals, and URLs are retained
   in the dossier's `SchneiderTeleXenar180mmf45.evidence.json`; none is treated as proof of the historical supplier or melt.


## Integration audit

The October 2, 2026 UTC audit reviewed the exact local patent figure, checked optical rims against edge and gap constraints, and reviewed compatible catalog dispersion. The sibling audit log records retained dimensions, changes and unresolved source limits. Catalog curves are qualified spectral proxies, with production supplier/melt identity unconfirmed.


## Production mount assignment

The Schneider 1937 manufacturer catalog, PDF page 24, lists the 18cm f/4.5 Tele-Xenar with a size 1S shutter in its exchange table. The assignment records the shutter-cell installation in a bellows camera’s lens board; it does not imply a universal board shape or assign a later SLR Tele-Xenar mount. [Source](https://www.cameramanuals.org/booklets/schneider_lenses_1937.pdf).

The assignment records the correlated production installation, not manufacturer confirmation of an exact patent-to-factory prescription.
