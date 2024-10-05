const syntaxerror = require('syntax-error');
const { eypz, commands } = require('../command');

eypz({
    pattern: "eval",
    desc: "Evaluate JavaScript code",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, body, sender, isOwner, reply }) => {
    

    let _return;
    let _syntax = '';
    let _text = body.slice(5).trim();
    let oldExp = m.exp * 1;

    try {
        let i = 15;
        let exec = new (async () => {}).constructor(
            'print', 'm', 'conn', 'require', 'process', 'args',
            _text
        );

        _return = await exec.call(
            conn,
            (...args) => {
                if (--i < 1) return;
                console.log(...args);
                return conn.reply(from, require('util').format(...args), mek);
            },
            m, conn, require, process, body
        );
    } catch (e) {
        let err = syntaxerror(_text, 'Execution Function', {
            allowReturnOutsideFunction: true,
            allowAwaitOutsideFunction: true,
            sourceType: 'module',
        });

        if (err) _syntax = '```' + err + '```\n\n';
        _return = e;
    } finally {
        conn.reply(from, _syntax + require('util').format(_return), mek);
        m.exp = oldExp;
    }
});
