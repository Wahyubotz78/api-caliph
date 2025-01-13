const {
    limitCount: limitCount,
    limitPremium: limitPremium,
    TotalReq: TotalReq,
  } = require("../lib/settings"),
  { waktu: waktu } = require("../lib/functions"),
  { User: User, Utils: Utils } = require("./model");
async function addUser(e, i, t, n, a) {
  let r = {
    email: e,
    username: i,
    password: t,
    apikey: n,
    defaultKey: n,
    premium: null,
    limit: limitCount,
    totalreq: TotalReq,
    token: a,
  };
  User.create(r);
}
async function checkEmail(e) {
  let i = await User.findOne({ email: e });
  return null !== i && i.email;
}
async function checkUsername(e) {
  let i = await User.findOne({ username: e });
  return null !== i && i.username;
}
async function checkToken(e) {
  let i = await User.findOne({ email: e });
  return null !== i && i.token;
}
async function changePassword(e, i) {
  User.updateOne({ username: e }, { password: i }, function (e, i) {
    if (e) throw e;
  });
}
async function changePasswordbyEmail(e, i) {
  User.updateOne({ email: e }, { password: i }, function (e, i) {
    if (e) throw e;
  });
}
async function changeKey(e, i) {
  User.updateOne({ username: e }, { apikey: i }, function (e, i) {
    if (e) throw e;
  });
}
async function setVerify(e) {
  User.updateOne({ email: e }, { isVerify: !0 }, function (e, i) {
    if (e) throw e;
  });
}
async function isVerify(e) {
  let i = await User.findOne({ username: e });
  return null !== i && i.isVerify;
}
async function getApikey(e) {
  let i = await User.findOne({ apikey: e });
  return (
    !!i &&
    ((premium = null != i.premium),
    {
      apikey: i.apikey,
      username: i.username,
      limit: i.limit,
      premium: premium,
      expired: waktu(i.premium - Date.now()),
    })
  );
}
async function cekKey(e) {
  let i = await User.findOne({ apikey: e });
  return null !== i && i.apikey;
}
async function limitAdd(e) {
  let i = await User.findOne({ apikey: e });
  null === i && console.log(i);
  let t = i.limit - 1;
  User.updateOne({ apikey: e }, { limit: t }, function (e, i) {
    if (e) throw e;
  });
}
async function checkLimit(e) {
  return (await User.findOne({ apikey: e })).limit;
}
async function isLimit(e) {
  return (await User.findOne({ apikey: e })).limit <= 0;
}
async function resetAllLimit() {
  (await User.find({})).forEach(async (e) => {
    let { premium: i, username: t } = e;
    return null !== i
      ? User.updateOne(
          { username: t },
          { limit: limitPremium },
          function (e, i) {
            if (e) throw e;
          }
        ).clone()
      : User.updateOne({ username: t }, { limit: limitCount }, function (e, i) {
          if (e) throw e;
        }).clone();
  });
}
async function apikeyCheck(e) {
  if (!e) return "masukan parameter 'apikey'";
  if (!(await cekKey(e)))
    return `apikey '${e}' tidak valid, silahkan daftar https://caliphapi.com/users/register`;
  return (await isLimit(e))
    ? "limit kamu habis, chat wa owner wa.me/6287755080455 untuk mereset limit kamu atau upgrade menjadi premium https://caliphapi.com/price"
    : void 0;
}
async function delUser(e) {
  await User.findOneAndDelete({ username: e });
}
async function resetTodayReq() {
  Utils.updateOne({ util: "util" }, { today: 0 }, (e, i) => {
    if (e) throw e;
  });
}
(module.exports.addUser = addUser),
  (module.exports.checkEmail = checkEmail),
  (module.exports.checkUsername = checkUsername),
  (module.exports.checkToken = checkToken),
  (module.exports.changePassword = changePassword),
  (module.exports.changePasswordbyEmail = changePasswordbyEmail),
  (module.exports.changeKey = changeKey),
  (module.exports.setVerify = setVerify),
  (module.exports.isVerify = isVerify),
  (module.exports.getApikey = getApikey),
  (module.exports.cekKey = cekKey),
  (module.exports.limitAdd = limitAdd),
  (module.exports.checkLimit = checkLimit),
  (module.exports.isLimit = isLimit),
  (module.exports.resetAllLimit = resetAllLimit),
  (module.exports.apikeyCheck = apikeyCheck),
  (module.exports.delUser = delUser),
  (module.exports.resetTodayReq = resetTodayReq);
