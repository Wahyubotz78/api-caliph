const https = require("https");
const osut = require("node-os-utils");
const fs = require("fs");
const express = require("express"),
  app = express(),
  session = require("express-session"),
  chalk = require("chalk"),
  cookieParser = require("cookie-parser"),
  expressLayout = require("express-ejs-layouts"),
  passport = require("passport"),
  flash = require("connect-flash"),
  schedule = require("node-schedule"),
  MemoryStore = require("memorystore")(session),
  rateLimit = require("express-rate-limit"),
  morgan = require("morgan"),
  {
    SitemapStream: SitemapStream,
    streamToPromise: streamToPromise,
  } = require("sitemap"),
  { createGzip: createGzip } = require("zlib"),
  { Readable: Readable } = require("stream"),
  apiRouters = require("./routes/api"),
  userRouters = require("./routes/users"),
  adminRouters = require("./routes/admin"),
  premiumRouters = require("./routes/premium");
var path = require("path");
const { connectMongoDb: connectMongoDb } = require("./database/connect"),
  { own: own, port: port } = require("./lib/settings"),
  { ignoreFavicon: ignoreFavicon } = require("./lib/functions"),
  {
    ExpiredTime: ExpiredTime,
    getTotalReq: getTotalReq,
    getTodayReq: getTodayReq,
    getVisitor: getVisitor,
    getTotalUser: getTotalUser,
    addRequest: addRequest,
    addVisitor: addVisitor,
  } = require("./database/premium"),
  PORT = process.env.PORT || port;
app.set("trust proxy", 1);
const limiter = rateLimit({
  windowMs: 6e4,
  max: 5e3,
  message: "Oops too many requests",
});
let AntiSPAM = rateLimit({
  windowMs: 1500,
  max: 15,
  keyGenerator: function (e, r) {
    return e.ip;
  },
  message: "Too Many Requests!!!",
});
app.use(limiter),
  app.set("view engine", "ejs"),
  app.use(expressLayout),
  app.use(express.static("public")),
  app.use(
    morgan(function (e, r, s) {
      return [
        r.ip,
        e.method(r, s),
        e.url(r, s),
        200 == e.status(r, s)
          ? chalk.green(e.status(r, s))
          : chalk.cyan(e.status(r, s)),
        e["response-time"](r, s) + " ms",
        e.res(r, s, "content-length"),
      ].join(" | ");
    })
  ),
  app.use(ignoreFavicon),
  app.use(express.static(path.join(__dirname, "hasil"))),
  app.use(
    session({
      secret: "secret",
      resave: !1,
      saveUninitialized: !0,
      cookie: { maxAge: 864e5 },
      store: new MemoryStore({ checkPeriod: 864e5 }),
    })
  ),
  app.use(express.urlencoded({ extended: !0 })),
  app.use(express.json()),
  app.use(cookieParser()),
  app.use(function (e, r, s, a) {
    console.error(e.stack),
      s.status(500).sendFile(__dirname + "/public/500.html");
  }),
  app.use(passport.initialize()),
  app.use(passport.session()),
  require("./lib/config")(passport),
  app.use(flash()),
  app.use(AntiSPAM),
  app.use(function (e, r, s) {
    (r.locals.success_msg = e.flash("success_msg")),
      (r.locals.error_msg = e.flash("error_msg")),
      (r.locals.error = e.flash("error")),
      (r.locals.user = e.user || null),
      (r.locals.req = e),
      s();
  }),
  app.use(function (e, r, s) {
    getTotalUser(), addRequest(), s();
  }),
  app.all("/robots.txt", (e, r, s) => {
    r.type("text/plain"),
      r.send(
        `User-agent: *\nAllow: /\nDisallow: /api\n\nSitemap: ${e.protocol}://${e.hostname}/sitemap.xml`
      );
  }),
  app.all("/sitemap.xml", function (e, r) {
    r.header("Content-Type", "application/xml"),
      r.header("Content-Encoding", "gzip");
    try {
      const s = new SitemapStream({
          hostname: e.protocol + "://" + e.hostname,
        }),
        a = s.pipe(createGzip());
      s.write({ url: "/", changefreq: "daily", priority: 1 }),
        s.write({ url: "/price", changefreq: "daily", priority: 0.9 }),
        s.write({ url: "/contact", changefreq: "daily", priority: 0.9 }),
        s.write({ url: "/users/register", changefreq: "daily", priority: 0.9 }),
        s.write({ url: "/users/login", changefreq: "daily", priority: 0.9 }),
        s.write({
          url: "/users/lupapassword",
          changefreq: "daily",
          priority: 0.9,
        }),
        streamToPromise(a).then((e) => (sitemap = e)),
        s.end(),
        a.pipe(r).on("error", (e) => {
          throw e;
        });
    } catch (e) {
      console.error(e), r.status(500).end();
    }
  });

const ssl = {
  key: fs.readFileSync(__dirname + "/ssl/private.key", "utf8"),
  cert: fs.readFileSync(__dirname + "/ssl/public.cert", "utf8"),
};
app.get("/", async (e, r) => {
  let s = new Date();
  addVisitor();
  let a = await getTotalReq(),
    t = await getTodayReq(),
    i = await getVisitor(),
    o = await getTotalUser(),
    p = new Date() - s;
  r.render("index", {
    title: "Dashboard",
    ipadd: e.ip.replace("::ffff:", ""),
    total: a,
    today: t,
    visitor: i,
    rt: p,
    userTotal: o,
    limit: !!e.user && e.user.limit,
    username: !!e.user && e.user.username,
    apikey: e.user ? e.user.apikey : "APIKEY",
    premium: !!e.user && (null != e.user.premium ? "yes" : "free"),
    isOwner: !!e.user && own.includes(e.user.username),
    active_index: !0,
    active_price: !1,
    active_contact: !1,
    global: global,
    layout: "layouts/main",
  });
}),
  app.get("/contact", (e, r) => {
    r.render("contact", {
      title: "Kontak",
      apikey: e.user ? e.user.apikey : "APIKEY",
      isOwner: !!e.user && own.includes(e.user.username),
      active_index: !1,
      active_price: !1,
      active_contact: !0,
      global: global,
      layout: "layouts/main",
    });
  }),
  app.get("/price", (e, r) => {
    r.render("price", {
      title: "Harga",
      apikey: e.user ? e.user.apikey : "APIKEY",
      isOwner: !!e.user && own.includes(e.user.username),
      active_index: !1,
      active_price: !0,
      active_contact: !1,
      global: global,
      layout: "layouts/main",
    });
  }),
  app.use(["/api"], apiRouters),
  app.use("/users", userRouters),
  app.use("/admin", adminRouters),
  app.use("/premium", premiumRouters),
  app.set("json spaces", 2),
  app.use((e, r, s) => {
    r.status(404).sendFile(process.cwd() + "/public/404.html");
  }),
  connectMongoDb().then(() => {
   //https.createServer(ssl, app).listen(443);
    app.listen(PORT, () => {
      console.log(
        chalk.green(`example app listening at http://localhost:${PORT}`)
      ),
        schedule.scheduleJob("* * * * *", () => {
          ExpiredTime();
        });
    });
  });
