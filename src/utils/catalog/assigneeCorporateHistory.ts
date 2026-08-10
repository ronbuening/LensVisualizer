/**
 * Curated corporate history for assignee names found in patent records.
 *
 * Patent assignee strings preserve the name printed on the source patent, so a
 * rename, acquisition, or reorganization can split one business lineage across
 * several exact names. This registry records only sourced relationships; the
 * generator supplies empty arrays for assignees without a documented entry.
 *
 * Dates use the precision supported by the linked source. A corporate-family
 * date marks the beginning of the documented lineage or the named entity's
 * membership, not necessarily the first patent filed under that exact English
 * rendering.
 */

import type { AssigneeCorporateRelationships } from "../../types/catalog.js";

type AuthoredCorporateRelationships = Partial<AssigneeCorporateRelationships>;

const SOURCES = {
  canonHistory: "https://global.canon/en/c-museum/history/story04.html",
  fujifilmHistory: "https://global.fujifilm.com/en/about/corporate/history",
  fujifilmAnnual2005:
    "https://ir.fujifilm.com/en/investors/ir-materials/integrated-report/main/016/teaserItems1/01/linkList/0/link/ff_ar_2005_001.pdf",
  fujifilmSustainability2010:
    "https://www.fujifilm.com/files-holdings/en/sustainability/report/2010/sustainability_activity_report_2010_ff_sr_2010_004.pdf",
  fujifilmOverview: "https://global.fujifilm.com/en/about/corporate/overview",
  hoyaPentaxMerger: "https://www.hoya.com/en/news/20111001/",
  konicaMinoltaHistory: "https://www.konicaminolta.com/global-en/corporate/history-timeline04.html",
  konicaMinoltaIntegration: "https://www.konicaminolta.com/about/releases/minolta/2003/0805_01_01.html",
  konicaMinoltaAdvancedLayers: "https://www.konicaminolta.com/about/releases/2012/0221_01_01.html",
  konicaMinoltaReorganization: "https://www.konicaminolta.com/about/releases/2012/1010_01_01.html",
  leica1988: "https://timeline.leica-camera.com/en/years/1988",
  leica1996: "https://timeline.leica-camera.com/en/years/1996",
  leicaHistory: "https://leica-camera.com/en-US/press/four-generations-leitz-company-management-1869-1986",
  mamiyaHistory: "https://www.mamiya-op.co.jp/en/company/history/",
  nikonHistory: "https://www.nikon.com/company/corporate/history/",
  nittohHistory: "https://www.nittohkogaku.co.jp/en/company/history.html",
  olympusFounding: "https://www.olympus-global.com/company/milestones/founding.html?page=company",
  olympusImaging: "https://www.olympus-global.com/company/milestones/history/05.html?page=company",
  olympusAnnual2016: "https://www.olympus-global.com/ir/data/integratedreport/pdf/ar2016e_A3.pdf",
  panasonicHistory: "https://holdings.panasonic/global/corporate/about/history/chronicle/2008.html",
  panasonicIp: "https://www.panasonic.com/jp/company/pipm/company.html",
  panasonicXiamen: "https://panasonic.cn/about/panasonic-china/pavcx/",
  pentaxHistory: "https://www.ricoh-imaging.co.jp/english/pentax/pentaxhistory/",
  ricohHistory: "https://www.ricoh.com/about/history",
  ricohPentaxAcquisition: "https://www.ricoh.com/-/Media/Ricoh/Sites/com/release/2011/pdf/1001.pdf",
  ricohImagingRename: "https://www.ricoh-imaging.co.jp/japan/news/2013/20130702.html",
  samsungMerger: "https://www.samsung.com/global/ir/reports-disclosures/public-disclosure-view.70398/",
  schneiderHistory: "https://schneiderkreuznach.com/en/company/about-us/history",
  sonyReorganization: "https://www.sony.com/en/SonyInfo/News/Press/202005/20-039E/",
  sonyStructure: "https://www.sony.com/en/SonyInfo/News/Press/202011/20-093E/",
  tamronHistory: "https://www.tamron.com/global/company/tamron_history.html",
  vivitarHistory: "https://japb.net/business/company-profiles/vivitar/",
  vivitarNameChange: "https://uprp.gov.pl/sites/default/files/wup/1979/06/wup06_1979.pdf",
  voigtlanderHistory: "https://www.cosina.co.jp/voigtlander/",
  zeissHistory: "https://www.zeiss.com/corporate/en/about-zeiss/past/history.html",
  zeissLocations: "https://www.zeiss.com/corporate/en/about-zeiss/past/history/locations.html",
  zeissSubsidiaries: "https://www.zeiss.com/corporate/en/about-zeiss/past/history/history-of-zeiss-subsidiaries.html",
  zeissFoundation: "https://www.carl-zeiss-stiftung.de/en/foundation/structure",
  zeissIkon: "https://collection.sciencemuseumgroup.org.uk/people/cp102447/zeiss-ikon-ag",
} as const;

