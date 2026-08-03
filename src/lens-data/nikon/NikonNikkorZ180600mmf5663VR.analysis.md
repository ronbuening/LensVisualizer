## Patent Reference and Design Identification

**Patent:** WO 2024/062958 A1  
**Application:** PCT/JP2023/032963  
**Priority:** JP 2022-150640, 21 September 2022  
**Filed:** 11 September 2023  
**Published:** 28 March 2024  
**Inventors:** Hisayuki Yamanaka; Atsushi Takahashi; Toshinori Take; Keigo Koida  
**Applicants:** Tamron Co., Ltd.; Nikon Corporation  
**Title:** Zoom Lens and Imaging Device  
**Embodiment analyzed:** Example 2

The prescription transcribes Example 2 of WO 2024/062958 A1 without scaling. The patent presents the embodiment in
paragraphs ¶0154–¶0168: Table 5 gives the 44 active surfaces, Table 6 gives the wide, middle, and telephoto zoom and
2.4 m focus states, Table 7 gives the single asphere, Table 8 gives the six group focal lengths, and Figure 5 gives the
optical section. [1]

The association with the NIKON NIKKOR Z 180-600mm f/5.6-6.3 VR is a strong production correlation, not an explicit
product identification by the patent or by Nikon. The correlation rests on the following convergent features:

1. The patent design spans 185.0086–582.1636 mm, close to the marketed 180–600 mm range, while retaining the exact
   unscaled prescription values in the model.
2. The patent design has 25 physical elements in 17 air-separated groups, matching Nikon's published construction.
3. Six physical elements occupy low-dispersion pairs consistent with Nikon's published count of six ED elements.
4. The design has one hybrid aspherical element, matching Nikon's published count of one aspherical element.
5. The maximum image height is 21.6330 mm, corresponding to a 43.266 mm image-circle diameter and full-frame coverage.
6. The patent describes a six-group internal zoom, a laterally movable vibration-reduction subgroup, and inner focusing.
7. The published 2.4 m telephoto state computes to 0.2503× paraxial magnification, matching Nikon's published 0.25×
   maximum reproduction ratio and 2.4 m telephoto minimum distance.
8. Nikon announced the production lens on 21 June 2023, after the patent priority date and before the WO publication.
   Nikon identifies it as a full-frame Nikon Z-mount lens with 25 elements in 17 groups, six ED elements, one
   aspherical element, and a 180–600 mm f/5.6–6.3 specification. [2][3]

Marketing and design quantities remain separate. Nikon's product specification is 180–600 mm at f/5.6–6.3; the
three exact patent stations are 185.0086, 350.0125, and 582.1636 mm at f/5.8014, f/6.1650, and f/6.5296. The model uses
the latter values for zoom and maximum-aperture geometry.

No source radius, thickness, spacing, refractive index, Abbe number, zoom position, focus position, asphere coefficient,
or image-plane coordinate was corrected. No uniform scale factor was applied, so the radii, spacings, and asphere
coefficients are those printed for Example 2. The active prescription contains no sensor cover, filter, inactive dummy,
flare-cutter, or mechanical plane.

The patent does not publish clear semi-diameters or the physical stop diameter. The modeled semi-diameters are therefore
authoring inferences derived from Figure 5, the paraxial marginal and chief-ray envelopes, the 21.6330 mm image height,
and validated edge, slope, and inter-element-clearance limits. The base stop semi-diameter, 12.9165 mm, is the inferred
wide-state value; the effective middle and telephoto maximum-aperture radii are 13.7883 and 14.6001 mm.

## Optical Architecture

Example 2 is a six-group super-telephoto zoom with a positive–negative–negative–positive–negative–negative group-power
sequence. The patent divides G1–G3 into a front assembly and G4–G6 into a rear assembly. G4 contains the aperture stop,
the main positive relay, and the vibration-reduction subgroup; G5 is the inner-focus group; G6 is a negative rear relay.
The physical design contains 25 lenses in 17 air-separated groups. The data model has 26 material records because the
thin resin layer and glass substrate of physical element L25 must be represented separately.

The independently computed paraxial powers reproduce Table 8:

