console.clear()

parser.parse(
  require("./src/lexer.js").lex(
    process.argv.slice(2)
  )
)
