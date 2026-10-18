# Leitz Telyt 200mm f/4 (Visoflex) — Optical Design Analysis

## Catalog spectral model

The catalog preserves the source index and Abbe coordinates. The following names select compatible dispersion curves for simulation; they do not identify the historical supplier, melt, or annealing state. Catalog compatibility includes tolerances and is not an exact material identification.

| Element record | Current spectral annotation |
|---|---|
| 1 | PCD2 spectral proxy (HOYA; native e-line PSK2-type coordinates; historical supplier unconfirmed) |
| 2 | SF10 (Schott) |
| 3 | Unmatched (LaF8-class lanthanum flint; historical OHARA LAF8 / Schott LaFN8 coordinates, no current catalog match) |
| 4 | K10 (Schott) |

Three of four element records have compatible spectral proxies. L3 remains unresolved: historical LaFN8/LAF8 coordinates do not supply a verified compatible vendor dispersion curve in the catalog.


The follow-up native-e-line comparison selects HOYA PCD2 for L1: n_e ≈ 1.570880 and ν_e ≈ 62.900 against source 1.5709/63.0, closer than the earlier H-ZK1 proxy (1.571036/62.733). These are compatible curves, not historical supplier identifications.

## Patent Reference and Design Identification

**Patent:** DE 1 096 057 B (Auslegeschrift)
**Application Number:** L 33816 IX/42h
**Filed:** 25 July 1959
**Published:** 29 December 1960
**Inventors:** Walter Mandler; Horst Schmidt
**Applicant:** Ernst Leitz GmbH
**Title:** Fotografisches Objektiv (Zusatz zum Patent 1 018 236)
**Classification:** Kl. 42h 4/20; Int. Kl. G 02 b
**Embodiment analyzed:** Example 1 — the single numerical example (description table, p. 1 col. 2; repeated as claim 4, p. 2 col. 4)

The Auslegeschrift is an addition (_Zusatz_) to the earlier German patent 1 018 236. The printed inventors are Dipl.-Phys. Walter Mandler of Midland, Ontario, and Horst Schmidt of Nauborn near Wetzlar. The document contains one numerical example, normalized to a focal length f = 1,00 with an aperture ratio of 1:4,0 and a field angle (_Bildwinkel_) of 12°. Indices and Abbe numbers are given for the e-line (ne, νe), and the last spacing a8 is stated to be the back focal distance (_Schnittweite_). The prescription is printed twice, once in the description and once in claim 4; the two copies are identical.

The example is identified with the Leitz Telyt 1:4/200 mm for the Visoflex reflex housing (TELOO / 11063) by the following convergent evidence:

1. The patent text addresses the adaptation of its parent principle to a 200 mm objective at a larger aperture than the 400 mm designs of the parent (p. 1 col. 1, lines 15–25), and the example is a 200 mm-class 1:4 objective with a 12° field.
2. Applicant Ernst Leitz GmbH; inventor Mandler's address is Midland, Ontario, the seat of Ernst Leitz Canada, and secondary sources credit the Telyt 200 mm f/4 to him.
3. Four separate, uncemented elements in four groups, as reported for the production lens by secondary sources.
4. The 12° field agrees with the diagonal angle reported for the production lens.
5. The lens appeared around 1959, close to the July 1959 filing date (secondary sources).
6. Leitz's own Visoflex II leaflet lists the 200 mm TELYT f/4 with a closest subject-to-film distance of 9 ft 10⅛ in (3.00 m) and a reproduction ratio of 1:12.8 there. A unit-focus reconstruction of this example to 3.00 m gives 1:12.76 (see Focus Mechanism); the ratio was not used to construct the model.
7. The computed back focal distance of 103.6 mm exceeds the 91.3 mm Visoflex register reported for the mount, so the rear vertex can sit ahead of the flange inside the barrel.

