## Patent Reference and Design Identification

**Patent:** JP 2020-190696 A  
**Application Number:** JP 2019-97182  
**Filed:** May 23, 2019  
**Published:** November 26, 2020  
**Inventor:** Yoshiyuki Taki (滝 慶行)  
**Applicant:** Canon Inc.  
**Title:** Attachment Lens, and Lens Apparatus and Imaging Apparatus Using the Same  
**Example details:** 数値実施例1, ¶0069, pp. 12–14; Fig. 1 (sections) and Fig. 6 (bare master aberrations). Example 2 (pp. 14–16) prints the same master-zoom radii, glasses and fixed spacings. Source millimetres are used without scaling.

The source is the **master lens of a later Canon attachment-lens patent**, not an original 2003 patent for the EF 17–40mm f/4L USM. The patent describes a rear attachment lens (group 5) for an existing zoom and prints one combined table per example. Surfaces 1–24 of Example 1 are that master zoom, and only they are modeled. ¶0040 states that Example 2 uses the same master zoom, and its rows repeat surfaces 1–24 unchanged. No original 2001–03 Canon patent for this lens was found. Canon does not name the product, so the association below rests on construction and specification.

1. Canon's Camera Museum dates the product to May 2003 and gives 12 elements in 9 groups, with one glass-molded aspherical lens and two replica aspherical lenses. The master zoom has 12 glass elements plus two thin replica resin layers, in 9 air-separated groups, with three aspherical surfaces. The maker's drawing shows the same topology.
2. The four master groups are negative–positive–negative–positive. Their printed prescription gives bare focal lengths of 17.49/23.99/38.83 mm at Example 1's three states and 25.78 mm at Example 2's middle state, matching a marketed 17–40mm zoom.
3. Fig. 6 shows the bare master at F4.1 with ω = 51°/40°/29.1°. With tan ω = Y/f, these correspond to a 21.6 mm image height at 17.49, 25.78 and 38.83 mm, so Fig. 6(B) shows Example 2's middle state, not Example 1's 23.99 mm state. The system with the attachment fitted has 17.33/23.76/38.46 mm and ω = 51.31°/42.32°/29.36°; it is a different optical system.
4. Canon identifies one Super UD element. The master has a low-index, very-high-Abbe positive element at surfaces 19–20 (nd 1.43875, νd 95.0), consistent with that class; the actual melt and supplier are not published.
5. ¶0034 and Fig. 1 describe inner focus by an objectward-moving subgroup Lf within the first group. Canon gives USM autofocus, 0.28 m closest focus throughout the zoom range and 0.24× maximum magnification. The modeled close-focus state reproduces the last value; it is not published focus data.
6. The 2019 filing is sixteen years after the marketed lens. Reuse of an existing master supports the association, but the date cannot establish the original production design or rule out later changes.

The patent prints the inventor as 滝 慶行. A separate Canon patent family gives the Latin name Yoshiyuki Taki for this spelling, while the automatic English translation of the present patent's index reads Keiko Taki; the catalog uses Yoshiyuki Taki.

## Optical Architecture

The bare master is a four-group retrofocus zoom of power **negative–positive–negative–positive**. The stop is surface 13, immediately before the negative third group. ¶0034 describes the zoom motion from wide to tele: L1 moves on a locus convex toward the image, L2 and L4 move objectward on the same locus, and L3 moves objectward on a different locus. The printed spacings satisfy D12 + D18 = 13.12 mm, and the model keeps that sum at every zoom position.

| Group | Source surfaces | Published group focal length | Role                                                                          |
| ----- | --------------- | ---------------------------- | ----------------------------------------------------------------------------- |
| L1    | 1–7             | −21.03 mm                    | Front negative retrofocus group: front element E1 and the inner-focus subgroup |
| L2    | 8–12            | +28.82 mm                    | Positive relay: cemented pair and positive singlet                            |
| L3    | 13–18           | −46.91 mm                    | Stop and negative corrective group                                            |
| L4    | 19–24           | +47.74 mm                    | Positive rear group: Super UD singlet and replica-aspherical cemented doublet |

The patent calls group 5 (surfaces 25–30) the attachment lens. Its three lenses are left out of the model. The bare image distance is computed paraxially from surfaces 1–24; it is not obtained by subtracting the attachment or by keeping the attachment's 26.31 mm last air gap.

The two thin bonded resin layers are separate entries because they have their own refractive index and interfaces. The model therefore has 14 refracting entries, while the element count stays at Canon's 12 glass elements. The 0.10 mm front and 0.15 mm rear layers are taken to be the replica resin of Canon's two replica aspheres, from their geometry; their chemistry is not published.

