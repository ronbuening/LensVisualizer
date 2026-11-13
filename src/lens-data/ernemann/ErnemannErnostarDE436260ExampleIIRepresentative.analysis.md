# Ernemann Ernostar: DE436260 Example II representative

## Patent Reference and Design Identification

**Patent:** DE 436,260 C  
**Designer (historical attribution):** Ludwig Bertele; no inventor is printed in the patent  
**Assignee:** Ernemann-Werke AG  
**Issued:** 28 October 1926  
**Effective date stated:** 6 December 1924  
**Example details:** Example II, f = 100 mm normalisation, f/1.8; source stop intervals b1 = 5.87 mm and b2 = 6.62 mm.

This is a qualified reconstruction of Example II at the patent's f = 100 mm normalisation, with scale factor 1 and no units conversion. The complete four-page patent is available as `patents/DE436260C.pdf`; page 2 supplies the prescription and page 4 shows Abb. 2. The f/1.8 Ernostar lenses were sold at 8.5, 10.5, 12.5 and 16.5 cm; there was no commercial 10 cm f/1.8. The 10 cm Ernostar was the four-element f/2 lens. Bertele is retained in the metadata as a historical attribution, not as a printed patent inventor.

Bertele's original article, published in 1926 and dated 5 November 1925, states that Ernemann manufactures the commercial Ernostar and describes f/1.8, approximately 50° field and a six-element/four-component section. It lists retail 85 mm, 125 mm and 165 mm applications. The article contains no complete numerical prescription and does not uniquely identify Example II. Its normalized curves do not prove a factory 100 mm variant.

The patent's Example II agrees in aperture, broad topology and field. This supports a representative association, not a claim that every historical lens has these exact radii, glass or scaling. Examples I and III remain distinct unmodeled examples. No scaling to a commercial 85 mm lens or source-value fitting is performed.

## Optical Architecture

Six spherical elements form four air-separated components: a positive front meniscus, a cemented triplet, a negative singlet and a positive rear singlet. The two cemented interfaces are within the second component, not added air spaces. The source's triplet modification is preserved rather than replaced by a simpler Ernostar-type formula.

The front meniscus and compound positive component precede the negative member, followed by the rear positive element. The diaphragm is after the negative member, at the source's explicit 5.87/6.62 mm split of the 12.49 mm gap. Neither the stop position nor its source total gap is optimized for ray success.

## Element-by-Element Analysis

### L1: front positive meniscus

Source nD = 1.5638, interpreted Vd = 60.75; unmatched historical glass. The more strongly curved front surface supplies positive power. Its 7.26 mm center thickness and both radii are literal.

### L2: positive front element of the triplet

Source nD = 1.6053, interpreted Vd = 59.4; unmatched historical glass. This biconvex element shares its rear boundary with L3. The relatively thick 11.74 mm element is retained.

### L3: middle positive meniscus of the triplet

Source nD = 1.6485, interpreted Vd = 33.8; unmatched historical glass. Its two negative radii form a positive meniscus in isolation. Its interfaces remain cemented to the adjacent glasses; no free-standing element or air layer is substituted.

### L4: negative rear element of the triplet

Source nD = 1.6270, interpreted Vd = 39.0; unmatched historical glass. The biconcave element is only 1.07 mm thick on axis. Its literal thickness and cemented front interface are preserved, with no rim extension or added spacer.

### L5: negative singlet before the diaphragm

Source nD = 1.6223, interpreted Vd = 36.0; unmatched historical glass. The biconcave member precedes the source-defined stop. Its inferred cap is limited by physical clearance to that fixed stop plane, not by optimizing optical performance.

### L6: rear positive singlet

Source nD = 1.6220, interpreted Vd = 53.15; unmatched historical glass. The biconvex rear element completes the positive-negative-positive power sequence. The source does not supply a terminal image gap or factory clear aperture.

Isolated-element focal lengths are not independently certified. Glass labels are source numerical classes, not modern catalog or historical melt identifications.

## Glass Identification and Spectral Convention

