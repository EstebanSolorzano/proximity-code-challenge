"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const error_handler_service_1 = require("../services/error.handler.service");
const cars_service_1 = require("../services/cars.service");
class Controller {
    processCarInfoFromCSV(req, res) {
        const clientName = req.body.clientName;
        const csvFilePath = req.body.csvFilePath;
        if (!clientName || !csvFilePath) {
            error_handler_service_1.default.handleError(req, res, 'Must provide a client name and a file path', 400);
            return;
        }
        cars_service_1.default
            .processCarInfoFromCSV(clientName, csvFilePath)
            .then(r => res.status(200).json(r))
            .catch(err => error_handler_service_1.default.handleError(req, res, err));
    }
}
exports.Controller = Controller;
exports.default = new Controller();
//# sourceMappingURL=controller.js.map