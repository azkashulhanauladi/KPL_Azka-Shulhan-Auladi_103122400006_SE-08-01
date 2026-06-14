import { plsv_dua, plsv_tiga, ptlsv_dua } from "guided";

const jawaban1 = plsv_dua("3x", 12);
const jawaban2 = plsv_tiga("y", -8, 10);
const jawaban3 = ptlsv_dua("-2x", 10, "<=", 4);

console.log(jawaban1);
console.log(jawaban2);
console.log(jawaban3);