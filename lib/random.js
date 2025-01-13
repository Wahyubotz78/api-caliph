const client = require("nekos.life"),
  neko = new client(),
  axios = require("axios"),
  cheerio = require("cheerio");
function smug() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.smug();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function baka() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.baka();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function tickle() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.tickle();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function slap() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.slap();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function poke() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.poke();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function pat() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.pat();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function neko_() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.neko();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function nekoGif() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.nekoGif();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function meow() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.meow();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function lizard() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.lizard();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function kiss() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.kiss();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function hug() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.hug();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function foxGirl() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.foxGirl();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function feed() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.feed();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function cuddle() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.cuddle();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function kemonomimi() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.kemonomimi();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function holo() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.holo();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function woof() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.woof();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function wallpaper() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.wallpaper();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function goose() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.goose();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function gecg() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.gecg();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function avatar() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.avatar();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
function waifu() {
  return new Promise(async (t, e) => {
    try {
      const { url: e } = await neko.sfw.waifu();
      t(e);
    } catch (t) {
      e(t);
    }
  });
}
async function randomCerpen() {
  try {
    const n = await axios.get("http://cerpenmu.com/"),
      a = cheerio.load(n.data);
    let r = [];
    a("#sidebar > div").each(function (t, e) {
      a(e)
        .find("ul > li")
        .each(function (t, e) {
          let n = a(e).find("a").attr("href");
          r.push(n);
        });
    });
    var t = r[Math.floor(Math.random() * r.length)];
    let o = await axios.get(`${t}`);
    const i = cheerio.load(o.data);
    let c = [];
    i("#content > article > article").each(function (t, e) {
      let n = i(e).find("h2 > a").attr("href");
      c.push(n);
    });
    var e = c[Math.floor(Math.random() * c.length)];
    let s = await axios.get(`${e}`),
      u = cheerio.load(s.data),
      l = u("#content").find("article > h1").text().trim(),
      h = u("#content").find("article > a:nth-child(2)").text().trim(),
      f = [];
    u("#content > article > p").each(function (t, e) {
      let n = u(e).text().trim();
      f.push(n);
    });
    let w = [];
    for (let t of f) w += t;
    return { status: !0, judul: l, penulis: h, sumber: e, cerita: w };
  } catch (t) {
    return { status: !1 };
  }
}
async function ceritahntu() {
  return new Promise((t, e) => {
    axios
      .get("https://cerita-hantu.com/list-cerita-hantu-a-z/")
      .then(({ data: e }) => {
        const n = cheerio.load(e),
          a = [];
        n("div > div > ul:nth-child(7) > li > a").each(function (t, e) {
          a.push(n(e).attr("href"));
        }),
          n("div > div > ul:nth-child(9) > li > a").each(function (t, e) {
            null != n(e).attr("href") && a.push(n(e).attr("href"));
          }),
          n("div > div > ol > li > a").each(function (t, e) {
            null != n(e).attr("href") && a.push(n(e).attr("href"));
          }),
          axios
            .get(a[Math.floor(Math.random() * a.length)])
            .then(({ data: e }) => {
              const n = cheerio.load(e),
                a = [];
              n("div > div > a").each(function (t, e) {
                n(e).attr("href").startsWith("https:") &&
                  a.push(n(e).attr("href"));
              }),
                (rand = a[Math.floor(Math.random() * a.length)]),
                axios.get(rand).then(({ data: e }) => {
                  const n = cheerio.load(e);
                  t({
                    judul: n("div > header > div > h1 > a").text(),
                    author: n(
                      "div > header > div > div > span.simple-grid-entry-meta-single-author > span > a"
                    ).text(),
                    author_link: n(
                      "div > header > div > div > span.simple-grid-entry-meta-single-author > span > a"
                    ).attr("href"),
                    upload_date: n(
                      "div > header > div > div > span.simple-grid-entry-meta-single-date"
                    ).text(),
                    kategori: n(
                      "div > header > div > div > span.simple-grid-entry-meta-single-cats > a"
                    ).text(),
                    source: rand,
                    cerita: n("div > div > p")
                      .text()
                      .split("Cerita Hantu")[1]
                      .split("Copyright")[0],
                  });
                });
            });
      });
  });
}
module.exports = {
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
};
