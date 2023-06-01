let list = [
    { code: "0-0", msg: "Zalgrem: Ran successfully."},
    { code: "0-1", msg: "Zalgrem: Launch: arguments: arguments and/or handles were provided without commands." }
]

module.exports = {
    get: (input) => {
        let res = []
        input.forEach((arg) => {
            if (arg == "list") res.push(list)
            else {
                list.forEach((err) => {
                    if (err.code == arg) res.push(err)
                    else return `Zalgrem Error: No such error code: ${arg}`
                })
            }
        })
        return res
    },
}