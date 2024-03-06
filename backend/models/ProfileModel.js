const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    photo: {
        type: String
    },
    skills: {
        type: Array
    },
    hourlyWage: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    isUnder21: {
        type: Boolean,
        required: true
    },
    experience: {
        type: String,
    }

    
})

module.exports = mongoose.model("Profile", profileSchema)