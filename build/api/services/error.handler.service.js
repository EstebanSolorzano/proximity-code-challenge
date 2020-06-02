"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler {
    handleError(req, res, err, statusCode = 500) {
        console.error(err);
        let message;
        if (!err) {
            message =
                statusCode === 400 ? 'Bad Request' : 'Internal Server Error';
        }
        else {
            message = err;
        }
        res.status(statusCode).json({ message });
    }
}
exports.ErrorHandler = ErrorHandler;
exports.default = new ErrorHandler();
//# sourceMappingURL=error.handler.service.js.map