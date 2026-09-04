# Six-Digit Glass Code Elements Missing Sellmeier Data (auto-generated)

Subset of [six-digit-glass-codes.generated.md](six-digit-glass-codes.generated.md) where no associated
element surface resolves to trusted catalog Sellmeier data through the reference-line safety net.
These are the highest-priority code-only rows for catalog additions, aliases, or explicit `Unmatched` notes.

**Regenerate this file** by running `npm test -- sixDigitGlassCodeScan`.
Regenerate the full glass report set with `npm run generate:glass-reports`.

## Summary

- **674** lenses scanned
- **1348** total code-only elements found
- **225** elements in this report
- **87** distinct lens files affected
- **1** active unreviewed elements have no review-record hit or explicit disposition
- **101** explicitly unmatched/unknown/proprietary/unidentified elements are self-recording review dispositions
- **0** dispositions lack any review record

## Prioritized Unreviewed Queue

This queue excludes sidecar/audit-log review hits and annotations already marked unmatched, unknown, proprietary, or unidentified.
Tiers are deterministic: A has a local patent and could complete a visible lens; B has a local patent and affects a near-complete visible lens;
C has a local patent plus repeated impact; D has one local-patent-backed row; E is blocked on a local patent source.
Completion counts are conditional on finding a source-verified catalog identity or measured line data for every listed occurrence of that code.

| Tier | Code | Active elements / lens files | Visible lenses | Strict surfaces | Completion candidates | Near-complete candidates | Local patent lenses | Representative rows |
|---|---|---:|---:|---:|---|---|---:|---|
| A | 683315 | 1 / 1 | 1 | 1 | MINOLTA AF 20mm f/2.8 | — | 1/1 | [MINOLTA AF 20mm f/2.8](../../src/lens-data/minolta/MinoltaAF20mmf28.data.ts) Element 4 (1.68300 / 31.52) |

## Codes by Frequency

| Code | Elements | Lens files | localPatentStatus | reviewRecordStatus |
|---|---:|---:|---|---|
| 493836 | 9 | 4 | patents/JPA 1996327896-000000.pdf<br>patents/JP2004109559A.pdf<br>patents/JPA 1989039542-000000.pdf | All rows have review records |
| 486815 | 5 | 1 | patents/US3743384.pdf | All rows explicitly disposed |
| 662561 | 4 | 1 | patents/GB_850117_A.pdf | All rows have review records |
| 863252 | 4 | 2 | patents/WO2021199923A1.pdf<br>patents/WO_2025263124_A1.pdf | All rows have review records |
| 777297 | 3 | 3 | patents/WO2021199923A1.pdf<br>patents/WO_2025263124_A1.pdf<br>patents/JP2023039817A.pdf | All rows have review records |
| 856401 | 3 | 2 | patents/WO2021199923A1.pdf<br>patents/WO_2025263124_A1.pdf | All rows have review records |
| 863248 | 3 | 1 | patents/JP2023039817A.pdf | All rows have review records |
| 961323 | 3 | 1 | patents/WO2021200206A1.pdf | All rows explicitly disposed |
| 514428 | 2 | 1 | patents/JP2016021011A.pdf | All rows have review records |
| 531559 | 2 | 2 | patents/US20200142167A1.pdf<br>patents/WO2021039813A1.pdf | All rows have review records |
| 620586 | 2 | 1 | patents/US4303314.pdf | All rows have review records |
| 627376 | 2 | 2 | patents/WO2019131993A1.pdf | All rows have review records |
| 633315 | 2 | 2 | patents/WO2019131993A1.pdf | All rows have review records |
| 690570 | 2 | 2 | patents/WO2019131993A1.pdf | All rows have review records |
| 720521 | 2 | 2 | patents/US4124276.pdf | All rows have review records |
| 726548 | 2 | 2 | patents/WO2019131993A1.pdf | All rows have review records |
| 733282 | 2 | 1 | patents/US3589798.pdf | All rows explicitly disposed |
| 755516 | 2 | 1 | patents/JP2004109559A.pdf | All rows have review records |
| 774492 | 2 | 1 | patents/US3748022.pdf | All rows have review records |
| 781445 | 2 | 2 | patents/US4277149.pdf<br>patents/US4182550.pdf | All rows have review records |
| 781446 | 2 | 2 | patents/JPA 1987244010-000000.pdf<br>patents/JP2004109559A.pdf | All rows have review records |
| 804238 | 2 | 2 | patents/WO2019131993A1.pdf | All rows have review records |
| 804466 | 2 | 1 | patents/JP2015166834A.pdf | All rows explicitly disposed |
| 806418 | 2 | 2 | patents/WO2019131993A1.pdf | All rows have review records |
| 807316 | 2 | 2 | patents/US4764000.pdf<br>patents/US4871239.pdf | All rows have review records |
| 813252 | 2 | 1 | patents/US3591257.pdf | All rows have review records |
| 815233 | 2 | 2 | patents/WO2019131993A1.pdf | All rows have review records |
| 819287 | 2 | 2 | patents/WO2019131993A1.pdf | All rows have review records |
| 830427 | 2 | 1 | patents/JP2015041012A.pdf | All rows explicitly disposed |
| 840434 | 2 | 1 | patents/US5734508.pdf | All rows explicitly disposed |
| 930240 | 2 | 2 | patents/WO2021200206A1.pdf<br>patents/WO_2025263124_A1.pdf | All rows have review records |
| 933209 | 2 | 2 | patents/WO2021199923A1.pdf<br>patents/JP2023039817A.pdf | All rows have review records |
| 001291 | 1 | 1 | patents/JP2015166834A.pdf | All rows explicitly disposed |
| 009291 | 1 | 1 | patents/WO2021200206A1.pdf | All rows explicitly disposed |
| 449670 | 1 | 1 | patents/GB_1050055_A.pdf | All rows explicitly disposed |
| 460658 | 1 | 1 | patents/DE_3907928_A1.pdf | All rows explicitly disposed |
| 479587 | 1 | 1 | patents/US4773745.pdf | All rows explicitly disposed |
| 507589 | 1 | 1 | patents/JPA 1999231209-000000.pdf | All rows have review records |
| 514530 | 1 | 1 | patents/JP2016021011A.pdf | All rows have review records |
| 516499 | 1 | 1 | patents/US7307794.pdf | All rows explicitly disposed |
| 516506 | 1 | 1 | patents/US7307794.pdf | All rows explicitly disposed |
| 518523 | 1 | 1 | patents/US4871239.pdf | All rows have review records |
| 520642 | 1 | 1 | patents/DE_3907928_A1.pdf | All rows explicitly disposed |
| 523701 | 1 | 1 | patents/US20100194930A1.pdf | All rows explicitly disposed |
| 525558 | 1 | 1 | patents/US8994842.pdf | All rows explicitly disposed |
| 525563 | 1 | 1 | patents/US7307794.pdf | All rows explicitly disposed |
| 530558 | 1 | 1 | patents/US20130335830A1.pdf | All rows explicitly disposed |
| 531557 | 1 | 1 | patents/US8994842.pdf | All rows explicitly disposed |
| 534554 | 1 | 1 | patents/US3737214.pdf | All rows have review records |
| 534555 | 1 | 1 | patents/US4110006.pdf | All rows explicitly disposed |
| 534556 | 1 | 1 | patents/US20230367186A1.pdf | All rows have review records |
| 540509 | 1 | 1 | patents/GB_775944_A.pdf | All rows explicitly disposed |
| 545486 | 1 | 1 | patents/CN116520542A.pdf | All rows have review records |
| 553381 | 1 | 1 | patents/US7508592.pdf | All rows explicitly disposed |
| 554381 | 1 | 1 | patents/US7359125.pdf | All rows have review records |
| 561575 | 1 | 1 | patents/US2721499.pdf | All rows have review records |
| 564463 | 1 | 1 | patents/US20180164556A1.pdf | All rows explicitly disposed |
| 569586 | 1 | 1 | patents/US20120069456A1.pdf | All rows explicitly disposed |
| 571560 | 1 | 1 | patents/WO_2025263124_A1.pdf | All rows have review records |
| 575414 | 1 | 1 | patents/US2279384.pdf | All rows explicitly disposed |
| 578671 | 1 | 1 | patents/JPA 2021076740-000000.pdf | All rows explicitly disposed |
| 580595 | 1 | 1 | patents/JP2015041012A.pdf | All rows explicitly disposed |
| 585417 | 1 | 1 | Missing from untracked local patents/ references (US20150268449A1, US20150268449, 20150268449) | All rows have review records |
| 595355 | 1 | 1 | patents/US5579169.pdf | All rows explicitly disposed |
| 595686 | 1 | 1 | patents/WO_2025263124_A1.pdf | All rows have review records |
| 596670 | 1 | 1 | patents/WO_2025263124_A1.pdf | All rows have review records |
| 602352 | 1 | 1 | patents/GB_850117_A.pdf | All rows have review records |
| 603564 | 1 | 1 | patents/JP2022092388A.pdf | All rows have review records |
| 605382 | 1 | 1 | patents/US2279384.pdf | All rows explicitly disposed |
| 611572 | 1 | 1 | patents/US2279384.pdf | All rows explicitly disposed |
| 612313 | 1 | 1 | patents/US20210026133A1.pdf | All rows have review records |
| 617443 | 1 | 1 | patents/JP2023039817A.pdf | All rows have review records |
| 622639 | 1 | 1 | patents/WO2021199923A1.pdf | All rows explicitly disposed |
| 624584 | 1 | 1 | patents/JP2025052870A.pdf | All rows have review records |
| 625533 | 1 | 1 | patents/US2721499.pdf | All rows have review records |
| 630346 | 1 | 1 | patents/JP2015041012A.pdf | All rows have review records |
| 635232 | 1 | 1 | patents/US8081392.pdf | All rows explicitly disposed |
| 640353 | 1 | 1 | patents/US4277149.pdf | All rows have review records |
| 641589 | 1 | 1 | patents/US7307794.pdf | All rows explicitly disposed |
| 642581 | 1 | 1 | patents/US2721499.pdf | All rows have review records |
| 650396 | 1 | 1 | patents/DE_3907928_A1.pdf | All rows explicitly disposed |
| 656337 | 1 | 1 | patents/JPA 2021076740-000000.pdf | All rows explicitly disposed |
| 658397 | 1 | 1 | patents/JP2023039817A.pdf | All rows have review records |
| 662331 | 1 | 1 | patents/JPA 2021076740-000000.pdf | All rows explicitly disposed |
| 662577 | 1 | 1 | patents/US2896506.pdf | All rows explicitly disposed |
| 667311 | 1 | 1 | patents/US20140247506A1.pdf | All rows have review records |
| 672323 | 1 | 1 | patents/GB_850117_A.pdf | All rows have review records |
| 675348 | 1 | 1 | patents/JP2018180366A.pdf | All rows explicitly disposed |
| 676440 | 1 | 1 | patents/US7542219.pdf | All rows explicitly disposed |
| 678322 | 1 | 1 | patents/WO2021200206A1.pdf | All rows explicitly disposed |
| 680312 | 1 | 1 | patents/JP2015041012A.pdf | All rows have review records |
| 682366 | 1 | 1 | Missing from untracked local patents/ references (US4518229, 4518229) | All rows have review records |
| 682575 | 1 | 1 | patents/US7542219.pdf | All rows explicitly disposed |
| 683309 | 1 | 1 | patents/US2983193.pdf | All rows explicitly disposed |
| 683315 | 1 | 1 | patents/JPA 1987249119-000000.pdf | No review-record hit |
| 683548 | 1 | 1 | patents/WO2021039813A1.pdf | All rows have review records |
| 684316 | 1 | 1 | patents/US20100149663A1.pdf | All rows explicitly disposed |
| 685309 | 1 | 1 | patents/US20160154221A1.pdf | All rows explicitly disposed |
| 691536 | 1 | 1 | patents/JP2021076829A.pdf | All rows explicitly disposed |
| 693495 | 1 | 1 | patents/US3552833.pdf | All rows explicitly disposed |
| 693562 | 1 | 1 | patents/US2983193.pdf | All rows explicitly disposed |
| 694312 | 1 | 1 | patents/WO2021199923A1.pdf | All rows have review records |
| 697555 | 1 | 1 | Missing from untracked local patents/ references (JP1978066222, 1978066222, JPA1978066222000000, JPB1978066222000000) | All rows explicitly disposed |
| 700555 | 1 | 1 | patents/WO_2025263124_A1.pdf | All rows have review records |
| 701301 | 1 | 1 | patents/US4277149.pdf | All rows have review records |
| 712525 | 1 | 1 | patents/JP2021076829A.pdf | All rows explicitly disposed |
| 721334 | 1 | 1 | Missing from untracked local patents/ references (US4786152, 4786152) | All rows have review records |
| 728261 | 1 | 1 | patents/US4523816.pdf | All rows explicitly disposed |
| 728403 | 1 | 1 | patents/US6560042.pdf | All rows explicitly disposed |
| 730262 | 1 | 1 | patents/JP2021076829A.pdf | All rows explicitly disposed |
| 732547 | 1 | 1 | patents/WO2021199923A1.pdf | All rows explicitly disposed |
| 738493 | 1 | 1 | patents/JP2022092388A.pdf | All rows have review records |
| 740375 | 1 | 1 | patents/US3589798.pdf | All rows explicitly disposed |
| 740439 | 1 | 1 | patents/US2983193.pdf | All rows explicitly disposed |
| 740458 | 1 | 1 | patents/US2983193.pdf | All rows explicitly disposed |
| 740464 | 1 | 1 | patents/US2983193.pdf | All rows explicitly disposed |
| 740493 | 1 | 1 | patents/US20050013015A1.pdf | All rows explicitly disposed |
| 741262 | 1 | 1 | patents/US3552833.pdf | All rows explicitly disposed |
| 744458 | 1 | 1 | patents/US2279384.pdf | All rows explicitly disposed |
| 744494 | 1 | 1 | patents/US3507558.pdf | All rows have review records |
| 747274 | 1 | 1 | patents/US3649104.pdf | All rows have review records |
| 749501 | 1 | 1 | patents/US4124276.pdf | All rows have review records |
| 749547 | 1 | 1 | patents/CN205720849U.pdf | All rows have review records |
| 750251 | 1 | 1 | Missing from untracked local patents/ references (US4560253, 4560253) | All rows have review records |
| 750501 | 1 | 1 | patents/US4277149.pdf | All rows have review records |
| 750504 | 1 | 1 | patents/US4258985.pdf | All rows have review records |
| 754260 | 1 | 1 | Missing from untracked local patents/ references (US20150268449A1, US20150268449, 20150268449) | All rows have review records |
| 755501 | 1 | 1 | patents/US4277149.pdf | All rows have review records |
| 760492 | 1 | 1 | patents/JP2015041012A.pdf | All rows explicitly disposed |
| 765249 | 1 | 1 | patents/US20130314588A1.pdf | All rows explicitly disposed |
| 767462 | 1 | 1 | patents/US3507558.pdf | All rows have review records |
| 769497 | 1 | 1 | Missing from untracked local patents/ references (US20150268449A1, US20150268449, 20150268449) | All rows have review records |
| 770493 | 1 | 1 | Missing from untracked local patents/ references (WO2021246545A1, WO2021246545, 2021246545) | All rows explicitly disposed |
| 772493 | 1 | 1 | patents/US20230341664A1.pdf | All rows have review records |
| 773498 | 1 | 1 | patents/US4871239.pdf | All rows have review records |
| 773501 | 1 | 1 | patents/US4258985.pdf | All rows have review records |
| 773530 | 1 | 1 | patents/CN110161666A.pdf | All rows have review records |
| 774472 | 1 | 1 | patents/JP2015166834A.pdf | All rows explicitly disposed |
| 774494 | 1 | 1 | patents/WO_2025263124_A1.pdf | All rows have review records |
| 776496 | 1 | 1 | patents/JP2023039817A.pdf | All rows explicitly disposed |
| 780509 | 1 | 1 | patents/US20180164556A1.pdf | All rows explicitly disposed |
| 786275 | 1 | 1 | Missing from untracked local patents/ references (US20150268449A1, US20150268449, 20150268449) | All rows have review records |
| 786406 | 1 | 1 | patents/WO2019131993A1.pdf | All rows have review records |
| 788474 | 1 | 1 | patents/JPA 2022012964-000000.pdf | All rows explicitly disposed |
| 789457 | 1 | 1 | patents/US4182550.pdf | All rows have review records |
| 792257 | 1 | 1 | patents/JP2023039817A.pdf | All rows explicitly disposed |
| 792450 | 1 | 1 | patents/WO2020136749A1.pdf | All rows have review records |
| 794255 | 1 | 1 | patents/US7542219.pdf | All rows explicitly disposed |
| 797455 | 1 | 1 | patents/US4452513.pdf | All rows have review records |
| 800255 | 1 | 1 | patents/JP2015041012A.pdf | All rows have review records |
| 803404 | 1 | 1 | patents/US20140247506A1.pdf | All rows have review records |
| 803405 | 1 | 1 | patents/US20170351051A1.pdf | All rows have review records |
| 805410 | 1 | 1 | patents/US4871239.pdf | All rows have review records |
| 810372 | 1 | 1 | patents/US20180164556A1.pdf | All rows explicitly disposed |
| 831265 | 1 | 1 | patents/US3615126.pdf | All rows explicitly disposed |
| 835427 | 1 | 1 | patents/JP2015166834A.pdf | All rows explicitly disposed |
| 835447 | 1 | 1 | patents/CN205720849U.pdf | All rows have review records |
| 840433 | 1 | 1 | patents/US5528428.pdf | All rows have review records |
| 842433 | 1 | 1 | patents/JPA 2022012964-000000.pdf | All rows explicitly disposed |
| 843242 | 1 | 1 | patents/US7307794.pdf | All rows explicitly disposed |
| 850440 | 1 | 1 | patents/US20180164556A1.pdf | All rows explicitly disposed |
| 852428 | 1 | 1 | patents/JPA 2021076740-000000.pdf | All rows explicitly disposed |
| 856323 | 1 | 1 | patents/WO2021200206A1.pdf | All rows explicitly disposed |
| 866450 | 1 | 1 | patents/CN116520542A.pdf | All rows have review records |
| 874287 | 1 | 1 | patents/US20130314588A1.pdf | All rows explicitly disposed |
| 876363 | 1 | 1 | patents/JPA 2021076740-000000.pdf | All rows explicitly disposed |
| 877370 | 1 | 1 | patents/US20160266350A1.pdf | All rows have review records |
| 882408 | 1 | 1 | Missing from untracked local patents/ references (US20150268449A1, US20150268449, 20150268449) | All rows have review records |
| 903204 | 1 | 1 | patents/WO2021200206A1.pdf | All rows explicitly disposed |
| 904293 | 1 | 1 | patents/CN205720849U.pdf | All rows have review records |
| 907303 | 1 | 1 | patents/JP2021076829A.pdf | All rows explicitly disposed |
| 908334 | 1 | 1 | patents/US20140347522A1.pdf | All rows have review records |
| 910313 | 1 | 1 | patents/WO2021199923A1.pdf | All rows have review records |
| 916364 | 1 | 1 | Missing from untracked local patents/ references (US20150268449A1, US20150268449, 20150268449) | All rows have review records |
| 995293 | 1 | 1 | patents/JPWO2017138250A1.pdf | All rows explicitly disposed |

