# SCHNEIDER-KREUZNACH XENAR 100mm f/3.5 (US 2,812,689 Design) — Audit

## Source

US 2,812,689 A, _Unsymmetrical Photographic Objective with Three Air-Spaced Members_, by Wolfram Wilhelm Albrecht, assigned to Jos. Schneider & Co. German priority 13 March 1954; US filing 10 March 1955; publication 12 November 1957. The corpus records the inventor as Wolfram W. Albrecht and the assignee as Jos. Schneider & Co., Optische Werke.

The sole figure and the two copies of the same numerical table are the prescription sources. Related publications are GB 769,241 A and FR 1,120,790 A; their numerical tables have not been compared.

## Transcription

Two independent readings of the patent page images agree with the supplied prescription: all seven signed radii, six thicknesses and air spaces, four nd/νd pairs, the 33.83 total track, the R6 cemented junction and the diaphragm space. Both tables print the front index 1.69347. No transcription mismatch was found. The text explicitly names the yellow helium line, so the retained index reference is d.

## First-Order Properties

The printed nominal focal length is 100 and aperture is f/3.5. The model computes EFL 100.134895649 mm, a +0.135% difference, with optical track 33.83 mm. Back focal distance is 83.212048982 mm, placing the image at 117.042048982 mm from the first vertex. The patent prints no back focal distance.

The f/3.5 control produces stop radius 11.509139816 mm. Finite entrance and image-sine aperture estimates are about f/3.55 and f/3.56; the nominal f/3.5 marginal ray would require about 11.694858 mm at the stop. The supplied aperture is within 3% of the stated value.

Earlier optical checks found that rays admitted by the stop reach the image through the illustrative ±5° field, with excluded rays attributable to the iris.

The minimum glass edge is 0.966005 mm in the rear doublet. Common-radius R4–R5 gap clearance is 3.107723 mm; front and rear stop-side rim clearances are 0.818635 and 2.251749 mm. Maximum rim angle is 28.853632°. No geometry adjustment or gap-clearance exception was applied.

## Values Not Printed

The stop plane splits the printed 7.06 mm diaphragm space as 4.50 / 2.56 mm. Its opening, the clear semi-diameters 18 / 18 / 16 / 15 / 16 / 15.5 / 15.5 mm, the paraxial image plane, the ±5° field and the f-stop control sequence are inferred. The model represents the unitless f = 100 dimensions in millimeters. No field angle, image circle, image format, close-focus distance, motion law, physical barrel or baffle dimensions are supplied.

## Product Association

