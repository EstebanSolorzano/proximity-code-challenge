"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetService = void 0;
const csvToJson = require("csvtojson");
const clientConfiguration_1 = require("../../common/clientConfiguration");
const carModel_1 = require("../../common/carModel");
class BudgetService {
    async processCarInfoFromCSV(clientName, csvFilePath) {
        const clientConfiguration = clientConfiguration_1.default.getConfiguration(clientName);
        const csvConverterOptions = {
            delimiter: clientConfiguration.delimiter,
            trim: true,
        };
        const carInfoArray = await csvToJson(csvConverterOptions).fromFile(`${process.cwd()}/uploads/${csvFilePath}`);
        carInfoArray.forEach(car => {
            clientConfiguration.excludedFields.forEach(field => {
                delete car[field];
            });
        });
        for (let car of carInfoArray) {
            const newCar = new carModel_1.default(car);
            try {
                await newCar.save();
            }
            catch (err) {
                console.error(err);
            }
        }
    }
}
exports.BudgetService = BudgetService;
exports.default = new BudgetService();
//# sourceMappingURL=cars.service.js.map