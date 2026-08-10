# Universal Relationship Map — Network Consolidation Research

Research date: 2026-08-10
Scope: `/relationships/universal` (`buildUniversalRelationshipGraph`, `assigneeCorporateHistory.ts`, per-lens `patentAssignees`)

The universal map currently draws **18 disconnected networks**. This document records what fragments them, which
manufacturers / patents / inventors can legitimately reconnect them, and what each change is worth in measured
component count. Every impact number below was produced by replaying candidate edges through
`universalConnectedComponents` against the live catalog graph.

## 1. Measured baseline

| Metric | Value |
|---|---|
| Nodes | 992 (525 patents, 387 inventors, 56 assignees, 17 family hubs, 7 external organizations) |
| Edges | 1401 (1321 authorship/assignment, 80 corporate) |
| Connected components | 18 |
| Largest component | 656 nodes (66%) |
| Assignees with a corporate-history entry | 41 of 56 |

The 18 components, largest first:

| # | Size | Contents |
|---|---|---|
| 1 | 656 | Canon, Nikon, Olympus, Panasonic, Pentax/Hoya/Ricoh, Sony, Konica Minolta, Tamron, Anhui Changgeng |
| 2 | 113 | ZEISS lineage + Fujifilm/Fujinon (joined only by co-assigned JP 2015-161792 A) |
| 3 | 47 | Sigma |
| 4 | 27 | Cosina |
| 5 | 23 | Leitz / Leica (+ Wild Heerbrugg as an external org node) |
| 6 | 17 | Mamiya lineage (+ Olympic Co.) |
| 7 | 16 | Schneider-Kreuznach |
| 8 | 14 | Ponder & Best / Vivitar / Kino Seimitsu |
| 9 | 14 | Voigtländer |
| 10 | 13 | Agfa Camera-Werk + Enna-Werk |
| 11 | 12 | Rodenstock |
| 12 | 10 | Samsung |
| 13 | 7 | Eastman Kodak |
| 14 | 7 | Samyang |
| 15 | 5 | Nittoh |
| 16 | 5 | Pierre Angénieux |
| 17 | 3 | US 2012/0307375 A1 + Takano + Atsuumi — **no assignee recorded** |
| 18 | 3 | US 2018/0164556 A1 + Takahiko Ohishi — **inventor recorded as his own assignee** |

## 2. Why it fragments

Only three edge sources exist, so only three levers can consolidate:

1. **`patentAssignees`** in `*.data.ts` → `assignment` edges. A blank or wrong value orphans a whole subtree.
2. **`patentAuthors`** → `authorship` edges. A person who patented for two firms is the only thing that
   currently bridges corporate groups (e.g. Haruo Sato ties Nikon–Tamron–Konica Minolta).
3. **`assigneeCorporateHistory.ts`** → `successor` / `acquisition` / `subsidiary` / `family` edges.

The registry deliberately records **only ownership and legal-succession events**. Every remaining isolated network
is isolated because its real-world tie to the rest of the industry is a *supply, licensing, or alliance*
relationship — a category the schema cannot express today. That is the single biggest structural finding here.

## 3. Consolidation plan, by tier

Cumulative measured effect: **18 → 4 components**, largest component **656 → 957 nodes (96.5% of the graph)**.

| Tier | Change | Components after |
|---|---|---|
| baseline | — | 18 |
| T1 | Assignee backfill on existing patents | 16 |
| T2 | Corporate-history entries for the 15 uncovered assignees | 16 (density only) |
| T3 | Supplier / OEM / brand-licence edges (**needs schema work**) | 8 |
| T3b | Alliance / joint-development edges (**needs schema work**) | 4 |
| T4 | Two targeted lens additions | 4 |

### T1 — Patent metadata corrections (cheapest, no schema change)

Five patents carry no assignee and one records a person as his own assignee. All six are ordinary corporate
filings.

