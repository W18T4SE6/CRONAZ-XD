const config = require('../config')
const {eypz , commands} = require('../command')

eypz({
    pattern: "cronex",
    desc: "For Ptv",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  m.react('❤️')
return await conn.sendMessage(from, { video: { url: Ameen }, mimetype: 'video/mp4', gifPlayback: true, ptv: true, caption: "◽By Ameen!" })
}catch(e){
console.log(e)
reply(`${e}`)
}
})
