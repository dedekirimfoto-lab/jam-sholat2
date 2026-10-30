// 1. Fungsi Jam Digital Berjalan
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
}, 1000);

// 2. Ambil Jadwal Sholat Otomatis (Contoh untuk kota Jakarta hari ini)
fetch('https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=5')
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
