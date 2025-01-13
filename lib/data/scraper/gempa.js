const fetch = require("node-fetch"),
  cheerio = require("cheerio"),
  fs = require("fs");
(async () => {
  let t = await fetch(
      "https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg"
    ),
    e = cheerio.load(await t.text()),
    i = [];
  for (let t = 0; t < 30; t++) {
    let a = e(
        "body > div.wrapper > div.container.content > div > div.col-md-8 > div > div > table > tbody > tr"
      )
        .eq(t)
        .find("td"),
      r = e(a).eq(1).text().trim(),
      l = e(a).eq(2).text().trim(),
      n = e(a).eq(3).text().trim(),
      m = e(a).eq(4).text().trim(),
      o = e(a).eq(5).text().trim(),
      d = e(a).eq(6).text().trim();
    i.push({
      waktu: r,
      lintang: l,
      bujur: n,
      magnitudo: m,
      kedalaman: o,
      wilayah: d,
    });
  }
  await fs.writeFileSync(
    "./meteorologi-klimatologi-geofisika/gempa/gempa_terkini.json",
    JSON.stringify(i, null, 2)
  );
})(),
  (async () => {
    let t = await fetch(
        "https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg"
      ),
      e = cheerio.load(await t.text()),
      i = [];
    for (let t = 0; t < 20; t++) {
      let a = e(
          "body > div.wrapper > div.container.content > div > div.col-md-8 > div > div > table > tbody > tr"
        )
          .eq(t)
          .find("td"),
        r = e(a).eq(1).html().replace(/<br>/g, " ").trim(),
        l = e(a)
          .eq(2)
          .text()
          .split(" ")
          .slice(0, 2)
          .map((t) => t.trim())
          .join(" "),
        n = e(a)
          .eq(2)
          .text()
          .split(" ")
          .slice(2, 4)
          .map((t) => t.trim())
          .join(" "),
        m = e(a).eq(3).text().trim(),
        o = e(a).eq(4).text().trim(),
        d = e(a).eq(5).find("a").text().trim(),
        g = [],
        s = e(a)
          .eq(5)
          .html()
          .match(/<span ?class=\"label label-warning\">/g);
      for (let t = 0; t < s.length; t++)
        g.push(e(a).eq(5).find("span").eq(t).text().replace("\t", " ").trim());
      i.push({
        waktu: r,
        lintang: l,
        bujur: n,
        magnitudo: m,
        kedalaman: o,
        wilayah: d,
        warning: g.slice(0, g.indexOf("")),
      });
    }
    await fs.writeFileSync(
      "./meteorologi-klimatologi-geofisika/gempa/gempa_dirasakan.json",
      JSON.stringify(i, null, 2)
    );
  })();
