"use strict";
const { db } = require("../db");

const createUser = async (req, res, next) => {
    try {
      const data = req.body;
      const uid = data.user_id;
      //adding user to the db by the token number as id
      const docRef = await db.collection("Users").doc(uid).set(data);
      // adding the token number as a argument
      await db.collection("Users").doc(uid).update({"user_id": uid});
      const resMsg = `[SERVER] createUser: User ${uid} added successfully`; 
      res.send(resMsg);
    } catch (err) {
      res.status(400).send(err.message);
    }
};

const getUserHelper = async (uid) => {
  const userData = await db.collection("Users").doc(uid).get();
  return userData.data();
};

const getUser = async (req, res, next) => {
  const uid = req.params.id;
  try {
    const userData = await getUserHelper(uid);
    res.send(userData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const uid = req.params.id;
    await db.collection("Users").doc(uid).delete();
    const resMsg = `[Server] deleteUser: User ${uid} deleted successfully`; 
    res.send(resMsg);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateUser = async(req,res, next) =>{
  try{
    const uid = req.body.user_id;
    await db.collection("Users").doc(uid).update(req.body);
    res.send(`[Server] updateUser: User ${uid} Updated Successfully`);
  }catch(err){
    res.status(400).send(err.message);
  }
}



  // Exporting functions
  module.exports = {
    createUser,
    getUser,
    deleteUser,
    updateUser
};