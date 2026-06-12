# Sigma 50mm F1.4 DG HSM | Art — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2015-114366 A  
**Application Number:** 特願2013-254099 (P2013-254099)  
**Filed:** 9 December 2013  
**Published:** 22 June 2015  
**Inventor:** Shiota, R. (塩田 了)  
**Applicant:** Sigma Corporation (株式会社シグマ)  
**Title:** Optical System (光学系)  
**Classification:** G02B 13/00; G02B 13/18  
**Embodiment analyzed:** Numerical Example 1 (実施例1, Fig. 1)

JP 2015-114366 A discloses a large-aperture standard photographic lens. Numerical Example 1 is the prescription that most directly corresponds to the Sigma 50mm F1.4 DG HSM | Art, product code A014.

The identification rests on several converging checks. The patent applicant is Sigma Corporation; Example 1 uses 13 glass elements in 8 air-separated groups, matching Sigma's published construction for the A014 lens; the patent image height is 21.63 mm, giving a 43.26 mm full-frame diagonal; the patent infinity focal length is 49.58 mm and the design F-number is 1.46; the close-focus state is tabulated at a 400 mm object-to-image distance with d0 = 258.0000 mm and a 142.00 mm total track; and the computed finite-conjugate magnification is −0.1779, or 1:5.62, matching Sigma's published 0.40 m minimum focusing distance and 1:5.6 maximum magnification.

Sigma's hard product specifications take precedence where the patent and product presentation differ. The data file therefore records 50 mm and F1.4 as the marketed values, while retaining 49.58 mm and F1.46 as the design values. Likewise, the manufacturer's 46.8° published angle of view is the product specification, while the patent's 47.19° value is retained as the worked-example optical value.

The special-element mapping is also consistent. The patent does not label elements as Sigma marketing categories, but Example 1 contains three high-Abbe, low-dispersion positive elements: L3 (νd = 81.61) and L10/L11 (νd = 68.62). The only aspherical glass element is the rear biconvex L13, whose two surfaces are both aspherical. This aligns with Sigma's construction diagram legend for SLD and aspherical glass elements.

## Optical Architecture

Example 1 is a large-aperture standard lens with a double-Gauss-derived rear core preceded by a weakly positive front conversion group. The patent explicitly frames the design against two prior approaches: the symmetric double-Gauss, which has useful coma cancellation but is difficult to adapt to long-back-focus SLR systems and still struggles with sagittal coma flare and g-line secondary spectrum; and the retrofocus form, which secures back focus but tends to enlarge rear elements and stops while increasing lateral color and distortion (§§0002–0008).

The system is divided into two principal groups. G1 is stationary during focusing (§0063) and has a computed focal length of +282.98 mm. It is split by the longest air gap in the group into negative G1A (surfaces 1–4, f = −153.20 mm) and positive G1B (surfaces 5–8, f = +114.66 mm). The patent describes this first group as a wide-conversion lens that increases marginal-ray distance from the axis while preserving back focus (§0017). A flare-cut diaphragm follows G1B.

G2 is the positive focusing group. It is divided into G2A (surfaces 10–14, f = +173.27 mm) and G2B (stop plus surfaces 16–23, f = +65.28 mm). The aperture stop lies between G2A and G2B and travels with G2B (§0068). From infinity to the close state, G2A and G2B both move toward the object, but not as a rigid unit; the patent states that they move independently (§0066).

Element power from front to rear is: positive meniscus, negative meniscus; positive/negative/positive cemented triplet; positive meniscus plus net-negative cemented doublet; aperture stop; net-negative cemented doublet, weak positive cemented doublet, and a double-sided aspherical positive rear element. The Gauss-like alternation around the stop is still evident in G2, but the front G1 architecture supplies the SLR back-focus behavior.

The independently computed surface-by-surface Petzval sum is +1.90175 × 10⁻³ mm⁻¹. With the sign convention used here, that corresponds to a Petzval radius of approximately −525.8 mm and f·P = 0.0943, indicating a comparatively flat Petzval field for a 50 mm f/1.4-class design.

## Element-by-Element Analysis

Element focal lengths in this section are standalone thick-lens values in air. They are not the same as in-situ contribution inside cemented assemblies.

### G1A — Negative front sub-group

**L1 — Positive meniscus, convex to object.**  
nd = 1.91082, νd = 35.25. Glass: TAFD35L / Ref. TAFD35 (HOYA). f = +96.3 mm.

L1 is the front positive collector of the converter group. Its high index lets the design gather the full-aperture bundle with less curvature than a lower-index crown would require. The patent describes G1A as a positive meniscus followed by a negative meniscus, the pair being net negative (§0064).

