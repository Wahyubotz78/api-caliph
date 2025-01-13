const {
    limitAdd: limitAdd,
    apikeyCheck: apikeyCheck,
  } = require("../database/db"),
  {
    readFileTxt: readFileTxt,
    readFileJson: readFileJson,
  } = require("../lib/functions"),
  {
    kata: kata,
    cKata: cKata,
    spotify: spotify,
    topChar: topChar,
  } = require("../lib/game");
async function sambungkata(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  kata()
    .then((a) => {
      limitAdd(e), t.status(200).send({ status: !0, kata: a.data.kata });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function ceksambungkata(a, t) {
  const e = a.query.kata;
  if (!e)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'kata'" });
  const { apikey: s } = a.query;
  let n = await apikeyCheck(s, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  cKata(e)
    .then((a) => {
      limitAdd(s), t.status(200).send({ status: a.status, message: a.message });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function tebaklagu(a, t) {
  const { id: e, apikey: s } = a.query;
  if (!e)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'id'" });
  let n = await apikeyCheck(s, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  spotify(e)
    .then((a) => {
      limitAdd(s),
        t.status(200).send({
          status: !0,
          judul: a.judul,
          bantuan: a.judul.replace(/[AIUEOaiueo]/g, "_"),
          durasi: a.durasi,
          url: a.url,
          artis: a.artist,
          preview: a.preview,
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function asahotak(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/asahotak.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          soal: a.soal,
          jawaban: a.jawaban,
          bantuan: a.jawaban.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function caklontong(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/caklontong.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          soal: a.soal,
          jawaban: a.jawaban,
          deskripsi: a.deskripsi,
          bantuan: a.jawaban.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function family100(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/family100.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({ status: !0, soal: a.soal, jawaban: a.jawaban });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function dadu(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/dadu.json")
    .then((a) => {
      limitAdd(e), t.status(200).send({ status: !0, url: a.url, no: a.no });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function susunkata(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/susunkata.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          soal: a.soal,
          tipe: a.tipe,
          jawaban: a.jawaban,
          bantuan: a.jawaban.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function tebakbendera(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/tebakbendera.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          bendera: a.flag,
          gambar: a.img,
          nama: a.name,
          bantuan: a.name.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function tebakgambar(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/tebakgambar.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          img: a.img,
          jawaban: a.jawaban,
          deskripsi: a.deskripsi,
          bantuan: a.jawaban.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function tebakkabupaten(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/tebakkabupaten.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          soal: a.title,
          img: a.url,
          bantuan: a.title.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function tebakkalimat(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/tebakkalimat.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          soal: a.soal,
          jawaban: a.jawaban,
          bantuan: a.jawaban.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function tebakkata(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/tebakkata.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          soal: a.soal,
          jawaban: a.jawaban,
          bantuan: a.jawaban.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function tebakkimia(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/tebakkimia.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          unsur: a.unsur,
          lambang: a.lambang,
          bantuan: a.unsur.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function tebaklirik(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/tebaklirik.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          soal: a.soal,
          jawaban: a.jawaban,
          bantuan: a.jawaban.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function tekateki(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/tekateki.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          soal: a.soal,
          jawaban: a.jawaban,
          bantuan: a.jawaban.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function siapakahaku(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileJson("./lib/data/game/siapakahaku.json")
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          soal: a.soal,
          jawaban: a.jawaban,
          bantuan: a.jawaban.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function dare(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileTxt("./lib/data/game/dare.txt")
    .then((a) => {
      limitAdd(e), t.status(200).send({ status: !0, result: a });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function truth(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  readFileTxt("./lib/data/game/truth.txt")
    .then((a) => {
      limitAdd(e), t.status(200).send({ status: !0, result: a });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function tebakanime(a, t) {
  const { apikey: e } = a.query;
  let s = await apikeyCheck(e, t);
  if (s) return t.status(200).send({ status: !1, message: s });
  topChar()
    .then((a) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          nama: a.nama,
          anime: a.anime,
          img: a.img,
          bantuan: a.nama.replace(/[AIUEOaiueo]/g, "_"),
        });
    })
    .catch((a) => {
      console.log(a),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
module.exports = {
  tebakanime: tebakanime,
  tebaklagu: tebaklagu,
  asahotak: asahotak,
  caklontong: caklontong,
  family100: family100,
  dadu: dadu,
  susunkata: susunkata,
  tebakbendera: tebakbendera,
  tebakgambar: tebakgambar,
  tebakkabupaten: tebakkabupaten,
  tebakkalimat: tebakkalimat,
  tebakkata: tebakkata,
  tebakkimia: tebakkimia,
  tebaklirik: tebaklirik,
  tekateki: tekateki,
  siapakahaku: siapakahaku,
  dare: dare,
  truth: truth,
  ceksambungkata: ceksambungkata,
  sambungkata: sambungkata,
};
