const { getHashedPassword, randomText, waktu } = require("../lib/functions");
const {
  checkEmail,
  checkUsername,
  addUser,
  changePassword,
  changePasswordbyEmail,
  changeKey,
  getApikey,
  setVerify,
  isVerify,
  checkToken,
} = require("../database/db");
const { transporter } = require("../database/mail");
const { notAuthenticated } = require("../lib/auth");
const { own } = require("../lib/settings");

const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(["/", "/login"], notAuthenticated, (req, res) => {
  res.render("user/login", {
    title: "Masuk",
    layout: "user/login",
  });
});

router.post("/login", async (req, res, next) => {
  let { username } = req.body;
  let checkU = await checkUsername(username);
  if (!checkU) {
    req.flash("error_msg", "Username tidak terdaftar!");
    return res.redirect("/users/login");
  }
  let isV = await isVerify(username);
  const isOwner = own.includes(username);
  if (!isOwner) {
    if (!isV) {
      req.flash("error_msg", "Akun kamu belum terverifikasi!");
      return res.redirect("/users/login");
    }
  }
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
    failureFlash: true,
  })(req, res, next);
});

router.get("/register", notAuthenticated, (req, res) => {
  res.render("user/register", {
    title: "Daftar",
    layout: "user/register",
  });
});

router.post("/register", async (req, res) => {
  try {
    let { email, username, password, confirmPassword } = req.body;
    if (password.length < 6 || confirmPassword < 6) {
      req.flash("error_msg", "Password minimal 6 karakter!");
      return res.redirect("/users/register");
    }
    if (!/^\S{3,}$/.test(username)) {
      req.flash("error_msg", "Username tidak boleh mengandung spasi!");
      return res.redirect("/users/register");
    }
    if (password === confirmPassword) {
      let checkE = await checkEmail(email);
      let checkU = await checkUsername(username);
      if (checkE) {
        req.flash("error_msg", "Email sudah digunakan!");
        return res.redirect("/users/register");
      } else if (checkU) {
        req.flash("error_msg", "Username sudah digunakan!");
        return res.redirect("/users/register");
      } else {
        let hashedPassword = getHashedPassword(password);
        let apikey = randomText(8);
        let token = randomText(6);
        addUser(email, username, hashedPassword, apikey, token);
        mailOptions = {
          from: "rizzowohq@gmail.com",
          to: `${email}`,
          subject: "Verifikasi Untuk Menggunakan KuttoBot Rest API",
          html: `Token: ${token}<br><br>Klik untuk verifikasi : <a href="//${req.hostname}/users/verify?email=${email}&token=${token}">verifikasi</a>`,
        };
        await transporter.sendMail(mailOptions, (e, i) => {
          if (e) return console.log(e);
          console.log("Message sent: %s", i.messageId);
          console.log("Message sent: %s", i.response);
        });
        req.flash(
          "success_msg",
          "Daftar berhasil, periksa email untuk verifikasi."
        );
        return res.redirect("/users/login");
      }
    } else {
      req.flash("error_msg", "Password tidak sama!");
      return res.redirect("/users/register");
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/verify", async (req, res) => {
  let { email, token } = req.query;
  if (!email)
    return res.status(403).send({
      status: false,
      message: `masukan parameter 'email'`,
    });
  if (!token)
    return res.status(403).send({
      status: false,
      message: `masukan parameter 'token'`,
    });
  let checkE = await checkEmail(email);
  if (!checkE)
    return res.status(403).send({
      status: false,
      message: `email tidak terdaftar!`,
    });
  let checkT = await checkToken(email);
  if (token != checkT)
    return res.status(403).send({
      status: false,
      message: `token tidak valid!`,
    });
  await setVerify(email);
  req.flash("success_msg", "Verifikasi berhasil, silahkan login.");
  res.redirect("/users/login");
});

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "Logout berhasil.");
  res.redirect("/users/login");
});

router.get("/profile", (req, res) => {
  if (!req.user) {
    req.flash("error_msg", "Silahkan login terlebih dahulu.");
    res.redirect("/users/login");
  } else {
    let { email, apikey, username, limit, premium } = req.user;
    let isOwner = own.includes(username);
    res.render("user/profile", {
      title: "Profil",
      email,
      apikey,
      username,
      limit,
      premium,
      isPrem: premium != null ? "✔️" : "❌",
      expired: waktu(premium - Date.now()),
      active_index: false,
      active_price: false,
      active_contact: false,
      isOwner,
      global,
      layout: "layouts/main",
    });
  }
});

router.post("/gantipassword", async (req, res) => {
  try {
    let { username, password } = req.user;
    let { oldPass, newPass, newPass2 } = req.body;
    if (password != getHashedPassword(oldPass)) {
      req.flash("error_msg", "Password salah!");
      return res.redirect("/users/profile");
    } else if (password == newPass) {
      req.flash(
        "error_msg",
        "Password baru tidak boleh sama dengan password lama!"
      );
      return res.redirect("/users/profile");
    } else if (newPass.length < 6 || newPass2 < 6) {
      req.flash("error_msg", "Password minimal 6 karakter!");
      return res.redirect("/users/profile");
    } else if (newPass != newPass2) {
      req.flash("error_msg", "Password baru tidak sama!");
      return res.redirect("/users/profile");
    } else {
      let hashedPassword = getHashedPassword(newPass);
      changePassword(username, hashedPassword);
      req.flash("success_msg", "Berhasil mengganti password.");
      return res.redirect("/users/profile");
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/gantiapikey", async (req, res) => {
  let { username, premium } = req.user;
  let { apikey } = req.body;
  if (!premium) {
    req.flash(
      "error_msg",
      'Khusus premium! Tertarik? <a href="/contact">Kontak Kami</a>'
    );
    return res.redirect("/users/profile");
  } else {
    changeKey(username, apikey);
    req.flash("success_msg", "Berhasil mengganti apikey.");
    return res.redirect("/users/profile");
  }
});

router.get("/lupapassword", async (req, res) => {
  res.render("user/forgotpassword", {
    title: "Lupa Kata Sandi",
    layout: "user/forgotpassword",
  });
});

router.post("/lupapassword", async (req, res) => {
  let { email } = req.body;
  let checkE = await checkEmail(email);
  if (!checkE) {
    req.flash("error_msg", "Email tidak terdaftar!");
    return res.redirect("/users/lupapassword");
  }
  let newPass = randomText(6);
  let hashedPassword = getHashedPassword(newPass);
  changePasswordbyEmail(email, hashedPassword);
  mailOptions = {
    from: "ameysschan@gmail.com",
    to: `${email}`,
    subject: "Lupa Password | Caliph Rest API",
    html: `Password: ${newPass}<br><br>Klik untuk login : <a href="${req.headers.host}/users/login">Login</a>`,
  };
  await transporter.sendMail(mailOptions, (e, i) => {
    if (e) return console.log(e);
    console.log("Message sent: %s", i.messageId);
    console.log("Message sent: %s", i.response);
  });
  req.flash("success_msg", "Periksa email kamu untuk melihat password baru.");
  return res.redirect("/users/login");
});

router.get("/cek", async (req, res) => {
  const { apikey } = req.query;
  if (!apikey)
    return res.status(403).send({
      status: false,
      message: `masukan parameter 'apikey'`,
    });
  let gA = await getApikey(apikey);
  if (!gA)
    return res.status(403).send({
      status: false,
      message: `apikey '${apikey}' tidak terdaftar!`,
    });
  res.status(200).send({
    status: true,
    username: gA.username,
    limit: gA.limit,
    premium: gA.premium,
    expired: gA.expired,
  });
});

module.exports = router;
