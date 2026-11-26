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

- **Rims.** Nikon's 88.5 mm first-to-last vertex dimension sets the scale for its TC-300 section. The heights from the optical axis to the glass edges give 13.3 mm for surfaces 1–6 and 19.8 mm for surfaces 7–10. The patent drawing gives about 13.3 and 18.7 mm. With the same master and iris, the production-section rims pass 96.0% of the corner pupil and give 100.7% geometric illumination relative to the axis. The patent drawing's rear radius would give 87.1%. These are calculated quantities. [Nikon's dimensioned section](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/teleconverter/tc300.gif)
- **Iris.** The master's iris is placed 1.0 mm behind its seventh surface. Its calculated wide-open radius is 29.26 mm and stays fixed when the converter is attached. The master's Figure 2 clear radii fall short of the nominal axial marginal ray at S1 and S3 by 0.03 and 0.16 mm, within the roughly 0.3 mm precision of the drawing. The converter passes the axial and corner chief rays at every surface. A converging axial f/2.8 cone at the same virtual object distance also clears the converter, with the smallest margin about 0.94 mm at the first surface.
- **Image distances.** The master alone has 70.053 mm of paraxial back focus. Subtracting the printed junction places its image 68.511 mm behind the first converter vertex, and tracing through the converter gives the 63.112 mm final gap. `masterImageDistanceMm` and the last gap hold these values to 0.00001 mm. The converter moves the image back by 83.14 mm.
- **Focus.** All element spacings are fixed, and the patent gives no finite-focus distances. The host supplies focus and iris. At finite focus the host's travel applies, and the 83.14 mm extension adds to distances measured from the image plane: the 300 mm f/4.5 ED's 4.0 m minimum becomes 4.08 m, the AI 600 mm f/5.6 IF-ED's 5.5 m becomes 5.58 m, and the 360–1200 mm zoom's 6.0 m becomes 6.08 m.
- **Glass.** In the rear group, Schott K10 matches L4's printed index with an Abbe difference of −0.09. Ohara S-FTL10 is another possible match. Hoya NBFD3 differs from L5 by −0.00004 in index and +0.14 in Abbe number. L1–L3 have no close catalog equivalent at the printed precision. [Schott K10](https://us.shop.schott.com/advanced-optics/en/Optical-Glass/K10/c/glass-K10) · [Hoya cross-reference, NBFD3 805-396](https://www.hoyaoptics.eu/glass-cross-reference-index)

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

## Remaining Questions

- The published sections leave the precise clear apertures, the master iris position and the production glass identities uncertain.
- Nikon's drawing gives 237.7 mm for the converter's focal-length magnitude against 236.42 mm for Example 2. Whether the production radii depart slightly from the example is undocumented.
- Nikon's chart marks the 300 mm f/4.5 ED, whose design is the patent's master, and the 360–1200 mm f/11 ED unusable with the TC-300 and TC-301, without a reason for either lens. Both pass the axial beam and reach the frame corner at infinity. Mechanical interference with the 23.5 mm front tube at the patent's 1.54 mm vertex gap, coupling or image quality could explain it; none is documented.
- Mechanical clearance and coupling of the separate-mount 600 mm f/5.6 ED with the TC-300 depend on its focusing unit and are undocumented.
- Whether the TC-301 keeps the TC-300's optics unchanged is undocumented; MIR gives both five elements in five groups.
