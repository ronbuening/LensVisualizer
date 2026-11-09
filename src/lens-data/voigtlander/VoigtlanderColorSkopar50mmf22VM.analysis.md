## Patent Reference and Design Identification

**Patent:** JP 2025-187904 A (published application).  
**Filed:** 2024-06-14.  
**Published:** 2025-12-25.  
**Inventors:** Tatsuya Moriyama; Romanized names follow the acquired source handoff.  
**Applicant:** Cosina Co., Ltd.  
**Example details:** 第1実施形態, Tables 1–3 and Fig. 1; original millimetres, scale factor 1.

This is a Grade B probable product-family reconstruction. The primary numerical embodiment is retained at 48.455 mm, F2.254 and 47.594° full field. The retail label is 50 mm f/2.2; it supplies identification context rather than a reason to rescale or refocus the patent. Exact factory radii, glasses, apertures and production-example selection remain unproved.

The original 2024 VM product is the intended association. The evidence converges on:

1. Seven meniscus elements in six groups, with three separate front menisci, a central stop, one rear cemented pair and two rear singlets.
2. Matching bending orientations and the distinctive broad final negative meniscus in the official section.
3. Compatible native aperture and field; the manufacturer specifies 50 mm, f/2.2 and 47.3°.

Embodiment 2 has 8/7 construction with an additional front positive singlet. Embodiment 3 has 8/6 construction with an additional rear cemented pair. Those alternatives are disclosed and not substituted into this 7/6 model. The 2025 application publication postdates the 2024 product; timing does not prove a unique factory prescription.

## Optical Architecture

The front positive-positive-negative singlets collect and bend the field into the central diaphragm. Behind it, a negative-positive cemented pair and a positive-negative meniscus pair distribute rear power. These are architectural interpretations of the literal surfaces, not isolated proof of each element's contribution to the final aberration balance. There is no aspherical surface or added sensor plate.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 2.00100, νd = 29.13. Glass: Unmatched, literal patent d-line pair; supplier unproved. f = +56.999121 mm (isolated thick-element paraxial estimate in air).

Source surfaces 1–2 delimit this element. It is an air-separated singlet. Its signed power and geometry are source-derived; a specific correction role is not presented as a measured causal result.

### L2 — Positive Meniscus

nd = 1.49700, νd = 81.61. Glass: Unmatched, literal patent d-line pair; supplier unproved. f = +54.289106 mm (isolated thick-element paraxial estimate in air).

Source surfaces 3–4 delimit this element. It is an air-separated singlet. The maker marks the probable corresponding position as anomalous partial dispersion; this is an inferred position association, without a quantitative partial-dispersion or supplier identification. Its signed power and geometry are source-derived; a specific correction role is not presented as a measured causal result.

### L3 — Negative Meniscus

nd = 1.80808, νd = 22.76. Glass: Unmatched, literal patent d-line pair; supplier unproved. f = -28.533103 mm (isolated thick-element paraxial estimate in air).

Source surfaces 5–6 delimit this element. It is an air-separated singlet. The maker marks the probable corresponding position as anomalous partial dispersion; this is an inferred position association, without a quantitative partial-dispersion or supplier identification. Its signed power and geometry are source-derived; a specific correction role is not presented as a measured causal result.

### L4 — Negative Meniscus

nd = 1.75520, νd = 27.53. Glass: Unmatched, literal patent d-line pair; supplier unproved. f = -21.460134 mm (isolated thick-element paraxial estimate in air).

Source surfaces 8–9 delimit this element. It belongs to cemented assembly D1; the isolated focal estimate does not represent the power of that assembly in situ. Its signed power and geometry are source-derived; a specific correction role is not presented as a measured causal result.

### L5 — Positive Meniscus

nd = 1.90365, νd = 31.31. Glass: Unmatched, literal patent d-line pair; supplier unproved. f = +13.931110 mm (isolated thick-element paraxial estimate in air).

Source surfaces 9–10 delimit this element. It belongs to cemented assembly D1; the isolated focal estimate does not represent the power of that assembly in situ. Its signed power and geometry are source-derived; a specific correction role is not presented as a measured causal result.

### L6 — Positive Meniscus

nd = 1.61339, νd = 44.27. Glass: Unmatched, literal patent d-line pair; supplier unproved. f = +178.207425 mm (isolated thick-element paraxial estimate in air).

Source surfaces 11–12 delimit this element. It is an air-separated singlet. The maker marks the probable corresponding position as anomalous partial dispersion; this is an inferred position association, without a quantitative partial-dispersion or supplier identification. Its signed power and geometry are source-derived; a specific correction role is not presented as a measured causal result.

### L7 — Negative Meniscus

nd = 1.54814, νd = 45.83. Glass: Unmatched, literal patent d-line pair; supplier unproved. f = -64.180218 mm (isolated thick-element paraxial estimate in air).

