const config = require('../config');
const { eypz, commands } = require('../command');
const { default: makeWASocket, useMultiFileAuthState, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')
eypz({
    pattern: "tagadmin",
    desc: "Get a list of group admins.",
    react: "👥",
    category: "group",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        const groupMetadata = await conn.groupMetadata(from);
        const admins = groupMetadata.participants
            .filter(p => p.admin === 'admin' || p.admin === 'superadmin')
            .map(admin => `@${admin.id.split('@')[0]}`)
            .join('\n');

        return await conn.sendMessage(from, {
            text: `*Group Admins:*\n\n${admins}`,
            mentions: groupMetadata.participants
                .filter(p => p.admin === 'admin' || p.admin === 'superadmin')
                .map(admin => admin.id)
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        return await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply(`Error: ${e.message}`);
    }
});