## Elements by Lens

### [AGFA COLOR-MAGNOLAR II 100mm f/4.5](../../src/lens-data/agfa/AgfaColorMagnolarII100mmf45.data.ts) - GB 775,944

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L3 (Element 3) | 4 | `Unmatched (540/509 crown-flint-boundary glass; no public catalog match located)` | 1.54041 / 50.90 | No catalog entry | abbe | patents/GB_775944_A.pdf | Explicit disposition in data |

### [CANON EF-M 18-55mm f/3.5-5.6 IS STM](../../src/lens-data/canon/CanonEFM1855mmf3556ISSTM.data.ts) - US 2013/0335830 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| LRc1 (Element 12) | 22 | `Unmatched (nd=1.52996, nu_d=55.8; code 530558)` | 1.52996 / 55.80 | No catalog entry | abbe | patents/US20130335830A1.pdf | Explicit disposition in data |

### [CANON EF-M 32mm f/1.4 STM](../../src/lens-data/canon/CanonEFM32mmf14STM.data.ts) - JP 2018-180366 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L8 (LR negative member) | 13 | `Unmatched (675/348 partial-dispersion flint; patent nd=1.67542, vd=34.8, θgF=0.5825)` | 1.67542 / 34.80 | No catalog entry | abbe | patents/JP2018180366A.pdf | Explicit disposition in data |

### [CANON FD 35mm f/2 S.S.C. (I)](../../src/lens-data/canon/CanonFD35mmf2.data.ts) - US 3,748,022

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L5 (Element 5) | 9 | `LaK (774492, probable thoriated)` | 1.77370 / 49.20 | No catalog entry | abbe | patents/US3748022.pdf | Reviewed sidecar hit |
| L8 (Element 8) | 14 | `LaK (774492, probable thoriated)` | 1.77370 / 49.20 | No catalog entry | abbe | patents/US3748022.pdf | Reviewed sidecar hit |