| Patent | Lens | Recorded | Should be | Effect |
|---|---|---|---|---|
| US 2012/0307375 A1 | RICOH LENS A16 24-85mm | `[]` | Ricoh Co., Ltd. | **dissolves component 17** |
| US 2018/0164556 A1 | PENTAX HD DA* 11-18mm | `["Takahiko Ohishi"]` | Ricoh Imaging Company, Ltd. | **dissolves component 18** |
| US 3,622,227 | NIKKOR-N Auto 24mm f/2.8 | `[]` | Nippon Kogaku K.K. | density inside c1 |
| US 765,006 A | VOIGTLÄNDER DYNAR 100mm f/6 | `[]` | a Voigtländer entity | density inside c9 |
| GB 673,358 A / GB 720,808 | Angénieux Retrofocus | `["Pierre Angénieux"]` | Éts. Pierre Angénieux (firm, not the man) | removes a duplicate-person node |
| US 2,721,499 | CARL ZEISS BIOGON 21mm f/4.5 | `[]` | **unverified** — see §6 | potentially bridges c2↔c5 |

Supporting evidence for the two component-dissolving cases: Hiromichi Atsuumi and Yohei Takano are the named
inventors on Ricoh Co., Ltd.'s closely related zoom-lens family (US 8,649,108 B2 / EP 2500760 A2, "Zoom lens,
camera device, and data terminal device"), and US 2018/0164556 A1 is the design record for a PENTAX-branded lens
whose corporate filer at that date was Ricoh Imaging.

