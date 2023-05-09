"use strict";
const { db } = require("../db");

const createUser = async (req, res, next) => {
    try {
      const data = req.body;
      const docRef = await db.collection("Users").doc(data.userId).set(data);
      const resMsg = "[SERVER] createUser: User added successfully"; 
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
    const resMsg = "[Server] deleteUser: User deleted successfully"; 
    res.send(resMsg);
  } catch (err) {
    res.status(400).send(err.message);
  }
};



  // Exporting functions
  module.exports = {
    createUser,
    getUser,
    deleteUser
};