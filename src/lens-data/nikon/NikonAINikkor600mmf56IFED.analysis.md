# NIKON AI NIKKOR 600mm f/5.6 IF-ED — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP1981-035116\
**Filed:** 1975-09-30\
**Published:** 1981-04-07\
**Inventors:** Soichi Nakamura; Kazuo Arashida\
**Applicant:** Nippon Kogaku K.K.\
**Title:** 望遠レンズ (Telephoto Lens)\
**Embodiment analyzed:** Example 1

The modeled prescription is Example 1 of JP1981-035116. The patent gives a normalized focal length of 100, an f-number of F/5.6, seven elements in six air-separated groups, and three functional groups with stated focal lengths of +37.5, −15.0, and +40.0. The LensVisualizer model applies a uniform scale factor of 6, producing the production-scale 600 mm design while leaving refractive indices and Abbe numbers unchanged. The prescription is entirely spherical, so no aspherical coefficient transformation is required.

The production correlation is the Nikon AI Nikkor 600mm f/5.6 IF-ED. It is supported by several converging features rather than by a manufacturer statement that names this patent: the 600 mm f/5.6 specification, seven-element/six-group construction, the positive–negative–positive internal-focusing architecture, the 135-format field, and the 5.5 m production minimum-focus distance. Nikon's historical account states that Soichi Nakamura and Kazuo Arashida developed the 400 mm and 600 mm optics together, with Arashida responsible for the 600 mm design. Its detailed construction discussion concerns the 400 mm sibling and documents the second-group IF concept in that shared development lineage; the one-group IF motion for Example 1 is established directly by the selected patent. Nikon's AI-system history establishes the F-mount context. An archival manufacturer brochure for the Nikkor 600mm f/5.6 IF-ED lists 600 mm f/5.6, 7 elements in 6 groups, a 4°10′ picture angle, 5.5 m minimum focus, and an f/22 minimum aperture.

One numerical entry in the patent is treated as a documented source error. Example 1 visibly prints `n7 = 1.57`, `νd = 70.1` for the final element. Literal evaluation of that value does not reproduce either the stated full-system focal length or the stated +40 third-group focal length. Independent full-system and isolated-group solves converge on `n7 ≈ 1.52`; the data file therefore uses `nd = 1.52` for L7 while explicitly retaining the source discrepancy in its header. The patent's correction sheet does not itself amend this entry.

## Optical Architecture

The design is a three-functional-group telephoto of positive–negative–positive power sequence. Its verified infinity-state functional-group focal lengths are approximately +224.996 mm for G1, −90.000 mm for G2, and +240.004 mm for G3 after the 6× scaling. The complete system EFL is 599.981 mm.

G1 contains L1–L3 and is the large-diameter front collector. G2 contains L4–L6 and is the negative internal-focusing group. G3 consists of the fixed positive L7. The first optical surface to infinity image-plane distance is 413.511 mm, giving `TL/EFL = 0.6892`; under the project's quantitative definition this is a telephoto design. The back focal distance is 240.903 mm, or `BFD/EFL = 0.4015`, so the design is not retrofocus.

The architecture shown in the patent's Figure 1 is notably asymmetric in scale: a large positive front group is separated by a long air space from a much smaller negative focusing group and compact positive rear group. The model preserves that organization. It does not add filters, protective plates, dummy planes, flare-cutting planes, or mechanical components.

The patent does not identify an aperture-stop plane. For LensVisualizer the stop is therefore a modeling inference, not a source fact: it is fixed at the midpoint of the long infinity `d6` air space between G1 and G2. The calibrated physical stop semi-diameter is 34.849 mm, which gives an entrance-pupil diameter of 107.139 mm and a modeled f-number of 5.6000. This construction reproduces the published f/5.6 while keeping the inferred stop distinct from the patent prescription itself.

