//output a prompt

process.stdout.write('prompt > ')

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()
    
    if (cmd === 'pwd') {
        let pwd = require('./pwd.js');
        pwd();
        process.stdout.write('\nprompt > ')
        // process.stdout.write(pwd.toString());

    } else if(cmd === 'ls'){
        let ls = require('./ls.js')
        ls()

    }else if(cmd.slice(0,3) === 'cat'){
        module.exports.kitty = cmd.slice(4)
        let cat = require('./cat.js')
        cat()
    }else {
        process.stdout.write('You typed: ' + cmd)
        process.stdout.write('\nprompt > ')
    }
})

///Users/tianyingjiang/gracehopper/week1/node-shell^C
///Users/tianyingjiang/gracehopper/week1/node-shell{}
