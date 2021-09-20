const Schedule = require('../models/schedule');

const AddScheduleRepository = async (data) =>{
    try {
        const schedule =  new Schedule(data);
        return await schedule.save();
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}

module.exports = {AddScheduleRepository};