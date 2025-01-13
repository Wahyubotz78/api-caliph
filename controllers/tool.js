const {
    limitAdd: limitAdd,
    apikeyCheck: apikeyCheck,
  } = require("../database/db"),
  { rextester: rextester } = require("../lib/tool"),
  { Captcha: Captcha } = require("captcha-canvas"),
  { tools: tools } = require("caliph-api");
async function php(e, t) {
  const { q: a, apikey: s } = e.query;
  if (!a)
    return t.status(200).send({ status: !1, message: "masukan parameter 'q'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  rextester(a)
    .then((e) => {
      limitAdd(s), t.status(200).send({ status: !0, result: e.Result });
    })
    .catch((e) => {
      console.log(e),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function captchaGen(e, t) {
  try {
    const a = new Captcha();
    let { apikey: s } = e.query,
      r = await apikeyCheck(s, t);
    if (r) return t.status(400).send({ status: !1, message: r });
    limitAdd(s), (a.async = !1), a.addDecoy(), a.drawTrace(), a.drawCaptcha();
    let { result: n } = await tools.uploadFile(a.png);
    (result = {}),
      (result.image_url = n.url_file),
      (result.text = a.text),
      t.status(200).send({ status: 200, result: result });
  } catch (e) {
    console.error(e),
      t.status(500).send({ status: 500, message: "Internal Server Error" });
  }
}
async function countdown(e, t) {
  const { tanggal: a, bulan: s, tahun: r, apikey: n } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tanggal'" });
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'bulan'" });
  if (!r)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'tahun'" });
  let u = await apikeyCheck(n, t);
  if (u) return t.status(200).send({ status: !1, message: u });
  try {
    let e = parseInt(s),
      n =
        1 == e
          ? "Jan"
          : 2 == e
          ? "Feb"
          : 3 == e
          ? "Mar"
          : 4 == e
          ? "Apr"
          : 5 == e
          ? "Mei"
          : 6 == e
          ? "Jun"
          : 7 == e
          ? "Jul"
          : 8 == e
          ? "Aug"
          : 9 == e
          ? "Sep"
          : 10 == e
          ? "Oct"
          : 11 == e
          ? "Nov"
          : "Dec",
      u = new Date(`${n} ${a}, ${r} 00:00:00`).getTime();
    console.log(n);
    let l = u - new Date().getTime(),
      o =
        Math.floor(l / 864e5) +
        " Hari  " +
        Math.floor((l % 864e5) / 36e5) +
        " Jam " +
        Math.floor((l % 36e5) / 6e4) +
        " Menit " +
        Math.floor((l % 6e4) / 1e3) +
        " Detik ";
    t.status(200).send({ status: !0, result: o });
  } catch (e) {
    console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" });
  }
}
module.exports = { php: php, countdown: countdown, captchaGen: captchaGen };
