let hitungan = 0;

function tambahPengitung(jumlah) {
  hitungan = hitungan + jumlah;
  return hitungan;
}

function reset() {
  hitungan = 0;
}

module.exports = { tambahPengitung, reset };