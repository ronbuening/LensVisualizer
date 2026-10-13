# RUSSAR-22 70mm f/8 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2,516,724 A
**Filed:** August 23, 1946
**Granted:** July 25, 1950
**Inventor:** Michael Michaelovitch Roossinov
**Assignee:** None named in the patent
**Title:** *Wide Angle Orthoscopic Anastigmatic Photographic Objective*
**Embodiment analyzed:** Example II

The modeled prescription is Example II of US 2,516,724 A. The patent presents the design as a wide-angle orthoscopic
anastigmatic objective for aerial photography, built from two nearly symmetrical halves around a central diaphragm region.
Figure 13 supplies the element notation and diaphragm location, while the Example II table supplies the radii, axial
spacings, sagittas, glass designations, focal length, aperture ratio, and 122° full field. The final LensVisualizer model
uses the patent's inch column converted by the exact 25.4 mm/in factor and retains the source's separate metric column as an
audit comparison. (US 2,516,724 A, Fig. 13; Example II, patent pp. 5–7.)

The identification with **Russar-22** is strong but not treated as manufacturer confirmation that Example II is the exact
production formula. Three pieces of evidence converge:

1. The patent itself identifies curve 9 in Figure 2 as the **Russar-22**, but it does not explicitly label Example II as
   Russar-22. (US 2,516,724 A, patent p. 4.)
2. The selected example is a 69.883 mm, f/8, six-element/four-group design with a published 122° field; the independent
   production-correlation source recorded in the dossier describes Russar-22 as a 70 mm f/8, 6/4, 122° aerial lens.
3. ITMO archival material places the Russar-21/-22/-23/-24 aerial-objective series in the 1939–1941 period, consistent with
   Roossinov's development history. The patent was filed later in the United States in 1946.

No manufacturer-issued production sheet was located that establishes a legal manufacturing entity, interchangeable mount,
or image format for this exact prescription. The manufacturer is explicitly unconfirmed and the catalog places both models under Unattributed.
Russar is retained as the design-family name, with its history on Roossinov's author page. Mount and image-format fields remain unset; the production-correlation caveat stays in these notes and the subtitle.

## Optical Architecture

Example II contains **six glass elements in four air-separated groups**. From object to image they are the front negative
meniscus L1, the cemented positive member L2+L3, the cemented positive member L4+L5, and the rear negative meniscus L6. The
two central cemented members are separated by only 0.493014 mm in the source-normalized prescription, with the diaphragm
shown inside that gap. The front and rear halves are intentionally not exact mirror copies; the patent states that this
small asymmetry is used for more complete correction of distortion and coma. (US 2,516,724 A, patent pp. 4–5.)

The two cemented members are positive as complete thick groups even though each combines one positive and one negative
component. Independent matrix calculations give an equivalent focal length of **+86.239 mm** for L2+L3 and **+84.669 mm**
for L4+L5. When each exterior negative meniscus and its intervening air space are included, the isolated front and rear
functional halves remain weakly positive, at **+177.951 mm** and **+169.141 mm** equivalent focal length respectively.
These are standalone subchain powers; they are not substitutes for the full-system effective focal length.

The parsed final model gives an effective focal length of **69.882791 mm**. The first-to-last refracting-vertex track is
**99.602798 mm**, or 1.42528× EFL, so it is not a telephoto layout under the project criterion. The Gaussian back focal
distance from surface 10 is **36.889534 mm**, or 0.52788× EFL, so it is not a retrofocus layout either. Its architecture is
instead the near-symmetric super-wide-angle form described by the patent.

## Element-by-Element Analysis

### L1 — Front Negative Meniscus

**nd = 1.6395, νd = 43.3. Glass: Unmatched (Lenzos L-67; code 640433). Standalone f = −105.984 mm.**