### [CANON NEW FD 150-600mm f/5.6L](../../src/lens-data/canon/CanonFD150600mmf56L.data.ts) - US 4,110,006

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L17 (Element 17) | 30 | `Unmatched (534555 vintage crown; no first-party coefficient row found)` | 1.53375 / 55.50 | No catalog entry | abbe | patents/US4110006.pdf | Explicit disposition in data |

### [CANON RF 24-240mm f/4-6.3 IS USM](../../src/lens-data/canon/CanonRF24240mmf463.data.ts) - US 2020/0142167 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L14 (Element 14) | 25A | `531559 - moldable barium light crown (patent nd=1.53110, vd=55.9)` | 1.53110 / 55.90 | No catalog entry | abbe | patents/US20200142167A1.pdf | Reviewed sidecar hit |

### [CARL ZEISS BIOGON 21mm f/4.5](../../src/lens-data/carl-zeiss-oberkochen/ZeissBiogon21mmf45.data.ts) - US 2,721,499

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L5 (Element 5) | 8 | `BaK/SK crown (561/575)` | 1.56093 / 57.50 | No catalog entry | abbe | patents/US2721499.pdf | Reviewed sidecar hit |
| L6 (Element 6) | 9 | `SK-type dense crown (625/533)` | 1.62500 / 53.30 | No catalog entry | abbe | patents/US2721499.pdf | Reviewed sidecar hit |
| L8 (Element 8) | 12 | `LaK/SK crown (642/581)` | 1.64200 / 58.10 | No catalog entry | abbe | patents/US2721499.pdf | Reviewed sidecar hit |

### [CARL ZEISS JENA PANCOLAR 50mm f/2](../../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) - GB 850,117

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `SSK / LaK (Jena in-house, 662/561)` | 1.66200 / 56.10 | No catalog entry | abbe | patents/GB_850117_A.pdf | Reviewed sidecar hit |
| L2 (Element 2) | 3 | `SSK / LaK (Jena in-house, 662/561)` | 1.66200 / 56.10 | No catalog entry | abbe | patents/GB_850117_A.pdf | Reviewed sidecar hit |
| L3 (Element 3) | 4 | `Dense flint (672/323, Jena in-house; no exact public catalog match)` | 1.67246 / 32.30 | No catalog entry | abbe | patents/GB_850117_A.pdf | Reviewed sidecar hit |
| L4 (Element 4) | 6 | `Special light flint (Jena in-house, 602/352)` | 1.60156 / 35.20 | No catalog entry | abbe | patents/GB_850117_A.pdf | Reviewed sidecar hit |
| L5 (Element 5) | 7 | `SSK / LaK (Jena in-house, 662/561)` | 1.66200 / 56.10 | No catalog entry | abbe | patents/GB_850117_A.pdf | Reviewed sidecar hit |
| L6 (Element 6) | 9 | `SSK / LaK (Jena in-house, 662/561)` | 1.66200 / 56.10 | No catalog entry | abbe | patents/GB_850117_A.pdf | Reviewed sidecar hit |

### [FUJIFILM FUJINON 23mm f/2 (Fujifilm X100)](../../src/lens-data/fujifilm/FujifilmX10023mmf2.data.ts) - US 2012/0069456 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L6 (Element 6) | 10A | `Unmatched (569586 patent molded crown; no exact public catalog identity)` | 1.56865 / 58.60 | No catalog entry | abbe | patents/US20120069456A1.pdf | Explicit disposition in data |

### [FUJIFILM FUJINON GF 55mm f/1.7 R WR](../../src/lens-data/fujifilm/FujifilmGF55mmf17.data.ts) - US 2023/0341664 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L24 (L24) | 11A | `772493 — molded lanthanum-crown class (no exact public catalog match)` | 1.77210 / 49.30 | No catalog entry | abbe | patents/US20230341664A1.pdf | Reviewed sidecar hit |

### [FUJIFILM FUJINON XF 16-55mm f/2.8 R LM WR](../../src/lens-data/fujifilm/FujifilmXF1655mmf28R.data.ts) - US 2016/0154221 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L31 (Element 8 (L31)) | 13A | `Unmatched (685309 dense flint; nearest public catalog row exceeds d-line tolerance)` | 1.68458 / 30.88 | No catalog entry | abbe | patents/US20160154221A1.pdf | Explicit disposition in data |

### [FUJIFILM FUJINON XF 23mm f/2 R WR](../../src/lens-data/fujifilm/FujifilmXF23mmf2RWR.data.ts) - US 2017/0351051 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L21 (L21 — moving focus asphere) | 13A | `803405 - high-index lanthanum flint (likely PGM aspheric melt; no exact public catalog match)` | 1.80312 / 40.54 | No catalog entry | abbe | patents/US20170351051A1.pdf | Audit-log hit |

### [FUJIFILM FUJINON XF 60mm f/2.4 R Macro](../../src/lens-data/fujifilm/FujifilmXF60mmf24R.data.ts) - US 2014/0247506 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L14 (Element 4) | 6 | `667311 - dense flint (patent nd=1.66680, vd=31.1; no exact public catalog match)` | 1.66680 / 31.10 | No catalog entry | abbe | patents/US20140247506A1.pdf | Reviewed sidecar hit |
| L17 (Element 7) | 12A | `803404 - PGM lanthanum heavy flint (patent nd=1.80348, vd=40.4; no exact public catalog match)` | 1.80348 / 40.40 | No catalog entry | abbe | patents/US20140247506A1.pdf | Reviewed sidecar hit |

### [KODAK AERO EKTAR 6 in f/3.5](../../src/lens-data/kodak/KodakAeroEktar6inf35.data.ts) - US 2,983,193

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `Unmatched (Kodak proprietary high-index lanthanum flint, 740/458)` | 1.74000 / 45.80 | No catalog entry | abbe | patents/US2983193.pdf | Explicit disposition in data |
| L2 (Element 2) | 3 | `Unmatched (Kodak proprietary high-index crown, 693/562)` | 1.69300 / 56.20 | No catalog entry | abbe | patents/US2983193.pdf | Explicit disposition in data |
| L3 (Element 3) | 4 | `Unmatched (Kodak proprietary dense flint, 683/309)` | 1.68300 / 30.90 | No catalog entry | abbe | patents/US2983193.pdf | Explicit disposition in data |
| L5 (Element 5) | 7 | `Unmatched (Kodak proprietary lanthanum flint, 740/439)` | 1.74000 / 43.90 | No catalog entry | abbe | patents/US2983193.pdf | Explicit disposition in data |
| L6 (Element 6) | 9 | `Unmatched (Kodak proprietary high-index lanthanum flint, 740/464)` | 1.74000 / 46.40 | No catalog entry | abbe | patents/US2983193.pdf | Explicit disposition in data |

### [KODAK ENLARGING EKTAR 100mm f/4.5](../../src/lens-data/kodak/KodakEnlargingEktar100mmf45.data.ts) - US 2,279,384

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `Unmatched (vintage barium crown class, 611/572)` | 1.61100 / 57.20 | No catalog entry | abbe | patents/US2279384.pdf | Explicit disposition in data |
| L3 (Element 3) | 4 | `Unmatched (vintage dense flint class, 605/382)` | 1.60500 / 38.20 | No catalog entry | abbe | patents/US2279384.pdf | Explicit disposition in data |
| L4 (Element 4) | 6 | `Unmatched (vintage light flint class, 575/414)` | 1.57500 / 41.40 | No catalog entry | abbe | patents/US2279384.pdf | Explicit disposition in data |
| L5 (Element 5) | 7 | `Unmatched (vintage high-index lanthanum flint class, 744/458)` | 1.74400 / 45.80 | No catalog entry | abbe | patents/US2279384.pdf | Explicit disposition in data |

### [KONICA HEXANON 38mm f/2.8 (Konica C35)](../../src/lens-data/konica/KonicaHexanon38mmf28.data.ts) - US 3,615,126

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L4 (Element 4) | 6 | `Unmatched (high-index dense flint, 831/265)` | 1.83060 / 26.50 | No catalog entry | abbe | patents/US3615126.pdf | Explicit disposition in data |

### [LAOWA 12mm f/2.8 Zero-D](../../src/lens-data/laowa/Laowa12mmf28ZeroD.data.ts) - CN 205720849 U

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `749547 - high-index crown class (patent nd=1.74916, vd=54.67; unresolved)` | 1.74916 / 54.67 | No catalog entry | abbe | patents/CN205720849U.pdf | Reviewed sidecar hit |
| L5 (Element 5) | 8 | `835447 - high-index lanthanum class (patent nd=1.83481, vd=44.72; unresolved)` | 1.83481 / 44.72 | No catalog entry | abbe | patents/CN205720849U.pdf | Reviewed sidecar hit |
| L12 (Element 12) | 19 | `904293 - dense flint class (patent nd=1.90366, vd=29.31; unresolved)` | 1.90366 / 29.31 | No catalog entry | abbe | patents/CN205720849U.pdf | Reviewed sidecar hit |

### [LAOWA 58mm f/2.8 2× Ultra-Macro APO](../../src/lens-data/laowa/Laowa58mmf28MacroAPO.data.ts) - CN 116520542 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `866450 - high-index lanthanum flint (patent nd=1.86665, vd=45.0)` | 1.86665 / 45.00 | No catalog entry | abbe | patents/CN116520542A.pdf | Reviewed sidecar hit |
| L11 (Element 11) | 20 | `545486 - crown glass (patent nd=1.54517, vd=48.63)` | 1.54517 / 48.63 | No catalog entry | abbe | patents/CN116520542A.pdf | Reviewed sidecar hit |

### [LAOWA 65mm f/2.8 2× Ultra Macro APO](../../src/lens-data/laowa/Laowa65mmf28MacroAPO.data.ts) - CN 110161666 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L3 (Element 3) | 4 | `773530 — high-index lanthanum crown (patent nd=1.77250, νd=53.00; no exact public catalog match)` | 1.77250 / 53.00 | No catalog entry | abbe | patents/CN110161666A.pdf | Reviewed sidecar hit |

### [LEICA ELCAN 50mm f/2](../../src/lens-data/leica/LeicaElcan50mmf2.data.ts) - US 3,649,104

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L3 (Element 3) | 5 | `747274 - dense flint (patent nd=1.74710, vd=27.40; no exact public catalog match)` | 1.74710 / 27.40 | No catalog entry | abbe | patents/US3649104.pdf | Reviewed sidecar hit |

### [LEICA ELMARIT-R 28mm f/2.8](../../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) - US 3,591,257

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L4 (Element 4) | 6 | `813252 - high-index flint (patent nd=1.81265, vd=25.24; no exact public catalog match)` | 1.81265 / 25.24 | No catalog entry | abbe | patents/US3591257.pdf | Reviewed sidecar hit |
| L7 (Element 7) | 11 | `813252 - high-index flint (patent nd=1.81265, vd=25.24; no exact public catalog match)` | 1.81265 / 25.24 | No catalog entry | abbe | patents/US3591257.pdf | Reviewed sidecar hit |

