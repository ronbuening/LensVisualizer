import type { LensDataV2Input } from '../../types/lensDataV2.js';
/** Literal US895045, Example1. No retail identity; D-only. */
const LENS_DATA={schema:2,key:'rudolph-us895045-example1-d-line',maker:null,
name:'RUDOLPH US895045 Example 1 100mm f/12.5 — D-line patent reference',
subtitle:'1908 ZEISS DOUBLE OBJECTIVE; NO VERIFIED PRODUCTION MATCH',visible:false,
catalog:{specs:['4 ELEMENTS / 2 GROUPS','D-LINE ONLY','PATENT REFERENCE'],elementCount:4,groupCount:2,focalLengthMm:{design:100},fNumber:{design:12.5}},
elements:[{id:1,name:'L1',label:'Patent L1',type:'Negative Meniscus',nd:1.6489,indexReference:'D'},
{id:2,name:'L2',label:'Patent L2',type:'Positive Meniscus',nd:1.6031,indexReference:'D'},
{id:3,name:'L3',label:'Patent L3',type:'Biconcave',nd:1.5154,indexReference:'D'},
{id:4,name:'L4',label:'Patent L4',type:'Biconvex',nd:1.6112,indexReference:'D'}],
surfaces:[{label:'1',R:17.5,d:2.9,sd:4.2,medium:1},{label:'2',R:5.8,d:1.3,sd:4,medium:2},{label:'3',R:18.6,d:1.5,sd:4},{label:'STO',R:'flat',d:1.5},{label:'4',R:-12.8,d:1.1,sd:4,medium:3},{label:'5',R:18.6,d:1.8,sd:4,medium:4},{label:'6',R:-14.3,d:98.28319871121641,sd:4.2}],
focus:{closeFocusM:1e15,description:'Infinity-only patent reconstruction.'},aperture:{nominalFNumber:12.5,fStops:[12.5,16,22]},projection:{kind:'rectilinear',maxTraceFieldDeg:5},layout:{yScFill:.5}
} satisfies LensDataV2Input;
export default LENS_DATA;
