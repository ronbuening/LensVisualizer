## Patent Reference and Design Identification

**Patent:** US 3,771,853 A\
**Application Number:** 206,359\
**Priority:** 15 December 1970, Japan 45/11283\
**Filed:** 9 December 1971\
**Granted:** 13 November 1973\
**Certificate of Correction:** 17 September 1974\
**Inventor:** Soichi Nakamura\
**Assignee:** Nippon Kogaku K.K.\
**Title:** *Four Component Zoom Lens*\
**Embodiment analyzed:** Embodiment III (job-card Example 3)

The prescription is the third worked embodiment of Nakamura's four-component wide-angle zoom patent. The patent describes
an all-moving negative-positive-negative-positive system for a 35 mm still camera and gives Embodiment III as an f/4.5,
28.85–44.19 mm design. The numerical table appears on PDF page 11, with the back-focus range continued on PDF page 12 and
a repeated prescription in claim 4 on PDF page 13. The United States Patent Office Certificate of Correction on PDF page
15 changes the printed radius of surface 14 from +889.704 mm to +889.074 mm; the corrected value is the value implemented
in the data file. [US 3,771,853, PDF pp. 11–13, 15.]

The identification with the production Zoom-Nikkor 28–45mm f/4.5 is strong but not absolute. Nikon's historical account
attributes the wide-angle zoom project to Nakamura, dates the design to May 1970, notes patent applications at about the
same time, and records commercial release in August 1975. Nikon also describes the patent concept as a four-group
negative-positive-negative-positive zoom and the production mechanism as three moving groups, with the rear master lens
split into two portions. Embodiment III makes the second and third functional groups move together because
$\psi(x)=x$, so the patent's four optical power components can be mechanically compatible with a three-moving-group
description. Nikon does not, however, explicitly state that US 3,771,853 Embodiment III is the exact production
prescription. [Nikon, *NIKKOR — The Thousand and One Nights No. 15*; Nikon, *Our Product History: 1970s*.]

The final model therefore keeps two categories separate. The patent design is 28.85–44.19 mm and is the authority for the
prescription. The marketed product is 28–45 mm f/4.5 in Nikon F mount for the 135 format. The data file does not rescale
the patent to the marketing endpoints; its linear scale is exactly 1.0.

## Optical Architecture

The patent architecture is a four-component zoom with power sequence **negative / positive / negative / positive**. The
implemented prescription contains 11 glass elements in seven air-separated physical groups. The difference between those
counts is deliberate: the four patent groups are functional power components, while cementing and separate singlets divide
the glass into seven physical groups. At the wide endpoint, the recomputed functional-group focal lengths are approximately
−50.127 mm, +24.689 mm, −18.637 mm, and +26.234 mm, reproducing the values printed by the patent.

The first functional group, L1–L3, is divergent. It is followed by a convergent second group, L4–L6; a divergent third
group, L7–L8; and a convergent fourth group, L9–L11. The patent explains the wide-end system in inverted-telephoto terms:
the negative front component provides the long rear clearance required by a single-lens-reflex camera while the following
components restore positive total power. Its equations then constrain the second through fourth groups to maintain a
stable triplet-like power arrangement during zooming. [US 3,771,853, PDF pp. 8–10, especially equations (1)–(12).]

The implemented wide-end effective focal length is 28.847672942 mm and the paraxial back focal length from the final lens
vertex is 37.723187089 mm. At the tele endpoint they are 44.187794138 mm and 48.855695443 mm. By the project's stated
criterion, BFD > EFL at both endpoints, so the modeled system satisfies the retrofocus criterion at both ends. The patent's
own discussion emphasizes the minimum-focal-length side, where the inverted-telephoto arrangement is the principal design
constraint.

Zooming is not represented as a simple interpolation between only two patent rows. The source publishes wide and tele
numerical spacings but also specifies the motion laws $\psi(x)=x$ and $\phi(x)=0.7836x$. The final data retain both
published endpoint spacing rows and add three interior keyframes solved from those motion laws and the patent's Gaussian
relations. Those interior states are modeling results, not additional patent-published prescriptions.

The aperture stop is not numerically dimensioned in Embodiment III. Figure 2 places it topologically between the second
and third functional groups. The implemented model therefore inserts exactly one `STO` in the source 4.8 mm air interval
between surfaces 10 and 11, splitting that gap into 2.4 mm + 2.4 mm. This midpoint station is an inference. The stop
semi-diameter is separately calibrated so that the wide endpoint evaluates to f/4.5; it is not a recovered physical iris
measurement. [US 3,771,853, PDF p. 3, Fig. 2; PDF pp. 11–12, Embodiment III.]

