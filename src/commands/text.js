let whitelist = require('./whitelist.js')
const rawConf = JSON.parse(require('fs').readFileSync("./settings.json", "utf8"))
const whiteList = rawConf.whiteList
const allowedChars = rawConf.defaultChars
module.exports = {
    filter: (input) => {
        // console.log(`text.js: filter: input: ${input}`)
        let filteredResult = []
        // console.log({text: input})
        input.forEach((args) => {
            let str = ""
            for (var x in args) {
                if (allowedChars.includes(args[x])) str += args[x]
                else if (whitelist.state && whitelist.getList().includes(args[x])) str += args[x]
            }
            filteredResult.push(str)
        })
        return filteredResult
    },

    hasZalgo: (input) => {
        let result = []
        input.forEach((args) => {
            let str = { string: "", hasZalgo: false }
            str.string = args
            
            for (var x in str.string) {
                if (!allowedChars.includes(args[x]) || whitelist.state && !whitelist.getList().includes(args[x])) str.hasZalgo = true
            }
            result.push(str)
        })
        return result
    }
}



// [ "è", "é", "ê", "ì", "í", "ï", "î", "ð", "ñ", "ò", "ó", "ô", "õ", "ö", "ø", "ù", "ú", "û", "ü", "Ė", "Ő", "ő", "Ò", "Ó", "Ù", "Ú", "Ü", "Ű", "ű", "Ǽ", "ǽ"] 