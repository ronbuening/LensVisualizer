## Patent Reference and Design Identification

**Patent:** US 4,214,816 — *High Speed Telephoto Lens System*\
**Filed:** September 21, 1978\
**Priority:** September 27, 1977 — Japan 52/116497\
**Granted:** July 29, 1980\
**Inventor:** Tamikazu Yamaguchi\
**Assignee:** Minolta Camera Co., Ltd.\
**Embodiment analyzed:** Example 1 / Table 1 / FIG. 1

The implemented prescription is based on Example 1 of US 4,214,816. The patent publishes a five-element,
five-group, all-spherical modified Ernostar arrangement with a positive–positive–negative–negative–positive power
sequence, normalized focal length `f = 100`, aperture `1:2.8`, and full field angle `2ω = 18°` (US 4,214,816,
PDF p. 6, Table 1; PDF p. 2, FIG. 1).

The production correlation is strong but remains an inference rather than a manufacturer-confirmed patent attribution.
A Minolta-authored 1980 system guide lists a **Minolta 135mm f/2.8 MD** with **5 elements in 5 groups**, **18°** angle
of view, **1.5 m** minimum focus, and a **55 mm** filter thread. Those facts converge with Example 1 after a uniform
1.35× focal-length scale. An earlier Minolta guide lists a 135mm f/2.8 MD TELE ROKKOR-X with a different 4-element,
4-group construction, so the patent correlation is restricted to the later five-element version rather than generalized
to every Minolta 135mm f/2.8 MD variant (Minolta, *A Guide to the Minolta SLR System of Creative Photography*,
SLR SYS 002E-R1-O100, printed p. 25; Minolta, SLR SYSX 803E-M1, 1978 specification table).

## Optical Architecture

Example 1 is a compact telephoto derivative of the Ernostar family. The patent describes the conventional Ernostar
negative section as divided into two negative menisci, producing the five-lens sequence L1 positive, L2 positive,
L3 negative, L4 negative, and L5 positive. L1 through L4 are menisci convex toward the object. The patent further places
L3 relatively close to L2 and requires the refractive power of the intervening air space to be negative (US 4,214,816,
PDF pp. 4–5, Summary and Preferred Embodiments).

The data model uniformly scales all patent dimensions by **1.35**. The final parsed prescription has an effective focal
length of **135.022 mm**, an R10-to-image back focal distance of **55.684 mm**, and an R1-to-image track of
**124.574 mm**. The resulting **TL/EFL = 0.9226** is below unity, so the implemented model satisfies the project definition
of a telephoto system. The verified surface-by-surface Petzval sum is positive at **+0.0005791 mm⁻¹**, consistent with the
patent's stated design objective of obtaining a suitable positive Petzval sum.

The first two elements form the positive front section, while L3 and L4 form the divided negative section described by
the patent. Using the final in-situ spacings, the separated L1–L2 subassembly has an equivalent focal length of
**+53.07 mm** and the separated L3–L4 subassembly **−40.63 mm**. These are subassembly powers, not cemented-group powers;
Example 1 contains no cemented interfaces. L5 is the rear positive element and contributes the final positive power after
the negative middle section.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

**nd = 1.6073, νd = 59.5. Glass: K-SK7 (SUMITA), coordinate-compatible spectral proxy; supplier unspecified. f = +98.9 mm.**

L1 is the front positive meniscus and begins the converging front section. Its role can be stated securely at the level
of system power: together with L2 it forms the strong positive front pair ahead of the divided negative section. The
patent's aberration discussion applies to the combined architecture; it does not isolate a unique coma, astigmatism, or
field-curvature correction contribution for L1 alone.

### L2 — Positive Meniscus, convex to object

**nd = 1.6700, νd = 57.1. Glass: S-LAL52 — coordinate-compatible lanthanum-crown spectral proxy; supplier unspecified. f = +112.1 mm.**

