const {
    limitAdd: limitAdd,
    apikeyCheck: apikeyCheck,
  } = require("../database/db"),
  {
    nomer_hoki: nomer_hoki,
    tafsir_mimpi: tafsir_mimpi,
    ramalan_jodoh: ramalan_jodoh,
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
    shio: s,
  } = require("../lib/primbon"),
  mp = "masukan parameter ";
function tbt(a, t, s) {
  return a
    ? t
      ? s
        ? void 0
        : `${mp}'tahun'`
      : `${mp}'bulan'`
    : `${mp}'tanggal'`;
}
async function nomorhoki(a, t) {
  const { no: s, apikey: e } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'no'" });
  let n = await apikeyCheck(e, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  let r = await nomer_hoki(s);
  if (!r.status)
    return t.status(200).send({ status: !1, message: "Internal Server Error" });
  limitAdd(e),
    t.status(200).send({
      status: !0,
      no_hp: r.no_hp,
      angka_shuzi: r.angka_shuzi,
      positif: r.positif,
      negatif: r.negatif,
      catatan: r.catatan,
    });
}
async function tafsirmimpi(a, t) {
  const { query: s, apikey: e } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'query'" });
  let n = await apikeyCheck(e, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  let r = await tafsir_mimpi(s);
  if (!r.status)
    return t.status(200).send({ status: !1, message: "Internal Server Error" });
  limitAdd(e),
    t
      .status(200)
      .send({ status: !0, mimpi: r.mimpi, arti: r.arti, solusi: r.solusi });
}
async function ramaljodoh(a, t) {
  const {
    nama: s,
    tanggal: e,
    bulan: n,
    tahun: r,
    nama2: u,
    tanggal2: i,
    bulan2: m,
    tahun2: g,
    apikey: o,
  } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  if (!e)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tanggal'" });
  if (!n)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'bulan'" });
  if (!r)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tahun'" });
  if (!u)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama2'" });
  if (!i)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tanggal2'" });
  if (!m)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'bulan2'" });
  if (!g)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tahun2'" });
  let l = await apikeyCheck(o, t);
  if (l) return t.status(200).send({ status: !1, message: l });
  let k = await ramalan_jodoh(s, e, n, r, u, i, m, g);
  if (!k.status)
    return t.status(200).send({ status: !1, message: "Internal Server Error" });
  limitAdd(o),
    t.status(200).send({
      status: !0,
      kamu: k.kamu,
      pasangan: k.pasangan,
      result: k.result,
      catatan: k.catatan,
    });
}
async function suamiistri(a, t) {
  const {
    nama: s,
    tanggal: e,
    bulan: n,
    tahun: r,
    nama2: u,
    tanggal2: i,
    bulan2: m,
    tahun2: g,
    apikey: o,
  } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  if (!e)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tanggal'" });
  if (!n)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'bulan'" });
  if (!r)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tahun'" });
  if (!u)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama2'" });
  if (!i)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tanggal2'" });
  if (!m)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'bulan2'" });
  if (!g)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tahun2'" });
  let l = await apikeyCheck(o, t);
  if (l) return t.status(200).send({ status: !1, message: l });
  let k = await suami_istri(s, e, n, r, u, i, m, g);
  if (!k.status)
    return t.status(200).send({ status: !1, message: "Internal Server Error" });
  limitAdd(o),
    t.status(200).send({
      status: !0,
      suami: k.suami,
      istri: k.istri,
      hasil: k.hasil,
      catatan: k.catatan,
    });
}
async function ramalancinta(a, t) {
  const {
    nama: s,
    tanggal: e,
    bulan: n,
    tahun: r,
    nama2: u,
    tanggal2: i,
    bulan2: m,
    tahun2: g,
    apikey: o,
  } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  if (!e)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tanggal'" });
  if (!n)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'bulan'" });
  if (!r)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tahun'" });
  if (!u)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama2'" });
  if (!i)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tanggal2'" });
  if (!m)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'bulan2'" });
  if (!g)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tahun2'" });
  let l = await apikeyCheck(o, t);
  if (l) return t.status(200).send({ status: !1, message: l });
  let k = await ramalan_cinta(s, e, n, r, u, i, m, g);
  if (!k.status)
    return t.status(200).send({ status: !1, message: "Internal Server Error" });
  limitAdd(o),
    t.status(200).send({
      status: !0,
      kamu: k.kamu,
      pasangan: k.pasangan,
      positif: k.positif,
      negatif: k.negatif,
      catatan: k.catatan,
    });
}
async function artinama(a, t) {
  const { nama: s, apikey: e } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  let n = await apikeyCheck(e, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  let r = await arti_nama(s);
  if (!r.status)
    return t.status(200).send({ status: !1, message: "Internal Server Error" });
  limitAdd(e), t.status(200).send({ status: !0, nama: r.nama, arti: r.arti });
}
async function kecocokannama(a, t) {
  const { nama: s, tanggal: e, bulan: n, tahun: r, apikey: u } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tanggal'" });
  let i = tbt(e, n, r);
  if (i) return t.status(200).send({ status: !1, message: i });
  let m = await apikeyCheck(u, t);
  if (m) return t.status(200).send({ status: !1, message: m });
  let g = await kecocokan_nama(s, e, n, r);
  if (!g.status)
    return t.status(200).send({ status: !1, message: "Internal Server Error" });
  limitAdd(u),
    t.status(200).send({
      status: !0,
      nama: g.nama,
      tgl_lahir: g.tgl_lahir,
      life_path: g.life_path,
      destiny: g.destiny,
      destiny_desire: g.destiny_desire,
      personality: g.personality,
      persentase_kecocokan: g.persentase_kecocokan,
      catatan: g.catatan,
    });
}
async function kecocokannamapasangan(a, t) {
  const { nama: s, nama2: e, apikey: n } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  if (!e)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama2'" });
  let r = await apikeyCheck(n, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  let u = await kecocokan_nama_pasangan(s, e);
  if (!u.status)
    return t.status(200).send({ status: !1, message: "Internal Server Error" });
  limitAdd(n),
    t.status(200).send({
      status: !0,
      nama_anda: u.nama_anda,
      nama_pasangan: u.nama_pasangan,
      positif: u.positif,
      negatif: u.negatif,
      gambar: u.gambar,
      catatan: u.catatan,
    });
}
async function tanggaljadianpernikahan(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  tanggal_jadian_pernikahan(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function sifatusahabisnis(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  sifat_usaha_bisnis(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function rejekihokiweton(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  rejeki_hoki_weton(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function pekerjaanwetonlahir(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  pekerjaan_weton_lahir(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function ramalannasib(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  ramalan_nasib(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function cekpotensipenyakit(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  cek_potensi_penyakit(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function artikartutarot(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  arti_kartu_tarot(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function perhitunganfengshui(a, t) {
  const { nama: s, gender: e, tahun: n, apikey: r } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  if (!e)
    return t.status(200).send({
      status: !1,
      message: "masukan parameter 'gender' | 1 = laki-laki | 2 = perempuan",
    });
  if (!n)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tahun'" });
  let u = await apikeyCheck(r, t);
  if (u) return t.status(200).send({ status: !1, message: u });
  perhitungan_feng_shui(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function petungharibaik(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  petung_hari_baik(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function harisangartaliwangke(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  hari_sangar_taliwangke(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function primbonharinaas(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  primbon_hari_naas(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function rahasianagahari(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  rahasia_naga_hari(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function primbonarahrejeki(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  primbon_arah_rejeki(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function ramalanperuntungan(a, t) {
  const {
    nama: s,
    tanggal: e,
    bulan: n,
    tahun: r,
    tahun2: u,
    apikey: i,
  } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  let m = tbt(e, n, r);
  if (m) return t.status(200).send({ status: !1, message: m });
  if (!u)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tahun2'" });
  let g = await apikeyCheck(i, t);
  if (g) return t.status(200).send({ status: !1, message: g });
  ramalan_peruntungan(e, n, r)
    .then((a) => {
      limitAdd(i), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function wetonjawa(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  weton_jawa(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function sifatkaraktertanggallahir(a, t) {
  const { nama: s, tanggal: e, bulan: n, tahun: r, apikey: u } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  let i = tbt(e, n, r);
  if (i) return t.status(200).send({ status: !1, message: i });
  let m = await apikeyCheck(u, t);
  if (m) return t.status(200).send({ status: !1, message: m });
  sifat_karakter_tanggal_lahir(s, e, n, r)
    .then((a) => {
      limitAdd(u), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function potensikeberuntungan(a, t) {
  const { nama: s, tanggal: e, bulan: n, tahun: r, apikey: u } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  let i = tbt(e, n, r);
  if (i) return t.status(200).send({ status: !1, message: i });
  let m = await apikeyCheck(u, t);
  if (m) return t.status(200).send({ status: !1, message: m });
  potensi_keberuntungan(s, e, n, r)
    .then((a) => {
      limitAdd(u), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function primbonmemancingikan(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  primbon_memancing_ikan(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function masasubur(a, t) {
  const { tanggal: s, bulan: e, tahun: n, apikey: r } = a.query;
  let u = tbt(s, e, n);
  if (u) return t.status(200).send({ status: !1, message: u });
  let i = await apikeyCheck(r, t);
  if (i) return t.status(200).send({ status: !1, message: i });
  masa_subur(s, e, n)
    .then((a) => {
      limitAdd(r), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function zodiakk(a, t) {
  const { zodiac: s, apikey: e } = a.query;
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'zodiac'" });
  let n = await apikeyCheck(e, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  let r = s.toLowerCase(),
    u = [
      "capricorn",
      "aquarius",
      "pisces",
      "aries",
      "taurus",
      "gemini",
      "cancer",
      "leo",
      "virgo",
      "libra",
      "scorpio",
      "sagitarius",
    ];
  if (!u.includes(r))
    return t
      .status(200)
      .send({ status: !1, message: `'${s}' tidak valid!`, pilihan: u });
  zodiak(s)
    .then((a) => {
      limitAdd(e), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function shioo(a, t) {
  const { shio: e, apikey: n } = a.query;
  if (!e)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'shio'" });
  let r = await apikeyCheck(n, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  let u = e.toLowerCase(),
    i = [
      "tikus",
      "kerbau",
      "macam",
      "kelinci",
      "naga",
      "ular",
      "kuda",
      "kambing",
      "monyet",
      "ayam",
      "anjing",
      "babi",
    ];
  if (!i.includes(u))
    return t
      .status(200)
      .send({ status: !1, message: `'${e}' tidak valid!`, pilihan: i });
  s(e)
    .then((a) => {
      limitAdd(n), t.status(200).send({ status: !0, data: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
module.exports = {
  nomorhoki: nomorhoki,
  tafsirmimpi: tafsirmimpi,
  ramaljodoh: ramaljodoh,
  suamiistri: suamiistri,
  ramalancinta: ramalancinta,
  artinama: artinama,
  kecocokannama: kecocokannama,
  kecocokannamapasangan: kecocokannamapasangan,
  tanggaljadianpernikahan: tanggaljadianpernikahan,
  sifatusahabisnis: sifatusahabisnis,
  rejekihokiweton: rejekihokiweton,
  pekerjaanwetonlahir: pekerjaanwetonlahir,
  ramalannasib: ramalannasib,
  cekpotensipenyakit: cekpotensipenyakit,
  artikartutarot: artikartutarot,
  perhitunganfengshui: perhitunganfengshui,
  petungharibaik: petungharibaik,
  harisangartaliwangke: harisangartaliwangke,
  primbonharinaas: primbonharinaas,
  rahasianagahari: rahasianagahari,
  primbonarahrejeki: primbonarahrejeki,
  ramalanperuntungan: ramalanperuntungan,
  wetonjawa: wetonjawa,
  sifatkaraktertanggallahir: sifatkaraktertanggallahir,
  potensikeberuntungan: potensikeberuntungan,
  primbonmemancingikan: primbonmemancingikan,
  masasubur: masasubur,
  zodiakk: zodiakk,
  shioo: shioo,
};
