const config = require('../config')
const fetch = require('node-fetch')
const {eypz , commands} = require('../command')

eypz({
    pattern: "insta",
    desc: "instagram.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
  if (!m.quoted || !args) return await m.reply('_Please Replay To A Valid Insta Link🌸_')
           
const igdl = `https://viper.devstackx.in/api/v1/insta?query=`
let text = m.quoted.msg || args[0]
let fet = igdl + text
 let hehe = await fetch(fet);
const response = await hehe.json();
for (let i of response.data) {
conn.sendMessage(m.chat, { [i.type]: { url: i.url } })
			}
}catch(e){
console.log(e)
reply(`${e}`)
}
})