| Group | Surfaces | Published focal length | Computed focal length | Principal function |
|---|---:|---:|---:|---|
| G1 | 1–7 | +214.6420 mm | +214.6406 mm | Fixed positive front collector |
| G2 | 8–12 | −207.4500 mm | −207.4490 mm | Moving negative front variator |
| G3 | 13–14 | −77.8618 mm | −77.8616 mm | Single-element negative variator |
| G4 | 15–33 | +57.5179 mm | +57.5176 mm | Main positive rear composite; stop and VR subgroup |
| G5 | 34–35 | −74.5122 mm | −74.5127 mm | Inner-focus group |
| G6 | 36–44 | −258.8370 mm | −258.8605 mm | Negative rear relay and hybrid asphere |

The group focal lengths above describe each complete group in its native internal configuration. They are not sums of
the isolated element powers. Several nominally positive or negative groups contain cemented subassemblies of the
opposite sign, which distribute correction while preserving the required net group power.

Zooming from the wide to telephoto station moves the group vertices as follows, with imageward motion positive:

| Group | Wide-to-tele displacement | Direction |
|---|---:|---|
| G1 | 0.0000 mm | Fixed |
| G2 | +44.2514 mm | Imageward |
| G3 | +44.4767 mm | Imageward |
| G4 | −29.1919 mm | Objectward |
| G5 | −27.4968 mm | Objectward |
| G6 | −29.1919 mm | Objectward |

G4 and G6 share the same net wide-to-tele displacement, while G5 follows a slightly different trajectory. None of the
six group stations reverses direction between the three published zoom positions. The individual gaps after surfaces
12, 33, and 35 are nevertheless non-monotonic because they measure separation between groups following different
trajectories.

The first-surface-to-image optical total length (`TL`) remains approximately 329.455 mm at all three stations. Under
the strict definition `TL/EFL < 1`, the wide state is not telephoto (`TL/EFL = 1.7809`), while the middle and telephoto
states are telephoto (`0.9414` and `0.5660`). None is retrofocus: the computed back focal distance remains smaller than
EFL at every station.

Surface `STO` lies within G4, between L12 and L13. The patent identifies the stop position but not its diameter. The
data therefore uses the published f-numbers to infer the maximum-aperture pupil geometry rather than treating the
authored stop radius as a separately published mechanical measurement.

## Element-by-Element Analysis

### G1 — Fixed positive front group

G1 comprises L1, the cemented L2/L3 pair, and L4. It remains fixed during zooming and has a computed focal length of
+214.6406 mm. The large front apertures and long positive focal length establish the entrance-beam scale before the two
moving negative groups.

#### L1 — Biconvex positive

`nd = 1.48749`, `νd = 70.44`. Glass: **FC5 (HOYA)**. Standalone `f = +259.536 mm`.

L1 is the single element of the patent's G1a subgroup. Its relatively low index and high Abbe number give the fixed
front collector moderate positive power without assigning it the stronger dispersion of the dense glasses used farther
back. The patent's front-group conditions place particular weight on reducing the size and mass of G1 while retaining a
positive first subgroup (¶0019–¶0022, ¶0042–¶0057). [1]

The standalone focal length is the power of L1 isolated in air. In situ, its contribution is modified by the 26.9019 mm
air space and the negative cemented pair that follows; it must not be equated with the +214.6406 mm power of complete
G1.

#### C1 — L2/L3 cemented pair

**L2 — Biconvex positive:** `nd = 1.49700`, `νd = 81.61`. Glass:
**FCD1 / S-FPL51 class (HOYA/OHARA)**. Standalone `f = +209.511 mm`.

**L3 — Biconcave negative:** `nd = 1.83481`, `νd = 42.72`. Glass:
**TAFD5F/TAFD5G class (HOYA)**. Standalone `f = −142.238 mm`.

The L2/L3 cemented pair has a computed net focal length of `−471.725 mm` in its actual bonded configuration. The weak
negative net is not apparent from either isolated element alone: the shared interface and the different indices alter
the pair's combined power. L2 supplies one of the six low-dispersion positions; L3 provides the dense negative partner.

This pairing places a large Abbe-number separation inside the fixed front group. It supports primary chromatic balancing
without requiring a second air space between the components, while the pair's weak negative net moderates the stronger
positive powers of L1 and L4. This is a computed interpretation of the prescription, not a published glass-supplier bill
of materials.

#### L4 — Biconvex positive

`nd = 1.49700`, `νd = 81.61`. Glass: **FCD1 / S-FPL51 class (HOYA/OHARA)**. Standalone
`f = +325.680 mm`.

