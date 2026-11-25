## Patent Reference and Design Identification

**Patent:** [US4188092A](https://patents.google.com/patent/US4188092A/en), Retrofocus type wide-angle objective lens  
**Inventor:** Kikuo Momiyama  
**Assignee:** Canon Kabushiki Kaisha  
**Priority:** April 5, 1977, JP52/38690  
**Filed:** March 31, 1978  
**Granted:** February 12, 1980  
**Example details:** Example 2, Figure 3, original PDF page 12 / column 6. All radii and thicknesses are normalized to f=1 and multiplied uniformly by 28 mm.

This is a production-correlated patent reconstruction of the **June 1979 Canon New FD 28mm f/2**, not the earlier 1975 S.S.C. variant or an authenticated factory prescription. The exact retail variant is documented by the [Canon Camera Museum](https://global.canon/en/c-museum/product/nfd202.html) and the Canon-branded [FD Lens Guide](https://www.galimbertipaolo.it/CanonFD/FDLensGuide1.pdf), PDF page 12, printed SG2-A12: 10 elements / 9 groups, f/2, 75-degree full field, 0.3 m minimum focus. The locally held guide is a manufacturer publication; it supplies product specifications, not an optical cutaway.

The independently published [MIR mechanical cutaway](https://mir.com.my/rb/photography/companies/canon/fdresources/fdlenses/28mmfdf2optic.gif), in its [exact-model page context](https://mir.com.my/rb/photography/companies/canon/fdresources/fdlenses/28mm.htm), agrees in interface order, central cemented assembly and signed contour shapes. A single isotropic transform of 19 source vertices gives 0.8282 pixel RMS and 1.6252 pixel maximum residual across 132 pixels; manual picks carry approximately 1–2 pixel uncertainty. No group warp or independent axial/radial scaling was used. The tiny MIR raster is not a prescription measurement, and its print origin is unattributed. The inherited filename `OEM-mir.gif` does **not** establish OEM provenance. The visibly unresolved internal junction and peripheral bevels limit precision. [Yossyheim](https://yossyheim.com/canon-new-fd-28mm-f2-repair) and [Tokyo Camera Repair](https://tokyo-camera-repair.com/canon-new-fd-28mm-f2-20220909/) independently corroborate the cemented assembly and floating-focus construction; neither provides measured optical vertices.

## Optical Architecture

Ten spherical elements in nine air-separated groups, with R10 the sole shared cemented interface. R11 is the flat powered glass-to-air exit of the central assembly; it is retained, not replaced by the iris. The separate diaphragm is between R11 and R12. Its exact axial split is not tabulated: the model explicitly estimates the midpoint of the 2.1616 mm air interval, 1.0808 mm on each side, placing STO at z33.8296 mm from R1. No plate, filter or baffle is inserted.

All 19 signed radii, all 18 tabulated separations and every printed d-line index/Abbe pair are preserved. Lens track R1–R19 is 50.3244 mm. The table does not supply terminal image distance. The model therefore uses the independently derived Gaussian infinity BFD **36.063948797 mm**, giving the actual authored image coordinate **z86.388348797 mm**. EFL is **27.997150222 mm**. These image coordinates are derived, not source-measured factory values. Exact near-axis Snell tracing independently approaches that same plane. No best-focus shift is applied in reported MTF.

The stop radius and optical rims are estimates, not factory clear apertures or measured vignetting. Paraxial native controls f/2, f/4 and f/8 yield iris radii 9.008283127, 4.504141564 and 2.252070782 mm. At f/2 the exact marginal entrance radius is 6.426312796 mm; EFL divided by its diameter is 2.17832. This illustrates real/paraxial pupil differences, not a remeasurement of the marketed aperture. The model keeps native paraxial f-number semantics.

## Element-by-Element Analysis

| Element | Source interfaces | n_d | V_d | Layout |
| --- | --- | --- | --- | --- |
| E1 | R1–R2 | 1.58913 | 61.1 | Positive meniscus |
| E2 | R3–R4 | 1.54869 | 45.6 | Negative meniscus |
| E3 | R5–R6 | 1.80610 | 40.9 | Positive meniscus |
| E4 | R7–R8 | 1.59551 | 39.2 | Negative meniscus |
| E5 | R9–R10 | 1.80518 | 25.4 | Central cemented front |
| E6 | R10–R11 | 1.54869 | 45.6 | Central cemented rear, flat exit |
| E7 | R12–R13 | 1.77250 | 49.6 | Positive rear component |
| E8 | R14–R15 | 1.80518 | 25.4 | Biconcave negative |
| E9 | R16–R17 | 1.69680 | 55.5 | Positive meniscus |
| E10 | R18–R19 | 1.69680 | 55.5 | Positive final component |

## Glass Identification and Selection

Printed indices and Abbe numbers are literal source data. No supplier, melt or chemical glass identity is established. All qualified calculations are monochromatic helium d at 587.5618 nm. Native spectral interpolation from Abbe data is not validated broadband evidence.

## Focus Mechanism

Static infinity only. Source prose describes increasing D6 (R6–R7) while advancing the whole assembly for nearby objects, but gives no numeric finite row for Example 2. The retail 0.3 m MFD is documentary only. The required native close-focus field uses a distant 1e15 m sentinel; it is not a qualified finite setting or a factory cam. No derived focus curve is supplied. Integration should keep the infinity-only scope explicit.

## Aspherical Surfaces

None. Every source interface is spherical or the explicitly flat R11. There are no substituted conics or omitted polynomial terms.

## Validation and Limits

Native JSON import, validator/build, TypeScript typing and JSON/TS export/reimport pass; zero rendering trim. The first six-lens checkpoint is untouched. Main commit is `980bd6f7fd5d27ba5f1d9a68e8c344a4123d67f2`; all 1,215 current lens modules were checked for aliases and a uniformly scaled 19-radius equivalent, with none found. Earlier private/live catalog coverage is separately attributed to the parent, not a claim of this worker reading inaccessible archives.

The default 90% gap-sag heuristic fails at estimated R8/R9 rims. The smallest 0.1%-step **model-only 91.7%** allowance is used: actual maximum intrusion is 91.605776%, leaving **0.254781486 mm** true co-radial clearance. Dense spherical audits retain positive air and glass separation, with minimum 0.1484 mm. No global/default change, source alteration or hidden trim is used.

At each sampled field, 812 uniform pupil-cell rays plus 360 rim rays and the center were tested. All 1,173 reach the fixed image plane without clipping or numerical failures for **f/2 at −3°, 0°, +3°**, **f/4 at sampled fields through ±20°**, and **f/8 at sampled fields through ±30°**. This is sampled, estimated-rim scope, not proof of every intervening field or factory illumination. At the outer clear sampled field, geometric D80 is approximately 35.0, 29.6 and 17.6 micrometers respectively. Native/independent intersection differences stay below 9.5e−14 mm. Independent geometric MTF at 64/96-cell pupils agrees with native results to 0.003964; grid differences stay below 0.003852 at 5/10/20/40 lp/mm. Native scalar sheared-pupil diffraction estimates are separately labeled and numerically converged; this is not a measured lens or an independently verified full-wave calculation.

The **published ±37.5° edge is diagnostic only**. With current estimated rims, f/8 has 351 valid / 822 cap-blocked samples per side. At f/2 it has 50 valid, 573 cap-blocked and 550 unresolved samples per side; those unresolved aiming/intersection outcomes are not relabeled as factory vignetting. No full-field f/2 PASS or useful factory-edge MTF is claimed. Limited-pupil edge D80 is not a full-pupil quality metric.

Existing focused builder/construction suites pass 241 tests. Two clean reproducibility runs must match recorded output bytes before sealing. The default off-axis ray fraction is0.08 of the37.5-degree source semi-field (3degrees), within the evidenced f/2 scope; this is not an asserted change to factory coverage. Desktop/mobile browser QA is deferred to integration, not passed. Manufacturing tolerances, coatings, flare, focus travel, chromatic performance, exact factory aperture behavior and full-frame production equivalence remain unverified.
