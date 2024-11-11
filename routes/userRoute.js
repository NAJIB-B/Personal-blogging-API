const express = require("express")
const {signUp} = require('../controllers/userController')

const router = express.Router()



router.post("/signup", signUp)
router.post("/login")


module.exports = router