**Duplicate people to reconcile** (they split one person's authorship across two nodes):

- `Hiltrud Schitthof` (US 4,773,745) and `Hiltrud Ebbesmeier née Schitthof` (Schneider) — same person.
- `Motohisa Mori` (US 5,528,428) and `Motohisa Mouri` (US 5,579,169) — both Nikon; likely one person, but
  森 and 毛利 are distinct surnames, so confirm against the patent front pages before merging.
- Do **not** merge `Takashi Suzuki` (Fujifilm) with `Takeshi Suzuki` (Nikon/Tamron) — different people.

Note the inverse risk: author identity is keyed on the exact name string, so common Japanese names silently
*merge* homonyms while romanization variants *split* one person. Both distort the map.

### T2 — Corporate-history entries for the 15 uncovered assignees

These add no new components on their own but give each isolated tree the dated spine the covered makers have.
Researched lineages ready to encode (primary-source URLs still needed — see §6):

| Assignee | Documented lineage |
|---|---|
| Optische Werke G. Rodenstock | Photo optics spun off 1996 as Rodenstock Präzisionsoptik → LINOS Photonics (2000) → Qioptiq (2006) → Excelitas (Oct 2013) |
| Pierre Angénieux → Éts. Pierre Angénieux | Essilor (1986) → Thomson-CSF (July 1993) → Thales |
| Samyang Optics Co., Ltd. | Founded 1972; merged with Seikou (2004); VIG Partners 100% (2013); renamed **LK Samyang Co., Ltd.** (28 Mar 2024) |
| Nittoh Inc. | Founded 1876 (silk); optical from 1943 as Nittō Kōgaku; incorporated 1951 as Nittoh Kogaku K.K.; now styled Nittoh Inc. |
| Kino Seimitsu Kogyo K.K. | Founded 1959 by Tatsuo Kataoka; Kiron brand; merged with Melles Griot Japan (1989) → Kino-Melles Griot; lens output ended ~1989 |
| Mamiya-OP Co., Ltd. | Camera/optical business transferred to Mamiya Digital Imaging (2006); Phase One 45% (2009), full buyout (Dec 2015) |
| Agfa Camera-Werk AG | A. Hch. Rietzschel GmbH → Bayer (1 Mar 1921) → IG Farben (10 Dec 1925), renamed Agfa Camerawerk München; Agfa AG → Agfa-Gevaert (1964) |
| Eastman Kodak Company | Kodak AG Stuttgart (ex-Nagel-Werke) built the Retina line — the hook for the T3 supplier edges below |
| Sigma Corporation | Founded 9 Sep 1961 (Michihiro Yamaki); acquired **Foveon** (2008), still a subsidiary |
| Tamron Co., Ltd. | Incorporated Oct 1952 as Taisei Optical; renamed Tamron Co., Ltd. (1970) |
| Samsung (existing entry) | Extend: Samsung Digital Imaging spun out of **Samsung Techwin** (2009) |
| Hoya, Ricoh Co., Cosina, Anhui Changgeng | No entry yet; Hoya and Ricoh are already reachable in c1 via other edges |

### T3 — Supplier / OEM / brand-licence edges (schema change; biggest single win: 16 → 8)

Every one of these is a documented, dateable commercial relationship between two catalog assignees.

| Relationship | Documented basis | Merges |
|---|---|---|
| **Cosina → Voigtländer** brand licence | Ringfoto acquired the Voigtländer name (1997) and licensed it to Cosina; Cosina began Voigtländer-branded lenses in 1999. The registry **already cites `cosina.co.jp/voigtlander/` as the Voigtländer family source** | c4 + c9 |
| **Cosina → Carl Zeiss** manufacture | Zeiss Ikon ZM bodies and most ZM lenses built by Cosina in Japan for Carl Zeiss (announced 2004, shipped 2005) | c4 + c2 |
| **Eastman Kodak ← Schneider-Kreuznach** | Retina IIc/IIIc/Reflex supplied with Retina-Xenon lenses from Schneider | c13 + c7 |
| **Eastman Kodak ← Rodenstock** | The same Retina bodies alternatively supplied with Retina-Heligon lenses from Rodenstock | c13 + c11 |
| **Samyang → Vivitar** | Samyang lenses sold under the Vivitar brand (among Rokinon, Bower, Opteka, Phoenix, Quantaray) | c14 + c8 |
| **Vivitar ← Cosina** | Cosina among the OEMs building Vivitar-branded lenses (alongside Kino/Kiron, Komine, Tokina) | c8 + c4 |
| **Nittoh → Olympus / Fujifilm / Nikon** | Nittoh Kogaku subcontract-built the Fujipet (1960) and Olympus Trip 35; worked with Nihon Kogaku in the 1940s | c15 + c1 + c2 |
| **Sony ↔ Tamron** shareholding | Sony holds ~15.35% of Tamron and co-developed Sony α lenses (a 2026 Effissimo stake of 17.38% has since overtaken it) | density inside c1 |

### T3b — Alliance / joint-development edges (schema change; 8 → 4)

| Relationship | Documented basis | Merges |
|---|---|---|
| **L-Mount Alliance** — Leica Camera AG + Panasonic + Sigma | Announced 25 Sep 2018 at Photokina; official Leica and Panasonic press releases | **c3 (Sigma, 47 nodes) into c1/c5** |
| **PENTAX + Samsung Techwin** joint development | Agreement signed 12 Oct 2005; Samsung GX-1S is a rebadged Pentax *ist DS2 | **c12 (Samsung) into c1** |
| **Samsung ← Schneider-Kreuznach** brand licence | Samsung D-XENON lenses branded Schneider-Kreuznach | c12 + c7 |
| **Leica ↔ Panasonic** cooperation (from 2001) | Long-running optical/electronics partnership predating the L-Mount Alliance | reinforces c5 ↔ c1 |

These two tiers are what actually break the deadlock. Sigma is the clearest case: it is a genuinely independent
company with no acquisition history to record, so the L-Mount Alliance is the *only* honest edge that will ever
attach its 47 nodes to the rest of the map.

### T4 — Two targeted lens additions (cross-company inventors)

The map already proves that a single inventor working for two firms fuses their networks. Two historical
designers are one lens away from doing exactly that:

- **Albrecht Wilhelm Tronnier** — currently a Voigtländer-only author (5 patents, c9). He joined
  Jos. Schneider Optische Werke on 1 Oct 1924 as head of its scientific/mathematical office, invented the
  **Xenon** there in 1925, and recalculated the Xenon f/2 and Xenar in 1935 before moving to Voigtländer, where he
  led design of the Apo-Lanthar, Skopagon, Nokton and Ultron. **Adding any Schneider-assigned Tronnier patent
  fuses c7 and c9.**
- **Ludwig Bertele** — currently a Zeiss-side author (c2). Ernemann → Zeiss Ikon AG (from the 1926/27 merger,
  designer of the Sonnar and Biogon) → **Wild Heerbrugg AG** in Switzerland after the war, where he designed the
  Aviotar / Aviogon / Super-Aviogon. Wild Heerbrugg **already exists as an organization node in c5** because it
  acquired the Leitz family's shares in 1985. **Adding a Wild Heerbrugg Aviogon fuses c2 (113 nodes) with c5.**

A third, cheaper variant of the same idea: **Ellis I. Betensky, Melvyn H. Kreitzer and Jacob Moskovich** founded
OPCON Associates (1969), which designed the Vivitar Series 1 lenses under contract. Recording OPCON as an
organization node would explain c8's internal structure and give a hook for their later U.S. Precision Lens and
Panavision work.

## 4. What the schema change costs

Adding one relationship kind (e.g. `collaboratedWith`, or a pair `suppliedBy` / `allianceWith`) touches:

1. `src/types/catalog.ts` — new array on `AssigneeCorporateRelationships`.
2. `src/utils/catalog/assigneeCorporateHistory.ts` — data plus `corporateRelationshipsForAssignee` (spreads
   automatically into build metadata via `scripts/author-metadata.mjs:81`).
3. `scripts/author-metadata.d.mts` — declaration parity (this bit the F25 rollout once already).
4. `src/utils/catalog/universalRelationshipGraph.ts` — new `UniversalEdgeKind` + emission block.
5. `src/components/relationshipMap/UniversalRelationshipMap.tsx` — edge colour, dash pattern, description, legend.
6. `src/components/relationshipMap/UniversalEntityDetailCard.tsx` — detail rendering.

Two design cautions:

- These edges are **not ownership**. They should read and render distinctly from `successor`/`acquisition`/
  `subsidiary` so the map does not imply Sigma is a Leica subsidiary.
- The page copy currently promises "dated successor, acquisition, subsidiary, and corporate-family records";
  it needs updating alongside.

## 5. What stays isolated, and why that is correct

After everything above, three components remain — and no documented link was found for any of them:

- **Mamiya (17 nodes)** — the lineage exits the catalog entirely (Mamiya Digital Imaging → Phase One). The
  nearest hop is Phase One's use of Schneider-Kreuznach leaf-shutter lenses, which is two removes from any
  catalog assignee and probably too thin to encode.
- **Agfa + Enna-Werk (13 nodes)** — already internally bridged by Theodor Brendel, who patented for both. Agfa's
  lineage runs to Bayer/IG Farben/Agfa-Gevaert, none of which are optical assignees here.
- **Pierre Angénieux (5 nodes)** — the Essilor → Thomson-CSF → Thales lineage leaves the photographic industry.

Leaving these separate is the honest outcome. The goal is a map that reflects real relationships, not a fully
connected one.

## 6. Verification still required

Patent databases (Google Patents, Justia, Espacenet, USPTO, patentsview) and Wikipedia are **blocked by this
session's egress policy**, so nothing below could be checked against a primary document:

1. **Front-page assignees** for all six T1 patents. `US 2,721,499` matters most — if the Biogon 21mm was assigned
   to Wild Heerbrugg rather than a Zeiss entity, T1 alone would bridge c2 and c5 with no schema change at all.
2. **`Motohisa Mori` vs `Motohisa Mouri`** — confirm one person before merging.
3. **Primary `sourceUrl`s** for every §3 claim. The registry's standard is an official corporate history,
   press release, or gazette; the leads above came from search summaries and secondary references. Known-good
   starting points: `news.panasonic.com/global/press/en180926-4` and the matching Leica press release
   (L-Mount Alliance), `angenieux.com/about-us/history/history-timeline/`, `cosina.co.jp/voigtlander/`
   (already cited in the registry), and Excelitas' Rodenstock/LINOS brand pages.
4. Whether Cosina, Nittoh, and Kino Precision supply relationships are documented well enough by a *primary*
   source to meet the registry bar, or whether they should be recorded with an explicit `note` caveat.
