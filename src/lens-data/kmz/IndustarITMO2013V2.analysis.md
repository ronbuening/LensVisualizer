## Source Reference and Design Identification

**Patent:** Not applicable; the source is a published technical book.

**Maker grouping:** KMZ (Krasnogorsk Mechanical Plant), through the documented Industar-50 design association.

**Designer:** M. D. Maltsev at KMZ is credited for the Industar-50 family; authorship of this exact teaching prescription is not independently established.

**Source author:** А.Н. Иванов (A. N. Ivanov).

**Publisher:** ITMO, Saint Petersburg.

**Published:** 2013.

**Title:** Проектирование узлов оптико-электронных приборов. Методические указания к выполнению курсового проекта.

**Embodiment analyzed:** Appendix 1.2, item 1, Industar Variant 2; PDF/printed p.51, with the schematic on p.50.

**Model:** KMZ INDUSTAR 52.39mm f/3.56 (ITMO 2013 Variant 2).

This analysis concerns the fixed teaching prescription in Ivanov's book, supplemented by explicitly identified catalog
glass coordinates. The book author and publisher are not attributed as the lens inventor or manufacturer. Its numerical
table is the authority for geometry; the associated schematic establishes the arrangement rather than a precise drawing
scale. [Ivanov, pp.1–2 and 50–51][itmo]

The resemblance to the production Industar-50 family is supported by several limited points of comparison:

1. The selected model has four elements in three groups, matching the arrangement recorded in the KMZ archive.
2. Its calculated focal length is 52.390881 mm, close to the archive's 52.48 mm, but the optical vertex track is 18.86 mm
   rather than 18.55 mm.
3. The archive describes the production family as Tessar-type, consistent with the two singlets and cemented rear pair
   in the selected prescription. [KMZ archive][kmz]

The KMZ archive credits the Industar-50 calculation to M. D. Maltsev at KMZ. The teaching book's worked example
identifies an Industar-50 from the OPAL library and gives the same radii and internal spacings as Appendix Variant 2.
These sources support the KMZ maker grouping and Industar family branding. They do not establish a particular
production Industar-50 or Industar-50-2 prescription, factory variant, mount, production date or image format.
Its f/3.565 label denotes the calculated aperture
convention explained below, not a manufacturer's specification.

## Optical Architecture

The design has a Tessar-type arrangement: a positive front singlet, a negative singlet, and a cemented rear group of net
positive power. The individual isolated-element power sequence is positive–negative–negative–positive; the air-separated
group sequence is positive–negative–positive. These classifications follow calculated paraxial powers, not assumed
aberration-correction roles.

The model contains seven optical surfaces and a separate neutral aperture-stop entry. All optical surfaces are spherical
or planar. The published radii, internal thicknesses and clear diameters are retained without scaling; the scale factor
is 1. The second optical surface is planar. The p.51 infinity symbol resolves the zero notation in the related p.6 table.
[Ivanov, pp.6 and 51][itmo]

The optical vertex track, from the first to the last refracting surface, is 18.86 mm. At the adopted d-line indices the
system has EFL 52.390881 mm and paraxial BFD 43.532612 mm, measured from the last optical vertex. The resulting image plane
lies 62.392612 mm behind the first vertex. That final image distance is calculated: the source leaves the last air spacing
blank. No source-listed plate or filter has been removed, and no air-equivalent spacing conversion is involved.

### Aperture and pupil conventions

The diaphragm diameter is 11.8 mm, with its plane 2.30 mm behind surface 4. Its insertion divides the published 5.05 mm
air gap into 2.30 mm before and 2.75 mm after the stop, preserving the optical vertices. Clear diameters are 16 mm on the
front singlet and 14 mm on the remaining optical surfaces. These are source dimensions, not ray-fitted estimates.
[Ivanov, pp.50–51][itmo]

