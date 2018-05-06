const express = require('express');
const router = express.Router();

// API home page
router.get('/', (req,res)=>{
    res.send('API page to be worked on!');
});

module.exports = router;