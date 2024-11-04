const {eypz , commands} = require('../command')
const config = require('../config')


eypz({
    pattern: "yts",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return m.reply("_Enter a YouTube link for download_")



let res = await fetch(`https://prabath-ytdl-scrapper.koyeb.app/api/mp3v2?url=${q}`);

let axl = await res.json()
let surl = axl.dl_link
let title = axl.title

await m.reply(`*_Downloading : ${title}_*`);

return await conn.sendMessage(m.chat,{audio: {url:surl},mimetype:"audio/mpeg"},{quoted:mek})




}catch(e){
console.log(e)
reply(`${e}`)
}
})



/*eypz({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return m.reply("_Enter a YouTube link for download_")



let res = await fetch(`https://prabath-ytdl-scrapper.koyeb.app/api/mp3v2?url=${q}`);

let axl = await res.json()
let surl = axl.dl_link
let title = axl.title

await m.reply(`*_Downloading : ${title}_*`);

return await conn.sendMessage(m.chat,{audio: {url:surl},mimetype:"audio/mpeg"},{quoted:mek})




}catch(e){
console.log(e)
reply(`${e}`)
}
})
*/
