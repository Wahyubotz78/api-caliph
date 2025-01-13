const express = require("express");
const router = express.Router();

router.get("/http/headers", async (req, res, next) => {
  try {
    let { url } = req.query;
    if (!url) return res.sendStatus(400);
    let { headers, status } = await fetch(url, { method: "head" });
    res.status(status).send(await headers.raw());
  } catch (e) {
    res.status(500).send(require("util").format(e));
  }
});
// Anime
const {
  kiryuusearch,
  kiryuuget,
  mangatoonsearch,
  mangatoonget,
  mangatoonread,
  kusonime,
  animeidl,
  animeidsearch,
  animeidget,
  mangasearch,
  character,
  otakudesu,
} = require("../controllers/anime");

router.get("/kiryuusearch", kiryuusearch);
router.get("/kiryuuget", kiryuuget);
router.get("/mangatoonsearch", mangatoonsearch);
router.get("/mangatoonget", mangatoonget);
router.get("/mangatoonread", mangatoonread);
router.get("/kusonime", kusonime);
router.get("/animeidl", animeidl);
router.get("/animeidsearch", animeidsearch);
router.get("/animeidget", animeidget);
router.get("/mangasearch", mangasearch);
router.get("/otakudesu", otakudesu);
router.get("/chara", character);

global.anime = [
  {
    url: "/api/chara?query=megumin",
    name: "Character Search",
  },
  {
    url: "/api/otakudesu?query=mushoku",
    name: "Otakudesu Search",
  },
  {
    url: "/api/mangasearch?query=demon",
    name: "Manga Search",
  },
  {
    url: "/api/kiryuusearch?query=mushoku",
    name: "Kiryuu Search",
  },
  {
    url: "/api/kiryuuget?url=https://kiryuu.id/manga/mushoku-tensei-isekai-ittara-honki-dasu/",
    name: "Kiryuu Download",
  },
  {
    url: "/api/mangatoonsearch?query=demon",
    name: "Mangatoon Search",
  },
  {
    url: "/api/mangatoonget?url=https://mangatoon.mobi/id/detail/5",
    name: "Mangatoon Download",
  },
  {
    url: "/api/mangatoonread?url=https://mangatoon.mobi/id/watch/5/34328",
    name: "Mangatoon Detail",
  },
  {
    url: "/api/kusonime?query=issei",
    name: "Kusonime",
  },
  {
    url: "/api/animeidl?",
    name: "AnimeID latest",
  },
  {
    url: "/api/animeidsearch?query=issei",
    name: "AnimeID Search",
  },
  {
    url: "/api/animeidget?url=https://nontonanimeid.one/anime/naruto-shippuuden-movie-3-hi-no-ishi-wo-tsugu-mono/",
    name: "AnimeID Download",
  },
];

// Canvas
const {
  affectRouter,
  beautifulRouter,
  bedRouter,
  customGfx,
  customGfx2,
  deleteRouter,
  distractedRouter,
  kaneki,
  loli,
  sadboy,
  girlNeko,
  rem,
  jailRouter,
  jokerRouter,
  kissRouter,
  spankRouter,
  shitRouter,
  slapRouter,
  faceRouter,
  rainbowRouter,
  ripRouter,
  trashRouter,
  hitlerRouter,
  wantedRouter,
  wastedRouter,
  welcome,
  leave,
  welcome2,
  leave2,
  welcome3,
  leave3,
  Promote,
  Demote,
  triggerRouter,
  rank,
} = require("../controllers/canvas");

router.get("/trigger", triggerRouter);
router.get("/affect", affectRouter);
router.get("/beautiful", beautifulRouter);
router.get("/bed", bedRouter);
router.get("/delete", deleteRouter);
router.get("/distracted", distractedRouter);
router.get("/jail", jailRouter);
router.get("/joke", jokerRouter);
router.get("/spank", spankRouter);
router.get("/shit", shitRouter);
router.get("/slap", slapRouter);
router.get("/faceplam", faceRouter);
router.get("/rainbow", rainbowRouter);
router.get("/rip", ripRouter);
router.get("/trash", trashRouter);
router.get("/hitler", hitlerRouter);
router.get("/wasted", wastedRouter);
router.get("/wanted", wantedRouter);
router.get("/kiss", kissRouter);
router.get("/welcome", welcome);
router.get("/goodbye", leave);
router.get("/welcome2", welcome2);
router.get("/goodbye2", leave2);
router.get("/welcome3", welcome3);
router.get("/goodbye3", leave3);
router.get("/promote", Promote);
router.get("/demote", Demote);
router.get("/kaneki", kaneki);
router.get("/lolimaker", loli);
router.get("/customlogo2", customGfx2);
router.get("/sadboy", sadboy);
router.get("/girlneko", girlNeko);
router.get("/rem", rem);
router.get("/customlogo", customGfx);
router.get("/rank", rank);

