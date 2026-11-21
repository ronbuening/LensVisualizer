# VOIGTLÄNDER 150mm f/2 (US 2,673,491 Design) — Audit

## Source

US 2,673,491 A was filed on 7 September 1951, claims Swiss priority of 14 September 1950, and was granted on 30 March 1954. The inventor is Albrecht Wilhelm Tronnier, and the assignee is Voigtländer AG. The sole numerical example is illustrated in Figure 2; Figure 1 explains the general arrangement.

## Transcription

Two independent readings of the patent page images agree on all ten signed radii, six glass thicknesses, three air spaces, the two distances locating the stop, six refractive indices, six Abbe numbers, and the printed back focus. No transcription mismatch was found. The patent identifies the helium d line at 5876 Å. It describes Figure 2 at 150 mm focal length in natural size.

## First-order

The computed effective focal length is 149.998784560 mm, compared with the stated 150 mm. The computed paraxial back focus is 107.155573064 mm, compared with the printed 107.154 mm. The 0.001573064 mm difference is consistent with rounding. The paraxial aperture is f/2.000, and the inferred stop radius is 25.894351772 mm. The powered track is 96.123 mm and the first-vertex-to-image distance is 203.278573064 mm. The image plane is the paraxial infinity plane.

## Not Printed

The clear semi-diameters and physical iris diameter are estimates. The patent supplies the stop position, with 16.3965 mm before it and 14.2215 mm after it, but no close-focus data or camera format. The glasses have no established catalog identities or published individual C-, F-, or g-line indices. The former 10° half-field was an unprinted display choice; the patent states a 60° full illumination field.

## Product

No production lens is documented for this prescription. The Ultron 50mm f/2 associated with US 2,627,204 A has a different six-element, five-group arrangement. The present design has six elements in four groups, with cemented interfaces at R4 and R7.

## Corrections

The numerical prescription has no identified transcription correction. The computed image-plane distance differs slightly from the rounded printed back focus as stated above. The printed illumination field, estimated rim sizes and modeled image quality describe different properties and carry separate limits.

## Remaining Questions

The estimated rims are generally wider than Figure 2. Approximate figure readings are R1/R2 39.9/35.2 mm, R3/R4/R5 35.3/35.3/26.3 mm, R6/R7/R8 24.5/29.2/29.0 mm, and R9/R10 31.3/31.3 mm. The drawing suggests a stop radius near 26.6 mm. Some smaller figure rims would cut the f/2 beam or the stated field; the existing rims and inferred iris remain in place. The historical glasses, production use and full-field image quality are unresolved.

## 2026-11-21 — Deployment validation and cleanup

Two independent readings of the page images agree on the numerical example, signs, materials, cemented interfaces, stop distances, back focus, helium-d definition and natural-size statement. The prescription is consistent with the printed focal length and back focus to their rounding; no production lens is documented, and the Ultron comparison supplies no product identification.

Changes:

- Import path: `../repo/src/types/lensDataV2.js` → `../../types/lensDataV2.js`; constant and export: `data` → `LENS_DATA`, matching the lens-file form. A single header now states the source, dimensions and inferred quantities.
- Key: `tronnier-us2673491-figure2-infinity-reference` → `voigtlander-150mm-f2-us2673491`; maker: absent → `Voigtländer`; name: `TRONNIER US2673491 FIGURE 2 — 150mm f/2` → `VOIGTLÄNDER 150mm f/2 (US 2,673,491 Design)`; visibility: false → true.
- Patent number: `US 2,673,491` → `US 2,673,491 A`; example: `Figure 2`, id `2` → `Sole example`, id null; author: `Tronnier` → `Albrecht Wilhelm Tronnier`; assignee: `Voigtländer` → `Voigtländer AG`. The year remains 1954.
- Subtitle: the former wording about source status and estimated apertures → `US 2,673,491 A, sole example — six-element Gauss design`. The eight long specification strings → `6 ELEMENTS / 4 GROUPS`, `DESIGN f = 150 mm`, `DESIGN F/2`, `ALL SPHERICAL`.
- Traced half-field: 10° → 30°, following the printed 60° full illumination field. Image circle: absent → 167.338163 mm, twice the real 30° chief-ray height of 83.669081371 mm at the paraxial image plane. The 60° full-field value remains unchanged.
- Element labels: L1–L6 → Element 1–Element 6. Types: the former generic spherical designation → positive meniscus, positive meniscus, negative meniscus, biconcave negative, biconvex positive and biconvex positive. Plain optical roles and individual in-air focal lengths were added: +196.52, +151.99, −83.72, −52.81, +64.35 and +152.73 mm.
- Cemented annotations: absent → C1 on Elements 2–3 and C2 on Elements 4–5, with brackets spanning R3–R5 and R6–R8. The physical interfaces remain R4 and R7.
- Glass descriptions: the shared long unmatched description → `Unmatched (nd 1.67125 / ν 47.1)` on Elements 1–2, `Unmatched (nd 1.69842 / ν 30.1)` on Element 3, `Unmatched (nd 1.60266 / ν 38.4)` on Element 4, `Unmatched (nd 1.65953 / ν 57)` on Element 5, and `Unmatched (nd 1.7174 / ν 48.1)` on Element 6. Each relabel has Δn = 0 and Δν = 0; all indices retain the printed d-line basis.
- The closest catalog candidates remain unsuitable: N-BAF10 (Schott), Δn −0.001220 / Δν +0.01; S-TIM35 (Ohara), +0.000527 / +0.027865; F5 (Schott), +0.000760 / −0.37; STK3 (LZOS), −0.000028 / +0.35; LAF3 (Hoya), −0.000400 / −0.12. The first, second, third and fifth disagree with the printed index; STK3 disagrees with the printed Abbe number. No supplier is assigned.
- Focus description: the long calculation history → `Infinity focus only; the patent gives no close-focus data.` The infinity bound remains 10¹⁵ m. The analysis now explains identification, architecture, each element, glass limits, focus, field coverage and sources; the audit records the source decisions and remaining questions.

Before and after, the effective focal length is 149.998784560 mm, the paraxial aperture f/2.000, the back focus 107.155573064 mm, and the stop radius 25.894351772 mm. All R, d, n, ν, clear radii, stop and image-plane positions are unchanged. The rounded catalog design focal length remains 150.00 mm.

Surface checks report no errors. Aperture checks find no rim limit and reproduce the stated f/2 within 3%. The image-circle check reports no undersized rims. Field coverage is 100%: the 30° corner chief ray is clear. This is a chief-ray coverage result, not a claim of full-pupil transmission or uniform illumination.

Open: the rim differences from Figure 2 listed above remain for a semi-diameter assessment; reducing them would require reconciling axial aperture and edge-field clearance. Historical glass identities, production use and measured wide-field performance remain unresolved.
