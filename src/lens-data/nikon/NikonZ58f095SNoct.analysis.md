# NIKKOR Z 58mm f/0.95 S Noct — Patent Example 1

## Patent Reference and Design Identification

**Patent:** WO 2019/229849 A1, Optical System, Optical Device, and Method for Manufacturing Optical System

**Inventors:** Keisuke Tsubonoya, Hiroki Harada and Toshinori Take

**Applicant:** Nikon Corporation

**Filed:** May 29, 2018, PCT/JP2018/020552

**Published:** December 5, 2019

**Embodiment analyzed:** Example 1, Table 1 and Figure 1

The catalog associates this seventeen-element, ten-component example with the Noct. The numerical design is 59.62mm, f/0.98, full field39.96° and image semi-height21.70mm. These source values are surfaced separately from the marketing58mm f/0.95 name. Matching architecture does not establish an exact measured production prescription or production materials. The original cover identifies Hiroki Harada; the former analysis's Sōki transliteration was incorrect.

## Optical Architecture

Front assembly GF contains thirteen elements: negative G1 comprises the first two cemented doublets, while positive G2 contains three singlets and three cemented doublets around the stop. Fixed rear assembly GR contains two cemented doublets. Seventeen elements form ten air-separated components; the three annotated optical groups are not the component count.

The patent gives GF focal length75.60mm, G1−289.87mm, G2+69.07mm and GR+294.37mm. The entire GF, including its stop, translates during focus. GR remains fixed. The separate source filter group FL is omitted under the lens specification; it is not an eighteenth lens element.

## Element-by-Element Analysis

Each listed focal length uses the thick-lens expression with its two vertex radii and center thickness, isolated in air. These are not powers of embedded cemented members or complete assemblies.

| Element | nd | νd | Glass interpretation | Isolated FL (mm) |
|---|---|---|---|---|
| L11 | 1.902650 | 35.77 | 903358 class; J-LASFH9 catalog spectral proxy (production supplier unspecified) (inferred coordinate counterpart) | 106.97 |
| L12 | 1.552981 | 55.07 | 553551 class; J-KZFH4 catalog spectral proxy (patent dPgF retained) (inferred coordinate counterpart) | -85.70 |
| L13 | 1.612660 | 44.46 | KZFS-type (near N-KZFS4 / S-NBM51) (inferred coordinate counterpart) | -96.72 |
| L14 | 1.593190 | 67.90 | Coordinate counterpart (near S-FPM2 / FCD10; used ×3) (inferred coordinate counterpart) | 126.47 |
| L21 | 1.848500 | 43.79 | J-LASFH22 (Hikari, patent nd/vd match) (inferred coordinate counterpart) | 83.24 |
| L22 | 1.593190 | 67.90 | 593679 class; J-PSKH1 catalog spectral proxy (production supplier unspecified) (inferred coordinate counterpart) | 115.19 |
| L23 | 1.593190 | 67.90 | 593679 class; J-PSKH1 catalog spectral proxy (production supplier unspecified) (inferred coordinate counterpart) | 123.54 |
| L24 | 1.738000 | 32.33 | High-dispersion flint (near S-NBH53V; used ×2) (inferred coordinate counterpart) | -42.61 |
| L25 | 1.612660 | 44.46 | 613445 class; J-KZFH1 catalog spectral proxy (patent dPgF retained) (inferred coordinate counterpart) | -46.66 |
| L26 | 1.497820 | 82.57 | Coordinate counterpart (near S-FPL51 / FCD1) (inferred coordinate counterpart) | 72.81 |
| L27 | 1.883000 | 40.69 | S-LAH58 (OHARA); used ×3 (inferred coordinate counterpart) | 50.56 |
| L28 | 1.953750 | 32.33 | S-LAH98 (OHARA) / TAFD45 (HOYA) (inferred coordinate counterpart) | 51.79 |
| L29 | 1.738000 | 32.33 | 738323 class; J-KZFH9 catalog spectral proxy (patent dPgF retained) (inferred coordinate counterpart) | -40.94 |
| L31 | 1.883000 | 40.69 | S-LAH58 (OHARA; same as L27) (inferred coordinate counterpart) | 50.71 |
| L32 | 1.698950 | 30.13 | E-FD15 (HOYA, patent nd/vd match) (inferred coordinate counterpart) | -47.48 |
| L33 | 1.883000 | 40.69 | S-LAH58 (OHARA; same as L27) (inferred coordinate counterpart) | 46.23 |
| L34 | 1.765538 | 46.76 | Q-LASFPH2S (Hikari, patent nd/vd match) (inferred coordinate counterpart) | -50.18 |