global.canvas = [
  {
    url: "/api/welcome?username=caliph%20&groupname=andline&groupicon=https://i.ibb.co/G5mJZxs/rin.jpg&membercount=30&profile=https://i.ibb.co/G5mJZxs/rin.jpg&background=https://i.ibb.co/G5mJZxs/rin.jpg",
    name: "welcome",
  },
  {
    url: "/api/welcome2?username=caliph&groupname=andline&membercount=30&profile=https://i.ibb.co/G5mJZxs/rin.jpg&background=https://i.ibb.co/G5mJZxs/rin.jpg",
    name: "welcome2",
  },
  {
    url: "/api/welcome3?username=caliph&profile=https://i.ibb.co/G5mJZxs/rin.jpg",
    name: "welcome3",
  },
  {
    url: "/api/goodbye?username=caliph%20&groupname=andline&groupicon=https://i.ibb.co/G5mJZxs/rin.jpg&membercount=30&profile=https://i.ibb.co/G5mJZxs/rin.jpg&background=https://i.ibb.co/G5mJZxs/rin.jpg",
    name: "Goodbye",
  },
  {
    url: "/api/goodbye2?username=caliph&groupname=andline&membercount=30&profile=https://i.ibb.co/G5mJZxs/rin.jpg&background=https://i.ibb.co/G5mJZxs/rin.jpg",
    name: "Goodbye2",
  },
  {
    url: "/api/goodbye3?username=caliph&profile=https://i.ibb.co/G5mJZxs/rin.jpg",
    name: "Goodbye3",
  },
  {
    url: "/api/promote?username=caliph%20&groupname=andline&groupicon=https://i.ibb.co/G5mJZxs/rin.jpg&membercount=30&profile=https://i.ibb.co/G5mJZxs/rin.jpg&background=https://i.ibb.co/G5mJZxs/rin.jpg",
    name: "promote",
  },
  {
    url: "/api/demote?username=caliph%20&groupname=andline&groupicon=https://i.ibb.co/G5mJZxs/rin.jpg&membercount=30&profile=https://i.ibb.co/G5mJZxs/rin.jpg&background=https://i.ibb.co/G5mJZxs/rin.jpg",
    name: "demote",
  },
  {
    url: "/api/rank?rank=1&pp=https://i.ibb.co/G5mJZxs/rin.jpg&level=1&currentxp=69&needxp=100&name=caliph&discriminator=1234",
    name: "Level Up/Rank",
  },
  {
    url: "/api/rem?nama=caliphdev",
    name: "Logo Rem",
  },
  {
    url: "/api/girlneko?nama=caliph&nama2=dev",
    name: "Logo Neko",
  },
  {
    url: "/api/lolimaker?nama=caliph&nama2=dev",
    name: "Logo Loli",
  },
  {
    url: "/api/kaneki?nama=caliph",
    name: "Logo Kaneki",
  },
  {
    url: "/api/sadboy?nama=caliph&nama2=dev",
    name: "Logo Sadboy",
  },
  {
    url: "/api/custom?nama=caliph&bg=",
    name: "Custom Logo",
  },
  {
    url: "/api/custom2?nama=mel&nama2=dev&bg=",
    name: "Custom Logo2",
  },
  {
    url: "/api/trigger?url=https://telegra.ph/file/981040ed40876d1c0aaa6.png",
    name: "Trigger",
  },
  {
    url: "/api/wanted?url=https://telegra.ph/file/981040ed40876d1c0aaa6.png",
    name: "Wanted",
  },
  {
    url: "/api/wasted?url=https://telegra.ph/file/981040ed40876d1c0aaa6.png",
    name: "Wasted",
  },
  {
    url: "/api/slap?url=https://i.pinimg.com/originals/ce/c7/28/cec728abc0541977961022b6f0adc611.jpg&url2=https://i.pinimg.com/originals/ce/c7/28/cec728abc0541977961022b6f0adc611.jpg",
    name: "Make Slap Image",
  },
  {
    url: "/api/delete?url=https://telegra.ph/file/981040ed40876d1c0aaa6.png",
    name: "Delete Trash",
  },
  {
    url: "/api/affect?url=https://i.pinimg.com/originals/ce/c7/28/cec728abc0541977961022b6f0adc611.jpg",
    name: "Affect",
  },
  {
    url: "/api/beautiful?url=https://telegra.ph/file/981040ed40876d1c0aaa6.png",
    name: "Beautifull",
  },
  {
    url: "/api/bed?url=https://i.pinimg.com/originals/ce/c7/28/cec728abc0541977961022b6f0adc611.jpg&url2=https://i.pinimg.com/originals/ce/c7/28/cec728abc0541977961022b6f0adc611.jpg",
    name: "Bed",
  },
  {
    url: "/api/hitler?url=https://telegra.ph/file/981040ed40876d1c0aaa6.png",
    name: "Hitler",
  },
  {
    url: "/api/jail?url=https://telegra.ph/file/981040ed40876d1c0aaa6.png",
    name: "Jail",
  },
  {
    url: "/api/rainbow?url=https://telegra.ph/file/981040ed40876d1c0aaa6.png",
    name: "Rainbow",
  },
  {
    url: "/api/rip?url=https://telegra.ph/file/981040ed40876d1c0aaa6.png",
    name: "Rip",
  },
];

// Downloader
const {
  instagram,
  instagramStory,
  pinterest,
  tiktok,
  tiktok2,
  twitter,
  stikertelegram,
  getstikertele,
  mediafire,
  fb,
  ytv,
  yta,
  yts,
} = require("../controllers/downloader");

router.get("/ig", instagram);
router.get("/igs", instagramStory);
router.get("/pinterest", pinterest);
router.get("/tiktok", tiktok);
router.get("/ytv", ytv);
router.get("/yta", yta);
router.get("/yts", yts);
router.get("/tiktok2", tiktok2);
router.get("/fb", fb);
router.get("/mediafire", mediafire);
router.get("/stikertelegram", stikertelegram);
router.get("/twitter", twitter);
router.get("/getstikertele", getstikertele);

