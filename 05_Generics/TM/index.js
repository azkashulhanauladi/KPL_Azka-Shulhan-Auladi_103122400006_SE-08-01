/**
 * Mengonversi angka menjadi "Fizz", "Buzz", "FizzBuzz", atau tetap angka tersebut.
 * 
 * @param {number} value - Angka bulat yang akan diperiksa.
 * @returns {string|number} - Mengembalikan "FizzBuzz" jika habis dibagi 3 dan 5, 
 *                            "Fizz" jika habis dibagi 3, "Buzz" jika habis dibagi 5, 
 *                            atau angka itu sendiri jika tidak keduanya.
 * @throws {Error} - Jika input bukan merupakan tipe data number.
 */
function zzzzOrNum(value) {
    // Validasi input adalah angka
    if (typeof value !== 'number') {
        throw new Error("Input harus berupa angka");
    }

    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

/**
 * Memproses array angka menggunakan aturan FizzBuzz.
 * 
 * @param {number[]} sequence - Larik (array) yang berisi bilangan bulat.
 * @returns {(string|number)[]} - Larik baru dengan elemen yang sudah dikonversi.
 * @throws {Error} - Jika input bukan merupakan array.
 */
function fizzBuzz(sequence) {
    // Validasi input adalah array
    if (!Array.isArray(sequence)) {
        throw new Error("Input harus berupa array");
    }

    // Menggunakan fungsi zzzzOrNum di dalamnya
    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};