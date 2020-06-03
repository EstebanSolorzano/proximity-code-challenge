import { Request, Response } from 'express';

export class ErrorHandler {

    handleError(req: Request, res: Response, err: any, statusCode = 500): void {
        console.error(err);
        let message;
        if (!err) {
            message =
                statusCode === 400 ? 'Bad Request' : 'Internal Server Error';
        } else {
            message = err;
        }
        res.status(statusCode).json({ message });
    }
}
export default new ErrorHandler();
