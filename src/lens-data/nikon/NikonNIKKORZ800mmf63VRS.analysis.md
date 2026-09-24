## Patent Reference and Design Identification

**Patent:** JP 2023-23323 A <br>
**Application Number:** JP 2021-128741 <br>
**Filed:** 2021-08-05 <br>
**Published:** 2023-02-16 <br>
**Inventors:** Masaki Ito (伊藤 匡輝); Satoshi Miwa (三輪 哲史); Fumiaki Ohtake (大竹 史哲) <br>
**Applicant:** Nikon Corporation (株式会社ニコン) <br>
**Title:** 光学系及び光学機器 (*Optical system and optical apparatus*)
**Embodiment analyzed:** Example 6 (第6実施例), optical system OL6

The implemented prescription is Example 6 of JP 2023-23323 A. The patent describes OL6 as a three-power-group optical system consisting, from object to image, of positive G1, negative focusing group G2, and negative rear group G3. G1 contains a bonded phase-Fresnel (PF) diffractive element, G2 is the single negative meniscus L21, and the aperture stop lies behind G2 and before G3. Example 6 itself is given in paragraphs ¶0158–¶0167, Tables 16–18 on patent PDF pages 29–31, and Figure 11 on page 40.

The association with the production NIKKOR Z 800mm f/6.3 VR S is strong but remains an inference rather than a manufacturer-confirmed patent attribution. The convergent evidence is:

1. Example 6 contains 22 named physical lens elements in 14 air-separated assemblies, matching Nikon's published 22-element/14-group construction for the production lens. The data model has 24 element entries only because the two optically distinct bonded PF media are represented separately from the L13 substrate; `elementCount` remains 22.
2. The patent publishes a design focal length of 779.99933 mm and FNO 6.41999, while Nikon markets the production lens as 800 mm f/6.3. These are retained as separate design and marketing quantities rather than rescaling the prescription.
3. The patent gives maximum image height Y = 21.6 mm, corresponding to a 43.2 mm full image diameter, consistent with the production FX/full-frame format.
4. Example 6 contains one PF optical element. Nikon's production specification likewise lists one PF element, together with three ED and one SR element. The patent does not identify which prescription rows correspond to Nikon's ED and SR marketing classifications, so those labels are not assigned to specific patent elements here.
5. The published near-focus state has d0 = 4606.5453 mm from the object to the first lens surface. Adding the patent TL = 393.4547 mm gives 5000.0000 mm to the image plane, matching Nikon's 5.0 m minimum-focus specification after reference-plane normalization. The patent's β = -0.16674 is also close to Nikon's rounded 0.16× maximum reproduction ratio.
6. Example 6 focuses by moving the internal single-element G2 toward the image plane, consistent with Nikon's published internal-focusing designation.
7. The patent application date, 2021-08-05, precedes Nikon's 2022-04-06 production release announcement.

Nikon does not state in the cited product or release material that JP 2023-23323 A Example 6 is the production prescription. The identification therefore remains a correlation based on the numerical and mechanical agreement above.

## Optical Architecture

Example 6 is a long-focus **telephoto** design with a positive-negative-negative power-group sequence. The term is justified here by the verified infinity-focus ratio TL/EFL = 0.5044235, using TL = 393.45457 mm from the first lens vertex to the image plane and computed EFL = 780.00836 mm from the implemented prescription. The corresponding verified group focal lengths are approximately +237.0805 mm for G1, -236.7903 mm for G2, and -105.8681 mm for G3. These are computed first-order group powers, not standalone claims about the production lens barrel.

G1 carries most of the front collecting structure and the PF element. It begins with two large positive lenses, places the PF-bearing L13 after the largest front-group air space, and then continues through two cemented pairs and L16. G2 is the single negative meniscus L21 and is the only moving group in the selected embodiment. The stop is on the image side of G2. G3 is a compact rear relay/correction section comprising six physical assemblies, five of them cemented doublets. The patent's own description of the embodiment and Figure 11 show the same ordering (JP 2023-23323 A, ¶0158–¶0161; Fig. 11).

The prescription is all-spherical in the geometric sense. Example 6 has no geometric asphere entries; its non-refractive surface data are instead the radial PF phase polynomial at source surface 7. The phase term changes optical momentum and first-order power without changing the geometric sag used for the element outline.

