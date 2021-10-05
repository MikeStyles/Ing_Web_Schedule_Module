const express = require('express')
const router= express.Router();
const scheduleController=require("../controllers/schedule.controller")


router.get('/',(req,res)=>{
    res.render('index');
});

router.post('/add', scheduleController.scheduleController)

router.delete('/delete/:idOwner',scheduleController.scheduleDeltation)

module.exports=router;