global.downloader = [
  {
    url: "/api/fb?url=",
    name: "Facebook",
  },
  {
    url: "/api/mediafire?url=",
    name: "Mediafire",
  },
  {
    url: "/api/ig?url=https://www.instagram.com/p/COrVyINJO5h/",
    name: "Instagram",
  },
  {
    url: "/api/igs?url=https://www.instagram.com/stories/buildwithangga/2727521370510875968/",
    name: "Instagram Story",
  },
  {
    url: "/api/twitter?url=https://twitter.com/rustijono/status/1269219782403883009?s=20",
    name: "Twitter",
  },
  {
    url: "/api/pinterest?url=https://pin.it/4viNvEN",
    name: "Pinterest",
  },
  {
    url: "/api/stikertelegram?url=https://t.me/addstickers/Bearcoup_farsisticker",
    name: "Stiker Telegram",
  },
  {
    url: "/api/getstikertele?fileid=CAACAgQAAxUAAWGyiGxIqJ_FEI0jEi8KRut-l2csAAIKCQACwOD4UdHjBLixwNzFIwQ",
    name: "Get Stiker Telegram",
  },
  {
    url: "/api/tiktok?url=https://vt.tiktok.com/ZSJE2ffo4",
    name: "Tiktok",
  },
  {
    url: "/api/tiktok2?url=https://vt.tiktok.com/ZSJE2ffo4",
    name: "Tiktok2",
  },
  {
    url: "/api/ytv?url=https://www.youtube.com/watch?v=u8EBDm-L7WY",
    name: "Youtube Video",
  },
  {
    url: "/api/yta?url=https://www.youtube.com/watch?v=u8EBDm-L7WY",
    name: "Youtube Audio",
  },
  {
    url: "/api/yts?query=gustixa",
    name: "Youtube Search",
  },
];

// Games
const {
  tebakanime,
  tebaklagu,
  asahotak,
  caklontong,
  family100,
  dadu,
  susunkata,
  tebakbendera,
  tebakgambar,
  tebakkabupaten,
  tebakkalimat,
  tebakkata,
  tebakkimia,
  tebaklirik,
  tekateki,
  siapakahaku,
  dare,
  truth,
  ceksambungkata,
  sambungkata,
} = require("../controllers/game");

const { nickff, topupff, payff } = require("../controllers/shop");

router.get("/asahotak", asahotak);
router.get("/nickff", nickff);
router.get("/topupff", topupff);
router.get("/payff", payff);
router.get("/caklontong", caklontong);
router.get("/family100", family100);
router.get("/sambungkata", sambungkata);
router.get("/ceksambungkata", ceksambungkata);
router.get("/siapakahaku", siapakahaku);
router.get("/susunkata", susunkata);
router.get("/tebakanime", tebakanime);
router.get("/tebakgambar", tebakgambar);
router.get("/tebakkalimat", tebakkalimat);
router.get("/tebaklagu", tebaklagu);
router.get("/tebaklirik", tebaklirik);
router.get("/tekateki", tekateki);
router.get("/asahotak", asahotak);
router.get("/tebakbendera", tebakbendera);
router.get("/tebakkabupaten", tebakkabupaten);
router.get("/tebakkalimat", tebakkalimat);
router.get("/tebakkata", tebakkata);
router.get("/tebakkimia", tebakkimia);
router.get("/dadu", dadu);
router.get("/dare", dare);
router.get("/truth", truth);

global.games = [
  {
    url: "/api/tebakbendera?",
    name: "Tebak Bendera",
  },
  {
    url: "/api/tebakkata?",
    name: "Tebak Kata",
  },
  {
    url: "/api/tebakkabupaten?",
    name: "Tebak Kabupaten",
  },
  {
    url: "/api/tebakkalimat?",
    name: "Tebak Kalimat",
  },
  {
    url: "/api/tebakkimia?",
    name: "Tebak Kimia",
  },
  {
    url: "/api/dadu?",
    name: "Dadu",
  },
  {
    url: "/api/truth?",
    name: "Truth",
  },
  {
    url: "/api/dare?",
    name: "Dare",
  },
  {
    url: "/api/asahotak?",
    name: "Asak Otak",
  },
  {
    url: "/api/caklontong?",
    name: "Cak Lontong",
  },
  {
    url: "/api/family100?",
    name: "Family 100",
  },
  {
    url: "/api/sambungkata?",
    name: "Sambung Kata",
  },
  {
    url: "/api/ceksambungkata?kata=arif",
    name: "Cek Sambung Kata",
  },
  {
    url: "/api/siapakahaku?",
    name: "Siapakah Aku",
  },
  {
    url: "/api/susunkata?",
    name: "Susun Kata",
  },
  {
    url: "/api/tebakanime?",
    name: "Tebak Anime",
  },
  {
    url: "/api/tebakgambar?",
    name: "Tebak Gambar",
  },
  {
    url: "/api/tebakkalimat?",
    name: "Tebak Kalimat",
  },
  {
    url: "/api/tebaklagu?id=37i9dQZEVXbObFQZ3JLcXt",
    name: "Tebak Lagu",
  },
  {
    url: "/api/tebaklirik?",
    name: "Tebak Lirik",
  },
  {
    url: "/api/tekateki?",
    name: "Teka Teki",
  },
];

// Image Maker
const { nuliskanan, nuliskiri, attp, ttp } = require("../controllers/maker");
const {
  neon,
  black,
  circuit,
  glitch,
  glitch2,
  fiction,
  bp,
  neonlight,
  toxic,
  matrix,
  neonpl,
  breakwall,
  grafity,
  grafity2,
  gameover,
  glitchtiktok,
  pornhub,
  logowolf,
} = require("../controllers/textpro");
const { photoOxy } = require("./oxy");

router.get("/ttp", ttp);
router.get("/attp", attp);
router.get("/nuliskiri", nuliskiri);
router.get("/nuliskanan", nuliskanan);
router.get("/textpro/neon", neon);
router.get("/textpro/black", black);
router.get("/textpro/circuit", circuit);
router.get("/textpro/glitch", glitch);
router.get("/textpro/glitch2", glitch2);
router.get("/textpro/fiction", fiction);
router.get("/textpro/bp", bp);
router.get("/textpro/neonlight", neonlight);
router.get("/textpro/toxic", toxic);
router.get("/textpro/matrix", matrix);
router.get("/textpro/neonpl", neonpl);
router.get("/textpro/breakwall", breakwall);
router.get("/textpro/grafity", grafity);
router.get("/textpro/grafity2", grafity2);
router.get("/textpro/gameover", gameover);
router.get("/textpro/glitchtiktok", glitchtiktok);
router.get("/textpro/pornhub", pornhub);
router.get("/textpro/logowolf", logowolf);
router.get("/oxy/:tema", photoOxy);

