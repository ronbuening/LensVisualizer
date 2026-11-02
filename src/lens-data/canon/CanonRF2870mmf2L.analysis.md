# Canon RF 28–70mm f/2 L USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2020-118807 A\
**Inventor:** Kohei Kimura (木村 公平)\
**Applicant:** Canon Inc.\
**Filed:** January 22, 2019\
**Published:** August 6, 2020\
**Example details:** Example A main optical system, PDF pp. 16–18; Fig. 1 and corresponding Fig. 2 on p. 29. This is the main lens used with the converter invention, separate from converter Numerical Examples 1–5.

The source main optical system is a four-group 19-element, 13-group zoom with printed f 28.90/50.00/67.90 mm and F2.06. Its configuration, special-coordinate positions and focal/aperture range support the existing RF 28–70mm f/2 L product correlation. The source is a converter-device patent using reference main lenses; it does not identify a manufacturer-confirmed production prescription, historical glass melt or optical manufacturing process. The 19/13 catalog count excludes the explicitly listed camera-side CG plate, which is nevertheless modeled and traced.

Completed source/shape/glass and physical rear-plate coverage dated September 23, 2026 is reused, together with May 19/May 31/July 29 material history. This October 30 follow-up reopens source-inferred cap/shoulder defects and prior paraxial-estimator allowances, directly against the same original `patents/JP2020118807A.pdf`. Their historical dates are preserved in the audit. No converter or different main-lens example supplies replacement values.

## Optical Architecture

The functional groups are G1(+) G2(−) G3(+) G4(+). Their source powers are +104.99/−19.17/+47.05/+44.67 mm, reproduced as +104.986011/−19.175073/+47.052502/+44.674832 mm. G1 is a negative/positive front doublet and a positive singlet; G2 is the negative variator with one singlet and two cemented pairs. G3 follows the stop and contains two positive singlets and a cemented pair. G4 contains the rear positive singlets, two more pairs and the double-aspheric L17. Six curved cemented doublets are retained.

All source R/d, five aspheres and four authored zoom-gap arrays remain unchanged. With the image fixed, G1/G3/G4 move objectward, while G2 moves slightly imageward with a small reversal near tele, as the numerical gaps and Fig. 1 arrows show. Only three infinity stations are published; interpolation is illustrative. The focus group is not identified numerically, and all authored near gaps equal infinity gaps. The focus control remains inert; the catalog 0.39 m figure is retail metadata, not a modeled conjugate.

Source S22 is the flat mechanical flare-cut plane AP with d22 = −2.59 mm. The existing model omits that plane and stores D21 = printed D21 − 2.59, retaining the source relative positions. No AP aperture is printed, so its flare vignetting is not independently simulated. This is an explicit retained modeling limit, without changing the optical prescription to fit an unknown mechanical aperture.

## Element and Medium Review

All 19 drawn elements and the CG plate were checked against the source rows. Every listed curve is an unchanged compatible spectral proxy, without proof of historical supplier, melt, chemistry or manufacturing process.

