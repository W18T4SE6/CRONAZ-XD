const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { eypz, commands } = require('../command'); // Adjust the path as needed

eypz({
    pattern: "install",
    desc: "Install plugin myr",
    category: "plugin",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("Please provide a Gist URL");

        const gistURL = q;
        const response = await axios.get(gistURL);
        const gistData = response.data;

        if (!gistData || !gistData.files) {
            return reply("No valid files found in the Gist🙂");
        }
        const pluginDir = 'plugins';
        if (!fs.existsSync(pluginDir)) {
            fs.mkdirSync(pluginDir);
        }

        for (const file of Object.values(gistData.files)) {
            const pluginName = file.filename;
            const pluginPath = path.join(pluginDir, pluginName);

            await fs.promises.writeFile(pluginPath, file.content);
        }

        reply(`*PLUGINS INSTALLED ✅*\n_${pluginName}_\n> © 𝐂𝐚𝐥𝐜𝐢𝐅𝐞𝐫⚡`);

    } catch (e) {
        console.error(e);
        reply(`Error fetching or saving the plugin: ${e.message}`);
    }
});