L4 closes G1b and is the second low-dispersion position in the fixed front group. Its positive power is weaker than L2's
when each is isolated in air. In the complete group it restores positive net power after the negative L2/L3 cemented
assembly and shapes the beam entering the large zoom-dependent air space before G2.

The 12.5172–56.7686 mm gap after L4 expands strongly toward the telephoto station. Because G1 is fixed and G2 moves
imageward, this spacing is one of the main geometric expressions of the zoom transformation.

### G2 — Moving negative variator

G2 contains the cemented L5/L6 pair and L7. The group has a computed focal length of `−207.4490 mm` and moves
44.2514 mm imageward from wide to telephoto.

#### C2 — L5/L6 cemented pair

**L5 — Biconvex positive:** `nd = 1.80610`, `νd = 33.27`. Glass: **NBFD15 class (HOYA)**.
Standalone `f = +63.358 mm`.

**L6 — Biconcave negative:** `nd = 1.48749`, `νd = 70.44`. Glass: **FC5 (HOYA)**.
Standalone `f = −89.864 mm`.

The L5/L6 cemented pair has a computed net focal length of `+190.668 mm`. Its positive net contrasts with the negative
power of complete G2. The group becomes negative only after the rear biconcave L7 and the internal separations are
included.

The pair reverses the usual index/dispersion ordering of C1: the positive component is dense and strongly dispersive,
while the negative component has lower index and higher Abbe number. That allocation gives the designer a second
chromatic lever while preserving the negative variator function at group level.

#### L7 — Biconcave negative

`nd = 1.80420`, `νd = 46.50`. Glass: **TAF3D (HOYA)**. Standalone `f = −91.102 mm`.

L7 supplies the negative power that dominates G2 after the positive cemented pair. Its rear surface and the variable gap
to G3 jointly set the beam transfer into the next negative group. G2's imageward motion increases the separation from
fixed G1 while keeping the G2-to-G3 relationship comparatively compact.

The isolated focal length of L7 is substantially shorter in magnitude than the computed group focal length because the
preceding positive pair partially offsets it in situ.

### G3 — Single-element negative variator

#### L8 — Biconcave negative

`nd = 1.83481`, `νd = 42.72`. Glass: **TAFD5F/TAFD5G class (HOYA)**. Standalone and group
`f = −77.862 mm`.

L8 is the only element in G3, so its standalone and group focal lengths coincide. It moves 44.4767 mm imageward from
wide to telephoto, nearly matching G2's displacement but not exactly. The changing 4.6966–5.6756–4.9219 mm G2-to-G3 gap
is therefore non-monotonic even though neither group reverses direction.

The 74.8686 mm wide-state gap behind G3 contracts to 1.2000 mm at telephoto as G3 moves toward the objectward-moving G4.
This is the largest single gap change in the prescription and a principal source of the zoom ratio.

### G4 — Main positive rear composite

G4 spans L9 through L19 and contains the aperture stop, the principal positive relay, and the laterally movable VR
subgroup. Its complete computed focal length is `+57.5176 mm`, despite containing three negative cemented
subassemblies. G4 moves 29.1919 mm objectward from wide to telephoto.

#### L9 — Biconvex positive

`nd = 1.80518`, `νd = 25.46`. Glass: **FD60 class (HOYA)**. Standalone `f = +113.382 mm`.

L9 begins the main positive rear group. Its dense, high-dispersion glass gives useful positive power in a relatively
compact element. The following 0.2000 mm air gap separates it from the low-dispersion L10 rather than forming a cemented
pair.

The separated positive elements allow curvature and spacing to be adjusted independently. In the centered paraxial
model, their combined front section prepares the beam for the stronger positive/negative balancing around the stop.

#### L10 — Positive meniscus

`nd = 1.49700`, `νd = 81.61`. Glass: **FCD1 / S-FPL51 class (HOYA/OHARA)**. Standalone
`f = +102.364 mm`.

L10 is the third low-dispersion element in the design and the first within G4. Its meniscus form retains positive power
while reducing the surface-bending symmetry of the neighboring biconvex elements. The high Abbe number places
low-dispersion positive power ahead of the stop and the L11/L12 cemented pair.

The element remains axially fixed within G4 during zooming. Its function is therefore part of G4's in-situ positive
relay, not an independent variator.

#### C3 — L11/L12 cemented pair

**L11 — Biconvex positive:** `nd = 1.49700`, `νd = 81.61`. Glass:
**FCD1 / S-FPL51 class (HOYA/OHARA)**. Standalone `f = +67.786 mm`.

