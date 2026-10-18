# Schneider-Kreuznach PA-Curtagon-R 35mm f/4 — Optical Design Analysis

## Catalog spectral model

The catalog preserves the source index and Abbe coordinates. The following names select compatible dispersion curves for simulation; they do not identify the historical supplier, melt, or annealing state. Catalog compatibility includes tolerances and is not an exact material identification.

| Element record | Current spectral annotation |
|---|---|
| 1 | N-SK16 spectral proxy (Schott; native e-line dense-crown coordinates; supplier unconfirmed) |
| 2 | N-BK7 spectral proxy (Schott; native e-line borosilicate-crown coordinates; supplier unconfirmed) |
| 3 | BASF7 spectral proxy (Schott; native e-line BaSF52-type coordinates; supplier unconfirmed) |
| 4 | Unmatched (historical BaSF13-type e-line coordinate; no verified compatible catalog curve) |
| 5 | BAFD14 spectral proxy (HOYA; native e-line BaSF14-type coordinates; supplier unconfirmed) |
| 6 | N-SK16 spectral proxy (Schott; native e-line dense-crown coordinates; supplier unconfirmed) |
| 7 | LAC13 spectral proxy (HOYA; native e-line lanthanum-crown coordinates; supplier unconfirmed) |

Six of seven records now have native-e-line-compatible spectral proxies. Added historical HOYA BAFD14 from the official 2026-07-07 AGF for L5′. L4′ remains unresolved: the historical BaSF13 coordinate fit is not a verified catalog dispersion law.

Coefficient source: [HOYA official catalog including obsolete glasses, 2026-07-07](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), checked 2026-10-17.


## Patent Reference and Design Identification

**Patent:** US 3,410,632
**Application Number:** Ser. No. 458,189
**Filed:** 24 May 1965
**Priority:** Germany, Sch 35,253, 30 May 1964
**Granted:** 12 November 1968
**Inventor:** Walter Wöltche (printed "Woltche" in the specification, "Wöltche" on the drawing sheets)
**Assignee:** Jos. Schneider & Co., Optische Werke, Kreuznach, Germany
**Title:** Wide-Angle Objective with Negative Front Component and Multilens Positive Component
**Classification:** U.S. Cl. 350-214; 3 claims
**Embodiment analyzed:** FIG. 2 / FIG. 2a, TABLE II (col. 4) — the second of three disclosed systems; the same prescription is repeated in claim 2 (col. 7)

US 3,410,632 discloses three wide-angle objectives built from a negative front component F and a positive rear component R of four air-spaced members. The patent does not number its examples; the system of FIG. 2 (TABLE II) is the second. It is specified in col. 4 as an objective of aperture ratio 1:4 and 75° field angle, normalized to an overall focal length f = 100. The data file transcribes this example. The patent describes it as a general objective "for photographic or cinematographic cameras" (col. 1) and does not mention perspective control.

The correlation with the PA-Curtagon 1:4/35, sold by Leitz for the Leicaflex/Leica R bayonet under order no. 11202, rests on convergent evidence rather than on any primary source naming the patent:

1. **Designer and date.** Inventor Wöltche, assignee Schneider and the May 1964 German priority match the designer attribution "Walter Woeltche – Jun 1964" in the Leica Wiki entry and Cavina's account of Wöltche's 1964 design becoming the PA-Curtagon 35/4.
2. **Construction.** Example 2 has 7 elements in 6 groups with one cemented doublet, matching the published construction. Example 1 is 6/5 and Example 3 is 8/7.
3. **Aperture.** Example 2 is the only f/4 example; Examples 1 and 3 are 1:2.8.
4. **Back focus.** Scaled to Schneider-Kreuznach's effective focal length of 35.2 mm, the example's back focal distance is 45.88 mm. The Schneider section drawing reproduced by Cavina gives 45.65 mm from the last lens to the focal plane, a difference of 0.23 mm (0.5 %).
5. **Field.** The production lens requires a 57 mm image circle (78°). Example 2's 75° is smaller; the field does not discriminate between the examples (Example 3 gives 80°), and the difference is discussed under Optical Architecture.

No Leica or Schneider publication located for this analysis cites US 3,410,632 or its FIG. 2 example. The identification is therefore strong but not manufacturer-confirmed. Cavina notes that production may have used parameters adjusted for later glass types, and no production prescription is available.

