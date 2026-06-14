function divide (a, b) {
    if (typeof a !== 'number' && typeof b !== 'number') {
        throw new TypeError("Salah tipe data. harus bilagan bulat");
    }

    if (b === 0) {
        throw new Error("Tidak boleh dibagi dengan nol");
    }

    const hasil = a / b;


    if(hasil * b === a) {
        return hasil;
    }

    return hasil;
}

try {
    console.log(
        divide(10, 0)
    );
} catch (error) {
     console.error(error.message);
}