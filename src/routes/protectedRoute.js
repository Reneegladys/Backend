const express = require('express'); 
const { createEvent }  = require('../controllers/authController'); 

const router = express.Router();

// Protected route to post events
router.post('/events', createEvent); 

module.exports = router;
