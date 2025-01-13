let fetch = require("node-fetch"),
  { JSDOM: JSDOM } = require("jsdom");
const cheerio = require("cheerio");
let axios = require("axios");
async function youtube(e) {
  return new Promise((t, a) => {
    const o =
      /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
    if (o.test(e)) {
      let i = o.exec(e),
        r = { url: "https://www.youtube.be/" + i, q_auto: 0, ajax: 1 },
        d = {
          "sec-ch-ua":
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          Cookie:
            'PHPSESSID=6jo2ggb63g5mjvgj45f612ogt7; _ga=GA1.2.405896420.1625200423; _gid=GA1.2.2135261581.1625200423; _PN_SBSCRBR_FALLBACK_DENIED=1625200785624; MarketGidStorage={"0":{},"C702514":{"page":5,"time":1625200846733}}',
        };
      axios("https://www.y2mate.com/mates/en68/analyze/ajax", {
        method: "POST",
        data: new URLSearchParams(Object.entries(r)),
        headers: d,
      })
        .then(({ data: e }) => {
          const a = cheerio.load(e.result);
          let o = a("div.thumbnail.cover > a > img").attr("src"),
            r = a("div.thumbnail.cover > div > b").text(),
            h = a(
              "#mp4 > table > tbody > tr:nth-child(3) > td:nth-child(2)"
            ).text(),
            s = a(
              "#audio > table > tbody > tr:nth-child(1) > td:nth-child(2)"
            ).text(),
            c = /var k__id = "(.*?)"/.exec(e.result)[1],
            n = {
              type: "youtube",
              _id: c,
              v_id: i[1],
              ajax: "1",
              token: "",
              ftype: "mp4",
              fquality: 480,
            };
          axios("https://www.y2mate.com/mates/en68/convert", {
            method: "POST",
            data: new URLSearchParams(Object.entries(n)),
            headers: d,
          }).then(({ data: e }) => {
            let a = cheerio.load(e.result)("div > a").attr("href"),
              n = {
                type: "youtube",
                _id: c,
                v_id: i[1],
                ajax: "1",
                token: "",
                ftype: "mp3",
                fquality: 128,
              };
            axios("https://www.y2mate.com/mates/en68/convert", {
              method: "POST",
              data: new URLSearchParams(Object.entries(n)),
              headers: d,
            }).then(({ data: e }) => {
              let d = cheerio.load(e.result)("div > a").attr("href");
              t({
                id: i[1],
                title: r,
                size: h,
                quality: "480p",
                thumb: o,
                link: a,
                size_mp3: s,
                mp3: d,
              });
            });
          });
        })
        .catch(a);
    } else a("link invalid");
  });
}
module.exports = { youtube: youtube };
