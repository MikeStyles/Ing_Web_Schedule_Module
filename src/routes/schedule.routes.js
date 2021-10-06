const express = require('express')
const router= express.Router();
const scheduleController=require("../controllers/schedule.controller")

router.get('/',scheduleController.getAllData)
router.post('/', scheduleController.scheduleController)
router.delete('/:idOwner',scheduleController.scheduleDeltation)
router.get('/:idOwner',scheduleController.getScheduleController)
router.put('/:id',scheduleController.updateScheduleController)


module.exports=router;



