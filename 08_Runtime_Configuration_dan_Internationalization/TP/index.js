const waktu_sekarang = new Date();

const format_waktu = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}).format(waktu_sekarang);

console.log(format_waktu);