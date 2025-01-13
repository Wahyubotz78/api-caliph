const axios = require("axios"),
  cheerio = require("cheerio"),
  fetch = require("node-fetch");
function profileig(e) {
  return new Promise(async (t, a) => {
    try {
      let a = await (
        await fetch("https://instasupersave.com/api/ig/profile/" + e)
      ).json();
      t({ status: !0, data: Object.values(a)[0] });
    } catch {
      t({ status: !1 });
    }
  });
}
async function igs2(e) {
  try {
    const { data: t } = await axios.get(`https://dumpor.com/v/${e}`, {
        headers: {
          "user-agent":
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          cookie:
            '_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYT3dzSXI2YWR6SG1fNFdmTllfZnFIZ1Ra.5Og9VRy7gUy9IsCwUeYW8O8qvHbndaus-cqBRaZ7jcg; __gads=ID=f8ead4404e6a0e16-2206b4189ace0028:T=1636352226:RT=1636352226:S=ALNI_MbsEYYwp3U-9PJHoUHPA0mj4zn3uQ; _ym_uid=1636352226596108095; _ym_d=1636352226; _ym_isad=2; __atssc=google%3B1; FCNEC=[["AKsRol8BmQbGXTRP_1wzoi3Qg8PSMr7FFU0k- LGYROfG4nmvg - yFq6fARCalcofDHQIoyhwlo75582yk2a5WLTZakmPZu - SIkkXQNAePmtpVXwaPISfK8HC1pJ8tUjrRWRiFfjPaZh3rC - _6nkHQN25c - 1YR- NJtDQ == "],null,[]]; FCCDCF=[null,null,["[[], [], [], [], null, null, true]",1636352300969],null,null,null,[]]; __atuvc=3%7C45; __atuvs=6188c0df986e798b002',
        },
      }),
      a = cheerio.load(t);
    return {
      username: (
        a(
          "#user-page > div.user > div.row > div > div.user__title > h4"
        ).text() || ""
      )
        .replace(/@/gi, "")
        .trim(),
      fullName: a(
        "#user-page > div.user > div.row > div > div.user__title > a > h1"
      ).text(),
      profilePicHD: (
        a("#user-page > div.user > div.row > div > div.user__img").attr(
          "style"
        ) || ""
      )
        .replace(/(background-image: url\(\'|\'\);)/gi, "")
        .trim(),
      bio: a(
        "#user-page > div.user > div.row > div > div.user__info-desc"
      ).text(),
      followers: (
        a("#user-page > div.user > div.row > div > ul > li").eq(1).text() || ""
      )
        .replace(/Followers/gi, "")
        .trim(),
      followersM: (
        a("#user-page > div.container > div > div > div:nth-child(1) > div > a")
          .eq(2)
          .text() || ""
      )
        .replace(/Followers/gi, "")
        .trim(),
      following: (
        a("#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li")
          .eq(2)
          .text() || ""
      )
        .replace(/Following/gi, "")
        .trim(),
      followingM: (
        a("#user-page > div.container > div > div > div:nth-child(1) > div > a")
          .eq(3)
          .text() || ""
      )
        .replace(/Following/gi, "")
        .trim(),
      postsCount: (
        a("#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li")
          .eq(0)
          .text() || ""
      )
        .replace(/Posts/gi, "")
        .trim(),
      postsCountM: (
        a("#user-page > div.container > div > div > div:nth-child(1) > div > a")
          .eq(0)
          .text() || ""
      )
        .replace(/Posts/gi, "")
        .trim(),
    };
  } catch (e) {
    throw (console.error(e), "Not found ;-;");
  }
}
function rucoy(e) {
  return new Promise(async (t, a) => {
    let i = await (
      await axios.get(
        "https://www.rucoyonline.com/characters/" + encodeURIComponent(e)
      )
    ).data;
    $ = cheerio.load(i);
    let r = [];
    $("table > tbody > tr").each(function (e, t) {
      let a = {
        username: $($(t).find("td > a")).text(),
        url:
          "https://www.rucoyonline.com" + $($(t).find("td > a")).attr("href"),
      };
      r.push(a);
    }),
      t({
        name: $(
          $("table.character-table > tbody > tr:nth-child(1)").find("td")[1]
        ).text(),
        level: $(
          $("table.character-table > tbody > tr:nth-child(2)").find("td")[1]
        ).text(),
        lastOnline: $(
          $("table.character-table > tbody > tr:nth-child(3)").find("td")[1]
        )
          .text()
          .replace("\n", "")
          .trim(),
        born: $(
          $("table.character-table > tbody > tr:nth-child(4)").find("td")[1]
        ).text(),
        kill: r.filter((e) => e.username),
      });
  });
}
function ghrepo(e) {
  return new Promise(async (t, a) => {
    await axios
      .get(`https://api.github.com/search/repositories?q=${e}`, {
        headers: { Authorization: "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" },
      })
      .then((e) => {
        if (200 == e.status) {
          const a = e.data.items;
          (data = {}),
            (data.code = 0 == e.data.total_count ? 404 : 200),
            (data.message = 0 == e.data.total_count ? " Not found" : "OK"),
            (data.creator = "caliphdev"),
            (data.totalCount = e.data.total_count),
            (data.items = []),
            0 != data.totalCount
              ? a.forEach((e) => {
                  data.items.push({
                    id: e.id,
                    nodeId: e.node_id,
                    nameRepo: e.name,
                    fullNameRepo: e.full_name,
                    url_repo: e.html_url,
                    description: e.description,
                    git_url: e.git_url,
                    ssh_url: e.ssh_url,
                    clone_url: e.clone_url,
                    svn_url: e.svn_url,
                    homepage: e.homepage,
                    stargazers: e.stargazers_count,
                    watchers: e.watchers,
                    forks: e.forks,
                    defaultBranch: e.default_branch,
                    language: e.language,
                    isPrivate: e.private,
                    isFork: e.fork,
                    createdAt: e.created_at,
                    updatedAt: e.updated_at,
                    pushedAt: e.pushed_at,
                    author: {
                      username: e.owner.login,
                      id_user: e.owner.id,
                      avatar_url: e.owner.avatar_url,
                      user_github_url: e.owner.html_url,
                      type: e.owner.type,
                      isSiteAdmin: e.owner.site_admin,
                    },
                  });
                })
              : (data.items = []),
            t(data);
        } else a({ code: 500, status: !1, message: "Server Bermasalah" });
      })
      .catch((e) => {
        a(e);
      });
  });
}
function ghuser(e) {
  return new Promise(async (t, a) => {
    await axios
      .get(`https://api.github.com/users/${e}`)
      .then((e) => {
        if (200 == e.status) {
          const a = e.data;
          (data = {}),
            (data.code = e.status),
            (data.message = "ok"),
            (data.user = {
              idUser: a.id,
              username: a.login,
              nodeId: a.node_id,
              avatarUrl: a.avatar_url,
              gravatarId: "" == a.gravatar_id ? null : a.gravatar_id,
              githubUrl: a.html_url,
              type: a.type,
              isSiteAdmin: a.site_admin,
              name: a.name,
              company: a.company,
              blog: a.blog,
              email: a.email,
              hireable: a.hireable,
              bio: a.bio,
              publicRepos: a.public_repos,
              publicGists: a.public_gists,
              followers: a.followers,
              following: a.following,
              createdAt: a.created_at,
              updatedAt: a.updated_at,
            }),
            (data.creator = "caliphdev"),
            console.log(a),
            t(data);
        } else a({ code: 500, status: !1, message: "Server Bermasalah" });
      })
      .catch((e) => {
        a(e);
      });
  });
}
async function igs(e) {
  return new Promise(async (t, a) => {
    try {
      let { data: a } = await axios(
          "https://www.instagram.com/" + e + "/?__a=1",
          {
            method: "GET",
            headers: {
              "user-agent":
                "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
              cookie: igcookie,
            },
          }
        ),
        i = a.graphql;
      if (null == i) return t({ status: !1, message: "user not found" });
      const r = i.user;
      t({
        status: !0,
        code: 200,
        username: r.username,
        fullname: r.full_name,
        verified: r.is_verified,
        video_count_reel: r.highlight_reel_count,
        followers: r.edge_followed_by.count,
        follow: r.edge_follow.count,
        is_bussines: r.is_business_account,
        is_professional: r.is_professional_account,
        category: r.category_name,
        thumbnail: r.profile_pic_url_hd,
        bio: r.biography,
        info_account: a.seo_category_infos,
      });
    } catch {
      return t({ status: !1, message: "user not found" });
    }
  });
}
module.exports = {
  profileig: profileig,
  rucoy: rucoy,
  ghrepo: ghrepo,
  ghuser: ghuser,
  igs: igs,
  igs2: igs2,
};
