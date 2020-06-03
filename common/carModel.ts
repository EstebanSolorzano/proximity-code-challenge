import * as Mongoose from 'mongoose';

export interface ICar extends Mongoose.Document {
    UUID: String;
    VIN: String;
    Make: String;
    Model: String;
    Mileage: Number;
    Year: String;
    Price: Number;
    'Zip Code': String;
    'Create Date': Date;
    'Update Date': Date;
}

const CarSchema: Mongoose.Schema = new Mongoose.Schema({
    UUID: { type: String, required: true },
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
export default Mongoose.model<ICar>('Car', CarSchema);