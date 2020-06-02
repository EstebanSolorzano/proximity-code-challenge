import * as csvToJson from 'csvtojson';
import clientConfigurations from '../../common/clientConfiguration';
import Car from '../../common/carModel'

export class BudgetService {

    async processCarInfoFromCSV(clientName, csvFilePath): Promise<any> {
        const clientConfiguration = clientConfigurations.getConfiguration(clientName);
        const csvConverterOptions = {
            delimiter: clientConfiguration.delimiter,
            trim: true,
        }
        const carInfoArray = await csvToJson(csvConverterOptions).fromFile(`${process.cwd()}/uploads/${csvFilePath}`);
        carInfoArray.forEach(car => {
            clientConfiguration.excludedFields.forEach(field => {
                delete car[field]
            });
        });

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