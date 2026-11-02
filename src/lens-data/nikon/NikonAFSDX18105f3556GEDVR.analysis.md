## Patent Reference and Design Identification

**Patent:** US 7,839,577 B2  
**Application Number:** 12/342,315  
**Priority:** JP 2007-331480 and JP 2007-331481, filed 25 December 2007  
**Filed:** 23 December 2008  
**Granted:** 23 November 2010  
**Inventors:** Hiroshi Yamamoto; Tomoki Ito; Satoshi Yamaguchi; Atsushi Shibayama  
**Assignee:** Nikon Corporation  
**Example details:** Fifth Example, col. 25, l. 33 – col. 27, Tables 17–20, Fig. 17. JP 2007-331480 was published as JP 2009-156890 A, whose Example 5 prints the same prescription.

The Fifth Example is strongly correlated with the Nikon AF-S DX NIKKOR 18-105mm f/3.5-5.6G ED VR, announced on 27 August 2008. The evidence converges:

1. Nikon specifies 15 elements in 11 groups, including one ED element and one aspherical element. The example has 15 lenses in 11 air-separated groups. Its only asphere is the hybrid L21, and L32 (nd 1.49782, νd 82.56) is its only fluor-crown glass.
2. Nikon's published construction diagram matches the example lens for lens: a front cemented pair plus a positive meniscus, a four-lens negative group led by the aspherical meniscus, a cemented doublet behind the stop with its ED element in the L32 position, a single biconvex lens, a small negative doublet, and a rear positive meniscus followed by a cemented pair.
3. Printed W/M/T focal lengths are 18.4 / 57.4 / 102.0 mm at F/3.6 / 5.2 / 5.8, against the marketed 18–105 mm f/3.5–5.6. The printed half-fields at Y = 14.0 mm are 38.8° and 7.6°, which matches Nikon's 76° to 15°20′ DX picture angle closely.
4. G2 focuses internally and G4 is shifted for stabilization. Nikon lists internal focusing and VR for the product.
5. The priority application was filed eight months before the announcement.
6. WO 2021/039812 A1 (2019 priority), Example 8, reprints this prescription. Every radius, thickness and printed air gap is the same except at L13, which there uses a different glass (nd 1.66106, νd 56.09) with R4 = 59.8952. That later patent's claims concern this glass. It also rounds the asphere coefficients, prints κ = 82.273, and adds a flare-cut plane 3.4 mm behind G4. Nikon's reuse twelve years later supports it as the production design; the WO re-glassing is not modelled.

The patent's first four examples share the layout but differ in prescription. Nikon has not published the production prescription, so this is a strong correlation, not a certified match.

## Optical Architecture

The lens is a five-group positive–negative–positive–negative–positive zoom (col. 25, ll. 34–61):

| Group | Lenses | Surfaces | Printed focal length | Function                                     |
| ----- | -----: | -------- | -------------------: | -------------------------------------------- |
| G1    |      3 | 1–5      |           +91.792 mm | Front positive group                         |
| G2    |      4 | 6–14     |           −14.310 mm | Negative variator; moves objectward to focus |
| G3    |      3 | 15–20    |           +23.831 mm | Positive group behind the aperture stop S    |
| G4    |      2 | 21–23    |           −36.549 mm | Vibration-reduction doublet                  |
| G5    |      3 | 24–28    |           +45.130 mm | Rear positive group                          |

From wide to tele, d1 (G1–G2) and d3 (G3–G4) increase, while d2 (G2–G3) and d4 (G4–G5) decrease (col. 13, ll. 50–56). All five groups move, and the stop moves with G3. Over the zoom range G1 travels 45.0 mm toward the object and G4 20.4 mm. G3 and G5 travel 27.2 mm together, because d3 + d4 is 15.846 mm at all three printed states. G2 first moves about 2.8 mm toward the image and then 8.3 mm back toward the object; Figure 17 draws its path as a curve. Figure 17 draws G4's path as the same kind of arch, but its arrows are schematic: the straight arrows of G1, G3 and G5 drop by about the same amount although G1 travels 45.0 mm and G3 and G5 27.2 mm, and both arches end about level with their start. The printed states move G4 14.7 mm toward the object from W to M and 5.7 mm more to T. The calculated cam moves G4 toward the object all the way, so the model does not show an arch for G4.

