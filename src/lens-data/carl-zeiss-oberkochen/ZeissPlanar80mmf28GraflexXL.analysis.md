# CARL ZEISS PLANAR 80mm f/2.8 (Graflex XL) — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2,799,207  
**Application:** Serial No. 525,333  
**Filed:** July 29, 1955  
**Priority:** Germany, August 2, 1954  
**Granted:** July 16, 1957  
**Inventor:** Günther Lange  
**Assignee:** Carl-Zeiss-Stiftung  
**Title:** *Gauss Type Photographic Objective Containing Two Outer Collective and Two Inner Dispersive Members*  
**Embodiment analyzed:** Embodiment I (job-card Example 1)

US 2,799,207 describes a Gauss-type photographic objective in which outer collective members flank inner dispersive
members around the diaphragm. Embodiment I is the selected numerical example. The patent normalizes its prescription to
$f=1$, gives a relative aperture of 1:2.8 for Embodiments I and II, and publishes a focal intercept of $s'=0.7361$ and an
angular field of ±28° for Embodiment I. The implemented model uniformly scales every patent length by 80.0, producing a
computed design EFL of 79.9996065 mm while retaining 80 mm as the marketed focal length. [1, pp. 2–3, Embodiment I]

The association with the Graflex XL 80mm Zeiss Planar f/2.8 is strong but remains an inference rather than a
manufacturer-confirmed patent attribution. The principal points of convergence are:

1. The scaled patent prescription computes to 79.9996065 mm EFL, while Graflex lists an 80mm Zeiss Planar.
2. Both the patent embodiment and the production lens are f/2.8.
3. Embodiment I contains five physical elements in four air-separated members; the Graflex catalog specifies five lens
   elements.
4. The patent is assigned to Carl Zeiss and explicitly describes a Gauss objective; the production lens is sold as a
   Zeiss Planar.
5. The patent gives a 56° full field, whereas the Graflex catalog gives 58° diagonal coverage on the ideal RH/10,
   RH/20, and RH/50 2¼×2¾-inch format. The 2° difference is retained rather than reconciled away.
6. The 1954 priority and 1957 grant precede the later Graflex XL documentation, making the chronology plausible without
   proving that the production lens used this prescription unchanged. [1, pp. 2–3] [2, PDF pp. 3, 6]

Graflex catalog no. 7332 is therefore used only as the production correlation target. Neither the patent nor the Graflex
literature cited here states that US 2,799,207 Embodiment I is the exact production prescription. [2, PDF p. 6]

## Optical Architecture

The prescription is a five-element, four-member Gauss design with the member power sequence
**positive – negative – negative – positive**. The first two members are single lenses. The third member is a cemented
pair, LIII+LIV, and the fourth member is a single rear positive meniscus. This organization follows the patent's stated
construction: at least one collective and one dispersive member lies on each side of the diaphragm, with the dispersive
members nearest the stop. [1, pp. 2–3, Fig. 1 and Embodiment I]

The executed final-model calculations preserve that sign structure. The isolated LI, LII, and LV elements have focal
lengths of +69.090354 mm, −106.177114 mm, and +69.546577 mm respectively. LIII and LIV, considered separately in air,
are −22.405177 mm and +31.845955 mm; because they are cemented and operate through a glass-to-glass interface, those
standalone values must not be treated as the power of the rear inner member. The actual cemented LIII+LIV member is net
negative, with an air-to-air equivalent focal length of −141.300263 mm.

The design is entirely spherical. No geometric aspheric surface, diffractive phase surface, rear cover plate, filter, or
inactive dummy plane is present in the selected example or in the implemented model.

## Element-by-Element Analysis

### LI — Positive Meniscus, Outer Object-Side Member

**nd = 1.62041, νd = 60.3. Glass: 620603 — SK16-class crown (supplier unresolved). f = +69.090354 mm.**

LI is the outer collective member on the object side. Its two positive-radius surfaces form a positive meniscus under the
patent's left-to-right radius convention. In the Gauss architecture it supplies the front collecting action before the
inner negative member LII. [1, p. 3, Embodiment I]

