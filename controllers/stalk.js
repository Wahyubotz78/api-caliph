const { data: data } = require("cheerio"),
  { limitAdd: limitAdd, apikeyCheck: apikeyCheck } = require("../database/db"),
  {
    profileig: profileig,
    rucoy: rucoy,
    ghrepo: ghrepo,
    ghuser: ghuser,
    igs: igs,
    igs2: igs2,
  } = require("../lib/stalk");
async function igstalkk(e, s) {
  const { username: t, apikey: a } = e.query;
  if (!t)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'username'" });
  let r = await apikeyCheck(a, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  igs(t)
    .then((e) => {
      limitAdd(a),
        s.status(200).send({
          status: !0,
          username: e.username,
          fullName: e.fullName,
          profilePicHD: e.profilePicHD,
          bio: e.bio,
          followers: e.followers,
          followersM: e.followersM,
          following: e.following,
          followingM: e.followingM,
          postsCount: e.postsCount,
          postsCountM: e.postsCountM,
        });
    })
    .catch((e) => {
      console.log(e),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function rucoyStat(e, s) {
  const t = e.query.username;
  if (!t)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'username'" });
  const a = e.query.apikey;
  let r = await apikeyCheck(a, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  rucoy(t)
    .then((e) => {
      limitAdd(a),
        s.status(200).send({
          status: !0,
          name: e.name,
          level: e.level,
          lastOnline: e.lastOnline,
          born: e.born,
          kill: e.kill,
        });
    })
    .catch((e) => {
      console.log(e),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function githubuser(e, s) {
  const t = e.query.username;
  if (!t)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'username'" });
  const a = e.query.apikey;
  let r = await apikeyCheck(a, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  ghuser(t)
    .then((e) => {
      limitAdd(a);
      let t = e.user;
      s.status(200).send({
        status: !0,
        idUser: t.idUser,
        username: t.username,
        nodeId: t.node_id,
        avatarUrl: t.avatarUrl,
        gravatarId: "" == t.gravatar_id ? null : t.gravatar_id,
        githubUrl: t.githubUrl,
        type: t.type,
        isSiteAdmin: t.isSiteAdmin,
        name: t.name,
        company: t.company,
        blog: t.blog,
        email: t.email,
        hireable: t.hireable,
        bio: t.bio,
        publicRepos: t.public_repos,
        publicGists: t.public_gists,
        followers: t.followers,
        following: t.following,
        createdAt: t.created_at,
        updatedAt: t.updated_at,
      });
    })
    .catch((e) => {
      console.log(e),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function githubrepo(e, s) {
  const t = e.query.repo;
  if (!t)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'repo'" });
  const a = e.query.apikey;
  let r = await apikeyCheck(a, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  ghrepo(t)
    .then((e) => {
      limitAdd(a), s.status(e.code).send(e);
    })
    .catch((e) => {
      console.log(e),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
async function igstalk(e, s) {
  const { username: t, apikey: a } = e.query;
  if (!t)
    return s
      .status(200)
      .send({ status: !1, message: "masukan parameter 'username'" });
  let r = await apikeyCheck(a, s);
  if (r) return s.status(200).send({ status: !1, message: r });
  igs(t)
    .then((e) => {
      limitAdd(a), s.status(200).send({ status: !0, result: e });
    })
    .catch((e) => {
      console.log(e),
        s.status(200).send({ status: !1, message: "Internal Server Error" });
    });
}
module.exports = {
  igstalkk: igstalkk,
  rucoyStat: rucoyStat,
  githubuser: githubuser,
  githubrepo: githubrepo,
  igstalk: igstalk,
};
