# Voigtländer Ultron 50mm f/2 — Patent Example II

## Patent Reference and Design Identification

**Patent:** US 2,627,204 A, Four-Component Gauss-Type Photographic Objective of High Light-Transmitting Capacity

**Inventor:** Albrecht Wilhelm Tronnier

**Assignee:** Voigtländer & Sohn AG

**Priority:** April 29, 1950, Switzerland

**Filed:** December 28, 1950

**Granted:** February 3, 1953

**Embodiment analyzed:** Example II, Figure 3

The normalized source has f=1 and aperture1:2. It is scaled50× for the catalog's50mm Ultron association. The source's useful full field is55°; the displayed46.8° is the approximate diagonal field of the modeled35mm format, a smaller crop. Neither matching architecture nor this scaling establishes a measured production prescription.

## Optical Architecture

Six elements form five air-separated components. The patent's four structural units are I (front positive meniscus), II (air-separated positive and negative menisci), III (cemented negative/positive pair) and IV (rear positive singlet). Its “four-component” title refers to these structural units, not the site's count of air-separated components.

The stop lies in the central gap with source b1=.09393 and b2=.09493, modeled as4.697 and4.747mm after scaling and rounding. All source radii, thicknesses and nd/νd coordinates agree with the current rounded prescription. No cover glass, filter or mechanical plane belongs to it.

ExampleII prints d2=.06395, whereas claim4 prints.08393. The retained ExampleII value reproduces the stated focal length and back focus; the conflicting claim value does not. This is an explicit source conflict, not a reason to substitute the claim table. The existing three-decimal-mm rounding gives infinity EFL50.004488mm, within0.01% of the scaled source50mm.

## Element-by-Element Analysis

Focal lengths use the thick-lens expression with each element's center thickness and both vertex radii, isolated in air. They are distinct from the powers of complete structural units and embedded members of the cemented pair.

| Element | nd | νd | Glass interpretation | Isolated FL (mm) |
|---|---|---|---|---|
| L1 | 1.62139 | 60.3 | N-SK16 coordinate proxy (source nd=1.62139, νd=60.3; production supplier unspecified) | 77.79 |
| L2 | 1.65953 | 57.0 | K-LaK11 coordinate proxy (catalog nd=1.65830, νd=57.3; source 1.65953/57.0; supplier unspecified) | 53.58 |
| L3 | 1.64691 | 33.9 | SF2 coordinate proxy (source nd=1.64691, νd=33.9; production supplier unspecified) | -29.88 |
| L4 | 1.63652 | 35.5 | S-TIM6 coordinate proxy (catalog nd=1.636358, νd=35.391923; source 1.63652/35.5; supplier unspecified) | -15.34 |
| L5 | 1.69347 | 53.5 | LAC13 coordinate proxy (catalog nd=1.69350, νd=53.34; source 1.69347/53.5; supplier unspecified) | 18.75 |
| L6 | 1.72381 | 38.0 | S-BAH28 coordinate proxy (catalog nd=1.72342, νd=37.955602; source 1.72381/38.0; supplier unspecified) | 45.62 |

The front two positive menisci supply converging power before the negative L3. L4 is the negative member after the stop, followed by positive L5 and L6. The patent emphasizes the increasing image-side index sequence1.63652→1.69347→1.72381 in conjunction with its curvature conditions. That source design argument does not establish quantitative isolated aberration contributions.

## Glass Identification and Selection

The patent identifies coordinates, not commercial formulations or suppliers. The former suggestions of thorium, lanthanum or barium chemistry are removed. All catalog names now explicitly denote inferred coordinate proxies. Their d-line indices and Abbe numbers remain distinct from the authoritative source values.

Existing N-SK16 and SF2 counterparts remain compatible. Four previously unresolved annotations now use existing compatible catalog curves: K-LaK11 for L2, S-TIM6 for L4, LAC13 for L5 and S-BAH28 for L6. K-LaK11 is the loosest of these matches, with index difference−.00123 and Abbe difference+.3; it is not an identification of the original glass. LAC13 is a closer coordinate counterpart than the former LaK9 suggestion. Source partial-dispersion measurements are absent, so no patent APD claim is added.

## Focus Mechanism

The source tabulates infinity only. The viewer's unit-focus behavior and1m near endpoint are an explicit reconstruction. All elements and the stop translate together; internal spacings remain fixed.

The former near BF37.492mm gave an object-to-image distance of1.046183m, despite its1m label. Solving the finite-conjugate matrix with the complete thick prescription gives **BF37.626564374mm**, an extension of2.766564374mm from source infinity BF34.86mm. Near magnification is−.0552626084, and first-vertex-to-image track is69.505564mm. Intermediate extension is interpolated; no specific production helicoid or travel measurement is asserted.

## Aspherical Surfaces

All modeled surfaces are spherical. No aspheric coefficients, resin layer or fabricated aspheric process is inferred.

## Semi-Diameter Estimation Notes

Figure3 on original PDF p.2 was rendered at600dpi and inspected against the31.879mm first-to-last vertex span. Optical curves end inside some drawn shoulders and bevels. The large axis arrow, labels and hatching contaminate automated envelope measurements: both initial and widened crops triggered span-edge warnings, so their numerical ratios were rejected.

Manual inspection puts the front optical radius around12.4mm versus14mm modeled, the second element around11.8mm versus13.5mm, and the rear assembly around9–10mm versus existing8.8–10mm. These approximate differences do not supply the strong, independently agreeing evidence required to replace the authored radii. Existing SDs are retained rather than fitting callouts or mechanical shoulders. There is no image-circle floor failure after adding explicit135-full-frame metadata, and no hidden runtime trimming at infinity, midpoint or near.

## Limitations and Sources

The source numerical example is authoritative for prescription and stop location. Semi-diameters, finite focus, production association and catalog counterparts remain qualified. Its55° useful field is not silently presented as the35mm-format diagonal. The mount taxonomy does not currently provide a Prominent-specific identifier, so none is invented.

- [Original US2627204 patent PDF](https://patentimages.storage.googleapis.com/b9/af/79/9003ea70ba704d/US2627204.pdf), retrieved because the local publication was missing; stored as ignored patents/US2627204.pdf. Figure3 p.2, numerical ExampleII p.6, conflicting claim4 p.9; descriptive field discussion p.5.
- [US2627204A publication](https://patents.google.com/patent/US2627204A/en).
- Existing local vendor-catalog entries: SUMITA K-LaK11, OHARA S-TIM6/S-BAH28 and HOYA LAC13. Their source metadata is retained in the catalog; these are coordinate proxies only.
