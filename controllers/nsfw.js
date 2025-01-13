const {
    limitAdd: limitAdd,
    apikeyCheck: apikeyCheck,
  } = require("../database/db"),
  { readFileJson: readFileJson } = require("../lib/functions"),
  {
    randomHentaiGif: randomHentaiGif,
    pussy: pussy,
    nekoGif: nekoGif,
    neko: neko,
    lesbian: lesbian,
    kuni: kuni,
    cumsluts: cumsluts,
    classic: classic,
    boobs: boobs,
    bJ: bJ,
    anal: anal,
    avatar: avatar,
    yuri: yuri,
    trap: trap,
    tits: tits,
    girlSoloGif: girlSoloGif,
    girlSolo: girlSolo,
    pussyWankGif: pussyWankGif,
    pussyArt: pussyArt,
    kemonomimi: kemonomimi,
    kitsune: kitsune,
    keta: keta,
    holo: holo,
    holoEro: holoEro,
    hentai: hentai,
    futanari: futanari,
    femdom: femdom,
    feetGif: feetGif,
    eroFeet: eroFeet,
    feet: feet,
    ero: ero,
    eroKitsune: eroKitsune,
    eroKemonomimi: eroKemonomimi,
    eroNeko: eroNeko,
    eroYuri: eroYuri,
    cumArts: cumArts,
    blowJob: blowJob,
    spank: spank,
    gasm: gasm,
    xnxxSearch: xnxxSearch,
    xnxxDownloader: xnxxDownloader,
    randomnekopoi: randomnekopoi,
    nekopoidl: nekopoidl,
  } = require("../lib/nsfw"),
  nh = require("kasu.nhentaiapi.js"),
  nhe = new nh();
async function nhentai(s, t) {
  const { id: e, apikey: a } = s.query;
  if (!e)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'id'" });
  let n = await apikeyCheck(a, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  const r = await nhe.getID(e).json();
  t.status(200).send({ status: !0, result: r });
}
async function xnxxsearch(s, t) {
  const { query: e, apikey: a } = s.query;
  if (!e)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'query'" });
  let n = await apikeyCheck(a, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  xnxxSearch(e)
    .then((s) => {
      limitAdd(a), t.status(200).send({ result: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function xnxxdl(s, t) {
  const { url: e, apikey: a } = s.query;
  if (!e)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let n = await apikeyCheck(a, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  xnxxDownloader(e)
    .then((s) => {
      limitAdd(a), t.status(200).send({ result: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nera(s, t) {
  const { apikey: e } = s.query;
  if (!e)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'apikey'" });
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  randomnekopoi()
    .then((s) => {
      limitAdd(e), t.status(200).send({ data: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nedo(s, t) {
  const { url: e } = s.query;
  if (!e)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let a = await apikeyCheck(apikey, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  nekopoidl(e)
    .then((s) => {
      limitAdd(apikey), t.status(200).send({ result: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function randomhentaigif(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  randomHentaiGif()
    .then((s) => {
      limitAdd(e), t.status(200).send({ result: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwpussy(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  pussy()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nekogif(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  nekoGif()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwneko(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  neko()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwlesbian(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  lesbian()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwkuni(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  kuni()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwcumsluts(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  cumsluts()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwclassic(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  classic()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwboobs(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  boobs()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function bj(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  bJ()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwanal(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  anal()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwavatar(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  avatar()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwyuri(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  yuri()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwtrap(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  trap()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwtits(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  tits()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function girlsologif(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  girlSoloGif()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function girlsolo(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  girlSolo()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function pussywankgif(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  pussyWankGif()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function pussyart(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  pussyArt()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwkemonomimi(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  kemonomimi()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwkitsune(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  kitsune()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwketa(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  keta()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwholo(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  holo()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function holoero(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  holoEro()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwhentai(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  hentai()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwfutanari(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  futanari()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwfemdom(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  femdom()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function feetgif(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  feetGif()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function erofeet(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  eroFeet()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwfeet(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  feet()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwero(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  ero()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function erokitsune(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  eroKitsune()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function erokemonomimi(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  eroKemonomimi()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function eroneko(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  eroNeko()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function eroyuri(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  eroYuri()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function cumarts(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  cumArts()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function blowjob(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  blowJob()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwspank(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  spank()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function nsfwgasm(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  gasm()
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function ahegao(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/ahegao.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function ass(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/ass.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function bdsm(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/bdsm.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function cuckold(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/cuckold.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function cum(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/cum.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function foot(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/foot.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function gangbang(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/gangbang.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function glasses(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/glasses.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function hntgifs(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/hnt_gifs.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function jahy(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/jahy.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function manga(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/manga.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function masturbation(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/masturbation.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function orgy(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/orgy.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function panties(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/panties.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function sfwneko(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/sfwNeko.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function thighs(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/thighs.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function zettairyouiki(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/zettaiRyouiki.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function tentacles(s, t) {
  const { apikey: e } = s.query;
  let a = await apikeyCheck(e, t);
  if (a) return t.status(200).send({ status: !1, message: a });
  readFileJson("./lib/data/nsfw/tentacles.json")
    .then((s) => {
      limitAdd(e), t.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
(nhe.url = "https://nhentai.net"),
  nhe.connection.start(),
  (module.exports = {
    nhentai: nhentai,
    xnxxsearch: xnxxsearch,
    xnxxdl: xnxxdl,
    nera: nera,
    nedo: nedo,
    randomhentaigif: randomhentaigif,
    nsfwpussy: nsfwpussy,
    nekogif: nekogif,
    nsfwneko: nsfwneko,
    nsfwlesbian: nsfwlesbian,
    nsfwkuni: nsfwkuni,
    nsfwcumsluts: nsfwcumsluts,
    nsfwclassic: nsfwclassic,
    nsfwboobs: nsfwboobs,
    bj: bj,
    nsfwanal: nsfwanal,
    nsfwavatar: nsfwavatar,
    nsfwyuri: nsfwyuri,
    nsfwtrap: nsfwtrap,
    nsfwtits: nsfwtits,
    girlsologif: girlsologif,
    girlsolo: girlsolo,
    pussywankgif: pussywankgif,
    pussyart: pussyart,
    nsfwkemonomimi: nsfwkemonomimi,
    nsfwkitsune: nsfwkitsune,
    nsfwketa: nsfwketa,
    nsfwholo: nsfwholo,
    holoero: holoero,
    nsfwhentai: nsfwhentai,
    nsfwfutanari: nsfwfutanari,
    nsfwfemdom: nsfwfemdom,
    feetgif: feetgif,
    erofeet: erofeet,
    nsfwfeet: nsfwfeet,
    nsfwero: nsfwero,
    erokitsune: erokitsune,
    erokemonomimi: erokemonomimi,
    eroneko: eroneko,
    eroyuri: eroyuri,
    cumarts: cumarts,
    blowjob: blowjob,
    nsfwspank: nsfwspank,
    nsfwgasm: nsfwgasm,
    ahegao: ahegao,
    ass: ass,
    bdsm: bdsm,
    cuckold: cuckold,
    cum: cum,
    ero: ero,
    foot: foot,
    gangbang: gangbang,
    glasses: glasses,
    hentai: hentai,
    hntgifs: hntgifs,
    jahy: jahy,
    manga: manga,
    masturbation: masturbation,
    orgy: orgy,
    panties: panties,
    pussy: pussy,
    sfwneko: sfwneko,
    tentacles: tentacles,
    thighs: thighs,
    yuri: yuri,
    zettairyouiki: zettairyouiki,
  });
