module.exports = {
  isAuthenticated: function (t, e, i) {
    if (t.isAuthenticated()) return i();
    t.flash("error_msg", "Silahkan login terlebih dahulu."),
      e.redirect("/users/login");
  },
  notAuthenticated: function (t, e, i) {
    if (!t.isAuthenticated()) return i();
    e.redirect("/");
  },
};
