const config = require('../config')
const {
	commands,
	eypz
} = require('../command');
const util = require('util');
eypz({
		on: "body",
		desc: "Eval",
		category: "owner",
		filename: __filename
	},
	async (conn, mek, m, {
		from,
		quoted,
		body,
		isCmd,
		command,
		args,
		q,
		isGroup,
		sender,
		senderNumber,
		botNumber2,
		botNumber,
		pushname,
		isMe,
		isOwner,
		groupMetadata,
		groupName,
		participants,
		groupAdmins,
		isBotAdmins,
		isAdmins,
		reply
	}) => {
		if (body.startsWith(">")) {
			try {
				let evaled = await eval(`(async () => { ${body?.replace(">", "")} })()`);
				if (typeof evaled !== "string") evaled = util.inspect(evaled);
				await m.reply(`${evaled}`)
			} catch (e) {
				m.reply(`${e.message}`);
			}
		}
	});