Table 20's conditional values reproduce: f4/f2 = 2.55, f5/(−f4) = 1.24, f1/(−f2) = 6.41, and the G4 doublet has Np − Nn = 0.121103 and νn − νp = 22.31.

## Element-by-Element Analysis

The focal lengths below are calculated in air from each element's two radii and centre thickness. Glass names are catalog equivalents matched by nd/νd; the patent names no supplier.

### L11 — Negative Meniscus

nd 1.80518, νd 25.43, S-TIH6 (OHARA) equivalent, f = −139.1 mm. A dense-flint front meniscus, convex to the object, cemented to L12.

### L12 — Positive Meniscus

nd 1.60311, νd 60.68, J-SK14 (HIKARI) equivalent, f = +101.6 mm. The crown member of the front achromatic doublet.

### L13 — Positive Meniscus

nd 1.69680, νd 55.52, J-LAK14 (HIKARI) equivalent, f = +118.1 mm. A lanthanum-crown meniscus completing G1. It is the element WO 2021/039812 A1 later re-glasses.

### L21 — Hybrid Aspherical Negative Meniscus

Resin layer nd 1.55389, νd 38.09, 0.200 mm thick. Glass body nd 1.80610, νd 40.94, S-LAH53 (OHARA) equivalent, f = −19.6 mm. The aspherical surface is the object-side face of a resin layer bonded to the glass (col. 25, ll. 45–49). The model keeps the resin and glass as separate media.

### L22 — Biconcave Negative

nd 1.80610, νd 40.94, S-LAH53 (OHARA) equivalent, f = −25.4 mm.

### L23 — Biconvex Positive

nd 1.84666, νd 23.78, S-TIH53 (OHARA) equivalent, f = +18.1 mm. The only positive lens in G2, in a high-dispersion glass.

### L24 — Biconcave Negative

nd 1.80610, νd 40.94, S-LAH53 (OHARA) equivalent, f = −30.8 mm. It sits 0.200 mm behind L23 and closes G2.

### L31 — Negative Meniscus

nd 1.75520, νd 27.51, S-TIH4 (OHARA) equivalent, f = −44.7 mm. The flint member of the doublet just behind the stop.

### L32 — Biconvex Positive (ED)

nd 1.49782, νd 82.56, J-FKH1 (HIKARI) equivalent, f = +25.1 mm. The low-dispersion member in the position Nikon's diagram marks as ED.

### L33 — Biconvex Positive

nd 1.61800, νd 63.38, S-PHM52 (OHARA) equivalent, f = +38.8 mm.

### L41 — Biconcave Negative

nd 1.72916, νd 54.66, TAC8 (HOYA) equivalent, f = −14.5 mm. The negative member of the VR doublet.

### L42 — Positive Meniscus

nd 1.85026, νd 32.35, J-LASF021 (HIKARI) equivalent, f = +23.0 mm. It is cemented to L41 at R = 13.0400 mm. Claim 1 requires this lens to have νd > 30.

### L51 — Positive Meniscus

nd 1.51680, νd 64.12, J-BK7A (HIKARI) equivalent, f = +47.9 mm. Concave to the object.

### L52 — Biconvex Positive

nd 1.48749, νd 70.45, FC5 (HOYA) equivalent, f = +26.8 mm.

### L53 — Negative Meniscus

nd 1.85026, νd 32.35, J-LASF021 (HIKARI) equivalent, f = −26.3 mm. Cemented to L52, and concave to the object.

## Glass Identification and Dispersion

