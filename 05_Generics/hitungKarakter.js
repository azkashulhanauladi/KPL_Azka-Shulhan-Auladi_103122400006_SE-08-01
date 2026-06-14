// fungsi generic
function hitung(str, tipe) {
  let jumlah = 0;

  for (let c of str) {
    if (tipe === "semua") {
      // hitung semua karakter (termasuk spasi)
      jumlah++;
    } else if (tipe === "huruf") {
      // hanya huruf (tidak termasuk spasi)
      if (c !== " ") {
        jumlah++;
      }
    }
  }

  return jumlah;
}

// ================= TEST =================
const str = "Bar bar bar";

console.log(
  hitung(str, "semua") // Harusnya 11
);

console.log(
  hitung(str, "huruf") // Harusnya 9
);

// tidak terjadi apa-apa (optional)
hitung(str, "huruf");