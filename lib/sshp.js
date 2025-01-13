let { fakeua: fakeua } = require("caliph-api");
async function ssweb(e, t = !1) {
  const a = await (async function (e = {}) {
      const t = {
        headless: !0,
        defaultViewport: { width: 1080, height: 1920 },
        timeout: 12e4,
        args: ["--no-sandbox"],
        ...e,
      };
      return await require("puppeteer").launch(t);
    })(),
    i = await a.newPage();
  await i.setUserAgent(
    "Mozilla/5.0 (Linux; Android 11; RMX3235) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36"
  ),
    await i.goto(e, { waitUntil: "networkidle0", timeout: 3e5 });
  const n = await i.screenshot({ type: "png", fullPage: t });
  return await a.close(), n;
}
module.exports = ssweb;