The 1.62041/60.3 coordinate is consistent with the 620603 optical-glass class. Current catalog checks include SCHOTT
N-SK16 at 1.62041/60.32 and SUMITA K-SK16RH at 1.62041/60.3. That coordinate agreement establishes a useful glass class,
not the supplier or melt actually used by Zeiss. [4] [5]

### LII — Negative Meniscus, Inner Object-Side Member

**nd = 1.75520, νd = 27.5. Glass: 755275 — SF4/FD4-class dense flint (supplier unresolved). f = −106.177114 mm.**

LII is the dispersive member immediately before the diaphragm. Its rear concave surface is the patent's $r_v$, one of the
two dispersive concave surfaces nearest the stop. The patent's principal conditions constrain this radius, its relation to
the corresponding rear-side surface, and the spacing between the two inner dispersive members. [1, pp. 2, 5, claim 1]

The 1.75520/27.5 coordinate is a dense-flint class. SUMITA K-SFLD4 reproduces the pair directly; legacy SCHOTT SF4 is an
extremely close coordinate match at 1.75520/27.58. The implemented data therefore retains a class-level label rather than
assigning a vendor. [4] [5]

### LIII — Biconcave Negative, Front Component of the Rear Cemented Member

**nd = 1.71736, νd = 29.5. Glass: 717295 — SF1/FD1-class dense flint (supplier unresolved). f = −22.405177 mm.**

LIII begins the rear inner member and lies nearest the diaphragm on the image side. It is strongly negative when considered
alone in air. In Embodiment I it is cemented directly to LIV at surface 6; the interface is therefore a glass-to-glass
boundary rather than an air gap. [1, p. 3, Embodiment I]

The placement and material ordering follow the patent's explicit four-member guidance. Claim 3 specifies that the rear
dispersive member may be made from two lenses of opposite power, with the negative lens having higher dispersion than the
positive lens. Claim 4 further places the negative lens nearest the diaphragm and specifies that it have the higher
refractive index. LIII satisfies both relations: its νd of 29.5 is lower than LIV's 54.9, while its nd of 1.71736 is higher
than LIV's 1.69067. The patent associates these choices with chromatic correction and field flattening. [1, p. 2; p. 5,
claims 3–4]

The 1.71736/29.5 coordinate matches the 717295 dense-flint class: SUMITA K-SFLD1 is exact at the quoted precision, while
legacy SCHOTT SF1 is 1.71736/29.51. [4] [5]

### LIV — Biconvex Positive, Rear Component of the Cemented Member

**nd = 1.69067, νd = 54.9. Glass: K-LaK9 coordinate-compatible catalog proxy (historical supplier unproven). f = +31.845955 mm.**

LIV is the positive component cemented behind LIII. The isolated element is strongly positive, but the combined LIII+LIV
member remains net negative after the actual cemented interface and thicknesses are included. The verified air-to-air
cemented-member power is −0.00707713 mm⁻¹, corresponding to −141.300263 mm equivalent focal length.

Its 1.69067/54.9 coordinate lies in the LAK9/LAL9 lanthanum-crown family. HIKARI J-LAK9 and SUMITA K-LaK9 are close family
matches rather than exact identity proofs; the data therefore stores the six-digit-class description and explicitly leaves
the supplier unresolved. [5] [8]

### LV — Positive Meniscus, Outer Image-Side Member

**nd = 1.75520, νd = 27.5. Glass: 755275 — SF4/FD4-class dense flint (supplier unresolved). f = +69.546577 mm.**

LV is the outer collective member on the image side and closes the four-member Gauss sequence. It uses the same
1.75520/27.5 coordinate as LII. Claim 6 specifically recommends a last-lens glass with ν below 35 for chromatic correction
of oblique beams; Embodiment I's νd = 27.5 satisfies that stated design condition. [1, p. 2; p. 5, claim 6]

The catalog evidence supports the same 755275 dense-flint class used for LII, without establishing that the two physical
lenses were made from any particular named commercial melt. [4] [5]

## Glass Identification and Selection

The patent refractive indices and Abbe numbers are retained. Catalog curves are coordinate-compatible dispersion proxies, not evidence of the historical supplier or production melt.

| Element | Source index / Abbe | Catalog curve |
|---|---|---|
| LI | 1.62041 / 60.3 (d) | N-SK16 |
| LII | 1.7552 / 27.5 (d) | SF4 |
| LIII | 1.71736 / 29.5 (d) | SF1 |
| LIV | 1.69067 / 54.9 (d) | K-LaK9 |
| LV | 1.7552 / 27.5 (d) | SF4 |