**L2 — Negative meniscus, convex to object.**  
nd = 1.62588, νd = 35.74. Glass: E-F1 (HOYA reference) / J-F1 class. f = −54.3 mm.

L2 supplies the negative power that gives G1A its converter action. Its rear surface, R = +28.7552 mm, is R1ar in condition (1). That condition constrains this surface against the rear surface of G1B to balance coma and astigmatism generated by the front converter geometry.

### G1B — Positive cemented triplet

G1B is a three-element cemented triplet consisting of a positive meniscus, a biconcave element, and a biconvex element (§0065). Its combined focal length is +114.66 mm.

**L3 — Positive meniscus, concave to object.**  
nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA) / S-FPL51 class. f = +79.4 mm.

L3 is the strongest low-dispersion element in the lens. It forms the front member of the G1B triplet and is the principal front-side axial-color corrector. The patent itself publishes only nd and νd, so partial-dispersion behavior is treated as a catalog-class inference rather than as patent-published data.

**L4 — Biconcave negative.**  
nd = 1.54814, νd = 45.82. Glass: E-FEL1 (HOYA) / S-TIL1 class. f = −29.8 mm.

L4 is the dispersive negative member in the triplet. It works between low-index, high-Abbe L3 and high-index positive L5, giving the triplet its achromatizing behavior while keeping G1B net positive.

**L5 — Biconvex positive.**  
nd = 1.88300, νd = 40.81. Glass: TAFD30 (HOYA) / S-LAH58 class. f = +35.2 mm.

L5 is the high-index rear converger of G1B. Its rear surface, R = −94.4447 mm, is R1br in condition (1). Its high index limits the curvature required for the positive power delivered by the cemented group.

### G2A — Positive front sub-group of G2

**L6 — Positive meniscus, convex to object.**  
nd = 1.92286, νd = 20.88. Glass: E-FDS1-W / Ref. E-FDS1 (HOYA) / N-SF66 class. f = +97.0 mm.

L6 is the highest-index positive lens in G2A and is the nd2p element of condition (4). The patent's logic is explicit: a very high-index positive element in G2A permits other positive elements in G2 to use low-dispersion materials favorable for axial-color correction without sacrificing astigmatism and field-curvature control (§§0031–0033).

**L7 — Biconvex positive.**  
nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA) / S-LAL18 class. f = +39.9 mm.

L7 is the positive member of the G2A cemented doublet.

**L8 — Biconcave negative.**  
nd = 1.72825, νd = 28.32. Glass: E-FD10L / Ref. E-FD10 (HOYA) / N-SF10 class. f = −29.6 mm.

Together, L7 and L8 form a net-negative cemented doublet, as stated in the patent's Example 1 prose (§0067). This doublet follows the high-index L6 and helps balance chromatic and off-axis aberrations before the stop.

### G2B — Positive rear sub-group of G2

**L9 — Biconcave negative.**  
nd = 1.62588, νd = 35.74. Glass: E-F1 (HOYA reference) / J-F1 class. f = −35.0 mm.

L9 is the first glass element behind the stop and the negative member of the first G2B cemented doublet. Its front surface, R = −31.6556 mm, is R2bf in condition (5), paired against the rear surface of G2A.

**L10 — Biconvex positive.**  
nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA) / K-GFK68 class. f = +70.1 mm.

L10 is the low-dispersion positive member cemented to L9. The L9/L10 doublet is net negative, matching the patent's description (§0069). Older cross-reference tables sometimes show an FCD505 reference entry near this code, but the current HOYA cross-reference identifies the 593-686 glass as FCD515; FCD515 is therefore used as the primary label.

**L11 — Biconvex positive.**  
nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA) / K-GFK68 class. f = +47.2 mm.

L11 repeats the same low-dispersion glass as L10 and forms the positive member of the second G2B cemented doublet.

**L12 — Biconcave negative.**  
nd = 1.51742, νd = 52.15. Glass: E-CF6 (HOYA) / S-NSL36 class. f = −45.7 mm.

L12 is cemented to L11. The L11/L12 pair is weakly positive overall, functioning more as a chromatic and coma-balancing component than as a strong power-bearing group.

**L13 — Biconvex positive, both surfaces aspherical.**  
nd = 1.77250, νd = 49.47. Glass: M-TAF105 / Ref. M-TAF1 (HOYA molded-glass class, 773-495 code). f = +38.9 mm.

L13 is the rear positive aspherical element and supplies the final convergence to the image plane. The exact stored nd/νd pair rounds to HOYA's 773-495 molded-glass class. The earlier S-LAH66-style polished-glass equivalence is only a nearby 773-496 class and is not used as the primary identification here. Its location at the rear lets the design correct full-aperture spherical aberration and sagittal coma without placing the asphere immediately behind the stop, the decenter-sensitive arrangement criticized in the patent background (§0007).