## Optical Architecture

The objective is a retrofocus (inverted-telephoto) design with a negative-positive power distribution. The negative front component F′ is a weak positive plano-convex lens L1′ followed by a strong negative meniscus L2′. After a long intercomponent air space, the positive rear component R′ has four members:

- III′, a biconvex positive singlet L3′.
- IV′, a thick weak positive meniscus L4′, concave toward the stop.
- V′, a weak positive meniscus doublet of a biconcave L5′ cemented to a biconvex L6′, concave toward the stop.
- VI′, a positive meniscus L7′, concave toward the object.

The diaphragm D sits in the narrow space between the confronting concave faces of L4′ and V′. There are 7 elements in 6 groups, and all 13 refracting surfaces are spherical.

All dimensional values in the data file are the patent's f = 100 values multiplied by a uniform scale factor s = 0.352. This reproduces Schneider-Kreuznach's published effective focal length of 35.2 mm (paraxial model EFL 35.2001 mm at the e-line). The design has no aspherical surfaces, so no coefficient transformation was needed. Refractive indices are the patent's native nₑ values (see Glass Identification).

| Member | Elements | Standalone f (mm) | f / EFL |
|---|---|---|---|
| F′ | L1′ + L2′ | −40.34 | −1.146 |
| III′ | L3′ | +68.10 | +1.93 |
| IV′ | L4′ | +242.1 | +6.88 |
| V′ | L5′ + L6′ | +261.78 | +7.44 |
| VI′ | L7′ | +54.53 | +1.55 |
| R′ | L3′ … L7′ | +29.39 | +0.835 |

Focal lengths are thick lenses or subsystems in air at the e-line. They are standalone values, not in-situ contributions.

The paraxial model at infinity has a back focal distance of 45.88 mm, 1.30 times the EFL. This satisfies the patent's stated aim of a back-focal ratio "about 1:1 or greater" (col. 1) and confirms the retrofocus classification (BFD > EFL). Other first-order properties:

- **Principal planes.** The rear principal plane lies 10.68 mm behind the last vertex. The front principal plane lies 34.51 mm behind the first vertex, inside the lens.
- **Length.** The vertex length is 45.81 mm and the first-vertex-to-image track is 91.69 mm.
- **Pupils.** The entrance pupil lies 22.30 mm behind r1 with a 4.40 mm semi-diameter at f/4. The exit pupil lies 8.01 mm in front of r13.

The negative front component shapes the paraxial ray geometry. The f/4 axial beam enters at 4.40 mm, is spread by F′ to a maximum of 6.025 mm at L3′/L4′, and is brought back to 5.28 mm at the stop. Front vertex r1 carries the largest chief-ray height, 18.06 mm for a 28.5 mm image height.

The rear component adopts the stop arrangement from the commonly assigned US 3,350,157 (Solisch and Wöltche): two meniscus members defining the diaphragm space with their confronting concave faces, bracketed by two positive lens groups. That earlier objective is described in col. 1 as a lens of about 1:1 aperture with back focus exceeding half the focal length. US 3,410,632 places this group behind a negative front component separated by an air space shorter than f, reaching back-focal ratios of 1:1 or more. The present example's intercomponent space l₁ is 14.25 mm (0.405 f).

### Perspective-control kinematics

In the product, the whole optical unit shifts up to 7 mm perpendicular to the axis. A rotating mount sets the direction of shift, and there is no tilt. The data file models the meridional shift axis only (±7 mm, tilt fixed at zero).

Coverage requirements:

| Case | Quantity | Value |
|---|---|---|
| Patent example | Field angle | 75°, a 54.02 mm paraxial circle at 35.2 mm |
| Manufacturer | Image circle | 57 mm |
| 57 mm circle | Paraxial full angle | 77.99° |
| 57 mm circle | Real chief-ray full angle | 78.85° |
| 24×36 frame, 7 mm shift along short side | Required circle (paraxial) | 52.35 mm |
| 24×36 frame, 7 mm shift along long side | Required circle (paraxial) | 55.46 mm |
| 24×36 frame, 7 mm shift toward a corner | Required circle (paraxial) | 57.27 mm |

The real chief ray uses the modeled stop. The manufacturer quotes 78°.

