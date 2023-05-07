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



  // Exporting functions
  module.exports = {
    createUser
};