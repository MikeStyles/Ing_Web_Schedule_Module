const express = require('express')
const router= express.Router();
const scheduleController=require("../controllers/schedule.controller")


router.get('/',(req,res)=>{
    res.render('index');
});

router.post('/add', scheduleController.scheduleController)

router.get('/delete/:id',)

module.exports=router;


