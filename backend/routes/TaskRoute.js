const {Router} = require("express");
const {getTasks, saveTask, deleteTask, updateTask, getTaskById} = require("../controllers/TaskControllers")

const router = Router()

router.get("/tasks", getTasks);
router.get("/task/:id", getTaskById)
router.post("/task", saveTask);
router.put("/task/:id", updateTask)
router.delete("/task/:id", deleteTask)

module.exports = router