const express = require("express");
const { checkUsername, resetAllLimit } = require("../database/db");
const {
  addPremium,
  deletePremium,
  checkPremium,
  resetOneLimit,
  resetTodayReq,
} = require("../database/premium");
const { isAuthenticated } = require("../lib/auth");
const { own, tokens, limitCount } = require("../lib/settings");
const router = express.Router();

router.get("/", isAuthenticated, async (req, res) => {
  let { username, apikey } = req.user;
  let isOwner = own.includes(username);
  if (!isOwner) return res.sendStatus(403);
  res.render("premium/index", {
    title: "Premium Manajemen",
    active_index: false,
    active_price: false,
    active_contact: false,
    global,
    isOwner,
    apikey,
    layout: "layouts/main",
  });
});

// json tambah premium
router.get("/add-premium", async (req, res) => {
  const { username, expired, customKey, token } = req.query;
  if (!username)
    return res
      .status(403)
      .send({ status: false, message: `masukan parameter 'username'` });
  if (!expired)
    return res
      .status(403)
      .send({ status: false, message: `masukan parameter 'expired'` });
  if (!customKey)
    return res
      .status(403)
      .send({ status: false, message: `masukan parameter 'customKey'` });
  if (!token)
    return res
      .status(403)
      .send({ status: false, message: `masukan parameter 'token'` });
  if (token != tokens)
    return res
      .status(403)
      .send({ status: false, message: `token tidak valid!` });
  let cU = await checkUsername(username);
  if (!cU)
    return res.status(403).send({
      status: false,
      message: `Username '${username}' tidak terdaftar!`,
    });
  let cP = await checkPremium(username);
  if (cP)
    return res.status(403).send({
      status: false,
      message: `Username '${username}' sudah premium!`,
    });
  addPremium(username, customKey, expired);
  res.status(200).send({
    status: true,
    message: `Berhasil menambah '${username}' sebagai pengguna Premium.`,
  });
});

// view tambah premium
router.post("/add-premium", isAuthenticated, async (req, res) => {
  let { username, expired, customKey, token } = req.body;
  if (token != tokens) {
    req.flash("error_msg", "Invalid Token.");
    res.redirect("/admin");
  }
  let checking = await checkUsername(username);
  if (!checking) {
    req.flash("error_msg", "Username tidak terdaftar!");
    res.redirect("/admin");
  } else {
    let checkPrem = await checkPremium(username);
    if (checkPrem) {
      req.flash("error_msg", `'${username}' sudah premium!`);
      res.redirect("/admin");
    } else {
      addPremium(username, customKey, expired);
      req.flash(
        "success_msg",
        `Berhasil menambah ${username} sebagai pengguna Premium.`
      );
      res.redirect("/admin");
    }
  }
});

// json hapus premium
router.get("/delete-premium", async (req, res) => {
  const { username, token } = req.query;
  if (!username)
    return res
      .status(403)
      .send({ status: false, message: `masukan parameter 'username'` });
  if (!token)
    return res
      .status(403)
      .send({ status: false, message: `masukan parameter 'token'` });
  if (token != tokens)
    return res
      .status(403)
      .send({ status: false, message: `token tidak valid!` });
  let cU = await checkUsername(username);
  if (!cU)
    return res.status(403).send({
      status: false,
      message: `Username '${username}' tidak terdaftar!`,
    });
  let cP = await checkPremium(username);
  if (!cP)
    return res.status(403).send({
      status: false,
      message: `Username '${username}' bukan premium!`,
    });
  deletePremium(username);
  res.status(200).send({
    status: true,
    message: `Berhasil menghapus '${username}' sebagai pengguna biasa.`,
  });
});

// view hapus premium
router.post("/delete-premium", isAuthenticated, async (req, res) => {
  let { username, token } = req.body;
  if (token != tokens) {
    req.flash("error_msg", "Invalid Token.");
    return res.redirect("/admin");
  }
  let checking = await checkUsername(username);
  if (!checking) {
    req.flash("error_msg", "Username tidak terdaftar!");
    res.redirect("/admin");
  } else {
    let checkPrem = await checkPremium(username);
    if (checkPrem) {
      deletePremium(username);
      req.flash(
        "success_msg",
        `Berhasil menghapus ${username} sebagai pengguna biasa.`
      );
      res.redirect("/admin");
    } else {
      req.flash("error_msg", `Username '${username}' belum premium!`);
      res.redirect("/admin");
    }
  }
});

global.prem = [
  {
    url: "/premium/add-premium?username=&expired=&customKey=&token=",
    name: "Tambah Premium",
  },
  {
    url: "/premium/delete-premium?username=&token=",
    name: "Hapus Premium",
  },
];

module.exports = router;