L2 is the second positive meniscus. Its rear surface and the front surface of L3 bound the air space governed by patent
condition (2). The patent explicitly treats this air-space power as part of its coma and astigmatism control strategy
(US 4,214,816, PDF p. 5, printed p. 4). The analysis therefore attributes the condition to the L2–L3 spacing and surface
pair, rather than assigning that correction to L2 by itself.

### L3 — Negative Meniscus, convex to object

**nd = 1.6727, νd = 32.2. Glass: 673322 / SF5-class (supplier unspecified). f = −465.4 mm.**

L3 is the first and much weaker of the two negative menisci. The patent identifies the division of the conventional
Ernostar negative lens into L3 and L4 as a central architectural change and places L3 close to L2. In the patent's stated
rationale, that split helps obtain a positive Petzval sum while retaining relatively high refractive indices in the
positive lenses for the broader correction balance (US 4,214,816, PDF p. 5, printed p. 4). That statement concerns the
system arrangement, not an independently demonstrated aberration contribution from L3 alone.

### L4 — Negative Meniscus, convex to object

**nd = 1.7552, νd = 27.5. Glass: 755275 / SF4-class (supplier unspecified). f = −45.0 mm.**

L4 supplies most of the standalone negative power in the divided negative section. Its index is also the quantity `NC`
used by patent condition (3). The source is internally inconsistent about the inequality: the Summary prints `NC < 1.7`,
whereas the Preferred Embodiments text and claim 1 use `NC > 1.7`. Example 1 has **NC = 1.7552**, so the implemented
condition check preserves the raw failed `< 1.7` observation while accepting the claim-1 `> 1.7` form as the supported
construction rule (US 4,214,816, PDF p. 4 / printed p. 2; PDF p. 5 / printed p. 3; PDF p. 7, claim 1).

### L5 — Positive Meniscus

**nd = 1.8052, νd = 25.4. Glass: 805254 / SF6-class (supplier unspecified). f = +156.9 mm.**

L5 is the isolated rear positive element following the long air space behind L4. Its verified standalone focal length is
positive, and it completes the patent's positive–positive–negative–negative–positive sequence. The patent does not assign
a separate named aberration-correction function to L5, so the model does not infer one from its high index or low Abbe
number alone.

## Glass Identification and Selection

The patent supplies refractive index and Abbe number coordinates but does not name glass manufacturers or melts. The data
therefore uses six-digit coordinate/class labels rather than asserting historical supplier identity.
The stored index convention is d-line (`nd`/`νd`) because the coordinates follow the standard six-digit d-line glass-code convention; the patent itself does not explicitly print the wavelength subscript.

| Element | nd | νd | Authored glass label |
|---|---:|---:|---|
| L1 | 1.6073 | 59.5 | K-SK7 (SUMITA), coordinate-compatible spectral proxy; supplier unspecified |
| L2 | 1.6700 | 57.1 | S-LAL52 — coordinate-compatible lanthanum-crown spectral proxy; supplier unspecified |
| L3 | 1.6727 | 32.2 | 673322 / SF5-class (supplier unspecified) |
| L4 | 1.7552 | 27.5 | 755275 / SF4-class (supplier unspecified) |
| L5 | 1.8052 | 25.4 | 805254 / SF6-class (supplier unspecified) |

The retained catalog audit found coordinate-compatible class matches for L1, L3, L4, and L5 in SUMITA's current and
discontinued-glass catalog material. L2 retained only a nearby candidate rather than an exact coordinate/code identity,
so no named catalog glass is promoted for that element. These catalog comparisons support class labeling only; they do
not identify the historical Minolta supplier or melt.

US 4,214,816 does not publish per-element `nC`, `nF`, `ng`, or `dPgF` values for Example 1. None are authored in the data
file, and no apochromatic or anomalous-partial-dispersion performance claim is made from the `nd`/`νd` coordinates alone.

## Focus Mechanism

The selected patent publishes a single prescription state and gives no focus-moving group, travel, variable air-gap row,
or close-focus optical prescription. The data therefore uses **NO_INTERNAL_RECONSTRUCTION** and contains no `var` focus
spacings. The **1.5 m** minimum-focus distance comes from the Minolta product guide and is retained only as product metadata;
it is not converted into an inferred internal focusing law.

