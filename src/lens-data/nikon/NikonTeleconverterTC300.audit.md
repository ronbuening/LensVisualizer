# NIKON TELECONVERTER TC-300 — Audit Log

## Source

Soichi Nakamura, _Rear conversion lens_, US 4,154,508, assigned to Nippon Kogaku K.K. The US application was filed March 2, 1977, with Japanese priority of March 11, 1976. The patent was published May 15, 1979. Figure 2, on drawing sheet 1 (PDF p. 2), shows the 300 mm master and the converter together. The master's table is on PDF p. 13, the converter table headed “EXAMPLE 2” is in column 7 (PDF p. 14), and claim 4 repeats it (PDF p. 15). The dimensions are in millimetres at 1:1 scale. [Original patent](https://patentimages.storage.googleapis.com/a3/4d/9d/bc66def5d8957c/US4154508.pdf) · [Patent text](https://patents.google.com/patent/US4154508A/en)

Nikon's dimensioned TC-300 section gives the vertex span, back focus, converter focal length and barrel dimensions. MIR reproduces the TC-300 specifications: five elements in five groups, f/2.8–f/32 coupling, lenses of 300 mm and longer plus the Micro-Nikkor 200 mm f/4 IF, and an 83 mm extension from the lens flange. Nikon's F-mount compatibility chart gives the TC-300 and TC-301 one column for individual lenses. Nikon's sales manual carries the same specifications and section. [Nikon TC-300 section](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/teleconverter/tc300.gif) · [MIR, TC-200 and TC-300](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/teleconverter/index2.htm) · [Nikon compatibility chart](https://service.nikonrepair.eu/article_files/46818/TC_EN.pdf) · [Nikon sales manual, PDF p. 106](https://www.pacificrimcamera.com/rl/00594/00594.pdf#page=106)

## Transcription Check

All ten signed radii, nine internal intervals, the 1.5423 mm junction and five index/Abbe pairs agree between the Example 2 table and claim 4. The table brackets surfaces 1–6 as the diverging group f1 and surfaces 7–10 as the converging group f2. Each element is an air-spaced spherical singlet. There is no cemented interface, converter iris or rear plate. No erratum was found, and the prescription keeps the printed millimetre scale.

The Nikkor 300 mm f/4.5 ED prescription in US 3,774,991, Example I, shares the master's radii, spacings and indices. The Abbe numbers of master elements 1 and 4 are 81.9 in the converter patent and 81.5 in the 300 mm lens patent. The first-order comparison below uses the converter patent's master. [US 3,774,991](https://patents.google.com/patent/US3774991A/en)

The patent prints n and ν without naming a wavelength. US 4,348,085, another Nippon Kogaku patent, gives the front group's two index/Abbe pairs at the helium d line, and the model assumes that line throughout. [US 4,348,085](https://patents.google.com/patent/US4348085A/en)

## First-Order Check

| Quantity at infinity                 |      Patent |         Calculated |
| ------------------------------------ | ----------: | -----------------: |
| Master focal length                  |      300 mm |          300.00 mm |
| Master aperture                      |       f/4.5 |             f/4.50 |
| Front group focal length             | −96.8024 mm |         −96.802 mm |
| Rear group focal length              | +281.131 mm |        +281.131 mm |
| Converter focal length               | −236.415 mm |        −236.423 mm |
| Master and converter focal length    |      600 mm |          600.01 mm |
| Aperture with the master iris        |         f/9 |             f/9.00 |
| Focal-length multiplier              |          2× |            2.0000× |
| Half-field to the 35 mm frame corner |       2°05′ | 2.089° at 21.65 mm |
| Back focus with converter            |    Unlisted |          63.112 mm |
| First master surface to film         |    Unlisted |         315.694 mm |

The full-aperture combination covers the frame without a converter rim limiting the axial aperture. The paraxial image lies within 0.00001 mm of the modeled image plane. All surfaces keep positive edge thickness and stay clear of each other.

## Values Not Printed in the Patent

**Rims.** In Figure 2 the first and last converter vertices are about 577 pixels apart on the 300 dpi sheet. Their 88.54 mm separation gives 6.5 pixels/mm. On surface 8, a sag of about 19 pixels at a height of 110 pixels gives about 6.3 pixels/mm radially from the printed radius of −55.266 mm. The estimates below use the vertex scale and both edges of the glass. Nikon's section has its own 88.5 mm vertex dimension. Both drawings show square edges on all five singlets. [Nikon's dimensioned section](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/teleconverter/tc300.gif)

