# Merté / Zeiss Figure 1 100 mm f/4 Patent Reference

## Patent Reference and Design Identification

[US2171274, Telephotographic objective](https://patentimages.storage.googleapis.com/pdfs/US2171274.pdf), Figure 1. Willy Merté; Carl Zeiss, Jena. German priority 22 June 1936; US application 12 June 1937; grant 29 August 1939. The original Figure 1 sheet and numerical table were visually reviewed. The model is patent-only; no exact retail or production identity is established.

## Optical Architecture

Five spherical elements in three air-spaced groups: a plano-convex front singlet, a negative cemented triplet, and a positive rear singlet. The rear singlet and triplet form the patent's compound rear system. Its geometry distinguishes this model from the separately queued US2126126 and from this patent's unbuilt Figure 2.

The printed normalization is 100 mm, f/4. Literal radii, glass thicknesses and air gaps are retained without scaling or repairs. Independent EFL is **100.02767451625677 mm**, +0.0276745% versus source normalization; calculated paraxial BFD is **51.17479100902517 mm**. Total first-vertex-to-image track is **98.15479100902517 mm**, shorter than its EFL, consistent with a telephoto layout. The BFD is calculated, not a separately printed exact source dimension.

## Literal Prescription

| Interface | Radius mm | Following distance mm | Following glass |
|---|---:|---:|---|
| 1 | 26.057 | 4.55 | 1 |
| 2 | flat | 8.805 | Air |
| STO | flat | 8.805 | Air |
| 3 | -25.924 | 1.8 | 2 |
| 4 | 9.077 | 7.37 | 3 |
| 5 | -24.582 | 5.21 | 4 |
| 6 | 18.515 | 7.98 | Air |
| 7 | 39.119 | 2.46 | 5 |
| 8 | -53.602 | 51.174791009 | Air |

## Glass Identification

Figure 1 explicitly labels refractive indices **n_d**; the model preserves `indexReference: "d"`. The following index/Abbe pairs are literal source values, not historical melt or catalog-glass identifications. Dispersion derived from these pairs is approximate; no APO or glass-supplier claim is supported.

| Element | Shape | n_d | V |
|---|---|---:|---:|
| L1 | Plano-convex | 1.55226 | 63.3 |
| L2 | Biconcave | 1.56735 | 42.8 |
| L3 | Biconvex | 1.5891 | 61.3 |
| L4 | Biconcave | 1.59667 | 39.1 |
| L5 | Biconvex | 1.67165 | 32.3 |

## Stop, Apertures and Focus

The patent drawing places the iris in the first airspace but supplies no numerical coordinate. This reconstruction explicitly uses its midpoint, **8.805 mm after the front lens and 8.805 mm before the triplet**. This is an estimate, not a measured patent dimension or a claim about the Arizona educational reconstruction. Numbered-surface clear semi-diameters are estimated as **13.5,13.5,8,8,8,8,10,10 mm**. No geometry allowance override is used. No source curvature, glass index, thickness, or total airspace was changed.

Infinity only: the final image plane uses calculated paraxial BFD and the supported `closeFocusM: 1e15` convention. No near-focus law or mechanical travel is invented.

## Validation and Limits

Fresh native canonical validation has zero errors; render trims are zero. The physical iris sweep across 256 intervals retains minimum before/after clearances **8.805 / 7.539746 mm**. Independent 1001-point interface checks retain positive separations, minimum **0.219195 mm**. All181 axial samples across ±90% of the paraxial pupil pass. Seven shared exact-Snell/native image-height checks agree within **1.1547e-14 mm**. Scoped strict TypeScript, eslint and prettier passed.

Exploratory ±99% axial samples clip at the iris in both native and independent tracing: the paraxial pupil is not an exact fully admitted pupil boundary. At3.75° and7.5°, respectively2/9 and4/9 diagnostic samples clip. The source calls the image field approximately15° without the present work establishing whether that is a full or half angle; the selected diagnostic samples do not certify coverage. Source assertions of sharpness/distortion correction, and MTF support probes, are not measured or validated image-quality results.

**Figure 2 is not included:** its source indices are explicitly solar C-line, unsupported by the current native d/D/e convention. No relabeling or substituted index conversion was made.

Hidden (`visible:false`), qualified handoff. Full-app regression, compiled browser/viewer QA and final integration compatibility remain outstanding. See companion audit for fresh versus inherited evidence.