Because the available evidence does not establish whether the production lens focuses by whole-lens translation or by a
specific internal group motion, this analysis does not assign a more specific focus mechanism.

## Conditional Expressions

The final scaled model satisfies the applicable numerical conditions after the patent's typography is interpreted in a
dimensionally consistent form.

- **Condition (1):** `0.2 < DB/DA < 0.45`. The final model gives **DB/DA = 0.332932**, inside the stated interval.
- **Condition (2):** the verified reading is `(1 − NA)/RA + (NB − 1)/RB`. The scaled model gives
  **−0.00359655 mm⁻¹**, between the scaled bounds **−0.00592494 mm⁻¹** and **−0.000740618 mm⁻¹**.
- **Condition (3):** the Summary's `NC < 1.7` fails for Example 1 at **NC = 1.7552**. The Preferred Embodiments text and
  claim 1 use `NC > 1.7`, which passes and agrees with the worked examples. Both source forms remain documented.
- **Conditions (4)–(6):** not applicable to Example 1. The patent limits those conditions to the alternative embodiment
  in which the fourth lens is a cemented doublet.

The condition text is found in US 4,214,816, PDF pp. 4–5, with claim language on PDF p. 7. The Example 1 prescription is
Table 1 on PDF p. 6.

## Verification Summary

The patent prescription is normalized to `f = 100`; all dimensional prescription values are uniformly scaled by 1.35 in
the implemented model. Example 1 is entirely spherical, so no conic constant or aspheric-coefficient conversion is
required. The infinity image plane is not tabulated by the patent; the final R10-to-image spacing is the independently
recomputed paraxial back focal distance.

The patent also does not publish a physical stop position or diameter. The single modeled `STO` is placed **4.25 mm**
behind surface 8 within the long D8 air space, and its **13.4478 mm** semi-diameter is calibrated so the parsed model gives
**f/2.8**. The resulting entrance-pupil diameter is **48.2223 mm**. Agreement with f/2.8 is therefore calibration-dependent
and is not independent evidence of the production diaphragm dimensions.

Surface semi-diameters are likewise not patent data. The modeled element pairs use **24.3, 22.5, 20.7, 17.0, and
14.4 mm** semi-diameters from L1 through L5. Portable edge-thickness, actual spherical rim-slope, shared-gap intrusion,
and the declared exact meridional ray samples pass for these authored values. Production LensVisualizer render-trim validation was not executed for this model, so no render-trim result is claimed.

The normalized source prescription uses **R5 = +188.42** and **R7 = +113.9**. These values are visible in the rendered
Table 1 and are independently reproduced in claim 6; OCR readings that dropped the leading `1` are transcription errors,
not alternate patent values.

## Sources and References

1. Tamikazu Yamaguchi, **US 4,214,816, “High Speed Telephoto Lens System,”** Minolta Camera Kabushiki Kaisha,
   granted July 29, 1980. Primary prescription: FIG. 1 and Table 1, Example 1; conditions on PDF pp. 4–5; claim 1 and
   claim 6 on PDF p. 7.
2. Minolta Camera Co., Ltd., **A Guide to the Minolta SLR System of Creative Photography**, document
   `SLR SYS 002E-R1-O100`, 1980, printed p. 25 / scan p. 27. Archived scan:
   https://minolta.suaudeau.eu/ressources_iconographiques/system_SLR_MD1.pdf
3. Minolta Camera Co., Ltd., **A Guide to the Minolta SLR System of Creative Photography**, document
   `SLR SYSX 803E-M1`, 1978. Used to distinguish the earlier 4-element/4-group 135mm f/2.8 MD TELE ROKKOR-X variant.
   Archived scan: https://device.report/m/a2160a7450813b2312ff70eaed39a8e0177d86b7887837dc9ce212a6d674bc4c.pdf
4. SUMITA OPTICAL GLASS, Inc., **Zemax catalog — all glasses including discontinued ones**, revision 2026-08-26.
   Used only for coordinate/class comparison, not historical supplier attribution:
   https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf
