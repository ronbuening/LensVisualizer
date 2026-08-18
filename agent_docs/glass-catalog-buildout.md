# Glass Catalog Buildout

A focused follow-up to the chromatic dispersion overhaul. The chromatic ray-trace now consults a Sellmeier glass catalog
at [src/optics/glassCatalog.ts](../src/optics/glassCatalog.ts) when an element's `glass` string resolves to a known
entry after first honoring complete measured `nC`/`nF`/`ng` line-index data authored on the element. Catalog-backed
elements retain authored `dPgF` at the g-line so a patent's partial-dispersion evidence is not replaced by a generic
catalog equivalent. If neither path is available, the engine falls back to partial measured `nC`/`nF` line indices,
dPgF-corrected indices, or the legacy Abbe approximation. Current optics-engine boundaries are summarized in
[architecture/optics-engine.md](architecture/optics-engine.md).

The catalog currently has **530 verified entries** in source as of August 2026. This document is the playbook for further expansion. The bottleneck is not infrastructure — the dispersion engine, resolver, validator, generated reports, and tests are all in place — it is the careful sourcing of published dispersion coefficients.

The August 18, 2026 Phase 106 Nikon screenshot follow-up recovered three more physical-glass surfaces without adding
a catalog row: OHARA S-LAL52 for AF-I 300mm L22, HIKARI E-LAF11 for AF-I 600mm L13, and OHARA S-LAL12 for
DX 18–200mm L41. The selected curves stay within the catalog-compatibility window and leave the production supplier
unspecified. All physical glass media in the six-lens batch now have coefficient-backed curves; only the 18–200mm's two
patented bonded-resin layers remain unresolved. Production ED counts support 12 inferred diagram tags without
inventing patent partial dispersion. Global coverage rises to 6141/6724 strict and 6155/6724 trusted, with zero
catalog-coordinate mismatches; the catalog remains at 530 verified entries.

The August 18, 2026 Phase 105 Nikon AF-I/DX audit added Hikari J-LLF6 from the retained first-party Nikon/Hikari
optical-glass workbook, including its nine-term power-series coefficients and d-line code. The curve resolves L22b in
the new AF-I 400mm and the existing AF-P DX 10–20mm. Five more surfaces in the new AF-I 300mm and DX Micro 40mm
were assigned already-verified J-LAF7, E-LAFH2, NBFD13, BACD4, and M-PCD4 curves after patent-coordinate checks;
all labels retain supplier uncertainty. Within the six-lens batch, these changes add seven strict/trusted surfaces and
bring global coverage to 6138/6724 strict and 6152/6724 trusted. The AF-I 400mm and DX Micro 40mm become
strict-complete, with zero catalog-coordinate mismatches and zero active unreviewed glass dispositions.

The August 18, 2026 Phase 104 patent-table audit assigned existing coefficient-backed curves to 31 more non-air
surfaces across ten lenses: Sigma 85mm DG DN, Zeiss Planar 50mm, Nikon 35–200mm, Leica Elmarit 90mm, Canon
Serenar 85mm, Enna Ultra-Lithagon 28mm, Zeiss Hologon 15mm, Canon New FD 50mm, Samsung 20mm, and Nikon
Nikkor-N 5cm. All ten are now strict-complete. High-resolution inspection of US 2,828,671 also corrected the
Nikkor-N's L3 from OCR-derived `1.7700` to the patent's `1.7170` and restored the printed `r6 = 872.1`; those two
values jointly reproduce the patent's stated component power. No new catalog row or relaxed tolerance was needed,
and production suppliers remain unspecified. Strict coverage rises from 6040/6653 to 6071/6653 and trusted coverage
from 6054/6653 to 6085/6653. Visible strict-complete lenses rise from 353 to 363 and trusted-complete lenses from 358
to 368. The missing-Sellmeier report falls from 89 to 88 affected lens files while retaining 99 explicit unresolved
dispositions and zero active unreviewed rows or catalog-coordinate mismatches.

The August 18, 2026 Phase 103 patent/code audit assigned existing coefficient-backed curves to 21 more elements
across sixteen lenses. The pass also converted Fujifilm GF 20-35mm Table 28 θgF values into authored `dPgF` for
all fourteen elements. No new catalog row was needed: the verified curves already present for S-FTM16, S-TIL6,
J-K3, K5, FF5, J-PSKH8, M-TAFD51, MC-FCD1-M20, S-NBM51, L-LAH85V, N-SK2, S-BAH32, NBFD2, M-TAF401,
J-PSKH4, K10, M-NBF1, H-ZF39, and H-ZBaF4 safely reproduce the reviewed patent coordinates. Catalog-equivalent
labels leave the production supplier unspecified, and authored patent partial dispersion remains authoritative.
Strict coverage rises from 6019/6653 to 6040/6653 and trusted coverage from 6033/6653 to 6054/6653. The visible
strict-complete count rises from 340 to 353 and the trusted-complete count from 345 to 358. The missing-Sellmeier
report falls to 99 explicit unmatched dispositions across 89 affected lens files, with zero active unreviewed rows or
catalog-coordinate mismatches.

The August 18, 2026 Phase 102 patent/code audit added six first-party coefficient rows from retained manufacturer
catalogs: HOYA M-NBF1, C2, and NBFD5; OHARA L-BAL43; and SUMITA K-CSK120(M) and K-VC80(M). It also replaced
the older M-TAFD305 nominal metadata with values evaluated from HOYA's current published polynomial and added the
MC-TAFD305 spelling alias. Nineteen patent rows across Fujifilm, Minolta, Nikon, Panasonic, Pentax, and Sony now use
those curves while preserving their source coordinates, six-digit codes, and supplier uncertainty. A current-catalog
recheck recovered six more surfaces through existing L-LAH85V, J-KZFH4, J-LASFH9, NBFD2, H-LaF3B, and S-LAL52
curves. In total, 25 elements move from Abbe approximations to coefficient-backed tracing. Global strict coverage rises
from 5994/6653 to 6019/6653 and trusted coverage from 6008/6653 to 6033/6653; 340 visible lenses are now
strict-complete and 345 are trusted-complete, with zero catalog-coordinate mismatches.

The pass deliberately leaves weaker matches unresolved. HOYA's retained MC-TAF115 record has internally inconsistent
nominal metadata (`nd = 1.777047`) versus its published polynomial (`nd = 1.770473`), SUMITA K-VC185(M) does not
reproduce the patent partial-dispersion evidence, and the Canon `666356` plus Panasonic `882408`/`769497` rows remain
non-unique. Catalog-equivalent labels never assert a production supplier.

The August 17, 2026 Phase 101 Tamron screenshot follow-up added SUMITA K-CaFK95 from the retained first-party
discontinued-inclusive catalog. The coefficient-evaluated curve is a close, qualified equivalent for B011 L2's
`1.43500 / 95.0` patent coordinate; it raises that lens from 16/18 to 17/18 strict/trusted coverage, leaving only the
unidentified hybrid resin unresolved. Global coverage is now 5994/6653 strict and 6008/6653 trusted, with 334
strict-complete and 339 trusted-complete visible lenses and zero catalog-coordinate mismatches.

The August 17, 2026 Phase 100 Tamron batch audit added first-party formula-3 curves for HOYA PCD4, BAC4, and
TAFD5G plus SUMITA LASFN13 from the retained vendor obsolete/discontinued-inclusive catalogs. Those additions make
the A009 70-200mm strict-complete and recover C001 L9. The pass also removed incorrect `Unmatched` guards from
A001's 18 neutral coordinate classes, assigned existing M-TAF31 to B011 L7, and assigned existing M-PCD4 to C001
L13; all catalog-equivalent labels leave the production supplier unspecified. The audit adds 25 strict surfaces and
21 net trusted surfaces, bringing global coverage to 5993/6653 strict and 6007/6653 trusted. There are now 334
strict-complete and 339 trusted-complete visible lenses, with zero catalog-coordinate mismatches.

The August 16, 2026 Phase 99 screenshot-led Nikon super-telephoto audit added HIKARI J-LLF1 from HIKARI's first-party
2023 optical-glass catalog and its published power-series dispersion coefficients. The new curve resolves the
300mm f/4E PF ED VR's L28 (`548455`). The same audit promoted three already available, coordinate-compatible curves:
J-BK7A for that lens's L14 substrate (`517639`), J-KZFH4 for the 500mm f/4E FL ED VR's L23 (`553551`, retained as a
post-filing catalog equivalent rather than a historical identity), and M-TAF1 for the older 500mm f/4D IF lens's L21
(`773495`). Nikon's official material counts also support inferred ED/APD diagram tags without inventing patent `dPgF`.
The pass adds four strict Sellmeier surfaces and one net trusted surface, makes the modern 500mm strict-complete, and
brings global coverage to 5841/6487 strict and 5855/6487 trusted. There are now 330 strict-complete and 335
trusted-complete visible lenses, with zero catalog-coordinate mismatches.

The August 14, 2026 Phase 98 patent-figure follow-up audited the six-lens Nikon AF/AF-S zoom batch. All 106 physical
glass elements already resolve to coordinate-compatible Sellmeier curves: the 80-200mm, 80-400mm, 70-200mm, and
200-400mm designs are strict-complete, while the 18-35mm and 24-120mm gaps are solely unidentified bonded/compound
resin layers. No responsible optical-glass addition was available, so the catalog remains at 517 verified entries.
Nikon's published ED counts and group placement support 20 inferred ED/APD viewer tags without inventing patent
`dPgF` values or production-melt identities. Global coverage is 5687/6322 strict and 5698/6322 trusted, with zero
catalog-coordinate mismatches.

The August 13, 2026 Phase 97 screenshot-led follow-up made the Sony batch's existing spectral coverage explicit in the
site inspector. Every identified physical glass now names the resolver-selected catalog equivalent while preserving
the patent coordinate and stating that the production supplier is unspecified. Sony's published element counts support
inferred ED tags on DT 16-50mm G10/G12/G15 and E 18-200mm L2/L16; no patent `dPgF` was invented. The audit again
found no responsible catalog expansion: all 42 physical glass media across the three lenses already have trusted
Sellmeier curves, while the four remaining modeled media are unpublished bonded/compound resin layers. Global
coverage therefore remains 5581/6214 strict and 5592/6214 trusted, with 517 verified catalog entries and zero active
unreviewed six-digit rows.

The August 13, 2026 Phase 96 pass audited the three-lens Sony batch. The E 50mm is already strict-complete at 9/9,
and the E 18-200mm OSS LE resolves all 17 physical glass media; only its two unidentified bonded resin layers remain.
The DT 16-50mm G1 patent coordinate `1.84666 / 23.7` is compatible with the existing first-party HIKARI J-SF03
curve (`1.84666 / 23.78`), so that surface now uses the catalog equivalent while leaving the production supplier
unspecified. The DT lens rises from 15/18 to 16/18, with only its two unpublished compound-asphere layers remaining.
No new curve was added: the remaining gaps have no published material identity, and adding a nominal resin or duplicate
six-digit curve would fabricate evidence. Global coverage is now 5581/6214 strict and 5592/6214 trusted, with zero
active unreviewed six-digit rows.

The August 11, 2026 Phase 95 post-commit review rendered four more local patent tables and removed legacy
reference-line guards from four exact native e-line matches: F5 in the Leica Elmar-M 135mm, F2 in the Leica
Elmarit-R 28mm, and SF5 in both the Leica Elmarit-M 135mm and Rodenstock Grandagon-N 65mm. These score 7/10,
7/10, and 8/10 respectively under the Phase 94 rubric: every row gains full spectral fidelity with strong coordinate
evidence, while the shared SF5 curve earns the reuse point. Global coverage is now 5500/6129 strict and 5511/6129
trusted; 30/75 native e-line surfaces resolve by verified names. The modern N-LAF21, N-SF8, and K5 near-matches
remain deferred because their residuals are materially larger than the rows recovered here.

The August 11, 2026 Phase 94 pass added first-party Hikari J-SK14 (`603607`) and J-LASF02 (`800421`) curves from
the retained manufacturer workbook, completing the Nikon AF-S DX 55-200mm. A review of old explicit-unmatched
guards also recovered J-LASFH2 for the Nikon R-UW Micro and eight exact native e-line matches across the Leica
Summicron-R 50mm and Schneider Super-Symmar XL 110mm. Eleven surfaces move from Abbe approximations to full
curves; the Nikon lenses become strict-complete, Schneider rises from 0/6 to 5/6, and Leica rises from 0/6 to 3/6.
Global coverage is 5496/6129 strict and 5507/6129 trusted, with 316 strict-complete and 321 trusted-complete lenses,
zero coordinate mismatches, and zero active unreviewed six-digit rows.

Phase 94 used a 10-point color-accuracy opportunity score: 4 points for spectral-fidelity gain, 3 for source and
coordinate confidence, 2 for completion or a large coverage jump, and 1 for reuse across multiple surfaces or files.

| Improvement | Score | Result |
|---|---:|---|
| Hikari J-SK14 + J-LASF02 catalog expansion | 10/10 | Two first-party curves; Nikon 55-200 moves 11/13 → 13/13 |
| Nikon R-UW Micro J-LASFH2 recovery | 9/10 | Exact named coordinate; lens moves 9/10 → 10/10 |
| Schneider native e-line recovery | 9/10 | Five exact C′/e/F′ matches; lens moves 0/6 → 5/6 |
| Leica Summicron-R native e-line recovery | 9/10 | Three exact C′/e/F′ matches; lens moves 0/6 → 3/6 |
| Deferred Leica N-LAF21-class pair | 6/10 | Useful two-surface completion opportunity, but the modern curve is only a near match |
| Deferred N-SF8-class e-line rows | 5/10 | Several useful surfaces, but the modern curve's e-line residuals exceed this pass's exact-match tier |
| Deferred Rodenstock K5-class pair | 5/10 | Two surfaces, but the modern curve misses the patent e-line Abbe number by 0.17 |
| Deferred Schneider KF9 row | 4/10 | Would complete one lens, but no compatible sourced curve is in the local catalog |

