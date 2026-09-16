## Patent Reference and Design Identification

**Patent:** GB 975,446  
**Application Number:** 33765/61  
**Priority:** German application 28256 IXa/42h, 24 September 1960  
**Filed:** 21 September 1961  
**Published:** 18 November 1964  
**Inventor:** No individual inventor is named in the patent  
**Applicant:** Carl-Zeiss-Stiftung, trading as Carl Zeiss  
**Title:** *Mirror Objective Particularly Suitable for Photographic Purposes*  
**Embodiment analyzed:** Sole worked numerical design (job-card “Example 1”)

GB 975,446 describes a photographic Cassegrain mirror objective using spherical mirrors, with two spherical correcting
lenses in front of the mirrors and two spherical correcting lenses behind them. The worked prescription is normalized to
$f=1$ and is explicitly evaluated at a 500 mm focal-length scale. The same passage states that the collecting-mirror
diameter is that of an equal-focal-length f/4 objective; at 500 mm this relation gives a 125.0 mm collecting-mirror
diameter, which is the value used for the modeled primary outer aperture. (GB 975,446, p. 1, especially lines 10–38
and 64–73; prescription tables on pp. 2–3.)

The production correlation is strong but is not manufacturer-confirmed patent attribution: the retrieved ZEISS Mirotar
f/4.5 500 mm datasheet does not cite GB 975,446. The identification instead rests on several convergent points:

1. The patent and the ZEISS datasheet describe the same Cassegrain-like arrangement: two front correcting lenses, a
   concave primary with a central opening, a convex secondary, and two rear correcting lenses.
2. The data file’s final paraxial model gives an effective focal length of 502.9569 mm, while ZEISS lists 504.5 mm for the
   production lens. The patent itself uses a 500 mm worked focal-length scale; no production rescaling has been applied.
3. ZEISS gives a 128.0 mm entrance pupil at the first lens vertex. That source value is used to calibrate the equivalent
   stop model; the calculated exit pupil is 181.066 mm in front of the last lens vertex with a 65.729 mm diameter, versus
   ZEISS values of 181.0 mm and 66.2 mm.
4. ZEISS specifies a 24 × 36 mm negative size and bellows focusing from infinity to 3.5 m, which are consistent with the
   modeled 135-format coverage and the data file’s deliberately fixed internal prescription.
5. The aperture figures remain intentionally separate. The patent describes an f/4 collecting aperture, the modeled
   unobstructed geometric outer path is f/4.0036, and the production lens is designated f/4.5. The f/4.5 production value
   is not substituted for the patent design aperture.

The source prescription also contains a material discrepancy at $r_9$. The body table on patent p. 2 prints
`+2.1186 f`, whereas the Claim-2 duplicate table on p. 3 gives a negative value interpreted dimensionally as
`-0.21186 f`. The latter is used because it reproduces the independently printed $r_9$ surface power and the published
negative focal length of the rear correcting system. The conflicting p. 2 reading remains part of the source record rather
than being silently discarded. (GB 975,446, pp. 2–3.)

## Optical Architecture

The design is an all-spherical Cassegrain telephoto objective. The manufacturer counts five physical elements in five
groups, including the primary mirror. The LensVisualizer data model contains four transmissive glass-element entries:
L1 and L2 form the front correcting pair, while L3 and L4 form the rear correcting pair. The primary mirror is represented
directly as the first-surface reflective interaction at surface 5 rather than as an invented glass substrate. The convex
secondary is represented as a second-surface reflective central region associated with the rear of L2, and is not counted
as another transmissive element.

The front correcting pair is nearly afocal: its verified subsystem focal length is +84,375.998 mm. The rear correcting pair
has verified negative focal length −602.810 mm. These two results reproduce the power structure required by Claim 1: the
front corrector is extremely weak relative to the objective, while the rear corrector is substantially negative. The patent
states that the use of different glass types within each correcting pair is intended to permit chromatic correction while
also controlling the image aberrations of the spherical-mirror system. (GB 975,446, p. 1; Claim 1 on p. 2.)

