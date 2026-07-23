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
  "Hideo Azuma": {
    summary:
      "Hideo Azuma was a senior manager in Nippon Kogaku’s Optical Design Section, an experienced designer of rangefinder-camera lenses, and one of Zenji Wakimoto’s teachers. Nikon credits him with helping establish its approach to aberration balancing and with designing the W-Nikkor 3.5 cm f/1.8, completed in 1955. That compact, fast wide-angle lens used new lanthanum glasses in an original symmetrical arrangement that Nikon describes as a model for later designs.",
    sources: [
      {
        label: "Nikon — NIKKOR: The Thousand and One Nights No. 3",
        url: "https://imaging.nikon.com/imaging/information/story/0003/",
      },
    ],
  },
  "Haruo Sato": {
    summary:
      "Haruo Sato is a Nikon optical designer and one of the principal authors documenting NIKKOR design history in the company’s Thousand and One Nights series. He joined Nikon in 1985 and, only six months later, was assigned his first lens: the Ai AF Zoom Nikkor 24–50 mm f/3.3–4.5S, Nikon’s first wide-angle autofocus zoom. His later patent record spans compact consumer zooms, professional ultra-wide zooms, supertelephotos, and fast prime lenses.",
    sources: [
      {
        label: "Nikon — NIKKOR: The Thousand and One Nights No. 93",
        url: "https://imaging.nikon.com/imaging/information/story/0093/",
      },
    ],
  },
  "Hiroshi Ito": {
    summary:
      "Hiroshi Ito was an early postwar Canon optical engineer whose 1951 Serenar 50 mm f/1.8 became one of the company’s defining rangefinder lenses. Canon credits his original analysis with overcoming the coma flare that limited fast Gaussian objectives. The resulting theory accelerated Canon’s development of large-aperture normal, wide-angle, and telephoto lenses, while Ito later made broader contributions to the diversification of Canon’s business.",
    sources: [
      {
        label: "Canon Camera Museum — Canon history, 1946–1954",
        url: "https://global.canon/en/c-museum/history/story03.html",
      },
    ],
  },
  "Jihei Nakagawa": {
    summary:
      "Jihei Nakagawa was a Japanese optical designer and author whose patents in this catalog span fast standard, fisheye, ultra-wide-angle, and extreme-telephoto Olympus objectives. Beyond product design, he developed practical methods for applying aberration theory, published technical papers from the Nakagawa Lens Design Laboratory, and wrote Lens Design Engineering. Nikon later described him as an exceptionally distinguished designer and cited both his book and his unusual positive-lead 18 mm f/3.5 design.",
    sources: [
      {
        label: "Nikon — NIKKOR: The Thousand and One Nights No. 55",
        url: "https://imaging.nikon.com/imaging/information/story/0055/",
      },
      {
        label: "J-STAGE — An Application of Aberration Theory for Determination of the Forms of Lens Elements",
        url: "https://www.jstage.jst.go.jp/article/kogaku1972/8/6/8_6_330/_article/-char/ja/",
      },
    ],
  },
  "Koichi Wakamiya": {
    summary:
      "Koichi Wakamiya was a Nikon optical designer who moved from custom instruments and equipment into camera-lens development. He designed the 35 mm f/2.8 optical system for Nikon’s first autofocus compact camera, the L35AF “Pikaichi,” then continued with later Pikaichi models. Nikon also identifies the Series E 100 mm f/2.8 and the UV-Nikkor 105 mm f/4.5S among his signature designs, and credits him with training Kouichi Ohshita.",
    sources: [
      {
        label: "Nikon — NIKKOR: The Thousand and One Nights No. 33",
        url: "https://imaging.nikon.com/imaging/information/story/0033/",
      },
    ],
  },
  "Kouichi Ohshita": {
    summary:
      "Kouichi Ohshita is a Nikon optical designer and technical writer who learned optical-system design from Koichi Wakamiya before assuming compact-camera lens responsibilities. His patent work in this catalog ranges from a fast portrait lens and an underwater wide-angle zoom to the deliberately simple Fun Fun LensSet. Ohshita also became a prolific author of Nikon’s Thousand and One Nights histories, preserving the design reasoning and working traditions behind generations of NIKKOR lenses.",
    sources: [
      {
        label: "Nikon — NIKKOR: The Thousand and One Nights No. 33",
        url: "https://imaging.nikon.com/imaging/information/story/0033/",
      },
      {
        label: "Nikon — NIKKOR: The Thousand and One Nights No. 52",
        url: "https://imaging.nikon.com/imaging/information/story/0052/",
      },
      {
        label: "Nikon — NIKKOR: The Thousand and One Nights No. 54",
        url: "https://imaging.nikon.com/imaging/information/story/0054/",
      },
    ],
  },
  "Saburo Murakami": {
    summary:
      "Saburo Murakami was a central figure in Nippon Kogaku’s prewar and early postwar photographic-lens program. Working in the company’s Optical System Research Department, he persisted with camera-lens design when military optics dominated production. Nikon credits him with the six foundational interchangeable lenses introduced from 1945 through 1949 and records how he repeatedly recalculated designs around severe postwar glass shortages, helping reestablish the company’s civilian camera business.",
    sources: [
      {
        label: "Nikon — NIKKOR: The Thousand and One Nights No. 34",
        url: "https://imaging.nikon.com/imaging/information/story/0034/",
      },
    ],
  },
  "Yoshiyuki Shimizu": {
    summary:
      "Yoshiyuki Shimizu was a prolific Nippon Kogaku optical designer who joined the company in 1952. After training in optics, mechanics, lens processing, and polishing, he moved into the design of camera and microscope optics. A protégé of Zenji Wakimoto, Shimizu helped develop the Nikkor-S Auto 50 mm f/1.4 and later created its next-generation successor. His broader work encompassed fast normal and wide-angle lenses, fisheyes, and catadioptric telephotos.",
    sources: [
      {
        label: "Nikon — NIKKOR: The Thousand and One Nights No. 84",
        url: "https://imaging.nikon.com/imaging/information/story/0084/",
      },
      {
        label: "Nikon — NIKKOR: The Thousand and One Nights No. 97",
        url: "https://imaging.nikon.com/imaging/information/story/0097/",
      },
    ],
  },
  "Zenji Wakimoto": {
    summary:
      "Zenji Wakimoto (1924–1996) was a distinguished Nippon Kogaku optical designer whose work ranged from S- and F-mount NIKKOR lenses to precision Micro-Nikkor objectives. His symmetrical wide-angle configuration for the Nikkor-O 2.1 cm f/4 established a durable design principle that Nikon continued to use for decades. He received Japan’s Medal with Purple Ribbon for developing Ultramicro-Nikkor lenses used in integrated-circuit fabrication and later served Nikon as a director and consultant.",
    sources: [
      {
        label: "Nikon — NIKKOR: The Thousand and One Nights No. 1",
        url: "https://imaging.nikon.com/imaging/information/story/0001/",
      },
    ],
  },
} as const satisfies Record<string, AuthorBiography>;

/** Return a curated profile when this author has one. */
export function getAuthorBiography(name: string): AuthorBiography | undefined {
  const biographies: Readonly<Record<string, AuthorBiography>> = AUTHOR_BIOGRAPHIES;
  return biographies[name];
}
