const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/eypz/1726912966464_IU9i-CsFM.png",
ALIVE_MSG: process.env.ALIVE_MSG || " *CRONAZ-XD ALIVE🌸*\n\n*Owner:* White ser\n\n_Nothing Is Impossible. Motivate Your Own Self🙈_ ",
OWNER_NAME: process.env.OWNER_NAME || "𝑾𝒉𝒊𝒕𝒆 𝒔𝒆𝒓",
BOT_NAME: process.env.BOT_NAME || "CRONAZ-XD",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
