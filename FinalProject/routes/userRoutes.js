const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

//------------------------------------------------------//POSTroutes\\---------------------------------------------------------
router.post("/newUser", userController.user_create_post);
//------------------------------------------------------//GETroutes\\---------------------------------------------------------
router.get("/", userController.users_view_info);
router.get("/:name", userController.user_view_info);

//------------------------------------------------------//PUTroutes\\---------------------------------------------------------
router.put("/:name", userController.updatingUSerInfo);
//------------------------------------------------------//DELETEroutes\\---------------------------------------------------------
router.delete("/delete/:name", userController.deletingUserInfo);








module.exports = router;
