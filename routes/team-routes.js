const express = require('express');
const {
    createTeam,
    getTeam,
    updateTeam,
    deleteTeam
} =  require('../controllers/teamController');

const router = express.Router();

router.post('/team/createTeam', createTeam);
router.get('/team/getTeam/:id', getTeam);
router.post('/team/updateTeam', updateTeam);
router.get('/team/deleteTeam/:id', deleteTeam)

module.exports = {
    routes: router
}