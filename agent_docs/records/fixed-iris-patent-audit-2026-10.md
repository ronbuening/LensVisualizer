# Fixed-iris zooms against their patents (2026-10)

Every zoom file that declared `zoomApertureModel: "fixed-iris"` on 2026-10-07 (88 files) was read against its patent
PDF in `patents/`: one reader per lens, and a second reader for every lens with a finding (82). The readers checked
the patent number and example, station focal lengths and f-numbers, variable gaps, stop position, any printed stop
diameter, and what the patent says about the stop while zooming. Open rows from this audit are in
[sd-audit-queue.md](../sd-audit-queue.md) Sections C, G, H and I; each edited lens has a dated entry in its
`*.audit.md`.

## How the verdict was reached

The patent seldom says whether the stop diameter changes with zoom (3 of 85 do). Otherwise the test is numerical: the
iris radius each printed station f-number needs is traced through the file's prescription, and one radius "fits" when
a single value lies inside every station's print-rounding interval. "Spread" is (max − min) / mean of those radii by
real marginal ray. Most patents' f-numbers fit one radius only by real ray, not paraxially, which is also how the
engine sizes the iris.

| Verdict | Lenses |
|---|---:|
| Printed f-numbers fit one radius | 73 |
| Patent states a constant stop | 3 |
| Printed f-numbers need different radii | 7 |
| Patent describes a fixed and a zoom-coupled stop | 1 |
| Patent prints no aperture data for the example | 1 |
| No local patent | 3 |

Six files lost the declaration, nine kept it with their station f-numbers corrected to the patent's, and four
prescription errors found on the way were corrected (82 files declare a fixed iris afterwards).

## Every lens

