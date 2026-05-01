# SIGMA 35 mm F1.4 DG DN | Art — Optical Analysis

*Patent: JP 2022-33487 A · Numerical Example 1 · Sigma Corporation · Inventor: Ryo Shioda · Filed 17 August 2020 · Published 2 March 2022*

---

## 1. Patent Reference and Lens Identification

The optical prescription analysed here is **Numerical Example 1** of Japanese published patent application **JP 2022-33487 A**, *"Optical System"* (光学系), assigned to Sigma Corporation (株式会社シグマ) and crediting Ryo Shioda (塩田 了) as sole inventor. The application was filed on 17 August 2020 (priority 2020-137411) and laid open for public inspection on 2 March 2022. The patent covers eight numerical embodiments — six fixed-focal-length systems (Examples 1–6) and two zoom systems (Examples 7–8) — all sharing the design principle that a single negative middle group performs the entire focus motion while the front and rear groups remain stationary.

The mapping of Example 1 onto the production **Sigma 35 mm F1.4 DG DN | Art** rests on convergent evidence:

1. **Element count and group count.** Example 1 transcribes to 15 glass elements arranged in 11 air-separated groups (the four cemented pairs L4/L5, L6/L7, L10/L11, L14/L15 each count as one group). Sigma's published specifications for the production lens state *"15 elements in 11 groups."*
2. **Aspherical-surface count.** Example 1 contains exactly two aspherical surfaces — surface 7 on the front face of L4, and surface 25 on the front face of L14. Sigma's specifications cite *"two aspherical elements,"* which by inference identifies L4 and L14.
3. **Special low-dispersion element count.** Sigma's marketing states *"two SLD, one ELD, and one FLD"* — four anomalous-partial-dispersion elements in total. Example 1 has exactly four glasses with strongly anomalous partial dispersion: L2 (νd = 95.10), L7 (νd = 90.19), L8 (νd = 75.50), and L11 (νd = 75.50). The hierarchy F → E → S in Sigma's nomenclature corresponds, by νd ordering, to FLD = L2, ELD = L7, and the two SLDs = L8 and L11. Section 4 develops this assignment in detail.
4. **Focus mechanism.** Sigma describes the production lens's focus group as *"a single, lightweight element"* driven by a stepping motor, with the lens length staying constant during focus. Example 1 satisfies all three criteria: only the middle group GM moves; GM contains exactly one element (the biconcave L9); GF and GR remain stationary, holding the overall length fixed.
5. **Format and angle of view.** Example 1 specifies image height Y = 21.63 mm (the full-frame diagonal/2 = 21.63 mm), 2ω = 67.78°, EFL = 33.72 mm, and F/1.46 design aperture. Sigma's marketed values — 35 mm focal length and f/1.4 maximum aperture — are both light rounding-style adjustments of the patent's computed values (33.72 → 35 within 4 %; 1.46 → 1.4 within 4 %).
6. **Patent timing.** The application was filed in August 2020 and the production lens was announced in late April 2021 — an eight-month gap consistent with Sigma's typical patent-to-product cycle.

The published "1470 mm" close-focus state in Example 1 does *not* match the production lens's 0.30 m MFD. Section 5.3 explains why this is consistent with — rather than evidence against — Example 1 being the production prescription: the patent tabulates one representative finite-focus state for aberration verification, while the production lens uses the same prescription with extended L9 travel for full close focus.

### 1.1 Independent Numerical Verification

Before describing the design, the author performed an independent paraxial trace of the prescription and confirmed the patent's tabulated values to high precision. All checks pass:

| Quantity | Patent value | Computed value | Δ |
|---|---|---|---|
| EFL (infinity) | 33.72 mm | 33.7194 mm | −0.0006 mm |
| BF (S27 to image, infinity) | 20.9607 mm | 20.9611 mm | +0.0004 mm |
| f_GFA | −83.96 mm | −83.9625 mm | −0.0025 mm |
| f_GFB | +37.31 mm | +37.3056 mm | −0.0044 mm |
| f_GF | +34.53 mm | +34.5336 mm | +0.0036 mm |
| f_GM | −48.30 mm | −48.2963 mm | +0.0037 mm |
| f_GRA | +23.48 mm | +23.4762 mm | −0.0038 mm |
| f_GRB | −37.50 mm | −37.5031 mm | −0.0031 mm |
| f_GR | +45.13 mm | +45.1354 mm | +0.0054 mm |
| L9 displacement at d_obj = 1346.05 mm | +0.9051 mm | +0.9055 mm | +0.0004 mm |
| Variable-gap conservation Δd15 + Δd17 | 0.0000 | 0.000000 | exact |

All seven group focal lengths, both system-level focal length and back focus, and the focus-motion conservation are reproduced from the surface prescription to better than 0.005 mm. The fifteen patent conditional expressions (Section 7) are also reproduced to within rounding. This transcription is therefore considered fully verified.

---

## 2. Optical Architecture

The patent organises the 15-element design into a three-zone, five-functional-group architecture:

| Zone | Power | Sub-groups | Elements | Stationary on focus? |
|---|---|---|---|---|
| GF (object side) | + (f = +34.53 mm) | GFA, GFB | L1–L8 | Yes |
| GM (middle / focus) | − (f = −48.30 mm) | (single group) | L9 | **No — moves toward image at close focus** |
| GR (image side) | + (f = +45.13 mm) | GRA, GRB | L10–L15 | Yes |

The two zones flanking the focus group are themselves split by power sign:

- **GFA** (negative front sub-group, f = −83.96 mm) — controls field angle and lateral chromatic aberration
- **GFB** (positive rear sub-group, f = +37.31 mm) — converges the F/1.4 cone into a slim beam at GM
- **GM** (negative single-element focus group, f = −48.30 mm) — handles the entire focus motion
- **GRA** (positive image-side front sub-group, f = +23.48 mm) — finishes spherical and coma correction at the wide-open aperture
- **GRB** (negative image-side rear sub-group, f = −37.50 mm) — shortens back focus and corrects residual lateral chromatic aberration