The correlation is strong but not manufacturer-confirmed. Secondary sources also record contradictions: one collector source, citing Thiele's factory handbook, lists a first batch of 1:4/200 Telyts in 1958, before the filing date; production-era dates differ between sources; the blade count is given as 15 or 20; and one dealer description states that the diaphragm was at some point moved from in front of the third element to behind it. Later production may therefore differ from this example, at least in stop position.

## Optical Architecture

The design is a four-element, four-group telephoto whose power sequence is + − + −. It follows the construction principle of the parent patent, which the Auslegeschrift summarizes as a front member (_Vorderglied_) built as an uncorrected or incompletely corrected telephoto system, followed at a distance of about two-tenths of the focal length by a correction member (_Korrektionsglied_) without refractive power (p. 1 col. 1, lines 1–14). Here the front member is L1 (biconvex positive) and L2 (biconcave negative), separated by 5.50 mm. The correction member, 36.80 mm behind it, is L3 (positive meniscus) and L4 (negative meniscus), 18.20 mm apart. Both menisci are concave toward the object and therefore toward the diaphragm, which the patent figure draws in the gap a4 between the two members.

The distinguishing step of this Auslegeschrift is that the correction member is itself arranged as a telephoto pair — a positive part followed by a negative part — so that the telephoto effect is shared between the power-giving front member and the correction member (p. 1 col. 1, lines 31–39; claim 1). The implemented model quantifies that division:

- The front member alone has f = 200.03 mm and, focused on its own, a length from the first vertex to its image of 192.80 mm (telephoto ratio 0.964).
- The complete system has EFL = 200.31 mm and a length from the first vertex to the paraxial image of 187.10 mm (telephoto ratio 0.934, e-line, infinity focus). Adding the correction member therefore shortens the lens by 5.71 mm while changing the focal length by only 0.14 %.
- The rear principal plane lies 13.21 mm in front of the first vertex, compared with 7.23 mm for the front member alone.

"Without refractive power" holds in the in-situ sense. Standalone in air, the correction member has f = −1492 mm, or 0.134 of the system power. Weighted by the paraxial marginal-ray height at each surface, however, L3 supplies +0.746 and L4 −0.747 of the system power, a net −0.14 %. The front member supplies the power (L1 +2.211, L2 −1.210); the correction member redistributes it along the axis.

The model reproduces the patent's normalized focal length (computed EFL 1.0015 f against the printed 1,00). All dimensions of the data file are the patent values multiplied by 200. The stop is not dimensioned in the patent; the model places it 4.08 mm (0.0204 f) in front of r5, the position measured on the patent figure, and its semi-diameter of 17.60 mm is calibrated so that the paraxial entrance pupil gives f/4.0. The entrance pupil lies 70.14 mm behind the first vertex with a paraxial radius of 25.04 mm. Pupil spherical aberration of the front member makes a real axial ray aimed at the stop rim enter at 24.19 mm, which corresponds to f/4.14; the paraxial calibration, not this real-ray value, sets the model's f/4.

## Element-by-Element Analysis

The patent publishes e-line data only. The data file carries the native ne and νe values in its index fields with `indexReference: "e"`; no conversion to the d-line has been applied, and the glass names below are coordinate matches, not supplier identifications. Focal lengths are standalone thick-lens values in air at the e-line.

### L1 — Biconvex Positive

ne = 1.5709, νe = 63.0. Glass: PCD2 spectral proxy (HOYA; native e-line PSK2-type coordinates; historical supplier unconfirmed). f = +90.59 mm.

L1 is the positive element of the front member and the strongest element of the design: its in-situ contribution is 2.21 times the system power. Its bending is strongly asymmetric (R1 = +62.54 mm, R2 = −281.5 mm), placing most of the refraction at the front surface. As the high-Abbe partner of the front member's achromatizing pair it is set against the dense flint L2, and it is the largest element, with a modeled clear semi-diameter of 26.2 mm.

### L2 — Biconcave Negative

ne = 1.7343, νe = 28.1. Glass: SF10 (Schott). f = −144.90 mm.

