"use strict";
const { db } = require("../db");

const createSprint = async (req, res, next) => {
    try {
      const data = req.body;
      // Adding team to Firebase.
      const ref = await db.collection("Sprint").add(data);
      // Adding doc ID to the team.
      await db.collection("Sprint").doc(ref.id).update({"sprint_id":ref.id });
      const resMsg = `[SERVER] createSprint: Sprint ${ref.id} added successfully`; 
      res.send(resMsg);
    } catch (err) {
      res.status(400).send(err.message);
    }
};

const getSprintHelper = async (sprint_Id) => {
    const userData = await db.collection("Sprint").doc(sprint_Id).get();
    return userData.data();
  };

const getSprint = async (req, res, next) => {
    const sprint_Id = req.params.id;
    try {
      const sprintData = await getSprintHelper(sprint_Id);
      res.send(sprintData);
    } catch (error) {
      res.status(400).send(error.message);
    }
};


const updateSprint = async(req,res, next) =>{
  try{
    const data = req.body;
    const sprint_id = data.sprint_id;
    const docRef = await db.collection("Sprint").doc(sprint_id);
    const upRef  = await docRef.update(data);
    res.send(`[Server] updateTask: Task ${sprint_id} Updated Successfully`);
  }catch(err){
    res.status(400).send(err.message);
  }
};


const deleteSprint = async (req, res, next) => {
  try {
    const sprint_id = req.params.id;
    await db.collection("Sprint").doc(id).delete();
    res.send(`[Server] deleteSprint: Sprint ${sprint_id} deleted successfully`);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Exporting functions
module.exports = {
    createSprint,
    getSprint,
    updateSprint,
    deleteSprint
};