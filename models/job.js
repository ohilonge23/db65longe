const mongoose = require("mongoose");
const jobSchema = mongoose.Schema({
    name: String,
    YrsOfExp: Number,
    broadcastChannel: String
})

module.exports = mongoose.model("Jobs", jobSchema);