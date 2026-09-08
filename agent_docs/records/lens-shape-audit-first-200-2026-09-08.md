# First 200 hosted lens diagrams: patent and live-view audit

## Scope and ordering

- Branch: `ronbuening/LensShapeAudit260908`; baseline `b1011bf2ee51767865c49b6ef98cc64383437590`.
- User confirmed oldest means first added to the site. Snapshot: 681 visible diagrams on 2026-09-08.
- Order: original Git-derived `publishedAt` ascending, then lens key ascending for simultaneous additions. Dates are UTC; this is the site publication-history convention, not a claim about exact deployment times.
- Queue is frozen at the baseline; later changes must not reorder it. Hidden reference fixtures excluded.
- Primary evidence: ignored local `patents/` PDFs; missing publications may be retrieved from Google Patents, Espacenet, or national authorities as explicitly authorized. Never stage patents or scratch renders.
- Check the exact example, all prescription/asphere/glass rows, optical rims and dimensions, stop, focus/zoom endpoints and intermediate motion, slider labels, surfaced metadata, inspectors and analysis notes. Distinguish patent values, derived quantities, catalog proxies, estimates, and unknowns.
- Inspect production in a browser before changes and the local live app after changes. Commit each lens separately, including its audit log and this record. No-change audits still receive a record commit.
- Required gates per lens: surface and image-circle audits; typecheck, format check, lint, tests; build for lens data/content changes; glass reports when glass changes.

## Progress

2 / 200 completed. Next: lens 3, `nokton-50f1`.

## Frozen queue