L1 is the strongly curved exterior negative member of the front half. The patent makes the greatly curved exterior menisci
a defining part of the architecture and associates their near-semispherical inner surfaces with the wide-field entrance-
aperture behavior of the design. That explanation is a patent statement; the data model does not convert it into a separate
aberration-performance claim. (US 2,516,724 A, patent pp. 3–4.)

The element's source glass designation is retained rather than replaced with a speculative modern supplier. The dossier glass audit did not establish a defensible named modern identity for Lenzos L-67, so the data file keeps the
six-digit coordinate code and an explicit `Unmatched` label.

### L2 — Front Cemented Member, Positive Component

**nd = 1.6126, νd = 58.6. Glass: 613586 — SK4 class (Lenzos L-24). Standalone f = +27.771 mm.**

L2 is the positive component of the first cemented member. It is cemented directly to L3 at surface 4; there is no synthetic
cement layer or air interface in the model. The historical Lenzos reference associates L-24 with the SK4 class, and modern
catalog coordinates independently support that class-level identification without proving a modern supplier or melt.

### L3 — Front Cemented Member, Negative Component

**nd = 1.5480, νd = 45.9. Glass: 548459 — LLF1 class (Lenzos L-28). Standalone f = −37.497 mm.**

L3 completes the L2+L3 cemented member. Considered alone in air it is negative, but the complete thick cemented member is
positive with the **+86.239 mm** equivalent focal length noted above. The patent states that the paired glasses are selected
with similar refractive-index relationships but different dispersions to assist chromatic correction; the present model
retains only the source index/Abbe coordinates and does not infer unreported line-index performance. (US 2,516,724 A,
patent p. 4.)

### L4 — Rear Cemented Member, Negative Component

**nd = 1.5480, νd = 45.9. Glass: 548459 — LLF1 class (Lenzos L-28). Standalone f = −36.823 mm.**

L4 begins the rear cemented member immediately behind the central diaphragm region. Its glass coordinate matches L3, but
the rear half is not an exact geometric duplicate of the front half. The patent explicitly notes differences in curvature,
sagitta, thickness, air gaps, and glass selection between the two halves. (US 2,516,724 A, patent p. 7.)

### L5 — Rear Cemented Member, Positive Component

**nd = 1.6126, νd = 58.6. Glass: 613586 — SK4 class (Lenzos L-24). Standalone f = +27.272 mm.**

L5 is cemented to L4 at surface 7 and completes the rear positive member. The complete L4+L5 pair has an independently
computed equivalent focal length of **+84.669 mm**. Its near match to the front member's net power is consistent with the
patent's description of a substantially, but not exactly, symmetrical two-half construction.

### L6 — Rear Negative Meniscus

**nd = 1.6242, νd = 35.9. Glass: Unmatched historical Lenzos L-3 (1.6242 / 35.9). Standalone f = −107.477 mm.**

L6 is the exterior negative meniscus of the rear half. Its Abbe number is lower than L1's 43.3, satisfying the patent's
explicit condition that the rear exterior negative member have the lower Abbe number. The earlier F5 label did not identify a compatible runtime curve and has been removed. No modern supplier identity is assigned.

## Glass Identification and Selection