¶0034 and Fig. 1 name the four groups L1–L4 (第1–第4レンズ群) and the focusing subgroup Lf. This page uses those group names, so the glass elements are called E1–E12 and the resin layers R1 and R2. H1 is the hybrid of E2 and R1; C1, C2 and C3 are the cemented pairs E4–E5, E8–E9 and E11–E12, and R2 is bonded to the front of C3. The patent's single-lens table numbers the 14 entries 1–14, counting each resin layer as a lens.

## Element-by-Element Analysis

The focal lengths below are the patent's tabulated single-lens values, in air, not in-situ powers of cemented components; the patent lists the thin layers separately. Role descriptions are optical interpretations unless tied to a cited paragraph.

### E1 — Negative Meniscus (1× Asph)

**nd = 1.58373, νd = 59.4. Glass: Unmatched (1.58373/59.4 glass-moldable crown; S-BAL42/L-BAL42 class). f = −38.77 mm.**

This strongly negative front meniscus is the retrofocus entrance element. Its almost-flat aspherical front surface carries the polynomial correction, while the 22.591 mm rear radius provides most of the negative power. Canon's single glass-molded asphere is most plausibly this element. The printed nd 1.58373 is kept. It may be a misprint of the common 1.58313 moldable crown (S-BAL42/L-BAL42 class), but Canon's US 2010/0033848 A1 prints the same 1.58373, so a misprint is unconfirmed.

### R1 — Aspherical Resin Layer

**nd = 1.52421, νd = 51.4. Glass: Unmatched (replica resin, 1.52421/51.4). f = +910.93 mm.**

This 0.10 mm bonded layer carries the first-group replica asphere on surface 3. It is a separate medium on the front of E2; Canon describes a replica construction but not the resin chemistry.

### E2 — Biconcave Negative

**nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA), catalog equivalent. f = −27.33 mm.**

The high-index negative substrate carries R1. With the following positive meniscus it forms the objectward-moving focusing subgroup Lf within group L1; their internal spacing stays fixed during focus.

### E3 — Positive Meniscus

**nd = 1.84666, νd = 23.9. Glass: S-NPH53 (OHARA), catalog equivalent. f = +52.95 mm.**

The positive dense-flint meniscus balances the front negative elements and completes Lf. Its large dispersion contrast with the negative elements provides chromatic leverage; no secondary-spectrum claim follows from nd/νd alone.

### E4 — Negative Meniscus

**nd = 1.72825, νd = 28.5. Glass: S-TIH10 (OHARA), catalog equivalent. f = −44.49 mm.**

The negative member of cemented doublet C1 in group L2 is the dispersive partner for E5; the two are cemented at surface 9.

### E5 — Biconvex Positive

**nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA), catalog equivalent. f = +32.10 mm.**

The positive crown member completes C1. Its substantially higher Abbe number than E4 supports ordinary achromatic balancing.

### E6 — Biconvex Positive

**nd = 1.67790, νd = 55.3. Glass: S-LAL12 (OHARA), catalog equivalent. f = +37.04 mm.**

This positive biconvex singlet completes group L2, just ahead of the stop. Groups L2 and L4 move together during zoom (¶0034).

### E7 — Biconcave Negative

**nd = 1.71999, νd = 50.2. Glass: S-LAL10 (OHARA), catalog equivalent. f = −50.88 mm.**

The negative singlet immediately behind the stop begins group L3. Its high-index crown class supplies negative power without the low Abbe number of a dense flint.

### E8 — Biconcave Negative

**nd = 1.62230, νd = 53.2. Glass: S-BSM22 (OHARA), catalog equivalent. f = −37.80 mm.**

The negative first member of doublet C2 in group L3 supplies additional negative power. It is cemented to E9 at surface 17.

### E9 — Positive Meniscus

**nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA), catalog equivalent. f = +40.50 mm.**

This positive dense-flint meniscus completes the negative third group; its high dispersion complements the preceding crown.

### E10 — Biconvex Positive

**nd = 1.43875, νd = 95.0. Glass: S-FPL53 (OHARA), catalog equivalent. f = +35.33 mm.**

The biconvex positive singlet begins group L4. Its νd 95.0 is consistent with a fluorophosphate Super UD glass, and Canon's construction diagram places its Super UD element here. S-FPL53 is a close catalog equivalent, not evidence of the original supplier.

### R2 — Aspherical Resin Layer

**nd = 1.52421, νd = 51.4. Glass: Unmatched (replica resin, 1.52421/51.4). f = +309.06 mm.**

