# FUJIFILM EBC FUJINON 85mm f/4 SOFT-FOCUS

## Patent Reference and Design Identification

**Patent:** JP S55-560 A\
**Application Number:** 特願昭54-24240\
**Published:** 1980-01-05\
**Inventors:** Ryoichi Doi; Soho Takahashi\
**Applicant:** Fuji Photo Optical Co., Ltd.\
**Title:** 明るい軟焦点レンズ (Bright soft-focus lens)\
**Embodiment analyzed:** Example 1

The source prints 高橋宗甫 without kana or Latin spelling. “Soho Takahashi” is a provisional romanization for catalog metadata; the personal-name reading remains unverified.

The prescription is the fixed Example 1 correlation specified for this lens record. The patent describes a soft-focus objective for a 35 mm camera and gives Example 1 as a four-element, four-group, all-spherical design with normalized focal length `f = 1.0`, aperture ratio `1:2.8`, and full field `2ω = 28°` (JP S55-560 A, pp. 409–410). The source front page also prints 1978-03-20 followed by the notation `手続補正書提出の日`; because that wording does not unambiguously identify an ordinary filing date, the analysis does not relabel it as one.

The production correlation is supported by several converging characteristics, while remaining a selected correlation rather than a manufacturer-confirmed prescription:

1. Fuji's period sales literature lists an **EBC Fujinon 85mm f4 Soft-Focus** lens for the 35 mm SLR system, while the patent describes a 35 mm soft-focus objective.
2. The production specification and the patent architecture both use **4 elements in 4 groups**.
3. Fuji's production table gives a full angle of view of **28°34′**, close to the patent's stated **28°** field and to the nominal diagonal field of an 85 mm rectilinear lens on 135 format.
4. The production lens belongs to the M42/Praktica-screw Fuji SLR system represented in the data file as `m42` and `135-full-frame`.

Two source tensions remain explicit. The production lens is marketed at **f/4**, whereas fixed Example 1 is **f/2.8**; and an October 1977 Fuji brochure predates the patent front page's printed 1978-03-20 date. Neither tension is silently reconciled. The data therefore keeps `apertureMarketing: 4` separate from `apertureDesign: 2.8` and treats the patent/example selection as the governing correlation for the modeled optical prescription.

## Optical Architecture

The modeled objective is a **positive-positive-negative-positive** four-element form, with every element air spaced. G1 and G2 are positive menisci with their convex sides toward the object, G3 is a strong negative meniscus, and G4 is a strong rear positive meniscus. The aperture stop lies in the air space between G3 and G4, matching the patent's Figure 1 arrangement.

This is not modeled as a double-Gauss, telephoto, or retrofocus derivative. Independent first-order tracing of the authored surface array gives a total track longer than the effective focal length and a back focal distance shorter than the effective focal length, so it meets neither project criterion for telephoto nor retrofocus classification. Its distinguishing feature is instead the deliberate distribution of spherical aberration and flare in a simple all-spherical four-element system.

The patent publishes only the total stop-containing interval `S3 = S0`; it does not dimension the longitudinal position of the iris within that interval. The data therefore places `STO` by a Figure 1 inference at `q = 0.235` of S3 measured from surface 6 toward surface 7. That inferred split is a modeling choice, not a patent table value.

There are no cemented groups. The focal lengths quoted below are **standalone thick-element focal lengths** recomputed from each element's two refracting surfaces; they are not cemented-group powers and should not be read as the same thing as each element's in-situ contribution after air-space coupling.

## Element-by-Element Analysis

### G1 — Positive Meniscus

`nd = 1.60311, νd = 60.7.` Glass: **603607 — SK14/BSM14/BACD14-class crown (vendor unresolved)**. Standalone `f = +107.381 mm`.

G1 is the stronger of the two front positive menisci and provides the principal collecting power ahead of the negative third element. The patent makes the power of the first element one of the explicit design variables, requiring `1.0 > 1/f1 > 0.3` in normalized units. Example 1 gives `1/f1 = 0.791572`, comfortably inside that interval.

