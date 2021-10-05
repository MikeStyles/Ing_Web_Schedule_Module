const scheduleRepository  = require('../repository/schedule.repository');

const createSchedule = async (data)=>{
    const newSchedule = await scheduleRepository.AddScheduleRepository(data);
    return newSchedule;
}


const deleteSchedule = async idOwner=>{
    const newSchedule = await scheduleRepository.deleteScheduleRepository(idOwner);
    return newSchedule
} 

module.exports = {createSchedule,deleteSchedule};