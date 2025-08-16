const express=require("express")
const { registerUser, loginUser,currentUser } = require("../controllers/usercontroller")
const validateToken = require("../middleware/validatetoken");
const router=express.Router()

router.post("/register",registerUser).post("/login",loginUser).get("/current",validateToken ,currentUser)


//information of current use.
module.exports=router