global.textpro = [
  {
    url: "/api/ttp?text=caliphdev",
    name: "TTP",
  },
  {
    url: "/api/attp?text=caliphdev",
    name: "ATTP",
  },
  {
    url: "/api/nuliskiri?text=caliphdev",
    name: "Nulis kiri",
  },
  {
    url: "/api/nuliskanan?text=caliphdev",
    name: "Nulis kanan",
  },
  // {
  //     url: '/api/oxy/colorful?text=caliphdev',
  //     name: 'Photooxy Colorful'
  // },
  // {
  //     url: '/api/oxy/army?text=caliphdev',
  //     name: 'Photooxy Army'
  // },
  // {
  //     url: '/api/oxy/retro?text=caliphdev',
  //     name: 'Photooxy Retro'
  // },
  {
    url: "/api/oxy/shadow?text=caliphdev",
    name: "Photooxy Shadow",
  },
  {
    url: "/api/oxy/flaming?text=caliphdev",
    name: "Photooxy Flaming",
  },
  {
    url: "/api/oxy/rainbow?text=caliphdev",
    name: "Photooxy Rainbow",
  },
  {
    url: "/api/oxy/love?text=caliphdev",
    name: "Photooxy love",
  },
  {
    url: "/api/oxy/wood?text=caliphdev",
    name: "Photooxy Wood",
  },
  {
    url: "/api/oxy/coffe?text=caliphdev",
    name: "Photooxy Coffe",
  },
  {
    url: "/api/oxy/stars?text=caliphdev",
    name: "Photooxy Starts",
  },
  {
    url: "/api/oxy/butterfly?text=caliphdev",
    name: "Photooxy Butterfly",
  },
  {
    url: "/api/oxy/summer?text=caliphdev",
    name: "Photooxy Summer",
  },
  {
    url: "/api/oxy/candy?text=caliphdev",
    name: "Photooxy Candy",
  },
  {
    url: "/api/oxy/royal?text=caliphdev",
    name: "Photooxy Royal",
  },
  {
    url: "/api/oxy/underwater?text=caliphdev",
    name: "Photooxy Underwater",
  },
  {
    url: "/api/oxy/paper?text=caliphdev",
    name: "Photooxy Paper",
  },
  {
    url: "/api/oxy/fur?text=caliphdev",
    name: "Photooxy Fur",
  },
  {
    url: "/api/textpro/neon?text=caliphdev",
    name: "Textpro Neon",
  },
  {
    url: "/api/textpro/black?text=caliphdev",
    name: "Textpro Black",
  },
  {
    url: "/api/textpro/circuit?text=caliphdev",
    name: "Textpro Circuit",
  },
  {
    url: "/api/textpro/glitch?text=caliphdev",
    name: "Textpro Glitch",
  },
  {
    url: "/api/textpro/fiction?text=caliphdev",
    name: "Textpro Fiction",
  },
  {
    url: "/api/textpro/bp?text=caliphdev",
    name: "Textpro Black Pink",
  },
  {
    url: "/api/textpro/neonlight?text=caliphdev",
    name: "Textpro Neonlight",
  },
  {
    url: "/api/textpro/toxic?text=caliphdev",
    name: "Textpro Toxic",
  },
  {
    url: "/api/textpro/matrix?text=caliphdev",
    name: "Textpro Matrix",
  },
  {
    url: "/api/textpro/neonpl?text=caliphdev",
    name: "Textpro Neonpl",
  },
  {
    url: "/api/textpro/breakwall?text=caliphdev",
    name: "Textpro Breakwall",
  },
  {
    url: "/api/textpro/grafity?text=mel&text2=dev",
    name: "Textpro Grafity",
  },
  {
    url: "/api/textpro/grafity2?text=mel&text2=dev",
    name: "Textpro Grafity2",
  },
  {
    url: "/api/textpro/gameover?text=mel&text2=dev",
    name: "Textpro Game Over",
  },
  {
    url: "/api/textpro/glitchtiktok?text=mel&text2=dev",
    name: "Textpro Glitch Tiktok",
  },
  {
    url: "/api/textpro/pornhub?text=mel&text2=dev",
    name: "Textpro Pornhub",
  },
  {
    url: "/api/textpro/logowolf?text=mel&text2=dev",
    name: "Textpro Wolf",
  },
];

// Primbon
const {
  nomorhoki,
  tafsirmimpi,
  ramaljodoh,
  suamiistri,
  ramalancinta,
  artinama,
  kecocokannama,
  kecocokannamapasangan,
  tanggaljadianpernikahan,
  sifatusahabisnis,
  rejekihokiweton,
  pekerjaanwetonlahir,
  ramalannasib,
  cekpotensipenyakit,
  artikartutarot,
  perhitunganfengshui,
  petungharibaik,
  harisangartaliwangke,
  primbonharinaas,
  rahasianagahari,
  primbonarahrejeki,
  ramalanperuntungan,
  wetonjawa,
  sifatkaraktertanggallahir,
  potensikeberuntungan,
  primbonmemancingikan,
  masasubur,
  zodiakk,
  shioo,
} = require("../controllers/primbon");

