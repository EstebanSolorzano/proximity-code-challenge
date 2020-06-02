import { Application } from 'express';
import carsRouter from '../api/carsInfo/router';

export default function routes(app: Application): void {
  app.use('/api/v1/cars', carsRouter);
}
