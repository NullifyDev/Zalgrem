const fs = require("fs")
const process = require("process")
let config = JSON.parse(fs.readFileSync("./settings.json", "utf8"))
const whitelist = require("./commands/whitelist.js")
const text = require("./commands/text.js")
const err = require("./error.js")
const { start } = require("repl")

module.exports = {
    parse: (input) => {
        input.forEach((cmd) => {
            // console.log(cmd)
            if (cmd.cmd.length == 0 && cmd.args.length > 0 && cmd.handle.length > 0) {
                console.error(`Zalgrem: no such argument: ${cmd.args} for... nothing...?`)
                console.error(`How you managed that? Anyway. Please report this to the developer. It's your command number ${input.indecmdOf(cmd)}`)
                console.error(`Here's your error token: "0-1"`)
            }
            let start = performance.now()
            switch (cmd.cmd) {
                case "get-error":
                    start = process.now()
                    console.log(err.get(cmd.args))
                    break;
                case "check":
                    console.log(text.hasZalgo(cmd.args))
                    break;
                case "filter":
                    console.log(text.filter(cmd.args))
                    break;
                case "config":
                    cmd.handles.forEach((handle) => {
                        switch (handle) {
                            case "whitelist":
                                const arguments = cmd.args.splice(1)
                                switch (cmd.args[0]) {
                                    case "add":
                                        whitelist.add(arguments)
                                        break;
                                    case "remove":
                                        whitelist.remove(arguments)
                                        break;
                                    case "list":
                                        console.log(whitelist.getList())
                                        break;
                                    case "import":
                                        whitelist.import(arguments)
                                        break;
                                    case "export":
                                        console.log("EXPORTING...")
                                        whitelist.export(arguments)
                                        break;
                                    case "toggle":
                                        console.log({item: arguments, currState: config.whiteList.state})
                                        config.whiteList.state = whitelist.toggle(arguments ? arguments[0] : undefined)
                                        console.log({item: arguments, currState: config.whiteList.state})
                                }
                                break;
                            case "action":
                                if (cmd.args == "filter") config.action = "filter"
                                else if (cmd.args == "check") config.action = "check"
                                else console.error(`Zalgrem: no such argument: ${cmd.args} for config.action`)
                                break; 
                            default:
                                if (handle.startsWith("testtext") && handle.includes(".")) {
                                    switch (handle.split(".")[1]) {
                                        case "zalgo":
                                            config.testText.zalgo = cmd.args
                                            break;
                                        case "normal":
                                            config.testText.normal = cmd.args
                                            break;
                                        default:
                                            console.error(`Zalgrem: no such argument: ${cmd.args} for config.testText`)
                                            break;
                                    }
                                } else {
                                    console.error(`Zalgrem: no such handle: ${cmd.handle} for config`)
                                }
                                break;
                        }
                    })
                    break;
                case "test":
                    break;
                case "help":
                    break;
                default:
                    console.error(`Zalgrem: no such command: ${cmd.cmd} - command not found.`)
                    break;
            }
            console.log({cmd: cmd.cmd, time: performance.now() - start})
        })
        console.log(config)
        fs.writeFileSync("./settings.json", JSON.stringify(config, null, 4))
    }
}