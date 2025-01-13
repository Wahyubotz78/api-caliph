const {
    apikeyCheck: apikeyCheck,
    limitAdd: limitAdd,
    isLimit: isLimit,
  } = require("../database/db"),
  { sticker: sticker } = require("../tools/sticker"),
  canvacord = require("canvacord"),
  knights = require("canvas-hikki"),
  option = require("knights-canvas"),
  fs = require("fs"),
  __path = process.cwd(),
  tmp = __path + "/tmp/canvas_tmp",
  example_profile = "https://i.ibb.co/G5mJZxs/rin.jpg",
  example_icon = "https://i.ibb.co/G5mJZxs/rin.jpg",
  example_bg = "https://i.ibb.co/4YBNyvP/images-76.jpg",
  fakeUrl = "http",
  mp = "masukan parameter ";
function paramCheck(e, t, a, s, r, n) {
  return e
    ? t
      ? a
        ? a.startsWith("http")
          ? s
            ? r
              ? r.startsWith("http")
                ? n
                  ? n.startsWith("http")
                    ? void 0
                    : `${mp}'profile' dengan link gambar yang valid`
                  : `${mp}'background'`
                : `${mp}'profile' dengan link gambar yang valid`
              : `${mp}'profile'`
            : `${mp}'membercount'`
          : `${mp}'groupicon' dengan link gambar yang valid`
        : `${mp}'groupicon'`
      : `${mp}'groupname'`
    : `${mp}'username'`;
}
async function welcome(e, t) {
  const {
    username: a,
    groupname: s,
    groupicon: r,
    membercount: n,
    profile: u,
    background: i,
    apikey: c,
  } = e.query;
  let o = paramCheck(a, s, r, n, u, i);
  if (o) return t.status(200).send({ status: !1, message: o });
  let m = await apikeyCheck(c, t);
  if (m) return t.status(200).send({ status: !1, message: m });
  try {
    let e = (
      await new option.Welcome()
        .setUsername(a)
        .setGuildName(s)
        .setGuildIcon(r)
        .setMemberCount(n)
        .setAvatar(u)
        .setBackground(i)
        .toAttachment()
    ).toBuffer();
    t.type("png"), limitAdd(c), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function welcome2(e, t) {
  const {
    username: a,
    groupname: s,
    membercount: r,
    profile: n,
    background: u,
    apikey: i,
  } = e.query;
  let c = paramCheck(a, s, "http", r, n, u);
  if (c) return t.status(200).send({ status: !1, message: c });
  let o = await apikeyCheck(i, t);
  if (o) return t.status(200).send({ status: !1, message: o });
  try {
    limitAdd(i);
    let e = (
      await new knights.Welcome2()
        .setUsername(a)
        .setAvatar(n)
        .setGroupname(s)
        .setMember(r)
        .setBg(u)
        .toAttachment()
    ).toBuffer();
    t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function welcome3(e, t) {
  const { username: a, profile: s, apikey: r } = e.query;
  let n = paramCheck(a, !0, "http", !0, s, "http");
  if (n) return t.status(200).send({ status: !1, message: n });
  let u = await apikeyCheck(r, t);
  if (u) return t.status(200).send({ status: !1, message: u });
  try {
    let e = (
      await new knights.Welcome3().setUsername(a).setAvatar(s).toAttachment()
    ).toBuffer();
    limitAdd(r), t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function leave(e, t) {
  const {
    username: a,
    groupname: s,
    groupicon: r,
    membercount: n,
    profile: u,
    background: i,
    apikey: c,
  } = e.query;
  let o = paramCheck(a, s, r, n, u, i);
  if (o) return t.status(200).send({ status: !1, message: o });
  let m = await apikeyCheck(c, t);
  if (m) return t.status(200).send({ status: !1, message: m });
  try {
    let e = (
      await new option.Goodbye()
        .setUsername(a)
        .setGuildName(s)
        .setGuildIcon(r)
        .setMemberCount(n)
        .setAvatar(u)
        .setBackground(i)
        .toAttachment()
    ).toBuffer();
    limitAdd(c), t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function leave2(e, t) {
  const {
    username: a,
    membercount: s,
    profile: r,
    background: n,
    apikey: u,
  } = e.query;
  let i = paramCheck(a, !0, "http", s, r, n);
  if (i) return t.status(200).send({ status: !1, message: i });
  let c = await apikeyCheck(u, t);
  if (c) return t.status(200).send({ status: !1, message: c });
  try {
    let e = (
      await new knights.Goodbye2()
        .setUsername(a)
        .setAvatar(r)
        .setMember(s)
        .setBg(n)
        .toAttachment()
    ).toBuffer();
    limitAdd(u), t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function leave3(e, t) {
  const { username: a, profile: s, apikey: r } = e.query;
  let n = paramCheck(a, !0, "http", !0, s, "http");
  if (n) return t.status(200).send({ status: !1, message: n });
  let u = await apikeyCheck(r, t);
  if (u) return t.status(200).send({ status: !1, message: u });
  try {
    let e = (
      await new knights.Goodbye3().setUsername(a).setAvatar(s).toAttachment()
    ).toBuffer();
    limitAdd(r), t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function kissRouter(e, t) {
  let a = e.query.url,
    s = e.query.url2,
    r = e.query.apikey;
  if (void 0 === a || void 0 === r || void 0 === s)
    return t
      .status(404)
      .send({ status: 404, message: "Input Parameter url, url2 & apikey" });
  return (await apikeyCheck(r))
    ? ((limt = await isLimit(r)),
      limt
        ? t
            .status(200)
            .send({ status: 429, message: "Limit Apikey Anda Habis" })
        : (limitAdd(r),
          void kiss(a, s)
            .then(async (e) => {
              t.type("png"), t.send(e);
            })
            .catch(() => {
              t.status(200).send({
                status: !1,
                message: "Internal Server Error",
              });
            })))
    : t.status(200).send({
        status: 200,
        message: `apikey ${r} not found, please register first!`,
      });
}
async function Promote(e, t) {
  const {
    username: a,
    groupname: s,
    groupicon: r,
    membercount: n,
    profile: u,
    background: i,
    apikey: c,
  } = e.query;
  let o = paramCheck(a, s, r, n, u, i);
  if (o) return t.status(200).send({ status: !1, message: o });
  let m = await apikeyCheck(c, t);
  if (m) return t.status(200).send({ status: !1, message: m });
  try {
    let e = (
      await new option.Promote()
        .setUsername(a)
        .setGuildName(s)
        .setGuildIcon(r)
        .setMemberCount(n)
        .setAvatar(u)
        .setBackground(i)
        .toAttachment()
    ).toBuffer();
    limitAdd(c), t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function Demote(e, t) {
  const {
    username: a,
    groupname: s,
    groupicon: r,
    membercount: n,
    profile: u,
    background: i,
    apikey: c,
  } = e.query;
  let o = paramCheck(a, s, r, n, u, i);
  if (o) return t.status(200).send({ status: !1, message: o });
  let m = await apikeyCheck(c, t);
  if (m) return t.status(200).send({ status: !1, message: m });
  try {
    let e = (
      await new option.Demote()
        .setUsername(a)
        .setGuildName(s)
        .setGuildIcon(r)
        .setMemberCount(n)
        .setAvatar(u)
        .setBackground(i)
        .toAttachment()
    ).toBuffer();
    limitAdd(c), t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function kaneki(e, t) {
  const { nama: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  try {
    let e = (await new knights.Gfx1().setName(a).toAttachment()).toBuffer();
    t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function loli(e, t) {
  const { nama: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  try {
    let e = (await new knights.Gfx2().setName(a).toAttachment()).toBuffer();
    limitAdd(s), t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function sadboy(e, t) {
  const { nama: a, nama2: s, apikey: r } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama2'" });
  let n = await apikeyCheck(r, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  try {
    let e = (
      await new knights.Gfx3().setText1(a).setText2(s).toAttachment()
    ).toBuffer();
    limitAdd(r), t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function girlNeko(e, t) {
  const { nama: a, nama2: s, apikey: r } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama2'" });
  let n = await apikeyCheck(r, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  try {
    let e = (
      await new knights.Gfx4().setText1(a).setText2(s).toAttachment()
    ).toBuffer();
    limitAdd(r), t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function rem(e, t) {
  const { nama: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  try {
    let e = (await new knights.Gfx5().setText(a).toAttachment()).toBuffer();
    limitAdd(s), t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function customGfx2(e, t) {
  const { nama: a, nama2: s, bg: r, apikey: n } = e.query;
  if (!a)
    return t.status(200).send({ status: !1, message: "masukan parameter 'q'" });
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'q2'" });
  if (!r)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'bg'" });
  let u = await apikeyCheck(n, t);
  if (u) return t.status(200).send({ status: !1, message: u });
  try {
    let e = (
      await new knights.customGfx2()
        .setText1(a)
        .setText2(s)
        .setBg(r)
        .toAttachment()
    ).toBuffer();
    limitAdd(n), t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function customGfx(e, t) {
  const { nama: a, bg: s, apikey: r } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'nama'" });
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'bg'" });
  let n = await apikeyCheck(r, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  try {
    let e = (
      await new knights.customGfx().setText(a).setBg(s).toAttachment()
    ).toBuffer();
    t.type("png"), t.send(e);
  } catch (e) {
    return (
      console.log(e),
      t.status(200).send({ status: !1, message: "Internal Server Error" })
    );
  }
}
async function createTrigger(e) {
  return await canvacord.Canvacord.trigger(e);
}
async function affect(e) {
  return await canvacord.Canvacord.affect(e);
}
async function beautiful(e) {
  return await canvacord.Canvacord.beautiful(e);
}
async function bed(...e) {
  return await canvacord.Canvacord.bed(...e);
}
async function kiss(...e) {
  return await canvacord.Canvacord.kiss(...e);
}
async function kissRouter(e, t) {
  const { url: a, url2: s, apikey: r } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url2'" });
  let n = await apikeyCheck(r, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  limitAdd(r),
    kiss(a, s)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function spank(...e) {
  return await canvacord.Canvacord.spank(...e);
}
async function spankRouter(e, t) {
  const { url: a, url2: s, apikey: r } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url2'" });
  let n = await apikeyCheck(r, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  spank(a, s)
    .then(async (e) => {
      t.type("png"), t.send(e);
    })
    .catch(() => {
      t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function slap(...e) {
  return await canvacord.Canvacord.slap(...e);
}
async function slapRouter(e, t) {
  const { url: a, url2: s, apikey: r } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url2'" });
  let n = await apikeyCheck(r, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  slap(a, s)
    .then(async (e) => {
      const a = await sticker(
        e,
        null,
        "triggerred from rest api",
        "caliphapi.com"
      );
      t.type("webp"), t.send(a);
    })
    .catch(() => {
      t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function facepalm(e) {
  return await canvacord.Canvacord.facepalm(e);
}
async function rainbow(e) {
  return await canvacord.Canvacord.rainbow(e);
}
async function rip(e) {
  return await canvacord.Canvacord.rip(e);
}
async function trash(e) {
  return await canvacord.Canvacord.trash(e);
}
async function hitler(e) {
  return await canvacord.Canvacord.hitler(e);
}
async function joker(e) {
  return await canvacord.Canvacord.jokeOverHead(e);
}
async function distracted(...e) {
  return await canvacord.Canvacord.distracted(...e);
}
async function jail(e) {
  return await canvacord.Canvacord.jail(e);
}
async function delete_(e) {
  return await canvacord.Canvacord.delete(e, !0);
}
async function deleteRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    delete_(a)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function wasted(e) {
  return await canvacord.Canvacord.wasted(e);
}
async function wastedRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    wasted(a)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function wanted(e) {
  return await canvacord.Canvacord.wanted(e);
}
async function wantedRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    wanted(a)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function shit(e) {
  return await canvacord.Canvacord.shit(e);
}
async function shitRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    shit(a)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function triggerRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    createTrigger(a)
      .then(async (e) => {
        const a = await sticker(
          e,
          null,
          "triggerred from rest api",
          "caliphapi.com"
        );
        t.type("webp"), t.send(a);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function beautifulRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    beautiful(a)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function jokerRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    joker(a)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function jailRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    jail(a)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function distractedRouter(e, t) {
  const { url: a, url2: s, url3: r, apikey: n } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url2'" });
  if (!r)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url3'" });
  let u = await apikeyCheck(n, t);
  if (u) return t.status(200).send({ status: !1, message: u });
  limitAdd(n),
    distracted(a, s, r)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function faceRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    facepalm(a)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function trashRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    trash(a)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function hitlerRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    hitler(a)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function ripRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    rip(a)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function rainbowRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    rainbow(a)
      .then(async (e) => {
        t.type("png"), t.send(e);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function bedRouter(e, t) {
  const { url: a, url2: s, apikey: r } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url2'" });
  let n = await apikeyCheck(r, t);
  if (n) return t.status(200).send({ status: !1, message: n });
  limitAdd(r),
    bed(a, s)
      .then(async (e) => {
        const a = await sticker(
          e,
          null,
          "triggerred from rest api",
          "caliphapi.com"
        );
        t.type("webp"), t.send(a);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function affectRouter(e, t) {
  const { url: a, apikey: s } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(s, t);
  if (r) return t.status(200).send({ status: !1, message: r });
  limitAdd(s),
    affect(a)
      .then(async (e) => {
        const a = await sticker(
          e,
          null,
          "triggerred from rest api",
          "caliphapi.com"
        );
        t.type("webp"), t.send(a);
      })
      .catch(() => {
        t.status(200).send({ status: !1, message: "Internal Server Error" });
      });
}
async function rank(e, t) {
  const {
    rank: a,
    pp: s,
    level: r,
    currentxp: n,
    needxp: u,
    name: i,
    discriminator: c,
    apikey: o,
  } = e.query;
  if (!a)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'rank'" });
  if (!s)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'pp'" });
  if (!s.startsWith("http"))
    return t
      .status(200)
      .send({ status: !1, message: `${mp}'pp' dengan link gambar yang valid` });
  if (!r)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'level'" });
  if (!n)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'currentxp'" });
  if (!u)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'needxp'" });
  if (!i)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'name'" });
  if (!c)
    return t
      .status(200)
      .send({ status: !1, message: "masukan parameter 'discriminator'" });
  if (!c >= 5 || c <= 5)
    return t.status(200).send({
      status: !1,
      message: "'discriminator' maksimal/minimal 4 angka!",
    });
  let m = await apikeyCheck(o, t);
  if (m) return t.status(200).send({ status: !1, message: m });
  (
    await new canvacord.Rank()
      .setRank(parseInt(a))
      .setAvatar(s)
      .setLevel(parseInt(r))
      .setCurrentXP(parseInt(n))
      .setRequiredXP(parseInt(u))
      .setProgressBar("#f2aa4c", "COLOR")
      .setUsername(i)
      .setDiscriminator(parseInt(c))
  )
    .build()
    .then((e) => {
      limitAdd(o), t.type("png"), t.send(e);
    })
    .catch((e) => {
      t.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
module.exports = {
  affectRouter: affectRouter,
  beautifulRouter: beautifulRouter,
  bedRouter: bedRouter,
  customGfx: customGfx,
  customGfx2: customGfx2,
  deleteRouter: deleteRouter,
  distractedRouter: distractedRouter,
  kaneki: kaneki,
  loli: loli,
  sadboy: sadboy,
  girlNeko: girlNeko,
  rem: rem,
  jailRouter: jailRouter,
  jokerRouter: jokerRouter,
  kissRouter: kissRouter,
  spankRouter: spankRouter,
  shitRouter: shitRouter,
  slapRouter: slapRouter,
  faceRouter: faceRouter,
  rainbowRouter: rainbowRouter,
  ripRouter: ripRouter,
  trashRouter: trashRouter,
  hitlerRouter: hitlerRouter,
  wantedRouter: wantedRouter,
  wastedRouter: wastedRouter,
  welcome: welcome,
  leave: leave,
  welcome2: welcome2,
  leave2: leave2,
  welcome3: welcome3,
  leave3: leave3,
  Promote: Promote,
  Demote: Demote,
  triggerRouter: triggerRouter,
  rank: rank,
};
