module.exports = {
    crash: (msg) => {
        console.log(msg ? msg : "")
        process.exit(0)
    }
}