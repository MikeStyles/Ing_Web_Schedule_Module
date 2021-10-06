const scheduleRepository  = require('../repository/schedule.repository');

const createSchedule = async (data)=>{
    const newSchedule = await scheduleRepository.AddScheduleRepository(data);
    return newSchedule;
}


const deleteSchedule = async idOwner =>{
    const newSchedule = await scheduleRepository.deleteScheduleRepository(idOwner);
    return newSchedule
} 

const data = async () =>{
    const newSchedule = await scheduleRepository.getData();
    return newSchedule
}

const getSheduleService = async idOwner =>{
    const newSchedule = await scheduleRepository.getSchedule(idOwner);
    return newSchedule
}

const updateScheduleSevice = async (id,data) =>{
    const { idOwner, idPet, serviceName, startDate, finishDate, cost } = data;
    if (idOwner === '' || idPet === '' || serviceName === '' || startDate === '' || finishDate === '' || cost === ''){
        console.log("La informacion de la mascota debe estar completa, no deje campos vacios");
    }

    return await scheduleRepository.updateSchedule(id, data);
}



module.exports = {createSchedule,deleteSchedule,data, getSheduleService,updateScheduleSevice};