### [LEICA MACRO-ELMARIT-R 60mm f/2.8](../../src/lens-data/leica/LeicaMacroElmaritR60mmf28.data.ts) - US 3,552,833

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L2 (Element 2) | 3 | `Unmatched (693/495 e-line; positive member of front cemented doublet)` | 1.69282 / 49.50 | No catalog entry | abbe | patents/US3552833.pdf | Explicit disposition in data |
| L4 (Element 4) | 6 | `Unmatched (dense flint, 741/262 e-line; no close current HOYA/OHARA match)` | 1.74070 / 26.20 | No catalog entry | abbe | patents/US3552833.pdf | Explicit disposition in data |

### [LEICA SUMMILUX 28mm f/1.7 ASPH. (Leica Q, Q2, Q3)](../../src/lens-data/leica/Leica28mmf17.data.ts) - US 2016/0266350 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L6 (Element 6) | 12A | `877370 — high-index lanthanum glass (patent nd=1.87722, nu_d=37.0)` | 1.87722 / 37.00 | No catalog entry | abbe | patents/US20160266350A1.pdf | Reviewed sidecar hit |

### [MAMIYA-SEKOR CS 35mm f/2.8](../../src/lens-data/mamiya/MamiyaSekorCS35mmf28.data.ts) - JP1978-066222

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| G2 (Element 2) | 3 | `Unmatched (nd=1.69480, νd=55.5; nearest public 697555 lanthanum-crown family)` | 1.69480 / 55.50 | No catalog entry | abbe | Missing from untracked local patents/ references (JP1978066222, 1978066222, JPA1978066222000000, JPB1978066222000000) | Explicit disposition in data |

### [MINOLTA AF 100mm f/2](../../src/lens-data/minolta/MinoltaAF100mmf2.data.ts) - JP1987-244010 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L5 (Element 5) | 8 | `Unmatched (781446 high-index mid-dispersion glass; no compatible public coefficient row)` | 1.78100 / 44.55 | No catalog entry | abbe | patents/JPA 1987244010-000000.pdf | Explicit disposition in data |

### [MINOLTA AF 100mm f/2.8 Macro](../../src/lens-data/minolta/MinoltaAF100mmf28Macro.data.ts) - US 4,764,000

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L7 (Element 7) | 13 | `807316 - dense lanthanum flint (patent nd=1.80741, vd=31.59; unresolved)` | 1.80741 / 31.59 | No catalog entry | abbe | patents/US4764000.pdf | Reviewed sidecar hit |

### [MINOLTA AF 135mm f/2.8 [T4.5] STF](../../src/lens-data/minolta/MinoltaSTF135mmf28T45.data.ts) - JP1999-231209 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L5 (Element 5) | 9 | `507589 — bulk absorbing ND glass (catalog unresolved; patent α=0.55)` | 1.50690 / 58.94 | No catalog entry | abbe | patents/JPA 1999231209-000000.pdf | Reviewed sidecar hit |

### [MINOLTA AF 20mm f/2.8](../../src/lens-data/minolta/MinoltaAF20mmf28.data.ts) - JP 1987-249119 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L4 (Element 4) | 7 | `683315 — flint class (catalog unresolved)` | 1.68300 / 31.52 | No catalog entry | abbe | patents/JPA 1987249119-000000.pdf | No review-record hit |

### [MINOLTA AF 28mm f/2](../../src/lens-data/minolta/MinoltaAF28mmf2.data.ts) - US 4,258,985

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L5 (Element 6) | 9 | `750504 - dense lanthanum crown class (catalog unresolved)` | 1.74950 / 50.41 | No catalog entry | abbe | patents/US4258985.pdf | Audit-log hit |
| L7 (Element 8) | 13 | `773501 - lanthanum flint (catalog unresolved)` | 1.77250 / 50.14 | No catalog entry | abbe | patents/US4258985.pdf | Audit-log hit |

### [MINOLTA AF 35-105mm f/3.5-4.5 New (v2)](../../src/lens-data/minolta/MinoltaAF35105mmf3545v2.data.ts) - US 4,871,239

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L4 (Element 4) | 6 | `773498 - dense lanthanum-flint boundary class (unresolved)` | 1.77250 / 49.77 | No catalog entry | abbe | patents/US4871239.pdf | Reviewed sidecar hit |
| L10 (Element 10) | 17 | `807316 - high-index dense flint class (unresolved)` | 1.80741 / 31.59 | No catalog entry | abbe | patents/US4871239.pdf | Reviewed sidecar hit |
| L12 (Element 12) | 21A | `518523 - thin hybrid aspheric layer (unresolved)` | 1.51790 / 52.31 | No catalog entry | abbe | patents/US4871239.pdf | Reviewed sidecar hit |
| L13 (Element 13) | 22 | `805410 - dense lanthanum-flint / LASF-class glass (unresolved)` | 1.80500 / 40.97 | No catalog entry | abbe | patents/US4871239.pdf | Reviewed sidecar hit |

### [MINOLTA AF 400mm f/4.5 APO G](../../src/lens-data/minolta/MinoltaAF400mmf45APOG.data.ts) - JP1996-327896 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `Unmatched (493836 Minolta AD/ED fluorophosphate; no compatible public coefficient row)` | 1.49310 / 83.60 | No catalog entry | abbe | patents/JPA 1996327896-000000.pdf | Explicit disposition in data |
| L2 (Element 2) | 3 | `Unmatched (493836 Minolta AD/ED fluorophosphate; no compatible public coefficient row)` | 1.49310 / 83.60 | No catalog entry | abbe | patents/JPA 1996327896-000000.pdf | Explicit disposition in data |

### [MINOLTA AF 70-200mm f/2.8 APO G (D) SSM](../../src/lens-data/minolta/MinoltaAF70200mmf28APO.data.ts) - JP 2004-109559 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L2 (Element 2) | 2 | `493836 - Minolta AD/ED fluorophosphate-type (nd=1.49310, vd=83.58; catalog unresolved)` | 1.49310 / 83.58 | No catalog entry | abbe | patents/JP2004109559A.pdf | Reviewed sidecar hit |
| L3 (Element 3) | 4 | `493836 - Minolta AD/ED fluorophosphate-type (nd=1.49310, vd=83.58; catalog unresolved)` | 1.49310 / 83.58 | No catalog entry | abbe | patents/JP2004109559A.pdf | Reviewed sidecar hit |
| L6 (Element 6) | 10 | `755516 - high-index crown (unresolved)` | 1.75450 / 51.57 | No catalog entry | abbe | patents/JP2004109559A.pdf | Audit-log hit |
| L10 (Element 10) | 17 | `755516 - high-index crown (unresolved)` | 1.75450 / 51.57 | No catalog entry | abbe | patents/JP2004109559A.pdf | Audit-log hit |
| L12 (Element 12) | 21 | `493836 - Minolta AD/ED fluorophosphate-type (nd=1.49310, vd=83.58; catalog unresolved)` | 1.49310 / 83.58 | No catalog entry | abbe | patents/JP2004109559A.pdf | Reviewed sidecar hit |
| L14 (Element 14) | 25 | `781446 - high-index mid-dispersion glass (unresolved)` | 1.78100 / 44.55 | No catalog entry | abbe | patents/JP2004109559A.pdf | Audit-log hit |
| L15 (Element 15) | 27 | `493836 - Minolta AD/ED fluorophosphate-type (nd=1.49310, vd=83.58; catalog unresolved)` | 1.49310 / 83.58 | No catalog entry | abbe | patents/JP2004109559A.pdf | Reviewed sidecar hit |

### [MINOLTA AF 80-200mm f/2.8 APO](../../src/lens-data/minolta/MinoltaAF80200mmf28APO.data.ts) - JP1989-039542 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L12 (Element 12) | 20 | `Unmatched (493836 Minolta AD/ED fluorophosphate; no compatible public coefficient row)` | 1.49310 / 83.60 | No catalog entry | abbe | patents/JPA 1989039542-000000.pdf | Explicit disposition in data |

### [MINOLTA AF APO Tele 200mm f/2.8](../../src/lens-data/minolta/MinoltaAF200mmf28.data.ts) - US 4,786,152

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `493836 - AD fluorophosphate crown (theta_gF = 0.539 patent-listed; catalog unresolved)` | 1.49310 / 83.55 | No catalog entry | abbe | Missing from untracked local patents/ references (US4786152, 4786152) | Reviewed sidecar hit |
| L2 (Element 2) | 3 | `493836 - AD fluorophosphate crown (theta_gF = 0.539 patent-listed; catalog unresolved)` | 1.49310 / 83.55 | No catalog entry | abbe | Missing from untracked local patents/ references (US4786152, 4786152) | Reviewed sidecar hit |
| L3 (Element 3) | 5 | `720521 - high-index lanthanum crown (catalog unresolved)` | 1.72000 / 52.14 | No catalog entry | abbe | Missing from untracked local patents/ references (US4786152, 4786152) | Audit-log hit |
| L4 (Element 4) | 7 | `721334 - dense lanthanum flint (catalog unresolved)` | 1.72100 / 33.40 | No catalog entry | abbe | Missing from untracked local patents/ references (US4786152, 4786152) | Audit-log hit |

### [MINOLTA AF APO TELE 300mm f/2.8](../../src/lens-data/minolta/MinoltaAF300mmf28.data.ts) - US 4,518,229

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L3 (Element 3) | 5 | `682366 - dense flint class (catalog unresolved)` | 1.68150 / 36.64 | No catalog entry | abbe | Missing from untracked local patents/ references (US4518229, 4518229) | Audit-log hit |

### [MINOLTA AF Zoom 35-70mm f/4](../../src/lens-data/minolta/MinoltaAF3570mmf4.data.ts) - US 4,560,253

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L5 (Component II-3) | 9 | `750251 - dense/fluor flint (catalog unresolved)` | 1.75000 / 25.14 | No catalog entry | abbe | Missing from untracked local patents/ references (US4560253, 4560253) | Audit-log hit |

### [MINOLTA MC FISH-EYE ROKKOR-OK 16mm f/2.8](../../src/lens-data/minolta/MinoltaMCFishEyeRokkorOK16mmf28.data.ts) - US 3,589,798

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| G5 (Element G5) | 9 | `Unmatched (733282 dense flint; no compatible public coefficient row)` | 1.73300 / 28.20 | No catalog entry | abbe | patents/US3589798.pdf | Explicit disposition in data |
| G8 (Element G8) | 14 | `Unmatched (733282 dense flint; no compatible public coefficient row)` | 1.73300 / 28.20 | No catalog entry | abbe | patents/US3589798.pdf | Explicit disposition in data |
| G9 (Element G9) | 17 | `Unmatched (740375 high-index flint; no compatible public coefficient row)` | 1.74000 / 37.50 | No catalog entry | abbe | patents/US3589798.pdf | Explicit disposition in data |