| Medium | Source nd / νd  | Current compatible curve | Scope                             |
| ------ | --------------- | ------------------------ | --------------------------------- |
| L1     | 1.80810 / 22.80 | S-NPH1                   | Drawn source medium               |
| L2     | 1.72916 / 54.70 | S-LAL18                  | Drawn source medium               |
| L3     | 1.77250 / 49.60 | S-LAH66                  | Drawn source medium               |
| L4     | 1.76902 / 49.30 | MC-TAF101-100            | Drawn source medium               |
| L5     | 1.76385 / 48.50 | S-LAH96                  | Drawn source medium               |
| L6     | 1.85478 / 24.80 | S-NBH56                  | Drawn source medium               |
| L7     | 1.48749 / 70.20 | S-FSL5                   | Drawn source medium               |
| L8     | 1.88300 / 40.80 | TAFD30                   | Drawn source medium               |
| L9     | 1.72916 / 54.70 | S-LAL18                  | Drawn source medium               |
| L10    | 1.80400 / 46.60 | S-LAH65V                 | Drawn source medium               |
| L11    | 1.73800 / 32.30 | S-NBH53V                 | Drawn source medium               |
| L12    | 1.49700 / 81.50 | S-FPL51                  | Drawn source medium               |
| L13    | 1.43875 / 94.70 | S-FPL53                  | Drawn source medium               |
| L14    | 1.59522 / 67.70 | S-FPM2                   | Drawn source medium               |
| L15    | 1.49700 / 81.50 | S-FPL51                  | Drawn source medium               |
| L16    | 1.80610 / 33.30 | NBFD15                   | Drawn source medium               |
| L17    | 1.85400 / 40.40 | L-LAH85V                 | Drawn source medium               |
| L18    | 1.48749 / 70.20 | S-FSL5                   | Drawn source medium               |
| L19    | 2.00100 / 29.10 | TAFD55                   | Drawn source medium               |
| CG     | 1.51633 / 64.10 | S-BSL7                   | Traced physical camera-side plate |

The source defines d 587.56/F 486.13/C 656.27/g 435.84 nm and νd=(Nd−1)/(NF−NC) at paragraph 0090, PDF p. 15. All 20 media now explicitly use the d reference. No individual line indices or partial-dispersion ratios are published for these rows, and no per-position nC/nF/ng/dPgF override exists. All 20 compatible curve selections and numerical nd/νd values remain unchanged. APD tags stay inferred from qualified catalog curves; the patent does not label these positions anomalous or identify manufacturer UD/chemistry classes.

## Focus and Special Controls

The source describes the main lens's focus only generically; it supplies no finite-focus prescription or identified moving focus group. Every gap has identical infinity/near values. At all 65 sampled zoom positions, focus 0→1 changes no position or iris. Collimated tracing at a nonzero inert control is not an actual finite-object validation. No finite-focus or production MFD performance is claimed. There is no numerical moved-IS model here.

## Aspherical Surfaces and Printed Equation Qualification

S6A/S13A/S18A/S30A/S31A retain all five source K=0 constants and 25 published A4–A12 coefficients from PDF pp. 17–18. The original Eq. 1 raster at p. 16 prints numerator 1/R rather than H²/R, even though paragraphs 0094–0096 define X as axial displacement, H as height and R as paraxial radius. The literal numerator has inconsistent dimensions and gives a nonzero base at H=0. The printed equation also includes A2H², but none of the five selected coefficient lists publishes A2; the definition prose lists A4 onward.

The current standard H²/R base and existing absent-A2-as-zero convention are retained as a qualified interpretation. The dimensions/vertex definition and the independently matching source group powers support it. No nonzero A2 is invented to repair the missing numerator, and no R, K, coefficient or spacing is fitted to a figure. The printed equation issue is recorded separately in `source.errata`; literal equation parity is not claimed.

## Physical Cover Plate

Original surfaces 35–36 specify CG thickness 1.96 mm, nd 1.51633/νd 64.1, followed by air 2.75 mm. D34 is the physical lens-to-CG gap 15.00/24.22/29.66 mm, not an air-equivalent gap. The existing `rearPlates` stack preserves all these source quantities and traces both flat interfaces while hiding the plate from the drawn element list. Its S-BSL7 curve is a qualified proxy. The source gives no numerical CG clear diameter; the generated rear-plate rim remains non-clipping by the data contract, so this is not an independently verified plate-edge or production sensor-stack claim. The source's BF/length conventions and the physical stack's additional t−t/n track must remain distinct.

## Native Outline and Retained Constraints

Fig. 1 is an embedded 1182×1796 raster at native 400 ppi, rotated without resampling. Its S1–S34 optical vertex span is about 1205 px / 138.46 mm, giving 8.70 px/mm. Practical rim uncertainty is ±0.6 mm, allowing for ink and intersecting rays. Vector-table page renders at 180 dpi aid reading text but do not raise this figure's native resolution. Leaders, rays, brackets, AP/SP and image-plane marks were excluded from optical rim measurements.

