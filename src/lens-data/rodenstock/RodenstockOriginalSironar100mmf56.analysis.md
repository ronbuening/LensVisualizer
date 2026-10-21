# Rodenstock Sironar 100mm f/5.6 (original convertible)

## Patent Reference and Design Identification

**Patent:** DE 1 258 134 B  
**Application Number:** O 11178 IX a/42 h  
**Filed:** 14 October 1965  
**Published:** Auslegeschrift 4 January 1968; Patentschrift issued 1 August 1968  
**Inventor:** Franz Schlegel  
**Assignee:** Optische Werke G. Rodenstock  
**Title:** Viergliedriges, sechslinsiges Objektiv  
**Embodiment analyzed:** Example I / claim 2 / Figure 1, normalized f′ = 100, f/5.6

This is a qualified patent-derived model of the original convertible Sironar 100mm f/5.6, not a recovered production prescription. The later non-convertible Sironar-N and later Apo-Sironar designs are separate and are not substituted.

The pairing rests on convergent primary evidence:

1. Rodenstock/Berkey's catalog, revised August 1967, lists the 100mm f/5.6–45 Sironar, catalog 160-111, in an O-M-X-V shutter.
2. The original maker section shows six elements in four air-separated components, 2+1+1+2, with the larger/thicker front assembly matching the asymmetric Example I rather than symmetric Example II.
3. The original maker describes front-cell conversion at approximately three times the assembled focal length. The Example I front half (L1–L3) has a paraxial EFL of 275.67 mm against 100.08 mm for the complete lens, consistent with that approximate statement. The rear half (L4–L6) alone has 111.48 mm, too close to the assembled focal length to serve as a converted lens. The converted cell's image quality is not modeled.

No factory radii, clear apertures, glass melts or measured performance have been identified. The patent's f′ = 100 normalization is used at scale 1 for the nominal 100 mm lens, without adjustment to an exact 100 mm. The catalog's 51 mm front diameter is a mechanical dimension, not an optical clear aperture.

## Optical Architecture

The six-element, four-component layout consists of a front cemented doublet, two separated positive menisci surrounding the stop, and a rear cemented doublet. The diagram labels the two cemented doublets D1 (L1–L2) and D2 (L5–L6), and brackets the front cell (L1–L3) and rear cell (L4–L6) on either side of the stop; the patent itself numbers only surfaces, thicknesses and airspaces. All ten refracting interfaces are spherical. The long cement-interface radii −774 mm and +142.7 mm are finite curvatures, although the patent drawing shows them as nearly straight lines.

At the patent's e-line indices the isolated air-separated components have focal lengths of −218.618, +100.149, +123.803 and +499.991 mm. Example I therefore has a negative front doublet but a weakly positive rear doublet. The patent's introduction calls both outer cemented components divergent; that general wording does not match the rear doublet of the numerical example, and the prescription is kept as printed. These isolated powers do not add up to the assembled lens's power.

The patent places the stop inside the 10.1 mm central airspace, 5.3 mm after R5 and 4.8 mm before R6. The iris diameter is not printed and is set from the f/5.6 axial ray. The 33.1 mm vertex span is compact relative to the focal length, and the back focal distance is shorter than the EFL.

## Element-by-Element Analysis

| Element | Source surfaces | Shape and role | n_e / ν_e | Isolated thick-element EFL |
|---|---|---|---|---:|
| L1 | R1 +22.79, R2 −774 | Biconvex positive outer member of front doublet | 1.6055 / 60.5 | +36.702 mm |
| L2 | R2 −774, R3 +14.66 | Biconcave negative inner member, cemented to L1 | 1.5543 / 49.3 | −25.928 mm |
| L3 | R4 +20.20, R5 +31.94 | Positive meniscus before the stop | 1.5201 / 65.0 | +100.149 mm |
| L4 | R6 −42.35, R7 −25.83 | Positive meniscus after the stop | 1.5201 / 65.0 | +123.803 mm |
| L5 | R8 −14.93, R9 +142.7 | Biconcave negative inner member of rear doublet | 1.5543 / 49.3 | −24.292 mm |
| L6 | R9 +142.7, R10 −17.95 | Biconvex positive outer member, cemented to L5 | 1.6055 / 60.5 | +26.631 mm |

The patent specifies a glass of anomalous dispersion, preferably a short flint, for the negative inner element of each doublet (L2 and L5), and credits it with an at least partially apochromatic correction. The patent prints no partial-dispersion values, so that property is recorded but not modeled.

## Glass Identification

The patent lists n_e and ν_e (e-line, 546.07 nm), and the data file keeps those values with an e-line index reference rather than relabeling them as d-line values.

The patent names no glass types and the historical melts are unidentified. Four of the six elements have catalog glasses whose e-line coordinates equal the printed pairs, and the model uses them as dispersion curves:

| Element | Printed n_e / ν_e | Catalog equivalent | Catalog n_e / ν_e |
|---|---|---|---|
| L1, L6 | 1.6055 / 60.5 | Hoya BACD14 (SK14 type) | 1.60548 / 60.43 |
| L3, L4 | 1.5201 / 65.0 | Hoya PC2 (PK2 phosphate-crown type) | 1.52011 / 64.96 |

