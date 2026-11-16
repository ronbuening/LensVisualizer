import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Derived infinity cam: 3 published plus126calculated nodes. Integration QA pending. */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-optio-s-representative-e6",
  "maker": "Pentax",
  "name": "PENTAX Optio S 5.8–17.4mm f/2.7–5.3 (representative Embodiment 6)",
  "visible": false,
  "subtitle": "Representative patent with derived G2/G3 compensator; published nodes labeled; not factory cam",
  "source": {
    "patentNumber": "US 2003/0197949 A1",
    "example": {
      "label": "Embodiment 6",
      "id": "6"
    },
    "patentYear": 2003,
    "authors": [
      "Masaru Eguchi"
    ],
    "assignees": [
      "Pentax Corporation"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "nd": 1.883,
      "vd": 40.8,
      "glass": "Unmatched (nd=1.883, Vd=40.8)",
      "type": "Negative Meniscus"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "nd": 1.84666,
      "vd": 23.8,
      "glass": "Unmatched (nd=1.84666, Vd=23.8)",
      "type": "Positive Meniscus (2x Aspheric)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "nd": 1.58913,
      "vd": 61.2,
      "glass": "Unmatched (nd=1.58913, Vd=61.2)",
      "type": "Biconvex Positive (2x Aspheric)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "nd": 1.834,
      "vd": 37.2,
      "glass": "Unmatched (nd=1.834, Vd=37.2)",
      "type": "Positive Meniscus",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "nd": 1.84666,
      "vd": 23.8,
      "glass": "Unmatched (nd=1.84666, Vd=23.8)",
      "type": "Negative Meniscus",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "nd": 1.6516,
      "vd": 58.5,
      "glass": "Unmatched (nd=1.6516, Vd=58.5)",
      "type": "Biconvex Positive"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 1070.671,
      "d": 0.7,
      "sd": 5.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 7.32,
      "d": 1.5,
      "sd": 5.5
    },
    {
      "label": "3",
      "R": 15.066,
      "d": 1.8,
      "sd": 4.85,
      "medium": 2,
      "asphere": {
        "K": 0,
        "A4": -0.00035482,
        "A6": 8.7922e-06,
        "A8": 1.3e-07
      }
    },
    {
      "label": "4",
      "R": 209.571,
      "sd": 4.85,
      "asphere": {
        "K": 0,
        "A4": -0.00056988,
        "A6": 1.2255e-05,
        "A8": -7.2152e-08
      }
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.5
    },
    {
      "label": "5",
      "R": 6.208,
      "d": 1.8,
      "sd": 2.35,
      "medium": 3,
      "asphere": {
        "K": 0,
        "A4": -0.00055966,
        "A6": -5.1644e-06,
        "A8": 6.3694e-07
      }
    },
    {
      "label": "6",
      "R": -16.525,
      "d": 0.2,
      "sd": 2.35,
      "asphere": {
        "K": 0,
        "A4": 0.00033682,
        "A6": -1.3588e-05,
        "A8": 1.8616e-06
      }
    },
    {
      "label": "7",
      "R": 9.199,
      "d": 1.8,
      "sd": 2.15,
      "medium": 4
    },
    {
      "label": "8",
      "R": 48.765,
      "d": 1.8,
      "sd": 2.15,
      "medium": 5
    },
    {
      "label": "9",
      "R": 3.565,
      "sd": 2.15
    },
    {
      "label": "10",
      "R": 16.66,
      "d": 1.9,
      "sd": 4.2,
      "medium": 6
    },
    {
      "label": "11",
      "R": -15.068,
      "sd": 4.2
    }
  ],
  "rearPlates": [
    {
      "label": "CG",
      "thicknessMm": 2,
      "nd": 1.51633,
      "vd": 64.1,
      "gapAfterMm": 0,
      "source": "Table6 S12-S13, printed fB=0"
    }
  ],
  "aperture": {
    "fStops": [
      2.7,
      8,
      11,
      16
    ]
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity only. Three exact patent stations; other rows are derived G2/G3 translations preserving source-interpolated total track and image plane, with source residual focus interpolated. No factory zoom cam or finite focus claim."
  },
  "groups": [
    {
      "text": "G1 (-)",
      "fromSurface": "1",
      "toSurface": "4"
    },
    {
      "text": "G2 (+)",
      "fromSurface": "5",
      "toSurface": "9"
    },
    {
      "text": "G3 (+)",
      "fromSurface": "10",
      "toSurface": "11"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "7",
      "toSurface": "9"
    }
  ],
  "catalog": {
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "design": [
        5.8,
        17.4
      ]
    },
    "specs": [
      "REPRESENTATIVE PATENT; NOT FACTORY-EXACT OPTIO S",
      "6 ELEMENTS / 5 AIR-SEPARATED GROUPS",
      "3 PUBLISHED + 126 DERIVED INFINITY STATIONS",
      "DERIVED G2/G3 CAM; CLEAR CAPS UNCHANGED"
    ]
  },
  "layout": {
    "yScFill": 0.4
  },
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 5.8,
        "nominalFNumber": 2.7,
        "label": "Source infinity 5.8 mm",
        "published": true,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 5.861021889445186,
        "nominalFNumber": 2.7125000000000004,
        "label": "Calculated infinity 5.861022 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 5.920384425778013,
        "nominalFNumber": 2.725,
        "label": "Calculated infinity 5.920384 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 5.979746962110839,
        "nominalFNumber": 2.7375000000000003,
        "label": "Calculated infinity 5.979747 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.039109498443663,
        "nominalFNumber": 2.75,
        "label": "Calculated infinity 6.039109 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.098472034776487,
        "nominalFNumber": 2.7625,
        "label": "Calculated infinity 6.098472 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.157834571109313,
        "nominalFNumber": 2.7750000000000004,
        "label": "Calculated infinity 6.157835 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.2171971074421375,
        "nominalFNumber": 2.7875,
        "label": "Calculated infinity 6.217197 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.27655964377496,
        "nominalFNumber": 2.8000000000000003,
        "label": "Calculated infinity 6.27656 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.335922180107789,
        "nominalFNumber": 2.8125,
        "label": "Calculated infinity 6.335922 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.395284716440612,
        "nominalFNumber": 2.825,
        "label": "Calculated infinity 6.395285 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.454647252773436,
        "nominalFNumber": 2.8375000000000004,
        "label": "Calculated infinity 6.454647 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.51400978910626,
        "nominalFNumber": 2.85,
        "label": "Calculated infinity 6.51401 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.5733723254390855,
        "nominalFNumber": 2.8625000000000003,
        "label": "Calculated infinity 6.573372 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.6327348617719135,
        "nominalFNumber": 2.875,
        "label": "Calculated infinity 6.632735 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.692097398104735,
        "nominalFNumber": 2.8875,
        "label": "Calculated infinity 6.692097 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.751459934437561,
        "nominalFNumber": 2.9000000000000004,
        "label": "Calculated infinity 6.75146 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.810822470770384,
        "nominalFNumber": 2.9125,
        "label": "Calculated infinity 6.810822 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.8701850071032124,
        "nominalFNumber": 2.9250000000000003,
        "label": "Calculated infinity 6.870185 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.929547543436035,
        "nominalFNumber": 2.9375,
        "label": "Calculated infinity 6.929548 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 6.988910079768859,
        "nominalFNumber": 2.95,
        "label": "Calculated infinity 6.98891 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.048272616101684,
        "nominalFNumber": 2.9625000000000004,
        "label": "Calculated infinity 7.048273 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.107635152434508,
        "nominalFNumber": 2.975,
        "label": "Calculated infinity 7.107635 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.166997688767333,
        "nominalFNumber": 2.9875000000000003,
        "label": "Calculated infinity 7.166998 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.226360225100158,
        "nominalFNumber": 3.0,
        "label": "Calculated infinity 7.22636 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.285722761432982,
        "nominalFNumber": 3.0125,
        "label": "Calculated infinity 7.285723 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.3450852977658085,
        "nominalFNumber": 3.0250000000000004,
        "label": "Calculated infinity 7.345085 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.404447834098631,
        "nominalFNumber": 3.0375,
        "label": "Calculated infinity 7.404448 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.463810370431457,
        "nominalFNumber": 3.0500000000000003,
        "label": "Calculated infinity 7.46381 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.5231729067642865,
        "nominalFNumber": 3.0625,
        "label": "Calculated infinity 7.523173 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.582535443097107,
        "nominalFNumber": 3.075,
        "label": "Calculated infinity 7.582535 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.641897979429932,
        "nominalFNumber": 3.0875,
        "label": "Calculated infinity 7.641898 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.701260515762756,
        "nominalFNumber": 3.1,
        "label": "Calculated infinity 7.701261 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.76062305209558,
        "nominalFNumber": 3.1125000000000003,
        "label": "Calculated infinity 7.760623 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.819985588428405,
        "nominalFNumber": 3.125,
        "label": "Calculated infinity 7.819986 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.879348124761227,
        "nominalFNumber": 3.1375,
        "label": "Calculated infinity 7.879348 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.9387106610940545,
        "nominalFNumber": 3.15,
        "label": "Calculated infinity 7.938711 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 7.998073197426882,
        "nominalFNumber": 3.1625,
        "label": "Calculated infinity 7.998073 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.057435733759704,
        "nominalFNumber": 3.175,
        "label": "Calculated infinity 8.057436 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.116798270092529,
        "nominalFNumber": 3.1875,
        "label": "Calculated infinity 8.116798 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.176160806425353,
        "nominalFNumber": 3.2,
        "label": "Calculated infinity 8.176161 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.235523342758178,
        "nominalFNumber": 3.2125,
        "label": "Calculated infinity 8.235523 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.294885879091,
        "nominalFNumber": 3.225,
        "label": "Calculated infinity 8.294886 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.354248415423827,
        "nominalFNumber": 3.2375,
        "label": "Calculated infinity 8.354248 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.413610951756652,
        "nominalFNumber": 3.25,
        "label": "Calculated infinity 8.413611 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.472973488089478,
        "nominalFNumber": 3.2625,
        "label": "Calculated infinity 8.472973 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.532336024422301,
        "nominalFNumber": 3.275,
        "label": "Calculated infinity 8.532336 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.591698560755129,
        "nominalFNumber": 3.2875,
        "label": "Calculated infinity 8.591699 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.65106109708795,
        "nominalFNumber": 3.3,
        "label": "Calculated infinity 8.651061 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.710423633420774,
        "nominalFNumber": 3.3125,
        "label": "Calculated infinity 8.710424 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.7697861697536,
        "nominalFNumber": 3.325,
        "label": "Calculated infinity 8.769786 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.829148706086428,
        "nominalFNumber": 3.3375,
        "label": "Calculated infinity 8.829149 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.888511242419247,
        "nominalFNumber": 3.35,
        "label": "Calculated infinity 8.888511 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.947873778752076,
        "nominalFNumber": 3.3625,
        "label": "Calculated infinity 8.947874 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.007236315084898,
        "nominalFNumber": 3.375,
        "label": "Calculated infinity 9.007236 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.066598851417723,
        "nominalFNumber": 3.3875,
        "label": "Calculated infinity 9.066599 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.12596138775055,
        "nominalFNumber": 3.4,
        "label": "Calculated infinity 9.125961 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.185323924083372,
        "nominalFNumber": 3.4125,
        "label": "Calculated infinity 9.185324 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.244686460416197,
        "nominalFNumber": 3.425,
        "label": "Calculated infinity 9.244686 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.304048996749021,
        "nominalFNumber": 3.4375,
        "label": "Calculated infinity 9.304049 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.363411533081846,
        "nominalFNumber": 3.45,
        "label": "Calculated infinity 9.363412 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.422774069414672,
        "nominalFNumber": 3.4625,
        "label": "Calculated infinity 9.422774 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.482136605747497,
        "nominalFNumber": 3.475,
        "label": "Calculated infinity 9.482137 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.54149914208032,
        "nominalFNumber": 3.4875,
        "label": "Calculated infinity 9.541499 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.6,
        "nominalFNumber": 3.5,
        "label": "Source infinity 9.6 mm",
        "published": true,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.722623489778632,
        "nominalFNumber": 3.528125,
        "label": "Calculated infinity 9.722623 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.844385301144117,
        "nominalFNumber": 3.55625,
        "label": "Calculated infinity 9.844385 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.966147112509603,
        "nominalFNumber": 3.584375,
        "label": "Calculated infinity 9.966147 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.087908923875089,
        "nominalFNumber": 3.6125,
        "label": "Calculated infinity 10.087909 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.209670735240577,
        "nominalFNumber": 3.640625,
        "label": "Calculated infinity 10.209671 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.33143254660606,
        "nominalFNumber": 3.66875,
        "label": "Calculated infinity 10.331433 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.453194357971546,
        "nominalFNumber": 3.696875,
        "label": "Calculated infinity 10.453194 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.57495616933703,
        "nominalFNumber": 3.725,
        "label": "Calculated infinity 10.574956 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.696717980702518,
        "nominalFNumber": 3.753125,
        "label": "Calculated infinity 10.696718 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.818479792068,
        "nominalFNumber": 3.78125,
        "label": "Calculated infinity 10.81848 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.940241603433488,
        "nominalFNumber": 3.809375,
        "label": "Calculated infinity 10.940242 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.062003414798973,
        "nominalFNumber": 3.8375,
        "label": "Calculated infinity 11.062003 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.183765226164459,
        "nominalFNumber": 3.865625,
        "label": "Calculated infinity 11.183765 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.305527037529943,
        "nominalFNumber": 3.89375,
        "label": "Calculated infinity 11.305527 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.427288848895424,
        "nominalFNumber": 3.921875,
        "label": "Calculated infinity 11.427289 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.549050660260914,
        "nominalFNumber": 3.95,
        "label": "Calculated infinity 11.549051 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.6708124716264,
        "nominalFNumber": 3.978125,
        "label": "Calculated infinity 11.670812 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.79257428299189,
        "nominalFNumber": 4.00625,
        "label": "Calculated infinity 11.792574 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.914336094357372,
        "nominalFNumber": 4.034375,
        "label": "Calculated infinity 11.914336 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.036097905722857,
        "nominalFNumber": 4.0625,
        "label": "Calculated infinity 12.036098 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.157859717088346,
        "nominalFNumber": 4.090625,
        "label": "Calculated infinity 12.15786 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.279621528453825,
        "nominalFNumber": 4.11875,
        "label": "Calculated infinity 12.279622 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.401383339819313,
        "nominalFNumber": 4.146875,
        "label": "Calculated infinity 12.401383 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.523145151184801,
        "nominalFNumber": 4.175,
        "label": "Calculated infinity 12.523145 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.644906962550285,
        "nominalFNumber": 4.203125,
        "label": "Calculated infinity 12.644907 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.766668773915766,
        "nominalFNumber": 4.23125,
        "label": "Calculated infinity 12.766669 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.88843058528126,
        "nominalFNumber": 4.259375,
        "label": "Calculated infinity 12.888431 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.010192396646742,
        "nominalFNumber": 4.2875,
        "label": "Calculated infinity 13.010192 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.131954208012221,
        "nominalFNumber": 4.315625,
        "label": "Calculated infinity 13.131954 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.253716019377713,
        "nominalFNumber": 4.34375,
        "label": "Calculated infinity 13.253716 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.375477830743193,
        "nominalFNumber": 4.371875,
        "label": "Calculated infinity 13.375478 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.497239642108683,
        "nominalFNumber": 4.4,
        "label": "Calculated infinity 13.49724 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.61900145347417,
        "nominalFNumber": 4.428125,
        "label": "Calculated infinity 13.619001 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.740763264839657,
        "nominalFNumber": 4.45625,
        "label": "Calculated infinity 13.740763 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.862525076205142,
        "nominalFNumber": 4.484375,
        "label": "Calculated infinity 13.862525 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.98428688757062,
        "nominalFNumber": 4.5125,
        "label": "Calculated infinity 13.984287 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.106048698936108,
        "nominalFNumber": 4.540625,
        "label": "Calculated infinity 14.106049 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.227810510301591,
        "nominalFNumber": 4.56875,
        "label": "Calculated infinity 14.227811 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.349572321667084,
        "nominalFNumber": 4.596875,
        "label": "Calculated infinity 14.349572 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.471334133032567,
        "nominalFNumber": 4.625,
        "label": "Calculated infinity 14.471334 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.593095944398058,
        "nominalFNumber": 4.653125,
        "label": "Calculated infinity 14.593096 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.714857755763541,
        "nominalFNumber": 4.68125,
        "label": "Calculated infinity 14.714858 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.836619567129025,
        "nominalFNumber": 4.709375,
        "label": "Calculated infinity 14.83662 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.958381378494511,
        "nominalFNumber": 4.7375,
        "label": "Calculated infinity 14.958381 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.080143189859992,
        "nominalFNumber": 4.765625,
        "label": "Calculated infinity 15.080143 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.201905001225489,
        "nominalFNumber": 4.79375,
        "label": "Calculated infinity 15.201905 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.32366681259097,
        "nominalFNumber": 4.821875,
        "label": "Calculated infinity 15.323667 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.445428623956465,
        "nominalFNumber": 4.85,
        "label": "Calculated infinity 15.445429 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.567190435321965,
        "nominalFNumber": 4.878125,
        "label": "Calculated infinity 15.56719 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.688952246687446,
        "nominalFNumber": 4.90625,
        "label": "Calculated infinity 15.688952 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.810714058052948,
        "nominalFNumber": 4.934375,
        "label": "Calculated infinity 15.810714 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.932475869418441,
        "nominalFNumber": 4.9625,
        "label": "Calculated infinity 15.932476 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.05423768078394,
        "nominalFNumber": 4.990625,
        "label": "Calculated infinity 16.054238 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.175999492149433,
        "nominalFNumber": 5.01875,
        "label": "Calculated infinity 16.175999 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.297761303514857,
        "nominalFNumber": 5.046875,
        "label": "Calculated infinity 16.297761 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.419523114880334,
        "nominalFNumber": 5.074999999999999,
        "label": "Calculated infinity 16.419523 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.541284926245826,
        "nominalFNumber": 5.103125,
        "label": "Calculated infinity 16.541285 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.663046737611307,
        "nominalFNumber": 5.13125,
        "label": "Calculated infinity 16.663047 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.78480854897679,
        "nominalFNumber": 5.159375,
        "label": "Calculated infinity 16.784809 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.90657036034228,
        "nominalFNumber": 5.1875,
        "label": "Calculated infinity 16.90657 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.02833217170777,
        "nominalFNumber": 5.215624999999999,
        "label": "Calculated infinity 17.028332 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.15009398307324,
        "nominalFNumber": 5.24375,
        "label": "Calculated infinity 17.150094 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.271855794438732,
        "nominalFNumber": 5.271875,
        "label": "Calculated infinity 17.271856 mm",
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.4,
        "nominalFNumber": 5.3,
        "label": "Source infinity 17.4 mm",
        "published": true,
        "publishedFocus": []
      }
    ],
    "step": 0.004
  },
  "gaps": {
    "4": {
      "label": "d4",
      "values": [
        [
          15.04,
          15.04
        ],
        [
          14.900258081562745,
          14.900258081562745
        ],
        [
          14.761606182594184,
          14.761606182594184
        ],
        [
          14.624004121026614,
          14.624004121026614
        ],
        [
          14.487412996532333,
          14.487412996532333
        ],
        [
          14.35179513633301,
          14.35179513633301
        ],
        [
          14.217114044113123,
          14.217114044113123
        ],
        [
          14.083334351855209,
          14.083334351855209
        ],
        [
          13.950421774428417,
          13.950421774428417
        ],
        [
          13.818343066773835,
          13.818343066773835
        ],
        [
          13.687065983541592,
          13.687065983541592
        ],
        [
          13.5565592410451,
          13.5565592410451
        ],
        [
          13.426792481407478,
          13.426792481407478
        ],
        [
          13.297736238784116,
          13.297736238784116
        ],
        [
          13.16936190755348,
          13.16936190755348
        ],
        [
          13.04164171237591,
          13.04164171237591
        ],
        [
          12.91454868002725,
          12.91454868002725
        ],
        [
          12.788056612920435,
          12.788056612920435
        ],
        [
          12.662140064234409,
          12.662140064234409
        ],
        [
          12.536774314575135,
          12.536774314575135
        ],
        [
          12.411935350098641,
          12.411935350098641
        ],
        [
          12.2875998420308,
          12.2875998420308
        ],
        [
          12.163745127522992,
          12.163745127522992
        ],
        [
          12.04034919178668,
          12.04034919178668
        ],
        [
          11.917390651453902,
          11.917390651453902
        ],
        [
          11.794848739113952,
          11.794848739113952
        ],
        [
          11.672703288979806,
          11.672703288979806
        ],
        [
          11.55093472364072,
          11.55093472364072
        ],
        [
          11.429524041860116,
          11.429524041860116
        ],
        [
          11.30845280738037,
          11.30845280738037
        ],
        [
          11.1877031386982,
          11.1877031386982
        ],
        [
          11.067257699776563,
          11.067257699776563
        ],
        [
          10.947099691660707,
          10.947099691660707
        ],
        [
          10.827212844967505,
          10.827212844967505
        ],
        [
          10.707581413218941,
          10.707581413218941
        ],
        [
          10.588190166991637,
          10.588190166991637
        ],
        [
          10.469024388855477,
          10.469024388855477
        ],
        [
          10.350069869075305,
          10.350069869075305
        ],
        [
          10.231312902050485,
          10.231312902050485
        ],
        [
          10.11274028346761,
          10.11274028346761
        ],
        [
          9.994339308142095,
          9.994339308142095
        ],
        [
          9.876097768524724,
          9.876097768524724
        ],
        [
          9.75800395384934,
          9.75800395384934
        ],
        [
          9.640046649897686,
          9.640046649897686
        ],
        [
          9.522215139357469,
          9.522215139357469
        ],
        [
          9.40449920274918,
          9.40449920274918
        ],
        [
          9.286889119896692,
          9.286889119896692
        ],
        [
          9.169375671916374,
          9.169375671916374
        ],
        [
          9.051950143698114,
          9.051950143698114
        ],
        [
          8.93460432685133,
          8.93460432685133
        ],
        [
          8.81733052308741,
          8.81733052308741
        ],
        [
          8.70012154800943,
          8.70012154800943
        ],
        [
          8.582970735278018,
          8.582970735278018
        ],
        [
          8.46587194112145,
          8.46587194112145
        ],
        [
          8.348819549155815,
          8.348819549155815
        ],
        [
          8.23180847548,
          8.23180847548
        ],
        [
          8.11483417400794,
          8.11483417400794
        ],
        [
          7.997892641999158,
          7.997892641999158
        ],
        [
          7.880980425746046,
          7.880980425746046
        ],
        [
          7.7640946263749715,
          7.7640946263749715
        ],
        [
          7.647232905715498,
          7.647232905715498
        ],
        [
          7.530393492190312,
          7.530393492190312
        ],
        [
          7.413575186676068,
          7.413575186676068
        ],
        [
          7.296777368283128,
          7.296777368283128
        ],
        [
          7.18,
          7.18
        ],
        [
          7.086189999880911,
          7.086189999880911
        ],
        [
          6.9940606999822,
          6.9940606999822
        ],
        [
          6.903555568535614,
          6.903555568535614
        ],
        [
          6.814620178858789,
          6.814620178858789
        ],
        [
          6.727202071538863,
          6.727202071538863
        ],
        [
          6.6412506232242015,
          6.6412506232242015
        ],
        [
          6.556716921249296,
          6.556716921249296
        ],
        [
          6.47355364334774,
          6.47355364334774
        ],
        [
          6.391714941731226,
          6.391714941731226
        ],
        [
          6.31115633082576,
          6.31115633082576
        ],
        [
          6.231834577961798,
          6.231834577961798
        ],
        [
          6.1537075963101575,
          6.1537075963101575
        ],
        [
          6.0767343393424795,
          6.0767343393424795
        ],
        [
          6.000874696069718,
          6.000874696069718
        ],
        [
          5.926089386276304,
          5.926089386276304
        ],
        [
          5.852339854918237,
          5.852339854918237
        ],
        [
          5.779588164787855,
          5.779588164787855
        ],
        [
          5.707796886467517,
          5.707796886467517
        ],
        [
          5.6369289844905195,
          5.6369289844905195
        ],
        [
          5.5669476985020285,
          5.5669476985020285
        ],
        [
          5.497816418057697,
          5.497816418057697
        ],
        [
          5.429498549507742,
          5.429498549507742
        ],
        [
          5.361957373184928,
          5.361957373184928
        ],
        [
          5.29515588883263,
          5.29515588883263
        ],
        [
          5.2290566468691315,
          5.2290566468691315
        ],
        [
          5.163621562665831,
          5.163621562665831
        ],
        [
          5.098811710508866,
          5.098811710508866
        ],
        [
          5.034587093290044,
          5.034587093290044
        ],
        [
          4.970906383205324,
          4.970906383205324
        ],
        [
          4.907726627796245,
          4.907726627796245
        ],
        [
          4.845002914499586,
          4.845002914499586
        ],
        [
          4.782687985418827,
          4.782687985418827
        ],
        [
          4.720731792220363,
          4.720731792220363
        ],
        [
          4.65908097878687,
          4.65908097878687
        ],
        [
          4.59767827640242,
          4.59767827640242
        ],
        [
          4.536461792629074,
          4.536461792629074
        ],
        [
          4.475364170436964,
          4.475364170436964
        ],
        [
          4.414311588273807,
          4.414311588273807
        ],
        [
          4.353222564211252,
          4.353222564211252
        ],
        [
          4.292006517552682,
          4.292006517552682
        ],
        [
          4.230562028622656,
          4.230562028622656
        ],
        [
          4.168774720928081,
          4.168774720928081
        ],
        [
          4.106514668184536,
          4.106514668184536
        ],
        [
          4.043633200105152,
          4.043633200105152
        ],
        [
          3.9799589429812716,
          3.9799589429812716
        ],
        [
          3.915292880780382,
          3.915292880780382
        ],
        [
          3.849402155519087,
          3.849402155519087
        ],
        [
          3.7820122365071125,
          3.7820122365071125
        ],
        [
          3.7127969697014978,
          3.7127969697014978
        ],
        [
          3.6413658625269676,
          3.6413658625269676
        ],
        [
          3.567247757453985,
          3.567247757453985
        ],
        [
          3.489869793475193,
          3.489869793475193
        ],
        [
          3.40853025294241,
          3.40853025294241
        ],
        [
          3.3223635749410896,
          3.3223635749410896
        ],
        [
          3.230295585390657,
          3.230295585390657
        ],
        [
          3.1309870952626824,
          3.1309870952626824
        ],
        [
          3.022765000158685,
          3.022765000158685
        ],
        [
          2.9035429970902507,
          2.9035429970902507
        ],
        [
          2.7707410897814033,
          2.7707410897814033
        ],
        [
          2.621227441136577,
          2.621227441136577
        ],
        [
          2.4513313301199493,
          2.4513313301199493
        ],
        [
          2.2570107680214075,
          2.2570107680214075
        ],
        [
          2.034284151376486,
          2.034284151376486
        ],
        [
          1.7799999999999998,
          1.7799999999999998
        ]
      ]
    },
    "9": {
      "label": "d9",
      "values": [
        [
          3.2,
          3.2
        ],
        [
          3.2999264793077026,
          3.2999264793077026
        ],
        [
          3.3980626930218345,
          3.3980626930218345
        ],
        [
          3.494445634751933,
          3.494445634751933
        ],
        [
          3.5891108919870613,
          3.5891108919870613
        ],
        [
          3.682092703737048,
          3.682092703737048
        ],
        [
          3.773424015057052,
          3.773424015057052
        ],
        [
          3.86313652864782,
          3.86313652864782
        ],
        [
          3.9512607537117397,
          3.9512607537117397
        ],
        [
          4.037826052231137,
          4.037826052231137
        ],
        [
          4.122860682824533,
          4.122860682824533
        ],
        [
          4.206391842325951,
          4.206391842325951
        ],
        [
          4.288445705222218,
          4.288445705222218
        ],
        [
          4.369047461074913,
          4.369047461074913
        ],
        [
          4.448221350044621,
          4.448221350044621
        ],
        [
          4.525990696628155,
          4.525990696628155
        ],
        [
          4.602377941712183,
          4.602377941712183
        ],
        [
          4.677404673039695,
          4.677404673039695
        ],
        [
          4.751091654180823,
          4.751091654180823
        ],
        [
          4.82345885209272,
          4.82345885209272
        ],
        [
          4.894525463349303,
          4.894525463349303
        ],
        [
          4.964309939115714,
          4.964309939115714
        ],
        [
          5.032830008939188,
          5.032830008939188
        ],
        [
          5.1001027034229605,
          5.1001027034229605
        ],
        [
          5.1661443758467005,
          5.1661443758467005
        ],
        [
          5.230970722793322,
          5.230970722793322
        ],
        [
          5.294596803838766,
          5.294596803838766
        ],
        [
          5.357037060358523,
          5.357037060358523
        ],
        [
          5.418305333501854,
          5.418305333501854
        ],
        [
          5.478414881382143,
          5.478414881382143
        ],
        [
          5.53737839552955,
          5.53737839552955
        ],
        [
          5.5952080166500044,
          5.5952080166500044
        ],
        [
          5.651915349732524,
          5.651915349732524
        ],
        [
          5.707511478544997,
          5.707511478544997
        ],
        [
          5.762006979557106,
          5.762006979557106
        ],
        [
          5.8154119353273845,
          5.8154119353273845
        ],
        [
          5.867735947389832,
          5.867735947389832
        ],
        [
          5.9189881486745435,
          5.9189881486745435
        ],
        [
          5.969177215495412,
          5.969177215495412
        ],
        [
          6.018311379136991,
          6.018311379136991
        ],
        [
          6.066398437071305,
          6.066398437071305
        ],
        [
          6.113445763835055,
          6.113445763835055
        ],
        [
          6.159460321596149,
          6.159460321596149
        ],
        [
          6.20444867043838,
          6.20444867043838
        ],
        [
          6.248416978391695,
          6.248416978391695
        ],
        [
          6.2913710312356255,
          6.2913710312356255
        ],
        [
          6.333316242101898,
          6.333316242101898
        ],
        [
          6.374257660902831,
          6.374257660902831
        ],
        [
          6.414199983610301,
          6.414199983610301
        ],
        [
          6.453147561410919,
          6.453147561410919
        ],
        [
          6.491104409761262,
          6.491104409761262
        ],
        [
          6.528074217367768,
          6.528074217367768
        ],
        [
          6.564060355114338,
          6.564060355114338
        ],
        [
          6.599065884961341,
          6.599065884961341
        ],
        [
          6.633093568837984,
          6.633093568837984
        ],
        [
          6.666145877550988,
          6.666145877550988
        ],
        [
          6.698224999730548,
          6.698224999730548
        ],
        [
          6.729332850835301,
          6.729332850835301
        ],
        [
          6.759471082236494,
          6.759471082236494
        ],
        [
          6.788641090401532,
          6.788641090401532
        ],
        [
          6.8168440261961365,
          6.8168440261961365
        ],
        [
          6.844080804323627,
          6.844080804323627
        ],
        [
          6.870352112919255,
          6.870352112919255
        ],
        [
          6.8956584233163145,
          6.8956584233163145
        ],
        [
          6.92,
          6.92
        ],
        [
          7.081400182750721,
          7.081400182750721
        ],
        [
          7.240684530529325,
          7.240684530529325
        ],
        [
          7.3979130655394,
          7.3979130655394
        ],
        [
          7.553143269885589,
          7.553143269885589
        ],
        [
          7.706430214723792,
          7.706430214723792
        ],
        [
          7.857826680563838,
          7.857826680563838
        ],
        [
          8.007383269330003,
          8.007383269330003
        ],
        [
          8.155148508722819,
          8.155148508722819
        ],
        [
          8.301168949370897,
          8.301168949370897
        ],
        [
          8.445489255208456,
          8.445489255208456
        ],
        [
          8.58815228746621,
          8.58815228746621
        ],
        [
          8.729199182615918,
          8.729199182615918
        ],
        [
          8.8686694245656,
          8.8686694245656
        ],
        [
          9.006600911358142,
          9.006600911358142
        ],
        [
          9.143030016584166,
          9.143030016584166
        ],
        [
          9.277991645677346,
          9.277991645677346
        ],
        [
          9.411519287216194,
          9.411519287216194
        ],
        [
          9.543645059312427,
          9.543645059312427
        ],
        [
          9.67439975111717,
          9.67439975111717
        ],
        [
          9.803812859425474,
          9.803812859425474
        ],
        [
          9.9319126203031,
          9.9319126203031
        ],
        [
          10.058726035596257,
          10.058726035596257
        ],
        [
          10.184278894114414,
          10.184278894114414
        ],
        [
          10.308595787192987,
          10.308595787192987
        ],
        [
          10.431700118248761,
          10.431700118248761
        ],
        [
          10.553614105826792,
          10.553614105826792
        ],
        [
          10.674358779504576,
          10.674358779504576
        ],
        [
          10.793953967858162,
          10.793953967858162
        ],
        [
          10.912418277499617,
          10.912418277499617
        ],
        [
          11.029769061957943,
          11.029769061957943
        ],
        [
          11.146022378882982,
          11.146022378882982
        ],
        [
          11.261192933690301,
          11.261192933690301
        ],
        [
          11.375294007314926,
          11.375294007314926
        ],
        [
          11.488337365178003,
          11.488337365178003
        ],
        [
          11.600333143759114,
          11.600333143759114
        ],
        [
          11.71128971026626,
          11.71128971026626
        ],
        [
          11.82121348974526,
          11.82121348974526
        ],
        [
          11.930108752494412,
          11.930108752494412
        ],
        [
          12.03797735274491,
          12.03797735274491
        ],
        [
          12.144818407090408,
          12.144818407090408
        ],
        [
          12.250627897911293,
          12.250627897911293
        ],
        [
          12.355398182779853,
          12.355398182779853
        ],
        [
          12.45911738519139,
          12.45911738519139
        ],
        [
          12.561768634456476,
          12.561768634456476
        ],
        [
          12.66332911252625,
          12.66332911252625
        ],
        [
          12.763768851971845,
          12.763768851971845
        ],
        [
          12.863049211005254,
          12.863049211005254
        ],
        [
          12.961120926542213,
          12.961120926542213
        ],
        [
          13.057921612472573,
          13.057921612472573
        ],
        [
          13.153372524368834,
          13.153372524368834
        ],
        [
          13.247374349874205,
          13.247374349874205
        ],
        [
          13.339801701492224,
          13.339801701492224
        ],
        [
          13.430495881561631,
          13.430495881561631
        ],
        [
          13.519255357715979,
          13.519255357715979
        ],
        [
          13.605823242425217,
          13.605823242425217
        ],
        [
          13.689870952602437,
          13.689870952602437
        ],
        [
          13.77097724086981,
          13.77097724086981
        ],
        [
          13.848602182109527,
          13.848602182109527
        ],
        [
          13.922056965961197,
          13.922056965961197
        ],
        [
          13.990473377422058,
          13.990473377422058
        ],
        [
          14.052782873481235,
          14.052782873481235
        ],
        [
          14.10772486926505,
          14.10772486926505
        ],
        [
          14.153914454083614,
          14.153914454083614
        ],
        [
          14.19,
          14.19
        ]
      ]
    },
    "11": {
      "label": "d11",
      "values": [
        [
          2.4,
          2.4
        ],
        [
          2.373096689129552,
          2.373096689129552
        ],
        [
          2.346893624383981,
          2.346893624383981
        ],
        [
          2.321393994221451,
          2.321393994221451
        ],
        [
          2.296601111480607,
          2.296601111480607
        ],
        [
          2.272518409929939,
          2.272518409929939
        ],
        [
          2.2491494408298243,
          2.2491494408298243
        ],
        [
          2.2264978694969706,
          2.2264978694969706
        ],
        [
          2.204567471859844,
          2.204567471859844
        ],
        [
          2.183362130995027,
          2.183362130995027
        ],
        [
          2.1628858336338737,
          2.1628858336338737
        ],
        [
          2.1431426666289495,
          2.1431426666289495
        ],
        [
          2.1241368133703027,
          2.1241368133703027
        ],
        [
          2.1058725501409716,
          2.1058725501409716
        ],
        [
          2.088354242401899,
          2.088354242401899
        ],
        [
          2.0715863409959328,
          2.0715863409959328
        ],
        [
          2.0555733782605667,
          2.0555733782605667
        ],
        [
          2.0403199640398704,
          2.0403199640398704
        ],
        [
          2.0258307815847676,
          2.0258307815847676
        ],
        [
          2.012110583332144,
          2.012110583332144
        ],
        [
          1.9991641865520564,
          1.9991641865520564
        ],
        [
          1.9869964688534825,
          1.9869964688534825
        ],
        [
          1.975612363537818,
          1.975612363537818
        ],
        [
          1.9650168547903588,
          1.9650168547903588
        ],
        [
          1.955214972699395,
          1.955214972699395
        ],
        [
          1.9462117880927245,
          1.9462117880927245
        ],
        [
          1.938012407181429,
          1.938012407181429
        ],
        [
          1.9306219660007566,
          1.9306219660007566
        ],
        [
          1.9240456246380282,
          1.9240456246380282
        ],
        [
          1.9182885612374863,
          1.9182885612374863
        ],
        [
          1.913355965772249,
          1.913355965772249
        ],
        [
          1.90925303357343,
          1.90925303357343
        ],
        [
          1.9059849586067692,
          1.9059849586067692
        ],
        [
          1.9035569264874985,
          1.9035569264874985
        ],
        [
          1.9019741072239513,
          1.9019741072239513
        ],
        [
          1.9012416476809777,
          1.9012416476809777
        ],
        [
          1.9013646637546917,
          1.9013646637546917
        ],
        [
          1.9023482322501513,
          1.9023482322501513
        ],
        [
          1.9041973824541003,
          1.9041973824541003
        ],
        [
          1.906917087395398,
          1.906917087395398
        ],
        [
          1.9105122547866,
          1.9105122547866
        ],
        [
          1.9149877176402197,
          1.9149877176402197
        ],
        [
          1.9203482245545103,
          1.9203482245545103
        ],
        [
          1.9265984296639327,
          1.9265984296639327
        ],
        [
          1.9337428822508342,
          1.9337428822508342
        ],
        [
          1.941786016015192,
          1.941786016015192
        ],
        [
          1.9507321380014107,
          1.9507321380014107
        ],
        [
          1.9605854171807953,
          1.9605854171807953
        ],
        [
          1.9713498726915843,
          1.9713498726915843
        ],
        [
          1.9830293617377497,
          1.9830293617377497
        ],
        [
          1.9956275671513275,
          1.9956275671513275
        ],
        [
          2.009147984622805,
          2.009147984622805
        ],
        [
          2.023593909607644,
          2.023593909607644
        ],
        [
          2.03896842391721,
          2.03896842391721
        ],
        [
          2.055274382006199,
          2.055274382006199
        ],
        [
          2.072514396969013,
          2.072514396969013
        ],
        [
          2.090690826261512,
          2.090690826261512
        ],
        [
          2.1098057571655415,
          2.1098057571655415
        ],
        [
          2.12986099201746,
          2.12986099201746
        ],
        [
          2.1508580332234946,
          2.1508580332234946
        ],
        [
          2.1727980680883645,
          2.1727980680883645
        ],
        [
          2.1956819534860603,
          2.1956819534860603
        ],
        [
          2.219510200404677,
          2.219510200404677
        ],
        [
          2.2442829584005564,
          2.2442829584005564
        ],
        [
          2.27,
          2.27
        ],
        [
          2.2277223173683676,
          2.2277223173683676
        ],
        [
          2.185879769488474,
          2.185879769488474
        ],
        [
          2.144468865924985,
          2.144468865924985
        ],
        [
          2.103486551255622,
          2.103486551255622
        ],
        [
          2.0629302137373444,
          2.0629302137373444
        ],
        [
          2.0227976962119603,
          2.0227976962119603
        ],
        [
          1.9830873094207018,
          1.9830873094207018
        ],
        [
          1.9437978479294395,
          1.9437978479294395
        ],
        [
          1.9049286088978765,
          1.9049286088978765
        ],
        [
          1.8664794139657848,
          1.8664794139657848
        ],
        [
          1.8284506345719915,
          1.8284506345719915
        ],
        [
          1.790843221073925,
          1.790843221073925
        ],
        [
          1.7536587360919216,
          1.7536587360919216
        ],
        [
          1.7168993925721399,
          1.7168993925721399
        ],
        [
          1.680568097139528,
          1.680568097139528
        ],
        [
          1.6446684994044154,
          1.6446684994044154
        ],
        [
          1.6092050479959494,
          1.6092050479959494
        ],
        [
          1.5741830542200566,
          1.5741830542200566
        ],
        [
          1.539608764392312,
          1.539608764392312
        ],
        [
          1.5054894420724971,
          1.5054894420724971
        ],
        [
          1.471833461639202,
          1.471833461639202
        ],
        [
          1.4386504148960013,
          1.4386504148960013
        ],
        [
          1.4059512327006565,
          1.4059512327006565
        ],
        [
          1.3737483239743828,
          1.3737483239743828
        ],
        [
          1.3420557348821058,
          1.3420557348821058
        ],
        [
          1.3108893315073757,
          1.3108893315073757
        ],
        [
          1.280267009986558,
          1.280267009986558
        ],
        [
          1.2502089388517952,
          1.2502089388517952
        ],
        [
          1.2207378392950599,
          1.2207378392950599
        ],
        [
          1.1918793102458136,
          1.1918793102458136
        ],
        [
          1.1636622066174307,
          1.1636622066174307
        ],
        [
          1.136119080890871,
          1.136119080890871
        ],
        [
          1.1092867004647105,
          1.1092867004647105
        ],
        [
          1.0832066560351252,
          1.0832066560351252
        ],
        [
          1.0579260798384635,
          1.0579260798384635
        ],
        [
          1.033498497104664,
          1.033498497104664
        ],
        [
          1.0099848398177755,
          1.0099848398177755
        ],
        [
          0.9874546592317812,
          0.9874546592317812
        ],
        [
          0.9659875830438382,
          0.9659875830438382
        ],
        [
          0.9456750753569092,
          0.9456750753569092
        ],
        [
          0.9266225734660489,
          0.9266225734660489
        ],
        [
          0.9089520962920656,
          0.9089520962920656
        ],
        [
          0.8928054466240725,
          0.8928054466240725
        ],
        [
          0.8783481654383718,
          0.8783481654383718
        ],
        [
          0.8657744444924764,
          0.8657744444924764
        ],
        [
          0.8553132672477739,
          0.8553132672477739
        ],
        [
          0.8472361334756573,
          0.8472361334756573
        ],
        [
          0.8418668369506763,
          0.8418668369506763
        ],
        [
          0.839593917825926,
          0.839593917825926
        ],
        [
          0.8408866131041979,
          0.8408866131041979
        ],
        [
          0.8463153926718088,
          0.8463153926718088
        ],
        [
          0.8565785050325816,
          0.8565785050325816
        ],
        [
          0.8725363654959579,
          0.8725363654959579
        ],
        [
          0.8952560673429322,
          0.8952560673429322
        ],
        [
          0.9260686721841238,
          0.9260686721841238
        ],
        [
          0.9666419521348812,
          0.9666419521348812
        ],
        [
          1.019070258971503,
          1.019070258971503
        ],
        [
          1.0859798208002212,
          1.0859798208002212
        ],
        [
          1.1706394442573995,
          1.1706394442573995
        ],
        [
          1.2770491814413643,
          1.2770491814413643
        ],
        [
          1.409948296398814,
          1.409948296398814
        ],
        [
          1.5746393627135422,
          1.5746393627135422
        ],
        [
          1.7764888945398964,
          1.7764888945398964
        ],
        [
          2.02,
          2.02
        ]
      ]
    }
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