This 0.15 mm bonded layer carries the rear replica asphere on surface 21, on the front of E11. No catalog dispersion curve exists for the resin.

### E11 — Biconcave Negative

**nd = 1.83400, νd = 37.2. Glass: S-LAH60 (OHARA), catalog equivalent. f = −21.53 mm.**

The negative high-index substrate carries R2 and is cemented to E12 at surface 23, so the rear assembly, C3, is a cemented doublet with a replica aspherical front.

### E12 — Biconvex Positive

**nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA), catalog equivalent. f = +29.31 mm.**

The final positive low-dispersion element completes group L4 and doublet C3. The bare image plane follows surface 24 at the paraxially computed back focus.

## Glass Identification and Spectral Qualification

The patent publishes only nd and νd, and every element keeps the printed values. Close catalog matches are labeled **equivalents**; they do not establish supplier, melt or resin chemistry. The high-index pairings and the very-high-Abbe rear positive element are source facts; their exact partial dispersion is not.

| Entry | Source nd | Source νd | Catalog equivalent |
| ----- | --------- | --------- | ------------------ |
| E1    | 1.58373   | 59.4      | Unmatched                  |
| R1    | 1.52421   | 51.4      | Unmatched                  |
| E2    | 1.77250   | 49.6      | S-LAH66                    |
| E3    | 1.84666   | 23.9      | S-NPH53                    |
| E4    | 1.72825   | 28.5      | S-TIH10                    |
| E5    | 1.51633   | 64.1      | S-BSL7                     |
| E6    | 1.67790   | 55.3      | S-LAL12                    |
| E7    | 1.71999   | 50.2      | S-LAL10                    |
| E8    | 1.62230   | 53.2      | S-BSM22                    |
| E9    | 1.80518   | 25.4      | S-TIH6                     |
| E10   | 1.43875   | 95.0      | S-FPL53                    |
| R2    | 1.52421   | 51.4      | Unmatched                  |
| E11   | 1.83400   | 37.2      | S-LAH60                    |
| E12   | 1.48749   | 70.2      | S-FSL5                     |

E1 is left unmatched: the nearby BAL42 class differs by about 0.00060 in nd. Neither resin layer is assigned a catalog glass merely because one lies nearby in nd/νd. The other 11 glass entries use matching OHARA catalog curves, while the d-line indices remain the printed values. Polychromatic results are therefore catalog-based estimates, not a measured production spectral response. E1 and the two resin layers use the engine's nd/νd dispersion estimate; no apochromatic claim follows.

## Focus Mechanism and Zoom Motion

Fig. 1 and ¶0034 place the objectward-moving focusing subgroup Lf at surfaces 3–7 (R1, E2 and E3). For near focus D2 decreases and D7 increases by equal amounts; E1 stays fixed within group L1. There is no stabilization group.

The patent prints no close-focus spacings. The focus states are solved paraxially for Canon's 0.28 m minimum focus distance, taken as object-to-image distance, with the image plane fixed; intermediate focus positions sit at 0.28/t m. Lf travels 4.07 mm at 17.49 mm, 3.95 mm at 23.99 and 25.78 mm and 4.07 mm at 38.83 mm. Close-focus magnifications are −0.108/−0.144/−0.154/−0.240 at the four printed zoom states; the tele value matches Canon's 0.24×, but none of these states is published focus data, so finite-distance MTF stays unavailable. Distance labels between them are interpolated and approximate.

| Spacing | 17.49 mm | 23.99 mm | 25.78 mm | 38.83 mm |
| ------- | -------- | -------- | -------- | -------- |
| D2 (∞)  | 13.63    | 13.63    | 13.63    | 13.63    |
| D2 (0.28 m) | 9.556 | 9.678   | 9.683    | 9.555    |
| D7 (∞)  | 26.47    | 15.79    | 13.87    | 5.75     |
| D12     | 1.24     | 5.36     | 6.41     | 12.63    |
| D18     | 11.88    | 7.76     | 6.71     | 0.49     |
| D24 (BF, computed) | 39.848 | 45.838 | 47.539 | 60.593 |

Four zoom states are published. Example 1 prints wide, middle and tele; Example 2 prints a second middle state of the same master zoom, at a bare focal length of 25.78 mm. Its D7 of 13.87 mm is Example 2's d4 + d9 (12.22 + 15.28) less the infinity D2 of 13.63 mm, because Example 2 is focused through a dome port. Example 2 prints D18 = 6.72, which makes D12 + D18 = 13.13; the model uses 6.71 to keep the 13.12 mm sum of every other printed row and the common L2/L4 locus of ¶0034. The bare back focus at each state is computed from surfaces 1–24; it is not the attachment's 26.31 mm final air gap.