A 600 dpi review of local PDF page 3 confirmed the Figure 1 proportions. The drawing uses a smaller global vertical scale than its axial prescription scale, but after normalizing that uniform offset, every element's measured shape stayed within 18% of the authored silhouette. With no discrepancy reaching the project's 25% strong-evidence threshold, the ray-envelope-derived semi-diameters were retained.

## Element-by-Element Analysis

### L1 — Biconvex Positive

**nd = 1.50032, νd = 81.9. Glass: J-FKH1-compatible low-dispersion proxy; patent supplier unresolved. Standalone f = +253.734 mm.**

L1 is the first positive collector in G1 and carries the largest modeled clear aperture. Its high Abbe number places it in a low-dispersion/high-Abbe region. The production lens is ED-branded, but the selected patent does not identify this glass by trade name or assign an ED designation to a particular element, so no modern catalog or historical supplier is asserted.

### L2 — Biconvex Positive

**nd = 1.50032, νd = 81.9. Glass: J-FKH1-compatible low-dispersion proxy; patent supplier unresolved. Standalone f = +253.426 mm.**

L2 repeats the same refractive coordinate as L1 and supplies a second substantial positive contribution in G1. The repeated high-Abbe coordinate is compatible with a low-dispersion front-pair strategy, but the selected patent supplies only `nd` and `νd`, not a material trade name, line-index data, or a vendor designation.

### L3 — Biconcave Negative

**nd = 1.74950, νd = 35.0. Glass: 750350 — lanthanum-flint class; vendor unresolved. Standalone f = −265.549 mm.**

L3 is the negative member that completes the net-positive first functional group. Its substantially higher index and lower Abbe number contrast with L1 and L2. That pairing is consistent with first-order chromatic balancing inside G1, but the class label is deliberately generic: current cross-vendor catalogs contain close modern equivalents without evidence that any one catalog identifies the historical melt.

### L4 — Positive Meniscus, front member of D1

**nd = 1.69895, νd = 30.0. Glass: 699300 — dense-flint/SF15-class; vendor unresolved. Standalone f = +168.433 mm.**

L4 is the positive front member of the only cemented pair and sits inside the translating G2 focusing assembly. Its low Abbe number and strong curvature make it very different from the two high-Abbe front positives. The data file assigns the shared cemented interface to the downstream L5 element, as required by the sequential medium convention.

### L5 — Biconcave Negative, rear member of D1

**nd = 1.51680, νd = 64.2. Glass: 517642 — BK7-equivalent crown class; vendor unresolved. Standalone f = −119.423 mm.**

L5 follows L4 across the cemented interface and contributes negative standalone power. The L4+L5 cemented pair has a verified net EFL in air of approximately −391.018 mm. That number must not be confused with the power of the complete focusing group: the in-situ G2 also includes L6 and the published separations, and its verified functional-group EFL is approximately −90.000 mm.

### L6 — Biconcave Negative

**nd = 1.69680, νd = 55.6. Glass: 697556 — lanthanum-crown class; vendor unresolved. Standalone f = −120.601 mm.**

L6 is the rear negative element of G2. Together with the cemented L4/L5 pair it makes the second functional group decisively negative. G2 is the only functional group that moves during focusing; its role is therefore defined not just by its optical power but by its axial position relative to the fixed G1 and G3 groups.

### L7 — Positive Meniscus

**nd = 1.52000, νd = 70.1. Glass: J-PKH1-compatible phosphate-crown proxy; corrected patent coordinate and supplier unresolved. Standalone f = +240.004 mm.**

L7 is the complete fixed third functional group. Because G3 contains only this element, its standalone EFL and functional-group EFL are effectively the same. The stored index is the explicitly documented `1.57 → 1.52` source correction required to reproduce the patent's stated focal constraints. The corrected coordinate still does not justify assigning a specific historical catalog glass.

## Glass Identification and Selection

The model retains the patent's `nd/νd` coordinates and uses catalog classes only where the coordinate supports that level of description. Cross-vendor checks against authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA data were used only to establish class-level or equivalent evidence; close modern coordinates are not treated as proof of the historical supplier.

