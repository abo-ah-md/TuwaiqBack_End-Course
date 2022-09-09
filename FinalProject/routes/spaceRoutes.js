const express = require('express');
const spaceController= require("../controller/spaceController");


const router = express.Router();

//------------------------------------------------------//POSTroutes\\---------------------------------------------------------
router.post('/newSpace/:id',spaceController.newSpace_post)
//------------------------------------------------------//GETroutes\\---------------------------------------------------------
router.get("/:spaceID",spaceController.viewSpace)
router.get("/",spaceController.viewSpaces)
//------------------------------------------------------//PUTroutes\\---------------------------------------------------------
router.put('/Room/:id',spaceController.newRoom_put)
router.put('/:spaceID',spaceController.spaceNewMember_put)
router.put('/Room/leave/:spaceID',spaceController.leaveRoom)
router.put('/leave/:spaceID',spaceController.removeUserFromSpace)

//------------------------------------------------------//DELETEroutes\\---------------------------------------------------------
router.delete("/delete/:id",spaceController.deleteSpace)







module.exports= router;