One source bookkeeping plane is intentionally absent from the implemented sequence. Patent source surface 14 is explicitly called a virtual surface in ¶0161 and is not drawn in Figure 11. Its 17.5002 mm same-index air interval is folded into the spacing after source surface 13, leaving the axial stations and first-order matrix unchanged.

## Element-by-Element Analysis

### L11 — Biconvex Positive

nd = 1.48749, νd = 70.32. Glass: J-FK5 (HIKARI), coordinate-compatible catalog assignment. f = +767.107183 mm.

L11 is the first and largest front positive lens. Its standalone power is modest compared with the 780 mm system EFL, but it begins the positive G1 collector and establishes the large front clear aperture. In Example 6 the patent explicitly describes L11 as biconvex (¶0159).

### L12 — Positive Meniscus

nd = 1.48749, νd = 70.32. Glass: J-FK5 (HIKARI), coordinate-compatible catalog assignment. f = +390.984877 mm.

L12 is the second front positive member and is described by the patent as convex toward the object. It precedes the 89.1101 mm maximum G1 air gap. Together, L11 and L12 satisfy the patent architecture in which positive power is placed ahead of the large front-group air space and ahead of the PF element.

### L13 — Positive Meniscus Substrate with Bonded PF Media

nd = 1.5168, νd = 64.13. Glass: J-BK7A (HIKARI), coordinate-compatible catalog assignment. f = +806.239485 mm.

L13 is a positive meniscus, convex toward the object, carrying the PF element on its image-side surface (JP 2023-23323 A, ¶0159). The physical patent lens remains one L13 lens component, while the implemented model represents the two thin PF optical media as separate entries because the patent publishes distinct optical constants on the two sides of the diffractive interface.

PF medium A: nd = 1.5295, νd = 36.27. Glass: Unmatched (PF optical material; nd=1.529500, vd=36.27). No standalone lens focal length is assigned because this is a thin bonded optical medium rather than a separate physical patent lens.

PF medium B: nd = 1.5498, νd = 50.91. Glass: Unmatched (PF optical material; nd=1.549800, vd=50.91). No standalone lens focal length is assigned because this is likewise a thin bonded optical medium, retained as an optically distinct model entry but not counted as an additional physical production lens element.

The diffractive phase interface is source surface 7. Its phase behavior is discussed separately under “Diffractive PF Element.”

### D1 — L14 + L15 Cemented Doublet

L14: nd = 1.48749, νd = 70.32. Glass: J-FK5 (HIKARI), coordinate-compatible catalog assignment. f = +186.179853 mm.

L15: nd = 1.90366, νd = 31.27. Glass: J-LASFH13 (HIKARI), coordinate-compatible catalog assignment. f = -70.442037 mm.

The patent describes L14 as biconvex positive and L15 as biconcave negative, cemented at source surface 10 (¶0159). The pair therefore combines opposite-sign standalone powers without introducing an air gap at the internal junction. The analysis does not assign a unique aberration correction to either member beyond the patent's broader statements about the architecture.

### L16 — Positive Meniscus

nd = 1.49782, νd = 82.57. Glass: J-FKH1 (HIKARI), coordinate-compatible catalog assignment. f = +136.910298 mm.

L16 is a positive meniscus, convex toward the object, placed between D1 and the rear cemented pair of G1. Its high νd coordinate distinguishes it from the denser, lower-νd glasses in the neighboring cemented components, but the catalog match is not evidence of Nikon's actual supplier or production melt.

### D2 — L17 + L18 Cemented Doublet

L17: nd = 1.66755, νd = 41.87. Glass: J-BASF6 (HIKARI), coordinate-compatible catalog assignment. f = -83.964199 mm.

L18: nd = 1.66382, νd = 27.35. Glass: J-SFH4 (HIKARI), coordinate-compatible catalog assignment. f = +84.499773 mm.

L17 is biconcave negative and L18 is biconvex positive. Their standalone powers are nearly opposed, and the computed cemented-pair focal length is about +10.56 m, making D2 nearly neutral in first-order power while still allowing the two surfaces and two dispersions to participate in the G1 correction balance.