**L12 — Biconcave negative:** `nd = 1.83400`, `νd = 37.34`. Glass: **NBFD10 (HOYA)**.
Standalone `f = −48.891 mm`.

The L11/L12 cemented pair has a computed net focal length of `−228.236 mm`. L11 is the fourth low-dispersion element;
L12 is its dense negative partner. As with C1, the bonded pair is much weaker in net power than the isolated components
suggest.

The pair lies immediately before the aperture stop. That location gives its refractive balance strong influence over the
beam diameter and angular distribution at the stop, while the cemented interface avoids adding another air lens in a
region where the ray heights remain substantial.

#### Aperture stop

The stop follows L12 by 6.7379 mm and precedes L13 by 2.5000 mm. The location is published as surface 22; its physical
radius is not. The data uses an inferred wide-state semi-diameter of 12.9165 mm and the exact patent f-number sequence
to represent the maximum-aperture state through the zoom range.

Because the aperture is inferred from f-number and pupil mapping, the stop radii are modeling results rather than
independent source measurements. The corresponding entrance-pupil radii are 15.9440, 28.3846, and 44.5740 mm.

#### L13 — Biconvex positive

`nd = 1.60562`, `νd = 43.71`. Glass: **606437 — barium-flint class**. Standalone
`f = +117.869 mm`.

L13 is the first element behind the stop. Its moderate positive power begins the post-stop section before the compact
three-element C4 assembly. The six-digit label records the optical class without asserting a specific supplier; current
catalog candidates are close but not exact enough to justify replacing the class notation.

Its position near the stop limits the absolute ray height relative to the front elements, allowing a smaller clear
semi-diameter than the early G4 elements while retaining positive relay power.

#### C4 — L14/L15/L16 cemented triplet

**L14 — Negative meniscus:** `nd = 2.00069`, `νd = 25.46`. Glass: **TAFD40 class (HOYA)**.
Standalone `f = −31.269 mm`.

**L15 — Biconvex positive:** `nd = 1.51823`, `νd = 58.96`. Glass: **E-C3 (HOYA)**.
Standalone `f = +25.896 mm`.

**L16 — Biconcave negative:** `nd = 1.83481`, `νd = 42.72`. Glass:
**TAFD5F/TAFD5G class (HOYA)**. Standalone `f = −43.282 mm`.

The three components form a computed `−67.214 mm` cemented net. L14 carries the highest refractive index in the
prescription and supplies strong negative bending at the front of the triplet. L15 is a short-focal-length positive
core, and L16 restores negative power at the rear.

The triplet's negative net operates inside the strongly positive G4. This separation of signs lets the complete group
retain +57.5176 mm power while using the triplet to shape higher-order correction and the internal ray geometry. The
specific aberration allocation is an inference from the prescription; the patent establishes the group construction but
does not assign a unique aberration term to each glass surface.

#### C5 — L17/L18 vibration-reduction subgroup

**L17 — Positive meniscus:** `nd = 1.80610`, `νd = 33.27`. Glass: **NBFD15 class (HOYA)**.
Standalone `f = +78.619 mm`.

**L18 — Biconcave negative:** `nd = 1.63930`, `νd = 44.87`. Glass:
**S-BAM12 class (OHARA)**. Standalone `f = −41.452 mm`.

The current OHARA S-BAM12 catalog coordinates match the stored pair exactly. The class label identifies the catalog
coordinate match without asserting that the patent or production lens specifies OHARA as the supplier.

The L17/L18 cemented pair has a computed net focal length of `−86.235 mm`. The patent explicitly identifies this pair as
the vibration-reduction subgroup Gv and permits it to move perpendicular to the optical axis to correct image shake
(¶0030–¶0031, ¶0158). [1]

Its negative net power makes lateral translation optically effective without requiring the entire positive G4 assembly
to move. The patent does not publish a decenter range for Example 2, and the data file represents only the centered
state; no unsupported stabilization stroke is assigned.

#### L19 — Biconvex positive

`nd = 1.80518`, `νd = 25.46`. Glass: **FD60 class (HOYA)**. Standalone `f = +45.027 mm`.

L19 closes G4 with the shortest positive standalone focal length among the non-cemented elements of the group. It
restores positive relay power after the negative C4 and C5 subassemblies and precedes the focusing gap to G5.