## Element-by-Element Analysis

The focal lengths in this section are **standalone element powers in air**, recomputed from the finalized data file. They
are not claims that an isolated element contributes the same power when embedded in its cemented pair or in the complete
zoom system.

### L1 — Negative Meniscus

**nd = 1.52000, νd = 70.1. Glass: 520701 — J-PKH1 coordinate-compatible proxy; supplier unresolved. Standalone f = −126.699 mm.**

L1 is the front singlet of functional group 1. Its standalone negative power agrees with the negative sign of the first
patent component. In the complete group it precedes the cemented L2–L3 pair and participates in the front divergent block
that gives the wide-end lens its inverted-telephoto character. The source supplies only d-line index and Abbe number, so no
particular supplier glass or anomalous-dispersion behavior is assigned to L1.

### L2 — Positive Meniscus, front component of C1

**nd = 1.80411, νd = 46.4. Glass: 804464 — N-LASF44 coordinate-compatible proxy; supplier unresolved. Standalone f = +96.714 mm.**

L2 begins the cemented C1 pair inside the first functional group. Its positive standalone power is followed immediately by
the much stronger negative L3. The pair must therefore be interpreted as a cemented assembly within the net negative front
group, rather than as two independent thin lenses. The high index is source-published; the descriptive glass class is only
a coordinate-level identification.

### L3 — Biconcave Negative, rear component of C1

**nd = 1.44628, νd = 67.2. Glass: 446672 — low-index crown coordinate; supplier unresolved. Standalone f = −46.845 mm.**

L3 is cemented to L2 and closes functional group 1. Its standalone negative power adds a strong negative contribution
within the net-divergent first group. No element-specific coma or chromatic role is inferred
from that sign alone; the patent discusses aberration control at the level of the four-component power arrangement rather
than assigning a named correction function to this individual element.

### L4 — Biconvex Positive, front component of C2

**nd = 1.61117, νd = 55.8. Glass: 611558 — H-ZK5/BACD8/SK8/BSM8 coordinate class; supplier unresolved. Standalone f = +29.706 mm.**

L4 begins functional group 2 and supplies strong positive standalone power. It is cemented to L5 and followed by the
positive singlet L6. Together those elements form the patent's convergent second component, whose wide-state group focal
length is approximately +24.689 mm. The catalog names embedded in the class label are coordinate-compatible families, not
a claim that Nippon Kogaku used one identified supplier or melt.

### L5 — Negative Meniscus, rear component of C2

**nd = 1.84110, νd = 43.3. Glass: 841433 — high-index crown coordinate; supplier unresolved. Standalone f = −76.370 mm.**

L5 is the negative partner cemented to L4. Its opposing sign moderates the strong positive L4 before L6 completes the
functional group. This internal positive/negative balance is evident from the final prescription, but the patent does not
identify a unique aberration assigned to L5 by itself.

### L6 — Positive Meniscus

**nd = 1.54072, νd = 47.2. Glass: 541472 — LLF2/QF8 coordinate class; supplier unresolved. Standalone f = +49.292 mm.**

L6 is the rear singlet of functional group 2. It remains positive as a standalone element and completes the convergent
second component immediately ahead of the modeled aperture-stop interval. Authoritative catalogs contain coordinate-level
matches near this nd/νd pair, but the source patent does not identify a supplier; the final data therefore retain only the
class-level label.

### L7 — Positive Meniscus, front component of C3

**nd = 1.69680, νd = 55.6. Glass: 697556 — K-LaK14/J-LAK14 coordinate class; supplier unresolved. Standalone f = +32.440 mm.**

L7 begins the cemented third functional group. Although L7 by itself is positive, it is cemented to the much stronger
negative L8. The resulting functional group is negative, with a recomputed group focal length of approximately −18.637 mm.
This is an example of why standalone element sign should not be substituted for cemented-group behavior.

### L8 — Biconcave Negative, rear component of C3

**nd = 1.80454, νd = 39.5. Glass: 805395 — NBFD3 coordinate-compatible proxy; supplier unresolved. Standalone f = −11.808 mm.**

