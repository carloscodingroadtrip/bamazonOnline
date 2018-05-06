const express = require('express');
const router = express.Router();

// -------- Homepage route
router.get('', (req,res) => {
    const title='Welcome to { bAmazon }';
    res.render('index', {title: title });
});


// --------------- About route
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;