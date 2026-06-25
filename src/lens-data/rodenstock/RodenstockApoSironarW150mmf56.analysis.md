# Rodenstock Apo-Sironar-W 150 mm f/5.6

## Patent Reference and Design Identification

**Patent:** DE 3,907,928 A1
**Filed:** 11 March 1989
**Published:** 20 September 1990
**Inventors:** Ernst Rothe; Josef Weiss
**Applicant:** Optische Werke G. Rodenstock, München, DE
**Classification:** G02B 9/60
**Title:** *Objektiv mit großem Bildwinkel*
**Embodiment analyzed:** Table 5, with an EFL-reconciled reconstruction
**Total worked examples:** Five numerical tables

DE 3,907,928 A1 describes a large-format wide-angle objective whose worked examples are stated to have an image angle of 80° and an aperture ratio of about f/5.6. The patent's general construction is a four-lens front group and a three-lens rear group separated by a diaphragm. Table 5 is the only example with a stated focal length near 150 mm: `f = 148.7` mm.

The production identification is strong but not mechanically exact. Product literature for the Apo-Sironar-W 150 mm f/5.6 lists an 80° field at f/22, a 252 mm image circle, maximum recommended 5×7 in. format, and a 7-element / 5-group construction. Table 5 supplies the 148.7 mm patent focal length and the same 80° / f/5.6 design class, so it is the relevant patent example for the 150 mm Apo-Sironar-W. The unresolved problem is that the literal patent claim and figure describe a 7-element rear-group topology, while the printed Table 5 numerical data cannot reproduce the stated focal length under that topology.

The accompanying data file therefore transcribes an EFL-reconciled reconstruction of Table 5, not an unqualified measured production prescription. It uses the patent's stated surface-medium convention, assigns an inferred CaF2-class medium after surface 8, and adds an implicit flat rear surface after the final printed glass thickness. This produces the printed `f = 148.7` mm exactly, but it gives an 8-element / 5-group reconstruction. The production literature remains authoritative for the public product count: 7 elements in 5 groups.

## Optical Architecture

The patent architecture is a wide-angle plasmat-derived large-format objective. The front group consists of four lenses: L1, a cemented L2+L3 doublet, and L4. The rear group in the claim and drawing consists of three lenses, with the second and third rear lenses cemented in at least the claimed form. All principal lens surfaces are curved toward the diaphragm, a symmetry condition explicitly stated in the claims.

The reconstructed Table 5 data model has five air-spaced groups: L1, L2+L3, L4, L5+L6, and L7+L8. The additional rear element is not asserted as proven production construction. It is the minimum paraxial reconstruction that reconciles Table 5 with the printed focal length.

The front group is net negative in the reconstructed model. Independent paraxial tracing gives a front-group focal length of approximately −400.13 mm. The rear group is strongly positive, with a focal length of approximately +91.10 mm. The full system focal length is 148.700 mm, and the computed back focal distance from the explicit flat rear surface is 116.091 mm.

Table 5 gives the surface-7 air space as `d7 = 8.60` mm and separately gives `Blende = 7.45` mm. The Figure 1 section places the diaphragm close to the first rear surface, so the data file interprets this as 7.45 mm from surface 7 to the stop and 1.15 mm from the stop to surface 8.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

`nd = 1.52`, `νd = 64.2`. Glass: N-BK7 class, Schott-equivalent after patent rounding. `f = +297.3 mm`.

L1 is a weak positive meniscus with `R1 = +32.66` mm and `R2 = +39.24` mm. Its role is front collection with limited individual power. The claim condition `R2 > R3` is satisfied because `39.24 > 32.90`.

The rounded glass data match a common borosilicate crown class rather than a distinctive special glass. Because the patent rounds the index to two decimals, the catalog label should be read as a class-equivalent assignment, not a melt-level identification.

### L2+L3 — Front Cemented Doublet

**L2:** `nd = 1.62`, `νd = 63.5`. Glass: N-PSK53A / phosphate-crown class, Schott-equivalent after patent rounding. `f = +64.2 mm`.

**L3:** `nd = 1.69`, `νd = 49.6`. Glass: unmatched dense lanthanum/barium flint class. `f = −33.0 mm`.

The L2+L3 doublet is the main front chromatic-correction component. L2 is a strong positive meniscus; L3 overcorrects it with a high-index lower-Abbe negative meniscus. The cemented assembly is net negative, with a reconstructed standalone focal length of approximately −92.21 mm.

The cemented radius `R4 = +169.09` mm satisfies the claim condition `f < R4 < 2f`: for Table 5, `148.7 < 169.09 < 297.4`. The very small L1-L2 air gap, `d2 = 0.10` mm, also satisfies `d2 < 0.01 f`, since `0.01 f = 1.487` mm.

