const axios = require("axios"),
  cheerio = require("cheerio"),
  fetch = require("node-fetch");
async function groupSearch(t) {
  let { data: e } = await axios.get(
      `http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=${encodeURIComponent(
        t
      )}&searchby=name`
    ),
    a = cheerio.load(e),
    i = [];
  return (
    a("#content > div.entry.clearfix > div.wa-chat").each(function (t, e) {
      let c = a(this)
          .find("div > div.wa-chat-title-container > a > div > div")
          .text()
          .trim(),
        n = a(this).find("div > div.wa-chat-message > a").attr("href").trim();
      i.push({ subject: c, link: n });
    }),
    i
  );
}
async function pintSearch(t) {
  return new Promise(async (e, a) => {
    axios
      .get("https://id.pinterest.com/search/pins/?autologin=true&q=" + t, {
        headers: {
          cookie:
            '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
        },
      })
      .then(({ data: t }) => {
        const a = cheerio.load(t),
          i = [],
          c = [];
        a("div > a")
          .get()
          .map((t) => {
            const e = a(t).find("img").attr("src");
            i.push(e);
          }),
          i.forEach((t) => {
            null != t && c.push(t.replace(/236/g, "736"));
          }),
          c.shift(),
          e(c);
      });
  });
}
async function Wikipedia(t) {
  try {
    const e = await axios.get(`https://id.wikipedia.org/wiki/${t}`),
      a = cheerio.load(e.data);
    let i = a("#firstHeading").text().trim(),
      c =
        a("#mw-content-text")
          .find(
            "div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img"
          )
          .attr("src") || "//i.ibb.co/nzqPBpC/http-error-404-not-found.png",
      n = [];
    a("#mw-content-text > div.mw-parser-output").each(function (t, e) {
      let i = a(e).find("p").text().trim();
      n.push(i);
    });
    for (let t of n) {
      return { status: !0, result: { judul: i, thumb: "https:" + c, isi: t } };
    }
  } catch (t) {
    return { status: !1, Pesan: "ERROR" };
  }
}
module.exports = {
  groupSearch: groupSearch,
  pintSearch: pintSearch,
  Wikipedia: Wikipedia,
};
