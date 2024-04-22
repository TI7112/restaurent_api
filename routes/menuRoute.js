const express = require('express');
const { addMenu ,deleteMenu , getMenu } = require('../controller/menuController');
const router = express.Router();


// *********************************post route****************************************

router.get('/add', addMenu)
router.get('/get', getMenu)
router.post('/delete', deleteMenu)

module.exports = router;