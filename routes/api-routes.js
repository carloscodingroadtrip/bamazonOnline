const express = require('express');
const router = express.Router();

// API home page
router.get('/', (req,res)=>{
    res.render('./api/index');
});

module.exports = router;