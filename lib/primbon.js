const axios = require("axios"),
  cheerio = require("cheerio"),
  request = require("request");
function artiMimpi(a) {
  return new Promise((t, n) => {
    axios
      .get(
        `https://www.primbon.com/tafsir_mimpi.php?mimpi=${a}&submit=+Submit+`
      )
      .then(({ data: n }) => {
        const i = cheerio.load(n),
          e = i("#body > font > i").text();
        if (!/Tidak ditemukan/g.test(e)) {
          let n = i("#body")
            .text()
            .split(`Hasil pencarian untuk kata kunci: ${a}`)[1]
            .replace(/\n\n\n\n\n\n\n\n\n/gi, "\n");
          n
            .replace(/\n/gi, "")
            .replace("       ", "")
            .replace('"        ', "")
            .trim(),
            t({ status: !0, result: n });
        } else t({ status: !1 });
      })
      .catch(n);
  });
}
function artiNama(a) {
  return new Promise((t, n) => {
    axios
      .get(`https://www.primbon.com/arti_nama.php?nama=${a}&proses=+Submit%21+`)
      .then(({ data: a }) => {
        let n = cheerio.load(a)("#body").text().split("Nama:")[0];
        n.replace(/\n/gi, "").replace("ARTI NAMA", "").trim(), t({ isi: n });
      })
      .catch(n);
  });
}
function ramalJodoh(a, t) {
  return new Promise((n, i) => {
    axios
      .get(
        `https://www.primbon.com/kecocokan_nama_pasangan.php?nama=${a}&nama2=${t}&proses=+Submit%21+`
      )
      .then(({ data: i }) => {
        const e = cheerio.load(i),
          r = "https://www.primbon.com/" + e("#body > img").attr("src"),
          s = e("#body")
            .text()
            .split(t)[1]
            .replace("< Hitung Kembali", "")
            .split("\n")[0],
          l = s
            .split("Sisi Negatif Anda: ")[0]
            .replace("Sisi Positif Anda: ", ""),
          o = s.split("Sisi Negatif Anda: ")[1];
        n({
          status: !0,
          nama: a,
          nama2: t,
          thumbnail: r,
          positif: l,
          negatif: o,
        });
      })
      .catch(i);
  });
}
function nomorHoki(a) {
  return new Promise((t, n) => {
    request(
      {
        method: "POST",
        url: "https://primbon.com/no_hoki_bagua_shuzi.php",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        form: { nomer: a, submit: " Submit! " },
      },
      function (a, n, i) {
        if (a) throw new Error(a);
        const e = cheerio
          .load(i)("#body")
          .text()
          .split("POTENSI HOKI")[1]
          .replace(
            "\nMeningkatkan Keberuntungan Melalui Nomor Handphone (HP)\nNomor HP adalah gabungan kombinasi angka-angka yang sebenarnya memiliki arti, ada yang membawa pengaruh baik (hoki), biasa, atau bahkan dianggap kurang baik. Sebuah nomor HP bisa saja dianggap cantik, dijual sampai jutaan, bahkan puluhan juta rupiah, namun nomor tersebut belum tentu hoki. Aplikasi ini dibuat untuk mengecek seberapa jauh pengaruh energi suatu deret nomor HP berdasarkan algoritma Bagua Shuzi, yaitu metode China kuno yang sudah berusia ribuan tahun yang bertujuan untuk mengejar keberuntungan melalui pemilihan angka.\n\nBagua Shuzi menjelaskan pengaruh kombinasi angka yang berupa energi Kekayaan (Sheng Qi), Kesehatan (Tian Yi), Cinta/Relasi (Yan Nian), dan Kelancaran/Kestabilan (Fu Wei), sebagai energi positif. Sedangkan energi Perselisihan (Huo Hai), Kehilangan (Liu Sha), Malapetaka (Wu Gui), dan Kehancuran (Jue Ming), sebagai energi negatif. Sebuah nomor dikatakan baik atau hoki jika persentase energi positifnya lebih banyak dibanding energi negatifnya. Karena metode Bagua Shuzi menggunakan algoritma perhitungan yang cukup kompleks, maka tidak heran jika nomor hoki jumlahnya lebih terbatas dibanding nomor cantik.\n",
            ""
          );
        t({ status: !0, result: "POTENSI HOKI" + e });
      }
    );
  });
}
function nomer_hoki(a) {
  return new Promise((t, n) => {
    axios({
      url: "https://primbon.com/no_hoki_bagua_shuzi.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ nomer: a, submit: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let n,
        i = cheerio.load(a)("#body").text().trim();
      try {
        n = {
          status: !0,
          no_hp: i.split("No. HP : ")[1].split("\n")[0],
          angka_shuzi: i.split("Angka Bagua Shuzi : ")[1].split("\n")[0],
          positif: {
            kekayaan: i.split("Kekayaan = ")[1].split("\n")[0],
            kesehatan: i.split("Kesehatan = ")[1].split("\n")[0],
            cinta: i.split("Cinta/Relasi = ")[1].split("\n")[0],
            kestabilan: i.split("Kestabilan = ")[1].split("\n")[0],
            persentase: i.split("%ENERGI NEGATIF")[0].split("% = ")[1] + "%",
          },
          negatif: {
            perselisihan: i.split("Perselisihan = ")[1].split("\n")[0],
            kehilangan: i.split("Kehilangan = ")[1].split("\n")[0],
            malapetaka: i.split("Malapetaka = ")[1].split("\n")[0],
            kehancuran: i.split("Kehancuran = ")[1].split("\n")[0],
            persentase: i
              .split("Kehancuran = ")[1]
              .split("= ")[1]
              .split("\n")[0],
          },
          catatan: i.split("* ")[1].split("Masukkan Nomor HP Anda")[0],
        };
      } catch {
        n = { status: !1 };
      }
      t(n);
    });
  });
}
function tafsir_mimpi(a) {
  return new Promise((t, n) => {
    axios
      .get(
        "https://primbon.com/tafsir_mimpi.php?mimpi=" + a + "&submit=+Submit+"
      )
      .then(({ data: n }) => {
        let i,
          e = cheerio.load(n)("#body").text();
        try {
          i = {
            status: !0,
            mimpi: a,
            arti: e
              .split(`Hasil pencarian untuk kata kunci: ${a}`)[1]
              .split("\n")[0],
            solusi: e.split("Solusi -")[1].trim(),
          };
        } catch {
          i = { status: !1 };
        }
        t(i);
      });
  });
}
function ramalan_jodoh(a, t, n, i, e, r, s, l) {
  return new Promise((o, u) => {
    axios({
      url: "https://primbon.com/ramalan_jodoh.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({
          nama1: a,
          tgl1: t,
          bln1: n,
          thn1: i,
          nama2: e,
          tgl2: r,
          bln2: s,
          thn2: l,
          submit: "  RAMALAN JODOH »  ",
        })
      ),
    }).then(({ data: t }) => {
      let n,
        i = cheerio.load(t)("#body").text();
      try {
        n = {
          status: !0,
          kamu: { nama: a, tgl_lahir: i.split("Tgl. Lahir: ")[1].split(e)[0] },
          pasangan: {
            nama: e,
            tgl_lahir: i
              .split(e)[1]
              .split("Tgl. Lahir: ")[1]
              .split("Dibawah")[0],
          },
          result: i
            .split("begitu pula sebaliknya.")[1]
            .split("Konsultasi Hari Baik Akad Nikah >>>")[0]
            .trim(),
          catatan:
            "Untuk melihat kecocokan jodoh dengan pasangan, dapat dikombinasikan dengan Ramalan Jodoh (Jawa), numerologi Kecocokan Cinta, tingkat keserasian Nama Pasangan, Ramalan Perjalanan Hidup Suami Istri, dan makna dari Tanggal Jadian/Pernikahan.",
        };
      } catch {
        n = { status: !1 };
      }
      o(n);
    });
  });
}
function ramalan_jodoh_bali(a, t, n, i, e, r, s, l) {
  return new Promise((o, u) => {
    axios({
      url: "https://primbon.com/ramalan_jodoh_bali.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({
          nama: a,
          tanggal: t,
          bulan: n,
          tahun: i,
          nama2: e,
          tanggal2: r,
          bulan2: s,
          tahun2: l,
          submit: " Submit! ",
        })
      ),
    }).then(({ data: t }) => {
      let n,
        i = cheerio.load(t)("#body").text();
      try {
        n = {
          status: !0,
          message: {
            nama_anda: {
              nama: a,
              tgl_lahir: i.split("Hari Lahir: ")[1].split("Nama")[0],
            },
            nama_pasangan: {
              nama: e,
              tgl_lahir: i
                .split(e + "Hari Lahir: ")[1]
                .split("HASILNYA MENURUT PAL SRI SEDANAI")[0],
            },
            result: i
              .split("HASILNYA MENURUT PAL SRI SEDANAI. ")[1]
              .split("Konsultasi Hari Baik Akad Nikah >>>")[0],
            catatan:
              "Untuk melihat kecocokan jodoh dengan pasangan, dapat dikombinasikan dengan Ramalan Jodoh (Jawa), numerologi Kecocokan Cinta, tingkat keserasian Nama Pasangan, Ramalan Perjalanan Hidup Suami Istri, dan makna dari Tanggal Jadian/Pernikahan.",
          },
        };
      } catch {
        n = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      o(n);
    });
  });
}
function suami_istri(a, t, n, i, e, r, s, l) {
  return new Promise((o, u) => {
    axios({
      url: "https://primbon.com/suami_istri.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({
          nama1: a,
          tgl1: t,
          bln1: n,
          thn1: i,
          nama2: e,
          tgl2: r,
          bln2: s,
          thn2: l,
          submit: " Submit! ",
        })
      ),
    }).then(({ data: t }) => {
      let n,
        i = cheerio.load(t)("#body").text();
      try {
        n = {
          status: !0,
          suami: { nama: a, tgl_lahir: i.split("Tgl. Lahir: ")[1].split(e)[0] },
          istri: {
            nama: e,
            tgl_lahir: i
              .split(e + "Tgl. Lahir: ")[1]
              .split("HASIL RAMALAN MENURUT USIA PERNIKAHAN")[0],
          },
          hasil: i
            .split("HASIL RAMALAN MENURUT USIA PERNIKAHAN")[1]
            .split("Konsultasi Hari Baik Akad Nikah >>>")[0],
          catatan:
            "Untuk melihat kecocokan jodoh dengan pasangan, dapat dikombinasikan dengan Ramalan Jodoh (Jawa), Ramalan Jodoh (Bali), numerologi Kecocokan Cinta, tingkat keserasian Nama Pasangan, dan makna dari Tanggal Jadian/Pernikahan.",
        };
      } catch {
        n = { status: !1 };
      }
      o(n);
    });
  });
}
function ramalan_cinta(a, t, n, i, e, r, s, l) {
  return new Promise((o, u) => {
    axios({
      url: "https://primbon.com/ramalan_cinta.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({
          nama1: a,
          tanggal1: t,
          bulan1: n,
          tahun1: i,
          nama2: e,
          tanggal2: r,
          bulan2: s,
          tahun2: l,
          submit: " Submit! ",
        })
      ),
    }).then(({ data: t }) => {
      let n,
        i = cheerio.load(t)("#body").text();
      try {
        n = {
          status: !0,
          kamu: { nama: a, tgl_lahir: i.split("Tgl. Lahir : ")[1].split(e)[0] },
          pasangan: {
            nama: e,
            tgl_lahir: i.split(e + "Tgl. Lahir : ")[1].split("Sisi Positif")[0],
          },
          positif: i
            .split("Sisi Positif Anda: ")[1]
            .split("Sisi Negatif Anda:")[0],
          negatif: i
            .split("Sisi Negatif Anda: ")[1]
            .split("< Hitung Kembali")[0]
            .trim(),
          catatan:
            "Untuk melihat kecocokan jodoh dengan pasangan, dapat dikombinasikan dengan primbon Ramalan Jodoh (Jawa), Ramalan Jodoh (Bali), tingkat keserasian Nama Pasangan, Ramalan Perjalanan Hidup Suami Istri, dan makna dari Tanggal Jadian/Pernikahan.",
        };
      } catch {
        n = { status: !1 };
      }
      o(n);
    });
  });
}
function arti_nama(a) {
  return new Promise((t, n) => {
    axios
      .get(
        "https://primbon.com/arti_nama.php?nama1=" + a + "&proses=+Submit%21+"
      )
      .then(({ data: n }) => {
        let i,
          e = cheerio.load(n)("#body").text();
        try {
          i = {
            status: !0,
            nama: a,
            arti: e.split("memiliki arti: ")[1].split("Nama:")[0].trim(),
          };
        } catch {
          i = {
            status: !1,
            message: `Tidak ditemukan arti nama "${a}" Cari dengan kata kunci yang lain.`,
          };
        }
        t(i);
      });
  });
}
function kecocokan_nama(a, t, n, i) {
  return new Promise((e, r) => {
    axios({
      url: "https://primbon.com/kecocokan_nama.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ nama: a, tgl: t, bln: n, thn: i, kirim: " Submit! " })
      ),
    }).then(({ data: t }) => {
      let n,
        i = cheerio.load(t)("#body").text();
      try {
        n = {
          status: !0,
          nama: a,
          tgl_lahir: i.split("Tgl. Lahir: ")[1].split("\n")[0],
          life_path: i.split("Life Path Number : ")[1].split("\n")[0],
          destiny: i.split("Destiny Number : ")[1].split("\n")[0],
          destiny_desire: i.split("Heart's Desire Number : ")[1].split("\n")[0],
          personality: i.split("Personality Number : ")[1].split("\n")[0],
          persentase_kecocokan: i
            .split("PERSENTASE KECOCOKAN")[1]
            .split("< Hitung Kembali")[0]
            .trim(),
          catatan:
            "Gunakan juga aplikasi numerologi Arti Nama, untuk melihat arti dan karakter dari nama anda.",
        };
      } catch {
        n = { status: !1 };
      }
      e(n);
    });
  });
}
function kecocokan_nama_pasangan(a, t) {
  return new Promise((n, i) => {
    axios
      .get(
        "https://primbon.com/kecocokan_nama_pasangan.php?nama1=" +
          a +
          "&nama2=" +
          t +
          "&proses=+Submit%21+"
      )
      .then(({ data: i }) => {
        let e,
          r = cheerio.load(i),
          s = r("#body").text();
        try {
          e = {
            status: !0,
            nama_anda: a,
            nama_pasangan: t,
            positif: s
              .split("Sisi Positif Anda: ")[1]
              .split("Sisi Negatif Anda: ")[0],
            negatif: s
              .split("Sisi Negatif Anda: ")[1]
              .split("< Hitung Kembali")[0],
            gambar: r("#body").find("img").attr("src"),
            catatan:
              "Untuk melihat kecocokan jodoh dengan pasangan, dapat dikombinasikan dengan primbon Ramalan Jodoh (Jawa), Ramalan Jodoh (Bali), numerologi Kecocokan Cinta, Ramalan Perjalanan Hidup Suami Istri, dan makna dari Tanggal Jadian/Pernikahan.",
          };
        } catch (a) {
          console.log(a), (e = { status: !1 });
        }
        n(e);
      });
  });
}
function tanggal_jadian_pernikahan(a, t, n) {
  return new Promise((i, e) => {
    axios
      .get(
        "https://primbon.com/tanggal_jadian_pernikahan.php?tgl=" +
          a +
          "&bln=" +
          t +
          "&thn=" +
          n +
          "&proses=+Submit%21+"
      )
      .then(({ data: a }) => {
        let t,
          n = cheerio.load(a)("#body").text();
        try {
          t = {
            status: !0,
            message: {
              tanggal: n.split("Tanggal: ")[1].split("Karakteristik: ")[0],
              karakteristik: n
                .split("Karakteristik: ")[1]
                .split("< Hitung Kembali")[0],
              catatan:
                "Untuk melihat kecocokan jodoh dengan pasangan, dapat dikombinasikan dengan primbon Ramalan Jodoh (Jawa), Ramalan Jodoh (Bali), numerologi Kecocokan Cinta, tingkat keserasian Nama Pasangan, dan Ramalan Perjalanan Hidup Suami Istri.",
            },
          };
        } catch {
          t = {
            status: !1,
            message: "Error, Mungkin Input Yang Anda Masukkan Salah",
          };
        }
        i(t);
      });
  });
}
function sifat_usaha_bisnis(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/sifat_usaha_bisnis.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tgl: a, bln: t, thn: n, submit: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        e = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            hari_lahir: e.split("Hari Lahir Anda: ")[1].split(n)[0],
            usaha: e.split(n)[1].split("< Hitung Kembali")[0],
            catatan:
              "Setiap manusia memiliki sifat atau karakter yang berbeda-beda dalam menjalankan bisnis atau usaha. Dengan memahami sifat bisnis kita, rekan kita, atau bahkan kompetitor kita, akan membantu kita memperbaiki diri atau untuk menjalin hubungan kerjasama yang lebih baik. Para ahli primbon di tanah Jawa sejak jaman dahulu telah merumuskan karakter atau sifat bisnis seseorang berdasarkan weton hari kelahirannya. Hasil perhitungannya bisa dijadikan referensi untuk memilih bidang usaha atau rekan bisnis yang cocok bagi kita.",
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function rejeki_hoki_weton(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/rejeki_hoki_weton.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tgl: a, bln: t, thn: n, submit: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        e = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            hari_lahir: e.split("Hari Lahir: ")[1].split(n)[0],
            rejeki: e.split(n)[1].split("< Hitung Kembali")[0],
            catatan:
              "Rejeki itu bukan lah tentang ramalan tetapi tentang usaha dan ikhtiar seseorang. From Admin",
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function pekerjaan_weton_lahir(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/pekerjaan_weton_lahir.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tgl: a, bln: t, thn: n, submit: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        e = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            hari_lahir: e.split("Hari Lahir: ")[1].split(n)[0],
            pekerjaan: e.split(n)[1].split("< Hitung Kembali")[0],
            catatan:
              "Setiap manusia membawa potensi bakat dan keberuntungannya sejak lahir, dengan mengetahui potensi tersebut dan menyesuaikannya dengan usaha atau pekerjaan yang dilakukan, diharapkan dapat mempermudah kita meraih kesuksesan. Para ahli primbon di tanah Jawa sejak jaman dahulu telah merumuskan jenis pekerjaan yang cocok berdasarkan weton kelahiran. Hasil perhitungannya bisa kita jadikan referensi untuk memilih pekerjaan atau bidang usaha yang cocok untuk kita.",
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function ramalan_nasib(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/ramalan_nasib.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tanggal: a, bulan: t, tahun: n, hitung: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        n = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            analisa: n
              .split("RAMALAN NASIB (METODE PITAGORAS)")[1]
              .split("Angka Akar ")[0]
              .trim(),
            angka_akar: n.split("Angka Akar ")[1].split("Anda")[0],
            sifat:
              "Anda Adalah Orang yang" +
              n
                .split("Anda adalah orang yang")[1]
                .split("Dalam numerologi Pitagoras,")[0],
            elemen:
              "Dalam numerologi Pitagoras" +
              n
                .split("Dalam numerologi Pitagoras")[1]
                .split("Angka Kombinasi")[0]
                .trim(),
            angka_keberuntungan:
              "Angka Kombinasi" +
              n.split("Angka Kombinasi")[1].split("Tgl. Lahir")[0].trim(),
            catatan:
              "Gunakan juga aplikasi ramalan dengan Kartu Tarot, Tarot Cinta, Kartu Lenormand , ramalan Peruntungan sepanjang tahun. Cari solusi atau nasehat dari masalah anda melalui hexagram I Ching.",
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function cek_potensi_penyakit(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/cek_potensi_penyakit.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tanggal: a, bulan: t, tahun: n, hitung: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        n = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            analisa: n
              .split("CEK POTENSI PENYAKIT (METODE PITAGORAS)")[1]
              .split("Sektor yg dianalisa:")[0]
              .trim(),
            sektor: n
              .split("Sektor yg dianalisa:")[1]
              .split("Anda tidak memiliki elemen")[0]
              .trim(),
            elemen:
              "Anda tidak memiliki elemen " +
              n.split("Anda tidak memiliki elemen")[1].split("*")[0].trim(),
            catatan:
              "Potensi penyakit harus dipandang secara positif. Sakit pada daftar tidak berarti anda akan mengalami semuanya. Anda mungkin hanya akan mengalami 1 atau 2 macam penyakit. Pencegahan adalah yang terbaik, makanan yang sehat, olahraga teratur, istirahat yang cukup, hidup bahagia, adalah resep paling manjur untuk menghindari segala penyakit.",
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function arti_kartu_tarot(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/arti_kartu_tarot.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tgl: a, bln: t, thn: n, kirim: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        n = cheerio.load(a),
        e = n("#body").text();
      try {
        t = {
          status: !0,
          message: {
            tgl_lahir: e.split("Tgl. Lahir ")[1].split(", memiliki")[0],
            simbol_tarot: e
              .split("memiliki simbol tarot:")[1]
              .split("Kartu tarot")[0],
            image: "https://primbon.com/" + n("#body").find("img").attr("src"),
            arti: e.split("Kartu tarot")[1].split("< Hitung Kembali")[0],
            catatan: e.split("< Hitung Kembali")[1].trim(),
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function perhitungan_feng_shui(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/perhitungan_feng_shui.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ nama: a, gender: t, tahun: n, submit: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        n = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            nama: n.split("Nama: ")[1].split("Thn. Lahir: ")[0],
            tahun_lahir: n.split("Thn. Lahir: ")[1].split("Jns. Kelamin: ")[0],
            jenis_kelamin: n
              .split("Jns. Kelamin: ")[1]
              .split("Angka Kua Anda: ")[0],
            angka_kua: n
              .split("Angka Kua Anda: ")[1]
              .split("Anda termasuk kelompok")[0],
            kelompok: n
              .split("Anda termasuk kelompok")[1]
              .split("Orang dalam kelompok ini mempunyai karakter:")[0],
            karakter: n
              .split("Orang dalam kelompok ini mempunyai karakter: ")[1]
              .split("SEKTOR/ARAH BAIK")[0]
              .trim(),
            sektor_baik: n
              .split("SEKTOR/ARAH BAIK")[1]
              .split("SEKTOR/ARAH BURUK")[0],
            sektor_buruk: n
              .split("SEKTOR/ARAH BURUK")[1]
              .split("< Hitung Kembali")[0],
          },
        };
      } catch {
        t = {
          status: !0,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function petung_hari_baik(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/petung_hari_baik.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tgl: a, bln: t, thn: n, submit: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        n = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            tgl_lahir: n
              .split("Watak Hari Menurut Kamarokam")[1]
              .split("Kala Tinantang:")[0],
            kala_tinantang: n
              .split("Kala Tinantang: ")[1]
              .split("< Hitung Kembali")[0]
              .trim(),
            info: "Dalam kitab Primbon dituliskan bahwa setiap hari memiliki karakter atau watak yang berbeda-beda. Dengan mengetahui watak hari tersebut, kita dapat menentukan kapan hari atau saat yang tepat untuk melaksanakan suatu hal atau kegiatan sehingga dapat tercapai tujuan yang kita harapkan. Salah satu cara untuk menentukan watak hari baik/buruk adalah berdasarkan Petung Kamarokam. Petung Kamarokam sebenarnya adalah perpaduan Petung Pancasuda Asli dengan Petung Pancasuda Pakuwon yang sudah disaring dan diringkas intisarinya.",
            catatan:
              "Untuk mencari hari baik berbagai keperluan, dapat dikombinasikan dengan primbon Hari Larangan dan primbon Hari Naas. Sedangkan untuk mencari hari baik Akad Nikah diperlukan perhitungan secara khusus, prosedurnya dapat dilihat disini.",
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function hari_sangar_taliwangke(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/hari_sangar_taliwangke.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tgl: a, bln: t, thn: n, kirim: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        n = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            tgl_lahir: n
              .split(
                "Primbon Hari Larangan (Tanggal Sangar, Bangas Padewan, Taliwangke)"
              )[1]
              .split("Termasuk hari BIASA")[0],
            result:
              "Termasuk hari BIASA" +
              n
                .split("Termasuk hari BIASA")[1]
                .split("Untuk mengetahui watak hari, masukkan:")[0],
            info: n.split("*")[1].split("Catatan:")[0],
            catatan:
              "Untuk mencari hari baik berbagai keperluan, dapat dikombinasikan dengan primbon Hari Baik dan primbon Hari Naas. Sedangkan untuk mencari hari baik Akad Nikah diperlukan perhitungan secara khusus, prosedurnya dapat dilihat disini.",
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function primbon_hari_naas(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/primbon_hari_naas.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tgl: a, bln: t, thn: n, submit: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        n = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            hari_lahir: n.split("Hari Lahir Anda: ")[1].split(",")[0],
            tgl_lahir: n.split("Tgl. ")[1].split("Hari Naas Anda:")[0],
            hari_naas: n.split("Hari Naas Anda: ")[1].split("Catatan:")[0],
            catatan: n.split("Catatan: ")[1].split("< Hitung Kembali")[0],
            info: 'Pada dasarnya setiap orang yang dilahirkan selalu membawa takdir positif dan takdir negatif. Takdir positif seperti misalnya sehat, sukses, rejeki, dll. Sedangkan takdir negatif seperti misalnya sakit, musibah, kematian, dll. Primbon Hari Naas itu sendiri adalah "Ilmu Titen" yang diwariskan oleh leluhur kita  dari tanah Jawa secara turun temurun, yang niteni atau mempelajari bahwa ternyata ada hubungan antara weton hari lahir dengan weton hari naas seseorang. Primbon Hari Naas ini tidak dimaksudkan untuk menakut-nakuti kita, tetapi lebih diharapkan supaya kita jadi lebih waspada akan adanya takdir negatif yang dapat menimpa kita. Pada hari itu, sebaiknya kita menghindari perjalanan jauh ataupun mengadakan acara-acara penting, serta memperbanyak doa dan sedekah.',
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function rahasia_naga_hari(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/rahasia_naga_hari.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tgl: a, bln: t, thn: n, submit: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        n = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            hari_lahir: n.split("RAHASIA NAGA HARI")[1].split(",")[0],
            tgl_lahir: n.split("Tgl. ")[1].split("Naga Hari berada di")[0],
            arah_naga_hari: n
              .split("Naga Hari berada di ")[1]
              .split("< Hitung Kembali")[0],
            catatan: n.split("< Hitung Kembali")[1].trim(),
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function primbon_arah_rejeki(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/primbon_arah_rejeki.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tgl: a, bln: t, thn: n, submit: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        n = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            hari_lahir: n.split("MENURUT PRIMBON GAYATRI:")[1].split(",")[0],
            tgl_lahir: n.split("Tgl. ")[1].split("Rejeki berada di ")[0],
            arah_rejeki: n
              .split("Rejeki berada di ")[1]
              .split("< Hitung Kembali")[0],
            catatan: n.split("< Hitung Kembali")[1].trim(),
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function ramalan_peruntungan(a, t, n, i, e) {
  return new Promise((r, s) => {
    axios({
      url: "https://primbon.com/ramalan_peruntungan.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({
          nama: a,
          tanggal: t,
          bulan: n,
          tahun: i,
          tahun2: e,
          submit: " Submit! ",
        })
      ),
    }).then(({ data: t }) => {
      let n,
        i = cheerio.load(t)("#body").text();
      try {
        n = {
          status: !0,
          message: {
            nama: a,
            tgl_lahir: i
              .split("Tgl. Lahir : ")[1]
              .split("PERUNTUNGAN ANDA DI TAHUN")[0],
            peruntungan_tahun: e,
            result: i
              .split(`PERUNTUNGAN ANDA DI TAHUN ${e}`)[1]
              .split("< Hitung Kembali")[0],
            catatan: i.split("Catatan: ")[1].trim(),
          },
        };
      } catch {
        n = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      r(n);
    });
  });
}
function weton_jawa(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/weton_jawa.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tgl: a, bln: t, thn: n, submit: "  WETON JAWA »  " })
      ),
    }).then(({ data: a }) => {
      let t,
        n = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            tanggal: n.split("Tanggal: ")[1].split("Jumlah Neptu")[0],
            jumlah_neptu: n
              .split("Jumlah Neptu")[1]
              .split("Watak Hari (Kamarokam)")[0],
            watak_hari: n
              .split("Watak Hari (Kamarokam)")[1]
              .split("Naga Hari")[0],
            naga_hari: n
              .split(".Naga Hari")[1]
              .split("Jam Baik (Saptawara & Pancawara)")[0],
            jam_baik: n
              .split("Jam Baik (Saptawara & Pancawara)")[1]
              .split("Watak Kelahiran")[0],
            watak_kelahiran: n
              .split("Watak Kelahiran")[1]
              .split("< Hitung Kembali")[0],
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function sifat_karakter_tanggal_lahir(a, t, n, i) {
  return new Promise((e, r) => {
    axios({
      url: "https://primbon.com/sifat_karakter_tanggal_lahir.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({
          nama: a,
          tanggal: t,
          bulan: n,
          tahun: i,
          submit: " Submit! ",
        })
      ),
    }).then(({ data: t }) => {
      let n,
        i = cheerio.load(t)("#body").text();
      try {
        n = {
          status: !0,
          message: {
            nama: a,
            tgl_lahir: i.split("Tgl. Lahir : ")[1].split("GARIS HIDUP")[0],
            garis_hidup: i.split("GARIS HIDUP")[1].split("< Hitung Kembali")[0],
          },
        };
      } catch {
        n = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      e(n);
    });
  });
}
function potensi_keberuntungan(a, t, n, i) {
  return new Promise((e, r) => {
    axios({
      url: "https://primbon.com/potensi_keberuntungan.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({
          nama: a,
          tanggal: t,
          bulan: n,
          tahun: i,
          submit: " Submit! ",
        })
      ),
    }).then(({ data: t }) => {
      let n,
        i = cheerio.load(t)("#body").text();
      try {
        n = {
          status: !0,
          message: {
            nama: a,
            tgl_lahir: i.split("Tgl. Lahir : ")[1].split("Setiap orang")[0],
            result:
              "Setiap orang" +
              i.split("Setiap orang")[1].split("< Hitung Kembali")[0],
          },
        };
      } catch {
        n = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      e(n);
    });
  });
}
function primbon_memancing_ikan(a, t, n) {
  return new Promise((i, e) => {
    axios({
      url: "https://primbon.com/primbon_memancing_ikan.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({ tgl: a, bln: t, thn: n, submit: " Submit! " })
      ),
    }).then(({ data: a }) => {
      let t,
        n = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            tgl_mancing: n
              .split("PRIMBON MEMANCING IKAN")[1]
              .split("Maka hasilnya: ")[0]
              .trim(),
            result: n.split("Maka hasilnya: ")[1].split("< Hitung Kembali")[0],
            catatan: n.split("< Hitung Kembali")[1].trim(),
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      i(t);
    });
  });
}
function masa_subur(a, t, n, i = "28") {
  return new Promise((e, r) => {
    axios({
      url: "https://primbon.com/masa_subur.php",
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams(
        Object.entries({
          dateday: a,
          datemonth: t,
          dateyear: n,
          days: i,
          calculator_ok: " Submit ",
        })
      ),
    }).then(({ data: a }) => {
      let t,
        n = cheerio.load(a)("#body").text();
      try {
        t = {
          status: !0,
          message: {
            result: n
              .split("KALKULATOR MASA SUBUR")[1]
              .split("Menentukan Ovulasi & Masa Subur")[0]
              .trim(),
            catatan:
              "Menentukan Ovulasi & Masa Subur\n" +
              n.split("Menentukan Ovulasi & Masa Subur")[1].trim(),
          },
        };
      } catch {
        t = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      e(t);
    });
  });
}
function zodiak(a) {
  return new Promise((t, n) => {
    axios.get(`https://primbon.com/zodiak/${a}.htm`).then(({ data: a }) => {
      let n,
        i = cheerio.load(a)("#body").text();
      try {
        n = {
          status: !0,
          message: {
            zodiak: i.split("Nomor Keberuntungan:")[0].trim(),
            nomor_keberuntungan: i
              .split("Nomor Keberuntungan: ")[1]
              .split("\n")[0],
            aroma_keberuntungan: i
              .split("Aroma Keberuntungan: ")[1]
              .split("\n")[0],
            planet_yang_mengitari: i
              .split("Planet Yang Mengitari: ")[1]
              .split("\n")[0],
            bunga_keberuntungan: i
              .split("Bunga Keberuntungan: ")[1]
              .split("\n")[0],
            warna_keberuntungan: i
              .split("Warna Keberuntungan: ")[1]
              .split("\n")[0],
            batu_keberuntungan: i
              .split("Batu Keberuntungan: ")[1]
              .split("\n")[0],
            elemen_keberuntungan: i
              .split("Elemen Keberuntungan: ")[1]
              .split("\n")[0],
            pasangan_zodiak: i.split("Pasangan Serasi: ")[1].split("\n")[0],
            catatan: i
              .split("\n\n\n\n\n\n\n\n\n\n\n")[1]
              .split("<<< Kembali")[0]
              .trim(),
          },
        };
      } catch {
        n = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      t(n);
    });
  });
}
function shio(a) {
  return new Promise((t, n) => {
    axios.get(`https://primbon.com/shio/${a}.htm`).then(({ data: a }) => {
      let n,
        i = cheerio.load(a)("#body").text();
      try {
        n = { status: !0, message: i.split("<<< Kembali")[0].trim() };
      } catch {
        n = {
          status: !1,
          message: "Error, Mungkin Input Yang Anda Masukkan Salah",
        };
      }
      t(n);
    });
  });
}
module.exports = {
  artiNama: artiNama,
  artiMimpi: artiMimpi,
  ramalJodoh: ramalJodoh,
  nomorHoki: nomorHoki,
  nomer_hoki: nomer_hoki,
  tafsir_mimpi: tafsir_mimpi,
  ramalan_jodoh: ramalan_jodoh,
  ramalan_jodoh_bali: ramalan_jodoh_bali,
  suami_istri: suami_istri,
  ramalan_cinta: ramalan_cinta,
  arti_nama: arti_nama,
  kecocokan_nama: kecocokan_nama,
  kecocokan_nama_pasangan: kecocokan_nama_pasangan,
  tanggal_jadian_pernikahan: tanggal_jadian_pernikahan,
  sifat_usaha_bisnis: sifat_usaha_bisnis,
  rejeki_hoki_weton: rejeki_hoki_weton,
  pekerjaan_weton_lahir: pekerjaan_weton_lahir,
  ramalan_nasib: ramalan_nasib,
  cek_potensi_penyakit: cek_potensi_penyakit,
  arti_kartu_tarot: arti_kartu_tarot,
  perhitungan_feng_shui: perhitungan_feng_shui,
  petung_hari_baik: petung_hari_baik,
  hari_sangar_taliwangke: hari_sangar_taliwangke,
  primbon_hari_naas: primbon_hari_naas,
  rahasia_naga_hari: rahasia_naga_hari,
  primbon_arah_rejeki: primbon_arah_rejeki,
  ramalan_peruntungan: ramalan_peruntungan,
  weton_jawa: weton_jawa,
  sifat_karakter_tanggal_lahir: sifat_karakter_tanggal_lahir,
  potensi_keberuntungan: potensi_keberuntungan,
  primbon_memancing_ikan: primbon_memancing_ikan,
  masa_subur: masa_subur,
  zodiak: zodiak,
  shio: shio,
};
