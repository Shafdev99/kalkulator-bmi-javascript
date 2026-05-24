let tinggiBadan, beratBadan, tombolHitung, hasilPerhitungan, keterangan;
tinggiBadan = document.getElementById('tinggi-badan');
beratBadan = document.getElementById('berat-badan');
tombolHitung = document.getElementById('tombol-hitung');
hasilPerhitungan = document.getElementById('hasil-perhitungan');


tombolHitung.onclick = function () {
    const tinggiM = parseFloat(tinggiBadan.value) / 100;
    const skor = beratBadan.value / (tinggiM * tinggiM);
    const bmi = skor.toFixed(2);

    if (bmi >= 25) {
        keterangan = "Heeiii kamuuu! waktunya olahraga, kamu sudah masuk fase obesitas !";
    } else if (bmi >= 23.0 && bmi <= 24.9) {
        keterangan = "Yaaahhh! Kamu udah masuk fase kelebihan berat badan nih :'(";
    } else if (bmi >= 18.5 && bmi <= 22.9) {
        keterangan = 'Yeay! Berat badan kamu ideal :D';
    } else {
        keterangan = 'Maaf! Berat badan kamu dibawah rata-rata :(';
    }

    hasilPerhitungan.innerHTML = `
        <div class="alert alert-primary" role="alert">
            <h6 class="text-center">
                Skor BMI kamu
            </h6>
            <h3 class="text-center fw-bold">
                ${bmi}
            </h3>
            <p class="text-center">
                ${keterangan}
            </p>
        </div>
    `;
};
