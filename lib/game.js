const { pickRandom: pickRandom } = require("../lib/functions"),
  axios = require("axios"),
  cheerio = require("cheerio"),
  fs = require("fs"),
  SpotifyWebApi = require("spotify-web-api-node");
let katajson = JSON.parse(fs.readFileSync("./src/kata.json"));
function kata() {
  return new Promise(async (t, a) => {
    let e = pickRandom(katajson);
    (data = { kata: e }), t({ status: !0, data: data });
  });
}
function cKata(t) {
  return new Promise(async (a, e) => {
    if (!katajson.includes(t)) return a({ status: !1 });
    a({ status: !0 });
  });
}
async function spotify(t) {
  var a = new SpotifyWebApi({
    clientId: "465e0591b8c047afa8baf5e977e60bd2",
    clientSecret: "1bab2f0de4a2418490128073c9238cd7",
  });
  await a.clientCredentialsGrant().then(
    function (t) {
      a.setAccessToken(t.body.access_token);
    },
    function (t) {
      console.log("Something went wrong!", t);
    }
  );
  a = await new SpotifyWebApi({ accessToken: a.getAccessToken() });
  let e;
  return (
    await a.getPlaylist(t).then(
      function (t) {
        let a = Math.floor(Math.random() * t.body.tracks.items.length);
        e = {
          judul: t.body.tracks.items[a].track.name,
          durasi: t.body.tracks.items[a].track.duration_ms,
          url: t.body.tracks.items[a].track.href,
          artist: t.body.tracks.items[a].track.artists[0].name,
          preview: t.body.tracks.items[a].track.preview_url,
        };
      },
      function (t) {
        throw `Tebak Lagu Sedang Error : (${t})`;
      }
    ),
    e
  );
}
async function topChar() {
  let t = Math.floor(500 * Math.random() + 1),
    a = await (
      await axios.get("https://myanimelist.net/character.php?limit=" + t)
    ).data;
  $ = cheerio.load(a);
  let e = { r: [], anime: [] };
  $("table > tbody > tr > td").each(function (t, a) {
    let r,
      i = $(a).find("a").text().trim();
    r = $(a).find("img").attr("data-srcset")
      ? $(a).find("img").attr("data-srcset")
      : $(a).find("a").attr("href");
    let n = r ? r.replace("https://", "").split("/")[1] : "";
    e[n]?.push({ text: i.replace(",", ""), url: r });
  });
  let r = Math.floor(Math.random() * e.r.length),
    i = e.r[r],
    n = e.anime[r];
  return {
    nama: i.text,
    anime: null != n.text ? n.text : "",
    img: i.url.split(",")[1].trim().split(" ")[0],
  };
}
module.exports = {
  kata: kata,
  cKata: cKata,
  spotify: spotify,
  topChar: topChar,
};
