# C. P. GOERZ 100mm f/3.5 (US 912,352 Design)

## Patent Reference and Design Identification

**Patent:** US 912,352 A, *Objective*  
**Application Number:** Serial No. 441,344  
**Filed:** July 1, 1908  
**Granted:** February 16, 1909  
**Inventor:** Walther Zschokke  
**Assignee:** Optische Anstalt C. P. Goerz Aktiengesellschaft  
**Example details:** One numerical table for f = 100 (PDF p. 2) and one section drawing (PDF p. 1).

Walther Zschokke, a Swiss engineer living in Steglitz near Berlin, assigned this patent to Optische Anstalt C. P. Goerz of Friedenau. It describes a fast four-lens objective made of two separated pairs. Each pair is a positive lens and a negative lens with an air space between them shaped like a positive meniscus. The patent states two further rules: in each pair the negative lens must not exceed the positive lens (see Patent Conditions below), and the focal length of one pair must be at least twice that of the other. Neither pair is corrected on its own. The aberrations of the two pairs are meant to cancel each other, and the patent claims good chromatic and spherical correction at a large opening. The table gives one example at f = 100 and a relative aperture of 1:3.5.

The Austrian patent AT 39,177 B (Optische Anstalt Goerz AG, filed June 30, 1908, published October 11, 1909, titled "Lichtstarkes Objektiv aus vier getrennten Linsen") is the same invention and prints the same numerical example.

No commercial lens is documented as this design. It belongs to the Goerz family of four air-spaced singlets that began with the Celor (see Design Heritage below).

## Optical Architecture

The objective has four elements in four groups, in the power sequence positive–negative | negative–positive, with the diaphragm in the central air space.

- **Front pair (L1 + L2):** a biconvex crown and a weak biconcave flint, separated by 1.6 mm of air. Computed focal length +109.07 mm.
- **Central air space:** 12.0 mm. The section drawing places the diaphragm here.
- **Rear pair (L3 + L4):** a symmetric biconcave flint and a strongly curved biconvex crown, separated by 3.6 mm of air. Computed focal length +331.5 mm.

The rear pair is about three times weaker than the front pair, which meets the patent's "at least twice" rule. Both inner air spaces are thicker on the axis than at the rim. That is the positive-meniscus air shape the claim describes. The front air space (r2, r3) is concave toward the object, and the rear one (r6, r7) is concave toward the image.

The patent prints no diaphragm position. The drawing is to scale: once its first-to-last vertex span is set to the printed 32.0 mm, every drawn axial interval agrees with the table to within about 0.3 mm. On that scale the drawing puts the diaphragm about 5.8 mm behind r4. The model places the stop at the middle of the 12.0 mm space, 6.0 mm behind r4, and sizes it to 12.10 mm radius so that the entrance pupil gives f/3.5 (entrance-pupil radius 14.29 mm).

The patent also prints no back focus. The model's last interval, 85.48 mm from r8, is the computed paraxial image distance at the sodium D line. The lens is 32.0 mm long from first to last vertex and 117.48 mm from the front vertex to the image.

## Element-by-Element Analysis

### L1 — Biconvex Positive

`nD = 1.6141, νD = 56.4.` Glass: unmatched dense crown, barium-crown class, inferred from nD and ν only. f = +44.55 mm.

The positive element of the front pair. Its front surface (r1 = +43.478 mm) is the strongest converging surface in that pair. Behind it, the meniscus-shaped 1.6 mm air space separates it from L2.

### L2 — Biconcave Negative

`nD = 1.6051, νD = 38.2.` Glass: unmatched flint, inferred from nD and ν only. f = −68.61 mm.

A weak negative flint whose stronger surface (r3 = −55.866 mm) faces the front lens across the air space. Its rear surface is nearly flat (r4 = +163.934 mm) and faces the diaphragm. It has the lowest ν in the lens and is the main achromatizing element of the front pair. Its power is well below that of L1, as the patent requires.

### L3 — Biconcave Negative

`nD = 1.5513, νD = 45.2.` Glass: unmatched light flint, inferred from nD and ν only. f = −37.50 mm.

The first element behind the diaphragm. It is equi-concave (r5 = −41.667, r6 = +41.667 mm) and is the strongest negative element in the system. It has the lowest index in the lens, so it gives the largest negative contribution to the Petzval sum. The model's total Petzval sum is 0.0040 mm⁻¹ (a Petzval radius of about 2.5 focal lengths).

### L4 — Biconvex Positive

`nD = 1.6141, νD = 56.4.` Glass: the same printed glass as L1. f = +39.69 mm.

The rear collective lens. Its strongly curved rear surface (r8 = −34.439 mm) faces the image. Paired with L3 it gives only weak net positive power, so the rear pair acts mainly as a corrector for the front pair.

## Glass Identification and Dispersion

For each glass the patent prints three values: the sodium D index (Dn), the index at the hydrogen G′ line (434 nm), and the difference it labels "C−F", meaning nF − nC. The model uses the D index and the Abbe number derived from it, νD = (nD − 1)/(nF − nC):

| Elements | nD | nG′ (printed) | nF − nC (printed) | νD (derived) | Class (inferred) |
|---|---:|---:|---:|---:|---|
| L1, L4 | 1.6141 | 1.6280 | 0.01088 | 56.44 | dense barium crown |
| L2 | 1.6051 | 1.6260 | 0.01586 | 38.15 | flint |
| L3 | 1.5513 | 1.5672 | 0.01220 | 45.19 | light flint |

