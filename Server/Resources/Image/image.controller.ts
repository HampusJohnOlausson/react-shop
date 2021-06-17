import { NextFunction, Request, Response } from "express";
const Image = require('./image.model');
const ErrorApi = require('../../Error/ErrorApi');

module.exports.uploadImage = async function(req: Request, res: Response, next: NextFunction) {
    try {
        const uploadedImage = new Image({
            Image: req.file.path
        })
        await uploadedImage.save();
        res.json(req.file.path)

    } catch (error) {
        next(ErrorApi.badRequest('Couldnt upload Image'));
    }
}

module.exports.getImage = async function(req: Request, res: Response, next: NextFunction){

    const id = req.params.id;
    const specificImage = await Image.findById(id);

    if(specificImage){
        res.status(200).json(specificImage);
    } else {
        next(ErrorApi.notFound('Couldnt find the image'));
    }
}