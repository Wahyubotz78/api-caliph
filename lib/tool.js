const fetch = require("node-fetch"),
  { default: axios } = require("axios"),
  { randomBytes: randomBytes } = require("crypto"),
  { fromBuffer: fromBuffer } = require("file-type"),
  Image = require("node-webpmux").Image,
  Formdata = require("form-data"),
  fs = require("fs"),
  toBuffer = (e) =>
    new Promise(async (a, t) => {
      if (Buffer.isBuffer(e)) {
        const t = await fromBuffer(e);
        a({ buffer: e, mime: t.mime });
      }
      if ("string" != typeof e || e.includes("http"))
        axios.get(e, { responseType: "arraybuffer" }).then((e) => {
          a({ buffer: e.data, mime: e.headers["content-type"] });
        });
      else {
        const t = e.replace(/^data:(.*?);base64,/, ""),
          r = await fromBuffer(Buffer.from(t, "base64"));
        a({ buffer: Buffer.from(e, "base64"), mime: r.mime });
      }
    }),
  config = {
    sessionInfo: {
      WA_VERSION: "2.2106.5",
      PAGE_UA:
        "WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
      WA_AUTOMATE_VERSION: "3.6.10 UPDATE AVAILABLE: 3.6.11",
      BROWSER_VERSION: "HeadlessChrome/88.0.4324.190",
      OS: "Windows Server 2016",
      START_TS: 1614310326309,
      NUM: "6247",
      LAUNCH_TIME_MS: 7934,
      PHONE_VERSION: "2.20.205.16",
    },
    config: {
      sessionId: "session",
      headless: !0,
      qrTimeout: 20,
      authTimeout: 0,
      cacheEnabled: !1,
      useChrome: !0,
      killProcessOnBrowserClose: !0,
      throwErrorOnTosBlock: !1,
      chromiumArgs: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--aggressive-cache-discard",
        "--disable-cache",
        "--disable-application-cache",
        "--disable-offline-load-stale-cache",
        "--disk-cache-size=0",
      ],
      executablePath:
        "C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe",
      skipBrokenMethodsCheck: !0,
      stickerServerEndpoint: !0,
    },
  };
