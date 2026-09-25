## Patent Reference and Design Identification

**Patent:** FR 1.233.449  
**Priority:** 30 August 1958 (Federal Republic of Germany)  
**Filed in France:** 24 August 1959  
**Granted in France:** 2 May 1960<br>
**Published:** 12 October 1960  
**Inventors:** Walter Mandler; Erich Wagner  
**Applicant:** Ernst Leitz Canada Limited  
**Title:** *Objectif photographique à forte luminosité*  
**Embodiment analyzed:** Example 1, Tableau 1 / Fig. 1

FR 1.233.449 describes a high-speed photographic objective of the Gauss type. Example 1 is a normalized prescription with
$f = 1.0$, an opening ratio of 1:1.4, and a full field angle of 64°. Its numerical table gives twelve refracting surfaces,
seven glass elements, five air-separated assemblies, and a diaphragm located between surfaces $r_5$ and $r_6$. The
optical section is Fig. 1 on patent PDF page 3. The French sheet prints the inventor surnames only; the given names in the
metadata block are normalized from the same-family US 2,975,673 publication, which identifies Walter Mandler and Erich
Wagner and claims the same 30 August 1958 German priority. [1, pp. 1, 3][5]

The production correlation is strong but not manufacturer-confirmed. The link rests on convergent evidence rather than a
Leica statement naming this patent:

1. Leica states that the Summilux-M 35 f/1.4 was introduced in 1961, after the 1960 French publication. [2]
2. Leica states that the current Classic reissue uses an optical design identical to the lens launched in 1961. [2]
3. Leica specifies seven lenses in five assemblies, matching Example 1 exactly. [2][3]
4. The patent gives f/1.4 and a normalized focal length of 1.0. The implemented prescription is uniformly scaled by 35,
   giving a computed paraxial EFL of 35.1432 mm while retaining 35 mm as the marketed focal length.
5. The patent gives a 64° full field, whereas Leica specifies 62.5° diagonal coverage on 24 × 36 mm for the current
   reissue. [1, p. 1][3] These values are close but not identical and are treated as corroborating, not identity-defining,
   evidence.

### Patent-family consolidation

One catalog entry represents Example 1 in both publications. The French application was filed on 24 August 1959,
two days before the US filing on 26 August 1959. France granted the patent on 2 May 1960 and published it on
12 October 1960; the US patent was granted on 21 March 1961. Both claim German priority of 30 August 1958. [1][5]

Neither publication supplies a more complete numerical optical prescription: both give the same twelve radii,
seven element thicknesses, air spaces, refractive indices, f/1.4 opening ratio, and 64° field. The US figure explicitly
labels diaphragm D and supplies the inventors' given names. Neither gives numerical clear semi-diameters, an exact
axial diaphragm position, a physical stop radius, or a focus law. [1][5]

The French table is the retained numerical source. Its final element has $ν_e=47.69$, whereas US Table 1 prints
$ν_e=47.59$ at the same $n_e=1.72056$. This is a printed source discrepancy, not evidence of a separate production
lens or a resolved transcription error. The model preserves 47.69 and documents 47.59 without averaging them.
The former US catalog entry used a different inferred stop split and rim set; those assumptions do not make its
source prescription more complete. The retained French-based aperture model passes the sampled full on-axis pupil.

The data therefore identifies the model as a strong correlation to the 1961 Summilux-M 35 f/1.4 optical design, not as a
manufacturer-confirmed patent attribution.

## Optical Architecture

The patent explicitly calls the design a Gauss-type objective. In front-to-rear order, the implemented architecture is a
positive meniscus (L1), a cemented negative meniscus assembly (L2-L3), the diaphragm region, a positive meniscus (L4), a
second cemented negative meniscus assembly (L5-L6), and a final positive meniscus (L7). This gives a computed assembly
power sequence of positive-negative-positive-negative-positive. The two cemented assemblies are net negative even though
each contains one positive and one negative element.

At the 35× scale, the isolated assembly focal lengths are +59.1323 mm for G1/L1, -135.7079 mm for the L2-L3 cemented
assembly, +80.1056 mm for L4, -249.4346 mm for the L5-L6 cemented assembly, and +42.5528 mm for L7. These are standalone
assembly powers in air, not claims about each group's in-situ contribution after coupling to the rest of the objective.

The patent's distinguishing prescription constraints concern the region around the diaphragm and the image-side cemented
meniscus. It states that the converging lens between the diaphragm and the image-side negative cemented meniscus is formed
as a meniscus, that its focal length exceeds that of the complete objective, and that the relevant adjacent radii satisfy
the stated ratio condition. The patent presents these relationships as part of its strategy for reducing sagittal and
meridional field curvature in a high-speed Gauss objective. [1, pp. 1-2]

