# Pentax SMC FA 645 150mm f/2.8 [IF] — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 6,313,955 B1  
**Filed:** May 24, 2000  
**Granted:** November 6, 2001  
**Priority:** May 25, 1999 (JP 11-144821)  
**Inventor:** Shuji Yoneyama  
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha, Tokyo, Japan  
**Title:** Rear-Focusing Telephoto Lens System  
**Example details:** Table 2; Figures 6 and 9 (infinity and closest distance); condition values in Table 4. No scale factor.

The model transcribes Embodiment 2 of the patent. Pentax has published no construction diagram of the smc PENTAX-FA 645 150mm F2.8 [IF], so the link between the patent and the lens rests on published specifications:

1. **Construction.** Ricoh Imaging lists 7 elements in 7 groups. Embodiments 1 and 2 are both seven air-spaced singlets; Embodiment 3 has six elements and is excluded.
2. **Focusing.** The lens is an inner-focus [IF] design. The patent moves only the rear group, behind a fixed stop, with the front group and overall length unchanged.
3. **Close focus.** Ricoh Imaging gives a 1.2 m minimum focusing distance at 0.15×. Embodiment 2's closest state focuses at 1.19996 m from object to image at a magnification of −0.145.
4. **Focal length, aperture and field.** The design is 146.97 mm at F2.9 with a 13.2° half-field at an image height of 34.85 mm, against a marketed 150 mm, F2.8 and 26° on 645 film.
5. **Timing and ownership.** The Japanese priority date is May 1999, Asahi Optical is the assignee, and the patent states its aim as a telephoto of about F2.8 and 26° suited to autofocus.

Embodiment 2 is preferred over Embodiment 1 because its table is consistent with itself: the prescription reproduces the printed back focus to 0.003 mm and its closest state lands on 1.2 m. Embodiment 1's printed back focus lies 0.06 mm behind the paraxial focus of its own prescription and its closest state gives 1.198 m. The production prescription has not been published, and the two embodiments cannot be told apart by specification alone.

Table 2 prints f = 147.97. The radii and spacings give 146.97 mm, and the condition values of Table 4 (f/fF = 0.605, d/f = 0.273, f/fGr3 = −0.611) are reproduced with 146.97 and not with 147.97, so the printed figure is read as a misprint. No prescription value was altered.

## Optical Architecture

The lens has two positive groups separated by a fixed aperture stop. The front group Gf (L1–L3, focal length 242.8 mm) is two positive menisci convex to the object followed by a negative meniscus whose strongly curved concave surface faces the image. The rear group Gr (L4–L7, focal length 168.5 mm) is a positive element convex to the object, two negative elements and a positive element. All fourteen refracting surfaces are spherical.

The patent contrasts the layout with earlier rear-focusing telephotos derived from the Gauss type, in which spherical aberration varies strongly as the rear group moves, and with designs whose stop travels with the focusing group. Here the stop is fixed between the groups and only the rear group moves. Its three conditions are met by Embodiment 2 as follows:

| Condition | Meaning | Table 4 | Model |
|---|---|---:|---:|
| (1) f/fF | Front-group power | 0.605 | 0.605 |
| (2) d/f | Group separation at infinity | 0.273 | 0.273 |
| (3) f/fGr3 | Power of the third rear-group element (L6) | −0.611 | −0.611 |

The prescription gives an effective focal length of 146.97 mm, a paraxial back focus of 76.373 mm (76.37 printed) and a length of 164.20 mm from the first surface to the image plane, the same in every focus state.

## Element-by-Element Analysis

| Element | Shape | nd | νd | Focal length (mm) | Glass |
|---|---|---:|---:|---:|---|
| L1 | Positive meniscus, convex to object | 1.72916 | 54.7 | 88.67 | S-LAL18 (OHARA) |
| L2 | Positive meniscus, convex to object | 1.61800 | 63.4 | 196.05 | S-PHM52 (OHARA) |
| L3 | Negative meniscus, concave to image | 1.64769 | 33.8 | −59.67 | S-TIM22 (OHARA) |
| L4 | Biconvex positive | 1.80400 | 46.6 | 114.07 | S-LAH65 (OHARA) |
| L5 | Biconcave negative | 1.67270 | 32.1 | −72.63 | S-TIM25 (OHARA) |
| L6 | Biconcave negative | 1.64769 | 33.8 | −240.69 | S-TIM22 (OHARA) |
| L7 | Biconvex positive | 1.83400 | 37.2 | 73.18 | S-LAH60 (OHARA) |

