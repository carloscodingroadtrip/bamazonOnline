const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Admin page to be worked on!');
});

module.exports = router;