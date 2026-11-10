## Patent Reference and Design Identification

**Patent:** JP S38-11587 B (特許出願公告 昭38-11587)
**Application Number:** 昭31-19922
**Filed:** July 31, 1956 (converted from 昭31.7.31)
**Published:** July 8, 1963 (converted from 昭38.7.8)
**Inventor:** Yoshiya Matsui (松居 吉哉)
**Applicant:** Minolta Camera Co., Ltd. (ミノルタカメラ株式会社)
**Title:** Gauss-type photographic objective lens (ガウス型写真対物レンズ)
**Example details:** Unnumbered numerical prescription on PDF page 2, Figure 1 on page 4; source F = 1.0 / f = 1.000; hypothetical 55 mm per source unit.

This hidden model is a source-faithful, fixed-infinity **construction hypothesis H0**, not a qualified factory reconstruction. The patent supplies one unnumbered numerical example. The recovered administrative label “example1” is not used as a printed example number.

A probable association with the **Auto Rokkor F1.8/55mm pictured in Minolta brochure SR-109 for the SR-1** is supported by:

1. The manufacturer brochure's PDF page 12 / printed page 13 places the product name, SR-1 role, six elements in five groups, and its optical section together.
2. The section shows the detailed 1 + 1 + 1 + 2 + 1 topology: two front positive menisci, a separate central-front negative element, one rear cemented pair, and a final positive singlet. This corresponds to the patent, rather than relying on count alone.
3. The brochure's f/1.8 agrees with the source 1:1.8. The source is explicitly at infinity, with S₁ = ∞.
4. The literal prescription has a normalized d-line paraxial EFL of approximately 1.000118360360, consistent with the printed normalization without adjusting any radius, spacing, or glass index.

The **55× conversion is selected**, not printed in millimetres. It scales every source radius and axial interval uniformly. It does not divide by the calculated EFL to force exactly 55 mm. The image plane and pupil-derived stop split are computed in source units and scaled by the same factor. There are no aspheric coefficients to rescale.

The Minolta Super A 50/1.8 and Super Rokkor 5cm f/1.8 rangefinder associations remain unresolved rivals. Neither chronology nor back focal distance uniquely distinguishes them. The model's name therefore begins with MINOLTA PATENT and explicitly says hypothetical scale. No claim covers all Auto Rokkor 55mm generations or a uniquely identified serial production prescription.

The manufacturer lists 43° field and 50 cm minimum focus. The patent lists **46° full field**. These are distinct source facts, not numerical targets to reconcile. The model uses the patent's 46° / 23° half-field only. Marketing focal length, mount, format, image circle, and close-focus catalog fields are omitted rather than binding the uncertain identity to one camera system. No sensor stack is added.

## Optical Architecture

The design is an all-spherical modified Gauss objective with **six elements, five air-separated groups, and eleven refracting interfaces**. L4 and L5 alone are cemented, at source surface r8. The additional flat STO row is a construction interface inserted into air, not a twelfth published refracting surface or an extra glass element.

The front positive pair L1–L2 precedes the separate negative meniscus L3. The large t6 air interval separates L3 from the rear negative-positive cemented pair L4–L5; L6 is the final positive singlet. The patent's four optical subsystems are not four air-separated groups and do not establish four independently moving mechanisms. The model's single bracket denotes the fixed assembly only.

All eleven source radii, all ten internal intervals, and all six glass-coordinate pairs are preserved. Source positive radius means the centre of curvature lies toward the image, with the first vertex at z = 0 and positive z running toward the image. The span from first to last vertex is 0.6770 source unit, or **37.235 mm** under the hypothetical scale.

A 50-digit Decimal matrix calculation, independently cross-checked by scalar propagation, gives:

- EFL: **55.006509819821 mm**.
- BFL from the last vertex: **32.569986785317 mm**.
- Infinity image plane from the first vertex: **69.804986785317 mm**.

These arithmetic digits make the reconstruction reproducible; they are not precision claims about a rounded historical prescription. BFL is not a mount flange distance. The patent gives no last-vertex-to-mount geometry, so a direct BFL-versus-SLR-register comparison cannot reject the proposed product association.

### Stop and pupil construction

The source identifies **t6 = 0.2017** as the stop interval but publishes neither its numerical split nor an iris diameter. It defines **P1 = 0.5419** as the entrance pupil's distance from the first surface. P1 is not a physical iris coordinate.

