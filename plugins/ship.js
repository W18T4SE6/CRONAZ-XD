const axios = require('axios')
const {eypz , commands} = require('../command')
// ship command 
const toM = (a) => '@' + a.split('@')[0];
eypz({
    pattern: "ship",
    alias: ["cup", "love"],
    desc: "Randomly pairs the command user with another group member.",
    react: "❤️",
    category: "fun",
    filename: __filename,
}, 
async (conn, mek, m, { from, isGroup, groupMetadata, reply }) => {
    try {
        // Ensure command is used in a group
        if (!isGroup) {
            return reply("This command can only be used in groups.");
        }

        // Get group participants
        const participants = groupMetadata.participants.map(p => p.id);

        if (participants.length < 2) {
            return reply("Not enough members to pair.");
        }

        // Sender of the command
        const sender = m.sender;

        // Randomly select another participant
        let randomParticipant;
        do {
            randomParticipant = participants[Math.floor(Math.random() * participants.length)];
        } while (randomParticipant === sender);

        // Pairing message
        const message = `${toM(sender)} ❤️ ${toM(randomParticipant)}\nCongratulations 💖🍻`;

        // Send the message with contextInfo
        await conn.sendMessage(from, {
            text: message,
            contextInfo: {
                mentionedJid: [sender, randomParticipant], // Mention both users
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '12036335402310622@newsletter',
                    newsletterName: 'cronex',
                    serverMessageId: 143,
                },
            },
        });
    } catch (e) {
        console.error("Error in ship command:", e);
        reply("An error occurred while processing the command. Please try again.");
    }
});
