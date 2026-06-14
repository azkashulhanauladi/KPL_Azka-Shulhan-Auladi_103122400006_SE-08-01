/**
 * Persamaan Linier satu variabel dan dua suku
 * @param {string} x 
 * @param {number} a 
 */
export function plsv_dua(x, a) {
// 3x = 12
    const coeff = parseInt(x);
    const hasil = a / coeff;

    return {
        "x": x,
        "dengan": "=",
        hasil
    }
}

/**
 * Persamaan Linier satu variabel dan tiga suku
 * @param {string} x
 * @param {number} a
 * @param {number} b
 * @return {object}
 * */

export function plsv_tiga(x, a, b) {
// y - 8 = 10
// jika hanya satu koefisien
    let hasil;
    if(x.length === 1) {
        hasil = b - a;
    } else if (x.length >= 2) {
        const coeff = parseInt(x);
        hasil = b - a;
    }

    return {
        "x": x,
        "dengan": "=",
        hasil
    }
}

/**
 * 
 * @param {string} x 
 * @param {number} a 
 * @param {number} b 
 */

export function ptlsv_dua(x, a, op, b) {

    // -2x + 10 <= 4
    let hasil = 0;

    const coeff = parseInt(x);

    const balikkan_op = {
        ">": "<",
        "<": ">",
        ">=": "<=",
        "<=": ">="
    }


    if(x.length === 1) {
        hasil = b - a;
    } else if (x.length >= 2) {
        hasil = (b - a) / coeff;
    }

    const op_baru = coeff <= -1 ? op : balikkan_op[op];

    return {
        "x": x,
        "dengan": op_baru,
        hasil
    }

}