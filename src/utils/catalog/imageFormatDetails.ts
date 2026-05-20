/**
 * Image-format descriptions for the /formats index and detail pages.
 *
 * Keyed by canonical ImageFormatId values from lensTaxonomy.ts. Every canonical
 * format gets an entry so format pages have copy ready as catalog coverage grows.
 */

import type { ImageFormatId } from "./lensTaxonomy.js";

export interface ImageFormatDetails {
  summary: string;
  description: string;
  commonUses?: string;
  coverageNotes?: string;
}

export const IMAGE_FORMAT_DETAILS: Record<ImageFormatId, ImageFormatDetails> = {
  "110": {
    commonUses: "Pocket film cameras and miniature interchangeable-lens systems",
    coverageNotes: "17 x 13 mm frame with a 21.4 mm diagonal",
    summary: "A compact cartridge-film format whose small frame enabled very small cameras and unusually tiny lenses.",
    description:
      "The 110 format was introduced for pocket cameras, using cartridge film to make loading simple and camera bodies extremely compact. The exposed image is only 17 x 13 mm in this catalog's reference geometry, so even a lens that covers the whole frame can use a much smaller image circle than a 35 mm still-camera lens. That is why 110 cameras and systems such as Pentax Auto 110 could put interchangeable optics into bodies that feel closer to compact cameras than conventional SLRs.\n\nOptically, 110 designs operate in a very different scale from 35 mm systems. Focal lengths are short, entrance pupils are small for a given f-number, and depth of field is naturally deep at equivalent angles of view. Designers can keep lenses physically tiny, but the small negative also asks a lot from film grain, manufacturing tolerances, and alignment. In this catalog, 110-format lenses are useful for seeing how familiar optical formulas shrink when the capture area becomes much smaller than full-frame.",
  },
  "1/2.3-inch-type": {
    commonUses: "Small-sensor compact cameras, superzooms, action cameras, and early Pentax Q bodies",
    coverageNotes: "6.17 x 4.55 mm sensor with a 7.67 mm diagonal",
    summary: "A very small digital still-camera sensor class used where pocketable bodies and long zoom ranges matter.",
    description:
      "The 1/2.3-inch type format is much smaller than its name suggests. The inch-type label comes from older video tube naming conventions, not from the sensor's physical diagonal; in this catalog it maps to a 6.17 x 4.55 mm active area. That tiny frame made it common in compact cameras and long-range superzooms, where manufacturers could pair very short focal lengths with lenses that delivered dramatic equivalent zoom ranges in a small body.\n\nOptically, this format pushes lens design toward miniature scale. Image circles are small, focal lengths are extremely short, and depth of field is deep even at relatively bright f-numbers. The tradeoff is that diffraction, sensor pixel density, manufacturing tolerances, and alignment become more visible limits. When catalog entries use this format, they show how photographic lens formulas behave when the capture area is closer to compact-camera territory than interchangeable-lens still systems.",
  },
  "1/1.7-inch-type": {
    commonUses: "Premium compact cameras and later small-sensor interchangeable-lens compacts",
    coverageNotes: "7.44 x 5.58 mm sensor with a 9.3 mm diagonal",
    summary: "A premium compact-camera sensor class slightly larger than the common 1/2.3-inch type format.",
    description:
      "The 1/1.7-inch type format sits above the smallest compact-camera sensors while remaining far below Four Thirds, APS-C, or full-frame. Like other inch-type names, the label is historical rather than literal; the active image area used here is 7.44 x 5.58 mm. It appeared in advanced compacts and some small interchangeable-lens bodies as a way to gain a little more sensor area without giving up pocket-sized lens packages. In the Pentax Q line, it also helps distinguish later larger-sensor bodies from the original 1/2.3-inch type models.\n\nFor lens designers, the format keeps the compact-camera advantages of short focal lengths and small image circles, but it gives slightly more room for image quality than 1/2.3-inch type systems. Wide-to-telephoto zoom ratios can still be packaged efficiently, and depth of field remains naturally deep at equivalent fields of view. In the catalog, this format is useful for separating genuinely tiny compact-camera optics from the larger 1-inch and Four Thirds classes, especially when the same small mount family spans more than one sensor size.",
  },
  "1-inch-type": {
    commonUses: "Nikon 1 / CX, premium compact cameras, bridge cameras, and compact video-oriented systems",
    coverageNotes: "13.2 x 8.8 mm sensor with a 15.86 mm diagonal",
    summary: "A compact digital format larger than traditional point-and-shoot sensors but smaller than Four Thirds.",
    description:
      "The 1-inch type format is another legacy inch-type sensor name, but its actual imaging area is 13.2 x 8.8 mm in this taxonomy. That makes it much larger than classic compact-camera sensors while still notably smaller than Four Thirds. Nikon used this size for the CX-format Nikon 1 system, where the format carries an approximately 2.7x full-frame angle-of-view crop factor. Similar sensors also became common in premium fixed-lens compacts and bridge cameras.\n\nThe format gives designers a useful middle ground. Lenses can stay compact and use relatively short focal lengths, but the larger image area provides more headroom for image quality, subject isolation, and high-resolution sensors than 1/2.3-inch or 1/1.7-inch type designs. The crop factor makes telephoto coverage efficient, while the modest image circle keeps collapsible zooms and compact video-oriented optics practical. Catalog entries in this class help compare small-system interchangeable optics with high-end integrated-camera lens designs.",
  },
  "four-thirds": {
    commonUses: "Olympus and Panasonic Four Thirds / Micro Four Thirds stills and video systems",
    coverageNotes: "17.3 x 13 mm sensor with a 21.64 mm diagonal",
    summary:
      "A digital-native sensor format smaller than APS-C, used by Four Thirds and Micro Four Thirds lens systems.",
    description:
      "Four Thirds was designed as a digital camera format rather than inherited from a 35 mm film gate. Its 17.3 x 13 mm sensor uses a 4:3 aspect ratio and a diagonal almost exactly half that of full-frame, giving the format its familiar 2x angle-of-view crop factor. The smaller image circle lets lenses be more compact than equivalent 35 mm designs, especially in telephoto and standard zoom ranges where coverage and glass diameter dominate the package.\n\nThe format also changes photographic tradeoffs. For the same field of view and f-number, depth of field is deeper than full-frame, and designers use shorter focal lengths to achieve familiar angles of view. Four Thirds DSLR lenses and Micro Four Thirds mirrorless lenses share the capture format, but mirrorless bodies remove the SLR mirror box and can use shorter back-focus layouts. The catalog's Four Thirds entries show how compact digital-era lens systems can be when sensor size, mount geometry, and optical design are planned together.",
  },
  "aps-c": {
    commonUses: "Fujifilm X, Nikon DX, Canon crop-sensor, Sony E, Ricoh GR, and many compact digital systems",
    coverageNotes: "23.6 x 15.7 mm reference area in this catalog; production sizes vary slightly by maker",
    summary:
      "The most common crop-sensor still-photo format, balancing smaller bodies and lenses with strong image quality.",
    description:
      'APS-C sits between Four Thirds and full-frame in both image area and lens scale. The name comes from the smaller "Classic" frame idea in Advanced Photo System film, but digital APS-C is not one exact size: Nikon, Fujifilm, Sony, Canon, Sigma, and fixed-lens compact cameras all use slightly different dimensions. This catalog uses a 23.6 x 15.7 mm reference area so field comparisons stay consistent while still representing the broad APS-C class.\n\nThe format became the dominant consumer and enthusiast digital camera size because it offered a practical balance: sensors large enough for strong image quality and subject separation, but small enough to keep bodies, shutters, stabilization systems, and lenses more compact than 35 mm full-frame equivalents. It also made telephoto angles easier to package, since a shorter focal length gives the same framing.\n\nLens design for APS-C can take two paths. Some systems, such as Fujifilm X and many fixed-lens compacts, are built around dedicated APS-C image circles; others adapt or share full-frame mount families, where throat diameter and flange distance were chosen for a larger format. The catalog\'s APS-C pages make those choices visible by grouping dedicated mirrorless lenses, DSLR crop lenses, and fixed-lens compact-camera optics together.',
  },
  "aps-film": {
    commonUses: "Advanced Photo System film cameras and Minolta Vectis lenses",
    coverageNotes: "30.2 x 16.7 mm APS-H film gate reference with a 34.51 mm diagonal",
    summary: "The larger Advanced Photo System film frame used by late-1990s compact and interchangeable-lens cameras.",
    description:
      "APS film, also known as IX240, was a cartridge-based film system introduced in the 1990s to simplify loading, mid-roll handling, and print-format selection. The recorded negative used the full 30.2 x 16.7 mm High Definition frame, while Classic and Panoramic output were print-time crops stored through the system's information exchange metadata. This catalog uses that full APS-H style gate because a lens still has to cover the complete recorded frame, even when the photographer requested a narrower print. The result is wider than digital APS-C but still smaller than the 36 x 24 mm 135 frame.\n\nFor lens metadata, this format is mainly important because APS film systems were real optical ecosystems, not just a later digital crop label. Minolta Vectis and other APS cameras used lenses designed around the smaller film gate, which allowed more compact bodies and shorter focal lengths than 35 mm SLR systems. In the catalog, APS film should stay distinct from digital APS-C because the dimensions, aspect ratio, era, and camera-system constraints are different.",
  },
  "half-frame-135": {
    commonUses: "Olympus Pen F and other half-frame 35 mm cameras",
    coverageNotes: "24 x 18 mm half-frame 135 image area with a 30 mm diagonal",
    summary: "A 35 mm film format that uses half the standard 135 frame for smaller cameras and more exposures.",
    description:
      "Half-frame 135 uses the same 35 mm film stock as full-frame 135 cameras, but each exposure occupies roughly half the usual area. The catalog reference is 24 x 18 mm, giving a 30 mm diagonal and a 4:3 frame shape. Cameras such as the Olympus Pen F made this into a serious interchangeable-lens format rather than just an economy mode, pairing small SLR bodies with lenses scaled to the smaller image circle.\n\nThe optical consequences sit between full-frame 135 and smaller digital formats. Lenses can be shorter and more compact than their full-frame equivalents, while still using film stock, processing, and camera mechanics familiar from 35 mm photography. Because the frame is half the size of standard 135, corner correction, vignetting, and field coverage are less demanding than full-frame, but grain and enlargement requirements become more noticeable for large prints.",
  },
  "135-full-frame": {
    commonUses: "35 mm film, full-frame DSLR, full-frame mirrorless, and rangefinder systems",
    coverageNotes: "36 x 24 mm image area with a 43.3 mm diagonal",
    summary: "The classic 35 mm still-photo frame, now the reference point for full-frame digital lens design.",
    description:
      "The 135 still-camera frame became the dominant small-format photographic standard in the twentieth century. Its 36 x 24 mm image area defined familiar focal-length categories: 28 mm wide angle, 50 mm normal, 85 mm portrait, 135 mm telephoto, and many more. Because so much photographic vocabulary grew around this frame, other formats are often described through their full-frame equivalent angle of view.\n\nFull-frame digital cameras inherited that geometry, making 135-format coverage the modern reference for many optical comparisons. The format is large enough to demand careful correction across a broad field, but small enough to support fast primes, compact rangefinder lenses, professional zooms, and highly specialized optics in one ecosystem. A full-frame lens has to serve roughly a 21.6 mm field radius, so astigmatism, coma, distortion, vignetting, and lateral color become visible design pressures toward the corners.\n\nThe catalog's 135 entries span rangefinder, SLR, DSLR, and mirrorless systems. That makes the format especially useful for comparing how the same image area behaves under different mount constraints: short-register rangefinder lenses, retrofocus SLR wide angles, long-back-focus telephotos, and modern mirrorless designs with more freedom near the sensor.",
  },
  "135-panoramic": {
    commonUses: "Hasselblad XPan, Fujifilm TX, and panoramic 35 mm cameras",
    coverageNotes: "65 x 24 mm panoramic 135 frame with a 69.3 mm diagonal",
    summary: "A panoramic 35 mm film frame that uses a much wider gate than standard full-frame 135.",
    description:
      "135 panoramic uses ordinary 35 mm film but exposes a far wider frame than the standard 36 x 24 mm still-camera gate. The 65 x 24 mm reference used here is associated with cameras such as the Hasselblad XPan and Fujifilm TX, which could switch between conventional and panoramic frames on the same roll. It keeps the familiar 24 mm frame height while extending the width enough that the diagonal approaches 645 medium-format territory.\n\nThat geometry creates a very specific optical problem. A panoramic lens does not merely cover a cropped full-frame image; it has to hold illumination, distortion, and off-axis aberrations across a long horizontal field while maintaining a relatively narrow vertical frame. XPan-style systems expanded the exposed frame rather than masking a normal 35 mm image, so their lenses needed unusually generous image circles despite the compact rangefinder-like bodies. Catalog entries in this class are useful for seeing how wide-format coverage differs from both standard 135 and roll-film medium format.",
  },
  "44x33": {
    commonUses: "Fujifilm GFX, Hasselblad X, and related digital medium-format systems",
    coverageNotes: "43.8 x 32.9 mm sensor with a 54.78 mm diagonal",
    summary: "A modern digital medium-format size larger than full-frame but smaller than traditional 645 film.",
    description:
      "The 44 x 33 mm digital medium-format class is a practical compromise between full-frame portability and larger medium-format capture. It offers about 1.7 times the image area of 35 mm full-frame while staying well below the usable frame of 645 roll film. That difference matters: these systems are marketed as medium format, but their image circle requirements are closer to a modern digital standard than to the largest traditional film gates.\n\nThe format's 4:3-ish shape and 54.78 mm diagonal give lenses a wider field to cover than full-frame, while mirrorless camera bodies avoid the deep mirror box of medium-format SLRs. Designers still have to satisfy very high-resolution sensors, so field uniformity, chromatic correction, vignetting control, and mechanical precision matter across a large image circle. In the catalog, 44 x 33 designs are useful for comparing how mirrorless lens layouts scale when the image circle grows beyond full-frame without reaching full 645 film coverage.",
  },
  "leica-s-45x30": {
    commonUses: "Leica S digital medium-format DSLR lenses",
    coverageNotes: "45 x 30 mm sensor with a 54.08 mm diagonal",
    summary: "Leica's 3:2 digital medium-format sensor size, larger than full-frame and close to 44x33 in diagonal.",
    description:
      "Leica S uses a 45 x 30 mm sensor described by Leica as ProFormat. It is larger than 35 mm full-frame but keeps the same 3:2 aspect ratio, so its handling of composition feels closer to 135 photography than to squarer 44 x 33 mm systems. The sensor area is about 56 percent larger than full-frame, and its diagonal is very close to 44 x 33 digital medium format, but the wider shape changes where the lens has to perform hardest.\n\nBecause the S system is built as a medium-format DSLR, its lenses combine a large image circle with reflex-camera back-focus requirements. That makes the optical problem different from short-flange mirrorless medium format: wide angles must clear the mirror box, normal and telephoto lenses are physically substantial, and high-resolution digital capture demands strong correction across a larger field than full-frame. In the catalog, this format separates Leica S coverage from both 44 x 33 mirrorless and traditional 645 film systems.",
  },
  "645": {
    commonUses: "6x4.5 film SLR and autofocus medium-format systems",
    coverageNotes: "Nominal 56 x 41.5 mm film image area with a roughly 70 mm diagonal",
    summary:
      "A medium-format film size that trades the larger 6x6 frame for more exposures and a rectangular composition.",
    description:
      "6x4.5, often called 645, is the most compact common roll-film medium format. The name is nominal rather than literal: the usable frame is closer to 56 x 41.5 mm, depending on the camera gate, and the long side follows the width of 120 or 220 roll film. It preserves much of the larger-negative advantage over 35 mm while giving more frames per roll than 6x6 or 6x7 and a rectangular image shape that maps naturally to many print and magazine layouts.\n\nOptically, 645 lenses need a much larger image circle than full-frame lenses, and SLR mirror clearance often increases back-focus demands. Normal lenses sit around 75 to 80 mm rather than 50 mm, wide angles require significant coverage, and fast apertures become physically large quickly. The format's catalog entries show medium-format design priorities: coverage, even performance across a large field, restrained distortion, and manageable lens size for handheld or studio camera systems.",
  },
  "6x6": {
    commonUses: "Hasselblad V, Rolleiflex, Bronica SQ, Mamiya 6, and other square roll-film systems",
    coverageNotes: "Nominal 56 x 56 mm film image area with a 79.2 mm diagonal",
    summary: "The classic square medium-format roll-film frame, known for waist-level cameras and flexible cropping.",
    description:
      "6x6 is the square 120 roll-film format associated with many classic medium-format systems. The name is nominal; the usable image area is typically around 56 x 56 mm. Its square frame lets photographers compose without rotating the camera and decide later whether to crop vertically, horizontally, or keep the square, which made the format especially important in studio, portrait, wedding, and editorial work.\n\nLenses for 6x6 must cover a larger diagonal than 645, and the square frame means all four corners are equally important rather than being hidden by a narrower rectangle. Normal lenses are commonly around 75 to 80 mm, with wide angles and fast lenses becoming large quickly. In the catalog, 6x6 entries help show the optical priorities of square-format systems: generous coverage, even field performance, and mechanical packaging for waist-level SLRs or compact medium-format rangefinders.",
  },
  "6x7": {
    commonUses: "Pentax 67, Mamiya RB/RZ67, Mamiya 7, and Bronica GS systems",
    coverageNotes: "Nominal 70 x 56 mm film image area with an 89.6 mm diagonal",
    summary: "A large rectangular roll-film format with a print-friendly shape and a much bigger field than 645.",
    description:
      "6x7 uses 120 or 220 roll film to make a large rectangular negative, roughly 70 x 56 mm in this taxonomy. Actual camera gates vary slightly, but the format's near-5:4 proportions are close to common print sizes, which helped make it popular for portrait, landscape, studio, and commercial work. Compared with 645, it gives a visibly larger negative at the cost of fewer exposures per roll and larger camera systems.\n\nThe optical requirements are substantial. A 6x7 lens has to cover nearly a 90 mm diagonal, so even moderate wide angles need generous image circles and careful off-axis correction. SLR systems such as Pentax 67 and Mamiya RB/RZ add mirror-box and body-depth constraints, while rangefinder systems such as Mamiya 7 can use different wide-angle layouts. Catalog entries in this format make those medium-format design choices easier to compare.",
  },
  "6x8": {
    commonUses: "Fuji GX680 and other studio-oriented roll-film systems",
    coverageNotes: "Nominal 76 x 56 mm film image area with a 94.4 mm diagonal",
    summary: "A wide medium-format roll-film size used by studio systems that needed a larger rectangular frame.",
    description:
      "6x8 is a less common roll-film format that expands the frame beyond 6x7 while keeping the roughly 56 mm image height of 120 film. The 76 x 56 mm reference gives a broad rectangular image with a diagonal just under 95 mm; actual gate dimensions are system-specific, but this is the useful catalog reference for Fuji GX680-style coverage. It is closely associated with studio-oriented systems where negative size, controlled composition, and professional handling mattered more than compactness.\n\nLens design for 6x8 asks for very broad coverage, and some camera systems add movements that require even more image-circle margin than the nominal frame diagonal implies. Wide angles must manage distortion and illumination over a large field, while normal and telephoto lenses become physically substantial. In the catalog, 6x8 entries should be read as large-system medium-format optics where coverage and field uniformity are central design goals.",
  },
  "6x9": {
    commonUses: "Fuji G690, medium-format rangefinders, folding cameras, and technical roll-film cameras",
    coverageNotes: "Nominal 84 x 56 mm film image area with a 101 mm diagonal",
    summary: "A large 3:2 roll-film format that gives a medium-format negative with familiar full-frame proportions.",
    description:
      "6x9 is one of the largest common 120 roll-film formats. Its usable frame is about 84 x 56 mm, giving a 3:2 aspect ratio similar to 35 mm full-frame but at far larger scale. The format appears in folding cameras, press and technical cameras, and rangefinder systems such as the Fuji G690, where the goal is a large negative without moving up to sheet film.\n\nThe large diagonal changes everything about the optics. Normal lenses sit around 100 mm, wide-angle coverage is demanding, and fast apertures become large and expensive. Rangefinder and view-camera-style systems can avoid some SLR mirror constraints, but lenses still need to deliver adequate sharpness, illumination, and distortion control over a 101 mm diagonal. Catalog entries in this class show medium-format design pushed toward the edge of roll-film coverage.",
  },
  "4x5": {
    commonUses: "Large-format view cameras, field cameras, press cameras, and technical cameras",
    coverageNotes: "Nominal 127 x 101.6 mm sheet-film size with a 162.6 mm diagonal",
    summary: "The most common large-format sheet-film size, large enough for camera movements and detailed negatives.",
    description:
      "4x5 is the workhorse large-format sheet-film size. The nominal sheet is 127 x 101.6 mm, though real holders, rebates, and film gates expose slightly less than the full sheet. Compared with roll-film formats, 4x5 gives a much larger negative and is commonly used in cameras with adjustable front and rear standards, where tilt, swing, rise, fall, and shift are part of normal operation.\n\nFor lenses, the nominal sheet diagonal is only the starting point. View-camera lenses often need image circles larger than the film diagonal so the photographer can use movements without clipping the image. Coverage angle, illumination falloff, field curvature, and distortion control matter as much as raw sharpness. In the catalog, 4x5 entries should be understood as large-format optics where the usable image circle may intentionally exceed the recorded frame.",
  },
  "5x7": {
    commonUses: "Large-format view cameras, field cameras, and contact-print-oriented work",
    coverageNotes: "Nominal 177.8 x 127 mm sheet-film size with a 218.5 mm diagonal",
    summary: "A larger sheet-film format between 4x5 and 8x10, prized for a bigger negative without 8x10 scale.",
    description:
      "5x7 sheet film sits between the portability of 4x5 and the huge presence of 8x10. Its nominal sheet size is 177.8 x 127 mm in the catalog's landscape orientation, with the actual exposed image depending on holder and camera gate details. It gives a much larger negative than 4x5 while remaining more manageable than 8x10 in camera size, lens length, bellows draw, and film handling. It has historically appealed to photographers who wanted contact-print quality or generous enlargement latitude without committing to the largest field equipment.\n\nThe optical demands are correspondingly larger. Lenses need to cover a 218.5 mm diagonal before allowing any movement, and view-camera use often asks for still more image circle. Apertures tend to be more modest, focal lengths grow longer for normal fields of view, and camera stability becomes part of the optical system in practice. Catalog entries in this format emphasize coverage, tonal rendering, and movement room more than compactness.",
  },
  "8x10": {
    commonUses: "Large-format studio, landscape, architecture, and contact-print photography",
    coverageNotes: "Nominal 254 x 203.2 mm sheet-film size with a 325.3 mm diagonal",
    summary: "A very large sheet-film format whose huge image area places coverage above almost every other concern.",
    description:
      "8x10 is one of the iconic large-format sheet-film sizes. The nominal sheet is 254 x 203.2 mm, large enough for detailed contact prints, and its visual character is shaped as much by camera movements, long focal lengths, and deliberate working pace as by film area alone. Real holders expose a little less than the full sheet, but the nominal diagonal remains the right first-order lens-coverage reference. Compared with smaller formats, the lens and camera become a system of coverage, bellows extension, stability, and precise alignment.\n\nThe optical requirements are extreme by small-camera standards. Even a lens with no movement margin must cover a 325.3 mm diagonal, and practical view-camera work often benefits from much larger image circles. Normal lenses are roughly 300 mm, wide angles remain physically large, and maximum apertures are usually modest. In the catalog, 8x10 details are ready for lenses where coverage, movement room, and large-format rendering matter more than speed or portability.",
  },
};

export function getImageFormatDetails(formatId: ImageFormatId): ImageFormatDetails | null {
  return IMAGE_FORMAT_DETAILS[formatId] ?? null;
}
