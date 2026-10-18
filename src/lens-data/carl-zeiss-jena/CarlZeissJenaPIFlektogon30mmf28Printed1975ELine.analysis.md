# Carl Zeiss Jena PI-Flektogon 30mm f/2.8 (1975 e-line reconstruction)

## Source Reference and Design Identification

**Source:** Carl Zeiss Jena, *Optik-Daten*, PI-Flektogon 2.8/30.
**Manufacturer:** Carl Zeiss Jena, as identified on the original sheet.
**Source dated:** 23 September 1975.
**Calculation dated:** 4 August 1975, “Rechnung vom 4.8.1975”.
**Prescription analyzed:** Printed geometry, Flächen-Nr. 1–12, with source n_e values.
**Patent association:** DD301976A7, Table 3 / Fig. 2 association remains unverified; it does not supply this model's numerical prescription.
**Production identity:** Exact production reconstruction remains unverified.
**Model scope:** Monochromatic e-line reconstruction with explicitly approximated cement interfaces.

This model follows the printed manufacturer sheet reproduced in the archival source listed below. The printed geometry is distinguished from the later handwritten overlay. No handwritten radius, thickness, or glass-coordinate correction is substituted into the printed model. The sheet's date and calculation date identify this document; they do not establish a production release date or a patent date.

The source explicitly says “gerechnet für C′” but supplies n_e and ν_e. The implemented model uses the seven printed n_e values directly. It is therefore a qualified e-line reconstruction, not a reproduction of the original C′ calculation or a broadband optical model. Neither d-line indices nor a spectral dispersion curve are invented.

Two printed notes describe 0.01 mm cement contributions in parts 003.00 and 005.00; their optical constants and exact interfaces are unavailable. Direct glass-to-glass boundaries replace these layers while preserving the printed composite thicknesses of 0.80 and 5.40 mm. These notes were subsequently crossed out on the sheet. The approximation belongs specifically to the chosen printed state.

The front stop is interpreted from “Lage der EP=0” and entrance-pupil diameter 10.60 mm. The interpretation, cement approximation, wavelength restriction, and unresolved exit-pupil diameter residual of approximately −1.36% are integral to the model. They are not evidence of exact patent-table or production equivalence.

## Optical Architecture

The prescription has seven glass elements in five air-separated groups, with two cemented pairs. Its group-power sequence is negative, positive, negative, positive, positive. The physical aperture stop precedes the first refracting surface at the same axial vertex plane. The later elements have substantially larger source clear apertures than the front elements, consistent with the strongly asymmetric front-stop layout visible in the source section.

At the implemented e-line state the effective focal length is 30.015109 mm and the back focal distance is 26.831281 mm, measured from the twelfth surface vertex. The first-to-last vertex distance is 24.32 mm, and the paraxial image plane lies at z=51.151281 mm relative to the first vertex. The designation 30 mm f/2.8 remains source nomenclature; the implemented entrance pupil yields f/2.831614.

The design is described here as an asymmetric front-stop wide-angle prescription. Its calculated BFD/EFL ratio is 0.893926 and first-vertex-to-image track/EFL ratio is 1.704184. These values do not satisfy the numerical criteria for either a retrofocus arrangement with BFD greater than EFL or a telephoto arrangement with total track smaller than EFL. No such classification is inferred solely from the Flektogon name.

All twelve refracting surfaces are spherical. The model has no aspherical coefficients, rear filter plates, scale conversion, or variable internal spacings. The source image-circle diameter is 29.5 mm and its full field is 54°. Neither quantity establishes a camera mount, sensor format, or unvignetted edge performance.

## Element-by-Element Analysis

### L1 — Negative Meniscus

n_e = 1.60994. Glass: Unmatched (Carl Zeiss Jena historical SK 609/564 (SK2); source n_e only). Standalone f_e = −111.649859 mm. The source ν_e is 56.42; no Abbe field is used in the model.

Part 001.00 has two positive signed radii, with the rear surface more strongly curved. Its in-air thick-element power is negative. It immediately follows the interpreted front stop, so its bending operates on rays whose aperture coordinate is set at the first vertex plane. This geometrical placement is established by the model; an isolated assignment of coma or spherical-aberration correction to this element is not established by the sheet.

### L2 — Biconvex Positive, First Member of D1

n_e = 1.73516. Glass: Unmatched (Carl Zeiss Jena historical LaF 735/461; source n_e only). Standalone f_e = +10.333574 mm. The source ν_e is 46.06; no Abbe field is used in the model.

Part 002.00 is the strongest positive standalone element. Its rear surface is the shared boundary with L3, so the refracting power of that interface depends on the two adjoining source indices. The isolated in-air focal length is not its in-situ contribution to the entire system.

### L3 — Biconcave Negative, Second Member of D1

