const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model("Task", taskSchema)