L2 completes the telephoto front member 5.50 mm behind L1 (a2 = 0.0275 f). Its front surface (R3 = −140.0 mm) is much more strongly curved than its rear (R4 = +448.7 mm). The low-Abbe flint against the νe = 63.0 crown of L1 provides the front member's chromatic correction. The small L1–L2 separation is relevant to the patent's argument: the text attributes the spherochromatism of the 400 mm parent design mainly to a large separation between the two parts of the telephoto front system, and notes that reducing that separation costs telephoto effect (p. 1 col. 1, lines 20–30).

### L3 — Positive Meniscus, concave to object

ne = 1.7394, νe = 40.8. Glass: Unmatched (LaF8-class lanthanum flint; historical OHARA LAF8 / Schott LaFN8 coordinates, no current catalog match). f = +175.24 mm.

L3 is the positive part of the correction member, 4.08 mm behind the modeled stop. Both of its surfaces (R5 = −117.0 mm, R6 = −62.6 mm) are concave toward the stop, the meniscus form required by claim 2. It carries its positive power in the highest-index glass of the design.

### L4 — Negative Meniscus, concave to object

ne = 1.5035, νe = 56.3. Glass: K10 (Schott). f = −145.61 mm.

L4 is the negative part of the correction member, 18.20 mm behind L3 (a6 = 0.091 f). Its surfaces (R7 = −37.3 mm, R8 = −78.66 mm) are also concave toward the stop. The steep front surface R7 is the most strongly curved surface in the system. L4 carries its negative power in the lowest-index glass of the design, so the correction member pairs a high-index positive meniscus with a low-index negative meniscus.

## Glass Identification

The patent names no glasses. The table gives the nearest coordinates found by an unseeded search of six current catalogs (Schott, OHARA S-series, HOYA, HIKARI, CDGM, Sumita) and of the Robb–Mercado (1983) Buchdahl tables, which include legacy glasses, all evaluated at C′/e/F′.

| Element | ne / νe (patent) | Nearest coordinate (Δne, Δνe)                               | Data-file label                           | Role                            |
| ------- | ---------------- | ----------------------------------------------------------- | ----------------------------------------- | ------------------------------- |
| L1      | 1.5709 / 63.0    | legacy OHARA PSK2 (−0.00002, −0.08)                         | PSK2 class; qualified HOYA PCD2 proxy | Dense phosphate crown, positive |
| L2      | 1.7343 / 28.1    | HOYA E-FD10 (+0.00002, −0.00); Schott SF10 (0.00000, +0.09) | SF10 (Schott)                             | Dense flint, negative           |
| L3      | 1.7394 / 40.8    | legacy OHARA LAF8 (+0.00004, +0.08)                         | Unmatched (LaF8 class)                    | Lanthanum flint, positive       |
| L4      | 1.5035 / 56.3    | Schott K10 (−0.00001, −0.15)                                | K10 (Schott)                              | Crown, negative                 |

Two pairings are visible. In the front member the positive element is the lower-index, high-Abbe crown and the negative element the high-index dense flint: the conventional achromatizing arrangement, which raises the Petzval sum. In the correction member the arrangement is reversed in index: positive power in the 1.7394 lanthanum flint, negative power in the 1.5035 crown. Because the two menisci carry nearly equal and opposite in-situ power, this index contrast is what gives the almost powerless member a substantial Petzval effect: computed surface by surface, its Petzval contribution is −0.50 times that of the front member.

For L3 no current catalog glass lies within the application's matching window (the nearest current glasses, CDGM D-LaF79 and HOYA M-LAF81, differ by Δne ≈ −0.0043), so the data file labels it `Unmatched` with its historical class. Leitz also used glasses of its own formulation (the Mandler biography cited below notes original Leitz formulas melted by Schott and Corning), so a coordinate match does not identify the supplier or melt. The patent gives no partial-dispersion data and none is stored in the data file, so no apochromatic or anomalous-dispersion behavior is claimed.

## Focus Mechanism

