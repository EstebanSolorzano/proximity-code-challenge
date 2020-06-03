import { Request, Response } from 'express';
import ErrorHandlerService from '../services/error.handler.service';
import carService from '../services/cars.service';

export class Controller {
  //POST endpoint
  //In: ClientName: name of the client who sends the file
  //    csvFilePath: name of the uploaded CSV file
  //Calls the function that processes the file
  processCarInfoFromCSV(req: Request, res: Response) {
    const clientName = req.body.clientName;
    const csvFilePath = req.body.csvFilePath;
    //Validation that both pieces of information are sent
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
