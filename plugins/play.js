const {eypz , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
const config = require('../config')


eypz({
    pattern: "play",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return m.reply("_Enter a song name!_\n_Eg:- .play starboy_")


const search = await yts(q)
const data = search.videos[0];
const yturl = data.url

let res = await fetch(`https://prabath-ytdl-scrapper.koyeb.app/api/mp3v2?url=${yturl}`);

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
