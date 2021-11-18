const mongoose = require("mongoose");
const jobSchema = mongoose.Schema({
    ts_name: String,
    ts_yrs: Number,
    ts_broadcastchannel: String
})

module.exports = mongoose.model("Jobs", jobSchema);