const schedule = require('../services/schedule.service')
const scheduleController = async (req,res)=>{
    try {
        const scheduleData = req.body;
        const newSchedule = await schedule.createSchedule(scheduleData);
        return res.status(200).json(newSchedule);
    } catch (error) {
        return res.status(500).json({message:"Lo sentimos ha ocurrido un problema"});
    }
}

const scheduleDeltation = async (req,res)=>{
    try {
        const {idOwner} = req.params;
        const deletation = await schedule.deleteSchedule(idOwner)
        return res.status(200).json(deletation);
    } catch (error) {
        return res.status(500).json({message:"Lo sentimos ha ocurrido un problema al eliminar la reserva"});
    }
    

}

const getAllData = async (_,res) =>{
    try {
        const scheduleData = await schedule.data();
        return res.status(200).json(scheduleData);
    } catch (error) {
        return res.status(500).json({message:"Lo sentimos ha ocurrido un problema"});
    }
}

const getScheduleController = async (req,res) =>{
    try {
        const {idOwner}= req.params;
        const getSchedule = await schedule.getSheduleService(idOwner)
        return res.status(200).json(getSchedule);
    } catch (error) {
        return res.status(500).json({message:"Lo sentimos ha ocurrido un problema"});
    }
}

const updateScheduleController = async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        console.log("aqui estoy")
        const updatedSchedule = await schedule.updateScheduleSevice(id, data);
        return res.status(200).json(updatedSchedule);
    } catch(error){
        console.log(error);
        return res.status(500).json({message: 'Lo sentimos, ha ocurrido un problema'});
    }
};

module.exports= {scheduleController, scheduleDeltation,getAllData, getScheduleController,updateScheduleController};