# Goerz Double Objective 240mm f/7.6 — GB 1898/12,859

## Patent Reference and Design Identification

**Patent:** GB 1898/12,859 (British patent No. 12,859 of A.D. 1898, complete specification)<br>
**Filed:** 8 June 1898 (date of application)<br>
**Published:** 6 August 1898 (accepted)<br>
**Inventors:** Carl Paul Goerz, Emil von Höegh<br>
**Applicants:** Carl Paul Goerz and Emil von Hoegh, of Friedenau near Berlin, "Opticians"; agents W. P. Thompson & Co.,
London<br>
**Title:** *Improved Double Objective for Photographic and the like purposes*<br>
**Example details:** the one numerical example, unnumbered, on page 2, given for one half (Fig. 1) and the air space
between the halves (Fig. 3); f = 240 mm, effective aperture 32 mm

The patent starts from the cemented three-lens anastigmat, in which one contact surface collects and the other
disperses the light. The patentees reasoned that the correction depends on the index difference across these
surfaces, and that replacing glass-to-glass contacts by glass-to-air surfaces would raise those differences six or
seven times. The result is a half of only two single lenses separated by air: a biconcave lens L1 of low index and a
biconvex lens L2 of high index. The patent derives it from the three-lens system by lowering the index of the enclosed
lens until it becomes air, so that the middle member is an air lens between a biconcave and a biconvex lens. Its own
figures give the index steps as 0.06 and 0.10 at the two contact surfaces of a cemented triplet and 0.53 and 0.61 at
the two air surfaces of the new half.

The text describes how the form was found. Equations for spherical correction and the sine condition gave candidate
forms, each checked by a trigonometric marginal ray; their field was examined with a principal ray at 32°. Every
candidate showed strongly curved astigmatic image surfaces, least so with the shortest first lens, and the patentees
gave up the strict sine condition in each half to bring the two astigmatic image points together in the image plane,
removing the axial spherical aberration by trigonometric trial. A single half then showed a slight lack of sharpness,
which the text attributes to the neglected sine condition; two halves "exactly centrally united" (Fig. 3) gave a
double objective with the flat anastigmatic field of the best double anastigmats at a larger opening.

The claim protects the two-lens half: a simple or composite biconcave lens of low refracting power and a simple or
composite biconvex lens of high refraction separated by air, the facing surface of the biconcave lens acting as a
disperser with a greater curvature than the collecting surface behind it, and a double objective of two equal or
similar halves. Figs. 4 to 6 show either lens or both made of two cemented lenses of nearly equal index, which the
text offers as a way to complete the achromatism with the available glasses.

The patent names Goerz and von Höegh together, both as applicants. Von Rohr (1899) gives the design to von Höegh and
cites "an English patent of 1898" for it without a number. The example's ratings, 240 mm and 32 mm, are not tied by
the patent to a catalogued product, so the file carries no mount or format and names the example in its title.

## Optical Architecture

The objective is a symmetrical double lens of four separate lenses: positive, negative, stop, negative, positive.
Each half is an air-spaced achromat, a biconvex crown outside and a biconcave flint next to the stop, 1.813 mm apart
on the axis. The halves are 12.043 mm apart, and the model centres the stop between them, where Fig. 3 draws the
diaphragm. The vertex length is 30.03 mm.

| Surface | Index step | Surface power (mm⁻¹) | Patent's role |
|---|---|---|---|
| r1 = +59.309 (R4) | air → 1.6112 | +0.01031 | outer collective face |
| r2 = −130.924 (R3) | 1.6112 → air | +0.00467 | collecting surface S of the air lens |
| r3 = −88.944 (R2) | air → 1.5356 | −0.00602 | dispersing surface Z of the air lens, the more curved |
| r4 = +71.973 (R1) | 1.5356 → air | −0.00744 | inner face, concave toward the stop |

The rear half mirrors these surfaces. The example traces to an EFL of 243.032 mm, 1.26 % above the stated 240 mm,
with a paraxial back focus of 229.115 mm. Each half has a focal length of +444.6 mm, 1.83 times that of the pair. The
Petzval sum is 1.052 × 10⁻³ mm⁻¹, a Petzval radius of 951 mm or 3.9 f.