### [MINOLTA MD ROKKOR 45mm f/2](../../src/lens-data/minolta/MinoltaRokkor45mmf2MD.data.ts) - US 4,277,149

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `781445 - lanthanum flint (catalog unresolved)` | 1.78100 / 44.50 | No catalog entry | abbe | patents/US4277149.pdf | Audit-log hit |
| L2 (Element 2) | 3 | `750501 - lanthanum crown (catalog unresolved)` | 1.74950 / 50.10 | No catalog entry | abbe | patents/US4277149.pdf | Audit-log hit |
| L3 (Element 3) | 5 | `701301 - dense flint (catalog unresolved)` | 1.70060 / 30.10 | No catalog entry | abbe | patents/US4277149.pdf | Audit-log hit |
| L4 (Element 4) | 7 | `640353 - medium flint (catalog unresolved)` | 1.63980 / 35.30 | No catalog entry | abbe | patents/US4277149.pdf | Audit-log hit |
| L5 (Element 5) | 8 | `755501 - lanthanum crown (catalog unresolved)` | 1.75450 / 50.10 | No catalog entry | abbe | patents/US4277149.pdf | Audit-log hit |

### [MINOLTA MD ROKKOR 50mm f/1.4](../../src/lens-data/minolta/MinoltaRokkor50mmf14MD.data.ts) - US 4,182,550

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `789457 - high-index lanthanum flint (catalog unresolved)` | 1.78850 / 45.70 | No catalog entry | abbe | patents/US4182550.pdf | Audit-log hit |
| L6 (Element 6) | 10 | `Unmatched (781445 patent coordinate; vendor unresolved)` | 1.78100 / 44.50 | No catalog entry | abbe | patents/US4182550.pdf | Explicit disposition in data |

### [MINOLTA VARISOFT ROKKOR 85mm f/2.8](../../src/lens-data/minolta/MinoltaVarisoft85mmf28.data.ts) - US 4,124,276

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `749501 - lanthanum crown (catalog unresolved)` | 1.74950 / 50.10 | No catalog entry | abbe | patents/US4124276.pdf | Reviewed sidecar hit |
| L4 (Element 4) | 6 | `720521 - lanthanum crown (catalog unresolved)` | 1.72000 / 52.10 | No catalog entry | abbe | patents/US4124276.pdf | Audit-log hit |

### [NIKON AF-P DX NIKKOR 10-20mm f/4.5-5.6 G VR](../../src/lens-data/nikon/NikonAFPDX1020mmf4556G.data.ts) - WO 2021/039813 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L13 (L13) | 7 | `683548 - patent-specified glass (theta_gF=0.5501; unresolved)` | 1.68348 / 54.80 | No catalog entry | abbe | patents/WO2021039813A1.pdf | Reviewed sidecar hit |
| L41 (L41) | 25 | `531559 - patent-specified crown-like glass (theta_gF=0.5684; unresolved)` | 1.53110 / 55.91 | No catalog entry | abbe | patents/WO2021039813A1.pdf | Reviewed sidecar hit |

### [NIKON AF-P DX NIKKOR 70-300mm f/4.5-6.3 G ED VR](../../src/lens-data/nikon/NikonAFPDX70300mmf4563G.data.ts) - US 2021/0026133 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L12 (L12) | 3 | `612313 — anomalous-dispersion flint class (patent nd=1.61155, νd=31.26, θgF=0.618; no exact public catalog match)` | 1.61155 / 31.26 | No catalog entry | abbe | patents/US20210026133A1.pdf | Reviewed sidecar hit |

### [NIKON AF-S DX ZOOM-NIKKOR 17-55mm f/2.8G IF-ED](../../src/lens-data/nikon/NikonAFSDXZoomNikkor1755mmf28GIFED.data.ts) - US 2005/0013015 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L7 (Element 7) | 11A | `Unmatched (740493; nd=1.739929, vd=49.25)` | 1.73993 / 49.25 | No catalog entry | abbe | patents/US20050013015A1.pdf | Explicit disposition in data |

### [NIKON AF-S NIKKOR 14-24mm f/2.8 G ED](../../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) - US 7,359,125 B2

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L4 (Element 4) | 6 | `554381 — dense flint (patent nd=1.55389, nu_d=38.09)` | 1.55389 / 38.09 | No catalog entry | abbe | patents/US7359125.pdf | Audit-log hit |

### [NIKON AF-S NIKKOR 180-400mm f/4E TC1.4 FL ED VR](../../src/lens-data/nikon/NikonAFSNikkor180400mmf4ETC14.data.ts) - WO 2019/131993 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L23 (Element L23) | 20 | `804238 very-dense flint class (catalog unresolved)` | 1.80379 / 23.82 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L43 (Element L43) | 35 | `815233 dense flint class (catalog unresolved)` | 1.81511 / 23.33 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L44 (Element L44) | 36 | `633315 flint class (catalog unresolved)` | 1.63288 / 31.50 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L45 (Element L45) | 38 | `726548 lanthanum crown class (catalog unresolved)` | 1.72567 / 54.80 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L47 (Element L47) | 42 | `690570 crown class (catalog unresolved)` | 1.68991 / 56.97 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L48 (Element L48) | 44 | `819287 dense flint class (catalog unresolved)` | 1.81945 / 28.67 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L49 (Element L49) | 47 | `806418 lanthanum flint class (catalog unresolved)` | 1.80592 / 41.79 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L410 (Element L410) | 48 | `627376 flint class (catalog unresolved)` | 1.62730 / 37.62 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |

### [NIKON AF-S NIKKOR 180-400mm f/4E TC1.4 FL ED VR — TC 1.4x Engaged](../../src/lens-data/nikon/NikonAFSNikkor180400mmf4ETC14TCIn.data.ts) - WO 2019/131993 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L23 (Element L23) | 20 | `804238 very-dense flint class (catalog unresolved)` | 1.80379 / 23.82 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L43 (Element L43) | 35 | `815233 dense flint class (catalog unresolved)` | 1.81511 / 23.33 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L44 (Element L44) | 36 | `633315 flint class (catalog unresolved)` | 1.63288 / 31.50 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L45 (Element L45) | 38 | `726548 lanthanum crown class (catalog unresolved)` | 1.72567 / 54.80 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L47 (Element L47) | 42 | `690570 crown class (catalog unresolved)` | 1.68991 / 56.97 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L48 (Element L48) | 44 | `819287 dense flint class (catalog unresolved)` | 1.81945 / 28.67 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| Lx2 (Element Lx2) | 49 | `786406 lanthanum crown/flint class (catalog unresolved)` | 1.78605 / 40.63 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L49 (Element L49) | 59 | `806418 lanthanum flint class (catalog unresolved)` | 1.80592 / 41.79 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |
| L410 (Element L410) | 60 | `627376 flint class (catalog unresolved)` | 1.62730 / 37.62 | No catalog entry | abbe | patents/WO2019131993A1.pdf | Audit-log hit |

### [NIKON AF-S NIKKOR 20mm f/1.8 G ED](../../src/lens-data/nikon/NikonNikkorAFS20mmf18G.data.ts) - JP 2016-021011 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L12r (L12 resin layer) | 4 | `514530 — patent UV-cure resin (nd=1.51380, νd=53.0)` | 1.51380 / 53.00 | No catalog entry | abbe | patents/JP2016021011A.pdf | Reviewed sidecar hit |
| C1 (LS cement layer) | 9 | `514428 — patent cement layer (nd=1.51400, νd=42.8)` | 1.51400 / 42.80 | No catalog entry | abbe | patents/JP2016021011A.pdf | Reviewed sidecar hit |
| C2 (Rear doublet cement layer) | 19 | `514428 — patent cement layer (nd=1.51400, νd=42.8)` | 1.51400 / 42.80 | No catalog entry | abbe | patents/JP2016021011A.pdf | Reviewed sidecar hit |

### [NIKON AF-S NIKKOR 24-70mm f/2.8 G ED](../../src/lens-data/nikon/NikonAFS2470mmf28G.data.ts) - US 7,508,592 B2

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L4r (Element 4 resin layer) | 7A | `553381 — unmatched UV-cure replicated resin (patent nd=1.55389, νd=38.09; not catalog glass)` | 1.55389 / 38.09 | No catalog entry | abbe | patents/US7508592.pdf | Explicit disposition in data |

### [NIKON AI AF ZOOM-NIKKOR 24-120mm f/3.5-5.6 D IF](../../src/lens-data/nikon/NikonAFNikkor24120mmf3556D.data.ts) - US 5,734,508 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L21g (Element 4b — L21 Glass Substrate) | 18 | `Unmatched (840434 high-index glass)` | 1.84042 / 43.40 | No catalog entry | abbe | patents/US5734508.pdf | Explicit disposition in data |
| L22 (Element 5 — L22) | 20 | `Unmatched (840434 high-index glass)` | 1.84042 / 43.40 | No catalog entry | abbe | patents/US5734508.pdf | Explicit disposition in data |

### [NIKON AI NIKKOR 35mm f/2](../../src/lens-data/nikon/NikonAINikkor35mmf2.data.ts) - US 3,507,558

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L6 (Element 6) | 9 | `Legacy 744/494 lanthanum-flint class (exact melt uncertain)` | 1.74443 / 49.40 | No catalog entry | abbe | patents/US3507558.pdf | Reviewed sidecar hit |
| L7 (Element 7) | 11 | `Legacy 767/462 dense lanthanum-flint class (exact melt uncertain)` | 1.76684 / 46.20 | No catalog entry | abbe | patents/US3507558.pdf | Reviewed sidecar hit |

### [Nikon AI Zoom-Nikkor 360-1200mm f/11 ED](../../src/lens-data/nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts) - US 3,743,384

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Front ED-type singlet) | 1 | `Unmatched special low-dispersion glass (486/815; patent quartzite/ED-type)` | 1.48606 / 81.50 | No catalog entry | abbe | patents/US3743384.pdf | Explicit disposition in data |
| L2 (Front triplet positive) | 3 | `Unmatched special low-dispersion glass (486/815; patent quartzite/ED-type)` | 1.48606 / 81.50 | No catalog entry | abbe | patents/US3743384.pdf | Explicit disposition in data |
| L7 (Hyperchromatic doublet negative) | 11 | `Unmatched special low-dispersion glass (486/815; patent quartzite/ED-type)` | 1.48606 / 81.50 | No catalog entry | abbe | patents/US3743384.pdf | Explicit disposition in data |
| L12 (Compensator second doublet positive) | 19 | `Unmatched special low-dispersion glass (486/815; patent quartzite/ED-type)` | 1.48606 / 81.50 | No catalog entry | abbe | patents/US3743384.pdf | Explicit disposition in data |
| L15 (Relay triplet positive) | 24 | `Unmatched special low-dispersion glass (486/815; patent quartzite/ED-type)` | 1.48606 / 81.50 | No catalog entry | abbe | patents/US3743384.pdf | Explicit disposition in data |

