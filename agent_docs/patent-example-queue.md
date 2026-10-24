# Patent Example Queue

Lens files that do not yet record `source.example` (the numerical example of `source.patentNumber` they transcribe;
see `src/lens-data/LENS_DATA_SPEC.md` § Patent metadata). Every key here is in `MISSING_PATENT_EXAMPLE` in
`__tests__/src/lens-data/patentMetadata.test.ts`. When a row is resolved, add `source.example`, edit the analysis
metadata row as `LENS_ANALYSIS_SPEC.md` § 1 describes, and delete the row here and the key from that list in the same
commit.

## Subtitle numbers an example the source does not print

The publication has one numerical example and gives it no identifier, so the example is
`{ label: "Sole example", id: null }`. The subtitle still carries a project or job-card number, which the corpus sweep
rejects. Resolve by removing the number from `subtitle` (a table reference may stay), then backfill. Each was checked
against the local PDF.

| File | Patent | Subtitle names |
|------|--------|----------------|
| `canon/CanonEF100300mmf56` | JP S61-77818 A | Example 1 |
| `carl-zeiss-oberkochen/ZeissBiogon35mmf28ContaxOpton` | JP S30-4837 B | EXAMPLE 1 |
| `carl-zeiss-oberkochen/ZeissMirotarf45500mm` | GB 975,446 | Example 1 |
| `fujifilm/FujifilmFujinar210mmf45` | JP S29-2685 B | Example 1 |
| `konica/KonicaHexanon135mmf35` | JP 1955-009472 B | Example 1 |
| `konica/KonicaUCZoomHexanonAR80200mmf4` | JP S51-37247 A | Example 1 |
| `konica/KonicaVarifocalHexanonAR35100mmf28` | US 3,584,935 | Example 1 |
| `leica/LeicaAPO35mmf2` | US 2022/0066176 A1 | Ex. 1 |
| `leica/LeicaSummiluxM50mmf14I` | DE 1 045 120 B | Example 1 |
| `mamiya/MamiyaSekorMacroC80mmf4` | JP S55-24081 B2 | Example 1 |
| `mamiya/MamiyaSekorZoomE2850mmf3545` | JP 1981-119109 A | Example 1 |
| `meyer-optik-goerlitz/MeyerOptikGorlitz135mmf28Orestor` | DE 1 282 311 | Example 1 |
| `meyer-optik-goerlitz/MeyerOptikGorlitz30mmf35Lydith` | DE 1 794 971 | Example 1 |
| `meyer-optik-goerlitz/MeyerOptikGorlitz35mmf45Primagon` | DE 1 749 770 U | Example 1 |
| `meyer-optik-goerlitz/MeyerOptikGorlitz500mmf56Orestegor` | DE 1 980 417 | Example 1 |
| `miranda/MirandaAutoEC135mmf28` | JP S51-074627 A | Example 1 |
| `miranda/MirandaAutoEC200mmf35` | JP S51-114926 A | Example 1 |
| `nikon/NikonNikkorSAuto50mmf2` | JP 1964-025754 B | Embodiment 1 |
| `nikon/NikonNikkorSAuto58mmf14` | JP 1966-017177 B | Embodiment 1 |
| `olympus/OlympusZuikoAuto21mmf2` | US 4,210,388 | EXAMPLE 1 |
| `p.-angénieux/AngenieuxRetrofocusR1128mmf35` | GB 720,808 | Example 1 |
| `pentax/PentaxSuperTakumar135mmf2.5` | US 3,459,469 | Example 1 |
| `schacht/SchachtSTravenar135mmf28` | CH 479 879 | Example 1 |
| `schacht/SchachtTravenar90mmf28` | US 2,721,501 | Example 1 |
| `schneider-kreuznach/SchneiderCinegon1810` | US 3,038,379 | Example 1 |
| `schneider-kreuznach/SchneiderCinegon1965` | DE 927 540 | Example 1 |
| `schneider-kreuznach/SchneiderCurtagon428` | US 2,824,495 | Example 1 |
| `schneider-kreuznach/SchneiderVariogon281040` | US 3,057,257 | Example 1 |
| `schneider-kreuznach/SchneiderXenar2850` | DE 753329 | Example 1 |
| `tamron/TamronA08200500mmf563` | JP 2003-344768 A | Example 1 |
| `voigtlander/VoigtlanderApoLanthar210mmf45` | US 2,645,154 | Example 1 |
| `voigtlander/VoigtlanderColorHeliar105mmf35` | US 2,645,156 A | Example 1 |
| `voigtlander/VoigtlanderColorSkopar105mmf35` | US 2,573,511 A | Example 1 |
| `voigtlander/VoigtlanderTelomar180mmf55` | FR 1,045,076 | Example 1 |
| `yashica/YashicaYashinonDX21mmf33` | JP 1969-024068 B | Example 1 |

## Subtitle and source name different examples

