const express = require('express');
const { 
        createUser,
        getUser,
        deleteUser,
        updateUser
} =  require('../controllers/userController');

const router = express.Router();


router.post('/users/createUser', createUser);
router.get('/users/getUser/:id', getUser);
router.get('/users/deleteUser/:id', deleteUser);
router.post('/users/updateUser', updateUser);


module.exports = {
    routes: router
}