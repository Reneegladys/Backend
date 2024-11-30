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

const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { name, location, date } = req.body; 
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            id, 
            { name, location, date }, 
            { new: true } 
        );
        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(updatedEvent);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error'); 
    }
};

const deleteEvent = async (req, res) => {
    const { id } = req.params; 
    try {
        const deletedEvent = await Event.findByIdAndDelete(id);
        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully', event: deletedEvent });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error'); 
    }
};

module.exports = { createEvent, getEvents, updateEvent, deleteEvent };
