const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema(
    {
    idPet: String,
    serviceName: String,
    startDate: Date,
    finishDate: Date,
    cost: String,
    status:{
        type: String,
        default: "Activo"
    },
    news: {
        type: String,
        default:""
    }
    }
);



module.exports = mongoose.model('Schedule', ScheduleSchema);

