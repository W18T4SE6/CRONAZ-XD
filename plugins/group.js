const config = require('../config')
const {eypz , commands} = require('../command')

eypz({
    pattern: "invite",
    desc: "use for group link.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


////FUNCTIONS✅️✅️////////

m.me = conn.user.id.includes(':') ? conn.user.id.split(':')[0]+'@s.whatsapp.net' : client.user.id;
 
m.isAdmin = async (who) => {
 let group = await conn.groupMetadata(m.chat);
 let participant = group.participants.filter(p => p.id == who);
 if (participant.length != 0) return (participant[0].admin === 'superadmin' || participant[0].admin === 'admin') ? true : false;   
 else return false;
}



////FUNCTIONS✅️✅️////////




let AXL = m.me;
let Y = m.sender;


if (!await m.isGroup) return m.reply("_This is a group command!_")

        if (!await m.isAdmin(AXL)) return m.reply("_I'm not an admin_")

        if (!await m.isAdmin(Y)) return m.reply("_This command for only group admins_")
        let code = await conn.groupInviteCode(m.chat)
        return m.reply('https://chat.whatsapp.com/' + code)



}catch(e){
console.log(e)
reply(`${e}`)
}
})



eypz({
    pattern: "revoke",
    desc: "use for group link.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


////FUNCTIONS✅️✅️////////

m.me = conn.user.id.includes(':') ? conn.user.id.split(':')[0]+'@s.whatsapp.net' : client.user.id;
 
m.isAdmin = async (who) => {
 let group = await conn.groupMetadata(m.chat);
 let participant = group.participants.filter(p => p.id == who);
 if (participant.length != 0) return (participant[0].admin === 'superadmin' || participant[0].admin === 'admin') ? true : false;   
 else return false;
}



////FUNCTIONS✅️✅️////////

m.me = conn.user.id.includes(':') ? conn.user.id.split(':')[0]+'@s.whatsapp.net' : client.user.id;
 
m.isAdmin = async (who) => {
 let group = await conn.groupMetadata(m.chat);
 let participant = group.participants.filter(p => p.id == who);
 if (participant.length != 0) return (participant[0].admin === 'superadmin' || participant[0].admin === 'admin') ? true : false;   
 else return false;
}



////FUNCTIONS✅️✅️////////




let AXL = m.me;
let Y = m.sender;


if (!await m.isGroup) return m.reply("_This is a group command!_")

        if (!await m.isAdmin(AXL)) return m.reply("_I'm not an admin_")

        if (!await m.isAdmin(Y)) return m.reply("_This command for only group admins_")


const code = await conn.groupRevokeInvite(m.chat)

let ajsalxx = (`_New Group Link_\n\nhttps://chat.whatsapp.com/${code}`)

let axlui = m.sender;



        return m.reply("_Group link Revoked_");

}catch(e){
console.log(e)
reply(`${e}`)
}
})




eypz({
    pattern: "mute",
    desc: "use for group link.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


////FUNCTIONS✅️✅️////////

m.me = conn.user.id.includes(':') ? conn.user.id.split(':')[0]+'@s.whatsapp.net' : client.user.id;
 
m.isAdmin = async (who) => {
 let group = await conn.groupMetadata(m.chat);
 let participant = group.participants.filter(p => p.id == who);
 if (participant.length != 0) return (participant[0].admin === 'superadmin' || participant[0].admin === 'admin') ? true : false;   
 else return false;
}



////FUNCTIONS✅️✅️////////


if(!m.isGroup) {
                         return await m.reply("_This is a group command !_");
       }
        if (!await m.isAdmin(m.me)) return m.reply("_I'm not an admin_")
        if (!await m.isAdmin(m.sender)) return m.reply("_This command for only group admins !_")
        await conn.groupSettingUpdate(m.chat , 'announcement');
        return await m.reply("_Group Muted !_");

}catch(e){
console.log(e)
reply(`${e}`)
}
})

    



eypz({
    pattern: "unmute",
    desc: "use for group link.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


////FUNCTIONS✅️✅️////////

m.me = conn.user.id.includes(':') ? conn.user.id.split(':')[0]+'@s.whatsapp.net' : client.user.id;
 
m.isAdmin = async (who) => {
 let group = await conn.groupMetadata(m.chat);
 let participant = group.participants.filter(p => p.id == who);
 if (participant.length != 0) return (participant[0].admin === 'superadmin' || participant[0].admin === 'admin') ? true : false;   
 else return false;
}



////FUNCTIONS✅️✅️////////


if(!m.isGroup) {
                         return await m.reply("_This is a group command !_");
       }
        if (!await m.isAdmin(m.me)) return m.reply("_I'm not an admin_")
        if (!await m.isAdmin(m.sender)) return m.reply("_This command for only group admins !_")
        await conn.groupSettingUpdate(m.chat , 'not_announcement');
        return await m.reply("_Group Unmuted !_");

}catch(e){
console.log(e)
reply(`${e}`)
}
})

eypz({
    pattern: "mee",
    desc: "mention me message.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    var fek = (`@${m.sender.split("@")[0]}`)

 m.reply(fek)
    }catch(e){
console.log(e)
reply(`${e}`)
} })




eypz({
    pattern: "left",
    desc: "use for group link.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
var ajsalsparky = ['919539412641','918078438059']
		if (ajsalsparky.includes(senderNumber)) {

try{

if(!m.isGroup) {
                         return await m.reply("_This is a group command !_");
       }
	await conn.groupLeave(m.chat)

}catch(e){
console.log(e)
reply(`${e}`)
}
}});