In the patent's design rationale, the first and fourth element powers are important to the balance between the soft-focus halo, the central image core, and field curvature. G1 therefore should not be interpreted merely as a generic positive front collector; its power is one of the terms used to hold the deliberately nonzero spherical aberration within the patent's stated range while avoiding excessive Petzval burden.

### G2 — Positive Meniscus

`nd = 1.60311, νd = 60.7.` Glass: **603607 — SK14/BSM14/BACD14-class crown (vendor unresolved)**. Standalone `f = +406.886 mm`.

G2 is a much weaker positive meniscus than G1. Its modest standalone power adds convergence ahead of G3 without duplicating the strong positive action of G1. Because G1 and G2 use the same d-line glass coordinate in Example 1, their different optical roles arise primarily from curvature, thickness, and spacing rather than from dispersion contrast between the two front elements.

The air space following G2 leads directly to the thick negative G3. The pair therefore works as part of an air-spaced front section rather than a cemented achromat; any system-level aberration balance depends on the full sequence, not on a simple sum of the standalone focal lengths.

### G3 — Negative Meniscus

`nd = 1.76182, νd = 26.5.` Glass: **762265 — SF14/TIH14/SFLD14-class dense flint (vendor unresolved)**. Standalone `f = -74.816 mm`.

G3 is the only negative element and the only element using the high-index, low-Abbe glass coordinate. Its negative power opposes the two positive front menisci and is followed immediately by the stop-containing interval. In first-order terms, this gives the design a strong negative-power and dispersion counterweight before the final positive element.

The lower `νd` of G3 relative to G1, G2, and G4 provides a conventional chromatic-balancing degree of freedom, and the patent states that its spacing conditions suppress color in the flare. The available data, however, contains only d-line `nd` and `νd`; it does not provide `nC`, `nF`, `ng`, or `dPgF`. Accordingly, no apochromatic or anomalous-partial-dispersion characterization is made from this element.

### G4 — Positive Meniscus

`nd = 1.60311, νd = 60.7.` Glass: **603607 — SK14/BSM14/BACD14-class crown (vendor unresolved)**. Standalone `f = +74.627 mm`.

G4 is the strongest positive standalone element and sits behind the aperture stop. Its power is the second explicitly constrained element power in the patent. The opening condition is `2.0 > 1/f4 > 0.3`, while the later discussion on page 413 restates the lower limit as `0.5`; Example 1 gives `1/f4 = 1.138991` and satisfies either version.

The rear positive meniscus completes the net positive system after G3 and, in the patent's explanation, participates with G1 in controlling the spherical-aberration halo/core balance and Petzval behavior. Because it lies after the stop, its curvatures also act on bundles whose pupil selection has already been established by the diaphragm interval.

## Glass Identification and Selection

Example 1 publishes only two d-line glass coordinates. The patent explicitly identifies the refractive-index reference as the **d line**, so the values are retained without e-line conversion.

| Data-file glass class | nd | νd | Elements | Identification status |
|---|---:|---:|---|---|
| `603607 — SK14/BSM14/BACD14-class crown` | 1.60311 | 60.7 | G1, G2, G4 | Cross-vendor coordinate class; vendor unresolved |
| `762265 — SF14/TIH14/SFLD14-class dense flint` | 1.76182 | 26.5 | G3 | Cross-vendor coordinate class; vendor unresolved |

Authoritative catalog comparison finds these coordinates in several closely corresponding historical/current families across OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA. That agreement establishes the **glass class**, not the actual melt supplier. The data therefore avoids a vendor-specific glass name and does not import spectral-line indices or partial-dispersion values from a modern equivalent into the patent prescription.

The crown/flint contrast is sufficient to discuss ordinary first-order chromatic balancing qualitatively. It is not sufficient to establish APO behavior, secondary-spectrum correction, or anomalous partial dispersion. Such claims would require direct line-index data, `dPgF`, or a uniquely defensible Sellmeier identity, none of which is present in this record.

## Focus Mechanism

The focus status is **NO_INTERNAL_RECONSTRUCTION**. JP S55-560 A Example 1 provides no focus-spacing table, finite-object prescription, magnification row, or mechanical description that determines which element or group moves during focusing. The analysis therefore does not classify the optical movement as unit focus, inner focus, or rear focus.

