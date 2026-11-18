# Kapella / Horace William Lee Example I 100 mm f/2

## Patent Reference and Design Identification

[US2117252, Lens for photography and the like](https://patentimages.storage.googleapis.com/90/e3/13/aefd805db44bfc/US2117252.pdf), Example I / Figure 1. Inventor **Horace William Lee**, assigned Kapella Limited. British priority18 December1935; US application17 December1936; grant10 May1938. Primary table and drawing visually inspected. No verified production-lens identity is claimed. This is not Arthur Warmisham's US1797202 or US2130760, nor Lee's earlier US2012822.

## Optical Architecture

Six spherical elements in four air-spaced groups: positive front meniscus singlet, a cemented positive/negative meniscus doublet, a cemented biconcave/biconvex doublet, and rear biconvex singlet. Opposing inner concave surfaces enclose the central gap. The patent seeks improved residual spherical aberration over its cited US1955591; that comparison is a source claim, not a measured result of this reconstruction.

## Prescription and Scale

Source EFL1.0 at f/2 is uniformly scaled ×100 to a nominal100mm model. The literal rounded prescription yields independent **EFL100.59018189784487mm**, **+0.5901819%** from nominal. This residual is retained, not corrected by fitting. Calculated paraxial infinity **BFD65.77349297099042mm** supplies the final image distance; the patent does not tabulate that exact BFD.

| Interface | Radius mm | Following distance mm | Following element |
|---|---:|---:|---|
| 1 | 64.4 | 8 | 1 |
| 2 | 265 | 0.5 | Air |
| 3 | 40.4 | 14.6 | 2 |
| 4 | 226.7 | 4 | 3 |
| 5 | 24.7 | 10 | Air |
| STO | flat | 10 | Air |
| 6 | -28.9 | 4 | 4 |
| 7 | 46.4 | 13 | 5 |
| 8 | -37.4 | 0.5 | Air |
| 9 | 178.9 | 8.1 | 6 |
| 10 | -104 | 65.773492971 | Air |

## Glass Reference and Identification

Primary prose and table explicitly identify sodium **D**, preserved as `indexReference: "D"`, not helium d. Source Chance Brothers catalogue/type coordinates are preserved in the facsimile, not treated as verified modern Sellmeier identities or historic production melts. No catalog substitution was made. Index/Abbe-based dispersion is approximate.

| Element | Shape | nD | V |
|---|---|---:|---:|
| L1 | Positive Meniscus | 1.61 | 53.3 |
| L2 | Positive Meniscus | 1.6234 | 56.2 |
| L3 | Negative Meniscus | 1.6083 | 39.6 |
| L4 | Biconcave | 1.6054 | 38 |
| L5 | Biconvex | 1.6209 | 57.2 |
| L6 | Biconvex | 1.6234 | 56.2 |

## Explicit Reconstruction Estimates

Exact iris axial coordinate and clear apertures are not numerically specified. A midpoint stop is estimated in the20mm central gap, preserving10+10mm. Surface clear semi-diameters are **29,29,27,27,20,20,22,22,25,25mm**. An initial24mm estimate at surfaces7/8 gave negative edge thickness; reducing those inferred rims to22mm resolves it without changing source optics. No gap-sag override. The two source0.005 outer gaps remain0.5mm; no source radius/index/thickness is silently repaired.

Infinity-only using calculated BFD and `closeFocusM: 1e15`; no invented close-focus mechanism.

## Verification Summary

Native canonical validation zero errors; render trims zero. Iris stroke sampled256 intervals: minimum clearance3.801071mm before /4.920362mm after. Independent1001-point sampling of neighboring interfaces gives positive glass/air separation, minimum0.297906mm. All181 axial samples across±90% pupil pass; additional±99% rays also pass. Nine shared independent exact-Snell/native image heights agree within4.2633e-14mm. Scoped strict TypeScript, eslint and prettier pass.

At diagnostic10° and20° field angles,2/9 and6/9 samples clip. These field angles are exploratory, not patent coverage specifications. No full-field image-quality, historical factory performance, APO or MTF guarantee is made; MTF support probes are not MTF performance validation. Full-app regression, compiled viewer/browser QA and final current-main compatibility remain integration work. Hidden `visible:false`.
