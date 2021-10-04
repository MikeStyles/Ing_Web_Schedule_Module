const schedule = require('../services/schedule.service')
const scheduleController = async (req,res)=>{
    try {
        const scheduleData = req.body;
        const newSchedule = await schedule.createSchedule(scheduleData);
        return res.status(200).json(newSchedule);
    } catch (error) {
        return res.status(500).json({message:"Lo sentimos ha ocuerrido un problema"});
    }
}

const scheduleDeltation = async (req,res)=>{
    const {idOwner} = req.params
    
}

module.exports= {scheduleController, scheduleDeltation};