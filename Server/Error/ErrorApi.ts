
class ErrorApi extends Error {

    code: number;
    message: string;
    constructor(code: number, message: string){
        super();
        this.code = code;
        this.message = message;
    }

    static badRequest(msg: string){
        return new ErrorApi(400, msg);
    }

    static unauthorized(msg: string){
        return new ErrorApi(401, msg);
    }

    static notFound(msg: string){
        return new ErrorApi(404, msg);
    }
}

module.exports = ErrorApi;