Thirteen inferred caps change to the native optical curve ends; all remaining caps are retained where uncertainty or source geometry limits the representation. S7 changes 16.0→15.1 and S32 changes 15.4→14.8, removing earlier allowances chosen to inflate the paraxial field estimator. Actual source-height chiefs still clear. S7 outer 21.0, S29 outer 15.5 and S32 outer 18.4 are resolved free-air shoulders represented with `rimExtensionSd`; their clear caps remain separate. These are not opaque bonded-interface lands. Every element, concavity, aspheric end and curved cemented interface was inspected.

The drawing-inferred full-height L17 trial 15.5/15.5 is rejected. With the neighboring supported shoulders it gives S29–S30A intrusion 4.209 mm in physical gap 3.840 mm (guard 3.456), and S31A–S32 intrusion 3.253 in physical 3.420 (guard 3.078). The former physically overlaps; the latter retains a positive physical gap but fails the unchanged guard. L17 clear 13.7/14.5 and tapered closures stay constrained; no speculative aspheric shoulder is invented to hide the mismatch. Its larger drawn blank is not fully reproduced by the model.

S8 retains 14.8 mm within native uncertainty. A 15.15 mm trial gives S7 land intrusion 8.962 in physical 9.560 mm, exceeding guard 8.604; it is rejected without altering R/d or guards. The retained unequal optical caps at D1/D3/D4 do not reproduce every flat bonded blank margin. No opaque interface land, resin wing, inferred cut or unsupported equal-height block is added. Source fidelity and these explicit geometric limitations are separate conclusions.

## Verification Summary

Surface and image-circle checks pass. All 65 infinity aperture and generic 21.65 mm field checks pass existing tolerances. The geometry-identical 65-position clone has zero position/iris difference. All 1,365 contour states contain 19 connected, closed, finite paths with zero hidden renderer trimming. Actual final source-scale and three-zoom/middle-control SVGs were compared with the native figure. CG is traced but intentionally not drawn.

The current derived iris radii are 13.202218/14.889121/15.968497 mm, paraxial F2.06. Real collimated EFL/input-diameter ratios are 2.110866/2.144038/2.166898. The older 13.545413/15.554651/16.905398 mm figures are heights of nominal paraxial input rays at the stop, not live iris radii. No source physical iris diameter is published; the existing derived rule stays unchanged.

The 65 × 3 × 97 generic-field grid traces 18,915 collimated current-iris rays, with clear axial/chief rays, 2,779 ordinary pupil clips and 659 independently bounded cap misses (609 first-surface, 50 next), zero seed/unexplained/unaimed failures. The three source 21.64 mm endpoint checks trace 873 rays with clear axial/chief rays, 131 ordinary clips and 28 bounded cap misses (24 first/four next). These are sampled aperture limits, not full-pupil or finite-focus clearance. No inferred cut exists.

The worst sampled intermediate infinity displacement after the physical CG is −0.451194 mm at zoom 0.265625. That illustrative interpolation is not a published focus-preserving cam. The original three source stations, R/d, AP fold, rear stack and controls remain unchanged. Retained L17/air-gap and bonded-margin limits, omitted AP vignetting, assumed CG aperture, unavailable finite focus and historical material/production identity remain explicit.

## Sources and Production Correlation

The primary evidence is the same untracked original `patents/JP2020118807A.pdf`: paragraph 0090 p. 15 for spectral definitions; paragraphs 0094–0096 p. 16 and selected main Example A pp. 16–18; native Fig. 1/Fig. 2, p. 29. Native figure dimensions and rendered vector-table resolution are distinguished above. Earlier material/production studies retain their actual dates in the audit and are not presented as fresh checks. The existing RF 28–70 product correlation does not prove an exact production prescription, proprietary glass chemistry or process.
