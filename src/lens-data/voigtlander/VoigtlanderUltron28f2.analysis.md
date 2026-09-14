# Voigtländer Ultron 28mm f/2 Aspherical — Patent Example 1

## Patent Reference and Design Identification

**Patent:** JP 2022-100641 A, Imaging Lens

**Inventors:** Yoshihisa Yomogida and Yuki Shibata

**Applicant:** Cosina Co., Ltd.

**Filed:** December 24, 2020, JP2020-214735

**Published:** July 6, 2022

**Embodiment analyzed:** Example 1, Table 1 and Figure 1

The hosted design is associated with the ten-element, seven-component Ultron. The patent states 28.5000 mm, f/2, full field 75.4° and image semi-height 21.63 mm. Its rounded prescription computes a slightly different focal length, discussed below. The data's subtitle now agrees with its verified author metadata; the former Hatta attribution was incorrect. Patent association does not establish an exact production prescription or production materials.

## Optical Architecture

Front group Gf contains a negative meniscus, plano-concave/plano-convex cemented Jw, and biconvex/biconcave cemented Jy. Rear group Gr contains biconcave/biconvex Jx, a positive singlet and two negative menisci. The final meniscus has two aspheric faces. Ten elements form seven air-separated components; Gf and Gr are optical groups that translate together during focus.

All eighteen source rows, including the stop, retain their printed radii, thicknesses and glass coordinates. Figure 101 denotes a camera-side plate, described as a wavelength-cut filter or dust-protection glass. It is excluded. Table 1 does not provide plate thickness or index; it gives ZD18 directly from the last lens to the image. Thus no numerical plate conversion can be independently established, and no invented filter is inserted.

## Element-by-Element Analysis

Unlike many patents in this audit, Table 1 explicitly lists individual FL values. Those authored values are retained in the inspector. They generally agree with isolated thick-lens calculations; L9 is the material exception: its rounded R/nd/d gives −98.901619 mm rather than the source −100 mm. This is recorded rather than silently replacing a published quantity with a derived one.

| Element | Source nd | Source νd | Source FL (mm) | Glass interpretation |
|---|---|---|---|---|
| L1 | 1.51680 | 64.20 | -57.14 | BSC7 (HOYA) / N-BK7 (Schott) (inferred coordinate counterpart) |
| L2 | 1.64769 | 33.84 | -36.40 | E-FD2 (HOYA, patent nd/vd match) / SF2 (Schott) (inferred coordinate counterpart) |
| L3 | 1.91082 | 35.25 | 40.40 | TAFD35 (HOYA, patent nd/vd match) (inferred coordinate counterpart) |
| L4 | 1.91082 | 35.25 | 13.70 | TAFD35 (HOYA, patent nd/vd match) (inferred coordinate counterpart) |
| L5 | 1.76182 | 26.61 | -25.39 | S-TIH14 (OHARA, patent nd/vd match) (inferred coordinate counterpart) |
| L6 | 1.71736 | 29.50 | -12.16 | S-TIH1 (OHARA) / SF1 (Schott) (inferred coordinate counterpart) |
| L7 | 1.69680 | 55.46 | 22.98 | S-LAC14 (OHARA) / N-LaK14 (Schott) (inferred coordinate counterpart) |
| L8 | 1.88300 | 40.81 | 18.17 | H-ZLAF68C (CDGM, patent nd/vd match) (inferred coordinate counterpart) |
| L9 | 1.62999 | 58.12 | -100.00 | J-PSKH8 catalog equivalent (patent 630581; production supplier unspecified) (inferred coordinate counterpart) |
| L10 | 1.80610 | 40.73 | -500.00 | NBFD3 (HOYA) / S-LAH63Q (OHARA) (inferred coordinate counterpart) |

The source identifies the element forms and emphasizes the two front positive members' high indices. Detailed claims about an individual element correcting a particular aberration require whole-system evidence, so manufacturing, cost and overly specific correction claims have been removed.