L18 is also the positive lens in G1 with the smallest νd in Example 6. That specific status is used by the patent's conditions involving νdp1, ndp1, and θgFp1. The model carries the independently checked J-SFH4 line data nC = 1.656918, nF = 1.681192, ng = 1.696531, and dPgF = +0.0334 on L18.

### L21 — Negative Meniscus Focus Element

nd = 1.48749, νd = 70.32. Glass: J-FK5 (HIKARI), coordinate-compatible catalog assignment. f = -236.790289 mm.

L21 is the complete negative G2 focusing group. The patent describes it as a negative meniscus convex toward the object and states that focus from infinity to the near state is produced by moving G2 toward the image plane (¶0159–¶0160). Because G2 contains only this one lens, its standalone focal length and the verified G2 focal length are the same within the implemented first-order model.

### D3 — L31 + L32 Cemented Doublet

L31: nd = 2.001, νd = 29.12. Glass: J-LASFH16 (HIKARI), coordinate-compatible catalog assignment. f = -39.381492 mm.

L32: nd = 1.730371, νd = 32.23. Glass: NBFD32 (HOYA), coordinate-compatible catalog assignment. f = +41.364323 mm.

D3 begins G3 immediately behind the stop. The patent describes L31 as biconcave negative and L32 as biconvex positive. Their opposing standalone powers yield a weakly negative cemented assembly compared with the much stronger individual members.

### L33 — Biconcave Negative

nd = 1.7725, νd = 49.62. Glass: J-LASF016 (HIKARI), coordinate-compatible catalog assignment. f = -50.976209 mm.

L33 is the only air-separated singlet within G3 before the remaining chain of cemented doublets. It is biconcave and negative in both the patent description and the implemented data.

### D4 — L34 + L35 Cemented Doublet

L34: nd = 1.627496, νd = 59.24. Glass: Unmatched (627592 class; nearest Hikari J-PSKH8 at 1.62846/59.18 is 9.6e-4 high in nd). f = -46.638703 mm.

L35: nd = 1.79504, νd = 28.69. Glass: J-LAFH3 (HIKARI), coordinate-compatible catalog assignment. f = +52.039526 mm.

L34 is biconcave negative. L35 is a positive meniscus convex toward the object. The 1.627496/59.24 coordinate has no exact catalog match. The nearest Hikari row, J-PSKH8, sits 9.6e-4 higher in nd, which is too far for a six-decimal patent value, so L34 is recorded as an explicit Unmatched disposition and traces on the Abbe-number fallback rather than being forced to a named vendor glass.

### D5 — L36 + L37 Cemented Doublet

L36: nd = 1.61266, νd = 44.46. Glass: J-KZFH1 (HIKARI), coordinate-compatible catalog assignment. f = +29.440057 mm.

L37: nd = 1.59319, νd = 67.9. Glass: J-PSKH1 (HIKARI), coordinate-compatible catalog assignment. f = -57.955204 mm.

The patent identifies L36 as biconvex positive and L37 as biconcave negative. The computed cemented pair is net positive, with approximately +54.70 mm focal length, so D5 is one of the comparatively strong positive subassemblies inside the overall negative G3 group.

### D6 — L38 + L39 Cemented Doublet

L38: nd = 1.95375, νd = 32.33. Glass: J-LASFH21 (HIKARI), coordinate-compatible catalog assignment. f = -25.280816 mm.

L39: nd = 1.61293, νd = 36.94. Glass: J-F3 (HIKARI), exact coordinate match. f = +34.837125 mm.

L38 is biconcave negative and L39 is biconvex positive. The Nikon/Hikari Zemax catalog (2017-11) J-F3 curve reproduces the patent coordinate exactly (1.61293 / 36.94), so L39 traces on that catalog curve. The match identifies a dispersion curve, not Nikon's production melt.

### D7 — L310 + L311 Cemented Doublet

L310: nd = 1.730371, νd = 32.23. Glass: NBFD32 (HOYA), coordinate-compatible catalog assignment. f = +31.920817 mm.

L311: nd = 1.7725, νd = 49.62. Glass: J-LASF016 (HIKARI), coordinate-compatible catalog assignment. f = -22.250821 mm.