The long-side shift therefore exceeds the patent's 75° design field but lies inside the manufacturer's circle. A full 7 mm displacement directed exactly toward a frame corner would reach 0.13 mm (radially) beyond the published 57 mm circle. The patent value describes the design example; the product specification describes the illuminated circle of the production lens. These are different quantities, and the data file's `imageCircleMm` follows the manufacturer.

## Element-by-Element Analysis

The patent labels elements L1′–L7′ and radii r1′–r13′. The data file keeps this numbering, with surface labels "1"–"13" and an inserted stop STO. Third-order contributions quoted below come from Welford-form Seidel sums computed on the data model:

- e-line, infinity focus.
- f/4 marginal ray.
- Chief ray through the modeled stop, normalized to a 28.5 mm image height.
- Transverse aberration expressed as S/(2u′).

In this convention a positive distortion sum S_V corresponds to barrel distortion. Stop-dependent sums rest on the inferred stop position; a ±0.2-unit stop shift does not change any sign quoted.

### L1′ — Plano-Convex Positive (member I′)

nₑ = 1.62287, νₑ = 60.06. Glass: SK16 (Schott) — dense crown; modern equivalent N-SK16. f = +118.4 mm.

L1′ is a weak positive lens (3.36 f) with a flat rear face, placed ahead of the strongly negative L2′. The patent assigns it no separate function beyond its membership of F′.

In the model it works against its negative partner at the front of the system. Its third-order distortion sum is S_V = −1.549, against +2.196 for L2′. Its lateral-colour sum is C_II = −0.0104, against +0.0301 for L2′. It therefore offsets a large fraction of the barrel distortion and lateral colour that the negative meniscus generates where the chief ray is highest. L1′ has the largest modeled semi-diameter in the lens (19.3 mm, taken from FIG. 2).

### L2′ — Negative Meniscus (member II′)

nₑ = 1.51871, νₑ = 63.96. Glass: BK7 (Schott) — borosilicate crown; modern equivalent N-BK7. f = −28.8 mm.

L2′ provides the divergence of F′ (−0.82 f standalone), convex to the object with a deeply concave rear surface r4′ (R = 13.056 mm). Together with the intercomponent space l₁ = 14.25 mm, the negative front component produces the long back focus.

Surface r4′ carries the largest single contributions in the lens:

- Petzval term −0.02616 mm⁻¹.
- S_I = −0.103, over-correcting spherical aberration.
- The steepest modeled rim slope, 59.9° at the 11.3 mm modeled semi-diameter.

L2′ uses the lowest-index glass in the design. For a given surface power φ, the Petzval term φ/(n·n′) grows as the index falls. The front component's total Petzval contribution of −0.01786 mm⁻¹ offsets most of the positive members' contributions.

### L3′ — Biconvex Positive (member III′)

nₑ = 1.70586, νₑ = 40.87. Glass: BaSF52 (Schott, discontinued) — barium dense flint. f = +68.1 mm.

L3′ is the first member of R′. It is strongly collective (1.93 f); the patent notes that the first and last rear members of each disclosed system have focal lengths below 2 f (col. 6). It stands where the axial beam is near its widest.

Although positive, L3′ uses a flint-class glass (νₑ < 50). In the model it contributes S_V = −0.463 and C_II = −0.0116. Together with L4′ (C_II = −0.0103), it opposes the front component's lateral-colour sum of +0.0197. That offset is a computed third-order property of this prescription; the patent does not state it.

### L4′ — Positive Meniscus (member IV′)

nₑ = 1.70189, νₑ = 38.38. Glass: BaSF13 (Schott, discontinued) — barium dense flint. f = +242.1 mm.

L4′ is the object-side meniscus of the stop group. It is weakly positive (6.88 f) and thick (6.262 mm, 17.79 patent units), convex to the object, and concave toward the stop through rA = r8′ = +18.547 mm.

The patent assigns this member the task of concentrating the incident rays near the axis in the region of the diaphragm, through its convex front and its thickness (col. 2). In the paraxial model the f/4 marginal ray falls from 6.025 mm at r7′ to 5.286 mm at r8′. The two surfaces' Petzval terms (+0.02165 and −0.02224 mm⁻¹) nearly cancel.

The member meets the patent's thickness rule: between one-third and one-half of the outer-vertex distance l₃, and greater than the diaphragm space. Its third-order distortion sum (S_V = −0.500) is of the same sign as L3′'s.

