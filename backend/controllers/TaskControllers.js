const TaskModel = require("../models/TaskModel")

module.exports.getTasks = async (req, res) => {
    const tasks = await TaskModel.find()
    res.send(tasks)
}

module.exports.getTaskById = async (req, res) => {
    const {id} = req.params
    const task = await TaskModel.findById(id)
    res.send(task)
}

module.exports.getAllTasksByEmployerId = async (req, res) => {
    const {id} = req.params
    const task = await TaskModel.find({employerId: id})
    res.send(task)
}

module.exports.saveTask = (req, res) => {
    const task = req.body.task

    TaskModel.create(task)
    .then((data) => {
        console.log("Saved Successfully...")
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    })
}

module.exports.updateTask = (req, res) => {
    const {id} = req.params
    const task = req.body.task

    TaskModel.findByIdAndUpdate(id, task)
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    })
}

module.exports.deleteTask = (req, res) => {
    const {id} = req.params

    TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    })
}