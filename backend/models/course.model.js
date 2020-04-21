const mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    courseName: {
        type: String
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    professor: {
        type: String
    },
    level: {
        type: String
    }
});


mongoose.model('course', courseSchema);