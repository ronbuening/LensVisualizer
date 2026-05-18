# Patent Metadata Backfill

Scan date: 2026-05-17

Target format: each `*.analysis.md` file should begin its patent/design-identification section with a robust bold-label metadata block. The block should include the patent reference, inventor/applicant or assignee, at least one filing/publication/grant date, and the selected embodiment when known. Optional fields such as application number, priority date, title, classification, claim count, and worked-example count should be included only when readily verified.

## Corpus Status

| Status | Count | Notes |
|---|---:|---|
| Total analysis files | 209 | `find src/lens-data -name '*.analysis.md'` |
| Robust bold blocks before this standardization | 103 | Approximate scan: patent + inventor/applicant/assignee + date |
| Missing robust bold block before this standardization | 106 | Grouped by maker below |
| Completed so far | 82 | Voigtländer, Canon, Nikon, Olympus, Fujifilm, Sony, and Minolta batches |
| Current robust count | 185 | Latest scan after Olympus/Fujifilm/Sony/Minolta batch |
| Current missing count | 24 | Latest scan after Olympus/Fujifilm/Sony/Minolta batch |

## Initial Missing Robust Count by Maker

| Maker folder | Missing files |
|---|---:|
| nikon | 34 |
| canon | 15 |
| voigtlander | 9 |
| olympus | 7 |
| fujifilm | 6 |
| sony | 6 |
| minolta | 5 |
| carl-zeiss-jena | 3 |
| hasselblad | 3 |
| laowa | 3 |
| leica | 3 |
| sigma | 3 |
| carl-zeiss-oberkochen | 2 |
| ricoh | 2 |
| schneider-kreuznach | 2 |
| vivitar | 2 |
| pentax | 1 |

## Status Buckets

### Done

- Olympus, Fujifilm, Sony, and Minolta batch complete: all analysis files in those four maker folders now satisfy the robust-block scan.
- `src/lens-data/olympus/OlympusMZuiko12100mmf4ISPRO.analysis.md`
- `src/lens-data/olympus/OlympusMZuiko17mmf18.analysis.md`
- `src/lens-data/olympus/OlympusZuiko135mmf35.analysis.md`
- `src/lens-data/olympus/OlympusZuiko24mmf2J.analysis.md`
- `src/lens-data/olympus/OlympusZuiko85mmf2.analysis.md`
- `src/lens-data/olympus/OlympusZuikoAuto21mmf2.analysis.md`
- `src/lens-data/olympus/OlympusZuikoAutoMacro90mmf2.analysis.md`
- `src/lens-data/olympus/OlympusZuikoAutoS50mmf12.analysis.md`
- `src/lens-data/olympus/OlympusZuikoAutoS55mmf12.analysis.md`
- `src/lens-data/fujifilm/FujifilmGF80mmf17R.analysis.md`
- `src/lens-data/fujifilm/FujifilmXF1680mmf4.analysis.md`
- `src/lens-data/fujifilm/FujifilmXF1655mmf28R.analysis.md`
- `src/lens-data/fujifilm/FujifilmXF200mmf2R.analysis.md`
- `src/lens-data/fujifilm/FujifilmXF35mmf14R.analysis.md`
- `src/lens-data/fujifilm/FujifilmXF50140mmf28R.analysis.md`
- `src/lens-data/fujifilm/FujifilmXF60mmf24R.analysis.md`
- `src/lens-data/sony/SonyFE135mmf18GM.analysis.md`
- `src/lens-data/sony/SonyFE2070mmf4G.analysis.md`
- `src/lens-data/sony/SonyFE2470mmf28GMII.analysis.md`
- `src/lens-data/sony/SonyFE2870mmf2GM.analysis.md`
- `src/lens-data/sony/SonyFE85mmf14GMII.analysis.md`
- `src/lens-data/sony/SonyFE90mmf28.analysis.md`
- `src/lens-data/sony/SonyPlanarFE50mmf14ZA.analysis.md`
- `src/lens-data/sony/SonyPlanarT50mmf14ZA.analysis.md`
- `src/lens-data/minolta/MinoltaAF100mmf28Macro.analysis.md`
- `src/lens-data/minolta/MinoltaAF35105mmf3545v2.analysis.md`
- `src/lens-data/minolta/MinoltaAF70200mmf28APO.analysis.md`
- `src/lens-data/minolta/MinoltaRokkor45mmf2MD.analysis.md`
- `src/lens-data/minolta/MinoltaRokkor50mmf14MD.analysis.md`
- Nikon batch complete: all 54 Nikon analysis files now satisfy the robust-block scan.
- `src/lens-data/nikon/Nikon28Ti28mmf28.analysis.md`
- `src/lens-data/nikon/Nikon35Ti35mmf28.analysis.md`
- `src/lens-data/nikon/Nikon58f14GDesignCandidate.analysis.md`
- `src/lens-data/nikon/Nikon85f14D.analysis.md`
- `src/lens-data/nikon/NikonAF28f14D.analysis.md`
- `src/lens-data/nikon/NikonAFPDX1020mmf4556G.analysis.md`
- `src/lens-data/nikon/NikonAFPDX70300mmf4563G.analysis.md`
- `src/lens-data/nikon/NikonAFP70300mmf4556E.analysis.md`
- `src/lens-data/nikon/NikonAI135mmf2.analysis.md`
- `src/lens-data/nikon/NikonAI135mmf28.analysis.md`
- `src/lens-data/nikon/NikonL35AF35mmf28.analysis.md`
- `src/lens-data/nikon/NikonNikkorAFS120300mmf28.analysis.md`
- `src/lens-data/nikon/NikonNikkorAFS1424mmf28.analysis.md`
- `src/lens-data/nikon/NikonNikkorAFS200500mmf56.analysis.md`
- `src/lens-data/nikon/NikonNikkorAFS2470mmf28E.analysis.md`
- `src/lens-data/nikon/NikonNikkorAFS80400mmf4556G.analysis.md`
- `src/lens-data/nikon/NikonNikkorN28mmf2.analysis.md`
- `src/lens-data/nikon/NikonNikkorPCE19mmf4E.analysis.md`
- `src/lens-data/nikon/NikonNikkorZ100400f4556.analysis.md`
- `src/lens-data/nikon/NikonNikkorZ1430mmf4S.analysis.md`
- `src/lens-data/nikon/NikonNikkorZ24200mmf463VR.analysis.md`
- `src/lens-data/nikon/NikonNikkorZ2450mmf463.analysis.md`
- `src/lens-data/nikon/NikonNikkorZ35mmf12S.analysis.md`
- `src/lens-data/nikon/NikonNikkorZ40mmf2.analysis.md`
- `src/lens-data/nikon/NikonNikkorZ50f18S.analysis.md`
- `src/lens-data/nikon/NikonNikkorZ70200f28.analysis.md`
- `src/lens-data/nikon/NikonPCENikkor24mmf35DED.analysis.md`
- `src/lens-data/nikon/NikonZ1424f28S.analysis.md`
- `src/lens-data/nikon/NikonZ2470f28.analysis.md`
- `src/lens-data/nikon/NikonZ28f28.analysis.md`
- `src/lens-data/nikon/NikonZ35f18S.analysis.md`
- `src/lens-data/nikon/NikonZ85f18S.analysis.md`
- `src/lens-data/nikon/NikonZDX18140mmf3563VR.analysis.md`
- `src/lens-data/nikon/NikonZDX50250mmf4564VR.analysis.md`
- Canon batch complete: all 30 Canon analysis files now satisfy the robust-block scan.
- `src/lens-data/canon/CanonEFM22mmf2STM.analysis.md`
- `src/lens-data/canon/CanonEFM28mmf34MacroISSTM.analysis.md`
- `src/lens-data/canon/CanonEFM32mmf14STM.analysis.md`
- `src/lens-data/canon/CanonFD35mmf2.analysis.md`
- `src/lens-data/canon/CanonFD50mmf12L.analysis.md`
- `src/lens-data/canon/CanonFDn50f12.analysis.md`
- `src/lens-data/canon/CanonRF1535f28.analysis.md`
- `src/lens-data/canon/CanonRF24105mmf28Z.analysis.md`
- `src/lens-data/canon/CanonRF24105mmf4L.analysis.md`
- `src/lens-data/canon/CanonRF24240mmf463.analysis.md`
- `src/lens-data/canon/CanonRF2870mmf28.analysis.md`
- `src/lens-data/canon/CanonRF85mmf2Macro.analysis.md`
- `src/lens-data/canon/CanonSerenar35mmf32.analysis.md`
- `src/lens-data/canon/CanonSerenar50mmf18.analysis.md`
- `src/lens-data/canon/CanonSerenar85mmf15.analysis.md`
- `src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.analysis.md`
- `src/lens-data/voigtlander/VoigtlanderApoLanthar180mmf4.analysis.md`
- `src/lens-data/voigtlander/VoigtlanderHeliar.analysis.md`
- `src/lens-data/voigtlander/VoigtlanderMacroApoLanthar125mmf25.analysis.md`
- `src/lens-data/voigtlander/VoigtlanderNokton35mmf12.analysis.md`
- `src/lens-data/voigtlander/VoigtlanderNokton50f1.analysis.md`
- `src/lens-data/voigtlander/VoigtlanderNoktonX50mmf12.analysis.md`
- `src/lens-data/voigtlander/VoigtlanderUltron28f2.analysis.md`
- `src/lens-data/voigtlander/VoigtlanderUltron50f2.analysis.md`

