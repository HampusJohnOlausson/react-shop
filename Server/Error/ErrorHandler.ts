import { Request, Response, NextFunction} from 'express';
const ErrorApi = require('./ErrorApi');

export type ErrorRequestHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => void;

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {

    if(err instanceof ErrorApi){
        res.status(err.code).json(err.message);
        return;
    }

    res.status(500).json('Something went wrong');
}

export default errorHandler;