### V′ — Cemented Doublet L5′ + L6′ (member V′)

The image-side meniscus of the stop group is a doublet of opposite-power lenses. Its standalone focal length is +261.8 mm (7.44 f). The patent requires this rear meniscus to be positive, with a focal length between about 2 f and 10 f (col. 1). Its concave front face r9′ = rB (−33.222 mm) confronts rA across the stop space of 3.316 mm (9.42 units). The ratio |rA/rB| = 0.558 satisfies the patent's rule |rA| ≤ |rB| for correcting asymmetrical aberrations (col. 2).

#### L5′ — Biconcave Negative

nₑ = 1.70442, νₑ = 34.67. Glass: BaSF14 (Schott) / BAFD14 (Hoya) class — barium dense flint, discontinued. f = −15.1 mm.

#### L6′ — Biconvex Positive

nₑ = 1.62287, νₑ = 60.06. Glass: SK16 (Schott) — dense crown; modern equivalent N-SK16. f = +15.5 mm.

#### The cemented interface

The strong standalone powers of the two components (−15.06 mm and +15.50 mm) almost cancel, leaving the doublet weak. The cemented surface r10′ (R = +15.770 mm) has negative power of −0.005171 mm⁻¹. The constituent with the higher index, the biconcave L5′ adjoining the stop, has the lower Abbe number: Δnₑ = 0.08155 and Δνₑ = 25.39.

This is exactly the arrangement the patent prescribes for chromatic correction (col. 2). It states that the cemented surface should be negatively refracting and should over-correct longitudinal chromatic aberration. The model bears this out: the junction's primary axial-colour sum is C_I = −0.0204, the largest over-correcting term in the lens, and the doublet as a whole gives C_I = −0.0203.

The doublet now follows the drawn rim at a shared 6.2 mm semi-diameter, replacing the enlarged 7.6 mm draft. A current exact meridional sample across the modeled field found no first clipping at the cemented junction; exposed rear-face clipping remains possible. Earlier throughput and edge-thickness values from the enlarged draft are superseded.

### L7′ — Positive Meniscus (member VI′)

nₑ = 1.69660, νₑ = 53.18. Glass: LaKN13 (Schott) class — lanthanum crown; LAK13 (Ohara) / LAC13 (Hoya) / H-LaK6A (CDGM) equivalent. f = +54.5 mm.

L7′ is the strongly collective last member (1.55 f), concave toward the object and separated from V′ by 0.123 mm (0.35 units) on axis. Its rear surface r13′ gives the largest positive spherical-aberration term in the lens (S_I = +0.081). This balances the over-correction introduced at r4′.

Behind the stop, L7′ and V′ contribute third-order barrel distortion (S_V = +0.442 and +0.366). This partly undoes the correction obtained ahead of the stop.

## Glass Identification

TABLE II lists refractive indices nₑ and Abbe numbers νₑ referred to the e-line (546.07 nm), with νₑ = (nₑ − 1)/(n_F′ − n_C′). The data file's `nd`/`vd` slots store these native e-line values, and every element carries `indexReference: "e"`; no e→d conversion was made. The d-line coordinates below were computed from catalog dispersion data. They are not patent values.

| Elements | nₑ / νₑ (patent) | Identification | Best replayed match (e-line) | d-line coordinates of match | Role |
|---|---|---|---|---|---|
| L1′, L6′ | 1.62287 / 60.06 | SK16 (Schott); modern N-SK16 | N-SK16, 0.0003 (Exact) | 1.62041 / 60.32 | Positive crown; doublet crown |
| L2′ | 1.51871 / 63.96 | BK7 (Schott); modern N-BK7 | N-BK7, 0.0000 (Exact) | 1.51680 / 64.17 | Low-index negative front meniscus |
| L3′ | 1.70586 / 40.87 | BaSF52 (Schott, discontinued) | BaSF52 (1980 catalog), 0.0016 (Close) | 1.70181 / 41.03 | Positive dense flint |
| L4′ | 1.70189 / 38.38 | BaSF13 (Schott, discontinued) | BaSF13 (1980 catalog), 0.0008 (Exact) | 1.69761 / 38.61 | Positive dense-flint meniscus |
| L5′ | 1.70442 / 34.67 | BaSF14 (Schott) / BAFD14 (Hoya) class | BAFD14 0.0007 (Exact); BaSF14 0.0015 (Close) | 1.69968 / 34.96 (BAFD14) | Negative flint of V′ |
| L7′ | 1.69660 / 53.18 | LaKN13 (Schott) class | LAK13 (Ohara, 1980) 0.0008 (Exact); H-LaK6A (CDGM) 0.0005 (Exact) | 1.69350 / 53.38 (H-LaK6A) | Lanthanum-crown rear member |

