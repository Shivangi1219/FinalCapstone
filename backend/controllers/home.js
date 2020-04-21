const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const course = mongoose.model('course');
const employee = mongoose.model('Employee');


//get all course
router.get('/', (req, res) => {
    course.find((err, doc) => {
        if (!err) {
           res.json(doc);
        }
    });
});

// add new course
router.post('/', function (req, res) {
    
    //console.log(req.body);
    if(!req.body.courseName) {
        return res.status(400).send({
            message: "courseName can not be empty"
        });
    }
    else if(!req.body.startDate){
        return res.status(400).send({
            message: "startDate can not be empty"
        });
    }
    else if(!req.body.endDate){
        return res.status(400).send({
            message: "endDate can not be empty"
        });
    }
    else if(!req.body.professor){
        return res.status(400).send({
            message: "professor can not be empty"
        });
    }
    else if(!req.body.level){
        return res.status(400).send({
            message: "level can not be empty"
        });
    }

    var c = new course({
        courseName : req.body.courseName,
        startDate : req.body.startDate,
        endDate : req.body.endDate,
        professor : req.body.professor,
        level : req.body.level,
    });

    c.save(function(err) {
        if (err)
           throw err;
        else 
            return res.status(200).send({
            message: "Successfully Added course"
        });
    });

});


//get employee on home page
router.get('/:id', (req, res) => {
    employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.json(doc);
        }
    });
});

module.exports = router;