# Rodenstock Sironar-N 100mm f/5.6

## Patent Reference and Design Identification

**Patent:** DE 27 29 831 B1
**Application Number:** P 27 29 831.3-51
**Filed:** 1 July 1977
**Published:** 16 March 1978
**Inventors:** Franz Schlegel; Josef Weiss
**Applicant:** Optische Werke G. Rodenstock, München
**Title:** Sechslinsiges fotografisches Objektiv
**Classification:** G 02 B 9/58
**Embodiment analyzed:** Sole numerical example, embedded in Claim 1

DE 27 29 831 B1 discloses a six-lens photographic objective for medium- and large-format use. The patent contains one numerical prescription, normalized to $f' = 100$ with an aperture ratio of $1:5.8$. The patent itself does not print a commercial lens name; this file treats the prescription as the Rodenstock Sironar-N 100mm f/5.6 because the formula, aperture, coverage, element count, design type, and production period all converge on that family.

The production identification is therefore strong but not patent-explicit. The patent text states that the construction is especially useful at focal lengths from 135 mm to 300 mm, but the numerical prescription is already normalized at $f' = 100$. The 100 mm production entry in Rodenstock catalog literature is therefore treated as a direct use of the normalized prescription rather than as a scaled 135–300 mm example.

The main identification points are as follows:

1. The patent prescription is a 6-element / 4-group plasmat: a cemented doublet, a positive meniscus, the stop region, a positive meniscus, and a second cemented doublet.
2. The patent aperture ratio is $1:5.8$, consistent with a marketed f/5.6 lens after ordinary commercial rounding.
3. The patent claims about 73° field at f/22. A Rodenstock catalog table lists the Sironar-N 5.6/100 mm for 6×9 cm with a 151 mm image circle and a 72° field angle at f/22; this is close to the 148 mm image circle implied by a rectilinear 73° field at $f = 100$.
4. The design is all-spherical and uses conventional crown/flint glass pairings rather than ED or aspherical elements.
5. The patent date, assignee, and plasmat construction fit the Sironar/Sironar-N development line.

The patent cites DE-PS 14 72 192 as prior art. Its stated improvement is a wider usable field, better contrast and resolution across the image, improved brightness, and a mechanically simpler construction with less sensitivity to tight mechanical tolerances.

## Optical Architecture

The prescription is a six-element plasmat arranged nearly symmetrically around a central aperture stop. It is not a telephoto design: the total optical distance from $r_1$ to the paraxial image plane is 114.29 mm at $f' = 100$, so the total-track-to-EFL ratio is about 1.14.

The four air-separated groups are:

| Group | Elements | Form | Standalone group focal length, e-line |
|---|---:|---|---:|
| G1 | L1 + L2 | cemented positive/negative doublet with a plano cement interface | −845.11 mm |
| G2 | L3 | positive meniscus, convex toward the object | +128.29 mm |
| G3 | L4 | positive meniscus, concave toward the object | +136.97 mm |
| G4 | L5 + L6 | cemented negative/positive doublet with a plano cement interface | +1533.72 mm |

The patent prose describes the outer cemented members as diverging cemented components. The front doublet computes as weakly negative, as stated. The rear doublet computes as very weakly positive in the numerical prescription. That is not a transcription error; the paraxial calculation follows directly from the published radii, thicknesses, and indices. Because the rear doublet is only about +0.065 diopters at the normalized $f' = 100$ scale, the functional design still behaves as a plasmat in which the stop-adjacent menisci carry most of the system power.

The aperture stop is located 5.79 units after $r_5$. The patent also places a fixed stray-light baffle between the working stop and $r_6$, with 4.68 units between the working stop and baffle and 1.47 units between the baffle and $r_6$. The `.data.ts` file omits that baffle as a mechanical surface and folds those two distances into a single 6.15-unit post-stop air gap.

The plano cemented surfaces at $r_2$ and $r_9$ are an explicit manufacturing simplification. The patent also notes direct edge seating at the surfaces drawn as $r_3/r_4$ and $r_7/r_8$, which reduces barrel complexity relative to a design whose lens edges require more precisely shaped retaining shoulders.

## Element-by-Element Analysis

### L1 — Plano-Convex Positive

$n_e = 1.6055$, $\nu_e = 60.35$. Glass: SK14 / N-SK14 class (SCHOTT). Standalone $f = +31.05$ mm.

L1 is the front positive element of the first cemented doublet. Its object-side surface is strongly convex ($r_1 = +18.80$), while the cemented rear interface is flat ($r_2 = \infty$). It supplies strong positive power that is largely cancelled by L2, leaving the cemented group weakly negative overall.

The high-index, low-dispersion SK14-class crown gives the doublet a compact positive member without excessive longitudinal color. Its use in both L1 and L6 is part of the near-symmetric glass layout.