## Glass Identification and Selection

The patent publishes nd and νd, but not vendor names. The data file therefore uses catalog-class matches, giving priority to HOYA where an exact or current HOYA entry matches the six-digit code. The six-digit code is treated as an nd/νd coordinate, not as proof that the patent specifies a vendor or melt.

| Element(s) | nd | νd | Primary catalog identification | Notes |
|---|---:|---:|---|---|
| L1 | 1.91082 | 35.25 | TAFD35L / Ref. TAFD35 (HOYA) | High-index lanthanum dense-flint class |
| L2, L9 | 1.62588 | 35.74 | E-F1 (HOYA reference) | Ordinary flint; front and post-stop negative menisci |
| L3 | 1.49700 | 81.61 | FCD1 (HOYA) / S-FPL51 class | Low-dispersion front triplet member |
| L4 | 1.54814 | 45.82 | E-FEL1 (HOYA) / S-TIL1 class | Light flint triplet diverger |
| L5 | 1.88300 | 40.81 | TAFD30 (HOYA) / S-LAH58 class | High-index triplet converger |
| L6 | 1.92286 | 20.88 | E-FDS1-W / Ref. E-FDS1 (HOYA) / N-SF66 class | nd2p high-index positive element |
| L7 | 1.72916 | 54.67 | TAC8 (HOYA) / S-LAL18 class | Lanthanum-crown doublet member |
| L8 | 1.72825 | 28.32 | E-FD10L / Ref. E-FD10 (HOYA) | Dense flint doublet member |
| L10, L11 | 1.59282 | 68.62 | FCD515 (HOYA) / K-GFK68 class | Current HOYA 593-686 low-dispersion identification |
| L12 | 1.51742 | 52.15 | E-CF6 (HOYA) / S-NSL36 class | Light crown balancing member |
| L13 | 1.77250 | 49.47 | M-TAF105 / Ref. M-TAF1 773-495 class (HOYA) | Molded-glass aspherical class; exact 773-495 coordinate |

The three SLD-class elements are inferred as L3, L10, and L11. L3 provides the very high-Abbe front correction; L10 and L11 repeat a lower-index, high-Abbe positive glass behind the stop. This distribution agrees with the design logic of condition (4), which reserves the highest index burden to L6 so that low-dispersion positive elements can be used elsewhere in G2 for axial-color correction (§0031).

## Focus Mechanism

The focus system is an internal floating mechanism. G1 remains fixed relative to the image plane, while G2A and G2B move objectward on different trajectories (§§0063, 0066). The aperture stop travels with G2B (§0068).

| Variable gap | Location | Infinity | Close state | Change |
|---|---|---:|---:|---:|
| d9 | flare-cut stop / G1 to G2A | 9.9796 mm | 1.2000 mm | −8.7796 mm |
| d14 | G2A to aperture stop / G2B | 6.0186 mm | 5.8989 mm | −0.1197 mm |
| BF | L13 rear to image plane | 38.7999 mm | 47.6991 mm | +8.8992 mm |

The close-focus column is the patent's 400 mm shooting-distance state, where d0 = 258.0000 mm and total track remains 142.00 mm. In this state the tabulated BF is the rear mechanical image spacing for a finite conjugate, not the Gaussian back focal length for a collimated input beam. The finite-conjugate paraxial matrix from the object plane through the patent's close-focus spacing gives lateral magnification −0.1779, or 1:5.62, with the B term effectively nulled by the tabulated BF. The same close spacing gives a Gaussian EFL of 48.349 mm, matching the patent's 48.35 mm value.

## Aspherical Surfaces

Surfaces 22 and 23, the two faces of L13, are aspherical. The patent's equation is the standard even-order polynomial on a conic base:

