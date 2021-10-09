const scheduleService = require('../services/schedule.service');

const scheduleController = async (req, res) => {
  try {
    const scheduleData = req.body;
    const newSchedule = await scheduleService.createSchedule(scheduleData);
    return res.status(200).json(newSchedule);
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos ha ocurrido un problema' });
  }
};

const scheduleDeltation = async (req, res) => {
  try {
    const { scheduleId } = req.params;
    const deletation = await scheduleService.deleteSchedule(scheduleId);
    return res.status(200).json(deletation);
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos ha ocurrido un problema al eliminar la reserva' });
  }
};

const getAllData = async (_, res) => {
  try {
    const scheduleData = await scheduleService.data();
    return res.status(200).json(scheduleData);
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos ha ocurrido un problema' });
  }
};

const getScheduleController = async (req, res) => {
  try {
    const { scheduleId } = req.params;
    const getSchedule = await scheduleService.getSheduleService(scheduleId);
    return res.status(200).json(getSchedule);
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos ha ocurrido un problema' });
  }
};

const updateScheduleController = async (req, res) => {
  try {
    const { scheduleId } = req.params;
    const schedule = req.body;
    console.log(schedule);
    const updatedSchedule = await scheduleService.updateScheduleSevice(scheduleId, schedule);
    return res.status(200).json(updatedSchedule);
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

module.exports = { scheduleController, scheduleDeltation, getAllData, getScheduleController, updateScheduleController };
