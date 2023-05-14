"use strict";
const { db } = require("../db");

const createTeam = async (req, res, next) => {
    try {
      const data = req.body;
      // Adding team to Firebase.
      const ref = await db.collection("Teams").add(data);
      // Adding doc ID to the team.
      await db.collection("Teams").doc(ref.id).update({"team_id":ref.id });
      const resMsg = `[SERVER] createTeam: Team ${ref.id} added successfully`; 
      res.send(resMsg);
    } catch (err) {
      res.status(400).send(err.message);
    }
};

const getTeamHelper = async (teamId) => {
    const userData = await db.collection("Teams").doc(teamId).get();
    return userData.data();
  };

const getTeam = async (req, res, next) => {
    const teamId = req.params.id;
    try {
      const teamData = await getTeamHelper(teamId);
      res.send(teamData);
    } catch (error) {
      res.status(400).send(error.message);
    }
};


const updateTeam = async(req,res, next) =>{
  try{
    const data = req.body;
    const team_id = data.team_id;
    const docRef = await db.collection("Teams").doc(team_id);
    const upRef  = await docRef.update(data);
    res.send(`[Server] updateTask: Task ${team_id} Updated Successfully`);
  }catch(err){
    res.status(400).send(err.message);
  }
};


const deleteTeam = async (req, res, next) => {
  try {
    const team_id = req.params.id;
    await db.collection("Teams").doc(team_id).delete();
    res.send(`[Server] deleteTask: Task ${team_id} deleted successfully`);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Exporting functions
module.exports = {
    createTeam,
    getTeam,
    updateTeam,
    deleteTeam
};