const ProfileModel = require("../models/ProfileModel")

module.exports.getProfiles = async (req, res) => {
    const profiles = await ProfileModel.find()
    res.send(profiles)
}

module.exports.saveProfile = (req, res) => {
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

module.exports.updateProfile = (req, res) => {
    const {id} = req.params
    const {profile} = req.body

    ProfileModel.findByIdAndUpdate(id, {profile})
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    })
}

module.exports.deleteProfile = (req, res) => {
    const {id} = req.params

    ProfileModel.findByIdAnddelete(id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    })
}