$$
z = \frac{(1/r)y^2}{1 + \sqrt{1 - (1 + K)(y/r)^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10}.
$$

The conic convention is the standard one used by the renderer: K = 0 is a spherical base. Both aspherical surfaces have K = 0, so the departure from the base sphere is entirely polynomial.

| Coefficient | Surface 22, R = +77.4702 mm | Surface 23, R = −47.5092 mm |
|---|---:|---:|
| K | 0.00000 | 0.00000 |
| A4 | −9.93095 × 10⁻⁷ | +3.17495 × 10⁻⁶ |
| A6 | +1.24366 × 10⁻⁹ | −1.01711 × 10⁻¹⁰ |
| A8 | −7.51084 × 10⁻¹³ | +2.00250 × 10⁻¹² |
| A10 | 0.00000 | −1.26705 × 10⁻¹⁵ |

The L13 glass identification supports a molded-glass aspherical interpretation: HOYA lists M-TAF1/M-TAF105 among glass-molded lens materials, and the element is double-sided aspherical. The patent itself, however, specifies only the optical surface form and glass coordinates; the production-process attribution rests on catalog suitability and Sigma's product-level aspherical-lens marking, not on a patent manufacturing statement.

## Conditional Expressions

The patent gives nine conditional inequalities and tabulates the corresponding value for each example. Recomputing the Example 1 values from the prescription gives the following agreement.

| # | Expression | Recomputed | Patent table |
|---|---|---:|---:|
| (1) | 1.50 < \|R1br/R1ar\| < 6.00 | 3.28 | 3.28 |
| (2) | 0.35 < T/f < 0.55 | 0.46 | 0.46 |
| (3) | 0.50 < \|f/R1bf\| < 1.50 | 0.73 | 0.73 |
| (4) | 1.80 < nd2p | 1.92 | 1.92 |
| (5) | 0.50 < \|R2bf/R2ar\| < 1.50 | 1.01 | 1.01 |
| (6) | 0.20 < \|f/f1a\| < 0.50 | 0.32 | 0.32 |
| (7) | 0.20 < f/f1b < 0.60 | 0.43 | 0.43 |
| (8) | 0.20 < f/f2a < 0.60 | 0.29 | 0.29 |
| (9) | 0.50 < f/f2b < 1.00 | 0.76 | 0.76 |

The claim text introduces the last group-focal set as conditions (6) to (8), but it immediately lists four inequalities numbered (6) through (9). The tabulated values confirm that all four are operative.

## Data File Implementation Notes

The patent does not publish semi-diameters. The `.data.ts` file therefore uses inferred clear apertures constrained by the 77 mm filter size, by paraxial marginal and chief-ray heights, and by mechanical feasibility. The final set keeps the maximum sd/|R| at 0.869, keeps all front/rear element SD ratios at or below 1.031, limits signed cross-gap intrusion to less than 90% of the relevant gap, and preserves positive element edge thickness. The thinnest inferred element edge is L11 at approximately 0.64 mm; the tightest signed air clearance is the surface 21-to-22A gap at approximately 0.11 mm, still within the 90% cross-gap intrusion rule.

The aperture stop semi-diameter is set to 14.64 mm. This was derived from the patent's F1.46 design aperture: the paraxial entrance-pupil radius is 49.583 / (2 × 1.46) = 16.98 mm, and the on-axis marginal-ray height ratio from the front reference pupil to the physical stop is 0.8619.

## Verification Summary

All load-bearing optical values below were recomputed from the transcribed surface prescription using an independent y-ν paraxial ray trace.

| Quantity | Computed | Patent / source value |
|---|---:|---:|
| Infinity EFL | 49.583 mm | 49.58 mm |
| Infinity Gaussian BFL | 38.800 mm | BF = 38.7999 mm |
| Close-state Gaussian EFL | 48.349 mm | 48.35 mm |
| Close-state finite-conjugate magnification | −0.1779 | 1:5.6 product maximum magnification |
| Total track | 142.000 mm | 142.00 mm |
| G1 focal length | +282.98 mm | +282.98 mm |
| G1A focal length | −153.20 mm | −153.20 mm |
| G1B focal length | +114.66 mm | +114.66 mm |
| G2A focal length | +173.27 mm | +173.27 mm |
| G2B focal length | +65.28 mm | +65.28 mm |
| Petzval sum | +1.90175 × 10⁻³ mm⁻¹ | independently derived |

The re-review changed the interpretation of the close-focus BF value: the 47.6991 mm value is retained as the patent's close-focus rear spacing and verified by finite-conjugate imaging, but it is not treated as a Gaussian back focal length for infinity input at the close-focus group spacings.

## Sources

- JP 2015-114366 A, Sigma Corporation, filed 9 December 2013 and published 22 June 2015. Numerical Example 1 supplies the prescription, aspherical coefficients, variable spacing table, group focal lengths, and conditional-expression values.
- Sigma Corporation, official product specification for the 50mm F1.4 DG HSM | Art, product code A014. Used for manufacturer-priority values: marketed focal length, nominal F-number, lens construction, full-frame DG format, angle of view, mounts, minimum focusing distance, maximum magnification, aperture blades, filter size, and special-element presentation.
- HOYA Group Optics Division, Glass Cross Reference Index, Glass Polished Lenses, Glass Lenses Pressed Blanks, and Glass Molded Lenses material lists. Used for current HOYA glass names and six-digit code cross-checking.
- OHARA, SCHOTT, HIKARI, SUMITA, and CDGM catalog cross-references. Used only as equivalence-class checks where the patent does not identify a vendor.
