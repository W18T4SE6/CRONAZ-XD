pattern: "tagall",
    desc: "Tags every person of group.",
    category: "group",
    filename: __filename,
  },
  async (_0x1ed055, _0x929954) => {
    try {
      if (!_0x1ed055.isGroup) {
        return _0x1ed055.reply(tlang().group);
      }
      const _0x5d614a = _0x1ed055.metadata.participants || {};
      if (!_0x1ed055.isAdmin && !_0x1ed055.isCreator) {
        return _0x1ed055.reply(tlang().admin);
      }
      let _0x392a2d =
        "\n══✪〘   *Tag All*   〙✪══\n\n➲ *Message :* " +
        (_0x929954 ? _0x929954 : "blank Message") +
        " \n " +
        Config.caption +
        " \n\n\n➲ *Author:* " +
        _0x1ed055.pushName +
        " 🔖\n";
      for (let _0x502431 of _0x5d614a) {
        if (!_0x502431.id.startsWith("918078438059")) {
          _0x392a2d += " 📍 @" + _0x502431.id.split("@")[0] + "\n";
        }
      }
      await _0x1ed055.bot.sendMessage(
        _0x1ed055.chat,
        {
          text: _0x392a2d,
          mentions: _0x5d614a.map((_0x3696c5) => _0x3696c5.id),
        },
        {
          quoted: _0x1ed055,
        }
      );
    } catch (_0x4450f8) {
      await _0x1ed055.error(
        _0x4450f8 + "\n\ncommand: tagall",
        _0x4450f8,
        false
      );
    }
  }
);
cmd(
          {
