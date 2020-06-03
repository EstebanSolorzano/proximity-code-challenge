import * as csvToJson from 'csvtojson';
import clientConfigurations from '../../common/clientConfiguration';
import Car from '../../common/carModel'

export class BudgetService {
    //Receives the client name who sent the file and the file name to process
    async processCarInfoFromCSV(clientName, csvFilePath): Promise<any> {
        //gets the configuration object
        const clientConfiguration = clientConfigurations.getConfiguration(clientName);
        //setup the options for the csvtojson converter
        const csvConverterOptions = {
            delimiter: clientConfiguration.delimiter,
            trim: true,
        }
        //call to csvToJson converter and turn CSV file to json
        const carInfoArray = await csvToJson(csvConverterOptions).fromFile(`${process.cwd()}/uploads/${csvFilePath}`);
        //removes the unwanted fields from the json objects
        carInfoArray.forEach(car => {
            clientConfiguration.excludedFields.forEach(field => {
                delete car[field]
            });
        });
        //saves information to mongo
        for (let car of carInfoArray) {
            const newCar = new Car(car);
            try {
                await newCar.save();
            } catch (err) {
                console.error(err);
            }
        }
    }
}


export default new BudgetService();