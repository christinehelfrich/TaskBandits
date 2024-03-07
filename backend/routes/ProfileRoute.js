const {Router} = require("express")
const {getProfiles, saveProfile, deleteProfile, updateProfile, getProfileById} = require("../controllers/ProfileControllers")

const router = Router()

router.get("/profiles", getProfiles);
router.get("/profile/:id", getProfileById)
router.post("/profile", saveProfile);
router.put("/profile/:id", updateProfile)
router.delete("/profile/:id", deleteProfile)

module.exports = router