| File | Patent | Evidence |
|------|--------|----------|
| `nikon/NikonAFZoomMicro70180mmf4556D` | US 5,717,527 | The source designates the design Seventh Embodiment, with its prescription in TABLE 8. The subtitle names `Table 8`; the example is `Embodiment 7`. |
| `olympus/OlympusMZuiko1442mmf3556II` | US 8,994,842 B2 | Example 1 is printed as Common Example A's prescription with its own focusing table; the file transcribes exactly that. The subtitle leads with `Common Example A`. Decide whether the subtitle should name Example 1. |
| `samyang/SamyangAF35150mmf228` | US 2025/0231383 A1 | The analysis names the third embodiment (optical system 100-3, Tables 7–9); the subtitle says `Embodiment 100-3`, a reference numeral. No local PDF. |
| `schneider-kreuznach/SchneiderXenon1950` | CH 346706 | The source prints `Zahlentabelle A` (and B); the subtitle leads with an unprinted `Example 1`. The example is `Table A`. |

## The example cannot be stated as one designation

| File | Patent | Evidence |
|------|--------|----------|
| `canon/CanonFL85300mmf5` | US 3,377,119 A | Two constructions, identified only by FIGURE 2 (a component) and FIGURE 3 (the zoom this file transcribes). |
| `carl-zeiss-jena/ZeissJenaSonnar50mmf15US2186621` | US 2,186,621 | Two unnumbered prescriptions, identified only by Fig. 1 (prior art, transcribed here) and Fig. 2. |
| `kodak/KodakEktar50mmf35` | US 2,165,328 | Two prescriptions headed only Fig. 1 and Fig. 2; the file matches Fig. 2. The subtitle's `Example 2` is not printed. |
| `nikon/NikonFisheyeNikkor6mmf56` | US 3,524,697 | "An embodiment" (Fig. 1, 220°, transcribed here) and "another embodiment" (Fig. 3, 270°); neither is numbered. |
| `kodak/KodakAeroEktar6inf35` | US 2,983,193 | The base design (Fig. 2, transcribed here) and a prose variant that changes S2 only; neither is numbered. |
| `agfa/AgfaColorTelinear90mmf4` | US 2,819,651 | One unnumbered worked table, plus a second, coarsened construction in claim 8 (n1 1.52 against 1.5633). Decide whether claim 8 is a second example; if not, this is `Sole example`. |
| `nikon/NikonNikkor15mmf56` | JP S48-71634 A | The file transcribes the spherical reference table (球面光学系（参考資料）) beside the unnumbered aspheric 実施例. |
| `rodenstock/RodenstockGrandagonN65mmf45` | DE 2444954 A1 | Four designs printed only as Patentansprüche 1–4; the description names no examples. Claim 4 here. |
| `rodenstock/RodenstockGrandagonN75mmf45` | DE 2444954 A1 | As above; claim 3. The subtitle's `Example 3` is not printed. |
| `rodenstock/RodenstockGrandagonN90mmf45` | DE 2444954 A1 | As above; claim 2. |
| `rodenstock/RodenstockGrandagonN75mmf68` | DE 26 35 415 B1 | Three designs printed only under Patentansprüche 1–3; claim 1 here. The subtitle's `Example 1` is not printed. |
| `leica/LeicaMacroElmarM90mmf4` | DE 2 246 966 A1 | Two Ausführungsbeispiele given only as the data of claims 3 and 4; claim 3 here. |
| `nikon/Nikon1Nikkor10100mmf4VR` | US 2020/0348497 A1 | Combines Eighth Example (TABLE 8) infinity data with Third Example (TABLE 3) close-focus spacings. |
| `nikon/NikonAFSNikkor180400mmf4ETC14` | WO 2019/131993 A1 | 第１実施例 of the second embodiment (TC out); the first embodiment also has a 第１実施例. |
| `nikon/NikonAFSNikkor180400mmf4ETC14TCIn` | WO 2019/131993 A1 | As above, TC in. |

A claim-designated design could take a `"Claim N"` label if that is accepted as the source's designation; a
figure-designated one needs a `figure` member or a `"Figure N"` label. Neither is in the schema yet.

## Not confirmed against the source

No local PDF, and the repo's own label is the kind this catalog often carries without the source printing it (a
job-card `Example 1` on an older patent), or the repo claims a sole example. Check the publication, then backfill.

| File | Patent | Repo says |
|------|--------|-----------|
| `mamiya/MamiyaSekorC55mmf28N` | JP S55-45883 B2 | Example 1 |
| `mamiya/MamiyaSekorCS35mmf28` | JP 1978-066222 A | Example 1 |
| `mamiya/MamiyaSekorSFC150mmf4SoftFocus` | JP S52-141223 A | Example 1 / 第1実施例 |
| `olympus/OlympusZuikoAutoT200mmf5` | US 3,804,494 | Example 1 / claim 2 |
| `olympus/OlympusZuikoAutoW18mmf35` | US 4,029,397 | Embodiment 1 |
| `pentax/Pentax645A45mmf28` | US 4,487,485 | Example 1 / claim 2 |
| `olympus/OlympusEZuiko1000mmf11` | DE 2206106 A1 | single worked example |