### [NIKON AI ZOOM-NIKKOR 80-200mm f/4](../../src/lens-data/nikon/NikonAINikkor80200mmf4.data.ts) - US 4,452,513

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L43 (G4 rear negative) | 19 | `797455 — dense lanthanum glass class (catalog unresolved)` | 1.79668 / 45.50 | No catalog entry | abbe | patents/US4452513.pdf | Reviewed sidecar hit |

### [NIKON FISHEYE-NIKKOR 6mm f/2.8](../../src/lens-data/nikon/NikonFisheyeNikkor6mmf28.data.ts) - US 3,737,214

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L7 (Element 7) | 15 | `534554 — crown glass (patent nd=1.53375, νd=55.4; no current HIKARI catalog match)` | 1.53375 / 55.40 | No catalog entry | abbe | patents/US3737214.pdf | Reviewed sidecar hit |

### [NIKON NIKKOR 28mm f/2.8 (Nikon 28Ti)](../../src/lens-data/nikon/Nikon28Ti28mmf28.data.ts) - US 5,528,428

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L2a (Element 2) | 3 | `840433 - lanthanum flint (patent nd=1.84042, vd=43.30; no exact public catalog match)` | 1.84042 / 43.30 | No catalog entry | abbe | patents/US5528428.pdf | Audit-log hit |

### [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) - JP 2022-092388 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L19 (Element 19) | 34 | `603564 — medium crown (patent nd=1.60342, νd≈56.4; no exact public catalog match)` | 1.60342 / 56.40 | No catalog entry | abbe | patents/JP2022092388A.pdf | Reviewed sidecar hit |
| L25 (Element 25) | 45 | `738493 — lanthanum crown (patent nd=1.73800, νd≈49.3; no exact public catalog match)` | 1.73800 / 49.30 | No catalog entry | abbe | patents/JP2022092388A.pdf | Reviewed sidecar hit |

### [NIKON NIKKOR Z 24-70mm f/2.8 S](../../src/lens-data/nikon/NikonZ2470f28.data.ts) - WO 2020/136749 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L61 (Element 14) | 26 | `792450 — dense lanthanum crown (patent nd=1.79189, νd=45.04; no exact public catalog match)` | 1.79189 / 45.04 | No catalog entry | abbe | patents/WO2020136749A1.pdf | Reviewed sidecar hit |

### [NIKON NIKKOR Z 35mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ35mmf12S.data.ts) - JP 2025-052870 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L44 (Element 17) | 32A | `Barium crown / LaK family (624584, no exact catalog match)` | 1.62372 / 58.40 | No catalog entry | abbe | patents/JP2025052870A.pdf | Reviewed sidecar hit |

### [NIKON R-UW AF FISHEYE-NIKKOR 13mm f/2.8](../../src/lens-data/nikon/NikonRUWAFNikkor13mmf28.data.ts) - US 5,579,169

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L4 (G41 positive doublet element) | 7 | `Unmatched dense flint (595355)` | 1.59507 / 35.50 | No catalog entry | abbe | patents/US5579169.pdf | Explicit disposition in data |

### [NIKON SERIES E 135mm f/2.8](../../src/lens-data/nikon/NikonSeriesE135mmf28.data.ts) - US 4,303,314

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `620586 — patent crown glass (nd=1.62041, νd=58.6; no catalog match verified)` | 1.62041 / 58.60 | No catalog entry | abbe | patents/US4303314.pdf | Reviewed sidecar hit |
| L2 (Element 2) | 3 | `620586 — patent crown glass (nd=1.62041, νd=58.6; no catalog match verified)` | 1.62041 / 58.60 | No catalog entry | abbe | patents/US4303314.pdf | Reviewed sidecar hit |

### [NIKON ULTRA-MICRO-NIKKOR 29.5mm f/1.2](../../src/lens-data/nikon/NikonUltraMicroNikkor295mmf12.data.ts) - GB 1,050,055

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L3 (Element 3) | 5 | `Unmatched low-index crown 449/670 (patent e-line index stored)` | 1.44850 / 67.00 | No catalog entry | abbe | patents/GB_1050055_A.pdf | Explicit disposition in data |

### [NIKON W-NIKKOR 35mm f/1.8](../../src/lens-data/nikon/NikonWNikkor35mmf18.data.ts) - US 2,896,506

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L2 (Element 2) | 3 | `Unmatched (vintage high-index crown, 662/577)` | 1.66200 / 57.70 | No catalog entry | abbe | patents/US2896506.pdf | Explicit disposition in data |

### [OLYMPUS M.ZUIKO DIGITAL 14-42mm f/3.5-5.6 II R](../../src/lens-data/olympus/OlympusMZuiko1442mmf3556II.data.ts) - US 8,994,842 B2

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L2 (Element 2) | 3A | `Unmatched (moldable crown, 525/558 class)` | 1.52542 / 55.78 | No catalog entry | abbe | patents/US8994842.pdf | Explicit disposition in data |
| L7 (Element 7) | 13A | `Unmatched (moldable crown, 531/557 class)` | 1.53071 / 55.69 | No catalog entry | abbe | patents/US8994842.pdf | Explicit disposition in data |

### [OLYMPUS ZUIKO DIGITAL ED 14-35mm f/2.0 SWD](../../src/lens-data/olympus/OlympusMZuiko1435mmf2ED.data.ts) - US 8,081,392 B2

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L18 (Element 18) | 35 | `Unmatched proprietary short flint (635/232, condition-b APD glass)` | 1.63494 / 23.22 | No catalog entry | abbe | patents/US8081392.pdf | Explicit disposition in data |

### [PANASONIC LEICA DG SUMMILUX 15mm f/1.7 ASPH](../../src/lens-data/panasonic/PanasonicLeicaDG15mmf17.data.ts) - US 2015/0268449 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L2 (Element 2) | 3A | `585417 — light flint (patent nd=1.58542, nu_d=41.7)` | 1.58542 / 41.70 | No catalog entry | abbe | Missing from untracked local patents/ references (US20150268449A1, US20150268449, 20150268449) | Audit-log hit |
| L3 (Element 3) | 5 | `882408 — high-index lanthanum glass (patent nd=1.88234, nu_d=40.8)` | 1.88234 / 40.80 | No catalog entry | abbe | Missing from untracked local patents/ references (US20150268449A1, US20150268449, 20150268449) | Audit-log hit |
| L4 (Element 4) | 6 | `754260 — dense flint (patent nd=1.75409, nu_d=26.0)` | 1.75409 / 26.00 | No catalog entry | abbe | Missing from untracked local patents/ references (US20150268449A1, US20150268449, 20150268449) | Audit-log hit |
| L5 (Element 5) | 8 | `916364 — high-index lanthanum glass (patent nd=1.91597, nu_d=36.4)` | 1.91597 / 36.40 | No catalog entry | abbe | Missing from untracked local patents/ references (US20150268449A1, US20150268449, 20150268449) | Audit-log hit |
| L6 (Element 6) | 11 | `786275 — dense flint (patent nd=1.78630, nu_d=27.5)` | 1.78630 / 27.50 | No catalog entry | abbe | Missing from untracked local patents/ references (US20150268449A1, US20150268449, 20150268449) | Audit-log hit |
| L7 (Element 7) | 12 | `769497 — lanthanum crown (patent nd=1.76864, nu_d=49.7)` | 1.76864 / 49.70 | No catalog entry | abbe | Missing from untracked local patents/ references (US20150268449A1, US20150268449, 20150268449) | Audit-log hit |

### [PANASONIC LEICA DG SUMMILUX 9mm f/1.7 ASPH](../../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) - US 2023/0367186 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L2 (Element 2) | 3A | `534556 — moldable crown (patent nd=1.53380, nu_d=55.6)` | 1.53380 / 55.60 | No catalog entry | abbe | patents/US20230367186A1.pdf | Audit-log hit |

### [PANASONIC LUMIX G VARIO 7-14mm f/4 ASPH.](../../src/lens-data/panasonic/PanasonicLumixGVario714mmf4.data.ts) - US 2010/0194930 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L16 (Element 16) | 28 | `Unmatched crown class (523/701, likely phosphate/fluorophosphate)` | 1.52300 / 70.10 | No catalog entry | abbe | patents/US20100194930A1.pdf | Explicit disposition in data |

### [PANASONIC LUMIX S PRO 16-35mm f/4](../../src/lens-data/panasonic/PanasonicLumixSPro1635mmf4.data.ts) - JP 2021-076829 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `Unmatched (691536; lanthanum-crown class)` | 1.69144 / 53.60 | No catalog entry | abbe | patents/JP2021076829A.pdf | Explicit disposition in data |
| L2 (Element 2 glass substrate) | 3 | `Unmatched (712525; lanthanum-crown class)` | 1.71181 / 52.50 | No catalog entry | abbe | patents/JP2021076829A.pdf | Explicit disposition in data |
| L4 (Element 4) | 8 | `Unmatched (730262; dense-flint class)` | 1.72960 / 26.20 | No catalog entry | abbe | patents/JP2021076829A.pdf | Explicit disposition in data |
| L6 (Element 6) | 13 | `Unmatched (907303; ultra-high-index flint class)` | 1.90698 / 30.30 | No catalog entry | abbe | patents/JP2021076829A.pdf | Explicit disposition in data |

### [PENTAX DA 70mm f/2.4 Limited](../../src/lens-data/pentax/PentaxDA70mmf24Limited.data.ts) - US 7,542,219 B2

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L2 (Element 2) | 3 | `Unmatched lanthanum crown (682575; no exact current public catalog match)` | 1.68159 / 57.50 | No catalog entry | abbe | patents/US7542219.pdf | Explicit disposition in data |
| L3 (Element 3) | 5 | `Unmatched dense flint (794255; SF/S-TIH class)` | 1.79425 / 25.50 | No catalog entry | abbe | patents/US7542219.pdf | Explicit disposition in data |
| L4 (Element 4) | 7 | `Unmatched barium flint (676440; BaF/BaSF class)` | 1.67648 / 44.00 | No catalog entry | abbe | patents/US7542219.pdf | Explicit disposition in data |