The gap after L19 is one of the two focus-dependent spacings. It increases as G5 moves imageward, while the rear gap of
G5 decreases by the same amount to preserve the axial station of G6.

### G5 — Inner-focus group

#### L20 — Negative meniscus

`nd = 1.59282`, `νd = 68.62`. Glass: **FCD515/FCD505 class (HOYA)**. Standalone and group
`f = −74.513 mm`.

L20 is the complete G5 focus group. The patent states that G5 moves on the optical axis during focusing (¶0162). [1]
Its negative meniscus form and relatively high Abbe number provide the required focusing sensitivity while limiting the
addition of dispersive negative power.

Because G5 contains one element, its standalone and group focal lengths coincide. Its in-situ focus effect nevertheless
depends on the powers and conjugates of G4 and G6; the −74.513 mm isolated value does not by itself determine the image
shift.

### G6 — Negative rear relay

G6 contains two cemented pairs followed by physical hybrid element L25. Its computed group focal length is
`−258.8605 mm`. The group moves 29.1919 mm objectward during zooming, exactly matching G4's net displacement between the
published endpoints.

#### C6 — L21/L22 cemented pair

**L21 — Biconcave negative:** `nd = 1.92286`, `νd = 20.88`. Glass: **E-FDS1 class (HOYA)**.
Standalone `f = −16.852 mm`.

**L22 — Biconvex positive:** `nd = 1.68893`, `νd = 31.16`. Glass: **E-FD8 class (HOYA)**.
Standalone `f = +21.100 mm`.

The L21/L22 pair has a computed net focal length of `−203.907 mm`. Both isolated components are strong, and L21 combines
very high index with the lowest Abbe number in the prescription. The bonded pair supplies negative rear-group power in a
short axial interval.

The positive L22 partially offsets L21 while changing the exit ray angles at the shared interface. This is another case
where isolated powers are insufficient to describe the assembly: the net cemented power is considerably weaker than
L21 alone.

#### C7 — L23/L24 cemented pair

**L23 — Biconvex positive:** `nd = 1.75211`, `νd = 25.05`. Glass: **FF8 (HOYA)**.
Standalone `f = +23.486 mm`.

**L24 — Biconcave negative:** `nd = 1.59282`, `νd = 68.62`. Glass:
**FCD515/FCD505 class (HOYA)**. Standalone `f = −32.462 mm`.

The L23/L24 pair has a computed net focal length of `+80.357 mm`. L24 is the sixth low-dispersion position in the
design, but it carries negative rather than positive standalone power. Its high-Abbe negative contribution is paired
with the strongly dispersive positive L23.

This sign and dispersion arrangement complements the negative C6 pair ahead of it. The two pairs do not simply add:
the intervening 0.7000 mm air space and the following hybrid element determine the complete −258.8605 mm G6 power.

#### H1 / physical L25 — Hybrid aspherical negative meniscus

**L25r — Aspherical resin layer:** `nd = 1.53610`, `νd = 41.21`. Glass:
**Unmatched (optical resin layer)**. Standalone modeled `f = −1533.058 mm`.

**L25g — Negative meniscus substrate:** `nd = 1.87070`, `νd = 40.73`. Glass: **TAFD32 (HOYA)**.
Standalone modeled `f = −87.159 mm`.

The patent counts the bonded resin and glass as one physical lens, L25. The data model separates the two optical media
so that the 0.2500 mm resin film, its refractive index, and the aspherical front surface can participate in tracing. The
combined hybrid has a computed focal length of `−82.304 mm` in its bonded configuration.

The resin layer's isolated focal length is a bookkeeping description of one thin modeled medium, not the power of a
separate production lens. The physically meaningful quantities are the bonded hybrid power and its in-situ contribution
to G6. The minimum modeled edge thickness of the resin layer is 0.0961 mm at the adopted 14.5 mm semi-diameter.

## Glass Identification and Selection

The glass annotations reproduce the final data file. They are catalog-derived matches or classes based on the stored
`nd`/`νd` pairs; neither the patent nor Nikon identifies a supplier for each element. The palette aligns strongly with
current HOYA constants, while the repeated 1.49700/81.61 pair also lies in the FCD1/S-FPL51 low-dispersion class. [4][5]