router.get("/artinama", artinama);
router.get("/tafsirmimpi", tafsirmimpi);
router.get("/ramaljodoh", ramaljodoh);
router.get("/nomorhoki", nomorhoki);
router.get("/suamiistri", suamiistri);
router.get("/ramalcinta", ramalancinta);
router.get("/kecocokannama", kecocokannama);
router.get("/kecocokannamapasangan", kecocokannamapasangan);
router.get("/tanggaljadianpernikahan", tanggaljadianpernikahan);
router.get("/sifatusahabisnis", sifatusahabisnis);
router.get("/rejekihokiweton", rejekihokiweton);
router.get("/pekerjaanwetonlahir", pekerjaanwetonlahir);
router.get("/ramalannasib", ramalannasib);
router.get("/cekpotensipenyakit", cekpotensipenyakit);
router.get("/artikartutarot", artikartutarot);
router.get("/perhitunganfengshui", perhitunganfengshui);
router.get("/petungharibaik", petungharibaik);
router.get("/harisangartaliwangke", harisangartaliwangke);
router.get("/primbonharinaas", primbonharinaas);
router.get("/rahasianagahari", rahasianagahari);
router.get("/primbonarahrejeki", primbonarahrejeki);
router.get("/ramalanperuntungan", ramalanperuntungan);
router.get("/wetonjawa", wetonjawa);
router.get("/sifatkaraktertanggallahir", sifatkaraktertanggallahir);
router.get("/potensikeberuntungan", potensikeberuntungan);
router.get("/primbonmemancingikan", primbonmemancingikan);
router.get("/masasubur", masasubur);
router.get("/zodiak", zodiakk);
router.get("/shio", shioo);

global.primbon = [
  {
    url: "/api/artinama?nama=caliph",
    name: "Arti Nama",
  },
  {
    url: "/api/tafsirmimpi?query=hantu",
    name: "Arti Mimpi",
  },
  {
    url: "/api/ramaljodoh?nama=ariffb&tanggal=1&bulan=1&tahun=2022&nama2=caliph&tanggal2=14&bulan2=1&tahun2=2002",
    name: "Ramalan Jodoh",
  },
  {
    url: "/api/nomorhoki?no=087755080455",
    name: "Nomor Hoki",
  },
  {
    url: "/api/suamiistri?nama=arif&tanggal=25&bulan=2&tahun=2002&nama2=caliph&tanggal2=14&bulan2=1&tahun2=2002",
    name: "Suami Istri",
  },
  {
    url: "/api/ramalcinta?nama=arif&tanggal=25&bulan=2&tahun=2002&nama2=caliph&tanggal2=14&bulan2=1&tahun2=2002",
    name: "Ramalan Cinta",
  },
  {
    url: "/api/kecocokannama?nama=arif&tanggal=25&bulan=2&tahun=2002",
    name: "Kecocokan Nama",
  },
  {
    url: "/api/kecocokannamapasangan?nama=arif&nama2=caliph",
    name: "Kecocokan Nama Pasangan",
  },
  {
    url: "/api/tanggaljadianpernikahan?tanggal=1&bulan=1&tahun=2022",
    name: "Tanggal Jadian Pernikahan",
  },
  {
    url: "/api/sifatusahabisnis?tanggal=1&bulan=1&tahun=2022",
    name: "Sifat Usaha Bisnis",
  },
  {
    url: "/api/rejekihokiweton?tanggal=1&bulan=1&tahun=2022",
    name: "Rejeki Hoki Weton",
  },
  {
    url: "/api/pekerjaanwetonlahir?tanggal=1&bulan=1&tahun=2022",
    name: "Pekejraan Weton Lahir",
  },
  {
    url: "/api/ramalannasib?tanggal=1&bulan=1&tahun=2022",
    name: "Ramalan Nasib",
  },
  {
    url: "/api/cekpotensipenyakit?tanggal=1&bulan=1&tahun=2022",
    name: "Cek Potensi Penyakit",
  },
  {
    url: "/api/artikartutarot?tanggal=1&bulan=1&tahun=2022",
    name: "Arti Kartu Tarot",
  },
  {
    url: "/api/perhitunganfengshui?nama=caliph&gender=2&tahun=2002",
    name: "Perhitungan Feng Shui",
  },
  {
    url: "/api/petungharibaik?tanggal=1&bulan=1&tahun=2022",
    name: "Petung Hari Baik",
  },
  {
    url: "/api/harisangartaliwangke?tanggal=1&bulan=1&tahun=2022",
    name: "Hari Sangartaliwangke",
  },
  {
    url: "/api/primbonharinaas?tanggal=1&bulan=1&tahun=2022",
    name: "Hari Naas",
  },
  {
    url: "/api/rahasianagahari?tanggal=1&bulan=1&tahun=2022",
    name: "Rahasia Naga Hari",
  },
  {
    url: "/api/primbonarahrejeki?tanggal=1&bulan=1&tahun=2022",
    name: "Arah Rejeki",
  },
  {
    url: "/api/ramalanperuntungan?nama=caliph&tanggal=1&bulan=1&tahun=2002&tahun2=2022",
    name: "Ramalan Peruntungan",
  },
  {
    url: "/api/wetonjawa?tanggal=1&bulan=1&tahun=2022",
    name: "Weton Jawa",
  },
  {
    url: "/api/sifatkaraktertanggallahir?nama=caliph&tanggal=1&bulan=1&tahun=2022",
    name: "Sifat Karakter Tanggal Lahir",
  },
  {
    url: "/api/potensikeberuntungan?nama=caliph&tanggal=1&bulan=1&tahun=2022",
    name: "Potensi Keberuntungan",
  },
  {
    url: "/api/primbonmemancingikan?tanggal=1&bulan=1&tahun=2022",
    name: "Memancing Ikan",
  },
  {
    url: "/api/masasubur?tanggal=1&bulan=1&tahun=2022",
    name: "Masa Subur",
  },
  {
    url: "/api/zodiak?zodiac=pisces",
    name: "Zodiak",
  },
  {
    url: "/api/shio?shio=anjing",
    name: "Shio",
  },
];

// Random
const {
  china,
  hijab,
  indon,
  japan,
  korea,
  malay,
  quotes,
  bijak,
  fakta,
  asupan,
  darkjokes,
  cerpen,
  lolis,
  ppcouples,
  aloli,
  husbu,
  randomwalp,
  randomneko,
  randomhug,
  randomkiss,
  randomwaifu,
  randombaka,
  kanna,
  shota,
  ceritahantu,
} = require("../controllers/random");

