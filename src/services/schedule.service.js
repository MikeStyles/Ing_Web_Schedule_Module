const scheduleRepository = require('../repository/schedule.repository');

const createSchedule = async data => {
  const newSchedule = await scheduleRepository.AddScheduleRepository(data);
  return newSchedule;
};

const deleteSchedule = async idOwner => {
  const newSchedule = await scheduleRepository.deleteScheduleRepository(idOwner);
  return newSchedule;
};

const data = async () => {
  const newSchedule = await scheduleRepository.getData();
  return newSchedule;
};

const getSheduleService = async idOwner => {
  const newSchedule = await scheduleRepository.getSchedule(idOwner);
  return newSchedule;
};

const updateScheduleSevice = async (id, data) => {
  const updatedSchedule = await scheduleRepository.updateSchedule(id, data);
  return updatedSchedule;
};

module.exports = { createSchedule, deleteSchedule, data, getSheduleService, updateScheduleSevice };