The two faces bounding the air lens have a combined power of −0.00135 mm⁻¹. The air space is 1.813 mm on the axis and
1.23 mm at the 17.8 mm rim, and, as the patent's own account of its trial calculations implies, the thickness of this
space and the spacing of the halves are the main correcting variables.

## Element-by-Element Analysis

### L1 / L4 — Biconvex Positive, outer crown

nD = 1.6112, νD = 58.6 (sodium D). Glass: Unmatched (patent nD/νD only); von Rohr's heaviest baryta crown.
f = +67.5 mm.

The patent's L2, the high-index biconvex lens. Its strongly curved outer face carries most of the positive power of
its half; its inner face is the collecting surface of the air lens. With the printed radii it reaches a knife edge at
19.85 mm and keeps 0.98 mm at the 17.8 mm rim. L4 is its mirror image.

### L2 / L3 — Biconcave Negative, inner flint

nD = 1.5356, νD = 50.8 (sodium D). Glass: Unmatched (patent nD/νD only); von Rohr's borosilicate flint.
f = −73.9 mm.

The patent's L1, the low-index biconcave lens. Its outer face is the dispersing surface of the air lens, more deeply
curved than the crown face it faces, as the claim requires; its inner face, concave toward the stop, is the
strongest negative surface of the system and the largest negative term of the Petzval sum. Because this lens has the
lower index, its negative power contributes more to the Petzval sum per unit of power than the crown's positive power,
which is how the pair flattens the field. The lens is 2.246 mm thick on the axis and 6.28 mm at the rim. L3 mirrors
it.

## Glass Identification and Selection

The patent gives each glass its index for the D line and its "relative dispersion", (nD − 1) divided by the
dispersion between the C and F lines, which is the Abbe number νD.

| Element | nD | νD | Von Rohr's name (p. 392) | ν̄ (von Rohr) |
|---|---|---|---|---|
| L1, L4 (patent L2) | 1.6112 | 58.6 | Schwerstes Baryt-Crown (heaviest baryta crown) | 45.9 |
| L2, L3 (patent L1) | 1.5356 | 50.8 | Borosilikat-Flint (borosilicate flint) | 39.1 |

The file stores both values with `indexReference` "D", so the engine traces C, D and F from the patent's own pairs and
estimates g. Neither pair reproduces a modern catalog glass at the helium d line (the nearest differ by more than
0.001 in index), and no catalog glass is substituted. Von Rohr's ν̄ = (nD − 1)/(nG′ − nD) is a different figure, for
the photographically active blue, and is given only for comparison with his text.

The pairing reverses the old achromat: the crown has the higher index and the lower dispersion, a combination the Jena
baryta glasses made possible. The νD difference is modest, 58.6 against 50.8, so both lenses must be strong. The
patent adds that if the achromatism of the halves can be reached only approximately with the glasses available, one
lens can be made of two cemented lenses of nearly equal index and different dispersion.

## Focus Mechanism

The patent gives only the infinity prescription. The model is infinity-only: the last gap is the computed paraxial
back focus, and no focusing motion or close-focus spacing is modelled.

## Aperture, Field and Rims

The patent gives an effective aperture of 32 mm for its 240 mm objective. At the traced EFL that is f/7.6, which the
model uses: an entrance-pupil radius of 15.99 mm and a stop radius of 14.62 mm. The axial beam reaches 15.99 mm at r1
and 15.25 mm at r8, inside the 17.8 mm rims. Traced on axis, the longitudinal spherical aberration is +0.88 mm at the
rim of the pupil, +0.12 mm at 0.85, −0.18 mm at 0.7 and −0.21 mm at 0.5; the marginal ray crosses zero near 1:9.4 and
the deepest zone is −0.23 mm at a height of 9.3 mm. Reduced to f = 100 the zone is −0.09 mm.

