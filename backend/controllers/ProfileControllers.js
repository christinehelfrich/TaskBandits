const ProfileModel = require("../models/ProfileModel")

module.exports.getProfiles = async (req, res) => {
    const profiles = await ProfileModel.find()
    res.send(profiles)
}

module.exports.saveProfile = async (req, res) => {
    const {profile} = req.body

    ProfileModel.create({profile})
    .then((data) => {
        console.log("Saved Successfully...")
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    })
}