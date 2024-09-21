const config = require('../config')
const {
	eypz,
	commands
} = require('../command')
const util = require('util')

eypz({
		on: "text",
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
		if (args.startsWith(">")) {
			try {
				let evaled = await eval(`(async () => { ${args.replace(">", "")} })()`);
				if (typeof evaled !== "string") evaled = util.inspect(evaled);
				await reply(`${evaled}`)
			} catch (err) {
				await reply(`${util.format(err)}`);
			}
		}
	})
