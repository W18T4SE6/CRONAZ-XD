const {eypz , commands} = require('../command')

eypz({
    pattern: "jid",
    desc: "use for group link.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


       return m.reply(m.chat);

}catch(e){
console.log(e)
reply(`${e}`)
}
});
