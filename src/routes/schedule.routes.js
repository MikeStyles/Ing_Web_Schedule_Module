const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/schedule.controller');
const { verifyAdminRole } = require('../middlewares/role.middleware');
const verifyToken = require('../middlewares/token.middleware');

router.get('/', verifyToken, scheduleController.getAllData);
router.post('/', verifyToken, scheduleController.scheduleController);
router.delete('/:scheduleId', verifyToken, scheduleController.scheduleDeltation);
router.get('/:scheduleId', verifyToken, scheduleController.getScheduleController);
router.put('/:scheduleId', verifyToken, scheduleController.updateScheduleController);

module.exports = router;
