# Lens Analysis Specification

Reference for writing `*.analysis.md` companions to lens prescription files.

## Purpose

A lens analysis is a Markdown document that explains the optical design of a single lens prescription. It sits next to a `*.data.ts` prescription file and is rendered next to the lens diagram in the viewer. Its job is to:

- Identify the patent embodiment that the prescription transcribes.
- Describe the overall optical architecture and the role of each element.
- Identify the glasses used and the rationale for their selection.
- Explain how focusing, stabilization, and any aspherical surfaces work.
- Cite primary sources and show how production-to-patent matching was established.

The analysis is read by users and other authors. It should be patent-grounded, technically precise, and free of marketing language.

## File Naming and Pairing

- Analysis files use the same relative stem path as the data file with `.analysis.md` instead of `.data.ts`. Example: `nikon/NikonNikkorZ50f18S.data.ts` → `nikon/NikonNikkorZ50f18S.analysis.md`.
- Analysis files are optional. A prescription without one is rendered with a default description. When a prescription does carry an analysis, this spec governs its structure.
- Markdown is rendered with GitHub-flavored Markdown plus inline math (`$...$` and `$$...$$`). Tables, fenced code blocks, blockquotes, and nested lists are all supported.

## Required Section Skeleton

Every analysis file should contain the following H2 sections in this order. Section titles may be adapted (e.g. "Patent Reference and Design Identification" vs "Patent & Lens Identification"), but the meaning and order should match.

### 1. Patent Reference / Design Identification

Opens the file. Contains:

- Patent number (with publication country prefix), title, applicant, inventor(s).
- Filing and publication or grant dates. Priority date when relevant.
- The specific embodiment (`Example N`, `第N実施例`, `Numerical Example N`) used.
- The convergent evidence linking the embodiment to the production lens. Use a numbered list when multiple criteria converge — element/group count, special-element count (ED, asph), focal length, aperture, image-circle diameter, focus mechanism, IS configuration, MFD, and patent timing.

A reader who knows the lens but not the patent should be able to verify the identification from this section alone.

### 2. Optical Architecture

Names the overall design type (modified Gaussian, double-Gauss, telephoto, retrofocus, Sonnar, zoom of type X) and the power distribution by group (e.g. "positive-negative-negative-positive"). Gives:

- Number of elements and groups, summarized.
- High-level role of each group (front collector, focus group, IS group, relay, field flattener).
- The primary architectural choice that distinguishes this design from peers.

When the design is a zoom or has tilt/shift, describe the kinematics here at a high level (which groups move, what direction, over what range).

### 3. Element-by-Element Analysis

The bulk of the document. One subsection per element (or per cemented group) in front-to-rear order. For each element:

- **Heading** with the element's slot label (`L11`, `L12`, etc.) and its optical type (e.g. "Positive Meniscus, convex to object", "Biconcave Negative", "Pos. Meniscus (Asph)").
- **First line:** `nd = 1.XXXXX, νd = XX.X. Glass: <name> [(vendor)] [— ED / class designation]. f = ±XX.X mm.` Use Greek `νd`, not `vd`. State the glass with vendor name when known. When uncertain, label as `class` or `equivalent`.
- **Body:** the optical role of the element. What aberration it controls, how its position interacts with neighbors, why this glass was chosen, what the patent says about it (cite paragraphs as `¶0054` or `§0024`). 1–4 short paragraphs.

For cemented doublets and triplets, you may either give one heading per cemented group with sub-bullets per element, or one heading per element with a shared "interface" paragraph. Either is acceptable; pick the one that reads more naturally for the design.

### 4. Glass Identification / Selection

A consolidated view of the glass palette, separate from the per-element prose. Useful both as a quick reference and as the place to surface non-obvious design choices that the per-element walk-through can't see all at once.

Structure as a table when there are more than ~5 distinct glasses, or as a paragraph for simpler designs. Columns to consider:

- Glass / Catalog name (with vendor)
- nd, νd
- Anomalous partial dispersion (θgF, ΔPgF) when relevant
- Where used (element labels)
- Role (ED crown, dense flint, achromatizing partner, field flattener)

Where the design's chromatic strategy depends on glass selection (ED + flint pairing, multiple ED elements in the same group, secondary-spectrum correction), state the pairing logic explicitly here. Cite the patent's conditional expressions when they govern the choice.

### 5. Focus Mechanism

Names the focus type (unit focus, inner focus, rear focus, floating element, double floating). For each:

- Which group(s) move and which are fixed.
- Total focus travel.
- Object distance range and any patent-published intermediate values (β, magnification at close).
- Drive system when documented (linear motor, STM, USM, dual VCM, manual).

A short table comparing infinity-focus and close-focus spacings is appropriate here.

### 6. Aspherical Surfaces

Required when the design has any aspherical surface; omit cleanly when the design is all-spherical. Contents:

- Which surfaces are aspherical and on which elements.
- The patent's aspheric equation form, especially the conic-constant convention (e.g. some patents tabulate κ where κ = 1 corresponds to a spherical base — i.e. K = 0 in the standard form). State the convention explicitly.
- The coefficients per surface (A4, A6, A8, …) in scientific notation, copied from the patent.
- A sentence interpreting each surface's correction profile (negative A4 on a converging surface flattens the periphery, etc.).
- Manufacturing notes when relevant: glass-molded asphere (GMo), precision-glass-molded (PGM), composite/hybrid (thin resin layer on a glass substrate), or polished glass asphere.

## Conditional Sections

Include only when the design or the patent provides meaningful content. Place after the required skeleton and before "Sources".

