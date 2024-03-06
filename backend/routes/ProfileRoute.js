const {Router} = require("express")
const {getProfiles} = require("../controllers/ProfileControllers")

const router = Router()

router.get("/get", getProfiles);

module.exports = router