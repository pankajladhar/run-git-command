import {SpawnOptions} from "child_process";

export type commandConfig = {
    execOptions?: SpawnOptions;
    logProcess?: boolean;
    customMsg?: string;
}