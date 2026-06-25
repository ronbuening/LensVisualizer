# Rodenstock Geronar 210 mm f/6.8

## Patent Reference and Design Identification

**Patent:** DE 28 18 394 B1
**Application Number:** P 28 18 394.0-51
**Filed:** 27 April 1978
**Published:** 12 April 1979
**Inventors:** Franz Schlegel; Josef Weiß
**Applicant:** Optische Werke G. Rodenstock, 8000 München
**Title:** Fotografisches Aufnahmeobjektiv für Großformat
**Classification:** G 02 B 9/16
**Embodiment analyzed:** Sole numerical example

DE 28 18 394 B1 discloses a three-element photographic taking lens for large-format work. The claim describes two positive collecting lenses, one intervening negative lens, and a diaphragm between the two rear lenses. The numerical example is normalized to $f' = 100$ at $1{:}6.8$, and the patent text states that the preferred objective can have a focal length of 210 mm.

The sole example maps to the Rodenstock Geronar 210 mm f/6.8 by convergent evidence:

1. **Configuration:** the patent prescription is a 3-element / 3-group positive-negative-positive triplet, matching the documented Geronar architecture.
2. **Focal length:** the patent is normalized to $f' = 100$ and explicitly states a preferred 210 mm production focal length.
3. **Aperture:** the patent aperture is $1{:}6.8$, matching the production lens designation.
4. **Coverage:** the patent states a full field of at least 56° and vignetting-free operation at half aperture ("bei halber Blende"). At 210 mm, 56° corresponds to an image circle of about 223 mm, just over the 5×7 inch diagonal of 218.5 mm. Archival/retailer specifications for the production lens commonly list a 60° field and approximately 230-242 mm image-circle class; the original draft's 340 mm f/22 claim was not retained because it could not be tied to a reliable Geronar 210 mm source.
5. **Glass palette:** the patent explicitly names SK 16, LLF 1, and BK 7, and describes them as inexpensive glasses. This aligns with the Geronar's position as Rodenstock's economy large-format triplet rather than a Sironar-family plasmat.
6. **Applicant and date:** Rodenstock filed the application in April 1978, consistent with the production era of the Geronar / Caltar II-E 210 mm f/6.8.

## Optical Architecture

The design is a Cooke-type triplet: three air-separated singlets in positive-negative-positive order. L1 is a strong front positive element, L2 is a thin biconcave negative element close behind it, and L3 is a much weaker rear positive element beyond the stop. All six refracting surfaces are spherical.

The patent table gives the first air space as $l_1 = 1.62$ and the second air space as $l_2 = 7.74 + 2.29 = 10.03$ on the $f' = 100$ scale. The numerical value $l_2/l_1 = 10.03/1.62 = 6.19$ is the tabulated relationship behind the patent's approximate 6:1 air-space statement. The figure places the stop closer to L2, so the data file uses $r_4 \rightarrow \mathrm{STO} = 2.29$ and $\mathrm{STO} \rightarrow r_5 = 7.74$, before the ×2.1 production scaling.

The standalone element powers are deliberately strong in the first two elements: at production scale, L1 is approximately +52.1 mm and L2 approximately −46.3 mm, while L3 is approximately +200.1 mm. On the patent's normalized scale these are +24.8, −22.0, and +95.3 respectively. The front positive-negative pair supplies most of the chromatic and spherical-aberration balancing, while the rear positive element completes the image formation and back-focus placement.

## Element-by-Element Analysis

### L1 — Biconvex Positive, Nearly Plano-Convex

$n_d = 1.62041$, $\nu_d = 60.32$. Glass: SK 16 / N-SK16 (Schott). $f = +52.1$ mm at 210 mm scale. Patent e-line values: $n_e = 1.6229$, $\nu_e = 60.07$.