### L4 — Positive Meniscus, convex to object

`nd = 1.50`, `νd = 56.4`. Glass: K10 class, Schott-equivalent after patent rounding. `f = +220.6 mm`.

L4 is the fourth front-group element required by the patent's principal construction. Its individual focal length is longer than the 148.7 mm system focal length, so it is a moderate-power correction element rather than the main power source. It contributes to field and oblique-aberration control while preserving the large stop space required for a shuttered large-format objective.

### Aperture Stop

The diaphragm is positioned in the air space between L4 and the rear group. For the data file, the stop semi-diameter is computed from the f/5.6 entrance pupil. With `EFL = 148.7` mm, the entrance-pupil semi-diameter is `13.2768` mm. A paraxial marginal ray of unit object-side height reaches the stop at height `0.827921`, giving a physical stop semi-diameter of `10.9921` mm.

### L5+L6 — Reconstructed First Rear Cemented Doublet

**L5:** `nd = 1.43384`, `νd = 95.23`. Glass: inferred CaF2-class medium. `f = +177.9 mm` in the selected reconstruction.

**L6:** `nd = 1.46`, `νd = 65.8`. Glass: FK3 / fluor-crown class, Schott legacy-equivalent after patent rounding. `f = +109.6 mm`.

Surface 8 in Table 5 lists only a radius, `R8 = −163.71` mm, and omits thickness, refractive index, and Abbe number. That omission is the source of the principal reconstruction problem. The data file chooses a CaF2-class medium for surface 8 to 9 and solves its center thickness to match the printed system focal length. The resulting thickness is `d8 = 2.640884` mm.

This choice is not presented as a patent-disclosed glass name. It is a paraxial reconciliation. Calcium fluoride and S-FPL53-class fluorophosphate glasses occupy the same very-low-index, very-high-Abbe region needed by the reconstruction, but the patent does not publish line indices or partial-dispersion data for surface 8.

The L5+L6 reconstructed cemented group has a standalone focal length of approximately +68.35 mm. It supplies a large fraction of the rear-group positive power.

### L7+L8 — Final Cemented Doublet and Rear Field Corrector

**L7:** `nd = 1.65`, `νd = 39.6`. Glass: N-KZFS5 / KZFS-class short flint special, Schott-equivalent after patent rounding. `f = +54.2 mm`.

**L8:** `nd = 1.62`, `νd = 53.2`. Glass: unmatched dense crown / short-flint class. `f = −45.5 mm`.

L7 is a high-dispersion positive meniscus with both surfaces concave toward the object side. Its catalog class is consistent with KZFS-family glass, but the patent values are rounded, so the identification remains class-level.

L8 is the final negative element. Table 5 prints a 9.55 mm glass thickness after surface 12 but gives no rear radius. The data file therefore adds surface 13 as an explicit flat exit face. Surface 13 is not a patent-numbered surface; it is a data-model closure used to express the final printed glass thickness under the EFL-reconciled convention. The L7+L8 cemented assembly has a weak net negative focal length of approximately −270.39 mm and functions primarily as a rear correction and field-flattening group.

## Glass Identification and Selection

The following assignments are class-level identifications from rounded patent values. The patent gives only `nd` and `νd`, and in many rows `nd` is rounded to two decimal places. Exact melt identification is therefore not justified.

| Element | Patent or reconstructed `nd` | `νd` | Assignment used | Status |
|---|---:|---:|---|---|
| L1 | 1.52 | 64.2 | N-BK7 class | Schott-equivalent after rounding |
| L2 | 1.62 | 63.5 | N-PSK53A / phosphate-crown class | Schott-equivalent after rounding |
| L3 | 1.69 | 49.6 | Dense lanthanum/barium flint class | Unmatched |
| L4 | 1.50 | 56.4 | K10 crown class | Schott-equivalent after rounding |
| L5 | 1.43384 | 95.23 | CaF2 class | Inferred by EFL reconciliation |
| L6 | 1.46 | 65.8 | FK3 / fluor-crown class | Legacy Schott-equivalent after rounding |
| L7 | 1.65 | 39.6 | N-KZFS5 / KZFS class | Schott-equivalent after rounding |
| L8 | 1.62 | 53.2 | Dense crown / short-flint class | Unmatched |

The chromatic strategy is consistent with an apochromatic large-format lens: low-dispersion and anomalous-partial-dispersion glass classes appear in the rear group, while a phosphate-crown/high-index-flint doublet provides front-group chromatic correction. However, the patent table does not publish `nC`, `nF`, `ng`, `PgF`, or `ΔPgF` values. Any secondary-spectrum discussion must therefore remain inferential rather than spectrally proven from the patent data alone.

