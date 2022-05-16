const { Schema, model } = require("mongoose");

const attendanceSchema = new Schema({
    level: {}
});

module.exports = model("Attendance", attendanceSchema);