router.get("/ceritahantu", ceritahantu);
router.get("/china", china);
router.get("/bijak", bijak);
router.get("/fakta", fakta);
router.get("/asupan", asupan);
router.get("/hijab", hijab);
router.get("/indon", indon);
router.get("/japan", japan);
router.get("/korea", korea);
router.get("/malay", malay);
router.get("/quotes", quotes);
router.get("/loli", lolis);
router.get("/ppcouple", ppcouples);
router.get("/asupanloli", aloli);
router.get("/darkjokes", darkjokes);
router.get("/cerpen", cerpen);
router.get("/husbu", husbu);
router.get("/randomwalp", randomwalp);
router.get("/randomneko", randomneko);
router.get("/randomhug", randomhug);
router.get("/randomkiss", randomkiss);
router.get("/waifu", randomwaifu);
router.get("/randombaka", randombaka);
router.get("/randomkanna", kanna);
router.get("/randomshota", shota);
router.get("/ceritahantu", ceritahantu);

global.random = [
  {
    url: "/api/ceritahantu?",
    name: "Random Cerita hantu",
  },
  {
    url: "/api/china?",
    name: "Cecan China",
  },
  {
    url: "/api/hijab?",
    name: "Cecan Hijab",
  },
  {
    url: "/api/indon?",
    name: "Cecan Indo",
  },
  {
    url: "/api/japan?",
    name: "Cecan Jepang",
  },
  {
    url: "/api/korea?",
    name: "Cecan Korea",
  },
  {
    url: "/api/malay?",
    name: "Cecan  Malay",
  },
  {
    url: "/api/quotes?",
    name: "Random Quotes",
  },
  {
    url: "/api/bijak?",
    name: "Random Bijak",
  },
  {
    url: "/api/fakta?",
    name: "Random Fakta",
  },
  {
    url: "/api/asupan?",
    name: "Random Asupan",
  },
  {
    url: "/api/darkjokes?",
    name: "Random Darkjokes",
  },
  {
    url: "/api/cerpen?",
    name: "Random Cerpen",
  },
  {
    url: "/api/loli?",
    name: "Random Loli",
  },
  {
    url: "/api/ppcouple?",
    name: "Random PP Couple",
  },
  {
    url: "/api/asupanloli?",
    name: "Random Asupan Loli",
  },
  {
    url: "/api/husbu?",
    name: "Random Husbu",
  },
  {
    url: "/api/randomwalp?",
    name: "Random Walpapper",
  },
  {
    url: "/api/randomneko?",
    name: "Random Neko",
  },
  {
    url: "/api/randomhug?",
    name: "Random Hug",
  },
  {
    url: "/api/randomkiss?",
    name: "Random Kiss",
  },
  {
    url: "/api/waifu?",
    name: "Random Waifu?",
  },
  {
    url: "/api/randombaka?",
    name: "Random Baka",
  },
  {
    url: "/api/randomkanna?",
    name: "Random Kanna",
  },
  {
    url: "/api/randomshota?",
    name: "Random Shota",
  },
];

// Religion
const {
  alkitabsearch,
  salat,
  ssurah,
  lsurah,
  tsurah,
} = require("../controllers/religion");

router.get("/alkitabsearch", alkitabsearch);
router.get("/salat", salat);
router.get("/listsurah", lsurah);
router.get("/tafsirsurah", tsurah);
router.get("/surah", ssurah);

global.religion = [
  {
    url: "/api/alkitabsearch?q=matius 7:7",
    name: "Alkitab Search",
  },
  {
    url: "/api/salat?kota=jakarta barat",
    name: "Jadwal Salat",
  },
  {
    url: "/api/surah?q=An Nas",
    name: "Surah Search",
  },
  {
    url: "/api/tafsirsurah?q=Al Naba",
    name: "Tafsir Surah",
  },
  {
    url: "/api/listsurah?",
    name: "List Surah",
  },
];

// Search
const {
  carigrup,
  pinterestSearch,
  wikipedia,
  sswebs,
  sswebhp,
  google,
} = require("../controllers/search");

router.get("/carigrup", carigrup);
router.get("/pinterestSearch", pinterestSearch);
router.get("/wikipedia", wikipedia);
router.get("/ssweb", sswebs);
router.get("/sshp", sswebhp);
router.get("/google", google);

global.search = [
  {
    url: "/api/carigrup?q=anime",
    name: "Cari Grup WhatsApp",
  },
  {
    url: "/api/google?query=caliph api",
    name: "Google Search",
  },
  {
    url: "/api/ssweb?url=https://caliphapi.com",
    name: "Ssweb",
  },
  {
    url: "/api/ssweb?url=https%3A%2F%2Fgoogle.com%2Fsearch%3Fq%3Dcaliph%20api&full",
    name: "Ssweb Full",
  },
  {
    url: "/api/sshp?url=https://caliphapi.com",
    name: "Ssweb 2",
  },
  {
    url: "/api/sshp?url=https%3A%2F%2Fgoogle.com%2Fsearch%3Fq%3Dcaliph%20api&full",
    name: "Ssweb Full 2",
  },
  {
    url: "/api/pinterestSearch?q=elaina",
    name: "Pinterest Search",
  },
  {
    url: "/api/wikipedia?q=Javascript",
    name: "Wikipedia",
  },
];

// Stalk
const {
  igstalkk,
  rucoyStat,
  githubrepo,
  githubuser,
  igstalk,
} = require("../controllers/stalk");

router.get("/igstalkk", igstalkk);
router.get("/rucoy", rucoyStat);
router.get("/ghrepo", githubrepo);
router.get("/ghuser", githubuser);
router.get("/igstalk", igstalk);

