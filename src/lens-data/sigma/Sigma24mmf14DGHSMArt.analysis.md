## Patent Reference and Design Identification

**Patent:** JP 2016-012034 A
**Application Number:** JP 2014-133470
**Filed:** 2014-06-30
**Published:** 2016-01-21
**Inventor:** Ryo Shioda
**Applicant:** Sigma Corporation
**Title:** Optical system (光学系)
**Example details:** 数値実施例1, pp. 14–15; Figure 1, p. 27; conventions ¶0077–0084.

This is an unscaled transcription of Numerical Example 1, a **related patent design**,
not a confirmed factory prescription for the SIGMA 24mm f/1.4 DG HSM | Art (A015).
The 34-page A publication supplies the prescription; the later grant was not compared.
Numerical Example 6 remains a viable alternative, with the same architecture and the
same FLD and SLD positions. Example 1 is the closer fit: surface positions read from
Sigma's drawing at both focus positions match it to 0.15 mm rms, against 0.25 mm for
Example 6, and Example 6's L2 is a low-dispersion glass (νd 71.68) that the drawing does
not mark. Sigma's drawing is a small image, so this ranks the examples without proving one.

The link between Sigma's lens and the patent rests on several convergent but non-unique facts:

1. Both have 15 elements in 11 air-separated groups, including two doublets and one triplet.
2. Sigma's optical diagram places three FLD-marked elements at L3/L5/L10 and
   four SLD-marked elements at L7/L8/L12/L13, matching the patent's respective
   νd = 95.10 and 68.63 positions. These are material-family correlations, not melt identities.
3. Three aspherical surfaces occur on two elements, L2 and L15, matching Sigma's diagram.
4. Sigma's diagram marks G1 as fixed and shows two separate focus groups, matching G2A and G2B.
5. The patent's infinity values of f = 24.65 mm, F1.47 and 83.38° full field are consistent
   with the marketed 24mm f/1.4 class, but the marketed values are not substituted into the
   prescription.
6. The printed near state is 247.5954 mm object to image; its caption says 248 mm and
   Sigma specifies 250 mm. Its magnification of 0.187 compares with Sigma's 1:5.3.
   The close agreement supports a relation, not an exact identity, and the printed
   distances are not altered to match.

The catalog entry lists the Sigma SA, Canon EF and Nikon F versions and the later Sony E and
L-Mount versions that Sigma lists for this lens; the mirrorless barrels are not modeled
separately. The DG DN lens is a different design. Sigma's filter diameter is not used as a
clear aperture.

## Optical Architecture

The patent describes a large-aperture retrofocus-type wide-angle system with a
front group G1 and positive rear group G2 divided into G2A and G2B (¶0031–0035).
Numerical Example 1 has group focal lengths approximately −129.91, +81.81 and
+42.03 mm, respectively. The first three elements form a negative meniscus front
section; the following positive and cemented groups restore convergence.

G1 spans patent surfaces S1–S11 (L1–L6) and is fixed relative to the image plane.
G2A spans S12–S16 (L7–L9). G2B includes the S17 stop and S18–S27
(L10–L15). The stop is 4.1343 mm ahead of S18 and moves with G2B.
The groups move independently objectward for close focus; this is not unit focusing.
Total first-vertex-to-image distance remains 132.5954 mm.

There are 26 refracting surfaces and one plane stop. The patent lists no cover plate,
resin layer or front protective filter, and none is added.
Cemented contacts are L5/L6, L8/L9, L10/L11 and L11/L12. G1, G2A and G2B are the three
focus-motion groups; they are distinct from the 11 air-separated groups.

## Element-by-Element Analysis

The following powers are isolated thick-element d-line paraxial focal lengths in
air, computed from the printed radii, thickness and index. Cemented in-system power
is not the sum of these values. Glass names are catalog coordinate equivalents.
Element-role descriptions below are optical interpretations of position and power,
not measured aberration allocations or Sigma manufacturing claims.

### L1 — Negative Meniscus

nd = 1.92119, νd = 23.96. Glass: FDS24 (HOYA, coordinate equivalent). f = -55.30 mm.

The high-index, strongly dispersive front negative meniscus is convex toward the object. It establishes the negative front power and long-back-focus architecture. Patent claim 1 constrains its index and contrast with the higher-Abbe front-group materials.

### L2 — Negative Meniscus (Asph)

nd = 1.58913, νd = 61.25. Glass: M-BACD5N (HOYA, coordinate equivalent). f = -143.35 mm.