async function expandedUrl(e) {
  let a;
  try {
    a = (
      await axios({
        method: "get",
        url: e,
        maxRedirects: 0,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 10; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.58 Mobile Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        },
      })
    ).headers.location;
  } catch (e) {
    if (3 !== Math.trunc(e.response.status / 100)) throw e;
    a = e.response.headers.location;
  } finally {
    return a;
  }
}
function rextester(e) {
  return new Promise(async (a, t) => {
    let r = new URLSearchParams();
    r.append("Program", e),
      r.append("LanguageChoiceWrapper", 8),
      a(
        await (
          await fetch("https://rextester.com/rundotnet/Run", {
            method: "POST",
            body: r,
          })
        ).json()
      );
  });
}
(exports.setExif = async (e, a, t, r = {}) =>
  new Promise(async (i, s) => {
    const o = new Image(),
      n = {
        "sticker-pack-id": randomBytes(16).toString("hex").slice(0, 8),
        "sticker-pack-name": a,
        "sticker-pack-publisher": t,
        "sticker-pack-publisher-id": t,
        "sticker-pack-version": "1.0.0",
        "android-app-store-link": "https://caliphapi.com",
        "ios-app-store-link": "https://caliphapi.com",
        "sticker-pack-description":
          "sticker ini merupakan sticker yang telah di generate oleh jamal",
        emojis: [
          "❤",
          "😍",
          "😘",
          "💕",
          "😻",
          "💑",
          "👩‍❤‍👩",
          "👨‍❤‍👨",
          "💏",
          "👩‍❤‍💋‍👩",
          "👨‍❤‍💋‍👨",
          "🧡",
          "💛",
          "💚",
          "💙",
          "💜",
          "🖤",
          "💔",
          "❣",
          "💞",
          "💓",
          "💗",
          "💖",
          "💘",
          "💝",
          "💟",
          "♥",
          "💌",
          "💋",
          "👩‍❤️‍💋‍👩",
          "👨‍❤️‍💋‍👨",
          "👩‍❤️‍👨",
          "👩‍❤️‍👩",
          "👨‍❤️‍👨",
          "👩‍❤️‍💋‍👨",
          "👬",
          "👭",
          "👫",
          "🥰",
          "😚",
          "😙",
          "👄",
          "🌹",
          "😽",
          "❣️",
          "❤️",
          "😀",
          "😃",
          "😄",
          "😁",
          "😆",
          "😅",
          "😂",
          "🤣",
          "🙂",
          "😛",
          "😝",
          "😜",
          "🤪",
          "🤗",
          "😺",
          "😸",
          "😹",
          "☺",
          "😌",
          "😉",
          "🤗",
          "😊",
          "🎊",
          "🎉",
          "🎁",
          "🎈",
          "👯‍♂️",
          "👯",
          "👯‍♀️",
          "💃",
          "🕺",
          "🔥",
          "⭐️",
          "✨",
          "💫",
          "🎇",
          "🎆",
          "🍻",
          "🥂",
          "🍾",
          "🎂",
          "🍰",
          "☹",
          "😣",
          "😖",
          "😫",
          "😩",
          "😢",
          "😭",
          "😞",
          "😔",
          "😟",
          "😕",
          "😤",
          "😠",
          "😥",
          "😰",
          "😨",
          "😿",
          "😾",
          "😓",
          "🙍‍♂",
          "🙍‍♀",
          "💔",
          "🙁",
          "🥺",
          "🤕",
          "☔️",
          "⛈",
          "🌩",
          "🌧,😯",
          "😦",
          "😧",
          "😮",
          "😲",
          "🙀",
          "😱",
          "🤯",
          "😳",
          "❗",
          "❕",
          "🤬",
          "😡",
          "😠",
          "🙄",
          "👿",
          "😾",
          "😤",
          "💢",
          "👺",
          "🗯️",
          "😒",
          "🥵",
          "👋",
        ],
        ...r,
      };
    let c = Buffer.from([
        73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0,
      ]),
      p = Buffer.from(JSON.stringify(n), "utf8"),
      f = Buffer.concat([c, p]);
    return (
      f.writeUIntLE(p.length, 14, 4),
      await o.load(e),
      (o.exif = f),
      i(await o.save(null))
    );
  })),
  (exports.makeSticker = async (
    e,
    a = { author: "", pack: "", keepScale: !0, removebg: "HQ", circle: !1 }
  ) =>
    new Promise(async (t, r) => {
      const i = await toBuffer(e);
      if ("image/webp" == i.mime)
        return t(await this.setExif(i.buffer, a.pack, a.author));
      const s = {
        ...a,
        processOptions: {
          crop: !a.keepScale,
          fps: 10,
          startTime: "00:00:00.0",
          endTime: "00:00:7.0",
          loop: 0,
        },
      };
      let o = i.mime.includes("image") ? "image" : "file",
        n = String(
          "https://sticker-api.openwa.dev/" +
            ("image" === o ? "prepareWebp" : "convertMp4BufferToWebpDataUrl")
        );
      await axios(n, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, /",
          "Content-Type": "application/json;charset=utf-8",
          "User-Agent":
            "WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
        },
        data: JSON.stringify(
          Object.assign(
            config,
            { stickerMetadata: s },
            { [o]: `data:${i.mime};base64,${i.buffer.toString("base64")}` }
          )
        ),
        maxBodyLength: 1 / 0,
        maxContentLength: 1 / 0,
      })
        .then(async ({ data: e }) => {
          if ("image" === o)
            return t(
              await this.setExif(
                Buffer.from(e.webpBase64, "base64"),
                a.author,
                a.pack
              )
            );
          {
            const r = e.replace(/^data:(.*?);base64,/, "").replace(/ /g, "+"),
              i = Buffer.from(r, "base64");
            t(await this.setExif(i, a.pack, a.author));
          }
        })
        .catch((e) => r(e));
    })),
  (module.exports = { rextester: rextester, expandedUrl: expandedUrl });