The patent retains Lenzos 1936 catalog coordinates without naming the spectral line. Kachalov and Voano's
[*Fundamentals of Optical Glass Production* (1936)](https://ru.djvu.online/file/129FlTkciu6QA), p. 13,
identifies the historical yellow D/d convention; Table 6, p. 74, cross-references L-24 to SK4,
L-28 to LLF1 and L-15 to BaSF1 at the patent's coordinates. This supports class-compatible spectral
proxies, not a claim that a modern vendor supplied these lenses or reproduced their original melts.

| Source glass | Retained index / Abbe | Runtime spectral model |
|---|---|---|
| L-67 | 1.6395 / 43.3 | Unmatched; Abbe fallback |
| L-24 (L2, L5) | 1.6126 / 58.6 | BACD4 polynomial proxy (1.61272 / 58.58) |
| L-28 (L3, L4) | 1.5480 / 45.9 | LLF1 Sellmeier proxy (1.54814 / 45.75) |
| L-3 (L6) | 1.6242 / 35.9 | Unmatched; Abbe fallback |

The patent index and Abbe values remain unchanged. The monochromatic prescription retains those
coordinates; chromatic tracing uses the compatible catalog curve directly. Its small index/Abbe offsets,
the exact historical D/d distinction and partial dispersion remain modeling uncertainties. Evaluating BACD4, LLF1 and H-BaF8 at the historical sodium D wavelength (589.3 nm) gives
1.612624, 1.548034 and 1.625899 respectively, close to the retained source coordinates. This is
additional compatibility evidence, not a determination of the original melt. No independent
`nC`, `nF`, `ng`, `dPgF`, ED, APD or apochromatic claim is added. These catalog entries already exist,
so duplicating them under historical names would falsely imply new measured coefficient sets.

## Focus Mechanism

The patent publishes only one static Example II prescription. No finite-conjugate spacing table, moving group, focus law,
or close-focus distance is supplied. The implemented focus status is therefore **NO_INTERNAL_RECONSTRUCTION**: `var` is
empty and no element or group moves in the model.

The required scalar `closeFocusM` is set to **1,000,000 m** solely as a finite schema/UI sentinel. It is not a claimed
minimum focus distance and does not certify any finite-conjugate state. Any analysis that depends on close-focus geometry
must therefore be treated as unavailable for this prescription.

## Design Philosophy and Patent Conditions

The patent's central design argument is that the two strongly curved exterior menisci and the paired cemented positive
members form a super-wide-angle objective in which deliberate aberrational vignetting changes the entrance-aperture
behavior toward the field edge. It also states that exact bilateral symmetry is relaxed to improve distortion and coma.
Those are source descriptions of design intent, not independently reconstructed higher-order aberration budgets.

Several published conditions can nevertheless be checked directly against the implemented prescription:

- The central air gap is **0.493014 mm**, equal to **0.70549% of EFL**, within the patent's 0–3% condition.
- The rear exterior member has νd = **35.9**, lower than the front exterior member's **43.3**, satisfying the stated Abbe
  ordering.
- The modeled first-to-last lens-vertex track is **99.602798 mm**, greater than the **69.882791 mm** EFL, satisfying the
  patent's objective-length condition.
- The source sagittas and radii give inner exterior-meniscus spherical angles of approximately **185.052°** at r2 and
  **185.147°** at r9, inside the patent's stated 170–190° range.
- The two cemented positive-member center-thickness sums are **12.269978 mm** and **12.059920 mm**, or **17.558%** and
  **17.257%** of EFL. These values are consistent with the patent's qualitative description of the members as being about
  20% of focal length; the patent does not supply a tighter numerical tolerance.

## Model-Specific Construction Notes

Example II prints `d4 = 0.11890 in (3.029 mm)`. Exact conversion of the inch value is **3.020060 mm**. The raw mismatch is
preserved in the dossier; the implemented branch uses 3.020060 mm because the inch-column normalization gives the tighter
joint reproduction of the patent's published focal quantities. This is a documented source correction in the model branch,
not a silent rewrite of the patent table.

Figure 13 shows the diaphragm in the 0.493014 mm central gap but does not dimension its exact station or diameter. The model
therefore places the single `STO` at the gap midpoint and calibrates its **5.444810 mm** semi-diameter to the published f/8.
The resulting entrance-pupil semi-diameter is **4.367675 mm** and the modeled f-number is **7.99999986**. Agreement with f/8
is calibration-dependent and is not independent evidence of the historical physical iris size.

The source diameter/sag notes are not fully interpretable as ordinary projected clear apertures. Published
`h6 = 0.180086 mm` is inconsistent with a spherical r6 evaluated at the stated 11 mm L4 free diameter: the latter gives
approximately **0.116812 mm** sag. The model retains both source records but uses the h6-implied surface-6 semi-diameter of
**6.828189 mm**, because the direct 5.5 mm radius does not contain the calibrated f/8 sampled field bundle.

The patent's r2 and r9 geometry is also nonstandard. The listed L1/L6 free semi-diameters, 33 mm and 32.5 mm, exceed
`|R2| = 22.690074 mm` and `|R9| = 22.269958 mm`, so they cannot be literal spherical chord radii under a single-valued sag
interpretation. Independently, h2/r2 and h9/r9 imply approximately **185.052°** and **185.147°** included spherical angles,
consistent with the patent's explicitly over-hemispherical construction. LensVisualizer therefore stores only the
near-equatorial active portions of surfaces 2 and 9. The physical overhang beyond the equator is not represented; this is a
model-domain limitation, not a change to the published radii.

## Verification Summary

The final `Russar22.data.ts` was parsed directly with a TypeScript-aware literal loader before optical recomputation. A
sequential height/reduced-angle calculation and an independent ABCD product agree on the **69.882791 mm** EFL and
**36.889534 mm** Gaussian BFD to floating-point precision. The computed Petzval sum is **+5.36964×10⁻⁴ mm⁻¹**, corresponding
to a reciprocal radius of approximately **1862.32 mm** under the adopted sign convention.

For sampled-ray clearance, the verifier traced **1,862 exact three-dimensional spherical/Snell rays** across field angles
from 0° through the published **61° half-field**, using center and multi-ring pupil samples through the calibrated stop. Every
ray in that discrete set reached the authored image plane without exceeding the modeled surface apertures. The result is not
a claim that the full circular stop is transmitted at every extreme-field pupil coordinate: the patent deliberately uses
aberrational vignetting, and NBS Monograph 93 likewise describes a field-dependent vignetted entrance pupil for this Example
II prescription. The test is finite sampling rather than a proof over the continuous field/pupil domain, and it remains
separate from LensVisualizer's production renderer and runtime tracer, which are integration-scope checks.


## Sources and References

1. Michael Michaelovitch Roossinov, **US Patent 2,516,724 A**, *Wide Angle Orthoscopic Anastigmatic Photographic
   Objective*, filed August 23, 1946; granted July 25, 1950. Principal locations: Figure 13; Example II and diameter/sagitta
   notes on patent pp. 5–6; Lenzos glass table and claims on pp. 7–10. Public patent record:
   https://patents.google.com/patent/US2516724A/en
2. U.S. National Bureau of Standards, *Spot Diagrams for the Prediction of Lens Performance From Design Data*, NBS
   Monograph 93 (1965). The dossier uses this as an independent reproduction/identification of the US 2,516,724 Example II
   dataset: https://nvlpubs.nist.gov/nistpubs/Legacy/MONO/nbsmonograph93.pdf
3. ITMO Museum, M. M. Rusinov autobiographical/biographical material, used for the 1939–1940 Russar-21/-22/-23/-24
   development context: https://museum.itmo.ru/images/pages/360/biografiya_rusinov_m.m..pdf
4. ITMO Museum, institutional history for 1940–1949, used for the recorded 1941 aerial-objective award context:
   https://museum.itmo.ru/pages/128/138/
5. Arne Croell, *Eastern Block LF lenses 1945–1991*, used only as secondary production-correlation evidence for the
   Russar-22 70 mm f/8, 6/4, 122° specification: https://www.arnecroell.com/eastern-block-new.pdf
6. N. N. Kachalov and V. G. Voano, *Fundamentals of Optical Glass Production* (1936), historical glass reference used for
   the Lenzos L-24→SK4 and L-28→LLF1 class mappings: https://ru.djvu.online/file/129FlTkciu6QA
7. Current authoritative glass-catalog checks recorded in the dossier: SCHOTT, OHARA, HOYA, HIKARI, CDGM, and SUMITA.
   These sources support class/coordinate auditing only; they are not treated as proof of the historical Lenzos melt
   identities.