| Data-file glass label | `nd` | `νd` | Elements | Use in the prescription |
|---|---:|---:|---|---|
| FC5 (HOYA) | 1.48749 | 70.44 | L1, L6 | Low-index, high-Abbe crown positions |
| FCD1 / S-FPL51 class (HOYA/OHARA) | 1.49700 | 81.61 | L2, L4, L10, L11 | Four low-dispersion positive elements |
| TAFD5F/TAFD5G class (HOYA) | 1.83481 | 42.72 | L3, L8, L16 | Dense negative partners and variator |
| NBFD15 class (HOYA) | 1.80610 | 33.27 | L5, L17 | Dense positive components in C2 and VR pair |
| TAF3D (HOYA) | 1.80420 | 46.50 | L7 | Exact catalog coordinate; rear negative element of G2 |
| FD60 class (HOYA) | 1.80518 | 25.46 | L9, L19 | Strong positive power in G4 |
| NBFD10 (HOYA) | 1.83400 | 37.34 | L12 | Negative partner immediately before stop |
| 606437 — barium-flint class | 1.60562 | 43.71 | L13 | Post-stop positive element |
| TAFD40 class (HOYA) | 2.00069 | 25.46 | L14 | Highest-index negative component |
| E-C3 (HOYA) | 1.51823 | 58.96 | L15 | Strong positive center of C4 triplet |
| S-BAM12 class (OHARA) | 1.63930 | 44.87 | L18 | Negative VR component |
| FCD515/FCD505 class (HOYA) | 1.59282 | 68.62 | L20, L24 | Low-dispersion negative focus/rear elements |
| E-FDS1 class (HOYA) | 1.92286 | 20.88 | L21 | Strong dense-flint negative rear power |
| E-FD8 class (HOYA) | 1.68893 | 31.16 | L22 | Positive partner in C6 |
| FF8 (HOYA) | 1.75211 | 25.05 | L23 | Strong positive component in C7 |
| Unmatched (optical resin layer) | 1.53610 | 41.21 | L25r | Molded hybrid asphere layer |
| TAFD32 (HOYA) | 1.87070 | 40.73 | L25g | Glass substrate of physical L25 |

The six low-dispersion physical elements corresponding to the production count are L2, L4, L10, L11, L20, and L24.
They are distributed across the fixed front group, the main positive relay, the focusing group, and the rear relay
rather than being concentrated in one assembly.

Example 2 does not publish element-specific `nC`, `nF`, `ng`, or `dPgF`. The patent does give a condition-level
`ΔPgF1b = −0.0067` for at least one negative lens in subgroup G1b, but it does not identify a unique element or provide
a complete line-index set. The data therefore assigns no element-specific anomalous-dispersion field, and no
apochromatic claim is made from Abbe data alone.

## Focus Mechanism

The modeled focus state is **PUBLISHED**, not reconstructed. G5, consisting only of L20, moves imageward from infinity
to the complete 2.4 m state printed in Table 6. The gap before G5 increases and the gap after G5 decreases; their sum is
conserved to the precision of the patent table at every zoom position.

| Zoom station | `d33` infinity → 2.4 m | `d35` infinity → 2.4 m | G5 imageward travel | Computed magnification |
|---|---:|---:|---:|---:|
| 185.0086 mm | 2.9989 → 5.9374 mm | 31.6550 → 28.7165 mm | 2.9385 mm | −0.08044× |
| 350.0125 mm | 6.4865 → 15.8708 mm | 28.1675 → 18.7832 mm | 9.3843 mm | −0.14850× |
| 582.1636 mm | 4.6940 → 27.4934 mm | 29.9599 → 7.1606 mm | 22.7993 mm | −0.25029× |

Adding the patent's object-side distance `d0` to the first-surface-to-image track gives 2400.0002–2400.0003 mm. The
published shooting distance is therefore referenced from the image or focal plane, consistent with Nikon's stated
minimum-distance convention.

Nikon publishes a production minimum distance of 1.3 m at 180 mm and 2.4 m at 600 mm. [2][3] The selected embodiment
prints only a 2.4 m finite state at all three zoom stations. Consequently, `closeFocusM: 2.4` denotes the patent state
represented by the data; it is not a reconstruction of the production lens's 1.3 m wide-end minimum distance.

The selected example does not specify the actuator or a motor travel calibration. The analysis therefore assigns only
the published optical movement and does not infer a drive mechanism from the production barrel.

## Aspherical Surfaces

Surface `42A`, the object-side surface of the L25 resin layer, is the sole asphere. The patent uses the standard conic
form

$$
z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12},
$$

