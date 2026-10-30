// Medan menggunakan Waktu Indonesia Barat (WIB, Asia/Jakarta).
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}, 1000);

// Ambil jadwal sholat otomatis untuk Medan hari ini.
fetch('https://api.aladhan.com/v1/timingsByCity?city=Medan&country=Indonesia&method=5')
    .then(response => response.json())
    .then(data => {
        const timings = data.data.timings;
        document.getElementById('subuh').innerText = timings.Fajr;
        document.getElementById('dzuhur').innerText = timings.Dhuhr;
        document.getElementById('ashar').innerText = timings.Asr;
        document.getElementById('maghrib').innerText = timings.Maghrib;
        document.getElementById('isya').innerText = timings.Isha;
    })
    .catch(error => console.log('Gagal memuat jadwal', error));
