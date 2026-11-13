# Cooke Aviar 8¼ in f/4.5: GB Example I representative

## Patent Reference and Lens Identification

**Patent:** GB 113,590 A  
**Inventor:** Arthur Warmisham  
**Applicant:** Taylor, Taylor & Hobson Limited, with Arthur Warmisham  
**Filed:** 27 November 1917  
**Accepted:** 28 February 1918  
**Title:** Improvements in Lenses  
**Example details:** Example I, normalized focal length 1.00, scaled by ×209.55 for the documented 8¼ in (209.55 mm nominal) f/4.5 Aviar focal length.

Cooke Optics' own Compendium explicitly associates Series II f/4.5 Aviar with British patent 113590 and Arthur Warmisham, describing four separate glasses with no cement. This is a manufacturer retrospective, not a contemporary production drawing or proof that any particular commercial focal length used Example I. The retrospective's account of military use in 1916 is distinct from the 1917 application date; the dates are not conflated.

This model uses the complete original GB publication hosted by a secondary archive. It is a qualified representative of the 8¼ in f/4.5 Aviar, not an established factory prescription. The validator documents f/4.5 Aviars at 5, 6, 7, 8¼ and 10½ inches; the 8¼ in identification selects one of those marketed focal lengths. The ×209.55 scale multiplies all previously delivered model lengths by ×2.0955 and preserves the numerical focal residual. Example II is a distinct unmodeled embodiment, not another entry or proven retail variant.

The comparable US 1,361,207 publication misprints r2 = −0.9152; GB Example I prints −0.8152, which is used here. Both originals are preserved. The GB value is retained without combining the two tables. The formal legal family relationship is not independently established here.

## Optical Architecture

Four spherical, air-separated elements form an approximately symmetrical double objective. Positive outer elements enclose two negative inner elements. The source discusses arranging shallow faces toward the diaphragm and using lower-index negative glasses to improve field correction.

The actual glass indices, radii and spacings are retained without enforcing exact symmetry. Source descriptions of aberration correction are design claims, not measured performance of this reconstruction. The central air interval remains 0.0362 normalized units, or 7.58571 mm at the 8¼ in scale.

## Element-by-Element Analysis

### L1: front positive element

Source nD = 1.6116, V = 56.4; dense baryta crown class, no exact melt identified. Its GB second radius is −0.8152, explicitly different from the US counterpart. The source positive power is preserved rather than retuned to nominal focal length.

### L2: front negative element

Source nD = 1.5682, V = 43.4; light flint class. It is separated from L1 by the source air space and is not cemented. Its diaphragm-facing surface is the shallower of the two inner curvatures for this element.

### L3: rear negative element

Source nD = 1.5502, V = 45.8; light flint class. Its glass differs from L2. The literal table's diaphragm-facing radius magnitude 0.5041 is larger than the rear-facing 0.4330; both are preserved.

### L4: rear positive element

Source nD = 1.6116, V = 56.4; dense baryta crown class. The outer positive elements share the stated glass class and numerical index/dispersion, but no modern catalog replacement or melt identity is established.

The stored isolated-element focal lengths in air are 75.878055, −80.29956, −88.38819 and 75.878055 mm for L1–L4, respectively. These labels uniformly scale the delivered rounded derived values by ×2.0955; they are not patent-published element focal lengths.

## Glass Identification and Selection

The GB text explicitly defines nD for sodium D light and V as (nD − 1)/(nF − nC). No spectral definition is inferred from an unlabeled number. The engine's d-reference representation nevertheless approximates the historical sodium D reference; it is not proof of an exact modern helium-d melt. Full partial dispersion and measured chromatic performance are not known.

The source calls the outer glasses dense baryta crown and the negative glasses light flint. These are source classes, not exact vendor catalog identifications. No index or Abbe number is adjusted to reduce the focal-length residual.

## Focus Mechanism

The representative is infinity-only. Its terminal image interval, 193.370081 mm, is calculated from the literal GB prescription, not printed as a source BFL. No finite-focus law, retail minimum focus or movement is reconstructed.

At ×209.55 scale the literal EFL is 210.884749523 mm, approximately +0.637% relative to the nominal 209.55 mm (8¼ in). The catalog records marketing focal length 209.55 mm and design focal length 210.88 mm, the traced EFL rounded to two decimals. The +0.637% residual is inherent in the patent’s loose unit-focal-length normalization and is retained without fitting. The US literal table separately gives EFL 226.512293 mm at the same ×209.55 scale and is retained as different source evidence, not a failed variant silently repaired into this model.

## Aperture and Iris Assumptions

The source specifies f/4.5 but does not give surface clear apertures or a numerical stop split. A common 25.146 mm surface semi-diameter uniformly scales the delivered 12 mm inference by ×2.0955. The delivered value was the largest half-millimeter grid value satisfying the default 0.9 geometry limits; its scaled counterpart remains an inference, not a measured production aperture or a ray-success optimization.

The iris is hypothesized at the midpoint of the 7.58571 mm central gap: 3.792855 mm on either side. The previously quoted full-cap clearances scale to approximately 0.349647 mm and 0.75623 mm. Native f/4.5 pupil construction yields a physical iris radius of 20.320947254 mm. The coordinate and radius are model assumptions/derivations, not source dimensions. The f-stop UI through f/22 is convenience, not a validated retail minimum aperture.

All radii, thicknesses, air spaces, rims and derived element focal-length labels use the same ×2.0955 rescale. No glass value, dimensionless prescription ratio or geometry limit is changed. No rim exception, extension or gap-sag allowance override is applied.

## Verification Summary

The original package recorded native construction and strict isolated TypeScript checks at its former representative scale. Independent source and scoped geometry reviews accompany the package. The original GB/US difference and GB focal residual remain explicit.

At the former representative scale, five sparse nominal 36 × 24 mm frame-angle diagnostics, each with 25 pupil samples plus the chief, gave 26 successful optical traversals at each tested field. The saved traces end at the final optical surface, not at a separately tested image-plane landing. These counts do not establish full pupil throughput, MTF, manufacturing quality or a source-backed commercial image format. No numerical source field is asserted.

At the 8¼ in scale, the surface and aperture audits pass with no rim limit, and the image-circle audit finds no undersized surface. A visible scratch copy gives 100% modeled coverage of the 5×7 format: 109.25 mm image semi-height (218.5 mm diagonal), approximately 27.286873° half-field, and a clear corner chief ray with no rim clips. This exceeds the assigned 98% threshold, so the catalog format is 5×7. These checks establish modeled coverage, not a patent-published field or measured production performance.

The model remains hidden for qualified pre-integration review. Full current-corpus/app tests, lint/format integration, build, browser and MTF checks are deferred, not passed. No release or deployment is implied.

## Sources

- [Original GB113590](https://www.photo-china.net/pat/GB113590.pdf), complete four-page scan; Example I and explicit spectral definition on PDF page 2. Primary content on a secondary host.
- [Original US1361207](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/1361207), separately preserved, not substituted for the GB prescription.
- [Cooke Optics Compendium](https://cookeoptics.com/compendium/), manufacturer retrospective linking Aviar, Arthur Warmisham and British patent 113590; not exact retail example identity.