### [PENTAX FA 31mm f/1.8 AL Limited](../../src/lens-data/pentax/PentaxFA31mmf18ALLtd.data.ts) - US 6,560,042 B2

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L8 (Element 8) | 13 | `Unmatched (728403 lanthanum flint; no public coefficient row inside the d-line safety window)` | 1.72750 / 40.30 | No catalog entry | abbe | patents/US6560042.pdf | Explicit disposition in data |

### [PENTAX HD DA* 11-18mm f/2.8 ED DC AW](../../src/lens-data/pentax/PentaxD1118mmF28EDDCWR.data.ts) - US 2018/0164556 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L12g (Element 2 (glass body)) | 3 | `Unmatched (780509 class; no defensible current-catalog identity recovered)` | 1.78000 / 50.90 | No catalog entry | abbe | patents/US20180164556A1.pdf | Explicit disposition in data |
| L13 (Element 4) | 6 | `Unmatched (810372 class; no defensible current-catalog identity recovered)` | 1.81000 / 37.20 | No catalog entry | abbe | patents/US20180164556A1.pdf | Explicit disposition in data |
| L15 (Element 6) | 9 | `Unmatched (850440 class; no defensible current-catalog identity recovered)` | 1.85000 / 44.00 | No catalog entry | abbe | patents/US20180164556A1.pdf | Explicit disposition in data |
| L23 (Element 9) | 14 | `Unmatched (564463 class; no defensible current-catalog identity recovered)` | 1.56406 / 46.30 | No catalog entry | abbe | patents/US20180164556A1.pdf | Explicit disposition in data |

### [PENTAX SMC DA 18-55mm f/3.5-5.6 AL](../../src/lens-data/pentax/PentaxDA1855mmF3556AL.data.ts) - US 7,307,794 B2

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L13 (L13) | 5 | `Unmatched (nd=1.52538, vd=56.3; code position 525563)` | 1.52538 / 56.30 | No catalog entry | abbe | patents/US7307794.pdf | Explicit disposition in data |
| L21 (L21) | 9 | `Unmatched (nd=1.51601, vd=49.9; code position 516499)` | 1.51601 / 49.90 | No catalog entry | abbe | patents/US7307794.pdf | Explicit disposition in data |
| L23 (L23) | 12 | `Unmatched (nd=1.84333, vd=24.2; code position 843242)` | 1.84333 / 24.20 | No catalog entry | abbe | patents/US7307794.pdf | Explicit disposition in data |
| L41 (L41) | 17 | `Unmatched (nd=1.64118, vd=58.9; code position 641589)` | 1.64118 / 58.90 | No catalog entry | abbe | patents/US7307794.pdf | Explicit disposition in data |
| L42 (L42) | 19 | `Unmatched (nd=1.51601, vd=50.6; code position 516506)` | 1.51601 / 50.60 | No catalog entry | abbe | patents/US7307794.pdf | Explicit disposition in data |

### [RODENSTOCK APO-SIRONAR-W 150mm f/5.6](../../src/lens-data/rodenstock/RodenstockApoSironarW150mmf56.data.ts) - DE 3,907,928 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `Unmatched (520642 patent-rounded crown; no unique catalog identity)` | 1.52000 / 64.20 | No catalog entry | abbe | patents/DE_3907928_A1.pdf | Explicit disposition in data |
| L6 (Element 6) | 9 | `Unmatched (460658 patent-rounded fluor-crown; no unique catalog identity)` | 1.46000 / 65.80 | No catalog entry | abbe | patents/DE_3907928_A1.pdf | Explicit disposition in data |
| L7 (Element 7) | 11 | `Unmatched (650396 patent-rounded short flint; no unique catalog identity)` | 1.65000 / 39.60 | No catalog entry | abbe | patents/DE_3907928_A1.pdf | Explicit disposition in data |

### [SAMSUNG 30mm f/2](../../src/lens-data/samsung/Samsung30mmf2.data.ts) - US 2010/0149663 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L2 (Element 2) | 3 | `Unmatched (684316 dense-flint class; vendor unresolved)` | 1.68384 / 31.60 | No catalog entry | abbe | patents/US20100149663A1.pdf | Explicit disposition in data |

### [SAMSUNG 45mm f/1.8](../../src/lens-data/samsung/Samsung45mmf18.data.ts) - US 2013/0314588 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `Unmatched (874287; nd=1.87387, νd=28.7)` | 1.87387 / 28.70 | No catalog entry | abbe | patents/US20130314588A1.pdf | Explicit disposition in data |
| L7 (Element 7) | 13 | `Unmatched (765249; nd=1.76495, νd=24.9)` | 1.76495 / 24.90 | No catalog entry | abbe | patents/US20130314588A1.pdf | Explicit disposition in data |

### [SAMYANG AF 18mm f/2.8 FE](../../src/lens-data/samyang/SamyangAF18mmf28.data.ts) - WO 2021/246545 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L81 (L81 rear asphere) | 15A | `Unmatched lanthanum flint (770/493)` | 1.76951 / 49.30 | No catalog entry | abbe | Missing from untracked local patents/ references (WO2021246545A1, WO2021246545, 2021246545) | Explicit disposition in data |

### [SCHNEIDER-KREUZNACH SUPER-SYMMAR HM 120mm f/5.6](../../src/lens-data/schneider-kreuznach/SchneiderSuperSymmarHM120mmf56.data.ts) - US 4,773,745

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L6 (Element 8) | 13 | `Unmatched (479/587 low-index crown; vendor unspecified)` | 1.47870 / 58.70 | No catalog entry | abbe | patents/US4773745.pdf | Explicit disposition in data |

### [SONY FE 12-24mm f/2.8 GM](../../src/lens-data/sony/SonyFE1224mmf28GM.data.ts) - WO 2021/200206 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L15 (L15 dense-flint positive) | 9 | `Unmatched (dense lanthanum flint, 856/323)` | 1.85649 / 32.30 | No catalog entry | abbe | patents/WO2021200206A1.pdf | Explicit disposition in data |
| L21 (L21 focus-group negative) | 12 | `Unmatched (ultra-dense short flint, 930/240)` | 1.93024 / 24.00 | No catalog entry | abbe | patents/WO2021200206A1.pdf | Explicit disposition in data |
| L22 (L22 focus-group positive) | 13 | `Unmatched 678322 dense flint (patent-listed; supplier unidentified)` | 1.67764 / 32.20 | No catalog entry | abbe | patents/WO2021200206A1.pdf | Explicit disposition in data |
| L31 (L31 stop-region negative) | 16 | `Unmatched (ultra-dense lanthanum flint, 961/323)` | 1.96073 / 32.30 | No catalog entry | abbe | patents/WO2021200206A1.pdf | Explicit disposition in data |
| L41 (L41 focus-group negative) | 20 | `Unmatched (ultra-dense lanthanum flint, 961/323)` | 1.96073 / 32.30 | No catalog entry | abbe | patents/WO2021200206A1.pdf | Explicit disposition in data |
| L51 (L51 GP5 positive) | 23 | `Unmatched (ultra-dense short flint, 903/204)` | 1.90314 / 20.40 | No catalog entry | abbe | patents/WO2021200206A1.pdf | Explicit disposition in data |
| L52 (L52 GP5 negative) | 24 | `Unmatched (ultra-dense lanthanum flint, 961/323)` | 1.96073 / 32.30 | No catalog entry | abbe | patents/WO2021200206A1.pdf | Explicit disposition in data |
| L54 (L54 La negative) | 28 | `Unmatched (ultra-high-index lanthanum flint, 009/291)` | 2.00912 / 29.10 | No catalog entry | abbe | patents/WO2021200206A1.pdf | Explicit disposition in data |

### [SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) - WO 2021/199923 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L2 (Second negative meniscus) | 3 | `Unmatched (732547 patent e-line value; no verified d-line catalog identity)` | 1.73234 / 54.70 | No catalog entry | abbe | patents/WO2021199923A1.pdf | Explicit disposition in data |
| L4 (Positive contact partner) | 7 | `694312 - short flint (Sony patent nd=1.69416, vd=31.2; no exact public catalog match)` | 1.69416 / 31.20 | No catalog entry | abbe | patents/WO2021199923A1.pdf | Audit-log hit |
| L5 (LN front element) | 9 | `910313 - dense lanthanum flint (Sony patent nd=1.91048, vd=31.3; no exact public catalog match)` | 1.91048 / 31.30 | No catalog entry | abbe | patents/WO2021199923A1.pdf | Audit-log hit |
| L6 (LN rear element) | 10 | `Unmatched (777/297 dense short flint; no close OHARA public-catalog match)` | 1.77660 / 29.70 | No catalog entry | abbe | patents/WO2021199923A1.pdf | Explicit disposition in data |
| L10 (Rear doublet flint) | 18 | `863252 - dense flint (Sony patent nd=1.86252, vd=25.2; no exact public catalog match)` | 1.86252 / 25.20 | No catalog entry | abbe | patents/WO2021199923A1.pdf | Reviewed sidecar hit |
| L11 (High-index relay positive) | 20 | `Unmatched (933/209 ultra-high-index short flint)` | 1.93323 / 20.90 | No catalog entry | abbe | patents/WO2021199923A1.pdf | Explicit disposition in data |
| L12 (Negative Petzval element) | 22 | `863252 - dense flint (Sony patent nd=1.86252, vd=25.2; no exact public catalog match)` | 1.86252 / 25.20 | No catalog entry | abbe | patents/WO2021199923A1.pdf | Reviewed sidecar hit |
| L13 (Rear aspherical negative element) | 24A | `Unmatched (856401 patent e-line value; no verified d-line catalog identity)` | 1.85639 / 40.10 | No catalog entry | abbe | patents/WO2021199923A1.pdf | Explicit disposition in data |
| L14 (Rear field/telecentricity corrector) | 26 | `Unmatched (622639 patent e-line value; no verified d-line catalog identity)` | 1.62228 / 63.90 | No catalog entry | abbe | patents/WO2021199923A1.pdf | Explicit disposition in data |

