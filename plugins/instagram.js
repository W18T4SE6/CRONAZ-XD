import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command, text }) => {
m.react('⏳')
if (!text) throw `_Give Me A Link For Download 🌸_`
  const igdl = `${calcifer}insta/v7/igdl2?url=`
let fet = igdl + text
 let res = await fetch(fet);
const data = await res.json();
const open = data.downloadLinks
 for (const Meera of open) {
const mimmi = Meera.url
const mediaType = Meera.type
m.reply(mediaType)
let Cap = '*-Take Your Video🧚🏻‍♂️⚡*'
let CapI = '*-Take Your Image🧚🏻‍♂️🤍*'


conn.sendFile(m.chat, mimmi, 'keiko.mp4', Cap, m)
// conn.sendFile(m.chat, mimmi, 'keiko.jpg', CapI, m)

}

m.react('✅')
}

handler.help = ['download']
handler.tags = ['internet']
handler.command = /^(insta|ig|instagram)$/i
export default handler
