const {
    limitAdd: limitAdd,
    apikeyCheck: apikeyCheck,
  } = require("../database/db"),
  {
    groupSearch: groupSearch,
    pintSearch: pintSearch,
    Wikipedia: Wikipedia,
  } = require("../lib/search");
async function carigrup(e, s) {
  const { q: t, apikey: a } = e.query;
  if (!t)
    return s.status(200).send({ status: !1, message: "masukan parameter 'q'" });
  let r = await apikeyCheck(a, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  groupSearch(t)
    .then((e) => {
      limitAdd(a), s.status(200).send({ status: !0, data: e });
    })
    .catch((e) => {
      console.log(e),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function pinterestSearch(e, s) {
  const { q: t, apikey: a } = e.query;
  if (!t)
    return s.status(200).send({ status: !1, message: "masukan parameter 'q'" });
  let r = await apikeyCheck(a, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  pintSearch(t)
    .then((e) => {
      limitAdd(a), s.status(200).send({ status: !0, data: e });
    })
    .catch((e) => {
      console.log(e),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function wikipedia(e, s) {
  const { q: t, apikey: a } = e.query;
  if (!t)
    return s.status(200).send({ status: !1, message: "masukan parameter 'q'" });
  let r = await apikeyCheck(a, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  let u = await Wikipedia(t);
  if (200 != u.status)
    return s.status(200).send({ status: !1, message: "Internal Server Error" });
  limitAdd(a),
    s.status(200).send({
      status: !0,
      judul: u.result.judul,
      thumb: u.result.thumb,
      isi: u.result.isi,
    });
}
async function sswebs(e, s) {
  const { url: t, apikey: a } = e.query;
  if (!t)
    return s
      .status(400)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(a, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  try {
    (isfull = e.query.hasOwnProperty("full")),
      (eses = await require("../lib/ssweb")(t, isfull)),
      s.set("Content-Length", eses.length),
      s.set("Content-Type", "image/png"),
      s.send(eses);
  } catch (e) {
    console.error(e),
      s.status(500).send({
        status: !1,
        message: "Internal Server Error, chat owner to fix the feature!",
      });
  }
}
async function sswebhp(e, s) {
  const { url: t, apikey: a } = e.query;
  if (!t)
    return s
      .status(400)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(a, s);
  if (r) return s.status(400).send({ status: !1, message: r });
  try {
    (isfull = e.query.hasOwnProperty("full")),
      (eses = await require("../lib/sshp")(t, isfull)),
      s.set("Content-Length", eses.length),
      s.set("Content-Type", "image/png"),
      s.send(eses);
  } catch (e) {
    console.error(e),
      s.status(500).send({
        status: !1,
        message: "Internal Server Error, chat owner to fix the feature!",
      });
  }
}
async function google(e, s) {
  const { query: t, apikey: a } = e.query;
  if (!t)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'query'" });
  let r = await apikeyCheck(a, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  (yt = require("google-it")),
    (ser = await yt({ query: e.query.query })),
    s.json({ status: "success", result: ser });
}
module.exports = {
  carigrup: carigrup,
  pinterestSearch: pinterestSearch,
  wikipedia: wikipedia,
  sswebs: sswebs,
  sswebhp: sswebhp,
  google: google,
};