## Focus Mechanism

The Apo-Sironar-W is a large-format lens in shutter, so focusing is by moving the entire lens standard on the camera. There are no internal focus groups or floating spacings in the patent table.

The data file models unit focus with a single variable back-focus distance. At infinity, the reconstructed BFD is `116.0913` mm. At the illustrative 3.5 m endpoint, paraxial focus moves to `122.6703` mm, a bellows extension of `6.5790` mm. This endpoint is included only for viewer interaction; it is not a manufacturer minimum-focus specification.

## Aspherical Surfaces

The design is all-spherical. DE 3,907,928 A1 provides no aspherical coefficients for Table 5 or for the other worked examples.

## Conditional Expressions

The patent states five conditions for the worked examples:

| Condition | Table 5 result | Status |
|---|---:|---|
| `d2 < 0.01 f` | `0.10 < 1.487` | Satisfied |
| `f < R4 < 2f` | `148.7 < 169.09 < 297.4` | Satisfied |
| `n5 - n7 <= 0.06` | Indexing-dependent | Ambiguous under Table 5 anomaly |
| `n10 - n11 <= 0.05` | Indexing-dependent | Ambiguous under Table 5 anomaly |
| `ν11 - ν10 >= 15` | Indexing-dependent | Ambiguous under Table 5 anomaly |

The spacing and radius conditions are unambiguous and are satisfied directly from Table 5. The refractive-index and Abbe-number conditions are not treated as cleanly verified for the EFL-reconciled Table 5 model because the model adds an inferred medium after surface 8 and an explicit flat surface 13. Those additions alter the literal mapping between the claim's rear-group indexing and the data-file surfaces. A canonical 7-element reading follows the claim and figure more closely, but it fails the printed `f = 148.7` mm focal length.

## Verification Summary

Independent paraxial tracing was rerun from the Table 5 radii, thicknesses, and refractive indices. The following values are from the reconstructed data file prescription.

| Quantity | Computed value |
|---|---:|
| Inferred L5 medium | `nd = 1.43384`, `νd = 95.23` |
| Solved L5 center thickness | `d8 = 2.640884` mm |
| Effective focal length | `148.7000` mm |
| Back focal distance from surface 13 | `116.0913` mm |
| Front vertex to surface 13 | `49.2209` mm |
| Front vertex to image plane | `165.3122` mm |
| Front-group focal length | `−400.13` mm |
| Rear-group focal length | `+91.10` mm |
| Petzval sum | `+0.0034338 mm^-1` |
| Petzval radius | `291.22` mm |
| f/5.6 entrance-pupil semi-diameter | `13.2768` mm |
| Physical stop semi-diameter | `10.9921` mm |

A direct 7-element shifted-row interpretation of the rear group was also tested. It gives `EFL ≈ 312.0` mm and `BFD ≈ 301.7` mm, so it cannot represent the printed Table 5 focal length. This is the reason the delivered data file uses the EFL-reconciled 8-element reconstruction while the analysis keeps the production 7-element count separate.

The semi-diameters were not supplied by the patent. The delivered semi-diameters were checked for element edge thickness, element front/rear semi-diameter ratio, and cross-gap sag intrusion. The tightest checks are the L7 edge thickness, about `0.322` mm at the chosen semi-diameter, and the L3-L4 air gap, which retains about `0.416` mm axial clearance at the chosen rim.

## Design Heritage and Context

The Apo-Sironar-W occupies the late-1980s large-format wide-angle plasmat lineage. Its public product distinction was coverage: the 150 mm Apo-Sironar-S was a 75° / 231 mm image-circle lens, while the Apo-Sironar-W 150 mm was specified at 80° / 252 mm.

The patent's principal design idea is the fourth front-group lens. The specification states that this fourth lens allows correction to be distributed between the front and rear groups while retaining a large diaphragm space for a shutter. That is consistent with the large-format application, where the shutter is normally located near the diaphragm rather than in the camera body.

## Sources

- DE 3,907,928 A1, *Objektiv mit großem Bildwinkel*, Optische Werke G. Rodenstock, published 20 September 1990. Primary source for Table 5 prescription, claims, and the Figure 1 lens section.
- B&H Photo / Rodenstock large-format catalog listing, “Specifications of Apo Sironar W Lenses.” Source for production Apo-Sironar-W 150 mm specifications: 80° field, 252 mm image circle at f/22, 5×7 in. maximum recommended film format, and 7 elements in 5 groups.
- SCHOTT optical-glass datasheets for N-BK7, N-PSK53A, and N-KZFS5 reference values.
- OHARA S-FPL53 datasheet and calcium-fluoride material data for comparison with the inferred Table 5 L5 medium.
