const Schedule = require('../models/schedule');

const AddScheduleRepository = async data => {
  try {
    const schedule = new Schedule(data);
    return await schedule.save();
  } catch (error) {
    throw new Error();
  }
};

const deleteScheduleRepository = async idOwner => {
  try {
    return await Schedule.findByIdAndDelete(idOwner);
  } catch (error) {
    throw new Error();
  }
};

const getData = async () => {
  try {
    return await Schedule.find();
  } catch (error) {
    throw new Error();
  }
};

const getSchedule = async idOwner => {
  try {
    return await Schedule.findById(idOwner);
  } catch (error) {
    throw new Error();
  }
};

const updateSchedule = async (id, data) => {
  try {
    return await Schedule.findByIdAndUpdate(id, data, {
      new: true,
    });
  } catch (error) {
    throw new Error();
  }
};

module.exports = { AddScheduleRepository, deleteScheduleRepository, getData, getSchedule, updateSchedule };
