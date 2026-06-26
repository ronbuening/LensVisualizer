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

export const MOUNT_DETAILS: Record<LensMountId, MountDetails> = {
  "canon-ef": {
    era: "Canon EOS SLR and DSLR mount, introduced in 1987",
    formatNotes:
      "35 mm film and full-frame digital, with APS-C EF-S lenses using the same register but a deeper rear envelope",
    summary: "Canon's fully electronic EOS SLR mount, built around in-lens autofocus motors and a large 54 mm throat.",
    description:
      "Canon EF was a decisive break from the mechanical FD system. Every aperture and focus command is electronic, and autofocus motors live in the lens rather than the camera body. That architecture let Canon introduce ring-type USM telephotos, image-stabilized lenses, diffractive-optics experiments, and a broad professional DSLR lens family without maintaining older mechanical couplings.\n\nThe mount's 54 mm throat and 44 mm SLR flange distance make it a classic full-frame reflex platform: generous enough for fast L-series primes and telephotos, but still constrained by mirror clearance for wide-angle designs. EF-S later used the same register and an EF-derived interface for APS-C cameras, but EF-S lenses could project farther into the mirror box and were mechanically keyed away from full-frame bodies. That distinction matters when a patent formula is EF-compatible in one version and crop-only in another.\n\nEF is also a good example of a camera maker treating the lens as a controlled electromechanical module. Ultrasonic motors, optical stabilization, electronic diaphragms in later lenses, and distance reporting could evolve without changing the basic bayonet. In this catalog, EF lenses represent Canon's mature autofocus SLR era before the shorter-flange RF mirrorless system, and they are especially useful for comparing late reflex optical correction against mirrorless successors that no longer need to preserve the same back-focus envelope.",
  },
  "canon-ef-s": {
    era: "Canon APS-C EOS DSLR mount, introduced in 2003",
    formatNotes: "APS-C digital",
    summary: "Canon's APS-C EOS DSLR mount, sharing EF electronics and register with a crop-only rear envelope.",
    description:
      "Canon EF-S adapts the electronic EOS SLR interface to APS-C DSLR bodies. It keeps EF's 44 mm flange distance and lens communication model, but uses a mechanically keyed mount and a shorter back-focus envelope that allows rear lens groups to sit deeper inside the mirror box than full-frame EF bodies permit.\n\nThat crop-only packaging matters optically. EF-S lenses can use smaller image circles, lighter glass, and more aggressive retrofocus geometry for wide-angle zooms and compact pancakes while still working with the reflex mirror constraints of EOS DSLR bodies. The system includes inexpensive kit zooms, stabilized wide zooms, compact STM lenses, and a few higher-end APS-C designs.\n\nIn this catalog, EF-S entries are best compared with both EF DSLR designs and later APS-C mirrorless lenses. They show Canon exploiting a smaller sensor inside the older SLR architecture before EF-M and RF-S moved APS-C EOS cameras to shorter mirrorless registers.",
  },
  "canon-ef-m": {
    era: "Canon APS-C EOS M mirrorless mount, introduced in 2012",
    formatNotes: "APS-C digital",
    summary: "Canon's compact EOS M mirrorless mount, built for small APS-C bodies and native EF-M lenses.",
    description:
      "Canon EF-M was Canon's first mirrorless interchangeable-lens mount. It kept the EOS idea of fully electronic lens-body communication, but moved to an 18 mm mirrorless register and a smaller APS-C-focused throat than EF or RF.\n\nThe native EF-M lens family emphasized compactness: pancakes, collapsible zooms, small stabilized zooms, and a few brighter primes rather than a broad professional lineup. EF and EF-S lenses could be adapted electronically, so many EOS M users treated the system as a compact body platform with access to the larger DSLR lens catalog.\n\nIn catalog terms, EF-M is useful for seeing Canon's first attempt at short-flange APS-C mirrorless design before RF-S consolidated Canon's mirrorless bodies under the RF mount. Its lenses tend to show portability-first optical compromises rather than the large-aperture ambitions of RF.",
  },
  "canon-fd": {
    era: "Canon manual-focus SLR mount, 1971-1980s",
    formatNotes: "35 mm film",
    summary:
      "Canon's mature manual-focus SLR mount, associated with FD and New FD lenses for the F-1, AE-1, and A-series cameras.",
    description:
      "Canon FD evolved from the earlier R and FL SLR lineage into the company's main manual-focus system. Introduced with the F-1 and FTb generation, it added fully coupled open-aperture metering and automatic diaphragm operation while keeping a mechanical breech-lock heritage. Later New FD lenses removed the separate chrome locking ring and handled more like bayonet lenses, but the mount still depended on mechanical aperture and metering linkages.\n\nFD is optically important because it spans Canon's most ambitious pre-EOS lens design period: fast standards, compact wide angles, fluorite and aspherical telephotos, macro lenses, and early special-purpose optics. The system also includes transitional curiosities such as FD autofocus attempts and high-end L-series lenses before Canon reset its autofocus strategy.\n\nIts mechanical interface became a dead end once Canon moved to fully electronic EF in 1987, so FD never gained native continuity into the autofocus SLR era. That makes the FD pages useful as a self-contained view of Canon's manual-focus optical engineering rather than as a direct ancestor with body compatibility.",
  },
  "canon-fl": {
    era: "Canon manual-focus SLR mount, 1964-1971",
    formatNotes: "35 mm SLR",
    summary: "Canon's pre-FD SLR mount, used by FL lenses for the FX, FT, Pellix, and related bodies.",
    description:
      "Canon FL replaced the original Canon R mount and became Canon's main 35 mm SLR interface through the mid-1960s. It kept the breech-lock mounting style and automatic diaphragm operation, but predated the full FD system coupling used for open-aperture metering.\n\nFL lenses occupy a transitional place in Canon history. They include conventional standards and telephotos, early wide-angle SLR designs, and specialist lenses made while Canon was still refining its reflex camera identity against Nikon, Pentax, Minolta, and others.\n\nMany FL lenses can be used on later FD bodies with stop-down metering, which makes the family optically connected to FD even though the camera-lens coupling is simpler. In the catalog, FL entries should read as Canon's mature pre-FD manual-focus engineering rather than as early EOS ancestry.",
  },
  "canon-r": {
    era: "Canon's first 35 mm SLR mount, 1959-1964",
    formatNotes: "35 mm SLR",
    summary: "The original Canonflex SLR mount, a breech-lock system with early Canomatic lens automation.",
    description:
      "Canon R was introduced with the Canonflex, Canon's first 35 mm SLR. It was a short-lived but important mount, using a breech-lock style interface and early automatic or semi-automatic diaphragm mechanisms under names such as Super-Canomatic and Canomatic.\n\nThe R system shows Canon entering the SLR market from a rangefinder background while the Japanese camera industry was rapidly converging on professional 35 mm reflex systems. Its lenses are fewer and older than FL or FD lenses, but they establish the mechanical ideas Canon would refine over the next decade.\n\nFor catalog browsing, Canon R is best treated as historical groundwork. The optical formulas sit at the beginning of Canon's SLR period, before FL simplified the line and before FD added the metering and exposure coupling that made Canon's manual-focus system fully competitive.",
  },
  "canon-rf": {
    era: "Canon full-frame mirrorless mount, introduced in 2018",
    formatNotes: "Full-frame and APS-C EOS R mirrorless bodies",
    summary:
      "Canon's short-flange EOS R mirrorless mount, keeping EF's 54 mm throat while adding a denser electronic interface.",
    description:
      "Canon RF combines EF's large 54 mm throat with a 20 mm mirrorless register. That gives lens designers more freedom near the rear of the lens, especially for fast normals, ultra-wides, and compact zooms whose rear groups no longer have to clear an SLR mirror box. Canon also kept a deliberately large mount opening so EF-era ambitions such as fast primes and stabilized professional zooms could be revisited without shrinking the optical envelope.\n\nThe mount is also a data-interface reset. RF uses a denser 12-pin electronic interface, supports faster lens-body communication, and makes room for newer control concepts such as programmable control rings, lens-function buttons, and spherical-aberration adjustment on select lenses. EF lenses adapt cleanly because the RF body is shallower than the EF register, but native RF designs can place powered groups and rear elements where an SLR body could not.\n\nIn the catalog, RF pages tend to show Canon using mirrorless geometry to revisit classic L-series ideas with fewer reflex-era compromises. The same mount now covers full-frame EOS R bodies and RF-S APS-C bodies, so the optical formulas are best read together with each lens's image-format metadata rather than assuming the mount always means full-frame coverage.",
  },
  "contax-645": {
    era: "Contax autofocus medium-format SLR mount, introduced in 1999",
    formatNotes: "645 medium format film and digital backs",
    summary: "Kyocera's autofocus Contax 645 mount, pairing modular medium-format bodies with Carl Zeiss lenses.",
    description:
      "Contax 645 was a late, high-end autofocus medium-format SLR system from the Kyocera-era Contax brand. It used 120/220 film backs, interchangeable finders, and Carl Zeiss lenses in a 6x4.5 format system aimed at wedding, portrait, fashion, and studio photographers.\n\nThe mount is famous partly because the lens line was small but distinctive. The Planar 80 mm f/2 became especially notable for offering unusually high speed in medium format, while the wider, macro, and telephoto lenses gave the system a compact but serious professional range.\n\nIts timing made the system both advanced and fragile: it arrived just before medium-format digital backs became central and before Kyocera exited cameras. In this catalog, Contax 645 entries are a bridge between film-era modular medium format and the early digital-back workflow.",
  },
  "contax-g": {
    era: "Contax G autofocus rangefinder-style mount, 1994-2005",
    formatNotes: "35 mm rangefinder-style film cameras",
    summary: "An electronic autofocus rangefinder-style mount for Contax G bodies and compact Carl Zeiss lenses.",
    description:
      "Contax G was a modernized 35 mm rangefinder-style system built around the G1 and G2 bodies. Its G mount is electronic and autofocus-driven rather than a traditional mechanical rangefinder bayonet, with focusing handled through the camera body and lens coupling.\n\nThe lens line is small but celebrated: Planar, Biogon, Sonnar, Hologon, and Vario-Sonnar designs gave the system unusually high optical ambition for such compact autofocus bodies. The Hologon 16 mm is a special fixed-focus exception, while the later zoom pushed against the usual rangefinder idea of fixed focal lengths.\n\nCatalog pages for Contax G should emphasize the hybrid nature of the system. The lenses have rangefinder-like short-register optical freedom, but their electronic focusing and proprietary mount make them very different from Leica M, Leica thread mount, or classic Contax RF lenses.",
  },
  "contax-n": {
    era: "Contax N autofocus SLR mount, introduced in 2000",
    formatNotes: "35 mm full-frame SLR and early full-frame digital",
    summary: "Contax's late autofocus SLR mount, using fully electronic control and Carl Zeiss N lenses.",
    description:
      "Contax N was Kyocera's late attempt to build a modern autofocus 35 mm SLR system around Carl Zeiss lenses. Unlike the manual-focus Contax/Yashica mount, N mount used electronic lens-body communication and autofocus while preserving a full-frame SLR format.\n\nThe system produced a small set of ambitious Zeiss lenses, including wide zooms, fast primes, macro, telephoto, and tele-zoom options. It also supported a dedicated adapter for Contax 645 lenses, showing how Kyocera tried to connect its 35 mm and medium-format Contax systems.\n\nThe mount is historically important because it reached the full-frame digital SLR frontier with the Contax N Digital, but the system was short-lived. In catalog comparisons, N mount represents Zeiss optical priorities translated into one of the last proprietary autofocus SLR platforms before mirrorless changed the market.",
  },
  "contax-rf": {
    era: "Zeiss Ikon Contax rangefinder mount, 1930s-1960s",
    formatNotes: "35 mm rangefinder",
    summary:
      "The classic Zeiss Ikon Contax rangefinder mount, famous for compact Sonnar and Biogon-era rangefinder optics.",
    description:
      "The Contax rangefinder mount was Zeiss Ikon's answer to Leica's screw-mount system. It uses a distinctive internal/external bayonet arrangement: normal lenses couple to a body focusing helicoid, while wide-angle and telephoto lenses use the external bayonet with their own focusing mechanisms.\n\nIts optical legacy is enormous. Fast Sonnars, compact Tessars, and wide-angle Biogon-style lenses helped define prewar and postwar 35 mm rangefinder photography, and the system's influence continued through Kiev bodies and Nikon's closely related but not fully identical rangefinder mount.\n\nCompared with SLR mounts, the short register and absence of a mirror box allowed very compact wide and normal lenses. The tradeoff is that rangefinder coupling, viewfinder framing, and close-focus limits shape what works comfortably, especially for longer lenses and lenses with strong focus shift.",
  },
  "zeiss-contarex": {
    era: "Zeiss Ikon Contarex SLR mount, 1950s-1970s",
    formatNotes: "35 mm SLR",
    summary:
      "Zeiss Ikon's premium Contarex SLR mount, paired with mechanically elaborate bodies and high-end Zeiss lenses.",
    description:
      "Contarex was Zeiss Ikon's ambitious premium 35 mm SLR system. The original camera appeared at the end of the 1950s as an elaborate, expensive answer to the professional SLR market, and the lenses carried Zeiss's high-end optical identity into the reflex era.\n\nThe mount's lens family includes Planar, Distagon, Sonnar, Tessar, and specialty optics built to very high mechanical standards. Many designs show Zeiss adapting familiar names and correction priorities to the longer register and mirror clearance required by an SLR.\n\nContarex never became a mass-market standard, partly because the bodies were complex and costly just as Japanese professional SLR systems were accelerating. It remains one of the clearest examples of Zeiss translating its rangefinder and large-camera heritage into a no-compromise 35 mm SLR system.",
  },
  dkl: {
    era: "Deckel leaf-shutter bayonet family, 1950s-1960s",
    formatNotes: "Mostly 35 mm rangefinder and leaf-shutter SLR cameras",
    summary:
      "A family of Deckel bayonet mounts tied to Synchro-Compur leaf-shutter cameras from Kodak, Voigtlander, Braun, and others.",
    description:
      "DKL refers to the Deckel bayonet family used by several German 35 mm cameras, often with a Synchro-Compur leaf shutter positioned in the camera body behind the lens. Important examples include Kodak Retina Reflex/Retina IIIS, Voigtlander Bessamatic and Vitessa-T, and related Braun systems.\n\nThe mount is really a family of closely related variants rather than one perfectly interchangeable standard. Aperture control, indexing, and mechanical details can differ by camera maker, so lens compatibility needs more care than a simple bayonet label suggests.\n\nOptically, DKL lenses are a compact window into late leaf-shutter camera design. Schneider, Rodenstock, Voigtlander, and other makers produced high-quality normal, wide, and telephoto lenses, but the small shutter throat and body shutter arrangement shaped what kinds of fast and wide designs were practical.",
  },
  exakta: {
    era: "Ihagee Exakta SLR mount, 1930s-1960s",
    formatNotes: "35 mm SLR",
    summary: "An early 35 mm SLR bayonet used by Ihagee Exakta bodies and supported by many German optical makers.",
    description:
      "Exakta was one of the earliest serious interchangeable-lens 35 mm SLR systems. Its bayonet mount predates many later SLR standards, and the system attracted lenses from Carl Zeiss Jena, Schneider, Meyer-Optik, Steinheil, Angenieux, and other European makers.\n\nBecause the mount sits near the beginning of the small-format SLR era, Exakta lenses often show designers adapting rangefinder, cine, and plate-camera formulas to mirror-box constraints. Some lenses feel almost pre-SLR in their optical assumptions, while others point toward the retrofocus wide-angle and telephoto patterns that later systems standardized.\n\nThe result is a useful historical bridge: classic Tessar, Biotar, Primoplan, and long-focus designs in a true reflex viewing system. Exakta pages are valuable for seeing how early SLR packaging changed lens proportions before Japanese bayonet systems became dominant.",
  },
  "fixed-lens-camera": {
    era: "Integrated camera-lens designs",
    formatNotes: "Varies by camera, from compact digital sensors to 35 mm film and APS-C",
    summary:
      "Non-interchangeable camera lenses where the optical formula is designed as part of a complete camera body.",
    description:
      "Fixed-lens cameras do not have a mount in the interchangeable-lens sense. The lens, shutter, sensor or film gate, focusing mechanism, and body packaging can all be optimized together, which often enables designs that would be awkward or impossible as removable lenses.\n\nThat integration can change the optical problem substantially. A rear group may sit close to the film or sensor, the camera body can make room for collapsible or retracting mechanics, and digital compacts can rely on firmware correction as part of the finished imaging system.\n\nThis category is useful for catalog browsing because many important optical designs live in fixed-lens cameras: premium compacts, rangefinders, GR-style wide-angle cameras, and integrated zoom compacts. When a lens appears here, the page is clustering by camera architecture rather than by a bayonet standard.",
  },
  "large-format-lens-board": {
    era: "View-camera lens-board and shutter-mounted optics",
    formatNotes: "Mostly 4x5, 5x7, and larger sheet-film or technical-camera coverage",
    summary:
      "Board-mounted large-format lenses designed for bellows cameras, shutters, and front-standard movements.",
    description:
      "Large-format lenses usually do not belong to a single proprietary camera mount. A lens cell or shutter assembly is fitted to a removable lens board, and the camera supplies the bellows draw, front-standard movements, ground-glass focusing, and film holder or digital back. The practical interface is therefore a board and shutter opening rather than a bayonet with a fixed flange distance.\n\nThat changes the optical problem. Designers can assume unit focusing by moving the whole lens, generous back-focus variation from bellows extension, and image circles larger than the nominal film gate so rise, fall, shift, tilt, and swing can be used without immediately clipping the field. Coverage, usable image circle, and behavior at stopped-down working apertures often matter as much as full-aperture speed.\n\nIn this catalog, the large-format lens-board category groups view-camera and technical-camera taking lenses from makers such as Rodenstock, Schneider-Kreuznach, and Carl Zeiss Jena. Enlarging lenses and fixed-camera lenses remain in their own metadata categories unless the data file represents a view-camera taking lens.",
  },
  "enlarging-lens": {
    era: "Darkroom and process enlarging lenses",
    formatNotes: "Negative and print projection formats, commonly from 35 mm through medium format",
    summary: "Finite-conjugate projection lenses for enlargers, copy work, and darkroom printing systems.",
    description:
      "Enlarging lenses are not camera taking lenses in the normal interchangeable-mount sense. They are usually mounted into an enlarger lens board or retaining ring and work between a film negative and the easel, with focus set by changing the enlarger head, lens stage, or easel distance rather than by a camera helicoid.\n\nThe optical design priorities differ from view-camera lenses. Enlarging objectives are finite-conjugate projection lenses: they are optimized for flat-field reproduction, even illumination, low distortion, and predictable performance over a recommended magnification range. A lens that covers a 6x9 negative in the darkroom is solving a different problem from a 6x9 camera lens focused at infinity.\n\nThis catalog category groups optical formulas whose data files explicitly represent enlarging objectives. It keeps them visible on mount pages and in mount sorting without mixing them into large-format taking-lens boards, even when their mechanical mounting also involves a threaded board or retaining ring.",
  },
  "fuji-g690": {
    era: "Fujica/Fuji G690 medium-format rangefinder mount, late 1960s-1970s",
    formatNotes: "6x9 and related roll-film rangefinder formats",
    summary:
      "Fuji's interchangeable-lens 6x9 rangefinder mount, built for large roll-film negatives and leaf-shutter lenses.",
    description:
      "Fuji G690 belongs to the interchangeable-lens Fujica/Fuji medium-format rangefinder line, distinct from the later fixed-lens GW and GSW models. The system used 120/220 roll film for large 6x9 negatives and lens-mounted leaf shutters for flash synchronization.\n\nThe mount supports a relatively small set of lenses because rangefinder framing, coupled focusing, and the huge image area all constrain the system. Wide and telephoto options require careful finder and rangefinder handling in a way that feels closer to technical field cameras than to compact 35 mm rangefinders.\n\nIn catalog terms, G690 pages are useful for comparing how rangefinder design scales up when the frame is far larger than 35 mm. The lenses can remain simpler than SLR retrofocus equivalents, but the large image circle and precision coupling keep the optical and mechanical demands high.",
  },
  "fuji-gx680": {
    era: "Fuji GX680 medium-format SLR mount, introduced in 1987",
    formatNotes: "6x8 medium format roll film, with 6x7 and 645 options",
    summary:
      "Fuji's GX680 studio SLR mount, using lens-board-mounted optics with bellows focusing and front movements.",
    description:
      "Fuji GX680 is a studio-oriented medium-format SLR system built around a 6x8 roll-film frame, bellows focusing, interchangeable backs, and lens-board-mounted Fujinon GX lenses. Its most distinctive feature is the moving front standard, with rise, fall, shift, tilt, and swing available on many bodies. That makes the camera unusual among roll-film SLRs: it keeps through-the-lens viewing while borrowing practical movement control from view cameras.\n\nThe mount behaves more like a compact view-camera interface than a conventional handheld SLR bayonet. Lenses are mounted on boards, the body provides bellows extension, and many lenses rely on electronically controlled leaf shutters. The system is optimized for controlled portrait, product, architecture, and studio work rather than speed or portability, and the availability of multiple backs means a lens may be used across more than one recorded frame size.\n\nFor optical cataloging, GX680 lenses are valuable because they combine medium-format image coverage with movement tolerance. They often need a larger corrected field than a simple 6x8 lens would require, especially when rise or shift is used, so their useful image circle can be more important than the nominal frame diagonal alone.",
  },
  "fujifilm-g": {
    era: "Fujifilm GFX medium-format mirrorless mount, introduced in 2017",
    formatNotes: "43.8 x 32.9 mm digital medium format",
    summary:
      "Fujifilm's mirrorless medium-format mount for GFX bodies, built around a larger-than-full-frame image circle.",
    description:
      "Fujifilm G mount serves the GFX system and its 43.8 x 32.9 mm digital medium-format sensor class. The mount pairs a short mirrorless register with a large image circle, allowing lenses that cover more field than full-frame designs while avoiding the long body depth of medium-format SLR systems. Unlike many older medium-format systems, GFX is digital-first rather than an adaptation of a roll-film mount.\n\nGF lenses tend to prioritize high resolution, low field curvature, and controlled chromatic aberration across a large sensor. Even moderate apertures can produce shallow depth of field in this format, so many formulas trade absolute compactness for image uniformity and stable performance at high pixel counts. The system also leans on focal-plane-shutter camera bodies rather than putting leaf shutters into the normal native lens workflow, which distinguishes it from Hasselblad H or XCD handling.\n\nThe designs in this cluster are useful comparisons against full-frame mirrorless lenses because they show how optical layouts scale when the image circle grows but mirrorless back-focus freedom remains. They also help separate medium-format rendering choices from purely historical medium-format SLR constraints.",
  },
  "fujifilm-x": {
    era: "Fujifilm APS-C mirrorless mount, introduced in 2012",
    formatNotes: "APS-C digital",
    summary: "Fujifilm's APS-C mirrorless mount, optimized around compact bodies and dedicated XF/XC image circles.",
    description:
      "Fujifilm X mount was designed for APS-C mirrorless cameras rather than adapted down from full-frame. The system began with the X-Pro1 and the first XF primes in 2012, so the image circle, register, and body size expectations were matched directly to the smaller sensor from the beginning.\n\nThat commitment lets many XF lenses balance compact size with relatively ambitious apertures. Fast normals, small wide angles, stabilized zooms, and telephotos can be designed around APS-C field angles instead of carrying excess full-frame coverage.\n\nThe mount has become a broad APS-C ecosystem covering fast primes, compact pancakes, high-end zooms, macro lenses, and long telephotos. In this catalog, X-mount designs are useful for seeing how modern optical correction changes when designers optimize the whole system around APS-C rather than scaling a full-frame formula.",
  },
  "hasselblad-h": {
    era: "Hasselblad autofocus medium-format SLR mount, introduced in 2002",
    formatNotes: "645 film and digital medium format",
    summary:
      "Hasselblad's autofocus H-system mount, pairing medium-format coverage with electronically controlled leaf-shutter lenses.",
    description:
      "The Hasselblad H mount replaced the classic V-system square-format architecture with a modern autofocus 645 platform. It brought electronic control, modular film and digital backs, and central-shutter HC lenses into a system aimed at studio, portrait, fashion, and commercial work. The body shape and control logic feel closer to a contemporary professional camera than to the older cube-like V bodies.\n\nHC lenses serve the broad H-system film and digital lineage, while HCD lenses are more digital-optimized and in some cases matched to smaller sensor coverage or digital lens correction. Both families keep the H-system emphasis on leaf-shutter operation, high flash-sync speeds, and close integration between lens, body, and back. That integration matters in the catalog because the lens is not just a passive optical prescription; it is part of an exposure and digital-capture workflow.\n\nOptically, H-system lenses sit between traditional medium-format SLR design and modern digital correction. They must cover a large image area, maintain high uniformity for high-resolution backs, and fit a professional modular camera system where reliability and repeatability matter as much as compactness.",
  },
  "hasselblad-v": {
    era: "Hasselblad V-system medium-format mount, 1940s-2000s",
    formatNotes: "Primarily 6x6 medium format, with digital-back use",
    summary:
      "Hasselblad's classic modular 6x6 SLR mount, associated with 500-series bodies and Zeiss leaf-shutter lenses.",
    description:
      "Hasselblad V is the classic square-format modular SLR system: interchangeable lenses, finders, focusing screens, film backs, and later digital backs built around a compact cube-like body. The name spans several generations, but the 500-series leaf-shutter cameras define the mount's working identity for many photographers.\n\nThe lens family is strongly associated with Carl Zeiss designs such as Distagon, Planar, Sonnar, Makro-Planar, and Biogon/SWC variants. Most V-system lenses use central shutters, giving flash synchronization advantages and making the system a studio standard for decades.\n\nIn catalog comparisons, V mount is the reference point for modular 6x6 medium-format optics. It sits between field-camera flexibility and handheld camera practicality, with image quality, flash control, and system modularity valued more than autofocus or compactness.",
  },
  "hasselblad-xcd": {
    era: "Hasselblad X-system mirrorless medium-format mount, introduced in 2016",
    formatNotes: "43.8 x 32.9 mm digital medium format",
    summary: "Hasselblad's compact medium-format mirrorless mount, used by X1D, X2D, and 907X cameras.",
    description:
      "XCD is Hasselblad's short-flange mirrorless medium-format mount. It was designed around the same 43.8 x 32.9 mm sensor class used by many modern digital medium-format systems, but in bodies much smaller than traditional modular SLR platforms. The mount appears on both integrated X bodies and the 907X camera interface, which gives the system a bridge back to Hasselblad's modular habits.\n\nXCD lenses include integral central shutters, preserving a key Hasselblad working style while shrinking the camera system. That keeps high-speed flash synchronization available for location portraiture, studio lighting, and quiet handheld work without returning to a large H-system body. Adapter support for H, V, and XPan lenses also makes XCD a hub for several Hasselblad-era optical traditions, even though native XCD designs are autofocus digital mirrorless lenses.\n\nThe optical challenge is substantial: large image circle, compact barrel expectations, high-resolution digital capture, autofocus, and in-camera/software correction all in one package. In the catalog, XCD designs are a useful modern mirrorless counterpoint to both Hasselblad H and Fujifilm G lenses.",
  },
  xpan: {
    era: "Hasselblad XPan / Fujifilm TX panoramic mount, introduced in 1998",
    formatNotes: "35 mm film, switchable 24 x 36 mm and 24 x 65 mm panoramic frames",
    summary: "A panoramic 35 mm rangefinder mount shared by Hasselblad XPan and Fujifilm TX bodies.",
    description:
      "The XPan/TX mount belongs to the Hasselblad XPan and Fujifilm TX panoramic rangefinder system, a joint project manufactured by Fujifilm and sold under both brands. The cameras can switch between normal 24 x 36 mm frames and wide 24 x 65 mm panoramic frames on standard 35 mm film.\n\nOnly a few lenses were made, but each had to cover the panoramic frame width while remaining compact enough for a rangefinder body. The 45 mm and 90 mm lenses formed the core kit, with the 30 mm wide angle using an accessory finder.\n\nThis mount is useful in the catalog because it treats 35 mm film as a wide panoramic format rather than a standard full-frame rectangle. The optical problem is closer to covering a small medium-format strip than to designing an ordinary 35 mm rangefinder lens.",
  },
  "konica-ar": {
    era: "Konica Autoreflex / Hexanon AR SLR mount, introduced in 1965",
    formatNotes: "35 mm SLR",
    summary: "Konica's long-running AR bayonet, tied to Autoreflex bodies and Hexanon manual-focus lenses.",
    description:
      "Konica AR was introduced with the Auto-Reflex/Autorex generation and became Konica's main 35 mm SLR mount. The early system is historically notable for shutter-priority automatic exposure on a focal-plane-shutter SLR, with later bodies adding more refined TTL metering and exposure automation.\n\nThe AR mount has a relatively short SLR register and a strong Hexanon lens family, including compact standards, wide angles, telephotos, macro lenses, and unusual high-performance designs. Earlier Konica F-mount optical formulas also influenced some early AR lenses.\n\nIn catalog terms, Konica AR is a good manual-focus SLR comparison point outside the Canon/Nikon/Pentax mainstream. The lenses often have a distinct balance of compact mechanics, strong coatings, and practical apertures rather than a large professional system identity.",
  },
  "konica-f": {
    era: "Early Konica 35 mm SLR mount, introduced in 1960",
    formatNotes: "35 mm SLR",
    summary: "Konica's first SLR bayonet family, used by early F/FP/FM bodies and pre-AR Hexanon lenses.",
    description:
      "Konica F, sometimes described as Konica's early or Bayonet I SLR mount, predates the later AR system. It belongs to Konica's first 35 mm SLR period, when the company was experimenting with advanced bodies and Hexanon lenses before settling on the Autoreflex/AR lineage.\n\nThe mount supported a smaller lens range than AR, but includes historically interesting Hexanon primes and telephotos. Some early AR lenses were optically related to earlier Konica F-mount designs while gaining the newer AR mechanical interfaces.\n\nCatalog entries for Konica F should be read as early SLR history rather than as part of the later, more common AR ecosystem. The lenses sit in the same broad 1960s transition from rangefinder-era formulas to fully developed 35 mm SLR systems.",
  },
  "leica-s": {
    era: "Leica S medium-format DSLR mount, introduced in 2008",
    formatNotes: "Leica S 45 x 30 mm digital medium format",
    summary: "Leica's autofocus medium-format DSLR mount, designed around a 45 x 30 mm sensor in an SLR-style body.",
    description:
      "Leica S was announced as a medium-format digital system in a body closer in handling to a professional 35 mm DSLR than to a modular studio camera. The mount serves a 45 x 30 mm sensor format, larger than full-frame but smaller than many traditional 645 film frames.\n\nS lenses were designed as high-correction autofocus optics for digital capture, with some versions adding central shutters for higher flash sync. The system emphasizes weather sealing, optical consistency, and a relatively self-contained professional workflow rather than interchangeable film/digital backs.\n\nIn catalog comparisons, Leica S is useful because it is neither a classic medium-format SLR nor a modern short-flange mirrorless mount. It shows how Leica approached larger-than-full-frame digital imaging while retaining through-the-lens reflex viewing and a dedicated lens line.",
  },
  "l-mount": {
    era: "Leica L mount and L-Mount Alliance mirrorless system",
    formatNotes: "Full-frame and APS-C mirrorless",
    summary: "A short-flange mirrorless mount shared by Leica, Panasonic, and Sigma for full-frame and APS-C systems.",
    description:
      "The L mount began as Leica's mirrorless mount in the T/TL APS-C system and became a full-frame platform with Leica SL before the L-Mount Alliance opened the standard to Panasonic, Sigma, and later partners. Its 51.6 mm diameter and 20 mm register are meant to support both full-frame and APS-C bodies, with TL-format lenses and SL/full-frame lenses sharing the same physical bayonet.\n\nThat shared geometry gives lens designers the short register expected of modern mirrorless systems while leaving room for robust bayonet construction. It also makes the mount unusually mixed in character: Leica SL lenses, Panasonic Lumix S lenses, Sigma DG DN lenses, cinema-oriented bodies, and adapted M lenses can all sit within the same family. Full-frame bodies can crop for APS-C L lenses, while APS-C bodies use full-frame L lenses with the expected narrower angle of view.\n\nIn catalog terms, L-mount pages often show how different manufacturers interpret the same full-frame mirrorless standard with very different priorities. Some formulas chase compactness or video practicality, while others lean into maximum correction and large-aperture performance. The mount is therefore useful for comparing optical design choices that come from brand philosophy rather than from incompatible mechanical geometry.",
  },
  "leica-ltm": {
    era: "Leica Thread Mount / M39 rangefinder standard, 1930s-1950s",
    formatNotes: "35 mm rangefinder",
    summary: "The screw-mount Leica rangefinder standard that established many early 35 mm lens conventions.",
    description:
      "Leica Thread Mount, often called LTM or M39, is the 39 mm screw mount used by early interchangeable-lens Leica rangefinders and many compatible cameras. Its short register and compact bodies helped make 35 mm still photography practical, portable, and lens-interchangeable at a time when larger formats still dominated serious work.\n\nThe mount became a de facto rangefinder standard, with lenses from Leica, Canon, Nikon, Soviet makers, and many others. Compatibility can still be nuanced because rangefinder cam geometry, infinity calibration, and accessory finders matter, but the shared screw thread made the system unusually broad.\n\nLTM designs often emphasize compactness and simple, high-contrast formulas: Tessar derivatives, Sonnars, double-Gauss normals, collapsible standards, and early wide-angle rangefinder lenses. These pages are a useful way to compare pre-M rangefinder optics before Leica moved to a faster bayonet.",
  },
  "leica-m": {
    era: "Leica M rangefinder bayonet, introduced in 1954",
    formatNotes: "35 mm rangefinder and full-frame digital M bodies",
    summary:
      "Leica's long-running rangefinder bayonet, known for compact manual-focus lenses and precise mechanical coupling.",
    description:
      "Leica M replaced the earlier thread mount with a faster bayonet interface and frame-line coupling, beginning with the M3 in 1954. It kept the short rangefinder register that makes compact wide and normal lenses possible, while improving handling for professional reportage, documentary work, and street photography.\n\nThe mount's constraints are as defining as its freedoms. Lenses must work with rangefinder coupling, viewfinder frame lines, and limited close-focus travel, but they can avoid SLR mirror clearance and do not need autofocus motors or electronic aperture mechanisms.\n\nThat combination produced many famously compact Summicron, Summilux, Elmarit, Noctilux, and APO-Summicron designs. In the catalog, M-mount formulas are especially useful for studying how high correction, small size, and mechanical rangefinder usability compete within a long-lived 35 mm system.",
  },
  "leica-r": {
    era: "Leica manual-focus SLR mount, 1960s-2000s",
    formatNotes: "35 mm SLR",
    summary: "Leica's SLR mount for R-series bodies, carrying rangefinder-era optical standards into reflex cameras.",
    description:
      "Leica R was the company's 35 mm SLR system, beginning with the Leicaflex line and later R-series bodies. It developed after Leica recognized that rangefinders could not cover every professional use case, especially close-up work, long telephotos, exact framing, and through-the-lens viewing.\n\nThe mount supported manual-focus reflex bodies and a lens family spanning wide angles, macros, telephotos, zooms, and specialized perspective-control optics. Later electronic contacts improved body communication, but the system remained centered on manual focus and mechanical precision rather than a wholesale autofocus reset.\n\nR lenses often prioritize optical correction and build quality over compactness. Compared with M lenses, they must clear an SLR mirror and can support longer focal lengths and closer focusing more naturally, making the mount a useful counterpoint to Leica's rangefinder tradition.",
  },
  m42: {
    era: "42 mm screw-mount SLR standard, 1940s-1970s",
    formatNotes: "35 mm SLR",
    summary: "A widely adopted screw-mount SLR standard used by Pentax, Praktica, Fujica, Zeiss Jena, and many others.",
    description:
      "M42 became one of the most important open 35 mm SLR lens standards. It is mechanically simple, broadly compatible, and was used by many camera makers before proprietary bayonets became dominant, though aperture automation and metering details vary by brand and generation.\n\nBecause so many companies built for M42, the mount gathers a wide range of optical traditions: Takumars from Asahi Pentax, Carl Zeiss Jena Pancolars and Flektogons, Fujinon EBC lenses, Soviet Helios and Mir designs, and many third-party optics. The screw mount made cross-system adoption easier but also slower to use than later bayonet systems.\n\nIt is one of the best mount clusters for comparing common focal lengths across manufacturers. Similar 50 mm, 35 mm, and 135 mm designs can be viewed side by side without the mount itself forcing a single corporate design language.",
  },
  "mamiya-6": {
    era: "Mamiya 6 modern rangefinder mount, 1989-1990s",
    formatNotes: "6x6 medium format rangefinder",
    summary: "Mamiya's compact 6x6 rangefinder mount, using collapsible-body leaf-shutter lenses.",
    description:
      "The modern Mamiya 6 is a 6x6 medium-format rangefinder system with interchangeable lenses and a collapsible lens mount. It should not be confused with the older Mamiya Six folding cameras; this later system was built as a compact professional roll-film rangefinder.\n\nOnly a small lens family was made, centered on wide, normal, and telephoto options with electronic leaf shutters. The body includes a dark slide mechanism so lenses can be changed mid-roll, preserving a key medium-format system-camera behavior in a much smaller package.\n\nFor catalog comparisons, Mamiya 6 lenses show what happens when a large 6x6 image circle is paired with rangefinder simplicity and portability. The system favors field use, travel, and deliberate composition over close-focus flexibility or extreme telephoto reach.",
  },
  "mamiya-7": {
    era: "Mamiya 7 rangefinder mount, introduced in 1995",
    formatNotes: "6x7 medium format rangefinder",
    summary: "Mamiya's portable 6x7 rangefinder mount, known for sharp leaf-shutter lenses and large negatives.",
    description:
      "Mamiya 7 expanded the modern Mamiya rangefinder idea to 6x7 format. It kept interchangeable leaf-shutter lenses and a built-in dark slide for lens changes, while abandoning the collapsible mount of the Mamiya 6 to support a larger mount throat and wider lens range.\n\nThe lens family covers ultrawide through moderate telephoto options, with some lenses using external finders and the longest lens requiring scale focusing rather than full rangefinder coupling. The system is famous for delivering very large negatives from a body that remains far more portable than most 6x7 SLRs.\n\nIn the catalog, Mamiya 7 entries are useful for comparing rangefinder optical freedom against medium-format SLR bulk. The lenses can be extremely high performing because they avoid mirror clearance, but framing, close focus, and long focal lengths remain rangefinder-limited.",
  },
  "mamiya-645": {
    era: "Mamiya 645 medium-format SLR family, introduced in 1975",
    formatNotes: "645 medium format film and digital backs",
    summary:
      "Mamiya's 6x4.5 SLR mount family, spanning manual-focus film bodies, autofocus bodies, and digital-back workflows.",
    description:
      "Mamiya 645 began as a more portable medium-format SLR alternative to larger 6x6 and 6x7 systems. The original M645 line used 120/220 film inserts for 6x4.5 frames and paired interchangeable lenses with prism finders, grips, and motor drives. Later Super, Pro, and Pro TL bodies moved toward a more modular workflow with interchangeable backs, making the system more adaptable for studio and location use.\n\nThe mount family grew through several generations, including manual-focus M645 lenses and later autofocus 645AF/Phase One-era systems. Compatibility and automation vary across generations, so the catalog id is best read as a broad Mamiya 645 ecosystem rather than a guarantee that every body and lens feature interworks. This is especially important around autofocus, electronic aperture support, leaf-shutter variants, and digital-back-era expectations.\n\nOptically, Mamiya 645 lenses are valuable because they balance medium-format coverage with relatively handheld-friendly bodies. They are common comparison points for portrait, wedding, macro, and studio lenses in the smaller 645 roll-film format, and many later lenses became part of the practical bridge from film 645 to digital medium-format backs.",
  },
  "mamiya-nc": {
    era: "Mamiya NC / CS 35 mm SLR mount, introduced in 1978",
    formatNotes: "35 mm SLR",
    summary: "Mamiya's short-lived proprietary 35 mm SLR bayonet for NC bodies and Sekor CS lenses.",
    description:
      "Mamiya NC, also associated with Sekor CS lenses, was Mamiya's late-1970s proprietary 35 mm SLR bayonet. It followed Mamiya's earlier screw-mount SLR work and appeared on compact NC1000-series bodies.\n\nThe system was small but technically interesting, with a focused range of primes, macro, fisheye, telephoto, and zoom lenses. Many of the lenses are respected despite the mount's limited commercial footprint and short production life.\n\nFor catalog use, Mamiya NC represents Mamiya's 35 mm SLR design in miniature: serious optical work from a company better remembered for medium format. It is a useful contrast against Mamiya's much larger 645, RB67, and RZ67 systems.",
  },
  "mamiya-rb67": {
    era: "Mamiya RB67 mechanical medium-format SLR mount, introduced in 1970",
    formatNotes: "Primarily 6x7 medium format, with multiple backs",
    summary:
      "Mamiya's fully mechanical 6x7 studio SLR mount, using bellows focusing, rotating backs, and leaf-shutter lenses.",
    description:
      "Mamiya RB67 is a modular medium-format SLR system built around a large 6x7 frame, bellows focusing, interchangeable backs, and a rotating back adapter. The RB name refers to that rotating-back concept, which lets photographers switch portrait and landscape orientation without rotating the whole camera.\n\nRB lenses use mechanical leaf shutters and mount to a body that supplies bellows extension rather than lens helicoids for focusing. The system is heavy but extremely flexible, with backs for several formats, close-focus capability built into the body, and all-speed flash sync.\n\nIn catalog comparisons, RB67 lenses are studio workhorses. They favor robustness, macro and portrait flexibility, and large image coverage over portability, making them a different optical problem from compact 6x7 rangefinder systems such as Mamiya 7.",
  },
  "mamiya-rz67": {
    era: "Mamiya RZ67 electronic medium-format SLR mount, introduced in 1982",
    formatNotes: "Primarily 6x7 medium format, with multiple backs",
    summary: "Mamiya's electronically controlled 6x7 SLR mount, evolving the RB67 idea with RZ leaf-shutter lenses.",
    description:
      "Mamiya RZ67 evolved the RB67 studio concept with electronic control, lighter construction, and RZ lenses using electronically timed leaf shutters. It retained bellows focusing, rotating backs, interchangeable finders, and a modular studio workflow.\n\nRZ bodies can use many RB accessories and, with limitations, RB lenses, but native RZ lenses communicate more directly with the body and support the system's electronic exposure features. Later Pro II and Pro IID bodies extended the mount into digital-back use.\n\nFor catalog browsing, RZ67 sits between the purely mechanical RB67 and later digital medium-format systems. Its lenses still solve the large 6x7 studio problem, but the camera-lens interface is more integrated and better suited to automated exposure and digital-era work.",
  },
  "four-thirds": {
    era: "Four Thirds DSLR standard, introduced in 2003",
    formatNotes: "Four Thirds digital sensor",
    summary:
      "The original Olympus/Kodak Four Thirds DSLR mount, built around a dedicated 4/3-type digital sensor format.",
    description:
      "Four Thirds was a digital-first DSLR standard created around the 4/3-type sensor rather than inherited from a film mount. Olympus led the camera and lens system, with support from Panasonic, Leica-branded lenses, Sigma lenses, and a smaller group of standard participants. Because the sensor size, mount, and lens line were planned together, the system could define its own normal focal lengths and coverage expectations instead of cropping an older 35 mm standard.\n\nThe mount kept a reflex mirror box but used a smaller image circle than APS-C or full-frame systems. Many lenses emphasized telecentric light delivery, digital correction expectations, and compact telephoto reach, while professional Zuiko Digital zooms pushed hard on speed and weather-sealed performance. The smaller format also made lenses such as fast 2x-equivalent telephoto zooms more practical than they would be in full-frame SLR form.\n\nIn the catalog, Four Thirds is distinct from Micro Four Thirds even though the sensor format is shared. Four Thirds lenses are DSLR-era optics with a longer register and mirror clearance, while Micro Four Thirds lenses use a shorter mirrorless geometry. Adaptation between the systems is possible, but the optical packaging assumptions are visibly different.",
  },
  "micro-four-thirds": {
    era: "Mirrorless Four Thirds standard, introduced in 2008",
    formatNotes: "Four Thirds digital sensor",
    summary:
      "The open mirrorless standard from Olympus and Panasonic, built around compact interchangeable lenses for a Four Thirds sensor.",
    description:
      "Micro Four Thirds removed the mirror box from the earlier Four Thirds DSLR system while keeping the same 4/3-type sensor format. Announced jointly by Olympus and Panasonic in 2008, it shortened the register to mirrorless scale, reduced mount size relative to Four Thirds, and increased electronic contacts for lens-body communication. The result was not merely a smaller Four Thirds body; it was a new mount with different wide-angle and compact-lens opportunities.\n\nThe smaller sensor changes optical tradeoffs: equivalent depth of field is deeper at a given angle of view, image circles are smaller, and telephoto reach can be packaged efficiently. Wide-angle lenses also benefit from the short mirrorless register, though very small bodies can make stabilization, heat, and handling part of the system-level compromise. Video use became unusually important to the system, which shaped many zoom, focus-motor, and aperture-control decisions.\n\nThe standard's open, multi-maker nature encouraged a broad ecosystem of Panasonic, Olympus/OM System, Sigma, Voigtlander, Laowa, cinema, and specialty lenses. In the catalog, Micro Four Thirds pages show how a mature smaller-format mirrorless system balances compactness, speed, and correction.",
  },
  "minolta-sr": {
    era: "Minolta SR/MC/MD manual-focus SLR mount, 1958-1980s",
    formatNotes: "35 mm SLR",
    summary: "Minolta's manual-focus SLR mount, home to Rokkor lenses and the SR, SRT, XD, and X-series bodies.",
    description:
      "Minolta SR is the mechanical foundation behind the company's MC and MD lens families. It began with the SR-2 in 1958 and matured through meter coupling, open-aperture metering, aperture-priority and program-exposure support, and compact late MD lenses.\n\nThe mount kept a long-lived manual-focus bayonet while Minolta refined the camera side around bodies such as the SR-T series, XE, XD, and X-series cameras. MC and MD labels describe coupling generations more than entirely separate mounts, so SR pages often cover lenses that collectors casually name by those later variants.\n\nThe mount's Rokkor optics are known for strong mechanical build and a wide range of distinctive primes. In this catalog, Minolta SR designs show the company's manual-focus optical style before the autofocus A-mount changed the lens-body interface completely.",
  },
  "minolta-v": {
    era: "Minolta Vectis APS film mount, introduced in 1996",
    formatNotes: "APS film and one related digital SLR body",
    summary: "Minolta's fully electronic Vectis mount, made for APS-format autofocus SLR cameras and V lenses.",
    description:
      "Minolta V was the Vectis system mount, a rare purpose-built interchangeable-lens SLR system for APS film. Unlike most APS-era SLRs, it used a new fully electronic bayonet rather than adapting an existing 35 mm mount. That allowed compact weather-resistant bodies and lenses sized for the smaller IX240 frame, but it also isolated the system from Minolta's much larger A-mount lens base.\n\nThe V lens family was small, with autofocus primes and zooms built around the smaller APS image circle and compact Vectis bodies. The same mount also appeared on the RD-3000 digital SLR, making it a strange bridge between APS film packaging and early digital experimentation. Because the mount is electronic, practical reuse depends heavily on body support rather than simple mechanical adaptation.\n\nFor catalog use, Minolta V should be read as a highly specialized branch of Minolta autofocus design. It is not compatible with Minolta/Sony A mount in the ordinary sense, and its optical formulas reflect a short-lived format whose camera system disappeared quickly.",
  },
  "nikon-1": {
    era: "Nikon 1 mirrorless mount, introduced in 2011",
    formatNotes: "1-inch type / Nikon CX digital",
    summary:
      "Nikon's compact CX-format mirrorless mount, built around very small fast-focusing interchangeable lenses.",
    description:
      "Nikon 1 was Nikon's first digital mirrorless interchangeable-lens system. It used the CX 1-inch-type sensor format, a short 17 mm register, and a fully electronic lens interface in bodies such as the J1 and V1.\n\nThe system emphasized speed, hybrid autofocus, compact lenses, and video-friendly operation more than shallow depth of field or large-sensor image quality. The FT1 adapter also let users mount many F-mount lenses, producing very narrow angles of view because of the 2.7x crop factor.\n\nIn catalog comparisons, Nikon 1 lenses show how optical design changes when the image circle is much smaller than Micro Four Thirds or APS-C. The mount favors tiny zooms, compact telephoto reach, and high-speed consumer use rather than classic full-frame rendering.",
  },
  "nikon-f": {
    era: "Nikon F SLR mount, introduced in 1959",
    formatNotes: "35 mm film, full-frame digital, and APS-C DX variants",
    summary:
      "Nikon's long-lived SLR bayonet, spanning manual Nikkors, autofocus F-mount lenses, and modern DSLR optics.",
    description:
      "Nikon F is one of the longest-running interchangeable-lens mounts in photography. Introduced with the Nikon F in 1959, its original mechanical bayonet survived through metering prong changes, AI indexing, AF screw-drive, in-lens AF-S motors, electronic apertures, vibration reduction, and DSLR-era CPU contacts.\n\nThat continuity makes F-mount pages unusually broad. A single mount family contains early rangefinder-influenced SLR optics, classic manual Nikkors, professional AF-D and AF-S lenses, DX lenses for APS-C DSLRs, perspective-control lenses, and late high-performance full-frame DSLR designs.\n\nThe tradeoff is historical complexity: compatibility depends heavily on body and lens generation. For optical comparison, though, the continuity is valuable because it lets decades of Nikon design practice sit under one mount family while the surrounding camera technology changes dramatically.",
  },
  nikonos: {
    era: "Nikonos amphibious camera mount, 1960s-2000s",
    formatNotes: "35 mm underwater and amphibious cameras",
    summary: "Nikon's amphibious camera mount for Nikonos underwater lenses, separate from Nikon F and Nikonos RS.",
    description:
      "Nikonos is the classic Nikon amphibious camera system derived from the Calypso design. Its lens mount was built for sealed, underwater-capable cameras rather than ordinary SLR or rangefinder bodies, and it is distinct from the later Nikonos RS SLR mount.\n\nThe lens family includes amphibious lenses usable in air and specialized underwater lenses corrected for water as part of the optical path. That makes the system unusually dependent on shooting environment: a lens that performs beautifully underwater may not be intended for ordinary aerial photography.\n\nFor catalog browsing, Nikonos entries should be treated as environmental optics, not just rugged 35 mm lenses. The mount is important because it shows optical design responding to water, pressure sealing, scale focusing, and underwater field curvature rather than to a conventional camera body alone.",
  },
  "nikonos-rs": {
    era: "Nikonos RS underwater autofocus SLR mount, 1990s",
    formatNotes: "35 mm underwater autofocus SLR",
    summary:
      "Nikon's dedicated underwater autofocus SLR mount for the Nikonos RS system, distinct from classic Nikonos and Nikon F.",
    description:
      "Nikonos RS was Nikon's purpose-built underwater autofocus SLR system, introduced after the classic Nikonos amphibious cameras. Its RS bayonet supported dedicated R-UW AF Nikkor lenses and should be treated as a separate mount from both the older Nikonos system and ordinary Nikon F SLR lenses.\n\nThe RS system kept the 35 mm frame but changed the mechanical and electronic problem around it. Lens design, focusing, sealing, and handling all had to work in an underwater SLR body rather than a scale-focus amphibious camera or a conventional land camera in a housing.\n\nFor catalog browsing, Nikonos RS entries should stay separate because the mount represents a short-lived but highly specialized underwater SLR ecosystem. Its lenses are best compared with other environmental or underwater optics before being folded into ordinary 35 mm SLR assumptions.",
  },
  "nikon-s": {
    era: "Nikon rangefinder mount, 1940s-1960s",
    formatNotes: "35 mm rangefinder",
    summary:
      "Nikon's classic rangefinder mount, closely associated with postwar Nikkor lenses and the Nikon S-series cameras.",
    description:
      "Nikon S mount belongs to the company's postwar rangefinder system, developed before the Nikon F shifted the brand toward SLRs. The mount is mechanically related in concept to the Contax rangefinder standard, but small dimensional and focusing-coupling differences mean compatibility is not universal outside some wide-angle cases.\n\nS-mount lenses show Nikon's rangefinder-era priorities: bright normals, compact wides, and telephoto lenses designed around coupled rangefinder focusing. These lenses helped establish the Nikkor reputation internationally before Nikon's SLR system became dominant.\n\nThey are a useful historical prelude to Nikon F because many optical ideas and focal-length conventions carried forward into the SLR era. At the same time, their short-register rangefinder packaging gives them a very different physical and optical balance from later reflex Nikkors.",
  },
  "nikon-z": {
    era: "Nikon mirrorless mount, introduced in 2018",
    formatNotes: "Full-frame FX and APS-C DX mirrorless",
    summary:
      "Nikon's short-flange mirrorless mount, combining a very wide throat with modern electronic communication.",
    description:
      "Nikon Z was designed as a clean mirrorless reset after decades of F-mount continuity. Its 55 mm inner diameter and 16 mm flange focal distance give designers more freedom for large rear elements, fast normals, high-performance wide angles, and compact lenses that would be difficult on a reflex body. The wide throat also gives Nikon room to pursue unusually fast lenses while keeping more symmetrical or less strained rear-group layouts available.\n\nThe mount covers both full-frame FX and APS-C DX mirrorless cameras, with lens format rather than mount id distinguishing the intended image circle. Nikon also built the FTZ adapter path around the historical importance of F-mount lenses while keeping native Z optics free from SLR mirror clearance. That makes Z pages a natural place to compare adapted continuity against formulas designed from the start for the shorter register.\n\nZ lenses often show Nikon using the new geometry to reduce aberrations at wide apertures, flatten fields, and simplify retrofocus wide-angle layouts compared with F-mount DSLR designs. The Noct and other fast S-line lenses are especially clear examples of the mount's optical ambition, while compact DX and pancake-style lenses show the same mount serving smaller everyday systems.",
  },
  "olympus-om": {
    era: "Olympus OM manual-focus SLR mount, 1970s-2000s",
    formatNotes: "35 mm SLR",
    summary: "Olympus's compact manual-focus SLR mount, designed around small bodies and the Zuiko lens system.",
    description:
      "Olympus OM was built around the idea that professional 35 mm SLRs could be smaller, quieter, and more elegant without giving up capability. The OM-1 arrived in 1972 after starting life as the M-1, and the mount supported compact Zuiko lenses and bodies such as the OM-1, OM-2, OM-3, and OM-4.\n\nThe system's design philosophy shows up in the lenses as much as in the bodies. OM lenses often emphasize small size, refined mechanical handling, and restrained barrel dimensions, while still covering a full 35 mm frame and preserving SLR viewing.\n\nWide-angle and macro designs are especially important in the system, and many Zuiko primes remain notable for fitting serious optical correction into barrels smaller than competing SLR lenses. In this catalog, OM designs make a good comparison point for compactness-driven manual-focus SLR engineering.",
  },
  "olympus-pen-f": {
    era: "Olympus Pen F half-frame SLR mount, 1960s-1970s",
    formatNotes: "Half-frame 35 mm film",
    summary: "Olympus's half-frame SLR mount for the original Pen F, FT, and FV cameras and compact Zuiko lenses.",
    description:
      "Olympus Pen F is the mount for the original half-frame film SLR system, not the later digital PEN-F camera. The cameras expose 18 x 24 mm frames on 35 mm film, doubling the number of vertical-format exposures compared with standard 24 x 36 mm photography.\n\nThe smaller frame let Olympus build a remarkably compact SLR system with dedicated Zuiko lenses. The cameras used an unusual optical and mechanical layout, including a sideways mirror/prism path and rotary shutter, which helped keep the bodies slim.\n\nIn catalog comparisons, Pen F lenses are useful because they show high-quality SLR design scaled to half-frame. They cover less field than full-frame 35 mm lenses, so image-format metadata is essential when comparing their field, aberrations, and physical size.",
  },
  "pentax-110": {
    era: "Pentax Auto 110 miniature SLR mount, late 1970s-1980s",
    formatNotes: "110 film",
    summary: "A tiny interchangeable-lens mount for the Pentax Auto 110, one of the smallest true SLR systems made.",
    description:
      "Pentax 110 is a specialized miniature SLR mount built for 110 cartridge film. The Auto 110 system used extremely small interchangeable lenses while keeping reflex viewing, making it an unusual mix of compact-camera format and true SLR architecture.\n\nThe camera body contains the aperture and shutter mechanism, so the lenses themselves are unusually simple and small compared with conventional SLR lenses. That system choice keeps the lens mount compact but also means the optical formulas live inside a tightly controlled camera body environment.\n\nBecause the image area is small, the lenses can be physically tiny. The optical compromises and possibilities are different from 35 mm systems: short focal lengths, small image circles, modest enlargement expectations, and compact groups dominate the designs.",
  },
  "pentax-645": {
    era: "Pentax 645 medium-format SLR mount, introduced in 1984",
    formatNotes: "645 medium format film and digital bodies",
    summary:
      "Pentax's 6x4.5 SLR mount, spanning manual-focus film bodies, autofocus 645N bodies, and 645 digital cameras.",
    description:
      "Pentax 645 was introduced as a relatively integrated 6x4.5 medium-format SLR system. The original body used 120/220 film inserts, a built-in motor drive, TTL metering, and electronic exposure modes rather than the fully modular backs and finders common in some studio systems.\n\nThe mount evolved from manual-focus A-series 645 lenses into autofocus FA lenses and later digital 645 bodies. Compatibility is broad but generation-dependent, especially around autofocus, aperture information, and digital image-circle expectations.\n\nIn catalog terms, Pentax 645 lenses are useful for comparing medium-format SLR designs that were meant to be more field-friendly than larger studio cameras. The system balances larger-than-35 mm image quality with handling that often feels closer to a big SLR than to a modular cube.",
  },
  "pentax-67": {
    era: "Pentax 6x7 / 67 medium-format SLR mount, introduced in 1969",
    formatNotes: "6x7 medium format roll film",
    summary: "Pentax's oversized 35 mm-style 6x7 SLR mount, known for large negatives and Takumar/Pentax 67 lenses.",
    description:
      "Pentax 67 began as the Asahi Pentax 6x7 and brought 6x7 roll-film negatives into an SLR body shaped more like an enlarged 35 mm camera than a studio cube. The system used a focal-plane shutter, interchangeable prisms, and a wide lens family.\n\nThe mount has inner and outer bayonet arrangements to support lenses of different sizes, with famous optics such as the 105 mm f/2.4 standard. Because the body uses a large mirror and focal-plane shutter, the system differs strongly from leaf-shutter 6x7 cameras such as the Mamiya RB/RZ.\n\nFor catalog comparison, Pentax 67 lenses represent medium-format SLR design where handheld field use and shallow-depth portrait rendering are central. They must cover a large image circle while preserving reflex clearance in a body that behaves like a giant 35 mm SLR.",
  },
  "pentax-k": {
    era: "Pentax K bayonet, introduced in 1975",
    formatNotes: "35 mm film, APS-C digital, and full-frame digital",
    summary: "Pentax's durable SLR bayonet, spanning manual K lenses, autofocus KAF generations, and modern DSLRs.",
    description:
      "Pentax K replaced M42 screw mount with a bayonet while preserving a strong continuity ethos. Introduced in 1975, the mount has evolved through manual-aperture lenses, A-series electronic aperture information, autofocus KAF variants, digital APS-C DSLRs, and full-frame K-1 bodies.\n\nThe K mount is unusually adapter-friendly and backward-compatible compared with many camera systems, though features such as aperture control, autofocus drive, and electronic contacts vary by generation. Pentax's official M42 adapter also made the transition from screw mount less abrupt for photographers with existing Takumar lenses.\n\nIts lens history includes compact Limited primes, rugged DA and D FA lenses, classic SMC coatings, and broad third-party support from the film era onward. K-mount pages are useful for comparing a long-running SLR bayonet that survived autofocus and digital without being abandoned.",
  },
  "pentax-q": {
    era: "Pentax Q small-sensor mirrorless mount, introduced in 2011",
    formatNotes: "1/2.3-inch type and 1/1.7-inch type digital sensors",
    summary: "Pentax's ultra-compact mirrorless mount, built around compact-camera-sized sensors and tiny lenses.",
    description:
      "Pentax Q is one of the smallest interchangeable-lens camera systems ever sold. The original Q used a 1/2.3-inch-type sensor, with later Q7 and Q-S1 bodies moving to a larger 1/1.7-inch-type sensor while keeping the same tiny mount.\n\nThe lens family mixes serious small optics with playful toy lenses and adapters. Because the sensor is so small, focal lengths are extremely short by full-frame standards and depth of field is naturally deep, even when the lens is physically fast.\n\nIn catalog comparisons, Pentax Q entries should be treated as compact-camera optics with interchangeable-lens flexibility. Their scale, aberration tolerances, and rendering goals are very different from APS-C or full-frame mirrorless systems.",
  },
  praktina: {
    era: "Praktina bayonet SLR mount, 1950s-1960s",
    formatNotes: "35 mm SLR",
    summary: "An early professional 35 mm SLR bayonet from KW/Praktina, supported by Carl Zeiss Jena and other lenses.",
    description:
      "Praktina was an early 35 mm SLR system from East Germany, separate from the more common Praktica screw-mount line. Its bayonet mount appeared in a period when camera makers were still experimenting with what a professional small-format SLR system should include.\n\nThe system supported Carl Zeiss Jena lenses and other optics, along with ambitious accessories such as motor-drive and finder options. It sits near Exakta historically, but with its own mechanical interface and system-camera ambitions.\n\nFor catalog browsing, Praktina entries are useful as early SLR evidence: designers were adapting classic Tessar, Biotar, Flektogon, and Sonnar-era ideas to reflex viewing before later Japanese bayonets standardized the market.",
  },
  "rollei-6000": {
    era: "Rolleiflex SLX / 6000-series medium-format mount, 1970s-2000s",
    formatNotes: "Primarily 6x6 medium format",
    summary:
      "Rollei's electronic 6x6 SLR mount for SLX and 6000-series bodies with Zeiss, Schneider, and Rollei lenses.",
    description:
      "Rollei 6000 covers the electronic medium-format SLR lineage that grew out of the Rolleiflex SLX and matured through 6006, 6008, 6003, and related bodies. The system combined 6x6 roll film, motorized operation, electronic exposure control, and interchangeable lenses and backs.\n\nThe lenses include Zeiss, Schneider, and Rollei/HFT-branded designs, many with electronic leaf shutters. The system competes conceptually with Hasselblad V and Bronica SQ, but leans more heavily into electronics and integrated camera automation.\n\nIn catalog comparisons, Rollei 6000 lenses show a high-end 6x6 alternative to the classic Hasselblad path. They cover the same square medium-format problem while reflecting Rollei's preference for motorized, electronically coordinated camera operation.",
  },
  "rollei-qbm": {
    era: "Rollei QBM 35 mm SLR mount, introduced in 1970",
    formatNotes: "35 mm SLR",
    summary: "Rollei's Quick Bayonet Mount for SL35 and Voigtlander VSL-era 35 mm SLR lenses.",
    description:
      "Rollei QBM, or Quick Bayonet Mount, was Rollei's 35 mm SLR mount for the Rolleiflex SL35 line and related Voigtlander VSL cameras. It appeared as Rollei moved from twin-lens reflex fame into compact 35 mm SLR competition.\n\nThe lens family is notable for high-quality Zeiss and Schneider designs alongside Rollei and Rolleinar lenses. Many formulas overlap in name with better-known Zeiss systems, but the QBM mount and camera ecosystem are distinct.\n\nCatalog entries for QBM are useful for comparing another European interpretation of the manual-focus 35 mm SLR. The system did not become as broad as Nikon F, Canon FD, or Pentax K, but its best lenses are historically and optically important.",
  },
  "samsung-nx": {
    era: "Samsung APS-C mirrorless mount, introduced in 2010",
    formatNotes: "APS-C digital",
    summary: "Samsung's NX mirrorless mount, a fully electronic APS-C system with native autofocus lenses.",
    description:
      "Samsung NX was an APS-C mirrorless system launched with the NX10 generation. It used a fully electronic bayonet, contrast-detect autofocus, in-lens motors, and a short mirrorless register, but with a flange distance longer than many later mirrorless mounts.\n\nThe native lens lineup became surprisingly complete, including compact pancakes, consumer zooms, macro, fisheye, fast primes, and premium S-series zooms. Samsung also emphasized connected-camera features and lens controls such as the i-Function button.\n\nIn catalog comparisons, NX is a reminder that early mirrorless development was not only a Japanese camera-maker story. The system ended relatively quickly, but its lenses show a mature APS-C mirrorless design language before Samsung left the interchangeable-lens camera market.",
  },
  "samsung-nx-mini": {
    era: "Samsung NX Mini / NX-M mirrorless mount, introduced in 2014",
    formatNotes: "1-inch type digital",
    summary: "Samsung's tiny NX-M mount, built for NX Mini bodies with a 1-inch-type sensor and very compact lenses.",
    description:
      "Samsung NX Mini used a new NX-M mount rather than the larger APS-C NX mount. It paired a 1-inch-type sensor with a very thin body and a small set of compact lenses, aiming at an ultra-portable interchangeable-lens camera experience.\n\nThe system launched with tiny wide and standard zoom options and a fast portrait-normal prime, plus an adapter path to larger NX lenses. Its optical design priorities were closer to premium compact cameras and Nikon 1 than to APS-C mirrorless.\n\nFor catalog use, NX Mini entries should be compared by image format as much as by mount. The small sensor and short-register lens mount enable pocketable optics, but they also change depth of field, aberration scale, and equivalent focal-length behavior substantially.",
  },
  "sigma-sa": {
    era: "Sigma SA autofocus SLR and mirrorless mount, 1990s-2010s",
    formatNotes: "Primarily APS-C and full-frame Sigma bodies",
    summary: "Sigma's proprietary camera mount, used for SA-mount film bodies, DSLRs, and Foveon-sensor cameras.",
    description:
      "Sigma SA was the company's own autofocus mount for cameras sold alongside its third-party lens business. It hosted Sigma film SLRs, digital SD bodies, and the later sd Quattro mirrorless bodies, with many lenses adapted from Sigma's broader optical catalog.\n\nThe mount is most interesting because it pairs Sigma lens design with Sigma's Foveon-sensor camera lineage. That makes the system a distinctive mix of conventional SLR-style lens geometry, proprietary camera bodies, and unusually color-focused digital capture rather than a large mainstream ecosystem.\n\nSA pages in this catalog represent a smaller ecosystem than Canon, Nikon, or Sony mounts, but they show Sigma as a complete camera-system maker rather than only an independent lens supplier. They are also helpful when comparing multi-mount Sigma formulas that share optics across several camera systems.",
  },
  "sony-a": {
    era: "Minolta A / Sony A autofocus SLR mount, introduced in 1985",
    formatNotes: "35 mm film, APS-C digital, and full-frame digital",
    summary: "The autofocus SLR mount inherited by Sony from Minolta, later used by Alpha DSLR and SLT bodies.",
    description:
      "Sony A mount descends from Minolta's autofocus A mount, introduced in 1985 with the Maxxum/Dynax/Alpha SLR system. It began as a body-driven AF SLR platform and later gained in-lens motors, digital communication, and compatibility with Sony Alpha DSLR and translucent-mirror SLT cameras.\n\nThe system matters because it bridges Minolta's autofocus innovations and Sony's later mirrorless rise. Sony inherited not only the mount but also a body of full-frame and APS-C lens design assumptions built around SLR flange geometry and mechanical aperture operation.\n\nA-mount lenses include classic Minolta G optics, Sony G lenses, and Zeiss ZA collaborations. In this catalog, A mount is useful for studying the last mature phase of Minolta-derived autofocus SLR design before E mount became Sony's main platform.",
  },
  "sony-fe": {
    era: "Sony E mount, introduced for APS-C in 2010 and full-frame in 2013",
    formatNotes: "APS-C E and full-frame FE mirrorless",
    summary: "Sony's short-flange mirrorless mount, now one of the broadest APS-C and full-frame lens ecosystems.",
    description:
      "Sony E mount began with compact APS-C NEX cameras in 2010 and expanded to full-frame Alpha bodies with FE lenses in 2013. The short 18 mm flange distance made it highly adaptable, while Sony's early full-frame mirrorless push attracted extensive third-party lens support. The full-frame expansion also proved that one mirrorless mount could support both small crop bodies and professional 36 x 24 mm cameras without changing the bayonet.\n\nThe mount's single mechanical standard spans small APS-C lenses, professional full-frame GM lenses, Zeiss-branded collaborations, cinema-oriented optics, and manual-focus specialty lenses. This catalog groups E and FE under the same mount family, with image-format metadata distinguishing full-frame FE lenses from APS-C E lenses. That distinction is important because an APS-C E lens can be mechanically native while still projecting a smaller image circle.\n\nIn this catalog, Sony E/FE designs are useful for comparing how the same mount handles both compactness and very high performance. The system also shows how quickly a short-register mirrorless mount can accumulate native and adapted optical traditions, especially once third-party autofocus support becomes broad.",
  },
  "bronica-etr": {
    era: "Zenza Bronica ETR 645 medium-format SLR mount, introduced in 1976",
    formatNotes: "645 medium format roll film",
    summary: "Bronica's 6x4.5 modular SLR mount, using ETR-series bodies and Zenzanon leaf-shutter lenses.",
    description:
      "Zenza Bronica ETR was the company's 6x4.5 modular SLR system, positioned as a smaller and more portable alternative to 6x6 studio cameras. ETR, ETRS, and ETRSi bodies used interchangeable backs, finders, grips, and Zenzanon E/PE lenses.\n\nThe lenses use in-lens leaf shutters, giving flash synchronization across the shutter-speed range and making the system attractive for wedding, portrait, and location studio work. The smaller 645 frame also lets lenses and bodies stay more compact than Bronica's SQ and GS systems.\n\nIn catalog comparisons, Bronica ETR represents practical 645 medium-format SLR design: modular enough for professional use, but not as physically demanding as 6x6 or 6x7 systems. Its lenses balance coverage, portability, and leaf-shutter workflow.",
  },
  "bronica-gs": {
    era: "Zenza Bronica GS-1 medium-format SLR mount, introduced in 1982",
    formatNotes: "6x7 medium format roll film",
    summary: "Bronica's 6x7 modular SLR mount, built around GS-1 bodies and Zenzanon PG leaf-shutter lenses.",
    description:
      "Zenza Bronica GS-1 was Bronica's 6x7 modular SLR system, using interchangeable backs, finders, and Zenzanon PG lenses. It offered a large 6x7 negative in a more modular studio-camera layout than Pentax 67, while staying less massive than some bellows-focused 6x7 systems.\n\nThe PG lenses use leaf shutters, giving flash-sync advantages and shaping the optical/mechanical design around shutter units inside each lens. The system covers wide, normal, macro, portrait, and telephoto needs, though with a smaller ecosystem than Mamiya RB/RZ.\n\nIn catalog terms, Bronica GS is a useful 6x7 comparison point between handheld SLRs and studio modular cameras. Its lenses solve the large-frame problem with leaf-shutter integration rather than focal-plane-shutter body design.",
  },
  "bronica-sq": {
    era: "Zenza Bronica SQ 6x6 medium-format SLR mount, introduced in 1980",
    formatNotes: "6x6 medium format roll film",
    summary: "Bronica's square-format modular SLR mount, using SQ-series bodies and Zenzanon leaf-shutter lenses.",
    description:
      "Zenza Bronica SQ was Bronica's 6x6 modular SLR system, succeeding earlier focal-plane-shutter Bronicas with a leaf-shutter lens architecture. SQ, SQ-A, SQ-Ai, and related bodies used interchangeable backs, finders, grips, and Zenzanon S/PS lenses.\n\nThe square frame and modular body make SQ a natural alternative to Hasselblad V, but the system has its own electronics, lens line, and handling priorities. Leaf shutters in the lenses support flash synchronization and studio work, while backs allow multiple film formats and workflow options.\n\nFor catalog browsing, Bronica SQ lenses show another major path through professional 6x6 design. They are especially useful when comparing square-format leaf-shutter optics across Hasselblad, Rollei, and Bronica systems.",
  },
  "contax-yashica": {
    era: "Contax/Yashica SLR mount, 1970s-2000s",
    formatNotes: "35 mm SLR",
    summary: "The SLR mount shared by Yashica and Contax bodies, famous for Carl Zeiss T* manual-focus lenses.",
    description:
      "The Contax/Yashica mount joined Yashica camera bodies with Carl Zeiss-designed lenses in a 35 mm SLR system. It arrived with the 1970s Contax RTS/Yashica collaboration and became a favorite among photographers who wanted Zeiss optical character in a more modern reflex platform than earlier Contax rangefinders.\n\nC/Y lenses include Planars, Distagons, Sonnars, Makro-Planars, Vario-Sonnars, and specialty lenses with Zeiss T* coatings. Yashica ML lenses and other compatible optics broaden the system beyond Zeiss-branded glass, while still sharing the same manual-focus bayonet.\n\nThe mount is historically important as a bridge from classic Zeiss formulas into late manual-focus SLR photography. In catalog comparisons, C/Y lenses often make a strong contrast against Japanese manual-focus contemporaries because they share the same reflex constraints but a different optical design culture.",
  },
};

export function getMountDetails(mountId: LensMountId): MountDetails | null {
  return MOUNT_DETAILS[mountId] ?? null;
}
