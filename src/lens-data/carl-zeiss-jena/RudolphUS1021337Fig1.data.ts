import type { LensDataV2Input } from '../../types/lensDataV2.js';
/** Literal US1021337 Fig1. D-only patent reference, not a proven retail prescription. */
const LENS_DATA={schema:2,key:'rudolph-us1021337-fig1-d-line',maker:null,
name:'RUDOLPH US1021337 Fig. 1 100mm f/12.5 — D-line patent reference',
subtitle:'1912 ZEISS QUADRUPLE SINGLE OBJECTIVE; NO VERIFIED PRODUCTION MATCH',visible:false,
catalog:{specs:['4 ELEMENTS / 1 GROUP','D-LINE ONLY','PATENT REFERENCE'],elementCount:4,groupCount:1,focalLengthMm:{design:100},fNumber:{design:12.5}},
elements:[{id:1,name:'L1',label:'Patent I',type:'Biconcave',nd:1.4979,indexReference:'D'},
{id:2,name:'L2',label:'Patent II',type:'Biconvex',nd:1.6227,indexReference:'D'},
{id:3,name:'L3',label:'Patent III',type:'Positive Meniscus',nd:1.5813,indexReference:'D'},
{id:4,name:'L4',label:'Patent IV',type:'Negative Meniscus',nd:1.6275,indexReference:'D'}],
surfaces:[{label:'STO',R:'flat',d:2.34},{label:'1',R:-12,d:.48,sd:4.5,medium:1},{label:'2',R:44.2,d:1.7,sd:4.5,medium:2},{label:'3',R:-9.3,d:1.5,sd:4.5,medium:3},{label:'4',R:-6.6,d:.66,sd:4.5,medium:4},{label:'5',R:-13.4,d:109.17471241064689,sd:4.5}],
focus:{closeFocusM:1e15,description:'Infinity-only patent reconstruction.'},aperture:{nominalFNumber:12.5,fStops:[12.5,16,22]},projection:{kind:'rectilinear',maxTraceFieldDeg:5},layout:{yScFill:.5}
} satisfies LensDataV2Input;
export default LENS_DATA;