All sixteen modeled d-line index/Abbe pairs agree with US 7,839,577 B2 Table 17 (PDF page 37); the definitions in column 14 (PDF page 31) explicitly specify λ = 587.6 nm. Fifteen bulk media resolve to compatible catalog spectral curves. These curves model dispersion without identifying historical suppliers, melts, compositions or production prescriptions. L33 remains a qualified S-PHM52 proxy despite the small Abbe difference. The 1.55389/38.09 bonded resin has no compatible coefficient-backed catalog row and remains unresolved.

The selected US Fifth Example prints no C/F/g indices or θgF. The retained resin `dPgF: 0.0130674` uses a supplemental spectral proxy from WO 2021/039812 A1 Example 8, Table 8 (printed page 52, PDF page 54), whose resin row prints the same nd/νd and θgF = 0.5928. That later example changes other glass and asphere data; matching nd/νd does not prove identical resin chemistry, cure, or the partial of the original 2008 design. The four-decimal θ value has a ±0.00005 rounding interval. Against the engine normal line 0.6438 − 0.001682νd, the conversion is 0.01306738, stored as 0.0130674; these arithmetic digits are not source precision. No ultraviolet-cure chemistry is established by the original source.

L32 retains an inferred APD/ED-position annotation from the production construction correlation. A high Abbe number, the later resin partial, and an ED marketing label do not establish an original-source anomalous-dispersion classification or an APO result.

## Focus and Zoom Mechanisms

G2 moves toward the object to focus closer (col. 25, ll. 65–67). The patent tabulates infinity focus only. The close states are calculated paraxially for Nikon's 0.45 m minimum focus distance, measured from object to image plane, with d1 + d2 held constant. G2 travels 1.07 mm at 18.4 mm and 4.55 mm at 102 mm. The resulting tele magnification is 0.20×, matching Nikon's 1:5. Intermediate focus keyframes are solved for 0.45 m divided by the focus coordinate.

Only the W, M and T states are printed. The 23 zoom stations between them are calculated:

- From W to M, the four air gaps change linearly and Bf is solved to keep the image plane fixed.
- From M to T, d1, d3 and d4 change linearly, the G2 vertex moves linearly, and d2 and Bf are solved. This keeps G2 from reversing a second time near tele.

The printed states are kept exactly. Their own paraxial focus residual is at most 0.002 mm, at T.

## Aspherical Surface

The asphere is surface 6 (model `6A`), the resin face of L21. The patent's equation (a) (col. 13, l. 60 – col. 14, l. 9) is

`S(y) = (y²/r) / [1 + (1 − κ·y²/r²)^½] + A4·y⁴ + A6·y⁶ + A8·y⁸ + A10·y¹⁰ + A12·y¹² + A14·y¹⁴`,

so the engine's conic is K = κ − 1.

| Parameter | Patent (Table 18) |       Model |
| --------- | ----------------: | ----------: |
| r         |       161.2961 mm | 161.2961 mm |
| κ / K     |           87.2734 |     86.2734 |
| A4        |       4.40790E-06 |  4.4079E-06 |
| A6        |      −3.55660E-08 | −3.5566E-08 |
| A8        |       1.04050E-10 |  1.0405E-10 |
| A10       |      −2.45810E-13 | −2.4581E-13 |
| A12, A14  |                 0 |           0 |

## Image Stabilization

G4, the cemented L41/L42 doublet, shifts perpendicular to the axis (col. 13, ll. 56–59). The anti-vibration factor is 1.23 at wide and 1.84 at tele, so G4 shifts 0.18 mm for 0.70° of rotation at 18.4 mm and 0.29 mm for 0.30° at 102.0 mm (col. 26, ll. 1–16). The model shows the centred state only.

## Model Scope and Limitations