Residuals use the metric √(Δnₑ² + (Δνₑ/50)²). The search was unseeded and ran across:

- The current Schott, Ohara, Hoya, Hikari, CDGM and Sumita catalogs.
- The 1980 Schott, Ohara, Hoya, Corning-France and Chance catalogs, reconstructed from the Buchdahl-coordinate fits of Robb and Mercado (1983). Those fits limit νₑ precision to about ±0.2.

The unseeded search returns legacy Schott types for L3′, L4′, L5′ and L7′. This is consistent with a 1964 German design, but coordinate agreement does not identify the supplier or melt. For L7′ the coordinates cannot distinguish Schott, Ohara or Hoya.

L4′ remains unresolved in the runtime catalog. The official HOYA catalog including obsolete glasses provides the BAFD14 dispersion curve used as a qualified L5′ proxy. The current 701411 barium flints resemble the L3′ glass but sit systematically 0.0003 low in nₑ, so they are equivalents rather than the source glass.

The palette has three parts:

- **Crown front component.** BK7 negative and SK16 positive lenses make up F′.
- **Flint-class positive members.** L3′ and L4′, the two positive members ahead of the stop, both use barium dense flints.
- **Achromatizing doublet and rear crown.** The single crown/flint achromatizing pair is V′; L7′ is the lanthanum-crown rear member.

The patent publishes no partial-dispersion data, and no anomalous-dispersion glass is identified. The chromatic statements in this analysis are therefore limited to primary (F′–C′) colour. No secondary-spectrum or apochromatic claim is supported.

## Focus Mechanism

The patent publishes only the infinity state. The data file models focusing as **unit focus**: the complete optical unit moves on the helicoid and only the back focal distance changes. No primary source describes the production focusing mechanism, and no source describes internal or floating focus. This is a constrained reconstruction, not a published state.

The single unknown, the extension Δ, was solved paraxially for the manufacturer's closest distance of 0.30 m, measured from object to film plane:

| State | Last gap, r13′ → image (mm) | Object to first vertex | Magnification | Status |
|---|---|---|---|---|
| Infinity | 45.8842 | ∞ | 0 | Published (TABLE II, scaled) |
| 0.30 m | 52.0343 | 202.16 mm | −0.1747 (1:5.72) | Reconstruction |

The extension is 6.1501 mm. A third-party reproduction of Leica data gives the smallest object field as 140 × 210 mm, which corresponds to 1:5.83 on 24 × 36 mm film. This agrees with the reconstructed 1:5.72 to within the rounding of the published field. The 0.30 m state is not a patent conjugate, and intermediate distances shown by the viewer interpolate the single variable gap.

Focusing is manual. The Leica-R version uses a manual preset diaphragm stopping to f/22.

## Aberration Correction Strategy

The patent explains its correction only qualitatively. Its three stated points are the stop sandwich for asymmetrical aberrations, the |rA| ≤ |rB| rule, and the negative cemented surface for longitudinal colour. The computed results below give a quantitative picture of how the example distributes correction. All are for the e-line model at infinity, with the modeled stop and f/4.

### Third-order distribution

Group sums of the Seidel coefficients (Welford form, in millimetres; S_IV is the Petzval term):

| Group | S_I | S_II | S_III | S_IV | S_V | C_I | C_II |
|---|---|---|---|---|---|---|---|
| F′ (L1′+L2′) | −0.1031 | +0.1189 | −0.0653 | −0.2267 | +0.6475 | −0.0069 | +0.0197 |
| L3′ | +0.0110 | +0.0318 | +0.1157 | +0.1106 | −0.4631 | +0.0125 | −0.0116 |
| L4′ | +0.0328 | +0.0061 | −0.0576 | −0.0075 | −0.5002 | +0.0057 | −0.0103 |
| V′ (L5′+L6′) | −0.0095 | −0.0781 | −0.0496 | +0.0370 | +0.3656 | −0.0203 | −0.0014 |
| L7′ | +0.0797 | −0.0865 | +0.0564 | +0.1354 | +0.4421 | +0.0112 | +0.0088 |
| Total | +0.0109 | −0.0078 | −0.0004 | +0.0489 | +0.4919 | +0.0023 | +0.0052 |

