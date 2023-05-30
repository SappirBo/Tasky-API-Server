const express = require('express');
const {
        getUser,
        deleteUser,
        updateUser
} =  require('../controllers/userController');

const router = express.Router();

router.get('/user/getUser/:id', getUser);
router.get('/user/deleteUser/:id', deleteUser);
router.post('/user/updateUser', updateUser);


module.exports = {
    routes: router
}