The lens focuses by moving the complete optical head on a helicoid (secondary sources; no internal element motion is reported). The patent publishes the infinity state only. The data file adds a close-focus state reconstructed paraxially at the e-line: the single unknown, the head extension, is solved so that the subject-to-film distance equals 3.00 m, the closest distance given in Leitz's Visoflex II leaflet, whose table defines its focusing range as subject-to-film distance.

| Quantity                          | Infinity (published) | 3.00 m (reconstructed) |
| --------------------------------- | -------------------- | ---------------------- |
| Last air gap, r8 → image          | 103.60 mm            | 119.30 mm              |
| Object distance from first vertex | ∞                    | 2797.2 mm              |
| Lateral magnification             | 0                    | −0.0784 (1:12.76)      |

The required extension is 15.70 mm. The resulting 1:12.76 lies within the rounding interval of the 1:12.8 printed by Leitz for closest focus; because that ratio was not a solving constraint, the agreement is an independent consistency check of the reconstruction. Intermediate positions in the viewer are linear interpolations of the last gap, not source states. Focusing is manual, with a preset diaphragm (secondary sources).

## Aberration Correction Strategy

The patent explains its rationale in terms of the 400 mm parent design (p. 1 col. 1, lines 15–43). Scaling that construction to 200 mm at a larger aperture raises two problems. Distortion must be better corrected; in the parent it originates essentially in the correction member and can be removed there only at the expense of astigmatism. The _Gaußfehler_ — in German optical usage the variation of spherical aberration with wavelength (spherochromatism) — is negative in the 400 mm design, caused mainly by the large separation between the two parts of its telephoto front member, and becomes intolerable at 200 mm and the larger aperture. Reducing that separation would reduce it, but only by reducing the telephoto effect, which lengthens the lens and raises the Petzval sum. The patent's remedy is to make the correction member a telephoto pair as well, and it states that menisci concave toward the stop influence distortion particularly favorably (lines 39–43).

Third-order (Seidel) surface sums computed for the implemented model — e-line, infinity focus, f/4, 135-format corner field, stop at the figure position — show how the two members divide the work:

- **Coma and astigmatism.** The correction member's coma sum is −0.97 times that of the front member and its astigmatism sum −0.93 times; the two members nearly cancel in both.
- **Petzval sum.** The correction member's contribution is −0.50 times the front member's. The front member alone would have a Petzval radius of 319 mm; the complete system has 637 mm.
- **Spherical aberration.** The correction member's third-order sum is −0.37 times the front member's.
- **Distortion.** The correction member supplies about 12 % of the third-order distortion sum; the residual distortion originates mainly in the front member.

Because the stop position is inferred, these member ratios were recomputed with the stop moved between 1 and 32 mm in front of r5, recalibrating it to f/4 each time. The coma balance (−0.96 to −0.98) holds at every position, and the correction member's share of the third-order distortion sum stays between −1 % and +20 %. The astigmatism balance stays between −0.91 and −0.94 for stops 1–8 mm in front of r5, a band that brackets the figure measurement, but changes for stops placed much farther forward in a4; it is not claimed there.

Finite-ray results for the implemented model at the e-line and infinity focus:

- **Distortion.** A real chief ray gives +0.11 % at half the 21.63 mm image height, +0.22 % at 0.7 and +0.45 % (pincushion) at the corner, in agreement with the third-order value of +0.46 %.
- **Field curvature and astigmatism.** Coddington traces along the real chief ray place the tangential focus 0.04 mm and the sagittal focus 0.14 mm inside the paraxial image plane at 0.7 field. At the corner the tangential focus returns to the plane (−0.0004 mm) while the sagittal focus lies 0.27 mm inside it; the Petzval surface there is 0.37 mm inside.
- **Spherical aberration.** Measured as a fraction of the real stop-rim entrance height, longitudinal spherical aberration is −0.04 mm at the 0.5 zone and −0.01 mm at the 0.707 zone, rising to +0.09 mm at 0.866 and +0.20 mm at the f/4 rim: third-order undercorrection balanced by higher-order overcorrection.

These are paraxial-field and meridional computations with a figure-inferred stop; they describe the prescription's correction pattern, not measured production performance.