| File | Patent | Verdict | Spread | Outcome |
|---|---|---|---:|---|
| `canon/CanonEF200400mmf4LISUSMExtender14x` | US 2013/0308041 A1 | f-numbers fit one radius | 0.01 % | kept |
| `canon/CanonEF200400mmf4LISUSMExtender14xExtenderIn` | US 2013/0308041 A1 | f-numbers fit one radius | 0.01 % | kept |
| `canon/CanonEF70200mmf28LISUSM` | JP 2002-162564 A | f-numbers fit one radius | 0.07 % | kept |
| `canon/CanonEF70200mmf4LISUSM` | JP 2008-070450 A | f-numbers fit one radius | 0.06 % | kept |
| `canon/CanonEF70200mmf4LUSM` | JP 2000-284174 A | f-numbers fit one radius | 0.82 % | kept |
| `canon/CanonEF70300mmf456ISUSM` | JP 2007-003600 A | f-numbers fit one radius | 2.51 % | kept |
| `canon/CanonEFM1855mmf3556ISSTM` | US 2013/0335830 A1 | f-numbers fit one radius | 0.73 % | kept |
| `canon/CanonEFS18135mmf3556ISSTM` | US 2013/0088622 A1 | f-numbers fit one radius | 0.08 % | kept |
| `canon/CanonFD150600mmf56L` | US 4,110,006 | f-numbers fit one radius | 0.13 % | kept |
| `carl-zeiss-jena/ZeissVarioPrakticar3570mmf2735` | DE 3602859 A1 | f-numbers fit one radius | 3.30 % | kept |
| `fujifilm/FujifilmFujinonXf100400mmf4556RLMOISWR` | US 2017/0090170 A1 | f-numbers fit one radius | 0.03 % | kept |
| `fujifilm/FujifilmFujinonXf55200mmf3548RLMOIS` | DE 11 2013 006 887 B4 | f-numbers fit one radius | 0.10 % | kept |
| `fujifilm/FujifilmGF100200mmf56` | US 2019/0361195 A1 | f-numbers fit one radius | 0.19 % | kept |
| `fujifilm/FujifilmX1071284mmf228` | US 2014/0133036 A1 | no local patent | — | not audited (Section C) |
| `fujifilm/FujifilmXF50140mmf28R` | US 2017/0090163 A1 | f-numbers fit one radius | 0.29 % | kept |
| `konica/KonicaUCZoomHexanonAR45100mmf35` | JP S51-34741 A | f-numbers fit one radius | 0.18 % | kept |
| `konica/KonicaUCZoomHexanonAR80200mmf4` | JP S51-37247 A | f-numbers fit one radius | 0.01 % | kept |
| `konica/KonicaVarifocalHexanonAR35100mmf28` | US 3,584,935 | f-numbers fit one radius | 0.33 % | kept |
| `konica/KonicaZoomHexanonAR65135mmf4` | JP 1983-149014 A | not determinable | — | kept; the patent prints no aperture data for this example |
| `minolta/Minolta2885mmf3545MDZoom` | JP H01-193709 A | f-numbers fit one radius | 1.36 % | kept |
| `minolta/Minolta35135mmf3545MDZoom` | US 5,249,079 A | f-numbers fit one radius | 0.04 % | kept |
| `minolta/Minolta50135mmf35MDZoom` | US 4,192,577 | f-numbers fit one radius | 0.31 % | kept |
| `minolta/Minolta75150mmf40MDZoom` | JP S56-150717 A | f-numbers fit one radius | 0.21 % | kept |
| `minolta/MinoltaAF70200mmf28APO` | JP 2004-109559 A | f-numbers fit one radius | 0.04 % | kept |
| `minolta/MinoltaAF80200mmf28APO` | JP 1989-039542 A | f-numbers fit one radius | 0.21 % | kept |
| `nikon/Nikon1NikkorVR1030mmf3556PDZoom` | US 2018/0196240 A1 | f-numbers fit one radius | 0.54 % | kept |
| `nikon/NikonAFNikkor24120mmf3556D` | US 5,734,508 A | f-numbers fit one radius | 0.48 % | kept; asphere A10 sign and both conic constants corrected |
| `nikon/NikonAFP70300mmf4556E` | US 2019/0353880 A1 | f-numbers fit one radius | 0.12 % | kept; station f-numbers set to Table 1 |
| `nikon/NikonAFPDX1020mmf4556G` | WO 2021/039813 A1 | f-numbers fit one radius | 0.00 % | kept; station f-numbers set to the patent |
| `nikon/NikonAFS70200mmf28GVRII` | US 8,416,506 B2 | states a constant stop | 0.10 % | kept |
| `nikon/NikonAFSDX55200mmf456G` | WO 2015/141574 A1 | no local patent | — | not audited (Section C) |
| `nikon/NikonAFSDXVRZoomNikkor18200mmf3556GIFED` | US 2006/0072213 A1 | f-numbers fit one radius | 0.32 % | kept |
| `nikon/NikonAFSDXZoomNikkor1855mmf3556GEDII` | US 2006/0007559 A1 | f-numbers need different radii | 1.43 % | fixed iris removed |
| `nikon/NikonAFSNikkor180400mmf4ETC14` | WO 2019/131993 A1 | f-numbers fit one radius | 0.02 % | kept |
| `nikon/NikonAFSNikkor180400mmf4ETC14TCIn` | WO 2019/131993 A1 | f-numbers fit one radius | 0.11 % | kept |
| `nikon/NikonAFSNikkor70200mmf4GEDVR` | US 2017/0315337 A1 | f-numbers fit one radius | 0.08 % | kept |
| `nikon/NikonAFSVRZoomNikkor200400mmf4GIFED` | US 2005/0157403 A1 | f-numbers fit one radius | 0.05 % | kept |
| `nikon/NikonAFSVRZoomNikkor70200mmf28GIFED` | US 2003/0133200 A1 | f-numbers fit one radius | 0.03 % | kept |
| `nikon/NikonAFSZoomNikkor80200mmf28DIFED` | JP 2000-19398 A | f-numbers fit one radius | 0.09 % | kept |
| `nikon/NikonAFZoomNikkor80200mmf28ED` | JP S62-108218 A | f-numbers fit one radius | 0.22 % | kept; surface 17 thickness corrected, 1.8 to 1.7, per the amendment |
| `nikon/NikonAIAFZoomNikkor80200mmf28DED` | US 5,579,171 A | f-numbers fit one radius | 0.15 % | kept |
| `nikon/NikonAINikkor80200mmf4` | US 4,452,513 | f-numbers fit one radius | 0.07 % | kept |
| `nikon/NikonAINikkor80200mmf45` | US 4,223,981 | f-numbers fit one radius | 0.29 % | kept |
| `nikon/NikonAISZoomNikkor100300mmf56` | US 4,641,928 A | f-numbers fit one radius | 0.06 % | kept |
| `nikon/NikonAISZoomNikkor80200mmf28ED` | JP S58-54312 A | f-numbers fit one radius | 0.16 % | kept |
| `nikon/NikonAISZoomNikkorED200400mmf4` | US 4,452,513 A | f-numbers fit one radius | 0.08 % | kept |
| `nikon/NikonAIZoomNikko50135mmf35S` | US 4,497,547 | f-numbers fit one radius | 0.21 % | kept |
| `nikon/NikonAIZoomNikkor3601200mmf11ED` | US 3,743,384 | f-numbers fit one radius | 0.06 % | kept |
| `nikon/NikonAiZoomNikkorED50300mmf45` | US 4,189,213 A | f-numbers fit one radius | 0.25 % | kept |
| `nikon/NikonAutoZoomNikkor80200mmf45` | US 3,615,125 | f-numbers fit one radius | 0.18 % | kept |
| `nikon/NikonNikkorAFS120300mmf28` | JP 2020-177057 A | f-numbers fit one radius | 0.03 % | kept |
| `nikon/NikonNikkorAFS200500mmf56` | JP 2014-209144 A | states a constant stop | 0.11 % | kept |
| `nikon/NikonNikkorAFS70200mmf28E` | WO 2019/097669 A1 | f-numbers fit one radius | 1.60 % | kept; station f-numbers set to FIG. 2 |
| `nikon/NikonNikkorZ70200mmf28VRSII` | WO 2026/172598 A1 | f-numbers fit one radius | 0.01 % | kept |
| `nikon/NikonZoomNikkor2845mmf45` | US 3,771,853 A | f-numbers need different radii | 13.69 % | fixed iris removed; f-number 4.5 at every station |
| `nikon/NikonZoomNikkorAuto50300mmf45` | US 3,481,666 | f-numbers fit one radius | 0.43 % | kept |
| `olympus/OlympusZuikoAutoZoom65200mmf4` | US 4,568,150 | no local patent | — | not audited (Section C) |
| `olympus/OlympusZuikoAutoZoom85250mmf5` | US 4,025,167 | f-numbers fit one radius | 0.05 % | kept |
| `panasonic/PanasonicLumixSPro70200mmf28OIS` | US 2021/0132345 A1 | f-numbers fit one radius | 0.10 % | kept |
| `panasonic/PanasonicLumixSPro70200mmf4OIS` | JP 2020-086133 A | f-numbers fit one radius | 0.08 % | kept |
| `pentax/HDPentaxDA1685mmF3556EDDCWR` | JP 2016-114800 A | f-numbers fit one radius | 1.73 % | kept; station f-numbers re-derived from one real-ray radius inside the print rounding |
| `pentax/HDPentaxDA1850mmF456DCWRRE` | JP 2016-6455 A | f-numbers fit one radius | 0.08 % | kept; station f-numbers set to Table 6 |
| `pentax/HDPentaxDFA150450mmF4556EDDCAW` | US 2016/0327774 A1 | f-numbers fit one radius | 0.44 % | kept |
| `pentax/Pentax06TelephotoZoom1545mmF28` | US 9,784,950 B2 | f-numbers fit one radius | 0.38 % | kept |
| `pentax/PentaxA3570mmf4` | US 4,812,022 | f-numbers need different radii | 28.24 % | fixed iris removed; f-number 4.1 at both stations; six rear-group rims raised to the stated ray |
| `pentax/PentaxDFA28105mmF3556EDDCWR` | US 2017/0068075 A1 | f-numbers fit one radius | 1.53 % | kept |
| `pentax/PentaxDFA70200mmF28EDDCWR` | US 2016/0103303 A1 | f-numbers fit one radius | 0.05 % | kept |
| `schneider-kreuznach/SchneiderTeleVariogon4080240` | US 3,336,094 | f-numbers fit one radius | 0.21 % | kept |
| `schneider-kreuznach/SchneiderTVVariogon216620600` | US 3,912,373 | describes a fixed and a zoom-coupled stop | 29.52 % | kept |
| `schneider-kreuznach/SchneiderVariogon18840` | US 3,442,573 | f-numbers fit one radius | 1.59 % | kept |
| `schneider-kreuznach/SchneiderVariogon281040` | US 3,057,257 | f-numbers fit one radius | 0.17 % | kept |
| `schneider-kreuznach/SchneiderVariogon2845100` | US 3,482,900 | f-numbers fit one radius | 1.38 % | kept |
| `sony/SonyFE50150mmF2GM` | WO 2025/220324 A1 | f-numbers need different radii | 0.58 % | fixed iris removed |
| `sony/SonyFE70200mmf4G` | US 2015/0226945 A1 | f-numbers need different radii | 1.45 % | fixed iris removed; station f-numbers from Table 3 |
| `sony/ZeissVarioSonnarT143715mmf2848SonyDCSR1` | US 2008/0218875 A1 | f-numbers need different radii | 1.15 % | fixed iris removed; station f-numbers from Table 2 |
| `tamron/TamronA00170200mmf28` | US 2008/0212200 A1 | f-numbers fit one radius | 0.06 % | kept |
| `tamron/TamronA00570300mmf456VC` | US 8,228,605 B2 | f-numbers fit one radius | 0.38 % | kept |
| `tamron/TamronA01028300mmf3563` | JP 2013-254160 A | f-numbers fit one radius | 42.82 % | kept; middle f-number set to what the iris gives (the figure label is a misprint) |
| `tamron/TamronA0328200mmf3856` | US 6,437,923 B1 | f-numbers fit one radius (once the aspheres are corrected) | 0.19 % | kept; five asphere signs corrected as one misprinted block |
| `tamron/TamronA06128300mmf3563` | US 2003/0156333 A1 | f-numbers fit one radius | 0.12 % | kept; station f-numbers set to the patent |
| `tamron/TamronA08200500mmf563` | JP 2003-344768 A | f-numbers fit one radius | 0.01 % | kept; station f-numbers set to Figs. 2-4 |
| `tamron/TamronB02818400mmf3563` | JP 2017-116646 A | f-numbers fit one radius | 0.79 % | kept |
| `tamron/TamronC00114150mmf3558` | US 2014/0347522 A1 | f-numbers fit one radius | 0.12 % | kept; station f-numbers set to Table 11 |
| `tamron/TamronSPA00970200mmf28VC` | US 8,867,144 B2 | states a constant stop | 0.27 % | kept |
| `tamron/TamronSPA011150600mmf563VC` | US 10,545,321 B2 | f-numbers fit one radius | 0.01 % | kept |
| `vivitar/VivitarSeries13585mmf28` | US 3,975,089 | f-numbers fit one radius | 0.03 % | kept |
| `vivitar/VivitarSeries170210mmf284` | US 4,758,073 | f-numbers need different radii | 0.86 % | kept; one radius explains the f-numbers to within 1 %, just outside print rounding |
| `vivitar/VivitarSeries170210mmf35` | JP S51-63635 A | f-numbers fit one radius | 0.11 % | kept; surface 19 radius corrected, 38.55 to 38.35 |

