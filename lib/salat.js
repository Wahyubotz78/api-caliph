let axios = require("axios"),
  cheerio = require("cheerio"),
  moment = require("moment-timezone");
function _axios(t) {
  return new Promise(async (a, e) => {
    axios.get(t).then(({ data: t }) => {
      a(t);
    });
  });
}
function sholatAll(t) {
  return new Promise(async (a, e) => {
    let i = await _axios(
      "https://m.dream.co.id/jadwal-salat/" +
        t.replace(/\s/g, "-").toLowerCase()
    );
    $ = cheerio.load(i);
    let n = [];
    $('table[class="table-index-jadwal"] > tbody > tr').each(function (t, a) {
      n.push({
        tanggal: $(a).find('td[data-title="Tanggal"]').text(),
        subuh: $(a).find('td[data-title="Subuh"]').text(),
        duha: $(a).find('td[data-title="Duha"]').text(),
        zuhur: $(a).find('td[data-title="Zuhur"]').text(),
        ashar: $(a).find('td[data-title="Asar"]').text(),
        magrib: $(a).find('td[data-title="Magrib"]').text(),
        isya: $(a).find('td[data-title="Isya"]').text(),
      });
    }),
      a({ creator: "@neoxrs – Wildan Izzudin", status: !0, data: n });
  });
}
moment.tz.setDefault("Asia/Jakarta").locale("id"),
  (module.exports = (t) =>
    new Promise(async (a, e) => {
      let i = await sholatAll(t);
      if (!i.status)
        return a({ creator: "@neoxrs – Wildan Izzudin", status: !1 });
      let n = moment(1 * new Date()).format("DD-MM-yy"),
        d = i.data.find((t) => t.tanggal == n);
      if (void 0 === d)
        return a({ creator: "@neoxrs – Wildan Izzudin", status: !1 });
      a({ creator: "@neoxrs – Wildan Izzudin", status: !0, data: d });
    }));
