const config = require('../config');
const { eypz, commands } = require('../command');
const { default: makeWASocket, useMultiFileAuthState, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')
eypz({
    pattern: "groupinfo",
    desc: "Get information  the group.",
    react: "👥",
    category: "group",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        const groupMetadata = await conn.groupMetadata(from); // Get group metadata
        const groupInfo = `
*Group Name:* ${groupMetadata.subject}
*Group Description:* ${groupMetadata.desc || 'No description'}
*Members:* ${groupMetadata.participants.length}
*Created At:* ${new Date(groupMetadata.creation * 1000).toLocaleString()}
        `;
        return await conn.sendMessage(from, {
            text: groupInfo
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        return await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply(`Error: ${e.message}`);
    }
});
