import {SpawnOptions} from "child_process";

export interface commandConfig {
    execOptions?: SpawnOptions;
    logProcess?: boolean;
    customMsg?: string;
}