The source prescription is normalized and has been scaled uniformly by 35.0. Every radius and axial spacing, including the
source image-plane distance, is multiplied by 35; the native refractive coordinates are unchanged. There are no aspheric
surfaces or coefficients in Example 1, so no conic or coefficient scaling is involved.

The patent establishes the diaphragm only somewhere inside the air gap $a_2$ between $r_5$ and $r_6$. The model inserts a
single neutral STO at 75% of that gap measured from $r_5$: 6.061125 mm from surface 5 to STO and 2.020375 mm from STO to
surface 6. Its semi-diameter, 7.827436 mm, is calibrated so the paraxial entrance pupil reproduces the patent's f/1.4
opening ratio. Neither the stop split nor its physical diameter is published by the patent; matching f/1.4 is therefore a
calibration, not independent evidence of the manufactured diaphragm.

The patent supplies no clear semi-diameters. The front and final element rims are now 13 and 10.4 mm, respectively, following Fig. 1. Inner apertures retain the geometry-constrained model. These are inferred optical rims, not published dimensions; previous ray-envelope clearance results do not establish field clearance for this revised aperture set.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**ne = 1.72341, νe = 50.10. Glass: LAC10 coordinate-compatible catalog proxy; historical supplier unproven. f = +59.1323 mm.**

L1 is the front positive collector and the first positive member in the patent's Gauss-type sequence. Its computed
standalone power is +0.0169112 mm⁻¹. The catalog annotation records an exact modern e-line coordinate match to CDGM
H-LaK8A, but that equivalence does not establish the historical melt or supplier used by Ernst Leitz Canada. [4]

### L2 — Positive Meniscus, front member of cemented assembly D1

**ne = 1.78990, νe = 48.0. Glass: TAF4 coordinate-compatible dispersion proxy; historical supplier unconfirmed. f = +27.3900 mm.**

L2 is individually positive, with standalone power +0.0365096 mm⁻¹. It is cemented directly to L3 at the source surface
$r_4$; the implemented junction therefore carries the downstream L3 medium and element identity rather than an invented
cement layer.

### L3 — Negative Meniscus, rear member of cemented assembly D1

**ne = 1.70444, νe = 29.84. Glass: SF15 coordinate-compatible catalog proxy (historical supplier unproven). f = -18.4644 mm.**

L3 is the stronger negative member of D1, with standalone power -0.0541582 mm⁻¹. Together L2 and L3 form the patent's
object-side cemented negative meniscus assembly. Their computed net standalone assembly power is only -0.00736877 mm⁻¹
($f = -135.7079$ mm), illustrating why the element powers should not be confused with the power of the cemented pair. A
current Schott catalog row gives N-SF15 at $n_e=1.70438$, $\nu_e=29.96$, a coordinate-near but non-exact
comparison (catalog minus patent: $\Delta n_e=-0.00006$, $\Delta\nu_e=+0.12$). The runtime uses the compatible SF15 catalog curve as a dispersion proxy, without assigning a historical supplier. [6]

### L4 — Positive Meniscus behind the diaphragm

**ne = 1.78990, νe = 48.0. Glass: TAF4 coordinate-compatible dispersion proxy; historical supplier unconfirmed. f = +80.1056 mm.**

L4 is the isolated converging meniscus placed immediately behind the modeled diaphragm region and ahead of the second
cemented negative assembly. Its standalone focal length is 2.2794 times the computed 35.1432 mm total EFL, satisfying the
patent requirement that this element's focal length exceed that of the complete objective. Relative to the patent's nominal 35 mm scale, the ratio is 2.28873; the denominator explains the difference. The patent makes the geometry
of this meniscus and its relationship to the following negative meniscus central to the stated field-curvature
correction. [1, pp. 1-2]

### L5 — Negative Meniscus, front member of cemented assembly D2

**ne = 1.76167, νe = 27.34. Glass: SF4 coordinate-compatible catalog proxy (historical supplier unproven). f = -21.5044 mm.**

L5 supplies the negative member of the image-side cemented meniscus assembly. Its standalone power is
-0.0465022 mm⁻¹. The front radius of L5 is also the $r_8$ term used in the patent's ratio condition with the rear radius of
L4. A current Schott SF4 row has $n_e=1.76167$, $\nu_e=27.37$ (catalog minus patent: $\Delta n_e=0$,
$\Delta\nu_e=+0.03$). This is close enough to be a useful coordinate comparison but not exact at the patent's printed
precision, and it does not establish the historical supplier or melt; the runtime uses SF4 only as a dispersion proxy. [7]

### L6 — Positive Meniscus, rear member of cemented assembly D2

**ne = 1.78990, νe = 48.0. Glass: TAF4 coordinate-compatible dispersion proxy; historical supplier unconfirmed. f = +28.6045 mm.**