H0 interprets P1 as an imageward signed coordinate. If the front-six-surface reduced-angle matrix is [A B; C D], followed by air translation x, pupil conjugacy gives:

x = (P1 A − B) / (D − P1 C).

This yields x = 0.105977964883395 source unit after S6 and a stop coordinate z = 0.408577964883395, inside the literal central gap (0.3026, 0.5043). Under 55× scaling, STO is at **22.471788068587 mm**, splitting the original 11.0935 mm interval into **5.828788068587 + 5.264711931413 mm**. Their sum is unchanged.

The opposite-sign reading P1 = −0.5419 produces a stop outside that gap, z approximately −0.161386 source unit. Both results are preserved as a convention sensitivity check. Agreement with the stated gap favours the selected sign but does not turn the inferred coordinate into a printed manufacturing dimension.

For source nominal EFL = 1, the paraxial iris diameter is **18.891590994658 mm**. Using the literal-table EFL instead gives **18.893827010176 mm**. The model authors neither diameter as STO sd: the source F1.8 is supplied, leaving the native engine to derive its stop radius. Native entrance-pupil, finite-aperture f-number, iris-in-air and clearance checks remain pending.

### H0 clear caps and outlines

No numerical clear rims are published. H0 uses rough Figure 1 proportions, not a fit to the maker's field or to performance data. At the retained 120-dpi page render, approximate V1/V11 x coordinates 344/618 and 37.235 mm track give 0.135894 mm/pixel if isotropic. Outer half-heights roughly 135/112/112/81/92 pixels suggest the selected element-outline radii 18.3/15.2/15.2/11.0/12.5 mm. Raster scaling and line thickness make these only construction estimates.

Source S1–S11 clear caps in millimetres are **18.3, 18.3, 15.2, 15.2, 15.2, 10.2, 9.4, 11.0, 11.0, 12.5, 12.5**. The smaller central caps S6 and S7 follow the inward edge ends. Flat opaque extensions at S6 to 15.2 mm and S7 to 11.0 mm approximate the drawn chamfered outer outlines. Those lands are not measured chamfers or optical glass surfaces. Source surface numbers remain unchanged around the inserted STO.

H0 was frozen before native optical evaluation. It has not passed spherical-domain, rim-slope, thickness, cross-gap, hidden-trim, iris-clearance, or ray checks. Baseline geometry thresholds remain intact and no gap-sag allowance override is authored. A future change must preserve the H0 file and its failure evidence before recording a separate hypothesis.

## Element-by-Element Analysis

The focal lengths below are calculated for each isolated thick element in air at the selected scale. In particular, the isolated values for L4 and L5 do not describe their actual powers as cemented partners.

### L1 — Positive Meniscus

nd = 1.67790, νd = 55.5. Glass: Unmatched (literal patent coordinates; vendor unspecified). Isolated-in-air f = +78.046914 mm.

Front positive meniscus. It shares the source nd/νd pair with L2, while its curvatures and thickness are distinct.

### L2 — Positive Meniscus

nd = 1.67790, νd = 55.5. Glass: Unmatched (literal patent coordinates; vendor unspecified). Isolated-in-air f = +48.887228 mm.

Second positive meniscus, air-spaced from L1 by t2=.00300 source unit. Together L1 and L2 form the front positive subsystem.

### L3 — Negative Meniscus

nd = 1.69900, νd = 30.1. Glass: Unmatched (literal patent coordinates; vendor unspecified). Isolated-in-air f = -26.066103 mm.

Negative meniscus ahead of the stop gap. The source t4=.0360 separates it from L2; its strongly curved rear face bounds the central air space.

### L4 — Biconcave Negative

nd = 1.57490, νd = 39.2. Glass: Unmatched (literal patent coordinates; vendor unspecified). Isolated-in-air f = -22.519187 mm.

Biconcave negative front member of the sole cemented pair, with the source lowest index nd1.5749. Its rear boundary is the shared r8 surface.

### L5 — Biconvex Positive

nd = 1.66670, νd = 48.4. Glass: Unmatched (literal patent coordinates; vendor unspecified). Isolated-in-air f = +24.679388 mm.

Biconvex positive rear member of the cemented pair. The literal n5−n4=.0918 is retained, and no correction of the inconsistent textual thresholds is applied.

### L6 — Biconvex Positive

nd = 1.67000, νd = 47.2. Glass: Unmatched (literal patent coordinates; vendor unspecified). Isolated-in-air f = +53.692621 mm.