This second negative meniscus carries aspheric S3 on its object-side face. It participates in the front negative section; its aspheric departure provides a degree of freedom beyond spherical bending for the wide-field ray bundles.

### L3 — Negative Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA, coordinate equivalent) — FLD position. f = -112.39 mm.

This low-index, very-high-Abbe negative meniscus completes the three-element front negative section. Its material placement matches an FLD-marked position in Sigma's diagram; that correspondence does not identify a production supplier or melt.

### L4 — Biconvex Positive

nd = 1.90366, νd = 31.32. Glass: TAFD25 (HOYA, coordinate equivalent). f = +72.70 mm.

This high-index positive biconvex element introduces positive power behind the negative front section. Its glass has much lower Abbe number than the adjacent high-Abbe elements, providing contrasting dispersion rather than a demonstrated apochromatic correction.

### L5 — Biconcave Negative

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA, coordinate equivalent) — FLD position. f = -55.51 mm.

This low-index, very-high-Abbe negative member is cemented to L6 at S10. Together they form doublet C1, completing fixed G1. Its contact and material contrast are printed facts; its precise share of chromatic correction is inferred.

### L6 — Biconvex Positive

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA, coordinate equivalent). f = +45.35 mm.

The high-index positive member of C1 shares S10 with L5. The large index and dispersion contrast across the cemented interface supplies substantial refractive power in a compact group.

### L7 — Biconvex Positive

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA, coordinate equivalent) — SLD position. f = +48.32 mm.

The positive biconvex element starts moving group G2A. Its moderately low index and high Abbe number match an SLD-marked position in Sigma's diagram at the material-family level only.

### L8 — Biconvex Positive

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA, coordinate equivalent) — SLD position. f = +50.98 mm.

This positive member of doublet C2 uses the same printed index/Abbe pair as L7 and is cemented to L9 at S15. C2 is part of G2A, which has smaller objectward travel than G2B.

### L9 — Biconcave Negative

nd = 1.64769, νd = 33.84. Glass: E-FD2 (HOYA, coordinate equivalent). f = -31.69 mm.

The negative member of C2 provides opposite power and substantially lower Abbe number than L8. It terminates G2A at S16, before the variable air interval leading to the stop in G2B.

### L10 — Positive Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA, coordinate equivalent) — FLD position. f = +73.23 mm.

This low-index, very-high-Abbe positive meniscus is the first member of triplet T1 behind the stop. It is cemented to L11 at S19. Its high-Abbe material correlates with the third FLD-marked position; the patent prints no partial dispersion for it.

### L11 — Biconcave Negative

nd = 1.80610, νd = 33.27. Glass: NBFD15 (HOYA, coordinate equivalent). f = -19.04 mm.

The strongly negative central member of T1 lies between positive high-Abbe members L10 and L12. Its two cemented interfaces form a compact combination of opposite powers and contrasting dispersion.

### L12 — Biconvex Positive

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA, coordinate equivalent) — SLD position. f = +90.12 mm.

The positive rear member of T1 shares S20 with L11 and ends at S21. It uses the same printed material pair as L7/L8/L13. Its rim is inferred and set to the near-state on-axis marginal ray; the patent specifies no aperture here.

### L13 — Biconvex Positive

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA, coordinate equivalent) — SLD position. f = +38.75 mm.

This positive biconvex element follows T1 in G2B and has the strongest positive isolated power among the four νd 68.63 elements. Its rim is inferred and set to the near-state on-axis marginal ray, not tuned for MTF.

### L14 — Biconcave Negative

nd = 1.60342, νd = 38.01. Glass: E-F5 (HOYA, coordinate equivalent). f = -87.72 mm.

This negative biconcave element lies between positive L13 and L15. It supplies opposing rear-group power and bending freedom. The patent does not separately quantify its field-curvature or astigmatism contribution.

### L15 — Biconvex Positive (Asph)

nd = 1.77250, νd = 49.47. Glass: M-TAF1 (HOYA, coordinate equivalent). f = +36.84 mm.

The final positive biconvex element has aspheres on both S26 and S27. Its two independently specified departures provide rear-group correction freedom near the large image-side field bundles. The patent does not establish a fabrication process or a resin layer.

## Glass Identification and Selection

Every element carries a HOYA catalog name as a coordinate equivalent. Each printed nd/νd
pair sits on that catalog row, and all 33 pairs printed across the patent's nine examples
sit on catalog rows, so these are catalog glasses rather than optimized values. The names
do not identify a production supplier or melt. The patent publishes nd and νd at the d line
(587.56 nm) but no partial dispersion, so chromatic results use catalog dispersion, and the
FLD and SLD positions carry catalog dPgF values marked as inferred. M-BACD5N and M-TAF1 are
moulding-grade rows; the patent prints their nominal values and does not state a process.

