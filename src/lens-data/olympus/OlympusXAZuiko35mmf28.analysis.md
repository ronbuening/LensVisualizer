# Olympus XA F.Zuiko 35mm f/2.8 — Patent Analysis

## Patent Reference and Design Identification

**Patent:** US 4,235,521
**Inventor:** Toshihiro Imai
**Applicant:** Olympus Optical Co., Ltd.
**Priority:** JP 52-142167, November 29, 1977
**Filed:** November 24, 1978
**Granted:** November 25, 1980
**Title:** Photographic Lens System
**Embodiment analyzed:** Embodiment 1 (Fig. 2, Fig. 5)

US 4,235,521, **Photographic Lens System**, was filed by Olympus Optical Co., Ltd. with Toshihiro Imai as inventor. The U.S. filing date is November 24, 1978, the Japanese priority date is November 29, 1977 (JP 52-142167), and the U.S. grant date is November 25, 1980. The analysis and data file use **Embodiment 1**, shown schematically in Fig. 2 and paired with the aberration plots in Fig. 5.

The patent does not name the Olympus XA directly. The production association is therefore an identification by convergence rather than a literal statement in the patent text. The match rests on several mutually reinforcing points:

1. Embodiment 1 is a six-element, five-group, all-spherical 35 mm-format lens with a relative aperture of F/2.8 and a field angle of $2\omega = 63°$.
2. The Olympus XA instructions identify the production camera as a 35 mm rangefinder using a 24 × 36 mm frame and an F.Zuiko 35 mm f/2.8 lens of six elements in five groups.
3. The third component is a cemented positive pair — the only form among the patent's four embodiments that yields the six-element count. Embodiment 2 uses a single (non-cemented) positive third component and has five elements.
4. The patent's stated design objective — a compact-camera lens for 35 mm film with a 60–70° angular field, F/2.8 aperture ratio, and a first-surface-to-film length nearly as short as the focal length — matches the engineering problem solved by the Olympus XA body, whose concept required a fixed, compact lens inside a pocketable 35 mm camera.
5. The patent assignee (Olympus Optical Co., Ltd.) and the filing date (1978) are consistent with the XA's 1979 market introduction.

## Optical Architecture

The design is a compact **telephoto-type wide-angle lens**. It is not a retrofocus. Its first-order structure is a convergent front group followed by a dispersive rear group, so the rear principal plane is displaced forward and the first-surface-to-film track becomes slightly shorter than the focal length.

The front group consists of L1, L2, and the cemented L3a/L3b component. Its patent-stated composite focal length is $f_{123} = 62.1$ at the normalized $f = 100$ scale, giving $f/f_{123} = 1.61$. The rear group consists of L4 and L5, with patent-stated $f_{45} = -90.9$, giving $f/f_{45} = -1.10$. The cemented third component has axial thickness $D_5 = d_5 + d_5' = 3.39 + 10.80 = 14.19$, so $D_5/f = 0.1419$. The air interval between the third and fourth components is $d_6 = 16.56$, so $d_6/f = 0.1656$.

These four values satisfy the patent's broad design conditions (column 1, lines 55–65): $1.2 < f/f_{123} < 1.8$, $-1.3 < f/f_{45} < -0.35$, $0.1 < D_5/f < 0.17$, and $0.13 < d_6/f < 0.25$. They also satisfy the narrower claimed ranges of claim 1: $1.3 < f/f_{123} < 1.7$, $-1.2 < f/f_{45} < -0.4$, $0.11 < D_5/f < 0.16$, $0.16 < d_6/f < 0.23$.

Independent paraxial tracing of the transcribed prescription gives $f = 100.013$ and $f_B = 38.862$ at the normalized scale, matching the patent's $f = 100$ and $f_B = 38.85$ within rounding. With the production scale factor of 0.35, the effective focal length is 35.005 mm, the back focal distance is 13.602 mm, and the first-surface-to-image track is 34.43 mm. The resulting telephoto ratio is approximately 0.984.