## Glass Identification and Selection

Every commercial name is an inferred coordinate counterpart. The existing compatible curves remain, while source nd/νd stay authoritative. The prescription supplies no partial-dispersion values that identify L7 or L9 as anomalous-dispersion elements. Their former inferred badges and the headline “2 APD ELEMENTS” are removed. A production marketing count does not establish which patent rows deserve that label, and a material's catalog name alone does not establish source APD or chemistry.

## Focus Mechanism

The source publishes ZD0=430 mm, ZD18=20.33 mm and magnification 0.0676 at its near station. Infinity ZD18 is 18.40 mm. All internal spacings stay fixed, so all elements and the stop move 1.93 mm objectward relative to the fixed image plane. Intermediate movement is interpolated.

Using the summary's infinity LT=60.2274 mm gives the source object-to-image near distance **430+60.2274+1.93=492.1574 mm**, replacing the rounded 0.5 m label. However, the exact printed surface table has infinity track 60.24 mm, EFL 28.579770 mm and a small residual image-plane matrix A=0.00241943. At the printed near gap, it computes magnification −0.06511085 and front-vertex object distance 447.646690 mm, giving object-to-image distance **509.816690 mm**. This does not reproduce source ZD0=430 mm or magnification 0.0676.

The grant repeats the same values. Rounded data may contribute, but that explanation is not proven; neither the radii nor the source gap is tuned to force agreement. Both the source-derived label and this model discrepancy are explicit. A higher-precision prescription or authoritative correction remains a follow-up.

## Aspherical Surfaces

Equation 1 on PDF p.8 uses the standard1+K convention. Both printed K=0 values are correct and retained. All unambiguous polynomial coefficients are retained.

ASP18 A6 is printed **−336E−07** in the application and again in the granted JP7546909B2 table. The existing **−3.36×10⁻⁷** value is retained as an inferred missing-decimal repair. It produces a plausible section; the literal −3.36×10⁻⁵ adds about −33.6 mm of sixth-order sag at a 10 mm radius, incompatible with the thin final element drawn in Figure 1. That geometric inconsistency supports rejecting the literal interpretation but does not prove the particular repaired coefficient. The former description of it as a confirmed correction was too strong.

The grant does not resolve the ambiguity, and the final asphere remains an explicit source limitation. No grinding, molding or hybrid process is inferred.

## Semi-Diameter Estimation Notes

Original Figure 1 on PDF p.16 was inspected at 600 dpi. Its approximately 41.84 mm first-to-last-lens vertex span excludes plate 101 and the image plane. The existing 12 mm front radius, roughly 8–10 mm central radii and 11.9 mm final radii are consistent with the optical outline within drawing uncertainty. No large, independently supported discrepancy justifies resizing them. The old claim that mechanical half-heights were used as optical apertures has been removed; mechanical shoulders, leaders and the plate are excluded from comparison.

All SDs remain unchanged. Surface and image-circle checks pass with explicit full-frame metadata. These radii remain estimates, not tabulated effective apertures, and the final profile depends on the inferred A6 interpretation.

## Sources and Follow-up

- Original local JP2022100641A.pdf: cover metadata p.1, Figure101 description p.5, source specifications p.6, Table1 p.7, equation and ZD18 definition p.8, Figure1 p.16.
- [JP2022100641A publication](https://patents.google.com/patent/JP2022100641A/ja), including romanized author metadata and the link to its grant.
- [Granted JP7546909B2 PDF](https://patentimages.storage.googleapis.com/8f/d3/23/80c0b08aeccb67/JP7546909B2.pdf), retrieved to check the ambiguous coefficient; Table1 p.6 repeats it and the numerical prescription.

Follow-up remains for ASP18 A6, the printed-table/source-summary focus discrepancy, and the unspecified plate's optical path. These do not authorize replacing source values with a visually convenient fit.
