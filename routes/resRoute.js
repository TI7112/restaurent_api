const express = require('express');
const { addRestaurent, getRestaurentById, deleteRestaurent, getRestaurents } = require('../controller/resController');
const router = express.Router();


// *********************************post route****************************************

router.post('/add' , addRestaurent)
router.get('/get', getRestaurents)
router.post('/get-by-id', getRestaurentById)
router.post('/delete', deleteRestaurent)

module.exports = router;