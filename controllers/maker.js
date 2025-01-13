const axios = require("axios"),
  { limitAdd: limitAdd, apikeyCheck: apikeyCheck } = require("../database/db"),
  request = require("request");
var zrapi = require("zrapi"),
  creatorList = ["caliphdev"],
  fetch = require("node-fetch"),
  fs = require("fs");
const Crypto = require("crypto"),
  path = require("path"),
  { spawn: spawn } = require("child_process"),
  { tmpdir: tmpdir } = require("os");
var creator = creatorList[Math.floor(Math.random() * creatorList.length)],
  download = function (e, t, a) {
    request.head(e, function (s, r, n) {
      console.log("content-type:", r.headers["content-type"]),
        request(e).pipe(fs.createWriteStream(t)).on("close", a);
    });
  };
const _ = require("lodash"),
  __path = process.cwd(),
  temp = path.join(
    tmpdir(),
    `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}`
  ),
  loghandler = {
    nottext: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter text",
    },
    noemote: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter emot",
    },
    query: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter query",
    },
    nousername: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter username",
    },
    notype: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter type",
    },
    domain: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter domain",
    },
    nomor: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter nomor",
    },
    nottext2: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter text2",
    },
    error: {
      status: !1,
      creator: `${creator}`,
      message: "mungkin sedang dilakukan perbaikan",
    },
    img: {
      status: !1,
      creator: `${creator}`,
      message: "Silahkan Masukan Url Image",
    },
    nottheme: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter theme",
    },
    noname: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter nama",
    },
    noname2: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter nama2",
    },
    username: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter username",
    },
    mimpi: {
      status: !1,
      creator: `${creator}`,
      code: 406,
      message: "masukan parameter mimpi",
    },
    invalidlink: {
      status: !1,
      creator: `${creator}`,
      message: "error, mungkin link anda tidak valid.",
    },
  };
async function nuliskiri(e, t, a) {
  const { apikey: s, text: r } = e.query;
  if (!r)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  try {
    const e = r
      .replace(/(\S+\s*){1,9}/g, "$&\n")
      .split("\n")
      .slice(0, 31)
      .join("\n");
    spawn("convert", [
      __path + "/media/nulis/images/buku/sebelumkiri.jpg",
      "-font",
      __path + "/media/nulis/font/Indie-Flower.ttf",
      "-size",
      "960x1280",
      "-pointsize",
      "22",
      "-interline-spacing",
      "2",
      "-annotate",
      "+140+153",
      e,
      __path + "/media/nulis/images/buku/setelahkiri.jpg",
    ])
      .on("error", () => t.json({ err: "gagal" }))
      .on("exit", () => {
        t.sendFile(__path + "/media/nulis/images/buku/setelahkiri.jpg");
      });
  } catch (e) {
    t.json({ error: e.toString() });
  }
}
async function nuliskanan(e, t, a) {
  const { apikey: s, text: r } = e.query;
  if (!r)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  try {
    const e = r
      .replace(/(\S+\s*){1,9}/g, "$&\n")
      .split("\n")
      .slice(0, 31)
      .join("\n");
    spawn("convert", [
      __path + "/media/nulis/images/buku/sebelumkanan.jpg",
      "-font",
      "./media/nulis/font/Indie-Flower.ttf",
      "-size",
      "960x1280",
      "-pointsize",
      "23",
      "-interline-spacing",
      "2",
      "-annotate",
      "+128+129",
      e,
      __path + "/media/nulis/images/buku/setelahkanan.jpg",
    ])
      .on("error", () => t.json({ err: "gagal" }))
      .on("exit", () => {
        t.sendFile(__path + "/media/nulis/images/buku/setelahkanan.jpg");
      });
  } catch (e) {
    t.json({ error: e.toString() });
  }
}
async function attp(e, t) {
  const { text: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  try {
    limitAdd(s),
      (buffer = await fetch(
        `https://xteam.xyz/attp?file&text=${encodeURIComponent(a)}`
      ).then((e) => e.buffer())),
      t.type("webp"),
      t.send(buffer);
  } catch {
    t.status(500).send({ status: !1, message: "Internal Server Error" });
  }
}
async function ttp(e, t) {
  const { text: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  try {
    limitAdd(s),
      (buffer = await fetch(
        `https://xteam.xyz/ttp?file&text=${encodeURIComponent(a)}`
      ).then((e) => e.buffer())),
      t.type("webp"),
      t.send(buffer);
  } catch {
    t.status(500).send({ status: !1, message: "Internal Server Error" });
  }
}
module.exports = {
  nuliskiri: nuliskiri,
  nuliskanan: nuliskanan,
  attp: attp,
  ttp: ttp,
};
