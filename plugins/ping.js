const { commands, eypz } = require('../command'); 

eypz({
    command: 'ping',
    category: 'mics',
    category: "main",
    filename: __filename
        },
     async (conn, args, message) => {
       try{
           const { from } = message;
        const start = new Date().getTime();
        const edited = await conn.sendMessage(from, { text: '🏓 Pinging...' }, { quoted: message });

        const end = new Date().getTime();
        const TripTime = end - start;
        await conn.sendMessage(from, { text: `🏓 Pong!: \`${TripTime} ms`, edit: edited.key });
    }catch(e){
console.log(e)
reply(`${e}`)
       }
});