The August 11, 2026 Phase 93 pass replaced the legacy cross-vendor aliases for Hikari J-SF1, J-SF6, J-SF10, and
J-SF11 with their first-party nine-term power-series rows. Patent Table 4 for the Nikon AI AF Zoom-Nikkor 80-200mm
f/2.8D ED supports assigning the compatible J-SF6 curve to L7 and L14, and JP H9-105860 Example 1 supports assigning
Hikari E-LAF11 to the Nikon Dodotto 400 L2. The PC-E Micro-Nikkor 45mm L12 documentation was also corrected to reflect
its already coefficient-backed E-LAF11 match. Global coverage is 5485/6129 strict and 5496/6129 trusted, with 314
strict-complete and 319 trusted-complete lenses, zero coordinate mismatches, and zero active unreviewed six-digit rows.

The August 11, 2026 Phase 92 pass revisited legacy six-digit coordinates against fourteen ignored local patent PDFs
and HOYA's official 2026-07-07 obsolete-inclusive Zemax catalog. Eight recovered formula-3 rows — NBFD2, BACED1,
PC1, PC2, F7, FL4, FL1, and BAFD3 — plus existing J-LAFH3 and E-FD13 models upgrade twenty-two surfaces.
Seven lenses become strict-complete: Nikon AI Zoom 35-105mm and AF Micro 200mm; Olympus 28mm f/2; Enna
Lithagon 35mm; Agfa Solagon 50mm; Canon Serenar 28mm; and Carl Zeiss Jena Tessar 50mm. Global coverage is
5482/6129 strict and 5493/6129 trusted, with 313 strict-complete and 318 trusted-complete lenses, zero coordinate
mismatches, and zero active unreviewed code-only rows. Every optical-equivalent label leaves the production supplier
unspecified.

The August 11, 2026 Phase 91 pass revisited the near-complete visible-lens queue against seven ignored local patent
PDFs and current coefficient rows. Patent triple or native-line matches assigned FCD515, PBH25, S-TIL6, S-LAL52,
D-K59, J-SFH2, and FEL3 equivalents across eight surfaces. Seven lenses become strict-complete; the Nikon 20-35mm
improves to 13/14 with only its unrelated L31a glass still unmatched. Global coverage is 5460/6129 strict and
5471/6129 trusted, with 306 strict-complete and 311 trusted-complete lenses, zero coordinate mismatches, and zero
active unreviewed code-only rows. Every catalog-equivalent label leaves the production supplier unspecified.

The August 11, 2026 Phase 90 pass audited the twelve active Minolta six-digit glass opportunities against four ignored
local patent PDFs. Existing FF8, K-SSK1, N-SK16-family, S-LAL58, and N-KZFS8 curves upgrade five surfaces while
leaving every production supplier unspecified. The seven coordinates outside the compatibility guard now carry
explicit unmatched dispositions, including all newly added `493836` occurrences. The active unreviewed queue is empty;
global coverage is 5452/6129 strict and 5463/6129 trusted, with 299 strict-complete and 304 trusted-complete lenses and
zero coordinate mismatches.

The August 10, 2026 Phase 89 pass audited the six-lens Tamron batch and added three first-party HOYA
curves from the manufacturer's 2026-07-07 obsolete-inclusive Zemax catalog: discontinued TAF3,
M-PCD4, and MC-FCD1-M20. The existing OHARA S-LAL19 row was verified against the manufacturer's
2025 detailed datasheet and gained its exact `729541` code. Five newly added Tamron media move to
coefficient-backed tracing; the A005 70-300mm and A069 50-300mm prescriptions become strict-complete,
while each remaining gap in the other four lenses is an unidentified bonded aspheric layer. Global
coverage is now 5395/6064 strict and 5406/6064 trusted; 298 lenses are strict-complete and 303 are
trusted-complete, with zero coordinate mismatches.

The August 8, 2026 Phase 88 pass audited the six-lens Nikon/Ricoh batch and added eight first-party curves:
Hikari J-SF7, J-SF03, J-LASF015, and J-LASFH21 from Nikon/Hikari's 2023 workbook, plus OHARA L-LAH87,
L-LAH94, S-TIH57, and S-TIM1 from the manufacturer's 2026 all-products Zemax catalog. Compatible existing
curves were also assigned to rounded patent coordinates in both Nikon zooms while every production supplier remains
explicitly unidentified. Twenty-one newly added surfaces move to coefficient-backed tracing; the Ricoh A16 and GR
DIGITAL III prescriptions become strict-complete, and the Z 20mm reaches 14/15 with only its unmatched resin layer
remaining. Global coverage is now 5288/5952 strict and 5299/5952 trusted; 296 lenses are strict-complete and 301 are
trusted-complete, with zero coordinate mismatches and zero active unreviewed code-only rows.

The August 8, 2026 Phase 87 follow-up recovered legacy SUMITA SK1 from an independently retained catalog record. Its
six-term Schott-form polynomial reproduces the archival manufacturer's published C/d/F/g line indices to the shown
precision and exactly matches the `1.61025 / 56.5` coordinate in the Pentax Super-Takumar 135mm f/2.5 patent design.
The lens now has coefficient-backed dispersion on all five elements while the production supplier remains unspecified.
The same pass rechecked the other unresolved coordinates in the six-lens Pentax batch against the available current and
discontinued records from the six tracked vendors; only non-exact or non-unique neighbors were found, so those explicit
unmatched classifications remain.

The August 7, 2026 Phase 86 pass added seven first-party vendor curves: OHARA L-LAH91, L-LAH84, PBH25, YGH52,
and BAM25, plus HOYA BACD6 and FL57. Compatible existing M-TAF1, M-TAFD51, and N-BAK4 curves raise twelve
patent-derived prescriptions by thirteen surfaces while leaving every production supplier unspecified. Nine lenses become
fully strict-covered: Canon RF 24-105mm f/4 L; Sigma 20mm f/1.4 Art and 50mm f/1.4 DG DN Art; Voigtländer Nokton
50mm f/1.0; Olympus 55mm f/1.2 and 8mm f/2.8 fisheye; Nikon Auto Zoom 80-200mm f/4.5 and AI Zoom 25-50mm
f/4; and Schneider Super-Angulon 75mm f/5.6. Global coverage rises from 5153 to 5166/5814 strict and from 5164
to 5177/5814 trusted; 290 lenses are strict-complete and 295 trusted-complete, with zero coordinate mismatches. A
parallel official-catalog audit records explicit no-match dispositions for the Nikon 180-400mm's nine remaining
six-digit classes, leaving no active unreviewed code-only rows.

The August 7, 2026 Phase 85 pass continued through the visible-lens opportunity queue and recovered eight exact legacy
HOYA curves from the manufacturer's official obsolete-inclusive Zemax catalog: BAF5, FEL3, CF2, FD3, FC3, BSC6,
BAF22, and LAFL4. Existing P-SK57Q1, J-KZFH4, K10, FCD515, and BAF12 rows complete the source-verified matches.
Fourteen surfaces gain coefficient-backed chromatic dispersion, completing eleven more lenses: Panasonic S Pro
70-200mm f/2.8, Nikon Z 50mm f/1.2, AI 35mm f/1.4, and AI 135mm f/2, Canon FD 28mm f/2.8 and Serenar 100mm
f/3.5, both 75mm and 90mm Super-Angulons, Olympus 50mm f/2 Macro, and the Vivitar Series 1 200mm and 35-85mm.
Global coverage rises from 5139 to 5153/5814 strict and from 5150 to 5164/5814 trusted; 281 lenses are now
strict-complete and 286 trusted-complete, with zero coordinate mismatches.

The August 7, 2026 Phase 84 pass audited the near-complete visible-lens queue against the ignored local patent PDFs.
Exact or rounded-coordinate catalog equivalents complete the Canon Serenar 50mm f/1.8, Nikon L35AF 35mm f/2.8,
Sigma DP3 Merrill 50mm f/2.8, Sigma 35mm f/1.4 DG DN Art, Sony Planar T* 50mm f/1.4 ZA SSM, and Sony
Sonnar T* E 24mm f/1.8 ZA. The Voigtländer Nokton 50mm f/1.0 gains an exact J-KZFH4 curve while its
non-identical 808406 rear glass remains unmatched. The pass also adds legacy Schott K10 from the manufacturer's
official 2014 datasheet, completing the Carl Zeiss B-Distagon 35mm f/4 and Olympus F.Zuiko Auto-T 200mm f/5 as
catalog side effects. Global coverage rises from 5123 to 5139/5814 strict and from 5134 to 5150/5814 trusted;
270 lenses are now strict-complete and 275 trusted-complete, with zero coordinate mismatches.

The August 7, 2026 Phase 83 ambiguity audit compared every multi-candidate annotation with authored patent spectral
evidence. The runtime now keeps a d-line element's authored `dPgF` authoritative at g even when a compatible catalog
curve supplies C/d/F; 127 currently ambiguous elements benefit from that safeguard, while another 138 carry complete
C/F/g indices and already bypass catalog dispersion. Local patent tables resolve three stale labels: Canon EF-M 32mm
L5 now uses the FCD515 coefficient curve that reproduces θgF = 0.5441, Panasonic S Pro 50mm L1 uses the
partial-dispersion-compatible E-FDS1 representation of its 923209 row, and Sigma APO Macro 180mm L11 uses N-BK7,
whose C/F/g curve reproduces the patent line indices. The production supplier remains unspecified in every
catalog-equivalent label. Coverage remains 5123/5814 strict and 5134/5814 trusted, with zero coordinate mismatches.

The August 6, 2026 Phase 82 pass revisited all three Angénieux prescriptions. Sumita K-SFLD11 and SSK2 were
recovered from the manufacturer's discontinued-inclusive 2025 all-glass catalog, and Schott P-LASF47 was added from
the official March 2018 collection datasheet. Class-consistent existing curves completed the remaining elements while
every label preserved the patent coordinate and left the production supplier unspecified. The R1 rose from 0/6 to
6/6, the R11 from 4/6 to 6/6, and the DEM 180mm APO from 4/8 to 8/8 strict/trusted coverage. A follow-up claim review
kept L2 as the patent-required ED/APD element but moved the ambiguous `806409` L5 row to the normal-dispersion
S-LAH53 curve; the P-LASF47 row remains available for explicitly identified glasses. Regenerated global coverage is
5085/5774 strict and 5096/5774 trusted, with zero catalog-coordinate mismatches.

The August 6, 2026 Phase 81 pass added seven first-party curves from Hikari's June 2025 optical-glass catalog:
J-BAF10, J-SK16, J-F5, J-SF8, J-LAF2, J-LAF7, and J-LASFH2. These close every named-glass gap in the new
Nikon AF-S Fisheye 8-15mm and AF DC-Nikkor 135mm prescriptions. Compatible existing Hikari curves also classify
four previously code-only glasses in the AF Fisheye-Nikkor 16mm and the repeated SK16-family rows in the Angénieux
R11, with every annotation leaving the production supplier unspecified. The three new Nikon prescriptions are now
fully strict-covered; regenerated global coverage is 5072/5774 strict and 5083/5774 trusted, with zero catalog
coordinate mismatches.

The August 5, 2026 Phase 80 pass audited six newly added vintage Voigtländer prescriptions. Schott LF5 and Ohara
FTM8 were added from their vendor Zemax catalogs as mirrored by refractiveindex.info; the LF5 coordinate duplicates
HOYA E-FL5's six-digit code, so the resolver explicitly preserves E-FL5 as the code-only winner while direct `LF5`
labels select Schott. Compatible catalog equivalents raise the Color-Heliar from 2/5 to 5/5, Color-Skopar from 1/4
to 4/4, Nokton from 4/7 to 7/7, and Telomar from 3/5 to 5/5 strict coverage. The Dynar and second-asymmetric Heliar
remain 0/5 because their patents publish only historical D/G′ pairs, which cannot support modern Sellmeier assignments.
Regenerated global coverage is 5031/5721 strict and 5042/5721 trusted, with zero catalog-coordinate mismatches.

The August 4, 2026 Phase 79 pass audited the three new Samsung primes and added HOYA MP-LAC8-30 from the
manufacturer's 2017 Zemax catalog mirrored by refractiveindex.info. Its formula-3 polynomial supplies a compatible
curve for the 45mm f/1.8's `1.71390 / 53.2` L2 position; existing Hikari Q-LASFPH3S supplies the adjacent
`1.79824 / 45.1` L3 curve. Both are labeled as optical equivalents with the production supplier unspecified. The
20mm remains 5/6 covered and the 30mm remains 4/5 covered; the 45mm rises from 3/7 to 5/7. The remaining three
Samsung gaps have no uniquely defensible public coefficient source. Regenerated global coverage is 5007/5690 strict
and 5018/5690 trusted, with zero catalog-coordinate mismatches.

The August 3, 2026 Phase 78 pass added five exact Hikari curves from Nikon/Hikari's first-party 2023-09-01
optical-glass workbook while auditing the AF-S NIKKOR 180-400mm f/4E TC1.4 FL ED VR: J-SK12, J-LAK14,
J-LAK18, J-LASF016, and J-LASFH24. The TC-out prescription rises from 14/27 to 19/27 strict and trusted coverage;
the TC-in configuration rises from 19/35 to 25/35 because J-LAK18 appears in both the master lens and converter.
The recovered J-LASFH24 curve also closes the previously reviewed `902253` gap in the NIKKOR Z DX 50-250mm,
making that lens fully catalog-covered. The regenerated catalog totals are 4993/5672 strict and 5004/5672 trusted,
with zero catalog-coordinate mismatches.

The August 3, 2026 Phase 77 pass added Hikari J-KZFH4 from Nikon/Hikari's first-party 2023-09-01 optical-glass data
workbook while auditing the two new Nikon supertelephoto zooms. The exact vendor power-series row resolves the AF-S
180-400mm's 1.55298/55.07 focus-group element; compatible existing J-SFH1, S-LAM2, and FDS24 rows resolve three more
elements, raising that lens from 16/26 to 20/26 strict and trusted coverage. Exact HOYA TAF3D raises the NIKKOR Z
180-600mm from 24/26 to 25/26; only its optical-resin layer remains outside the glass catalog. Regenerated global
coverage is 4963/5636 strict and 4974/5636 trusted, with zero catalog-coordinate mismatches.