- The patent's image height is 14.0 mm. The D90-era DX sensor (23.6 × 15.8 mm) has a 14.2 mm half-diagonal. At Y = 14.0 mm the traced half-fields are 38.66°, 13.25° and 7.59°, against the printed 38.8°, 13.2° and 7.6°.
- No clear diameters are published. The semi-diameters are estimated from the wide-angle cross-section in US 7,839,577 B2 (Fig. 17) and checked against the real-ray trace, edge thickness and gap clearance. The figure draws L21 touching L22, and L23 touching L24, at the rim. In the prescription those facing surfaces cross at about 11.0 and 10.1 mm, so the model keeps those rims a little smaller than drawn.
- The stop radius follows the printed f-number at each station. Intermediate stations interpolate it.
- The intermediate zoom stations and every finite focus state are calculated, not published. They are paraxially in focus to within 0.02 mm across the zoom and focus range.

## Sources

1. [US 7,839,577 B2](https://patents.google.com/patent/US7839577B2/en), Fifth Example, Tables 17–20, Fig. 17.
2. [JP 2009-156890 A on J-PlatPat](https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2009-156890/11/ja), Japanese priority publication, Example 5.
3. [WO 2021/039812 A1](https://patentimages.storage.googleapis.com/11/68/f4/131f9e9effdc0b/WO2021039812A1.pdf), Example 8 and Table 8, the later re-glassed version.
4. [Nikon product announcement, 27 August 2008](https://www.nikon.com/company/news/2008/0827_nikkor_02/), construction, angle of view, focusing, closest focus and reproduction ratio.
5. [Nikon Japan specifications and lens construction diagram](https://nij.nikon.com/products/lineup/nikkor/fmount/af-s_dx_nikkor_18-105mm_f35-56g_ed_vr/spec.html).
6. [Nikon D90 announcement](https://www.nikon.com/company/news/2008/0827_d90_01.html), sensor dimensions.

## 2026-10-30 source shape and glass review

The exact original US 7,839,577 B2 Fifth Example was reopened at Figure 17 (PDF page 18), Table 17 (PDF page 37), Tables 18–20 (PDF page 38), and the d-line/asphere definitions (PDF page 31). The file wraps native 2560×3300 one-bit page images; the native figure and a twofold enlargement were inspected without treating enlargement as added source precision. Its first/last vertex span of about 1183 native pixels over 95.263 mm gives about 0.0805 mm per pixel. All group heights, concave ends and bonded/cemented contacts were checked.

The L11/L12 powered contact now ends at 25.5 mm instead of 26.8 mm, matching the contact endpoint in Figure 17 and the unchanged rear of L12. L11 keeps its 26.8 mm front radius. The source shows an exposed annulus outside the contact; the shared-interface model cannot add an opaque air-face land there. Its remaining drawn taper is a disclosed approximation rather than a reason to extend the powered contact.

The independent rear land of L21 remains constrained. Extending its unchanged 10.5 mm cap to the 14.8 mm outer body intrudes 5.518 mm into the 6.050 mm gap to L22, exceeding the retained 5.445 mm allowance. Raising both S12/S13 caps to even 9.7 mm also exceeds their unchanged 0.180 mm allowance in the 0.200 mm gap. Those smaller caps, the hybrid connection, all other rims, and the current R/d/asphere/stop/focus/zoom/tolerance data are retained; no compensating cut, interface land or resin wing is added.

Actual SVGs at source W/M/T zoom stations and focus 0/0.5/1 were rasterized and inspected. Across all 26 zoom stations and their midpoints at every focus keyframe plus 0.5, maximum renderer trim is zero. Exact axial stop-edge and Y = 14.0 mm chief checks at W/M/T remain clear and numerically unchanged; the latter reach fields 38.6649°/13.2487°/7.5858°. A 16×16 stop-lattice comparison at five field fractions, five zoom positions and every focus keyframe plus 0.5 retains all 51,460 baseline transmitted samples with zero lost or gained; sample counts are not optical flux. Surface checks pass, image-circle checks find no undersized surface, and all 26 infinity stations retain at least 99% format-corner chief-ray reach and f-number error below 3%. Original source, later spectral proxy, product correlation, derived focus/cam states and current-engine validation remain separate claims.
