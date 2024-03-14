const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hours: {
        type: String,
        required: true
    },
    hourlyBudget: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    employerId: {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model("Task", taskSchema)