The August 3, 2026 Phase 76 pass added seven first-party Hikari curves while auditing the Nikon AF-S NIKKOR 500mm
f/5.6E PF ED VR: J-KZFH1, J-LASF08A, J-SF2, J-LASF09A, J-F2, J-LF7, and J-LF5. The June 2025 vendor catalog's
power-series coefficients raise the audited Hikari-name prescription from 10/21 to 19/21 strict coverage; its direct
line indices already supplied 19/21 trusted coverage. Relative to the pre-audit committed prescription, strict and
trusted coverage both rise from 17/21 to 19/21. Only the two explicitly proprietary bonded PF materials remain on the
patent-derived fallback. The same audit corrected its display name and reduced APD classification from every modeled
medium to the anomalous PF material and three production-correlated ED elements. Regenerated global coverage is
4918/5584 strict and 4929/5584 trusted, with zero catalog-coordinate mismatches.

The August 2, 2026 Phase 75 pass audited the three newly integrated Voigtländer lenses against the retained vendor
catalogs. Compatible existing rows now identify the optical equivalents that were previously left as numeric classes,
while still leaving each production supplier unspecified. SCHOTT P-SK60 was the one recoverable catalog gap: its
official coefficients exactly reproduce the Color-Skopar 28mm's final `1.61035 / 57.90` aspherical element. The new row
raises that lens from 5/7 to 6/7 strict coverage; its remaining constant-index element lacks a published Abbe number.
The Nokton 60mm also rises from 2/11 to 6/11 strict coverage by naming four compatible existing HOYA curves. The
APO-Skopar 90mm remains fully covered at 7/7, now with explicit source-qualified optical-equivalent labels.

The August 1, 2026 Phase 74 pass audited the three newly integrated Voigtländer VM primes against current first-party
vendor catalogs. The APO-Lanthar 50mm and Nokton 75mm already resolve every element through compatible
coefficient-backed coordinate classes. The Nokton Vintage Line 50mm retains three explicit unmatched patent glasses,
but its named final-element material, OHARA L-TIM28P, was a recoverable gap. OHARA's 2026-07-01 all-products AGF
supplies the special-order glass's exact Sellmeier curve, which reproduces the lens's independently stored C/d/F/g
indices. Adding that row raises the lens from 4/8 to 5/8 strict coverage without changing its 5/8 trusted coverage.
Global coverage is now 4878/5538 strict and 4889/5538 trusted, with zero catalog-coordinate mismatches.

The August 1, 2026 Phase 73 pass added exact first-party curves for CDGM H-K9LGT and Hikari J-PSKH8 while auditing
the three new Voigtländer lenses. H-K9LGT's June 2022 vendor Sellmeier row separates the exact `GT` type from the
existing H-K9L row even though both share the 517642 d-code and coefficients. Hikari's 2022-07-01 J-PSKH8 data sheet
supplies the nine-term power series for the APO-Lanthar 28mm's 628592 element. That lens rises from 10/12 to 11/12
strict catalog coverage and remains 12/12 with its measured line indices; only the explicitly unmatched 806407 L16
class lacks a compatible public coefficient row. Global coverage is now 4858/5515 strict and 4869/5515 trusted,
with zero catalog-coordinate mismatches.

The July 31, 2026 Phase 72 pass added HOYA FD225 from the manufacturer's official 2026-07-07 Zemax catalog. Its
vendor formula-3 polynomial reproduces the published C/d/F/g indices and 22.76 Abbe number. The Voigtländer
Color-Skopar 35mm f/3.5 Aspherical replacement now uses coefficient-backed catalog dispersion on five of its six
elements; only the patent's unmatched 613443 negative anomalous-dispersion class remains on the fallback path. Adding
the real FD225 row also exposed and removed a stale Sony FE 70-200mm f/2.8 GM OSS II assignment: that lens's
2.00912/29.10 rear glass is now explicitly unmatched because it is incompatible with FD225 and has no catalog candidate.

The July 31, 2026 Phase 71 pass added Hikari J-SF14 from Nikon/Hikari's official 2023-09-01 optical-glass data
workbook. Its vendor nine-term power-series curve reproduces the published C/d/F/g indices and `26.58` Abbe number,
upgrading the Voigtländer Ultron 27mm f/2 from measured-line-only coverage to strict catalog dispersion on all six
elements.

The July 31, 2026 Phase 70 pass added SUMITA K-LaSFn23 from the manufacturer's Ver. 14.01.00 per-glass datasheet.
Its formula-3 polynomial reproduces the published `nC = 1.90341`, `nd = 1.91100`, `nF = 1.92928`, and
`ng = 1.94437` row. The Panasonic LUMIX S PRO 16-35mm f/4 L12 annotation now uses it as a catalog equivalent while
retaining the patent's `nd = 1.91082` and leaving the production supplier unspecified. That lens's strict and trusted
coverage rose from 4/13 to 5/13 surfaces; the regenerated catalog totals are 4814/5469 strict and 4824/5469 trusted.

The July 30, 2026 Phase 69 pass corrected the opportunity reports' review and material semantics. Explicit
`Unmatched`, `Unknown`, `Proprietary`, and `Unidentified` annotations now count as self-recording review
dispositions, closing the 52 rows that previously appeared as recordkeeping-only follow-ups despite already
containing their disposition in lens data. The 260-row six-digit missing-Sellmeier inventory now reports zero active
unreviewed rows, 113 explicit dispositions, and zero dispositions without a review record. Near-complete visible
lenses are also split into true glass opportunities and non-glass or mixed-material gaps, with resin, cement, plastic,
and other optical media labeled per surface. The resulting queue contains 85 glass-only lenses and 40 non-glass or
mixed-material lenses. Optical coverage is unchanged at 4715/5360 strict and 4725/5360 trusted.

The July 30, 2026 Phase 68 pass closed the named-token opportunity queue. Eight first-party rows were added:
Hikari J-LAF04; OHARA S-BAL50; HOYA FCD600 and NBFD26; and CDGM H-BaF6, H-K9L, H-ZF1, and H-LaF6LA.
Forty-one element annotations were then checked against their stored coordinates. Compatible rows received explicit
catalog-equivalent labels with the production supplier unspecified; incompatible names were replaced by safer
equivalents or explicit unmatched dispositions. The named-token queue fell from 41 distinct tokens to zero, strict
coverage rose to 4715/5360 surfaces, trusted coverage rose to 4725/5360, and fully covered lens counts rose to
235 strict / 239 trusted.

The July 30, 2026 Phase 67 pass audited five unresolved OHARA-style names whose official catalog coordinates do not
match the patent rows. Rendered or primary-text prescription checks confirmed six elements across Sony, Hasselblad,
Panasonic, and Nikon. Existing coefficient-backed equivalents safely cover every row: L-LAH85V for two Sony
`1.85659 / 40.1` elements, E-FD8 for Hasselblad `1.68863 / 31.2`, M-TAF1 for Panasonic `1.77074 / 49.5`,
M-BACD12 for Panasonic `1.58313 / 59.5`, and M-TAF401 for Nikon `1.77503 / 47.3`. Each label now states that the
production supplier is unspecified. Strict/trusted coverage rose to 4676/4688 surfaces, fully covered lens counts rose
to 228/233, and the named-token queue fell to 41 elements across 41 distinct tokens.

The July 30, 2026 Phase 66 pass cleared the final active six-digit source blocker. A rendered primary scan of
US 4,025,167 Embodiment 2 confirms Olympus 85-250mm L4/L7 at `1.56873 / 63.2` and L10 at `1.49831 / 65.0`.
OHARA's official 2026-07-01 all-products AGF retains exact discontinued BAL22 (`569632`) and BSL3 (`498650`)
formula-3 rows. Both polynomials were added and applied as catalog equivalents with production supplier unspecified.
The lens is now 15/15 strict and trusted; global coverage rose to 4670/4682 surfaces, fully covered lens counts rose
to 227/232, and the prioritized six-digit source-review queue is empty.

The July 30, 2026 Phase 65 pass rendered US 5,734,508 Working Example 1 / Table 1 and confirmed Nikon AF 24-120mm
L3R3 at `1.83400 / 37.4`. Legacy HOYA NBFD10 (`1.83400 / 37.34`) is the closest coefficient-backed row; SUMITA
K-LaSFn14 and OHARA S-LAH60 independently confirm the same family. L3R3 now uses NBFD10 as a catalog equivalent
with production supplier unspecified. Strict/trusted coverage rose to 4667/4679 surfaces, and the active
source-review queue now contains only three Olympus elements across two code families.

The July 30, 2026 Phase 64 pass rendered JP 2023-039817 A Example 2 / Table 6 and confirmed Sony FE 70-200mm GM II
L41 under explicit d-line headings at `1.79191 / 25.7`. No first-party coefficient row is compatible at the d line.
Hikari J-SF11's superficially matching `1.791929` value is its e-line index; its d-line index is `1.784720`, so
substituting that curve would mix reference systems. L41 is now explicitly unmatched on the patent Abbe fallback.
Coverage remains 4666/4678 strict/trusted surfaces, and the active source-review queue is four elements across three
code families.

The July 30, 2026 Phase 63 pass rendered WO 2021/200206 A1 Example 2 / Table 6 and confirmed Sony FE 12-24mm L22
at `1.67764 / 32.2`. No first-party coefficient row lies inside the compatibility window; the SF5/N-SF5 family is
about `0.0049` too low in d-line index. The unsupported Schott-family attribution was removed, leaving an explicit
unmatched `678322` annotation on the patent Abbe fallback. Coverage remains 4666/4678 strict/trusted surfaces, and
the active source-review queue is five elements across four code families.

The July 30, 2026 Phase 62 pass confirmed Pentax HD DA* 11-18mm L14's `1.54732 / 46.0` coordinate in rendered
US 2018/0164556 A1 Table 1. OHARA PBL1/S-TIL1, HOYA E-FEL1, Schott LLF1, and SUMITA LLF1 all publish the same
coefficient-backed family near `1.54814 / 45.8–45.9`; their evaluated trace-line curves are materially
interchangeable. L14 now uses the closest-Abbe HOYA E-FEL1 row as a catalog equivalent while leaving the production
supplier unspecified. Coverage rose to 4666/4678 strict/trusted surfaces, and the active source-review queue is six
elements across five code families.

The July 30, 2026 Phase 61 pass rendered DE 1 228 820 B's sole claim table and confirmed Enna Lithagon 24mm L4 at
`1.51895 / 57.3`. Because the patent publishes no supplier, catalog name, line index, or partial dispersion, nearby
coefficient-backed OHARA, HOYA, and SUMITA crowns cannot be distinguished safely. The unsupported K4-family wording
was replaced with an explicit unmatched `519573` crown annotation while preserving the patent Abbe fallback. The
generated-report patent parser was also corrected for internally spaced legacy publication numbers. Coverage remains
4665/4677 strict/trusted surfaces, and the active source-review queue is seven elements across six code families.

The July 30, 2026 Phase 60 pass recovered SUMITA K-SKLD5(M), a molding-state coefficient row whose published
`1.58606 / 61.0` coordinate safely reproduces both `586609` substrates in Pentax DA* 16-50mm Embodiment 6. The
vendor polynomial round-trips to `1.586058 / 60.977`; its reused base-glass product code is deliberately omitted from
the runtime entry so bare `589612` remains bound to its established coordinate. L32 and L44 now use explicit
catalog-equivalent names with the production supplier unspecified. Strict/trusted coverage rose to 4665/4677 surfaces,
and the active source-review queue fell to eight elements across seven code families.

The July 30, 2026 Phase 59 pass cleared both Tier-A source reviews. Pentax FA 31mm code `728403` was rechecked across
all three patent embodiments, and Sony Planar FE 50mm code `995293` was confirmed in a rendered Example 2 / Table 6.
Neither has line-index or partial-dispersion data, and the nearest reviewed first-party coefficient rows miss the
runtime d-line index guard. Both elements now carry explicit unmatched annotations; Sony's unsupported CDGM H-ZLaF92
and composition claims were also removed. The active source-review queue is now 10 elements across eight code
families, with no Tier-A rows remaining and both prescriptions preserving their patent Abbe fallbacks.

The July 30, 2026 Phase 58 pass turned the remaining six-digit inventory into an execution queue instead of a
frequency list dominated by already-reviewed rows. Of 267 code-only elements still missing Sellmeier data, 12 are
active unreviewed rows, 52 already carry an explicit unmatched/unidentified disposition but lack a sidecar or
companion-audit hit, and the other 203 have recorded reviews. The generated missing-Sellmeier report groups the 12
active rows into 10 code families and ranks them A-E by visible-lens completion impact, near-complete impact, repeated
surface reach, and local patent availability. Two A-tier codes have a local patent and could each complete one visible lens if a
source-verified identity or measured line data is found; reviewed and explicitly disposed rows remain in the full
inventory but cannot crowd those targets out of the active queue.

The July 30, 2026 Phase 57 pass added genuine native e-line compatibility. Catalog coefficients are evaluated at
C′/e/F′ for `indexReference: "e"` rows, while six-digit codes stay d-line-only and explicit `Unmatched` annotations
remain closed. Sixteen of 75 protected e-line surfaces now use name-verified catalog Sellmeier curves across Leica,
Nikon, and Rodenstock prescriptions. The physical chromatic trace still evaluates those curves at the shared C/d/F/g
wavelengths; unmatched e-line fallbacks continue to retain authored ne in their reference channel. Coverage is now
4663 / 5360 strict (87.0%) and 4675 / 5360 trusted (87.2%), with 226 fully strict and 231 fully trusted lenses.

The July 30, 2026 Phase 56 pass added three first-party rows: Hikari J-BAF3 from the 2023 optical-glass catalog and
CDGM H-ZF2/H-ZLaF75B from rendered vendor datasheets. The bare historical `BAF3` token now aliases to J-BAF3,
while the established `673322` code-only precedence remains unchanged for cross-vendor compatibility. Fujifilm GF
120mm L14 was corrected from the nonexistent S-LAH85V name to a compatible L-LAH85V catalog-equivalent annotation
with the production supplier unspecified. Four surfaces gained strict/trusted dispersion, completing the Nikon AF
20mm f/2.8D, Fujifilm GF 120mm, and Laowa 24mm Probe. Coverage is now 4647 / 5360 strict (86.7%) and 4659 /
5360 trusted (86.9%), with 226 fully strict and 231 fully trusted lenses.