Fuji's production literature gives a focusing range of **1 m to infinity**, and the data retains `closeFocusM: 1` as product metadata. That value does not create a close-focus optical state: `var` and `varLabels` are empty, and the modeled prescription remains the published infinity-style state. No principal-plane object distance, internal travel, or close-focus magnification is inferred from the 1 m marketing specification.

## Aberration Correction Strategy and Soft-Focus Design

The patent describes its soft-focus behavior directly in terms of Seidel sums. It identifies `ΣI` as spherical aberration, `ΣII` as off-axis coma, `ΣIII` as astigmatism, `ΣP` as the Petzval sum, and `ΣV` as distortion. For Example 1, the printed totals are `ΣI = 4.955`, `ΣII = -0.14`, `ΣIII = -0.2840`, `ΣP = 0.6406`, and `ΣV = -0.2008` (JP S55-560 A, p. 412).

The key soft-focus constraint is `15.0 > ΣI > 0.5`. The patent explains that too large a spherical-aberration sum makes the image core and halo difficult to balance, while too small a value yields insufficient soft-focus effect. Example 1's `ΣI = 4.955` is therefore not treated as a residual defect to be minimized; within the patent's own design framework it is a controlled aberration used to generate the intended image character.

The first- and fourth-element power conditions work together with the stop spacing. The patent states that the interval containing the stop should satisfy `0.5 > S0 > 0.04`. Within that range it associates the layout with suppression of off-axis aberrations, more uniform flare from center to edge, and reduced colored flare. The selected example uses `S0 = 0.1221` in normalized units.

This is an inherent prescription-level soft-focus design. The data contains no independent aberration-control slider or moving spherical-aberration group. Aperture changes can alter the sampled aberration in use, but no additional control mechanism is modeled beyond the ordinary diaphragm.

## Conditional Expressions

The patent's normalized conditions and the independently verified Example 1 values are:

| Condition | Example 1 value | Result |
|---|---:|---|
| `1.0 > 1/f1 > 0.3` | `1/f1 = 0.791572` | Satisfied |
| `2.0 > 1/f4 > 0.3` | `1/f4 = 1.138991` | Satisfied |
| Page 413 restatement: `2.0 > 1/f4 > 0.5` | `1/f4 = 1.138991` | Satisfied |
| `0.5 > S0 > 0.04` | `S0 = 0.1221` | Satisfied |
| `15.0 > ΣI > 0.5` | `ΣI = 4.955` | Satisfied |

The two different lower limits printed for `1/f4` are an internal source inconsistency, not a data-file correction. Example 1 passes both, so the discrepancy has no effect on whether this embodiment lies inside the patent's stated design region.

## Verification Summary

The data uses a source-preserving uniform scale of **`s = 85 mm` per patent-normalized unit**: every radius, center thickness, air spacing, stop position, semi-diameter, and rear image distance is in the scaled millimeter model. Because the patent is all-spherical, there are no aspheric coefficients to transform; the general `A_p / s^(p-1)` scaling rule is therefore not applicable here.

The source prints `f = 1.0`, but direct sequential `y–ν` tracing and independent ABCD multiplication of the rounded Example 1 table give normalized EFL **1.056637281699**. After the 85× source-preserving scale, the modeled design EFL is therefore **89.814168944447 mm**, while the product focal length remains separately recorded as **85 mm**. The discrepancy is retained rather than forcing the prescription to 85 mm. The data likewise keeps the patent Example 1 aperture at **f/2.8** (`nominalFno` and `apertureDesign`) separately from the production **f/4** marketing value.

The stop location is not a published dimension. Figure 1 places `F` inside `S3 (S0)`, and the model infers the position at **q = 0.235** from surface 6 toward surface 7. On the scaled prescription this splits S3 into **2.4389475 mm** before `STO` and **7.9395525 mm** after it. The modeled stop semi-diameter is **9.089612804 mm**; with the traced EFL and front-group pupil magnification, this reproduces **f/2.8**.

