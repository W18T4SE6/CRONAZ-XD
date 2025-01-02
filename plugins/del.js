const config = require('../config')
const { eypz, commands } = require('../command')
eypz({
  pattern: "del",
  react: '⛔',
  alias: [','],
  desc: "delete message",
  category: "main",
  use: ".del",
  filename: __filename
}, async (client, chat, message, {
  from,
  l,
  quoted,
  body,
  isCmd,
  isDev,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isSachintha,
  isSavi,
  isSadas,
  isMani,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const deleteMessage = {
      remoteJid: message.chat,
      fromMe: false,
      id: message.quoted.id,
      participant: message.quoted.sender
    };
    await client.sendMessage(message.chat, {
      delete: deleteMessage
    });
  } catch (error) {
    reply("*Error !!*");
    l(error);
  }
});
