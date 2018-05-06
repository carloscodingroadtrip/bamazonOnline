const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('./admin/index');
});

//********* Admin ROUTES *************/
//Adding new department
router.get('/departments', (req,res)=>{
    res.render('./admin/add-dept');
});

//Adding new products
router.get('/addproducts', (req,res)=>{
    res.render('./admin/addprod');
});

//Adding view low inventory
router.get('/viewlowinventory', (req,res)=>{
    res.render('./admin/lowinventory');
});

//Adding to inventory
router.get('/addtoinventory', (req,res)=>{
    res.render('./admin/add-inventory');
});

//Sales report
router.get('/salesreport', (req,res)=>{
    res.render('./admin/salesreport');
});

module.exports = router;