Several patterns follow from the table:

- **Distortion and lateral colour.** The negative front component introduces third-order barrel distortion and lateral colour. The two positive members ahead of the stop (L3′, L4′) supply most of the opposing contributions.
- **Spherical aberration.** The front component's over-corrected S_I is balanced mainly by L7′.
- **Petzval and astigmatism.** The Petzval total is small compared with the opposing group contributions, and S_III nearly vanishes.

A total S_V of +0.492 would predict −6.9 % distortion at the edge of the 57 mm circle. Exact rays show much less (see below), so higher-order terms are large at this field and the third-order table indicates the correction strategy only in direction.

### Exact-ray results

**Distortion.** Exact chief rays through the stop centre show barrel distortion. It reaches −2.35 % at the 24 × 36 frame corner (21.63 mm) and an extremum of −2.38 % near 22.9 mm image height. It then eases to −1.51 % at the 57 mm circle edge, so beyond the extremum the zone reached only in shifted use carries progressively less barrel distortion.

**Field curvature.** The Petzval sum is 3.852 × 10⁻³ mm⁻¹, a Petzval radius of −259.6 mm (−7.4 f). Coddington fields traced along exact chief rays remain close to the paraxial image plane across the frame: at every image height up to the frame corner (sampled at 0.1 mm intervals), both astigmatic foci lie within 0.31 mm of the paraxial image plane. The largest departure is the sagittal focus, −0.30 mm near 17.6 mm image height. At the corner itself they sit at −0.144 mm (tangential) and −0.217 mm (sagittal). Third-order theory alone would place them near −0.89 mm there, so higher-order field flattening is substantial. This supports the patent's claim of "good flattening of the image field" (col. 2) within the 24 × 36 frame.

Beyond about 25 mm image height the astigmatism opens rapidly. At the 57 mm circle edge the tangential focus is at −0.607 mm and the sagittal at +0.618 mm, an astigmatic difference of 1.22 mm. The largest values occur at the edge of the 57 mm circle, outside the patent's 75° design field (27.0 mm paraxial image height), in a zone reached only in shifted use.

**Spherical aberration.** At f/4 the exact longitudinal spherical aberration is under-corrected and zonal: −0.120 mm at the 0.71 pupil zone and −0.130 mm at the 0.85 zone, returning to −0.089 mm at the paraxial f/4 pupil margin. That marginal ray passes just outside the modeled stop (see Verification Summary); at the exact stop-limited margin (0.977 of the f/4 pupil radius) the value is −0.100 mm. Third order alone predicts −0.349 mm at the margin.

**Primary colour.** The F′–C′ focal difference is −0.146 mm, meaning the F′ focus lies nearer the lens. Paraxial lateral colour at 28.5 mm image height is −0.042 mm.

## Conditional Expressions

The patent states its conditions in prose (cols. 1–2 and 6) and summarizes the parameters in TABLE IV. All are evaluated on the data model (f = EFL) and on the unscaled patent values.

| Condition | Patent statement | Example 2 | Satisfied |
|---|---|---|---|
| l₁ < f | Intercomponent space smaller than f | l₁/f = 0.4047 (TABLE IV 0.40) | Yes |
| \|f_F\| < 2 f | Front component | f_F/f = −1.146 (TABLE IV −1.15) | Yes |
| \|f_IV\| > 2 f | Object-side meniscus weak, sign not critical | f_IV/f = 6.88 | Yes |
| 2 f < f_V < 10 f | Image-side meniscus positive and weak | f_V/f = 7.437 (TABLE IV 7.44) | Yes |
| \|rA\| ≤ \|rB\| | Confronting concave radii | \|rA/rB\| = 0.558 (TABLE IV 0.56) | Yes |
| l₂ < 0.15 f | Diaphragm space | l₂/f = 0.0942 (9.42 units) | Yes |
| 0.37 f ≤ l₃ ≤ 0.6 f | Outer-vertex distance of the menisci | l₃/f = 0.4221 (TABLE IV 0.42) | Yes |
| l₃/3 ≤ d₇′ ≤ l₃/2, d₇′ > l₂ | Forward-meniscus thickness | d₇′ = 17.79 units; l₃ = 42.21 units | Yes |
| Cemented surface negative; higher-index lens has lower ν | V′ doublet | r10′ power −0.005171 mm⁻¹; L5′ nₑ 1.70442 / νₑ 34.67 vs L6′ 1.62287 / 60.06 | Yes |
| f_III, f_VI < 2 f | First and last rear members strongly collective | 1.93 f and 1.55 f | Yes |
| s ≥ f | Back focal length | s/f = 1.3035 | Yes |

