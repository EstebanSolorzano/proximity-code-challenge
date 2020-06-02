import { Request, Response } from 'express';
import ErrorHandlerService from '../services/error.handler.service';
import carService from '../services/cars.service';

export class Controller {
    processCarInfoFromCSV(req: Request, res: Response) {
        const clientName = req.body.clientName;
        const csvFilePath = req.body.csvFilePath;
        if (!clientName || !csvFilePath) {
          ErrorHandlerService.handleError(
            req,
            res,
            'Must provide a client name and a file path',
            400
          );
          return;
        }
        carService
          .processCarInfoFromCSV(clientName, csvFilePath)
          .then(r => res.status(200).json(r))
          .catch(err => ErrorHandlerService.handleError(req, res, err));
      }

}
export default new Controller();
