const axios = require("axios"),
  chalk = require("chalk"),
  cheerio = require("cheerio"),
  crypto = require("crypto"),
  download = require("image-downloader"),
  { fromBuffer: fromBuffer } = require("file-type"),
  fs = require("fs-extra"),
  fetch = require("node-fetch"),
  path = require("path"),
  request = require("request"),
  pool = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ23456789".split(
    ""
  );
function fetchRandomJson(e, t) {
  return new Promise(async (r, o) => {
    fetch(e, t)
      .then((e) => e.json())
      .then((e) => {
        const t = JSON.parse(JSON.stringify(e)),
          o = t[Math.floor(Math.random() * t.length)];
        r(o);
      })
      .catch((e) => {
        o(e);
      });
  });
}
const getHashedPassword = (e) =>
    crypto.createHash("sha256").update(e).digest("base64"),
  generateAuthToken = () => crypto.randomBytes(30).toString("hex");
function ignoreFavicon(e, t, r) {
  if (e.originalUrl.includes("favicon")) return t.status(204).end();
  r();
}
const download_Url = function (e, t, r) {
    request.head(e, function (o, a, n) {
      request(e).pipe(fs.createWriteStream(t)).on("close", r);
    });
  },
  isUrl = (e) =>
    e.match(
      new RegExp(
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
        "gi"
      )
    );
function randomText(e) {
  const t = [];
  for (let r = 0; r < e; r++)
    t.push(pool[Math.floor(Math.random() * pool.length)]);
  return t.join("");
}
function readFileTxt(e) {
  return new Promise((t, r) => {
    const o = fs.readFileSync(e, "utf8").toString().split("\n");
    t(o[Math.floor(Math.random() * o.length)].replace("\r", ""));
  });
}
function readFileJson(e) {
  return new Promise((t, r) => {
    const o = JSON.parse(fs.readFileSync(e));
    t(o[Math.floor(Math.random() * o.length)]);
  }).catch((e) => {
    reject(e);
  });
}
function waktu(e) {
  e = Number(e / 1e3);
  var t = Math.floor(e / 86400),
    r = Math.floor((e % 86400) / 3600),
    o = Math.floor((e % 3600) / 60),
    a = Math.floor(e % 60);
  return (
    (t > 0 ? t + " hari, " : "") +
    (r > 0 ? r + " jam, " : "") +
    (o > 0 ? o + " menit, " : "") +
    (a > 0 ? a + (1 == a ? " detik, " : " detik") : "")
  );
}
function city() {
  return new Promise(async (e, t) => {
    let r = await (
      await axios.get("https://m.dream.co.id/jadwal-salat/ambon/")
    ).data;
    $ = cheerio.load(r);
    let o = [];
    $("select > option").each(function (e, t) {
      (data = $($(t)).text()), o.push(data);
    }),
      e(o);
  });
}
async function getFile(e) {
  let t,
    r = Buffer.isBuffer(e)
      ? e
      : /^data:.*?\/.*?;base64,/i.test(e)
      ? Buffer.from(e.split`,`[1], "base64")
      : /^https?:\/\//.test(e)
      ? await (t = await fetch(e)).buffer()
      : fs.existsSync(e)
      ? fs.readFileSync(e)
      : "string" == typeof e
      ? e
      : Buffer.alloc(0);
  if (!Buffer.isBuffer(r)) throw new TypeError("Result is not a buffer");
  return {
    res: t,
    ...((await fromBuffer(r)) || {
      mime: "application/octet-stream",
      ext: ".bin",
    }),
    data: r,
  };
}
async function sendImg(e) {
  let t = `${path.join(__dirname)}/../tmp/${1 * new Date()}.png`;
  options = { url: e, dest: t };
  let { filename: r } = await download.image(options);
  return { buf: (await getFile(r)).data, lokasi: r };
}
function print(e) {
  return console.log(chalk.redBright(e));
}
function pickRandom(e) {
  return e[Math.floor(e.length * Math.random())];
}
let APIs = { jojo: "https://docs-jojo.herokuapp.com" },
  APIKeys = {},
  API = (e, t = "/", r = {}, o) =>
    (e in APIs ? APIs[e] : e) +
    t +
    (r || o
      ? "?" +
        new URLSearchParams(
          Object.entries({
            ...r,
            ...(o ? { [o]: APIKeys[e in APIs ? APIs[e] : e] } : {}),
          })
        )
      : "");
module.exports = {
  API: API,
  readFileJson: readFileJson,
  readFileTxt: readFileTxt,
  fetchRandomJson: fetchRandomJson,
  getHashedPassword: getHashedPassword,
  generateAuthToken: generateAuthToken,
  ignoreFavicon: ignoreFavicon,
  isUrl: isUrl,
  randomText: randomText,
  waktu: waktu,
  getFile: getFile,
  sendImg: sendImg,
  print: print,
  city: city,
  download_Url: download_Url,
  pickRandom: pickRandom,
};
