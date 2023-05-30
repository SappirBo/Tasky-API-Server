"use strict";
const { db } = require("../db");

const createEvent = async (req, res, next) => {
    try {
      const data = req.body;
      const ref = await db.collection("Events").add(data);
      await db.collection("Events").doc(ref.id).update({"event_id":ref.id });
      res.send(`[Server] createEvent: Event ${ref.id} added successfully`);
    } catch (err) {
      res.status(400).send(err.message);
    }
};

const getEventHelper = async (event_id) => {
  const eventData = await db.collection("Events").doc(event_id).get();
  return eventData.data();
};

const getEvent = async (req, res, next) => {
  const event_id = req.params.id; // Get the tasks ID.
  try {
    const eventData = await getEventHelper(event_id);
    res.send(eventData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteEvent = async (req, res, next) => {
    try {
      const eventId = req.params.id;
      await db.collection("Events").doc(eventId).delete();
      res.send(`[Server] deleteEvent: Event ${eventId} deleted successfully`);
    } catch (err) {
      res.status(400).send(err.message);
    }
};

const updateEvent = async(req,res, next) =>{
  try{
    const data = req.body;
    const event_id = data.event_id;
    const docRef = await db.collection("Events").doc(event_id);
    const updateRef = await docRef.update(data);
    res.send(`[Server] updateEvent: Event ${event_id} Updated Successfully`);
  }catch(err){
    res.status(400).send(err.message);
  }
};

const getEventsByUserId = async (req, res, next) => {
  const user_id = req.params.id; // Get the user ID from the request parameters.
  try {
    const eventsSnapshot = await db.collection('Events').where('uid', '==', user_id).get();
    const eventsData = [];
    
    eventsSnapshot.forEach((doc) => {
      eventsData.push(doc.data());
    });

    res.send(eventsData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};



/**
 * Add:
 * 1. get all Events
 * 2. get all Events by user id
 * 3. get all Events by team id
 * 
 */


  // Exporting functions
  module.exports = {
    createEvent,
    getEvent,
    deleteEvent,
    updateEvent,
    getEventsByUserId
};