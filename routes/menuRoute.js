const express = require('express');
const { addMenu ,deleteMenu , getMenu } = require('../controller/menuController');
const { thumbnailupload } = require('../config/multer');
const router = express.Router();


// *********************************post route****************************************

router.get('/add', thumbnailupload.single('profile') , addMenu)
router.get('/get', getMenu)
router.post('/delete', deleteMenu)

module.exports = router;