L6 is cemented directly to L5 and is individually positive, with standalone power +0.0349595 mm⁻¹. The complete L5-L6
pair remains slightly negative in standalone form, with net power -0.00400907 mm⁻¹ ($f = -249.4346$ mm). This is the
image-side negative cemented meniscus specified by the patent architecture.

### L7 — Final Positive Meniscus

**ne = 1.72056, νe = 47.69. Glass: S-LAM3 coordinate-compatible catalog proxy (historical supplier unproven). f = +42.5528 mm.**

L7 is the final positive meniscus before the source image plane and has standalone power +0.0235002 mm⁻¹. It completes
the patent's positive-negative-positive-negative-positive assembly sequence. CDGM H-LaF2 is another coordinate-near
modern comparison at $n_e=1.72056$, $\nu_e=47.65$ (catalog minus patent: $\Delta n_e=0$, $\Delta\nu_e=-0.04$), but it is
not exact at the printed $\nu_e$ and does not establish the historical supplier; the runtime uses S-LAM3 only as a dispersion proxy. [8]
No separate rear cover glass, filter, dummy plane, or other optical plate is present in the selected prescription.

## Glass Identification and Selection

Native e-line coordinates are preserved; catalog curves are evaluated at C′/e/F′. Six-digit d-line codes alone do not resolve these elements.

| Element | Source index / Abbe | Catalog curve |
|---|---|---|
| L1 | 1.72341 / 50.1 (e) | LAC10 |
| L2 | 1.7899 / 48 (e) | TAF4 |
| L3 | 1.70444 / 29.84 (e) | SF15 |
| L4 | 1.7899 / 48 (e) | TAF4 |
| L5 | 1.76167 / 27.34 (e) | SF4 |
| L6 | 1.7899 / 48 (e) | TAF4 |
| L7 | 1.72056 / 47.69 (e) | S-LAM3 |

Named curves pass the catalog coordinate guard without changing the patent coordinates. No catalog-derived line indices are copied into the elements. All seven elements now have catalog dispersion proxies; nearby glass families do not establish a unique historical identity. No APO or anomalous-dispersion claim follows from these assignments.

## Focus Mechanism

Example 1 publishes only one optical prescription and no alternate focus spacings. The model therefore uses
**NO_INTERNAL_RECONSTRUCTION**: `var` is empty and no optical group is assigned an inferred focus motion.

Leica's current technical specification gives a focus range of 1 m to infinity for the Classic reissue, and the data
retains 1.0 m as product metadata. [3] That production minimum-focus distance does not determine a unique internal or
unit-focus law for the patent prescription. The analysis therefore does not assign a unit-focus, inner-focus, or rear-focus
mechanism that the available sources do not establish.

## Conditional Expressions

The patent states three construction conditions relevant to Example 1. Recalculation from the final scaled model gives:

| Patent condition | Implemented value | Result |
|---|---:|---|
| $|r_7| \ge 2|r_8|$ | $|r_7|/|r_8| = 2.50551$ | Satisfied |
| focal length of L4 greater than total focal length | 80.1056 mm / 35.1432 mm = 2.27941 | Satisfied |
| $|r_5| < a_2+d_4$ | $|r_5|/(a_2+d_4) = 0.891373$ | Satisfied |

These checks use the patent values after the uniform 35× dimensional scale; the scale cancels in the two radius/gap
ratios. They verify the numerical example against the stated conditions but do not by themselves establish the complete
aberration performance claimed in the patent. [1, pp. 1-2]

## Verification Summary

The final model's paraxial EFL is **35.1431768 mm**. Its first-to-last refracting-surface vertex track is **32.4240 mm**,
or 0.922626× the EFL. The paraxial BFD measured from surface 12 is **19.1164174 mm**, while the scaled source image-plane
spacing is **19.1415000 mm**. The -0.0250826 mm residual is retained rather than forcing the source image plane to the
recomputed paraxial focus; in normalized source units it lies within the dossier's rounding-propagation tolerance.

