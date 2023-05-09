const express = require('express');
const { 
    createTask, 
    getTask,
    deleteTask,
    updateTask
} =  require('../controllers/tasksController');

const router = express.Router();

router.post('/tasks/createTask', createTask);
router.get('/tasks/getTask/:id', getTask);
router.get('/tasks/deleteTask/:id', deleteTask);
router.post('/task/updateTask', updateTask);



module.exports = {
    routes: router
}