| # | Lens key | First added (UTC) | Data file | Status |
|---|---|---|---|---|
| 1 | apo-lanthar-50f2 | 2026-03-18T18:51:44.000Z | `src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.ts` | Complete — changed |
| 2 | fujifilm-xf50-f1 | 2026-03-18T18:51:44.000Z | `src/lens-data/fujifilm/FujifilmXF50f1.data.ts` | Complete — changed |
| 3 | nokton-50f1 | 2026-03-18T18:51:44.000Z | `src/lens-data/voigtlander/VoigtlanderNokton50f1.data.ts` | Pending |
| 4 | nikkor-z-50f18s | 2026-03-18T20:29:17.000Z | `src/lens-data/nikon/NikonNikkorZ50f18S.data.ts` | Pending |
| 5 | nikkor-105-f14e-ed | 2026-03-19T03:19:39.000Z | `src/lens-data/nikon/NikonNikkor105f14E.data.ts` | Pending |
| 6 | heliar-symmetric-1902 | 2026-03-19T15:57:01.000Z | `src/lens-data/voigtlander/VoigtlanderHeliar.data.ts` | Pending |
| 7 | zeiss-tessar-144f55 | 2026-03-19T17:26:00.000Z | `src/lens-data/carl-zeiss-jena/ZeissTessar144f55.data.ts` | Pending |
| 8 | bertele-sonnar-50f2-scaled | 2026-03-19T20:18:30.000Z | `src/lens-data/carl-zeiss-jena/ZeissJenaSonnar50f2.data.ts` | Pending |
| 9 | sonnar-50f15 | 2026-03-19T21:05:31.000Z | `src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.ts` | Pending |
| 10 | nikkor-24f28 | 2026-03-20T00:08:09.000Z | `src/lens-data/nikon/NikonNikkorAuto24f28.data.ts` | Pending |
| 11 | nikkor-z50f12 | 2026-03-20T00:15:38.000Z | `src/lens-data/nikon/NikonNikkorZ50f12.data.ts` | Pending |
| 12 | ricoh-gr1-28f28 | 2026-03-20T17:28:09.000Z | `src/lens-data/ricoh/RicohGR28f28.data.ts` | Pending |
| 13 | ricoh-gr3-28f28 | 2026-03-20T18:45:40.000Z | `src/lens-data/ricoh/RicohGR328f28.data.ts` | Pending |
| 14 | ricoh-gr4-28f28 | 2026-03-20T18:58:35.000Z | `src/lens-data/ricoh/RicohGR428f28.data.ts` | Pending |
| 15 | nikkor-z-70-200f28 | 2026-03-21T01:23:07.000Z | `src/lens-data/nikon/NikonNikkorZ70200f28.data.ts` | Pending |
| 16 | nikkor-z-24-70-f28 | 2026-03-23T02:11:54.000Z | `src/lens-data/nikon/NikonZ2470f28.data.ts` | Pending |
| 17 | nikon-z-mc-105f28 | 2026-03-23T02:29:12.000Z | `src/lens-data/nikon/NikonZ105f28.data.ts` | Pending |
| 18 | nikon-z-135f18-plena | 2026-03-23T03:27:14.000Z | `src/lens-data/nikon/NikonZ135f18.data.ts` | Pending |
| 19 | fujifilm-xf80-f28-macro | 2026-03-23T04:13:56.000Z | `src/lens-data/fujifilm/FujifilmXF80f28.data.ts` | Pending |
| 20 | nikon-z-26f28 | 2026-03-23T04:13:56.000Z | `src/lens-data/nikon/NikonZ26f28.data.ts` | Pending |
| 21 | nikon-micro-60f28g | 2026-03-23T16:37:23.000Z | `src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts` | Pending |
| 22 | nikkor-85f14g | 2026-03-24T11:40:43.000Z | `src/lens-data/nikon/NikonNikkor85f14G.data.ts` | Pending |
| 23 | nikkor-af-s-58f14g | 2026-03-24T14:53:42.000Z | `src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts` | Pending |
| 24 | nikkor-85f14d | 2026-03-25T00:15:56.000Z | `src/lens-data/nikon/Nikon85f14D.data.ts` | Pending |
| 25 | nikkor-85f14-ais | 2026-03-25T00:22:32.000Z | `src/lens-data/nikon/Nikon85f14AIS.data.ts` | Pending |
| 26 | nikkor-z-85f18s | 2026-03-25T00:26:08.000Z | `src/lens-data/nikon/NikonZ85f18S.data.ts` | Pending |
| 27 | nikon-afs-28f14e | 2026-03-25T22:50:59.000Z | `src/lens-data/nikon/NikonAFS28f14E.data.ts` | Pending |
| 28 | nikkor-z-28f28 | 2026-03-25T23:53:37.000Z | `src/lens-data/nikon/NikonZ28f28.data.ts` | Pending |
| 29 | nikkor-28f14d | 2026-03-26T00:25:20.000Z | `src/lens-data/nikon/NikonAF28f14D.data.ts` | Pending |
| 30 | nikon-z-58f095-noct | 2026-03-26T03:35:48.000Z | `src/lens-data/nikon/NikonZ58f095SNoct.data.ts` | Pending |
| 31 | ultron-50f2 | 2026-03-26T03:46:55.000Z | `src/lens-data/voigtlander/VoigtlanderUltron50f2.data.ts` | Pending |
| 32 | ultron-28f2-asph | 2026-03-26T11:21:39.000Z | `src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts` | Pending |
| 33 | canon-rf100f28-macro | 2026-03-26T20:02:38.000Z | `src/lens-data/canon/CanonRF100f28.data.ts` | Pending |
| 34 | ricoh-gr3x-26f28 | 2026-03-26T20:19:44.000Z | `src/lens-data/ricoh/RicohGR3x.data.ts` | Pending |
| 35 | canon-rf-135f18 | 2026-03-26T21:10:25.000Z | `src/lens-data/canon/CanonRF135f18.data.ts` | Pending |
| 36 | nikkor-z-100-400-f4556 | 2026-03-27T00:35:07.000Z | `src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts` | Pending |
| 37 | nikon-afs-105f28-vr-micro | 2026-03-27T19:01:36.000Z | `src/lens-data/nikon/NikonAFS105f28G.data.ts` | Pending |
| 38 | canon-rf-24-70-f28 | 2026-03-27T19:19:01.000Z | `src/lens-data/canon/CanonRF2470f28.data.ts` | Pending |
| 39 | canon-rf-70-200-f28 | 2026-03-27T19:19:01.000Z | `src/lens-data/canon/CanonRF70200f28.data.ts` | Pending |
| 40 | canon-rf-15-35-f28 | 2026-03-30T13:48:11.000Z | `src/lens-data/canon/CanonRF1535f28.data.ts` | Pending |
| 41 | nikon-z-14-24f28-s | 2026-03-30T13:48:11.000Z | `src/lens-data/nikon/NikonZ1424f28S.data.ts` | Pending |
| 42 | nikkor-z-35f18s | 2026-03-31T14:33:21.000Z | `src/lens-data/nikon/NikonZ35f18S.data.ts` | Pending |
| 43 | nikon-5cm-f11 | 2026-03-31T14:33:21.000Z | `src/lens-data/nikon/NikonN5cmf11.data.ts` | Pending |
| 44 | canon-fdn-50f12 | 2026-04-01T14:02:12.000Z | `src/lens-data/canon/CanonFDn50f12.data.ts` | Pending |
| 45 | canon-fd-35-f2 | 2026-04-07T20:21:30.000Z | `src/lens-data/canon/CanonFD35mmf2.data.ts` | Pending |
| 46 | nikon-ai-nikkor-135f2 | 2026-04-07T20:21:30.000Z | `src/lens-data/nikon/NikonAI135mmf2.data.ts` | Pending |
| 47 | nikon-ai-nikkor-135f28 | 2026-04-07T20:21:30.000Z | `src/lens-data/nikon/NikonAI135mmf28.data.ts` | Pending |
| 48 | vivitar-series1-200f3 | 2026-04-07T20:21:30.000Z | `src/lens-data/vivitar/VivitarSeries1200mmf3.data.ts` | Pending |
| 49 | fujifilm-xf90f2 | 2026-04-08T12:02:16.000Z | `src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts` | Pending |
| 50 | fujinon-xf56f12r | 2026-04-08T12:02:16.000Z | `src/lens-data/fujifilm/FujifilmXF56mmf12.data.ts` | Pending |
| 51 | vivitar-s1-35-85-f28 | 2026-04-08T12:02:16.000Z | `src/lens-data/vivitar/VivitarSeries13585mmf28.data.ts` | Pending |
| 52 | leica-apo-summicron-43f2 | 2026-04-09T11:05:59.000Z | `src/lens-data/leica/LeicaAPO43mmf2.data.ts` | Pending |
| 53 | leica-apo-summicron-m-35f2 | 2026-04-09T11:05:59.000Z | `src/lens-data/leica/LeicaAPO35mmf2.data.ts` | Pending |
| 54 | leica-elcan-50f2 | 2026-04-09T11:05:59.000Z | `src/lens-data/leica/LeicaElcan50mmf2.data.ts` | Pending |
| 55 | leica-summicron-m-50f2-v5 | 2026-04-09T11:05:59.000Z | `src/lens-data/leica/LeicaSummicronV550mmf2.data.ts` | Pending |
| 56 | leica-summilux-28f17 | 2026-04-09T11:05:59.000Z | `src/lens-data/leica/Leica28mmf17.data.ts` | Pending |
| 57 | nikkor-n-28f2 | 2026-04-10T04:37:04.000Z | `src/lens-data/nikon/NikonNikkorN28mmf2.data.ts` | Pending |
| 58 | nikon-28ti-28f28 | 2026-04-10T04:37:04.000Z | `src/lens-data/nikon/Nikon28Ti28mmf28.data.ts` | Pending |
| 59 | voigtlander-nokton-x-50f12 | 2026-04-10T04:37:04.000Z | `src/lens-data/voigtlander/VoigtlanderNoktonX50mmf12.data.ts` | Pending |
| 60 | canon-serenar-28f35 | 2026-04-10T13:33:16.000Z | `src/lens-data/canon/CanonSerenar28mmf35.data.ts` | Pending |
| 61 | canon-serenar-35f32 | 2026-04-10T13:33:16.000Z | `src/lens-data/canon/CanonSerenar35mmf32.data.ts` | Pending |
| 62 | canon-serenar-50f18 | 2026-04-10T13:33:16.000Z | `src/lens-data/canon/CanonSerenar50mmf18.data.ts` | Pending |
| 63 | canon-serenar-85f15 | 2026-04-10T13:33:16.000Z | `src/lens-data/canon/CanonSerenar85mmf15.data.ts` | Pending |
| 64 | nikkor-afs-120-300f28e | 2026-04-13T11:10:23.000Z | `src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts` | Pending |
| 65 | nikkor-afs-14-24f28 | 2026-04-13T11:10:23.000Z | `src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts` | Pending |
| 66 | nikkor-afs-16-35f4-vr | 2026-04-13T11:10:23.000Z | `src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.ts` | Pending |
| 67 | nikkor-afs-200-500f56e | 2026-04-13T11:10:23.000Z | `src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts` | Pending |
| 68 | nikkor-z-14-30f4s | 2026-04-14T14:07:42.000Z | `src/lens-data/nikon/NikonNikkorZ1430mmf4S.data.ts` | Pending |
| 69 | nikkor-z-24-200-f4-63-vr | 2026-04-14T14:07:42.000Z | `src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts` | Pending |
| 70 | nikon-z-24-70f4s | 2026-04-14T14:07:42.000Z | `src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts` | Pending |
| 71 | nikkor-z-24-120f4 | 2026-04-15T21:10:08.000Z | `src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts` | Pending |
| 72 | canon-rf-28-70-f2 | 2026-04-16T00:47:47.000Z | `src/lens-data/canon/CanonRF2870mmf2L.data.ts` | Pending |
| 73 | canon-rf-28-70-f28-is-stm | 2026-04-16T00:47:47.000Z | `src/lens-data/canon/CanonRF2870mmf28.data.ts` | Pending |
| 74 | canon-rf24-240-f4-63 | 2026-04-16T00:47:47.000Z | `src/lens-data/canon/CanonRF24240mmf463.data.ts` | Pending |
| 75 | fuji-xf-16-55-f28 | 2026-04-16T22:09:51.000Z | `src/lens-data/fujifilm/FujifilmXF1655mmf28R.data.ts` | Pending |
| 76 | fuji-xf-50140mm-f28 | 2026-04-16T22:09:51.000Z | `src/lens-data/fujifilm/FujifilmXF50140mmf28R.data.ts` | Pending |
| 77 | fujifilm-xf-16-80-f4 | 2026-04-16T22:09:51.000Z | `src/lens-data/fujifilm/FujifilmXF1680mmf4.data.ts` | Pending |
| 78 | fujifilm-xf-200-f2 | 2026-04-16T22:09:51.000Z | `src/lens-data/fujifilm/FujifilmXF200mmf2R.data.ts` | Pending |
| 79 | canon-rf-24-50-f45-63 | 2026-04-17T12:45:01.000Z | `src/lens-data/canon/CanonRF2450mmf463.data.ts` | Pending |
| 80 | nikkor-z-24-50-f4-63 | 2026-04-17T12:45:01.000Z | `src/lens-data/nikon/NikonNikkorZ2450mmf463.data.ts` | Pending |
| 81 | nikon-l35af-35f28 | 2026-04-17T12:45:01.000Z | `src/lens-data/nikon/NikonL35AF35mmf28.data.ts` | Pending |
| 82 | nikon-nikkor-z-35f12s | 2026-04-17T12:45:01.000Z | `src/lens-data/nikon/NikonNikkorZ35mmf12S.data.ts` | Pending |
| 83 | elmarit-r-28f28 | 2026-04-18T23:59:18.000Z | `src/lens-data/leica/LeicaElmarit28mmf28.data.ts` | Pending |
| 84 | leica-elmarit-90f28 | 2026-04-18T23:59:18.000Z | `src/lens-data/leica/LeicaElmarit90mmf28.data.ts` | Pending |
| 85 | fujifilm-xf60-f24-r-macro | 2026-04-19T04:13:00.000Z | `src/lens-data/fujifilm/FujifilmXF60mmf24R.data.ts` | Pending |
| 86 | fujifilm-xf35-f14-r | 2026-04-19T04:22:20.000Z | `src/lens-data/fujifilm/FujifilmXF35mmf14R.data.ts` | Pending |
| 87 | canon-ef-50f10l | 2026-04-20T12:47:42.000Z | `src/lens-data/canon/CanonEF50mmf1L.data.ts` | Pending |
| 88 | canon-rf-85f2-macro | 2026-04-20T12:47:42.000Z | `src/lens-data/canon/CanonRF85mmf2Macro.data.ts` | Pending |
| 89 | canon-rf-24-105-f4-l | 2026-04-21T11:45:28.000Z | `src/lens-data/canon/CanonRF24105mmf4L.data.ts` | Pending |
| 90 | nikkor-z-40f2 | 2026-04-21T11:45:28.000Z | `src/lens-data/nikon/NikonNikkorZ40mmf2.data.ts` | Pending |
| 91 | ricoh-gr-18p3-f2p8 | 2026-04-21T11:45:28.000Z | `src/lens-data/ricoh/RicohGR218mmf28.data.ts` | Pending |
| 92 | ricoh-gxr-a12-18f25 | 2026-04-21T11:45:28.000Z | `src/lens-data/ricoh/RicohGXRA1218mmf25.data.ts` | Pending |
| 93 | canon-rf-50-f12-l | 2026-04-22T14:48:34.000Z | `src/lens-data/canon/CanonRF50mmf12L.data.ts` | Pending |
| 94 | canon-rf-85f12l | 2026-04-22T14:48:34.000Z | `src/lens-data/canon/CanonRF85mmf12L.data.ts` | Pending |
| 95 | voigtlander-nokton-35-f12 | 2026-04-22T14:48:34.000Z | `src/lens-data/voigtlander/VoigtlanderNokton35mmf12.data.ts` | Pending |
| 96 | canon-rf24-105f28z | 2026-04-23T11:45:28.000Z | `src/lens-data/canon/CanonRF24105mmf28Z.data.ts` | Pending |
| 97 | zeiss-biogon-21-f45 | 2026-04-23T11:45:28.000Z | `src/lens-data/carl-zeiss-oberkochen/ZeissBiogon21mmf45.data.ts` | Pending |
| 98 | zeiss-distagon-35f14 | 2026-04-23T11:45:28.000Z | `src/lens-data/carl-zeiss-oberkochen/ZeissDistagon35mmf14.data.ts` | Pending |
| 99 | nikkor-afs-24-70-f28e-vr | 2026-04-23T15:49:22.000Z | `src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts` | Pending |
| 100 | nikon-afs-70-200-f28e-fl | 2026-04-23T15:49:22.000Z | `src/lens-data/nikon/NikonNikkorAFS70200mmf28E.data.ts` | Pending |
| 101 | nikon-afs-80-400-f45-56g | 2026-04-23T15:49:22.000Z | `src/lens-data/nikon/NikonNikkorAFS80400mmf4556G.data.ts` | Pending |
| 102 | zeiss-hologon-15f8 | 2026-04-24T11:42:52.000Z | `src/lens-data/carl-zeiss-oberkochen/ZeissHologon15mmf8.data.ts` | Pending |
| 103 | olympus-zuiko-auto-s-50f12 | 2026-04-24T11:44:28.000Z | `src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts` | Pending |
| 104 | olympus-zuiko-auto-s-50f14 | 2026-04-24T11:44:28.000Z | `src/lens-data/olympus/OlympusZuikoAutoS50mmf14.data.ts` | Pending |
| 105 | olympus-zuiko-auto-s-55-f12 | 2026-04-24T11:44:28.000Z | `src/lens-data/olympus/OlympusZuikoAutoS55mmf12.data.ts` | Pending |
| 106 | nikon-pc-e-nikkor-24-f35d-ed | 2026-04-25T18:06:05.000Z | `src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts` | Pending |
| 107 | nikon-pc-nikkor-19mm-f4e-ed | 2026-04-25T18:06:05.000Z | `src/lens-data/nikon/NikonNikkorPCE19mmf4E.data.ts` | Pending |
| 108 | nikon-pce-micro-nikkor-45f28d | 2026-04-25T18:06:05.000Z | `src/lens-data/nikon/NikonMicroNikkorPCE45mmf28D.data.ts` | Pending |
| 109 | carl-zeiss-contarex-planar-55f14 | 2026-04-26T18:23:50.000Z | `src/lens-data/carl-zeiss-oberkochen/CarlZeissContarexPlanar55mmf14.data.ts` | Pending |
| 110 | carl-zeiss-jena-pancolar-50f2 | 2026-04-26T18:23:50.000Z | `src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts` | Pending |
| 111 | olympus-zuiko-85mm-f2 | 2026-04-26T18:23:50.000Z | `src/lens-data/olympus/OlympusZuiko85mmf2.data.ts` | Pending |
| 112 | zeiss-planar-t-50f14 | 2026-04-26T18:23:50.000Z | `src/lens-data/carl-zeiss-oberkochen/CarlZeissPlanarT50mmf14.data.ts` | Pending |
| 113 | nikkor-s-auto-50mm-f14 | 2026-04-27T03:27:34.000Z | `src/lens-data/nikon/NikonNikkorSAuto50mmf14.data.ts` | Pending |
| 114 | olympus-zuiko-auto-macro-50f2 | 2026-04-27T03:27:34.000Z | `src/lens-data/olympus/OlympusZuikoAutoMacro50mmf2.data.ts` | Pending |
| 115 | olympus-zuiko-auto-macro-90f2 | 2026-04-27T03:27:34.000Z | `src/lens-data/olympus/OlympusZuikoAutoMacro90mmf2.data.ts` | Pending |
| 116 | olympus-zuiko-auto-w-21mm-f2 | 2026-04-27T03:27:34.000Z | `src/lens-data/olympus/OlympusZuikoAuto21mmf2.data.ts` | Pending |
| 117 | fujifilm-xf18f2r | 2026-04-28T03:41:32.000Z | `src/lens-data/fujifilm/FujifilmXF18mmf2.data.ts` | Pending |
| 118 | fujinon-xf-23mm-f14-r | 2026-04-28T03:41:32.000Z | `src/lens-data/fujifilm/FujifilmXF23mmf14.data.ts` | Pending |
| 119 | zeiss-olympia-sonnar-180f28-contarex | 2026-04-28T03:41:32.000Z | `src/lens-data/carl-zeiss-oberkochen/CarlZeissOlympiaSonnar180mmf28.data.ts` | Pending |
| 120 | zeiss-pro-tessar-35f32 | 2026-04-28T03:41:32.000Z | `src/lens-data/carl-zeiss-oberkochen/CarlZeissProTessar35mmf32.data.ts` | Pending |
| 121 | carl-zeiss-tessar-50f35 | 2026-04-29T03:16:55.000Z | `src/lens-data/carl-zeiss-oberkochen/CarlZeissTessar50mmf35.data.ts` | Pending |
| 122 | czj-tessar-50-f28 | 2026-04-29T03:16:55.000Z | `src/lens-data/carl-zeiss-jena/CarlZeissJenaTessar50mmf28.data.ts` | Pending |
| 123 | sony-fe-90mm-f2p8-macro | 2026-04-29T03:16:55.000Z | `src/lens-data/sony/SonyFE90mmf28.data.ts` | Pending |
| 124 | canon-fd-50f1p2-l | 2026-04-30T11:35:21.000Z | `src/lens-data/canon/CanonFD50mmf12L.data.ts` | Pending |
| 125 | nikon-35ti-35f28 | 2026-04-30T11:35:21.000Z | `src/lens-data/nikon/Nikon35Ti35mmf28.data.ts` | Pending |
| 126 | sigma-dp2x-24mmf28 | 2026-04-30T11:35:21.000Z | `src/lens-data/sigma/SigmaDP2X24mmf28.data.ts` | Pending |
| 127 | sigma-dp3m-50f28 | 2026-04-30T11:35:21.000Z | `src/lens-data/sigma/SigmaDP3M50mmf28.data.ts` | Pending |
| 128 | sigma-35-f14-dgdn-art | 2026-05-01T20:54:13.000Z | `src/lens-data/sigma/SigmaDGDNA35mmf14.data.ts` | Pending |
| 129 | sigma-art-85mm-f14-dgdn | 2026-05-01T20:54:13.000Z | `src/lens-data/sigma/SigmaDGDNA85mmf14.data.ts` | Pending |
| 130 | sony-fe-135-f18-gm | 2026-05-02T18:56:22.000Z | `src/lens-data/sony/SonyFE135mmf18GM.data.ts` | Pending |
| 131 | sony-fe-85-f14-gm-ii | 2026-05-02T18:56:22.000Z | `src/lens-data/sony/SonyFE85mmf14GMII.data.ts` | Pending |
| 132 | sonnar-e-24f18-za | 2026-05-03T23:49:07.000Z | `src/lens-data/sony/SonyFE24mmf18ZA.data.ts` | Pending |
| 133 | sony-sonnar-fe-35-f28-za | 2026-05-03T23:49:07.000Z | `src/lens-data/sony/SonyFE35mmf28ZA.data.ts` | Pending |
| 134 | sony-sonnar-fe-55f18-za | 2026-05-03T23:49:07.000Z | `src/lens-data/sony/SonyFE55mmf18ZA.data.ts` | Pending |
| 135 | sigma-50f14-dgdn-art | 2026-05-04T03:30:45.000Z | `src/lens-data/sigma/SigmaDGDNArt50mmf14.data.ts` | Pending |
| 136 | sigma-dp2m-30f28 | 2026-05-04T03:30:45.000Z | `src/lens-data/sigma/SigmaDp2M30mmf28.data.ts` | Pending |
| 137 | vivitar-s1-70-210-f28-4 | 2026-05-04T03:30:45.000Z | `src/lens-data/vivitar/VivitarSeries170210mmf284.data.ts` | Pending |
| 138 | panasonic-lumix-s-35-f18 | 2026-05-04T13:42:06.000Z | `src/lens-data/panasonic/PanasonicS35mmf18.data.ts` | Pending |
| 139 | panasonic-lumix-s-pro-50-f14 | 2026-05-04T13:42:06.000Z | `src/lens-data/panasonic/PanasonicSPro50mmf14.data.ts` | Pending |
| 140 | pentax-fa-31-f18-al-ltd | 2026-05-04T13:42:06.000Z | `src/lens-data/pentax/PentaxFA31mmf18ALLtd.data.ts` | Pending |
| 141 | canon-ef-40-f28-stm | 2026-05-05T04:05:34.000Z | `src/lens-data/canon/CanonEF40mmf28.data.ts` | Pending |
| 142 | minolta-md-rokkor-45f2 | 2026-05-05T04:05:34.000Z | `src/lens-data/minolta/MinoltaRokkor45mmf2MD.data.ts` | Pending |
| 143 | minolta-md-rokkor-50f14 | 2026-05-05T04:05:34.000Z | `src/lens-data/minolta/MinoltaRokkor50mmf14MD.data.ts` | Pending |
| 144 | varisoft-rokkor-85f28 | 2026-05-05T04:05:34.000Z | `src/lens-data/minolta/MinoltaVarisoft85mmf28.data.ts` | Pending |
| 145 | sigma-art-40-f14 | 2026-05-06T13:23:00.000Z | `src/lens-data/sigma/SigmaArt40mmf14.data.ts` | Pending |
| 146 | voigtlander-apo-lanthar-180-f4 | 2026-05-06T13:23:00.000Z | `src/lens-data/voigtlander/VoigtlanderApoLanthar180mmf4.data.ts` | Pending |
| 147 | voigtlander-macro-apo-lanthar-125-f25 | 2026-05-06T13:23:00.000Z | `src/lens-data/voigtlander/VoigtlanderMacroApoLanthar125mmf25.data.ts` | Pending |
| 148 | pentax-da-16-50-f28 | 2026-05-06T17:37:40.000Z | `src/lens-data/pentax/PentaxDA1650mmf28.data.ts` | Pending |
| 149 | pentax-da-50-135-f28 | 2026-05-06T17:37:40.000Z | `src/lens-data/pentax/PentaxDA50135mmf28.data.ts` | Pending |
| 150 | pentax-f-85-f28-soft | 2026-05-06T17:37:40.000Z | `src/lens-data/pentax/PentaxF85mmf28Soft.data.ts` | Pending |
| 151 | lumix-s-20-60-f35-56 | 2026-05-07T04:18:41.000Z | `src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts` | Pending |
| 152 | pentax-110-24f28 | 2026-05-07T04:18:41.000Z | `src/lens-data/pentax/Pentax11024mmf28.data.ts` | Pending |
| 153 | pentax110-50f28 | 2026-05-07T04:18:41.000Z | `src/lens-data/pentax/Pentax11050mmf28.data.ts` | Pending |
| 154 | fujifilm-gf-110mm-f2 | 2026-05-08T03:09:36.000Z | `src/lens-data/fujifilm/FujifilmGF110mmf2RLM.data.ts` | Pending |
| 155 | fujifilm-gf80-f17 | 2026-05-08T03:09:36.000Z | `src/lens-data/fujifilm/FujifilmGF80mmf17R.data.ts` | Pending |
| 156 | gf-120f4-macro | 2026-05-08T03:09:36.000Z | `src/lens-data/fujifilm/FujifilmGF120mmf4RLM.data.ts` | Pending |
| 157 | sony-fe-20-70mm-f4-g | 2026-05-08T03:09:36.000Z | `src/lens-data/sony/SonyFE2070mmf4G.data.ts` | Pending |
| 158 | sony-planar-fe-50f14-za | 2026-05-08T03:09:36.000Z | `src/lens-data/sony/SonyPlanarFE50mmf14ZA.data.ts` | Pending |
| 159 | sony-planar-t-50f14-za | 2026-05-08T03:09:36.000Z | `src/lens-data/sony/SonyPlanarT50mmf14ZA.data.ts` | Pending |
| 160 | hasselblad-hc-150-f32 | 2026-05-09T03:35:00.000Z | `src/lens-data/hasselblad/HasselbladHC150mmf32.data.ts` | Pending |
| 161 | hasselblad-hc-80-f28 | 2026-05-09T03:35:00.000Z | `src/lens-data/hasselblad/HasselbladHC80mmf28.data.ts` | Pending |
| 162 | hasselblad-hc-macro-4-120 | 2026-05-09T03:35:00.000Z | `src/lens-data/hasselblad/HasselbladHC120mmf4Macro.data.ts` | Pending |
| 163 | hasselblad-xcd-120-f35-macro | 2026-05-09T03:35:00.000Z | `src/lens-data/hasselblad/HasselbladXCD120mmf35Macro.data.ts` | Pending |
| 164 | hasselblad-xcd-65-f28 | 2026-05-09T03:35:00.000Z | `src/lens-data/hasselblad/HasselbladXCD65mmf28.data.ts` | Pending |
| 165 | hasselblad-xcd-90-f25-v | 2026-05-09T03:35:00.000Z | `src/lens-data/hasselblad/HasselbladXCD90mmf25V.data.ts` | Pending |
| 166 | panasonic-leica-dg-15f17 | 2026-05-10T15:10:24.000Z | `src/lens-data/panasonic/PanasonicLeicaDG15mmf17.data.ts` | Pending |
| 167 | panasonic-leica-dg-25f14 | 2026-05-10T15:10:24.000Z | `src/lens-data/panasonic/PanasonicLeicaDG25mmf14.data.ts` | Pending |
| 168 | panasonic-leica-dg-9f17 | 2026-05-10T15:10:24.000Z | `src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts` | Pending |
| 169 | leica-apo-macro-elmarit-tl-60-f28 | 2026-05-10T16:13:28.000Z | `src/lens-data/leica/LeicaAPOMacroElmaritTL60mmf28.data.ts` | Pending |
| 170 | olympus-mzuiko-12-40-f28-pro | 2026-05-10T16:13:28.000Z | `src/lens-data/olympus/OlympusMZuiko1240mmf28PRO.data.ts` | Pending |
| 171 | olympus-mzuiko-40-150-f28-pro | 2026-05-10T16:13:28.000Z | `src/lens-data/olympus/OlympusMZuiko40150mmf28PRO.data.ts` | Pending |
| 172 | hasselblad-hc-210-f4 | 2026-05-11T14:45:49.000Z | `src/lens-data/hasselblad/HasselbladHC210mmf4.data.ts` | Pending |
| 173 | hasselblad-hc-300-f4p5 | 2026-05-11T14:45:49.000Z | `src/lens-data/hasselblad/HasselbladHC300mmf45.data.ts` | Pending |
| 174 | hasselblad-hc-50-f35 | 2026-05-11T14:45:49.000Z | `src/lens-data/hasselblad/HasselbladHC50mmf4.data.ts` | Pending |
| 175 | leica-apo-vario-elmarit-sl-90-280-f28-4 | 2026-05-11T14:45:49.000Z | `src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts` | Pending |
| 176 | sigma-85f14-art | 2026-05-11T14:45:49.000Z | `src/lens-data/sigma/Sigma85mmf14Art.data.ts` | Pending |
| 177 | sigma-dp0-quattro-14-f4 | 2026-05-11T14:45:49.000Z | `src/lens-data/sigma/SigmaDp0Quattro14mmf4.data.ts` | Pending |
| 178 | nikon-af-p-70-300-f45-56e-ed-vr | 2026-05-12T03:00:56.000Z | `src/lens-data/nikon/NikonAFP70300mmf4556E.data.ts` | Pending |
| 179 | nikon-af-p-dx-10-20mm-f45-56g-vr | 2026-05-12T03:00:56.000Z | `src/lens-data/nikon/NikonAFPDX1020mmf4556G.data.ts` | Pending |
| 180 | nikon-afp-dx-70-300-f4563g | 2026-05-12T03:00:56.000Z | `src/lens-data/nikon/NikonAFPDX70300mmf4563G.data.ts` | Pending |
| 181 | nikon-z-dx-16-50-f3563-vr | 2026-05-12T03:00:56.000Z | `src/lens-data/nikon/NikonZDX1650mmf3563VR.data.ts` | Pending |
| 182 | nikon-z-dx-18-140-f35-63-vr | 2026-05-12T03:00:56.000Z | `src/lens-data/nikon/NikonZDX18140mmf3563VR.data.ts` | Pending |
| 183 | nikon-z-dx-50-250mm-f45-63-vr | 2026-05-12T03:00:56.000Z | `src/lens-data/nikon/NikonZDX50250mmf4564VR.data.ts` | Pending |
| 184 | canon-ef-m-32mm-f14-stm | 2026-05-13T04:16:25.000Z | `src/lens-data/canon/CanonEFM32mmf14STM.data.ts` | Pending |
| 185 | canon-efm-22mm-f2-stm | 2026-05-13T04:16:25.000Z | `src/lens-data/canon/CanonEFM22mmf2STM.data.ts` | Pending |
| 186 | canon-efm-28mm-f35-macro-is-stm | 2026-05-13T04:16:25.000Z | `src/lens-data/canon/CanonEFM28mmf34MacroISSTM.data.ts` | Pending |
| 187 | canon-efs-10-18-f4556-is-stm | 2026-05-13T04:16:25.000Z | `src/lens-data/canon/CanonEFS1018mmf4.data.ts` | Pending |
| 188 | canon-efs-17-55-f28-is | 2026-05-13T04:16:25.000Z | `src/lens-data/canon/CanonEFS1755mmf28IS.data.ts` | Pending |
| 189 | canon-efs-24-f28-stm | 2026-05-13T04:16:25.000Z | `src/lens-data/canon/CanonEFS24mmf28STM.data.ts` | Pending |
| 190 | minolta-af-100mm-f28-macro | 2026-05-14T13:23:27.000Z | `src/lens-data/minolta/MinoltaAF100mmf28Macro.data.ts` | Pending |
| 191 | minolta-af-35-105mm-f3-5-4-5-v2 | 2026-05-14T13:23:27.000Z | `src/lens-data/minolta/MinoltaAF35105mmf3545v2.data.ts` | Pending |
| 192 | minolta-af-70-200mm-f28-apo-g-d-ssm | 2026-05-14T13:23:27.000Z | `src/lens-data/minolta/MinoltaAF70200mmf28APO.data.ts` | Pending |
| 193 | laowa-12mm-f28-zero-d | 2026-05-15T12:05:49.000Z | `src/lens-data/laowa/Laowa12mmf28ZeroD.data.ts` | Pending |
| 194 | laowa-15mm-f2-zero-d | 2026-05-15T12:05:49.000Z | `src/lens-data/laowa/Laowa15mmf2ZeroD.data.ts` | Pending |
| 195 | laowa-24f14-probe | 2026-05-15T12:05:49.000Z | `src/lens-data/laowa/Laowa24mmf14Probe.data.ts` | Pending |
| 196 | laowa-58mm-f28-2x-macro-apo | 2026-05-15T12:05:49.000Z | `src/lens-data/laowa/Laowa58mmf28MacroAPO.data.ts` | Pending |
| 197 | laowa-65mm-f28-macro-apo | 2026-05-15T12:05:49.000Z | `src/lens-data/laowa/Laowa65mmf28MacroAPO.data.ts` | Pending |
| 198 | laowa-15f4-macro | 2026-05-15T12:50:20.000Z | `src/lens-data/laowa/Laowa15mmf4Macro.data.ts` | Pending |
| 199 | schneider-apo-symmar-100-f56 | 2026-05-16T03:07:17.000Z | `src/lens-data/schneider-kreuznach/SchneiderAPOSymmar100mmf56.data.ts` | Pending |
| 200 | schneider-super-angulon-75-f56 | 2026-05-16T03:07:17.000Z | `src/lens-data/schneider-kreuznach/SchneiderSuperAngulon75mmf56.data.ts` | Pending |

