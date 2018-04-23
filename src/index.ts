import {spawn} from "child_process";
import {commandConfig} from "./types";

const defaultConfig = {
    execOptions: {},
    logProcess: true
};

export function execGitCmd(args: string[], cmdConfig?: commandConfig) {
    return new Promise((resolve, reject) => {

        if (!args.length) {
            reject("No arguments were given");
        }

        cmdConfig = {...defaultConfig, ...cmdConfig};

        if (cmdConfig.logProcess) {
            const message = cmdConfig.customMsg ? `${cmdConfig.customMsg}...` : `git ${args[0]} is executing...`;
            console.log('\x1b[36m%s\x1b[0m', message);
        }

        const commandExecuter = spawn('git', args, cmdConfig.execOptions);
        let stdOutData = '';
        let stderrData = '';

        commandExecuter.stdout.on('data', (data) => stdOutData += data);
        commandExecuter.stderr.on('data', (data) => stderrData += data);
        commandExecuter.on('close', (code) => code != 0 ? reject(stderrData.toString()) : resolve(stdOutData.toString()));
    })
}