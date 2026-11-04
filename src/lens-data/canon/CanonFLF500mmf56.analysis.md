## Patent Reference and Design Identification

**Patent:** JP S47-8109 B (JP 1972-008109 B)
**Application Number:** JP1968-005844
**Filed:** 1968-01-31
**Published:** 1972-03-08
**Inventors:** Michiyoshi Suwa; Shuji Koyanagi (諏訪通美; 小柳修爾)
**Assignee:** Canon Inc.
**Title:** Short-total-length high-performance telephoto lens (全長の短い高写力望遠レンズ)
**Example details:** 実施例1 (f = 100.0, 1:5.6, 画角 5°): numerical table p. 4, section Fig. 3 (p. 10), aberration curves Fig. 8 (p. 11). All lengths scaled ×5 to f = 500.

Example 1 is a probable match for the Canon FL-F 500 mm f/5.6 of June 1969, not a confirmed factory prescription. It agrees with the production lens on F/5.6, a 5° full field at 500 mm, one fluorite front element and a cemented rear correction pair. Canon lists six elements in five groups; the example has five elements in four groups. The difference is an unprescribed thin front element, read here as a protective glass; it is omitted rather than modelled as a flat or zero-power plate. Exact production radii, materials and revision are unconfirmed.

The romanizations Michiyoshi Suwa and Shuji Koyanagi are conventional readings of 諏訪通美 and 小柳修爾; the gazette prints only the Japanese names.

Canon's FL-F technical brochure 0469B05 shows a cemented rear pair and states six elements in five components, one of them fluorite. The 1970 dealer catalog's section instead draws the rear elements separated. That conflict between Canon's own drawings is left open; it is not read as a redesign and does not change the prescription. No foreign patent family is known.

## Optical Architecture

A telephoto of positive-negative form with the patent's telephoto ratio L/f = 0.658. The front group is a biconvex fluorite singlet, a biconcave negative singlet and a positive meniscus (patent f1 = +222.6 mm at ×5); a long air space containing the stop leads to a cemented negative-positive rear doublet (f2 = −122.0 mm). Five spherical elements in four groups give nine refracting surfaces. R6 = 2500.31 mm (500.062 in patent units) is a weak curve, not a plane.

## Element-by-Element Analysis

### L1 — Biconvex Positive

nd = 1.43387, νd = 95.1. Glass: CaF2 (fluorite crystal), named CaF2 in the patent table. f = +187.6 mm.

Fluorite front collector and the strongest positive element of the front group. Its low dispersion and anomalous partial dispersion are the basis of the lens's reduced secondary spectrum; the catalog CaF2 curve stands in for the production crystal.

### L2 — Biconcave Negative

nd = 1.79952, νd = 42.3. Glass: S-LAH52 (Ohara) catalog equivalent; patent label LaSF02. f = −191.8 mm.

High-index lanthanum-flint negative of the front group, set against the fluorite for color and spherical-aberration balance.

### L3 — Positive Meniscus

nd = 1.48749, νd = 70.0. Glass: Unmatched (fluor crown; patent label FK5). f = +233.8 mm.

Positive meniscus closing the front group ahead of the long air space to the stop.

### L4 — Biconcave Negative

nd = 1.71300, νd = 53.9. Glass: S-LAL8 (Ohara) catalog equivalent; patent label LaK8. f = −45.2 mm.

Negative front member of the cemented rear doublet and the source of the rear group's negative telephoto power.

### L5 — Biconvex Positive

nd = 1.59270, νd = 35.4. Glass: S-FTM16 (Ohara) catalog equivalent; patent label F16. f = +83.5 mm.

Positive partner at the cemented interface. A positive flint behind a negative lanthanum crown achromatizes the negative rear group.

## Glass Identification and Selection

The patent prints n and ν without naming the line; all five indices match catalog d-line values, so the table is read as d-line. L1 is CaF2 in the patent table and uses the catalog fluorite curve. The patent's LaSF02, LaK8 and F16 use Ohara S-LAH52, S-LAL8 and S-FTM16, whose nd matches and whose νd lies within 0.1 of the printed value. FK5 (L3) stays Unmatched: catalog rows at nd 1.48749 have νd 70.24–70.45 against the printed 70.0, and the closest, S-FSL5, moves the g-line focus away from the patent's curves, so L3's dispersion is estimated from nd and νd. The catalog curves are dispersion proxies; the 1969 production melts are unidentified.

Fig. 8 plots spherical aberration in d, C, F and g. Read at the axis and scaled ×5, the paraxial C, F and g foci lie +0.18, −0.05 and +0.12 mm from d; the model gives +0.23, −0.09 and +0.28 mm. The source of the remaining g-line difference is not identified.

## Focus Mechanism

The patent prints the infinity state only, with no close-focus spacing or focusing method. The model is infinity-only; Canon's 10 m minimum focus is listed as metadata and is not modelled.

## Geometry, Aperture and Image Plane

All lengths are scaled uniformly ×5 from the patent's f = 100.0; n, ν and surface shapes are unchanged. The computed EFL is 499.572 mm, 0.428 mm short of the scaled 500.0; the patent gives no rounding note and the difference is kept. All surfaces are spherical.

The image plane is fixed by the printed L = 65.767 (front vertex to focal plane), 328.835 mm at ×5. The last gap, 125.600 mm, is L minus the axial track and is not a separately printed back focus. The computed paraxial BFD is 125.444 mm, so the printed plane lies 0.156 mm behind paraxial focus. This patent-internal inconsistency is kept; the plane is not moved to best focus.

The patent prints no clear diameters or stop position. Fig. 3 draws the three front elements with roughly equal outlines and the rear doublet at about 0.40 of their height. The front semi-diameters are the nominal F/5.6 entrance-pupil radius at f = 500 plus 8 %, 48.2 mm; the rear doublet's are 19.3 mm. Fig. 3 places the iris at about 0.51 of the long gap d6; the model puts it at the midpoint, keeping the whole printed gap.

At F/5.6 the axial bundle passes every surface unclipped. The real image-space working f-number is 5.75, against the nominal paraxial F/5.6.

| Source face | Inferred clear SD, mm |
| ----------- | --------------------: |
| 1           |                  48.2 |
| 2           |                  48.2 |
| 3           |                  48.2 |
| 4           |                  48.2 |
| 5           |                  48.2 |
| 6           |                  48.2 |
| 7           |                  19.3 |
| 8           |                  19.3 |
| 9           |                  19.3 |

## Model Scope and Limitations

The model is computed at infinity only. Contrast figures are diffraction estimates from the scaled patent prescription with catalog dispersion proxies (L3 from nd and νd alone); they are not production measurements. The patent's 2.5° half-field just covers the 21.63 mm half-diagonal of the 36 × 24 mm frame, and the field is not extended beyond it.

## Sources and References

1. [JP S47-8109 B (J-PlatPat)](https://www.j-platpat.inpit.go.jp/c1801/PU/JP-S47-008109/12/en), numerical example 1, Fig. 3 and Fig. 8.
2. [Canon Camera Museum, FL-F 500mm f/5.6](https://global.canon/en/c-museum/product/fl119.html), release date, element count, minimum focus and other product specifications.
3. [Canon FL-F technical brochure 0469B05](https://www.pacificrimcamera.com/rl/00020/00020.pdf) and [1970 dealer catalog](https://www.pacificrimcamera.com/rl/00082/00082.pdf), section drawings and element count.