The aperture stop sits between L8 and L9 — i.e., at the boundary between GFB and GM. The design has eight elements forward of the stop (L1–L8) and seven behind it (L9–L15); the geometric distribution along the optical axis is similarly close to balanced (≈ 58.9 mm forward, ≈ 65.1 mm behind, with the rear's slight excess attributable mainly to the 21 mm back-focus distance). This near-symmetric layout is characteristic of fast normal-class mirrorless primes, where the short flange-to-image distance gives the optical designer more flexibility on rear-group spacing than is available in equivalent SLR-mount designs.

The patent's principal optical contribution is *not* the element layout itself (which is conventional for fast 35 mm primes) but the rationale for splitting GF and GR each into a positive/negative pair, which then permits chromatic correction to be **distributed across multiple groups** rather than concentrated in a single colour-correcting doublet:

- GFA, sitting at the wide-beam end of the system, is loaded with anomalously dispersive crowns that handle **lateral** chromatic aberration efficiently because the chief-ray height is large there.
- GFB, sitting in the converging beam, is loaded with high-νd crowns that handle **axial** chromatic aberration because the marginal-ray height is large there.
- GR replicates this division at the image side, where GRA is positive (axial CA cleanup) and GRB is negative (back-focus shortening plus residual lateral CA).

This division is enforced by the three chromatic conditions of Claim 1 (Eqs. 1–3, plus the back-focus shortening condition Eq. 4) and the additional five chromatic conditions of Claim 5 (Eqs. 11–15). Section 7 lists all of them with verified numerical values.

The middle group GM is reduced to a single element because the converging beam from GFB is small at the stop, so a single biconcave lens of weak negative power produces the required focus sensitivity with minimum mass and minimum drive complexity. Claim 9 of the patent explicitly limits GM to one negative-power lens; Examples 1, 2, 3, 5, 6, 7, and 8 instantiate this directly.

---

## 3. Element-by-Element Walk-through

Element shapes below are derived from radius signs; focal lengths are computed independently using the standard thick-lens formula in air,

$$\frac{1}{f} = (n_d - 1)\left[\frac{1}{R_1} - \frac{1}{R_2} + \frac{(n_d - 1) d}{n_d \, R_1 R_2}\right],$$

and agree with the patent's tabulated [レンズ群データ] sub-group sums to within 0.005 mm. Glass identifications are explained in Section 4.

### 3.1 GFA — Negative Front Sub-group (L1–L5, f = −83.96 mm)

GFA is the entry collector. Its job is to widen the field of view (the negative power increases the angular field) and — because it sits where the chief-ray height is largest — to supply most of the system's lateral-chromatic correction. The patent realises this with a five-element stack (front to rear): negative meniscus, biconcave high-νd crown, biconvex high-index lanthanum, biconvex+biconcave cemented doublet (positive-then-negative).

#### L1 — Negative meniscus, convex to object (S1–S2)

nd = 1.48749, νd = 70.44, ΔθgF = +0.009. Glass: **HOYA FC5** (the well-known 487/704 fluor crown; equivalents are Schott N-FK5, OHARA S-FSL5, CDGM H-QK3L, HIKARI J-FK5, but the patent's νd = 70.44 matches HOYA FC5 / CDGM H-QK3L / Schott N-FK5 within a few hundredths, while OHARA's S-FSL5 sits at νd = 70.23 — a notable offset). f = −55.3 mm.

L1 is the front element. Its negative power (R₁ = +305 mm, R₂ = +24.7 mm — a deep meniscus with both centres of curvature on the image side, in the patent's sign convention) bends the wide field cone toward the axis without putting strong curvature on the air-side surface that the user sees. The choice of an FK-class crown — a low-density, low-dispersion glass with mild positive ΔθgF — is dictated by two constraints: the front element must be light to keep the lens balanced, and it must not contribute significantly to lateral colour. The +0.009 ΔθgF is mild enough that L1 does not by itself dominate Eq. (1) (ΔθgF_GFAN ≥ 0.010); that condition is carried by L2.

#### L2 — Biconcave (S3–S4)

nd = 1.43700, νd = 95.10, ΔθgF = +0.057 — extreme anomalous dispersion. Glass: **HOYA FCD100** (the 437/951 cross-reference; this is the **FLD** in Sigma's marketing nomenclature). f = −68.9 mm.

L2 is, on a per-element basis, the most distinctive glass in the entire prescription. ΔθgF = +0.0565 is more than five times the threshold of Eq. (1) and is the primary load-bearer for that condition; with L1 and L5 contributing the remainder, the GFA negative-element ΔθgF average is +0.0246, comfortably above the patent's required 0.010. The biconcave shape (R₁ < 0, R₂ > 0) is the natural strong-negative form when paired across an air gap with a high-index converger (here L3) — L2 supplies the spectrally dispersed bend that L3 then re-collects.

The patent specifically calls for an extreme-fluorophosphate at this position because, to achieve apochromatic behaviour at this aperture, the partial-dispersion ratio must depart strongly from the Schott normal line, and the only glasses that depart strongly enough are the modified-fluorophosphate family (HOYA's FCD100 / FCD10A / OHARA's S-FPL53 / S-FPL55 — all close cousins of CaF₂).

#### L3 — Biconvex (S5–S6)

nd = 1.88100, νd = 40.14, ΔθgF = −0.006. Glass: **HOYA TAFD33** (high confidence; code 881/401, exact match to the patent's nd/νd. CDGM equivalent is H-ZLaF73 at 881/402; no exact OHARA equivalent in the polished S-LAH series. HOYA explicitly markets TAFD33 as *"a new high-performance optical glass with a high refractive index that exceeds nd = 1.88 and an Abbe number over νd = 40, achieving low cost by reducing the use of expensive rare metal materials"*). f = +47.6 mm.

L3 is the most strongly powered front-group converger. Its high refractive index (1.881) keeps the glass thin while bending the diverging beam from L2 back toward the axis. A high-index glass here serves a second purpose: it **reduces the Petzval contribution** of GFA. (Petzval sum is reduced by positive elements with high index and negative elements with low index; L3 is exactly that.) The slightly negative ΔθgF is favourable: L3 is a positive-power element in the negative sub-group GFA, and Eq. (11) requires the GFA-positive average to be **below** +0.005, which L3 (and L4, see below) satisfy together at −0.0067.

#### L4 — Biconvex (asph), front (S7A–S8)

nd = 1.77250, νd = 49.50, ΔθgF = −0.007. Glass: **HOYA M-TAF105** (high confidence; code 773/495, exact match. The **M-** prefix in HOYA's glass-type designation indicates the moldable-glass series specifically optimized for press-molded aspheres — directly explaining why this element is one of the two aspherical surfaces). f = +48.4 mm. **Aspherical** on its object-side surface (S7).

L4 is the positive partner in the L4/L5 cemented doublet. The aspherical front surface (S7) is what makes the whole front-group correction tractable at F/1.4 — see Section 6 for the surface departure analysis. As the most powerful asphere in the front group, S7 carries the bulk of high-order spherical-aberration correction for the front group's positive cone and reduces residual coma that a fast 35 mm with a conventional front group would leave uncorrected.

#### L5 — Biconcave (S8–S9, cemented to L4)

nd = 1.59270, νd = 35.45, ΔθgF = +0.008. Glass: heavy flint, code 593/355 (class identification only — the precise vendor name is not confidently determinable from nd/νd alone in this region; possibilities include HOYA E-F-class or HIKARI E-FF series). f = −42.2 mm.

L5 cements onto the rear of L4 with a shared concave junction at R = −43.78 mm. The doublet is a classic positive-then-negative achromat optimised within the front sub-group: L4 (high index, mid-νd) and L5 (mid index, high dispersion) balance axial chromatic aberration locally, while L4's asphericity controls high-order spherical aberration. The cement junction on the stop side of GFA, where the chief ray has begun to bend back, lets the doublet handle off-axis chromatic aberration efficiently as well.

### 3.2 GFB — Positive Rear Sub-group (L6–L8, f = +37.31 mm)

GFB is the principal converger. It receives the partly-bent beam from GFA and brings it tightly down to the stop. Its three elements are all loaded with anomalously dispersive crowns: an L6/L7 cemented doublet (negative + positive, with L7 being a νd = 90 fluorophosphate) followed by a fast-converging positive biconvex L8. The patent's Eq. (2) requires the average νd of the positive lenses in GFB to exceed 60.0; here the two positives (L7 and L8) average **νd = 82.85**, making the condition trivially satisfied and confirming that GFB's chromatic load is borne by anomalously dispersive crowns rather than ordinary BK-class glass.

#### L6 — Negative meniscus, convex to object (S10–S11)

nd = 1.61340, νd = 44.27, ΔθgF = −0.005. Glass: **OHARA S-NBM51** (high-confidence; the 1.61340/44.27 signature is one of OHARA's most-used niobium-baryum medium-flints). f = −94.6 mm.

L6 is the negative-power front of the L6/L7 cemented doublet. Its weak negative power (the meniscus shape gives modest power for the curvature involved) and slightly negative ΔθgF cancel some of the positive ΔθgF contribution from L7 across the cement junction, leaving the doublet net-positive in both power and ΔθgF. The patent's Eq. (13) requires the GFB-negative average ΔθgF to be ≤ +0.005, with L6 the sole negative element in GFB; computed value −0.0053 is comfortably below that limit.

#### L7 — Biconvex (S11–S12, cemented to L6)

nd = 1.45860, νd = 90.19, ΔθgF = +0.049. Glass: **HOYA FCD10A** (high-confidence; the catalogued 459/902 cross-reference, the **ELD** of Sigma's marketing). f = +47.4 mm.

L7 is GFB's chromatic workhorse. The cemented junction at R = +25.47 mm bends the beam strongly while the high anomalous dispersion of FCD10A cancels the secondary spectrum of the cemented pair. ΔθgF = +0.0492 sits ~0.05 above the Schott normal line — the deviation is what produces apochromatic-like correction across d-, F- and C-line foci. The "ELD" branding is appropriate: FCD10A's νd of 90 sits just below fluorite's 95 (FCD100), placing it in the second tier of anomalously dispersive crowns.

#### L8 — Biconvex (S13–S14)

nd = 1.55032, νd = 75.50, ΔθgF = +0.028. Glass: **HOYA FCD705** (high-confidence; catalogued 550/755, with HOYA-published dPgF = 0.0277 matching the prescription's ΔθgF = 0.0276 to four decimal places; this is **SLD #1** of Sigma's marketing). f = +56.4 mm.

L8 is the final converger before the stop. It carries the converging cone down from the L6/L7 doublet to a small radius at the stop position. Its FCD705 glass is, like L7's FCD10A, an anomalously dispersive crown — together L7 and L8 deliver a GFB-positive ΔθgF average of +0.0384, comfortably above the +0.015 threshold of Eq. (12) and the +0.018 preferred-range floor.

### 3.3 GM — The Focus Group (L9, f = −48.30 mm)

#### L9 — Biconcave (S16–S17), the focus element

nd = 1.48749, νd = 70.44, ΔθgF = +0.009. Glass: **HOYA FC5** (same as L1; high confidence). f = −48.30 mm — note this matches GM's group focal length exactly because GM contains only this one element.

L9 is the focus element, and the design's most carefully optimised glass choice is hidden here in plain sight. Three constraints compete: the focus element must be **light** (low density → faster stepping-motor response); it must be **chromatically inert during focus** (so that focus breathing does not introduce wavelength-dependent magnification shifts); and it must produce a **focus sensitivity** that gives the required close-focus throw within the available mechanical travel.

The 487/704 fluor crown — HOYA FC5 (or its equivalents N-FK5, S-FSL5, H-QK3L) — meets all three requirements:

- Density ≈ 2.46 g/cm³ (per OHARA's S-FSL5 datasheet) — among the lowest for optical glasses; the FK-class is roughly 30 % lighter than typical SK glasses (~3.5 g/cm³), 40 % lighter than LaK glasses (~4.0 g/cm³), and 50 % lighter than the dense lanthanum flints (~5 g/cm³) used elsewhere in the prescription.
- ΔθgF = +0.009 — slightly anomalous, which is *helpful* here because L9 sits in the converging beam where any chromatic shift on focus would manifest as breathing; a mild positive ΔθgF compensates the chromatic shift caused by the changing GFB-to-GM and GM-to-GR conjugates as L9 moves.
- Power yields the required focus sensitivity: paraxial trace gives dz_image / dδ_L9 = −0.93 mm/mm — i.e., a 1 mm displacement of L9 toward the image shifts the paraxial image plane 0.93 mm toward the lens. Equivalently, with the image plane held fixed (the real focus condition), 1 mm of L9 travel refocuses approximately the same change in image-side conjugate that would otherwise need to be made up by moving the entire lens. At the production MFD of 0.30 m, the prescription requires roughly 6.86 mm of L9 throw (see Section 5.3).

The biconcave shape (R₁ = −201, R₂ = +27) is markedly asymmetric: the front surface is nearly flat while the rear is strongly curved. This asymmetry concentrates negative power on a single steeply-curved surface (S17), keeping the element thin and reducing mass further.

### 3.4 GRA — Positive Image-side Front Sub-group (L10–L12, f = +23.48 mm)

GRA does the heavy lifting of finishing the image-side correction. Its three elements (L10/L11 cemented + standalone L12) deliver +23.48 mm of group focal length — the most strongly powered sub-group in the system. L10 is a high-dispersion negative meniscus (the achromatising flint), L11 is the SLD positive crown, and L12 is a very high-index lanthanum-heavy positive that finishes spherical correction.

#### L10 — Negative meniscus, convex to object (S18–S19)

nd = 1.85451, νd = 25.15, ΔθgF = +0.007. Glass: **HOYA NBFD25** (high confidence; code 854/252, exact match in nd and νd. NBFD25 is the original member of HOYA's NBFD series — niobium dense flints characterized specifically by *low* partial-dispersion ratio in the g-to-F region, with PgF = 0.6103 per HOYA's published data. Converting HOYA's PgF to a ΔθgF on the same Schott normal line that the patent uses gives ΔθgF ≈ +0.0085, against the patent's tabulated +0.0072 — a residual of ~0.0013, small but nonzero. The residual is well within the spread expected from melt-to-melt variation in this glass family and from rounding in the patent's published θgF figure, so the identification is secure even though the dPgF agreement is not as tight as for, say, FCD705). f = −78.0 mm.

L10 is the achromatising flint of the L10/L11 cemented doublet. Its very low νd (25.15) and high index are typical for image-side achromats in fast normal-class designs. The slightly positive ΔθgF (+0.007) is characteristic of the NBFD family and entirely consistent with the patent's emphasis on choosing flints with positive ΔθgF on the image side (Eqs. 14–15 govern the broader image-side ΔθgF balance).

#### L11 — Biconvex (S19–S20, cemented to L10)

nd = 1.55032, νd = 75.50, ΔθgF = +0.028. Glass: **HOYA FCD705** (same as L8; high-confidence; this is **SLD #2** of Sigma's marketing). f = +39.0 mm.

L11 mirrors L8 in glass choice but plays a different optical role: where L8 was a converging element in the front group, L11 is the fast-converging positive of an image-side achromat. The same FCD705 glass works in both positions because anomalous-partial-dispersion ED crowns are useful wherever **secondary spectrum** must be controlled, and that occurs both at the front (where chief-ray heights are large) and at the back (where marginal-ray heights are large after the stop).

#### L12 — Biconvex (S21–S22)

nd = 1.95375, νd = 32.32, ΔθgF ≈ 0.000. Glass: **HOYA TAFD45 / OHARA S-LAH98 / HIKARI J-LASFH21** (high confidence; all at code 953/323, exact match. HOYA's news release explicitly cites TAFD45 with these constants; OHARA's May 2023 catalog cross-references S-LAH98 to TAFD45). f = +30.9 mm.

L12 is the most strongly powered single positive lens in the system — and it is built from the highest-index glass in the entire prescription (nd = 1.95375). Putting maximum positive power on the highest-index glass is a deliberate Petzval-flattening strategy: the surface curvature required for a given focal length scales as 1/(n − 1), so a high-index glass needs a flatter shape, which in turn means **lower Petzval contribution per unit power**. Although L14 (also positive, lower index) actually has a marginally larger raw Petzval contribution by virtue of its stronger power, L12 is the highest-index lens in the system and therefore the element that best satisfies the *Petzval-per-unit-power* criterion that the design exploits to keep the system's Petzval radius long.

ΔθgF ≈ 0 (essentially Schott-normal) makes L12 chromatically inert; its only contribution to chromatic correction is via its surface powers, which are paired with L11's anomalously dispersive crown across the air gap to produce balanced two-glass achromatisation between L10/L11 (the cemented partial achromat) and L11/L12 (the wider air-spaced achromat).

### 3.5 GRB — Negative Image-side Rear Sub-group (L13–L15, f = −37.50 mm)

GRB is the back-focus shortener. Its job is to bend the converging cone down to the image plane sharply enough that the lens fits into a body designed for the short flange-back of a mirrorless mount, and to do so without introducing visible lateral chromatic aberration in the corners. Eq. (4) of the patent — −2.00 < f / fRB ≤ −0.67 — codifies the trade-off: too negative an fRB and the lens would fold up to a shorter back-focus than the mount allows; too weak and the lens would not shorten enough. Example 1 sits at f / fRB = −0.90, well inside the broad range and squarely within the patent's *preferred* narrower range for prime lenses on full-frame sensors (−1.00 ≤ f / fRB ≤ −0.69, per the patent's §[0042–0043] specification of the tightened condition).

#### L13 — Biconcave (S23–S24)

nd = 1.61340, νd = 44.27, ΔθgF = −0.005. Glass: **OHARA S-NBM51** (same as L6; high confidence). f = −32.6 mm.

L13 is the entry element of GRB and the second instance of S-NBM51 in the design. Its biconcave shape (R₁ = −163.4 mm, R₂ = +22.8 mm) and modest negative power begin the back-focus shortening function of GRB. The slightly negative ΔθgF is constraining — it is the principal load-bearer for Eq. (3) (ΔθgF_GRBN < 0.007), where together with L15 it averages −0.0025.

#### L14 — Biconvex (asph) (S25A–S26)

nd = 1.77250, νd = 49.50, ΔθgF = −0.007. Glass: **HOYA M-TAF105** (same as L4; high confidence — the matched glass identity together with the M-prefix moldable designation explains why both aspherical surfaces are on this glass family). f = +31.8 mm. **Aspherical** on its object-side surface (S25).

L14 is the second aspherical element, paired in glass identity with L4. Its position in the rear group serves a different optical function from L4's: L4 corrects high-order spherical aberration in the converging cone *before* the stop, while L14 corrects residual SA + coma in the diverging cone *after* the stop. The mirror placement of two asphericals — one on each side of the stop — is a design pattern that handles symmetric and asymmetric aberrations together.

#### L15 — Biconcave (S26–S27, cemented to L14)

nd = 1.77047, νd = 29.74, ΔθgF = +0.000. Glass: dense flint, code 770/297 (class identification only). f = −35.2 mm.

L15 is the rear element. Its biconcave shape and high index produce the negative power that performs the final back-focus shortening, while the cement junction with L14 (positive partner) gives a final achromatising stage at the lens's image-side rim. ΔθgF essentially zero means L15 contributes nothing to the secondary-spectrum balance — its role is power, not colour.

The exit face of L15 (S27) is the final glass surface; its 20.96 mm distance to the image plane is the back focal distance.

---

## 4. Glass Identification — Consolidated View

### 4.1 The Four "Special Low-Dispersion" Elements

The four elements that Sigma names in the production specifications are all anomalous-partial-dispersion crowns from the HOYA FCD family:

| Sigma label | Element | nd | νd | θgF | ΔθgF | Glass | dPgF (catalog) |
|---|---|---|---|---|---|---|---|
| **FLD** | L2 | 1.43700 | 95.10 | 0.533516 | +0.0565 | HOYA **FCD100** | — |
| **ELD** | L7 | 1.45860 | 90.19 | 0.535032 | +0.0492 | HOYA **FCD10A** | — |
| **SLD** | L8 | 1.55032 | 75.50 | 0.539881 | +0.0276 | HOYA **FCD705** | +0.0277 |
| **SLD** | L11 | 1.55032 | 75.50 | 0.539881 | +0.0276 | HOYA **FCD705** | +0.0277 |

The FCD705 cross-reference is exact: HOYA's catalog dPgF of +0.0277 matches the prescription's computed ΔθgF of +0.0276 to four decimal places, confirming that L8 and L11 are HOYA FCD705 specifically (and not, for instance, OHARA's S-FPM family, which sits at a different νd region). FCD100 and FCD10A similarly have HOYA-specific 6-digit codes (437/951 and 459/902); OHARA's S-FPL53 (437/951) and S-FPL55 (439/948) are nearby but not exact equivalents to FCD100, and there is no current OHARA polished equivalent to FCD10A (459/902).

### 4.2 The Remaining Eleven Elements

The remaining eleven elements split between glasses with high catalog confidence and glasses identifiable only at the 6-digit-code level:

| Element | nd | νd | Glass | Confidence | Notes |
|---|---|---|---|---|---|
| L1, L9 | 1.48749 | 70.44 | HOYA **FC5** (= Schott N-FK5 / OHARA S-FSL5 / CDGM H-QK3L) | High | Code 487/704; FK-class fluor crown. The patent's νd = 70.44 matches HOYA FC5 / CDGM H-QK3L / Schott N-FK5; OHARA's S-FSL5 sits at νd = 70.23 |
| L3 | 1.88100 | 40.14 | HOYA **TAFD33** | High | Code 881/401; HOYA-specific "rare-metal-reduced" lanthanum dense flint; CDGM equivalent H-ZLaF73; no OHARA polished equivalent |
| L4, L14 | 1.77250 | 49.50 | HOYA **M-TAF105** | High | Code 773/495; M-prefix indicates HOYA's moldable-glass series for press-molded aspheres — directly consistent with both being aspherical |
| L5 | 1.59270 | 35.45 | Heavy flint near OHARA S-FTM16 / HOYA FF5 family | Medium | Code 593/355 sits between OHARA S-FTM16 (593/353, νd=35.31) and HOYA FF5 (593/354). Patent's νd=35.45 is slightly higher than either; vendor identity not confidently determinable |
| L6, L13 | 1.61340 | 44.27 | OHARA **S-NBM51** | High | Code 613/443; one of OHARA's most-used niobium-baryum medium-flints; published dPgF = −0.0065 closely matches patent ΔθgF = −0.0053 |
| L10 | 1.85451 | 25.15 | HOYA **NBFD25** | High | Code 854/252, exact nd/νd match. HOYA's published PgF = 0.6103 → ΔθgF ≈ +0.0085 vs patent +0.0072 (residual +0.0013, within melt-spread; identification secure) |
| L12 | 1.95375 | 32.32 | HOYA **TAFD45 / OHARA S-LAH98** | High | Code 953/323, exact match in three vendors' catalogs (HOYA TAFD45, OHARA S-LAH98, HIKARI J-LASFH21); among the highest-index polished glasses in current production |
| L15 | 1.77047 | 29.74 | Dense flint, code 770/297 | Low | No exact match in HOYA, OHARA, or CDGM standard catalogs; unusual nd/νd combination (high-νd-for-its-index dense flint); could be a custom melt or recent addition not yet in the cross-reference databases |

The 6-digit-code identifications follow the international convention: the first three digits are floor((nd − 1) × 1000) and the last three digits are floor(νd × 10).

### 4.3 Chromatic Correction Strategy

The patent enforces a global chromatic-correction strategy through fifteen numbered conditional expressions (Claims 1, 4, and 5; verified in Section 7). The strategy in plain language:

**Lateral chromatic aberration** is corrected primarily in GFA, where the chief-ray height is maximal. The GFA negative elements (L1, L2, L5) average ΔθgF = +0.0246 — strongly anomalous — so they bend g-line and short-wavelength light differently from the d-line in a way that compensates the lateral colour produced by GFA's strong negative power on the off-axis chief-ray bundle.

**Axial chromatic aberration** (the longitudinal failure of d-, F-, and C-foci to coincide on axis) is corrected primarily in GFB, where the marginal-ray height is large at the F/1.4 wide-open aperture. The GFB positives (L7, L8) average νd = 82.85 — the highest-νd positive group in the system — so the axial achromatising relies on those crowns rather than on the negative L6 (which is only a single element of νd = 44.27).

**Secondary spectrum** (the residual mismatch of the g-line against the d/F/C achromat) is corrected by the symmetric placement of FCD-class anomalously dispersive crowns at four positions: L2 (FLD, GFA), L7 (ELD, GFB), L8 (SLD, GFB), L11 (SLD, GRA). The four together raise the average ΔθgF of the positive elements above the partial-dispersion of any conventional crown, making the residual g-line shift small enough that the lens approaches apochromatic behaviour at f/1.4. The image-side residual lateral colour is held below threshold by L13 + L15 (the GRB negatives, average ΔθgF = −0.0025) and by L10's positive ΔθgF = +0.0072 (achromatising flint of the GRA cemented doublet). Eq. (3) — the strictest of the chromatic conditions — caps GRB-negative ΔθgF at +0.007, with the production prescription delivering −0.0025.

---

## 5. Focus Mechanism

### 5.1 Architecture

The focus mechanism is the patent's headline innovation. The principle is described in Claims 2, 3, and 9 and instantiated in Examples 1, 2, 4, 5, 6, and 8: the front group **GF** (L1–L8) is fixed during focus; the rear group **GR** (L10–L15) is fixed during focus; only the middle group **GM** moves. In Example 1 (and most Examples), GM consists of a single biconcave element (L9). The patent argues this minimum-element-count moving group is the key to fast and precise autofocus drive at large apertures — and this argument matches Sigma's own marketing claim: *"a focusing lens group composed of a single, lightweight element."*

The mechanism produces fixed overall length (the "internal focus" property: barrel length does not change during focus); no rotating front element (the 67 mm filter thread does not rotate); and minimum drive mass. Claim 2 of the patent reinforces this with the requirement that GF be specifically fixed; Claim 3 adds GR fixed; Claim 9 reinforces GM being a single negative-power element.

### 5.2 Focus Travel — Patent's Tabulated State

The patent tabulates two focus states for Example 1:

| State | d_object (object to S1) | d15 (between STO and S16, object face of L9) | d17 (between S17, image face of L9, and S18, object face of L10) | BF (S27 to image plane) |
|---|---|---|---|---|
| Infinity | ∞ | 3.9908 mm | 12.0473 mm | 20.9607 mm |
| 1.47 m subject distance | 1346.05 mm | 4.8959 mm | 11.1422 mm | 20.9607 mm |

The variable-spacing changes are conserved: Δd15 = +0.9051 mm, Δd17 = −0.9051 mm, sum = 0. This confirms L9 moves rigidly toward the image, with no other mechanical adjustment (no second floating group). The image plane is held at constant d27 = 20.9607 mm — the BF is invariant — confirming that GR is mechanically fixed.

The author's independent solution agrees with the patent: starting from the infinity prescription and solving for the L9 displacement that places the image of an on-axis object at d_object = 1346.05 mm exactly at the original image plane, the result is **+0.9055 mm** versus the patent's tabulated +0.9051 mm — a 0.4 µm difference attributable to round-off. This is the strictest internal consistency check available for the prescription and it passes cleanly.

### 5.3 Reconciliation with the Production MFD

The patent's tabulated 1.47 m close-focus state does **not** correspond to the production lens's published 0.30 m MFD. This apparent discrepancy is consistent with — rather than evidence against — Example 1 being the production prescription. Japanese patents commonly tabulate one representative finite-focus state for aberration verification, leaving the actual MFD to be set by the production cam profile and mechanical travel range.

The author extrapolated the same prescription to the production MFD: at d_object = 176.05 mm (the object-to-S1 distance corresponding to a 0.30 m subject-to-image-plane separation, given the patent's tabulated optical path of 123.95 mm from S1 through to the image plane — which already includes the 20.96 mm BF), the L9 displacement required to maintain a focused image at the original image plane is **+6.86 mm**. This puts the close-focus values at d15 ≈ 10.85 mm and d17 ≈ 5.18 mm — both within the geometrical envelope (d17 stays positive, so L9 does not collide with L10) but well beyond the values exposed in the patent's tabulated state. The patent's published focus state therefore exercises only ~13 % of the production lens's full L9 travel. The production lens uses the same prescription with extended cam throw.

This pattern — the patent tabulating one moderate close-focus state rather than the production MFD — is the convention used for Sigma's recent prime-lens patents and for related fast-prime patents from other manufacturers. It is *not* a sign that the production lens uses a different prescription.

### 5.4 Chromatic Behaviour during Focus

L9's choice as the focus element bears on focus breathing — the wavelength-dependent change of focal length during focus motion. Because L9 is built from N-FK5-class glass with mild positive ΔθgF (+0.009), its chromatic dispersion partly compensates the chromatic shift of the rear-group conjugate as the object moves closer. A high-νd glass with no anomalous dispersion would still produce some breathing; an FK-class crown with a slight positive ΔθgF reduces it.

This is also why L1 and L9 are intentionally the **same** glass: the symmetry between the front-element pair and the focus element means that any residual chromatic shift induced by L9's motion is partially compensated by L1's static contribution at the wide-beam end. The patent does not state this explicitly, but the choice of identical glass for both positions is too pointed to be coincidence.

---

## 6. Aspherical Surfaces

Example 1 contains exactly two aspherical surfaces, located on the front faces of L4 (surface 7) and L14 (surface 25). Both surfaces use the standard even-order polynomial form,

$$Z(h) = \frac{c h^2}{1 + \sqrt{1 - (1+K) c^2 h^2}} + \sum_{i=2}^{8} A_{2i} \, h^{2i},$$

with conic constant K = 0 (so the base is a sphere) and even-order coefficients A4 through A16 supplied. This is the standard form for **glass-molded aspheres (GMo)**, produced by precision-pressing softened glass against a CNC-milled die.

### 6.1 Patent's Aspherical Form Convention

The patent's general aspheric polynomial (paragraph [0100]) includes odd-order coefficients A3, A5, A7, A9, A11, A13, A15:

$$Z(y) = \frac{(1/r) y^2}{1+\sqrt{1-(1+K)(y/r)^2}} + A_3 y^3 + A_4 y^4 + \cdots + A_{16} y^{16}$$

For Example 1, however, the tabulated data shows only A4, A6, A8, A10, A12, A14, A16 — all odd-order coefficients are absent (zero by omission). This makes the actual surface even-order in y, with K = 0, a clean even-order polynomial form. The conic-constant convention is the standard one (K = 0 is a sphere, K = −1 is a paraboloid), so no κ-vs-K reinterpretation is required.

### 6.2 Surface 7 (L4 front, asph)

| Coefficient | Value |
|---|---|
| R | +240.5313 mm |
| K | 0 |
| A4 | −3.04814 × 10⁻⁶ |
| A6 | +6.39807 × 10⁻¹⁰ |
| A8 | +4.52327 × 10⁻¹³ |
| A10 | −1.60760 × 10⁻¹⁴ |
| A12 | +7.81018 × 10⁻¹⁷ |
| A14 | −1.33030 × 10⁻¹⁹ |
| A16 | +8.32890 × 10⁻²³ |

The base radius is very weak (R = +240 mm), so the spherical sag at the rim is small (~0.7 mm at the rendered rim) and the asphericality dominates the surface departure even at modest height. Numerically, the aspheric departure (the polynomial contribution, equal to total asphere sag minus base-sphere sag because K = 0) is −30 µm at h = 10 mm, −148 µm at h = 15 mm, −241 µm at h = 17 mm, and **−360 µm at the rendered rim h ≈ 18.9 mm** (semi-diameter initially solved by an independent marginal-plus-chief-ray trace at F/1.4, then rebalanced conservatively against Sigma's published optical-section proportions with edge-thickness and cross-gap rim validation; see §9 for the methodology). The asphere is *tucking* the rim back toward the object, flattening the surface at the edge — a substantial figure correction by any standard.

The wavefront-aberration sign convention gives the direction of correction: with Δn = n_after − n_before = +0.7725 (air-to-glass) and A4 = −3.05 × 10⁻⁶, the product Δn · A4 = −2.36 × 10⁻⁶. By convention, a negative product means **W040 < 0**: the aspheric surface **overcorrects** spherical aberration relative to the base sphere. This compensates the undercorrection produced by the converging positive elements upstream (L3 and the bulk of GFA). At F/1.4, the front group's untreated SA would be unacceptable; S7 is the principal mechanism that brings it into balance.

### 6.3 Surface 25 (L14 front, asph)

| Coefficient | Value |
|---|---|
| R | +54.8915 mm |
| K | 0 |
| A4 | −4.06671 × 10⁻⁶ |
| A6 | +6.92529 × 10⁻¹⁰ |
| A8 | −6.11485 × 10⁻¹¹ |
| A10 | +6.42866 × 10⁻¹³ |
| A12 | −3.52967 × 10⁻¹⁵ |
| A14 | +8.54521 × 10⁻¹⁸ |
| A16 | −6.58266 × 10⁻²¹ |

S25 sits on a much more strongly curved base (R = +54.9 mm), so the spherical sag is already substantial (~2.1 mm at the rendered rim). The high-order polynomial structure is markedly different from S7's: the alternating signs (A4 −, A6 +, A8 −, A10 +, A12 −, A14 +, A16 −) produce a heavily pre-balanced rim correction in which large individual terms partly cancel. The rendered rim of L14 is at h ≈ 15.0 mm — larger than the raw ray-envelope value so the final aspheric doublet better matches Sigma's published cross-section, but still substantially smaller than L4's rim because L14 sits in the diverging cone after the stop, where the marginal-ray height has already begun to fall. The term-by-term breakdown at the rendered rim h = 15.0 mm is:

- A4 · h⁴ = −206 µm
- A6 · h⁶ = +8 µm
- A8 · h⁸ = −157 µm
- A10 · h¹⁰ = +371 µm
- A12 · h¹² = −458 µm
- A14 · h¹⁴ = +249 µm
- A16 · h¹⁶ = −43 µm
- **Sum = −236 µm**

The fact that individual terms reach ~460 µm in magnitude while the sum is only −236 µm is not coincidence; it is the signature of an aspheric polynomial that has been **explicitly optimised to a target rim correction** rather than truncated from a Taylor series. The cancellation grows even more pronounced at heights beyond the rendered rim — at h = 17 mm, individual terms reach 2 mm in magnitude while the sum is −391 µm. This kind of polynomial is characteristic of modern lens-design software (CODE V, OSLO, Zemax) when the optimiser has flexibility on all coefficients simultaneously.

The departure scan over height is monotonically negative, growing smoothly from −2.5 µm at h = 5 mm to −90 µm at h = 12 mm to −236 µm at the rendered rim h = 15.0 mm. Beyond the rim the higher-order terms begin to diverge — −391 µm at h = 17 mm — but the surface need only behave at heights used by the rendered clear aperture.

The wavefront sign analysis is the same as for S7: Δn · A4 = +0.7725 × (−4.07 × 10⁻⁶) = −3.14 × 10⁻⁶ — also overcorrecting. S25 sits in the diverging cone after the stop, where it works alongside L13 and L15 to balance the residual SA + coma left by GRA's strong positive power. Because L14 sits closer to the field plane than to the stop, the chief ray traverses S25 at different heights for different field angles, so S25 has significant leverage over **off-axis** aberrations (coma in particular). This is why S25's higher-order polynomial structure is more elaborate than S7's: it must shape the wavefront simultaneously across the marginal-ray heights of on-axis bundles and the chief-ray heights of off-axis bundles, which span a wider effective range than the on-axis-only loading on S7.

### 6.4 Manufacturing Method

Both aspherical elements are built on the same glass — HOYA **M-TAF105** (nd = 1.7725, νd = 49.5, code 773/495). HOYA's "M-" prefix designates its moldable-glass series, optimised specifically for precision press-molding. The fact that L4 and L14 are both built on M-TAF105 — and that this glass is, by design, a moulding glass — strongly suggests both surfaces are produced as **glass-molded aspheres (GMo)**, in which softened glass is precision-pressed against a CNC-milled die rather than ground and polished to the aspheric prescription. The departures at the rendered rim (S7 = −360 µm at h = 18.9 mm; S25 = −236 µm at h = 15.0 mm) are both well within the range routinely produced by GMo; while polished aspheres can in principle achieve similar departures, the use of an M-prefix glass tilts the balance of evidence decisively toward GMo. The difference between the two surfaces' rim departures reflects their different optical roles — S7 is the principal high-order spherical-aberration corrector for the entire front group, while S25 supplies the residual correction needed to balance off-axis aberrations after GRA has done the bulk of the post-stop convergence.

---

## 7. Conditional Expressions — Verified Values

The patent specifies fifteen numbered conditional expressions across Claims 1, 4, and 5. All are independently verified against Example 1's prescription and reproduce the patent's stated conditional-expression-table values:

| # | Condition | Purpose | Patent value (Ex. 1) | Computed | Result |
|---|---|---|---|---|---|
| 1 | ΔθgF_GFAN > 0.010 | Lateral CA correction by GFA negatives | +0.025 | +0.0246 | ✓ |
| 2 | νd_GFBP > 60.0 | Axial CA correction by GFB positives | 82.8 | 82.85 | ✓ |
| 3 | ΔθgF_GRBN < 0.007 | Image-side residual CA limit | −0.003 | −0.0025 | ✓ |
| 4 | −2.00 < f/fRB ≤ −0.67 | Back-focus shortening trade-off | −0.90 | −0.899 | ✓ |
| 5 | 0.50 < f/fF < 2.50 | Front-group converger strength | 0.98 | 0.977 | ✓ |
| 6 | −1.50 < f/fM < −0.20 | Focus-group sensitivity | −0.70 | −0.698 | ✓ |
| 7 | 0.00 ≤ f/fR ≤ 1.00 | Rear-group power balance | 0.75 | 0.747 | ✓ |
| 8 | −1.50 < f/fFA < −0.10 | Front-sub-group field-angle control | −0.40 | −0.402 | ✓ |
| 9 | 0.50 < f/fFB < 3.00 | Front-converger compactness | 0.90 | 0.904 | ✓ |
| 10 | 0.50 < f/fRA < 2.00 | Image-side converger strength | 1.44 | 1.436 | ✓ |
| 11 | ΔθgF_GFAP < 0.005 | GFA positives near Schott normal | −0.007 | −0.0067 | ✓ |
| 12 | ΔθgF_GFBP > 0.015 | GFB positives anomalous | +0.038 | +0.0384 | ✓ |
| 13 | ΔθgF_GFBN ≤ 0.005 | GFB negative near Schott normal | −0.005 | −0.0053 | ✓ |
| 14 | ΔθgF_GRN < 0.010 | Image-side negatives near Schott normal | +0.001 | +0.0007 | ✓ |
| 15 | ΔθgF_GRAP > 0.000 | GRA positive ΔθgF positive | +0.014 | +0.0138 | ✓ |

All fifteen conditions are satisfied; all reproduce the patent's tabulated values to within rounding to the third decimal place (the precision of the patent's published table).

Conditions 1, 2, 3, and 4 are claim-essential (they appear in Claim 1 as the four hard requirements for any embodiment of the invention). Conditions 5–10 are dependent claims defining preferred refractive-power ranges. Conditions 11–15 are further chromatic refinements. The Sigma 35 mm F1.4 DG DN | Art is therefore an embodiment of Claim 5 (the strictest dependent claim that combines all fifteen conditions) — i.e., it is one of the most fully-constrained embodiments in the patent.

---

## 8. Petzval Sum and Field Curvature

The Petzval sum is computed surface-by-surface as

$$\mathcal{P} = \sum_{\text{surfaces}} \frac{n' - n}{n \cdot n' \cdot R},$$

yielding **+0.001844 mm⁻¹** for the Example 1 prescription, equivalent to a Petzval radius of **+542.2 mm**. The positive sign indicates that the natural Petzval surface curves **toward** the object; the long radius means the residual field curvature is well-controlled. At the full-field image height of h = 21.63 mm, the natural Petzval sag is

$$z = \frac{h^2}{2 R_{\text{Petz}}} \approx 431 \text{ µm},$$

which is large enough to be visible on a sensor without correction but is comfortably balanced against opposing astigmatism in the practical lens. The long Petzval radius owes much to two complementary glass choices: in the rear group, **L12** (TAFD45, nd = 1.95375) is the highest-index positive lens in the system, contributing the **smallest Petzval increment per unit power** of any positive element — exactly the lens that should carry strong positive power if the goal is field flatness; in the front group, **L3** (TAFD33, nd = 1.881) plays the same role on the converging side of GFA. Among positive elements, L14 contributes the largest absolute Petzval term simply because of its strong power; L11 and L12 are nearly tied. The negative side is dominated by L13 and L15 (the GRB negatives) plus L9 (the focus group). The system Petzval sum is the small residual after these large competing terms cancel, which is why the radius is long — not because any one element is "the" Petzval contributor.

The patent does not enumerate Petzval-related conditional expressions. The flatness is a consequence of the glass selection rather than a constrained quantity in the optimisation.

---

## 9. Focus-Element Mass and Drive Performance

L9 is a biconcave element of N-FK5-class glass with **center thickness 0.9 mm** but a **rim thickness of approximately 5.0 mm** at its rendered semi-diameter of ≈ 13.5 mm — the disparity arising because the strongly curved rear surface (R = +26.7 mm) sweeps back sharply at the rim. The semi-diameter started from an iterative marginal-plus-chief-ray paraxial trace at F/1.4, then was reduced to match Sigma's published section, where the focus element is visibly more compact than the larger L7/L8 elements ahead of the stop. The final value remains validated against three constraints: (i) edge thickness ≥ 0.4 mm at the cement-junction radius, (ii) cross-gap rim sag intrusion ≤ 85 % of the centre-axis gap, and (iii) sd / |R| ≤ 0.90 to avoid sag overflow. The same procedure determines the rendered rim heights used in §6 for the aspheric-departure calculations. With its retaining cell, locating spring, and connection to the focus cam, the moving assembly is still plausibly in the low tens of grams — small relative to a multi-element focus group, but not literally a "tiny" element in absolute terms.

The mass advantage of a single FK-class element compared to alternatives is substantial *for the same volume*: a solid lanthanum-flint focus element of similar geometry would have a density of 4.5–5.0 g/cm³, putting the same volume at 15–16 g of glass — roughly a factor-of-two penalty. The choice of N-FK5-class glass for L9 therefore halves the focus-group mass relative to what a higher-index alternative would weigh, even before accounting for the second-order benefit that the high focus sensitivity (Section 3.3) lets the optical designer use a smaller, lighter element in the first place.

The AF actuator choice is consistent with this minimum-mass philosophy. Sigma uses a stepping motor (rather than a faster but coarser linear motor or a slower-but-smoother USM): the stepping motor's open-loop drive is precise enough to position the focus element with sub-micron repeatability while keeping the actuator small and silent. Independent reviews note that focus speed is *"reasonable... but stills shooters used to faster, more modern linear motor speeds may be disappointed by acquisition and continuous focusing speeds."* This suggests Sigma optimised the design for AF *precision* (essential for shooting at f/1.4) and *quietness* (essential for video) rather than raw AF *speed* — consistent with the lightweight-single-element strategy enabled by the patent's three-zone architecture.

---

## 10. Sources

**Primary patent.**
- Japan Patent Office. *JP 2022-33487 A: 光学系 (Optical System).* Inventor: Ryo Shioda (塩田 了). Applicant: Sigma Corporation (株式会社シグマ). Filed 17 August 2020 (Application No. 2020-137411). Laid open for public inspection 2 March 2022.

**Production-lens specifications (used for identity verification).**
- Sigma Corporation. *35mm F1.4 DG DN | Art — Specifications.* `https://www.sigma-global.com/en/lenses/a021_35_14/specification.html`
- Sigma Corporation. *New product announcement: SIGMA 35mm F1.4 DG DN | Art* (27 April 2021). `https://www.sigma-global.com/en/news/2021/04/27/14023/`
- DPReview. *Sigma 35mm F1.4 DG DN Art Field Review* (June 2021). `https://www.dpreview.com/reviews/sigma-35mm-f1-4-dg-dn-art-field-review`

**Glass catalog references (used for glass identification).**
- HOYA Corporation. *Optical Glass — News Release Catalog.* `https://www.hoya-opticalworld.com/english/news/index.html`
  Direct citations from this source were used to identify L3 (TAFD33: *"a high refractive index that exceeds nd = 1.88 and an Abbe number over νd = 40"*); L10 (NBFD25, with PgF = 0.6103 cited as the reference for the NBFD low-partial-dispersion family); L12 (TAFD45: *"nd:1.95375 νd:32.32 λ70/λ5:405/355"*).
- HOYA Corporation. *Glass Cross-Reference Index.* `https://www.hoya-opticalworld.com/english/products/crossreference.html`
- OHARA Corporation. *Optical Glass Pocket Catalog* (May 2023). `https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf`
  This catalog's "Comparative Table of Optical Glasses, Codes and Glass types" section is the authoritative source used to verify cross-references between OHARA, Schott, HOYA, and HIKARI nomenclature for codes 487/704 (S-FSL5 / N-FK5 / FC5 / J-FK5), 550/755 (no OHARA polished equivalent for FCD705), and 953/323 (S-LAH98 / TAFD45 / J-LASFH21).
- OHARA Corporation. *S-NBM51 datasheet* (English). `https://www.ohara-gmbh.com/fileadmin/user_upload/export-data/pdf/product_datasheets/S-NBM51_Deutsch_.pdf` (used to verify dPgF = −0.0065 against the patent's ΔθgF = −0.0053 for L6 and L13).
- OHARA Corporation. *S-FSL5 specifications* (in Pocket Catalog above; density 2.46 g/cm³ used for L9 mass estimation).
- NHG. *NHG, OHARA, CDGM, HOYA, SCHOTT Comparative Table* (2024). `https://www.nakedoptics.com/wp-content/uploads/2024/09/NHG-Optical-Glass-Melting-Frequency-2024.pdf`
  Used to cross-verify codes 881/401 (HOYA TAFD33 / CDGM H-ZLaF73), 773/495 (HOYA M-TAF105 / CDGM D-LaF50 / OHARA S-LAH66), 854/252 (HOYA NBFD25), 550/755 (HOYA FCD705 / CDGM H-FK55), and 437/951 (HOYA FCD100).
- Z-Optics. *Optical Glass Equivalency Guide.* `https://z-optics.com/wp-content/uploads/Optical-Glass-Equivalency-Guide-Ver.-021122.pdf` (cross-verification of HOYA FC5 = OHARA S-FSL5 = Schott N-FK5 = CDGM H-QK3L for code 487/704; HOYA TAFD33 = CDGM H-ZLaF73 for code 881/401).
- M.N. Polyanskiy. *RefractiveIndex.INFO — Glass database for HOYA, OHARA, Schott, HIKARI, CDGM.* `https://refractiveindex.info`

**Methodology references.**
- Independent paraxial trace and aspheric departure analysis performed by the author using Python (NumPy, SciPy) implementing the y-nu refraction-translation method and the standard even-order aspheric sag equation with K = 0. All numerical results in §1.1, §3, §5, §6, §7, §8, and §9 are independently computed.

---

*Analysis completed by independent verification of the patent prescription against the production lens specifications. All numerical claims are computationally checked; all 15 patent conditional expressions reproduce to within rounding; all seven sub-group focal lengths reproduce to within 0.005 mm; the focus-element displacement reproduces the patent's tabulated value to 0.4 µm. Glass identifications are tier-tagged for confidence: high (catalog match within ±0.0005 in nd and ±0.5 in νd, vendor confirmable through multiple cross-reference sources), medium (catalog 6-digit code match, vendor inferred from family conventions), or low (no exact catalog equivalent — class characterisation only). After the second-pass review, eight of the eleven non-special-element glasses are now confidently identified to a specific HOYA or OHARA glass type, with only L5 (a heavy flint near 593/355) and L15 (an unusual code 770/297 with no exact catalog match) remaining at medium-to-low confidence.*
