const express = require('express');
const { 
    createEvent, 
    getEvent,
    deleteEvent,
    updateEvent
} =  require('../controllers/eventController');

const router = express.Router();

router.post('/event/createEvent', createEvent);
router.get('/event/getEvent/:id', getEvent);
router.get('/event/deleteEvent/:id', deleteEvent);
router.post('/event/updateEvent', updateEvent);



module.exports = {
    routes: router
}