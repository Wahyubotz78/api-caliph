const {
    limitAdd: limitAdd,
    apikeyCheck: apikeyCheck,
  } = require("../database/db"),
  { sendImg: sendImg } = require("../lib/functions"),
  fs = require("fs"),
  zrapi = require("zrapi");
async function neon(t, e) {
  const { apikey: s, text: a } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, e);
  if (n) return e.status(200).send({ status: !1, message: n });
  zrapi
    .textpro(
      "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
      [a]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function black(t, e) {
  const { apikey: s, text: a } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, e);
  if (n) return e.status(200).send({ status: !1, message: n });
  zrapi
    .textpro(
      "https://textpro.me/create-a-metallic-text-effect-free-online-1041.html",
      [a]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function circuit(t, e) {
  const { apikey: s, text: a } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, e);
  if (n) return e.status(200).send({ status: !1, message: n });
  zrapi
    .textpro(
      "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html",
      [a]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function glitch(t, e) {
  const { apikey: s, text: a } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, e);
  if (n) return e.status(200).send({ status: !1, message: n });
  zrapi
    .textpro(
      "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
      [a]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function glitch2(t, e) {
  const { apikey: s, text: a } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, e);
  if (n) return e.status(200).send({ status: !1, message: n });
  zrapi
    .textpro(
      "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
      [a]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function fiction(t, e) {
  const { apikey: s, text: a } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, e);
  if (n) return e.status(200).send({ status: !1, message: n });
  zrapi
    .textpro(
      "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",
      [a]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function bp(t, e) {
  const { apikey: s, text: a } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, e);
  if (n) return e.status(200).send({ status: !1, message: n });
  zrapi
    .textpro(
      "https://textpro.me/create-blackpink-logo-style-online-1001.html",
      [a]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function neonlight(t, e) {
  const { apikey: s, text: a } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, e);
  if (n) return e.status(200).send({ status: !1, message: n });
  zrapi
    .textpro(
      "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html",
      [a]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function toxic(t, e) {
  const { apikey: s, text: a } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, e);
  if (n) return e.status(200).send({ status: !1, message: n });
  zrapi
    .textpro("https://textpro.me/toxic-text-effect-online-901.html", [a])
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function matrix(t, e) {
  const { apikey: s, text: a } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, e);
  if (n) return e.status(200).send({ status: !1, message: n });
  zrapi
    .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [a])
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function neonpl(t, e) {
  const { apikey: s, text: a } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, e);
  if (n) return e.status(200).send({ status: !1, message: n });
  zrapi
    .textpro("https://textpro.me/neon-text-effect-online-879.html", [a])
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function breakwall(t, e) {
  const { apikey: s, text: a } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  let n = await apikeyCheck(s, e);
  if (n) return e.status(200).send({ status: !1, message: n });
  zrapi
    .textpro("https://textpro.me/break-wall-text-effect-871.html", [a])
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function grafity(t, e) {
  const { apikey: s, text: a, text2: n } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  if (!n)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text2'" });
  let r = await apikeyCheck(s, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  zrapi
    .textpro(
      "https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
      [a, n]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function grafity2(t, e) {
  const { apikey: s, text: a, text2: n } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  if (!n)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text2'" });
  let r = await apikeyCheck(s, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  zrapi
    .textpro(
      "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
      [a, n]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function gameover(t, e) {
  const { apikey: s, text: a, text2: n } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  if (!n)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text2'" });
  let r = await apikeyCheck(s, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  zrapi
    .textpro(
      "https://textpro.me/video-game-classic-8-bit-text-effect-1037.html",
      [a, n]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function glitchtiktok(t, e) {
  const { apikey: s, text: a, text2: n } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  if (!n)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text2'" });
  let r = await apikeyCheck(s, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  zrapi
    .textpro(
      "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
      [a, n]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function pornhub(t, e) {
  const { apikey: s, text: a, text2: n } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  if (!n)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text2'" });
  let r = await apikeyCheck(s, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  zrapi
    .textpro(
      "https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
      [a, n]
    )
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function logowolf(t, e) {
  const { apikey: s, text: a, text2: n } = t.query;
  if (!a)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text'" });
  if (!n)
    return e
      .status(200)
      .send({ status: !1, message: "masukan parameter 'text2'" });
  let r = await apikeyCheck(s, e);
  if (r) return e.status(200).send({ status: !1, message: r });
  zrapi
    .textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
      a,
      n,
    ])
    .then(async (t) => {
      limitAdd(s);
      let { buf: a, lokasi: n } = await sendImg(t);
      e.type("png"), e.send(a), fs.unlinkSync(n);
    })
    .catch((t) => {
      console.log(t),
        e.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
module.exports = {
  neon: neon,
  black: black,
  circuit: circuit,
  glitch: glitch,
  glitch2: glitch2,
  fiction: fiction,
  bp: bp,
  neonlight: neonlight,
  toxic: toxic,
  matrix: matrix,
  neonpl: neonpl,
  breakwall: breakwall,
  grafity: grafity,
  grafity2: grafity2,
  gameover: gameover,
  glitchtiktok: glitchtiktok,
  pornhub: pornhub,
  logowolf: logowolf,
};
