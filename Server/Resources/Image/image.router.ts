import express from 'express'
const controller = require('./image.controller')
const ImageRouter = express.Router()
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads')
    }, filename: function(req, file, cb){
        cb(null, Math.floor(Math.random() * 2000) + file.originalname)
    }
})

const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(null, false)
        }
    }
});

ImageRouter
.post('/uploadImage', upload.single('image'), controller.uploadImage)
.get('./getImage/:id', controller.getImage)

export default ImageRouter