n_e = 1.53187. Glass: Unmatched (Carl Zeiss Jena historical KzF 531/515 (KzF2); source n_e only). Standalone f_e = −13.419110 mm. The apparent printed ν_e reading is 51.54, partly overwritten and retained as tentative documentary evidence only.

Part 003.00 uses the printed composite thickness of 0.80 mm. The source note decomposes this into 0.79 mm glass and 0.01 mm cement, but the model assigns the composite thickness to the glass after collapsing the unknown cement layer. L2 and L3 together have calculated in-air group EFL +31.462288 mm, much weaker than L2 alone. This verifies net group power; it does not establish chromatic correction without the missing historical spectral data.

### L4 — Biconcave Negative, First Member of D2

n_e = 1.73430. Glass: Unmatched (Carl Zeiss Jena historical SF 734/281 (SF10); source n_e only). Standalone f_e = −10.431370 mm. The source ν_e is 28.12; no Abbe field is used in the model.

Part 004.00 has negative front and positive rear radii and supplies substantial negative standalone power. Its weakly curved rear boundary is shared with L5. The source clear diameter grows markedly across this part, and those distinct apertures are retained rather than replaced by a uniform diameter.

### L5 — Biconvex Positive, Second Member of D2

n_e = 1.62287. Glass: Unmatched (Carl Zeiss Jena historical SK 622/600 (SK16); source n_e only). Standalone f_e = +16.904292 mm. The apparent printed ν_e reading is 60.07, partly overwritten and retained as tentative documentary evidence only.

Part 005.00 retains the printed composite thickness of 5.40 mm. Its printed note specifies 5.39 mm glass plus 0.01 mm cement; the same direct-contact approximation is used as for D1. The combined L4–L5 group has calculated EFL −56.052397 mm, despite the positive standalone power of L5. This is an explicit distinction between individual-element and cemented-group power.

### L6 — Positive Meniscus

n_e = 1.66640. Glass: Unmatched (Carl Zeiss Jena historical SK 666/561 (SK24); source n_e only). Standalone f_e = +50.149902 mm. The source ν_e is 56.14; no Abbe field is used in the model.

Part 006.00 has two negative signed radii, with the rear curvature stronger in magnitude. Its net in-air power is positive. It follows D2 across the printed 0.10 mm vertex gap. Because both bordering surfaces curve in the same general direction, the small vertex gap alone does not imply surface overlap; the shared radial material band was evaluated explicitly.

### L7 — Biconvex Positive

n_e = 1.62541. Glass: Unmatched (Carl Zeiss Jena historical SK 625/566 (SK10); source n_e only). Standalone f_e = +81.506049 mm. The apparent printed ν_e reading is 56.60, partly overwritten and retained as tentative documentary evidence only.

Part 007.00 is the final positive element and has equal-magnitude opposite-signed radii. Its larger clear aperture supports the rear bundle geometry. The sheet does not establish that it is independently a field flattener, and the model does not infer that role simply from its rear position or positive power.

## Glass Identification

The manufacturer sheet, rather than a modern catalog substitution, controls each refractive index. Historical glass labels and slash codes are preserved literally. Their slash codes are not converted into modern six-digit d-line catalog identifiers.

| Element | Historical source label | n_e | Documentary ν_e reading | Implemented dispersion |
|---|---|---:|---|---|
| L1 | SK 609/564 (SK2) | 1.60994 | 56.42 | Constant source index |
| L2 | LaF 735/461 | 1.73516 | 46.06 | Constant source index |
| L3 | KzF 531/515 (KzF2) | 1.53187 | 51.54, tentative under overwrite | Constant source index |
| L4 | SF 734/281 (SF10) | 1.73430 | 28.12 | Constant source index |
| L5 | SK 622/600 (SK16) | 1.62287 | 60.07, tentative under overwrite | Constant source index |
| L6 | SK 666/561 (SK24) | 1.66640 | 56.14 | Constant source index |
| L7 | SK 625/566 (SK10) | 1.62541 | 56.60, tentative under overwrite | Constant source index |

Primary catalog files from OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA were examined for coordinate context. Supported catalog coefficients were checked at their published d-line coordinates before e/C′/F′ evaluation; HIKARI supplied explicit e-line coordinates. No modern coordinate match establishes a 1975 Jena glass identity or authorizes a substitute melt.

The data therefore uses Unmatched historical labels and omits vd, nC, nF, ng, and dPgF. Actual runtime dispersion inspection returns constant source indices for the glass surfaces. Identical output across its color channels follows from this restricted model and must not be interpreted as measured achromatism, apochromatism, or zero chromatic aberration.

## Focus Mechanism

Only the source infinity-object state is implemented. The sheet provides no usable finite-conjugate prescription, mechanical focus law, or minimum focus distance. No internal focus motion is inferred.

