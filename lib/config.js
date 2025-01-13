const LocalStrategy = require("passport-local").Strategy,
  { getHashedPassword: getHashedPassword } = require("./functions"),
  { User: User } = require("../database/model");
module.exports = function (e) {
  e.use(
    new LocalStrategy((e, a, s) => {
      let r = getHashedPassword(a);
      User.findOne({ username: e }).then((a) =>
        a
          ? e === a.username && r === a.password
            ? s(null, a)
            : s(null, !1, { message: "Username atau Kata Sandi tidak valid" })
          : s(null, !1, { message: "Username tidak terdaftar." })
      );
    })
  ),
    e.serializeUser(function (e, a) {
      a(null, e.id);
    }),
    e.deserializeUser(function (e, a) {
      User.findById(e, function (e, s) {
        a(e, s);
      });
    });
};