The surface list follows the patent’s optical encounter sequence for a surviving ray:
`STO/r1 → 2/r2 → 3/r3 → 4/r4 → 5/r5 → 6/r6 → 7/r7 → 8/r8 → 9/r9 → 10/r10 → IMG`.
Because the path folds at the primary and secondary, physical axial position is not monotonic in that list. Surface 5 to
surface 6 therefore carries a genuine signed return displacement of −111.0 mm. The explicit image plane is at global
$z=254.3$ mm from the first vertex, corresponding to the patent’s $s'=0.1536f$ back-focus relation after the final
refracting surface.

With that physical track, $TL/EFL=0.50561$, so the design meets the project’s telephoto criterion. The back focal distance
from surface 10 is 77.205 mm, giving $BFD/EFL=0.15350$; it therefore does not satisfy the project’s retrofocus criterion.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Front Corrector 1

**nd = 1.5168, νd = 64.20. Glass: 517642 — BK7/K9L crown class (supplier unresolved). f = +1718.11 mm.**

L1 is the weak positive member of the front correcting pair. Its standalone focal length is almost cancelled by L2, so
its significance is chiefly in the combined front subsystem rather than as an isolated positive lens. The patent requires
the two lenses in this front corrector to use different glass types and the pair as a whole to remain nearly afocal.
(GB 975,446, p. 1 and Claim 1 on p. 2.)

The data file does not attribute the 517642 coordinate to a specific historical supplier. The class label records that the
patent coordinate is compatible with the BK7/K9L crown family while preserving the absence of manufacturer/melt evidence.

### L2 — Negative Meniscus, Front Corrector 2 / Secondary Substrate

**nd = 1.5184, νd = 60.34. Glass: 518603 — BaLK3-class (supplier unresolved). f = −1721.39 mm.**

L2 is the weak negative partner of L1. The two standalone powers are nearly equal and opposite, producing the verified
+84,375.998 mm focal length of the front correcting subsystem. That weak positive residual satisfies the patent’s
near-afocal front-corrector requirement without assigning a specific aberration correction to either lens in isolation.

The folded drawing places the intercepting-mirror surface $r_6$ at the same axial station as the rear region of the second
front corrector. In the implemented model, the ordinary rear surface $r_4$ remains the transmissive region, while $r_6$ is
a distinct central second-surface reflective region associated with L2. The exact mechanical construction and secondary
diameter are not dimensioned by the patent, so this radial split is a modeling interpretation of the drawing and the
published axial spacings rather than a claimed manufacturing detail. (GB 975,446, drawing sheet, PDF pp. 4–6.)

### Reflective interaction at r5 — Annular Primary Mirror

The primary mirror is modeled as a first-surface reflector rather than as a fifth `elements`-array entry because the patent
does not publish a traversed mirror-substrate thickness or glass prescription. Its outer modeled semi-diameter is 62.5 mm,
derived from the patent’s 500 mm / f/4 collecting-aperture statement. The 24.0 mm central opening is not published; it is
a modeling inference sized to pass the post-secondary full-field beam.

This distinction explains the apparent count mismatch: the production specification counts five physical elements including
the primary mirror, whereas the data array contains only the four transmissive glass bodies. No synthetic mirror glass was
added solely to make the array length equal the product count.

### Reflective interaction at r6 — Convex Secondary

The convex secondary is a second-surface reflective interaction in the central region associated with L2. Its 28.5 mm
modeled semi-diameter is not a patent dimension. It was constrained by exact meridional clearance of the return beam and by
the production-aperture correlation described in the folded-path section below. Incoming rays that strike this central
region from its inactive side are blocked; the annular incoming bundle continues to the primary, reflects back to r6, and
then proceeds through the primary opening toward the rear corrector.

