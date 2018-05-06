const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('./api/index');
});

module.exports = router;