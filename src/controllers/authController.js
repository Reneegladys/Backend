const Event = require('../models/eventModel');
const jwt = require('jsonwebtoken');
 
const createEvent = async (req, res) => { 
    console.log (req.body)
    const { name, location, date } = req.body;
  
    try {
      const newEvent = new Event({ name, location, date });
      const event = await newEvent.save();
      res.status(201).json(event);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  };

module.exports = { createEvent };