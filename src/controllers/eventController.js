const Event = require('../models/eventModel');


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
  

const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events' });
    }
};



module.exports = { createEvent, getEvents, };
