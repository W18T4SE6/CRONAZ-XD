cmdname: "setname",
    alias: ["setgname", "gname"],
    info: "Set Description of Group",
    type: "group",
    filename: __filename,
    use: "<enter Description Text>",
  },
  async (_0x25d56b, _0x332d77) => {
    try {
      if (!_0x25d56b.isGroup) {
        return _0x25d56b.reply(tlang().group);
      }
      if (!_0x332d77) {
        return await _0x25d56b.reply(
          "*Uhh Dear, Give text to Update This Group Name*"
        );
      }
      if (!_0x25d56b.isBotAdmin || !_0x25d56b.isAdmin) {
        return await _0x25d56b.reply(
          !_0x25d56b.isBotAdmin
            ? "*_I'm Not Admin In This Group" +
                (!_0x25d56b.isCreator ? ", Idiot" : "") +
                "_*"
            : tlang().admin
        );
      }
      try {
        await _0x25d56b.bot.groupUpdateSubject(_0x25d56b.chat, _0x332d77);
        _0x25d56b.reply("*_✅Group Name Updated Successfuly.!_*");
      } catch (_0x379b84) {
        await _0x25d56b.reply("*_Can't update name, Group Id not found!!_*");
      }
    } catch (_0x1eee32) {
      await _0x25d56b.error(_0x1eee32 + "\n\ncommand: setdesc", _0x1eee32);
    }
  }
);
smd(
  
