const express = require('express');
const projectController= require("../controller/projectController");



const router = express.Router();




//------------------------------------------------------//POSTroutes\\---------------------------------------------------------
router.post('/newProject',projectController.newProject);
//------------------------------------------------------//GETroutes\\---------------------------------------------------------
router.get('/:id',projectController.showProject);
router.get('/',projectController.showProjects);
//------------------------------------------------------//PUTroutes\\---------------------------------------------------------
router.put('/:id',projectController.updateProjects);
//------------------------------------------------------//DELETEroutes\\---------------------------------------------------------
router.delete('/delete/:id',projectController.deleteProject);






module.exports = router;