Patent ν values are interpreted as conventional Vd using contemporary optical notation; the formula is not expressly defined in DE 436,260 C. No historical glass identification or measured dispersion curve is claimed.

This interpretation is supported by the original 1899 von Rohr text, printed page 59, which defines plain ν as (nD − 1)/(nF − nC), separately from a specially barred D–G′ convention elsewhere. Bertele's later US1975678 also uses nd/v dispersion notation. These sources support the conventional reading; they do not turn the omitted definition in the inspected German patent into an explicit source statement.

The patent nD reference is treated as historical sodium D. The engine's d-reference representation is an additional approximation, not exact modern helium-d melt data. Partial dispersion, full measured spectral curves and quantitative color performance remain unknown. No glass value is adjusted to match a modern catalog or improve performance.

## Focus Mechanism

The reconstruction is infinity-only. Literal paraxial calculation gives EFL 99.720060431 mm and BFL 56.835261070 mm. The small −0.280% difference from the nominal 100 mm remains, without focal fitting. The image interval is calculated, not a printed back gap.

No retail near-focus law, lens movement, minimum object distance or particular 85 mm product is reconstructed. Commercial format statements from the article are not certified by the representative.

## Inferred Apertures and Source Stop

Clear apertures are not tabulated. The initial inferred common semi-diameters by air-separated component were 28 mm, 25 mm, 17.5 mm and 20 mm, selected on a half-millimeter grid under the default 0.9 geometry constraints and clearance to the fixed source stop. The aperture audit found that surface 7 limited the nominal f/1.8 beam to f/1.87, so its semi-diameter was raised from 17.5 to 18.4 mm, the least change reported by the audit. Surface 8 remains at 17.5 mm, and every other rim is retained. The corrected axial beam is limited by the iris at f/1.8. The drawing supports unequal heights qualitatively, not calibrated dimensions; these remain inferred clear apertures.

The negative component's unchanged 17.5 mm rear rim has 0.327796 mm clearance to the stop plane; the rear component has 8.994944 mm clearance. Native f/1.8 construction yields an iris radius of 16.614141199 mm. The axial split is a source number; the hole radius and clear apertures are not. The UI range through f/22 is authored convenience, not a source-backed retail limit.

No source radii, thicknesses, glass values, cemented interfaces or stop coordinates are changed. No geometry allowance override, rim exception, extension or artificial spacer is used.

## Verification Summary and Field Limitations

Native construction and isolated strict TypeScript pass; independent scoped source/geometry reviews accompany the handoff. These checks are not full app or optical performance validation.

With the corrected surface 7 and the catalog format set to 645 (56 × 41.5 mm, 69.7 mm diagonal), the image-circle audit reports no undersized surfaces. The field-coverage audit reaches 34.85 mm of the 34.85 mm corner semi-diagonal (100%) at 18.9°, with a clear corner chief ray. The hidden data file stays hidden; the field check used an otherwise identical scratch copy with visibility enabled.

Chief-ray coverage does not establish a fully illuminated pupil or the patent's approximately 50° field. The independent pre-integration validator's meridional fan passed 15/25 rays at 20° and 7/25 at 25°. Those samples predate the surface-7 correction and are retained only as evidence of the need for a separate full-pupil assessment, not as current throughput measurements.

Saved traces terminate at the rear optical surface, not at a separately tested image-plane landing. The samples are not throughput percentages, full pupil integration or MTF. The representative remains hidden. Full current-corpus/application tests, lint/format integration, build, browser and MTF checks remain deferred, not passed. No release/deployment or finished commercial coverage claim follows from scoped acceptance.

## Sources

- `patents/DE436260C.pdf`, complete four-page patent; Example II on page 2 and Abb. 2 on page 4.
- [Bertele original Ernostar article](https://zeissikonveb.de/onewebmedia/Bertele%20-%20Ernostar%201925.pdf), primary designer-authored commercial description, published 1926; secondary-hosted scan.
- Original von Rohr (1899), printed page 59, definition of plain ν; excerpt and original-file provenance retained in supporting evidence.
- [US1975678](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/1975678), related same-author notation evidence, not a substitute Ernostar prescription.