The first-order result is reproduced with two distinct paraxial representations: reduced-angle $[y,\nu]$
tracing and an ordinary-angle $[y,u]$ matrix chain. They agree at machine precision for this air-to-air system. The
surface-by-surface Petzval sum, using $\phi/(n n')$ on every refracting surface, is
**0.00711753 mm⁻¹**; the neutral STO contributes zero power.

The modeled STO produces an entrance-pupil radius of **12.5511346 mm** and hence modeled f/1.4 by construction. Because the
stop semi-diameter was solved from the f/1.4 target, this agreement is explicitly a calibration and not an independent
verification of the unpublished physical stop diameter.

The retained aperture model was checked with the repository surface and image-circle audits. Exact on-axis rays at
95%, 99%, and 100% of the modeled entrance-pupil radius pass the authored apertures. These checks do not establish
full-pupil off-axis illumination; the earlier dossier's dense field-bundle claims have not been revalidated for the
revised rim set. The semi-diameters and stop position remain inferred model choices.

## Sources / References

1. **République Française, Brevet d'invention No. 1.233.449**, *Objectif photographique à forte luminosité*, Ernst Leitz
   Canada Limited; inventors Mandler and Wagner; published 12 October 1960. Supplied scan: Tableau 1 on PDF p. 1,
   Résumé/conditions on PDF p. 2, optical sections Fig. 1 and Fig. 2 on PDF p. 3.
2. **Leica Camera AG**, “Summilux-M 35 f/1.4,” product page. Introduces the 1961 history, states that the current reissue
   uses an optical design identical to the 1961 lens, and describes the seven-lens/five-assembly construction.
   https://leica-camera.com/en-US/photography/lenses/m/summilux-m-35mm-f1-4
3. **Leica Camera AG**, “Summilux-M 35 f/1.4 — Technical Specification.” 24 × 36 mm format, 62.5° diagonal view angle,
   7/5 construction, 1 m to infinity focus range, and Leica M bayonet.
   https://leica-camera.com/en-US/photography/lenses/m/summilux-m-35mm-f1-4/technical-specification
4. **CDGM Glass Co., Ltd.**, optical-glass data sheet/catalog entry for **H-LaK8A (720503)**. Used only for the modern
   coordinate-equivalence check at $n_e=1.72341$, $\nu_e=50.10$; it is not evidence of the historical supplier.
   https://www.cdgmgd.com/accessory/2021-11-18/client/www.cdgmgd.com/f44bac33-96f4-4f40-a15d-54061708cbaa.pdf

5. **United States Patent 2,975,673**, *High Aperture Photographic Objective*, Walter Mandler and Erich Wagner; filed
   26 August 1959; granted 21 March 1961; claims German priority of 30 August 1958; assigned to Ernst Leitz Canada Ltd.
   Supplied scan: Fig. 1 on PDF p. 1, Table 1 on PDF p. 2. Corroborates the prescription, diaphragm region,
   inventor given names, and patent-family identity; Table 1 prints the differing final-element Abbe value 47.59.
   https://patents.google.com/patent/US2975673A/en
6. **SCHOTT**, optical-glass data sheet for **N-SF15**. Current e-line coordinates $n_e=1.70438$, $\nu_e=29.96$; used
   only as a coordinate-near comparison to patent L3, not as a historical glass assignment.
   https://media.schott.com/api/public/content/216a592e67da4b1aabc5f2f0fcd92b10?v=71a4c701
7. **SCHOTT**, optical-glass data sheet for **SF4**. Current e-line coordinates $n_e=1.76167$, $\nu_e=27.37$; used
   only as a coordinate-near comparison to patent L5, not as a historical glass assignment.
   https://media.schott.com/api/public/content/1e0b5329165e4c0b8793165cd34efc79?v=cd68b5fa
8. **CDGM Glass Co., Ltd.**, optical-glass data sheet for **H-LaF2 (717479)**. Current e-line coordinates
   $n_e=1.72056$, $\nu_e=47.65$; used only as a coordinate-near comparison to patent L7, not as a historical glass
   assignment.
   https://www.cdgmgd.com/accessory/2021-09-01/client/www.cdgmgd.com/006fb98b-22a8-479f-9aab-93b958af435f.pdf

## Catalog dispersion follow-up

The following curves are approximate spectral proxies within the catalog coordinate guard, not identified production glasses. Source indices, Abbe numbers, and reference lines are unchanged. Differences below are catalog minus patent; no catalog line indices or APD claims are copied into the prescription. The curve coefficients and vendor provenance are retained in the shared glass catalog.

| Element | Patent index / Abbe | Runtime curve | Δn | Δν |
|---|---|---|---|---|
| L2 | 1.7899 / 48 (e) | TAF4 | 0.002048 | -0.741 |
| L4 | 1.7899 / 48 (e) | TAF4 | 0.002048 | -0.741 |
| L6 | 1.7899 / 48 (e) | TAF4 | 0.002048 | -0.741 |

## Image-plane source audit (2026-09-25)

MTF image-plane audit (2026-09-25): FR1233449 Tableau 1 (PDF p. 1,
repeated p. 2) matches every R/d and native ne/ve coordinate at scale 35.
The printed rear distance a5=0.5469 becomes 19.1415 mm, versus native-e
paraxial BFL 19.116417 mm; offset -0.025083 mm. No plates, aspherics or
other focus state are listed. The source does not establish a best-focus
interpretation or a single correctable misprint; retain its published plane.