## Chromatic Correction Strategy

From the patent's own ne and νe values alone, a first-order calculation gives a longitudinal color BFD(F′) − BFD(C′) of −0.29 mm at infinity. The element contributions are large and nearly cancelling (L1 −6.84, L2 +7.63, L3 −2.48, L4 +1.40 mm). The front member is left net overcorrected (+0.79 mm), offsetting the net undercorrecting contribution of the correction member (−1.08 mm). Because the terms are large, this residual is sensitive to the one-decimal rounding of the printed νe values.

With candidate catalog dispersions (legacy Schott PSK2, SF10, K10 and OHARA LAF8, pinned to the patent's e-line indices) the paraxial value is −0.34 mm. The same candidate branch gives a spherochromatism at the f/4 rim, LSA(F′) − LSA(C′), of +0.15 mm, which partly offsets the paraxial color difference for marginal rays. These spectral figures are catalog-derived, not patent data.

## Conditional Expressions

Claim 3 states three spacing conditions, relative to the focal length f; the description gives the same conditions with an upper limit of 6 % instead of 5 % for the second (p. 1 col. 1, lines 43–51; claim 3). The example satisfies both versions.

| Condition                                               | Claim 3 range        | Example  | Satisfied |
| ------------------------------------------------------- | -------------------- | -------- | --------- |
| Front member to correction member (a4)                  | 0.12 f < a4 < 0.25 f | 0.184 f  | Yes       |
| Positive to negative part of the front member (a2)      | 0.02 f < a2 < 0.05 f | 0.0275 f | Yes       |
| Positive to negative part of the correction member (a6) | 0.07 f < a6 < 0.12 f | 0.091 f  | Yes       |

Claim 2 requires the positive and negative parts of the correction member to be menisci concave toward the stop between the members; r5 through r8 are all negative, so both menisci are concave toward the object, where the stop lies.

## Verification Summary

| Quantity            | Patent                  | Model                           | Note                                      |
| ------------------- | ----------------------- | ------------------------------- | ----------------------------------------- |
| Focal length        | 1,00 (normalized)       | 200.31 mm (1.0015 f)            | ×200 scaling; e-line                      |
| Aperture            | 1:4,0                   | f/4.00 paraxial                 | Stop diameter calibrated, not published   |
| Field angle         | 12°                     | 12.33°                          | 135-format diagonal, paraxial             |
| Back focal distance | a8 = 0,5162 (103.24 mm) | 103.60 mm                       | Printed value not reproduced              |
| Telephoto ratio     | —                       | 0.934                           | First vertex to paraxial image            |
| Petzval radius      | —                       | 637 mm                          | Surface-by-surface Σφ/(nn′)               |
| Closest focus       | —                       | 3.00 m subject-to-film, 1:12.76 | Reconstructed; Leitz leaflet gives 1:12.8 |

The printed back focal distance a8 = 0,5162 is the one published value the model does not reproduce. The paraxial e-line trace of the printed radii, spacings and indices gives 0.517991 f, 0.0018 f (0.36 mm at 200 mm) longer. The difference is 5.6 times the standard deviation expected from rounding of the printed data. Neither the real-ray best focus under the design's spherical aberration nor a different reference wavelength accounts for it, and no single-value misprint resolves it cleanly. The data file therefore keeps every printed radius, spacing and index and places the image plane at the computed paraxial focus; placing it at the printed a8 would defocus the model by 0.36 mm.

Semi-diameters are not published. The modeled values come from real meridional rays (the f/4 axial cone, a 60 % field fan to ±0.75 of the pupil, and the full-field chief ray) at infinity and at two closer states, with an 8 % margin, rounded up to 0.1 mm and equalized across each element. The resulting 52.4 mm front clear diameter is compatible with the E58 filter reported for the lens.

## Design Heritage and Context

The Auslegeschrift is explicitly a development of DE 1 018 236, whose principle — a telephoto front member followed by a powerless correction member about 0.2 f behind it — is summarized in the text as having been applied preferably to 400 mm focal lengths. The parent patent was not examined for this analysis, and no production lens is attributed to it here. The addition's contribution is to apply the telephoto arrangement inside the correction member as well, allowing a shorter focal length and a larger aperture without the loss of correction that the patent attributes to simply rescaling the parent design.

Walter Mandler, the first-named inventor, was a lens designer at Ernst Leitz Canada in Midland, Ontario, which Leitz established in 1952; biographical sources list the Telyt 200 mm f/4 among his designs. The lens belongs to the Visoflex system, in which the reflex housing occupies part of the distance between the lens mount and the film; the long back focal distance of this prescription is consistent with that arrangement. Whether the later Leica R Telyt-R 200 mm f/4 shares any part of this prescription has not been investigated.

## Sources

1. Deutsches Patentamt. _Auslegeschrift 1 096 057: Fotografisches Objektiv (Zusatz zum Patent 1 018 236)_. Applicant Ernst Leitz G. m. b. H., Wetzlar; inventors W. Mandler and H. Schmidt. Filed 25 July 1959; published 29 December 1960. Description p. 1 cols. 1–2 (text lines 1–54, numerical example); claims p. 2 cols. 3–4 (claims 1–4 and repeated table); drawing sheet 1 (p. 3).
2. Ernst Leitz GmbH Wetzlar. _Reflex housing for the LEICA — VISOFLEX II_. English leaflet, List 111-40c/Engl., imprint V/62; performance table entry "200 mm TELYT f/4". Scan: <https://www.pacificrimcamera.com/rl/01192/01192.pdf> (accessed 30 September 2026).
3. Robb, P. N., and R. I. Mercado. "Calculation of refractive indices using Buchdahl's chromatic coordinate." _Applied Optics_ 22, no. 8 (1983). Buchdahl coefficient tables used for legacy Schott, OHARA and HOYA glasses.
4. Current optical-glass catalogs of Schott (2025), OHARA (S-series, 2025), HOYA (2026), CDGM (2024), HIKARI and Sumita, as distributed with the `opticalglass` 2.0.2 Python package.
5. Welford, W. T. _Aberrations of Optical Systems_. Bristol: Adam Hilger, 1986. Surface-contribution (Seidel) formulae used for the third-order sums.
6. "Abbildungsfehler." _Wikipedia_ (German), section "Gaußfehler". <https://de.wikipedia.org/wiki/Abbildungsfehler> (accessed 30 September 2026).
7. "Leitz Wetzlar / Leitz Canada Telyt 200mm F/4." _Lens-DB_. <https://lens-db.com/leitz-wetzlar-leitz-canada-telyt-200mm-f4-1959/> (accessed 30 September 2026). Secondary.
8. "F = 20 cm 1:4 Telyt." _Leica Wiki_ (English). <https://wiki.l-camera-forum.com/leica-wiki.en/index.php/F_=_20_cm_1:4_Telyt> (accessed 30 September 2026). Secondary.
9. "Leitz Telyt-V 1:4/200 mm Visoflex (11063)." _Lippisches Kameramuseum_. <http://www.lippisches-kameramuseum.de/Aktuelle_Kameras/Leitz_Telyt-V_1_4_200mm_Visoflex.htm> (accessed 30 September 2026). Secondary; source of the 91.3 mm register.
10. "Leica 200mm f4 Telyt (TELOO / 11063)." _Kamerastore_. <https://kamerastore.com/products/leica-200mm-f4-telyt-teloo-11063-leica-m> (accessed 30 September 2026). Secondary; source of the reported diaphragm relocation.
11. "1958 Telyt 200 mm f 4.0." _Leica Forum_, citing Thiele, _Kleines Fabrikationshandbuch Leica-Objektive_. <https://www.l-camera-forum.com/topic/305130-1958-telyt-200-mm-f-40/> (accessed 30 September 2026). Secondary.
12. "Walter Mandler." _Wikipedia_. <https://en.wikipedia.org/wiki/Walter_Mandler> (accessed 30 September 2026). Secondary.