| Element(s) | nd | νd | Data-file glass representation | Interpretation |
|---|---:|---:|---|---|
| L1, L2 | 1.50032 | 81.9 | J-FKH1-compatible low-dispersion proxy | high-Abbe front positives; patent supplier unresolved |
| L3 | 1.74950 | 35.0 | 750350 — lanthanum-flint class; vendor unresolved | high-index, lower-Abbe negative partner in G1 |
| L4 | 1.69895 | 30.0 | 699300 — dense-flint/SF15-class; vendor unresolved | low-Abbe positive member of D1 |
| L5 | 1.51680 | 64.2 | 517642 — BK7-equivalent crown class; vendor unresolved | higher-Abbe negative member of D1 |
| L6 | 1.69680 | 55.6 | 697556 — lanthanum-crown class; vendor unresolved | high-index negative member of G2 |
| L7 | 1.52000 | 70.1 | J-PKH1-compatible phosphate-crown proxy | corrected high-Abbe rear positive; patent supplier unresolved |

No `nC`, `nF`, `ng`, or `dPgF` values are authored. The patent does not publish those quantities, and the qualified J-FKH1/J-PKH1 curves are used only as coordinate-compatible runtime proxies, not as historical melt identities or patent-derived line data. The analysis therefore does not classify the prescription as apochromatic or make an anomalous-partial-dispersion claim. Nikon's ED designation applies to the production lens as a product-level material statement; the selected patent does not establish which modeled element or elements carry that designation.

## Focus Mechanism

The lens uses internal focusing by translation of functional group G2 (L4–L6), while G1 and G3 remain fixed. The patent publishes a finite-focus movement in which G2 moves rearward and the air gaps on its two sides change by equal and opposite amounts. This conservation fixes the mechanism to one internal degree of freedom.

The patent's own finite-focus row increases `d6` from 16.255 to 17.589 and decreases `d11` from 2.963 to 1.629, corresponding to a 1.334-unit rearward G2 translation and approximately 1/10 lateral magnification. Independent paraxial solution with the corrected L7 index places that published state at about 1161.527 normalized units object-to-image, or 6969.164 mm after the 6× scaling, so it is not the production 5.5 m endpoint.

The final data file therefore uses a **CONSTRAINED_RECONSTRUCTION** for 5.5 m. The production endpoint is solved while preserving the patent's one-group translation and exact adjacent-gap conservation. The required G2 travel is 10.425804 mm rearward.

Because the inferred aperture stop is fixed in the barrel, the patent's long front-side G2 gap is represented by a fixed S6→STO segment and a variable STO→S7 segment. The variable spacings are:

| Gap | Infinity | 5.5 m |
|---|---:|---:|
| STO→S7 | 48.765 mm | 59.190804 mm |
| S11→S12 | 17.778 mm | 7.352196 mm |
| Sum | 66.543 mm | 66.543 mm |

The close-state conjugate solution places the object plane 5500.000 mm from the fixed image plane and gives a paraxial lateral magnification of approximately −0.12357. No additional floating group, rear-group shift, or hidden focus degree of freedom is introduced.

## Chromatic Correction Strategy

The patent's first group combines two strong high-Abbe positive elements with a higher-index, lower-Abbe negative element. The movable second group uses a contrasting dispersion pattern across L4, L5, and L6. At the level supported by `nd/νd`, this is consistent with distributing chromatic correction through more than one functional group rather than relying on a single conventional achromat.

That observation is intentionally limited. Abbe number alone cannot establish secondary-spectrum correction, anomalous partial dispersion, or apochromatic performance. The data file therefore keeps the production lens's ED attribution separate from the numerical prescription: the former is manufacturer-sourced at product level, while the latter contains only the spectral information actually available for Example 1.

## Conditional Expressions

The patent defines the design family with focal-length and shape constraints. Uniform scaling does not change the dimensionless expressions. Example 1 satisfies the conditions after transcription and the documented L7 index correction.

