let { fakeua: fakeua } = require("caliph-api");
async function ssweb(e, t = !1) {
  const a = await (async function (e = {}) {
      const t = {
        headless: !0,
        defaultViewport: { width: 1920, height: 1080 },
        timeout: 12e4,
        args: ["--no-sandbox"],
        ...e,
      };
      return await require("puppeteer").launch(t);
    })(),
    i = await a.newPage();
  await i.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 (compatible; CaliphScreenshotBot/3.0; +http://caliphapi.com)"
  ),
    await i.goto(e, { waitUntil: "networkidle0", timeout: 3e5 });
  const o = await i.screenshot({ type: "png", fullPage: t });
  return await a.close(), o;
}
module.exports = ssweb;