Between the published states the zoom path is interpolated over 65 stations spaced geometrically in focal length. D12 follows a smooth monotonic curve in focal length through the four printed values, D18 = 13.12 − D12, D7 is solved for the station focal length and D24 is the paraxial back focus. D7, D12, D18 and D24 each change in one direction only. L2, L3 and L4 move steadily objectward, and L1's distance from the image falls from 139.28 mm to a minimum of 134.37 mm at 25.78 mm and returns to 139.30 mm, the image-convex locus of ¶0034. Linear interpolation between stations leaves at most 0.002 mm of paraxial defocus. This is an inferred cam, not Canon's mechanical one.

## Aspherical Surfaces

The three master-zoom aspheres are surfaces 1, 3 and 21. The patent's equation (A) is the standard conic-plus-even-polynomial sag with (1+K) in the conic term, so K = 0 is a spherical base, as in all three cases. No scaling is applied; coefficients are in millimetres. The attachment's aspheres 27, 28 and 30 are outside this model.

| Surface | K   | A4           | A6           | A8           | A10          | A12            |
| ------- | --- | ------------ | ------------ | ------------ | ------------ | -------------- |
| 1       | 0   | 1.35800E-05  | -1.79200E-08 | 2.41200E-11  | -2.01000E-14 | 7.86000E-18    |
| 3       | 0   | -9.21100E-06 | 2.50400E-08  | -1.83800E-11 | -6.64000E-15 | 0 (not listed) |
| 21      | 0   | -2.20000E-05 | -2.58800E-08 | -1.36300E-11 | 2.92500E-13  | 0 (not listed) |

The nearly planar front base has a positive leading polynomial departure; the two replica surfaces have negative A4. The higher orders matter near the edge. Canon describes one glass-molded and two replica aspheres; assigning the molded process to surface 1 and the replica process to surfaces 3 and 21 follows from the resin layers and the maker's drawing, not from a Canon statement.

## Model Scope and Limitations

The patent prints effective **diameters**; every clear radius except the stop is half the printed value, including the different front and rear values on the bonded layers. No figure-fitted reduction or override is used. The stop radius follows F4.1 at each zoom position: 6.049/6.513/6.666/8.062 mm at the four printed states. A real axial ray at F4.1 meets the stop at 8.325 mm at tele, half the printed 16.65 mm stop diameter, which supports the constant F4.1.

Fig. 6 plots the bare master at ω = 51°/40°/29.1° for 17.49/25.78/38.83 mm, which corresponds to the patent's 21.64 mm image height under tan ω = Y/f. The model uses the full-frame image-circle radius of 21.65 mm. Real chief rays reach it at 52.4° (17.49 mm), 42.2° (23.99 mm), 40.0° (25.78 mm) and 28.7° (38.83 mm), clear of every rim, at all 65 zoom stations.

At the wide end the full-frame corner of the bare master has weak edge contrast. Fig. 6 and ¶0035 show the bare master's field curvature, which the patent's attachment is designed to correct; the bare model reproduces that behavior rather than fitting radii, materials or spacings to improve it. No finite conjugate is certified, so finite-distance MTF is unavailable, and no production glass, tolerance or measured contrast is implied.

## Sources

1. [JP 2020-190696 A, Japanese publication](https://patentimages.storage.googleapis.com/9a/a3/de/92f0cf256c095b/JP2020190696A.pdf): ¶0034, ¶0040, ¶0069, numerical tables pp. 12–16 (Examples 1 and 2), Table 1, Fig. 1 and Fig. 6.
2. [Canon Camera Museum: EF17–40mm f/4L USM](https://global.canon/en/c-museum/product/ef373.html): May 2003 release, specifications, optical construction and closest focus.
3. [Canon optical construction image](https://global.canon/ja/c-museum/wp-content/uploads/2015/05/ef373-lens-construction.gif): element layout, aspherical and Super UD positions; schematic, not dimensional.
4. [JP2020190696A bibliographic index](https://patents.google.com/patent/JP2020190696A/en): publication and application dates and the original Japanese inventor name; its automatic English inventor translation is not relied on.
5. [US20060007342A1](https://patents.google.com/patent/US20060007342A1/en), [JP2006171432A5](https://patents.google.com/patent/JP2006171432A5/en) and the [J-GLOBAL inventor record for JP2006171432](https://jglobal.jst.go.jp/en/detail?JGLOBAL_ID=200903083530613036): a separate Canon family giving the Latin name Yoshiyuki Taki for 滝 慶行.
