const {
    limitAdd: limitAdd,
    apikeyCheck: apikeyCheck,
  } = require("../database/db"),
  { API: API, city: city } = require("../lib/functions"),
  {
    listsurah: listsurah,
    surah: surah,
    tafsirsurah: tafsirsurah,
  } = require("../lib/religion"),
  sholatAll = require("../lib/salat"),
  fetch = require("node-fetch"),
  { query: query } = require("express");
async function salat(s, t) {
  const { kota: a, apikey: e } = s.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'kota'" });
  let r = await apikeyCheck(e, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  let u = await city().then((s) => s),
    n = a.replace(" ", "-").toUpperCase();
  if (!u.includes(n))
    return t
      .status(200)
      .send({ status: !1, message: "Kota tidak ditemukan!", kota: u });
  sholatAll(a)
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, data: s.data });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function alkitabsearch(s, t) {
  const { q: a, apikey: e } = s.query;
  if (!a)
    return t.status(200).send({ status: !1, message: "masukan parameter 'q'" });
  let r = await apikeyCheck(e, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  let u = await fetch(API("jojo", "/api/alkitabsearch", { q: a }));
  if (!u.ok)
    return t.status(200).send({ status: !1, message: "Server Maintenance!" });
  let n = await u.json();
  if (200 != n.status)
    return t.status(200).send({ status: !1, message: "Tidak ditemukan." });
  t.status(200).send({ status: !0, data: n.result });
}
async function lsurah(s, t) {
  const { apikey: a } = s.query;
  let e = await apikeyCheck(a, t);
  if (e) return t.status(200).send({ status: !1, message: e });
  listsurah()
    .then((s) => {
      limitAdd(a), t.status(200).send({ status: !0, listsurah: s.listsurah });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function ssurah(s, t) {
  const { q: a, apikey: e } = s.query;
  if (!a)
    return t.status(200).send({ status: !1, message: "masukan parameter 'q'" });
  let r = await apikeyCheck(e, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  surah(query)
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, result: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function tsurah(s, t) {
  const { q: a, apikey: e } = s.query;
  if (!a)
    return t.status(200).send({ status: !1, message: "masukan parameter 'q'" });
  let r = await apikeyCheck(e, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  surah(query)
    .then((s) => {
      limitAdd(e),
        t.status(200).send({
          status: !0,
          surah: s.surah,
          tafsir: s.tafsir,
          type: s.type,
          source: s.source,
        });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
module.exports = {
  alkitabsearch: alkitabsearch,
  salat: salat,
  ssurah: ssurah,
  lsurah: lsurah,
  tsurah: tsurah,
};
