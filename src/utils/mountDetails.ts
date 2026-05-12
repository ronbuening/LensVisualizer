/**
 * Lens mount descriptions for the /mounts index and detail pages.
 *
 * Keyed by canonical LensMountId values from lensTaxonomy.ts. Entries are
 * intentionally compact: enough history and system context to help users
 * browse clusters without turning the mount pages into full articles.
 */

import type { LensMountId } from "./lensTaxonomy.js";

export interface MountDetails {
  summary: string;
  description: string;
  era?: string;
  formatNotes?: string;
}

export const MOUNT_DETAILS: Partial<Record<LensMountId, MountDetails>> = {
  "canon-ef": {
    era: "Canon EOS SLR and DSLR mount, introduced in 1987",
    formatNotes: "35 mm film and full-frame digital, with APS-C EF-S bodies using a related short-back-focus variant",
    summary: "Canon's fully electronic EOS SLR mount, built around in-lens autofocus motors and a large 54 mm throat.",
    description:
      "Canon EF was a decisive break from the mechanical FD system. Every aperture and focus command is electronic, and autofocus motors live in the lens rather than the camera body. That architecture let Canon introduce ring-type USM telephotos, image-stabilized lenses, and a broad professional DSLR lens family without maintaining older mechanical couplings.\n\nThe mount's large throat and long SLR flange distance make it a classic full-frame reflex platform: generous enough for fast L-series primes and telephotos, but still constrained by mirror clearance for wide-angle designs. In this catalog, EF lenses represent Canon's mature autofocus SLR era before the shorter-flange RF mirrorless system.",
  },
  "canon-fd": {
    era: "Canon manual-focus SLR mount, 1971-1980s",
    formatNotes: "35 mm film",
    summary:
      "Canon's mature manual-focus SLR mount, associated with FD and New FD lenses for the F-1, AE-1, and A-series cameras.",
    description:
      "Canon FD evolved from the earlier FL/R SLR lineage into the company's main manual-focus system. It supports open-aperture metering and automatic aperture operation, and later New FD lenses simplified mounting with a rotating rear bayonet instead of the earlier breech-lock collar.\n\nFD is optically important because it spans Canon's most ambitious pre-EOS lens design period: fast standards, compact wide angles, telephotos, macro lenses, and early special-purpose optics. Its mechanical interface became a dead end once Canon moved to EF, but FD lenses remain a rich record of Canon's manual-focus optical engineering.",
  },
  "canon-rf": {
    era: "Canon full-frame mirrorless mount, introduced in 2018",
    formatNotes: "Full-frame and APS-C EOS R mirrorless bodies",
    summary:
      "Canon's short-flange EOS R mirrorless mount, keeping EF's 54 mm throat while adding a denser electronic interface.",
    description:
      "Canon RF combines a large throat with a much shorter flange distance than EF. That gives lens designers more freedom near the rear of the lens, especially for fast normals, ultra-wides, and compact zooms whose back focus no longer has to clear an SLR mirror box.\n\nThe mount is also a data-interface reset. RF lenses communicate through more contacts than EF and support newer control concepts such as programmable control rings and specialized aberration controls on select lenses. In the catalog, RF pages tend to show Canon using mirrorless geometry to revisit classic L-series ideas with fewer reflex-era compromises.",
  },
  "contax-rf": {
    era: "Zeiss Ikon Contax rangefinder mount, 1930s-1960s",
    formatNotes: "35 mm rangefinder",
    summary:
      "The classic Zeiss Ikon Contax rangefinder mount, famous for compact Sonnar and Biogon-era rangefinder optics.",
    description:
      "The Contax rangefinder mount was Zeiss Ikon's answer to Leica's thread-mount system. It uses a distinctive internal/external bayonet arrangement and was built around high-precision rangefinder bodies such as the Contax II and III.\n\nIts optical legacy is enormous: fast Sonnars, compact Tessars, and wide-angle Biogon-style lenses helped define prewar and postwar 35 mm rangefinder photography. Compared with SLR mounts, the short register and absence of a mirror box allowed very compact wide and normal lenses, but the rangefinder coupling also imposed close-focus and telephoto practical limits.",
  },
  exakta: {
    era: "Ihagee Exakta SLR mount, 1930s-1960s",
    formatNotes: "35 mm SLR",
    summary: "An early 35 mm SLR bayonet used by Ihagee Exakta bodies and supported by many German optical makers.",
    description:
      "Exakta was one of the earliest serious interchangeable-lens 35 mm SLR systems. Its bayonet mount predates many later SLR standards, and the system attracted lenses from Carl Zeiss Jena, Schneider, Meyer-Optik, Steinheil, and other European makers.\n\nBecause the mount sits at the beginning of the SLR era, Exakta lenses often show designers adapting rangefinder and plate-camera formulas to mirror-box constraints. The result is a useful historical bridge: classic Tessar, Biotar, Primoplan, and telephoto designs in a true reflex viewing system.",
  },
  "fixed-lens-camera": {
    era: "Integrated camera-lens designs",
    formatNotes: "Varies by camera, from compact digital sensors to 35 mm film and APS-C",
    summary:
      "Non-interchangeable camera lenses where the optical formula is designed as part of a complete camera body.",
    description:
      "Fixed-lens cameras do not have a mount in the interchangeable-lens sense. The lens, shutter, sensor or film gate, focusing mechanism, and body packaging can all be optimized together, which often enables designs that would be awkward or impossible as removable lenses.\n\nThis category is useful for catalog browsing because many important optical designs live in fixed-lens cameras: premium compacts, rangefinders, GR-style wide-angle cameras, and integrated zoom compacts. When a lens appears here, the page is clustering by camera architecture rather than a bayonet standard.",
  },
  "fujifilm-g": {
    era: "Fujifilm GFX medium-format mirrorless mount, introduced in 2017",
    formatNotes: "44 x 33 mm digital medium format",
    summary:
      "Fujifilm's mirrorless medium-format mount for GFX bodies, built around a larger-than-full-frame image circle.",
    description:
      "Fujifilm G mount serves the GFX system and its 44 x 33 mm digital medium-format sensor. The mount pairs a short mirrorless register with a large image circle, allowing lenses that cover more field than full-frame designs while avoiding the long body depth of medium-format SLR systems.\n\nGF lenses tend to prioritize high resolution, low field curvature, and controlled chromatic aberration across a large sensor. The designs in this cluster are useful comparisons against full-frame mirrorless lenses because they show how optical layouts scale when the image circle grows but mirrorless back-focus freedom remains.",
  },
  "fujifilm-x": {
    era: "Fujifilm APS-C mirrorless mount, introduced in 2012",
    formatNotes: "APS-C digital",
    summary: "Fujifilm's APS-C mirrorless mount, optimized around compact bodies and dedicated XF/XC image circles.",
    description:
      "Fujifilm X mount was designed for APS-C mirrorless cameras rather than adapted down from full-frame. That lets many XF lenses balance compact size with relatively ambitious apertures, because the image circle and field angles are matched directly to the smaller sensor.\n\nThe mount has become a broad APS-C ecosystem covering fast primes, compact pancakes, high-end zooms, macro lenses, and long telephotos. In this catalog, X-mount designs are useful for seeing how modern optical correction changes when designers commit fully to APS-C instead of scaling a full-frame formula.",
  },
  "hasselblad-h": {
    era: "Hasselblad autofocus medium-format SLR mount, introduced in 2002",
    formatNotes: "645 film and digital medium format",
    summary:
      "Hasselblad's autofocus H-system mount, pairing medium-format coverage with electronically controlled leaf-shutter lenses.",
    description:
      "The Hasselblad H mount replaced the classic V-system square-format architecture with a modern autofocus 645 platform. HC and HCD lenses include electronic leaf shutters, giving studio photographers flash synchronization advantages while serving film backs and digital backs across several generations.\n\nOptically, H-system lenses sit between traditional medium-format SLR design and modern digital correction. They must cover a large image area, maintain high uniformity for high-resolution backs, and fit a professional modular camera system built for studio, portrait, fashion, and commercial work.",
  },
  "hasselblad-xcd": {
    era: "Hasselblad X-system mirrorless medium-format mount, introduced in 2016",
    formatNotes: "44 x 33 mm digital medium format",
    summary: "Hasselblad's compact medium-format mirrorless mount, used by X1D, X2D, and 907X cameras.",
    description:
      "XCD is Hasselblad's short-flange mirrorless medium-format mount. It was designed around the same 44 x 33 mm sensor class used by many modern digital medium-format systems, but in bodies much smaller than traditional modular SLR platforms.\n\nMost XCD lenses include leaf shutters, preserving a key Hasselblad working style while shrinking the camera system. The optical challenge is substantial: large image circle, compact barrel expectations, high-resolution digital capture, and quiet autofocus all in one package.",
  },
  "l-mount": {
    era: "Leica L mount and L-Mount Alliance mirrorless system",
    formatNotes: "Full-frame and APS-C mirrorless",
    summary: "A short-flange mirrorless mount shared by Leica, Panasonic, and Sigma for full-frame and APS-C systems.",
    description:
      "The L mount began as Leica's mirrorless mount and later became the basis of the L-Mount Alliance with Panasonic and Sigma. It supports both full-frame and APS-C bodies and gives lens designers the short register expected of modern mirrorless systems.\n\nIts importance is partly ecosystemic: the same mount can host Leica SL lenses, Panasonic Lumix S lenses, Sigma DG DN lenses, and adapted M-mount lenses. In catalog terms, L-mount pages often show how different manufacturers interpret the same full-frame mirrorless geometry with very different priorities.",
  },
  "leica-ltm": {
    era: "Leica Thread Mount / M39 rangefinder standard, 1930s-1950s",
    formatNotes: "35 mm rangefinder",
    summary: "The screw-mount Leica rangefinder standard that established many early 35 mm lens conventions.",
    description:
      "Leica Thread Mount, often called LTM or M39, is the 39 mm screw mount used by early Leica rangefinders and many compatible cameras. Its short register and compact bodies helped make 35 mm still photography practical and portable.\n\nThe mount became a de facto rangefinder standard, with lenses from Leica, Canon, Nikon, Soviet makers, and many others. LTM designs often emphasize compactness and simple, high-contrast formulas: Tessar derivatives, Sonnars, double-Gauss normals, and early wide-angle rangefinder lenses.",
  },
  "leica-m": {
    era: "Leica M rangefinder bayonet, introduced in 1954",
    formatNotes: "35 mm rangefinder and full-frame digital M bodies",
    summary:
      "Leica's long-running rangefinder bayonet, known for compact manual-focus lenses and precise mechanical coupling.",
    description:
      "Leica M replaced the earlier thread mount with a faster bayonet interface and frame-line coupling. It kept the short rangefinder register that makes compact wide and normal lenses possible, while improving handling for professional reportage and street photography.\n\nThe mount's constraints are as defining as its freedoms. Lenses must work with rangefinder coupling, viewfinder frame lines, and limited close-focus travel, but they can avoid SLR mirror clearance. That combination produced many famously compact Summicron, Summilux, Elmarit, Noctilux, and APO-Summicron designs.",
  },
  "leica-r": {
    era: "Leica manual-focus SLR mount, 1960s-2000s",
    formatNotes: "35 mm SLR",
    summary: "Leica's SLR mount for R-series bodies, carrying rangefinder-era optical standards into reflex cameras.",
    description:
      "Leica R was the company's 35 mm SLR system, developed after Leica recognized that rangefinders could not cover every professional use case. The mount supported manual-focus reflex bodies and a lens family spanning wide angles, macros, telephotos, and specialized perspective-control optics.\n\nR lenses often prioritize mechanical precision and optical correction over compactness. Compared with M lenses, they must clear an SLR mirror and can support longer focal lengths and closer focusing more naturally, making the mount a useful counterpoint to Leica's rangefinder tradition.",
  },
  m42: {
    era: "42 mm screw-mount SLR standard, 1940s-1970s",
    formatNotes: "35 mm SLR",
    summary: "A widely adopted screw-mount SLR standard used by Pentax, Praktica, Fujica, Zeiss Jena, and many others.",
    description:
      "M42 became one of the most important open 35 mm SLR lens standards. It is mechanically simple, broadly compatible, and was used by many camera makers before proprietary bayonets became dominant.\n\nBecause so many companies built for M42, the mount gathers a wide range of optical traditions: Takumars from Asahi Pentax, Carl Zeiss Jena Pancolars and Flektogons, Fujinon EBC lenses, Soviet Helios and Mir designs, and many third-party optics. It is one of the best mount clusters for comparing common focal lengths across manufacturers.",
  },
  "micro-four-thirds": {
    era: "Mirrorless Four Thirds standard, introduced in 2008",
    formatNotes: "Four Thirds digital sensor",
    summary:
      "The open mirrorless standard from Olympus and Panasonic, built around compact interchangeable lenses for a Four Thirds sensor.",
    description:
      "Micro Four Thirds removed the mirror box from the earlier Four Thirds DSLR system while keeping the same sensor format. The short register enabled very compact bodies and lenses, especially wide angles and collapsible zooms.\n\nThe smaller sensor changes optical tradeoffs: equivalent depth of field is deeper at a given angle of view, image circles are smaller, and telephoto reach can be packaged efficiently. The mount's open nature also encouraged a broad ecosystem of Panasonic, Olympus/OM System, Sigma, Voigtlander, and specialty lenses.",
  },
  "minolta-sr": {
    era: "Minolta SR/MC/MD manual-focus SLR mount, 1958-1980s",
    formatNotes: "35 mm SLR",
    summary: "Minolta's manual-focus SLR mount, home to Rokkor lenses and the SR, SRT, XD, and X-series bodies.",
    description:
      "Minolta SR is the mechanical foundation behind the company's MC and MD lens families. It began with early SR bodies and matured through open-aperture metering, aperture-priority and program-exposure support, and compact late MD lenses.\n\nThe mount's Rokkor optics are known for strong mechanical build and a wide range of distinctive primes. In this catalog, Minolta SR designs show the company's manual-focus optical style before the autofocus A-mount changed the lens-body interface completely.",
  },
  "nikon-f": {
    era: "Nikon F SLR mount, introduced in 1959",
    formatNotes: "35 mm film, full-frame digital, and APS-C DX variants",
    summary:
      "Nikon's long-lived SLR bayonet, spanning manual Nikkors, autofocus F-mount lenses, and modern DSLR optics.",
    description:
      "Nikon F is one of the longest-running interchangeable-lens mounts in photography. Its original mechanical bayonet survived through metering prong changes, AI indexing, AF screw-drive, in-lens AF-S motors, electronic apertures, vibration reduction, and DSLR-era CPU contacts.\n\nThat continuity makes F-mount pages unusually broad. A single mount family contains early rangefinder-influenced SLR optics, classic manual Nikkors, professional AF-D and AF-S lenses, DX lenses for APS-C DSLRs, and late high-performance full-frame DSLR designs. The tradeoff is historical complexity: compatibility depends heavily on body and lens generation.",
  },
  "nikon-s": {
    era: "Nikon rangefinder mount, 1940s-1960s",
    formatNotes: "35 mm rangefinder",
    summary:
      "Nikon's classic rangefinder mount, closely associated with postwar Nikkor lenses and the Nikon S-series cameras.",
    description:
      "Nikon S mount belongs to the company's postwar rangefinder system, developed before the Nikon F shifted the brand toward SLRs. The mount is mechanically related in concept to the Contax rangefinder standard and supported compact Nikkor lenses that helped establish Nikon's optical reputation internationally.\n\nS-mount lenses show Nikon's rangefinder-era priorities: bright normals, compact wides, and telephoto lenses designed around coupled rangefinder focusing. They are a useful historical prelude to Nikon F because many optical ideas and focal-length conventions carried forward into the SLR era.",
  },
  "nikon-z": {
    era: "Nikon mirrorless mount, introduced in 2018",
    formatNotes: "Full-frame FX and APS-C DX mirrorless",
    summary:
      "Nikon's short-flange mirrorless mount, combining a very wide throat with modern electronic communication.",
    description:
      "Nikon Z was designed as a clean mirrorless reset after decades of F-mount continuity. Its short register and wide throat give designers more freedom for large rear elements, fast normals, high-performance wide angles, and compact lenses that would be difficult on a reflex body.\n\nThe mount covers both full-frame FX and APS-C DX mirrorless cameras. Z lenses often show Nikon using the new geometry to reduce aberrations at wide apertures, flatten fields, and simplify retrofocus wide-angle layouts compared with F-mount DSLR designs.",
  },
  "olympus-om": {
    era: "Olympus OM manual-focus SLR mount, 1970s-2000s",
    formatNotes: "35 mm SLR",
    summary: "Olympus's compact manual-focus SLR mount, designed around small bodies and the Zuiko lens system.",
    description:
      "Olympus OM was built around the idea that professional 35 mm SLRs could be smaller, quieter, and more elegant without giving up capability. The mount supported compact Zuiko lenses and bodies such as the OM-1, OM-2, OM-3, and OM-4.\n\nOM lenses often emphasize small size and refined mechanical handling. Wide-angle and macro designs are especially important in the system, and many Zuiko primes remain notable for fitting serious optical correction into barrels smaller than competing SLR lenses.",
  },
  "pentax-110": {
    era: "Pentax Auto 110 miniature SLR mount, late 1970s-1980s",
    formatNotes: "110 film",
    summary: "A tiny interchangeable-lens mount for the Pentax Auto 110, one of the smallest true SLR systems made.",
    description:
      "Pentax 110 is a specialized miniature SLR mount built for 110 cartridge film. The Auto 110 system used extremely small interchangeable lenses while keeping reflex viewing, making it an unusual mix of compact-camera format and SLR architecture.\n\nBecause the image area is small, the lenses can be physically tiny. The optical compromises and possibilities are different from 35 mm systems: short focal lengths, small image circles, and compact groups dominate the designs.",
  },
  "pentax-k": {
    era: "Pentax K bayonet, introduced in 1975",
    formatNotes: "35 mm film, APS-C digital, and full-frame digital",
    summary: "Pentax's durable SLR bayonet, spanning manual K lenses, autofocus KAF generations, and modern DSLRs.",
    description:
      "Pentax K replaced M42 screw mount with a bayonet while preserving a strong continuity ethos. The mount has evolved through manual-aperture lenses, A-series electronic aperture information, autofocus KAF variants, digital APS-C DSLRs, and full-frame K-1 bodies.\n\nThe K mount is unusually adapter-friendly and backward-compatible compared with many camera systems. Its lens history includes compact Limited primes, rugged DA and D FA lenses, classic SMC coatings, and medium-budget third-party support from the film era onward.",
  },
  "sigma-sa": {
    era: "Sigma SA autofocus SLR and mirrorless mount, 1990s-2010s",
    formatNotes: "Primarily APS-C and full-frame Sigma bodies",
    summary: "Sigma's proprietary camera mount, used for SA-mount film bodies, DSLRs, and Foveon-sensor cameras.",
    description:
      "Sigma SA was the company's own autofocus mount for cameras sold alongside its third-party lens business. It hosted Sigma film SLRs, digital SD bodies, and lenses adapted from Sigma's broader optical catalog.\n\nThe mount is most interesting because it pairs Sigma lens design with Sigma's Foveon-sensor camera lineage. SA pages in this catalog represent a smaller ecosystem than Canon, Nikon, or Sony mounts, but they show Sigma as a complete camera-system maker rather than only an independent lens supplier.",
  },
  "sony-a": {
    era: "Minolta A / Sony A autofocus SLR mount, introduced in 1985",
    formatNotes: "35 mm film, APS-C digital, and full-frame digital",
    summary: "The autofocus SLR mount inherited by Sony from Minolta, later used by Alpha DSLR and SLT bodies.",
    description:
      "Sony A mount descends from Minolta's autofocus A mount. It began as a body-driven AF SLR system and later gained in-lens motors, digital communication, and compatibility with Sony Alpha DSLR and translucent-mirror SLT cameras.\n\nThe system matters because it bridges Minolta's autofocus innovations and Sony's later mirrorless rise. A-mount lenses include classic Minolta G optics, Sony G lenses, and Zeiss ZA collaborations, all designed around SLR flange geometry before E mount became Sony's main platform.",
  },
  "sony-fe": {
    era: "Sony E mount, introduced for APS-C in 2010 and full-frame in 2013",
    formatNotes: "APS-C E and full-frame FE mirrorless",
    summary: "Sony's short-flange mirrorless mount, now one of the broadest APS-C and full-frame lens ecosystems.",
    description:
      "Sony E mount began with compact APS-C NEX cameras and expanded to full-frame Alpha bodies with FE lenses. The short flange distance made it highly adaptable, while Sony's early full-frame mirrorless push attracted extensive third-party lens support.\n\nThe mount's single mechanical standard spans small APS-C lenses, professional full-frame GM lenses, Zeiss-branded collaborations, cinema-oriented optics, and manual-focus specialty lenses. In this catalog, Sony E/FE designs are useful for comparing how the same mount handles both compactness and very high performance.",
  },
  "yashica-contax": {
    era: "Contax/Yashica SLR mount, 1970s-2000s",
    formatNotes: "35 mm SLR",
    summary: "The SLR mount shared by Yashica and Contax bodies, famous for Carl Zeiss T* manual-focus lenses.",
    description:
      "The Contax/Yashica mount joined Yashica camera bodies with Carl Zeiss-designed lenses in a 35 mm SLR system. It became a favorite among photographers who wanted Zeiss optical character in a more modern reflex platform than earlier Contax rangefinders.\n\nC/Y lenses include Planars, Distagons, Sonnars, Makro-Planars, and specialty lenses with Zeiss T* coatings. The mount is historically important as a bridge from classic Zeiss formulas into late manual-focus SLR photography.",
  },
  "zeiss-contarex": {
    era: "Zeiss Ikon Contarex SLR mount, 1950s-1970s",
    formatNotes: "35 mm SLR",
    summary:
      "Zeiss Ikon's premium Contarex SLR mount, paired with mechanically elaborate bodies and high-end Zeiss lenses.",
    description:
      "Contarex was Zeiss Ikon's ambitious premium 35 mm SLR system. The bodies were complex and expensive, and the lenses carried Zeiss's high-end optical identity into the reflex era.\n\nThe mount's lens family includes Planar, Distagon, Sonnar, Tessar, and specialty optics built to very high mechanical standards. Contarex never became a mass-market standard, but it remains one of the clearest examples of Zeiss translating its rangefinder and large-camera heritage into a no-compromise SLR system.",
  },
};

export function getMountDetails(mountId: LensMountId): MountDetails | null {
  return MOUNT_DETAILS[mountId] ?? null;
}
