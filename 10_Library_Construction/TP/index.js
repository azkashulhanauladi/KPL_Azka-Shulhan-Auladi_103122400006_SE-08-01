/**
 * @param {string} str
 * @return {number}
 */

export function hitungHuruf(str) {
    const match = str.match(/[a-zA-Z]/g);
    return match ? match.length : 0;
}
/**
 * 
 * @param {string} str
 * @return {number}
 */

export function hitungKata(str) {
    const match = str.trim().split(/\s+/);
    return str.trim() === '' ? 0 : match.length;
}