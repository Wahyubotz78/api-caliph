const {
    limitAdd: limitAdd,
    apikeyCheck: apikeyCheck,
  } = require("../database/db"),
  {
    instagramsave: instagramsave,
    instasupersave: instasupersave,
    pinterestvideodownloader: pinterestvideodownloader,
    tikmate: tikmate,
    ttdown: ttdown,
    downloader4twitter: downloader4twitter,
    facebook: facebook,
    mediafires: mediafires,
    stickerTelegram: stickerTelegram,
    stickerTelegramDownload: stickerTelegramDownload,
    tiktokDownloader: tiktokDownloader,
    tiktok33: tiktok33,
  } = require("../lib/downloader"),
  ytsr = require("yt-search"),
  kalip = require("caliph-api"),
  { yDonlod: yDonlod, yPlay: yPlay, ySearch: ySearch } = require("../lib/yt"),
  { print: print } = require("../lib/functions"),
  { query: query } = require("express");
async function fb(t, s) {
  const { apikey: e, url: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  return r
    ? s.status(200).send({ status: !1, message: r })
    : /^https?:\/\/(fb\.watch|(www\.|web\.|m\.)?facebook\.com)/i.test(a)
    ? void facebook(a)
        .then((t) => {
          limitAdd(e), s.status(200).send({ status: !0, result: t });
        })
        .catch((t) => {
          print(t),
            s
              .status(200)
              .send({ status: !1, message: "Internal Server Error" });
        })
    : s.status(200).send({
        status: !1,
        message:
          "url salah! contoh: https://www.facebook.com/100003873289819/videos/625313175459585/",
      });
}
async function mediafire(t, s) {
  const { apikey: e, url: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  mediafires(a)
    .then((t) => {
      limitAdd(e),
        s.status(200).send({
          status: !0,
          nama: t.nama,
          mime: t.mime,
          size: t.size,
          link: t.link,
        });
    })
    .catch((t) => {
      print(t),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function instagram(t, s) {
  const { apikey: e, url: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  instagramsave(a)
    .then((t) => {
      limitAdd(e), s.status(200).send({ status: !0, data: t });
    })
    .catch((t) => {
      print(t),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function instagramStory(t, s) {
  const { apikey: e, url: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  let n = await instasupersave(a);
  n.status
    ? (limitAdd(e), s.status(200).send({ status: !0, data: n.data }))
    : s.status(200).send({ status: !1, message: "Internal Server Error" });
}
async function pinterest(t, s) {
  const { apikey: e, url: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  let n = await pinterestvideodownloader(a);
  n.status
    ? (limitAdd(e), s.status(200).send({ status: !0, data: n.data }))
    : s.status(200).send({ status: !1, message: "Internal Server Error" });
}
async function tiktok(t, s) {
  const { apikey: e, url: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  try {
    let t = await kalip.downloader.tiktok(a);
    limitAdd(e), s.status(200).send({ status: !0, data: t });
  } catch {
    s.status(500).send({ status: !1, message: "Internal Server Error" });
  }
}
async function tiktok2(t, s) {
  const { apikey: e, url: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  try {
    let t = await kalip.downloader.tiktok2(a);
    limitAdd(e), s.status(200).send(t);
  } catch {
    s.status(500).send({ status: !1, message: "Internal Server Error" });
  }
}
async function tiktokkk(t, s) {
  const { apikey: e, url: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  if (!/(https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com\/.*)/i.test(a))
    return s.status(200).send({
      status: !1,
      message: "url tidak valid. contoh: https://vt.tiktok.com/ZSJE2ffo4",
    });
  let n = await tikmate(a);
  n.status
    ? (limitAdd(e),
      s.status(200).send({
        status: !0,
        deksripsi: n.caption,
        videoHD: n.videoHD,
        videoSD: n.videoSD,
      }))
    : s.status(200).send({ status: !1, message: "Internal Server Error" });
}
async function twitter(t, s) {
  const { apikey: e, url: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  downloader4twitter(a)
    .then((t) => {
      limitAdd(e), s.status(200).send({ status: !0, data: t.data });
    })
    .catch((t) => {
      print(t),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function stikertelegram(t, s) {
  const { apikey: e, url: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  return r
    ? s.status(200).send({ status: !1, message: r })
    : /^(https?:\/\/(www\.)?t\.me\/.*)/i.test(a)
    ? void stickerTelegram(a)
        .then((t) => {
          if ((limitAdd(e), !t.status))
            return s.status(200).send({ status: !1 });
          s.status(200).send({
            status: !0,
            name: t.name,
            title: t.title,
            fileid: t.fileid,
          });
        })
        .catch((t) => {
          print(t),
            s
              .status(200)
              .send({ status: !1, message: "Internal Server Error" });
        })
    : s.status(200).send({
        status: !1,
        message:
          "url tidak valid. contoh: https://t.me/addstickers/Bearcoup_farsisticker",
      });
}
async function getstikertele(t, s) {
  const { apikey: e, fileid: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'fileid'" });
  let r = await apikeyCheck(e, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  stickerTelegramDownload(a)
    .then((t) => {
      limitAdd(e), s.contentType("image/webp"), s.send(t);
    })
    .catch((t) => {
      print(t),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function yta(t, s) {
  const { apikey: e, url: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  kalip.downloader.youtube
    .ytmp3(a)
    .then((t) => {
      limitAdd(e), s.status(200).send(t);
    })
    .catch((t) => {
      console.log(t),
        s.status(500).send({ status: !1, message: "Internal Server Error" });
    });
}
async function ytv(t, s) {
  const { apikey: e, url: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  kalip.downloader.youtube
    .ytmp4(a)
    .then((t) => {
      limitAdd(e), s.status(500).send(t);
    })
    .catch((t) => {
      console.log(t),
        s.status(500).send({ status: !1, message: "Internal Server Error" });
    });
}
async function yts(t, s) {
  const { apikey: e, query: a } = t.query;
  if (!a)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'url'" });
  let r = await apikeyCheck(e, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  ytsr(a)
    .then((t) => {
      limitAdd(e), s.status(200).send({ status: 200, data: t.all });
    })
    .catch((t) => {
      console.log(t),
        s.status(500).send({ status: !1, message: "Internal Server Error" });
    });
}
module.exports = {
  fb: fb,
  instagram: instagram,
  instagramStory: instagramStory,
  pinterest: pinterest,
  tiktok: tiktok,
  twitter: twitter,
  stikertelegram: stikertelegram,
  getstikertele: getstikertele,
  mediafire: mediafire,
  tiktok2: tiktok2,
  yta: yta,
  ytv: ytv,
  yts: yts,
};