| Elements | nd | νd | Catalog equivalent | Class |
|---|---:|---:|---|---|
| L1 | 1.92119 | 23.96 | FDS24 | High-index, high-dispersion front negative |
| L2 | 1.58913 | 61.25 | M-BACD5N | Moderate-index crown-like aspheric element |
| L3 | 1.43700 | 95.10 | FCD100 | Very-high-Abbe, low-index; FLD position |
| L4 | 1.90366 | 31.32 | TAFD25 | High-index, low-Abbe positive |
| L5 | 1.43700 | 95.10 | FCD100 | Very-high-Abbe, low-index; FLD position |
| L6 | 2.00100 | 29.13 | TAFD55 | Very-high-index positive |
| L7 | 1.59282 | 68.63 | FCD515 | High-Abbe; SLD position |
| L8 | 1.59282 | 68.63 | FCD515 | High-Abbe; SLD position |
| L9 | 1.64769 | 33.84 | E-FD2 | Lower-Abbe negative partner |
| L10 | 1.43700 | 95.10 | FCD100 | Very-high-Abbe, low-index; FLD position |
| L11 | 1.80610 | 33.27 | NBFD15 | High-index negative triplet member |
| L12 | 1.59282 | 68.63 | FCD515 | High-Abbe; SLD position |
| L13 | 1.59282 | 68.63 | FCD515 | High-Abbe; SLD position |
| L14 | 1.60342 | 38.01 | E-F5 | Moderate-index, lower-Abbe negative |
| L15 | 1.77250 | 49.47 | M-TAF1 | High-index aspheric positive |

Contrasting positive/negative powers and Abbe numbers across C1, C2 and T1 provide
chromatic design freedom; this is not proof of secondary-spectrum suppression.
In particular, νd 95.10 alone does not establish fluorite or a production
partial-dispersion value. C/d/F and photopic MTF run on the catalog dispersion of these
equivalents, so they describe the catalog glasses, not a confirmed production melt. No
apochromatic-performance claim is made.

## Focus Mechanism

The patent's two moving subgroups provide floating internal focus (¶0031–0035):
G1 remains fixed, G2A moves 4.2435 mm objectward, and G2B with the stop moves
4.9011 mm objectward. Sigma specifies HSM autofocus and marks the same two groups as
FOCUS on its diagram, but no factory cam or actuator law can be recovered from the
numerical prescription.

| Patent interval | Infinity (mm) | Near (mm) |
|---|---:|---:|
| d11, G1 to G2A | 5.2435 | 1.0000 |
| d16, G2A to stop/G2B | 5.9413 | 5.2837 |
| BF, S27 to printed image plane | 38.4500 | 43.3511 |
| First vertex to image | 132.5954 | 132.5954 |
| Object to first vertex | Infinity | 115.0000 |
| Object to image | Infinity | 247.5954 |

Only the two columns above are printed. The near state is entered as 247.5954 mm
measured to the image plane, not the rounded 248 mm caption, Sigma's 250 mm, or the
115 mm distance to the front vertex. The exact paraxial conjugate at the printed image
plane is 247.633411 mm; this small discrepancy is kept and not attributed to rounding.

The patent does not publish intermediate travel. The model therefore uses an
**inferred 65-point path**: G2A and G2B share one assumed monotone path parameter
while keeping their different end travels. Each point holds the linearly interpolated
residual at the printed image plane rather than refocusing to zero residual.
This is an inference, not a recovered factory motion ratio or a calibrated
object-distance law. A straight line between the two printed states is not used:
at slider position 0.5 it misses the paraxial image plane by −0.723271 mm.

Across 1,025 slider positions, the path's largest paraxial residual at the printed
image plane is 0.00132912 mm. That is an image-plane result, **not an object-distance
accuracy bound**. The paraxial conjugate has a pole near slider position 0.000473904,
where the distance label is about 522.46 m; below it the paraxial object conjugate is
virtual. The largest sampled relative label error, 92.9%, is not a continuous maximum.
Distance labels near infinity must not support quantitative claims; use the printed
positions for comparison with the patent. MTF is not computed at intermediate positions.

## Aspherical Surfaces

