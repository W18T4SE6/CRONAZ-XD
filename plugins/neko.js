
const {eypz , commands} = require('../command')
var axios = require('axios');
eypz({
    pattern: "neko",
    desc: "random img",
    category: "main",
    filename: __filename
},
async (conn, m) => {
    var res = await axios.get("https://ironman.koyeb.app/ironman/neko");
    await conn.sendMessage(m.chat, { image: { url: res.data.ironman.url }, caption: "neko" });
});


////✅️/✅️✅️/✅️//✅️