The model does not use the G′ indices directly; the engine applies its normal partial-dispersion relation to nD and νD. A rough normal-glass estimate from the same nD and ν comes within about 0.0001 of each printed G′ index. So the printed data shows no unusual partial dispersion, and the modelled colour should be close to the patent's glasses. The patent names no glass maker, and no factory melt is identified. No catalogue glass matches within 0.0001 in index. Close catalogue rows are Hoya BACD6 (1.6138 / 56.38) for L1 and L4, Schott F5 (1.6034 / 38.03) for L2 and Schott LLF1 (1.5481 / 45.75) for L3, so the elements carry unmatched glass labels.

In each pair the negative lens has the lower index (1.6051 against 1.6141 in front, 1.5513 against 1.6141 behind).

## Focus Mechanism

The patent gives only the infinity prescription and no focusing data. The model is infinity-only and has no moving groups. A lens of this period would normally have been focused by moving the whole objective, but the patent says nothing about it.

## Patent Conditions and Model Scope

| Patent statement | Model value | Result |
|---|---|---|
| Focal length f = 100 | EFL 100.0016 mm | Matches (+0.0016 %) |
| Opening 1:3.5 | f/3.5 | Matches |
| One pair's focal length at least twice the other's | +331.5 mm rear vs +109.07 mm front (ratio 3.04) | Satisfied |
| Negative lens not greater than positive lens, in each pair | Index: 1.6051 ≤ 1.6141 and 1.5513 ≤ 1.6141. Thick-lens power: front 1/68.61 < 1/44.55, rear 1/37.50 > 1/39.69 | Index reading satisfied; power reading fails in the rear pair |

The US text calls the second quantity "refractive power". Read as focal power, the rear pair does not satisfy it. Google Patents' machine translation of the Austrian counterpart words the same rule as refractive index, and the example satisfies it in both pairs. The US wording is probably a translation slip, not an error in the table.

Seven of the eight radii match reciprocals of round curvatures to within 0.001 mm: 1/0.023, 1/0.0142, 1/0.0179, 1/0.0061, 1/0.024, 1/0.024 and 1/0.0128. r8 (−34.439 mm) does not, so it was probably solved last to make the focal length exactly 100. The printed values give f = 100.0016, within 0.002 % of the stated 100.

**Clear apertures.** The patent prints no lens diameters. The model uses a common 15 mm semi-diameter on every lens surface. At full aperture the axial marginal ray reaches 14.29 mm on r1, so the axial beam passes. The drawing shows the lenses slightly smaller, about 14.4 mm, with L1's edge about 1.3 mm thick against the model's 0.92 mm.

**Off-axis light.** The patent states no field angle. At full aperture the 15 mm rims vignette the off-axis bundle heavily:

- **15° off axis:** individual surfaces clip up to 35 % of the bundle width.
- **20° off axis:** the lower edge of the bundle no longer gets through.
- **25° and beyond:** only a narrow bundle around the chief ray passes.

The chief ray itself passes without obstruction to 31.3° off axis. This vignetting is what one expects from an f/3.5 portrait-speed objective of 1908 mounted with rims this close to the axial beam.

## Design Heritage and Context

Goerz introduced its four-singlet "Double Anastigmat Celor" in 1898 (Series Ib, f/4.5 to f/5.5) and a cheaper f/6.8 "Syntor" in 1903, according to the 1911 *Encyclopædia Britannica*. The Celor was designed by Emil von Höegh. It was first sold as the Double Anastigmat Goerz Type B and renamed Celor in 1904. Zschokke's 1908 patent keeps the four separated lenses but breaks the near-symmetry of the Celor. One pair is made much weaker than the other, and each pair is left uncorrected on its own, so that it compensates the other at f/3.5.

A forum post quoting a 1910 German photographic handbook lists a Goerz Porträt-Celor at f/3.5 in 15, 24 and 36 cm focal lengths. That lens is the closest marketed match in date and aperture. No catalogue, museum record or patent marking ties it to this prescription, and the handbook is known here only through the quotation. Zschokke is also credited with the later Goerz Dogmar (sold from about 1914). The Dogmar is a separate four-singlet design under a different patent.

## Sources

1. Walther Zschokke, **US Patent 912,352, "Objective,"** assigned to Optische Anstalt C. P. Goerz Aktiengesellschaft; filed July 1, 1908, granted February 16, 1909. Drawing: PDF p. 1. Specification, table and claim: PDF p. 2. https://patents.google.com/patent/US912352A/en
2. Optische Anstalt Goerz AG, **AT 39,177 B, "Lichtstarkes Objektiv aus vier getrennten Linsen,"** filed June 30, 1908, published October 11, 1909. https://patents.google.com/patent/AT39177B/en
3. *Encyclopædia Britannica*, 11th edition (1911), "Photography," vol. 21, p. 537 (Goerz Celor and Syntor). https://en.wikisource.org/wiki/Page:EB1911_-_Volume_21.djvu/537
4. "Celor lens," Wikipedia (citing R. Kingslake, *A History of the Photographic Lens*). https://en.wikipedia.org/wiki/Celor_lens
5. Photrio forum post quoting a 1910 German handbook's list of Goerz lenses, including the Porträt-Celor f/3.5 (secondary). https://www.photrio.com/forum/goto/post?id=175685
6. Photrio forum thread on the Goerz Dogmar, crediting W. Zschokke as its designer (secondary). https://www.photrio.com/forum/threads/goerz-dogmar-500mm-f-4-5.112023/