The front doublets share positive and negative power. G2 adds positive singlets and negative members around the stop. Its last doublet bounds the moving D22 gap. The two rear doublets provide weak net positive power and a final aspheric exit. Qualitative roles do not establish quantitative aberration contributions or fabrication methods.

## Glass Identification and Selection

Source nd/νd values are authoritative. Compatible named catalog counterparts are retained but qualified as inferences; their availability does not identify the historical supplier, composition or process. Claims of CNC grinding, precision molding, hybrid manufacture and specific chemistry are removed where unsupported by this prescription.

Five source rows include PgF. Runtime deviations are calculated against the engine's normal line0.6438−0.001682νd:

| Elements | Source PgF | Runtime dPgF | Interpretation |
|---|---|---|---|
| L12 | 0.54467 | −0.00650226 | Source-backed negative deviation |
| L13, L25 | 0.56396 | −0.00505828 | Source-backed negative deviation |
| L24, L29 | 0.58997 | +0.00054906 | Near normal; APD badge disabled |

These replace rounded−0.0065/−0.0051 and zero surrogates. The patent condition using PgF+0.0021νd is not itself the runtime normal line. Other rows do not acquire APD status from a catalog name or high Abbe number. The source's νd82.57 identifies L26 as the lowest-dispersion entry without establishing a particular chemistry.

## Focus Mechanism

D22 increases from2.68 to21.29mm. With the image plane fixed, all of GF and its stop move18.61mm toward the object; both rear doublets remain fixed. Intermediate motion is an interpolation of these two source stations. The patent's near magnification is−0.194.

An independent reduced-angle matrix calculation gives infinity EFL59.620439mm. At the source near gap it gives EFL62.748872mm, magnification−0.1942594 and object-to-first-vertex distance320.552645mm. The filter-omitted near track178.814852mm produces the modeled object-to-image label **0.499367498m**, displayed as about50cm. Adding the removed plate's physical-minus-equivalent path would give0.499912645m. The data do not assert a measured production focus throw or drive mechanism.

## Aspherical Surfaces

Paragraph81 on original PDF p.20 explicitly uses1−(1+κ)(h/r)², so the three sourceκ=0 entries correctly map to standardK=0. All fourteen nonzero coefficients are retained: four each on S1 and S20, and six through fourteenth order on S28. Their three aspheric surfaces belong to three physical elements. No conic-convention correction is needed for this example.

## Semi-Diameter Estimation Notes

Figure1 on original PDF p.46 was rendered at600dpi and rotated. The approximately143.65mm first-to-last-lens vertex span calibrates optical rims, excluding FL, leaders, brackets and mechanical shoulders. This differs by0.01mm from the rounded summary TL−BF, so no false precision is assigned to the drawing measurements.

The adopted surface radii including the stop are33.5,33,28.7,28.7,33,33,35.3,35.3,32.3,32.3,29.5,29.5,25,24.8,24.8,24.8,24.8,25.5,25.5,23.3,22.8,19.5,19.5,19.5,19.5,19.2,19.2,19.2mm. These replace ray-envelope estimates, particularly undersized rear-doublet outlines.

A figure-oriented29.2mm trial on facing S3/S4 exceeded the validator's air-gap intrusion limit:16.84mm versus16.308mm allowance within18.12mm. Both retain constrained28.7mm optical radii; the larger drawn mechanical shoulders are not refracting apertures. This source/geometry limitation remains a follow-up. Adopted rims pass surface/image-circle checks and cause no hidden renderer trimming at infinity, midpoint or near.

## Filter Omission and Model Limitations

Legacy source rows29–30 modeled a1.6mm plate at nd1.5168 followed by1mm air, with14.5mm air before it. They have been removed. Final S28 spacing is **14.5+1.6/1.5168+1=16.554852321mm**, matching the patent's rounded equivalent BF16.55mm. Merely deleting the plate without replacing its propagation would be incorrect.

Equivalent air preserves d-line paraxial propagation, not the omitted plate's higher-order or chromatic effects. All seventeen optical elements remain. Figure radii, catalog counterparts and interpolation remain explicitly inferred; source prescriptions and published partial-dispersion values remain distinct from production claims.

## Sources

- Original local WO2019229849A1.pdf: bibliographic cover p.1, equation/definitions p.20, Table1 pp.21–23 and Figure1 p.46.
- [WO2019229849A1 publication](https://patents.google.com/patent/WO2019229849A1/en).
