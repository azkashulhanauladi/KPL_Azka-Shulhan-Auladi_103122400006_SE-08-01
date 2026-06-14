const editorBesar = document.getElementById("editor-besar");
const editorKecil = document.getElementById("editor-kecil");

const jumlahHuruf = document.getElementById("jumlah-huruf");
const jumlahBesar = document.getElementById("jumlah-besar");
const jumlahKecil = document.getElementById("jumlah-kecil");

const btnBesarkan = document.getElementById("btn-besarkan");
const btnKecilkan = document.getElementById("btn-kecilkan");
const btnModeTerang = document.getElementById("btn-mode-terang");
const btnModeGelap = document.getElementById("btn-mode-gelap");

const semuaTombol = document.querySelectorAll("button");

// Fungsi hitung karakter
function hitungTeks() {
  const teks = editorBesar.value;

  let totalHuruf = 0;
  let totalHurufBesar = 0;
  let totalHurufKecil = 0;

  for (let i = 0; i < teks.length; i++) {
    const char = teks[i];

    if (char >= "A" && char <= "Z") {
      totalHuruf++;
      totalHurufBesar++;
    } else if (char >= "a" && char <= "z") {
      totalHuruf++;
      totalHurufKecil++;
    }
  }

  jumlahHuruf.textContent = totalHuruf;
  jumlahBesar.textContent = totalHurufBesar;
  jumlahKecil.textContent = totalHurufKecil;
}

// Update hitungan saat mengetik
editorBesar.addEventListener("input", hitungTeks);

// Tombol besarkan
btnBesarkan.addEventListener("click", function () {
  editorKecil.value = editorBesar.value.toUpperCase();
});

// Tombol kecilkan
btnKecilkan.addEventListener("click", function () {
  editorKecil.value = editorBesar.value.toLowerCase();
});

// Mode gelap
btnModeGelap.addEventListener("click", function () {
  editorKecil.classList.add("dark-editor");

  semuaTombol.forEach(function (tombol) {
    tombol.classList.add("dark-button");
  });
});

// Mode terang
btnModeTerang.addEventListener("click", function () {
  editorKecil.classList.remove("dark-editor");

  semuaTombol.forEach(function (tombol) {
    tombol.classList.remove("dark-button");
  });
});