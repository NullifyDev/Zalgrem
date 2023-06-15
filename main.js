console.clear()
const lexer = require("./src/lexer.js")

parser.parse(
  require("./src/lexer.js").lex(
    process.argv.slice(2)
  )
)