The July 30, 2026 Phase 55 pass made reference-line compatibility explicit. `ElementData.indexReference` now records
whether the historical `nd` / `vd` slots contain ordinary d-line coordinates or retained patent `ne` / `νe` values.
The runtime resolver, mismatch/candidate scans, ambiguity report, consolidated opportunity report, and coverage report
all exclude native e-line elements from the d-line catalog safety net; the element inspector and Abbe map also display
the authored d/e reference. Seventy-five surfaces across twelve audited
prescriptions are now protected structurally, including three verified rows in the otherwise mixed Sony FE 14mm
table. This removed sixteen previously counted d-line Sellmeier substitutions without reducing the number of fully
covered lenses. Honest coverage is 4643 / 5360 strict (86.6%) and 4655 / 5360 trusted (86.8%), with 223 fully strict
and 228 fully trusted lenses.

The July 30, 2026 Phase 54 pass recovered five compatible equivalents already present in the catalog. Nikon AF
35-70mm f/2.8D L2/L3 now use discontinued OHARA S-LAL52: the row is inside the d-line coordinate window and
reproduces the patent's independent g-line index within 0.00017. Canon EF 11-24mm E2/E3 now use OHARA S-BAL42
and HOYA M-TAFD305 after the rendered patent confirmed d-line coordinates and matching prescription rows. Sigma
85mm f/1.4 Art L9 now uses HOYA TAF3D, whose exact `1.80420 / 46.50` coordinate and computed PgF of 0.55724
reproduce the patent's 0.5571 value; the prior TAF105 label referred to a different glass. All three lenses are now
fully covered. Coverage is 4659 / 5360 strict (86.9%) and 4671 / 5360 trusted (87.1%), with 223 fully strict and
228 fully trusted lenses.

The July 30, 2026 Phase 53 pass added nine exact legacy SUMITA rows from the vendor's discontinued-inclusive
all-glass catalog: BAK2, BK4, F4, KF8, BAK1, F3, BAF12, LAFN10, and K-LaSKn1. The new coefficient rows upgrade
eleven surfaces across eight audited prescriptions, with Fujifilm XF 23mm f/1.4 R LM WR, Olympus Zuiko Auto-Zoom
65-200mm f/4, and Olympus G.Zuiko Auto-W 21mm f/3.5 becoming fully covered. A pre-existing Pentax `BaK2-class`
comparison was made explicitly unmatched because its distinct `544601` coordinate is outside the SUMITA BAK2
safety window. Coverage is now 4654 / 5360 strict (86.8%) and 4666 / 5360 trusted (87.1%), with 220 fully strict
and 225 fully trusted lenses.

The July 30, 2026 Phase 52 pass recovered SUMITA BALK3, KF3, and LLF4 from the vendor's discontinued-inclusive
all-glass AGF. Their coefficient rows resolve thirteen surfaces across the `518603`, `515546`, and `561453`
coordinate families; independent line-index anchors also confirm BALK3 at the mercury-g line and LLF4 at the
helium-e line. Four more surfaces now use safe catalog equivalents already in source: HOYA MC-TAF101-100 for Sony
`770494`, OHARA S-LAM2 for Olympus `744447`, and OHARA S-LAL52 for two Nikon `670576` rows. Canon `534555`,
Fujifilm `685309`, Nikon `902253`, Olympus `683447`, and Sony's e-line `856401` case were explicitly audited without
forcing unsafe nearest neighbors. Coverage is now 4643 / 5360 strict (86.6%) and 4655 / 5360 trusted (86.8%), with
217 fully strict and 222 fully trusted lenses.

The July 30, 2026 Phase 51 pass added two first-party legacy rows: SUMITA SK3 from the vendor's discontinued-inclusive
all-glass AGF and CDGM H-ZBaF4 from the vendor's June 2022 optical-glass datasheet. SK3 upgrades the matching
Rodenstock Grandagon-N 75mm and 90mm elements, adding two strict Sellmeier surfaces and one net trusted surface
because the 75mm row already carried measured C/F/g indices. H-ZBaF4 was deliberately not assigned to Canon's nearby
`1.66565 / 35.6` glass: CDGM publishes `ΔPgF = +0.0042`, while the Canon patent gives approximately `-0.0026`.
The Canon RF 20mm rows are now explicitly unmatched, and the RF 50mm code `666356` was also reviewed and rejected
for the same sign conflict. Coverage is now 4626 / 5360 strict (86.3%) and 4639 / 5360 trusted (86.5%).

The July 30, 2026 Phase 50 pass recovered four exact-coordinate catalog-equivalent groups already covered by the
414-entry catalog. Nikon's `834373` rows now use HOYA NBFD10 or M-NBFD10 according to their exact patent
coordinates; Laowa's two unsupported H-ZLaF4A supplier labels now use HOYA TAFD5F; and the Canon Serenar 28mm's
historical F7 label now uses HOYA E-F8. Every annotation leaves the production supplier unspecified. The pass added
four net strict and trusted surfaces because one Nikon code row was already resolving through duplicate-code matching,
bringing coverage to 4624 / 5360 strict (86.3%) and 4638 / 5360 trusted (86.5%). The Nikon AF-S 200-500mm is now
fully covered.

The July 30, 2026 Phase 49 pass audited six recurring patent coordinate families. Existing catalog rows safely cover
three of them: six Nikon `797454` elements now use Hikari J-LASF017, five Canon/Olympus `773497` elements use
Schott N-LAF34, and three vintage Zeiss `672472` elements use Schott N-BAF10. Every relabel is explicitly a catalog
equivalent with the production supplier unidentified. Olympus `504668`, Nikon `748523`, and Sony `961323` remain
unmatched because their nearest public coefficient rows miss the d-line tolerance. The pass added fourteen strict and
trusted surfaces, bringing coverage to 4620 / 5360 strict (86.2%) and 4634 / 5360 trusted (86.5%), without expanding
the 414-entry catalog.

The July 30, 2026 Phase 48 pass audited the unsafe `S-NPH7`, plain `H-LAF3`, and `H-LAK53A` annotations one row at a
time. Six exact-coordinate rows now use existing coefficient-backed equivalents: TAFD40 (001255), S-LAH99
(001291, also selected by patent partial dispersion), historical PBH21 (923209), N-LASF44 (804465), N-LAK33B
(755523), and TAC8 (729547). The Sony `2.00009 / 16.5` and Nikon `1.82080 / 42.51` rows are explicitly unmatched
because no public coefficient row reproduces their patent coordinates closely enough. Strict coverage rose from 4600
to 4606 surfaces and trusted coverage from 4614 to 4620 without expanding the 414-entry catalog.

The July 30, 2026 Phase 47 pass recovered four legacy-name elements through existing coefficient-backed catalog
equivalents. Two historical Schott `SK18` rows in the Canon Serenar 50mm f/1.8 now use SUMITA K-SK18, and two
`F8`-coordinate rows use HOYA E-F8. Each annotation leaves the patent supplier unspecified. The Nikon Ultra-Micro
29.5mm's e-line F8-class row was explicitly marked unmatched so a d-line catalog model cannot be applied accidentally.

The July 29, 2026 Phase 46 pass audited the three highest-frequency remaining six-digit families. Ten Minolta
`670571` elements now use discontinued OHARA S-LAL52 as a coefficient-backed catalog equivalent: the official
all-products row has the same d-line index (`1.669999` versus patent `1.67000`) and only `+0.258` higher Abbe number.
The annotations explicitly leave the production supplier unspecified. Nikon `796409` (seven elements) and Minolta
`493836` (six elements) remained unresolved after that pass's patent-row checks and searches of official OHARA, HOYA,
Hikari, and Sumita coefficient data; neither family was forced to a nearest neighbor. Phase 92 later recovered Nikon
`796409` through legacy HOYA NBFD2. Strict coverage increased from 4586 to
4596 surfaces, trusted coverage from 4600 to 4610, and one additional lens became fully covered in each measure.

The July 29, 2026 Phase 45 pass added seven direct vendor rows: Hikari J-BK7A; SUMITA K-LaFK50, K-BaSF5,
K-PSKn2, K-SSK1, and K-SSK9; and CDGM D-K59. It also corrected the pre-existing OHARA S-BSL7 coefficients and
six-digit code against OHARA's official 25-04 datasheet. Runtime matching now considers every name, alias, and
duplicate-code candidate in an annotation and chooses only a coordinate-compatible row, with vendor context and
coordinate residuals used to break ambiguity. Catalog validation now checks normal C/d/F/g index ordering, coefficient
round trips for both nd and νd, and consistency between each six-digit code and its listed coordinates. Strict
Sellmeier coverage increased from 4572 to 4581 surfaces, trusted coverage from 4588 to 4595 surfaces, fully strict
lenses from 202 to 205, and fully trusted lenses from 208 to 210.

The July 30, 2026 Phase 44 catalog addition recovered two exact discontinued OHARA rows from the vendor's official
2026-07-01 all-products Zemax catalog. BAL22 (`569632`) supplies the two high-Abbe negative variator elements in
Olympus's 85-250mm patent design, while BSL3 (`498650`) supplies its first relay positive. Both formula-3
polynomials round-trip through `assertCatalogConsistent`; the annotations use them as optical equivalents without
claiming Olympus's production supplier.

The July 29, 2026 Phase 43 pass added 33 exact records from the official HOYA 2026-07-07 and OHARA 2026-07-01
all-products Zemax catalogs. The HOYA additions are M-TAF101, TAC8, LAC14, M-BACD12, M-TAF105, M-TAF1, FD60,
FF5, LBC3N, M-TAFD307, NBF1, TAFD40L-W, E-LAF7, FDS20-W, MP-FCD500-20, TAC6L, BACED5, M-FD80, PCD2, and
TAC4. The OHARA additions are historical PBH21, L-LAH90, S-BSM25, S-BAL3, S-BAM12, S-LAL7Q, S-BAH32,
S-BSM9, S-LAL52, L-LAH86, S-LAL21, S-TIM6, and L-LAL13. This larger coordinate set allowed the runtime
compatibility window to tighten from nd ±0.005 / νd ±3 to nd ±0.003 / νd ±2 while increasing strict coverage from
4499 to 4535 surfaces.

The July 29, 2026 coverage pass added 13 exact HOYA records from the vendor's current and obsolete-inclusive Zemax
catalog: BACD14, BACD8, E-F5, E-F8, E-FEL1, FCD10A, FCD500, FCD915, NBFD30, TAF2, TAF3D, TAFD34, and TAFD5.
The same source pass added OHARA S-APL1, S-BSM36, and S-LAL61 from the vendor's 2026-07-01 all-products catalog.
The same pass strengthened runtime matching to require agreement in both nd and νd, preventing same-index glasses from
different dispersion families from being accepted silently.

The July 23, 2026 Canon batch added OHARA S-TIH53WN from the vendor's April 2025 datasheet. The WN variant retains
the conventional d-line index while publishing modified off-d-line indices and dispersion constants for
high-precision lenses; it is distinct from S-TIH53 and S-TIH53W.

The July 17, 2026 Vivitar batch added exact vendor records for SCHOTT LLF1; legacy HOYA LAC10 and NBFD10; and legacy SUMITA BAF9, BAF11, BK1, F1, FK5, K5, LAFN2, LF2, and SK5. The SUMITA coefficients come from the manufacturer's 2025-11-07 all-glass Zemax catalog, which explicitly includes discontinued types.

The generated reports in [`generated/`](generated/) are the current work queues:

- [unresolved-glass.generated.md](generated/unresolved-glass.generated.md) — unresolved tokens that may need catalog entries, aliases, or patent backfills; regenerate with `npm test -- unresolvedGlassScan`.
- [catalog-mismatches.generated.md](generated/catalog-mismatches.generated.md) — labels that resolve to a catalog entry but disagree with stored `nd`; regenerate with `npm test -- catalogMismatchScan`.
- [glass-relabel-candidates.generated.md](generated/glass-relabel-candidates.generated.md) — candidate relabel targets for mismatches; regenerate with `npm test -- glassRelabelCandidatesScan`.
- [glass-relabel-by-lens.generated.md](generated/glass-relabel-by-lens.generated.md) — per-lens patent-audit work queue combining mismatches and candidates; regenerate with `npm test -- glassRelabelByLensScan`.
- [glass-ambiguities.generated.md](generated/glass-ambiguities.generated.md) — every element annotation with multiple coordinate-compatible catalog rows, including the selected row and exact resolver tie-break; regenerate with `npm test -- glassAmbiguityScan`.
- [six-digit-glass-codes.generated.md](generated/six-digit-glass-codes.generated.md) — lenses/elements whose `glass` annotation still has only a six-digit code rather than an actual glass type; regenerate with `npm test -- sixDigitGlassCodeScan`.
- [six-digit-glass-codes-missing-sellmeier.generated.md](generated/six-digit-glass-codes-missing-sellmeier.generated.md) — code-only elements that do not reach trusted catalog Sellmeier data, with an A-E impact-ranked active unreviewed queue that excludes sidecar hits and explicit dispositions; regenerated by the same `sixDigitGlassCodeScan`.
- [sellmeier-coverage.generated.md](generated/sellmeier-coverage.generated.md) — completeness-ranked lens coverage using trusted chromatic coverage while retaining strict catalog Sellmeier counts; regenerate with `npm test -- sellmeierCoverageScan`.
- [glass-coverage-opportunities.generated.md](generated/glass-coverage-opportunities.generated.md) — ranked three-sweep work queue that also records whether each relabel row has a matching untracked local patent PDF under `patents/`; regenerate with `npm test -- glassCoverageOpportunitiesScan`.

Regenerate all glass reports together with `npm run generate:glass-reports`.

The six-digit and glass-coverage-opportunities reports embed match statuses against the untracked local `patents/`
PDF inventory, so their scans skip the rewrite when that inventory is empty (fresh worktrees, CI). Regenerate those
three files only from a checkout where `patents/` is populated; elsewhere the checked-in reports stay as-is.

## Why So Few Entries To Start With

The first cut of the catalog had nine entries. Six were wrong: when the Sellmeier coefficients were validated against the listed `nd` at 587.5618 nm via `assertCatalogConsistent`, four diverged by 5e-3 to 2e-2 — well outside any reasonable transcription tolerance. The values came from memory and were unreliable.

