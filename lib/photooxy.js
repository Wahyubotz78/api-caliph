const { default: axios } = require("axios"),
  cheerio = require("cheerio"),
  qs = require("qs"),
  request = require("request");
function oxy(e, o) {
  return new Promise((t, r) => {
    const i = qs.stringify({ text_1: e, login: "OK" });
    axios({
      method: "post",
      url: o,
      headers: {
        authority: "photooxy.com",
        "content-type": "application/x-www-form-urlencoded",
        "user-agent":
          "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
      },
      data: i,
    }).then(({ data: e }) => {
      const o = cheerio.load(e)("div.btn-group > a").attr("href");
      t({ result: o });
    });
  });
}
async function slidePhotooxy(e, o) {
  return new Promise((t, r) => {
    request(
      {
        method: "POST",
        url: "https://photooxy.com/other-design/make-a-video-that-spells-your-name-237.html",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        formData: { optionNumber_0: o, text_1: e, login: "OK" },
      },
      async function (e, o, r) {
        if (e) throw new Error(e);
        const i = cheerio.load(r)("div.btn-group > a").attr("href");
        t({ status: 200, creator: "caliphdev", result: i });
      }
    );
  });
}
module.exports = { oxy: oxy, slidePhotooxy: slidePhotooxy };
