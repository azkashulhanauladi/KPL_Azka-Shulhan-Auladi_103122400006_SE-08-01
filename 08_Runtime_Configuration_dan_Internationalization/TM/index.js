const fs = require("fs");
require("dotenv").config({ quiet: true });

const axios = require("axios");

console.log('.env exists:', fs.existsSync('.env'));
let baseApi = process.env.BASE_API || process.env['\uFEFFBASE_API'] || undefined;
try {
  const rawEnv = fs.readFileSync('.env', 'utf8');
  // if dotenv failed due to BOM, try to parse manually
  if (!baseApi) {
    const m = rawEnv.match(/(?:^|\n)\s*(?:\uFEFF)?BASE_API\s*=\s*(.+)\s*(?:\n|$)/i);
    if (m) baseApi = m[1].trim();
  }
} catch (e) {
  console.error('read .env failed', e);
}
baseApi = baseApi || 'local';
console.log('BASE_API resolved =', baseApi);

// SIMULASI API
async function getData() {
  if (baseApi === "local") {
    try {
      let raw = fs.readFileSync(require('path').resolve(__dirname, 'data.json'), 'utf8');
      console.log('data.json size:', raw.length);
      raw = raw.replace(/^\uFEFF/, '');
      return JSON.parse(raw);
    } catch (e) {
      console.error('failed to load data.json:', e);
      throw e;
    }
  } else {
    const res = await axios.get(baseApi);
    return res.data;
  }
}

async function getKurs(rupiah) {
  const data = await getData();

  const rateCNH = data.idr.cnh;
  const rateEUR = data.idr.eur;

  const hasilCNH = rupiah * rateCNH;
  const hasilEUR = rupiah * rateEUR;

  const formatRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(rupiah);

  const formatCNH = new Intl.NumberFormat("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(hasilCNH);

  const formatEUR = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(hasilEUR);

  const tanggal = new Date(data.date);
  const formatTanggal = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(tanggal);

  console.log(
    `Kurs ${formatRupiah} pada ${formatTanggal} adalah CNH ${formatCNH} dan ${formatEUR}`
  );
}

// buat test dgn 25000 rupiah
getKurs(25000)
  .then(() => console.log("done"))
  .catch((err) => console.error(err));