L8 is the strongest negative standalone element in the prescription and determines the sign of the L7–L8 cemented group.
The third functional component moves with the second component in Embodiment III because $\psi(x)=x$. That common
translation is the mechanical feature that permits the patent's four optical components to be described as fewer moving
units in production-oriented prose.

### L9 — Negative Meniscus, front component of C4

**nd = 1.72825, νd = 28.3. Glass: 728283 — SF10/E-FD10/ZF4/H-ZF4A coordinate class; supplier unresolved. Standalone f = −31.489 mm.**

L9 begins functional group 4 as the negative member of a cemented pair. Its relatively low Abbe number is a source fact,
but the file does not carry line indices or a validated supplier-specific Sellmeier identity. Consequently, the analysis
does not attribute anomalous partial dispersion or apochromatic behavior to this element.

### L10 — Biconvex Positive, rear component of C4

**nd = 1.84110, νd = 43.3. Glass: 841433 — high-index crown coordinate; supplier unresolved. Standalone f = +19.039 mm.**

L10 is cemented to L9 and has substantial positive standalone power, opposing L9's negative standalone power. L11 then
adds further positive power within the net-convergent fourth functional group. The modeled semi-diameter checks identify L10 as the
minimum-edge-thickness element in the final clear-aperture construction, but its remaining edge thickness is still positive
under the Stage 2 geometry test.

### L11 — Positive Meniscus

**nd = 1.76684, νd = 46.6. Glass: 767466 — J-LASFH2 coordinate-compatible proxy; supplier unresolved. Standalone f = +52.867 mm.**

L11 is the final singlet and completes functional group 4. The complete rear component is convergent, with a recomputed
wide-state group focal length of approximately +26.234 mm. Surface 18 behind L11 is followed by the modeled image-plane
spacing, which is set to the self-consistent paraxial back focal length at each zoom keyframe rather than to the rounded
back-focus values printed by the patent.

## Glass Identification and Selection

The patent supplies only nd and νd, referenced to the Fraunhofer d line. It does not name a glass manufacturer, trade
glass, melt, C/F/g line indices, partial dispersion, or anomalous-dispersion parameter. The final data therefore preserve
coordinate/class labels instead of turning catalog proximity into supplier identity.

| Coordinate / final label | Elements | nd | νd | Identification status |
|---|---:|---:|---:|---|
| 520701 — J-PKH1 coordinate-compatible proxy; supplier unresolved | L1 | 1.52000 | 70.1 | Coordinate-compatible proxy; supplier unresolved |
| 804464 — N-LASF44 coordinate-compatible proxy | L2 | 1.80411 | 46.4 | Coordinate-compatible proxy; supplier unresolved |
| 446672 — low-index crown coordinate | L3 | 1.44628 | 67.2 | Class only |
| 611558 — H-ZK5/BACD8/SK8/BSM8 coordinate class | L4 | 1.61117 | 55.8 | Strong coordinate class; supplier unresolved |
| 841433 — high-index crown coordinate | L5, L10 | 1.84110 | 43.3 | Class only |
| 541472 — LLF2/QF8 coordinate class | L6 | 1.54072 | 47.2 | Strong coordinate class; supplier unresolved |
| 697556 — K-LaK14/J-LAK14 coordinate class | L7 | 1.69680 | 55.6 | Strong coordinate class; supplier unresolved |
| 805395 — NBFD3 coordinate-compatible proxy | L8 | 1.80454 | 39.5 | Coordinate-compatible proxy; supplier unresolved |
| 728283 — SF10/E-FD10/H-ZF4 coordinate class | L9 | 1.72825 | 28.3 | Strong coordinate class; supplier unresolved |
| 767466 — J-LASFH2 coordinate-compatible proxy | L11 | 1.76684 | 46.6 | Coordinate-compatible proxy; supplier unresolved |

The dossier's catalog review found exact or near-exact coordinate rows in authoritative HIKARI, CDGM, and SUMITA data for
several of these points and checked the official OHARA, HOYA, and SCHOTT catalog resources as available. Those comparisons
establish plausible coordinate families, not the historical procurement source for the lens. Accordingly, the data file
contains no `nC`, `nF`, `ng`, or `dPgF` fields and this analysis makes no APO or anomalous-partial-dispersion claim.

Eight of eleven elements now resolve to coefficient-backed catalog proxies. L3 and L5/L10 remain unmatched; their literal patent coordinates are retained. No supplier identity is inferred from these matches.

## Focus Mechanism