Rear biconvex positive singlet, separated from L5 by t9=.0030. It ends the source train; the following image distance is calculated, not tabulated.

## Glass Identification

| Element | nd | νd |
| --- | --- | --- |
| L1 | 1.67790 | 55.5 |
| L2 | 1.67790 | 55.5 |
| L3 | 1.69900 | 30.1 |
| L4 | 1.57490 | 39.2 |
| L5 | 1.66670 | 48.4 |
| L6 | 1.67000 | 47.2 |

The patent table explicitly marks lowercase d for the refractive indices and Abbe numbers. The model therefore uses **indexReference: d**, rather than silently assuming the e-line. The d-line convention is 587.6 nm, with νd conventionally based on F and C. No individual nF, nC, ng, partial dispersion, Sellmeier curve, vendor glass, or supplier is published here or inferred from a coordinate match.

L1 and L2 share nd 1.6779 / νd 55.5; this does not establish shared procurement or a modern catalog equivalent. L3 carries the lowest Abbe number, 30.1. The cemented pair retains nd 1.5749 / νd 39.2 and nd 1.6667 / νd 48.4 across its real interface. A generic Abbe-based dispersion fallback may be used by the engine, but any later polychromatic result must be qualified as a model approximation. No APO or measured colour-correction claim follows from these inputs.

## Focus Mechanism

Only the source **infinity condition** is modeled. The patent does not publish a finite-focus spacing law, cam, helicoid travel, or measured finite conjugate for this prescription. Manufacturer 50 cm minimum focus belongs to the probable product association, not the source optical table.

There are no variable gaps, zoom stations, finite conjugates, or moving-group laws. The required focus.closeFocusM value of 1 m is an inactive schema placeholder and is identified as such in the data. It must not be reported as a modeled MFD. A qualified finite model would require additional mechanism and conjugate evidence.

## Source Conditions and Unresolved Wording

The source has three different printed forms of one index condition:

- Page 1: n5 − n4 > 0.0065.
- Page 2: n5 − n4 > 0.065.
- Page 3 claim: n5 − n5 > 0.065.

The literal example gives n5 − n4 = 0.0918 and meets either numerical threshold, whereas the claim's self-difference is impossible. The contradiction is recorded as unresolved source errata. Neither wording nor the prescription is emended.

The example also has Σt = 0.6770 F and t6 = 0.2017 F, within the page-2 ranges 0.6 F < Σt < 0.75 F and 0.18 F < t6 < 0.24 F. These scalar checks do not validate aperture geometry or optical performance.

## Qualification Status

This triad is hidden and unfinished. The static checks cover source bytes, literal mapping, scalar replay, canonical ingest, metadata, and analysis structure. They do not substitute for native buildLens geometry, exact rays, pupils, source-field reachability, distortion, diffraction or MTF, full repository gates, or visual review. No release, production deployment, factory identity, or completed native model is claimed.

## Sources

- [JP S38-11587 B original national-office scan](https://drive.google.com/file/d/1iv2dYlwuotYKmF0yc5BJwr0mZ8ffweH2/view), four PDF pages. The preserved original and its source-table raster are authoritative.
- [Original intake archive](https://drive.google.com/file/d/1JWly3fINlRCgPJJU8-N6-dTdsS7-ZkkR/view), complete source and research provenance.
- [Minolta SR-1 / SR-7 optical literature, SR-109](https://vintagecameradigest.com/wp-content/uploads/2022/09/sr1-sr7-opt.pdf), PDF page 12 / printed 13 for the pictured standard lens and section, PDF page 24 / printed 27 for 43° and the filter specification. Filter thread diameter is not used as a clear-aperture measurement.
- [Recovery addendum](https://drive.google.com/file/d/1_sV2b_1KkEJRbYB-On_yeJ3b7dvQKHiU/view), source-only qualification and original scalar replay.
- [National Diet Library romanized optical-author bibliography](https://ndlsearch.ndl.go.jp/books/R100000136-I1970023484900524197), supporting the reading Yoshiya Matsui for 松居吉哉. No biography or birth date is imported from authority records; this is name-normalization evidence only, not a new patent-family identification.

## Pinned prescription comparison

The pinned corpus contains 1,095 tracked models. The original 1,092-file scan and a same-criterion three-file Unicode-path supplement found no identity, eleven-radius shape or ordered six-glass match. This is bounded two-pass coverage, not universal novelty or a newly repeated whole-corpus scan. Source values and H0 geometry are unchanged.
