const express = require("express");
const router = express.Router();
const {
  checkUsername,
  delUser,
  resetAllLimit,
  resetTodayReq,
} = require("../database/db");
const { User } = require("../database/model");
const { isAuthenticated } = require("../lib/auth");
const { own, tokens } = require("../lib/settings");

// view daftar user
router.get("/users-list", isAuthenticated, async (req, res) => {
  let { username, apikey } = req.user;
  let isOwner = own.includes(username);
  if (!isOwner) return res.redirect("/");
  let data = await User.find({});
  res.render("admin/users-list", {
    title: "Daftar Pengguna",
    active_index: false,
    active_price: false,
    active_contact: false,
    global,
    isOwner,
    apikey,
    data,
    layout: "layouts/main",
  });
});

// view daftar user premium
router.get("/premium-users-list", isAuthenticated, async (req, res) => {
  let { username, apikey } = req.user;
  let isOwner = own.includes(username);
  if (!isOwner) return res.redirect("/");
  let data = await (await User.find({})).filter((v) => v.premium != null);
  res.render("admin/premium-users-list", {
    title: "Daftar Pengguna",
    active_index: false,
    active_price: false,
    active_contact: false,
    global,
    isOwner,
    apikey,
    data,
    layout: "layouts/main",
  });
});

// view daftar user yang belum verifikasi
router.get("/unverif-users-list", isAuthenticated, async (req, res) => {
  let { username, apikey } = req.user;
  let isOwner = own.includes(username);
  if (!isOwner) return res.redirect("/");
  let data = await (await User.find({})).filter((v) => !v.isVerify);
  res.render("admin/unverif-users-list", {
    title: "Daftar Pengguna Unverified",
    active_index: false,
    active_price: false,
    active_contact: false,
    global,
    isOwner,
    apikey,
    data,
    layout: "layouts/main",
  });
});

// json hapus user
router.get("/delete-user", async (req, res) => {
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
  let checkU = await checkUsername(username);
  if (!checkU)
    return res.status(403).send({
      status: false,
      message: `Username '${username}' tidak terdaftar!`,
    });
  await delUser(username);
  res.status(200).send({
    status: true,
    message: `Berhasil menghapus akun dengan username '${username}'`,
  });
});

// view hapus user
router.post("/delete-user", async (req, res) => {
  let { username, redirect } = req.body;
  await delUser(username);
  req.flash("success_msg", `Berhasil menghapus akun '${username}'.`);
  return res.redirect(redirect ? redirect : "/admin/users-list");
});

// json reset akun
router.get("/reset-limit", async (req, res) => {
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
  let cP = await checkUsername(username);
  if (!cP) {
    resetOneLimit(username);
    return res.status(200).send({
      status: true,
      message: `Berhasil me-reset limit '${username}' menjadi ${limitCount}`,
    });
  }
  return res
    .status(200)
    .send({ status: false, message: `Pengguna premium tidak dapat direset!` });
});

// view reset akun
router.post("/reset-limit", isAuthenticated, async (req, res) => {
  let { username, token } = req.body;
  if (token != tokens) {
    req.flash("error_msg", "Invalid Token");
    return res.redirect("/premium/limit");
  }
  let reset = await checkPremium(username);
  if (!reset) {
    resetOneLimit(username);
    req.flash(
      "success_msg",
      `Succes Reset Limit Apikey User ${username} to ${limitCount}`
    );
    return res.redirect("/premium");
  } else {
    req.flash("error_msg", "Cannot Reset Premium Apikey");
    return res.redirect("/premium/limit");
  }
});

// json reset all
router.get("/resetall", async (req, res) => {
  const { token } = req.query;
  if (token != tokens)
    res.status(403).send({ status: false, message: `token tidak valid!` });
  resetAllLimit();
  resetTodayReq();
  return res
    .status(200)
    .send({ status: true, message: `Berhasil me-reset semua limit` });
});

// view reset all
// router.post('/resetall', (req, res) => {
//     const { username } = req.user
//     const isOwner = own.includes(username)
//     if (!isOwner) return res.redirect('/')
//     const { token } = req.body
//     if (token != tokens) {
//         req.flash('error_msg', 'Invalid Token.')
//         return res.redirect('/')
//     } else {
//         resetAllLimit()
//         resetTodayReq()
//         req.flash('success_msg', `Berhasil me-reset semua limit.`)
//         return res.redirect('/')
//     }
// })

global.admin = [
  {
    url: "/admin/users-list",
    name: "Daftar Pengguna",
  },
  {
    url: "/admin/premium-users-list",
    name: "Daftar Premium",
  },
  {
    url: "/admin/unverif-users-list",
    name: "Daftar Unverif",
  },
  {
    url: "/admin/delete-user",
    name: "Hapus Pengguna",
  },
  {
    url: "/admin/reset-limit?username=&token=",
    name: "Reset Limit",
  },
  {
    url: "/admin/resetall?token=meys",
    name: "Reset Semua Limit",
  },
];

module.exports = router;
