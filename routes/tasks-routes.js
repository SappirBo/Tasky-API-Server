const express = require('express');
const { 
    createTask, 
    getTask,
    deleteTask,
    updateTask,
    getTasksByUid
} =  require('../controllers/tasksController');

const router = express.Router();

router.post('/task/createTask', createTask);
router.get('/task/getTask/:id', getTask);
router.get('/task/deleteTask/:id', deleteTask);
router.post('/task/updateTask', updateTask);
router.get('/task/getTaskByUid/:id', getTasksByUid);



module.exports = {
    routes: router
}