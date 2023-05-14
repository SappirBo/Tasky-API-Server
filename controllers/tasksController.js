"use strict";
const { db } = require("../db");

const createTask = async (req, res, next) => {
    try {
      console.log("[Server] createTast: Creating new task.");
      const data = req.body;
      // Creating the new Task.
      const ref = await db.collection("Tasks").add(data);
      // Updating the task with the new Task ID.
      await db.collection("Tasks").doc(ref.id).update({"task_id":ref.id });
      res.send(`[Server] createTast: Task ${ref.id} added successfully`);
    } catch (err) {
      res.status(400).send(err.message);
    }
};

const getTasksHelper = async (task_id) => {
  const taskData = await db.collection("Tasks").doc(task_id).get();
  return taskData.data();
};

const getTask = async (req, res, next) => {
  const task_id = req.params.id; // Get the tasks ID.
  try {
    const taskData = await getTasksHelper(task_id);
    res.send(taskData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteTask = async (req, res, next) => {
    try {
      const taskId = req.params.id;
      await db.collection("Tasks").doc(taskId).delete();
      res.send(`[Server] deleteTask: Task ${taskId} deleted successfully`);
    } catch (err) {
      res.status(400).send(err.message);
    }
};

const updateTask = async(req,res, next) =>{
  try{
    const data = req.body;
    const task_id = data.task_id;
    const docRef = await db.collection("Tasks").doc(task_id);
    const updateRef = await docRef.update(data);
    res.send(`[Server] updateTask: Task ${task_id} Updated Successfully`);
  }catch(err){
    res.status(400).send(err.message);
  }
};

/**
 * Add:
 * 1. get all tasks
 * 2. get all tasks by user id
 * 3. get all tasks by team id
 * 4. delete all tasks.
 * 5. delete all tasks by user id
 * 6. delete all tasks by team id
 * 
 */


  // Exporting functions
  module.exports = {
    createTask,
    getTask,
    deleteTask,
    updateTask
};