D7 is another positive/negative cemented pair, here with a net negative first-order assembly power. The same two catalog coordinates also appear elsewhere in G3, illustrating that the rear group repeatedly combines different power signs with reused material classes rather than relying on a single isolated corrective element.

### D8 — L312 + L313 Cemented Doublet

L312: nd = 1.85, νd = 27.03. Glass: J-LASFH23 (HIKARI), coordinate-compatible catalog assignment. f = +23.709997 mm.

L313: nd = 1.945944, νd = 17.98. Glass: FDS18 (HOYA), coordinate-compatible catalog assignment. f = -30.917700 mm.

D8 is the final cemented pair before the 74.56937 mm published rear air-equivalent back-focus interval. L312 is biconvex positive and L313 is biconcave negative. The pair has a computed net positive focal length of about +71.20 mm, even though the complete G3 group remains negative.

## Glass Identification and Selection

The patent publishes nd and νd coordinates, not supplier glass names. The names below are therefore coordinate-compatible catalog identifications established in the dossier's glass audit; they are not proof of Nikon's actual supplier, melt, or production designation. The two PF media and L34 remain explicit Unmatched dispositions on the Abbe-number fallback; every other element traces on a catalog Sellmeier curve.

| Glass / class | nd | νd | Used in | Status |
| --- | ---: | ---: | --- | --- |
| J-FK5 (HIKARI) | 1.48749 | 70.32 | L11, L12, L14, L21 | Coordinate-compatible; νd catalog residual about -0.01 |
| J-BK7A (HIKARI) | 1.5168 | 64.13 | L13 substrate | Coordinate-compatible; νd catalog residual about +0.01 |
| Unmatched PF optical material A | 1.5295 | 36.27 | Epf-A | No defensible public catalog identity established |
| Unmatched PF optical material B | 1.5498 | 50.91 | Epf-B | No defensible public catalog identity established |
| J-LASFH13 (HIKARI) | 1.90366 | 31.27 | L15 | Exact coordinate match |
| J-FKH1 (HIKARI) | 1.49782 | 82.57 | L16 | Exact coordinate match |
| J-BASF6 (HIKARI) | 1.66755 | 41.87 | L17 | Exact coordinate match |
| J-SFH4 (HIKARI) | 1.66382 | 27.35 | L18 | Exact coordinate match; line-index data retained |
| J-LASFH16 (HIKARI) | 2.001 | 29.12 | L31 | Exact coordinate match |
| NBFD32 (HOYA) | 1.730371 | 32.23 | L32, L310 | Coordinate-compatible to catalog rounding |
| J-LASF016 (HIKARI) | 1.7725 | 49.62 | L33, L311 | Exact coordinate match |
| Unmatched (627592 class) | 1.627496 | 59.24 | L34 | Nearest Hikari J-PSKH8 is 9.6e-4 high in nd; explicit disposition |
| J-LAFH3 (HIKARI) | 1.79504 | 28.69 | L35 | Exact coordinate match |
| J-KZFH1 (HIKARI) | 1.61266 | 44.46 | L36 | Exact coordinate match |
| J-PSKH1 (HIKARI) | 1.59319 | 67.9 | L37 | Exact coordinate match |
| J-LASFH21 (HIKARI) | 1.95375 | 32.33 | L38 | Exact coordinate match |
| J-F3 (HIKARI) | 1.61293 | 36.94 | L39 | Exact coordinate match |
| J-LASFH23 (HIKARI) | 1.85 | 27.03 | L312 | Exact coordinate match |
| FDS18 (HOYA) | 1.945944 | 17.98 | L313 | Coordinate-compatible to catalog rounding |

The patent explicitly singles out L18 as the positive lens in G1 with the smallest νd. Its stored Hikari line indices give

$$
\theta_{gF}=\frac{n_g-n_F}{n_F-n_C}=0.6319106863,
$$

which reproduces the patent's Table 26 value 0.6319. The same L18 entry carries dPgF = +0.0334 from the authoritative Hikari data sheet. This provides direct spectral support for the patent conditions involving θgFp1; it does not by itself justify describing the complete lens as apochromatic. No broader APO claim is made here.

Nikon markets the production lens as containing three ED elements and one SR element in addition to one PF element. The patent example does not identify those production marketing classifications on specific prescription rows, so the catalog-coordinate labels above are kept separate from Nikon's ED/SR count.

