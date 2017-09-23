# Description
_run-git-command_ A light weight wrapper for running git commands in any node.js application..

# Dependencies
Relies on [git](https://git-scm.com/downloads) already having been installed on the system, 
and that it can be called using the command `git`.

# Installation 
To install the stable version you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com/en/): 

```shell
$ npm install run-git-command
```

```shell
$ yarn install run-git-command  
```

# Usage
Include into your app using:
```javascript
let execGitCmd = require('run-git-command');
```
since `execGitCmd` returns promise , it can be used to chanin multile git commands

`execGitCmd` method takes two paramets:

1. First arument is array (required)
1. Second is string (optional)

``` javascript
execGitCmd(["args"], "message to be printed while running commad")
```

## example

```javascript
/* 
   When second arg is not passed then while running 
   it will print 'git pull is executing ....'
*/

let execGitCmd = require('run-git-command');

execGitCmd(['pull', '--rebase'])
    .then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log("Err", err)
    })


/* 
    When second arg is passed then while running 
    it will print 'Running push task ....'
*/

let execGitCmd = require('run-git-command');

execGitCmd(['push', 'origin', 'master'], "Running push task")       .then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log("Err", err)
    })


/*
    chaining example
*/

let execGitCmd = require('run-git-command');

execGitCmd(['pull', '--rebase', 'origin', 'master'])
    .then(()=>execGitCmd(['push', 'origin', 'master'])
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log("Err", err)
    })

```


# License

MIT