global.stalk = [
  {
    url: "/api/rucoy?username=",
    name: "Rucoy Online",
  },
  {
    url: "/api/ghuser?username=caliphdev",
    name: "Github User",
  },
  {
    url: "/api/ghrepo?repo=caliph-api",
    name: "Github repo",
  },
  {
    url: "/api/igstalk?username=caliph.dev",
    name: "instagram Stalking",
  },
  {
    url: "/api/igstalk?username=caliph.dev",
    name: "instagram Stalking2",
  },
];

// Tools
const { php, countdown, captchaGen } = require("../controllers/tool");

router.get("/php", php);
router.get("/countdown", countdown);
router.get("/captchagen", captchaGen);

global.tools = [
  {
    url: '/api/php?q=<?php echo"hello world" ?>',
    name: "Run PHP",
  },
  {
    url: "/api/countdown?tanggal=1&bulan=1&tahun=2022",
    name: "Hitung Mundur",
  },
  {
    url: "/api/captchagen",
    name: "Captcha Generator",
  },
];

// NSFW
const {
  nhentai,
  xnxxsearch,
  xnxxdl,
  nera,
  nedo,
  randomhentaigif,
  nsfwpussy,
  nekogif,
  nsfwneko,
  nsfwlesbian,
  nsfwkuni,
  nsfwcumsluts,
  nsfwclassic,
  nsfwboobs,
  bj,
  nsfwanal,
  nsfwavatar,
  nsfwyuri,
  nsfwtrap,
  nsfwtits,
  girlsologif,
  girlsolo,
  pussywankgif,
  pussyart,
  nsfwkemonomimi,
  nsfwkitsune,
  nsfwketa,
  nsfwholo,
  holoero,
  nsfwhentai,
  nsfwfutanari,
  nsfwfemdom,
  feetgif,
  erofeet,
  nsfwfeet,
  nsfwero,
  erokitsune,
  erokemonomimi,
  eroneko,
  eroyuri,
  cumarts,
  blowjob,
  nsfwspank,
  nsfwgasm,
  ahegao,
  ass,
  bdsm,
  cuckold,
  cum,
  ero,
  foot,
  gangbang,
  glasses,
  hentai,
  hntgifs,
  jahy,
  manga,
  masturbation,
  orgy,
  panties,
  pussy,
  sfwneko,
  tentacles,
  thighs,
  yuri,
  zettairyouiki,
} = require("../controllers/nsfw");

router.get("/nhentai", nhentai);
// router.get('/randomnekopoi', nera)
// router.get('/nekopoidl', nedo)
router.get("/xnxxsearch", xnxxsearch);
router.get("/xnxxdl", xnxxdl);
router.get("/randomhentaigif", randomhentaigif);
router.get("/nsfwpussy", nsfwpussy);
router.get("/nekogif", nekogif);
router.get("/nsfwneko", nsfwneko);
router.get("/nsfwlesbian", nsfwlesbian);
router.get("/nsfwkuni", nsfwkuni);
router.get("/nsfwcumsluts", nsfwcumsluts);
router.get("/nsfwclassic", nsfwclassic);
router.get("/nsfwboobs", nsfwboobs);
router.get("/nsfwbj", bj);
router.get("/nsfwanal", nsfwanal);
router.get("/nsfwavatar", nsfwavatar);
router.get("/nsfwyuri", nsfwyuri);
router.get("/nsfwtrap", nsfwtrap);
router.get("/nsfwtits", nsfwtits);
router.get("/nsfwgirlsologif", girlsologif);
router.get("/nsfwgirlsolo", girlsolo);
router.get("/nsfwpussywankgif", pussywankgif);
router.get("/nsfwpussyart", pussyart);
router.get("/nsfwkemonomimi", nsfwkemonomimi);
router.get("/nsfwkitsune", nsfwkitsune);
router.get("/nsfwketa", nsfwketa);
router.get("/nsfwholo", nsfwholo);
router.get("/nsfwholoero", holoero);
router.get("/nsfwhentai", nsfwhentai);
router.get("/nsfwfutanari", nsfwfutanari);
router.get("/nsfwfemdom", nsfwfemdom);
router.get("/nsfwfeetgif", feetgif);
router.get("/nsfwerofeet", erofeet);
router.get("/nsfwfeet", nsfwfeet);
router.get("/nsfwero", nsfwero);
router.get("/nsfwerokitsune", erokitsune);
router.get("/erokemonomimi", erokemonomimi);
router.get("/eroneko", eroneko);
router.get("/nsfweroyuri", eroyuri);
router.get("/nsfwcumarts", cumarts);
router.get("/nsfwblowjob", blowjob);
router.get("/nsfwspank", nsfwspank);
router.get("/nsfwgasm", nsfwgasm);
router.get("/nsfwahegao", ahegao);
router.get("/nsfwass", ass);
router.get("/nsfwbdsm", bdsm);
router.get("/nsfwcuckold", cuckold);
router.get("/nsfwcum", cum);
router.get("/nsfwero", ero);
router.get("/nsfwfoot", foot);
router.get("/nsfwgangbang", gangbang);
router.get("/nsfwglasses", glasses);
router.get("/nsfwhentai", hentai);
router.get("/nsfwhntgifs", hntgifs);
router.get("/nsfwjahy", jahy);
router.get("/nsfwmanga", manga);
router.get("/nsfwmasturbation", masturbation);
router.get("/nsfwneko", nsfwneko);
router.get("/nsfworgy", orgy);
router.get("/nsfwpanties", panties);
router.get("/nsfwpussy", pussy);
router.get("/sfwneko", sfwneko);
router.get("/nsfwtentacles", tentacles);
router.get("/nsfwthighs", thighs);
router.get("/nsfwzettairyouiki", zettairyouiki);

