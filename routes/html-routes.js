const express = require('express');
const router = express.Router();

// -------- Homepage route
router.get('', (req,res) => {
    const title='Welcome to { bAmazon }';
    res.render('index', {title: title });
});

module.exports = router;