The surface-by-surface Petzval sum, computed as $\sum \phi_i / (n_i \cdot n_i')$, is $+0.001640$ at the normalized scale. This corresponds to a Petzval radius of approximately 610 normalized units, or 213 mm after scaling — a small residual Petzval curvature for a 63° all-spherical compact lens.

## Element-by-Element Analysis

### L1 — Positive meniscus, convex to object

$n_d = 1.78800$, $\nu_d = 47.43$. Glass: S-LAH64 / N-LAF21 / TAF4 class (788/474). $f = +22.3$ mm.

L1 is the high-index front collector. Its meniscus bending puts both centers of curvature to the image side, with the front surface more strongly curved than the rear. This lets the design obtain positive front-group power without requiring very short radii on the external surface. The high refractive index also reduces the Petzval burden for a given positive power contribution, consistent with the patent's recommendation that positive-element indices exceed 1.7 (column 3, lines 50–55).

### L2 — Biconcave negative

$n_d = 1.78472$, $\nu_d = 25.71$. Glass: FD110 (HOYA) / S-TIH11 class (785/257). $f = -20.2$ mm.

L2 is the strong dispersive member of the front group. Its very low Abbe number supplies the main first-order chromatic correction against the more moderate-dispersion high-index positive elements. It also subtracts positive power from L1 and L3, helping to flatten the field and control front-group spherical aberration.

The element is highly asymmetric: the object-side surface ($r_3 = -277.4$) is weakly concave, while the image-side surface ($r_4 = 54.2$) carries most of the negative power. This bending keeps the element useful as both a chromatic corrector and a monochromatic balancing element without making the front group excessively thick.

### L3a / L3b — Cemented positive component (C1)

**L3a:** $n_d = 1.80440$, $\nu_d = 39.62$. Glass: S-LAH63 / NBFD3 class (804/396). Standalone $f = -32.5$ mm.

**L3b:** $n_d = 1.72000$, $\nu_d = 46.03$. Glass: S-LAM61 class (720/460). Standalone $f = +11.8$ mm.

Together, L3a and L3b form the thick positive third component with a combined cemented focal length of $+19.3$ mm. This component is the main positive-power contributor in the front group, and its thickness is not incidental: the patent explicitly uses $D_5/f$ as a condition for controlling astigmatic difference across the wide field while preserving compactness and marginal illumination (column 3, lines 57–65).

The strongly curved cemented interface ($r_5' = 27.309$) between L3a and L3b is the most important internal correction surface in the front half of the lens. L3a is individually negative in air, while L3b is strongly positive; their cemented combination gives positive power with chromatic and spherical-aberration correction that a single high-power positive element would not provide.

### L4 — Negative meniscus, convex to image

$n_d = 1.80400$, $\nu_d = 46.57$. Glass: S-LAH65 / TAF3 class (804/466). $f = -20.6$ mm.

L4 is the principal rear dispersive element and the main source of the telephoto shortening. It sits after the stop in a converging beam and bends the beam outward, moving the rear principal plane forward. Its object-side radius ($r_7 = -18.491$ at patent scale) is short, making the surface optically aggressive even though the element itself is thin.

The patent notes (column 4, lines 5–15) that making the rear group too strong worsens axial spherical aberration because the object-side radius of the fourth component becomes too small. The chosen $f/f_{45} = -1.10$ sits inside the allowed range and is near the strong end of the telephoto compromise without crossing the stated limit of $-1.3$.

### L5 — Positive meniscus, convex to image

$n_d = 1.74950$, $\nu_d = 35.27$. Glass: S-LAM7 / S-NBH51 class (750/353). $f = +70.3$ mm.

L5 is a weak positive meniscus at the rear of the system. Its role is not to dominate the focal length; it moderates the distortion and lateral-color burden created by the strong negative L4. The patent states (column 4, lines 20–30) that the positive meniscus in the rear group reduces the positive distortion that otherwise follows from using a high-power dispersive rear group over a field wider than 60°.

## Glass Identification and Selection

The patent does not provide trade names for the glasses. The identifications below are catalog-class matches based on the published $n_d$ and $\nu_d$ pairs, not evidence of a specific melt used in XA production. Six-digit glass codes encode $n_d \times 1000$ (first three digits) and $\nu_d \times 10$ (last three digits).

| Element | Patent $n_d$ | Patent $\nu_d$ | Code | Catalog-class identification | Function |
|---|---:|---:|---|---|---|
| L1 | 1.78800 | 47.43 | 788/474 | S-LAH64 / N-LAF21 / TAF4 class | High-index positive collector |
| L2 | 1.78472 | 25.71 | 785/257 | FD110 (HOYA) / S-TIH11 class | Strong dispersive front negative |
| L3a | 1.80440 | 39.62 | 804/396 | S-LAH63 / NBFD3 class | Negative cemented member |
| L3b | 1.72000 | 46.03 | 720/460 | S-LAM61 class | Strong positive cemented member |
| L4 | 1.80400 | 46.57 | 804/466 | S-LAH65 / TAF3 class | Rear negative telephoto member |
| L5 | 1.74950 | 35.27 | 750/353 | S-LAM7 / S-NBH51 class | Rear distortion and color balance |

The design uses no true crown glass by the usual Abbe-number convention ($\nu_d > 50$). Even the least dispersive members remain in high-index lanthanum-flint territory. This is consistent with the patent's preference for positive components with refractive indices greater than 1.7 in order to control field curvature.

Several glass identifications were corrected from an earlier draft during independent cross-referencing. L1 was previously misidentified as HOYA TAFD25 (904/313 class — inconsistent with the 788/474 patent pair). L3a was previously labeled as HOYA TAF3, which is the 804/465 class, not the 804/396 class of the patent pair. L3b was previously identified as S-LAM51 (700/481 class), which does not match the 720/460 patent value. L5 was previously labeled NBFD11 (786/439 class), which also does not match the 750/353 patent pair. All four identifications were corrected to the nearest-matching catalog-class entries listed in the table above.

## Focus Mechanism

The production Olympus XA focuses from 0.85 m to infinity by a coupled rangefinder mechanism. US 4,235,521 does not publish close-focus prescriptions, variable spacings, or a table of finite-distance examples. The specific moving element or group therefore cannot be established from the patent alone.

The prescription is encoded at infinity only. The `closeFocusM` field is set to 0.85 m from the Olympus XA camera instructions, but `var` is intentionally empty because there is no patent-grounded spacing model. Any future finite-focus model would need a service manual, a measured mechanism, or another first-party source identifying the moving group and travel.

## Aspherical Surfaces

There are no aspherical surfaces in Embodiment 1. The patent prescription lists only spherical radii, with no conic constants or polynomial aspheric coefficients. The data file therefore sets `asph: {}`.

## Data-File Notes and Verification Summary

The `.data.ts` file scales all patent radii, thicknesses, and air spaces by 0.35 from the patent's $f = 100$ normalized scale to the production $f \approx 35$ mm focal length. The aperture stop is inserted into the patent's $d_6$ air interval by an inferred split from Fig. 2; this affects entrance-pupil geometry and rendering but does not change the system EFL or BFD.

Semi-diameters are estimated because the patent does not publish clear-aperture data. The values were derived from a combined marginal + chief ray trace at 60% of the full field angle, with 5-8% mechanical clearance, then capped by rim-slope, element edge-thickness, and signed cross-gap sag-intrusion checks. Front-group SDs are somewhat reduced from the theoretical full-field values to model the natural vignetting expected in the compact Olympus XA body, while the 2026 Fig. 2 audit enlarged the rear L4/L5 SDs so the final meniscus height better matches the patent drawing. They should be treated as renderer-safe approximations, not production mechanical drawings.

Independent paraxial verification at the patent scale:

| Quantity | Patent value | Computed value |
|---|---:|---:|
| Effective focal length | 100.00 | 100.013 |
| Back focal distance | 38.85 | 38.862 |
| Front-group focal length ($f_{123}$) | 62.1 | 62.10 |
| Rear-group focal length ($f_{45}$) | −90.9 | −90.87 |
| Petzval sum | not tabulated | +0.001640 |

Production-scale derived quantities:

| Quantity | Value |
|---|---:|
| EFL | 35.005 mm |
| BFD | 13.602 mm |
| Front-to-image track | 34.43 mm |
| Telephoto ratio | 0.984 |
| Half-field angle | 31.7° (patent: 31.5°) |

## Sources

1. Toshihiro Imai, Olympus Optical Co., Ltd., **US Patent 4,235,521**, *Photographic Lens System*, filed November 24, 1978; granted November 25, 1980.
2. Olympus, **Olympus XA Instructions**, specification page: F.Zuiko 35 mm F2.8, 6 elements in 5 groups; 24 × 36 mm frame; 0.85 m to infinity focusing range.
3. HOYA Group Optics Division, **Glass Cross Reference Index**.
4. OHARA GmbH, **Optical Glass Technical Information**, table of recommended glasses.