Paraxial imaging of the diaphragm gives an entrance-pupil diameter of 14.840030 mm and a pupil-based f-number of 3.530376.
The implemented aperture convention instead uses the exact on-axis marginal entrance height that reaches the physical
iris edge: 7.348479 mm, giving f/3.564743. This value preserves the published diaphragm in the application's real-ray stop
construction. The two f-numbers describe different pupil conventions; neither is an independently published aperture.

## Element-by-Element Analysis

The following focal lengths describe each element isolated in air at the adopted d-line index. They are not additive
in-situ contributions to system power. The glass coordinates are modern catalog proxies for the named source grades.

### L1 — Plano-Convex

nd = 1.61309, νd = 60.58. Glass: Unmatched (TK14; PG&F 2010 d-line proxy; historic melt unconfirmed). f = +27.891500 mm.

L1 occupies surfaces 1–2, with the convex face toward the object and a plane rear face. Its positive front-surface power
starts the refraction of an on-axis parallel bundle toward the axis. The plane exit surface has no paraxial surface
power, although finite-angle rays still refract there. The source provides the shape and glass grade but does not assign
a specific spherical-aberration or coma contribution to this element. [Ivanov, p.51][itmo]; [PG&F, TK14 sheet][pgf]

### L2 — Biconcave Negative

nd = 1.57502, νd = 41.31. Glass: LF5 (PG&F coordinate); QF3 (CDGM spectral proxy; historic melt unconfirmed). f = −17.521391 mm.

L2 occupies surfaces 3–4 between the front singlet and the diaphragm. Both of its refracting surfaces have negative
paraxial power at the stated media boundaries. It therefore provides the negative member of the air-separated group
sequence. Its lower Abbe number distinguishes its dispersion from the TK14 positive elements' material; that contrast
alone does not quantify the element's contribution to total chromatic error. [Ivanov, p.51][itmo]; [PG&F, LF5 sheet][pgf]

### L3 — Negative Meniscus

nd = 1.52949, νd = 51.81. Glass: SBF2 (HOYA) class (OF1 / KzF2-type special flint; spectral proxy, historic melt unconfirmed). f = −29.647367 mm.

L3 occupies surfaces 5–6 and forms the front component of the rear cemented doublet D1. Its weakly curved front and more
strongly curved rear face give negative power when this element is considered alone in air. In the assembled doublet,
however, its rear boundary meets TK14 rather than air. The cemented interface has positive surface power,
+0.005573333 mm⁻¹, so the isolated negative focal length cannot be treated as a separate negative interface action inside
the actual group. [Ivanov, p.51][itmo]; [PG&F, OF1 sheet][pgf]

### L4 — Biconvex Positive

nd = 1.61309, νd = 60.58. Glass: Unmatched (TK14; PG&F 2010 d-line proxy; historic melt unconfirmed). f = +15.684476 mm.

L4 occupies surfaces 6–7 and shares surface 6 with L3. The cemented surface is assigned to the downstream TK14 medium;
there is no synthetic cement layer. The rear group has a calculated net focal length of +30.765261 mm when evaluated
with its actual internal interface and air on both sides. The doublet is therefore a net positive rear component even
though L3 is negative in isolation. No specific field-flattening or achromatization performance is inferred from that
power partition. [Ivanov, p.51][itmo]; [PG&F, TK14 sheet][pgf]

## Glass Identification and Selection

The source names ТК14, ЛФ5 and ОФ1 but supplies neither numerical indices nor a wavelength reference. The adopted TK14,
LF5 and OF1 coordinates come from the corresponding PG&F catalog sheets at the d line, 587.56 nm. They provide a
reproducible modern comparison; agreement with the source's stated focal length does not prove a historic melt or supplier
identity. [Ivanov, p.51][itmo]; [PG&F catalog][pgf]

The same TK14 proxy is used in L1 and L4, while LF5 and OF1 provide distinct index–dispersion combinations in L2 and L3.
The source does not specify optimization targets or explain individual glass-selection decisions. L2 uses the coordinate-exact CDGM QF3 dispersion curve as a supplier-neutral spectral proxy: its calculated g-line index 1.592808 also agrees with the retained PG&F value 1.59281. This is not a claim of historic CDGM supply. No anomalous-dispersion designation is assigned.

