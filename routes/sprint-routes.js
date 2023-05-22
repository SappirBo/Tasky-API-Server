const express = require('express');
const {
    createSprint,
    getSprint,
    updateSprint,
    deleteSprint
} =  require('../controllers/sprintController');

const router = express.Router();

router.post('/sprint/createSprint'   , createSprint);
router.get('/sprint/getSprint/:id'   , getSprint   );
router.post('/sprint/updateSprint'   , updateSprint);
router.get('/sprint/deleteSprint/:id', deleteSprint)

module.exports = {
    routes: router
}