where `c = 1/R`. Patent `k = 0.0000` is therefore standard `K = 0`; no conic-constant conversion is required.

| Surface | `K` | `A4` | `A6` | `A8` | `A10` | `A12` |
|---|---:|---:|---:|---:|---:|---:|
| 42A | 0 | +5.33455E−06 | +7.84308E−09 | −2.79958E−11 | +2.54947E−13 | −4.75745E−16 |

The patent supplies terms through A12. The data file carries `A14 = 0` as an unused term. No dimensional scaling was
applied, so the coefficients require no transformation.

At the modeled 14.5 mm semi-diameter, the verified polynomial departure from the same-radius sphere is
`+0.3176514 mm`. In the adopted axial sign convention, the polynomial moves the rim imageward relative to that sphere.
This departure is quoted only at the validated authored semi-diameter; the patent itself does not publish the clear
edge.

The surface is a molded hybrid asphere rather than a monolithic aspherical glass surface. The thin resin layer is bonded
to the TAFD32-class substrate at surface 43. Its optical thickness and index are retained explicitly so the asphere is
not reduced to a cosmetic surface annotation.

## Chromatic Correction Strategy

The design distributes low-dispersion material through four different functional regions. L2 and L4 place it in fixed
G1; L10 and L11 place it in the positive G4 relay; L20 places it in the negative focus group; and L24 places it in the
rear cemented pair. This distribution allows zoom and focus groups to carry their own chromatic balance rather than
relying entirely on the fixed front assembly.

The low-dispersion elements are paired with dense or strongly dispersive neighbors. C1 combines low-dispersion positive
L2 with dense negative L3; C3 combines low-dispersion positive L11 with dense negative L12; C7 reverses the power signs,
combining strongly dispersive positive L23 with low-dispersion negative L24. L20 is uncemented and acts as the complete
focus group.

This arrangement supports chromatic correction over zoom and focus movement, but the available data does not establish
apochromatic correction. Only `nd` and `νd` are source-published by element, and the catalog labels do not convert a
class-level match into a manufacturer-confirmed melt or an element-specific partial-dispersion measurement.

## Image Stabilization

The patent identifies the L17/L18 cemented pair as subgroup Gv within G4. It has a computed cemented focal length of
`−86.235 mm` and is permitted to translate perpendicular to the optical axis to correct image displacement
(¶0030–¶0031, ¶0158). [1]

The pair is optically distinct from axial zoom and focus motion. G4 moves as a complete axial group during zooming,
while Gv is a lateral subgroup within it. The centered prescription therefore represents the zero-decenter state; the
data does not combine stabilization movement with the axial `var` table.

No decenter stroke, control law, or off-axis stabilization state is published for Example 2. Those quantities are not
invented. Nikon's VR branding establishes the production feature, but the patent prescription and subgroup definition
govern the optical identification used here.

## Conditional Expressions

The patent states fourteen design conditions and gives Example 2 values in its comparative table. The checks below use
independent paraxial or algebraic computation where the published data permits it.

| No. | Condition | Patent value | Check | Result |
|---:|---|---:|---:|---|
| 1 | `0.32 ≤ Dab/D1 ≤ 0.75` | 0.464 | 0.464086 | Pass |
| 2 | `0.50 ≤ BFw/Yw ≤ 4.50` | 2.121 | 2.120580 | Pass |
| 3 | `0.80 ≤ f1a/f1 ≤ 1.70` | 1.209 | 1.209168 | Pass |
| 4 | `0.65 ≤ Hbt/Hat ≤ 0.93` | 0.863 | 0.877333 | Pass |
| 5 | `−0.90 ≤ fr/ft ≤ −0.03` | −0.445 | −0.444701 | Pass |
| 6 | `1.01 ≤ βrt/βrw ≤ 1.50` | 1.086 | 1.08659 | Pass |
| 7 | `0.65 ≤ |fv|/fpt ≤ 2.00` | 1.499 | 1.499278 | Pass |
| 8 | `0.35 ≤ Lt/ft ≤ 0.70` | 0.566 | 0.565977 | Pass |
| 9 | `5.0 ≤ |{1−βft²}βcrt²| ≤ 13.0` | 7.745 | 7.74774 | Pass |
| 10 | `55.0 ≤ νdp ≤ 78.0` | 70.44 | 70.44 | Pass |
| 11 | `−0.012 ≤ ΔPgF1b ≤ −0.001` | −0.0067 | −0.0067 | Pass; source spectral value |
| 12 | `0.05 ≤ fpt/ft ≤ 0.20` | 0.099 | 0.098810 | Pass |
| 13 | `0.40 ≤ f1/fw ≤ 3.00` | 1.160 | 1.160251 | Pass |
| 14 | `Xp/(−Xn) ≤ 1.0` | 0.660 | 0.659683 | Pass |

