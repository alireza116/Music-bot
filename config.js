module.exports = {
  app: {
    px: "_mame",
    token:
      process.env.discordtoken ||
      "ODk3NjgzNTI3OTAxMDIwMTcx.YWZO7w.D9U9DtPKepBOq80Ub8NRYc3fXaA",
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
