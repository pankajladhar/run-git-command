const { spawn } = require('child_process');

var execGitCmd = function(args, customMsg){
    return new Promise((resolve, reject) =>{
        let message = ""

        message = customMsg ? `${customMsg}...` : `git ${args[0]} is executing...` ;
        console.log('\x1b[36m%s\x1b[0m', message)

        let command = spawn('git', args);
        let stdOutData = "", stderrData="";

        command.stdout.on('data', (data) => stdOutData += data )
        command.stderr.on('data', (data) => stderrData += data );
        command.on('close', (code) => code!=0 ? reject(stderrData.toString()) : resolve(stdOutData.toString()));
    })
}

module.exports = execGitCmd;