The patent claims an effective angle of the image of over 80°, and the model traces to ω = 40°. The chief ray passes
there at heights of 13.0, 11.4, 8.0 and 6.3 mm on r1 to r4, with the entrance pupil close to folding: at 38° and 40°
two rays from the field direction pass through the centre of the stop. A meridional trace passes about 87 % of the
stop-filling beam at 20°, 71 % at 28°, 60 % at 32° and 16 % at 40°; the paraxial rim limit is 52.0°, at r1 and r8.
Coddington traces along the chief ray put the tangential and sagittal images 0.87 and 0.72 mm inside the image plane
at 28°, where they nearly meet; at 32°, the patent's test angle, they lie 7.4 mm inside and 3.5 mm beyond it. Distortion
is +0.2 % at 28° and +1.3 % at 40°, a slight pincushion. Neither the patent nor von Rohr says at what stop the
"over 80°" is meant; f/11, f/16 and f/22 are provided.

The clear radii are measured from Fig. 3, which the patent marks as "a reproduction of the original on a reduced
scale". Its rear half is drawn close to the printed spacings (crown 64.5 px, air 19.5 px and flint 32.5 px for
4.934, 1.813 and 2.246 mm) and stands 17.8 mm in semi-height at that scale, the value the model takes for every
surface. The front half is drawn smaller, about 0.82–0.87 of the rear half in both height and thickness, although the
table describes two equal halves; at the rear half's scale it would be 14.6 mm in semi-height, too small for the
32 mm aperture, so it is not used. The drawn diaphragm opening, about 13.0 mm in radius, is smaller than the 14.62 mm
stop the stated aperture needs; the model sizes the stop from the aperture.

## Design Heritage and Context

Moritz von Rohr's *Theorie und Geschichte des photographischen Objektivs* (1899) prints this example as Fig. 147,
"E. von Höegh: Objektiv mit acht reflektirenden Flächen", reduced to f = 100 and listed from the front:
r = 24.4, 53.8, 36.6 and 29.6, d = 2.0 and 0.9, b1 = 0.7 and b2 = 2.5, with the patent's two nD values, computed for
1:7.6 and ω = 30½°. These are the patent's values divided by about 2.432 and rounded to 0.1. He reports spherical
zones of at most −0.1 mm with correction at about 1:10, oblique pencils satisfactory to about 30° and astigmatism
strictly corrected at 28°; reduced to f = 100 this file gives a zone of −0.09 mm, correction near 1:9.4 and the
astigmatic images almost coincident at 28°.

Von Rohr dates the construction to an English patent of 1898 and a German application made with some restrictions,
and lists the notice "A new Goerz lens" in *The British Journal of Photography* of 1898. He relates the form to older
proposals for objectives with eight free surfaces, among them Fr. von Voigtländer's scheme of 1879 (his Fig. 120),
whose construction data are unknown. On the same page he reports von Höegh's next construction of early 1899, English
patent 2854 of 8 February 1899: a single objective of two lenses derived from the cell types of the Doppel-Anastigmat
by separating the formerly cemented lenses by a positive air meniscus.

The objective follows von Höegh's Doppel-Anastigmat of 1892, the cemented-triplet double lens Goerz sold from 1893.
Later histories link the air-spaced four-lens double of 1898 to the Goerz Celor; neither the patent nor von Rohr
names it, and the link was not checked against a Goerz catalogue.

## Sources

- Carl Paul Goerz and Emil von Hoegh, GB 1898/12,859, *Improved Double Objective for Photographic and the like
  purposes*, application 8 June 1898, accepted 6 August 1898:
  [Espacenet](https://worldwide.espacenet.com/patent/search?q=pn%3DGB189812859A) original-document scan (five pages:
  description on pages 1–3 with the example on page 2, claim on pages 3–4, drawing sheet with Figs. 1–6 on page 5).
- Moritz von Rohr, *Theorie und Geschichte des photographischen Objektivs* (Berlin: Julius Springer, 1899), p. 392
  and Fig. 147: [p. 392](https://www.e-rara.ch/download/pdf/4637944.pdf#page=148); Fig. 120 on
  [p. 319](https://www.e-rara.ch/download/pdf/4637944.pdf#page=75); the definition of ν̄ on
  [p. 339](https://www.e-rara.ch/download/pdf/4637944.pdf#page=95); bibliography entries E. von Höegh 9 and 10 on
  [p. 415](https://www.e-rara.ch/download/pdf/4637806.pdf#page=18).