The patent also publishes no clear apertures. The modeled semi-diameters are therefore inferred rather than source-transcribed: **24 mm** for G1, **21 mm** for G2, **17 mm** for G3, and **20 mm** for G4. Independent checks of the authored arrays pass edge-thickness, actual rim-slope, shared-band cross-gap intrusion, and the project's default 8.4° off-axis containment test. The model permits natural extreme-field pupil clipping rather than enlarging the elements beyond the Figure 1/mechanical constraints.

The recomputed surface-by-surface Petzval sum is **0.640679680105** in patent-normalized units, differing from the patent's printed `ΣP = 0.6406` by **7.97 × 10⁻⁵**. Page 412 actually prints the surface-6 `P` row as **`-0.7327`**. Direct `φ/(n·n′)` calculation gives **`-0.7372075`**; replacing only that printed row by its calculation-rounded value `-0.7372` makes the eight row-rounded `P` entries sum to the printed total `0.6406`. The surface-6 row is therefore treated as an internal patent-table inconsistency, most plausibly a digit transposition, rather than being re-read from the scan as `-0.7372`.

The rendered Example 1 table on page 410 clearly gives `d3 = 0.3`; that value is preserved. Substituting an unsupported `0.03` does not reconcile the printed `f = 1.0` with the traced focal length and is not used. The full field remains the patent's published **28°** through the data file's rectilinear projection metadata rather than being silently replaced by the field implied by the internally inconsistent rounded EFL.

No sensor cover glass, filter plate, inactive dummy plane, flare-cutter plane, blocker, or mechanical surface is part of the Example 1 numerical prescription. Consequently, the model requires no omitted-plate air-equivalent correction and introduces no synthetic optical layer.

## Sources and References

1. **Japanese Patent Publication JP S55-560 A (昭55-560),** *明るい軟焦点レンズ* [Bright soft-focus lens], Fuji Photo Optical Co., Ltd., published 1980-01-05. Supplied six-page patent scan; Example 1 prescription and Figures 1–5.
2. **Fuji Photo Film Co., Ltd., Fujica AZ-1 system sales literature.** Manufacturer lens table listing EBC FUJINON·SF 85mm f/4 as 4 elements / 4 groups, 28°34′, 1 m–∞, f/4–16, 49 mm, and 285 g; archival scan: https://www.pacificrimcamera.com/rl/01692/01692.pdf
3. **Fuji Photo Film Co., Ltd., AZ-1 sales brochure OP1-111E (77-10-SA-MW), October 1977.** Manufacturer brochure used for period/mount context; archival scan: https://www.pacificrimcamera.com/rl/00921/00921.pdf
4. **Fujifilm corporate history.** Used for the historical English company-name normalization: https://www.fujifilm.com/jp/en/about/corporate/history
5. **OHARA optical-glass catalog:** S-BSM14 and S-TIH family references: https://oharacorp.com/glass/s-bsm14/ and https://oharacorp.com/glass-type/s-tih-s-nph/
6. **HOYA Optical World cross-reference and update history:** https://www.hoya-opticalworld.com/english/products/crossreference.html and https://www.hoya-opticalworld.com/english/datadownload/data_up2019.html
7. **SCHOTT Advanced Optics catalog/search:** https://www.us.schott.com/shop/advanced-optics/en/search/
8. **HIKARI optical-glass catalog:** J-SK and J-SF families: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-sk/ and https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-sf/
9. **CDGM optical-glass datasheets:** H-ZK14 and H-ZF12: https://www.cdgmgd.com/webapp/pdf/H-ZK14.pdf and https://www.cdgmgd.com/webapp/pdf/H-ZF12.pdf
10. **SUMITA Optical Glass Data Book 14.02:** K-SK14 and K-SFLD14: https://www.sumita-opt.co.jp/download_files/en/data/glassdatabook_ver14.02.00.pdf

### Patent-rim and glass audit (2026-09-11 UTC)

Figure 1 (PDF p.6) was inspected at 600 dpi. Its axial geometry is schematic: the drawn thin G3 does not represent the tabulated 0.3 normalized center thickness (25.5 mm at the adopted scale). The automatic G3 rim maps to other ink. No reliable scale-based SD correction follows from that figure; the validated ray-envelope estimates were retained. Surface and image-circle audits pass. All four elements already resolve to compatible catalog curves.
