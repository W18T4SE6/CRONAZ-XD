var axios = require('axios');
eypz({
    pattern: "waifu",
    desc: "random img",
    category: "main",
    filename: __filename
},
async (conn, m) => {
    var res = await axios.get("https://ironman.koyeb.app/ironman/waifu");
    await conn.sendMessage(m.chat, { image: { url: res.data.ironman.url }, caption: "waifu" });
});