L1 has $r_1 = +15.85$ and $r_2 = -490.61$ on the normalized patent scale. The rear radius is about 31 times weaker than the front radius, so the element behaves almost as a plano-convex collector with the steep surface facing the object. This geometry gives the triplet its strong front positive power without requiring exotic glass.

SK 16 is a dense crown. The modern Schott N-SK16 datasheet gives $n_d = 1.62041$, $\nu_d = 60.32$, $n_e = 1.62286$, and $\nu_e = 60.08$, matching the patent's e-line values within the patent's rounding.

### L2 — Biconcave Negative

$n_d = 1.54814$, $\nu_d = 45.75$. Glass: LLF 1 (Schott). $f = -46.3$ mm at 210 mm scale. Patent e-line values: $n_e = 1.5510$, $\nu_e = 45.47$.

L2 has $r_3 = -72.10$, $r_4 = +14.54$, and a center thickness of only 0.38 on the normalized scale. It is a thin biconcave negative element, with the stronger curvature on the image side. Its close spacing behind L1 forms the correcting counter-power that a Cooke-type triplet needs for axial color and spherical-aberration balance.

LLF 1 is an extra-light flint. Its $\nu_d = 45.75$ puts it in flint territory despite its moderate index. It supplies the required dispersion contrast against the two crown elements without the density and cost of heavier flints.

### L3 — Biconvex Positive, Weak Rear Collector

$n_d = 1.51680$, $\nu_d = 64.17$. Glass: BK 7 / N-BK7 (Schott). $f = +200.1$ mm at 210 mm scale. Patent e-line values: $n_e = 1.5187$, $\nu_e = 63.96$.

L3 has $r_5 = +179.80$ and $r_6 = -67.33$ on the normalized scale. The front surface is weakly curved and the rear surface carries the stronger curvature, making L3 approximately the mirror image of L1 in bending but with far weaker net power. Its principal function is not to dominate system power but to close the triplet, set the final conjugate, and contribute to field and astigmatic balance.

BK 7 is the standard borosilicate crown. The modern Schott N-BK7 datasheet gives $n_d = 1.51680$, $\nu_d = 64.17$, $n_e = 1.51872$, and $\nu_e = 63.96$, again matching the patent's e-line data to the published precision.

## Glass Selection

The patent explicitly names SK 16, LLF 1, and BK 7 and describes the group as inexpensive glasses. This is a central design point. The cited prior art, DE-AS 27 06 498, used LAK 9 and SF 5 and covered only 38°. The present patent instead accepts a slower $f/6.8$ aperture and uses ordinary Schott crown/flint glasses to obtain a substantially wider field.

| Element | Patent glass | Data-file glass | $n_d$ | $\nu_d$ | $\Delta P_{g,F}$ | Role |
|---|---:|---:|---:|---:|---:|---|
| L1 | SK 16 | N-SK16 / SK16 (Schott) | 1.62041 | 60.32 | −0.0011 | Dense crown front positive |
| L2 | LLF 1 | LLF1 (Schott) | 1.54814 | 45.75 | −0.0009 | Extra-light flint negative corrector |
| L3 | BK 7 | N-BK7 / BK7 (Schott) | 1.51680 | 64.17 | −0.0009 | Borosilicate crown rear positive |

All three glasses lie close to the Schott normal partial-dispersion line. The chromatic correction is therefore a conventional achromatic balance, not an apochromatic or anomalous-partial-dispersion strategy. The data file includes $n_C$, $n_F$, $n_g$, and $\Delta P_{g,F}$ from Schott datasheets so the chromatic model is not limited to Abbe-only interpolation.

## Focus Mechanism

The patent does not publish moving-group data and does not describe an internal focus mechanism. As a view-camera large-format lens, the Geronar focuses by moving the complete optical assembly relative to the film plane using the camera's bellows or rail. There are no floating or internal focusing groups in the patent prescription.

