# Audit Log — OLYMPUS ZUIKO AUTO-T 400mm f/6.3

Patent: US 3,864,027, Example 1 (Table 1, repeated in claim 2; section in Fig. 1)

## 2026-11-01 — Deployment validation and cleanup

### Patent re-read

Read from the USPTO image scan at native resolution, which has no text layer: 10 radii, 9 spacings, 5 n and 5 ν, against Table 1 and the claim 2 repeat. Mismatches: none. Every file value is the printed value × 400. The stop split, 96.83472 + 45.56928 mm, sums to the printed d6 × 400, 142.404 mm. There are no aspheres or printed variable gaps. The front page agrees with the file: number, 4 February 1975, Kenichi Harada, Olympus Optical.

Patent slips, none touching Example 1's prescription:

- Fig. 5 prints y′ = 0.0054f, NA:0.0064 and NA:0.00045 for 0.054f, 0.064 and 0.045. The 0.7-zone label, y′ = 0.0378f, and the trace both fix the first.
- Table 2 prints r8 = 11.22627 and claim 3 prints 1.22627. Only the second gives f = 1 and t = 0.75, so Table 2 is the misprint.
- Claim 2's preamble and column 7 print 60°10′ for 6°10′.
- Example 3's Petzval sum prints as −0.006; the prescription gives −0.060.

### Patent vs model first-order values

| Quantity | Patent | Model |
| --- | --- | --- |
| Focal length | f = 1 | 399.98 mm (0.99995 × 400) |
| F-number | F/6.3 | 6.30 paraxial; working 6.35 at the stop |
| Telephoto ratio | t = 0.75 | B/f = 0.7509 |
| Back focus | not printed | 96.6325 mm, paraxial |
| Front vertex to image | not printed | 300.36 mm |
| Half-field | 3°05′ (6°11′ full in the abstract) | 3.0833° |
| Petzval sum | −0.157 | −0.157 |
| f1 / f2 / f3 | 0.3 / −0.608 / −2.909 | 0.300 / −0.608 / −2.909 |
| Conditions (1) to (5) | 1.1591 / 0 / 0.0269 / 0.103 / 2.301 | 1.1591 / 0 / 0.0269 / 0.103 / 2.301 |

The package's last gap of 96.272 mm came from the rounded 0.75 and sat 0.3605 mm ahead of paraxial focus. The patent's curves are drawn from paraxial focus, so the gap moved to the paraxial value. At 3°05′ from that plane, Δm/ΔS trace to −0.00028f/+0.00008f against about −0.00026f/+0.00008f read from Fig. 4c. Distortion traces to +0.35 % against about +0.38 % in Fig. 4d, where the old plane gave +0.13 %. Patent values here are pixel reads of the plots.

The stop is inferred. Fig. 1's mark measures 0.683 of d6, and the Fig. 4c curves fit a stop at 0.67 to 0.69 and clearly miss at 0.5 and 0.9.

Rims measured on Fig. 1 at 4.50 px/mm, taken from S1 to M over 300.36 mm: L1 34.3 mm (file 34.29), L2 and L3 30.2 (30.00), L4 18.3 (18.21), S9 18.2 (18.21). S10 was the largest difference, drawn near 18.2 against the package's 16.59, and the figure draws L5 with one continuous edge, so S10 was raised to S9's height. Corner illumination stayed at 74.8 % at 3.1°.

Unit focus reproduces Fig. 5 at 1/10×: NA 0.0639, Δm −0.00036f, ΔS +0.00003f, distortion +0.18 %. Object to image at 1/10× is 4.999 m. The near gap, 136.619 mm, is solved for 5.0 m, and probe.mjs reports 5000.00 mm at m = −0.1000.

At the current plane 3°05′ reaches 21.62 mm, 0.03 mm (0.13 %) short of the viewer's 21.65 mm corner.

The tool clearap.mjs reports ω = 0.57° on this lens whatever `--Y` is given, so its BLOCKS-CHIEF flags were disregarded. Field clearance came from a separate sphere and Snell trace, which matched the engine's EFL and BFD and the package's 21.5739 mm chief height at the old plane.

### Public diagram comparison

The coordinator viewed the Late 0173 catalogue, printed p. 54, and measured it; the PDF was not downloaded or re-measured here. The page prints "6 elements in 5 groups", 1300 g, 255 mm, 80 mm, 72 mm filter, 5 m, f/6.3–32, and its section draws five separate elements. At 1.98 px/mm, in pixel coordinates with L1's front near x = 93: L3 rear 174 (model 174), S7 455 (456), S9 485 (486), S10 498 (496). L1's outline is about 34.6 mm semi-diameter (model 34.29). The model therefore matches the drawing within 1–2 px, and the page's text count is unexplained.

The patent family is DE 2 323 383 A1 (same three five-lens examples at f = 1, no millimetre length) and JP S49-12818 A / JP S51-16135 B2 (text unavailable). The FR entry Google lists is an unrelated mislink. The search found no six-element Olympus design for this lens; it was limited, and US 3,966,307 (five lenses) was seen only in summary.

### Fields changed

Data fix commits: last gap 96.272 → 96.6325; S10 sd 16.594 → 18.2057; closeFocusM 1e15 → 5 with `gaps` BF [96.6325, 136.619]; L3 glass S-FTM16 → FF5, Δν 0.15 against 0.29. J-F16 lists 35.27 and is not in the repo catalog. Stem, key, name and the other glass labels were set earlier on the branch.

This pass: header comment, `subtitle`, `catalog.specs`, element `role`, `focus.description`, and `groups` FRONT and REAR for the patent's F and R. Analysis rewritten for the new image plane, unit focus and glass labels. Removed from it: the MTF research, the process and package text, the Drive and hash references, and the 300 mm-plane and "no movement law" statements. Dropped as unsupported: the claim that Fig. 1 is not uniformly scaled, since d6 and the back focus give one scale within 0.1 % and the rims agree at it.

### Open

- Open: the catalogue's "6 elements in 5 groups" is not explained. No redesign is claimed.
- The Early catalogue (printed p. 54: 5 elements in 5 groups, 1400 g, 255 mm) and the OM-10 FC manual table (printed p. 41: Zuiko MC 400mm F6.3, 5-5, 1300 g, 256 mm) were read from their page images. Retail 5/5 comes from search listings.
- Open: the production focusing mechanism is undocumented. Unit focus is inferred from Fig. 5, and the 5 m state is not a certified conjugate, so no `conjugates` or `published` rows were added.