| Patent condition | Example-1 result | Status |
|---|---:|---|
| `F = f1 × (f3 / |f2|)` | 100 normalized = 600 mm at 6× scale | satisfied by stated group focal lengths |
| `F > f1` | 600 mm > 225 mm | pass |
| `|f2| < f3` | 90 mm < 240 mm | pass |
| `1.8 ≤ (f1/F)·N ≤ 3.0` | 2.1000 | pass |
| `−1 < (r1+r2)/(r1−r2) < 0` | −0.404927 | pass |
| `−5 < (r3+r6)/(r3−r6) < −1` | −2.238668 | pass |
| correction-sheet condition `|r12| > |r13|` | 405 mm > 95.766 mm | pass |

The focal-length relation uses the patent's stated functional-group focal lengths. Independent tracing of the rounded surface prescription gives +224.996, −90.000, and +240.004 mm for G1–G3 and 599.981 mm for the complete system, which is consistent with the precision of the published table.

## Verification Summary

The final prescription was independently recomputed with sequential height/reduced-angle tracing and an independently assembled ABCD matrix. The two first-order methods agree to script precision. At infinity the model gives an EFL of 599.981 mm, BFL of 240.903 mm, and modeled f-number of 5.6000. For a 21.6 mm image height the paraxial full field is 4.1236°, close to the brochure's rounded 4°10′ specification.

The aperture stop and all glass semi-diameters are modeling inferences because the patent does not tabulate them. Semi-diameters were derived from full-field marginal/chief-ray envelopes at infinity and at the reconstructed 5.5 m endpoint. The front element uses a 58.0 mm semi-diameter, or 116 mm clear diameter, which remains below the manufacturer's 122 mm front attachment size. These dimensions are not presented as patent-published clear apertures.

The resulting geometry checks remain within the current LensVisualizer authoring limits in both defined focus states: the minimum element edge thickness is positive, the maximum actual spherical rim slope is about 21.95°, and the maximum shared-gap sag intrusion remains below the configured 0.90 fraction. The design is all-spherical, so conic-limit and asphere-departure checks are not applicable.

The model contains no sensor cover glass, filter, inactive dummy surface, or mechanical part. No omitted plate requires an air-equivalent rear-spacing compensation in this embodiment. The last-surface `d` is instead the independently recomputed paraxial BFL needed to close the sequential model at the verified infinity image plane.

## Sources and References

1. **JP1981-035116**, *望遠レンズ* (*Telephoto Lens*), Nippon Kogaku K.K., published 7 April 1981, Example 1. The numerical prescription is on patent page 3; Figure 1 and the aberration plots are on page 4; the correction sheet is on page 5.
2. Nikon, **NIKKOR — The Thousand and One Nights No.66**, historical account of the jointly developed 400 mm/600 mm IF optics and the Nakamura/Arashida design lineage: https://imaging.nikon.com/imaging/information/story/0066/
3. Nikon, **Camera Chronicle — Debut of Nikon F3**, AI-system history and F-mount compatibility: https://imaging.nikon.com/imaging/information/chronicle/history-f3/index.html
4. Nikon, **Nikkor 600mm f/5.6 IF-ED** manufacturer brochure, archival scan hosted by Pacific Rim Camera: https://www.pacificrimcamera.com/rl/00594/00594.pdf
5. OHARA, **Optical Glass Catalog Download** (current catalog data; 2026 update noted by OHARA): https://oharacorp.com/glass-catalog/
6. HOYA, **Optical Glass Data Download** (Excel updated 2026-06-01; Zemax updated 2026-07-07): https://www.hoya-opticalworld.com/english/datadownload/index.html
7. SCHOTT, **Optical Glass Downloads / Datasheet Collection**: https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads
8. HIKARI, **Optical Glass Catalog**: https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf
9. CDGM, **Optical Glass Database / 2026 catalog downloads**: https://www.cdgmgd.com/go.htm?k=High_Transmittance_Optical_Glass&url=goods
10. SUMITA, **Optical Glass Downloads**: https://www.sumita-opt.co.jp/en/download/