### [SONY FE 28-70mm f/2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) - WO 2025/263124 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L12 (Element 2) | 2 | `595686 — fluorophosphate crown (patent nd=1.59489, νd=68.6)` | 1.59489 / 68.60 | No catalog entry | abbe | patents/WO_2025263124_A1.pdf | Audit-log hit |
| L13 (Element 3) | 4 | `596670 - fluorophosphate crown (patent nd=1.59561, vd=67.0; no exact public catalog match)` | 1.59561 / 67.00 | No catalog entry | abbe | patents/WO_2025263124_A1.pdf | Audit-log hit |
| L21 (Element 4) | 6A | `774494 — lanthanum crown (patent nd=1.77373, νd=49.4)` | 1.77373 / 49.40 | No catalog entry | abbe | patents/WO_2025263124_A1.pdf | Audit-log hit |
| L22 (Element 5) | 8 | `777297 — dense flint (patent nd=1.77660, νd=29.7)` | 1.77660 / 29.70 | No catalog entry | abbe | patents/WO_2025263124_A1.pdf | Reviewed sidecar hit |
| L23 (Element 6) | 9 | `930240 — ultra-high-index dense flint (patent nd=1.93024, νd=24.0)` | 1.93024 / 24.00 | No catalog entry | abbe | patents/WO_2025263124_A1.pdf | Audit-log hit |
| L24 (Element 7) | 11 | `700555 — barium crown (patent nd=1.69980, νd=55.5)` | 1.69980 / 55.50 | No catalog entry | abbe | patents/WO_2025263124_A1.pdf | Audit-log hit |
| L31 (Element 8) | 14A | `856401 — lanthanum dense crown (patent nd=1.85612, νd=40.1)` | 1.85612 / 40.10 | No catalog entry | abbe | patents/WO_2025263124_A1.pdf | Reviewed sidecar hit |
| L33 (Element 10) | 17 | `571560 — barium crown (patent nd=1.57125, νd=56.0)` | 1.57125 / 56.00 | No catalog entry | abbe | patents/WO_2025263124_A1.pdf | Audit-log hit |
| L44 (Element 14) | 23 | `863252 — dense flint (patent nd=1.86252, νd=25.2)` | 1.86252 / 25.20 | No catalog entry | abbe | patents/WO_2025263124_A1.pdf | Reviewed sidecar hit |
| L45 (Element 15) | 25A | `856401 — lanthanum dense crown (patent nd=1.85612, νd=40.1)` | 1.85612 / 40.10 | No catalog entry | abbe | patents/WO_2025263124_A1.pdf | Reviewed sidecar hit |
| L72 (Element 19) | 32 | `863252 — dense flint (patent nd=1.86252, νd=25.2)` | 1.86252 / 25.20 | No catalog entry | abbe | patents/WO_2025263124_A1.pdf | Reviewed sidecar hit |

### [SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) - JP 2023-039817 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L11 (Element 1) | 1 | `Dense flint (777/297, uncertain)` | 1.77660 / 29.70 | No catalog entry | abbe | patents/JP2023039817A.pdf | Reviewed sidecar hit |
| L21 (Element 4) | 7 | `Unmatched (776496 patent lanthanum-glass coordinate; vendor unresolved)` | 1.77621 / 49.60 | No catalog entry | abbe | patents/JP2023039817A.pdf | Explicit disposition in data |
| L32 (Element 6) | 10 | `863248 — ultra-dense flint (patent nd=1.86290, nu_d=24.8)` | 1.86290 / 24.80 | No catalog entry | abbe | patents/JP2023039817A.pdf | Audit-log hit |
| L41 (Element 7) | 12 | `Unmatched 792257 dense flint (patent-listed; supplier unidentified)` | 1.79191 / 25.70 | No catalog entry | abbe | patents/JP2023039817A.pdf | Explicit disposition in data |
| L52 (Element 9) | 17 | `863248 — ultra-dense flint (patent nd=1.86290, nu_d=24.8)` | 1.86290 / 24.80 | No catalog entry | abbe | patents/JP2023039817A.pdf | Audit-log hit |
| L53 (Element 10) | 19 | `863248 — ultra-dense flint (patent nd=1.86290, nu_d=24.8)` | 1.86290 / 24.80 | No catalog entry | abbe | patents/JP2023039817A.pdf | Audit-log hit |
| L61 (Element 13) | 24 | `933209 — ultra-dense flint (patent nd=1.93323, nu_d=20.9)` | 1.93323 / 20.90 | No catalog entry | abbe | patents/JP2023039817A.pdf | Audit-log hit |
| L62 (Element 14) | 25 | `658397 — short flint (patent nd=1.65803, nu_d=39.7)` | 1.65803 / 39.70 | No catalog entry | abbe | patents/JP2023039817A.pdf | Audit-log hit |
| L71 (Element 15) | 27 | `617443 — flint/crown-boundary glass (patent coordinate; vendor unspecified)` | 1.61669 / 44.30 | No catalog entry | abbe | patents/JP2023039817A.pdf | Audit-log hit |

### [SONY PLANAR T* FE 50mm f/1.4 ZA](../../src/lens-data/sony/SonyPlanarFE50mmf14ZA.data.ts) - WO 2017/138250 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L21 (Element 7) | 12 | `Unmatched (995293 ultra-high-index heavy flint; no public coefficient row inside the d-line safety window)` | 1.99502 / 29.30 | No catalog entry | abbe | patents/JPWO2017138250A1.pdf | Explicit disposition in data |

### [SONY SONNAR T* FE 35mm f/2.8 ZA](../../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) - JP 2015-041012 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L111 (Element 1) | 1 | `800255 - dense flint (patent nd=1.80000, vd=25.46; no exact public catalog match)` | 1.80000 / 25.46 | No catalog entry | abbe | patents/JP2015041012A.pdf | Audit-log hit |
| L112 (Element 2) | 2 | `Unmatched (830427 patent-rounded lanthanum glass; vendor unresolved)` | 1.83000 / 42.72 | No catalog entry | abbe | patents/JP2015041012A.pdf | Explicit disposition in data |
| L113 (Element 3) | 5A | `Lanthanum flint (LAF class), 760/492 — unresolved; likely PGM-compatible proprietary melt` | 1.76000 / 49.24 | No catalog entry | abbe | patents/JP2015041012A.pdf | Explicit disposition in data |
| L121 (Element 4) | 7A | `Unmatched (580595 patent-rounded molded crown; vendor unresolved)` | 1.58000 / 59.46 | No catalog entry | abbe | patents/JP2015041012A.pdf | Explicit disposition in data |
| L131 (Element 5) | 9 | `Unmatched (830427 patent-rounded lanthanum glass; vendor unresolved)` | 1.83000 / 42.72 | No catalog entry | abbe | patents/JP2015041012A.pdf | Explicit disposition in data |
| L132 (Element 6) | 10 | `630346 - dense flint (patent nd=1.63000, vd=34.57; no exact public catalog match)` | 1.63000 / 34.57 | No catalog entry | abbe | patents/JP2015041012A.pdf | Audit-log hit |
| L133 (Element 7) | 12A | `680312 - dense flint (patent nd=1.68000, vd=31.16; no exact public catalog match)` | 1.68000 / 31.16 | No catalog entry | abbe | patents/JP2015041012A.pdf | Audit-log hit |

### [SONY VARIO-TESSAR T* FE 16-35mm f/4 ZA OSS](../../src/lens-data/sony/SonyVarioTessarTFE1635mmf4ZAOSS.data.ts) - JP 2015-166834 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L12g (L12 glass substrate) | 3 | `Unmatched (mixed-coordinate patent row; 835427 class)` | 1.83945 / 42.70 | No catalog entry | abbe | patents/JP2015166834A.pdf | Explicit disposition in data |
| L13 (L13) | 6 | `Unmatched (mixed-coordinate patent row; 804466 class)` | 1.80831 / 46.50 | No catalog entry | abbe | patents/JP2015166834A.pdf | Explicit disposition in data |
| L14 (L14) | 8 | `Unmatched (mixed-coordinate patent row; 001291 dense-flint class)` | 2.00912 / 29.10 | No catalog entry | abbe | patents/JP2015166834A.pdf | Explicit disposition in data |
| L41 (L41) | 18 | `Unmatched (mixed-coordinate patent row; 804466 class)` | 1.80831 / 46.50 | No catalog entry | abbe | patents/JP2015166834A.pdf | Explicit disposition in data |
| L44 (L44) | 23A | `Unmatched (mixed-coordinate patent row; 774472 lanthanum-flint class)` | 1.77767 / 47.10 | No catalog entry | abbe | patents/JP2015166834A.pdf | Explicit disposition in data |

### [TAMRON 14-150mm f/3.5-5.8 Di III (C001)](../../src/lens-data/tamron/TamronC00114150mmf3558.data.ts) - US 2014/0347522 A1

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L11 (Element 11) | 22 | `908334 class (catalog unresolved)` | 1.90766 / 33.41 | No catalog entry | abbe | patents/US20140347522A1.pdf | Audit-log hit |

### [VIVITAR SERIES 1 450mm f/4.5 VMC ASPHERICAL MIRROR](../../src/lens-data/vivitar/VivitarSeries1450mmf45.data.ts) - US 4,523,816

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L5 (G2 doublet 1 rear) | 7 | `Unmatched (dense flint 728/261; no official HOYA or SUMITA catalog match)` | 1.72800 / 26.10 | No catalog entry | abbe | patents/US4523816.pdf | Explicit disposition in data |

### [VOIGTLÄNDER NOKTON 60mm f/0.95](../../src/lens-data/voigtlander/VoigtlanderNokton60mmf95.data.ts) - JP 2021-076740 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L1 (Element 1) | 1 | `Unmatched (656337 medium-flint class)` | 1.65568 / 33.69 | No catalog entry | abbe | patents/JPA 2021076740-000000.pdf | Explicit disposition in data |
| L3 (Element 3) | 5 | `Unmatched (852428 high-index lanthanum-crown class)` | 1.85167 / 42.76 | No catalog entry | abbe | patents/JPA 2021076740-000000.pdf | Explicit disposition in data |
| L5 (Element 5) | 9 | `Unmatched (578671 low-dispersion crown class)` | 1.57774 / 67.11 | No catalog entry | abbe | patents/JPA 2021076740-000000.pdf | Explicit disposition in data |
| L7 (Element 7) | 13 | `Unmatched (662331 APD flint; maker-marked, line data unpublished)` | 1.66172 / 33.13 | No catalog entry | abbe | patents/JPA 2021076740-000000.pdf | Explicit disposition in data |
| L8 (Element 8) | 14 | `Unmatched (876363 high-index lanthanum-flint class)` | 1.87648 / 36.27 | No catalog entry | abbe | patents/JPA 2021076740-000000.pdf | Explicit disposition in data |

### [VOIGTLÄNDER NOKTON Vintage Line 50mm f/1.5 Aspherical II VM](../../src/lens-data/voigtlander/VoigtlanderNokton50mmf15AsphericalVM.data.ts) - JP 2022-012964 A

| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |
|---|---|---|---|---|---|---|---|
| L3 (Element 3) | 5 | `Unmatched (nd=1.84202, vd=43.34; code 842433)` | 1.84202 / 43.34 | No catalog entry | abbe | patents/JPA 2022012964-000000.pdf | Explicit disposition in data |
| L7 (Element 7) | 13 | `Unmatched (nd=1.79316, vd=47.24; near 788474/475 lanthanum-flint class)` | 1.79316 / 47.24 | No catalog entry | abbe | patents/JPA 2022012964-000000.pdf | Explicit disposition in data |

