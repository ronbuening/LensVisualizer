## Patent Reference and Design Identification

**Patent:** KR 101802036 B1  
**Application Number:** 10-2015-0155317  
**Filed:** 2015-11-05  
**Registered:** 2017-11-21  
**Published:** 2017-11-27  
**Inventors:** Jong Young Park (박종영); Hyun Sik Yoon (윤현식)  
**Applicant:** Samyang Optics Co., Ltd. (주식회사 삼양옵틱스)  
**Title:** 렌즈계 및 이를 포함하는 광학 기기  
**Embodiment analyzed:** Sole Example 1, Table 1 and Figure 1

The candidate represents the manual-focus Samyang 135mm F2.0 ED UMC by an inferred patent-to-product association. It is an infinity model of the native table. It is not a claim that the commercial lens has the model's exact radii, clear apertures, glass melts or measured performance.

The association rests on convergent positional evidence:

1. The official product section and 2022 catalogue page 36 show eleven elements in seven air-separated components, matching the source.
2. Both show the same front positive meniscus, two front cemented doublets, two rear singlets and two rear cemented doublets.
3. The manufacturer's ED highlight is the second element. Table 1 assigns FCD1_HOYA to that interval.
4. Figure 2 carries the nominal legend f=135 F2, consistent with the product designation.

These observations are stronger than a count-only match, but they do not confirm an identical manufactured prescription. The official 2015-01-12 announcement predates the 2015-11-05 filing; chronology is recorded without treating it as affirmative identity evidence or drawing a legal conclusion.

Table 1 and paragraph 0114 instead state F=130 and Fno=2.07. The unscaled d-line table traces to an EFL of 129.999015 mm. The data therefore separates marketed 135mm/f2 from the native prescription and its calculated aperture behavior.

## Optical Architecture

There are eleven spherical glass elements, eighteen refracting boundaries and a separate plane stop at source row 9. Cemented interfaces are S4, S7, S15 and S18. No numerical asphere or aspheric equation belongs to this example.

Figure 1 calls the front assembly G2 and the rear assembly G1. Those physical identifiers are retained even where the prose's ordinal terminology is inconsistent.

| Physical assembly | Elements | Isolated assembly EFL |
|---|---|---:|
| Front G2, before the stop | L1–L5, patent L21–L25 | +202.391088 mm |
| Rear G1, after the stop | L6–L11, patent L11–L16 | +120.507052 mm |

These calculations reproduce the source's rounded f2=202.394 and f1=120.508, respectively. The complete separated system has a shorter EFL than either positive assembly alone.

The first-to-last optical-vertex length is 110.645 mm. With the 44.04 mm image gap, the modeled first-vertex-to-image track is 154.685 mm and TL/EFL is 1.189894. The manufacturer's word “telephoto” describes the product class; the modeled prescription does not meet the narrower optical TL/EFL < 1 criterion used here. Its paraxial BFD of 44.042278 mm is also shorter than its EFL, so it is not a retrofocus-ratio design.

The stop is 75.928 mm behind S1, versus the rounded printed T2=75.929 mm. It lies 0.700 mm before S10. Source fF/fR and group-ordinal descriptions require care; the physical table sequence controls the implementation.

### Image distance

Table 1's S19 distance and paragraph 0113 both print Bf=41.855 mm, but the d-line prescription focuses 44.042 mm behind S19, a 2.19 mm difference. Changing the last air gap cannot alter the reproduced EFL, so the printed value is treated as a misprint: the model uses S19.d=44.04 mm (residual paraxial defocus −0.002 mm) and keeps the printed figure as an unresolved source note.

## Focus Mechanism

The manufacturer describes manual floating focus and a minimum focusing distance of 0.8 m. Paragraph 0058 states that the first through ninth elements can move objectward as focus approaches a nearer object.

No numerical near-focus gaps, travel, stop relationship or complete motion law are supplied. The model therefore has no focus travel: the infinity prescription does not change with the focus control. The closeFocusM=0.8 metadata describes the product; it does not certify a simulated 0.8 m state, magnification, breathing or aberration performance.

No whole-system unit-focus law is substituted for the source's incomplete floating description.

## Aperture and Clear Diameters

The source defines C as a diameter, and the model uses C/2 for every surface except five. The iris radius is 14.28 mm from C=28.56 mm. The printed Fno=2.07 and the marketed F2 are kept separately.

The printed diameters of S4, S6, S7, S8 and S12 are smaller than the patent's own f/2.07 axial beam. With them, S8 alone limits the on-axis beam to about f/2.78. Figure 1 draws the same surfaces larger: L25's concave rear face (S8) reaches nearly the height of L24, while the table prints S8 at 29.4 mm, barely larger than the 28.56 mm stop 35 mm behind it. The table is therefore taken to be in error (S8 is probably a misprint for 39.4 mm). The five rims are raised by the least amount that clears the axial beam:

| Surface | Printed C/2 (mm) | Model sd (mm) |
|---|---:|---:|
| 4 | 24.40 | 26.4 |
| 6 | 23.12 | 23.6 |
| 7 | 19.44 | 22.4 |
| 8 | 14.70 | 19.0 |
| 12 | 13.39 | 13.6 |

Two aperture values are distinguished. The paraxial image of the iris alone gives an entrance-pupil diameter of 61.36 mm, f/2.119. An exact axial rim ray reaches the 14.28 mm iris from an entrance height of 30.51 mm; that value, f/2.1306, is stored in nominalFno so the engine's real-ray stop sizing keeps the physical iris.

C19 is blank. The model uses an inferred 16.79 mm final radius, equal to the preceding S18 interface, as a common-rim closure consistent with the final component's section. It is not a published dimension. A smaller real C19 could further restrict the transmitted bundle.

The geometry passes the default gap-intrusion rule without an override, and no rim is hidden by render trimming.

Exact project tracing sampled axial and off-axis ray bundles through 9.4° at infinity. It records admitted, clipped and missed branches, and all admitted samples lie within the modeled physical boundaries. Finite sampled rays do not establish full-field production performance or a continuous-domain containment proof.

## First-Order Checks and Source Conditions

Two separately implemented first-order paths and the source-first independent audit agree on EFL and BFD. Surface-by-surface Petzval contributions sum to +0.001052593 mm⁻¹. This is the paraxial Petzval sum, not a measured field-curvature surface or a prediction of best sagittal/tangential focus.

Selected source conditions can be evaluated directly:

| Condition | Computed result | Source interval |
|---|---:|---:|
| Equation 2, absolute difference of the two rear doublet EFLs | 150.257297 mm | 148 to 152 mm |
| Equation 5, (Bf + T2)/F with printed BF | 0.906023 | 0 to 1 |
| Equation 5, same ratio with the model's BF=44.04 | 0.922831 | 0 to 1 |
| Equation 6, signed outer radii of L4–L5 divided by F + f(L2–L3) | −1.912891 | −3 to −1 |
| Equation 7, stop-to-last-vertex / first-vertex-to-stop | 0.457236 | 0.25 to 0.65 |

Equation 1 needs the missing last-face C19. Equations 3 and 4 refer to composite-group Nd and Vd without defining an aggregation. No invented final diameter, average group index or averaged Abbe number is used to assert that those source conditions have been reproduced. The inferred C19 in the model does not retroactively supply a published source value.

The native aberration/spot/MTF figures retain their f=135 F2 labels. Their plotted curves are not substituted for fresh calculations or used to tune this model. No claim of reproducing those MTF curves is made.

Published catalog curves approximate dispersion for all eleven elements. The patent's NSF1_SCHOTT entries use Schott SF1 as a spectral proxy: its catalog νd is 29.51, close to the printed 29.50. This differs from modern N-SF1, whose νd is 29.62. Native nd/νd remain unchanged; these proxies do not establish the production supplier or melt.

L2 corresponds to the production lens's ED element. Its FCD1 proxy gives PgF ≈ 0.53885 and ΔPgF ≈ +0.03232 relative to the Schott normal line, supporting an inferred APD highlight. The patent does not designate that material as anomalous.

## Model Scope

The model keeps the native 130 mm table unscaled, uses the paraxial image distance, raises five printed clear diameters to pass the axial beam, infers the final aperture, approximates glass dispersion from catalog formulas and covers the infinity state only.

## Sources

- [Controlling Korean patent KR101802036B1](https://patents.google.com/patent/KR101802036B1/en), original PDF pp. 7–9 for definitions/conditions/Table 1 and pp. 11–13 for figures. Original bytes are preserved in the dossier.
- [Official Samyang 135mm F2.0 ED UMC product page](https://www.lksamyang.com/en/product/product-view.php?seq=323), product specifications, mounts and floating/manual-focus description.
- [Official manufacturer optical section](https://www.lksamyang.com/upload/editor/1567749219), element order, cementing and L2 ED highlight.
- [Samyang 2022 catalogue](https://www.lksamyang.com/upload/file/2022_SAMYANG_OPTICS_Catalogue_EN.pdf), p. 36.
- [Official 2015 announcement](https://www.lksamyang.com/en/about/notice-view.php?seq=320), release context; not evidence of production-exact prescription identity.
- [HOYA optical-glass AGF catalog, 2026-07-07 including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), named TAF1, FCD1, FDS90, TAC6 and FF5 rows and dispersion coefficients.
- [SCHOTT optical-glass catalog archive](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?download=true&v=3b65e351), June 2025 AGF, named N-SF66 and N-SF1 entries. Catalog versions, exact coefficient rows, hashes and comparison residuals are preserved in the dossier.
- [Schott Optical Glass 2025](https://media.schott.com/api/public/content/b37dbd8fa7e64662b2d0ae523ae56238?download=true&v=97f67105), PDF pp.132–133, legacy SF1 coordinates used to distinguish the selected proxy from N-SF1.
