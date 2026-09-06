# Canon six-lens addition audit — 2026-09-06 UTC

## Result

Added EF 35mm f/2 IS USM, EF 70-300mm f/4-5.6 IS II USM, EF-M 15-45mm f/3.5-6.3 IS STM, EF-S 18-135mm f/3.5-5.6 IS STM, PowerShot G3 X, and PowerShot G9 X patent models with companion analyses and per-lens audit logs.

## Root cause and corrections

The initial full run had 2,742 passing tests and one failure in `patentMetadata`: three new Canon entries used `Canon Kabushiki Kaisha` instead of the catalog's `Canon Inc.`. Corrected those source records and romanized G9 X inventor Akihiko Yuki. No test expectations or metadata normalization rules were weakened.

Reviewed all six exact local patent embodiments at 600 dpi. G9 X used ray-envelope minimum SDs that underrepresented the front/rear optical outlines: enlarged L11 6.2→9.4 mm, L12 6.1→8.5 mm, L31 5.7→9.0 mm. Retained the other lenses' published or constrained apertures, rejecting automated readings contaminated by brackets, labels, and adjacent surfaces. Stops and focus/zoom trajectories are unchanged.

Glass coverage for the additions increased from 69/79 to 76/79 elements through existing qualified curves. Verified M-TAFD307 against HOYA's July 7, 2026 manufacturer AGF: its coefficients already existed, and the unresolved label omitted the M- prefix. No new glass type was necessary. The two EF-M 1.52996/55.8 elements and G9 X 1.84660/20.6 element remain unmatched. Removed 70-300mm proxy-derived line-index/dPgF fields so catalog estimates are not treated as measured patent data; qualified catalog dispersion remains available for all 17 elements.

Global coverage: 7,277/7,820 strict and 7,292/7,820 trusted surfaces, zero catalog-coordinate mismatches. Refreshed all glass reports. Normalized display-name ranges and parenthetical Canon PowerShot camera names. Added the lens changelog entry under September 6 using the live UTC clock (20:48:54 UTC); the schema stores the UTC date, not a time-of-day field.

## Verification

- `npm run typecheck`, `npm run format:check`, `npm run lint` — passed.
- `npm run test` — 295 files, 2,743 tests passed.
- `npm run generate:glass-reports` — 8 files, 15 tests passed.
- `npm run build` — passed, 1,260 prerendered routes and RSS/sitemap generation completed. Existing large-chunk advisory remains non-fatal.
- `audit:surface` and `audit:image-circle` — passed for all six lenses after edits; G9 X asphere scans show no turnover within revised apertures.
- Render diagnostics at five zoom and three focus positions per lens found no material SD trims. Visually compared static outlines generated from the production `computeElementShapes` paths against the patent crops.
- Browser access was unavailable; static geometry review is not a live UI interaction check.

Local patent PDFs remain unchanged and untracked. No production deployment or push was performed.

## Screenshot follow-up — 2026-09-06 UTC

Compared the six supplied site screenshots directly with the exact source figures listed in the per-lens audits. Refined EF 35mm S1/S2 to 25.2/25.2 mm, S5/S6 to 15.2/12.6 mm, Gis to 10.5/10.5 mm, and S18A/S19 to 11.9/11.9 mm. Rejected smaller central/cemented rims after exact-ray clipping, and rejected enlarging S3/S4 after cross-gap validation. Updated the final-asphere departure to −302.422 µm. Static production paths confirm the accepted outline changes; browser interaction remains unavailable.

The other five lenses retain their reviewed SDs. Their published effective-diameter halves or already refined optical rims provide stronger evidence than contaminated automated readings. Removed synthetic J/C/D cemented-pair callouts from the diagrams while preserving cemented metadata. Source labels Lc, Gis, L5B / IS, and the G9 X numbered assemblies remain. Production display names, asphere counts, stop positions, group powers, and mount/format tags were reviewed and retained.

Four UD-class elements now have inferred APD colors: EF 70-300mm E3, EF-S 18-135mm E2, and G3 X L2/L3. These reflect source coordinates plus Canon production counts, not confirmed production element numbers or suppliers. Canon sources: [70-300mm](https://global.canon/en/c-museum/product/ef459.html), [18-135mm](https://global.canon/en/c-museum/product/ef418.html), and [G3 X launch release](https://www.canon.com.hk/tc/corporate/press_release/pressReleaseDetails.do?prmid=11029). The G3 X's third, Hi-UD production element remains unassigned without sufficient placement evidence.

G9 X Example 1 publishes five θgF values on PDF pp. 12–13. Converted all five to dPgF using the normal-line baseline, retaining patent authority over catalog curves at the violet channel. L23 now has a patent-backed APD tag and partial-dispersion-corrected Abbe model. No absolute line indices or full Sellmeier curve were invented.

Further catalog investigation did not establish a safe new entry. The two EF-M 1.52996/55.8 media remain unidentified. [Polyanskiy's published ZEONEX E48R fit](https://refractiveindex.info/?shelf=other&book=ZeonexE48R&page=Sultanova) to [Sultanova et al. (2009)](https://przyrbwn.icm.edu.pl/APP/PDF/116/a116z442.pdf) has B1=1.2969, C1=0.011721 and evaluates to nd=1.53051594, νd=51.79195. It fails the patent-coordinate compatibility guard; no polymer assignment or replacement coefficients were introduced. G9 X L23's special high-dispersion glass remains without an identified public curve.

### Travel review

All shifts use a fixed image plane, positive imageward. Published source stations are preserved; intermediate and finite-focus reconstructions retain their existing status.

| Lens | Zoom review | Near-focus direction |
| --- | --- | --- |
| EF 35mm | Fixed focal length; L1 fixed | L2 objectward |
| EF 70-300mm II | L1/L3/L4/L5 objectward; L2a/L2b/L6 fixed within 0.01 mm table rounding | L5 imageward |
| EF-M 15-45mm | L1 reverses at mid; L2/L3/L4 objectward; L5 fixed | L3 imageward |
| EF-S 18-135mm | L2 reverses at mid; other groups objectward; L3/L5 linked | Negative L4 objectward |
| G3 X | B2 imageward; other groups objectward; B3/B5 linked | B6 identified, travel unavailable |
| G9 X | L1 reverses at mid; L2 objectward; L3 imageward; stop independent | Unavailable |

EF-S Fig. 13 appears to transpose the L3/L4 printed labels relative to ¶0088 and the numerical order. Retained the positive-then-negative numerical sequence and the focus arrow next to the negative singlet, documenting the discrepancy. The G3 X drawing's late-tele B6 reversal lacks a numerical keyframe; three-station reconstruction cannot reproduce that small unsampled reversal. No invented keyframe was added.

The screenshot follow-up adds no changelog entry and leaves the existing entry untouched.

### Follow-up verification

- Typecheck, Prettier format check, and ESLint passed.
- Full Vitest run: 296 files / 2,747 tests passed, including four new source-station/dispersion/render regressions.
- All six surface and image-circle audits passed; 90 sampled focus/zoom render states had zero hidden SD trims.
- Glass reports regenerated: 8 files / 15 tests passed; output unchanged. Batch strict coverage remains 76/79, global strict/trusted 7,277/7,820 and 7,292/7,820, with zero catalog-coordinate mismatches. The report classifies dPgF-corrected Abbe dispersion as Abbe, so the G9 X improvement does not inflate coverage.
- Production build passed and prerendered 1,260 routes, including sitemap and RSS generation. Existing chunk-size advisory only.