Source surfaces 13–14 delimit this element. It is an air-separated singlet. Its signed power and geometry are source-derived; a specific correction role is not presented as a measured causal result.

## Glass Identification and Selection

| Element | nd | νd | Status |
|---|---:|---:|---|
| L1 | 2.00100 | 29.13 | Unmatched; literal d-line |
| L2 | 1.49700 | 81.61 | Unmatched; literal d-line |
| L3 | 1.80808 | 22.76 | Unmatched; literal d-line |
| L4 | 1.75520 | 27.53 | Unmatched; literal d-line |
| L5 | 1.90365 | 31.31 | Unmatched; literal d-line |
| L6 | 1.61339 | 44.27 | Unmatched; literal d-line |
| L7 | 1.54814 | 45.83 | Unmatched; literal d-line |

The patent explicitly defines d-line indices near 587.56 nm. The native reference calculation uses 587.5618 nm with literal reference indices (`useResolvedReference:false`); this small wavelength convention difference is disclosed rather than treated as measured dispersion. The supplier and full dispersion are unproved. Abbe-only chromatic interpolation is not validated here, and no APO or broadband performance claim follows from these monochromatic checks.

Table 2 gives L6 nd = 1.61339 while the aggregate condition gives 1.61340; the surface table controls. The printed front-positive ΔPgF = 0.0374 is retained as a source aggregate condition. Its individual material identity and normal-line conversion are not established; it is not assigned to a guessed element or authored as an invented `dPgF`. The maker marks probable L2/L3/L6 APD positions, which remains distinct from quantitative glass identification.

## Focus Mechanism

The patent describes whole-system objectward motion for near focus. The source D0 = 642.00 mm is object-to-first-surface distance and D14 changes from 13.99 to 17.96 mm. The derived near object-to-image sum is 702.45 mm; it is not the marketed 0.5 m endpoint. No continuous finite cam is inferred.

The delivered data is static infinity only (`closeFocusM:1e15`). The literal terminal gap 13.99 mm fixes image z = 56.48 mm. The 13.994 mm BF and 56.482 mm total header values remain separate from the summed 13.99/56.48 mm surface prescription.

## Aperture and Geometry Assumptions

The source prints the stop station z = 13.45 mm. Its opening and all glass clear semi-diameters are absent. The inferred row SD vector, including null for the ordinary native iris, is `[12.0, 11.5, 11.25, 11.25, 10.25, 9.25, None, 9.5, 9.25, 9.25, 8.75, 8.75, 9.25, 12.25]` mm. Source and maker figures inform the approximate element-envelope ratios, with clear optical caps distinguished from body bevels and flanges. These hypotheses were frozen before the first native construction or trace. No SD was altered after tracing or selected by contrast.

The native ordinary-prime rule derives the wide-open iris radius 8.111056060672 mm from F2.254; it was not hand-set to force throughput. All 7 modeled aperture settings passed exact neighboring spherical-cap iris-disk clearance and normal render diagnostics with zero hidden trim. This proves clearance of the modeled open disk, not physical blade or mount fit. The standalone pretrace radial extrema search is a numerical bracket/bisection check, not formal interval certification.

The aperture controls [2.254, 2.8, 4, 5.6, 8, 11, 16] are the source maximum plus modeled stop-down settings through f/16. Their presence does not establish an unprinted factory minimum aperture or exact blade geometry.

## Verification Summary

Independent reduced-angle matrices and a separate physical-slope recursion agree with native EFL 48.446835197860 mm. This differs from the printed 48.455 mm by -0.01685028%. The source image plane minus the paraxial infinity plane is +0.009090327441 mm. The source plane remains fixed; no EFL normalization or best-focus displacement is applied.

Exact source-angle pupil evidence uses 208 native stop-grid samples per field at wide open. Full launches, aim states, traced hits and classifications are retained for independent recount. Raw failures and aim-certified blocked witnesses overlap the final partition; they are not added as extra losses.

| Incident angle | Valid | Blocked | Unaimed | Unresolved | Raw failure witnesses |
|---|---:|---:|---:|---:|---:|
| 0° | 208 | 0 | 0 | 0 | 0 |
| 11.8985° | 194 | 14 | 0 | 0 | 0 |
| 23.797° | 66 | 142 | 0 | 0 | 10 |

### Separate saved-state certification of two aimed failures

At the 23.797° source edge, eight of the ten raw native failure witnesses already carry native aim status `blocked`. Rows31 and38 were successfully aimed and retain native `failed/noBracket` at S9. The original intersection-failure clipEvent alone is not independent proof of an aperture miss.

The independent review analytically replayed the saved S8 outgoing states against the frozen S9 sphere: vertex z20.66 mm, R+12.289 mm and clear semi-diameter9.25 mm. The correct positive-root branch has t5.927631581084169 and radial height10.39306722949081 mm, exceeding the cap by1.14306722949081 mm; its sag residual is −3.55e−15 mm. The second quadratic root is on the wrong sheet. This separately certifies a miss of the authored finite cap, conditional on inferred clear geometry; it does not establish a factory rim or measured vignetting.