## Findings still open

The queued rows were worked on the same day; what remains:

- **Rims below the patent's stated axial beam.** Twelve of the fourteen lenses, and the Pentax-A 35-70mm, were
  cleared under the least-change rule (2026-10-08): each clipping surface raised to the stated ray's height, square
  rims kept square where the figure draws them so, and `gapSagFrac` set per lens on the seven where the cross-gap
  limit refused the raise (0.91 to 1.00). Each now traces its stated f-number on the iris at every station. The
  other two are not rim questions: the printed tables of the Canon EF 70-200mm f/4L and the Vivitar Series 1
  70-210mm f/2.8-4 cannot pass their own tele f-number (Section G). The earlier reading of the Nikon AI 80-200mm
  f/4's FIG. 3 that put its second element at 18.5 mm could not be reproduced; the figure draws it at about 26 mm.
  Square-drawn rims the rule did not reach are listed in Section I.
- **Tables that contradict their own patent** (Section G, each an `unresolved` `sourceErrata` entry): Vivitar Series 1
  35-85mm, Konica UC 80-200mm and Schneider TV-Variogon focal lengths. Every row of each was re-read and matches the
  file. The Tamron A03 aspheres, which gave about +12 / +51 / +85 mm of spherical aberration as printed, were
  corrected as one misprinted block of five dropped minus signs on a maintainer ruling (2026-10-08).
- **Stop positions with no source**: Nikon Zoom-Nikkor Auto 50-300mm and Olympus Zuiko 85-250mm keep modeled stop
  positions, described as such; their patents place no stop for the transcribed examples.
- **Stale stored values with no effect on the trace**: Vivitar Series 1 70-210mm f/3.5 `STO` sd (14.457801, the
  paraxial 1:3.65 radius of the uncorrected table; 14.317096 for the corrected one).
- **Prose**: about 120 low-severity wording and precision findings in the files left unedited, mostly notes that
  quote paraxial stop radii or f-numbers the real-ray trace does not reproduce.
- **No local patent** (Section C): Fujifilm X10, Nikon AF-S DX 55-200mm VR II, Olympus Zuiko 65-200mm f/4.
