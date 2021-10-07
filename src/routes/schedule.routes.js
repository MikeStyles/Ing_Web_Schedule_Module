const express = require('express')
const router= express.Router();
const scheduleController=require("../controllers/schedule.controller");
const { verifyAdminRole } = require('../middlewares/role.middleware');
const verifyToken = require('../middlewares/token.middleware');

router.get('/',verifyToken,scheduleController.getAllData)
router.post('/', verifyToken,scheduleController.scheduleController)
router.delete('/:idOwner',verifyToken,scheduleController.scheduleDeltation)
router.get('/:idOwner',verifyToken,scheduleController.getScheduleController)
router.put('/:id',verifyToken,scheduleController.updateScheduleController)


module.exports=router;



