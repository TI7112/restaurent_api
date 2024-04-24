const multer = require('multer')
const path = require('path')

const menuthumbnailstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/uploads/menu')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname) )
    }
})

const poststorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/uploads/post')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname) )
    }
})

const storystorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/uploads/story')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname) )
    }
})

exports.thumbnailupload = multer({ storage: menuthumbnailstorage })
exports.postupload = multer({ storage: poststorage })
exports.storyupload = multer({ storage: storystorage })