The `.data.ts` file therefore models focusing as unit focus by varying only the final back-focus gap. Because the lens itself has no fixed minimum focus distance, the close-focus endpoint in the data file is an illustrative 2.0 m object distance from the image plane. The corresponding d-line back-focus gap is 206.359 mm, compared with 177.897 mm at infinity; this is a +28.462 mm unit-focus extension and corresponds to a paraxial magnification of approximately 0.135× when the object distance is measured from the image plane. This focus endpoint is an implementation convenience, not a patent-published close-focus specification.

## Verification Summary

The prescription was re-entered from the patent table and independently traced using a paraxial $y$-$n u$ matrix trace. The patent uses e-line indices, while the data file uses Schott d-line catalog indices.

| Quantity | Basis | Computed value | Notes |
|---|---:|---:|---|
| EFL, normalized | e-line patent data | 99.97575 | Matches $f'=100$ to −0.024% |
| BFD, normalized | e-line patent data | 84.63686 | From last surface to paraxial image |
| EFL, normalized | d-line Schott data | 100.04930 | Slightly longer because d-line indices differ from e-line |
| BFD, normalized | d-line Schott data | 84.71282 | Stored data-file basis |
| EFL, production scale | d-line Schott data, ×2.1 | 210.10354 mm | Data-file design focal length |
| BFD, production scale | d-line Schott data, ×2.1 | 177.89691 mm | Data-file infinity BF gap |
| Front vertex to image | d-line Schott data, ×2.1 | 216.51591 mm | Total optical track including BFD |
| Entrance-pupil diameter | d-line, f/6.8 | 30.89758 mm | Stop SD set to 13.342 mm after front-group pupil magnification at the printed stop position |
| 5×7 half field | 177.8 × 127 mm frame | 27.4735° | Diagonal 218.499 mm |

Standalone element focal lengths at production scale are L1 = +52.069 mm, L2 = −46.284 mm, and L3 = +200.118 mm. These values confirm the patent's description of the two entry-side elements as strongly powered lenses.

The surface-by-surface d-line Petzval sum is +0.00263003 on the normalized $f'=100$ scale. After ×2.1 scaling this becomes +0.00125240 mm⁻¹, corresponding to a Petzval radius of approximately +798.47 mm. This is modest field curvature for a large-format triplet and is expected to be used stopped down.

## Design Heritage and Context

The design is a late, economy-oriented large-format triplet rather than a six-element plasmat. Its premise is conservative: obtain practical large-format coverage with three ordinary spherical singlets and ordinary Schott glass. The patent's contrast with DE-AS 27 06 498 is explicit: the earlier objective used more expensive LAK 9 and SF 5 glass and offered a narrower 38° field, while the present design targets at least 56° with inexpensive SK 16, LLF 1, and BK 7.

That makes the Geronar 210 mm f/6.8 a rational budget alternative below the Sironar and Apo-Sironar families. It is not an apochromat and should not be described as one. Its design value is economy, compactness, and adequate stopped-down coverage for large-format field work.

## Sources

- DE 28 18 394 B1, *Fotografisches Aufnahmeobjektiv für Großformat*, Optische Werke G. Rodenstock, published 12 April 1979.
- SCHOTT, *Optical Glass Datasheet N-SK16*, official datasheet, https://media.schott.com/api/public/content/5e904e6952b54f05be70518c4b669395
- SCHOTT, *Optical Glass Datasheet LLF1*, official datasheet, https://media.schott.com/api/public/content/f05114adf7e64ed197741923913b3f89
- SCHOTT, *Optical Glass Datasheet N-BK7*, official datasheet, https://media.schott.com/api/public/content/41e799d0bf874807a0bb8e702fbb75b5
- B&H Photo, *Toyo-View 45CX View Camera with 210mm f/6.8 Geronar Lens*, retailer specification page listing 60° field, 242 mm image circle, and 49 mm filter size.
- Graflex.org, *Large-Format Lens Specifications*, archival table listing Rodenstock Geronar 210 mm f/6.8 as 3/3 with 230 mm image-circle class and 195 mm flange figure.
