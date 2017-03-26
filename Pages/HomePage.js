let Context = require("./../Modules/Context")

module.exports = {
    hikes: Context.hikes,
    edit: x => router.push("editHike", x.data)
};