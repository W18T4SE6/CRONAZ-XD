const { commands, eypz } = require('../command'); 

eypz({
    pattern: "tagall",
    desc: "mention evryone in that group.",
    category: "group",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
m.me = conn.user.id.includes(':') ? conn.user.id.split(':')[0]+'@s.whatsapp.net' : client.user.id;

m.isAdmin = async (who) => {
 let group = await conn.groupMetadata(m.chat);
 let participant = group.participants.filter(p => p.id == who);
 if (participant.length != 0) return (participant[0].admin === 'superadmin' || participant[0].admin === 'admin') ? true : false;   
 else return false;
}


let Y = m.sender;

if (!await m.isGroup) return m.reply("_This is a group command!_")

        if (!await m.isAdmin(Y)) return m.reply("_This command for only group admins_")

const metadata = await conn.groupMetadata(m.chat) 

      
      const aju = metadata.participants || {};
       
      let Axl =
        "\n══✪〘   *Tag All*   〙✪══\n\n";
      for (let i of aju) {
         {
          Axl += " ⭒ @" + i.id.split("@")[0] + "\n";
        }
      }

const { participants } = await conn.groupMetadata(m.chat);
      return await conn.sendMessage(
        m.chat,
        {
          text: Axl,
          mentions: participants.map((a) => a.id),
        },
        {
          quoted: mek,
        }
      );


} catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