Named curves pass the catalog coordinate guard without changing the patent coordinates. No catalog-derived line indices are copied into the elements. Unresolved rows retain their source-based fallback; nearby glass families do not establish a unique historical identity. No APO or anomalous-dispersion claim follows from these assignments.

## Focus Mechanism

The optical model has one published state: infinity. Its focus status is **NO_INTERNAL_RECONSTRUCTION**. No `var` spacing
is authored, and no element or group is made to move internally.

Graflex documentation describes the XL's combination bayonet mount and focusing ring and lists the 80mm Zeiss Planar in a
precision-matched barrel. The catalog gives a scale-focusing limit of 2.5 ft and a rangefinder limit of 3 ft. The data file
stores 0.762 m, the exact metric conversion of 2.5 ft, only as product close-focus metadata. It does not use that number to
construct a second optical prescription, because the manufacturer documents cited here do not supply the necessary barrel
travel or optical reference datum. [2, PDF p. 6] [3, PDF pp. 4, 12]

## Stop, Aperture, and Semi-Diameter Model

The patent drawing places diaphragm D inside the long airspace between r4 and r5, but neither the numerical table nor the
claims give its exact axial station or physical diameter. The rendered Fig. 1 places the diaphragm approximately midway in
that gap. The model therefore splits the scaled 19.5936 mm gap equally into 9.7968 mm before and 9.7968 mm after the single
`STO`. This is a modeling inference from the figure, not a published dimension. [1, p. 1, Fig. 1; p. 3, Embodiment I]

The stop semi-diameter, 10.278583 mm, is likewise modeled. It was solved so that the paraxial entrance pupil of the final
front group reproduces the published f/2.8 target. The resulting entrance-pupil semi-diameter is 14.285644 mm and the
modeled f-number is 2.79999998. This agreement is a calibration identity and must not be read as independent evidence for
an unpublished physical iris diameter.

The patent also omits clear semi-diameters. The authored surface semi-diameters are therefore model geometry derived from
exact d-line meridional ray envelopes, the patent section drawing, and the current edge-thickness, rim-slope, and cross-gap
rules. At the verification field of 17.5565°—0.6 of the canonical 6×7 paraxial half-field—all 369 sampled rays
(9 field positions × 41 stop-height samples) remained within the authored apertures. A separate 29° edge-field diagnostic
passed only 23 of 41 stop-height samples through the complete modeled aperture system; this is retained as edge-field
vignetting rather than hidden by enlarging the modeled glass. It is not a measured production-vignetting curve.

## Conditional Expressions

The patent makes the geometry of this Gauss family explicit through twelve claim-1 inequalities and three additional
claim-2 conditions. The final 80× prescription was recomputed directly from the parsed data file; all fifteen conditions
pass. Uniform scaling does not alter their truth because the conditions compare homogeneous length quantities. [1, pp. 2,
5–6, claims 1–2]

| ID | Patent condition | Final model |
|---|---|---|
| 1 | $0.10f < r_v < 0.40f$ | Pass |
| 2 | $0.10f < |r_h| < 0.40f$ | Pass |
| 3 | $1.0\bar r_s < D_s < 2.0\bar r_s$ | Pass |
| 4 | $0.30f < D_s < 0.55f$ | Pass |
| 5 | $0.20f < \bar r_s < 0.40f$ | Pass |
| 6 | $1.40\bar r_z < D_s < 2.80\bar r_z$ | Pass |
| 7 | $0.80\bar r_z < D_z < 1.60\bar r_z$ | Pass |
| 8 | $0.20f < D_z < 0.40f$ | Pass |
| 9 | $0.15f < \bar r_z < 0.30f$ | Pass |
| 10 | $d_{II} < 0.10f$ | Pass |
| 11 | $d_{II} < 0.90d_{III}$ | Pass |
| 12 | $0.10f < d_{II}+d_{III} < 0.25f$ | Pass |
| 13 | $0.30f < \frac{2r_1|r_9|}{r_1+|r_9|} < 0.50f$ | Pass |
| 14 | $0.80D_s < \frac{2r_1|r_9|}{r_1+|r_9|} < 1.30D_s$ | Pass |
| 15 | $0.70|r_h| < r_v < 1.20|r_h|$ | Pass |

