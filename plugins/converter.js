const {eypz , commands} = require('../command')
const {
    imageToWebP,
    videoToWebP
} = require('../lib');

eypz({
    pattern: "photo",
    desc: "use for group link.",
    category: "converter",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!m.quoted || !(m.quoted.stickerMessage || m.quoted.stickerMessage.isAnimated === true)) return await m.reply("_Reply to a non animated sticker!_");
await m.reply("Converting...");
const buff = await m.quoted.download();
await conn.sendMessage(m.chat, { image: buff }, { quoted : m });

}catch(e){
console.log(e)
reply(`${e}`)
}
});

eypz({
    pattern: "sticker",
    desc: "use for group link.",
    category: "converter",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!m.quoted || !(m.quoted.imageMessage || m.quoted.videoMessage)) return await m.reply("_Reply to a image/video!_");
await m.reply("Converting...");
const buff = await m.quoted.download();
await m.sendSticker(m.chat, buff, {
    packname: 'ᴄʀᴏɴᴀᴢ-xᴅ🌷',
    author: ''
});
}catch(e){
console.log(e)
reply(`${e}`)
}
});

eypz({
    pattern: "take",
    desc: "use for take sticker",
    category: "converter",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, ameen}) => {
try{
    if(!q) return await m.ameen('give me a name;🤦🏻')
if(!m.quoted || !(m.quoted.imageMessage || m.quoted.videoMessage)) return await m.reply("_Reply to a image/video!_");
await m.reply("Taking...");
const buff = await m.quoted.download();
    var ameen = q.split(';')
await m.sendSticker(m.chat, buff, {
    packname: ameen[0],
    author: ameen[1]
});
}catch(e){
console.log(e)
reply(`${e}`)
}
});
    
