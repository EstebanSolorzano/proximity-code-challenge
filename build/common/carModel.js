"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const CarSchema = new Mongoose.Schema({
    UUID: { type: String, required: true, unique: true },
    VIN: { type: String, required: false },
    Make: { type: String, required: false },
    Model: { type: String, required: false },
    Mileage: { type: Number, required: false },
    Year: { type: String, required: false },
    Price: { type: Number, required: false },
    'Zip Code': { type: String, required: false },
    'Create Date': { type: Date, required: false },
    'Update Date': { type: Date, required: false },
});
// Export the model and return ICar interface
exports.default = Mongoose.model('Car', CarSchema);
//# sourceMappingURL=carModel.js.map