The patent connects the first set of conditions to obtaining a useful aberration compromise at apertures faster than
1:4.5 and fields larger than ±14°, and the additional claim-2 relations to coma correction. These are the patent's stated
design objectives; the Stage 3 analysis does not infer separate element-by-element aberration budgets from the condition
checks. [1, p. 2]

## Verification Summary

The final `.data.ts` was loaded as a literal TypeScript object and recomputed rather than checked against a separately
hard-coded intended prescription. Sequential height/reduced-angle tracing and an independently assembled ABCD matrix agree
to machine precision.

The implemented EFL is 79.99960648 mm. From the last refracting surface, the computed paraxial BFD is 58.88376920 mm,
whereas the data intentionally retains the scaled printed focal intercept, 58.88800000 mm, as the authored rear image
spacing. The 0.00423080 mm difference is below the upstream one-last-place comparison tolerance of 0.008 mm. A separate
half-LSB sensitivity calculation on the printed radii, thicknesses, and refractive indices gives a conservative worst-case
BFD perturbation of about 0.00923 mm at the 80× scale, so the retained mismatch is compatible with source rounding. The mismatch is preserved rather than silently removed.

The internal surface-1-to-surface-9 track is 44.80080000 mm, but that is not the total lens length used for the telephoto
test. The front-vertex-to-paraxial-image total length is 103.68456920 mm, giving $TL/EFL=1.29606349$; the design therefore
does not meet the project's telephoto criterion. Its $BFD/EFL=0.73605074$ is also below unity, so it is not retrofocus.

Surface-by-surface Petzval evaluation using $\phi/(n n')$ gives a signed sum of +0.00208074546 mm⁻¹. This is a first-order
Petzval quantity, not a complete prediction of best-focus field curvature. The same parsed prescription reproduces the
four-member power signs, all fifteen patent conditions, the calibrated f/2.8 target, positive modeled edge thicknesses,
the current rim-slope limit, and the current cross-gap intrusion rule.

These first-order calculations describe the retained prescription; they do not prove manufactured full-field performance.

## Sources and References

1. Günther Lange, **US Patent 2,799,207**, *Gauss Type Photographic Objective Containing Two Outer Collective and Two
   Inner Dispersive Members*, filed July 29, 1955; German priority August 2, 1954; granted July 16, 1957. Primary source
   used for the prescription: supplied USPTO scan, especially PDF pp. 1–5, Fig. 1, Embodiment I, and claims 1–7.
   Family/publication reference: https://patents.google.com/patent/US2799207A/en
2. The Singer Company / Graflex Division, **Graflex xl Cameras / Lenses / Accessories**, Form No. 11106 / 1171,
   especially the 80mm Zeiss Planar f/2.8 listing, catalog no. 7332, five-element specification, focusing ranges, and
   58° ideal-format diagonal coverage. Archival manufacturer-catalog scan:
   https://www.pacificrimcamera.com/rl/00401/00401.pdf
3. Graflex, Inc., **Graflex XL Camera Guidebook**, especially the combination bayonet/focusing ring description and the
   80mm Zeiss Planar f/2.8 lens listing. Archival scan:
   https://www.cameramanuals.org/prof_pdf/graflex_xi_camera_guidebook.pdf
4. SCHOTT Advanced Optics, optical-glass catalog/search and legacy/current collection data:
   https://www.us.schott.com/shop/advanced-optics/en/search/
5. SUMITA OPTICAL GLASS, all-glass Zemax catalog, including discontinued glasses:
   https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf
6. OHARA INC., **Comparative Table of Recommended Glasses**:
   https://www.ohara-inc.co.jp/en/product/01002/
7. HOYA Optics Division, **Glass Type Cross Reference**:
   https://www.hoya-opticalworld.com/japanese/products/crossreference.html
8. Nikon / HIKARI, **Optical Glass (J-series) — LAK**:
   https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/lak.html

The glass references are used only to establish coordinate/class compatibility. They do not override the patent's nd/νd
values and do not establish the actual Zeiss glass supplier or melt.
