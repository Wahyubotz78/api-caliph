const {
    limitAdd: limitAdd,
    apikeyCheck: apikeyCheck,
  } = require("../database/db"),
  {
    topupFreeFire: topupFreeFire,
    nickNameFreefire: nickNameFreefire,
    nickNameMobileLegends: nickNameMobileLegends,
    payDiamond: payDiamond,
  } = require("../lib/shops"),
  { hikki: hikki } = require("hikki-me");
async function nickff(e, s) {
  const { id: a, apikey: t } = e.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'id'" });
  let n = await apikeyCheck(t, s);
  if (n) return s.status(200).send({ status: !1, message: n });
  nickNameFreefire(a)
    .then((e) => {
      limitAdd(t), s.status(200).send({ status: !0, data: e });
    })
    .catch((e) => {
      console.log(e),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function topupff(e, s) {
  const { id: a, nominal: t, apikey: n } = e.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'id'" });
  if (!t)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nominal'" });
  let i = await apikeyCheck(n, s);
  if (i) return s.status(200).send({ status: !1, message: i });
  topupFreeFire(a, t)
    .then((e) => {
      limitAdd(n), s.status(200).send({ status: !0, data: e });
    })
    .catch((e) => {
      console.log(e),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function payff(e, s) {
  const { id: a, notelp: t, id2: n, apikey: i } = e.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'id inquiry'" });
  if (!t)
    return s.status(200).send({
      status: !1,
      message: "masukan parameter 'no telp wajib 08xxxxxx'",
    });
  if (!n)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'Id transactionId'" });
  let r = await apikeyCheck(i, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  payDiamond(a, t, n)
    .then((e) => {
      limitAdd(i), s.status(200).send({ status: !0, data: e });
    })
    .catch((e) => {
      console.log(e),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
module.exports = { nickff: nickff, topupff: topupff, payff: payff };
