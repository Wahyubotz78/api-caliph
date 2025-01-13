const { User: User, Utils: Utils } = require("./model"),
  toMs = require("ms"),
  {
    limitCount: limitCount,
    limitPremium: limitPremium,
  } = require("../lib/settings");
async function addPremium(e, t, i) {
  User.updateOne(
    { username: e },
    { apikey: t, premium: Date.now() + toMs(i), limit: limitPremium },
    function (e, t) {
      if (e) throw e;
    }
  );
}
async function ExpiredTime() {
  (await User.find({})).forEach(async (e) => {
    let { premium: t, defaultKey: i, username: n } = e;
    t &&
      null !== t &&
      Date.now() >= t &&
      User.updateOne(
        { username: n },
        { apikey: i, premium: null, limit: limitCount },
        function (e, t) {
          if (e) throw e;
          console.log(`Masa Premium ${n} sudah habis`);
        }
      );
  });
}
async function deletePremium(e) {
  let t = (await User.findOne({ username: e })).defaultKey;
  User.updateOne(
    { username: e },
    { apikey: t, premium: null, limit: limitCount },
    function (e, t) {
      if (e) throw e;
    }
  );
}
async function checkPremium(e) {
  return null !== (await User.findOne({ username: e })).premium;
}
async function checkPremiumFromKey(e) {
  return null !== (await User.findOne({ apikey: e })).premium;
}
async function changeKey(e, t) {
  User.updateOne({ username: e }, { apikey: t }, function (e, t) {
    if (e) throw e;
  });
}
async function resetOneLimit(e) {
  null !== (await User.findOne({ username: e })) &&
    User.updateOne({ username: e }, { limit: limitCount }, function (e, t) {
      if (e) throw e;
    });
}
async function getTotalUser() {
  return (await User.find({})).length;
}
async function addUtil() {
  Utils.create({ total: 0, today: 1, visitor: 1, util: "util" });
}
async function getTotalReq() {
  let e = await Utils.find({});
  return 0 == e.length ? (await addUtil(), e[0].total) : e[0].total;
}
async function getTodayReq() {
  let e = await Utils.find({});
  return 0 == e.length ? (await addUtil(), e[0].today) : e[0].today;
}
async function getVisitor() {
  let e = await Utils.find({});
  return 0 == e.length ? (await addUtil(), e[0].visitor) : e[0].visitor;
}
async function addRequest() {
  let e = await Utils.find({});
  if (!e || !e[0]) return;
  let t = (e[0].today += 1),
    i = (e[0].total += 1);
  Utils.updateOne({ util: "util" }, { total: i, today: t }, (e, t) => {
    if (e) throw e;
  });
}
async function addVisitor() {
  let e = await Utils.find({});
  if (!e || !e[0]) return;
  let t = (e[0].visitor += 1);
  Utils.updateOne({ util: "util" }, { visitor: t }, (e, t) => {
    if (e) throw e;
  });
}
async function resetTodayReq() {
  Utils.updateOne({ util: "util" }, { today: 0 }, (e, t) => {
    if (e) throw e;
  });
}
(module.exports.addPremium = addPremium),
  (module.exports.ExpiredTime = ExpiredTime),
  (module.exports.deletePremium = deletePremium),
  (module.exports.checkPremium = checkPremium),
  (module.exports.checkPremiumFromKey = checkPremiumFromKey),
  (module.exports.changeKey = changeKey),
  (module.exports.resetOneLimit = resetOneLimit),
  (module.exports.getTotalUser = getTotalUser),
  (module.exports.getTotalReq = getTotalReq),
  (module.exports.getTodayReq = getTodayReq),
  (module.exports.getVisitor = getVisitor),
  (module.exports.addRequest = addRequest),
  (module.exports.addVisitor = addVisitor),
  (module.exports.resetTodayReq = resetTodayReq);
