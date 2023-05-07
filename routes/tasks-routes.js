const express = require('express');
const { 
    createTask, 
    getTask,
    deleteTask
} =  require('../controllers/tasksController');

const router = express.Router();

router.post('/tasks/createTask', createTask);
router.get('/tasks/getTask/:id', getTask);
router.get('tasks/deleteTask/:id', deleteTask);


module.exports = {
    routes: router
}