## Focus Mechanism

Example 6 uses published internal focus. G2 consists only of L21 and translates toward the image plane from infinity to the near state, while G1, the stop, and G3 remain fixed (JP 2023-23323 A, ¶0160 and Table 18).

| State | d1 after G1 (mm) | d2 after G2 (mm) | d1 + d2 (mm) | Patent β |
| --- | ---: | ---: | ---: | ---: |
| Infinity | 6.00000 | 62.50000 | 68.50000 | — |
| Near | 29.75122 | 38.74878 | 68.50000 | -0.16674 |

The focus travel is therefore 23.75122 mm imageward. Recalculation from the final prescription gives near-state transverse magnification -0.16673493 and a solved object-to-first-surface distance of 4606.63304 mm from the rounded prescription, close to the patent's 4606.5453 mm. Using the patent's own d0 and TL reference planes gives exactly 5.0000 m from subject to image plane, matching Nikon's published minimum-focus distance.

Only the infinity and near endpoints are published. The data file's continuous focus control linearly interpolates those two gap values for visualization; that interpolation is not a published Nikon motor law or a reconstructed mechanical cam curve.

## Diffractive PF Element

The PF element is bonded to the image side of L13. The patent states that it comprises two optical materials joined at a diffractive interface (¶0046–¶0048 and ¶0159). In the implemented model the phase surface is surface 7, at reference wavelength λ0 = 587.6 nm and diffraction order 1, with

- C2 = -4.02091×10^-5 mm^-1
- C4 = -2.29061×10^-10 mm^-3

The patent defines the phase polynomial in equation (b) and the first-order diffractive power in equation (c):

$$
\phi_D(\lambda,n)=-2C_2n\frac{\lambda}{\lambda_0}.
$$

At the design wavelength and first order this gives φD = +8.04182×10^-5 mm^-1 and a diffractive focal length fpf = 12434.99606 mm, reproducing Table 26 to its printed precision. This phase power is distinct from geometric surface sag; Example 6 has no geometric aspherical surfaces.

The patent attributes the two-material bonded PF architecture to chromatic correction over a broad wavelength range and suppression of unwanted diffraction-order flare (¶0046). That is a patent design statement, not an independently measured production-lens flare result.

## Conditional Expressions

JP 2023-23323 A gives fifteen design conditions and tabulates the Example 6 corresponding values in Table 26. The values below were recomputed from the selected prescription and independently compared with the printed table values.

| Eq. | Patent condition | Recomputed Example 6 value | Table 26 | Result |
| --- | --- | ---: | ---: | --- |
| (1) | 0.40 < TL/f < 0.65 | 0.504424 | 0.504 | Satisfies |
| (2) | 0.60 < θgFp1 < 1.00 | 0.631911 | 0.6319 | Satisfies |
| (3) | 0.10 < TLpf/TL < 0.40 | 0.299171 | 0.299 | Satisfies |
| (4) | 0.30 < d1/dG1 < 0.60 | 0.514196 | 0.514 | Satisfies |
| (5) | 0.30 < TLs/TL < 0.70 | 0.617606 | 0.618 | Satisfies |
| (6) | 0.05 < -fr/f < 2.50 | 0.135727 | 0.136 | Satisfies |
| (7) | 12.0 < νdp1 < 32.0 | 27.35 | 27.35 | Satisfies |
| (8) | 0.10 < d1/TL < 0.31 | 0.226481 | 0.226 | Satisfies |
| (9) | 0.20 < f1/f < 0.50 | 0.303946 | 0.304 | Satisfies |
| (10) | 0.15 < -f2/f < 0.40 | 0.303574 | 0.304 | Satisfies |
| (11) | 0.10 < dpf/TL < 0.31 | 0.226481 | 0.226 | Satisfies |
| (12) | 8.0 < fpf/f < 22.0 | 15.942132 | 15.942 | Satisfies |
| (13) | dL1L2/TL < 0.080 | 0.054644 | 0.055 | Satisfies |
| (14) | θgFp1 + 0.00316νdp1 > 0.706 | 0.718337 | 0.718 | Satisfies |
| (15) | ndp1 < 1.810 | 1.66382 | 1.664 | Satisfies |

