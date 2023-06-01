const fs = require("fs")
let whitelist = JSON.parse(fs.readFileSync("./settings.json", "utf8")).whiteList
module.exports = {
    getList:() => whitelist.list,
    toggle: (item) => item != undefined ? (
        item == "true" ? true : false
    ) : (
        !whitelist.state
    ),
    exists: (input, x) => {
        for (var e in input) if(this.getList()[e] == x.toString().charCodeAt(0)) return true;
        return false;
    },

    remove: (item) => {
        console.log({whitelist: whitelist.list, char: item, whittelistType: typeof this.getList()})
        if(this.getList().includes(item)) this.getList() = this.getList().removeCharAt(this.getList().indexOf(item))
        if(this.getList().includes(item)) this.remove(item)
        return this.getList()
    },
    add: (item) => { 
        if (!this.getList().includes(item)) {
            this.getList() += item
            fs.writeFileSync("./settings.json", JSON.stringify(config, null, 4), "utf8")
        }
    },
    import: (path) => { whitelist = fs.readFileSync(path[0], "utf8") },
    export: (path) => {
        path = path[0]
        console.log(`Whitelist: ` + whitelist)
        if (path.length > 0) {
            if (path.endsWith(".json")) {
                fs.writeFileSync(path, JSON.stringify(whitelist, null, 4), "utf8")
            }
            else if (path.endsWith("/")) {
                fs.writeFileSync(`${path}whitelist.export.json`, JSON.stringify(whitelist, null, 4), "utf8")
            } else {
                fs.writeFileSync(`${path}/whitelist.export.json`, JSON.stringify(whitelist, null, 4), "utf8")
            }

        } else {
            fs.write("./config.export.json", JSON.stringify(whitelist, null, 4), "utf8")
        }
    }
}