TABLE IV lists s = 130.4 units for FIG. 2a, and the prescription reproduces it (130.35). The col. 4 prose gives the back-focal length of the same example as 113.4 units. That value is not reproduced by the prescription, contradicts the patent's own TABLE IV, and is treated as a misprint. The same calculation reproduces Example 1's printed 105.2 units (105.24), which confirms the reference plane. The TABLE IV `s` column also prints a spurious "f" suffix on values that are in units at f = 100.

## Verification Summary

The prescription was traced with a sequential y-nu trace and cross-checked with an independent ABCD matrix; the two agree to better than 10⁻⁹. The patent's printed total axial length of 130.13 units equals the sum of the tabulated spacings, and TABLE II agrees value by value with the claim-2 table.

| Quantity | Model | Patent / manufacturer |
|---|---|---|
| EFL | 35.2001 mm (100.0003 units) | f = 100; Schneider 35.2 mm |
| Back focal distance | 45.8842 mm (130.35 units) | TABLE IV 130.4; col. 4 prose 113.4 (misprint) |
| Last lens to focal plane | 45.88 mm | Schneider drawing 45.65 mm |
| f-number | 4.0 (calibrated) | 1:4 |
| Full field for 57 mm circle | 78.85° real, 77.99° paraxial | 78° (manufacturer); patent example 75° |

The model rests on several modeling choices and disclosed reconstructions:

- **Stop position.** TABLE II does not tabulate the stop. It is placed from the diaphragm D drawn in FIG. 2 and FIG. 2a, 5.28 units (1.8586 mm) after r8′ inside the 9.42-unit diaphragm space, with an uncertainty of about ±0.2 units.
- **Stop diameter.** V2 derives the stop semi-diameter from the exact axial f/4 beam (about 5.417 mm). This supersedes the draft paraxial stop radius of 5.2843 mm. Agreement with f/4 is a calibration, not independent evidence of diaphragm size.
- **Semi-diameters.** No apertures are published. Semi-diameters were taken from the element heights drawn to scale in FIG. 2, then checked by exact meridional ray trace; the V′ doublet now uses the shared 6.2 mm figure-based rim described above.
- **Vignetting.** The current figure-based rims reach the 57 mm image-circle edge with the chief ray and preserve the axial beam. Exposed surfaces clip some off-axis pupil samples. The earlier draft illumination fractions do not describe the revised rims, and no production illumination curve is claimed.
- **Back focal distance.** The model uses the computed paraxial value. There are no plates, filters or dummy surfaces to omit.
- **Close focus.** The 0.30 m state is the unit-focus reconstruction described in Focus Mechanism.

## Design Heritage and Context

US 3,410,632 describes itself as a modification of the Schneider objective of US 3,350,157 by Rudolf Solisch and Walter Wöltche. That application was filed on 30 March 1964 and granted on 31 October 1967 under the title "High-speed camera objective." Its central feature — two meniscus members defining the diaphragm space with their concave faces, bracketed by positive groups — is carried into the rear component here. Col. 1 defines the modification as placing that combination in the positive rear component of a two-component system whose negative front component extends the back focus to the focal length or beyond.

The examiner cited three earlier patents:

- Angénieux, US 2,649,022 (1953), "Wide-angle photographic objective lens assembly," the basis of the Retrofocus R1.
- Angénieux, US 2,696,758 (1954).
- Zöllner, US 2,793,565 (1957).

These place the design within the retrofocus development of the 1950s.