### L3 — Plano-Convex Positive, Rear Corrector 1

**nd = 1.5614, νd = 45.27. Glass: 561453 — LLF4-class (supplier unresolved). f = +278.27 mm.**

L3 is the positive member of the rear correcting pair. Unlike the almost cancelling front pair, the rear pair has a strong
net negative power. The patent explicitly requires a negative rear correcting system whose focal-length magnitude is less
than 1.5 times that of the objective. L3 is therefore interpreted only as one constituent of that specified negative
subsystem, not as an independently assigned coma, astigmatism, or field-curvature corrector.

The front surface of L3 is plane in the published prescription. No aspheric departure, diffractive phase, or cemented
interface is present.

### L4 — Biconcave Negative, Rear Corrector 2

**nd = 1.5168, νd = 64.20. Glass: 517642 — BK7/K9L crown class (supplier unresolved). f = −188.88 mm.**

L4 supplies the stronger negative standalone power of the rear pair. Together, L3 and L4 form a verified rear-corrector
subsystem with focal length −602.810 mm. This value preserves the negative-power condition printed in the patent.

The first surface of L4 is the corrected $r_9$ value described above. Using the p. 2 body-table value instead would reverse
the sign of the rear subsystem and contradict both the duplicated Claim-2 table and the separately printed rear-corrector
focal length. The correction is therefore source-based and computationally tested, not a tuning change made to improve the
production match. (GB 975,446, pp. 2–3.)

All four transmissive elements are air-spaced. There are no cemented doublets or triplets in the implemented prescription.

## Glass Identification and Selection

The patent refractive indices and Abbe numbers are retained. Catalog curves are coordinate-compatible dispersion proxies, not evidence of the historical supplier or production melt.

| Element | Source index / Abbe | Catalog curve |
|---|---|---|
| L1 | 1.5168 / 64.2 (d) | N-BK7 |
| L2 | 1.5184 / 60.34 (d) | BALK3 |
| L3 | 1.5614 / 45.27 (d) | LLF4 |
| L4 | 1.5168 / 64.2 (d) | N-BK7 |

Named curves pass the catalog coordinate guard without changing the patent coordinates. No catalog-derived line indices are copied into the elements. Unresolved rows retain their source-based fallback; nearby glass families do not establish a unique historical identity. No APO or anomalous-dispersion claim follows from these assignments.

## Focus Mechanism

The focus status is **NO_INTERNAL_RECONSTRUCTION**. GB 975,446 supplies one nominal internal prescription and no finite-focus
spacing table. No internal element or group movement is therefore authored: `var` is empty and the published internal
spacings remain fixed.

The ZEISS production datasheet describes a tube mount with attached bellows and gives a focusing range from infinity to
3.5 m. The data file retains `closeFocusM: 3.5` as production metadata, but that value does not create a calculated
close-focus optical state. No bellows extension law, finite-object magnification, or close-focus aberration result is claimed
because the source material does not determine those quantities uniquely.

## Conditional Expressions

Claim 1 imposes two power conditions on the correcting systems. Both are satisfied by the final parsed prescription:

- The front correcting system must have focal length greater than 150 times the objective focal length. The verified front
  subsystem focal length is +84,375.998 mm, or 168.752 times the patent’s 500 mm focal unit.
- The rear correcting system must be negative and have focal-length magnitude below 1.5 times the objective focal length.
  The verified rear subsystem focal length is −602.810 mm, or −1.20562 times the 500 mm focal unit.

These calculations use the corrected $r_9$ branch and the implemented prescription. They are subsystem powers, not standalone
powers of L1–L4 and not a statement about a cemented group; the design contains no cemented group. (GB 975,446, p. 1 and
Claim 1 on p. 2.)

The equivalent entrance-pupil stop is a neutral plane in air at the first vertex. The curved refracting surface retains patent label 1 at that same position; the zero spacing preserves all patent coordinates.

