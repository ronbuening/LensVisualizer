## Patent Reference and Design Identification

**Patent:** [RU 2611106 C1](https://patents.google.com/patent/RU2611106C1/en)
**Filed:** October 27, 2015
**Published:** February 21, 2017
**Inventor:** Vladimir Alexandrovich Bogdankov
**Assignee:** Public Joint-Stock Company Krasnogorsk Plant named after S. A. Zverev
**Title:** High-aperture objective
**Example details:** Table 1 prescription, Table 2 spectral weights and Figures 1–2; no scaling.

This is a review draft, not a finished catalog addition. The source presents one unnumbered numerical example. Original-host table images corroborate the transcription; the downloadable Google PDF contains only the claims page, not the complete description.

The [manufacturer's modern MC Zenitar 1.4/85 page](https://www.zenit.photo/catalog/lens-zenitar-1-4-85/) supports a strong production-family correlation:
1. Seven elements in five groups, matching the patent architecture.
2. Marketed 85 mm and f/1.4 against source 84.23 mm and f/1.4.
3. Manufacturer full field 28° compared with patent prose 28.5°.
4. Manufacturer Nikon F/Canon EF offerings and 0.85 m minimum focus distance establish modern product context, not the historical Zenitar-K design.

These convergent facts do not establish that the manufactured lens uses this exact prescription or melt. The source Figure 2 plots only to 13.5° half-field; this is not silently replaced by the prose's 14.25° half-field.

## Optical Architecture

Seven spherical elements form five groups, with cemented pairs L3/L4 and L5/L6. Four elements precede the diaphragm, three follow it. The arrangement is Gaussian-derived; precise aberration allocation is a design interpretation rather than a statement of the patent's optimization history. The stop lies 5.5 mm before L5, splitting the published 14.6 mm airspace into 9.1 and 5.5 mm. No filter, sensor plate or mechanical barrel is invented. Aperture control endpoints f/1.4–22 follow the manufacturer booklet page 2; the patent establishes f/1.4 but not that full control range. Intermediate conventional stops are UI controls, not verified detent positions.

## Element-by-Element Analysis

- **L1:** TK14-labeled positive meniscus, source nD 1.613094, VD 60.6066; front collector.
- **L2:** Second TK14 positive meniscus with the same literal material values.
- **L3:** TK21-labeled component, nD 1.656908, VD 51.1549; cemented to L4.
- **L4:** TF5-labeled component, nD 1.755234, VD 27.5228; the steep rear surface R7 remains literal 20.51 mm. Its inferred optical clear cap is 18.4 mm, distinct from the schematic mechanical outline.
- **L5:** LF5-labeled negative component, nD 1.575020, VD 41.2951; follows the stop and is cemented to L6.
- **L6:** STK3-labeled positive component, nD 1.659499, VD 57.3520.
- **L7:** TF5-labeled rear component with a plane rear surface. The printed last-surface-to-image distance remains 38.2 mm.

All twelve radii and axial intervals retain source precision. Clear apertures are not published: the current values are explicit drawing-based estimates, minimally enlarged where bounded axial f/1.4 traces required clearance. They are neither exact factory rims nor proven illumination dimensions. Different front/rear clear radii are not asserted to describe the barrel or polished mechanical edge.

## Glass Identification and Selection

The table explicitly uses sodium-D nD/VD. Every element has `indexReference: "D"`; the schema's numeric `nd` and `vd` slots retain those literal values. Public glass identities remain `Unmatched (source …; literal sodium-D only)` rather than silently selecting a catalog melt.

The [official LZOS catalog](https://ww.lzos.ru/upload/iblock/818/818322c0e82195aba7b3c9b1441649b9.pdf) contains nearly identical helium-d values for these named glasses. That is a material source ambiguity, not authorization to convert or relabel the patent. The catalog's applicable historical version/melt has not been established. No measured nC/nF/ng or anomalous partial-dispersion data are authored; non-D dispersion uses normal-line Abbe estimates. Native-D trace results therefore cannot establish reproduction of the patent's broadband OTF plot. Table 2's seven wavelength weights are retained as source evidence, not claimed as implemented spectral validation.

## Focus Mechanism

Only the patent's infinity state is modeled. All spacings are static. The very large `focus.closeFocusM` is an existing-corpus static-model convention, not a manufactured focus distance; the maker's 0.85 m value is separately catalog metadata. No finite-focus conjugate, unit extension or internal motion has been invented.

Literal native-D paraxial calculation gives EFL 84.26434158 mm and BFL 38.25904088 mm, versus printed 84.23 and 38.2 mm. These differences exceed simple half-unit rounding at the printed precision. The file preserves the source values rather than refocusing to hide the discrepancy.

## Aspherical Surfaces

None are published or modeled. Every refracting surface is spherical except the plane final surface.

## Validation Scope and Remaining Qualifications

Fresh bounded diagnostics in a frozen current-main engine passed native construction and geometry guards without overrides. With inferred apertures fixed, all 89 sampled axial rays passed. At 13.5°, 27 passed, 39 clipped at clear apertures, and 23 were stopped by the front-aperture aiming guard; there were no observed TIR/intersection failures or unaimed samples. These sample counts are not pupil-area transmission or illumination percentages.

At the unchanged image plane, an earlier sparse 33-ray axial diagnostic gave an unweighted RMS radius of 10.9 micrometres and maximum 20.6 micrometres. Boundary probes were included; this is not an acceptance spot or MTF metric. Field losses are compatible with vignetting but exact production throughput is unknown because apertures are inferred. They have not been expanded to force field rays through.

Full corpus tests, integration, compiled-viewer comparisons, spectral comparison and final independent review remain pending. The source's Figure 2 is inherited source evidence, not a reproduced result. This draft remains hidden and is not a finished delivery.
