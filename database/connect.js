const mongoose = require("mongoose"),
  { dbURI: dbURI } = require("../lib/settings");
function connectMongoDb() {
  return new Promise((o) => {
    mongoose.connect(dbURI, { useNewUrlParser: !0, useUnifiedTopology: !0 });
    const e = mongoose.connection;
    e.on("error", console.error.bind(console, "connection error:")),
      e.once("open", () => {
        o(2), console.log(require("chalk").redBright("connected to database"));
      });
  });
}
module.exports.connectMongoDb = connectMongoDb;
