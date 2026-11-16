import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MAMIYA MACRO 120mm f/4 (JP 2003-185916 A Design)       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2003-185916 A, Example 1, Table 1 and Fig. 1       ║
 * ║  (Mamiya-OP / Hideyuki Suga). Positive G1, aperture stop, positive  ║
 * ║  G2 split into G2f (cemented doublet) and G2b (singlet), and a      ║
 * ║  negative G3 fixed to the image plane.                              ║
 * ║  9 elements / 8 air-separated groups; all spherical surfaces.       ║
 * ║  Patent values: f = 118.86 mm, fb = 66.11 mm, Fn = 3.99, 2ω = 32°.  ║
 * ║                                                                    ║
 * ║  NOTE ON IDENTITY:                                                  ║
 * ║    Entered as a patent design, not as a production lens. By         ║
 * ║    specification (9 elements / 8 groups, 32°, 1:1 at 37 cm) the     ║
 * ║    example is closest to the Mamiya AF 120mm f/4 Macro. No maker    ║
 * ║    construction diagram was found to confirm it, so no mount is     ║
 * ║    set. No scale factor applied (patent values are in mm).          ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS:                                                     ║
 * ║    G1 and G2 extend toward the object; D10 (G2f–G2b) closes from    ║
 * ║    0.70 to 0.20 mm at 1:2 and reopens to 0.70 mm at 1:1. The        ║
 * ║    patent prints D12 = 33.57 / 64.07 mm and working distances       ║
 * ║    (object to first surface) 297 / 178 mm at 1:2 / 1:1. The model   ║
 * ║    uses D12 = 33.674 / 64.363 mm and 296.877 / 177.958 mm so that   ║
 * ║    each state is in paraxial focus on the fixed image plane at      ║
 * ║    exactly −0.5× / −1×. Real-ray best focus then lies about         ║
 * ║    0.2–0.5 mm ahead of that plane. Positions between the three      ║
 * ║    patent states are interpolated (D10 linear, D12 solved for       ║
 * ║    focus); they are not a measured cam.                             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent does not publish clear apertures. Rims are read from  ║
 * ║    Fig. 1(a) (0.27 mm per pixel) where that costs little corner     ║
 * ║    light: L3, the L4/L5 doublet and L8 follow the figure; L2 and    ║
 * ║    L7 are partway toward it; L1, L6 and L9 keep larger estimates    ║
 * ║    because the drawn rims would cut the corner beam or the traced   ║
 * ║    field. The stop radius is derived from the design f-number,      ║
 * ║    F/3.99.                                                          ║
 * ║                                                                    ║
 * ║  NOTE ON GLASS:                                                     ║
 * ║    nd / νd are the patent's values (d-line). Catalog names are      ║
 * ║    exact-coordinate OHARA matches; the patent names no supplier.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  layout: {
    yScFill: 0.42,
  },
  schema: 2,
  key: "mamiya-macro-120mm-f4-jp2003185916",
  maker: "Mamiya",
  name: "MAMIYA MACRO 120mm f/4 (JP 2003-185916 A Design)",
  subtitle:
    "JP 2003-185916 A, Example 1 — floating-focus 1:1 macro for the 645 format; closest in specification to the Mamiya AF 120mm f/4 Macro",
  catalog: {
    imageFormat: "645",
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: {
      design: 118.86,
    },
    fNumber: {
      design: 3.99,
    },
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "DESIGN f = 118.86 mm",
      "DESIGN F/3.99",
      "ALL SPHERICAL",
      "1:1 MACRO WITH FLOATING FOCUS",
    ],
  },
  source: {
    patentNumber: "JP 2003-185916 A",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 2003,
    authors: ["Hideyuki Suga"],
    assignees: ["Mamiya-OP Co., Ltd."],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 90.8,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Front collector of G1; a low-dispersion crown meniscus, convex to the object.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 127.8,
      glass: "S-FPL51 (OHARA)",
      apd: false,
      role: "Second positive meniscus of G1, in a fluorophosphate crown that limits the front group's axial colour.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.57501,
      vd: 41.5,
      focalLengthMm: -53.9,
      glass: "S-TIL27 (OHARA)",
      apd: false,
      role: "Flint negative meniscus closing G1; its deep rear surface faces the stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.54814,
      vd: 45.8,
      focalLengthMm: -47.0,
      glass: "S-TIL1 (OHARA)",
      apd: false,
      role: "Negative front member of the G2f cemented doublet, concave toward the stop.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 53.2,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Positive rear member of the G2f cemented doublet; the pair has almost no net power (f ≈ −3500 mm).",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 96.3,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "G2b, the floating singlet that carries most of G2's positive power; its spacing from G2f (D10) changes during focusing.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: 111.1,
      glass: "S-TIH4 (OHARA)",
      apd: false,
      role: "Dense-flint positive meniscus leading the fixed G3, concave to the object.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.762,
      vd: 40.1,
      focalLengthMm: -40.5,
      glass: "S-LAM55 (OHARA)",
      apd: false,
      role: "Strong negative element that gives the fixed G3 its net negative power.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.651,
      vd: 56.2,
      focalLengthMm: 117.7,
      glass: "Unmatched (patent nd=1.65100, νd=56.2; supplier unconfirmed)",
      apd: false,
      role: "Rear positive element of the fixed G3, facing the image.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 50.571,
      d: 4.1,
      sd: 19,
      medium: 1,
    },
    {
      label: "2",
      R: 497.77,
      d: 0.2,
      sd: 19,
    },
    {
      label: "3",
      R: 37.744,
      d: 3.8,
      sd: 17,
      medium: 2,
    },
    {
      label: "4",
      R: 89.885,
      d: 3,
      sd: 17,
    },
    {
      label: "5",
      R: 680.66,
      d: 3.8,
      sd: 14.7,
      medium: 3,
    },
    {
      label: "6",
      R: 29.59,
      d: 5.7,
      sd: 14.7,
    },
    {
      label: "STO",
      R: "flat",
      d: 5.7,
    },
    {
      label: "8",
      R: -28.852,
      d: 1.5,
      sd: 15.5,
      medium: 4,
    },
    {
      label: "9",
      R: 244.36,
      d: 8.5,
      sd: 15.5,
      medium: 5,
    },
    {
      label: "10",
      R: -37.462,
      sd: 15.5,
    },
    {
      label: "11",
      R: 175.35,
      d: 4.5,
      sd: 17,
      medium: 6,
    },
    {
      label: "12",
      R: -89.131,
      sd: 17,
    },
    {
      label: "13",
      R: -270.63,
      d: 4,
      sd: 17.5,
      medium: 7,
    },
    {
      label: "14",
      R: -64.459,
      d: 7.68,
      sd: 17.5,
    },
    {
      label: "15",
      R: -49.995,
      d: 1.8,
      sd: 17.6,
      medium: 8,
    },
    {
      label: "16",
      R: 81.958,
      d: 5.69,
      sd: 17.6,
    },
    {
      label: "17",
      R: 82.268,
      d: 4.5,
      sd: 24,
      medium: 9,
    },
    {
      label: "18",
      R: -1093.7,
      d: 66.11,
      sd: 24,
    },
  ],
  focus: {
    closeFocusM: 0.37360027737281226,
    keyframes: [
      0, 0.012653607779098556, 0.02530721555819711, 0.05061443111639422,
      0.07592164667459134, 0.10122886223278844, 0.12653607779098555,
      0.15184329334918267, 0.17715050890737977, 0.2024577244655769,
      0.227764940023774, 0.24041854780287256, 0.2530721555819711,
      0.2657257633610697, 0.2783793711401682, 0.29103297891926677,
      0.30368658669836535, 0.31634019447746387, 0.32899380225656244,
      0.341647410035661, 0.35430101781475953, 0.3669546255938581,
      0.3796082333729567, 0.3922618411520552, 0.4049154489311538,
      0.41756905671025235, 0.43022266448935087, 0.44287627226844944,
      0.455529880047548, 0.46818348782664654, 0.4808370956057451,
      0.4934907033848437, 0.5061443111639422, 0.5187979189430407,
      0.5314515267221394, 0.5441051345012379, 0.5567587422803364,
      0.569412350059435, 0.5820659578385335, 0.5947195656176321,
      0.6073731733967307, 0.6200267811758292, 0.6326803889549277,
      0.6453339967340264, 0.6579876045131249, 0.6706412122922234,
      0.6769680161817727, 0.683294820071322, 0.6896216239608712,
      0.6959484278504205, 0.7022752317399699, 0.7086020356295191,
      0.7149288395190684, 0.7212556434086177, 0.7275824472981669,
      0.7339092511877162, 0.7402360550772655, 0.7465628589668147,
      0.752889662856364, 0.7592164667459134, 0.7655432706354626,
      0.7718700745250119, 0.7781968784145612, 0.7845236823041104,
      0.7908504861936597, 0.797177290083209, 0.8035040939727582,
      0.8098308978623076, 0.8157736823041104, 0.8217164667459134,
      0.8276592511877162, 0.8336020356295191, 0.839544820071322,
      0.8454876045131249, 0.8514303889549277, 0.8573731733967307,
      0.8633159578385335, 0.8692587422803364, 0.8752015267221394,
      0.8811443111639422, 0.8870870956057451, 0.893029880047548,
      0.8960012722684494, 0.8989726644893509, 0.9019440567102524,
      0.9049154489311537, 0.9078868411520552, 0.9108582333729567,
      0.913829625593858, 0.9168010178147595, 0.919772410035661,
      0.9227438022565624, 0.9257151944774639, 0.9286865866983653,
      0.9316579789192667, 0.9346293711401682, 0.9376007633610697,
      0.940572155581971, 0.9435435478028725, 0.946514940023774,
      0.9494863322446754, 0.9524577244655769, 0.9554291166864783,
      0.9584005089073797, 0.9613719011282812, 0.9643432933491827,
      0.967314685570084, 0.9702860777909855, 0.973257470011887,
      0.9762288622327884, 0.9792002544536899, 0.9806859505641405,
      0.9821716466745913, 0.983657342785042, 0.9851430388954927,
      0.9866287350059435, 0.9881144311163942, 0.9896001272268449,
      0.9910858233372957, 0.9925715194477464, 0.994057215558197,
      0.9955429116686478, 0.9970286077790985, 0.9985143038895492, 1,
    ],
    published: [67, 124],
    description:
      "Floating focus to 1:1. G1 and G2 extend toward the object while G3 stays fixed 66.11 mm from the image plane; the G2f–G2b gap D10 closes from 0.70 to 0.20 mm at 1:2 and reopens to 0.70 mm at 1:1, as the patent prints. The patent prints D12 = 33.57 / 64.07 mm and working distances 297 / 178 mm at 1:2 / 1:1; the model uses D12 = 33.674 / 64.363 mm so that each state is in paraxial focus on the fixed image plane, and real-ray best focus then lies about 0.2–0.5 mm ahead of that plane. Positions between infinity, 1:2 and 1:1 are interpolated, not a measured cam.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 67,
        objectDistanceMm: 296.87689256836,
        distanceReference: "first-surface",
        source:
          "JP 2003-185916 A, Example 1, Table 1; paragraph 0016 defines the working distance as object to first surface. The patent prints working distance 297 mm, magnification −0.5, D10 0.20 mm and D12 33.57 mm. The model keeps D10 and the 66.11 mm back focus and sets D12 = 33.674 mm and working distance 296.877 mm, which gives paraxial focus on the image plane at exactly −0.5×; the working distance still rounds to the printed 297 mm.",
      },
      {
        zoomStation: 0,
        keyframe: 124,
        objectDistanceMm: 177.95755210366912,
        distanceReference: "first-surface",
        source:
          "JP 2003-185916 A, Example 1, Table 1; paragraph 0016 defines the working distance as object to first surface. The patent prints working distance 178 mm, magnification −1, D10 0.70 mm and D12 64.07 mm. The model keeps D10 and the 66.11 mm back focus and sets D12 = 64.363 mm and working distance 177.958 mm, which gives paraxial focus on the image plane at exactly −1×; the working distance still rounds to the printed 178 mm.",
      },
    ],
  },
  aperture: {
    nominalFNumber: 3.99,
    fStops: [3.99, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2f", fromSurface: "8", toSurface: "10" },
    { text: "G2b (+)", fromSurface: "11", toSurface: "12" },
    { text: "G3 (−)", fromSurface: "13", toSurface: "18" },
  ],
  doublets: [{ text: "C1", fromSurface: "8", toSurface: "10" }],
  gaps: {
    "10": {
      label: "D10",
      values: [
        [
          0.7, 0.6921875, 0.684375, 0.66875, 0.653125, 0.6375, 0.621875,
          0.60625, 0.590625, 0.575, 0.559375, 0.5515625, 0.54375, 0.5359375,
          0.528125, 0.5203125, 0.5125, 0.5046875, 0.49687499999999996,
          0.48906249999999996, 0.48124999999999996, 0.47343749999999996,
          0.46562499999999996, 0.45781249999999996, 0.44999999999999996,
          0.44218749999999996, 0.43437499999999996, 0.42656249999999996,
          0.41874999999999996, 0.41093749999999996, 0.40312499999999996,
          0.39531249999999996, 0.38749999999999996, 0.3796875,
          0.37187499999999996, 0.36406249999999996, 0.35625,
          0.34843749999999996, 0.34062499999999996, 0.3328125,
          0.32499999999999996, 0.31718749999999996, 0.309375,
          0.30156249999999996, 0.29374999999999996, 0.28593749999999996,
          0.28203124999999996, 0.27812499999999996, 0.27421874999999996,
          0.27031249999999996, 0.26640624999999996, 0.26249999999999996,
          0.25859374999999996, 0.25468749999999996, 0.25078124999999996,
          0.24687499999999996, 0.24296874999999996, 0.23906249999999996,
          0.23515624999999996, 0.23124999999999996, 0.22734374999999996,
          0.22343749999999996, 0.21953124999999996, 0.21562499999999996,
          0.21171874999999996, 0.20781249999999996, 0.20390624999999996,
          0.19999999999999996, 0.2156249999999999, 0.2312500000000001, 0.246875,
          0.2624999999999999, 0.27812500000000007, 0.29375, 0.3093749999999999,
          0.32500000000000007, 0.34062499999999996, 0.35624999999999984,
          0.37187500000000007, 0.38749999999999996, 0.40312499999999984,
          0.41875000000000007, 0.42656249999999984, 0.43437499999999996,
          0.44218750000000007, 0.44999999999999984, 0.45781249999999996,
          0.46562500000000007, 0.47343749999999984, 0.48124999999999996,
          0.48906250000000007, 0.49687499999999984, 0.5046875,
          0.5125000000000001, 0.5203124999999998, 0.528125, 0.5359375000000001,
          0.5437499999999998, 0.5515625, 0.559375, 0.5671874999999998, 0.575,
          0.5828125, 0.5906249999999998, 0.5984375, 0.60625, 0.6140624999999998,
          0.621875, 0.6296875, 0.6374999999999998, 0.6453125,
          0.6492187499999998, 0.653125, 0.65703125, 0.6609374999999998,
          0.66484375, 0.66875, 0.6726562499999998, 0.6765625, 0.68046875,
          0.6843749999999998, 0.68828125, 0.6921875, 0.6960937499999998, 0.7,
        ],
      ],
    },
    "12": {
      label: "D12",
      values: [
        [
          3.0, 3.247031828341793, 3.4995877172286582, 4.0148934921513115,
          4.544356318721759, 5.08869915823436, 5.648701072106266,
          6.225203199845433, 6.819115560193395, 7.431424816224144,
          8.063203174264965, 8.38675421008915, 8.715618622708735,
          9.049959316528916, 9.389946762134233, 9.735759475383283,
          10.087584535341831, 10.445618144922665, 10.81006623856076,
          11.181145141776835, 11.55908228807994, 11.944116999344587,
          12.336501336583067, 12.736501028936202, 13.14439648974674,
          13.560483929782063, 13.985076579068302, 14.418506030417408,
          14.861123719620231, 15.313302559488214, 15.775438747521447,
          16.247953770034353, 16.731296629181017, 17.225946323602752,
          17.73241461851896, 18.251249147176363, 18.783036892891335,
          19.32840810974494, 19.88804075068742, 20.46266548483349,
          21.05307140167658, 21.660112519578405, 22.28471524019386,
          22.927886920770145, 23.590725774225383, 24.2744323548574,
          24.624517450120834, 24.980322948519767, 25.342034041679806,
          25.709845264300405, 26.083961146629836, 26.464596925843423,
          26.851979322905116, 27.24634739237489, 27.647953453645556,
          28.05706411327727, 28.473961389480472, 28.898943951409294,
          29.332328487815406, 29.77445122183568, 30.225669591306254,
          30.686364117098964, 31.15694048566521, 31.637831876375948,
          32.12950156952452, 32.632445877212724, 33.14719744702871,
          33.67432899776764, 34.18420859607183, 34.70631256939938,
          35.24124679156008, 35.7896652512496, 36.35227544350359,
          36.929844554934554, 37.523206589588966, 38.133270615369945,
          38.76103035298716, 39.40757538312492, 40.07410431681163,
          40.76194036412655, 41.472549854802324, 42.20756442145278,
          42.5847851683782, 42.96880776706928, 43.35989552809149,
          43.75832822490425, 44.164403545733265, 44.5784387130592,
          45.000772294904486, 45.43176623632562, 45.87180814461595,
          46.321313867910035, 46.78073041441718, 47.25053926874674,
          47.73126017317405, 48.223455455806885, 48.72773500521987,
          49.244762013243005, 49.77525963556877, 50.32001875551106,
          50.87990708208858, 51.455879873029076, 52.04899265105341,
          52.66041638457655, 53.29145574128652, 53.94357120870145,
          54.61840612996671, 55.317820055969776, 56.04393031208657,
          56.799164390360374, 57.58632681773241, 57.992881454639225,
          58.4086856995967, 58.83423912917198, 59.27008649736756,
          59.71682362105059, 60.17510428610395, 60.64564839901926,
          61.12925166952119, 61.626797190515845, 62.13926938987786,
          62.667770975429534, 63.21354369637046, 63.77799402596689,
          64.36272526914324,
        ],
      ],
    },
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