Both are evaluated at C′/e/F′, the reference lines the patent uses. The period Schott SK14 and PK2 sit at the same coordinates; a 1960s Rodenstock lens more likely used those, but the supplier is not documented, and the labels name catalog equivalents only.

The 1.5543/49.3 short flint of L2 and L5 is traced on Hoya's obsolete SBF1 short flint as a catalog proxy: it matches ν_e within 0.04 and lies 0.0005 below the printed n_e, and the e-line elements stay anchored at the patent's index. SBF1's own partial dispersion sits slightly below the normal line (ΔP_g,F ≈ −0.0025), in the direction the patent describes, but the patent prints no partial-dispersion values, so the size of the anomaly in the production glass, and the full apochromatic correction it credits, are not established.

## Focus Mechanism

As a view-camera lens, the Sironar focuses by bellows extension: the whole lens moves away from the film and all internal spacings stay fixed (unit focus). The patent prints only the infinity state.

The model's close state is derived, not published. For a 1.0 m object-to-image distance, the paraxial extension is 12.69 mm: the back focus grows from the printed 83.5 mm to 96.19 mm, with the object 870.7 mm in front of R1 and a magnification of about −0.127. The 1.0 m end of the focus slider is a modeling choice; a view camera has no fixed minimum focus distance, so it is not a manufacturer specification.

## Iris, Clear Apertures and Field Coverage

The patent's stop position is kept. The real axial marginal ray at f/5.6 gives an iris semi-diameter of 7.033 mm, and the iris, not an element rim, limits the axial beam. The paraxial working f-number for that iris is 5.625; the small difference comes from setting the iris with a real ray rather than a paraxial one.

The patent prints no clear apertures. The modeled semi-diameters are 14 mm for the front doublet (R1–R2), 7.6 mm for R3–R5, 7.2 mm for R6–R8 and 10.6 mm for the rear doublet (R9–R10), measured from the proportions of Figure 1. The two menisci and the inner faces of the doublets are drawn barely wider than the f/5.6 axial beam (7.25–7.28 mm before the stop, 6.88–6.96 mm after it), and the model keeps that. These are estimates, not factory clear apertures or a full mechanical model.

The maker's field statements differ:

- The August 1967 catalog says 60° at full aperture and slightly over 70° stopped down.
- Another original maker sheet gives 65°, 67° and 70° at full aperture, f/11 and f/16, with image-circle diameters of 127, 137 and 147 mm.

The model uses the 127 mm wide-open circle; its chief ray reaches the 63.5 mm image height at about 32.3° and clears every rim. At full aperture, the rims of the menisci and inner doublet faces cut off a large part of the oblique bundles at the edge of the circle. This mechanical vignetting falls sharply on stopping down, consistent with the maker's larger stopped-down circles. The 6×9 cm format's corner (50.5 mm image height) lies well inside the 127 mm circle.

## First-Order Results and Image Plane

At the printed e-line prescription:

- EFL: 100.081 mm, +0.08 % from the nominal 100 mm.
- Paraxial back focal distance from R10: 83.699 mm.
- Printed back focus s′: 83.5 mm, used as the infinity image distance; the paraxial value is 0.199 mm longer.
- Vertex span: 33.1 mm; R1 to the infinity image plane: 116.6 mm.
- Principal planes: H 18.690 mm behind R1; H′ 16.382 mm in front of R10.

The 0.199 mm difference is larger than the rounding of the printed s′ alone. Values within the rounding of the printed radii and thicknesses can reproduce 83.5 mm, so print precision may explain it, but the cause is not established. The model keeps the printed 83.5 mm and does not move the image plane to the paraxial focus.

## Model Scope and Limitations

At f/5.6 the best axial focus lies about 0.16 mm behind the printed image plane, between the printed s′ and the paraxial focus. The model keeps the printed plane.

The model's reference wavelength is the e-line. Its color results rest on catalog-equivalent curves for four elements and an Abbe-number estimate for L2/L5, and it uses estimated clear apertures; none of this is a manufacturer measurement. The anomalous dispersion of L2/L5, the actual melts, coatings, tolerances, the mechanical mount and close-focus image quality are not represented.

## Family Variants

DE 1 258 134 A (Auslegeschrift), DE 1 258 134 B, GB 1 130 456 and FR 1 495 079 print the same two examples with identical numbers. Figure 1 of the German and French documents shows the asymmetric Example I; the British specification reverses the figure numbers, so its Figure 2 shows Example I. Example II (f/6.8, symmetric) is not used. The German/French claims and the British specification word the permitted tolerances differently; the nominal prescription is the same in all of them.

## Sources

- DE 1 258 134 B, pages 1–2 (numerical tables and claim 2) and page 3 (Figure 1).
- DE 1 258 134 A, GB 1 130 456 A and FR 1 495 079 A, family publications with the same numerical tables.
- Rodenstock/Berkey dealer sheet PRC02640, page 3, revised August 1967: original 100mm listing and 60°/stopped-down field statement.
- Rodenstock brochure PRC00863, page 2: original optical section, conversion statement and focal-length-specific fields and image circles.
- Rodenstock brochure PRC01474, page 4: original convertible Sironar versus the later non-convertible Sironar-N.
