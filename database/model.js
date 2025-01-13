const mongoose = require("mongoose"),
  Users = mongoose.Schema(
    {
      email: { type: String },
      username: { type: String },
      password: { type: String },
      apikey: { type: String },
      defaultKey: { type: String },
      premium: { type: String },
      limit: { type: Number },
      totalreq: { type: String },
      token: { type: String },
      isVerify: { type: Boolean },
    },
    { versionKey: !1 }
  );
module.exports.User = mongoose.model("api2", Users);
const Utils = mongoose.Schema(
  {
    total: { type: Number },
    today: { type: Number },
    visitor: { type: Number },
    util: { type: String },
  },
  { versionKey: !1 }
);
module.exports.Utils = mongoose.model("util", Utils);
