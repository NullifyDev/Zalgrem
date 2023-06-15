console.clear()

require("./src/parser.js").parse(
  require("./src/lexer.js").lex(
    process.argv.slice(2)
  )
)