L1 and L2 carry the front group's convergence; L2 uses a low-dispersion phosphate crown. L3 is the flint that achromatizes the group, and its steep rear surface faces the stop. In the rear group, L4 and L7 are high-index lanthanum glasses that supply the positive power, L5 is the main negative element, and L6 is a weak negative element. The patent's condition (3) bounds the power of L6: too weak and spherical aberration and astigmatism are under-corrected, too strong and negative spherical aberration and a large positive Petzval sum result.

## Glass Identification and Selection

The patent prints nd and νd only. All seven pairs coincide with rows of the OHARA catalog within |Δnd| ≤ 0.00001 and |Δνd| ≤ 0.07, and the model traces each element on that catalog's dispersion curve. HOYA lists equivalents for several of them, but its nearest rows to L4 (nd 1.80420) and L7 (νd 37.34) lie further from the printed values, which is why the OHARA names are used. The patent does not name a supplier, so the labels are identifications by index, not a statement of what the production lens uses.

No element is tagged as extra-low or anomalous dispersion. The lowest-dispersion glass in the design is L2 (νd 63.4).

## Focus Mechanism

The front group and the stop stay fixed and the rear group moves toward the object as a unit; the gap from the stop to L4 and the back focus always sum to 106.55 mm. Table 2 prints three states:

| State | Stop to L4 (mm) | Back focus (mm) | Object distance from first surface (mm) | Object to image (m) |
|---|---:|---:|---:|---:|
| Infinity | 30.18 | 76.37 | — | — |
| Magnification −0.025 | 24.56 | 81.99 | 5870.60 | 6.035 |
| Closest, magnification −0.145 | 1.22 | 105.33 | 1035.76 | 1.200 |

The patent prints magnifications and no object distances. The distances above are solved from the prescription so that each state is in paraxial focus on its printed image plane; the resulting magnifications, −0.02498 and −0.14534, round to the printed values. Total rear-group travel is 28.96 mm.

Between the printed states the patent gives nothing. Interpolating the three printed states directly against the distance scale would leave up to 0.24 mm of paraxial defocus mid-travel, so the model adds seven solved positions (object-to-image distances of 4.0, 3.0, 2.4, 2.0, 1.714, 1.5 and 1.333 m). Each keeps the 106.55 mm sum and places the paraxial image on the fixed image plane; between positions the residual defocus stays under 0.01 mm. These seven positions are derived, not patent data.

## Aspherical Surfaces

None. Every refracting surface is spherical.

## Model Scope and Limitations

The patent does not list clear apertures. The semi-diameters are scaled from the element heights drawn in Figure 6 and checked against the wide-open axial beam at infinity, which passes every surface. They are estimates, so off-axis illumination and off-axis image quality in the model are indicative only.

The rear group is drawn markedly smaller than the front group, and the air spaces between L4, L5 and L6 close at a height of about 16 mm, which caps the diameter of those elements. Two consequences follow in the model. At infinity the rear group trims a large part of the oblique bundle at the corner of the 645 frame. At the closest distance the rear group sits 1.22 mm behind the stop, where the wide-open axial beam (about 17.3 mm in radius) is larger than L4 (14.9 mm), so the rear group, not the iris, limits the aperture there.

Spherical aberration of the model at infinity is −0.04 mm at the edge of the F2.9 pupil. The image plane is the patent's printed back focus in every printed state.

## Sources

1. US Patent 6,313,955 B1, "Rear-Focusing Telephoto Lens System," Shuji Yoneyama, granted November 6, 2001. [Google Patents](https://patents.google.com/patent/US6313955). Source of the prescription, focus states, figures and condition values.
2. Ricoh Imaging, "smc PENTAX-FA645 150mmF2.8[IF]," [product page](https://www.ricoh-imaging.co.jp/english/products/lens/645/telephoto/smcpentax-fa645-150/). Source of the 7-element, 7-group construction, inner focus, 1.2 m minimum focusing distance, 0.15× magnification, F2.8–F22 aperture range and 67 mm filter.
3. Ricoh Imaging (Japan), [645 film-camera lens list](https://www.ricoh-imaging.co.jp/japan/products/filmcamera/lens/index645n2_long.html). Source of the 26° angle of view on 645 film.
4. OHARA optical glass catalog rows for S-LAL18, S-PHM52, S-TIM22, S-LAH65, S-TIM25 and S-LAH60, used to identify the glasses from the patent's nd and νd.