The finite-object focus status is **NO_INTERNAL_RECONSTRUCTION**. US 3,771,853 supplies zoom motion at the image focus but
no close-focus spacing table for Embodiment III. The selected source therefore does not provide enough observables to solve
a unique finite-object internal focus model.

The data file records `closeFocusM = 0.6` because archival Nikon product literature lists a distance scale from 0.6 m
(2 ft) to infinity for the production Zoom-Nikkor 28–45mm f/4.5. That number is product metadata only. Every focus vector
in the implemented `var` structure has identical infinity and close values, so moving the focus control does not invent
any optical group motion. The analysis therefore does not label the production lens as unit focus, inner focus, or floating
focus from this patent alone. [Archival Nikon product literature scan, specification block, reproduced at Pacific Rim
Camera; see Sources.]

Zoom motion and focusing are distinct in this model. The five zoom keyframes describe the patent's variable-focal-length
kinematics at the selected image focus; they do not constitute finite-object focus states.

## Aperture Stop and Clear-Aperture Modeling

The aperture ratio f/4.5 is a patent assertion, but Embodiment III does not publish a numerical iris station or physical
diameter. The implemented stop is therefore explicitly modeled. Its station is the midpoint of the 4.8 mm air gap between
functional groups 2 and 3, and its semi-diameter is 4.62743549 mm. That radius was solved so the wide-end entrance pupil
gives f/4.5. Agreement with f/4.5 at the wide endpoint is thus a calibration condition, not independent evidence of the
physical diaphragm size.

Because the model keeps that inferred stop radius fixed, the calculated wide-open f-number is not constant across zoom.
The five modeled values are approximately f/4.5000, f/4.6864, f/4.8517, f/4.9958, and f/5.1189. The production product is
marketed as f/4.5. No undocumented zoom-coupled iris law is introduced merely to force the model to reproduce that marketing
specification at every focal length.

The 600 dpi Figure 5 review reduced surfaces 14–16 to 6.2 mm and 17–18 to 8.0 mm, following the optical rims rather than annotation leaders. The patent also publishes no semi-diameters. The final clear apertures are modeled from exact meridional spherical-ray
envelopes and then checked at all five keyframes. In the portable Stage 2 geometry test, the minimum glass edge thickness
is 0.3201 mm, the maximum actual rim-slope angle is 50.254°, and the largest positive shared-gap sag-intrusion fraction is
0.88779 against the 0.90 policy limit. All sampled pupil rays at 0.6× the 135-format half-field and all full-frame chief rays
survive at every keyframe. Full-field outer-pupil samples vignette progressively toward tele; the final model retains those sampled losses while
the authored apertures otherwise satisfy the stated edge-thickness checks.

These are portable construction checks, not LensVisualizer production-render validation. The repository renderer and its
render-trim diagnostics were not available in this stage and remain integration work.

## Conditional Expressions and Zoom Kinematics

The patent's first nine Gaussian conditions define the allowed four-component power arrangement at minimum focal length.
In the source notation they require, among other relations:

- $f_1<0$, $f_2>0$, $f_3<0$, and $f_4>0$;
- $S_4>f_4$;
- $S_3+|f_3| < f_4S_4/(S_4-f_4)$;
- $|f_3|>S_3>0$;
- $f_4-|f_3|-S_3\ge 0$;
- $S_2>0$; and
- $2|f_3|>f_2>|f_3|$.

Equations (6) and (9) add the longer conjugate/principal-plane relations that constrain compactness and determine the
first-group spacing. The executed source-model verification evaluates equations (1) through (9) with independently
calculated group focal lengths and principal planes, and all pass. [US 3,771,853, PDF pp. 8–10, equations (1)–(9).]

For zooming, equation (10) requires $\psi(x)\ge x>\phi(x)$. Embodiment III selects the limiting relation
$\psi(x)=x$ and gives $\phi(x)=0.7836x$. The second and third components therefore translate together while the fourth
moves by a smaller amount in the same objectward direction; the first component moves oppositely as required by equation
(11) to maintain the focal point. Equation (12) gives the combined focal length. The three interior model keyframes were
solved from these equations rather than treated as source-published rows. [US 3,771,853, PDF pp. 9–11, equations (10)–(12)
and Embodiment III.]

The two patent endpoint spacings are preserved exactly for the variable inter-group gaps. The implemented keyframes are:

| State | Status | Zoom coordinate (mm) | d5 (mm) | d13 (mm) |
|---|---|---:|---:|---:|
| Wide | Patent-published endpoint | 28.85 | 30.3905 | 1.0864 |
| Interior 1 | Modeled from motion law | 32.7792359464 | 22.4254684099 | 1.8550117218 |
| Interior 2 | Modeled from motion law | 36.6464438139 | 15.9563682768 | 2.6236234435 |
| Interior 3 | Modeled from motion law | 40.4492965446 | 10.5232609922 | 3.3922351653 |
| Tele | Patent-published endpoint | 44.19 | 5.8365 | 4.1597 |

The `zoomPositions` values at the three interior rows are computed EFL targets, not focal lengths printed by the patent.

## Verification Summary

The final data file was traced directly from its parsed TypeScript payload. Sequential height/reduced-angle tracing and an
independently implemented height/angle ABCD calculation agree across all five authored zoom states. The endpoint focal
lengths reproduce the patent's 28.85 mm and 44.19 mm values within half of the source's 0.01 mm display unit.

| State | Computed EFL (mm) | Implemented BFL (mm) | Modeled wide-open f/# |
|---|---:|---:|---:|
| Wide | 28.8476729420 | 37.7231870887 | 4.5000 |
| Interior 1 | 32.7792359464 | 40.5063855415 | 4.6864 |
| Interior 2 | 36.6464438139 | 43.2895839943 | 4.8517 |
| Interior 3 | 40.4492965446 | 46.0727824470 | 4.9958 |
| Tele | 44.1877941384 | 48.8556954434 | 5.1189 |

The patent prints a back-focus range of 37.768–48.895 mm. The rounded prescription does not reproduce those values at the
printed 0.001 mm precision. The final model therefore uses the self-consistent paraxial BFL values shown above as the image
plane while retaining the printed back-focus values as a source discrepancy. The dossier retains this as a rounded-source discrepancy; no lens surface was altered merely to force the printed Bf
numbers.

The parsed final model also gives a surface-by-surface Petzval sum of +0.00492696779 mm⁻¹ using
$\phi/(n n')$. This is a first-order curvature quantity, not a field-curvature performance rating. The element focal lengths
listed above are likewise standalone powers in air; they are not substituted for the in-situ powers of cemented groups.

No aspherical surfaces are present, so there is no asphere section or coefficient conversion. No sensor cover, filter,
dummy surface, or mechanical plane is included, and no air-equivalent omitted-plate correction is required. The only source
table numerical correction is the USPTO's official r14 correction.

Real LensVisualizer `buildLens()` / `validateLensData()`, project type checking, Prettier, runtime glass resolution,
production render diagnostics, repository tests, and build remain outside this chat-stage verification because the project
runtime was not mounted. Their absence does not convert the portable checks into application-level validation.

## Sources and References

1. Soichi Nakamura, **US Patent 3,771,853, “Four Component Zoom Lens,”** granted 13 November 1973; Certificate of
   Correction dated 17 September 1974. Primary prescription: Embodiment III, supplied PDF pp. 11–12; repeated in claim 4,
   p. 13. Stop topology: Fig. 2, p. 3. Gaussian conditions and motion equations: pp. 8–10. Official r14 correction: p. 15.
2. Nikon Corporation, **“NIKKOR — The Thousand and One Nights No.15 — <New> Zoom Nikkor 28-45mm F4.5.”**
   https://imaging.nikon.com/imaging/information/story/0015/index.html
3. Nikon Corporation, **“Our Product History: 1970s.”**
   https://imaging.nikon.com/imaging/information/products_history/1970/
4. Nikon Corporation, **“Debut of Nikon F.”**
   https://imaging.nikon.com/imaging/information/chronicle/history-f/index.html
5. Nikon / Nippon Kogaku K.K., **Zoom-Nikkor 28-45mm f/4.5 product literature**, archival third-party scan; specification
   block lists 11 elements in 7 groups and a 0.6 m (2 ft) to infinity distance scale.
   https://www.pacificrimcamera.com/rl/00594/00594.pdf
6. Authoritative glass resources recorded in the dossier: OHARA optical-glass catalog, HOYA Optics data downloads,
   SCHOTT optical-glass data, HIKARI optical-glass catalog, CDGM optical-glass data sheets, and SUMITA ZEMAX/AGF data.
   These resources are used only for coordinate/class comparison; no supplier identity is asserted for the patent glasses.
