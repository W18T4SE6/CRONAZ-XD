const {eypz , commands} = require('../command')


eypz({
    pattern: "ssearch",
    desc: "search songs",
    category: "search",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q){return m.reply("_Enter a Song name \n_Eg :- . Ssearch_")} 


var Axl = await fetch(`https://ameen-api.vercel.app/sfys?query=${q}`)
var sparky = await Axl.json()
let andi = sparky.data[0]

return m.reply("_Url :- " + andi.url + "_");






}catch(e){
console.log(e)
reply(`${e}`)
}
})