In production the optics appeared first in Schneider's own interchangeable-mount PA-Curtagon (introduced 1967, according to lens-db). The Leicaflex/Leica R version followed in 1970 and remained in Leica's program until 1996. Nikon's PC-Nikkor 35 mm f/3.5, released in July 1962 as a 6/6 design, preceded it as a perspective-control lens for 35 mm SLRs. The patent covering the PA-Curtagon's optics presents a general-purpose wide-angle retrofocus objective and does not address decentred use.

## Sources

1. W. Wöltche, *Wide-Angle Objective with Negative Front Component and Multilens Positive Component*, US Patent 3,410,632, granted 12 Nov. 1968 (filed 24 May 1965; priority DE Sch 35,253, 30 May 1964), assignor to Jos. Schneider & Co. Optische Werke. Cited locations: col. 1–2, design principles and conditions (pdf p. 4); col. 4, FIG. 2 description, system values and TABLE II (pdf p. 5); col. 6, FIG. 1a–3a parameters and TABLE IV (pdf p. 6); col. 7, claim 2 table (pdf p. 7); drawing sheet 2, FIG. 2 and FIG. 2a (pdf p. 2).
2. R. Solisch and W. Wöltche, *High-Speed Camera Objective*, US Patent 3,350,157, granted 31 Oct. 1967 (filed 30 Mar. 1964), assignors to Jos. Schneider & Co. Optische Werke. https://patents.google.com/patent/US3350157
3. P. Angénieux, *Wide-Angle Photographic Objective Lens Assembly*, US Patent 2,649,022, granted 18 Aug. 1953; P. Angénieux, US Patent 2,696,758 (Dec. 1954); H. Zöllner, US Patent 2,793,565 (May 1957) — references cited in US 3,410,632. Identification of US 2,649,022 with the Retrofocus R1: Wikipedia, "Angénieux retrofocus," https://en.wikipedia.org/wiki/Angénieux_retrofocus (accessed 30 Sep. 2026).
4. M. Cavina, "Speciale Schneider Kreuznach … e del decentrabile PA Curtagon 35/4" (3 Oct. 2009), reproducing Schneider-Kreuznach data and section drawing (effective focal length 35.2 mm, f/22, 0.3 m, 57 mm image circle, 45.65 mm last lens to focal plane). https://www.marcocavina.com/articoli_fotografici/Schneider_compendium/00_pag.htm (accessed 30 Sep. 2026).
5. Leica Camera Classic, "Schneider-Kreuznach PA-Curtagon-R 1:4/35mm" (product 11202SH-2453364). https://classic.leica-camera.com/en/Schneider-Kreuznach-PA-Curtagon-R-1-4-35mm/11202SH-2453364 (accessed 30 Sep. 2026).
6. lens-db.com, "Schneider-Kreuznach PA-Curtagon 35mm F/4 for Leicaflex / Leica R [11202]," citing Leitz publications (LEICA photography 1970 No. 2; Leica catalogue 1979; Handbook of the LEICA system 1995); and "Schneider-Kreuznach PA-Curtagon 35mm F/4 (1967)." https://lens-db.com/schneider-kreuznach-pa-curtagon-35mm-f4-for-leicaflex-leica-r-1970/ ; https://lens-db.com/schneider-kreuznach-pa-curtagon-35mm-f4-1967/ (accessed 30 Sep. 2026).
7. Leica Wiki (l-camera-forum), "35mm f/4 PA-Curtagon-R." https://wiki.l-camera-forum.com/leica-wiki.en/index.php/35mm_f/4_PA-Curtagon-R ; K. Tauber collection, "PA-Curtagon 1:4/35 mm for Leica R," kameramuseum.net (both accessed 30 Sep. 2026).
8. P. N. Robb and R. I. Mercado, "Calculation of refractive indices using Buchdahl's chromatic coordinate," *Applied Optics* 22(8):1198 (1983), doi:10.1364/AO.22.001198.
9. SCHOTT optical glass overview (2025-01-13); OHARA catalog (2025-03-12); HOYA catalog (2026-04-01); HIKARI general catalog; CDGM catalog (2024-09); SUMITA catalog — as distributed with the `opticalglass` 2.0.2 package.
10. Nikon Corporation, "NIKKOR – The Thousand and One Nights No. 17: PC-NIKKOR 35mm f/3.5." https://imaging.nikon.com/imaging/information/story/0017/ (accessed 30 Sep. 2026).