### Ready From Existing Prose

- Analyses with patent metadata in prose, title lines, or source sections that can be lifted into the robust block without external research.
- Good candidates: Sony, Olympus, and Nikon modern patent files.

### Has Partial Block

- Analyses that already have `**Patent:**` but are missing inventor/applicant/assignee, a date, or embodiment.
- Normalize by adding missing known rows from existing prose and avoiding duplicate one-off headings.

### Needs Patent Lookup

- Files whose core patent metadata is not available near the top of the analysis or source section.
- Do not add placeholder rows; leave these queued until the source patent is checked.

### Multi-Patent / Special Case

- Historical-lineage analyses and files comparing multiple embodiments or patent families.
- Use the robust block for the primary transcribed prescription and keep context patents in prose unless multiple prescriptions are directly transcribed.

## Scan Command

```bash
node -e 'const fs=require("fs"); const cp=require("child_process"); const files=cp.execFileSync("find",["src/lens-data","-name","*.analysis.md"],{encoding:"utf8"}).trim().split("\n").filter(Boolean); const patent=/^\*\*Patent(s)?\s*:?\*\*/mi; const owner=/^\*\*(Inventor(s)?|Applicant(s)?|Applicants|Assignee)\s*:?\*\*/mi; const date=/^\*\*(Filed|Published|Granted|Filing Date|Publication Date)\s*:?\*\*/mi; const missing=files.filter(f=>{const s=fs.readFileSync(f,"utf8"); return !(patent.test(s)&&owner.test(s)&&date.test(s));}); const by={}; for(const f of missing){const maker=f.split("/")[2]; by[maker]=(by[maker]||0)+1;} console.log("missing robust bold block:",missing.length,"of",files.length); console.log(Object.entries(by).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).map(([k,v])=>`${k}: ${v}`).join("\n"));'
```