The conclusion drove the design: **every entry must round-trip through `assertCatalogConsistent` before being
committed.** The validator requires normally ordered finite C/d/F/g indices, nd agreement within 1e-4, νd agreement
within 0.15, and a six-digit code consistent with the listed nd/νd when one is present. These checks are enforced in
[__tests__/src/optics/dispersion.test.ts](../__tests__/src/optics/dispersion.test.ts), so a bad transcription fails CI.

## Prioritized Glasses to Add

This original priority table was derived from `glass:` declarations when the catalog was much smaller. Keep it as a
historical prioritization aid; use the generated reports above for the current 488-lens queue. Asterisks mark entries
already in the catalog.

| Glass | Lens-element occurrences | Vendor | Notes |
|---|---|---|---|
| ★ **S-FPL51** | 74 | Ohara | Highest priority — primary ED crown across most APO designs |
| ★ S-LAH58 | 52 | Ohara | High-index lanthanum, ubiquitous |
| ★ S-TIH53 | 31 | Ohara | High-dispersion flint |
| ★ S-NPH2 | 31 | Ohara | Niobophosphate flint |
| ★ S-TIH6 | 30 | Ohara | |
| ★ S-LAH79 | 26 | Ohara | Voigtländer APO-Lanthar L2 |
| ★ S-LAH55V | 26 | Ohara | Vacuum melt variant |
| ★ S-BSL7 | 22 | Ohara | (in catalog) |
| ★ S-LAL18 | 21 | Ohara | |
| ★ S-LAH65V | 20 | Ohara | Voigtländer APO-Lanthar L8 |
| ★ SF6 | 19 | Schott | Legacy lead flint |
| ★ S-FSL5 | 19 | Ohara | Fluor crown |
| ★ S-TIH14 | 18 | Ohara | |
| ★ S-PHM52 | 18 | Ohara | Phosphate crown with notable +ΔPgF |
| ★ S-FPM2 | 17 | Ohara | Fluorophosphate ED |
| ★ S-LAL14 | 16 | Ohara | |
| ★ S-LAH66 | 15 | Ohara | |
| ★ N-BK7 | 14 | Schott | (in catalog) |
| ★ FCD1 | 13 | Hoya | ED, FPL51-equivalent |
| ★ S-BAL42 | 12 | Ohara | |
| ★ S-FPL53 | 12 | Ohara | Super ED — defining glass for many APO triplets |
| ★ S-LAH63 | 11 | Ohara | |
| ★ S-LAM66 | 11 | Ohara | |
| ★ S-LAH55 | 11 | Ohara | |
| ★ S-TIM35 | 11 | Ohara | |
| ★ S-LAH53 | 10 | Ohara | |
| ★ S-FPL52 | 10 | Ohara | |
| ★ S-TIM25 | 9 | Ohara | |
| ★ S-FPM3 | 9 | Ohara | |
| ★ S-BAL35 | 9 | Ohara | |
| ★ S-TIM22 | 9 | Ohara | |
| ★ **S-NBH5** | 9 | Ohara | KZFS-class, **APO-relevant** (negative ΔPgF, paired with FPL51 in Leica APO 35/2) |
| ★ S-NPH1 | 8 | Ohara | |
| ★ S-TIM2 | 8 | Ohara | |
| ★ SF4 | 7 | Schott | |
| ★ S-LAH65 | 7 | Ohara | |
| ★ TAFD30 | 7 | Hoya | |
| ★ S-LAH52 | 7 | Ohara | |
| ★ S-NSL3 | 7 | Ohara | |
| ★ S-TIM28 | 7 | Ohara | Phase 4 addition |
| ★ S-LAM54 | 7 | Ohara | |
| ★ FCD505 | 7 | Hoya | |
| ★ S-NPH53 | 7 | Ohara | |
| ★ S-BSM14 | 7 | Ohara | Phase 4 addition |
| ★ SF1 | 6 | Schott | |
| ★ N-LAK8 | 6 | Schott | |
| ★ TAFD25 | 6 | Hoya | Added in Phase 10. The nd guard still rejects annotations whose stored values belong to a different glass; relabel those per lens. |
| ★ S-LAH51 | 6 | Ohara | |
| ★ BSC7 | 6 | Hoya | (aliased → S-BSL7) |
| ★ **N-KZFS5** | (used in Leica APO designs) | Schott | KZFS family — **APO-relevant**, negative ΔPgF |
| ★ **K-GFK68** | 1 (Voigtländer L4) | Sumita | Patent-listed, **APO-relevant** |