Supported g-line indices are retained: ng = 1.62561 for TK14, 1.59281 for LF5 and 1.54225 for OF1. Verified C- and F-line
indices and coefficient-backed curves remain unavailable for TK14; no source-measured partial-dispersion deviations are supplied. L1 and L4 therefore retain Abbe fallback; an isolated ng value does not establish a complete dispersion curve. L2 resolves to the coefficient-backed QF3 proxy, and L3 to the discontinued HOYA SBF2 (KzF2 type, 1.52944 / 51.64), whose legacy six-term formula reproduces the retained OF1 g-line index 1.54225. The model
does not substantiate apochromatic correction or secondary-spectrum performance. [PG&F catalog][pgf]

## Focus Mechanism

Only one fixed prescription is represented, evaluated for an object at infinity. No source-backed internal motion law,
finite-focus spacing station, focus travel or production minimum focus distance is available for this selected variant.
The model therefore uses NO_INTERNAL_RECONSTRUCTION and has no variable air gaps. It does not infer a focusing mechanism
from a related production lens.

The data's `closeFocusM = 0` is an unavailable-value placeholder, not a physical zero-distance minimum focus. Changing the
application's focus parameter leaves all optical spacings unchanged. This fixed model makes no claim about close-focus
aberrations, magnification or breathing.

## Verification Summary and Limits

Two paraxial calculation methods reproduce the adopted model's EFL at 52.390881 mm. The residual from the source's
52.39 mm is +0.000881 mm, within its last printed decimal place. The computed Petzval sum is +0.005638551 mm⁻¹, evaluated
surface by surface as φ/(n n′). That sum alone does not establish a flat image field or determine astigmatism.

The adjacent worked example on p.5 describes an OPAL Industar-50 as 52 mm, f/2.9 and 46° full field; p.6 repeats the related
radii and spacings. The selected Appendix Variant 2 stop and clear diameters do not reproduce f/2.9 under either pupil
convention above. Those adjacent assertions are retained as context rather than imposed on the selected prescription.
[Ivanov, pp.5–6 and 51][itmo]

All retained clear apertures satisfy the evaluated spherical-domain, rim-slope and positive-thickness checks. The actual
element renderer requires no hidden rim trimming. Exact three-dimensional rays were sampled at half-field angles of
0°, 5°, 10°, 15°, 20° and 23° at maximum aperture. All sampled chief rays transmit, while some pupil-edge rays are clipped
by the diaphragm, optical surface edges or outer glass rims. Sampling those fields does not certify continuous coverage,
a fully illuminated image circle or a production image format.

The calculations describe the stated prescription, catalog proxies and fixed infinity state. They do not establish MTF,
production tolerances, coatings, transmission or measured aberration performance.

## Sources

1. **А.Н. Иванов (A. N. Ivanov).** _Проектирование узлов оптико-электронных приборов. Методические указания к выполнению
   курсового проекта._ ITMO, Saint Petersburg, 2013. Title and authorship: PDF/printed pp.1–2; related worked example:
   pp.5–6; Industar schematic and selected Variant 2: pp.50–51. [Original source PDF][itmo]
2. **PG&F / Potapenko Glass & Filters.** _Optical glass catalog_, version 3, 2010. Individual sheets: TK14, PDF p.41;
   OF1, PDF p.74; LF5, PDF p.82. Catalog properties support the qualified glass proxies, not historic manufacture.
   [Catalog PDF][pgf]
3. **KMZ / ZENITcamera archive.** _Индустар-50_. Description and specifications provide production-family context only.
   [Official archival page][kmz]

[itmo]: https://books.ifmo.ru/file/pdf/1465.pdf
[pgf]: http://opticalglass.com.ua/ru/pds/PG%26F,%20TM%20(UA)%20GLA-CTLG%20(ru)%20ver%203,%202010.pdf
[kmz]: https://www.zenitcamera.com/archive/lenses/industar-50.html
