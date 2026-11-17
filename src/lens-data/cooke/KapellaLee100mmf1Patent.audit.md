# Kapella / Lee US2012822A Example 1 audit

Status: qualified hidden patent-only reference. Not factory match. No publication/deployment.

## Literal source

Original PDF page3/printedp2, Example1; Figure1 on PDFp1. Signed normalized R: +1.2147,+3.107,+0.7327,+1.1855,+0.5042,−1.0516,+0.2903,+0.5939,−1.9062. Thicknesses D1–D5: .0881,.0838,.337,.0339,.1372. Separations S1–S3: .005,.005,.2294. nD/V: 1.6135/59.4,1.6135/59.4,1.6062/59.8,1.6945/30.7,1.6135/59.4. All lengths scaled100 exactly. R6 and R9 negative confirmed from scan, not OCR. Five elements/four groups, native-D optical coordinates.

## Authored choices

- Hidden patent-only identity; no marketed lens, mount or format claim.
- Stop18mm after R7 withinS3, inferred solely for a plausible physically clear iris. Source does not locate stop.
- Stop radius derived by native engine from nominalf/1; exact paraxial-rim rays clipped due pupil aberration. Central±90% tested axial rays transmit.
- Clear semi-diameters estimated independently from exact on-axis ray heights plus margin:51,50.5,49,48.5,43.5,41.5,26,25,23.5mm. No source SDs asserted, no geometry relaxations.
- BFD32.17678887228511mm computed paraxially, no performance refocus. EFL100.14870855218444mm;0.14870855% above nominal scale.
- Infinity-only closeFocusM1e15 sentinel; no finite conjugate model.
- Historical nD/V retained, no modern glass substitution. Native-D Abbe spectral estimate, not measured secondary color.

## Fresh validation

Native ingest/validateCanonicalLens:0errors. buildLens EFL matches independent paraxial result. Five elements' front/rear render trim amounts all0. Iris samples257 across opening: minimum preceding-face clearance8.90982mm; following-face clearance4.94mm. Axial fractions0,±.5,±.75,±.9 all pass;±1 clipped. Additional5°,10°,19.20685° diagnostic fans retained, with vignetting. Native MTF support(reference,cdf) available; image-plane consistency offset1.42e−14mm. MTF curves/convergence not run. Strict focused TypeScript check passed. No full-app test or browser pass claimed.

## Reproducibility

Pinned engine3fd318c3e82cdbc3e5d3a1ed7bd5abbf4e99bfc2. Run node --import ./scripts/ts-js-specifier-hook-register.mjs validate-kapella.mjs from isolated engine checkout with the paired data file. Output validation.json is one directory above checkout. Source PDF, rendered table and source OCR retained separately. No prior validation is inherited.
