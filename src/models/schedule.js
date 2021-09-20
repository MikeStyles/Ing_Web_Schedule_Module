const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    idOwner: String,
    idPet: String,
    serviceName: String,
    startDate: String,
    finishDate: String,
    cost: String
});

module.exports = mongoose.model('Schedule', ScheduleSchema);