| Section | Include when |
|---|---|
| Chromatic Correction Strategy | The design uses ED, super-ED, fluorite, or KZFS-class glass and the chromatic logic spans multiple groups. |
| Aberration Correction Strategy / Design Philosophy | The patent text or design lineage explains the rationale beyond what fits in element-by-element prose. |
| Conditional Expressions | The patent states explicit conditional inequalities (common in modern Japanese patents). Reproduce them and note whether the prescription satisfies each. |
| Image Stabilization | The lens has IS or OIS. Describe the IS group, decentering range, and the patent's stabilization claim. |
| SA / Coma / Distortion Control Mechanism | The patent identifies a specific mechanism (e.g. a floating SA-control group) that materially shapes the design. |
| Air Lenses | The design contains a strongly curved air gap whose curvature pair functions as a "negative air lens" that the patent explicitly leverages. |
| Verification Summary | The author cross-checked patent values against `buildLens()` outputs (EFL, FNO, MFD, half-field) and wants to record the match. |
| Design Heritage and Context | The lens is a notable descendant of an earlier patent or an industry-influencing original. Keep this historical, not promotional. |
| Sources / References | Any analysis that cites external sources (vendor catalogs, archival catalog scans, retrospective interviews). Always include when claims rest on non-patent sources. |

## Voice and Conventions

- **Third-person, technical.** No first-person, no second-person address, no marketing language ("breathtaking", "stunning", "legendary"). Match the voice of a journal-quality optical-design retrospective.
- **Patent-grounded.** Cite paragraphs (`¶0054`) or sections (`§0024`) when paraphrasing the patent. State explicitly when a claim is the author's interpretation rather than the patent's text — for example, when identifying a hybrid composite asphere from prescription patterns rather than from text.
- **Inline numerics on first introduction.** When an element is first mentioned, give `nd`, `νd`, glass identity, and focal length in a single line. Subsequent mentions can refer to it by label.
- **Be specific about uncertainty.** Use phrases like `inferred`, `class`, `probable`, `equivalent`, `Unmatched (...)` rather than asserting. When a glass identity is the author's best guess, say so.
- **Greek and units.** Use `νd` (not `vd`) for Abbe number. Use `θgF` for partial dispersion ratio, `ΔPgF` for the deviation from the Schott normal line, `°` for angles, `mm` for lengths, `nm` for wavelengths. Wavelengths: d-line 587.6 nm, C-line 656.3 nm, F-line 486.1 nm, g-line 435.8 nm.
- **Aspherical coefficients in scientific notation.** Match the patent's precision. State the conic convention before listing coefficients.
- **Avoid restating the data file.** Do not transcribe the entire prescription table; the data file is authoritative for numbers. The analysis exists to interpret, not duplicate.
- **No promotional language.** "Renowned" and "iconic" carry no information. Replace with patent-grounded statements ("the first lens in the system to use S-FPL51", "a five-lens cemented stack — unusual at this focal length").

## Length

Length should match the design's complexity, not be padded.

| Lens type | Typical analysis length |
|---|---|
| Vintage all-spherical prime, simple Gaussian | 100–200 lines |
| Modern AF prime with 1–2 asph and 1–2 ED | 200–400 lines |
| Modern AF prime with floating focus, IS, multiple ED, multiple asph | 400–550 lines |
| Modern AF zoom or specialty (Noct, APO, PC) | 500–650 lines |

Going significantly past 650 lines usually means the analysis is restating the data file or padding with marketing-flavored prose. Tighten before exceeding it.

## Spectral Claims

When the analysis claims chromatic behavior — APO performance, secondary-spectrum correction, anomalous partial dispersion — the underlying data file should carry the spectral fields that support the claim (`dPgF`, `nC`, `nF`, `ng` on the relevant elements; or `glass:` annotations that resolve to a vendor Sellmeier catalog). Bare `nd`/`νd` data is not enough to claim apochromatic behavior, because Abbe-only modeling cannot represent partial dispersion. If the patent does not publish the supporting numbers and they cannot be recovered, soften the claim ("well-corrected achromat") or explicitly mark it as inferred.

## When the Patent Conflicts with the Data File

The analysis describes the patent and the prescription as transcribed. When the data file deviates from the patent (scaled focal length, inferred SDs, simplified focus model when the patent only published infinity data), state that explicitly in the relevant section, label the deviation, and explain why. This is preferable to silent reconciliation.

## Examples

Look at the existing corpus for voice and structure references:

- **Modern AF prime, full skeleton:** `nikon/NikonNikkorZ50f18S.analysis.md`
- **APS-C prime, compact skeleton:** `fujifilm/FujifilmXF56mmf12.analysis.md`
- **Modern zoom, full skeleton + IS section:** `canon/CanonRF2470f28.analysis.md`
- **Vintage all-spherical zoom, condensed:** `vivitar/VivitarSeries13585mmf28.analysis.md`
- **APO design with strong glass-selection rationale:** `voigtlander/VoigtlanderApoLanthar50f2.analysis.md`

## Project-Internal References

The following project-internal documents extend this spec for the LensVisualizer codebase. They are not part of the portable analysis-file format; they describe how this corpus is curated.

- `LENS_DATA_SPEC.md` (sibling) — the prescription-file format the analysis pairs with.
- `agent_docs/adding_a_lens.md` — workflow for authoring a new lens, including a new analysis file.
- `agent_docs/lens-patent-audit.md` — workflow for revisiting an existing lens; Phase 4 of that procedure governs analysis-file edits during an audit.
- `agent_docs/article_formatting.md` — Markdown polishing expectations shared with long-form articles.
