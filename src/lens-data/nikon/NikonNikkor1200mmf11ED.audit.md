# NIKON NIKKOR 1200mm f/11 ED — Audit Log

## Source

[JP S51-43920 A, _Achromatic Objective Lens_ (色消対物レンズ)](https://patents.google.com/patent/JPS5143920A/en), Yoshiyuki Shimizu (清水義之), Nippon Kogaku K.K. Application 49-117055 was filed October 14, 1974, and the four-page publication appeared April 15, 1976. The application was later published in examined form as JP S54-16856 B on June 26, 1979. The sole example is printed twice, in the claim on page 1 and in the description on page 2, each time with f = 1200, F = 11, Bf = 240.2 and 2ω = 5°. Page 3 carries the Seidel coefficients at f = 1, Figure 1 (lens section) and Figure 2 (spherical aberration with the sine condition, astigmatism and distortion).

Product sources are Nikon's dimensioned section of the ED head and its depth-of-field table, MIR's transcription of Nikon's 1974–76 sales-manual specifications, MIR's pages for the Nikkor-P 1200mm f/11 and the 1200mm f/11 IF-ED, and Nikon's histories of the focusing-unit lenses and the ED series. [Dimensioned section](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/preAI70/1200mmf11EDpreAIopt.gif) · [Depth-of-field table](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/preAI70/1200mmf11EDpreAIDOF.gif) · [MIR, ED head](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/preAI70/1200mmf11ed.htm) · [MIR, Nikkor-P](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/6070nikkor/telephoto/1200mm.htm) · [MIR, IF-ED](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/telephotos/1200mm.htm) · [Nikon Tale 50](https://imaging.nikon.com/imaging/information/story/0050/) · [Nikon Tale 66](https://imaging.nikon.com/imaging/information/story/0066/)

## Transcription Check

Both copies of the table were reread against the page images. They agree on all nine radii with their signs, the eight glass and air thicknesses and the five d-line indices. Of the Abbe numbers, the claim's copy prints the last as 392, without its decimal point; the description's copy prints 39.2, which the model uses. The indices are helium d-line values. The dimensions are in millimetres. The 659 mm air space is d6, between surfaces 6 and 7. Surface 8 is the only cemented interface. Figure 1 calls the rear doublet L4, whose front and rear pieces are named L4a and L4b here. The figure legend calls L2 a cemented negative lens, but the claim and both tables give it as a separate negative lens followed by 2 mm of air. The example is spherical throughout and gives no filter plate, stop position or finite-focus spacings.

The spherical-aberration coefficients in column I of the Seidel table agree surface by surface to within 0.06% (surface 8's two-digit value aside) when expressed at the patent's unit focal length. At f/11 the marginal d-line ray crosses the axis 0.102 mm ahead of the paraxial focus, consistent with the scale of Figure 2A.

## First-Order Check

| Quantity at infinity                |                         Patent |                                                       Model |
| ----------------------------------- | -----------------------------: | ----------------------------------------------------------: |
| Effective focal length              |                        1200 mm |                                                  1199.70 mm |
| Maximum aperture                    |                           f/11 |                                                    f/11.000 |
| First to last glass vertex          |      709.0 mm, sum of spacings |                                                    709.0 mm |
| Last glass vertex to film           |                       240.2 mm |                                                    240.2 mm |
| Last glass vertex to paraxial focus |     240.2 mm stated back focus |                                                   240.06 mm |
| First glass vertex to film          | 949.2 mm, including back focus |                                                    949.2 mm |
| Full field                          |                5° design field | 4.81° rim-limited field, including the 2.07° frame diagonal |

The computed focal length is 0.025% below 1200 mm. The image plane stays at the printed 240.2 mm, 0.140 mm behind the paraxial focus. Varying a single radius by half its last printed decimal place (0.05 mm) can shift the back focus by as much as 0.31 mm, so the difference is within the printed precision.

## Values Not Printed in the Patent

- **Clear radii.** Nikon's production drawing, scaled by its 709.0 mm vertex span (580 px), gives 56.8 mm from axis to rim on surfaces 1–6 and about 24.4 mm on surfaces 7–9. Figure 1 in the patent, scaled by the front-group vertex span because the long air space is drawn broken, suggests about 56.0 and 18.7 mm. The production drawing shows the larger rear opening. [Dimensioned section](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/preAI70/1200mmf11EDpreAIopt.gif)
- **Diaphragm.** The head contains a manual diaphragm because an iris in the focusing unit vignetted the corners. The estimated position divides the 659 mm air space equally. At this position a 31.93 mm paraxial stop radius gives an entrance-pupil diameter of 109.06 mm at f/11. Nikon's account establishes why the iris belongs in the head, but gives no distance from a glass vertex. The off-axis Seidel coefficients use a chief-ray convention that does not independently establish that distance. [Nikon Tale 50](https://imaging.nikon.com/imaging/information/story/0050/)
- **Glass names.** Hoya LAF2 agrees with the printed values for L2. Hikari E-BAF8 matches the L3 index and differs by +0.04 in νd. Ohara S-BSL7 at L4a differs by +0.00001 in nd and −0.06 in νd. L1 (1.50032 / 81.9) and L4b (1.66854 / 39.2) have no matching catalog glass. L1's low dispersion and Nikon's statement that the lens uses ED glass support the inferred ED position. The patent gives no partial-dispersion value for it.
- **Field.** The model's field is limited by the rims, at a 2.41° half-field. The 21.63 mm corner of the 35 mm frame lies at 1.03°.
- **Focus.** `focus.closeFocusM` is 10¹⁵ m, which stands for infinity. The 50 m catalog minimum is Nikon's. With the whole head moving, 50 m measured from the film plane gives a calculated 1:38.8, the ratio in Nikon's depth-of-field table, and 50 m from the front vertex would give 1:39.6. The calculated extension at 50 m is 30.9 mm.

With these openings the axial f/11 beam clears all nine refracting surfaces. The frame corner is reachable, with about 91% geometric transmission near 1°. At the patent's 2.5° edge the chief ray reaches 25.36 mm at surface 9 and falls outside its 24.4 mm radius.

## Product Identification

The 1975 ED head and the patent share the five-element, four-group construction, the rear cemented pair, the 709.0 mm vertex span and the 240.2 mm back focus. Nikon's drawing gives 2487.7 mm from the front focal point to the first vertex, 1036.9 mm between principal planes and 3436.9 mm between focal points. The prescription gives 2487.03, 1036.68 and 3436.09 mm respectively. This agreement strongly identifies the design. The drawing shows a biconvex, a biconcave and a biconvex element in front and a cemented pair at the rear, as in Figure 1. [Nikon drawing](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/preAI70/1200mmf11EDpreAIopt.gif) · [US 3,774,991](https://patents.google.com/patent/US3774991A/en)

The other 1200mm f/11 designs differ. The 1964 Nikkor-P has five elements in five groups and the later IF-ED nine in eight. Of the two 1200 mm examples in Shimizu's US 3,774,991, Example IV has a shorter 623 mm vertex span and Example V has seven elements. Nikon lists the ED head in its 1975 four-lens ED telephoto series and credits Shimizu with the optics of the 1964 focusing-unit lenses. [MIR, Nikkor-P](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/6070nikkor/telephoto/1200mm.htm) · [MIR, IF-ED](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/telephotos/1200mm.htm) · [Nikon Tale 50](https://imaging.nikon.com/imaging/information/story/0050/) · [Nikon Tale 66](https://imaging.nikon.com/imaging/information/story/0066/)

Nikon's specifications, as transcribed by MIR, give 1200 mm, f/11, five elements in four groups, a manual diaphragm built into the head from f/11 to f/64, NIC multicoating and an 88 mm thread into any Nikon focusing unit, whose own diaphragm stays at f/4.5. The focusing unit's scale for this head runs from 50 m to infinity. Nikon's depth-of-field table lists the full stops f/11, 16, 22, 32, 45 and 64, starts at 50 m and names the Nikon F and F2 as the cameras. The drawing places the film 46.5 mm behind the focusing unit's mount, the Nikon F flange distance. Nikon's history also mentions use of the focusing-unit lenses on Bronica medium-format cameras through a different focusing unit; `catalog.lensMounts` lists Nikon F only. [MIR, ED head](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/preAI70/1200mmf11ed.htm) · [Depth-of-field table](https://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/preAI70/1200mmf11EDpreAIDOF.gif)

MIR's transcription gives the ED head a 4°10′ angle of view, about twice the 2.07° that the 35 mm frame diagonal subtends at 1200 mm. Nikon's sales specification for product 1296 gives 2° coverage, as MIR's Nikkor-P page does. [Nikon sales manual, Section III, sheets 9 and 14](https://www.pacificrimcamera.com/rl/01037/01037.pdf) The model's 4.81° rim-limited field covers both figures. The patent describes the lens at infinity only.

## Corrections, 2026-11-25

- **Field.** The prescription as first received limited the field to 1° in full and traced rays only to 0.5° from the axis, short of the 1.03° frame corner. Those limits are gone: the rims now set the field at a 2.41° half-field, which covers the frame corner. The outer part of the patent's 2.5° half-field remains outside the rear rims.
- **Rims.** The estimated rims of 61, 60 and 59 mm in front and 22 mm at the rear were replaced by 56.8 mm and 24.4 mm measured from Nikon's dimensioned section of the production lens. The rear rims depart from the patent figure's 18.7 mm because the production drawing shows the larger opening; with the figure's 56.0 and 18.7 mm the illumination near 1° would fall from about 91% to 80%. Both sets pass the full f/11 beam and the frame corner. The rim source is recorded as measured from a figure instead of estimated.
- **Aperture and stop.** The model keeps f/11 and the estimated mid-gap iris, with its 31.93 mm radius calculated from f/11. The full-stop scale was extended from f/11–f/32 to Nikon's f/11–f/64.
- **Focus.** The patent prints the infinity state only, so the model has no finite focus positions. The image plane stays at the printed 240.2 mm. Nikon's 50 m minimum focus, measured from the film plane, was added to the catalog.
- **Source values.** No printed value was changed and the table is unscaled. L4b's Abbe number is taken as 39.2 from the description's copy rather than the claim's 392.
- **Identity and metadata.** The lens is now identified by Nikon's name for the 1975 ED head and is listed publicly. The catalog records Nikon F, the 35 mm full frame, 1200 mm, f/11, 50 m, five elements in four groups and a 1199.70 mm design focal length. No blade count is recorded because no source gives one. The elements carry the patent's names L1–L4b, their shapes, roles and focal lengths, and the cemented pair is labelled C1 so that it does not read as a gap. The front and rear groups are bracketed. L1 carries an inferred ED designation.
- **Glass labels.** Three catalog equivalents supply dispersion curves while the printed nd and νd stay. The differences below are catalog minus patent. L1 and L4b keep unmatched labels with their printed values.

| Element | Label           |        Δnd |   Δνd |
| ------- | --------------- | ---------: | ----: |
| L2      | LAF2 (HOYA)     | +0.0000014 |  0.00 |
| L3      | E-BAF8 (HIKARI) |  0.0000000 | +0.04 |
| L4a     | S-BSL7 (OHARA)  | +0.0000099 | −0.06 |

- **Public text.** The subtitle, specifications, header, element roles and focus description are in plain form.

At infinity the finished model gives 1199.70 mm EFL, f/11.000, a 240.06 mm paraxial back focus with the image plane at the printed 240.2 mm, a 949.2 mm first-vertex-to-film length, a 31.93 mm iris radius and a 2.41° rim-limited half-field.

## Remaining Questions

- The axial position and blade count of the production iris are undocumented in the cited Nikon material.
- The glass suppliers and the dispersion curves of L1 and L4b are unknown.
- The production illumination at the edge of the patent's 5° field is unknown; no measured illumination curve is published.
- MIR's 4°10′ angle of view for the ED head disagrees with the 2.07° frame diagonal at 1200 mm and with Nikon's later 2° specification; whether the 1974–76 manuals print 4°10′ or the figure entered in transcription is unknown.
- The Nikkor-P focused to 43 m on the earlier focusing unit and 50 m on the AU-1. Whether the ED head reached 43 m on the earlier unit is undocumented.
- Whether the examined publication JP S54-16856 B prints the same table is unknown.
