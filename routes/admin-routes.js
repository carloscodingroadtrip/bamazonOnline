const express = require('express');
const router = express.Router();
// Requiring our models for syncing
const db = require("../models");
db.sequelize.sync();

//*********** Admin ROUTES *************/
//Home page for the admin
router.get('/', (req, res) => {
    db.department.findAll({}).then((dept) => {
        res.render('./admin/index', {depts: dept});
    });
});

//Adding new department
router.get('/departments', (req, res) => {
    res.render('./admin/add-dept');
});

//Handling the POST method for the form ADD A DEPARTMENT
router.post('/', (req, res) => {
    var errors = [];
    if (!req.body.deptname) {
        errors.push({
            text: 'Please enter a department name.'
        });
    }
    //If there are any errors, diplay them
    if (errors.length > 0) {
        res.render('./admin/add-dept', {
            errors: errors,
            deptname: req.body.deptname,
        });
    } else {
        //Save to our DB
        console.log(db);
        db.department.create({
            name: req.body.deptname,
        }).then((dept) => {
            res.redirect('/admin');
        }).catch((err) => {
            console.log(err);
        });
    }
});


//Adding new products
router.get('/addproducts', (req, res) => {
    res.render('./admin/addprod');
});

//Adding view low inventory
router.get('/viewlowinventory', (req, res) => {
    res.render('./admin/lowinventory');
});

//Adding to inventory
router.get('/addtoinventory', (req, res) => {
    res.render('./admin/add-inventory');
});

//Sales report
router.get('/salesreport', (req, res) => {
    res.render('./admin/salesreport');
});

module.exports = router;