This is a Tessar-type design and the patent cites Rudolph's US 721,240. Schneider marketed the Tessar-type Xenar family; Franke & Heidecke's [Rolleicord V manual](https://www.cameramanuals.org/rolleiflex/rolleicord_v.pdf), printed p. 3, documents the Xenar f/3.5 name. The family association is supported, but no source identifies a specific production Xenar with this prescription. The earlier US 2,084,714 and DE 753,329 Xenar prescriptions differ.

## Corrections

No printed radius, thickness, spacing, index or Abbe number has been corrected. The image plane, stop position and estimated rims are retained. Bibliographic spelling, catalog glass descriptions and element/group descriptions were brought into the corpus form on 21 November 2026.

## Remaining Questions

Open: The drawing suggests semi-diameters near 17.1 / 17.1 / 12.5 / 11.7 / 12.6 / 13.7 / 13.7 mm, narrower than the model. The L4 edge is about 0.97 mm in the model versus about 2.4 mm in the drawing. These differences await a separate semi-diameter review; no rim change is made in this pass.

Open: Historical glass suppliers, a specific production-lens attribution and the numerical contents of the related British and French publications remain unresolved. The patent provides no field or format against which to establish image-circle coverage.

## 2026-11-21 — Deployment validation and cleanup

Two independent re-readings of the page images checked both tables, all signed radii, thicknesses, spaces, glass pairs, total track, cemented interface and diaphragm-space definition; no transcription error was found. The prescription is sound with the stated aperture and field limitations, and the Xenar association remains at family level.

- File form: copied type-import path → shared lens-data type path; `data` → `LENS_DATA` with the matching default export. Added a single header explaining the source, units, inferred stop, estimated rims, paraxial image plane and illustrative field.
- Identity: `albrecht-us2812689-infinity-reference` → `schneider-kreuznach-xenar-100mm-f35-us2812689`; Albrecht title → `SCHNEIDER-KREUZNACH XENAR 100mm f/3.5 (US 2,812,689 Design)`; maker `null` → `Schneider-Kreuznach`; visibility `false` → `true`.
- Source: `US 2,812,689` → `US 2,812,689 A`; `Wolfram Wilhelm Albrecht` → `Wolfram W. Albrecht`; `Jos. Schneider & Co.` → `Jos. Schneider & Co., Optische Werke`, matching the corpus spellings. The 1957 year, Sole example, helium-d reference and estimated-rim provenance are retained.
- Subtitle: aperture and inferred-iris description → `US 2,812,689 A, sole example — Xenar Tessar-type family`. Lengthy specifications → `4 ELEMENTS / 3 GROUPS`, `ALL SPHERICAL`, `DESIGN F/3.5`.
- Elements: `L1`–`L4` labels → `Element 1`–`Element 4`; generic shape descriptions → Positive Meniscus, Biconcave Negative, Biconcave Negative and Biconvex Positive. Added optical roles and standalone focal lengths +55.12 / −35.44 / −49.62 / +28.09 mm.
- Glass: unspecified helium-d descriptions → L1 `Unmatched (nd 1.69347 / ν 53.5)` and L2 `F2 (Schott)`. CDGM H-LaK6A resolves at nd 1.69350 / νd 53.380441, Δn +0.00003 / Δν −0.119559, outside the patent's printed precision, so no catalog curve is assigned to L1; Schott resolves at nd 1.62004 / νd 36.37, Δn 0 / Δν +0.07. L3 and L4 → `Unmatched (nd 1.62364 / ν 36.7)` and `Unmatched (nd 1.74472 / ν 44.7)`. No printed index or Abbe number changed, and no special-dispersion designation was added.
- Cemented pair: L3/L4 `G3` → `C1` on both members; added the C1 bracket from surfaces 5 to 7. Group captions → Front singlet, Middle singlet and Rear cemented doublet.
- Focus: previous infinity wording → `Infinity focus only; the patent gives no close-focus data.` The distance value remains 1e15; its numeric spelling was shortened. No marketed close-focus distance, mount, format or image circle was added.
- Analysis and audit: replaced internal work records with the source, architecture, element powers, glass evidence, focus/aperture limits, first-order properties and family-level product evidence. Closed the earlier uncertainty about access to the page images through the two independent readings recorded above.

Before and after, the EFL is 100.134895649 mm, the aperture control is f/3.5, back focal distance is 83.212048982 mm, stop radius is 11.509139816 mm and illustrative half-field is 5°. Both focus endpoints retain the same infinity geometry. The surface check reports no errors; the aperture check reports no rim limit or failed station and agreement within 3% of the stated f-number. The image-circle and field-coverage checks skip this visible lens because no usable image format or image circle is specified.

Open: Narrower figure rims remain for the separate semi-diameter review. Historical melt identity, specific product attribution, unprinted field/format and comparison of the family publications remain unresolved.

Review corrections: L1 `H-LaK6A (CDGM)` → `Unmatched (nd 1.69347 / ν 53.5)`, with the element, glass and source descriptions corrected; catalog design focal length 100 → 100.13 mm; Xenar–Tessar family statement without a direct reference → cited Tessar-family reference; pupil/stop-perturbation and earlier MTF calculation history → removed. L2 remains `F2 (Schott)` with Δn 0 / Δν +0.07.
