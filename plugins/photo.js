const {eypz , commands} = require('../command')

eypz({
    pattern: "photo",
    desc: "use for group link.",
    category: "converter",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!m.quoted.stickerMessage || m.quoted.stickerMessage.isAnimated === true) return await m.reply("_Reply to a sticker/non animated sticker!_");    await m.reply("Converting...");
const buff = await m.quoted.download();
await conn.sendMessage(m.chat, { image: buff }, { quoted : m });

}catch(e){
console.log(e)
reply(`${e}`)
}
});
