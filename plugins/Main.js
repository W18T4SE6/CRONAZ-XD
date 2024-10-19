const config = require('../config')
const {eypz , commands} = require('../command')


// owner join 

eypz({
    pattern: "join",
    desc: "bot join to group",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, 
		    isCmd, command, args, 
		    q, isGroup, sender, 
		    senderNumber, botNumber2, 
		    botNumber, pushname, isMe, 
		    isOwner, groupMetadata, 
		    groupName, participants, 
		    groupAdmins, isBotAdmins, 
		    isAdmins, reply}) => {
	
	if (!q) return reply("_🔰Give me a Whatsapp Group Link for join_");
	try{
var Link = q
var CalciFer = Link.replace('https://chat.whatsapp.com/', '')
var nimmi = await conn.groupAcceptInvite(CalciFer)
}catch(e){
console.log(e)
reply(`${e}`)
}
})


// Next Plugins🔰
