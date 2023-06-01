console.clear()
let fs = require("fs")
const lexer = require("./src/lexer.js")
const parser = require("./src/parser.js")
const rawConf = JSON.parse(fs.readFileSync("./settings.json", "utf8"))

parser.parse(lexer.lex(process.argv.slice(2)))