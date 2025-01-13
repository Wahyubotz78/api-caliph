const {
    limitAdd: limitAdd,
    apikeyCheck: apikeyCheck,
  } = require("../database/db"),
  {
    readFileJson: readFileJson,
    readFileTxt: readFileTxt,
  } = require("../lib/functions"),
  {
    smug: smug,
    baka: baka,
    tickle: tickle,
    slap: slap,
    poke: poke,
    pat: pat,
    neko_: neko_,
    nekoGif: nekoGif,
    meow: meow,
    lizard: lizard,
    kiss: kiss,
    hug: hug,
    foxGirl: foxGirl,
    feed: feed,
    cuddle: cuddle,
    kemonomimi: kemonomimi,
    holo: holo,
    woof: woof,
    wallpaper: wallpaper,
    goose: goose,
    gecg: gecg,
    avatar: avatar,
    waifu: waifu,
    randomCerpen: randomCerpen,
    ceritahntu: ceritahntu,
  } = require("../lib/random"),
  fetch = require("node-fetch"),
  { data: data } = require("cheerio");
async function china(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/asupan/cecan/china.json")
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, result: s.url });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function hijab(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/asupan/cecan/hijaber.json")
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, result: s.url });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function indon(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/asupan/cecan/indonesia.json")
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, result: s.url });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function japan(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/asupan/cecan/japan.json")
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, result: s.url });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function korea(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/asupan/cecan/korea.json")
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, result: s.url });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function malay(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/asupan/cecan/malaysia.json")
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, result: s.url });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function randomwalp(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  wallpaper()
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function randomneko(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  neko_()
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function randomhug(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  hug()
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function randomkiss(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  kiss()
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function randomwaifu(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  waifu()
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function randombaka(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  baka()
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function lolis(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/anime/loli.json")
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function ppcouples(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/anime/couple.json")
    .then((s) => {
      limitAdd(e),
        a.status(200).send({ status: !0, cowo: s.male, cewe: s.female });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function aloli(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/anime/asupanloli.json")
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function husbu(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/anime/husbu.json")
    .then((s) => {
      limitAdd(e),
        a.status(200).send({ status: !0, nama: s.teks, url: s.image });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function shota(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/anime/shota.json")
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function kanna(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/anime/kana.json")
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, url: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function quotes(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/quotes.json")
    .then((s) => {
      a.status(200).send({ status: !0, quotes: s.quotes, author: s.author });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function bijak(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileTxt("./lib/data/bijak.txt")
    .then((s) => {
      a.status(200).send({ status: !0, result: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function fakta(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileTxt("./lib/data/fakta.txt")
    .then((s) => {
      a.status(200).send({ status: !0, result: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function cerpen(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  let {
    status: n,
    judul: r,
    enulis: u,
    sumber: i,
    cerita: o,
  } = await randomCerpen();
  if (!n)
    return a.status(200).send({ status: !1, message: "Internal Server Error" });
  a.status(200).send({ status: n, judul: r, enulis: u, sumber: i, cerita: o });
}
async function asupan(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileJson("./lib/data/asupan/video/tiktok.json")
    .then(async (s) => {
      let e = await (await fetch(s.url)).buffer();
      a.status(200), a.type("mp4").send(e);
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function darkjokes(s, a) {
  const { apikey: e } = s.query;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  readFileTxt("./lib/data/darkjokes.txt")
    .then(async (s) => {
      let e = await (await fetch(s)).buffer();
      a.status(200), a.type("jpg").send(e);
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function ceritahantu(s, a) {
  const e = s.query.apikey;
  let t = await apikeyCheck(e, a);
  if (t) return a.status(200).send({ status: !1, message: t });
  ceritahntu()
    .then((s) => {
      limitAdd(e), a.status(200).send({ status: !0, data: s });
    })
    .catch((s) => {
      console.log(s),
        a.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
module.exports = {
  china: china,
  hijab: hijab,
  indon: indon,
  japan: japan,
  korea: korea,
  malay: malay,
  quotes: quotes,
  bijak: bijak,
  fakta: fakta,
  asupan: asupan,
  darkjokes: darkjokes,
  cerpen: cerpen,
  lolis: lolis,
  ppcouples: ppcouples,
  aloli: aloli,
  husbu: husbu,
  randomwalp: randomwalp,
  randomneko: randomneko,
  randomhug: randomhug,
  randomkiss: randomkiss,
  randomwaifu: randomwaifu,
  randombaka: randombaka,
  kanna: kanna,
  shota: shota,
  ceritahantu: ceritahantu,
};