### L2 — Plano-Concave Negative

$n_e = 1.5542$, $\nu_e = 49.31$. Glass: unmatched vintage light-flint / barium-light-flint class. Standalone $f = -25.53$ mm.

L2 is the negative partner of the front doublet. Its front side is the flat cement interface; its rear surface is $r_3 = +14.15$, giving a strong negative element in the patent sign convention.

The higher dispersion of L2 relative to L1 provides the achromatizing counter-power in the cemented group. The specific $n_e/\nu_e$ pair does not match a current public catalog glass closely enough for a confident name, so the data file labels it as unmatched rather than forcing a circular catalog identification.

### L3 — Positive Meniscus, Convex to Object

$n_e = 1.5187$, $\nu_e = 63.96$. Glass: BK7 / N-BK7 class (SCHOTT). Standalone $f = +128.29$ mm.

L3 is the front stop-adjacent positive meniscus. Both radii are positive ($r_4 = +22.75$, $r_5 = +33.79$), so the element is convex toward the object and concave toward the stop.

This element carries a large share of the system's positive power. The BK7-class crown keeps dispersion low while the meniscus bending controls the oblique bundles approaching the stop.

### L4 — Positive Meniscus, Concave to Object

$n_e = 1.5187$, $\nu_e = 63.96$. Glass: BK7 / N-BK7 class (SCHOTT). Standalone $f = +136.97$ mm.

L4 is the rear stop-adjacent positive meniscus. Its radii are both negative ($r_6 = -44.42$, $r_7 = -27.63$), giving the mirror-side counterpart of L3 with deliberate asymmetry in curvature and power.

The L3/L4 pair is the principal power core of the lens. Their similar glass and broadly symmetric placement reduce lateral color and distortion, while their non-identical curvatures help balance coma, astigmatism, and field curvature over the wide field.

### L5 — Plano-Concave Negative

$n_e = 1.5542$, $\nu_e = 49.31$. Glass: unmatched vintage light-flint / barium-light-flint class. Standalone $f = -28.13$ mm.

L5 is the negative member of the rear cemented doublet. Its front surface is $r_8 = -15.59$ and its rear cemented surface is flat ($r_9 = \infty$).

It performs the same chromatic-counterpower role as L2, but the rear doublet is not an exact mirror of the front doublet. That asymmetry is visible in the computed doublet powers: G1 is weakly negative, while G4 is extremely weakly positive.

### L6 — Plano-Convex Positive

$n_e = 1.6055$, $\nu_e = 60.35$. Glass: SK14 / N-SK14 class (SCHOTT). Standalone $f = +31.84$ mm.

L6 is the final positive element. Its front cement interface is flat and its image-side surface is $r_{10} = -19.28$. It completes the rear doublet and sets the final exit geometry into the long back focal space.

The L1/L6 crown pairing and the L2/L5 flint pairing preserve the basic plasmat symmetry, while the unequal radii and thicknesses provide the departures needed for the larger field claimed by the patent.

## Glass Identification and Selection

The patent uses $n_e$ and $\nu_e$, not the usual $n_d$ and $\nu_d$. The patent text explicitly states that the refractive index and Abbe number are specified for the spectral e-line. For that reason, the `.data.ts` file stores the patent e-line values in the fields named `nd` and `vd`; this is an implementation compromise made to preserve the published paraxial prescription.

| Patent glass | Patent $n_e$ | Patent $\nu_e$ | Catalog identification | Catalog $n_d$ / $\nu_d$ | Catalog $n_e$ / $\nu_e$ | Used in |
|---|---:|---:|---|---:|---:|---|
| A | 1.6055 | 60.35 | SK14 / N-SK14 (SCHOTT) | 1.60311 / 60.60 | 1.60548 / 60.34 | L1, L6 |
| B | 1.5542 | 49.31 | Unmatched vintage light-flint / BaLF-class glass | — | — | L2, L5 |
| C | 1.5187 | 63.96 | BK7 / N-BK7 (SCHOTT) | 1.51680 / 64.17 | 1.51872 / 63.96 | L3, L4 |

Glass A matches SCHOTT N-SK14 essentially exactly at the e-line. The modern datasheet gives $n_e = 1.60548$ and $\nu_e = 60.34$, which is within transcription precision of the patent's 1.6055 / 60.35.

Glass C likewise matches SCHOTT N-BK7 at the e-line. The modern datasheet gives $n_e = 1.51872$ and $\nu_e = 63.96$, again within transcription precision.

Glass B remains unresolved. SCHOTT LLF1, for example, is too low in dispersion number ($\nu_e = 45.47$) and slightly low in index ($n_e = 1.55099$). Ohara S-TIL6-family and other current light-flint candidates are also not close enough to assign a catalog name. The data file therefore uses an explicit `Unmatched` glass annotation. That is preferable to naming a plausible but numerically wrong catalog glass.