The printed equation uses the standard `(1+K)` conic convention plus even powers
through A12 (¶0077–0084). K = 0 on all three surfaces; it is not the alternative
κ = 1 spherical-base convention. The nonzero S3 A12 term is kept exactly.
All dimensions and coefficients remain at the patent's scale. No uniform scaling,
coefficient sign correction or omitted high-order term is applied.

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|---:|
| S3 (3A) | L2 front | 0 | 5.04840e−6 | 4.60040e−9 | −5.25920e−12 | 1.99610e−14 | −1.20870e−17 |
| S26 (26A) | L15 front | 0 | −4.73140e−6 | −1.83480e−9 | −2.61740e−12 | 2.04104e−14 | 0 |
| S27 (27A) | L15 rear | 0 | 4.41070e−6 | −1.73090e−9 | 9.75320e−13 | 3.31800e−14 | 0 |

S3 starts with a positive quartic departure, S26 with a negative quartic departure,
and S27 with a positive quartic departure. Higher terms affect the outer zone,
so quartic sign alone does not establish the complete peripheral shape or an
aberration correction budget. The prescription supports two bulk aspheric elements,
not a separate thin composite layer; fabrication method remains unverified.

## Aperture, Clear Rims and Image Planes

The patent does not list clear semi-diameters or an iris radius. Figure 1 was
measured at its own axial scale to seed outer extents, but its outlines cannot serve
as square rims on both faces: L10's edge thickness goes negative, the S2 rim passes
that surface's radius of curvature, and the air gaps after S2, S4, S6, S8 and S25 overlap.
The model's rims are therefore **inferred**. They keep the large front extent and sit
inside the curved rear and flange outlines. L12, L13, L14 and L15 are set to the height of
the on-axis marginal ray at the printed near state (14.39, 15.81, 15.33 and 15.17 mm), so
that beam passes unclipped. They are not proven factory apertures, and the model's
vignetting must not be presented as measured production vignetting.

The iris size follows from the design F1.47: the paraxial entrance-pupil diameter at
infinity equals EFL / F-number, a radius of 8.386 mm, which gives a fixed iris radius of
12.3155 mm. The real marginal ray through that iris gives a working f-number,
1 / (2 n′ sin θ′), of **1.4995** at infinity and **1.5987** at the near state; the paraxial
working values are 1.470 and 1.552. The patent prints F1.60 at the near state without
defining it, and 1.5987 rounds to that value. This agreement does not prove the patent's
convention: the same rule misses the printed near values of Examples 5 and 8 by about
0.04 and 0.05, and the stop marks in Figure 1 and Sigma's diagram read about 12.6 to
12.7 mm.

The printed image planes are kept. Required paraxial shifts from them are
+0.00117190 mm at infinity and +0.00132912 mm at near. Best-axial MTF shifts are larger
(−0.024 mm at infinity, −0.016 mm at near, at the reference wavelength); they are
diagnostics and are not applied to BF.

## Model Scope and Limitations

Real chief rays reach the printed 21.63 mm image height at half angles of 41.688° at
infinity and 39.709° with the near-state spacings, matching the printed 41.69° and 39.71°.
The near object-to-first-vertex angle of about 45.85° is a different geometric quantity,
not a field-angle disagreement.

At the image corner, about 20% of the wide-open beam reaches the image at infinity on these
inferred rims, so edge results rest on a small part of the pupil.

Diffraction MTF at the printed image planes converges at the center, mid-field and edge.
**Convergence is not optical quality.** At 40 lp/mm wide open at the reference wavelength,
the infinity center is about 0.551 and the 21.65 mm edge about 0.250 sagittal / 0.146
tangential. At the near state the center is about 0.759 and the edge about 0.271 sagittal /
**0.066 tangential**. Photopic values, on the catalog dispersion of the equivalent glasses,
are lower: about 0.354 at the infinity center and 0.209 / 0.004 at the near edge. Best-axial
focus lifts the centers but leaves the near edge weak. Stopping to f/8 improves most values
but does not replace the wide-open result. Inferred rims, catalog glass equivalents and the
undefined finite F-number qualify all numerical performance results. Sigma's MTF charts
are not a calibrated match to this model.

## Sources

- [JP2016012034A original 34-page PDF](https://patentimages.storage.googleapis.com/97/93/6c/0d6b02adc17eb1/JP2016012034A.pdf): original pp. 13–15 and 26–27, and focus description pp. 8–9.
- [JP2016012034A publication record](https://patents.google.com/patent/JP2016012034A/en): contextual indexing; the original PDF governs transcription.
- [Sigma A015 24mm F1.4 DG HSM Art product documentation](https://www.sigma-global.com/en/lenses/a015_24_14/): product specifications, optical construction and MTF charts.
