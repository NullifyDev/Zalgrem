const { inspect } = require('node:util')
const error = require('./error.js')
const utils = require('./utils.js')

let cmds = [], cmd = { cmd: "", handles: [], args: [] }
function submitCmd(inputCmd) {
    //console.log({ cmd: `${cmd.cmd}`, handles: `${cmd.handles}`, args: `${cmd.args}` })
    cmds.push(inputCmd)
    return { cmd: "",  handles: [], args: []}
}
module.exports = {
    lex: (args) => {
        //console.log({ args: `${args}` })
        
            //cmd = { cmd: "", args: [], handles: handles ? handles : [] }
        //console.log("[CMD TEST]")
        for (var x in args) {
            let a = args[x]
            let b = args[parseInt(x)+1] == undefined ? null : args[parseInt(x)+1]
            // console.log({a: a, cmd: cmd.cmd})

            if (cmd.cmd.length == 0 && a.startsWith("--")) {
                if (cmd.cmd > 0  && cmd.args.length > 0 || cmd.cmd > 0  && cmd.handles.length > 0) cmds.push(cmd)
                cmd = { cmd: "", args: [], handles: [] }
                // console.log(a)
                switch (a) {
                    case "--get-error":
                    case "--filter":
                    case "--check":
                    case "--config":
                        cmd.cmd = a.replace("--", "")
                        continue;

                    case "--test":
                    case "--help":
                        cmd.cmd = a.replace("--", "")
                        break;
                    
                    default:
                        console.log(`Zalgrem: no such command: ${a}`)
                        process.exit(0)
                }
            }
            if (cmd.cmd.length > 0) {
                switch (a) {
                    case "testtext.zalgo":
                    case "testtext.normal":
                    case "whitelist":
                    case "action":
                        cmd.cmd == "config" ? cmd.handles.push(a) : utils.crash(`Zalgrem: no such argument: ${handles} ${a}`);
                        break;
                    case "list":
                        switch(cmd.cmd) {
                            case "config":
                                if (cmd.handles == "whitelist") cmd.args.push(a)
                                break;
                            case "get-error":
                                cmd.args.push(a)
                                break;
                            default:
                                utils.crash(`Zalgrem: no such argument: ${handles} ${a}`);
                                break;
                        }
                        break;
                    case "add":
                    case "remove":
                    case "import":
                    case "export":
                    case "toggle":
                        if (cmd.cmd == "config" && cmd.handles == "whitelist") cmd.args.push(a)
                        break;
                    
                    default:
                        if (a == !isNaN) { cmd.cmd == "get-error" ? cmd.handles.push(a) : console.log(error.getErrorList()); }
                        switch (cmd.cmd) {
                            case "config":
                                if (cmd.handles.includes("testtext")) {
                                    switch (a) {
                                        case "zalgo":
                                        case "normal":
                                            cmd.args.push(a)
                                            break;
                                        default:
                                            utils.crash(`Zalgrem: no such argument: ${a}`);
                                            break;
                                    }
                                }
                                break;
                            case "filter":
                            case "check":
                                cmd.args.push(a)
                                break;
                            case "":
                                console.log(`Zalgrem: no such argument: ${a} - command not found.`)
                                console.log(`How you managed that? Anyway. Please report this to the developer. xD`)
                                utils.crash(`Error: "0-1"`);
                                break;
                        }
                        if (cmd.cmd == "config") {
                            cmd.args.push(a)
                        }
                        if (a.includes('-') && cmd.cmd == "get-error") cmd.args.push(a)
                }

            }
            if (b == null || b.startsWith("--")) cmd = submitCmd(cmd)
        }
        // console.log("[CMDS CHECK]")
        // for (let i = 0; i < cmds.length; i++) { 
        //     // console.log(cmds)
        //     console.log(inspect({ i: i+1, cmd: cmds[i].cmd, handles: cmds[i].handles, args: cmds[i].args }, {breakLength: 1024, colors: true} ))
        // }
        return cmds
    }
}