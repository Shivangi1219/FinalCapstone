"use strict";
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

//employee login with username & password check
router.post('/login', (req, res) => {
                let a = req.body.password;
                    Employee.find({
                        email: req.body.email
                    }, (err, doc) => {
                        if (a === doc[0].password) {
                            res.json(doc);
                        } else {
                            console.log("Wrong Credential");
                        }
                    });
            });

        //get employee by id
        router.get('/:id', (req, res) => {
            Employee.findById(req.params.id, (err, doc) => {
                if (!err) {
                    res.json(doc);
                }
            });
        });

        //add new employee
        router.post('/register', (req, res) => {
            insertRecord(req, res);
        });

        //delete employee by id
        router.get('/delete/:id', (req, res) => {
            Employee.findByIdAndRemove(req.params.id, (err, doc) => {
                if (!err) {
                    res.redirect('/employee/list');
                } else {
                    console.log('Error in employee delete :' + err);
                }
            });
        });

        //function to add new employee
        function insertRecord(req, res) {
            var employee = new Employee();
            employee.firstname = req.body.firstname;
            employee.lastname = req.body.lastname;
            employee.email = req.body.email;
            employee.password = req.body.password;
            employee.cpassword = req.body.cpassword;
            employee.save((doc, err) => {
                if (!err)
                    res.json(doc);
            });
        }




        module.exports = router;
