# Goerz Doppel-Anastigmat 240mm f/8 (DE 74437 C) — audit log

Patent: DE 74437 C, its sole numerical example (page 2), drawn as Fig. 3

## 2026-11-18 — Built from DE 74437 C (D.R.P. 74 437)

### Sources

- The original-document scan of DE 74437 C from Espacenet: four bilevel pages at a native 300 ppi. They were
  rendered at 150 dpi and the table, foci and drawing were read on 600 and 1200 dpi crops of the image, not on OCR.
  Page 1: header and description; page 2: description, the example's table, the computed foci and the astigmatism
  statement; page 3: end of the description and the two claims; page 4: drawing sheet with Figs. 1–3.
- Google Patents DE74437C: citation number `DE:74437:C`, the kind code used in `patentNumber`, as in the corpus's
  other early German patents (DE 143889 C, DE 88505 C).
- Reference: the audited literature file `literature/HoeghDoppelAnastigmatVonRohr1899` (von Rohr 1899, p. 376,
  Fig. 138; glass names and ν̄ on p. 375; history pp. 376–378), used for the comparison below.

### Values read

| Patent | Printed | File |
|---|---|---|
| Header | C. P. Goerz in Schöneberg bei Berlin; Sphärisch, chromatisch und astigmatisch corrigirtes Objectiv; Klasse 57 | `assignees`, title in the analysis |
| Dates | patentirt im Deutschen Reiche vom 20. December 1892 ab; stamped "Ausgegeben den 4. April 1894" | `patentYear` 1894 |
| Ratings | 240 mm äquivalente Brennweite; 36 mm freie Linsenöffnung; grösste wirksame Oeffnung 30 mm, "dem achten Theil der Brennweite" | `focalLengthMm.design` 240, `fNumber.design` 8, outer sd 18 |
| R1 = R8 | 45,835 | r1 = 45.835, r8 = −45.835 |
| R2 = R7 | 54,324 | r2 = −54.324, r7 = 54.324 |
| R3 = R6 | 19,853 | r3 = 19.853, r6 = −19.853 |
| R4 = R5 | 49,088 | r4 = 49.088, r5 = −49.088 |
| d1 = d6, d2 = d5, d3 = d4 | 7,334, 1,833, 4,584 | same |
| Δ (Luftabstand) | 11,00 | 5.5 before and 5.5 after STO |
| nD / nG′ L1 = L6 | 1,61310 / 1,62683 | nd 1.6131; nG′ in a comment |
| nD / nG′ L2 = L5 | 1,56804 / 1,58182 | nd 1.56804; nG′ in a comment |
| nD / nG′ L3 = L4 | 1,51497 / 1,52663 | nd 1.51497; nG′ in a comment |
| Index lines | "Linie D (nD) des Sonnenspectrums" and the hydrogen line printed "H8" (nG′) | `indexReference` "D"; G′ = Hγ |
| Foci, central | FG′ = 223,065, FD = 223,275, Δ = −0,210 | compared below |
| Foci, Mittelzone F:12 | FG′ = 221,400, FD = 221,360, Δ = +0,040 | compared below |
| Foci, Randzone F:8 | FG′ = 223,495, FD = 223,442, Δ = +0,053 | compared below |
| Astigmatism | 30° chief ray: sagittal and meridional points 1,2 mm apart, meridional image flat | analysis |

The radii are printed unsigned. The claim (a negative lens enclosed by two positive lenses, one of higher and one of
lower index), the Fig. 1 cell (crowns a and a¹ about the flint b) and Fig. 3 fix the signs in the file column. The
decimals of R2 were compared at 1200 dpi with the 3 in R1's "835" and read 54,324. The patent
prints no stop position, field angle, nC, nF, glass name, example number or inventor. Fig. 3 is the only figure of
the example; Figs. 1 and 2 are the two cell types.

### Scale and first-order check

- Native scale, no scaling. EFL 240.242 mm, 0.10 % above the stated 240 mm. Paraxial back focus 223.265 mm
  (computed 223.2649), stored as the last gap; the patent's central-ray focus is 223.275 mm. Vertex length 38.502 mm.
  Petzval sum 1.1404 × 10⁻³ mm⁻¹ (radius 877 mm, 3.65 f). The engine build gives the same EFL, a stop radius of
  13.126 mm and an entrance-pupil radius of 15.015 mm at f/8.
- Element focal lengths (thick, in air): L1 = L6 +41.7, L2 = L5 −25.4, L3 = L4 +61.5 mm; each cell +420.0 mm.
- Paraxial trace with the printed nG′ (outside the engine): back focus 223.053 mm, a G′–D shift of −0.212 mm
  against the printed −0.210.
- Exact axial trace at the patent's heights (h = 10 mm for F:12, 15 mm for F:8):

| Ray | Patent FD | Traced FD | Patent FG′ | Traced FG′ |
|---|---|---|---|---|
| central | 223.275 | 223.265 | 223.065 | 223.053 |
| F:12 | 221.360 | 221.230 | 221.400 | 221.158 |
| F:8 | 223.442 | 223.160 | 223.495 | 223.311 |

  The central foci agree to 0.012 mm; the zonal and marginal foci are 0.13–0.28 mm shorter than printed, the
  marginal ray crossing zero near 1:7.97 instead of just inside 1:8. The table is kept as printed.
- Longitudinal spherical aberration at f/8 (engine trace): −0.083 (pupil rim), −1.921 (0.85), −2.108 (0.7),
  −1.414 mm (0.5); deepest zone −2.154 mm at 11.3 mm.

### Comparison with von Rohr's table

| Value | Patent / 2.4 | Patent × 100/240.242 | Von Rohr, Fig. 138 |
|---|---|---|---|
| r1, r2, r3, r4 | 19.098, 22.635, 8.272, 20.453 | 19.079, 22.612, 8.264, 20.433 | 19.1, 22.7, 8.3, 20.5 |
| d1, d2, d3 | 3.056, 0.764, 1.910 | 3.053, 0.763, 1.908 | 3.1, 0.8, 1.9 |
| b1 = b2 | 2.292 | 2.289 | 2.3 |
| nD | 1.61310, 1.56804, 1.51497 | same | same |

Result: **von Rohr's table is this example divided by 2.4 (the stated 240 mm) and rounded to 0.1 mm, except
r2 = r7.** The patent's 54.324 reduces to 22.64, where he prints 22.7; the traced-EFL factor would also miss r4.
The patent's own focal data confirm its digit: R2 = 54.524, which would reduce to 22.7, gives a paraxial back focus
of 223.560 mm, 0.29 mm beyond the printed central focus. The difference is therefore von Rohr's rounding or
misprint, not a misprint in the patent. His ν̄ (44.7, 41.2, 44.2) is (nD − 1)/(nG′ − nD) from the printed pairs
(44.65, 41.22, 44.17). Reduced to f = 100 this file gives zero spherical aberration near 1:7.97 and a zone of
−0.90 mm, against his "about 1:7.8" and "not quite −1.0 mm"; the literature audit traced his rounded table to zero
near 1:7.45.

### Rims

Fig. 3 is drawn "in natürlicher Grösse". Measured on page 4 at 600 dpi: the drawing is tilted about 1.4° (the rear
cell sits 10.5 px higher over 420 px). R1 and R8 vertices lie at 240.5 and 1107 px on the drawn axis, 866.8 px for
38.502 mm (22.51 px/mm; the scan reproduces the sheet at 0.953 of natural size at 600 dpi). Along the axis R4 reads
13.62 mm (13.751), the stop plate 19.18 mm (19.251) and R5 24.55 mm (24.751), so the section is to scale within
0.2 mm and the stop plate is centred in the air space. Both cells are drawn as square-ended glass 832 px tall,
36.96 mm across, with a barrel bead of about 0.5 mm over the rim of R1 and R8. The inner lips of both cell mounts are
663 px apart, a clear radius of 14.73 mm; the inner menisci end at the lips (computed knife edge 15.10 mm).

| Surface | sd | Basis |
|---|---|---|
| 1, 2 | 18 | patent text, 36 mm free lens opening; drawn glass 36.96 mm with the rim bead |
| 3, 4 | 14.7 | Fig. 3, inner lip of the front cell mount (14.73 mm) |
| STO | engine (13.126) | derived from 1:8 |
| 5, 6 | 14.7 | Fig. 3, inner lip of the rear cell mount (14.73 mm) |
| 7, 8 | 18 | as surfaces 1, 2 |

`source.sdSource` is `"figure-measured"`. At these rims L1 keeps an edge of 0.583 mm (knife edge 18.73 mm), L3 an
edge of 0.327 mm, and L2 ends its rear face at 14.7 mm, where Fig. 3 finishes it with a flat annulus. The literature
file's 6.2 mm on every surface is 14.88 mm at this scale; the patent drawing makes the outer surfaces 21 % larger and
the inner ones 1 % smaller. The clear-aperture probe at f/8 and ω = 36° shows no clipped axial beam and no blocked
chief ray: axial heights 15.02 / 14.65 / 13.37 / 13.22 mm at r1–r4 and 12.95 / 13.05 / 13.85 / 14.13 mm at r5–r8,
chief heights 11.71 / 9.05 / 6.92 / 4.91 mm mirrored about the stop; it finds no full-bundle rim rays at 36°.
A meridional exact trace passes about 89 % of the stop-filling beam at 20°, 66 % at 30° and 47 % at 36°. The
paraxial rim limit is 46.7° at r1 and r8. The surface audit reports no validation errors.

The plate stop Fig. 3 draws has an opening 530 px high, 23.5 mm, smaller than the 26.25 mm stop f/8 needs; the
model sizes the stop from the stated 30 mm aperture, as the stop rule requires.

### Model decisions

- `maker` "Goerz"; name `GOERZ DOPPEL-ANASTIGMAT 240mm f/8 (DE 74437 Design)`, the example's own ratings; key
  `goerz-doppel-anastigmat-240mm-f8-de74437`.
- `authors` []: the document names no inventor; von Rohr's attribution to Emil von Höegh is given in the analysis.
  `assignees` ["C. P. Goerz"]: the patentee as printed, read as the firm (from 1890 Optische Anstalt C. P. Goerz)
  rather than Carl Paul Goerz in person, since the document gives the trading name with a business location and
  Goerz did not design the lens.
- `source.example` `{ label: "Sole example", id: null }`: the publication holds exactly one numerical example and
  gives it no identifier of its own; Fig. 3 draws it but is not its designation (LENS_DATA_SPEC.md § The transcribed
  example).
- `indexReference` "D"; nG′ (G′ = Hγ, about 434.0 nm) is not the schema's g line and no nC or nF is printed, so each
  element keeps nD only, with nG′ in a comment, and no catalog proxy; the engine traces at nD alone. The glass names
  in the labels are von Rohr's (p. 375).
- Stop centred in the 11.00 mm air space, as Fig. 3 draws it. Field limited to ω = 36°, von Rohr's computed
  half-field; the patent prints none. f-stops 8, 11, 16, 22; infinity only.
- No `lensMounts` or `imageFormat`: Fig. 3 draws a flanged barrel, but the catalogued series von Rohr lists were
  rated 1:7.7 and 1:11, and no product is tied to this 1:8 example.

### Open limitations

- The model is monochromatic although the patent prints nG′; the chromatic correction it computes is not
  reproduced.
- The stop position is read from Fig. 3, and the 36° field is von Rohr's; the patent prints neither.
- The patent's zonal and marginal foci are reproduced only to 0.13–0.28 mm.
- The front ring and the plate stop of the Fig. 3 barrel are not modelled; the drawn plate is a smaller stop than
  the stated aperture.
- Reading the patentee "C. P. Goerz" as an organization is a judgment; the document does not say whether the firm or
  the person holds the patent.
