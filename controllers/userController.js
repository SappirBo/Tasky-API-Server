"use strict";
const { db } = require("../db");

const createUser = async (req, res, next) => {
    try {
      console.log("[Server] createUser: new user");
      const data = req.body;
      await db.collection("Users").doc(data.userId).set(data);
      res.send("User added successfully");
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



  // Exporting functions
  module.exports = {
    createUser,
    getUser
};