const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👾 CRONAZ-XD Repastitory Information*

*| ɴᴀᴍᴇ*: ᴄʀᴏɴᴀᴢ-xᴅ
*| ᴏᴡɴᴇʀ*: ᴄʀᴏɴᴇx ( ᴄʀᴏɴᴀᴢ-xᴅ )
*| ɴᴜᴍʙᴇʀ*: 918078438059
*| ᴠᴇʀꜱɪᴏɴ*: 1.0.0


*📡 REPO LINK*
🔗◦https://github.com/W18T4SE6/CRONAZ-XD.git

*📌  WHATSAPP GROUP JOIN*
🔗◦ https://chat.whatsapp.com/CfFibovjGmu8tbJtKfs57Z
©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴏɴᴀᴢ-xᴅ
`
await conn.sendMessage(from,{image:{url: `https://ik.imagekit.io/eypz/1727903040279_XEWG3FC67.png`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
