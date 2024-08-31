const fs = require('fs')
const path = require('path')
const { eypz, commands } = require('../command')

eypz({
    pattern: "addplugin",
    desc: "New Plugin Add To Octa Bot",
    category: "owner",
    filename: __filename
},


async(conn, mek, m, { reply, quoted, args }) => {
    try {
        
        if (!args[0]) return reply('_🙊Please Give Me A Name_\nEg:\n*addplugin AmeenInt*')

      
        const AmeenXnt = args[0].trim()
        const filePath = path.join(__dirname, '../plugins', `${AmeenXnt}.js`)

 
        if (!quoted) return reply('_Replay To A Js Code For Octa Bot Plugin🙄._')


        fs.writeFileSync(filePath, quoted.text, 'utf8')

        reply(`*Plugin Saved✅*\n\n> Plugin *${AmeenXnt}.js*`)
    } catch (e) {
        console.log(e)
        reply(`_Failed To Save The Plugin:_\nReason:\n ${e.message}`)
    }
})
