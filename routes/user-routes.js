const express = require('express');
const { 
        // userController Functions here.
        createUser,
        getUser
} =  require('../controllers/userController');

const router = express.Router();

// router.post('/barber',addBarber);//write
// router.get('/barber/:id',getBarber);//read
// router.get('/barbers',getBarberList)
// router.post('/barber/:id/workdays', updateBarberWorkingDays);
// router.get('/barber/:id/workdays', getBarberWorkingDays);
// router.post('/barber/:id/firstentry',updateFirstEntry);
// router.get('/barbersdata',getBarbersData);
// router.post('/barber/:id/address', updateBarberAddress);

router.post('/users/createUser', createUser);
router.get('/users/getUser/:id', getUser);


module.exports = {
    routes: router
}