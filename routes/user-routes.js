const express = require('express');
const { 
        createUser,
        getUser,
        deleteUser,
        updateUser
} =  require('../controllers/userController');

const router = express.Router();


router.post('/user/createUser', createUser);
router.get('/user/getUser/:id', getUser);
router.get('/user/deleteUser/:id', deleteUser);
router.post('/user/updateUser', updateUser);


module.exports = {
    routes: router
}