global.nsfw = [
  {
    url: "/api/nhentai?id=250202",
    name: "Nhentai Downloader",
  },
  {
    url: "/api/xnxxsearch?query=jepang",
    name: "Xnxx Search",
  },
  {
    url: "/api/xnxxdl?url=https://www.xnxx.com/video-rfd3d59/sex_med_smukke_nabo_kone_med_store_r_v",
    name: "Xnxx Downloader",
  },
  {
    url: "/api/randomnekopoi?",
    name: "Random Nekopoi",
  },
  {
    url: "/api/nekopoidl?url=",
    name: "nekopoi Downloader",
  },
  {
    url: "/api/randomhentaigif?",
    name: "Random Hentai Gif",
  },
  {
    url: "/api/nsfwpussy?",
    name: "Pussy",
  },
  {
    url: "/api/nekogif?",
    name: "Neko Gif",
  },
  {
    url: "/api/nsfwneko?",
    name: "Neko",
  },
  {
    url: "/api/nsfwlesbian?",
    name: "Lesbian",
  },
  {
    url: "/api/nsfwkuni?",
    name: "Kuni",
  },
  {
    url: "/api/nsfwcumsluts?",
    name: "Cumsluts",
  },
  {
    url: "/api/nsfwclassic?",
    name: "Classic",
  },
  {
    url: "/api/nsfwboobs?",
    name: "Boobs",
  },
  {
    url: "/api/nsfwbj?",
    name: "Bj",
  },
  {
    url: "/api/nsfwanal?",
    name: "Anal",
  },
  {
    url: "/api/nsfwavatar?",
    name: "Avatar",
  },
  {
    url: "/api/nsfwyuri?",
    name: "Yuri",
  },
  {
    url: "/api/nsfwtrap?",
    name: "Trap",
  },
  {
    url: "/api/nsfwtits?",
    name: "Tits",
  },
  {
    url: "/api/nsfwgirlsologif?",
    name: "Girl Solo Gif",
  },
  {
    url: "/api/nsfwgirlsolo?",
    name: "Girl Solo",
  },
  {
    url: "/api/nsfwpussywankgif?",
    name: "Pussy Wank Gif",
  },
  {
    url: "/api/nsfwpussyart?",
    name: "Pussy Art",
  },
  {
    url: "/api/nsfwkemonomimi?",
    name: "Kemonomimi",
  },
  {
    url: "/api/nsfwkitsune?",
    name: "Kitsune",
  },
  {
    url: "/api/nsfwketa?",
    name: "Keta",
  },
  {
    url: "/api/nsfwholo?",
    name: "Holo",
  },
  {
    url: "/api/nsfwholoero?",
    name: "Holo Ero",
  },
  {
    url: "/api/nsfwhentai?",
    name: "Hentai",
  },
  {
    url: "/api/nsfwfutanari?",
    name: "Futanari",
  },
  {
    url: "/api/nsfwfemdom?",
    name: "Femdom",
  },
  {
    url: "/api/nsfwfeetgif?",
    name: "Feet Gif",
  },
  {
    url: "/api/nsfwerofeet?",
    name: "Ero Feet",
  },
  {
    url: "/api/nsfwfeet?",
    name: "Feet",
  },
  {
    url: "/api/nsfwero?",
    name: "Ero",
  },
  {
    url: "/api/nsfwerokitsune?",
    name: "Ero Kitsune",
  },
  {
    url: "/api/erokemonomimi?",
    name: "Ero Kemonomimi",
  },
  {
    url: "/api/nsfweroneko?",
    name: "Ero Neko",
  },
  {
    url: "/api/nsfweroyuri?",
    name: "Ero Yuri",
  },
  {
    url: "/api/nsfwcumarts?",
    name: "Cum Arts",
  },
  {
    url: "/api/nsfwblowjob?",
    name: "Blowjob",
  },
  {
    url: "/api/nsfwspank?",
    name: "Spank",
  },
  {
    url: "/api/nsfwgasm?",
    name: "Gasm",
  },
  {
    url: "/api/nsfwahegao?",
    name: "Ahegao",
  },
  {
    url: "/api/nsfwass?",
    name: "Ass",
  },
  {
    url: "/api/nsfwbdsm?",
    name: "BDSM",
  },
  {
    url: "/api/nsfwblowjob?",
    name: "Blowjob",
  },
  {
    url: "/api/nsfwcuckold?",
    name: "Cuckold",
  },
  {
    url: "/api/nsfwcum?",
    name: "Cum",
  },
  {
    url: "/api/nsfwero?",
    name: "Ero",
  },
  {
    url: "/api/nsfwfemdom?",
    name: "Femdom",
  },
  {
    url: "/api/nsfwfoot?",
    name: "Foot",
  },
  {
    url: "/api/nsfwgangbang?",
    name: "Gangbang",
  },
  {
    url: "/api/nsfwglasses?",
    name: "Glasses",
  },
  {
    url: "/api/nsfwhentai?",
    name: "Hentai",
  },
  {
    url: "/api/nsfwhntgifs?",
    name: "Hentai Gif",
  },
  {
    url: "/api/nsfwjahy?",
    name: "Jahy",
  },
  {
    url: "/api/nsfwmanga?",
    name: "Manga",
  },
  {
    url: "/api/nsfwmasturbation?",
    name: "Masturbation",
  },
  {
    url: "/api/nsfwneko?",
    name: "NSFW Neko",
  },
  {
    url: "/api/nsfworgy?",
    name: "Orgy",
  },
  {
    url: "/api/nsfwpanties?",
    name: "Panties",
  },
  {
    url: "/api/nsfwpussy?",
    name: "Pussy",
  },
  {
    url: "/api/sfwneko?",
    name: "SFW Neko",
  },
  {
    url: "/api/nsfwtentacles?",
    name: "Tentacles",
  },
  {
    url: "/api/nsfwthighs?",
    name: "Thighs",
  },
  {
    url: "/api/nsfwzettairyouiki?",
    name: "Zettai Ryouiki",
  },
];

// Tanpa Kategori

global.nocategory = [];

module.exports = router;