## Changed lenses

| # | Lens | Adjustments and locations | Verification resource |
|---|---|---|---|
| 1 | APO-LANTHAR 50mm f/2 | `VoigtlanderApoLanthar50f2.data.ts`: ASP19 A6 sign, rear SD 11→15 mm, close focus 0.37→0.45495 m, three movement groups, supplier-neutral glass/APD labels and S-LAH65V compatibility; companion analysis rewritten against evidence; `DiagramControls.tsx`: label wide-open EP explicitly | Local `patents/JP2021043376A.pdf`, Table 5 p.27, Fig.10 p.48, §§0092–0098; production and corrected local live viewer |

| 2 | Fujifilm XF 50mm f/1.0 | `FujifilmXF50f1.data.ts`: aspheric rims 10.7/9.9→13 mm, patent nominal aperture, air-equivalent rear gaps/reference distance, focus arrow/gap labels, all 12 partial-dispersion ratios, supplier-neutral glass labels; analysis and asphere tests synchronized; shared focus endpoint formatting | Local `patents/US20210231927A1.pdf`, Fig.7 p.8, Tables 9–12 p.80, §§0212–0213 p.79; live production/local views |

## Lens 1 verification

- Production and local browser inspection performed; infinity, midpoint, close focus, tracking rays, dimensions, movement chart, f/16 and pupil readout checked.
- Surface and image-circle audits passed. Patent figure and table rendered at 600 dpi.
- Three focused tests verify independent ASP19 departure, fixed-camera F36 assembly travel/object-distance convention, and no hidden rim trims.
- Glass reports: 15 tests passed; zero catalog mismatches, coverage 3/10→4/10.
- Final full gates passed: typecheck, formatting, lint, 2,768 tests / 299 files; build prerendered 1,267 routes. Final rerun after group/label edits also passed.
- New changelog entry deferred to completion of this audit batch, avoiding 200 per-lens entries. Add one consolidated UTC entry before final delivery.
- See the sibling `.audit.md` for exact before/after evidence and retained source limits.

## Follow-ups

- Continue with lens 3, `src/lens-data/voigtlander/VoigtlanderNokton50f1.data.ts`, exact local source `patents/JP2023063766A.pdf`, Example 1.
- Lens 1 commit can be located with `git log --oneline --grep="audit APO-LANTHAR 50mm f/2"`.
- Local validation server: `http://127.0.0.1:5175/` (Vite); production: `https://surfaceandstop.com/`.
- Browser tables can initially show SSR-only content; wait for hydration before judging missing controls.

## Lens 2 verification

- Surface/image-circle audits passed; focused runtime dispersion, plate-equivalence, group motion, hidden-trim/asphere/control checks passed (39 tests).
- Full typecheck, format, lint passed; 2,771 tests / 300 files passed; build prerendered 1,267 routes. Glass reports passed (15 tests), no report diffs.
- Shared motion chart label clipping is visible with long authored group names; inspect this display limitation before final batch delivery.
