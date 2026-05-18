# Patent Metadata Backfill

Scan date: 2026-05-17

Target format: each `*.analysis.md` file should begin its patent/design-identification section with a robust bold-label metadata block. The block should include the patent reference, inventor/applicant or assignee, at least one filing/publication/grant date, and the selected embodiment when known. Optional fields such as application number, priority date, title, classification, claim count, and worked-example count should be included only when readily verified.

## Corpus Status

| Status | Count | Notes |
|---|---:|---|
| Total analysis files | 209 | `find src/lens-data -name '*.analysis.md'` |
| Robust bold blocks before this standardization | 103 | Approximate scan: patent + inventor/applicant/assignee + date |
| Missing robust bold block before this standardization | 106 | Grouped by maker below |
| Completed in this pass | 9 | Voigtländer analyses |

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
- Good candidates: Sony, Olympus, Canon, Nikon modern patent files.

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
node -e 'const fs=require("fs"); const cp=require("child_process"); const files=cp.execFileSync("find",["src/lens-data","-name","*.analysis.md"],{encoding:"utf8"}).trim().split("\n").filter(Boolean); const patent=/^\*\*Patent(s)?\s*:?\*\*/mi; const owner=/^\*\*(Inventor(s)?|Applicant(s)?|Assignee)\s*:?\*\*/mi; const date=/^\*\*(Filed|Published|Granted|Filing Date|Publication Date)\s*:?\*\*/mi; const missing=files.filter(f=>{const s=fs.readFileSync(f,"utf8"); return !(patent.test(s)&&owner.test(s)&&date.test(s));}); const by={}; for(const f of missing){const maker=f.split("/")[2]; by[maker]=(by[maker]||0)+1;} console.log("missing robust bold block:",missing.length,"of",files.length); console.log(Object.entries(by).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).map(([k,v])=>`${k}: ${v}`).join("\n"));'
```
