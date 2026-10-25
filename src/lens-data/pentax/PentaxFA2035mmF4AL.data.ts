import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-fa-20-35mm-f4-al",
  "maker": "Pentax",
  "name": "PENTAX SMC FA 20-35mm f/4 AL",
  "subtitle": "US 6,246,529 B1 — Example 5; inferred continuous zoom path",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "10 ELEMENTS / 8 GROUPS",
      "DESIGN f = 20.60-34.01 mm",
      "DESIGN F/4",
      "2 ASPHERICAL SURFACES / 2 ELEMENTS (1 HYBRID)"
    ],
    "elementCount": 10,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": [
        20,
        35
      ],
      "design": [
        20.603183309270964,
        34.01115328433953
      ]
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    }
  },
  "source": {
    "patentNumber": "US 6,246,529 B1",
    "example": { "label": "Example 5", "id": "5" },
    "patentYear": 2001,
    "authors": [
      "Takayuki Sensui"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Physical element 1",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "focalLengthMm": -35.0846234981279,
      "glass": "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Native material segment; standalone air focal length does not express its cemented or in-situ power."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Physical element 2",
      "type": "Negative Meniscus",
      "nd": 1.804,
      "vd": 46.6,
      "indexReference": "d",
      "focalLengthMm": -47.24823990417244,
      "glass": "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Native material segment; standalone air focal length does not express its cemented or in-situ power.",
      "cemented": "HYBRID"
    },
    {
      "id": 3,
      "name": "L2R",
      "label": "Hybrid resin layer",
      "type": "Negative Meniscus",
      "nd": 1.53256,
      "vd": 45.9,
      "indexReference": "d",
      "focalLengthMm": -183.77490988630186,
      "glass": "Unmatched (patent resin; supplier unconfirmed)",
      "role": "Native material segment; standalone air focal length does not express its cemented or in-situ power.",
      "cemented": "HYBRID"
    },
    {
      "id": 4,
      "name": "L3",
      "label": "Physical element 3",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "focalLengthMm": 76.9056719815398,
      "glass": "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Native material segment; standalone air focal length does not express its cemented or in-situ power."
    },
    {
      "id": 5,
      "name": "L4",
      "label": "Physical element 4",
      "type": "Biconvex Positive",
      "nd": 1.51742,
      "vd": 52.4,
      "indexReference": "d",
      "focalLengthMm": 32.9606513464054,
      "glass": "S-NSL36 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Native material segment; standalone air focal length does not express its cemented or in-situ power.",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L5",
      "label": "Physical element 5",
      "type": "Negative Meniscus",
      "nd": 1.804,
      "vd": 46.6,
      "indexReference": "d",
      "focalLengthMm": -50.1520691279464,
      "glass": "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Native material segment; standalone air focal length does not express its cemented or in-situ power.",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "L6",
      "label": "Physical element 6",
      "type": "Plano-convex Positive",
      "nd": 1.61772,
      "vd": 49.8,
      "indexReference": "d",
      "focalLengthMm": 53.76060350967903,
      "glass": "S-BSM28 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Native material segment; standalone air focal length does not express its cemented or in-situ power."
    },
    {
      "id": 8,
      "name": "L7",
      "label": "Physical element 7",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.2,
      "indexReference": "d",
      "focalLengthMm": 25.97402009804842,
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Native material segment; standalone air focal length does not express its cemented or in-situ power.",
      "cemented": "D2"
    },
    {
      "id": 9,
      "name": "L8",
      "label": "Physical element 8",
      "type": "Biconcave Negative",
      "nd": 1.8061,
      "vd": 40.9,
      "indexReference": "d",
      "focalLengthMm": -25.53386972420641,
      "glass": "S-LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Native material segment; standalone air focal length does not express its cemented or in-situ power.",
      "cemented": "D2"
    },
    {
      "id": 10,
      "name": "L9",
      "label": "Physical element 9",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "focalLengthMm": -49.3670331338058,
      "glass": "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Native material segment; standalone air focal length does not express its cemented or in-situ power."
    },
    {
      "id": 11,
      "name": "L10",
      "label": "Physical element 10",
      "type": "Positive Meniscus",
      "nd": 1.58913,
      "vd": 61.2,
      "indexReference": "d",
      "focalLengthMm": 43.954356462003815,
      "glass": "J-SK5 (HIKARI catalog equivalent; production supplier unspecified)",
      "role": "Native material segment; standalone air focal length does not express its cemented or in-situ power."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 54.9,
      "d": 1.5,
      "sd": 17.6,
      "medium": 1
    },
    {
      "label": "2",
      "R": 17.929,
      "d": 7.3,
      "sd": 14.3
    },
    {
      "label": "3",
      "R": 71.7,
      "d": 1.5,
      "sd": 14,
      "medium": 2
    },
    {
      "label": "4",
      "R": 24.6,
      "d": 0.28,
      "sd": 14,
      "medium": 3
    },
    {
      "label": "5A",
      "R": 19.581,
      "d": 8.93,
      "sd": 14,
      "asphere": {
        "K": -1,
        "A4": -0.00000967,
        "A6": -1.87e-8,
        "A8": -8.47e-11
      }
    },
    {
      "label": "6",
      "R": 37.35,
      "d": 3.05,
      "sd": 12.3,
      "medium": 4
    },
    {
      "label": "7",
      "R": 84.318,
      "sd": 12.3
    },
    {
      "label": "8",
      "R": 56.405,
      "d": 5,
      "sd": 8.9,
      "medium": 5
    },
    {
      "label": "9",
      "R": -23.707,
      "d": 1.5,
      "sd": 8.9,
      "medium": 6
    },
    {
      "label": "10",
      "R": -59.155,
      "sd": 8.9
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.7
    },
    {
      "label": "11",
      "R": "flat",
      "d": 2.73,
      "sd": 9,
      "medium": 7
    },
    {
      "label": "12",
      "R": -33.209,
      "d": 0.1,
      "sd": 9
    },
    {
      "label": "13",
      "R": 24.406,
      "d": 5.4,
      "sd": 8.7,
      "medium": 8
    },
    {
      "label": "14",
      "R": -24.406,
      "d": 1.5,
      "sd": 8.7,
      "medium": 9
    },
    {
      "label": "15",
      "R": 135,
      "d": 8.38,
      "sd": 8.7
    },
    {
      "label": "16",
      "R": 46.238,
      "d": 2.08,
      "sd": 7.1,
      "medium": 10
    },
    {
      "label": "17",
      "R": 21.5,
      "d": 1.73,
      "sd": 7.1
    },
    {
      "label": "18",
      "R": -139,
      "d": 3,
      "sd": 7.5,
      "medium": 11
    },
    {
      "label": "19A",
      "R": -22.003,
      "sd": 7.9,
      "asphere": {
        "A4": 0.00000253,
        "A6": -6.23e-9,
        "A8": -2.97e-10
      }
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 20.6,
        "label": "Wide"
      },
      {
        "published": false,
        "focalLengthMm": 20.666649391701803
      },
      {
        "published": false,
        "focalLengthMm": 20.730151391307523
      },
      {
        "published": false,
        "focalLengthMm": 20.793689308217246
      },
      {
        "published": false,
        "focalLengthMm": 20.85726314238818
      },
      {
        "published": false,
        "focalLengthMm": 20.920872893820306
      },
      {
        "published": false,
        "focalLengthMm": 20.98451856251358
      },
      {
        "published": false,
        "focalLengthMm": 21.048200148468084
      },
      {
        "published": false,
        "focalLengthMm": 21.11191765168376
      },
      {
        "published": false,
        "focalLengthMm": 21.175671072160615
      },
      {
        "published": false,
        "focalLengthMm": 21.239460409898676
      },
      {
        "published": false,
        "focalLengthMm": 21.3032856648979
      },
      {
        "published": false,
        "focalLengthMm": 21.367146837158344
      },
      {
        "published": false,
        "focalLengthMm": 21.431043926679934
      },
      {
        "published": false,
        "focalLengthMm": 21.49497693346278
      },
      {
        "published": false,
        "focalLengthMm": 21.55894585750678
      },
      {
        "published": false,
        "focalLengthMm": 21.622950698812023
      },
      {
        "published": false,
        "focalLengthMm": 21.686991457378515
      },
      {
        "published": false,
        "focalLengthMm": 21.751068133206186
      },
      {
        "published": false,
        "focalLengthMm": 21.815180726295203
      },
      {
        "published": false,
        "focalLengthMm": 21.879329236645432
      },
      {
        "published": false,
        "focalLengthMm": 21.943513664257047
      },
      {
        "published": false,
        "focalLengthMm": 22.00773400912997
      },
      {
        "published": false,
        "focalLengthMm": 22.071990271264298
      },
      {
        "published": false,
        "focalLengthMm": 22.13628245066005
      },
      {
        "published": false,
        "focalLengthMm": 22.20061054731734
      },
      {
        "published": false,
        "focalLengthMm": 22.26497456123618
      },
      {
        "published": false,
        "focalLengthMm": 22.329374492416644
      },
      {
        "published": false,
        "focalLengthMm": 22.393810340858895
      },
      {
        "published": false,
        "focalLengthMm": 22.458282106562947
      },
      {
        "published": false,
        "focalLengthMm": 22.522789789528936
      },
      {
        "published": false,
        "focalLengthMm": 22.587333389756925
      },
      {
        "published": false,
        "focalLengthMm": 22.651912907247134
      },
      {
        "published": false,
        "focalLengthMm": 22.716528341999666
      },
      {
        "published": false,
        "focalLengthMm": 22.78117969401465
      },
      {
        "published": false,
        "focalLengthMm": 22.845866963292202
      },
      {
        "published": false,
        "focalLengthMm": 22.910590149832625
      },
      {
        "published": false,
        "focalLengthMm": 22.975349253553986
      },
      {
        "published": false,
        "focalLengthMm": 23.040144274605208
      },
      {
        "published": false,
        "focalLengthMm": 23.104975212917623
      },
      {
        "published": false,
        "focalLengthMm": 23.16984206849123
      },
      {
        "published": false,
        "focalLengthMm": 23.234744841326048
      },
      {
        "published": false,
        "focalLengthMm": 23.299683531422037
      },
      {
        "published": false,
        "focalLengthMm": 23.364658138779212
      },
      {
        "published": false,
        "focalLengthMm": 23.429668663397532
      },
      {
        "published": false,
        "focalLengthMm": 23.494715105277066
      },
      {
        "published": false,
        "focalLengthMm": 23.559797464417827
      },
      {
        "published": false,
        "focalLengthMm": 23.62491574081973
      },
      {
        "published": false,
        "focalLengthMm": 23.6900699344828
      },
      {
        "published": false,
        "focalLengthMm": 23.755260045407116
      },
      {
        "published": false,
        "focalLengthMm": 23.820486073592576
      },
      {
        "published": false,
        "focalLengthMm": 23.885748019039237
      },
      {
        "published": false,
        "focalLengthMm": 23.95104588174709
      },
      {
        "published": false,
        "focalLengthMm": 24.01637966171611
      },
      {
        "published": false,
        "focalLengthMm": 24.081749358946308
      },
      {
        "published": false,
        "focalLengthMm": 24.1471549734377
      },
      {
        "published": false,
        "focalLengthMm": 24.212596505190284
      },
      {
        "published": false,
        "focalLengthMm": 24.278073954204036
      },
      {
        "published": false,
        "focalLengthMm": 24.343587320479013
      },
      {
        "published": false,
        "focalLengthMm": 24.40913660401517
      },
      {
        "published": false,
        "focalLengthMm": 24.474721804812457
      },
      {
        "published": false,
        "focalLengthMm": 24.54034292287101
      },
      {
        "published": false,
        "focalLengthMm": 24.60599995819067
      },
      {
        "published": false,
        "focalLengthMm": 24.671692910771565
      },
      {
        "published": false,
        "focalLengthMm": 24.73742178061365
      },
      {
        "published": false,
        "focalLengthMm": 24.803186567716896
      },
      {
        "published": false,
        "focalLengthMm": 24.86898727208134
      },
      {
        "published": false,
        "focalLengthMm": 24.934823893706966
      },
      {
        "published": false,
        "focalLengthMm": 25.000696432593784
      },
      {
        "published": false,
        "focalLengthMm": 25.066604888741768
      },
      {
        "published": false,
        "focalLengthMm": 25.132549262150967
      },
      {
        "published": false,
        "focalLengthMm": 25.198529552821302
      },
      {
        "published": false,
        "focalLengthMm": 25.264545760752856
      },
      {
        "published": false,
        "focalLengthMm": 25.33059788594561
      },
      {
        "published": false,
        "focalLengthMm": 25.396685928399524
      },
      {
        "published": false,
        "focalLengthMm": 25.462809888114656
      },
      {
        "published": false,
        "focalLengthMm": 25.528969765090938
      },
      {
        "published": false,
        "focalLengthMm": 25.595165559328425
      },
      {
        "published": false,
        "focalLengthMm": 25.66139727082708
      },
      {
        "published": false,
        "focalLengthMm": 25.727664899586955
      },
      {
        "published": false,
        "focalLengthMm": 25.79396844560799
      },
      {
        "published": false,
        "focalLengthMm": 25.860307908890235
      },
      {
        "published": false,
        "focalLengthMm": 25.926683289500932
      },
      {
        "published": false,
        "focalLengthMm": 25.99309458729101
      },
      {
        "published": false,
        "focalLengthMm": 26.05954180234682
      },
      {
        "published": false,
        "focalLengthMm": 26.12602493466676
      },
      {
        "published": false,
        "focalLengthMm": 26.19254398425031
      },
      {
        "published": false,
        "focalLengthMm": 26.259098951096906
      },
      {
        "published": false,
        "focalLengthMm": 26.325689835206088
      },
      {
        "published": false,
        "focalLengthMm": 26.392316636577977
      },
      {
        "published": false,
        "focalLengthMm": 26.458979355212403
      },
      {
        "published": false,
        "focalLengthMm": 26.52567799110966
      },
      {
        "published": false,
        "focalLengthMm": 26.59241254426996
      },
      {
        "published": false,
        "focalLengthMm": 26.659183014694115
      },
      {
        "published": false,
        "focalLengthMm": 26.72598940238269
      },
      {
        "published": false,
        "focalLengthMm": 26.792831707337356
      },
      {
        "published": false,
        "focalLengthMm": 26.85970992946586
      },
      {
        "published": false,
        "focalLengthMm": 26.926624068927072
      },
      {
        "published": false,
        "focalLengthMm": 26.993574125649463
      },
      {
        "published": false,
        "focalLengthMm": 27.060560099633015
      },
      {
        "published": false,
        "focalLengthMm": 27.127581990877786
      },
      {
        "published": false,
        "focalLengthMm": 27.194639799383694
      },
      {
        "published": false,
        "focalLengthMm": 27.26173352515086
      },
      {
        "published": false,
        "focalLengthMm": 27.328863168179115
      },
      {
        "published": false,
        "focalLengthMm": 27.396028728468618
      },
      {
        "published": false,
        "focalLengthMm": 27.46323020601929
      },
      {
        "published": false,
        "focalLengthMm": 27.530467600831187
      },
      {
        "published": false,
        "focalLengthMm": 27.597740912904264
      },
      {
        "published": false,
        "focalLengthMm": 27.665050142238503
      },
      {
        "published": false,
        "focalLengthMm": 27.73239528883389
      },
      {
        "published": false,
        "focalLengthMm": 27.79977635269052
      },
      {
        "published": false,
        "focalLengthMm": 27.867193333808356
      },
      {
        "published": false,
        "focalLengthMm": 27.934646232187283
      },
      {
        "published": false,
        "focalLengthMm": 28.002135047827455
      },
      {
        "published": false,
        "focalLengthMm": 28.069659780728806
      },
      {
        "published": false,
        "focalLengthMm": 28.13722043089134
      },
      {
        "published": false,
        "focalLengthMm": 28.204816998315078
      },
      {
        "published": false,
        "focalLengthMm": 28.272449482999985
      },
      {
        "published": false,
        "focalLengthMm": 28.340117884946086
      },
      {
        "published": false,
        "focalLengthMm": 28.407822204153348
      },
      {
        "published": false,
        "focalLengthMm": 28.475562440621836
      },
      {
        "published": false,
        "focalLengthMm": 28.54333859435147
      },
      {
        "published": false,
        "focalLengthMm": 28.61115066534234
      },
      {
        "published": false,
        "focalLengthMm": 28.678998653594338
      },
      {
        "published": false,
        "focalLengthMm": 28.746882559107533
      },
      {
        "published": false,
        "focalLengthMm": 28.814802381881975
      },
      {
        "published": false,
        "focalLengthMm": 28.882758121917547
      },
      {
        "published": false,
        "focalLengthMm": 28.9507497792143
      },
      {
        "published": false,
        "focalLengthMm": 29.01877735377225
      },
      {
        "published": false,
        "focalLengthMm": 29.08684084559139
      },
      {
        "published": false,
        "focalLengthMm": 29.15494025467171
      },
      {
        "published": false,
        "focalLengthMm": 29.223075581013237
      },
      {
        "published": false,
        "focalLengthMm": 29.291246824615932
      },
      {
        "published": false,
        "focalLengthMm": 29.35945398547981
      },
      {
        "published": false,
        "focalLengthMm": 29.427697063604864
      },
      {
        "published": false,
        "focalLengthMm": 29.49597605899114
      },
      {
        "published": false,
        "focalLengthMm": 29.564290971638577
      },
      {
        "published": false,
        "focalLengthMm": 29.632641801547173
      },
      {
        "published": false,
        "focalLengthMm": 29.701028548716987
      },
      {
        "published": false,
        "focalLengthMm": 29.769451213147967
      },
      {
        "published": false,
        "focalLengthMm": 29.83790979484017
      },
      {
        "published": false,
        "focalLengthMm": 29.906404293793525
      },
      {
        "published": false,
        "focalLengthMm": 29.974934710008093
      },
      {
        "published": false,
        "focalLengthMm": 30.043501043483797
      },
      {
        "published": false,
        "focalLengthMm": 30.112103294220727
      },
      {
        "published": false,
        "focalLengthMm": 30.180741462218823
      },
      {
        "published": false,
        "focalLengthMm": 30.24941554747815
      },
      {
        "published": false,
        "focalLengthMm": 30.318125549998605
      },
      {
        "published": false,
        "focalLengthMm": 30.38687146978032
      },
      {
        "published": false,
        "focalLengthMm": 30.455653306823187
      },
      {
        "published": false,
        "focalLengthMm": 30.524471061127176
      },
      {
        "published": false,
        "focalLengthMm": 30.593324732692427
      },
      {
        "published": false,
        "focalLengthMm": 30.662214321518807
      },
      {
        "published": false,
        "focalLengthMm": 30.731139827606448
      },
      {
        "published": false,
        "focalLengthMm": 30.80010125095517
      },
      {
        "published": false,
        "focalLengthMm": 30.86909859156514
      },
      {
        "published": false,
        "focalLengthMm": 30.938131849436356
      },
      {
        "published": false,
        "focalLengthMm": 31.00720102456864
      },
      {
        "published": false,
        "focalLengthMm": 31.076306116962183
      },
      {
        "published": false,
        "focalLengthMm": 31.14544712661686
      },
      {
        "published": false,
        "focalLengthMm": 31.214624053532795
      },
      {
        "published": false,
        "focalLengthMm": 31.283836897709868
      },
      {
        "published": false,
        "focalLengthMm": 31.35308565914815
      },
      {
        "published": false,
        "focalLengthMm": 31.422370337847575
      },
      {
        "published": false,
        "focalLengthMm": 31.49169093380821
      },
      {
        "published": false,
        "focalLengthMm": 31.56104744703004
      },
      {
        "published": false,
        "focalLengthMm": 31.630439877513066
      },
      {
        "published": false,
        "focalLengthMm": 31.699868225257223
      },
      {
        "published": false,
        "focalLengthMm": 31.769332490340652
      },
      {
        "published": false,
        "focalLengthMm": 31.83883267259295
      },
      {
        "published": false,
        "focalLengthMm": 31.90836877210872
      },
      {
        "published": false,
        "focalLengthMm": 31.97794078888744
      },
      {
        "published": false,
        "focalLengthMm": 32.0475487229292
      },
      {
        "published": false,
        "focalLengthMm": 32.11719257423348
      },
      {
        "published": false,
        "focalLengthMm": 32.18687234280016
      },
      {
        "published": false,
        "focalLengthMm": 32.256588028629125
      },
      {
        "published": false,
        "focalLengthMm": 32.32633963172021
      },
      {
        "published": false,
        "focalLengthMm": 32.396127152073284
      },
      {
        "published": false,
        "focalLengthMm": 32.46595058968822
      },
      {
        "published": false,
        "focalLengthMm": 32.535809944564804
      },
      {
        "published": false,
        "focalLengthMm": 32.60570521670306
      },
      {
        "published": false,
        "focalLengthMm": 32.67563640610285
      },
      {
        "published": false,
        "focalLengthMm": 32.74560351276405
      },
      {
        "published": false,
        "focalLengthMm": 32.8156065366867
      },
      {
        "published": false,
        "focalLengthMm": 32.885645477870646
      },
      {
        "published": false,
        "focalLengthMm": 32.9557203363159
      },
      {
        "published": false,
        "focalLengthMm": 33.025831112022466
      },
      {
        "published": false,
        "focalLengthMm": 33.095977804990284
      },
      {
        "published": false,
        "focalLengthMm": 33.166160415219295
      },
      {
        "published": false,
        "focalLengthMm": 33.23637894270953
      },
      {
        "published": false,
        "focalLengthMm": 33.306633387460984
      },
      {
        "published": false,
        "focalLengthMm": 33.37692374947364
      },
      {
        "published": false,
        "focalLengthMm": 33.44725002874742
      },
      {
        "published": false,
        "focalLengthMm": 33.517612225282484
      },
      {
        "published": false,
        "focalLengthMm": 33.588010339078686
      },
      {
        "published": false,
        "focalLengthMm": 33.6584443701361
      },
      {
        "published": false,
        "focalLengthMm": 33.728914318454656
      },
      {
        "published": false,
        "focalLengthMm": 33.79942018403442
      },
      {
        "published": false,
        "focalLengthMm": 33.86996196687536
      },
      {
        "published": false,
        "focalLengthMm": 33.940539666977514
      },
      {
        "focalLengthMm": 34.01,
        "label": "Tele"
      }
    ],
    "apertureModel": "from-nominal-fno",
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.3,
    "description": "The patent prints infinity spacings at wide and tele only; focusing is not modeled. The intermediate zoom positions are an inferred reconstruction, not the factory cam: the G2–stop spacing and the back focus follow linear laws between the printed stations and the G1–G2 spacing is solved for infinity focus at each position. The marketed minimum focus distance is 0.3 m."
  },
  "gaps": {
    "7": {
      "label": "G1–G2",
      "values": [
        [
          14.851,
          14.851
        ],
        [
          14.733152600205383,
          14.733152600205383
        ],
        [
          14.616082504116932,
          14.616082504116932
        ],
        [
          14.499783196689897,
          14.499783196689897
        ],
        [
          14.384248234620033,
          14.384248234620033
        ],
        [
          14.269471244942132,
          14.269471244942132
        ],
        [
          14.155445924157734,
          14.155445924157734
        ],
        [
          14.042166037292922,
          14.042166037292922
        ],
        [
          13.929625416971856,
          13.929625416971856
        ],
        [
          13.81781796250465,
          13.81781796250465
        ],
        [
          13.70673763899026,
          13.70673763899026
        ],
        [
          13.596378476434035,
          13.596378476434035
        ],
        [
          13.486734568878962,
          13.486734568878962
        ],
        [
          13.377800073551317,
          13.377800073551317
        ],
        [
          13.269569210019394,
          13.269569210019394
        ],
        [
          13.162036259366351,
          13.162036259366351
        ],
        [
          13.055195563375374,
          13.055195563375374
        ],
        [
          12.94904152372854,
          12.94904152372854
        ],
        [
          12.843568601217804,
          12.843568601217804
        ],
        [
          12.738771314968329,
          12.738771314968329
        ],
        [
          12.63464424167495,
          12.63464424167495
        ],
        [
          12.531182014849042,
          12.531182014849042
        ],
        [
          12.428379324078932,
          12.428379324078932
        ],
        [
          12.32623091430022,
          12.32623091430022
        ],
        [
          12.224731585078802,
          12.224731585078802
        ],
        [
          12.123876189903848,
          12.123876189903848
        ],
        [
          12.023659635492834,
          12.023659635492834
        ],
        [
          11.924076881106364,
          11.924076881106364
        ],
        [
          11.825122937873887,
          11.825122937873887
        ],
        [
          11.726792868130243,
          11.726792868130243
        ],
        [
          11.6290817847615,
          11.6290817847615
        ],
        [
          11.531984850561418,
          11.531984850561418
        ],
        [
          11.435497277597259,
          11.435497277597259
        ],
        [
          11.339614326585943,
          11.339614326585943
        ],
        [
          11.244331306278898,
          11.244331306278898
        ],
        [
          11.149643572856633,
          11.149643572856633
        ],
        [
          11.05554652933203,
          11.05554652933203
        ],
        [
          10.962035625094911,
          10.962035625094911
        ],
        [
          10.869106354831203,
          10.869106354831203
        ],
        [
          10.77675425867335,
          10.77675425867335
        ],
        [
          10.68497492117853,
          10.68497492117853
        ],
        [
          10.593763970886076,
          10.593763970886076
        ],
        [
          10.503117079772705,
          10.503117079772705
        ],
        [
          10.413029962715596,
          10.413029962715596
        ],
        [
          10.323498376963823,
          10.323498376963823
        ],
        [
          10.234518121616873,
          10.234518121616873
        ],
        [
          10.146085037111796,
          10.146085037111796
        ],
        [
          10.058195004717131,
          10.058195004717131
        ],
        [
          9.970843946034421,
          9.970843946034421
        ],
        [
          9.88402782250703,
          9.88402782250703
        ],
        [
          9.797742634936503,
          9.797742634936503
        ],
        [
          9.711984423005152,
          9.711984423005152
        ],
        [
          9.626749264806364,
          9.626749264806364
        ],
        [
          9.54203327638125,
          9.54203327638125
        ],
        [
          9.457832611262033,
          9.457832611262033
        ],
        [
          9.374143460022129,
          9.374143460022129
        ],
        [
          9.290962049832638,
          9.290962049832638
        ],
        [
          9.208284644025268,
          9.208284644025268
        ],
        [
          9.126107541661149,
          9.126107541661149
        ],
        [
          9.044427077106473,
          9.044427077106473
        ],
        [
          8.963239619613457,
          8.963239619613457
        ],
        [
          8.882541572907538,
          8.882541572907538
        ],
        [
          8.802329374780863,
          8.802329374780863
        ],
        [
          8.722599496690444,
          8.722599496690444
        ],
        [
          8.643348443363289,
          8.643348443363289
        ],
        [
          8.564572752405978,
          8.564572752405978
        ],
        [
          8.486268993920312,
          8.486268993920312
        ],
        [
          8.40843377012426,
          8.40843377012426
        ],
        [
          8.331063714977981,
          8.331063714977981
        ],
        [
          8.25415549381542,
          8.25415549381542
        ],
        [
          8.177705802980476,
          8.177705802980476
        ],
        [
          8.101711369469038,
          8.101711369469038
        ],
        [
          8.026168950574919,
          8.026168950574919
        ],
        [
          7.951075333541646,
          7.951075333541646
        ],
        [
          7.87642733521854,
          7.87642733521854
        ],
        [
          7.802221801721528,
          7.802221801721528
        ],
        [
          7.728455608098847,
          7.728455608098847
        ],
        [
          7.655125658000994,
          7.655125658000994
        ],
        [
          7.582228883355493,
          7.582228883355493
        ],
        [
          7.5097622440458505,
          7.5097622440458505
        ],
        [
          7.437722727595122,
          7.437722727595122
        ],
        [
          7.366107348853447,
          7.366107348853447
        ],
        [
          7.2949131496066055,
          7.2949131496066055
        ],
        [
          7.224137198624337,
          7.224137198624337
        ],
        [
          7.153776590798819,
          7.153776590798819
        ],
        [
          7.083828447251372,
          7.083828447251372
        ],
        [
          7.014289914929755,
          7.014289914929755
        ],
        [
          6.945158166321522,
          6.945158166321522
        ],
        [
          6.876430399169798,
          6.876430399169798
        ],
        [
          6.808103836192419,
          6.808103836192419
        ],
        [
          6.740175724806301,
          6.740175724806301
        ],
        [
          6.672643336853759,
          6.672643336853759
        ],
        [
          6.605503968333784,
          6.605503968333784
        ],
        [
          6.538754939135493,
          6.538754939135493
        ],
        [
          6.472393592776853,
          6.472393592776853
        ],
        [
          6.406417296144317,
          6.406417296144317
        ],
        [
          6.340823439346861,
          6.340823439346861
        ],
        [
          6.275609435065938,
          6.275609435065938
        ],
        [
          6.210772718862659,
          6.210772718862659
        ],
        [
          6.146310748583338,
          6.146310748583338
        ],
        [
          6.082221004199856,
          6.082221004199856
        ],
        [
          6.01850098757043,
          6.01850098757043
        ],
        [
          5.955148222203408,
          5.955148222203408
        ],
        [
          5.892160253024464,
          5.892160253024464
        ],
        [
          5.829534646146183,
          5.829534646146183
        ],
        [
          5.767268988641243,
          5.767268988641243
        ],
        [
          5.705360888317964,
          5.705360888317964
        ],
        [
          5.643807973499235,
          5.643807973499235
        ],
        [
          5.58260789280383,
          5.58260789280383
        ],
        [
          5.521758314930784,
          5.521758314930784
        ],
        [
          5.461256928446222,
          5.461256928446222
        ],
        [
          5.40110144157345,
          5.40110144157345
        ],
        [
          5.341289581985175,
          5.341289581985175
        ],
        [
          5.281819096598245,
          5.281819096598245
        ],
        [
          5.222687751371746,
          5.222687751371746
        ],
        [
          5.163893331106783,
          5.163893331106783
        ],
        [
          5.105433639249342,
          5.105433639249342
        ],
        [
          5.047306497695319,
          5.047306497695319
        ],
        [
          4.989509746598151,
          4.989509746598151
        ],
        [
          4.932041244178763,
          4.932041244178763
        ],
        [
          4.874898866537804,
          4.874898866537804
        ],
        [
          4.818080507470575,
          4.818080507470575
        ],
        [
          4.761584078283754,
          4.761584078283754
        ],
        [
          4.705407507614822,
          4.705407507614822
        ],
        [
          4.649548741253325,
          4.649548741253325
        ],
        [
          4.594005741964655,
          4.594005741964655
        ],
        [
          4.538776489316091,
          4.538776489316091
        ],
        [
          4.483858979504331,
          4.483858979504331
        ],
        [
          4.429251225185951,
          4.429251225185951
        ],
        [
          4.374951255309469,
          4.374951255309469
        ],
        [
          4.320957114949499,
          4.320957114949499
        ],
        [
          4.267266865142942,
          4.267266865142942
        ],
        [
          4.213878582727409,
          4.213878582727409
        ],
        [
          4.160790360181227,
          4.160790360181227
        ],
        [
          4.108000305465539,
          4.108000305465539
        ],
        [
          4.0555065418685174,
          4.0555065418685174
        ],
        [
          4.003307207851032,
          4.003307207851032
        ],
        [
          3.9514004568946035,
          3.9514004568946035
        ],
        [
          3.8997844573508553,
          3.8997844573508553
        ],
        [
          3.848457392292972,
          3.848457392292972
        ],
        [
          3.797417459368858,
          3.797417459368858
        ],
        [
          3.746662870656028,
          3.746662870656028
        ],
        [
          3.6961918525183526,
          3.6961918525183526
        ],
        [
          3.6460026454642795,
          3.6460026454642795
        ],
        [
          3.5960935040067996,
          3.5960935040067996
        ],
        [
          3.5464626965254915,
          3.5464626965254915
        ],
        [
          3.4971085051294555,
          3.4971085051294555
        ],
        [
          3.448029225522417,
          3.448029225522417
        ],
        [
          3.3992231668692776,
          3.3992231668692776
        ],
        [
          3.350688651664161,
          3.350688651664161
        ],
        [
          3.3024240156001445,
          3.3024240156001445
        ],
        [
          3.254427607440097,
          3.254427607440097
        ],
        [
          3.2066977888898864,
          3.2066977888898864
        ],
        [
          3.1592329344720733,
          3.1592329344720733
        ],
        [
          3.1120314314018733,
          3.1120314314018733
        ],
        [
          3.065091679463781,
          3.065091679463781
        ],
        [
          3.018412090890541,
          3.018412090890541
        ],
        [
          2.9719910902429225,
          2.9719910902429225
        ],
        [
          2.925827114290631,
          2.925827114290631
        ],
        [
          2.879918611895461,
          2.879918611895461
        ],
        [
          2.8342640438949447,
          2.8342640438949447
        ],
        [
          2.7888618829879146,
          2.7888618829879146
        ],
        [
          2.743710613621004,
          2.743710613621004
        ],
        [
          2.6988087318766127,
          2.6988087318766127
        ],
        [
          2.6541547453621366,
          2.6541547453621366
        ],
        [
          2.6097471731004993,
          2.6097471731004993
        ],
        [
          2.5655845454217796,
          2.5655845454217796
        ],
        [
          2.5216654038563338,
          2.5216654038563338
        ],
        [
          2.477988300965764,
          2.477988300965764
        ],
        [
          2.434551800502027,
          2.434551800502027
        ],
        [
          2.391354476889096,
          2.391354476889096
        ],
        [
          2.3483949154118875,
          2.3483949154118875
        ],
        [
          2.305671712037757,
          2.305671712037757
        ],
        [
          2.2631834733172838,
          2.2631834733172838
        ],
        [
          2.220928816284654,
          2.220928816284654
        ],
        [
          2.178906368360239,
          2.178906368360239
        ],
        [
          2.137114767253885,
          2.137114767253885
        ],
        [
          2.0955526608693322,
          2.0955526608693322
        ],
        [
          2.0542187072095546,
          2.0542187072095546
        ],
        [
          2.0131115742833963,
          2.0131115742833963
        ],
        [
          1.9722299400129693,
          1.9722299400129693
        ],
        [
          1.9315724921422999,
          1.9315724921422999
        ],
        [
          1.8911379281469651,
          1.8911379281469651
        ],
        [
          1.8509249551444569,
          1.8509249551444569
        ],
        [
          1.8109322898059683,
          1.8109322898059683
        ],
        [
          1.7711586582687295,
          1.7711586582687295
        ],
        [
          1.7316027960495322,
          1.7316027960495322
        ],
        [
          1.6922634479592888,
          1.6922634479592888
        ],
        [
          1.6531393680182278,
          1.6531393680182278
        ],
        [
          1.6142293193721993,
          1.6142293193721993
        ],
        [
          1.575532074209945,
          1.575532074209945
        ],
        [
          1.5370464136811637,
          1.5370464136811637
        ],
        [
          1.498771127815457,
          1.498771127815457
        ],
        [
          1.4607050154421124,
          1.4607050154421124
        ],
        [
          1.422846884111071,
          1.422846884111071
        ],
        [
          1.3851955500142181,
          1.3851955500142181
        ],
        [
          1.3477498379080235,
          1.3477498379080235
        ],
        [
          1.3105085810365833,
          1.3105085810365833
        ],
        [
          1.2734706210559503,
          1.2734706210559503
        ],
        [
          1.2366348079586964,
          1.2366348079586964
        ],
        [
          1.2,
          1.2
        ]
      ]
    },
    "10": {
      "label": "G2–STO",
      "values": [
        [
          8.485,
          8.485
        ],
        [
          8.449575,
          8.449575
        ],
        [
          8.41415,
          8.41415
        ],
        [
          8.378725,
          8.378725
        ],
        [
          8.3433,
          8.3433
        ],
        [
          8.307875,
          8.307875
        ],
        [
          8.27245,
          8.27245
        ],
        [
          8.237025,
          8.237025
        ],
        [
          8.2016,
          8.2016
        ],
        [
          8.166174999999999,
          8.166174999999999
        ],
        [
          8.130749999999999,
          8.130749999999999
        ],
        [
          8.095324999999999,
          8.095324999999999
        ],
        [
          8.059899999999999,
          8.059899999999999
        ],
        [
          8.024474999999999,
          8.024474999999999
        ],
        [
          7.989049999999999,
          7.989049999999999
        ],
        [
          7.953625000000001,
          7.953625000000001
        ],
        [
          7.9182,
          7.9182
        ],
        [
          7.882775,
          7.882775
        ],
        [
          7.8473500000000005,
          7.8473500000000005
        ],
        [
          7.811925,
          7.811925
        ],
        [
          7.7764999999999995,
          7.7764999999999995
        ],
        [
          7.7410749999999995,
          7.7410749999999995
        ],
        [
          7.7056499999999994,
          7.7056499999999994
        ],
        [
          7.670224999999999,
          7.670224999999999
        ],
        [
          7.634799999999999,
          7.634799999999999
        ],
        [
          7.599374999999999,
          7.599374999999999
        ],
        [
          7.56395,
          7.56395
        ],
        [
          7.528524999999999,
          7.528524999999999
        ],
        [
          7.493099999999999,
          7.493099999999999
        ],
        [
          7.457675,
          7.457675
        ],
        [
          7.422249999999999,
          7.422249999999999
        ],
        [
          7.386824999999999,
          7.386824999999999
        ],
        [
          7.351399999999999,
          7.351399999999999
        ],
        [
          7.315974999999999,
          7.315974999999999
        ],
        [
          7.28055,
          7.28055
        ],
        [
          7.245124999999999,
          7.245124999999999
        ],
        [
          7.2097,
          7.2097
        ],
        [
          7.174275,
          7.174275
        ],
        [
          7.13885,
          7.13885
        ],
        [
          7.103424999999999,
          7.103424999999999
        ],
        [
          7.0680000000000005,
          7.0680000000000005
        ],
        [
          7.032575,
          7.032575
        ],
        [
          6.9971499999999995,
          6.9971499999999995
        ],
        [
          6.961725,
          6.961725
        ],
        [
          6.9262999999999995,
          6.9262999999999995
        ],
        [
          6.890875,
          6.890875
        ],
        [
          6.855449999999999,
          6.855449999999999
        ],
        [
          6.820024999999999,
          6.820024999999999
        ],
        [
          6.7846,
          6.7846
        ],
        [
          6.749174999999999,
          6.749174999999999
        ],
        [
          6.713749999999999,
          6.713749999999999
        ],
        [
          6.678325,
          6.678325
        ],
        [
          6.642899999999999,
          6.642899999999999
        ],
        [
          6.607474999999999,
          6.607474999999999
        ],
        [
          6.57205,
          6.57205
        ],
        [
          6.536624999999999,
          6.536624999999999
        ],
        [
          6.5012,
          6.5012
        ],
        [
          6.465775000000001,
          6.465775000000001
        ],
        [
          6.430349999999999,
          6.430349999999999
        ],
        [
          6.394925000000001,
          6.394925000000001
        ],
        [
          6.359499999999999,
          6.359499999999999
        ],
        [
          6.324075,
          6.324075
        ],
        [
          6.28865,
          6.28865
        ],
        [
          6.253225,
          6.253225
        ],
        [
          6.217799999999999,
          6.217799999999999
        ],
        [
          6.182375,
          6.182375
        ],
        [
          6.146949999999999,
          6.146949999999999
        ],
        [
          6.111525,
          6.111525
        ],
        [
          6.0760999999999985,
          6.0760999999999985
        ],
        [
          6.040674999999999,
          6.040674999999999
        ],
        [
          6.00525,
          6.00525
        ],
        [
          5.969824999999999,
          5.969824999999999
        ],
        [
          5.9344,
          5.9344
        ],
        [
          5.898975,
          5.898975
        ],
        [
          5.863549999999999,
          5.863549999999999
        ],
        [
          5.828125,
          5.828125
        ],
        [
          5.7927,
          5.7927
        ],
        [
          5.757274999999999,
          5.757274999999999
        ],
        [
          5.72185,
          5.72185
        ],
        [
          5.686425,
          5.686425
        ],
        [
          5.650999999999999,
          5.650999999999999
        ],
        [
          5.615575,
          5.615575
        ],
        [
          5.580150000000001,
          5.580150000000001
        ],
        [
          5.544725,
          5.544725
        ],
        [
          5.5093000000000005,
          5.5093000000000005
        ],
        [
          5.473874999999999,
          5.473874999999999
        ],
        [
          5.4384500000000005,
          5.4384500000000005
        ],
        [
          5.4030249999999995,
          5.4030249999999995
        ],
        [
          5.3675999999999995,
          5.3675999999999995
        ],
        [
          5.332174999999999,
          5.332174999999999
        ],
        [
          5.29675,
          5.29675
        ],
        [
          5.261324999999999,
          5.261324999999999
        ],
        [
          5.2259,
          5.2259
        ],
        [
          5.190474999999998,
          5.190474999999998
        ],
        [
          5.155049999999999,
          5.155049999999999
        ],
        [
          5.119625,
          5.119625
        ],
        [
          5.084199999999999,
          5.084199999999999
        ],
        [
          5.048775,
          5.048775
        ],
        [
          5.01335,
          5.01335
        ],
        [
          4.977924999999999,
          4.977924999999999
        ],
        [
          4.9425,
          4.9425
        ],
        [
          4.907075,
          4.907075
        ],
        [
          4.871649999999999,
          4.871649999999999
        ],
        [
          4.836225,
          4.836225
        ],
        [
          4.8008,
          4.8008
        ],
        [
          4.765375,
          4.765375
        ],
        [
          4.72995,
          4.72995
        ],
        [
          4.694525,
          4.694525
        ],
        [
          4.6591,
          4.6591
        ],
        [
          4.6236749999999995,
          4.6236749999999995
        ],
        [
          4.5882499999999995,
          4.5882499999999995
        ],
        [
          4.5528249999999995,
          4.5528249999999995
        ],
        [
          4.517399999999999,
          4.517399999999999
        ],
        [
          4.481975,
          4.481975
        ],
        [
          4.44655,
          4.44655
        ],
        [
          4.411125,
          4.411125
        ],
        [
          4.3757,
          4.3757
        ],
        [
          4.340275,
          4.340275
        ],
        [
          4.30485,
          4.30485
        ],
        [
          4.269425,
          4.269425
        ],
        [
          4.234,
          4.234
        ],
        [
          4.198575,
          4.198575
        ],
        [
          4.16315,
          4.16315
        ],
        [
          4.127725,
          4.127725
        ],
        [
          4.0923,
          4.0923
        ],
        [
          4.056875,
          4.056875
        ],
        [
          4.02145,
          4.02145
        ],
        [
          3.9860249999999997,
          3.9860249999999997
        ],
        [
          3.9505999999999997,
          3.9505999999999997
        ],
        [
          3.9151749999999996,
          3.9151749999999996
        ],
        [
          3.8797499999999996,
          3.8797499999999996
        ],
        [
          3.8443249999999995,
          3.8443249999999995
        ],
        [
          3.8088999999999995,
          3.8088999999999995
        ],
        [
          3.7734749999999995,
          3.7734749999999995
        ],
        [
          3.7380499999999994,
          3.7380499999999994
        ],
        [
          3.7026249999999994,
          3.7026249999999994
        ],
        [
          3.6671999999999993,
          3.6671999999999993
        ],
        [
          3.6317749999999993,
          3.6317749999999993
        ],
        [
          3.59635,
          3.59635
        ],
        [
          3.560925,
          3.560925
        ],
        [
          3.5255,
          3.5255
        ],
        [
          3.490075,
          3.490075
        ],
        [
          3.45465,
          3.45465
        ],
        [
          3.419225,
          3.419225
        ],
        [
          3.3838,
          3.3838
        ],
        [
          3.348375,
          3.348375
        ],
        [
          3.31295,
          3.31295
        ],
        [
          3.277525,
          3.277525
        ],
        [
          3.2420999999999998,
          3.2420999999999998
        ],
        [
          3.2066749999999997,
          3.2066749999999997
        ],
        [
          3.1712499999999997,
          3.1712499999999997
        ],
        [
          3.1358249999999996,
          3.1358249999999996
        ],
        [
          3.1003999999999996,
          3.1003999999999996
        ],
        [
          3.0649749999999996,
          3.0649749999999996
        ],
        [
          3.0295499999999995,
          3.0295499999999995
        ],
        [
          2.9941249999999995,
          2.9941249999999995
        ],
        [
          2.9586999999999994,
          2.9586999999999994
        ],
        [
          2.9232749999999994,
          2.9232749999999994
        ],
        [
          2.8878499999999994,
          2.8878499999999994
        ],
        [
          2.8524249999999993,
          2.8524249999999993
        ],
        [
          2.8169999999999993,
          2.8169999999999993
        ],
        [
          2.7815749999999992,
          2.7815749999999992
        ],
        [
          2.746149999999999,
          2.746149999999999
        ],
        [
          2.710725,
          2.710725
        ],
        [
          2.6753,
          2.6753
        ],
        [
          2.639875,
          2.639875
        ],
        [
          2.60445,
          2.60445
        ],
        [
          2.569025,
          2.569025
        ],
        [
          2.5336,
          2.5336
        ],
        [
          2.498175,
          2.498175
        ],
        [
          2.4627499999999998,
          2.4627499999999998
        ],
        [
          2.4273249999999997,
          2.4273249999999997
        ],
        [
          2.3918999999999997,
          2.3918999999999997
        ],
        [
          2.3564749999999997,
          2.3564749999999997
        ],
        [
          2.3210499999999996,
          2.3210499999999996
        ],
        [
          2.2856249999999996,
          2.2856249999999996
        ],
        [
          2.2502,
          2.2502
        ],
        [
          2.2147749999999995,
          2.2147749999999995
        ],
        [
          2.17935,
          2.17935
        ],
        [
          2.1439249999999994,
          2.1439249999999994
        ],
        [
          2.1085,
          2.1085
        ],
        [
          2.073075,
          2.073075
        ],
        [
          2.0376499999999997,
          2.0376499999999997
        ],
        [
          2.0022249999999997,
          2.0022249999999997
        ],
        [
          1.9667999999999997,
          1.9667999999999997
        ],
        [
          1.9313749999999996,
          1.9313749999999996
        ],
        [
          1.8959499999999996,
          1.8959499999999996
        ],
        [
          1.8605249999999995,
          1.8605249999999995
        ],
        [
          1.8251000000000004,
          1.8251000000000004
        ],
        [
          1.7896750000000003,
          1.7896750000000003
        ],
        [
          1.7542500000000003,
          1.7542500000000003
        ],
        [
          1.7188250000000003,
          1.7188250000000003
        ],
        [
          1.6834000000000002,
          1.6834000000000002
        ],
        [
          1.6479750000000002,
          1.6479750000000002
        ],
        [
          1.6125500000000001,
          1.6125500000000001
        ],
        [
          1.577125,
          1.577125
        ],
        [
          1.5417,
          1.5417
        ],
        [
          1.506275,
          1.506275
        ],
        [
          1.47085,
          1.47085
        ],
        [
          1.435425,
          1.435425
        ],
        [
          1.4,
          1.4
        ]
      ]
    },
    "19A": {
      "label": "BF",
      "values": [
        [
          36.9,
          36.9
        ],
        [
          36.981249999999996,
          36.981249999999996
        ],
        [
          37.0625,
          37.0625
        ],
        [
          37.14375,
          37.14375
        ],
        [
          37.225,
          37.225
        ],
        [
          37.30625,
          37.30625
        ],
        [
          37.387499999999996,
          37.387499999999996
        ],
        [
          37.46875,
          37.46875
        ],
        [
          37.55,
          37.55
        ],
        [
          37.63125,
          37.63125
        ],
        [
          37.7125,
          37.7125
        ],
        [
          37.79375,
          37.79375
        ],
        [
          37.875,
          37.875
        ],
        [
          37.95625,
          37.95625
        ],
        [
          38.037499999999994,
          38.037499999999994
        ],
        [
          38.11875,
          38.11875
        ],
        [
          38.2,
          38.2
        ],
        [
          38.28125,
          38.28125
        ],
        [
          38.3625,
          38.3625
        ],
        [
          38.44375,
          38.44375
        ],
        [
          38.525,
          38.525
        ],
        [
          38.60625,
          38.60625
        ],
        [
          38.6875,
          38.6875
        ],
        [
          38.768750000000004,
          38.768750000000004
        ],
        [
          38.85,
          38.85
        ],
        [
          38.93125,
          38.93125
        ],
        [
          39.0125,
          39.0125
        ],
        [
          39.09375,
          39.09375
        ],
        [
          39.175,
          39.175
        ],
        [
          39.256249999999994,
          39.256249999999994
        ],
        [
          39.3375,
          39.3375
        ],
        [
          39.418749999999996,
          39.418749999999996
        ],
        [
          39.5,
          39.5
        ],
        [
          39.58125,
          39.58125
        ],
        [
          39.6625,
          39.6625
        ],
        [
          39.74374999999999,
          39.74374999999999
        ],
        [
          39.825,
          39.825
        ],
        [
          39.90624999999999,
          39.90624999999999
        ],
        [
          39.9875,
          39.9875
        ],
        [
          40.068749999999994,
          40.068749999999994
        ],
        [
          40.15,
          40.15
        ],
        [
          40.23125,
          40.23125
        ],
        [
          40.3125,
          40.3125
        ],
        [
          40.39375,
          40.39375
        ],
        [
          40.475,
          40.475
        ],
        [
          40.55625,
          40.55625
        ],
        [
          40.6375,
          40.6375
        ],
        [
          40.71875,
          40.71875
        ],
        [
          40.8,
          40.8
        ],
        [
          40.88125,
          40.88125
        ],
        [
          40.9625,
          40.9625
        ],
        [
          41.043749999999996,
          41.043749999999996
        ],
        [
          41.125,
          41.125
        ],
        [
          41.20625,
          41.20625
        ],
        [
          41.287499999999994,
          41.287499999999994
        ],
        [
          41.36875,
          41.36875
        ],
        [
          41.45,
          41.45
        ],
        [
          41.53125,
          41.53125
        ],
        [
          41.6125,
          41.6125
        ],
        [
          41.69375,
          41.69375
        ],
        [
          41.775,
          41.775
        ],
        [
          41.85625,
          41.85625
        ],
        [
          41.9375,
          41.9375
        ],
        [
          42.01875,
          42.01875
        ],
        [
          42.099999999999994,
          42.099999999999994
        ],
        [
          42.181250000000006,
          42.181250000000006
        ],
        [
          42.262499999999996,
          42.262499999999996
        ],
        [
          42.34375,
          42.34375
        ],
        [
          42.425,
          42.425
        ],
        [
          42.506249999999994,
          42.506249999999994
        ],
        [
          42.5875,
          42.5875
        ],
        [
          42.66875,
          42.66875
        ],
        [
          42.75,
          42.75
        ],
        [
          42.83125,
          42.83125
        ],
        [
          42.912499999999994,
          42.912499999999994
        ],
        [
          42.99375,
          42.99375
        ],
        [
          43.075,
          43.075
        ],
        [
          43.15625,
          43.15625
        ],
        [
          43.2375,
          43.2375
        ],
        [
          43.318749999999994,
          43.318749999999994
        ],
        [
          43.4,
          43.4
        ],
        [
          43.48125,
          43.48125
        ],
        [
          43.5625,
          43.5625
        ],
        [
          43.64375,
          43.64375
        ],
        [
          43.724999999999994,
          43.724999999999994
        ],
        [
          43.80624999999999,
          43.80624999999999
        ],
        [
          43.8875,
          43.8875
        ],
        [
          43.96875,
          43.96875
        ],
        [
          44.05,
          44.05
        ],
        [
          44.131249999999994,
          44.131249999999994
        ],
        [
          44.212500000000006,
          44.212500000000006
        ],
        [
          44.29375,
          44.29375
        ],
        [
          44.375,
          44.375
        ],
        [
          44.45625,
          44.45625
        ],
        [
          44.537499999999994,
          44.537499999999994
        ],
        [
          44.61875,
          44.61875
        ],
        [
          44.699999999999996,
          44.699999999999996
        ],
        [
          44.78125,
          44.78125
        ],
        [
          44.8625,
          44.8625
        ],
        [
          44.943749999999994,
          44.943749999999994
        ],
        [
          45.025,
          45.025
        ],
        [
          45.10625,
          45.10625
        ],
        [
          45.1875,
          45.1875
        ],
        [
          45.26875,
          45.26875
        ],
        [
          45.35,
          45.35
        ],
        [
          45.43125,
          45.43125
        ],
        [
          45.5125,
          45.5125
        ],
        [
          45.59375,
          45.59375
        ],
        [
          45.675,
          45.675
        ],
        [
          45.756249999999994,
          45.756249999999994
        ],
        [
          45.8375,
          45.8375
        ],
        [
          45.91875,
          45.91875
        ],
        [
          46,
          46
        ],
        [
          46.08125,
          46.08125
        ],
        [
          46.162499999999994,
          46.162499999999994
        ],
        [
          46.24375,
          46.24375
        ],
        [
          46.325,
          46.325
        ],
        [
          46.40625,
          46.40625
        ],
        [
          46.4875,
          46.4875
        ],
        [
          46.568749999999994,
          46.568749999999994
        ],
        [
          46.65,
          46.65
        ],
        [
          46.731249999999996,
          46.731249999999996
        ],
        [
          46.8125,
          46.8125
        ],
        [
          46.89375,
          46.89375
        ],
        [
          46.974999999999994,
          46.974999999999994
        ],
        [
          47.05625,
          47.05625
        ],
        [
          47.137499999999996,
          47.137499999999996
        ],
        [
          47.21875,
          47.21875
        ],
        [
          47.3,
          47.3
        ],
        [
          47.38125,
          47.38125
        ],
        [
          47.4625,
          47.4625
        ],
        [
          47.54375,
          47.54375
        ],
        [
          47.625,
          47.625
        ],
        [
          47.70625,
          47.70625
        ],
        [
          47.7875,
          47.7875
        ],
        [
          47.86875,
          47.86875
        ],
        [
          47.95,
          47.95
        ],
        [
          48.03125,
          48.03125
        ],
        [
          48.1125,
          48.1125
        ],
        [
          48.193749999999994,
          48.193749999999994
        ],
        [
          48.275,
          48.275
        ],
        [
          48.356249999999996,
          48.356249999999996
        ],
        [
          48.4375,
          48.4375
        ],
        [
          48.51875,
          48.51875
        ],
        [
          48.6,
          48.6
        ],
        [
          48.68125,
          48.68125
        ],
        [
          48.762499999999996,
          48.762499999999996
        ],
        [
          48.84375,
          48.84375
        ],
        [
          48.925,
          48.925
        ],
        [
          49.00625,
          49.00625
        ],
        [
          49.0875,
          49.0875
        ],
        [
          49.16875,
          49.16875
        ],
        [
          49.25,
          49.25
        ],
        [
          49.331250000000004,
          49.331250000000004
        ],
        [
          49.412499999999994,
          49.412499999999994
        ],
        [
          49.49374999999999,
          49.49374999999999
        ],
        [
          49.575,
          49.575
        ],
        [
          49.65625,
          49.65625
        ],
        [
          49.7375,
          49.7375
        ],
        [
          49.818749999999994,
          49.818749999999994
        ],
        [
          49.9,
          49.9
        ],
        [
          49.981249999999996,
          49.981249999999996
        ],
        [
          50.0625,
          50.0625
        ],
        [
          50.14375,
          50.14375
        ],
        [
          50.225,
          50.225
        ],
        [
          50.30625,
          50.30625
        ],
        [
          50.3875,
          50.3875
        ],
        [
          50.46875,
          50.46875
        ],
        [
          50.55,
          50.55
        ],
        [
          50.63125,
          50.63125
        ],
        [
          50.7125,
          50.7125
        ],
        [
          50.79375,
          50.79375
        ],
        [
          50.875,
          50.875
        ],
        [
          50.95625,
          50.95625
        ],
        [
          51.037499999999994,
          51.037499999999994
        ],
        [
          51.11875,
          51.11875
        ],
        [
          51.199999999999996,
          51.199999999999996
        ],
        [
          51.28125,
          51.28125
        ],
        [
          51.3625,
          51.3625
        ],
        [
          51.443749999999994,
          51.443749999999994
        ],
        [
          51.525,
          51.525
        ],
        [
          51.606249999999996,
          51.606249999999996
        ],
        [
          51.6875,
          51.6875
        ],
        [
          51.76875,
          51.76875
        ],
        [
          51.85,
          51.85
        ],
        [
          51.93125,
          51.93125
        ],
        [
          52.0125,
          52.0125
        ],
        [
          52.09375,
          52.09375
        ],
        [
          52.175,
          52.175
        ],
        [
          52.256249999999994,
          52.256249999999994
        ],
        [
          52.3375,
          52.3375
        ],
        [
          52.418749999999996,
          52.418749999999996
        ],
        [
          52.49999999999999,
          52.49999999999999
        ],
        [
          52.58125,
          52.58125
        ],
        [
          52.662499999999994,
          52.662499999999994
        ],
        [
          52.74375,
          52.74375
        ],
        [
          52.824999999999996,
          52.824999999999996
        ],
        [
          52.90625,
          52.90625
        ],
        [
          52.9875,
          52.9875
        ],
        [
          53.06875,
          53.06875
        ],
        [
          53.15,
          53.15
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22,
    "blades": 8
  },
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "7"
    },
    {
      "text": "G2",
      "fromSurface": "8",
      "toSurface": "10"
    },
    {
      "text": "G3",
      "fromSurface": "11",
      "toSurface": "19A"
    }
  ],
  "doublets": [
    {
      "text": "HYBRID",
      "fromSurface": "3",
      "toSurface": "5A"
    },
    {
      "text": "D1",
      "fromSurface": "8",
      "toSurface": "10"
    },
    {
      "text": "D2",
      "fromSurface": "13",
      "toSurface": "15"
    }
  ],
  "layout": {
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
