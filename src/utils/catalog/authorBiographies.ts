/**
 * Curated profiles for historically significant optical patent authors.
 *
 * Patent metadata is generated from the lens catalog, while biographies need
 * editorial judgment and stable citations. Keeping the two layers separate
 * lets most author pages remain purely bibliographic without implying that a
 * high patent count alone makes an inventor a public biographical subject.
 */

export interface AuthorBiographySource {
  label: string;
  url: string;
}

export interface AuthorBiography {
  summary: string;
  sources: readonly AuthorBiographySource[];
}

export const AUTHOR_BIOGRAPHIES = {
  "Paul Rudolph": {
    summary:
      "Paul Rudolph was a German physicist and one of the foundational designers of modern photographic objectives. At Carl Zeiss he developed the Protar, the first widely successful anastigmatic lens, followed by the Planar and Tessar. These designs established durable solutions for correcting astigmatism, field curvature, and other aberrations, and their names and optical descendants have remained influential for more than a century.",
    sources: [
      {
        label: "ZEISS — History of camera and cine lenses",
        url: "https://www.zeiss.com/corporate/en/about-zeiss/past/history/technological-milestones/camera-and-cine-lenses.html",
      },
    ],
  },
  "Ludwig Bertele": {
    summary:
      "Ludwig Bertele was a German optical designer best known for the high-speed Sonnar and wide-angle Biogon lens families. His compact Sonnar designs combined large apertures with relatively few air-to-glass surfaces, reducing flare before antireflection coatings became common. He later advanced the nearly symmetrical Biogon, whose broad field and strong corner definition made it a landmark design for rangefinder, medium-format, and technical cameras.",
    sources: [
      {
        label: "ZEISS — The unique history of the Otus lens family",
        url: "https://lenspire.zeiss.com/photo/en/article/the-unique-history-of-the-otus-lens-family-zeiss",
      },
      {
        label: "ZEISS — Distagon, Biogon, Hologon",
        url: "https://lenspire.zeiss.com/photo/app/uploads/2018/02/en_CLB41_Nasse_LensNames_Distagon.pdf",
      },
    ],
  },
  "Walter Mandler": {
    summary:
      "Walter Mandler was the leading optical designer at Ernst Leitz Canada and one of the defining figures in postwar Leica lens development. He designed or contributed to nearly fifty Leica objectives, including versions of the Summicron, Summilux, Elmarit, and the 50 mm f/1 Noctilux. His work also extended beyond still photography to optics for television cameras, IMAX projection, medical imaging, and specialized military systems.",
    sources: [
      {
        label: "Leica Camera — The Spy Who Came in From the Cold",
        url: "https://leica-camera.com/en-SG/blog/photography/carl-merkin-180mm-f34-apo-telyt-r",
      },
      {
        label: "Leica Camera — 50 years of Noctilux",
        url: "https://leica-camera.com/en-AT/Company/Press-Centre/Press-Releases/Press-Releases-2016/Press-Release-Leica-Noctilux-the-%E2%80%98Light-Giants%E2%80%99-have-turned-50-%E2%80%93-and-are-as-young-as-ever-before",
      },
    ],
  },
  "Erhard Glatzel": {
    summary:
      "Erhard Glatzel was a leading mathematician and manager in the camera-lens department at Carl Zeiss Oberkochen. He was a major force in the adoption of computer-aided lens calculation and led a group credited with more than one hundred designs. His best-known work includes the Hologon and the exceptionally fast Planar 0.7/50, later used by Stanley Kubrick for candlelit scenes in Barry Lyndon, as well as specialized optics for the Apollo program.",
    sources: [
      {
        label: "ZEISS — 50th anniversary of the Moon landing",
        url: "https://www.zeiss.com/corporate/en/c/global-campaigns/50-years-moon-landing.html",
      },
      {
        label: "ZEISS — Distagon, Sonnar, Tessar",
        url: "https://lenspire.zeiss.com/photo/en/article/distagon-sonnar-tessar",
      },
    ],
  },
  "Carl August Hans Harting": {
    summary:
      "Carl August Johannes “Hans” Harting was a German physicist, scientific optician, and influential optical administrator. As Voigtländer’s scientific and technical director, he calculated the Heliar and Dynar photographic objectives. He later led optical work at the German patent office, chaired the German Society for Applied Optics, and held senior scientific leadership positions at Carl Zeiss Jena during its postwar reconstruction.",
    sources: [
      {
        label: "Neue Deutsche Biographie — Hans Harting",
        url: "https://www.deutsche-biographie.de/sfz26174.html",
      },
    ],
  },
  "Robert Richter": {
    summary:
      "Robert Richter was a German optical designer whose career centered on photographic, projection, and aerial-survey optics. At Zeiss he developed the Topogon, a compact symmetrical wide-angle lens offering a 90-degree field with unusually low distortion. Introduced in 1933, it became an important foundation for photogrammetric and aerial-camera objectives and influenced later families of highly corrected symmetrical wide-angle lenses.",
    sources: [
      {
        label: "ZEISS — History of camera and cine lenses",
        url: "https://www.zeiss.com/corporate/en/about-zeiss/past/history/technological-milestones/camera-and-cine-lenses.html",
      },
      {
        label: "Photogrammetric Engineering — Development and Perfection of the Topogon Lens",
        url: "https://www.asprs.org/wp-content/uploads/pers/1956journal/dec/1956_dec_868-874.pdf",
      },
    ],
  },
  "Albrecht Wilhelm Tronnier": {
    summary:
      "Albrecht Wilhelm Tronnier was a prolific German optical designer whose work connected Schneider-Kreuznach, ISCO, Farrand Optical, Voigtländer, and Zeiss. He created or helped establish several enduring lens families, including the Angulon and Xenon at Schneider and the Ultron and Nokton for Voigtländer. His designs ranged from fast normal and cinema lenses to wide-angle, aerial, and large-format objectives.",
    sources: [
      {
        label: "Arne Cröll — Voigtländer large-format lenses from 1949–1972",
        url: "https://www.arnecroell.com/voigtlaender.pdf",
      },
      {
        label: "Schneider-Kreuznach — Optics patents and heritage lens brands",
        url: "https://schneiderkreuznach.com/en/industrial-optics/knowledge-hub/patents",
      },
    ],
  },
  "Günther Lange": {
    summary:
      "Günther Lange was a postwar optical designer at Carl Zeiss Oberkochen. His patent record in this catalog spans Contarex-era Planar, Tessar, Distagon, Olympia Sonnar, and Pro-Tessar designs, showing unusual breadth across normal, wide-angle, telephoto, and interchangeable front-component optics. ZEISS also identifies Lange, alongside Johannes Berger, as a member of Erhard Glatzel’s team responsible for specialized camera lenses used during the Apollo program.",
    sources: [
      {
        label: "ZEISS — 50th anniversary of the Moon landing",
        url: "https://www.zeiss.com/corporate/en/c/global-campaigns/50-years-moon-landing.html",
      },
    ],
  },
  "Harry Zöllner": {
    summary:
      "Harry Zöllner was a German physicist and optical designer who shaped the postwar photographic-lens program at Carl Zeiss Jena. From 1946 through 1977 he led the company’s photographic lens calculation office, overseeing objective development while contributing patents and technical publications of his own. His long tenure connected the rebuilding of the Jena works with later designs such as the Pancolar represented in this catalog.",
    sources: [
      {
        label: "Jena Yearbook of Technology and Industrial History — Harry Zöllner",
        url: "https://www.technikgeschichte-jena.de/tag/fotoobjektive/",
      },
      {
        label: "Stadtgeschichte Weida — Harry Zöllner",
        url: "https://www.stadtgeschichte-weida.de/persoenlichkeiten/harry-zoellner/",
      },
    ],
  },
  "Ellis I. Betensky": {
    summary:
      "Ellis I. Betensky is an American optical designer associated with Opcon Associates and a major contributor to the original Vivitar Series 1 program. His photographic designs used coordinated moving lens groups to preserve correction while focusing at unusually close distances, helping make continuous macro focusing a signature Series 1 feature. His wider published and patented work covers zoom, projection, binocular, and electronic-imaging optics across several decades of computer-aided lens design.",
    sources: [
      {
        label: "Vivitar — The Evolution of the 70–210 mm Series 1 Lens Design",
        url: "https://www.pacificrimcamera.com/rl/02093/02093.pdf",
      },
      {
        label: "Optica — Aberration correction and desensitization of an inverse triplet objective lens",
        url: "https://opg.optica.org/abstract.cfm?uri=IODC-1998-LTuB.2",
      },
    ],
  },
} as const satisfies Record<string, AuthorBiography>;

/** Return a curated profile when this author has one. */
export function getAuthorBiography(name: string): AuthorBiography | undefined {
  const biographies: Readonly<Record<string, AuthorBiography>> = AUTHOR_BIOGRAPHIES;
  return biographies[name];
}