**Phase 18 additions** (May 2026 — Nikon six-digit missing-Sellmeier audit; Hikari entries use vendor-published formula-3 power-series coefficients from 2023 Hikari/Nikon catalog data, and N-SSK5 uses Schott Sellmeier constants; all entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ J-FK5 | Hikari | 487703 | Low-dispersion crown used in Nikon AF-P / Z DX telephoto and wide zoom rows |
| ★ J-FK01A | Hikari | 497817 | ED fluorophosphate crown used in Nikon AF-P / Z DX rows |
| ★ J-FKH1 | Hikari | 498826 | ED fluorophosphate crown used in Nikon AF-S 200-500 and Z 24-70 audits |
| ★ J-BASF2 | Hikari | 664359 | Barium short flint used in the Nikkor-S Auto 50mm audit |
| ★ J-BASF6 | Hikari | 668419 | Barium short flint used in the Z DX 18-140 audit |
| ★ J-SFH1 | Hikari | 808227 | Anomalous-dispersion dense flint used in AF-P DX 70-300 and Z DX 18-140 audits |
| ★ J-SFH5 | Hikari | 756247 | Anomalous-dispersion dense flint used in the AF-S 120-300 audit |
| ★ N-SSK5 | Schott | 658509 | Extra-dense crown used in the AF-S 200-500 audit |
| ★ J-KZFH6 | Hikari | 684376 | Titanium flint used in the Z 24-200 audit |
| ★ J-LAF01 | Hikari | 700481 | Lanthanum flint backfill from Nikon code rows |
| ★ Q-LASFPH2S | Hikari | 765468 | Q-series lanthanum flint/phosphate backfill from Nikon code rows |
| ★ J-LAF016 | Hikari | 801349 | High-index lanthanum flint backfill from Nikon code rows |
| ★ J-LASF017 | Hikari | 795453 | Dense lanthanum short-flint backfill from Nikon code rows |
| ★ Q-LASFPH3S | Hikari | 795453 | Q-series lanthanum flint/phosphate backfill from Nikon code rows |
| ★ J-LASF021 | Hikari | 850324 | Dense lanthanum short-flint backfill from Nikon code rows |
| ★ J-LASFH23 | Hikari | 850270 | High-index dense lanthanum flint backfill from Nikon code rows |

**Phase 19 additions** (May 2026 — Sigma 105/1.4, 20/1.4, and 14-24/2.8 patent audit; all entries round-trip through `assertCatalogConsistent`; sourced from refractiveindex.info mirrors of HOYA's 2017 Zemax AGF so the Sigma patent labels resolve without code-only fallbacks):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ PCD40 | Hoya | 620639 | SLD glass used by Sigma 105/1.4 L10 |
| ★ M-LAC130 | Hoya | 694532 | Moldable lanthanum crown used by Sigma 20/1.4 E2 |
| ★ M-BACD5N | Hoya | 589613 | Moldable barium crown used by Sigma 14-24/2.8 L3 |
| ★ M-TAFD305 | Hoya | 851401 | Moldable lanthanum flint class used by Sigma 105/1.4 L17 soft-match rows |
| ★ BAFD7 | Hoya | 702412 | Barium dense flint used by Sigma 20/1.4 E14 |

**Phase 20 additions** (June 2026 — Sweep 2 source pass using first-party HOYA optical-glass PDFs and the existing refractiveindex.info formula-3 workflow; all entries round-trip through `assertCatalogConsistent`. This pass also expanded the resolver to normalize `nnn/nnn` and `nnn-nnn` six-digit annotations so already-sourced catalog rows such as NBFD15 can resolve from legacy slash-form labels):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ NBFD25 | Hoya | 855252 | HOYA 2025 optical-glass PDF lists nd=1.85451, vd=25.15, PgF=0.6103, and formula-3 A0-A5 constants; clears high-impact 855/252 dense-flint rows |
| ★ NBFD29 | Hoya | 770297 | HOYA 2025 optical-glass PDF lists nd=1.77047, vd=29.74, PgF=0.5951, and formula-3 A0-A5 constants; clears high-impact 770/297 dense-flint rows |

**Phase 21 additions** (June 2026 — named-token opportunity pass using coefficient-backed Ohara, Schott, and CDGM sources; all entries round-trip through `assertCatalogConsistent`. This pass intentionally keeps incompatible near/class labels as explicit `Unmatched` annotations instead of letting true catalog rows create false exact matches):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ S-LAL12 | Ohara | 678553 | Official Ohara per-glass datasheet; exact catalog row for true S-LAL12 labels |
| ★ S-BSM10 | Ohara | 623570 | Official Ohara per-glass datasheet; exact row only, not used for incompatible Nikon 1.6968 / 55.46 barium-crown rows |
| ★ S-LAM7 | Ohara | 750353 | Official Ohara per-glass datasheet; exact row only, not used for Nikon AF 28/1.4D's 1.7481 / 52.3 LaM-class row |
| ★ L-LAM69 | Ohara | 731405 | Official Ohara per-glass datasheet; exact row only, not used for 764491 moldable lanthanum-crown rows |
| ★ N-SF8 / SF8 | Schott | 689313 | Official Schott datasheet; resolver aliases legacy `SF8` to `N-SF8` when the stored d-line index agrees |
| ★ H-LAF4 | CDGM | 750350 | CDGM 2022 Zemax coefficients via refractiveindex.info; exact row only, not used for Laowa 1.79391 / 47.17 H-LAF4-class row |

**Phase 22 additions** (June 2026 — report sweep over zero-mismatch named-token gaps using first-party Schott PDFs; all entries round-trip through `assertCatalogConsistent`. This pass cleared real Schott names and codes rather than aliasing them to nearby Ohara equivalents):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ SF56A | Schott | 785261 | Official Schott datasheet; clears SF56A and 785/261 dense-flint rows with exact Schott coefficients |
| ★ N-BALF4 | Schott | 580539 | Official Schott datasheet; clears N-BALF4 barium light-flint rows |

**Phase 23 additions** (June 2026 — named-token report pass using the current refractiveindex.info spec database mirrors of HOYA 2017-04-01 and OHARA 2017-11-30 Zemax data; all entries round-trip through `assertCatalogConsistent`. This pass also resolved legacy `BSC3` labels only where they mean Hoya's 518/590 E-C3 crown row, and relabeled an incompatible Canon 583/594 row to its matching catalog glass):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ E-FD13 | Hoya | 741278 | Direct HOYA formula-3 row; clears E-FD13 labels without relying on S-TIH13 equivalence |
| ★ E-FD10 | Hoya | 728283 | Direct HOYA formula-3 row; clears E-FD10 labels without relying on H-ZF4A/SF10 class labels |
| ★ BACD4 | Hoya | 613586 | Direct HOYA formula-3 row; clears BACD4 dense-crown labels and code references |
| ★ E-C3 / BSC3 | Hoya | 518590 | Direct HOYA formula-3 row; `BSC3` resolves here as the historical Hoya crown meaning |
| ★ S-BSM15 | Ohara | 623582 | Direct OHARA Sellmeier row; clears repeated S-BSM15 crown labels |

The same pass rechecked requested code-only rows `670571`, `486815`, `744495`, `863252`, `777297`, and `863248`
against the current refractiveindex.info spec archive. No exact public `glass_code` record was found for those codes.
Nearest `(nd, Vd)` neighbors either carry different codes (`670573`, `743493`/`743494`) or miss the patent row by
material index/Abbe deltas, so those labels remain explicit code-only rows.

**Phase 24 additions** (June 2026 — Schott named-token opportunity pass using refractiveindex.info mirrors of SCHOTT's 2017-01-20b Zemax AGF and paired Schott glass data sheets; all entries round-trip through `assertCatalogConsistent`. E-line patent labels that cite these glass families were marked explicit `Unmatched` where the stored prescription intentionally keeps `n_e/ν_e` values rather than d-line catalog values):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ SF5 | Schott | 673322 | Legacy dense flint row; clears exact SF5 d-line labels while e-line-only Rodenstock/Leitz rows stay unmatched |
| ★ N-SF5 | Schott | 673323 | Modern Schott dense flint row; supports exact N-SF5 labels without aliasing nearby 678/322 Sony code rows |
| ★ N-LASF44 | Schott | 804465 | Dense lanthanum flint row used by Canon/Fujifilm/Sigma high-index annotations |
| ★ N-LAK9 | Schott | 691547 | Lanthanum crown row; e-line Leica class label remains unmatched |
| ★ N-PSK53A | Schott | 618634 | High-Abbe crown row used by Minolta/Rodenstock annotations |
| ★ N-LAF2 | Schott | 744449 | Lanthanum flint row used by Zeiss/Enna/Nikon code-family labels |
| ★ N-BAK4 | Schott | 569560 | Barium crown row; e-line Leica row remains unmatched |
| ★ N-LAK7 | Schott | 652585 | Lanthanum crown row used by Zeiss/Enna annotations |
| ★ N-BAF4 | Schott | 606437 | Barium flint row used by Zeiss Distagon 28/2; this pass also corrected a Nikon Z 24-200 label that meant N-BALF4 |
| ★ N-SSK2 | Schott | 622533 | Dense special crown row used by Rodenstock Grandagon-N f/4.5 annotations |

**Phase 25 additions** (July 2026 — Nikon UV quartz/fluorite additions; special-material entry sourced from the published Malitson fused-silica Sellmeier fit and validated through `assertCatalogConsistent`. This pass also normalized Nikon UV labels to resolver-friendly ASCII material tokens):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ SiO2 | Special | — | Fused silica / silica glass; clears quartz elements in Nikon UV-Nikkor 105mm f/4.5 when paired with existing CaF2 coverage |

**Phase 26 additions** (July 2026 — Olympus wide-angle patent pass using the current vendor-published Hikari and Sumita catalogs plus HOYA's obsolete-inclusive Zemax catalog; all entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ J-LAK8 | Hikari | 713540 | Exact current Hikari power-series row; completes the two repeated crown elements in the Olympus 28mm f/3.5 |
| ★ BAF13 | Sumita | 669450 | Exact current Sumita polynomial row for the Olympus 28mm f/3.5 intermediate positive element |
| ★ K-LaFn11 | Sumita | 720460 | Vendor-canonical row replacing a cross-vendor S-LAM61 code fallback in the Olympus 28mm f/2 |
| ★ K-LaK14 | Sumita | 697556 | Exact Sumita row for both rear positive elements of the Olympus 28mm f/2 |
| ★ LACL60 | Hoya | 640602 | Discontinued HOYA lanthanum crown retained in the official obsolete-inclusive catalog |
| ★ TAF4 | Hoya | 788475 | Discontinued HOYA tantalum flint row replacing an N-LAF21 code fallback |
| ★ FD140 | Hoya | 762266 | Exact HOYA dense-flint row for the Olympus 28mm f/2 negative rear partner |

**Phase 27 additions** (July 2026 — Pentax Takumar patent pass using OHARA's vendor-published per-glass datasheet; the entry round-trips through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ S-BAH10 | Ohara | 670473 | Exact 1.67003 / 47.23 row for the Super-Takumar 28mm f/3.5 and existing true S-BAH10 annotations; incompatible 702411 class wording remains explicitly unmatched |

**Phase 28 additions** (July 2026 — Schneider patent pass using CDGM's vendor-published per-glass datasheet; the entry round-trips through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ H-F6 | CDGM | 625356 | Exact public row for the 625/356 flint position in the Super-Symmar HM 120mm f/5.6 and Enna Lithagon 24mm f/4 |

**Phase 29 additions** (July 2026 — Sony patent pass using HOYA's current vendor-published Zemax catalog; the entry round-trips through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ M-TAFD51 | Hoya | 821427 | Exact moldable dense-flint formula-3 row; completes named-glass dispersion coverage for the Sony E 20mm f/2.8 and upgrades the existing Ricoh GR II 18.3mm f/2.8 annotation |

**Phase 30 additions** (July 2026 — Tamron macro-lens pass using OHARA's current and HOYA's obsolete-inclusive vendor-published Zemax catalogs; all three entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ S-LAH66N | Ohara | 773496 | Exact modern OHARA N-formulation row for the 773/496 lanthanum positions in the Tamron 60mm and 90mm macro prescriptions |
| ★ S-LAL12Q | Ohara | 678553 | Exact Q-formulation row for the 678/553 element in the Tamron 90mm macro prescription |
| ★ FDS90 | Hoya | 847238 | Exact discontinued HOYA dense-flint row used by three elements in the Tamron 90mm macro prescription; kept distinct from current FDS90-SG and FDS90-SGP formulations |

**Phase 31 additions** (July 2026 — Canon ultra-wide and fisheye patent pass using OHARA's 2017 vendor Zemax catalog via refractiveindex.info; all three entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ PBH71 | Ohara | 923213 | Exact historical dense-flint row for L12 of the Canon EF 14mm f/2.8L USM design; replaces the weaker N-SF66 comparison |
| ★ S-PHM51 | Ohara | 617628 | Historical formula-3 phosphate crown for L2 of the Canon EF 15mm f/2.8 Fisheye design |
| ★ NSL7 | Ohara | 511605 | Historical formula-3 reference crown for L5 of the Canon EF 15mm f/2.8 Fisheye design |

**Phase 32 additions** (July 2026 — vintage Canon 50mm patent pass using SUMITA's official 2025-11-07 all-glass Zemax catalog, including discontinued types; both entries retain the vendor's formula-3 polynomials and round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ K-LaK9 | Sumita | 691548 | Exact coordinate equivalent for the rear positive element in US 2,838,978 |
| ★ K-LaK11 | Sumita | 658573 | Exact coordinate equivalent for the front positive element in US 2,838,978 |

**Phase 33 additions** (July 2026 — Canon EF 200mm f/1.8 patent pass using OHARA's official 2026-07-01 all-products Zemax catalog, including discontinued types; all three entries round-trip through `assertCatalogConsistent` and reproduce the patent's C/d/F/g indices):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ BPH5 | Ohara | 654397 | Exact historical spectral match for L3 and L8; distinct from the modern same-code S-NBH5 formulation |
| ★ PBH53 | Ohara | 847239 | Exact historical spectral match for L6; distinct from the modern same-code S-NPH53 formulation |
| ★ BPM4 | Ohara | 613438 | Exact historical spectral match for L7; closes the lens's final Sellmeier catalog gap |

**Phase 34 addition** (July 2026 — Canon EF 20mm f/2.8 USM patent pass using OHARA's official 2026-07-01 all-products Zemax catalog; the discontinued formula-3 row round-trips through `assertCatalogConsistent` and reproduces the patent's C/d/F/g indices):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ TIM11 | Ohara | 621359 | Exact historical spectral match for L24; closes the lens's only strict Sellmeier catalog gap |

**Phase 35 additions** (July 2026 — Fujifilm GF 250mm patent pass using vendor Zemax catalogs mirrored by refractiveindex.info; all four entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ J-LAK7R | Hikari | — | Exact catalog assignment for L13; retained in the vendor's formula-3 power-series form |
| ★ N-LASF46B | Schott | 904313 | Exact named assignment for L16; distinct from the same-code OHARA precedence entry |
| ★ S-LAL19 | Ohara | — | Exact named assignment for L32 |
| ★ H-ZBAF52 | CDGM | 670472 | Exact named assignment for L42 |

**Phase 36 addition** (July 2026 — Nikon AI 80-200mm glass-coverage audit using the historical Nikon/Hikari Zemax catalog mirrored by refractiveindex.info; the entry round-trips through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ J-LAFH3 | Hikari | 795287 | Exact d-line match for the f/4 relay glass and reusable coverage for several existing Nikon prescriptions |

**Phase 37 additions** (July 2026 — vintage Nikon patent pass using SUMITA's official 2025-11-07 all-glass Zemax catalog, including discontinued types; all four entries retain the vendor's formula-3 polynomials and round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ LF3 | Sumita | 582420 | Exact coordinate equivalent for L4 of the NIKKOR-O 2.1cm f/4 patent design |
| ★ LAK6 | Sumita | 643581 | Exact coordinate equivalent for L8 of the NIKKOR-O 2.1cm f/4 patent design |
| ★ SF15 | Sumita | 699300 | Exact coordinate equivalent for L14 of the ZOOM-NIKKOR Auto 80-200mm f/4.5 patent design |
| ★ BASF7 | Sumita | 702411 | Exact coordinate equivalent for L15 of the ZOOM-NIKKOR Auto 80-200mm f/4.5 and L3 of the Canon FD 35mm f/2 patent designs |

**Phase 38 addition** (July 2026 — Pentax 11–18mm coverage audit using SUMITA's official 2025-11-07 all-glass Zemax catalog, including discontinued types; the entry retains the vendor's formula-3 polynomial and round-trips through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ K-BK7 | Sumita | 516641 | Exact coordinate equivalent for L44 of the Pentax HD DA* 11–18mm patent design and a reusable match for the existing Olympus prism annotation; the code match supplies dispersion coefficients without asserting the patent glass vendor |

**Phase 39 additions** (July 2026 — Pentax 17–70mm and 90mm Macro coverage audit using HOYA's official
2026-07-07 obsolete-inclusive Zemax catalog; both entries retain the vendor's formula-3 polynomial and round-trip
through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ LAC8 | Hoya | 713539 | Exact coordinate equivalent for L2 of the Pentax SMC DA 17–70mm patent design; also the S-LAL8 class |
| ★ E-FD7 | Hoya | 640346 | Exact coordinate equivalent for L14 and L21 of the Pentax HD D FA645 Macro 90mm patent design; also the S-TIM27 class |

Adding the canonical E-FD7 row also exposed an older Sony 613370 annotation that used “E-FD7 class” for a different
coordinate. That row was relabeled to the exact E-F3/S-TIM3 class so name resolution cannot select 640346.

**Phase 40 additions** (July 2026 — Nikon AF zoom patent pass using Hikari's official 2023 optical-glass catalog;
all four entries retain the vendor's formula-3 power series and round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ J-SFH2 | Hikari | 861231 | Current Hikari coordinate match for patent code 861230 in the 24–120mm design |
| ★ J-SSK5 | Hikari | 658508 | Exact code and coordinate match for the 24–120mm rear group |
| ★ J-K3 | Hikari | 518588 | Current Hikari coordinate match for patent code 518589 in the 24–120mm rear group |
| ★ J-LAK01 | Hikari | 640602 | Current Hikari coordinate match for patent code 640601 in the 28–200mm front group |

**Phase 41 additions** (July 2026 — generated coverage-opportunity follow-up using HOYA's official NBFD32
characteristic sheet and current Zemax catalog, including obsolete glasses):

| Glass | Vendor | Code | Notes |
|---|---|---:|---|
| ★ NBFD32 | Hoya | 730322 | Exact current catalog row used by Canon RF 50mm f/1.4 L VCM, Fujifilm XF 23mm f/2.8 R WR, and Sigma 17–40mm f/1.8 DC Art |
| ★ E-ADF10 | Hoya | 613444 | Discontinued anomalous-dispersion flint used by Sigma 105mm f/1.4 Art; adding it also prompted correction of three stale E-ADF10 guesses |

**Phase 17 additions** (May 2026 — Hasselblad/Laowa/Leica/Minolta/Nikon six-digit missing-Sellmeier queue pass; all entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Unlocks | Notes |
|---|---|---:|---|
| ★ BPH50 | Ohara | 1+ | Exact `740317` target for Minolta AF 100mm f/2.8 Macro L4 |
| ★ H-LAK12 | CDGM | 3+ | Coefficient-backed equivalent for patent `697565` / old LAL64-family rows; used for Minolta AF 100 Macro L5, AF 35-105 v2 L3, and AF 70-200 L5; not supplier proof |
| ★ S-LAM58 | Ohara | 1+ | Exact `720420` target for Minolta AF 35-105 v2 L11 |
| ★ D-ZLAF81-25 | CDGM | 1+ | Coefficient-backed `808410` target for Laowa 12mm f/2.8 Zero-D L16 |
| ★ K-SKLD200 | Sumita | 2+ | Exact `587590` target for Leica APO-Summicron 43mm f/2 ASPH. L5/L11 |

This pass also corrected the S-LAH88 `code6` value from `916316` to `917316`, matching the published nd/vd row used by Hasselblad XCD 120mm Macro L23/L52.

**Phase 16 additions** (May 2026 — Fujifilm/Hasselblad six-digit missing-Sellmeier queue pass; all entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Unlocks | Notes |
|---|---|---:|---|
| ★ S-BSM22 | Ohara | 1+ | Exact code-family target for `622532`; clears Fujifilm XF 50-140 L22 |
| ★ FF8 | Hoya | 1+ | Exact code-family target for `752251`; clears Fujifilm XF 56 L15 and future fluor-flint labels |
| ★ S-TIH3 | Ohara | 1+ | Exact code-family target for `740283`; clears Hasselblad HC 4/210 L10 |

**Phase 15 additions** (May 2026 — patent-audit backfill from the six-digit missing-Sellmeier queue; all entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Unlocks | Notes |
|---|---|---:|---|
| ★ H-ZLaF68L | NHG | 2 | Official NHG d-code 883392; clears Fujifilm GF110 L14 and GF80 L31 code-only rows |

**Phase 14 additions** (May 2026 — broad unresolved-token pass over the CDGM/Laowa block, current Ohara AGF, and small Hoya/Schott queues; all entries round-trip through `assertCatalogConsistent`; sourced from refractiveindex.info mirrors of CDGM/Hoya/Schott Zemax data and Ohara's 2025 vendor AGF):

| Glass | Vendor | Unlocks | Notes |
|---|---|---:|---|
| ★ H-QK3L | CDGM | 4 | Laowa macro/APO crown token; sourced from CDGM 2022 Zemax data |
| ★ H-ZF6 | CDGM | 4 | Laowa dense flint token |
| ★ H-ZLAF50D | CDGM | 4 | Laowa high-index lanthanum flint token |
| ★ H-ZF4A | CDGM | 3 | Laowa dense flint token |
| ★ H-FK71 | CDGM | 2 | Laowa low-dispersion crown token |
| ★ H-ZF13 | CDGM | 2 | Dense-flint token spanning Laowa/Panasonic rows |
| ★ H-ZF52 | CDGM | 2 | Dense-flint token spanning Laowa/Sigma rows |
| ★ H-ZF72A | CDGM | 2 | Laowa ultra-dense flint token |
| ★ H-ZF7LA | CDGM | 2 | Laowa dense-flint low-arsenic token |
| ★ H-ZLAF52A | CDGM | 2 | Laowa lanthanum flint token |
| ★ H-ZLAF68C | CDGM | 2 | High-index lanthanum flint token |
| ★ H-LAK6A | CDGM | 2 | Lanthanum crown token |
| ★ H-LAF3B | CDGM | 1 | One exact named token; plain `H-LAF3` remains unresolved because no public 2022 coefficient row was found |
| ★ S-FPM4 | Ohara | 3 | Current Ohara FPM ED glass from 2025 AGF |
| ★ S-LAL7 | Ohara | 3 | Lanthanum light crown; also supports old `700480` family annotations |
| ★ S-NBH58 | Ohara | 3 | High-index NBH dense flint |
| ★ S-BAH11 | Ohara | 2 | Barium high-index crown |
| ★ S-BAL41 | Ohara | 2 | Barium light crown; mismatch guard surfaces rows whose stored nd belongs elsewhere |
| ★ S-LAH52Q | Ohara | 2 | Q/thermal variant; mismatch guard keeps Sony rows honest |
| ★ S-LAH71 | Ohara | 2 | High-index lanthanum glass |
| ★ S-LAM61 | Ohara | 2 | Lanthanum crown |
| ★ S-PHM52Q | Ohara | 2 | Q/thermal phosphate crown variant |
| ★ S-TIH1 | Ohara | 2 | Titanium high-index flint |
| ★ S-TIL1 | Ohara | 2 | Lightweight titanium glass |
| ★ S-TIM8 | Ohara | 2 | Titanium middle-index glass |
| ★ E-F2 | Hoya | 2 | Formula-3 flint entry; `N-F2` aliases to existing Schott `F2` |
| ★ E-F3 | Hoya | 2 | Formula-3 flint entry |
| ★ NBFD13 | Hoya | 2 | NBFD family entry `806407` |
| ★ FK3 | Schott | 2 | Legacy fluor crown from Schott 2017 Zemax data |
| ★ N-BALF5 | Schott | 2 | Barium light flint |

`F7`, `SK7`, `SK18`, `H-LAF3`, and `H-ZLAF4A` remained unresolved after this historical pass because the checked public catalog sources did not provide an exact coefficient-backed row. Later per-lens work recovered `SK18` through a catalog equivalent and split the plain `H-LAF3` cases between one exact equivalent and one honest unmatched row. `BSC3` remained unresolved at the time but was later routed to Hoya E-C3 in Phase 23. `TAFD35L` was added as an alias to the already-cataloged `TAFD35` 911/353 optical constants rather than duplicating an entry.

**Phase 13 additions** (May 2026 — next-five glass relabel audit; all entries round-trip through `assertCatalogConsistent`; sourced from refractiveindex.info mirrors of HOYA/Ohara Zemax data so patent-code rows can resolve to catalog glass instead of six-digit fallbacks):

| Glass | Vendor | Unlocks | Notes |
|---|---|---:|---|
| ★ E-CF6 | Hoya | 1+ | Exact code-family target for `517522`; clears Sigma 50/1.4 DG DN Art L2 and future crown/flint boundary labels |
| ★ MC-TAF101-100 | Hoya | 1+ | Exact code-family target for `769493`; precision-molding lanthanum/tantalum glass |
| ★ NBFD15 | Hoya | 1+ | Exact code-family target for `806333`; dense flint used where prior S-NBH56 labels were only approximate |
| ★ FDS24 | Hoya | 1+ | Exact code-family target for `921240`; ultra-high-index dense flint in Nikon Z 35/1.2 patent data |
| ★ BACD15 | Hoya | 1+ | Exact code-family target for `623581`; resolves the Canon FD 50/1.2 L rear crown near the patent's 623/582 code |
| ★ L-LAH85V | Ohara | 1+ | Exact code-family target for `854404`; low-softening-temperature lanthanum glass for large aspheric high-index rows |

**Phase 12 additions** (May 2026 — high-frequency unresolved-token pass; all entries round-trip through `assertCatalogConsistent`; `H-ZF88A` was resolved as an alias to the already cataloged 847/238 `S-TIH53` equivalent, not as CDGM `H-ZF88`, which is a different 946/179 glass):

| Glass | Vendor | Unlocks | Notes |
|---|---|---:|---|
| ★ H-FK61 | CDGM | 9 | CDGM ED fluorophosphate `497816`; direct coverage for Laowa macro/APO data |
| ★ S-TIL26 | Ohara | 5 | Lightweight titanium glass `567428`; also unlocks code/equivalent class strings |
| ★ S-TIL2 | Ohara | 4 | Lightweight titanium glass `541472`; resolves S-TIL2/E-FEL2 class annotations |
| ★ N-LAK33B | Schott | 3 | Lanthanum crown `755523`; useful for Schneider large-format and Nikon equivalent labels |
| ★ TAFD32 | Hoya | 3 | Formula-3 high-index lanthanum/tantalum glass `871407`; resolves Fuji TAFD32/H-ZLaF64 class labels |

**Phase 11 additions** (May 2026 — exact six-digit code-family backfill from the remaining unresolved report; all entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Unlocks | Notes |
|---|---|---:|---|
| ★ TAFD65 | Hoya | 2 | Exact code-family target for `051269`; ultra-high-index dense flint in Canon RF 70-200 f/2.8 |
| ★ F5 | Schott | 2 | Legacy flint code `603380`; resolves Nikon Z 85mm f/1.8 code-only annotations |
| ★ E-FDS2 | Hoya | 1 | Exact code-family target for `003193`; ultra-high-index dense flint |
| ★ M-FCD500 | Hoya | 1 | ED fluorophosphate crown `553717` |
| ★ PBL25 | Ohara | 1 | Exact code-family target for `581408`; formula-3 Ohara entry |
| ★ E-F1 | Hoya | 1 | Dense flint `626357` |
| ★ LAC12 | Hoya | 1 | Lanthanum crown `678555`; historical LaK-style code match |
| ★ S-LAM59 | Ohara | 1 | Lanthanum crown `697485` |
| ★ N-KZFS8 | Schott | 1 | KZFS-class short flint `720347`; exact match for code-only Nikon annotation |
| ★ S-LAL10 | Ohara | 1 | Lanthanum light crown `720502` |
| ★ SF10 | Schott | 1 | Heavy flint `728284`; exact match for Nikon Z 24-70 f/2.8 patent-code label |

**Phase 10 additions** (May 2026 — research pass over the current unresolved-glass, catalog-mismatch, and six-digit code-family queues; all entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Unlocks / focus | Notes |
|---|---|---:|---|
| ★ FDS18 | Hoya | 4 | Exact code-family target for `946180`; Hoya formula-3 data is a better d-code match than the Phase 9 CDGM `H-ZF88` 946179 entry |
| ★ NBFD3 | Hoya | 9 | High-frequency named token; catalog guard still rejects existing annotations whose stored nd/vd do not match the real Hoya glass |
| ★ NBFD11 | Hoya | 2 | NBFD family coverage for modern high-index groups |
| ★ TAFD25 | Hoya | 7 | Sourceable HOYA TAFD-class glass; broad resolver hits remain protected by the nd consistency guard |
| ★ TAF5 | Hoya | 3 | Completes a common high-index lanthanum/tantalum family token |
| ★ E-FD4 | Hoya | 2 | Dense flint formula-3 entry from the HOYA Zemax catalog |
| ★ E-FD5 | Hoya | 3 | Dense flint formula-3 entry; common equivalent-family reference in recent analyses |
| ★ E-FL5 | Hoya | 2 | Medium flint code-family coverage for `581409` annotations |
| ★ S-BAL2 | Ohara | 3 | Frequently cited barium light crown in Leica/Olympus-style prescriptions |
| ★ S-LAM55 | Ohara | 3 | Lanthanum crown; adds exact vendor constants for current named-token labels |
| ★ S-TIH10 | Ohara | 3 | Dense flint `728285`; high-priority unresolved named token |
| ★ S-BSM28 | Ohara | 2 | Barium crown `618498`; helps surface relabel candidates |
| ★ S-BSM71 | Ohara | 2 | Barium crown `649530`; nearby S-BSM family annotations now have a direct catalog target |
| ★ S-LAL13 | Ohara | 2 | Lanthanum light crown `694532` |
| ★ S-LAM3 | Ohara | 2 | Exact code-family target for `717479` |
| ★ S-LAM52 | Ohara | 2 | Lanthanum crown `720437` |
| ★ J-PKH1 | Hikari | 2 | Exact Hikari code-family target for `519699`; uses published power-series coefficients |
| ★ Q-SK52S | Hikari | 2 | Exact code-family target for `583595`; useful for older Nikon-style code-only prescriptions |
| ★ J-LASKH2 | Hikari | 2 | Exact code-family target for `755523`; Hikari power-series entry |
| ★ J-LASF014 | Hikari | 2 | Exact code-family target for `788474`; Hikari power-series entry |

**Phase 9 additions** (May 2026 — named-token coverage plus six-digit code-family backfill; all entries round-trip through `assertCatalogConsistent`):

| Glass | Vendor | Unlocks | Notes |
|---|---|---:|---|
| ★ S-BSM16 | Ohara | 4 | Clean named-token match for nd≈1.62041 / νd≈60.29 annotations |
| ★ S-TIH13 | Ohara | 3 | Dense flint; new broad hits are now visible in mismatch reports when existing annotations were only approximate |
| ★ S-NBH53V | Ohara | 3 | Vacuum-melt NBH variant |
| ★ S-TIH23 | Ohara | 3 | Dense flint 785/263 |
| ★ N-SK5 | Schott | 3 | Legacy `SK5` alias added |
| ★ N-BAF10 | Schott | 2 | Barium flint 670/471 |
| ★ N-LAF34 | Schott | 2 | High-index lanthanum 773/496 |
| ★ N-LAK14 | Schott | 2 | Lanthanum crown 697/554 |
| ★ E-FD2 | Hoya | 3 | Formula-3 dense flint 648/338 |
| ★ E-FD8 | Hoya | 2 | Formula-3 dense flint 689/312 |
| ★ TAFD35 | Hoya | 3 | Code-family 911353; resolves Nikon high-index lanthanum dense-flint annotations |
| ★ LAC13 | Hoya | 4 | Code-family 694533; discontinued special glass but Hoya AGF data is public |
| ★ S-LAH96 | Ohara | 4 | Code-family 764485; high-index lanthanum glass matching the patent nd/vd cluster |
| ★ H-ZF88 | CDGM | 2 | Named 946/180-class dense flint; official CDGM d-code is 946179, so code-only 946180 labels remain unresolved |
| ★ J-PSKH1 | Hikari | 10 | Code-family 593679; Hikari power-series entry, not a standard six-term polynomial |
| ★ J-PSKH4 | Hikari | 6 | Code-family 593670; Hikari power-series entry |
| ★ J-KZFH9 | Hikari | 4 | Code-family 738323; sourced from Hikari 2023 catalog |
| ★ J-LAK10 | Hikari | 3 | Code-family 720503; Hikari power-series entry |
| ★ J-LASFH9 | Hikari | 3 | Code-family 903357; older Hikari type now superseded by J-LASFH9A, but the 2012 catalog gives the exact d-code |
| ★ J-LASFH15 | Hikari | 2 | Code-family 950294; high-index dense flint |

Phase 9 deliberately left several high-frequency names unresolved because their public catalog constants did not match all current lens annotations' nd/vd clusters closely enough for an immediate broad resolver target. Phase 10 and Phase 11 added many of those real vendor entries after confirming the dispersion cascade's nd guard rejects bad annotations before Sellmeier is used. Remaining code-family research is currently led by the generated unresolved-token report, especially `744495`, `S-NPH7`, `S-TIF6`, and shorthand-looking tokens such as `159319`.

**Phase 8 additions** (May 2026 — clean named tokens from the unresolved-glass report; NBFD3 and TAFD25 were still deferred here, then added in Phase 10 once the nd guard behavior was verified):

| Glass | Vendor | Occurrences before add | Notes |
|---|---|---:|---|
| ★ S-LAH93 | Ohara | 5 | High-index lanthanum; resolves repeated modern mirrorless annotations |
| ★ S-TIH11 | Ohara | 5 | Dense flint; several annotations also mention Schott SF10/N-SF10-class equivalents |
| ★ S-TIL25 | Ohara | 5 | Lightweight flint; some current labels are now visible mismatch/relabel candidates |
| ★ FC5 | Hoya | 4 | Fluor crown; legacy/SLD-style low-dispersion coverage |
| ★ S-BAH27 | Ohara | 4 | Barium crown |
| ★ S-NBH52V | Ohara | 4 | Vacuum-melt NBH variant; distinct from S-NBH52 |
| ★ S-TIH53W | Ohara | 4 | Improved-transmittance W variant sharing optical constants with S-TIH53 |
| ★ E-FD15 | Hoya | 5 | Formula-3 polynomial dense flint; broad resolver hits now need relabel review |
| ★ N-FK5 | Schott | 3 | Legacy FK5 alias added; fluorcrown counterpart to Hoya FC5 |
| ★ S-BAH28 | Ohara | 3 | Barium crown |
| ★ S-LAL59 | Ohara | 3 | Lanthanum light crown |
| ★ S-TIL27 | Ohara | 3 | Lightweight flint; some current labels are now visible mismatch/relabel candidates |
| ★ S-TIL6 | Ohara | 3 | Lightweight flint |
| ★ TAFD5F | Hoya | 3 | Formula-3 polynomial high-index lanthanum/tantalum flint |

**Phase 7 additions** (May 2026 — first pass from the latest unresolved-token priority list):

| Glass | Vendor | Occurrences | Notes |
|---|---|---|---|
| ★ S-LAH63Q | Ohara | 4 | Q/thermal variant; distinct coefficients from S-LAH63; matches low-Tg asphere annotations |
| ★ S-LAH65VS | Ohara | 3 | VS vacuum-melt variant; distinct from S-LAH65V |
| ★ S-NBM51 | Ohara | 3 | KZFS-class short flint; added after removing one incorrect Nikon S-NBM51 label whose nd/vd did not match |
| ★ TAFD40 | Hoya | 3 | Formula-3 polynomial entry; supports nd≈2.00069 high-index APD surfaces |

**Phase 5 additions** (sourced from survey of unresolved glasses across all lens files, May 2026 — all from Ohara or Schott Zemax catalog via refractiveindex.info):

| Glass | Vendor | Occurrences | Notes |
|---|---|---|---|
| ★ S-TIH18 | Ohara | 5 | Dense flint 722/292 |
| ★ S-LAM51 | Ohara | 5 | Lanthanum crown |
| ★ S-BAM4 | Ohara | 5 | Barium flint |
| ★ S-BAL14 | Ohara | 5 | Barium light crown |
| ★ S-NBH56 | Ohara | 4 | NBH dense flint |
| ★ S-NBH55 | Ohara | 4 | NBH dense flint 800/298 |
| ★ S-LAH89 | Ohara | 4 | LAH family 852/408 |
| ★ S-LAH60 | Ohara | 4 | LAH family 834/372 |
| ★ S-LAH55VS | Ohara | 4 | VS vacuum-melt variant of S-LAH55V |
| ★ S-NBH8 | Ohara | 3 | NBH dense flint |
| ★ S-TIM5 | Ohara | 3 | Dense flint |
| ★ S-LAL8 | Ohara | 3 | Lanthanum light crown |
| ★ S-NSL5 | Ohara | 3 | Light crown |
| ★ N-SK14 | Schott | 3 | Lanthanum crown 603/606; alias SK14 added |
| ★ S-TIM27 | Ohara | 2 | Dense flint |
| ★ S-TIH4 | Ohara | 2 | Dense flint |
| ★ S-NPH4 | Ohara | 2 | Ultra-high-index dense flint |
| ★ S-LAH64 | Ohara | 2 | LAH family |
| ★ S-LAH60V | Ohara | 2 | Vacuum-melt variant of S-LAH60 |
| ★ S-LAH97 | Ohara | 2 | LAH family |
| ★ S-LAL9 | Ohara | 2 | Lanthanum light crown |
| ★ S-NBH51 | Ohara | 2 | NBH dense flint |
| ★ S-NBH52 | Ohara | 2 | NBH dense flint |
| ★ S-BSM18 | Ohara | 2 | Barium crown |
| ★ S-BSM81 | Ohara | 2 | Barium crown |
| ★ S-LAM2 | Ohara | 2 | Lanthanum crown |
| ★ N-SK10 | Schott | 2 | Barium crown; alias SK10 added |
| ★ NBFD3 | Hoya | 8 | Added in Phase 10. Current annotations still span several nd/vd regions, so mismatch rows must be relabeled or marked unmatched per lens. |
| ★ TAFD40 | Hoya | 3 | Added in Phase 7 as formula-3 polynomial |
| S-TIF6 | Ohara | 2 | **Skip** — not in refractiveindex.info 2017 catalog |
| S-NPH7 | Ohara | 6 | **Skip for direct add** — public Ohara tables list S-NPH7 as nd=1.77830/vd=23.91, while the high-index annotations used unrelated coordinates; Phase 48 completed their per-lens relabel/unmatched audit |
| N-SK18 | Schott | 2 | **Skip** — not in refractiveindex.info 2017 catalog |

**Phase 4 additions not in the original table** (sourced from survey of 127 lens files, Apr 2026):

| Glass | Vendor | Notes |
|---|---|---|
| ★ N-SK16 | Schott | ~20 surfaces; aliases SK16 → N-SK16, BACD5 → N-SK16 |
| ★ SF2 | Schott | ~5–7 surfaces; legacy lead flint |
| ★ SF57 | Schott | alias SF57/N-SF57 → S-TIH53; ~11 surfaces |
| ★ TAFD37A | Hoya | 2 surfaces in Voigtländer Nokton X 50mm; Sellmeier-1 fit to formula-3 polynomial |
| ★ TAFD37 | Hoya | future coverage; distinct Sellmeier from TAFD37A |
| ★ TAFD33 | Hoya | 2 surfaces in Ricoh GR III 28mm |
| ★ F2 | Schott | future coverage — legacy lead flint for pre-1990 designs |
| ★ N-SK11 | Schott | future coverage — barium crown for Zeiss zoom designs |
| ★ N-FK51A | Schott | future coverage — fluorcrown, APO-relevant (+ΔPgF) |
| ★ N-KZFS4 | Schott | future coverage — KZFS family, APO-relevant (negative ΔPgF) |
| ★ N-LAK22 | Schott | future coverage — lanthanum crown for compact zooms |
| S-LAH99 | Ohara | **Deferred** — not in rii.info 2017 catalog; requires direct Ohara source; unlocks ~2 surfaces in LeicaAPO43 |

A handful of high-impact glasses (N-KZFS5, K-GFK68) appear infrequently but matter disproportionately for the marquee APO test cases the chromatic upgrade was designed to fix. Prioritize those alongside the high-frequency entries.

## Authoritative Sources Per Vendor

Use these in preference order. Always cite the source in the entry's `source` field.

### Schott — most accessible
1. **Schott Optical Glass Datasheet** — per-glass PDFs at [https://www.schott.com/en-gb/products/optical-glass](https://www.schott.com/en-gb/products/optical-glass). Each PDF lists the Sellmeier B1..B3 / C1..C3 plus the full nd, vd, and PgF.
2. **Schott catalogue Excel/CSV download** — same site, full catalog as a single file.
3. RefractiveIndex.INFO mirrors Schott data when the per-glass page exists.

### Ohara — primary vendor for this codebase
1. **Ohara Optical Glass Catalog** — full PDF catalogue at [https://www.oharacorp.com/](https://www.oharacorp.com/) (look under Resources/Downloads for the latest). Each glass's datasheet page lists the dispersion equation coefficients.
2. **Ohara per-glass datasheets** — the same site offers individual datasheets that list "Dispersion Equation Constants" (note: Ohara's are sometimes presented as "Schott-form" Sellmeier with B/C as in the standard formula, sometimes as Ohara's older form using A0..A5 — make sure you transcribe the standard six-coefficient form).
3. RefractiveIndex.INFO has many Ohara entries but coverage is uneven.

### Hoya
1. **Hoya Optical Glass Catalog** — at [https://www.hoya-opticalworld.com/english/datadownload/](https://www.hoya-opticalworld.com/english/datadownload/). Provides Sellmeier coefficients alongside the index/Abbe table.
2. Per-glass PDFs.

### Hikari / Nikon
1. **Nikon/Hikari optical glass catalog** — Nikon publishes current Hikari glass catalogs at [https://www.nikon.com/business/components/lineup/materials/optical-glass/](https://www.nikon.com/business/components/lineup/materials/optical-glass/). The PDF lists nd, νd, line indices, relative partial dispersions, six-digit d/e codes, and formula-3 power-series constants.
2. **Historical Hikari catalogs** — useful for discontinued types such as J-LASFH9 where the current catalog only lists the replacement J-LASFH9A. Prefer a vendor PDF when a d-code is absent from the refractiveindex.info YAML.
3. RefractiveIndex.INFO mirrors many Nikon/Hikari AGF entries, but some newer or discontinued pages are missing. Cross-check the vendor PDF before concluding no data exists.

### Sumita
1. **Sumita Optical Glass Catalog** — [https://www.sumita-opt.co.jp/en/products/optical-glass/](https://www.sumita-opt.co.jp/en/products/optical-glass/). Their PDF catalog includes Sellmeier constants for each K-prefix glass.

### CDGM
1. **CDGM Glass Catalog** — [http://www.cdgmgd.com/](http://www.cdgmgd.com/). Available as a PDF; English versions are slightly behind the Chinese release.

### Cross-reference (when a glass has multiple equivalents)
- Many Hoya/Ohara/Schott/CDGM glasses are catalog equivalents (e.g. N-BK7 ≈ S-BSL7 ≈ BSC7 ≈ H-K9L). Always source coefficients from the **vendor whose name the lens data uses**, even when an equivalent exists. Different vendors publish slightly different Sellmeier fits to nominally-equivalent melts.

### Refractiveindex.INFO — fast access to AGF data

Refractiveindex.INFO mirrors the vendor-published AGF (Zemax catalog) files, which is convenient when the vendor's own download portal is awkward or behind a registration wall. The site's per-glass UI URLs (`?shelf=glass&book=...&page=...`) render via JavaScript and are not fetchable headlessly. The underlying data files **are** fetchable:

- **Catalog index** (lists every glass and its data path):
  `https://refractiveindex.info/database/catalog-nk.yml`
- **Per-glass spec file** (Sellmeier coefficients, nd, vd, ΔPgF, glass_code):
  `https://refractiveindex.info/database/data/specs/<vendor>/optical/<NAME>.yml`
  - Ohara: `specs/ohara/optical/S-PHM52.yml`, etc.
  - Schott: `specs/schott/optical/N-BK7.yml`
  - Hoya: `specs/hoya/optical/FCD1.yml`
  - Sumita: `specs/sumita/optical/K-GFK68.yml`
  - To find the right path for a glass not listed above, grep the catalog index: `curl -sL https://refractiveindex.info/database/catalog-nk.yml | grep -A1 "PAGE: <NAME>"`.

The YAML's `DATA[].coefficients` field for `type: formula 2` (Sellmeier-1, Zemax form) is laid out as **seven** numbers: `K B1 C1 B2 C2 B3 C3`. K is the additive constant in `n² = K + Σ Bᵢλ²/(λ²−Cᵢ)`; for the standard Sellmeier-1 form K=0 (verify before transcribing). Then map straight into the catalog entry's `B: [B1, B2, B3]` and `C: [C1, C2, C3]` arrays.

For `type: formula 3` (Zemax polynomial / power series), do **not** force the values into `B`/`C`. If the exponents are exactly `0, 2, -2, -4, -6, -8`, store the six terms in `polynomial: [a0, a1, a2, a3, a4, a5]` where `n² = a0 + a1·λ² + a2·λ⁻² + a3·λ⁻⁴ + a4·λ⁻⁶ + a5·λ⁻⁸`. If the source uses explicit exponents outside that fixed shorthand, such as Hikari entries with `λ⁴`, `λ⁻¹⁰`, or `λ⁻¹²`, store them in `powerSeries: [[coefficient, exponent], ...]` exactly as published. The d-line consistency test covers both forms.

PgF is **not** published in the rii.info YAML (only `dPgF` is). Compute PgF for the catalog entry from the Schott normal-line baseline plus dPgF: `PgF ≈ 0.6438 − 0.001682·vd + dPgF`. The catalog's PgF field is decorative — the dispersion engine derives V-channel partial dispersion from the lens-data element's `dPgF`, not from the catalog. If you need vendor-direct PgF (rare), pull from the OHARA/Schott PDF datasheet instead.

The 1e-4 round-trip test will catch any transcription error — never relax the tolerance, fix the source.

## How to Add an Entry — Step by Step

1. **Find the glass in the source vendor's catalog** (PDF, datasheet, or downloaded Excel). Confirm whether the formula is standard six-coefficient Sellmeier:
   $$n^2(\lambda) = 1 + \frac{B_1 \lambda^2}{\lambda^2 - C_1} + \frac{B_2 \lambda^2}{\lambda^2 - C_2} + \frac{B_3 \lambda^2}{\lambda^2 - C_3}$$
   with λ in **micrometres** and C in **micrometres²**, or Zemax formula 3 polynomial as described above. Reject any other formula until you have explicitly converted it.

2. **Transcribe** the coefficients verbatim into the appropriate vendor shard under `src/optics/glassCatalogEntries/`
   (`ohara.ts`, `schott.ts`, `hoya.ts`, etc.). Keep all digits the source publishes — typically 8–10 significant
   figures. Then add the glass name to the source-order list in [src/optics/glassCatalogData.ts](../src/optics/glassCatalogData.ts)
   at the intended catalog position so `RAW_CATALOG` remains the stable aggregate.

3. **Fill in `nd` and `vd`** from the same vendor's published table (not from the lens data file). Provide `PgF` if listed and `code6` if it's a Schott-style 6-digit code.

4. **Cite the source** in the `source` field with enough detail to find it again ("Schott N-FK5 datasheet, Schott AG public, accessed YYYY-MM-DD" or "Ohara optical glass catalog 2024 v3, page N-LAK glasses").

5. **Run the consistency test:**
   ```bash
   npm test -- dispersion.test.ts
   ```
   The catalog-integrity test fails immediately on invalid spectral ordering, an nd/νd coefficient round-trip error,
   or a six-digit code that does not encode the listed coordinates. Fix the transcription or source — never relax the
   tolerance to admit a bad row.

6. **If the glass has a common informal alias** (`BSC7` for `S-BSL7`, `BK7` for `N-BK7`) add a structured entry to
   `ALIAS_RECORDS` in [src/optics/glassCatalogAliases.ts](../src/optics/glassCatalogAliases.ts), including the alias
   `kind` and a short note explaining why the alias is safe. `ALIASES` is derived from those records.

7. **If you've added enough entries** that the LCA readout for the target lens has visibly changed, regenerate the glass
   reports and add a changelog entry per [agent_docs/changelog.md](changelog.md).

## Pitfalls and Edge Cases

- **Ohara's older "Dispersion Equation"** uses A0..A5 in a different functional form (a polynomial in λ², not a sum of Sellmeier terms). Their modern datasheets publish the standard Sellmeier — confirm you have the right one. The standard form has six numbers, three of which (C1..C3) carry units of μm².
- **λ units.** Some sources tabulate in nm rather than μm. The standard is μm; the catalog evaluator (`evaluateSellmeier`) converts the input nm to μm internally. If a source gives C values around `1e6`, that's in nm² and must be divided by `1e6` before insertion.
- **CaF2 and other crystals** sometimes use a different Sellmeier formulation (e.g. Daimon & Masumura). Convert to the standard form or note the deviation and provide a custom evaluator.
- **Anisotropic crystals** (sapphire, lithium niobate) have wavelength-dependent indices that differ along ordinary vs. extraordinary axes. None are present in the current lens data; this concern is forward-looking only.
- **Vacuum-melt variants** (suffix V or VS, e.g. S-LAH55V, S-LAH55VS) have slightly different coefficients from their non-V forms. Treat as distinct entries.
- **Discontinued glasses** (e.g. some "BAL" and old "F"-series Schott) may not appear in current PDFs. Use the last historical Schott catalog (search "Schott Optical Glass 2014" or earlier) — the coefficients of discontinued glasses are still physical fact.
- **Six-digit codes are not vendor names.** They encode rounded nd/νd and can describe equivalent glasses from multiple makers. Prefer a vendor-canonical name when the lens annotation includes one; for code-only patent labels, only add a `code6` mapping when the sourced catalog constants match the stored patent nd/vd cluster closely.
- **Not every six-digit-looking token is a glass code.** Strings like `159319/6790` may be compact nd/vd shorthand (`1.59319 / 67.90`) rather than a d-code. Relabel those annotations before adding catalog aliases.

## When to Stop

The catalog never needs to be exhaustive. Diminishing returns kick in after the top 30 entries — beyond that, each new glass affects fewer than 10 elements across the entire lens library. Stop adding new entries when:

1. The headline regression cases (Voigtländer APO-Lanthar 50/2, Leica APO 35/2 / 43/2) hit Sellmeier on every glass surface.
2. `summarizeDispersionQuality(L)` returns `"sellmeier"` (not `"abbe"`) for the great majority of catalog lenses.
3. Remaining unmatched glasses are genuinely proprietary (Sumita unidentified, "anomalous high-index flint" without a catalog name), or are catalog names used inconsistently across multiple nd/vd regions (notably NBFD3 and TAFD25), or are absent from the rii.info 2017 archive — those should be resolved per lens or backfilled with patent-published `nC`/`nF`/`ng`.

For per-lens audits that consume the catalog (relabeling, mismatch resolution, `dPgF`/line-index enrichment), follow [lens-patent-audit.md](lens-patent-audit.md).
