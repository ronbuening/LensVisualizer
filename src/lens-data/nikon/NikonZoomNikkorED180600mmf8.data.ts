import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Private scoped f11 trial. All source endpoints and corrected geometry literal; interior motion, stop, rims and common image plane are disclosed estimates. */
const LENS_DATA = {
  "schema": 2,
  "key": "nikon-pre-ai-zoom-nikkor-180-600mm-f8-ed",
  "maker": "Nikon",
  "visible": false,
  "name": "NIKON ZOOM-NIKKOR ED 180-600mm f/8 (1976 Pre-AI)",
  "subtitle": "Corrected US3743384A ExampleII; production-correlated, estimated interior cam and infinity plane",
  "source": {
    "patentNumber": "US 3743384 A",
    "patentYear": 1973,
    "example": {
      "label": "Example II",
      "id": "2"
    },
    "authors": [
      "Soichi Nakamura"
    ],
    "assignees": [
      "Nippon Kogaku K.K."
    ],
    "sdSource": "heuristic"
  },
  "catalog": {
    "lensMounts": [
      "nikon-f"
    ],
    "elementCount": 18,
    "groupCount": 11,
    "focalLengthMm": {
      "marketing": [
        180,
        600
      ],
      "design": [
        180.105372493415,
        594.2803111704096
      ]
    },
    "fNumber": {
      "marketing": 8,
      "design": 8
    },
    "specs": [
      "1976preAi18E/11G, exact corrected ExampleII; not live360\u20131200ExampleI or modernZ180\u2013600.",
      "Both published gap triplets retained exactly; all interiors estimated, not a factorycam.",
      "Source table has no stop or terminal image gap: midpoint of fixedD24 and one mean endpoint Gaussian BFD explicitly estimated.",
      "OEM281mmstack/140mmbackfocus rounded context retained separately; literal powered stack281.018mm.",
      "Private f11-control\u00b11deg helium-d static infinity only; source nominalf8/fullfield/finite/color not qualified.",
      "BrowserQA deferred integration,notpassed."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element 1",
      "type": "Lens",
      "nd": 1.51728,
      "vd": 69.6,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element 2",
      "type": "Lens",
      "nd": 1.48606,
      "vd": 81.5,
      "indexReference": "d",
      "cemented": "T1"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element 3",
      "type": "Lens",
      "nd": 1.7495,
      "vd": 35.0,
      "indexReference": "d",
      "cemented": "T1"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element 4",
      "type": "Lens",
      "nd": 1.59507,
      "vd": 35.6,
      "indexReference": "d",
      "cemented": "T1"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element 5",
      "type": "Lens",
      "nd": 1.7847,
      "vd": 26.1,
      "indexReference": "d",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Element 6",
      "type": "Lens",
      "nd": 1.62041,
      "vd": 60.3,
      "indexReference": "d",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Element 7",
      "type": "Lens",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d"
    },
    {
      "id": 8,
      "name": "E8",
      "label": "Element 8",
      "type": "Lens",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d"
    },
    {
      "id": 9,
      "name": "E9",
      "label": "Element 9",
      "type": "Lens",
      "nd": 1.62041,
      "vd": 60.3,
      "indexReference": "d",
      "cemented": "D3"
    },
    {
      "id": 10,
      "name": "E10",
      "label": "Element 10",
      "type": "Lens",
      "nd": 1.59551,
      "vd": 39.2,
      "indexReference": "d",
      "cemented": "D3"
    },
    {
      "id": 11,
      "name": "E11",
      "label": "Element 11",
      "type": "Lens",
      "nd": 1.51728,
      "vd": 69.6,
      "indexReference": "d",
      "cemented": "D4"
    },
    {
      "id": 12,
      "name": "E12",
      "label": "Element 12",
      "type": "Lens",
      "nd": 1.7552,
      "vd": 27.5,
      "indexReference": "d",
      "cemented": "D4"
    },
    {
      "id": 13,
      "name": "E13",
      "label": "Element 13",
      "type": "Lens",
      "nd": 1.51728,
      "vd": 69.6,
      "indexReference": "d"
    },
    {
      "id": 14,
      "name": "E14",
      "label": "Element 14",
      "type": "Lens",
      "nd": 1.48606,
      "vd": 81.5,
      "indexReference": "d",
      "cemented": "D5"
    },
    {
      "id": 15,
      "name": "E15",
      "label": "Element 15",
      "type": "Lens",
      "nd": 1.717,
      "vd": 47.9,
      "indexReference": "d",
      "cemented": "D5"
    },
    {
      "id": 16,
      "name": "E16",
      "label": "Element 16",
      "type": "Lens",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d"
    },
    {
      "id": 17,
      "name": "E17",
      "label": "Element 17",
      "type": "Lens",
      "nd": 1.76684,
      "vd": 46.6,
      "indexReference": "d",
      "cemented": "D6"
    },
    {
      "id": 18,
      "name": "E18",
      "label": "Element 18",
      "type": "Lens",
      "nd": 1.59507,
      "vd": 35.6,
      "indexReference": "d",
      "cemented": "D6"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 264.9,
      "sd": 40.8,
      "d": 7.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": -370.0,
      "sd": 40.7,
      "d": 0.2
    },
    {
      "label": "3",
      "R": 174.9,
      "sd": 39.6,
      "d": 8.2,
      "medium": 2
    },
    {
      "label": "4",
      "R": -353.1,
      "sd": 39.3,
      "d": 2.0,
      "medium": 3
    },
    {
      "label": "5",
      "R": 180.8,
      "sd": 38.2,
      "d": 5.0,
      "medium": 4
    },
    {
      "label": "6",
      "R": 1195.6,
      "sd": 38.0
    },
    {
      "label": "7",
      "R": 5000.0,
      "sd": 16.0,
      "d": 4.8,
      "medium": 5
    },
    {
      "label": "8",
      "R": -70.3,
      "sd": 15.7,
      "d": 1.5,
      "medium": 6
    },
    {
      "label": "9",
      "R": 104.02,
      "sd": 15.1,
      "d": 4.0
    },
    {
      "label": "10",
      "R": -96.6,
      "sd": 14.8,
      "d": 2.0,
      "medium": 7
    },
    {
      "label": "11",
      "R": 220.9,
      "sd": 14.7,
      "d": 4.0
    },
    {
      "label": "12",
      "R": -83.0,
      "sd": 14.6,
      "d": 1.5,
      "medium": 8
    },
    {
      "label": "13",
      "R": 287.5,
      "sd": 14.8
    },
    {
      "label": "14",
      "R": -1850.0,
      "sd": 15.1,
      "d": 4.0,
      "medium": 9
    },
    {
      "label": "15",
      "R": -77.683,
      "sd": 15.3,
      "d": 1.5,
      "medium": 10
    },
    {
      "label": "16",
      "R": -122.917,
      "sd": 15.4,
      "d": 0.1
    },
    {
      "label": "17",
      "R": 251.3,
      "sd": 15.5,
      "d": 5.3,
      "medium": 11
    },
    {
      "label": "18",
      "R": -85.15,
      "sd": 15.5,
      "d": 1.5,
      "medium": 12
    },
    {
      "label": "19",
      "R": -157.5,
      "sd": 15.5
    },
    {
      "label": "20",
      "R": 203.9,
      "sd": 15.3,
      "d": 3.6,
      "medium": 13
    },
    {
      "label": "21",
      "R": -309.7,
      "sd": 15.1,
      "d": 3.2
    },
    {
      "label": "22",
      "R": 47.9,
      "sd": 14.6,
      "d": 6.2,
      "medium": 14
    },
    {
      "label": "23",
      "R": -459.0,
      "sd": 13.9,
      "d": 2.3,
      "medium": 15
    },
    {
      "label": "24",
      "R": 70.7,
      "sd": 13.4,
      "d": 35.75
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 35.75
    },
    {
      "label": "25",
      "R": 271.0,
      "sd": 9.3,
      "d": 2.7,
      "medium": 16
    },
    {
      "label": "26",
      "R": -165.7,
      "sd": 9.3,
      "d": 7.8
    },
    {
      "label": "27",
      "R": -75.9,
      "sd": 8.9,
      "d": 1.4,
      "medium": 17
    },
    {
      "label": "28",
      "R": 51.5,
      "sd": 8.9,
      "d": 4.8,
      "medium": 18
    },
    {
      "label": "29",
      "R": -97.9,
      "sd": 9.1,
      "d": 140.27427221380128
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 180.105372493415,
        "nominalFNumber": 11,
        "label": "Wide source ExampleII",
        "published": true
      },
      {
        "focalLengthMm": 180.59689707785648,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 181.091112655825,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 181.58804138943196,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 182.0877056857091,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 182.59012819766176,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 183.09533183028793,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 183.6033397427828,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 184.11417535160524,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 184.6278623347357,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 185.14442463626762,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 185.66388646810537,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 186.18627231455642,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 186.71160693752037,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 187.23991537836963,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 187.77122296246867,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 188.30555530563208,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 188.8429383133031,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 189.38339818932482,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 189.9269614388563,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 190.47365487117932,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 191.02350560626002,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 191.57654107733916,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 192.13278903751632,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 192.69227756151713,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 193.25503505456052,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 193.82109025298257,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 194.39047223135393,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 194.96321040761387,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 195.53933454716235,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 196.11887476795408,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 196.70186154696322,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 197.28832572472118,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 197.8782985101047,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 198.4718114872078,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 199.06889662050995,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 199.6695862595892,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 200.27391314619868,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 200.88191042070815,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 201.49361162659642,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 202.1090507168736,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 202.72826206187088,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 203.3512804535359,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 203.97814111373964,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 204.6088796993446,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 205.2435323113091,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 205.88213549849172,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 206.52472626695558,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 207.17134208658587,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 207.82202089779116,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 208.47680111897284,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 209.13572165539546,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 209.79882190568617,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 210.4661417695358,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 211.13772165642462,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 211.81360249250872,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 212.49382573185704,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 213.17843336127294,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 213.8674679109136,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 214.56097246351413,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 215.25899066185363,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 215.9615667192683,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 216.6687454278858,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 217.3805721694688,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 218.09709292361958,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 218.81835427922454,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 219.5444034421465,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 220.27528824916953,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 221.0110571754356,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 221.7517593452096,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 222.49744454636735,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 223.24816323613535,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 224.00396655666208,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 224.76490634531498,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 225.5310351472335,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 226.30240622460798,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 227.0790735736025,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 227.86109193178078,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 228.64851679604834,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 229.44140443132198,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 230.239811888752,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 231.04379701297515,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 231.85341846323564,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 232.6687357219915,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 233.48980911274654,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 234.31669981194935,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 235.14946986952202,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 235.98818221846744,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 236.83290069278019,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 237.6836900461635,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 238.54061596484385,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 239.40374508616443,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 240.27314501623292,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 241.14888434835044,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 242.0310326775836,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 242.9196606229318,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 243.81483984439174,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 244.71664306258904,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 245.62514407801902,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 246.54041779199372,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 247.46254022670402,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 248.39158854700844,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 249.32764108034354,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 250.2707773398972,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 251.22107804807155,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 252.17862515654446,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 253.14350187338954,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 254.11579268461807,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 255.09558338082735,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 256.08296107962434,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 257.0780142536376,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 258.0808327570588,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 259.09150785168,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 260.1101322364656,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 261.1368000709945,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 262.1716070117705,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 263.21465023550655,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 264.26602847249455,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 265.3258420384142,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 266.3941928641722,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 267.47118453033556,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 268.55692229961306,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 269.65151315009894,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 270.7550658145528,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 271.86769081192375,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 272.98950048501587,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 274.12060904189855,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 275.2611325886148,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 276.41118917498966,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 277.57089883101685,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 278.74038361123246,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 279.9197676367412,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 281.1091771381387,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 282.3087405010785,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 283.5185883140841,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 284.73885341360415,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 285.9696709350059,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 287.211178357674,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 288.4635155649284,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 289.72682488576856,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 291.00125115880013,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 292.2869417801613,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 293.5840467653314,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 294.89271880430914,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 296.2131133220617,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 297.54538854187496,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 298.88970554771595,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 300.2462283469498,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 301.61512394050175,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 302.9965623901951,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 304.390716886521,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 305.7977638256902,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 307.21788288063993,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 308.6512570774527,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 310.0980728785155,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 311.5585202552051,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 313.0327927787248,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 314.52108770295763,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 316.02360605084385,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 317.5405527068701,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 319.07213650851565,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 320.618570346043,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 322.1800712546725,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 323.7568605226561,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 325.3491637900458,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 326.95721116173144,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 328.58123731503,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 330.2214816133566,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 331.8781882266666,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 333.55160625012775,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 335.2419898306665,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 336.9495982943248,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 338.67469627923964,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 340.417553872618,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 342.1784467518201,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 343.9576563308235,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 345.75546990565033,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 347.57218081562854,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 349.4080885968094,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 351.2634991522407,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 353.13872491772423,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 355.034085038012,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 356.9499055482034,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 358.88651956307416,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 360.8442674653036,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 362.8234971090934,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 364.82456402563656,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 366.8478316329649,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 368.89367145896153,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 370.962463369747,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 373.0545958017764,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 375.17046600595785,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 377.31048029998277,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 379.4750543277734,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 381.6646133286152,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 383.8795924172202,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 386.12043686900233,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 388.3876024194725,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 390.6815555776892,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 393.00277393831067,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 395.3517465196464,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 397.72897410408183,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 400.13496959368706,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 402.57025838313365,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 405.035378735306,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 407.5308821857567,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 410.05733394685655,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 412.61531334031463,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 415.20541423701343,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 417.8282455159447,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 420.4844315446171,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 423.17461267228214,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 425.89944574492665,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 428.6596046406524,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 431.4557808237494,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 434.28868392427444,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 437.1590423358079,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 440.0676038451071,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 443.015136273954,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 446.00242816052986,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 449.03028946324116,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 452.0995522878089,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 455.2110716541791,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 458.3657262883704,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 461.56441945249753,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 464.8080798035824,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 468.0976622935131,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 471.4341491095972,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 474.8185506469708,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 478.25190653271085,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 481.73528669022016,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 485.26979244767927,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 488.8565577034733,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 492.49675013420654,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 496.1915724677559,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 499.9422638045371,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 503.750101001216,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 507.6164001264678,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 511.5425179688408,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 515.529853632885,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 519.5798501962005,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 523.6939964503706,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 527.8738287321605,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 532.12093282567,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 536.4369459794351,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 540.8235590043005,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 545.2825184806732,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 549.8156290836355,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 554.4247560141697,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 559.1118275573335,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 563.878837773725,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 568.7278493300074,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 573.660996468504,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 578.6804881464002,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 583.7886113305605,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 588.987734473808,
        "nominalFNumber": 11,
        "label": "Estimated continued infinity position; not factory cam",
        "published": false
      },
      {
        "focalLengthMm": 594.2803111704096,
        "nominalFNumber": 11,
        "label": "Tele source ExampleII",
        "published": true
      }
    ]
  },
  "gaps": {
    "6": {
      "label": "Source gap6, estimated interiors",
      "values": [
        [
          2.474,
          2.474
        ],
        [
          2.92648828125,
          2.92648828125
        ],
        [
          3.3789765625,
          3.3789765625
        ],
        [
          3.83146484375,
          3.83146484375
        ],
        [
          4.283953125,
          4.283953125
        ],
        [
          4.73644140625,
          4.73644140625
        ],
        [
          5.1889296875,
          5.1889296875
        ],
        [
          5.64141796875,
          5.64141796875
        ],
        [
          6.09390625,
          6.09390625
        ],
        [
          6.546394531250001,
          6.546394531250001
        ],
        [
          6.998882812500001,
          6.998882812500001
        ],
        [
          7.451371093750001,
          7.451371093750001
        ],
        [
          7.903859375000001,
          7.903859375000001
        ],
        [
          8.356347656250001,
          8.356347656250001
        ],
        [
          8.8088359375,
          8.8088359375
        ],
        [
          9.261324218750001,
          9.261324218750001
        ],
        [
          9.7138125,
          9.7138125
        ],
        [
          10.166300781250001,
          10.166300781250001
        ],
        [
          10.618789062500001,
          10.618789062500001
        ],
        [
          11.071277343750001,
          11.071277343750001
        ],
        [
          11.523765625000001,
          11.523765625000001
        ],
        [
          11.976253906250001,
          11.976253906250001
        ],
        [
          12.428742187500001,
          12.428742187500001
        ],
        [
          12.881230468750001,
          12.881230468750001
        ],
        [
          13.333718750000001,
          13.333718750000001
        ],
        [
          13.786207031250001,
          13.786207031250001
        ],
        [
          14.2386953125,
          14.2386953125
        ],
        [
          14.69118359375,
          14.69118359375
        ],
        [
          15.143671875,
          15.143671875
        ],
        [
          15.59616015625,
          15.59616015625
        ],
        [
          16.0486484375,
          16.0486484375
        ],
        [
          16.50113671875,
          16.50113671875
        ],
        [
          16.953625000000002,
          16.953625000000002
        ],
        [
          17.40611328125,
          17.40611328125
        ],
        [
          17.8586015625,
          17.8586015625
        ],
        [
          18.31108984375,
          18.31108984375
        ],
        [
          18.763578125000002,
          18.763578125000002
        ],
        [
          19.21606640625,
          19.21606640625
        ],
        [
          19.668554687500002,
          19.668554687500002
        ],
        [
          20.12104296875,
          20.12104296875
        ],
        [
          20.573531250000002,
          20.573531250000002
        ],
        [
          21.02601953125,
          21.02601953125
        ],
        [
          21.478507812500002,
          21.478507812500002
        ],
        [
          21.93099609375,
          21.93099609375
        ],
        [
          22.383484375000002,
          22.383484375000002
        ],
        [
          22.83597265625,
          22.83597265625
        ],
        [
          23.288460937500002,
          23.288460937500002
        ],
        [
          23.74094921875,
          23.74094921875
        ],
        [
          24.1934375,
          24.1934375
        ],
        [
          24.64592578125,
          24.64592578125
        ],
        [
          25.0984140625,
          25.0984140625
        ],
        [
          25.55090234375,
          25.55090234375
        ],
        [
          26.003390625,
          26.003390625
        ],
        [
          26.45587890625,
          26.45587890625
        ],
        [
          26.9083671875,
          26.9083671875
        ],
        [
          27.36085546875,
          27.36085546875
        ],
        [
          27.81334375,
          27.81334375
        ],
        [
          28.26583203125,
          28.26583203125
        ],
        [
          28.7183203125,
          28.7183203125
        ],
        [
          29.17080859375,
          29.17080859375
        ],
        [
          29.623296875,
          29.623296875
        ],
        [
          30.07578515625,
          30.07578515625
        ],
        [
          30.5282734375,
          30.5282734375
        ],
        [
          30.98076171875,
          30.98076171875
        ],
        [
          31.43325,
          31.43325
        ],
        [
          31.885738281250003,
          31.885738281250003
        ],
        [
          32.3382265625,
          32.3382265625
        ],
        [
          32.79071484375,
          32.79071484375
        ],
        [
          33.243203125,
          33.243203125
        ],
        [
          33.695691406250006,
          33.695691406250006
        ],
        [
          34.148179687500004,
          34.148179687500004
        ],
        [
          34.60066796875,
          34.60066796875
        ],
        [
          35.05315625,
          35.05315625
        ],
        [
          35.50564453125,
          35.50564453125
        ],
        [
          35.9581328125,
          35.9581328125
        ],
        [
          36.410621093749995,
          36.410621093749995
        ],
        [
          36.86310937500001,
          36.86310937500001
        ],
        [
          37.315597656250006,
          37.315597656250006
        ],
        [
          37.768085937500004,
          37.768085937500004
        ],
        [
          38.22057421875,
          38.22057421875
        ],
        [
          38.6730625,
          38.6730625
        ],
        [
          39.12555078125,
          39.12555078125
        ],
        [
          39.5780390625,
          39.5780390625
        ],
        [
          40.030527343749995,
          40.030527343749995
        ],
        [
          40.48301562500001,
          40.48301562500001
        ],
        [
          40.935503906250005,
          40.935503906250005
        ],
        [
          41.387992187500004,
          41.387992187500004
        ],
        [
          41.84048046875,
          41.84048046875
        ],
        [
          42.29296875,
          42.29296875
        ],
        [
          42.74545703125,
          42.74545703125
        ],
        [
          43.197945312499996,
          43.197945312499996
        ],
        [
          43.650433593749995,
          43.650433593749995
        ],
        [
          44.10292187500001,
          44.10292187500001
        ],
        [
          44.555410156250005,
          44.555410156250005
        ],
        [
          45.0078984375,
          45.0078984375
        ],
        [
          45.46038671875,
          45.46038671875
        ],
        [
          45.912875,
          45.912875
        ],
        [
          46.36536328125,
          46.36536328125
        ],
        [
          46.817851562499996,
          46.817851562499996
        ],
        [
          47.27033984375001,
          47.27033984375001
        ],
        [
          47.72282812500001,
          47.72282812500001
        ],
        [
          48.175316406250005,
          48.175316406250005
        ],
        [
          48.6278046875,
          48.6278046875
        ],
        [
          49.08029296875,
          49.08029296875
        ],
        [
          49.53278125,
          49.53278125
        ],
        [
          49.98526953125,
          49.98526953125
        ],
        [
          50.437757812499996,
          50.437757812499996
        ],
        [
          50.89024609375001,
          50.89024609375001
        ],
        [
          51.342734375000006,
          51.342734375000006
        ],
        [
          51.795222656250004,
          51.795222656250004
        ],
        [
          52.2477109375,
          52.2477109375
        ],
        [
          52.70019921875,
          52.70019921875
        ],
        [
          53.1526875,
          53.1526875
        ],
        [
          53.60517578125,
          53.60517578125
        ],
        [
          54.057664062499995,
          54.057664062499995
        ],
        [
          54.51015234375001,
          54.51015234375001
        ],
        [
          54.962640625000006,
          54.962640625000006
        ],
        [
          55.415128906250004,
          55.415128906250004
        ],
        [
          55.8676171875,
          55.8676171875
        ],
        [
          56.32010546875,
          56.32010546875
        ],
        [
          56.77259375,
          56.77259375
        ],
        [
          57.22508203125,
          57.22508203125
        ],
        [
          57.677570312499995,
          57.677570312499995
        ],
        [
          58.13005859375001,
          58.13005859375001
        ],
        [
          58.582546875000006,
          58.582546875000006
        ],
        [
          59.035035156250004,
          59.035035156250004
        ],
        [
          59.4875234375,
          59.4875234375
        ],
        [
          59.94001171875,
          59.94001171875
        ],
        [
          60.3925,
          60.3925
        ],
        [
          60.84498828125,
          60.84498828125
        ],
        [
          61.29747656250001,
          61.29747656250001
        ],
        [
          61.74996484375001,
          61.74996484375001
        ],
        [
          62.202453125000005,
          62.202453125000005
        ],
        [
          62.65494140625,
          62.65494140625
        ],
        [
          63.1074296875,
          63.1074296875
        ],
        [
          63.55991796875,
          63.55991796875
        ],
        [
          64.01240625,
          64.01240625
        ],
        [
          64.46489453125,
          64.46489453125
        ],
        [
          64.91738281250001,
          64.91738281250001
        ],
        [
          65.36987109375,
          65.36987109375
        ],
        [
          65.822359375,
          65.822359375
        ],
        [
          66.27484765625,
          66.27484765625
        ],
        [
          66.7273359375,
          66.7273359375
        ],
        [
          67.17982421875,
          67.17982421875
        ],
        [
          67.63231250000001,
          67.63231250000001
        ],
        [
          68.08480078125001,
          68.08480078125001
        ],
        [
          68.53728906250001,
          68.53728906250001
        ],
        [
          68.98977734375,
          68.98977734375
        ],
        [
          69.442265625,
          69.442265625
        ],
        [
          69.89475390625,
          69.89475390625
        ],
        [
          70.3472421875,
          70.3472421875
        ],
        [
          70.79973046875,
          70.79973046875
        ],
        [
          71.25221875000001,
          71.25221875000001
        ],
        [
          71.70470703125001,
          71.70470703125001
        ],
        [
          72.15719531250001,
          72.15719531250001
        ],
        [
          72.60968359375,
          72.60968359375
        ],
        [
          73.062171875,
          73.062171875
        ],
        [
          73.51466015625,
          73.51466015625
        ],
        [
          73.9671484375,
          73.9671484375
        ],
        [
          74.41963671875,
          74.41963671875
        ],
        [
          74.87212500000001,
          74.87212500000001
        ],
        [
          75.32461328125001,
          75.32461328125001
        ],
        [
          75.77710156250001,
          75.77710156250001
        ],
        [
          76.22958984375,
          76.22958984375
        ],
        [
          76.682078125,
          76.682078125
        ],
        [
          77.13456640625,
          77.13456640625
        ],
        [
          77.5870546875,
          77.5870546875
        ],
        [
          78.03954296875001,
          78.03954296875001
        ],
        [
          78.49203125000001,
          78.49203125000001
        ],
        [
          78.94451953125001,
          78.94451953125001
        ],
        [
          79.39700781250001,
          79.39700781250001
        ],
        [
          79.84949609375,
          79.84949609375
        ],
        [
          80.301984375,
          80.301984375
        ],
        [
          80.75447265625,
          80.75447265625
        ],
        [
          81.2069609375,
          81.2069609375
        ],
        [
          81.65944921875001,
          81.65944921875001
        ],
        [
          82.11193750000001,
          82.11193750000001
        ],
        [
          82.56442578125001,
          82.56442578125001
        ],
        [
          83.0169140625,
          83.0169140625
        ],
        [
          83.46940234375,
          83.46940234375
        ],
        [
          83.921890625,
          83.921890625
        ],
        [
          84.37437890625,
          84.37437890625
        ],
        [
          84.8268671875,
          84.8268671875
        ],
        [
          85.27935546875001,
          85.27935546875001
        ],
        [
          85.73184375000001,
          85.73184375000001
        ],
        [
          86.18433203125001,
          86.18433203125001
        ],
        [
          86.6368203125,
          86.6368203125
        ],
        [
          87.08930859375,
          87.08930859375
        ],
        [
          87.541796875,
          87.541796875
        ],
        [
          87.99428515625,
          87.99428515625
        ],
        [
          88.4467734375,
          88.4467734375
        ],
        [
          88.89926171875001,
          88.89926171875001
        ],
        [
          89.35175000000001,
          89.35175000000001
        ],
        [
          89.80423828125001,
          89.80423828125001
        ],
        [
          90.2567265625,
          90.2567265625
        ],
        [
          90.70921484375,
          90.70921484375
        ],
        [
          91.161703125,
          91.161703125
        ],
        [
          91.61419140625,
          91.61419140625
        ],
        [
          92.06667968750001,
          92.06667968750001
        ],
        [
          92.51916796875001,
          92.51916796875001
        ],
        [
          92.97165625000001,
          92.97165625000001
        ],
        [
          93.42414453125001,
          93.42414453125001
        ],
        [
          93.8766328125,
          93.8766328125
        ],
        [
          94.32912109375,
          94.32912109375
        ],
        [
          94.781609375,
          94.781609375
        ],
        [
          95.23409765625,
          95.23409765625
        ],
        [
          95.68658593750001,
          95.68658593750001
        ],
        [
          96.13907421875001,
          96.13907421875001
        ],
        [
          96.59156250000001,
          96.59156250000001
        ],
        [
          97.04405078125001,
          97.04405078125001
        ],
        [
          97.4965390625,
          97.4965390625
        ],
        [
          97.94902734375,
          97.94902734375
        ],
        [
          98.401515625,
          98.401515625
        ],
        [
          98.85400390625,
          98.85400390625
        ],
        [
          99.30649218750001,
          99.30649218750001
        ],
        [
          99.75898046875001,
          99.75898046875001
        ],
        [
          100.21146875000001,
          100.21146875000001
        ],
        [
          100.66395703125,
          100.66395703125
        ],
        [
          101.1164453125,
          101.1164453125
        ],
        [
          101.56893359375,
          101.56893359375
        ],
        [
          102.021421875,
          102.021421875
        ],
        [
          102.47391015625,
          102.47391015625
        ],
        [
          102.92639843750001,
          102.92639843750001
        ],
        [
          103.37888671875001,
          103.37888671875001
        ],
        [
          103.83137500000001,
          103.83137500000001
        ],
        [
          104.28386328125,
          104.28386328125
        ],
        [
          104.7363515625,
          104.7363515625
        ],
        [
          105.18883984375,
          105.18883984375
        ],
        [
          105.641328125,
          105.641328125
        ],
        [
          106.09381640625001,
          106.09381640625001
        ],
        [
          106.54630468750001,
          106.54630468750001
        ],
        [
          106.99879296875001,
          106.99879296875001
        ],
        [
          107.45128125000001,
          107.45128125000001
        ],
        [
          107.90376953125,
          107.90376953125
        ],
        [
          108.3562578125,
          108.3562578125
        ],
        [
          108.80874609375,
          108.80874609375
        ],
        [
          109.261234375,
          109.261234375
        ],
        [
          109.71372265625001,
          109.71372265625001
        ],
        [
          110.16621093750001,
          110.16621093750001
        ],
        [
          110.61869921875001,
          110.61869921875001
        ],
        [
          111.07118750000001,
          111.07118750000001
        ],
        [
          111.52367578125,
          111.52367578125
        ],
        [
          111.9761640625,
          111.9761640625
        ],
        [
          112.42865234375,
          112.42865234375
        ],
        [
          112.881140625,
          112.881140625
        ],
        [
          113.33362890625001,
          113.33362890625001
        ],
        [
          113.78611718750001,
          113.78611718750001
        ],
        [
          114.23860546875001,
          114.23860546875001
        ],
        [
          114.69109375000001,
          114.69109375000001
        ],
        [
          115.14358203125,
          115.14358203125
        ],
        [
          115.5960703125,
          115.5960703125
        ],
        [
          116.04855859375,
          116.04855859375
        ],
        [
          116.501046875,
          116.501046875
        ],
        [
          116.95353515625001,
          116.95353515625001
        ],
        [
          117.40602343750001,
          117.40602343750001
        ],
        [
          117.85851171875001,
          117.85851171875001
        ],
        [
          118.311,
          118.311
        ]
      ]
    },
    "13": {
      "label": "Source gap13, estimated interiors",
      "values": [
        [
          38.532,
          38.532
        ],
        [
          38.490362204103285,
          38.490362204103285
        ],
        [
          38.448496282602854,
          38.448496282602854
        ],
        [
          38.40640035680554,
          38.40640035680554
        ],
        [
          38.36407252716461,
          38.36407252716461
        ],
        [
          38.32151087342998,
          38.32151087342998
        ],
        [
          38.278713453869834,
          38.278713453869834
        ],
        [
          38.235678305216325,
          38.235678305216325
        ],
        [
          38.192403442452566,
          38.192403442452566
        ],
        [
          38.14888685838442,
          38.14888685838442
        ],
        [
          38.10512652315917,
          38.10512652315917
        ],
        [
          38.06112038432339,
          38.06112038432339
        ],
        [
          38.01686636635172,
          38.01686636635172
        ],
        [
          37.972362370076375,
          37.972362370076375
        ],
        [
          37.927606272726784,
          37.927606272726784
        ],
        [
          37.882595927491764,
          37.882595927491764
        ],
        [
          37.837329162743465,
          37.837329162743465
        ],
        [
          37.79180378257678,
          37.79180378257678
        ],
        [
          37.74601756562955,
          37.74601756562955
        ],
        [
          37.69996826496526,
          37.69996826496526
        ],
        [
          37.6536536079762,
          37.6536536079762
        ],
        [
          37.60707129562756,
          37.60707129562756
        ],
        [
          37.56021900241209,
          37.56021900241209
        ],
        [
          37.51309437560762,
          37.51309437560762
        ],
        [
          37.465695035387185,
          37.465695035387185
        ],
        [
          37.41801857369551,
          37.41801857369551
        ],
        [
          37.37006255457037,
          37.37006255457037
        ],
        [
          37.32182451334015,
          37.32182451334015
        ],
        [
          37.27330195617642,
          37.27330195617642
        ],
        [
          37.224492359832496,
          37.224492359832496
        ],
        [
          37.175393171215376,
          37.175393171215376
        ],
        [
          37.126001806734415,
          37.126001806734415
        ],
        [
          37.07631565198569,
          37.07631565198569
        ],
        [
          37.02633206140045,
          37.02633206140045
        ],
        [
          36.97604835755033,
          36.97604835755033
        ],
        [
          36.92546183074958,
          36.92546183074958
        ],
        [
          36.874569738738906,
          36.874569738738906
        ],
        [
          36.82336930598388,
          36.82336930598388
        ],
        [
          36.77185772309159,
          36.77185772309159
        ],
        [
          36.72003214655508,
          36.72003214655508
        ],
        [
          36.667889698187864,
          36.667889698187864
        ],
        [
          36.61542746434474,
          36.61542746434474
        ],
        [
          36.562642495723075,
          36.562642495723075
        ],
        [
          36.50953180651857,
          36.50953180651857
        ],
        [
          36.456092374117155,
          36.456092374117155
        ],
        [
          36.40232113814477,
          36.40232113814477
        ],
        [
          36.34821500037855,
          36.34821500037855
        ],
        [
          36.29377082378528,
          36.29377082378528
        ],
        [
          36.23898543200111,
          36.23898543200111
        ],
        [
          36.18385560880626,
          36.18385560880626
        ],
        [
          36.128378097487186,
          36.128378097487186
        ],
        [
          36.072549599990914,
          36.072549599990914
        ],
        [
          36.01636677646184,
          36.01636677646184
        ],
        [
          35.95982624459873,
          35.95982624459873
        ],
        [
          35.902924578863974,
          35.902924578863974
        ],
        [
          35.84565830998793,
          35.84565830998793
        ],
        [
          35.788023923815395,
          35.788023923815395
        ],
        [
          35.73001786114816,
          35.73001786114816
        ],
        [
          35.671636516708276,
          35.671636516708276
        ],
        [
          35.612876238329456,
          35.612876238329456
        ],
        [
          35.553733326425416,
          35.553733326425416
        ],
        [
          35.4942040330082,
          35.4942040330082
        ],
        [
          35.43428456106286,
          35.43428456106286
        ],
        [
          35.37397106354265,
          35.37397106354265
        ],
        [
          35.31325964276992,
          35.31325964276992
        ],
        [
          35.25214634936851,
          35.25214634936851
        ],
        [
          35.19062718176145,
          35.19062718176145
        ],
        [
          35.128698084763165,
          35.128698084763165
        ],
        [
          35.06635494913967,
          35.06635494913967
        ],
        [
          35.0035936106899,
          35.0035936106899
        ],
        [
          34.94040984880609,
          34.94040984880609
        ],
        [
          34.87679938631024,
          34.87679938631024
        ],
        [
          34.81275788788413,
          34.81275788788413
        ],
        [
          34.74828095927595,
          34.74828095927595
        ],
        [
          34.683364146196844,
          34.683364146196844
        ],
        [
          34.61800293369356,
          34.61800293369356
        ],
        [
          34.552192744455304,
          34.552192744455304
        ],
        [
          34.48592893847399,
          34.48592893847399
        ],
        [
          34.41920681124146,
          34.41920681124146
        ],
        [
          34.35202159325926,
          34.35202159325926
        ],
        [
          34.28436844823451,
          34.28436844823451
        ],
        [
          34.21624247280778,
          34.21624247280778
        ],
        [
          34.14763869438418,
          34.14763869438418
        ],
        [
          34.078552070702116,
          34.078552070702116
        ],
        [
          34.00897748815109,
          34.00897748815109
        ],
        [
          33.93890976091461,
          33.93890976091461
        ],
        [
          33.86834362896269,
          33.86834362896269
        ],
        [
          33.79727375753422,
          33.79727375753422
        ],
        [
          33.72569473551311,
          33.72569473551311
        ],
        [
          33.65360107372155,
          33.65360107372155
        ],
        [
          33.58098720401406,
          33.58098720401406
        ],
        [
          33.50784747761857,
          33.50784747761857
        ],
        [
          33.434176163624514,
          33.434176163624514
        ],
        [
          33.35996744738645,
          33.35996744738645
        ],
        [
          33.28521542944631,
          33.28521542944631
        ],
        [
          33.20991412348501,
          33.20991412348501
        ],
        [
          33.134057454956654,
          33.134057454956654
        ],
        [
          33.05763925940825,
          33.05763925940825
        ],
        [
          32.980653280867784,
          32.980653280867784
        ],
        [
          32.903093170034055,
          32.903093170034055
        ],
        [
          32.82495248259849,
          32.82495248259849
        ],
        [
          32.746224677368275,
          32.746224677368275
        ],
        [
          32.666903114644704,
          32.666903114644704
        ],
        [
          32.58698105421042,
          32.58698105421042
        ],
        [
          32.5064516533051,
          32.5064516533051
        ],
        [
          32.42530796504041,
          32.42530796504041
        ],
        [
          32.34354293596334,
          32.34354293596334
        ],
        [
          32.261149404329075,
          32.261149404329075
        ],
        [
          32.178120097767874,
          32.178120097767874
        ],
        [
          32.09444763148768,
          32.09444763148768
        ],
        [
          32.010124505818254,
          32.010124505818254
        ],
        [
          31.925143103958874,
          31.925143103958874
        ],
        [
          31.839495689807542,
          31.839495689807542
        ],
        [
          31.75317440539036,
          31.75317440539036
        ],
        [
          31.66617126903911,
          31.66617126903911
        ],
        [
          31.57847817206934,
          31.57847817206934
        ],
        [
          31.490086877020488,
          31.490086877020488
        ],
        [
          31.400989014729156,
          31.400989014729156
        ],
        [
          31.31117608161366,
          31.31117608161366
        ],
        [
          31.220639437209755,
          31.220639437209755
        ],
        [
          31.129370301197984,
          31.129370301197984
        ],
        [
          31.037359750680828,
          31.037359750680828
        ],
        [
          30.944598717394047,
          30.944598717394047
        ],
        [
          30.85107798425914,
          30.85107798425914
        ],
        [
          30.756788182840438,
          30.756788182840438
        ],
        [
          30.661719790127687,
          30.661719790127687
        ],
        [
          30.56586312492989,
          30.56586312492989
        ],
        [
          30.469208345264683,
          30.469208345264683
        ],
        [
          30.37174544431459,
          30.37174544431459
        ],
        [
          30.2734642474564,
          30.2734642474564
        ],
        [
          30.174354408433377,
          30.174354408433377
        ],
        [
          30.07440540581416,
          30.07440540581416
        ],
        [
          29.97360653937782,
          29.97360653937782
        ],
        [
          29.871946926237285,
          29.871946926237285
        ],
        [
          29.769415496751762,
          29.769415496751762
        ],
        [
          29.666000990760004,
          29.666000990760004
        ],
        [
          29.561691953207074,
          29.561691953207074
        ],
        [
          29.45647673042086,
          29.45647673042086
        ],
        [
          29.350343464854625,
          29.350343464854625
        ],
        [
          29.243280091767165,
          29.243280091767165
        ],
        [
          29.13527433360576,
          29.13527433360576
        ],
        [
          29.02631369608846,
          29.02631369608846
        ],
        [
          28.916385462871453,
          28.916385462871453
        ],
        [
          28.805476690930373,
          28.805476690930373
        ],
        [
          28.693574205425374,
          28.693574205425374
        ],
        [
          28.580664594301243,
          28.580664594301243
        ],
        [
          28.46673420301784,
          28.46673420301784
        ],
        [
          28.351769129267137,
          28.351769129267137
        ],
        [
          28.23575521697291,
          28.23575521697291
        ],
        [
          28.118678050603723,
          28.118678050603723
        ],
        [
          28.000522949464305,
          28.000522949464305
        ],
        [
          27.88127496110054,
          27.88127496110054
        ],
        [
          27.760918855328015,
          27.760918855328015
        ],
        [
          27.639439117752744,
          27.639439117752744
        ],
        [
          27.51681994267068,
          27.51681994267068
        ],
        [
          27.393045227000894,
          27.393045227000894
        ],
        [
          27.268098562498203,
          27.268098562498203
        ],
        [
          27.141963228763338,
          27.141963228763338
        ],
        [
          27.0146221859368,
          27.0146221859368
        ],
        [
          26.88605806683936,
          26.88605806683936
        ],
        [
          26.756253169236405,
          26.756253169236405
        ],
        [
          26.62518944734803,
          26.62518944734803
        ],
        [
          26.492848504088137,
          26.492848504088137
        ],
        [
          26.359211581853845,
          26.359211581853845
        ],
        [
          26.22425955419492,
          26.22425955419492
        ],
        [
          26.087972916197497,
          26.087972916197497
        ],
        [
          25.9503317753867,
          25.9503317753867
        ],
        [
          25.811315842092792,
          25.811315842092792
        ],
        [
          25.67090441922858,
          25.67090441922858
        ],
        [
          25.52907639224381,
          25.52907639224381
        ],
        [
          25.385810218391985,
          25.385810218391985
        ],
        [
          25.241083915941292,
          25.241083915941292
        ],
        [
          25.09487505290116,
          25.09487505290116
        ],
        [
          24.94716073541214,
          24.94716073541214
        ],
        [
          24.797917595788284,
          24.797917595788284
        ],
        [
          24.647121780103173,
          24.647121780103173
        ],
        [
          24.49474893586606,
          24.49474893586606
        ],
        [
          24.34077419835069,
          24.34077419835069
        ],
        [
          24.185172177593095,
          24.185172177593095
        ],
        [
          24.027916943962257,
          24.027916943962257
        ],
        [
          23.868982014109267,
          23.868982014109267
        ],
        [
          23.708340336032098,
          23.708340336032098
        ],
        [
          23.545964273701056,
          23.545964273701056
        ],
        [
          23.381825591020064,
          23.381825591020064
        ],
        [
          23.215895435858176,
          23.215895435858176
        ],
        [
          23.048144322804525,
          23.048144322804525
        ],
        [
          22.878542115754243,
          22.878542115754243
        ],
        [
          22.70705801010735,
          22.70705801010735
        ],
        [
          22.533660513880168,
          22.533660513880168
        ],
        [
          22.358317428356663,
          22.358317428356663
        ],
        [
          22.180995828399244,
          22.180995828399244
        ],
        [
          22.001662041762845,
          22.001662041762845
        ],
        [
          21.820281627714525,
          21.820281627714525
        ],
        [
          21.636819355039847,
          21.636819355039847
        ],
        [
          21.451239179231585,
          21.451239179231585
        ],
        [
          21.263504218768013,
          21.263504218768013
        ],
        [
          21.073576730907664,
          21.073576730907664
        ],
        [
          20.881418086320345,
          20.881418086320345
        ],
        [
          20.686988742568698,
          20.686988742568698
        ],
        [
          20.490248217577733,
          20.490248217577733
        ],
        [
          20.29115506105223,
          20.29115506105223
        ],
        [
          20.08966682559232,
          20.08966682559232
        ],
        [
          19.8857400365485,
          19.8857400365485
        ],
        [
          19.679330160466744,
          19.679330160466744
        ],
        [
          19.470391573165664,
          19.470391573165664
        ],
        [
          19.258877525560827,
          19.258877525560827
        ],
        [
          19.044740109313707,
          19.044740109313707
        ],
        [
          18.827930220254032,
          18.827930220254032
        ],
        [
          18.60839752106043,
          18.60839752106043
        ],
        [
          18.386090402351257,
          18.386090402351257
        ],
        [
          18.16095594201903,
          18.16095594201903
        ],
        [
          17.932939863393752,
          17.932939863393752
        ],
        [
          17.701986491600284,
          17.701986491600284
        ],
        [
          17.468038708196904,
          17.468038708196904
        ],
        [
          17.23103790418844,
          17.23103790418844
        ],
        [
          16.990923930943612,
          16.990923930943612
        ],
        [
          16.747635049484693,
          16.747635049484693
        ],
        [
          16.501107877224808,
          16.501107877224808
        ],
        [
          16.251277333423175,
          16.251277333423175
        ],
        [
          15.998076581545602,
          15.998076581545602
        ],
        [
          15.741436969629175,
          15.741436969629175
        ],
        [
          15.481287968556051,
          15.481287968556051
        ],
        [
          15.217557107150572,
          15.217557107150572
        ],
        [
          14.950169905022454,
          14.950169905022454
        ],
        [
          14.679049802282247,
          14.679049802282247
        ],
        [
          14.404118086680072,
          14.404118086680072
        ],
        [
          14.125293817357287,
          14.125293817357287
        ],
        [
          13.842493745212705,
          13.842493745212705
        ],
        [
          13.555632230365848,
          13.555632230365848
        ],
        [
          13.264621155459302,
          13.264621155459302
        ],
        [
          12.969369835447576,
          12.969369835447576
        ],
        [
          12.669784923576572,
          12.669784923576572
        ],
        [
          12.365770312731335,
          12.365770312731335
        ],
        [
          12.05722703293385,
          12.05722703293385
        ],
        [
          11.744053143605404,
          11.744053143605404
        ],
        [
          11.426143621497193,
          11.426143621497193
        ],
        [
          11.103390243373545,
          11.103390243373545
        ],
        [
          10.775681462823067,
          10.775681462823067
        ],
        [
          10.442902282226427,
          10.442902282226427
        ],
        [
          10.10493411773734,
          10.10493411773734
        ],
        [
          9.761654658703279,
          9.761654658703279
        ],
        [
          9.412937720113327,
          9.412937720113327
        ],
        [
          9.058653087610233,
          9.058653087610233
        ],
        [
          8.69866635596443,
          8.69866635596443
        ],
        [
          8.332838758478667,
          8.332838758478667
        ],
        [
          7.961026989004267,
          7.961026989004267
        ],
        [
          7.5830830148442425,
          7.5830830148442425
        ],
        [
          7.198853879921646,
          7.198853879921646
        ],
        [
          6.808181498617151,
          6.808181498617151
        ],
        [
          6.4109024389548495,
          6.4109024389548495
        ],
        [
          6.006847694572745,
          6.006847694572745
        ],
        [
          5.595842444922956,
          5.595842444922956
        ],
        [
          5.1777058034024686,
          5.1777058034024686
        ],
        [
          4.752250551574701,
          4.752250551574701
        ],
        [
          4.319282859848861,
          4.319282859848861
        ],
        [
          3.878601992965787,
          3.878601992965787
        ],
        [
          3.43,
          3.43
        ]
      ]
    },
    "19": {
      "label": "Source gap19, estimated interiors",
      "values": [
        [
          83.912,
          83.912
        ],
        [
          83.50114951464673,
          83.50114951464673
        ],
        [
          83.09052715489716,
          83.09052715489716
        ],
        [
          82.68013479944446,
          82.68013479944446
        ],
        [
          82.2699743478354,
          82.2699743478354
        ],
        [
          81.86004772032004,
          81.86004772032004
        ],
        [
          81.45035685863016,
          81.45035685863016
        ],
        [
          81.04090372603368,
          81.04090372603368
        ],
        [
          80.63169030754744,
          80.63169030754744
        ],
        [
          80.22271861036558,
          80.22271861036558
        ],
        [
          79.81399066434084,
          79.81399066434084
        ],
        [
          79.40550852192662,
          79.40550852192662
        ],
        [
          78.99727425864829,
          78.99727425864829
        ],
        [
          78.58928997367363,
          78.58928997367363
        ],
        [
          78.18155778977322,
          78.18155778977322
        ],
        [
          77.77407985375824,
          77.77407985375824
        ],
        [
          77.36685833725653,
          77.36685833725653
        ],
        [
          76.95989543617323,
          76.95989543617323
        ],
        [
          76.55319337187046,
          76.55319337187046
        ],
        [
          76.14675439128476,
          76.14675439128476
        ],
        [
          75.7405807670238,
          75.7405807670238
        ],
        [
          75.33467479812244,
          75.33467479812244
        ],
        [
          74.92903881008792,
          74.92903881008792
        ],
        [
          74.52367515564238,
          74.52367515564238
        ],
        [
          74.11858621461282,
          74.11858621461282
        ],
        [
          73.71377439505449,
          73.71377439505449
        ],
        [
          73.30924213292964,
          73.30924213292964
        ],
        [
          72.90499189290986,
          72.90499189290986
        ],
        [
          72.50102616882359,
          72.50102616882359
        ],
        [
          72.09734748391752,
          72.09734748391752
        ],
        [
          71.69395839128464,
          71.69395839128464
        ],
        [
          71.2908614745156,
          71.2908614745156
        ],
        [
          70.88805934801431,
          70.88805934801431
        ],
        [
          70.48555465734955,
          70.48555465734955
        ],
        [
          70.08335007994967,
          70.08335007994967
        ],
        [
          69.68144832550043,
          69.68144832550043
        ],
        [
          69.2798521362611,
          69.2798521362611
        ],
        [
          68.87856428776612,
          68.87856428776612
        ],
        [
          68.47758758940842,
          68.47758758940842
        ],
        [
          68.07692488469493,
          68.07692488469493
        ],
        [
          67.67657905181214,
          67.67657905181214
        ],
        [
          67.27655300440526,
          67.27655300440526
        ],
        [
          66.87684969177693,
          66.87684969177693
        ],
        [
          66.47747209973144,
          66.47747209973144
        ],
        [
          66.07842325088285,
          66.07842325088285
        ],
        [
          65.67970620560524,
          65.67970620560524
        ],
        [
          65.28132406212146,
          65.28132406212146
        ],
        [
          64.88327995746472,
          64.88327995746472
        ],
        [
          64.48557706799889,
          64.48557706799889
        ],
        [
          64.08821860994374,
          64.08821860994374
        ],
        [
          63.69120784001282,
          63.69120784001282
        ],
        [
          63.294548056259096,
          63.294548056259096
        ],
        [
          62.89824259853816,
          62.89824259853816
        ],
        [
          62.50229484915127,
          62.50229484915127
        ],
        [
          62.10670823363603,
          62.10670823363603
        ],
        [
          61.71148622126207,
          61.71148622126207
        ],
        [
          61.31663232618461,
          61.31663232618461
        ],
        [
          60.922150107601844,
          60.922150107601844
        ],
        [
          60.52804317079173,
          60.52804317079173
        ],
        [
          60.134315167920555,
          60.134315167920555
        ],
        [
          59.740969798574596,
          59.740969798574596
        ],
        [
          59.34801081074181,
          59.34801081074181
        ],
        [
          58.95544200143714,
          58.95544200143714
        ],
        [
          58.563267217707356,
          58.563267217707356
        ],
        [
          58.171490357230084,
          58.171490357230084
        ],
        [
          57.7801153693815,
          57.7801153693815
        ],
        [
          57.38914625573856,
          57.38914625573856
        ],
        [
          56.99858707148683,
          56.99858707148683
        ],
        [
          56.608441925860326,
          56.608441925860326
        ],
        [
          56.2187149830601,
          56.2187149830601
        ],
        [
          55.82941046369391,
          55.82941046369391
        ],
        [
          55.440532644939765,
          55.440532644939765
        ],
        [
          55.052085862115874,
          55.052085862115874
        ],
        [
          54.664074509474055,
          54.664074509474055
        ],
        [
          54.276503041303165,
          54.276503041303165
        ],
        [
          53.88937597255645,
          53.88937597255645
        ],
        [
          53.502697880544694,
          53.502697880544694
        ],
        [
          53.11647340527601,
          53.11647340527601
        ],
        [
          52.73070725125854,
          52.73070725125854
        ],
        [
          52.345404187990745,
          52.345404187990745
        ],
        [
          51.960569051765496,
          51.960569051765496
        ],
        [
          51.57620674594223,
          51.57620674594223
        ],
        [
          51.19232224311583,
          51.19232224311583
        ],
        [
          50.808920585547895,
          50.808920585547895
        ],
        [
          50.42600688684891,
          50.42600688684891
        ],
        [
          50.04358633283539,
          50.04358633283539
        ],
        [
          49.66166418353731,
          49.66166418353731
        ],
        [
          49.280245773715784,
          49.280245773715784
        ],
        [
          48.8993365144869,
          48.8993365144869
        ],
        [
          48.518941895028455,
          48.518941895028455
        ],
        [
          48.13906748348595,
          48.13906748348595
        ],
        [
          47.75971892863144,
          47.75971892863144
        ],
        [
          47.380901961375486,
          47.380901961375486
        ],
        [
          47.00262239636355,
          47.00262239636355
        ],
        [
          46.62488613305369,
          46.62488613305369
        ],
        [
          46.247699157765,
          46.247699157765
        ],
        [
          45.87106754504335,
          45.87106754504335
        ],
        [
          45.49499745934176,
          45.49499745934176
        ],
        [
          45.119495156632226,
          45.119495156632226
        ],
        [
          44.74456698621594,
          44.74456698621594
        ],
        [
          44.37021939240151,
          44.37021939240151
        ],
        [
          43.99645891638173,
          43.99645891638173
        ],
        [
          43.6232921978553,
          43.6232921978553
        ],
        [
          43.250725977039586,
          43.250725977039586
        ],
        [
          42.87876709669491,
          42.87876709669491
        ],
        [
          42.5074225037096,
          42.5074225037096
        ],
        [
          42.13669925153667,
          42.13669925153667
        ],
        [
          41.766604501920924,
          41.766604501920924
        ],
        [
          41.39714552723213,
          41.39714552723213
        ],
        [
          41.02832971226232,
          41.02832971226232
        ],
        [
          40.66016455668175,
          40.66016455668175
        ],
        [
          40.29265767729113,
          40.29265767729113
        ],
        [
          39.925816810192465,
          39.925816810192465
        ],
        [
          39.55964981335965,
          39.55964981335965
        ],
        [
          39.1941646684609,
          39.1941646684609
        ],
        [
          38.82936948418066,
          38.82936948418066
        ],
        [
          38.46527249797951,
          38.46527249797951
        ],
        [
          38.10188207902085,
          38.10188207902085
        ],
        [
          37.739206730886345,
          37.739206730886345
        ],
        [
          37.37725509404025,
          37.37725509404025
        ],
        [
          37.01603594880203,
          37.01603594880203
        ],
        [
          36.65555821806918,
          36.65555821806918
        ],
        [
          36.29583097010597,
          36.29583097010597
        ],
        [
          35.936863421990864,
          35.936863421990864
        ],
        [
          35.57866494215956,
          35.57866494215956
        ],
        [
          35.22124505362231,
          35.22124505362231
        ],
        [
          34.864613437570114,
          34.864613437570114
        ],
        [
          34.508779935985324,
          34.508779935985324
        ],
        [
          34.15375455568542,
          34.15375455568542
        ],
        [
          33.79954747129361,
          33.79954747129361
        ],
        [
          33.446169029066624,
          33.446169029066624
        ],
        [
          33.09362975043584,
          33.09362975043584
        ],
        [
          32.74194033562218,
          32.74194033562218
        ],
        [
          32.39111166751272,
          32.39111166751272
        ],
        [
          32.04115481574824,
          32.04115481574824
        ],
        [
          31.692081040490002,
          31.692081040490002
        ],
        [
          31.343901796792935,
          31.343901796792935
        ],
        [
          30.99662873832915,
          30.99662873832915
        ],
        [
          30.650273722645373,
          30.650273722645373
        ],
        [
          30.304848814482835,
          30.304848814482835
        ],
        [
          29.96036629139424,
          29.96036629139424
        ],
        [
          29.61683864766154,
          29.61683864766154
        ],
        [
          29.274278599628552,
          29.274278599628552
        ],
        [
          28.932699090319634,
          28.932699090319634
        ],
        [
          28.59211329457462,
          28.59211329457462
        ],
        [
          28.252534624448753,
          28.252534624448753
        ],
        [
          27.91397673448216,
          27.91397673448216
        ],
        [
          27.576453526982863,
          27.576453526982863
        ],
        [
          27.239979158027094,
          27.239979158027094
        ],
        [
          26.90456804314628,
          26.90456804314628
        ],
        [
          26.5702348630357,
          26.5702348630357
        ],
        [
          26.236994570149466,
          26.236994570149466
        ],
        [
          25.90486239467198,
          25.90486239467198
        ],
        [
          25.573853850997253,
          25.573853850997253
        ],
        [
          25.24398474482932,
          25.24398474482932
        ],
        [
          24.915271179249107,
          24.915271179249107
        ],
        [
          24.5877295625018,
          24.5877295625018
        ],
        [
          24.261376614986666,
          24.261376614986666
        ],
        [
          23.936229376563205,
          23.936229376563205
        ],
        [
          23.612305214410647,
          23.612305214410647
        ],
        [
          23.28962183076359,
          23.28962183076359
        ],
        [
          22.968197271401966,
          22.968197271401966
        ],
        [
          22.648049933411862,
          22.648049933411862
        ],
        [
          22.329198574396155,
          22.329198574396155
        ],
        [
          22.011662320805083,
          22.011662320805083
        ],
        [
          21.695460677552507,
          21.695460677552507
        ],
        [
          21.380613537113305,
          21.380613537113305
        ],
        [
          21.0671411891572,
          21.0671411891572
        ],
        [
          20.755064330771415,
          20.755064330771415
        ],
        [
          20.44440407650619,
          20.44440407650619
        ],
        [
          20.135181969108014,
          20.135181969108014
        ],
        [
          19.82741999030871,
          19.82741999030871
        ],
        [
          19.521140572098844,
          19.521140572098844
        ],
        [
          19.216366608337864,
          19.216366608337864
        ],
        [
          18.913121466711722,
          18.913121466711722
        ],
        [
          18.61142900114682,
          18.61142900114682
        ],
        [
          18.311313564133936,
          18.311313564133936
        ],
        [
          18.012800020399307,
          18.012800020399307
        ],
        [
          17.715913759906904,
          17.715913759906904
        ],
        [
          17.420680712287744,
          17.420680712287744
        ],
        [
          17.127127360890736,
          17.127127360890736
        ],
        [
          16.835280757717907,
          16.835280757717907
        ],
        [
          16.54516853879895,
          16.54516853879895
        ],
        [
          16.25681894022993,
          16.25681894022993
        ],
        [
          15.97026081414182,
          15.97026081414182
        ],
        [
          15.685523645945473,
          15.685523645945473
        ],
        [
          15.402637571745757,
          15.402637571745757
        ],
        [
          15.121633396142652,
          15.121633396142652
        ],
        [
          14.842542611119836,
          14.842542611119836
        ],
        [
          14.565397415393342,
          14.565397415393342
        ],
        [
          14.290230734100763,
          14.290230734100763
        ],
        [
          14.01707623948715,
          14.01707623948715
        ],
        [
          13.745968372285471,
          13.745968372285471
        ],
        [
          13.476942363710151,
          13.476942363710151
        ],
        [
          13.210034258268415,
          13.210034258268415
        ],
        [
          12.94528093748199,
          12.94528093748199
        ],
        [
          12.68272014409234,
          12.68272014409234
        ],
        [
          12.422390507429661,
          12.422390507429661
        ],
        [
          12.164331569931296,
          12.164331569931296
        ],
        [
          11.908583813672262,
          11.908583813672262
        ],
        [
          11.655188688947767,
          11.655188688947767
        ],
        [
          11.404188643157678,
          11.404188643157678
        ],
        [
          11.1556271509515,
          11.1556271509515
        ],
        [
          10.909548745783258,
          10.909548745783258
        ],
        [
          10.66599905183434,
          10.66599905183434
        ],
        [
          10.42502481818918,
          10.42502481818918
        ],
        [
          10.186673953186286,
          10.186673953186286
        ],
        [
          9.950995560995963,
          9.950995560995963
        ],
        [
          9.718039978939569,
          9.718039978939569
        ],
        [
          9.487858816398742,
          9.487858816398742
        ],
        [
          9.260504995480972,
          9.260504995480972
        ],
        [
          9.03603279285625,
          9.03603279285625
        ],
        [
          8.81449788339972,
          8.81449788339972
        ],
        [
          8.595957385553103,
          8.595957385553103
        ],
        [
          8.380469908311554,
          8.380469908311554
        ],
        [
          8.168095600306383,
          8.168095600306383
        ],
        [
          7.958896200515305,
          7.958896200515305
        ],
        [
          7.752935091525192,
          7.752935091525192
        ],
        [
          7.550277354076826,
          7.550277354076826
        ],
        [
          7.350989824704401,
          7.350989824704401
        ],
        [
          7.1551411553708295,
          7.1551411553708295
        ],
        [
          6.962801875193955,
          6.962801875193955
        ],
        [
          6.774044455349422,
          6.774044455349422
        ],
        [
          6.588943376227542,
          6.588943376227542
        ],
        [
          6.407575197717751,
          6.407575197717751
        ],
        [
          6.230018632069928,
          6.230018632069928
        ],
        [
          6.056354620142715,
          6.056354620142715
        ],
        [
          5.886666411037298,
          5.886666411037298
        ],
        [
          5.721039644634157,
          5.721039644634157
        ],
        [
          5.5595624382906905,
          5.5595624382906905
        ],
        [
          5.402325477052418,
          5.402325477052418
        ],
        [
          5.249422107673425,
          5.249422107673425
        ],
        [
          5.100948437268663,
          5.100948437268663
        ],
        [
          4.95700343581615,
          4.95700343581615
        ],
        [
          4.817689043894598,
          4.817689043894598
        ],
        [
          4.683110284752811,
          4.683110284752811
        ],
        [
          4.553375381626461,
          4.553375381626461
        ],
        [
          4.428595880926926,
          4.428595880926926
        ],
        [
          4.308886780273568,
          4.308886780273568
        ],
        [
          4.194366663512657,
          4.194366663512657
        ],
        [
          4.08515784129672,
          4.08515784129672
        ],
        [
          3.981386498636674,
          3.981386498636674
        ],
        [
          3.883182849889769,
          3.883182849889769
        ],
        [
          3.7906813002855735,
          3.7906813002855735
        ],
        [
          3.7040206165213387,
          3.7040206165213387
        ],
        [
          3.623344104745726,
          3.623344104745726
        ],
        [
          3.548799797655753,
          3.548799797655753
        ],
        [
          3.4805406513283508,
          3.4805406513283508
        ],
        [
          3.4187247513828476,
          3.4187247513828476
        ],
        [
          3.3635155297951513,
          3.3635155297951513
        ],
        [
          3.315081992927258,
          3.315081992927258
        ],
        [
          3.273598961327049,
          3.273598961327049
        ],
        [
          3.2392473215975377,
          3.2392473215975377
        ],
        [
          3.212214292175293,
          3.212214292175293
        ],
        [
          3.192693702651135,
          3.192693702651135
        ],
        [
          3.1808862882842104,
          3.1808862882842104
        ],
        [
          3.177,
          3.177
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      11
    ],
    "maxFNumber": 11
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Static infinity only. No publishedfiniteprescription or focuscam claimed. Estimatedzoominteriors retain sourceendpoint rounding residual."
  },
  "projection": {
    "kind": "rectilinear",
    "maxTraceFieldDeg": 1
  },
  "rays": {
    "offAxisFieldFrac": 0.98
  },
  "layout": {
    "yScFill": 0.65
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
