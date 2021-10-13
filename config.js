module.exports = {
  app: {
    px: "_mame",
    token: "ODk3NjgzNTI3OTAxMDIwMTcx.YWZO7w.uMjkSnZ8JpbaqBGYMdAkPv3Necw",
    playing: "by Toxic Femininity ❤️",
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: "DJ",
      commands: [
        "back",
        "clear",
        "filter",
        "loop",
        "pause",
        "resume",
        "seek",
        "shuffle",
        "skip",
        "stop",
        "volume",
      ],
    },
    maxVol: 100,
    loopMessage: false,
    discordPlayer: {
      ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25,
      },
    },
  },
};
