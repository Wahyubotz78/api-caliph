const yt = require("ytdl-core"),
  yts = require("yt-search");
async function yDonlod(e) {
  return new Promise((r, o) => {
    try {
      const o = yt.getVideoID(e);
      r(
        yt.getInfo(`https://www.youtube.com/watch?v=${o}`).then((e) => {
          let r = e.formats,
            o = [],
            t = [];
          for (let e = 0; e < r.length; e++) {
            if (
              "mp4" == r[e].container &&
              1 == r[e].hasVideo &&
              1 == r[e].hasAudio
            ) {
              let o = r[e];
              t.push({ quality: o.qualityLabel, url: o.url });
            }
            if ('audio/webm; codecs="opus"' == r[e].mimeType) {
              let t = r[e];
              o.push({ bitrate: t.audioBitrate, url: t.url });
            }
          }
          const a =
              e.player_response.microformat.playerMicroformatRenderer.title
                .simpleText,
            l =
              e.player_response.microformat.playerMicroformatRenderer.thumbnail
                .thumbnails[0].url,
            n =
              e.player_response.microformat.playerMicroformatRenderer
                .ownerChannelName,
            i =
              e.player_response.microformat.playerMicroformatRenderer.viewCount;
          return {
            title: a,
            thumb: l,
            channel: n,
            published:
              e.player_response.microformat.playerMicroformatRenderer
                .publishDate,
            views: i,
            video: t,
            audio: o,
          };
        })
      );
    } catch (e) {
      o(e);
    }
    console.log(error);
  });
}
async function yPlay(e) {
  return new Promise((r, o) => {
    try {
      r(
        yts(e).then((e) => {
          const r = [],
            o = e.all;
          for (let e = 0; e < o.length; e++)
            if ("video" == o[e].type) {
              let t = o[e];
              r.push(t.url);
            }
          const t = yt.getVideoID(r[0]),
            a = yt.getInfo(`https://www.youtube.com/watch?v=${t}`).then((e) => {
              let r = e.formats,
                o = [],
                t = [];
              for (let e = 0; e < r.length; e++) {
                if (
                  "mp4" == r[e].container &&
                  1 == r[e].hasVideo &&
                  1 == r[e].hasAudio
                ) {
                  let o = r[e];
                  t.push({ quality: o.qualityLabel, url: o.url });
                }
                if ('audio/webm; codecs="opus"' == r[e].mimeType) {
                  let t = r[e];
                  o.push({ bitrate: t.audioBitrate, url: t.url });
                }
              }
              const a =
                  e.player_response.microformat.playerMicroformatRenderer.title
                    .simpleText,
                l =
                  e.player_response.microformat.playerMicroformatRenderer
                    .thumbnail.thumbnails[0].url,
                n =
                  e.player_response.microformat.playerMicroformatRenderer
                    .ownerChannelName,
                i =
                  e.player_response.microformat.playerMicroformatRenderer
                    .viewCount;
              return {
                title: a,
                thumb: l,
                channel: n,
                published:
                  e.player_response.microformat.playerMicroformatRenderer
                    .publishDate,
                views: i,
                video: t,
                audio: o,
              };
            });
          return a;
        })
      );
    } catch (e) {
      o(e);
    }
    console.log(error);
  });
}
async function ySearch(e) {
  return new Promise((r, o) => {
    try {
      r(yts(e).then((e) => ({ result: e.all })));
    } catch (e) {
      o(e);
    }
    console.log(error);
  });
}
module.exports = { yDonlod: yDonlod, yPlay: yPlay, ySearch: ySearch };
