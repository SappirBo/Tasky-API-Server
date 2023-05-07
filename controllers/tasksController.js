"use strict";
const { db } = require("../db");

const createTask = async (req, res, next) => {
    try {
      console.log("[Server] createTast: Creating new task.");
      const data = req.body;
      await db.collection("Tasks").doc(data.userId).set(data);
      res.send("Task added successfully");
    } catch (err) {
      res.status(400).send(err.message);
    }
  };

const getTasksHelper = async (taskId) => {
  const userData = await db.collection("Tasks").doc(taskId).get();
  return userData.data();
};

const getTask = async (req, res, next) => {
  const taskId = req.params.id; // Get the tasks ID.
  try {
    const taskData = await getTasksHelper(uid);
    res.send(taskData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteTask = async (req, res, next) => {
    try {
      const taskId = req.params.id;
      await db.collection("Tasks").doc(taskId).delete();
      res.send("[Server] deleteTask: Task deleted successfully");
    } catch (err) {
      res.status(400).send(err.message);
    }
  };


  // Exporting functions
  module.exports = {
    createTask,
    getTask,
    deleteTask
};