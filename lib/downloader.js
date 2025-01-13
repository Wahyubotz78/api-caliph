const { profileig: profileig } = require("../lib/stalk"),
  { print: print } = require("../lib/functions"),
  axios = require("axios"),
  cheerio = require("cheerio"),
  fetch = require("node-fetch"),
  moment = require("moment-timezone"),
  mimetype = require("mime-types"),
  qs = require("qs"),
  { expandedUrl: expandedUrl } = require("../lib/tool");
async function shortener(t) {
  return (
    (html = (
      await axios("https://caliphdev.net", {
        method: "POST",
        data: new URLSearchParams(Object.entries({ url: t })),
      })
    ).data),
    ($ = cheerio.load(html)),
    $("#app-6 > input").attr("value")
  );
}
async function tiktok33(t) {
  let e = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query: t })),
  });
  return (
    (result = {}),
    (result.title = e.data.desc),
    (result.author = e.data.author),
    (result.nowm = e.data.links[0].a),
    (result.watermark = e.data.links[1].a),
    (result.audio = e.data.links[2].a),
    (result.thumbnail = e.data.cover),
    result
  );
}
function instagramsave(t) {
  return new Promise(async (e, a) => {
    axios
      .request({
        url: "https://www.instagramsave.com/download-instagram-videos.php",
        method: "GET",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
          cookie:
            "_ga=GA1.2.1966094315.1639986997; PHPSESSID=d9tkhru5qttobq878277ai0glr; _gid=GA1.2.1072368765.1640518721; _gat_gtag_UA_82413101_3=1",
        },
      })
      .then(({ data: a }) => {
        const i = cheerio.load(a)("#token").attr("value");
        let o = {
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            cookie:
              "_ga=GA1.2.1966094315.1639986997; PHPSESSID=d9tkhru5qttobq878277ai0glr; _gid=GA1.2.1072368765.1640518721; _gat_gtag_UA_82413101_3=1",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
          },
          data: { url: t, action: "post", token: i },
        };
        axios
          .post(
            "https://www.instagramsave.com/system/action.php",
            qs.stringify(o.data),
            { headers: o.headers }
          )
          .then(({ data: t }) => {
            e(t.medias);
          });
      })
      .catch(a);
  });
}
function instasupersave(t) {
  return new Promise(async (e, a) => {
    let i = t.match(/(https:\/\/(www\.)?instagram.com\/(.*\/)?stories\/)/g)
        ? t.split("/")[4]
        : t,
      o = await profileig(i);
    if (!o.status) return e({ status: !1 });
    let r = await (
      await fetch("https://instasupersave.com/api/ig/stories/" + o.data.id)
    ).json();
    if (0 == r.result.length) return e({ status: !1 });
    let n = t.match(/(https:\/\/(www\.)?instagram.com\/(.*\/)?stories\/)/g)
      ? [r.result.find((e) => e.pk == t.split("/")[5].split("?")[0])]
      : r.result;
    if (null == n[0]) return e({ status: !1 });
    let s = [];
    for (let t = 0; t < n.length; t++)
      s.push({
        type: void 0 !== n[t].video_versions ? "mp4" : "jpg",
        url:
          void 0 !== n[t].video_versions
            ? n[t].video_versions[0].url
            : n[t].image_versions2.candidates[0].url,
        taken_at: moment(1e3 * parseInt(n[t].taken_at)).format(
          "DD/MM/YY HH:mm"
        ),
      });
    e({ status: !0, data: s });
  });
}
function pinterestvideodownloader(t) {
  return new Promise(async (e, a) => {
    let i = new URLSearchParams();
    i.append("url", t);
    let o = await (
      await fetch("https://pinterestvideodownloader.com/", {
        method: "POST",
        body: i,
      })
    ).text();
    $ = cheerio.load(o);
    let r = [];
    if (
      ($("table > tbody > tr").each(function (t, e) {
        "" != $($(e).find("td")[0]).text() &&
          r.push({ url: $($(e).find("td")[0]).find("a").attr("href") });
      }),
      0 == r.length)
    )
      return e({ status: !1 });
    e({ status: !0, data: r });
  });
}
function tikmate(t) {
  return new Promise(async (e, a) => {
    let i = await aio(t);
    if (i.error) return e({ status: !1 });
    let o = cheerio.load(i.data),
      r =
        "https://snapsave.app" +
        o("table > tbody > tr:nth-child(1)").find("a").attr("href"),
      n = o("table > tbody > tr:nth-child(2)").find("a").attr("href");
    e({
      status: !0,
      caption: o("div.content").find("span").text(),
      videoHD: r,
      videoSD: n,
    });
  });
}
async function tiktokDownloader(t) {
  const e = await expandedUrl(t),
    a = `https://tiktok.com/node/share/video/${
      (t = e.includes("t.tiktok.com") ? await expandedUrl(e) : e).split("/")[3]
    }/${t.split("/")[5]}`,
    i = await fetch(a, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36 Edg/84.0.522.52",
      },
    }),
    o = await i.json();
  return { ...o.seoProps.metaParams, ...o.itemInfo.itemStruct };
}
function tiktok(t) {
  let e = {
    headers: {
      Accept: "*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  };
  return new Promise(async (a, i) => {
    let o = new URLSearchParams();
    o.append("url", t);
    let r = await (
      await fetch("https://api.tikmate.app/api/lookup", {
        method: "POST",
        body: o,
        ...e,
      })
    ).json();
    if (!r.success) return a({ status: !1 });
    a({
      status: !0,
      ...{
        author: r.author_name + " (@" + r.author_id + ")",
        publish: r.create_time,
        likes: Number(parseInt(r.like_count))
          .toLocaleString()
          .replace(",", "."),
        comments: Number(parseInt(r.comment_count))
          .toLocaleString()
          .replace(",", "."),
        shares: Number(parseInt(r.share_count))
          .toLocaleString()
          .replace(",", "."),
      },
      data: {
        videoSD:
          "https://tikmate.app/download/" + r.token + "/" + r.id + ".mp4",
        videoHD:
          "https://tikmate.app/download/" + r.token + "/" + r.id + ".mp4?hd=1",
      },
    });
  });
}
async function mediafires(t) {
  const e = await axios.get(t),
    a = cheerio.load(e.data),
    i = [],
    o = a("a#downloadButton").attr("href"),
    r = a("a#downloadButton")
      .text()
      .replace("Download", "")
      .replace("(", "")
      .replace(")", "")
      .replace("\n", "")
      .replace("\n", "")
      .trim(),
    n = o.split("/")[5];
  return (
    (mime = n.split(".")),
    (mime = mimetype.lookup(mime[1])),
    i.push({ nama: n, mime: mime, size: r, link: o }),
    i[0]
  );
}
function facebook(t) {
  return new Promise(async (e, a) => {
    const i = await fetch("https://www.getfvid.com/downloader", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Referer: "https://www.getfvid.com/",
        },
        body: new URLSearchParams(Object.entries({ url: t })),
      }),
      o = cheerio.load(await i.text());
    e({
      result: {
        url: t,
        title: o(
          "body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-5.no-padd > div > h5 > a"
        ).text(),
        time: o("#time").text(),
        hd: o(
          "body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a"
        ).attr("href"),
        sd: o(
          "body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(2) > a"
        ).attr("href"),
        audio: o(
          "body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(3) > a"
        ).attr("href"),
      },
    });
  });
}
async function ttdown(t) {
  return new Promise(async (e, a) => {
    await axios
      .request({
        url: "https://ttdownloader.com/",
        method: "GET",
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-language": "en-US,en;q=0.9,id;q=0.8",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
          cookie:
            "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934",
        },
      })
      .then((i) => {
        const o = cheerio.load(i.data)("#token").attr("value");
        axios({
          url: "https://ttdownloader.com/req/",
          method: "POST",
          data: new URLSearchParams(
            Object.entries({ url: t, format: "", token: o })
          ),
          headers: {
            accept: "/",
            "accept-language": "en-US,en;q=0.9,id;q=0.8",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
            cookie:
              "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934",
          },
        })
          .then(async (t) => {
            const a = cheerio.load(t.data),
              i = {
                status: t.status,
                result: {
                  nowatermark: a("#results-list > div:nth-child(2)")
                    .find("div.download > a")
                    .attr("href"),
                  watermark: a("#results-list > div:nth-child(3)")
                    .find("div.download > a")
                    .attr("href"),
                  audio: a("#results-list > div:nth-child(4)")
                    .find(" div.download > a")
                    .attr("href"),
                },
              };
            e(i);
          })
          .catch(a);
      })
      .catch(a);
  });
}
function downloader4twitter(t) {
  return new Promise(async (e) => {
    try {
      let a = new URLSearchParams();
      a.append("twitter_url", t), a.append("submit", "submit");
      let i = await (
          await axios.post("https://downloader4twitter.com/", a)
        ).data,
        o = cheerio.load(i),
        r = [];
      return (
        o("div.search-form-output")
          .find("img")
          .each((t, e) =>
            /thumb/.test(o(e).attr("src"))
              ? ""
              : r.push({ type: "jpg", url: o(e).attr("src") })
          ),
        o("div.search-form-output")
          .find("a.btn-download")
          .each((t, e) =>
            r.push({
              type: "mp4",
              url: o(e)
                .attr("onclick")
                .match(/("(.*?)")/)[2],
            })
          ),
        0 == r.length ? e({ status: !1 }) : e({ status: !0, data: r })
      );
    } catch (t) {
      return console.log(t), e({ status: !1 });
    }
  });
}
async function shortlink(t) {
  return (
    await require("axios").get(
      "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(t)
    )
  ).data;
}
async function stickerTelegram(t) {
  let e = (
    await axios.get("https://api.wibusoft.com/api/telestick/getpath?url=" + t, {
      responseType: "json",
      headers: { accept: "application/json" },
    })
  ).data;
  return "success" != e.status
    ? { status: !1 }
    : {
        status: !0,
        name: e.result.name,
        title: e.result.title,
        fileid: e.result.fileid,
      };
}
async function stickerTelegramDownload(t) {
  let e = await fetch(
    "https://api.wibusoft.com/api/telestick/getstick?pathid=" + t,
    { headers: { accept: "image/webp" } }
  );
  return await e.buffer();
}
function aio(t) {
  return new Promise(async (e, a) => {
    try {
      let a = {
          headers: {
            Referer: "https://snapsave.app/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        },
        i = new URLSearchParams();
      i.append("url", t);
      let o = await fetch("https://snapsave.app/action.php", {
        method: "POST",
        body: i,
        ...a,
      });
      if (!o.ok) return e({ status: !1 });
      e(await o.json());
    } catch (t) {
      return console.log(t), e({ status: !1 });
    }
  });
}
module.exports = {
  instagramsave: instagramsave,
  instasupersave: instasupersave,
  pinterestvideodownloader: pinterestvideodownloader,
  tikmate: tikmate,
  mediafires: mediafires,
  facebook: facebook,
  ttdown: ttdown,
  downloader4twitter: downloader4twitter,
  stickerTelegram: stickerTelegram,
  stickerTelegramDownload: stickerTelegramDownload,
  aio: aio,
  tiktok33: tiktok33,
  tiktokDownloader: tiktokDownloader,
};
