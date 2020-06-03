import { Application } from 'express';
import carsRouter from '../api/carsInfo/router';

export default function routes(app: Application): void {
  //sets up cars router, we can add additional routers later
  app.use('/api/v1/cars', carsRouter);
}