The focus control is disabled because the source provides only an infinity prescription. No finite-distance performance claim is supported.

## Verification and Limitations

The e-line paraxial calculations use both sequential reduced-angle tracing and separately implemented ABCD multiplication. Exact sphere intersections and vector Snell refraction reproduce both paraxial basis columns in the small-ray limit. All seven isolated element focal lengths and the two cemented-group focal lengths agree with their printed f_e and f_eGr values within the sheet's 0.01 mm output rounding.

The printed system quantities are retained as separate comparisons. The model EFL differs from the printed 30.02 mm by −0.004891 mm. Calculated BFD differs from S′F′=26.82 mm by +0.011281 mm, and the front focal position differs from −11.78 mm by +0.016890 mm. The latter differences exceed the ±0.005 mm half-last-digit interval of the printed comparison values; this is an output-rounding test, distinct from propagation of the rounded prescription inputs. They are not silently corrected or presented as reproduced source results.

The paraxial exit pupil lies −49.756186 mm from the last vertex, compared with the printed −49.68 mm. Its calculated diameter is 27.047283 mm compared with 27.42 mm, a −1.36% discrepancy that remains unresolved. The C′/e-line difference, cement approximation, and front-stop interpretation define the restricted model; they have not been shown to explain this residual quantitatively. The labels S′m=26.72 mm and f_m=29.98 mm remain literal source annotations with undefined subscript meaning.

The maximum discrepancy against the twelve printed axial-bundle diameters is 0.028971 mm. At the source 27° half-field, the calculated chief ray reaches image height 14.764109 mm at the paraxial image plane, giving −3.461302% distortion relative to EFL×tan(field). A 5,000-point equal-area pupil sample yields 75.06% geometric survival at that field. These are geometrical calculations, not transmission, relative illumination, measured spot quality, or measured performance.

Surface powers contribute a Petzval sum of +0.005068249374 mm⁻¹. This is the surface-by-surface sum using each interface's actual adjoining indices; it is not itself a full calculation of sagittal/tangential image-surface curvature.

Actual runtime validation and state-native render diagnostics pass with zero hidden material trim. The declared half-field is the sheet's 27°, with a default off-axis display field of 16.2°. These field bounds do not certify full-pupil illumination. At the actual 5.30 mm stop radius, all six default axial rays and all five default off-axis rays traverse the physical prescription without clipping. Their prescribed pupil fractions are ±0.83, ±0.50, ±0.17 on axis and −0.75, −0.375, 0, 0.375, 0.75 off axis.

The finite default fan does not establish full-pupil containment. A separate 201-point meridional scan at the same 17.084707° field finds first physical clipping at cemented interface 4 for pupil fractions −0.81, −0.80, −0.79, −0.78, and −0.77. These samples are beyond the default off-axis fan's ±0.75 extent. All 151 meridional diagnostic samples within that extent are clear. The outer failures are preserved explicitly; their continued ghost paths are not transmitted rays. Broader full-pupil sampling at 27° also encounters interface-4 and interface-7 clipping. No clear aperture, stop size, or field angle was reduced to conceal this behavior.

The chosen prescription consequently remains a qualified monochromatic research model: its printed geometry is traceable, but the source's C′ performance, unknown cement constants, full-pupil clipping, handwritten revisions, patent-table equivalence, and production identity are not resolved by the reconstruction.

## Sources

1. Carl Zeiss Jena, *Optik-Daten für Sach-Nr. 673347, PI-Flektogon 2.8/30*, sheet dated 23 September 1975, calculation dated 4 August 1975. Primary numerical source: upper Radien/Dicke/Symbild and freier Ø rows; middle Glasart/n_e/ν_e/f_e rows; lower system/Bemerkung blocks and cement notes. [Original archival reproduction](https://impro.usercontent.one/appid/oneComWsb/domain/zeissikonveb.de/media/zeissikonveb.de/onewebmedia/Marco/Carl%20Zeiss%20Jena/PI-Flektogon%202,8-30mm.jpg?etag=%226442c6-67002d37%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=3024%2B2043&quality=85). The unchanged supplied JPG is retained locally.
2. [Zeissikonveb special-objective archive](https://zeissikonveb.de/start/objektive/sonstige_objektive/zeiss-sonderobjektive.html), hosting context for the manufacturer reproduction. Context alone does not verify DD301976A7 Table 3 / Fig. 2 equivalence.
3. Primary modern catalogs used only for coordinate context: [OHARA July 2026 catalog](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), [HOYA July 2026 catalog including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), [SCHOTT June 2025-B catalog archive](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true), [HIKARI source workbook](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx), [SUMITA Zemax catalog](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf), and [CDGM September 2026 catalog](https://www.cdgmgd.com/downloadFile.htm?uid=3f4d14c82d2c11eeb5ac000c29c8de8c).
