const mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    rollNo: {
        type: String,
        required: true,
    },

    wad: {
        type: Number,
        required: true,
    },

    cc: {
        type: Number,
        required: true,
    },

    dsbda: {
        type: Number,
        required: true,
    },
    
    cns: {
        type: Number,
        required: true,
    },
});


module.exports = mongoose.model("Student", studentSchema);