## Folded / Mirror Path Verification

The model uses `opticalPath.mode: "auto"` because the Cassegrain path is not an ordinary front-to-rear sequential lens. The
listed surfaces retain the patent encounter order, but their global axial stations encode the reflection reversals. In
particular, surface 5 is at $z=157.5$ mm, the return to surface 6 is at $z=46.5$ mm, and the signed displacement from 5 to
6 is −111.0 mm. After the secondary reflection the path again proceeds toward increasing $z$, reaches the rear corrector,
and terminates at the explicit image plane at $z=254.3$ mm.

The aperture model contains three important inferences that are deliberately separated from source dimensions:

- `STO` is coincident with patent $r_1$ and has a 64.0 mm semi-diameter because ZEISS places a 128.0 mm entrance pupil at
  the first lens vertex. This calibrates an equivalent pupil; it does not establish the location or diameter of an
  unpublished physical diaphragm.
- The primary outer semi-diameter is 62.5 mm from the patent’s 500 mm / f/4 collecting-aperture relation. Its 24.0 mm
  central opening is modeled from the full-field post-secondary ray envelope.
- The secondary semi-diameter is modeled as 28.5 mm. The value clears the on-axis return beam with about 0.365 mm radial
  margin; it is not presented as a published mechanical diameter.

The final exact on-axis trace gives an outer clear radius at the first vertex of 62.813 mm and a geometric f-number of
f/4.0036. When the modeled central obstruction is converted only to an equal-area scalar, the corresponding value is
f/4.512. That latter number is useful as production-correlation evidence for the f/4.5 designation, but it is not a
standard independent f-number measurement and it depends on the inferred secondary size.

The same calibrated pupil model predicts an exit pupil 181.066 mm in front of surface 10 with a diameter of 65.729 mm.
Those results are independent consequences of the calibrated entrance pupil and compare with ZEISS values of 181.0 mm and
66.2 mm. They support the product correlation while still leaving the physical stop construction unresolved.

Semi-diameters for the refractive surfaces are also modeled rather than patent-published: 64.0 mm on r1–r3, 65.0 mm on
r4, and 23.5 mm through the rear corrector. Geometry checks found positive element edge thicknesses, acceptable spherical
rim slopes, and no shared-band cross-gap intrusion failures. Independent exact meridional sampling at field fractions 0,
±0.6, and ±1.0 of the 24 × 36 mm diagonal field found no unintended clipping at the refractive clear apertures; the
minimum modeled primary-hole margin at the tested full field was approximately 0.857 mm.

These finite meridional samples apply only to the modeled prescription and do not prove clearance over the full two-dimensional pupil and field.

## Sources / References

1. **Carl Zeiss-Stiftung.** *Mirror Objective Particularly Suitable for Photographic Purposes.* GB 975,446. British
   application 33765/61, filed 21 September 1961; German priority 24 September 1960; published 18 November 1964. Supplied
   patent PDF, especially pp. 1–3 and the optical drawing sheet on PDF pp. 4–6.
2. **ZEISS.** *Mirotar f/4.5 - 500 mm.* Historical product datasheet, catalog no. 10 46 02. The datasheet is the source for
   the production focal length, aperture designation, 24 × 36 mm format, bellows focus range, physical element/group
   count, and entrance/exit-pupil data.  
   https://www.zeiss.com/content/dam/consumer-products/downloads/historical-products/photography/contax-yashica/en/datasheet-zeiss-mirotar-45500-en.pdf
3. **Chengdu Guangming Optoelectronic Corp. (CDGM).** Optical glass database; H-K9L / 517642 coordinate reference.  
   https://www.cdgmgd.com/database/search.htm?content=K9&key=1&pageIndex=1
4. **SUMITA Optical Glass, Inc.** Molding and optical glass data, catalog revision 2026-08-21; BALK3 and LLF4 coordinate
   references used for class-level comparison.  
   https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf
