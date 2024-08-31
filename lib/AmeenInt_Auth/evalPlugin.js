/*
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

module.exports = {
    handleMessage: async (conn, message) => {
        if (!message.message || !message.message.conversation) return;

        const body = message.message.conversation;
        const prefix = '.';
        if (!body.startsWith(prefix) || !body.startsWith(prefix + 'eval')) return;

        const args = body.slice(prefix.length + 4).trim();
        try {
            const { stdout, stderr } = await execPromise(args);
            if (stderr) {
                await conn.sendMessage(message.key.remoteJid, { text: `Error: ${stderr}` }, { quoted: message });
            } else {
                await conn.sendMessage(message.key.remoteJid, { text: `Output: ${stdout}` }, { quoted: message });
            }
        } catch (error) {
            await conn.sendMessage(message.key.remoteJid, { text: `Execution Error: ${error.message}` }, { quoted: message });
        }
    }
};
*/
module.exports = {
    handleMessage: async (conn, message) => {
        if (!message.message || !message.message.conversation) return;

        const body = message.message.conversation;

        
        if (!body.startsWith('>')) return;

        const code = body.slice(1).trim(); 

        if (!code) return;

        try {
            
            let Fuck = eval(code); 
    
            const output = (typeof Fuck === 'object') ? JSON.stringify(Fuck, null, 2) : Fuck;

            // enikk vayya 💔☠️
            await conn.sendMessage(message.key.remoteJid, { text: `Output: ${output}` }, { quoted: message });
        } catch (error) {
            
            await conn.sendMessage(message.key.remoteJid, { text: `Error: ${error.message}` }, { quoted: message });
        }
    }
};
