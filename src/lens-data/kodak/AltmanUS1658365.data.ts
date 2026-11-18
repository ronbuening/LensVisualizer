import type { LensDataV2Input } from '../../types/lensDataV2.js';
/** Printed preferred-example table, US1658365 p1 (PDF p2); 100mm scale. Signs from section. */
const LENS_DATA={schema:2,key:'altman-us1658365-1928-patent',maker:null,
name:'ALTMAN / KODAK US1658365 100mm f/8 — patent reference',
subtitle:'1928 COMPACT FOLDING-CAMERA TRIPLET; NO VERIFIED RETAIL IDENTITY',visible:false,
catalog:{specs:['3 ELEMENTS / 3 GROUPS','ESTIMATED IRIS / RIMS','PATENT REFERENCE'],elementCount:3,groupCount:3,focalLengthMm:{design:100},fNumber:{design:8}},
elements:[{id:1,name:'L1',label:'Patent 1',type:'Biconvex',nd:1.611,vd:57.2,indexReference:'D'},
{id:2,name:'L2',label:'Patent 2',type:'Biconcave',nd:1.575,vd:42.7,indexReference:'D'},
{id:3,name:'L3',label:'Patent 3',type:'Meniscus',nd:1.611,vd:57.2,indexReference:'D'}],
surfaces:[{label:'1',R:23.9,d:2.6,sd:8,medium:1},{label:'2',R:-197,d:1.8,sd:8},{label:'3',R:-54.1,d:1.2,sd:8,medium:2},{label:'4',R:24.7,d:3.3,sd:8},{label:'STO',R:'flat',d:3.3},{label:'5',R:-146.4,d:2.6,sd:8,medium:3},{label:'6',R:-35.6,d:91.23253614367908,sd:8}],
focus:{closeFocusM:1e15,description:'Infinity-only. Source normalized f=1; 100mm display scale. Literal EFL99.748300mm.'},
aperture:{nominalFNumber:8,fStops:[8,11,16,22]},projection:{kind:'rectilinear',maxTraceFieldDeg:10},layout:{yScFill:.5}
} satisfies LensDataV2Input;
export default LENS_DATA;
