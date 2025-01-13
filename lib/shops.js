const fetch = require("node-fetch"),
  { default: axios } = require("axios");
async function nickNameFreefire(e) {
  return new Promise(async (a, t) => {
    axios
      .post(
        "https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store",
        new URLSearchParams(
          Object.entries({
            productId: "3",
            itemId: "353",
            catalogId: "376",
            paymentId: "2037",
            gameId: e,
            product_ref: "REG",
            product_ref_denom: "AE",
          })
        ),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Referer: "https://www.duniagames.co.id/",
            Accept: "application/json",
          },
        }
      )
      .then((e) => {
        a(e.data.data.gameDetail);
      })
      .catch((e) => {
        t(e);
      });
  });
}
async function topupFreeFire(e, a) {
  return new Promise(async (t, n) => {
    const i = require("./freefire.json"),
      o = a in i ? i[a] : null;
    o || n("nominal tidak tersedia"),
      (o.gameId = e),
      axios
        .post(
          "https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store",
          new URLSearchParams(Object.entries(o)),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Referer: "https://www.duniagames.co.id/",
              Accept: "application/json",
            },
          }
        )
        .then((e) => {
          t(e.data);
        })
        .catch((e) => {
          n(e);
        });
  });
}
async function payDiamond(e, a, t) {
  return new Promise(async (n, i) => {
    axios
      .post(
        "https://api.duniagames.co.id/api/transaction/v1/top-up/transaction/store",
        new URLSearchParams(
          Object.entries({ inquiryId: e, phoneNumber: a, transactionId: t })
        ),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Referer: "https://www.duniagames.co.id/",
            Accept: "application/json",
          },
        }
      )
      .then((e) => {
        n(e.data.data.elisaConfig);
      })
      .catch((e) => {
        i(e);
      });
  });
}
async function nickNameMobileLegends(e, a) {
  return new Promise(async (t, n) => {
    axios
      .post(
        "https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store",
        new URLSearchParams(
          Object.entries({
            productId: "1",
            itemId: "2",
            catalogId: "57",
            paymentId: "352",
            gameId: e,
            zoneId: a,
            product_ref: "REG",
            product_ref_denom: "AE",
          })
        ),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Referer: "https://www.duniagames.co.id/",
            Accept: "application/json",
          },
        }
      )
      .then((e) => {
        t(e.data.data.gameDetail);
      })
      .catch((e) => {
        n(e);
      });
  });
}
module.exports = {
  nickNameFreefire: nickNameFreefire,
  topupFreeFire: topupFreeFire,
  payDiamond: payDiamond,
  nickNameMobileLegends: nickNameMobileLegends,
};