The original failures and both full records remain unchanged. No native diagnostic rerun or optical/cap adjustment was used. The portable review packet is [private analytical witness](https://drive.google.com/file/d/1aF3KEzCRo4IfRz_bRXgn8g36Z7-2U9eO/view),42,418 bytes,SHA256 `89400ba0d532cf8edc4864f3010a68cf63e6c7af536f7c478e79de1046e69d3d`. Its frozen model, original records and analytical arrays replay exactly in this workspace without native calls. Dense MTF prior grids are retained, but this sparse witness is not presented as a saved full-dense-ray audit or factory aperture certification.

The normal native scalar diffraction estimator uses reference spectrum, 587.5618 nm, design focus and zero applied shift. Curves are conditional on the transmitted modeled pupil; zero unresolved flux does not mean loss-free transmission. All saved prior grids and final arrays are retained. These checks establish the native estimator’s sampled grid convergence, not an independent physical-OPL, continuum, factory or full-spectrum validation. No withdrawn one-dimensional OPL reference is used.

| F-number | Requested source angle | Actual angle | Grid | Successive-grid max Δ through 50 lp/mm | Unknown flux |
|---|---:|---:|---:|---:|---:|
| 2.254 | 0° | 0.000000000° | 64 | 0.003401719263 | 0 |
| 2.254 | 11.8985° | 11.898482691° | 128 | 0.001993160886 | 0 |
| 2.254 | 23.797° | 23.797004150° | 128 | 0.009201885865 | 0 |
| 8 | 0° | 0.000000000° | 32 | 0.006854692639 | 0 |
| 8 | 11.8985° | 11.898482691° | 32 | 0.007262852889 | 0 |
| 8 | 23.797° | 23.797004150° | 64 | 0.009727904534 | 0 |

The source incident angles are mapped from actual chief-ray heights. They are separate from the compiled viewer’s eleven native image-height fractions and generic format corner. The exact 23.797° source edge reaches 21.635326931 mm versus native reference 21.65 mm; the physical 36×24 mm corner is 21.633307653 mm. None is silently identified with another.

Native best-axial diagnostics remain unapplied: F2.254: -0.015302855501 mm, F8: -0.013896695705 mm. The authored plane and the design-focus validation remain unchanged.

## Sources and Reproducibility

- [JP002025187904A_official_full.pdf](https://depatisnet.dpma.de/DepatisNet/depatisnet/JP002025187904A_all_pages.pdf?window=1&space=menu&content=download_doc_verify&action=download_doc&docid=JP002025187904A&so=desc&sf=vn&firstdoc=null&struct=&Cl=2&Bi=1&Ab=1&De=3&Dr=17&Pts=&Pa=&We=&Sr=&Eam=&Cor=&Aa=&NrFaxPages=22&subdok=null&pdfpage=1&pdfmatrix=1x1&origin=pdf_window&verify_str=null), acquired original SHA256 `8576ea911b84c7de6600546cabf3e8af2d6a99b5e808e728bbdc5de2d3132f1d`; 3526251 bytes.
- [official_product.html](https://www.cosina.co.jp/voigtlander/vm-mount/color-skopar-50mm-f2-2/), acquired original SHA256 `cbc76e8c7d19e3063bc7783b94a1b3737e8caa033c9a5fcba64c4731f61359eb`; 63198 bytes.
- [official_section.svg](https://www.cosina.co.jp/wp/wp-content/uploads/2024/06/cc-VM-50_22-LDyutr.svg), acquired original SHA256 `5298ed3368e74ef3601d7ea7dabd60d95cd4ebbe589fa7d999b7a798447a9692`; 22381 bytes.
- [official_manual.pdf](https://www.cosina.co.jp/wp/wp-content/uploads/2024/06/VM-50_22-JPN-V1_1.pdf), acquired original SHA256 `126c41e48e8ed39bd482b5302fab25db5c78df3900f5f36cfc453db764040e02`; 877891 bytes.

The local source packet retains the selected primary numerical/equation/figure rasters and official section, plus the exact literal jobcard. Full original PDF custody is linked by the acquired source index; this package does not claim to contain or freshly inspect every full-PDF page. Selected pages were visually checked against the literal jobcards.

The acquired index is private Drive `1ciHCmHYrESvTiv5jTsfaUErfvEgtgCC_`, 72,246 bytes, SHA256 `614740109349ffba95666caae642d93c261f1b62f3d9bae06b05e8629593f3ef`. Seven readable transport parts and all eighteen embedded member hashes were verified; the jobcard bytes match their original hashes. Current-main repository-only dedup evidence, frozen inputs, independent first-order/sag scripts, all native call counters, pupil arrays, diffraction prior grids and final arrays are included in the private evidence archive. No new patent discovery query, production code change, commit or deployment was performed.