The differences between recomputed and printed values are at the expected level for the decimal precision of the patent tables. They are preserved as rounding residuals rather than treated as corrections to the patent.

## Image Stabilization

Nikon specifies optical lens-shift VR for the production NIKKOR Z 800mm f/6.3 VR S. The patent's general embodiment discussion also states that at least part of G3 may be moved transversely or tilted to act as an anti-vibration group (¶0089). Example 6, however, publishes only centered axial prescription data and does not identify a unique G3 stabilization subgroup, decenter magnitude, or stabilization state.

Accordingly, the data file models no VR displacement. The presence of production VR is a manufacturer fact; the exact production stabilization group and its motion cannot be recovered from the selected Example 6 numerical table without additional source evidence.

## Verification Summary

The implemented infinity prescription reproduces the selected source model at first order. From the final parsed data, the independently recomputed EFL is 780.00836 mm, BFD is 74.57185 mm from the last physical vertex, and first-surface-to-image track is 393.45457 mm. The corresponding patent values are 779.99933 mm, 74.56937 mm, and 393.4547 mm. The small residuals are consistent with the finite precision of the published surface table.

The surface-by-surface Petzval calculation uses φ/(n·n′) for every refracting interface and keeps the PF phase contribution separate. The combined verified Petzval sum is +2.77118594×10^-4 mm^-1. The prescription therefore retains the project distinction between ordinary refractive surface power and the additional diffractive phase power.

The patent does not publish a physical diaphragm diameter. The implemented stop semi-diameter, 10.5056371475 mm, is therefore a model calibration chosen so that the parsed pre-stop pupil matrix reproduces the design FNO 6.41999. Agreement with that f-number is not independent evidence of the real diaphragm size.

Likewise, the patent gives no numerical clear-aperture or semi-diameter table. The authored semi-diameters are modeled values, not source facts. They follow the element rims drawn in Figure 11, measured at 0.348 mm per 300-dpi pixel with the scale set from the L11-to-L13 axial vertex spacing: L11 63.0 mm, L12 61.6 mm, L13 and its PF layers 38.3 mm, L14+L15 34.8 mm, L16 33.8 mm, L17+L18 27.1 mm, L21 22.6 mm, and the rear G3 assemblies rising from 11.5 mm behind the stop to 17.1 mm at L312+L313. Each value clears the infinity-focus axial marginal ray traced with the diffractive surface's power included (for example 60.75 mm at surface 1 and 21.35 mm at L21), and every rear G3 rim also contains the full-field chief ray; the extreme off-axis front-group rays vignette, as in any long telephoto. The minimum physical-lens edge thickness is 0.566 mm (L16), the maximum rim angle is 31.98° (surface 11), and the maximum shared-gap sag-intrusion fraction is 0.621 against the 0.90 limit. These checks validate the authored geometry but do not turn the figure-derived apertures into Nikon production dimensions.

No uniform scaling is applied. Marketed 800 mm / f/6.3 and patent design 779.99933 mm / f/6.41999 remain separate throughout the model and this analysis.

## Sources and References

1. Japan Patent Office, **JP 2023-23323 A**, *光学系及び光学機器* (*Optical system and optical apparatus*), published 2023-02-16. Example 6: ¶0158–¶0167, Tables 16–18 (PDF pp. 29–31), Figure 11 (PDF p. 40); diffractive equations (b)–(c): ¶0096–¶0100 (PDF p. 17); conditions: Table 26 (PDF pp. 36–37).
2. Nikon Imaging, **NIKKOR Z 800mm f/6.3 VR S — Specifications**: https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_800mmf63_vr_s/
3. Nikon Corporation, **Nikon releases the NIKKOR Z 800mm f/6.3 VR S**, 2022-04-06: https://www.nikon.com/company/news/2022/0406_lens_01/
4. Hikari Glass Co., Ltd., **Optical Glass Catalog**: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf
5. Hikari Glass Co., Ltd., **J-SFH4 optical-glass data sheet**: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/SF/J_SFH4.pdf
6. HOYA Optics Division, **Optical Glass Data / Downloads**: https://www.hoya-opticalworld.com/english/datadownload/index.html