/**
 * Keys are exact catalog assignee names. Relationship targets may be catalog
 * names or external organizations that explain the historical transition.
 */
export const ASSIGNEE_CORPORATE_HISTORY: Partial<Record<string, AuthoredCorporateRelationships>> = {
  "Asahi Kogaku Kogyo Co., Ltd.": {
    corporateFamily: [
      {
        family: "Pentax lineage",
        effectiveFrom: "1919-11-27",
        effectiveTo: "2002-10-01",
        sourceUrl: SOURCES.pentaxHistory,
        note: "The source traces PENTAX to Asahi Optical Joint Stock Co.; this is the patent rendering of that lineage.",
      },
    ],
  },
  "Canon Camera Co., Inc.": {
    corporateFamily: [
      {
        family: "Canon",
        effectiveFrom: "1947",
        effectiveTo: "1969-03-01",
        sourceUrl: SOURCES.canonHistory,
        note: "The official history uses Canon Camera Co., Ltd.; patents can render the corporate suffix differently.",
      },
    ],
  },
  "Canon Inc.": {
    successorOf: [
      {
        organization: "Canon Camera Co., Inc.",
        effectiveDate: "1969-03-01",
        sourceUrl: SOURCES.canonHistory,
        note: "Corporate name change; the official history renders the predecessor as Canon Camera Co., Ltd.",
      },
    ],
    corporateFamily: [{ family: "Canon", effectiveFrom: "1969-03-01", sourceUrl: SOURCES.canonHistory }],
  },
  "Carl Zeiss AG": {
    subsidiaryOf: [
      {
        organization: "Carl-Zeiss-Stiftung",
        effectiveFrom: "2004-07-01",
        sourceUrl: SOURCES.zeissFoundation,
        note: "The foundation is the sole shareholder of Carl Zeiss AG.",
      },
    ],
    corporateFamily: [{ family: "ZEISS", effectiveFrom: "2004-07-01", sourceUrl: SOURCES.zeissHistory }],
  },
  "Carl-Zeiss-Stiftung": {
    corporateFamily: [{ family: "ZEISS", effectiveFrom: "1889", sourceUrl: SOURCES.zeissHistory }],
  },
  "Ernst Leitz GmbH": {
    acquiredBy: [
      {
        organization: "Wild Heerbrugg AG",
        effectiveDate: "1985",
        sourceUrl: SOURCES.leicaHistory,
        note: "Wild Heerbrugg acquired the Leitz family's remaining shares.",
      },
    ],
    corporateFamily: [
      {
        family: "Leitz–Leica lineage",
        effectiveFrom: "1869",
        effectiveTo: "1986",
        sourceUrl: SOURCES.leicaHistory,
      },
    ],
  },
  "Fuji Photo Optical Co., Ltd.": {
    corporateFamily: [
      {
        family: "Fujifilm–Fujinon",
        effectiveFrom: "1944-03",
        effectiveTo: "2004-10-01",
        sourceUrl: SOURCES.fujifilmHistory,
      },
    ],
  },
  "Fujifilm Corporation": {
    successorOf: [
      {
        organization: "Fujinon Corporation",
        effectiveDate: "2010-07-01",
        sourceUrl: SOURCES.fujifilmSustainability2010,
        note: "Fujinon was merged into FUJIFILM Corporation on this date.",
      },
    ],
    corporateFamily: [{ family: "Fujifilm–Fujinon", effectiveFrom: "2006-10-01", sourceUrl: SOURCES.fujifilmOverview }],
  },
  "Fujinon Corporation": {
    successorOf: [
      {
        organization: "Fuji Photo Optical Co., Ltd.",
        effectiveDate: "2004-10-01",
        sourceUrl: SOURCES.fujifilmAnnual2005,
        note: "Fuji Photo Optical changed its corporate name to FUJINON CORPORATION.",
      },
    ],
    acquiredBy: [
      {
        organization: "Fujifilm Corporation",
        effectiveDate: "2010-07-01",
        sourceUrl: SOURCES.fujifilmSustainability2010,
        note: "Recorded as an absorption-type merger into FUJIFILM Corporation.",
      },
    ],
    corporateFamily: [
      {
        family: "Fujifilm–Fujinon",
        effectiveFrom: "2004-10-01",
        effectiveTo: "2010-07-01",
        sourceUrl: SOURCES.fujifilmAnnual2005,
      },
    ],
  },
  "Jos. Schneider & Co., Optische Werke": {
    corporateFamily: [
      {
        family: "Schneider-Kreuznach",
        effectiveFrom: "1913",
        sourceUrl: SOURCES.schneiderHistory,
        note: "The date marks the documented company lineage, not the first use of this exact patent rendering.",
      },
    ],
  },
  "Jos. Schneider Optische Werke Kreuznach GmbH & Co. KG": {
    corporateFamily: [
      {
        family: "Schneider-Kreuznach",
        effectiveFrom: "1913",
        sourceUrl: SOURCES.schneiderHistory,
        note: "The date marks the documented company lineage, not the first use of this exact legal style.",
      },
    ],
  },
  "Konica Minolta Advanced Layers, Inc.": {
    successorOf: [
      {
        organization: "Konica Minolta Opto, Inc.",
        effectiveDate: "2012-04-01",
        sourceUrl: SOURCES.konicaMinoltaAdvancedLayers,
      },
    ],
    acquiredBy: [
      {
        organization: "Konica Minolta, Inc.",
        effectiveDate: "2013-04-01",
        sourceUrl: SOURCES.konicaMinoltaReorganization,
        note: "The wholly owned subsidiary was absorbed into the reorganized operating company.",
      },
    ],
    subsidiaryOf: [
      {
        organization: "Konica Minolta Holdings, Inc.",
        effectiveFrom: "2012-04-01",
        effectiveTo: "2013-04-01",
        sourceUrl: SOURCES.konicaMinoltaAdvancedLayers,
      },
    ],
    corporateFamily: [
      {
        family: "Konica Minolta",
        effectiveFrom: "2012-04-01",
        effectiveTo: "2013-04-01",
        sourceUrl: SOURCES.konicaMinoltaAdvancedLayers,
      },
    ],
  },
  "Konica Minolta, Inc.": {
    successorOf: [
      {
        organization: "Minolta Co., Ltd.",
        effectiveDate: "2003-10-01",
        sourceUrl: SOURCES.konicaMinoltaIntegration,
        note: "Minolta's functions passed into the integrated Konica Minolta group; the current operating-company name dates from 2013.",
      },
      {
        organization: "Konica Minolta Advanced Layers, Inc.",
        effectiveDate: "2013-04-01",
        sourceUrl: SOURCES.konicaMinoltaReorganization,
        note: "The subsidiary was absorbed during the operating-company reorganization.",
      },
    ],
    corporateFamily: [
      { family: "Konica Minolta", effectiveFrom: "2003-08-05", sourceUrl: SOURCES.konicaMinoltaHistory },
    ],
  },
  "Leica Camera AG": {
    successorOf: [
      {
        organization: "Ernst Leitz GmbH",
        effectiveDate: "1986",
        sourceUrl: SOURCES.leica1988,
        note: "The photography division became Leica GmbH in 1986 and was operating as Leica Camera AG by 1996.",
      },
    ],
    corporateFamily: [
      {
        family: "Leitz–Leica lineage",
        effectiveFrom: "1986",
        sourceUrl: SOURCES.leica1996,
      },
    ],
  },
  "Mamiya Camera Co., Ltd.": {
    corporateFamily: [
      {
        family: "Mamiya camera lineage",
        effectiveFrom: "1940-05",
        sourceUrl: SOURCES.mamiyaHistory,
        note: "The date marks the documented Mamiya camera lineage, not the first use of this English patent rendering.",
      },
    ],
  },
  "Mamiya Koki Co., Ltd.": {
    acquiredBy: [
      {
        organization: "Olympic Co., Ltd.",
        effectiveDate: "1992-10",
        sourceUrl: SOURCES.mamiyaHistory,
        note: "Mamiya Koki was absorbed into Olympic Co., Ltd., which later became Mamiya-OP.",
      },
    ],
    corporateFamily: [
      {
        family: "Mamiya camera lineage",
        effectiveFrom: "1950-12",
        effectiveTo: "1992-10",
        sourceUrl: SOURCES.mamiyaHistory,
      },
    ],
  },
  "Mamiya Optical Co., Ltd.": {
    corporateFamily: [
      {
        family: "Mamiya camera lineage",
        effectiveFrom: "1940-05",
        sourceUrl: SOURCES.mamiyaHistory,
        note: "The date marks the documented Mamiya camera lineage, not the first use of this English patent rendering.",
      },
    ],
  },
  "Mamiya-OP Co., Ltd.": {
    successorOf: [
      {
        organization: "Mamiya Koki Co., Ltd.",
        effectiveDate: "1993-04",
        sourceUrl: SOURCES.mamiyaHistory,
        note: "Mamiya Koki was absorbed into Olympic in October 1992; Olympic adopted the Mamiya-OP name in April 1993.",
      },
    ],
    corporateFamily: [{ family: "Mamiya camera lineage", effectiveFrom: "1993-04", sourceUrl: SOURCES.mamiyaHistory }],
  },
  "Minolta Co., Ltd.": {
    acquiredBy: [
      {
        organization: "Konica Minolta Holdings, Inc.",
        effectiveDate: "2003-10-01",
        sourceUrl: SOURCES.konicaMinoltaIntegration,
        note: "Minolta's functions were merged into the successor company after the Konica–Minolta integration.",
      },
    ],
    corporateFamily: [
      {
        family: "Konica Minolta",
        effectiveFrom: "2003-08-05",
        effectiveTo: "2003-10-01",
        sourceUrl: SOURCES.konicaMinoltaHistory,
      },
    ],
  },
  "Nikon Corporation": {
    successorOf: [
      {
        organization: "Nippon Kogaku K.K.",
        effectiveDate: "1988-04-01",
        sourceUrl: SOURCES.nikonHistory,
        note: "Corporate name change; the official English history renders the predecessor as Nippon Kogaku K.K.",
      },
    ],
    corporateFamily: [{ family: "Nikon", effectiveFrom: "1988-04-01", sourceUrl: SOURCES.nikonHistory }],
  },
  "Nittoh Inc.": {
    successorOf: [
      {
        organization: "Nittoh Kogaku K.K.",
        effectiveDate: "2017",
        sourceUrl: SOURCES.nittohHistory,
        note: "The official history records the 2017 company-name change from Nittoh Kogaku K.K. to Nittoh Inc.",
      },
    ],
  },
  "Nippon Kogaku K.K.": {
    corporateFamily: [
      {
        family: "Nikon",
        effectiveFrom: "1917-07-25",
        effectiveTo: "1988-04-01",
        sourceUrl: SOURCES.nikonHistory,
      },
    ],
  },
  "Olympus Corporation": {
    successorOf: [
      {
        organization: "Olympus Optical Co., Ltd.",
        effectiveDate: "2003-10-01",
        sourceUrl: SOURCES.olympusFounding,
        note: "Corporate name change from Olympus Optical Co., Ltd.",
      },
      {
        organization: "Olympus Imaging Corporation",
        effectiveDate: "2015-04-01",
        sourceUrl: SOURCES.olympusAnnual2016,
        note: "Olympus Imaging was absorbed into Olympus Corporation.",
      },
    ],
    corporateFamily: [{ family: "Olympus", effectiveFrom: "2003-10-01", sourceUrl: SOURCES.olympusFounding }],
  },
  "Olympus Imaging Corporation": {
    acquiredBy: [
      {
        organization: "Olympus Corporation",
        effectiveDate: "2015-04-01",
        sourceUrl: SOURCES.olympusAnnual2016,
        note: "The wholly owned imaging subsidiary was absorbed into its parent.",
      },
    ],
    subsidiaryOf: [
      {
        organization: "Olympus Corporation",
        effectiveFrom: "2004-10",
        effectiveTo: "2015-04-01",
        sourceUrl: SOURCES.olympusImaging,
      },
    ],
    corporateFamily: [
      {
        family: "Olympus",
        effectiveFrom: "2004-10",
        effectiveTo: "2015-04-01",
        sourceUrl: SOURCES.olympusImaging,
      },
    ],
  },
  "Olympus Optical Co., Ltd.": {
    corporateFamily: [
      {
        family: "Olympus",
        effectiveFrom: "1949-01-01",
        effectiveTo: "2003-10-01",
        sourceUrl: SOURCES.olympusFounding,
      },
    ],
  },
  "Panasonic AVC Networks Xiamen Co., Ltd.": {
    subsidiaryOf: [
      {
        organization: "Panasonic Corporation",
        effectiveFrom: "1993-09-20",
        sourceUrl: SOURCES.panasonicXiamen,
        note: "The source describes the Xiamen company as wholly Japanese-owned within Panasonic's lineage.",
      },
    ],
    corporateFamily: [{ family: "Panasonic", effectiveFrom: "1993-09-20", sourceUrl: SOURCES.panasonicXiamen }],
  },
  "Panasonic Corporation": {
    successorOf: [
      {
        organization: "Matsushita Electric Industrial Co., Ltd.",
        effectiveDate: "2008-10-01",
        sourceUrl: SOURCES.panasonicHistory,
        note: "Corporate name change to Panasonic Corporation.",
      },
    ],
    corporateFamily: [{ family: "Panasonic", effectiveFrom: "2008-10-01", sourceUrl: SOURCES.panasonicHistory }],
  },
  "Panasonic Intellectual Property Management Co., Ltd.": {
    subsidiaryOf: [
      {
        organization: "Panasonic Corporation",
        effectiveFrom: "2014-09-01",
        sourceUrl: SOURCES.panasonicIp,
        note: "The source identifies Panasonic Corporation as the parent at establishment; later group reorganizations may change the immediate parent.",
      },
    ],
    corporateFamily: [{ family: "Panasonic", effectiveFrom: "2014-09-01", sourceUrl: SOURCES.panasonicIp }],
  },
  "Pentax Corporation": {
    successorOf: [
      {
        organization: "Asahi Kogaku Kogyo Co., Ltd.",
        effectiveDate: "2002-10-01",
        sourceUrl: SOURCES.pentaxHistory,
        note: "Corporate name change; the official history uses Asahi Optical Co., Ltd.",
      },
    ],
    acquiredBy: [
      {
        organization: "Hoya Corporation",
        effectiveDate: "2008-03-31",
        sourceUrl: SOURCES.hoyaPentaxMerger,
        note: "PENTAX merged into HOYA; its imaging business was later transferred to Ricoh.",
      },
      {
        organization: "Ricoh Co., Ltd.",
        effectiveDate: "2011-10-01",
        sourceUrl: SOURCES.ricohPentaxAcquisition,
        note: "Ricoh acquired the PENTAX imaging business from HOYA, rather than the already-merged legal entity wholesale.",
      },
    ],
    corporateFamily: [
      {
        family: "Pentax lineage",
        effectiveFrom: "2002-10-01",
        effectiveTo: "2008-03-31",
        sourceUrl: SOURCES.pentaxHistory,
      },
      {
        family: "HOYA",
        effectiveFrom: "2008-03-31",
        effectiveTo: "2011-10-01",
        sourceUrl: SOURCES.hoyaPentaxMerger,
        note: "Covers the PENTAX imaging business while it was held by HOYA.",
      },
      {
        family: "Ricoh",
        effectiveFrom: "2011-10-01",
        sourceUrl: SOURCES.ricohPentaxAcquisition,
        note: "Covers the transferred PENTAX imaging business, not the former legal entity as a whole.",
      },
    ],
  },
  "Pentax Ricoh Imaging Company, Ltd.": {
    successorOf: [
      {
        organization: "Pentax Corporation",
        effectiveDate: "2011-10-01",
        sourceUrl: SOURCES.ricohPentaxAcquisition,
        note: "The new Ricoh subsidiary inherited the acquired PENTAX imaging business.",
      },
    ],
    subsidiaryOf: [
      {
        organization: "Ricoh Co., Ltd.",
        effectiveFrom: "2011-10-01",
        effectiveTo: "2013-08-01",
        sourceUrl: SOURCES.ricohPentaxAcquisition,
      },
    ],
    corporateFamily: [
      {
        family: "Ricoh",
        effectiveFrom: "2011-10-01",
        effectiveTo: "2013-08-01",
        sourceUrl: SOURCES.ricohPentaxAcquisition,
      },
    ],
  },
  "Ponder & Best, Inc.": {
    corporateFamily: [
      {
        family: "Ponder & Best–Vivitar",
        effectiveFrom: "1938",
        effectiveTo: "1979-02-28",
        sourceUrl: SOURCES.vivitarHistory,
        note: "The exact end date is corroborated by the government gazette cited on Vivitar Corporation's successor record.",
      },
    ],
  },
  "Ricoh Imaging Company, Ltd.": {
    successorOf: [
      {
        organization: "Pentax Ricoh Imaging Company, Ltd.",
        effectiveDate: "2013-08-01",
        sourceUrl: SOURCES.ricohImagingRename,
        note: "Corporate name change.",
      },
    ],
    subsidiaryOf: [
      { organization: "Ricoh Co., Ltd.", effectiveFrom: "2013-08-01", sourceUrl: SOURCES.ricohImagingRename },
    ],
    corporateFamily: [{ family: "Ricoh", effectiveFrom: "2013-08-01", sourceUrl: SOURCES.ricohHistory }],
  },
  "Samsung Digital Imaging Co., Ltd.": {
    acquiredBy: [
      {
        organization: "Samsung Electronics Co., Ltd.",
        effectiveDate: "2010-04-01",
        sourceUrl: SOURCES.samsungMerger,
        note: "Samsung Electronics completed the merger with Samsung Digital Imaging.",
      },
    ],
    corporateFamily: [
      {
        family: "Samsung",
        effectiveFrom: "2009",
        effectiveTo: "2010-04-01",
        sourceUrl: SOURCES.samsungMerger,
      },
    ],
  },
  "Samsung Electronics Co., Ltd.": {
    successorOf: [
      {
        organization: "Samsung Digital Imaging Co., Ltd.",
        effectiveDate: "2010-04-01",
        sourceUrl: SOURCES.samsungMerger,
        note: "Samsung Digital Imaging was merged into Samsung Electronics.",
      },
    ],
    corporateFamily: [{ family: "Samsung", effectiveFrom: "2010-04-01", sourceUrl: SOURCES.samsungMerger }],
  },
  "Sony Corporation": {
    subsidiaryOf: [
      {
        organization: "Sony Group Corporation",
        effectiveFrom: "2021-04-01",
        sourceUrl: SOURCES.sonyStructure,
        note: "This describes the post-2021 electronics operating company. Older patents under the same exact name refer to the former parent company.",
      },
    ],
    corporateFamily: [
      {
        family: "Sony",
        effectiveFrom: "1946",
        sourceUrl: SOURCES.sonyReorganization,
        note: "The same exact name was used by the pre-2021 parent and the post-2021 electronics subsidiary.",
      },
    ],
  },
  "Sony Group Corporation": {
    successorOf: [
      {
        organization: "Sony Corporation",
        effectiveDate: "2021-04-01",
        sourceUrl: SOURCES.sonyReorganization,
        note: "The former parent Sony Corporation changed its name to Sony Group Corporation; a different operating subsidiary inherited the Sony Corporation name.",
      },
    ],
    corporateFamily: [{ family: "Sony", effectiveFrom: "2021-04-01", sourceUrl: SOURCES.sonyReorganization }],
  },
  "Tamron Co., Ltd.": {
    successorOf: [
      {
        organization: "Taisei Optical Equipment Manufacturing Inc.",
        effectiveDate: "1970-04",
        sourceUrl: SOURCES.tamronHistory,
        note: "The official history records the April 1970 company-name change to Tamron Co., Ltd.",
      },
    ],
  },
  "VEB Carl Zeiss Jena": {
    acquiredBy: [
      {
        organization: "Carl Zeiss (Oberkochen)",
        effectiveDate: "1991",
        sourceUrl: SOURCES.zeissSubsidiaries,
        note: "Carl Zeiss acquired selected parts of the former VEB after German reunification, not the entire historical combine unchanged.",
      },
    ],
    corporateFamily: [
      {
        family: "ZEISS",
        effectiveFrom: "1948",
        effectiveTo: "1991",
        sourceUrl: SOURCES.zeissLocations,
        note: "East German branch of the divided ZEISS lineage.",
      },
    ],
  },
  "Vivitar Corporation": {
    successorOf: [
      {
        organization: "Ponder & Best, Inc.",
        effectiveDate: "1979-02-28",
        sourceUrl: SOURCES.vivitarNameChange,
        note: "A government trademark gazette records the change from Ponder & Best, Inc. to Vivitar Corporation.",
      },
    ],
    corporateFamily: [
      {
        family: "Ponder & Best–Vivitar",
        effectiveFrom: "1979-02-28",
        sourceUrl: SOURCES.vivitarHistory,
      },
    ],
  },
  "Voigtländer & Sohn AG": {
    corporateFamily: [
      {
        family: "Voigtländer",
        effectiveFrom: "1756",
        sourceUrl: SOURCES.voigtlanderHistory,
        note: "The date marks the documented brand lineage, not the first use of this exact corporate style.",
      },
    ],
  },
  "Voigtländer & Sohn Aktiengesellschaft": {
    corporateFamily: [
      {
        family: "Voigtländer",
        effectiveFrom: "1756",
        sourceUrl: SOURCES.voigtlanderHistory,
        note: "The date marks the documented brand lineage, not the first use of this exact corporate style.",
      },
    ],
  },
  "Voigtländer A.G.": {
    corporateFamily: [
      {
        family: "Voigtländer",
        effectiveFrom: "1756",
        sourceUrl: SOURCES.voigtlanderHistory,
        note: "The date marks the documented brand lineage, not the first use of this exact corporate style.",
      },
    ],
  },
  "Zeiss Ikon AG": {
    subsidiaryOf: [
      {
        organization: "Carl Zeiss Jena",
        effectiveFrom: "1926",
        sourceUrl: SOURCES.zeissIkon,
        note: "The museum record describes Zeiss Ikon as formed by Carl Zeiss Jena from four camera makers.",
      },
    ],
    corporateFamily: [{ family: "ZEISS", effectiveFrom: "1926", sourceUrl: SOURCES.zeissIkon }],
  },
};

/** Return a complete, independent set of relationship arrays for generation. */
export function corporateRelationshipsForAssignee(name: string): AssigneeCorporateRelationships {
  const relationships: AuthoredCorporateRelationships | undefined = ASSIGNEE_CORPORATE_HISTORY[name];
  return {
    successorOf: [...(relationships?.successorOf ?? [])],
    acquiredBy: [...(relationships?.acquiredBy ?? [])],
    subsidiaryOf: [...(relationships?.subsidiaryOf ?? [])],
    corporateFamily: [...(relationships?.corporateFamily ?? [])],
  };
}