| Converter surfaces | Figure 2 radius (mm) | Nikon radius (mm) | Modeled radius (mm) |
| ------------------ | -------------------: | ----------------: | ------------------: |
| 1–6 (L1–L3)        |            13.2–13.4 |              13.3 |                13.3 |
| 7–10 (L4–L5)       |            18.7–18.8 |              19.8 |                19.8 |

At f/9 on the patent master, the 19.8 mm rear pair passes 96.0% of the corner pupil and gives 100.7% illumination relative to the axis. At 18.7 mm the same pair passes 82.8% of the pupil and gives 87.1% relative illumination.

- **Iris.** The master's iris is placed 1.0 mm behind its seventh surface. Its calculated wide-open radius is 29.26 mm and stays fixed when the converter is attached. The master's Figure 2 clear radii fall short of the nominal axial marginal ray at S1 and S3 by 0.03 and 0.16 mm, within the roughly 0.3 mm precision of the drawing. The converter passes the axial and corner chief rays at every surface. A converging axial f/2.8 cone at the same virtual object distance also clears the converter, with the smallest margin about 0.94 mm at the first surface.
- **Image distances.** The master alone has 70.053 mm of paraxial back focus. Subtracting the printed junction places its image 68.511 mm behind the first converter vertex, and tracing through the converter gives the 63.112 mm final gap. `masterImageDistanceMm` and the last gap hold these values to 0.00001 mm. The converter moves the image back by 83.14 mm.
- **Focus.** All element spacings are fixed, and the patent gives no finite-focus distances. The host supplies focus and iris. At finite focus the host's travel applies, and the 83.14 mm extension adds to distances measured from the image plane: the 300 mm f/4.5 ED's 4.0 m minimum becomes 4.08 m, the AI 600 mm f/5.6 IF-ED's 5.5 m becomes 5.58 m, and the 360–1200 mm zoom's 6.0 m becomes 6.08 m.
- **Glass.** In the rear group, Schott K10 matches L4's printed index with an Abbe difference of −0.09. Ohara S-FTL10 is another possible match. Hoya NBFD3 differs from L5 by −0.00004 in index and +0.14 in Abbe number. L1–L3 have no catalog equivalent at the printed precision. L2 lies within the site's spectral-proxy tolerance of Hoya M-NBF1 (−0.00113 in index, −0.07 in Abbe number); the nearest glass to the L1/L3 pair, Hoya FF5, differs by −0.00237 in index, outside it. [Schott K10](https://us.shop.schott.com/advanced-optics/en/Optical-Glass/K10/c/glass-K10) · [Hoya cross-reference, NBFD3 805-396](https://www.hoyaoptics.eu/glass-cross-reference-index)

## Product Identification

Nikon released the AI-coupled TC-200 in May 1977, and the TC-200 and TC-300 debuted together as revised, AI-coupled versions of the TC-1 and TC-2. Like the TC-2, the TC-300 serves telephotos of 300 mm and longer with recessed rear elements. In 1983 AI-S coupling turned the pair into the TC-201 and TC-301. MIR gives the TC-301 the same five-element, five-group construction. [Nikon, Tale 73](https://imaging.nikon.com/imaging/information/story/0073/) · [MIR, TC-200 and TC-300](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/teleconverter/index2.htm) · [MIR, Nikon teleconverters](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/teleconverter/index.htm) · [MIR, TC-201 and TC-301](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/teleconverter/index6.htm)

Nikon's TC-300 drawing gives an optical span of 88.5 mm, a back focus of 63.1 mm and a converter focal-length magnitude of 237.7 mm. Example 2 gives 88.54, 63.11 and 236.42 mm. The drawing's 83.1 mm from the lens flange to the camera flange matches the 83.14 mm by which the converter moves the image back; the front tube projects 23.5 mm ahead of the lens flange. Example 2 alone pairs the five-singlet converter with a 300 mm f/4.5 master. With the drawing scaled to its vertex span, the ten calculated vertex positions differ from the drawn positions by about 0.62 pixels RMS over a 339-pixel span, against about 73 pixels for Example 1, whose groups are 0.514 mm apart instead of 66.24 mm. Example 11 has seven elements and corresponds to the TC-200. [Nikon TC-300 section](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/teleconverter/tc300.gif) · [US 4,154,508](https://patents.google.com/patent/US4154508A/en)

Nikon specifies a 2× multiplier, AI aperture coupling from f/2.8 through f/32 and lenses of 300 mm and longer plus the Micro-Nikkor 200 mm f/4 IF, with which the combination focuses from infinity to life size. The converter is offered on the 300 mm f/4.5 ED, the AI 600 mm f/5.6 IF-ED, the AI 360–1200 mm f/11 ED and the Zoom-Nikkor ED 180–600 mm f/8. At infinity the 300 mm f/4.5 ED, both 600 mm f/5.6 ED prescriptions, both ends of the 360–1200 mm zoom and every setting of the 180–600 mm zoom reach the full-frame corner with the converter, and the axial beam is not clipped. The 180–600 mm zoom's AI-S manual lists the TC-300 among its accessories. The separate-mount 600 mm f/5.6 ED also depends on its focusing unit for the camera connection. [MIR, TC-300 specifications](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/teleconverter/index2.htm) · [Nikon 180–600 mm manual, accessories](https://portablemedia.manualsonline.com/manuals/mfg/nikon/ed180600mm.html?p=12)

Nikon's chart lists as usable with the TC-300 and TC-301 the Micro-Nikkor 200 mm f/4 IF, the AI 300 mm f/2.8 IF-ED, the 300 mm f/4.5 IF-ED, the AI-S 400 mm f/3.5 IF-ED, the 400 mm f/5.6 IF-ED, the AI-S 600 mm f/4 IF-ED, the 600 mm f/5.6 IF-ED, the 500 mm f/4P IF-ED and the 180–600 mm f/8 ED, with uneven-illumination warnings for the 400 mm f/2.8 IF-ED, 800 mm f/5.6 IF-ED and AI 800 mm f/8 IF, and the Reflex-Nikkor 1000 mm f/11 without its filter. It also lists the AF 300 mm f/2.8 and f/4 IF-ED and the AF-I and AF-S D-type 300–600 mm telephotos, which MIR says focus manually with the TC-301. The chart marks the 300 mm f/4.5 ED, 400 mm f/5.6 ED, 1200 mm f/11 IF-ED and 360–1200 mm f/11 ED unusable. [Nikon compatibility chart, pp. 2–4](https://service.nikonrepair.eu/article_files/46818/TC_EN.pdf) · [MIR, TC-301](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/teleconverter/index6.htm)

## Corrections, 2026-11-25

- The converter is identified as the Nikon TC-300 2× converter for the Nikon F mount and 35 mm format, with five elements in five groups. Its key and title follow the maker-and-model form and it is published. The patent number is written US 4,154,508 and the assignee Nippon Kogaku K.K. The subtitle names the patent, example, assignee and inventor, and the specifications read 5 ELEMENTS / 5 GROUPS, ALL SPHERICAL and 2× CONVERTER. [MIR, TC-300 specifications](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/teleconverter/index2.htm)
- The five generic element entries carry the patent's L1–L5 names, shape types, roles and in-air focal lengths. The two group brackets follow the patent's f1 and f2.
- `minHostFNumber` moves from f/4.5, the aperture of the patent's master, to f/2.8, the fast end of Nikon's coupling range. An axial f/2.8 cone clears every converter surface with at least 0.94 mm to spare.
- The clear radii of 13.3 mm on surfaces 1–6 and 19.8 mm on surfaces 7–10 are kept and attributed to Nikon's production section, scaled by its 88.5 mm vertex span. The rear radius exceeds the patent figure's 18.7 mm because Nikon draws L4 and L5 that large; the figure's value would lower corner illumination from 100.7% to 87.1%.
- `masterImageDistanceMm` and the final gap are held to 0.00001 mm (68.51119 and 63.11192 mm), with the paraxial image within 0.00001 mm of the image plane. The printed millimetre scale, radii, spacings and glass data are unchanged, and no erratum required correction.
- L4 takes Schott K10 (catalog minus patent: Δnd +0.000001, Δνd −0.09) and L5 Hoya NBFD3 (Δnd −0.00004, Δνd +0.14) for dispersion. L1–L3 keep the printed index and Abbe number alone.

On the patent master the finished converter gives 600.01 mm at f/9.00, a 2.0000× multiplier, 63.112 mm back focus and 315.694 mm from the first master surface to the film. The converter alone has −236.423 mm focal length, and the master iris radius stays 29.26 mm.

- 2026-11-25 rim review:
  - The comparison with Fig. 2 and Nikon's drawing supports retaining all ten rims.
- 2026-11-26 diagram review:
  - The mounted page on the 300 mm f/4.5 ED was compared with Figure 2 and Nikon's dimensioned section, and no rim changed. In Figure 2 the first and last converter vertices lie 577 pixels apart at 300 dpi for 88.54 mm (6.52 pixels/mm), and the first and seventh lie 524 pixels apart for 80.34 mm. The master's front element reads 33.5 mm against its 33.3 mm axial beam, so the radial and axial scales agree. On that scale the front singlets reach 13.2–13.5 mm and the rear pair 18.7–19.0 mm, read from the local axis line on both sides. Nikon's section gives 340 pixels for its 88.5 mm span, and its 64.4 mm barrel spans 252 pixels, 2% more than that scale predicts. Between the two scales its singlets reach 13.2–13.4 mm at the front and 19.4–19.7 mm at the rear. The 19.8 mm rear rims stand 4–6% above Figure 2, inside the 10% reading band, and follow Nikon's section; every element keeps one height on both faces, as both drawings show.
  - Lands and cuts: none. Every face keeps its rim from before the 2026-11-25 changes. Mounted on the 300 mm f/4.5 ED, the AI 600 mm f/5.6 IF-ED and every station of the 180–600 mm and 360–1200 mm zooms, the converter keeps 100% corner coverage and clips no axial ray; the worst loss is 0.0 points.
  - L2: "Unmatched (nd 1.74443 / νd 49.4)" → "M-NBF1 (spectral proxy; patent nd 1.74443 / νd 49.4; supplier and melt unspecified)". The pair recurs in several of the patent's examples and in other Nikkor prescriptions, but this does not identify a production melt, and no catalog glass matches it at the printed precision. Hoya M-NBF1 (1.74330/49.33) lies inside the site's spectral-proxy tolerance; with the printed index kept, L2 traces at νd 49.40, against 49.42 for Ohara S-LAM60, 49.47 for Schott N-LAF35 and 49.30 for Hoya NBF1, which also lie inside it. The 360–1200 mm host labels the same pair M-NBF1. The patent prints no chromatic curves (Figures 13–24 give spherical aberration, astigmatism and distortion), so no colour comparison with the patent is possible. On the 300 mm f/4.5 ED the change leaves the F−C spread of the combination unchanged and moves its paraxial C, F and g foci by −15, −15 and −91 µm relative to d, to +0.63, +0.61 and +2.93 mm, as the lanthanum-flint partial dispersion replaces the normal-line value.
  - L4: "K10" → "K10 (Schott)", and L5: "NBFD3" → "NBFD3 (Hoya)". The rows are unchanged; the labels now name the maker. Ohara S-FTL10 matches L4 as closely (Abbe difference −0.08), but with no printed colour curves nothing favours a switch.
  - Checked and unchanged: names L1–L5 and labels Element 1–5; shape types against the signs of the radii; roles; focal lengths of +101.91, −33.44, +112.42, +94.42 and −140.30 mm; no special-dispersion tags, aspherical surfaces or cemented pairs, as neither the patent nor Nikon marks any. The mounted page numbers the converter elements T1–T5, captions the converter "TC 2×", and heads the 300 mm f/4.5 ED combination "6 + 5 elements", 600.01 mm and f/9.00. At f/9 the patent combination's marginal spherical aberration traces at +0.24 mm, as Figure 14 shows.
  - Movement: no converter element moves. On the 180–600 mm and 360–1200 mm zooms the focal length doubles at every station (1.9987–2.0014×), the zoom still runs from wide to tele and the image plane stays fixed. On the AI 600 mm f/5.6 IF-ED focus still runs from infinity to the close limit, which reads 5.58 m against 5.50 m without the converter.

## Remaining Questions

- Neither drawing dimensions the clear apertures. The master iris position and the production glass identities also remain uncertain.
- The patent prints no chromatic aberration curves, so the dispersion L2, L4 and L5 take from catalog glasses, and the normal partial dispersion assumed for L1 and L3, cannot be checked against the design.
- Nikon's drawing gives 237.7 mm for the converter's focal-length magnitude against 236.42 mm for Example 2. Whether the production radii depart slightly from the example is undocumented.
- Nikon's chart marks the 300 mm f/4.5 ED, whose design is the patent's master, and the 360–1200 mm f/11 ED unusable with the TC-300 and TC-301, without a reason for either lens. Both pass the axial beam and reach the frame corner at infinity. Mechanical interference with the 23.5 mm front tube at the patent's 1.54 mm vertex gap, coupling or image quality could explain it; none is documented.
- Mechanical clearance and coupling of the separate-mount 600 mm f/5.6 ED with the TC-300 depend on its focusing unit and are undocumented.
- Whether the TC-301 keeps the TC-300's optics unchanged is undocumented; MIR gives both five elements in five groups.