No aspherical, ED, fluorite, or anomalous-partial-dispersion element is specified in the patent. The chromatic correction is ordinary achromatization by crown/flint pairing rather than apochromatic correction in the later ED-glass sense.

## Focus Mechanism

The lens focuses by unit extension. In ordinary large-format use, the camera bellows moves the lens and/or film standard; the optical group spacings do not change.

The patent does not publish close-focus spacings or a minimum object distance. The `.data.ts` file therefore models only a representative unit-focus extension: the infinity BFD is 83.112921 mm, and the close-focus UI endpoint uses 94.021521 mm, corresponding to an object approximately 1.0 m in front of the first surface in the paraxial model. This is a visualization endpoint, not a manufacturer MFD claim.

## Verification Summary

The prescription was re-extracted from the patent table and retraced independently using a paraxial $y, n u$ ray trace. The aperture stop was placed after $l_2 = 5.79$, and the fixed baffle gap was omitted from optical interaction by combining $l_3 + l_4 = 6.15$ into the post-stop air space.

| Quantity | Computed from re-extracted prescription | Patent value / basis |
|---|---:|---:|
| Effective focal length, e-line | 99.998109 mm | $f' = 100$ |
| Back focal distance from $r_{10}$ | 83.112921 mm | not stated |
| $r_1$ to $r_{10}$ axial track | 31.180000 mm | prescription sum |
| $r_1$ to image plane | 114.292921 mm | computed |
| Entrance-pupil semi-diameter at 1:5.8 | 8.620527 mm | derived |
| Physical stop semi-diameter at 1:5.8 | 6.932556 mm | derived |
| Petzval sum, $\sum \phi/(n n')$ | +0.001126714 | computed |
| Petzval radius | +887.54 mm | computed |
| Full field from patent | about 73° | patent text |
| Rodenstock catalog field / image circle | 72° / 151 mm | production table |
| Rectilinear image circle implied by 73° at $f = 100$ | about 148.0 mm | computed |

The surface-by-surface Petzval calculation uses $\phi/(n n')$ at each refracting surface, not a thin-lens element approximation. The resulting Petzval radius is about 8.9 times the focal length, which is consistent with the flat-field tendency expected from a plasmat.

The standalone element focal lengths, all computed in air at the patent e-line, are: L1 +31.05 mm, L2 −25.53 mm, L3 +128.29 mm, L4 +136.97 mm, L5 −28.13 mm, and L6 +31.84 mm. The cemented doublet powers are far weaker than their component powers because the positive and negative elements largely cancel.

## Data-File Implementation Notes

The data file follows the patent's optical order from $r_1$ to $r_{10}$ and adds a single `STO` surface in the $r_5$–$r_6$ air space. The fixed stray-light baffle is excluded because it is mechanical, not a refracting or reflecting optical surface.

Semi-diameters are estimated. The patent does not publish clear apertures, and the two tight air gaps adjacent to the menisci prevent using a naive full-field marginal-ray envelope as the lens outline. The final SDs are therefore deliberately conservative and should be read as renderer-safe approximate clear apertures, not as measured production lens diameters. The limiting signed cross-gap clearances are the $r_3$–$r_4$ and $r_7$–$r_8$ air gaps; at the modeled shared semi-diameter of 7.78 mm, their remaining axial clearances are about 0.131 mm and 0.128 mm, respectively.

The f-stop controls follow the production catalog rather than the patent claim: the patent design aperture is 1:5.8, but the cataloged Sironar-N 100 mm is 1:5.6 and the 100 mm shutter entries stop down to f/45.

## Design Heritage and Context

The design belongs to the plasmat lineage: two weak outer cemented components and two stop-adjacent positive menisci arranged around a central aperture. The patent's contribution is not a new lens type but a rebalanced six-element plasmat with flatter cemented interfaces, wider claimed field, and simplified mechanical seating.

The exact symmetry is broken in the radii, thicknesses, and doublet powers. The identical glass pairs across the stop preserve chromatic balance, while the unequal curvatures tune the off-axis aberrations. That is the normal design logic of a practical wide-field plasmat: symmetry is used where it helps distortion and lateral color, then relaxed where coma, astigmatism, and manufacturability require it.

## Sources

- DE 27 29 831 B1, "Sechslinsiges fotografisches Objektiv," Optische Werke G. Rodenstock, published 16 March 1978.
- DE-PS 14 72 192, cited as prior art in DE 27 29 831 B1.
- Rodenstock, `Objektive für Großformat-Kameras`, Sironar-N catalog tables for 5.6/100 mm.
- SCHOTT Optical Glass Datasheet: N-SK14.
- SCHOTT Optical Glass Datasheet: N-BK7.
- SCHOTT Optical Glass Datasheet: LLF1, used only as a rejected comparison for the unmatched patent glass.