Condition 4 is the only material numerical difference. The independent paraxial marginal-ray ratio is 0.8773, whereas
the patent table gives 0.863. The patent's definition is consistent with a finite design ray rather than the
pupil-normalized paraxial ray used in the check. Both values lie inside the stated interval, so the patent value is not
altered.

Conditions 6 and 9 were checked algebraically from the source quantities used by the patent rather than reconstructed
from an unambiguous first-order definition. Condition 11 is source-only spectral information and cannot be assigned to a
specific element from `nd` and `νd` alone.

## Verification Summary

The final data arrays were independently traced with sequential height/reduced-angle matrices and a separately coded
basis-ray propagation. The results remain consistent with the four-decimal patent prescription:

| State | Patent focal length | Computed EFL | Residual | Source rear gap | Computed BFL |
|---|---:|---:|---:|---:|---:|
| Wide | 185.0086 mm | 184.9949276 mm | −0.0136724 mm | 45.8745 mm | 45.8947367 mm |
| Middle | 350.0125 mm | 349.9818089 mm | −0.0306911 mm | 59.0079 mm | 58.9658665 mm |
| Telephoto | 582.1636 mm | 582.1006969 mm | −0.0629031 mm | 75.0666 mm | 75.0443116 mm |

The EFL residuals are 0.0074–0.0108%, and the BFL residuals are 0.020–0.042 mm. These differences are consistent with
the source precision and do not require a sign, index, or spacing correction.

The finite-state imaging-matrix `B` residuals are +0.8766, −0.2674, and +0.0861 mm over the 2400 mm conjugate. The
corresponding paraxial magnifications are −0.08044×, −0.14850×, and −0.25029×.

The surface-by-surface Petzval sum, computed as `φ/(n·n′)`, is `−9.8118049E−05 mm⁻¹`; its reciprocal is approximately
`−10191.8 mm` in the adopted radius convention. This is a paraxial Petzval result, not a claim for the lens's exact
best-focus field curvature.

All six defined combinations of zoom position and focus state satisfy the authored geometry checks. The minimum edge
thickness is 0.0961 mm in the L25 resin layer; the maximum actual rim slope is 49.4° at surface 40; the cross-gap
validator remains clean; and no on-axis marginal ray or 60%-field chief ray clips at a cemented interface.
These checks validate the inferred semi-diameter model but do not convert those semi-diameters into patent-published
values.

A 300 dpi Figure 5 rim audit refined the front collector and G2/G3/G4/G6 outlines by 0.15–0.5 mm per affected surface.
The largest constrained trial, enlarging L7 to the drawing's outer box, was rejected because it would cross both adjacent
air gaps; the retained 20.5 mm L7 radius therefore follows the optical rim rather than the drawn flange. The accepted
values preserve the sampled on-axis ray-fan pass pattern at all six zoom/focus states.

The modeled surface 25 and 26 semi-diameters are 14.0 and 13.7 mm. They were increased from an initial Figure-5-derived
trial so that the complete telephoto 2.4 m marginal fan clears both surfaces. This is an authoring correction to
inferred clear apertures, not a correction to the patent prescription.

## Sources and References

1. World Intellectual Property Organization, **WO 2024/062958 A1, “Zoom Lens and Imaging Device”**, especially
   ¶0154–¶0168, Figure 5, and Tables 5–8.
2. Nikon Imaging, **NIKKOR Z 180-600mm f/5.6-6.3 VR — official product specifications**:
   https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_180-600mmf56-63_vr/
3. Nikon Corporation, **“Nikon releases the NIKKOR Z 180-600mm f/5.6-6.3 VR”**, 21 June 2023:
   https://www.nikon.com/company/news/2023/0621_lens_01/
4. HOYA Optics, **Optical Glass Catalogue**:
   https://www.hoyaoptics.eu/download/optical-glass-catalogue
5. OHARA Corporation, **Optical Glass Catalog and cross-reference data**:
   https://oharacorp.com/glass-catalog/
