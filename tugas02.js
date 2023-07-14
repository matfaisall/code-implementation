const hitungBiayaPengiriman = (jarak) => {
  const tarif1 = 5000;
  const tarifSelanjutnya = 3000;

  if (jarak <= 2) {
    return tarif1;
  } else {
    const jarakSelanjutnya = jarak - 2;
    return tarif1 + jarakSelanjutnya * tarifSelanjutnya;
  }
};

const pijarFood = (totalHarga, voucher, jarak, menggunakanPromo) => {
  const tarifPengiriman = hitungBiayaPengiriman(jarak);
  const pajak = totalHarga * 0.05;

  let totalPembayaran = totalHarga + tarifPengiriman + pajak;

  let potongan = 0;

  if (menggunakanPromo) {
    const promo1MinPemesanan = 50000;
    const Promo1Potongan = 0.5;
    const promo1MaxPotongan = 50000;

    const promo2MinPemesanan = 25000;
    const promo2Potongan = 0.6;
    const promo2MaxPotongan = 30000;

    if (totalHarga >= promo1MinPemesanan && voucher === "PIJARFOOD5") {
      potongan = Math.min(totalHarga * Promo1Potongan, promo1MaxPotongan);
      totalPembayaran -= potongan;
    } else if (
      totalHarga >= promo2MinPemesanan &&
      voucher === "DITRAKTIRPIJAR"
    ) {
      potongan = Math.min(totalHarga * promo2Potongan, promo2MaxPotongan);
      totalPembayaran -= potongan;
    }
  }

  console.log(`
    Harga       : ${totalHarga}
    Potongan    : ${potongan}
    Biaya Antar : ${tarifPengiriman}
    Pajak       : ${pajak}
    subTotal    : ${totalPembayaran} (harga - potongan + biaya antar + pajak)
  `);

  // return {
  //   harga: totalHarga,
  //   potongan: potongan,
  //   biayaAntar: tarifPengiriman,
  //   pajak: pajak,
  //   subTotal: totalPembayaran,
  // };
};

pijarFood(75000, "PIJARFOOD5", 5, true);
