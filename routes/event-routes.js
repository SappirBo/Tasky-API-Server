const express = require('express');
const { 
    createEvent, 
    getEvent,
    deleteEvent,
    updateEvent,
    getEventsByUserId
} =  require('../controllers/eventController');

const router = express.Router();

router.post('/event/createEvent', createEvent);
router.post('/event/updateEvent', updateEvent);
router.get('/event/getEvent/:id', getEvent);
router.get('/event/deleteEvent/:id',       deleteEvent);
router.get('/event/getAllEventsByUID/:id', getEventsByUserId);



module.exports = {
    routes: router
}