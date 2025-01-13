const fetch = require("node-fetch"),
  cheerio = require("cheerio"),
  fs = require("fs");
(async () => {
  let a = await fetch(
      "https://www.bi.go.id/id/statistik/informasi-kurs/transaksi-bi/default.aspx"
    ),
    t = cheerio.load(await a.text()),
    e = [],
    i = [];
  for (let a = 0; a < 25; a++) {
    let e = t(
        "#exampleModal > div > div > div.modal-body > div > table > tbody > tr"
      )
        .eq(a)
        .find("td"),
      n = t(e).eq(0).text(),
      r = t(e).eq(1).text();
    i.push({ singkatan_mata_uang: n, kepanjangan_mata_uang: r });
  }
  for (let a = 0; a < 25; a++) {
    let n = t(
        "#ctl00_PlaceHolderMain_g_6c89d4ad_107f_437d_bd54_8fda17b556bf_ctl00_GridView1 > table > tbody > tr"
      )
        .eq(a)
        .find("td"),
      r = t(n).eq(0).text().trim(),
      d = i.filter((a) => new RegExp(r, "g").test(a.singkatan_mata_uang)) || [
        {},
      ],
      _ =
        (d[0] && d[0].kepanjangan_mata_uang
          ? d[0].kepanjangan_mata_uang
          : ""
        ).trim() || "";
    e.push({
      mata_uang: r,
      nama_mata_uang: _,
      kurs_beli: t(n).eq(2).text(),
      kurs_jual: t(n).eq(3).text(),
    });
  }
  await fs.writeFileSync("./ekonomi/kurs.json", JSON.stringify(e, null, 2));
})();
