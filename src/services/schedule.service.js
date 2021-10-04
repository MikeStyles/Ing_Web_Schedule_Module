const scheduleRepository  = require('../repository/schedule.repository');

const createSchedule = async (data)=>{
    const newSchedule = await scheduleRepository.AddScheduleRepository(data);
    return newSchedule;
}


const deleteSchedule = async (idOwner)=>{
    
} 

module.exports = {createSchedule,deleteSchedule};