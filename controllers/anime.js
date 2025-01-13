const {
    limitAdd: limitAdd,
    apikeyCheck: apikeyCheck,
  } = require("../database/db"),
  {
    scrapKiryuuSearch: scrapKiryuuSearch,
    scrapKiryuuGet: scrapKiryuuGet,
    scrapMangatoonSearch: scrapMangatoonSearch,
    scrapMangatoonGet: scrapMangatoonGet,
    scrapMangatoonRead: scrapMangatoonRead,
    scrapKusonime: scrapKusonime,
    animeIdLatest: animeIdLatest,
    animeIdSr: animeIdSr,
    animeIdGet: animeIdGet,
    manga: manga,
    chara: chara,
    Otakudesu: Otakudesu,
  } = require("../lib/anime");
async function kiryuusearch(a, e) {
  const { query: s, apikey: t } = a.query;
  if (!s)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'query'" });
  let r = await apikeyCheck(t, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  scrapKiryuuSearch(s)
    .then((a) => {
      limitAdd(t), e.status(200).send({ status: !0, data: a });
    })
    .catch((a) => {
      console.log(a),
        e.status(200).send({ status: 200, message: "Internal Server Error" });
    });
}
async function kiryuuget(a, e) {
  const { url: s, apikey: t } = a.query;
  if (!s)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(t, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  scrapKiryuuGet(s)
    .then((a) => {
      limitAdd(t), e.status(200).send(a);
    })
    .catch((a) => {
      console.log(a),
        e.status(200).send({ status: 200, message: "Internal Server Error" });
    });
}
async function mangatoonsearch(a, e) {
  const { query: s, apikey: t } = a.query;
  if (!s)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'query'" });
  let r = await apikeyCheck(t, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  scrapMangatoonSearch(s)
    .then((a) => {
      limitAdd(t), e.status(200).send({ status: !0, data: a });
    })
    .catch((a) => {
      console.log(a),
        e.status(200).send({ status: 200, message: "Internal Server Error" });
    });
}
async function mangatoonget(a, e) {
  const { url: s, apikey: t } = a.query;
  if (!s)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(t, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  scrapMangatoonGet(s)
    .then((a) => {
      limitAdd(t), e.status(200).send(a);
    })
    .catch((a) => {
      console.log(a),
        e.status(200).send({ status: 200, message: "Internal Server Error" });
    });
}
async function mangatoonread(a, e) {
  const { url: s, apikey: t } = a.query;
  if (!s)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(t, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  let n = await scrapMangatoonRead(s);
  n.status ||
    e.status(200).send({ status: 200, message: "Internal Server Error" }),
    limitAdd(t),
    e.status(200).send({
      status: !0,
      title: n.title,
      episode: n.episode,
      next_page: n.next_page,
      before_page: n.before_page,
      result: n.result,
    });
}
async function kusonime(a, e) {
  const { query: s, apikey: t } = a.query;
  if (!s)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'query'" });
  let r = await apikeyCheck(t, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  scrapKusonime(s)
    .then((a) => {
      limitAdd(t), e.status(200).send(a);
    })
    .catch((a) => {
      console.log(a),
        e.status(200).send({ status: 200, message: "Internal Server Error" });
    });
}
async function animeidl(a, e) {
  const { apikey: s } = a.query;
  let t = await apikeyCheck(s, e);
  if (t) return e.status(200).send({ status: !1, message: t });
  animeIdLatest()
    .then((a) => {
      limitAdd(s), e.status(200).send({ status: !0, data: a });
    })
    .catch((a) => {
      console.log(a),
        e.status(200).send({ status: 200, message: "Internal Server Error" });
    });
}
async function animeidsearch(a, e) {
  const { query: s, apikey: t } = a.query;
  if (!s)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'query'" });
  let r = await apikeyCheck(t, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  animeIdSr(s)
    .then((a) => {
      limitAdd(t), e.status(200).send({ status: !0, data: a });
    })
    .catch((a) => {
      console.log(a),
        e.status(200).send({ status: 200, message: "Internal Server Error" });
    });
}
async function animeidget(a, e) {
  const { url: s, apikey: t } = a.query;
  if (!s)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(t, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  animeIdGet(s)
    .then((a) => {
      limitAdd(t), e.status(200).send(a);
    })
    .catch((a) => {
      console.log(a),
        e.status(200).send({ status: 200, message: "Internal Server Error" });
    });
}
async function mangasearch(a, e) {
  const { query: s, apikey: t } = a.query;
  if (!s)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'query'" });
  let r = await apikeyCheck(t, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  manga(s)
    .then((a) => {
      limitAdd(t), e.status(200).send(a);
    })
    .catch((a) => {
      console.log(a),
        e.status(200).send({ status: 200, message: "Internal Server Error" });
    });
}
async function character(a, e) {
  const { query: s, apikey: t } = a.query;
  if (!s)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'query'" });
  let r = await apikeyCheck(t, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  chara(s)
    .then((a) => {
      limitAdd(t),
        e.status(200).send({
          status: !0,
          character: a.character,
          link: a.link,
          thumb: a.thumbnail,
        });
    })
    .catch((a) => {
      console.log(a),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function otakudesu(a, e) {
  const { query: s, apikey: t } = a.query;
  if (!s)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'query'" });
  let r = await apikeyCheck(t, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  Otakudesu(s)
    .then((a) => {
      limitAdd(t), e.status(200).send(a);
    })
    .catch((a) => {
      console.log(a),
        e.status(200).send({ status: 200, message: "Internal Server Error" });
    });
}
module.exports = {
  kiryuusearch: kiryuusearch,
  kiryuuget: kiryuuget,
  mangatoonsearch: mangatoonsearch,
  mangatoonget: mangatoonget,
  mangatoonread: mangatoonread,
  kusonime: kusonime,
  animeidl: animeidl,
  animeidsearch: animeidsearch,
  animeidget: animeidget,
  mangasearch: mangasearch,
  character: character,
  otakudesu: otakudesu,
};
