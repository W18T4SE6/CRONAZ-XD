const config = require('../config')
const {eypz , commands} = require('../command')

eypz({
    pattern: "insta",
    desc: "instagram.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!m.quoted) return `Please Replay To A Valid Insta Link🌸`
    try{
  
const igdl = `https://ameen-api.vercel.app/insta/v7/igdl?url=`
let text = m.quoted.msg
let fet = igdl + text
 let hehe = await fetch(fet);
const data = await hehe.json();
var mimmi = data.media[0].url
conn.sendMessage(m.chat, { video: { url: mimmi }, mimetype: 'video/mp4' })

}catch(e){
console.log(e)
reply(`${e}`)
}
})

